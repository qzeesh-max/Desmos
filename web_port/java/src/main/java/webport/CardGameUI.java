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

package webport;

import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.Event;

public class CardGameUI {

    private static HTMLDocument document = Window.current().getDocument();
    private static HTMLCanvasElement canvas;
    private static CanvasRenderingContext2D ctx;
    private static HTMLElement statusLabel;
    private static HTMLElement statsLabel;
    
    private static HTMLButtonElement hitBtn;
    private static HTMLButtonElement standBtn;
    private static HTMLButtonElement newGameBtn;

    public static void main(String[] args) {
        initUI();
    }

    private static void initUI() {
        HTMLElement container = document.getElementById("cardgame-container");
        if (container == null) return;
        
        container.setInnerHTML("");

        // Controls
        hitBtn = (HTMLButtonElement) document.createElement("button");
        hitBtn.setInnerHTML("Hit");
        hitBtn.addEventListener("click", e -> onHit());

        standBtn = (HTMLButtonElement) document.createElement("button");
        standBtn.setInnerHTML("Stand");
        standBtn.addEventListener("click", e -> onStand());

        newGameBtn = (HTMLButtonElement) document.createElement("button");
        newGameBtn.setInnerHTML("New Game");
        newGameBtn.addEventListener("click", e -> onNewGame());

        HTMLElement controls = document.createElement("div");
        controls.appendChild(hitBtn);
        controls.appendChild(standBtn);
        controls.appendChild(newGameBtn);
        container.appendChild(controls);

        // Status
        statusLabel = document.createElement("h3");
        statusLabel.setInnerHTML("Press 'New Game' to start!");
        container.appendChild(statusLabel);

        statsLabel = document.createElement("p");
        statsLabel.setInnerHTML("Wins: 0 | Losses: 0 | Pushes: 0");
        container.appendChild(statsLabel);

        // Canvas for cards
        canvas = (HTMLCanvasElement) document.createElement("canvas");
        canvas.setWidth(800);
        canvas.setHeight(400);
        canvas.getStyle().setProperty("background-color", "#1e6432");
        canvas.getStyle().setProperty("border", "2px solid #144623");
        container.appendChild(canvas);

        ctx = (CanvasRenderingContext2D) canvas.getContext("2d");

        hitBtn.setDisabled(true);
        standBtn.setDisabled(true);
    }

    private static void onNewGame() {
        Interop.startNewGame();
        hitBtn.setDisabled(false);
        standBtn.setDisabled(false);
        updateUI();
    }

    private static void onHit() {
        Interop.playerHit();
        updateUI();
    }

    private static void onStand() {
        Interop.playerStand();
        updateUI();
    }

    private static void updateUI() {
        String status = Interop.getGameStatus();
        boolean gameOver = Interop.isGameOver() != 0;

        ctx.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());

        // Dealer cards
        String dealerCardsStr = Interop.getDealerCards();
        if (dealerCardsStr != null && !dealerCardsStr.isEmpty()) {
            String[] dealerCards = dealerCardsStr.split(",");
            for (int i = 0; i < dealerCards.length; i++) {
                if (!gameOver && i > 0) {
                    drawCardBack(100 + i * 110, 20);
                } else {
                    drawCard(100 + i * 110, 20, dealerCards[i].trim());
                }
            }
        }

        // Player cards
        String playerCardsStr = Interop.getPlayerCards();
        if (playerCardsStr != null && !playerCardsStr.isEmpty()) {
            String[] playerCards = playerCardsStr.split(",");
            for (int i = 0; i < playerCards.length; i++) {
                drawCard(100 + i * 110, 220, playerCards[i].trim());
            }
        }

        // Status message
        switch (status) {
            case "playing":
                statusLabel.setInnerHTML("Your turn — Hit or Stand?");
                break;
            case "player_bust":
                statusLabel.setInnerHTML("💥 BUST! You went over 21!");
                hitBtn.setDisabled(true); standBtn.setDisabled(true);
                break;
            case "dealer_bust":
                statusLabel.setInnerHTML("🎉 DEALER BUSTS! You win!");
                hitBtn.setDisabled(true); standBtn.setDisabled(true);
                break;
            case "player_win":
                statusLabel.setInnerHTML("🏆 YOU WIN!");
                hitBtn.setDisabled(true); standBtn.setDisabled(true);
                break;
            case "dealer_win":
                statusLabel.setInnerHTML("😞 Dealer wins.");
                hitBtn.setDisabled(true); standBtn.setDisabled(true);
                break;
            case "push":
                statusLabel.setInnerHTML("🤝 Push — it's a tie!");
                hitBtn.setDisabled(true); standBtn.setDisabled(true);
                break;
        }

        statsLabel.setInnerHTML("Wins: " + Interop.getPlayerWins() +
                " | Losses: " + Interop.getDealerWins() +
                " | Pushes: " + Interop.getPushes());
    }

    private static void drawCard(int x, int y, String id) {
        ctx.setFillStyle("white");
        ctx.fillRect(x, y, 100, 145);
        ctx.setStrokeStyle("black");
        ctx.strokeRect(x, y, 100, 145);

        if (id.length() < 2) return;
        char rank = id.charAt(0);
        char suit = id.charAt(1);
        String rankStr = rank == 'T' ? "10" : String.valueOf(rank);
        String suitSymbol;
        String suitColor;
        
        switch (suit) {
            case 'S': suitSymbol = "♠"; suitColor = "black"; break;
            case 'H': suitSymbol = "♥"; suitColor = "red"; break;
            case 'D': suitSymbol = "♦"; suitColor = "red"; break;
            case 'C': suitSymbol = "♣"; suitColor = "black"; break;
            default:  suitSymbol = "?"; suitColor = "gray"; break;
        }

        ctx.setFillStyle(suitColor);
        ctx.setFont("20px sans-serif");
        ctx.fillText(rankStr, x + 8, y + 25);
        ctx.setFont("16px sans-serif");
        ctx.fillText(suitSymbol, x + 10, y + 45);

        ctx.setFont("40px sans-serif");
        ctx.fillText(suitSymbol, x + 35, y + 90);
    }

    private static void drawCardBack(int x, int y) {
        ctx.setFillStyle("#003278");
        ctx.fillRect(x, y, 100, 145);
        ctx.setStrokeStyle("#daa520");
        ctx.setLineWidth(2);
        ctx.strokeRect(x + 2, y + 2, 96, 141);
        ctx.strokeRect(x + 8, y + 8, 84, 129);
        ctx.setLineWidth(1);
    }
}
