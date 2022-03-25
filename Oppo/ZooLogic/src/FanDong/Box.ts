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

    onAwake() {
        this.size(Laya.stage.width, Laya.stage.height); //屏幕适配
    }

    onOpened(data) {
        if (data && data.closeCB) {
            this.closeCB = data.closeCB;
        }
        this.btnPress.on(Laya.Event.CLICK, this, this.onPress)
        Laya.timer.frameLoop(1, this, this.reFreshUI);
    }

    onClosed() {
        Laya.timer.clearAll(this)
        this.closeCB && this.closeCB();
    }

    public onPress() {
        this.progressValue += FdMgr.wuchuProgressStepAdd;
        Laya.Tween.to(this.btnPress, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.btnPress, { scaleX: 1, scaleY: 1 }, 100, null)
        }))

        if (this.progressValue >= FdMgr.wuchuProgressValue && !this.hadShowBanner) { //触发误触
            this.hadShowBanner = true

            Laya.timer.once(2000, this, () => {
                this.close();
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