/**
 * Emotion Engine — Slice 29
 * Cosmic Emotion, Feeling, Sensation & Mythic Affect
 * ---------------------------------------------------
 * This engine generates, stores, updates, and resolves
 * emotional states for the metaphysical runtime.
 */

export const EmotionEngine = {
    state: {
        currentEmotion: null,
        intensity: 0,
        tone: null,
        timestamp: null,
        history: []
    },

    /**
     * Initialize the emotional layer.
     */
    init() {
        this.state.currentEmotion = "neutral"
        this.state.intensity = 0
        this.state.tone = "balanced"
        this.state.timestamp = Date.now()
        this.state.history = []
    },

    /**
     * Generate a new emotional state.
     * @param {string} emotion - e.g. "hope", "fear", "curiosity"
     * @param {number} intensity - 0–100
     * @param {string} tone - "positive", "negative", "neutral"
     */
    generate(emotion, intensity = 50, tone = "neutral") {
        const entry = {
            emotion,
            intensity,
            tone,
            timestamp: Date.now()
        }

        this.state.currentEmotion = emotion
        this.state.intensity = intensity
        this.state.tone = tone
        this.state.timestamp = entry.timestamp
        this.state.history.push(entry)

        return entry
    },

    /**
     * Reduce emotional intensity over time.
     */
    decay(rate = 5) {
        this.state.intensity = Math.max(0, this.state.intensity - rate)
        return this.state.intensity
    },

    /**
     * Get the current emotional snapshot.
     */
    snapshot() {
        return {
            emotion: this.state.currentEmotion,
            intensity: this.state.intensity,
            tone: this.state.tone,
            timestamp: this.state.timestamp
        }
    }
}

EmotionEngine.init()
