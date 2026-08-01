#include <fstream>
#include "Desmos/JavaGenerator.h"
#include "Point.cpp"

int main() {
    {
        std::ofstream out("Point.java");
        desm::generate_java<Point>(out, "", "Point");
    }
    {
        std::ofstream out("VirtualBase.java");
        desm::generate_java<VirtualBase_Trampoline>(out, "", "Point");
    }
    {
        std::ofstream out("VirtualBase_Trampoline.cpp");
        desm::generate_cpp_trampoline<VirtualBase>(out, "VirtualBase");
    }
    return 0;
}
