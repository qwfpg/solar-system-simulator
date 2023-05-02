import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {IVector} from "../Interfaces/IVector";
import {ICelestialBodyParameters} from "../Interfaces/ICelestialBodyParameters";

export class CelestialBody implements ICelestialBody {
    private readonly _velocity: IVector;
    private readonly _position: IVector;
    private readonly _acceleration?: IVector;
    private readonly _name: string;
    private readonly _mass: number;
    private readonly _radius: number;
    private readonly _color: string;
    scale: number;

    constructor(parameters: ICelestialBodyParameters) {
        const velocity: IVector = {
            x: parameters.vx,
            y: parameters.vy
        };
        const position: IVector = {
            x: parameters.x,
            y: parameters.y
        }
        const acceleration: IVector = {
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

    public updateAcceleration(acceleration: IVector): void {
        this._acceleration.x = acceleration.x;
        this._acceleration.y = acceleration.y;
    }

    public updatePosition(position: IVector): void {
        this._position.x = position.x;
        this._position.y = position.y;
    }

    public updateVelocity(velocity: IVector): void {
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

    get velocity(): IVector {
        return this._velocity;
    }

    get position(): IVector {
        return this._position;
    }

    get acceleration(): IVector {
        return this._acceleration;
    }
}