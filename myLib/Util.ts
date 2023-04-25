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
        }
    }
}