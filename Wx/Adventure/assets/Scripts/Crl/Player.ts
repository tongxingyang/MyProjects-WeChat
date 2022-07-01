import { _decorator, Component, Node, dragonBones, RigidBody2D, BoxCollider2D, Vec2, v2, Vec3, v3, PolygonCollider2D, Contact2DType, Collider2D, IPhysics2DContact, tween } from 'cc';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    body: RigidBody2D = null
    boxCollider: BoxCollider2D = null
    polygonCollider: PolygonCollider2D = null
    ani: dragonBones.ArmatureDisplay = null
    db: Node = null

    curAni: string = 'idle'

    speed: number = 8
    dirX: number = 0

    isJumping: boolean = false

    onLoad() {
        this.body = this.getComponent(RigidBody2D)
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.polygonCollider = this.getComponent(PolygonCollider2D)
        this.db = this.node.getChildByName("db")
        this.ani = this.db.getComponent(dragonBones.ArmatureDisplay)
    }

    start() {
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
        this.polygonCollider.on(Contact2DType.BEGIN_CONTACT, this.onPolygonCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (GameLogic.Share.isGameOver) return
        if (selfCollider.tag == 1 && otherCollider != this.polygonCollider && otherCollider.tag != 100) {
            if (this.isJumping) {
                this.isJumping = false
                this.playAni(this.dirX == 0 ? 'idle' : 'run')
            }
        }
    }
    onPolygonCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    }

    playAni(name: string, times: number = -1) {
        if (name == this.curAni || this.curAni == 'death') return
        this.curAni = name
        this.ani.playAnimation(name, times)
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
        if (this.dirX != 0)
            this.db.setScale(v3(this.dirX * 0.8, 0.8, 0.8))
        if (!this.isJumping) {
            if (this.dirX != 0) {
                this.playAni('run')
            } else {
                this.playAni('idle')
            }
        }
    }

    jump() {
        if (this.isJumping || GameLogic.Share.isGameOver) return
        this.isJumping = true
        this.playAni('jump')
        this.body.applyLinearImpulseToCenter(v2(0, 175), true)
    }

    winCB() {

    }

    loseCB() {
        this.polygonCollider.destroy()
        this.boxCollider.destroy()
        this.playAni('death', 0)
        tween(this.node).by(0.3, { position: v3(0, 150, 0) }, { easing: "smooth" }).by(1, { position: v3(0, -1000, 0) }, { easing: "smooth" }).start()
    }

    update(deltaTime: number) {
        this.move()
    }
}

