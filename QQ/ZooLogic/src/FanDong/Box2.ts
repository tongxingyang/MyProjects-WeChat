import FdAd from "./FdAd";
import FdMgr from "./FdMgr";

/**误触页1 */
export default class Box2 extends Laya.Scene {
    /**关闭回调 */
    closeCB: Function;
    /**当前值 */
    progressValue: number = 0;
    /**触发次数 */
    wuchuCount: number = 1;

    /**误触按钮 */
    btnPress: Laya.Box;
    /**手指 */
    imgFinger: Laya.Image;

    pressBar: Laya.ProgressBar;
    imgEffect: Laya.Image;

    imgGift: Laya.Image;

    light: Laya.Image;

    hadShowBox: boolean = false
    onShowCB: Function = null

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
        this.btnPress.on(Laya.Event.CLICK, this, this.onPress)
        Laya.timer.frameLoop(1, this, this.reFreshUI);

        this.tweenScale();
        FdAd.showBannerAd();
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
        Laya.Tween.clearAll(this.imgEffect);
        this.closeCB && this.closeCB();
    }

    public onPress() {
        this.progressValue += FdMgr.wuchuProgressStepAdd;
        Laya.Tween.to(this.imgGift, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.imgGift, { scaleX: 1, scaleY: 1 }, 100, null)
        }))

        if (this.progressValue >= FdMgr.wuchuProgressValue && !this.hadShowBox) { //触发误触
            this.hadShowBox = true
            Laya.Tween.clearAll(this.imgEffect);
            FdAd.showBoxAd()
            FdMgr.randTouchProgress(); //更新目标值

            Laya.timer.once(2000, this, () => {
                this.close();
            });
        }
    }

    public reFreshUI() {
        if (this.progressValue > FdMgr.wuchuProgressFrameSub) {
            this.progressValue -= FdMgr.wuchuProgressFrameSub;
        }
        this.light.rotation += 1;
    }


    tweenScale() {
        var t = 200;
        Laya.Tween.to(this.imgEffect, { scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, t);
        Laya.timer.once(t, this, () => {
            Laya.Tween.to(this.imgEffect, { scaleX: 1, scaleY: 1, alpha: 1 }, t);
            Laya.timer.once(t, this, this.tweenScale);
        });
    }
}