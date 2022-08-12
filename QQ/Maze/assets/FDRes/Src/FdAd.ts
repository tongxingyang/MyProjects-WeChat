import { WECHAT } from "cc/env";
import Utility from "../../Scripts/Mod/Utility";
import FdMgr from "./FdMgr";
import { FDNode } from "./FDNode";

export default class FdAd {
    private static bannerIdArr: string[] = ["20738901f9042132d65c4dc6dc19db51"];
    private static videoId: string = "a2f8bd7b4145a2fb87d8d655172b4766";
    private static boxId: string = 'b6dd6766b496454a1d7842e5256814a8'
    private static blockIdArr: string[] = ['c7604dc72ccebc819f7a1aa10564b920']
    private static intersititialId: string = '539371669f6bc8a3654197e9ef7d9f72'

    static inidAd() {
        if (!WECHAT) return;
        this.createSideBlockAd()
        this.createSingleBlockAd()
        this.createBoxAd()
        this.initBanner();
        this.createVideoAd();
        this.createInterstitialAd()
    }

    private static sysInfo: any;
    static getSystemInfoSync() {
        if (!WECHAT) return;
        if (!this.sysInfo) {
            this.sysInfo = window['qq'].getSystemInfoSync();
        }
        return this.sysInfo;
    }

    //#region Banner广告
    private static bannerAds: any[] = [];
    private static bannerIndex: number = 0;
    private static bannerTimesArr: number[] = []
    private static bannerShowCount: number[] = []
    private static bannerErrorArr: boolean[] = []
    private static countBannerTimeSchedule: Function = null
    private static initBanner() {
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
        for (let i = 0; i < this.bannerErrorArr.length; i++) {
            if (this.bannerErrorArr[this.bannerIndex]) {
                this.bannerIndex++
                if (this.bannerIndex >= this.bannerIdArr.length) this.bannerIndex = 0
            } else {
                break
            }
        }

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

    private static countBannerTime() {
        this.bannerTimesArr[this.bannerIndex] += 0.1
        if (this.bannerTimesArr[this.bannerIndex] >= FdMgr.jsonConfig.refresh_banner_time) {
            this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide()
            this.bannerTimesArr[this.bannerIndex] = 0
            this.bannerShowCount[this.bannerIndex]++
            if (this.bannerShowCount[this.bannerIndex] >= FdMgr.jsonConfig.updateBanner) {
                this.bannerShowCount[this.bannerIndex] = 0
                this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].destroy()
                this.bannerAds[this.bannerIndex] = null
                this.bannerAds[this.bannerIndex] = this.createBannerAd(this.bannerIndex)
            }
            this.bannerIndex++
            if (this.bannerIndex >= this.bannerIdArr.length) this.bannerIndex = 0
            this.showBannerAd()
        }
    }

    private static stopCountBannerTime() {
        FDNode.Share.unschedule(this.countBannerTimeSchedule)
    }

