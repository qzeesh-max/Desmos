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

import java.lang.foreign.*;
import java.lang.invoke.*;

public class PrimitiveTest {

    public static void runTest() {
        System.out.println("Starting PrimitiveTest...");
        
        try (Arena arena = Arena.ofConfined()) {
            PrimitiveTester_Trampoline tester = new PrimitiveTester_Trampoline();
            
            // DOWNCALL (Java -> C++)
            System.out.println("Testing Java->C++ primitive downcalls");
            if (tester.testInt8((byte) 10) != 11) throw new RuntimeException("testInt8 failed");
            if (tester.testUint8((short) 200) != (short) 201) throw new RuntimeException("testUint8 failed");
            if (tester.testInt16((short) 1000) != 1001) throw new RuntimeException("testInt16 failed");
            if (tester.testUint16(40000) != 40001) throw new RuntimeException("testUint16 failed");
            if (tester.testInt32(100000) != 100001) throw new RuntimeException("testInt32 failed");
            if (tester.testUint32(0xFFFFFFFBL) != 0xFFFFFFFCL) throw new RuntimeException("testUint32 failed"); // -5 as long is 0xFFFFFFFB
            if (tester.testInt64(10000000000L) != 10000000001L) throw new RuntimeException("testInt64 failed");
            if (tester.testUint64(-5L) != -4L) throw new RuntimeException("testUint64 failed");
            if (Math.abs(tester.testFloat(1.0f) - 2.5f) > 0.001) throw new RuntimeException("testFloat failed");
            if (Math.abs(tester.testDouble(1.0) - 2.5) > 0.001) throw new RuntimeException("testDouble failed");
            if (tester.testBool(true) != false) throw new RuntimeException("testBool failed");
            if (tester.testChar((byte) 'A') != (byte) 'B') throw new RuntimeException("testChar failed");
            
            System.out.println("Downcalls successful.");

            // UPCALL (C++ -> Java -> C++) via Trampoline overrides
            System.out.println("Testing C++->Java primitive upcalls via trampoline");
            
            // Create upcall stubs. FFM types must match exactly what C++ expects!
            MethodHandle cbInt8 = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallInt8", MethodType.methodType(byte.class, MemorySegment.class, byte.class));
            MethodHandle cbUint8 = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallUint8", MethodType.methodType(byte.class, MemorySegment.class, byte.class));
            MethodHandle cbInt16 = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallInt16", MethodType.methodType(short.class, MemorySegment.class, short.class));
            MethodHandle cbUint16 = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallUint16", MethodType.methodType(short.class, MemorySegment.class, short.class));
            MethodHandle cbInt32 = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallInt32", MethodType.methodType(int.class, MemorySegment.class, int.class));
            MethodHandle cbUint32 = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallUint32", MethodType.methodType(int.class, MemorySegment.class, int.class));
            MethodHandle cbInt64 = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallInt64", MethodType.methodType(long.class, MemorySegment.class, long.class));
            MethodHandle cbUint64 = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallUint64", MethodType.methodType(long.class, MemorySegment.class, long.class));
            MethodHandle cbFloat = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallFloat", MethodType.methodType(float.class, MemorySegment.class, float.class));
            MethodHandle cbDouble = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallDouble", MethodType.methodType(double.class, MemorySegment.class, double.class));
            MethodHandle cbBool = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallBool", MethodType.methodType(boolean.class, MemorySegment.class, boolean.class));
            MethodHandle cbChar = MethodHandles.lookup().findStatic(PrimitiveTest.class, "upcallChar", MethodType.methodType(byte.class, MemorySegment.class, byte.class));

            tester.set_cb_testInt8(Linker.nativeLinker().upcallStub(cbInt8, FunctionDescriptor.of(ValueLayout.JAVA_BYTE, ValueLayout.ADDRESS, ValueLayout.JAVA_BYTE), arena));
            tester.set_cb_testUint8(Linker.nativeLinker().upcallStub(cbUint8, FunctionDescriptor.of(ValueLayout.JAVA_BYTE, ValueLayout.ADDRESS, ValueLayout.JAVA_BYTE), arena));
            tester.set_cb_testInt16(Linker.nativeLinker().upcallStub(cbInt16, FunctionDescriptor.of(ValueLayout.JAVA_SHORT, ValueLayout.ADDRESS, ValueLayout.JAVA_SHORT), arena));
            tester.set_cb_testUint16(Linker.nativeLinker().upcallStub(cbUint16, FunctionDescriptor.of(ValueLayout.JAVA_SHORT, ValueLayout.ADDRESS, ValueLayout.JAVA_SHORT), arena));
            tester.set_cb_testInt32(Linker.nativeLinker().upcallStub(cbInt32, FunctionDescriptor.of(ValueLayout.JAVA_INT, ValueLayout.ADDRESS, ValueLayout.JAVA_INT), arena));
            tester.set_cb_testUint32(Linker.nativeLinker().upcallStub(cbUint32, FunctionDescriptor.of(ValueLayout.JAVA_INT, ValueLayout.ADDRESS, ValueLayout.JAVA_INT), arena));
            tester.set_cb_testInt64(Linker.nativeLinker().upcallStub(cbInt64, FunctionDescriptor.of(ValueLayout.JAVA_LONG, ValueLayout.ADDRESS, ValueLayout.JAVA_LONG), arena));
            tester.set_cb_testUint64(Linker.nativeLinker().upcallStub(cbUint64, FunctionDescriptor.of(ValueLayout.JAVA_LONG, ValueLayout.ADDRESS, ValueLayout.JAVA_LONG), arena));
            tester.set_cb_testFloat(Linker.nativeLinker().upcallStub(cbFloat, FunctionDescriptor.of(ValueLayout.JAVA_FLOAT, ValueLayout.ADDRESS, ValueLayout.JAVA_FLOAT), arena));
            tester.set_cb_testDouble(Linker.nativeLinker().upcallStub(cbDouble, FunctionDescriptor.of(ValueLayout.JAVA_DOUBLE, ValueLayout.ADDRESS, ValueLayout.JAVA_DOUBLE), arena));
            tester.set_cb_testBool(Linker.nativeLinker().upcallStub(cbBool, FunctionDescriptor.of(ValueLayout.JAVA_BOOLEAN, ValueLayout.ADDRESS, ValueLayout.JAVA_BOOLEAN), arena));
            tester.set_cb_testChar(Linker.nativeLinker().upcallStub(cbChar, FunctionDescriptor.of(ValueLayout.JAVA_BYTE, ValueLayout.ADDRESS, ValueLayout.JAVA_BYTE), arena));

            PrimitiveTester pt = new PrimitiveTester(tester.getPointer(), arena);
            
            if (pt.testInt8((byte) 10) != 12) throw new RuntimeException("testInt8 upcall failed");
            if (pt.testUint8((short) 200) != (short) 202) throw new RuntimeException("testUint8 upcall failed");
            if (pt.testInt16((short) 1000) != 1002) throw new RuntimeException("testInt16 upcall failed");
            if (pt.testUint16(40000) != 40002) throw new RuntimeException("testUint16 upcall failed");
            if (pt.testInt32(100000) != 100002) throw new RuntimeException("testInt32 upcall failed");
            if (pt.testUint32(0xFFFFFFFBL) != 0xFFFFFFFDL) throw new RuntimeException("testUint32 upcall failed");
            if (pt.testInt64(10000000000L) != 10000000002L) throw new RuntimeException("testInt64 upcall failed");
            if (pt.testUint64(-5L) != -3L) throw new RuntimeException("testUint64 upcall failed");
            if (Math.abs(pt.testFloat(1.0f) - 3.5f) > 0.001) throw new RuntimeException("testFloat upcall failed");
            if (Math.abs(pt.testDouble(1.0) - 3.5) > 0.001) throw new RuntimeException("testDouble upcall failed");
            if (pt.testBool(true) != true) throw new RuntimeException("testBool upcall failed");
            if (pt.testChar((byte) 'A') != (byte) 'C') throw new RuntimeException("testChar upcall failed");
            
            tester.close();
            System.out.println("Upcalls successful.");
        } catch (Throwable e) {
            e.printStackTrace();
            System.exit(1);
        }
        System.out.println("PrimitiveTest passed!");
    }

