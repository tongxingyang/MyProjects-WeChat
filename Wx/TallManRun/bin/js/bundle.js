(function () {
    'use strict';

    class PlayerData {
        constructor() {
            this.grade = 1;
            this.skinArr = [1, 0, 0, 0, 0, 0];
            this.skinId = 0;
            this.coin = 0;
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
        static changeCoin(v) {
            this._playerData.coin += v;
            this.setPlayerData();
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
                    return 500;
                case 3:
                    return 600;
                case 4:
                    return 600;
                case 5:
                    return 600;
            }
        }
    }
    PlayerDataMgr._playerData = null;
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
                { url: 'res/Sounds/bgm.mp3', type: Laya.Loader.SOUND }
            ];
            Laya.loader.load(resUrl, Laya.Handler.create(this, fun));
            Laya.SoundManager.setMusicVolume(1);
            Laya.SoundManager.setSoundVolume(1);
        }
        playMusic(str, loops = 0, cb) {
            Laya.SoundManager.playMusic('res/Sounds/' + str + '.mp3', loops, new Laya.Handler(this, cb));
        }
        stopMusic() {
            Laya.SoundManager.stopMusic();
        }
        playSoundEffect(str, loops = 1, cb, soundClass, startTime) {
            return Laya.SoundManager.playSound('res/Sounds/' + str + '.mp3', loops, new Laya.Handler(this, cb), soundClass, startTime);
        }
        stopSound(str) {
            Laya.SoundManager.stopSound('res/Sounds/' + str + '.mp3');
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
            }, duration, ease, Laya.Handler.create(this, () => {
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
        static ScaleTo(node, duration, des, cb) {
            var rotationOld = node.transform.localScale;
            Laya.Tween.to(node.transform.localScale, {
                x: des.x,
                y: des.y,
                z: des.z,
                update: new Laya.Handler(this, function () {
                    if (node)
                        node.transform.localScale = rotationOld;
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
                    SoundMgr.instance.playSoundEffect('Click');
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
        moveToBoss() {
            let bossPos = GameLogic.Share._boss.transform.position.clone();
            bossPos.y = 25;
            Utility.TmoveTo(this.myOwner, 2000, bossPos, null);
            let myEr = this.myOwner.transform.rotationEuler.clone();
            myEr.x = -90;
            Utility.RotateTo(this.myOwner, 3000, myEr, null);
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) {
                return;
            }
            let pos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            myPos.y = pos.y + 4.76;
            myPos.z = pos.z - 8;
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos);
            this.myOwner.transform.position = myPos;
        }
    }

    var PlayerAniType;
    (function (PlayerAniType) {
        PlayerAniType["ANI_IDLE"] = "idle";
        PlayerAniType["ANI_FLYING"] = "flying";
        PlayerAniType["ANI_FLYINGKICK"] = "flyingkick";
        PlayerAniType["ANI_JUMPSTART"] = "jump_start";
        PlayerAniType["ANI_JUMPFALL"] = "jump_fall";
        PlayerAniType["ANI_RUN"] = "run";
        PlayerAniType["ANI_SPRINT"] = "sprint";
    })(PlayerAniType || (PlayerAniType = {}));

    class Effects {
        static createBoom1(pos) {
            let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_1'), GameLogic.Share._levelNode, false);
            fx.transform.position = pos;
            Laya.timer.once(1000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createPurple(pos) {
            let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_2_Purple'), GameLogic.Share._levelNode, false);
            fx.transform.position = pos;
            Laya.timer.once(500, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createGreen(pos) {
            let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_2_Green'), GameLogic.Share._levelNode, false);
            fx.transform.position = pos;
            Laya.timer.once(500, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createOrange(pos) {
            let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_2_Orange'), GameLogic.Share._levelNode, false);
            fx.transform.position = pos;
            Laya.timer.once(500, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createBoom4(pos) {
            let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_4'), GameLogic.Share._levelNode, false);
            fx.transform.position = pos;
            fx.transform.setWorldLossyScale(new Laya.Vector3(2, 2, 2));
            Laya.timer.once(1500, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createFireWork(pos) {
            let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Fireworks_1'), GameLogic.Share._levelNode, false);
            fx.transform.position = pos;
        }
    }

    class PlayerCrl extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.hatNode = null;
            this.Bones_L_Forearm = null;
            this.Bones_L_UpperArm = null;
            this.Bones_L_Clavicle = null;
            this.Bones_R_Forearm = null;
            this.Bones_R_UpperArm = null;
            this.Bones_R_Clavicle = null;
            this.Bones_Pelvis = null;
            this.Bones_L_Calf = null;
            this.Bones_L_Thigh = null;
            this.Bones_R_Calf = null;
            this.Bones_R_Thigh = null;
            this.Bones_Spine = null;
            this.Dummy_Head_Vertex = null;
            this.Dummy001 = null;
            this.Dummy_Arm001 = null;
            this.Dummy_Arm002 = null;
            this.touchX = 0;
            this.speed = 0.1;
            this.edgeMax = 3;
            this.tempSpeed = 0;
            this.scaleH = 1;
            this.maxH = 10;
            this.scaleV = 1;
            this.maxV = 15;
            this.HArr = [];
            this.isJumping = false;
            this.canMove = true;
            this.curAniName = "";
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.myOwner.getComponent(Laya.Animator);
            this.hatNode = Utility.findNodeByName(this.myOwner, 'Dummy_Head');
            this.Bones_L_Forearm = Utility.findNodeByName(this.myOwner, 'Bones_L_Forearm');
            this.Bones_L_UpperArm = Utility.findNodeByName(this.myOwner, 'Bones_L_UpperArm');
            this.Bones_L_Clavicle = Utility.findNodeByName(this.myOwner, 'Bones_L_Clavicle');
            this.Bones_R_Forearm = Utility.findNodeByName(this.myOwner, 'Bones_R_Forearm');
            this.Bones_R_UpperArm = Utility.findNodeByName(this.myOwner, 'Bones_R_UpperArm');
            this.Bones_R_Clavicle = Utility.findNodeByName(this.myOwner, 'Bones_R_Clavicle');
            this.Bones_Pelvis = Utility.findNodeByName(this.myOwner, 'Bones_Pelvis');
            this.Bones_L_Calf = Utility.findNodeByName(this.myOwner, 'Bones_L_Calf');
            this.Bones_L_Thigh = Utility.findNodeByName(this.myOwner, 'Bones_L_Thigh');
            this.Bones_R_Calf = Utility.findNodeByName(this.myOwner, 'Bones_R_Calf');
            this.Bones_R_Thigh = Utility.findNodeByName(this.myOwner, 'Bones_R_Thigh');
            this.Bones_Spine = Utility.findNodeByName(this.myOwner, 'Bones_Spine');
            this.Dummy_Head_Vertex = Utility.findNodeByName(this.myOwner, 'Dummy_Head_Vertex');
            this.Dummy001 = Utility.findNodeByName(this.myOwner, 'Dummy001');
            this.Dummy_Arm001 = Utility.findNodeByName(this.myOwner, 'Dummy_Arm001');
            this.Dummy_Arm002 = Utility.findNodeByName(this.myOwner, 'Dummy_Arm002');
            this.HArr = [
                this.Bones_L_Forearm, this.Bones_L_UpperArm, this.Bones_L_Clavicle,
                this.Bones_R_Forearm, this.Bones_R_UpperArm, this.Bones_R_Clavicle,
                this.Bones_L_Calf, this.Bones_L_Thigh, this.Bones_R_Calf, this.Bones_R_Thigh, this.Bones_Spine, this.Dummy_Arm001, this.Dummy_Arm002
            ];
            this.playAni(PlayerAniType.ANI_IDLE);
            this.init();
        }
        init() {
            this.changeSkin(PlayerDataMgr.getPlayerData().skinId);
        }
        changeSkin(id) {
            let dir = "res/Heros/Hero_" + (id + 1) + ".jpg";
            Laya.Texture2D.load(dir, Laya.Handler.create(this, (texture) => {
                let ms = this.myOwner.getChildAt(0);
                ms.skinnedMeshRenderer.material.albedoTexture = texture;
                let ms1 = this.myOwner.getChildAt(1);
                ms1.skinnedMeshRenderer.material.albedoTexture = texture;
                let ms2 = this.myOwner.getChildAt(3);
                ms2.skinnedMeshRenderer.material.albedoTexture = texture;
                let ms3 = Utility.findNodeByName(this.myOwner, 'Head');
                ms3.meshRenderer.material.albedoTexture = texture;
            }));
            for (let i = 0; i < 5; i++) {
                let hat = this.hatNode.getChildAt(i);
                hat.active = id > 0 && i + 1 == id;
            }
        }
        startRun() {
            this.myOwner.transform.position = new Laya.Vector3(0, 0, 0);
            this.myOwner.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
            this.playAni(PlayerAniType.ANI_RUN);
        }
        playAni(name, speed = 1, normalizedTime = 0) {
            if (name == this.curAniName)
                return;
            this._ani.crossFade(name, 0.2, 0, normalizedTime);
            this._ani.speed = speed;
            this.curAniName = name;
        }
        moveX() {
            if (GameLogic.Share.isGameOver || !this.canMove)
                return;
            let speed = this.speed + this.tempSpeed;
            let pos = new Laya.Vector3(0, 0, speed);
            this.myOwner.transform.translate(pos, false);
            let x = this.touchX;
            x -= Laya.stage.displayWidth / 2;
            x = x / (Laya.stage.displayWidth / 2) * this.edgeMax;
            pos = this.myOwner.transform.position.clone();
            pos.x = -x;
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.2, pos);
            this.myOwner.transform.position = pos;
        }
        hurtCB(type) {
        }
        jump() {
            this.isJumping = true;
            this.playAni(PlayerAniType.ANI_JUMPSTART);
            Laya.timer.once(200, this, () => { this.playAni(PlayerAniType.ANI_FLYING); });
            let myPos = this.myOwner.transform.position.clone();
            let p1 = myPos.clone();
            p1.z += 5;
            p1.y += 8;
            let p2 = myPos.clone();
            p2.z += 10;
            p2.y = 0;
            Utility.TmoveToYZ(this.myOwner, 800, p1, () => {
                Utility.TmoveToYZ(this.myOwner, 800, p2, () => {
                    this.playAni(PlayerAniType.ANI_RUN);
                    this.isJumping = false;
                }, Laya.Ease.sineIn);
            }, Laya.Ease.sineInOut);
        }
        changeV(type, v) {
            switch (type) {
                case '+':
                    v /= 15;
                    this.scaleV += v;
                    break;
                case '-':
                    v /= 15;
                    this.scaleV -= v;
                    break;
                case '*':
                    this.scaleV *= v;
                    break;
                case '/':
                    this.scaleV /= v;
                    break;
            }
            if (this.scaleV < 0)
                this.scaleV = 0;
            if (this.scaleV > this.maxV)
                this.scaleV = this.maxV;
        }
        changeH(type, v) {
            switch (type) {
                case '+':
                    v /= 15;
                    this.scaleH += v;
                    break;
                case '-':
                    v /= 15;
                    this.scaleH -= v;
                    break;
                case '*':
                    this.scaleH *= v;
                    break;
                case '/':
                    this.scaleH /= v;
                    break;
            }
            if (this.scaleH < 0)
                this.scaleH = 0;
            if (this.scaleH > this.maxH)
                this.scaleH = this.maxH;
        }
        decHV(v = 0.4) {
            if (this.scaleV > 1) {
                this.scaleV -= v;
            }
            else {
                this.scaleH -= v;
            }
            if (this.scaleH < 0) {
                this.scaleH = 0;
                this._ani.speed = 0;
                GameLogic.Share._bossCrl.playAni('win');
                this.diedCB();
                GameLogic.Share.gameOver(true);
            }
            if (this.scaleV < 0) {
                this.scaleV = 0;
            }
        }
        diedCB() {
            let myPos = this.myOwner.transform.position.clone();
            let x = Math.random() * 4 - 2;
            myPos.x = x;
            myPos.z += (Math.random() * 10 + 5);
            Utility.TmoveTo(this.myOwner, 1500, myPos, null);
            let r = new Laya.Vector3();
            r.x = Math.random() * 720 + 360;
            r.z = Math.random() * 720 + 360;
            Utility.RotateTo(this.myOwner, 1500, r, null);
        }
        updateScaleH() {
            let s = new Laya.Vector3(1, this.scaleH, this.scaleH);
            for (let i = 0; i < this.HArr.length; i++) {
                let node = this.HArr[i];
                if (node == this.Bones_Spine)
                    s = new Laya.Vector3(1, this.scaleH * 1.5, this.scaleH * 1.5);
                if (node == this.Bones_R_Calf || node == this.Bones_R_Thigh || node == this.Dummy_Arm001) {
                    let sh = this.scaleH * 0.03;
                    let myP = node.transform.localPosition.clone();
                    let desP = myP.clone();
                    desP.z = sh;
                    Laya.Vector3.lerp(myP, desP, 0.1, desP);
                    node.transform.localPosition = desP;
                    if (node == this.Dummy_Arm001)
                        continue;
                }
                else if (node == this.Bones_L_Calf || node == this.Bones_L_Thigh || node == this.Dummy_Arm002) {
                    let sh = this.scaleH * 0.03;
                    let myP = node.transform.localPosition.clone();
                    let desP = myP.clone();
                    desP.z = -sh;
                    Laya.Vector3.lerp(myP, desP, 0.1, desP);
                    node.transform.localPosition = desP;
                    if (node == this.Dummy_Arm002)
                        continue;
                }
                let desS = new Laya.Vector3();
                let myS = node.transform.localScale.clone();
                Laya.Vector3.lerp(myS, s, 0.1, desS);
                node.transform.localScale = desS;
            }
            s = new Laya.Vector3(this.scaleH, this.scaleH, this.scaleH * 0.6);
            let desS = new Laya.Vector3();
            let myS = this.Bones_Pelvis.transform.localScale.clone();
            Laya.Vector3.lerp(myS, s, 0.1, desS);
            this.Bones_Pelvis.transform.localScale = desS;
        }
        updateScaleV() {
            let s = new Laya.Vector3(this.scaleV, 1, 1);
            let desS = new Laya.Vector3();
            let myS = this.Bones_Spine.transform.localScale.clone();
            Laya.Vector3.lerp(myS, s, 0.1, desS);
            this.Bones_Spine.transform.localScale = desS;
            let headPos = this.Dummy001.transform.position.clone();
            this.Dummy_Head_Vertex.transform.position = headPos;
        }
        walkFinish() {
            GameLogic.Share.isFinish = true;
            let myPos = this.myOwner.transform.position.clone();
            myPos.x = 0;
            myPos.z = GameLogic.Share._roadFinish.transform.position.z + 3.5;
            Utility.TmoveTo(this.myOwner, 500, myPos, () => {
                this.jumpToDes();
            });
            let p1 = GameLogic.Share._roadFinish.transform.position.clone();
            p1.x = 1;
            p1.z += 2;
            let p2 = GameLogic.Share._roadFinish.transform.position.clone();
            p2.x = -1;
            p2.z += 2;
            Effects.createFireWork(p1);
            Effects.createFireWork(p2);
        }
        jumpToDes() {
            SoundMgr.instance.playSoundEffect('spring');
            this.playAni(PlayerAniType.ANI_JUMPSTART);
            Laya.timer.once(200, this, () => { this.playAni(PlayerAniType.ANI_FLYING); });
            let myPos = this.myOwner.transform.position.clone();
            let p1 = myPos.clone();
            p1.z += 20;
            p1.y += 10;
            let p2 = GameLogic.Share._roadFinish2.transform.position.clone();
            Utility.TmoveToYZ(this.myOwner, 1500, p1, () => {
                Utility.TmoveToYZ(this.myOwner, 800, p2, () => {
                    SoundMgr.instance.playSoundEffect('land');
                    this.playAni(PlayerAniType.ANI_SPRINT);
                    Laya.timer.frameLoop(1, this, this.rushToBoss);
                }, Laya.Ease.sineIn);
            }, Laya.Ease.sineInOut);
            let r = GameLogic.Share._camera.transform.rotationEuler.clone();
            r.y += 15;
            Utility.RotateTo(GameLogic.Share._camera, 1000, r, null);
            let p = GameLogic.Share._camera.transform.position.clone();
            p.x -= 3;
            Utility.TmoveToX(GameLogic.Share._camera, 1000, p, null);
        }
        rushToBoss() {
            if (GameLogic.Share.isGameOver)
                return;
            let speed = this.speed * 2;
            let pos = new Laya.Vector3(0, 0, speed);
            this.myOwner.transform.translate(pos, false);
            let j = GameLogic.Share._roadFinish2.getChildAt(1);
            if (this.myOwner.transform.position.z >= j.transform.position.z) {
                Laya.timer.clear(this, this.rushToBoss);
                this.jumpToBoss();
            }
        }
        jumpToBoss() {
            SoundMgr.instance.playSoundEffect('spring');
            GameLogic.Share.isGameOver = true;
            GameLogic.Share._cameraCrl.moveToBoss();
            this.playAni(PlayerAniType.ANI_FLYINGKICK, 0.15);
            let bossPos = GameLogic.Share._boss.transform.position.clone();
            bossPos.y = 14;
            bossPos.z -= 1.5;
            Utility.TmoveTo(this.myOwner, 2300, bossPos, () => {
                SoundMgr.instance.playSoundEffect('boss');
                Effects.createBoom4(new Laya.Vector3(bossPos.x, bossPos.y, bossPos.z + 1.5));
                GameLogic.Share._bossCrl.playAni('die', 0.2);
                let myPos = this.myOwner.transform.position.clone();
                myPos.y = 0;
                Laya.timer.once(1000, this, () => {
                    this._ani.speed = 0.5;
                    Utility.TmoveTo(this.myOwner, 2000, myPos, null);
                    GameLogic.Share.gameOver(true);
                });
            });
        }
        onUpdate() {
            this.updateScaleH();
            this.updateScaleV();
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isFinish) {
                return;
            }
            this.moveX();
            if (this.myOwner.transform.position.z >= GameLogic.Share._roadFinish.transform.position.z) {
                this.walkFinish();
            }
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
                    backBtn.bottom = 250;
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

    class Boss extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
            this.curAniName = "";
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.myOwner.getComponent(Laya.Animator);
            this.init();
        }
        init() {
        }
        playAni(name, speed = 1, normalizedTime = 0) {
            this._ani.crossFade(name, 0.2, 0, normalizedTime);
            this._ani.speed = speed;
            this.curAniName = name;
        }
        hitCB() {
        }
        dieCB() {
        }
        onUpdate() {
        }
    }

    class Hurdle extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.type = 1;
            this.num = '';
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        init(type, num) {
            this.type = type;
            this.num = num;
            let typeNode = this.myOwner.getChildByName('Hurdle_Word_1');
            let num1 = this.myOwner.getChildByName('Hurdle_Num_1');
            let num2 = this.myOwner.getChildByName('Hurdle_Num_2');
            let num3 = this.myOwner.getChildByName('Hurdle_Num_3');
            let gate = this.myOwner.getChildByName('Hurdle_Gate_1');
            let isInc = num.substring(0, 1) == '+' || num.substring(0, 1) == '*';
            (typeNode.meshRenderer.material).tilingOffset = new Laya.Vector4(1, 1, isInc ? 0 : 0.5, type == 1 ? 0 : 0.8);
            let z = 0;
            let w = 0;
            switch (num.substring(0, 1)) {
                case '+':
                    z = 0.5;
                    w = 0.5;
                    break;
                case '-':
                    z = 0.75;
                    w = 0.5;
                    break;
                case '*':
                    z = 0;
                    w = 0.25;
                    break;
                case '/':
                    z = 0.25;
                    w = 0.25;
                    break;
            }
            (num1.meshRenderer.material).tilingOffset = new Laya.Vector4(1, 1, z, w);
            let intNum = parseInt(num.substring(1, 2));
            (num2.meshRenderer.material).tilingOffset =
                new Laya.Vector4(1, 1, Math.floor(intNum % 4) * 0.25, Math.floor(intNum / 4) * -0.25);
            if (num.substring(2) == '.') {
                (num3.meshRenderer.material).tilingOffset = new Laya.Vector4(1, 1, 0.75, 0.25);
                num1.transform.translate(new Laya.Vector3(-0.5, 0, 0), false);
                num2.transform.translate(new Laya.Vector3(-0.5, 0, 0), false);
            }
            else {
                let intNum1 = parseInt(num.substring(2));
                (num3.meshRenderer.material).tilingOffset =
                    new Laya.Vector4(1, 1, Math.floor(intNum1 % 4) * 0.25, Math.floor(intNum1 / 4) * -0.25);
            }
            if (!isInc) {
                (gate.meshRenderer.material) = (gate.meshRenderer.materials)[1];
            }
        }
        onUpdate() {
            let myPos = this.myOwner.transform.position.clone();
            let pPos = GameLogic.Share._player.transform.position.clone();
            if (Math.abs(myPos.x - pPos.x) <= 1.5 && Math.abs(myPos.z - pPos.z) <= 0.1) {
                WxApi.DoVibrate();
                let eP = myPos.clone();
                eP.z += 0.5;
                Effects.createBoom1(eP);
                if (this.num.substring(2) == '.')
                    this.num.replace('.', '');
                if (this.type == 1) {
                    if (this.num.substring(0, 1) == '+' || this.num.substring(0, 1) == '*')
                        SoundMgr.instance.playSoundEffect('green');
                    if (this.num.substring(0, 1) == '-' || this.num.substring(0, 1) == '/')
                        SoundMgr.instance.playSoundEffect('red');
                    GameLogic.Share._playerCrl.changeV(this.num.substring(0, 1), parseInt(this.num.substring(1)));
                }
                else {
                    if (this.num.substring(0, 1) == '+' || this.num.substring(0, 1) == '*')
                        SoundMgr.instance.playSoundEffect('green');
                    if (this.num.substring(0, 1) == '-' || this.num.substring(0, 1) == '/')
                        SoundMgr.instance.playSoundEffect('red');
                    GameLogic.Share._playerCrl.changeH(this.num.substring(0, 1), parseInt(this.num.substring(1)));
                }
                this.myOwner.destroy();
            }
        }
    }

    class Jumper extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            if (!this.isDied) {
                if (Utility.getWorldDis(this.myOwner, GameLogic.Share._player) <= 1) {
                    WxApi.DoVibrate();
                    SoundMgr.instance.playSoundEffect('spring');
                    GameLogic.Share._playerCrl.jump();
                    this.isDied = true;
                }
            }
        }
    }

    class Diamond extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            if (!this.isDied) {
                if (Utility.getWorldDis(this.myOwner, GameLogic.Share._player) <= 1) {
                    WxApi.DoVibrate();
                    SoundMgr.instance.playSoundEffect('diamond');
                    Effects.createPurple(this.myOwner.transform.position.clone());
                    PlayerDataMgr.changeCoin(5);
                    this.isDied = true;
                    this.myOwner.destroy();
                    return;
                }
                let myPos = this.myOwner.transform.position.clone();
                let pPos = GameLogic.Share._player.transform.position.clone();
                if (myPos.y < GameLogic.Share._playerCrl.Dummy001.transform.position.y + 0.5) {
                    myPos.y = 0;
                    pPos.y = 0;
                    if (Laya.Vector3.distance(pPos, myPos) <= 1) {
                        WxApi.DoVibrate();
                        SoundMgr.instance.playSoundEffect('diamond');
                        Effects.createPurple(this.myOwner.transform.position.clone());
                        this.isDied = true;
                        this.myOwner.destroy();
                        PlayerDataMgr.changeCoin(5);
                    }
                }
            }
        }
    }

    class Obstacle1 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            if (!this.isDied && !GameLogic.Share.isGameOver) {
                let myPos = this.myOwner.transform.position.clone();
                let pPos = GameLogic.Share._player.transform.position.clone();
                if (Math.abs(myPos.x - pPos.x) <= 1 && Math.abs(myPos.z - pPos.z) <= 0.2) {
                    SoundMgr.instance.playSoundEffect('hurt');
                    WxApi.DoVibrate();
                    Effects.createPurple(this.myOwner.transform.position.clone());
                    let x = Math.random() >= 0.5 ? Math.random() * 2 + 3.5 : -(Math.random() * 2 + 3.5);
                    myPos.x = x;
                    myPos.z += (Math.random() * 10 + 10);
                    Utility.TmoveTo(this.myOwner, 1500, myPos, null);
                    let r = new Laya.Vector3();
                    r.x = Math.random() * 720 + 360;
                    r.y = Math.random() * 720 + 360;
                    r.z = Math.random() * 720 + 360;
                    Utility.RotateTo(this.myOwner, 1500, r, null);
                    this.isDied = true;
                    if (!GameLogic.Share.isFinish)
                        GameLogic.Share._playerCrl.decHV(1);
                    else
                        GameLogic.Share._playerCrl.decHV();
                }
            }
            else {
                let myPos = this.myOwner.transform.position.clone();
                if ((myPos.x > 3.5 || myPos.x < -3.5) && this.myOwner.transform.position.y > -5) {
                    this.myOwner.transform.translate(new Laya.Vector3(0, -0.2, 0), false);
                }
            }
        }
    }

    class Obstacle2 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            if (!this.isDied) {
                let myPos = this.myOwner.transform.position.clone();
                let pPos = GameLogic.Share._player.transform.position.clone();
                if (Math.abs(myPos.z - pPos.z) <= 0.1 && GameLogic.Share._playerCrl.scaleV > 1.7 && !GameLogic.Share._playerCrl.isJumping) {
                    Effects.createPurple(new Laya.Vector3(pPos.x, 2, pPos.z));
                    this.isDied = true;
                    WxApi.DoVibrate();
                    SoundMgr.instance.playSoundEffect('hurt');
                    GameLogic.Share._playerCrl.decHV(1);
                }
            }
        }
    }

    class MoveLR extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isLeft = true;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            if (this.isLeft) {
                this.myOwner.transform.translate(new Laya.Vector3(0.03, 0, 0), false);
                if (this.myOwner.transform.position.x > 1.5)
                    this.isLeft = false;
            }
            else {
                this.myOwner.transform.translate(new Laya.Vector3(-0.03, 0, 0), false);
                if (this.myOwner.transform.position.x < -1.5)
                    this.isLeft = true;
            }
        }
    }

    class Obstacle3 extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            let x = this.myOwner.transform.position.x;
            this.myOwner.transform.rotate(new Laya.Vector3(0, x > 0 ? 1 : -1, 0), false, false);
            if (!this.isDied && GameLogic.Share._playerCrl.scaleV > 1.7) {
                for (let i = 0; i < this.myOwner.numChildren; i++) {
                    let p = this.myOwner.getChildAt(i);
                    let myPos = p.transform.position.clone();
                    let pPos = GameLogic.Share._player.transform.position.clone();
                    myPos.y = 0;
                    pPos.y = 0;
                    if (Laya.Vector3.distance(pPos, myPos) <= 0.5) {
                        WxApi.DoVibrate();
                        Effects.createPurple(myPos.clone());
                        SoundMgr.instance.playSoundEffect('hurt');
                        this.isDied = true;
                        GameLogic.Share._playerCrl.decHV(1);
                    }
                }
            }
        }
    }

    class Enemy extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
            this.curAniName = "";
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.myOwner.getComponent(Laya.Animator);
            this.playAni('idle');
        }
        playAni(name, speed = 1, normalizedTime = 0) {
            if (name == this.curAniName)
                return;
            this._ani.crossFade(name, 0.2, 0, normalizedTime);
            this._ani.speed = speed;
            this.curAniName = name;
        }
        hitCB() {
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            myPos.z += 15;
            Utility.TmoveTo(this.myOwner, 800, myPos, null, Laya.Ease.linearIn);
        }
        onUpdate() {
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            if (!this.isDied && !GameLogic.Share.isGameOver && !GameLogic.Share.isFinish) {
                if (Laya.Vector3.distance(playerPos, myPos) <= 1) {
                    this.playAni('die');
                    GameLogic.Share._playerCrl.decHV(1);
                    SoundMgr.instance.playSoundEffect('hit');
                    WxApi.DoVibrate();
                    this.isDied = true;
                    this.hitCB();
                    return;
                }
            }
            if (Math.abs(myPos.z - playerPos.z) <= 7 && !this.isDied) {
                this.playAni('walk');
                this.myOwner.transform.lookAt(playerPos, new Laya.Vector3(0, 1, 0));
                let myR = this.myOwner.transform.localRotationEuler.clone();
                myR.y += 180;
                this.myOwner.transform.localRotationEuler = myR;
                let dir = new Laya.Vector3();
                Laya.Vector3.subtract(playerPos, myPos, dir);
                Laya.Vector3.normalize(dir, dir);
                Laya.Vector3.scale(dir, 0.05, dir);
                this.myOwner.transform.translate(dir, false);
            }
        }
    }

    class Arrow extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.type = 1;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        init(type) {
            this.type = type;
        }
        onUpdate() {
            this.myOwner.transform.rotate(new Laya.Vector3(0, 1, 0), false, false);
            if (!this.isDied) {
                if (Utility.getWorldDis(this.myOwner, GameLogic.Share._player) <= 1.5) {
                    WxApi.DoVibrate();
                    switch (this.type) {
                        case 1:
                            SoundMgr.instance.playSoundEffect('green');
                            GameLogic.Share._playerCrl.changeV('+', 10);
                            Effects.createGreen(this.myOwner.transform.position.clone());
                            break;
                        case 2:
                            SoundMgr.instance.playSoundEffect('red');
                            GameLogic.Share._playerCrl.changeV('-', 10);
                            Effects.createOrange(this.myOwner.transform.position.clone());
                            break;
                        case 3:
                            SoundMgr.instance.playSoundEffect('green');
                            GameLogic.Share._playerCrl.changeH('+', 10);
                            Effects.createGreen(this.myOwner.transform.position.clone());
                            break;
                        case 4:
                            SoundMgr.instance.playSoundEffect('red');
                            Effects.createPurple(this.myOwner.transform.position.clone());
                            GameLogic.Share._playerCrl.changeH('-', 10);
                            break;
                    }
                    this.isDied = true;
                    this.myOwner.destroy();
                    return;
                }
            }
        }
    }

    class FinishStep extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            if (!this.isDied) {
                let myPos = this.myOwner.transform.position.clone();
                let pPos = GameLogic.Share._player.transform.position.clone();
                if (myPos.z < pPos.z) {
                    this.isDied = true;
                    let sp = this.myOwner;
                    let mat = sp.meshRenderer.material;
                    mat.albedoColor = new Laya.Vector4(1, 1, 1, 1);
                    mat.albedoIntensity = 4;
                }
            }
        }
    }

    class GameLogic {
        constructor() {
            this.camStartPos = new Laya.Vector3(0, 0, 0);
            this.camStartRotation = null;
            this._cameraCrl = null;
            this.startCamField = 70;
            this.isStartGame = false;
            this.isGameOver = false;
            this.isWin = false;
            this.isPause = false;
            this.isFinish = false;
            this._levelNode = null;
            this._player = null;
            this._boss = null;
            this._playerCrl = null;
            this._bossCrl = null;
            this._roadFinish = null;
            this._roadFinish2 = null;
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
                        title: '高个子快冲',
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
            this._light.shadowDistance = 25;
            this._light.shadowResolution = 1024;
            this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            this._light.shadowNormalBias = 0;
            this.camStartPos = this._camera.transform.position.clone();
            this.camStartRotation = this._camera.transform.rotation.clone();
            this._camera.fieldOfView = this.startCamField;
            this._cameraCrl = this._camera.addComponent(CameraCrl);
            this._levelNode = this._scene.addChild(new Laya.Sprite3D());
            this.createLevel();
        }
        gameStart() {
            this.isStartGame = true;
            this._playerCrl.startRun();
        }
        getItemByName(name) {
            let res = Laya.loader.getRes(WxApi.UnityPath + 'ItemNode.lh');
            return res.getChildByName(name);
        }
        createPlayer() {
            this._player = Laya.Sprite3D.instantiate(this.getItemByName('Hero'), this._levelNode, false);
            this._player.transform.position = new Laya.Vector3(0, 0, 0);
            this._playerCrl = this._player.addComponent(PlayerCrl);
        }
        createLevel() {
            this.createPlayer();
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
            let dirName = name;
            if (name.search('Hurdle') != -1) {
                dirName = 'Hurdle';
            }
            else if (name.search('Jump1') != -1) {
                dirName = 'Jump1';
            }
            else if (name.search('Jump2') != -1) {
                dirName = 'Jump2';
            }
            else if (name.search('Boss') != -1) {
                dirName = 'Boss';
            }
            let sp = Laya.Sprite3D.instantiate(this.getItemByName(dirName), this._levelNode, false, new Laya.Vector3());
            sp.transform.position = pos;
            sp.transform.rotationEuler = rot;
            sp.transform.setWorldLossyScale(scale);
            if (name.search('Hurdle') != -1) {
                let crl = sp.addComponent(Hurdle);
                crl.init(parseInt(name.substring(0, 1)), name.substring(1, 4));
                if (name.search('Move') != -1) {
                    sp.addComponent(MoveLR);
                }
            }
            else if (name.search('Jump1') != -1) {
                sp.addComponent(Jumper);
            }
            else if (name.search('Diamond') != -1) {
                sp.addComponent(Diamond);
            }
            else if (name.search('Obstacle_1') != -1) {
                sp.addComponent(Obstacle1);
            }
            else if (name.search('Obstacle_2') != -1) {
                sp.addComponent(Obstacle2);
            }
            else if (name.search('Obstacle_3') != -1) {
                sp.addComponent(Obstacle3);
            }
            else if (name.search('Finish_1') != -1) {
                this._roadFinish = sp;
            }
            else if (name.search('Finish_2') != -1) {
                this._roadFinish2 = sp;
                for (let i = 3; i < sp.numChildren; i++) {
                    let node = sp.getChildAt(i).getChildAt(2);
                    node.addComponent(Obstacle1);
                    sp.getChildAt(i).getChildAt(0).addComponent(FinishStep);
                }
                this.createDiamond();
            }
            else if (name.search('Boss') != -1 && name.search('Enemy') < 0) {
                this._boss = sp;
                this._bossCrl = this._boss.addComponent(Boss);
            }
            else if (name.search('Enemy') != -1) {
                sp.addComponent(Enemy);
            }
            else if (name.search('Arrow_Up') != -1) {
                let crl = sp.addComponent(Arrow);
                crl.init(1);
            }
            else if (name.search('Arrow_Down') != -1) {
                let crl = sp.addComponent(Arrow);
                crl.init(2);
            }
            else if (name.search('Arrow_Outside') != -1) {
                let crl = sp.addComponent(Arrow);
                crl.init(3);
            }
            else if (name.search('Arrow_Entad') != -1) {
                let crl = sp.addComponent(Arrow);
                crl.init(4);
            }
        }
        createDiamond() {
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 3; j++) {
                    let sp = Laya.Sprite3D.instantiate(this.getItemByName('Diamond'), this._levelNode, false, new Laya.Vector3());
                    let pos = this._roadFinish2.getChildAt(i + 3).transform.position.clone();
                    pos.y = 2 + j;
                    pos.z += 1;
                    sp.transform.position = pos;
                    sp.addComponent(Diamond);
                }
            }
        }
        finish() {
            this.isFinish = true;
        }
        gameOver(isWin) {
            Laya.timer.clearAll(this);
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
            this.adPic.visible = false;
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
            Utility.addClickEvent(this.nextBtn, this, this.closeCB);
            Utility.addClickEvent(this.adBtn, this, this.adBtnCB);
            FdMgr.inFinish(this.nextBtn);
        }
        onClosed() {
        }
        adBtnCB() {
            let cb = () => {
                PlayerDataMgr.getPlayerData().coin += 800;
                PlayerDataMgr.setPlayerData();
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

    class UpdateCoin extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            this.myOwner.value = PlayerDataMgr.getPlayerData().coin.toString();
        }
    }

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
            if (GameLogic.Share.isFinish) {
                return;
            }
            if (!GameLogic.Share.isStartGame) {
                this.guideAni.visible = false;
                GameLogic.Share.gameStart();
            }
            let x = evt.stageX;
            GameLogic.Share._playerCrl.touchX = x;
        }
        touchMove(evt) {
            if (GameLogic.Share.isGameOver)
                return;
            if (GameLogic.Share.isFinish) {
                return;
            }
            let x = evt.stageX;
            GameLogic.Share._playerCrl.touchX = x;
        }
        touchEnd(evt) {
            if (GameLogic.Share.isGameOver)
                return;
            if (GameLogic.Share.isFinish) {
                return;
            }
        }
        myUpdate() {
        }
    }

    class UpdateGrade extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            this.myOwner.value = PlayerDataMgr.getPlayerData().grade.toString();
        }
    }

    class LoadingUI extends Laya.Scene {
        constructor() {
            super();
            this.maxGrade = 5;
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
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
                WxApi.UnityPath + 'ItemNode.lh'
            ];
            Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
        }
        onComplete() {
            FdMgr.loadGame(() => {
                SoundMgr.instance.initLoading(() => {
                    GameLogic.Share.initScene();
                });
            });
        }
        onProgress(value) {
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

    class SkinUI extends Laya.Scene {
        constructor() {
            super();
            this.chooseId = 0;
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Utility.addClickEvent(this.closeBtn, this, this.closeBtnCB);
            this.chooseId = PlayerDataMgr.getPlayerData().skinId;
            this.initList();
            Laya.timer.frameLoop(1, this, this.myUpdate);
        }
        onClosed() {
            Laya.timer.clearAll(this);
            GameLogic.Share._playerCrl.changeSkin(PlayerDataMgr.getPlayerData().skinId);
            GameLogic.Share._camera.transform.translate(new Laya.Vector3(0, 3, 0), false);
        }
        initList() {
            this.myList.vScrollBarSkin = '';
            this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
            this.myList.repeatX = 3;
            this.myList.repeatY = 2;
            this.myList.renderHandler = Laya.Handler.create(this, this.onmyListRender, null, false);
        }
        onmyListRender(cell, index) {
            if (index >= this.myList.array.length) {
                return;
            }
            var item = cell.getChildByName('item');
            let bg = item.getChildByName('bg');
            let select = item.getChildByName('select');
            let icon = item.getChildByName('icon');
            let using = item.getChildByName('using');
            let unlocked = item.getChildByName('unlocked');
            let buyBtn = item.getChildByName('buyBtn');
            let cost = buyBtn.getChildByName('cost');
            let adBtn = item.getChildByName('adBtn');
            select.visible = this.chooseId == index;
            icon.skin = 'skinUI/Hero/Hero_' + (index + 1) + '.png';
            using.visible = PlayerDataMgr.getPlayerData().skinId == index;
            unlocked.visible = PlayerDataMgr.getPlayerData().skinId != index && PlayerDataMgr.getPlayerData().skinArr[index] == 1;
            buyBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0 && PlayerDataMgr.getCostById(index) < PlayerDataMgr.getPlayerData().coin;
            cost.value = PlayerDataMgr.getCostById(index).toString();
            adBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0 && !buyBtn.visible;
            bg.off(Laya.Event.CLICK, this, this.chooseCB);
            bg.on(Laya.Event.CLICK, this, this.chooseCB, [index]);
            Utility.addClickEvent(buyBtn, this, this.buyBtnCB, [index]);
            Utility.addClickEvent(adBtn, this, this.adBtnCB, [index]);
        }
        chooseCB(id) {
            SoundMgr.instance.playSoundEffect('Click.mp3');
            if (this.chooseId == id)
                return;
            this.chooseId = id;
            GameLogic.Share._playerCrl.changeSkin(id);
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
            GameLogic.Share._playerCrl.changeSkin(id);
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
                GameLogic.Share._playerCrl.changeSkin(id);
                PlayerDataMgr.getPlayerData().skinArr[id] = 1;
                PlayerDataMgr.getPlayerData().skinId = id;
                PlayerDataMgr.setPlayerData();
                this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
            };
            FdAd.showVideoAd(cb);
        }
        closeBtnCB() {
            Laya.Scene.open('MyScenes/StartUI.scene');
        }
        myUpdate() {
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
        }
    }

    class StartUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened() {
            SoundMgr.instance.playMusic('bgm');
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Utility.addClickEvent(this.startBtn, this, this.startBtnCB);
            Utility.addClickEvent(this.skinBtn, this, this.skinBtnCB);
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
            GameLogic.Share._camera.transform.translate(new Laya.Vector3(0, -3, 0), false);
            Laya.Scene.open('MyScenes/SkinUI.scene');
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
            reg("Mod/UpdateCoin.ts", UpdateCoin);
            reg("View/GameUI.ts", GameUI);
            reg("Mod/UpdateGrade.ts", UpdateGrade);
            reg("View/LoadingUI.ts", LoadingUI);
            reg("Mod/UpDownLoop.ts", UpDownLoop);
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
    GameConfig.startScene = "MyScenes/LoadingUI.scene";
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
