import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, tween, v3 } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('FallStage')
export class FallStage extends Component {
    boxCollider: BoxCollider2D = null

    isGot: boolean = false
    isColling: boolean = false
    @property
    speed: number = 1

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
        this.boxCollider.on(Contact2DType.END_CONTACT, this.onGroundExitCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name == 'player') {
            if (!this.isGot)
                this.isGot = true
        }
        if (otherCollider.node.name == 'player' && otherCollider.tag == 1) {
            this.isColling = true
        }
    } onGroundExitCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name == 'player' && otherCollider.tag == 1) {
            this.isColling = false
        }
    }

    move() {
        if (GameLogic.Share.isGameOver) return
        if (this.isGot) {
            let myPos = this.node.position.clone()
            myPos.y -= this.speed
            this.node.position = myPos
        }

        if (!this.isColling) return
        let pPos = GameLogic.Share.player.position.clone()
        pPos.y -= this.speed
        GameLogic.Share.player.position = pPos
    }

    update(deltaTime: number) {
        this.move()
    }
}

