import { _decorator, Component, Node, ProgressBar } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import { GameLogic } from '../Crl/GameLogic';
const { ccclass, property } = _decorator;

@ccclass('ReviveUI')
export class ReviveUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null


    start() {
        this.scheduleOnce(this.noBtnCB, 5.2)
    }

    reviveBtnCB() {
        let cb = () => {
            GameLogic.Share.revive()
        }
        FdAd.showVideoAd(cb)
    }

    noBtnCB() {
        this.node.active = false
        GameLogic.Share.showFinishUI()
    }

    update(deltaTime: number) {
        this.pBar.progress -= 1 / 60 * 0.2
    }
}

