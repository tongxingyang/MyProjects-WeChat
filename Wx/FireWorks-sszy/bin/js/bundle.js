(function () {
    'use strict';

    class PlayerData {
        constructor() {
            this.grade = 1;
            this.coin = 0;
            this.skinId = 0;
            this.skinArr = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
    }
    class PlayerDataMgr {
        static getPlayerData() {
            if (!localStorage.getItem('playerData')) {
                this._playerData = new PlayerData();
                localStorage.setItem('playerData', JSON.stringify(this._playerData));
            }
            else {
                if (this._playerData == null) {
                    this._playerData = JSON.parse(localStorage.getItem('playerData'));
                }
            }
            return this._playerData;
        }
        static setPlayerData() {
            localStorage.setItem('playerData', JSON.stringify(this._playerData));
        }
        static getCostById(id) {
            switch (id) {
                case 0:
                    return 0;
                case 1:
                    return 0;
                case 2:
                    return 0;
                case 3:
                    return 100;
                case 4:
                    return 100;
                case 5:
                    return 100;
                case 6:
                    return 200;
                case 7:
                    return 200;
                case 8:
                    return 200;
                case 9:
                    return 300;
                case 10:
                    return 300;
                case 11:
                    return 300;
                case 12:
                    return 300;
            }
        }
    }
    PlayerDataMgr._playerData = null;

    class WxApi {
        static LoginWx(cb) {
            if (!Laya.Browser.onWeiXin)
                return;
            let launchData = Laya.Browser.window.wx.getLaunchOptionsSync();
            Laya.Browser.window.wx.login({
                success(res) {
                    if (res.code) {
                        console.log('res.code:', res.code);
                        if (cb) {
                            cb(res.code, launchData.query);
                        }
                    }
                }
            });
        }
        static GetLaunchParam(fun) {
            if (Laya.Browser.onWeiXin) {
                this.OnShowFun = fun;
                fun(this.GetLaunchPassVar());
                Laya.Browser.window.wx.onShow((para) => {
                    if (this.OnShowFun != null) {
                        this.OnShowFun(para);
                    }
                    console.log("wx on show");
                });
            }
        }
        static GetLaunchPassVar() {
            if (Laya.Browser.onWeiXin) {
                return Laya.Browser.window.wx.getLaunchOptionsSync();
            }
            else {
                return null;
            }
        }
        static WxOnHide(fun) {
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.onHide(fun);
            }
        }
        static WxOffHide(fun) {
            if (fun && Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.offHide(fun);
            }
        }
        static WxOnShow(fun) {
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.onShow(fun);
            }
        }
        static WxOffShow(fun) {
            if (fun && Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.offShow(fun);
            }
        }
        static httpRequest(url, params, type = 'get', completeHandler) {
            var xhr = new Laya.HttpRequest();
            xhr.http.timeout = 5000;
            xhr.once(Laya.Event.COMPLETE, this, completeHandler);
            xhr.once(Laya.Event.ERROR, this, this.httpRequest, [url, params, type, completeHandler]);
            if (type == "get") {
                xhr.send(url + '?' + params, "", type, "text");
            }
            else if (type == "post") {
                xhr.send(url, JSON.stringify(params), type, "text");
            }
        }
        static DoVibrate(isShort = true) {
            if (Laya.Browser.onWeiXin && this.isVibrate) {
                if (isShort) {
                    Laya.Browser.window.wx.vibrateShort();
                }
                else {
                    Laya.Browser.window.wx.vibrateLong();
                }
            }
        }
        static loopVibrate() {
            Laya.timer.loop(200, this, this.DoVibrate);
        }
        static stopLoopVibrate() {
            Laya.timer.clear(this, this.DoVibrate);
        }
        static OpenAlert(msg, dur = 2000, icon = false) {
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.showToast({
                    title: msg,
                    duration: dur,
                    mask: false,
                    icon: icon ? 'success' : 'none',
                });
            }
        }
        static preViewImage(url) {
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.previewImage({
                    current: url,
                    urls: [url]
                });
            }
        }
    }
    WxApi.UnityPath = 'LayaScene_SampleScene/Conventional/';
    WxApi.version = '';
    WxApi.isVibrate = true;
    WxApi.isMusic = true;
    WxApi.OnShowFun = null;

    class CameraCrl extends Laya.Script {
        constructor() {
            super();
            this.isLookAt = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onDisable() {
        }
        gameStart() {
            let pos = new Laya.Vector3(0, 2, -3);
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.2, pos);
            this.myOwner.transform.position = pos;
            let r = new Laya.Vector3(-15, 180, 0);
            Laya.Vector3.lerp(this.myOwner.transform.rotationEuler.clone(), r, 0.2, r);
            this.myOwner.transform.rotationEuler = r;
        }
        resetCamera() {
            let pos = new Laya.Vector3();
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), GameLogic.Share.camStartPos, 0.2, pos);
            this.myOwner.transform.position = pos;
            let r = new Laya.Quaternion();
            Laya.Quaternion.lerp(this.myOwner.transform.rotation.clone(), GameLogic.Share.camStartRotation, 0.2, r);
            this.myOwner.transform.rotation = r;
        }
        onUpdate() {
            if (this.isLookAt) {
                this.gameStart();
            }
            else {
                this.resetCamera();
            }
        }
    }

    class FdAd {
        static inidAd(cb) {
            if (!Laya.Browser.onWeiXin) {
                cb && cb();
                return;
            }
            ;
            this.initBanner();
            this.createVideoAd();
            this.initGridAD();
            this.createInterstitialAd();
            let func = () => {
                if (this.isFullGridAdLoaded) {
                    Laya.timer.clear(this, func);
                    cb && cb();
                }
            };
            Laya.timer.loop(100, this, func);
        }
        static getSystemInfoSync() {
            if (!Laya.Browser.onWeiXin)
                return;
            if (!this.sysInfo) {
                this.sysInfo = Laya.Browser.window['wx'].getSystemInfoSync();
            }
            return this.sysInfo;
        }
        static initBanner() {
            if (!Laya.Browser.onWeiXin)
                return;
            this.bannerIdArr = this.shuffleArr(this.bannerIdArr);
            console.log('bannerId 数组排列：', this.bannerIdArr);
            if (!FdMgr.canTrapAll && this.bannerAds.length > 1) {
                this.bannerAds.splice(0, this.bannerAds.length - 1);
            }
            for (let i = 0; i < this.bannerIdArr.length; i++) {
                this.bannerTimesArr.push(0);
                this.bannerShowCount.push(0);
                this.bannerErrorArr.push(false);
            }
            for (let i = 0; i < this.bannerIdArr.length; i++) {
                let bannerAd = this.createBannerAd(i);
                this.bannerAds.push(bannerAd);
            }
        }
        static get isAllBannerError() {
            let isAllError = true;
            for (let i = 0; i < this.bannerErrorArr.length; i++) {
                if (!this.bannerErrorArr[i]) {
                    isAllError = false;
                    break;
                }
            }
            return isAllError;
        }
        static showBannerAd() {
            if (!Laya.Browser.onWeiXin)
                return;
            if (this.isAllBannerError) {
                this.stopCountBannerTime();
                return;
            }
            for (let i = 0; i < this.bannerErrorArr.length; i++) {
                if (this.bannerErrorArr[this.bannerIndex]) {
                    this.bannerIndex++;
                    if (this.bannerIndex >= this.bannerIdArr.length)
                        this.bannerIndex = 0;
                }
                else {
                    break;
                }
            }
            this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].show();
            this.stopCountBannerTime();
            if (!FdMgr.canTrapAll)
                return;
            Laya.timer.loop(100, this, this.countBannerTime);
        }
        static hideBannerAd() {
            if (!Laya.Browser.onWeiXin)
                return;
            if (this.isAllBannerError) {
                this.stopCountBannerTime();
                return;
            }
            this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide();
            this.stopCountBannerTime();
        }
        static countBannerTime() {
            this.bannerTimesArr[this.bannerIndex] += 0.1;
            if (this.bannerTimesArr[this.bannerIndex] >= FdMgr.jsonConfig.refresh_banner_time) {
                this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide();
                this.bannerTimesArr[this.bannerIndex] = 0;
                this.bannerShowCount[this.bannerIndex]++;
                if (this.bannerShowCount[this.bannerIndex] >= FdMgr.jsonConfig.updateBanner) {
                    this.bannerShowCount[this.bannerIndex] = 0;
                    this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].destroy();
                    this.bannerAds[this.bannerIndex] = null;
                    this.bannerAds[this.bannerIndex] = this.createBannerAd(this.bannerIndex);
                }
                this.bannerIndex++;
                if (this.bannerIndex >= this.bannerIdArr.length)
                    this.bannerIndex = 0;
                this.showBannerAd();
            }
        }
        static stopCountBannerTime() {
            Laya.timer.clear(this, this.countBannerTime);
        }
        static createBannerAd(index, isShow = false) {
            if (!Laya.Browser.onWeiXin)
                return;
            let sysInfo = this.getSystemInfoSync();
            let bannerAd = Laya.Browser.window['wx'].createBannerAd({
                adUnitId: this.bannerIdArr[index],
                style: {
                    top: sysInfo.screenHeight * 0.8,
                    width: 300,
                    left: sysInfo.screenWidth / 2 - 150
                },
                adIntervals: 30
            });
            bannerAd.onLoad(() => {
                if (isShow) {
                    bannerAd.show();
                }
                this.bannerErrorArr[index] = false;
                console.log("Banner广告加载成功");
            });
            bannerAd.onError(err => {
                this.bannerErrorArr[index] = true;
                console.error("Banner广告加载失败", JSON.stringify(err));
            });
            bannerAd.onResize(res => {
                let realHeight = bannerAd.style.realHeight + 0.1;
                bannerAd.style.top = sysInfo.screenHeight - realHeight;
            });
            return bannerAd;
        }
        static createVideoAd() {
            if (Laya.Browser.onWeiXin) {
                var self = this;
                var videoAd = this.videoAd;
                if (videoAd != null) {
                    videoAd.offLoad(onLoadVideo);
                    videoAd.offError(onErrorVideo);
                    videoAd.offClose(onCloseVideo);
                }
                var videoAd = Laya.Browser.window['wx'].createRewardedVideoAd({ adUnitId: self.videoId[0] });
                videoAd.onLoad(onLoadVideo);
                videoAd.onError(onErrorVideo);
                videoAd.onClose(onCloseVideo);
                this.videoAd = videoAd;
            }
            function onLoadVideo() {
                console.log('video 加载成功');
                self.isExistVideoAd = true;
            }
            function onErrorVideo(err) {
                console.error('video 加载错误', err);
                self.isExistVideoAd = false;
            }
            function onCloseVideo(res) {
                let isEnded = (res && res.isEnded || res === undefined) ? true : false;
                if (isEnded) {
                    self.videoFinishCallback && self.videoFinishCallback();
                    self.videoFinishCallback = null;
                }
                self.videoCancelCallback && self.videoCancelCallback();
                self.videoCancelCallback = null;
            }
        }
        static showVideoAd(finishCB, cancelCB) {
            if (!Laya.Browser.onWeiXin) {
                finishCB && finishCB();
                cancelCB && cancelCB();
                return;
            }
            if (!Laya.Browser.onWeiXin)
                return;
            let self = this;
            this.videoFinishCallback = finishCB;
            this.videoCancelCallback = cancelCB;
            if (!this.isExistVideoAd) {
                this.createVideoAd();
            }
            if (Laya.Browser.onWeiXin) {
                var videoAd = this.videoAd;
                videoAd.show().then(() => { }).catch(err => {
                    videoAd.load().then(() => videoAd.show()).catch(err => {
                        self.videoCancelCallback && self.videoCancelCallback();
                        self.videoCancelCallback = null;
                    });
                });
            }
        }
        static destroyVideoAd() {
            if (!this.videoAd)
                return;
            this.videoAd.destroy();
            this.videoAd = null;
        }
        static initGridAD() {
            if (!Laya.Browser.onWeiXin) {
                return;
            }
            this.createFullGrid();
            this.createBottomGrid();
            this.createSideGrid();
            this.createSingleGrid();
        }
        static createFullGrid() {
            if (!Laya.Browser.onWeiXin)
                return;
            if (this.fullGridAd) {
                this.fullGridAd.destroy();
                this.fullGridAd = null;
            }
            this.fullGridAd = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.fullGridId[0],
                adIntervals: 30,
                style: {
                    left: 0,
                    top: this.getSystemInfoSync().screenHeight / 2 - this.getSystemInfoSync().screenWidth / 2 - 50,
                    width: this.getSystemInfoSync().screenWidth
                }
            });
            this.fullGridAd.onError((err) => { this.isFullGridAdLoaded = true; this.fullGridError = true; console.log('全屏格子加载失败:', JSON.stringify(err)); });
            this.fullGridAd.onLoad(() => { this.isFullGridAdLoaded = true; this.fullGridError = false; });
        }
        static visibleFullGridAd(v = true) {
            if (Laya.Browser.onWeiXin && this.fullGridAd && !this.fullGridError) {
                v ? this.fullGridAd.show() : this.fullGridAd.hide();
            }
        }
        static getIsFullGridAdError() {
            if (this.fullGridError)
                this.createFullGrid();
            return this.fullGridError;
        }
        static createBottomGrid() {
            if (this.bottomGridAd) {
                this.bottomGridAd.destroy();
                this.bottomGridAd = null;
            }
            this.bottomGridAd = Laya.Browser.window['wx'].createCustomAd({
                adUnitId: this.bottomGridId[0],
                adIntervals: 30,
                style: {
                    left: 0,
                    top: this.getSystemInfoSync().screenHeight - 110,
                    width: this.getSystemInfoSync().screenWidth
                }
            });
            this.bottomGridAd.onError((err) => { this.bottomGridError = true; console.log('底部格子加载失败:', JSON.stringify(err)); });
            this.bottomGridAd.onLoad(() => { this.bottomGridError = false; });
        }
        static visibleBottomGridAd(v = true) {
            if (!Laya.Browser.onWeiXin)
                return;
            if (this.bottomGridError) {
                this.createBottomGrid();
                return;
            }
            if (this.bottomGridAd) {
                v ? this.bottomGridAd.show() : this.bottomGridAd.hide();
            }
        }
        static createSideGrid() {
            for (let i = 0; i < this.sideGridAd.length; i++) {
                this.sideGridAd[i].destroy();
                this.sideGridAd = [];
            }
            for (let i = 0; i < 2; i++) {
                let grid = Laya.Browser.window['wx'].createCustomAd({
                    adUnitId: this.sideGridId[0],
                    adIntervals: 30,
                    style: {
                        left: i == 0 ? 0 : this.getSystemInfoSync().screenWidth - 65,
                        top: this.getSystemInfoSync().screenHeight / 2 - 220
                    }
                });
                grid.onError((err) => { ; console.log('屏幕侧格子加载失败:', JSON.stringify(err)); });
                grid.onLoad(() => { this.sideGridAd.push(grid); });
            }
        }
        static visibleSideGridAd(v = true) {
            if (!Laya.Browser.onWeiXin)
                return;
            if (this.sideGridAd.length <= 0) {
                this.createSideGrid();
                return;
            }
            for (let i = 0; i < this.sideGridAd.length; i++) {
                v ? this.sideGridAd[i].show() : this.sideGridAd[i].hide();
            }
        }
        static createSingleGrid() {
            for (let i = 0; i < this.singleGridAd.length; i++) {
                this.singleGridAd[i].destroy();
                this.singleGridAd = [];
            }
            for (let i = 0; i < 2; i++) {
                let grid = Laya.Browser.window['wx'].createCustomAd({
                    adUnitId: this.singleGridId[0],
                    adIntervals: 30,
                    style: {
                        left: i == 0 ? 0 : this.getSystemInfoSync().screenWidth - 65,
                        top: 120
                    }
                });
                grid.onError((err) => { ; console.log('屏幕单格子加载失败:', JSON.stringify(err)); });
                grid.onLoad(() => { this.singleGridAd.push(grid); });
            }
        }
        static visibleSingleGridAd(v = true) {
            if (!Laya.Browser.onWeiXin)
                return;
            if (this.singleGridAd.length <= 0) {
                this.createSingleGrid();
                return;
            }
            for (let i = 0; i < this.singleGridAd.length; i++) {
                v ? this.singleGridAd[i].show() : this.singleGridAd[i].hide();
            }
        }
        static createInterstitialAd() {
            if (!Laya.Browser.onWeiXin)
                return;
            if (this.intersititialAd) {
                this.intersititialAd.offError();
                this.intersititialAd.offLoad();
                this.intersititialAd.offClose();
                this.intersititialAd.destroy();
                this.intersititialAd = null;
            }
            this.intersititialAd = Laya.Browser.window['wx'].createInterstitialAd({
                adUnitId: this.interstitialId[0]
            });
            this.intersititialAd.onError((err) => { this.intersititialError = true; console.log('插屏广告加载失败:', JSON.stringify(err)); });
            this.intersititialAd.onLoad(() => { this.intersititialError = false; });
            this.intersititialAd.onClose(() => { this.intersititialCB && this.intersititialCB(); });
            this.intersititialAd.load();
        }
        static showInterstitialAd(cb) {
            if (!Laya.Browser.onWeiXin || !this.intersititialAd || this.intersititialError) {
                if (this.intersititialError)
                    this.createInterstitialAd();
                cb && cb();
                return;
            }
            this.intersititialCB = cb;
            this.intersititialAd.show().then(() => { }).catch(err => {
                this.intersititialCB && this.intersititialCB();
            });
        }
        static shuffleArr(arr) {
            let i = arr.length;
            while (i) {
                let j = Math.floor(Math.random() * i--);
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
            return arr;
        }
    }
    FdAd.bannerIdArr = [];
    FdAd.videoId = [];
    FdAd.fullGridId = [];
    FdAd.bottomGridId = [];
    FdAd.sideGridId = [];
    FdAd.singleGridId = [];
    FdAd.interstitialId = [];
    FdAd.bannerAds = [];
    FdAd.bannerIndex = 0;
    FdAd.bannerTimesArr = [];
    FdAd.bannerShowCount = [];
    FdAd.bannerErrorArr = [];
    FdAd.isExistVideoAd = false;
    FdAd.fullGridAd = null;
    FdAd.fullGridError = false;
    FdAd.isFullGridAdLoaded = false;
    FdAd.bottomGridAd = null;
    FdAd.bottomGridError = false;
    FdAd.sideGridAd = [];
    FdAd.singleGridAd = [];
    FdAd.intersititialAd = null;
    FdAd.intersititialCB = null;
    FdAd.intersititialError = false;

    class FdMgr {
        static randTouchProgress() {
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
            FdAd.hideBannerAd();
            Laya.timer.once(1000, this, () => {
                FdAd.showBannerAd();
                Laya.timer.once(800, this, () => {
                    this.bannerShowHide();
                });
            });
        }
        static videoBannerShowHide() {
            FdMgr.visibleVideoBanner(false, false);
            Laya.timer.once(1000, this, () => {
                FdMgr.visibleVideoBanner(true, false);
                Laya.timer.once(800, this, () => {
                    this.videoBannerShowHide();
                });
            });
        }
        static init(cb) {
            this.randTouchProgress();
            if (Laya.Browser.onWeiXin) {
                Laya.loader.load('WXSDK/FDConfig.json', Laya.Handler.create(this, (data) => {
                    FdMgr.version = data.version;
                    FdMgr.appid = data.appid;
                    FdMgr.secret = data.secret;
                    this.getConfig(cb);
                }), null, Laya.Loader.JSON);
            }
            else {
                cb && cb();
            }
        }
        static loadGame(cb) {
            this.showReMen(() => {
                this.showBox1(cb);
            });
        }
        static showHomeUI(v) {
            if (v)
                Laya.Scene.open(SceneType.HomeUI, false);
            else
                Laya.Scene.close(SceneType.HomeUI);
        }
        static showHomeUIReMen(cb) {
            Laya.Scene.open(SceneType.Remen, false, { ccb: cb });
        }
        static showReMen(cb) {
            if (this.showRemen) {
                Laya.Scene.open(SceneType.Remen, false, { ccb: cb });
            }
            else {
                cb && cb();
            }
        }
        static showStartReMen(cb) {
            if (this.startRemen) {
                Laya.Scene.open(SceneType.Remen, false, { ccb: cb });
            }
            else {
                cb && cb();
            }
        }
        static showEndReMen(cb) {
            if (this.endRemen) {
                Laya.Scene.open(SceneType.Remen, false, { ccb: cb, showAdPic: this.endRemen_switch });
            }
            else {
                cb && cb();
            }
        }
        static showBox1(cb) {
            if (this.firstBox) {
                Laya.Scene.open(SceneType.Box1, false, { ccb: cb, type: this.firstBox_switch ? BoxType.Box_VideoBanner : BoxType.Box_Banner });
            }
            else {
                cb && cb();
            }
        }
        static showBox2(cb) {
            if (this.bannerBox) {
                Laya.Scene.open(SceneType.Box1, false, { ccb: cb, type: this.bannerBox_switch ? BoxType.Box_VideoBanner : BoxType.Box_Banner });
            }
            else {
                cb && cb();
            }
        }
        static visibleVideoBanner(visible, showFinger = true) {
            if (visible)
                Laya.Scene.open(SceneType.VideoBanner, false, { showFinger: showFinger });
            else
                Laya.Scene.close(SceneType.VideoBanner);
        }
        static showVirtualWxpage(cb) {
            if (this.showVitualWx && Laya.Browser.onWeiXin) {
                Laya.Browser.window['wx'].showModal({
                    title: '提示',
                    content: '未观看完广告无法获取奖励，是否继续？',
                    success: (res) => {
                        if (this.showVirtualCount < this.jsonConfig.vitualWx_count) {
                            this.showVirtualCount++;
                            FdAd.showVideoAd(null, () => { this.showVirtualWxpage(cb); });
                        }
                        else {
                            this.showVirtualCount = 0;
                            cb && cb();
                        }
                    }
                });
            }
            else {
                cb && cb();
            }
        }
        static inHomePage(cb) {
            this.showHomeUI(true);
            FdAd.showInterstitialAd();
            FdAd.visibleSideGridAd();
            FdAd.showBannerAd();
            cb && cb();
        }
        static inShop() {
            this.showHomeUI(false);
            FdAd.hideBannerAd();
            FdAd.visibleSideGridAd(false);
            FdAd.visibleBottomGridAd(false);
        }
        static startGame(cb) {
            this.showHomeUI(false);
            FdAd.hideBannerAd();
            FdAd.visibleSideGridAd(false);
            FdAd.visibleBottomGridAd(false);
            FdAd.showInterstitialAd(() => {
                this.showStartReMen(() => {
                    this.showBox2(() => {
                        this.showVirtualWxpage(cb);
                    });
                });
            });
        }
        static inGame() {
            FdAd.showBannerAd();
            FdAd.visibleSingleGridAd();
        }
        static showGameOver(cb) {
            this.visibleVideoBanner(false);
            FdAd.hideBannerAd();
            FdAd.visibleSingleGridAd(false);
            this.showEndReMen(cb);
        }
        static inFinish(backBtn) {
            FdAd.showInterstitialAd();
            FdAd.visibleSideGridAd();
            FdAd.hideBannerAd();
            if (this.endBanner) {
                if (this.endBanner_switch)
                    this.videoBannerShowHide();
                else
                    this.bannerShowHide();
                if (backBtn)
                    backBtn.bottom = 20;
            }
            else {
                if (backBtn)
                    backBtn.bottom = 300;
                FdAd.showBannerAd();
            }
        }
        static closeFinish(cb) {
            Laya.timer.clearAll(this);
            FdAd.visibleBottomGridAd(false);
            FdAd.visibleSideGridAd(false);
            this.visibleVideoBanner(false);
            FdAd.hideBannerAd();
            this.gameCount++;
            this.loadGame(() => {
                Laya.timer.frameOnce(1, this, cb);
            });
        }
        static get allowScene() {
            if (Laya.Browser.onWeiXin && this.jsonConfig.sceneList) {
                var launchInfo = Laya.Browser.window['wx'].getLaunchOptionsSync();
                let scene = launchInfo.scene.toString();
                let arr = this.jsonConfig.sceneList.split(',');
                return arr.indexOf(scene) != -1;
            }
            return true;
        }
        static getConfig(cb) {
            window['wxsdk'].init({
                version: FdMgr.version,
                appid: FdMgr.appid,
                secret: FdMgr.secret,
                share: {
                    title: '你能过得了这一关吗？',
                    image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim',
                },
            });
            window['wxsdk'].onInit(() => {
                console.log('wxsdk初始化成功:', window['wxsdk']);
                let conf = new config();
                for (let key in conf) {
                    conf[key] = window['wxsdk'].conf[key];
                }
                this.jsonConfig = window['wxsdk'].conf;
                console.log('config:', this.jsonConfig);
                if (this.jsonConfig.channel_ditch && !window['wxsdk'].user.channel) {
                    this.jsonConfig.allowMistouch = false;
                    console.log('config1:', this.jsonConfig);
                }
                FdAd.bannerIdArr = window['wxsdk'].conf.bannerIds ? window['wxsdk'].conf.bannerIds.split(',') : [];
                FdAd.videoId = window['wxsdk'].conf.videoIds ? window['wxsdk'].conf.videoIds.split(',') : [];
                FdAd.fullGridId = window['wxsdk'].conf.fullGridIds ? window['wxsdk'].conf.fullGridIds.split(',') : [];
                FdAd.bottomGridId = window['wxsdk'].conf.bottomGridIds ? window['wxsdk'].conf.bottomGridIds.split(',') : [];
                FdAd.sideGridId = window['wxsdk'].conf.sideGridIds ? window['wxsdk'].conf.sideGridIds.split(',') : [];
                FdAd.singleGridId = window['wxsdk'].conf.singleGridIds ? window['wxsdk'].conf.singleGridIds.split(',') : [];
                FdAd.interstitialId = window['wxsdk'].conf.interstitialIds ? window['wxsdk'].conf.interstitialIds.split(',') : [];
                FdAd.inidAd(() => {
                    cb && cb();
                });
            });
            window['wxsdk'].login();
        }
        static get isVersionValid() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
        }
        static get canTrapAll() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
        }
        static get bannerBox() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.bannerBox;
        }
        static get showRemen() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.showRemen;
        }
        static get showVitualWx() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.showVitualWx;
        }
        static get remenBanner() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.remenBanner;
        }
        static get endBanner() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.endBanner;
        }
        static get startRemen() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.startRemen;
        }
        static get endRemen() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.endRemen;
        }
        static get endRemen_switch() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.endRemen_switch;
        }
        static get firstBox_switch() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.firstBox_switch;
        }
        static get firstBox() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.firstBox;
        }
        static get bannerBox_switch() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.bannerBox_switch;
        }
        static get endBanner_switch() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.endBanner_switch;
        }
        static get homeViedo() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.homeViedo;
        }
    }
    FdMgr.version = '1.0.7';
    FdMgr.appid = '';
    FdMgr.secret = '';
    FdMgr.wuchuProgressValue = 0;
    FdMgr.wuchuProgressStepAdd = 0.1;
    FdMgr.wuchuProgressFrameSub = 0.0032;
    FdMgr.gameCount = 1;
    FdMgr.showVirtualCount = 0;
    class config {
    }
    var SceneType;
    (function (SceneType) {
        SceneType["Remen"] = "FDScene/Remen.scene";
        SceneType["Box1"] = "FDScene/Box1.scene";
        SceneType["VideoBanner"] = "FDScene/VideoBanner.scene";
        SceneType["HomeUI"] = "FDScene/HomeUI.scene";
    })(SceneType || (SceneType = {}));
    var BoxType;
    (function (BoxType) {
        BoxType[BoxType["Box_Banner"] = 0] = "Box_Banner";
        BoxType[BoxType["Box_VideoBanner"] = 1] = "Box_VideoBanner";
    })(BoxType || (BoxType = {}));

    class SoundMgr {
        constructor() {
            this.effectArr = [];
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new SoundMgr();
            }
            return this._instance;
        }
        initLoading(fun) {
            var resUrl = [
                { url: 'res/Sounds/Click.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Get.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Hurt.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Win.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Lose.mp3', type: Laya.Loader.SOUND }
            ];
            Laya.loader.load(resUrl, Laya.Handler.create(this, fun));
            Laya.SoundManager.setMusicVolume(1);
            Laya.SoundManager.setSoundVolume(1);
        }
        playMusic(str, loops = 0, cb) {
            Laya.SoundManager.playMusic('res/Sounds/' + str, loops, new Laya.Handler(this, cb));
        }
        stopMusic() {
            Laya.SoundManager.stopMusic();
        }
        playSoundEffect(str, loops = 1, cb, soundClass, startTime) {
            return Laya.SoundManager.playSound('res/Sounds/' + str, loops, new Laya.Handler(this, cb), soundClass, startTime);
        }
        stopSound(str) {
            Laya.SoundManager.stopSound('res/Sounds/' + str);
        }
    }

    class Utility {
        static calcDistance(a, b) {
            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        }
        static getWorldDis(a, b) {
            let pA = a.transform.position.clone();
            let pB = b.transform.position.clone();
            return Laya.Vector3.distance(pA, pB);
        }
        static getDirectionAToB(A, B, normalize = true) {
            let pA = A.transform.position.clone();
            let pB = B.transform.position.clone();
            let dir = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(pB, pA, dir);
            if (normalize)
                Laya.Vector3.normalize(dir, dir);
            return dir;
        }
        static fixPosY(y, designHeight = 1334) {
            return y * Laya.stage.displayHeight / designHeight;
        }
        static findNodeByName(rootNode, name) {
            let targetNode = null;
            let funC = (node) => {
                for (let i = 0; i < node.numChildren; i++) {
                    if (node.getChildAt(i).name == name) {
                        targetNode = node.getChildAt(i);
                        return;
                    }
                    else {
                        funC(node.getChildAt(i));
                    }
                }
            };
            funC(rootNode);
            return targetNode;
        }
        static findNodeByNameArr(rootNode, name) {
            let targetNode = [];
            let funC = (node) => {
                for (let i = 0; i < node.numChildren; i++) {
                    if (node.getChildAt(i).name.search(name) != -1) {
                        targetNode.push(node.getChildAt(i));
                    }
                    funC(node.getChildAt(i));
                }
            };
            funC(rootNode);
            return targetNode;
        }
        static TmoveTo(node, duration, des, cb, ease) {
            if (!node.transform)
                return;
            let t = new Laya.Tween();
            var posOld = node.transform.position;
            t.to(node.transform.position, {
                x: des.x,
                y: des.y,
                z: des.z,
                update: new Laya.Handler(this, () => {
                    if (!node.transform)
                        return;
                    node.transform.position = posOld;
                })
            }, duration, ease, Laya.Handler.create(this, () => {
                cb && cb();
            }));
        }
        static TmoveToYZ(node, duration, des, cb, ease) {
            if (!node.transform)
                return;
            let t = new Laya.Tween();
            var posOld = node.transform.position;
            t.to(node.transform.position, {
                y: des.y,
                z: des.z,
                update: new Laya.Handler(this, () => {
                    if (node.transform)
                        node.transform.position = posOld;
                })
            }, duration, null, Laya.Handler.create(this, () => {
                cb && cb();
            }));
            return t;
        }
        static TmoveToX(node, duration, des, cb, ease) {
            if (!node.transform)
                return;
            let t = new Laya.Tween();
            var posOld = node.transform.localPosition;
            t.to(node.transform.localPosition, {
                x: des.x,
                update: new Laya.Handler(this, () => {
                    if (node.transform)
                        node.transform.localPosition = posOld;
                })
            }, duration, null, Laya.Handler.create(this, () => {
                cb && cb();
            }));
        }
        static TmoveToY(node, duration, des, cb, ease) {
            if (!node.transform)
                return;
            let t = new Laya.Tween();
            var posOld = node.transform.localPosition;
            t.to(node.transform.localPosition, {
                y: des.y,
                update: new Laya.Handler(this, () => {
                    if (node.transform)
                        node.transform.localPosition = posOld;
                })
            }, duration, ease, Laya.Handler.create(this, () => {
                cb && cb();
            }));
        }
        static TmoveToWorld(node, duration, des, cb, ease) {
            if (!node.transform)
                return;
            let t = new Laya.Tween();
            var posOld = node.transform.position;
            t.to(node.transform.position, {
                y: des.y,
                update: new Laya.Handler(this, () => {
                    if (node.transform)
                        node.transform.position = posOld;
                })
            }, duration, null, Laya.Handler.create(this, () => {
                cb && cb();
            }));
        }
        static RotateWithPoint(nodePos, dir, angle) {
            let desPos = new Laya.Vector3();
            let p = nodePos.clone();
            angle = angle * Math.PI / 180;
            desPos.x = p.x * Math.cos(angle) + (dir.y * p.z - dir.z * p.y) * Math.sin(angle) +
                dir.x * (dir.x * p.x + dir.y * p.y + dir.z * p.z) * (1 - Math.cos(angle));
            desPos.y = p.y * Math.cos(angle) + (dir.x * p.z - dir.z * p.x) * Math.sin(angle) +
                dir.y * (dir.x * p.x + dir.y * p.y + dir.z * p.z) * (1 - Math.cos(angle));
            desPos.z = p.z * Math.cos(angle) + (dir.x * p.y - dir.y * p.x) * Math.sin(angle) +
                dir.z * (dir.x * p.x + dir.y * p.y + dir.z * p.z) * (1 - Math.cos(angle));
            return desPos;
        }
        static RotateTo(node, duration, des, cb) {
            var rotationOld = node.transform.rotationEuler;
            Laya.Tween.to(node.transform.rotationEuler, {
                x: des.x,
                y: des.y,
                z: des.z,
                update: new Laya.Handler(this, function () {
                    if (node)
                        node.transform.rotationEuler = rotationOld;
                })
            }, duration, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                cb && cb();
            }));
        }
        static tMove2D(node, x, y, t, cb) {
            Laya.Tween.to(node, { x: x, y: y }, t, null, new Laya.Handler(this, () => {
                if (cb)
                    cb();
            }));
        }
        static scaleTo2D(node, s, t, cb) {
            Laya.Tween.to(node, { scaleX: s, scaleY: s }, t, null, new Laya.Handler(this, () => {
                if (cb)
                    cb();
            }));
        }
        static alphaTo2D(node, s, t, cb) {
            Laya.Tween.to(node, { alpha: s }, t, null, new Laya.Handler(this, () => {
                if (cb)
                    cb();
            }));
        }
        static updateNumber(baseNum, times, label, labelOrFont = true, inclease, cb) {
            let timesNum = baseNum * times;
            let dt = Math.floor((timesNum - baseNum) / 60);
            dt = dt <= 0 ? 1 : dt;
            let func = () => {
                if (inclease) {
                    baseNum += dt;
                    if (baseNum >= timesNum) {
                        baseNum = timesNum;
                        cb && cb();
                        Laya.timer.clear(this, func);
                    }
                    if (labelOrFont)
                        label.text = baseNum.toString();
                    else
                        label.value = baseNum.toString();
                }
                else {
                    timesNum -= dt;
                    if (timesNum <= baseNum) {
                        timesNum = baseNum;
                        cb && cb();
                        Laya.timer.clear(this, func);
                    }
                    if (labelOrFont)
                        label.text = timesNum.toString();
                    else
                        label.value = timesNum.toString();
                }
            };
            Laya.timer.frameLoop(1, this, func);
        }
        static loadJson(str, complete) {
            Laya.loader.load(str, Laya.Handler.create(this, complete), null, Laya.Loader.JSON);
        }
        static objectShake(target, shakeTime = 1, shakeAmount = 0.7) {
            var shake = shakeTime;
            var decreaseFactor = 1;
            var originalPos = target.transform.localPosition.clone();
            Laya.timer.frameLoop(1, this, updateShake);
            function randomPos() {
                var x = Math.random() > 0.5 ? Math.random() : -(Math.random());
                var y = Math.random() > 0.5 ? Math.random() : -(Math.random());
                return new Laya.Vector3(x, y, 0);
            }
            function updateShake() {
                if (shake > 0) {
                    var pos = new Laya.Vector3();
                    Laya.Vector3.scale(randomPos(), shakeAmount, pos);
                    Laya.Vector3.add(originalPos, pos, pos);
                    target.transform.localPosition = pos;
                    shake -= 0.02 * decreaseFactor;
                }
                else {
                    shake = 0;
                    target.transform.localPosition = originalPos;
                    Laya.timer.clear(this, updateShake);
                }
            }
        }
        static getRandomItemInArr(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        static shuffleArr(arr) {
            let i = arr.length;
            while (i) {
                let j = Math.floor(Math.random() * i--);
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
            return arr;
        }
        static GetRandom(mix, max, isInt = true) {
            let w = max - mix;
            let r1 = Math.random() * (w + 1);
            r1 += mix;
            return isInt ? Math.floor(r1) : r1;
        }
        static coinCollectAnim(skinDir, startPos, endPos, parent, amount = 10, callBack) {
            let am = amount;
            for (var i = 0; i < amount; i++) {
                let coin = new Laya.Image(skinDir);
                coin.x = startPos.x;
                coin.y = startPos.y;
                parent.addChild(coin);
                let time = 200 + Math.random() * 100 - 50;
                Laya.Tween.to(coin, { x: coin.x + Math.random() * 250 - 125, y: coin.y + Math.random() * 250 - 125 }, time);
                Laya.timer.once(time + 50, this, function () {
                    Laya.Tween.to(coin, { scaleX: 0, scaleY: 0 }, 300, null, new Laya.Handler(this, function () {
                    }));
                    Laya.Tween.to(coin, { x: endPos.x, y: endPos.y }, 350, null, new Laya.Handler(this, function () {
                        parent.removeChild(coin);
                        Laya.Pool.recover("coin", coin);
                        am--;
                        if (am == 0 && callBack)
                            callBack();
                    }));
                });
            }
        }
        static scaleLoop(node, rate, t) {
            var tw = Laya.Tween.to(node, { scaleX: rate, scaleY: rate }, t, null, new Laya.Handler(this, () => {
                Laya.Tween.to(node, { scaleX: 1, scaleY: 1 }, t, null, new Laya.Handler(this, () => {
                    this.scaleLoop(node, rate, t);
                }));
            }));
        }
        static rotateLoop(node, rate, t) {
            var tw = Laya.Tween.to(node, { rotation: rate }, t, null, new Laya.Handler(this, () => {
                Laya.Tween.to(node, { rotation: -rate }, 2 * t, null, new Laya.Handler(this, () => {
                    Laya.Tween.to(node, { rotation: 0 }, t, null, new Laya.Handler(this, () => {
                        this.rotateLoop(node, rate, t);
                    }));
                }));
            }));
        }
        static visibleDelay(node, duration) {
            node.visible = false;
            Laya.timer.once(duration, this, () => { node.visible = true; });
        }
        static pointInPolygon(point, vs) {
            var x = point.x, y = point.y;
            var inside = false;
            for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
                var xi = vs[i].x, yi = vs[i].y;
                var xj = vs[j].x, yj = vs[j].y;
                var intersect = ((yi > y) != (yj > y))
                    && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                if (intersect)
                    inside = !inside;
            }
            return inside;
        }
        static getSprite3DResByUrl(url, parent, worldPosStays = false) {
            let res = Laya.loader.getRes(WxApi.UnityPath + url);
            return Laya.Sprite3D.instantiate(res, parent, worldPosStays, new Laya.Vector3(0, 0, 0));
        }
        static getRandomItemInArrWithoutSelf(self, arr, count = 1) {
            let temp = [].concat(arr);
            temp.splice(temp.indexOf(self), 1);
            temp = this.shuffleArr(temp);
            return temp.slice(0, count);
        }
        static getBoundBox(node, fix = false) {
            let coll = node.getComponent(Laya.PhysicsCollider);
            let shape = coll.colliderShape;
            let pos = node.transform.position.clone();
            pos.x += shape.localOffset.x;
            pos.y += shape.localOffset.y;
            pos.z += shape.localOffset.z;
            let parent = node.parent;
            let sz = 1;
            if (parent && parent.transform && fix) {
                sz = parent.transform.localScaleZ;
            }
            let min = new Laya.Vector3(pos.x - shape.sizeX / 2, pos.y - shape.sizeY / 2, pos.z - shape.sizeZ / 2);
            let max = new Laya.Vector3(pos.x + shape.sizeX / 2, pos.y + shape.sizeY / 2, pos.z + (shape.sizeZ * sz / 2) / 2);
            return new Laya.BoundBox(min, max);
        }
        static getBoundBoxWithMinMax(min, max) {
            return new Laya.BoundBox(min, max);
        }
        static addClickEvent(btn, caller, callBack, param, isScale) {
            btn.offAllCaller(caller);
            if (btn instanceof Laya.Button && !isScale) {
                let callback = (event) => {
                    if (callBack)
                        callBack.call(caller, event);
                };
                btn.on(Laya.Event.CLICK, caller, callback, [param]);
            }
            else {
                let scaleTime = 60;
                let wRatio = 1;
                let scaleX = btn.scaleX * wRatio;
                let scaleY = btn.scaleY * wRatio;
                let size = 0.9 * wRatio;
                let isPressed = false;
                let cbDown = (event) => {
                    isPressed = true;
                    SoundMgr.instance.playSoundEffect('Click.mp3');
                    Laya.Tween.to(btn, { scaleX: size, scaleY: size }, scaleTime);
                };
                btn.on(Laya.Event.MOUSE_DOWN, caller, cbDown, [param]);
                let cbUp = (event) => {
                    if (isPressed == false)
                        return;
                    isPressed = false;
                    Laya.Tween.to(btn, { scaleX: scaleX, scaleY: scaleY }, scaleTime, null, new Laya.Handler(caller, () => {
                        if (callBack)
                            callBack.call(caller, event);
                    }));
                };
                btn.on(Laya.Event.MOUSE_UP, caller, cbUp, [param]);
                let cbOut = (event) => {
                    Laya.Tween.to(btn, { scaleX: scaleX, scaleY: scaleY }, scaleTime);
                };
                btn.on(Laya.Event.MOUSE_OUT, caller, cbOut, [param]);
            }
        }
        static getVector3(x, y, z) {
            return new Laya.Vector3(Number(x), Number(y), Number(z));
        }
        static d3_getRgbByHex(_hexColor) {
            var color = [], rgb = [];
            let hexColor = _hexColor.replace(/#/, "");
            if (hexColor.length == 3) {
                var tmp = [];
                for (var i = 0; i < 3; i++) {
                    tmp.push(hexColor.charAt(i) + hexColor.charAt(i));
                }
                hexColor = tmp.join("");
            }
            for (var i = 0; i < 4; i++) {
                color[i] = "0x" + hexColor.substr(i * 2, 2);
                rgb.push(parseInt(color[i]));
            }
            return new Laya.Vector4(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, 1);
        }
    }

    class FireWork1 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            Laya.timer.once(2000, this, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(1000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(4000, this, () => {
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 3; i++) {
                Laya.timer.once(i * 400, this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3');
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 2000, pos, () => {
                this.createFW(base.transform.position.clone());
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect('k8Expl_2.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(0);
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 3 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork2 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            Laya.timer.once(2000, this, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(1000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(8000, this, () => {
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 6; i++) {
                Laya.timer.once(i * 1000, this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3');
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 2000, pos, () => {
                this.createFW(base.transform.position.clone());
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect('BsExpl10_tresk.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(1);
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 3 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork3 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.fw3 = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fw3 = Utility.findNodeByName(this.myOwner, 'fw3');
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            SoundMgr.instance.playSoundEffect('BlackDeathZ.mp3');
            Laya.timer.once(2000, this, () => {
                this.fw3.active = true;
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(3000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(8000, this, () => {
                this.fw3.active = false;
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 10; i++) {
                Laya.timer.once(i * 500 + (Math.random() * 400 - 200), this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3');
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 2000, pos, () => {
                this.createFW(base.transform.position.clone());
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect('BsExpl08_3.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(1, 2));
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 3 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork4 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.base = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.base = Utility.findNodeByName(this.myOwner, 'Base');
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y += 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(Math.random() * 4000, this, () => {
                    this.initData();
                });
            });
            SoundMgr.instance.playSoundEffect('fitil.mp3');
        }
        initData() {
            this.shoot();
        }
        shoot() {
            SoundMgr.instance.playSoundEffect('rocketLaunchBig_1.mp3');
            this.base.active = true;
            let pos = this.myOwner.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(this.myOwner, 1500, pos, () => {
                this.createFW(this.myOwner.transform.position.clone());
                this.myOwner.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect('BsExpl10_tresk.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(0, 5));
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 5 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork5 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.base = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.base = Utility.findNodeByName(this.myOwner, 'Base');
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y += 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(Math.random() * 4000, this, () => {
                    this.initData();
                });
            });
            SoundMgr.instance.playSoundEffect('fitil.mp3');
        }
        initData() {
            this.shoot();
        }
        shoot() {
            SoundMgr.instance.playSoundEffect('rocketLaunchBig_1.mp3');
            this.base.active = true;
            let pos = this.myOwner.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(this.myOwner, 1500, pos, () => {
                this.createFW(this.myOwner.transform.position.clone());
                this.myOwner.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect('BsExpl10_tresk.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(0, 5));
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 5 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork6 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.base = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.base = Utility.findNodeByName(this.myOwner, 'Base');
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y += 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(Math.random() * 4000, this, () => {
                    this.initData();
                });
            });
            SoundMgr.instance.playSoundEffect('fitil.mp3');
        }
        initData() {
            this.shoot();
        }
        shoot() {
            SoundMgr.instance.playSoundEffect('rocketLaunchBig_1.mp3');
            this.base.active = true;
            let pos = this.myOwner.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(this.myOwner, 1500, pos, () => {
                this.createFW(this.myOwner.transform.position.clone());
                this.myOwner.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect('BsExpl10_tresk.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(0, 5));
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 5 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork7 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            Laya.timer.once(2000, this, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(3000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(7000, this, () => {
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 30; i++) {
                Laya.timer.once(i * 200 + (Math.random() * 100 - 50), this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('svist1.mp3', 1, null, null, 0.4);
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            base.getChildAt(0).active = false;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 1000, pos, () => {
                this.createFW(base.transform.position.clone());
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect('Boom1.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(1);
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 3 + 5;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 1;
        }
        onUpdate() {
        }
    }

    class FireWork8 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            Laya.timer.once(2000, this, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(3000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(13000, this, () => {
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 25; i++) {
                Laya.timer.once(i * 400 + (Math.random() * 600 - 300), this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3');
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 2000, pos, () => {
                this.createFW(base.transform.position.clone());
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect(Math.random() > 0.8 ? 'BsExpl10_tresk.mp3' : 'BsExpl08_3.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(0, 7));
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 6 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork9 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            Laya.timer.once(2000, this, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(3000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(15000, this, () => {
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 15; i++) {
                Laya.timer.once(i * 1000 + (Math.random() * 400 - 200), this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3');
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 2000, pos, () => {
                this.createFW(base.transform.position.clone());
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect('BsExpl08_3.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(0, 8));
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 6 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork10 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            Laya.timer.once(2000, this, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(3000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(16000, this, () => {
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 35; i++) {
                Laya.timer.once(i * 400 + (Math.random() * 600 - 300), this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3');
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 2000, pos, () => {
                let p = base.transform.position.clone();
                this.createFW(p);
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect(Math.random() > 0.8 ? 'BsExpl10_tresk.mp3' : 'BsExpl08_3.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(0, 9));
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 6 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork11 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            Laya.timer.once(2000, this, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(3000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(17000, this, () => {
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 40; i++) {
                Laya.timer.once(i * 400 + (Math.random() * 600 - 300), this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3');
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 2000, pos, () => {
                this.createFW(base.transform.position.clone());
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect(Math.random() > 0.8 ? 'BsExpl10_tresk.mp3' : 'BsExpl08_3.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(0, 9));
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 6 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork12 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.1;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            Laya.timer.once(2000, this, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(3000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(19000, this, () => {
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 45; i++) {
                Laya.timer.once(i * 400 + (Math.random() * 600 - 300), this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3');
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 2000, pos, () => {
                this.createFW(base.transform.position.clone());
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect(Math.random() > 0.8 ? 'BsExpl10_tresk.mp3' : 'BsExpl08_3.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(Utility.GetRandom(0, 9));
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = Math.random() * 6 + 10;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class FireWork13 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.fire = null;
            this.count = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.fire = Utility.findNodeByName(this.myOwner, 'fire');
            this.fire.active = true;
            let fireParent = this.fire.parent;
            let pos = fireParent.transform.position.clone();
            pos.y -= 0.3;
            Utility.TmoveTo(fireParent, 2000, pos, null);
            SoundMgr.instance.playSoundEffect('fitil.mp3');
            Laya.timer.once(2000, this, () => {
                GameLogic.Share._cameraCrl.isLookAt = false;
                Laya.timer.once(2000, this, () => {
                    Utility.findNodeByName(this.owner, 'fire').active = false;
                    this.initData();
                });
            });
        }
        initData() {
            this.shoot();
            Laya.timer.once(4000, this, () => {
                GameLogic.Share.gameOver(true);
            });
        }
        shoot() {
            for (let i = 0; i < 1; i++) {
                Laya.timer.once(i * 400 + (Math.random() * 600 - 300), this, () => {
                    this.createBase();
                });
            }
        }
        createBase() {
            SoundMgr.instance.playSoundEffect('BsLaunch08_1.mp3');
            let res = GameLogic.Share._scene.getChildByName('Base');
            let base = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            base.active = true;
            let bPos = base.transform.position.clone();
            bPos.y = this.fire.transform.position.y;
            base.transform.position = bPos;
            let pos = base.transform.position.clone();
            pos.y += (Math.random() * 6 - 3) + 20;
            pos.x += Math.random() * 10 - 5;
            Utility.TmoveTo(base, 2000, pos, () => {
                let p = base.transform.position.clone();
                this.createFW(p);
                Laya.timer.once(500, this, () => {
                    this.createFW(p);
                });
                Laya.timer.once(1000, this, () => {
                    this.createFW(p);
                });
                base.destroy();
            }, Laya.Ease.linearIn);
        }
        createFW(pos) {
            Utility.objectShake(GameLogic.Share._camera, 0.2, 0.1);
            SoundMgr.instance.playSoundEffect('BsExpl10_tresk.mp3');
            let res = GameLogic.Share._scene.getChildByName('PtNode').getChildAt(10);
            let pt = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            pt.transform.position = pos;
            let s = 1;
            pt.transform.setWorldLossyScale(new Laya.Vector3(s, s, s));
            pt.active = true;
            pt.particleSystem.startLifetimeConstant = 2;
        }
        onUpdate() {
        }
    }

    class GameLogic {
        constructor() {
            this.camStartPos = new Laya.Vector3(0, 0, 0);
            this.camStartRotation = null;
            this._cameraCrl = null;
            this.startCamField = 60;
            this.isStartGame = false;
            this.isGameOver = false;
            this.isWin = false;
            this.isPause = true;
            this.isFinish = false;
            this.isSelectingSkin = false;
            this._levelNode = null;
            this._fw = null;
            this._fwArr = [];
            this._fwId = 0;
            if (!Laya.Browser.onWeiXin)
                localStorage.clear();
            GameLogic.Share = this;
            PlayerDataMgr.getPlayerData();
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.showShareMenu({
                    withShareTicket: true,
                    menus: ['shareAppMessage', 'shareTimeline']
                });
                Laya.Browser.window.wx.onShareAppMessage(() => {
                    return {
                        title: '闪烁之夜3D',
                        imageUrl: ''
                    };
                });
            }
            Laya.Scene.open('MyScenes/LoadingUI.scene');
        }
        initScene() {
            Laya.Scene3D.load(WxApi.UnityPath + 'SampleScene.ls', Laya.Handler.create(this, this.onLoadScene));
        }
        onLoadScene(scene) {
            Laya.Scene.open('MyScenes/StartUI.scene');
            this._scene = Laya.stage.addChild(scene);
            Laya.stage.setChildIndex(this._scene, 0);
            this._camera = this._scene.getChildByName('Main Camera');
            this._light = this._scene.getChildByName('Directional Light');
            this._light.shadowMode = Laya.ShadowMode.SoftHigh;
            this._light.shadowDistance = 30;
            this._light.shadowResolution = 1024;
            this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            this.camStartPos = this._camera.transform.position.clone();
            this.camStartRotation = this._camera.transform.rotation.clone();
            this._camera.fieldOfView = this.startCamField;
            this._cameraCrl = this._camera.addComponent(CameraCrl);
            this._levelNode = this._scene.addChild(new Laya.Sprite3D());
        }
        gameStart(id) {
            this._cameraCrl.isLookAt = true;
            this._fwId = id;
            if (id == 3 || id == 4 || id == 5) {
                for (let i = 0; i < 5; i++) {
                    this.createFireWorkArr(id, i);
                }
            }
            else {
                this.createFireWork(id);
            }
        }
        startFire() {
            if (this._fwId == 0) {
                this._fw.addComponent(FireWork1);
            }
            else if (this._fwId == 1) {
                this._fw.addComponent(FireWork2);
            }
            else if (this._fwId == 2) {
                this._fw.addComponent(FireWork3);
            }
            else if (this._fwId == 3) {
                for (let i = 0; i < this._fwArr.length; i++) {
                    let fw = this._fwArr[i];
                    fw.addComponent(FireWork4);
                }
                Laya.timer.once(8000, this, () => {
                    GameLogic.Share.gameOver(true);
                });
            }
            else if (this._fwId == 4) {
                for (let i = 0; i < this._fwArr.length; i++) {
                    let fw = this._fwArr[i];
                    fw.addComponent(FireWork5);
                }
                Laya.timer.once(8000, this, () => {
                    GameLogic.Share.gameOver(true);
                });
            }
            else if (this._fwId == 5) {
                for (let i = 0; i < this._fwArr.length; i++) {
                    let fw = this._fwArr[i];
                    fw.addComponent(FireWork6);
                }
                Laya.timer.once(8000, this, () => {
                    GameLogic.Share.gameOver(true);
                });
            }
            else if (this._fwId == 6) {
                this._fw.addComponent(FireWork7);
            }
            else if (this._fwId == 7) {
                this._fw.addComponent(FireWork8);
            }
            else if (this._fwId == 8) {
                this._fw.addComponent(FireWork9);
            }
            else if (this._fwId == 9) {
                this._fw.addComponent(FireWork10);
            }
            else if (this._fwId == 10) {
                this._fw.addComponent(FireWork11);
            }
            else if (this._fwId == 11) {
                this._fw.addComponent(FireWork12);
            }
            else if (this._fwId == 12) {
                this._fw.addComponent(FireWork13);
            }
        }
        createFireWork(id) {
            let res = GameLogic.Share._scene.getChildByName('FwNode').getChildAt(id);
            this._fw = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            this._fw.transform.position = new Laya.Vector3();
            this._fw.active = true;
        }
        createFireWorkArr(id, index) {
            let res = GameLogic.Share._scene.getChildByName('FwNode').getChildAt(id);
            let fw = Laya.Sprite3D.instantiate(res, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
            fw.transform.position = new Laya.Vector3(-0.45 + index * 0.25, 0, 0);
            fw.active = true;
            this._fwArr.push(fw);
        }
        gameOver(isWin) {
            if (this.isGameOver)
                return;
            WxApi.DoVibrate(false);
            this.isGameOver = true;
            this.isStartGame = false;
            this.isPause = true;
            this.isWin = isWin;
            Laya.Scene.close('MyScenes/GameUI.scene');
            Laya.timer.once(2000, this, () => {
                FdMgr.showGameOver(() => {
                    Laya.Scene.open('MyScenes/FinishUI.scene');
                });
            });
        }
        restartGame() {
            this.isStartGame = false;
            this.isGameOver = false;
            this.isWin = false;
            this.isPause = true;
            this._camera.fieldOfView = this.startCamField;
            this.isFinish = false;
            this._light.shadowDistance = 30;
            this._camera.transform.position = this.camStartPos;
            this._camera.transform.rotation = this.camStartRotation;
            this._levelNode.destroyChildren();
        }
    }

    class Box1 extends Laya.Scene {
        constructor() {
            super(...arguments);
            this.progressValue = 0;
            this.clickCount = 1;
            this.hadShowBanner = false;
            this.onShowCB = null;
            this.type = BoxType.Box_Banner;
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height);
        }
        onOpened(data) {
            if (data && data.ccb) {
                this.ccb = data.ccb;
            }
            if (data && data.type) {
                this.type = data.type;
            }
            FdAd.hideBannerAd();
            this.btnPress.on(Laya.Event.CLICK, this, this.onPress);
            Laya.timer.frameLoop(1, this, this.reFreshUI);
            this.onShowCB = () => {
                this.close();
            };
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window['wx'].onShow(this.onShowCB);
            }
        }
        onClosed() {
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window['wx'].offShow(this.onShowCB);
            }
            FdAd.hideBannerAd();
            Laya.timer.clearAll(this);
            FdMgr.visibleVideoBanner(false, false);
            this.ccb && this.ccb();
        }
        onPress() {
            this.progressValue += FdMgr.wuchuProgressStepAdd;
            Laya.Tween.to(this.btnPress, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnPress, { scaleX: 1, scaleY: 1 }, 100, null);
            }));
            if (this.progressValue >= FdMgr.wuchuProgressValue && !this.hadShowBanner) {
                this.hadShowBanner = true;
                this.clickCount++;
                if (this.type == BoxType.Box_Banner)
                    FdAd.showBannerAd();
                else
                    FdMgr.visibleVideoBanner(true, false);
                FdMgr.randTouchProgress();
                Laya.timer.once(2000, this, () => {
                    if (this.clickCount >= FdMgr.jsonConfig.bannerBox_count) {
                        this.close();
                    }
                    else {
                        if (this.type == BoxType.Box_Banner)
                            FdAd.hideBannerAd();
                        else
                            FdMgr.visibleVideoBanner(false, false);
                        this.hadShowBanner = false;
                        this.pressBar.value = 0;
                        this.progressValue = 0;
                    }
                });
            }
            Laya.Tween.to(this.imgSushi, { rotation: 30 }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.imgSushi, { rotation: 0 }, 100);
            }));
            this.pressBar.value = this.progressValue;
        }
        reFreshUI() {
            if (this.progressValue > FdMgr.wuchuProgressFrameSub) {
                this.progressValue -= FdMgr.wuchuProgressFrameSub;
            }
            this.pressBar.value = this.progressValue;
            this.light.rotation += 1;
        }
    }

    class Box2 extends Laya.Scene {
        constructor() {
            super(...arguments);
            this.progressValue = 0;
            this.wuchuCount = 1;
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height);
        }
        onOpened(data) {
            if (data && data.count) {
                this.wuchuCount = data.count;
            }
            if (data && data.closeCB) {
                this.closeCB = data.closeCB;
            }
            FdAd.visibleFullGridAd(false);
            this.btnPress.on(Laya.Event.CLICK, this, this.onPress);
            Laya.timer.frameLoop(1, this, this.reFreshUI);
            this.tweenScale();
            FdAd.showBannerAd();
        }
        onClosed() {
            FdAd.hideBannerAd();
            FdAd.visibleFullGridAd(false);
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.imgEffect);
            this.closeCB && this.closeCB();
        }
        onPress() {
            this.progressValue += FdMgr.wuchuProgressStepAdd;
            Laya.Tween.to(this.imgGift, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.imgGift, { scaleX: 1, scaleY: 1 }, 100, null);
            }));
            if (this.progressValue >= FdMgr.wuchuProgressValue) {
                FdAd.visibleFullGridAd();
                FdMgr.randTouchProgress();
                Laya.timer.once(2000, this, () => {
                    this.wuchuCount--;
                    if (this.wuchuCount > 0) {
                        FdAd.visibleFullGridAd(false);
                    }
                    else {
                        this.close();
                    }
                });
            }
        }
        reFreshUI() {
            if (this.progressValue > FdMgr.wuchuProgressFrameSub) {
                this.progressValue -= FdMgr.wuchuProgressFrameSub;
            }
            this.light.rotation += 1;
        }
        tweenScale() {
            var t = 200;
            Laya.Tween.to(this.imgEffect, { scaleX: 1.2, scaleY: 1.2, alpha: 0.8 }, t);
            Laya.timer.once(t, this, () => {
                Laya.Tween.to(this.imgEffect, { scaleX: 1, scaleY: 1, alpha: 1 }, t);
                Laya.timer.once(t, this, this.tweenScale);
            });
        }
    }

    class HomeUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened(param) {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            this.remenBtn.on(Laya.Event.CLICK, this, this.remenCB);
            this.videoBtn.on(Laya.Event.CLICK, this, this.videoCB);
            this.videoBtn.active = FdMgr.homeViedo;
        }
        onClosed() {
        }
        remenCB() {
            FdAd.hideBannerAd();
            FdAd.visibleSideGridAd(false);
            FdMgr.showHomeUIReMen(() => {
                FdAd.showBannerAd();
                FdAd.visibleSideGridAd(true);
            });
        }
        videoCB() {
            FdAd.showVideoAd(() => {
                Laya.Browser.window['wx'].showToast({
                    title: "恭喜获得1000金币！",
                    duration: 2000,
                    mask: false,
                    icon: 'none',
                });
            }, null);
        }
    }

    class Remen extends Laya.Scene {
        constructor() {
            super();
            this.ccb = null;
            this.onShowCB = null;
            this.clickCount = 0;
        }
        onAwake() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
        }
        onOpened(param) {
            if (param && param.ccb)
                this.ccb = param.ccb;
            this.btnContinue.on(Laya.Event.CLICK, this, this.btnContinueCB);
            this.adPic.on(Laya.Event.CLICK, this, this.videoBtn);
            this.onShowCB = () => {
                this.close();
            };
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window['wx'].onShow(this.onShowCB);
            }
            if (param && param.showAdPic)
                this.adPic.visible = true;
            else {
                this.adPic.visible = false;
                if (!FdAd.getIsFullGridAdError())
                    FdAd.visibleFullGridAd();
                else if (FdMgr.canTrapAll && FdAd.getIsFullGridAdError()) {
                    this.adPic.visible = true;
                }
            }
            if (FdMgr.remenBanner) {
                this.bannerShowHide();
            }
            FdAd.bannerIndex = 0;
        }
        onClosed() {
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window['wx'].offShow(this.onShowCB);
            }
            Laya.timer.clearAll(this);
            FdAd.hideBannerAd();
            FdAd.visibleFullGridAd(false);
            Laya.timer.once(100, this, () => {
                this.ccb && this.ccb();
            });
        }
        bannerShowHide() {
            FdAd.hideBannerAd();
            Laya.timer.once(1000, this, () => {
                FdAd.showBannerAd();
                Laya.timer.once(800, this, () => {
                    this.bannerShowHide();
                });
            });
        }
        videoBtn() {
            FdAd.showVideoAd();
        }
        btnContinueCB() {
            this.clickCount++;
            if (this.clickCount >= FdMgr.jsonConfig.remenBanner_count) {
                this.close();
            }
        }
    }

    class VideoBanner extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened(param) {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            this.banner1.on(Laya.Event.CLICK, this, this.adBtnCB);
            this.banner2.on(Laya.Event.CLICK, this, this.adBtnCB);
            let showFinger = false;
            if (param && param.showFinger)
                showFinger = showFinger;
            this.finger.visible = showFinger;
            this.banner1.visible = Math.random() > 0.5;
            this.banner2.visible = !this.banner1.visible;
        }
        onClosed() {
        }
        adBtnCB() {
            FdAd.showVideoAd(() => {
                Laya.Browser.window['wx'].showToast({
                    title: "恭喜获得1000金币！",
                    duration: 2000,
                    mask: false,
                    icon: 'none',
                });
            }, null);
        }
    }

    class FinishUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
            Utility.addClickEvent(this.adBtn, this, this.adBtnCB);
            Utility.addClickEvent(this.nextBtn, this, this.closeCB);
            FdMgr.inFinish(this.nextBtn);
        }
        onClosed() {
        }
        adBtnCB() {
            let cb = () => {
                PlayerDataMgr.getPlayerData().coin += 800;
                this.closeCB();
            };
            FdAd.showVideoAd(cb);
        }
        closeCB() {
            FdMgr.closeFinish(() => {
                if (GameLogic.Share.isWin) {
                    PlayerDataMgr.getPlayerData().coin += 200;
                    PlayerDataMgr.getPlayerData().grade++;
                    PlayerDataMgr.setPlayerData();
                }
                GameLogic.Share.restartGame();
                Laya.Scene.open('MyScenes/StartUI.scene');
            });
        }
    }

    class GameUI extends Laya.Scene {
        constructor() {
            super();
            this.isTouch = false;
        }
        onOpened() {
            GameUI.Share = this;
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Laya.timer.frameLoop(1, this, this.myUpdate);
            this.touchBtn.on(Laya.Event.CLICK, this, this.touchCB);
            FdMgr.inGame();
        }
        onClosed() {
            Laya.timer.clearAll(this);
        }
        touchCB() {
            if (this.isTouch)
                return;
            this.isTouch = true;
            this.finger.visible = false;
            GameLogic.Share.startFire();
        }
        myUpdate() {
        }
    }

    class LoadingUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            if (!Laya.Browser.onWeiXin) {
                localStorage.clear();
            }
            FdMgr.init(() => {
                if (Laya.Browser.onWeiXin)
                    this.loadSubpackage();
                else
                    this.loadRes();
            });
            Laya.timer.frameLoop(1, this, () => {
                this.bar.value += 0.01;
            });
        }
        onClosed() {
        }
        loadSubpackage() {
            const loadTask = Laya.Browser.window.wx.loadSubpackage({
                name: 'unity',
                success: (res) => {
                    this.loadRes();
                },
                fail: (res) => {
                    this.loadSubpackage();
                }
            });
            loadTask.onProgressUpdate(res => {
                console.log('下载进度', res.progress);
                console.log('已经下载的数据长度', res.totalBytesWritten);
                console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
            });
        }
        loadRes() {
            this.onComplete();
            return;
            var resUrl = [
                WxApi.UnityPath + 'PropNode.lh'
            ];
            Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
        }
        onComplete() {
            FdMgr.loadGame(() => {
                GameLogic.Share.initScene();
            });
        }
        onProgress(value) {
        }
    }

    class SkinUI extends Laya.Scene {
        constructor() {
            super();
            this.chooseId = 0;
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Laya.timer.frameLoop(1, this, this.onMyUpdate);
            this.chooseId = PlayerDataMgr.getPlayerData().skinId;
            this.initList();
            FdAd.showBannerAd();
        }
        onClosed() {
            FdAd.hideBannerAd();
        }
        initList() {
            let arr = [].concat(PlayerDataMgr.getPlayerData().skinArr);
            this.myList.vScrollBarSkin = '';
            this.myList.array = arr;
            this.myList.repeatX = 3;
            this.myList.repeatY = Math.floor(arr.length / 3);
            this.myList.renderHandler = Laya.Handler.create(this, this.onListRender, null, false);
        }
        onListRender(cell, index) {
            if (index >= this.myList.array.length) {
                return;
            }
            var item = cell.getChildByName('item');
            let dk1 = item.getChildByName('dk1');
            let icon = item.getChildByName('icon');
            let using = item.getChildByName('using');
            let buyBtn = item.getChildByName('buyBtn');
            let cost = buyBtn.getChildByName('cost');
            let adBtn = item.getChildByName('adBtn');
            dk1.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0;
            icon.skin = 'skinUI/firework_' + (index + 1) + '.png';
            using.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 1;
            buyBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0;
            cost.value = PlayerDataMgr.getCostById(index).toString();
            adBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0;
            Utility.addClickEvent(using, this, this.chooseCB, [index]);
            Utility.addClickEvent(buyBtn, this, this.buyBtnCB, [index]);
            Utility.addClickEvent(adBtn, this, this.adBtnCB, [index]);
        }
        chooseCB(arr) {
            let id = arr[0];
            this.chooseId = id;
            GameLogic.Share.gameStart(id);
            Laya.Scene.open('MyScenes/GameUI.scene');
        }
        buyBtnCB(arr) {
            let id = arr[0];
            if (PlayerDataMgr.getPlayerData().coin < PlayerDataMgr.getCostById(id)) {
                return;
            }
            this.chooseId = id;
            PlayerDataMgr.getPlayerData().coin -= PlayerDataMgr.getCostById(id);
            PlayerDataMgr.getPlayerData().skinArr[id] = 1;
            PlayerDataMgr.getPlayerData().skinId = id;
            PlayerDataMgr.setPlayerData();
            this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
            SoundMgr.instance.playSoundEffect('Reward.mp3');
        }
        adBtnCB(arr) {
            let id = arr[0];
            let cb = () => {
                this.chooseId = id;
                PlayerDataMgr.getPlayerData().skinArr[id] = 1;
                PlayerDataMgr.getPlayerData().skinId = id;
                PlayerDataMgr.setPlayerData();
                this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
                SoundMgr.instance.playSoundEffect('Reward.mp3');
            };
            FdAd.showVideoAd(cb);
        }
        onMyUpdate() {
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
        }
    }

    class StartUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Utility.addClickEvent(this.startBtn, this, this.startBtnCB);
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
            FdMgr.inHomePage();
        }
        onClosed() {
        }
        startBtnCB() {
            FdMgr.startGame(() => {
                Laya.Scene.open('MyScenes/SkinUI.scene');
            });
        }
        myUpdate() {
        }
    }

    class UpDownLoop extends Laya.Script {
        constructor() {
            super();
            this.startY = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.startY = this.myOwner.y;
            this.startTween();
        }
        startTween() {
            Laya.Tween.to(this.myOwner, { y: this.startY + 50 }, 1000, Laya.Ease.sineInOut, new Laya.Handler(this, () => {
                Laya.Tween.to(this.myOwner, { y: this.startY }, 1000, Laya.Ease.sineInOut, new Laya.Handler(this, () => {
                    this.startTween();
                }));
            }));
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("FanDong/Box1.ts", Box1);
            reg("FanDong/Box2.ts", Box2);
            reg("FanDong/HomeUI.ts", HomeUI);
            reg("FanDong/Remen.ts", Remen);
            reg("FanDong/VideoBanner.ts", VideoBanner);
            reg("View/FinishUI.ts", FinishUI);
            reg("View/GameUI.ts", GameUI);
            reg("View/LoadingUI.ts", LoadingUI);
            reg("View/SkinUI.ts", SkinUI);
            reg("View/StartUI.ts", StartUI);
            reg("Mod/UpDownLoop.ts", UpDownLoop);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "FDScene/Box1.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            Laya.stage.useRetinalCanvas = true;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            new GameLogic();
        }
    }
    new Main();

}());
