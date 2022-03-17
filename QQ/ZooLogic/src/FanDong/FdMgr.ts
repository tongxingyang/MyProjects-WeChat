import FdAd from "./FdAd";

export default class FdMgr {
    static version: string = '1.0.0'
    static wuchuProgressValue = 0;
    static wuchuProgressStepAdd = 0.1;
    static wuchuProgressFrameSub = 0.0032;
    static gameCount: number = 1

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

    /**初始化策略--游戏最开始入口调用 */
    static init(cb: Function) {
        if (!localStorage.getItem('showPrivacy')) {
            localStorage.setItem('showPrivacy', "1")
            this.showPrivacyUI(() => {
                this.randTouchProgress();
                if (Laya.Browser.onWeiXin) {
                    this.getConfig(cb);
                } else {
                    cb && cb()
                }
            })
        } else {
            this.randTouchProgress();
            if (Laya.Browser.onWeiXin) {
                this.getConfig(cb);
            } else {
                cb && cb()
            }
        }
    }

    /**宝箱1 */  //banner
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

    /**宝箱2 */ //盒子
    static showBox2(cb?) {
        if (this.gridBox) {
            Laya.Scene.open(SceneType.Box2, false, { closeCB: cb }, Laya.Handler.create(this, (s) => {
                Laya.stage.addChild(s);
                s.size(Laya.stage.width, Laya.stage.height);
            }));
        }
        else {
            cb && cb();
        }
    }

    /**返回首页页面 */
    static showBackToHome(cb?: Function) {
        Laya.Scene.open(SceneType.BackToHome, false, { closeCB: cb }, Laya.Handler.create(this, (s) => {
            Laya.stage.addChild(s);
            s.size(Laya.stage.width, Laya.stage.height);
        }));
    }

