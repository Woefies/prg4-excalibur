import {Actor, Color, Engine, Font, FontUnit, Label, Physics, Random, Scene, Timer, Vector} from "excalibur"
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
    score = 0


    onInitialize(_engine) {
        this.game = _engine
        console.log("gameover")

    }

    onActivate(ctx) {


        const background = new Background();
        this.add(background)

        this.scorelabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(550, 550),
            font: new Font({
                family: 'impact',
                size: 60,
                unit: FontUnit.Px,
                color:Color.White
            })
        })
        this.add(this.scorelabel)

    }




}





