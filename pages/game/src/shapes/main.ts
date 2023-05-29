import * as THREE from "three";
import { Util } from "../../../../myLib/Util";
import { ControllableObject } from "../../../../myLib/elements/objects/ControllableObject";
import { Game } from "../../../../myLib/systems/Game";

const canvas = document.querySelector("canvas");

const game = new Game(canvas, true);

const obj = new ControllableObject(new THREE.Mesh());
obj.addControll("w", () => {console.log(this)});

game.addObject(obj);
