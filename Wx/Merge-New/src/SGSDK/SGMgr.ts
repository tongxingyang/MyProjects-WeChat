import SGAD from "./SGAD";
import SGConfig from "./SGConfig";

export default class SGMgr {
    static version: string = '1.0.7'
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
        SGAD.hideBannerAd();
        Laya.timer.once(600, this, () => {
            SGAD.showBannerAd();
            Laya.timer.once(800, this, () => {
                this.bannerShowHide();
            });
        });
    }

    /**伪banner闪烁 */
    static videoBannerShowHide() {
        SGMgr.visibleVideoBanner(false, false)
        Laya.timer.once(600, this, () => {
            SGMgr.visibleVideoBanner(true, false)
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
                SGMgr.version = data.version;
                SGMgr.appid = data.appid;
                SGMgr.secret = data.secret;
                this.initSDK(cb);
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
                        SGAD.showVideoAd(null, () => { this.showVirtualWxpage(cb) });
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
        SGAD.showInterstitialAd()
        SGAD.visibleSideGridAd()
        SGAD.showBannerAd()

        cb && cb();
    }

    /**进入商店 */
    static inShop() {
        this.showHomeUI(false)
        //FdAd.hideBannerAd()
        SGAD.visibleSideGridAd(false)
        SGAD.visibleBottomGridAd(false)
    }

    /**开始游戏 */
    static startGame(cb?) {
        this.showHomeUI(false)
        SGAD.hideBannerAd()
        SGAD.visibleSideGridAd(false)
        SGAD.visibleBottomGridAd(false)
        SGAD.showInterstitialAd(() => {
            this.showStartReMen(() => {
                this.showBox2(() => {
                    this.showVirtualWxpage(cb)
                })
            })
        })
    }

    /**进入游戏页 */
    static inGame() {
        SGAD.showBannerAd()
        SGAD.visibleSingleGridAd()
    }

    /**游戏结束 */
    static showGameOver(cb?: Function) {
        this.visibleVideoBanner(false)
        SGAD.hideBannerAd()
        SGAD.visibleSingleGridAd(false)
        this.showEndReMen(cb)
    }

    /**进入结算页 */
    static inFinish(backBtn?: any) {
        SGAD.showInterstitialAd()
        SGAD.visibleSideGridAd()
        SGAD.hideBannerAd()
        if (this.endBanner) {
            if (this.endBanner_switch)
                this.videoBannerShowHide()
            else
                this.bannerShowHide()
            if (backBtn)
                backBtn.bottom = 20
        } else {
            if (backBtn)
                backBtn.bottom = 250
            SGAD.showBannerAd()
        }
    }

    /**关闭结算页 */
    static closeFinish(cb?: Function) {
        Laya.timer.clearAll(this)
        SGAD.visibleBottomGridAd(false)
        SGAD.visibleSideGridAd(false)
        this.visibleVideoBanner(false)
        SGAD.hideBannerAd()
        this.gameCount++
        this.loadGame(() => {
            cb && cb()
        })
    }


    static initSDK(cb: Function) {
        window['wxsdk'].init({
            version: SGConfig.version, // 当前的小游戏版本号，只能以数字
            appid: SGConfig.appid, // 此项目在云平台的appid
            secret: SGConfig.secret, // 此项目在云平台的secret, 用于与后端通信签名
            share: {
                title: '你能过得了这一关吗？', // 默认分享文案
                image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
            },
        })
        window['wxsdk'].onInit(() => {
            SGConfig.initConfigData(window['wxsdk'].conf)
            if (SGConfig.data.channel_ditch && !window['wxsdk'].user.channel) {
                SGConfig.data.allowMistouch = false;
            }
            if (!SGConfig.data.allowMistouch) {
                for (let key in SGConfig.data) {
                    if (typeof (SGConfig.data[key]) === 'boolean') SGConfig.data[key] = false
                }
            }
            console.log('参数:', SGConfig.data)
            SGAD.inidAd(() => {
                cb && cb()
            });
        })
        window['wxsdk'].login();
    }


}

enum SceneType {
    SGRemen = "SGScene/SGRemen.scene",
    SGBoxBottom = "SGScene/SGBoxBottom.scene",
    SGBoxMiddle = "SGScene/SGBoxMiddle.scene",
    SGHomeUI = "SGScene/SGHomeUI.scene",
    SGSkin = "SGScene/SGSkin.scene"
}