import {ICelestialBody} from "./ICelestialBody.js";

export interface ICelestialBodiesFactory {
    create():  Array<ICelestialBody>;
}