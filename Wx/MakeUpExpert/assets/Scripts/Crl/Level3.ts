
import { _decorator, Component, Node, UITransform, v3, Vec3, EventTouch, Label, Animation, tween, UIOpacity, Mask } from 'cc';
import { SoundMgr } from '../Mod/SoundMgr';
import { GameUI } from '../UI/GameUI';
const { ccclass, property } = _decorator;

@ccclass('Level3')
export class Level3 extends Component {

    @property(Node)
    targetNodeArr: Node[] = []
    @property(Node)
    eye1: Node = null
    @property(Node)
    eye2: Node = null
    @property(Node)
    face1: Node = null
    @property(Node)
    face2: Node = null
    @property(Node)
    face3: Node = null

    @property(Node)
    mianyouNode: Node = null
    @property(Node)
    tool1: Node = null
    @property(Node)
    handNode: Node = null
    @property(Node)
    Pingzi: Node = null
    @property(Node)
    FenShua: Node = null
    @property(Node)
    rectNode: Node = null

    canTouch: boolean = true

    doudouCount1: number = 0
    doudouCount3: number = 0

    start() {
        this.tool1.on(Node.EventType.TOUCH_START, this.touchStart1, this)
        this.tool1.on(Node.EventType.TOUCH_MOVE, this.touchStart1, this)
        this.handNode.on(Node.EventType.TOUCH_START, this.touchStart2, this)
        this.FenShua.on(Node.EventType.TOUCH_START, this.touchStart3, this)
        this.FenShua.on(Node.EventType.TOUCH_MOVE, this.touchStart3, this)
        this.FenShua.on(Node.EventType.TOUCH_END, this.touchendFenShua, this)
        this.FenShua.on(Node.EventType.TOUCH_CANCEL, this.touchendFenShua, this)
    }

    touchStart1(event: EventTouch) {
        if (!this.canTouch) return
        let uiPos = event.getUILocation()
        let pos = v3(uiPos.x, uiPos.y, 0)
        this.node.getComponent(UITransform).convertToNodeSpaceAR(pos, pos)
        pos.x -= 100
        pos.y += 50
        this.tool1.position = pos
        let toolWP = v3()
        this.tool1.getComponent(UITransform).convertToWorldSpaceAR(v3(), toolWP)
        this.followEyes(toolWP)

        for (let i = 0; i < this.mianyouNode.children.length; i++) {
            let d = this.mianyouNode.children[i]
            let dPos = v3()
            d.getComponent(UITransform).convertToWorldSpaceAR(v3(), dPos)
            if (Vec3.distance(toolWP, dPos) <= 50 && d.children[0].active) {
                this.doudouCount1++
                this.targetNodeArr[0].getComponentInChildren(Label).string = this.doudouCount1 + ':3'
                this.mianyouNode.children[i].children[0].active = false
                this.mianyouNode.children[i].children[1].active = true
                this.canTouch = false
                this.tool1.getComponent(Animation).play()
                let tp = v3()
                this.node.getComponent(UITransform).convertToNodeSpaceAR(dPos, tp)
                this.tool1.position = tp
                this.scheduleOnce(() => {
                    this.canTouch = true
                    this.tool1.getComponent(Animation).stop()
                    if (this.doudouCount1 >= 3) {
                        this.tool1.active = false
                        this.handNode.active = true
                        this.eye1.children[0].position = v3()
                        this.eye2.children[0].position = v3()

                        this.targetNodeArr[0].children[0].active = false
                        this.targetNodeArr[0].children[1].active = true
                        this.targetNodeArr[0].children[2].active = false
                        this.targetNodeArr[0].scale = v3(0.8, 0.8)
                        this.targetNodeArr[1].scale = v3(1, 1)
                        this.targetNodeArr[1].children[2].active = true
                        SoundMgr.Share.PlaySound('Target')
                    }
                }, 2)
                break
            }
        }
    }

