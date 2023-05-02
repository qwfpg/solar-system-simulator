import {ICelestialBody} from "./Interfaces/ICelestialBody";
import {ICanvas} from "./Interfaces/ICanvas";
import {IVector} from "./Interfaces/IVector";
import {IMotionStrategy} from "./Interfaces/IMotionStrategy";

export class Simulator {
    readonly G: number = 6.67430e-11;
    private elapsedTime: number = 0;
    private _translate: IVector = {x: 0, y: 0};
    public _lastDragPoint: IVector = {x: 0, y: 0};
    public dt: number = 3600;
    public focus: number = 0;
    public scale: number = 1e10;
    private onSimulationUpdate;

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

            if (this.onSimulationUpdate) {
                this.onSimulationUpdate(this.elapsedTime);
            }

            requestAnimationFrame(loop);
        }
        this.canvas.draw(
            this.bodies,
            this.calculateCanvasTranslate(),
            this.scale
        );
        loop();
    }

    public setOnSimulationUpdate(callback: (elapsedTime: number) => void): void {
        this.onSimulationUpdate = callback;
    }

    private calculateExecutionTime(): void {
        this.elapsedTime += this.dt / (60 * 60 * 24);
    }

    private calculateCanvasTranslate(): IVector {
        const canvasDimensions: IVector = this.canvas.getDimensions();

        return {
            x: (canvasDimensions.x / 2 - this.bodies[this.focus].position.x / this.scale) + this._translate.x,
            y: (canvasDimensions.y / 2 - this.bodies[this.focus].position.y / this.scale) + this._translate.y
        }
    }
}
