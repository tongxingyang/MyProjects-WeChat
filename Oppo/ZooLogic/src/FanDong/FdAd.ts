import FdMgr from "./FdMgr";
import NativeAd from "./NativeAd";

export default class FdAd {
    static get oppoPlatform() {
        return Laya.Browser.onQGMiniGame
    }

    static shareNativeAd: NativeAd = null

    static initAllAd() {
        if (!this.oppoPlatform) return
        this.shareNativeAd = new NativeAd()
        this.createVideo()
        this.createBanner()
        this.createGamePortalAd()
    }

    /**Banner */
    private static bannerIdArr: string[] = [];
    private static bannerAdArr: any[] = []
    private static bannerIndex: number = 0
    private static bannerErrorArr: boolean[] = []
    private static createBanner() {
        if (!this.oppoPlatform || !FdMgr.jsonConfig.is_bannerAd) return

        this.bannerIdArr = FdMgr.jsonConfig.array_bannerId
        this.bannerErrorArr = []
        for (let i = 0; i < this.bannerIdArr.length; i++) {
            this.bannerErrorArr.push(true)
        }
        for (let i = 0; i < this.bannerIdArr.length; i++) {
            let bannerAd: any = this.getBannerAd(i)
            this.bannerAdArr.push(bannerAd)
        }
    }

    private static getBannerAd(index: number) {
        let bannerAd: any = window['qg'].createBannerAd({
            adUnitId: this.bannerIdArr[index]
        })
        bannerAd.onLoad(() => {
            console.log('banner加载成功：', index)
            this.bannerErrorArr[index] = false
        })
        bannerAd.onError((err) => {
            console.log('banner加载失败：', err)
            this.bannerErrorArr[index] = true
        })
        bannerAd.show()
        bannerAd.hide()
        return bannerAd
    }

    static showBanner() {
        if (!this.oppoPlatform || !this.bannerAdArr[this.bannerIndex] || !FdMgr.isOneMinutedAd) {
            return
        }
        this.hideBanner()
        this.bannerAdArr[this.bannerIndex].show()
        this.bannerIndex++
        if (this.bannerIndex >= this.bannerAdArr.length) {
            this.bannerIndex = 0
        }
    }

    static hideBanner() {
        if (!this.oppoPlatform) return
        for (let i = 0; i < this.bannerAdArr.length; i++) {
            if (!this.bannerErrorArr[i]) this.bannerAdArr[i].hide()
        }
    }
    /**Banner */

    private static rewardedAd: any = null
    private static videoLoading: boolean = false
    private static videoLoaded: boolean = false
    private static videoCCB: Function = null
    private static videoCompleteCB: Function = null
    /* 激励视频 */
    private static createVideo() {
        this.rewardedAd = Laya.Browser.window['qg'].createRewardedVideoAd({
            posId: FdMgr.jsonConfig.array_videoId[0],
        });
        this.rewardedAd.load();
        this.videoLoading = true
        this.rewardedAd.onError(err => {
            this.videoLoaded = false
            this.videoLoading = false
            this.videoCompleteCB && this.videoCompleteCB()
            this.videoCompleteCB = null
            console.log("激励视频广告加载失败", JSON.stringify(err));
        });
        this.rewardedAd.onLoad(() => {
            console.log('加载视频成功')
            this.videoLoaded = true
            this.videoLoading = false
        })
        const func = (res) => {
            if (res && res.isEnded) {
                this.videoCCB && this.videoCCB()
            }
            this.videoCompleteCB && this.videoCompleteCB()
            this.videoCCB = null
            this.videoLoaded = false
            this.videoLoading = true
            this.rewardedAd.load();
        }
        this.rewardedAd.onClose(func);
    }
    private static loadVideo() {
        this.videoLoaded = false
        this.videoLoading = true
        this.rewardedAd.load()
    }
    static showVideo(cb: Function, completeCB?: Function) {
        if (!this.oppoPlatform || !FdMgr.isOneMinutedAd) {
            cb && cb()
            completeCB && completeCB()
            return;
        }
        this.videoCCB = cb
        this.videoCompleteCB = completeCB

        if (this.videoLoading) {
            console.log('激励视频广告正在加载中！')
            this.videoCompleteCB && this.videoCompleteCB()
        } else {
            if (this.videoLoaded) {
                this.rewardedAd.show().then().catch(() => {
                    this.videoCompleteCB && this.videoCompleteCB()
                })
            } else {
                this.videoCompleteCB && this.videoCompleteCB()
                this.videoCCB && this.videoCCB()
                this.loadVideo()
            }
        }
    }
    /* 激励视频  End*/

    /**互推盒子九宫格广告 */
    private static gamePortalAd: any = null
    private static gamePortalAdError: boolean = false
    private static gamePortalCCB: Function = null
    private static createGamePortalAd() {
        if (!this.oppoPlatform) return
        this.gamePortalAd = Laya.Browser.window['qg'].createGamePortalAd({
            adUnitId: FdMgr.jsonConfig.array_gamePortalID[0]
        })
        this.gamePortalAd.load()
        this.gamePortalAd.onError(() => {
            this.gamePortalAdError = true
            this.gamePortalCCB && this.gamePortalCCB()
            console.log('互推盒子九宫格广告创建失败')
        })
        this.gamePortalAd.onLoad(() => {
            this.gamePortalAdError = false
            console.log('互推盒子九宫格广告创建成功')
        })
        this.gamePortalAd.onClose(() => {
            this.gamePortalCCB && this.gamePortalCCB()
        })
    }
    static showGamePortalAd(ccb?: Function) {
        if (!this.oppoPlatform || !this.gamePortalAd || this.getGameportalAdError() || !FdMgr.isOneMinutedAd) {
            ccb && ccb()
            return
        }
        this.gamePortalCCB = ccb
        this.gamePortalAd.show()
    }
    static getGameportalAdError() {
        return this.gamePortalAdError
    }
    /**互推盒子九宫格广告 */

    //打乱数组
    private static shuffleArr(arr: any[]) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }
    private static getRandomItemInArrWithoutSelf(self: any, arr: any[], count: number = 1) {
        let temp: any = [].concat(arr)
        temp.splice(temp.indexOf(self), 1)
        temp = this.shuffleArr(temp)
        return temp.slice(0, count)
    }
    private static getRandomItemInArr(arr: any[]): any {
        return arr[Math.floor(Math.random() * arr.length)]
    }
}