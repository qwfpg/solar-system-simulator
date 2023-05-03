import {ICelestialBody} from "./Interfaces/ICelestialBody";
import {ICanvas} from "./Interfaces/ICanvas";
import {IMotionStrategy} from "./Interfaces/IMotionStrategy";

export class Simulator {
    private elapsedTime: number = 0;
    public dt: number = 3600;
    public focus: number = 0;
    private onSimulationUpdate: (elapsedTime: number) => void;

    constructor(
        private readonly motionStrategy: IMotionStrategy,
        private readonly bodies: ICelestialBody[],
        public readonly canvas: ICanvas,
    ) {
    }

    public run(): void {
        const loop = () => {
            for (const body of this.bodies) {
                this.motionStrategy.move(body, this.bodies, this.dt);
            }
            this.canvas.draw(this.bodies, this.focus);
            this.calculateExecutionTime();

            if (this.onSimulationUpdate) {
                this.onSimulationUpdate(this.elapsedTime);
            }

            requestAnimationFrame(loop);
        }
        this.canvas.draw(this.bodies, this.focus);
        loop();
    }

    public setOnSimulationUpdate(callback: (elapsedTime: number) => void): void {
        this.onSimulationUpdate = callback;
    }

    private calculateExecutionTime(): void {
        this.elapsedTime += this.dt / (60 * 60 * 24);
    }
}