    public static byte upcallInt8(MemorySegment ptr, byte v) {
        return (byte)(v + 2);
    }
    public static byte upcallUint8(MemorySegment ptr, byte v) {
        short v_short = (short)(v & 0xFF);
        return (byte)(v_short + 2);
    }
    public static short upcallInt16(MemorySegment ptr, short v) {
        return (short)(v + 2);
    }
    public static short upcallUint16(MemorySegment ptr, short v) {
        int v_int = v & 0xFFFF;
        return (short)(v_int + 2);
    }
    public static int upcallInt32(MemorySegment ptr, int v) {
        return v + 2;
    }
    public static int upcallUint32(MemorySegment ptr, int v) {
        long v_long = v & 0xFFFFFFFFL;
        return (int)(v_long + 2);
    }
    public static long upcallInt64(MemorySegment ptr, long v) {
        return v + 2L;
    }
    public static long upcallUint64(MemorySegment ptr, long v) {
        return v + 2L;
    }
    public static float upcallFloat(MemorySegment ptr, float v) {
        return v + 2.5f;
    }
    public static double upcallDouble(MemorySegment ptr, double v) {
        return v + 2.5;
    }
    public static boolean upcallBool(MemorySegment ptr, boolean v) {
        return true;
    }
    public static byte upcallChar(MemorySegment ptr, byte v) {
        return (byte)(v + 2);
    }
}
