import { _decorator, Component, Node, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Level3')
export class Level3 extends Component {

    @property(Node)
    gridArr: Node[] = []
    @property(Node)
    ground: Node = null
    @property(Node)
    flag: Node = null

    isFinish: boolean = false

    start() {

    }

    fallGround() {
        this.flag.active = true
        tween(this.ground).by(1, { position: v3(0, -1000, 0) }).start()
        tween(this.flag).by(1, { position: v3(0, -1000, 0) }).start()
    }

    update(deltaTime: number) {
        if (this.isFinish) return

        if (!this.gridArr[1].active) {
            if (this.gridArr[0].active) {
                this.isFinish = true
                this.fallGround()
                return
            }
        }

        if (!this.gridArr[2].active) {
            this.isFinish = true
            if (this.gridArr[0].active || this.gridArr[1].active) {
                this.fallGround()
            } else {
                this.flag.active = true
            }
        }
    }
}

