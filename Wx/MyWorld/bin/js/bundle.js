(function () {
    'use strict';

    class PlayerData {
        constructor() {
            this.grade = 1;
            this.coin = 0;
            this.skinId = 0;
            this.skinArr = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
                    return 400;
                case 2:
                    return 400;
                case 3:
                    return 400;
                case 4:
                    return 400;
                case 5:
                    return 400;
                case 6:
                    return 400;
                case 7:
                    return 400;
                case 8:
                    return 400;
                case 9:
                    return 400;
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

    class CameraCrl extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
            console.log(this.myOwner.transform.rotationEuler);
        }
        onDisable() {
        }
        selectSkirt() {
            GameLogic.Share.isSelectingSkin = true;
            let myPos = this.myOwner.transform.position.clone();
            myPos.y = 3.5;
            myPos.z = -12;
            this.myOwner.transform.position = myPos;
        }
        resetCamera() {
            GameLogic.Share.isSelectingSkin = false;
            this.myOwner.transform.position = GameLogic.Share.camStartPos;
            this.myOwner.transform.rotation = GameLogic.Share.camStartRotation;
        }
        winCB() {
            let pos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            myPos.x = pos.x;
            myPos.y = pos.y + 5;
            myPos.z = pos.z - 8;
            this.myOwner.transform.rotationEuler = new Laya.Vector3(-30, 180, 0);
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos);
            this.myOwner.transform.position = myPos;
            this.myOwner.fieldOfView = 60;
        }
        onUpdate() {
            if (GameLogic.Share.isWin) {
                this.winCB();
            }
            if (GameLogic.Share.isPause || GameLogic.Share.isSelectingSkin) {
                return;
            }
            let pos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            myPos.x = pos.x;
            myPos.y = pos.y + 20;
            myPos.z = pos.z - 10;
            let scaleNum = GameLogic.Share._playerCrl.scaleNum;
            let dir = new Laya.Vector3();
            this.myOwner.transform.getForward(dir);
            Laya.Vector3.scale(dir, -1, dir);
            Laya.Vector3.scale(dir, 0 + scaleNum * 4, dir);
            Laya.Vector3.add(myPos, dir, myPos);
            this.myOwner.transform.rotationEuler = new Laya.Vector3(-50, 180, 0);
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos);
            this.myOwner.transform.position = myPos;
            this.myOwner.fieldOfView = 80 + scaleNum * 3;
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
            this.wuchuProgressValue = this.getRangeNumer(0.3, 0.8);
        }
        static getRangeNumer(min, max) {
            return (Math.random() * (max - min)) + min;
        }
        static bannerShowHide() {
            FdAd.hideBannerAd();
            Laya.timer.once(600, this, () => {
                FdAd.showBannerAd();
                Laya.timer.once(800, this, () => {
                    this.bannerShowHide();
                });
            });
        }
        static videoBannerShowHide() {
            FdMgr.visibleVideoBanner(false, false);
            Laya.timer.once(600, this, () => {
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
                cb && cb();
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
        static get showRemen() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.showRemen;
        }
        static get startRemen() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.jsonConfig.startRemen;
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
        static get firstBox() {
            if (!Laya.Browser.onWeiXin)
                return false;
            let show = false;
            if (this.jsonConfig.firstBox_interval_level <= 0)
                show = this.gameCount >= this.jsonConfig.firstBox_level;
            else
                show = this.gameCount >= this.jsonConfig.firstBox_level &&
                    Math.floor((this.gameCount - this.jsonConfig.firstBox_level) % (this.jsonConfig.firstBox_interval_level + 1)) == 0;
            return this.canTrapAll && this.jsonConfig.firstBox && show;
        }
        static get firstBox_switch() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.firstBox_switch;
        }
        static get bannerBox() {
            if (!Laya.Browser.onWeiXin)
                return false;
            let show = false;
            if (this.jsonConfig.bannerBox_interval_level <= 0)
                show = this.gameCount >= this.jsonConfig.bannerBox_level;
            else
                show = this.gameCount >= this.jsonConfig.bannerBox_level &&
                    Math.floor((this.gameCount - this.jsonConfig.bannerBox_level) % (this.jsonConfig.bannerBox_interval_level + 1)) == 0;
            return this.canTrapAll && this.jsonConfig.bannerBox && show;
        }
        static get bannerBox_switch() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.bannerBox_switch;
        }
        static get endBanner() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.endBanner;
        }
        static get endBanner_switch() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.endBanner_switch;
        }
        static get homeViedo() {
            if (!Laya.Browser.onWeiXin)
                return false;
            return this.canTrapAll && this.jsonConfig.homeViedo;
        }
    }
    FdMgr.version = '1.0.7';
    FdMgr.appid = '';
    FdMgr.secret = '';
    FdMgr.wuchuProgressValue = 0;
    FdMgr.wuchuProgressStepAdd = 0.2;
    FdMgr.wuchuProgressFrameSub = 0.01;
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

    class GameUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened() {
            GameUI.Share = this;
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Laya.timer.frameLoop(1, this, this.myUpdate);
            this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchStart);
            this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchMove);
            this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
            this.curGrade.value = PlayerDataMgr.getPlayerData().grade.toString();
            this.nextGrade.value = (PlayerDataMgr.getPlayerData().grade + 1).toString();
            this.touchBtn.visible = false;
            this.showWeaponTips();
            GameLogic.Share.gameStart();
            SoundMgr.instance.playMusic('Bgm.mp3');
            this.createDir();
            FdMgr.inGame();
        }
        onClosed() {
            this.DirNode.destroyChildren();
            Laya.timer.clearAll(this);
        }
        touchStart(evt) {
            if (GameLogic.Share.isGameOver)
                return;
            if (!GameLogic.Share.isStartGame) {
                this.guideAni.visible = false;
                GameLogic.Share.isStartGame = true;
                GameLogic.Share.enemyStart();
                GameLogic.Share.enemyHunt();
                if (PlayerDataMgr.getPlayerData().grade == 1) {
                    this.NewerGuide.visible = true;
                    Laya.timer.once(3000, this, () => { this.NewerGuide.visible = false; });
                }
            }
            let x = evt.stageX;
            let y = evt.stageY;
            this.joyStickBg.visible = true;
            this.joyStickBg.pos(x, y);
            this.joyStick.pos(105, 105);
            this.touchStartPos = new Laya.Vector3(x, y);
        }
        touchMove(evt) {
            if (GameLogic.Share.isGameOver) {
                this.joyStickBg.visible = false;
                return;
            }
            let x = evt.stageX;
            let y = evt.stageY;
            let pos = new Laya.Vector3(x, y);
            let dir = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(new Laya.Vector3(this.touchStartPos.x, 0, this.touchStartPos.y), new Laya.Vector3(pos.x, 0, pos.y), dir);
            Laya.Vector3.normalize(dir, dir);
            GameLogic.Share._playerCrl.myDir = dir.clone();
            dir = new Laya.Vector3();
            if (Laya.Vector3.distance(pos, this.touchStartPos) <= 105) {
                this.joyStick.pos(x - this.touchStartPos.x + 105, y - this.touchStartPos.y + 105);
            }
            else {
                Laya.Vector3.subtract(pos, this.touchStartPos, dir);
                Laya.Vector3.normalize(dir, dir);
                Laya.Vector3.scale(dir, 105, dir);
                Laya.Vector3.add(new Laya.Vector3(105, 105), dir, dir);
                this.joyStick.pos(dir.x, dir.y);
            }
        }
        touchEnd(evt) {
            this.joyStickBg.visible = false;
            GameLogic.Share._playerCrl.tempDir = GameLogic.Share._playerCrl.myDir.clone();
            GameLogic.Share._playerCrl.myDir = new Laya.Vector3();
            if (GameLogic.Share.isGameOver)
                return;
            GameLogic.Share._playerCrl.attack();
        }
        showTips(v) {
            Laya.timer.clear(this, this.delayShowTips);
            if (v == 2) {
                SoundMgr.instance.playSoundEffect('kill_double.mp3');
                this.tips.skin = 'gameUI/yxz_glwz_1.png';
            }
            else if (v == 3) {
                SoundMgr.instance.playSoundEffect('kill_multi.mp3');
                this.tips.skin = 'gameUI/yxz_glwz_2.png';
            }
            else if (v == 4) {
                SoundMgr.instance.playSoundEffect('kill_ultra.mp3');
                this.tips.skin = 'gameUI/yxz_glwz_3.png';
            }
            else {
                let id = Utility.GetRandom(4, 6);
                this.tips.skin = 'gameUI/yxz_glwz_' + id + '.png';
                SoundMgr.instance.playSoundEffect(id != 6 ? 'Good.mp3' : 'Perfect.mp3');
            }
            this.tips.visible = true;
            this.tips.scale(1, 1);
            Laya.timer.once(1000, this, this.delayShowTips);
        }
        delayShowTips() {
            Utility.scaleTo2D(this.tips, 0, 100, () => { this.tips.visible = false; });
        }
        showWeaponTips() {
            this.weaponTips.visible = true;
            let g = PlayerDataMgr.getPlayerData().grade;
            g = Math.floor((g - 1) % 5) + 1;
            this.weaponName.skin = 'gameUI/yxz_wzts_' + g + '.png';
            this.weaponPic.skin = 'skinUI/Weapon/Weapon_' + g + '.png';
            Laya.timer.once(2000, this, () => {
                this.weaponTips.visible = false;
                this.touchBtn.visible = true;
            });
            this.weaponName.pos(this.weaponName.x, this.weaponName.y - 500);
            Utility.tMove2D(this.weaponName, this.weaponName.x, this.weaponName.y + 500, 500, null);
        }
        getCoins(nodePos) {
            SoundMgr.instance.playSoundEffect('GetCoin.mp3');
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = nodePos;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            let pos = new Laya.Vector2(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            Utility.coinCollectAnim('startUI/ksy_jb.png', pos, new Laya.Vector2(35, 95), this, 5, () => {
                PlayerDataMgr.getPlayerData().coin += 5;
                PlayerDataMgr.setPlayerData();
                SoundMgr.instance.playSoundEffect('AddCoin.mp3');
            });
        }
        createDir() {
            for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
                let dir = new Laya.Image(GameLogic.Share._sceneId == 1 ? 'gameUI/Down1.png' : 'gameUI/Down2.png');
                dir.anchorX = 0.5;
                dir.anchorY = 1;
                this.DirNode.addChild(dir);
                dir.pos(-100, -100);
                dir.visible = false;
            }
        }
        fixEnemyDir() {
            for (let i = 0; i < this.DirNode.numChildren; i++) {
                let dir = this.DirNode.getChildAt(i);
                dir.visible = false;
                dir.pos(-100, -100);
            }
            for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
                let enemy = GameLogic.Share._enemyNode.getChildAt(i);
                let ePos = enemy.transform.position.clone();
                let op = new Laya.Vector4(0, 0, 0);
                let hPos = ePos;
                GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
                let pos = new Laya.Vector2(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
                let dir = this.DirNode.getChildAt(i);
                if ((pos.x > 0 && pos.y > 0 && pos.x < this.displayWidth && pos.y < this.displayHeight)) {
                    dir.visible = false;
                    continue;
                }
                if (pos.x > this.width - 20) {
                    pos.x = this.width - 20;
                    dir.rotation = -90;
                }
                if (pos.x < 20) {
                    pos.x = 20;
                    dir.rotation = 90;
                }
                if (pos.y > this.height - 20) {
                    pos.y = this.height - 20;
                    dir.rotation = 0;
                }
                if (pos.y < 20) {
                    pos.y = 20;
                    dir.rotation = 180;
                }
                if (pos.x <= 20 && pos.y <= 20)
                    dir.rotation = 135;
                if (pos.x <= 20 && pos.y >= this.height - 20)
                    dir.rotation = 45;
                if (pos.x >= this.width - 20 && pos.y <= 20)
                    dir.rotation = 225;
                if (pos.x >= this.width - 20 && pos.y >= this.height - 20)
                    dir.rotation = -45;
                dir.pos(pos.x, pos.y);
                dir.visible = true;
            }
        }
        myUpdate() {
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
            this.leftNum.value = (GameLogic.Share._enemyNode.numChildren + 1).toString();
            this.pBar.value = (GameLogic.Share._enemyCount - GameLogic.Share._curEnemyCount) / GameLogic.Share._enemyCount;
            this.fixEnemyDir();
        }
    }

    class Man extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this._ani = null;
            this.weaponNode = null;
            this.atkArea = null;
            this.steve = null;
            this.smoke_1 = null;
            this.smoke_beat = null;
            this.myDir = new Laya.Vector3();
            this.tempDir = new Laya.Vector3();
            this.speed = 0.2;
            this.weaponIndex = 0;
            this.areaIndex = 0;
            this.scaleNum = 1;
            this.canMove = true;
            this.isDied = false;
            this.isPlayer = true;
            this.curAniName = '';
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.myOwner.getComponent(Laya.Animator);
            this.weaponNode = Utility.findNodeByName(this.myOwner, 'weapon_hand.R');
            this.atkArea = Utility.findNodeByName(this.myOwner, 'AtkArea');
            this.steve = Utility.findNodeByName(this.myOwner, 'Steve');
            this.smoke_1 = Utility.findNodeByName(this.myOwner, 'Smoke_1');
            this.smoke_beat = Utility.findNodeByName(this.myOwner, 'Smoke_Beat');
            this.playAni('character_bones|default_idle_' + Utility.GetRandom(1, 7));
        }
        onDestroy() {
            Laya.timer.clearAll(this);
        }
        get myPos() {
            return this.myOwner.transform.position.clone();
        }
        changeSkin(id) {
            let dir = "res/Texture/Man_" + (id + 1) + ".png";
            let ms = this.steve;
            Laya.Texture2D.load(dir, Laya.Handler.create(this, (texture) => {
                ms.skinnedMeshRenderer.material.albedoTexture = texture;
                if (!FdMgr.isVersionValid) {
                    ms.skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(0, 0, 0, 1);
                }
            }));
        }
        playAni(name, speed = 1, normalizedTime = 0) {
            if (name.search('idle') != -1 && this.curAniName == this.getAniTypeName() + 'idle')
                return;
            if (name.search('run') != -1 && this.curAniName == this.getAniTypeName() + 'run')
                return;
            this._ani.play(name, 0, normalizedTime);
            this._ani.speed = speed;
            this.curAniName = name;
        }
        playIdle() {
            this.playAni(this.getAniTypeName() + 'idle');
        }
        playRun() {
            this.playAni(this.getAniTypeName() + 'run');
        }
        playAttack() {
            this.playAni(this.getAniTypeName() + 'attack', 1.5);
        }
        playWin() {
            this.playAni(this.getAniTypeName() + 'win_1');
        }
        getAniTypeName() {
            switch (this.weaponIndex) {
                case 0:
                    return 'character_bones|hammer_';
                case 1:
                    return 'character_bones|sword_';
                case 2:
                    return 'character_bones|gunman_';
                case 3:
                    return 'character_bones|trapman_';
                case 4:
                    return 'character_bones|hunter_';
            }
        }
        activeWeapon(id) {
            for (let i = 0; i < this.weaponNode.numChildren; i++) {
                let weapon = this.weaponNode.getChildAt(i);
                weapon.active = i == id;
            }
        }
        activeAtkArea(id) {
            this.areaIndex = id;
            for (let i = 0; i < this.atkArea.numChildren; i++) {
                let area = this.atkArea.getChildAt(i);
                area.active = i == id;
            }
        }
        move() {
            if (GameLogic.Share.isGameOver || !this.canMove || this.isDied)
                return;
            if (Laya.Vector3.scalarLength(this.myDir) > 0)
                this.playRun();
            this.checkCollision();
            let speed = this.speed;
            if (this.isPlayer)
                speed += this.scaleNum * 0.02;
            let pos = this.myOwner.transform.position.clone();
            let dir = new Laya.Vector3(0, 0, 0);
            let sp = speed;
            Laya.Vector3.scale(this.myDir, sp, dir);
            Laya.Vector3.add(pos, dir, pos);
            this.myOwner.transform.position = pos;
        }
        rotateMySelf() {
            if (this.isDied || !this.canMove || Laya.Vector3.equals(this.myDir, new Laya.Vector3())) {
                return;
            }
            let angle = new Laya.Quaternion();
            let dir = new Laya.Vector3();
            Laya.Vector3.scale(this.myDir, -1, dir);
            Laya.Quaternion.rotationLookAt(dir, new Laya.Vector3(0, 1, 0), angle);
            Laya.Quaternion.invert(angle, angle);
            Laya.Quaternion.lerp(this.myOwner.transform.localRotation.clone(), angle, 0.2, angle);
            this.myOwner.transform.localRotation = angle;
            let a = this.myOwner.transform.localRotationEuler.clone();
            a.x = 0;
            this.myOwner.transform.localRotationEuler = a;
        }
        stronger() {
            this.scaleNum += 0.3;
            this.myOwner.transform.setWorldLossyScale(new Laya.Vector3(this.scaleNum, this.scaleNum, this.scaleNum));
            this.smoke_beat.transform.setWorldLossyScale(new Laya.Vector3(this.scaleNum, this.scaleNum, this.scaleNum));
        }
        hurtCB(fromPlayer = false) {
            if (this.isDied)
                return;
            SoundMgr.instance.playSoundEffect('Hurt.mp3');
            WxApi.DoVibrate();
            GameLogic.Share.createHitFX(this.myOwner);
            Laya.timer.clearAll(this);
            this.isDied = true;
            this.atkArea.active = false;
            if (!this.isPlayer) {
                if (fromPlayer) {
                    GameLogic.Share._playerCrl.stronger();
                }
                GameUI.Share.getCoins(this.myPos);
                GameLogic.Share._curEnemyCount--;
                this.myOwner.destroy();
                if (GameLogic.Share._enemyNode.numChildren <= 0) {
                    GameLogic.Share.gameOver(true);
                }
            }
            else {
                GameLogic.Share.gameOver(false);
                this.dieCB();
                this.playIdle();
            }
        }
        dieCB() {
            let r = this.myOwner.transform.localRotationEuler.clone();
            r.x -= 90;
            Utility.RotateTo(this.myOwner, 300, r, null);
        }
        checkCollision() {
            let l1 = GameLogic.Share._sceneId == 1 ? 3 : 3.5;
            let l2 = GameLogic.Share._sceneId == 1 ? 2.5 : 3;
            let arr = GameLogic.Share._sceneId == 1 ? GameLogic.Share._cubeArr1 : GameLogic.Share._cubeArr2;
            for (let i = 0; i < arr.length; i++) {
                let cube = arr[i];
                let cPos = cube.transform.position.clone();
                if (this.myPos.x <= cPos.x + l1 && this.myPos.x >= cPos.x - l1 && this.myPos.z <= cPos.z + l1 && this.myPos.z >= cPos.z - l1) {
                    if (this.myPos.x >= cPos.x + l2 && this.myDir.x < 0) {
                        this.myDir.x = 0;
                    }
                    if (this.myPos.x <= cPos.x - l2 && this.myDir.x > 0) {
                        this.myDir.x = 0;
                    }
                    if (this.myPos.z >= cPos.z + l2 && this.myDir.z < 0) {
                        this.myDir.z = 0;
                    }
                    if (this.myPos.z <= cPos.z - l2 && this.myDir.z > 0) {
                        this.myDir.z = 0;
                    }
                }
            }
        }
        checkAniComplete() {
            if (this._ani.getCurrentAnimatorPlayState().animatorState.name.search('attack') != -1) {
                if (this._ani.getCurrentAnimatorPlayState().normalizedTime >= 1) {
                    this.playIdle();
                }
            }
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isDied)
                return;
            this.move();
            this.rotateMySelf();
            this.checkAniComplete();
        }
    }

    class TNT extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isPlayer = false;
            this.scaleNum = 1;
        }
        onAwake() {
            this.myOwner = this.owner;
            Laya.timer.once(2000, this, () => {
                GameLogic.Share.createBoomFX(this.myOwner);
                this.myOwner.destroy();
            });
        }
        onDestroy() {
            Laya.timer.clearAll(this);
        }
        initData(isPlayer, scaleNum) {
            this.isPlayer = isPlayer;
            this.scaleNum = scaleNum;
        }
        onUpdate() {
            if (this.isPlayer) {
                for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
                    let enemy = GameLogic.Share._enemyNode.getChildAt(i);
                    let ePos = enemy.transform.position.clone();
                    let crl = enemy.getComponent(Enemy);
                    let myPos = this.myOwner.transform.position.clone();
                    if (Laya.Vector3.distance(myPos, ePos) <= this.scaleNum) {
                        crl.hurtCB(this.isPlayer);
                        SoundMgr.instance.playSoundEffect('Boom.mp3');
                        GameLogic.Share.createBoomFX(this.myOwner);
                        this.myOwner.destroy();
                        break;
                    }
                }
            }
            else {
                let player = GameLogic.Share._player;
                let pPos = player.transform.position.clone();
                let crl = player.getComponent(PlayerCrl);
                let myPos = this.myOwner.transform.position.clone();
                if (Laya.Vector3.distance(myPos, pPos) <= this.scaleNum) {
                    crl.hurtCB(this.isPlayer);
                    SoundMgr.instance.playSoundEffect('Boom.mp3');
                    GameLogic.Share.createBoomFX(this.myOwner);
                    this.myOwner.destroy();
                }
            }
        }
    }

    class Enemy extends Man {
        constructor() {
            super();
        }
        initData(skinId) {
            this.speed = 0.1;
            this.isPlayer = false;
            this.changeSkin(skinId);
        }
        gameStart() {
            this.playIdle();
            this.weaponIndex = Utility.GetRandom(0, 4);
            this.activeWeapon(this.weaponIndex);
        }
        hunt() {
            if (this.isDied || PlayerDataMgr.getPlayerData().grade <= 1)
                return;
            switch (this.weaponIndex) {
                case 0:
                    this.activeAtkArea(0);
                    break;
                case 1:
                    this.activeAtkArea(0);
                    break;
                case 2:
                    this.activeAtkArea(1);
                    break;
                case 3:
                    this.activeAtkArea(-1);
                    break;
                case 4:
                    this.activeAtkArea(2);
                    break;
            }
            this.smoke_1.active = true;
            this.myDir = new Laya.Vector3(Math.random() * 2 - 1, 0, Math.random() * 2 - 1);
            Laya.Vector3.normalize(this.myDir, this.myDir);
            Laya.timer.once(Math.random() * 2000 + 2000, this, () => {
                this.attack();
            });
        }
        attack() {
            if (!this.canMove || this.isDied) {
                return;
            }
            this.canMove = false;
            Laya.timer.once(500, this, () => { this.canMove = true; this.hunt(); });
            this.playAttack();
            let delay = 0;
            switch (this.weaponIndex) {
                case 0:
                    delay = 400;
                    break;
                case 1:
                    delay = 200;
                    break;
                case 2:
                    delay = 150;
                    break;
                case 3:
                    delay = 200;
                    break;
                case 4:
                    delay = 150;
                    break;
            }
            Laya.timer.once(delay, this, this.checkHitOpponet);
        }
        checkHitOpponet() {
            if (this.weaponIndex != 3) {
                if (this.weaponIndex == 0) {
                    this.smoke_beat.active = true;
                    Laya.timer.once(1000, this, () => { this.smoke_beat.active = false; });
                }
                let arr = [];
                let area = this.atkArea.getChildAt(this.areaIndex);
                for (let i = 0; i < area.numChildren; i++) {
                    let node = area.getChildAt(i);
                    let pos = node.transform.position.clone();
                    arr.push(new Laya.Vector2(pos.x, pos.z));
                }
                let player = GameLogic.Share._player;
                let ePos = player.transform.position.clone();
                let crl = player.getComponent(PlayerCrl);
                if (Utility.pointInPolygon(new Laya.Vector2(ePos.x, ePos.z), arr)) {
                    crl.hurtCB();
                }
            }
            else {
                this.createTnt();
            }
        }
        createTnt() {
            for (let i = 0; i < 3; i++) {
                let tntRes = GameLogic.Share._scene.getChildByName('TNT_1');
                let tnt = Laya.Sprite3D.instantiate(tntRes, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
                tnt.active = true;
                let pos = this.myPos;
                pos.y += 1;
                tnt.transform.position = pos;
                let crl = tnt.addComponent(TNT);
                crl.initData(false, this.scaleNum);
                tnt.transform.setWorldLossyScale(new Laya.Vector3(this.scaleNum, this.scaleNum, this.scaleNum));
                let desPos = new Laya.Vector3();
                let dir = this.myDir.clone();
                let s = this.scaleNum / 2;
                if (s < 1)
                    s = 1;
                let dis = 4 * s;
                if (i == 1) {
                    dis = 8 * s;
                    dir = Utility.RotateWithPoint(dir, new Laya.Vector3(0, 1, 0), 30);
                }
                else if (i == 2) {
                    dis = 8 * s;
                    dir = Utility.RotateWithPoint(dir, new Laya.Vector3(0, 1, 0), -30);
                }
                Laya.Vector3.scale(dir, dis, dir);
                Laya.Vector3.add(this.myPos, dir, desPos);
                Utility.TmoveTo(tnt, 100, desPos, null);
            }
        }
    }

    class PlayerCrl extends Man {
        constructor() {
            super();
        }
        initData(weaponIndex, skinId) {
            this.weaponIndex = weaponIndex;
            this.changeSkin(skinId);
            Laya.timer.frameLoop(10, this, this.myUpdate);
        }
        gameStart() {
            this.playIdle();
            this.activeWeapon(this.weaponIndex);
            switch (this.weaponIndex) {
                case 0:
                    this.activeAtkArea(0);
                    break;
                case 1:
                    this.activeAtkArea(0);
                    break;
                case 2:
                    this.activeAtkArea(1);
                    break;
                case 3:
                    this.activeAtkArea(-1);
                    break;
                case 4:
                    this.activeAtkArea(2);
                    break;
            }
            this.smoke_1.active = true;
        }
        attack() {
            if (!this.canMove || this.isDied) {
                return;
            }
            this.canMove = false;
            Laya.timer.once(500, this, () => { this.canMove = true; });
            this.playAttack();
            let delay = 0;
            switch (this.weaponIndex) {
                case 0:
                    delay = 400;
                    break;
                case 1:
                    delay = 200;
                    break;
                case 2:
                    delay = 150;
                    break;
                case 3:
                    delay = 100;
                    break;
                case 4:
                    delay = 150;
                    break;
            }
            Laya.timer.once(delay, this, this.checkHitOpponet);
        }
        checkHitOpponet() {
            switch (this.weaponIndex) {
                case 0:
                    SoundMgr.instance.playSoundEffect('Hammer.mp3');
                    break;
                case 1:
                    SoundMgr.instance.playSoundEffect('Sword.mp3');
                    break;
                case 2:
                    SoundMgr.instance.playSoundEffect('Gun.mp3');
                    break;
                case 3:
                    SoundMgr.instance.playSoundEffect('Trap.mp3');
                    break;
                case 4:
                    SoundMgr.instance.playSoundEffect('Hunter.mp3');
                    break;
            }
            if (this.weaponIndex != 3) {
                Utility.objectShake(GameLogic.Share._camera, 0.1, 0.5);
                WxApi.DoVibrate();
                if (this.weaponIndex == 0) {
                    this.smoke_beat.active = true;
                    Laya.timer.once(1000, this, () => { this.smoke_beat.active = false; });
                }
                else if (this.weaponIndex == 2 || this.weaponIndex == 4) {
                    this.weaponNode.getChildAt(this.weaponIndex).getChildAt(0).active = true;
                    Laya.timer.once(1000, this, () => {
                        this.weaponNode.getChildAt(this.weaponIndex).getChildAt(0).active = false;
                    });
                }
                let arr = [];
                let area = this.atkArea.getChildAt(this.areaIndex);
                for (let i = 0; i < area.numChildren; i++) {
                    let node = area.getChildAt(i);
                    let pos = node.transform.position.clone();
                    arr.push(new Laya.Vector2(pos.x, pos.z));
                }
                let count = 0;
                for (let i = GameLogic.Share._enemyNode.numChildren - 1; i >= 0; i--) {
                    let enemy = GameLogic.Share._enemyNode.getChildAt(i);
                    let ePos = enemy.transform.position.clone();
                    let crl = enemy.getComponent(Enemy);
                    if (Utility.pointInPolygon(new Laya.Vector2(ePos.x, ePos.z), arr)) {
                        count++;
                        crl.hurtCB(true);
                    }
                }
                if (count > 0)
                    GameUI.Share.showTips(count);
            }
            else {
                this.createTnt();
            }
        }
        createTnt() {
            for (let i = 0; i < 3; i++) {
                let tntRes = GameLogic.Share._scene.getChildByName('TNT_1');
                let tnt = Laya.Sprite3D.instantiate(tntRes, GameLogic.Share._levelNode, false, new Laya.Vector3(0, 0, 0));
                tnt.active = true;
                let pos = this.myPos;
                pos.y += 1;
                tnt.transform.position = pos;
                let crl = tnt.addComponent(TNT);
                crl.initData(true, this.scaleNum);
                tnt.transform.setWorldLossyScale(new Laya.Vector3(this.scaleNum, this.scaleNum, this.scaleNum));
                let desPos = new Laya.Vector3();
                let dir = this.tempDir.clone();
                let s = this.scaleNum / 2;
                if (s < 1)
                    s = 1;
                let dis = 4 * s;
                if (i == 1) {
                    dis = 8 * s;
                    dir = Utility.RotateWithPoint(dir, new Laya.Vector3(0, 1, 0), 30);
                }
                else if (i == 2) {
                    dis = 8 * s;
                    dir = Utility.RotateWithPoint(dir, new Laya.Vector3(0, 1, 0), -30);
                }
                Laya.Vector3.scale(dir, dis, dir);
                Laya.Vector3.add(this.myPos, dir, desPos);
                Utility.TmoveTo(tnt, 100, desPos, null);
            }
        }
        winCB() {
            this.atkArea.active = false;
            this.smoke_1.active = false;
            this.playWin();
            this.myOwner.transform.rotationEuler = new Laya.Vector3(0, 180, 0);
            this.scaleNum = 1;
            this.myOwner.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
        }
        myUpdate() {
            if (this.weaponIndex != 3) {
                let arr = [];
                let area = this.atkArea.getChildAt(this.areaIndex);
                for (let i = 0; i < area.numChildren; i++) {
                    let node = area.getChildAt(i);
                    let pos = node.transform.position.clone();
                    arr.push(new Laya.Vector2(pos.x, pos.z));
                }
                for (let i = GameLogic.Share._enemyNode.numChildren - 1; i >= 0; i--) {
                    let enemy = GameLogic.Share._enemyNode.getChildAt(i);
                    let ePos = enemy.transform.position.clone();
                    let crl = enemy.getComponent(Enemy);
                    if (Utility.pointInPolygon(new Laya.Vector2(ePos.x, ePos.z), arr)) {
                        this.attack();
                        break;
                    }
                }
            }
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
            this._enemyNode = null;
            this._player = null;
            this._playerCrl = null;
            this._cubeArr1 = [];
            this._cubeArr2 = [];
            this._sceneId = 1;
            this._enemyCount = 15;
            this._curEnemyCount = 15;
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
                        title: '世界大逃杀',
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
            let cubeNode = this._scene.getChildByName('Scene_1').getChildByName('CubeNode');
            for (let i = 0; i < cubeNode.numChildren; i++) {
                this._cubeArr1.push(cubeNode.getChildAt(i));
            }
            let cubeNode1 = this._scene.getChildByName('Scene_2').getChildByName('CubeNode');
            for (let i = 0; i < cubeNode1.numChildren; i++) {
                this._cubeArr2.push(cubeNode1.getChildAt(i));
            }
            this._levelNode = this._scene.addChild(new Laya.Sprite3D());
            this.createLevel();
        }
        gameStart() {
            GameLogic.Share.isPause = false;
            this._light.shadowDistance = 100;
            this._playerCrl.gameStart();
            this.enemyStart();
        }
        enemyStart() {
            for (let i = 0; i < this._enemyNode.numChildren; i++) {
                let enemy = this._enemyNode.getChildAt(i);
                let crl = enemy.getComponent(Enemy);
                crl.gameStart();
            }
        }
        enemyHunt() {
            for (let i = 0; i < this._enemyNode.numChildren; i++) {
                let enemy = this._enemyNode.getChildAt(i);
                let crl = enemy.getComponent(Enemy);
                crl.hunt();
            }
        }
        createLevel() {
            this._enemyNode = this._levelNode.addChild(new Laya.Sprite3D());
            this._sceneId = Math.random() > 0.5 ? 1 : 2;
            this._scene.getChildByName('Scene_1').active = false;
            this._scene.getChildByName('Scene_2').active = false;
            this._scene.getChildByName('Scene_' + this._sceneId).active = true;
            if (!FdMgr.isVersionValid) {
                let ms = this._scene.getChildByName('Scene_1').getChildAt(1);
                let ms1 = this._scene.getChildByName('Scene_2').getChildAt(1);
                Laya.Texture2D.load('res/Texture/Man_9.png', Laya.Handler.create(this, (texture) => {
                    ms.meshRenderer.sharedMaterial.albedoTexture = texture;
                    ms1.meshRenderer.sharedMaterial.albedoTexture = texture;
                }));
            }
            this.createPlayer();
            this.createEnemy();
        }
        createPlayer() {
            let res = this._scene.getChildByName('Model');
            this._player = Laya.Sprite3D.instantiate(res, this._levelNode, false, new Laya.Vector3(0, 0, 0));
            this._player.active = true;
            this._player.transform.position = new Laya.Vector3();
            this._player.transform.localRotationEuler = new Laya.Vector3(0, 180, 0);
            this._playerCrl = this._player.addComponent(PlayerCrl);
            let g = PlayerDataMgr.getPlayerData().grade;
            g = Math.floor((g - 1) % 5);
            this._playerCrl.initData(g, PlayerDataMgr.getPlayerData().skinId);
        }
        createEnemy() {
            if (PlayerDataMgr.getPlayerData().grade == 1) {
                this._enemyCount = 3;
                this._curEnemyCount = 3;
                for (let i = 0; i < 3; i++) {
                    let pos = new Laya.Vector3();
                    if (i == 0)
                        pos = new Laya.Vector3(0, 0, 7);
                    if (i == 1)
                        pos = new Laya.Vector3(7, 0, 7);
                    if (i == 2)
                        pos = new Laya.Vector3(7, 0, 0);
                    let res = this._scene.getChildByName('Model');
                    let enemy = Laya.Sprite3D.instantiate(res, this._enemyNode, false, new Laya.Vector3(0, 0, 0));
                    enemy.active = true;
                    enemy.transform.position = pos;
                    enemy.transform.localRotationEuler = new Laya.Vector3(0, 180, 0);
                    let crl = enemy.addComponent(Enemy);
                    crl.initData(Utility.GetRandom(0, 10));
                }
            }
            else {
                let enemyNode = this._scene.getChildByName('Scene_' + this._sceneId).getChildByName('EnemyNode');
                this._enemyCount = enemyNode.numChildren;
                if (PlayerDataMgr.getPlayerData().grade == 2)
                    this._enemyCount = 6;
                if (PlayerDataMgr.getPlayerData().grade == 3)
                    this._enemyCount = 10;
                this._curEnemyCount = this._enemyCount;
                for (let i = 0; i < this._enemyCount; i++) {
                    let node = enemyNode.getChildAt(i);
                    let pos = node.transform.position.clone();
                    let res = this._scene.getChildByName('Model');
                    let enemy = Laya.Sprite3D.instantiate(res, this._enemyNode, false, new Laya.Vector3(0, 0, 0));
                    enemy.active = true;
                    enemy.transform.position = pos;
                    enemy.transform.localRotationEuler = new Laya.Vector3(0, 180, 0);
                    let crl = enemy.addComponent(Enemy);
                    crl.initData(Utility.GetRandom(0, 10));
                }
            }
        }
        createHitFX(node) {
            let res = this._scene.getChildByName('FXNode').getChildByName('Blood_Hit1');
            let fx = Laya.Sprite3D.instantiate(res, this._levelNode, false, new Laya.Vector3(0, 0, 0));
            let pos = node.transform.position.clone();
            pos.y = node.transform.getWorldLossyScale().y / 2;
            fx.transform.setWorldLossyScale(new Laya.Vector3(2, 2, 2));
            fx.transform.position = pos;
            fx.active = true;
            Laya.timer.once(1000, this, () => { fx.destroy(); });
        }
        createBoomFX(node) {
            let res = this._scene.getChildByName('FXNode').getChildByName('Smoke_Bomb');
            let fx = Laya.Sprite3D.instantiate(res, this._levelNode, false, new Laya.Vector3(0, 0, 0));
            let pos = node.transform.position.clone();
            pos.y = node.transform.getWorldLossyScale().y / 2;
            let s = node.transform.getWorldLossyScale().clone();
            fx.transform.setWorldLossyScale(new Laya.Vector3(s.x + 1, s.y + 1, s.z + 1));
            fx.transform.position = pos;
            fx.active = true;
            Laya.timer.once(800, this, () => { fx.destroy(); });
        }
        createWinFX() {
            let res = this._scene.getChildByName('FXNode').getChildByName('WinFX');
            let fx = Laya.Sprite3D.instantiate(res, this._levelNode, false, new Laya.Vector3(0, 0, 0));
            let pos = this._player.transform.position.clone();
            pos.z += 2;
            fx.transform.position = pos;
            fx.active = true;
        }
        gameOver(isWin) {
            if (this.isGameOver)
                return;
            SoundMgr.instance.stopMusic();
            if (isWin) {
                this._playerCrl.winCB();
                this.createWinFX();
                Laya.timer.once(500, this, () => {
                    this.isWin = isWin;
                });
                SoundMgr.instance.playSoundEffect('Win.mp3');
            }
            else {
                this.isWin = isWin;
                SoundMgr.instance.playSoundEffect('Lose.mp3');
            }
            WxApi.DoVibrate(false);
            this.isGameOver = true;
            this.isStartGame = false;
            this.isPause = true;
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
            this.createLevel();
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
            Laya.timer.once(100, this, () => {
                this.ccb && this.ccb();
            });
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
                Laya.timer.once(1000, this, () => {
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
            Laya.timer.once(600, this, () => {
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
            let isWin = GameLogic.Share.isWin;
            this.winTitle.visible = isWin;
            this.loseTitle.visible = !isWin;
            this.bounes.visible = isWin;
            this.adBtn.visible = isWin;
            this.nextBtn.visible = isWin;
            this.restartBtn.visible = !isWin;
            Utility.addClickEvent(this.adBtn, this, this.adBtnCB);
            Utility.addClickEvent(this.nextBtn, this, this.closeCB);
            Utility.addClickEvent(this.restartBtn, this, this.closeCB);
            FdMgr.inFinish(isWin ? this.nextBtn : this.restartBtn);
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
            Utility.addClickEvent(this.closeBtn, this, () => {
                GameLogic.Share._cameraCrl.resetCamera();
                Laya.Scene.open("MyScenes/StartUI.scene");
            });
            this.initList();
        }
        onClosed() {
            GameLogic.Share._playerCrl.changeSkin(PlayerDataMgr.getPlayerData().skinId);
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
            let dk2 = item.getChildByName('dk2');
            let icon = item.getChildByName('icon');
            let using = item.getChildByName('using');
            let unlocked = item.getChildByName('unlocked');
            let buyBtn = item.getChildByName('buyBtn');
            let cost = buyBtn.getChildByName('cost');
            let adBtn = item.getChildByName('adBtn');
            dk2.visible = this.chooseId == index;
            icon.skin = 'skinUI/Man/Man_' + (index + 1) + '.png';
            using.visible = PlayerDataMgr.getPlayerData().skinId == index;
            unlocked.visible = PlayerDataMgr.getPlayerData().skinId != index && PlayerDataMgr.getPlayerData().skinArr[index] == 1;
            buyBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0;
            cost.value = PlayerDataMgr.getCostById(index).toString();
            adBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0;
            icon.off(Laya.Event.CLICK, this, this.chooseCB);
            icon.on(Laya.Event.CLICK, this, this.chooseCB, [index]);
            Utility.addClickEvent(buyBtn, this, this.buyBtnCB, [index]);
            Utility.addClickEvent(adBtn, this, this.adBtnCB, [index]);
        }
        chooseCB(id) {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            if (this.chooseId == id)
                return;
            this.chooseId = id;
            GameLogic.Share._playerCrl.changeSkin(this.chooseId);
            if (PlayerDataMgr.getPlayerData().skinArr[id] == 1) {
                PlayerDataMgr.getPlayerData().skinId = id;
                PlayerDataMgr.setPlayerData();
            }
            this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
        }
        buyBtnCB(arr) {
            let id = arr[0];
            if (PlayerDataMgr.getPlayerData().coin < PlayerDataMgr.getCostById(id)) {
                return;
            }
            this.chooseId = id;
            GameLogic.Share._playerCrl.changeSkin(this.chooseId);
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
                GameLogic.Share._playerCrl.changeSkin(this.chooseId);
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
            this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString();
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Utility.addClickEvent(this.startBtn, this, this.startBtnCB);
            Utility.addClickEvent(this.skinBtn, this, this.skinBtnCB);
            Laya.timer.frameLoop(1, this, this.myUpdate);
            SoundMgr.instance.playMusic('Bgm1.mp3');
            FdMgr.inHomePage();
            if (!FdMgr.isVersionValid) {
                this.skinBtn.visible = false;
            }
        }
        onClosed() {
        }
        startBtnCB() {
            FdMgr.startGame(() => {
                Laya.Scene.open('MyScenes/GameUI.scene');
            });
        }
        skinBtnCB() {
            FdMgr.inShop();
            GameLogic.Share._cameraCrl.selectSkirt();
            Laya.Scene.open('MyScenes/SkinUI.scene');
        }
        myUpdate() {
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
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
