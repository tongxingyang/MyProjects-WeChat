import { _decorator, Component, Node, Vec3, tween } from 'cc';
import { GameLogic } from './GameLogic';
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
        if (GameLogic.Share.isPause || GameLogic.Share.isGameOver) return
        if (Vec3.distance(this.node.position, Plane.Share.node.position) <= 80) {
            Plane.Share.hitCB()
            this.node.destroy()
        }
    }
}

