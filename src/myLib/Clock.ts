export class Clock {
    private running: boolean;
    private lastTime: number;
    private timeBeforePause: number = 0;

    constructor(autoStart = false) {
        this.running = autoStart;

        if(autoStart) this.start();
    }

    public start(): void {
        this.lastTime = Date.now();
        this.timeBeforePause = 0;
        this.running = true;
    }
    public pause(): void {
        if(!this.running) return;

        this.timeBeforePause = this.getDT();
        this.running = false;
    }
    public continue(): void {
        if(this.running) return;

        this.lastTime = Date.now() - this.timeBeforePause;
        this.running = true;
    }

    public getDT(): number {
        if(!this.running) return 0; 

        const now = Date.now();
        const dt = now - this.lastTime;
        this.lastTime = now;
        return dt;
    }

    public isRunning = (): boolean => this.running; 
}