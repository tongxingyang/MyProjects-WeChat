
import { _decorator, Component, Node, tween, v3, ProgressBar } from 'cc';
import { WECHAT } from 'cc/env';
import SGAD from './SGAD';
import SGConfig from './SGConfig';
import { SGNode } from './SGNode';
import SGUtils from './SGUtils';
const { ccclass, property } = _decorator;

@ccclass('SGBoxBottom')
export class SGBoxBottom extends Component {
    @property(Node)
    btnClick: Node = null
    @property(Node)
    box: Node = null
    @property(ProgressBar)
    pBar: ProgressBar = null

    ccb: Function;
    clickCount: number = 0;
    triggerNum: number = 0.7
    index: number = 0
    type: number = 1
    wuchuCount: number = 1

    hadShowBanner: boolean = false
    onShowCB: Function = null

    onDisable() {
        if (WECHAT) {
            window['wx'].offShow(this.onShowCB)
        }
        this.unscheduleAllCallbacks()
        SGAD.hideBannerAd();
        SGAD.visibleFirstBoxGridAd(false)
        SGAD.visibleSecondBoxGridAd(false)
        SGNode.Share.scheduleOnce(() => {
            this.ccb && this.ccb()
        }, 0.1)
        SGNode.Share.scheduleOnce(() => {
            SGAD.visibleFirstBoxGridAd(false)
            SGAD.visibleSecondBoxGridAd(false)
        }, 1)
    }

    showUI(index: number, ccb?: Function) {
        this.node.active = true
        this.ccb = ccb;
        this.index = index;
        switch (this.index) {
            case 0:
                this.type = SGConfig.data.front_box_dangezi_number
                this.wuchuCount = SGConfig.data.front_box_dangezi_times
                break
            case 1:
                this.type = SGConfig.data.front_box_second_number
                this.wuchuCount = SGConfig.data.front_box_second_times
                break
        }
        this.triggerNum = SGUtils.getRangeNumer(0.2, 0.6);
        this.clickCount = 0;
        this.hadShowBanner = false
        SGAD.hideBannerAd();

        this.btnClick.off(Node.EventType.TOUCH_START)
        this.btnClick.off(Node.EventType.TOUCH_END)
        this.btnClick.on(Node.EventType.TOUCH_START, () => {
            this.onPress()
            this.btnClick.setScale(1.1, 1.1)
        }, this)
        this.btnClick.on(Node.EventType.TOUCH_END, () => { this.btnClick.setScale(1, 1) }, this)
        this.schedule(this.reFreshUI)

        if (SGConfig.isPortrait) {
            //this.pBar.centerY = 300
        }

        this.onShowCB = () => {
            this.close()
        }
        if (WECHAT) {
            window['wx'].onShow(this.onShowCB)
        }
    }

    onPress() {
        this.pBar.progress += 0.15;
        tween(this.box).to(0.1, { scale: v3(1.1, 1.1) }).call(() => {
            tween(this.box).to(0.1, { scale: v3(1, 1) }).start()
        }).start()

        if (this.pBar.progress >= this.triggerNum && !this.hadShowBanner) { //触发误触
            this.hadShowBanner = true
            this.clickCount++
            this.triggerNum = SGUtils.getRangeNumer(0.2, 0.6);
            if (this.type == 1) {
                this.index == 0 ? SGAD.visibleFirstBoxGridAd(true) : SGAD.visibleSecondBoxGridAd(true)
            } else if (this.type == 2) {
                SGAD.showBannerAd()
            }

            this.scheduleOnce(() => {
                if (this.clickCount >= this.wuchuCount) {
                    this.close();
                }
                else {
                    this.hadShowBanner = false
                    this.pBar.progress = 0
                    if (this.type == 1) {
                        SGAD.visibleFirstBoxGridAd(false)
                        SGAD.visibleSecondBoxGridAd(false)
                    } else if (this.type == 2) {
                        SGAD.hideBannerAd()
                    }
                }
            }, 2)
        }
    }

    reFreshUI() {
        this.pBar.progress -= 0.0125;
        if (this.pBar.progress < 0) this.pBar.progress = 0
    }

    close() {
        this.node.active = false
    }
}