
import { _decorator, Component, Node, ProgressBar, Animation } from 'cc';
import { WECHAT } from 'cc/env';
import FdAd from './FdAd';
import FdMgr, { BoxType } from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('GridBox')
export class GridBox extends Component {

    @property(Node)
    box: Node = null
    @property(ProgressBar)
    pBar: ProgressBar = null

    hadShowBanner: boolean = false
    onShowCB: Function = null
    ccb: Function = null
    progressValue: number = 0;

    onDisable() {
        if (WECHAT) {
            window['wx'].offShow(this.onShowCB)
        }
        this.unscheduleAllCallbacks()
        FdAd.hideBannerAd();
        FdAd.visibleFullGridAd(false)
        this.ccb && this.ccb()
    }

    showUI(ccb?: Function) {
        this.node.active = true
        this.pBar.progress = 0
        this.progressValue = 0
        this.hadShowBanner = false
        this.ccb = ccb
        this.onShowCB = () => {
            this.node.active = false
        }
        if (WECHAT) {
            window['wx'].onShow(this.onShowCB)
        }
        FdAd.showBannerAd();
        FdAd.visibleFullGridAd(false)
    }

    clickBtnCB() {
        this.progressValue += FdMgr.wuchuProgressStepAdd;
        this.box.getComponent(Animation).play()
        if (this.progressValue >= FdMgr.wuchuProgressValue && !this.hadShowBanner) { //触发误触
            this.hadShowBanner = true
            FdMgr.randTouchProgress(); //更新目标值
            FdAd.visibleFullGridAd(true)
            this.scheduleOnce(() => {
                this.hadShowBanner = false
                this.pBar.progress = 0
                this.progressValue = 0
                this.node.active = false
            }, 1)
        }
    }

    update(deltaTime: number) {
        if (this.progressValue > FdMgr.wuchuProgressFrameSub) {
            this.progressValue -= FdMgr.wuchuProgressFrameSub;
        }
        this.pBar.progress = this.progressValue;
    }
}
