
import { _decorator, Component, Node, v3 } from 'cc';
import { WECHAT } from 'cc/env';
import FdAd from './FdAd';
import FdMgr, { RemenType } from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('Remen')
export class Remen extends Component {

    ccb: Function = null

    btn: Node = null
    onShowCB: Function = null
    clickCount: number = 0
    showBannerCount: number = 0

    onDisable() {
        if (WECHAT) {
            window['wx'].offShow(this.onShowCB)
        }
        this.showBannerCount++
        this.unscheduleAllCallbacks()
        FdAd.hideBannerAd()
        FdAd.visibleFullGridAd(false)
        FdMgr.visibleGameBanner(true)
        this.ccb && this.ccb()
    }

    showUI(ccb?: Function, showAdPic: boolean = false) {
        FdMgr.visibleGameBanner(false)
        this.btn = this.node.getChildByName('btn')
        this.ccb = ccb
        this.clickCount = 0
        this.onShowCB = () => {
            this.node.active = false
        }
        if (WECHAT) {
            window['wx'].onShow(this.onShowCB)
        }
        this.node.active = true

        if (!FdAd.getIsFullGridAdError())
            FdAd.visibleFullGridAd()

        if (FdMgr.remenBanner && (this.showBannerCount % (FdMgr.jsonConfig.Remen_banner_count + 1) == 0)) {
            this.btn.position = v3(0, -270)
            this.bannerShowHide();
        } else {
            this.btn.position = v3(450, -270)
            FdAd.showBannerAd()
        }

        FdAd.bannerIndex = 0;
    }

    bannerShowHide() {
        FdAd.hideBannerAd();
        this.scheduleOnce(() => {
            FdAd.showBannerAd();
            this.scheduleOnce(() => {
                this.bannerShowHide();
            }, 0.8)
        }, 0.6)
    }

    videoBtn() {
        FdAd.showVideoAd()
    }

    continueBtnCB() {
        this.clickCount++
        if (this.clickCount >= FdMgr.jsonConfig.remenBanner_count) {
            this.node.active = false
        }
    }
}