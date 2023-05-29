import { GameObject } from "./GameObject";
import { Input } from "./../../Input";

export class ControllableObject extends GameObject {
    private controlls: Map<string, Function> = new Map();

    constructor(mesh: THREE.Mesh, pos?: THREE.Vector3, facing?: THREE.Vector3) {
        super(mesh, pos, facing);
    }

    override update(dt: number) {
        for(let [key, func] of this.controlls) {
            if(Input.isPressed(key)) func.call(this, dt);
        }
        this.update2(dt);
    }

    update2(dt: number) {
        console.warn("update not implemented:", this);
    }

    addControll(key: string, func: Function) {
        this.controlls.set(key, func);
    }
}