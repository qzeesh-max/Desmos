public class TestHeadless2 {
    public static void main(String[] args) throws Exception {
        System.out.println("Creating Sorter (size 200)...");
        Sorter sorter = new Sorter(200);
        
        System.out.println("Randomize 1...");
        sorter.randomize();
        System.out.println("isRunning: " + sorter.isRunning());
        
        System.out.println("Bubble Sort...");
        sorter.bubbleSort();
        System.out.println("isRunning: " + sorter.isRunning());
        
        for (int i=0; i<10; i++) { Thread.sleep(500); System.out.println("Wait " + i + " isRunning: " + sorter.isRunning()); }
        
        System.out.println("Randomize 2...");
        sorter.randomize();
        System.out.println("isRunning: " + sorter.isRunning());
        
        System.out.println("Radix Sort...");
        sorter.radixSort();
        System.out.println("isRunning: " + sorter.isRunning());
        
        for (int i=0; i<10; i++) { Thread.sleep(500); System.out.println("Wait " + i + " isRunning: " + sorter.isRunning()); }
        
        System.out.println("Done!");
    }
}
