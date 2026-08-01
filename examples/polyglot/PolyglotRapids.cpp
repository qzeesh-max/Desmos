// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

#include "Desmos/Exporter.h"
#include <iostream>
#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <fstream>
#include <algorithm>
#include <random>
#include <sstream>
#include <chrono>
#include <Desmos/Annotations.h>

// Helper to split string
inline std::vector<std::string> splitString(const std::string& str, char delim) {
    std::vector<std::string> tokens;
    std::stringstream ss(str);
    std::string token;
    while (std::getline(ss, token, delim)) {
        tokens.push_back(token);
    }
    return tokens;
}

struct Obstacle {
    float x;
    float y;
    int type; // 0 = rock, 1 = log, 2 = shallow, 3 = ramp
    bool hit;
};

struct CollectableLetter {
    float x;
    float y;
    std::string character;
    bool collected;
};

struct [[=desm::export_java{}]] PolyglotRapids {
    // Game state
    std::string status; // "menu", "playing", "gameover"
    int health;
    int score;
    float raftX;
    float speed;
    float invulnerableTimer;
    float wordLockTimer;
    std::string pendingWord;
    std::string activeWord;
    std::string currentLanguage;
    int wordsFound;
    
    std::vector<Obstacle> obstacles;
    std::vector<CollectableLetter> letters;
    
    std::vector<std::string> foundWordsList;
    std::vector<std::string> activeLanguages;
    
    std::unordered_map<std::string, std::unordered_set<std::string>> dictionaries;
    
    std::mt19937 rng;
    float spawnTimer;
    
    PolyglotRapids() {
        auto seed = std::chrono::high_resolution_clock::now().time_since_epoch().count();
        rng = std::mt19937(static_cast<unsigned>(seed));
        reset();
        status = "menu";
    }
    
    void reset() {
        activeWord = "";
        pendingWord = "";
        health = 100;
        score = 0;
        wordsFound = 0;
        wordLockTimer = 0.0f;
        currentLanguage = "en";
        foundWordsList.clear();
        letters.clear();
        obstacles.clear();
        spawnTimer = 0.0f;
        status = "playing";
        raftX = 0.5f;
        
        // Merged from the older function
        speed = 0.5f; // Initial speed
        invulnerableTimer = 0.0f;
    }
    
    void setLanguages(std::string langsCsv) {
        activeLanguages = splitString(langsCsv, ',');
        loadDictionaries();
    }
    
    void loadDictionaries() {
        dictionaries.clear();
        for (const auto& lang : activeLanguages) {
            std::ifstream file("examples/polyglot/assets/dicts/" + lang + ".txt");
            std::string word;
            bool isCJK = (lang == "zh" || lang == "ja" || lang == "ko");
            if (file.is_open()) {
                while (file >> word) {
                    int len = 0;
                    for (size_t i = 0; i < word.length(); i++) {
                        if ((word[i] & 0xC0) != 0x80) len++;
                    }
                    if (isCJK || len > 1) {
                        dictionaries[lang].insert(word);
                    }
                }
            } else {
                std::cerr << "Failed to load dictionary for " << lang << std::endl;
            }
        }
    }
    
    void startGame() {
        reset();
        status = "playing";
    }
    
    void moveRaft(float delta) {
        if (status != "playing") return;
        raftX += delta;
        if (raftX < 0.1f) raftX = 0.1f;
        if (raftX > 0.9f) raftX = 0.9f;
    }
    
    void update(float dt) {
        if (status != "playing") return;
        
        if (invulnerableTimer > 0) {
            invulnerableTimer -= dt;
        }
        
        if (wordLockTimer > 0) {
            wordLockTimer -= dt;
            if (wordLockTimer <= 0) {
                // Lock the pending word
                scorePendingWord();
            }
        }
        
        // Cap scroll speed so the game remains human manageable
        float scrollSpeed = std::min(0.6f, speed + (wordsFound * 0.005f));
        
        // Density continues to increase slowly as words are found (lower spawn interval = higher density)
        float effectiveDensitySpeed = speed + (wordsFound * 0.01f);
        float spawnInterval = std::max(0.25f, 0.5f / effectiveDensitySpeed);
        
        // Spawn obstacles and letters
        spawnTimer -= dt;
        if (spawnTimer <= 0) {
            spawnTimer = spawnInterval;
            spawnRandomEntity();
        }
        
        // Move obstacles
        for (auto& obs : obstacles) {
            obs.y += scrollSpeed * dt;
            if (!obs.hit && obs.y > 0.85f && obs.y < 0.95f) { // Raft is at ~0.9
                if (std::abs(obs.x - raftX) < 0.1f) {
                    handleObstacleCollision(obs);
                }
            }
        }
        
        // Move letters
        for (auto& letter : letters) {
            letter.y += scrollSpeed * dt;
            if (!letter.collected && letter.y > 0.85f && letter.y < 0.95f) {
                if (std::abs(letter.x - raftX) < 0.1f) {
                    handleLetterCollision(letter);
                }
            }
        }
        
        // Cleanup offscreen
        obstacles.erase(std::remove_if(obstacles.begin(), obstacles.end(), 
            [](const Obstacle& o) { return o.y > 1.2f || o.hit; }), obstacles.end());
            
        letters.erase(std::remove_if(letters.begin(), letters.end(), 
            [](const CollectableLetter& l) { return l.y > 1.2f || l.collected; }), letters.end());
            
        if (health <= 0) {
            status = "gameover";
        }
    }
    
