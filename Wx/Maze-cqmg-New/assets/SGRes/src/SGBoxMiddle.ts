
import { _decorator, Component, Node, tween, v3 } from 'cc';
import { WECHAT } from 'cc/env';
import SGAD from './SGAD';
import SGConfig from './SGConfig';
import { SGNode } from './SGNode';
import SGUtils from './SGUtils';
const { ccclass, property } = _decorator;

@ccclass('SGBoxMiddle')
export class SGBoxMiddle extends Component {
    @property(Node)
    box: Node = null
    clickCount: number = 0;
    triggerNum: number = 0.7
    curProgress: number = 0
    hadShowBanner: boolean = false

    ccb: Function
    onShowCB: Function

    onDisable() {
        if (WECHAT) {
            window['wx'].offShow(this.onShowCB)
        }
        this.unscheduleAllCallbacks()
        SGAD.hideBannerAd();
        SGAD.visibleMidBoxGridAd(false)
        SGNode.Share.scheduleOnce(() => {
            this.ccb && this.ccb()
        }, 0.1)
        SGNode.Share.scheduleOnce(() => {
            SGAD.visibleMidBoxGridAd(false)
        }, 1)
    }

    showUI(ccb?: Function) {
        this.node.active = true
        this.ccb = ccb;
        this.box.off(Node.EventType.TOUCH_START)
        this.box.off(Node.EventType.TOUCH_END)
        this.box.on(Node.EventType.TOUCH_START, () => {
            this.boxBtnCB()
            this.box.setScale(1.1, 1.1)
        }, this)
        this.box.on(Node.EventType.TOUCH_END, () => { this.box.setScale(1, 1) }, this)
        this.triggerNum = SGUtils.getRangeNumer(0.2, 0.6);
        this.clickCount = 0
        this.hadShowBanner = false
        this.curProgress = 0
        this.schedule(this.reFreshUI)

        SGAD.showBannerAd()
        this.onShowCB = () => {
            this.close()
        }
        if (WECHAT) {
            window['wx'].onShow(this.onShowCB)
        }
    }

    boxBtnCB() {
        this.curProgress += 0.15;

        if (this.curProgress >= this.triggerNum && !this.hadShowBanner) { //触发误触
            this.hadShowBanner = true
            this.clickCount++
            this.triggerNum = SGUtils.getRangeNumer(0.2, 0.6);
            SGAD.visibleMidBoxGridAd(true)

            this.scheduleOnce(() => {
                if (this.clickCount >= SGConfig.data.front_box_before_times) {
                    this.close();
                }
                else {
                    SGAD.visibleMidBoxGridAd(false)
                    this.hadShowBanner = false
                    this.curProgress = 0
                }
            }, 2)
        }
    }

    reFreshUI() {
        this.curProgress -= 0.0115;
        if (this.curProgress < 0) this.curProgress = 0
    }

    close() {
        this.node.active = false
    }
}