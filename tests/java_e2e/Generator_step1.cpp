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
