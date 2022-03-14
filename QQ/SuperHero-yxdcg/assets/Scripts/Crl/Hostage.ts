
import { _decorator, Component, Node, EventTouch, RigidBody2D, SpringJoint2D, UITransform, v3, Vec3 } from 'cc';
import Utility from '../Mod/Utility';
import { GameLogic } from './GameLogic';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('Hostage')
export class Hostage extends Component {

    @property(Node)
    DisNode: Node = null

    @property
    isCanTouch: boolean = true

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
        this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this)
        this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchMove(event: EventTouch) {
        if (GameLogic.Share.isGameOver || !this.isCanTouch) return
        let pos = event.getUILocation()
        let nPos = v3()
        this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y), nPos)
        this.DisNode.position = nPos
        this.DisNode.getComponent(SpringJoint2D).enabled = true
        Player.Share.showLine(Utility.getWorldPos(this.node))
    }

    touchEnd() {
        if (GameLogic.Share.isGameOver || !this.isCanTouch) return
        this.DisNode.getComponent(SpringJoint2D).enabled = false
        Player.Share.hideLine()
    }

    update(deltaTime: number) {
        // [4]
        if (!this.isDied && Vec3.distance(this.basePos, this.node.position.clone()) > 10) {
            this.isDied = true
            this.fx.active = true
            GameLogic.Share.gameOver(false)
        }
    }
}