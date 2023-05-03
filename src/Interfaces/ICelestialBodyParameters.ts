import {IVector} from "./IVector";

export interface ICelestialBodyParameters {
    _name: string,
    _mass: number,
    _position: IVector
    _velocity: IVector
    _radius: number,
    _minRadius?: number
    _color: string
}