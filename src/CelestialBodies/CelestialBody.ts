import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {IVector} from "../Interfaces/IVector";
import {DrawableScalable} from "../base/DrawableScalable.js";

export class CelestialBody extends DrawableScalable implements ICelestialBody {
    constructor(
        private readonly _velocity: IVector,
        private readonly _position: IVector,
        private readonly _name: string,
        private readonly _mass: number,
        private readonly _radius: number,
        private readonly _color: string,
        private readonly _acceleration: IVector = {x: 0, y: 0},
    ) {
        super();
    }

    draw(context: CanvasRenderingContext2D, position: IVector, radius: number) {
        //todo: move to draw strategy
        if (radius < 4) {
            radius = this.name === 'Sun' ? 4 : 2;
        }

        super.draw(context, position, radius);
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

    get acceleration(): IVector {
        return this._acceleration;
    }

    get position(): IVector {
        return this._position;
    }
}