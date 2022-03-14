
import { _decorator, Component, Node } from 'cc';
import FdAd from './FdAd';
import FdMgr from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('Remen')
export class Remen extends Component {

    ccb: Function = null

    showUI(ccb?: Function) {
        this.ccb = ccb
        this.node.active = true
        if (!FdAd.showGridAD()) {
            FdAd.initGridAD(() => {
                FdAd.showGridAD();
            });
        }

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
        this.unscheduleAllCallbacks()
        this.node.active = false
        FdAd.hideBannerAd()
        FdAd.hideGridAD();
        this.ccb && this.ccb()
    }
}