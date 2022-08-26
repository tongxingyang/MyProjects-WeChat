import { _decorator, Component, Node, RigidBody2D, BoxCollider2D, Vec2, v2, v3, PolygonCollider2D, Contact2DType, Collider2D, IPhysics2DContact, tween, Animation } from 'cc';
import { SoundMgr } from '../Mod/SoundMgr';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    ani: Node = null
    body: RigidBody2D = null
    boxCollider: BoxCollider2D = null
    polygonCollider: PolygonCollider2D = null

    groundColl: Collider2D[] = []

    speed: number = 10
    dirX: number = 0

    isJumping: boolean = false
    isPlayingRun: boolean = false

    onLoad() {
        this.ani = this.node.getChildByName('ani')
        this.body = this.getComponent(RigidBody2D)
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.polygonCollider = this.getComponent(PolygonCollider2D)
    }

    start() {
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
        this.boxCollider.on(Contact2DType.END_CONTACT, this.onGroundExitCollider, this)
        this.polygonCollider.on(Contact2DType.BEGIN_CONTACT, this.onPolygonCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (GameLogic.Share.isGameOver) return
        if (selfCollider.tag == 1 && otherCollider != this.polygonCollider && otherCollider.tag != 100) {
            this.groundColl.push(otherCollider)
            if (this.isJumping) {
                this.isJumping = false
            }
        }
    }
    onGroundExitCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (GameLogic.Share.isGameOver) return
        if (selfCollider.tag == 1 && otherCollider != this.polygonCollider && otherCollider.tag != 100) {
            this.groundColl.splice(this.groundColl.indexOf(otherCollider), 1)
            if (this.groundColl.length <= 0) {
                this.isJumping = true
            }
        }
    }
    onPolygonCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    }

    get myLinearVelocity(): Vec2 {
        return this.body.linearVelocity.clone();
    }

    move() {
        if (GameLogic.Share.isGameOver) {
            this.dirX = 0
        }
        let v = this.myLinearVelocity
        v.x = this.dirX * this.speed
        this.body.linearVelocity = v
        if (this.dirX != 0) {
            //run
            this.ani.setScale(this.dirX * 1.2, 1.2, 1)
            if (!this.ani.getComponent(Animation).getState('Run').isPlaying) {
                this.ani.getComponent(Animation).play('Run')
            }
        } else {
            //idle
            this.ani.getComponent(Animation).play('Idle')
        }
    }

    jump() {
        if (this.isJumping || GameLogic.Share.isGameOver) return
        SoundMgr.Share.PlaySound('jump')
        this.isJumping = true
        this.body.applyLinearImpulseToCenter(v2(0, 500), true)
    }
    loseCB() {
        this.polygonCollider.destroy()
        this.boxCollider.destroy()
        tween(this.node).by(0.2, { position: v3(0, 200, 0) }, { easing: "smooth" }).by(0.7, { position: v3(0, -1000, 0) }, { easing: "smooth" }).start()
    }

    update(deltaTime: number) {
        this.move()
    }
}

