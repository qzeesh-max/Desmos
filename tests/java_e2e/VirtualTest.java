import java.lang.foreign.Arena;
import java.lang.foreign.MemorySegment;
import java.lang.foreign.Linker;
import java.lang.foreign.FunctionDescriptor;
import java.lang.foreign.ValueLayout;
import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.invoke.MethodType;

public class VirtualTest {
    
    public static int myCompute(MemorySegment ptr, int a) {
        System.out.println("Java: myCompute called with " + a);
        if (a == 42) {
            System.out.println("Java: Throwing exception for 42");
            VirtualBase.setCppError("Java exception thrown from myCompute");
            return -1; // Dummy return value, C++ will throw runtime_error
        }
        return a * 20;
    }

    public static void runTest() throws Throwable {
        System.out.println("Starting VirtualTest...");
        try (Arena arena = Arena.ofConfined()) {
            VirtualBase_Trampoline v = new VirtualBase_Trampoline();
            VirtualBase v_base = new VirtualBase(v.getPointer(), arena);
            
            // Call without callback (calls C++ VirtualBase::compute)
            int res1 = v_base.callCompute(5);
            System.out.println("Java: callCompute(5) without override = " + res1 + " (expected 50)");
            if (res1 != 50) throw new RuntimeException("Test failed!");
            
            // Set callback
            MethodHandle cbHandle = MethodHandles.lookup().findStatic(VirtualTest.class, "myCompute", MethodType.methodType(int.class, MemorySegment.class, int.class));
            MemorySegment stub = Linker.nativeLinker().upcallStub(cbHandle, FunctionDescriptor.of(ValueLayout.JAVA_INT, ValueLayout.ADDRESS, ValueLayout.JAVA_INT), arena);
            
            v.set_cb_compute(stub);
            
            // Call with callback
            int res2 = v_base.callCompute(5);
            System.out.println("Java: callCompute(5) with override = " + res2 + " (expected 100)");
            if (res2 != 100) throw new RuntimeException("Test failed!");
            
            // Call with exception
            try {
                v_base.callCompute(42);
                System.out.println("Java: ERROR, exception was not thrown!");
                throw new RuntimeException("Test failed!");
            } catch (RuntimeException e) {
                System.out.println("Java: Caught expected exception from C++: " + e.getMessage());
                if (!e.getMessage().contains("Java exception thrown from myCompute")) {
                    throw new RuntimeException("Test failed: wrong exception message!");
                }
            }
            v.close();
        }
        System.out.println("VirtualTest passed!");
    }
}
