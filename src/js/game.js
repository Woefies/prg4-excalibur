import '../css/style.css'
import {Actor, Color, Engine, Font, FontUnit, Input, Label, Physics, randomInRange, Timer, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from "./player.js";
import {Background} from "./background.js";
import {Ground} from "./ground.js";
import {Level1} from "./level1.js";
import {Gameover} from "./gameover.js";
import {Startscreen} from "./startscreen.js";



export class Game extends Engine {

    constructor() {
        super({
            width: 1440,
            height: 700,
            displayMode: "fullscreen",
        })
        this.start(ResourceLoader).then(() => this.startGame())
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0, 900)
        ResourceLoader.suppressPlayButton = true
        // this.showDebug(true)
    }

    scorelabel
    timer

    startGame(engine) {
        this.engine = engine
        this.add ("startscreen", new Startscreen(this.engine))
        this.add("level1", new Level1(this.engine))
        this.add("gameover", new Gameover(this.engine))
        this.goToScene("startscreen")


    }
}
new Game()

