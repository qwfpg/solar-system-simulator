import {IMotionStrategy} from "../Interfaces/IMotionStrategy";
import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {RungeKuttaSolver} from "../IntegratorSolvers/RungeKuttaSolver";

export class RungeKuttaMotionStrategy implements IMotionStrategy {
    constructor(private readonly gravitySimulator: RungeKuttaSolver) {
    }

    move(body: ICelestialBody, celestialBodies: ICelestialBody[], dt: number): void {
        this.gravitySimulator.computeAcceleration(body, celestialBodies, dt);
    }
}