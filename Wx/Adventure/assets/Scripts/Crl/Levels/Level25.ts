import { _decorator, Component, Node, EventTouch, Vec3, tween, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Level25')
export class Level25 extends Component {

    @property(Node)
    cloudNode: Node = null
    @property(Node)
    sun: Node = null
    @property(Node)
    ice: Node = null

    isDone: boolean = false

    start() {

    }

    update(deltaTime: number) {
        if (!this.isDone) {
            let hadNear: boolean = false
            this.cloudNode.children.forEach((c: Node) => {
                if (Vec3.distance(c.position, this.sun.position) < 150) {
                    hadNear = true
                    return
                }
            })

            if (!hadNear) {
                this.isDone = true
                tween(this.ice.getComponent(UIOpacity)).to(1, { opacity: 0 }).call(() => { this.ice.destroy() }).start()
            }
        }
    }
}

