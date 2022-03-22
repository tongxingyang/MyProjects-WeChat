
import { _decorator, Component, Node, tween, v2, v3, EventTouch, UITransform, Vec3, UIOpacity, Tween, Label } from 'cc';
import { SoundMgr } from '../Mod/SoundMgr';
import { GameUI } from '../UI/GameUI';
const { ccclass, property } = _decorator;

@ccclass('Level1')
export class Level1 extends Component {

    @property(Node)
    targetNode: Node = null

    @property(Node)
    tool: Node = null

    @property(Node)
    face1: Node = null
    @property(Node)
    face2: Node = null

    start() {
        // [3]

        tween(this.tool).to(0.5, { position: v3(375, this.tool.position.y) }).call(() => {
            this.tool.on(Node.EventType.TOUCH_START, this.touchStart, this)
            this.tool.on(Node.EventType.TOUCH_MOVE, this.touchStart, this)
        }).start()
    }

    touchStart(event: EventTouch) {
        let uiPos = event.getUILocation()
        let pos = v3(uiPos.x, uiPos.y, 0)
        this.node.getComponent(UITransform).convertToNodeSpaceAR(pos, pos)
        pos.y += 400
        this.tool.position = pos

        if (Vec3.distance(pos, v3(0, 0, 0)) <= 100) {
            this.tool.position = v3(0, 0, 0)
            this.tool.off(Node.EventType.TOUCH_START)
            this.tool.off(Node.EventType.TOUCH_MOVE)
            tween(this.tool).to(0.75, { scale: v3(1, 1) }).call(() => {
                this.face1.active = false
                this.face2.active = true
                this.targetNode.children[0].children[0].active = false
                this.targetNode.children[0].children[1].active = true
                this.targetNode.children[0].children[2].getComponent(Label).string = '1:1'
                this.finish()
                tween(this.tool.getComponent(UIOpacity)).to(1, { opacity: 0 }).start()
            }).start()
        }
    }

    finish() {
        SoundMgr.Share.PlaySound('Target')
        this.scheduleOnce(() => {
            GameUI.Share.showNextBtn()
        }, 2)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}