
import { _decorator, Component, Node } from 'cc';
import { WECHAT } from 'cc/env';
import FdAd from './FdAd';
import FdMgr, { RemenType } from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('Remen')
export class Remen extends Component {

    @property(Node)
    adPic: Node = null

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

    showUI(ccb?: Function, showAdPic: boolean = false) {
        this.ccb = ccb
        this.clickCount = 0
        this.onShowCB = () => {
            this.node.active = false
        }
        if (WECHAT) {
            window['wx'].onShow(this.onShowCB)
        }
        this.node.active = true
        if (showAdPic)
            this.adPic.active = true
        else {
            this.adPic.active = false
            if (!FdAd.getIsFullGridAdError())
                FdAd.visibleFullGridAd()
            else if (FdMgr.canTrapAll && FdAd.getIsFullGridAdError()) {
                this.adPic.active = true
            }
        }

        this.adPic.active = false
        if (FdMgr.remenBanner) {
            this.bannerShowHide();
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