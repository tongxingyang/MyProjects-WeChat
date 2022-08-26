import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, tween, v3, instantiate, Prefab, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveGrid')
export class MoveGrid extends Component {

    @property(Node)
    desNode: Node = null

    boxCollider: BoxCollider2D = null

    hadMove: boolean = false
    isGot: boolean = false

    onLoad() {
        this.boxCollider = this.getComponents(BoxCollider2D)[1]
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.hadMove && otherCollider.node.name == 'player' && selfCollider.tag == 1) {
            tween(this.node).to(.2, { position: this.desNode.position }).call(() => {
                this.hadMove = true
            }).start()
        }
        if (this.hadMove && !this.isGot && otherCollider.node.name == 'player' && selfCollider.tag == 1) {
            this.isGot = true
            this.scheduleOnce(() => {
                this.node.destroy()
            })
        }
    }

    update(deltaTime: number) {

    }
}

