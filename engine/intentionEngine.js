/**
 * Intention Engine — Slice 31
 * Cosmic Intention, Aim, Direction, Orientation & Mythic Vector
 * -------------------------------------------------------------
 * This engine converts desire into a chosen direction — the first
 * moment where the universe “leans toward” a trajectory.
 */

import { DesireEngine } from "./desireEngine.js"

export const IntentionEngine = {
    state: {
        currentIntention: null,
        clarity: 0,           // how defined the intention is (0–100)
        direction: null,      // “forward”, “inward”, “outward”, “upward”, etc.
        timestamp: null,
        history: []
    },

    /**
     * Initialize the intention layer.
     */
    init() {
        this.state.currentIntention = "undefined"
        this.state.clarity = 0
        this.state.direction = "neutral"
        this.state.timestamp = Date.now()
        this.state.history = []
    },

    /**
     * Generate a new intention from desire.
     * @param {string} intention - e.g. "move forward", "seek knowledge"
     * @param {number} clarity - 0–100
     * @param {string} direction - metaphysical orientation
     */
    generate(intention, clarity = 50, direction = "forward") {
        const desire = DesireEngine.snapshot()

        const entry = {
            intention,
            clarity,
            direction,
            desireSource: desire,
            timestamp: Date.now()
        }

        this.state.currentIntention = intention
        this.state.clarity = clarity
        this.state.direction = direction
        this.state.timestamp = entry.timestamp
        this.state.history.push(entry)

        return entry
    },

    /**
     * Intention sharpens when desire is strong.
     */
    reinforce() {
        const desire = DesireEngine.snapshot()
        const boost = Math.floor(desire.intensity * 0.25)
        this.state.clarity = Math.min(100, this.state.clarity + boost)
        return this.state.clarity
    },

    /**
     * Intention fades without reinforcement.
     */
    decay(rate = 3) {
        this.state.clarity = Math.max(0, this.state.clarity - rate)
        return this.state.clarity
    },

    /**
     * Get the current intention snapshot.
     */
    snapshot() {
        return {
            intention: this.state.currentIntention,
            clarity: this.state.clarity,
            direction: this.state.direction,
            timestamp: this.state.timestamp
        }
    }
}

IntentionEngine.init()
