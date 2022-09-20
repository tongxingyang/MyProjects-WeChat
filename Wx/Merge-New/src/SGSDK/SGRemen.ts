import SGAD from "./SGAD";
import SGMgr from "./SGMgr";

export default class SGRemen extends Laya.Scene {
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
            if (!SGAD.getIsFullGridAdError())
                SGAD.visibleFullGridAd()
            else if (SGMgr.canTrapAll && SGAD.getIsFullGridAdError()) {
                this.adPic.visible = true
            }
        }

        this.adPic.visible = false
        if (SGMgr.remenBanner) {
            this.bannerShowHide();
        }

        SGAD.bannerIndex = 0;
    }
    onClosed() {
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].offShow(this.onShowCB)
        }
        Laya.timer.clearAll(this)
        SGAD.hideBannerAd()
        SGAD.visibleFullGridAd(false);
        Laya.timer.once(100, this, () => {
            this.ccb && this.ccb()
        })
    }

    bannerShowHide() {
        SGAD.hideBannerAd();
        Laya.timer.once(600, this, () => {
            SGAD.showBannerAd();
            Laya.timer.once(800, this, () => {
                this.bannerShowHide();
            });
        });
    }

    videoBtn() {
        SGAD.showVideoAd()
    }

    btnContinueCB() {
        this.clickCount++
        if (this.clickCount >= SGMgr.jsonConfig.remenBanner_count) {
            this.close()
        }
    }
}
