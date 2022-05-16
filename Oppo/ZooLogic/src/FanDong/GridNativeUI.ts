import FdAd from "./FdAd"
import FdMgr from "./FdMgr"
import { NativeAdEntity } from "./NativeAd"

export default class GridNativeUI extends Laya.Scene {
    constructor() {
        super()
    }
    root: Laya.Image
    pic: Laya.Image
    closeBtn: Laya.Image

    adData: any = null

    ccb: Function = null
    hadClick: boolean = false

    onOpened(param: any): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)

        this.root.right = FdMgr.jsonConfig.pos_iconNativeAd[0]
        this.root.bottom = FdMgr.jsonConfig.pos_iconNativeAd[1]
        let s = FdMgr.jsonConfig.icon_nativeScale
        this.root.scale(s, s)

        if (param && param.ccb) this.ccb = param.ccb
        this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnCB)

        this.initNative()
        Laya.timer.loop(FdMgr.jsonConfig.account_refIconNativeAd * 1000, this, () => {
            FdAd.shareNativeAd.hideAd(this.adData.adId)
            this.initNative()
        })
    }

    onClosed(type?: string): void {
        Laya.timer.clearAll(this)
        FdAd.shareNativeAd.hideAd(this.adData.adId)

        if (this.hadClick) {
            Laya.timer.once(100, this, () => {
                FdMgr.showGridNativeUI()
            })
        }

        this.ccb && this.ccb()
    }

    async initNative() {
        this.hadClick = false
        this.adData = (await FdAd.shareNativeAd.showAd()).adInfo
        if (!this.adData) { this.close(); return }
        this.pic.skin = this.adData.imgUrlList[0] ? this.adData.imgUrlList[0] : this.adData.iconUrlList[0]
        this.pic.off(Laya.Event.CLICK, this, this.adBtnCB)
        this.pic.on(Laya.Event.CLICK, this, this.adBtnCB)
        if (FdMgr.jsonConfig.is_touchMoveNativeAd && FdMgr.isAccountLateTime && !FdMgr.nativeMissTouched) {
            this.pic.off(Laya.Event.MOUSE_MOVE, this, this.adBtnCB)
            this.pic.on(Laya.Event.MOUSE_MOVE, this, this.adBtnCB, [true])
        }
    }

    adBtnCB(isMissTouch: boolean = false) {
        if (this.hadClick) return
        this.hadClick = true
        FdAd.shareNativeAd.clickAd(this.adData.adId)
        if (isMissTouch) FdMgr.setNativeMissTouched()
        this.close()
    }

    closeBtnCB() {
        if (FdMgr.jsonConfig.is_topNativeAdCloseBtnLate && FdMgr.isAccountLateTime && !FdMgr.nativeMissTouched) {
            this.adBtnCB(true)
        } else {
            this.close()
        }
    }
}