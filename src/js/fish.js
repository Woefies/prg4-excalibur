import {Actor, clamp, CollisionType, Input, Physics, randomInRange, vec, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Ground} from "./ground.js";

export class Fish extends Actor{
    constructor(posX, posY){
        super({width: Resources.Fish.width, height: Resources.Fish.height});
        this.pos = new Vector(posX, posY);
        this.sprite = Resources.Fish.toSprite()
        this.graphics.use(this.sprite)
        this.sprite.flipHorizontal = true
        this.body.collisionType = CollisionType.Active
        this.on('collisionstart',(event) =>{this.isGrounded(event)})



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
            x = 300
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.A) || _engine.input.keyboard.isHeld(Input.Keys.Left)) {
            x = -300
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.S) || _engine.input.keyboard.isHeld(Input.Keys.Down)) {
            y = 50
        }
        if(this.grounded){
                if (_engine.input.keyboard.wasPressed(Input.Keys.Space)){
                    y = -700;
                    this.grounded = false;
                }
            }

            this.vel = new Vector(x, this.vel.y + y)


            // blijf binnen beeld
        this.pos.x = clamp(this.pos.x, this.width/2, _engine.drawWidth - this.width/2);
        this.pos.y = clamp(this.pos.y, this.height/2, _engine.drawHeight - this.height/2);
    }

}