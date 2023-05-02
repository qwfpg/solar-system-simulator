import {Simulator} from "./Simulator";

export class SimulatorController {
    constructor(
        private simulator: Simulator,
        private zoomInButton: HTMLElement,
        private zoomOutButton: HTMLElement,
        private elapsedTimeElement: HTMLElement
    ) {
        this.zoomInButton.addEventListener('click', () => this.handleZoom(0.5));
        this.zoomOutButton.addEventListener('click', () => this.handleZoom(2));
        // ... другие обработчики событий
    }

    private handleZoom(zoomFactor: number): void {
        this.simulator.scale *= zoomFactor;
    }

    private handleFocusChange(focusIndex: number): void {
        this.simulator.focus = focusIndex;
    }

    public updateElapsedTime(elapsedTime: number): void {
        this.elapsedTimeElement.innerText = `Elapsed time: ${elapsedTime.toFixed(2)} days`;
    }
}
