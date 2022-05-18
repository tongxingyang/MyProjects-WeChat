import { _decorator, Component, Node, EventTouch, UITransform, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Level1')
export class Level1 extends Component {

    pliers: Node = null
    hose: Node = null
    clip: Node = null
    clipBase: Node = null

    onLoad() {
        this.pliers = this.node.getChildByName('pliers')
        this.hose = this.pliers.getChildByName('hose')
        this.clip = this.pliers.getChildByName('clip')
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
    }

    touchEnd(evt: EventTouch) {
        //this.clipBase.setPosition(v3(0,150))
        this.clipBase.active = false
    }

    update(deltaTime: number) {

    }
}

