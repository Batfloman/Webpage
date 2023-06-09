import { Util } from "../../Util";
import { GameObject } from "../objects/GameObject";

export abstract class World {
    private chunks: Map<string, Set<GameObject>> = new Map();
    private chunkSize: number = 1;

    private objects: Set<GameObject> = new Set();
    private classSortedObjects: Map<string, Set<GameObject>> = new Map();

    addObject(obj: GameObject) {
        this.objects.add(obj);

        for(let clazz of Util.object.getAllClassNames(obj)) {
            const valueSet = this.classSortedObjects.has(clazz) ? this.classSortedObjects.get(clazz) : new Set<GameObject>();
            valueSet.add(obj);
            this.classSortedObjects.set(clazz, valueSet); 
        }
    }
    removeObject(obj: GameObject) {
        this.objects.delete(obj);

        for(let clazz of Util.object.getAllClassNames(obj)) {
            const valueSet = this.classSortedObjects.has(clazz) ? this.classSortedObjects.get(clazz) : new Set<GameObject>();
            valueSet.delete(obj);
            valueSet.size < 1 ? this.classSortedObjects.delete(clazz) : this.classSortedObjects.set(clazz, valueSet); 
        }
    }

    setChunkSize(size: number) {
        this.chunkSize = size;
        this.putObjectsInChunks();
    }

    putObjectsInChunks() {
        for(let obj of Array.from(this.objects)) {
            const x = obj.pos.x;
            const y = obj.pos.y;

            // TODO
        }
    }
}