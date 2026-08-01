#include <fstream>
#include "Desmos/JavaGenerator.h"
#include "Point.cpp"
#include "PrimitiveTypesTest.cpp"

int main() {
    std::ofstream out("VirtualBase_Trampoline.cpp");
    out << "#include \"Point.cpp\"\n";
    out << "#include \"PrimitiveTypesTest.cpp\"\n";
    desm::generate_cpp_trampoline<VirtualBase>(out, "VirtualBase");
        desm::generate_cpp_trampoline<PrimitiveTester>(out, "PrimitiveTester");
    return 0;
}
