import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        FdMgr.inHomePage()
    }
    onClosed() {
    }

    startBtnCB() {
        FdMgr.startGame(()=>{
            Laya.Scene.open('MyScenes/SelectUI.scene')
        })
    }
}
