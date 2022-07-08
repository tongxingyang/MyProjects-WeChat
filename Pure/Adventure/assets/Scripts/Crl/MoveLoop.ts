import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveLoop')
export class MoveLoop extends Component {

    @property
    speed: number = 2

    @property
    isRight: boolean = true
    @property
    leftMax: number = 0
    @property
    rightMax: number = 0

    start() {

    }

    moveLoop() {
        if (this.isRight) {
            if (this.node.position.x >= this.rightMax) {
                this.isRight = false
                let s = this.node.getScale()
                s.x *= -1
                this.node.setScale(s)
            }
        } else {
            if (this.node.position.x <= this.leftMax) {
                this.isRight = true
                let s = this.node.getScale()
                s.x *= -1
                this.node.setScale(s)
            }
        }

        let myPos = this.node.position.clone()
        myPos.x += this.isRight ? this.speed : -this.speed
        this.node.position = myPos
    }

    update(deltaTime: number) {
        this.moveLoop()
    }
}

