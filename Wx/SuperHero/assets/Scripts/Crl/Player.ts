
import { _decorator, Component, Node, Vec3, UITransformComponent, v3, UITransform, misc } from 'cc';
import Utility from '../Mod/Utility';
import { GameUI } from '../UI/GameUI';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    static Share: Player

    rightHand: Node = null
    lineNode: Node = null

    rightHandPos: Vec3 = v3()

    start() {
        Player.Share = this
        this.rightHand = this.node.getChildByName('hjs1_hand_r1')
        this.rightHandPos = Utility.getWorldPos(this.rightHand)
        this.lineNode = this.rightHand.children[0].children[0]
    }

    showLine(targetPos: Vec3) {
        GameUI.Share.line.active = true
        let myPos = Utility.getWorldPos(this.lineNode)
        let dis = Vec3.distance(myPos, targetPos)

        let dir = v3()
        Vec3.subtract(dir, targetPos, this.rightHandPos)
        let angle = Vec3.angle(dir, v3(0, -1))
        angle = misc.radiansToDegrees(angle)
        if (targetPos.x < this.rightHandPos.x) {
            angle = -angle
        }
        this.rightHand.angle = angle

        dir = v3()
        Vec3.subtract(dir, targetPos, this.rightHandPos)
        angle = Vec3.angle(dir, v3(1, 0))
        angle = misc.radiansToDegrees(angle)
        if (targetPos.y < this.rightHandPos.y) {
            angle = -angle
        }
        GameUI.Share.line.angle = angle

        GameUI.Share.line.getComponent(UITransform).width = dis
        GameUI.Share.node.getComponent(UITransform).convertToNodeSpaceAR(myPos, myPos)
        GameUI.Share.line.position = myPos
    }

    hideLine() {
        GameUI.Share.line.active = false
        this.rightHand.angle = 0
    }

    update(deltaTime: number) {
    }
}