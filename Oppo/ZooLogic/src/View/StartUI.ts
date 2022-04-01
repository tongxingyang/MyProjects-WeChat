import FdMgr from "../FanDong/FdMgr"
import Utility from "../Mod/Utility"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        FdMgr.inHome()
    }
    onClosed() {
    }

    startBtnCB() {
        Laya.Scene.open('MyScenes/SelectUI.scene')
    }
}
