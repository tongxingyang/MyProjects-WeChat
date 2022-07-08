import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, tween, v3 } from 'cc';
import PlatformApi from '../../Mod/PlatformApi';
const { ccclass, property } = _decorator;

@ccclass('FallGrid')
export class FallGrid extends Component {
    boxCollider: BoxCollider2D = null

    isGot: boolean = false

    @property
    fallTime: number = 0.5

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.isGot && otherCollider.node.name == 'player') {
            this.isGot = true
            PlatformApi.DoVibrate()
            tween(this.node).by(this.fallTime, { position: v3(0, -1000, 0) }).start()
        }
    }

    update(deltaTime: number) {

    }
}

