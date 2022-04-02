import FdAd from "./FdAd";
import FdMgr from "./FdMgr";

/**误触页1 */
export default class Box extends Laya.Scene {
    /**关闭回调 */
    closeCB: Function;
    /**当前值 */
    progressValue: number = 0;

    /**误触按钮 */
    btnPress: Laya.Button;
    /**手指 */
    imgFinger: Laya.Image;

    pressBar: Laya.ProgressBar;
    light: Laya.Image;
    imgSushi: Laya.Image;
    hadShowBanner: boolean = false

    missTouchProgressArr: number[] = []

    onShowCB: Function = null

    onAwake() {
        this.size(Laya.stage.width, Laya.stage.height); //屏幕适配
    }

    onOpened(param) {
        if (param && param.ccb) {
            this.closeCB = param.ccb;
        }
        this.btnPress.on(Laya.Event.CLICK, this, this.onPress)
        Laya.timer.frameLoop(1, this, this.reFreshUI);
        this.missTouchProgressArr = [].concat(FdMgr.jsonConfig.threshold_sceneLateProgress)
        for (let i = 0; i < this.missTouchProgressArr.length; i++) {
            this.missTouchProgressArr[i] /= 100
        }

        this.onShowCB = () => {
            this.close()
        }
        if (FdAd.oppoPlatform) Laya.Browser.window['qg'].onShow(this.onShowCB)
        
        FdAd.hideBanner()
        FdMgr.closeBannerNativeUI()
    }

    onClosed() {
        if (FdAd.oppoPlatform && this.onShowCB) Laya.Browser.window['qg'].offShow(this.onShowCB)
        Laya.timer.clearAll(this)
        if (FdMgr.jsonConfig.type_sceneLateShowAd == 0) {
            FdAd.hideBanner()
        } else if (FdMgr.jsonConfig.type_sceneLateShowAd == 1) {
            FdMgr.closeBannerNativeUI()
        }
        this.closeCB && this.closeCB();
    }

    public onPress() {
        this.progressValue += FdMgr.jsonConfig.add_sceneLateProgress / 100;
        Laya.Tween.to(this.btnPress, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.btnPress, { scaleX: 1, scaleY: 1 }, 100, null)
        }))

        if (this.progressValue >= this.missTouchProgressArr[0] && !this.hadShowBanner) { //触发误触
            this.missTouchProgressArr.shift()
            this.hadShowBanner = true
            if (FdMgr.isAccountLateTime) {
                if (FdMgr.jsonConfig.type_sceneLateShowAd == 0) {
                    FdAd.showBanner()
                } else if (FdMgr.jsonConfig.type_sceneLateShowAd == 1) {
                    FdMgr.showBannerNativeUI()
                }
            } else {
                this.close();
                return
            }

            Laya.timer.once(2000, this, () => {
                if (FdMgr.jsonConfig.type_sceneLateShowAd == 0) {
                    FdAd.hideBanner()
                } else if (FdMgr.jsonConfig.type_sceneLateShowAd == 1) {
                    FdMgr.closeBannerNativeUI()
                }
                this.hadShowBanner = false

                if (this.missTouchProgressArr.length <= 0) {
                    this.close()
                }
            });
        }

        Laya.Tween.to(this.imgSushi, { rotation: 30 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.imgSushi, { rotation: 0 }, 100);
        }));

        this.pressBar.value = this.progressValue;

    }

    public reFreshUI() {
        this.progressValue -= (FdMgr.jsonConfig.reduction_sceneLateProgress / 100) / 60;
        if (this.progressValue < 0) this.progressValue = 0
        this.pressBar.value = this.progressValue;
        this.light.rotation += 1;
    }
}