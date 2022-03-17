import { find, Node, Widget } from "cc";
import { PREVIEW, WECHAT } from "cc/env";
import { Box1 } from "./Box1";
import { Box2 } from "./Box2";
import FdAd from "./FdAd";
import { FDNode } from "./FDNode";
import { Remen } from "./Remen";

export default class FdMgr {
    static version: string = '1.0.5'
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
        }, 1)
    }
    static bannerShow() {
        FdAd.showBannerAd();
    }
    static bannerHide() {
        FdAd.hideBannerAd();
    }
    static stopBannerShowHide() {
        FDNode.Share.unscheduleAllCallbacks()
        FdAd.hideBannerAd();
    }

    /**初始化策略--游戏最开始入口调用 */
    static init(cb: Function) {
        //FdAd.inidAd();
        this.randTouchProgress();
        if (WECHAT) {
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
    static showOverReMen(cb?) {
        if (this.endRemen) {
            find('FDCanvas/FDNode/Remen').getComponent(Remen).showUI(cb)
        }
        else {
            cb && cb();
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

    /**宝箱2 */
    static showBox2(cb?) {
        if (this.gridBox) {
            find('FDCanvas/FDNode/Box2').getComponent(Box2).showUI(cb)
        }
        else {
            cb && cb();
        }
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
        FdAd.visibleSingleGridAd()
    }

    /**游戏结束 */
    static showGameOver(cb?: Function) {
        FdAd.hideBannerAd()
        FdAd.visibleSingleGridAd(false)
        this.showOverReMen(cb)
    }

    /**进入结算页 */
    static inFinish(backBtn?: Node) {
        FdAd.visibleSideGridAd()
        FdAd.hideBannerAd()
        if (this.endBanner) {
            this.bannerShowHide()
            if (backBtn)
                backBtn.getComponent(Widget).bottom = 20
        } else {
            if (backBtn)
                backBtn.getComponent(Widget).bottom = 300
            if (this.banner_gezi_switch) {
                FdAd.showBannerAd()
            } else {
                FdAd.visibleBottomGridAd()
            }
        }
    }

    /**关闭结算页 */
    static closeFinish(cb?: Function) {
        this.stopBannerShowHide()
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
        console.log('wxsdk初始化')
        window['wxsdk'].init({
            version: '1.0.0', // 当前的小游戏版本号，只能以数字
            appid: '311', // 此项目在云平台的appid
            secret: 'lcjluv57wb77kd1gf5yblw0u2iv01ghk', // 此项目在云平台的secret, 用于与后端通信签名
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
        if (PREVIEW) return false
        return this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }

    static get canTrapAll() {
        if (PREVIEW) return false
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }
    static get bannerBox() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.bannerBox && this.gameCount >= this.jsonConfig.delay_play_count;
    }
    static get gridBox() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.gridBox && this.gameCount >= this.jsonConfig.delay_play_count;
    }
    static get startVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.startVideo && this.gameCount >= this.jsonConfig.delay_play_countVideo;
    }
    static get homepageVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.homepageVideo && this.gameCount >= this.jsonConfig.delay_play_count;
    }
    static get gridBoxVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.gridBoxVideo && this.gameCount >= this.jsonConfig.delay_play_count;
    }
    static get showRemen() {
        if (PREVIEW) return false
        return /* this.canTrapAll &&  */this.jsonConfig.showRemen;
    }
    static get showVitualWx() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.showVitualWx && this.gameCount >= this.jsonConfig.delay_play_countVideo;
    }
    static get loadingVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.loadingVideo;
    }
    static get remenBanner() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.remenBanner && this.gameCount >= this.jsonConfig.delay_play_countBanner;
    }
    static get banner_gezi_switch() {
        if (PREVIEW) return true
        return this.jsonConfig.banner_gezi_switch;
    }
    static get loadingGezi() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.loadingGezi;
    }
    static get endBanner() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.endBanner && this.gameCount >= this.jsonConfig.delay_play_countBanner;
    }
    static get startRemen() {
        if (PREVIEW) return false
        return this.jsonConfig.startRemen
    }
    static get endRemen() {
        if (PREVIEW) return false
        return this.jsonConfig.endRemen
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