
import { _decorator, Component, Node } from 'cc';
import FdAd from './FdAd';
import FdMgr from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('Remen')
export class Remen extends Component {

    ccb: Function = null
    clickCount: number = 0

    showUI(ccb?: Function) {
        this.clickCount = 0
        this.ccb = ccb
        this.node.active = true
        FdAd.visibleFullGridAd()

        if (FdMgr.remenBanner && FdMgr.gameCount >= FdMgr.jsonConfig.delay_play_countBanner)
            this.bannerShowHide();
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

    continueBtnCB() {
        this.clickCount++
        if (this.clickCount >= FdMgr.jsonConfig.remenBanner_count) {
            this.unscheduleAllCallbacks()
            this.node.active = false
            FdAd.hideBannerAd()
            FdAd.visibleFullGridAd(false);
            this.ccb && this.ccb()
        }
    }
}