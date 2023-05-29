import { Util } from "./Util"

window.addEventListener("keydown", (event) => Input.keyDown(event.code));
window.addEventListener("keyup", (event) => Input.keyUp(event.code));
window.addEventListener("blur", () => Input.clearPressedKeys());

export const Input = {
    pressedKeys: new Array<string>(),

    keyDown: (key: string) => {
        if(!Input.isPressed(key)) Util.array.addTo(Input.pressedKeys, key)
    },
    keyUp: (key: string) => Util.array.removeFrom(Input.pressedKeys, key),

    clearPressedKeys: () => Input.pressedKeys = new Array<string>(),

    isPressed: (key: string) => Input.pressedKeys.includes(key), 
}