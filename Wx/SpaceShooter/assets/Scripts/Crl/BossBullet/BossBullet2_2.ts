import { _decorator, Component, Node, tween, v3, Vec3 } from 'cc';
import Utility from '../../Mod/Utility';
import { Plane } from '../Plane';
const { ccclass, property } = _decorator;

@ccclass('BossBullet2_2')
export class BossBullet2_2 extends Component {
    start() {
        this.move()
    }

    move() {
        let dir = v3(0, -1, 0)
        Vec3.multiplyScalar(dir, dir, 1500)
        let desPos = v3()
        Vec3.add(desPos, dir, this.node.position)

        tween(this.node).to(2, { position: desPos }).call(() => {
            this.node.destroy()
        }).start()
    }

    update(deltaTime: number) {
        let myPos = Utility.getCanvasPos(this.node)
        let planePos = Utility.getCanvasPos(Plane.Share.node)
        if (Math.abs(myPos.x - planePos.x) <= 120 && Math.abs(myPos.y - planePos.y) <= 100) {
            Plane.Share.hitCB()
            this.node.destroy()
            return
        }
    }
}

