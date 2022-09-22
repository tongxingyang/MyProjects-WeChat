import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import SGMgr from "../SGSDK/SGMgr"
import SGAD from "../SGSDK/SGAD"

export default class FinishUI extends Laya.Scene {
    constructor() {
        super()
    }
    winTitle: Laya.Image
    loseTitle: Laya.Image
    nextBtn: Laya.Image
    restartBtn: Laya.Image

    light1: Laya.Image
    bounesIcon1: Laya.Image
    light2: Laya.Image
    bounesIcon2: Laya.Image

    freeSkin: any[] = []

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)

        this.winTitle.visible = GameLogic.Share.isWin
        this.nextBtn.visible = GameLogic.Share.isWin
        this.loseTitle.visible = !GameLogic.Share.isWin
        this.restartBtn.visible = !GameLogic.Share.isWin

        this.light1.visible = GameLogic.Share.isWin
        this.bounesIcon1.visible = GameLogic.Share.isWin
        this.light2.visible = GameLogic.Share.isWin
        this.bounesIcon2.visible = GameLogic.Share.isWin

        Utility.addClickEvent(this.nextBtn, this, this.closeCB)
        Utility.addClickEvent(this.restartBtn, this, this.closeCB)

        if (GameLogic.Share.isWin) {
            let bodyId: number = PlayerDataMgr.getFreeBody()
            let itemId: number = PlayerDataMgr.getFreeItem()
            this.light1.visible = bodyId >= 0
            this.bounesIcon1.visible = bodyId >= 0
            this.light2.visible = itemId >= 0
            this.bounesIcon2.visible = itemId >= 0
            if (bodyId >= 0) {
                this.bounesIcon1.skin = 'finishUI/Items/Body_' + (bodyId + 1) + '.png'
                PlayerDataMgr.getPlayerData().skinArr[bodyId] = 1
            }
            if (itemId >= 0) {
                this.bounesIcon2.skin = 'finishUI/Items/Hand_' + (itemId + 1) + '_L.png'
                PlayerDataMgr.getPlayerData().itemArr[itemId] = 1
            }
            PlayerDataMgr.setPlayerData()
        }

        SGMgr.inFinish()
    }

    onClosed() {
    }

    closeCB() {
        SGMgr.backToHome(() => {
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.getPlayerData().grade++
                PlayerDataMgr.setPlayerData()
            } else {
                PlayerDataMgr.getPlayerData().chooseArr.pop()
                PlayerDataMgr.setPlayerData()
            }
            GameLogic.Share.restartGame()
            Laya.Scene.open('MyScenes/StartUI.scene')
        })
    }
}
