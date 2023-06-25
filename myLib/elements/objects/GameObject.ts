import * as THREE from "three";
import { Util } from "../../Util";
import { MyObject } from "./MyObject";

export class GameObject extends MyObject {

    // group translates are world translates
    group: THREE.Group;
    // mesh translates are local space translates
    mesh: THREE.Mesh;

    constructor(mesh: THREE.Mesh, pos?: THREE.Vector3, facing?: THREE.Vector3) {
        super();
        this.group = new THREE.Group();
        this.mesh = mesh;

        this.pos = this.group.position;
        if(pos) this.pos.copy(pos);
        this.facing = facing ?? new THREE.Vector3(0, 1, 0); // standard pointing up

        this.group.add(mesh);
    }

    update(dt: number): void {
        console.warn("Method not defined!")
    }

    getThreeObj = () => this.group;

    rotateOnAxis(axis: THREE.Vector3, deg: number): void {
        this.group.rotateOnAxis(axis, Util.convert.degToRad(deg));
    }
    override rotate(euler: THREE.Euler) {
        this.group.rotateX(euler.x);
        this.group.rotateY(euler.y);
        this.group.rotateZ(euler.z);
        this.facing.applyEuler(euler);
    }

    resetMesh() {
        this.mesh.position.set(0, 0, 0);
        this.mesh.rotation.set(0, 0, 0);
    }
    translateMesh(x?: THREE.Vector3 | number, y?: number, z?: number): void {
        const vec = x instanceof THREE.Vector3 ? x : new THREE.Vector3(x ?? 0, y ?? 0, z ?? 0);
        
        this.mesh.position.add(vec);
    }
    rotateMesh2d(deg: number): void {
        this.rotateMesh(new THREE.Euler(0, 0, -Util.convert.degToRad(deg)))
    }
    rotateMesh3d(degX: number, degY: number, degZ: number) {
        this.rotateMesh(new THREE.Euler(Util.convert.degToRad(degX), Util.convert.degToRad(degY), Util.convert.degToRad(degZ)));
    }
    rotateMesh(euler: THREE.Euler) {
        this.mesh.rotateX(euler.x);
        this.mesh.rotateY(euler.y);
        this.mesh.rotateZ(euler.z);
    }
}