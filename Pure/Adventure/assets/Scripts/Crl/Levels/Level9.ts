import { _decorator, Component, Node, tween, v3 } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('Level9')
export class Level9 extends Component {

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
            if (this.gridArr[0].active || this.gridArr[1].active) {
                this.isFinish = true
                this.fallGround()
                return
            }
        }

        if (!this.gridArr[3].active) {
            this.isFinish = true
            if (this.gridArr[0].active || this.gridArr[1].active || this.gridArr[2].active) {
                this.fallGround()
            } else {
                this.flag.active = true
                SoundMgr.Share.PlaySound('take_item_positive')
            }
        }
    }
}

