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

cmake_minimum_required(VERSION 3.25)
project(Desmos CXX)

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
add_library(Desmos SHARED src/Exporter.cpp)
add_library(Desmos::Desmos ALIAS Desmos)

if(WIN32)
    set_target_properties(Desmos PROPERTIES PREFIX "")
endif()
target_include_directories(Desmos PUBLIC 
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)

enable_testing()
add_subdirectory(tests)

# Provide macros in-tree
list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/cmake")
include(Desmos)

# Examples and Template
option(DESM_BUILD_EXAMPLES "Build examples" ON)
if(DESM_BUILD_EXAMPLES)
    add_subdirectory(template)
    add_subdirectory(examples)
endif()

# Installation
include(CMakePackageConfigHelpers)
include(GNUInstallDirs)

install(TARGETS Desmos
    EXPORT DesmosTargets
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
    INCLUDES DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}
)

install(DIRECTORY include/ DESTINATION ${CMAKE_INSTALL_INCLUDEDIR})

install(EXPORT DesmosTargets
    FILE DesmosTargets.cmake
    NAMESPACE Desmos::
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/Desmos
)

configure_package_config_file(
    ${CMAKE_CURRENT_SOURCE_DIR}/cmake/DesmosConfig.cmake.in
    ${CMAKE_CURRENT_BINARY_DIR}/DesmosConfig.cmake
    INSTALL_DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/Desmos
)

install(FILES 
    ${CMAKE_CURRENT_BINARY_DIR}/DesmosConfig.cmake
    ${CMAKE_CURRENT_SOURCE_DIR}/cmake/Desmos.cmake
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/Desmos
)
