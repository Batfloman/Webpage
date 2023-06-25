import * as THREE from "three";
import { Util } from "../../Util";
import { BoundingBox } from "../../boundingBox/BoundingBox";

export abstract class MyObject {
    pos: THREE.Vector3;
    get worldPos() { 
        return this.parent ? this.parent.pos.add(this.pos) : this.pos;
    };
    facing: THREE.Vector3; // faces in direction of vec
    
    parent: null | MyObject;
    positionRelative: boolean;

    boundingBox: BoundingBox;

    public abstract update(dt: number): void;

    // === Moving === 
    //#region 

    public translate(x: number, y: number, z: number = 0) {
        this.pos.add(new THREE.Vector3(x, y, z));
    }
    public move(distance: number) {
        this.pos.add(this.facing.multiplyScalar(distance));
        this.facing.normalize();
    }
    public moveTowards(point: THREE.Vector3, distance: number): void {
        const direction = this.pos.sub(point)
            .normalize()
            .multiplyScalar(distance);
        this.pos.add(direction);
    }
    // #endregion

    // === Rotation ===
    //#region

    rotate2d(deg: number): void {
        this.rotate(new THREE.Euler(0, 0, -Util.convert.degToRad(deg)))
    }
    rotate3d(degX: number, degY: number, degZ: number) {
        this.rotate(new THREE.Euler(Util.convert.degToRad(degX), Util.convert.degToRad(degY), Util.convert.degToRad(degZ)));
    }
    rotate (euler: THREE.Euler) {
        this.facing.applyEuler(euler)
    }
    // #endregion

    // === Positioning ===
    //#region 

    public setPosition = (x: number, y: number, z: number = 0) => this.pos.set(x, y, z)
    public setParent = (parent: null | MyObject) => this.parent = parent
    //#endregion

}