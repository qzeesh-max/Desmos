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

find_package(Boost REQUIRED)
add_executable(test_core test_core.cpp)
target_include_directories(test_core PRIVATE ${Boost_INCLUDE_DIRS})
target_link_libraries(test_core PRIVATE Desmos)
add_test(NAME core_test COMMAND test_core)

# Experimental compiler feature tests
if(CMAKE_CXX_COMPILER_ID MATCHES "GNU|Clang")
    add_executable(test_inject test_inject.cpp)
    add_test(NAME inject_test COMMAND test_inject)

    add_executable(test_reflection test_reflection.cpp)
    add_test(NAME reflection_test COMMAND test_reflection)
endif()
