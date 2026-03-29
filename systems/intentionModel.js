/**
 * Intention Model — Slice 31
 * Defines the data structure for intention states.
 */

export const IntentionModel = {
    create(intention, clarity, direction, desireSource) {
        return {
            intention,
            clarity,
            direction,
            desireSource,
            timestamp: Date.now()
        }
    }
}
