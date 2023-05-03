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
const controller = new SimulatorController(simulator);
simulator.setOnSimulationUpdate((elapsedTime: number) => {
    controller.updateElapsedTime(elapsedTime);
});

simulator.run();