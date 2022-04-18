import FdAd from "./FdAd";

export default class FdMgr {
    static version: string = '1.0.4'
    static wuchuProgressValue = 0;
    static wuchuProgressStepAdd = 0.1;
    static wuchuProgressFrameSub = 0.0032;
    static gameTime: number = 0
    static gameCount: number = 1
    static nativeMissTouched: boolean = false
    static gameProcessIndex: number = 0

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

    static timeCounter() {
        this.gameTime += 0.1
    }

    //开局一分钟内是否显示广告
    static get isOneMinutedAd() {
        if (!this.jsonConfig.is_oneMinuteAd) {
            return this.gameTime >= 60
        } else {
            return true
        }
    }
    //误点在X秒后才会开始出现
    static get isAccountLateTime() {
        return this.gameTime >= this.jsonConfig.account_lateTime
    }
    static setNativeMissTouched() {
        this.nativeMissTouched = true
        Laya.timer.clear(this, this.resetNativeMissTouched)
        Laya.timer.once(this.jsonConfig.account_lateNextTime * 1000, this, this.resetNativeMissTouched)

    }
    static resetNativeMissTouched() {
        this.nativeMissTouched = false
    }

    /**初始化策略--游戏最开始入口调用 */
    static init(cb: Function) {
        Laya.timer.loop(100, this, this.timeCounter)
        this.randTouchProgress();
        if (Laya.Browser.onQGMiniGame) {
            this.getConfig(cb);
        } else {
            cb && cb()
        }
    }

