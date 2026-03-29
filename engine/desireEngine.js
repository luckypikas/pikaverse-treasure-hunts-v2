/**
 * Desire Engine — Slice 30
 * Cosmic Desire, Pull, Attraction, Longing & Mythic Motivation
 * ------------------------------------------------------------
 * This engine generates, stores, updates, and resolves
 * desire states based on emotional input and metaphysical flow.
 */

import { EmotionEngine } from "./emotionEngine.js"

export const DesireEngine = {
    state: {
        currentDesire: null,
        intensity: 0,
        polarity: null,       // "toward", "away", "neutral"
        timestamp: null,
        history: []
    },

    /**
     * Initialize the desire layer.
     */
    init() {
        this.state.currentDesire = "none"
        this.state.intensity = 0
        this.state.polarity = "neutral"
        this.state.timestamp = Date.now()
        this.state.history = []
    },

    /**
     * Generate a new desire state.
     * @param {string} desire - e.g. "seek truth", "avoid danger", "gain clarity"
     * @param {number} intensity - 0–100
     * @param {string} polarity - "toward", "away", "neutral"
     */
    generate(desire, intensity = 50, polarity = "toward") {
        const entry = {
            desire,
            intensity,
            polarity,
            emotionSource: EmotionEngine.snapshot(),
            timestamp: Date.now()
        }

        this.state.currentDesire = desire
        this.state.intensity = intensity
        this.state.polarity = polarity
        this.state.timestamp = entry.timestamp
        this.state.history.push(entry)

        return entry
    },

    /**
     * Desire naturally decays unless reinforced.
     */
    decay(rate = 4) {
        this.state.intensity = Math.max(0, this.state.intensity - rate)
        return this.state.intensity
    },

    /**
     * Reinforce desire based on emotional intensity.
     */
    reinforce() {
        const emotion = EmotionEngine.snapshot()
        const boost = Math.floor(emotion.intensity * 0.2)
        this.state.intensity = Math.min(100, this.state.intensity + boost)
        return this.state.intensity
    },

    /**
     * Get the current desire snapshot.
     */
    snapshot() {
        return {
            desire: this.state.currentDesire,
            intensity: this.state.intensity,
            polarity: this.state.polarity,
            timestamp: this.state.timestamp
        }
    }
}

DesireEngine.init()