    private static createBannerAd(index: number, isShow: boolean = false) {
        if (!WECHAT) return;

        let sysInfo = this.getSystemInfoSync();
        let bannerAd = window['qq'].createBannerAd({
            adUnitId: this.bannerIdArr[index],
            style: {
                top: sysInfo.screenHeight * 0.9,
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
            let realHeight = res.height
            bannerAd.style.top = sysInfo.screenHeight - realHeight;
        });
        return bannerAd;
    }

    //#endregion

    //#region 激励视频广告
    private static videoAd: any;
    private static videoFinishCallback: Function;
    private static videoCancelCallback: Function;

    private static isExistVideoAd: boolean = false;
    private static createVideoAd() {
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

    private static destroyVideoAd() {
        if (!this.videoAd) return;
        this.videoAd.destroy();
        this.videoAd = null;
    }
    //#endregion

    //盒子广告
    private static boxAd: any = null
    private static closeBoxAdCB: Function = null
    private static isBoxAdError: boolean = false
    private static createBoxAd() {
        if (!WECHAT) return
        if (this.boxAd) {
            this.boxAd.offLoad()
            this.boxAd.offError()
            this.boxAd.offClose()
        }
        this.boxAd = window['qq'].createAppBox({
            adUnitId: this.boxId
        })
        this.boxAd.load()
        this.boxAd.onLoad(() => {
            this.isBoxAdError = false
        })
        this.boxAd.onError((res) => {
            this.isBoxAdError = true
            console.log('盒子广告加载失败:', console.log(JSON.stringify(res)))
        })
        this.boxAd.onClose(() => {
            this.closeBoxAdCB && this.closeBoxAdCB()
            this.closeBoxAdCB = null
        })
    }
    static showBoxAd(cb?: Function) {
        if (!WECHAT) return
        if (this.isBoxAdError) {
            this.createBoxAd()
            return
        }
        this.closeBoxAdCB = cb
        this.boxAd.show().then().catch(() => {
            cb && cb()
        })
    }
    //盒子广告


    //插屏广告
    private static interstitialAd: any = null
    private static isInterstitialAdError: boolean = false
    private static createInterstitialAd() {
        this.interstitialAd = window['qq'].createInterstitialAd({
            adUnitId: this.intersititialId
        })
        this.interstitialAd.onLoad(() => {
            this.isInterstitialAdError = false
        })
        this.interstitialAd.onError((res) => {
            this.isInterstitialAdError = true
            console.log('插屏广告加载失败:', console.log(JSON.stringify(res)))
        })
    }
    static showInterstitialAd() {
        if (!WECHAT) return
        if (this.isInterstitialAdError) {
            this.createInterstitialAd()
            return
        }
        this.interstitialAd.show()
    }
    //插屏广告

    //对联积木广告
    private static sideBlockAdArr: any[] = []
    private static createSideBlockAd() {
        for (let i = 0; i < 2; i++) {
            let uid = i >= this.blockIdArr.length ? this.blockIdArr[this.blockIdArr.length - 1] : this.blockIdArr[i]
            let sideBlockAd = window['qq'].createBlockAd({
                adUnitId: uid,
                size: 3,
                orientation: 'vertical',
                style: {
                    left: i == 0 ? 5 : this.getSystemInfoSync().screenWidth - 65,
                    top: 120
                }
            })
            sideBlockAd.onLoad(() => {
                this.sideBlockAdArr.push(sideBlockAd)
            })
            sideBlockAd.onError((res) => {
                console.log('对联积木广告加载失败:', console.log(JSON.stringify(res)))
            })
            sideBlockAd.onResize((res) => {
                sideBlockAd.left = i == 0 ? 5 : this.getSystemInfoSync().screenWidth - res.width - 5
            })
        }
    }
    static showSideBlockAd() {
        if (!WECHAT) return
        if (this.sideBlockAdArr.length <= 0) {
            this.createSideBlockAd()
            return
        }
        for (let i = 0; i < this.sideBlockAdArr.length; i++) {
            this.sideBlockAdArr[i].show()
        }
    }
    static hideSideBlockAd() {
        if (!WECHAT) return
        for (let i = 0; i < this.sideBlockAdArr.length; i++) {
            this.sideBlockAdArr[i].hide()
        }
    }
    //对联积木广告

    //单积木广告
    private static singleBlockAdArr: any[] = []
    private static createSingleBlockAd() {
        for (let i = 0; i < 2; i++) {
            let uid = i >= this.blockIdArr.length ? this.blockIdArr[this.blockIdArr.length - 1] : this.blockIdArr[i]
            let singleBlockAd = window['qq'].createBlockAd({
                adUnitId: uid,
                size: 1,
                orientation: 'vertical',
                style: {
                    left: i == 0 ? 5 : this.getSystemInfoSync().screenWidth - 65,
                    top: 120
                }
            })
            singleBlockAd.onLoad(() => {
                this.singleBlockAdArr.push(singleBlockAd)
            })
            singleBlockAd.onError((res) => {
                console.log('对联积木广告加载失败:', console.log(JSON.stringify(res)))
            })
            singleBlockAd.onResize((res) => {
                singleBlockAd.left = i == 0 ? 5 : this.getSystemInfoSync().screenWidth - res.width - 5
            })
        }
    }
    static showSingleBlockAd() {
        if (!WECHAT) return
        if (this.singleBlockAdArr.length <= 0) {
            this.createSingleBlockAd()
            return
        }
        for (let i = 0; i < this.singleBlockAdArr.length; i++) {
            this.singleBlockAdArr[i].show()
        }
    }
    static hideSingleBlockAd() {
        if (!WECHAT) return
        for (let i = 0; i < this.singleBlockAdArr.length; i++) {
            this.singleBlockAdArr[i].hide()
        }
    }
    //对联积木广告
}