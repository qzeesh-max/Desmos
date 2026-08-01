#include <iostream>
#include "Desmos/Exporter.h"
#include "tests/java_e2e/Point.cpp"

int main() {
    constexpr size_t NM = desm::count_methods(^^VirtualBase);
    std::cout << "VirtualBase NM = " << NM << std::endl;
    constexpr size_t NM2 = desm::count_methods(^^Point);
    std::cout << "Point NM = " << NM2 << std::endl;
    return 0;
}
