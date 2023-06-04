import '../css/style.css'
import {Actor, Color, Engine, Font, FontUnit, Input, Label, Physics, randomInRange, Timer, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from "./player.js";
import {Background} from "./background.js";
import {Ground} from "./ground.js";
import {Level1} from "./level1.js";



export class Game extends Engine {

    constructor() {
        super({
            width: 1440,
            height: 900,
            displayMode: "fullscreen",
        })
        this.showDebug(true)
        Physics.useRealisticPhysics()
        Physics.gravity = new Vector(0, 10000)
        this.start(ResourceLoader).then(() => this.startGame())
    }
    score
    scorelabel
    timer

    startGame(engine) {
        this.engine = engine
        this.add("level1", new Level1(this.engine))
        this.goToScene("level1")

            this.score = 0
            this.scorelabel = new Label({
                text: `Score: ${this.score}`,
                pos: new Vector(100, 100),
                font: new Font({
                    family: 'impact',
                    size: 40,
                    unit: FontUnit.Px,
                    color:Color.White
                })
            })
            this.add(this.scorelabel)

        this.timer = new Timer({
            interval: 100,
            repeats: true,
            fcn: () => {
                this.updateScore()
                console.log(this.score)
            }
        })
        this.add(this.timer)
    }

    updateScore(){
        this.score++
        this.scorelabel.text = `Score: ${this.score}`
    }



}
new Game()

