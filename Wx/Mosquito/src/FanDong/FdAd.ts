import Utility from "../Mod/Utility";
import FdMgr from "./FdMgr";


export default class FdAd {
    static bannerIdArr: string[] = ["adunit-4eba1812be0f6595", "adunit-c2ed9c59deb47d8d"];
    static videoId = "adunit-ea8888e505097bac";
    static fullGridId = "adunit-2d19b46342f901de";
    static bottomGridId = "adunit-7f85b8d639948694";
    static sideGridId = "adunit-b2ef25cb1e9ffd34";
    static singleGridId = "adunit-f476308364af2086";

    static inidAd() {
        if (!Laya.Browser.onWeiXin) return;
        this.initBanner();
        this.createVideoAd();
        this.initGridAD()
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
    static bannerAds: any[] = [];
    static bannerIndex: number = 0;
    static bannerTimesArr: number[] = []
    static bannerShowCount: number[] = []
    static bannerErrorArr: boolean[] = []
    static initBanner() {
        if (!Laya.Browser.onWeiXin) return;
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
        if (!Laya.Browser.onWeiXin) return;

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
        Laya.timer.loop(100, this, this.countBannerTime)
    }

    static hideBannerAd() {
        if (!Laya.Browser.onWeiXin || this.isAllBannerError) {
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
        Laya.timer.clear(this, this.countBannerTime)
    }

    static createBannerAd(index: number, isShow: boolean = false) {
        if (!Laya.Browser.onWeiXin) return;

        let sysInfo = this.getSystemInfoSync();
        let bannerAd = Laya.Browser.window['wx'].createBannerAd({
            adUnitId: this.bannerIdArr[index],
            style: {
                top: sysInfo.screenHeight * 0.8,
                width: 300,
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

    //#region 格子广告
    static initGridAD() {
        if (!Laya.Browser.onWeiXin) {
            return;
        }
        this.createFullGrid()
        this.createBottomGrid()
        this.createSideGrid()
        this.createSingleGrid()
    }

    //全屏格子
    static fullGridAd: any = null
    static fullGridError: boolean = false
    private static createFullGrid() {
        this.fullGridAd = Laya.Browser.window['wx'].createCustomAd({
            adUnitId: this.fullGridId,
            adIntervals: 30,
            style: {
                left: 0,
                top: this.getSystemInfoSync().screenHeight / 2 - this.getSystemInfoSync().screenWidth / 2 - 50,
                width: this.getSystemInfoSync().screenWidth
            }
        });
        this.fullGridAd.onError(() => { this.fullGridError = true; console.log('全屏格子加载失败') })
    }
    static visibleFullGridAd(v: boolean = true) {
        if (Laya.Browser.onWeiXin && this.fullGridAd && !this.fullGridError) {
            v ? this.fullGridAd.show() : this.fullGridAd.hide()
        }
    }

    //底部格子
    static bottomGridAd: any = null
    static bottomGridError: boolean = false
    private static createBottomGrid() {
        this.bottomGridAd = Laya.Browser.window['wx'].createCustomAd({
            adUnitId: this.bottomGridId,
            adIntervals: 30,
            style: {
                left: 47,
                top: this.getSystemInfoSync().screenHeight - 110,
                width: this.getSystemInfoSync().screenWidth
            }
        });
        this.bottomGridAd.onError(() => { this.bottomGridError = true; console.log('底部格子加载失败') })
    }
    static visibleBottomGridAd(v: boolean = true) {
        if (Laya.Browser.onWeiXin && this.bottomGridAd && !this.bottomGridError) {
            v ? this.bottomGridAd.show() : this.bottomGridAd.hide()
        }
    }

    //屏幕侧格子
    static sideGridAd: any[] = []
    private static createSideGrid() {
        for (let i = 0; i < 2; i++) {
            let grid = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.sideGridId,
                adIntervals: 30,
                style: {
                    left: i == 0 ? 0 : this.getSystemInfoSync().screenWidth - 65,
                    top: 200
                }
            });
            grid.onError(() => { ; console.log('屏幕侧格子加载失败') })
            grid.onLoad(() => { this.sideGridAd.push(grid) })
        }
    }
    static visibleSideGridAd(v: boolean = true) {
        if (Laya.Browser.onWeiXin && this.sideGridAd.length > 0) {
            for (let i = 0; i < this.sideGridAd.length; i++) {
                v ? this.sideGridAd[i].show() : this.sideGridAd[i].hide()
            }
        }
    }

    //屏幕单格子
    static singleGridAd: any[] = []
    private static createSingleGrid() {
        for (let i = 0; i < 2; i++) {
            let grid = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.singleGridId,
                adIntervals: 30,
                style: {
                    left: i == 0 ? 0 : this.getSystemInfoSync().screenWidth - 65,
                    top: 120
                }
            });
            grid.onError(() => { ; console.log('屏幕单格子加载失败') })
            grid.onLoad(() => { this.singleGridAd.push(grid) })
        }
    }
    static visibleSingleGridAd(v: boolean = true) {
        if (Laya.Browser.onWeiXin && this.singleGridAd.length > 0) {
            for (let i = 0; i < this.singleGridAd.length; i++) {
                v ? this.singleGridAd[i].show() : this.singleGridAd[i].hide()
            }
        }
    }
    //#endregion
}