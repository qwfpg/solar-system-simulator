import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {IVector} from "../Interfaces/IVector";
import {ICanvas} from "../Interfaces/ICanvas";

export class Canvas implements ICanvas {
    constructor(
        private readonly canvas: HTMLCanvasElement,
        private readonly context: CanvasRenderingContext2D,
    ) {
    }

    public getDimensions(): IVector {
        return {
            x: this.canvas.width,
            y: this.canvas.height
        }
    }

    public draw(
        bodies: ICelestialBody[],
        translate: IVector,
        scale: number
    ): void {
        this.clearCanvas();
        this.context.save();
        this.context.translate(translate.x, translate.y)
        for (const body of bodies) {
            let radius = body.radius / scale;
            if (radius < 1) {
                radius = 1;
            }
            this.context.beginPath();
            this.context.arc(body.position.x / scale, body.position.y / scale, radius, 0, 2 * Math.PI);
            this.context.fillStyle = body.color;
            this.context.fill();
        }
        this.context.restore();
    }

    private clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
