import {ICelestialBodiesFactory} from "../Interfaces/ICelestialBodiesFactory";
import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {CelestialBody} from "./CelestialBody.js";
import {celestialBodiesConfig} from './celestialBodiesConfig.js';
import {ICelestialBodyParameters} from "../Interfaces/ICelestialBodyParameters";

export class CelestialBodiesFactory implements ICelestialBodiesFactory {
    public create(): ICelestialBody[] {
        return celestialBodiesConfig.map((parameters: ICelestialBodyParameters) => {
            const {_velocity, _position, _name, _mass, _radius, _color} = parameters

            return new CelestialBody( _velocity, _position, _name, _mass, _radius, _color );
        })
    }
}