import FdMgr from "./FdMgr";

export default class FdAd {
    static bannerId: string = "60858dd97449f62300f8a55646c910e5";
    static videoId = "5b665b2845f0bbd1e4a9c7ae73c56f84";
    static boxId = "abea106a0255ad5dc9d611f2bc07c56f";

    static inidAd() {
        if (!Laya.Browser.onWeiXin) return;
        this.createBannerAd()
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
    private static bannerAdArr: any[] = [];
    private static curIndex: number = 0

    private static createBannerAd() {
        if (!Laya.Browser.onWeiXin) return;
        for (let i = 0; i < 3; i++) {
            let bannerAd: any = this.getBannerAd()
            this.bannerAdArr.push(bannerAd)
        }
    }

    private static getBannerAd() {
        let sysInfo = this.getSystemInfoSync();
        let bannerAd = Laya.Browser.window['wx'].createBannerAd({
            adUnitId: this.bannerId,
            style: {
                top: sysInfo.screenHeight * 0.8,
                width: sysInfo.screenWidth,
                left: 0
            },
            adIntervals: 30
        });
        bannerAd.onLoad(() => {
            console.log("Banner广告加载成功");
        });
        bannerAd.onError(err => {
            console.error("Banner广告加载失败", JSON.stringify(err));
        });
        bannerAd.onResize(res => {
            let realHeight = bannerAd.style.realHeight + 0.1;
            bannerAd.style.top = sysInfo.screenHeight - realHeight;
        });
        bannerAd.show()
        bannerAd.hide()
        return bannerAd;
    }

    static showBannerAd() {
        if (!Laya.Browser.onWeiXin) return;
        this.bannerAdArr[this.curIndex].show()
        console.log('showbanner:', this.curIndex)
    }

    static hideBannerAd() {
        if (!Laya.Browser.onWeiXin) {
            return;
        }
        this.bannerAdArr[this.curIndex].destroy()
        this.bannerAdArr[this.curIndex] = this.getBannerAd()
        this.curIndex++
        if (this.curIndex >= this.bannerAdArr.length) this.curIndex = 0
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