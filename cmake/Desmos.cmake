# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published
# by the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

function(desmos_add_java_binding TARGET_NAME)
    set(options)
    set(oneValueArgs MAIN_CLASS)
    set(multiValueArgs HEADERS CPP_SOURCES JAVA_SOURCES)
    cmake_parse_arguments(DESM "${options}" "${oneValueArgs}" "${multiValueArgs}" ${ARGN})

    if(NOT DESM_CPP_SOURCES AND NOT DESM_HEADERS)
        message(FATAL_ERROR "desmos_add_java_binding requires CPP_SOURCES or HEADERS argument")
    endif()

    if(TARGET Desmos)
        set(DESM_LIBRARY Desmos)
    else()
        set(DESM_LIBRARY Desmos::Desmos)
    endif()

    find_package(Java 22 COMPONENTS Development REQUIRED)
    include(UseJava)
    find_package(Python3 3.6 REQUIRED)

    # 1. Parse and generate the Generator.cpp
    set(PARSED_GENERATOR "${CMAKE_CURRENT_BINARY_DIR}/${TARGET_NAME}_Generator.cpp")
    
    # Gather all source files to scan (make them absolute paths)
    set(FILES_TO_SCAN "")
    foreach(src IN LISTS DESM_HEADERS DESM_CPP_SOURCES)
        if(IS_ABSOLUTE ${src})
            list(APPEND FILES_TO_SCAN ${src})
        else()
            list(APPEND FILES_TO_SCAN "${CMAKE_CURRENT_SOURCE_DIR}/${src}")
        endif()
    endforeach()

    # We need to run this at configure time so CMake knows about the generated file
    execute_process(
        COMMAND ${Python3_EXECUTABLE} "${CMAKE_CURRENT_FUNCTION_LIST_DIR}/desm_parser.py" "${PARSED_GENERATOR}" ${FILES_TO_SCAN}
        RESULT_VARIABLE PARSER_RESULT
    )
    if(NOT PARSER_RESULT EQUAL 0)
        message(FATAL_ERROR "Desmos parser failed for ${TARGET_NAME}")
    endif()

    # Re-run CMake if any scanned file changes
    set_property(DIRECTORY APPEND PROPERTY CMAKE_CONFIGURE_DEPENDS ${FILES_TO_SCAN})

    # 2. Compile the generator
    set(GEN_TARGET ${TARGET_NAME}_Generator)
    add_executable(${GEN_TARGET} "${PARSED_GENERATOR}" ${DESM_CPP_SOURCES})
    target_link_libraries(${GEN_TARGET} PRIVATE ${DESM_LIBRARY})
    if(CMAKE_CXX_COMPILER_ID MATCHES "GNU|Clang")
        target_compile_options(${GEN_TARGET} PRIVATE -freflection)
    endif()

    # 2. Run the generator
    set(RUN_GEN_TARGET ${TARGET_NAME}_RunGenerator)
    # Get the library path for the generator to run successfully (it links to Desmos)
    if(APPLE)
        set(ENV_LIB_VAR "DYLD_LIBRARY_PATH")
        set(ENV_PATH_SEP ":")
    elseif(WIN32)
        set(ENV_LIB_VAR "PATH")
        set(ENV_PATH_SEP "$<SEMICOLON>")
    else()
        set(ENV_LIB_VAR "LD_LIBRARY_PATH")
        set(ENV_PATH_SEP ":")
    endif()

    # Find generated Java files
    set(GENERATED_JAVA_SOURCES "")
    foreach(src IN LISTS DESM_JAVA_SOURCES)
        if(NOT IS_ABSOLUTE ${src})
            if(NOT EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/${src}")
                list(APPEND GENERATED_JAVA_SOURCES "${CMAKE_CURRENT_BINARY_DIR}/${src}")
            endif()
        endif()
    endforeach()

    add_custom_command(
        OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/${TARGET_NAME}_generated.stamp ${GENERATED_JAVA_SOURCES}
        COMMAND ${CMAKE_COMMAND} -E env "${ENV_LIB_VAR}=$<TARGET_FILE_DIR:${DESM_LIBRARY}>${ENV_PATH_SEP}$ENV{${ENV_LIB_VAR}}"
                $<TARGET_FILE:${GEN_TARGET}> "${CMAKE_CURRENT_BINARY_DIR}"
        COMMAND ${CMAKE_COMMAND} -E touch ${CMAKE_CURRENT_BINARY_DIR}/${TARGET_NAME}_generated.stamp
        DEPENDS ${GEN_TARGET}
        WORKING_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}
        COMMENT "Running Desmos generator for ${TARGET_NAME}"
    )
    add_custom_target(${RUN_GEN_TARGET} DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/${TARGET_NAME}_generated.stamp)

    # 3. Compile the native shared library
    add_library(${TARGET_NAME} SHARED ${DESM_CPP_SOURCES})
    target_link_libraries(${TARGET_NAME} PRIVATE ${DESM_LIBRARY})
    if(CMAKE_CXX_COMPILER_ID MATCHES "GNU|Clang")
        target_compile_options(${TARGET_NAME} PRIVATE -freflection)
    endif()
    
    if(WIN32)
        set_target_properties(${TARGET_NAME} PROPERTIES PREFIX "")
    endif()
    # Also add -Wno-attributes to silence custom annotation warnings on older standard modes
    if(CMAKE_CXX_COMPILER_ID MATCHES "GNU|Clang")
        target_compile_options(${TARGET_NAME} PRIVATE -Wno-attributes)
    endif()
    
    # Optional: ensure generator runs first in case it modifies headers
    add_dependencies(${TARGET_NAME} ${RUN_GEN_TARGET})

    # 4. Compile Java
    set(JAVA_FULL_SOURCES "")
    foreach(src IN LISTS DESM_JAVA_SOURCES)
        if(IS_ABSOLUTE ${src})
            list(APPEND JAVA_FULL_SOURCES ${src})
        else()
            if(EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/${src}")
                list(APPEND JAVA_FULL_SOURCES "${CMAKE_CURRENT_SOURCE_DIR}/${src}")
            else()
                list(APPEND JAVA_FULL_SOURCES "${CMAKE_CURRENT_BINARY_DIR}/${src}")
            endif()
        endif()
    endforeach()
    
    # We don't know the exact names of generated Java files, but the user specifies them in JAVA_SOURCES
    # Use add_jar to build a JAR file
    set(ADD_JAR_ARGS "")
    if(DESM_MAIN_CLASS)
        set(ADD_JAR_ARGS ENTRY_POINT ${DESM_MAIN_CLASS})
    endif()
    
    add_jar(${TARGET_NAME}_Java 
        SOURCES ${JAVA_FULL_SOURCES}
        ${ADD_JAR_ARGS}
    )
    add_dependencies(${TARGET_NAME}_Java ${RUN_GEN_TARGET})
    
    # Create a convenience target to run the java program with native access enabled
    if(DESM_MAIN_CLASS)
        add_custom_target(run_${TARGET_NAME}
            COMMAND ${Java_JAVA_EXECUTABLE} --enable-native-access=ALL-UNNAMED -Djava.library.path=$<TARGET_FILE_DIR:${TARGET_NAME}>${ENV_PATH_SEP}$<TARGET_FILE_DIR:${DESM_LIBRARY}> -jar $<TARGET_PROPERTY:${TARGET_NAME}_Java,JAR_FILE>
            WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
            DEPENDS ${TARGET_NAME}_Java ${TARGET_NAME}
            COMMENT "Running ${TARGET_NAME} Java App"
            USES_TERMINAL
        )
    endif()
endfunction()
