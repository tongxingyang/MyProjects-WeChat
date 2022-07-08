import { BYTEDANCE } from "cc/env";
import PlatformApi from "../Mod/PlatformApi";

export default class TTAdMgr {
    private static bannerId: string = '12g7602fdh3fa1nn1p'
    private static videoId: string = 'e9balntq5m7s6d87b7'

    static sysInfo: any;
    static getSystemInfoSync() {
        if (!BYTEDANCE) return;
        if (!this.sysInfo) {
            this.sysInfo = window['tt'].getSystemInfoSync();
        }
        return this.sysInfo;
    }

    static initAd() {
        if (!BYTEDANCE) {
            return
        }
        this.createBanner()
        this.createVideoAd()
    }

    private static bannerAd: any = null
    private static createBanner() {
        let sysInfo = this.getSystemInfoSync();
        this.bannerAd = window['tt'].createBannerAd({
            adUnitId: this.bannerId,
            style: {
                top: sysInfo.screenHeight * 0.8,
                width: 170,
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
            let realWidth = size.width;
            this.bannerAd.style.top = sysInfo.screenHeight - realHeight;
            this.bannerAd.style.left = (sysInfo.screenWidth - realWidth) / 2;
        });
    }
    static showBanner() {
        if (!BYTEDANCE && !this.bannerAd) {
            return
        }
        this.bannerAd.show()
    }
    static hideBanner() {
        if (!BYTEDANCE && !this.bannerAd) {
            return
        }
        this.bannerAd.hide()
    }

    private static videoAd: any;
    private static videoFinishCallback: Function;
    private static videoCancelCallback: Function;
    private static createVideoAd() {
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
        if (BYTEDANCE) {
            var self = this;
            var videoAd = this.videoAd;
            if (videoAd != null) {
                videoAd.offLoad(onLoadVideo);
                videoAd.offError(onErrorVideo);
                videoAd.offClose(onCloseVideo);
            }

            var videoAd = window['tt'].createRewardedVideoAd({ adUnitId: self.videoId });
            videoAd.onLoad(onLoadVideo);
            videoAd.onError(onErrorVideo);
            videoAd.onClose(onCloseVideo);
            this.videoAd = videoAd;
        }
    }

    static showVideoAd(finishCB?: Function, cancelCB?: Function) {
        if (!BYTEDANCE) {
            finishCB && finishCB();
            cancelCB && cancelCB();
            return;
        }

        this.videoFinishCallback = finishCB;
        this.videoCancelCallback = cancelCB;
        if (BYTEDANCE) {
            var videoAd = this.videoAd;
            videoAd.show().then(() => { }).catch(err => {
                PlatformApi.OpenAlert('暂无广告')
                cancelCB && cancelCB();
            });
        }
    }
}

