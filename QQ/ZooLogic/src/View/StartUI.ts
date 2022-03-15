import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"
import FdAd from "../FanDong/FdAd"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image
    moreBtn: Laya.Image

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        Utility.addClickEvent(this.moreBtn, this, this.moreBtnCB)
        FdMgr.inHomePage(this)
    }
    onClosed() {
    }

    startBtnCB() {
        FdMgr.startGame(() => {
            Laya.Scene.open('MyScenes/SelectUI.scene')
        })
    }

    moreBtnCB(){
        FdAd.showBoxAd()
    }
}
