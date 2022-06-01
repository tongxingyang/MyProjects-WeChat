import { _decorator, Component, Node, v3, Vec3, tween } from 'cc';
import Utility from '../../Mod/Utility';
import { Plane } from '../Plane';
const { ccclass, property } = _decorator;

@ccclass('BossBullet1_2')
export class BossBullet1_2 extends Component {

    start() {
        this.move()
    }

    move() {
        let dir = v3()
        Vec3.subtract(dir, Utility.getCanvasPos(Plane.Share.node), Utility.getCanvasPos(this.node))
        dir = dir.normalize()
        Vec3.multiplyScalar(dir, dir, 2000)
        let desPos = v3()
        Vec3.add(desPos, dir, this.node.position)
        tween(this.node).to(4, { position: desPos }).call(() => { this.node.destroy() }).start()
    }

    update(deltaTime: number) {
        if (Vec3.distance(Utility.getCanvasPos(this.node), Utility.getCanvasPos(Plane.Share.node)) <= 120) {
            Plane.Share.hitCB()
            this.node.destroy()
            return
        }
    }
}

