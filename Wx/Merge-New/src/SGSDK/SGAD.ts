import SGConfig from "./SGConfig";

export default class SGAD {
    static bannerIdArr: string[] = [];
    static videoId: string[] = [];
    static interstitialId: string[] = [];
    static fullGridId: string[] = [];
    static fullSingleGridId: string[] = [];
    static sideGridId: string[] = [];
    static boxGridId: string[] = [];
    static gameGridId: string[] = [];
    static finishGridId: string[] = [];

    static inidAd(cb?: Function) {
        if (!Laya.Browser.onWeiXin) { cb && cb(); return };
        this.initGridAD()
        this.initBanner();
        this.createVideoAd();
        this.createInterstitialAd()

        let func = () => {
            if (this.isFullGridAdLoaded) {
                Laya.timer.clear(this, func)
                cb && cb()
            }
        }
        Laya.timer.loop(100, this, func)
    }

    static sysInfo: any;
    static getSystemInfoSync() {
        if (!Laya.Browser.onWeiXin) return;
        if (!this.sysInfo) {
            this.sysInfo = Laya.Browser.window['wx'].getSystemInfoSync();
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
        this.bannerIdArr = this.shuffleArr(this.bannerIdArr)
        console.log('bannerId 数组排列：', this.bannerIdArr)
        if (!SGConfig.canTrapAll && this.bannerAds.length > 1) {
            this.bannerAds.splice(0, this.bannerAds.length - 1)
        }

        this.bannerAds = [];
        this.bannerIndex = 0;
        this.bannerTimesArr = [];
        this.bannerShowCount = [];
        this.bannerErrorArr = [];
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
            this.stopCountBannerTime();
            this.initBanner();
            return;
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

        if (!SGConfig.canTrapAll) return
        Laya.timer.loop(100, this, this.countBannerTime)
    }

    static hideBannerAd() {
        if (!Laya.Browser.onWeiXin) return
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
            if (this.bannerIndex >= this.bannerIdArr.length) this.bannerIndex = 0
            this.showBannerAd()
        }
    }

    static stopCountBannerTime() {
        Laya.timer.clear(this, this.countBannerTime)
    }

