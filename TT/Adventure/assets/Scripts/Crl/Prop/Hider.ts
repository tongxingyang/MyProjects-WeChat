import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, tween, v3 } from 'cc';
import PlatformApi from '../../Mod/PlatformApi';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Hider')
export class Hider extends Component {
    boxCollider: BoxCollider2D = null

    isGot: boolean = false

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.isGot && otherCollider.node.name == 'player') {
            this.isGot = true
            PlatformApi.DoVibrate()
            SoundMgr.Share.PlaySound('take_item_positive')
            GameLogic.Share.playerCrl.hideCB()
            this.scheduleOnce(() => { this.node.destroy() })
        }
    }

    update(deltaTime: number) {

    }
}