    void spawnRandomEntity() {
        std::uniform_real_distribution<float> dist(0.1f, 0.9f);
        std::uniform_int_distribution<int> typeDist(0, 99); // 30% obstacles, 70% letters
        int type = typeDist(rng);
        
        if (type < 30) {
            // Obstacle
            Obstacle obs;
            obs.x = dist(rng);
            obs.y = -0.1f;
            std::uniform_int_distribution<int> obsType(0, 3);
            obs.type = obsType(rng);
            obs.hit = false;
            obstacles.push_back(obs);
        } else {
            // Letter
            CollectableLetter letter;
            letter.x = dist(rng);
            letter.y = -0.1f;
            letter.character = getRandomLetter();
            letter.collected = false;
            letters.push_back(letter);
        }
    }
    
    bool isCombining(uint32_t cp) {
        if (cp >= 0x0300 && cp <= 0x036F) return true;
        if (cp >= 0x0610 && cp <= 0x061A) return true;
        if (cp >= 0x064B && cp <= 0x065F) return true;
        if (cp == 0x0670) return true;
        if (cp >= 0x0900 && cp <= 0x0DFF) {
            int offset = cp & 0xFF;
            if (offset >= 0x00 && offset <= 0x03) return true;
            if (offset >= 0x3E && offset <= 0x4D) return true;
            if (offset >= 0x55 && offset <= 0x57) return true;
            if (offset >= 0x62 && offset <= 0x63) return true;
            if (offset == 0x3C) return true;
        }
        if (cp >= 0x0E31 && cp <= 0x0E3A) return true;
        if (cp >= 0x0E47 && cp <= 0x0E4E) return true;
        if (cp == 0x200C || cp == 0x200D) return true; // ZWNJ and ZWJ
        return false;
    }
    
    std::vector<std::string> splitIntoGraphemes(const std::string& word) {
        std::vector<std::string> result;
        size_t i = 0;
        while (i < word.length()) {
            size_t start = i;
            uint32_t cp = 0;
            unsigned char c = word[i];
            int len = 1;
            if (c >= 0xC0 && c <= 0xDF) { len = 2; cp = c & 0x1F; }
            else if (c >= 0xE0 && c <= 0xEF) { len = 3; cp = c & 0x0F; }
            else if (c >= 0xF0 && c <= 0xF7) { len = 4; cp = c & 0x07; }
            else { cp = c; }
            
            for (int j = 1; j < len && i + j < word.length(); ++j) {
                cp = (cp << 6) | (word[i+j] & 0x3F);
            }
            i += len;
            
            if (isCombining(cp) && !result.empty()) {
                result.back() += word.substr(start, len);
            } else {
                result.push_back(word.substr(start, len));
            }
        }
        return result;
    }

    std::string getRandomLetter() {
        if (activeLanguages.empty()) return "A";
        
        std::uniform_int_distribution<int> langDist(0, activeLanguages.size() - 1);
        std::string lang = activeLanguages[langDist(rng)];
        
        auto& dict = dictionaries[lang];
        if (dict.empty()) return "A";
        
        std::uniform_int_distribution<int> wordDist(0, dict.size() - 1);
        auto it = dict.begin();
        std::advance(it, wordDist(rng));
        std::string word = *it;
        if (word.empty()) return "A";
        
        std::vector<std::string> graphemes = splitIntoGraphemes(word);
        if (graphemes.empty()) return "A";
        
        std::string searchWord = pendingWord + activeWord;
        
        if (!searchWord.empty()) {
            std::uniform_int_distribution<int> chance(0, 1);
            if (chance(rng) == 0) {
                std::vector<std::string> possible_letters;
                for (const auto& w : dict) {
                    if (w.find(searchWord) == 0 && w.length() > searchWord.length()) {
                        std::vector<std::string> w_graphemes = splitIntoGraphemes(w);
                        std::vector<std::string> a_graphemes = splitIntoGraphemes(searchWord);
                        if (a_graphemes.size() < w_graphemes.size()) {
                            possible_letters.push_back(w_graphemes[a_graphemes.size()]);
                        }
                    }
                }
                if (!possible_letters.empty()) {
                    std::uniform_int_distribution<int> pick(0, possible_letters.size() - 1);
                    return possible_letters[pick(rng)];
                }
            }
        }
        
        std::uniform_int_distribution<int> gDist(0, graphemes.size() - 1);
        return graphemes[gDist(rng)];
    }
    
