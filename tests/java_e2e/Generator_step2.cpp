#include <fstream>
#include "Desmos/JavaGenerator.h"
#include "Point.cpp"
#include "VirtualBase_Trampoline.cpp"
#include "PrimitiveTypesTest.cpp"

int main() {
    {
        std::ofstream out("VirtualBase.java");
        desm::generate_java<VirtualBase>(out, "", "Point");
    }
    {
        std::ofstream out("Point.java");
        desm::generate_java<Point>(out, "", "Point");
    }
    {
        std::ofstream out("VirtualBase_Trampoline.java");
        desm::generate_java<VirtualBase_Trampoline>(out, "", "Point"); // uses libPoint
    }
        {
        std::ofstream out("PrimitiveTester.java");
        desm::generate_java<PrimitiveTester>(out, "", "Point");
    }
    {
        std::ofstream out("PrimitiveTester_Trampoline.java");
        desm::generate_java<PrimitiveTester_Trampoline>(out, "", "Point");
    }
    return 0;
}
