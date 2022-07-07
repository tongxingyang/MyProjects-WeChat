
import { _decorator, Component, Node, v3, tween, director, Label } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
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
    }

    nextBtnCB() {
        if (PlayerDataMgr.getPlayerData().power > 0) {
            GameLogic.Share.restart(false)
        } else {
            UINode.Share.showUI(UIType.UI_POWER, () => {
                UINode.Share.showUI(UIType.UI_FINISH)
            })
        }
    }

    adBtnCB() {
        let cb = () => {
            PlayerDataMgr.changeCoin(PlayerDataMgr.getFinishBounes(GameLogic.Share.curGrade) * 4)
            GameLogic.Share.restart(true)
        }
        cb()
    }

    homeBtnCB() {
        GameLogic.Share.restart(true)
    }

    restartBtnCB() {
        if (PlayerDataMgr.getPlayerData().power > 0) {
            GameLogic.Share.restart(false)
        } else {
            UINode.Share.showUI(UIType.UI_POWER, () => {
                UINode.Share.showUI(UIType.UI_FINISH)
            })
        }
    }
}