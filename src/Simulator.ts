import {ICelestialBody} from "./Interfaces/ICelestialBody";
import {ICanvas} from "./Interfaces/ICanvas";
import {ICoordinates} from "./Interfaces/ICoordinates";
import {IMotionStrategy} from "./Interfaces/IMotionStrategy";

export class SolarSystemSimulator {
    readonly G: number = 6.67430e-11;
    private elapsedTime: number = 0;
    private _translate: ICoordinates = {x: 0, y: 0};
    private _lastDragPoint: ICoordinates = {x: 0, y: 0};
    private dt: number = 3600;
    private focus: number = 0;

    public scale: number = 1e10;

    constructor(
        private readonly motionStrategy: IMotionStrategy,
        private readonly bodies: ICelestialBody[],
        private readonly canvas: ICanvas,
    ) {
    }

    public run(): void {
        const loop = () => {
            for (const body of this.bodies) {
                this.motionStrategy.move(body, this.bodies, this.dt);
            }
            this.canvas.draw(
                this.bodies,
                this.calculateCanvasTranslate(),
                this.scale
            );
            this.calculateExecutionTime();

            // document.getElementById('time_execution').innerText = `Elapsed time: ${elapsedTimeInDays.toFixed(2)} days`;

            requestAnimationFrame(loop);
        }
        this.canvas.draw(
            this.bodies,
            this.calculateCanvasTranslate(),
            this.scale
        );
        loop();
    }

    private calculateExecutionTime(): void {
        this.elapsedTime += this.dt / (60 * 60 * 24);
    }

    private calculateCanvasTranslate(): ICoordinates {
        const canvasDimensions: ICoordinates = this.canvas.getDimensions();

        return {
            x: (canvasDimensions.x / 2 - this.bodies[this.focus].position.x / this.scale) + this._translate.x,
            y: (canvasDimensions.y / 2 - this.bodies[this.focus].position.y / this.scale) + this._translate.y
        }
    }
}