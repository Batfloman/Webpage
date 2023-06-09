export const Util = {
    array: {
        addTo<T>(arr: T[], ...items: T[]): T[] {
            items.forEach(item => arr.push(item));
            return arr;
        },
        removeFrom<T>(arr: T[], ...items: T[]): T[] {
            items.forEach(item => {
                const index = arr.indexOf(item);
                if(index === -1) return;

                arr.splice(index, 1);
            })
            return arr;
        }
    },
    convert: {
        degToRad(deg:number): number {
            return deg * Math.PI / 180;
        },
        radToDeg(rad: number): number {
            return rad * 180 / Math.PI;
        }
    },
    random: {
        /** includes min and max */
        between(min: number, max: number, num_Decimals = 0): number {
            return Util.math.floor(Math.random() * (max - min + Math.pow(10, -num_Decimals)) + min, num_Decimals);
        }
    },
    math: {
        floor(num: number, num_Decimals = 0): number {
            return Math.floor(num * Math.pow(10, num_Decimals)) / Math.pow(10, num_Decimals);
        },
    },
    object: {
        getClass: (obj: Object): Function => obj.constructor,
        getClassName: (obj: Object): string =>  obj.constructor.name,
        getSuperClass: (obj: Object): Function => Object.getPrototypeOf(Object.getPrototypeOf(obj)).constructor,
        getSuperClassName: (obj: Object): string => Object.getPrototypeOf(Object.getPrototypeOf(obj)).constructor.name,
        getAllClassNames: (obj: Object): string[] => {
            let nextClass = Util.object.getClass(obj);
            const foundNames = new Array<string>();
            while(nextClass.name !== "") {
                foundNames.push(nextClass.name);
                nextClass = Util.class.getSuperClass(nextClass);
            }

            return foundNames;
        },
        getAllSuperClassNames: (obj: Object): string[] => {
            let nextClass = Util.object.getSuperClass(obj);
            const foundNames = new Array<string>();
            while(nextClass.name !== "") {
                foundNames.push(nextClass.name);
                nextClass = Util.class.getSuperClass(nextClass);
            }
            return foundNames;
        }
    },
    class: {
        getName: (clasz: Function) => clasz.name,
        getSuperClass: (clasz: Function) => Object.getPrototypeOf(clasz),
        getSuperClassName: (clasz: Function) => Object.getPrototypeOf(clasz).name,
        getAllSuperClassNames: (clasz: Function): String[] => {
            let nextClass = Util.class.getSuperClass(clasz);
            const foundNames = new Array<String>();
            while(nextClass.name !== "") {
                foundNames.push(nextClass.name);
                nextClass = Util.class.getSuperClass(nextClass);
            }
            return foundNames;
        }
    }
}