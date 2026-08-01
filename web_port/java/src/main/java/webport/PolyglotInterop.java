package webport;

import org.teavm.jso.JSBody;

public class PolyglotInterop {
    @JSBody(params = {"langs"}, script = "window.polyglotInstance.setLanguages(langs);")
    public static native void setLanguages(String langs);

    @JSBody(script = "window.polyglotInstance.startGame();")
    public static native void startGame();

    @JSBody(params = {"delta"}, script = "window.polyglotInstance.moveRaft(delta);")
    public static native void moveRaft(float delta);

    @JSBody(params = {"dt"}, script = "window.polyglotInstance.update(dt);")
    public static native void update(float dt);

    @JSBody(script = "return window.polyglotInstance.getStatus();")
    public static native String getStatus();

    @JSBody(script = "return window.polyglotInstance.getHealth();")
    public static native int getHealth();

    @JSBody(script = "return window.polyglotInstance.getScore();")
    public static native int getScore();

    @JSBody(script = "return window.polyglotInstance.getRaftX();")
    public static native float getRaftX();

    @JSBody(script = "return window.polyglotInstance.getInvulnerableTimer();")
    public static native float getInvulnerableTimer();

    @JSBody(script = "return window.polyglotInstance.getActiveWord();")
    public static native String getActiveWord();

    @JSBody(script = "return window.polyglotInstance.getActiveLanguagesCsv();")
    public static native String getActiveLanguagesCsv();

    @JSBody(script = "return window.polyglotInstance.getObstaclesData();")
    public static native String getObstaclesData();

    @JSBody(script = "return window.polyglotInstance.getLettersData();")
    public static native String getLettersData();

    @JSBody(script = "return window.polyglotInstance.getFoundWords();")
    public static native String getFoundWords();

    @JSBody(script = "return window.polyglotInstance.getWordLockTimer();")
    public static native float getWordLockTimer();

    @JSBody(script = "return window.polyglotInstance.getCurrentLanguage();")
    public static native String getCurrentLanguage();
    
    @JSBody(script = "return window.polyglotInstance.reset();")
    public static native void reset();

    @JSBody(params = {"word"}, script = "return window.polyglotInstance.getWordLanguages(word);")
    public static native String getWordLanguages(String word);
}
