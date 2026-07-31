function(jnl_add_java_binding TARGET_NAME)
    set(options)
    set(oneValueArgs MAIN_CLASS)
    set(multiValueArgs HEADERS CPP_SOURCES JAVA_SOURCES)
    cmake_parse_arguments(JNL "${options}" "${oneValueArgs}" "${multiValueArgs}" ${ARGN})

    if(NOT JNL_CPP_SOURCES AND NOT JNL_HEADERS)
        message(FATAL_ERROR "jnl_add_java_binding requires CPP_SOURCES or HEADERS argument")
    endif()

    if(TARGET JavaNativeLink)
        set(JNL_LIBRARY JavaNativeLink)
    else()
        set(JNL_LIBRARY JavaNativeLink::JavaNativeLink)
    endif()

    find_package(Java 22 COMPONENTS Development REQUIRED)
    include(UseJava)
    find_package(Python3 3.6 REQUIRED)

    # 1. Parse and generate the Generator.cpp
    set(PARSED_GENERATOR "${CMAKE_CURRENT_BINARY_DIR}/${TARGET_NAME}_Generator.cpp")
    
    # Gather all source files to scan (make them absolute paths)
    set(FILES_TO_SCAN "")
    foreach(src IN LISTS JNL_HEADERS JNL_CPP_SOURCES)
        if(IS_ABSOLUTE ${src})
            list(APPEND FILES_TO_SCAN ${src})
        else()
            list(APPEND FILES_TO_SCAN "${CMAKE_CURRENT_SOURCE_DIR}/${src}")
        endif()
    endforeach()

    # We need to run this at configure time so CMake knows about the generated file
    execute_process(
        COMMAND ${Python3_EXECUTABLE} "${CMAKE_CURRENT_FUNCTION_LIST_DIR}/jnl_parser.py" "${PARSED_GENERATOR}" ${FILES_TO_SCAN}
        RESULT_VARIABLE PARSER_RESULT
    )
    if(NOT PARSER_RESULT EQUAL 0)
        message(FATAL_ERROR "JavaNativeLink parser failed for ${TARGET_NAME}")
    endif()

    # Re-run CMake if any scanned file changes
    set_property(DIRECTORY APPEND PROPERTY CMAKE_CONFIGURE_DEPENDS ${FILES_TO_SCAN})

    # 2. Compile the generator
    set(GEN_TARGET ${TARGET_NAME}_Generator)
    add_executable(${GEN_TARGET} "${PARSED_GENERATOR}" ${JNL_CPP_SOURCES})
    target_link_libraries(${GEN_TARGET} PRIVATE ${JNL_LIBRARY})
    if(CMAKE_CXX_COMPILER_ID MATCHES "GNU|Clang")
        target_compile_options(${GEN_TARGET} PRIVATE -freflection)
    endif()

    # 2. Run the generator
    set(RUN_GEN_TARGET ${TARGET_NAME}_RunGenerator)
    # Get the library path for the generator to run successfully (it links to JavaNativeLink)
    if(APPLE)
        set(ENV_LIB_VAR "DYLD_LIBRARY_PATH")
    else()
        set(ENV_LIB_VAR "LD_LIBRARY_PATH")
    endif()

    add_custom_command(
        OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/${TARGET_NAME}_generated.stamp
        COMMAND ${CMAKE_COMMAND} -E env "${ENV_LIB_VAR}=$<TARGET_FILE_DIR:${JNL_LIBRARY}>:$ENV{${ENV_LIB_VAR}}"
                $<TARGET_FILE:${GEN_TARGET}> "${CMAKE_CURRENT_BINARY_DIR}"
        COMMAND ${CMAKE_COMMAND} -E touch ${CMAKE_CURRENT_BINARY_DIR}/${TARGET_NAME}_generated.stamp
        DEPENDS ${GEN_TARGET}
        WORKING_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}
        COMMENT "Running JavaNativeLink generator for ${TARGET_NAME}"
    )
    add_custom_target(${RUN_GEN_TARGET} DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/${TARGET_NAME}_generated.stamp)

    # 3. Compile the native shared library
    add_library(${TARGET_NAME} SHARED ${JNL_CPP_SOURCES})
    target_link_libraries(${TARGET_NAME} PRIVATE ${JNL_LIBRARY})
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
    foreach(src IN LISTS JNL_JAVA_SOURCES)
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
    if(JNL_MAIN_CLASS)
        set(ADD_JAR_ARGS ENTRY_POINT ${JNL_MAIN_CLASS})
    endif()
    
    add_jar(${TARGET_NAME}_Java 
        SOURCES ${JAVA_FULL_SOURCES}
        ${ADD_JAR_ARGS}
    )
    add_dependencies(${TARGET_NAME}_Java ${RUN_GEN_TARGET})
    
    # Create a convenience target to run the java program with native access enabled
    if(JNL_MAIN_CLASS)
        add_custom_target(run_${TARGET_NAME}
            COMMAND ${Java_JAVA_EXECUTABLE} --enable-native-access=ALL-UNNAMED -Djava.library.path=$<TARGET_FILE_DIR:${TARGET_NAME}>:$<TARGET_FILE_DIR:${JNL_LIBRARY}> -jar $<TARGET_PROPERTY:${TARGET_NAME}_Java,JAR_FILE>
            DEPENDS ${TARGET_NAME}_Java ${TARGET_NAME}
            COMMENT "Running ${TARGET_NAME} Java App"
            USES_TERMINAL
        )
    endif()
endfunction()
