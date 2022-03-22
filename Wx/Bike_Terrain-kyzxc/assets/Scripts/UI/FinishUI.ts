
import { _decorator, Component, Node, director } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('FinishUI')
export class FinishUI extends Component {

    @property(Node)
    win: Node = null
    @property(Node)
    lose: Node = null
    @property(Node)
    nextBtn: Node = null
    @property(Node)
    restartBtn: Node = null
    @property(Node)
    adBtn: Node = null
    @property(Node)
    coin: Node = null
    @property(Node)
    coin1: Node = null

    start() {
        // [3]
        this.win.active = GameLogic.Share.isWin
        this.lose.active = !GameLogic.Share.isWin
        this.coin.active = GameLogic.Share.isWin && !GameLogic.Share.isHardMode
        this.nextBtn.active = GameLogic.Share.isWin
        this.adBtn.active = GameLogic.Share.isWin && !GameLogic.Share.isHardMode
        this.restartBtn.active = !GameLogic.Share.isWin
        this.coin1.active = GameLogic.Share.isWin && GameLogic.Share.isHardMode

        if (GameLogic.Share.isWin) {
            PlayerDataMgr.changeCoin(GameLogic.Share.isHardMode ? 1000 : 200)
        }

        FdMgr.inFinish(GameLogic.Share.isWin ? this.nextBtn : this.restartBtn)
    }

    adBtnCB() {
        FdAd.showVideoAd(() => {
            PlayerDataMgr.changeCoin(800)
            this.nextBtnCB()
        })
    }

    nextBtnCB() {
        FdMgr.closeFinish(() => {
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.changeGrade(1)
            }
            GameLogic.Share.restart()
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}