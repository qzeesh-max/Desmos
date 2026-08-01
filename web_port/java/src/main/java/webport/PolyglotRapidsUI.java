package webport;

import org.teavm.jso.browser.Window;
import org.teavm.jso.browser.TimerHandler;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLInputElement;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.canvas.CanvasGradient;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.KeyboardEvent;
import org.teavm.jso.core.JSArrayReader;
import org.teavm.jso.dom.html.HTMLImageElement;
import org.teavm.jso.dom.html.HTMLAudioElement;
import org.teavm.jso.dom.events.Event;
import org.teavm.jso.JSBody;
import org.teavm.jso.JSProperty;
import org.teavm.jso.dom.xml.Node;
import org.teavm.jso.dom.events.Event;
import java.util.ArrayList;
import java.util.List;

interface FocusEvent extends Event {
    @JSProperty
    org.teavm.jso.dom.xml.Node getRelatedTarget();
}



public class PolyglotRapidsUI {
    private static HTMLDocument document = Window.current().getDocument();
    private static HTMLCanvasElement canvas;
    private static CanvasRenderingContext2D ctx;
    private static HTMLElement uiPanel;
    private static HTMLElement screensPanel;
    
    private static HTMLAudioElement backgroundSound;
    private static boolean soundEnabled = false;
    
    private static boolean leftPressed = false;
    private static boolean rightPressed = false;
    private static int intervalId = -1;
    
    private static final String[] LANG_CODES = {
        "en", "es", "zh", "hi", "fr", "ar", "bn", "ru", "pt", "id", 
        "ur", "de", "ja", "te", "tr", "ta", "vi", "tl", 
        "ko", "fa", "it", "th", "pl"
    };

    private static final String[] LANG_NAMES = {
        "English", "Spanish", "Mandarin", "Hindi", "French", "Arabic", "Bengali", "Russian", "Portuguese", "Indonesian",
        "Urdu", "German", "Japanese", "Telugu", "Turkish", "Tamil", "Vietnamese", "Tagalog",
        "Korean", "Persian", "Italian", "Thai", "Polish"
    };

    @JSBody(params = { "container", "child" }, script = "return container.contains(child);")
    public static native boolean containsNode(HTMLElement container, Node child);

    @JSBody(script = "return document.hidden;")
    public static native boolean isDocumentHidden();

    public static void main(String[] args) {
        initUI();
    }

    private static void initUI() {
        HTMLElement container = document.getElementById("polyglot-container");
        if (container == null) return;
        
        container.setInnerHTML("");
        
        backgroundSound = (HTMLAudioElement) document.createElement("audio");
        backgroundSound.setSrc("assets/river.wav");
        backgroundSound.setId("game-background-music");
        backgroundSound.setLoop(true);
        container.appendChild(backgroundSound);

        Window.current().addEventListener("focusin", new EventListener<FocusEvent>() {
            @Override
            public void handleEvent(FocusEvent event) {
                if (soundEnabled) {
                    backgroundSound.play();
                }
            }
        });

        Window.current().addEventListener("blur", new EventListener<FocusEvent>() {
            @Override
            public void handleEvent(FocusEvent event) {
                backgroundSound.pause();
            }
        });
        
        screensPanel = document.createElement("div");
        container.appendChild(screensPanel);
        
        showRulesScreen();
    }
    
