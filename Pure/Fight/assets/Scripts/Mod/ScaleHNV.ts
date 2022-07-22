import { _decorator, Component, Node, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScaleHNV')
export class ScaleHNV extends Component {

    @property
    type: number = 1

    start() {
        this.scale()
    }

    scale() {
        if (this.type == 1) {
            tween(this.node)
                .to(0.6, { scale: v3(0.9, 1.1, 1) })
                .to(0.6, { scale: v3(1, 1, 1) })
                .to(0.25, { scale: v3(1.02, 0.95, 1) })
                .to(0.25, { scale: v3(1, 1, 1) })
                .union()
                .repeatForever()
                .start()
        } else {
            tween(this.node)
                .to(0.25, { scale: v3(1.02, 0.95, 1) })
                .to(0.25, { scale: v3(1, 1, 1) })
                .to(0.6, { scale: v3(0.9, 1.1, 1) })
                .to(0.6, { scale: v3(1, 1, 1) })
                .union()
                .repeatForever()
                .start()
        }
    }

    update(deltaTime: number) {

    }
}

