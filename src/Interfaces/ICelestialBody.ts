import {IVector} from "./IVector";

export interface ICelestialBody {
    name: string;
    velocity: IVector;
    position: IVector;
    acceleration?: IVector;
    mass: number;
    radius: number;
    color: string;

    updatePosition(position: IVector): void
    updateAcceleration(acceleration: IVector): void;
    updateVelocity(velocity: IVector): void;
}