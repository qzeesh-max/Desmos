import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SortingVisualizer extends JPanel {
    private Sorter sorter;
    private int[] array;
    
    public SortingVisualizer(Sorter sorter) {
        this.sorter = sorter;
        int size = sorter.getSize();
        this.array = new int[size];
        
        Timer timer = new Timer(16, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Poll from the lock-free array to ensure no stale updates
                for (int i = 0; i < size; i++) {
                    array[i] = sorter.getElement(i);
                }
                repaint();
            }
        });
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        
        int width = getWidth();
        int height = getHeight();
        int n = array.length;
        if (n == 0) return;
        
        double barWidth = (double) width / n;
        
        g.setColor(Color.BLACK);
        g.fillRect(0, 0, width, height);
        
        g.setColor(new Color(100, 200, 255));
        for (int i = 0; i < n; i++) {
            int val = array[i];
            // Assuming max value is 500 from the C++ generator
            int barHeight = (int)((val / 500.0) * (height - 50));
            int x = (int) (i * barWidth);
            int y = height - barHeight;
            g.fillRect(x, y, (int) Math.max(1, barWidth - 1), barHeight);
        }
    }

    public static void main(String[] args) {
        // Set native look-and-feel
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception ignored) {}

        Sorter sorter = new Sorter(200);
        sorter.randomize();

        JFrame frame = new JFrame("Sorting Visualizer (Lock-free C++ Backend)");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 600);
        frame.setLayout(new BorderLayout());

        SortingVisualizer panel = new SortingVisualizer(sorter);
        frame.add(panel, BorderLayout.CENTER);

        JPanel buttonPanel = new JPanel();
        
        JButton btnRandom = new JButton("Randomize");
        btnRandom.addActionListener(e -> {
            sorter.randomize();
        });
        
        JButton btnBubble = new JButton("Bubble Sort");
        btnBubble.addActionListener(e -> {
            sorter.bubbleSort();
        });

        JButton btnQuick = new JButton("Quick Sort");
        btnQuick.addActionListener(e -> {
            sorter.quickSort();
        });

        JButton btnRadix = new JButton("Radix Sort");
        btnRadix.addActionListener(e -> {
            sorter.radixSort();
        });

        buttonPanel.add(btnRandom);
        buttonPanel.add(btnBubble);
        buttonPanel.add(btnQuick);
        buttonPanel.add(btnRadix);
        
        frame.add(buttonPanel, BorderLayout.SOUTH);
        frame.setVisible(true);
    }
}