    void handleObstacleCollision(Obstacle& obs) {
        obs.hit = true;
        if (obs.type == 3) { // Ramp
            invulnerableTimer = 1.0f; // 1 second jump
            score += 5;
        } else {
            if (invulnerableTimer <= 0) {
                int damage = (obs.type == 0) ? 5 : ((obs.type == 1) ? 3 : 1);
                health -= damage;
                // score any pending word on hit
                if (wordLockTimer > 0 && !pendingWord.empty()) {
                    scorePendingWord();
                }
                activeWord = "";
            }
        }
    }
    
    // Naive unicode string length (number of characters, not bytes)
    int utf8_length(const std::string& str) {
        int length = 0;
        for (size_t i = 0; i < str.length(); i++) {
            if ((str[i] & 0xC0) != 0x80) length++;
        }
        return length;
    }
    
    void scorePendingWord() {
        if (pendingWord.empty()) return;
        int len = utf8_length(pendingWord);
        health = std::min(100, health + len);
        score += 10 * len;
        wordsFound++;
        foundWordsList.push_back(pendingWord);
        pendingWord = "";
        wordLockTimer = 0.0f;
    }

    void handleLetterCollision(CollectableLetter& letter) {
        letter.collected = true;
        activeWord += letter.character;
        checkWordValid();
    }
    
    void checkWordValid() {
        if (activeWord.empty()) return;
        
        std::string fullWord = pendingWord + activeWord;
        
        bool found = false;
        for (const auto& lang : activeLanguages) {
            if (dictionaries[lang].find(fullWord) != dictionaries[lang].end()) {
                found = true;
                break;
            }
        }
        
        if (found) {
            pendingWord = fullWord;
            activeWord = "";
            wordLockTimer = 15.0f;
            for (const auto& lang : activeLanguages) {
                if (dictionaries[lang].find(fullWord) != dictionaries[lang].end()) {
                    currentLanguage = lang;
                    break;
                }
            }
        } else {
            bool isPrefix = false;
            for (const auto& lang : activeLanguages) {
                for (const auto& word : dictionaries[lang]) {
                    if (word.find(fullWord) == 0) {
                        isPrefix = true;
                        currentLanguage = lang;
                        break;
                    }
                }
                if (isPrefix) break;
            }
            if (isPrefix) {
                if (wordLockTimer > 0) {
                    wordLockTimer = 15.0f;
                }
            } else {
                // Invalid sequence. If we had a pending word, lock it now and start fresh with this invalid letter.
                if (wordLockTimer > 0 && !pendingWord.empty()) {
                    scorePendingWord();
                }
                // Check if the current letter by itself is a valid prefix (or just reset activeWord)
                // For simplicity, we just keep activeWord as the bad letter and if it's not a prefix, it'll clear next time.
                // Wait, if activeWord is a bad prefix, we should clear it unless the new letter starts a word.
                bool newPrefix = false;
                for (const auto& lang : activeLanguages) {
                    for (const auto& word : dictionaries[lang]) {
                        if (word.find(activeWord) == 0) {
                            newPrefix = true;
                            currentLanguage = lang;
                            break;
                        }
                    }
                    if (newPrefix) break;
                }
                if (!newPrefix) {
                    activeWord = "";
                }
            }
        }
    }
    
    // Accessors for UI
    std::string getStatus() { return status; }
    int getHealth() { return health; }
    int getScore() { return score; }
    float getRaftX() { return raftX; }
    float getInvulnerableTimer() { return invulnerableTimer; }
    std::string getActiveWord() { 
        if (wordLockTimer > 0) {
            return pendingWord + activeWord;
        }
        return activeWord; 
    }
    
    std::string getActiveLanguagesCsv() {
        std::ostringstream oss;
        for (size_t i = 0; i < activeLanguages.size(); ++i) {
            if (i > 0) oss << ",";
            oss << activeLanguages[i];
        }
        return oss.str();
    }
    
    // Serialize obstacles/letters for Java
    // Format: type,x,y;type,x,y...
    std::string getObstaclesData() {
        std::ostringstream oss;
        for (const auto& obs : obstacles) {
            oss << obs.type << "," << obs.x << "," << obs.y << ";";
        }
        return oss.str();
    }
    
    // Format: char,x,y;char,x,y...
    std::string getLettersData() {
        std::ostringstream oss;
        for (const auto& l : letters) {
            oss << l.character << "," << l.x << "," << l.y << ";";
        }
        return oss.str();
    }
    
    std::string getCurrentLanguage() { return currentLanguage; }
    
    float getWordLockTimer() { return wordLockTimer; }
    
    std::string getFoundWords() {
        std::ostringstream oss;
        for (size_t i = 0; i < foundWordsList.size(); ++i) {
            if (i > 0) oss << ",";
            oss << foundWordsList[i];
        }
        return oss.str();
    }
    
    std::string getWordLanguages(std::string word) {
        std::ostringstream oss;
        bool first = true;
        for (const auto& lang : activeLanguages) {
            if (dictionaries[lang].find(word) != dictionaries[lang].end()) {
                if (!first) oss << ",";
                oss << lang;
                first = false;
            }
        }
        return oss.str();
    }
};

DESM_EXPORT_CLASS(PolyglotRapids);

