import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {IVector} from "../Interfaces/IVector";
import {ICanvas} from "../Interfaces/ICanvas";

export class Canvas implements ICanvas {
    public scale: number = 1e10;
    private translate: IVector = {x: 0, y: 0};

    constructor(
        private readonly canvas: HTMLCanvasElement,
        private readonly context: CanvasRenderingContext2D,
    ) {
    }

    public draw(
        bodies: ICelestialBody[],
        focus: number,
    ): void {

        const canvasTranslate = this.calculateCanvasTranslate(bodies, focus);
        this.clearCanvas();
        this.context.save();
        this.context.translate(canvasTranslate.x, canvasTranslate.y)

        for (const body of bodies) {
            let radius = body.radius / this.scale;
            if (radius < 1) {
                radius = 1;
            }
            this.context.beginPath();
            this.context.arc(body.position.x / this.scale, body.position.y / this.scale, radius, 0, 2 * Math.PI);
            this.context.fillStyle = body.color;
            this.context.fill();
        }
        this.context.restore();
    }

    private clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private calculateCanvasTranslate(bodies: ICelestialBody[], focus: number): IVector {
        const {width, height} = this.canvas;

        return {
            x: (width / 2 - bodies[focus].position.x / this.scale) + this.translate.x,
            y: (height / 2 - bodies[focus].position.y / this.scale) + this.translate.y
        }
    }
}
