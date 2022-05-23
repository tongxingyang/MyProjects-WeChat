import { find } from "cc";
import { PREVIEW, WECHAT } from "cc/env";
import { Box1 } from "./Box1";
import FdAd from "./FdAd";
import { YsUI } from "./YsUI";

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
        this.randTouchProgress();
        if (WECHAT) {
            this.getConfig(cb);
        } else {
            cb && cb()
        }
    }

    /**进入首页 */
    static inHomePage() {
        if (this.showHezi) {
            FdAd.showBoxAd(() => {
                if (this.hzcloseVideo) {
                    FdAd.showVideoAd()
                }
            })
        }
        FdAd.showBannerAd()
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

    /**仿微信页 */
    static showVirtualCount: number = 0
    static showVirtualWxpage(cb?: Function) {
        if (this.showVitualWx && WECHAT) {
            window['qq'].showModal({
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

    /**宝箱1 */
    static showBox1(cb?) {
        if (this.bannerBox) {
            find('FDCanvas/FDNode/Box1').getComponent(Box1).showUI(cb)
        }
        else {
            cb && cb();
        }
    }

    /**游戏中 */
    static inGame() {
        if (this.is_showGameBanner)
            FdAd.showBannerAd()
    }

    /**游戏结束 */
    static showGameOver(cb?: Function) {
        FdAd.hideBannerAd()
        if (this.finishVideo) {
            FdAd.showVideoAd(null, cb)
        } else {
            cb && cb()
        }
    }

    /**进入结算页 */
    static inFinish() {
        if (this.showHezi) {
            FdAd.showBoxAd(() => {
                if (this.hzcloseVideo) {
                    FdAd.showVideoAd()
                }
            })
        }
        FdAd.showBannerAd()
    }

    /**关闭结算页 */
    static closeFinish(cb?: Function) {
        if (this.returnhomeVideo) {
            FdAd.showVideoAd(null, cb)
        } else {
            cb && cb()
        }
    }

    static showYsUI(cb?: Function) {
        find('FDCanvas/FDNode/Ys').getComponent(YsUI).showUI(cb)
    }

    /**屏蔽场景值 */
    public static get allowScene() {
        if (WECHAT) {
            var launchInfo = window['qq'].getLaunchOptionsSync();
            //console.log("当前场景：", launchInfo.scene);
            let scene: string = launchInfo.scene.toString();
            let arr: string[] = this.jsonConfig.sceneList.split(',');
            return arr.indexOf(scene) != -1;
        }
        return true;
    }

    static jsonConfig: config;
    static getConfig(cb: Function) {
        var launchInfo = window['qq'].getLaunchOptionsSync();
        console.log("当前场景：", launchInfo.scene);
        console.log('wxsdk初始化')
        window['wxsdk'].init({
            version: '1.0.0', // 当前的小游戏版本号，只能以数字
            appid: '326', // 此项目在云平台的appid
            secret: 'rkwptlla5mlt2929oc0gt648tm7nke67', // 此项目在云平台的secret, 用于与后端通信签名
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
            conf.startVideo = window['wxsdk'].conf.startVideo
            conf.version = window['wxsdk'].conf.version
            conf.showVitualWx = window['wxsdk'].conf.showVitualWx
            conf.refresh_banner_time = window['wxsdk'].conf.refresh_banner_time
            conf.vitualWx_count = window['wxsdk'].conf.vitualWx_count
            conf.showHezi = window['wxsdk'].conf.showHezi
            conf.finishVideo = window['wxsdk'].conf.finishVideo
            conf.returnhomeVideo = window['wxsdk'].conf.returnhomeVideo
            conf.hzcloseVideo = window['wxsdk'].conf.hzcloseVideo
            conf.is_showGameBanner = window['wxsdk'].conf.is_showGameBanner
            conf.sceneList = window['wxsdk'].conf.sceneList

            this.jsonConfig = conf
            console.log('config:', this.jsonConfig)
            //初始化广告
            FdAd.inidAd();
            cb && cb()
        })
        window['wxsdk'].login();
    }

    static get canTrapAll() {
        if (PREVIEW) return false
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }
    static get bannerBox() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.bannerBox
    }
    static get startVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.startVideo
    }
    static get showVitualWx() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.showVitualWx;
    }
    static get showHezi() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.showHezi;
    }
    static get finishVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.finishVideo;
    }
    static get returnhomeVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.returnhomeVideo;
    }
    static get hzcloseVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.hzcloseVideo;
    }
    static get is_showGameBanner() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.is_showGameBanner;
    }
}

class config {
    version: string;
    refresh_banner_time: number;
    showVitualWx: boolean;
    allowMistouch: boolean;
    startVideo: boolean;
    bannerBox: boolean;
    is_showGameBanner: boolean;
    vitualWx_count: number;
    hzcloseVideo: boolean;
    finishVideo: boolean;
    returnhomeVideo: boolean;
    showHezi: boolean;
    sceneList: string;
}