import { _decorator, Component, Node, Widget } from 'cc';
import FdAd from './FdAd';
import FdMgr from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('BackToHome')
export class BackToHome extends Component {

    @property(Node)
    backBtn: Node = null
    ccb: Function = null

    onDisable() {
        this.unscheduleAllCallbacks()
        FdAd.hideBannerAd();
        this.ccb && this.ccb()
    }

    showUI(ccb?: Function) {
        this.node.active = true
        FdAd.hideBannerAd();
        this.ccb = ccb
        if (FdMgr.endBanner) {
            this.bannerShowHide()
            if (this.backBtn)
                this.backBtn.getComponent(Widget).bottom = 20
        } else {
            if (this.backBtn)
                this.backBtn.getComponent(Widget).bottom = 300
            FdAd.showBannerAd()
        }
    }

    moreBtnCB() {
        FdAd.showBoxAd()
    }

    backBtnCB() {
        this.node.active = false
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

    update(deltaTime: number) {

    }
}

