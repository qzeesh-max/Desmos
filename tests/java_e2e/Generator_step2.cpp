#include <fstream>
#include "JavaNativeLink/JavaGenerator.h"
#include "Point.cpp"
#include "VirtualBase_Trampoline.cpp"
#include "PrimitiveTypesTest.cpp"

int main() {
    {
        std::ofstream out("VirtualBase.java");
        JNL::generate_java<VirtualBase>(out, "", "Point");
    }
    {
        std::ofstream out("Point.java");
        JNL::generate_java<Point>(out, "", "Point");
    }
    {
        std::ofstream out("VirtualBase_Trampoline.java");
        JNL::generate_java<VirtualBase_Trampoline>(out, "", "Point"); // uses libPoint
    }
        {
        std::ofstream out("PrimitiveTester.java");
        JNL::generate_java<PrimitiveTester>(out, "", "Point");
    }
    {
        std::ofstream out("PrimitiveTester_Trampoline.java");
        JNL::generate_java<PrimitiveTester_Trampoline>(out, "", "Point");
    }
    return 0;
}
