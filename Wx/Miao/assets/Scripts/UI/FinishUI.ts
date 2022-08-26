
import { _decorator, Component, Node } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('FinishUI')
export class FinishUI extends Component {

    @property(Node)
    winNode: Node = null
    @property(Node)
    loseNode: Node = null
    @property(Node)
    nextBtn: Node = null
    @property(Node)
    backBtn: Node = null

    start() {
        // [3]
        this.winNode.active = GameLogic.Share.isWin
        this.loseNode.active = !GameLogic.Share.isWin

        FdMgr.inFinish(GameLogic.Share.isWin ? this.nextBtn : this.backBtn)
    }

    nextBtnCB() {
        SoundMgr.Share.PlaySound('click')
        if (GameLogic.Share.isWin) {
            PlayerDataMgr.getPlayerData().grade++
            PlayerDataMgr.setPlayerData()
        }
        FdMgr.closeFinish(() => {
            GameLogic.Share.restart(true)
        })
    }
}