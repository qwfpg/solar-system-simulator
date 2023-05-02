import {ICoordinates} from "./ICoordinates";

export interface ICelestialBody {
    name: string;
    velocity: ICoordinates;
    position: ICoordinates;
    acceleration?: ICoordinates;
    mass: number;
    radius: number;
    color: string;
    scale: number;

    updatePosition(position: ICoordinates): void
    updateAcceleration(acceleration: ICoordinates): void;
    updateVelocity(velocity: ICoordinates): void;
}