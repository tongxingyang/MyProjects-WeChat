import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, UIOpacity } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('MoveStage')
export class MoveStage extends Component {
    boxCollider: BoxCollider2D = null

    @property
    canStart: boolean = false
    @property
    maxEdge: number = 0
    @property
    leftMax: number = 0
    @property
    speed: number = 3
    @property
    isLoop: boolean = false
    @property
    isRight: boolean = true

    isColling: boolean = false
    isStart: boolean = false

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginCollider, this)
        this.boxCollider.on(Contact2DType.END_CONTACT, this.onEndCollider, this)
    }

    onBeginCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name == 'player') {
            this.isColling = true
            this.isStart = true
        }
    }
    onEndCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name == 'player') {
            this.isColling = false
        }
    }

    move() {
        if (this.node.position.y >= this.maxEdge) return
        if (this.isStart || this.canStart) {
            let myPos = this.node.position.clone()
            myPos.y += this.speed
            this.node.position = myPos
        }

        if (!this.isColling) return
        let pPos = GameLogic.Share.player.position.clone()
        pPos.y += this.speed
        GameLogic.Share.player.position = pPos
    }

    moveLoop() {

        if (this.isRight) {
            if (this.node.position.y >= this.maxEdge) {
                this.isRight = false
            }
        } else {
            if (this.node.position.y <= this.leftMax) {
                this.isRight = true
            }
        }

        if (this.isStart || this.canStart) {
            let myPos = this.node.position.clone()
            myPos.y += this.isRight ? this.speed : -this.speed
            this.node.position = myPos
        }

        if (!this.isColling) return
        let pPos = GameLogic.Share.player.position.clone()
        pPos.y += this.isRight ? this.speed : -this.speed
        GameLogic.Share.player.position = pPos
    }

    update(deltaTime: number) {
        if (!this.isLoop)
            this.move()
        else {
            this.moveLoop()
        }
    }
}

