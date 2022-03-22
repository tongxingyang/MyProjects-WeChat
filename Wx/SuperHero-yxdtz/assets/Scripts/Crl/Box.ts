
import { _decorator, Component, Node, EventTouch, RigidBody2D, SpringJoint2D, UITransform, v3, Vec3, DistanceJoint2D } from 'cc';
import Utility from '../Mod/Utility';
import { GameLogic } from './GameLogic';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('Box')
export class Box extends Component {
    @property(Node)
    DisNode: Node = null

    body: RigidBody2D = null

    onLoad() {
        this.body = this.getComponent(RigidBody2D)
    }

    start() {
        // [3]
        this.node.on(Node.EventType.TOUCH_START, this.touchMove, this)
        this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this)
        this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchMove(event: EventTouch) {
        if (GameLogic.Share.isGameOver) return
        this.node.children[0].active = true
        let pos = event.getUILocation()
        let nPos = v3()
        this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y), nPos)
        this.DisNode.position = nPos
        this.DisNode.getComponent(DistanceJoint2D).enabled = true
        
        Player.Share.showLine(Utility.getWorldPos(this.node))
    }

    touchEnd() {
        this.node.children[0].active = false
        this.DisNode.getComponent(DistanceJoint2D).enabled = false
        Player.Share.hideLine()
    }

    update(deltaTime: number) {
        // [4]
    }
}