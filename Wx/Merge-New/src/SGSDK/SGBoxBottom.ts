import SGAD from "./SGAD";
import SGMgr, { BoxType } from "./SGMgr";

/**误触页1 */
export default class SGBoxBottom extends Laya.Scene {
    /**关闭回调 */
    ccb: Function;
    /**当前值 */
    progressValue: number = 0;
    /**触发次数 */
    clickCount: number = 1;

    /**误触按钮 */
    btnClick: Laya.Image;

    pressBar: Laya.ProgressBar;
    light: Laya.Image;
    imgSushi: Laya.Image;
    hadShowBanner: boolean = false
    onShowCB: Function = null

    onAwake() {
        this.size(Laya.stage.width, Laya.stage.height); //屏幕适配
    }

    onOpened(data) {
        if (data && data.ccb) {
            this.ccb = data.ccb;
        }
        SGAD.hideBannerAd();
        this.btnClick.on(Laya.Event.CLICK, this, this.onPress)
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
        SGAD.hideBannerAd();
        Laya.timer.clearAll(this)
        SGMgr.visibleVideoBanner(false, false)
        Laya.timer.once(100, this, () => {
            this.ccb && this.ccb()
        })
    }

    public onPress() {
        this.progressValue += SGMgr.wuchuProgressStepAdd;

        if (this.progressValue >= SGMgr.wuchuProgressValue && !this.hadShowBanner) { //触发误触
            this.hadShowBanner = true
            this.clickCount++
            SGMgr.randTouchProgress(); //更新目标值

            Laya.timer.once(1000, this, () => {
                if (this.clickCount >= SGMgr.jsonConfig.bannerBox_count) {
                    this.close();
                }
                else {

                    this.hadShowBanner = false
                    this.pressBar.value = 0
                    this.progressValue = 0
                }
            });
        }

        this.pressBar.value = this.progressValue;

    }

    public reFreshUI() {
        if (this.progressValue > SGMgr.wuchuProgressFrameSub) {
            this.progressValue -= SGMgr.wuchuProgressFrameSub;
        }
        this.pressBar.value = this.progressValue;
        this.light.rotation += 1;
    }
}