import SGAD from "./SGAD";
import SGConfig from "./SGConfig";
import SGMgr from "./SGMgr";
import SGUtils from "./SGUtils";

/**误触页1 */
export default class SGBoxBottom extends Laya.Scene {
    ccb: Function;
    clickCount: number = 1;
    btnClick: Laya.Image;
    box: Laya.Image;
    triggerNum: number = 0.7
    index: number = 0
    type: number = 1
    wuchuCount: number = 1

    pBar: Laya.ProgressBar;
    hadShowBanner: boolean = false
    onShowCB: Function = null

    onAwake() {
        this.size(Laya.stage.width, Laya.stage.height); //屏幕适配
    }

    onOpened(param) {
        if (param && param.ccb) {
            this.ccb = param.ccb;
        }
        if (param && param.index) {
            this.index = param.index;
        }
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
        this.triggerNum = SGUtils.getRangeNumer(0.3, 0.8);
        SGAD.hideBannerAd();
        SGUtils.addClickEvent(this.btnClick, this, this.onPress)
        Laya.timer.frameLoop(1, this, this.reFreshUI);

        if (SGConfig.isPortrait) {
            this.pBar.centerY = 300
        }

        this.onShowCB = () => {
            this.close()
        }
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].onShow(this.onShowCB)
        }
    }

    onClosed() {
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].offShow(this.onShowCB)
        }
        Laya.timer.clearAll(this)
        SGAD.hideBannerAd();
        SGAD.visibleFirstBoxGridAd(false)
        Laya.timer.once(100, this, () => {
            this.ccb && this.ccb()
        })
    }

    public onPress() {
        this.pBar.value += 0.2;
        Laya.Tween.to(this.box, { scaleX: 1.1, scaleY: 1.1 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.box, { scaleX: 1, scaleY: 1 }, 100);
        }));

        if (this.pBar.value >= this.triggerNum && !this.hadShowBanner) { //触发误触
            this.hadShowBanner = true
            this.clickCount++
            this.triggerNum = SGUtils.getRangeNumer(0.3, 0.8);
            if (this.type == 1) {
                SGAD.visibleFirstBoxGridAd(true)
            } else if (this.type == 2) {
                SGAD.showBannerAd()
            }

            Laya.timer.once(1000, this, () => {
                if (this.clickCount >= this.wuchuCount) {
                    this.close();
                }
                else {
                    this.hadShowBanner = false
                    this.pBar.value = 0
                    if (this.type == 1) {
                        SGAD.visibleFirstBoxGridAd(false)
                    } else if (this.type == 2) {
                        SGAD.hideBannerAd()
                    }
                }
            });
        }
    }

    public reFreshUI() {
        this.pBar.value -= 0.01;
    }
}