import FdAd from "./FdAd";

export default class FdMgr {
    static version: string = '1.0.4'
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
        FdAd.inidAd();
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
    static virtualScene: Laya.Scene;
    static showVitrualWxpage(cb?, type = 0) {
        if (this.canTrapVirtualWx) {
            var type1Click = () => {
                this.showVitrualWxpage(cb, 1);
            }
            var type2Click = () => {
                this.showVitrualWxpage(cb, 2);
            }

            if (!this.virtualScene) {
                Laya.Scene.open(SceneType.VitrualWx, false, null, Laya.Handler.create(this, (s) => {
                    Laya.stage.addChild(s);
                    s.size(Laya.stage.width, Laya.stage.height);
                    this.virtualScene = s;

                    let btnCancel = s.btnCancel;
                    let btnConfirm = s.btnConfirm;

                    btnCancel.offAllCaller(this);
                    btnCancel.on(Laya.Event.CLICK, this, () => {
                        if (this.canForceVideo)
                            FdAd.showVideoAd(null, type1Click);
                        else
                            type1Click()
                        btnCancel.offAllCaller(this);
                        btnConfirm.offAllCaller(this);
                    });

                    btnConfirm.offAllCaller(this);
                    btnConfirm.on(Laya.Event.CLICK, this, () => {
                        if (this.canForceVideo)
                            FdAd.showVideoAd(null, type2Click);
                        else
                            type2Click()
                        btnCancel.offAllCaller(this);
                        btnConfirm.offAllCaller(this);
                    });
                }));
            }
            else {
                let s: any = this.virtualScene;
                let btnCancel = s.btnCancel;
                let btnConfirm = s.btnConfirm;
                if (type == 1) {
                    btnCancel.offAllCaller(this);
                    btnCancel.on(Laya.Event.CLICK, this, () => {
                        if (this.canForceVideo)
                            FdAd.showVideoAd(null, type1Click);
                        else
                            type1Click()
                        btnCancel.offAllCaller(this);
                        btnConfirm.offAllCaller(this);
                    });

                    btnConfirm.offAllCaller(this);
                    btnConfirm.on(Laya.Event.CLICK, this, () => {
                        this.virtualScene = null;
                        Laya.Scene.close(SceneType.VitrualWx)
                        this.showBox1(cb);
                        btnCancel.offAllCaller(this);
                        btnConfirm.offAllCaller(this);
                    });
                }
                else if (type == 2) {
                    btnConfirm.offAllCaller(this);
                    btnConfirm.on(Laya.Event.CLICK, this, () => {
                        if (this.canForceVideo)
                            FdAd.showVideoAd(null, type2Click);
                        else
                            type2Click()
                        btnCancel.offAllCaller(this);
                        btnConfirm.offAllCaller(this);
                    });

                    btnCancel.offAllCaller(this);
                    btnCancel.on(Laya.Event.CLICK, this, () => {
                        this.virtualScene = null;
                        Laya.Scene.close(SceneType.VitrualWx)
                        this.showBox1(cb);
                        btnCancel.offAllCaller(this);
                        btnConfirm.offAllCaller(this);
                    });
                }
            }
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
    static scenes = [1005, 1006, 1007, 1008, 1011, 1012, 1013, 1014, 1017, 1020, 1023, 1024, 1025, 1027, 1030, 1031, 1032, 1036, 1042, 1044, 1047, 1048, 1049, 1053, 1102, 1129];
    public static get allowScene() {
        if (Laya.Browser.onWeiXin) {
            var launchInfo = Laya.Browser.window.wx.getLaunchOptionsSync();
            console.log("当前场景：", launchInfo.scene);
            return this.scenes.indexOf(launchInfo.scene) == -1;
        }
        return true;
    }

    static jsonConfig: config;
    static getConfig(cb: Function) {
        console.log('wxsdk初始化')
        window['wxsdk'].init({
            version: '1.0.2', // 当前的小游戏版本号，只能以数字
            appid: '249', // 此项目在云平台的appid
            secret: 'h52359lzqk08m9g82ujx6gd997rquaa1', // 此项目在云平台的secret, 用于与后端通信签名
            share: {
                title: '你能过得了这一关吗？', // 默认分享文案
                image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
            },
        })
        window['wxsdk'].onInit(() => {
            console.log('wxsdk初始化成功')
            let conf: config = new config()
            conf.allowMistouch = window['wxsdk'].conf.allowMistouch
            conf.showVitualWx = window['wxsdk'].conf.showVitualWx
            conf.forceVideo = window['wxsdk'].conf.forceVideo
            conf.showBox = window['wxsdk'].conf.showBox
            conf.showRemen = window['wxsdk'].conf.showRemen
            conf.refresh_banner_time = window['wxsdk'].conf.refresh_banner_time
            conf.version = window['wxsdk'].conf.version
            this.jsonConfig = conf
            console.log('config:', this.jsonConfig)
            cb && cb()
        })
        window['wxsdk'].login();
    }

    static get canTrapAll() {
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }

    static get canForceVideo(){
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
}

/**
 * wx2edb01413d22e65b
 * wx5630130c82a66bf1
 * wxc7d8a1d650044632
 */