import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"
import FdAd from "../FanDong/FdAd"

export default class FinishUI extends Laya.Scene {
    constructor() {
        super()
    }
    coinNum: Laya.FontClip

    winTitle: Laya.Image
    loseTitle: Laya.Image
    bounes: Laya.Image

    adBtn: Laya.Image
    nextBtn: Laya.Image
    restartBtn: Laya.Image

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
        let isWin = GameLogic.Share.isWin
        this.winTitle.visible = isWin
        this.loseTitle.visible = !isWin
        this.bounes.visible = isWin
        this.adBtn.visible = isWin
        this.nextBtn.visible = isWin
        this.restartBtn.visible = !isWin

        Utility.addClickEvent(this.adBtn, this, this.adBtnCB)
        Utility.addClickEvent(this.nextBtn, this, this.closeCB)
        Utility.addClickEvent(this.restartBtn, this, this.closeCB)

        FdMgr.inFinish(isWin ? this.nextBtn : this.restartBtn)
    }

    onClosed() {
    }

    adBtnCB() {
        let cb = () => {
            PlayerDataMgr.getPlayerData().coin += 800
            this.closeCB()
        }
        FdAd.showVideoAd(cb)
    }

    closeCB() {
        FdMgr.closeFinish(() => {
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.getPlayerData().coin += 200
                PlayerDataMgr.getPlayerData().grade++
                PlayerDataMgr.setPlayerData()
            }
            GameLogic.Share.restartGame()
            Laya.Scene.open('MyScenes/StartUI.scene')
        })
    }
}
