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

#include <iostream>
#include <meta>
#include <array>
#include <utility>

template<typename... Args>
void print_sizes() {
    ((std::cout << sizeof(Args) << " "), ...);
    std::cout << "\n";
}

constexpr std::array<std::meta::info, 2> types = {^^int, ^^double};

template<size_t... I>
void call_print_sizes(std::index_sequence<I...>) {
    print_sizes<typename [: types[I] :]...>();
}

int main() {
    call_print_sizes(std::make_index_sequence<2>{});
    return 0;
}
