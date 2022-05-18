import { _decorator, Component, Node, EventTouch, UITransform, v3, Vec3, DistanceJoint2D, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Level1')
export class Level1 extends Component {

    @property(Node)
    wormHead: Node = null

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
    }

    touchStart(evt: EventTouch) {
        let pos = evt.getUILocation()
        let nPos = this.pliers.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y))
        this.clipBase.setPosition(nPos)
    }

    touchMove(evt: EventTouch) {
        let pos = evt.getUILocation()
        let nPos = this.pliers.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y))
        this.clipBase.setPosition(nPos)

        if (!this.hadCatch) {
            let p1 = this.wormHead.getComponent(UITransform).convertToWorldSpaceAR(v3())
            let p2 = this.clipPos.getComponent(UITransform).convertToWorldSpaceAR(v3())
            if (Vec3.distance(p1, p2) <= 100) {
                console.log('catch worm')
                this.hadCatch = true
                this.clip.getComponent(DistanceJoint2D).enabled = true
            }
        }
    }

    touchEnd(evt: EventTouch) {
        this.clipBase.setPosition(v3(0, 150))
        //this.clipBase.active = false
    }

    update(deltaTime: number) {

    }
}

