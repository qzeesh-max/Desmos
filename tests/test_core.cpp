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

#define BOOST_TEST_MODULE DesmosCoreTest
#include <boost/test/included/unit_test.hpp>
#include "Desmos/Exporter.h"

struct SimpleClass {
    int value = 42;
    void increment() { value++; }
};

DESM_EXPORT_CLASS(SimpleClass)

BOOST_AUTO_TEST_CASE(registry_contains_simple_class) {
    const DesmClassRegistry* reg = DESM_GetRegistry("SimpleClass");
    BOOST_REQUIRE(reg != nullptr);
    BOOST_CHECK_EQUAL(std::string(reg->class_name), "SimpleClass");
}

BOOST_AUTO_TEST_CASE(registry_has_correct_methods) {
    const DesmClassRegistry* reg = DESM_GetRegistry("SimpleClass");
    BOOST_REQUIRE(reg != nullptr);
    BOOST_CHECK(reg->num_methods > 0);
    BOOST_CHECK(reg->num_constructors > 0);
    BOOST_CHECK(reg->num_fields == 1);
}
