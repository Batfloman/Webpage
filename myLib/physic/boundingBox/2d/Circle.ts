import { BoundingBox } from "../BoundingBox";

export class Circle extends BoundingBox {
    private radius: number;

    constructor(radius: number) {
        super();

        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}