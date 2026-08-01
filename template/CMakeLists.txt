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
project(Desmos_Template CXX)

if(NOT TARGET Desmos::Desmos)
    find_package(Desmos REQUIRED)
endif()

desmos_add_java_binding(MyClass
    CPP_SOURCES MyClass.cpp
    JAVA_SOURCES MyClass.java Main.java
    MAIN_CLASS Main
)
