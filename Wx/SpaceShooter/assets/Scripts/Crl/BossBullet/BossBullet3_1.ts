import { _decorator, Component, Node } from 'cc';
import Utility from '../../Mod/Utility';
import { GameLogic } from '../GameLogic';
import { Plane } from '../Plane';
const { ccclass, property } = _decorator;

@ccclass('BossBullet3_1')
export class BossBullet3_1 extends Component {
    start() {

    }

    update(deltaTime: number) {
        if (!Plane.Share.node.active || GameLogic.Share.isGameOver || GameLogic.Share.isPause) return
        let myPos = Utility.getCanvasPos(this.node)
        let planePos = Utility.getCanvasPos(Plane.Share.node)
        if (Math.abs(myPos.x - planePos.x) <= 80) {
            Plane.Share.hitCB()
            return
        }
    }
}

