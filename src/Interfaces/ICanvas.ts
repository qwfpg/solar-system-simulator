import {ICelestialBody} from "./ICelestialBody";
import {ICoordinates} from "./ICoordinates";

export interface ICanvas {
    draw(
        bodies: ICelestialBody[],
        translate: ICoordinates,
        scale: number
    ): void;

    getDimensions(): ICoordinates
}