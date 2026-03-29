/**
 * Desire UI — Slice 30
 * Player-facing desire display layer.
 */

import { DesireEngine } from "../engine/desireEngine.js"

export const DesireUI = {
    render(targetElement) {
        const snap = DesireEngine.snapshot()

        targetElement.innerHTML = `
            <div class="desire-ui">
                <h3>Desire State</h3>
                <p><strong>Desire:</strong> ${snap.desire}</p>
                <p><strong>Intensity:</strong> ${snap.intensity}</p>
                <p><strong>Polarity:</strong> ${snap.polarity}</p>
            </div>
        `
    }
}
