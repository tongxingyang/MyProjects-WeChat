(function () {
    'use strict';

    class FdAd {
        static inidAd() {
            if (!Laya.Browser.onWeiXin)
                return;
            this.initBanner();
            this.createVideoAd();
        }
        static getSystemInfoSync() {
            if (!Laya.Browser.onWeiXin)
                return;
            if (!this.sysInfo) {
                this.sysInfo = wx.getSystemInfoSync();
            }
            return this.sysInfo;
        }
        static initBanner() {
            if (!Laya.Browser.onWeiXin)
                return;
            for (let i = 0; i < this.bannerIdArr.length; i++) {
                let bannerAd = this.createBannerAd(i);
                this.bannerAds.push(bannerAd);
            }
        }
        static showBannerAd() {
            if (!Laya.Browser.onWeiXin)
                return;
            this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].show();
        }
        static hideBannerAd() {
            if (!Laya.Browser.onWeiXin) {
                return;
            }
            this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide();
        }
        static createBannerAd(index, isShow = false) {
            if (!Laya.Browser.onWeiXin)
                return;
            let sysInfo = this.getSystemInfoSync();
            let bannerAd = Laya.Browser.window.wx.createBannerAd({
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
                console.log("Banner广告加载成功");
            });
            bannerAd.onError(err => {
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
                var videoAd = Laya.Browser.window.wx.createRewardedVideoAd({ adUnitId: self.videoId });
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
        static initGridAD(cb, left = 0, top = 0) {
            if (!Laya.Browser.onWeiXin) {
                cb && cb(false);
                return;
            }
            this.CreateGridAD(this.gridId, left, top);
            if (cb) {
                this.initGridCB = cb;
            }
        }
        static CreateGridAD(id, posx, posy) {
            try {
                if (Laya.Browser.window.wx.createCustomAd) {
                    var grid = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: id,
                        adIntervals: 31,
                        style: {
                            left: posx,
                            top: posy,
                            width: Laya.Browser.clientWidth / 2.2
                        }
                    });
                    grid.onLoad(load => {
                        FdAd.gridAd = grid;
                        grid.show();
                        if (FdAd.initGridCB) {
                            FdAd.initGridCB(true);
                            FdAd.initGridCB = null;
                        }
                    });
                    grid.onError(err => {
                        console.error(err);
                        if (FdAd.initGridCB) {
                            FdAd.initGridCB(false);
                            FdAd.initGridCB = null;
                        }
                    });
                }
            }
            catch (err) {
                console.log("原生格子报错" + err);
                if (FdAd.initGridCB) {
                    FdAd.initGridCB(false);
                    FdAd.initGridCB = null;
                }
            }
        }
        static showGridAD() {
            if (this.gridAd) {
                this.gridAd.show();
                return true;
            }
            return false;
        }
        static hideGridAD() {
            if (this.gridAd) {
                this.gridAd.hide();
            }
            Laya.timer.once(500, this, () => {
                if (this.gridAd) {
                    this.gridAd.hide();
                }
            });
        }
    }
    FdAd.bannerIdArr = ["adunit-ae416b4dd56b3441"];
    FdAd.videoId = "adunit-586667b484b94e80";
    FdAd.gridId = "adunit-02b4087a4e313f0e";
    FdAd.bannerAds = [];
    FdAd.bannerIndex = 0;
    FdAd.isExistVideoAd = false;

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
        static checkScope(btnNode) {
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.getSetting({
                    success: (response) => {
                        if (!response.authSetting['scope.userInfo']) {
                            console.log('没有授权');
                            this.createScope(btnNode);
                        }
                        else {
                            console.log('已经授权');
                        }
                    }
                });
            }
        }
        static createScope(btnNode) {
            this.scopeBtn = Laya.Browser.window.wx.createUserInfoButton({
                type: 'text',
                text: '',
                style: {
                    left: btnNode.x,
                    top: btnNode.y,
                    width: btnNode.width,
                    height: btnNode.height,
                    lineHeight: 40,
                    backgroundColor: '#ffffff',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: 16,
                    borderRadius: 0
                }
            });
            this.scopeBtn.onTap((res) => {
                if (res.errMsg == "getUserInfo:ok") {
                    this.scopeBtn.destroy();
                    this.scopeBtn = null;
                }
                else if (res.errMsg == 'getUserInfo:fail auth deny') {
                    this.scopeBtn.destroy();
                    this.scopeBtn = null;
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
        static NavigateApp(appid, path, title, cancelCB, successCB) {
            if (Laya.Browser.onWeiXin) {
                let self = this;
                Laya.Browser.window.wx.navigateToMiniProgram({
                    appId: appid,
                    path: path,
                    success(res) {
                        console.log('打开成功');
                        successCB();
                    },
                    fail(res) {
                        console.log('打开失败');
                        cancelCB();
                    }
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
    WxApi.openId = '';
    WxApi.version = '1.0.0';
    WxApi.isVibrate = true;
    WxApi.isMusic = true;
    WxApi.OnShowFun = null;
    WxApi.scopeBtn = null;
    WxApi.shareCallback = null;
    WxApi.front_share_number = 0;
    WxApi.sceneId = 0;
    WxApi.gotOfflineBounes = false;
    WxApi.configData = null;
    WxApi.shareTime = 0;
    WxApi.firstShare = true;
    WxApi.hadShowFriendUI = false;
    WxApi.launchGameUI = false;
    WxApi.firstStartGame = false;
    WxApi.isKillBossUI = false;
    WxApi.fromKillBossUI = false;
    WxApi.killbossCallback = null;
    WxApi.gameNavCallback = null;
    WxApi.gameNavOnHide = false;
    WxApi.isStartUI = false;
    WxApi.isAuditor = false;
    WxApi.shieldAppid = false;
    WxApi.tempGrade = 1;

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
                { url: 'res/Sounds/Bgm.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Collision.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Get.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Click.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Gliding.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Lose.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Victory.mp3', type: Laya.Loader.SOUND }
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
        static TmoveTo(node, duration, des, cb, ease) {
            if (!node.transform)
                return;
            let t = new Laya.Tween();
            var posOld = node.transform.localPosition;
            t.to(node.transform.localPosition, {
                x: des.x,
                y: des.y,
                z: des.z,
                update: new Laya.Handler(this, () => {
                    if (!node.transform)
                        return;
                    node.transform.localPosition = posOld;
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
        static TmoveToYWorld(node, duration, des, cb, ease) {
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
        static RotateWithPoint(node, dir, angle) {
            let desPos = new Laya.Vector3();
            let p = node.transform.localPosition.clone();
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
        static coinCollectAnim(startPos, endPos, parent, amount = 10, callBack) {
            let am = amount;
            for (var i = 0; i < amount; i++) {
                let coin = Laya.Pool.getItemByClass("coin", Laya.Image);
                coin.skin = "startUI/zy_zs_1.png";
                coin.x = startPos.x;
                coin.y = startPos.y;
                parent.addChild(coin);
                let time = 300 + Math.random() * 100 - 50;
                Laya.Tween.to(coin, { x: coin.x + Math.random() * 250 - 125, y: coin.y + Math.random() * 250 - 125 }, time);
                Laya.timer.once(time + 50, this, function () {
                    Laya.Tween.to(coin, { x: endPos.x, y: endPos.y }, 400, null, new Laya.Handler(this, function () {
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
    }

    class ModelPos {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        getV3() {
            return new Laya.Vector3(Number(this.x), Number(this.y), Number(this.z));
        }
    }
    class PlayerData {
        constructor() {
            this.grade = 1;
            this.coin = 0;
            this.key = 0;
            this.skinId = 0;
            this.skinArr = [];
            this.hatId = -1;
            this.hatArr = [];
            this.shoesId = 0;
            this.shoesArr = [];
            this.videoArr = [];
            this.exitTime = 0;
        }
    }
    class PlayerDataMgr {
        static getPlayerData() {
            if (!localStorage.getItem('playerData')) {
                this._playerData = new PlayerData();
                for (let i = 0; i < 15; i++) {
                    if (i == 0) {
                        this._playerData.skinArr.push(1);
                        this._playerData.hatArr.push(0);
                        this._playerData.shoesArr.push(1);
                    }
                    else {
                        this._playerData.skinArr.push(0);
                        this._playerData.hatArr.push(0);
                        this._playerData.shoesArr.push(0);
                    }
                    this._playerData.videoArr.push(0);
                }
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
        static changeCoin(dt) {
            this._playerData.coin += dt;
            this.setPlayerData();
        }
        static setExitTime() {
            this._playerData.exitTime = new Date().getTime();
            this.setPlayerData();
        }
        static getUnlockSkinId(cost = false) {
            let id = -1;
            let arr = [];
            let length = cost ? 10 : this._playerData.skinArr.length;
            for (let i = 0; i < length; i++) {
                if (this._playerData.skinArr[i] == 0) {
                    arr.push(i);
                }
            }
            if (arr.length > 0) {
                id = Utility.getRandomItemInArr(arr);
            }
            return id;
        }
        static getUnlockShoesId(cost = false) {
            let id = -1;
            let arr = [];
            let length = cost ? 10 : this._playerData.shoesArr.length;
            for (let i = 0; i < length; i++) {
                if (this._playerData.shoesArr[i] == 0) {
                    arr.push(i);
                }
            }
            if (arr.length > 0) {
                id = Utility.getRandomItemInArr(arr);
            }
            return id;
        }
        static getUnlockHatId(cost = false) {
            let id = -1;
            let arr = [];
            let length = cost ? 10 : this._playerData.hatArr.length;
            for (let i = 0; i < length; i++) {
                if (this._playerData.hatArr[i] == 0) {
                    arr.push(i);
                }
            }
            if (arr.length > 0) {
                id = Utility.getRandomItemInArr(arr);
            }
            return id;
        }
    }
    PlayerDataMgr._playerData = null;
    PlayerDataMgr.powerMax = 10;
    PlayerDataMgr.tempSkinId = -1;
    PlayerDataMgr.levelDataArr = [];

    class CameraCrl extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onDisable() {
        }
        startRotate() {
            Laya.timer.frameLoop(1, this, this.finishRotate);
            Laya.timer.once(3000, this, () => {
                Laya.timer.clearAll(this);
            });
            let desPos = GameLogic.Share._player.transform.position.clone();
            desPos.y += 2;
            desPos.z -= 2;
            this.myOwner.transform.position = desPos;
        }
        finishRotate() {
            let a = 1 * Math.PI / 180;
            let pPos = GameLogic.Share._player.transform.position.clone();
            let pos = this.myOwner.transform.position.clone();
            pos.x = (pos.x - pPos.x) * Math.cos(a) - (pos.z - pPos.z) * Math.sin(a) + pPos.x;
            pos.z = (pos.x - pPos.x) * Math.sin(a) + (pos.z - pPos.z) * Math.cos(a) + pPos.z;
            this.myOwner.transform.position = pos;
            this.myOwner.transform.lookAt(GameLogic.Share._player.transform.position.clone(), new Laya.Vector3(0, 1, 0));
            GameLogic.Share._light.transform.rotate(new Laya.Vector3(0, -1, 0), false, false);
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver)
                return;
            let desPos = GameLogic.Share._player.transform.position.clone();
            desPos.y += 7;
            desPos.z -= 6;
            let pos = new Laya.Vector3();
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), desPos, 0.1, pos);
            this.myOwner.transform.position = pos;
            let euler = this.myOwner.transform.localRotationEuler.clone();
            euler.x = -25;
            this.myOwner.transform.localRotationEuler = euler;
        }
        resetCamera() {
            let desPos = GameLogic.Share._player.transform.position.clone();
            desPos.y += 7;
            desPos.z -= 6;
            this.myOwner.transform.position = desPos;
            let euler = this.myOwner.transform.localRotationEuler.clone();
            euler.x = -25;
            this.myOwner.transform.localRotationEuler = euler;
        }
    }

    class MoveComponent extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.isRotate = false;
        }
        onAwake() {
            this._self = this.owner;
            this.init();
        }
        init() {
            this.initData();
            this._speedFactor = 1;
            this._maxDis = 0;
            this._maxPosX = 2.4;
            this.stageOff();
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent);
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent);
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent);
        }
        stageOff() {
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent);
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent);
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent);
        }
        initData() {
            this._targetPos = new Laya.Vector3;
            this._lerpPos = new Laya.Vector3;
        }
        onMouseDownEvent(evt) {
            if (!GameLogic.Share.isStartGame)
                return;
            Laya.timer.clear(this, this.frameUpdateRolePos);
            Laya.timer.frameLoop(1, this, this.frameUpdateRolePos);
            this.isPressed = true;
            this._originPosX = evt.stageX;
        }
        onMouseUpEvent() {
            if (!GameLogic.Share.isStartGame)
                return;
            this.isPressed = false;
        }
        onMouseMoveEvent(evt) {
            if (!GameLogic.Share.isStartGame || !this._self.transform)
                return;
            if (this.isPressed) {
                let posLimit = this._maxPosX;
                if (evt.stageX != this._originPosX) {
                    let pos = this._self.transform.position.clone();
                    let rot = this._self.transform.rotationEuler.clone();
                    let dis = evt.stageX - this._originPosX;
                    if ((dis > 0 && this._maxDis < 0) || (dis < 0 && this._maxDis > 0))
                        this._maxDis = 0;
                    if (Math.abs(dis) > Math.abs(this._maxDis)) {
                        this._maxDis = dis;
                    }
                    pos.x -= 0.01 * this._maxDis * this._speedFactor;
                    if (this.isRotate) {
                        let dt = 0.2;
                        if (dis > 0) {
                            let angle = this._self.transform.localRotationEuler.clone();
                            angle.z += dt;
                            Laya.Vector3.lerp(this._self.transform.localRotationEuler.clone(), angle, 0.25, angle);
                            this._self.transform.localRotationEuler = angle;
                            let rPos = Utility.RotateWithPoint(this._self, new Laya.Vector3(0, 0, 1), dt);
                            Laya.Vector3.lerp(this._self.transform.localPosition.clone(), rPos, 0.25, rPos);
                            this._self.transform.localPosition = rPos;
                            GameLogic.Share._playerCrl.randomAngle = 0.25;
                        }
                        else if (dis < 0) {
                            let angle = this._self.transform.localRotationEuler.clone();
                            angle.z -= dt;
                            Laya.Vector3.lerp(this._self.transform.localRotationEuler.clone(), angle, 0.25, angle);
                            this._self.transform.localRotationEuler = angle;
                            let rPos = Utility.RotateWithPoint(this._self, new Laya.Vector3(0, 0, 1), -dt);
                            Laya.Vector3.lerp(this._self.transform.localPosition.clone(), rPos, 0.25, rPos);
                            this._self.transform.localPosition = rPos;
                            GameLogic.Share._playerCrl.randomAngle = -0.25;
                        }
                        this._originPosX = evt.stageX;
                        return;
                    }
                    if (pos.x > posLimit)
                        pos.x = posLimit;
                    else if (pos.x < -posLimit)
                        pos.x = -posLimit;
                    this._targetPos = pos;
                    this._self.transform.rotationEuler = rot;
                    this._originPosX = evt.stageX;
                }
            }
        }
        frameUpdateRolePos() {
            if (this.isRotate)
                return;
            this._targetPos.setValue(this._targetPos.x, this._self.transform.position.y, this._self.transform.position.z);
            Laya.Vector3.lerp(this._self.transform.position, this._targetPos, 0.8, this._lerpPos);
            this._self.transform.position = this._lerpPos;
            if (Math.abs(this._lerpPos.x - this._targetPos.x) < 0.01) {
                this._maxDis = 0;
            }
        }
    }

    var AniState;
    (function (AniState) {
        AniState["ANI_IDLE"] = "idle";
        AniState["ANI_APPLAUD"] = "applaud";
        AniState["ANI_SHOW"] = "show";
        AniState["ANI_WALK"] = "walk";
        AniState["ANI_WALK1"] = "walk1";
        AniState["ANI_SIT"] = "sit";
        AniState["ANI_UP"] = "UP";
        AniState["ANI_DIE"] = "die";
        AniState["ANI_WIN"] = "win";
    })(AniState || (AniState = {}));
    class Player extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this._ani = null;
            this.shoesArr = [];
            this.shoesRootR = null;
            this.shoesRootL = null;
            this.hatNode = null;
            this.backNode = null;
            this.handNode = null;
            this.isCrowed = false;
            this.isSliding = false;
            this.isBoarding = false;
            this.stopLerpPosY = false;
            this.isDied = false;
            this.speed = 0.05;
            this.roadEdge = 2.3;
            this.currentAniName = '';
            this.preObs = null;
            this.pauseFixY = false;
            this.randomAngle = 0.25;
        }
        onAwake() {
            if (this.myOwner)
                return;
            this.myOwner = this.owner;
            this._ani = this.owner.getComponent(Laya.Animator);
            this.shoesRootL = Utility.findNodeByName(this.myOwner, 'FootL');
            this.shoesRootR = Utility.findNodeByName(this.myOwner, 'FootR');
            this.hatNode = Utility.findNodeByName(this.myOwner, 'Hat');
            this.backNode = Utility.findNodeByName(this.myOwner, 'Back');
            this.handNode = Utility.findNodeByName(this.myOwner, 'Hand');
            this.myOwner.transform.setWorldLossyScale(new Laya.Vector3(1.5, 1.8, 1.5));
            this.playAnimation(AniState.ANI_IDLE);
            for (let i = 0; i < this.myOwner.numChildren; i++) {
                let n = this.myOwner.getChildAt(i);
                if (n.name.search('Hair') != -1 || (n.name.search('Shoes') != -1 && n.name != 'Shoes_C' && n.name != 'Shoes_L') || n.name.search('Clothes') != -1) {
                    n.active = false;
                }
                else {
                    n.active = true;
                }
            }
            this.changeSkin(PlayerDataMgr.getPlayerData().skinId);
            this.initShoes(PlayerDataMgr.getPlayerData().shoesId);
            this.activeAcc(PlayerDataMgr.getPlayerData().hatId);
        }
        onDisable() {
        }
        getMyLocalPos() {
            return this.myOwner.transform.localPosition.clone();
        }
        getMyBB() {
            return Utility.getBoundBox(this.myOwner);
        }
        getCurAniName() {
            return this._ani.getControllerLayer().getCurrentPlayState().animatorState.name;
        }
        playAnimation(name, speed = 1, transitionDuration = 0.2) {
            if (this.currentAniName == AniState.ANI_IDLE && name == AniState.ANI_IDLE)
                return;
            this.currentAniName = name;
            if (this.isSliding && name == AniState.ANI_APPLAUD)
                transitionDuration = 0;
            this._ani.speed = speed;
            this._ani.crossFade(name, transitionDuration);
        }
        goToDes(z = 27) {
            this.myOwner.getComponent(MoveComponent).stageOff();
            let pos = this.getMyLocalPos();
            pos.x = 0;
            pos.z = z;
            this.playAnimation(AniState.ANI_SHOW);
            Utility.TmoveTo(this.myOwner, 1000, pos, () => {
                this.playAnimation(AniState.ANI_WIN);
                GameLogic.Share.winCB();
            });
        }
        addShoes() {
            if (this.shoesArr.length <= 0) {
                let shoesL = Utility.getSprite3DResByUrl('Heel.lh', this.shoesRootL);
                let shoesR = Utility.getSprite3DResByUrl('Heel.lh', this.shoesRootR);
                shoesL.meshRenderer.receiveShadow = true;
                shoesR.meshRenderer.receiveShadow = true;
                shoesL.transform.localPosition = new Laya.Vector3(0, 0, 0);
                shoesR.transform.localPosition = new Laya.Vector3(0, 0, 0);
                shoesL.transform.setWorldLossyScale(new Laya.Vector3(shoesL.transform.getWorldLossyScale().x, 1, 1.5));
                shoesR.transform.setWorldLossyScale(new Laya.Vector3(shoesR.transform.getWorldLossyScale().x, 1, 1.5));
                this.shoesArr.push(shoesL);
                this.shoesArr.push(shoesR);
            }
            else {
                let shoesL = Utility.getSprite3DResByUrl('Heel.lh', this.shoesArr[this.shoesArr.length - 2].getChildAt(0));
                let shoesR = Utility.getSprite3DResByUrl('Heel.lh', this.shoesArr[this.shoesArr.length - 1].getChildAt(0));
                shoesL.meshRenderer.receiveShadow = true;
                shoesR.meshRenderer.receiveShadow = true;
                shoesL.transform.localPosition = new Laya.Vector3(0, 0, 0);
                shoesR.transform.localPosition = new Laya.Vector3(0, 0, 0);
                shoesL.transform.setWorldLossyScale(new Laya.Vector3(shoesL.transform.getWorldLossyScale().x, 1, 1.5));
                shoesR.transform.setWorldLossyScale(new Laya.Vector3(shoesR.transform.getWorldLossyScale().x, 1, 1.5));
                this.shoesArr.push(shoesL);
                this.shoesArr.push(shoesR);
            }
            WxApi.DoVibrate();
        }
        decShoes(preObs, time = 400) {
            if (preObs && this.preObs) {
                if (Math.abs(preObs.transform.position.x - this.preObs.transform.position.x) >= 0.2 &&
                    Math.abs(preObs.transform.position.z - this.preObs.transform.position.z) <= 0.5) {
                    return;
                }
            }
            if (preObs && preObs.name.search('Obs_01') != -1) {
                if (GameLogic.Share._playerCrl.shoesArr.length <= 0 || preObs.transform.position.y - this.myOwner.transform.position.y >= 0) {
                    GameLogic.Share._playerCrl.diedCB();
                    return;
                }
            }
            if (preObs == null && this.shoesArr.length <= 0) {
                Utility.RotateTo(this.myOwner, 1500, new Laya.Vector3(0, 180, 0), () => { });
                this.playAnimation(AniState.ANI_WIN);
                GameLogic.Share.winCB();
                return;
            }
            let pos1 = this.shoesArr[this.shoesArr.length - 1].transform.position.clone();
            let pos2 = this.shoesArr[this.shoesArr.length - 2].transform.position.clone();
            GameLogic.Share._levelNode.addChild(this.shoesArr[this.shoesArr.length - 1]);
            GameLogic.Share._levelNode.addChild(this.shoesArr[this.shoesArr.length - 2]);
            this.shoesArr[this.shoesArr.length - 1].transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
            this.shoesArr[this.shoesArr.length - 2].transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
            pos1.z -= 0.2;
            pos2.z -= 0.2;
            this.shoesArr[this.shoesArr.length - 1].transform.position = pos1;
            this.shoesArr[this.shoesArr.length - 2].transform.position = pos2;
            this.shoesArr.pop();
            this.shoesArr.pop();
            this.pauseFixY = true;
            Laya.timer.clear(this, this.resetPauseFixY);
            Laya.timer.once(time, this, this.resetPauseFixY);
            this.preObs = preObs;
            WxApi.DoVibrate();
        }
        resetPauseFixY() {
            this.pauseFixY = false;
        }
        lerpPosY() {
            let y = Math.floor(this.shoesArr.length / 2);
            let pos = this.getMyLocalPos();
            let desPos = this.getMyLocalPos();
            desPos.y = y;
            Laya.Vector3.lerp(pos, desPos, 0.1, pos);
            this.myOwner.transform.localPosition = pos;
        }
        fixPosY() {
            let y = Math.floor(this.shoesArr.length / 2);
            let desPos = this.getMyLocalPos();
            desPos.y = y;
            Utility.TmoveToY(this.myOwner, 200, desPos, () => { });
        }
        slideCB() {
            this.playAnimation(AniState.ANI_APPLAUD);
            let pos = this.myOwner.transform.localPosition.clone();
            pos.y = 0.1;
            Utility.TmoveToY(this.myOwner, 300, pos, () => {
                pos = this.myOwner.transform.localPosition.clone();
                pos.y = pos.y > 0.5 ? 0.5 : 0.1;
                Utility.TmoveToY(this.myOwner, 100, pos, () => {
                    pos = this.myOwner.transform.localPosition.clone();
                    pos.y = 0.1;
                    Utility.TmoveToY(this.myOwner, 100, pos, null);
                });
            });
            this.isSliding = true;
            this.speed = 0.1;
        }
        boardCB() {
            this.speed = 0.025;
            this.myOwner.getComponent(MoveComponent).isRotate = true;
            this.isBoarding = true;
            this.playAnimation(AniState.ANI_WALK1, 2);
            this.randomAngle = Math.random() * 1 < 0.5 ? this.randomAngle : -this.randomAngle;
            Laya.timer.frameLoop(1, this, this.randomRotate);
        }
        randomRotate() {
            let a = this.myOwner.transform.localRotationEuler.clone();
            if (Math.abs(a.z) >= 30) {
                this.diedCB(true);
                Laya.timer.clear(this, this.randomRotate);
                return;
            }
            a.z += this.randomAngle;
            this.myOwner.transform.localRotationEuler = a;
            let rPos = Utility.RotateWithPoint(this.myOwner, new Laya.Vector3(0, 0, 1), this.randomAngle);
            this.myOwner.transform.localPosition = rPos;
        }
        resetIdle(node) {
            this.isSliding = false;
            if (this.isBoarding) {
                Laya.timer.clear(this, this.randomRotate);
                this.isBoarding = false;
                this.myOwner.getComponent(MoveComponent).isRotate = false;
            }
            this.speed = 0.06;
            this.myOwner.transform.localRotationEuler = new Laya.Vector3();
            let pos = GameLogic.Share._player.transform.position.clone();
            node.addChild(GameLogic.Share._player);
            GameLogic.Share._player.transform.position = pos;
            this.playAnimation(AniState.ANI_WALK, 2);
        }
        diedCB(isFall = false) {
            if (this.myOwner.getComponent(MoveComponent)) {
                this.myOwner.getComponent(MoveComponent).stageOff();
            }
            GameLogic.Share.loseCB();
            let p = this.myOwner.transform.position.clone();
            GameLogic.Share._levelNode.addChild(this.myOwner);
            this.myOwner.transform.position = p;
            let r = this.myOwner.transform.localRotationEuler.clone();
            r.x = 0;
            this.myOwner.transform.localRotationEuler = r;
            if (isFall) {
                this.playAnimation(AniState.ANI_DIE, 1, 0);
                let pos = this.myOwner.transform.position.clone();
                pos.y -= 20;
                Utility.TmoveToY(this.myOwner, 3000, pos, () => { });
                pos = this.myOwner.transform.position.clone();
                pos.z += 1;
                this.myOwner.transform.position = pos;
            }
            else {
                this.playAnimation(AniState.ANI_DIE);
                let pos = this.myOwner.transform.position.clone();
                pos.y = 0;
                Utility.TmoveToY(this.myOwner, 1000, pos, () => { });
            }
        }
        onUpdate() {
            if (!GameLogic.Share.isStartGame || GameLogic.Share.isGameOver || GameLogic.Share.isPause || this.isCrowed)
                return;
            if (!this.pauseFixY && !this.isSliding && !this.stopLerpPosY) {
                this.lerpPosY();
            }
            let s = this.speed;
            s = s / this.myOwner.parent.transform.localScaleZ;
            this.myOwner.transform.translate(new Laya.Vector3(0, 0, s), true);
        }
        changeSkin(id, isShared = true) {
            Laya.Texture2D.load('res/skinRes/Hero' + (id + 1) + '.jpg', Laya.Handler.create(this, (tex) => {
                if (!isShared)
                    this.myOwner.getChildAt(1).skinnedMeshRenderer.sharedMaterial.albedoTexture = tex;
                else
                    this.myOwner.getChildAt(1).skinnedMeshRenderer.material.albedoTexture = tex;
            }));
            this.initHair(id);
            this.initClothes(id);
        }
        initShoes(id, isShared = true) {
            let v1 = Math.floor(id / 5) + 1;
            let v2 = Math.floor(id % 5) + 1;
            for (let i = 0; i < this.myOwner.numChildren; i++) {
                let n = this.myOwner.getChildAt(i);
                if (n.name.search('Shoes') != -1 && n.name != 'Shoes_C' && n.name != 'Shoes_L') {
                    n.active = false;
                }
            }
            this.myOwner.getChildByName('Shoes' + v1 + '_0' + v2 + '_D').active = true;
            Laya.Texture2D.load('res/shoesRes/Shoes' + (id + 1) + '.jpg', Laya.Handler.create(this, (tex) => {
                if (isShared)
                    this.myOwner.getChildByName('Shoes' + v1 + '_0' + v2 + '_D').skinnedMeshRenderer.sharedMaterial.albedoTexture = tex;
                else
                    this.myOwner.getChildByName('Shoes' + v1 + '_0' + v2 + '_D').skinnedMeshRenderer.material.albedoTexture = tex;
            }));
        }
        initHair(id) {
            let v1 = Math.floor(id / 5) + 1;
            let v2 = Math.floor(id % 5) + 1;
            for (let i = 0; i < this.myOwner.numChildren; i++) {
                let n = this.myOwner.getChildAt(i);
                if (n.name.search('Hair') != -1) {
                    n.active = false;
                }
            }
            if (this.myOwner.getChildByName('Hair' + v1 + '_0' + v2)) {
                this.myOwner.getChildByName('Hair' + v1 + '_0' + v2).active = true;
            }
        }
        initClothes(id) {
            let v1 = Math.floor(id / 5) + 1;
            let v2 = Math.floor(id % 5) + 1;
            for (let i = 0; i < this.myOwner.numChildren; i++) {
                let n = this.myOwner.getChildAt(i);
                if (n.name.search('Clothes') != -1) {
                    n.active = false;
                }
            }
            if (this.myOwner.getChildByName('Clothes' + v1 + '_0' + v2)) {
                this.myOwner.getChildByName('Clothes' + v1 + '_0' + v2).active = true;
            }
        }
        activeAcc(id) {
            this.hatNode.destroyChildren();
            this.backNode.destroyChildren();
            this.handNode.destroyChildren();
            if (id == -1)
                return;
            let res = Laya.loader.getRes(WxApi.UnityPath + 'AccNode.lh');
            let acc = res.getChildAt(id);
            let root = this.hatNode;
            if (id == 4 || id == 5 || id == 6 || id == 7)
                root = this.backNode;
            else if (id == 1 || id == 11)
                root = this.handNode;
            let hat = Laya.Sprite3D.instantiate(acc, root, false, new Laya.Vector3(0, 0, 0));
            hat.transform.localPosition = new Laya.Vector3(0);
        }
    }

    class Board extends Laya.Script {
        constructor() {
            super();
            this.DieArea1 = null;
            this.DieArea2 = null;
            this.isUsed = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myBB = Utility.getBoundBox(this.myOwner);
            this.DieArea1 = this.myOwner.getChildByName('DieArea1');
            this.DieArea2 = this.myOwner.getChildByName('DieArea2');
        }
        onDisable() {
        }
        addPlayerToSelf() {
            this.myOwner.addChild(GameLogic.Share._player);
            GameLogic.Share._player.transform.localPosition = new Laya.Vector3(0, Math.floor(GameLogic.Share._playerCrl.shoesArr.length / 2), 0);
            let pos = GameLogic.Share._player.transform.localPosition.clone();
            pos.z += Math.tan(Math.abs(this.myOwner.transform.localRotationEuler.x) * Math.PI / 180) * Math.floor(GameLogic.Share._playerCrl.shoesArr.length / 2);
            GameLogic.Share._player.transform.localPosition = pos;
            let a = GameLogic.Share._player.transform.localRotationEuler.clone();
            a.x -= this.myOwner.transform.localRotationEuler.x;
            GameLogic.Share._player.transform.localRotationEuler = a;
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause)
                return;
            if (Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.DieArea1), GameLogic.Share._playerCrl.getMyBB()) ||
                Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.DieArea2), GameLogic.Share._playerCrl.getMyBB())) {
                if (!GameLogic.Share._playerCrl.isBoarding) {
                    GameLogic.Share._playerCrl.diedCB(true);
                    return;
                }
            }
            if (!this.isUsed && Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
                this.isUsed = true;
                this.addPlayerToSelf();
                GameLogic.Share._playerCrl.boardCB();
            }
        }
    }

    class Heel extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myBB = Utility.getBoundBox(this.myOwner);
            let angle = this.myOwner.transform.localRotationEuler.clone();
            angle.y += 90;
            this.myOwner.transform.localRotationEuler = angle;
        }
        onDisable() {
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause)
                return;
            this.myOwner.transform.rotate(new Laya.Vector3(0, 1, 0), true, false);
            if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
                GameLogic.Share._playerCrl.addShoes();
                SoundMgr.instance.playSoundEffect('Get.mp3');
                this.myOwner.destroy();
            }
        }
    }

    class GameUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened() {
            GameUI.Share = this;
            this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString();
            this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchBtnDownCB);
            Laya.timer.frameLoop(1, this, this.updateCB);
            FdAd.showBannerAd();
        }
        onClosed() {
            Laya.timer.clearAll(this);
            FdAd.hideBannerAd();
        }
        touchBtnDownCB(event) {
            if (GameLogic.Share.isGameOver)
                return;
            if (!GameLogic.Share.isStartGame) {
                GameLogic.Share.isStartGame = true;
                this.guideAni.visible = false;
                GameLogic.Share.startToWalk();
            }
        }
        fixJewelIcon(jewel) {
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = jewel.transform.position.clone();
            hPos.y += 1;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            let j = new Laya.Image('startUI/sy_zs_01.png');
            j.anchorX = 0.5;
            j.anchorY = 0.5;
            j.scale(3, 3);
            j.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            this.addChild(j);
            Utility.tMove2D(j, 610, 55, 500, () => {
                PlayerDataMgr.changeCoin(1);
                j.removeSelf();
            });
            Utility.scaleTo2D(j, 1, 500);
        }
        showKeyNode() {
            for (let i = 0; i < this.keyNode.numChildren; i++) {
                let key = this.keyNode.getChildAt(i);
                key.skin = PlayerDataMgr.getPlayerData().key > i ? 'boxUI/mh_ys_01.png' : 'boxUI/mh_ys_02.png';
            }
            Utility.tMove2D(this.keyNode, 750 - 134, this.keyNode.y, 1000, () => {
                Laya.timer.once(2000, this, () => {
                    Utility.tMove2D(this.keyNode, 750, this.keyNode.y, 1000);
                });
            });
        }
        updateCB() {
        }
    }

    class Jewel extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myBB = Utility.getBoundBox(this.myOwner);
        }
        onDisable() {
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause)
                return;
            this.myOwner.transform.rotate(new Laya.Vector3(0, 1, 0), true, false);
            if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
                GameUI.Share.fixJewelIcon(this.myOwner);
                GameLogic.Share._coinCount++;
                SoundMgr.instance.playSoundEffect('Get.mp3');
                this.myOwner.destroy();
            }
        }
    }

    class Key extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myBB = Utility.getBoundBox(this.myOwner);
        }
        onDisable() {
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause)
                return;
            this.myOwner.transform.rotate(new Laya.Vector3(0, 1, 0), true, false);
            if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
                PlayerDataMgr.getPlayerData().key++;
                PlayerDataMgr.setPlayerData();
                GameUI.Share.showKeyNode();
                SoundMgr.instance.playSoundEffect('Get.mp3');
                this.myOwner.destroy();
            }
        }
    }

    class Obs extends Laya.Script {
        constructor() {
            super();
            this.isUsed = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myBB = Utility.getBoundBox(this.myOwner);
        }
        onDisable() {
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause || this.isUsed)
                return;
            if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
                this.isUsed = true;
                SoundMgr.instance.playSoundEffect('Collision.mp3');
                GameLogic.Share._playerCrl.decShoes(this.myOwner);
            }
        }
    }

    class Pole extends Laya.Script {
        constructor() {
            super();
            this.SlideArea = null;
            this.DieArea1 = null;
            this.DieArea2 = null;
            this.FXNode = null;
            this.isUsed = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.SlideArea = this.myOwner.getChildByName('SlideArea');
            this.DieArea1 = this.myOwner.getChildByName('DieArea1');
            this.DieArea2 = this.myOwner.getChildByName('DieArea2');
            this.FXNode = this.myOwner.getChildByName('FXNode');
            this.FXNode.active = false;
        }
        onDisable() {
        }
        addPlayerToSelf() {
            let pos = GameLogic.Share._player.transform.position.clone();
            this.myOwner.addChild(GameLogic.Share._player);
            GameLogic.Share._player.transform.position = pos;
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause)
                return;
            if (this.myOwner.getChildByName('Player')) {
                let player = this.myOwner.getChildByName('Player');
                this.FXNode.active = true;
                let pos = this.FXNode.transform.localPosition.clone();
                pos.z = player.transform.localPosition.z;
                this.FXNode.transform.localPosition = pos;
            }
            else {
                this.FXNode.active = false;
            }
            if (Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.DieArea1, true), GameLogic.Share._playerCrl.getMyBB()) ||
                Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.DieArea2, true), GameLogic.Share._playerCrl.getMyBB())) {
                console.log(Utility.getBoundBox(this.DieArea1));
                console.log(Utility.getBoundBox(this.DieArea2));
                GameLogic.Share._playerCrl.diedCB(true);
                return;
            }
            if (!this.isUsed && Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.SlideArea, true), GameLogic.Share._playerCrl.getMyBB())) {
                this.isUsed = true;
                if (GameLogic.Share._playerCrl.shoesArr.length <= 0) {
                    GameLogic.Share._playerCrl.diedCB(true);
                }
                else {
                    this.addPlayerToSelf();
                    SoundMgr.instance.playSoundEffect('Gliding.mp3', 1, null, null, 3.5);
                    GameLogic.Share._playerCrl.slideCB();
                }
            }
        }
    }

    class Road extends Laya.Script {
        constructor() {
            super();
            this.isUsed = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myBB = Utility.getBoundBox(this.myOwner.getChildByName('IdleArea'));
        }
        onDisable() {
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause || this.isUsed)
                return;
            if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
                this.isUsed = true;
                GameLogic.Share._playerCrl.resetIdle(this.myOwner);
            }
        }
    }

    class RoadFinish extends Laya.Script {
        constructor() {
            super();
            this.isUsed = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myBB = Utility.getBoundBox(this.myOwner.getChildByName('FinishArea'));
            this.stage1 = Utility.getBoundBox(this.myOwner.getChildByName('Stage1'));
            this.stage2 = Utility.getBoundBox(this.myOwner.getChildByName('Stage2'));
            this.stage3 = Utility.getBoundBox(this.myOwner.getChildByName('Stage3'));
            this.stage4 = Utility.getBoundBox(this.myOwner.getChildByName('Stage4'));
            this.finish = Utility.getBoundBox(this.myOwner.getChildByName('Finish'));
            this.playerNode = this.myOwner.getChildByName('PlayerNode');
            this.FXNode = this.myOwner.getChildByName('FXNode');
            this.FXNode.active = false;
            this.initPlayer();
        }
        onDisable() {
        }
        initPlayer() {
            for (let i = 0; i < this.playerNode.numChildren; i++) {
                let n = this.playerNode.getChildAt(i);
                let name = Math.random() * 1 < 0.5 ? 'Man_01.lh' : 'Wuman_01.lh';
                let player = Utility.getSprite3DResByUrl(name, n);
                player.transform.localPosition = new Laya.Vector3(0, 0, 0);
                player.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
                let crl = player.addComponent(Player);
                crl.playAnimation(AniState.ANI_SIT);
                crl.isCrowed = true;
                crl.changeSkin(Math.floor(Math.random() * 15), false);
                crl.initShoes(Math.floor(Math.random() * 15), false);
                crl.activeAcc(Math.floor(Math.random() * 15));
            }
        }
        finishCB() {
            this.FXNode.active = true;
            for (let i = 0; i < this.playerNode.numChildren; i++) {
                let n = this.playerNode.getChildAt(i);
                let player = n.getChildAt(0);
                let crl = player.getComponent(Player);
                crl.playAnimation(AniState.ANI_UP);
                Laya.timer.once(200, this, () => {
                    crl.playAnimation(AniState.ANI_WIN);
                });
            }
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause)
                return;
            if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB()) && !this.isUsed) {
                this.isUsed = true;
                GameLogic.Share._playerCrl.resetIdle(this.myOwner);
                GameLogic.Share._playerCrl.fixPosY();
                GameLogic.Share._player.getComponent(MoveComponent)._maxPosX = 1.5;
            }
            else if (Laya.CollisionUtils.boxContainsBox(this.stage1, GameLogic.Share._playerCrl.getMyBB()) && this.myOwner.getChildByName('Stage1')) {
                GameLogic.Share._playerCrl.stopLerpPosY = true;
                this.myOwner.getChildByName('Stage1').destroy();
                GameLogic.Share._playerCrl.decShoes(null);
            }
            else if (Laya.CollisionUtils.boxContainsBox(this.stage2, GameLogic.Share._playerCrl.getMyBB()) && this.myOwner.getChildByName('Stage2')) {
                this.myOwner.getChildByName('Stage2').destroy();
                GameLogic.Share._playerCrl.decShoes(null);
            }
            else if (Laya.CollisionUtils.boxContainsBox(this.stage3, GameLogic.Share._playerCrl.getMyBB()) && this.myOwner.getChildByName('Stage3')) {
                this.myOwner.getChildByName('Stage3').destroy();
                GameLogic.Share._playerCrl.decShoes(null);
            }
            else if (Laya.CollisionUtils.boxContainsBox(this.stage4, GameLogic.Share._playerCrl.getMyBB()) && this.myOwner.getChildByName('Stage4')) {
                this.myOwner.getChildByName('Stage4').destroy();
                GameLogic.Share._playerCrl.decShoes(null);
            }
            else if (Laya.CollisionUtils.boxContainsBox(this.finish, GameLogic.Share._playerCrl.getMyBB()) && this.myOwner.getChildByName('Finish')) {
                this.myOwner.getChildByName('Finish').destroy();
                GameLogic.Share._playerCrl.decShoes(null);
                GameLogic.Share.isFinish = true;
            }
            if (GameLogic.Share.isFinish && GameLogic.Share._player.transform.localPosition.z >= 25) {
                this.finishCB();
                GameLogic.Share.isFinish = false;
                GameLogic.Share.isGameOver = true;
                GameLogic.Share._playerCrl.goToDes();
                GameLogic.Share._cameraCrl.startRotate();
            }
        }
    }

    class RoadTS extends Laya.Script {
        constructor() {
            super();
            this.isUsed = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myBB = Utility.getBoundBox(this.myOwner.getChildByName('finish'));
            this.playerNode = this.myOwner.getChildByName('PlayerNode');
            this.FXNode = this.myOwner.getChildByName('FXNode');
            this.FXNode.active = false;
            this.initPlayer();
        }
        onDisable() {
        }
        initPlayer() {
            for (let i = 0; i < this.playerNode.numChildren; i++) {
                let n = this.playerNode.getChildAt(i);
                let name = Math.random() * 1 < 0.5 ? 'Man_01.lh' : 'Wuman_01.lh';
                let player = Utility.getSprite3DResByUrl(name, n);
                player.transform.localPosition = new Laya.Vector3(0, 0, 0);
                player.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
                let crl = player.addComponent(Player);
                crl.playAnimation(AniState.ANI_SIT);
                crl.isCrowed = true;
                crl.changeSkin(Math.floor(Math.random() * 15), false);
                crl.initShoes(Math.floor(Math.random() * 15), false);
                crl.activeAcc(Math.floor(Math.random() * 15));
            }
        }
        finishCB() {
            this.FXNode.active = true;
            for (let i = 0; i < this.playerNode.numChildren; i++) {
                let n = this.playerNode.getChildAt(i);
                let player = n.getChildAt(0);
                let crl = player.getComponent(Player);
                crl.playAnimation(AniState.ANI_UP);
                Laya.timer.once(200, this, () => {
                    crl.playAnimation(AniState.ANI_WIN);
                });
            }
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause)
                return;
            if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB()) && !this.isUsed) {
                this.isUsed = true;
                GameLogic.Share.isFinish = true;
                GameLogic.Share._playerCrl.resetIdle(this.myOwner);
            }
            if (GameLogic.Share.isFinish && GameLogic.Share._player.transform.localPosition.z >= 10) {
                this.finishCB();
                GameLogic.Share.isFinish = false;
                GameLogic.Share.isGameOver = true;
                GameLogic.Share._playerCrl.goToDes(11);
                GameLogic.Share._cameraCrl.startRotate();
            }
        }
    }

    class RotateBoard extends Laya.Script {
        constructor() {
            super();
            this.isUsed = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onDisable() {
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause || this.isUsed)
                return;
            let min = this.myOwner.getChildByName('min');
            let max = this.myOwner.getChildByName('max');
            let min1 = this.myOwner.getChildByName('min1');
            let max1 = this.myOwner.getChildByName('max1');
            if (Laya.CollisionUtils.boxContainsBox(Utility.getBoundBoxWithMinMax(min.transform.position.clone(), max.transform.position.clone()), GameLogic.Share._playerCrl.getMyBB()) ||
                Laya.CollisionUtils.boxContainsBox(Utility.getBoundBoxWithMinMax(min1.transform.position.clone(), max1.transform.position.clone()), GameLogic.Share._playerCrl.getMyBB())) {
                this.isUsed = true;
                if (GameLogic.Share._playerCrl.shoesArr.length <= 0) {
                    GameLogic.Share._playerCrl.diedCB();
                }
                else {
                    GameLogic.Share._playerCrl.decShoes(this.myOwner, 0);
                }
            }
        }
    }

    class Thorn extends Laya.Script {
        constructor() {
            super();
            this.isUsed = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myBB = Utility.getBoundBox(this.myOwner);
        }
        onDisable() {
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause || this.isUsed)
                return;
            if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
                this.isUsed = true;
                SoundMgr.instance.playSoundEffect('Collision.mp3');
                if (GameLogic.Share._playerCrl.shoesArr.length <= 0) {
                    GameLogic.Share._playerCrl.diedCB();
                }
                else {
                    GameLogic.Share._playerCrl.decShoes(this.myOwner, 200);
                }
            }
        }
    }

    class GameLogic {
        constructor() {
            this.camStartPos = new Laya.Vector3(0, 0, 0);
            this.camStartRotation = null;
            this._cameraCrl = null;
            this.lightStartAngle = new Laya.Vector3();
            this._levelNode = null;
            this._player = null;
            this._playerCrl = null;
            this._coinCount = 0;
            this._score = 0;
            this.totalDistance = 0;
            this.isDes = false;
            this.startCamField = 80;
            this.isMan = false;
            this.isStartGame = false;
            this.isGameOver = false;
            this.isWin = false;
            this.isPause = false;
            this.isFinish = false;
            if (!Laya.Browser.onWeiXin)
                localStorage.clear();
            GameLogic.Share = this;
            if (Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.showShareMenu({
                    withShareTicket: true,
                    menus: ['shareAppMessage', 'shareTimeline']
                });
                Laya.Browser.window.wx.onShareAppMessage(() => {
                    return {
                        title: '开心高跟鞋',
                        imageUrl: ''
                    };
                });
            }
            PlayerDataMgr.getPlayerData();
            FdAd.inidAd();
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
            this._light.shadowMode = Laya.ShadowMode.SoftLow;
            this._light.shadowDistance = 15;
            this._light.shadowResolution = 2048;
            this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            this.lightStartAngle = this._light.transform.rotationEuler.clone();
            this.camStartPos = this._camera.transform.position.clone();
            this.camStartRotation = this._camera.transform.rotation.clone();
            this._camera.fieldOfView = this.startCamField;
            this._cameraCrl = this._camera.addComponent(CameraCrl);
            this._levelNode = new Laya.Sprite3D();
            this._scene.addChild(this._levelNode);
            this.createPlayer();
            this.createLevel();
        }
        fixCameraField() {
        }
        setFog() {
            let scene = this._scene;
            scene.enableFog = true;
            scene.fogColor = this.getRGB("#F17673");
            scene.fogStart = 0;
            scene.fogRange = 400;
        }
        getRGB(_hexColor) {
            var color = [], rgb = [];
            let hexColor = _hexColor.replace(/#/, "");
            if (hexColor.length == 3) {
                var tmp = [];
                for (var i = 0; i < 3; i++) {
                    tmp.push(hexColor.charAt(i) + hexColor.charAt(i));
                }
                hexColor = tmp.join("");
            }
            for (var i = 0; i < 3; i++) {
                color[i] = "0x" + hexColor.substr(i * 2, 2);
                rgb.push(parseInt(color[i]));
            }
            return new Laya.Vector3(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
        }
        gameStart() {
            Laya.Scene.open('MyScenes/GameUI.scene');
        }
        startToWalk() {
            this._playerCrl.playAnimation(AniState.ANI_WALK, 2);
        }
        createLevel() {
            let g = 0;
            if (PlayerDataMgr.getPlayerData().grade <= 10) {
                g = PlayerDataMgr.getPlayerData().grade - 1;
            }
            else {
                g = Math.floor(Math.random() * 5 + 5);
            }
            let dataArr = PlayerDataMgr.levelDataArr[g];
            for (let i = 0; i < dataArr.length; i++) {
                let item = dataArr[i];
                let name = item.name;
                let position = Utility.getVector3(item.position.x, item.position.y, item.position.z);
                let rotation = Utility.getVector3(item.rotation.x, item.rotation.y, item.rotation.z);
                let scale = Utility.getVector3(item.scale.x, item.scale.y, item.scale.z);
                if (name.search('Road_01') != -1) {
                    this.createRoad(position, rotation, scale);
                }
                else if (name.search('Pole_01') != -1) {
                    this.createPole(position, rotation, scale);
                }
                else if (name.search('Obs_01') != -1) {
                    this.createObs(position, rotation, scale);
                }
                else if (name.search('Heel') != -1) {
                    this.createHeel(position, rotation, scale);
                }
                else if (name.search('Jewel_01') != -1) {
                    this.createJewel(position, rotation, scale);
                }
                else if (name.search('Road_Finish') != -1) {
                    this.createRoadFinish(position, rotation, scale);
                }
                else if (name.search('Board_01') != -1) {
                    this.createBoard(position, rotation, scale);
                }
                else if (name.search('Road_Ts_01') != -1) {
                    this.createRoadTS(position, rotation, scale);
                }
                else if (name.search('Thorn_01') != -1) {
                    this.createThorn(position, rotation, scale);
                }
                else if (name.search('Key_01') != -1) {
                    this.createKey(position, rotation, scale);
                }
                else if (name.search('Board_02') != -1) {
                    this.createBoard2(position, rotation, scale);
                }
            }
            this.createRoad(new Laya.Vector3(0, 0, -20), new Laya.Vector3(), new Laya.Vector3(1, 1, 1));
        }
        createPlayer() {
            this.isMan = PlayerDataMgr.getPlayerData().skinId == 4 || PlayerDataMgr.getPlayerData().skinId == 8 ||
                PlayerDataMgr.getPlayerData().skinId == 11 || PlayerDataMgr.getPlayerData().skinId == 13 || PlayerDataMgr.getPlayerData().skinId == 14;
            let name = this.isMan ? 'Man_01.lh' : 'Wuman_01.lh';
            this._player = Utility.getSprite3DResByUrl(name, this._levelNode);
            this._player.name = 'Player';
            this._playerCrl = this._player.addComponent(Player);
            this._player.addComponent(MoveComponent);
        }
        createRoad(position, rotation, scale) {
            let road = Utility.getSprite3DResByUrl('Road_01.lh', this._levelNode);
            road.transform.position = position;
            road.transform.rotationEuler = rotation;
            road.transform.setWorldLossyScale(scale);
            road.addComponent(Road);
        }
        createObs(position, rotation, scale) {
            let obs = Utility.getSprite3DResByUrl('Obs_01.lh', this._levelNode);
            obs.transform.position = position;
            obs.transform.rotationEuler = rotation;
            obs.transform.setWorldLossyScale(scale);
            obs.addComponent(Obs);
        }
        createPole(position, rotation, scale) {
            let pole = Utility.getSprite3DResByUrl('Pole_01.lh', this._levelNode);
            pole.transform.position = position;
            pole.transform.rotationEuler = rotation;
            pole.transform.setWorldLossyScale(scale);
            pole.addComponent(Pole);
        }
        createThorn(position, rotation, scale) {
            let thorn = Utility.getSprite3DResByUrl('Thorn_01.lh', this._levelNode);
            thorn.transform.position = position;
            thorn.transform.rotationEuler = rotation;
            thorn.transform.setWorldLossyScale(scale);
            thorn.addComponent(Thorn);
        }
        createHeel(position, rotation, scale) {
            let res = Laya.loader.getRes(WxApi.UnityPath + 'ShoesNode.lh');
            let shoes = res.getChildAt(0);
            let heel = Laya.Sprite3D.instantiate(shoes, this._levelNode, false, new Laya.Vector3(0, 0, 0));
            scale = new Laya.Vector3(1.5, 1.5, 1.5);
            heel.transform.position = position;
            heel.transform.rotationEuler = rotation;
            heel.transform.setWorldLossyScale(scale);
            heel.addComponent(Heel);
            let heelNode = Utility.getSprite3DResByUrl('HeelsNode.lh', heel);
            heelNode.transform.localPosition = new Laya.Vector3(0, 0, 0);
        }
        createBoard(position, rotation, scale) {
            let board = Utility.getSprite3DResByUrl('Board_01.lh', this._levelNode);
            board.transform.position = position;
            board.transform.rotationEuler = rotation;
            board.transform.setWorldLossyScale(scale);
            board.addComponent(Board);
        }
        createBoard2(position, rotation, scale) {
            let board = Utility.getSprite3DResByUrl('Board_02.lh', this._levelNode);
            board.transform.position = position;
            board.transform.rotationEuler = rotation;
            board.transform.setWorldLossyScale(scale);
            board.addComponent(RotateBoard);
        }
        createJewel(position, rotation, scale) {
            let jewel = Utility.getSprite3DResByUrl('Jewel_01.lh', this._levelNode);
            jewel.transform.position = position;
            jewel.transform.rotationEuler = rotation;
            jewel.transform.setWorldLossyScale(scale);
            jewel.addComponent(Jewel);
        }
        createKey(position, rotation, scale) {
            let key = Utility.getSprite3DResByUrl('Key_01.lh', this._levelNode);
            key.transform.position = position;
            key.transform.rotationEuler = rotation;
            key.transform.setWorldLossyScale(scale);
            key.addComponent(Key);
        }
        createRoadFinish(position, rotation, scale) {
            let roadFinish = Utility.getSprite3DResByUrl('Road_Finish.lh', this._levelNode);
            roadFinish.transform.position = position;
            roadFinish.transform.rotationEuler = rotation;
            roadFinish.transform.setWorldLossyScale(scale);
            roadFinish.addComponent(RoadFinish);
        }
        createRoadTS(position, rotation, scale) {
            let roadTS = Utility.getSprite3DResByUrl('Road_Ts_01.lh', this._levelNode);
            roadTS.transform.position = position;
            roadTS.transform.rotationEuler = rotation;
            roadTS.transform.setWorldLossyScale(scale);
            roadTS.addComponent(RoadTS);
        }
        winCB() {
            this.isGameOver = true;
            this.isWin = true;
            this.isStartGame = false;
            SoundMgr.instance.playSoundEffect('Victory.mp3');
            Laya.timer.once(2000, this, () => {
                this.showFinishUI();
            });
        }
        loseCB(isFall) {
            WxApi.DoVibrate(false);
            this.isGameOver = true;
            this.isWin = false;
            this.isStartGame = false;
            SoundMgr.instance.playSoundEffect('Lose.mp3');
            Laya.timer.once(2000, this, () => {
                this.showFinishUI();
            });
        }
        showFinishUI() {
            if (PlayerDataMgr.getPlayerData().key < 3) {
                Laya.Scene.open('MyScenes/FinishUI.scene', true);
            }
            else {
                Laya.Scene.open('MyScenes/BoxUI.scene', true);
            }
        }
        activeRoad() {
        }
        restartGame() {
            this.isStartGame = false;
            this.isGameOver = false;
            this.isWin = false;
            this.totalDistance = 0;
            this._score = 0;
            this._coinCount = 0;
            this.isPause = false;
            this._camera.fieldOfView = this.startCamField;
            this.isFinish = false;
            this.isDes = false;
            this._camera.transform.position = this.camStartPos;
            this._camera.transform.rotation = this.camStartRotation;
            this._light.transform.localRotationEuler = this.lightStartAngle;
            this._levelNode.destroyChildren();
            this.createPlayer();
            this.createLevel();
        }
    }

    class BoxUI extends Laya.Scene {
        constructor() {
            super();
            this.skinId = -1;
            this.keyCount = 3;
            this.openCount = 0;
            this.gotSkin = false;
            this.randomArr = [20, 15, 10, 10, 10, 10, 10, 10, 5];
            this.boxArr = [15, 25, 35, 45, 55, 65, 75, 85, 100];
        }
        onOpened() {
            this.skinId = PlayerDataMgr.getUnlockShoesId();
            if (this.skinId != -1) {
                this.bestPic.skin = 'skinUI/shoes/Shoes' + (this.skinId + 1) + '.png';
            }
            this.keyCount = 3;
            Laya.timer.frameLoop(1, this, this.updateCB);
            Utility.addClickEvent(this.getBtn, this, this.getKeyBtnCB);
            Utility.addClickEvent(this.backBtn, this, this.backBtnCB);
            this.getBtn.visible = false;
            this.backBtn.visible = false;
            this.initItem();
            FdAd.hideBannerAd();
        }
        onClosed() {
            FdAd.hideBannerAd();
        }
        initItem() {
            for (let i = 0; i < this.itemNode.numChildren; i++) {
                let item = this.itemNode.getChildAt(i);
                let box = item.getChildByName('box');
                let coin = item.getChildByName('diamond');
                let num = item.getChildByName('num');
                coin.visible = false;
                num.visible = false;
                item.on(Laya.Event.CLICK, this, this.itemCB, [i]);
            }
        }
        itemCB(id) {
            if (this.openCount >= 9 || this.keyCount <= 0 || !this.itemNode.getChildAt(id).getChildByName('box').visible)
                return;
            this.keyCount--;
            let randV = Math.random() * 100;
            let v = 0;
            let index = 0;
            for (let i = 0; i < this.randomArr.length; i++) {
                if (randV <= this.randomArr[i] + v) {
                    index = i;
                    break;
                }
                v += this.randomArr[i];
            }
            let num = this.randomArr.splice(index, 1)[0];
            this.randomArr.forEach(r => {
                r += num / this.randomArr.length;
            });
            let bounes = this.boxArr[index];
            this.boxArr.splice(index, 1);
            this.openCount++;
            if (this.openCount % 3 == 0) {
                if (this.openCount < 9)
                    this.getBtn.visible = true;
                this.backBtn.visible = true;
            }
            let item = this.itemNode.getChildAt(id);
            item.skin = 'boxUI/mh_dk_04.png';
            let box = item.getChildByName('box');
            let coin = item.getChildByName('diamond');
            let coinV = item.getChildByName('num');
            box.visible = false;
            coin.visible = true;
            coinV.visible = true;
            if (bounes == 100 && this.skinId != -1 && !this.gotSkin) {
                this.gotSkin = true;
                coin.visible = false;
                coinV.visible = false;
                box.visible = true;
                box.skin = 'skinUI/shoes/Shoes' + (this.skinId + 1) + '.png';
                PlayerDataMgr.getPlayerData().shoesArr[this.skinId] = 1;
                PlayerDataMgr.getPlayerData().shoesId = this.skinId;
                PlayerDataMgr.setPlayerData();
            }
            else {
                PlayerDataMgr.changeCoin(bounes);
                coinV.value = bounes.toString();
            }
        }
        getKeyBtnCB() {
            let cb = () => {
                this.keyCount = 3;
                this.getBtn.visible = false;
                this.backBtn.visible = false;
            };
            FdAd.showVideoAd(cb);
        }
        backBtnCB() {
            Laya.Scene.closeAll();
            PlayerDataMgr.getPlayerData().key = 0;
            PlayerDataMgr.setPlayerData();
            Laya.Scene.open('MyScenes/FinishUI.scene', false);
        }
        updateCB() {
            for (let i = 0; i < this.keyNode.numChildren; i++) {
                let key = this.keyNode.getChildAt(i);
                key.skin = i < this.keyCount ? 'boxUI/mh_ys_01.png' : 'boxUI/mh_ys_02.png';
            }
        }
    }

    class FixNodeY extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            let myOwner = this.owner;
            myOwner.y = myOwner.y * Laya.stage.displayHeight / 1334;
        }
    }

    class FinishUI extends Laya.Scene {
        constructor() {
            super();
            this.num = 0;
        }
        onOpened(param) {
            let isWin = GameLogic.Share.isWin;
            this.VictoryNode.visible = isWin;
            this.LoseNode.visible = !isWin;
            let per = Math.floor(PlayerDataMgr.getPlayerData().grade % 5) * 20;
            per = per == 0 ? 100 : per;
            this.perNum.value = per.toString();
            this.num = GameLogic.Share._coinCount;
            this.tagPic.skin = 'finishUI/js_wz_0' + Math.floor(Math.random() * 5 + 2) + '.png';
            Utility.addClickEvent(this.skipBtn, this, this.skipBtnCB);
            Utility.addClickEvent(this.restartBtn, this, this.restartBtnCB);
        }
        onClosed() {
        }
        trippleBtnCB() {
            let cb = () => {
                PlayerDataMgr.changeCoin(this.num * 3);
                this.back();
            };
            FdAd.showVideoAd(cb);
        }
        skipBtnCB() {
            let cb = () => {
                GameLogic.Share.isWin = true;
                this.back();
            };
            FdAd.showVideoAd(cb);
        }
        restartBtnCB() {
            this.back();
        }
        back() {
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.getPlayerData().grade++;
                PlayerDataMgr.setPlayerData();
            }
            this.close();
            GameLogic.Share.restartGame();
            Laya.Scene.open('MyScenes/StartUI.scene', true);
        }
    }

    class CoinViewCrl extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            this.myOwner.value = PlayerDataMgr.getPlayerData().coin.toString();
        }
    }

    class LoadingUI extends Laya.Scene {
        constructor() {
            super();
            this.loadResCompleted = false;
            this.FdIsCompleted = true;
            this.maxGrade = 10;
            this.subArr = ['unity', 'shoesRes', 'skinRes', 'Sounds'];
            this.subIndex = 0;
        }
        onOpened() {
            this.loadJsonData(1);
            Laya.timer.frameLoop(1, this, () => {
                if (this.loadResCompleted && this.FdIsCompleted) {
                    Laya.timer.clearAll(this);
                    this.goToStart();
                }
            });
        }
        onClosed() {
        }
        loadJsonData(index) {
            Utility.loadJson('res/config/Level' + index + '.json', (data) => {
                PlayerDataMgr.levelDataArr.push(data);
                index++;
                if (index > this.maxGrade) {
                    if (Laya.Browser.onWeiXin)
                        this.loadSubpackage();
                    else
                        this.loadRes();
                    console.log('levelDataArr:', PlayerDataMgr.levelDataArr);
                    return;
                }
                else {
                    this.loadJsonData(index);
                }
            });
        }
        loadSubpackage() {
            const loadTask = Laya.Browser.window.wx.loadSubpackage({
                name: this.subArr[this.subIndex],
                success: (res) => {
                    if (this.subIndex >= this.subArr.length - 1) {
                        this.loadRes();
                    }
                    else {
                        this.subIndex++;
                        this.loadSubpackage();
                    }
                },
                fail: (res) => {
                }
            });
            loadTask.onProgressUpdate(res => {
                console.log('下载进度', res.progress);
                console.log('已经下载的数据长度', res.totalBytesWritten);
                console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
            });
        }
        loadRes() {
            var resUrl = [
                WxApi.UnityPath + 'Obs_01.lh',
                WxApi.UnityPath + 'AccNode.lh',
                WxApi.UnityPath + 'Heel.lh',
                WxApi.UnityPath + 'Man_01.lh',
                WxApi.UnityPath + 'Road_01.lh',
                WxApi.UnityPath + 'Wuman_01.lh',
                WxApi.UnityPath + 'Jewel_01.lh',
                WxApi.UnityPath + 'Key_01.lh',
                WxApi.UnityPath + 'Pole_01.lh',
                WxApi.UnityPath + 'Road_Finish.lh',
                WxApi.UnityPath + 'Road_Ts_01.lh',
                WxApi.UnityPath + 'Thorn_01.lh',
                WxApi.UnityPath + 'Board_01.lh',
                WxApi.UnityPath + 'Board_02.lh',
                WxApi.UnityPath + 'ShoesNode.lh',
                WxApi.UnityPath + 'HeelsNode.lh'
            ];
            Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
        }
        onComplete() {
            this.loadResCompleted = true;
        }
        goToStart() {
            SoundMgr.instance.initLoading(() => {
                GameLogic.Share.initScene();
            });
        }
        onProgress(value) {
            this.bar.value = value;
        }
    }

    class SkinUI extends Laya.Scene {
        constructor() {
            super();
            this.curPage = -1;
            this.scene3D = null;
            this.light = null;
            this.camera = null;
            this._player = null;
            this._playerCrl = null;
            this._playerMan = null;
            this._playerManCrl = null;
        }
        onOpened() {
            Laya.timer.frameLoop(1, this, this.updateCB);
            Utility.addClickEvent(this.closeBtn, this, this.closeBtnCB);
            this.btn1.on(Laya.Event.CLICK, this, this.pageBtnCB, [0]);
            this.btn2.on(Laya.Event.CLICK, this, this.pageBtnCB, [1]);
            this.btn3.on(Laya.Event.CLICK, this, this.pageBtnCB, [2]);
            Utility.addClickEvent(this.randUnlockBtn, this, this.randUnlockBtnCB);
            Utility.addClickEvent(this.adBtn, this, this.adBtnCB);
            this.init3DScene();
            this.initList();
            this.pageBtnCB(0);
        }
        onClosed() {
            Laya.timer.clearAll(this);
            this.scene3D.destroy();
            GameLogic.Share._player.getComponent(MoveComponent).stageOff();
            GameLogic.Share._player.destroy();
            GameLogic.Share.createPlayer();
            GameLogic.Share._scene.active = true;
            GameLogic.Share._camera.active = true;
        }
        init3DScene() {
            this.scene3D = Laya.stage.addChild(new Laya.Scene3D());
            this.scene3D.zOrder = 100;
            this.light = this.scene3D.addChild(new Laya.DirectionLight());
            this.light.color = new Laya.Vector3(1, 0.956, 0.839);
            this.camera = this.scene3D.addChild(new Laya.Camera(0, 0.1, 1000));
            this.camera.transform.translate(new Laya.Vector3(0, 1.5, 5));
            this.camera.transform.rotate(new Laya.Vector3(-20, 0, 0), true, false);
            this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
            this.camera.fieldOfView = 60;
            this.createPlayer(PlayerDataMgr.getPlayerData().skinId);
            this.createPlayerMan(PlayerDataMgr.getPlayerData().skinId);
            this.activePlayer(PlayerDataMgr.getPlayerData().skinId);
        }
        createPlayer(id) {
            let isMan = id == 4 || id == 8 || id == 11 || id == 13 || id == 14;
            let name = 'Wuman_01.lh';
            this._player = Utility.getSprite3DResByUrl(name, this.scene3D);
            this._playerCrl = this._player.addComponent(Player);
            this._playerCrl.playAnimation(AniState.ANI_WALK);
            this._player.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
        }
        createPlayerMan(id) {
            let name = 'Man_01.lh';
            this._playerMan = Utility.getSprite3DResByUrl(name, this.scene3D);
            this._playerManCrl = this._playerMan.addComponent(Player);
            this._playerManCrl.playAnimation(AniState.ANI_WALK);
            this._playerMan.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
        }
        activePlayer(id) {
            let isMan = id == 4 || id == 8 || id == 11 || id == 13 || id == 14;
            this._playerMan.active = isMan;
            this._player.active = !isMan;
        }
        fixCameraField() {
            let staticDT = 1624 - 1334;
            let curDT = Laya.stage.displayHeight - 1334 < 0 ? 0 : Laya.stage.displayHeight - 1334;
            let per = curDT / staticDT * 5;
            this.camera.fieldOfView += per;
        }
        pageBtnCB(id) {
            if (this.curPage == id)
                return;
            this.curPage = id;
            this.btn1.scale(1, 1);
            this.btn2.scale(1, 1);
            this.btn3.scale(1, 1);
            switch (id) {
                case 0:
                    this.btn1.scale(1.2, 1.2);
                    break;
                case 1:
                    this.btn2.scale(1.2, 1.2);
                    break;
                case 2:
                    this.btn3.scale(1.2, 1.2);
                    break;
            }
            this.refreshListData();
        }
        initList() {
            this.myList.vScrollBarSkin = '';
            if (this.curPage == 0) {
                this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
            }
            else if (this.curPage == 1) {
                this.myList.array = PlayerDataMgr.getPlayerData().shoesArr;
            }
            else if (this.curPage == 2) {
                this.myList.array = PlayerDataMgr.getPlayerData().hatArr;
            }
            this.myList.repeatX = 4;
            this.myList.renderHandler = Laya.Handler.create(this, this.onListRender, null, false);
        }
        refreshListData() {
            if (this.curPage == 0) {
                this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
                this.maxPic.visible = PlayerDataMgr.getUnlockSkinId(true) == -1;
                this.randUnlockBtn.visible = PlayerDataMgr.getUnlockSkinId(true) != -1;
            }
            else if (this.curPage == 1) {
                this.myList.array = PlayerDataMgr.getPlayerData().shoesArr;
                this.maxPic.visible = PlayerDataMgr.getUnlockShoesId(true) == -1;
                this.randUnlockBtn.visible = PlayerDataMgr.getUnlockShoesId(true) != -1;
            }
            else if (this.curPage == 2) {
                this.myList.array = PlayerDataMgr.getPlayerData().hatArr;
                this.maxPic.visible = PlayerDataMgr.getUnlockHatId(true) == -1;
                this.randUnlockBtn.visible = PlayerDataMgr.getUnlockHatId(true) != -1;
            }
        }
        onListRender(cell, index) {
            if (index >= this.myList.array.length) {
                return;
            }
            var item = cell.getChildByName('item');
            let icon = item.getChildByName('icon');
            let bg = item.getChildByName('bg');
            let num = bg.getChildByName('num');
            let star = item.getChildByName('star');
            star.visible = index >= 10;
            if (this.curPage == 0) {
                bg.visible = index >= 10 && PlayerDataMgr.getPlayerData().videoArr[index - 10] < 3;
                if (bg.visible)
                    num.value = PlayerDataMgr.getPlayerData().videoArr[index - 10].toString();
                item.skin = index == PlayerDataMgr.getPlayerData().skinId ? 'skinUI/sd_dk_02.png' : 'skinUI/sd_dk_01.png';
                icon.skin = PlayerDataMgr.getPlayerData().skinArr[index] == 1 ? 'skinUI/role/Hero' + (index + 1) + '.png' : 'skinUI/sd_wh_01.png';
            }
            else if (this.curPage == 1) {
                bg.visible = index >= 10 && PlayerDataMgr.getPlayerData().videoArr[index - 5] < 3;
                if (bg.visible)
                    num.value = PlayerDataMgr.getPlayerData().videoArr[index - 5].toString();
                item.skin = index == PlayerDataMgr.getPlayerData().shoesId ? 'skinUI/sd_dk_02.png' : 'skinUI/sd_dk_01.png';
                icon.skin = PlayerDataMgr.getPlayerData().shoesArr[index] == 1 ? 'skinUI/shoes/Shoes' + (index + 1) + '.png' : 'skinUI/sd_wh_01.png';
            }
            else if (this.curPage == 2) {
                bg.visible = index >= 10 && PlayerDataMgr.getPlayerData().videoArr[index] < 3;
                if (bg.visible)
                    num.value = PlayerDataMgr.getPlayerData().videoArr[index].toString();
                item.skin = index == PlayerDataMgr.getPlayerData().hatId ? 'skinUI/sd_dk_02.png' : 'skinUI/sd_dk_01.png';
                icon.skin = PlayerDataMgr.getPlayerData().hatArr[index] == 1 ? 'skinUI/hat/Acc' + (index + 1) + '.png' : 'skinUI/sd_wh_01.png';
            }
            item.off(Laya.Event.CLICK, this, this.selectSkin);
            item.on(Laya.Event.CLICK, this, this.selectSkin, [index]);
        }
        selectSkin(index) {
            if (this.curPage == 0) {
                if (index < 10 && PlayerDataMgr.getPlayerData().skinArr[index] == 0)
                    return;
                if (index >= 10 && PlayerDataMgr.getPlayerData().skinArr[index] == 0) {
                    let cb = () => {
                        PlayerDataMgr.getPlayerData().videoArr[index - 10]++;
                        if (PlayerDataMgr.getPlayerData().videoArr[index - 10] >= 3)
                            PlayerDataMgr.getPlayerData().skinArr[index] = 1;
                        PlayerDataMgr.setPlayerData();
                    };
                    FdAd.showVideoAd(cb);
                }
                else {
                    PlayerDataMgr.getPlayerData().skinId = index;
                    PlayerDataMgr.setPlayerData();
                    this.activePlayer(index);
                    let isMan = index == 4 || index == 8 || index == 11 || index == 13 || index == 14;
                    if (isMan) {
                        this._playerManCrl.changeSkin(index);
                        this._playerManCrl.playAnimation(AniState.ANI_WALK);
                    }
                    else {
                        this._playerCrl.changeSkin(index);
                        this._playerCrl.playAnimation(AniState.ANI_WALK);
                    }
                }
            }
            else if (this.curPage == 1) {
                if (index < 10 && PlayerDataMgr.getPlayerData().shoesArr[index] == 0)
                    return;
                if (index >= 10 && PlayerDataMgr.getPlayerData().shoesArr[index] == 0) {
                    let cb = () => {
                        PlayerDataMgr.getPlayerData().videoArr[index - 5]++;
                        if (PlayerDataMgr.getPlayerData().videoArr[index - 5] >= 3)
                            PlayerDataMgr.getPlayerData().shoesArr[index] = 1;
                        PlayerDataMgr.setPlayerData();
                    };
                    FdAd.showVideoAd(cb);
                }
                else {
                    PlayerDataMgr.getPlayerData().shoesId = index;
                    PlayerDataMgr.setPlayerData();
                    if (this._playerMan.active) {
                        this._playerManCrl.initShoes(index);
                        this._playerManCrl.playAnimation(AniState.ANI_WALK);
                    }
                    else {
                        this._playerCrl.initShoes(index);
                        this._playerCrl.playAnimation(AniState.ANI_WALK);
                    }
                }
            }
            else if (this.curPage == 2) {
                if (index < 10 && PlayerDataMgr.getPlayerData().hatArr[index] == 0)
                    return;
                if (index >= 10 && PlayerDataMgr.getPlayerData().hatArr[index] == 0) {
                    let cb = () => {
                        PlayerDataMgr.getPlayerData().videoArr[index]++;
                        if (PlayerDataMgr.getPlayerData().videoArr[index] >= 3)
                            PlayerDataMgr.getPlayerData().hatArr[index] = 1;
                        PlayerDataMgr.setPlayerData();
                        this.refreshListData();
                    };
                    FdAd.showVideoAd(cb);
                }
                else {
                    PlayerDataMgr.getPlayerData().hatId = index;
                    PlayerDataMgr.setPlayerData();
                    if (this._playerMan.active) {
                        this._playerManCrl.activeAcc(index);
                        this._playerManCrl.playAnimation(AniState.ANI_WALK);
                    }
                    else {
                        this._playerCrl.activeAcc(index);
                        this._playerCrl.playAnimation(AniState.ANI_WALK);
                    }
                }
            }
            this.refreshListData();
        }
        randUnlockBtnCB() {
            if (PlayerDataMgr.getPlayerData().coin < 600) {
                WxApi.OpenAlert('钻石不足！');
                return;
            }
            if (this.curPage == 0) {
                let id = PlayerDataMgr.getUnlockSkinId(true);
                PlayerDataMgr.getPlayerData().skinArr[id] = 1;
            }
            else if (this.curPage == 1) {
                let id = PlayerDataMgr.getUnlockShoesId(true);
                PlayerDataMgr.getPlayerData().shoesArr[id] = 1;
            }
            else if (this.curPage == 2) {
                let id = PlayerDataMgr.getUnlockHatId(true);
                PlayerDataMgr.getPlayerData().hatArr[id] = 1;
            }
            PlayerDataMgr.changeCoin(-600);
            this.refreshListData();
        }
        adBtnCB() {
            let cb = () => {
                PlayerDataMgr.changeCoin(600);
            };
            FdAd.showVideoAd(cb);
        }
        closeBtnCB() {
            Laya.Scene.open('MyScenes/StartUI.scene');
        }
        updateCB() {
        }
    }

    class StartUI extends Laya.Scene {
        constructor() {
            super();
        }
        onAwake() {
            SoundMgr.instance.playMusic('Bgm.mp3');
        }
        onOpened() {
            WxApi.isStartUI = true;
            Laya.timer.frameLoop(1, this, this.updateCB);
            this.startBtn.on(Laya.Event.CLICK, this, this.startBtnCB);
            Utility.addClickEvent(this.shopBtn, this, this.skinBtnCB);
            Utility.scaleLoop(this.startLabel, 1.2, 500);
            this.initGradeData();
            GameLogic.Share._cameraCrl.resetCamera();
            FdAd.showBannerAd();
        }
        onClosed() {
            WxApi.isStartUI = false;
            Laya.timer.clearAll(this);
            FdAd.hideBannerAd();
        }
        initGradeData() {
            for (let i = 0; i < 5; i++) {
                let item = this.itemNode.getChildAt(i);
                let num = item.getChildByName('num');
                let base = Math.floor((PlayerDataMgr.getPlayerData().grade - 1) / 5) * 5;
                num.value = ((i + 1) + base).toString();
                item.skin = PlayerDataMgr.getPlayerData().grade >= (i + 1) + base ? 'startUI/sy_dk_02.png' : 'startUI/sy_dk_03.png';
            }
        }
        startBtnCB() {
            FdAd.hideBannerAd();
            GameLogic.Share.gameStart();
        }
        skinBtnCB() {
            FdAd.hideBannerAd();
            Laya.Scene.open('MyScenes/SkinUI.scene');
            GameLogic.Share._scene.active = false;
            GameLogic.Share._camera.active = false;
        }
        updateCB() {
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("View/BoxUI.ts", BoxUI);
            reg("Libs/FixNodeY.ts", FixNodeY);
            reg("View/FinishUI.ts", FinishUI);
            reg("Crl/CoinViewCrl.ts", CoinViewCrl);
            reg("View/GameUI.ts", GameUI);
            reg("View/LoadingUI.ts", LoadingUI);
            reg("View/SkinUI.ts", SkinUI);
            reg("View/StartUI.ts", StartUI);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "MyScenes/FinishUI.scene";
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
//# sourceMappingURL=bundle.js.map
