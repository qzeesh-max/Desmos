package webport;

import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.canvas.CanvasRenderingContext2D;

public class SortingVisualizer {

    private static HTMLDocument document = Window.current().getDocument();
    private static HTMLCanvasElement canvas;
    private static CanvasRenderingContext2D ctx;
    private static int arraySize = 200;

    public static void main(String[] args) {
        initUI();
        
        // Setup animation loop
        requestAnimationFrame();
    }

    private static void initUI() {
        HTMLElement container = document.getElementById("sorting-container");
        if (container == null) return;
        
        container.setInnerHTML("");

        // Controls
        HTMLButtonElement btnRandom = (HTMLButtonElement) document.createElement("button");
        btnRandom.setInnerHTML("Randomize");
        btnRandom.addEventListener("click", e -> Interop.randomize());

        HTMLButtonElement btnBubble = (HTMLButtonElement) document.createElement("button");
        btnBubble.setInnerHTML("Bubble Sort");
        btnBubble.addEventListener("click", e -> Interop.bubbleSort());

        HTMLButtonElement btnQuick = (HTMLButtonElement) document.createElement("button");
        btnQuick.setInnerHTML("Quick Sort");
        btnQuick.addEventListener("click", e -> Interop.quickSort());

        HTMLButtonElement btnRadix = (HTMLButtonElement) document.createElement("button");
        btnRadix.setInnerHTML("Radix Sort");
        btnRadix.addEventListener("click", e -> Interop.radixSort());

        HTMLElement controls = document.createElement("div");
        controls.appendChild(btnRandom);
        controls.appendChild(btnBubble);
        controls.appendChild(btnQuick);
        controls.appendChild(btnRadix);
        container.appendChild(controls);

        // Canvas for array
        canvas = (HTMLCanvasElement) document.createElement("canvas");
        canvas.setWidth(800);
        canvas.setHeight(400);
        canvas.getStyle().setProperty("background-color", "black");
        container.appendChild(canvas);

        ctx = (CanvasRenderingContext2D) canvas.getContext("2d");
        
        Interop.randomize();
    }

    private static void requestAnimationFrame() {
        Window.requestAnimationFrame(time -> {
            render();
            requestAnimationFrame();
        });
    }

    private static void render() {
        if (ctx == null) return;
        int width = canvas.getWidth();
        int height = canvas.getHeight();
        
        ctx.setFillStyle("black");
        ctx.fillRect(0, 0, width, height);
        
        int n = Interop.getSize();
        if (n <= 0) return;
        
        double barWidth = (double) width / n;
        
        ctx.setFillStyle("#64c8ff");
        for (int i = 0; i < n; i++) {
            int val = Interop.getElement(i);
            int barHeight = (int) ((val / 500.0) * (height - 50));
            int x = (int) (i * barWidth);
            int y = height - barHeight;
            ctx.fillRect(x, y, Math.max(1, barWidth - 1), barHeight);
        }
    }
}
