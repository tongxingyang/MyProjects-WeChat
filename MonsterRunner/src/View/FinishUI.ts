import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"

export default class FinishUI extends Laya.Scene {
    constructor() {
        super()
    }
    gradeNum: Laya.FontClip
    coinNum: Laya.FontClip

    winTitle: Laya.Image
    loseTitle: Laya.Image
    unlockNode: Laya.Image
    bounesIcon: Laya.Image

    nextBtn: Laya.Image
    restartBtn: Laya.Image

    freeSkin: any[] = []

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
        let isWin = GameLogic.Share.isWin
        this.winTitle.visible = isWin
        this.bounesIcon.visible = isWin
        this.loseTitle.visible = !isWin
        this.nextBtn.visible = isWin
        this.restartBtn.visible = !isWin

        Utility.addClickEvent(this.nextBtn, this, this.closeCB)
        Utility.addClickEvent(this.restartBtn, this, this.closeCB)

        FdMgr.inFinish(isWin ? this.nextBtn : this.restartBtn)
    }

    onClosed() {
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
