import SGAD from "./SGAD";
import SGConfig from "./SGConfig";
import SGUtils from "./SGUtils";

export default class SGBoxMiddle extends Laya.Scene {

    box: Laya.Image
    finger: Laya.Image
    clickCount: number = 0;
    triggerNum: number = 0.7
    curProgress: number = 0
    hadShowBanner: boolean = false

    ccb: Function
    onShowCB: Function

    onAwake() {
        this.size(Laya.stage.width, Laya.stage.height); //屏幕适配
    }

    onOpened(param) {
        if (param && param.ccb) {
            this.ccb = param.ccb;
        }
        //SGUtils.addClickEvent(this.box, this, this.boxBtnCB)
        this.box.on(Laya.Event.MOUSE_DOWN, this, () => {
            this.boxBtnCB()
            this.box.scale(1.1, 1.1)
        })
        this.box.on(Laya.Event.MOUSE_UP, this, () => {
            this.box.scale(1, 1)
        })
        this.triggerNum = SGUtils.getRangeNumer(0.2, 0.6);
        Laya.timer.frameLoop(1, this, this.reFreshUI);

        SGAD.showBannerAd()
        this.onShowCB = () => {
            this.close()
        }
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].onShow(this.onShowCB)
        }
        this.scaleLoop(this.finger, 1.2, 200)
    }

    onClosed() {
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].offShow(this.onShowCB)
        }
        Laya.timer.clearAll(this)
        SGAD.hideBannerAd();
        SGAD.visibleMidBoxGridAd(false)
        Laya.timer.once(100, this, () => {
            this.ccb && this.ccb()
        })
        Laya.timer.once(1000, this, () => {
            SGAD.visibleMidBoxGridAd(false)
        })
    }

    boxBtnCB() {
        this.curProgress += 0.15;

        if (this.curProgress >= this.triggerNum && !this.hadShowBanner) { //触发误触
            this.hadShowBanner = true
            this.clickCount++
            this.triggerNum = SGUtils.getRangeNumer(0.2, 0.6);
            SGAD.visibleMidBoxGridAd(true)

            Laya.timer.once(2000, this, () => {
                if (this.clickCount >= SGConfig.data.front_box_before_times) {
                    this.close();
                }
                else {
                    SGAD.visibleMidBoxGridAd(false)
                    this.hadShowBanner = false
                    this.curProgress = 0
                }
            });
        }
    }

    reFreshUI() {
        this.curProgress -= 0.0115;
        if (this.curProgress < 0) this.curProgress = 0
    }


    scaleLoop(node, rate, t) {
        var tw = Laya.Tween.to(node, { scaleX: rate, scaleY: rate }, t, null, new Laya.Handler(this, () => {
            Laya.Tween.to(node, { scaleX: 1, scaleY: 1 }, t, null, new Laya.Handler(this, () => {
                this.scaleLoop(node, rate, t)
            }))
        }))
    }
}