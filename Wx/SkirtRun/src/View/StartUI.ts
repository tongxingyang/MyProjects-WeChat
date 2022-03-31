import Utility from "../Mod/Utility"
import PlayerDataMgr from "../Libs/PlayerDataMgr"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image
    gradeNum: Laya.FontClip
    coinNum: Laya.FontClip

    onOpened() {
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        Laya.timer.frameLoop(1, this, this.myUpdate)
    }
    onClosed() {
    }

    startBtnCB() {
        Laya.Scene.open('MyScenes/SelectUI.scene')
    }
    
    myUpdate() {
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
    }
}
