import {Actor, clamp, CollisionType, Input, randomInRange, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Fish extends Actor{
    constructor(posX, posY){
        super({width: Resources.Fish.width, height: Resources.Fish.height});
        this.pos = new Vector(posX, posY);
        this.sprite = Resources.Fish.toSprite()
        this.graphics.use(this.sprite)
        this.sprite.flipHorizontal = true
        this.collisionType = CollisionType.Active




    }

    onPreUpdate(_engine, _delta) {

        let x = 0
        let y = 0

        if (_engine.input.keyboard.isHeld(Input.Keys.D) || _engine.input.keyboard.isHeld(Input.Keys.Right)) {
            x = 300
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.A) || _engine.input.keyboard.isHeld(Input.Keys.Left)) {
            x = -300
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.Space) || _engine.input.keyboard.isHeld(Input.Keys.Up)) {
            y = -300
        }
        this.vel = new Vector(x, y)

        // blijf binnen beeld
        this.pos.x = clamp(this.pos.x, this.width/2, _engine.drawWidth - this.width/2);
        this.pos.y = clamp(this.pos.y, this.height/2, _engine.drawHeight - this.height/2);
    }

}