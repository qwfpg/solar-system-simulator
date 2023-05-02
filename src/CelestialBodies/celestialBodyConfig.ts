import {ICelestialBodyParameters} from "../Interfaces/ICelestialBodyParameters";

export const celestialBodiesConfig: ICelestialBodyParameters[] = [
    {name: "Sun", m: 1.989e30, x: 0, y: 0, vx: 0, vy: 0, radius: 6.9634e8, color: 'yellow'},
    {name: 'Mercury', m: 3.3e23, x: 5.79e10, y: 0, vx: 0, vy: 4.736e4, radius: 2.4397e6, color: 'gray'},
    {name: 'Venus', m: 4.87e24, x: 1.082e11, y: 0, vx: 0, vy: 3.502e4, radius: 6.0518e6, color: 'orange'},
    {name: "Earth", m: 5.972e24, x: 1.496e11, y: 0, vx: 0, vy: 2.978e4, radius: 6.371e6, color: 'blue'},
    {name: "Mars", m: 6.39e23, x: 2.279e11, y: 0, vx: 0, vy: 2.407e4, radius: 3.3895e6, color: 'red'},
    {name: 'Jupiter', m: 1.898e27, x: 7.786e11, y: 0, vx: 0, vy: 1.307e4, radius: 6.9911e7, color: 'orange'},
    {name: 'Saturn', m: 5.683e26, x: 1.433e12, y: 0, vx: 0, vy: 9.690e3, radius: 5.8232e7, color: 'lightblue'},
    {name: 'Uranus', m: 8.681e25, x: 2.873e12, y: 0, vx: 0, vy: 6.809e3, radius: 2.5362e7, color: 'cyan'},
    {name: 'Neptune', m: 1.024e26, x: 4.495e12, y: 0, vx: 0, vy: 5.437e3, radius: 2.4622e7, color: 'blue'},
];
