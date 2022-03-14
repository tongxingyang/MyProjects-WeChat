
import { _decorator, Component, Node } from 'cc';
import FdAd from './FdAd';
import FdMgr from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('Box2')
export class Box2 extends Component {

    ccb: Function = null
    progressValue: number = 0;
    hadShowBanner: boolean = false

    onDisable() {
        this.unscheduleAllCallbacks()
        this.ccb && this.ccb()
        FdAd.hideBannerAd()
        FdAd.visibleFullGridAd(false)
    }

    showUI(ccb?: Function) {
        this.ccb = ccb
        this.node.active = true
        this.hadShowBanner = false
        this.progressValue = 0

        FdAd.showBannerAd()
        FdAd.visibleFullGridAd(false)
    }

    clickBtnCB() {
        this.progressValue += FdMgr.wuchuProgressStepAdd;
        if (this.progressValue >= FdMgr.wuchuProgressValue && !this.hadShowBanner) { //触发误触
            this.hadShowBanner = true
            FdAd.visibleFullGridAd()
            FdMgr.randTouchProgress(); //更新目标值
            this.scheduleOnce(() => {
                this.node.active = false
            }, 2)
        }
    }

    update(deltaTime: number) {
        if (this.progressValue > FdMgr.wuchuProgressFrameSub) {
            this.progressValue -= FdMgr.wuchuProgressFrameSub;
        }
    }
}