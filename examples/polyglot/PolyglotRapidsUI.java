// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.File;
import java.util.*;
import java.util.List;
import javax.sound.sampled.*;
public class PolyglotRapidsUI extends JFrame {
    private PolyglotRapids game;
    private CardLayout cardLayout;
    private JPanel mainPanel;
    
    // Screens
    private JPanel rulesScreen;
    private JPanel langScreen;
    private GamePanel gameScreen;
    
    // Assets
    private Map<String, Image> flags = new HashMap<>();
    private Map<String, Image> sprites = new HashMap<>();
    private Clip riverAudio;
    private Image polyglotLogo;
    
    private javax.swing.Timer gameLoop;
    
    // Checkboxes for languages
    private Map<String, JToggleButton> langCheckboxes = new LinkedHashMap<>();
    
    // Top 30 languages mapping
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
    
    public PolyglotRapidsUI() {
        super("PolyGlot Rapids");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setSize(1000, 700);
        setResizable(false);
        
        game = new PolyglotRapids();
        
        loadAssets();
        
        cardLayout = new CardLayout();
        mainPanel = new JPanel(cardLayout);
        
        initRulesScreen();
        initLangScreen();
        initGameScreen();
        
        mainPanel.add(rulesScreen, "Rules");
        mainPanel.add(langScreen, "LangSelect");
        mainPanel.add(gameScreen, "Game");
        
        setContentPane(mainPanel);
        
        cardLayout.show(mainPanel, "Rules");
        setLocationRelativeTo(null);
    }
    
