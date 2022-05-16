(function () {
    'use strict';

    class PlayerData {
        constructor() {
            this.grade = 1;
            this.skinArr = [1, 0, 0, 0];
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
        static getSkinStr() {
            let str = '';
            switch (this._playerData.skinId) {
                case 0:
                    str = 'Cat_';
                    break;
                case 1:
                    str = 'Cat_';
                    break;
                case 2:
                    str = 'Huga_';
                    break;
                case 3:
                    str = 'Shouter_';
                    break;
            }
            return str;
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
            }
        }
        static getIsBossGrade() {
            return this._playerData.grade % 2 == 0;
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
        normalFinishCB() {
            let desPos = this.myOwner.transform.position.clone();
            desPos.z += 20;
            desPos.y -= 1;
            Utility.TmoveTo(this.myOwner, 2200, desPos, null);
        }
        finishCB() {
            Laya.timer.once(1000, this, () => {
                let desPos = GameLogic.Share._roadFinish.transform.position.clone();
                desPos.z += 20;
                desPos.x -= 13;
                desPos.y += 10;
                Utility.TmoveTo(this.myOwner, 1500, desPos, null);
                let r = this.myOwner.transform.rotationEuler.clone();
                r.y += 90;
                Utility.RotateTo(this.myOwner, 2700, r, null);
            });
        }
        bossDie() {
            let r = this.myOwner.transform.rotationEuler.clone();
            r.y -= 73;
            r.x = 0;
            Utility.RotateTo(this.myOwner, 1800, r, null);
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isFinish) {
                return;
            }
            let pos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            myPos.y = pos.y + 4;
            myPos.z = pos.z - 6.81;
            Laya.Vector3.lerp(this.myOwner.transform.position.clone(), myPos, 0.2, myPos);
            this.myOwner.transform.position = myPos;
        }
    }

    var PlayerAniType;
    (function (PlayerAniType) {
        PlayerAniType["ANI_IDLE"] = "idle";
        PlayerAniType["ANI_IDLENPC"] = "idleNpc";
        PlayerAniType["ANI_JUMP"] = "jump";
        PlayerAniType["ANI_RUN"] = "run";
        PlayerAniType["ANI_WALK"] = "walk";
        PlayerAniType["ANI_ATTACK"] = "attack";
        PlayerAniType["ANI_DIE"] = "die";
        PlayerAniType["ANI_WIN"] = "win";
        PlayerAniType["ANI_BOXING_ATTACK"] = "boxing_attack";
        PlayerAniType["ANI_BOXING_HIT"] = "boxing_hit";
        PlayerAniType["ANI_BOXING_IDLE"] = "boxing_idle";
    })(PlayerAniType || (PlayerAniType = {}));

    class PlayerCrl extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.touchX = 0;
            this.speed = 0.2;
            this.hp = 10;
            this.hpMax = 10;
            this.edgeMax = 3;
            this.tempSpeed = 0;
            this.isJumping = false;
            this.canMove = true;
            this.curAniName = "";
            this.canFight = true;
            this.readyBoxing = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.myOwner.getComponent(Laya.Animator);
            this.playAni(PlayerAniType.ANI_IDLE);
            this.init();
        }
        init() {
            for (let i = 1; i < this.myOwner.numChildren; i++) {
                let sp = this.myOwner.getChildAt(i);
                sp.active = sp.name.search('Dude') != -1;
            }
        }
        startRun() {
            this.myOwner.transform.position = new Laya.Vector3(0, 0, 0);
            this.myOwner.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
            this.playAni(PlayerAniType.ANI_RUN);
        }
        walkToDes() {
            this.speed = 0.1;
            this.playAni(PlayerAniType.ANI_WALK);
            let desPos = GameLogic.Share._roadFinish.transform.position.clone();
            desPos.z += 19;
            Utility.TmoveTo(this.myOwner, 3000, desPos, () => {
                this.win();
            });
        }
        walkToBoss() {
            SoundMgr.instance.playSoundEffect('strong.mp3');
            this.speed = 0.1;
            this.playAni(PlayerAniType.ANI_WALK);
            let desPos = GameLogic.Share._roadFinish.transform.position.clone();
            desPos.z += 19;
            Utility.TmoveTo(this.myOwner, 3000, desPos, () => {
                this.playAni(PlayerAniType.ANI_BOXING_IDLE);
                this.readyBoxing = true;
                GameLogic.Share.fightWithBoss();
            });
            Utility.ScaleTo(this.myOwner, 4000, new Laya.Vector3(3, 3, 3), null);
        }
        win() {
            this.playAni(PlayerAniType.ANI_WIN);
            let r = this.myOwner.transform.localRotationEuler.clone();
            r.y += 180;
            Utility.RotateTo(this.myOwner, 500, r, null);
            GameLogic.Share.gameOver(true);
        }
        playAni(name, speed = 1, normalizedTime = 0) {
            if (name == this.curAniName)
                return;
            if (name == PlayerAniType.ANI_RUN)
                speed = 2;
            this._ani.crossFade(name, 0.2, 0, normalizedTime);
            this._ani.speed = speed;
            this.curAniName = name;
            if (name == PlayerAniType.ANI_ATTACK) {
                Laya.timer.once(500, this, () => {
                    this.playAni(PlayerAniType.ANI_RUN);
                });
            }
        }
        changeBody(v, isGreen) {
            let skinArr = PlayerDataMgr.getSkinStr();
            if (!isGreen) {
                skinArr = Utility.getRandomItemInArr(['Cat_', 'Huga_', 'Shouter_']);
                SoundMgr.instance.playSoundEffect('red.mp3');
            }
            else {
                SoundMgr.instance.playSoundEffect('green.mp3');
                GameLogic.Share.correctCount++;
            }
            let bodyStr = '';
            switch (v) {
                case 1:
                    bodyStr = 'Head';
                    break;
                case 2:
                    bodyStr = 'Torso';
                    break;
                case 3:
                    bodyStr = 'Arm_L';
                    break;
                case 4:
                    bodyStr = 'Arm_R';
                    break;
                case 5:
                    bodyStr = 'Leg_L';
                    break;
                case 6:
                    bodyStr = 'Leg_R';
                    break;
            }
            let str = skinArr + bodyStr;
            this.myOwner.getChildByName('Dude_' + bodyStr).active = false;
            this.myOwner.getChildByName(str).active = true;
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
        decHp() {
            WxApi.DoVibrate();
            this.hp -= 1;
            if (this.hp <= 0) {
                Laya.timer.clearAll(this);
                this.playAni(PlayerAniType.ANI_DIE, 2, 0.3);
                GameLogic.Share.gameOver(false);
            }
        }
        decHp1(v) {
            this.hp -= v;
            if (this.hp <= 0) {
                Laya.timer.clearAll(this);
                this.playAni(PlayerAniType.ANI_DIE, 2, 0.3);
                GameLogic.Share.gameOver(false);
            }
        }
        addHp() {
            this.hp += 0.5;
            if (this.hp > 10)
                this.hp = 10;
        }
        hurtCB(dmg) {
            WxApi.DoVibrate();
            this.hp -= dmg;
            this.playAni(PlayerAniType.ANI_BOXING_HIT, 1.5);
            Laya.timer.once(200, this, () => {
                this.playAni(PlayerAniType.ANI_BOXING_IDLE);
            });
            SoundMgr.instance.playSoundEffect('hurt.mp3');
            if (this.hp <= 0) {
                Laya.timer.clearAll(this);
                this.playAni(PlayerAniType.ANI_DIE, 2, 0.3);
                GameLogic.Share.gameOver(false);
            }
        }
        drop() {
            this.playAni(PlayerAniType.ANI_DIE, 1, 0.5);
            let pos = this.myOwner.transform.position.clone();
            pos.y -= 5;
            pos.z += 3;
            Utility.TmoveTo(this.myOwner, 1500, pos, null);
        }
        jump() {
            this.isJumping = true;
            this.playAni(PlayerAniType.ANI_JUMP);
            let myPos = this.myOwner.transform.position.clone();
            let p1 = myPos.clone();
            p1.z += 9;
            p1.y += 5;
            let p2 = myPos.clone();
            p2.z += 18;
            p2.y = 0;
            Utility.TmoveToYZ(this.myOwner, 800, p1, () => {
                Utility.TmoveToYZ(this.myOwner, 800, p2, () => {
                    this.playAni(PlayerAniType.ANI_RUN);
                    this.isJumping = false;
                }, Laya.Ease.linearOut);
            }, Laya.Ease.linearIn);
        }
        attackBoss() {
            if (!this.canFight || GameLogic.Share._bossCrl.isDied)
                return;
            GameLogic.Share._bossCrl.hitCB();
            this.canFight = false;
            this.playAni(PlayerAniType.ANI_BOXING_ATTACK, 2);
            Laya.timer.once(500, this, () => {
                this.canFight = true;
                this.playAni(PlayerAniType.ANI_BOXING_IDLE);
            });
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isFinish) {
                return;
            }
            if (Math.abs(this.myOwner.transform.position.z - GameLogic.Share._desNode.transform.position.z) <= 1) {
                GameLogic.Share.finish();
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
            for (let i = 0; i < GameLogic.Share._lavaPoosArr.length; i++) {
                let pool = GameLogic.Share._lavaPoosArr[i];
                let poolPos = pool.transform.position.clone();
                let myPos = this.myOwner.transform.position.clone();
                if (Math.abs(poolPos.z - myPos.z) < 2.5 && Math.abs(poolPos.x - myPos.x) < 1.5) {
                    this.tempSpeed = -0.15;
                    return;
                }
            }
            this.tempSpeed = 0;
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

    class SelectNode extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.greenBody = null;
            this.redBody = null;
            this.type = 0;
            this.isFinish = false;
            this.isLeft = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.greenBody = this.myOwner.getChildAt(0);
            this.redBody = this.myOwner.getChildAt(1);
        }
        init(v, isLeft) {
            this.isLeft = isLeft;
            this.type = v;
            for (let i = 0; i < this.greenBody.numChildren; i++) {
                this.greenBody.getChildAt(i).active = v == i + 1;
            }
            for (let i = 0; i < this.redBody.numChildren; i++) {
                this.redBody.getChildAt(i).active = v == i + 1;
            }
        }
        onUpdate() {
            if (this.isFinish) {
                return;
            }
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            if (Math.abs(playerPos.z - myPos.z) <= 0.5) {
                WxApi.DoVibrate();
                this.isFinish = true;
                if (playerPos.x >= 0) {
                    myPos.y += 1.8;
                    myPos.x += 1.5;
                    GameLogic.Share.createLightFX(myPos);
                    GameLogic.Share._playerCrl.changeBody(this.type, this.isLeft);
                }
                else {
                    myPos.y += 1.8;
                    myPos.x -= 1.5;
                    GameLogic.Share.createLightFX(myPos);
                    GameLogic.Share._playerCrl.changeBody(this.type, !this.isLeft);
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
            this.init();
            this.playAni(PlayerAniType.ANI_IDLENPC);
        }
        init() {
            for (let i = 1; i < this.myOwner.numChildren; i++) {
                let sp = this.myOwner.getChildAt(i);
                sp.active = sp.name.search('Dude') != -1 && sp.name.search('Head') == -1;
            }
            this.myOwner.getChildByName('Enemy_Head').active = true;
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
            Utility.TmoveTo(this.myOwner, 500, myPos, null, Laya.Ease.linearIn);
        }
        onUpdate() {
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            if (!this.isDied && !GameLogic.Share.isGameOver && !GameLogic.Share.isFinish) {
                if (Laya.Vector3.distance(playerPos, myPos) <= 1) {
                    GameLogic.Share._playerCrl.playAni(PlayerAniType.ANI_ATTACK, 1.5);
                    GameLogic.Share._playerCrl.decHp();
                    SoundMgr.instance.playSoundEffect('hit.mp3');
                    this.playAni(PlayerAniType.ANI_DIE, 2, 0.3);
                    this.isDied = true;
                    this.hitCB();
                    return;
                }
            }
            if (Math.abs(myPos.z - playerPos.z) <= 7 && !this.isDied) {
                this.playAni(PlayerAniType.ANI_RUN);
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

    class Matugen extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            if (Laya.Vector3.distance(playerPos, myPos) <= 1) {
                SoundMgr.instance.playSoundEffect('mutagen.mp3');
                GameLogic.Share._playerCrl.addHp();
                WxApi.DoVibrate();
                GameLogic.Share.createGreenFX();
                PlayerDataMgr.changeCoin(1);
                this.myOwner.destroy();
            }
        }
    }

    class Barrel extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            if ((myPos.x > 3 || myPos.x < -3) && this.myOwner.transform.position.y > -5) {
                this.myOwner.transform.translate(new Laya.Vector3(0, -0.2, 0), false);
            }
            if (this.isDied)
                return;
            if (Laya.Vector3.distance(playerPos, myPos) <= 2) {
                SoundMgr.instance.playSoundEffect('hit.mp3');
                GameLogic.Share._playerCrl.decHp();
                WxApi.DoVibrate();
                this.isDied = true;
                let x = this.myOwner.transform.position.x >= 0 ? Math.random() * 2 + 3 : -(Math.random() * 2 + 3);
                myPos.x = x;
                myPos.z += (Math.random() * 10 + 10);
                Utility.TmoveTo(this.myOwner, 500, myPos, null);
                let r = new Laya.Vector3();
                r.x = Math.random() * 720 + 360;
                r.y = Math.random() * 720 + 360;
                r.z = Math.random() * 720 + 360;
                Utility.RotateTo(this.myOwner, 500, r, null);
            }
        }
    }

    class Npc extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.numSp = null;
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.myOwner.getComponent(Laya.Animator);
            this.numSp = this.myOwner.getChildAt(1).getChildAt(0).getChildAt(0);
        }
        raiseCB() {
            this._ani.play('raise');
            Laya.timer.once(600, this, () => {
                this._ani.play('raise_1');
            });
            let x = 1;
            let y = 1;
            if (GameLogic.Share.correctCount == 0) {
                x = 1;
                y = 1;
            }
            else if (GameLogic.Share.correctCount == 1) {
                x = 0.2;
                y = 1;
            }
            else if (GameLogic.Share.correctCount == 2) {
                x = 0.4;
                y = 1;
            }
            else if (GameLogic.Share.correctCount == 3) {
                x = 0.6;
                y = 1;
            }
            else if (GameLogic.Share.correctCount == 4) {
                x = 0.8;
                y = 1;
            }
            else if (GameLogic.Share.correctCount == 5) {
                x = 0.4;
                y = -0.22;
            }
            else if (GameLogic.Share.correctCount == 6) {
                x = 0.8;
                y = -0.22;
            }
            let mat = this.numSp.meshRenderer.material;
            mat.tilingOffset = new Laya.Vector4(1, 1, x, y);
        }
        onUpdate() {
        }
    }

    class DropArea extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver)
                return;
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            if (playerPos.z > myPos.z && playerPos.z < myPos.z + 2 && !GameLogic.Share._playerCrl.isJumping) {
                GameLogic.Share.gameOver(false);
                GameLogic.Share._playerCrl.drop();
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
            if (GameLogic.Share.isGameOver || this.isDied)
                return;
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            myPos.y = 0;
            if (Laya.Vector3.distance(myPos, playerPos) < 1) {
                this.isDied = true;
                SoundMgr.instance.playSoundEffect('spring.mp3');
                GameLogic.Share._playerCrl.jump();
                myPos.y += 0.3;
                Utility.TmoveTo(this.myOwner, 200, myPos, null);
            }
        }
    }

    class Boss extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
            this.hp = 10;
            this.hpMax = 10;
            this.curAniName = "";
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.myOwner.getComponent(Laya.Animator);
            this.init();
            this.playAni(PlayerAniType.ANI_BOXING_IDLE);
        }
        init() {
            let arr = ['Cat', 'Huga', 'Shouter'];
            let str = Utility.getRandomItemInArr(arr);
            for (let i = 1; i < this.myOwner.numChildren; i++) {
                let sp = this.myOwner.getChildAt(i);
                sp.active = sp.name.search(str) != -1;
            }
        }
        playAni(name, speed = 1, normalizedTime = 0) {
            if (name == this.curAniName || this.curAniName == PlayerAniType.ANI_WIN)
                return;
            this._ani.crossFade(name, 0.2, 0, normalizedTime);
            this._ani.speed = speed;
            this.curAniName = name;
        }
        hitCB() {
            WxApi.DoVibrate();
            this.hp -= 2;
            SoundMgr.instance.playSoundEffect('hurt.mp3');
            if (this.hp <= 0) {
                GameLogic.Share._scene.enableFog = false;
                this.isDied = true;
                GameLogic.Share.isGameOver = true;
                this.playAni(PlayerAniType.ANI_DIE, 1.5, 0.3);
                this.dieCB();
                Laya.timer.clearAll(this);
            }
            else {
                Laya.timer.once(200, this, () => {
                    this.playAni(PlayerAniType.ANI_BOXING_HIT, 1.5);
                });
                Laya.timer.once(400, this, () => {
                    this.playAni(PlayerAniType.ANI_BOXING_IDLE);
                });
            }
            let pos = this.myOwner.transform.position.clone();
            pos.y += 7;
            pos.z -= 1;
            GameLogic.Share.createHitFX(pos, this);
        }
        updateBoxingAtk() {
            if (this.isDied || GameLogic.Share.isGameOver)
                return;
            Laya.timer.once(Math.random() * 1000 + 1000, this, () => {
                if (this.isDied || GameLogic.Share.isGameOver)
                    return;
                this.playAni(PlayerAniType.ANI_BOXING_ATTACK, 2);
                Laya.timer.once(200, this, () => {
                    GameLogic.Share._playerCrl.hurtCB(Math.random() * 1 + 1);
                });
                Laya.timer.once(500, this, () => {
                    this.playAni(PlayerAniType.ANI_BOXING_IDLE);
                });
                this.updateBoxingAtk();
                let pos = GameLogic.Share._player.transform.position.clone();
                pos.y += 7;
                GameLogic.Share.createHitFX(pos, this);
            });
        }
        dieCB() {
            let pos = this.myOwner.transform.position.clone();
            pos.y += 20;
            pos.z += 60;
            Utility.TmoveTo(this.myOwner, 2000, pos, () => {
                GameLogic.Share.gameOver(true);
            });
            let r = this.myOwner.transform.rotationEuler.clone();
            r.z = Math.random() * 720 + 360;
            Utility.RotateTo(this.myOwner, 2000, r, null);
            GameLogic.Share._cameraCrl.bossDie();
        }
        onUpdate() {
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
            if (GameLogic.Share._playerCrl.readyBoxing) {
                GameLogic.Share._playerCrl.attackBoss();
                return;
            }
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
        fixPlayerHp() {
            if (!GameLogic.Share._player || GameLogic.Share.isFinish)
                return;
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = GameLogic.Share._player.transform.position.clone();
            hPos.y += 3;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            this.playerHp.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            this.playerHp.value = GameLogic.Share._playerCrl.hp / GameLogic.Share._playerCrl.hpMax;
        }
        bossReady() {
            this.createTips();
        }
        fixBossHp() {
            let op = new Laya.Vector4(0, 0, 0);
            let hPos = GameLogic.Share._player.transform.position.clone();
            hPos.y += 9;
            GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
            this.playerHp.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
            this.playerHp.value = GameLogic.Share._playerCrl.hp / GameLogic.Share._playerCrl.hpMax;
            let op1 = new Laya.Vector4(0, 0, 0);
            let hPos1 = GameLogic.Share._boss.transform.position.clone();
            hPos1.y += 9;
            GameLogic.Share._camera.viewport.project(hPos1, GameLogic.Share._camera.projectionViewMatrix, op1);
            this.bossHp.pos(op1.x / Laya.stage.clientScaleX, op1.y / Laya.stage.clientScaleY);
            this.bossHp.value = GameLogic.Share._bossCrl.hp / GameLogic.Share._bossCrl.hpMax;
        }
        createTips() {
            Laya.timer.loop(300, this, () => {
                if (GameLogic.Share.isGameOver) {
                    this.tipsNode.visible = false;
                    Laya.timer.clearAll(this);
                    return;
                }
                let img = new Laya.Image('gameUI/yxz_wz_2.png');
                img.anchorX = 0.5;
                img.anchorY = 0.5;
                img.pos(Math.random() * 200 - 100, Math.random() * 200 - 100);
                this.tipsNode.addChild(img);
                Laya.Tween.to(img, { scaleX: 1.2, scaleY: 1.2 }, 80, null, new Laya.Handler(this, () => {
                }));
                Laya.timer.once(300, this, () => { img.destroy(); });
            });
        }
        myUpdate() {
            this.fixPlayerHp();
            if (GameLogic.Share.isFinish && PlayerDataMgr.getIsBossGrade()) {
                this.fixBossHp();
            }
            if (GameLogic.Share.isGameOver) {
                this.playerHp.visible = false;
                this.bossHp.visible = false;
            }
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
        }
    }

    class Wall extends Laya.Script {
        constructor() {
            super();
            this._ani = null;
            this.myOwner = null;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this._ani = this.myOwner.getComponent(Laya.Animator);
            this._ani.speed = 0;
            this.myOwner.transform.rotate(new Laya.Vector3(0, 180, 0), true, false);
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || this.isDied)
                return;
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            myPos.y = 0;
            if (Math.abs(playerPos.z - myPos.z) < 1 && Math.abs(playerPos.x - myPos.x) < 3) {
                this.isDied = true;
                SoundMgr.instance.playSoundEffect('hit.mp3');
                GameLogic.Share._playerCrl.playAni(PlayerAniType.ANI_ATTACK, 1.5);
                GameLogic.Share._playerCrl.decHp();
                this._ani.speed = 1;
                myPos.z += 10;
                Utility.TmoveTo(this.myOwner, 300, myPos, () => {
                }, Laya.Ease.linearIn);
            }
        }
    }

    class Water extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        waterAnim() {
            let mat = this.myOwner.meshRenderer.material;
            mat.tilingOffsetY += 0.01;
            mat.tilingOffsetX += 0.001;
        }
        onUpdate() {
            this.waterAnim();
        }
    }

    class LavaPool extends Laya.Script {
        constructor() {
            super();
            this.myOwner = null;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.myOwner.addComponent(Water);
        }
        onUpdate() {
            let playerPos = GameLogic.Share._player.transform.position.clone();
            let myPos = this.myOwner.transform.position.clone();
            if (Math.abs(playerPos.z - myPos.z) < 2.5 && Math.abs(playerPos.x - myPos.x) < 1.5) {
                GameLogic.Share._playerCrl.decHp1(0.02);
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
            this._levelNode = null;
            this._player = null;
            this._boss = null;
            this._playerCrl = null;
            this._bossCrl = null;
            this._standNode = null;
            this._desNode = null;
            this._roadFinish = null;
            this._lavaPoosArr = [];
            this.correctCount = 0;
            this.bodyArr = [];
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
                        title: '怪物实验室',
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
            this._light.shadowDistance = 15;
            this._light.shadowResolution = 1024;
            this._light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            this._light.shadowNormalBias = 0;
            this._scene.enableFog = true;
            this._scene.fogColor = new Laya.Vector3(0, 0.8, 0);
            this._scene.fogStart = 10;
            this._scene.fogRange = 60;
            this.camStartPos = this._camera.transform.position.clone();
            this.camStartRotation = this._camera.transform.rotation.clone();
            this._camera.fieldOfView = this.startCamField;
            this._cameraCrl = this._camera.addComponent(CameraCrl);
            this._scene.getChildByName("Plane_1").addComponent(Water);
            this._levelNode = this._scene.addChild(new Laya.Sprite3D());
            this.createLevel();
        }
        gameStart() {
            this.isStartGame = true;
            this._standNode.getChildAt(0).active = false;
            this._standNode.getChildAt(1).active = true;
            this._standNode.getChildAt(1).getComponent(Laya.Animator).speed = 1;
            this._playerCrl.startRun();
            SoundMgr.instance.playSoundEffect('glass.mp3');
        }
        createLevel() {
            this._lavaPoosArr = [];
            this.bodyArr = [0, 1, 2, 3, 4, 5];
            this.bodyArr = Utility.shuffleArr(this.bodyArr);
            let g = PlayerDataMgr.getPlayerData().grade;
            g = Math.floor((g - 1) % 4);
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
            let index = 0;
            if (name.search('SelectNode') != -1) {
                index = Number(name.slice(name.length - 1));
                name = name.slice(0, name.length - 1);
            }
            let sp = Utility.getSprite3DResByUrl(name + '.lh', this._levelNode, false);
            sp.transform.position = pos;
            sp.transform.rotationEuler = rot;
            sp.transform.setWorldLossyScale(scale);
            if (name.search('Player') != -1) {
                this._player = sp;
                this._playerCrl = sp.addComponent(PlayerCrl);
            }
            else if (name.search('Stand') != -1) {
                sp.getChildAt(0).active = true;
                sp.getChildAt(1).active = false;
                this._standNode = sp;
            }
            else if (name.search('SelectNode') != -1) {
                let crl = sp.addComponent(SelectNode);
                crl.init(index, name.slice(name.length - 1) == 'L');
            }
            else if (name.search('Enemy') != -1) {
                sp.addComponent(Enemy);
            }
            else if (name.search('Mutagen') != -1) {
                sp.addComponent(Matugen);
            }
            else if (name.search('Barrel') != -1) {
                sp.addComponent(Barrel);
            }
            else if (name == 'Finish') {
                this._desNode = sp;
            }
            else if (name == 'DropArea') {
                sp.addComponent(DropArea);
            }
            else if (name == 'Jumper') {
                sp.addComponent(Jumper);
            }
            else if (name == 'Boss') {
                this._boss = sp;
                this._bossCrl = sp.addComponent(Boss);
            }
            else if (name == 'Wall') {
                sp.addComponent(Wall);
            }
            else if (name == 'Lava_Pool') {
                sp.addComponent(LavaPool);
                this._lavaPoosArr.push(sp);
            }
            else if (name == 'Road_Finish') {
                this._roadFinish = sp;
                for (let i = 0; i < this._roadFinish.numChildren; i++) {
                    let npc = this._roadFinish.getChildAt(i);
                    let crl = npc.addComponent(Npc);
                    if (PlayerDataMgr.getIsBossGrade()) {
                        npc.active = false;
                    }
                }
            }
        }
        createGreenFX() {
            let fx = Utility.getSprite3DResByUrl('FX_Green.lh', this._levelNode, false);
            let pos = this._player.transform.position.clone();
            pos.y += 1;
            pos.z += 5;
            fx.transform.position = pos;
            Laya.timer.once(500, this, () => {
                fx.destroy();
            });
        }
        createHitFX(pos, target) {
            let fx = Utility.getSprite3DResByUrl('FX_Hit_1.lh', this._levelNode, false);
            fx.transform.position = pos;
            Laya.timer.once(400, target, () => {
                fx.destroy();
            });
        }
        createLightFX(pos) {
            let fx = Utility.getSprite3DResByUrl('lightning_1.lh', this._levelNode, false);
            fx.transform.position = pos;
            Laya.timer.once(1000, this, () => {
                fx.destroy();
            });
        }
        finish() {
            this.isFinish = true;
            if (PlayerDataMgr.getIsBossGrade()) {
                this._playerCrl.walkToBoss();
                this._cameraCrl.finishCB();
            }
            else {
                this._playerCrl.walkToDes();
                this._cameraCrl.normalFinishCB();
                for (let i = 0; i < this._roadFinish.numChildren; i++) {
                    let npc = this._roadFinish.getChildAt(i);
                    let crl = npc.getComponent(Npc);
                    crl.raiseCB();
                }
            }
        }
        fightWithBoss() {
            GameUI.Share.bossReady();
            this._bossCrl.updateBoxingAtk();
        }
        gameOver(isWin) {
            if (isWin) {
                SoundMgr.instance.playSoundEffect('win.mp3');
            }
            if (PlayerDataMgr.getIsBossGrade() && !isWin) {
                this._bossCrl.playAni(PlayerAniType.ANI_WIN);
            }
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
            this.correctCount = 0;
            this._camera.transform.position = this.camStartPos;
            this._camera.transform.rotation = this.camStartRotation;
            this._scene.enableFog = true;
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
            this.freeSkin = [];
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString();
            this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString();
            let isWin = GameLogic.Share.isWin;
            this.winTitle.visible = isWin;
            this.bounesIcon.visible = isWin;
            this.loseTitle.visible = !isWin;
            this.nextBtn.visible = isWin;
            this.restartBtn.visible = !isWin;
            Utility.addClickEvent(this.nextBtn, this, this.closeCB);
            Utility.addClickEvent(this.restartBtn, this, this.closeCB);
            FdMgr.inFinish(isWin ? this.nextBtn : this.restartBtn);
        }
        onClosed() {
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
            this.maxGrade = 4;
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
                WxApi.UnityPath + 'Player.lh',
                WxApi.UnityPath + 'Enemy.lh',
                WxApi.UnityPath + 'Barrel.lh',
                WxApi.UnityPath + 'Wall.lh',
                WxApi.UnityPath + 'Road.lh',
                WxApi.UnityPath + 'Jumper.lh',
                WxApi.UnityPath + 'Mutagen.lh',
                WxApi.UnityPath + 'Finish.lh',
                WxApi.UnityPath + 'Lava_Pool.lh',
                WxApi.UnityPath + 'Points_plate.lh',
                WxApi.UnityPath + 'Road_Finish.lh',
                WxApi.UnityPath + 'Stand.lh',
                WxApi.UnityPath + 'SelectNodeL.lh',
                WxApi.UnityPath + 'SelectNodeR.lh',
                WxApi.UnityPath + 'DropArea.lh',
                WxApi.UnityPath + 'Boss.lh',
                WxApi.UnityPath + 'Wormhole.lh',
                WxApi.UnityPath + 'WaveGun.lh',
                WxApi.UnityPath + 'FX_Green.lh',
                WxApi.UnityPath + 'FX_Hit_1.lh',
                WxApi.UnityPath + 'lightning_1.lh'
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

    class SkinUI extends Laya.Scene {
        constructor() {
            super();
            this.playerNode = null;
            this.playerCrl = null;
            this.chooseId = 0;
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Utility.addClickEvent(this.closeBtn, this, this.closeBtnCB);
            this.chooseId = PlayerDataMgr.getPlayerData().skinId;
            this.createPlayer();
            this.initList();
            Laya.timer.frameLoop(1, this, this.myUpdate);
        }
        onClosed() {
            Laya.timer.clearAll(this);
            this.playerNode.destroy();
            GameLogic.Share._levelNode.active = true;
        }
        createPlayer() {
            let res = Laya.loader.getRes(WxApi.UnityPath + 'Player.lh');
            this.playerNode = Laya.Sprite3D.instantiate(res, GameLogic.Share._scene, false, new Laya.Vector3(0, 0, 0));
            this.playerNode.transform.position = new Laya.Vector3(0, 2.5, 2);
            this.playerCrl = this.playerNode.addComponent(PlayerCrl);
            this.playerCrl.playAni(PlayerAniType.ANI_WIN);
            let arr = ['Dude', 'Cat', 'Huga', 'Shouter'];
            for (let i = 1; i < this.playerNode.numChildren; i++) {
                let sp = this.playerNode.getChildAt(i);
                sp.active = sp.name.search(arr[PlayerDataMgr.getPlayerData().skinId]) != -1;
            }
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
            let select = item.getChildByName('select');
            let icon = item.getChildByName('icon');
            let using = item.getChildByName('using');
            let unlocked = item.getChildByName('unlocked');
            let buyBtn = item.getChildByName('buyBtn');
            let cost = buyBtn.getChildByName('cost');
            let adBtn = item.getChildByName('adBtn');
            select.visible = this.chooseId == index;
            icon.skin = 'skinUI/skin' + (index + 1) + '.png';
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
            let arr = ['Dude', 'Cat', 'Huga', 'Shouter'];
            for (let i = 1; i < this.playerNode.numChildren; i++) {
                let sp = this.playerNode.getChildAt(i);
                sp.active = sp.name.search(arr[id]) != -1;
            }
            this.chooseId = id;
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
            let arr1 = ['Dude', 'Cat', 'Huga', 'Shouter'];
            for (let i = 1; i < this.playerNode.numChildren; i++) {
                let sp = this.playerNode.getChildAt(i);
                sp.active = sp.name.search(arr1[id]) != -1;
            }
            this.chooseId = id;
            PlayerDataMgr.getPlayerData().coin -= PlayerDataMgr.getCostById(id);
            PlayerDataMgr.getPlayerData().skinArr[id] = 1;
            PlayerDataMgr.getPlayerData().skinId = id;
            PlayerDataMgr.setPlayerData();
            this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
        }
        adBtnCB(arr) {
            let id = arr[0];
            let cb = () => {
                let arr = ['Dude', 'Cat', 'Huga', 'Shouter'];
                for (let i = 1; i < this.playerNode.numChildren; i++) {
                    let sp = this.playerNode.getChildAt(i);
                    sp.active = sp.name.search(arr[id]) != -1;
                }
                this.chooseId = id;
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
            SoundMgr.instance.playMusic('bgm.mp3');
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
            GameLogic.Share._levelNode.active = false;
            Laya.Scene.open('MyScenes/SkinUI.scene');
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