    static createBannerAd(index: number) {
        if (!Laya.Browser.onWeiXin) return;

        let sysInfo = this.getSystemInfoSync();
        let bannerAd = Laya.Browser.window['wx'].createBannerAd({
            adUnitId: this.bannerIdArr[index],
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
        if (Laya.Browser.onWeiXin) {
            var self = this;
            var videoAd = this.videoAd;
            if (videoAd != null) {
                videoAd.offLoad(onLoadVideo);
                videoAd.offError(onErrorVideo);
                videoAd.offClose(onCloseVideo);
            }

            var videoAd = Laya.Browser.window['wx'].createRewardedVideoAd({ adUnitId: self.videoId[0] });
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

    static showVideoAd(finishCB?: Function, cancelCB?: Function, completeCB?: Function) {
        if (!Laya.Browser.onWeiXin) {
            finishCB && finishCB();
            cancelCB && cancelCB();
            completeCB && completeCB();
            return;
        }

        if (!Laya.Browser.onWeiXin) return;
        let self = this
        this.videoFinishCallback = finishCB;
        this.videoCancelCallback = cancelCB;
        this.videoCompleteCallback = completeCB;
        if (!this.isExistVideoAd) {
            this.createVideoAd()
        }
        if (Laya.Browser.onWeiXin) {
            var videoAd = this.videoAd;
            videoAd.show().then(() => { }).catch(err => {
                videoAd.load().then(() => videoAd.show()).catch(err => {
                    self.videoCompleteCallback && self.videoCompleteCallback()
                    self.videoCompleteCallback = null
                    if (this.videoFinishCallback) {
                        Laya.Browser.window['wx'].showToast({
                            title: '暂无视频',
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
        if (!Laya.Browser.onWeiXin) {
            return;
        }
        this.createFullGrid()
        this.createFullSingleGrid()
        this.createSideGrid()
        this.createMidBoxGrid()
        this.createFinishGrid()
        this.createSecondBoxGrid()
        this.createGameGrid()
        if (SGConfig.isPortrait)
            this.createFinishGrid()
    }

    //全屏格子
    static fullGridAd: any = null
    static fullGridError: boolean = false
    static fullGridShowCount: number = 0
    static fullGridCurIndex: number = 0
    private static isFullGridAdLoaded: boolean = false
    private static createFullGrid() {
        if (!Laya.Browser.onWeiXin) return
        let loadCount = 0
        let count = this.fullGridId.length;
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
            let fullGridAd = Laya.Browser.window.wx.createCustomAd({
                adUnitId: this.fullGridId[i],
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
        if (!Laya.Browser.onWeiXin) return
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
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < this.sideGridId.length; i++) {
            if (this.sideGridAdL.length <= 0) {
                let gridL = Laya.Browser.window['wx'].createCustomAd({
                    adUnitId: this.sideGridId[i],
                    adIntervals: 30,
                    style: {
                        left: 0,
                        top: this.getSystemInfoSync().screenHeight / 2 - 220
                    }
                });
                gridL.onError((err) => { ; console.log('屏幕侧格子加载失败:', JSON.stringify(err)) })
                gridL.onLoad(() => { this.sideGridAdL.push(gridL) })
            } else if (this.sideGridAdR.length <= 0) {
                let gridR = Laya.Browser.window['wx'].createCustomAd({
                    adUnitId: this.sideGridId[i],
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
        if (!Laya.Browser.onWeiXin) return
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
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < 2; i++) {
            let grid = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.fullSingleGridId[i],
                adIntervals: 30,
                style: {
                    left: i == 0 ? this.getSystemInfoSync().screenWidth - 60 : this.getSystemInfoSync().screenWidth,
                    top: this.getSystemInfoSync().screenHeight - 120
                }
            });
            grid.onError((err) => { ; console.log('全屏单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.fullSingleGridAd.push(grid) })
        }
    }
    static visibleFullSingleGridAd(v: boolean = true) {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < this.fullSingleGridAd.length; i++) {
            v ? this.fullSingleGridAd[i].show() : this.fullSingleGridAd[i].hide()
        }
    }

    //格子宝箱单格子
    static midBoxGridAd: any[] = []
    private static createMidBoxGrid() {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < 2; i++) {
            let grid = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.boxGridId[i],
                adIntervals: SGConfig.data.front_box_dangezi_time / 1000,
                style: {
                    left: i == 0 ? this.getSystemInfoSync().screenWidth - 60 : this.getSystemInfoSync().screenWidth,
                    top: this.getSystemInfoSync().screenHeight / 2 - 60
                }
            });
            grid.onError((err) => { ; console.log('格子宝箱单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.midBoxGridAd.push(grid) })
        }
    }
    static visibleMidBoxGridAd(v: boolean = true) {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < this.midBoxGridAd.length; i++) {
            v ? this.midBoxGridAd[i].show() : this.midBoxGridAd[i].hide()
        }
    }
    //第一宝箱单格子
    static firstBoxGridAd: any[] = []
    private static createFirstBoxGrid() {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < 2; i++) {
            let grid = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.boxGridId[i + 2],
                adIntervals: SGConfig.data.front_box_dangezi_time / 1000,
                style: {
                    left: i == 0 ? this.getSystemInfoSync().screenWidth - 60 : this.getSystemInfoSync().screenWidth,
                    top: this.getSystemInfoSync().screenHeight - 120
                }
            });
            grid.onError((err) => { ; console.log('第一宝箱单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.firstBoxGridAd.push(grid) })
        }
    }
    static visibleFirstBoxGridAd(v: boolean = true) {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < this.firstBoxGridAd.length; i++) {
            v ? this.firstBoxGridAd[i].show() : this.firstBoxGridAd[i].hide()
        }
    }
    //第二宝箱单格子
    static secondBoxGridAd: any[] = []
    private static createSecondBoxGrid() {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < 2; i++) {
            let grid = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.boxGridId[i + 4],
                adIntervals: SGConfig.data.front_box_dangezi_time / 1000,
                style: {
                    left: i == 0 ? this.getSystemInfoSync().screenWidth - 60 : this.getSystemInfoSync().screenWidth,
                    top: this.getSystemInfoSync().screenHeight - 120
                }
            });
            grid.onError((err) => { ; console.log('第二宝箱单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.secondBoxGridAd.push(grid) })
        }
    }
    static visibleSecondBoxGridAd(v: boolean = true) {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < this.secondBoxGridAd.length; i++) {
            v ? this.secondBoxGridAd[i].show() : this.secondBoxGridAd[i].hide()
        }
    }
    //游戏中单格子
    static gameGridAd: any[] = []
    private static createGameGrid() {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < 2; i++) {
            let grid = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.gameGridId[i],
                adIntervals: 30,
                style: {
                    left: i == 0 ? 0 : this.getSystemInfoSync().screenWidth - 60,
                    top: this.getSystemInfoSync().screenHeight * 0.2
                }
            });
            grid.onError((err) => { ; console.log('游戏中单格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.gameGridAd.push(grid) })
        }
    }
    static visibleGameGridAd(v: boolean = true) {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < this.gameGridAd.length; i++) {
            v ? this.gameGridAd[i].show() : this.gameGridAd[i].hide()
        }
    }
    //结算页多格子
    static finishGridAd: any[] = []
    private static createFinishGrid() {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < 1; i++) {
            let grid = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.finishGridId[i],
                adIntervals: 30,
                style: {
                    left: 0,
                    top: this.getSystemInfoSync().screenHeight / 2 - this.getSystemInfoSync().screenWidth / 2 - 50,
                    width: this.getSystemInfoSync().screenWidth
                }
            });
            grid.onError((err) => { ; console.log('结算页多格子加载失败:', JSON.stringify(err)) })
            grid.onLoad(() => { this.finishGridAd.push(grid) })
        }
    }
    static visibleFinishGridAd(v: boolean = true) {
        if (!Laya.Browser.onWeiXin) return
        for (let i = 0; i < this.finishGridAd.length; i++) {
            v ? this.finishGridAd[i].show() : this.finishGridAd[i].hide()
        }
    }

    //插屏广告
    private static intersititialAd: any = null
    private static intersititialCB: Function = null
    private static intersititialError: boolean = false
    private static createInterstitialAd() {
        if (!Laya.Browser.onWeiXin) return
        if (this.intersititialAd) {
            this.intersititialAd.offError()
            this.intersititialAd.offLoad()
            this.intersititialAd.offClose()
            this.intersititialAd.destroy();
            this.intersititialAd = null
        }
        this.intersititialAd = Laya.Browser.window['wx'].createInterstitialAd({
            adUnitId: this.interstitialId[0]
        })
        this.intersititialAd.onError((err) => { this.intersititialError = true; console.log('插屏广告加载失败:', JSON.stringify(err)) })
        this.intersititialAd.onLoad(() => { this.intersititialError = false })
        this.intersititialAd.onClose(() => { this.intersititialCB && this.intersititialCB() })
        this.intersititialAd.load()
    }
    static showInterstitialAd(cb?: Function) {
        if (!Laya.Browser.onWeiXin || !this.intersititialAd || this.intersititialError) {
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