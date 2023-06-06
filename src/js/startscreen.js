import {
    Actor,
    CollisionType,
    Color,
    Engine,
    Font,
    FontUnit,
    Label,
    Physics,
    Random,
    Scene,
    Timer, vec,
    Vector
} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from "./player.js";
import {Background} from "./background.js";
import {Ground} from "./ground.js";
import {Enemy} from "./enemy.js";





export class Startscreen extends Scene {
    constructor(engine) {
        super();
    }


    game
    engine


    onInitialize(_engine) {
        this.game = _engine
        console.log("start")

        const background = new Background();
        this.add(background)

        this.Title = new Label({
            x: 580,
            y: 300,
            width: 100,
            height: 100,
            text: "PUNKRUNNER",
            color: Color.White,
            font: new Font({size: 50, unit: FontUnit.Px, family: "impact"})
        })
        this.add(this.Title)

        this.startbutton = new Actor({
            x: 720,
            y: 520,
            width: Resources.ButtonStart.width,
            height: Resources.ButtonStart.height,
            collisionType: CollisionType.PreventCollision
        })
        this.startbutton.graphics.use(Resources.ButtonStart.toSprite())
        this.startbutton.actions.scaleTo(vec(3.5,3.5),vec(7,7))
        this.startbutton.on('pointerup', () => {
            this.game.goToScene("level1")
        })
        this.add(this.startbutton)
    }

    onActivate(ctx) {




    }




}





