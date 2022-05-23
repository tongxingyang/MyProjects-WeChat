
import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, RigidBody2D, v3, Vec3, v2 } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
import { Bullet } from '../Bullet';
const { ccclass, property } = _decorator;

@ccclass('TntToggle')
export class TntToggle extends Component {

    @property(Node)
    enemyNodeArr: Node[] = []

    @property(Node)
    TntNode: Node = null
    body: RigidBody2D = null

    onLoad() {
        this.body = this.getComponent(RigidBody2D)
        this.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name.search('Bullet') != -1) {
            Bullet.Share.moveEnd()
            this.activeTnt()
        }
    }

    activeTnt() {
        SoundMgr.Share.PlaySound('boom')
        this.TntNode.children[0].active = false
        this.node.children[0].active = false
        this.node.children[1].active = true
        this.node.children[2].active = true
        this.node.children[3].active = true

        for (let i = 0; i < this.enemyNodeArr.length; i++) {
            let dir = v3()
            let tntPos = this.TntNode.position.clone()
            let ePos = this.enemyNodeArr[i].position.clone()
            Vec3.subtract(dir, ePos, tntPos)
            Vec3.normalize(dir, dir)
            Vec3.multiplyScalar(dir, dir, 200)
            this.enemyNodeArr[i].getComponent(RigidBody2D).applyLinearImpulseToCenter(v2(dir.x, dir.y), true)
        }
    }
}