import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, v3 } from 'cc';
import PlatformApi from '../../Mod/PlatformApi';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('MushRoom')
export class MushRoom extends Component {
    boxCollider: BoxCollider2D = null

    isGot: boolean = false

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.isGot && otherCollider.node.name == 'player') {
            this.isGot = true
            SoundMgr.Share.PlaySound('take_item_positive')
            PlatformApi.DoVibrate()
            this.scheduleOnce(() => {
                this.node.destroy()
                GameLogic.Share.playerCrl.smallCB()
            })
        }
    }

    update(deltaTime: number) {

    }
}

