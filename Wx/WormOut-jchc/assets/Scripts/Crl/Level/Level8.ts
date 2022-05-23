import { _decorator, Component, Node, TERRAIN_HEIGHT_BASE, tween, v3, dragonBones } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
import { GameLogic } from '../GameLogic';
import { Arrow } from '../Prop/Arrow';
const { ccclass, property } = _decorator;

@ccclass('Level8')
export class Level8 extends Component {

    @property(Node)
    faceDB: Node = null

    hadFinish: boolean = false

    start() {
        SoundMgr.Share.PlaySound('worm_tongue')
        this.scheduleOnce(() => {
            this.node.getChildByName('worm').getChildByName('b4').getChildByName('face').getComponent(dragonBones.ArmatureDisplay).playAnimation('worm_idle')
        }, 1)

        this.node.getChildByName('arrow1').getChildByName('arrow_2').getComponent(Arrow).hadClick = true
    }

    update(deltaTime: number) {
        if (!this.hadFinish) {
            if (this.node.getChildByName('worm').getChildByName('b1').position.y <= -200) {
                this.node.getChildByName('worm').getChildByName('b4').getChildByName('face').getComponent(dragonBones.ArmatureDisplay).playAnimation('worm_process')
                SoundMgr.Share.PlaySound('worm_detouch')
                this.hadFinish = true
                this.faceDB.getComponent(dragonBones.ArmatureDisplay).playAnimation('fruits_1_win', 1)
                let cameraNode = GameLogic.Share.node.getChildByName('Camera')
                tween(cameraNode).to(1, { position: v3(0, 300, 0), scale: v3(0.5, 0.5, 1) }).start()
                this.node.getChildByName('ptNode').active = true
                GameLogic.Share.gameOver(true)
            }
        }
    }
}

