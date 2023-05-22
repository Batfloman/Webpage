import { Game } from "../../myLib/systems/Game";
import * as THREE from "three";
import { Satellite } from "./src/Satellite";
import { Util } from "../../myLib/Util";

const canvas = document.querySelector("canvas");

const game = new Game(canvas, true);

initialize();

function initialize() {
    game.camera.translateZ(10);
    { // light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
        game.scene.add(ambientLight);
    }
    
    let sun;
    { // sun
        const texture = new THREE.TextureLoader().load("./img/Sun_Texture.jpg");
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(),
            new THREE.MeshBasicMaterial({map: texture})
        )
        const pointLight = new THREE.PointLight(0xffffff, 1, 10);
        sphere.add(pointLight);

        const axis = new THREE.Vector3().randomDirection().normalize();
        const obj = new Satellite(sphere, axis, Util.random.between(1000, 10000));
        sun = obj;
        game.addObject(obj);
    }

    let planet1;
    { // planet1
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.5),
            new THREE.MeshPhongMaterial({color: 0xffffff * Math.random()})
        )

        const axis = new THREE.Vector3().randomDirection().normalize();
        const obj = new Satellite(sphere, axis, 1000, {axis, distance: Util.random.between(2.5, 4, 2), duration: Util.random.between(15000, 45000), center: sun});
        planet1 = obj;
        game.addObject(obj);
    }
    { // planet1 moon 
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.25),
            new THREE.MeshPhongMaterial({color: 0xffffff * Math.random()})
        )

        const axis = new THREE.Vector3().randomDirection().normalize();
        const obj = new Satellite(sphere, axis, 1000, {axis, distance: Util.random.between(1, 1.5, 2), duration: Util.random.between(5000, 10000), center: planet1});
        game.addObject(obj);
    }

    { // planet 2
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.5),
            new THREE.MeshPhongMaterial({color: 0xffffff * Math.random()})
        )

        const axis = new THREE.Vector3().randomDirection().normalize();
        const obj = new Satellite(sphere, axis, 1000, {axis, distance: Util.random.between(3, 6, 2), duration: Util.random.between(60000, 120000), center: sun});
        game.addObject(obj);
    }
}