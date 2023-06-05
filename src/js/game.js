import '../css/style.css'
import {Actor, Engine, Physics, Random, randomInRange, Timer, vec, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Fish} from "./fish.js";
import {Background} from "./background.js";
import {Ground} from "./ground.js";
import {Enemy} from "./enemy.js";



export class Game extends Engine {

    constructor() {
        super({
            width: 1440,
            height: 700

        })
        this.start(ResourceLoader).then(() => this.startGame())
       this.random = new Random(1337)
       Physics.useArcadePhysics()
       Physics.gravity = new Vector(0, 900)
        // Physics.acc.setTo(0, 900)
        this.showDebug(true)


    }

    startGame() {

        const background = new Background();
        this.add(background)

        let posx = -33
        let posy = 600
        for ( let a = 0; a < 4; a++) {
            for ( let i = 0; i < 50; i++) {
                const ground = new Ground(posx, posy);
                this.add(ground)
                posx += 33
            }
            posy += 33
            console.log(posy)
        }



        const fish = new Fish(300, 500);
        this.add(fish)

    }
    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            randomRange: [0, 1000],
            interval: 1000,
            repeats: true
        })
        engine.currentScene.add(this.timer)
        this.timer.start()
    }

    spawn(engine) {
        console.log("spawn")
        const enemy = new Enemy(
            this.random.integer(0, 800),
            this.random.integer(0, 600)
        )
        engine.currentScene.add(enemy)
    }

}

new Game()
