import FdAd from "./FdAd"
import FdMgr from "./FdMgr"

export default class BannerNativeUI extends Laya.Scene {
    constructor() {
        super()
    }
    pic: Laya.Image
    desc: Laya.Label
    closeBtn: Laya.Image

    adData: any = null

    ccb: Function = null
    hadClick: boolean = false
    stayTime: number = 0

    onShowCB: Function = null

    onOpened(param: any): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        if (param && param.ccb) this.ccb = param.ccb
        this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnCB)

        Laya.timer.loop(100, this, () => { this.stayTime += 0.1 })

        this.adData = FdAd.showNativeAd()
        if (!this.adData) { this.close(); return }
        this.pic.skin = this.adData.imgUrlList
        this.desc.text = this.adData.desc
        if (FdMgr.jsonConfig.is_touchMoveNativeAd)
            this.pic.on(Laya.Event.MOUSE_MOVE, this, this.adBtnCB)

        this.onShowCB = () => {
            if (this.hadClick) this.closeBtnCB()
        }
        if (FdAd.oppoPlatform) Laya.Browser.window['qg'].onShow(this.onShowCB)
    }

    onClosed(type?: string): void {
        if (FdAd.oppoPlatform && this.onShowCB) Laya.Browser.window['qg'].offShow(this.onShowCB)
        Laya.timer.clearAll(this)

        if (this.hadClick) FdAd.destroyNativeAd()
        else if (this.stayTime >= FdMgr.jsonConfig.account_refNativeAd) FdAd.nextNativeIndex()

        this.ccb && this.ccb()
    }

    adBtnCB() {
        if (this.hadClick) return
        this.hadClick = true
        FdAd.reportAdClick(this.adData)
    }

    closeBtnCB() {
        this.close()
    }
}