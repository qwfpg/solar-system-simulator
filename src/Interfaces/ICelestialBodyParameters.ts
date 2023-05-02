export interface ICelestialBodyParameters {
    name: string,
    m: number,
    x: number;
    y: number;
    vx: number,
    vy: number;
    radius: number,
    minRadius?: number
    color: string
}