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
