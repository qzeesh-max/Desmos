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
