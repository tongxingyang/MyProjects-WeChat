import { _decorator, Component, Node, EventTouch, UITransform, v3, Vec3, DistanceJoint2D, Animation, dragonBones, tween } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level5')
export class Level5 extends Component {

    @property(Node)
    box: Node = null

    pliers: Node = null
    clip: Node = null
    clipPos: Node = null
    clipBase: Node = null

    hadCatch: boolean = false

    onLoad() {
        this.pliers = this.node.getChildByName('pliers')
        this.clip = this.pliers.getChildByName('clip')
        this.clipPos = this.clip.getChildByName('pos')
        this.clipBase = this.pliers.getChildByName('clipBase')
    }

    start() {
        this.clipBase.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.clipBase.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.clipBase.on(Node.EventType.TOUCH_END, this.touchEnd, this)
        this.clipBase.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchStart(evt: EventTouch) {
        let pos = evt.getUILocation()
        let nPos = this.pliers.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y))
        this.clipBase.setPosition(nPos)
    }

    touchMove(evt: EventTouch) {
        if (this.hadCatch) return
        let pos = evt.getUILocation()
        let nPos = this.pliers.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y))
        this.clipBase.setPosition(nPos)

        if (!this.hadCatch) {
            let p1 = this.box.getChildByName('pos').getComponent(UITransform).convertToWorldSpaceAR(v3())
            let p2 = this.clipPos.getComponent(UITransform).convertToWorldSpaceAR(v3())
            if (Vec3.distance(p1, p2) <= 100) {
                console.log('catch worm')
                this.hadCatch = true
                this.clipBase.setPosition(v3(0, 200))
                this.clip.getComponent(DistanceJoint2D).enabled = true
                this.scheduleOnce(() => {
                    SoundMgr.Share.PlaySound('open_chest')
                    this.box.getComponent(dragonBones.ArmatureDisplay).playAnimation('treasure_open', 1)
                    this.box.getChildByName('pt').active = true
                    this.scheduleOnce(this.finishCB, 1)
                }, 0.5)
            }
        }
    }

    touchEnd(evt: EventTouch) {
        if (this.hadCatch) return
        this.clipBase.setPosition(v3(0, 130))
        //this.clipBase.active = false
    }

    finishCB() {
        let cameraNode = GameLogic.Share.node.getChildByName('Camera')
        tween(cameraNode).to(1, { position: v3(0, 150, 0), scale: v3(0.5, 0.5, 1) }).start()
        this.node.getChildByName('ptNode').active = true
        SoundMgr.Share.PlaySound('coins')
        GameLogic.Share.gameOver(true)
    }

    update(deltaTime: number) {

    }
}

