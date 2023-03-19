import { Clock } from "./Clock";

export class System {
    private clock: Clock;

    constructor(autoStart = false) {
        this.clock = new Clock(autoStart);
        this.innerLoop();

        window.addEventListener("blur", () => this.pause());
        window.addEventListener("focus", () => this.continue());
    }

    public start = (): void => this.clock.start();
    public pause = (): void => this.clock.pause();
    public continue = (): void => this.clock.continue();

    private innerLoop() {
        if(this.clock.isRunning()) {
            const dt = this.clock.getDT();
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