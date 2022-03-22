import FdAd from "./FdAd"
import FdMgr from "./FdMgr";

export default class BackToHome extends Laya.Scene {
    constructor() {
        super()
    }
    closeCB: Function;
    moreBtn: Laya.Image
    backBtn: Laya.Image

    onOpened(data: any): void {
        if (data && data.closeCB) {
            this.closeCB = data.closeCB;
        }
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        this.moreBtn.on(Laya.Event.CLICK, this, this.moreBtnCB)
        this.backBtn.on(Laya.Event.CLICK, this, this.backBtnCB)
        FdAd.showBannerAd()
        if (FdMgr.returnhomeGridBox) {
            Laya.timer.once(500, this, () => {
                FdAd.showBoxAd()
            })
        }
    }

    onClosed(type?: string): void {
        FdAd.hideBannerAd();
        Laya.timer.clearAll(this)
        this.closeCB && this.closeCB();
    }

    moreBtnCB() {
        FdAd.showBoxAd()
    }

    backBtnCB() {
        if (FdMgr.finishVideo) {
            FdAd.showVideoAd(null, () => {
                this.close()
            })
        } else {
            this.close()
        }
    }
}