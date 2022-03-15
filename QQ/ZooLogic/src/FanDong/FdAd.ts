import FdMgr from "./FdMgr";

export default class FdAd {
    static bannerId: string = "2941986d98f60248441a089279d13222";
    static videoId = "356a3b6592244c24ef89c97c1d6c8369";
    static boxId = "80e5cee73829f643cd18cc6d56ff71f6";

    static inidAd() {
        if (!Laya.Browser.onWeiXin) return;
        this.createVideoAd();
        this.createBoxAd()
    }

    static sysInfo: any;
    static getSystemInfoSync() {
        if (!Laya.Browser.onWeiXin) return;
        if (!this.sysInfo) {
            this.sysInfo = window['wx'].getSystemInfoSync();
        }
        return this.sysInfo;
    }

    //#region Banner广告
    private static bannerAd: any = null;

    static showBannerAd() {
        if (!Laya.Browser.onWeiXin) return;

        if (this.bannerAd) {
            this.bannerAd.destroy()
            this.bannerAd = null
        }
        let sysInfo = this.getSystemInfoSync();
        this.bannerAd = Laya.Browser.window['wx'].createBannerAd({
            adUnitId: this.bannerId,
            style: {
                top: sysInfo.screenHeight * 0.8,
                width: sysInfo.screenWidth,
                left: 0
            },
            adIntervals: 30
        });
        this.bannerAd.onLoad(() => {
            this.bannerAd.show()
            console.log("Banner广告加载成功");
        });
        this.bannerAd.onError(err => {
            console.error("Banner广告加载失败", JSON.stringify(err));
        });
        this.bannerAd.onResize(res => {
            let realHeight = this.bannerAd.style.realHeight + 0.1;
            this.bannerAd.style.top = sysInfo.screenHeight - realHeight;
        });
    }

    static hideBannerAd() {
        if (!Laya.Browser.onWeiXin) {
            return;
        }
        if (this.bannerAd) {
            this.bannerAd.destroy()
            this.bannerAd = null
        }
    }
    //#endregion

    //#region 激励视频广告
    static videoAd: any;
    static videoFinishCallback: Function;
    static videoCancelCallback: Function;

    static isExistVideoAd: boolean = false;
    static createVideoAd() {
        if (Laya.Browser.onWeiXin) {
            var self = this;
            var videoAd = this.videoAd;
            if (videoAd != null) {
                videoAd.offLoad(onLoadVideo);
                videoAd.offError(onErrorVideo);
                videoAd.offClose(onCloseVideo);
            }

            var videoAd = Laya.Browser.window['wx'].createRewardedVideoAd({ adUnitId: self.videoId });
            videoAd.onLoad(onLoadVideo);
            videoAd.onError(onErrorVideo);
            videoAd.onClose(onCloseVideo);
            this.videoAd = videoAd;
        }

        function onLoadVideo() {
            console.log('video 加载成功');
            self.isExistVideoAd = true;
        }

        function onErrorVideo(err) {
            console.error('video 加载错误', err);
            self.isExistVideoAd = false;
        }

        function onCloseVideo(res) {
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            let isEnded = (res && res.isEnded || res === undefined) ? true : false;
            if (isEnded) {
                //观看视频成功次数埋点
                self.videoFinishCallback && self.videoFinishCallback()
                self.videoFinishCallback = null
            }
            self.videoCancelCallback && self.videoCancelCallback()
            self.videoCancelCallback = null
        }
    }

    static showVideoAd(finishCB?: Function, cancelCB?: Function) {
        if (!Laya.Browser.onWeiXin) {
            finishCB && finishCB();
            cancelCB && cancelCB();
            return;
        }

        if (!Laya.Browser.onWeiXin) return;
        let self = this
        this.videoFinishCallback = finishCB;
        this.videoCancelCallback = cancelCB;
        if (!this.isExistVideoAd) {
            this.createVideoAd()
        }
        if (Laya.Browser.onWeiXin) {
            var videoAd = this.videoAd;
            videoAd.show().then(() => { }).catch(err => {
                self.videoCancelCallback && self.videoCancelCallback()
                self.videoCancelCallback = null
            });
        }
    }

    static destroyVideoAd() {
        if (!this.videoAd) return;
        this.videoAd.destroy();
        this.videoAd = null;
    }
    //#endregion

    //盒子广告
    static boxAd: any = null
    static closeBoxAdCB: Function = null
    static createBoxAd() {
        if (!Laya.Browser.onWeiXin) return
        this.boxAd = window['qq'].createAppBox({
            adUnitId: this.boxId
        })
        this.boxAd.load()
        this.boxAd.onClose(() => {
            this.closeBoxAdCB && this.closeBoxAdCB()
            this.closeBoxAdCB = null
        })
    }
    static showBoxAd(cb?: Function) {
        if (!Laya.Browser.onWeiXin || !this.boxAd) return
        this.closeBoxAdCB = cb
        this.boxAd.show()
    }
    //盒子广告
}