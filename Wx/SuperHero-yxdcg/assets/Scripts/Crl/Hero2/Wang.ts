
import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, RigidBody2D } from 'cc';
import { Bullet } from '../Bullet';
const { ccclass, property } = _decorator;

@ccclass('Wang')
export class Wang extends Component {
    body: RigidBody2D = null

    onLoad() {
        this.body = this.getComponent(RigidBody2D)
        this.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name.search('Bullet') != -1) {
            this.scheduleOnce(() => {
                Bullet.Share.moveEnd()
            })
        }
    }
}