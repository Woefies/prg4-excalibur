import {Actor, Engine, Physics, Random, Scene, Timer, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from "./player.js";
import {Background} from "./background.js";
import {Ground} from "./ground.js";
import {Enemy} from "./enemy.js";




export class Level1 extends Scene {
    constructor(engine) {
        super();
    }


    game
    engine

    onInitialize(_engine) {
        this.game = _engine
        console.log("level1")

        this.timer = new Timer({
            fcn: () => this.spawn(_engine),
            interval: 1000,
            repeats: true
        })
        _engine.currentScene.add(this.timer)
        this.timer.start()

        this.random = new Random(1337)
    }

    onActivate(ctx) {


        const background = new Background();
        this.add(background)

        let posx = 0
        for ( let i = 0; i < 45; i++) {
            const ground = new Ground(posx, 600);
            this.add(ground)
            posx += 33
        }
        const player = new Player(550, 550);
        this.add(player)


    }

    spawn(engine) {
        console.log("spawn")
        const enemy = new Enemy(
            this.random.integer(550, 1500),
            this.random.integer(550, 1500)
        )
        engine.currentScene.add(enemy)
    }
}





