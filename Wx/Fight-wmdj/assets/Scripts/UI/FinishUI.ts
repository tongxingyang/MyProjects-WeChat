import { _decorator, Component, Node, Label } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import PlatformApi from '../Common/PlatformApi';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
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
    doubleBtn: Node = null

    @property(Label)
    numArr: Label[] = []

    start() {
        this.winTitle.active = GameLogic.Share.isWin
        this.loseTitle.active = !GameLogic.Share.isWin
        this.numArr[0].string = GameLogic.Share.curGrade.toString()

        this.numArr[1].string = ':' + GameLogic.Share.gotMaterialsCount.toString()
        this.numArr[2].string = ':' + GameLogic.Share.gotSoulCount.toString()

        this.numArr[3].string = ':' + GameLogic.Share.gotEnchant1Count.toString()
        this.numArr[4].string = ':' + GameLogic.Share.gotEnchant2Count.toString()
        this.numArr[5].string = ':' + GameLogic.Share.gotEnchant3Count.toString()
        this.numArr[6].string = ':' + GameLogic.Share.gotEnchant4Count.toString()

        FdMgr.inFinish()
    }

    doubleBtnCB() {
        let cb = () => {
            PlayerDataMgr.getPlayerData().material += GameLogic.Share.gotMaterialsCount
            PlayerDataMgr.getPlayerData().soul += GameLogic.Share.gotSoulCount
            PlayerDataMgr.getPlayerData().enchantArr[0] += GameLogic.Share.gotEnchant1Count
            PlayerDataMgr.getPlayerData().enchantArr[1] += GameLogic.Share.gotEnchant2Count
            PlayerDataMgr.getPlayerData().enchantArr[2] += GameLogic.Share.gotEnchant3Count
            PlayerDataMgr.getPlayerData().enchantArr[3] += GameLogic.Share.gotEnchant4Count
            PlayerDataMgr.setPlayerData();
            this.numArr[1].string = ':' + (GameLogic.Share.gotMaterialsCount * 2).toString()
            this.numArr[2].string = ':' + (GameLogic.Share.gotSoulCount * 2).toString()

            this.numArr[3].string = ':' + (GameLogic.Share.gotEnchant1Count * 2).toString()
            this.numArr[4].string = ':' + (GameLogic.Share.gotEnchant2Count * 2).toString()
            this.numArr[5].string = ':' + (GameLogic.Share.gotEnchant3Count * 2).toString()
            this.numArr[6].string = ':' + (GameLogic.Share.gotEnchant4Count * 2).toString()
            GameLogic.Share.createTips('奖励翻倍')
            this.doubleBtn.active = false
        }
        PlatformApi.showVideo(cb)
    }

    backToHome() {
        SoundMgr.Share.PlaySound('click')
        FdMgr.closeFinish(() => {
            GameLogic.Share.restartGame()
        })
    }

    rankBtnCB() {
        UINode.Share.showUI(UIType.UI_RANK, true, () => {
            UINode.Share.showUI(UIType.UI_FINISH)
        })
    }

    update(deltaTime: number) {

    }
}