    private static void showRulesScreen() {
        soundEnabled = false;
        if (backgroundSound != null) {
            backgroundSound.pause();
            backgroundSound.setCurrentTime(0.0);
        }
        screensPanel.setInnerHTML("");
        
        HTMLElement flexContainer = document.createElement("div");
        flexContainer.getStyle().setProperty("display", "flex");
        flexContainer.getStyle().setProperty("align-items", "center");
        flexContainer.getStyle().setProperty("justify-content", "center");
        flexContainer.getStyle().setProperty("gap", "20px");
        
        HTMLImageElement logo = (HTMLImageElement) document.createElement("img");
        logo.setSrc("assets/polyglot_logo.png");
        logo.getStyle().setProperty("max-width", "250px");
        flexContainer.appendChild(logo);

        HTMLElement rulesText = document.createElement("p");
        rulesText.setInnerHTML(
            "- Steer your raft using the LEFT and RIGHT arrow keys.<br>" +
            "- Avoid obstacles: Rocks, Logs, and Shallows damage your raft.<br>" +
            "- Hit green ramps to jump over obstacles.<br>" +
            "- Collect letters to form words from your chosen languages.<br>" +
            "- Forming valid words restores health and boosts your score.<br>" +
            "- The game gets faster the more words you find!<br><br>" +
            "<b>Note:</b> Choose from our top 23 languages! We support 6,000 words per language.<br><br>" +
            "Press 'Next' to select your languages."
        );
        rulesText.getStyle().setProperty("font-size", "18px");
        rulesText.getStyle().setProperty("margin", "0");
        flexContainer.appendChild(rulesText);
        screensPanel.appendChild(flexContainer);
        
        HTMLButtonElement nextBtn = (HTMLButtonElement) document.createElement("button");
        nextBtn.setInnerHTML("Next");
        nextBtn.addEventListener("click", new EventListener<Event>() {
            @Override
            public void handleEvent(Event evt) {
                soundEnabled = true;
                backgroundSound.play();
                showLangScreen();
            }
        });
        screensPanel.appendChild(nextBtn);
    }
    
    private static void showLangScreen() {
        
        screensPanel.setInnerHTML("");
        
        HTMLElement title = document.createElement("h2");
        title.setInnerHTML("Select Languages");
        screensPanel.appendChild(title);
        
        HTMLElement form = document.createElement("div");
        form.getStyle().setProperty("display", "grid");
        form.getStyle().setProperty("grid-template-columns", "repeat(5, 1fr)");
        form.getStyle().setProperty("gap", "4px");
        
        for (int i = 0; i < LANG_CODES.length; i++) {
            String code = LANG_CODES[i];
            String name = LANG_NAMES[i];
            
            HTMLElement div = document.createElement("div");
            div.getStyle().setProperty("display", "flex");
            div.getStyle().setProperty("align-items", "center");
            
            HTMLButtonElement btn = (HTMLButtonElement) document.createElement("button");
            btn.setId("cb_" + code); // Keep ID the same for logic
            btn.getStyle().setProperty("display", "flex");
            btn.getStyle().setProperty("align-items", "center");
            btn.getStyle().setProperty("justify-content", "center");
            btn.getStyle().setProperty("cursor", "pointer");
            btn.getStyle().setProperty("border", "2px solid #ccc");
            btn.getStyle().setProperty("border-radius", "4px");
            btn.getStyle().setProperty("background-color", "#444");
            btn.getStyle().setProperty("color", "white");
            btn.getStyle().setProperty("padding", "3px");
            btn.getStyle().setProperty("margin", "0");
            btn.getStyle().setProperty("font-size", "14px");
            
            if (code.equals("en")) {
                btn.setAttribute("data-selected", "true");
                btn.getStyle().setProperty("border-color", "#00ff00");
                btn.getStyle().setProperty("background-color", "#226622");
            } else {
                btn.setAttribute("data-selected", "false");
            }
            
            btn.addEventListener("click", e -> {
                boolean selected = "true".equals(btn.getAttribute("data-selected"));
                if (selected) {
                    btn.setAttribute("data-selected", "false");
                    btn.getStyle().setProperty("border-color", "#ccc");
                    btn.getStyle().setProperty("background-color", "#444");
                } else {
                    btn.setAttribute("data-selected", "true");
                    btn.getStyle().setProperty("border-color", "#00ff00");
                    btn.getStyle().setProperty("background-color", "#226622");
                }
            });
            
            HTMLElement img = document.createElement("img");
            img.setAttribute("src", "assets/flags/" + code + ".png");
            img.getStyle().setProperty("width", "30px");
            img.getStyle().setProperty("height", "20px");
            img.getStyle().setProperty("margin-right", "8px");
            
            HTMLElement label = document.createElement("span");
            label.setInnerHTML(name);
            
            btn.appendChild(img);
            btn.appendChild(label);
            div.appendChild(btn);
            form.appendChild(div);
        }
        screensPanel.appendChild(form);
        
        HTMLButtonElement startBtn = (HTMLButtonElement) document.createElement("button");
        startBtn.setInnerHTML("Start Rafting!");
        startBtn.getStyle().setProperty("margin-top", "10px");
        startBtn.getStyle().setProperty("padding", "8px 16px");
        startBtn.getStyle().setProperty("font-size", "16px");
        startBtn.addEventListener("click", e -> startGame());
        screensPanel.appendChild(startBtn);
    }
    
