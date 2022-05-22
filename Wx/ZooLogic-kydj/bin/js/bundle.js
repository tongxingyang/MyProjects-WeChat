(function () {
    'use strict';

    class PlayerData {
        constructor() {
            this.grade = 1;
            this.bodyArr = [1, 0, 0, 0, 0, 0];
            this.headArr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
            this.legArr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
            this.tailArr = [1, 1, 0, 0];
            this.wingsArr = [0, 0];
        }
    }
    class ItemData {
        constructor() {
            this.head = [
                [2, 1, 25], [4, 2, 30], [6, 3, 35], [8, 4, 40], [10, 5, 45],
                [12, 6, 50], [14, 7, 55], [16, 8, 60], [18, 9, 65], [20, 10, 70]
            ];
            this.leg = [
                [2, 1, 25], [4, 2, 30], [6, 3, 35], [8, 4, 40], [10, 5, 45],
                [12, 6, 50], [14, 7, 55], [16, 8, 60], [18, 9, 65], [20, 10, 70]
            ];
            this.tail = [[5, 2, 20], [10, 4, 30], [15, 6, 40], [20, 8, 50]];
            this.wings = [[10, 5, 50], [10, 5, 50]];
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
        static getBodyName(index) {
            let arr = ['美洲狮 身体', '大象 身体', '青蛙 身体', '长颈鹿 身体', '马 身体', '霸王龙 身体'];
            return arr[index];
        }
        static getHeadName(index) {
            let arr = ['美洲狮 头', '鹿 头', '鸭子 头', '大象 头', '青蛙 头', '长颈鹿 头', '马 头', '人类 头', '独角兽 头', '霸王龙 头'];
            return arr[index];
        }
        static getLegName(index) {
            let arr = ['美洲狮 腿', '大象 腿', '青蛙 腿', '青蛙 腿', '长颈鹿 腿', '马 腿', '人类 手', '人类 腿', '霸王龙 腿', '霸王龙 腿'];
            return arr[index];
        }
        static getTailName(index) {
            let arr = ['美洲狮 尾巴', '大象 尾巴', '长颈鹿 尾巴', '马 尾巴'];
            return arr[index];
        }
        static getWingsName(index) {
            let arr = ['蝙蝠 翅膀', '独角兽 翅膀'];
            return arr[index];
        }
        static getDataByType(type) {
            let data = [];
            if (type == 0) {
                data = this._playerData.headArr;
            }
            else if (type == 1) {
                data = this._playerData.legArr;
            }
            else if (type == 2) {
                data = this._playerData.tailArr;
            }
            else if (type == 3) {
                data = this._playerData.wingsArr;
            }
            return data;
        }
        static getItemData() {
            if (!this._itemData) {
                this._itemData = new ItemData();
            }
            return this._itemData;
        }
        static getInvalidSkins() {
            let arr = [];
            for (let i = 0; i < 4; i++) {
                let dataArr = this.getDataByType(i);
                for (let j = 0; j < dataArr.length; j++) {
                    if (dataArr[j] == 0) {
                        arr.push([i, j]);
                    }
                }
            }
            return arr;
        }
        static unlockBody() {
            for (let i = 0; i < this._playerData.bodyArr.length; i++) {
                if (this._playerData.bodyArr[i] == 0) {
                    this._playerData.bodyArr[i] = 1;
                    this.setPlayerData();
                    return;
                }
            }
        }
    }
    PlayerDataMgr._playerData = null;
    PlayerDataMgr._itemData = null;

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

    class CameraCrl extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onDisable() {
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver) {
                return;
            }
            if (GameLogic.Share._player && !GameLogic.Share._player.destroyed) {
                if (!GameLogic.Share.isMeet) {
                    let pos = this.myOwner.transform.position.clone();
                    pos.x = GameLogic.Share._player.transform.position.clone().x;
                    Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.1, pos);
                    this.myOwner.transform.position = pos;
                }
                else {
                    let pos = this.myOwner.transform.position.clone();
                    pos.x = (GameLogic.Share._player.transform.position.x + GameLogic.Share._enemy.transform.position.x) / 2;
                    Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.1, pos);
                    this.myOwner.transform.position = pos;
                    let dt = Math.abs(GameLogic.Share._player.transform.position.x - GameLogic.Share._enemy.transform.position.x);
                    if (dt > 10)
                        dt = 10;
                    this.myOwner.fieldOfView = 60 + 10 * (dt / 10);
                }
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
            this.touchStartPosX = 0;
        }
        onOpened() {
            GameUI.Share = this;
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Laya.timer.frameLoop(1, this, this.myUpdate);
            this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString();
            Utility.addClickEvent(this.giveupBtn, this, this.giveupBtnCB);
            this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchStart);
            this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchMove);
            this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
            FdMgr.inGame();
        }
        onClosed() {
            Laya.timer.clearAll(this);
        }
        giveupBtnCB() {
            GameLogic.Share.gameOver(false);
        }
        touchStart(evt) {
            GameLogic.Share.isStartGame = true;
            this.guideAni.visible = false;
            let x = evt.stageX;
            this.touchStartPosX = x;
        }
        touchMove(evt) {
            let x = evt.stageX;
            if (Math.abs(x - this.touchStartPosX) < 20) {
                return;
            }
            if (x - this.touchStartPosX > 0) {
                GameLogic.Share._playerCrl.moveDir = -1;
            }
            else {
                GameLogic.Share._playerCrl.moveDir = 1;
            }
            this.touchStartPosX = x;
        }
        touchEnd(evt) {
            GameLogic.Share._playerCrl.moveDir = 0;
        }
        fixPlayerHp() {
            if (!GameLogic.Share._player)
                return;
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = GameLogic.Share._player.transform.position.clone();
            hPos.y += 2.5;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            this.playerHp.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            this.playerHp.value = GameLogic.Share._playerCrl.hp / GameLogic.Share._playerCrl.hpMax;
            let num = this.playerHp.getChildByName('num');
            num.value = GameLogic.Share._playerCrl.hp.toString();
        }
        fixEnemyHp() {
            if (!GameLogic.Share._enemy)
                return;
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = GameLogic.Share._enemy.transform.position.clone();
            hPos.y += 2.5;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            this.enemyHp.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            this.enemyHp.value = GameLogic.Share._enemyCrl.hp / GameLogic.Share._enemyCrl.hpMax;
            let num = this.enemyHp.getChildByName('num');
            num.value = GameLogic.Share._enemyCrl.hp.toString();
        }
        createPlayerDmg(v) {
            let num = new Laya.FontClip('gameUI/yxz_sz_2.png', '0123456789+-');
            num.anchorX = 0.5;
            num.anchorY = 0.5;
            num.value = '-' + v.toString();
            this.addChild(num);
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = GameLogic.Share._player.transform.position.clone();
            hPos.y += 3.5;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            num.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            Utility.tMove2D(num, num.x, num.y - 150, 1000, () => { num.destroy(); });
        }
        createEnemyDmg(v) {
            let num = new Laya.FontClip('gameUI/yxz_sz_1.png', '0123456789+-');
            num.anchorX = 0.5;
            num.anchorY = 0.5;
            num.value = '-' + v.toString();
            this.addChild(num);
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = GameLogic.Share._enemy.transform.position.clone();
            hPos.y += 3.5;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            num.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            Utility.tMove2D(num, num.x, num.y - 150, 1000, () => { num.destroy(); });
        }
        myUpdate() {
            this.fixPlayerHp();
            this.fixEnemyHp();
        }
    }

    class PlayerCrl extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.hpMax = 10;
            this.hp = 10;
            this.powerMax = 10;
            this.power = 10;
            this.moveDir = 0;
            this.speed = 0.08;
            this.canMove = true;
            this.hadLeg = false;
            this.isPlayer = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        initData(hp, power, isPlayer = false) {
            this.isPlayer = isPlayer;
            this.hpMax = hp;
            this.hp = hp;
            this.powerMax = power;
            this.power = power;
            if (this.myOwner.getChildByName('FLegNode').numChildren > 0 || this.myOwner.getChildByName('BLegNode').numChildren > 0) {
                let pos = this.myOwner.transform.position.clone();
                pos.y += 1.8;
                this.myOwner.transform.position = pos;
                this.hadLeg = true;
            }
        }
        moveX() {
            if (GameLogic.Share.isGameOver || !this.canMove)
                return;
            let speed = this.speed;
            if (!this.hadLeg)
                speed *= 0.5;
            if (this.moveDir > 0) {
                this.myOwner.transform.translate(new Laya.Vector3(speed, 0, 0), false);
            }
            else if (this.moveDir < 0) {
                this.myOwner.transform.translate(new Laya.Vector3(-speed, 0, 0), false);
            }
        }
        hurtCB(dmg) {
            this.canMove = false;
            let pos = this.myOwner.transform.position.clone();
            pos.x += this.isPlayer ? 4 : -4;
            Utility.TmoveTo(this.myOwner, 200, pos, () => {
                this.canMove = true;
            });
            if (this.isPlayer) {
                GameUI.Share.createPlayerDmg(dmg);
            }
            else {
                GameUI.Share.createEnemyDmg(dmg);
            }
            this.hp -= dmg;
            if (this.hp <= 0) {
                this.hp = 0;
                GameLogic.Share.gameOver(!this.isPlayer);
                let myPos = this.myOwner.transform.position.clone();
                myPos.y = 1;
                myPos.z -= 1.5;
                Utility.TmoveTo(this.myOwner, 800, myPos, null);
                let myRot = this.myOwner.transform.rotationEuler.clone();
                myRot.x = this.isPlayer ? -90 : 90;
                Utility.RotateTo(this.myOwner, 800, myRot, null);
                return;
            }
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) {
                return;
            }
            this.moveX();
            if (this.myOwner.transform.position.x < -30) {
                let pos = this.myOwner.transform.position.clone();
                pos.x = -30;
                this.myOwner.transform.position = pos;
            }
            else if (this.myOwner.transform.position.x > 30) {
                let pos = this.myOwner.transform.position.clone();
                pos.x = 30;
                this.myOwner.transform.position = pos;
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
            this.isPause = false;
            this.isFinish = false;
            this.isMeet = false;
            this._levelNode = null;
            this._player = null;
            this._playerCrl = null;
            this._enemy = null;
            this._enemyCrl = null;
            this.playerHp = 10;
            this.playerPower = 10;
            this.enemyHp = 10;
            this.enemyPower = 10;
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
                        title: '狂野对决',
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
            this._light.shadowMode = Laya.ShadowMode.SoftLow;
            this._light.shadowDistance = 100;
            this._light.shadowResolution = 1024;
            this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            if (!FdMgr.isVersionValid) {
                let s1 = this._scene.getChildByName('Scene_1');
                for (let i = 0; i < s1.numChildren; i++) {
                    let s = s1.getChildAt(i);
                    let mat = s.meshRenderer.material;
                    mat.albedoColor = new Laya.Vector4(0, 1, 0, 1);
                }
                let pos = this._camera.transform.position.clone();
                pos.z = 0;
                pos.y += 30;
                this._camera.transform.position = pos;
                let rotate = this._camera.transform.localRotationEuler.clone();
                rotate.x = -90;
                this._camera.transform.localRotationEuler = rotate;
            }
            this.camStartPos = this._camera.transform.position.clone();
            this.camStartRotation = this._camera.transform.rotation.clone();
            this._camera.fieldOfView = this.startCamField;
            this._cameraCrl = this._camera.addComponent(CameraCrl);
            this._levelNode = this._scene.addChild(new Laya.Sprite3D());
        }
        gameStart(bodyNode, hp, power) {
            this._player = Laya.Sprite3D.instantiate(bodyNode, this._levelNode, false);
            this._player.transform.position = new Laya.Vector3(10, 1, 0);
            this._playerCrl = this._player.addComponent(PlayerCrl);
            this._playerCrl.initData(hp, power, true);
            this.createEnemy();
            Laya.timer.frameLoop(1, this, this.checkColl);
            Laya.Scene.open('MyScenes/GameUI.scene');
        }
        createEnemy() {
            let bodyNode = GameLogic.Share._scene.getChildByName('BodyNode');
            let bodyRes = bodyNode.getChildAt(Utility.GetRandom(0, 5));
            this._enemy = Laya.Sprite3D.instantiate(bodyRes, this._levelNode, false, new Laya.Vector3(0, 0, 0));
            this._enemy.transform.position = new Laya.Vector3(-10, 1, 0);
            this._enemyCrl = this._enemy.addComponent(PlayerCrl);
            this._enemyCrl.moveDir = 1;
            this._enemy.active = true;
            this._enemy.transform.rotate(new Laya.Vector3(0, 180, 0), true, false);
            for (let i = 0; i < 5; i++) {
                this.createEnemyItems(i);
            }
            let h1 = 10;
            let h2 = Utility.GetRandom(10, 30);
            this._enemyCrl.initData(PlayerDataMgr.getPlayerData().grade >= 3 ? h2 : h1, Utility.GetRandom(1, 10));
        }
        createEnemyItems(type) {
            let index = 0;
            let itemNode = null;
            let itemRes = null;
            let root = null;
            let itemArrName = ['HeadNode', 'LegNode', 'TailNode', 'WingsNode'];
            if (type == 0) {
                root = this._enemy.getChildByName('HeadNode');
            }
            else if (type == 1) {
                root = this._enemy.getChildByName('WingNode');
            }
            else if (type == 2) {
                root = this._enemy.getChildByName('TailNode');
            }
            else if (type == 3) {
                root = this._enemy.getChildByName('FLegNode');
            }
            else if (type == 4) {
                root = this._enemy.getChildByName('BLegNode');
            }
            itemNode = this._scene.getChildByName(Utility.getRandomItemInArr(itemArrName));
            index = Utility.GetRandom(0, itemNode.numChildren - 1);
            itemRes = itemNode.getChildAt(index);
            let item = Laya.Sprite3D.instantiate(itemRes, root, false, new Laya.Vector3(0, 0, 0));
            item.transform.localPosition = new Laya.Vector3();
            item.transform.localRotationEuler = new Laya.Vector3();
            item.active = true;
        }
        checkColl() {
            if (this.isGameOver || !this._player || !this._enemy || !this._playerCrl.canMove || !this._enemyCrl.canMove || !this.isStartGame)
                return;
            let playerX = this._player.transform.position.x;
            let enemyX = this._enemy.transform.position.x;
            if (Math.abs(playerX - enemyX) <= 4) {
                WxApi.DoVibrate();
                SoundMgr.instance.playSoundEffect('Hurt.mp3');
                let pD = Utility.GetRandom(2, 6);
                let eD = Utility.GetRandom(1, 4);
                if (PlayerDataMgr.getPlayerData().grade >= 3) {
                    pD *= 1.5;
                    eD *= 1.5;
                }
                else {
                    eD = 1;
                    pD = 3;
                }
                this._playerCrl.hurtCB(Math.floor(eD));
                this._enemyCrl.hurtCB(Math.floor(pD));
                this.createHitFX();
            }
            if (Math.abs(playerX - enemyX) <= 6) {
                this.isMeet = true;
            }
        }
        createHitFX() {
            let fx = this._scene.getChildByName('T_Hit_1');
            let pos = new Laya.Vector3();
            pos.x = (GameLogic.Share._player.transform.position.x + GameLogic.Share._enemy.transform.position.x) / 2;
            pos.y = 2.3;
            this._scene.getChildByName('T_Hit_1').transform.position = pos;
            this._scene.getChildByName('T_Hit_1').transform.setWorldLossyScale(new Laya.Vector3(10, 10, 10));
            this._scene.getChildByName('T_Hit_1').active = true;
            fx.particleSystem.play();
            Laya.timer.once(300, this, () => {
                this._scene.getChildByName('T_Hit_1').transform.position = new Laya.Vector3(0, 100000, 0);
            });
        }
        createWinFX() {
            let fx = Laya.Sprite3D.instantiate(this._scene.getChildByName('T_Confetti'), this._levelNode, false);
            let pos = new Laya.Vector3();
            pos.x = (GameLogic.Share._player.transform.position.x + GameLogic.Share._enemy.transform.position.x) / 2;
            pos.z += 2;
            fx.transform.position = pos;
            fx.transform.setWorldLossyScale(new Laya.Vector3(3, 3, 3));
            fx.active = true;
            Laya.timer.once(3000, this, () => {
                if (fx)
                    fx.destroy();
            });
        }
        gameOver(isWin) {
            Laya.timer.clearAll(this);
            WxApi.DoVibrate(false);
            if (isWin) {
                SoundMgr.instance.playSoundEffect('Win.mp3');
                this.createWinFX();
            }
            else {
                SoundMgr.instance.playSoundEffect('Lose.mp3');
            }
            this.isWin = isWin;
            this.isGameOver = true;
            this.isStartGame = false;
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
            this.isPause = false;
            this._camera.fieldOfView = this.startCamField;
            this.isFinish = false;
            this.isMeet = false;
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
            this.freeSkin = [];
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString();
            let isWin = GameLogic.Share.isWin;
            this.winTitle.visible = isWin;
            this.loseTitle.visible = !isWin;
            this.nextBtn.visible = isWin;
            this.restartBtn.visible = !isWin;
            if (isWin) {
                PlayerDataMgr.unlockBody();
            }
            Utility.addClickEvent(this.nextBtn, this, this.closeCB);
            Utility.addClickEvent(this.restartBtn, this, this.closeCB);
            let skinArr = PlayerDataMgr.getInvalidSkins();
            if (skinArr.length <= 0 || !isWin)
                this.unlockNode.visible = false;
            else {
                this.freeSkin = Utility.getRandomItemInArr(skinArr);
                let icon = this.unlockNode.getChildByName('icon');
                let name = this.unlockNode.getChildByName('name');
                let str = '';
                let index = (this.freeSkin[1] + 1) < 10 ? ('0' + (this.freeSkin[1] + 1)) : (this.freeSkin[1] + 1);
                if (this.freeSkin[0] == 0) {
                    str = 'items/Head_' + index + '.png';
                    name.text = PlayerDataMgr.getHeadName(this.freeSkin[1]);
                    PlayerDataMgr.getDataByType(0)[this.freeSkin[1]] = 1;
                }
                else if (this.freeSkin[0] == 1) {
                    str = 'items/Leg_' + index + '.png';
                    name.text = PlayerDataMgr.getLegName(this.freeSkin[1]);
                    PlayerDataMgr.getDataByType(1)[this.freeSkin[1]] = 1;
                }
                else if (this.freeSkin[0] == 2) {
                    str = 'items/Tail_' + index + '.png';
                    name.text = PlayerDataMgr.getTailName(this.freeSkin[1]);
                    PlayerDataMgr.getDataByType(2)[this.freeSkin[1]] = 1;
                }
                else if (this.freeSkin[0] == 3) {
                    str = 'items/Wings_' + index + '.png';
                    name.text = PlayerDataMgr.getWingsName(this.freeSkin[1]);
                    PlayerDataMgr.getDataByType(3)[this.freeSkin[1]] = 1;
                }
                icon.skin = str;
                PlayerDataMgr.setPlayerData();
            }
            FdMgr.inFinish(isWin ? this.nextBtn : this.restartBtn);
        }
        onClosed() {
        }
        closeCB() {
            FdMgr.closeFinish(() => {
                if (GameLogic.Share.isWin) {
                    PlayerDataMgr.getPlayerData().grade++;
                    PlayerDataMgr.setPlayerData();
                }
                GameLogic.Share.restartGame();
                Laya.Scene.open('MyScenes/StartUI.scene');
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
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            if (!Laya.Browser.onWeiXin) {
                localStorage.clear();
            }
            FdMgr.init(() => {
                if (Laya.Browser.onWeiXin) {
                    this.loadSubpackage();
                }
                else {
                    this.loadRes();
                }
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
            var resUrl = [
                WxApi.UnityPath + 'SampleScene.ls'
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

    class SelectUI extends Laya.Scene {
        constructor() {
            super();
            this.totalDna = 175;
            this.curHp = 0;
            this.curPower = 0;
            this.selectType = 0;
            this.selectIndex = 0;
            this.itemCount = 0;
            this.hadShowAd = false;
            this.canStart = false;
            this.scene3D = null;
            this.light = null;
            this.camera = null;
            this.body = null;
            this.itemSp = null;
            this.choosBodyId = 0;
            this.choosItemId = 0;
            this.itemNode = null;
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString();
            Laya.timer.frameLoop(1, this, this.myUpdate);
            Utility.addClickEvent(this.nextBtn, this, this.nextBtnCB);
            Utility.addClickEvent(this.adBtn, this, this.adBtnCB);
            this.init3DScene();
            this.initBodyList();
            this.initItemList();
            let img = this.nextBtn.getChildAt(0);
            img.visible = PlayerDataMgr.getPlayerData().grade <= 1;
        }
        onClosed() {
            Laya.timer.clearAll(this);
            this.scene3D.destroy();
        }
        updateCurData(hp, power, dna) {
            this.totalDna -= dna;
            this.curHp += hp;
            this.curPower += power;
            this.dnaNum.text = this.totalDna.toString();
            this.hpNum.text = this.curHp.toString();
            this.powerNum.text = this.curPower.toString();
            this.nextBtn.gray = false;
            this.canStart = true;
            if (this.itemCount >= 3) {
                let img = this.nextBtn.getChildAt(0);
                img.visible = PlayerDataMgr.getPlayerData().grade <= 1;
            }
            if (this.itemCount == 1 && PlayerDataMgr.getPlayerData().grade <= 1) {
                this.itemList.scrollTo(9);
                Laya.Tween.clearAll(this.finger);
                this.guide2();
            }
            else if (this.itemCount == 2 && PlayerDataMgr.getPlayerData().grade <= 1) {
                Laya.Tween.clearAll(this.finger);
                this.guide3();
            }
        }
        init3DScene() {
            this.scene3D = Laya.stage.addChild(new Laya.Scene3D());
            Laya.stage.setChildIndex(this.scene3D, 2);
            this.light = this.scene3D.addChild(new Laya.DirectionLight());
            this.light.color = new Laya.Vector3(1, 1, 1);
            this.light.transform.rotationEuler = new Laya.Vector3(0, 180, 0);
            this.camera = this.scene3D.addChild(new Laya.Camera(0, 0.1, 1000));
            this.camera.transform.translate(new Laya.Vector3(0, 0, -15));
            this.camera.transform.rotate(new Laya.Vector3(0, 180, 0), true, false);
            this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
            this.camera.orthographicVerticalSize = 20;
            this.camera.orthographic = true;
            this.createBody(0);
        }
        createBody(index) {
            if (this.body)
                this.body.destroy();
            let bodyNode = GameLogic.Share._scene.getChildByName('BodyNode');
            let bodyRes = bodyNode.getChildAt(index);
            this.body = Laya.Sprite3D.instantiate(bodyRes, this.scene3D, false, new Laya.Vector3(0, 0, 0));
            this.body.transform.position = new Laya.Vector3(0, 4, 0);
            this.body.active = true;
        }
        createItemSp(type, index) {
            if (this.itemSp)
                this.itemSp.destroy();
            let itemNode = null;
            let itemRes = null;
            if (type == 0) {
                itemNode = GameLogic.Share._scene.getChildByName('HeadNode');
            }
            else if (type == 1) {
                itemNode = GameLogic.Share._scene.getChildByName('LegNode');
            }
            else if (type == 2) {
                itemNode = GameLogic.Share._scene.getChildByName('TailNode');
            }
            else if (type == 3) {
                itemNode = GameLogic.Share._scene.getChildByName('WingsNode');
            }
            itemRes = itemNode.getChildAt(index);
            this.itemSp = Laya.Sprite3D.instantiate(itemRes, this.scene3D, false, new Laya.Vector3(0, 0, 0));
            this.itemSp.transform.position = new Laya.Vector3(1, 0, 0);
            this.itemSp.getComponent(Laya.Animator).speed = 0;
        }
        initBodyList() {
            let arr = [].concat(PlayerDataMgr.getPlayerData().bodyArr);
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i] == 0)
                    arr.splice(i, 1);
            }
            this.bodyList.vScrollBarSkin = '';
            this.bodyList.array = arr;
            this.bodyList.repeatX = 2;
            this.bodyList.repeatY = Math.floor(arr.length / 2);
            this.bodyList.renderHandler = Laya.Handler.create(this, this.onBodyListRender, null, false);
        }
        onBodyListRender(cell, index) {
            if (index >= this.bodyList.array.length) {
                return;
            }
            var item = cell.getChildByName('item');
            let selectIcon = item.getChildByName('selectIcon');
            let icon = item.getChildByName('icon');
            let name = item.getChildByName('name');
            selectIcon.skin = index == this.choosBodyId ? 'selectUI/xz_dk_xzst3.png' : 'selectUI/xz_dk_xzst2.png';
            let indexStr = index + 1 < 10 ? '0' + (index + 1).toString() : (index + 1).toString();
            icon.skin = 'items/Body_' + indexStr + '.png';
            name.text = PlayerDataMgr.getBodyName(index);
            item.off(Laya.Event.CLICK, this, this.selectBody);
            item.on(Laya.Event.CLICK, this, this.selectBody, [index]);
        }
        selectBody(index) {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            if (index == this.choosBodyId) {
                return;
            }
            this.choosBodyId = index;
            this.createBody(index);
            this.initBodyList();
        }
        nextBtnCB() {
            if (this.bodyList.visible) {
                this.bodyList.visible = false;
                this.itemList.visible = true;
                this.nextBtn.skin = 'selectUI/xz_btn_kszd.png';
                this.nextBtn.gray = true;
                let img = this.nextBtn.getChildAt(0);
                img.visible = false;
                if (PlayerDataMgr.getPlayerData().grade <= 1) {
                    this.guide1();
                }
            }
            if (this.canStart) {
                GameLogic.Share.gameStart(this.body, this.curHp, this.curPower);
            }
        }
        createItem(index) {
            if (this.itemNode)
                this.itemNode.destroy();
            let item = GameLogic.Share._scene.getChildByName('BodyNode');
            let itemRes = item.getChildAt(index);
            this.itemNode = Laya.Sprite3D.instantiate(itemRes, this.scene3D, false, new Laya.Vector3(0, 0, 0));
            this.itemNode.transform.position = new Laya.Vector3(0, 4, 0);
            this.itemNode.active = true;
        }
        updateItemList() {
            let arr = [].concat(PlayerDataMgr.getPlayerData().headArr);
            arr = arr.concat(PlayerDataMgr.getPlayerData().legArr);
            arr = arr.concat(PlayerDataMgr.getPlayerData().tailArr);
            arr = arr.concat(PlayerDataMgr.getPlayerData().wingsArr);
            this.itemList.array = arr;
        }
        initItemList() {
            let arr = [].concat(PlayerDataMgr.getPlayerData().headArr);
            arr = arr.concat(PlayerDataMgr.getPlayerData().legArr);
            arr = arr.concat(PlayerDataMgr.getPlayerData().tailArr);
            arr = arr.concat(PlayerDataMgr.getPlayerData().wingsArr);
            this.itemList.vScrollBarSkin = '';
            this.itemList.array = arr;
            this.itemList.repeatX = 3;
            this.itemList.repeatY = Math.floor(arr.length / 3);
            this.itemList.renderHandler = Laya.Handler.create(this, this.onItemListRender, null, false);
        }
        onItemListRender(cell, index) {
            if (index >= this.itemList.array.length) {
                return;
            }
            let type = 0;
            var item = cell.getChildByName('item');
            let icon = item.getChildByName('icon');
            let name = item.getChildByName('name');
            let hpBar = item.getChildByName('hpBar');
            let hpNum = item.getChildByName('hpNum');
            let powerBar = item.getChildByName('powerBar');
            let powerNum = item.getChildByName('powerNum');
            let bottomBg = item.getChildByName('bottomBg');
            let dnaNum = bottomBg.getChildByName('dnaNum');
            let adBg = item.getChildByName('adBg');
            let str = '';
            let tempIndex = 0;
            if (index < 10) {
                type = 0;
                tempIndex = index;
                let indexStr = tempIndex + 1 < 10 ? '0' + (tempIndex + 1).toString() : (tempIndex + 1).toString();
                str = 'items/Head_' + indexStr + '.png';
                name.text = PlayerDataMgr.getHeadName(tempIndex);
                hpBar.value = PlayerDataMgr.getItemData().head[tempIndex][0] / 20;
                hpNum.value = PlayerDataMgr.getItemData().head[tempIndex][0];
                powerBar.value = PlayerDataMgr.getItemData().head[tempIndex][1] / 10;
                powerNum.value = PlayerDataMgr.getItemData().head[tempIndex][1];
                dnaNum.value = PlayerDataMgr.getItemData().head[tempIndex][2];
                adBg.visible = PlayerDataMgr.getPlayerData().headArr[tempIndex] == 0;
                bottomBg.skin = this.totalDna >= PlayerDataMgr.getItemData().head[tempIndex][2] ? 'selectUI/xz_dk_xzbj3.png' : 'selectUI/xz_dk_xzbj2.png';
            }
            else if (index < 20) {
                type = 1;
                tempIndex = index - 10;
                let indexStr = tempIndex + 1 < 10 ? '0' + (tempIndex + 1).toString() : (tempIndex + 1).toString();
                str = 'items/Leg_' + indexStr + '.png';
                name.text = PlayerDataMgr.getLegName(tempIndex);
                hpBar.value = PlayerDataMgr.getItemData().leg[tempIndex][0] / 20;
                hpNum.value = PlayerDataMgr.getItemData().leg[tempIndex][0];
                powerBar.value = PlayerDataMgr.getItemData().leg[tempIndex][1] / 10;
                powerNum.value = PlayerDataMgr.getItemData().leg[tempIndex][1];
                dnaNum.value = PlayerDataMgr.getItemData().leg[tempIndex][2];
                adBg.visible = PlayerDataMgr.getPlayerData().legArr[tempIndex] == 0;
                bottomBg.skin = this.totalDna >= PlayerDataMgr.getItemData().leg[tempIndex][2] ? 'selectUI/xz_dk_xzbj3.png' : 'selectUI/xz_dk_xzbj2.png';
            }
            else if (index < 24) {
                type = 2;
                tempIndex = index - 20;
                let indexStr = tempIndex + 1 < 10 ? '0' + (tempIndex + 1).toString() : (tempIndex + 1).toString();
                str = 'items/Tail_' + indexStr + '.png';
                name.text = PlayerDataMgr.getTailName(tempIndex);
                hpBar.value = PlayerDataMgr.getItemData().tail[tempIndex][0] / 20;
                hpNum.value = PlayerDataMgr.getItemData().tail[tempIndex][0];
                powerBar.value = PlayerDataMgr.getItemData().tail[tempIndex][1] / 10;
                powerNum.value = PlayerDataMgr.getItemData().tail[tempIndex][1];
                dnaNum.value = PlayerDataMgr.getItemData().tail[tempIndex][2];
                adBg.visible = PlayerDataMgr.getPlayerData().tailArr[tempIndex] == 0;
                bottomBg.skin = this.totalDna >= PlayerDataMgr.getItemData().tail[tempIndex][2] ? 'selectUI/xz_dk_xzbj3.png' : 'selectUI/xz_dk_xzbj2.png';
            }
            else if (index < 26) {
                type = 3;
                tempIndex = index - 24;
                let indexStr = tempIndex + 1 < 10 ? '0' + (tempIndex + 1).toString() : (tempIndex + 1).toString();
                str = 'items/Wings_' + indexStr + '.png';
                name.text = PlayerDataMgr.getWingsName(tempIndex);
                hpBar.value = PlayerDataMgr.getItemData().wings[tempIndex][0] / 20;
                hpNum.value = PlayerDataMgr.getItemData().wings[tempIndex][0];
                powerBar.value = PlayerDataMgr.getItemData().wings[tempIndex][1] / 10;
                powerNum.value = PlayerDataMgr.getItemData().wings[tempIndex][1];
                dnaNum.value = PlayerDataMgr.getItemData().wings[tempIndex][2];
                adBg.visible = PlayerDataMgr.getPlayerData().wingsArr[tempIndex] == 0;
                bottomBg.skin = this.totalDna >= PlayerDataMgr.getItemData().wings[tempIndex][2] ? 'selectUI/xz_dk_xzbj3.png' : 'selectUI/xz_dk_xzbj2.png';
            }
            icon.skin = str;
            icon.off(Laya.Event.MOUSE_DOWN, this, this.selecItemDown);
            icon.off(Laya.Event.CLICK, this, this.selectItemUp);
            icon.on(Laya.Event.MOUSE_DOWN, this, this.selecItemDown, [type, tempIndex]);
            icon.on(Laya.Event.CLICK, this, this.selectItemUp, [type, tempIndex]);
        }
        selecItemDown(type, index) {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            this.selectType = type;
            this.selectIndex = index;
            if (this.totalDna < this.getItemDataFromTypeIndex()[2]) {
                return;
            }
            if (PlayerDataMgr.getDataByType(type)[index] == 0) {
                this.selectItemUp(type, index);
                return;
            }
            this.itemList.scrollBar.touchScrollEnable = false;
            this.createItemSp(type, index);
            this.on(Laya.Event.MOUSE_MOVE, this, this.fullBtnMove);
            this.on(Laya.Event.MOUSE_UP, this, this.fullBtnEnd);
            Laya.Tween.clearAll(this.finger);
            this.finger.visible = false;
        }
        selectItemUp(type, index) {
            console.log('click');
            if (PlayerDataMgr.getDataByType(type)[index] == 0) {
                let cb = () => {
                    PlayerDataMgr.getDataByType(type)[index] = 1;
                    PlayerDataMgr.setPlayerData();
                    this.updateItemList();
                };
                FdAd.showVideoAd(cb);
            }
        }
        fullBtnMove() {
            if (this.itemList.scrollBar.touchScrollEnable || !this.itemSp) {
                return;
            }
            this.itemSp.active = true;
            let pos = new Laya.Vector3(Laya.stage.mouseX, Laya.stage.mouseY - 150, 0);
            this.camera.convertScreenCoordToOrthographicCoord(pos, pos);
            pos.z = 0;
            this.itemSp.transform.position = pos;
            let itemNode = this.checkFixItemNode();
            if (itemNode) {
                this.itemSp.transform.rotationEuler = itemNode.transform.rotationEuler.clone();
            }
        }
        fullBtnEnd() {
            this.itemList.scrollBar.touchScrollEnable = true;
            this.off(Laya.Event.MOUSE_MOVE, this, this.fullBtnMove);
            this.off(Laya.Event.MOUSE_UP, this, this.fullBtnEnd);
            let itemNode = this.checkFixItemNode();
            if (itemNode) {
                this.addItemToBody(itemNode);
            }
            else {
                this.itemSp.destroy();
            }
        }
        checkFixItemNode() {
            for (let i = 0; i < this.body.numChildren; i++) {
                let itemNode = this.body.getChildAt(i);
                let itemNodePos = itemNode.transform.position.clone();
                let itemPos = this.itemSp.transform.position.clone();
                if (Laya.Vector3.distance(itemNodePos, itemPos) <= 1) {
                    return itemNode;
                }
            }
            return null;
        }
        addItemToBody(itemNode) {
            this.itemCount++;
            SoundMgr.instance.playSoundEffect('Get.mp3');
            WxApi.DoVibrate();
            let item = Laya.Sprite3D.instantiate(this.itemSp, itemNode, false);
            item.transform.localPosition = new Laya.Vector3();
            item.transform.localRotationEuler = new Laya.Vector3();
            item.getComponent(Laya.Animator).speed = 1;
            this.itemSp.destroy();
            this.updateCurData(this.getItemDataFromTypeIndex()[0], this.getItemDataFromTypeIndex()[1], this.getItemDataFromTypeIndex()[2]);
            this.updateItemList();
        }
        getItemDataFromTypeIndex() {
            let data = [];
            if (this.selectType == 0) {
                data = PlayerDataMgr.getItemData().head[this.selectIndex];
            }
            else if (this.selectType == 1) {
                data = PlayerDataMgr.getItemData().leg[this.selectIndex];
            }
            else if (this.selectType == 2) {
                data = PlayerDataMgr.getItemData().tail[this.selectIndex];
            }
            else if (this.selectType == 3) {
                data = PlayerDataMgr.getItemData().wings[this.selectIndex];
            }
            return data;
        }
        adBtnCB() {
            let cb = () => {
                this.totalDna += 150;
                this.dnaNum.text = this.totalDna.toString();
                this.adBtn.visible = false;
                this.updateItemList();
            };
            FdAd.showVideoAd(cb);
        }
        guide1() {
            this.finger.visible = true;
            this.finger.pos(183, this.height - 472);
            this.finger.scale(2, 2);
            Laya.Tween.to(this.finger, { scaleX: 1, scaleY: 1 }, 300, null, new Laya.Handler(this, () => {
                Laya.Tween.to(this.finger, { x: 530, y: 300 }, 1000, null, new Laya.Handler(this, () => {
                    this.guide1();
                }));
            }));
        }
        guide2() {
            this.finger.visible = true;
            this.finger.pos(this.width / 2, this.height - 472);
            this.finger.scale(2, 2);
            Laya.Tween.to(this.finger, { scaleX: 1, scaleY: 1 }, 300, null, new Laya.Handler(this, () => {
                Laya.Tween.to(this.finger, { x: 255, y: 500 }, 1000, null, new Laya.Handler(this, () => {
                    this.guide2();
                }));
            }));
        }
        guide3() {
            this.finger.visible = true;
            this.finger.pos(this.width / 2, this.height - 472);
            this.finger.scale(2, 2);
            Laya.Tween.to(this.finger, { scaleX: 1, scaleY: 1 }, 300, null, new Laya.Handler(this, () => {
                Laya.Tween.to(this.finger, { x: 475, y: 500 }, 1000, null, new Laya.Handler(this, () => {
                    this.guide3();
                }));
            }));
        }
        myUpdate() {
        }
    }

    class ScaleLoop extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwnwer = this.owner;
            this.scaleLoop(this.myOwnwer, 1.1, 400);
        }
        scaleLoop(node, rate, t) {
            var tw = Laya.Tween.to(node, { scaleX: rate, scaleY: rate }, t, null, new Laya.Handler(this, () => {
                Laya.Tween.to(node, { scaleX: 1, scaleY: 1 }, t, null, new Laya.Handler(this, () => {
                    this.scaleLoop(node, rate, t);
                }));
            }));
        }
    }

    class StartUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Utility.addClickEvent(this.startBtn, this, this.startBtnCB);
            FdMgr.inHomePage();
        }
        onClosed() {
        }
        startBtnCB() {
            FdMgr.startGame(() => {
                Laya.Scene.open('MyScenes/SelectUI.scene');
            });
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
            reg("Libs/FixNodeY.ts", FixNodeY);
            reg("View/LoadingUI.ts", LoadingUI);
            reg("View/SelectUI.ts", SelectUI);
            reg("Libs/ScaleLoop.ts", ScaleLoop);
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
