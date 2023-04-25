import { Util } from "../../../myLib/Util";
import { GameObject } from "../../../myLib/elements/objects/GameObject";
import * as THREE from "three";

export class Satellite extends GameObject {
    center: Satellite | THREE.Vector3;
    axis: THREE.Vector3;
    distance: number;
    duration: number;
    
    orbit: THREE.Group;
    orbitAxis: THREE.Vector3;
    orbitDuration: number;
    orbitCenter: THREE.Vector3 | Satellite;
    
    constructor(
        mesh: THREE.Mesh, 
        axis: THREE.Vector3, 
        duration: number, 
        orbit?: {
            axis: THREE.Vector3,
            distance: number,
            duration: number,
            center: THREE.Vector3 | Satellite,
        }
    ) {
        super(mesh);
        
        this.axis = axis;
        this.duration = duration || Infinity;

        if(orbit) {
            this.orbit = new THREE.Group();
            this.group.add(this.orbit);
            this.orbit.add(this.mesh);
            
            const a = new THREE.Vector3(1, 0, 0);
            const b = new THREE.Vector3(0, 1, 0);
            const perpendicular = new THREE.Vector3().crossVectors(a.equals(orbit.axis.normalize()) ? b : a, orbit.axis).normalize();
            this.mesh.translateOnAxis(perpendicular, orbit.distance);

            this.orbitAxis = orbit.axis;
            this.orbitCenter = orbit.center;
            this.orbitDuration = orbit.duration;
        }
    }

    override update(dt: number): void {
        this.mesh.rotateOnWorldAxis(this.axis, Util.convert.degToRad(dt*1000/this.duration * 360));

        if(this.orbit) {
            this.group.position.copy(this.orbitCenter instanceof Satellite ? this.orbitCenter.mesh.getWorldPosition(new THREE.Vector3()) : this.orbitCenter);
            this.orbit.rotateOnWorldAxis(this.orbitAxis, Util.convert.degToRad(dt*1000/this.orbitDuration * 360));
        }
    }
}

