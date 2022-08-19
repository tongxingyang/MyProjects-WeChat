import { PREVIEW, WECHAT } from "cc/env";
import Utility from "../../Scripts/Mod/Utility";
import FdMgr from "./FdMgr";
import { FDNode } from "./FDNode";

export default class FdAd {
    static bannerIdArr: string[] = [];
    static videoId: string[] = [];
    static fullGridId: string[] = [];
    static bottomGridId: string[] = [];
    static sideGridId: string[] = [];
    static singleGridId: string[] = [];
    static interstitialId: string[] = [];

    static inidAd(cb?: Function) {
        if (!WECHAT) { cb && cb(); return };
        this.initBanner();
        this.createVideoAd();
        this.initGridAD()
        this.createInterstitialAd()

        let func = () => {
            if (this.isFullGridAdLoaded) {
                FDNode.Share.unschedule(func)
                cb && cb()
            }
        }
        FDNode.Share.schedule(func)
    }

    static sysInfo: any;
    static getSystemInfoSync() {
        if (!WECHAT) return;
        if (!this.sysInfo) {
            this.sysInfo = window['wx'].getSystemInfoSync();
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
        if (!WECHAT) return
        if (this.isAllBannerError) {
            this.stopCountBannerTime()
            return;
        }
        for (let i = 0; i < this.bannerAds.length; i++) {
            this.bannerAds[i] && this.bannerAds[i].hide()
        }
        //this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide()
        this.stopCountBannerTime()
    }

    static countBannerTime() {
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

    static stopCountBannerTime() {
        FDNode.Share.unschedule(this.countBannerTimeSchedule)
    }

    static createBannerAd(index: number, isShow: boolean = false) {
        if (!WECHAT || this.bannerIdArr.length <= 0) return

        let sysInfo = this.getSystemInfoSync();
        let bannerAd = window['wx'].createBannerAd({
            adUnitId: this.bannerIdArr[index],
            style: {
                top: sysInfo.screenHeight * 0.8,
                width: 10,
                height: 10,
                left: sysInfo.screenWidth / 2 - 150
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
            //bannerAd.style.width = 10
            bannerAd.style.top = sysInfo.screenHeight - realHeight;
            bannerAd.style.left = (sysInfo.screenWidth - bannerAd.style.realWidth) / 2;
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
        if (!WECHAT || this.videoId.length <= 0) return
        if (WECHAT) {
            var self = this;
            var videoAd = this.videoAd;
            if (videoAd != null) {
                videoAd.offLoad(onLoadVideo);
                videoAd.offError(onErrorVideo);
                videoAd.offClose(onCloseVideo);
            }

            var videoAd = window['wx'].createRewardedVideoAd({ adUnitId: self.videoId[0] });
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
                    self.OpenAlert('暂无视频')
                    // self.videoFinishCallback && self.videoFinishCallback()
                    // self.videoFinishCallback = null
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

    //#region 格子广告
    static initGridAD() {
        if (!WECHAT) {
            return;
        }
        this.createFullGrid()
        this.createBottomGrid()
        this.createSideGrid()
        this.createSingleGrid()
    }

    //全屏格子
    static fullGridAd: any[] = []
    private static isFullGridAdLoaded: boolean = false
    private static createFullGrid() {
        if (!WECHAT || this.fullGridId.length <= 0) {
            this.isFullGridAdLoaded = true;
            return
        }
        for (let i = 0; i < this.fullGridAd.length; i++) {
            if (this.fullGridAd[i]) {
                this.fullGridAd[i].destroy()
                this.fullGridAd[i] = null
            }
        }
        let count = 0
        for (let i = 0; i < 2; i++) {
            let style: any = { left: this.sysInfo.screenWidth / 2 - 300, top: 30, width: 10, height: 10 }
            if (i > 0) style = { left: this.sysInfo.screenWidth / 2, top: 30, width: 10, height: 10 }
            let gridAd = window['wx'].createCustomAd({
                adUnitId: this.fullGridId[0],
                adIntervals: 30,
                style: style
            });
            gridAd.onError((err) => {
                count++
                if (count >= 2)
                    this.isFullGridAdLoaded = true;
                console.log('全屏格子加载失败:' + i, JSON.stringify(err))
            })
            gridAd.onLoad(() => {
                count++
                if (count >= 2)
                    this.isFullGridAdLoaded = true;
                this.fullGridAd.push(gridAd)
            })
        }
    }
    static visibleFullGridAd(v: boolean = true) {
        if (!WECHAT) return
        if (this.fullGridAd.length <= 0) {
            this.createFullGrid()
            return
        }
        for (let i = 0; i < this.fullGridAd.length; i++) {
            v ? this.fullGridAd[i].show() : this.fullGridAd[i].hide()
        }
    }
    static getIsFullGridAdError() {
        if (this.fullGridAd.length <= 0) this.createFullGrid()
        return this.fullGridAd.length <= 0
    }

    //底部格子
    static bottomGridAd: any = null
    static bottomGridError: boolean = false
    private static createBottomGrid() {
        if (!WECHAT || this.bottomGridId.length <= 0) return
        if (this.bottomGridAd) {
            this.bottomGridAd.destroy()
            this.bottomGridAd = null
        }
        this.bottomGridAd = window['wx'].createCustomAd({
            adUnitId: this.bottomGridId[0],
            adIntervals: 30,
            style: {
                left: this.sysInfo.screenWidth / 2 - 175,
                top: this.getSystemInfoSync().screenHeight - 110,
                width: 10
            }
        });
        this.bottomGridAd.onError((err) => { this.bottomGridError = true; console.log('底部格子加载失败:', JSON.stringify(err)) })
        this.bottomGridAd.onLoad(() => { this.bottomGridError = false; })
    }
    static visibleBottomGridAd(v: boolean = true) {
        if (!WECHAT) return
        if (this.bottomGridError) {
            this.createBottomGrid()
            return
        }
        if (this.bottomGridAd) {
            v ? this.bottomGridAd.show() : this.bottomGridAd.hide()
        }
    }

    //屏幕侧格子
    static sideGridAd: any[] = []
    private static createSideGrid() {
        if (!WECHAT || this.sideGridId.length <= 0) return
        for (let i = 0; i < this.sideGridAd.length; i++) {
            this.sideGridAd[i].destroy()
            this.sideGridAd = []
        }
        for (let i = 0; i < 2; i++) {
            let grid = window['wx'].createCustomAd({
                adUnitId: this.sideGridId[0],
                adIntervals: 30,
                style: {
                    left: i == 0 ? 90 : this.getSystemInfoSync().screenWidth - 65,
                    top: 50
                }
            });
            grid.onError((err) => { ; console.log('屏幕侧格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.sideGridAd.push(grid) })
        }
    }
    static visibleSideGridAd(v: boolean = true) {
        if (!WECHAT) return
        if (this.sideGridAd.length <= 0) {
            this.createSideGrid()
            return
        }
        for (let i = 0; i < this.sideGridAd.length; i++) {
            v ? this.sideGridAd[i].show() : this.sideGridAd[i].hide()
        }
    }

    //屏幕单格子
    static singleGridAd: any[] = []
    private static createSingleGrid() {
        if (!WECHAT || this.singleGridId.length <= 0) return
        for (let i = 0; i < this.singleGridAd.length; i++) {
            this.singleGridAd[i].destroy()
            this.singleGridAd = []
        }
        for (let i = 0; i < 2; i++) {
            let grid = window['wx'].createCustomAd({
                adUnitId: this.singleGridId[0],
                adIntervals: 30,
                style: {
                    left: i == 0 ? 65 : this.getSystemInfoSync().screenWidth - 65,
                    top: 60
                }
            });
            grid.onError((err) => { ; console.log('屏幕单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.singleGridAd.push(grid) })
        }
    }
    static visibleSingleGridAd(v: boolean = true) {
        if (!WECHAT) return
        if (this.singleGridAd.length <= 0) {
            this.createSingleGrid()
            return
        }
        for (let i = 0; i < this.singleGridAd.length; i++) {
            v ? this.singleGridAd[i].show() : this.singleGridAd[i].hide()
        }
    }
    //#endregion

    //插屏广告
    private static intersititialAd: any = null
    private static intersititialCB: Function = null
    private static intersititialError: boolean = false
    private static createInterstitialAd() {
        return
        if (!WECHAT || this.interstitialId.length <= 0) return
        if (this.intersititialAd) {
            this.intersititialAd.offError()
            this.intersititialAd.offLoad()
            this.intersititialAd.offClose()
            this.intersititialAd.destroy();
            this.intersititialAd = null
        }
        this.intersititialAd = window['wx'].createInterstitialAd({
            adUnitId: this.interstitialId[0]
        })
        this.intersititialAd.onError((err) => { this.intersititialError = true; console.log('插屏广告加载失败:', JSON.stringify(err)) })
        this.intersititialAd.onLoad(() => { this.intersititialError = false })
        this.intersititialAd.onClose(() => { this.intersititialCB && this.intersititialCB() })
        this.intersititialAd.load()
    }
    static showInterstitialAd(cb?: Function) {
        cb && cb()
        return
        if (PREVIEW || !this.intersititialAd || this.intersititialError) {
            if (this.intersititialError) this.createInterstitialAd()
            cb && cb()
            return
        }
        this.intersititialCB = cb
        this.intersititialAd.show().then(() => { }).catch(err => {
            this.intersititialCB && this.intersititialCB()
        });
    }


    //系统提示
    static OpenAlert(msg: string, dur: number = 2000, icon: boolean = false) {
        if (WECHAT) {
            window["wx"].showToast({
                title: msg,//提示文字
                duration: dur,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: icon ? 'success' : 'none', //图标，支持"success"、"loading"  
            })
        }
    }
}