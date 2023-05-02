import {ICelestialBody} from "../Interfaces/ICelestialBody";

export class RungeKuttaSolver {
    private G = 6.67430e-11;

    computeAcceleration(body: ICelestialBody, celestialBodies: ICelestialBody[], dt): void {
        let ax = 0;
        let ay = 0;

        for (const otherBody of celestialBodies) {
            if (body === otherBody) continue;

            const force = this.computeGravitationalForce(body, otherBody);
            const dx: number = otherBody.position.x - body.position.x;
            const dy: number = otherBody.position.y - body.position.y;
            const distance: number = Math.sqrt(dx * dx + dy * dy);

            ax += (force * dx / distance) / body.mass;
            ay += (force * dy / distance) / body.mass;
        }
        body.updateAcceleration({
            x: ax,
            y: ay
        })
        body.updatePosition({
            x:
                body.position.x +
                body.velocity.x * dt +
                0.5 * body.acceleration.x * dt * dt,
            y:
                body.position.y +
                body.velocity.y * dt +
                0.5 * body.acceleration.y * dt * dt,
        });
        body.updateVelocity({
            x: body.velocity.x + body.acceleration.x * dt,
            y: body.velocity.y + body.acceleration.y * dt,
        });

    }

    private computeGravitationalForce(body1: ICelestialBody, body2: ICelestialBody): number {
        const dx: number = body2.position.x - body1.position.x;
        const dy: number = body2.position.y - body1.position.y;
        const distance: number = Math.sqrt(dx * dx + dy * dy);
        return this.G * body1.mass * body2.mass / (distance * distance);
    }
}