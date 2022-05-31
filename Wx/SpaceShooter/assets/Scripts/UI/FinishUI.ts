
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
    winTitle: Node = null
    @property(Node)
    loseTitle: Node = null
    @property(Node)
    bounes: Node = null
    @property(Node)
    adBtn: Node = null
    @property(Node)
    nextBtn: Node = null
    @property(Node)
    retryBtn: Node = null

    start() {
        // [3]
        this.winTitle.active = GameLogic.Share.isWin
        this.loseTitle.active = !GameLogic.Share.isWin
        this.bounes.active = GameLogic.Share.isWin
        this.adBtn.active = GameLogic.Share.isWin
        this.nextBtn.active = GameLogic.Share.isWin
        this.retryBtn.active = !GameLogic.Share.isWin

        FdMgr.inFinish(GameLogic.Share.isWin ? this.nextBtn : this.retryBtn)

        if (PlayerDataMgr.getPlayerData().grade == 5) {
            PlayerDataMgr.getPlayerData().coin += 500
            PlayerDataMgr.setPlayerData()
        }
    }

    adBtnCB() {
        SoundMgr.Share.PlaySound('click')
        let cb = () => {
            PlayerDataMgr.getPlayerData().coin += 800
            PlayerDataMgr.setPlayerData()
            this.nextBtnCB()
        }
        FdAd.showVideoAd(cb)
    }

    nextBtnCB() {
        SoundMgr.Share.PlaySound('click')
        FdMgr.closeFinish(() => {
            director.loadScene('Game')
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}