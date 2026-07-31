cmake_minimum_required(VERSION 3.25)
project(JavaNativeLink CXX)

set(CMAKE_CXX_STANDARD 26)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

if(CMAKE_CXX_COMPILER_ID MATCHES "GNU|Clang")
    add_compile_options(-freflection)
endif()

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})

# Core interface library
add_library(JavaNativeLink SHARED src/Exporter.cpp)
add_library(JavaNativeLink::JavaNativeLink ALIAS JavaNativeLink)

if(WIN32)
    set_target_properties(JavaNativeLink PROPERTIES PREFIX "")
endif()
target_include_directories(JavaNativeLink PUBLIC 
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)

enable_testing()
add_subdirectory(tests)

# Provide macros in-tree
list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/cmake")
include(JavaNativeLink)

# Examples and Template
option(JNL_BUILD_EXAMPLES "Build examples" ON)
if(JNL_BUILD_EXAMPLES)
    add_subdirectory(template)
    add_subdirectory(examples)
endif()

# Installation
include(CMakePackageConfigHelpers)
include(GNUInstallDirs)

install(TARGETS JavaNativeLink
    EXPORT JavaNativeLinkTargets
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
    INCLUDES DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}
)

install(DIRECTORY include/ DESTINATION ${CMAKE_INSTALL_INCLUDEDIR})

install(EXPORT JavaNativeLinkTargets
    FILE JavaNativeLinkTargets.cmake
    NAMESPACE JavaNativeLink::
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/JavaNativeLink
)

configure_package_config_file(
    ${CMAKE_CURRENT_SOURCE_DIR}/cmake/JavaNativeLinkConfig.cmake.in
    ${CMAKE_CURRENT_BINARY_DIR}/JavaNativeLinkConfig.cmake
    INSTALL_DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/JavaNativeLink
)

install(FILES 
    ${CMAKE_CURRENT_BINARY_DIR}/JavaNativeLinkConfig.cmake
    ${CMAKE_CURRENT_SOURCE_DIR}/cmake/JavaNativeLink.cmake
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/JavaNativeLink
)
