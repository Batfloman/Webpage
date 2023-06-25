import { GameObject } from "./GameObject";
import { Input } from "./../../Input";

export class ControllableObject extends GameObject {
    private controls: Map<string, Function> = new Map();

    constructor(mesh: THREE.Mesh, pos?: THREE.Vector3, facing?: THREE.Vector3) {
        super(mesh, pos, facing);
    }

    override update(dt: number) {
        for(const [key, func] of this.controls) {
            if(Input.isPressed(key)) {
                // func(dt);
                func.call(this, dt);
            }
        }
        this.update2(dt);
    }

    update2(dt: number) {
        console.warn("update not implemented:\n", this);
    }

    addControl(key: string, action: Function) {
        this.controls.set(key, action);
    }
}