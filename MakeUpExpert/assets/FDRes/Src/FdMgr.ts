import { find } from "cc";
import { PREVIEW, WECHAT } from "cc/env";
import { Box1 } from "./Box1";
import { Box2 } from "./Box2";
import FdAd from "./FdAd";
import { Remen } from "./Remen";

export default class FdMgr {
    static version: string = '1.0.2'
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
        if (WECHAT) {
            this.getConfig(cb);
        } else {
            cb && cb()
        }
    }

    /**游戏加载--进入加载页调用 */
    static loadGame(cb?) {
        var closeVideo = () => {
            console.log("关闭首次进入视频")
            this.showReMen(() => {
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
            if (this.gridBoxVideo) {
                FdAd.showVideoAd()
            }
            find('FDCanvas/FDNode/Box2').getComponent(Box2).showUI(cb)
        }
        else {
            cb && cb();
        }
    }

    /**仿微信页 */
    static showVirtualWxpage(cb?: Function, type: number = 0) {
        if (this.showVitualWx && WECHAT) {
            window['wx'].showModal({
                title: '提示',
                content: '未观看完广告无法获取奖励，是否继续？',
                success: (res) => {
                    let curVirType = res.confirm ? 1 : 2
                    if (type == 0) {
                        FdAd.showVideoAd(null, () => { this.showVirtualWxpage(cb, curVirType) });
                        return
                    }
                    if (type == curVirType) {
                        FdAd.showVideoAd(null, () => { this.showVirtualWxpage(cb, curVirType) });
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
        if (this.homepageVideo) {
            FdAd.showVideoAd(null, cb);
        }
        else {
            cb && cb();
        }
    }

    /**开始游戏 */
    static startGame(cb?) {
        if (this.startVideo) {
            FdAd.showVideoAd(null, () => {
                this.showVirtualWxpage(cb)
            });
        }
        else {
            this.showVirtualWxpage(cb)
        }
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
            appid: '292', // 此项目在云平台的appid
            secret: 'n27jmy4xgvotl20ytj6bq66f2t4gasgh', // 此项目在云平台的secret, 用于与后端通信签名
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

    static get canTrapAll() {
        if (PREVIEW) return false
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }

    static get bannerBox() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.bannerBox
    }

    static get gridBox() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.gridBox;
    }

    static get startVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.startVideo;
    }

    static get homepageVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.homepageVideo;
    }

    static get gridBoxVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.gridBoxVideo;
    }

    static get showRemen() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.showRemen;
    }

    static get showVitualWx() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.showVitualWx;
    }

    static get loadingVideo() {
        if (PREVIEW) return false
        return this.canTrapAll && this.jsonConfig.loadingVideo;
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
}