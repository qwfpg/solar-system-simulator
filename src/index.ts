import {SolarSystemSimulator} from "./Simulator.js";
import {CelestialBodiesFactory} from "./CelestialBodies/CelestialBodiesFactory.js";
import {Canvas} from "./Canvas/Canvas.js";
import {ICelestialBodiesFactory} from "./Interfaces/ICelestialBodiesFactory";
import {RungeKuttaMotionStrategy} from "./MotionStrategies/RungeKuttaMotionStrategy.js";
import {RungeKuttaSolver} from "./IntegratorSolvers/RungeKuttaSolver.js";

const canvasHTML: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
const context: CanvasRenderingContext2D = canvasHTML.getContext("2d");
const canvas: Canvas = new Canvas(canvasHTML, context);
const celestialBodyFactory: ICelestialBodiesFactory = new CelestialBodiesFactory();

const simulator = new SolarSystemSimulator(
    new RungeKuttaMotionStrategy(new RungeKuttaSolver()),
    celestialBodyFactory.create(),
    canvas,
);
simulator.run();

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvasHTML.width = window.innerWidth;
    canvasHTML.height = window.innerHeight;
}

resizeCanvas()

//zoom controls
document.querySelectorAll('.control-buttons button').forEach(element => {
    element.addEventListener('click', event => {
        const element = <HTMLTextAreaElement>event.target
        switch (element.value) {
            case '+':
                simulator.scale *= 0.5;
                break;
            case '-':
                simulator.scale *= 2;
                break;
        }

    })
})