    /**隐私协议界面 */
    static showPrivacyUI(cb?: Function) {
        Laya.Scene.open(SceneType.PrivacyUI, false, { closeCB: cb }, Laya.Handler.create(this, (s) => {
            Laya.stage.addChild(s);
            s.size(Laya.stage.width, Laya.stage.height);
        }));
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
    static inHomePage(homeScene: Laya.Scene) {
        FdAd.showBannerAd()
        if (this.showHezi) {
            FdAd.showBoxAd(() => {
                if (this.hzcloseVideo) {
                    FdAd.showVideoAd()
                }
            })
        }

        let privacyBtn: Laya.Image = new Laya.Image('fdRes/yxy_btn_ysxy.png')
        privacyBtn.anchorX = 0.5
        privacyBtn.anchorY = 0.5
        privacyBtn.top = 100
        privacyBtn.left = 50
        homeScene.addChild(privacyBtn)
        privacyBtn.off(Laya.Event.CLICK, this, this.showPrivacyUI)
        privacyBtn.on(Laya.Event.CLICK, this, this.showPrivacyUI, [null])
    }

    /**开始游戏 */
    static startGame(cb?) {
        FdAd.hideBannerAd()
        if (this.startVideo) {
            FdAd.showVideoAd(null, () => {
                this.showVirtualWxpage(cb)
            });
        }
        else {
            this.showVirtualWxpage(cb)
        }
    }

    /**进入游戏页 */
    static inGame() {
        this.showBox1(() => {
            FdAd.showBannerAd()
        })
    }

    /**游戏结束 */
    static showGameOver(cb?: Function) {
        FdAd.hideBannerAd()
        this.showBox2(cb)
    }

    /**进入结算页 */
    static inFinish(backBtn?: any) {
        FdAd.showBannerAd()
        if (this.BannerMove) {
            if (backBtn) {
                backBtn.bottom = 20
                backBtn.x = Laya.stage.displayWidth / 2
            }
            Laya.timer.once(500, this, () => {
                Laya.Tween.to(backBtn, { x: Laya.stage.displayWidth / 2, y: backBtn.y - 250 }, 1000, null, new Laya.Handler(this, () => { }))
            })
        } else {
            if (backBtn)
                backBtn.bottom = 300
        }

        if (this.showHezi) {
            FdAd.showBoxAd(() => {
                if (this.hzcloseVideo) {
                    FdAd.showVideoAd()
                }
            })
        }
    }

    /**关闭结算页 */
    static closeFinish(cb?: Function) {
        Laya.timer.clearAll(this)
        FdAd.hideBannerAd()
        this.showBackToHome(() => {
            cb && cb()
            this.gameCount++
        })
    }

    /**屏蔽场景值 */
    public static get allowScene() {
        if (Laya.Browser.onWeiXin && this.jsonConfig.sceneList && this.jsonConfig.sceneList.length > 0) {
            var launchInfo = Laya.Browser.window['wx'].getLaunchOptionsSync();
            let scene: string = launchInfo.scene.toString();
            let arr: string[] = this.jsonConfig.sceneList.split(',');
            return arr.indexOf(scene) < 0;
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
            appid: '379', // 此项目在云平台的appid
            secret: 'lsiwuerfyrqf3ytkdor3xgnvplr24fp1', // 此项目在云平台的secret, 用于与后端通信签名
            share: {
                title: '你能过得了这一关吗？', // 默认分享文案
                image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
            },
        })
        window['wxsdk'].onInit(() => {
            console.log('wxsdk初始化成功:', window['wxsdk'].user)
            let conf: config = new config()
            conf.allowMistouch = window['wxsdk'].conf.allowMistouch
            conf.sceneList = window['wxsdk'].conf.sceneList
            conf.version = window['wxsdk'].conf.version
            conf.startVideo = window['wxsdk'].conf.startVideo
            conf.showVitualWx = window['wxsdk'].conf.showVitualWx
            conf.vitualWx_count = window['wxsdk'].conf.vitualWx_count
            conf.bannerBox = window['wxsdk'].conf.bannerBox
            conf.gridBox = window['wxsdk'].conf.gridBox
            conf.BannerMove = window['wxsdk'].conf.BannerMove
            conf.returnhomeGridBox = window['wxsdk'].conf.returnhomeGridBox
            conf.finishVideo = window['wxsdk'].conf.finishVideo
            conf.showHezi = window['wxsdk'].conf.showHezi
            conf.hzcloseVideo = window['wxsdk'].conf.hzcloseVideo
            conf.delay_play_count = window['wxsdk'].conf.delay_play_count

            this.jsonConfig = conf
            console.log('config:', this.jsonConfig)

            //初始化广告
            FdAd.inidAd();
            cb && cb()
        })
        window['wxsdk'].login();
    }

    static get isVersionValid() {
        if (!Laya.Browser.onWeiXin) return false
        return this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }

    static get canTrapAll() {
        if (!Laya.Browser.onWeiXin) return false
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2] &&
            this.gameCount >= this.jsonConfig.delay_play_count;
    }
    static get startVideo() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.startVideo
    }
    static get showVitualWx() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.showVitualWx
    }
    static get bannerBox() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.bannerBox
    }
    static get gridBox() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.gridBox
    }
    static get BannerMove() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.BannerMove
    }
    static get returnhomeGridBox() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.returnhomeGridBox
    }
    static get finishVideo() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.finishVideo
    }
    static get showHezi() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.showHezi
    }
    static get hzcloseVideo() {
        if (!Laya.Browser.onWeiXin) return false
        return this.canTrapAll && this.jsonConfig.hzcloseVideo
    }
}

class config {
    allowMistouch: boolean;
    sceneList: string;
    version: string;
    startVideo: boolean;
    showVitualWx: boolean;
    vitualWx_count: number;
    bannerBox: boolean;
    gridBox: boolean;
    BannerMove: boolean;
    returnhomeGridBox: boolean;
    finishVideo: boolean;
    showHezi: boolean;
    hzcloseVideo: boolean;
    delay_play_count: number;
}

enum SceneType {
    VitrualWx = "FDScene/VitrualWx.scene",
    Box1 = "FDScene/Box1.scene",
    Box2 = "FDScene/Box2.scene",
    BackToHome = "FDScene/BackToHome.scene",
    PrivacyUI = "FDScene/PrivacyUI.scene"
}