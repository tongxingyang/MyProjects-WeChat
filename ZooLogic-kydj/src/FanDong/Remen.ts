import FdAd from "./FdAd";
import FdMgr from "./FdMgr";

export default class Remen extends Laya.Scene {
    constructor() {
        super()
    }
    btnContinue: Laya.Button

    ccb: Function = null;
    onShowCB: Function = null
    clickCount: number = 0

    onAwake(): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
    }
    onOpened(param?: any) {
        if (param && param.ccb) this.ccb = param.ccb
        this.btnContinue.on(Laya.Event.CLICK, this, this.btnContinueCB)
        FdAd.visibleFullGridAd()
        if (FdMgr.remenBanner && FdMgr.gameCount >= FdMgr.jsonConfig.delay_play_countBanner)
            this.bannerShowHide();
        FdAd.bannerIndex = 0;

        this.onShowCB = () => {
            this.close()
        }
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].onShow(this.onShowCB)
        }
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
        Laya.timer.once(1000, this, () => {
            FdAd.showBannerAd();
            Laya.timer.once(800, this, () => {
                this.bannerShowHide();
            });
        });
    }

    btnContinueCB() {
        this.clickCount++
        if (this.clickCount >= FdMgr.jsonConfig.remenBanner_count) {
            this.close()
        }
    }
}
