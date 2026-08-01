// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

#include "Desmos/Exporter.h"
#include <iostream>
#include <string>
#include <Desmos/Annotations.h>

// =============================================================================
// MyClass - A template C++ class for Desmos
// 
// Rename this file and class to match your project.
// All public constructors, methods, and fields will be automatically
// exported to Java via C++26 reflection.
// =============================================================================

struct [[=desm::export_java{}]] MyClass {
    int value;
    std::string name;

    // Constructors (all overloads are exported)
    MyClass(int value, std::string name) : value(value), name(name) {
        std::cout << "C++ MyClass created: " << name << " = " << value << "\n";
    }

    ~MyClass() {
        std::cout << "C++ MyClass destroyed: " << name << "\n";
    }

    // Methods (all public methods are exported)
    void print() {
        std::cout << name << " = " << value << "\n";
    }

    int add(int other) {
        return value + other;
    }

    std::string greet(std::string who) {
        return "Hello " + who + " from " + name + "!";
    }
};

// Export the class to Java
DESM_EXPORT_CLASS(MyClass);
