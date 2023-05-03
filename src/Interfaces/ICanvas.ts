import {ICelestialBody} from "./ICelestialBody";
import {IVector} from "./IVector";

export interface ICanvas {
    scale: number;

    draw(
        bodies: ICelestialBody[],
        focus: number
    ): void;
}