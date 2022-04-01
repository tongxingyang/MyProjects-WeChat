import FdAd from "./FdAd"
import FdMgr from "./FdMgr"

export default class PrivacyUI extends Laya.Scene {
    constructor() {
        super()
    }
    disAgree: Laya.Image
    agree: Laya.Image
    scrollPanel: Laya.Panel
    ysText: Laya.Text
    closeCB: Function = null

    onOpened(param?: any): void {
        if (param && param.closeCB) {
            this.closeCB = param.closeCB
        }
        this.disAgree.on(Laya.Event.CLICK, this, this.disAgreeCB)
        this.agree.on(Laya.Event.CLICK, this, this.agreeCB)
        this.scrollPanel.vScrollBarSkin = ""

        this.ysText.text = FdMgr.jsonConfig.agreementContent
        this.disAgree.visible = FdMgr.jsonConfig.is_agreement
    }

    onClosed(type?: string): void {
        this.closeCB && this.closeCB()
    }

    disAgreeCB() {
        if (FdAd.oppoPlatform) {
            Laya.Browser.window.qg.exitApplication()
        }
    }

    agreeCB() {
        localStorage.setItem('showPrivacy', "1")
        this.close()
    }
}