import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, resources, Prefab, instantiate, UIOpacity, v2 } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('ActiveGrid')
export class ActiveGrid extends Component {
    boxCollider: BoxCollider2D = null

    isGot: boolean = false

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.isGot && otherCollider.node.name == 'player' && selfCollider.tag == 1 && GameLogic.Share.playerCrl.body.linearVelocity.y > 0) {
            this.isGot = true

            GameLogic.Share.playerCrl.body.linearVelocity = v2(GameLogic.Share.playerCrl.body.linearVelocity.x, 0)
            this.scheduleOnce(() => {
                this.node.children[0].active = true
            })
            SoundMgr.Share.PlaySound('hitGrid')
        }
    }

    update(deltaTime: number) {

    }
}