    touchStart2(event: EventTouch) {
        this.handNode.getComponent(Animation).play()
        tween(this.mianyouNode.getComponent(UIOpacity)).to(3, { opacity: 0 }).start()
        tween(this.face2.getComponent(UIOpacity)).to(3, { opacity: 255 }).start()
        this.scheduleOnce(() => {
            this.handNode.active = false
            this.face1.getComponent(UIOpacity).opacity = 0
            this.Pingzi.active = true
            this.canTouch = false
            this.scheduleOnce(this.showFenshua, 1)
            this.showFenshua()
        }, 3)
    }

    touchStart3(event: EventTouch) {
        if (!this.canTouch) return
        if (!this.FenShua.getComponent(Animation).getState(this.FenShua.getComponent(Animation).clips[0].name).isPlaying) {
            this.FenShua.getComponent(Animation).play()
        }
        let uiPos = event.getUILocation()
        let pos = v3(uiPos.x, uiPos.y, 0)
        this.node.getComponent(UITransform).convertToNodeSpaceAR(pos, pos)
        this.FenShua.position = pos
        let toolWP = v3()
        this.FenShua.getComponent(UITransform).convertToWorldSpaceAR(v3(), toolWP)

        let mpos = v3()
        this.face3.getComponent(UITransform).convertToNodeSpaceAR(toolWP, mpos)
        let mask = this.face3.getComponent(Mask)
        mask.graphics.lineWidth = 1
        mask.graphics.fillColor.fromHEX('#ff0000');
        mask.graphics.circle(mpos.x, mpos.y, 60)
        mask.graphics.stroke()
        mask.graphics.fill()

        for (let i = 0; i < this.rectNode.children.length; i++) {
            let r = this.rectNode.children[i]
            if (r.active) {
                let rpos = v3()
                r.getComponent(UITransform).convertToWorldSpaceAR(v3(), rpos)
                if (Vec3.distance(rpos, toolWP) <= 50) {
                    r.active = false
                    this.doudouCount3++
                    if (this.doudouCount3 >= 9) {
                        this.targetNodeArr[1].children[0].active = false
                        this.targetNodeArr[1].children[1].active = true
                        this.targetNodeArr[1].children[2].active = false
                        
                        this.FenShua.active = false
                        this.face2.active = false
                        this.Pingzi.active = false
                        this.face3.getComponent(Mask).enabled = false
                        this.finish()
                        SoundMgr.Share.PlaySound('Target')
                    }
                }
            }
        }

    }
    touchendFenShua() {
        this.FenShua.getComponent(Animation).stop()
        this.FenShua.scale = v3(1, 1, 1)
    }
    showFenshua() {
        this.FenShua.active = true
        tween(this.FenShua).to(1, { position: this.Pingzi.position.clone() }).call(() => {
            this.FenShua.getComponent(Animation).play()
            this.scheduleOnce(() => {
                this.FenShua.getComponent(Animation).stop()
                this.FenShua.scale = v3(1, 1, 1)
            }, 2)
        }).start()

        this.scheduleOnce(() => {
            tween(this.FenShua).to(1, { position: v3(226, -468) }).call(() => {
                this.canTouch = true
            }).start()
        }, 3)
    }

    followEyes(targetPos: Vec3) {
        let eyePos1 = v3()
        this.eye1.getComponent(UITransform).convertToWorldSpaceAR(v3(), eyePos1)
        let dir = v3()
        Vec3.subtract(dir, targetPos, eyePos1)
        dir = dir.normalize()
        this.eye1.children[0].position = v3(dir.x * 5, dir.y * 5)

        let eyePos2 = v3()
        this.eye2.getComponent(UITransform).convertToWorldSpaceAR(v3(), eyePos2)
        let dir2 = v3()
        Vec3.subtract(dir2, targetPos, eyePos2)
        dir2 = dir2.normalize()
        this.eye2.children[0].position = v3(dir2.x * 5, dir2.y * 5)
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