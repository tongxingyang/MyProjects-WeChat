import { _decorator, Component, Node, tween, v3, ParticleSystem2D } from 'cc';
import { SoundMgr } from '../Mod/SoundMgr';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('LogoDrop')
export class LogoDrop extends Component {

    start() {
        let pos = this.node.position.clone()
        pos.y += 750
        this.node.position = pos

        tween(this.node).by(.5, { position: v3(0, -750, 0) }, { easing: "expoIn" }).call(() => {
            GameLogic.Share.shakeUICam()
            SoundMgr.Share.PlaySound('logo')
            this.node.children[0].getComponent(ParticleSystem2D).resetSystem()
        }).start()
    }

    update(deltaTime: number) {

    }
}

