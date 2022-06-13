import FdAd from "./FdAd";

export default class FdMgr {
    static version: string = '1.0.1'
    static appid: string = ''
    static secret: string = ''
    static wuchuProgressValue = 0;
    static wuchuProgressStepAdd = 0.2;
    static wuchuProgressFrameSub = 0.01;
    static gameCount: number = 1

    /**随机目标误触值 */
    public static randTouchProgress() {
        this.wuchuProgressValue = this.getRangeNumer(0.3, 0.8);
    }

    static getRangeNumer(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    /**banner闪烁 */
    static bannerShowHide() {
        FdAd.hideBannerAd();
        Laya.timer.once(600, this, () => {
            FdAd.showBannerAd();
            Laya.timer.once(800, this, () => {
                this.bannerShowHide();
            });
        });
    }

    /**伪banner闪烁 */
    static videoBannerShowHide() {
        FdMgr.visibleVideoBanner(false, false)
        Laya.timer.once(600, this, () => {
            FdMgr.visibleVideoBanner(true, false)
            Laya.timer.once(800, this, () => {
                this.videoBannerShowHide();
            });
        });
    }

    /**初始化策略--游戏最开始入口调用 */
    static init(cb: Function) {
        this.randTouchProgress();
        if (Laya.Browser.onWeiXin) {
            Laya.loader.load('WXSDK/FDConfig.json', Laya.Handler.create(this, (data) => {
                FdMgr.version = data.version;
                FdMgr.appid = data.appid;
                FdMgr.secret = data.secret;
                this.getConfig(cb);
            }), null, Laya.Loader.JSON);
        } else {
            cb && cb()
        }
    }

    /**游戏加载--进入加载页调用 */
    static loadGame(cb?) {
        this.showReMen(() => {
            this.showBox1(cb)
        });
    }

    /**首页UI */
    static showHomeUI(v: boolean) {
        if (v)
            Laya.Scene.open(SceneType.HomeUI, false)
        else
            Laya.Scene.close(SceneType.HomeUI)
    }
    /**首页热门推荐 */
    static showHomeUIReMen(cb?) {
        Laya.Scene.open(SceneType.Remen, false, { ccb: cb })
    }
    /**热门推荐 */
    static showReMen(cb?) {
        if (this.showRemen) {
            Laya.Scene.open(SceneType.Remen, false, { ccb: cb })
        }
        else {
            cb && cb();
        }
    }
    /**开始游戏热门推荐 */
    static showStartReMen(cb?) {
        if (this.startRemen) {
            Laya.Scene.open(SceneType.Remen, false, { ccb: cb })
        }
        else {
            cb && cb();
        }
    }
    /**游戏结束热门推荐 */
    static showEndReMen(cb?) {
        if (this.endRemen) {
            Laya.Scene.open(SceneType.Remen, false, { ccb: cb, showAdPic: this.endRemen_switch })
        }
        else {
            cb && cb();
        }
    }

    /**宝箱1 */
    static showBox1(cb?) {
        if (this.firstBox) {
            Laya.Scene.open(SceneType.Box1, false, { ccb: cb, type: this.firstBox_switch ? BoxType.Box_VideoBanner : BoxType.Box_Banner })
        }
        else {
            cb && cb();
        }
    }

    /**宝箱2 */
    static showBox2(cb?) {
        if (this.bannerBox) {
            Laya.Scene.open(SceneType.Box1, false, { ccb: cb, type: this.bannerBox_switch ? BoxType.Box_VideoBanner : BoxType.Box_Banner })
        }
        else {
            cb && cb();
        }
    }

    /**伪banner */
    static visibleVideoBanner(visible: boolean, showFinger: boolean = true) {
        if (visible)
            Laya.Scene.open(SceneType.VideoBanner, false, { showFinger: showFinger })
        else
            Laya.Scene.close(SceneType.VideoBanner)
    }

    /**仿微信页 */
    static showVirtualCount: number = 0
    static showVirtualWxpage(cb?: Function) {
        if (this.showVitualWx && Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].showModal({
                title: '提示',
                content: '未观看完广告无法获取奖励，是否继续？',
                success: (res) => {
                    if (this.showVirtualCount < this.jsonConfig.vitualWx_count) {
                        this.showVirtualCount++
                        FdAd.showVideoAd(null, () => { this.showVirtualWxpage(cb) });
                    } else {
                        this.showVirtualCount = 0
                        cb && cb()
                    }
                }
            })
        }
        else {
            cb && cb()
        }
    }

