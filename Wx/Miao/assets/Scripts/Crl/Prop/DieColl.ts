import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, tween, UIOpacityComponent } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('DieColl')
export class DieColl extends Component {
    boxCollider: BoxCollider2D = null

    isGot: boolean = false

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.isGot && otherCollider.node.name == 'player') {
            this.isGot = true
            GameLogic.Share.gameOver(false)
        }
    }

    update(deltaTime: number) {

    }
}