    //间隔10秒尝试拉取原生广告
    static delayChangeToNative() {
        if (FdAd.isAllNativeAdError()) {
            Laya.timer.once(10000, this, this.delayChangeToNative)
        } else {
            FdAd.hideBanner()
            this.showBannerNativeUI()
            Laya.timer.clear(this, this.delayChangeToNative)
        }
    }
    //游戏资源加载完成 进入首页之前
    static beforeHome(cb: Function) {
        this.gameProcessUI0(cb)
    }
    //进入首页
    static inHome() {
        this.showFDHomeUI()
        if (this.jsonConfig.is_homeUIShowAd == 0) {
            //没有原生广告是否用banner代替
            if (FdAd.isAllNativeAdError() && this.jsonConfig.is_homeNativeErrorShowBanner) {
                FdAd.showBanner()
                Laya.timer.once(10000, this, this.delayChangeToNative)
            } else {
                this.showBannerNativeUI()
            }
        } else if (this.jsonConfig.is_homeUIShowAd == 1) {
            FdAd.showBanner()
        }
    }
    //点击开始游戏
    private static hadClickStart: boolean = false
    private static hadShowHomeGiftBox: boolean = false
    static clickStart(cb?: Function) {
        Laya.timer.clear(this, this.delayChangeToNative)
        let func = () => {
            if (this.jsonConfig.is_startBtnLate) {
                FdAd.reportAdClick(FdAd.showNativeAd())
                Laya.timer.once(500, this, () => {
                    this.gameProcessUI1(cb)
                })
            } else {
                this.gameProcessUI1(cb)
            }
            this.hadClickStart = false
            this.hadShowHomeGiftBox = false
        }

        if (!this.hadShowHomeGiftBox && !this.hadClickStart) {
            this.hadClickStart = true
            if (this.jsonConfig.Button_clickpop == 0) {
                FdAd.hideBanner()
                this.closeBannerNativeUI()
                this.closeFDHomeUI()
                func()
            } else if (this.jsonConfig.Button_clickpop == 1) {
                Laya.timer.once(this.jsonConfig.Button_isinvalid * 1000, this, () => {
                    FdAd.hideBanner()
                    this.closeBannerNativeUI()
                    this.closeFDHomeUI()
                    this.showGiftBoxUI(0, 0, 0, () => { this.hadShowHomeGiftBox = true; this.inHome() })
                })
            } else if (this.jsonConfig.Button_clickpop == 2) {
                Laya.timer.once(this.jsonConfig.Button_isinvalid * 1000, this, () => {
                    FdAd.hideBanner()
                    this.closeBannerNativeUI()
                    this.closeFDHomeUI()
                    this.showGiftBoxUI(Math.random() < 0.5 ? 1 : 2, 0, 0, () => { this.hadShowHomeGiftBox = true; this.inHome() })
                })
            }
        } else if (this.hadShowHomeGiftBox) {
            FdAd.hideBanner()
            this.closeBannerNativeUI()
            this.closeFDHomeUI()
            func()
        }
    }
    //进入游戏中
    private static gameGiftTimeArr: any[] = []
    private static gameGiftBoxOCB: Function = null //游戏中打开礼包宝箱界面时回调
    private static gameGiftBoxCCB: Function = null //游戏中关闭礼包宝箱界面时回调
    static inGame(gameGiftBoxOCB?: Function, gameGiftBoxCCB?: Function) {
        this.showGameAd()

        this.gameGiftBoxOCB = gameGiftBoxOCB
        this.gameGiftBoxCCB = gameGiftBoxCCB
        this.gameGiftTimeArr = [].concat(this.jsonConfig.Second_the_up)
        for (let i = this.gameGiftTimeArr.length - 1; i >= 0; i--) {
            if (i <= 0) continue
            this.gameGiftTimeArr[i] = this.gameGiftTimeArr[i] - this.gameGiftTimeArr[i - 1]
        }
        if (!this.gameGiftTimeArr || this.gameGiftTimeArr.length <= 0) return
        Laya.timer.once(this.gameGiftTimeArr.shift() * 1000, this, this.showGameGiftBoxUI)
    }
    //游戏中广告展示
    private static showGameAd() {
        Laya.timer.clear(this, this.delayChangeToNative)
        //原生广告
        if (this.jsonConfig.level_nativeType == 0 || this.jsonConfig.level_nativeType == 2) {
            //没有原生广告是否用banner代替
            if (FdAd.isAllNativeAdError() && this.jsonConfig.is_gameNativeErrorShowBanner) {
                FdAd.showBanner()
                Laya.timer.once(10000, this, this.delayChangeToNative)
            } else {
                this.showBannerNativeUI()
            }
        }
        //格子广告
        if (this.jsonConfig.level_nativeType == 0 || this.jsonConfig.level_nativeType == 1) {
            this.showGridNativeUI()
        }
    }
    //展示游戏中礼包宝箱
    private static showGameGiftBoxUI() {
        FdAd.hideBanner()
        this.closeBannerNativeUI()
        this.closeGridNativeUI()
        this.gameGiftBoxOCB && this.gameGiftBoxOCB()
        this.showGiftBoxUI(Math.random() < 0.5 ? 1 : 2, 1, (this.jsonConfig.Second_the_up.length - 1) - this.gameGiftTimeArr.length, () => {
            this.gameGiftBoxCCB && this.gameGiftBoxCCB()
            this.showGameAd()
            if (!this.gameGiftTimeArr || this.gameGiftTimeArr.length <= 0) return
            Laya.timer.once(this.gameGiftTimeArr.shift() * 1000, this, this.showGameGiftBoxUI)
        })
    }
    //游戏结束
    static gameOver(cb?: Function) {
        Laya.timer.clear(this, this.delayChangeToNative)
        Laya.timer.clear(this, this.showGameGiftBoxUI)
        FdAd.hideBanner()
        this.closeBannerNativeUI()
        this.closeGridNativeUI()
        this.gameProcessUI2(cb)
    }
    //进入结算页
    static inFinish() {
        FdAd.showBanner()
        this.showMiddleNativeUI(null, true)
    }
    //点击回到首页
    private static hadClickBackBtn: boolean = false
    private static hadShowBackGiftBox: boolean = false
    static backToHome(cb?: Function) {
        let func = () => {
            if (this.jsonConfig.is_nextBtnLate) {
                FdAd.reportAdClick(FdAd.showNativeAd())
            }
            this.gameProcessUI3(() => {
                this.gameProcessUI0(cb)
            })
            this.hadClickBackBtn = false
            this.hadShowBackGiftBox = false
        }

        if (!this.hadShowBackGiftBox && !this.hadClickBackBtn) {
            this.hadClickBackBtn = true
            if (this.jsonConfig.Super_giftbag == 0) {
                this.closeMiddleNativeUI()
                FdAd.hideBanner()
                func()
            } else if (this.jsonConfig.Super_giftbag == 1) {
                Laya.timer.once(this.jsonConfig.Button_isinvalid2 * 1000, this, () => {
                    this.closeMiddleNativeUI()
                    FdAd.hideBanner()
                    this.showGiftBoxUI(0, 2, 0, () => { this.hadShowBackGiftBox = true; this.inFinish() })
                })
            }
        } else if (this.hadShowBackGiftBox) {
            this.closeMiddleNativeUI()
            FdAd.hideBanner()
            func()
        }
    }

