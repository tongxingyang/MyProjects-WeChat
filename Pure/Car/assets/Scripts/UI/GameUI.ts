import { _decorator, Component, Node, EventTouch, Vec3, Vec2, v2 } from 'cc';
import { Car } from '../Crl/Car';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    @property(Node)
    touchNode: Node = null

    touchStartPos: Vec2 = v2()

    start() {
        this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.touchNode.on(Node.EventType.TOUCH_END, this.touchEnd, this)
        this.touchNode.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)
    }

    touchStart(evt: EventTouch) {
        this.touchStartPos = evt.getLocationInView()
    }

    touchMove(evt: EventTouch) {
        let dt = evt.getLocationInView().x - this.touchStartPos.x
        Car.Share.moveX(dt <= 0)
        this.touchStartPos = evt.getLocationInView()
    }

    touchEnd(evt: EventTouch) {

    }

    update(deltaTime: number) {

    }
}

