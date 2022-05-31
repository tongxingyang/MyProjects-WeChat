import { _decorator, Component, Node, UITransform, v3 } from 'cc';
import { GameLogic } from './GameLogic';
import { Plane } from './Plane';
import { Worm } from './Worm';
const { ccclass, property } = _decorator;

@ccclass('LaserBullet')
export class LaserBullet extends Component {
    start() {
        this.schedule(this.checkCollWorm, 0.2)
    }

    checkCollWorm() {
        for (let i = 0; i < GameLogic.Share.wormArr.length; i++) {
            let wormPos = GameLogic.Share.wormArr[i].getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0))
            let myPos = this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0))
            if (Math.abs(wormPos.x - myPos.x) <= 50) {
                GameLogic.Share.wormArr[i].getComponent(Worm).decHp(1 * Plane.Share._lv)
            }
        }
    }

    update(deltaTime: number) {
        let s = 1
        if (Plane.Share._lv == 4) s = 1
        if (Plane.Share._lv == 5) s = 1.57
        if (Plane.Share._lv == 6) s = 2.14
        if (Plane.Share._lv == 7) s = 2.8
        if (Plane.Share._lv == 8) s = 3.4
        if (Plane.Share._lv == 9) s = 4
        this.node.setScale(v3(s, s))
    }
}

