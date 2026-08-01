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

public class Main {
    public static void main(String[] args) {
        System.out.println("Starting MyClass test...");

        // The try-with-resources block ensures the C++ destructor is called
        try (MyClass obj = new MyClass(42, "Example")) {
            obj.print();

            int result = obj.add(8);
            System.out.println("add(8) = " + result);

            String greeting = obj.greet("World");
            System.out.println(greeting);

            // Access fields via generated getters/setters
            System.out.println("value = " + obj.get_value());
            obj.set_value(100);
            System.out.println("value after set = " + obj.get_value());
            System.out.println("name = " + obj.get_name());
        }

        System.out.println("Test finished!");
    }
}
