import {
    Actor,
    clamp,
    CollisionType,
    DegreeOfFreedom,
    Input, Random,
    randomInRange,
    range,
    SpriteSheet, Timer,
    Vector
} from "excalibur";
import {Resources} from "./resources.js";

export class Enemy extends Actor{

    // constructor(posX, posY){
    //     super({width: Resources.EnemyRun.width/4, height: Resources.EnemyRun.height});
    //     const walksheet = SpriteSheet.fromImageSource({
    //         image: Resources.EnemyRun,
    //         grid: {
    //             rows: 1,
    //             columns: 6,
    //             spriteWidth: 48,
    //             spriteHeight: 48
    //         }
    //     })
    //
    //     const idle = Animation.fromSpriteSheet(walksheet, range(1, 4), 80)
    //     this.graphics.add("idle", idle)
    //     this.graphics.use("idle")
    //
    //     this.pos = new Vector(posX, posY);
    //     this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    //     this.body.collisionType = CollisionType.Active
    //
    //
    // }
    constructor(posX, posY){
        super({width: Resources.EnemyRun.width/4, height: Resources.EnemyRun.height});
        this.graphics.use(Resources.EnemyRun.toSprite());


        this.pos = new Vector(posX, posY);
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
        this.body.collisionType = CollisionType.fixed
        this.vel = new Vector(-600, 0);


    }


}