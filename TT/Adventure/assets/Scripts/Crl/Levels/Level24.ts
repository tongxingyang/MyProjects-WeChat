import { _decorator, Component, Node, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Level24')
export class Level24 extends Component {

    @property(Node)
    box: Node = null

    start() {


        this.box.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.box.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.box.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
        this.box.on(Node.EventType.TOUCH_END, this.touchEnd, this)
    }

    touchStart(evt: EventTouch) {
        let pos = evt.getUILocation()
    }
    touchMove(evt: EventTouch) {
        let pos = evt.getUIDelta()
        let noPos = this.box.position.clone()
        noPos.x += pos.x
        noPos.y += pos.y
        this.box.position = noPos
    }
    touchEnd(evt: EventTouch) {

    }

    update(deltaTime: number) {

    }
}

