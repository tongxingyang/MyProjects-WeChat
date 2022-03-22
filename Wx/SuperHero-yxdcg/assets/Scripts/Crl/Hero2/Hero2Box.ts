
import { _decorator, Component, Node, RigidBody2D, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, v2, v3, Vec3, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Hero2Box')
export class Hero2Box extends Component {
    body: RigidBody2D = null

    hadColl: boolean = false

    onLoad() {
        this.body = this.getComponent(RigidBody2D)
        this.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name.search('Bullet') != -1 && !this.hadColl) {
            this.hadColl = true
            this.scheduleOnce(() => {
                this.node.getComponent(Sprite).destroy()
                this.node.children[0].active = false
                this.node.children[1].active = true
            })
        }
    }
}