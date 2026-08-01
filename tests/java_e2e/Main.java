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
        System.out.println("Java: Starting advanced test...");
        try { VirtualTest.runTest(); } catch(Throwable t) { t.printStackTrace(); }
        try { PrimitiveTest.runTest(); } catch(Throwable t) { t.printStackTrace(); }
        try (Point p = new Point(100, 200, "TestPoint")) {
            p.print();
            
            // Test unsigned
            long uRes = p.multiplyUnsigned(4294967295L, 2L);
            System.out.println("Java: p.multiplyUnsigned(0xFFFFFFFF, 2) = " + uRes + " (expected 4294967294 or 0xFFFFFFFE)");
            
            // Test references
            int[] refVal = new int[]{ 5 };
            p.incReference(refVal);
            System.out.println("Java: p.incReference(5) -> " + refVal[0] + " (expected 15)");
            
            // Test Exception
            try {
                p.set_x(500);
        System.out.println("Java: p.get_x() = " + p.get_x() + " (expected 500)");
        
        System.out.println("Java: Calling crashMe()...");
                p.crashMe();
                System.out.println("Java: ERROR, crashMe() did not throw!");
            } catch (RuntimeException e) {
                System.out.println("Java: Caught expected exception: " + e.getMessage());
            }
        }
        System.out.println("Java: Test finished!");
    }
}
