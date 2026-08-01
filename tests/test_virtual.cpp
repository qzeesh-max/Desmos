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

#include <meta>
#include <iostream>

struct Base {
    virtual void foo() {}
    void bar() {}
};

int main() {
    constexpr auto cls = ^^Base;
    for (auto mem : std::meta::members_of(cls)) {
        if (std::meta::is_function(mem) && std::meta::has_identifier(mem)) {
            std::cout << std::meta::identifier_of(mem) << " is_virtual? " << std::meta::is_virtual(mem) << "\n";
        }
    }
    return 0;
}
