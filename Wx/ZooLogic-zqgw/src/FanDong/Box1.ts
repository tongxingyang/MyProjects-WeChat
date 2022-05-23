import FdAd from "./FdAd";
import FdMgr, { BoxType } from "./FdMgr";

/**误触页1 */
export default class Box1 extends Laya.Scene {
    /**关闭回调 */
    ccb: Function;
    /**当前值 */
    progressValue: number = 0;
    /**触发次数 */
    clickCount: number = 1;

    /**误触按钮 */
    btnPress: Laya.Button;
    /**手指 */
    imgFinger: Laya.Image;

    pressBar: Laya.ProgressBar;
    light: Laya.Image;
    imgSushi: Laya.Image;
    hadShowBanner: boolean = false
    onShowCB: Function = null

    type: BoxType = BoxType.Box_Banner

    onAwake() {
        this.size(Laya.stage.width, Laya.stage.height); //屏幕适配
    }

    onOpened(data) {
        if (data && data.ccb) {
            this.ccb = data.ccb;
        }
        if (data && data.type) {
            this.type = data.type;
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
        FdMgr.visibleVideoBanner(false, false)
        Laya.timer.once(100, this, () => {
            this.ccb && this.ccb()
        })
    }

    public onPress() {
        this.progressValue += FdMgr.wuchuProgressStepAdd;
        Laya.Tween.to(this.btnPress, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.btnPress, { scaleX: 1, scaleY: 1 }, 100, null)
        }))

        if (this.progressValue >= FdMgr.wuchuProgressValue && !this.hadShowBanner) { //触发误触
            this.hadShowBanner = true
            this.clickCount++
            if (this.type == BoxType.Box_Banner)
                FdAd.showBannerAd(false);
            else
                FdMgr.visibleVideoBanner(true, false)
            FdMgr.randTouchProgress(); //更新目标值

            Laya.timer.once(1000, this, () => {
                if (this.clickCount >= FdMgr.jsonConfig.bannerBox_count) {
                    this.close();
                }
                else {
                    if (this.type == BoxType.Box_Banner)
                        FdAd.hideBannerAd();
                    else
                        FdMgr.visibleVideoBanner(false, false)
                    this.hadShowBanner = false
                    this.pressBar.value = 0
                    this.progressValue = 0
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