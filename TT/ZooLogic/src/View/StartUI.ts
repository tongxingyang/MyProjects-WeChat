import Utility from "../Mod/Utility"
import AdMgr from "../Mod/AdMgr"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        AdMgr.showBanner()
    }
    onClosed() {
        AdMgr.hideBanner()
    }

    startBtnCB() {
        Laya.Scene.open('MyScenes/SelectUI.scene')
    }
}
