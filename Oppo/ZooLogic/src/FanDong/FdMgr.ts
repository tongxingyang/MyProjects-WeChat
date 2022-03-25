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
        this.randTouchProgress();
        if (Laya.Browser.onQGMiniGame) {
            this.getConfig(cb);
        } else {
            cb && cb()
        }
    }

    /**屏蔽场景值 */
    public static get allowScene() {
        if (Laya.Browser.onQGMiniGame) {
            var launchInfo = Laya.Browser.window['wx'].getLaunchOptionsSync();
            //console.log("当前场景：", launchInfo.scene);
            let scene: string = launchInfo.scene.toString();
            let arr: string[] = this.jsonConfig.sceneList.split(',');
            return arr.indexOf(scene) != -1;
        }
        return true;
    }

    static jsonConfig: any;
    static getConfig(cb: Function) {
        var launchInfo = Laya.Browser.window['wx'].getLaunchOptionsSync();
        console.log("当前场景：", launchInfo.scene);
        console.log('wxsdk初始化')
        window['wxsdk'].init({
            version: '1.0.0', // 当前的小游戏版本号，只能以数字
            appid: '393', // 此项目在云平台的appid
            secret: 'nl46bkjf0cblsb5yrbhtcps1at961ugd', // 此项目在云平台的secret, 用于与后端通信签名
            share: {
                title: '你能过得了这一关吗？', // 默认分享文案
                image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
            },
        })
        window['wxsdk'].onInit(() => {
            console.log('wxsdk初始化成功:', window['wxsdk'].user)
            this.jsonConfig = window['wxsdk'].conf
            console.log('config:', this.jsonConfig)

            if (this.jsonConfig.channel_ditch && !window['wxsdk'].user.channel) {
                this.jsonConfig.allowMistouch = false;
                console.log('config1:', this.jsonConfig)
            }
            //初始化广告
            
            cb && cb()
        })
        window['wxsdk'].login();
    }

    static get canTrapAll() {
        if (!Laya.Browser.onQGMiniGame) return false
        return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
    }
}

enum SceneType {
    Remen = "FDScene/Remen.scene",
    VitrualWx = "FDScene/VitrualWx.scene",
    Box1 = "FDScene/Box1.scene",
    Box2 = "FDScene/Box2.scene"
}