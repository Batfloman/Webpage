import { GameObject } from "../elements/objects/GameObject";
import { LoopingSystem } from "./LoopingSystem";
import { Util } from "../Util";
import * as THREE from "three";

export class ThreeJSGame extends LoopingSystem {
    private objects: GameObject[] = [];

    public renderer: THREE.Renderer;
    public scene: THREE.Scene;
    public camera: THREE.Camera;

    constructor(canvas: HTMLCanvasElement, autostart = false) {
        super(autostart);

        this.renderer = new THREE.WebGLRenderer({canvas});
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, canvas.clientWidth/canvas.clientHeight);

        this.resize()
        window.addEventListener("resize", () => this.resize());
    }
    
    override loop(dt: number) {
        this.update(dt);
        this.render();
    }

    private update(dt: number) {
        this.objects?.forEach(obj => obj.update(dt));
    }
    private render() {
        this.renderer?.render(this.scene, this.camera);
    }

    public addObject(obj: GameObject): void {
        Util.array.addTo(this.objects, obj);
        this.scene.add(obj.getThreeObj());
    }
    public removeObject(obj: GameObject): void {
        Util.array.removeFrom(this.objects, obj);
        this.scene.remove(obj.getThreeObj());
    }

    private resize() {
        const w = this.renderer.domElement.getBoundingClientRect().width;
        const h = this.renderer.domElement.getBoundingClientRect().height;

        this.renderer.setSize(w, h, false);

        if(this.camera instanceof THREE.PerspectiveCamera) {
            this.camera.aspect = w / h;
            this.camera.updateProjectionMatrix()
        }
        this.render();
    }
}