import { _decorator, Component, Node, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TouchMove')
export class TouchMove extends Component {

    start() {
        this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
    }

    touchMove(evt: EventTouch) {
        let pos = evt.getUIDelta()
        let noPos = this.node.position.clone()
        noPos.x += pos.x
        noPos.y += pos.y
        this.node.position = noPos
    }

    update(deltaTime: number) {

    }
}

