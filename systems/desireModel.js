/**
 * Desire Model — Slice 30
 * Defines the data structure for desire states.
 */

export const DesireModel = {
    create(desire, intensity, polarity, emotionSource) {
        return {
            desire,
            intensity,
            polarity,
            emotionSource,
            timestamp: Date.now()
        }
    }
}
