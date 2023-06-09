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




export class Gameover extends Scene {
    constructor(engine) {
        super();
    }


    game
    engine
    score


    onInitialize(_engine) {
        this.game = _engine
        console.log("gameover")


        const background = new Background();
        this.add(background)

        this.scorelabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(520, 200),
            font: new Font({
                family: 'impact',
                size: 60,
                unit: FontUnit.Px,
                color:Color.White
            })
        })
        this.add(this.scorelabel)

        this.restartbutton = new Actor({
            z: 100,
            x: 700,
            y: 400,
            width: Resources.ButtonStart.width,
            height: Resources.ButtonStart.height,
            collisionType: CollisionType.PreventCollision
        })
        this.restartbutton.graphics.use(Resources.ButtonStart.toSprite())
        this.restartbutton.actions.scaleTo(vec(3.5,3.5),vec(7,7))
        this.restartbutton.on('pointerup', () => {
            this.game.goToScene("level1")
            window.location.reload()
        })
        this.add(this.restartbutton)

    }

    onActivate(ctx) {



    }




}





