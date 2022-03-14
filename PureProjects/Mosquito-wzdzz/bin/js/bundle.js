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
    }
    PlayerDataMgr._playerData = null;
    PlayerDataMgr.powerMax = 10;
    PlayerDataMgr.tempSkinId = -1;
    PlayerDataMgr.levelDataArr = [];

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
        }
    }

    class Hammer extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.coll = null;
            this.hadColl = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.coll = this.myOwner.getChildAt(0);
        }
        onDisable() {
        }
        checkColl() {
            if (this.hadColl) {
                return;
            }
            let myPos = this.coll.transform.position.clone();
            let mPos = GameLogic.Share._mosquitoNode.transform.position.clone();
            myPos.y = 0;
            mPos.y = 0;
            if (Laya.Vector3.distance(myPos, mPos) < 2) {
                this.hadColl = true;
                WxApi.DoVibrate();
                GameLogic.Share.updateMosquitoNum(GameLogic.Share._mosquitoNode.numChildren - 20);
            }
        }
        onUpdate() {
            this.checkColl();
        }
    }

    class Runner extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.hadColl = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onDisable() {
        }
        checkColl() {
            if (this.hadColl) {
                return;
            }
            let myPos = this.myOwner.transform.position.clone();
            let mPos = GameLogic.Share._mosquitoNode.transform.position.clone();
            myPos.y = 0;
            mPos.y = 0;
            if (Laya.Vector3.distance(myPos, mPos) < 2) {
                this.hadColl = true;
                WxApi.DoVibrate();
                GameLogic.Share.updateMosquitoNum(GameLogic.Share._mosquitoNode.numChildren - 20);
            }
        }
        onUpdate() {
            this.checkColl();
        }
    }

    class Slice extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.value = '';
            this.type = 1;
            this.plane = null;
            this.cxt = null;
            this.cav = null;
            this.calType = 0;
            this.num = 1;
            this.hadColl = false;
            this.hadClear = false;
            this.texture2d = null;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.plane = this.myOwner.getChildByName('Plane');
        }
        onDisable() {
        }
        init(type) {
            this.type = type;
            if (this.value[0] == '+') {
                this.calType = 0;
                let strArr = this.value.split('+');
                this.num = parseInt(strArr[1]);
            }
            else if (this.value[0] == '-') {
                this.calType = 1;
                let strArr = this.value.split('-');
                this.num = parseInt(strArr[1]);
            }
            else if (this.value[0] == '*') {
                this.calType = 2;
                let strArr = this.value.split('*');
                this.num = parseInt(strArr[1]);
            }
            else if (this.value[0] == '/') {
                this.calType = 3;
                let strArr = this.value.split('/');
                this.num = parseInt(strArr[1]);
            }
            if (this.value[0] == '*') {
                let str = this.value.split('*');
                this.value = 'x' + str[1];
            }
            else if (this.value.search('/') != -1) {
                let str = this.value.split('/');
                this.value = '÷' + str[1];
            }
            let mat = this.plane.meshRenderer.material;
            this.cav = Laya.Browser.createElement("canvas");
            this.cxt = this.cav.getContext("2d");
            this.cav.width = 256;
            this.cav.height = 256;
            this.cxt.fillStyle = 'rgb(255,255,255)';
            this.cxt.font = "bold 150px Arial";
            this.cxt.textAlign = "center";
            this.cxt.textBaseline = "center";
            this.cxt.fillText(this.value, 130, 180, 200);
            this.cxt.strokeStyle = "black";
            this.cxt.font = "bold 150px Arial";
            this.cxt.strokeText(this.value, 130, 180, 200);
            this.texture2d = new Laya.Texture2D(256, 256);
            this.texture2d.loadImageSource(this.cav);
            mat.albedoTexture = this.texture2d;
        }
        checkColl() {
            if (this.hadColl || GameLogic.Share.isGameOver)
                return;
            let myPos = this.myOwner.transform.position.clone();
            let mPos = GameLogic.Share._mosquitoNode.transform.position.clone();
            if (Math.abs(myPos.z - mPos.z) < 0.1 && mPos.x > myPos.x - 2 && mPos.x < myPos.x + 2) {
                WxApi.DoVibrate();
                this.hadColl = true;
                let totalCount = GameLogic.Share._mosquitoNode.numChildren;
                if (this.calType == 0) {
                    totalCount += this.num;
                }
                else if (this.calType == 1) {
                    totalCount -= this.num;
                }
                else if (this.calType == 2) {
                    totalCount *= this.num;
                }
                else if (this.calType == 3) {
                    totalCount /= this.num;
                }
                GameLogic.Share.updateMosquitoNum(Math.floor(totalCount));
            }
        }
        onUpdate() {
            this.checkColl();
            if (GameLogic.Share.isGameOver && !this.hadClear) {
                this.hadClear = true;
                this.cxt.clearRect(0, 0, 256, 256);
            }
        }
        onDestroy() {
            this.texture2d.destroy();
        }
    }

    class PTime extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.coll = null;
            this.hadColl = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.coll = this.myOwner.getChildAt(0).getChildAt(0);
        }
        onDisable() {
        }
        checkColl() {
            if (this.hadColl) {
                return;
            }
            let myPos = this.coll.transform.position.clone();
            let mPos = GameLogic.Share._mosquitoNode.transform.position.clone();
            myPos.y = 0;
            mPos.y = 0;
            if (Laya.Vector3.distance(myPos, mPos) < 2) {
                this.hadColl = true;
                WxApi.DoVibrate();
                GameLogic.Share.updateMosquitoNum(GameLogic.Share._mosquitoNode.numChildren - 20);
            }
        }
        onUpdate() {
            this.checkColl();
        }
    }

    var AniState;
    (function (AniState) {
        AniState["ANI_IDLE"] = "idle";
        AniState["ANI_RUN"] = "run";
    })(AniState || (AniState = {}));
    class Mosquito extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this._ani = null;
            this.currentAniName = '';
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.owner.getComponent(Laya.Animator);
            this.playAnimation(AniState.ANI_RUN);
        }
        onDisable() {
        }
        getCurAniName() {
            return this._ani.getControllerLayer().getCurrentPlayState().animatorState.name;
        }
        playAnimation(name, speed = 1, transitionDuration = 0.2) {
            this.currentAniName = name;
            this._ani.speed = speed;
            this._ani.crossFade(name, transitionDuration);
        }
        onUpdate() {
        }
    }

    class Player extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
            this.roadEdge = 3;
            this.speed = 0.2;
        }
        onAwake() {
            if (this.myOwner)
                return;
            this.myOwner = this.owner;
        }
        onDisable() {
        }
        moveX(dtX) {
            if (GameLogic.Share.isGameOver) {
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
        }
        onUpdate() {
            if (!GameLogic.Share.isGameOver) {
                for (let i = 0; i < this.myOwner.numChildren; i++) {
                    let m = this.myOwner.getChildAt(i);
                    m.active = i < 50;
                }
            }
            else {
                for (let i = 0; i < this.myOwner.numChildren; i++) {
                    let m = this.myOwner.getChildAt(i);
                    m.active = true;
                }
            }
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame)
                return;
            this.myOwner.transform.translate(new Laya.Vector3(0, 0, this.speed), false);
            GameLogic.Share._camera.transform.translate(new Laya.Vector3(0, 0, this.speed), false);
            if (this.myOwner.transform.position.z >= GameLogic.Share._floorFinish.transform.position.z) {
                GameLogic.Share.finishCB(true);
            }
        }
    }

    var WomanState;
    (function (WomanState) {
        WomanState["ANI_IDLE"] = "idle";
        WomanState["ANI_SLAP"] = "SLAP";
        WomanState["ANI_dry"] = "dry";
    })(WomanState || (WomanState = {}));
    class Woman extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.mosquitoNode = null;
            this._ani = null;
            this.currentAniName = '';
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.owner.getComponent(Laya.Animator);
            this.mosquitoNode = Utility.findNodeByName(this.myOwner, 'mosquitoNode');
            this.playAnimation(WomanState.ANI_IDLE);
        }
        onDisable() {
        }
        getCurAniName() {
            return this._ani.getControllerLayer().getCurrentPlayState().animatorState.name;
        }
        playAnimation(name, speed = 1, transitionDuration = 0.2) {
            this.currentAniName = name;
            this._ani.speed = speed;
            this._ani.crossFade(name, transitionDuration);
        }
        onUpdate() {
        }
    }

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
                { url: 'res/Sounds/bgm.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/correct.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/hit.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/hurt.mp3', type: Laya.Loader.SOUND },
                { url: 'res/Sounds/wrong.mp3', type: Laya.Loader.SOUND }
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
    FdAd.bannerIdArr = ["adunit-5537ccffe5089e5c"];
    FdAd.videoId = "adunit-52288ae43a30597b";
    FdAd.gridId = "adunit-21325c229f875aa3";
    FdAd.bannerAds = [];
    FdAd.bannerIndex = 0;
    FdAd.isExistVideoAd = false;

    class GameLogic {
        constructor() {
            this.camStartPos = new Laya.Vector3(0, 0, 0);
            this.camStartRotation = null;
            this._cameraCrl = null;
            this.lightStartAngle = new Laya.Vector3();
            this._levelNode = null;
            this._player = null;
            this._playerCrl = null;
            this.startCamField = 80;
            this._floorFinish = null;
            this._Bench = null;
            this._woman = null;
            this._womanCrl = null;
            this._mosquitoNode = null;
            this.isStartGame = false;
            this.isGameOver = false;
            this.isWin = false;
            this.isPause = false;
            this.isFinish = false;
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
                        title: '蚊子快冲',
                        imageUrl: ''
                    };
                });
            }
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
            this._light.shadowResolution = 512;
            this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            this.lightStartAngle = this._light.transform.rotationEuler.clone();
            this.camStartPos = this._camera.transform.position.clone();
            this.camStartRotation = this._camera.transform.rotation.clone();
            this._camera.fieldOfView = this.startCamField;
            this._cameraCrl = this._camera.addComponent(CameraCrl);
            this._levelNode = new Laya.Sprite3D();
            this._scene.addChild(this._levelNode);
            this._Bench = this._scene.getChildByName('Scene_1').getChildByName('Bench');
            this._woman = this._Bench.getChildAt(0);
            this._womanCrl = this._woman.addComponent(Woman);
            this._mosquitoNode = this._levelNode.addChild(new Laya.Sprite3D());
            this._playerCrl = this._mosquitoNode.addComponent(Player);
            this.createLevel();
            this.createMosquito();
        }
        gameStart() {
            Laya.Scene.open('MyScenes/GameUI.scene');
        }
        startToWalk() {
        }
        createLevel() {
            let lv = PlayerDataMgr.getPlayerData().grade;
            lv = (lv - 1) % 5;
            let dataArr = PlayerDataMgr.levelDataArr[lv];
            for (let i = 0; i < dataArr.length; i++) {
                let data = dataArr[i];
                this.createProp(data);
            }
        }
        createMosquito() {
            let count = this._mosquitoNode.numChildren;
            let res = Laya.loader.getRes(WxApi.UnityPath + 'mosquito_1.lh');
            res.active = false;
            let mosquito = Laya.Sprite3D.instantiate(res, this._mosquitoNode, false, new Laya.Vector3(0, 0, 0));
            mosquito.addComponent(Mosquito);
            mosquito.transform.localPosition =
                new Laya.Vector3(count == 0 ? 0 : (Math.random() * 2.6 - 1.3), count == 0 ? 2.5 : 2.5 + (Math.random() * 2 - 1), -(count / 5));
        }
        createProp(data) {
            let name = data.name;
            let pos = new Laya.Vector3(Number(data.position.x), Number(data.position.y), Number(data.position.z));
            let rotation = new Laya.Vector3(Number(data.rotation.x), Number(data.rotation.y), Number(data.rotation.z));
            let scale = new Laya.Vector3(Number(data.scale.x), Number(data.scale.y), Number(data.scale.z));
            let value = data.value.v;
            let res = null;
            if (name.search('Floor_1') != -1) {
                res = Utility.getSprite3DResByUrl('Floor_1.lh', this._levelNode);
            }
            else if (name.search('Floor_Finsh') != -1) {
                res = Utility.getSprite3DResByUrl('Floor_Finsh.lh', this._levelNode);
                this._floorFinish = res;
                let benchPos = this._Bench.transform.position.clone();
                let desPos = this._floorFinish.parent.getChildAt(this._floorFinish.parent.numChildren - 2).transform.position.clone();
                benchPos.z = desPos.z + 80;
                this._Bench.transform.position = benchPos;
            }
            else if (name.search('Runer_1') != -1) {
                res = Utility.getSprite3DResByUrl('Runer_1.lh', this._levelNode);
                res.addComponent(Runner);
            }
            else if (name.search('Hammer_1') != -1) {
                res = Utility.getSprite3DResByUrl('Hammer_1.lh', this._levelNode);
                res.addComponent(Hammer);
            }
            else if (name.search('Slice_1') != -1) {
                res = Utility.getSprite3DResByUrl('Slice_1.lh', this._levelNode);
                let crl = res.addComponent(Slice);
                crl.value = value;
                crl.init(1);
            }
            else if (name.search('Slice_2') != -1) {
                res = Utility.getSprite3DResByUrl('Slice_2.lh', this._levelNode);
                let crl = res.addComponent(Slice);
                crl.value = value;
                crl.init(2);
            }
            else if (name.search('Time_1') != -1) {
                res = Utility.getSprite3DResByUrl('Time_1.lh', this._levelNode);
                res.addComponent(PTime);
            }
            res.transform.position = pos;
            res.transform.rotationEuler = rotation;
            res.transform.setWorldLossyScale(scale);
        }
        updateMosquitoNum(num) {
            if (num <= 0) {
                this.createFX(this._mosquitoNode.transform.position.clone());
                this._mosquitoNode.destroyChildren();
                this.finishCB(false);
                return;
            }
            let total = this._mosquitoNode.numChildren;
            let dt = Math.abs(num - total);
            if (num > total) {
                SoundMgr.instance.playSoundEffect('correct.mp3');
                for (let i = 0; i < dt; i++) {
                    this.createMosquito();
                }
            }
            else if (num < total) {
                SoundMgr.instance.playSoundEffect('wrong.mp3');
                for (let i = dt - 1; i >= 0; i--) {
                    this._mosquitoNode.getChildAt(this._mosquitoNode.numChildren - 1).destroy();
                }
                this.createFX(this._mosquitoNode.transform.position.clone());
            }
        }
        finishCB(isWin) {
            this.isGameOver = true;
            this.isWin = isWin;
            this.isStartGame = false;
            if (!isWin)
                WxApi.DoVibrate(false);
            if (isWin) {
                for (let i = 0; i < this._mosquitoNode.numChildren; i++) {
                    let m = this._mosquitoNode.getChildAt(i);
                    let mPos = m.transform.position.clone();
                    mPos.x = Math.random() * 6 - 3;
                    mPos.z = this._floorFinish.transform.position.z + 2;
                    Utility.TmoveTo(m, 1000, mPos, null);
                }
                let camPos = this._camera.transform.position.clone();
                camPos.y = 3;
                camPos.z += 2;
                Utility.TmoveTo(this._camera, 1000, camPos, () => {
                    Laya.timer.once(1000, this, () => {
                        this.dryWoman();
                    });
                });
                let camEr = this._camera.transform.rotationEuler.clone();
                camEr.x = 0;
                Utility.RotateTo(this._camera, 1000, camEr, null);
            }
            else {
                Laya.timer.once(2000, this, () => {
                    Laya.Scene.open('MyScenes/FinishUI.scene');
                });
            }
        }
        dryWoman() {
            let count = this._mosquitoNode.numChildren;
            for (let i = this._mosquitoNode.numChildren - 1; i >= 0; i--) {
                let m = this._mosquitoNode.getChildAt(i);
                let des = this._womanCrl.mosquitoNode;
                let desPos = des.transform.localPosition.clone();
                desPos.x = Math.random() * 2.3 - 1.15;
                desPos.y -= i / 15;
                desPos.z = -1.8;
                let wPos = des.transform.position.clone();
                Laya.Vector3.add(wPos, desPos, desPos);
                Utility.TmoveTo(m, 500, desPos, () => {
                    m.transform.localRotationEuler = new Laya.Vector3(-90, 0, 0);
                    let mPos = m.transform.position.clone();
                    let mRo = m.transform.rotationEuler.clone();
                    let newM = des.addChild(m);
                    newM.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
                    newM.transform.position = mPos;
                    newM.transform.rotationEuler = mRo;
                });
            }
            Laya.timer.once(1000, this, () => {
                let camPos = this._camera.transform.position.clone();
                camPos.x = 20;
                camPos.y = 30;
                Utility.TmoveTo(this._camera, 500, camPos, () => {
                    Laya.timer.once(1000, this, () => {
                        if (count >= 20) {
                            this._womanCrl.playAnimation(WomanState.ANI_dry, 0.5);
                            Laya.timer.once(300, this, () => {
                                SoundMgr.instance.playSoundEffect('hurt.mp3');
                            });
                        }
                        else {
                            this._womanCrl.playAnimation(WomanState.ANI_SLAP);
                            Laya.timer.once(1000, this, () => {
                                SoundMgr.instance.playSoundEffect('hit.mp3');
                                this.createFX(this._womanCrl.mosquitoNode.transform.position.clone(), false);
                                this._womanCrl.mosquitoNode.destroyChildren();
                            });
                        }
                        Laya.timer.once(2000, this, () => {
                            Laya.Scene.open('MyScenes/FinishUI.scene');
                        });
                    });
                });
                let camEr = this._camera.transform.rotationEuler.clone();
                camEr.x -= 30;
                camEr.y -= 20;
                Utility.RotateTo(this._camera, 500, camEr, null);
            });
        }
        createFX(pos, addZ = true) {
            if (addZ)
                pos.z += 2;
            let fx = Utility.getSprite3DResByUrl('mosquitoFX.lh', this._levelNode);
            fx.transform.position = pos;
            Laya.timer.once(500, this, () => {
                fx.destroy();
            });
        }
        restartGame() {
            this.isStartGame = false;
            this.isGameOver = false;
            this.isWin = false;
            this.isPause = false;
            this._camera.fieldOfView = this.startCamField;
            this.isFinish = false;
            this._camera.transform.position = this.camStartPos;
            this._camera.transform.rotation = this.camStartRotation;
            this._light.transform.localRotationEuler = this.lightStartAngle;
            let cav = Laya.Browser.createElement("canvas");
            let cxt = cav.getContext("2d");
            cxt.clearRect(0, 0, 256, 256);
            this._levelNode.destroyChildren();
            this._mosquitoNode = this._levelNode.addChild(new Laya.Sprite3D());
            this._playerCrl = this._mosquitoNode.addComponent(Player);
            this._womanCrl.mosquitoNode.destroyChildren();
            this._womanCrl.playAnimation(WomanState.ANI_IDLE);
            this.createLevel();
            this.createMosquito();
        }
    }

    class FinishUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened(param) {
            let isWin = GameLogic.Share.isWin;
            this.winTitle.visible = isWin;
            this.loseTitle.visible = !isWin;
            this.nextBtn.visible = isWin;
            this.restartBtn.visible = !isWin;
            Utility.addClickEvent(this.restartBtn, this, this.back);
            Utility.addClickEvent(this.nextBtn, this, this.back);
        }
        onClosed() {
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

    class FixNodeY extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            let myOwner = this.owner;
            myOwner.y = myOwner.y * Laya.stage.displayHeight / 1334;
        }
    }

    class GameUI extends Laya.Scene {
        constructor() {
            super();
            this.touchStartX = 0;
            this.touchPreX = 0;
            this.touching = false;
        }
        onOpened() {
            GameUI.Share = this;
            this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString();
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
            if (GameLogic.Share.isGameOver)
                return;
            if (!GameLogic.Share.isStartGame) {
                GameLogic.Share.isStartGame = true;
                this.guideAni.visible = false;
                this.countTips.visible = true;
                GameLogic.Share.startToWalk();
            }
            this.touching = true;
            this.touchStartX = event.stageX;
            this.touchPreX = event.stageX;
        }
        touchBtnMoveCB(event) {
            if (!this.touching || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame)
                return;
            let sx = event.stageX;
            let dtx = this.touchPreX - sx;
            GameLogic.Share._playerCrl.moveX(dtx / 80);
            this.touchPreX = sx;
        }
        touchBtnUpCB(event) {
            if (!this.touching || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame)
                return;
            this.touching = false;
        }
        updateCB() {
            this.countTips.visible = GameLogic.Share.isStartGame;
            this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString();
            this.countNum.value = GameLogic.Share._mosquitoNode.numChildren.toString();
            let dis = GameLogic.Share._floorFinish.transform.position.z;
            this.disBar.value = GameLogic.Share._mosquitoNode.transform.position.z / dis;
        }
    }

    class LoadingUI extends Laya.Scene {
        constructor() {
            super();
            this.maxGrade = 5;
        }
        onOpened() {
            if (!Laya.Browser.onWeiXin) {
                localStorage.clear();
            }
            this.loadJsonData(1);
            Laya.timer.frameLoop(1, this, () => {
                this.bar.value += 0.01;
            });
        }
        onClosed() {
        }
        loadJsonData(index) {
            Utility.loadJson('res/config/Level' + index + '.json', (data) => {
                PlayerDataMgr.levelDataArr.push(data);
                index++;
                if (index > this.maxGrade) {
                    this.loadRes();
                    console.log('levelDataArr:', PlayerDataMgr.levelDataArr);
                    return;
                }
                else {
                    this.loadJsonData(index);
                }
            });
        }
        loadRes() {
            var resUrl = [
                WxApi.UnityPath + 'Runer_1.lh',
                WxApi.UnityPath + 'Hammer_1.lh',
                WxApi.UnityPath + 'Slice_1.lh',
                WxApi.UnityPath + 'Slice_2.lh',
                WxApi.UnityPath + 'Floor_1.lh',
                WxApi.UnityPath + 'Floor_Finsh.lh',
                WxApi.UnityPath + 'Time_1.lh',
                WxApi.UnityPath + 'mosquito_1.lh',
                WxApi.UnityPath + 'mosquitoFX.lh'
            ];
            Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
        }
        onComplete() {
            SoundMgr.instance.initLoading(() => {
                GameLogic.Share.initScene();
            });
        }
        onProgress(value) {
        }
    }

    class StartUI extends Laya.Scene {
        constructor() {
            super();
            this.hadStart = false;
        }
        onAwake() {
            SoundMgr.instance.playMusic('bgm.mp3');
        }
        onOpened() {
            WxApi.isStartUI = true;
            Laya.timer.frameLoop(1, this, this.updateCB);
            this.startBtn.on(Laya.Event.CLICK, this, this.startBtnCB);
            FdAd.showBannerAd();
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
            FdAd.hideBannerAd();
            GameLogic.Share.gameStart();
        }
        updateCB() {
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

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("View/FinishUI.ts", FinishUI);
            reg("Libs/FixNodeY.ts", FixNodeY);
            reg("View/GameUI.ts", GameUI);
            reg("View/LoadingUI.ts", LoadingUI);
            reg("View/StartUI.ts", StartUI);
            reg("Libs/ScaleLoop.ts", ScaleLoop);
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
