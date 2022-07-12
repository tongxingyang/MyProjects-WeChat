
import { _decorator, Component, Node, v3, tween, director, Label, getPathFromRoot } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('FinishUI')
export class FinishUI extends Component {

    @property(Node)
    winNode: Node = null
    @property(Node)
    loseNode: Node = null
    @property(Label)
    coinNum: Label = null
    @property(Label)
    dieCount: Label = null

    start() {
        // [3]
        this.winNode.active = GameLogic.Share.isWin
        this.loseNode.active = !GameLogic.Share.isWin

        this.coinNum.string = PlayerDataMgr.getFinishBounes(GameLogic.Share.curGrade).toString()
        this.dieCount.string = PlayerDataMgr.getPlayerData().dieCount.toString()

        if (GameLogic.Share.isWin) {
            PlayerDataMgr.changeCoin(PlayerDataMgr.getFinishBounes(GameLogic.Share.curGrade))
        }
        if (GameLogic.Share.isWin && GameLogic.Share.curGrade == Math.floor((PlayerDataMgr.getPlayerData().grade - 1) % PlayerDataMgr.maxGrade) + 1) {
            PlayerDataMgr.changeGrade(1)
        }

        FdMgr.inFinish()
    }

    nextBtnCB() {
        SoundMgr.Share.PlaySound('click')
        if (PlayerDataMgr.getPlayerData().power > 0) {
            this.backCB(false)
        } else {
            FdMgr.closeFinishAd()
            UINode.Share.showUI(UIType.UI_POWER, () => {
                UINode.Share.showUI(UIType.UI_FINISH)
            })
        }
    }

    adBtnCB() {
        SoundMgr.Share.PlaySound('click')
        let cb = () => {
            PlayerDataMgr.changeCoin(PlayerDataMgr.getFinishBounes(GameLogic.Share.curGrade) * 4)

            this.backCB(true)
        }
        FdAd.showVideoAd(cb)
    }

    homeBtnCB() {
        SoundMgr.Share.PlaySound('click')
        this.backCB(true)
    }

    restartBtnCB() {
        SoundMgr.Share.PlaySound('click')
        if (PlayerDataMgr.getPlayerData().power > 0) {
            this.backCB(false)
        } else {
            FdMgr.closeFinishAd()
            UINode.Share.showUI(UIType.UI_POWER, () => {
                UINode.Share.showUI(UIType.UI_FINISH)
            })
        }
    }

    backCB(isBackToHome: boolean) {
        FdMgr.closeFinish(() => {
            GameLogic.Share.restart(isBackToHome)
        })
    }
}