    private static void startGame() {
        List<String> langs = new ArrayList<>();
        for (String code : LANG_CODES) {
            HTMLElement cb = document.getElementById("cb_" + code);
            if (cb != null && "true".equals(cb.getAttribute("data-selected"))) {
                langs.add(code);
            }
        }
        if (langs.isEmpty()) langs.add("en");
        
        PolyglotInterop.setLanguages(String.join(",", langs));
        PolyglotInterop.startGame();
        
        setupGameScreen();
    }
    
    private static void setupGameScreen() {
        screensPanel.setInnerHTML("");
        
        HTMLElement wrapper = document.createElement("div");
        wrapper.getStyle().setProperty("display", "flex");
        
        canvas = (HTMLCanvasElement) document.createElement("canvas");
        canvas.setWidth(600); // Internal resolution remains 600x600 for game logic
        canvas.setHeight(600);
        canvas.getStyle().setProperty("width", "460px"); // Display size scaled down
        canvas.getStyle().setProperty("height", "460px");
        canvas.getStyle().setProperty("background-color", "#000");
        ctx = (CanvasRenderingContext2D) canvas.getContext("2d");
        
        HTMLElement sidebar = document.createElement("div");
        sidebar.getStyle().setProperty("width", "280px");
        sidebar.getStyle().setProperty("height", "460px"); // Constrain to canvas height!
        sidebar.getStyle().setProperty("background-color", "#333");
        sidebar.getStyle().setProperty("display", "flex");
        sidebar.getStyle().setProperty("flex-direction", "column");

        uiPanel = document.createElement("div");
        uiPanel.getStyle().setProperty("box-sizing", "border-box");
        uiPanel.getStyle().setProperty("padding", "10px");
        uiPanel.getStyle().setProperty("color", "#fff");
        uiPanel.getStyle().setProperty("flex-grow", "1");
        uiPanel.getStyle().setProperty("display", "flex");
        uiPanel.getStyle().setProperty("flex-direction", "column");
        uiPanel.getStyle().setProperty("overflow-y", "auto");
        uiPanel.getStyle().setProperty("min-height", "0");
        
        HTMLButtonElement newGameBtn = (HTMLButtonElement) document.createElement("button");
        newGameBtn.setInnerHTML("New Game");
        newGameBtn.getStyle().setProperty("margin", "10px");
        newGameBtn.getStyle().setProperty("padding", "10px");
        newGameBtn.getStyle().setProperty("cursor", "pointer");
        newGameBtn.getStyle().setProperty("background-color", "#4CAF50");
        newGameBtn.getStyle().setProperty("color", "white");
        newGameBtn.getStyle().setProperty("border", "none");
        newGameBtn.getStyle().setProperty("border-radius", "5px");
        newGameBtn.getStyle().setProperty("font-weight", "bold");
        newGameBtn.getStyle().setProperty("font-size", "16px");
        newGameBtn.addEventListener("click", e -> {
            Window.current().clearInterval(intervalId);
            intervalId = -1;
            HTMLAudioElement a = (HTMLAudioElement) document.getElementById("game-background-music");
            if (a != null) {
                a.pause();
                a.setCurrentTime(0.0);
            }
            PolyglotInterop.reset();
            showRulesScreen();
        });
        
        sidebar.appendChild(uiPanel);
        sidebar.appendChild(newGameBtn);
        
        wrapper.appendChild(canvas);
        wrapper.appendChild(sidebar);
        screensPanel.appendChild(wrapper);
        
        Window.current().addEventListener("keydown", (EventListener<KeyboardEvent>) e -> {
            if (e.getKey().equals("ArrowLeft")) leftPressed = true;
            if (e.getKey().equals("ArrowRight")) rightPressed = true;
        });
        
        Window.current().addEventListener("keyup", (EventListener<KeyboardEvent>) e -> {
            if (e.getKey().equals("ArrowLeft")) leftPressed = false;
            if (e.getKey().equals("ArrowRight")) rightPressed = false;
        });
        
        if (intervalId != -1) Window.current().clearInterval(intervalId);
        intervalId = Window.current().setInterval(() -> gameLoop(), 16);
    }
    
