import { WECHAT } from "cc/env";
import SGConfig from "./SGConfig";
import { SGNode } from "./SGNode";

export default class SGAD {
    static bannerIds: string[] = [];
    static videoIds: string[] = [];
    static interstitialIds: string[] = [];
    static fullGridIds: string[] = [];
    static fullSingleGridIds: string[] = [];
    static sideGridIds: string[] = [];
    static boxGridIds: string[] = [];
    static gameGridIds: string[] = [];
    static finishGridIds: string[] = [];

    static initAd(cb?: Function) {
        if (!WECHAT) { cb && cb(); return };

        this.bannerIds = SGConfig.data.front_banner_ids.split(',')
        this.videoIds = SGConfig.data.front_video_ids.split(',')
        this.interstitialIds = SGConfig.data.front_chaping_ids.split(',')
        this.fullGridIds = SGConfig.data.front_more_gezi_ids.split(',')
        this.fullSingleGridIds = SGConfig.data.front_more_dangezi_ids.split(',')
        this.sideGridIds = SGConfig.data.front_duilian_gezi_ids.split(',')
        this.boxGridIds = SGConfig.data.front_box_ids.split(',')
        this.gameGridIds = SGConfig.data.front_dangezi_ids.split(',')
        this.finishGridIds = SGConfig.data.front_duogezi_ids.split(',')

        this.bannerIds = this.shuffleArr(this.bannerIds)
        this.videoIds = this.shuffleArr(this.videoIds)
        this.interstitialIds = this.shuffleArr(this.interstitialIds)
        this.fullGridIds = this.shuffleArr(this.fullGridIds)
        this.fullSingleGridIds = this.shuffleArr(this.fullSingleGridIds)
        this.sideGridIds = this.shuffleArr(this.sideGridIds)
        this.boxGridIds = this.shuffleArr(this.boxGridIds)
        this.gameGridIds = this.shuffleArr(this.gameGridIds)
        this.finishGridIds = this.shuffleArr(this.finishGridIds)

        this.initGridAD()
        this.initBanner();
        this.createVideoAd();
        this.createInterstitialAd()

        let func = () => {
            if (this.isFullGridAdLoaded) {
                SGNode.Share.unschedule(func)
                cb && cb()
            }
        }
        SGNode.Share.schedule(func, 0.1)
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
    private static countBannerTimeSchedule = null
    static initBanner() {
        if (!WECHAT) return;
        if (!SGConfig.canTrapAll && this.bannerAds.length > 1) {
            this.bannerAds.splice(0, this.bannerAds.length - 1)
        }

        this.bannerAds = [];
        this.bannerIndex = 0;
        this.bannerTimesArr = [];
        this.bannerShowCount = [];
        this.bannerErrorArr = [];
        for (let i = 0; i < this.bannerIds.length; i++) {
            this.bannerTimesArr.push(0)
            this.bannerShowCount.push(0)
            this.bannerErrorArr.push(false)
        }
        for (let i = 0; i < this.bannerIds.length; i++) {
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
            this.stopCountBannerTime();
            this.initBanner();
            return;
        }
        for (let i = 0; i < this.bannerErrorArr.length; i++) {
            if (this.bannerErrorArr[this.bannerIndex]) {
                this.bannerIndex++
                if (this.bannerIndex >= this.bannerIds.length) this.bannerIndex = 0
            } else {
                break
            }
        }

        this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].show()
        this.stopCountBannerTime()

        if (!SGConfig.canTrapAll) return

        this.countBannerTimeSchedule = () => {
            this.countBannerTime()
        }
        SGNode.Share.schedule(this.countBannerTimeSchedule, 0.1)
    }

    static hideBannerAd() {
        if (!WECHAT) return
        if (this.isAllBannerError) {
            this.stopCountBannerTime()
            return;
        }
        this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide()
        this.stopCountBannerTime()
    }

