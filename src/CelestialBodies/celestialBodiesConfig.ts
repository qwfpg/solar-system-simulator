import {ICelestialBodyParameters} from "../Interfaces/ICelestialBodyParameters";

export const celestialBodiesConfig: ICelestialBodyParameters[] = [
    {
        _name: "Sun",
        _mass: 1.989e30,
        _position: {
            x: 0,
            y: 0
        },
        _velocity: {
            x: 0,
            y: 0
        },
        _radius: 6.9634e8,
        _color: 'yellow'
    },
    {
        _name: 'Mercury',
        _mass: 3.3e23,
        _position: {
            x: 5.79e10,
            y: 0
        },
        _velocity: {
            x: 0,
            y: 4.736e4
        },
        _radius: 2.4397e6,
        _color: 'gray'
    },
    {
        _name: 'Venus',
        _mass: 4.87e24,
        _position: {
            x: 1.082e11,
            y: 0,
        },
        _velocity: {
            x: 0,
            y: 3.502e4
        },
        _radius: 6.0518e6,
        _color: 'orange'
    },
    {
        _name: "Earth",
        _mass: 5.972e24,
        _position: {
            x: 1.496e11,
            y: 0
        },
        _velocity: {
            x: 0,
            y: 2.978e4
        },
        _radius: 6.371e6,
        _color: 'blue'
    },
    {
        _name: "Mars",
        _mass: 6.39e23,
        _position: {
            x: 2.279e11,
            y: 0
        },
        _velocity: {
            x: 0,
            y: 2.407e4
        },
        _radius: 3.3895e6,
        _color: 'red'
    },
    {
        _name: 'Jupiter',
        _mass: 1.898e27,
        _position: {
            x: 7.786e11,
            y: 0
        },
        _velocity: {
            x: 0,
            y: 1.307e4
        },
        _radius: 6.9911e7,
        _color: 'orange'
    },
    {
        _name: 'Saturn',
        _mass: 5.683e26,
        _position: {
            x: 1.433e12,
            y: 0
        },
        _velocity: {
            x: 0,
            y: 9.690e3
        },
        _radius: 5.8232e7,
        _color: 'lightblue'
    },
    {
        _name: 'Uranus',
        _mass: 8.681e25,
        _position: {
            x: 2.873e12,
            y: 0
        },
        _velocity: {
            x: 0,
            y: 6.809e3
        },
        _radius: 2.5362e7,
        _color: 'cyan'
    },
    {
        _name: 'Neptune',
        _mass: 1.024e26,
        _position: {
            x: 4.495e12,
            y: 0
        },
        _velocity: {
            x: 0,
            y: 5.437e3
        },
        _radius: 2.4622e7,
        _color: 'blue'
    },
];
