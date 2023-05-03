import {IVector} from "../Interfaces/IVector";

export abstract class DrawableScalable {
    public abstract color: string;

    scaleValue(value: number, scale: number): number {
        return value / scale;
    }

    scaleVector(vector: IVector, scale: number): IVector {
        return {
            x: vector.x / scale,
            y: vector.y / scale
        };
    }

    public draw(context: CanvasRenderingContext2D, position: IVector, radius: number) {
        context.beginPath();
        context.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }
}