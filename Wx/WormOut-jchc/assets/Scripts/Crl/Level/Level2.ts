import { _decorator, Component, Node, EventTouch, UITransform, v3, Vec3, DistanceJoint2D, RigidBody2D, dragonBones, tween } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level2')
export class Level2 extends Component {

    @property(Node)
    ball: Node = null
    @property(Node)
    faceDB: Node = null

    pliers: Node = null
    hose: Node = null
    clip: Node = null
    clipPos: Node = null
    clipBase: Node = null

    hadCatch: boolean = false

    onLoad() {
        this.pliers = this.node.getChildByName('pliers')
        this.hose = this.pliers.getChildByName('hose')
        this.clip = this.pliers.getChildByName('clip')
        this.clipPos = this.clip.getChildByName('pos')
        this.clipBase = this.pliers.getChildByName('clipBase')
    }

    start() {
        this.clipBase.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.clipBase.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.clipBase.on(Node.EventType.TOUCH_END, this.touchEnd, this)
        this.clipBase.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
        SoundMgr.Share.PlaySound('worm_tongue')
        this.scheduleOnce(() => {
            this.node.getChildByName('worm').getChildByName('b4').getChildByName('face').getComponent(dragonBones.ArmatureDisplay).playAnimation('worm_idle')
        }, 1)
    }

    touchStart(evt: EventTouch) {
        if (this.node.getChildByName('guide')) this.node.getChildByName('guide').active = false
        let pos = evt.getUILocation()
        let nPos = this.pliers.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y))
        this.clipBase.setPosition(nPos)
    }

    touchMove(evt: EventTouch) {
        if(this.hadCatch)return
        let pos = evt.getUILocation()
        let nPos = this.pliers.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y))
        this.clipBase.setPosition(nPos)

        if (!this.hadCatch) {
            let p1 = this.ball.getComponent(UITransform).convertToWorldSpaceAR(v3())
            let p2 = this.clipPos.getComponent(UITransform).convertToWorldSpaceAR(v3())
            if (Vec3.distance(p1, p2) <= 100) {
                console.log('catch worm')
                this.node.getChildByName('worm').getChildByName('b4').getChildByName('face').getComponent(dragonBones.ArmatureDisplay).playAnimation('worm_process')
                SoundMgr.Share.PlaySound('worm_detouch')
                this.scheduleOnce(() => {
                    SoundMgr.Share.PlaySound('worm_out')
                }, 0.5)
                this.hadCatch = true
                this.clipBase.setPosition(v3(0, 150))
                this.clip.getComponent(DistanceJoint2D).enabled = true
                this.faceDB.getComponent(dragonBones.ArmatureDisplay).playAnimation('fruits_2_process')
                this.scheduleOnce(this.finishCB, 1)
            }
        }
    }

    touchEnd(evt: EventTouch) {
        if(this.hadCatch)return
        this.clipBase.setPosition(v3(0, 130))
        //this.clipBase.active = false
    }

    finishCB() {
        this.faceDB.getComponent(dragonBones.ArmatureDisplay).playAnimation('fruits_2_win', 1)
        let cameraNode = GameLogic.Share.node.getChildByName('Camera')
        tween(cameraNode).to(1, { position: v3(0, 150, 0), scale: v3(0.5, 0.5, 1) }).start()
        this.node.getChildByName('ptNode').active = true
        GameLogic.Share.gameOver(true)
    }

    update(deltaTime: number) {

    }
}

