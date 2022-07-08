import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, v3 } from 'cc';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level7')
export class Level7 extends Component {

    @property(Node)
    sun: Node = null
    @property(Node)
    moon: Node = null
    @property(Node)
    flag: Node = null

    sunStartY: number = 0
    moonStartY: number = 0
    flagStartY: number = 0

    start() {
        this.sunStartY = this.sun.position.y
        this.moonStartY = this.moon.position.y
        this.flagStartY = this.flag.position.y
    }

    update(deltaTime: number) {
        if (GameLogic.Share.isStart) {
            let v = this.sunStartY - this.sun.position.y
            v *= 6
            this.moon.position = v3(this.moon.position.x, this.moonStartY + v)
            this.flag.position = v3(this.flag.position.x, this.flagStartY + v)
        }
    }
}

