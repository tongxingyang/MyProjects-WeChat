(function () {
    'use strict';

    class ItemId {
        constructor() {
            this.bodyId = 0;
            this.handId = 0;
            this.backId = 0;
            this.type = 1;
        }
    }
    class PlayerData {
        constructor() {
            this.grade = 1;
            this.skinArr = [1, 0, 0, 0, 0, 0, 0, 0];
            this.itemArr = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this.chooseArr = [];
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
        static setChooseItem(bodyId, handId, backId, type) {
            let item = new ItemId();
            item.bodyId = bodyId;
            item.handId = handId;
            item.backId = backId;
            item.type = type;
            if (this._playerData.chooseArr.length < 3)
                this._playerData.chooseArr.push(item);
            else {
                this._playerData.chooseArr.shift();
                this._playerData.chooseArr.push(item);
            }
            this.setPlayerData();
        }
        static getFreeBody() {
            for (let i = 0; i < this._playerData.skinArr.length; i++) {
                if (this._playerData.skinArr[i] == 0)
                    return i;
            }
            return -1;
        }
        static getFreeItem() {
            for (let i = 0; i < this._playerData.itemArr.length; i++) {
                if (this._playerData.itemArr[i] == 0)
                    return i;
            }
            return -1;
        }
        static getBodyNameById(id) {
            let str = '';
            switch (id) {
                case 0:
                    str = '可乐';
                    break;
                case 1:
                    str = '斑马';
                    break;
                case 2:
                    str = '消防栓';
                    break;
                case 3:
                    str = '章鱼怪';
                    break;
                case 4:
                    str = '剪刀怪';
                    break;
                case 5:
                    str = '呆呆鸟';
                    break;
                case 6:
                    str = '面包机';
                    break;
                case 7:
                    str = '奶牛';
                    break;
            }
            return str;
        }
        static getItemNameById(id) {
            let str = '';
            switch (id) {
                case 0:
                    str = '可乐手臂';
                    break;
                case 1:
                    str = '斑马腿';
                    break;
                case 2:
                    str = '喷水枪';
                    break;
                case 3:
                    str = '章鱼触手';
                    break;
                case 4:
                    str = '剪刀手';
                    break;
                case 5:
                    str = '翅膀';
                    break;
                case 6:
                    str = '机器手臂';
                    break;
                case 7:
                    str = '牛奶壶';
                    break;
                case 8:
                    str = '假手';
                    break;
                case 9:
                    str = '喷胶器';
                    break;
                case 10:
                    str = '马桶';
                    break;
                case 11:
                    str = '怪物手臂';
                    break;
                case 12:
                    str = '铁棒';
                    break;
                case 13:
                    str = '植物手';
                    break;
            }
            return str;
        }
        static getSkillTimeByTypeId(id) {
            let time = 0;
            switch (id) {
                case 1:
                    time = Math.random() * 2 + 6;
                    break;
                case 2:
                    time = Math.random() * 2 + 5.5;
                    break;
                case 3:
                    time = Math.random() * 2 + 5;
                    break;
                case 4:
                    time = Math.random() * 2 + 4.5;
                    break;
                case 5:
                    time = Math.random() * 2 + 4;
                    break;
            }
            return time;
        }
        static getAttackEventTime(bodyId) {
            let time = 0;
            switch (bodyId) {
                case 0:
                    time = 1330;
                    break;
                case 1:
                    time = 880;
                    break;
                case 2:
                    time = 880;
                    break;
                case 3:
                    time = 880;
                    break;
                case 4:
                    time = 1000;
                    break;
                case 5:
                    time = 1200;
                    break;
                case 6:
                    time = 750;
                    break;
                case 7:
                    time = 880;
                    break;
            }
            return time;
        }
        static getDamageByType(type) {
            let dmg = 0;
            switch (type) {
                case 1:
                    dmg = Math.random() * 50 + 30;
                    break;
                case 2:
                    dmg = Math.random() * 50 + 40;
                    break;
                case 3:
                    dmg = Math.random() * 50 + 50;
                    break;
                case 4:
                    dmg = Math.random() * 50 + 60;
                    break;
                case 5:
                    dmg = Math.random() * 50 + 70;
                    break;
            }
            return dmg;
        }
        static getHpByType(type) {
            let hp = 0;
            switch (type) {
                case 1:
                    hp = Math.random() * 200 + 500;
                    break;
                case 2:
                    hp = Math.random() * 200 + 600;
                    break;
                case 3:
                    hp = Math.random() * 200 + 700;
                    break;
                case 4:
                    hp = Math.random() * 200 + 800;
                    break;
                case 5:
                    hp = Math.random() * 200 + 900;
                    break;
            }
            return hp;
        }
        static getIsNearByHandId(id) {
            return id == 1 || id == 2 || id == 3 || id == 4 || id == 5 || id == 8 || id == 11 || id == 12 || id == 13;
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
        static blinkLoop(node) {
            this.alphaTo2D(node, 0, 200, () => {
                this.alphaTo2D(node, 1, 200, () => {
                    this.blinkLoop(node);
                });
            });
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
        static BezierPoints(p1, cp1, p2, length = 60) {
            let arr = [];
            let x1 = p1.z;
            let y1 = p1.y;
            let cx = cp1.z;
            let cy = cp1.y;
            let x2 = p2.z;
            let y2 = p2.y;
            for (let i = 0; i <= length; i++) {
                let t = i / length;
                var x = (1 - t) * (1 - t) * x1 + 2 * t * (1 - t) * cx + t * t * x2, y = (1 - t) * (1 - t) * y1 + 2 * t * (1 - t) * cy + t * t * y2;
                arr.push(new Laya.Vector3(0, y * 2, x));
            }
            return arr;
        }
        static upDownTween(node, startPos, desPos) {
            this.TmoveToY(node, 1200, desPos, () => {
                if (!node.active)
                    return;
                this.TmoveToY(node, 1200, startPos, () => {
                    if (!node.active)
                        return;
                    this.upDownTween(node, startPos, desPos);
                }, Laya.Ease.sineInOut);
            }, Laya.Ease.sineInOut);
        }
    }

    class CameraCrl extends Laya.Script {
        constructor() {
            super();
            this.isZooming = false;
        }
        onAwake() {
            this.myOwner = this.owner;
        }
        onDisable() {
        }
        gameStart() {
            let pos = this.myOwner.transform.position.clone();
            pos.x -= 4;
            pos.y -= 1;
            pos.z += 4;
            let pos1 = pos.clone();
            pos1.z += 13;
            Utility.TmoveTo(this.myOwner, 500, pos, () => {
                Utility.TmoveTo(this.myOwner, 5500, pos1, () => {
                });
            });
            let r = this.myOwner.transform.rotationEuler.clone();
            r.x -= 20;
            r.y += 25;
            Utility.RotateTo(this.myOwner, 500, r, null);
        }
        zoomSkillTarget(node) {
            if (this.isZooming)
                return;
            this.isZooming = true;
            let myPos = this.myOwner.transform.position.clone();
            let myR = this.myOwner.transform.rotationEuler.clone();
            this.myOwner.transform.lookAt(node.transform.position.clone(), new Laya.Vector3(0, 1, 0), false);
            let dir = Utility.getDirectionAToB(this.myOwner, node);
            Laya.Vector3.scale(dir, 2, dir);
            Laya.Vector3.add(myPos, dir, dir);
            Utility.TmoveTo(this.myOwner, 800, dir, null);
            Laya.timer.once(2000, this, () => {
                Utility.TmoveTo(this.myOwner, 500, myPos, () => {
                    this.isZooming = false;
                });
                this.myOwner.transform.rotationEuler = myR;
            });
        }
        onUpdate() {
            if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) {
                return;
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

    class Effects {
        static getFXByName(name, parent) {
            let res = GameLogic.Share._effectNode.getChildByName(name);
            let fx = Laya.Sprite3D.instantiate(res, parent, false, new Laya.Vector3());
            return fx;
        }
        static createWaterSpray(pos) {
            let fx = this.getFXByName('FX_Water_Spray', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Laya.timer.once(1000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createWindTurn(pos) {
            let fx = this.getFXByName('FX_Wind_Turn', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Laya.timer.once(4000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createSmoke(pos) {
            let fx = this.getFXByName('FX_Smoke_1', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Laya.timer.once(2000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createHurt1(pos) {
            let fx = this.getFXByName('FX_TakeDamage_1', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Laya.timer.once(1000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createHurt2(pos) {
            let fx = this.getFXByName('FX_TakeDamage_2', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Laya.timer.once(1000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createHurt3(pos) {
            let fx = this.getFXByName('FX_TakeDamage_3', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Laya.timer.once(1000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createFlyCast(node) {
            let pos = node.transform.position.clone();
            pos.y += 1;
            let fx = this.getFXByName('FX_FlyCast_1', node);
            fx.transform.position = pos;
            Laya.timer.once(3000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
            let fx1 = this.getFXByName('FX_FlyCast_2', node);
            fx1.transform.position = pos;
            Laya.timer.once(2500, this, () => {
                Utility.ScaleTo(fx, 200, new Laya.Vector3(0, 0, 0), () => {
                    if (fx && !fx.destroyed)
                        fx.destroy();
                });
                Utility.ScaleTo(fx1, 200, new Laya.Vector3(0, 0, 0), () => {
                    if (fx1 && !fx1.destroyed)
                        fx1.destroy();
                });
            });
        }
        static createFlyCast3(node) {
            let pos = node.transform.position.clone();
            pos.y += 0.05;
            let fx = this.getFXByName('FX_FlyCast_3', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Laya.timer.once(3000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createAttack1(pos, desPos, cb) {
            let fx = this.getFXByName('FX_Attack_1', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Utility.TmoveTo(fx, 500, desPos, () => {
                fx.destroy();
                cb && cb();
            });
        }
        static createAttack2(pos, desPos, cb) {
            let fx = this.getFXByName('FX_Attack_2', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Utility.TmoveTo(fx.getChildAt(0), 500, desPos, () => {
                fx.destroy();
                cb && cb();
            });
        }
        static createFlyCastBullet(pos, desPos, cb) {
            let fx = this.getFXByName('FX_Fire_1', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Utility.TmoveTo(fx, 500, desPos, () => {
                fx.destroy();
                cb && cb();
            });
        }
        static createSkillHurt(pos) {
            let fx = this.getFXByName('FX_TakeDamage_4', GameLogic.Share._levelNode);
            fx.transform.position = pos;
            Laya.timer.once(1000, this, () => {
                if (fx && !fx.destroyed)
                    fx.destroy();
            });
        }
        static createFireWork() {
            let fx = this.getFXByName('FX_FireWork', GameLogic.Share._levelNode);
            fx.transform.position = new Laya.Vector3(0, 4, 15);
        }
    }

    class MergeSprite extends Laya.Script {
        constructor() {
            super();
            this.pointArr = [];
            this.curIndex = 0;
        }
        onAwake() {
            this.myOwnwer = this.owner;
        }
        init(arr) {
            this.pointArr = arr;
            this.move();
        }
        move() {
            Utility.TmoveTo(this.myOwnwer, 20, this.pointArr[this.curIndex], () => {
                this.curIndex++;
                if (this.curIndex >= this.pointArr.length) {
                    this.rotateLoop();
                    Effects.createWaterSpray(this.myOwnwer.transform.position);
                    SoundMgr.instance.playSoundEffect('water');
                    return;
                }
                this.move();
            });
        }
        rotateLoop() {
            Laya.timer.frameLoop(1, this, () => {
                let p = Utility.RotateWithPoint(this.myOwnwer, new Laya.Vector3(0, -1, 0), 2);
                this.myOwnwer.transform.position = p.clone();
            });
        }
        onUpdate() {
        }
    }

    var PlayerAniType;
    (function (PlayerAniType) {
        PlayerAniType["ANI_IDLE"] = "Idle";
        PlayerAniType["ANI_RUN"] = "Run";
        PlayerAniType["ANI_ATTACK"] = "Attack";
        PlayerAniType["ANI_DEATH"] = "Death";
        PlayerAniType["ANI_FLYCAST"] = "FlyCast";
        PlayerAniType["ANI_TAKEDAMEGE"] = "TakeDamage";
    })(PlayerAniType || (PlayerAniType = {}));

    class Monster extends Laya.Script {
        constructor() {
            super();
            this.ani = null;
            this.target = null;
            this.armNodeL = null;
            this.armNodeR = null;
            this.itemData = null;
            this.hp = 1000;
            this.hpMax = 1000;
            this.moveSpeed = 0.04;
            this.curAni = PlayerAniType.ANI_IDLE;
            this.isAttacking = false;
            this.isSkilling = false;
            this.isMoveing = true;
            this.isNear = true;
            this.isPlayer = true;
            this.isDied = false;
        }
        onAwake() {
            this.myOwner = this.owner;
            this.ani = this.myOwner.getComponent(Laya.Animator);
            this.ani.getControllerLayer().getAnimatorState(PlayerAniType.ANI_ATTACK).clip.islooping = false;
            this.armNodeL = Utility.findNodeByName(this.myOwner, 'ArmNodeL');
            this.armNodeR = Utility.findNodeByName(this.myOwner, 'ArmNodeR');
            let handL = this.armNodeL.getChildAt(0);
            let aniL = handL.getComponent(Laya.Animator);
            aniL.getControllerLayer().getAnimatorState('Attack').clip.islooping = false;
            let handR = this.armNodeR.getChildAt(0);
            let aniR = handR.getComponent(Laya.Animator);
            aniR.getControllerLayer().getAnimatorState('Attack').clip.islooping = false;
        }
        playAni(name, speed = 1) {
            if (name == this.curAni && name != PlayerAniType.ANI_ATTACK)
                return;
            Laya.timer.clear(this, this.attackComplete);
            Laya.timer.clear(this, this.shootBullet);
            let handL = this.armNodeL.getChildAt(0);
            let aniL = handL.getComponent(Laya.Animator);
            aniL.play('Idle', 0, 0);
            let handR = this.armNodeR.getChildAt(0);
            let aniR = handR.getComponent(Laya.Animator);
            aniR.play('Idle', 0, 0);
            if (name != PlayerAniType.ANI_ATTACK)
                this.isAttacking = false;
            if (name != PlayerAniType.ANI_FLYCAST)
                this.isSkilling = false;
            if (name != PlayerAniType.ANI_RUN)
                this.isMoveing = false;
            this.curAni = name;
            this.ani.speed = speed;
            this.ani.crossFade(name, 0.02, 0, 0);
        }
        init(isPlayer, item) {
            this.itemData = item;
            this.isPlayer = isPlayer;
            this.isNear = PlayerDataMgr.getIsNearByHandId(item.handId);
            let hpV = PlayerDataMgr.getHpByType(item.type);
            this.hp = isPlayer ? hpV * 1.5 : hpV;
            this.hpMax = isPlayer ? hpV * 1.5 : hpV;
            Laya.timer.once(isPlayer ? 1000 : 6000, this, () => {
                this.chooseTarget();
                if (!isPlayer)
                    this.monsterAutoSkill();
            });
        }
        chooseTarget() {
            if (this.isPlayer) {
                let arr = [];
                for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
                    let enemy = GameLogic.Share._enemyNode.getChildAt(i);
                    let crl = enemy.getComponent(Monster);
                    if (crl.isDied) {
                        arr.push(999);
                        continue;
                    }
                    arr.push(Utility.getWorldDis(enemy, this.myOwner));
                }
                let hadEnemy = false;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] != 999) {
                        hadEnemy = true;
                        break;
                    }
                }
                if (!hadEnemy) {
                    this.target = null;
                    return;
                }
                let arr1 = [].concat(arr);
                arr1.sort((a, b) => { return a - b; });
                let id = arr.indexOf(arr1[0]);
                this.target = GameLogic.Share._enemyNode.getChildAt(id);
            }
            else {
                let arr = [];
                for (let i = 0; i < GameLogic.Share._playerNode.numChildren; i++) {
                    let player = GameLogic.Share._playerNode.getChildAt(i);
                    let crl = player.getComponent(Monster);
                    if (crl.isDied) {
                        arr.push(999);
                        continue;
                    }
                    arr.push(Utility.getWorldDis(player, this.myOwner));
                }
                let hadPlayer = false;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] != 999) {
                        hadPlayer = true;
                        break;
                    }
                }
                if (!hadPlayer) {
                    this.target = null;
                    return;
                }
                let arr1 = [].concat(arr);
                arr1.sort((a, b) => { return a - b; });
                let id = arr.indexOf(arr1[0]);
                this.target = GameLogic.Share._playerNode.getChildAt(id);
            }
        }
        moveToTarget() {
            if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling || this.isAttacking || this.isDied)
                return;
            if (this.target.getComponent(Monster).isDied) {
                this.chooseTarget();
                return;
            }
            let p1 = this.myOwner.transform.position.clone();
            let p2 = this.target.transform.position.clone();
            p1.y = 0;
            p2.y = 0;
            if (Laya.Vector3.distance(p1, p2) > (this.isNear ? 2 : 3)) {
                let dir = new Laya.Vector3(0, 0, 0);
                Laya.Vector3.subtract(p2, p1, dir);
                Laya.Vector3.normalize(dir, dir);
                Laya.Vector3.scale(dir, this.moveSpeed, dir);
                let myPos = this.myOwner.transform.position.clone();
                Laya.Vector3.add(myPos, dir, myPos);
                this.myOwner.transform.position = myPos;
                this.isMoveing = true;
                this.playAni(PlayerAniType.ANI_RUN);
            }
            else {
                this.isMoveing = false;
                this.attack();
            }
        }
        attack() {
            if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling || this.isAttacking || this.isDied)
                return;
            this.isAttacking = true;
            if (this.isNear) {
                this.playAni(PlayerAniType.ANI_ATTACK);
                let time = this.ani.getControllerLayer().getAnimatorState(PlayerAniType.ANI_ATTACK).clip.duration();
                Laya.timer.once(time * 1000, this, () => { this.isAttacking = false; });
                Laya.timer.once(PlayerDataMgr.getAttackEventTime(this.itemData.bodyId), this, this.attackComplete);
            }
            else {
                if (this.isPlayer)
                    SoundMgr.instance.playSoundEffect('shoot');
                this.playAni(PlayerAniType.ANI_IDLE);
                let handL = this.armNodeL.getChildAt(0);
                let aniL = handL.getComponent(Laya.Animator);
                aniL.play('Attack', 0, 0);
                let handR = this.armNodeR.getChildAt(0);
                let aniR = handR.getComponent(Laya.Animator);
                aniR.play('Attack', 0, 0);
                Laya.timer.once(500, this, this.shootBullet);
                Laya.timer.once(1000, this, () => { this.isAttacking = false; });
            }
        }
        attackComplete() {
            if (!this.target)
                return;
            let targetCrl = this.target.getComponent(Monster);
            targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type));
        }
        shootBullet() {
            if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling)
                return;
            let posL = Utility.findNodeByName(this.armNodeL, 'Pos').transform.position.clone();
            let posR = Utility.findNodeByName(this.armNodeR, 'Pos').transform.position.clone();
            let desPos = this.target.transform.position.clone();
            desPos.y += 1;
            if (this.itemData.handId == 6) {
                Effects.createAttack2(posL, desPos, () => {
                    if (!this.target)
                        return;
                    let targetCrl = this.target.getComponent(Monster);
                    targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type) / 3, 2);
                });
                Effects.createAttack2(posR, desPos, () => {
                    if (!this.target)
                        return;
                    let targetCrl = this.target.getComponent(Monster);
                    targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type) / 3, 2);
                });
            }
            else {
                Effects.createAttack1(posL, desPos, () => {
                    if (!this.target)
                        return;
                    let targetCrl = this.target.getComponent(Monster);
                    targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type) / 3, 1);
                });
                Effects.createAttack1(posR, desPos, () => {
                    if (!this.target)
                        return;
                    let targetCrl = this.target.getComponent(Monster);
                    targetCrl.decHp(PlayerDataMgr.getDamageByType(this.itemData.type) / 3, 1);
                });
            }
        }
        skill() {
            if (!this.target || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || this.isSkilling || this.isDied)
                return;
            Effects.createFlyCast(this.myOwner);
            if (this.isPlayer)
                SoundMgr.instance.playSoundEffect('flyCast');
            this.isSkilling = true;
            this.playAni(PlayerAniType.ANI_FLYCAST);
            let pos = this.myOwner.transform.position.clone();
            let pos1 = pos.clone();
            pos.y += 1.5;
            Utility.TmoveTo(this.myOwner, 800, pos, () => {
                Laya.timer.once(1200, this, () => {
                    Utility.TmoveTo(this.myOwner, 300, pos1, () => {
                        Effects.createFlyCast3(this.myOwner);
                        this.isSkilling = false;
                        let opNode = this.isPlayer ? GameLogic.Share._enemyNode : GameLogic.Share._playerNode;
                        for (let i = 0; i < opNode.numChildren; i++) {
                            let node = opNode.getChildAt(i);
                            let crl = node.getComponent(Monster);
                            if (crl.isDied)
                                continue;
                            let opPos = node.transform.position.clone();
                            opPos.y += 1;
                            let myPos = this.myOwner.transform.position.clone();
                            myPos.y += 1;
                            Effects.createFlyCastBullet(myPos, opPos, () => {
                                crl.decHp(PlayerDataMgr.getDamageByType(crl.itemData.type) * 2, 4);
                            });
                        }
                    });
                });
            }, Laya.Ease.linearIn);
            if (this.isPlayer) {
                GameLogic.Share._cameraCrl.zoomSkillTarget(this.myOwner);
            }
        }
        monsterAutoSkill() {
            Laya.timer.once(Math.random() * 5000 + 7000, this, () => {
                this.skill();
                this.monsterAutoSkill();
            });
        }
        decHp(v, type = 3) {
            if (this.isDied)
                return;
            let pos = this.myOwner.transform.position.clone();
            if (type == 1) {
                pos.y += 1;
                Effects.createHurt1(pos);
                SoundMgr.instance.playSoundEffect('waterHit');
            }
            else if (type == 2) {
                pos.y += 1;
                Effects.createHurt2(pos);
                SoundMgr.instance.playSoundEffect('coin');
            }
            else if (type == 3) {
                pos.y += 1;
                Effects.createHurt3(pos);
                SoundMgr.instance.playSoundEffect('hit');
            }
            else if (type == 4) {
                pos.y += 1;
                Effects.createSkillHurt(pos);
                SoundMgr.instance.playSoundEffect('fire');
            }
            this.hp -= this.isPlayer ? v / 2 : v;
            if (this.hp < 0) {
                this.hp = 0;
                if (this.isSkilling)
                    return;
                this.isDied = true;
                Laya.timer.clearAll(this);
                this.playAni(PlayerAniType.ANI_DEATH);
            }
        }
        onUpdate() {
            this.moveToTarget();
            if (this.target) {
                let pos = this.target.transform.position.clone();
                pos.y = 0;
                this.myOwner.transform.lookAt(pos, new Laya.Vector3(0, 1, 0), false);
                this.myOwner.transform.rotate(new Laya.Vector3(0, 180, 0), false, false);
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
            this._tempItemNode = null;
            this._playerNode = null;
            this._enemyNode = null;
            this._effectNode = null;
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
                        title: '融合怪物',
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
            SoundMgr.instance.stopMusic();
            SoundMgr.instance.playSoundEffect('warning');
            this.isStartGame = true;
            this._scene.getChildByName('Scene_Ground1').active = false;
            this._scene.getChildByName('Scene_Ground2').active = true;
            this._scene.getChildByName('Scene_1').active = true;
            this._scene.getChildByName('Object_01').active = false;
            this._scene.getChildByName('Back_01').active = false;
            this._scene.getChildByName('Chashka_01').active = false;
            this._tempItemNode.destroyChildren();
            this.createMyMonster();
            this.createEnemyMonster();
            Laya.Scene.open('MyScenes/GameUI.scene');
            this._cameraCrl.gameStart();
            Laya.timer.frameLoop(1, this, this.checkGameOver);
            this._scene.getChildByName('Object_01').transform.position = new Laya.Vector3(0, 0, 0);
        }
        createLevel() {
            this._effectNode = Utility.getSprite3DResByUrl('EffectNode.lh', this._levelNode);
            this._effectNode.active = false;
            this._tempItemNode = this._levelNode.addChild(new Laya.Sprite3D());
            this._playerNode = this._levelNode.addChild(new Laya.Sprite3D());
            this._enemyNode = this._levelNode.addChild(new Laya.Sprite3D());
            this._scene.getChildByName('Scene_Ground1').active = true;
            this._scene.getChildByName('Scene_Ground2').active = false;
            this._scene.getChildByName('Scene_1').active = false;
            this._scene.getChildByName('Object_01').active = false;
            this._scene.getChildByName('Back_01').active = true;
            this._scene.getChildByName('Chashka_01').active = true;
            Laya.timer.frameLoop(1, this, () => {
                this._scene.getChildByName('Chashka_01').getChildAt(0).transform.rotate(new Laya.Vector3(0, -2, 0), true, false);
            });
        }
        createMonster(bodyId, handId, backId) {
            let bodyDir = 'Body_' + (bodyId + 1) + '.lh';
            let handDir = 'Hand_' + (handId + 1) + '_L.lh';
            let backDir = 'Hand_' + (backId + 1) + '_L.lh';
            let body = Utility.getSprite3DResByUrl(bodyDir, this._levelNode, false);
            body.transform.position = new Laya.Vector3(0, 3, 0);
            let armL = Utility.findNodeByName(body, 'ArmNodeL');
            let l = Utility.getSprite3DResByUrl(handDir, armL, false);
            l.transform.localScale = new Laya.Vector3(1, 1, 1);
            l.transform.position = armL.transform.position.clone();
            l.transform.rotationEuler = armL.transform.rotationEuler.clone();
            let armR = Utility.findNodeByName(body, 'ArmNodeR');
            let r = Utility.getSprite3DResByUrl(handDir, armR, false);
            r.transform.localScale = new Laya.Vector3(-1, 1, 1);
            r.transform.position = armR.transform.position.clone();
            r.transform.rotationEuler = armR.transform.rotationEuler.clone();
            if (backId == 5) {
                let wingL = Utility.findNodeByName(body, 'WingL');
                let wl = Utility.getSprite3DResByUrl(backDir, wingL, false);
                wl.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
                wl.transform.position = wingL.transform.position.clone();
                wl.transform.rotationEuler = wingL.transform.rotationEuler.clone();
                let wingR = Utility.findNodeByName(body, 'WingR');
                let wr = Utility.getSprite3DResByUrl(backDir, wingR, false);
                wr.transform.setWorldLossyScale(new Laya.Vector3(-1, 1, 1));
                wr.transform.position = wingR.transform.position.clone();
                wr.transform.rotationEuler = wingR.transform.rotationEuler.clone();
            }
            else {
                let back = Utility.findNodeByName(body, 'Back');
                let h = Utility.getSprite3DResByUrl(backDir, back, false);
                h.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
                let p = back.transform.position.clone();
                h.transform.position = p;
                h.transform.rotationEuler = back.transform.rotationEuler.clone();
            }
            return body;
        }
        createUIBody(bodyId) {
            let bodyDir = 'Body_' + (bodyId + 1) + '.lh';
            let body = Utility.getSprite3DResByUrl(bodyDir, this._tempItemNode, false);
            body.transform.position = new Laya.Vector3(0, 0, -5);
            let desPos = new Laya.Vector3(0, 0.4, Math.random() * 1 + 0.5);
            let pArr = Utility.BezierPoints(new Laya.Vector3(2, 0, -5), new Laya.Vector3(0, 4, -2.5), desPos, 30);
            let crl = body.addComponent(MergeSprite);
            crl.init(pArr);
        }
        createUIItem(handId) {
            let handDir = 'Hand_' + (handId + 1) + '_L.lh';
            let r = Utility.getSprite3DResByUrl(handDir, this._tempItemNode, false);
            r.transform.position = new Laya.Vector3(0, 0, -5);
            let desPos = new Laya.Vector3(0, 1, Math.random() * 1 + 0.5);
            let pArr = Utility.BezierPoints(new Laya.Vector3(2, 0, -5), new Laya.Vector3(0, 4, -2.5), desPos, 30);
            let crl = r.addComponent(MergeSprite);
            crl.init(pArr);
        }
        combineBody(bodyId, handId, backId) {
            this._tempItemNode.destroyChildren();
            this._scene.getChildByName('Chashka_01').active = false;
            this._scene.getChildByName('Object_01').active = true;
            this._scene.getChildByName('Object_01').getComponent(Laya.Animator).play('start');
            Laya.timer.once(400, this, () => {
                this._scene.getChildByName('Object_01').getComponent(Laya.Animator).play('idle');
                let body = this.createMonster(bodyId, handId, backId);
                this._tempItemNode.addChild(body);
                body.transform.rotate(new Laya.Vector3(0, 180, 0), false, false);
                body.transform.position = new Laya.Vector3(0, 3.7, 0);
                body.transform.setWorldLossyScale(new Laya.Vector3(2, 2, 2));
                let p1 = this._scene.getChildByName('Object_01').transform.position.clone();
                let p2 = p1.clone();
                p2.y += 0.2;
                Utility.upDownTween(this._scene.getChildByName('Object_01'), p1, p2);
                p1 = body.transform.position.clone();
                p2 = p1.clone();
                p2.y += 0.2;
                Utility.upDownTween(body, p1, p2);
            });
        }
        createMyMonster() {
            let count = PlayerDataMgr.getPlayerData().chooseArr.length;
            for (let i = 0; i < count; i++) {
                let item = PlayerDataMgr.getPlayerData().chooseArr[i];
                let monster = this.createMonster(item.bodyId, item.handId, item.backId);
                this._playerNode.addChild(monster);
                let x = 0;
                if (i == 1)
                    x = -2;
                if (i == 2)
                    x = 2;
                monster.transform.position = new Laya.Vector3(x, 0, 0);
                let crl = monster.addComponent(Monster);
                crl.init(true, item);
            }
        }
        createEnemyMonster() {
            let count = PlayerDataMgr.getPlayerData().chooseArr.length;
            for (let i = 0; i < count; i++) {
                let item = new ItemId();
                item.bodyId = Utility.GetRandom(0, 7);
                item.handId = Utility.GetRandom(0, 13);
                item.backId = Utility.GetRandom(0, 13);
                item.type = Utility.GetRandom(1, 5);
                let monster = this.createMonster(item.bodyId, item.handId, item.backId);
                this._enemyNode.addChild(monster);
                let x = 0;
                if (i == 1)
                    x = -2;
                if (i == 2)
                    x = 2;
                monster.transform.position = new Laya.Vector3(x, 0, 15);
                monster.transform.rotate(new Laya.Vector3(0, 180, 0), false, false);
                let crl = monster.addComponent(Monster);
                crl.init(false, item);
            }
        }
        checkGameOver() {
            if (!this.isStartGame || this.isGameOver)
                return;
            let isLose = true;
            for (let i = 0; i < this._playerNode.numChildren; i++) {
                let crl = this._playerNode.getChildAt(i).getComponent(Monster);
                if (!crl.isDied) {
                    isLose = false;
                    break;
                }
            }
            let isWin = true;
            for (let i = 0; i < this._enemyNode.numChildren; i++) {
                let crl = this._enemyNode.getChildAt(i).getComponent(Monster);
                if (!crl.isDied) {
                    isWin = false;
                    break;
                }
            }
            if (isLose) {
                this.gameOver(false);
            }
            if (isWin) {
                this.gameOver(true);
            }
        }
        gameOver(isWin) {
            Laya.timer.clearAll(this);
            WxApi.DoVibrate(false);
            if (isWin) {
                SoundMgr.instance.playSoundEffect('win');
                SoundMgr.instance.playSoundEffect('fireWork');
                Effects.createFireWork();
            }
            else {
                SoundMgr.instance.playSoundEffect('lose');
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
            this.videoBtn.visible = FdMgr.homeViedo;
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
            this.winTitle.visible = GameLogic.Share.isWin;
            this.nextBtn.visible = GameLogic.Share.isWin;
            this.loseTitle.visible = !GameLogic.Share.isWin;
            this.restartBtn.visible = !GameLogic.Share.isWin;
            this.light1.visible = GameLogic.Share.isWin;
            this.bounesIcon1.visible = GameLogic.Share.isWin;
            this.light2.visible = GameLogic.Share.isWin;
            this.bounesIcon2.visible = GameLogic.Share.isWin;
            Utility.addClickEvent(this.nextBtn, this, this.closeCB);
            Utility.addClickEvent(this.restartBtn, this, this.closeCB);
            if (GameLogic.Share.isWin) {
                let bodyId = PlayerDataMgr.getFreeBody();
                let itemId = PlayerDataMgr.getFreeItem();
                this.light1.visible = bodyId >= 0;
                this.bounesIcon1.visible = bodyId >= 0;
                this.light2.visible = itemId >= 0;
                this.bounesIcon2.visible = itemId >= 0;
                if (bodyId >= 0) {
                    this.bounesIcon1.skin = 'finishUI/Items/Body_' + (bodyId + 1) + '.png';
                    PlayerDataMgr.getPlayerData().skinArr[bodyId] = 1;
                }
                if (itemId >= 0) {
                    this.bounesIcon2.skin = 'finishUI/Items/Hand_' + (itemId + 1) + '_L.png';
                    PlayerDataMgr.getPlayerData().itemArr[itemId] = 1;
                }
                PlayerDataMgr.setPlayerData();
            }
            FdMgr.inFinish(GameLogic.Share.isWin ? this.nextBtn : this.restartBtn);
        }
        onClosed() {
        }
        closeCB() {
            FdMgr.closeFinish(() => {
                if (GameLogic.Share.isWin) {
                    PlayerDataMgr.getPlayerData().grade++;
                    PlayerDataMgr.setPlayerData();
                }
                else {
                    PlayerDataMgr.getPlayerData().chooseArr.pop();
                    PlayerDataMgr.setPlayerData();
                }
                GameLogic.Share.restartGame();
                Laya.Scene.open('MyScenes/StartUI.scene');
            });
        }
    }

    class RotateLoop extends Laya.Script {
        constructor() {
            super();
            this.myOwnwer = null;
        }
        onAwake() {
            this.myOwnwer = this.owner;
        }
        onUpdate() {
            this.myOwnwer.rotation += 1;
        }
    }

    class GameUI extends Laya.Scene {
        constructor() {
            super();
            this.barArr = [0, 0, 0];
            this.timeArr = [];
        }
        onOpened() {
            GameUI.Share = this;
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Laya.timer.frameLoop(1, this, this.myUpdate);
            for (let i = 0; i < this.skillBtnNode.numChildren; i++) {
                let btn = this.skillBtnNode.getChildAt(i);
                Utility.addClickEvent(btn, this, this.clickSkillBtn, [i]);
            }
            for (let i = 0; i < PlayerDataMgr.getPlayerData().chooseArr.length; i++) {
                let type = PlayerDataMgr.getPlayerData().chooseArr[i].type;
                this.timeArr.push(PlayerDataMgr.getSkillTimeByTypeId(type));
            }
            Laya.timer.once(5000, this, () => {
                Laya.timer.loop(50, this, this.addBar);
            });
            FdMgr.inGame();
        }
        onClosed() {
            Laya.timer.clearAll(this);
        }
        updateSkillBtn() {
            let count = PlayerDataMgr.getPlayerData().chooseArr.length;
            for (let i = 0; i < this.skillBtnNode.numChildren; i++) {
                let btn = this.skillBtnNode.getChildAt(i);
                if (i >= count) {
                    btn.visible = false;
                    continue;
                }
                btn.visible = true;
                let light = btn.getChildByName('light');
                let bg = btn.getChildByName('bg');
                let bar = btn.getChildByName('bar');
                let icon = btn.getChildByName('icon');
                let died = btn.getChildByName('died');
                let guide = btn.getChildByName('guide');
                let ready = btn.getChildByName('ready');
                light.visible = this.barArr[i] >= 1;
                bg.skin = 'gameUI/yxz_pj_dk' + PlayerDataMgr.getPlayerData().chooseArr[i].type + '.png';
                bar.skin = 'gameUI/yxz_pj_cd' + PlayerDataMgr.getPlayerData().chooseArr[i].type + '.png';
                bar.height = this.barArr[i] * 164;
                icon.skin = 'gameUI/Body/Body_' + (PlayerDataMgr.getPlayerData().chooseArr[i].bodyId + 1) + '.png';
                died.visible = GameLogic.Share._playerNode.getChildAt(i).getComponent(Monster).isDied;
                guide.visible = PlayerDataMgr.getPlayerData().grade == 1 && this.barArr[i] >= 1;
                ready.visible = this.barArr[i] >= 1;
                if (GameLogic.Share._playerNode.getChildAt(i).getComponent(Monster).isDied) {
                    bg.gray = true;
                    icon.gray = true;
                }
            }
            if (count == 1)
                this.skillBtnNode.getChildAt(0).x = 0;
            if (count == 2) {
                this.skillBtnNode.getChildAt(0).x = -100;
                this.skillBtnNode.getChildAt(1).x = 100;
            }
            if (count == 3) {
                this.skillBtnNode.getChildAt(0).x = 0;
                this.skillBtnNode.getChildAt(1).x = 200;
                this.skillBtnNode.getChildAt(2).x = -200;
            }
        }
        clickSkillBtn(arr) {
            let id = arr[0];
            if (this.barArr[id] < 1)
                return;
            this.barArr[id] = 0;
            let node = GameLogic.Share._playerNode.getChildAt(id);
            let crl = node.getComponent(Monster);
            crl.skill();
        }
        addBar() {
            for (let i = 0; i < this.timeArr.length; i++) {
                if (GameLogic.Share._playerNode.getChildAt(i).getComponent(Monster).isDied) {
                    this.barArr[i] = 0;
                    continue;
                }
                this.barArr[i] += 0.05 * (1 / this.timeArr[i]);
                if (this.barArr[i] > 1)
                    this.barArr[i] = 1;
            }
        }
        updatePlayerHp() {
            for (let i = 0; i < GameLogic.Share._playerNode.numChildren; i++) {
                let player = GameLogic.Share._playerNode.getChildAt(i);
                let playerCrl = player.getComponent(Monster);
                let bar = this.playerHpNode.getChildAt(i);
                let op = new Laya.Vector4(0, 0, 0);
                let hPos = player.transform.position.clone();
                hPos.y += 2.5;
                GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
                bar.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
                bar.value = playerCrl.hp / playerCrl.hpMax;
            }
            for (let i = 0; i < GameLogic.Share._enemyNode.numChildren; i++) {
                let enemy = GameLogic.Share._enemyNode.getChildAt(i);
                let enemyCrl = enemy.getComponent(Monster);
                let bar = this.enemyHpNode.getChildAt(i);
                let op = new Laya.Vector4(0, 0, 0);
                let hPos = enemy.transform.position.clone();
                hPos.y += 2.5;
                GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op);
                bar.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY);
                bar.value = enemyCrl.hp / enemyCrl.hpMax;
            }
        }
        myUpdate() {
            this.updateSkillBtn();
            this.updatePlayerHp();
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

    class Blink extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.myOwner = this.owner;
            Utility.blinkLoop(this.myOwner);
        }
        onUpdate() {
        }
    }

    class LoadingUI extends Laya.Scene {
        constructor() {
            super();
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
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
            var resUrl = [
                WxApi.UnityPath + 'Body_1.lh',
                WxApi.UnityPath + 'Body_2.lh',
                WxApi.UnityPath + 'Body_3.lh',
                WxApi.UnityPath + 'Body_4.lh',
                WxApi.UnityPath + 'Body_5.lh',
                WxApi.UnityPath + 'Body_6.lh',
                WxApi.UnityPath + 'Body_7.lh',
                WxApi.UnityPath + 'Body_8.lh',
                WxApi.UnityPath + 'Hand_1_L.lh',
                WxApi.UnityPath + 'Hand_2_L.lh',
                WxApi.UnityPath + 'Hand_3_L.lh',
                WxApi.UnityPath + 'Hand_4_L.lh',
                WxApi.UnityPath + 'Hand_5_L.lh',
                WxApi.UnityPath + 'Hand_6_L.lh',
                WxApi.UnityPath + 'Hand_7_L.lh',
                WxApi.UnityPath + 'Hand_8_L.lh',
                WxApi.UnityPath + 'Hand_9_L.lh',
                WxApi.UnityPath + 'Hand_10_L.lh',
                WxApi.UnityPath + 'Hand_11_L.lh',
                WxApi.UnityPath + 'Hand_12_L.lh',
                WxApi.UnityPath + 'Hand_13_L.lh',
                WxApi.UnityPath + 'Hand_14_L.lh',
                WxApi.UnityPath + 'EffectNode.lh'
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

    class SelectUI extends Laya.Scene {
        constructor() {
            super();
            this.atkNum = 0;
            this.hpNum = 0;
            this.tempAtkNum = 0;
            this.tempHpNum = 0;
            this.bodyId = 0;
            this.handId = 0;
            this.backId = 0;
            this.type = 1;
            this.selectStep = 0;
            this.itemCountArr = [];
        }
        onOpened() {
            this.size(Laya.stage.displayWidth, Laya.stage.displayHeight);
            Laya.timer.frameLoop(1, this, this.myUpdate);
            Utility.addClickEvent(this.startBtn, this, this.startBtnCB);
            for (let i = 0; i < PlayerDataMgr.getPlayerData().itemArr.length; i++) {
                this.itemCountArr.push(2);
            }
            this.initList();
            this.startBtn.getChildAt(0).visible = PlayerDataMgr.getPlayerData().grade == 1;
        }
        onClosed() {
            Laya.timer.clearAll(this);
        }
        updateDataNode() {
            let top = this.dataNode.getChildByName('top');
            let btm = this.dataNode.getChildByName('btm');
            let atk = this.dataNode.getChildByName('atk');
            let hp = this.dataNode.getChildByName('hp');
            let id = Math.floor(this.atkNum / 200) + 1 > 5 ? 5 : Math.floor(this.atkNum / 200) + 1;
            top.skin = 'startUI/pzy_pj_' + id + '.png';
            this.type = id;
            if (this.atkNum < this.tempAtkNum)
                this.atkNum += 5;
            if (this.hpNum < this.tempHpNum)
                this.hpNum += 5;
            if (this.atkNum > this.tempAtkNum)
                this.atkNum = this.tempAtkNum;
            if (this.hpNum > this.tempHpNum)
                this.hpNum = this.tempHpNum;
            atk.value = Math.floor(this.atkNum).toString();
            hp.value = Math.floor(this.hpNum).toString();
        }
        addAtkHp() {
            if (this.selectStep == 0) {
                let hpV = Math.random() * 50 + (50 * this.bodyId);
                this.tempHpNum = hpV;
            }
            else if (this.selectStep == 1) {
                let atkV = Math.random() * 50 + (40 * this.handId + 40 * this.backId);
                this.tempAtkNum = atkV;
            }
            else if (this.selectStep == 2) {
                let atkV = Math.random() * 50 + (40 * this.handId + 40 * this.backId);
                this.tempAtkNum = atkV;
            }
        }
        updateList() {
            let arr = [];
            if (this.selectStep == 0) {
                arr = [].concat(PlayerDataMgr.getPlayerData().skinArr);
            }
            else {
                arr = [].concat(PlayerDataMgr.getPlayerData().itemArr);
            }
            this.myList.array = arr;
        }
        initList() {
            let arr = [];
            arr = [].concat(PlayerDataMgr.getPlayerData().skinArr);
            this.myList.hScrollBarSkin = '';
            this.myList.array = arr;
            this.myList.repeatX = arr.length;
            this.myList.repeatY = 1;
            this.myList.renderHandler = Laya.Handler.create(this, this.onListRender, null, false);
        }
        onListRender(cell, index) {
            if (index >= this.myList.array.length) {
                return;
            }
            var item = cell.getChildByName('item');
            let icon = item.getChildByName('icon');
            let nameBg = item.getChildByName('nameBg');
            let name = nameBg.getChildByName('name');
            let count = item.getChildByName('count');
            let adPic = item.getChildByName('adPic');
            let guide = item.getChildByName('guide');
            if (this.selectStep == 0) {
                icon.skin = 'finishUI/Items/Body_' + (index + 1) + '.png';
                name.text = PlayerDataMgr.getBodyNameById(index);
                count.visible = false;
                adPic.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0;
                guide.visible = PlayerDataMgr.getPlayerData().grade == 1 && index == 0;
            }
            else {
                icon.skin = 'finishUI/Items/Hand_' + (index + 1) + '_L.png';
                name.text = PlayerDataMgr.getItemNameById(index);
                count.visible = PlayerDataMgr.getPlayerData().itemArr[index] == 1;
                count.value = this.itemCountArr[index].toString();
                adPic.visible = PlayerDataMgr.getPlayerData().itemArr[index] == 0;
                if (this.selectStep == 1) {
                    guide.visible = PlayerDataMgr.getPlayerData().grade == 1 && index == 0;
                }
                else if (this.selectStep == 2) {
                    guide.visible = PlayerDataMgr.getPlayerData().grade == 1 && index == 1;
                }
            }
            Utility.addClickEvent(item, this, this.chooseCB, [index]);
        }
        chooseCB(arr) {
            let id = arr[0];
            if (this.selectStep == 0) {
                if (PlayerDataMgr.getPlayerData().skinArr[id] == 0) {
                    let cb = () => {
                        PlayerDataMgr.getPlayerData().skinArr[id] = 1;
                        PlayerDataMgr.setPlayerData();
                        this.updateList();
                    };
                    FdAd.showVideoAd(cb);
                    return;
                }
                this.bodyId = id + 1;
                this.addAtkHp();
                this.selectStep++;
                this.updateList();
                this.myList.scrollTo(0);
                GameLogic.Share.createUIBody(id);
            }
            else if (this.selectStep == 1) {
                if (PlayerDataMgr.getPlayerData().itemArr[id] == 0) {
                    let cb = () => {
                        PlayerDataMgr.getPlayerData().itemArr[id] = 1;
                        PlayerDataMgr.setPlayerData();
                        this.updateList();
                    };
                    FdAd.showVideoAd(cb);
                    return;
                }
                this.itemCountArr[id] -= 1;
                this.handId = id + 1;
                this.addAtkHp();
                this.selectStep++;
                this.updateList();
                GameLogic.Share.createUIItem(id);
            }
            else if (this.selectStep == 2) {
                if (PlayerDataMgr.getPlayerData().itemArr[id] == 0) {
                    let cb = () => {
                        PlayerDataMgr.getPlayerData().itemArr[id] = 1;
                        PlayerDataMgr.setPlayerData();
                        this.updateList();
                    };
                    FdAd.showVideoAd(cb);
                    return;
                }
                this.itemCountArr[id] -= 1;
                this.backId = id + 1;
                this.addAtkHp();
                this.updateList();
                GameLogic.Share.createUIItem(id);
                this.selectStep++;
                this.selectBg.visible = false;
                Laya.timer.once(2500, this, () => {
                    let camR = GameLogic.Share._camera.transform.rotationEuler.clone();
                    camR.x += 15;
                    Utility.RotateTo(GameLogic.Share._camera, 500, camR, null);
                    Effects.createWindTurn(new Laya.Vector3(0, 2.2, 0));
                    SoundMgr.instance.playSoundEffect('wind');
                    Laya.timer.once(2800, this, () => {
                        Effects.createSmoke(new Laya.Vector3(0, 0, 0));
                        SoundMgr.instance.playSoundEffect('merge');
                        GameLogic.Share.combineBody(this.bodyId - 1, this.handId - 1, this.backId - 1);
                        camR = GameLogic.Share._camera.transform.rotationEuler.clone();
                        camR.x -= 15;
                    });
                    Laya.timer.once(5000, this, () => {
                        this.startBtn.visible = true;
                    });
                });
            }
        }
        startBtnCB() {
            this.close();
            PlayerDataMgr.setChooseItem(this.bodyId - 1, this.handId - 1, this.backId - 1, this.type);
            GameLogic.Share.gameStart();
        }
        myUpdate() {
            this.updateDataNode();
            this.selectNum.text = ': ' + this.selectStep + ' / 3';
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
            SoundMgr.instance.playMusic('bgm');
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
            reg("Libs/RotateLoop.ts", RotateLoop);
            reg("View/GameUI.ts", GameUI);
            reg("Mod/UpdateGrade.ts", UpdateGrade);
            reg("Libs/Blink.ts", Blink);
            reg("View/LoadingUI.ts", LoadingUI);
            reg("Mod/UpDownLoop.ts", UpDownLoop);
            reg("View/SelectUI.ts", SelectUI);
            reg("Libs/ScaleLoop.ts", ScaleLoop);
            reg("View/StartUI.ts", StartUI);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "MyScenes/StartUI.scene";
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
