import '../css/style.css'
import {Actor, Engine, Physics, randomInRange, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Fish} from "./fish.js";
import {Background} from "./background.js";
import {Ground} from "./ground.js";



export class Game extends Engine {

    constructor() {
        super({
            width: 1440,
            height: 700

        })
        this.start(ResourceLoader).then(() => this.startGame())
        this.Physics.useRealisticPhysics()
    }

    startGame() {
        this.showDebug(true)
        const background = new Background();
        this.add(background)

        let posx = 0
        for ( let i = 0; i < 45; i++) {
            const ground = new Ground(posx, 600);
            this.add(ground)
            posx += 33
        }


        const fish = new Fish(550, 500);
        this.add(fish)

    }
}

new Game()
