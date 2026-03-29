/**
 * Emotion Model — Slice 29
 * Defines the data structure for emotional states.
 */

export const EmotionModel = {
    create(emotion, intensity, tone) {
        return {
            emotion,
            intensity,
            tone,
            timestamp: Date.now()
        }
    }
}