    static countBannerTime() {
        this.bannerTimesArr[this.bannerIndex] += 0.1
        if (this.bannerTimesArr[this.bannerIndex] >= SGConfig.data.refresh_banner_time) {
            this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide()
            this.bannerTimesArr[this.bannerIndex] = 0
            this.bannerShowCount[this.bannerIndex]++
            if (this.bannerShowCount[this.bannerIndex] >= SGConfig.data.updateBanner) {
                this.bannerShowCount[this.bannerIndex] = 0
                this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].destroy()
                this.bannerAds[this.bannerIndex] = null
                this.bannerAds[this.bannerIndex] = this.createBannerAd(this.bannerIndex)
            }
            this.bannerIndex++
            if (this.bannerIndex >= this.bannerIds.length) this.bannerIndex = 0
            this.showBannerAd()
        }
    }

    static stopCountBannerTime() {
        SGNode.Share.unschedule(this.countBannerTimeSchedule)
    }

    static createBannerAd(index: number) {
        if (!WECHAT) return;

        let sysInfo = this.getSystemInfoSync();
        let bannerAd = window['wx'].createBannerAd({
            adUnitId: this.bannerIds[index],
            style: {
                top: sysInfo.screenHeight * 0.8,
                width: 10,
                left: sysInfo.screenWidth / 2 - 150
            },
            adIntervals: 30
        });
        bannerAd.onLoad(() => {
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
    static videoCompleteCallback: Function;

    static isExistVideoAd: boolean = false;
    static createVideoAd(autoShow: boolean = false) {
        if (WECHAT) {
            var self = this;
            var videoAd = this.videoAd;
            if (videoAd != null) {
                videoAd.offLoad(onLoadVideo);
                videoAd.offError(onErrorVideo);
                videoAd.offClose(onCloseVideo);
            }

            var videoAd = window['wx'].createRewardedVideoAd({ adUnitId: self.videoIds[0] });
            videoAd.onLoad(onLoadVideo);
            videoAd.onError(onErrorVideo);
            videoAd.onClose(onCloseVideo);
            this.videoAd = videoAd;
        }

        function onLoadVideo() {
            console.log('video 加载成功');
            self.isExistVideoAd = true;
            if (autoShow) {
                videoAd.show();
            }
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
            } else {
                self.videoCancelCallback && self.videoCancelCallback()
                self.videoCancelCallback = null
            }
            self.videoCompleteCallback && self.videoCompleteCallback()
            self.videoCompleteCallback = null
        }
    }

    static showVideoAd(finishCB?: Function, cancelCB?: Function, completeCB?: Function, errorFinish = false) {
        if (!WECHAT) {
            finishCB && finishCB();
            cancelCB && cancelCB();
            completeCB && completeCB();
            return;
        }

        if (!WECHAT) return;
        let self = this
        this.videoFinishCallback = finishCB;
        this.videoCancelCallback = cancelCB;
        this.videoCompleteCallback = completeCB;
        if (!this.isExistVideoAd) {
            this.createVideoAd()
        }
        if (WECHAT) {
            var videoAd = this.videoAd;
            videoAd.show().then(() => { }).catch(err => {
                videoAd.load().then(() => videoAd.show()).catch(err => {
                    self.videoCompleteCallback && self.videoCompleteCallback()
                    self.videoCompleteCallback = null
                    if (!errorFinish && this.videoFinishCallback) {
                        window['wx'].showToast({
                            title: '暂无视频',
                            duration: 2000
                        })
                    }
                    if (errorFinish && this.videoFinishCallback) {
                        this.videoFinishCallback && this.videoFinishCallback()
                        this.videoFinishCallback = null
                        window['wx'].showToast({
                            title: '已获得奖励',
                            duration: 2000
                        })
                    }
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
        this.createFullSingleGrid()
        this.createSideGrid()
        this.createMidBoxGrid()
        this.createFirstBoxGrid()
        this.createSecondBoxGrid()
        this.createGameGrid()
        if (SGConfig.isPortrait)
            this.createFinishGrid()
    }

    //全屏格子
    static fullGridAd: any[] = []
    static fullGridError: boolean = false
    static fullGridShowCount: number = 0
    static fullGridCurIndex: number = 0
    private static isFullGridAdLoaded: boolean = false
    private static createFullGrid() {
        if (!WECHAT) return
        let loadCount = 0
        let count = this.fullGridIds.length;
        let style = {};
        for (let i = 0; i < count; i++) {
            if (SGConfig.isPortrait) {
                style = {
                    left: 0,
                    top: this.getSystemInfoSync().screenHeight / 2 - this.getSystemInfoSync().screenWidth / 2 - 50,
                    width: this.getSystemInfoSync().screenWidth
                }
            } else {
                style = {
                    left: (this.getSystemInfoSync().screenWidth / 2 - 300) + Math.floor(i % 2) * 300,
                    top: 30,
                    width: 10,
                    height: 10
                }
            }
            let fullGridAd = window['wx'].createCustomAd({
                adUnitId: this.fullGridIds[i],
                adIntervals: SGConfig.data.front_more_gezi_time / 1000,
                style: style
            });
            fullGridAd.onError((err) => {
                loadCount++
                if (loadCount >= count)
                    this.isFullGridAdLoaded = true;
                console.log('全屏格子加载失败:', JSON.stringify(err));
            })
            fullGridAd.onLoad(() => {
                loadCount++
                if (loadCount >= count)
                    this.isFullGridAdLoaded = true;
                this.fullGridAd.push(fullGridAd);
            })
        }
    }
    static visibleFullGridAd(v: boolean = true) {
        if (!WECHAT || this.fullGridAd.length <= 0) return
        if (v) {
            if (SGConfig.isPortrait) {
                this.fullGridAd[this.fullGridCurIndex].show()
            } else {
                let id1 = this.fullGridCurIndex * 2
                if (id1 >= this.fullGridAd.length) { id1 = 0; this.fullGridCurIndex = 0; }
                this.fullGridAd[id1].show()

                let id2 = id1 + 1
                if (id2 < this.fullGridAd.length)
                    this.fullGridAd[id2].show()
            }
            this.fullGridShowCount++
            if (this.fullGridShowCount >= SGConfig.data.front_more_gezi_refresh_num) {
                this.fullGridShowCount = 0
                this.fullGridCurIndex++
                if (this.fullGridCurIndex >= this.fullGridAd.length) this.fullGridCurIndex = 0
            }
        } else {
            for (let i = 0; i < this.fullGridAd.length; i++) {
                v ? this.fullGridAd[i].show() : this.fullGridAd[i].hide();
            }
        }

    }

    //屏幕侧格子
    static sideGridAdL: any[] = []
    static sideGridAdR: any[] = []
    private static createSideGrid() {
        if (!WECHAT) return
        for (let i = 0; i < this.sideGridIds.length; i++) {
            let id = i < this.sideGridIds.length ? i : this.sideGridIds.length - 1
            if (this.sideGridAdL.length <= 0) {
                let gridL = window['wx'].createCustomAd({
                    adUnitId: this.sideGridIds[id],
                    adIntervals: 30,
                    style: {
                        left: 0,
                        top: this.getSystemInfoSync().screenHeight / 2 - 220
                    }
                });
                gridL.onError((err) => { ; console.log('屏幕侧格子加载失败:', JSON.stringify(err)) })
                gridL.onLoad(() => { this.sideGridAdL.push(gridL) })
            } else if (this.sideGridAdR.length <= 0) {
                let gridR = window['wx'].createCustomAd({
                    adUnitId: this.sideGridIds[id],
                    adIntervals: 30,
                    style: {
                        left: this.getSystemInfoSync().screenWidth - 65,
                        top: this.getSystemInfoSync().screenHeight / 2 - 220
                    }
                });
                gridR.onError((err) => { ; console.log('屏幕侧格子加载失败:', JSON.stringify(err)) })
                gridR.onLoad(() => { this.sideGridAdR.push(gridR) })
            }
        }
    }
    static visibleSideGridAd(v: boolean = true) {
        if (!WECHAT) return
        for (let i = 0; i < this.sideGridAdL.length; i++) {
            v ? this.sideGridAdL[i].show() : this.sideGridAdL[i].hide()
        }
        for (let i = 0; i < this.sideGridAdR.length; i++) {
            v ? this.sideGridAdR[i].show() : this.sideGridAdR[i].hide()
        }
    }

    //全屏单格子
    static fullSingleGridAd: any[] = []
    private static createFullSingleGrid() {
        if (!WECHAT) return
        for (let i = 0; i < 2; i++) {
            let id = i < this.fullSingleGridIds.length ? i : this.fullSingleGridIds.length - 1
            let grid = window['wx'].createCustomAd({
                adUnitId: this.fullSingleGridIds[id],
                adIntervals: 30,
                style: {
                    left: i == 1 ? this.getSystemInfoSync().screenWidth / 2 - 60 : this.getSystemInfoSync().screenWidth / 2,
                    top: this.getSystemInfoSync().screenHeight - 100
                }
            });
            grid.onError((err) => { ; console.log('全屏单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.fullSingleGridAd.push(grid) })
        }
    }
    static visibleFullSingleGridAd(v: boolean = true) {
        if (!WECHAT) return
        for (let i = 0; i < this.fullSingleGridAd.length; i++) {
            v ? this.fullSingleGridAd[i].show() : this.fullSingleGridAd[i].hide()
        }
    }

    //格子宝箱单格子
    static midBoxGridAd: any[] = []
    private static createMidBoxGrid() {
        if (!WECHAT) return
        for (let i = 0; i < 2; i++) {
            let grid = window['wx'].createCustomAd({
                adUnitId: this.boxGridIds[i],
                adIntervals: SGConfig.data.front_box_dangezi_time / 1000,
                style: {
                    left: i == 1 ? this.getSystemInfoSync().screenWidth / 2 - 60 : this.getSystemInfoSync().screenWidth / 2,
                    top: this.getSystemInfoSync().screenHeight / 2 - 65
                }
            });
            grid.onError((err) => { ; console.log('格子宝箱单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.midBoxGridAd.push(grid) })
        }
    }
    static visibleMidBoxGridAd(v: boolean = true) {
        if (!WECHAT) return
        for (let i = 0; i < this.midBoxGridAd.length; i++) {
            v ? this.midBoxGridAd[i].show() : this.midBoxGridAd[i].hide()
        }
    }
    //第一宝箱单格子
    static firstBoxGridAd: any[] = []
    private static createFirstBoxGrid() {
        if (!WECHAT) return
        for (let i = 0; i < 2; i++) {
            let grid = window['wx'].createCustomAd({
                adUnitId: this.boxGridIds[i + 2],
                adIntervals: SGConfig.data.front_box_dangezi_time / 1000,
                style: {
                    left: i == 1 ? this.getSystemInfoSync().screenWidth / 2 - 60 : this.getSystemInfoSync().screenWidth / 2,
                    top: this.getSystemInfoSync().screenHeight - 100
                }
            });
            grid.onError((err) => { ; console.log('第一宝箱单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.firstBoxGridAd.push(grid) })
        }
    }
    static visibleFirstBoxGridAd(v: boolean = true) {
        if (!WECHAT) return
        for (let i = 0; i < this.firstBoxGridAd.length; i++) {
            v ? this.firstBoxGridAd[i].show() : this.firstBoxGridAd[i].hide()
        }
    }
    //第二宝箱单格子
    static secondBoxGridAd: any[] = []
    private static createSecondBoxGrid() {
        if (!WECHAT) return
        for (let i = 0; i < 2; i++) {
            let grid = window['wx'].createCustomAd({
                adUnitId: this.boxGridIds[i + 4],
                adIntervals: SGConfig.data.front_box_dangezi_time / 1000,
                style: {
                    left: i == 1 ? this.getSystemInfoSync().screenWidth / 2 - 60 : this.getSystemInfoSync().screenWidth / 2,
                    top: this.getSystemInfoSync().screenHeight - 100
                }
            });
            grid.onError((err) => { ; console.log('第二宝箱单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.secondBoxGridAd.push(grid) })
        }
    }
    static visibleSecondBoxGridAd(v: boolean = true) {
        if (!WECHAT) return
        for (let i = 0; i < this.secondBoxGridAd.length; i++) {
            v ? this.secondBoxGridAd[i].show() : this.secondBoxGridAd[i].hide()
        }
    }
    //游戏中单格子
    static gameGridAd: any[] = []
    private static createGameGrid() {
        if (!WECHAT) return
        for (let i = 0; i < 2; i++) {
            let id = i < this.gameGridIds.length ? i : this.gameGridIds.length - 1
            let grid = window['wx'].createCustomAd({
                adUnitId: this.gameGridIds[id],
                adIntervals: 30,
                style: {
                    left: i == 0 ? 0 : this.getSystemInfoSync().screenWidth - 70,
                    top: this.getSystemInfoSync().screenHeight * 0.1
                }
            });
            grid.onError((err) => { ; console.log('游戏中单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.gameGridAd.push(grid) })
        }
    }
    static visibleGameGridAd(v: boolean = true) {
        if (!WECHAT) return
        for (let i = 0; i < this.gameGridAd.length; i++) {
            v ? this.gameGridAd[i].show() : this.gameGridAd[i].hide()
        }
    }
    //结算页多格子
    static finishGridAd: any[] = []
    private static createFinishGrid() {
        if (!WECHAT) return
        for (let i = 0; i < 1; i++) {
            let grid = window['wx'].createCustomAd({
                adUnitId: this.finishGridIds[i],
                adIntervals: 30,
                style: {
                    left: 0,
                    top: this.getSystemInfoSync().screenHeight * 0.24,
                    width: this.getSystemInfoSync().screenWidth
                }
            });
            grid.onError((err) => { ; console.log('结算页多格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.finishGridAd.push(grid) })
        }
    }
    static visibleFinishGridAd(v: boolean = true) {
        if (!WECHAT) return
        for (let i = 0; i < this.finishGridAd.length; i++) {
            v ? this.finishGridAd[i].show() : this.finishGridAd[i].hide()
        }
    }

    //插屏广告
    private static intersititialAd: any = null
    private static intersititialCB: Function = null
    private static intersititialError: boolean = false
    private static createInterstitialAd() {
        if (!WECHAT) return
        if (this.intersititialAd) {
            this.intersititialAd.offError()
            this.intersititialAd.offLoad()
            this.intersititialAd.offClose()
            this.intersititialAd.destroy();
            this.intersititialAd = null
        }
        this.intersititialAd = window['wx'].createInterstitialAd({
            adUnitId: this.interstitialIds[0]
        })
        this.intersititialAd.onError((err) => { this.intersititialError = true; console.log('插屏广告加载失败:', JSON.stringify(err)) })
        this.intersititialAd.onLoad(() => { this.intersititialError = false })
        this.intersititialAd.onClose(() => { this.intersititialCB && this.intersititialCB() })
        this.intersititialAd.load()
    }
    static showInterstitialAd(cb?: Function) {
        if (!WECHAT || !this.intersititialAd || this.intersititialError) {
            if (this.intersititialError) this.createInterstitialAd()
            cb && cb()
            return
        }
        this.intersititialCB = cb
        this.intersititialAd.show().then(() => { }).catch(err => {
            this.intersititialCB && this.intersititialCB()
        });
    }


    //打乱数组
    public static shuffleArr(arr: any[]) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }
}