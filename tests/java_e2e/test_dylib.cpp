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

#include <iostream>
#include <dlfcn.h>
#include "Desmos/Exporter.h"
#include <string>

struct Point {
    int x;
    int y;
    std::string name;
    
    Point() : x(0), y(0), name("Unknown") { std::cout << "C++ Point created (0, 0)\n"; }
    Point(int x, int y, std::string n = "Point") : x(x), y(y), name(n) { std::cout << "C++ Point created (" << x << ", " << y << ")\n"; }
    ~Point() { std::cout << "C++ Point destroyed\n"; }
};

void testPoint(Point p) {
    std::cout << "TestPoint: " << p.name << " at (" << p.x << ", " << p.y << ")\n";
}

int main() {
    void* handle = dlopen("./libPoint.dylib", RTLD_NOW);
    if (!handle) {
        std::cerr << "dlopen failed: " << dlerror() << "\n";
        return 1;
    }
    
    typedef const DesmClassRegistry* (*GetRegFunc)(const char*);
    GetRegFunc func = (GetRegFunc)dlsym(handle, "DESM_GetRegistry_Special");
    if (!func) {
        std::cerr << "dlsym failed: " << dlerror() << "\n";
        return 1;
    }
    std::cout << "dlsym DESM_GetRegistry address: " << (void*)func << "\n";
    
    const DesmClassRegistry* reg = func("Point");
    if (reg) {
        std::cout << "Found Point registry: " << reg->num_fields << " fields\n";
    } else {
        std::cout << "Point registry not found\n";
    }
    
    return 0;
}
