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

#pragma once
#include "Desmos/Exporter.h"
#include <iostream>
#include <functional>

struct Point {
    int x;
    int y;
    std::string name;
    
    Point() : x(0), y(0), name("Unknown") { std::cout << "C++ Point created (default)\n"; }
    Point(int x, int y, std::string name = "Point") : x(x), y(y), name(name) { std::cout << "C++ Point created (" << x << ", " << y << ")\n"; }
    ~Point() { std::cout << "C++ Point destroyed\n"; }
    
    void print() { std::cout << "C++ Point print: " << x << ", " << y << ", " << name << "\n"; }
    int add(int a, int b) { return a + b; }
    
    std::string greet(Point other) {
        return "Hello " + other.name + " from " + name;
    }
    
    uint32_t multiplyUnsigned(uint32_t a, uint32_t b) { return a * b; }
    
    void incReference(int& val) {
        val += 10;
    }
    
    void crashMe() {
        throw std::runtime_error("This is an expected C++ exception!");
    }
    
    int applyCallback(int a, std::function<int(int)> cb) {
        if (cb) {
            return cb(a);
        }
        return -1;
    }
};

DESM_EXPORT_CLASS(Point);

struct VirtualBase {
    int dummy = 0;
    VirtualBase() { std::cout << "VirtualBase created\n"; }
    virtual ~VirtualBase() { std::cout << "VirtualBase destroyed\n"; }
    
    virtual int compute(int a) {
        return a * 10;
    }
    
    int callCompute(int a) {
        return compute(a);
    }
};

DESM_EXPORT_CLASS(VirtualBase);
