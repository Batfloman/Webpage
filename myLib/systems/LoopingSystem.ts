// import { Clock } from "./Clock";
import * as THREE from "three";

export class LoopingSystem {
    private clock: THREE.Clock;

    private wasRunningBeforeBlur = false;

    constructor(autoStart = false) {
        this.clock = new THREE.Clock();
        if(autoStart) this.clock.start();
        this.innerLoop();

        window.addEventListener("blur", () => {
            this.wasRunningBeforeBlur = this.clock.running; 
            this.stop()
        });
        window.addEventListener("focus", () => {
            if(this.wasRunningBeforeBlur) this.start();
        });
    }

    public start = (): void => this.clock.start();
    public stop = (): void => this.clock.stop();

    private innerLoop() {
        if(this.clock.running) {
            const dt = this.clock.getDelta();
            this.loop(dt);
        }
        requestAnimationFrame(() => this.innerLoop());
    }
    public loopOnce(): void {
        this.loop(0);
    }

    public loop(dt: number) {
        throw new Error("Method not defined!");
    };
}