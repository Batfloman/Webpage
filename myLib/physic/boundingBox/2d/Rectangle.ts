import { BoundingBox } from "../BoundingBox";

export class Rectangle extends BoundingBox {
    private width: number;
    private height: number;
    
    constructor(width: number, height: number) {
        super();

        this.width = width;
        this.height = height;
    }

    public getArea(): number {
        return this.width * this.height;
    }
}