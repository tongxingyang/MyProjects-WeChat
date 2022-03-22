
import { _decorator, Component, Node } from 'cc';
import { WECHAT } from 'cc/env';
import FdAd from './FdAd';
import FdMgr from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('Remen')
export class Remen extends Component {

    ccb: Function = null

    onShowCB: Function = null
    clickCount: number = 0

    onDisable() {
        if (WECHAT) {
            window['wx'].offShow(this.onShowCB)
        }
        this.unscheduleAllCallbacks()
        FdAd.hideBannerAd()
        FdAd.visibleFullGridAd(false)
        this.ccb && this.ccb()
    }

    showUI(ccb?: Function) {
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
            this.node.active = false
        }
    }
}