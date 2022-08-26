import { _decorator, Component, Node, BoxCollider2D, Collider2D, Contact2DType, IPhysics2DContact, UIOpacity } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Ci')
export class Ci extends Component {
    boxCollider: BoxCollider2D = null

    isGot: boolean = false

    @property
    isHurt: boolean = true

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D)
        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onGroundCollider, this)
    }

    onGroundCollider(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (!this.isGot && otherCollider.node.name == 'player') {
            this.isGot = true
            if (this.getComponent(UIOpacity))
                this.getComponent(UIOpacity).opacity = 255
            this.scheduleOnce(() => {
                if (this.isHurt)
                    GameLogic.Share.gameOver(false)
                else {
                    if (this.getComponent(UIOpacity)) {
                        this.getComponent(UIOpacity).opacity = 0
                    }
                }
            })
        }
    }

    update(deltaTime: number) {

    }
}