    /**进入首页 */
    static inHomePage(cb?) {
        this.showHomeUI(true)
        FdAd.showInterstitialAd()
        FdAd.visibleSideGridAd()
        FdAd.showBannerAd()

        cb && cb();
    }

    /**进入商店 */
    static inShop() {
        this.showHomeUI(false)
        FdAd.hideBannerAd()
        FdAd.visibleSideGridAd(false)
        FdAd.visibleBottomGridAd(false)
    }

    /**开始游戏 */
    static startGame(cb?) {
        this.showHomeUI(false)
        FdAd.hideBannerAd()
        FdAd.visibleSideGridAd(false)
        FdAd.visibleBottomGridAd(false)
        FdAd.showInterstitialAd(() => {
            this.showStartReMen(() => {
                this.showBox2(() => {
                    this.showVirtualWxpage(cb)
                })
            })
        })
    }

    /**进入游戏页 */
    static inGame() {
        FdAd.showBannerAd()
        FdAd.visibleSingleGridAd()
    }

    /**游戏结束 */
    static showGameOver(cb?: Function) {
        this.visibleVideoBanner(false)
        FdAd.hideBannerAd()
        FdAd.visibleSingleGridAd(false)
        this.showEndReMen(cb)
    }

    /**进入结算页 */
    static inFinish(backBtn?: any) {
        FdAd.showInterstitialAd()
        FdAd.visibleSideGridAd()
        FdAd.hideBannerAd()
        if (this.endBanner) {
            if (this.endBanner_switch)
                this.videoBannerShowHide()
            else
                this.bannerShowHide()
            if (backBtn)
                backBtn.bottom = 20
        } else {
            if (backBtn)
                backBtn.bottom = 300
            FdAd.showBannerAd()
        }
    }

    /**关闭结算页 */
    static closeFinish(cb?: Function) {
        Laya.timer.clearAll(this)
        FdAd.visibleBottomGridAd(false)
        FdAd.visibleSideGridAd(false)
        this.visibleVideoBanner(false)
        FdAd.hideBannerAd()
        this.gameCount++
        this.loadGame(() => {
            cb && cb()
        })
    }

    /**屏蔽场景值 */
    public static get allowScene() {
        if (Laya.Browser.onWeiXin && this.jsonConfig.sceneList) {
            var launchInfo = Laya.Browser.window['wx'].getLaunchOptionsSync();
            let scene: string = launchInfo.scene.toString();
            let arr: string[] = this.jsonConfig.sceneList.split(',');
            return arr.indexOf(scene) != -1;
        }
        return true;
    }

    static jsonConfig: config;
    static getConfig(cb: Function) {
        window['wxsdk'].init({
            version: FdMgr.version, // 当前的小游戏版本号，只能以数字
            appid: FdMgr.appid, // 此项目在云平台的appid
            secret: FdMgr.secret, // 此项目在云平台的secret, 用于与后端通信签名
            share: {
                title: '你能过得了这一关吗？', // 默认分享文案
                image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
            },
        })
        window['wxsdk'].onInit(() => {
            console.log('wxsdk初始化成功:', window['wxsdk'])
            let conf: config = new config()
            for (let key in conf) {
                conf[key] = window['wxsdk'].conf[key]
            }

            this.jsonConfig = window['wxsdk'].conf
            console.log('config:', this.jsonConfig)

            if (this.jsonConfig.channel_ditch && !window['wxsdk'].user.channel) {
                this.jsonConfig.allowMistouch = false;
                console.log('config1:', this.jsonConfig)
            }
            //初始化广告
            FdAd.bannerIdArr = window['wxsdk'].conf.bannerIds ? window['wxsdk'].conf.bannerIds.split(',') : []
            FdAd.videoId = window['wxsdk'].conf.videoIds ? window['wxsdk'].conf.videoIds.split(',') : []
            FdAd.fullGridId = window['wxsdk'].conf.fullGridIds ? window['wxsdk'].conf.fullGridIds.split(',') : []
            FdAd.bottomGridId = window['wxsdk'].conf.bottomGridIds ? window['wxsdk'].conf.bottomGridIds.split(',') : []
            FdAd.sideGridId = window['wxsdk'].conf.sideGridIds ? window['wxsdk'].conf.sideGridIds.split(',') : []
            FdAd.singleGridId = window['wxsdk'].conf.singleGridIds ? window['wxsdk'].conf.singleGridIds.split(',') : []
            FdAd.interstitialId = window['wxsdk'].conf.interstitialIds ? window['wxsdk'].conf.interstitialIds.split(',') : []
            FdAd.inidAd(() => {
                cb && cb()
            });
        })
        window['wxsdk'].login();
    }

