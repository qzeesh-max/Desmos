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

#include "../../include/Desmos/JavaGenerator.h"
#include <iostream>

struct Point {
    Point(int x, int y);
    void print();
    int add(int a, int b);
};

int main() {
    constexpr auto cls = ^^Point;
    constexpr size_t NC = desm::count_constructors(cls);
    constexpr auto ctors = desm::get_constructors<NC>(cls);
    std::vector<desm::JavaMethodMeta> c_metas;
    desm::fill_java_constructors<NC, ctors>(c_metas);
    for (const auto& m : c_metas) {
        std::cout << m.name << "(";
        for (const auto& p : m.params) {
            std::cout << p.type_map.java_type << " " << p.name << ", ";
        }
        std::cout << ")\n";
    }
    
    constexpr size_t NM = desm::count_methods(cls);
    constexpr auto methods = desm::get_methods<NM>(cls);
    std::vector<desm::JavaMethodMeta> m_metas;
    desm::fill_java_methods<NM, methods>(m_metas);
    for (const auto& m : m_metas) {
        std::cout << m.return_type_map.java_type << " " << m.name << "(";
        for (const auto& p : m.params) {
            std::cout << p.type_map.java_type << " " << p.name << ", ";
        }
        std::cout << ")\n";
    }
    return 0;
}
