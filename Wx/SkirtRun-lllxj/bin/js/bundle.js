(function () {
    'use strict';

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

    class PlayerData {
        constructor() {
            this.grade = 1;
            this.coin = 0;
            this.skinId = 0;
            this.skinArr = [1, 0, 0, 0, 0, 0, 0, 0];
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
            }
        }
        static getRandColor() {
            return Utility.getRandomItemInArr(this.colorArr);
        }
    }
    PlayerDataMgr._playerData = null;
    PlayerDataMgr.levelDataArr = [];
    PlayerDataMgr.colorArr = [
        '#e20000', '#ff9700', '#ffe300', '#00af30', '#0065ff', '#a500b7',
        '#ff9f38', '#f1694a', '#f63373', '#ff9f38', '#fb519c', '#ff6ee2',
        '#ff95fa', '#16e4f4', '#20b1ef', '#2381ee'
    ];

    class CameraCrl extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onDisable() {
        }
        selectSkirt() {
            GameLogic.Share.isSelectingSkin = true;
            let myPos = this.myOwner.transform.position.clone();
            myPos.y = 2;
            myPos.z = 5;
            this.myOwner.transform.position = myPos;
            this.myOwner.transform.rotate(new Laya.Vector3(0, 180, 0), false, false);
        }
        resetCamera() {
            GameLogic.Share.isSelectingSkin = false;
            this.myOwner.transform.position = GameLogic.Share.camStartPos;
            this.myOwner.transform.rotation = GameLogic.Share.camStartRotation;
        }
        onUpdate() {
            if (!GameLogic.Share._player || GameLogic.Share._playerCrl.isDied || GameLogic.Share.isSelectingSkin) {
                return;
            }
            let pos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            myPos.x = pos.x;
            myPos.y = pos.y + 4.5;
            myPos.z = pos.z - 5;
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos);
            this.myOwner.transform.position = myPos;
        }
    }

    var PlayerAni;
    (function (PlayerAni) {
        PlayerAni["Ani_Idle"] = "idle";
        PlayerAni["Ani_Dance"] = "dance";
        PlayerAni["Ani_Fall"] = "fall";
        PlayerAni["Ani_Fly_1"] = "fly_1";
        PlayerAni["Ani_Fly_2"] = "fly_2";
        PlayerAni["Ani_Walk"] = "walk";
        PlayerAni["Ani_Jump"] = "jump";
        PlayerAni["Ani_Hurt"] = "hurt";
    })(PlayerAni || (PlayerAni = {}));

    class PlayerCrl extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this._ani = null;
            this.skirtArr = [];
            this.topArr = [];
            this.hairArr = [];
            this.hitFX = null;
            this.flyFX = null;
            this.baseSpeed = 0.065;
            this.speed = 0;
            this.fallSpeed = -0.055;
            this.touchX = 375;
            this.edgeMax = 1.8;
            this.curAniName = PlayerAni.Ani_Idle;
            this.emptyMax = -0.17;
            this.canMove = true;
            this.hadLeg = false;
            this.isJumping = false;
            this.isFalling = false;
            this.isHurt = false;
            this.isDied = false;
            this.isPlayingFlySound = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.myOwner.getChildAt(0).getComponent(Laya.Animator);
            this.skirtArr = Utility.findNodeByNameArr(this.myOwner, 'Skirt');
            this.topArr = Utility.findNodeByNameArr(this.myOwner, 'Top');
            this.hairArr = Utility.findNodeByNameArr(this.myOwner, 'Hair');
            this.hitFX = this.myOwner.getChildByName('Hit_FX');
            this.hitFX.active = false;
            this.flyFX = this.myOwner.getChildByName('Fly_FX');
            this.flyFX.active = false;
            this.playAni(PlayerAni.Ani_Idle);
            this.initData();
            this.changeFirstSkirt(PlayerDataMgr.getPlayerData().skinId);
        }
        get myPos() {
            return this.myOwner.transform.position.clone();
        }
        initData() {
            for (let i = 0; i < this.hairArr.length; i++) {
                this.hairArr[i].active = i == 0;
                let ms = this.hairArr[i];
                let mat = ms.meshRenderer.material;
                mat.albedoColor = Utility.d3_getRgbByHex(PlayerDataMgr.getRandColor());
            }
            for (let i = 0; i < this.topArr.length; i++) {
                this.topArr[i].active = i == this.topArr.length - 1;
                let ms = this.topArr[i];
                let mat = ms.skinnedMeshRenderer.material;
                mat.albedoColor = Utility.d3_getRgbByHex(PlayerDataMgr.getRandColor());
            }
            for (let i = 1; i < this.skirtArr.length; i++) {
                let skirt = this.skirtArr[i];
                let ms = skirt;
                let mat = ms.skinnedMeshRenderer.material;
                mat.tilingOffset = new Laya.Vector4(1, 1, 0, this.emptyMax);
            }
        }
        playAni(name, speed = 1, normalizedTime = 0) {
            if (name == this.curAniName)
                return;
            if (name == PlayerAni.Ani_Fly_1)
                speed = 0.85;
            if (name == PlayerAni.Ani_Walk)
                speed = 1.2;
            this._ani.crossFade(name, 0.2, 0, normalizedTime);
            this._ani.speed = speed;
            this.curAniName = name;
        }
        changeFirstSkirt(id, isReset = false) {
            let dir = isReset ? "res/Texture/Skirt_Color_1.png" : "res/Texture/Skirt_" + (id + 1) + ".png";
            let ms = this.skirtArr[0];
            Laya.Texture2D.load(dir, Laya.Handler.create(this, (texture) => {
                ms.skinnedMeshRenderer.material.albedoTexture = texture;
                ms.skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, 1);
            }));
        }
        changeHair(id, color) {
            for (let i = 0; i < this.hairArr.length; i++) {
                let hair = this.hairArr[i];
                hair.active = i == id - 1;
                if (hair.active) {
                    let ms = hair;
                    let mat = ms.meshRenderer.material;
                    mat.albedoColor = Utility.d3_getRgbByHex(color);
                }
            }
        }
        changeTop(id, color) {
            for (let i = 0; i < this.topArr.length; i++) {
                let top = this.topArr[i];
                top.active = i == id - 1;
                if (top.active) {
                    let ms = this.topArr[i];
                    let mat = ms.skinnedMeshRenderer.material;
                    mat.albedoColor = Utility.d3_getRgbByHex(color);
                }
            }
        }
        decSkirt() {
            if (GameLogic.Share.isGameOver)
                return;
            for (let i = this.skirtArr.length - 1; i >= 0; i--) {
                let skirt = this.skirtArr[i];
                let ms = skirt;
                let mat = ms.skinnedMeshRenderer.material;
                let os = mat.tilingOffset.clone();
                if (os.w <= this.emptyMax)
                    continue;
                os.w -= 0.17 / 50;
                if (os.w < this.emptyMax)
                    os.w = this.emptyMax;
                mat.tilingOffset = os;
                this.playFlySound();
                break;
            }
        }
        playFlySound() {
            if (this.isPlayingFlySound)
                return;
            this.isPlayingFlySound = true;
            SoundMgr.instance.playSoundEffect('Fly.mp3', 0);
            WxApi.loopVibrate();
        }
        stopFlySound() {
            this.isPlayingFlySound = false;
            SoundMgr.instance.stopSound('Fly.mp3');
            WxApi.stopLoopVibrate();
        }
        addSkirt(color) {
            if (this.isFullSkirt) {
                for (let i = this.skirtArr.length - 1; i > 0; i--) {
                    let skirt = this.skirtArr[i];
                    let ms = skirt;
                    let mat = ms.skinnedMeshRenderer.material;
                    let skirt1 = this.skirtArr[i - 1];
                    let ms1 = skirt1;
                    let mat1 = ms1.skinnedMeshRenderer.material;
                    mat.albedoColor = mat1.albedoColor.clone();
                }
                let skirt = this.skirtArr[0];
                let ms = skirt;
                let mat = ms.skinnedMeshRenderer.material;
                mat.albedoColor = Utility.d3_getRgbByHex(color);
            }
            else {
                for (let i = 0; i < this.skirtArr.length; i++) {
                    let skirt = this.skirtArr[i];
                    let ms = skirt;
                    let mat = ms.skinnedMeshRenderer.material;
                    let os = mat.tilingOffset.clone();
                    if (os.w > this.emptyMax && os.w < 0) {
                        os.w = 0;
                        mat.tilingOffset = os;
                        if (i < this.skirtArr.length - 1) {
                            let skirt1 = this.skirtArr[i + 1];
                            let ms1 = skirt1;
                            let mat1 = ms1.skinnedMeshRenderer.material;
                            let os1 = mat1.tilingOffset.clone();
                            os1.w = 0;
                            mat1.tilingOffset = os;
                        }
                        break;
                    }
                    if (os.w <= this.emptyMax) {
                        os.w = 0;
                        mat.albedoColor = Utility.d3_getRgbByHex(color);
                        mat.tilingOffset = os;
                        break;
                    }
                }
            }
        }
        addLongSkirt(isRandom = false) {
            for (let i = 0; i < this.skirtArr.length; i++) {
                let skirt = this.skirtArr[i];
                let ms = skirt;
                let mat = ms.skinnedMeshRenderer.material;
                let os = mat.tilingOffset.clone();
                os.w = 0;
                mat.tilingOffset = os;
                if (!isRandom)
                    mat.albedoColor = Utility.d3_getRgbByHex(PlayerDataMgr.colorArr[i]);
                else
                    mat.albedoColor = Utility.d3_getRgbByHex(Utility.getRandomItemInArr(PlayerDataMgr.colorArr));
            }
        }
        get isFullSkirt() {
            let skirt = this.skirtArr[this.skirtArr.length - 1];
            let ms = skirt;
            let mat = ms.skinnedMeshRenderer.material;
            let os = mat.tilingOffset.clone();
            return os.w >= 0;
        }
        get isEmptySkirt() {
            let skirt = this.skirtArr[0];
            let ms = skirt;
            let mat = ms.skinnedMeshRenderer.material;
            let os = mat.tilingOffset.clone();
            return os.w <= this.emptyMax;
        }
        showAllSkirt() {
            Laya.timer.frameLoop(1, this, () => {
                for (let i = 0; i < this.skirtArr.length; i++) {
                    let skirt = this.skirtArr[i];
                    let ms = skirt;
                    let mat = ms.skinnedMeshRenderer.material;
                    let os = mat.tilingOffset.clone();
                    if (os.w >= 0)
                        continue;
                    os.w += 0.17 / 15;
                    if (os.w > 0)
                        os.w = 0;
                    mat.tilingOffset = os;
                    break;
                }
            });
        }
        stopWalk() {
            this.speed = 0;
            if (!this.isJumping && !this.isHurt)
                this.playAni(PlayerAni.Ani_Idle);
        }
        resumeWalk() {
            this.speed = this.baseSpeed;
            if (!this.isJumping && !this.isHurt)
                this.playAni(PlayerAni.Ani_Walk);
        }
        moveX() {
            if (GameLogic.Share.isGameOver || !this.canMove)
                return;
            let speed = this.speed;
            if (this.isEmptySkirt && this.isFalling) {
                speed = 0;
            }
            let pos = new Laya.Vector3(0, 0, speed);
            this.myOwner.transform.translate(pos, false);
            let x = this.touchX;
            x -= Laya.stage.displayWidth / 2;
            x = x / (Laya.stage.displayWidth / 2) * (this.edgeMax + 0.5);
            pos = this.myOwner.transform.position.clone();
            pos.x = -x;
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.2, pos);
            this.myOwner.transform.position = pos;
        }
        jumpCB() {
            this.isJumping = true;
            this.playAni(PlayerAni.Ani_Jump, 0.8);
            let pos = this.myPos;
            pos.y += 3;
            pos.z += 2;
            Utility.TmoveToYZ(this.myOwner, 500, pos, () => {
                this.isFalling = true;
                if (GameLogic.Share.roadIndex >= GameLogic.Share._roadArr.length) {
                    this.fallSpeed = -0.025;
                    this.baseSpeed = 0.07;
                    if (this.speed > 0)
                        this.speed = this.baseSpeed;
                }
                this.playAni(PlayerAni.Ani_Fly_1);
            });
        }
        fanJumpCB() {
            this.isJumping = true;
            this.playAni(PlayerAni.Ani_Jump, 0.8);
            let pos = this.myPos;
            pos.y += 7;
            pos.z += 4;
            Utility.TmoveToYZ(this.myOwner, 500, pos.clone(), () => {
                this.isFalling = true;
                if (GameLogic.Share.roadIndex >= GameLogic.Share._roadArr.length) {
                    this.fallSpeed = -0.025;
                    this.baseSpeed = 0.07;
                    if (this.speed > 0)
                        this.speed = this.baseSpeed;
                }
                this.playAni(PlayerAni.Ani_Fly_1);
            });
        }
        checkLand() {
            this.myOwner.transform.translate(new Laya.Vector3(0, this.fallSpeed, 0), false);
            let nextLoad = GameLogic.Share._roadArr[GameLogic.Share.roadIndex];
            let loadPos = nextLoad.transform.position.clone();
            let myPos = this.myPos;
            if (Math.abs(myPos.y - loadPos.y) <= 0.2 && myPos.z >= loadPos.z) {
                GameLogic.Share.roadIndex++;
                this.isFalling = false;
                this.isJumping = false;
                myPos.y = loadPos.y;
                this.myOwner.transform.position = myPos;
                this.playAni(this.speed == 0 ? PlayerAni.Ani_Idle : PlayerAni.Ani_Walk);
            }
            else if (Math.abs(myPos.y - loadPos.y) <= 0.2 && myPos.z < loadPos.z) {
                this.isDied = true;
                this.playAni(PlayerAni.Ani_Fall);
                GameLogic.Share.gameOver(false);
            }
        }
        checkLandCylinder() {
            if (GameLogic.Share.isGameOver)
                return;
            let disArr = [];
            for (let i = 0; i < GameLogic.Share._cylinderArr.length; i++) {
                let cylinder = GameLogic.Share._cylinderArr[i];
                let cPos = cylinder.transform.position.clone();
                let myPos = this.myPos;
                disArr.push(Laya.Vector3.distance(cPos, myPos));
            }
            let tempArr = [].concat(disArr);
            disArr.sort((a, b) => { return a - b; });
            let index = tempArr.indexOf(disArr[0]);
            let closestCyl = GameLogic.Share._cylinderArr[index];
            let ccPos = closestCyl.transform.position.clone();
            let lastCylinder = GameLogic.Share._cylinderArr[GameLogic.Share._cylinderArr.length - 1];
            if (Laya.Vector3.distance(ccPos, this.myPos) <= 0.5 || this.myPos.y <= ccPos.y || this.myPos.z > lastCylinder.transform.position.z) {
                this.myOwner.transform.position = ccPos;
                this.showAllSkirt();
                this.winCB();
                GameLogic.Share.gameOver(true);
                return;
            }
            if (this.speed > 0 && !this.isEmptySkirt) {
                this.myOwner.transform.translate(new Laya.Vector3(0, this.fallSpeed, 0), false);
                return;
            }
            let pos = new Laya.Vector3();
            let t = 0.1 / Math.abs(this.myPos.y - ccPos.y);
            if (t < 0)
                t = 0;
            Laya.Vector3.lerp(this.myPos, ccPos, t, pos);
            this.myOwner.transform.position = pos;
        }
        hurtCB() {
            if (this.isHurt)
                return;
            SoundMgr.instance.playSoundEffect('Hurt.mp3');
            this.hitFX.active = true;
            Laya.timer.once(1000, this, () => {
                this.hitFX.active = false;
            });
            this.isHurt = true;
            Laya.timer.once(500, this, () => { this.isHurt = false; });
            this.playAni(PlayerAni.Ani_Hurt);
            Laya.timer.once(400, this, () => {
                if (this.speed > 0)
                    this.playAni(PlayerAni.Ani_Walk);
                else
                    this.playAni(PlayerAni.Ani_Idle);
            });
            let count = 0;
            for (let i = this.skirtArr.length - 1; i >= 0; i--) {
                let skirt = this.skirtArr[i];
                let ms = skirt;
                let mat = ms.skinnedMeshRenderer.material;
                let os = mat.tilingOffset.clone();
                if (os.w <= this.emptyMax)
                    continue;
                os.w = this.emptyMax;
                mat.tilingOffset = os;
                count++;
                if (count >= 3)
                    break;
            }
        }
        winCB() {
            this.playAni(PlayerAni.Ani_Dance);
            this.myOwner.transform.rotate(new Laya.Vector3(0, 180, 0), false, false);
        }
        onUpdate() {
            if (this.isFalling) {
                if (GameLogic.Share.roadIndex >= GameLogic.Share._roadArr.length) {
                    this.checkLandCylinder();
                }
                else {
                    this.checkLand();
                }
                if (this.speed > 0) {
                    this.flyFX.active = true;
                    this.decSkirt();
                }
            }
            if (this.speed == 0 || !this.isFalling || this.isEmptySkirt) {
                this.flyFX.active = false;
                this.stopFlySound();
            }
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) {
                return;
            }
            this.moveX();
            if (this.myOwner.transform.position.x < -this.edgeMax) {
                let pos = this.myOwner.transform.position.clone();
                pos.x = -this.edgeMax;
                this.myOwner.transform.position = pos;
            }
            else if (this.myOwner.transform.position.x > this.edgeMax) {
                let pos = this.myOwner.transform.position.clone();
                pos.x = this.edgeMax;
                this.myOwner.transform.position = pos;
            }
        }
    }

    class Road extends Laya.Script {
        constructor() {
            super();
            this.hadJump = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.jumpArea = this.myOwner.getChildAt(0);
        }
        onUpdate() {
            if (!this.hadJump) {
                let pPos = GameLogic.Share._player.transform.position.clone();
                let jPos = this.jumpArea.transform.position.clone();
                if (Math.abs(pPos.z - jPos.z) <= 0.5 && Math.abs(pPos.y - jPos.y) <= 0.1) {
                    this.hadJump = true;
                    this.jumpArea.destroy();
                    GameLogic.Share._playerCrl.jumpCB();
                }
            }
        }
    }

    class Cylinder extends Laya.Script {
        constructor() {
            super();
            this.index = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        initData(index) {
            this.index = index;
            let ms = this.myOwner;
            Laya.Texture2D.load("res/Texture/Cylinder_" + (index + 1) + '.jpg', Laya.Handler.create(this, function (texture) {
                ms.meshRenderer.material.albedoTexture = texture;
            }));
        }
        onUpdate() {
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
                        self.videoFinishCallback && self.videoFinishCallback();
                        self.videoFinishCallback = null;
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
            this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchStart);
            this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchMove);
            this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
            FdMgr.inGame();
        }
        onClosed() {
            Laya.timer.clearAll(this);
        }
        touchStart(evt) {
            if (GameLogic.Share.isGameOver)
                return;
            if (!GameLogic.Share.isStartGame) {
                this.guideAni.visible = false;
                GameLogic.Share.gameStart();
            }
            let x = evt.stageX;
            GameLogic.Share._playerCrl.touchX = x;
            GameLogic.Share._playerCrl.resumeWalk();
        }
        touchMove(evt) {
            if (GameLogic.Share.isGameOver)
                return;
            let x = evt.stageX;
            GameLogic.Share._playerCrl.touchX = x;
        }
        touchEnd(evt) {
            if (GameLogic.Share.isGameOver)
                return;
            GameLogic.Share._playerCrl.stopWalk();
        }
        getDiamond(pos) {
            let diamond = new Laya.Image('startUI/ksy_zs_1.png');
            diamond.anchorX = 0.5;
            diamond.anchorY = 0.5;
            this.addChild(diamond);
            let op = new Laya.Vector4(0, 0, 0);
            GameLogic.Share._camera.viewport.project(pos, GameLogic.Share._camera.projectionViewMatrix, op);
            diamond.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            let toPos = new Laya.Point(-100, 0);
            this.coinNum.localToGlobal(toPos);
            Utility.tMove2D(diamond, toPos.x, toPos.y, 1000, () => {
                PlayerDataMgr.getPlayerData().coin += 5;
                PlayerDataMgr.setPlayerData();
                diamond.destroy();
            });
        }
        myUpdate() {
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
        }
    }

    class Diamond extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            this.myOwner.transform.rotate(new Laya.Vector3(0, 1, 0), true, false);
            let myPos = this.myOwner.transform.position.clone();
            let pPos = GameLogic.Share._playerCrl.myPos;
            if (Laya.Vector3.distance(myPos, pPos) <= 1) {
                WxApi.DoVibrate();
                SoundMgr.instance.playSoundEffect('Diamond.mp3');
                GameUI.Share.getDiamond(myPos);
                GameLogic.Share.createDiamondFX(myPos);
                this.myOwner.destroy();
            }
        }
    }

    class Skirt extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.myColor = '';
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        initColor(color) {
            this.myColor = color;
            let ms = this.myOwner;
            let mat = ms.meshRenderer.material;
            mat.albedoColor = Utility.d3_getRgbByHex(color);
        }
        onUpdate() {
            let myPos = this.myOwner.transform.position.clone();
            let pPos = GameLogic.Share._player.transform.position.clone();
            if (Laya.Vector3.distance(myPos, pPos) <= 1) {
                WxApi.DoVibrate();
                SoundMgr.instance.playSoundEffect('Collect.mp3');
                GameLogic.Share._playerCrl.addSkirt(this.myColor);
                GameLogic.Share.createCollectFX(myPos);
                this.myOwner.destroy();
                return;
            }
            this.myOwner.transform.rotate(new Laya.Vector3(0, 1, 0), true, false);
        }
    }

    class Door extends Laya.Script {
        constructor() {
            super();
            this.skirtColor = '';
            this.hairColor = '';
            this.topColor = '';
            this.hairId = 0;
            this.topId = 0;
            this.index = 0;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.tips = this.myOwner.getChildAt(0);
            this.propNode = this.myOwner.getChildAt(1);
        }
        initData(id) {
            this.index = id;
            this.createProp();
        }
        createProp() {
            let name = '';
            switch (this.index) {
                case 0:
                    name = 'Skirt_Short';
                    break;
                case 1:
                    name = 'Skirt_Long';
                    break;
                case 2:
                    this.hairId = Utility.GetRandom(2, 8);
                    name = 'Hair_' + this.hairId;
                    break;
                case 3:
                    this.topId = Utility.GetRandom(1, 6);
                    name = 'Top_' + this.topId;
                    break;
                case 4:
                    name = 'Scissors';
                    break;
                case 5:
                    name = 'Needle';
                    break;
            }
            let res = Laya.loader.getRes(WxApi.UnityPath + 'PropNode.lh');
            this.prop = Laya.Sprite3D.instantiate(res.getChildByName(name), this.propNode, false);
            this.prop.transform.localPosition = new Laya.Vector3();
            let ms = this.tips;
            Laya.Texture2D.load("res/Texture/Wz_" + (this.index + 1) + '.png', Laya.Handler.create(this, (texture) => {
                ms.meshRenderer.material.albedoTexture = texture;
            }));
            if (this.index == 0)
                this.initSkirtColor();
            if (this.index == 2)
                this.initHairColor();
            if (this.index == 3)
                this.initTopColor();
        }
        initSkirtColor() {
            this.skirtColor = PlayerDataMgr.getRandColor();
            let ms = this.prop;
            let mat = ms.meshRenderer.material;
            mat.albedoColor = Utility.d3_getRgbByHex(this.skirtColor);
        }
        initHairColor() {
            this.hairColor = PlayerDataMgr.getRandColor();
            let ms = this.prop;
            let mat = ms.meshRenderer.material;
            mat.albedoColor = Utility.d3_getRgbByHex(this.hairColor);
        }
        initTopColor() {
            this.topColor = PlayerDataMgr.getRandColor();
            let ms = this.prop;
            let mat = ms.meshRenderer.material;
            mat.albedoColor = Utility.d3_getRgbByHex(this.topColor);
        }
        onUpdate() {
            this.propNode.transform.rotate(new Laya.Vector3(0, 1, 0), true, false);
            let myPos = this.myOwner.transform.position.clone();
            let pPos = GameLogic.Share._playerCrl.myPos;
            if (Math.abs(myPos.z - pPos.z) <= 0.2 && Math.abs(myPos.x - pPos.x) <= 0.5 && Math.abs(myPos.y - pPos.y) <= 0.1) {
                switch (this.index) {
                    case 0:
                        GameLogic.Share._playerCrl.addSkirt(this.skirtColor);
                        break;
                    case 1:
                        GameLogic.Share._playerCrl.addLongSkirt();
                        break;
                    case 2:
                        GameLogic.Share._playerCrl.changeHair(this.hairId, this.hairColor);
                        break;
                    case 3:
                        GameLogic.Share._playerCrl.changeTop(this.topId, this.topColor);
                        break;
                    case 4:
                        GameLogic.Share._playerCrl.hurtCB();
                        break;
                    case 5:
                        GameLogic.Share._playerCrl.addLongSkirt(true);
                        break;
                }
                WxApi.DoVibrate();
                SoundMgr.instance.playSoundEffect('Door.mp3');
                GameLogic.Share.createCollectFX(myPos);
                this.myOwner.destroy();
            }
        }
    }

    class Scissors extends Laya.Script {
        constructor() {
            super();
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            let myPos = this.myOwner.transform.position.clone();
            let pPos = GameLogic.Share._playerCrl.myPos;
            if (Math.abs(myPos.z - pPos.z) <= 0.2 && Math.abs(myPos.x - pPos.x) <= 1 && Math.abs(myPos.y - pPos.y) <= 1 && !this.isDied) {
                WxApi.DoVibrate();
                GameLogic.Share._playerCrl.hurtCB();
                this.isDied = true;
            }
        }
    }

    class Gear extends Laya.Script {
        constructor() {
            super();
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.gear = this.myOwner.getChildAt(0);
            let ani = this.myOwner.getComponent(Laya.Animator);
            ani.speed = 0.3;
        }
        onUpdate() {
            let myPos = this.gear.transform.position.clone();
            let pPos = GameLogic.Share._playerCrl.myPos;
            if (Math.abs(myPos.z - pPos.z) <= 0.1 && Math.abs(myPos.x - pPos.x) <= 0.3 && Math.abs(myPos.y - pPos.y) <= 0.3 && !this.isDied) {
                WxApi.DoVibrate();
                GameLogic.Share._playerCrl.hurtCB();
                this.isDied = true;
            }
        }
    }

    class Fan extends Laya.Script {
        constructor() {
            super();
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            let myPos = this.myOwner.transform.position.clone();
            let pPos = GameLogic.Share._playerCrl.myPos;
            if (Math.abs(myPos.z - pPos.z) <= 1.5 && Math.abs(myPos.x - pPos.x) <= 2 && Math.abs(myPos.y - pPos.y) <= 0.2 && !this.isDied) {
                WxApi.DoVibrate();
                SoundMgr.instance.playSoundEffect('Jump.mp3');
                GameLogic.Share._playerCrl.fanJumpCB();
                this.isDied = true;
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
            this.isSelectingSkin = false;
            this._levelNode = null;
            this._player = null;
            this._playerCrl = null;
            this._roadArr = [];
            this._cylinderArr = [];
            this.roadIndex = 1;
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
                        title: '裙子快跑',
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
            this._light.shadowDistance = 10;
            this._light.shadowResolution = 1024;
            this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            this._scene.enableFog = true;
            this._scene.fogColor = new Laya.Vector3(1, 112 / 255, 221 / 255);
            this._scene.fogStart = 20;
            this._scene.fogRange = 30;
            this.camStartPos = this._camera.transform.position.clone();
            this.camStartRotation = this._camera.transform.rotation.clone();
            this._camera.fieldOfView = this.startCamField;
            this._cameraCrl = this._camera.addComponent(CameraCrl);
            this._levelNode = this._scene.addChild(new Laya.Sprite3D());
            this.createLevel();
        }
        gameStart() {
            this.isStartGame = true;
            this._playerCrl.playAni(PlayerAni.Ani_Walk);
        }
        createLevel() {
            let g = PlayerDataMgr.getPlayerData().grade;
            g = Math.floor((g - 1) % 5);
            let dataArr = PlayerDataMgr.levelDataArr[g];
            for (let i = 0; i < dataArr.length; i++) {
                let data = dataArr[i];
                let name = data.name;
                let pos = new Laya.Vector3(Number(data.position.x), Number(data.position.y), Number(data.position.z));
                let rotate = new Laya.Vector3(Number(data.rotation.x), Number(data.rotation.y), Number(data.rotation.z));
                let scale = new Laya.Vector3(Number(data.scale.x), Number(data.scale.y), Number(data.scale.z));
                this.createItem(name, pos, rotate, scale);
            }
        }
        createItem(name, pos, rot, scale) {
            let doorId = 0;
            if (name.search('Door') != -1) {
                let arr = name.split('-');
                name = arr[0];
                doorId = parseInt(arr[1]);
            }
            let res = Laya.loader.getRes(WxApi.UnityPath + 'PropNode.lh');
            let sp = Laya.Sprite3D.instantiate(res.getChildByName(name), this._levelNode, false);
            sp.active = true;
            sp.transform.position = pos;
            sp.transform.rotationEuler = rot;
            sp.transform.setWorldLossyScale(scale);
            if (name.search('Player') != -1) {
                this._player = sp;
                this._playerCrl = sp.addComponent(PlayerCrl);
            }
            else if (name.search('Road') != -1) {
                sp.addComponent(Road);
                this._roadArr.push(sp);
            }
            else if (name.search('Cylinder') != -1) {
                let crl = sp.addComponent(Cylinder);
                crl.initData(this._cylinderArr.length);
                this._cylinderArr.push(sp);
            }
            else if (name.search('Diamond') != -1) {
                sp.addComponent(Diamond);
            }
            else if (name.search('Skirt_Short') != -1) {
                let crl = sp.addComponent(Skirt);
                crl.initColor(PlayerDataMgr.getRandColor());
            }
            else if (name.search('Door') != -1) {
                let crl = sp.addComponent(Door);
                crl.initData(doorId);
            }
            else if (name.search('Scissors_lowpoly') != -1) {
                sp.addComponent(Scissors);
            }
            else if (name.search('Gear') != -1) {
                sp.addComponent(Gear);
            }
            else if (name.search('Fan') != -1) {
                sp.addComponent(Fan);
            }
        }
        createDiamondFX(pos) {
            let name = 'Diamonds_FX';
            let res = Laya.loader.getRes(WxApi.UnityPath + 'PropNode.lh');
            let sp = Laya.Sprite3D.instantiate(res.getChildByName(name), this._levelNode, false);
            sp.transform.position = pos;
            Laya.timer.once(1000, this, () => { sp.destroy(); });
        }
        createCollectFX(pos) {
            let name = 'Collect_FX';
            let res = Laya.loader.getRes(WxApi.UnityPath + 'PropNode.lh');
            let sp = Laya.Sprite3D.instantiate(res.getChildByName(name), this._levelNode, false);
            sp.transform.position = pos;
            Laya.timer.once(1000, this, () => { sp.destroy(); });
        }
        gameOver(isWin) {
            if (this.isGameOver)
                return;
            if (isWin) {
                SoundMgr.instance.playSoundEffect('Win.mp3');
            }
            else {
                SoundMgr.instance.playSoundEffect('Lose.mp3');
            }
            WxApi.DoVibrate(false);
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
            this._roadArr = [];
            this._cylinderArr = [];
            this.roadIndex = 1;
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
            this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString();
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
            this.maxGrade = 5;
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            if (!Laya.Browser.onWeiXin) {
                localStorage.clear();
            }
            FdMgr.init(() => {
                this.loadJsonData(1);
            });
            Laya.timer.frameLoop(1, this, () => {
                this.bar.value += 0.01;
            });
        }
        onClosed() {
        }
        loadJsonData(index) {
            Utility.loadJson('res/configs/Level' + index + '.json', (data) => {
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
            icon.skin = 'skinUI/Skirt/Skirt_' + (index + 1) + '.png';
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
            GameLogic.Share._playerCrl.changeFirstSkirt(id);
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
            GameLogic.Share._playerCrl.changeFirstSkirt(id);
            PlayerDataMgr.getPlayerData().coin -= PlayerDataMgr.getCostById(id);
            PlayerDataMgr.getPlayerData().skinArr[id] = 1;
            PlayerDataMgr.getPlayerData().skinId = id;
            PlayerDataMgr.setPlayerData();
            this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
        }
        adBtnCB(arr) {
            let id = arr[0];
            let cb = () => {
                this.chooseId = id;
                GameLogic.Share._playerCrl.changeFirstSkirt(id);
                PlayerDataMgr.getPlayerData().skinArr[id] = 1;
                PlayerDataMgr.getPlayerData().skinId = id;
                PlayerDataMgr.setPlayerData();
                this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
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
            SoundMgr.instance.playMusic('Bgm.mp3');
            FdMgr.inHomePage();
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
            reg("Libs/FixNodeY.ts", FixNodeY);
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
