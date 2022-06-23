import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"
import FdAd from "../FanDong/FdAd"

export default class FinishUI extends Laya.Scene {
    constructor() {
        super()
    }
    winTitle: Laya.Image
    loseTitle: Laya.Image
    nextBtn: Laya.Image
    restartBtn: Laya.Image

    light: Laya.Image
    bounesIcon: Laya.Image

    freeSkin: any[] = []

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)

        this.winTitle.visible = GameLogic.Share.isWin
        this.nextBtn.visible = GameLogic.Share.isWin
        this.loseTitle.visible = !GameLogic.Share.isWin
        this.restartBtn.visible = !GameLogic.Share.isWin

        this.light.visible = GameLogic.Share.isWin
        this.bounesIcon.visible = GameLogic.Share.isWin

        Utility.addClickEvent(this.nextBtn, this, this.closeCB)
        Utility.addClickEvent(this.restartBtn, this, this.closeCB)

        FdMgr.inFinish(GameLogic.Share.isWin ? this.nextBtn : this.restartBtn)
    }

    onClosed() {
    }

    closeCB() {
        FdMgr.closeFinish(() => {
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.getPlayerData().grade++
                PlayerDataMgr.setPlayerData()
            }
            GameLogic.Share.restartGame()
            Laya.Scene.open('MyScenes/StartUI.scene')
        })
    }
}
