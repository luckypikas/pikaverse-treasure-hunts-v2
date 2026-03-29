/**
 * Desire Engine — Slice 30
 * Cosmic Desire, Longing, Drive, Attraction & Mythic Motivation
 * -------------------------------------------------------------
 * This engine generates, evolves, and resolves desire states.
 */

import { EmotionEngine } from "./emotionEngine.js"

export const DesireEngine = {
    state: {
        currentDesire: null,
        intensity: 0,
        polarity: "toward",   // toward / away / neutral
        depth: 0,
        persistence: 0,
        timestamp: null,
        history: []
    },

    init() {
        this.state.currentDesire = "none"
        this.state.intensity = 0
        this.state.polarity = "neutral"
        this.state.depth = 0
        this.state.persistence = 0
        this.state.timestamp = Date.now()
        this.state.history = []
    },

    /**
     * Generate a new desire state.
     */
    generate(desire, intensity = 50, polarity = "toward") {
        const emotion = EmotionEngine.snapshot()

        const entry = {
            desire,
            intensity,
            polarity,
            depth: Math.floor(intensity * 0.6),
            persistence: Math.floor(intensity * 0.4),
            emotionSource: emotion,
            timestamp: Date.now()
        }

        this.state.currentDesire = desire
        this.state.intensity = intensity
        this.state.polarity = polarity
        this.state.depth = entry.depth
        this.state.persistence = entry.persistence
        this.state.timestamp = entry.timestamp
        this.state.history.push(entry)

        return entry
    },

    /**
     * Desire grows when emotion is strong.
     */
    reinforce() {
        const emotion = EmotionEngine.snapshot()
        const boost = Math.floor(emotion.intensity * 0.3)

        this.state.intensity = Math.min(100, this.state.intensity + boost)
        this.state.depth = Math.min(100, this.state.depth + Math.floor(boost * 0.6))
        this.state.persistence = Math.min(100, this.state.persistence + Math.floor(boost * 0.4))

        return this.snapshot()
    },

    /**
     * Desire fades without reinforcement.
     */
    decay(rate = 3) {
        this.state.intensity = Math.max(0, this.state.intensity - rate)
        this.state.depth = Math.max(0, this.state.depth - Math.floor(rate * 0.6))
        this.state.persistence = Math.max(0, this.state.persistence - Math.floor(rate * 0.4))

        return this.snapshot()
    },

    snapshot() {
        return {
            desire: this.state.currentDesire,
            intensity: this.state.intensity,
            polarity: this.state.polarity,
            depth: this.state.depth,
            persistence: this.state.persistence,
            timestamp: this.state.timestamp
        }
    }
}

DesireEngine.init()
