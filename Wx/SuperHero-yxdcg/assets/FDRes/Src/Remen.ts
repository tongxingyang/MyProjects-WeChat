
import { _decorator, Component, Node } from 'cc';
import { WECHAT } from 'cc/env';
import FdAd from './FdAd';
import FdMgr, { RemenType } from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('Remen')
export class Remen extends Component {

    ccb: Function = null

    onShowCB: Function = null
    clickCount: number = 0

    type: RemenType = RemenType.Remen_Loading

    onDisable() {
        if (WECHAT) {
            window['wx'].offShow(this.onShowCB)
        }
        this.unscheduleAllCallbacks()
        FdAd.hideBannerAd()
        FdAd.visibleFullGridAd(false)
        FdMgr.visibleVideoBanner(false)
        FdAd.visibleBottomGridAd(false)
        this.ccb && this.ccb()
    }

    showUI(ccb?: Function, type: RemenType = RemenType.Remen_Loading) {
        this.type = type
        this.ccb = ccb
        this.clickCount = 0
        this.onShowCB = () => {
            this.node.active = false
        }
        if (WECHAT) {
            window['wx'].onShow(this.onShowCB)
        }
        this.node.active = true
        FdAd.visibleFullGridAd()

        if (type == RemenType.Remen_Loading && FdMgr.remenBanner) {
            this.bannerShowHide();
        } else if (type == RemenType.Remen_Start && FdMgr.startRemen_late) {
            this.bannerVideoShowHide();
        } else if (type == RemenType.Remen_End && FdMgr.endRemen_late) {
            this.gridShowHide();
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
        }, 1)
    }
    bannerVideoShowHide() {
        FdMgr.visibleVideoBanner(false)
        this.scheduleOnce(() => {
            FdMgr.visibleVideoBanner(true, false)
            this.scheduleOnce(() => {
                this.bannerVideoShowHide();
            }, 0.8)
        }, 1)
    }
    gridShowHide() {
        FdAd.visibleBottomGridAd(false);
        this.scheduleOnce(() => {
            FdAd.visibleBottomGridAd();
            this.scheduleOnce(() => {
                this.gridShowHide();
            }, 0.8)
        }, 1)
    }

    continueBtnCB() {
        this.clickCount++
        if (this.clickCount >= FdMgr.jsonConfig.remenBanner_count) {
            this.node.active = false
        }
    }
}