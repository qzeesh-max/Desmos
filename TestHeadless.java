public class TestHeadless {
    public static void main(String[] args) throws Exception {
        System.out.println("Creating Sorter...");
        Sorter sorter = new Sorter(10);
        System.out.println("isRunning initially: " + sorter.isRunning());
        
        System.out.println("Randomizing...");
        sorter.randomize();
        System.out.println("isRunning after randomize: " + sorter.isRunning());
        
        System.out.println("Starting Radix Sort...");
        sorter.radixSort();
        System.out.println("isRunning immediately after radixSort: " + sorter.isRunning());
        
        for (int i = 0; i < 20; i++) {
            Thread.sleep(100);
            System.out.println("isRunning after " + ((i+1)*100) + "ms: " + sorter.isRunning());
            if (!sorter.isRunning()) break;
        }
        
        System.out.println("Starting Bubble Sort...");
        sorter.bubbleSort();
        System.out.println("isRunning immediately after bubbleSort: " + sorter.isRunning());
        
        for (int i = 0; i < 20; i++) {
            Thread.sleep(100);
            System.out.println("isRunning after " + ((i+1)*100) + "ms: " + sorter.isRunning());
            if (!sorter.isRunning()) break;
        }
        
        System.out.println("Done testing!");
    }
}
