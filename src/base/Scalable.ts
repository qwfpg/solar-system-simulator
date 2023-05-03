import {IVector} from "../Interfaces/IVector";

export abstract class Scalable {
    scaleValue(value: number, scale: number): number {
        return value / scale;
    }

    scaleVector(vector: IVector, scale: number): IVector {
        return {
            x: vector.x / scale,
            y: vector.y / scale
        };
    }
}
