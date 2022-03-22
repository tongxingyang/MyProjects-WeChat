import FdAd from "./FdAd";

export default class FdMgr {
    static version: string = '1.0.5'
    static wuchuProgressValue = 0;
    static wuchuProgressStepAdd = 0.1;
    static wuchuProgressFrameSub = 0.0032;

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
            console.log("关闭首次进入视频")
            this.showReMen(cb);
        }

        if (this.canForceVideo) {
            FdAd.showVideoAd(null, closeVideo);
        }
        else {
            closeVideo();
        }
    }

    /**热门推荐 */
    static showReMen(cb?) {
        if (this.canTrapRemen) {
            Laya.Scene.open(SceneType.Remen, false, null, Laya.Handler.create(this, s => {
                Laya.stage.addChild(s);
                s.size(Laya.stage.width, Laya.stage.height);

                if (!FdAd.showGridAD()) {
                    FdAd.initGridAD(() => { FdAd.showGridAD(); }, (Laya.Browser.clientWidth) * 0.5 - 150, 160);
                }

                this.bannerShowHide();
                FdAd.bannerIndex = 0;

                let btnContinue: Laya.Button = s.btnContinue;
                btnContinue.offAllCaller(this);
                btnContinue.on(Laya.Event.CLICK, this, () => {
                    Laya.timer.clearAll(this);
                    Laya.Scene.close(SceneType.Remen);
                    FdAd.hideBannerAd()
                    FdAd.hideGridAD();
                    if (this.canForceVideo)
                        FdAd.showVideoAd();
                    this.showBox2(cb);
                });
            }));
        }
        else {
            cb && cb();
        }
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

    /**宝箱1 */
    static showBox1(cb?) {
        if (this.canTrapBox) {
            Laya.timer.clearAll(this);
            FdAd.hideBannerAd()
            Laya.Scene.open(SceneType.Box1, false, { closeCB: cb }, Laya.Handler.create(this, (s) => {
                Laya.stage.addChild(s);
                s.size(Laya.stage.width, Laya.stage.height);
            }));
        }
        else {
            cb && cb();
        }
    }

    /**宝箱2 */
    static showBox2(cb?) {
        if (this.canTrapBox) {
            Laya.Scene.open(SceneType.Box2, false, { closeCB: cb }, Laya.Handler.create(this, (s) => {
                Laya.stage.addChild(s);
                s.size(Laya.stage.width, Laya.stage.height);
            }));
        }
        else {
            cb && cb();
        }
    }

    /**仿微信页 */
    static showVitrualWxpage(cb?: Function, type: number = 0) {
        if (this.canTrapVirtualWx && Laya.Browser.onWeiXin) {
            Laya.Browser.window.wx.showModal({
                title: '提示',
                content: '未观看完广告无法获取奖励，是否继续？',
                success: (res) => {
                    if (!this.canForceVideo) { this.showBox1(cb); return; }
                    let curVirType = res.confirm ? 1 : 2
                    if (type == 0) {
                        FdAd.showVideoAd(null, () => { this.showVitrualWxpage(cb, curVirType) });
                        return
                    }
                    if (type == curVirType) {
                        FdAd.showVideoAd(null, () => { this.showVitrualWxpage(cb, curVirType) });
                    } else {
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
        if (this.canForceVideo) {
            FdAd.showVideoAd(null, cb);
        }
        else {
            cb && cb();
        }
    }

    /**开始游戏 */
    static startGame(cb?) {
        var showVitrualWxpage = () => {
            this.showVitrualWxpage(cb);
        }

        if (this.canForceVideo) {
            FdAd.showVideoAd(null, showVitrualWxpage);
        }
        else {
            showVitrualWxpage();
        }
    }

    /**屏蔽场景值 */
    public static get allowScene() {
        if (Laya.Browser.onWeiXin) {
            var launchInfo = Laya.Browser.window.wx.getLaunchOptionsSync();
            //console.log("当前场景：", launchInfo.scene);
            let scene: string = launchInfo.scene.toString();
            let arr: string[] = this.jsonConfig.sceneList.split(',');
            return arr.indexOf(scene) != -1;
        }
        return true;
    }

    static jsonConfig: config;
    static getConfig(cb: Function) {
        var launchInfo = Laya.Browser.window.wx.getLaunchOptionsSync();
        console.log("当前场景：", launchInfo.scene);
        console.log('wxsdk初始化')
        window['wxsdk'].init({
            version: '1.0.2', // 当前的小游戏版本号，只能以数字
            appid: '250', // 此项目在云平台的appid
            secret: 'pj1zyq521krsjfrva8xw4wrk2j3v35sa', // 此项目在云平台的secret, 用于与后端通信签名
            share: {
                title: '你能过得了这一关吗？', // 默认分享文案
                image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
            },
        })
        window['wxsdk'].onInit(() => {
            console.log('wxsdk初始化成功:',window['wxsdk'])
            let conf: config = new config()
            conf.allowMistouch = window['wxsdk'].conf.allowMistouch
            conf.showVitualWx = window['wxsdk'].conf.showVitualWx
            conf.forceVideo = window['wxsdk'].conf.forceVideo
            conf.showBox = window['wxsdk'].conf.showBox
            conf.showRemen = window['wxsdk'].conf.showRemen
            conf.refresh_banner_time = window['wxsdk'].conf.refresh_banner_time
            conf.version = window['wxsdk'].conf.version
            conf.channel_ditch = window['wxsdk'].conf.channel_ditch
            conf.sceneList = window['wxsdk'].conf.sceneList
            this.jsonConfig = conf
            console.log('config:', this.jsonConfig)

            //window['wxsdk'].user.channel = "test"
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

    static get canTrapAll() {
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }

    static get canForceVideo() {
        return this.canTrapAll && this.jsonConfig.forceVideo
    }

    static get canTrapVirtualWx() {
        return this.canTrapAll && this.jsonConfig.showVitualWx;
    }

    static get canTrapBox() {
        return this.canTrapAll && this.jsonConfig.showBox;
    }

    static get canTrapRemen() {
        return this.canTrapAll && this.jsonConfig.showRemen;
    }
}

enum SceneType {
    Remen = "FDScene/Remen.scene",
    VitrualWx = "FDScene/VitrualWx.scene",
    Box1 = "FDScene/Box1.scene",
    Box2 = "FDScene/Box2.scene"
}

class config {
    allowMistouch: boolean;
    forceVideo: boolean;
    showRemen: boolean;
    showBox: boolean;
    showVitualWx: boolean;
    refresh_banner_time: number;
    version: string;
    channel_ditch: boolean;
    sceneList: string;
}