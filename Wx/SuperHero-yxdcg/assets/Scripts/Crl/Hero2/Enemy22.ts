
import { _decorator, Component, Node, EventTouch, RigidBody2D, v3, Vec3, Animation, CircleCollider2D, Collider2D, Contact2DType, IPhysics2DContact, v2 } from 'cc';
import { Bullet } from '../Bullet';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Enemy22')
export class Enemy22 extends Component {
    body: RigidBody2D = null
    fx: Node = null

    basePos: Vec3 = v3()

    isDied: boolean = false

    onLoad() {
        this.body = this.getComponent(RigidBody2D)
        this.fx = this.node.getChildByName('fx')
    }

    start() {
        this.basePos = this.node.position.clone()
        // [3]
        this.node.on(Node.EventType.TOUCH_START, this.touchMove, this)
        this.getComponent(CircleCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name.search('box') != -1) {
            this.body.angularVelocity = 10
            let dir = v3()
            Vec3.subtract(dir, this.node.position, otherCollider.node.position)
            Vec3.normalize(dir, dir)
            Vec3.multiplyScalar(dir, dir, 100)
            this.body.applyLinearImpulseToCenter(v2(dir.x, dir.y), true)
        }else if (otherCollider.node.name.search('Bullet') != -1) {
            Bullet.Share.moveEnd()
        }
    }
    touchMove(event: EventTouch) {
        if (GameLogic.Share.isGameOver) return
        this.getComponent(Animation).play()
    }

    update(deltaTime: number) {
        // [4]
        if (!this.isDied && Vec3.distance(this.basePos, this.node.position.clone()) > 10) {
            this.isDied = true
            this.fx.active = true
            GameLogic.Share.addDieCount()
        }
    }
}