(function () {
    'use strict';

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
            this.skinId = 0;
            this.skinArr = [1, 0, 0, 0, 0];
            this.msId = 0;
            this.msArr = [1, 0, 0, 0, 0, 0];
            this.exitTime = 0;
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
        static changeCoin(dt) {
            this._playerData.coin += dt;
            this.setPlayerData();
        }
        static setExitTime() {
            this._playerData.exitTime = new Date().getTime();
            this.setPlayerData();
        }
        static getFruitColor(id) {
            if (id == 0) {
                return Laya.Color.RED;
            }
            else if (id == 1) {
                return Laya.Color.GREEN;
            }
            else if (id == 2) {
                return Laya.Color.YELLOW;
            }
        }
    }
    PlayerDataMgr._playerData = null;
    PlayerDataMgr.powerMax = 10;
    PlayerDataMgr.tempSkinId = -1;
    PlayerDataMgr.roadArr1 = [];
    PlayerDataMgr.roadArr2 = [];
    PlayerDataMgr.roadArr3 = [];

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
        static aldEvent(str) {
            return;
            if (Laya.Browser.onWeiXin)
                Laya.Browser.window.wx.aldSendEvent(str);
        }
    }
    WxApi.UnityPath = 'LayaScene_SampleScene/Conventional/';
    WxApi.openId = '';
    WxApi.version = '1.0.5';
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
                { url: 'res/Sounds/Bar.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Buy.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Click.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Ground.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Jewel.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Longer.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Run.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/Shorter.mp3', type: Laya.Loader.SOUND }
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
        playSoundEffect(str, loops = 1, cb) {
            return Laya.SoundManager.playSound('res/Sounds/' + str, loops, new Laya.Handler(this, cb));
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
            }, duration, null, Laya.Handler.create(this, () => {
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
        static RotateTo(node, duration, des, cb) {
            var rotationOld = node.transform.localRotationEuler;
            Laya.Tween.to(node.transform.localRotationEuler, {
                x: des.x,
                y: des.y,
                z: des.z,
                update: new Laya.Handler(this, function () {
                    if (node)
                        node.transform.localRotationEuler = rotationOld;
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
            let r1 = Math.random() * w + 1;
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
        static getSprite3DResByUrl(url, parent) {
            let res = Laya.loader.getRes(WxApi.UnityPath + url);
            return Laya.Sprite3D.instantiate(res, parent, false, new Laya.Vector3(0, 0, 0));
        }
        static getRandomItemInArrWithoutSelf(self, arr, count = 1) {
            let temp = [].concat(arr);
            temp.splice(temp.indexOf(self), 1);
            temp = this.shuffleArr(temp);
            return temp.slice(0, count);
        }
        static getBoundBox(node) {
            let coll = node.getComponent(Laya.PhysicsCollider);
            let shape = coll.colliderShape;
            let pos = node.transform.position.clone();
            pos.x += shape.localOffset.x;
            pos.y += shape.localOffset.y;
            pos.z += shape.localOffset.z;
            let min = new Laya.Vector3(pos.x - shape.sizeX / 2, pos.y - shape.sizeY / 2, pos.z - shape.sizeZ / 2);
            let max = new Laya.Vector3(pos.x + shape.sizeX / 2, pos.y + shape.sizeY / 2, pos.z + shape.sizeZ / 2);
            return new Laya.BoundBox(min, max);
        }
        static getBoundBoxWithMinMax(min, max) {
            return new Laya.BoundBox(min, max);
        }
    }

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
        static init(cb) {
            this.randTouchProgress();
            if (Laya.Browser.onWeiXin) {
                this.getConfig(cb);
            }
            else {
                cb && cb();
            }
        }
        static loadGame(cb) {
            var closeVideo = () => {
                console.log("关闭首次进入视频");
                this.showReMen(cb);
            };
            if (this.canForceVideo) {
                FdAd.showVideoAd(null, closeVideo);
            }
            else {
                closeVideo();
            }
        }
        static showReMen(cb) {
            if (this.canTrapRemen) {
                Laya.Scene.open(SceneType.Remen, false, null, Laya.Handler.create(this, s => {
                    Laya.stage.addChild(s);
                    s.size(Laya.stage.width, Laya.stage.height);
                    if (!FdAd.showGridAD()) {
                        FdAd.initGridAD(() => { FdAd.showGridAD(); }, (Laya.Browser.clientWidth) * 0.5 - 150, 160);
                    }
                    this.bannerShowHide();
                    FdAd.bannerIndex = 0;
                    let btnContinue = s.btnContinue;
                    btnContinue.offAllCaller(this);
                    btnContinue.on(Laya.Event.CLICK, this, () => {
                        Laya.timer.clearAll(this);
                        Laya.Scene.close(SceneType.Remen);
                        FdAd.hideBannerAd();
                        FdAd.hideGridAD();
                        if (this.canForceVideo)
                            FdAd.showVideoAd();
                        this.showBox2(cb);
                    });
                }));
            }
            else {
                cb && cb();
            }
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
        static showBox1(cb) {
            if (this.canTrapBox) {
                Laya.timer.clearAll(this);
                FdAd.hideBannerAd();
                Laya.Scene.open(SceneType.Box1, false, { closeCB: cb }, Laya.Handler.create(this, (s) => {
                    Laya.stage.addChild(s);
                    s.size(Laya.stage.width, Laya.stage.height);
                }));
            }
            else {
                cb && cb();
            }
        }
        static showBox2(cb) {
            if (this.canTrapBox) {
                Laya.Scene.open(SceneType.Box2, false, { closeCB: cb }, Laya.Handler.create(this, (s) => {
                    Laya.stage.addChild(s);
                    s.size(Laya.stage.width, Laya.stage.height);
                }));
            }
            else {
                cb && cb();
            }
        }
        static showVitrualWxpage(cb, type = 0) {
            if (this.canTrapVirtualWx && Laya.Browser.onWeiXin) {
                Laya.Browser.window.wx.showModal({
                    title: '提示',
                    content: '未观看完广告无法获取奖励，是否继续？',
                    success: (res) => {
                        if (!this.canForceVideo) {
                            this.showBox1(cb);
                            return;
                        }
                        let curVirType = res.confirm ? 1 : 2;
                        if (type == 0) {
                            FdAd.showVideoAd(null, () => { this.showVitrualWxpage(cb, curVirType); });
                            return;
                        }
                        if (type == curVirType) {
                            FdAd.showVideoAd(null, () => { this.showVitrualWxpage(cb, curVirType); });
                        }
                        else {
                            this.showBox1(cb);
                        }
                    }
                });
            }
            else {
                this.showBox1(cb);
            }
        }
        static inHomePage(cb) {
            if (this.canForceVideo) {
                FdAd.showVideoAd(null, cb);
            }
            else {
                cb && cb();
            }
        }
        static startGame(cb) {
            var showVitrualWxpage = () => {
                this.showVitrualWxpage(cb);
            };
            if (this.canForceVideo) {
                FdAd.showVideoAd(null, showVitrualWxpage);
            }
            else {
                showVitrualWxpage();
            }
        }
        static get allowScene() {
            if (Laya.Browser.onWeiXin) {
                var launchInfo = Laya.Browser.window.wx.getLaunchOptionsSync();
                let scene = launchInfo.scene.toString();
                let arr = this.jsonConfig.sceneList.split(',');
                return arr.indexOf(scene) != -1;
            }
            return true;
        }
        static getConfig(cb) {
            var launchInfo = Laya.Browser.window.wx.getLaunchOptionsSync();
            console.log("当前场景：", launchInfo.scene);
            console.log('wxsdk初始化');
            window['wxsdk'].init({
                version: '1.0.2',
                appid: '250',
                secret: 'pj1zyq521krsjfrva8xw4wrk2j3v35sa',
                share: {
                    title: '你能过得了这一关吗？',
                    image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim',
                },
            });
            window['wxsdk'].onInit(() => {
                console.log('wxsdk初始化成功:', window['wxsdk']);
                let conf = new config();
                conf.allowMistouch = window['wxsdk'].conf.allowMistouch;
                conf.showVitualWx = window['wxsdk'].conf.showVitualWx;
                conf.forceVideo = window['wxsdk'].conf.forceVideo;
                conf.showBox = window['wxsdk'].conf.showBox;
                conf.showRemen = window['wxsdk'].conf.showRemen;
                conf.refresh_banner_time = window['wxsdk'].conf.refresh_banner_time;
                conf.version = window['wxsdk'].conf.version;
                conf.channel_ditch = window['wxsdk'].conf.channel_ditch;
                conf.sceneList = window['wxsdk'].conf.sceneList;
                this.jsonConfig = conf;
                console.log('config:', this.jsonConfig);
                if (this.jsonConfig.channel_ditch && !window['wxsdk'].user.channel) {
                    this.jsonConfig.allowMistouch = false;
                    console.log('config1:', this.jsonConfig);
                }
                FdAd.inidAd();
                cb && cb();
            });
            window['wxsdk'].login();
        }
        static get canTrapAll() {
            return this.allowScene && this.jsonConfig.allowMistouch && this.version.split('.')[2] <= this.jsonConfig.version.split('.')[2];
        }
        static get canForceVideo() {
            return this.canTrapAll && this.jsonConfig.forceVideo;
        }
        static get canTrapVirtualWx() {
            return this.canTrapAll && this.jsonConfig.showVitualWx;
        }
        static get canTrapBox() {
            return this.canTrapAll && this.jsonConfig.showBox;
        }
        static get canTrapRemen() {
            return this.canTrapAll && this.jsonConfig.showRemen;
        }
    }
    FdMgr.version = '1.0.5';
    FdMgr.wuchuProgressValue = 0;
    FdMgr.wuchuProgressStepAdd = 0.1;
    FdMgr.wuchuProgressFrameSub = 0.0032;
    var SceneType;
    (function (SceneType) {
        SceneType["Remen"] = "FDScene/Remen.scene";
        SceneType["VitrualWx"] = "FDScene/VitrualWx.scene";
        SceneType["Box1"] = "FDScene/Box1.scene";
        SceneType["Box2"] = "FDScene/Box2.scene";
    })(SceneType || (SceneType = {}));
    class config {
    }

    class FdAd {
        static inidAd() {
            if (!Laya.Browser.onWeiXin)
                return;
            this.initBanner();
            this.createVideoAd();
            this.createOutsideBanner();
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
            this.bannerIdArr = Utility.shuffleArr(this.bannerIdArr);
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
            if (this.bannerErrorArr[this.bannerIndex]) {
                this.bannerIndex++;
                if (this.bannerIndex >= this.bannerIdArr.length)
                    this.bannerIndex = 0;
                this.showBannerAd();
                return;
            }
            this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].show();
            this.stopCountBannerTime();
            if (!FdMgr.canTrapAll)
                return;
            Laya.timer.loop(100, this, this.countBannerTime);
        }
        static hideBannerAd() {
            if (!Laya.Browser.onWeiXin || this.isAllBannerError) {
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
                if (this.bannerShowCount[this.bannerIndex] >= 3) {
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
        static createOutsideBanner() {
            return;
            if (!Laya.Browser.onWeiXin)
                return;
            if (this.outsideBanner) {
                this.outsideBanner.offLoad();
                this.outsideBanner.offError();
                this.outsideBanner.destroy();
            }
            if (Laya.Browser.window.wx.createBannerAd)
                this.outsideBanner = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: this.outsideBannerId,
                    style: {
                        left: -10000,
                        top: -10000,
                        width: 320
                    }
                });
            this.outsideBanner.onLoad(() => {
                console.log("屏外banner加载成功");
                this.outsideBanner.show();
                Laya.timer.once(20000, this, function () {
                    FdAd.createOutsideBanner();
                });
            });
            this.outsideBanner.onError(err => {
                FdAd.outSideErrorCount++;
                if (FdAd.outSideErrorCount < 4) {
                    Laya.timer.once(2000, this, function () {
                        FdAd.createOutsideBanner();
                    });
                }
            });
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
    FdAd.bannerIdArr = ["adunit-64eae0369857218b", "adunit-09c06c2b0c94fe06", "adunit-1dfd3fda79c0019d"];
    FdAd.videoId = "adunit-0333bcd027bfb093";
    FdAd.gridId = "adunit-60af7fa10d8a8e6d";
    FdAd.bannerAds = [];
    FdAd.bannerIndex = 0;
    FdAd.bannerTimesArr = [];
    FdAd.bannerShowCount = [];
    FdAd.bannerErrorArr = [];
    FdAd.outSideErrorCount = 0;
    FdAd.outsideBannerId = 'adunit-1dfd3fda79c0019d';
    FdAd.isExistVideoAd = false;

    class GameUI extends Laya.Scene {
        constructor() {
            super();
            this.touchStartX = 0;
            this.touchPreX = 0;
            this.touching = false;
            this.canShowTips = true;
        }
        onOpened() {
            GameUI.Share = this;
            this.gradeNum.text = PlayerDataMgr.getPlayerData().grade.toString();
            this.curGrade.text = PlayerDataMgr.getPlayerData().grade.toString();
            this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchBtnDownCB);
            this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchBtnMoveCB);
            this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchBtnUpCB);
            this.touchBtn.on(Laya.Event.MOUSE_OUT, this, this.touchBtnUpCB);
            Laya.timer.frameLoop(1, this, this.updateCB);
            FdAd.showBannerAd();
        }
        onClosed() {
            Laya.timer.clearAll(this);
            FdAd.hideBannerAd();
        }
        touchBtnDownCB(event) {
            if (!GameLogic.Share.isStartGame) {
                GameLogic.Share.isStartGame = true;
                this.guideAni.visible = false;
                GameLogic.Share._playerCrl._ani.speed = 1.5;
                GameLogic.Share._playerCrl.SpeedFX.active = true;
            }
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame)
                return;
            this.touching = true;
            this.touchStartX = event.stageX;
            this.touchPreX = event.stageX;
        }
        touchBtnMoveCB(event) {
            if (!this.touching || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame)
                return;
            let sx = event.stageX;
            let dtx = this.touchPreX - sx;
            let dtStart = this.touchStartX - sx;
            GameLogic.Share._playerCrl.moveX(dtx / 35);
            this.touchPreX = sx;
        }
        touchBtnUpCB(event) {
            if (!this.touching || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame)
                return;
            this.touching = false;
        }
        updateCB() {
            this.gBar.value = GameLogic.Share._player.transform.position.z / GameLogic.Share.totalDistance;
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
        }
        fixJewelIcon(jewel) {
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = jewel.transform.position.clone();
            hPos.y += 1;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            let j = new Laya.Image('startUI/zy_zs_1.png');
            j.anchorX = 0.5;
            j.anchorY = 0.5;
            j.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            this.addChild(j);
            Utility.tMove2D(j, 60, 80, 1000, () => {
                PlayerDataMgr.changeCoin(1);
                j.removeSelf();
            });
        }
        fixAddScore() {
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = GameLogic.Share._player.transform.position.clone();
            hPos.y += 1;
            hPos.z += 2;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            let j = new Laya.Image('gameUI/yxz_jy_1.png');
            j.anchorX = 0.5;
            j.anchorY = 0.5;
            j.scale(2, 2);
            j.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            this.addChild(j);
            Utility.tMove2D(j, j.x, j.y - 50, 500, () => {
                j.removeSelf();
            });
        }
        showTips(index) {
            if (!this.canShowTips)
                return;
            this.canShowTips = false;
            Laya.timer.once(2000, this, () => { this.canShowTips = true; });
            let str = '';
            switch (index) {
                case 1:
                    str = 'Die' + Utility.GetRandom(1, 3) + '.png';
                    break;
                case 2:
                    str = 'Short' + Utility.GetRandom(1, 3) + '.png';
                    break;
                case 3:
                    str = 'Longer' + Utility.GetRandom(1, 3) + '.png';
                    break;
                case 4:
                    str = 'Jewel' + Utility.GetRandom(1, 3) + '.png';
                    break;
            }
            let tips = new Laya.Image('gameUI/' + str);
            tips.anchorX = 0.5;
            tips.anchorY = 0.5;
            tips.pos(375, 400);
            this.addChild(tips);
            Utility.scaleTo2D(tips, 1.3, 500, () => {
                Utility.scaleTo2D(tips, 1, 500, () => {
                    Utility.alphaTo2D(tips, 0, 1000, () => {
                        tips.removeSelf();
                    });
                });
            });
        }
    }

    class Box extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.myId = 0;
            this.randX = 0;
            this.havaRandX = false;
            this.isDie = false;
        }
        onEnable() {
            this.myOwner = this.owner;
            this.randX = (Math.random() * 0.3) - 0.15;
            this.myOwner.meshRenderer.castShadow = true;
        }
        onDisable() {
        }
        onUpdate() {
            if (!GameLogic.Share.isStartGame || GameLogic.Share.isGameOver || this.isDie)
                return;
            if (this.myOwner.transform.position.z >= GameLogic.Share.totalDistance) {
                GameUI.Share.fixJewelIcon(this.myOwner);
                WxApi.DoVibrate(false);
                this.isDie = true;
                this.myOwner.transform.translate(new Laya.Vector3(0, 0, 1000));
                GameLogic.Share._score++;
                GameLogic.Share.setScorePlane();
                return;
            }
            let havePre = this.myId >= 10;
            let preBox = null;
            if (havePre)
                preBox = GameLogic.Share._boxNode.getChildAt(this.myId - 10);
            if (Math.abs(this.myOwner.transform.position.z - GameLogic.Share._pole.transform.position.z) <= 0.6) {
                if ((this.myOwner.transform.position.x + 0.5 <= GameLogic.Share._poleCrl.max.transform.position.x &&
                    this.myOwner.transform.position.x + 0.5 >= GameLogic.Share._poleCrl.min.transform.position.x) ||
                    (this.myOwner.transform.position.x - 0.5 <= GameLogic.Share._poleCrl.max.transform.position.x &&
                        this.myOwner.transform.position.x - 0.5 >= GameLogic.Share._poleCrl.min.transform.position.x)) {
                    let newPos = new Laya.Vector3(0, 0, GameLogic.Share._playerCrl.speed);
                    this.myOwner.transform.translate(newPos, false);
                }
            }
            else if (havePre && preBox && Math.abs(this.myOwner.transform.position.z - preBox.transform.position.z) <= 0.9) {
                let p = this.myOwner.transform.position.clone();
                if (!this.havaRandX) {
                    this.randX = p.x + this.randX;
                    this.havaRandX = true;
                }
                else {
                    var v = p.clone();
                    v.x = this.randX;
                    Laya.Vector3.lerp(p, v, 0.2, p);
                    this.myOwner.transform.position = p;
                }
                let newPos = new Laya.Vector3(0, 0, GameLogic.Share._playerCrl.speed);
                this.myOwner.transform.translate(newPos, false);
            }
        }
    }

    class Jewel extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
        }
        onEnable() {
            this.myOwner = this.owner;
            this.myOwner.meshRenderer.castShadow = true;
        }
        onDisable() {
        }
        onUpdate() {
            if (!GameLogic.Share.isStartGame || GameLogic.Share.isGameOver)
                return;
            let mbb = Utility.getBoundBox(this.myOwner);
            let obb = GameLogic.Share._poleCrl.getMyBound();
            if (Laya.CollisionUtils.intersectsBoxAndBox(mbb, obb)) {
                WxApi.DoVibrate(false);
                GameUI.Share.showTips(4);
                SoundMgr.instance.playSoundEffect('Jewel.mp3');
                GameLogic.Share._coinCount++;
                GameUI.Share.fixJewelIcon(this.myOwner);
                this.myOwner.destroy();
            }
        }
    }

    class Player extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this._ani = null;
            this.isDied = false;
            this.speed = 0.2;
            this.roadEdge = 11;
            this.trail1 = null;
            this.trail2 = null;
            this.trail3 = null;
            this.trail4 = null;
            this.trail5 = null;
            this.trail6 = null;
            this.LandFX = null;
            this.SpeedFX = null;
        }
        onEnable() {
            this.myOwner = this.owner;
            this._ani = this.owner.getComponent(Laya.Animator);
            this.myOwner.transform.rotate(new Laya.Vector3(0, -90, 0), true, false);
            let pos = this.getMyPos();
            pos.x -= 1;
            this.myOwner.transform.position = pos;
            this.trail1 = this.myOwner.getChildByName('Trail1');
            this.trail2 = this.myOwner.getChildByName('Trail2');
            this.trail3 = this.myOwner.getChildByName('Trail3');
            this.trail4 = this.myOwner.getChildByName('Trail4');
            this.trail5 = this.myOwner.getChildByName('Trail5');
            this.trail6 = this.myOwner.getChildByName('Trail6');
            this.LandFX = this.myOwner.getChildByName('LandFX');
            this.SpeedFX = this.myOwner.getChildByName('SpeedFX');
            for (let i = 1; i <= 6; i++) {
                this['trail' + i].active = i - 1 == PlayerDataMgr.getPlayerData().msId;
            }
            this.LandFX.active = false;
            this.SpeedFX.active = false;
            this.playIdle();
            this.changeSkin(PlayerDataMgr.getPlayerData().skinId);
            this.myOwner.getChildAt(0).skinnedMeshRenderer.castShadow = true;
        }
        onDisable() {
        }
        refreshTrail() {
            for (let i = 1; i <= 6; i++) {
                this['trail' + i].active = i - 1 == PlayerDataMgr.getPlayerData().msId;
            }
        }
        getMyPos() {
            return this.myOwner.transform.position.clone();
        }
        playIdle() {
            this.SpeedFX.active = false;
            this._ani.speed = 1;
            if (this._ani.getControllerLayer().getCurrentPlayState().animatorState.name == 'idle')
                return;
            SoundMgr.instance.stopSound('Run.mp3');
            this._ani.play('idle');
        }
        playRun(reset) {
            this.SpeedFX.active = true;
            this._ani.speed = 1.5;
            if (this._ani.getControllerLayer().getCurrentPlayState().animatorState.name == 'run')
                return;
            SoundMgr.instance.playSoundEffect('Run.mp3', 0);
            if (reset) {
                let pos = this.getMyPos();
                pos.x = 0;
                this.myOwner.transform.position = pos;
                this.myOwner.transform.rotate(new Laya.Vector3(0, 90, 0), true, false);
            }
            this._ani.play('run');
        }
        playHang() {
            this._ani.speed = 1;
            if (this._ani.getControllerLayer().getCurrentPlayState().animatorState.name == 'hang')
                return;
            SoundMgr.instance.stopSound('Run.mp3');
            this._ani.play('hang');
        }
        playFall() {
            this.SpeedFX.active = false;
            this._ani.speed = 1;
            if (this._ani.getControllerLayer().getCurrentPlayState().animatorState.name == 'fall')
                return;
            SoundMgr.instance.stopSound('Run.mp3');
            this._ani.play('fall');
        }
        playDie() {
            this.SpeedFX.active = false;
            this._ani.speed = 1;
            if (this._ani.getControllerLayer().getCurrentPlayState().animatorState.name == 'die')
                return;
            SoundMgr.instance.stopSound('Run.mp3');
            this._ani.play('die');
        }
        playDance() {
            this.SpeedFX.active = false;
            this._ani.speed = 1;
            if (this._ani.getControllerLayer().getCurrentPlayState().animatorState.name == 'dance')
                return;
            SoundMgr.instance.stopSound('Run.mp3');
            this._ani.play('dance');
        }
        activeLandFX() {
            this.LandFX.active = true;
            this.LandFX.particleSystem.play();
            Laya.timer.once(1000, this, () => {
                this.LandFX.active = false;
            });
        }
        moveX(dtX) {
            if (GameLogic.Share.isGameOver || this.isDied) {
                return;
            }
            if (this.myOwner.transform.position.x + dtX > this.roadEdge) {
                this.myOwner.transform.position = new Laya.Vector3(this.roadEdge, this.myOwner.transform.position.clone().y, this.myOwner.transform.position.clone().z);
                return;
            }
            else if (this.myOwner.transform.position.x + dtX < -this.roadEdge) {
                this.myOwner.transform.position = new Laya.Vector3(-this.roadEdge, this.myOwner.transform.position.clone().y, this.myOwner.transform.position.clone().z);
                return;
            }
            let newPos = new Laya.Vector3(dtX, 0, 0);
            this.myOwner.transform.translate(newPos, false);
            GameLogic.Share._camera.transform.translate(newPos, false);
        }
        checkMyCollision() {
            for (let i = 0; i < GameLogic.Share._collisionArr.length; i++) {
                let c = GameLogic.Share._collisionArr[i];
                if (c == this.myOwner)
                    continue;
                let mybb = Utility.getBoundBox(this.myOwner);
                let obb = Utility.getBoundBox(c);
                if (Laya.CollisionUtils.intersectsBoxAndBox(mybb, obb)) {
                    if (c.name.search('FallArea') != -1) {
                        GameLogic.Share.loseCB(true);
                        return;
                    }
                    else if (c.name.search('SlideArea') != -1 && this._ani.getControllerLayer().getCurrentPlayState().animatorState.name != 'hang') {
                        Utility.TmoveToY(this.myOwner, 200, new Laya.Vector3(0, this.myOwner.transform.localPositionY - 0.5, 0), null);
                        Utility.TmoveToYWorld(GameLogic.Share._camera, 200, new Laya.Vector3(0, GameLogic.Share._camera.transform.position.y - 0.5, 0), null);
                        this.playHang();
                        SoundMgr.instance.playSoundEffect('Bar.mp3');
                    }
                    else if (c.name.search('ExitArea') != -1) {
                        GameLogic.Share._barArr[0].getChildByName('SparkFX1').active = false;
                        GameLogic.Share._barArr[0].getChildByName('SparkFX2').active = false;
                        GameLogic.Share.moveToDes();
                        this._ani.speed = 0;
                        c.removeSelf();
                        GameLogic.Share._collisionArr.splice(GameLogic.Share._collisionArr.indexOf(c), 1);
                        return;
                    }
                }
            }
        }
        onUpdate() {
            if (!GameLogic.Share.isStartGame || GameLogic.Share.isGameOver || GameLogic.Share.isPause)
                return;
            if (this.myOwner.transform.position.z >= GameLogic.Share.totalDistance) {
                GameLogic.Share.winCB();
                return;
            }
            if (this._ani.getControllerLayer().getCurrentPlayState().animatorState.name == 'hang' && !GameLogic.Share.isFlying) {
                if (GameLogic.Share._poleCrl.max.transform.position.x < GameLogic.Share._barArr[0].transform.position.x + 2.5 ||
                    GameLogic.Share._poleCrl.min.transform.position.x > GameLogic.Share._barArr[0].transform.position.x - 2.5) {
                    GameLogic.Share._barArr[0].getChildByName('SparkFX1').active = false;
                    GameLogic.Share._barArr[0].getChildByName('SparkFX2').active = false;
                    GameLogic.Share.loseCB(true);
                    return;
                }
                GameLogic.Share._barArr[0].getChildByName('SparkFX1').active = true;
                GameLogic.Share._barArr[0].getChildByName('SparkFX2').active = true;
                let p1 = GameLogic.Share._barArr[0].getChildByName('SparkFX1').transform.position.clone();
                p1.z = this.myOwner.transform.position.z + 1.5;
                let p2 = GameLogic.Share._barArr[0].getChildByName('SparkFX2').transform.position.clone();
                p2.z = this.myOwner.transform.position.z + 1.5;
                GameLogic.Share._barArr[0].getChildByName('SparkFX1').transform.position = p1;
                GameLogic.Share._barArr[0].getChildByName('SparkFX2').transform.position = p2;
            }
            if (!GameLogic.Share.isFlying) {
                let newPos = new Laya.Vector3(0, 0, this.speed);
                this.myOwner.transform.translate(newPos, false);
                GameLogic.Share._camera.transform.translate(newPos, false);
            }
            else {
                let p = new Laya.Vector3(0, 0, 0);
                Laya.Vector3.add(this.myOwner.transform.position.clone(), GameLogic.Share.camStartPos, p);
                GameLogic.Share._camera.transform.position = p;
            }
            this.checkMyCollision();
            for (let i = 0; i < GameLogic.Share._collisionArr.length; i++) {
                let c = GameLogic.Share._collisionArr[i];
                if (c.name.search('Wall') != -1 || c.name.search('Saw') != -1) {
                    let mybb = Utility.getBoundBox(this.myOwner);
                    let obb = Utility.getBoundBox(c);
                    if (Laya.CollisionUtils.intersectsBoxAndBox(mybb, obb)) {
                        GameLogic.Share.loseCB(false);
                        return;
                    }
                }
            }
        }
        changeSkin(id) {
            let mats = new Laya.BlinnPhongMaterial();
            mats.shininess = 1;
            mats.albedoIntensity = 1;
            Laya.Texture2D.load('res/skinRes/Hero_0' + (id + 1) + '.png', Laya.Handler.create(this, (tex) => {
                mats.albedoTexture = tex;
                for (let i = 0; i < 1; i++) {
                    let mesh3d = this.owner.getChildAt(i);
                    mesh3d.skinnedMeshRenderer.material = mats;
                }
            }));
        }
    }

    class Pole extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.coll = null;
            this.min = null;
            this.max = null;
            this.canColl = true;
        }
        onEnable() {
            this.myOwner = this.owner;
            this.myOwner.transform.localScale = new Laya.Vector3(5, 1.5, 1.5);
            this.max = this.myOwner.getChildByName('min');
            this.min = this.myOwner.getChildByName('max');
            this.myOwner.meshRenderer.sharedMaterial.shininess = 1;
            this.myOwner.meshRenderer.sharedMaterial.albedoIntensity = 0.8;
            this.myOwner.meshRenderer.castShadow = true;
        }
        getMyBound() {
            return new Laya.BoundBox(this.min.transform.position.clone(), this.max.transform.position.clone());
        }
        onDisable() {
        }
        scalePole(v) {
            WxApi.DoVibrate(false);
            if (v > 0) {
                SoundMgr.instance.playSoundEffect('Longer.mp3');
                GameUI.Share.showTips(3);
            }
            else if (v < 0) {
                SoundMgr.instance.playSoundEffect('Shorter.mp3');
                GameUI.Share.showTips(2);
            }
            this.myOwner.transform.localScale = new Laya.Vector3(this.myOwner.transform.localScaleX + v, 1.5, 1.5);
        }
        movePole(v) {
            let p = this.myOwner.transform.localPosition.clone();
            p.x += v;
            this.myOwner.transform.localPosition = p;
        }
        checkCollision() {
            if (!this.canColl)
                return;
            for (let i = 0; i < GameLogic.Share._collisionArr.length; i++) {
                let c = GameLogic.Share._collisionArr[i];
                if (c === this.myOwner || !this.canColl)
                    continue;
                let mybb = this.getMyBound();
                let obb = Utility.getBoundBox(c);
                if (Laya.CollisionUtils.intersectsBoxAndBox(mybb, obb)) {
                    if (c.name.search('Wall') != -1 || c.name.search('Saw') != -1) {
                        let l = 0;
                        let isLeft = true;
                        if (c.transform.position.x > this.myOwner.transform.position.x) {
                            l = this.max.transform.position.x - c.getChildByName('max').transform.position.x;
                        }
                        else if (c.transform.position.x < this.myOwner.transform.position.x) {
                            l = c.getChildByName('min').transform.position.x - this.min.transform.position.x;
                            isLeft = false;
                        }
                        this.scalePole(-l);
                        this.movePole(isLeft ? -l / 2 : l / 2);
                        Laya.timer.once(300, this, () => {
                            let p = this.myOwner.transform.localPosition.clone();
                            p.x = 0;
                            Utility.TmoveToX(this.myOwner, 100, p, () => { this.canColl = true; });
                        });
                        let newP = Utility.getSprite3DResByUrl('Pole_01.lh', GameLogic.Share._levelNode);
                        let myp = this.myOwner.transform.position.clone();
                        newP.transform.localScale = new Laya.Vector3(l, 1, 1);
                        myp.x = isLeft ? this.max.transform.position.x + l / 2 : this.min.transform.position.x - l / 2;
                        myp.z -= 0.2;
                        newP.transform.position = myp;
                        let des = myp.clone();
                        des.y -= 0.8;
                        Utility.TmoveTo(newP, 1000, des, null);
                    }
                }
            }
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame)
                return;
            this.checkCollision();
        }
    }

    class PropPole extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
        }
        onEnable() {
            this.myOwner = this.owner;
            this.myOwner.transform.localScale = new Laya.Vector3(1, 1.5, 1.5);
            this.myOwner.meshRenderer.castShadow = true;
        }
        onDisable() {
        }
        onUpdate() {
            if (!GameLogic.Share.isStartGame || GameLogic.Share.isGameOver)
                return;
            let mbb = Utility.getBoundBox(this.myOwner.getChildAt(0));
            let obb = GameLogic.Share._poleCrl.getMyBound();
            if (Laya.CollisionUtils.intersectsBoxAndBox(mbb, obb)) {
                GameLogic.Share._poleCrl.scalePole(1);
                GameUI.Share.fixAddScore();
                this.myOwner.destroy();
            }
        }
    }

    class GameLogic {
        constructor() {
            this.camStartPos = new Laya.Vector3(0, 0, 0);
            this.camStartRotation = null;
            this.lightStartForward = null;
            this.planePos = null;
            this._levelNode = null;
            this._roadNode = null;
            this._buildingNode = null;
            this._player = null;
            this._playerCrl = null;
            this._pole = null;
            this._poleCrl = null;
            this._collisionArr = [];
            this._desArr = [];
            this._barArr = [];
            this._boxNode = null;
            this._finish = null;
            this._scorePlane = null;
            this._coinCount = 0;
            this._score = 0;
            this.totalDistance = 0;
            this.isDes = false;
            this.startCamField = 80;
            this.isFlying = false;
            this.isStartGame = false;
            this.isGameOver = false;
            this.isWin = false;
            this.isPause = false;
            this.maxPlaneCount = 2;
            this.mtdTween = null;
            this.mat = null;
            this.cav = null;
            this.cxt = null;
            this.texture2D = null;
            this.destroyBoxArr = [];
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
                        title: '长棍冲冲冲',
                        imageUrl: ''
                    };
                });
            }
            PlayerDataMgr.getPlayerData();
            if (Laya.Browser.onWeiXin) {
                WxApi.sceneId = WxApi.GetLaunchPassVar().scene;
                console.log('sceneId:', WxApi.sceneId);
            }
            SoundMgr.instance.initLoading(() => {
                Laya.Scene.open('MyScenes/LoadingUI.scene');
            });
            Laya.timer.frameLoop(1, this, this.activeRoad);
        }
        initScene() {
            Laya.Scene3D.load(WxApi.UnityPath + 'SampleScene.ls', Laya.Handler.create(this, this.onLoadScene));
        }
        onLoadScene(scene) {
            Laya.Scene.open('MyScenes/StartUI.scene');
            WxApi.aldEvent('进入首页');
            this._scene = Laya.stage.addChild(scene);
            Laya.stage.setChildIndex(this._scene, 0);
            this._camera = this._scene.getChildByName('Main Camera');
            this._light = this._scene.getChildByName('Directional Light');
            this._light.shadowMode = Laya.ShadowMode.SoftLow;
            this._light.shadowDistance = 40;
            this._light.shadowResolution = 1024;
            this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            this.camStartPos = this._camera.transform.position.clone();
            this.camStartRotation = this._camera.transform.rotation.clone();
            this._camera.fieldOfView = this.startCamField;
            this._levelNode = new Laya.Sprite3D();
            this._scene.addChild(this._levelNode);
            this.createLevel();
            this.setFog();
            Laya.timer.frameLoop(1, this, this.fixCameraField);
            Laya.timer.frameLoop(1, this, this.destroyBox);
        }
        fixCameraField() {
            if (this._pole && this.isStartGame && !this.isGameOver) {
                if (this._camera.fieldOfView < this.startCamField + this._pole.transform.localScaleX + 5) {
                    this._camera.fieldOfView += 0.1;
                }
                else if (this._camera.fieldOfView > this.startCamField + this._pole.transform.localScaleX + 5) {
                    this._camera.fieldOfView -= 0.1;
                }
            }
            else if (this.isGameOver) {
                if (this._camera.fieldOfView < this.startCamField) {
                    this._camera.fieldOfView += 0.5;
                }
                else if (this._camera.fieldOfView > this.startCamField) {
                    this._camera.fieldOfView -= 0.5;
                }
                if (Math.abs(this._camera.fieldOfView - this.startCamField) < 2)
                    this._camera.fieldOfView = this.startCamField;
            }
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
            this._playerCrl.playRun(true);
            this._playerCrl._ani.speed = 0;
            this._playerCrl.SpeedFX.active = false;
            this.createPole();
        }
        createLevel() {
            if (PlayerDataMgr.getPlayerData().grade == 1) {
                this.maxPlaneCount = 2;
            }
            else if (PlayerDataMgr.getPlayerData().grade < 4) {
                this.maxPlaneCount = PlayerDataMgr.getPlayerData().grade + 1;
            }
            else {
                this.maxPlaneCount = 4;
            }
            this._roadNode = this._levelNode.addChild(new Laya.Sprite3D());
            this._buildingNode = this._levelNode.addChild(new Laya.Sprite3D());
            this._player = Utility.getSprite3DResByUrl('Hero_01.lh', this._levelNode);
            this._playerCrl = this._player.addComponent(Player);
            this._collisionArr.push(this._player);
            for (let i = 0; i < this.maxPlaneCount; i++) {
                let rId = Utility.GetRandom(1, 3);
                if (i == 0) {
                    rId = 1;
                }
                let name = 'Road_0' + rId + '.lh';
                if (i == this.maxPlaneCount - 1)
                    name = 'Road_Finish.lh';
                let road = Utility.getSprite3DResByUrl(name, this._roadNode);
                road.meshRenderer.receiveShadow = true;
                road.transform.position = new Laya.Vector3(0, i * -30, 20 + i * 100);
                for (let j = 0; j < road.numChildren; j++) {
                    let rc = road.getChildAt(j);
                    if (rc.name.search('FallArea') != -1) {
                        this._collisionArr.push(rc);
                    }
                }
                if (i > 0) {
                    this._desArr.push(road.getChildByName('Des'));
                }
                if (i == this.maxPlaneCount - 1) {
                    this._boxNode = road.getChildByName('BoxNode');
                    this._finish = road.getChildByName('Finish');
                    this._scorePlane = road.getChildByName('ScorePlane');
                    this.initPlane();
                    this.setScorePlane();
                    this.totalDistance = this._finish.transform.position.z;
                    this.createBox();
                }
                if (i < this.maxPlaneCount - 1) {
                    let bar = Utility.getSprite3DResByUrl('Bar_01.lh', road);
                    bar.getChildByName('SparkFX1').active = false;
                    bar.getChildByName('SparkFX2').active = false;
                    let rPos = road.transform.position.clone();
                    rPos.y -= 0.4;
                    rPos.z += 32.5;
                    bar.transform.position = rPos;
                    this._collisionArr.push(bar.getChildAt(0));
                    this._collisionArr.push(bar.getChildAt(1));
                    this._collisionArr.push(bar.getChildAt(2));
                    this._collisionArr.push(bar.getChildAt(3));
                    this._barArr.push(bar);
                    let max = 10;
                    if (i == 0 || PlayerDataMgr.getPlayerData().grade < 4)
                        max = 5;
                    this.createProp(rId, road, max);
                }
            }
            for (let i = 0; i < 8; i++) {
                let building = Utility.getSprite3DResByUrl('Building_01.lh', this._buildingNode);
                building.transform.position = new Laya.Vector3(((i % 2 == 0) ? 150 : -150) + Utility.GetRandom(-50, 50), -250, i * 300 + Utility.GetRandom(-50, 50));
            }
        }
        createProp(rId, road, max = 10) {
            let rootNode = road.addChild(new Laya.Sprite3D());
            let dataArr = [].concat(PlayerDataMgr['roadArr' + rId]);
            let index = Utility.GetRandom(0, max - 1);
            let data = dataArr[index];
            for (let i = 0; i < data.length; i++) {
                let name = data[i].name;
                let pos = new Laya.Vector3(Number(data[i].position.x), Number(data[i].position.y), Number(data[i].position.z));
                let scale = new Laya.Vector3(Number(data[i].scale.x), Number(data[i].scale.y), Number(data[i].scale.z));
                if (name.search('PropPole') != -1) {
                    this.createPropPole(rootNode, pos.clone());
                }
                else if (name.search('Saw') != -1) {
                    this.createSaw(rootNode, pos.clone());
                }
                else if (name.search('Jewel') != -1) {
                    this.createJewel(rootNode, pos.clone());
                }
                else if (name.search('Wall') != -1) {
                    let id = 1;
                    if (name.search('1') != -1)
                        id = 1;
                    else if (name.search('2') != -1)
                        id = 2;
                    else if (name.search('3') != -1)
                        id = 3;
                    this.createWall(id, rootNode, pos.clone(), scale.clone());
                }
            }
        }
        createPole() {
            this._pole = Utility.getSprite3DResByUrl('Pole_01.lh', this._player);
            let pos = this._player.transform.position.clone();
            pos.y += 1.11;
            pos.z += 0.64;
            this._pole.transform.position = pos;
            this._poleCrl = this._pole.addComponent(Pole);
        }
        createBox() {
            for (let i = 0; i < 100; i++) {
                let box = Utility.getSprite3DResByUrl('Box_01.lh', this._boxNode);
                box.transform.localPosition = new Laya.Vector3(-7.5 + (1.5 * Math.floor(i % 10)), 0, 2 * Math.floor(i / 10));
                let crl = box.addComponent(Box);
                crl.myId = i;
            }
        }
        createPropPole(root, pos) {
            let pole = Utility.getSprite3DResByUrl('PropPole.lh', root);
            pos.y = 1.11;
            pole.transform.localPosition = pos;
            pole.addComponent(PropPole);
        }
        createSaw(root, pos) {
            let saw = Utility.getSprite3DResByUrl('Saw_01.lh', root);
            saw.transform.localPosition = pos;
            this._collisionArr.push(saw);
        }
        createJewel(root, pos) {
            let jewel = Utility.getSprite3DResByUrl('Jewel_01.lh', root);
            jewel.transform.localPosition = pos;
            jewel.addComponent(Jewel);
        }
        createWall(id, root, pos, scale) {
            let wall = Utility.getSprite3DResByUrl('Wall_0' + id + '.lh', root);
            wall.transform.localPosition = pos;
            wall.transform.localScale = scale;
            this._collisionArr.push(wall);
        }
        moveToDes() {
            this.isFlying = true;
            let des = this._desArr[0];
            this.mtdTween = Utility.TmoveToYZ(this._player, 3000, des.transform.position.clone(), () => {
                if (this.isGameOver)
                    return;
                SoundMgr.instance.playSoundEffect('Ground.mp3');
                this._playerCrl.activeLandFX();
                this.isFlying = false;
                this._playerCrl._ani.speed = 1;
                this._playerCrl.playRun();
                this._barArr.splice(0, 1);
            });
            this._desArr[0].destroy();
            this._desArr.splice(0, 1);
        }
        initPlane() {
            if (this.mat != null) {
                this._scorePlane.meshRenderer.sharedMaterial = this.mat;
                this.cxt.clearRect(0, 0, 256, 256);
                this.cxt.fillText('0', 130, 200, 200);
                this.texture2D.loadImageSource(this.cav);
                this.mat.albedoTexture = this.texture2D;
                return;
            }
            this.mat = new Laya.UnlitMaterial();
            this._scorePlane.meshRenderer.sharedMaterial = this.mat;
            this.cav = Laya.Browser.createElement("canvas");
            this.cxt = this.cav.getContext("2d");
            this.cav.width = 256;
            this.cav.height = 256;
            this.cxt.fillStyle = 'rgb(' + '255' + ',' + '0' + ',0)';
            this.cxt.font = "bold 200px Arial";
            this.cxt.textAlign = "center";
            this.cxt.textBaseline = "center";
            this.cxt.fillText(this._score.toString(), 130, 200, 200);
            this.mat.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT;
            this.texture2D = new Laya.Texture2D(256, 256);
            this._scorePlane.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE;
        }
        setScorePlane() {
            if (this._scorePlane) {
                this.cxt.clearRect(0, 0, 256, 256);
                this.cxt.fillText(this._score.toString(), 130, 200, 200);
                this.texture2D.loadImageSource(this.cav);
                this.mat.albedoTexture = this.texture2D;
            }
        }
        destroyBox() {
        }
        winCB() {
            this.isGameOver = true;
            this.isWin = true;
            this.isStartGame = false;
            this._pole.destroy();
            this._playerCrl.playDance();
            Laya.timer.once(2000, this, () => {
                this.showFinishUI();
            });
            let angle = this._camera.transform.localRotationEuler.clone();
            angle.x += 20;
            Utility.RotateTo(this._camera, 2000, angle, null);
            let camp = this._camera.transform.position.clone();
            camp.y -= 6;
            Utility.TmoveTo(this._camera, 2000, camp, null);
            let pAngle = this._player.transform.localRotationEuler.clone();
            pAngle.y += 180;
            Utility.RotateTo(this._player, 500, pAngle, null);
        }
        loseCB(isFall) {
            WxApi.DoVibrate(false);
            GameUI.Share.showTips(1);
            this.isGameOver = true;
            this.isWin = false;
            this.isStartGame = false;
            this._playerCrl._ani.speed = 1;
            if (!isFall)
                this._playerCrl.playDie();
            else {
                this._playerCrl.playFall();
                let p = this._player.transform.position.clone();
                p.y -= 50;
                Utility.TmoveTo(this._player, 5000, p, null);
            }
            Laya.timer.once(2000, this, () => {
                this.showFinishUI();
            });
        }
        showFinishUI() {
            Laya.Scene.open('MyScenes/FinishUI.scene', true);
        }
        activeRoad() {
            if (!this._roadNode)
                return;
            for (let i = 0; i < this._roadNode.numChildren; i++) {
                let r = this._roadNode.getChildAt(i);
                if (r.transform.position.z < this._player.transform.position.z - 100 || r.transform.position.z > this._player.transform.position.z + 100) {
                    r.active = false;
                }
                else {
                    r.active = true;
                }
            }
        }
        restartGame() {
            this.isStartGame = false;
            this.isGameOver = false;
            this.isWin = false;
            this.totalDistance = 0;
            this._score = 0;
            this._coinCount = 0;
            this.isPause = false;
            this._collisionArr = [];
            this._desArr = [];
            this._barArr = [];
            this.destroyBoxArr = [];
            this._camera.fieldOfView = this.startCamField;
            this.isFlying = false;
            this.isDes = false;
            this._levelNode.destroyChildren();
            this._camera.transform.position = this.camStartPos;
            this._camera.transform.rotation = this.camStartRotation;
            this.createLevel();
        }
    }

    class Box1 extends Laya.Scene {
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
            this.btnPress.on(Laya.Event.CLICK, this, this.onPress);
            Laya.timer.frameLoop(1, this, this.reFreshUI);
            FdAd.hideBannerAd();
        }
        onClosed() {
            FdAd.hideBannerAd();
            Laya.timer.clearAll(this);
            this.closeCB && this.closeCB();
        }
        onPress() {
            this.progressValue += FdMgr.wuchuProgressStepAdd;
            Laya.Tween.to(this.btnPress, { scaleX: 1.2, scaleY: 1.2 }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnPress, { scaleX: 1, scaleY: 1 }, 100, null);
            }));
            if (this.progressValue >= FdMgr.wuchuProgressValue) {
                FdAd.showBannerAd();
                FdMgr.randTouchProgress();
                Laya.timer.once(2000, this, () => {
                    this.wuchuCount--;
                    if (this.wuchuCount > 0) {
                        FdAd.hideBannerAd();
                    }
                    else {
                        this.close();
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
            FdAd.hideGridAD();
            this.btnPress.on(Laya.Event.CLICK, this, this.onPress);
            Laya.timer.frameLoop(1, this, this.reFreshUI);
            this.tweenScale();
            FdAd.showBannerAd();
        }
        onClosed() {
            FdAd.hideBannerAd();
            FdAd.hideGridAD();
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
                FdAd.showGridAD();
                FdMgr.randTouchProgress();
                Laya.timer.once(2000, this, () => {
                    this.wuchuCount--;
                    if (this.wuchuCount > 0) {
                        FdAd.hideGridAD();
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

    class FinishUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened(param) {
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
            this.bounesNum.value = GameLogic.Share.isWin ? (GameLogic.Share._coinCount + GameLogic.Share._score).toString() : GameLogic.Share._coinCount.toString();
            this.winTitle.visible = GameLogic.Share.isWin;
            this.loseTitle.visible = !GameLogic.Share.isWin;
            this.trippleBtn.on(Laya.Event.CLICK, this, this.trippleBtnCB);
            this.skipBtn.on(Laya.Event.CLICK, this, this.skipBtnCB);
            this.normalBtn.on(Laya.Event.CLICK, this, this.normalBtnCB);
            this.restartBtn.on(Laya.Event.CLICK, this, this.restartBtnCB);
            this.back();
        }
        onClosed() {
        }
        trippleBtnCB() {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            let cb = () => {
                PlayerDataMgr.getPlayerData().coin += parseInt(this.bounesNum.value) * 3;
                PlayerDataMgr.getPlayerData().grade++;
                this.back();
            };
            FdAd.showVideoAd(cb);
        }
        skipBtnCB() {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            let cb = () => {
                PlayerDataMgr.getPlayerData().grade++;
                this.back();
            };
            FdAd.showVideoAd(cb);
        }
        normalBtnCB() {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            PlayerDataMgr.getPlayerData().grade++;
            this.back();
        }
        restartBtnCB() {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            this.back();
        }
        back() {
            FdMgr.loadGame(() => {
                Laya.Scene.closeAll();
                if (GameLogic.Share.isWin) {
                    PlayerDataMgr.getPlayerData().grade++;
                }
                PlayerDataMgr.setPlayerData();
                GameLogic.Share.restartGame();
                Laya.Scene.open('MyScenes/StartUI.scene', true);
            });
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

    class LoadingUI extends Laya.Scene {
        constructor() {
            super();
            this.loadResCompleted = false;
            this.FdIsCompleted = false;
            this.count = 0;
        }
        onOpened() {
            FdMgr.init(() => {
                FdMgr.loadGame(() => {
                    this.FdIsCompleted = true;
                });
            });
            this.loadJsonData();
            Laya.timer.frameLoop(1, this, () => {
                if (this.loadResCompleted && this.FdIsCompleted) {
                    Laya.timer.clearAll(this);
                    this.goToStart();
                }
            });
        }
        onClosed() {
        }
        loadJsonData() {
            for (let i = 1; i <= 10; i++) {
                Utility.loadJson('res/config/Road1/' + i + '.json', (data) => {
                    PlayerDataMgr.roadArr1.push(data);
                    this.loadJsonComplete();
                });
            }
            for (let i = 1; i <= 10; i++) {
                Utility.loadJson('res/config/Road2/' + i + '.json', (data) => {
                    PlayerDataMgr.roadArr2.push(data);
                    this.loadJsonComplete();
                });
            }
            for (let i = 1; i <= 10; i++) {
                Utility.loadJson('res/config/Road3/' + i + '.json', (data) => {
                    PlayerDataMgr.roadArr3.push(data);
                    this.loadJsonComplete();
                });
            }
        }
        loadJsonComplete() {
            this.count++;
            if (this.count >= 30) {
                console.log(PlayerDataMgr.roadArr1);
                console.log(PlayerDataMgr.roadArr2);
                console.log(PlayerDataMgr.roadArr3);
                if (Laya.Browser.onWeiXin)
                    this.loadSubpackage();
                else
                    this.loadRes();
            }
        }
        loadSubpackage() {
            const loadTask = Laya.Browser.window.wx.loadSubpackage({
                name: 'skin',
                success: (res) => {
                    const loadTask1 = Laya.Browser.window.wx.loadSubpackage({
                        name: 'unity',
                        success: (res) => {
                            this.loadRes();
                        },
                        fail: (res) => {
                        }
                    });
                    loadTask1.onProgressUpdate(res => {
                        console.log('下载进度', res.progress);
                        console.log('已经下载的数据长度', res.totalBytesWritten);
                        console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
                    });
                },
                fail: (res) => {
                    this.loadSubpackage();
                }
            });
        }
        loadRes() {
            var resUrl = [
                WxApi.UnityPath + 'Bar_01.lh',
                WxApi.UnityPath + 'Box_01.lh',
                WxApi.UnityPath + 'Building_01.lh',
                WxApi.UnityPath + 'Hero_01.lh',
                WxApi.UnityPath + 'Jewel_01.lh',
                WxApi.UnityPath + 'Pole_01.lh',
                WxApi.UnityPath + 'Road_01.lh',
                WxApi.UnityPath + 'Road_02.lh',
                WxApi.UnityPath + 'Road_03.lh',
                WxApi.UnityPath + 'Road_Finish.lh',
                WxApi.UnityPath + 'Saw_01.lh',
                WxApi.UnityPath + 'Wall_01.lh',
                WxApi.UnityPath + 'Wall_02.lh',
                WxApi.UnityPath + 'Wall_03.lh',
                WxApi.UnityPath + 'Cyl_01.lh',
                WxApi.UnityPath + 'PropPole.lh'
            ];
            Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
        }
        onComplete() {
            this.loadResCompleted = true;
        }
        goToStart() {
            GameLogic.Share.initScene();
        }
        onProgress(value) {
            this.bar.value = value;
        }
    }

    class SkinUI extends Laya.Scene {
        constructor() {
            super();
            this.curPage = 0;
            this.chooseId = 0;
            this.scene3D = null;
            this.light = null;
            this.camera = null;
            this.player = null;
            this.skinScene = null;
        }
        onOpened() {
            Laya.timer.frameLoop(1, this, this.updateCB);
            this.skinBtn.on(Laya.Event.CLICK, this, this.skinBtnCB);
            this.motionBtn.on(Laya.Event.CLICK, this, this.motionBtnCB);
            this.useBtn.on(Laya.Event.CLICK, this, this.useBtnCB);
            this.adBtn.on(Laya.Event.CLICK, this, this.adBtnCB);
            this.backBtn.on(Laya.Event.CLICK, this, this.backBtnCB);
            this.init3DScene();
            this.skinBtnCB();
        }
        onClosed() {
            Laya.timer.clearAll(this);
            this.scene3D.destroy();
            GameLogic.Share._camera.active = true;
        }
        init3DScene() {
            this.scene3D = Laya.stage.addChild(new Laya.Scene3D());
            Laya.stage.setChildIndex(this.scene3D, 0);
            this.light = this.scene3D.addChild(new Laya.DirectionLight());
            this.light.color = new Laya.Vector3(1, 0.956, 0.839);
            this.camera = this.scene3D.addChild(new Laya.Camera(0, 0.1, 1000));
            this.camera.transform.translate(new Laya.Vector3(0, 0, 0));
            this.camera.transform.rotate(new Laya.Vector3(-20, 0, 0), true, false);
            this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
            this.camera.fieldOfView = 90;
            this.skinScene = Utility.getSprite3DResByUrl('Cyl_01.lh', this.scene3D);
            this.skinScene.transform.position = new Laya.Vector3(0, -2, -15);
            this.player = Utility.getSprite3DResByUrl('Hero_01.lh', this.scene3D);
            this.player.transform.position = new Laya.Vector3(0, -2, -15);
            this.player.transform.localScale = new Laya.Vector3(2.5, 2.5, 2.5);
            this.player.getComponent(Laya.Animator).play('dance');
            this.player.getChildByName('LandFX').active = false;
            this.player.getChildByName('Trail1').active = false;
            this.player.getChildByName('Trail2').active = false;
            this.player.getChildByName('Trail3').active = false;
            this.player.getChildByName('Trail4').active = false;
            this.player.getChildByName('Trail5').active = false;
            this.player.getChildByName('Trail6').active = false;
            this.player.getChildByName('SpeedFX').active = false;
        }
        changeSkin(id) {
            let mats = new Laya.UnlitMaterial();
            Laya.Texture2D.load('res/skinRes/Hero_0' + (id + 1) + '.png', Laya.Handler.create(this, (tex) => {
                mats.albedoTexture = tex;
            }));
            for (let i = 0; i < 1; i++) {
                let mesh3d = this.player.getChildAt(i);
                mesh3d.skinnedMeshRenderer.material = mats;
            }
        }
        trailMode() {
            this.player.getComponent(Laya.Animator).play('run');
            Utility.RotateTo(this.player, 100, new Laya.Vector3(0, 90, 0), () => { });
            this.activeTrail(this.chooseId);
            Laya.timer.frameLoop(1, this, this.playerMove);
        }
        activeTrail(index) {
            this.player.getChildByName('Trail1').active = false;
            this.player.getChildByName('Trail2').active = false;
            this.player.getChildByName('Trail3').active = false;
            this.player.getChildByName('Trail4').active = false;
            this.player.getChildByName('Trail5').active = false;
            this.player.getChildByName('Trail6').active = false;
            if (index >= 0)
                this.player.getChildByName('Trail' + (index + 1)).active = true;
        }
        playerMove() {
            this.player.transform.translate(new Laya.Vector3(0.3, 0, 0), false);
            this.skinScene.transform.translate(new Laya.Vector3(0.3, 0, 0), false);
            this.camera.transform.translate(new Laya.Vector3(0.3, 0, 0), false);
        }
        skinMode() {
            this.player.getComponent(Laya.Animator).play('dance');
            Utility.RotateTo(this.player, 100, new Laya.Vector3(0, 0, 0), () => { });
        }
        fixCameraField() {
            let staticDT = 1624 - 1334;
            let curDT = Laya.stage.displayHeight - 1334 < 0 ? 0 : Laya.stage.displayHeight - 1334;
            let per = curDT / staticDT * 10;
            this.camera.fieldOfView += per;
        }
        updateItem() {
            for (let i = 0; i < this.itemNode.numChildren; i++) {
                if (this.curPage == 0 && i == this.itemNode.numChildren - 1) {
                    this.itemNode.getChildAt(i).visible = false;
                    continue;
                }
                else {
                    this.itemNode.getChildAt(i).visible = true;
                }
                let item = this.itemNode.getChildAt(i);
                let icon = item.getChildByName('icon');
                let choose = item.getChildByName('choose');
                let tips = item.getChildByName('tips');
                if (this.curPage == 0) {
                    item.skin = PlayerDataMgr.getPlayerData().skinArr[i] == 1 ? 'skinUI/pf_yy_1.png' : 'skinUI/pf_wyy_1.png';
                    icon.skin = 'skinUI/pf_js_' + (i + 1) + '.png';
                    choose.visible = i == this.chooseId;
                    tips.visible = PlayerDataMgr.getPlayerData().skinArr[i] == 0 || PlayerDataMgr.getPlayerData().skinId == i;
                    tips.skin = i == PlayerDataMgr.getPlayerData().skinId ? 'skinUI/tw_syz_1.png' : 'skinUI/tw_syy_1.png';
                }
                else {
                    item.skin = 'skinUI/tw_mr_' + (i + 1) + '.png';
                    icon.skin = '';
                    choose.visible = i == this.chooseId;
                    tips.visible = PlayerDataMgr.getPlayerData().msArr[i] == 0 || PlayerDataMgr.getPlayerData().msId == i;
                    tips.skin = i == PlayerDataMgr.getPlayerData().msId ? 'skinUI/tw_syz_1.png' : 'skinUI/tw_syy_1.png';
                }
                item.off(Laya.Event.CLICK, this, this.itemCB);
                item.on(Laya.Event.CLICK, this, this.itemCB, [i]);
            }
        }
        itemCB(index) {
            this.chooseId = index;
            this.costNum.visible = false;
            if (this.curPage == 0) {
                this.changeSkin(this.chooseId);
                if (PlayerDataMgr.getPlayerData().skinArr[index] == 1) {
                    if (PlayerDataMgr.getPlayerData().skinId == index) {
                        this.useBtn.skin = 'skinUI/tw_btn_4.png';
                    }
                    else {
                        this.useBtn.skin = 'skinUI/tw_btn_2.png';
                    }
                }
                else {
                    this.useBtn.skin = 'skinUI/tw_btn_3.png';
                    this.costNum.visible = true;
                    this.costNum.value = '3000';
                }
            }
            else {
                this.activeTrail(index);
                if (PlayerDataMgr.getPlayerData().msArr[index] == 1) {
                    if (PlayerDataMgr.getPlayerData().msId == index) {
                        this.useBtn.skin = 'skinUI/tw_btn_4.png';
                    }
                    else {
                        this.useBtn.skin = 'skinUI/tw_btn_2.png';
                    }
                }
                else {
                    this.useBtn.skin = 'skinUI/tw_btn_3.png';
                    this.costNum.visible = true;
                    this.costNum.value = '2000';
                }
            }
            this.updateItem();
        }
        skinBtnCB() {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            this.curPage = 0;
            this.chooseId = PlayerDataMgr.getPlayerData().skinId;
            this.changeSkin(this.chooseId);
            this.costNum.visible = false;
            this.useBtn.skin = 'skinUI/tw_btn_4.png';
            this.skinBtn.skin = 'skinUI/tw_yq_4.png';
            this.motionBtn.skin = 'skinUI/tw_yq_2.png';
            this.updateItem();
            this.activeTrail(-1);
            Laya.timer.clearAll(this.playerMove);
            this.skinMode();
        }
        motionBtnCB() {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            this.curPage = 1;
            this.chooseId = PlayerDataMgr.getPlayerData().msId;
            this.costNum.visible = false;
            this.useBtn.skin = 'skinUI/tw_btn_4.png';
            this.skinBtn.skin = 'skinUI/tw_yq_2.png';
            this.motionBtn.skin = 'skinUI/tw_yq_4.png';
            this.updateItem();
            this.trailMode();
        }
        useBtnCB() {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            if (this.useBtn.skin == 'skinUI/tw_btn_2.png') {
                if (this.curPage == 0) {
                    PlayerDataMgr.getPlayerData().skinId = this.chooseId;
                }
                else {
                    PlayerDataMgr.getPlayerData().msId = this.chooseId;
                }
            }
            else if (this.useBtn.skin == 'skinUI/tw_btn_3.png') {
                if (this.curPage == 0) {
                    if (PlayerDataMgr.getPlayerData().coin >= 3000) {
                        PlayerDataMgr.getPlayerData().skinArr[this.chooseId] = 1;
                        PlayerDataMgr.getPlayerData().skinId = this.chooseId;
                        PlayerDataMgr.getPlayerData().coin -= 3000;
                        this.costNum.visible = false;
                        this.useBtn.skin = 'skinUI/tw_btn_4.png';
                        SoundMgr.instance.playSoundEffect('Buy.mp3');
                    }
                    else {
                        WxApi.OpenAlert('钻石不足！');
                    }
                }
                else {
                    if (PlayerDataMgr.getPlayerData().coin >= 2000) {
                        PlayerDataMgr.getPlayerData().msArr[this.chooseId] = 1;
                        PlayerDataMgr.getPlayerData().msId = this.chooseId;
                        PlayerDataMgr.getPlayerData().coin -= 2000;
                        this.costNum.visible = false;
                        this.useBtn.skin = 'skinUI/tw_btn_4.png';
                        SoundMgr.instance.playSoundEffect('Buy.mp3');
                    }
                    else {
                        WxApi.OpenAlert('钻石不足！');
                    }
                }
            }
            PlayerDataMgr.setPlayerData();
            GameLogic.Share._playerCrl.changeSkin(PlayerDataMgr.getPlayerData().skinId);
            GameLogic.Share._playerCrl.refreshTrail();
            this.updateItem();
        }
        adBtnCB() {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            let cb = () => {
                PlayerDataMgr.getPlayerData().coin += 1000;
                PlayerDataMgr.setPlayerData();
                WxApi.OpenAlert('获得1000钻石！');
            };
            FdAd.showVideoAd(cb);
        }
        backBtnCB() {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            Laya.Scene.open('MyScenes/StartUI.scene');
        }
        updateCB() {
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
        }
    }

    class StartUI extends Laya.Scene {
        constructor() {
            super();
            this.hadStart = false;
        }
        onAwake() {
            SoundMgr.instance.playMusic('Bgm.mp3');
        }
        onOpened() {
            WxApi.isStartUI = true;
            this.gradeNum.text = PlayerDataMgr.getPlayerData().grade.toString();
            this.startBtn.on(Laya.Event.CLICK, this, this.startBtnCB);
            this.skinBtn.on(Laya.Event.CLICK, this, this.skinBtnCB);
            Laya.timer.frameLoop(1, this, this.updateCB);
            FdAd.showBannerAd();
            FdMgr.inHomePage();
        }
        onClosed() {
            WxApi.isStartUI = false;
            Laya.timer.clearAll(this);
            FdAd.hideBannerAd();
        }
        startBtnCB() {
            if (this.hadStart)
                return;
            this.hadStart = true;
            FdMgr.startGame(() => {
                FdAd.hideBannerAd();
                GameLogic.Share.gameStart();
            });
        }
        skinBtnCB() {
            FdAd.hideBannerAd();
            SoundMgr.instance.playSoundEffect('Click.mp3');
            GameLogic.Share._camera.active = false;
            Laya.Scene.open('MyScenes/SkinUI.scene');
        }
        updateCB() {
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("FanDong/Box1.ts", Box1);
            reg("FanDong/Box2.ts", Box2);
            reg("View/FinishUI.ts", FinishUI);
            reg("Libs/FixNodeY.ts", FixNodeY);
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
//# sourceMappingURL=bundle.js.map
