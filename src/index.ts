import {Simulator} from "./Simulator.js";
import {CelestialBodiesFactory} from "./CelestialBodies/CelestialBodiesFactory.js";
import {Canvas} from "./Canvas/Canvas.js";
import {ICelestialBodiesFactory} from "./Interfaces/ICelestialBodiesFactory";
import {RungeKuttaMotionStrategy} from "./MotionStrategies/RungeKuttaMotionStrategy.js";
import {RungeKuttaSolver} from "./IntegratorSolvers/RungeKuttaSolver.js";
import {SimulatorController} from "./SimulatorController.js";

const canvasHTML: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
const context: CanvasRenderingContext2D = canvasHTML.getContext("2d");
const canvas: Canvas = new Canvas(canvasHTML, context);
const celestialBodyFactory: ICelestialBodiesFactory = new CelestialBodiesFactory();

const simulator = new Simulator(
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

const zoomInButton = <HTMLElement>document.querySelector('#zoom-in');
const zoomOutButton = <HTMLElement>document.querySelector('#zoom-out');
const elapsedTimeElement = <HTMLElement>document.querySelector('#elapsed-time');

const controller = new SimulatorController(simulator, zoomInButton, zoomOutButton, elapsedTimeElement);
simulator.setOnSimulationUpdate((elapsedTime: number) => {
    controller.updateElapsedTime(elapsedTime);
});