import {Actor, clamp, CollisionType, Input, Physics, randomInRange, vec, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Enemy extends Actor {
    constructor(posX, posY) {
        super({width: Resources.Fish.width, height: 65});
        this.pos = new Vector(1500, randomInRange(580, 400));
        this.sprite = Resources.Fish.toSprite()
        this.graphics.use(this.sprite)
        this.body.collisionType = CollisionType.Fixed;
        this.vel = vec(-300, 0);


    }
}