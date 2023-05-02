import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {ICoordinates} from "../Interfaces/ICoordinates";
import {ICelestialBodyParameters} from "../Interfaces/ICelestialBodyParameters";

export class CelestialBody implements ICelestialBody {
    private readonly _velocity: ICoordinates;
    private readonly _position: ICoordinates;
    private readonly _acceleration?: ICoordinates;
    private readonly _name: string;
    private readonly _mass: number;
    private readonly _radius: number;
    private readonly _color: string;
    scale: number;

    constructor(parameters: ICelestialBodyParameters) {
        const velocity: ICoordinates = {
            x: parameters.vx,
            y: parameters.vy
        };
        const position: ICoordinates = {
            x: parameters.x,
            y: parameters.y
        }
        const acceleration: ICoordinates = {
            x: 0,
            y: 0
        };
        this._velocity = velocity;
        this._position = position;
        this._acceleration = acceleration;
        this._mass = parameters.m;
        this._radius = parameters.radius;
        this._color = parameters.color;
        this._name = parameters.name;
    }

    public updateAcceleration(acceleration: ICoordinates): void {
        this._acceleration.x = acceleration.x;
        this._acceleration.y = acceleration.y;
    }

    public updatePosition(position: ICoordinates): void {
        this._position.x = position.x;
        this._position.y = position.y;
    }

    public updateVelocity(velocity: ICoordinates): void {
        this._velocity.x = velocity.x;
        this._velocity.y = velocity.y;
    }

    get name(): string {
        return this._name;
    }

    get mass(): number {
        return this._mass;
    }

    get radius(): number {
        return this._radius;
    }

    get color(): string {
        return this._color;
    }

    get velocity(): ICoordinates {
        return this._velocity;
    }

    get position(): ICoordinates {
        return this._position;
    }

    get acceleration(): ICoordinates {
        return this._acceleration;
    }
}