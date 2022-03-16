import FdAd from "./FdAd";
import FdMgr from "./FdMgr";

/**误触页1 */
export default class Box1 extends Laya.Scene {
    /**关闭回调 */
    closeCB: Function;
    /**当前值 */
    progressValue: number = 0;
    /**触发次数 */
    wuchuCount: number = 1;

    /**误触按钮 */
    btnPress: Laya.Button;
    /**手指 */
    imgFinger: Laya.Image;

    pressBar: Laya.ProgressBar;
    light: Laya.Image;
    imgSushi: Laya.Image;
    hadShowBanner: boolean = false
    onShowCB: Function = null

    onAwake() {
        this.size(Laya.stage.width, Laya.stage.height); //屏幕适配
    }

    onOpened(data) {
        this.wuchuCount = FdMgr.jsonConfig.bannerBox_count
        if (data && data.closeCB) {
            this.closeCB = data.closeCB;
        }
        FdAd.hideBannerAd();
        this.btnPress.on(Laya.Event.CLICK, this, this.onPress)
        Laya.timer.frameLoop(1, this, this.reFreshUI);

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
        FdAd.hideBannerAd();
        Laya.timer.clearAll(this)
        this.closeCB && this.closeCB();
    }

    public onPress() {
        this.progressValue += FdMgr.wuchuProgressStepAdd;
        Laya.Tween.to(this.btnPress, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.btnPress, { scaleX: 1, scaleY: 1 }, 100, null)
        }))

        if (this.progressValue >= FdMgr.wuchuProgressValue && !this.hadShowBanner) { //触发误触
            FdAd.showBannerAd();
            this.hadShowBanner = true
            FdMgr.randTouchProgress(); //更新目标值

            Laya.timer.once(2000, this, () => {
                this.wuchuCount--;
                if (this.wuchuCount > 0) {
                    FdAd.hideBannerAd();
                    this.hadShowBanner = false
                }
                else {
                    this.close();
                }
            });
        }

        Laya.Tween.to(this.imgSushi, { rotation: 30 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.imgSushi, { rotation: 0 }, 100);
        }));

        this.pressBar.value = this.progressValue;

    }

    public reFreshUI() {
        if (this.progressValue > FdMgr.wuchuProgressFrameSub) {
            this.progressValue -= FdMgr.wuchuProgressFrameSub;
        }
        this.pressBar.value = this.progressValue;
        this.light.rotation += 1;
    }
}