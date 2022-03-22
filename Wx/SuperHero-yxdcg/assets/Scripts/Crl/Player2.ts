
import { _decorator, Component, Node, Vec2, v2, v3, Vec3, misc } from 'cc';
import Utility from '../Mod/Utility';
const { ccclass, property } = _decorator;

@ccclass('Player2')
export class Player2 extends Component {

    static Share: Player2
    rightHand: Node = null
    
    rightHandPos: Vec3 = v3()

    onLoad() {
        Player2.Share = this
        this.rightHand = this.node.getChildByName('hjs1_hand_r1')
        this.rightHandPos = Utility.getWorldPos(this.rightHand)
    }

    start() {
        // [3]
    }

    get myWorldPos() {
        return Utility.getWorldPos(this.node)
    }

    handUp(targetPos: Vec3) {
        let dir = v3()
        Vec3.subtract(dir, targetPos, this.rightHandPos)
        let angle = Vec3.angle(dir, v3(0, -1))
        angle = misc.radiansToDegrees(angle)
        if (targetPos.x < this.rightHandPos.x) {
            angle = -angle
        }
        this.rightHand.angle = angle
    }

    handDown() {
        this.rightHand.angle = 0
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}