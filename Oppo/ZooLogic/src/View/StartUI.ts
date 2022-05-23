import FdMgr from "../FanDong/FdMgr"
import Utility from "../Mod/Utility"
import WxApi from "../Libs/WxApi"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image
    vibrateBtn: Laya.Image

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        Utility.addClickEvent(this.vibrateBtn, this, this.vibrateBtnCB)
        FdMgr.inHome()
    }
    onClosed() {
    }

    startBtnCB() {
        FdMgr.clickStart(() => {
            this.close()
            Laya.Scene.open('MyScenes/SelectUI.scene', false)
        })
    }

    vibrateBtnCB() {
        WxApi.isVibrate = !WxApi.isVibrate
        this.vibrateBtn.skin = WxApi.isVibrate ? 'gameUI/zd_btn_1.png' : 'gameUI/zd_btn_2.png'
        let str: Laya.Label = this.vibrateBtn.getChildAt(0) as Laya.Label
        str.text = WxApi.isVibrate ? '震动：开' : '震动：关'
    }
}
