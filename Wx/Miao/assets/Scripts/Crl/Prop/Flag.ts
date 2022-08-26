import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, Animation } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Flag')
export class Flag extends Component {

    boxCollider: BoxCollider2D = null

    isGot: boolean = false

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.isGot && otherCollider.node.name == 'player') {
            this.isGot = true
            this.getComponent(Animation).play()
            GameLogic.Share.gameOver(true)
        }
    }

    update(deltaTime: number) {

    }
}