    private static float time = 0;
    
    private static void gameLoop() {
        if ("playing".equals(PolyglotInterop.getStatus())) {
            // Reduced raft movement delta to match desktop's single-keypress feel. 
            // 0.015f per 16ms frame ~= 0.93f per second.
            if (leftPressed) PolyglotInterop.moveRaft(-0.015f);
            if (rightPressed) PolyglotInterop.moveRaft(0.015f);
            PolyglotInterop.update(0.016f);
            render();
        } else if ("gameover".equals(PolyglotInterop.getStatus())) {
            Window.current().clearInterval(intervalId);
            intervalId = -1;
            Window.current().alert("Game Over! Score: " + PolyglotInterop.getScore());
            showRulesScreen();
        }
    }
    
    private static void render() {
        time += 0.05f;
        int width = canvas.getWidth();
        int height = canvas.getHeight();
        
        // Render River
        CanvasGradient grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, "#0a64b4");
        grad.addColorStop(1, "#1478c8");
        ctx.setFillStyle(grad);
        ctx.fillRect(0, 0, width, height);
        
        // Draw flowing lines for realism (splines approximation via sine waves)
        for (int i = 0; i < 15; i++) {
            int xBase = (width / 16) * (i + 1);
            ctx.beginPath();
            
            // Vary shades slightly
            int alpha = 20 + (i % 3) * 15;
            ctx.setStrokeStyle("rgba(255,255,255," + (alpha / 255.0) + ")");
            ctx.setLineWidth(2 + (i % 2)); // slight thickness variation
            
            boolean drawing = true;
            for (int y = 0; y < height; y += 20) {
                // Random breaks to make it look realistic
                if (Math.random() < 0.05) {
                    drawing = !drawing;
                    if (drawing) {
                        ctx.stroke();
                        ctx.beginPath();
                    }
                }
                
                if (drawing) {
                    int offset = (int) (Math.sin(time + y * 0.01 + i) * 15);
                    if (y == 0) {
                        ctx.moveTo(xBase + offset, y);
                    } else {
                        ctx.lineTo(xBase + offset, y);
                    }
                }
            }
            if (drawing) ctx.stroke();
        }
        
        // Draw Obstacles
        String obsData = PolyglotInterop.getObstaclesData();
        if (obsData != null && !obsData.isEmpty()) {
            String[] obs = obsData.split(";");
            for (String o : obs) {
                if (o.isEmpty()) continue;
                String[] p = o.split(",");
                int type = Integer.parseInt(p[0]);
                int x = (int)(Float.parseFloat(p[1]) * width);
                int y = (int)(Float.parseFloat(p[2]) * height);
                drawObstacle(type, x, y);
            }
        }
        
