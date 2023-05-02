import {ICelestialBodiesFactory} from "../Interfaces/ICelestialBodiesFactory";
import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {CelestialBody} from "./CelestialBody.js";
import {celestialBodiesConfig} from './celestialBodyConfig.js';
import {ICelestialBodyParameters} from "../Interfaces/ICelestialBodyParameters";

export class CelestialBodiesFactory implements ICelestialBodiesFactory {
    public create(): ICelestialBody[] {
        return celestialBodiesConfig.map((parameters: ICelestialBodyParameters) => {
            return new CelestialBody(parameters);
        })
    }
}