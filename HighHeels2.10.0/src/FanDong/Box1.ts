import FdAd from "./FdAd";
import FdMgr from "./fdMgr";

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

    onAwake() {
        this.size(Laya.stage.width, Laya.stage.height); //屏幕适配
    }

    onOpened(data) {
        if (data && data.count) {
            this.wuchuCount = data.count;
        }
        if (data && data.closeCB) {
            this.closeCB = data.closeCB;
        }
        FdAd.hideBannerAd();
        this.btnPress.on(Laya.Event.CLICK, this, this.onPress)
        Laya.timer.frameLoop(1, this, this.reFreshUI);
    }

    onClosed() {
        FdAd.hideBannerAd();
        Laya.timer.clearAll(this)
        this.closeCB && this.closeCB();
    }

    public onPress() {
        this.progressValue += FdMgr.wuchuProgressStepAdd;
        Laya.Tween.to(this.btnPress, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.btnPress, { scaleX: 1, scaleY: 1 }, 100, null)
        }))

        if (this.progressValue >= FdMgr.wuchuProgressValue) { //触发误触
            FdAd.showBannerAd();
            FdMgr.randTouchProgress(); //更新目标值

            Laya.timer.once(2000, this, () => {
                this.wuchuCount--;
                if (this.wuchuCount > 0) {
                    FdAd.hideBannerAd();
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