        // Draw Letters
        String lettersData = PolyglotInterop.getLettersData();
        if (lettersData != null && !lettersData.isEmpty()) {
            String[] let = lettersData.split(";");
            for (String l : let) {
                if (l.isEmpty()) continue;
                String[] p = l.split(",");
                String ch = p[0];
                int x = (int)(Float.parseFloat(p[1]) * width);
                int y = (int)(Float.parseFloat(p[2]) * height);
                
                int codePoint = ch.length() > 0 ? ch.codePointAt(0) : 0;
                String bgColor = "#ffffe0"; // Default pastel yellow for Latin
                ctx.setFillStyle(getBubbleColorHex(ch, 0));
                ctx.beginPath();
                ctx.arc(x, y, 15, 0, Math.PI * 2);
                ctx.fill();
                ctx.setStrokeStyle("black");
                ctx.stroke();
                
                ctx.setFillStyle("black");
                ctx.setFont("bold 18px sans-serif");
                // Center text slightly better
                ctx.fillText(ch, x - 6, y + 6);
            }
        }
        
        // Draw Raft
        int rx = (int)(PolyglotInterop.getRaftX() * width);
        int ry = (int)(0.9f * height);
        
        ctx.setShadowColor("rgba(0,0,0,0.5)");
        ctx.setShadowBlur(10);
        ctx.setShadowOffsetX(5);
        ctx.setShadowOffsetY(5);
        
        CanvasGradient raftGrad = ctx.createLinearGradient(rx - 20, ry - 30, rx + 20, ry + 30);
        raftGrad.addColorStop(0, "#f5deb3");
        raftGrad.addColorStop(1, "#8b4513");
        ctx.setFillStyle(raftGrad);
        fillRoundRect(ctx, rx - 20, ry - 30, 40, 60, 15);
        
        ctx.setShadowBlur(0);
        ctx.setShadowOffsetX(0);
        ctx.setShadowOffsetY(0);
        
        ctx.setFillStyle("#cd853f");
        fillRoundRect(ctx, rx - 10, ry - 20, 20, 40, 5);
        
        // Draw boaters (helmets)
        ctx.setFillStyle("red");
        ctx.beginPath(); ctx.arc(rx, ry - 10, 6, 0, Math.PI * 2); ctx.fill();
        ctx.setFillStyle("blue");
        ctx.beginPath(); ctx.arc(rx, ry + 10, 6, 0, Math.PI * 2); ctx.fill();
        
        // Update UI Panel
        StringBuilder sb = new StringBuilder();
        sb.append("<h3 style='margin: 0 0 5px 0;'>Score: ").append(PolyglotInterop.getScore()).append("</h3>");
        sb.append("<h4 style='margin: 0 0 5px 0;'>Health: ").append(PolyglotInterop.getHealth()).append("</h4>");
        sb.append("<div style='width:200px;height:15px;background:#aa0000;border-radius:10px;box-shadow: 2px 2px 5px rgba(0,0,0,0.5);overflow:hidden;'>");
        sb.append("<div style='width:").append(PolyglotInterop.getHealth()*2).append("px;height:15px;background:#00aa00;border-radius:10px;'></div></div>");
        
        sb.append("<div style='height: 40px;'>");
        float timer = PolyglotInterop.getWordLockTimer();
        if (timer > 0) {
            String formatted = String.format("%d.%03d", (int)(timer), (int)(timer * 1000) % 1000);
            sb.append("<h4 style='color:orange; margin: 5px 0;'>Lock Timer: ").append(formatted).append("s</h4>");
            sb.append("<div style='width:200px;height:10px;background:gray;border-radius:5px;'><div style='width:").append((int)((timer/15.0f)*200)).append("px;height:10px;background:yellow;border-radius:5px;'></div></div>");
        }
        sb.append("</div>");
        
