import { _decorator, Component, Node, RigidBody, RigidBody2D, view } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ClickFall')
export class ClickFall extends Component {
    start() {
        this.node.on(Node.EventType.TOUCH_START, this.click, this)
        this.node.setPosition(this.node.position.x, view.getVisibleSize().height - 100)
    }

    click() {
        this.getComponent(RigidBody2D).gravityScale = 5
        this.getComponent(RigidBody2D).wakeUp()
    }

    update(deltaTime: number) {

    }
}

