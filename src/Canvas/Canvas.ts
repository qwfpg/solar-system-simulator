import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {IVector} from "../Interfaces/IVector";
import {ICanvas} from "../Interfaces/ICanvas";
import {DrawableScalable} from "../base/DrawableScalable";

export class Canvas implements ICanvas {
    public scale: number = 1e10;
    private translate: IVector = {x: 0, y: 0};

    constructor(
        private readonly canvas: HTMLCanvasElement,
        private readonly context: CanvasRenderingContext2D,
    ) {
    }

    public draw(
        bodies: (ICelestialBody & DrawableScalable)[],
        focus: number,
    ): void {
        const canvasTranslate = this.calculateCanvasTranslate(bodies, focus);

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.save();
        this.context.translate(canvasTranslate.x, canvasTranslate.y)

        for (const body of bodies) {
            this.drawBody(body);
        }
        this.context.restore();
    }

    private
    drawBody(body: (ICelestialBody & DrawableScalable)) {
        const position = body.scaleVector(body.position, this.scale);
        const radius = body.scaleValue(body.radius, this.scale);

        body.draw(this.context, position, radius);
    }
    private calculateCanvasTranslate(bodies: ICelestialBody[], focus: number): IVector {
        const {width, height} = this.canvas;

        return {
            x: (width / 2 - bodies[focus].position.x / this.scale) + this.translate.x,
            y: (height / 2 - bodies[focus].position.y / this.scale) + this.translate.y
        }
    }
}
