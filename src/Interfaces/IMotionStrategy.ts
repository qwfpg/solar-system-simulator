import {ICelestialBody} from "./ICelestialBody";

export interface IMotionStrategy {
    move(body: ICelestialBody, celestialBodies: ICelestialBody[], dt: number): void;
}