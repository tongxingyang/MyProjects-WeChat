import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, tween, UIOpacityComponent } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('BlackCloud')
export class BlackCloud extends Component {
    boxCollider: BoxCollider2D = null

    isGot: boolean = false

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.isGot && otherCollider.node.name == 'player') {
            this.isGot = true
            tween(this.node.getComponent(UIOpacityComponent)).to(2, { opacity: 0 }).start()
            
            SoundMgr.Share.PlaySound('take_item_positive')
        }
    }

    update(deltaTime: number) {

    }
}

