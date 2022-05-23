export default class PrivacyUI extends Laya.Scene {
    constructor() {
        super()
    }
    disAgree: Laya.Image
    agree: Laya.Image
    scrollPanel: Laya.Panel
    closeCB: Function = null

    onOpened(param?: any): void {
        if (param && param.closeCB) {
            this.closeCB = param.closeCB
        }
        this.disAgree.on(Laya.Event.CLICK, this, this.disAgreeCB)
        this.agree.on(Laya.Event.CLICK, this, this.agreeCB)
        this.scrollPanel.vScrollBarSkin = ""
    }

    onClosed(type?: string): void {
        this.closeCB && this.closeCB()
    }

    disAgreeCB() {
        if (Laya.Browser.onWeiXin) {
            window['qq'].exitMiniProgram()
        }
    }

    agreeCB() {
        localStorage.setItem('showPrivacy', "1")
        this.close()
    }
}