import { Util } from "../../../../myLib/Util";
import { Game } from "../../../../myLib/systems/Game";

const canvas = document.querySelector("canvas");

const game = new Game(canvas, true);

// const clazz = Util.object.getSuperClassName(Game);
// console.log(clazz)

console.log(Util.class.getAllSuperClassNames(Game))
// game.addObject()