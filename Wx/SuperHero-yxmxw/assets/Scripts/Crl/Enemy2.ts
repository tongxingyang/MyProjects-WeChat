
import { _decorator, Component, Node, EventTouch, RigidBody2D, SpringJoint2D, UITransform, v3, Vec3, Animation } from 'cc';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Enemy2')
export class Enemy2 extends Component {
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