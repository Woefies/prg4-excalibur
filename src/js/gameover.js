import {Background} from "./background.js";
import {ResourceLoader} from "./resources.js";
import {Scene} from "excalibur";

export class Gameover extends Scene {
    constructor() {
        super({
            width: 1440,
            height: 700
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.showDebug(true)
        const background = new Background();
        this.add(background)
    }
}