    static get isVersionValid() {
        if (!Laya.Browser.onWeiXin) return false
        return this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }

    static get canTrapAll() {
        if (!Laya.Browser.onWeiXin) return false
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }
    static get showRemen() {
        if (!Laya.Browser.onWeiXin) return false
        return this.jsonConfig.showRemen;
    }
    static get startRemen() {
        if (!Laya.Browser.onWeiXin) return false
        return this.jsonConfig.startRemen
    }
    static get showVitualWx() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.showVitualWx
    }
    static get remenBanner() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.remenBanner
    }
    static get endRemen() {
        if (!Laya.Browser.onWeiXin) return false
        return this.jsonConfig.endRemen
    }
    static get endRemen_switch() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.endRemen_switch
    }
    static get firstBox() {
        if (!Laya.Browser.onWeiXin) return false
        let show = false
        if (this.jsonConfig.firstBox_interval_level <= 0) show = this.gameCount >= this.jsonConfig.firstBox_level
        else show = this.gameCount >= this.jsonConfig.firstBox_level &&
            Math.floor((this.gameCount - this.jsonConfig.firstBox_level) % (this.jsonConfig.firstBox_interval_level + 1)) == 0

        return this.canTrapAll && this.jsonConfig.firstBox && show
    }
    static get firstBox_switch() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.firstBox_switch
    }
    static get bannerBox() {
        if (!Laya.Browser.onWeiXin) return false
        let show = false
        if (this.jsonConfig.bannerBox_interval_level <= 0) show = this.gameCount >= this.jsonConfig.bannerBox_level
        else show = this.gameCount >= this.jsonConfig.bannerBox_level &&
            Math.floor((this.gameCount - this.jsonConfig.bannerBox_level) % (this.jsonConfig.bannerBox_interval_level + 1)) == 0

        return this.canTrapAll && this.jsonConfig.bannerBox && show
    }
    static get bannerBox_switch() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.bannerBox_switch
    }
    static get endBanner() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.endBanner
    }
    static get endBanner_switch() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.endBanner_switch
    }
    static get homeViedo() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.homeViedo
    }
}

class config {
    allowMistouch: boolean;
    bannerBox: boolean;
    bannerBox_switch: boolean;
    showRemen: boolean;
    sceneList: string;
    version: string;
    showVitualWx: boolean;
    refresh_banner_time: number;
    channel_ditch: boolean;
    updateBanner: number;
    remenBanner: boolean;
    vitualWx_count: number;
    endBanner: boolean;
    endBanner_switch: boolean;
    bannerBox_count: number;
    remenBanner_count: number;
    startRemen: boolean;
    endRemen: boolean;
    endRemen_switch: boolean;
    firstBox_switch: boolean;
    firstBox: boolean;
    homeViedo: boolean;
    firstBox_level: number;
    bannerBox_level: number;
    firstBox_interval_level: number;
    bannerBox_interval_level: number;
}

enum SceneType {
    Remen = "FDScene/Remen.scene",
    Box1 = "FDScene/Box1.scene",
    VideoBanner = "FDScene/VideoBanner.scene",
    HomeUI = "FDScene/HomeUI.scene"
}

export enum BoxType {
    Box_Banner,
    Box_VideoBanner
}