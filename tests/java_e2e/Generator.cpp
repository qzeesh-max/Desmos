#include <fstream>
#include "JavaNativeLink/JavaGenerator.h"
#include "Point.cpp"

int main() {
    {
        std::ofstream out("Point.java");
        JNL::generate_java<Point>(out, "", "Point");
    }
    {
        std::ofstream out("VirtualBase.java");
        JNL::generate_java<VirtualBase_Trampoline>(out, "", "Point");
    }
    {
        std::ofstream out("VirtualBase_Trampoline.cpp");
        JNL::generate_cpp_trampoline<VirtualBase>(out, "VirtualBase");
    }
    return 0;
}
