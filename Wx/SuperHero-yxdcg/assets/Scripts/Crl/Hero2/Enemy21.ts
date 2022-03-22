
import { _decorator, Component, Node, EventTouch, RigidBody2D, SpringJoint2D, UITransform, v3, Vec3, BoxCollider2D, CircleCollider2D, Contact2DType, Collider2D, IPhysics2DContact, v2, Vec2, tween, HingeJoint2D } from 'cc';
import Utility from '../../Mod/Utility';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Enemy21')
export class Enemy21 extends Component {
    body: RigidBody2D = null
    fx: Node = null

    basePos: Vec3 = v3()

    isDied: boolean = false

    onLoad() {
        this.body = this.getComponent(RigidBody2D)
        this.fx = this.node.getChildByName('fx')
        this.getComponent(CircleCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name.search('Bullet') != -1) {
            let dir = v3()
            Vec3.subtract(dir, this.node.position, otherCollider.node.position)
            Vec3.normalize(dir, dir)
            Vec3.multiplyScalar(dir, dir, 100)
            this.body.applyLinearImpulseToCenter(v2(dir.x, dir.y), true)
        }
    }

    start() {
        this.basePos = this.node.position.clone()
    }

    update(deltaTime: number) {
        // [4]
        if (!this.isDied && Vec3.distance(this.basePos, this.node.position.clone()) > 10) {
            this.isDied = true
            this.fx.active = true
            //tween(this.node).by(1, { angle: Utility.GetRandom(360, 720) }).start();
            this.body.angularVelocity = 10
            GameLogic.Share.addDieCount();
        }
    }
}