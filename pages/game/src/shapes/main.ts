import * as THREE from "three";
import { Util } from "../../../../myLib/Util";
import { ControllableObject } from "../../../../myLib/elements/objects/ControllableObject";
import { Game } from "../../../../myLib/systems/ThreeJSGame";
import { World } from "../../../../myLib/elements/world/World";
import { InfiniteWorld } from "../../../../myLib/elements/world/InfiniteWorld";

const canvas = document.querySelector("canvas");

const game = new Game(canvas, true);

const obj = new ControllableObject(new THREE.Mesh());
obj.addControll("w", () => {console.log(this)});
obj.update2 = () => {};

game.addObject(obj);


const world = new InfiniteWorld();
world.addObject(obj);
world.addObject(obj);
world.addObject(obj);

world.removeObject(obj);