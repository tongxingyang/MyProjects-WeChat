import { find, Node, Widget } from "cc";
import { PREVIEW, WECHAT } from "cc/env";
import { Box1 } from "./Box1";
import FdAd from "./FdAd";
import { FDNode } from "./FDNode";
import { HomeUI } from "./HomeUI";
import { Remen } from "./Remen";
import { VideoBanner } from "./VideoBanner";

export enum RemenType {
    Remen_Banner,
    Remen_VideoBanner
}
export enum BoxType {
    Box_Banner,
    Box_VideoBanner
}

export default class FdMgr {
    static version: string = '1.0.8'
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

    static VideoBannerShowHide() {
        FdMgr.visibleVideoBanner(false, false)
        FDNode.Share.scheduleOnce(() => {
            FdMgr.videoBannerShow()
            FDNode.Share.scheduleOnce(() => {
                FdMgr.VideoBannerShowHide()
            }, 0.8)
        }, 0.6)
    }
    static videoBannerShow() {
        FdMgr.visibleVideoBanner(true, false)
    }
    static stopVideoBannerShowHide() {
        FDNode.Share.unscheduleAllCallbacks()
        FdMgr.visibleVideoBanner(false, false)
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

    /**游戏加载--进入加载页调用 */
    static loadGame(cb?) {
        this.showReMen(() => {
            this.showBox1(cb)
        });
    }

    /**首页UI */
    static showHomeUI(v: boolean) {
        find('FDCanvas/FDNode/HomeUI').getComponent(HomeUI).visibleUI(v)
    }
    /**热门推荐 */
    static showHomeUIReMen(cb?) {
        find('FDCanvas/FDNode/Remen').getComponent(Remen).showUI(cb)
    }
    /**热门推荐 */
    static showReMen(cb?) {
        if (this.showRemen) {
            find('FDCanvas/FDNode/Remen').getComponent(Remen).showUI(cb)
        }
        else {
            cb && cb();
        }
    }
    /**开始游戏热门推荐 */
    static showStartReMen(cb?) {
        if (this.startRemen) {
            find('FDCanvas/FDNode/Remen').getComponent(Remen).showUI(cb)
        }
        else {
            cb && cb();
        }
    }
    /**游戏结束热门推荐 */
    static showEndReMen(cb?) {
        if (this.endRemen) {
            find('FDCanvas/FDNode/Remen').getComponent(Remen).showUI(cb, this.endRemen_switch)
        }
        else {
            cb && cb();
        }
    }

    /**宝箱1 */
    static showBox1(cb?) {
        if (this.firstBox) {
            find('FDCanvas/FDNode/Box1').getComponent(Box1).showUI(cb, this.firstBox_switch ? BoxType.Box_VideoBanner : BoxType.Box_Banner)
        }
        else {
            cb && cb();
        }
    }

    /**宝箱2 */
    static showBox2(cb?) {
        if (this.bannerBox) {
            find('FDCanvas/FDNode/Box1').getComponent(Box1).showUI(cb, this.bannerBox_switch ? BoxType.Box_VideoBanner : BoxType.Box_Banner)
        }
        else {
            cb && cb();
        }
    }

    /**伪banner */
    static visibleVideoBanner(visible: boolean, showFinger: boolean = true) {
        if (visible)
            find('FDCanvas/FDNode/VideoBanner').getComponent(VideoBanner).showUI(showFinger)
        else
            find('FDCanvas/FDNode/VideoBanner').active = false
    }

    /**仿微信页 */
    static showVirtualCount: number = 0
    static showVirtualWxpage(cb?: Function) {
        if (this.showVitualWx && WECHAT) {
            window['wx'].showModal({
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
        //FdAd.showBannerAd()
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
    static inFinish(backBtn?: Node) {
        FdAd.showInterstitialAd()
        FdAd.visibleSideGridAd()
        FdAd.hideBannerAd()
        if (this.endBanner) {
            if (this.endBanner_switch)
                this.VideoBannerShowHide()
            else
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
        this.stopVideoBannerShowHide()
        FdAd.visibleBottomGridAd(false)
        FdAd.visibleSideGridAd(false)
        this.gameCount++
        this.loadGame(() => {
            cb && cb()
        })
    }

    /**屏蔽场景值 */
    public static get allowScene() {
        if (WECHAT) {
            var launchInfo = window['wx'].getLaunchOptionsSync();
            //console.log("当前场景：", launchInfo.scene);
            let scene: string = launchInfo.scene.toString();
            let arr: string[] = this.jsonConfig.sceneList.split(',');
            return arr.indexOf(scene) != -1;
        }
        return true;
    }

    static jsonConfig: config;
    static getConfig(cb: Function) {
        var launchInfo = window['wx'].getLaunchOptionsSync();
        console.log("当前场景：", launchInfo.scene);
        window['wxsdk'].init({
            version: '1.0.0', // 当前的小游戏版本号，只能以数字
            appid: '310', // 此项目在云平台的appid
            secret: '68761o2w6fdg8ytai0yu43lef4ufn54q', // 此项目在云平台的secret, 用于与后端通信签名
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

            this.jsonConfig = conf
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
        if (PREVIEW) return false
        return this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }

    static get canTrapAll() {
        if (PREVIEW) return false
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }
    static get showRemen() {
        if (PREVIEW) return false
        return this.jsonConfig.showRemen;
    }
    static get startRemen() {
        if (PREVIEW) return false
        return this.jsonConfig.startRemen
    }
    static get endRemen() {
        if (PREVIEW) return false
        return this.jsonConfig.endRemen
    }
    static get showVitualWx() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.showVitualWx
    }
    static get remenBanner() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.remenBanner
    }
    static get endBanner() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.endBanner
    }
    static get endRemen_switch() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.endRemen_switch
    }
    static get firstBox_switch() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.firstBox_switch
    }
    static get firstBox() {
        if (PREVIEW) return false
        let show = false
        if (this.jsonConfig.firstBox_interval_level <= 0) show = this.gameCount >= this.jsonConfig.firstBox_level
        else show = this.gameCount >= this.jsonConfig.firstBox_level &&
            Math.floor((this.gameCount - this.jsonConfig.firstBox_level) % (this.jsonConfig.firstBox_interval_level + 1)) == 0

        return this.canTrapAll && this.jsonConfig.firstBox && show
    }
    static get bannerBox() {
        if (PREVIEW) return false
        let show = false
        if (this.jsonConfig.bannerBox_interval_level <= 0) show = this.gameCount >= this.jsonConfig.bannerBox_level
        else show = this.gameCount >= this.jsonConfig.bannerBox_level &&
            Math.floor((this.gameCount - this.jsonConfig.bannerBox_level) % (this.jsonConfig.bannerBox_interval_level + 1)) == 0

        return this.canTrapAll && this.jsonConfig.bannerBox && show
    }
    static get bannerBox_switch() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.bannerBox_switch
    }
    static get endBanner_switch() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.endBanner_switch
    }
    static get homeViedo() {
        if (PREVIEW) return false
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