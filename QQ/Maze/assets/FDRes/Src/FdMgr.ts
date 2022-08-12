import { find, Widget, Node } from "cc";
import { PREVIEW, WECHAT } from "cc/env";
import { BackToHome } from "./BackToHome";
import { Box1 } from "./Box1";
import FdAd from "./FdAd";
import { FDNode } from "./FDNode";
import { GridBox } from "./GridBox";
import { VideoBanner } from "./VideoBanner";
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

    static bannerShowHide() {
        FdAd.hideBannerAd()
        FDNode.Share.scheduleOnce(() => {
            FdMgr.bannerShow()
            FDNode.Share.scheduleOnce(() => {
                FdMgr.bannerShowHide()
            }, 0.8)
        }, 0.6)
    }
    static bannerShow() {
        FdAd.showBannerAd();
    }
    static stopBannerShowHide() {
        FDNode.Share.unscheduleAllCallbacks()
        FdAd.hideBannerAd();
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
        find('FDCanvas/FDNode/Home').active = true
        FdAd.showBannerAd()
        FdAd.showSideBlockAd()
        FdAd.showInterstitialAd()
    }

    /**开始游戏 */
    static startGame(cb?) {
        find('FDCanvas/FDNode/Home').active = false
        FdAd.hideBannerAd()
        FdAd.hideSideBlockAd()
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
                        this.showBox(cb);
                    }
                }
            })
        }
        else {
            this.showBox(cb);
        }
    }

    /**宝箱1 */
    static showBox(cb?) {
        if (this.bannerBox) {
            find('FDCanvas/FDNode/Box1').getComponent(Box1).showUI(cb)
        }
        else {
            cb && cb();
        }
    }
    /**盒子宝箱 */
    static showBoxBox(cb?) {
        if (this.gridBox) {
            find('FDCanvas/FDNode/GridBox').getComponent(GridBox).showUI(cb)
        }
        else {
            cb && cb();
        }
    }

    /**伪banner */
    static visibleVideoBanner(visible: boolean) {
        if (visible)
            find('FDCanvas/FDNode/VideoBanner').getComponent(VideoBanner).showUI()
        else
            find('FDCanvas/FDNode/VideoBanner').active = false
    }

    /**游戏中 */
    static inGame() {
        FdAd.showBannerAd()
        FdAd.showSingleBlockAd()
    }

    /**游戏结束 */
    static showGameOver(cb?: Function) {
        FdAd.hideBannerAd()
        FdAd.hideSingleBlockAd()

        if (this.finishVideo) {
            FdAd.showVideoAd(null, () => {
                this.showBoxBox(cb)
            })
        } else {
            this.showBoxBox(cb)
        }
    }

    /**进入结算页 */
    static inFinish(backBtn?: Node) {
        FdAd.hideBannerAd()
        FdAd.showSideBlockAd()
        if (this.endBanner) {
            this.bannerShowHide()
            if (backBtn)
                backBtn.getComponent(Widget).bottom = 20
        } else {
            if (backBtn)
                backBtn.getComponent(Widget).bottom = 300
            FdAd.showBannerAd()
        }
    }

    /**关闭结算页 */
    static closeFinish(cb?: Function) {
        this.stopBannerShowHide()
        FdAd.hideSideBlockAd()
        find('FDCanvas/FDNode/BackToHome').getComponent(BackToHome).showUI(() => {
            cb && cb()
            this.gameCount++
        })
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
            appid: '610', // 此项目在云平台的appid
            secret: 'xw9rwca2pbbg68nd7n2t1b90lju4t3c6', // 此项目在云平台的secret, 用于与后端通信签名
            share: {
                title: '你能过得了这一关吗？', // 默认分享文案
                image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
            },
        })
        window['wxsdk'].onInit(() => {
            console.log('wxsdk初始化成功:', window['wxsdk'].user)
            let conf: config = new config()
            for (let key in conf) {
                conf[key] = window['wxsdk'].conf[key]
            }

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
        return this.allowScene && this.jsonConfig.allowMistouch &&
            this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2] && this.gameCount >= this.jsonConfig.delay_play_count
    }
    static get startVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.startVideo
    }
    static get showVitualWx() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.showVitualWx;
    }
    static get bannerBox() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.bannerBox
    }
    static get finishVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.finishVideo;
    }
    static get gridBox() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.gridBox
    }
    static get endBanner() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.endBanner;
    }
}

class config {
    version: string;
    allowMistouch: boolean;
    sceneList: string;

    vitualWx_count: number;
    firstBox_switch: number;
    refresh_banner_time: number;
    updateBanner: number;
    delay_play_count: number;

    startVideo: boolean;
    showVitualWx: boolean;
    bannerBox: boolean;
    finishVideo: boolean;
    gridBox: boolean;
    endBanner: boolean;
}