    //首页之前 界面
    private static gameProcessUI0(cb?: Function) {
        let arr: number[] = [].concat(this.jsonConfig.gameProcess_setting)
        let processArr: number[] = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 1) break
            processArr.push(arr[i])
        }
        this.repeatShowUIByType(processArr, cb)
    }
    //首页/点击开始游戏之后 界面
    private static gameProcessUI1(cb?: Function) {
        let arr: number[] = [].concat(this.jsonConfig.gameProcess_setting)
        arr.splice(0, arr.indexOf(1) + 1)
        let processArr: number[] = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 2) break
            processArr.push(arr[i])
        }
        this.repeatShowUIByType(processArr, cb)
    }
    //游戏结束之后/结算页之前 界面
    private static gameProcessUI2(cb?: Function) {
        let arr: number[] = [].concat(this.jsonConfig.gameProcess_setting)
        arr.splice(0, arr.indexOf(2) + 1)
        let processArr: number[] = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 3) break
            processArr.push(arr[i])
        }
        this.repeatShowUIByType(processArr, cb)
    }
    //关闭结算页之后/返回结算页之前 界面
    private static gameProcessUI3(cb?: Function) {
        let arr: number[] = [].concat(this.jsonConfig.gameProcess_setting)
        arr.splice(0, arr.indexOf(3) + 1)
        let processArr: number[] = []
        for (let i = 0; i < arr.length; i++) {
            processArr.push(arr[i])
        }
        this.repeatShowUIByType(processArr, cb)
    }
    private static repeatShowUIByType(arr: number[], cb?: Function) {
        if (arr.length <= 0) { cb && cb(); return }
        this.showUIByType(arr.shift(), () => {
            this.repeatShowUIByType(arr, cb)
        })
    }
    //根据界面类型展示界面
    private static showUIByType(type: number, cb?: Function) {
        switch (type) {
            case 4:
                //浮层原生广告
                this.showMiddleNativeUI(cb)
                break
            case 5:
                //宝箱误点
                this.showBoxUI(cb)
                break
            case 6:
                //强拉激励视频
                if (this.isAccountLateTime) {
                    FdAd.showVideo(null, cb)
                } else {
                    cb && cb()
                }
                break
            case 7:
                //互推九宫格
                FdAd.showGamePortalAd(cb)
                break
            default:
                cb && cb()
                break
        }
    }

    //首页UI
    static showFDHomeUI() {
        Laya.Scene.open(SceneType.FDHomeUI, false)
    }
    static closeFDHomeUI() {
        Laya.Scene.close(SceneType.FDHomeUI)
    }
    //隐私政策
    static showPrivacyUI(cb?: Function) {
        Laya.Scene.open(SceneType.PrivacyUI, false, { ccb: cb })
    }
    //猛点页面
    static showBoxUI(cb?: Function) {
        Laya.Scene.open(SceneType.Box, false, { ccb: cb })
    }
    //全屏原生广告页面
    static showMiddleNativeUI(cb?: Function, hidePanel: boolean = false) {
        if (FdAd.isAllNativeAdError()) { cb && cb(); return }
        Laya.Scene.open(SceneType.MiddleNativeUI, false, { ccb: cb, hidePanel: hidePanel })
    }
    static closeMiddleNativeUI() {
        Laya.Scene.close(SceneType.MiddleNativeUI)
    }
    //banner原生广告页面
    static showBannerNativeUI(cb?: Function) {
        if (FdAd.isAllNativeAdError()) { cb && cb(); return }
        if (this.jsonConfig.is_botNativeAd)
            Laya.Scene.open(SceneType.BannerNativeUI, false, { ccb: cb })
        else
            cb && cb()
    }
    static closeBannerNativeUI() {
        Laya.Scene.close(SceneType.BannerNativeUI)
    }
    //格子原生广告页面
    static showGridNativeUI(cb?: Function) {
        if (FdAd.isAllNativeAdError()) { cb && cb(); return }
        Laya.Scene.open(SceneType.GridNativeUI, false, { ccb: cb })
    }
    static closeGridNativeUI() {
        Laya.Scene.close(SceneType.GridNativeUI)
    }
    /**
     * 礼包宝箱界面
     * @param giftType 界面类型 0：超级礼包  1：神秘宝箱  2：超级宝箱
     * @param fromId   位于哪个界面  0：主界面  1：游戏界面  2：结算页面
     * @param gameUIIndex  游戏界面第n次打开 
     * @param cb 关闭页面回调函数
     */
    static showGiftBoxUI(giftType: number, fromId: number, gameUIIndex: number, cb?: Function) {
        Laya.Scene.open(SceneType.GiftBoxUI, false, { ccb: cb, giftType: giftType, fromId: fromId, gameUIIndex: gameUIIndex })
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

            if (!this.jsonConfig.is_late) {
                this.jsonConfig.is_nextBtnLate = false
                this.jsonConfig.is_startBtnLate = false
                this.jsonConfig.gameProcess_setting = [1, 2, 3]
                this.jsonConfig.is_touchMoveNativeAd = false
                this.jsonConfig.level_nativeType = 2
                this.jsonConfig.Button_clickpop = 0
                this.jsonConfig.Button_isinvalid = 0
                this.jsonConfig.Reward_interface_delayed = 0
                this.jsonConfig.Second_the_up = 0
                this.jsonConfig.Close_thepage = 0
                this.jsonConfig.Super_giftbag = 0
                this.jsonConfig.Button_isinvalid2 = 0
                this.jsonConfig.Reward_interface_delayed2 = 0
                this.jsonConfig.ADplacement = 0
                this.jsonConfig.Touchnative = 0
                this.jsonConfig.Touchnative2 = 0
                this.jsonConfig.Touchnative3 = 0
            }

            console.log('config:', this.jsonConfig)

            //初始化广告
            FdAd.initAllAd()
            let callBack = () => {
                if (FdAd.getNativeLoaded) {
                    Laya.timer.clear(this, callBack)
                    if (!localStorage.getItem('showPrivacy')) {
                        this.showPrivacyUI(cb)
                    } else {
                        cb && cb()
                    }
                }
            }
            Laya.timer.frameLoop(1, this, callBack)
        })
        window['wxsdk'].login();
    }
}

enum SceneType {
    BannerNativeUI = "FDScene/BannerNativeUI.scene",
    Box = "FDScene/Box.scene",
    FDHomeUI = "FDScene/FDHomeUI.scene",
    GridNativeUI = "FDScene/GridNativeUI.scene",
    MiddleNativeUI = "FDScene/MiddleNativeUI.scene",
    PrivacyUI = "FDScene/PrivacyUI.scene",
    GiftBoxUI = "FDScene/GiftBoxUI.scene"
}

export enum GiftType {
    Box1 = 0,
    Box2 = 1,
    Box3 = 2
}

export enum GiftFromId {
    From_Home = 0,
    From_Game = 1,
    From_Finish = 2
}