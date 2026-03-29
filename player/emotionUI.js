/**
 * Emotion UI — Slice 29
 * Player-facing emotional display layer.
 */

import { EmotionEngine } from "../engine/emotionEngine.js"

export const EmotionUI = {
    render(targetElement) {
        const snap = EmotionEngine.snapshot()

        targetElement.innerHTML = `
            <div class="emotion-ui">
                <h3>Emotion State</h3>
                <p><strong>Emotion:</strong> ${snap.emotion}</p>
                <p><strong>Intensity:</strong> ${snap.intensity}</p>
                <p><strong>Tone:</strong> ${snap.tone}</p>
            </div>
        `
    }
}