        sb.append("<div style='margin-top:20px; display:flex; flex-wrap:wrap;'>");
        String activeLangs = PolyglotInterop.getActiveLanguagesCsv();
        String currentLang = PolyglotInterop.getCurrentLanguage();
        if (activeLangs != null && !activeLangs.isEmpty()) {
            for (String lang : activeLangs.split(",")) {
                if (!lang.trim().isEmpty()) {
                    String border = lang.equals(currentLang) ? "border: 4px solid red;" : "border: 1px solid #ccc;";
                    sb.append("<div style='margin:5px; text-align:center;'>");
                    sb.append("<img src='assets/flags/").append(lang).append(".png' style='width:32px;height:32px;").append(border).append("'><br>");
                    sb.append("<span style='font-size: 12px;'>").append(lang).append("</span>");
                    sb.append("</div>");
                }
            }
        }
        sb.append("</div>");
        sb.append("<div style='margin-top:10px;font-size:18px;font-weight:bold;color:yellow;'>Building: <bdi>").append(PolyglotInterop.getActiveWord()).append("</bdi></div>");
        sb.append("<h4 style='margin: 10px 0 5px 0;'>Found Words:</h4>");
        sb.append("<div style='flex-grow: 1; overflow-y: auto; background-color: #222; padding: 10px; border-radius: 5px;'>");
        String fw = PolyglotInterop.getFoundWords();
        if (fw != null && !fw.isEmpty()) {
            String[] words = fw.split(",");
            for (int i = words.length - 1; i >= 0; i--) {
                String w = words[i];
                sb.append("<div style='display:flex;align-items:center;margin-bottom:5px;'>");
                String wordLangs = PolyglotInterop.getWordLanguages(w);
                if (wordLangs != null && !wordLangs.isEmpty()) {
                    for (String wl : wordLangs.split(",")) {
                        if (!wl.isEmpty()) {
                            sb.append("<img src='assets/flags/").append(wl).append(".png' style='width:24px;height:24px;margin-right:4px;vertical-align:middle;'> ");
                        }
                    }
                }
                sb.append("<span>").append(w).append("</span></div>");
            }
        }
        sb.append("</div>");
        uiPanel.setInnerHTML(sb.toString());
    }
    
    private static String getBubbleColorHex(String ch, int seed) {
        int codePoint = ch.length() > 0 ? ch.codePointAt(0) : 0;
        if (codePoint < 0x02B0) return "#ffffe0";
        String[] pastels = {"#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff", "#e6e6fa"};
        return pastels[(codePoint + seed) % pastels.length];
    }

    private static void fillRoundRect(CanvasRenderingContext2D ctx, int x, int y, int width, int height, int radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();
    }
    
    private static void drawObstacle(int type, int x, int y) {
        ctx.setShadowColor("rgba(0,0,0,0.5)");
        ctx.setShadowBlur(8);
        ctx.setShadowOffsetX(3);
        ctx.setShadowOffsetY(3);
        
        ctx.beginPath();
        switch(type) {
            case 0:
                CanvasGradient rGrad = ctx.createRadialGradient(x-5, y-5, 2, x, y, 20);
                rGrad.addColorStop(0, "#aaaaaa");
                rGrad.addColorStop(1, "#555555");
                ctx.setFillStyle(rGrad);
                ctx.arc(x, y, 20, 0, Math.PI*2);
                ctx.fill();
                break;
            case 1:
                CanvasGradient lGrad = ctx.createLinearGradient(x - 10, y - 40, x + 10, y - 40);
                lGrad.addColorStop(0, "#8b4513");
                lGrad.addColorStop(0.5, "#a0522d");
                lGrad.addColorStop(1, "#5c3317");
                ctx.setFillStyle(lGrad);
                fillRoundRect(ctx, x - 10, y - 40, 20, 80, 5);
                break;
            case 2:
                ctx.setShadowColor("transparent"); // No shadow for shallows
                ctx.setFillStyle("rgba(135,206,250,0.5)");
                ctx.arc(x, y, 30, 0, Math.PI*2);
                ctx.fill();
                break;
            case 3:
                ctx.setFillStyle("#32cd32");
                ctx.moveTo(x-20, y+20);
                ctx.lineTo(x+20, y+20);
                ctx.lineTo(x, y-20);
                ctx.fill();
                
                // Top highlight
                ctx.setFillStyle("#7cfc00");
                ctx.beginPath();
                ctx.moveTo(x, y-20);
                ctx.lineTo(x-20, y+20);
                ctx.lineTo(x, y+20);
                ctx.fill();
                break;
        }
        ctx.setShadowColor("transparent");
        ctx.setShadowBlur(0);
        ctx.setShadowOffsetX(0);
        ctx.setShadowOffsetY(0);
    }
}
