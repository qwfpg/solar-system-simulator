import {ICelestialBody} from "./ICelestialBody";

export interface IMotionService {
    integrate(
        body: ICelestialBody,
        celestialBodies: ICelestialBody[],
        dt: number
    ): void;
}