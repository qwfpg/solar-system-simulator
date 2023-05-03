import {ICelestialBody} from "../Interfaces/ICelestialBody";
import {IVector} from "../Interfaces/IVector";

export class RungeKuttaSolver {
    private G = 6.67430e-11;

    step(body: ICelestialBody, celestialBodies: ICelestialBody[], dt): void {
        const acceleration = this.computeAcceleration(body, celestialBodies);
        const position = this.computePosition(body, dt);
        const velocity = this.computeVelocity(body, dt);

        body.updateAcceleration(acceleration)
        body.updatePosition(position);
        body.updateVelocity(velocity);
    }

    private computePosition(body: ICelestialBody, dt: number): IVector {
        const x = body.position.x + body.velocity.x * dt + 0.5 * body.acceleration.x * dt * dt;
        const y = body.position.y + body.velocity.y * dt + 0.5 * body.acceleration.y * dt * dt;
        return {x, y}
    }

    private computeVelocity(body: ICelestialBody, dt: number): IVector {
        const x = body.velocity.x + body.acceleration.x * dt;
        const y = body.velocity.y + body.acceleration.y * dt;
        return {x, y};
    }

    private computeAcceleration(body: ICelestialBody, celestialBodies: ICelestialBody[]): IVector {
        let x = 0;
        let y = 0;

        for (const otherBody of celestialBodies) {
            if (body === otherBody) continue;

            const force = this.computeGravitationalForce(body, otherBody);
            const dx: number = otherBody.position.x - body.position.x;
            const dy: number = otherBody.position.y - body.position.y;
            const distance: number = Math.sqrt(dx * dx + dy * dy);

            x += (force * dx / distance) / body.mass;
            y += (force * dy / distance) / body.mass;
        }
        return {x, y}
    }

    private computeGravitationalForce(body1: ICelestialBody, body2: ICelestialBody): number {
        const dx: number = body2.position.x - body1.position.x;
        const dy: number = body2.position.y - body1.position.y;
        const distance: number = Math.sqrt(dx * dx + dy * dy);
        return this.G * body1.mass * body2.mass / (distance * distance);
    }
}