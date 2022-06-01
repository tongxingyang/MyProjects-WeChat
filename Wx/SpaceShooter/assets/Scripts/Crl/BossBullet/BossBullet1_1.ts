import { _decorator, Component, Node, v3, Vec3, misc, view } from 'cc';
import Utility from '../../Mod/Utility';
import { Plane } from '../Plane';
const { ccclass, property } = _decorator;

@ccclass('BossBullet1_1')
export class BossBullet1_1 extends Component {

    prePos: Vec3 = v3()

    onLoad() {
        this.prePos = this.node.position.clone()
    }

    start() {
        //this.bezierMoveLeft()
    }

    initDir(isLeft: boolean) {
        if (isLeft) this.bezierMoveLeft()
        else this.bezierMoveRight()
    }

    bezierMoveLeft() {
        let dir = v3()
        Vec3.subtract(dir, Utility.getCanvasPos(Plane.Share.node), Utility.getCanvasPos(this.node))
        dir = dir.normalize()
        Vec3.multiplyScalar(dir, dir, 1500)
        let desPos = v3()
        Vec3.add(desPos, dir, this.node.position)

        desPos.x += Math.random() * 400 - 200
        Utility.bezierTo(
            this.node, 3, Utility.getCanvasPos(this.node), v3(-500, view.getVisibleSize().height / 2 + 300), desPos, null)
            .call(() => {
                this.node.destroy()
            })
            .start()
    }

    bezierMoveRight() {
        let dir = v3()
        Vec3.subtract(dir, Utility.getCanvasPos(Plane.Share.node), Utility.getCanvasPos(this.node))
        dir = dir.normalize()
        Vec3.multiplyScalar(dir, dir, 1500)
        let desPos = v3()
        Vec3.add(desPos, dir, this.node.position)

        desPos.x += Math.random() * 400 - 200
        Utility.bezierTo(
            this.node, 3, Utility.getCanvasPos(this.node), v3(500, view.getVisibleSize().height / 2 + 300), desPos, null)
            .call(() => {
                this.node.destroy()
            })
            .start()
    }

    update(deltaTime: number) {
        if (Vec3.distance(Utility.getCanvasPos(this.node), Utility.getCanvasPos(Plane.Share.node)) <= 80) {
            Plane.Share.hitCB()
            this.node.destroy()
            return
        }
        let dir = v3()
        Vec3.subtract(dir, this.node.position, this.prePos)
        dir = dir.normalize()
        let angle = Vec3.angle(v3(0, 1, 0), dir)
        angle = misc.radiansToDegrees(angle)
        if (this.node.position.x > this.prePos.x) {
            angle *= -1
        }
        this.node.angle = angle
        this.prePos = this.node.position.clone()
    }
}

