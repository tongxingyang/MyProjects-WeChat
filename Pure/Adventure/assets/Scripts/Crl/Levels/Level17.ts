import { _decorator, Component, Node, tween, v3, dragonBones, Tween } from 'cc';
import { UpDownLoop } from '../../Mod/UpDownLoop';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level17')
export class Level17 extends Component {

    @property(Node)
    sun: Node = null
    @property(Node)
    ci: Node = null
    @property(Node)
    die: Node = null
    @property(Node)
    stage: Node = null

    hadMoveSun: boolean = false
    hadHideCi: boolean = false

    start() {

    }

    update(deltaTime: number) {
        if (!this.hadMoveSun && GameLogic.Share.player.position.x >= 350) {
            this.hadMoveSun = true
            this.sun.getComponent(UpDownLoop).destroy()
            Tween.stopAllByTarget(this.sun)
            this.sun.getComponent(dragonBones.ArmatureDisplay).playAnimation('idle_2')
            tween(this.sun).by(0.2, { position: v3(0, -200, 0) }).start()
        }
        if (!this.hadHideCi && GameLogic.Share.player.position.x >= 840) {
            this.hadHideCi = true
            tween(this.ci).by(0.2, { position: v3(0, 300, 0) }).start()
        }
        if (this.stage.position.x < 1960 &&
            GameLogic.Share.player.position.x >= 1720 &&
            GameLogic.Share.player.position.x <= 1990 &&
            GameLogic.Share.playerCrl.isJumping) {
            this.die.active = true
        }
    }
}

