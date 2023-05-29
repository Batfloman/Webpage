import { Rectangle } from "./Rectangle";

export class Square extends Rectangle {
    constructor(size: number) {
        super(size, size);
    }
}