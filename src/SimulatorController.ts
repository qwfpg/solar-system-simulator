import {Simulator} from "./Simulator";

export class SimulatorController {
    private readonly canvas: HTMLCanvasElement;
    private zoomInButton: HTMLElement;
    private zoomOutButton: HTMLElement;
    private elapsedTimeElement: HTMLElement;
    private timeStepInput: HTMLElement;

    constructor(
        private readonly simulator: Simulator,
    ) {
        this.canvas = <HTMLCanvasElement>document.querySelector('#canvas');
        this.zoomInButton = document.querySelector(".control-buttons button[value='+']");
        this.zoomOutButton = document.querySelector(".control-buttons button[value='-']");
        this.elapsedTimeElement = document.querySelector('#elapsed-time')
        this.timeStepInput = document.querySelector('#time_step_input');

        this.handleResize();
        this.addEventListeners();
    }

    public updateElapsedTime(elapsedTime: number): void {
        this.elapsedTimeElement.innerText = `Elapsed time: ${elapsedTime.toFixed(2)} days`;
    }

    private addEventListeners() {
        this.zoomInButton.addEventListener('click', () => this.handleZoom(0.5));
        this.zoomOutButton.addEventListener('click', () => this.handleZoom(2));
        window.addEventListener('resize', this.handleResize);
    }

    private handleResize() {
        const {innerWidth, innerHeight} = window;
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
    }

    private handleZoom(zoomFactor: number): void {
        this.simulator.canvas.scale *= zoomFactor;
    }
}
