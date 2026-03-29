/**
 * Intention UI — Slice 31
 * Player-facing intention display layer.
 */

import { IntentionEngine } from "../engine/intentionEngine.js"

export const IntentionUI = {
    render(targetElement) {
        const snap = IntentionEngine.snapshot()

        targetElement.innerHTML = `
            <div class="intention-ui">
                <h3>Intention State</h3>
                <p><strong>Intention:</strong> ${snap.intention}</p>
                <p><strong>Clarity:</strong> ${snap.clarity}</p>
                <p><strong>Direction:</strong> ${snap.direction}</p>
            </div>
        `
    }
}
