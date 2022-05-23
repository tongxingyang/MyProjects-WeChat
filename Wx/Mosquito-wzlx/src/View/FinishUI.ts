import GameLogic from "../Crl/GameLogic"
import FdAd from "../FanDong/FdAd"
import FdMgr from "../FanDong/FdMgr"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"

export default class FinishUI extends Laya.Scene {
    constructor() {
        super()
    }

    winTitle: Laya.Image
    loseTitle: Laya.Image

    restartBtn: Laya.Image
    nextBtn: Laya.Image

    onOpened(param) {
        let isWin: boolean = GameLogic.Share.isWin
        this.winTitle.visible = isWin
        this.loseTitle.visible = !isWin
        this.nextBtn.visible = isWin
        this.restartBtn.visible = !isWin

        Utility.addClickEvent(this.restartBtn, this, this.back)
        Utility.addClickEvent(this.nextBtn, this, this.back)

        FdMgr.inFinish(isWin ? this.nextBtn : this.restartBtn)
    }

    onClosed() {

    }

    back() {
        FdMgr.closeFinish(()=>{
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.getPlayerData().grade++
                PlayerDataMgr.setPlayerData()
            }
            this.close()
            GameLogic.Share.restartGame()
            Laya.Scene.open('MyScenes/StartUI.scene', true)
        })
    }
}