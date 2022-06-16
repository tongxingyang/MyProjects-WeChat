import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"
import FdAd from "../FanDong/FdAd"

export default class FinishUI extends Laya.Scene {
    constructor() {
        super()
    }
    nextBtn: Laya.Image
    adBtn: Laya.Image

    freeSkin: any[] = []

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)

        Utility.addClickEvent(this.nextBtn, this, this.closeCB)
        Utility.addClickEvent(this.adBtn, this, this.adBtnCB)

        FdMgr.inFinish(this.nextBtn)
    }

    onClosed() {
    }

    adBtnCB() {
        let cb = () => {
            PlayerDataMgr.getPlayerData().coin += 800
            PlayerDataMgr.setPlayerData()
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
