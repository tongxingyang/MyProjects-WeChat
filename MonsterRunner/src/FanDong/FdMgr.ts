import FdAd from "./FdAd";

export default class FdMgr {
    static version: string = '1.0.0'
    static wuchuProgressValue = 0;
    static wuchuProgressStepAdd = 0.1;
    static wuchuProgressFrameSub = 0.0032;
    static gameCount: number = 1
    static isPure: boolean = true

    /**随机目标误触值 */
    public static randTouchProgress() {
        if (this.wuchuProgressValue < 0.19) {
            this.wuchuProgressValue = this.getRangeNumer(0.08, 0.3);
        }
        else {
            this.wuchuProgressValue = this.getRangeNumer(this.wuchuProgressValue - 0.19 + 0.08, this.wuchuProgressValue - 0.19 + 0.3);
        }
    }

    static getRangeNumer(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    /**banner闪烁 */
    static bannerShowHide() {
        FdAd.hideBannerAd();
        Laya.timer.once(1000, this, () => {
            FdAd.showBannerAd();
            Laya.timer.once(800, this, () => {
                this.bannerShowHide();
            });
        });
    }

    /**初始化策略--游戏最开始入口调用 */
    static init(cb: Function) {
        //FdAd.inidAd();
        this.randTouchProgress();
        if (Laya.Browser.onWeiXin) {
            this.getConfig(cb);
        } else {
            cb && cb()
        }
    }

    /**游戏加载--进入加载页调用 */
    static loadGame(cb?) {
        var closeVideo = () => {
            this.showReMen(() => {
                if (this.gridBoxVideo) {
                    FdAd.showVideoAd()
                }
                this.showBox2(cb)
            });
        }

        if (this.loadingVideo) {
            FdAd.showVideoAd(null, closeVideo);
        }
        else {
            closeVideo();
        }
    }

    /**热门推荐 */
    static showReMen(cb?) {
        if (this.showRemen) {
            Laya.Scene.open(SceneType.Remen, false, { ccb: () => { cb && cb() } });
        }
        else {
            cb && cb();
        }
    }
    /**开始游戏热门推荐 */
    static showStartReMen(cb?) {
        if (this.startRemen) {
            Laya.Scene.open(SceneType.Remen, false, { ccb: () => { cb && cb() } });
        }
        else {
            cb && cb();
        }
    }
    /**结束游戏热门推荐 */
    static showOverReMen(cb?) {
        if (this.endRemen) {
            Laya.Scene.open(SceneType.Remen, false, { ccb: () => { cb && cb() } });
        }
        else {
            cb && cb();
        }
    }

    /**宝箱1 */
    static showBox1(cb?) {
        if (this.bannerBox) {
            Laya.Scene.open(SceneType.Box1, false, { closeCB: cb }, Laya.Handler.create(this, (s) => {
                Laya.stage.addChild(s);
                s.size(Laya.stage.width, Laya.stage.height);
            }));
        }
        else {
            cb && cb();
        }
    }

    /**宝箱2 */ //换成宝箱1
    static showBox2(cb?) {
        if (this.gridBox) {
            Laya.Scene.open(SceneType.Box1, false, { closeCB: cb }, Laya.Handler.create(this, (s) => {
                Laya.stage.addChild(s);
                s.size(Laya.stage.width, Laya.stage.height);
            }));
        }
        else {
            cb && cb();
        }
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
                        this.showBox1(cb);
                    }
                }
            })
        }
        else {
            this.showBox1(cb);
        }
    }

    /**进入首页 */
    static inHomePage(cb?) {
        FdAd.visibleSideGridAd()
        FdAd.visibleTopGrid()
        if (this.banner_gezi_switch) {
            FdAd.showBannerAd()
        } else {
            FdAd.visibleBottomGridAd()
        }

        if (this.homepageVideo) {
            FdAd.showVideoAd(null, cb);
        }
        else {
            cb && cb();
        }
    }

    /**开始游戏 */
    static startGame(cb?) {
        FdAd.hideBannerAd()
        FdAd.visibleSideGridAd(false)
        FdAd.visibleBottomGridAd(false)
        FdAd.visibleTopGrid(false)
        if (this.startVideo) {
            FdAd.showVideoAd(null, () => {
                this.showVirtualWxpage(() => {
                    this.showStartReMen(cb)
                })
            });
        }
        else {
            this.showVirtualWxpage(() => {
                this.showStartReMen(cb)
            })
        }
    }

    /**进入游戏页 */
    static inGame() {
        FdAd.showBannerAd()
        FdAd.visibleSideGridAd()
        FdAd.visibleTopGrid()
    }

    /**游戏结束 */
    static showGameOver(cb?: Function) {
        FdAd.hideBannerAd()
        FdAd.visibleSideGridAd(false)
        FdAd.visibleTopGrid(false)
        this.showOverReMen(cb)
    }

    /**进入结算页 */
    static inFinish(backBtn?: any) {
        FdAd.visibleSideGridAd()
        FdAd.hideBannerAd()
        FdAd.visibleTopGrid()
        if (this.endBanner) {
            this.bannerShowHide()
            if (backBtn)
                backBtn.bottom = 20
        } else {
            if (backBtn)
                backBtn.bottom = 300
            if (this.banner_gezi_switch) {
                FdAd.showBannerAd()
            } else {
                FdAd.visibleBottomGridAd()
            }
        }
    }

    /**关闭结算页 */
    static closeFinish(cb?: Function) {
        Laya.timer.clearAll(this)
        FdAd.hideBannerAd()
        FdAd.visibleBottomGridAd(false)
        FdAd.visibleSideGridAd(false)
        FdAd.visibleTopGrid(false)
        this.gameCount++
        this.loadGame(() => {
            cb && cb()
        })
    }

    /**屏蔽场景值 */
    public static get allowScene() {
        if (Laya.Browser.onWeiXin && this.jsonConfig.sceneList) {
            var launchInfo = Laya.Browser.window['wx'].getLaunchOptionsSync();
            //console.log("当前场景：", launchInfo.scene);
            let scene: string = launchInfo.scene.toString();
            let arr: string[] = this.jsonConfig.sceneList.split(',');
            return arr.indexOf(scene) != -1;
        }
        return true;
    }

    static jsonConfig: config;
    static getConfig(cb: Function) {
        var launchInfo = Laya.Browser.window['wx'].getLaunchOptionsSync();
        console.log("当前场景：", launchInfo.scene);
        console.log('wxsdk初始化')
        window['wxsdk'].init({
            version: '1.0.0', // 当前的小游戏版本号，只能以数字
            appid: '293', // 此项目在云平台的appid
            secret: '073zg3jv3a8gduh01ig16tzq4bxajspb', // 此项目在云平台的secret, 用于与后端通信签名
            share: {
                title: '你能过得了这一关吗？', // 默认分享文案
                image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
            },
        })
        window['wxsdk'].onInit(() => {
            console.log('wxsdk初始化成功:', window['wxsdk'].user)
            let conf: config = new config()
            conf.allowMistouch = window['wxsdk'].conf.allowMistouch
            conf.bannerBox = window['wxsdk'].conf.bannerBox
            conf.gridBox = window['wxsdk'].conf.gridBox
            conf.startVideo = window['wxsdk'].conf.startVideo
            conf.homepageVideo = window['wxsdk'].conf.homepageVideo
            conf.gridBoxVideo = window['wxsdk'].conf.gridBoxVideo
            conf.showRemen = window['wxsdk'].conf.showRemen
            conf.sceneList = window['wxsdk'].conf.sceneList
            conf.version = window['wxsdk'].conf.version
            conf.showVitualWx = window['wxsdk'].conf.showVitualWx
            conf.refresh_banner_time = window['wxsdk'].conf.refresh_banner_time
            conf.channel_ditch = window['wxsdk'].conf.channel_ditch
            conf.updateBanner = window['wxsdk'].conf.updateBanner
            conf.loadingVideo = window['wxsdk'].conf.loadingVideo
            conf.remenBanner = window['wxsdk'].conf.remenBanner
            conf.delay_play_count = window['wxsdk'].conf.delay_play_count
            conf.delay_play_countBanner = window['wxsdk'].conf.delay_play_countBanner
            conf.delay_play_countVideo = window['wxsdk'].conf.delay_play_countVideo
            conf.banner_gezi_switch = window['wxsdk'].conf.banner_gezi_switch
            conf.loadingGezi = window['wxsdk'].conf.loadingGezi
            conf.vitualWx_count = window['wxsdk'].conf.vitualWx_count
            conf.endBanner = window['wxsdk'].conf.endBanner
            conf.bannerBox_count = window['wxsdk'].conf.bannerBox_count
            conf.remenBanner_count = window['wxsdk'].conf.remenBanner_count
            conf.startRemen = window['wxsdk'].conf.startRemen
            conf.endRemen = window['wxsdk'].conf.endRemen
            this.jsonConfig = conf
            console.log('config:', this.jsonConfig)

            if (this.jsonConfig.channel_ditch && !window['wxsdk'].user.channel) {
                this.jsonConfig.allowMistouch = false;
                console.log('config1:', this.jsonConfig)
            }
            //初始化广告
            FdAd.inidAd();
            cb && cb()
        })
        window['wxsdk'].login();
    }

    static get isVersionValid() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }

    static get canTrapAll() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }
    static get bannerBox() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.bannerBox && this.gameCount >= this.jsonConfig.delay_play_count;
    }
    static get gridBox() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.gridBox && this.gameCount >= this.jsonConfig.delay_play_count;
    }
    static get startVideo() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.startVideo && this.gameCount >= this.jsonConfig.delay_play_countVideo;
    }
    static get homepageVideo() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.homepageVideo && this.gameCount >= this.jsonConfig.delay_play_count;
    }
    static get gridBoxVideo() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.gridBoxVideo && this.gameCount >= this.jsonConfig.delay_play_count;
    }
    static get showRemen() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.jsonConfig.showRemen;
    }
    static get showVitualWx() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.showVitualWx && this.gameCount >= this.jsonConfig.delay_play_countVideo;
    }
    static get loadingVideo() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.loadingVideo;
    }
    static get remenBanner() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.remenBanner && this.gameCount >= this.jsonConfig.delay_play_countBanner;
    }
    static get banner_gezi_switch() {
        if (!Laya.Browser.onWeiXin || this.isPure) return true
        return this.jsonConfig.banner_gezi_switch;
    }
    static get loadingGezi() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.loadingGezi;
    }
    static get endBanner() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.canTrapAll && this.jsonConfig.endBanner && this.gameCount >= this.jsonConfig.delay_play_countBanner;
    }
    static get startRemen() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.jsonConfig.startRemen;
    }
    static get endRemen() {
        if (!Laya.Browser.onWeiXin || this.isPure) return false
        return this.jsonConfig.endRemen;
    }
}

class config {
    allowMistouch: boolean;
    bannerBox: boolean;
    gridBox: boolean;
    startVideo: boolean;
    homepageVideo: boolean;
    gridBoxVideo: boolean;
    showRemen: boolean;
    sceneList: string;
    version: string;
    showVitualWx: boolean;
    refresh_banner_time: number;
    channel_ditch: boolean;
    updateBanner: number;
    loadingVideo: boolean;
    remenBanner: boolean;
    delay_play_count: number;
    delay_play_countBanner: number;
    delay_play_countVideo: number;
    banner_gezi_switch: boolean;
    loadingGezi: boolean;
    vitualWx_count: number;
    endBanner: boolean;
    bannerBox_count: number;
    remenBanner_count: number;
    startRemen: boolean;
    endRemen: boolean;
}

enum SceneType {
    Remen = "FDScene/Remen.scene",
    VitrualWx = "FDScene/VitrualWx.scene",
    Box1 = "FDScene/Box1.scene",
    Box2 = "FDScene/Box2.scene"
}