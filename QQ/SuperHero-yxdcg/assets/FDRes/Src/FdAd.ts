import { WECHAT } from "cc/env";
import Utility from "../../Scripts/Mod/Utility";
import FdMgr from "./FdMgr";
import { FDNode } from "./FDNode";

export default class FdAd {
    static bannerIdArr: string[] = ["18608b1c3cb07dc1c726af692c47a950", "6c06360113215de177e74815436a2e11"];
    static videoId = "e14dc9fa4b3cf87dc1f7ca5f3313309f";
    static boxId = '8fb792dab44cd41032d0af4701903935'

    static inidAd() {
        if (!WECHAT) return;
        this.createBoxAd()
        this.initBanner();
        this.createVideoAd();
    }

    static sysInfo: any;
    static getSystemInfoSync() {
        if (!WECHAT) return;
        if (!this.sysInfo) {
            this.sysInfo = window['qq'].getSystemInfoSync();
        }
        return this.sysInfo;
    }

    //#region Banner广告
    static bannerAds: any[] = [];
    static bannerIndex: number = 0;
    static bannerTimesArr: number[] = []
    static bannerShowCount: number[] = []
    static bannerErrorArr: boolean[] = []
    static countBannerTimeSchedule: Function = null
    static initBanner() {
        if (!WECHAT) return;
        this.bannerIdArr = Utility.shuffleArr(this.bannerIdArr)
        console.log('bannerId 数组排列：', this.bannerIdArr)
        if (!FdMgr.canTrapAll && this.bannerAds.length > 1) {
            this.bannerAds.splice(0, this.bannerAds.length - 1)
        }
        for (let i = 0; i < this.bannerIdArr.length; i++) {
            this.bannerTimesArr.push(0)
            this.bannerShowCount.push(0)
            this.bannerErrorArr.push(false)
        }
        for (let i = 0; i < this.bannerIdArr.length; i++) {
            let bannerAd: any = this.createBannerAd(i)
            this.bannerAds.push(bannerAd)
        }
    }

    static get isAllBannerError(): boolean {
        let isAllError: boolean = true
        for (let i = 0; i < this.bannerErrorArr.length; i++) {
            if (!this.bannerErrorArr[i]) {
                isAllError = false
                break
            }
        }
        return isAllError
    }

    static showBannerAd() {
        if (!WECHAT) return;

        if (this.isAllBannerError) {
            this.stopCountBannerTime()
            return
        }
        // if (this.bannerErrorArr[this.bannerIndex]) {
        //     this.bannerIndex++
        //     if (this.bannerIndex >= this.bannerIdArr.length) this.bannerIndex = 0
        //     this.showBannerAd()
        //     return
        // }

        this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].show()
        this.stopCountBannerTime()

        if (!FdMgr.canTrapAll) return
        this.countBannerTimeSchedule = () => {
            this.countBannerTime()
        }
        FDNode.Share.schedule(this.countBannerTimeSchedule, 0.1)
    }

    static hideBannerAd() {
        if (!WECHAT || this.isAllBannerError) {
            this.stopCountBannerTime()
            return;
        }
        this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide()
        this.stopCountBannerTime()
    }

    static countBannerTime() {
        this.bannerTimesArr[this.bannerIndex] += 0.1
        if (this.bannerTimesArr[this.bannerIndex] >= FdMgr.jsonConfig.refresh_banner_time) {
            this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide()
            this.bannerTimesArr[this.bannerIndex] = 0
            this.bannerShowCount[this.bannerIndex]++
            if (this.bannerShowCount[this.bannerIndex] >= 3) {
                this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].destroy()
                this.bannerAds[this.bannerIndex] = null
                this.bannerAds[this.bannerIndex] = this.createBannerAd(this.bannerIndex)
            }
            this.bannerIndex++
            if (this.bannerIndex >= this.bannerIdArr.length) this.bannerIndex = 0
            this.showBannerAd()
        }
    }

    static stopCountBannerTime() {
        FDNode.Share.unschedule(this.countBannerTimeSchedule)
    }

    static createBannerAd(index: number, isShow: boolean = false) {
        if (!WECHAT) return;

        let sysInfo = this.getSystemInfoSync();
        let bannerAd = window['qq'].createBannerAd({
            adUnitId: this.bannerIdArr[index],
            style: {
                top: sysInfo.screenHeight * 0.8,
                width: sysInfo.screenWidth,
                height: 200,
                left: 0
            },
            adIntervals: 30
        });
        bannerAd.onLoad(() => {
            if (isShow) {
                bannerAd.show()
            }
            this.bannerErrorArr[index] = false
            console.log("Banner广告加载成功");
        });
        bannerAd.onError(err => {
            this.bannerErrorArr[index] = true
            console.error("Banner广告加载失败", JSON.stringify(err));
        });
        bannerAd.onResize(res => {
            let realHeight = bannerAd.style.realHeight + 0.1;
            bannerAd.style.top = sysInfo.screenHeight - realHeight;
        });
        return bannerAd;
    }

    //#endregion

    //#region 激励视频广告
    static videoAd: any;
    static videoFinishCallback: Function;
    static videoCancelCallback: Function;

    static isExistVideoAd: boolean = false;
    static createVideoAd() {
        if (WECHAT) {
            var self = this;
            var videoAd = this.videoAd;
            if (videoAd != null) {
                videoAd.offLoad(onLoadVideo);
                videoAd.offError(onErrorVideo);
                videoAd.offClose(onCloseVideo);
            }

            var videoAd = window['qq'].createRewardedVideoAd({ adUnitId: self.videoId });
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
        if (!WECHAT) {
            finishCB && finishCB();
            cancelCB && cancelCB();
            return;
        }

        if (!WECHAT) return;
        let self = this
        this.videoFinishCallback = finishCB;
        this.videoCancelCallback = cancelCB;
        if (!this.isExistVideoAd) {
            this.createVideoAd()
        }
        if (WECHAT) {
            var videoAd = this.videoAd;
            videoAd.show().then(() => { }).catch(err => {
                videoAd.load().then(() => videoAd.show()).catch(err => {
                    self.videoCancelCallback && self.videoCancelCallback()
                    self.videoCancelCallback = null
                });
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
        if (!WECHAT) return
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
        if (!WECHAT || !this.boxAd) return
        this.closeBoxAdCB = cb
        this.boxAd.show()
    }
    //盒子广告
}