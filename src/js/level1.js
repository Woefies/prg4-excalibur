import {Actor, Color, Engine, Font, FontUnit, Label, Physics, Random, Scene, Timer, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from "./player.js";
import {Background} from "./background.js";
import {Ground} from "./ground.js";
import {Enemy} from "./enemy.js";




export class Level1 extends Scene {
    constructor(engine) {
        super();
        this.random = new Random(1337)
    }


    game
    engine
    score = 0


    onInitialize(_engine) {
        this.game = _engine
        console.log("level1")

        this.timer = new Timer({
            fcn: () => {
                this.spawn(_engine),
                this.updateScore()
            },
            randomRange: [0, 1000],
            interval: 800,
            repeats: true
        })
        _engine.currentScene.add(this.timer)
        this.timer.start()




    }

    onActivate(ctx) {


        const background = new Background();
        this.add(background)

        let posx = -66
        for ( let i = 0; i < 50; i++) {
            const ground = new Ground(posx, 600);
            this.add(ground)
            posx += 33
        }
        const player = new Player(550, 550);
        this.add(player)

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

    }

    updateScore() {
        this.score += 1
        this.scorelabel.text = `Score: ${this.score}`
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





