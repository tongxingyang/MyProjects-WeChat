
import { _decorator, Component, Node, EventTouch, Label, tween, UIOpacity, UITransform, v3, Vec3, Mask, Animation, ProgressBar } from 'cc';
import { SoundMgr } from '../Mod/SoundMgr';
import { GameUI } from '../UI/GameUI';
const { ccclass, property } = _decorator;

@ccclass('Level2')
export class Level2 extends Component {

    @property(Node)
    targetNodeArr: Node[] = []
    @property(Node)
    eye1: Node = null
    @property(Node)
    eye2: Node = null
    @property(Node)
    doudou: Node = null
    @property(Node)
    mianyou: Node = null
    @property(Node)
    rectNode: Node = null
    @property(Node)
    face1: Node = null
    @property(Node)
    face2: Node = null
    @property(Node)
    eyeNode1: Node = null
    @property(Node)
    eyeNode2: Node = null

    @property(Node)
    tool1: Node = null
    @property(Node)
    tool2: Node = null
    @property(Node)
    tool3: Node = null

    @property(Node)
    finger: Node = null

    doudouCount1: number = 0
    doudouCount2: number = 0
    doudouCount3: number = 0

    canTouch: boolean = true

    start() {
        this.tool1.on(Node.EventType.TOUCH_START, this.touchStart1, this)
        this.tool1.on(Node.EventType.TOUCH_MOVE, this.touchStart1, this)
        this.tool2.on(Node.EventType.TOUCH_START, this.touchStart2, this)
        this.tool2.on(Node.EventType.TOUCH_MOVE, this.touchStart2, this)
        this.tool3.on(Node.EventType.TOUCH_START, this.touchStart3, this)
        this.tool3.on(Node.EventType.TOUCH_MOVE, this.touchStart3, this)
    }

    touchStart1(event: EventTouch) {
        if (!this.canTouch) return
        let uiPos = event.getUILocation()
        let pos = v3(uiPos.x, uiPos.y, 0)
        this.node.getComponent(UITransform).convertToNodeSpaceAR(pos, pos)
        pos.y += 200
        this.tool1.position = pos
        let toolWP = v3()
        this.tool1.getComponent(UITransform).convertToWorldSpaceAR(v3(), toolWP)
        this.followEyes(toolWP)

        for (let i = 0; i < this.doudou.children.length; i++) {
            let d = this.doudou.children[i]
            let dPos = v3()
            d.getComponent(UITransform).convertToWorldSpaceAR(v3(), dPos)
            if (Vec3.distance(toolWP, dPos) <= 50 && d.children[0].active) {
                this.doudouCount1++
                this.canTouch = false
                d.children[0].active = false
                d.children[1].active = true
                d.children[2].active = false
                this.targetNodeArr[0].getComponentInChildren(Label).string = this.doudouCount1 + ':3'
                this.tool1.getComponent(Animation).play()
                this.showBarTime(1)
                this.scheduleOnce(() => { d.children[3].active = true }, 0.5)
                let tp = v3()
                this.node.getComponent(UITransform).convertToNodeSpaceAR(dPos, tp)
                this.tool1.position = tp
                this.scheduleOnce(() => {
                    this.canTouch = true
                    if (this.doudouCount1 >= 3) {
                        this.tool1.active = false
                        this.tool2.active = true
                        this.doudou.children[0].children[2].active = true
                        this.doudou.children[1].children[2].active = true
                        this.doudou.children[2].children[2].active = true
                        this.targetNodeArr[0].getComponentInChildren(Label).string = '0:3'
                        SoundMgr.Share.PlaySound('Target')
                    }
                }, 1)
                break
            }
        }
    }

    touchStart2(event: EventTouch) {
        if (!this.canTouch) return
        let uiPos = event.getUILocation()
        let pos = v3(uiPos.x, uiPos.y, 0)
        this.node.getComponent(UITransform).convertToNodeSpaceAR(pos, pos)
        pos.y += 200
        this.tool2.position = pos
        let toolWP = v3()
        this.tool2.getComponent(UITransform).convertToWorldSpaceAR(v3(), toolWP)
        this.followEyes(toolWP)

        for (let i = 0; i < this.doudou.children.length; i++) {
            let d = this.doudou.children[i]
            let dPos = v3()
            d.getComponent(UITransform).convertToWorldSpaceAR(v3(), dPos)
            if (Vec3.distance(toolWP, dPos) <= 50 && d.children[3].active) {
                this.doudouCount2++
                this.targetNodeArr[0].getComponentInChildren(Label).string = this.doudouCount2 + ':3'
                this.canTouch = false
                d.children[2].active = false
                let p = d.children[3].position.clone()
                p.y -= 10
                tween(d.children[3]).to(0.5, { position: p }).call(() => { d.children[3].active = false }).start()
                let tp = v3()
                this.node.getComponent(UITransform).convertToNodeSpaceAR(dPos, tp)
                this.tool2.position = tp

                this.tool2.getComponent(Animation).play()
                this.showBarTime(2)
                this.scheduleOnce(() => {
                    this.canTouch = true
                    if (this.doudouCount2 >= 3) {
                        this.tool2.active = false
                        this.tool3.active = true
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
                }, 1)
                break
            }
        }
    }

    touchStart3(event: EventTouch) {
        if (!this.canTouch) return
        let uiPos = event.getUILocation()
        let pos = v3(uiPos.x, uiPos.y, 0)
        this.node.getComponent(UITransform).convertToNodeSpaceAR(pos, pos)
        pos.x -= 100
        pos.y += 100
        this.tool3.position = pos
        let toolWP = v3()
        this.tool3.getComponent(UITransform).convertToWorldSpaceAR(v3(), toolWP)

        let mpos = v3()
        this.mianyou.getComponent(UITransform).convertToNodeSpaceAR(toolWP, mpos)
        let mask = this.mianyou.getComponent(Mask)
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
                        this.tool3.active = false
                        this.mianyou.getComponent(Mask).enabled = false
                        this.mianyou.on(Node.EventType.TOUCH_START, this.moveMianyou, this)
                        this.finger.active = true
                        SoundMgr.Share.PlaySound('Target')
                    }
                }
            }
        }
    }

    moveMianyou() {
        this.doudou.active = false
        this.face1.active = false
        this.face2.active = true
        this.eyeNode1.active = false
        this.eyeNode2.active = true
        let pos = this.mianyou.position.clone()
        pos.x += 375
        tween(this.mianyou).to(0.5, { position: pos }).start()
        tween(this.mianyou.getComponent(UIOpacity)).to(0.5, { opacity: 0 }).start()

        this.targetNodeArr[1].children[0].active = false
        this.targetNodeArr[1].children[1].active = true
        this.targetNodeArr[1].children[2].active = false
        this.finger.active = false
        this.finish()
        SoundMgr.Share.PlaySound('Target')
    }

    showBarTime(index: number = 1) {
        let tool = this.tool1
        if (index == 2)
            tool = this.tool2

        tool.children[0].active = true
        tool.children[0].getComponent(ProgressBar).progress = 0
        this.schedule(() => { tool.children[0].getComponent(ProgressBar).progress += 0.08 }, 0.05, 20)
        this.scheduleOnce(() => { tool.children[0].active = false }, 1)
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
        this.scheduleOnce(() => {
            GameUI.Share.showNextBtn()
        }, 2)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}