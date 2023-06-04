import {Actor, Vector, GraphicsGroup, Input, randomInRange, CollisionType} from 'excalibur'
import { Resources } from './resources.js'


export class Ground extends Actor {

    constructor(posX, posY ) {
        super({width: Resources.Tile.width, height: Resources.Tile.height});
        this.pos = new Vector(posX, posY);
        this.body.collisionType = CollisionType.Fixed
        this.graphics.use(Resources.Tile.toSprite());
    }

}


