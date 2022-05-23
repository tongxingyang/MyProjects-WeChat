export default class AdMgr {
    private static bannerId: string = '59dvae3hu7v2dl1554'
    private static videoId: string = '4fd5qe4ueb5fgmbohr'

    static sysInfo: any;
    static getSystemInfoSync() {
        if (!Laya.Browser.onTTMiniGame) return;
        if (!this.sysInfo) {
            this.sysInfo = window['tt'].getSystemInfoSync();
        }
        return this.sysInfo;
    }

    static initAd() {
        if (!Laya.Browser.onTTMiniGame) {
            return
        }
        this.createBanner()
        this.createVideoAd()
    }

    private static bannerAd: any = null
    private static createBanner() {
        let sysInfo = this.getSystemInfoSync();
        this.bannerAd = Laya.Browser.window['tt'].createBannerAd({
            adUnitId: this.bannerId,
            style: {
                top: sysInfo.screenHeight * 0.8,
                width: 300,
                left: sysInfo.screenWidth / 2 - 150
            },
            adIntervals: 30
        });
        this.bannerAd.onLoad(() => {
            console.log("Banner广告加载成功");
        });
        this.bannerAd.onError(err => {
            console.error("Banner广告加载失败", JSON.stringify(err));
        });
        this.bannerAd.onResize(size => {
            let realHeight = size.height;
            this.bannerAd.style.top = sysInfo.screenHeight - realHeight;
        });
    }
    static showBanner() {
        if (!Laya.Browser.onTTMiniGame && !this.bannerAd) {
            return
        }
        this.bannerAd.show()
    }
    static hideBanner() {
        if (!Laya.Browser.onTTMiniGame && !this.bannerAd) {
            return
        }
        this.bannerAd.hide()
    }

    private static videoAd: any;
    private static videoFinishCallback: Function;
    private static videoCancelCallback: Function;
    private static createVideoAd() {
        if (Laya.Browser.onWeiXin) {
            var self = this;
            var videoAd = this.videoAd;
            if (videoAd != null) {
                videoAd.offLoad(onLoadVideo);
                videoAd.offError(onErrorVideo);
                videoAd.offClose(onCloseVideo);
            }

            var videoAd = Laya.Browser.window['tt'].createRewardedVideoAd({ adUnitId: self.videoId });
            videoAd.onLoad(onLoadVideo);
            videoAd.onError(onErrorVideo);
            videoAd.onClose(onCloseVideo);
            this.videoAd = videoAd;
        }

        function onLoadVideo() {
            console.log('video 加载成功');
        }

        function onErrorVideo(err) {
            console.error('video 加载错误', err);
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

        let self = this
        this.videoFinishCallback = finishCB;
        this.videoCancelCallback = cancelCB;
        if (Laya.Browser.onWeiXin) {
            var videoAd = this.videoAd;
            videoAd.show().then(() => { }).catch(err => {
                videoAd.load().then(() => videoAd.show()).catch(err => {
                    self.videoCancelCallback && self.videoCancelCallback()
                    self.videoCancelCallback = null
                });
            });
        }
    }
}