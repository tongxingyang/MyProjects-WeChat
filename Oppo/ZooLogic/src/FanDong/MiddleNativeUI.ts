import FdAd from "./FdAd"
import FdMgr from "./FdMgr"
import FDUtils from "./FDUtils"

export default class MiddleNativeUI extends Laya.Scene {
    constructor() {
        super()
    }
    myPanel: Laya.Panel
    pic: Laya.Image
    desc: Laya.Label
    closeBtn: Laya.Image
    adBtn: Laya.Image

    adData: any = null

    ccb: Function = null
    hadClick: boolean = false
    stayTime: number = 0

    onShowCB: Function = null

    onOpened(param: any): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        if (param && param.ccb) this.ccb = param.ccb
        if (param && param.hidePanel) this.myPanel.visible = false
        this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnCB)
        this.adBtn.on(Laya.Event.CLICK, this, this.adBtnCB)

        Laya.timer.loop(100, this, () => { this.stayTime += 0.1 })

        this.adData = FdAd.showNativeAd()
        if (!this.adData) { this.close(); return }
        this.pic.skin = this.adData.imgUrlList[0] ? this.adData.imgUrlList[0] : this.adData.iconUrlList[0]
        this.desc.text = this.adData.desc
        if (FdMgr.jsonConfig.is_touchMoveNativeAd && FdMgr.isAccountLateTime)
            this.pic.on(Laya.Event.MOUSE_MOVE, this, this.adBtnCB)

        this.onShowCB = () => {
            if (this.hadClick) this.closeBtnCB()
        }
        if (FdAd.oppoPlatform) Laya.Browser.window['qg'].onShow(this.onShowCB)

        FdAd.hideBanner()
        FdMgr.closeBannerNativeUI()
    }

    onClosed(type?: string): void {
        if (FdAd.oppoPlatform && this.onShowCB) Laya.Browser.window['qg'].offShow(this.onShowCB)
        Laya.timer.clearAll(this)

        if (this.hadClick) FdAd.destroyNativeAd()
        else if (this.stayTime >= FdMgr.jsonConfig.account_refNativeAd) FdAd.nextNativeIndex()

        this.ccb && this.ccb()
    }

    adBtnCB(isMissTouch: boolean = false) {
        if (this.hadClick) return
        this.hadClick = true
        FdAd.reportAdClick(this.adData)
        if (isMissTouch) FdMgr.setNativeMissTouched()
    }

    closeBtnCB() {
        if (FdMgr.jsonConfig.is_topNativeAdCloseBtnLate && FdMgr.isAccountLateTime && !FdMgr.nativeMissTouched && !this.hadClick) {
            this.adBtnCB(true)
        } else {
            this.close()
        }
    }
}