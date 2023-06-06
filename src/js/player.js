import {
    Actor,
    clamp,
    CollisionType,
    DegreeOfFreedom,
    Input,
    randomInRange,
    range,
    SpriteSheet, vec,
    Vector
} from "excalibur";
import {Resources} from "./resources.js";
import {Ground} from "./ground.js";
import {Enemy} from "./enemy.js";


export class Player extends Actor{
    // constructor(posX, posY){
    //     super({width: Resources.PlayerRun.width/6, height: Resources.PlayerRun.height});
    //     const runSheet = SpriteSheet.fromImageSource({
    //         image: Resources.PlayerRun,
    //         grid: {
    //             rows: 1,
    //             columns: 6,
    //             spriteWidth: 48,
    //             spriteHeight: 48
    //         }
    //     })
    //     const idleSheet = SpriteSheet.fromImageSource({
    //         image: Resources.PlayerIdle,
    //         grid: {
    //             rows: 1,
    //             columns: 6,
    //             spriteWidth: 48,
    //             spriteHeight: 48
    //         }
    //     })
    //     const idle = Animation.fromSpriteSheet(idleSheet, range(1, 6), 80)
    //     const run = Animation.fromSpriteSheet(runSheet, range(1, 6), 80)
    //     this.graphics.add("idle", idle)
    //     this.graphics.add("run", run)
    //
    //     this.graphics.use("idle")
    //
    //     this.pos = new Vector(posX, posY);
    //     this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    //     this.body.collisionType = CollisionType.Active
    //     this.body.useGravity = true;
    //
    // }

    constructor(posX, posY){
        super({width: Resources.Punk.width, height: Resources.Punk.height});
        this.graphics.use(Resources.Punk.toSprite());
        this.actions.scaleTo(vec(2, 2), vec(100, 100))
        this.pos = new Vector(posX, posY);
        this.body.collisionType = CollisionType.Active
        this.on('collisionstart',(event) =>{this.isGrounded(event)})
    }


    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.Lives()


        this.on('collisionstart', (e) => {
            if (e.other instanceof Enemy) {
                if (this.lives > 0){
                    this.lives -= 1

                } else {
                    this.kill();
                    _engine.currentScene.remove("level1")
                    _engine.goToScene("gameover");
                }
            }
        });

    }
    Lives(){
        this.lives = 3
    }

    isGrounded(event){
        if(event.other instanceof Ground){
            this.grounded = true;
        }
    }

    onPreUpdate(_engine, _delta) {

        let x = 0
        let y = 0

        if (_engine.input.keyboard.isHeld(Input.Keys.D) || _engine.input.keyboard.isHeld(Input.Keys.Right)) {
            x = 200
            // this.graphics.use("run")
            // Animation.flipHorizontal = false
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.A) || _engine.input.keyboard.isHeld(Input.Keys.Left)) {
            x = -200
            // this.graphics.use("run")
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.S) || _engine.input.keyboard.isHeld(Input.Keys.Down)) {
            y = 50
        }

        if(this.grounded){
            if (_engine.input.keyboard.wasPressed(Input.Keys.Space)){
                y = -500;
                this.grounded = false;
            }
        }

        this.vel = new Vector(x, this.vel.y + y)

        // blijf binnen beeld
        this.pos.x = clamp(this.pos.x, this.width/2, _engine.drawWidth - this.width/2);
        this.pos.y = clamp(this.pos.y, this.height/2, _engine.drawHeight - this.height/2);
    }




}