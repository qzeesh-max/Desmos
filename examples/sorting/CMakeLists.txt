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
project(Desmos_Sorting CXX)

if(NOT TARGET Desmos::Desmos)
    find_package(Desmos REQUIRED)
endif()

desmos_add_java_binding(Sorter
    HEADERS Sorter.h
    CPP_SOURCES Sorter.cpp
    JAVA_SOURCES Sorter.java SortingVisualizer.java
    MAIN_CLASS SortingVisualizer
)

find_package(Threads REQUIRED)
target_link_libraries(Sorter PRIVATE Threads::Threads)
target_link_libraries(Sorter_Generator PRIVATE Threads::Threads)
