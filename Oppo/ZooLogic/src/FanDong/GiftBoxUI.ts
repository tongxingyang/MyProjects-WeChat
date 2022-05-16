import FdMgr, { GiftType } from "./FdMgr"
import FDUtils from "./FDUtils"
import FdAd from "./FdAd"

export default class GiftBoxUI extends Laya.Scene {
    constructor() {
        super()
    }

    light: Laya.Image
    titleNode: Laya.Image
    iconNode: Laya.Image
    btnNode: Laya.Image
    openBtn: Laya.Image
    adBtn: Laya.Image
    closeBtn: Laya.Image
    root: Laya.Image
    pic: Laya.Image
    desc: Laya.Label
    closeNativeBtn: Laya.Image

    ccb: Function = null
    adData: any = null
    hadClick: boolean = false
    hadWuchu: boolean = false
    giftType: number = 0
    fromId: number = 0
    gameUIIndex: number = 0

    onShowCB: Function = null

    onOpened(param: any) {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        this.rotateLoop()
        if (param && param.ccb) this.ccb = param.ccb
        if (param && param.giftType) this.giftType = param.giftType
        if (param && param.fromId) this.fromId = param.fromId
        if (param && param.gameUIIndex) this.gameUIIndex = param.gameUIIndex

        for (let i = 0; i < this.titleNode.numChildren; i++) {
            (this.titleNode.getChildAt(i) as Laya.Sprite).visible = i == this.giftType;
            (this.iconNode.getChildAt(i) as Laya.Sprite).visible = i == this.giftType;
        }

        FDUtils.addClickEvent(this.openBtn, this, this.openBtnCB)
        FDUtils.addClickEvent(this.adBtn, this, this.adBtnCB)
        FDUtils.addClickEvent(this.closeBtn, this, this.closeBtnCB)
        FDUtils.addClickEvent(this.closeNativeBtn, this, this.closeNativeBtnCB)

        this.initNative()

        this.onShowCB = () => {
            if (this.hadClick) {
                this.initNative()
            }
        }
        if (FdAd.oppoPlatform) Laya.Browser.window['qg'].onShow(this.onShowCB)

        if (FdMgr.jsonConfig.ADplacement == 1) {
            this.root.centerY = 50
            this.btnNode.bottom = 320
        }
    }

    onClosed() {
        if (FdAd.oppoPlatform && this.onShowCB) Laya.Browser.window['qg'].offShow(this.onShowCB)
        Laya.timer.clearAll(this)
        FdAd.shareNativeAd.hideAd(this.adData.adId)
        this.ccb && this.ccb()
    }

    rotateLoop() {
        this.light.rotation = 0
        Laya.Tween.to(this.light, { rotation: 360 }, 3000, null, new Laya.Handler(this, () => {
            this.rotateLoop()
        }))
    }

    openBtnCB() {
        FdAd.showVideo(null, null)
    }

    closeBtnCB() {
        if (this.fromId == 0) {
            if (FdMgr.jsonConfig.Reward_interface_delayed) {
                if ((this.hadWuchu && FdMgr.jsonConfig.Touchnative) || !this.hadWuchu) {
                    this.adBtnCB(true)
                }
            }
        } else if (this.fromId == 1) {
            if (FdMgr.jsonConfig.Close_thepage[this.gameUIIndex]) {
                if ((this.hadWuchu && FdMgr.jsonConfig.Touchnative2[this.gameUIIndex]) || !this.hadWuchu) {
                    this.adBtnCB(true)
                }
            }
        } else if (this.fromId == 2) {
            if (FdMgr.jsonConfig.Reward_interface_delayed2) {
                if ((this.hadWuchu && FdMgr.jsonConfig.Touchnative3) || !this.hadWuchu) {
                    this.adBtnCB(true)
                }
            }
        }
        this.close()
    }

    async initNative() {
        this.hadClick = false
        this.adData = (await FdAd.shareNativeAd.showAd()).adInfo
        if (!this.adData) { this.root.visible = false; this.adBtn.visible = false; return }
        this.pic.skin = this.adData.imgUrlList[0] ? this.adData.imgUrlList[0] : this.adData.iconUrlList[0]
        this.desc.text = this.adData.desc
        this.pic.off(Laya.Event.CLICK, this, this.adBtnCB)
        this.pic.on(Laya.Event.CLICK, this, this.adBtnCB)
        if (FdMgr.jsonConfig.is_touchMoveNativeAd && FdMgr.isAccountLateTime && !FdMgr.nativeMissTouched) {
            this.pic.off(Laya.Event.MOUSE_MOVE, this, this.adBtnCB)
            this.pic.on(Laya.Event.MOUSE_MOVE, this, this.adBtnCB, [true])
        }
    }

    adBtnCB(isMissTouch: boolean = false) {
        if (this.hadClick || !this.adData) return
        this.hadClick = true
        FdAd.shareNativeAd.clickAd(this.adData.adId)
        if (isMissTouch) {
            if (!this.hadWuchu) this.hadWuchu = true
            FdMgr.setNativeMissTouched()
        }
    }

    closeNativeBtnCB() {
        if (FdMgr.jsonConfig.is_topNativeAdCloseBtnLate && FdMgr.isAccountLateTime && !FdMgr.nativeMissTouched) {
            this.adBtnCB(true)
        } else {
            this.close()
        }
    }
}