    private void loadAssets() {
        // Load flags
        try {
            File flagDir = new File("examples/polyglot/assets/flags");
            if (flagDir.exists()) {
                for (File f : flagDir.listFiles()) {
                    if (f.getName().endsWith(".png")) {
                        String code = f.getName().replace(".png", "");
                        flags.put(code, ImageIO.read(f));
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        // Load sprites (or create fallbacks if they failed to download as raster)
        try {
            File spriteDir = new File("examples/polyglot/assets/sprites");
            if (spriteDir.exists()) {
                for (File f : spriteDir.listFiles()) {
                    if (f.getName().endsWith(".png")) {
                        sprites.put(f.getName().replace(".png", ""), ImageIO.read(f));
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        try {
            File logoFile = new File("examples/polyglot/assets/polyglot_logo.png");
            if (logoFile.exists()) {
                polyglotLogo = ImageIO.read(logoFile);
            }
            
            File audioFile = new File("examples/polyglot/assets/river.wav");
            if (audioFile.exists()) {
                AudioInputStream ais = AudioSystem.getAudioInputStream(audioFile);
                riverAudio = AudioSystem.getClip();
                riverAudio.open(ais);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    private void initRulesScreen() {
        rulesScreen = new JPanel(new BorderLayout());
        rulesScreen.setBackground(new Color(30, 144, 255));
        
        Component topComponent;
        if (polyglotLogo != null) {
            Image scaledLogo = polyglotLogo.getScaledInstance(400, -1, Image.SCALE_SMOOTH);
            topComponent = new JLabel(new ImageIcon(scaledLogo));
            ((JLabel)topComponent).setHorizontalAlignment(SwingConstants.CENTER);
            ((JLabel)topComponent).setBorder(new EmptyBorder(30, 0, 10, 0));
        } else {
            JLabel title = new JLabel("PolyGlot Rapids", SwingConstants.CENTER);
            title.setFont(new Font("SansSerif", Font.BOLD, 48));
            title.setForeground(Color.WHITE);
            title.setBorder(new EmptyBorder(50, 0, 30, 0));
            topComponent = title;
        }
        
        JTextArea rulesText = new JTextArea(
            "Welcome to PolyGlot Rapids!\n\n" +
            "- Steer your raft using the LEFT and RIGHT arrow keys.\n" +
            "- Avoid obstacles: Rocks, Logs, and Shallows damage your raft.\n" +
            "- Hit green ramps to jump over obstacles.\n" +
            "- Collect letters floating in the river to form words from your chosen languages.\n" +
            "- Forming valid words restores health and boosts your score.\n" +
            "- The game gets faster the more words you find!\n\n" +
            "Note: Choose from our top 23 languages! We support 6,000 words per language.\n\n" +
            "Press 'Next' to select your languages."
        );
        rulesText.setFont(new Font("SansSerif", Font.PLAIN, 18));
        rulesText.setForeground(Color.WHITE);
        rulesText.setBackground(new Color(30, 144, 255));
        rulesText.setEditable(false);
        rulesText.setMargin(new Insets(20, 50, 20, 50));
        
        JButton nextBtn = new JButton("Next");
        nextBtn.setFont(new Font("SansSerif", Font.BOLD, 24));
        nextBtn.addActionListener(e -> cardLayout.show(mainPanel, "LangSelect"));
        
        JPanel bottomPanel = new JPanel();
        bottomPanel.setOpaque(false);
        bottomPanel.add(nextBtn);
        
        rulesScreen.add(topComponent, BorderLayout.NORTH);
        rulesScreen.add(rulesText, BorderLayout.CENTER);
        rulesScreen.add(bottomPanel, BorderLayout.SOUTH);
    }
    
    private void initLangScreen() {
        langScreen = new JPanel(new BorderLayout());
        langScreen.setBackground(new Color(40, 150, 255));
        
        JLabel title = new JLabel("Select Languages", SwingConstants.CENTER);
        title.setFont(new Font("SansSerif", Font.BOLD, 36));
        title.setForeground(Color.WHITE);
        title.setBorder(new EmptyBorder(30, 0, 20, 0));
        
        JPanel grid = new JPanel(new GridLayout(6, 5, 10, 10));
        grid.setOpaque(false);
        grid.setBorder(new EmptyBorder(20, 50, 20, 50));
        
        for (int i = 0; i < LANG_CODES.length; i++) {
            String code = LANG_CODES[i];
            String name = LANG_NAMES[i];
            
            JPanel p = new JPanel(new FlowLayout(FlowLayout.LEFT, 5, 0));
            p.setOpaque(false);
            
            JToggleButton cb = new JToggleButton(name);
            cb.setOpaque(true); // Needed for Mac to show background color
            cb.setFont(new Font("SansSerif", Font.BOLD, 16));
            if (code.equals("en")) cb.setSelected(true);
            
            langCheckboxes.put(code, cb);
            p.add(cb);
            
            if (flags.containsKey(code)) {
                Image scaled = flags.get(code).getScaledInstance(30, 20, Image.SCALE_SMOOTH);
                cb.setIcon(new ImageIcon(scaled));
            }
            
            grid.add(p);
        }
        
        JButton startBtn = new JButton("Start Rafting!");
        startBtn.setFont(new Font("SansSerif", Font.BOLD, 24));
        startBtn.addActionListener(e -> startGame());
        
        JPanel bottomPanel = new JPanel();
        bottomPanel.setOpaque(false);
        bottomPanel.add(startBtn);
        
        langScreen.add(title, BorderLayout.NORTH);
        langScreen.add(grid, BorderLayout.CENTER);
        langScreen.add(bottomPanel, BorderLayout.SOUTH);
    }
    
    private void initGameScreen() {
        gameScreen = new GamePanel();
        gameScreen.setLayout(null);
        
        JButton newGameBtn = new JButton("New Game");
        newGameBtn.setBounds(825, 600, 150, 40);
        newGameBtn.setFont(new Font("SansSerif", Font.BOLD, 18));
        newGameBtn.addActionListener(e -> {
            gameLoop.stop();
            if (riverAudio != null) riverAudio.stop();
            game.reset();
            cardLayout.show(mainPanel, "Rules");
        });
        gameScreen.add(newGameBtn);
        
        // Input map for arrow keys
        gameScreen.getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW).put(KeyStroke.getKeyStroke("LEFT"), "left");
        gameScreen.getActionMap().put("left", new AbstractAction() {
            public void actionPerformed(ActionEvent e) { game.moveRaft(-0.05f); }
        });
        
        gameScreen.getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW).put(KeyStroke.getKeyStroke("RIGHT"), "right");
        gameScreen.getActionMap().put("right", new AbstractAction() {
            public void actionPerformed(ActionEvent e) { game.moveRaft(0.05f); }
        });
        
        gameLoop = new javax.swing.Timer(16, e -> {
            if ("playing".equals(game.getStatus())) {
                game.update(0.016f); // ~60fps
                gameScreen.repaint();
            } else if ("gameover".equals(game.getStatus())) {
                gameLoop.stop();
                if (riverAudio != null) riverAudio.stop();
                JOptionPane.showMessageDialog(this, "Game Over! Score: " + game.getScore());
                game.reset();
                cardLayout.show(mainPanel, "Rules");
            }
        });
    }
    
    private void startGame() {
        List<String> selectedLangs = new ArrayList<>();
        for (Map.Entry<String, JToggleButton> entry : langCheckboxes.entrySet()) {
            if (entry.getValue().isSelected()) {
                selectedLangs.add(entry.getKey());
            }
        }
        if (selectedLangs.isEmpty()) selectedLangs.add("en");
        
        game.setLanguages(String.join(",", selectedLangs));
        game.startGame();
        if (riverAudio != null) {
            riverAudio.setFramePosition(0);
            riverAudio.loop(Clip.LOOP_CONTINUOUSLY);
        }
        gameLoop.start();
        cardLayout.show(mainPanel, "Game");
    }
    
    // Inner class for Game rendering
    private class GamePanel extends JPanel {
        private float time = 0;
        
        private Color getBubbleColor(String ch, int seed) {
            int codePoint = ch.length() > 0 ? ch.codePointAt(0) : 0;
            if (codePoint < 0x02B0) return new Color(255, 255, 224);
            Color[] pastels = {new Color(255, 179, 186), new Color(255, 223, 186), new Color(255, 255, 186), new Color(186, 255, 201), new Color(186, 225, 255), new Color(230, 230, 250)};
            return pastels[(codePoint + seed) % pastels.length];
        }
        
        public GamePanel() {
            setBackground(Color.BLACK);
        }
        
        @Override
        protected void paintComponent(Graphics g) {
            super.paintComponent(g);
            Graphics2D g2 = (Graphics2D) g;
            g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            
            time += 0.05f;
            
            int splitX = getWidth() * 2 / 3;
            
            // --- DRAW LEFT PANE (River) ---
            g2.setClip(0, 0, splitX, getHeight());
            
            // Gradient water
            GradientPaint waterGrad = new GradientPaint(0, 0, new Color(10, 100, 180), splitX, 0, new Color(20, 120, 200));
            g2.setPaint(waterGrad);
            g2.fillRect(0, 0, splitX, getHeight());
            
            // Draw flowing lines for realism (splines approximation via sine waves)
            for (int i = 0; i < 15; i++) {
                int xBase = (splitX / 16) * (i + 1);
                
                int alpha = 20 + (i % 3) * 15;
                g2.setColor(new Color(255, 255, 255, alpha));
                g2.setStroke(new BasicStroke(2 + (i % 2)));
                
                boolean drawing = true;
                int lastX = -1;
                int lastY = -1;
                for (int y = 0; y < getHeight(); y += 20) {
                    if (Math.random() < 0.05) {
                        drawing = !drawing;
                        lastX = -1;
                    }
                    if (drawing) {
                        int offset = (int) (Math.sin(time + y * 0.01 + i) * 15);
                        int currX = xBase + offset;
                        if (lastX != -1) {
                            g2.drawLine(lastX, lastY, currX, y);
                        }
                        lastX = currX;
                        lastY = y;
                    } else {
                        lastX = -1;
                    }
                }
            }
            
            // Draw Obstacles
            String obsData = game.getObstaclesData();
            if (!obsData.isEmpty()) {
                String[] obsList = obsData.split(";");
                for (String o : obsList) {
                    if (o.isEmpty()) continue;
                    String[] parts = o.split(",");
                    int type = Integer.parseInt(parts[0]);
                    float x = Float.parseFloat(parts[1]);
                    float y = Float.parseFloat(parts[2]);
                    
                    int screenX = (int)(x * splitX);
                    int screenY = (int)(y * getHeight());
                    
                    drawObstacle(g2, type, screenX, screenY);
                }
            }
            
            // Draw Letters
            String lettersData = game.getLettersData();
            if (!lettersData.isEmpty()) {
                String[] letList = lettersData.split(";");
                for (String l : letList) {
                    if (l.isEmpty()) continue;
                    String[] parts = l.split(",");
                    String ch = parts[0];
                    float x = Float.parseFloat(parts[1]);
                    float y = Float.parseFloat(parts[2]);
                    
                    int screenX = (int)(x * splitX);
                    int screenY = (int)(y * getHeight());
                    
                    g2.setColor(getBubbleColor(ch, 0));
                    g2.fillOval(screenX - 15, screenY - 15, 30, 30);
                    g2.setColor(Color.BLACK);
                    g2.drawOval(screenX - 15, screenY - 15, 30, 30);
                    g2.setFont(new Font("SansSerif", Font.BOLD, 18));
                    FontMetrics fm = g2.getFontMetrics();
                    g2.drawString(ch, screenX - fm.stringWidth(ch) / 2, screenY + 6);
                }
            }
            
            // Draw Raft
            int raftScreenX = (int)(game.getRaftX() * splitX);
            int raftScreenY = (int)(0.9f * getHeight());
            
            if (game.getInvulnerableTimer() > 0) {
                if (((int)(game.getInvulnerableTimer() * 10)) % 2 == 0) {
                    g2.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 0.5f));
                }
            }
            drawRaft(g2, raftScreenX, raftScreenY);
            g2.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 1.0f));
            
            g2.setClip(null);
            
            // --- DRAW RIGHT PANE (UI) ---
            g2.setColor(new Color(40, 40, 40));
            g2.fillRect(splitX, 0, getWidth() - splitX, getHeight());
            
            g2.setColor(Color.WHITE);
            g2.drawLine(splitX, 0, splitX, getHeight());
            
            int uiX = splitX + 20;
            
            // Score & Health
            g2.setFont(new Font("SansSerif", Font.BOLD, 24));
            int yOffset = 40;
            g2.drawString("Score: " + game.getScore(), uiX, yOffset);
            yOffset += 40;
            
            g2.drawString("Health: " + game.getHealth(), uiX, yOffset);
            yOffset += 10;
            
            // Draw health bar shadow
            g2.setColor(new Color(0, 0, 0, 128));
            g2.fillRoundRect(uiX + 2, yOffset + 2, 150, 15, 10, 10);
            
            g2.setColor(new Color(170, 0, 0));
            g2.fillRoundRect(uiX, yOffset, 150, 15, 10, 10);
            g2.setColor(new Color(0, 170, 0));
            g2.fillRoundRect(uiX, yOffset, (int)(150 * (game.getHealth() / 100.0)), 15, 10, 10);
            yOffset += 25;
            
            float timer = game.getWordLockTimer();
            if (timer > 0) {
                g2.setColor(Color.ORANGE);
                g2.setFont(new Font("SansSerif", Font.BOLD, 14));
                g2.drawString(String.format("Lock Timer: %.1fs", timer), uiX, yOffset + 15);
                yOffset += 20;
                
                g2.setColor(Color.GRAY);
                g2.fillRect(uiX, yOffset, 150, 10);
                g2.setColor(Color.YELLOW);
                g2.fillRect(uiX, yOffset, (int)(150 * (timer / 15.0f)), 10);
                yOffset += 20;
            }
            
            yOffset += 10;
            
            // Flags
            int flagY = yOffset;
            int flagX = uiX;
            String activeLangsStr = game.getActiveLanguagesCsv();
            String currentLang = game.getCurrentLanguage();
            if (!activeLangsStr.isEmpty()) {
                for (String lang : activeLangsStr.split(",")) {
                    if (lang.isEmpty()) continue;
                    Image flag = flags.get(lang);
                    if (flag != null) {
                        g2.drawImage(flag, flagX, flagY, 32, 32, null);
                        if (lang.equals(currentLang)) {
                            g2.setColor(Color.YELLOW);
                            g2.setStroke(new BasicStroke(3));
                            g2.drawRect(flagX, flagY, 32, 32);
                            g2.setStroke(new BasicStroke(1));
                        }
                    }
                    g2.setColor(Color.WHITE);
                    g2.setFont(new Font("SansSerif", Font.PLAIN, 12));
                    g2.drawString(lang, flagX, flagY + 45);
                    
                    flagX += 40;
                    if (flagX > splitX + 220) {
                        flagX = uiX;
                        flagY += 55;
                    }
                }
            }
            
            // Active Word
            int wordY = flagY + 130;
            g2.setColor(Color.YELLOW);
            g2.setFont(new Font("SansSerif", Font.BOLD, 24));
            g2.drawString("Building: " + game.getActiveWord(), uiX, wordY);
            
            // Found words
            g2.setColor(Color.WHITE);
            g2.drawString("Found Words:", uiX, wordY + 40);
            g2.setFont(new Font("SansSerif", Font.PLAIN, 16));
            
            String foundStr = game.getFoundWords();
            if (!foundStr.isEmpty()) {
                String[] found = foundStr.split(",");
                int fY = wordY + 70;
                // Show last 15 words to fit screen
                int start = Math.max(0, found.length - 15);
                for (int i = found.length - 1; i >= start; i--) {
                    String w = found[i];
                    String wordLangs = game.getWordLanguages(w);
                    int flagOffset = 0;
                    if (!wordLangs.isEmpty()) {
                        String[] wLangs = wordLangs.split(",");
                        for (String wl : wLangs) {
                            if (wl.isEmpty()) continue;
                            Image flag = flags.get(wl);
                            if (flag != null) {
                                g2.drawImage(flag, uiX + flagOffset, fY - 12, 20, 15, null);
                                flagOffset += 24;
                            }
                        }
                    }
                    g2.drawString(w, uiX + flagOffset, fY);
                    fY += 25;
                }
            }
        }
        
        private void drawObstacle(Graphics2D g2, int type, int x, int y) {
            switch(type) {
                case 0: // Rock
                    // Shadow
                    g2.setColor(new Color(0, 0, 0, 100));
                    g2.fillOval(x - 17, y - 17, 40, 40);
                    
                    RadialGradientPaint rGrad = new RadialGradientPaint(
                        x - 5, y - 5, 20, 
                        new float[]{0.0f, 1.0f}, 
                        new Color[]{new Color(170, 170, 170), new Color(85, 85, 85)}
                    );
                    g2.setPaint(rGrad);
                    g2.fillOval(x - 20, y - 20, 40, 40);
                    break;
                case 1: // Log
                    g2.setColor(new Color(0, 0, 0, 100));
                    g2.fillRoundRect(x - 7, y - 37, 20, 80, 10, 10);
                    
                    GradientPaint lGrad = new GradientPaint(x - 10, y - 40, new Color(139, 69, 19), x + 10, y - 40, new Color(92, 51, 23));
                    g2.setPaint(lGrad);
                    g2.fillRoundRect(x - 10, y - 40, 20, 80, 10, 10);
                    break;
                case 2: // Shallow (light blue area)
                    g2.setColor(new Color(135, 206, 250, 150));
                    g2.fillOval(x - 30, y - 30, 60, 60);
                    break;
                case 3: // Ramp
                    g2.setColor(new Color(0, 0, 0, 100));
                    Polygon pShadow = new Polygon();
                    pShadow.addPoint(x - 17, y + 23);
                    pShadow.addPoint(x + 23, y + 23);
                    pShadow.addPoint(x + 3, y - 17);
                    g2.fillPolygon(pShadow);
                    
                    g2.setColor(new Color(50, 205, 50));
                    Polygon p = new Polygon();
                    p.addPoint(x - 20, y + 20);
                    p.addPoint(x + 20, y + 20);
                    p.addPoint(x, y - 20);
                    g2.fillPolygon(p);
                    
                    g2.setColor(new Color(124, 252, 0));
                    Polygon pTop = new Polygon();
                    pTop.addPoint(x, y - 20);
                    pTop.addPoint(x - 20, y + 20);
                    pTop.addPoint(x, y + 20);
                    g2.fillPolygon(pTop);
                    break;
            }
        }
        
        private void drawRaft(Graphics2D g2, int x, int y) {
            // Shadow
            g2.setColor(new Color(0, 0, 0, 100));
            g2.fillRoundRect(x - 15, y - 25, 40, 60, 15, 15);
            
            GradientPaint raftGrad = new GradientPaint(x - 20, y - 30, new Color(245, 222, 179), x + 20, y + 30, new Color(139, 69, 19));
            g2.setPaint(raftGrad);
            g2.fillRoundRect(x - 20, y - 30, 40, 60, 15, 15);
            
            g2.setColor(new Color(205, 133, 63));
            g2.fillRoundRect(x - 10, y - 20, 20, 40, 5, 5);
            
            // Boaters (helmets)
            g2.setColor(Color.RED);
            g2.fillOval(x - 6, y - 16, 12, 12);
            g2.setColor(Color.BLUE);
            g2.fillOval(x - 6, y + 4, 12, 12);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new PolyglotRapidsUI().setVisible(true);
        });
    }
}
