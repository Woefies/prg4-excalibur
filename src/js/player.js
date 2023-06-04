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
        super({width: Resources.PlayerRun.width/6, height: Resources.PlayerRun.height});
        this.graphics.use(Resources.PlayerRun.toSprite());
        this.actions.scaleTo(vec(1.5, 1.5), vec(100, 100))
        this.pos = new Vector(posX, posY);
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true;
    }

    onPreUpdate(_engine, _delta) {

        let x = 0
        let y = 0

        if (_engine.input.keyboard.isHeld(Input.Keys.D) || _engine.input.keyboard.isHeld(Input.Keys.Right)) {
            x = 300
            // this.graphics.use("run")
            // Animation.flipHorizontal = false
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.A) || _engine.input.keyboard.isHeld(Input.Keys.Left)) {
            x = -300
            // this.graphics.use("run")
        }

        if (_engine.input.keyboard.wasPressed(Input.Keys.Space) || _engine.input.keyboard.wasPressed(Input.Keys.Up)) {
            y = -40000
        }

        this.vel = new Vector(x, y)

        // blijf binnen beeld
        this.pos.x = clamp(this.pos.x, this.width/2, _engine.drawWidth - this.width/2);
        this.pos.y = clamp(this.pos.y, this.height/2, _engine.drawHeight - this.height/2);
    }


}