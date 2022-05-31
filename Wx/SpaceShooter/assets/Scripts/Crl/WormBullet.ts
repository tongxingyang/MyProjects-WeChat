import { _decorator, Component, Node, Vec3, tween } from 'cc';
import { Plane } from './Plane';
const { ccclass, property } = _decorator;

@ccclass('WormBullet')
export class WormBullet extends Component {
    start() {
        tween(this.node)
            .by(1, { angle: 360 })
            .repeatForever()
            .start()
    }

    update(deltaTime: number) {
        if (Vec3.distance(this.node.position, Plane.Share.node.position) <= 80) {
            Plane.Share.hitCB()
            this.node.destroy()
        }
    }
}

