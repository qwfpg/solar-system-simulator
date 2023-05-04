import {Simulator} from "./Simulator";

export class SimulatorController {
    private readonly canvas: HTMLCanvasElement;
    private zoomInButton: HTMLElement;
    private zoomOutButton: HTMLElement;
    private elapsedTimeElement: HTMLElement;
    private timeStepForm: HTMLElement;
    private dtInput: HTMLInputElement;

    constructor(
        private readonly simulator: Simulator,
    ) {
        this.canvas = <HTMLCanvasElement>document.querySelector('#canvas');
        this.zoomInButton = document.querySelector(".control-buttons button[value='+']");
        this.zoomOutButton = document.querySelector(".control-buttons button[value='-']");
        this.elapsedTimeElement = document.querySelector('#elapsed-time')
        this.timeStepForm = document.querySelector('#time-step-form');
        this.dtInput = document.querySelector('#dt-input')

        this.handleResize();
        this.addEventListeners();
    }

    public updateElapsedTime(elapsedTime: number): void {
        this.elapsedTimeElement.innerText = `Elapsed time: ${elapsedTime.toFixed(2)} days`;
    }

    private addEventListeners() {
        this.zoomInButton.addEventListener('click', () => this.handleZoom(0.5));
        this.zoomOutButton.addEventListener('click', () => this.handleZoom(2));
        this.timeStepForm.addEventListener('submit', (event) => this.handleTimeStepForm(event));
        this.handleFocus();

        window.addEventListener('resize', this.handleResize);
    }

    private handleFocus() {
        document.addEventListener('keydown', (event) => {
            if (document.activeElement && (document.activeElement as HTMLElement).tagName === "INPUT") {
                return;
            }
            if (event.key >= '1' && event.key <= '9') {
                this.simulator.focus = parseInt(event.key) - 1;
            }
        });
    }

    private handleResize() {
        const {innerWidth, innerHeight} = window;

        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
    }

    private handleTimeStepForm(event) {
        event.preventDefault();
        const dtValue = parseFloat(this.dtInput.value);

        if (!isNaN(dtValue) && dtValue > 0) {
            this.simulator.dt = dtValue;
        }
    }

    private handleZoom(zoomFactor: number): void {
        this.simulator.canvas.scale *= zoomFactor;
    }
}
