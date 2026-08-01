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

import org.teavm.jso.JSBody;

public class Interop {

    // --- CardGame Interop ---
    
    @JSBody(script = "return window.cardGameInstance.startNewGame();")
    public static native void startNewGame();

    @JSBody(script = "return window.cardGameInstance.playerHit();")
    public static native void playerHit();

    @JSBody(script = "return window.cardGameInstance.playerStand();")
    public static native void playerStand();

    @JSBody(script = "return window.cardGameInstance.getPlayerScore();")
    public static native int getPlayerScore();

    @JSBody(script = "return window.cardGameInstance.getDealerScore();")
    public static native int getDealerScore();

    @JSBody(script = "return window.cardGameInstance.getPlayerWins();")
    public static native int getPlayerWins();

    @JSBody(script = "return window.cardGameInstance.getDealerWins();")
    public static native int getDealerWins();

    @JSBody(script = "return window.cardGameInstance.getPushes();")
    public static native int getPushes();

    @JSBody(script = "return window.cardGameInstance.getPlayerCards();")
    public static native String getPlayerCards();

    @JSBody(script = "return window.cardGameInstance.getDealerCards();")
    public static native String getDealerCards();

    @JSBody(script = "return window.cardGameInstance.getGameStatus();")
    public static native String getGameStatus();

    @JSBody(script = "return window.cardGameInstance.isGameOver();")
    public static native int isGameOver();

    // --- Sorter Interop ---
    
    @JSBody(params = {"delay"}, script = "window.sorterInstance.setDelay(delay);")
    public static native void setDelay(int delay);

    @JSBody(script = "window.sorterInstance.randomize();")
    public static native void randomize();

    @JSBody(params = {"index"}, script = "return window.sorterInstance.getElement(index);")
    public static native int getElement(int index);

    @JSBody(script = "return window.sorterInstance.getSize();")
    public static native int getSize();

    @JSBody(script = "return window.sorterInstance.isRunning();")
    public static native boolean isRunning();

    @JSBody(script = "window.sorterInstance.stop();")
    public static native void stop();

    @JSBody(script = "window.sorterInstance.bubbleSort();")
    public static native void bubbleSort();

    @JSBody(script = "window.sorterInstance.quickSort();")
    public static native void quickSort();

    @JSBody(script = "window.sorterInstance.radixSort();")
    public static native void radixSort();
}
