#include <meta>
#include <iostream>
struct Base { virtual void foo() {} };
int main() {
    constexpr auto cls = ^^Base;
    for (auto mem : std::meta::members_of(cls)) {
        if (std::meta::is_function(mem) && std::meta::has_identifier(mem)) {
            std::cout << std::meta::identifier_of(mem) << " is_virtual? " << std::meta::is_virtual(mem) << "\n";
        }
    }
}
