import FdAd from "./FdAd";
import FdMgr from "./FdMgr";

export default class Remen extends Laya.Scene {
    constructor() {
        super()
    }
    btnContinue: Laya.Button
    adPic: Laya.Image

    ccb: Function = null;
    onShowCB: Function = null
    clickCount: number = 0

    onAwake(): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
    }
    onOpened(param?: any) {
        if (param && param.ccb) this.ccb = param.ccb
        this.btnContinue.on(Laya.Event.CLICK, this, this.btnContinueCB)
        this.adPic.on(Laya.Event.CLICK, this, this.videoBtn)

        this.onShowCB = () => {
            this.close()
        }
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].onShow(this.onShowCB)
        }

        if (param && param.showAdPic)
            this.adPic.visible = true
        else {
            this.adPic.visible = false
            if (!FdAd.getIsFullGridAdError())
                FdAd.visibleFullGridAd()
            else if (FdMgr.canTrapAll && FdAd.getIsFullGridAdError()) {
                this.adPic.visible = true
            }
        }

        this.adPic.visible = false
        if (FdMgr.remenBanner) {
            this.bannerShowHide();
        }

        FdAd.bannerIndex = 0;
    }
    onClosed() {
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].offShow(this.onShowCB)
        }
        Laya.timer.clearAll(this)
        FdAd.hideBannerAd()
        FdAd.visibleFullGridAd(false);
        Laya.timer.once(100, this, () => {
            this.ccb && this.ccb()
        })
    }

    bannerShowHide() {
        FdAd.hideBannerAd();
        Laya.timer.once(600, this, () => {
            FdAd.showBannerAd();
            Laya.timer.once(800, this, () => {
                this.bannerShowHide();
            });
        });
    }

    videoBtn() {
        FdAd.showVideoAd()
    }

    btnContinueCB() {
        this.clickCount++
        if (this.clickCount >= FdMgr.jsonConfig.remenBanner_count) {
            this.close()
        }
    }
}
