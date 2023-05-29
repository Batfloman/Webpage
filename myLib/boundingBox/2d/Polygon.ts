import { BoundingBox } from "../BoundingBox";
import * as THREE from "three";

export class Polygon extends BoundingBox {
    private vertices: THREE.Vector2[];

    constructor(points: THREE.Vector2[]) {
        super();

        this.vertices = points;
    }

    public getArea(): number {
        // TODO implementation
        console.warn("Polygon Area Method not defined!");
        return 0;
    }
}