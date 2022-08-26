
import { _decorator, Component, Node, v3, tween, director } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('FinishUI')
export class FinishUI extends Component {

    @property(Node)
    nextBtn: Node = null

    start() {
        // [3]
        this.nextBtn.active = GameLogic.Share.isWin

        FdMgr.inFinish(this.nextBtn)

        if (GameLogic.Share.isWin) {
            PlayerDataMgr.changeGrade(1)
            PlayerDataMgr.getPlayerData().coin += 200
            PlayerDataMgr.setPlayerData()
        }
    }

    backBtnCB() {
        SoundMgr.Share.PlaySound('click')

        FdMgr.closeFinish(() => {
            GameLogic.Share.restart(true)
        })
    }

    nextBtnCB() {
        SoundMgr.Share.PlaySound('click')
        this.node.active = false
        GameLogic.Share.restart(false)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}