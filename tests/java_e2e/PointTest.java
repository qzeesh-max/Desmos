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

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;
import static org.junit.jupiter.api.Assertions.*;

import java.lang.foreign.Arena;
import java.lang.foreign.MemorySegment;
import java.lang.foreign.Linker;
import java.lang.foreign.FunctionDescriptor;
import java.lang.foreign.ValueLayout;
import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.invoke.MethodType;

public class PointTest {

    @BeforeAll
    public static void setup() {
        // Main.java or similar ensures library is loaded, but Point handles it in its static block.
        // Assuming java.library.path is set correctly.
    }

    @Test
    public void testPointCreationAndFields() {
        try (Arena arena = Arena.ofConfined()) {
            Point p = new Point(100, 200, "TestPoint");
            
            assertEquals(100, p.get_x());
            assertEquals(200, p.get_y());
            
            p.set_x(500);
            assertEquals(500, p.get_x());
            
            p.close();
        }
    }

    @Test
    public void testExceptionMarshalling() {
        try (Arena arena = Arena.ofConfined()) {
            Point p = new Point(0, 0, "TestPoint");
            
            RuntimeException ex = assertThrows(RuntimeException.class, () -> {
                p.crashMe();
            });
            
            assertTrue(ex.getMessage().contains("This is an expected C++ exception!"));
            p.close();
        }
    }

    @Test
    public void testUnsignedMapping() {
        try (Arena arena = Arena.ofConfined()) {
            Point p = new Point(0, 0, "TestPoint");
            long result = p.multiplyUnsigned(0xFFFFFFFFL, 2);
            assertEquals(4294967294L, result);
            p.close();
        }
    }
    
    @Test
    public void testPrimitiveReference() {
        try (Arena arena = Arena.ofConfined()) {
            Point p = new Point(0, 0, "Test");
            int[] ref = new int[]{5};
            p.incReference(ref);
            assertEquals(15, ref[0]);
            p.close();
        }
    }

    @Test
    public void testStringAndObjectByValue() {
        try (Arena arena = Arena.ofConfined()) {
            Point p1 = new Point(10, 20, "Alice");
            Point p2 = new Point(30, 40, "Bob");
            
            assertEquals("Alice", p1.get_name());
            
            p1.set_name("Alice Updated");
            assertEquals("Alice Updated", p1.get_name());
            
            String greeting = p1.greet(p2);
            assertEquals("Hello Bob from Alice Updated", greeting);
            
            p1.close();
            p2.close();
        }
    }

    @Test
    public void testCallback() throws Throwable {
        try (Arena arena = Arena.ofConfined()) {
            Point p = new Point(0, 0, "CallbackTest");
            
            MethodHandle cbHandle = MethodHandles.lookup().findStatic(PointTest.class, "myCallback", MethodType.methodType(int.class, int.class));
            MemorySegment stub = Linker.nativeLinker().upcallStub(cbHandle, FunctionDescriptor.of(ValueLayout.JAVA_INT, ValueLayout.JAVA_INT), arena);
            
            int res = p.applyCallback(10, stub);
            assertEquals(20, res); // myCallback(10) returns 20
            p.close();
        }
    }
    
    public static int myCallback(int x) {
        return x * 2;
    }
}
