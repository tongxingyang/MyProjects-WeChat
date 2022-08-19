var t = require("../@babel/runtime/helpers/interopRequireDefault")
    , e = t(require("../@babel/runtime/helpers/defineProperty"))
    , a = t(require("../@babel/runtime/regenerator"))
    , n = t(require("../@babel/runtime/helpers/typeof"))
    , i = t(require("../@babel/runtime/helpers/slicedToArray"))
    , o = t(require("../@babel/runtime/helpers/get"))
    , s = t(require("../@babel/runtime/helpers/classCallCheck"))
    , r = t(require("../@babel/runtime/helpers/createClass"))
    , l = t(require("../@babel/runtime/helpers/possibleConstructorReturn"))
    , u = t(require("../@babel/runtime/helpers/getPrototypeOf"))
    , c = t(require("../@babel/runtime/helpers/inherits"));

function h(t) {
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (t = function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return d(t, e);
                var a = Object.prototype.toString.call(t)
                    .slice(8, -1);
                "Object" === a && t.constructor && (a = t.constructor.name);
                if ("Map" === a || "Set" === a) return Array.from(a);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return d(t, e);
            }(t))) {
            var e = 0
                , a = function () {};
            return {
                s: a
                , n: function () {
                    return e >= t.length ? {
                        done: !0
                    } : {
                        done: !1
                        , value: t[e++]
                    };
                }
                , e: function (t) {
                    throw t;
                }
                , f: a
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var n, i, o = !0
        , s = !1;
    return {
        s: function () {
            n = t[Symbol.iterator]();
        }
        , n: function () {
            var t = n.next();
            return o = t.done, t;
        }
        , e: function (t) {
            s = !0, i = t;
        }
        , f: function () {
            try {
                o || null == n.return || n.return();
            } finally {
                if (s) throw i;
            }
        }
    };
}

function d(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
    return n;
}

function f(t) {
    return function () {
        var e, a = (0, u.default)(t);
        if (y()) {
            var n = (0, u.default)(this)
                .constructor;
            e = Reflect.construct(a, arguments, n);
        } else e = a.apply(this, arguments);
        return (0, l.default)(this, e);
    };
}

function y() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
            , !0;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return !1;
    }
}

! function () {
    var t, l, d = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .scaleRatio = 1.2, t._currScaleX = 0
                    , t._currScaleY = 0, t._root = null, t;
            }
            return (0, r.default)(a, [{
                key: "onEnable"
                , value: function () {
                    this._root = this.owner, this._currScaleX = this._root.scaleX, this._currScaleY = this._root.scaleY
                        , this.addListen();
                }
        }, {
                key: "addListen"
                , value: function () {
                    this._root.on(Laya.Event.MOUSE_DOWN, this, this.onClickDown), this._root.on(Laya.Event.MOUSE_UP, this, this.onClickUp)
                        , this._root.on(Laya.Event.MOUSE_OUT, this, this.onClickUp);
                }
        }, {
                key: "removeListen"
                , value: function () {}
        }, {
                key: "onClickDown"
                , value: function () {
                    var t = this._currScaleX * this.scaleRatio
                        , e = this._currScaleY * this.scaleRatio;
                    Laya.Tween.to(this._root, {
                        scaleX: t
                        , scaleY: e
                    }, 100);
                }
        }, {
                key: "onClickUp"
                , value: function () {
                    var t = this._currScaleX
                        , e = this._currScaleY;
                    Laya.Tween.to(this._root, {
                        scaleX: t
                        , scaleY: e
                    }, 100);
                }
        }, {
                key: "onDisable"
                , value: function () {
                    this.removeListen();
                }
        }]), a;
        }(Laya.Script)
        , y = "subpackage/res/data/dataJson"
        , p = {};
    l || (l = {});
    var m, v, k = {
            jsonZip: p
        }
        , g = "res/music/";
    ! function (t) {
        t.BGM = "free_bgm", t.BGM_lv = "level_bgm", t.Button = "click", t.Fail = "fail"
            , t.Success = "win", t.CountDown = "countDown", t.Get0 = "get", t.Get1 = "get1", t.car_boom = "car_boom"
            , t.car_run0 = "car_run0", t.car_run1 = "car_run1", t.car_didi = "car_didi", t.car_stop = "car_stop"
            , t.catch = "catch", t.climb = "climb", t.enemy_death0 = "enemy_death0", t.enemy_death1 = "enemy_death1"
            , t.eye = "eye", t.fallToFloor = "fallToFloor", t.gun0 = "gun0", t.gun1 = "gun1"
            , t.gun2 = "gun2", t.hurt1 = "hurt1", t.hurt2 = "hurt2", t.hurt3 = "hurt3", t.hurt4 = "hurt4"
            , t.jump = "jump", t.jump_fall = "jump_fall", t.noMp = "noMp", t.onPlane = "onPlane"
            , t.run0 = "run0", t.run1 = "run1", t.skill_zhuwang = "skill_zhuwang", t.wind = "wind"
            , t.quan = "quan", t.tui = "tui", t.Shoot_AK = "Shoot_AK", t.Shoot_Hand = "Shoot_Hand"
            , t.Shoot_MP5 = "Shoot_MP5", t.zhuangche = "zhuangche";
    }(m || (m = {}))
    , function (t) {
        t.PlayingScene = "Scenes/PlayingScene.scene";
    }(v || (v = {}));
    var I, _ = Laya.Dialog
        , C = Laya.Scene
        , w = Laya.ClassUtils.regClass;
    ! function (t) {
        ! function (t) {
            var e = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(C);
            e.uiView = {
                type: "Scene"
                , props: {
                    y: 0
                    , x: 0
                    , isModal: !1
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Image"
                    , props: {
                        y: 608
                        , x: 64
                        , width: 600
                        , var: "Bg"
                        , skin: "loading/back.png"
                        , height: 100
                        , centerY: 0
                        , centerX: 0
                        , alpha: .5
                    }
                    , compId: 3
                    , child: [{
                        type: "Text"
                        , props: {
                            y: 0
                            , x: 0
                            , width: 600
                            , var: "Info"
                            , valign: "middle"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , height: 100
                            , fontSize: 40
                            , color: "#ffffff"
                            , align: "center"
                            , runtime: "Laya.Text"
                        }
                        , compId: 4
                    }]
                }]
                , loadList: ["loading/back.png"]
                , loadList3D: []
            }, t.TipsViewUI = e, w("ui.Export.TipsViewUI", e);
        }(t.Export || (t.Export = {}));
    }(I || (I = {}))
    , function (t) {
        ! function (t) {
            var e = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(_);
            e.uiView = {
                type: "Dialog"
                , props: {
                    isModal: !0
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Image"
                    , props: {
                        width: 519
                        , skin: "newUI/底3.png"
                        , sizeGrid: "137,95,145,101"
                        , height: 466
                        , centerY: 0
                        , centerX: 0
                    }
                    , compId: 3
                    , child: [{
                        type: "Label"
                        , props: {
                            y: 16
                            , text: "弹药库"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , fontSize: 40
                            , color: "#ffffff"
                            , centerX: 0
                        }
                        , compId: 4
                    }, {
                        type: "Image"
                        , props: {
                            y: 68
                            , var: "NormalIcon"
                            , skin: "ObjIcon/bullet.png"
                            , scaleY: 1.2
                            , scaleX: 1.2
                            , centerX: -1
                        }
                        , compId: 5
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/锁.png"
                                , scaleY: 1
                                , scaleX: 1
                                , centerY: 25
                                , centerX: 29
                            }
                            , compId: 6
                        }]
                    }, {
                        type: "Image"
                        , props: {
                            y: 395
                            , width: 200
                            , var: "VideoButton"
                            , skin: "newUI/绿色按钮.png"
                            , scaleY: .8
                            , scaleX: .8
                            , height: 70
                            , centerX: 0
                        }
                        , compId: 7
                        , child: [{
                            type: "Label"
                            , props: {
                                width: 84
                                , valign: "middle"
                                , text: "购买"
                                , strokeColor: "#ffffff"
                                , stroke: 1
                                , height: 55
                                , fontSize: 30
                                , color: "#ffffff"
                                , centerY: 0
                                , centerX: 16
                                , align: "center"
                            }
                            , compId: 8
                        }, {
                            type: "Image"
                            , props: {
                                y: 24.5
                                , x: 40
                                , var: "VideoIcon"
                                , skin: "StartSceneUI/看视频按钮1.png"
                            }
                            , compId: 9
                        }, {
                            type: "Script"
                            , props: {
                                y: 0
                                , x: 0
                                , runtime: "core/LayaTool/ScaleButton.ts"
                            }
                            , compId: 10
                        }]
                    }, {
                        type: "Image"
                        , props: {
                            y: 325
                            , width: 200
                            , var: "CloseButton"
                            , skin: "newUI/绿色按钮.png"
                            , scaleY: .8
                            , scaleX: .8
                            , height: 70
                            , centerX: 0
                        }
                        , compId: 11
                        , child: [{
                            type: "Label"
                            , props: {
                                width: 171
                                , valign: "middle"
                                , text: "不了,谢谢"
                                , strokeColor: "#ffffff"
                                , stroke: 1
                                , height: 55
                                , fontSize: 25
                                , color: "#ffffff"
                                , centerY: 0
                                , centerX: 0
                                , align: "center"
                            }
                            , compId: 12
                        }, {
                            type: "Script"
                            , props: {
                                runtime: "core/LayaTool/ScaleButton.ts"
                            }
                            , compId: 13
                        }]
                    }, {
                        type: "Label"
                        , props: {
                            y: 261
                            , width: 368
                            , var: "BulletName"
                            , valign: "middle"
                            , text: "弹药xxxx"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , height: 56
                            , fontSize: 40
                            , color: "#ffffff"
                            , centerX: 0
                            , align: "center"
                        }
                        , compId: 14
                    }, {
                        type: "Image"
                        , props: {
                            y: 120
                            , x: 0
                            , var: "RocketIcon"
                            , skin: "ObjIcon/huojian_bullet.png"
                            , scaleY: 1.2
                            , scaleX: 1.2
                            , centerX: 0
                        }
                        , compId: 15
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/锁.png"
                                , scaleY: 1
                                , scaleX: 1
                                , centerY: 25
                                , centerX: 29
                            }
                            , compId: 16
                        }]
                    }]
                }]
                , loadList: ["newUI/底3.png", "ObjIcon/bullet.png", "newUI/锁.png", "newUI/绿色按钮.png", "StartSceneUI/看视频按钮1.png", "ObjIcon/huojian_bullet.png"]
                , loadList3D: []
            }, t.BuyBulletViewUI = e, w("ui.PopView.BuyBulletViewUI", e);
            var a = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(_);
            a.uiView = {
                type: "Dialog"
                , props: {
                    isModal: !0
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Box"
                    , props: {
                        width: 781
                        , var: "DialogBox"
                        , height: 213
                        , centerX: 0
                        , bottom: 30
                    }
                    , compId: 4
                    , child: [{
                        type: "Image"
                        , props: {
                            width: 400
                            , top: 0
                            , skin: "newUI/矩形 832.png"
                            , sizeGrid: "53,69,48,72"
                            , right: 0
                            , left: 0
                            , height: 150
                            , bottom: 0
                        }
                        , compId: 3
                    }, {
                        type: "Image"
                        , props: {
                            top: -50
                            , skin: "newUI/矩形 736.png"
                            , left: 0
                        }
                        , compId: 5
                    }, {
                        type: "Label"
                        , props: {
                            y: -45.5
                            , x: 34.5
                            , width: 166
                            , var: "NameLabel"
                            , valign: "middle"
                            , text: "新手大使"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , height: 40
                            , fontSize: 35
                            , color: "#ffffff"
                            , align: "center"
                        }
                        , compId: 6
                    }, {
                        type: "Label"
                        , props: {
                            wordWrap: !0
                            , width: 744
                            , var: "InfoLabel"
                            , valign: "middle"
                            , text: "----"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , leading: 3
                            , height: 172
                            , fontSize: 35
                            , color: "#ffffff"
                            , centerY: 0
                            , centerX: 0
                            , align: "left"
                        }
                        , compId: 7
                    }, {
                        type: "Image"
                        , props: {
                            y: -59
                            , var: "CloseButton"
                            , skin: "newUI/绿色按钮1.png"
                            , centerX: 304
                        }
                        , compId: 8
                        , child: [{
                            type: "Label"
                            , props: {
                                underlineColor: "#ffffff"
                                , text: "继续"
                                , strokeColor: "#38b3ff"
                                , stroke: 1
                                , fontSize: 30
                                , color: "#ffffff"
                                , centerY: 0
                                , centerX: 0
                                , borderColor: "#000000"
                            }
                            , compId: 10
                        }]
                    }]
                }]
                , loadList: ["newUI/矩形 832.png", "newUI/矩形 736.png", "newUI/绿色按钮1.png"]
                , loadList3D: []
            }, t.DialogNPCUI = a, w("ui.PopView.DialogNPCUI", a);
            var n = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(_);
            n.uiView = {
                type: "Dialog"
                , props: {
                    isModal: !0
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Box"
                    , props: {
                        var: "WinBox"
                        , top: 0
                        , right: 0
                        , left: 0
                        , bottom: 0
                    }
                    , compId: 3
                    , child: [{
                        type: "Image"
                        , props: {
                            x: 0
                            , top: 0
                            , skin: "newUI/胜利.png"
                            , scaleY: .8
                            , scaleX: .8
                            , centerX: 0
                        }
                        , compId: 5
                    }]
                }, {
                    type: "Box"
                    , props: {
                        y: 0
                        , x: 0
                        , var: "FailBox"
                        , top: 0
                        , right: 0
                        , left: 0
                        , bottom: 0
                    }
                    , compId: 6
                    , child: [{
                        type: "Image"
                        , props: {
                            x: 0
                            , top: 0
                            , skin: "newUI/失败.png"
                            , scaleY: .8
                            , scaleX: .8
                            , centerX: 0
                        }
                        , compId: 8
                    }]
                }, {
                    type: "Box"
                    , props: {
                        width: 212
                        , var: "NormalGoldBox"
                        , top: 300
                        , scaleY: .6
                        , scaleX: .6
                        , height: 60
                        , centerX: 0
                        , anchorY: .5
                        , anchorX: .5
                    }
                    , compId: 9
                    , child: [{
                        type: "Image"
                        , props: {
                            y: -7
                            , skin: "StartSceneUI/金币.png"
                            , left: 19
                        }
                        , compId: 10
                    }, {
                        type: "Label"
                        , props: {
                            y: 0
                            , var: "NormalGoldBox_Label"
                            , text: "+100"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , right: 0
                            , fontSize: 50
                            , color: "#ffffff"
                            , bold: !0
                        }
                        , compId: 11
                    }]
                }, {
                    type: "Image"
                    , props: {
                        var: "VideoButton"
                        , skin: "newUI/紫色按钮.png"
                        , scaleY: .8
                        , scaleX: .8
                        , centerX: 0
                        , bottom: 230
                    }
                    , compId: 12
                    , child: [{
                        type: "Image"
                        , props: {
                            var: "VieoIcon"
                            , skin: "StartSceneUI/看视频按钮1.png"
                            , scaleY: 2
                            , scaleX: 2
                            , left: 26
                            , centerY: 0
                        }
                        , compId: 13
                    }, {
                        type: "Image"
                        , props: {
                            y: 8
                            , skin: "StartSceneUI/金币.png"
                            , left: 77
                        }
                        , compId: 14
                    }, {
                        type: "Label"
                        , props: {
                            y: 22.5
                            , var: "VideoGold_Label"
                            , text: "+500"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , right: 54
                            , fontSize: 45
                            , color: "#ffffff"
                            , bold: !0
                        }
                        , compId: 15
                    }]
                }, {
                    type: "Image"
                    , props: {
                        var: "CancelButton"
                        , skin: "newUI/紫色按钮.png"
                        , scaleY: .8
                        , scaleX: .8
                        , centerX: 0
                        , bottom: 323
                    }
                    , compId: 17
                    , child: [{
                        type: "Label"
                        , props: {
                            underlineColor: "#4564bd"
                            , underline: !0
                            , text: "放弃"
                            , strokeColor: "#f6f6f6"
                            , stroke: 2
                            , fontSize: 40
                            , color: "#ffffff"
                            , centerY: 0
                            , centerX: 0
                            , bold: !0
                            , anchorY: .5
                            , anchorX: .5
                        }
                        , compId: 16
                    }]
                }]
                , loadList: ["newUI/胜利.png", "newUI/失败.png", "StartSceneUI/金币.png", "newUI/紫色按钮.png", "StartSceneUI/看视频按钮1.png"]
                , loadList3D: []
            }, t.EndViewUI = n, w("ui.PopView.EndViewUI", n);
            var i = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("PopView/FreeBodyView");
                    }
                }]), a;
            }(_);
            t.FreeBodyViewUI = i, w("ui.PopView.FreeBodyViewUI", i);
            var l = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("PopView/FreeGoldView");
                    }
                }]), a;
            }(_);
            t.FreeGoldViewUI = l, w("ui.PopView.FreeGoldViewUI", l);
            var h = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("PopView/GameChangeWeaponView");
                    }
                }]), a;
            }(_);
            t.GameChangeWeaponViewUI = h, w("ui.PopView.GameChangeWeaponViewUI", h);
            var d = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(_);
            d.uiView = {
                type: "Dialog"
                , props: {
                    isModal: !0
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Image"
                    , props: {
                        y: 0
                        , skin: "SkinUI/背景图.jpg"
                        , centerY: 0
                        , centerX: 0
                    }
                    , compId: 3
                }, {
                    type: "Box"
                    , props: {
                        y: 0
                        , x: 0
                        , width: 1334
                        , var: "Map"
                        , height: 750
                        , centerX: 0
                    }
                    , compId: 17
                    , child: [{
                        type: "Image"
                        , props: {
                            y: 197
                            , x: 119
                            , width: 238
                            , skin: "newUI/形状 6.png"
                            , rotation: 45
                            , height: 5
                        }
                        , compId: 55
                    }, {
                        type: "Image"
                        , props: {
                            y: 372.5
                            , x: 279
                            , width: 238
                            , skin: "newUI/形状 6.png"
                            , rotation: -45
                            , height: 5
                        }
                        , compId: 56
                    }, {
                        type: "Image"
                        , props: {
                            y: 184
                            , x: 444
                            , width: 238
                            , skin: "newUI/形状 6.png"
                            , rotation: 45
                            , height: 5
                        }
                        , compId: 57
                    }, {
                        type: "Image"
                        , props: {
                            y: 375
                            , x: 602
                            , width: 238
                            , skin: "newUI/形状 6.png"
                            , rotation: -45
                            , height: 5
                        }
                        , compId: 58
                    }, {
                        type: "Image"
                        , props: {
                            y: 194.5
                            , x: 782
                            , width: 238
                            , skin: "newUI/形状 6.png"
                            , rotation: 45
                            , height: 5
                        }
                        , compId: 59
                    }, {
                        type: "Box"
                        , props: {
                            y: 156
                            , x: 119
                            , width: 160
                            , var: "LV_1"
                            , height: 160
                            , anchorY: .5
                            , anchorX: .5
                            , alpha: 1
                        }
                        , compId: 18
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关.png"
                                , name: "icon"
                                , centerX: 0
                                , bottom: 0
                            }
                            , compId: 19
                        }, {
                            type: "Image"
                            , props: {
                                x: 0
                                , skin: "newUI/当前.png"
                                , name: "curr"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 21
                        }, {
                            type: "Image"
                            , props: {
                                y: 133
                                , x: 59
                                , skin: "newUI/锁2.png"
                                , name: "lock"
                            }
                            , compId: 90
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/关卡1.png"
                                , name: "normal"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 91
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关2.png"
                                , name: "finish"
                                , centerY: -18
                                , centerX: -13
                            }
                            , compId: 92
                        }, {
                            type: "Image"
                            , props: {
                                y: 0
                                , x: 0
                                , skin: "newUI/椭圆 5 拷贝.png"
                                , name: "atk"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 93
                            , child: [{
                                type: "Image"
                                , props: {
                                    x: 0
                                    , skin: "newUI/关卡1.png"
                                    , scaleY: .7
                                    , scaleX: .7
                                    , name: "atk"
                                    , centerY: 30
                                    , centerX: 0
                                }
                                , compId: 94
                            }]
                        }]
                    }, {
                        type: "Box"
                        , props: {
                            y: 385
                            , x: 279
                            , width: 160
                            , var: "LV_2"
                            , height: 160
                            , anchorY: .5
                            , anchorX: .5
                            , alpha: 1
                        }
                        , compId: 95
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关.png"
                                , name: "icon"
                                , centerX: 0
                                , bottom: 0
                            }
                            , compId: 96
                        }, {
                            type: "Image"
                            , props: {
                                x: 0
                                , skin: "newUI/当前.png"
                                , name: "curr"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 97
                        }, {
                            type: "Image"
                            , props: {
                                y: 133
                                , x: 59
                                , skin: "newUI/锁2.png"
                                , name: "lock"
                            }
                            , compId: 98
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/关卡2.png"
                                , name: "normal"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 99
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关2.png"
                                , name: "finish"
                                , centerY: -18
                                , centerX: -13
                            }
                            , compId: 100
                        }, {
                            type: "Image"
                            , props: {
                                y: 0
                                , x: 0
                                , skin: "newUI/椭圆 5 拷贝.png"
                                , name: "atk"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 101
                            , child: [{
                                type: "Image"
                                , props: {
                                    x: 0
                                    , skin: "newUI/关卡2.png"
                                    , scaleY: .7
                                    , scaleX: .7
                                    , name: "atk"
                                    , centerY: 30
                                    , centerX: 0
                                }
                                , compId: 102
                            }]
                        }]
                    }, {
                        type: "Box"
                        , props: {
                            y: 156
                            , x: 456
                            , width: 160
                            , var: "LV_3"
                            , height: 160
                            , anchorY: .5
                            , anchorX: .5
                            , alpha: 1
                        }
                        , compId: 103
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关.png"
                                , name: "icon"
                                , centerX: 0
                                , bottom: 0
                            }
                            , compId: 104
                        }, {
                            type: "Image"
                            , props: {
                                x: 0
                                , skin: "newUI/当前.png"
                                , name: "curr"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 105
                        }, {
                            type: "Image"
                            , props: {
                                y: 133
                                , x: 59
                                , skin: "newUI/锁2.png"
                                , name: "lock"
                            }
                            , compId: 106
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/关卡3.png"
                                , name: "normal"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 107
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关2.png"
                                , name: "finish"
                                , centerY: -18
                                , centerX: -13
                            }
                            , compId: 108
                        }, {
                            type: "Image"
                            , props: {
                                y: 0
                                , x: 0
                                , skin: "newUI/椭圆 5 拷贝.png"
                                , name: "atk"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 109
                            , child: [{
                                type: "Image"
                                , props: {
                                    x: 0
                                    , skin: "newUI/关卡3.png"
                                    , scaleY: .7
                                    , scaleX: .7
                                    , name: "atk"
                                    , centerY: 30
                                    , centerX: 0
                                }
                                , compId: 110
                            }]
                        }]
                    }, {
                        type: "Box"
                        , props: {
                            y: 390
                            , x: 602
                            , width: 160
                            , var: "LV_4"
                            , height: 160
                            , anchorY: .5
                            , anchorX: .5
                            , alpha: 1
                        }
                        , compId: 119
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关.png"
                                , name: "icon"
                                , centerX: 0
                                , bottom: 0
                            }
                            , compId: 120
                        }, {
                            type: "Image"
                            , props: {
                                x: 0
                                , skin: "newUI/当前.png"
                                , name: "curr"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 121
                        }, {
                            type: "Image"
                            , props: {
                                y: 133
                                , x: 59
                                , skin: "newUI/锁2.png"
                                , name: "lock"
                            }
                            , compId: 122
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/关卡4.png"
                                , name: "normal"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 123
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关2.png"
                                , name: "finish"
                                , centerY: -18
                                , centerX: -13
                            }
                            , compId: 124
                        }, {
                            type: "Image"
                            , props: {
                                y: 0
                                , x: 0
                                , skin: "newUI/椭圆 5 拷贝.png"
                                , name: "atk"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 125
                            , child: [{
                                type: "Image"
                                , props: {
                                    x: 0
                                    , skin: "newUI/关卡4.png"
                                    , scaleY: .7
                                    , scaleX: .7
                                    , name: "atk"
                                    , centerY: 30
                                    , centerX: 0
                                }
                                , compId: 126
                            }]
                        }]
                    }, {
                        type: "Box"
                        , props: {
                            y: 184
                            , x: 782
                            , width: 160
                            , var: "LV_5"
                            , height: 160
                            , anchorY: .5
                            , anchorX: .5
                            , alpha: 1
                        }
                        , compId: 111
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关.png"
                                , name: "icon"
                                , centerX: 0
                                , bottom: 0
                            }
                            , compId: 112
                        }, {
                            type: "Image"
                            , props: {
                                x: 0
                                , skin: "newUI/当前.png"
                                , name: "curr"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 113
                        }, {
                            type: "Image"
                            , props: {
                                y: 133
                                , x: 59
                                , skin: "newUI/锁2.png"
                                , name: "lock"
                            }
                            , compId: 114
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/关卡5.png"
                                , name: "normal"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 115
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关2.png"
                                , name: "finish"
                                , centerY: -18
                                , centerX: -13
                            }
                            , compId: 116
                        }, {
                            type: "Image"
                            , props: {
                                y: 0
                                , x: 0
                                , skin: "newUI/椭圆 5 拷贝.png"
                                , name: "atk"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 117
                            , child: [{
                                type: "Image"
                                , props: {
                                    x: 0
                                    , skin: "newUI/关卡5.png"
                                    , scaleY: .7
                                    , scaleX: .7
                                    , name: "atk"
                                    , centerY: 30
                                    , centerX: 0
                                }
                                , compId: 118
                            }]
                        }]
                    }, {
                        type: "Box"
                        , props: {
                            y: 390
                            , x: 942
                            , width: 160
                            , var: "LV_6"
                            , height: 160
                            , anchorY: .5
                            , anchorX: .5
                            , alpha: 1
                        }
                        , compId: 127
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关.png"
                                , name: "icon"
                                , centerX: 0
                                , bottom: 0
                            }
                            , compId: 128
                        }, {
                            type: "Image"
                            , props: {
                                x: 0
                                , skin: "newUI/当前.png"
                                , name: "curr"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 129
                        }, {
                            type: "Image"
                            , props: {
                                y: 133
                                , x: 59
                                , skin: "newUI/锁2.png"
                                , name: "lock"
                            }
                            , compId: 130
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/关卡6.png"
                                , name: "normal"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 131
                        }, {
                            type: "Image"
                            , props: {
                                skin: "newUI/已闯关2.png"
                                , name: "finish"
                                , centerY: -18
                                , centerX: -13
                            }
                            , compId: 132
                        }, {
                            type: "Image"
                            , props: {
                                y: 0
                                , x: 0
                                , skin: "newUI/椭圆 5 拷贝.png"
                                , name: "atk"
                                , centerY: 15
                                , centerX: 0
                            }
                            , compId: 133
                            , child: [{
                                type: "Image"
                                , props: {
                                    x: 0
                                    , skin: "newUI/关卡6.png"
                                    , scaleY: .7
                                    , scaleX: .7
                                    , name: "atk"
                                    , centerY: 30
                                    , centerX: 0
                                }
                                , compId: 134
                            }]
                        }]
                    }]
                }, {
                    type: "Image"
                    , props: {
                        width: 320
                        , visible: !1
                        , var: "LvInfoBox"
                        , top: 0
                        , skin: "newUI/组 28.png"
                        , scaleY: .9
                        , scaleX: .9
                        , right: 0
                        , bottom: 0
                        , anchorY: .5
                        , anchorX: .5
                    }
                    , compId: 62
                    , child: [{
                        type: "Label"
                        , props: {
                            y: 128
                            , var: "LvInfoBox_LvLabel"
                            , text: "第1关"
                            , strokeColor: "#ffffff"
                            , stroke: 2
                            , fontSize: 35
                            , color: "#ffffff"
                            , centerX: -87
                            , bold: !0
                        }
                        , compId: 63
                    }, {
                        type: "Image"
                        , props: {
                            y: 189
                            , x: 15
                            , skin: "newUI/任务目标.png"
                        }
                        , compId: 64
                    }, {
                        type: "Image"
                        , props: {
                            y: 416.66666666666663
                            , x: 15
                            , skin: "newUI/任务奖励.png"
                        }
                        , compId: 66
                    }, {
                        type: "Label"
                        , props: {
                            y: 245
                            , wordWrap: !0
                            , width: 269
                            , var: "LvInfoBox_InfoLabel"
                            , text: "第1关"
                            , strokeColor: "#ff9c08"
                            , stroke: 1
                            , padding: "2"
                            , overflow: "scroll"
                            , height: 131
                            , fontSize: 35
                            , color: "#ff9c08"
                            , centerX: -11
                            , bold: !0
                        }
                        , compId: 68
                    }, {
                        type: "Label"
                        , props: {
                            y: 548
                            , width: 99
                            , var: "LvInfoBox_GoldLabel"
                            , valign: "middle"
                            , text: "200"
                            , strokeColor: "#5fcd5a"
                            , stroke: 1
                            , height: 43
                            , fontSize: 40
                            , color: "#ffffff"
                            , centerX: 16
                            , bold: !0
                            , align: "center"
                        }
                        , compId: 70
                    }, {
                        type: "Image"
                        , props: {
                            y: 517
                            , x: 28.5
                            , skin: "StartSceneUI/金币.png"
                        }
                        , compId: 71
                    }]
                }, {
                    type: "Image"
                    , props: {
                        width: 250
                        , var: "Video_LockButton"
                        , skin: "newUI/紫色按钮.png"
                        , right: 20
                        , height: 70
                        , bottom: 15
                        , anchorY: .5
                        , anchorX: .5
                    }
                    , compId: 76
                    , child: [{
                        type: "Image"
                        , props: {
                            y: 24.5
                            , x: 33
                            , var: "VideoIcon_LockButton"
                            , skin: "StartSceneUI/看视频按钮1.png"
                            , scaleY: 1.5
                            , scaleX: 1.5
                        }
                        , compId: 77
                    }, {
                        type: "Label"
                        , props: {
                            x: 75
                            , text: "关卡全部解锁"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , fontSize: 25
                            , color: "#ffffff"
                            , centerY: 0
                        }
                        , compId: 78
                    }, {
                        type: "Script"
                        , props: {
                            y: 0
                            , x: 0
                            , runtime: "core/LayaTool/ScaleButton.ts"
                        }
                        , compId: 79
                    }]
                }, {
                    type: "Script"
                    , props: {
                        y: 0
                        , x: 0
                        , runtime: "game/View/LevelViewControl.ts"
                    }
                    , compId: 73
                }, {
                    type: "Image"
                    , props: {
                        y: 0
                        , x: 0
                        , width: 550
                        , top: 0
                        , skin: "newUI/矩形 736 拷贝.png"
                        , sizeGrid: "0,27,0,121"
                        , left: 0
                        , height: 71
                    }
                    , compId: 80
                }, {
                    type: "Image"
                    , props: {
                        y: 0
                        , x: 0
                        , var: "CloseButton"
                        , top: 11
                        , skin: "newUI/返回箭头.png"
                        , left: 10
                    }
                    , compId: 81
                    , child: [{
                        type: "Script"
                        , props: {
                            runtime: "core/LayaTool/ScaleButton.ts"
                        }
                        , compId: 84
                    }]
                }, {
                    type: "Box"
                    , props: {
                        width: 200
                        , top: 16
                        , name: "GoldUIBox"
                        , left: 238
                        , height: 50
                        , anchorY: .5
                        , anchorX: .5
                    }
                    , compId: 82
                    , child: [{
                        type: "Image"
                        , props: {
                            width: 218
                            , skin: "newUI/矩形 736.png"
                            , height: 53
                            , centerY: 1
                            , centerX: 16
                        }
                        , compId: 85
                    }, {
                        type: "Image"
                        , props: {
                            y: 0
                            , skin: "StartSceneUI/金币.png"
                            , left: 0
                            , centerY: 0
                        }
                        , compId: 86
                    }, {
                        type: "Label"
                        , props: {
                            width: 101
                            , valign: "middle"
                            , text: "9999999"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , overflow: "hidden"
                            , name: "label"
                            , height: 27
                            , fontSize: 27
                            , color: "#ffffff"
                            , centerY: 2
                            , centerX: 19
                            , align: "center"
                        }
                        , compId: 87
                    }, {
                        type: "Image"
                        , props: {
                            skin: "newUI/+号.png"
                            , right: -25
                            , centerY: 2
                        }
                        , compId: 88
                    }, {
                        type: "Script"
                        , props: {
                            runtime: "game/ViewUI/GoldBoxUI.ts"
                        }
                        , compId: 89
                    }]
                }, {
                    type: "Image"
                    , props: {
                        y: 17
                        , x: 107
                        , skin: "newUI/关卡.png"
                    }
                    , compId: 83
                }, {
                    type: "Image"
                    , props: {
                        width: 250
                        , var: "StartButton"
                        , skin: "newUI/黄色按钮.png"
                        , right: 20
                        , height: 70
                        , bottom: 94
                    }
                    , compId: 15
                    , child: [{
                        type: "Label"
                        , props: {
                            text: "进入游戏"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , fontSize: 30
                            , color: "#ffffff"
                            , centerY: 0
                            , centerX: 0
                            , bold: !0
                        }
                        , compId: 16
                    }, {
                        type: "Script"
                        , props: {
                            runtime: "core/LayaTool/ScaleButton.ts"
                        }
                        , compId: 72
                    }]
                }]
                , loadList: ["SkinUI/背景图.jpg", "newUI/形状 6.png", "newUI/已闯关.png", "newUI/当前.png", "newUI/锁2.png", "newUI/关卡1.png", "newUI/已闯关2.png", "newUI/椭圆 5 拷贝.png", "newUI/关卡2.png", "newUI/关卡3.png", "newUI/关卡4.png", "newUI/关卡5.png", "newUI/关卡6.png", "newUI/组 28.png", "newUI/任务目标.png", "newUI/任务奖励.png", "StartSceneUI/金币.png", "newUI/紫色按钮.png", "StartSceneUI/看视频按钮1.png", "newUI/矩形 736 拷贝.png", "newUI/返回箭头.png", "newUI/矩形 736.png", "newUI/+号.png", "newUI/关卡.png", "newUI/黄色按钮.png"]
                , loadList3D: []
            }, t.LevelViewUI = d, w("ui.PopView.LevelViewUI", d);
            var y = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(_);
            y.uiView = {
                type: "Dialog"
                , props: {
                    isModal: !0
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Image"
                    , props: {
                        top: 0
                        , skin: "newUI/复活.png"
                        , centerX: -26
                    }
                    , compId: 11
                    , child: [{
                        type: "Box"
                        , props: {
                            width: 200
                            , visible: !1
                            , var: "NumBox"
                            , scaleY: .7
                            , scaleX: .7
                            , height: 200
                            , centerY: 17
                            , centerX: 20
                            , anchorY: .5
                            , anchorX: .5
                        }
                        , compId: 3
                        , child: [{
                            type: "Image"
                            , props: {
                                visible: !1
                                , var: "T0"
                                , skin: "EndUI/倒数0.png"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 4
                        }, {
                            type: "Image"
                            , props: {
                                visible: !1
                                , var: "T1"
                                , skin: "EndUI/倒数1.png"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 5
                        }, {
                            type: "Image"
                            , props: {
                                visible: !1
                                , var: "T2"
                                , skin: "EndUI/倒数2.png"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 6
                        }, {
                            type: "Image"
                            , props: {
                                visible: !1
                                , var: "T3"
                                , skin: "EndUI/倒数3.png"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 7
                        }, {
                            type: "Image"
                            , props: {
                                visible: !1
                                , var: "T4"
                                , skin: "EndUI/倒数4.png"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 9
                        }, {
                            type: "Image"
                            , props: {
                                visible: !1
                                , var: "T5"
                                , skin: "EndUI/倒数5.png"
                                , centerY: 0
                                , centerX: 0
                            }
                            , compId: 10
                        }]
                    }]
                }, {
                    type: "Image"
                    , props: {
                        width: 250
                        , var: "VideoButton"
                        , skin: "newUI/紫色按钮.png"
                        , scaleY: .7
                        , scaleX: .7
                        , height: 80
                        , centerX: 0
                        , bottom: 248
                        , anchorY: .5
                        , anchorX: .5
                    }
                    , compId: 13
                    , child: [{
                        type: "Image"
                        , props: {
                            x: 51
                            , var: "VideoIcon"
                            , skin: "StartSceneUI/看视频按钮1.png"
                            , scaleY: 1.5
                            , scaleX: 1.5
                            , centerY: 4
                        }
                        , compId: 14
                    }, {
                        type: "Label"
                        , props: {
                            text: "继续"
                            , strokeColor: "#ffffff"
                            , stroke: 2
                            , fontSize: 35
                            , color: "#ffffff"
                            , centerY: 3
                            , centerX: 15
                            , bold: !0
                        }
                        , compId: 15
                    }, {
                        type: "Script"
                        , props: {
                            runtime: "core/LayaTool/ScaleButton.ts"
                        }
                        , compId: 18
                    }]
                }, {
                    type: "Script"
                    , props: {
                        runtime: "game/View/ReliveViewControl.ts"
                    }
                    , compId: 19
                }, {
                    type: "Image"
                    , props: {
                        width: 250
                        , var: "CancelButton"
                        , skin: "newUI/紫色按钮.png"
                        , scaleY: .7
                        , scaleX: .7
                        , height: 80
                        , centerX: 0
                        , bottom: 328
                        , anchorY: .5
                        , anchorX: .5
                    }
                    , compId: 20
                    , child: [{
                        type: "Script"
                        , props: {
                            y: 0
                            , x: 0
                            , runtime: "core/LayaTool/ScaleButton.ts"
                        }
                        , compId: 23
                    }, {
                        type: "Label"
                        , props: {
                            x: 156
                            , underlineColor: "#4564bd"
                            , underline: !0
                            , text: "不了，谢谢"
                            , strokeColor: "#ffffff"
                            , stroke: 2
                            , fontSize: 33
                            , color: "#ffffff"
                            , centerY: 0
                            , centerX: 0
                            , bold: !0
                            , anchorY: .5
                            , anchorX: .5
                        }
                        , compId: 17
                    }]
                }]
                , loadList: ["newUI/复活.png", "EndUI/倒数0.png", "EndUI/倒数1.png", "EndUI/倒数2.png", "EndUI/倒数3.png", "EndUI/倒数4.png", "EndUI/倒数5.png", "newUI/紫色按钮.png", "StartSceneUI/看视频按钮1.png"]
                , loadList3D: []
            }, t.ReliveViewUI = y, w("ui.PopView.ReliveViewUI", y);
            var p = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("PopView/ShopWeapon");
                    }
                }]), a;
            }(_);
            t.ShopWeaponUI = p, w("ui.PopView.ShopWeaponUI", p);
            var m = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("PopView/SignView");
                    }
                }]), a;
            }(_);
            t.SignViewUI = m, w("ui.PopView.SignViewUI", m);
            var v = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(_);
            v.uiView = {
                type: "Dialog"
                , props: {
                    isModal: !0
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Image"
                    , props: {
                        width: 519
                        , skin: "newUI/底3.png"
                        , sizeGrid: "137,95,145,101"
                        , height: 415
                        , centerY: 0
                        , centerX: 0
                    }
                    , compId: 3
                    , child: [{
                        type: "Label"
                        , props: {
                            y: 16
                            , text: "请先解锁技能"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , fontSize: 40
                            , color: "#ffffff"
                            , centerX: 0
                        }
                        , compId: 4
                    }, {
                        type: "Image"
                        , props: {
                            y: 120.5
                            , width: 80
                            , var: "SkillIcon"
                            , skin: "newUI/快跑.png"
                            , scaleY: 1.5
                            , scaleX: 1.5
                            , height: 80
                            , centerX: 0
                        }
                        , compId: 5
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/锁.png"
                                , scaleY: 1
                                , scaleX: 1
                                , centerY: 25
                                , centerX: 29
                            }
                            , compId: 13
                        }]
                    }, {
                        type: "Image"
                        , props: {
                            y: 345
                            , width: 200
                            , var: "VideoButton"
                            , skin: "newUI/绿色按钮.png"
                            , scaleY: .8
                            , scaleX: .8
                            , height: 70
                            , centerX: -1
                        }
                        , compId: 6
                        , child: [{
                            type: "Label"
                            , props: {
                                width: 84
                                , valign: "middle"
                                , text: "解锁"
                                , strokeColor: "#ffffff"
                                , stroke: 1
                                , height: 55
                                , fontSize: 30
                                , color: "#ffffff"
                                , centerY: 0
                                , centerX: 16
                                , align: "center"
                            }
                            , compId: 7
                        }, {
                            type: "Image"
                            , props: {
                                y: 24.5
                                , x: 40
                                , var: "VideoIcon"
                                , skin: "StartSceneUI/看视频按钮1.png"
                            }
                            , compId: 8
                        }, {
                            type: "Script"
                            , props: {
                                y: 0
                                , x: 0
                                , runtime: "core/LayaTool/ScaleButton.ts"
                            }
                            , compId: 9
                        }]
                    }, {
                        type: "Image"
                        , props: {
                            y: 275
                            , width: 200
                            , var: "CloseButton"
                            , skin: "newUI/绿色按钮.png"
                            , scaleY: .8
                            , scaleX: .8
                            , height: 70
                            , centerX: -1
                        }
                        , compId: 10
                        , child: [{
                            type: "Label"
                            , props: {
                                width: 171
                                , valign: "middle"
                                , text: "不了,谢谢"
                                , strokeColor: "#ffffff"
                                , stroke: 1
                                , height: 55
                                , fontSize: 25
                                , color: "#ffffff"
                                , centerY: 0
                                , centerX: 0
                                , align: "center"
                            }
                            , compId: 11
                        }, {
                            type: "Script"
                            , props: {
                                runtime: "core/LayaTool/ScaleButton.ts"
                            }
                            , compId: 12
                        }]
                    }]
                }]
                , loadList: ["newUI/底3.png", "newUI/快跑.png", "newUI/锁.png", "newUI/绿色按钮.png", "StartSceneUI/看视频按钮1.png"]
                , loadList3D: []
            }, t.SkillLockViewUI = v, w("ui.PopView.SkillLockViewUI", v);
            var k = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("PopView/SkinView");
                    }
                }]), a;
            }(_);
            t.SkinViewUI = k, w("ui.PopView.SkinViewUI", k);
            var g = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("PopView/TaskView");
                    }
                }]), a;
            }(_);
            t.TaskViewUI = g, w("ui.PopView.TaskViewUI", g);
            var I = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(_);
            I.uiView = {
                type: "Dialog"
                , props: {
                    isModal: !0
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Image"
                    , props: {
                        x: 0
                        , width: 800
                        , var: "ViewBox"
                        , skin: "newUI/底3.png"
                        , sizeGrid: "137,95,145,101"
                        , height: 500
                        , centerY: 0
                        , centerX: 0
                    }
                    , compId: 3
                    , child: [{
                        type: "Label"
                        , props: {
                            y: 22
                            , text: "试驾车辆"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , fontSize: 40
                            , color: "#ffffff"
                            , centerX: 0
                        }
                        , compId: 4
                    }, {
                        type: "Image"
                        , props: {
                            y: 410
                            , var: "VideoButton"
                            , skin: "newUI/紫色按钮.png"
                            , scaleY: .7
                            , scaleX: .7
                            , centerX: 0
                        }
                        , compId: 5
                        , child: [{
                            type: "Label"
                            , props: {
                                width: 84
                                , valign: "middle"
                                , text: "驾驶"
                                , strokeColor: "#ffffff"
                                , stroke: 1
                                , height: 55
                                , fontSize: 40
                                , color: "#ffffff"
                                , centerY: 3
                                , centerX: 31
                                , align: "center"
                            }
                            , compId: 6
                        }, {
                            type: "Image"
                            , props: {
                                y: 33
                                , x: 67
                                , width: 50
                                , var: "VideoIcon"
                                , skin: "StartSceneUI/看视频按钮1.png"
                                , height: 40
                            }
                            , compId: 7
                        }, {
                            type: "Script"
                            , props: {
                                y: 0
                                , x: 0
                                , runtime: "core/LayaTool/ScaleButton.ts"
                            }
                            , compId: 8
                        }]
                    }, {
                        type: "Image"
                        , props: {
                            y: 324
                            , var: "CloseButton"
                            , skin: "newUI/紫色按钮.png"
                            , scaleY: .7
                            , scaleX: .7
                            , centerX: 0
                        }
                        , compId: 9
                        , child: [{
                            type: "Label"
                            , props: {
                                width: 171
                                , valign: "middle"
                                , text: "不了,谢谢"
                                , strokeColor: "#ffffff"
                                , stroke: 1
                                , height: 55
                                , fontSize: 35
                                , color: "#ffffff"
                                , centerY: 0
                                , centerX: 0
                                , align: "center"
                            }
                            , compId: 10
                        }, {
                            type: "Script"
                            , props: {
                                runtime: "core/LayaTool/ScaleButton.ts"
                            }
                            , compId: 11
                        }]
                    }]
                }, {
                    type: "Box"
                    , props: {
                        y: 0
                        , x: 668
                        , width: 1
                        , var: "carIcon"
                        , scaleY: 1.2
                        , scaleX: 1.2
                        , height: 1
                        , centerY: -10
                        , centerX: 0
                        , anchorY: .5
                        , anchorX: .5
                    }
                    , compId: 12
                }]
                , loadList: ["newUI/底3.png", "newUI/紫色按钮.png", "StartSceneUI/看视频按钮1.png"]
                , loadList3D: []
            }, t.TryCarViewUI = I, w("ui.PopView.TryCarViewUI", I);
            var C = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(_);
            C.uiView = {
                type: "Dialog"
                , props: {
                    isModal: !0
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Image"
                    , props: {
                        width: 519
                        , skin: "newUI/底3.png"
                        , sizeGrid: "137,95,145,101"
                        , height: 467
                        , centerY: 0
                        , centerX: 0
                    }
                    , compId: 3
                    , child: [{
                        type: "Label"
                        , props: {
                            y: 16
                            , text: "武器试用"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , fontSize: 40
                            , color: "#ffffff"
                            , centerX: 0
                        }
                        , compId: 4
                    }, {
                        type: "Image"
                        , props: {
                            y: 120.5
                            , var: "SkillIcon"
                            , skin: "ObjIcon/RocketLauncherUI.png"
                            , scaleY: 1.2
                            , scaleX: 1.2
                            , centerX: 0
                        }
                        , compId: 5
                        , child: [{
                            type: "Image"
                            , props: {
                                skin: "newUI/锁.png"
                                , scaleY: 1
                                , scaleX: 1
                                , centerY: 25
                                , centerX: 29
                            }
                            , compId: 6
                        }]
                    }, {
                        type: "Image"
                        , props: {
                            y: 397
                            , width: 200
                            , var: "VideoButton"
                            , skin: "newUI/绿色按钮.png"
                            , scaleY: .8
                            , scaleX: .8
                            , height: 70
                            , centerX: 0
                        }
                        , compId: 7
                        , child: [{
                            type: "Label"
                            , props: {
                                width: 84
                                , valign: "middle"
                                , text: "解锁"
                                , strokeColor: "#ffffff"
                                , stroke: 1
                                , height: 55
                                , fontSize: 30
                                , color: "#ffffff"
                                , centerY: 0
                                , centerX: 16
                                , align: "center"
                            }
                            , compId: 8
                        }, {
                            type: "Image"
                            , props: {
                                y: 24.5
                                , x: 40
                                , var: "VideoIcon"
                                , skin: "StartSceneUI/看视频按钮1.png"
                            }
                            , compId: 9
                        }, {
                            type: "Script"
                            , props: {
                                y: 0
                                , x: 0
                                , runtime: "core/LayaTool/ScaleButton.ts"
                            }
                            , compId: 10
                        }]
                    }, {
                        type: "Image"
                        , props: {
                            y: 325
                            , width: 200
                            , var: "CloseButton"
                            , skin: "newUI/绿色按钮.png"
                            , scaleY: .8
                            , scaleX: .8
                            , height: 70
                            , centerX: 0
                        }
                        , compId: 11
                        , child: [{
                            type: "Label"
                            , props: {
                                width: 171
                                , valign: "middle"
                                , text: "不了,谢谢"
                                , strokeColor: "#ffffff"
                                , stroke: 1
                                , height: 55
                                , fontSize: 25
                                , color: "#ffffff"
                                , centerY: 0
                                , centerX: 0
                                , align: "center"
                            }
                            , compId: 12
                        }, {
                            type: "Script"
                            , props: {
                                runtime: "core/LayaTool/ScaleButton.ts"
                            }
                            , compId: 13
                        }]
                    }, {
                        type: "Label"
                        , props: {
                            y: 261
                            , var: "WeaponName"
                            , valign: "middle"
                            , text: "加特林"
                            , strokeColor: "#ffffff"
                            , stroke: 1
                            , fontSize: 40
                            , color: "#ffffff"
                            , centerX: 0
                            , align: "center"
                        }
                        , compId: 14
                    }]
                }]
                , loadList: ["newUI/底3.png", "ObjIcon/RocketLauncherUI.png", "newUI/锁.png", "newUI/绿色按钮.png", "StartSceneUI/看视频按钮1.png"]
                , loadList3D: []
            }, t.TryWeaponViewUI = C, w("ui.PopView.TryWeaponViewUI", C);
            var L = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("PopView/VideoHpRewardView");
                    }
                }]), a;
            }(_);
            t.VideoHpRewardViewUI = L, w("ui.PopView.VideoHpRewardViewUI", L);
        }(t.PopView || (t.PopView = {}));
    }(I || (I = {}))
    , function (t) {
        ! function (t) {
            var e = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("Scenes/GameScene");
                    }
                }]), a;
            }(C);
            t.GameSceneUI = e, w("ui.Scenes.GameSceneUI", e);
            var a = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(C);
            a.uiView = {
                type: "Scene"
                , props: {
                    zOrder: 101
                    , height: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Image"
                    , props: {
                        top: 0
                        , skin: "loading/背景.png"
                        , right: 0
                        , left: 0
                        , bottom: 0
                        , anchorY: .5
                        , anchorX: .5
                    }
                    , compId: 39
                }, {
                    type: "View"
                    , props: {
                        zOrder: 2
                        , width: 17
                        , var: "viewBar"
                        , height: 11
                        , centerX: -400
                        , bottom: 300
                    }
                    , compId: 3
                    , child: [{
                        type: "Image"
                        , props: {
                            y: 55
                            , x: 74
                            , var: "progressBar"
                            , value: 0
                            , skin: "loading/Bit.png"
                            , anchorY: .5
                        }
                        , compId: 19
                    }, {
                        type: "Image"
                        , props: {
                            y: 56
                            , x: 74
                            , var: "progressBar_up"
                            , skin: "loading/加载条.png"
                            , anchorY: .5
                        }
                        , compId: 24
                        , child: [{
                            type: "Sprite"
                            , props: {
                                renderType: "mask"
                            }
                            , compId: 25
                        }]
                    }, {
                        type: "FontClip"
                        , props: {
                            y: 97
                            , x: 387
                            , width: 176
                            , var: "loadingLabel"
                            , value: "0%"
                            , spaceX: -18
                            , skin: "loading/进度条数字.png"
                            , sheet: "0123456789%"
                            , name: ""
                            , height: 45
                            , align: "center"
                        }
                        , compId: 20
                    }, {
                        type: "SkeletonPlayer"
                        , props: {
                            y: 120
                            , x: 391
                            , var: "sk_loading"
                            , url: "loading/jiazaizhong.sk"
                            , name: ""
                            , runtime: "Laya.Skeleton"
                        }
                        , compId: 23
                    }]
                }, {
                    type: "Image"
                    , props: {
                        skin: "loading/防沉迷提示.png"
                        , centerX: 0
                        , bottom: 0
                    }
                    , compId: 34
                }, {
                    type: "Image"
                    , props: {
                        var: "imgTitle"
                        , top: 0
                        , skin: "loading/logo.png"
                        , pivotY: 117
                        , pivotX: 139
                        , centerX: 0
                    }
                    , compId: 35
                }, {
                    type: "Script"
                    , props: {
                        runtime: "game/Controller/LoadingSceneController.ts"
                    }
                    , compId: 43
                }]
                , loadList: ["loading/背景.png", "loading/Bit.png", "loading/加载条.png", "loading/进度条数字.png", "loading/jiazaizhong.sk", "loading/防沉迷提示.png", "loading/logo.png"]
                , loadList3D: []
            }, t.LoadingSceneUI = a, w("ui.Scenes.LoadingSceneUI", a);
            var n = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("Scenes/PlayingScene");
                    }
                }]), a;
            }(C);
            t.PlayingSceneUI = n, w("ui.Scenes.PlayingSceneUI", n);
            var i = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("Scenes/StartScene");
                    }
                }]), a;
            }(C);
            t.StartSceneUI = i, w("ui.Scenes.StartSceneUI", i);
        }(t.Scenes || (t.Scenes = {}));
    }(I || (I = {}))
    , function (t) {
        ! function (t) {
            var e = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("umExportH/CustomPage");
                    }
                }]), a;
            }(_);
            t.CustomPageUI = e, w("ui.umExportH.CustomPageUI", e);
            var a = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("umExportH/LuckBoxPage");
                    }
                }]), a;
            }(_);
            t.LuckBoxPageUI = a, w("ui.umExportH.LuckBoxPageUI", a);
        }(t.umExportH || (t.umExportH = {}));
    }(I || (I = {}))
    , function (t) {
        ! function (t) {
            var e = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.createView(a.uiView);
                    }
                }]), a;
            }(_);
            e.uiView = {
                type: "Dialog"
                , props: {
                    width: 750
                    , autoDestroyAtClosed: !0
                }
                , compId: 2
                , child: [{
                    type: "Image"
                    , props: {
                        top: 0
                        , skin: "宝箱/bg2.jpg"
                        , right: 0
                        , name: "bg"
                        , left: 0
                        , bottom: 0
                    }
                    , compId: 3
                }, {
                    type: "Image"
                    , props: {
                        visible: !0
                        , skin: "宝箱/皮肤进度条.png"
                        , sizeGrid: "0,0,23,0"
                        , name: "buttom"
                        , height: 80
                        , centerX: 0
                        , bottom: 20
                    }
                    , compId: 5
                    , child: [{
                        type: "Label"
                        , props: {
                            text: "继续游戏"
                            , strokeColor: "#ff514e"
                            , stroke: 1
                            , fontSize: 40
                            , color: "#ff514e"
                            , centerY: 0
                            , centerX: 0
                        }
                        , compId: 6
                    }]
                }, {
                    type: "Script"
                    , props: {
                        next_buttom: "@node:5"
                        , runtime: "umsdk/export/laya/UMCustomPage.ts"
                    }
                    , compId: 7
                }]
                , loadList: ["宝箱/bg2.jpg", "宝箱/皮肤进度条.png"]
                , loadList3D: []
            }, t.CustomPageUI = e, w("ui.umExportV.CustomPageUI", e);
            var a = function (t) {
                (0, c.default)(a, t);
                var e = f(a);

                function a() {
                    return (0, s.default)(this, a), e.call(this);
                }
                return (0, r.default)(a, [{
                    key: "createChildren"
                    , value: function () {
                        (0, o.default)((0, u.default)(a.prototype), "createChildren", this)
                        .call(this)
                            , this.loadScene("umExportV/LuckBoxPage");
                    }
                }]), a;
            }(_);
            t.LuckBoxPageUI = a, w("ui.umExportV.LuckBoxPageUI", a);
        }(t.umExportV || (t.umExportV = {}));
    }(I || (I = {}));
    var L = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .root = null, t;
            }
            return (0, r.default)(a, [{
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "init"
                , value: function (t) {
                    var e = this;
                    this.root = this.owner, this.root.width = Laya.stage.width, this.root.height = Laya.stage.height
                        , this.root.pos(0, 0), this.root.Info.text = t, Laya.Tween.to(this.root.Bg, {
                            alpha: 0
                        }, 2500), Laya.Tween.to(this.root.Bg, {
                            centerY: -200
                        }, 2500), Laya.timer.once(2500, this, function () {
                            S.Instance.index--, e.root.close();
                        });
                }
        }]), a;
        }(Laya.Script)
        , S = function () {
            function t() {
                (0, s.default)(this, t), this.index = 0;
            }
            return (0, r.default)(t, [{
                key: "showLabelTips"
                , value: function (t) {
                    if (!(this.index >= 5)) {
                        this.index++;
                        var e = new I.Export.TipsViewUI();
                        Laya.stage.addChild(e), e.zOrder = 2e3, e.addComponent(L)
                            .init(t);
                    }
                }
        }], [{
                key: "Instance"
                , get: function () {
                    return null == this._Instance && (this._Instance = new t()), this._Instance;
                }
        }]), t;
        }();
    S._Instance = null;
    var b = function () {
            function t() {
                (0, s.default)(this, t);
            }
            return (0, r.default)(t, [{
                key: "setSceneAdaptHeight"
                , value: function () {
                    var t = Laya.Scene.root.numChildren;
                    if (t)
                        for (var e = 0; e < t; e++) {
                            var a = Laya.Scene.root.getChildAt(e);
                            a.height = Laya.stage.height, a.width = Laya.stage.width, a.pos(0, 0);
                        }
                }
        }, {
                key: "setBg"
                , value: function (t) {
                    if (t.height && t.height !== Laya.stage.height) {
                        var e = Laya.stage.height
                            , a = t.height;
                        t.y = -(e - a) / 2, t.height = e;
                    }
                }
        }, {
                key: "setBgTop"
                , value: function (t) {
                    t && t.height && t.height !== Laya.stage.height && (t.height = Laya.stage.height);
                }
        }, {
                key: "adView"
                , value: function (t) {
                    t && (t.width = Laya.stage.width, t.height = Laya.stage.height, t.pos(0, 0));
                }
        }], [{
                key: "Instance"
                , get: function () {
                    return t._instance || (t._instance = new t()), t._instance;
                }
        }]), t;
        }()
        , B = function () {
            function t() {
                (0, s.default)(this, t), Laya.SoundManager.useAudioMusic = !1;
            }
            return (0, r.default)(t, [{
                key: "playMusic"
                , value: function (t) {
                    void 0 === this.musicOn && (this.musicOn = !0), this.musicOn && Laya.SoundManager.playMusic(g + t + ".mp3");
                }
        }, {
                key: "playSound"
                , value: function (t, e) {
                    void 0 === this.soundOn && (this.soundOn = !0), this.soundOn && Laya.SoundManager.playSound(g + t + ".mp3", e || 1);
                }
        }, {
                key: "stopNowMusic"
                , value: function () {
                    Laya.SoundManager.stopMusic();
                }
        }, {
                key: "startNowMusic"
                , value: function () {
                    this.playMusic(m.BGM);
                }
        }, {
                key: "stopOneSound"
                , value: function (t) {
                    Laya.SoundManager.stopSound(g + t + ".mp3");
                }
        }, {
                key: "musicOn"
                , get: function () {
                    return void 0 === this._musicOn && (this._musicOn = !0), this._musicOn;
                }
                , set: function (t) {
                    this._musicOn = t;
                }
        }, {
                key: "soundOn"
                , get: function () {
                    return null == this._soundOn && (this._soundOn = !0), this._soundOn;
                }
                , set: function (t) {
                    this._soundOn = t;
                }
        }], [{
                key: "Instance"
                , get: function () {
                    return t._instance || (t._instance = new t()), t._instance;
                }
        }]), t;
        }();

    function V(t, e, a, n) {
        return new(a || (a = Promise))(function (i, o) {
            function s(t) {
                try {
                    l(n.next(t));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    o(t);
                }
            }

            function r(t) {
                try {
                    l(n.throw(t));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    o(t);
                }
            }

            function l(t) {
                t.done ? i(t.value) : new a(function (e) {
                        e(t.value);
                    })
                    .then(s, r);
            }
            l((n = n.apply(t, e || []))
                .next());
        });
    }
    var R, x = function () {
            var t = function () {
                    function t(e, a) {
                        (0, s.default)(this, t), this.runtime = a, this.data = {
                            sid: e.slotId
                        }, this.ad = e.createAd(e.params), this.ad.onError(function (t) {});
                    }
                    return (0, r.default)(t, [{
                        key: "load"
                        , value: function () {
                            return this.ad.load();
                        }
            }, {
                        key: "show"
                        , value: function () {
                            var t = this;
                            return this.ad.show()
                                .then(function () {
                                    t.runtime.event("ad", "imp", {
                                        lbl: t.data.stype
                                        , val: 0
                                        , sub5: t.data.sid
                                    });
                                }, function (t) {
                                    throw t;
                                });
                        }
            }, {
                        key: "destroy"
                        , value: function () {
                            this.ad.destroy();
                        }
            }, {
                        key: "onClose"
                        , value: function (t) {
                            this.ad.onClose(t);
                        }
            }, {
                        key: "offClose"
                        , value: function (t) {
                            this.ad.offClose(t);
                        }
            }, {
                        key: "onLoad"
                        , value: function (t) {
                            this.ad.onLoad(t);
                        }
            }, {
                        key: "offLoad"
                        , value: function (t) {
                            this.ad.offLoad(t);
                        }
            }, {
                        key: "onError"
                        , value: function (t) {
                            this.ad.onError(t);
                        }
            }, {
                        key: "offError"
                        , value: function (t) {
                            this.ad.offError(t);
                        }
            }]), t;
                }()
                , e = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        var i;
                        return (0, s.default)(this, a), (i = e.call(this, t, n))
                            .data.stype = "banner"
                            , i.showed = !1, i;
                    }
                    return (0, r.default)(a, [{
                        key: "show"
                        , value: function () {
                            var t = this;
                            return this.ad.show()
                                .then(function () {
                                    t.showed || (t.showed = !0, t.runtime.event("ad", "imp", {
                                        lbl: t.data.stype
                                        , val: 0
                                        , sub5: t.data.sid
                                    }));
                                }, function (t) {
                                    throw t;
                                });
                        }
            }, {
                        key: "hide"
                        , value: function () {
                            this.ad.hide();
                        }
            }, {
                        key: "offResize"
                        , value: function (t) {
                            this.ad.offResize(t);
                        }
            }, {
                        key: "onResize"
                        , value: function (t) {
                            this.ad.onResize(t);
                        }
            }]), a;
                }(t)
                , a = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        var i;
                        return (0, s.default)(this, a), (i = e.call(this, t, n))
                            .data.stype = "interstitial"
                            , i;
                    }
                    return a;
                }(t)
                , n = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        var i;
                        return (0, s.default)(this, a), (i = e.call(this, t, n))
                            .data.stype = "video", i.adUnitId = t.adUnitId
                            , i.onCloseCallbacks = [], i.onLoadCallbacks = [], i.onErrorCallbacks = [], i;
                    }
                    return (0, r.default)(a, [{
                        key: "load"
                        , value: function () {
                            var t = this;
                            return this.ad.offError(), this.ad.onError(function (e) {
                                var a, n = h(t.onErrorCallbacks);
                                try {
                                    for (n.s(); !(a = n.n())
                                        .done;) {
                                        (0, a.value)(e);
                                    }
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    n.e(t);
                                } finally {
                                    n.f();
                                }
                            }), this.ad.offLoad(), this.ad.onLoad(function () {
                                var e, a = h(t.onLoadCallbacks);
                                try {
                                    for (a.s(); !(e = a.n())
                                        .done;) {
                                        (0, e.value)();
                                    }
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    a.e(t);
                                } finally {
                                    a.f();
                                }
                            }), this.ad.load();
                        }
            }, {
                        key: "show"
                        , value: function () {
                            var t = this;
                            return this.ad.offClose(), this.ad.onClose(function (e) {
                                (e && e.isEnded || void 0 === e) && t.runtime.event("ad", "imp", {
                                    lbl: t.data.stype
                                    , val: 0
                                    , sub5: t.data.sid
                                });
                                var a, n = h(t.onCloseCallbacks);
                                try {
                                    for (n.s(); !(a = n.n())
                                        .done;) {
                                        (0, a.value)(e);
                                    }
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    n.e(t);
                                } finally {
                                    n.f();
                                }
                            }), this.ad.show();
                        }
            }, {
                        key: "onClose"
                        , value: function (t) {
                            this.onCloseCallbacks.push(t);
                        }
            }, {
                        key: "onLoad"
                        , value: function (t) {
                            this.onLoadCallbacks.push(t), this.ad.offLoad(), this.ad.onLoad(t);
                        }
            }, {
                        key: "onError"
                        , value: function (t) {
                            this.onErrorCallbacks.push(t), this.ad.offError(), this.ad.onError(function (e) {
                                t(e);
                            });
                        }
            }]), a;
                }(t)
                , o = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        var i;
                        return (0, s.default)(this, a), (i = e.call(this, t, n))
                            .data.stype = "native"
                            , i;
                    }
                    return a;
                }(t)
                , l = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        var i;
                        return (0, s.default)(this, a), (i = e.call(this, t, n))
                            .data.stype = "grid", i;
                    }
                    return a;
                }(t);

            function u(t, e) {
                if (!t) {
                    var a = (t = window.location.search)
                        .indexOf("?"); -
                    1 != a && (t = t.substr(a + 1));
                }
                for (var n = {}, i = t.split(e || "&"), o = 0; o < i.length; o++)
                    if (i[o]) {
                        var s = i[o].split("=");
                        n[s[0].trim()] = decodeURIComponent(s[1].trim());
                    }
                return n;
            }

            function d(t, e) {
                var a = [];
                for (var n in t) t[n] && a.push(n + "=" + encodeURIComponent(t[n]));
                return a.join(e || "&");
            }

            function y(t) {
                for (var e = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < t; n++) e += a.charAt(Math.floor(Math.random() * a.length));
                return e;
            }

            function p(t, e) {
                for (var a in t) "__proto__" != a && t[a] && (e[a] = t[a]);
            }

            function m(t, e, a, n) {
                return new Promise(function (i, o) {
                    var s;
                    s = {
                        url: e
                        , method: t
                        , header: a
                        , data: n
                        , success: function (t) {
                            200 == t.statusCode ? i(t.data) : o(Error(t.statusCode));
                        }
                        , fail: function (t) {
                            o(t);
                        }
                    }, wx.request(s);
                });
            }
            var v = new(function () {
                function t() {
                    (0, s.default)(this, t);
                }
                return (0, r.default)(t, [{
                    key: "get"
                    , value: function (t, e) {
                        return m("GET", t, e)
                            .catch(function (a) {
                                if ("request:fail timeout" == a.errMsg) return m("GET", t, e);
                                throw a;
                            });
                    }
            }, {
                    key: "post"
                    , value: function (t, e, a) {
                        return m("POST", t, e, a)
                            .catch(function (n) {
                                if ("request:fail timeout" == n.errMsg) return m("POST", t, e, a);
                                throw n;
                            });
                    }
            }]), t;
            }())();

            function k(t) {
                wx.login(t);
            }

            function g(t) {
                wx.getStorage(t);
            }

            function I(t) {
                wx.setStorage(t);
            }

            function _(t) {
                wx.onShareAppMessage(t);
            }

            function C(t) {
                wx.shareAppMessage(t);
            }
            var w = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        var i;
                        return (0, s.default)(this, a), t.createAd = wx.createBannerAd, t.params = {
                                adUnitId: t.adUnitId
                                , adIntervals: t.adIntervals
                                , style: t.style
                            }, (i = e.call(this, t, n))
                            .style = i.ad.style, i;
                    }
                    return a;
                }(e)
                , L = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        return (0, s.default)(this, a), t.createAd = wx.createInterstitialAd, t.params = {
                            adUnitId: t.adUnitId
                        }, e.call(this, t, n);
                    }
                    return a;
                }(a)
                , S = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        return (0, s.default)(this, a), t.createAd = wx.createRewardedVideoAd, t.params = {
                            adUnitId: t.adUnitId
                            , multiton: t.multiton
                        }, e.call(this, t, n);
                    }
                    return a;
                }(n)
                , b = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        return (0, s.default)(this, a), t.createAd = wx.createCustomAd, t.params = {
                            adUnitId: t.adUnitId
                            , adIntervals: t.adIntervals
                            , style: t.style
                        }, e.call(this, t, n);
                    }
                    return a;
                }(o)
                , B = function (t) {
                    (0, c.default)(a, t);
                    var e = f(a);

                    function a(t, n) {
                        return (0, s.default)(this, a), t.createAd = wx.createGridAd, t.params = {
                            adUnitId: t.adUnitId
                            , adIntervals: t.adIntervals
                            , style: t.style
                            , adTheme: t.adTheme
                            , gridCount: t.gridCount
                        }, e.call(this, t, n);
                    }
                    return a;
                }(l)
                , V = function () {
                    function t(e, a) {
                        (0, s.default)(this, t), this.data = {}, p(e, this.data), this.runtime = a, this.showed = !1;
                    }
                    return (0, r.default)(t, [{
                        key: "show"
                        , value: function (t) {
                            if (!this.showed) {
                                var e = this.data.impurl
                                    , a = {}
                                    , n = this.data.impurl.indexOf("?"); -
                                1 != n && (e = this.data.impurl.substr(0, n), a = u(this.data.impurl.substr(n + 1)))
                                    , t && (a.em = t, a.ec = -1), e = e + "?" + d(a), v.get(e), this.showed = !0;
                            }
                        }
            }, {
                        key: "click"
                        , value: function (t) {
                            t = t || {}
                                , function (t, e) {
                                    wx.navigateToMiniProgram({
                                        appId: t.appid
                                        , path: t.path
                                        , extraData: e.extraData
                                        , envVersion: e.envVersion
                                        , success: e.success
                                        , fail: e.fail
                                        , complete: function (a) {
                                            var n = t.clkurl
                                                , i = {}
                                                , o = t.clkurl.indexOf("?"); -
                                            1 != o && (n = t.clkurl.substr(0, o), i = u(t.clkurl.substr(o + 1))), "navigateToMiniProgram:ok" != a.errMsg && (i.em = a.errMsg
                                                , i.ec = -1), n = n + "?" + d(i), v.get(n), e.complete && e.complete(a);
                                        }
                                    });
                                }(this.data, t);
                        }
            }, {
                        key: "dot"
                        , value: function () {
                            return this.data.dot;
                        }
            }]), t;
                }();
            return new(function () {
                function t() {
                    (0, s.default)(this, t);
                }
                return (0, r.default)(t, [{
                    key: "init"
                    , value: function (t) {
                        if (this.getSystemInfoPromise = null, this.getSettingPromise = null, this.authPromise = null
                            , this.initPromise = null, this.configPromise = null, this.loginPromise = null, !t.gameId) throw Error("obj.gameId is required by init(obj)");
                        var e = wx.getLaunchOptionsSync();
                        this.data = {
                            sdkv: "0.0.15"
                            , gid: parseInt(t.gameId)
                            , uid: t.uid
                            , uinfo: t.userInfo || {}
                            , cid: parseInt(e.query.cid || 0)
                            , utmsrc: e.query.utmsrc || ""
                            , suid: e.query.suid || ""
                            , ssid: e.query.ssid || ""
                            , smid: parseInt(e.query.smid || 0)
                        };
                        var a, n = this;
                        this.getSystemInfoPromise = new Promise(function (t, e) {
                                new Promise(function (t, e) {
                                        wx.getSystemInfo({
                                            success: function (e) {
                                                var a = e.system.split(" ")
                                                    , n = (0, i.default)(a, 2)
                                                    , o = n[0]
                                                    , s = n[1]
                                                    , r = {
                                                        lang: e.language
                                                        , os: o
                                                        , osv: s
                                                        , make: e.brand
                                                        , model: e.model
                                                        , width: e.screenWidth
                                                        , height: e.screenHeight
                                                        , pv: e.version
                                                        , plv: e.SDKVersion
                                                    };
                                                e.windowWidth > e.windowHeight ? r.o = "landscape" : r.o = "portrait", t(r);
                                            }
                                            , fail: e
                                        });
                                    })
                                    .then(function (e) {
                                        p(e, n.data), t(e);
                                    }, e);
                            }), this.getSettingPromise = new Promise(function (t, e) {
                                ! function (t) {
                                    wx.getSetting(t);
                                }({
                                    withSubscriptions: !0
                                    , success: function (e) {
                                        var a = (e.subscriptionsSetting || {})
                                            .itemSettings || {}
                                            , i = [];
                                        for (var o in a) "accept" == a[o] && i.push(o);
                                        n.data.tids = i, t(e);
                                    }
                                    , fail: e
                                });
                            }), this.authPromise = new Promise(function (e, a) {
                                t.userId ? (n.setUserId(t.userId), e({
                                        openid: t.userId
                                    })) : n.login()
                                    .then(function (t) {
                                        n.setUserId(t.openid), e(t);
                                    }, a);
                            }), this.initPromise = Promise.all([this.getSystemInfoPromise, this.getSettingPromise, this.authPromise])
                            .catch(function (t) {
                                n.data.err = t.message;
                            })
                            .then(function () {
                                return v.post("https://gw.api.umgame.cn/api/v1/init", {}, n.data)
                                    .then(function (t) {
                                        if (0 !== t.c) throw Error(t.m);
                                        return n.data.inited = 1, n.data.cid = t.d.cid, n.data.utmsrc = t.d.utmsrc, n.data.its = t.d.its
                                            , n.bald = t.d.bald, n.config = t.d.params || {}, n.shareMaterial = t.d.share_material || {}
                                            , n.shareStats = {
                                                new: t.d.share_new
                                                , exists: t.d.share_old
                                            }, n.loc = {
                                                province: t.d.province
                                                , city: t.d.city
                                            }, !0;
                                    });
                            })
                            .catch(function (t) {
                                return n.data.inited = 0, !1;
                            }), this.configPromise = this.initPromise.then(function () {
                                return n.config;
                            }), this.startTime = Date.now(), a = function (t) {
                                n.isShareDialogVisible ? n.isShareDialogVisible = !1 : n.startTime = Date.now();
                            }, wx.onShow(a), wx.onHide(function (t) {
                                if (!n.isShareDialogVisible) {
                                    var e = Date.now()
                                        , a = parseInt((e - n.startTime) / 1e3);
                                    n.event("sdk", "exit", {
                                        val: a
                                    });
                                }
                            });
                    }
            }, {
                    key: "login"
                    , value: function () {
                        var t = this;
                        return this.loginPromise = new Promise(function (e, a) {
                            var n = "umsdk:auth:" + t.data.gid
                                , i = {
                                    success: function (i) {
                                        if (i.code) {
                                            var o = "https://gw.api.umgame.cn/api/v1/auth?" + d({
                                                gid: t.data.gid
                                                , code: i.code
                                            }, "&");
                                            v.get(o)
                                                .then(function (t) {
                                                    0 === t.c ? I({
                                                        key: n
                                                        , data: JSON.stringify(t.d)
                                                        , complete: function (a) {
                                                            e(t.d);
                                                        }
                                                    }) : a(Error(t.m));
                                                })
                                                .catch(a);
                                        } else a(i);
                                    }
                                    , fail: function (e) {
                                        a(e), t.loginPromise = null;
                                    }
                                };
                            g({
                                key: n
                                , success: function (t) {
                                    var a, n = JSON.parse(t.data);
                                    a = {
                                        success: function () {
                                            e(n);
                                        }
                                        , fail: function () {
                                            k(i);
                                        }
                                    }, wx.checkSession(a);
                                }
                                , fail: function (t) {
                                    k(i);
                                }
                            });
                        }), this.loginPromise;
                    }
            }, {
                    key: "getUserInfo"
                    , value: function () {
                        var t = this;
                        return new Promise(function (e, a) {
                            var n = "umsdk:userinfo:" + t.data.gid;
                            g({
                                key: n
                                , success: function (t) {
                                    var a = JSON.parse(t.data);
                                    e(a);
                                }
                                , fail: function (i) {
                                    (t.loginPromise || t.login())
                                    .then(function (t) {
                                        var i;
                                        i = {
                                            success: function (t) {
                                                I({
                                                    key: n
                                                    , data: JSON.stringify(t.userInfo)
                                                    , complete: function (a) {
                                                        e(t.userInfo);
                                                    }
                                                });
                                            }
                                            , fail: a
                                        }, wx.getUserInfo(i);
                                    });
                                }
                            });
                        });
                    }
            }, {
                    key: "setUserId"
                    , value: function (t) {
                        this.data.uid = t;
                    }
            }, {
                    key: "getUserId"
                    , value: function () {
                        return this.data.uid;
                    }
            }, {
                    key: "getSetting"
                    , value: function () {
                        return this.getSettingPromise;
                    }
            }, {
                    key: "loadAttrLib"
                    , value: function (t, e) {
                        if (!t) throw Error("function fn is required by loadAttrLib(fn)");
                        var a = this;
                        this.initPromise.then(function (n) {
                            n && (a.bald && !e || t());
                        });
                    }
            }, {
                    key: "fetchConfig"
                    , value: function () {
                        return this.configPromise;
                    }
            }, {
                    key: "fetchLocation"
                    , value: function () {
                        var t = this;
                        return this.initPromise.then(function () {
                            return t.loc;
                        });
                    }
            }, {
                    key: "fetchShareData"
                    , value: function () {
                        var t = this;
                        return this.initPromise.then(function () {
                            return t.shareStats;
                        });
                    }
            }, {
                    key: "fetchLaunchOptions"
                    , value: function () {
                        var t = this;
                        return this.initPromise.then(function () {
                            return {
                                cid: t.data.cid
                                , src: t.data.utmsrc
                                , its: t.data.its
                            };
                        });
                    }
            }, {
                    key: "fetchShareQuery"
                    , value: function () {
                        var t = this;
                        return this.initPromise.then(function () {
                            return d({
                                utmsrc: "share"
                                , cid: t.data.cid
                                , suid: t.data.uid
                                , smid: t.shareMaterial.smid
                            });
                        });
                    }
            }, {
                    key: "subscribe"
                    , value: function (t) {
                        var e = this;
                        this.wait4init()
                            .then(function () {
                                var a = {};
                                p(e.data, a), "subscribeAppMsg:ok" == t.errMsg && (a.tall = 1), t.ids && (a.tids = t.ids)
                                    , v.post("https://gw.api.umgame.cn/api/v1/sub", {}, a);
                            });
                    }
            }, {
                    key: "wait4init"
                    , value: function () {
                        return this.initPromise;
                    }
            }, {
                    key: "event"
                    , value: function (t, e, a) {
                        if (!t || !e) throw Error("cat and act is required by event(cat, act, params)");
                        var n = this;
                        return this.wait4init()
                            .then(function () {
                                var i = {
                                    app: "minigame"
                                    , cat: t
                                    , act: e
                                    , rid: y(16)
                                    , lang: n.data.lang
                                    , os: n.data.os
                                    , osv: n.data.osv
                                    , make: n.data.make
                                    , model: n.data.model
                                    , w: n.data.width
                                    , h: n.data.height
                                    , did: n.data.uid
                                    , sub1: n.data.sdkv
                                    , sub2: n.data.pv
                                    , sub3: n.data.plv
                                    , sub4: n.data.utmsrc
                                    , subi1: n.data.gid
                                    , subi2: n.data.cid
                                    , subi3: n.data.its
                                    , subi7: n.data.inited
                                };
                                a && p(a, i);
                                var o = "https://event.api.umgame.cn/api/v1/event?" + d(i, "&");
                                return v.get(o);
                            });
                    }
            }, {
                    key: "onShareAppMessage"
                    , value: function (t, e) {
                        var a = this;
                        this.fetchShareQuery()
                            .then(function (n) {
                                _(function () {
                                    var i = e();
                                    return a.shareMaterial.title && (i.title = a.shareMaterial.title), a.shareMaterial.image && (i.imageUrl = a.shareMaterial.image)
                                        , i.query ? i.query = i.query + "&" + n : i.query = n, i.query = i.query + "&ssid=" + t
                                        , a.isShareDialogVisible = !0, i;
                                });
                            }, function (t) {
                                a.isShareDialogVisible = !0, _(e);
                            });
                    }
            }, {
                    key: "shareAppMessage"
                    , value: function (t) {
                        if (!t.slotId || !t.data) throw Error("`obj.slotId` and `obj.data` are required by shareAppMessage");
                        var e = this;
                        this.fetchShareQuery()
                            .then(function (a) {
                                if (e.shareMaterial.title && (t.data.title = e.shareMaterial.title), e.shareMaterial.image && (t.data.imageUrl = e.shareMaterial.image)
                                    , t.data.query ? t.data.query = t.data.query + "&" + a : t.data.query = a, t.data.query = t.data.query + "&ssid=" + t.slotId
                                    , e.isShareDialogVisible = !0, t.data.success) {
                                    var n = t.data.success;
                                    t.data.success = function () {
                                        n();
                                    }, C(t.data);
                                } else C(t.data);
                            }, function (a) {
                                e.isShareDialogVisible = !0, C(t.data);
                            });
                    }
            }, {
                    key: "createIconAd"
                    , value: function (t) {
                        if (!t.slotId) throw Error("obj.slotId is required by createIconAd(obj)");
                        return new(function () {
                            function t(e, a) {
                                (0, s.default)(this, t), this.runtime = a, this.data = {
                                    stype: "icon"
                                    , sid: e.slotId
                                    , limit: e.limit || 10
                                    , min_size: e.min_size || 0
                                    , max_size: e.max_size || 0
                                    , cdn: e.cdn || "icon.cdn.umgame.cn"
                                }, this.data.limit <= 0 && (this.data.limit = 1);
                            }
                            return (0, r.default)(t, [{
                                key: "load"
                                , value: function () {
                                    var t = this;
                                    return t.runtime.wait4init()
                                        .then(function () {
                                            var e = {};
                                            return p(t.data, e), p(t.runtime.data, e), v.post("https://gw.api.umgame.cn/api/v1/slot", {}, e)
                                                .then(function (e) {
                                                    if (0 !== e.c) throw Error(e.m);
                                                    for (var a = e.d, n = [], i = 0; i < a.length; i++) {
                                                        a[i].sid = t.data.sid;
                                                        var o = new V(a[i], t.runtime);
                                                        n.push(o);
                                                    }
                                                    return t.onLoadCallback && t.onLoadCallback(n), n;
                                                })
                                                .catch(function (e) {
                                                    return t.onErrorCallback && t.onErrorCallback(e), e;
                                                });
                                        });
                                }
                        }, {
                                key: "onLoad"
                                , value: function (t) {
                                    this.onLoadCallback = t;
                                }
                        }, {
                                key: "onError"
                                , value: function (t) {
                                    this.onErrorCallback = t;
                                }
                        }]), t;
                        }())(t, this);
                    }
            }, {
                    key: "createBannerAd"
                    , value: function (t) {
                        if (!t.adUnitId) throw Error("obj.adUnitId is required by createBannerAd(obj)");
                        if (!t.slotId) throw Error("obj.slotId is required by createBannerAd(obj)");
                        return new w(t, this);
                    }
            }, {
                    key: "createInterstitialAd"
                    , value: function (t) {
                        if (!t.adUnitId) throw Error("obj.adUnitId is required by createInterstitialAd(obj)");
                        if (!t.slotId) throw Error("obj.slotId is required by createInterstitialAd(obj)");
                        return new L(t, this);
                    }
            }, {
                    key: "createRewardedVideoAd"
                    , value: function (t) {
                        if (!t.adUnitId) throw Error("obj.adUnitId is required by createRewardedVideoAd(obj);");
                        if (!t.slotId) throw Error("obj.slotId is required by createRewardedVideoAd(obj)");
                        return new S(t, this);
                    }
            }, {
                    key: "createNativeAd"
                    , value: function (t) {
                        if (!t.adUnitId) throw Error("obj.adUnitId is required by createNativeAd(obj)");
                        if (!t.slotId) throw Error("obj.slotId is required by createNativeAd(obj)");
                        return new b(t, this);
                    }
            }, {
                    key: "createGridAd"
                    , value: function (t) {
                        if (!t.adUnitId) throw Error("obj.adUnitId is required by createGridAd(obj)");
                        if (!t.slotId) throw Error("obj.slotId is required by createGridAd(obj)");
                        return new B(t, this);
                    }
            }]), t;
            }())();
        }()
        , P = function () {
            function t(e) {
                var a = this;
                (0, s.default)(this, t), this._firstTime = !0, this._already = !1, this._beginLoad = !1
                    , this._errorTimer = 0, this._sdk = e, this._videoAd = this._sdk.umsdk.createRewardedVideoAd({
                        adUnitId: e.UMConfig.VideoId
                        , slotId: e.UMConfig.VideoSlotId
                    }), e.Log("视频VideoId(".concat(e.UMConfig.VideoId, ")")), this._videoAd.onError(function (t) {
                        setTimeout(function () {
                            a._errorTimer++, a._errorTimer > 5 || (e.Log("视频错误" + JSON.stringify(t)), a._Load());
                        }, 2e3);
                    }), this._videoAd.onClose(function (t) {
                        e.Log("视频关闭" + JSON.stringify(t)), t.isEnded ? a._success && (a._success(), a._success = null) : a._fail && (a._fail()
                            , a._fail = null), a._Load();
                    }), this._Load();
            }
            return (0, r.default)(t, [{
                key: "Show"
                , value: function (t) {
                    var e = this
                        , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._already = !1, this._success = t, this._fail = a, this._sdk.Log("视频开始播放")
                        , this._videoAd.show()
                        .then(function () {
                            e._sdk.Log("视频播放成功");
                        })
                        .catch(function (t) {
                            n && n(), e._errorTimer++, e._errorTimer > 5 || (e._sdk.Log("视频播放失败" + JSON.stringify(t))
                                , setTimeout(function () {
                                    e._Load();
                                }, 2e3));
                        });
                }
        }, {
                key: "_Load"
                , value: function () {
                    var t = this;
                    this._already || this._beginLoad || (this._beginLoad = !0, this._sdk.Log("视频开始加载")
                        , this._videoAd.load()
                        .then(function () {
                            if (t._sdk.Log("视频加载成功"), t._sdk.Log("bigenvideo", t._sdk.GetValue(7)), t._sdk.GetValue(7) && t._firstTime) {
                                t._firstTime = !1;
                                var e = function () {
                                    t._sdk.RunVideoCallBack();
                                };
                                t.Show(e, e, e);
                            } else t._already = !0;
                            t._beginLoad = !1;
                        })
                        .catch(function (e) {
                            t._beginLoad = !1, setTimeout(function () {
                                t._errorTimer++, t._errorTimer > 5 || (t._sdk.Log("视频加载失败" + JSON.stringify(e))
                                    , setTimeout(function () {
                                        t._Load();
                                    }, 2e3));
                            }, 1e3);
                        }));
                }
        }]), t;
        }()
        , A = function () {
            function t(e) {
                var a = this;
                (0, s.default)(this, t), this._errorTime = 0, this._sdk = e, this._interstitial = this._sdk.umsdk.createInterstitialAd({
                    adUnitId: this._sdk.UMConfig.InsertId
                    , slotId: e.UMConfig.InsertSlotId
                }), this._interstitial.onError(function (t) {
                    setTimeout(function () {
                        a._errorTime++, a._errorTime > 5 || (a._sdk.Log("插屏广告加载失败 : " + t.errMsg + t.errCode)
                            , a._interstitial.load());
                    }, 2e3);
                }), this._interstitial.onClose(function () {
                    a.closeCallback && a.closeCallback(), a.closeCallback = null, a._sdk.Log("插屏广告关闭")
                        , a._interstitial.load();
                }), this._interstitial.onLoad(function () {
                    a._sdk.Log("插屏广告加载成功");
                });
            }
            return (0, r.default)(t, [{
                key: "Show"
                , value: function () {
                    var t = this;
                    this._interstitial.show()
                        .then(function (e) {
                            t._sdk.Log("插屏广告展示成功");
                        })
                        .catch(function (e) {
                            t._errorTime++, t._errorTime > 5 || (t._sdk.Log("插屏广告展示失败" + JSON.stringify(e))
                                , setTimeout(function () {
                                    t._interstitial.load();
                                }, 2e3));
                        });
                }
        }]), t;
        }()
        , T = function () {
            function t(e) {
                (0, s.default)(this, t), this.customAdList = [], this.customId = [], this.customAdStatus = []
                    , this.customCloseCB = [], this._sdk = e;
                var a = this._sdk.UMConfig.CustomId;
                this.customId = a, this.initCustomAd(this.customId);
            }
            return (0, r.default)(t, [{
                key: "initCustomAd"
                , value: function (t) {
                    var e = this;
                    this.customAdList = [];
                    var a = wx.getSystemInfoSync()
                        .SDKVersion;
                    if ((a = parseInt(a.replace(/\./g, ""))) >= 2111)
                        for (var n = function (a) {
                                var n = wx.createCustomAd({
                                    adUnitId: t[a]
                                    , adIntervals: 30
                                    , style: e._sdk.UMConfig.GetCustomAdStyle(a)
                                });
                                n.onError(function (n) {
                                    console.log("initCustomAd 错误", n, t[a]), e.customAdStatus[a] = !1;
                                }), e.customAdStatus[a] = !1, n.onLoad(function () {
                                    e.customAdStatus[a] = !0;
                                }), n.onHide(function () {
                                    e._sdk.Log("关闭custom" + a), e.customCloseCB[a] && (e._sdk.Log("关闭custom Call" + a)
                                        , e.customCloseCB[a]()), e.customCloseCB[a] = null;
                                }), e.customAdList.push(n);
                            }, i = 0; i < t.length; i++) n(i);
                    else console.warn("用户端sdk版本不支持原生广告");
                }
        }, {
                key: "GetStatus"
                , value: function (t) {
                    return !!this.customAdStatus[t] && this.customAdStatus[t];
                }
        }, {
                key: "SetCustomCloseCB"
                , value: function (t, e) {
                    this.customCloseCB[t] = e;
                }
        }]), t;
        }()
        , U = function () {
            function t(e, a) {
                (0, s.default)(this, t), this._errorTimer = 0, this._bannerMap = [], this.BoolShow = !1
                    , this._showBannerIndex = 0, this._sdk = e, this._index = a;
                var n = [this._sdk.UMConfig.BannerId[this._index]]
                    , i = this._sdk.GetValue(6);
                1 == this._index && (i = this._sdk.GetValue(11)), i.length > 0 && (n = i.split(","))
                    , this._sdk.Log("AllBanner", n);
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    this._banner(r);
                }
                this._showBannerIndex = this._getRandom(0, this._bannerMap.length - 1);
            }
            return (0, r.default)(t, [{
                key: "_getRandom"
                , value: function (t, e) {
                    return Math.floor(Math.random() * (e - t + 1) + t);
                }
        }, {
                key: "Show"
                , value: function () {
                    var t = this;
                    this._bannerMap.length <= 0 ? this._sdk.Log("BannerMap id len <0") : (this._sdk.Log("show banner")
                        , this.bannerIsShow = !0, this._currentBanner = this._bannerMap[this._showBannerIndex]
                        , null != this._currentBanner && (this._currentBanner.isShow = !0, this._currentBanner.banner.show()
                            .then(function () {})
                            .catch(function () {
                                t._refreshBanner();
                            })));
                }
        }, {
                key: "Hide"
                , value: function () {
                    this._bannerMap.length <= 0 || (this._sdk.Log("hide banner"), this.bannerIsShow = !1
                        , this._bannerMap.forEach(function (t) {
                            t.banner.hide(), t.isShow = !1;
                        }));
                }
        }, {
                key: "_bannerAutoRefresh"
                , value: function () {
                    var t = this;
                    null == this._timerStep && (this._timerStep = this._sdk.GetValue(5)), this._closeRefreshBanner()
                        , this._refreshBannerTimer = setInterval(function () {
                            t.BoolShow && (t._timerStep -= 1, t._timerStep <= 0 && (t._timerStep = t._sdk.GetValue(5)
                                , t._sdk.Log("refresh banner"), t._refreshBanner()));
                        }, 1e3);
                }
        }, {
                key: "_closeRefreshBanner"
                , value: function () {
                    clearInterval(this._refreshBannerTimer);
                }
        }, {
                key: "_refreshBanner"
                , value: function () {
                    var t = this;
                    if (!(this._bannerMap.length <= 0 && this._currentBanner)) {
                        var e = this._currentBanner;
                        e && e.banner.hide();
                        var a = this._bannerMap.findIndex(function (t) {
                            return t.isShow;
                        });
                        a + 1 >= this._bannerMap.length ? this._showBannerIndex = 0 : this._showBannerIndex = a + 1
                            , this._currentBanner = this._bannerMap[this._showBannerIndex], null != this._currentBanner && (this._currentBanner.banner.show()
                                .then(function () {})
                                .catch(function () {
                                    t._refreshBanner();
                                }), this._currentBanner.isShow = !0, e && (e.isShow = !1));
                    }
                }
        }, {
                key: "_banner"
                , value: function (t) {
                    var e = this;
                    this._sdk.Log("CreateBanner:(".concat(t, ")"));
                    var a = this._sdk.umsdk.createBannerAd({
                        adUnitId: t
                        , adIntervals: 30
                        , style: this._sdk.UMConfig.GetBannerAdStyle(this._index)
                        , slotId: this._sdk.UMConfig.BannerSlotId
                    });
                    a.onError(function (n) {
                        e._sdk.Log("banner 广告加载失败", JSON.stringify(n)), e._errorTimer++, e._errorTimer > 5 || setTimeout(function () {
                            for (var n = -1, i = 0; i < e._bannerMap.length; i++) e._bannerMap[i].banner == a && (n = i); -
                            1 != n && e._bannerMap.splice(n), e._banner(t);
                        }, 2e3);
                    }), a.onLoad(function () {
                        e._sdk.Log("banner 广告加载成功"), e._bannerMap.push({
                            banner: a
                            , isShow: !1
                        });
                    }), a.onResize(function (t) {
                        e._sdk.UMConfig.SetBannerSize(e._index, a, t);
                    });
                }
        }, {
                key: "bannerIsShow"
                , set: function (t) {
                    this.BoolShow = t, t ? this._bannerAutoRefresh() : this._closeRefreshBanner();
                }
        }]), t;
        }()
        , E = function () {
            function t() {
                (0, s.default)(this, t), this._bannerList = [], this._umValue = {
                        ButtonDelayStatus: 0
                        , CustomStatus: 0
                        , ExportStatus: 0
                        , BannerStatus: 0
                        , BannerExcludeCity: ""
                        , gameVersion: ""
                        , MysticBoxStatus: 0
                        , AutoRefreshBanner: 39
                        , BannerIdMap: ""
                        , bigenvideo: 0
                        , VideoIconStatus: 0
                        , OldUserExportStatus: 0
                        , LuckBoxStatus: 0
                        , BannerIdMap2: ""
                        , LogOn: 0
                    }, this._unShowScene = "1005,1006,1007,1008,1011,1012,1013,1014,1017,1020,1023,1024,1025,1027,1030,1031,1032,1036,1042,1044,1047,1048,1049,1053,1102,1104,1106,1129"
                    , this._halfShowScene = "";
            }
            return (0, r.default)(t, [{
                key: "Init"
                , value: function () {
                    var t = this;
                    return new Promise(function (e, a) {
                        t._onInit && a("已经Init过了"), t._onInit = !0, t.umsdk = x, t.umsdk.init({
                            gameId: t.UMConfig.GameId
                            , userId: t._getUserId()
                        }), t.Log("开始InitUMSDK");
                        var n = function () {
                            t.UMConfig.NoAd || (null != t.UMConfig.BannerId[0] ? t._bannerList[0] = new U(t, 0) : t.Log("BannerId 0为空")
                                , null != t.UMConfig.BannerId[1] ? t._bannerList[1] = new U(t, 1) : t.Log("BannerId 1为空")
                                , "" != t.UMConfig.VideoId ? t._video = new P(t) : t.Log("VideoId为空"), "" != t.UMConfig.InsertId ? t._interstitial = new A(t) : t.Log("InsertId为空")
                                , t.UMConfig.CustomId.length > 0 ? t._custom = new T(t) : t.Log("CustomId为空")), e();
                        };
                        t._fetchConfig()
                            .then(function () {
                                var e = 0;
                                for (var a in t._umValue) Object.prototype.hasOwnProperty.call(t._umValue, a) && e++;
                                for (var i = [], o = 0; o < e; o++) i.push(t.GetValue(o));
                                t.Log("参数" + JSON.stringify(i)), t.Log("在线参数", t.UMConfig.Value), n();
                            })
                            .catch(function (e) {
                                t.Log("在线参数读取失败" + JSON.stringify(e));
                                var a = 0;
                                for (var i in t._umValue) Object.prototype.hasOwnProperty.call(t._umValue, i) && a++;
                                for (var o = [], s = 0; s < a; s++) o.push(t.GetValue(s));
                                t.Log("参数" + JSON.stringify(o)), t.Log("在线参数", t.UMConfig.Value), n();
                            });
                    });
                }
        }, {
                key: "_getUserId"
                , value: function () {
                    var t = ""
                        , e = "UmsdkUserId";
                    if (null == (t = wx.getStorageSync(e)) || t.length < 10) {
                        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
                            , n = a.length;
                        t = "";
                        for (var i = 0; i < 32; i++) t += a.charAt(Math.floor(Math.random() * n));
                    }
                    return wx.setStorageSync(e, t), t;
                }
        }, {
                key: "_fetchConfig"
                , value: function () {
                    var t = this;
                    return new Promise(function (e, a) {
                        var i = t._unShowScene.split(",")
                            , o = t._halfShowScene.split(",")
                            , s = wx.getLaunchOptionsSync()
                            .scene;
                        t.Log("当前场景值" + s);
                        var r = function (t, e, a) {
                            if (null != a) {
                                var i = (0, n.default)(t[e]);
                                if ("string" == i || "number" == i) {
                                    var o = a[e];
                                    if (null == o) return;
                                    if ("number" == i) {
                                        if (null == (o = Number(o)) || isNaN(o)) return;
                                        t[e] = o;
                                    } else t[e] = o;
                                }
                            }
                        };
                        t.umsdk.fetchConfig()
                            .then(function (n) {
                                if (t.Log("OnlineConfig", n), r(t._umValue, "LogOn", n), r(t._umValue, "ExportStatus", n)
                                    , t.UMConfig.Config)
                                    for (var l in t.UMConfig.Config) Object.prototype.hasOwnProperty.call(t.UMConfig.Config, l) && r(t.UMConfig.Config, l, n);
                                if (null == n) a("游戏Id=" + t.UMConfig.GameId + "无在线配置");
                                else if (n.gameVersion === t.UMConfig.gameVersion) a("游戏Id=" + t.UMConfig.GameId + "当前版本与线上版本一致");
                                else if (-1 != i.indexOf(s.toString())) t.Log("当前场景值" + s + " 匹配")
                                    , e();
                                else {
                                    var u = function (a) {
                                        var i = !1;
                                        if (a && (a.province && n.BannerExcludeCity && -1 !== n.BannerExcludeCity.indexOf(a.province) && (i = !0)
                                                , a.city && n.BannerExcludeCity && -1 !== n.BannerExcludeCity.indexOf(a.city) && (i = !0))
                                            , t.Log("当前区域为" + JSON.stringify(a) + " 是否屏蔽:" + i), !i)
                                            if (-1 != o.indexOf(s.toString()))
                                                for (var l in t.Log("当前半场景值" + s + " 匹配")
                                                        , t._umValue) Object.prototype.hasOwnProperty.call(t._umValue, l) && ("ExportStatus" != l && "LuckBoxStatus" != l && "OldUserExportStatus" != l && "VideoIconStatus" != l || r(t._umValue, l, n));
                                            else {
                                                for (var u in t._umValue) Object.prototype.hasOwnProperty.call(t._umValue, u) && r(t._umValue, u, n);
                                                var c = n.TimeControlValue ? n.TimeControlValue.split(",") : ["CustomStatus", "ButtonDelayStatus", "VideoIconStatus", "LuckBoxStatus=1"];
                                                if (c.length) {
                                                    for (var h = n.TimeControl.split("-"), d = [], f = !1, y = 0; y < h.length; y++) {
                                                        var p = h[y].split("/");
                                                        2 == p.length && (d.push(Number(p[0])), d.push(Number(p[1])));
                                                    }
                                                    if (d.length > 0 && d.length % 2 == 0) {
                                                        var m = Number(new Date()
                                                            .getHours());
                                                        m = 0 === m ? 24 : m;
                                                        for (var v = 0; v < d.length; v += 2) {
                                                            var k = d[v]
                                                                , g = d[v + 1];
                                                            if (m >= k && m <= g) {
                                                                f = !0;
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    if (f) {
                                                        t.Log("[umsdk um_timeControl auto]:".concat(c));
                                                        for (var I = 0; I < c.length; I++) {
                                                            var _ = c[I].split("=")
                                                                , C = _[0]
                                                                , w = 2 == _.length ? _[1] : 1;
                                                            isNaN(Number(C)) ? null != t._umValue[C] ? (t._umValue[C] = w, t.Log("um_timeControl auto reset:".concat(t._umValue[C]))) : t.Log("um_timeControl,没有".concat(C)) : t.Log("um_timeControl:".concat(C, ",数字类型无效"));
                                                        }
                                                    }
                                                }
                                                for (var L in t.UMConfig.Value) Object.prototype.hasOwnProperty.call(t.UMConfig.Value, L) && r(t.UMConfig.Value, L, n);
                                            }
                                        e();
                                    };
                                    t.umsdk.fetchLocation()
                                        .then(function (t) {
                                            u(t);
                                        })
                                        .catch(function (e) {
                                            t.Log("Location读取失败"), u(e);
                                        });
                                }
                            })
                            .catch(function (t) {
                                a(t);
                            });
                    });
                }
        }, {
                key: "ShowVideo"
                , value: function (t, e, a) {
                    this._video ? this._video.Show(t, e, a) : a();
                }
        }, {
                key: "OpenPage"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (this.Log("当前打开页面为:".concat(t, ",Status")
                            .concat(this._umValue.ExportStatus))
                        , "LuckBoxPage" == t) {
                        if (this.Log("LuckBoxPage:".concat(this._umValue.MysticBoxStatus)), !this._umValue.MysticBoxStatus) return e && e()
                            , !1;
                    } else {
                        if ("CustomPage" != t) return e && e(), !1;
                        if (this.Log("CustomPage:".concat(this._umValue.CustomStatus)), !this._umValue.CustomStatus || !this.GetCustomStatus(this.UMConfig.Custom_Page_Top_Index)) return e && e()
                            , !1;
                    }
                    return this.Log("".concat(t, "可以打开")), !0;
                }
        }, {
                key: "ShowBanner"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this._bannerList[t] && this._bannerList[t].Show();
                }
        }, {
                key: "HideBanner"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this._bannerList[t] && this._bannerList[t].Hide();
                }
        }, {
                key: "GetBannerStatus"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return !!this._bannerList[t] && this._bannerList[t].BoolShow;
                }
        }, {
                key: "ShowInterstitial"
                , value: function (t) {
                    this._interstitial && (this._interstitial.closeCallback = t, this._interstitial.Show());
                }
        }, {
                key: "SetAutoVideoCallBack"
                , value: function (t) {
                    this._autoVideoCB = t;
                }
        }, {
                key: "RunVideoCallBack"
                , value: function () {
                    this._autoVideoCB && this._autoVideoCB();
                }
        }, {
                key: "ShowCustom"
                , value: function (t) {
                    if (this._custom && this._custom.customAdList.length) {
                        console.log("展示原生");
                        for (var e = 0; e < this._custom.customAdList.length; e++) - 1 != t.indexOf(e) && this._custom.customAdList[e] && this._custom.customAdList[e].show();
                    }
                }
        }, {
                key: "HideCustom"
                , value: function (t) {
                    if (this._custom && this._custom.customAdList.length)
                        for (var e = 0; e < this._custom.customAdList.length; e++) - 1 != t.indexOf(e) && this._custom.customAdList[e] && this._custom.customAdList[e].hide();
                }
        }, {
                key: "GetValue"
                , value: function (t) {
                    return 0 == t ? this._umValue.ExportStatus : 1 == t ? this._umValue.BannerStatus : 2 == t ? this._umValue.BannerExcludeCity : 3 == t ? this._umValue.gameVersion : 4 == t ? this._umValue.MysticBoxStatus : 5 == t ? this._umValue.AutoRefreshBanner : 6 == t ? this._umValue.BannerIdMap : 7 == t ? this._umValue.bigenvideo : 8 == t ? this._umValue.VideoIconStatus : 9 == t ? this._umValue.OldUserExportStatus : 10 == t ? this._umValue.LuckBoxStatus : 11 == t ? this._umValue.BannerIdMap2 : 12 == t ? this._umValue.CustomStatus : 13 == t ? this._umValue.ButtonDelayStatus : void 0;
                }
        }, {
                key: "Log"
                , value: function () {
                    for (var t, e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                    (t = console)
                    .log.apply(t, ["[UMSDK]"].concat(a));
                }
        }, {
                key: "GetCustomStatus"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return !!this._custom && this._custom.GetStatus(t);
                }
        }, {
                key: "SetCustomCloseCB"
                , value: function (t, e) {
                    this.Log("SetCustomCloseCB", null != this._custom), this._custom && this._custom.SetCustomCloseCB(t, e);
                }
        }]), t;
        }()
        , D = function () {
            function t() {
                (0, s.default)(this, t), this.GameId = 10209, this.NoAd = !1, this.LogOn = !0, this.gameVersion = "1.0.5"
                    , this.BannerId = ["adunit-7604307d619cb42d"], this.BannerSlotId = "b3b20162057267fc"
                    , this.VideoId = "adunit-6c3b06dca426dbc6", this.VideoSlotId = "269b4723fea7c4e7"
                    , this.InsertId = "adunit-578f9d3cfdaaf662", this.InsertSlotId = "3312e41f021babcc"
                    , this.CustomId = ["adunit-77abfe973e602465", "adunit-d46309f78da980bb"], this.Custom_Page5X5_Index = 1
                    , this.Custom_LeftVer_Index = 4, this.Custom_RightVer_Index = 5, this.Custom_TopHor_Index = 6
                    , this.Custom_Page_Top_Index = 1, this.Custom_Page_Bottom_Index = 2, this.Value = {
                        Key: 0
                        , goldorvideo: 0
                        , GameViewBanner: 0
                        , GameViewCustom: 0
                    };
            }
            return (0, r.default)(t, [{
                key: "GetBannerAdStyle"
                , value: function (t) {
                    switch (t) {
                    case 0:
                    case 1:
                        return {
                            left: 0
                                , top: 0
                                , height: 80
                                , width: 270
                        };
                    }
                    return {
                        left: 0
                        , top: 0
                        , height: 80
                        , width: 270
                    };
                }
        }, {
                key: "SetBannerSize"
                , value: function (t, e, a) {
                    var n = wx.getSystemInfoSync()
                        , i = n.windowWidth
                        , o = n.windowHeight;
                    switch (t) {
                    case 0:
                    case 1:
                        e.style.top = o - a.height, e.style.left = (i - a.width) / 2;
                    }
                }
        }, {
                key: "GetCustomAdStyle"
                , value: function (t) {
                    var e = Laya.stage.width > Laya.stage.height
                        , a = wx.getSystemInfoSync()
                        , n = a.windowWidth
                        , i = a.windowHeight;
                    a.statusBarHeight;
                    switch (t) {
                    case this.Custom_Page_Top_Index:
                        return e ? {
                            top: 0
                            , width: 320
                            , left: (n - 320) / 2
                            , fixed: !1
                        } : {
                            top: 50
                            , left: 0
                            , fixed: !1
                        };

                    case this.Custom_Page_Bottom_Index:
                        return e ? {
                            top: i - 90
                            , width: 360
                            , left: (n - 360) / 2
                            , fixed: !1
                        } : {
                            top: i - 90
                            , left: 0
                            , fixed: !1
                        };

                    case this.Custom_Page5X5_Index:
                        return e ? {
                            top: 0
                            , width: 320
                            , left: (n - 320) / 2
                            , fixed: !1
                        } : {
                            top: 50
                            , left: 0
                            , fixed: !1
                        };

                    case this.Custom_TopHor_Index:
                    case this.Custom_LeftVer_Index:
                    case this.Custom_RightVer_Index:
                        break;

                    case 0:
                        return {
                            top: 0
                                , left: n - 300
                                , fixed: !1
                        };
                    }
                    return {
                        top: 0
                        , left: 0
                        , fixed: !1
                    };
                }
        }]), t;
        }();
    ! function (t) {
        t.CustomPage = "CustomPage", t.LuckBoxPage = "LuckBoxPage";
    }(R || (R = {}));
    var G = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .Progress = null, t.MysticBoxBtn = null
                    , t.nodeBoxClose = null, t.nodeBoxOpen = null, t.nodeLight = null, t.videoButton = null
                    , t.barMax = 563, t._alreadyClick = !1, t._clickRate = .14, t._autoRate = .006, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {}
        }, {
                key: "onEnable"
                , value: function () {
                    var t = this;
                    this.owner.height = Laya.stage.height, this.owner.width = Laya.stage.width, this.owner.pos(0, 0)
                        , this.videoButton.visible = !1, this.videoButton.on(Laya.Event.CLICK, this, this.onClick_Video)
                        , this.Progress.width = 0, this._fillRange = 0, this.MysticBoxBtn.visible = !0, this.nodeBoxClose.visible = !0
                        , this.nodeBoxOpen.visible = !1, this.nodeLight.visible = !1, this._alreadyClick = !1
                        , this._bannerStatus = H.GetBannerStatus(), this._bannerStatus && H.HideBanner()
                        , this.owner.onOpened = function (e) {
                            t._onClose = e.onClose;
                        }, this.random = .4 * Math.random() + .3;
                }
        }, {
                key: "ShowFinish"
                , value: function () {
                    var t = this;
                    this.MysticBoxBtn.visible = !1, this.nodeBoxClose.visible = !1, this.nodeBoxOpen.visible = !0
                        , this.nodeLight.visible = !0, Laya.timer.clearAll(this), Laya.timer.once(500, this, function () {
                            t.Hide();
                        });
                }
        }, {
                key: "Hide"
                , value: function () {
                    H.HideBanner(), this._bannerStatus && (H.ShowBanner(), this._bannerStatus = !1)
                        , Laya.timer.clearAll(this.MysticBoxBtn), this.owner.close(), this._onClose && this._onClose();
                }
        }, {
                key: "onUpdate"
                , value: function () {
                    this._fillRange -= this._autoRate, this._fillRange <= 0 && (this._fillRange = 0)
                        , this.Progress.width = this.barMax * this._fillRange, this.nodeLight.rotation += 2;
                }
        }, {
                key: "onClick"
                , value: function (t) {
                    var e = this;
                    switch (t.target.name) {
                    case "BtnClick":
                        this._fillRange += this._clickRate, this.Progress.width = this.barMax * this._fillRange
                            , this._fillRange >= this.random && !this._alreadyClick && (this._alreadyClick = !0
                                , H.ShowBanner(), Laya.timer.once(1e3, this.MysticBoxBtn, function () {
                                    H.HideBanner();
                                    (function t(a) {
                                        Laya.timer.once(1500, e.MysticBoxBtn, function () {
                                            H.ShowBanner(), a(t);
                                        });
                                    })(function t(a) {
                                        Laya.timer.once(1e3, e.MysticBoxBtn, function () {
                                            H.HideBanner(), a(t);
                                        });
                                    }), Laya.timer.once(500, e.MysticBoxBtn, function () {
                                        e.ShowFinish();
                                    });
                                })), this._fillRange >= 1 && this.MysticBoxBtn.visible && (this._fillRange = 1
                                , this.ShowFinish());
                    }
                }
        }, {
                key: "onClick_Video"
                , value: function () {
                    H.ShowVideo(function () {});
                }
        }]), a;
        }(Laya.Script)
        , M = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .next_buttom = null, t._clickCount = 0
                    , t.errorState = !1, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {}
        }, {
                key: "onEnable"
                , value: function () {
                    var t = this;
                    this.owner.height = Laya.stage.height, this.owner.width = Laya.stage.width, this.owner.pos(0, 0)
                        , this._clickCount = 0, this.owner.onOpened = function (e) {
                            t._onClose = e.onClose;
                        }, this._bannerStatus = H.GetBannerStatus(), this._bannerStatus && H.HideBanner()
                        , this.next_buttom.visible = !0, this.next_buttom.on(Laya.Event.CLICK, this, this.onClick_Buttom)
                        , this.errorState = !1, H.ShowCustom([H.UMConfig.Custom_Page_Top_Index]), Laya.timer.loop(1500, this, this.error, null, !1);
                }
        }, {
                key: "error"
                , value: function () {
                    this.errorState ? H.HideCustom([H.UMConfig.Custom_Page_Bottom_Index]) : H.ShowCustom([H.UMConfig.Custom_Page_Bottom_Index])
                        , this.errorState = !this.errorState;
                }
        }, {
                key: "onClick_Buttom"
                , value: function () {
                    this._clickCount++, this.Hide();
                }
        }, {
                key: "Hide"
                , value: function () {
                    Laya.timer.clear(this, this.error), H.HideCustom([H.UMConfig.Custom_Page_Bottom_Index, H.UMConfig.Custom_Page_Top_Index])
                        , this._bannerStatus && (H.ShowBanner(), this._bannerStatus = !1), this.owner.close()
                        , this._onClose && this._onClose();
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , H = new(function (t) {
            (0, c.default)(n, t);
            var e = f(n);

            function n() {
                var t;
                return (0, s.default)(this, n), (t = e.apply(this, arguments))
                    .UMConfig = new D()
                    , t;
            }
            return (0, r.default)(n, [{
                key: "Init"
                , value: function () {
                    var t = this
                        , e = Object.create(null, {
                            Init: {
                                get: function () {
                                    return (0, o.default)((0, u.default)(n.prototype), "Init", t);
                                }
                            }
                        });
                    return V(this, void 0, void 0, a.default.mark(function t() {
                        var n, i = this;
                        return a.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = Laya.ClassUtils.regClass, t.abrupt("return", (n("umsdk/export/laya/UMMultipleClicksPage.ts", G)
                                    , n("umsdk/export/laya/UMCustomPage.ts", M), window.umsdk = H, new Promise(function (t, n) {
                                        return V(i, void 0, void 0, a.default.mark(function n() {
                                            var i = this;
                                            return a.default.wrap(function (a) {
                                                for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    Laya.Browser.onWeiXin ? e.Init.call(this)
                                                        .then(function () {
                                                            i.Log("UMSDK Init Already"), t();
                                                        })
                                                        .catch(function (e) {
                                                            i.Log("UMSDK Init Fail" + e), t(e);
                                                        }) : (H.Log("非微信环境"), t());

                                                case 1:
                                                case "end":
                                                    return a.stop();
                                                }
                                            }, n, this);
                                        }));
                                    })));

                            case 2:
                            case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                }
        }, {
                key: "ShowVideo"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (Laya.Browser.onMiniGame) {
                        var i = function () {
                            Laya.Tween.tweenMap.forEach(function (t) {
                                if (t)
                                    for (var e = 0, a = t.length; e < a; e++) t[e].resume();
                            });
                        };
                        Laya.timer.pause(), Laya.Tween.tweenMap.forEach(function (t) {
                                if (t)
                                    for (var e = 0, a = t.length; e < a; e++) t[e].pause();
                            }), (0, o.default)((0, u.default)(n.prototype), "ShowVideo", this)
                            .call(this, function () {
                                i(), Laya.timer.resume(), t && t();
                            }, function () {
                                i(), Laya.timer.resume(), e ? e() : wx.showToast({
                                    title: "观看完整视频才有奖励哦"
                                    , icon: "none"
                                });
                            }, function () {
                                i(), Laya.timer.resume(), a ? a() : wx.showToast({
                                    title: "视频加载中，请稍后"
                                    , icon: "none"
                                });
                            });
                    } else t();
                }
        }, {
                key: "OpenPage"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if ((0, o.default)((0, u.default)(n.prototype), "OpenPage", this)
                        .call(this, t, e)) {
                        var a = Laya.Browser.height > Laya.Browser.width ? "umExportV" : "umExportH";
                        return Laya.View.open("".concat(a, "/")
                            .concat(t, ".scene"), !1, {
                                onClose: e
                                , page: t
                                , errType: ""
                            }, new Laya.Handler(this, function (t) {
                                t.width = Laya.stage.width, t.height = Laya.stage.height;
                            })), !0;
                    }
                    return !1;
                }
        }, {
                key: "GetPageIcon"
                , value: function (t) {
                    return (0, o.default)((0, u.default)(n.prototype), "GetPageIcon", this)
                        .call(this, t);
                }
        }, {
                key: "ShowBanner"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    (0, o.default)((0, u.default)(n.prototype), "ShowBanner", this)
                    .call(this, t);
                }
        }, {
                key: "HideBanner"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    (0, o.default)((0, u.default)(n.prototype), "HideBanner", this)
                    .call(this, t);
                }
        }, {
                key: "GetBannerStatus"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return (0, o.default)((0, u.default)(n.prototype), "GetBannerStatus", this)
                        .call(this, t);
                }
        }, {
                key: "ShowInterstitial"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    (0, o.default)((0, u.default)(n.prototype), "ShowInterstitial", this)
                    .call(this, t);
                }
        }, {
                key: "Log"
                , value: function () {
                    for (var t, e, a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
                    this.UMConfig.LogOn ? (t = (0, o.default)((0, u.default)(n.prototype), "Log", this))
                        .call.apply(t, [this].concat(i)) : (e = console)
                        .log.apply(e, ["[umsdk]"].concat(i));
                }
        }, {
                key: "Event"
                , value: function (t, e) {
                    (0, o.default)((0, u.default)(n.prototype), "Event", this)
                    .call(this, t, e);
                }
        }, {
                key: "SetAutoVideoCallBack"
                , value: function (t) {
                    (0, o.default)((0, u.default)(n.prototype), "SetAutoVideoCallBack", this)
                    .call(this, t);
                }
        }, {
                key: "ShowCustom"
                , value: function (t) {
                    (0, o.default)((0, u.default)(n.prototype), "ShowCustom", this)
                    .call(this, t);
                }
        }, {
                key: "HideCustom"
                , value: function (t) {
                    (0, o.default)((0, u.default)(n.prototype), "HideCustom", this)
                    .call(this, t);
                }
        }, {
                key: "ShowPageBanner"
                , value: function (t, e) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    (0, o.default)((0, u.default)(n.prototype), "ShowPageBanner", this)
                    .call(this, t, e, a);
                }
        }, {
                key: "GetValue"
                , value: function (t) {
                    return (0, o.default)((0, u.default)(n.prototype), "GetValue", this)
                        .call(this, t);
                }
        }, {
                key: "GetCustomStatus"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return (0, o.default)((0, u.default)(n.prototype), "GetCustomStatus", this)
                        .call(this, t);
                }
        }, {
                key: "IsBannerError"
                , value: function (t) {
                    return 0 != this.GetValue(1) && t >= this.GetValue(1);
                }
        }, {
                key: "IsErrorPageStatus"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                        , e = this.GetValue(10);
                    return 0 != e && t >= e;
                }
        }, {
                key: "SetCustomCloseCB"
                , value: function (t, e) {
                    (0, o.default)((0, u.default)(n.prototype), "SetCustomCloseCB", this)
                    .call(this, t, e);
                }
        }, {
                key: "ShowWxCustomPage"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.GetCustomStatus(this.UMConfig.Custom_Page5X5_Index) ? (this.SetCustomCloseCB(this.UMConfig.Custom_Page5X5_Index, t)
                        , this.ShowCustom([this.UMConfig.Custom_Page5X5_Index])) : t && t();
                }
        }, {
                key: "Shock"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    window.wx && (t ? wx.vibrateLong() : wx.vibrateShort());
                }
        }, {
                key: "IsShowVideoIcon"
                , get: function () {
                    return 0 == this.GetValue(8);
                }
        }, {
                key: "IsCustomStatus"
                , get: function () {
                    return 1 == this.GetValue(12);
                }
        }, {
                key: "IsButtonDelayStatus"
                , get: function () {
                    return 1 == this.GetValue(13);
                }
        }]), n;
        }(E))()
        , N = function t() {
            (0, s.default)(this, t);
        };
    N.Human = 2, N.Enemy = 4, N.Build = 8, N.Car = 16, N.LitileBaby = 32, N.RoadPos = 64
        , N.Border = 128, N.Police = 256, N.People = 512, N.Money = 1024, N.HumanCar = 2048
        , N.CarBorder = 4096;
    var F = function () {
        function t() {
            (0, s.default)(this, t);
        }
        return (0, r.default)(t, null, [{
            key: "positionWorld2local"
            , value: function (t, e) {
                var a = new Laya.Vector3(0, 0, 0)
                    , n = new Laya.Matrix4x4();
                return e.transform.worldMatrix.invert(n), Laya.Vector3.transformCoordinate(t, n, a)
                    , a;
            }
        }, {
            key: "localposition2World"
            , value: function (t, e) {
                var a = new Laya.Vector3();
                return Laya.Vector3.transformQuat(e, t.rotation, a), Laya.Vector3.add(a, t.position, a)
                    , a;
            }
        }, {
            key: "toAngle"
            , value: function (t, e) {
                var a = (t.x * e.x + t.y * e.y + t.z * e.z) / (Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z) * Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z));
                return a < -1 && (a = -1), a > 1 && (a = 1), 180 * Math.acos(a) / Math.PI;
            }
        }, {
            key: "WorldToScreen2"
            , value: function (e, a) {
                var n = t.InverseTransformPoint(e.transform, a)
                    .z
                    , i = new Laya.Vector4();
                return e.viewport.project(a, e.projectionViewMatrix, i), new Laya.Vector3(i.x / Laya.stage.clientScaleX, i.y / Laya.stage.clientScaleY, n);
            }
        }, {
            key: "InverseTransformPoint"
            , value: function (e, a) {
                var n = new Laya.Vector3();
                e.getRight(n);
                var i = new Laya.Vector3();
                e.getUp(i);
                var o = new Laya.Vector3();
                e.getForward(o);
                var s = new Laya.Vector3(-o.x, -o.y, -o.z)
                    , r = t.ProjectDistance(a, e.position, n)
                    , l = t.ProjectDistance(a, e.position, i)
                    , u = t.ProjectDistance(a, e.position, s);
                return new Laya.Vector3(r, l, u);
            }
        }, {
            key: "ProjectDistance"
            , value: function (e, a, n) {
                var i = new Laya.Vector3();
                Laya.Vector3.subtract(e, a, i);
                var o = t.toAngle(i, n) * Math.PI / 180;
                return Laya.Vector3.distance(e, a) * Math.cos(o);
            }
        }, {
            key: "TransformQuat"
            , value: function (t, e) {
                var a = t.x
                    , n = t.y
                    , i = t.z
                    , o = e.x
                    , s = e.y
                    , r = e.z
                    , l = e.w
                    , u = l * a + s * i - r * n
                    , c = l * n + r * a - o * i
                    , h = l * i + o * n - s * a
                    , d = -o * a - s * n - r * i;
                return new Laya.Vector3(u * l + d * -o + c * -r - h * -s, c * l + d * -s + h * -o - u * -r, h * l + d * -r + u * -s - c * -o);
            }
        }, {
            key: "trunRole"
            , value: function (t, e) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                    , n = t.transform.localRotationEuler.clone();
                t.transform.lookAt(e, new Laya.Vector3(0, 1, 0), !1);
                var i = t.transform.rotationEuler.clone();
                t.transform.localRotationEuler = n.clone(), i.y < 0 ? i.y += 180 : i.y -= 180, i.y - t.transform.localRotationEulerY > 180 ? i.y -= 360 : i.y - t.transform.localRotationEulerY < -180 && (i.y += 360);
                var o = 1 * Math.abs(t.transform.localRotationEulerY - i.y)
                    , s = Laya.TimeLine.to(t.transform, {
                        localRotationEulerY: i.y
                    }, o);
                return s.on(Laya.Event.COMPLETE, this, function () {
                    a && a(), s.pause(), s.destroy(), s = null;
                }), s.play("", !1), o;
            }
        }, {
            key: "RotateYOfVec"
            , value: function (e, a, n) {
                a /= t.Rad2Deg;
                var i = e.x * Math.cos(a) - e.y * Math.sin(a)
                    , o = e.x * Math.sin(a) + e.y * Math.cos(a);
                n.x = i, n.y = o;
            }
        }, {
            key: "Clampf"
            , value: function (t, e, a) {
                return a <= t ? t : a >= e ? e : a;
            }
        }, {
            key: "GetComponentInChildren"
            , value: function (t, e) {
                if (!e) return null;
                var a = e._components
                    , n = null;
                if (a)
                    for (var i = 0; i < a.length; i++) {
                        var o = a[i];
                        if (o instanceof t) {
                            n = o;
                            break;
                        }
                    }
                if (!n)
                    for (var s = 0; s < e.numChildren && !(n = this.GetComponentInChildren(t, e.getChildAt(s))); s++);
                return n;
            }
        }, {
            key: "GetComponentsInChildren"
            , value: function (t, e) {
                if (!e) return [];
                var a = [];
                return function e(n) {
                    if (!n) return null;
                    var i = n._components;
                    if (i)
                        for (var o = 0; o < i.length; o++) {
                            var s = i[o];
                            s instanceof t && a.push(s);
                        }
                    for (var r = 0; r < n.numChildren; r++) e(n.getChildAt(r));
                }(e), a;
            }
        }, {
            key: "PlayFadeOutAnim"
            , value: function (t) {
                var e = this
                    , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                    , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                    , i = function t(a) {
                        var i = null;
                        if (a instanceof Laya.MeshSprite3D && (i = a.meshRenderer.sharedMaterial), a instanceof Laya.SkinnedMeshSprite3D && (i = a.skinnedMeshRenderer.sharedMaterial)
                            , null != i) {
                            var o = null;
                            i instanceof Laya.UnlitMaterial && (o = new Laya.UnlitMaterial()), i instanceof Laya.BlinnPhongMaterial && (o = new Laya.UnlitMaterial())
                                , i instanceof Laya.PBRStandardMaterial && (o = new Laya.UnlitMaterial()), o && (i.cloneTo(o)
                                    , o.renderMode = 2, e.SetMat(a, o), Laya.Tween.to(o, {
                                        albedoColorA: 0
                                    }, 1e3 * n, null, new Laya.Handler(e, function () {
                                        e.SetMat(a, i), o.destroy();
                                    })));
                        }
                        for (var s = a.destroyed ? 0 : a.numChildren, r = 0; r < s; r++) {
                            t(a.getChildAt(r));
                        }
                    };
                i(t), Laya.timer.once(1e3 * n - 50, this, function () {
                    a && (a.once = !0, a.runWith(a.args));
                });
            }
        }, {
            key: "GetChildrenByName"
            , value: function (t, e) {
                if (e.name == t) return e;
                for (var a = e.numChildren, n = null, i = 0; i < a; i++) {
                    var o = e.getChildAt(i);
                    if (n = this.GetChildrenByName(t, o)) break;
                }
                return n;
            }
        }, {
            key: "GetForward"
            , value: function (t) {
                if (!t || t.destroyed) return new Laya.Vector3(0, 0, 0);
                var e = new Laya.Vector3();
                return t.transform.getForward(e), e;
            }
        }, {
            key: "GetRight"
            , value: function (t) {
                if (!t || t.destroyed) return new Laya.Vector3(0, 0, 0);
                var e = new Laya.Vector3();
                return t.transform.getRight(e), e;
            }
        }, {
            key: "GetUp"
            , value: function (t) {
                if (!t || t.destroyed) return new Laya.Vector3(0, 0, 0);
                var e = new Laya.Vector3();
                return t.transform.getUp(e), e;
            }
        }, {
            key: "Cross"
            , value: function (t, e) {
                if (t && e) {
                    var a = new Laya.Vector3(0, 0, 0);
                    return Laya.Vector3.cross(t, e, a), a;
                }
                return null;
            }
        }, {
            key: "detlaTime"
            , get: function () {
                var t = Laya.timer.delta;
                return t > 150 && (t = 25), t / 1e3;
            }
        }]), t;
    }();
    F.Rad2Deg = 57.29578, F.Deg2Rad = .0174532, F.ZERO = new Laya.Vector3(0, 0, 0)
        , F.ONE = new Laya.Vector3(1, 1, 1), F.SetMat = function (t, e) {
            t instanceof Laya.MeshSprite3D && t.meshRenderer && (t.meshRenderer.material = e)
                , t instanceof Laya.SkinnedMeshSprite3D && t.skinnedMeshRenderer && (t.skinnedMeshRenderer.material = e);
        };
    var O, W, X, j, Y = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    ._frame = 0, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.root = this.owner;
                }
        }, {
                key: "onDestroy"
                , value: function () {
                    Laya.timer.clearAll(this);
                }
        }, {
                key: "onUpdate"
                , value: function () {
                    this._frame++, this.owner && this.update(F.detlaTime);
                }
        }, {
                key: "onLateUpdate"
                , value: function () {
                    this.owner && this.lateUpdate(F.detlaTime);
                }
        }, {
                key: "getPos"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return t ? this.root && this.transform.localPosition : this.root && this.transform.position;
                }
        }, {
                key: "setPos"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e ? this.transform.localPosition = t : this.transform.position = t;
                }
        }, {
                key: "getRos"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return t ? this.root && this.transform.localRotationEuler : this.root && this.transform.rotationEuler;
                }
        }, {
                key: "setRos"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e ? this.transform.localRotationEuler = t : this.transform.rotationEuler = t;
                }
        }, {
                key: "positionWorld2local"
                , value: function (t, e) {
                    var a = new Laya.Vector3(0, 0, 0)
                        , n = new Laya.Matrix4x4();
                    return e.transform.worldMatrix.invert(n), Laya.Vector3.transformCoordinate(t, n, a)
                        , a;
                }
        }, {
                key: "getChildrenByName"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root;
                    if (e.name == t) return e;
                    for (var a = e.numChildren, n = null, i = 0; i < a; i++) {
                        var o = e.getChildAt(i);
                        if (n = this.getChildrenByName(t, o)) break;
                    }
                    return n;
                }
        }, {
                key: "update"
                , value: function (t) {}
        }, {
                key: "lateUpdate"
                , value: function (t) {}
        }, {
                key: "transform"
                , get: function () {
                    return this.root.transform;
                }
        }]), a;
        }(Laya.Script3D)
        , K = function () {
            function t() {
                (0, s.default)(this, t);
            }
            return (0, r.default)(t, null, [{
                key: "Clamp"
                , value: function (t, e, a) {
                    return t <= e ? e : t >= a ? a : t;
                }
        }, {
                key: "NumToStr"
                , value: function (t) {
                    return null != t && null != t || (t = 0), t > 1e12 ? parseFloat((t / 1e12)
                        .toFixed(1)) + "T" : t > 1e9 ? parseFloat((t / 1e9)
                        .toFixed(1)) + "B" : t > 1e6 ? parseFloat((t / 1e6)
                        .toFixed(1)) + "M" : t >= 1e3 ? parseFloat((t / 1e3)
                        .toFixed(1)) + "K" : parseFloat(t.toFixed(1));
                }
        }, {
                key: "DeepClone"
                , value: function (t) {
                    var e = JSON.stringify(t);
                    return JSON.parse(e);
                }
        }, {
                key: "Unique"
                , value: function (t) {
                    for (var e = [], a = 0; a < t.length; a++) - 1 == e.indexOf(t[a]) && e.push(t[a]);
                    return e;
                }
        }, {
                key: "WaitTime"
                , value: function (t) {
                    return V(this, void 0, void 0, a.default.mark(function e() {
                        return a.default.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise(function (e, a) {
                                    setTimeout(e, 1e3 * t);
                                }));

                            case 1:
                            case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                }
        }, {
                key: "Findall"
                , value: function (t, e) {
                    for (var a = [], n = t.length, i = 0; i < n && -1 !== (i = t.indexOf(e, i));) a.push(i)
                        , i += 1;
                    return a;
                }
        }, {
                key: "Random"
                , value: function (t, e) {
                    return t + Math.floor(Math.floor((e - t + 1) * Math.random()));
                }
        }, {
                key: "GetRepeat"
                , value: function (t) {
                    var e, a = [];
                    return function () {
                        for (var n = 0; n < t.length; n++) a[t[n]] ? a[t[n]]++ : a[t[n]] = 1;
                        e = Object.keys(a);
                    }(), e.length;
                }
        }, {
                key: "OutOfOrder"
                , value: function (t) {
                    for (var e = [], a = 0, n = t.length; a < n; a++) {
                        var i = Math.floor(Math.random() * (n - a));
                        e[a] = t[i], t.splice(i, 1);
                    }
                    return e;
                }
        }, {
                key: "GetArrDifference"
                , value: function (t, e) {
                    return t.concat(e)
                        .filter(function (t, e, a) {
                            return a.indexOf(t) === a.lastIndexOf(t);
                        });
                }
        }, {
                key: "angleToRadian"
                , value: function (t) {
                    return t * Math.PI / 180;
                }
        }, {
                key: "radianToAngle"
                , value: function (t) {
                    return 180 * t / Math.PI;
                }
        }, {
                key: "changeAngle360"
                , value: function (t) {
                    return t % 360 < 0 && (t += 360), t;
                }
        }, {
                key: "SpriteFrameSizeAdaptive"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Laya.Size(0, 0)
                        , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return V(this, void 0, void 0, a.default.mark(function i() {
                        var o, s, r;
                        return a.default.wrap(function (a) {
                            for (;;) switch (a.prev = a.next) {
                            case 0:
                                if (!t.skin) {
                                    a.next = 13;
                                    break;
                                }
                                if (o = t.getBounds(), s = new Laya.Size(o.width, o.height), r = new Laya.Vector2(e.width, e.height)
                                    , s.width <= s.height ? r.x = e.height * s.width / s.height : r.y = e.width * s.height / s.width
                                    , t.width = r.x, t.height = r.y, a.t0 = n, !a.t0) {
                                    a.next = 11;
                                    break;
                                }
                                return a.next = 9, this.WaitTime(.05);

                            case 9:
                                t.anchorX = t.anchorY = .5, t.centerX = t.centerY = 0;

                            case 11:
                                a.next = 14;
                                break;

                            case 13:
                                console.error("节点下没有图片--SpriteFrameSizeAdaptive---");

                            case 14:
                            case "end":
                                return a.stop();
                            }
                        }, i, this);
                    }));
                }
        }, {
                key: "StringArrToNumber"
                , value: function (t) {
                    for (var e = [], a = 0; a < t.length; a++) {
                        e[a] = [];
                        for (var n = 0; n < t[a].length; n++) e[a][n] = Number(t[a][n]);
                    }
                    return e;
                }
        }, {
                key: "MoveElement"
                , value: function (t, e) {
                    return Math.abs(e) > t.length && (e %= t.length), t.slice(-e)
                        .concat(t.slice(0, -e));
                }
        }]), t;
        }();
    ! function (t) {
        t.World_3d = "res/d3/Conventional/Game.ls";
    }(O || (O = {}))
    , function (t) {
        t.aimDisUI = "Prefab/aimPosUI.json", t.AtkFont = "Prefab/AtkFont.json";
    }(W || (W = {}))
    , function (t) {
        t.GameScene = "Scenes/GameScene.json", t.StartScene = "Scenes/StartScene.json";
    }(X || (X = {}))
    , function (t) {
        t.EndView = "PopView/EndView.json", t.LevelView = "PopView/LevelView.json", t.ReliveView = "PopView/ReliveView.json"
            , t.SignView = "PopView/SignView.json", t.SkinView = "PopView/SkinView.json", t.TaskView = "PopView/TaskView.json"
            , t.FreeGoldView = "PopView/FreeGoldView.json", t.UpdateSkillView = "PopView/UpdateSkillView.json"
            , t.FreeMpView = "PopView/FreeMpView.json", t.FreeBodyView = "PopView/FreeBodyView.json"
            , t.SkillLockView = "PopView/SkillLockView.json", t.VideoHpRewardView = "PopView/VideoHpRewardView.json"
            , t.GameChangeWeaponView = "PopView/GameChangeWeaponView.json", t.TryCarView = "PopView/TryCarView.json"
            , t.ShopWeaponView = "PopView/ShopWeapon.json";
    }(j || (j = {}));
    var z, q = [{
            name: "pixel"
            , path: "bitmapFont/$number.fnt"
    }]
        , J = function (t) {
            (0, c.default)(n, t);
            var e = f(n);

            function n() {
                return (0, s.default)(this, n), e.apply(this, arguments);
            }
            return (0, r.default)(n, null, [{
                key: "LoadAllRes3D"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                        , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        , a = Object.keys(O);
                    if (a.length) {
                        var n = [];
                        for (var i in a) n.push(O[a[i]]);
                        Laya.loader.create(n, Laya.Handler.create(this, function () {
                            t && t();
                        }), Laya.Handler.create(this, function (t) {
                            e && e(t);
                        }));
                    }
                }
        }, {
                key: "LoadAllRes2D"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                        , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        , a = Object.keys(W);
                    if (a.length) {
                        var n = [];
                        for (var i in a) n.push(W[a[i]]);
                        Laya.loader.load(n, Laya.Handler.create(this, function () {
                            t && t();
                        }), Laya.Handler.create(this, function (t) {
                            e && e(t);
                        }));
                    }
                }
        }, {
                key: "LoadRes3D"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    Laya.loader.create(t, Laya.Handler.create(this, function (t) {
                        e && e(t);
                    }), Laya.Handler.create(this, function (t) {
                        a && a(t);
                    }));
                }
        }, {
                key: "LoadRes2D"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    Laya.loader.load(t, Laya.Handler.create(this, function (t) {
                        e && e(t);
                    }), Laya.Handler.create(this, function (t) {
                        a && a(t);
                    }));
                }
        }, {
                key: "LoadScene2D"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    t && "" != t && Laya.Scene.load(t, Laya.Handler.create(this, function (t) {
                        e && e(t);
                    }), Laya.Handler.create(this, function (t) {
                        a && a(t);
                    }));
                }
        }, {
                key: "LoadAllFont"
                , value: function () {
                    return V(this, void 0, void 0, a.default.mark(function t() {
                        var e;
                        return a.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                e = 0;

                            case 1:
                                if (!(e < q.length)) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 4, this.loadBFont(q[e].path, q[e].name);

                            case 4:
                                e++, t.next = 1;
                                break;

                            case 7:
                            case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                }
        }, {
                key: "loadBFont"
                , value: function (t, e) {
                    var a = this;
                    return new Promise(function (n, i) {
                        var o = new Laya.BitmapFont();
                        o.loadFont(t, new Laya.Handler(a, function (t) {
                            console.log(t), Laya.Text.registerBitmapFont(e, t), console.log("注册新字体"), n();
                        }, [o]));
                    });
                }
        }, {
                key: "getRes"
                , value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (t && "" != t) {
                        var n = null;
                        (n = Laya.loader.getRes(t)) ? a && a(n): e ? Laya.loader.create(t, Laya.Handler.create(this, function (t) {
                            a && a(t);
                        })) : Laya.loader.load(t, Laya.Handler.create(this, function (t) {
                            a && a(t);
                        }));
                    }
                }
        }]), n;
        }(Laya.Script)
        , Q = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.root);
                    t && (t.canCollideWith = N.Human, t.collisionGroup = N.RoadPos);
                }
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    Le.IsPlaying && (ze.Instance.moveControl.state == Ae.Car ? (6 == Le.Level || 1 == Le.Level) && de.Instance.level_control.index++ : 1 == Le.Level && S.Instance.showLabelTips("目标点需要驾车到达！"));
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Y)
        , Z = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    ._root = null, t._touchPos = new Laya.Point(0, 0)
                    , t._lastX = 0, t._lastY = 0, t._isTouch = !1, t.MoveHorCall = null, t.MoveVerCall = null
                    , t.onClickStart = null, t.onClickEnd = null, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this._root = this.owner, this._root.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart)
                        , this._root.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove), this._root.on(Laya.Event.MOUSE_UP, this, this.onTouchEnd)
                        , this._root.on(Laya.Event.MOUSE_OUT, this, this.onTouchEnd);
                }
        }, {
                key: "onTouchStart"
                , value: function (t) {
                    this._isTouch = !0, this._touchPos = this.globalToLocal(t.stageX, t.stageY), this._lastX = this._touchPos.x
                        , this._lastY = this._touchPos.y, this.onClickStart && this.onClickStart();
                }
        }, {
                key: "globalToLocal"
                , value: function (t, e) {
                    var a = new Laya.Point(t, e);
                    return this._root.globalToLocal(a);
                }
        }, {
                key: "onTouchMove"
                , value: function (t) {
                    if (this._isTouch) {
                        var e = this.globalToLocal(t.stageX, t.stageY)
                            , a = e.x - this._lastX
                            , n = e.y - this._lastY;
                        this._lastX = e.x, this._lastY = e.y, this.MoveHorCall && this.MoveHorCall(a), this.MoveVerCall && this.MoveVerCall(n);
                    }
                }
        }, {
                key: "onTouchEnd"
                , value: function (t) {
                    this.isTouch && (this._isTouch = !1, this.onClickEnd && this.onClickEnd());
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "isTouch"
                , get: function () {
                    return this._isTouch;
                }
        }]), a;
        }(Laya.Script);
    ! function (t) {
        t.CarDestroy = "CarDestroy", t.EnemyDestroy = "EnemyDestroy", t.PoliceDestroy = "PoliceDestroy"
            , t.PeopleDestroy = "PeopleDestroy", t.ChangeCoin = "ChangeCoin", t.TeachEnd = "TeachEnd"
            , t.SkinChange = "SkinChange", t.GetVest = "GetVest", t.ChangeStartUI = "ChangeStartUI";
    }(z || (z = {})), window.MessageType = z;
    var $ = function () {
        function t() {
            (0, s.default)(this, t);
        }
        return (0, r.default)(t, null, [{
            key: "on"
            , value: function (t, e, a) {
                try {
                    this._eventMap[t].push({
                        callback: e
                        , target: a
                    });
                } catch (i) {
                    //i = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(i);
                    var n = new Array();
                    n.push({
                        callback: e
                        , target: a
                    }), this._eventMap[t] = n;
                }
            }
        }, {
            key: "emit"
            , value: function (t, e) {
                var a = this._eventMap[t];
                if (void 0 !== a)
                    for (var n = 0; n < a.length; n++) {
                        var i = a[n];
                        i && i.callback.call(i.target, e);
                    }
            }
        }, {
            key: "off"
            , value: function (t, e, a) {
                var n = this._eventMap[t];
                if (void 0 !== n)
                    for (var i = 0; i < n.length; i++) {
                        var o = n[i];
                        if (o && o.callback === e && o.target === a) {
                            n[i] = void 0;
                            break;
                        }
                    }
            }
        }, {
            key: "offType"
            , value: function (t) {
                this._eventMap[t] = void 0;
            }
        }]), t;
    }();
    $._eventMap = {}, window.GlobalEvent = $;
    var tt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    ._root = null, t._bg = null, t._point = null
                    , t._bgHalfWidth = 0, t._StartPos = new Laya.Point(0, 0), t._touchPos = new Laya.Point(0, 0)
                    , t._lastX = 0, t._lastY = 0, t.HorValue = 0, t.VerValue = 0, t.isTouch = !1, t.onClickStart = null
                    , t.onClickEnd = null, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this._root = this.owner, this._bg = this._root.getChildAt(0), this._point = this._root.getChildAt(1)
                        , this._bgHalfWidth = this._bg.width / 2, console.log("Rocker init");
                }
        }, {
                key: "addListen"
                , value: function () {
                    var t = this;
                    this._root.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart), this._root.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove)
                        , Laya.stage.on(Laya.Event.KEY_DOWN, this, function (e) {
                            switch (e.keyCode) {
                            case Laya.Keyboard.W:
                                t.VerValue = -1;
                                break;

                            case Laya.Keyboard.S:
                                t.VerValue = 1;
                                break;

                            case Laya.Keyboard.A:
                                t.HorValue = -1;
                                break;

                            case Laya.Keyboard.D:
                                t.HorValue = 1;
                            }
                        }), Laya.stage.on(Laya.Event.KEY_UP, this, function (e) {
                            switch (e.keyCode) {
                            case Laya.Keyboard.W:
                            case Laya.Keyboard.S:
                                t.VerValue = 0;
                                break;

                            case Laya.Keyboard.A:
                            case Laya.Keyboard.D:
                                t.HorValue = 0;
                            }
                        });
                }
        }, {
                key: "removeListen"
                , value: function () {}
        }, {
                key: "onEnable"
                , value: function () {
                    this._StartPos = new Laya.Point(this._bg.x, this._bg.y), this.isTouch = !1, this.addListen();
                }
        }, {
                key: "onDisable"
                , value: function () {
                    this.removeListen();
                }
        }, {
                key: "onDestroy"
                , value: function () {
                    this.removeListen();
                }
        }, {
                key: "onTouchStart"
                , value: function (t) {
                    this.isTouch = !0, this._touchPos = this.globalToLocal(t.stageX, t.stageY), this._lastX = this._touchPos.x
                        , this._lastY = this._touchPos.y, this._bg.pos(this._touchPos.x, this._touchPos.y)
                        , this._point.pos(this._touchPos.x, this._touchPos.y), this.onClickStart && this.onClickStart()
                        , this._root.on(Laya.Event.MOUSE_UP, this, this.onTouchEnd);
                }
        }, {
                key: "onTouchMove"
                , value: function (t) {
                    if (this.isTouch) {
                        var e = this.globalToLocal(t.stageX, t.stageY)
                            , a = new Laya.Point(e.x - this._lastX, e.y - this._lastY);
                        this._lastX = e.x, this._lastY = e.y;
                        var n = this._point.x + a.x
                            , i = this._point.y + a.y
                            , o = new Laya.Vector2(n - this._touchPos.x, i - this._touchPos.y)
                            , s = new Laya.Vector2(0, 0);
                        Laya.Vector2.normalize(o, s), this.HorValue = s.x, this.VerValue = s.y, Laya.Vector2.scalarLength(o) > this._bgHalfWidth && (n = s.x * this._bgHalfWidth + this._touchPos.x
                            , i = s.y * this._bgHalfWidth + this._touchPos.y), this._point.pos(n, i);
                    }
                }
        }, {
                key: "onTouchEnd"
                , value: function (t) {
                    this.isTouch && (this.isTouch = !1, this.resetRocker(), this.onClickEnd && this.onClickEnd()
                        , this._root.off(Laya.Event.MOUSE_UP, this, this.onTouchEnd));
                }
        }, {
                key: "resetRocker"
                , value: function () {
                    this._bg.x = this._point.x = this._StartPos.x, this._bg.y = this._point.y = this._StartPos.y
                        , this.HorValue = 0, this.VerValue = 0;
                }
        }, {
                key: "globalToLocal"
                , value: function (t, e) {
                    var a = new Laya.Point(t, e);
                    return this._root.globalToLocal(a);
                }
        }]), a;
        }(Laya.Script)
        , et = Laya.Sprite
        , at = Laya.HitArea
        , nt = function () {
            function t() {
                (0, s.default)(this, t), this.inTeach = !1, this.list = [], this.index = 0, this.teachListEndCall = null
                    , this._tips = null, this._hand = null, this._mask = null, this.teachCD = !1, t.Instance = this
                    , this.guideContainer = new et(), this.guideContainer.cacheAs = "bitmap", Laya.stage.addChild(this.guideContainer)
                    , this.guideContainer.zOrder = 2e3;
                var e = new et();
                e.alpha = 0, e.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000")
                    , this.guideContainer.addChild(e), this._mask = e, this.interactionArea = new et()
                    , this.interactionArea.blendMode = "destination-out", this.guideContainer.addChild(this.interactionArea)
                    , this.hitArea = new at(), this.hitArea.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000")
                    , this.guideContainer.hitArea = this.hitArea, this.guideContainer.mouseEnabled = !0
                    , this.tipContainer = new et(), Laya.stage.addChild(this.tipContainer), this._hand = new Laya.Image("GameSceneUI/引导手.png")
                    , Laya.stage.addChild(this._hand), this._hand.zOrder = 2500, this.clearTeach();
            }
            return (0, r.default)(t, [{
                key: "showTeach"
                , value: function (t, e, a, n) {
                    var i = this
                        , o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                        , s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (this.clearTeach(), this.guideContainer.visible = !0, this.guideContainer.alpha = 1
                        , this.hitArea.unHit.clear(), this.interactionArea.graphics.clear(), o ? s > 0 ? Laya.timer.once(1e3 * s, this, function () {
                            i._mask.alpha = .75, i.hitArea.unHit.drawCircle(t, e, a, "#000000"), i.interactionArea.graphics.drawCircle(t, e, a, "#000000");
                        }) : (this._mask.alpha = .75, this.hitArea.unHit.drawCircle(t, e, a, "#000000")
                            , this.interactionArea.graphics.drawCircle(t, e, a, "#000000")) : (this._mask.alpha = 0
                            , this.hitArea.unHit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000")
                            , this.interactionArea.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"))
                        , n && !n.destroyed) try {
                        n.visible = !0, this._tips = n, Laya.stage.addChild(n), n.zOrder = 2100;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        console.log(n);
                    }
                    this._hand.visible = !0, this._hand.pos(t - this._hand.width, e), this._hand.rotation = 0
                        , this.handAction();
                }
        }, {
                key: "handAction"
                , value: function () {
                    var t = this;
                    Laya.Tween.clearAll(this._hand), Laya.Tween.to(this._hand, {
                        rotation: 10
                    }, 500, null, new Laya.Handler(this, function () {
                        Laya.Tween.to(t._hand, {
                            rotation: 0
                        }, 500, null, new Laya.Handler(t, function () {
                            t.handAction();
                        }));
                    }));
                }
        }, {
                key: "NoTouch"
                , value: function () {
                    this._hand.visible = !1, this.hitArea.unHit.clear(), this.interactionArea.graphics.clear()
                        , this.guideContainer.visible = !0, this.guideContainer.alpha = 0, this._tips && this._tips.destroy(!0);
                }
        }, {
                key: "clearTeach"
                , value: function () {
                    this.hitArea.unHit.clear(), this.interactionArea.graphics.clear(), this._tips && this._tips.destroy(!0)
                        , this.guideContainer.visible = !1, this._hand.visible = !1, this.inTeach = !1;
                }
        }, {
                key: "addTeach"
                , value: function (t, e, a) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                        , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                        , o = new Laya.Point();
                    (o = t.localToGlobal(new Laya.Point(0, 0)))
                    .x += t.width * t.anchorX * t.scaleX
                        , o.y += t.height * t.anchorY * t.scaleY, this.list.push({
                            x: o.x
                            , y: o.y
                            , rad: e
                            , tips: a
                            , isForce: n
                            , delay: i
                        });
                }
        }, {
                key: "showNextTeach"
                , value: function () {
                    return V(this, void 0, void 0, a.default.mark(function t() {
                        var e = this;
                        return a.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(this.index >= this.list.length)) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return", (this.teachListEndCall && this.teachListEndCall(), this.teachListEndCall = null
                                    , void this.clearTeach()));

                            case 2:
                                if (t.t0 = this.index > 0, !t.t0) {
                                    t.next = 7;
                                    break;
                                }
                                return this.NoTouch(), t.next = 7, K.WaitTime(.25);

                            case 7:
                                this.list[this.index] && (this.teachCD = !0, Laya.timer.once(300, this, function () {
                                        e.teachCD = !1;
                                    }), this.showTeach(this.list[this.index].x, this.list[this.index].y, this.list[this.index].rad, this.list[this.index].tips, this.list[this.index].isForce, this.list[this.index].delay)
                                    , this.index++, this.inTeach = !0);

                            case 8:
                            case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                }
        }, {
                key: "isRealRect"
                , value: function (t, e) {
                    var a = this.index - 1;
                    if (!this.list[a]) return !1;
                    var n = new Laya.Vector3(t, e, 0)
                        , i = new Laya.Vector3(this.list[a].x, this.list[a].y, 0);
                    return Laya.Vector3.distance(n, i) < this.list[a].rad;
                }
        }]), t;
        }();
    nt.Instance = null;
    var it, ot, st = "FlyManGTA-"
        , rt = function t() {
            (0, s.default)(this, t);
        };
    rt.Coin = 0, rt.IsTeach = !0, rt.SignInfo = {
            date: ""
            , count: 0
            , isSign: !1
        }, rt.SkinInfo = {
            curr: "skin1"
            , has: ["skin1"]
        }, rt.Level = 1, rt.TaskInfo = [], rt.BodyLevel = 1, rt.HpLevel = 1, rt.EyeSkillLevel = 1
        , rt.RunSkillLevel = 1, rt.WebSkillLevel = 1, rt.FlySkillLevel = 1, rt.CatchFlySkillLevel = 1
        , rt.Lock_FasterSkill = !1, rt.Lock_LinKen = !0, rt.Lock_Fly = !0, rt.HasGun = ["Fist"]
        , rt.GeneralBullet = 0, rt.RocketLauncherBullet = 0, rt.VestCount = 0
        , function (t) {
            t.Coin = "Coin", t.IsTeach = "IsTeach", t.SignInfo = "SignInfo", t.SkinInfo = "SkinInfo"
                , t.Level = "Level", t.TaskInfo = "TaskInfo", t.BodyLevel = "BodyLevel", t.HpLevel = "HpLevel"
                , t.EyeSkillLevel = "EyeSkillLevel", t.RunSkillLevel = "RunSkillLevel", t.WebSkillLevel = "WebSkillLevel"
                , t.FlySkillLevel = "FlySkillLevel", t.CatchFlySkillLevel = "CatchFlySkillLevel"
                , t.Lock_FasterSkill = "Lock_FasterSkill", t.Lock_Fly = "Lock_Fly", t.Lock_LinKen = "Lock_LinKen"
                , t.HasGun = "HasGun", t.GeneralBullet = "GeneralBullet", t.RocketLauncherBullet = "RocketLauncherBullet"
                , t.VestCount = "VestCount";
        }(it || (it = {}));
    var lt = function () {
        function t() {
            (0, s.default)(this, t);
        }
        return (0, r.default)(t, null, [{
            key: "InitLocalData"
            , value: function () {
                for (var t = Object.keys(rt), e = 0; e < t.length; e++) try {
                    this.GetLocalValueByKey(t[e]);
                } catch (a) {
                    a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                    return console.error("------------获取本地数据失败Key:%s--------------", t[e]), console.error(a)
                        , !1;
                }
                return console.error("缺失的key:", this.LackKeys), !0;
            }
        }, {
            key: "SetKeyValue"
            , value: function (t) {
                null != rt[t] || null != rt[t] ? this.SetDataToLocal(t, rt[t]) : console.error("写入本地数据错误", t, "本地无数据");
            }
        }, {
            key: "SetAllKeyValue"
            , value: function () {
                for (var t = Object.keys(rt), e = 0; e < t.length; e++) this.SetKeyValue(t[e]);
            }
        }, {
            key: "GetLocalValueByKey"
            , value: function (t) {
                rt[t] = this.GetLocalData(t);
            }
        }, {
            key: "GetLocalData"
            , value: function (t) {
                var e = null;
                return null == (e = Laya.LocalStorage.getItem(st + t)) || null == e || "" == e ? (this.SetKeyValue(t)
                    , this.LackKeys.push(t), console.error("本地数据", t, "缺失"), this.GetLocalData(t)) : e = JSON.parse(e);
            }
        }, {
            key: "SetDataToLocal"
            , value: function (t, e) {
                Laya.LocalStorage.setItem(st + t, JSON.stringify(e));
            }
        }]), t;
    }();
    lt.LackKeys = []
        , function (t) {
            t.Eye = "EyeSkillLevel", t.Run = "RunSkillLevel", t.Web = "WebSkillLevel", t.Fly = "FlySkillLevel"
                , t.Catch = "CatchFlySkillLevel";
        }(ot || (ot = {}));
    var ut, ct = (t = {}, (0, e.default)(t, ot.Eye, [[], [1.037, 13, 100], [1.107, 12, 200], [1.237, 11, 400], [1.317, 10, 800], [1.347, 9, 1600]])
            , (0, e.default)(t, ot.Run, [[], [0, 10, 100], [0, 9, 200], [0, 8, 400], [0, 7, 800], [0, 6, 1600]])
            , (0, e.default)(t, ot.Web, [[], [3, 30, 100], [4, 28, 200], [5, 26, 400], [6, 24, 800], [7, 22, 1600]])
            , (0, e.default)(t, ot.Fly, [[], [0, 6, 100], [0, 5.5, 200], [0, 5, 400], [0, 4.5, 800], [0, 4, 1600]])
            , (0, e.default)(t, ot.Catch, [[], [5, 14, 100], [4.5, 13, 200], [4, 12, 400], [3.5, 11, 800], [3, 10, 1600]])
            , t)
        , ht = [{
            type: "skin1"
            , coin: 0
            , icon: "ObjIcon/毒液.png"
            , name: "毒王"
            , skillInfo: "生命+10%"
            , info: "异星生物附身人类得黑客，可惜异星寄生体已经死亡，是著名的独行客，性格傲娇。"
    }, {
            type: "skin2"
            , coin: 1e3
            , icon: "ObjIcon/杰克.png"
            , name: "霸哥"
            , skillInfo: "体力恢复+20%"
            , info: "因基因突变而拥有过人的能力，但是没有系统的学习，空有天赋也不知如何运用。"
    }, {
            type: "skin0"
            , coin: 1500
            , icon: "ObjIcon/小丑.png"
            , name: "丑爷"
            , skillInfo: "攻击力+10%"
            , info: "拥有幸福童年，成年后家道中落，一夜家庭破碎，父母惨死，在地下世界寻找自己的仇人并复仇。"
    }]
        , dt = [100, 100, 106, 113, 119, 126, 133, 141, 149, 157, 166, 176, 186, 196, 208, 219, 232]
        , ft = [100, 100, 103, 110, 117, 125, 133, 142, 151, 161, 172, 184, 196, 209, 223, 238, 254]
        , yt = [0, 47, 94, 141, 187, 234, 281, 328, 375, 422, 369, 515, 562, 609, 656, 703, 750]
        , pt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .uiRoot = null, t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    var e = this;
                    this.uiRoot = t, this.updateHpLevelInfo(), this.updateBodyLevelInfo(), this.uiRoot.HpUpdateButton.on(Laya.Event.CLICK, this, this.onClick_Hp)
                        , this.uiRoot.BodyUpdateButton.on(Laya.Event.CLICK, this, this.onClick_Body), Laya.timer.once(50, this, function () {
                            e.teachUp();
                        });
                }
        }, {
                key: "onAwake"
                , value: function () {}
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "teachUp"
                , value: function () {
                    this.uiRoot.HpUpdateButton_Teach.visible = !1, this.uiRoot.BodyUpdateButton_Teach.visible = !1
                        , mt.Coin >= yt[mt.HpLevel] ? this.handAction(this.uiRoot.HpUpdateButton_Teach) : mt.Coin >= yt[mt.BodyLevel] && this.handAction(this.uiRoot.BodyUpdateButton_Teach);
                }
        }, {
                key: "handAction"
                , value: function (t) {
                    var e = this;
                    t.visible = !0, Laya.Tween.clearAll(t), Laya.Tween.to(t, {
                        rotation: 5
                    }, 200, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(t, {
                            rotation: 0
                        }, 200, null, Laya.Handler.create(e, function () {
                            e.teachUp();
                        }));
                    }));
                }
        }, {
                key: "onClick_Hp"
                , value: function () {
                    var t = this;
                    mt.HpLevel >= dt.length - 1 || (mt.Coin < yt[mt.HpLevel] ? H.UMConfig.Value.goldorvideo ? H.ShowVideo(function () {
                        mt.Coin += yt[mt.HpLevel], t.onClick_Hp(), t.teachUp();
                    }) : we.Instance.showPopViewByLaya(j.FreeGoldView) : (B.Instance.playSound(m.Get0)
                        , mt.Coin -= yt[mt.HpLevel], mt.HpLevel++, this.updateHpLevelInfo(), S.Instance.showLabelTips("升级成功")
                        , this.teachUp()));
                }
        }, {
                key: "onClick_Body"
                , value: function () {
                    var t = this;
                    mt.BodyLevel >= ft.length - 1 || (mt.Coin < yt[mt.BodyLevel] ? H.UMConfig.Value.goldorvideo ? H.ShowVideo(function () {
                        mt.Coin += yt[mt.BodyLevel], t.onClick_Body(), t.teachUp();
                    }) : we.Instance.showPopViewByLaya(j.FreeGoldView) : (B.Instance.playSound(m.Get0)
                        , mt.Coin -= yt[mt.BodyLevel], mt.BodyLevel++, this.updateBodyLevelInfo(), S.Instance.showLabelTips("升级成功")
                        , this.teachUp()));
                }
        }, {
                key: "updateHpLevelInfo"
                , value: function () {
                    this.uiRoot.HpUpdateButton.visible = !(mt.HpLevel >= dt.length - 1), this.uiRoot.HPUpdateBox_GoldLabel.text = "".concat(yt[mt.HpLevel])
                        , this.uiRoot.HPUpdateBox_LvLabel.text = "".concat(mt.HpLevel), this.uiRoot.HPUpdateBox_ValueLabel.text = "".concat(dt[mt.HpLevel], "->")
                        .concat(this.uiRoot.HpUpdateButton.visible ? dt[mt.HpLevel + 1] : "max");
                }
        }, {
                key: "updateBodyLevelInfo"
                , value: function () {
                    this.uiRoot.BodyUpdateButton.visible = !(mt.BodyLevel >= ft.length - 1), this.uiRoot.BodyUpdateBox_GoldLabel.text = "".concat(yt[mt.BodyLevel])
                        , this.uiRoot.BodyUpdateBox_LvLabel.text = "".concat(mt.BodyLevel), this.uiRoot.BodyUpdateBox_ValueLabel.text = "".concat(ft[mt.BodyLevel], "->")
                        .concat(this.uiRoot.BodyUpdateButton.visible ? ft[mt.BodyLevel + 1] : "max");
                }
        }]), a;
        }(Laya.Script)
        , mt = function () {
            function t() {
                (0, s.default)(this, t);
            }
            return (0, r.default)(t, null, [{
                key: "IsHasSkin"
                , value: function (t) {
                    return -1 != rt.SkinInfo.has.indexOf(t);
                }
        }, {
                key: "GetSkin"
                , value: function (t) {
                    this.IsHasSkin(t) || (rt.SkinInfo.has.push(t), lt.SetKeyValue(it.SkinInfo), B.Instance.playSound(m.Get0));
                }
        }, {
                key: "GetSkinName"
                , value: function (t) {
                    for (var e = 0; e < ht.length; e++)
                        if (ht[e].type == t) return ht[e].name;
                    return "";
                }
        }, {
                key: "GetCurrSkillData"
                , value: function (t) {
                    var e = [1, 1, 1600];
                    return ct[t] && ((e = ct[t][rt[t]]) && 0 != e.length || (e = [1, 1, 1600])), e;
                }
        }, {
                key: "IsHasGun"
                , value: function (t) {
                    return -1 != rt.HasGun.indexOf(t);
                }
        }, {
                key: "GetGun"
                , value: function (t) {
                    this.IsHasGun(t) || (rt.HasGun.push(t), lt.SetKeyValue(it.HasGun));
                }
        }, {
                key: "GameHP"
                , get: function () {
                    return dt[this.HpLevel];
                }
        }, {
                key: "GameBody"
                , get: function () {
                    return ft[this.BodyLevel];
                }
        }, {
                key: "GameATK"
                , get: function () {
                    return 15;
                }
        }, {
                key: "Level"
                , get: function () {
                    return rt.Level;
                }
                , set: function (t) {
                    rt.Level = t, lt.SetKeyValue(it.Level);
                }
        }, {
                key: "Coin"
                , get: function () {
                    return rt.Coin;
                }
                , set: function (t) {
                    "number" == typeof t && (rt.Coin = t, lt.SetKeyValue(it.Coin), $.emit(z.ChangeCoin));
                }
        }, {
                key: "BodyLevel"
                , get: function () {
                    return rt.BodyLevel;
                }
                , set: function (t) {
                    rt.BodyLevel = t, lt.SetKeyValue(it.BodyLevel);
                }
        }, {
                key: "HpLevel"
                , get: function () {
                    return rt.HpLevel;
                }
                , set: function (t) {
                    rt.HpLevel = t, lt.SetKeyValue(it.HpLevel);
                }
        }, {
                key: "CurrSkin"
                , get: function () {
                    return rt.SkinInfo.curr;
                }
                , set: function (t) {
                    rt.SkinInfo.curr = t, lt.SetKeyValue(it.SkinInfo), $.emit(z.SkinChange);
                }
        }, {
                key: "EyeSkillLevel"
                , get: function () {
                    return rt.EyeSkillLevel;
                }
                , set: function (t) {
                    rt.EyeSkillLevel = t, lt.SetKeyValue(it.EyeSkillLevel);
                }
        }, {
                key: "RunSkillLevel"
                , get: function () {
                    return rt.RunSkillLevel;
                }
                , set: function (t) {
                    rt.RunSkillLevel = t, lt.SetKeyValue(it.RunSkillLevel);
                }
        }, {
                key: "WebSkillLevel"
                , get: function () {
                    return rt.WebSkillLevel;
                }
                , set: function (t) {
                    rt.WebSkillLevel = t, lt.SetKeyValue(it.WebSkillLevel);
                }
        }, {
                key: "FlySkillLevel"
                , get: function () {
                    return rt.FlySkillLevel;
                }
                , set: function (t) {
                    rt.FlySkillLevel = t, lt.SetKeyValue(it.FlySkillLevel);
                }
        }, {
                key: "CatchFlySkillLevel"
                , get: function () {
                    return rt.CatchFlySkillLevel;
                }
                , set: function (t) {
                    rt.CatchFlySkillLevel = t, lt.SetKeyValue(it.CatchFlySkillLevel);
                }
        }, {
                key: "Lock_FasterRunSkill"
                , get: function () {
                    return rt.Lock_FasterSkill;
                }
                , set: function (t) {
                    rt.Lock_FasterSkill = t, lt.SetKeyValue(it.Lock_FasterSkill);
                }
        }, {
                key: "Lock_LinKen"
                , get: function () {
                    return rt.Lock_LinKen;
                }
                , set: function (t) {
                    rt.Lock_LinKen = t, lt.SetKeyValue(it.Lock_LinKen);
                }
        }, {
                key: "Lock_Fly"
                , get: function () {
                    return rt.Lock_Fly;
                }
                , set: function (t) {
                    rt.Lock_Fly = t, lt.SetKeyValue(it.Lock_Fly);
                }
        }, {
                key: "NormalBullet"
                , get: function () {
                    return rt.GeneralBullet;
                }
                , set: function (t) {
                    rt.GeneralBullet = t, lt.SetKeyValue(it.GeneralBullet);
                }
        }, {
                key: "RocketBullet"
                , get: function () {
                    return rt.RocketLauncherBullet;
                }
                , set: function (t) {
                    rt.RocketLauncherBullet = t, lt.SetKeyValue(it.RocketLauncherBullet);
                }
        }, {
                key: "Vest"
                , get: function () {
                    return rt.VestCount;
                }
                , set: function (t) {
                    rt.VestCount = t, lt.SetKeyValue(it.VestCount);
                }
        }]), t;
        }()
        , vt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    ._frame = 0, t.myGroup = N.Human
                    , t.checkGroup = N.People | N.Police | N.Enemy | N.Car, t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t;
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onUpdate"
                , value: function () {
                    if (Le.IsPlaying && ze.Instance) {
                        this._frame++;
                        var t = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2)
                            , e = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                        ze.Instance.cameraControl.camera.viewportPointToRay(t, e);
                        var a = new Laya.HitResult();
                        Ne.World.physicsSimulation.rayCast(e, a, 20, this.myGroup, this.checkGroup), a.succeeded ? (this.uiRoot.AimUI.skin = "GameSceneUI/红准心.png"
                            , this.uiRoot.AimUI.alpha = 1) : (this.uiRoot.AimUI.alpha = .5, this.uiRoot.AimUI.skin = "GameSceneUI/绿准心.png");
                    }
                }
        }]), a;
        }(Laya.Script)
        , kt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t;
                }
        }, {
                key: "showHpTips"
                , value: function (t, e, a) {
                    var n = this
                        , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    t = K.Clamp(t, 0, 1), e = K.Clamp(e, 0, 1), this.uiRoot.EnemyInfoBox_hpBar.width = 200 * t
                        , this.uiRoot.EnemyInfoBox_nameLabel.text = a, this.uiRoot.EnemyInfoBox_enemyTips.visible = i
                        , this.uiRoot.EnemyInfoBox.visible = !0, this.uiRoot.EnemyInfoBox.alpha = 1, Laya.Tween.clearAll(this.uiRoot.EnemyInfoBox)
                        , Laya.Tween.clearAll(this.uiRoot.EnemyInfoBox_hpBar), Laya.Tween.to(this.uiRoot.EnemyInfoBox_hpBar, {
                            width: 200 * e
                        }, 1e3 * (t - e), null, Laya.Handler.create(this, function () {})), Laya.Tween.to(this.uiRoot.EnemyInfoBox, {
                            alpha: .35
                        }, 3e3, null, Laya.Handler.create(this, function () {
                            n.uiRoot.EnemyInfoBox.visible = !1;
                        }));
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , gt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    var e = this;
                    this.uiRoot = t, this.uiRoot.Car_DownButton.on(Laya.Event.CLICK, this, this.onClick_Down)
                        , this.uiRoot.Car_ForwardButton.on(Laya.Event.MOUSE_DOWN, this, this.onFwTouch_Down)
                        , this.uiRoot.Car_ForwardButton.on(Laya.Event.MOUSE_OUT, this, this.onFwTouch_Up)
                        , this.uiRoot.Car_ForwardButton.on(Laya.Event.MOUSE_UP, this, this.onFwTouch_Up)
                        , this.uiRoot.Car_BackButton.on(Laya.Event.MOUSE_DOWN, this, this.onBackTouch_Down)
                        , this.uiRoot.Car_BackButton.on(Laya.Event.MOUSE_OUT, this, this.onBackTouch_Up)
                        , this.uiRoot.Car_BackButton.on(Laya.Event.MOUSE_UP, this, this.onBackTouch_Up), this.uiRoot.Car_LeftButton.on(Laya.Event.MOUSE_DOWN, this, this.onClick_Left)
                        , this.uiRoot.Car_LeftButton.on(Laya.Event.MOUSE_OUT, this, this.onClick_LeftUP)
                        , this.uiRoot.Car_LeftButton.on(Laya.Event.MOUSE_UP, this, this.onClick_LeftUP), this.uiRoot.Car_RightButton.on(Laya.Event.MOUSE_DOWN, this, this.onClick_Right)
                        , this.uiRoot.Car_RightButton.on(Laya.Event.MOUSE_OUT, this, this.onClick_RightUP)
                        , this.uiRoot.Car_RightButton.on(Laya.Event.MOUSE_UP, this, this.onClick_RightUP)
                        , Laya.stage.on(Laya.Event.KEY_DOWN, this, function (t) {
                            switch (t.keyCode) {
                            case Laya.Keyboard.A:
                                e.onClick_Left();
                                break;

                            case Laya.Keyboard.D:
                                e.onClick_Right();
                            }
                        }), Laya.stage.on(Laya.Event.KEY_UP, this, function (t) {
                            switch (t.keyCode) {
                            case Laya.Keyboard.A:
                                e.onClick_LeftUP();
                                break;

                            case Laya.Keyboard.D:
                                e.onClick_RightUP();
                            }
                        });
                }
        }, {
                key: "onFwTouch_Down"
                , value: function () {
                    ze.Instance.moveControl.carForward = !0, ze.Instance.moveControl.carBack = !1;
                }
        }, {
                key: "onFwTouch_Up"
                , value: function () {
                    ze.Instance.moveControl.carForward = !1;
                }
        }, {
                key: "onBackTouch_Down"
                , value: function () {
                    ze.Instance.moveControl.carForward = !1, ze.Instance.moveControl.carBack = !0;
                }
        }, {
                key: "onBackTouch_Up"
                , value: function () {
                    ze.Instance.moveControl.carBack = !1;
                }
        }, {
                key: "onClick_Down"
                , value: function () {
                    ze.Instance.EndCar(), B.Instance.playSound(m.Button);
                }
        }, {
                key: "onClick_Left"
                , value: function () {
                    ze.Instance.moveControl.carLeft = !0, ze.Instance.moveControl.carRight = !1;
                }
        }, {
                key: "onClick_LeftUP"
                , value: function () {
                    ze.Instance.moveControl.carLeft = !1;
                }
        }, {
                key: "onClick_Right"
                , value: function () {
                    ze.Instance.moveControl.carLeft = !1, ze.Instance.moveControl.carRight = !0;
                }
        }, {
                key: "onClick_RightUP"
                , value: function () {
                    ze.Instance.moveControl.carRight = !1;
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , It = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .cd = mt.GetCurrSkillData(ot.Catch)[0] * ("skin0" == mt.CurrSkin ? .9 : 1)
                    , t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.Catch_Obj_Button.on(Laya.Event.CLICK, this, this.onClickBtn);
                }
        }, {
                key: "onClickBtn"
                , value: function (t) {
                    console.log("catch"), 6 != Le.Level ? Le.IsPlaying && (nt.Instance.inTeach && nt.Instance.isRealRect(t.stageX, t.stageY) && nt.Instance.showNextTeach()
                        , ze.Instance && ze.Instance.checkCatchRay(this.cd)) : S.Instance.showLabelTips("当前关卡不支持该操作");
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onUpdate"
                , value: function () {
                    if (ze.Instance && ze.Instance.catchMoveCD) {
                        this.uiRoot.Catch_Obj_CDLabel.visible = !0, this.uiRoot.Catch_Obj_CDLabel.text = "".concat(ze.Instance.catchMoveCD.toFixed(1))
                            , this.uiRoot.Catch_Obj_CDSprite.visible = !0;
                        var t = ze.Instance.catchMoveCD / this.cd * 360;
                        this.uiRoot.Catch_Obj_CDSprite.graphics.clear(), this.uiRoot.Catch_Obj_CDSprite.graphics.drawPie(0, 0, 40, 0, t, "#ff0000");
                    } else this.uiRoot.Catch_Obj_CDLabel.visible = !1, this.uiRoot.Catch_Obj_CDSprite.visible = !1;
                }
        }]), a;
        }(Laya.Script)
        , _t = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.ChangeButton.on(Laya.Event.CLICK, this, this.onClick_Change);
                }
        }, {
                key: "onClick_Change"
                , value: function () {
                    we.Instance.showPopViewByLaya(j.GameChangeWeaponView);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , Ct = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .off = .5, t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.DownPlaneButton.on(Laya.Event.CLICK, this, this.onClick_Down);
                }
        }, {
                key: "onClick_Down"
                , value: function () {
                    ze.Instance.fallPlane();
                }
        }, {
                key: "startPlane"
                , value: function () {
                    this.uiRoot.NormalButton.visible = !1;
                }
        }, {
                key: "hidePlaneButton"
                , value: function () {
                    this.uiRoot.PlaneButtonBox.visible = !1;
                }
        }, {
                key: "showGameButton"
                , value: function () {
                    this.uiRoot.NormalButton.visible = !0, this.uiRoot.FlyButton.visible = !0, console.log("GameManager.Level", Le.Level)
                        , 1 == Le.Level ? (console.log("开启教学"), Ht.Instance.startTeach()) : $.emit(z.TeachEnd);
                }
        }, {
                key: "onUpdate"
                , value: function () {
                    this.uiRoot.PlaneButtonBox.visible && (this.uiRoot.DownPlaneHand.rotation >= 0 && (this.off = -.5)
                        , this.uiRoot.DownPlaneHand.rotation <= -10 && (this.off = .5), this.uiRoot.DownPlaneHand.rotation += this.off);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , wt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t;
                }
        }, {
                key: "updateError"
                , value: function () {
                    for (var t = ze.Instance.errorValue, e = Math.floor(t / 20), a = 1; a <= 4; a++) this.uiRoot["ErrorLevel_".concat(a)].visible = e >= a;
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , Lt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .uiRoot = null, t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.FasterRunBox.on(Laya.Event.CLICK, this, this.onClick_Faster)
                        , this.updateUI();
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "updateUI"
                , value: function () {
                    this.uiRoot.FasterRunBox_Lock.visible = mt.Lock_FasterRunSkill, this.uiRoot.FasterRunBox_VideoIcon.visible = this.uiRoot.FasterRunBox_Lock.visible
                        , this.uiRoot.FasterRunBox_VideoIcon.visible && (this.uiRoot.FasterRunBox_VideoIcon.visible = H.IsShowVideoIcon);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onClick_Faster"
                , value: function () {
                    var t = this;
                    Le.IsPlaying && (mt.Lock_FasterRunSkill ? H.ShowVideo(function () {
                        S.Instance.showLabelTips("技能解锁成功"), mt.Lock_FasterRunSkill = !1, t.onClick_Faster()
                            , t.updateUI();
                    }) : ze.Instance.moveControl.isNormalState && (B.Instance.playSound(m.Button), ze.Instance.moveControl.fastRun = !ze.Instance.moveControl.fastRun));
                }
        }, {
                key: "onUpdate"
                , value: function () {
                    Le.IsPlaying && this.uiRoot && (this.uiRoot.FasterRunBox_Yes.visible = ze.Instance.moveControl.fastRun);
                }
        }]), a;
        }(Laya.Script)
        , St = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.Sky_Button.on(Laya.Event.CLICK, this, this.onClick_Fly)
                        , this.uiRoot.PutSky_Button.on(Laya.Event.CLICK, this, this.onClick_FlyDown), this.uiRoot.Sky_Button.visible = !0
                        , this.uiRoot.PutSky_Button.visible = !1, this.updateIcon();
                }
        }, {
                key: "updateIcon"
                , value: function () {
                    this.uiRoot.Sky_Button_VideoIcon.visible = !1, 4 != Le.Level && mt.Lock_Fly && (this.uiRoot.Sky_Button_VideoIcon.visible = H.IsShowVideoIcon)
                        , 4 == Le.Level && (this.uiRoot.Sky_Button_VideoIcon.visible = !1);
                }
        }, {
                key: "onClick_Fly"
                , value: function (t) {
                    var e = this;
                    4 != Le.Level && mt.Lock_Fly ? H.ShowVideo(function () {
                        mt.Lock_Fly = !1, e.updateIcon(), e.onClick_Fly(t);
                    }) : 6 != Le.Level ? Le.IsPlaying && (ze.Instance.moveControl.isFlyState || ze.Instance.c4action || (t && nt.Instance.inTeach && nt.Instance.index - 1 == 2 && nt.Instance.showNextTeach()
                        , ze.Instance.moveControl.setFlyWeapon(!0))) : S.Instance.showLabelTips("当前关卡不可飞行");
                }
        }, {
                key: "onClick_FlyDown"
                , value: function (t) {
                    Le.IsPlaying && (ze.Instance.c4action || (t && nt.Instance.inTeach && nt.Instance.index - 1 == 3 && nt.Instance.showNextTeach()
                        , ze.Instance.moveControl.isFlyState && ze.Instance.moveControl.setFlyWeapon(!1)));
                }
        }, {
                key: "setUIVisible"
                , value: function (t) {
                    t ? (this.uiRoot.Sky_Button.visible = !1, this.uiRoot.PutSky_Button.visible = !0
                        , this.uiRoot.NormalButton.visible = !1) : (this.uiRoot.NormalButton.visible = !0
                        , this.uiRoot.Sky_Button.visible = !0, this.uiRoot.PutSky_Button.visible = !1);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , bt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.Jump_Button.on(Laya.Event.CLICK, this, this.onClick_Jump);
                }
        }, {
                key: "onClick_Jump"
                , value: function () {
                    Le.IsPlaying && ze.Instance.moveControl.jump();
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script);
    ! function (t) {
        t.Fist = "Fist", t.HandGun = "HandGun", t.Ak = "AK", t.RocketLauncher = "RocketLauncher"
            , t.JustinGatlin = "JustinGatlin";
    }(ut || (ut = {}));
    var Bt, Vt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .onTouch = !1, t._frame = 0
                    , t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.Normal_Atk_Button.on(Laya.Event.MOUSE_DOWN, this, this.onClick_AtkDown)
                        , this.uiRoot.Normal_Atk_Button.on(Laya.Event.MOUSE_UP, this, this.onClick_AtkUp)
                        , this.uiRoot.Normal_Atk_Button.on(Laya.Event.MOUSE_OUT, this, this.onClick_AtkUp);
                }
        }, {
                key: "onClick_AtkDown"
                , value: function (t) {
                    Le.IsPlaying && (ze.Instance.inC4Pos ? ze.Instance.startC4() : (this._frame = 0
                        , this.onTouch = !0, ze.Instance.normalAtk()));
                }
        }, {
                key: "onClick_AtkUp"
                , value: function (t) {
                    this.onTouch = !1, nt.Instance.inTeach && nt.Instance.isRealRect(t.stageX, t.stageY) && nt.Instance.showNextTeach();
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "updateWeaponUI"
                , value: function () {
                    this.uiRoot.Atk_Fist_Icon.visible = ze.Instance.myAtkType == ut.Fist, this.uiRoot.Atk_Weapon_Icon.visible = !this.uiRoot.Atk_Fist_Icon.visible
                        , this.uiRoot.BulletCountLabel.visible = this.uiRoot.Atk_Weapon_Icon.visible, this.uiRoot.Atk_Weapon_Icon.visible && (ze.Instance.myAtkType == ut.RocketLauncher ? this.uiRoot.BulletCountLabel.text = "".concat(mt.RocketBullet, "/1") : this.uiRoot.BulletCountLabel.text = "".concat(mt.NormalBullet, "/1"));
                }
        }, {
                key: "onUpdate"
                , value: function () {
                    if (this._frame++, this._frame % 4 == 0) {
                        if (this.updateWeaponUI(), !this.onTouch) return;
                        ze.Instance.normalAtk();
                    }
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , Rt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t;
                }
        }, {
                key: "hide"
                , value: function () {
                    Laya.Tween.clearAll(this.uiRoot.GameProgress), this.uiRoot.GameProgress.visible = !1;
                }
        }, {
                key: "show"
                , value: function (t) {
                    this.uiRoot.GameProgress.visible = !0, t = K.Clamp(t, 0, 1), this.uiRoot.GameProgressBar.width = 350 * t;
                }
        }, {
                key: "showByTime"
                , value: function (t) {
                    var e = this;
                    this.uiRoot.GameProgress.visible = !0, this.uiRoot.GameProgressBar.width = 0, Laya.Tween.to(this.uiRoot.GameProgressBar, {
                        width: 350
                    }, 1e3 * t, null, Laya.Handler.create(this, function () {
                        e.hide();
                    }));
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , xt = [{
            id: 1e3
            , aim: 20
            , title: "罪犯克星"
            , info: "击败xxx个敌人"
            , reward: 500
    }, {
            id: 1001
            , aim: 20
            , title: "破坏"
            , info: "破坏xxx辆汽车"
            , reward: 250
    }, {
            id: 1002
            , aim: 1
            , title: "堕入邪恶"
            , info: "击败xxx个普通人"
            , reward: 100
    }, {
            id: 1003
            , aim: 20
            , title: "邪恶化身"
            , info: "击败xxx个普通人"
            , reward: 500
    }, {
            id: 1004
            , aim: 2
            , title: "袭警"
            , info: "偷袭xxx个警察"
            , reward: 200
    }, {
            id: 1005
            , aim: 30
            , title: "五星罪犯"
            , info: "偷袭xxx个警察"
            , reward: 1e3
    }]
        , Pt = function () {
            function t() {
                (0, s.default)(this, t);
            }
            return (0, r.default)(t, null, [{
                key: "InitTaskDataManager"
                , value: function () {
                    for (var t = !1, e = 0; e < xt.length; e++) this.GetTask(xt[e].id) || (t = !0, rt.TaskInfo.push({
                        id: xt[e].id
                        , progress: 0
                        , aim: xt[e].aim
                        , isFinish: 0
                    }));
                    t && lt.SetKeyValue(it.TaskInfo);
                }
        }, {
                key: "IsFinishTask"
                , value: function (t) {
                    for (var e = 0; e < rt.TaskInfo.length; e++)
                        if (rt.TaskInfo[e].id && rt.TaskInfo[e].id == t) return 1 == rt.TaskInfo[e].isFinish;
                    return !1;
                }
        }, {
                key: "GetTask"
                , value: function (t) {
                    for (var e = null, a = 0; a < rt.TaskInfo.length; a++)
                        if (rt.TaskInfo[a].id && rt.TaskInfo[a].id == t) {
                            e = rt.TaskInfo[a];
                            break;
                        }
                    return e;
                }
        }, {
                key: "GetTaskJsonData"
                , value: function (t) {
                    for (var e = null, a = 0; a < xt.length; a++)
                        if (xt[a].id && xt[a].id == t) {
                            e = xt[a];
                            break;
                        }
                    return e;
                }
        }, {
                key: "AddProgress"
                , value: function (t, e) {
                    var a = this.GetTask(t);
                    a && (a.progress += e, lt.SetKeyValue(it.TaskInfo));
                }
        }, {
                key: "GetTaskList"
                , value: function () {
                    var t = rt.TaskInfo;
                    return t.sort(function (t, e) {
                        var a = t.progress / t.aim
                            , n = e.progress / e.aim;
                        return t.isFinish == e.isFinish && 0 == t.isFinish ? n - a : t.isFinish - e.isFinish;
                    });
                }
        }, {
                key: "FinishTask"
                , value: function (t) {
                    var e = this.GetTask(t);
                    e && (e.isFinish = 1, lt.SetKeyValue(it.TaskInfo));
                }
        }]), t;
        }();
    ! function (t) {
        t[t.Move = 0] = "Move", t[t.Stop = 1] = "Stop";
    }(Bt || (Bt = {}));
    var At = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .hp = 100, t.roadTag = -1
                    , t.stopIndex = -1, t.roadPos = [], t.runIndex = 0, t.waitTime = 0, t.addSpeed = 5
                    , t.subSpeed = 10, t.maxSpeed = 10, t._currSpeed = 1, t.state = Bt.Move, t.qianLun = null
                    , t.houLun = null, t.aimUI = null, t.carSkinIndex = 0, t.fx_littleHp = !1, t;
            }
            return (0, r.default)(a, [{
                key: "creatorAimUI"
                , value: function () {
                    var t = this;
                    1 == Le.Level && (this.aimUI && !this.aimUI.destroyed || Ht.Instance && J.getRes(W.aimDisUI, !1, function (e) {
                        var a = new Laya.Prefab();
                        a.json = e, t.aimUI = a.create(), Ht.Instance.root.AimPosBox.addChild(t.aimUI);
                    }));
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this.fx_littleHp = !1;
                    for (var t = F.GetComponentsInChildren(Laya.PhysicsCollider, this.root), e = 0; e < t.length; e++) {
                        var a = t[e];
                        a.canCollideWith = N.Human | N.Enemy | N.Police | N.People, a.collisionGroup = N.Car;
                    }
                    for (var n = 0; n < this.root.numChildren; n++) {
                        var i = this.root.getChildAt(n)
                            .name; -
                        1 != i.indexOf("HouLun") && (this.houLun = this.root.getChildAt(n)), -1 != i.indexOf("QianLun") && (this.qianLun = this.root.getChildAt(n));
                    }
                }
        }, {
                key: "initRoad"
                , value: function (t, e, a) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                    this.carSkinIndex = a, t && null != e && (this.roadTag = e, this.roadPos = t, this.state = Bt.Move)
                        , this.stopIndex = n, this.onInit();
                }
        }, {
                key: "onInit"
                , value: function () {}
        }, {
                key: "subHp"
                , value: function (t) {
                    this.hp <= 0 || (this.hp -= t, this.hp = K.Clamp(this.hp, 0, 100), this.hp <= 60 && this.playCarFx_littleHp()
                        , 0 == this.hp && this.death());
                }
        }, {
                key: "playCarFx_littleHp"
                , value: function () {
                    if (!this.fx_littleHp) {
                        this.fx_littleHp = !0;
                        var t = Ne.FxParent.getChildByName("FX_cheshun2");
                        t && (t = t.clone(), this.root.addChild(t), t.active = !0, t.transform.localPosition = new Laya.Vector3(0, 0, 0));
                    }
                }
        }, {
                key: "playCarHurtFx"
                , value: function (t) {
                    if (t && Ne.FxParent) {
                        var e = Ne.FxParent.getChildByName("FX_che_shouji");
                        e && (e = e.clone(), Ne.World.addChild(e), e.active = !0, e.transform.position = t
                            , Laya.timer.once(300, this, function () {
                                e.destroy(!0);
                            }));
                    }
                }
        }, {
                key: "destroyByDriver"
                , value: function () {
                    this.aimUI && !this.aimUI.destroyed && this.aimUI.destroy(!0), this.root.destroy(!0);
                }
        }, {
                key: "death"
                , value: function () {
                    var t = this;
                    this.aimUI && !this.aimUI.destroyed && this.aimUI.destroy(!0), this.setState(Bt.Stop)
                        , de.Instance.level_control.creatMoney(this.transform.position, K.Random(40, 60))
                        , B.Instance.playSound(m.car_boom);
                    for (var e = F.GetComponentsInChildren(Laya.PhysicsCollider, this.root), a = 0; a < e.length; a++) {
                        var n = e[a];
                        n.canCollideWith = N.Build, n.collisionGroup = N.Car;
                    }
                    var i = Ne.FxParent.getChildByName("FX_cheshun3");
                    i && (i = i.clone(), Ne.World.addChild(i), i.active = !0, i.transform.position = this.root.transform.position);
                    var o = Ne.FxParent.getChildByName("FX_baozha");
                    o && (o = i.clone(), Ne.World.addChild(o), o.active = !0, o.transform.position = this.root.transform.position)
                        , F.PlayFadeOutAnim(this.root, Laya.Handler.create(this, function () {
                            -1 != t.stopIndex && (Ve.Instance.deleteCar(t), Ve.Instance.normalStopCarDeath(t.stopIndex))
                                , o.destroy(!0), i.destroy(!0), t.root.destroy(!0), $.emit(z.CarDestroy, t.root);
                        }), 2), Pt.AddProgress(1001, 1);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    (0, o.default)((0, u.default)(a.prototype), "update", this)
                    .call(this, t), this.updateAimUI(t);
                }
        }, {
                key: "setState"
                , value: function (t) {
                    this.state = t, t == Bt.Stop && this.getDisByPlayer() <= 5 && B.Instance.playSound(m.car_stop);
                }
        }, {
                key: "getDisByPlayer"
                , value: function () {
                    return Laya.Vector3.distance(ze.Instance.transform.position, this.root.transform.position);
                }
        }, {
                key: "updateAimUI"
                , value: function (t) {
                    if (this.aimUI && !this.aimUI.destroyed) {
                        if (this._frame % 2 != 0) return;
                        var e = new Laya.Vector3();
                        Laya.Vector3.subtract(this.transform.position, ze.Instance.transform.position, e);
                        var a = F.GetForward(ze.Instance.cameraControl.cameraNode);
                        if (Laya.Vector3.scale(a, -1, a), F.toAngle(a, e) >= 90) return void(this.aimUI.visible = !1);
                        this.aimUI.visible = !0;
                        var n = F.WorldToScreen2(ze.Instance.cameraControl.camera, this.transform.position);
                        this.aimUI.pos(n.x, n.y), this.aimUI.getChildAt(0)
                            .text = "".concat(Math.floor(Laya.Vector3.scalarLength(e)), "m");
                    }
                }
        }, {
                key: "currSpeed"
                , get: function () {
                    return this._currSpeed;
                }
                , set: function (t) {
                    this._currSpeed = K.Clamp(t, 0, this.maxSpeed);
                }
        }]), a;
        }(Y)
        , Tt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.StartCarButton.on(Laya.Event.CLICK, this, this.onClick_StartCar);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onClick_StartCar"
                , value: function () {
                    if (Le.IsPlaying) {
                        var t = Ve.Instance.mixNearCar;
                        if (t) return t.setState(Bt.Stop), t.waitTime = 5, void ze.Instance.cameraControl.playGetCarCameraAnim(t.root, function () {
                            Ve.Instance.getCar(t);
                        });
                        S.Instance.showLabelTips("附近没有可用车辆");
                    }
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , Ut = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.TaskTipsBox.visible = !1;
                }
        }, {
                key: "showTaskTips"
                , value: function (t) {
                    this.uiRoot.TaskTipsBox.visible = !0, this.uiRoot.TaskTipsBox_Label.text = "".concat(t);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , Et = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    ._frame = 0, t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t;
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onUpdate"
                , value: function () {
                    if (this._frame++, this._frame % 10 == 0) {
                        if (this.uiRoot.VestInfoBox.visible = mt.Vest > 0, !this.uiRoot.VestInfoBox.visible) return;
                        this.uiRoot.VestInfoBoxCount_Label.text = "防护衣(".concat(mt.Vest, ")"), this.uiRoot.VestInfoBoxProgress_Label.text = "".concat((100 * ze.Instance.getVestHpPro)
                                .toFixed(1), "%")
                            , this.uiRoot.VestInfoBoxProgress.width = 202 * ze.Instance.getVestHpPro;
                    }
                }
        }]), a;
        }(Laya.Script)
        , Dt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    ._frame = 0, t.origin = new Laya.Vector2(80, 80)
                    , t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {}
        }, {
                key: "init"
                , value: function (t) {
                    this.uiRoot = t;
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onUpdate"
                , value: function () {
                    if (this.uiRoot && (this._frame++, this._frame % 3 == 0 && ze.Instance)) {
                        var t = ze.Instance.transform.position.x
                            , e = ze.Instance.transform.position.z;
                        t = K.Clamp(t, -450 * this.uiRoot.MiniMap.scaleX, 450 * this.uiRoot.MiniMap.scaleX)
                            , e = K.Clamp(e, -225 * this.uiRoot.MiniMap.scaleY, 225 * this.uiRoot.MiniMap.scaleY)
                            , t = this.origin.x + t, e = this.origin.y + e, this.uiRoot.MiniMap.pos(t, e);
                        var a = ze.Instance.cameraControl.cameraNode.transform.localRotationEulerY;
                        this.uiRoot.MiniMapMy.rotation = 180 - a;
                    }
                }
        }]), a;
        }(Laya.Script)
        , Gt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                }
        }, {
                key: "init"
                , value: function (t) {
                    this.uiRoot = t;
                }
        }, {
                key: "updateHp"
                , value: function () {
                    var t = ze.Instance.hp / ze.Instance.hpMax;
                    t = K.Clamp(t, 0, 1), this.uiRoot.HPLevelBar.width = 232 * t;
                }
        }, {
                key: "updateBody"
                , value: function () {
                    var t = ze.Instance.body / ze.Instance.bodyMax;
                    t = K.Clamp(t, 0, 1), this.uiRoot.BodyBar.width = 232 * t;
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , Mt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .index = 0, t.times = 0, t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this.uiRoot = t, this.uiRoot.RedTipsUI.visible = !1;
                }
        }, {
                key: "showRed"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    this.index = 0, this.times = t, this.stopAction(), this.redTipsUIAction();
                }
        }, {
                key: "redTipsUIAction"
                , value: function () {
                    var t = this;
                    this.uiRoot.RedTipsUI.visible = !0, this.uiRoot.RedTipsUI.alpha = .5, Laya.Tween.to(this.uiRoot.RedTipsUI, {
                        alpha: 1
                    }, 250, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(t.uiRoot.RedTipsUI, {
                            alpha: .5
                        }, 250, null, Laya.Handler.create(t, function () {
                            ++t.index <= t.times ? t.stopAction() : t.redTipsUIAction();
                        }));
                    }));
                }
        }, {
                key: "stopAction"
                , value: function () {
                    this.uiRoot.RedTipsUI.visible = !1, this.uiRoot.RedTipsUI.alpha = .5, Laya.Tween.clearAll(this.uiRoot.RedTipsUI);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , Ht = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .uiRoot = null, t.aimUI = null
                    , t.catchButton = null, t.atkButton = null, t.kickButton = null, t.jumpButton = null
                    , t.flyUI = null, t.downUI = null, t.progressBarTips = null, t.playerInfo = null
                    , t.atkHpTips = null, t.redTipsUI = null, t.miniMapUI = null, t.fasterRunButton = null
                    , t.taskTipsUI = null, t.carUI = null, t.errorUI = null, t.startCarUI = null, t.changeUI = null
                    , t.vestUI = null, t.customTime = 0, t._atkTipsCd = !1, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    var t = this;
                    this.uiRoot = this.owner, a.Instance = this, b.Instance.adView(this.uiRoot), this.catchButton = this.uiRoot.addComponent(It)
                        , this.catchButton.init(this.uiRoot), this.atkButton = this.uiRoot.addComponent(Vt)
                        , this.atkButton.init(this.uiRoot), this.jumpButton = this.uiRoot.addComponent(bt)
                        , this.jumpButton.init(this.uiRoot), this.flyUI = this.uiRoot.addComponent(St), this.flyUI.init(this.uiRoot)
                        , this.downUI = this.uiRoot.addComponent(Ct), this.downUI.init(this.uiRoot), this.progressBarTips = this.uiRoot.addComponent(Rt)
                        , this.progressBarTips.init(this.uiRoot), this.playerInfo = this.uiRoot.addComponent(Gt)
                        , this.playerInfo.init(this.uiRoot), this.atkHpTips = this.uiRoot.addComponent(kt)
                        , this.atkHpTips.init(this.uiRoot), this.redTipsUI = this.uiRoot.addComponent(Mt)
                        , this.redTipsUI.init(this.uiRoot), this.miniMapUI = this.uiRoot.addComponent(Dt)
                        , this.miniMapUI.init(this.uiRoot), this.aimUI = this.uiRoot.addComponent(vt), this.aimUI.init(this.uiRoot)
                        , this.fasterRunButton = this.uiRoot.addComponent(Lt), this.fasterRunButton.init(this.uiRoot)
                        , this.carUI = this.uiRoot.addComponent(gt), this.carUI.init(this.uiRoot), this.taskTipsUI = this.uiRoot.addComponent(Ut)
                        , this.taskTipsUI.init(this.uiRoot), this.startCarUI = this.uiRoot.addComponent(Tt)
                        , this.startCarUI.init(this.uiRoot), this.changeUI = this.uiRoot.addComponent(_t)
                        , this.changeUI.init(this.uiRoot), this.vestUI = this.uiRoot.addComponent(Et), this.vestUI.init(this.uiRoot)
                        , this.errorUI = this.uiRoot.addComponent(wt), this.errorUI.init(this.uiRoot), this.uiRoot.onOpened = function () {
                            t.addMoveUIAction(), t.addEyeUIAction(), t.updateHeadIcon();
                        }, Laya.timer.loop(1e3, this, this.customTimer);
                }
        }, {
                key: "customTimer"
                , value: function () {
                    if (Le.IsPlaying && ++this.customTime % H.UMConfig.Value.GameViewCustom == 0) {
                        console.log(H.UMConfig.Value.GameViewCustom, "秒展示一次原生");
                        var t = H.GetBannerStatus();
                        H.HideBanner(), H.ShowWxCustomPage(function () {
                            t && H.ShowBanner();
                        });
                    }
                }
        }, {
                key: "onDestroy"
                , value: function () {
                    a.Instance = null;
                }
        }, {
                key: "updateHeadIcon"
                , value: function () {
                    switch (mt.CurrSkin) {
                    case "skin0":
                        this.uiRoot.PlayerHeadIcon.skin = "ObjIcon/小丑2.png";
                        break;

                    case "skin1":
                        this.uiRoot.PlayerHeadIcon.skin = "ObjIcon/毒液2.png";
                        break;

                    case "skin2":
                        this.uiRoot.PlayerHeadIcon.skin = "ObjIcon/杰克2.png";
                    }
                }
        }, {
                key: "onEnable"
                , value: function () {
                    200 != Le.Level ? this.startGame() : (this.uiRoot.NormalButton.visible = !1, this.uiRoot.FlyButton.visible = !1
                        , this.uiRoot.PlaneButtonBox.visible = !1);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "addMoveUIAction"
                , value: function () {
                    if (ze.Instance) {
                        var t = this.uiRoot.TouchRocker.getComponent(tt);
                        ze.Instance.moveControl.rocker = t;
                    }
                }
        }, {
                key: "startGame"
                , value: function () {
                    this.uiRoot.NormalButton.visible = !1, this.uiRoot.FlyButton.visible = !1, this.uiRoot.PlaneButtonBox.visible = !0;
                }
        }, {
                key: "startTeach"
                , value: function () {
                    nt.Instance.list.length = 0, nt.Instance.index = 0, console.log("新手引导"), nt.Instance.addTeach(this.uiRoot.TouchRocker, 120, this.uiRoot.Teach_0, !1)
                        , nt.Instance.addTeach(this.uiRoot.EyeBox, 120, this.uiRoot.Teach_1, !1), nt.Instance.addTeach(this.uiRoot.Normal_Atk_Button, 60, this.uiRoot.Teach_4, !0)
                        , nt.Instance.addTeach(this.uiRoot.Catch_Obj_Button, 40, this.uiRoot.Teach_5, !0)
                        , nt.Instance.showNextTeach();
                    var t = this.uiRoot.TouchRocker.getComponent(tt);
                    t && (t.onClickEnd = function () {
                        console.log(nt.Instance.index), nt.Instance.inTeach && nt.Instance.index - 1 == 0 && nt.Instance.showNextTeach();
                    });
                    var e = this.uiRoot.EyeBox.getComponent(Z);
                    e && (e.onClickEnd = function () {
                        nt.Instance.inTeach && nt.Instance.index - 1 == 1 && nt.Instance.showNextTeach();
                    }), nt.Instance.teachListEndCall = function () {
                        $.emit(z.TeachEnd);
                    };
                }
        }, {
                key: "addEyeUIAction"
                , value: function () {
                    if (ze.Instance) {
                        var t = this.uiRoot.EyeBox.getComponent(Z);
                        t && (ze.Instance.cameraControl.eyeRocker = t, t.MoveHorCall = function (t) {
                            ze.Instance.cameraControl.moveHor(t);
                        }, t.MoveVerCall = function (t) {
                            ze.Instance.cameraControl.moveVer(t);
                        });
                    }
                }
        }, {
                key: "showAtkTips"
                , value: function (t) {
                    var e = this;
                    this._atkTipsCd || J.getRes(W.AtkFont, !1, function (a) {
                        if (a) {
                            e._atkTipsCd = !0, Laya.timer.once(200, e, function () {
                                e._atkTipsCd = !1;
                            });
                            var n = K.Random(0, 3);
                            t = Math.ceil(t), t = K.Clamp(K.Random(0, 100) % 2 == 1 ? t + n : t - n, 0, 9999);
                            var i = new Laya.Prefab();
                            i.json = a;
                            var o = i.create();
                            o.value = "-".concat(t), o.visible = !0, e.uiRoot.addChild(o), o.pos(e.uiRoot.width / 2, e.uiRoot.height / 2);
                            var s = K.Random(50, 150)
                                , r = o.y - K.Random(30, 70)
                                , l = K.Random(150, 250) / 100;
                            s = K.Random(0, 100) % 2 == 1 ? o.x + s : o.x - s, o.scale(l, l), Laya.Tween.to(o, {
                                x: s
                                , y: r
                                , scaleX: .5
                                , scaleY: .5
                            }, 500, null, Laya.Handler.create(e, function () {
                                o.destroy(!0);
                            }));
                        }
                    });
                }
        }, {
                key: "showCarUI"
                , value: function () {
                    Le.IsPlaying && (this.uiRoot.NormalButton.visible = !1, this.uiRoot.FlyButton.visible = !1
                        , this.uiRoot.CarUIBox.visible = !0, this.uiRoot.TouchRocker.visible = !1);
                }
        }, {
                key: "hideCarUI"
                , value: function () {
                    Le.IsPlaying && (this.uiRoot.NormalButton.visible = !0, this.uiRoot.FlyButton.visible = !0
                        , this.uiRoot.CarUIBox.visible = !1, this.uiRoot.TouchRocker.visible = !0);
                }
        }, {
                key: "root"
                , get: function () {
                    return this.uiRoot;
                }
        }]), a;
        }(Laya.Script);
    Ht.Instance = null;
    var Nt = [{
            info: ""
            , reward: 0
    }, {
            info: "抢夺一辆汽车送快递到指定地点。"
            , reward: 200
    }, {
            info: "做一回英雄，击败混混，拯救小孩子。"
            , reward: 200
    }, {
            info: "击败三个其他帮派的敌人"
            , reward: 200
    }, {
            info: "体验飞行的感觉"
            , reward: 200
    }, {
            info: "安装C4炸弹，炸毁其他帮派的据点"
            , reward: 200
    }, {
            info: "驾驶车辆到达指点地点"
            , reward: 200
    }, {
            info: "突袭黑帮巢穴"
            , reward: 200
    }]
        , Ft = function () {
            function t() {
                (0, s.default)(this, t);
            }
            return (0, r.default)(t, null, [{
                key: "GetLevelHumanInfo"
                , value: function () {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = 0; e < this.data.length; e++)
                        if (this.data[e].level == t) return this.data[e].mapItems;
                    return [];
                }
        }]), t;
        }();
    Ft.data = [{
        level: 1
        , mapItems: []
    }, {
        level: 2
        , mapItems: [{
            key: "enemy"
            , pos: [-6.86, .05, 51.93]
        }, {
            key: "enemy"
            , pos: [-5.13, .05, 45.83]
        }, {
            key: "enemy"
            , pos: [-10.77, .05, 51.71]
        }]
    }, {
        level: 3
        , mapItems: [{
            key: "enemy"
            , pos: [73.56, 0, 7.24]
        }, {
            key: "enemy"
            , pos: [79.64, 0, 13.72]
        }, {
            key: "enemy"
            , pos: [68.3, 0, 21.87]
        }]
    }, {
        level: 4
        , mapItems: []
    }, {
        level: 5
        , mapItems: []
    }, {
        level: 6
        , mapItems: []
    }, {
        level: 7
        , mapItems: []
    }, {
        level: 99
        , mapItems: [{
            key: "police"
            , pos: [-32.83, .05, -2.56]
        }, {
            key: "enemy"
            , pos: [-34.58, .05, -10.76]
        }, {
            key: "enemy"
            , pos: [53.49, .05, 82.61]
        }, {
            key: "enemy"
            , pos: [83.15, .05, 42.9]
        }, {
            key: "enemy"
            , pos: [98.03, .05, 33.39]
        }, {
            key: "people0"
            , pos: [91.15, .05, 51.1]
        }, {
            key: "people0"
            , pos: [94.91, .05, 37.7]
        }, {
            key: "people0"
            , pos: [89.57, .05, 16.86]
        }, {
            key: "enemy"
            , pos: [98.2, .05, 9.72]
        }, {
            key: "enemy"
            , pos: [68.57, .05, 7.54]
        }, {
            key: "enemy"
            , pos: [50.72, .05, 36.12]
        }, {
            key: "enemy"
            , pos: [21.93, .05, 71.75]
        }, {
            key: "enemy"
            , pos: [-12.43, .05, 45.03]
        }, {
            key: "enemy"
            , pos: [-28.83, .05, 78.77]
        }, {
            key: "enemy"
            , pos: [-44.29, .05, 93.41]
        }, {
            key: "enemy"
            , pos: [-51.62, .05, 87.83]
        }, {
            key: "people0"
            , pos: [-74.49, .05, 87.32]
        }, {
            key: "people0"
            , pos: [-20.61, 0, -18.18]
        }, {
            key: "people1"
            , pos: [80.13, .05, 83.89]
        }, {
            key: "people0"
            , pos: [74.45, .05, 19.59]
        }, {
            key: "people1"
            , pos: [29.02, .05, 41.57]
        }, {
            key: "people1"
            , pos: [-37.75, .05, 38.98]
        }, {
            key: "people0"
            , pos: [74.6, 0, -23.1]
        }, {
            key: "people0"
            , pos: [-9.2, 0, -41.66]
        }, {
            key: "police"
            , pos: [-104.26, 0, 25.34]
        }, {
            key: "police"
            , pos: [-91.86, 0, 18.31]
        }, {
            key: "police"
            , pos: [-95.9, 0, 33.2]
        }, {
            key: "police"
            , pos: [-105.27, 0, 74]
        }, {
            key: "police"
            , pos: [-67.94, 0, 101.4]
        }]
    }];
    var Ot, Wt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .f_ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3())
                    , t.r_ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3()), t.l_ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3())
                    , t.f_ray_res = new Laya.HitResult(), t.r_ray_res = new Laya.HitResult(), t.l_ray_res = new Laya.HitResult()
                    , t.isEnable = !1, t.target_pos = null, t.speed = new Laya.Vector3(), t.speed_scale = 2
                    , t.forward_length = 5, t.side_length = 3, t._angle = 30, t.myGroup = 2, t.obsGroup = 8
                    , t._scene = null, t.mat_r_4x4 = null, t.mat_l_4x4 = null, t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    this._scene = t, this.mat_r_4x4 = new Laya.Matrix4x4(), this.mat_l_4x4 = new Laya.Matrix4x4()
                        , this.setCheckAngle(30);
                }
        }, {
                key: "setCheckAngle"
                , value: function (t) {
                    this.angle = t;
                }
        }, {
                key: "setForwardLength"
                , value: function (t) {
                    this.forward_length = t;
                }
        }, {
                key: "setSideLength"
                , value: function (t) {
                    this.side_length = t;
                }
        }, {
                key: "setTargetPos"
                , value: function (t) {
                    this.target_pos = t;
                }
        }, {
                key: "setObsGroup"
                , value: function (t) {
                    this.obsGroup = t;
                }
        }, {
                key: "update"
                , value: function (t) {
                    if (this.isEnable && this.target_pos && this._scene) {
                        var e = !1
                            , a = null;
                        if (this._frame % 3 == 0) {
                            var n = this.transform.position.clone();
                            n.y = .5;
                            var i = F.GetForward(this.root);
                            Laya.Vector3.scale(i, 1, i);
                            var o = new Laya.Vector4(i.x, i.y, i.z, 0)
                                , s = new Laya.Vector4(i.x, i.y, i.z, 0);
                            if (Laya.Vector4.transformByM4x4(o, this.mat_r_4x4, o), Laya.Vector4.transformByM4x4(s, this.mat_l_4x4, s)
                                , this.f_ray.origin = n, this.r_ray.origin = n, this.l_ray.origin = n, this.f_ray.direction = i
                                , this.r_ray.direction = new Laya.Vector3(o.x, o.y, o.z), this.l_ray.direction = new Laya.Vector3(s.x, s.y, s.z)
                                , this._scene.physicsSimulation.rayCast(this.f_ray, this.f_ray_res, this.forward_length, this.myGroup, this.obsGroup)
                                , this._scene.physicsSimulation.rayCast(this.r_ray, this.r_ray_res, this.side_length, this.myGroup, this.obsGroup)
                                , this._scene.physicsSimulation.rayCast(this.l_ray, this.l_ray_res, this.side_length, this.myGroup, this.obsGroup)
                                , a = new Laya.Vector3(), this.f_ray_res.succeeded) {
                                e = !0;
                                var r = this.forward_length - Laya.Vector3.distance(n, this.f_ray_res.point);
                                Laya.Vector3.scale(this.f_ray_res.normal, r, a);
                            }
                            if (this.l_ray_res.succeeded) {
                                e = !0;
                                var l = this.side_length - Laya.Vector3.distance(n, this.l_ray_res.point)
                                    , u = new Laya.Vector3(0, 0, 0);
                                Laya.Vector3.scale(this.l_ray_res.normal, l, u), Laya.Vector3.add(a, u, a);
                            }
                            if (this.r_ray_res.succeeded) {
                                e = !0;
                                var c = this.side_length - Laya.Vector3.distance(n, this.r_ray_res.point)
                                    , h = new Laya.Vector3(0, 0, 0);
                                Laya.Vector3.scale(this.l_ray_res.normal, c, h), Laya.Vector3.add(a, h, a);
                            }
                        }
                        if (e) a.y = 0, this._frame = 0, Laya.Vector3.scale(a, .1, a), Laya.Vector3.add(this.speed, a, this.speed);
                        else if (this._frame >= K.Random(10, 15)) {
                            var d = Laya.Vector3.scalarLength(this.speed);
                            d = 0 == d ? this.speed_scale : d;
                            var f = new Laya.Vector3();
                            Laya.Vector3.subtract(this.target_pos, this.transform.position, f), Laya.Vector3.normalize(f, f)
                                , Laya.Vector3.scale(f, d * t, f), Laya.Vector3.add(f, this.speed, this.speed), Laya.Vector3.normalize(this.speed, this.speed)
                                , Laya.Vector3.scale(this.speed, this.speed_scale, this.speed);
                        }
                        var y = new Laya.Vector3();
                        Laya.Vector3.scale(this.speed, t, y), Laya.Vector3.add(y, this.transform.position, y)
                            , this.transform.lookAt(new Laya.Vector3(y.x, this.transform.position.y, y.z), new Laya.Vector3(0, 1, 0), !1)
                            , this.transform.position = y;
                    }
                }
        }, {
                key: "currSpeed"
                , get: function () {
                    return this.speed;
                }
                , set: function (t) {
                    this.speed = t;
                }
        }, {
                key: "angle"
                , get: function () {
                    return this._angle;
                }
                , set: function (t) {
                    this._angle = t * Math.PI / 180, Laya.Matrix4x4.createRotationY(this._angle, this.mat_r_4x4)
                        , Laya.Matrix4x4.createRotationY(-this._angle, this.mat_l_4x4);
                }
        }]), a;
        }(Y)
        , Xt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .hp = 0, t.hpMax = 0
                    , t.mp = 0, t.mpMax = 0, t.body = 0, t.bodyMax = 100, t.humanName = "", t.isPlayer = !1
                    , t;
            }
            return (0, r.default)(a, [{
                key: "subHp"
                , value: function (t, e) {}
        }, {
                key: "onSubHp"
                , value: function (t, e) {
                    this.playBloodFx();
                }
        }, {
                key: "playBloodFx"
                , value: function () {
                    if (Ne.FxParent) {
                        var t = Ne.FxParent.getChildByName("FX_xue");
                        t && (t = t.clone(), this.root.addChild(t), t.transform.localPosition = new Laya.Vector3(0, 0, 0)
                            , t.active = !0, Laya.timer.once(500, this, function () {
                                t.destroy(!0);
                            }));
                    }
                }
        }, {
                key: "addHp"
                , value: function (t) {
                    this.hp += t, this.hp = K.Clamp(this.hp, 0, this.hpMax), this.onAddHp(t);
                }
        }, {
                key: "onAddHp"
                , value: function (t) {}
        }, {
                key: "addMp"
                , value: function (t) {
                    this.mp >= 100 || (this.mp += t, this.mp = K.Clamp(this.mp, 0, 100), this.onAddMp(t));
                }
        }, {
                key: "subMp"
                , value: function (t) {
                    this.mp -= t, this.mp = K.Clamp(this.mp, 0, 100), this.onSubMp(t);
                }
        }, {
                key: "onAddMp"
                , value: function (t) {}
        }, {
                key: "onSubMp"
                , value: function (t) {
                    this.mp / this.mpMax <= .3 && this._frame % 30 == 0 && B.Instance.playSound(m.noMp);
                }
        }, {
                key: "addBody"
                , value: function (t) {
                    this.body >= 100 || (this.body += t, this.body = K.Clamp(this.body, 0, this.bodyMax)
                        , this.onAddBody());
                }
        }, {
                key: "subBody"
                , value: function (t) {
                    this.body -= t, this.body = K.Clamp(this.body, 0, this.bodyMax), this.onSubBody();
                }
        }, {
                key: "onAddBody"
                , value: function () {}
        }, {
                key: "onSubBody"
                , value: function () {}
        }, {
                key: "onDeath"
                , value: function () {}
        }]), a;
        }(Y);
    ! function (t) {
        t[t.Idle = 0] = "Idle", t[t.Atk = 1] = "Atk", t[t.Chase = 2] = "Chase";
    }(Ot || (Ot = {}));
    var jt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .anim = null, t.bodyMesh = null
                    , t.state = Ot.Idle, t.wall_avo = null, t.idleTime = 0, t.idlePos = [], t.startPos = null
                    , t.targetPos = null, t.pos_rad = 4, t.lastPos = null, t.wuqi = null, t.gun = null
                    , t.isHandGun = !1, t.atkDis = 1, t.target = null, t.inWeb = !1, t.atkValue = 5, t.carDeath = !1
                    , t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.root || ((0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                        .call(this)
                        , this.wall_avo = this.root.addComponent(Wt), this.wall_avo.init(Ne.World), this.wall_avo.myGroup = N.Human
                        , this.wall_avo.setObsGroup(N.Border | N.Build | N.Car), this.state = Ot.Idle, this.anim = F.GetComponentInChildren(Laya.Animator, this.root)
                        , this.wuqi = this.getChildrenByName("wuqi"), this.setGun(null), this._getRandPos()
                        , this.init(), this.anim.owner.transform.localRotationEulerY = 180, this.bodyMesh = this.anim.owner);
                }
        }, {
                key: "setGun"
                , value: function (t) {
                    if (this.wuqi) {
                        this.wuqi.active = !1, 0 == t && (this.isHandGun = !0);
                        for (var e = 0; e < this.wuqi.numChildren; e++) {
                            var a = this.wuqi.getChildAt(e);
                            a.active = e == t, a.active && (this.wuqi.active = !0, this.gun = a);
                        }
                    }
                }
        }, {
                key: "init"
                , value: function () {
                    this.hp = this.hpMax = 100;
                    for (var t = F.GetComponentsInChildren(Laya.PhysicsCollider, this.root), e = 0; e < t.length; e++) t[e].enabled = !0;
                    this.transform.position = this.startPos, this.state = Ot.Idle, this.inWeb = !1
                        , this.target = null, this._getRandPos(), this.onInit(), this.carDeath = !1;
                }
        }, {
                key: "onInit"
                , value: function () {}
        }, {
                key: "subHp"
                , value: function (t, e) {
                    this.hp <= 0 || (this.hp -= t, this.hp = K.Clamp(this.hp, 0, this.hpMax), this.onSubHp(t, e)
                        , 0 == this.hp && this.onDeath());
                }
        }, {
                key: "onSubHp"
                , value: function (t, e) {
                    (0, o.default)((0, u.default)(a.prototype), "onSubHp", this)
                    .call(this, t, e), this.getDisByPlayer() <= 2 && B.Instance.playSound(m["hurt".concat(K.Random(1, 4))]);
                }
        }, {
                key: "onDeath"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onDeath", this)
                    .call(this);
                }
        }, {
                key: "_getRandPos"
                , value: function () {
                    this.idlePos.length = 0, this.startPos || (this.startPos = this.transform.position.clone());
                    for (var t = 0; t < 360;) {
                        var e = new Laya.Vector3(Math.cos(F.Deg2Rad * t) * this.pos_rad, 0, Math.sin(F.Deg2Rad * t) * this.pos_rad);
                        Laya.Vector3.add(e, this.startPos, e), this.idlePos.push(e), t += 30;
                    }
                }
        }, {
                key: "stateAction"
                , value: function (t) {
                    switch (this.state) {
                    case Ot.Idle:
                        this.idleTime -= t, this.onIdleing(t);
                        break;

                    case Ot.Chase:
                        this.onChaseing(t);
                        break;

                    case Ot.Atk:
                        this.onAtking(t);
                    }
                }
        }, {
                key: "onIdleing"
                , value: function (t) {}
        }, {
                key: "onAtking"
                , value: function (t) {}
        }, {
                key: "onChaseing"
                , value: function (t) {}
        }, {
                key: "getDis"
                , value: function (t) {
                    return Laya.Vector3.distance(t, this.root.transform.position);
                }
        }, {
                key: "getDisByPlayer"
                , value: function () {
                    return Laya.Vector3.distance(ze.Instance.transform.position, this.root.transform.position);
                }
        }, {
                key: "update"
                , value: function (t) {
                    if (this.inWeb) this.wall_avo.isEnable = !1;
                    else {
                        if (Le.IsPlaying) {
                            if (this.hp <= 0) return void(this.wall_avo.isEnable = !1);
                            this.stateAction(t), this._frame % 300 == 0 && (this.lastPos && this.wall_avo.isEnable && this.wall_avo.enabled && Laya.Vector3.distance(this.lastPos, this.transform.position) <= .3 && (console.log("位置卡死判定")
                                , this.transform.position = this.startPos), this.lastPos = this.transform.position.clone());
                        }
                        (0, o.default)((0, u.default)(a.prototype), "update", this)
                        .call(this, t), this.optimization()
                            , this.transform.position.y <= -.5 && (this.transform.position.y = 0);
                    }
                }
        }, {
                key: "optimization"
                , value: function () {
                    if (this._frame % 3 == 0) {
                        var t = this.getDisByPlayer();
                        if (t >= 30) this.bodyMesh.active = !1;
                        else {
                            if (t <= 3) return void(this.bodyMesh.active = !0);
                            var e = new Laya.Vector3();
                            Laya.Vector3.subtract(this.transform.position, ze.Instance.transform.position, e);
                            var a = F.GetForward(ze.Instance.cameraControl.camera);
                            Laya.Vector3.scale(a, 1, a);
                            var n = F.toAngle(e, a);
                            this.bodyMesh.active = n <= 80;
                        }
                    }
                    this.wall_avo.enabled = this.bodyMesh.active;
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "waitRelive"
                , value: function (t) {
                    var e = this;
                    this.transform.position = new Laya.Vector3(0, 999, 0), Laya.timer.once(1e3 * t, this, function () {
                        e.init(), console.log("复活了", e.transform.position);
                    });
                }
        }, {
                key: "playAnim"
                , value: function (t) {
                    if (this.anim && this.anim.owner.active) {
                        var e = this.anim.getControllerLayer(0)
                            .getCurrentPlayState();
                        e.animatorState.name == t && e.normalizedTime % 1 != 0 || this.anim.play(t, 0, 0);
                    }
                }
        }, {
                key: "setTarget"
                , value: function (t) {
                    this.target = t;
                }
        }, {
                key: "hurtByWeb"
                , value: function (t) {
                    var e = this;
                    if (!this.inWeb) {
                        var a = mt.GetCurrSkillData(ot.Web)[0];
                        this.inWeb = !0;
                        var n = Ne.FxParent;
                        if (n) {
                            var i = n.getChildByName("FX_zhizhuwang_shouji");
                            i && (i = i.clone(), this.root.addChild(i), i.active = !0, i.transform.localPosition = new Laya.Vector3(0, 0, 0)
                                , Laya.timer.once(1e3 * a, this, function () {
                                    i.destroy(!0), e.inWeb = !1;
                                }));
                        }
                    }
                }
        }, {
                key: "playGunFx"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (Ne.FxParent && this.gun) {
                        var e = Ne.FxParent.getChildByName(t ? "FX_sandan" : "FX_qiang_lianxu");
                        e && (this.getDisByPlayer() <= 2 && (t ? B.Instance.playSound(m.gun0) : B.Instance.playSound(m.gun1))
                            , e = e.clone(), this.gun.addChild(e), e.transform.localPosition = new Laya.Vector3(0, 0, 0)
                            , e.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), e.active = !0, Laya.timer.once(200, this, function () {
                                e.destroy(!0);
                            }));
                    }
                }
        }]), a;
        }(Xt)
        , Yt = [{
            id: "00"
            , key: "ZiSe"
            , Atk: 3
            , MinHp: 30
            , MaxHp: 50
    }, {
            id: "01"
            , key: "HeiSe"
            , Atk: 5
            , MinHp: 50
            , MaxHp: 80
    }, {
            id: "02"
            , key: "heishoudang"
            , Atk: 10
            , MinHp: 80
            , MaxHp: 120
    }, {
            id: "03"
            , key: "hongkulou"
            , Atk: 15
            , MinHp: 240
            , MaxHp: 300
    }, {
            id: "04"
            , key: "mieba"
            , Atk: 50
            , MinHp: 800
            , MaxHp: 1e3
    }]
        , Kt = [{
            id: "05"
            , key: "heishoudang"
            , Atk: 20
            , MinHp: 150
            , MaxHp: 200
    }, {
            id: "06"
            , key: "hongkulou"
            , Atk: 25
            , MinHp: 400
            , MaxHp: 500
    }]
        , zt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .inAtking = !1, t.atkIndex = 0
                    , t.aimUI = null, t.enemyId = "", t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.root || ((0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                        .call(this)
                        , this.wall_avo.speed_scale = 3.5, this.wall_avo.setCheckAngle(45), this.wall_avo.setSideLength(3)
                        , this.wall_avo.setForwardLength(4), this.pos_rad = 4, this.humanName = "小混混");
                }
        }, {
                key: "onEnable"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onEnable", this)
                    .call(this);
                    for (var t = F.GetComponentsInChildren(Laya.PhysicsCollider, this.root), e = 0; e < t.length; e++) {
                        var n = t[e];
                        n.canCollideWith = N.Human | N.Car, n.collisionGroup = N.Enemy, n.isTrigger = !0
                            , n.enabled = !0;
                    }
                    6 != Le.Level && this.creatorAimUI();
                }
        }, {
                key: "updateSkin"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                        , e = t ? Kt : Yt
                        , a = K.Random(0, 1e3) % e.length;
                    K.Random(0, 1e3) % 3 == 1 && (a = 0);
                    var n = e[a];
                    if (n) {
                        this.enemyId = n.id;
                        var i = n.key;
                        this.hp = this.hpMax = K.Random(n.MinHp, n.MaxHp), this.atkValue = n.Atk, 99 != Le.Level && (this.hp = this.hpMax = 100
                            , this.atkValue = 2);
                        for (var o = ["WoQuan", "FangSongShou", "Tou", "body"], s = Ne.World.getChildByName("EnemyMat"), r = null, l = 0; l < s.meshRenderer.materials.length; l++)
                            if (-1 != s.meshRenderer.materials[l].name.indexOf(i)) {
                                r = s.meshRenderer.materials[l];
                                break;
                            }
                        if (r)
                            for (var u = 0; u < o.length; u++) {
                                var c = this.getChildrenByName(o[u], this.root);
                                c && (c instanceof Laya.SkinnedMeshSprite3D ? c.skinnedMeshRenderer.material = r : c.meshRenderer.material = r);
                            }
                    }
                }
        }, {
                key: "onInit"
                , value: function () {
                    this.updateSkin();
                }
        }, {
                key: "creatorAimUI"
                , value: function () {
                    var t = this;
                    this.aimUI && !this.aimUI.destroyed || Ht.Instance && J.getRes(W.aimDisUI, !1, function (e) {
                        var a = new Laya.Prefab();
                        a.json = e, t.aimUI = a.create(), Ht.Instance.root.AimPosBox.addChild(t.aimUI);
                    });
                }
        }, {
                key: "update"
                , value: function (t) {
                    (0, o.default)((0, u.default)(a.prototype), "update", this)
                    .call(this, t), this.updateAimUI(t);
                }
        }, {
                key: "updateAimUI"
                , value: function (t) {
                    if (this.aimUI) {
                        if (this.hp <= 0) return void(this.aimUI.visible = !1);
                        if (this._frame % 2 != 0) return;
                        var e = new Laya.Vector3();
                        Laya.Vector3.subtract(this.transform.position, ze.Instance.transform.position, e);
                        var a = F.GetForward(ze.Instance.cameraControl.cameraNode);
                        if (Laya.Vector3.scale(a, -1, a), F.toAngle(a, e) >= 90) return void(this.aimUI.visible = !1);
                        this.aimUI.visible = !0;
                        var n = F.WorldToScreen2(ze.Instance.cameraControl.camera, this.transform.position);
                        this.aimUI.pos(n.x, n.y), this.aimUI.getChildAt(0)
                            .text = "".concat(Math.floor(Laya.Vector3.scalarLength(e)), "m");
                    }
                }
        }, {
                key: "getRandIdlePos"
                , value: function () {
                    this.targetPos || (this.targetPos = this.idlePos[K.Random(0, 1e3) % this.idlePos.length].clone());
                }
        }, {
                key: "onIdleing"
                , value: function (t) {
                    if (!(this.hp <= 0))
                        if (this.idleTime > 0) this.wall_avo.isEnable = !1;
                        else {
                            if (this.targetPos) return this.getDis(this.targetPos) <= 3 ? (this.targetPos = null
                                , void(this.idleTime = 1)) : this.target && this.getDis(this.target.transform.position) <= 10 ? (this.state = Ot.Chase
                                , this.targetPos = null, void(this.wall_avo.currSpeed = new Laya.Vector3(0, 0, 0))) : (this.getDisByPlayer() <= 10 && (this.target = ze.Instance
                                    , this.state = Ot.Chase, this.targetPos = null, this.wall_avo.currSpeed = new Laya.Vector3(0, 0, 0))
                                , void(this.targetPos && (this.wall_avo.setTargetPos(this.targetPos), this.wall_avo.isEnable = !0)));
                            this.getRandIdlePos();
                        }
                }
        }, {
                key: "onChaseing"
                , value: function (t) {
                    if (!(this.hp <= 0)) {
                        var e = this.getDisByPlayer();
                        return e <= 3 ? (this.wall_avo.currSpeed = new Laya.Vector3(0, 0, 0), this.wall_avo.isEnable = !1
                            , this.wall_avo.setTargetPos(null), void(this.state = Ot.Atk)) : e >= 15 || !this.target ? (this.targetPos = null
                            , this.wall_avo.currSpeed = new Laya.Vector3(0, 0, 0), this.state = Ot.Idle, void(this.target = null)) : (this.targetPos = this.target.transform.position.clone()
                            , this.targetPos.y = this.transform.position.y, this.wall_avo.setTargetPos(this.targetPos)
                            , void(this.wall_avo.isEnable = !0));
                    }
                }
        }, {
                key: "onAtking"
                , value: function (t) {
                    if (!(this.hp <= 0) && !this.inAtking && this.target && (!this.target.isPlayer || ze.Instance.moveControl.isGround)) {
                        var e = this.getDisByPlayer() - this.atkDis;
                        if (e >= 10) return this.state = Ot.Idle, this.targetPos = null, void(this.target = null);
                        if (e <= 0) this.atk();
                        else {
                            this.playAnim(Te.run);
                            var a = new Laya.Vector3();
                            Laya.Vector3.subtract(this.target.transform.position, this.transform.position, a)
                                , Laya.Vector3.normalize(a, a);
                            var n = K.Random(3, 5) * t;
                            n = n > e ? e : n, this.target.isPlayer && ze.Instance.moveControl.isGround || (a.y = 0)
                                , Laya.Vector3.scale(a, n, a), Laya.Vector3.add(this.transform.position, a, a), this.transform.lookAt(a, new Laya.Vector3(0, 1, 0), !1)
                                , this.transform.position = a;
                        }
                    }
                }
        }, {
                key: "atk"
                , value: function () {
                    this.playAnim(Te["atk_".concat(this.atkIndex++ % 3 + 1)]), this.setAtk(.6);
                }
        }, {
                key: "setAtk"
                , value: function (t) {
                    var e = this;
                    this.inAtking = !0, Laya.timer.once(1e3 * t, this, function () {
                        e.inAtking = !1;
                    }), Laya.timer.once(500 * t, this, this.checkAtkSuccess);
                }
        }, {
                key: "checkAtkSuccess"
                , value: function () {
                    this.getDisByPlayer() <= 1 && this.target.subHp(this.atkValue, this);
                }
        }, {
                key: "lateUpdate"
                , value: function (t) {
                    this.hp <= 0 || this.state == Ot.Atk || (this.wall_avo.isEnable ? Laya.Vector3.scalarLength(this.wall_avo.currSpeed) > 1.5 ? this.playAnim(Te.run) : this.playAnim(Te.walk) : this.playAnim(Te.idle));
                }
        }, {
                key: "onDeath"
                , value: function () {
                    var t = this;
                    if (de.Instance.level_control.creatMoney(this.transform.position, K.Random(5, 20))
                        , (0, o.default)((0, u.default)(a.prototype), "onDeath", this)
                        .call(this), this.carDeath) {
                        this.playAnim("zhuangfei"), this.root.transform.lookAt(ze.Instance.transform.position, new Laya.Vector3(0, 1, 0), !1);
                        var e = F.GetForward(ze.Instance.root);
                        Laya.Vector3.scale(e, -10, e), e.y = 0, Laya.Vector3.add(e, this.transform.position, e)
                            , this.transform.localPositionX, Laya.Tween.to(this.root.transform, {
                                localPositionX: e.x
                                , localPositionZ: e.z
                            }, 500);
                    } else this.playAnim(Te.normal_death);
                    for (var n = F.GetComponentsInChildren(Laya.PhysicsCollider, this.root), i = 0; i < n.length; i++) n[i].enabled = !1;
                    F.PlayFadeOutAnim(this.root, Laya.Handler.create(this, function () {
                        $.emit(z.EnemyDestroy, t);
                    }), 2), Pt.AddProgress(1e3, 1), ze.Instance.addError(-5);
                }
        }, {
                key: "onSubHp"
                , value: function (t, e) {
                    (0, o.default)((0, u.default)(a.prototype), "onSubHp", this)
                    .call(this, t, e), e && (this.target = e);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onDestroy"
                , value: function () {
                    console.log("enemy destroy"), this.aimUI && !this.aimUI.destroyed && this.aimUI.destroy(!0);
                }
        }]), a;
        }(jt)
        , qt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this), this.humanName = "小混混大哥";
                }
        }, {
                key: "onInit"
                , value: function () {
                    this.atkDis = 6, this.setGun(K.Random(0, 100) % 4), this.updateSkin(!0);
                }
        }, {
                key: "atk"
                , value: function () {
                    if (this.target && !this.inAtking) {
                        var t = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3())
                            , e = new Laya.HitResult();
                        t.origin = new Laya.Vector3(this.transform.position.x, 1, this.transform.position.z);
                        var a = new Laya.Vector3();
                        if (Laya.Vector3.subtract(this.target.transform.position, this.transform.position, a)
                            , a.y = 0, t.direction = a, Ne.World.scene.physicsSimulation.rayCast(t, e, this.atkDis, N.Human, N.Border | N.Build)
                            , e.succeeded) console.log("前方有阻挡");
                        else {
                            this.playGunFx(this.isHandGun);
                            var n = this.target.transform.position.clone();
                            n.y = this.transform.position.y, this.transform.lookAt(n, new Laya.Vector3(0, 1, 0), !1)
                                , this.playAnim(this.isHandGun ? Te.shouqiangkaiqiang : Te.buqiangkaiqiang), this.setAtk(1);
                        }
                    }
                }
        }, {
                key: "checkAtkSuccess"
                , value: function () {
                    this.target.subHp(this.atkValue, this);
                }
        }]), a;
        }(zt)
        , Jt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .inAtking = !1, t.atkIndex = 0
                    , t.idle_speed = 1, t.chase_speed = 3.5, t.chaseDis = 20, t.inDialog = !1, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this), this.wall_avo.speed_scale = 3.5
                        , this.wall_avo.setCheckAngle(45), this.wall_avo.setSideLength(3), this.wall_avo.setForwardLength(4)
                        , this.pos_rad = 4, this.atkDis = 1;
                }
        }, {
                key: "init"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "init", this)
                    .call(this), this.humanName = "辅警";
                }
        }, {
                key: "onEnable"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onEnable", this)
                    .call(this);
                    for (var t = F.GetComponentsInChildren(Laya.PhysicsCollider, this.root), e = 0; e < t.length; e++) {
                        var n = t[e];
                        n.canCollideWith = N.Human | N.Build | N.Border | N.Enemy | N.Car, n.collisionGroup = N.Police
                            , n.isTrigger = !0;
                    }
                }
        }, {
                key: "getRandIdlePos"
                , value: function () {
                    this.targetPos || (this.targetPos = this.idlePos[K.Random(0, 1e3) % this.idlePos.length].clone());
                }
        }, {
                key: "onIdleing"
                , value: function (t) {
                    if (!(this.hp <= 0))
                        if (this.idleTime > 0) this.wall_avo.isEnable = !1;
                        else if (this.target && this.getDis(this.target.transform.position) < this.chaseDis) this.state = Ot.Chase;
                    else {
                        if (this.targetPos) return this.getDis(this.targetPos) <= 3 ? (this.targetPos = null
                            , void(this.idleTime = 1)) : void(this.targetPos && (this.wall_avo.speed_scale = this.idle_speed
                            , this.wall_avo.setTargetPos(this.targetPos), this.wall_avo.isEnable = !0, this.playAnim(Te.walk)));
                        this.getRandIdlePos();
                    }
                }
        }, {
                key: "onChaseing"
                , value: function (t) {
                    if (!(this.hp <= 0)) {
                        var e = this.getTargetDis();
                        return e <= 3 ? (this.wall_avo.currSpeed = new Laya.Vector3(0, 0, 0), this.wall_avo.isEnable = !1
                            , this.wall_avo.setTargetPos(null), void(this.state = Ot.Atk)) : e >= this.chaseDis || !this.target ? (this.targetPos = null
                            , this.wall_avo.currSpeed = new Laya.Vector3(0, 0, 0), void(this.state = Ot.Idle)) : (this.wall_avo.speed_scale = this.chase_speed
                            , this.targetPos = this.target.transform.position.clone(), this.targetPos.y = this.transform.position.y
                            , this.wall_avo.setTargetPos(this.targetPos), this.wall_avo.isEnable = !0, void this.playAnim(Te.run));
                    }
                }
        }, {
                key: "getTargetDis"
                , value: function () {
                    return this.target ? Laya.Vector3.distance(this.target.transform.position, this.transform.position) : 9999;
                }
        }, {
                key: "onAtking"
                , value: function (t) {
                    if (!(this.hp <= 0 || this.inAtking)) {
                        var e = this.getTargetDis() - this.atkDis;
                        if (e >= 6) return this.state = Ot.Idle, void(this.targetPos = null);
                        if (e <= 0) this.atk();
                        else {
                            this.wall_avo.speed_scale = this.chase_speed, this.playAnim(Te.run);
                            var a = new Laya.Vector3();
                            Laya.Vector3.subtract(this.target.transform.position, this.transform.position, a)
                                , Laya.Vector3.normalize(a, a);
                            var n = K.Random(3, 5) * t;
                            n = n > e ? e : n, this.target.isPlayer && ze.Instance.moveControl.isGround || (a.y = 0)
                                , Laya.Vector3.scale(a, n, a), Laya.Vector3.add(this.transform.position, a, a), this.transform.lookAt(a, new Laya.Vector3(0, 1, 0), !1)
                                , this.transform.position = a;
                        }
                    }
                }
        }, {
                key: "atk"
                , value: function () {
                    this.playAnim(Te["atk_".concat(this.atkIndex++ % 3 + 1)]), this.setAtk(.6);
                }
        }, {
                key: "setAtk"
                , value: function (t) {
                    var e = this;
                    this.target && this.transform.lookAt(new Laya.Vector3(this.target.transform.position.x, this.transform.position.y, this.target.transform.position.z), new Laya.Vector3(0, 1, 0), !1)
                        , this.inAtking = !0, Laya.timer.once(1e3 * t, this, function () {
                            e.inAtking = !1;
                        }), Laya.timer.once(500 * t, this, this.checkNormalAtkSuccess);
                }
        }, {
                key: "checkNormalAtkSuccess"
                , value: function () {
                    if (this.getTargetDis() <= 1 && this.target) {
                        var t = this.target;
                        t && t.subHp(3, this);
                    }
                }
        }, {
                key: "lateUpdate"
                , value: function (t) {
                    !Le.IsPlaying || this.hp <= 0 || (this.state != Ot.Atk && (this.wall_avo.isEnable ? Laya.Vector3.scalarLength(this.wall_avo.currSpeed) > 1.5 ? this.playAnim(Te.run) : this.playAnim(Te.walk) : this.playAnim(Te.idle))
                        , ze.Instance.errorValue >= 40 ? this.toChasePlayer() : (this.cancelChasePlayer()
                            , ze.Instance.errorValue >= 20 && (this.target = ze.Instance)));
                }
        }, {
                key: "onDeath"
                , value: function () {
                    var t = this;
                    if (de.Instance.level_control.creatMoney(this.transform.position, K.Random(10, 20))
                        , (0, o.default)((0, u.default)(a.prototype), "onDeath", this)
                        .call(this), this.carDeath) {
                        this.playAnim("zhuangfei"), this.root.transform.lookAt(ze.Instance.transform.position, new Laya.Vector3(0, 1, 0), !1);
                        var e = F.GetForward(ze.Instance.root);
                        Laya.Vector3.scale(e, -10, e), e.y = 0, Laya.Vector3.add(e, this.transform.position, e)
                            , this.transform.localPositionX, Laya.Tween.to(this.root.transform, {
                                localPositionX: e.x
                                , localPositionZ: e.z
                            }, 500);
                    } else this.playAnim(Te.normal_death);
                    for (var n = F.GetComponentsInChildren(Laya.PhysicsCollider, this.root), i = 0; i < n.length; i++) n[i].enabled = !1;
                    F.PlayFadeOutAnim(this.root, Laya.Handler.create(this, function () {
                            $.emit(z.PoliceDestroy, t);
                        }), 2), this.getDisByPlayer() < 2 && B.Instance.playSound(m.hurt2), Pt.AddProgress(1005, 1)
                        , Pt.AddProgress(1004, 1), ze.Instance.addError(20);
                }
        }, {
                key: "onSubHp"
                , value: function (t, e) {
                    var n = this;
                    if ((0, o.default)((0, u.default)(a.prototype), "onSubHp", this)
                        .call(this, t, e)
                        , e && this.hp > 0) {
                        var i = K.Random(0, 100) % 2;
                        if (0 == i && !this.inDialog) {
                            switch (i = K.Random(1, 3), this.inDialog = !0, i) {
                            case 1:
                                we.Instance.showDialogBox("看什么看，再看抓你去枪毙。", "警察", function () {
                                    n.inDialog = !1;
                                });
                                break;

                            case 2:
                                we.Instance.showDialogBox("你有什么事情吗？", "警察", function () {
                                    n.inDialog = !1;
                                });
                                break;

                            case 3:
                                we.Instance.showDialogBox("**********", "警察", function () {
                                    n.inDialog = !1;
                                });
                            }
                            return;
                        }
                        this.setTarget(e), this.state = Ot.Chase;
                    }
                }
        }, {
                key: "toChasePlayer"
                , value: function () {
                    console.log("??"), this.chaseDis = 500, this.target = ze.Instance;
                }
        }, {
                key: "cancelChasePlayer"
                , value: function () {
                    this.chaseDis < 200 || (this.chaseDis = 15);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(jt)
        , Qt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "onInit"
                , value: function () {
                    this.atkDis = 6, this.setGun(0), this.humanName = "警擦";
                }
        }, {
                key: "atk"
                , value: function () {
                    if (this.target && !this.inAtking) {
                        var t = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3())
                            , e = new Laya.HitResult();
                        t.origin = new Laya.Vector3(this.transform.position.x, 1, this.transform.position.z);
                        var a = new Laya.Vector3();
                        if (Laya.Vector3.subtract(this.target.transform.position, this.transform.position, a)
                            , a.y = 0, t.direction = a, Ne.World.scene.physicsSimulation.rayCast(t, e, this.atkDis, N.Human, N.Border | N.Build)
                            , e.succeeded) console.log("前方有阻挡");
                        else {
                            this.playGunFx(this.isHandGun);
                            var n = this.target.transform.position.clone();
                            n.y = this.transform.position.y, this.transform.lookAt(n, new Laya.Vector3(0, 1, 0), !1)
                                , this.playAnim(this.isHandGun ? Te.shouqiangkaiqiang : Te.buqiangkaiqiang), this.setAtk(1);
                        }
                    }
                }
        }, {
                key: "checkAtkSuccess"
                , value: function () {
                    this.target.subHp(5, this);
                }
        }]), a;
        }(Jt)
        , Zt = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .money = 0, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.root);
                    t && (t.canCollideWith = N.Human, t.collisionGroup = N.Money);
                }
        }, {
                key: "initMoney"
                , value: function (t) {
                    this.money = t;
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    this.getMoney(), this.root.destroy(!0);
                }
        }, {
                key: "getMoney"
                , value: function () {
                    S.Instance.showLabelTips("获得金钱".concat(this.money)), mt.Coin += this.money;
                }
        }]), a;
        }(Y)
        , $t = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .inAtking = !1, t.atkIndex = 0
                    , t.idle_speed = 1, t.chase_speed = 3.5, t.inDialog = !1, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.root || ((0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                        .call(this)
                        , this.wall_avo.speed_scale = 3.5, this.wall_avo.setCheckAngle(45), this.wall_avo.setSideLength(3)
                        , this.wall_avo.setForwardLength(4), this.pos_rad = 4, this.humanName = "普通人");
                }
        }, {
                key: "onEnable"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onEnable", this)
                    .call(this);
                    for (var t = F.GetComponentsInChildren(Laya.PhysicsCollider, this.root), e = 0; e < t.length; e++) {
                        var n = t[e];
                        n.canCollideWith = N.Human | N.Build | N.Border | N.Car, n.collisionGroup = N.People
                            , n.isTrigger = !0;
                    }
                }
        }, {
                key: "getRandIdlePos"
                , value: function () {
                    this.targetPos || (this.targetPos = this.idlePos[K.Random(0, 1e3) % this.idlePos.length].clone());
                }
        }, {
                key: "onIdleing"
                , value: function (t) {
                    if (!(this.hp <= 0))
                        if (this.idleTime > 0) this.wall_avo.isEnable = !1;
                        else {
                            if (this.targetPos) return this.getDis(this.targetPos) <= 3 ? (this.targetPos = null
                                , void(this.idleTime = 1)) : (this.targetPos && (this.wall_avo.speed_scale = this.idle_speed
                                , this.wall_avo.setTargetPos(this.targetPos), this.wall_avo.isEnable = !0), void(this.target && this.getDis(this.target.transform.position) <= 5 && (this.state = Ot.Chase)));
                            this.getRandIdlePos();
                        }
                }
        }, {
                key: "onChaseing"
                , value: function (t) {
                    if (!(this.hp <= 0)) {
                        var e = this.getTargetDis();
                        return e <= 3 ? (this.wall_avo.currSpeed = new Laya.Vector3(0, 0, 0), this.wall_avo.isEnable = !1
                            , this.wall_avo.setTargetPos(null), void(this.state = Ot.Atk)) : e >= 15 ? (this.targetPos = null
                            , this.wall_avo.currSpeed = new Laya.Vector3(0, 0, 0), void(this.state = Ot.Idle)) : (this.wall_avo.speed_scale = this.chase_speed
                            , this.targetPos = this.target.transform.position.clone(), this.targetPos.y = this.transform.position.y
                            , this.wall_avo.setTargetPos(this.targetPos), void(this.wall_avo.isEnable = !0));
                    }
                }
        }, {
                key: "getTargetDis"
                , value: function () {
                    return this.target ? Laya.Vector3.distance(this.target.transform.position, this.transform.position) : 9999;
                }
        }, {
                key: "onAtking"
                , value: function (t) {
                    if (!(this.hp <= 0 || this.inAtking)) {
                        var e = this.getTargetDis() - this.atkDis;
                        if (e >= 8) return this.state = Ot.Idle, void(this.targetPos = null);
                        if (e <= 0) {
                            this.playAnim(Te["atk_".concat(this.atkIndex++ % 3 + 1)]), this.setAtk(.6);
                        } else {
                            this.wall_avo.speed_scale = this.chase_speed, this.playAnim(Te.run);
                            var a = new Laya.Vector3();
                            Laya.Vector3.subtract(this.target.transform.position, this.transform.position, a)
                                , Laya.Vector3.normalize(a, a);
                            var n = K.Random(3, 5) * t;
                            n = n > e ? e : n, this.target.isPlayer && ze.Instance.moveControl.isGround || (a.y = 0)
                                , Laya.Vector3.scale(a, n, a), Laya.Vector3.add(this.transform.position, a, a), this.transform.lookAt(a, new Laya.Vector3(0, 1, 0), !1)
                                , this.transform.position = a;
                        }
                    }
                }
        }, {
                key: "setAtk"
                , value: function (t) {
                    var e = this;
                    this.target && this.transform.lookAt(new Laya.Vector3(this.target.transform.position.x, this.transform.position.y, this.target.transform.position.z), new Laya.Vector3(0, 1, 0), !1)
                        , this.inAtking = !0, Laya.timer.once(1e3 * t, this, function () {
                            e.inAtking = !1;
                        }), Laya.timer.once(500 * t, this, this.checkNormalAtkSuccess);
                }
        }, {
                key: "checkNormalAtkSuccess"
                , value: function () {
                    if (this.getTargetDis() <= 1 && this.target) {
                        var t = this.target;
                        t && t.subHp(2, this);
                    }
                }
        }, {
                key: "lateUpdate"
                , value: function (t) {
                    this.hp <= 0 || this.state == Ot.Atk || (this.wall_avo.isEnable ? Laya.Vector3.scalarLength(this.wall_avo.currSpeed) > 1.5 ? this.playAnim(Te.run) : this.playAnim(Te.walk) : this.playAnim(Te.idle));
                }
        }, {
                key: "onDeath"
                , value: function () {
                    var t = this;
                    if (de.Instance.level_control.creatMoney(this.transform.position, K.Random(30, 50))
                        , (0, o.default)((0, u.default)(a.prototype), "onDeath", this)
                        .call(this), this.carDeath) {
                        this.playAnim("zhuangfei"), this.root.transform.lookAt(ze.Instance.transform.position, new Laya.Vector3(0, 1, 0), !1);
                        var e = F.GetForward(ze.Instance.root);
                        Laya.Vector3.scale(e, -10, e), e.y = 0, Laya.Vector3.add(e, this.transform.position, e)
                            , this.transform.localPositionX, Laya.Tween.to(this.root.transform, {
                                localPositionX: e.x
                                , localPositionZ: e.z
                            }, 500);
                    } else this.playAnim(Te.normal_death);
                    for (var n = F.GetComponentsInChildren(Laya.PhysicsCollider, this.root), i = 0; i < n.length; i++) n[i].enabled = !1;
                    F.PlayFadeOutAnim(this.root, Laya.Handler.create(this, function () {
                        $.emit(z.PeopleDestroy, t);
                    }), 2), Pt.AddProgress(1002, 1), Pt.AddProgress(1003, 1), ze.Instance.addError(20);
                }
        }, {
                key: "onSubHp"
                , value: function (t, e) {
                    var n = this;
                    if ((0, o.default)((0, u.default)(a.prototype), "onSubHp", this)
                        .call(this, t, e)
                        , e && this.hp > 0) {
                        if (e == ze.Instance && null == this.target) {
                            var i = K.Random(0, 100) % 2;
                            if (console.log(i), 0 == i && !this.inDialog) {
                                switch (i = K.Random(1, 3), this.inDialog = !0, i) {
                                case 1:
                                    we.Instance.showDialogBox("扑街，稳打啊？", "路人", function () {
                                        n.inDialog = !1;
                                    });
                                    break;

                                case 2:
                                    we.Instance.showDialogBox("我忍你一次", "路人", function () {
                                        n.inDialog = !1;
                                    });
                                    break;

                                case 3:
                                    we.Instance.showDialogBox("**********", "路人", function () {
                                        n.inDialog = !1;
                                    });
                                }
                                return;
                            }
                        }
                        this.target = e, this.state = Ot.Chase;
                    }
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(jt)
        , te = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .teachEnd = !1, t.cars = []
                    , t.enemys = [], t.polices = [], t.peoples = [], t.HumanType = null, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this), $.on(z.CarDestroy, this.message_carDestroy, this)
                        , $.on(z.EnemyDestroy, this.message_enemyDestroy, this), $.on(z.PoliceDestroy, this.message_policeDestroy, this)
                        , $.on(z.PeopleDestroy, this.message_peopleDestroy, this), $.on(z.TeachEnd, this.message_teahEndBase, this)
                        , $.on(z.TeachEnd, this.message_teahEnd, this), this.HumanType = Ne.World.getChildByName("HumanType")
                        , this.creatHuman(), this.creatAI(), this._addObjControl(this.root);
                }
        }, {
                key: "onDestroy"
                , value: function () {
                    $.off(z.CarDestroy, this.message_carDestroy, this), $.off(z.EnemyDestroy, this.message_enemyDestroy, this)
                        , $.off(z.PoliceDestroy, this.message_policeDestroy, this), $.off(z.PeopleDestroy, this.message_peopleDestroy, this)
                        , $.off(z.TeachEnd, this.message_teahEnd, this), $.off(z.TeachEnd, this.message_teahEndBase, this);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "level_success"
                , value: function () {
                    mt.Level <= Le.Level && mt.Level++, Le.GameEnd(!0);
                }
        }, {
                key: "message_teahEndBase"
                , value: function () {
                    this.teachEnd = !0;
                }
        }, {
                key: "message_teahEnd"
                , value: function () {}
        }, {
                key: "message_carDestroy"
                , value: function (t) {
                    var e = this.cars.indexOf(t); -
                    1 != e && this.cars.splice(e, 1);
                }
        }, {
                key: "message_enemyDestroy"
                , value: function (t) {
                    var e = this.enemys.indexOf(t); -
                    1 != e && this.enemys.splice(e, 1);
                }
        }, {
                key: "message_peopleDestroy"
                , value: function (t) {
                    var e = this.peoples.indexOf(t); -
                    1 != e && this.peoples.splice(e, 1);
                }
        }, {
                key: "message_policeDestroy"
                , value: function (t) {
                    var e = this.polices.indexOf(t); -
                    1 != e && this.polices.splice(e, 1);
                }
        }, {
                key: "_addObjControl"
                , value: function (t) {
                    if (t)
                        for (var e = t.numChildren, a = 0; a < e; a++) {
                            var n = t.getChildAt(a);
                            switch (n.name) {
                            case "car":
                                this.cars.push(n);
                                var i = n.addComponent(At);
                                i.initRoad(null, null, -1), i.creatorAimUI();
                            }
                            if (-1 != n.name.indexOf("enemy")) {
                                var o;
                                o = K.Random(0, 1e3) % 2 == 0 ? n.addComponent(qt) : n.addComponent(zt), this.enemys.push(o);
                            }
                            if (-1 != n.name.indexOf("police")) {
                                var s;
                                if (6 == Le.Level) continue;
                                s = K.Random(0, 1e3) % 2 == 0 ? n.addComponent(Qt) : n.addComponent(Jt), this.polices.push(s);
                            }
                            if (-1 != n.name.indexOf("people")) {
                                var r;
                                r = n.addComponent($t), this.peoples.push(r);
                            }
                            this._addObjControl(n);
                        }
                }
        }, {
                key: "creatMoney"
                , value: function (t, e) {
                    var a = Ne.FxParent.getChildByName("money");
                    a && (a = a.clone(), this.root.addChild(a), a.active = !0, a.transform.position = t
                        , a.addComponent(Zt)
                        .initMoney(e));
                }
        }, {
                key: "creatHuman"
                , value: function () {
                    var t = this
                        , e = Ft.GetLevelHumanInfo(Le.Level);
                    console.log(e);
                    for (var a = function (a) {
                            var n = e[a].key
                                , i = e[a].pos
                                , o = t.HumanType.getChildByName(n);
                            o ? (o = o.clone(), t.root.addChild(o), o.transform.position = new Laya.Vector3(-i[0], i[1], i[2])
                                , o.active = !1, Laya.timer.once(50 * a, t, function () {
                                    o.active = !0;
                                })) : console.log("key null", n);
                        }, n = 0; n < e.length; n++) a(n);
                }
        }, {
                key: "creatAI"
                , value: function () {
                    var t = this;
                    if (!(Le.Level > 10))
                        for (var e = Ft.GetLevelHumanInfo(99), a = function (a) {
                                var n = e[a].key;
                                if (-1 != n.indexOf("enemy")) return "continue";
                                var i = e[a].pos
                                    , o = t.HumanType.getChildByName(n);
                                o && (o = o.clone(), t.root.addChild(o), o.active = !1, o.transform.position = new Laya.Vector3(-i[0], i[1], i[2])
                                    , Laya.timer.once(20 * a, t, function () {
                                        o.active = !0;
                                    }));
                            }, n = 0; n < e.length; n++) a(n);
                }
        }]), a;
        }(Y)
        , ee = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    ._index = 0, t.aimUI = null
                    , t.allRoadPos = [], t.car = 0, t;
            }
            return (0, r.default)(a, [{
                key: "creatorAimUI"
                , value: function () {
                    var t = this;
                    this.aimUI && !this.aimUI.destroyed || Ht.Instance && J.getRes(W.aimDisUI, !1, function (e) {
                        var a = new Laya.Prefab();
                        a.json = e, t.aimUI = a.create(), Ht.Instance.root.AimPosBox.addChild(t.aimUI);
                    });
                }
        }, {
                key: "updateAimUI"
                , value: function (t) {
                    if (this.aimUI && !this.aimUI.destroyed) {
                        if (this._frame % 2 != 0) return;
                        if (this.index >= this.allRoadPos.length) return;
                        var e = this.allRoadPos[this.index].transform.position
                            , a = new Laya.Vector3();
                        Laya.Vector3.subtract(e, ze.Instance.transform.position, a);
                        var n = F.GetForward(ze.Instance.cameraControl.cameraNode);
                        if (Laya.Vector3.scale(n, -1, n), F.toAngle(n, a) >= 90) return void(this.aimUI.visible = !1);
                        this.aimUI.visible = !0;
                        var i = F.WorldToScreen2(ze.Instance.cameraControl.camera, e);
                        i.y = K.Clamp(i.y, 40, Laya.stage.height - 40), this.aimUI.pos(i.x, i.y), this.aimUI.getChildAt(0)
                            .text = "".concat(Math.floor(Laya.Vector3.scalarLength(a)), "m");
                    }
                }
        }, {
                key: "getCar"
                , value: function () {
                    this.car++, 2 == this.car ? (console.log("第一关结束"), we.Instance.showDialogBox("真不错!,我先去找一辆汽车", "我", this.level_success.bind(this))) : we.Instance.showDialogBox("这辆车还可以，我要先把快递送了", "我");
                }
        }, {
                key: "message_carDestroy"
                , value: function (t) {
                    (0, o.default)((0, u.default)(a.prototype), "message_carDestroy", this)
                    .call(this, t);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    for (var t = 0; t < this.root.numChildren; t++) - 1 != this.root.getChildAt(t)
                        .name.indexOf("p_") && (this.root.getChildAt(t)
                            .active = !1
                            , this.root.getChildAt(t)
                            .addComponent(Q), this.allRoadPos.push(this.root.getChildAt(t)));
                    this.index = 0, (0, o.default)((0, u.default)(a.prototype), "onEnable", this)
                        .call(this)
                        , this.creatorAimUI();
                }
        }, {
                key: "message_teahEndBase"
                , value: function () {}
        }, {
                key: "message_teahEnd"
                , value: function () {
                    var t = this;
                    Ht.Instance.taskTipsUI.showTaskTips("1.驾车前往指定地点"), we.Instance.showDialogBox("这个城市太美丽了吧,道路上有来有往的汽车,我得先去找辆车去逛逛", "我", function () {
                        t.teachEnd = !0;
                    });
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    if (Le.IsPlaying) {
                        this.updateAimUI(t);
                        var e = this.allRoadPos[this.index];
                        e && (de.Instance.arrow.active = !0, de.Instance.arrow.transform.position = ze.Instance.transform.position
                            , de.Instance.arrow.transform.lookAt(e.transform.position, new Laya.Vector3(0, 1, 0), !1));
                    }
                }
        }, {
                key: "index"
                , get: function () {
                    return this._index;
                }
                , set: function (t) {
                    var e = this;
                    this._index = t;
                    for (var a = 0; a < this.allRoadPos.length; a++) this.allRoadPos[a].active = a == this._index;
                    if (t >= this.allRoadPos.length) we.Instance.showDialogBox("我真棒！", "我", function () {
                        e.level_success();
                    });
                    else {
                        if (0 == t) return;
                        we.Instance.showDialogBox("安全抵达,请前往下一个标记点", "车手");
                    }
                }
        }]), a;
        }(te)
        , ae = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .aimUI = null, t;
            }
            return (0, r.default)(a, [{
                key: "creatorAimUI"
                , value: function () {
                    var t = this;
                    this.aimUI && !this.aimUI.destroyed || Ht.Instance && J.getRes(W.aimDisUI, !1, function (e) {
                        var a = new Laya.Prefab();
                        a.json = e, t.aimUI = a.create(), Ht.Instance.root.AimPosBox.addChild(t.aimUI);
                    });
                }
        }, {
                key: "onEnable"
                , value: function () {
                    console.log(this.root), this.creatorAimUI();
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    (0, o.default)((0, u.default)(a.prototype), "update", this)
                    .call(this, t), this.updateAimUI(t);
                }
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    0 == de.Instance.level_control.enemys.length && (this.aimUI.destroy(!0), this.root.active = !1
                        , ze.Instance.getBaby = !0, we.Instance.showDialogBox("无敌多么寂寞。", "我", function () {
                            de.Instance.level_control.level_success();
                        }));
                }
        }, {
                key: "updateAimUI"
                , value: function (t) {
                    if (this.aimUI && !this.aimUI.destroyed) {
                        if (this._frame % 2 != 0) return;
                        var e = new Laya.Vector3();
                        Laya.Vector3.subtract(this.transform.position, ze.Instance.transform.position, e);
                        var a = F.GetForward(ze.Instance.cameraControl.cameraNode);
                        if (Laya.Vector3.scale(a, -1, a), F.toAngle(a, e) >= 90) return void(this.aimUI.visible = !1);
                        this.aimUI.visible = !0;
                        var n = F.WorldToScreen2(ze.Instance.cameraControl.camera, this.transform.position);
                        this.aimUI.pos(n.x, n.y), this.aimUI.getChildAt(0)
                            .text = "".concat(Math.floor(Laya.Vector3.scalarLength(e)), "m");
                    }
                }
        }, {
                key: "onDestroy"
                , value: function () {}
        }]), a;
        }(Y)
        , ne = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .baby = null, t.aimPos = null
                    , t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this), this.baby = this.getChildrenByName("xiaohai");
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.baby);
                    t && (t.canCollideWith = N.Human, t.collisionGroup = N.LitileBaby), this.baby.addComponent(ae);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onEnable", this)
                    .call(this);
                }
        }, {
                key: "message_teahEnd"
                , value: function () {
                    we.Instance.showDialogBox("有火情，我得去看看", "我"), Ht.Instance.taskTipsUI.showTaskTips("1.在火场附近击败敌人，并拯救小孩!");
                }
        }, {
                key: "update"
                , value: function (t) {
                    Le.IsPlaying && (ze.Instance.getBaby || (de.Instance.arrow.active = !0, de.Instance.arrow.transform.position = ze.Instance.transform.position
                        , de.Instance.arrow.transform.lookAt(this.baby.transform.position, new Laya.Vector3(0, 1, 0), !1)));
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(te)
        , ie = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "message_enemyDestroy"
                , value: function (t) {
                    (0, o.default)((0, u.default)(a.prototype), "message_enemyDestroy", this)
                    .call(this, t)
                        , 0 == this.enemys.length && (console.log("第三关结束了"), we.Instance.showDialogBox("就这样的水平，还敢抢我的地盘！", "我", this.level_success.bind(this)));
                }
        }, {
                key: "message_teahEnd"
                , value: function () {
                    we.Instance.showDialogBox("果然，其他的帮派都开始行动了，我得制止他们，不允许别人占领我的地盘", "我"), Ht.Instance.taskTipsUI.showTaskTips("1.请去击败红色标志地点的所有敌人！");
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    if (this.enemys.length) {
                        var e = this.enemys[0];
                        de.Instance.arrow.active = !0, de.Instance.arrow.transform.position = ze.Instance.transform.position
                            , de.Instance.arrow.transform.lookAt(e.transform.position, new Laya.Vector3(0, 1, 0), !1);
                    } else de.Instance.arrow.active = !1;
                }
        }, {
                key: "onEnable"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onEnable", this)
                    .call(this);
                }
        }]), a;
        }(te)
        , oe = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.root);
                    t && (t.canCollideWith = N.Human, t.collisionGroup = N.RoadPos);
                }
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    de.Instance.level_control.index++;
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Y)
        , se = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    ._index = 0, t.aimUI = null
                    , t.allRoadPos = [], t;
            }
            return (0, r.default)(a, [{
                key: "creatorAimUI"
                , value: function () {
                    var t = this;
                    this.aimUI && !this.aimUI.destroyed || Ht.Instance && J.getRes(W.aimDisUI, !1, function (e) {
                        var a = new Laya.Prefab();
                        a.json = e, t.aimUI = a.create(), Ht.Instance.root.AimPosBox.addChild(t.aimUI);
                    });
                }
        }, {
                key: "updateAimUI"
                , value: function (t) {
                    if (this.aimUI && !this.aimUI.destroyed) {
                        if (this._frame % 2 != 0) return;
                        if (this.index >= this.allRoadPos.length) return;
                        var e = this.allRoadPos[this.index].transform.position
                            , a = new Laya.Vector3();
                        Laya.Vector3.subtract(e, ze.Instance.transform.position, a);
                        var n = F.GetForward(ze.Instance.cameraControl.cameraNode);
                        if (Laya.Vector3.scale(n, -1, n), F.toAngle(n, a) >= 90) return void(this.aimUI.visible = !1);
                        this.aimUI.visible = !0;
                        var i = F.WorldToScreen2(ze.Instance.cameraControl.camera, e);
                        i.y = K.Clamp(i.y, 40, Laya.stage.height - 40), this.aimUI.pos(i.x, i.y), this.aimUI.getChildAt(0)
                            .text = "".concat(Math.floor(Laya.Vector3.scalarLength(a)), "m");
                    }
                }
        }, {
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    for (var t = 0; t < this.root.numChildren; t++) - 1 != this.root.getChildAt(t)
                        .name.indexOf("p_") && (this.root.getChildAt(t)
                            .active = !1
                            , this.root.getChildAt(t)
                            .addComponent(oe), this.allRoadPos.push(this.root.getChildAt(t)));
                    this.index = 0;
                }
        }, {
                key: "message_teahEnd"
                , value: function () {
                    we.Instance.showDialogBox("或许我该多加练习飞行了", "我", function () {
                        Ht.Instance.flyUI.onClick_Fly(null), Ht.Instance.taskTipsUI.showTaskTips("1.依次到达指定飞行地带");
                    });
                }
        }, {
                key: "onEnable"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onEnable", this)
                    .call(this), this.creatorAimUI();
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    if (Le.IsPlaying) {
                        this.updateAimUI(t);
                        var e = this.allRoadPos[this.index];
                        e && (de.Instance.arrow.active = !0, de.Instance.arrow.transform.position = ze.Instance.transform.position
                            , de.Instance.arrow.transform.lookAt(e.transform.position, new Laya.Vector3(0, 1, 0), !1));
                    }
                }
        }, {
                key: "index"
                , get: function () {
                    return this._index;
                }
                , set: function (t) {
                    var e = this;
                    this._index = t;
                    for (var a = 0; a < this.allRoadPos.length; a++) this.allRoadPos[a].active = a == this._index;
                    if (t >= this.allRoadPos.length) console.log("第四关结束"), we.Instance.showDialogBox("我真棒！", "我", function () {
                        e.level_success();
                    });
                    else {
                        if (0 == t) return;
                        we.Instance.showDialogBox("到达一个标记点,请前往下一个标记点", "王牌飞行员");
                    }
                }
        }]), a;
        }(te)
        , re = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .aimUI = null, t;
            }
            return (0, r.default)(a, [{
                key: "creatorAimUI"
                , value: function () {
                    var t = this;
                    this.aimUI && !this.aimUI.destroyed || Ht.Instance && J.getRes(W.aimDisUI, !1, function (e) {
                        var a = new Laya.Prefab();
                        a.json = e, t.aimUI = a.create(), Ht.Instance.root.AimPosBox.addChild(t.aimUI);
                    });
                }
        }, {
                key: "update"
                , value: function (t) {
                    (0, o.default)((0, u.default)(a.prototype), "update", this)
                    .call(this, t), this.updateAimUI(t);
                }
        }, {
                key: "updateAimUI"
                , value: function (t) {
                    if (this.aimUI && !this.aimUI.destroyed) {
                        if (this._frame % 2 != 0) return;
                        var e = new Laya.Vector3();
                        Laya.Vector3.subtract(this.transform.position, ze.Instance.transform.position, e);
                        var a = F.GetForward(ze.Instance.cameraControl.cameraNode);
                        if (Laya.Vector3.scale(a, -1, a), F.toAngle(a, e) >= 90) return void(this.aimUI.visible = !1);
                        this.aimUI.visible = !0;
                        var n = F.WorldToScreen2(ze.Instance.cameraControl.camera, this.transform.position);
                        this.aimUI.pos(n.x, n.y), this.aimUI.getChildAt(0)
                            .text = "".concat(Math.floor(Laya.Vector3.scalarLength(e)), "m");
                    }
                }
        }, {
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.root);
                    t && (t.canCollideWith = N.Human, t.collisionGroup = N.RoadPos);
                }
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    ze.Instance.inC4Pos = !0, console.log("进入c4范围");
                }
        }, {
                key: "onTriggerExit"
                , value: function (t) {
                    ze.Instance.inC4Pos = !1, console.log("离开c4范围");
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this.creatorAimUI();
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Y)
        , le = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .boom = null, t.off = .5, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = this.root.getChildByName("youtong")
                        , e = F.GetComponentInChildren(Laya.PhysicsCollider, t);
                    e.canCollideWith = N.Human, e.collisionGroup = N.Border, this.boom = this.root.getChildByName("boom");
                    var n = F.GetComponentInChildren(Laya.PhysicsCollider, this.boom);
                    n.canCollideWith = N.Human, n.collisionGroup = N.RoadPos, this.boom.addComponent(re);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "message_teahEnd"
                , value: function () {
                    we.Instance.showDialogBox("收到线报，罪犯会在城市里安装了炸弹，我要去挫败这次阴谋", "我"), Ht.Instance.taskTipsUI.showTaskTips("击败敌人，拆除红色标志点的炸弹。");
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "level_success"
                , value: function () {
                    we.Instance.showDialogBox("这座城市的和平，由我来守护!", "我", (0, o.default)((0, u.default)(a.prototype), "level_success", this)
                        .bind(this));
                }
        }, {
                key: "update"
                , value: function (t) {
                    if (Le.IsPlaying) {
                        var e = this.boom;
                        de.Instance.arrow.active = !0, de.Instance.arrow.transform.position = ze.Instance.transform.position
                            , de.Instance.arrow.transform.lookAt(e.transform.position, new Laya.Vector3(0, 1, 0), !1);
                    }
                    Ht.Instance && (Ht.Instance.root.Normal_AtkHGHand_Button.visible = ze.Instance.inC4Pos)
                        , Ht.Instance && Ht.Instance.root.Normal_AtkHGHand_Button.visible && (Ht.Instance.root.Normal_AtkHGHand_Button.rotation >= 0 && (this.off = -.5)
                            , Ht.Instance.root.Normal_AtkHGHand_Button.rotation <= -10 && (this.off = .5), Ht.Instance.root.Normal_AtkHGHand_Button.rotation += this.off);
                }
        }]), a;
        }(te)
        , ue = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    ._index = 0, t.aimUI = null
                    , t.allRoadPos = [], t;
            }
            return (0, r.default)(a, [{
                key: "creatorAimUI"
                , value: function () {
                    var t = this;
                    this.aimUI && !this.aimUI.destroyed || Ht.Instance && J.getRes(W.aimDisUI, !1, function (e) {
                        var a = new Laya.Prefab();
                        a.json = e, t.aimUI = a.create(), Ht.Instance.root.AimPosBox.addChild(t.aimUI);
                    });
                }
        }, {
                key: "updateAimUI"
                , value: function (t) {
                    if (this.aimUI && !this.aimUI.destroyed) {
                        if (this._frame % 2 != 0) return;
                        if (this.index >= this.allRoadPos.length) return;
                        var e = this.allRoadPos[this.index].transform.position
                            , a = new Laya.Vector3();
                        Laya.Vector3.subtract(e, ze.Instance.transform.position, a);
                        var n = F.GetForward(ze.Instance.cameraControl.cameraNode);
                        if (Laya.Vector3.scale(n, -1, n), F.toAngle(n, a) >= 90) return void(this.aimUI.visible = !1);
                        this.aimUI.visible = !0;
                        var i = F.WorldToScreen2(ze.Instance.cameraControl.camera, e);
                        i.y = K.Clamp(i.y, 40, Laya.stage.height - 40), this.aimUI.pos(i.x, i.y), this.aimUI.getChildAt(0)
                            .text = "".concat(Math.floor(Laya.Vector3.scalarLength(a)), "m");
                    }
                }
        }, {
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    for (var t = 0; t < this.root.numChildren; t++) - 1 != this.root.getChildAt(t)
                        .name.indexOf("p_") && (this.root.getChildAt(t)
                            .active = !1
                            , this.root.getChildAt(t)
                            .addComponent(Q), this.allRoadPos.push(this.root.getChildAt(t)));
                    this.index = 0;
                }
        }, {
                key: "message_teahEnd"
                , value: function () {
                    we.Instance.showDialogBox("我得先获取一辆汽车", "我", function () {
                        Ht.Instance.flyUI.onClick_Fly(null), Ht.Instance.taskTipsUI.showTaskTips("1.驾驶车辆依次到达指定地点");
                    });
                }
        }, {
                key: "onEnable"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onEnable", this)
                    .call(this), this.creatorAimUI();
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    if (Le.IsPlaying) {
                        this.updateAimUI(t);
                        var e = this.allRoadPos[this.index];
                        e && (de.Instance.arrow.active = !0, de.Instance.arrow.transform.position = ze.Instance.transform.position
                            , de.Instance.arrow.transform.lookAt(e.transform.position, new Laya.Vector3(0, 1, 0), !1));
                    }
                }
        }, {
                key: "index"
                , get: function () {
                    return this._index;
                }
                , set: function (t) {
                    var e = this;
                    this._index = t;
                    for (var a = 0; a < this.allRoadPos.length; a++) this.allRoadPos[a].active = a == this._index;
                    if (t >= this.allRoadPos.length) we.Instance.showDialogBox("我真棒！", "我", function () {
                        e.level_success();
                    });
                    else {
                        if (0 == t) return;
                        we.Instance.showDialogBox("安全抵达,请前往下一个标记点", "车手");
                    }
                }
        }]), a;
        }(te)
        , ce = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "message_enemyDestroy"
                , value: function (t) {
                    (0, o.default)((0, u.default)(a.prototype), "message_enemyDestroy", this)
                    .call(this, t)
                        , 0 == this.enemys.length && (console.log("第七关结束"), we.Instance.showDialogBox("或许该休息一段时间了", "我", this.level_success.bind(this)));
                }
        }, {
                key: "message_teahEnd"
                , value: function () {
                    Ht.Instance.taskTipsUI.showTaskTips("深入罪犯总部，请击败所有红色标志的罪犯。"), we.Instance.showDialogBox("太猖狂了，或许应该一举剿灭罪犯，去攻击他们的大本营", "我");
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    if (this.enemys.length) {
                        var e = this.enemys[0];
                        de.Instance.arrow.active = !0, de.Instance.arrow.transform.position = ze.Instance.transform.position
                            , de.Instance.arrow.transform.lookAt(e.transform.position, new Laya.Vector3(0, 1, 0), !1);
                    } else de.Instance.arrow.active = !1;
                }
        }]), a;
        }(te)
        , he = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "message_enemyDestroy"
                , value: function (t) {
                    console.log("enemy death"), t.waitRelive(5);
                }
        }, {
                key: "message_peopleDestroy"
                , value: function (t) {
                    console.log("people death"), t.waitRelive(5);
                }
        }, {
                key: "message_teahEnd"
                , value: function () {
                    we.Instance.showDialogBox("这是个美丽的城市，希望我们都能好好保护好它", "联盟");
                }
        }, {
                key: "message_policeDestroy"
                , value: function (t) {
                    console.log("police death"), t.waitRelive(5);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(te)
        , de = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .mapLevel = null, t.arrow = null
                    , t.level_control = null, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    a.Instance = this, this.mapLevel = Ne.World.getChildByName("MapLevel"), this.arrow = Ne.World.getChildByName("Arrow");
                }
        }, {
                key: "clearLevel"
                , value: function () {
                    this.mapLevel && this.mapLevel.destroyChildren(), this.arrow.active = !1;
                }
        }, {
                key: "addLevel"
                , value: function (t) {
                    console.log("addLevel", t), this.clearLevel();
                    var e = Ne.World.getChildByName("LevelConfig")
                        .getChildByName("Level_".concat(t))
                        , a = null;
                    if (this.level_control = null, e) {
                        switch (console.log("load level", t), e = e.clone(), this.mapLevel.addChild(e)
                            , e.transform.position = new Laya.Vector3(0, 0, 0), e.active = !0, t) {
                        case 1:
                            a = e.addComponent(ee);
                            break;

                        case 2:
                            a = e.addComponent(ne);
                            break;

                        case 3:
                            a = e.addComponent(ie);
                            break;

                        case 4:
                            a = e.addComponent(se);
                            break;

                        case 5:
                            a = e.addComponent(le);
                            break;

                        case 6:
                            a = e.addComponent(ue);
                            break;

                        case 7:
                            a = e.addComponent(ce);
                            break;

                        case 99:
                            a = e.addComponent(he);
                        }
                        t < 99 ? B.Instance.playMusic(m.BGM_lv) : B.Instance.playMusic(m.BGM), a && (this.level_control = a);
                    }
                }
        }]), a;
        }(Y);
    de.Instance = null;
    var fe, ye = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .normal = !1, t.call = null, t.bannerState = !1
                    , t.count = 0, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    var t = this;
                    this.bannerState = H.GetBannerStatus(), this.uiRoot = this.owner, b.Instance.adView(this.uiRoot)
                        , this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close), this.uiRoot.VideoButton.on(Laya.Event.CLICK, this, this.onClick_Video)
                        , this.uiRoot.VideoIcon.visible = H.IsShowVideoIcon, H.IsButtonDelayStatus && (this.uiRoot.CloseButton.visible = !1
                            , this.errBanner(), setTimeout(function () {
                                t.uiRoot.CloseButton.visible = !0;
                            }, 3500));
                }
        }, {
                key: "errBanner"
                , value: function () {
                    Ht.Instance && H.IsBannerError(Ht.Instance.customTime) && setTimeout(function () {
                        H.ShowBanner(), setTimeout(function () {
                            H.HideBanner();
                        }, 1e3);
                    }, 300);
                }
        }, {
                key: "init"
                , value: function (t, e) {
                    this.normal = t, this.call = e, this.count = t ? 50 : 5, Le.PauseGame();
                }
        }, {
                key: "onClick_Video"
                , value: function () {
                    var t = this;
                    H.ShowVideo(function () {
                        t.normal ? (mt.NormalBullet += t.count, S.Instance.showLabelTips("获得子弹".concat(t.count))) : (mt.RocketBullet += t.count
                            , S.Instance.showLabelTips("获得炮弹".concat(t.count)));
                    });
                }
        }, {
                key: "onClick_Close"
                , value: function () {
                    this._hide(), B.Instance.playSound(m.Button);
                }
        }, {
                key: "_hide"
                , value: function () {
                    Le.ResumeGame(), this.uiRoot.close(), this.bannerState ? H.ShowBanner() : H.HideBanner()
                        , this.call && this.call(), H.ShowInterstitial();
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this.normal ? (this.uiRoot.NormalIcon.visible = !0, this.uiRoot.BulletName.text = "子弹x50") : (this.uiRoot.NormalIcon.visible = !1
                        , this.uiRoot.BulletName.text = "火箭炮弹x5"), this.uiRoot.RocketIcon.visible = !this.uiRoot.NormalIcon.visible;
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , pe = 500
        , me = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .uiRoot = null, t.win = !1, t.getGold = 0
                    , t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    var e = this;
                    this.uiRoot = this.owner, this.uiRoot.width = Laya.stage.width, this.uiRoot.height = Laya.stage.height
                        , this.uiRoot.pos(0, 0), this.win = t, this.getGold = t ? 200 : 50, t ? B.Instance.playSound(m.Success) : B.Instance.playSound(m.Fail)
                        , 99 != Le.Level && (Le.Level < rt.Level - 1 && (this.getGold = 0, pe = 200), this.uiRoot.NormalGoldBox_Label.text = this.getGold.toString()
                            , this.uiRoot.VideoGold_Label.text = pe.toString(), H.HideCustom([0]), H.HideBanner()
                            , this.uiRoot.alpha = 0, H.ShowWxCustomPage(function () {
                                e.uiRoot.alpha = 1, H.ShowBanner(), H.IsButtonDelayStatus && (e.uiRoot.CancelButton.visible = !1
                                    , setTimeout(function () {
                                        e.uiRoot.CancelButton.visible = !0;
                                    }, 3500));
                            }), this.uiRoot.VieoIcon.visible = H.IsShowVideoIcon);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this.uiRoot.WinBox.visible = this.win, this.uiRoot.FailBox.visible = !this.win
                        , this.uiRoot.VideoButton.on(Laya.Event.CLICK, this, this.onClick_VideoButton), this.uiRoot.CancelButton.on(Laya.Event.CLICK, this, this.onClick_CancelButton);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onClick_VideoButton"
                , value: function () {
                    var t = this;
                    H.ShowVideo(function () {
                        mt.Coin += pe, S.Instance.showLabelTips("获得".concat(pe, "金币")), t._hide();
                    });
                }
        }, {
                key: "onClick_CancelButton"
                , value: function () {
                    mt.Coin += this.getGold, S.Instance.showLabelTips("获得".concat(this.getGold, "金币"))
                        , this._hide();
                }
        }, {
                key: "_hide"
                , value: function () {
                    this.uiRoot.close(), H.OpenPage(R.CustomPage, function () {
                        H.ShowInterstitial(), Ne.SetWorldVisible(!1), we.Instance.showSceneByLaya(X.StartScene, !0)
                            , rt.SignInfo.isSign && we.Instance.showPopViewByLaya(j.SignView);
                    });
                }
        }]), a;
        }(Laya.Script)
        , ve = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .call = null, t.bannerState = !1
                    , t.gameState = !1, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {}
        }, {
                key: "init"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                        , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this.gameState = Le.IsPlaying, Le.PauseGame(), this.bannerState = H.GetBannerStatus()
                        , this.uiRoot = this.owner, b.Instance.adView(this.uiRoot), this.call = a, this.uiRoot.NameLabel.text = "".concat(t)
                        , this.uiRoot.InfoLabel.text = "", this.charAction(e), this.uiRoot.CloseButton.visible = !1
                        , this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.hide), H.HideBanner();
                }
        }, {
                key: "charAction"
                , value: function (t) {
                    for (var e = this, a = function (a) {
                            Laya.timer.once(70 * a, e, function () {
                                a == t.length - 1 && (e.uiRoot.CloseButton.visible = !0);
                                var n = e.uiRoot.InfoLabel.text + t[a];
                                e.uiRoot.InfoLabel.text = n;
                            });
                        }, n = 0; n < t.length; n++) a(n);
                }
        }, {
                key: "hide"
                , value: function () {
                    this.bannerState && H.ShowBanner(), this.uiRoot.close(), this.gameState && Le.ResumeGame()
                        , this.call && this.call();
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , ke = [{
            type: "Vest"
            , price: 200
            , image: "ObjIcon/防弹衣飞行器.png"
            , name: "防弹衣"
            , isBuy: !0
    }, {
            type: ut.HandGun
            , price: 2e3
            , image: "ObjIcon/HandGunUI.png"
            , name: "手枪"
            , isBuy: !0
    }, {
            type: ut.Ak
            , price: 4e3
            , image: "ObjIcon/AKUI.png"
            , name: "AK47自动步枪"
            , isBuy: !0
    }, {
            type: "Bullet"
            , price: 20
            , image: "ObjIcon/bullet.png"
            , name: "枪用子弹"
            , isBuy: !0
    }, {
            type: ut.JustinGatlin
            , price: 99999
            , image: "ObjIcon/JustinGatlinUI.png"
            , name: "加特林重机枪"
            , isBuy: !1
    }, {
            type: ut.RocketLauncher
            , price: 99999
            , image: "ObjIcon/RocketLauncherUI.png"
            , name: "火箭筒"
            , isBuy: !1
    }, {
            type: "HuoJianButton"
            , price: 20
            , image: "ObjIcon/huojian_bullet.png"
            , name: "火箭弹"
            , isBuy: !0
    }]
        , ge = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .bannerState = !1, t.shopArr = K.DeepClone(ke)
                    , t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.bannerState = H.GetBannerStatus(), H.HideBanner(), this.uiRoot = this.owner
                        , b.Instance.adView(this.uiRoot), this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close)
                        , this.uiRoot.LastButton.on(Laya.Event.CLICK, this, this.onClick_Last), this.uiRoot.NextButton.on(Laya.Event.CLICK, this, this.onClick_Next)
                        , this.uiRoot.BuyButton.on(Laya.Event.CLICK, this, this.onClick_Buy), this.setWeaponInfo()
                        , Le.PauseGame();
                }
        }, {
                key: "onClick_Last"
                , value: function () {
                    this.shopArr = K.MoveElement(this.shopArr, -1), this.updateWeaponInfo();
                }
        }, {
                key: "onClick_Next"
                , value: function () {
                    this.shopArr = K.MoveElement(this.shopArr, 1), this.updateWeaponInfo();
                }
        }, {
                key: "setWeaponInfo"
                , value: function () {
                    for (var t = this, e = function (e) {
                            var a = t.uiRoot["W_".concat(e)];
                            a.skin = ke[e].image, t.shopArr[e].node = a, t.shopArr[e].node.on(Laya.Event.CLICK, t, function () {
                                t.onTouchItem(a);
                            });
                        }, a = 0; a < ke.length; a++) e(a);
                }
        }, {
                key: "onTouchItem"
                , value: function (t) {
                    for (var e = -1, a = 0; a < this.shopArr.length; a++)
                        if (t == this.shopArr[a].node) {
                            e = a;
                            break;
                        }
                    var n = 2 - e;
                    0 != n && (this.shopArr = K.MoveElement(this.shopArr, n), this.updateWeaponInfo());
                }
        }, {
                key: "updateWeaponInfo"
                , value: function () {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 250, e = 0; e < this.shopArr.length; e++) 2 == e && (this.uiRoot.ObjName.text = "".concat(this.shopArr[e].name)
                        , this.uiRoot.BuyButton.visible = this.shopArr[e].isBuy, this.uiRoot.BuyButton.visible ? this.uiRoot.ObjMoney.text = "$".concat(this.shopArr[e].price) : this.uiRoot.ObjMoney.text = "游戏中获得"
                        , mt.IsHasGun(this.shopArr[e].type) && (this.uiRoot.ObjMoney.text = "已拥有", this.uiRoot.BuyButton.visible = !1));
                    this.setShopPos(t);
                }
        }, {
                key: "setShopPos"
                , value: function (t) {
                    for (var e = this, a = !1, n = 0; n < this.shopArr.length; n++) {
                        var i = this.shopArr[n].node
                            , o = this.uiRoot["P_".concat(n)];
                        Math.abs(i.x - o.x) >= 1e3 ? (i.pos(o.x, o.y), i.scaleX = i.scaleY = 2 == n ? 1.8 : 1) : (a = !0
                            , Laya.Tween.to(i, {
                                x: o.x
                                , y: o.y
                                , scaleX: 2 == n ? 1.8 : 1
                                , scaleY: 2 == n ? 1.8 : 1
                            }, t));
                    }
                    a ? (this.uiRoot.LastButton.visible = !1, this.uiRoot.NextButton.visible = !1, Laya.timer.once(t, this, function () {
                        e.uiRoot.LastButton.visible = !0, e.uiRoot.NextButton.visible = !0;
                    })) : (this.uiRoot.LastButton.visible = !0, this.uiRoot.NextButton.visible = !0);
                }
        }, {
                key: "onClick_Buy"
                , value: function () {
                    var t = this.shopArr[2]
                        , e = t.price;
                    if (mt.Coin < e) we.Instance.showPopViewByLaya(j.FreeGoldView);
                    else {
                        switch (mt.Coin -= e, t.type) {
                        case ut.HandGun:
                            mt.GetGun(t.type), S.Instance.showLabelTips("获得手枪,请在游戏中体验");
                            break;

                        case ut.Ak:
                            mt.GetGun(t.type), S.Instance.showLabelTips("获得AK自动步枪,请在游戏中体验"), mt.NormalBullet += 100;
                            break;

                        case "Bullet":
                            mt.NormalBullet += 100, S.Instance.showLabelTips("获得枪子弹X100");
                            break;

                        case "HuoJianButton":
                            mt.RocketBullet += 2, S.Instance.showLabelTips("获得火箭筒子弹X2");
                            break;

                        case "Vest":
                            mt.Vest += 1, S.Instance.showLabelTips("获得一件防弹衣"), $.emit(z.GetVest);
                        }
                        this.updateWeaponInfo();
                    }
                }
        }, {
                key: "onClick_Close"
                , value: function () {
                    B.Instance.playSound(m.Button), this._hide();
                }
        }, {
                key: "_hide"
                , value: function () {
                    this.uiRoot.close(), this.bannerState && H.ShowBanner(), Le.ResumeGame();
                }
        }, {
                key: "onEnable"
                , value: function () {
                    Laya.timer.once(200, this, this.updateWeaponInfo.bind(this));
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , Ie = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .type = null, t.bannerState = !1
                    , t.call = null, t.gameState = Le.IsPlaying, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    var t = this;
                    this.uiRoot = this.owner, b.Instance.adView(this.uiRoot), this.bannerState = H.GetBannerStatus()
                        , H.HideBanner(), Le.PauseGame(), H.IsButtonDelayStatus && (this.uiRoot.CloseButton.visible = !1
                            , this.errBanner(), Laya.timer.once(3500, this, function () {
                                t.uiRoot.CloseButton.visible = !0;
                            }, null, !1)), this.uiRoot.VideoIcon.visible = H.IsShowVideoIcon;
                }
        }, {
                key: "errBanner"
                , value: function () {
                    Ht.Instance && H.IsBannerError(Ht.Instance.customTime) && setTimeout(function () {
                        H.ShowBanner(), setTimeout(function () {
                            H.HideBanner();
                        }, 1e3);
                    }, 300);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    var t = this.WeaponInfo;
                    this.uiRoot.WeaponName.text = "", this.uiRoot.SkillIcon.skin = "", t && (this.uiRoot.WeaponName.text = t.name
                            , this.uiRoot.SkillIcon.skin = t.image), this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close)
                        , this.uiRoot.VideoButton.on(Laya.Event.CLICK, this, this.onClick_Video);
                }
        }, {
                key: "init"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.type = t, this.call = e;
                }
        }, {
                key: "onClick_Video"
                , value: function () {
                    var t = this;
                    H.ShowVideo(function () {
                        mt.GetGun(t.type), ze.Instance.myAtkType = t.type, t._hide(), S.Instance.showLabelTips("恭喜获得新的武器！")
                            , t.type == ut.RocketLauncher ? mt.RocketBullet += 2 : mt.NormalBullet += 100;
                    });
                }
        }, {
                key: "onClick_Close"
                , value: function () {
                    B.Instance.playSound(m.Button), this._hide();
                }
        }, {
                key: "_hide"
                , value: function () {
                    this.uiRoot.close(), this.bannerState && H.ShowBanner(), this.gameState && Le.ResumeGame()
                        , this.call && this.call(), H.ShowInterstitial();
                }
        }, {
                key: "WeaponInfo"
                , get: function () {
                    for (var t = 0; t < ke.length; t++)
                        if (ke[t].type == this.type) return ke[t];
                    return null;
                }
        }]), a;
        }(Laya.Script);
    ! function (t) {
        t[t.LinKen = 0] = "LinKen", t[t.Fly = 1] = "Fly";
    }(fe || (fe = {}));
    var _e = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .skill = null, t.call = null
                    , t.bannerState = !1, t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.uiRoot = this.owner, this.bannerState = H.GetBannerStatus(), H.ShowBanner()
                        , b.Instance.adView(this.uiRoot), this.skill = t, this.uiRoot.VideoIcon.visible = H.IsShowVideoIcon
                        , this.call = e, this.addListen();
                }
        }, {
                key: "addListen"
                , value: function () {
                    this.uiRoot.VideoButton.once(Laya.Event.CLICK, this, this.onClick_Video), this.uiRoot.CloseButton.once(Laya.Event.CLICK, this, this.onClick_Cancel);
                }
        }, {
                key: "onClick_Video"
                , value: function () {
                    var t = this;
                    B.Instance.playSound(m.Button), H.ShowVideo(function () {
                        B.Instance.playSound(m.Get0), S.Instance.showLabelTips("技能解锁成功"), t.hide();
                    }, function () {
                        t.uiRoot.VideoButton.once(Laya.Event.CLICK, t, t.onClick_Video);
                    }, function () {
                        t.uiRoot.VideoButton.once(Laya.Event.CLICK, t, t.onClick_Video);
                    });
                }
        }, {
                key: "onClick_Cancel"
                , value: function () {
                    B.Instance.playSound(m.Button), this.hide();
                }
        }, {
                key: "hide"
                , value: function () {
                    this.bannerState || H.HideBanner(), this.call && this.call(), this.uiRoot.close();
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , Ce = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    ._uiScene = null, t._camera = null
                    , t._role = null, t.bannerState = H.GetBannerStatus(), t.car_index = 0, t.car_id = 0
                    , t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.uiRoot = this.owner, b.Instance.adView(this.uiRoot);
                }
        }, {
                key: "init"
                , value: function (t, e) {
                    this.car_index = t, this.car_id = e;
                }
        }, {
                key: "onEnable"
                , value: function () {
                    var t = this;
                    this.initRole(), this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Cancel)
                        , this.uiRoot.VideoButton.once(Laya.Event.CLICK, this, this.onClick_Video), H.HideBanner()
                        , Le.PauseGame(), H.IsButtonDelayStatus && (this.uiRoot.CloseButton.visible = !1
                            , this.errBanner(), Laya.timer.once(3500, this, function () {
                                t.uiRoot.CloseButton.visible = !0;
                            }, null, !1));
                }
        }, {
                key: "errBanner"
                , value: function () {
                    Ht.Instance && H.IsBannerError(Ht.Instance.customTime) && setTimeout(function () {
                        H.ShowBanner(), setTimeout(function () {
                            H.HideBanner();
                        }, 1e3);
                    }, 300);
                }
        }, {
                key: "onClick_Video"
                , value: function () {
                    var t = this;
                    if (!(ze.Instance.moveControl.state == Ae.Car || ze.Instance.moveControl.isNormalState && ze.Instance.moveControl.isGround)) return S.Instance.showLabelTips("玩家没有着地不能驾驶车辆")
                        , void this.hide();
                    H.ShowVideo(function () {
                        Le.ResumeGame(), t.success();
                    }, function () {
                        t.uiRoot.VideoButton.once(Laya.Event.CLICK, t, t.onClick_Video);
                    }, function () {
                        t.uiRoot.VideoButton.once(Laya.Event.CLICK, t, t.onClick_Video);
                    }), B.Instance.playSound(m.Button);
                }
        }, {
                key: "onClick_Cancel"
                , value: function () {
                    Le.ResumeGame(), this.hide(), B.Instance.playSound(m.Button);
                }
        }, {
                key: "hide"
                , value: function () {
                    this.bannerState && H.ShowBanner(), this.uiRoot.close(), K.Random(0, 1e3) % 3 && H.ShowInterstitial();
                }
        }, {
                key: "success"
                , value: function () {
                    Ve.Instance.getTryCars(this.car_index, this.car_id), B.Instance.playSound(m.Get0)
                        , this.hide(), we.Instance.showDialogBox("道路千万条，安全第一条，\n行车不规范，亲人两行泪。", "交警提醒");
                }
        }, {
                key: "initRole"
                , value: function () {
                    var t = this;
                    this._uiScene = new Laya.Scene3D(), this.uiRoot.addChild(this._uiScene);
                    var e = Ne.World.getChildByName("Car");
                    if (e) {
                        var a = e.getChildByName("car".concat(this.car_id));
                        if (a) {
                            this._role = a.clone(), this._uiScene.addChild(this._role);
                            var n = new Laya.DirectionLight();
                            this._uiScene.addChild(n), this._camera = new Laya.Camera(), this._uiScene.addChild(this._camera)
                                , this._camera.nearPlane = .1, this._camera.transform.position = new Laya.Vector3(0, 0, 3)
                                , this._camera.clearFlag = Laya.CameraClearFlags.DepthOnly, this._camera.orthographic = !0
                                , Laya.timer.once(50, this, function () {
                                    t._role.active = !0;
                                    var e = new Laya.Vector3(t.uiRoot.carIcon.x, t.uiRoot.carIcon.y, 0);
                                    t._camera.convertScreenCoordToOrthographicCoord(e, e), t._role.transform.position = new Laya.Vector3(e.x, e.y, 0)
                                        , t._role.transform.rotationEuler = new Laya.Vector3(0, 45, 0);
                                }, null, !1), this._role.transform.localScale = new Laya.Vector3(1.3, 1.3, 1.3);
                        }
                    }
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , we = function () {
            function t() {
                (0, s.default)(this, t), this.freeMpCD = !1, this.freeBodyCD = !1, this.tryCD = !1
                    , this.inBuyBulletView = !1;
            }
            return (0, r.default)(t, [{
                key: "showSceneByLaya"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    Laya.Scene.open(t, e, null, Laya.Handler.create(this, function () {
                        a && a();
                    }));
                }
        }, {
                key: "showPopViewByLaya"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    Laya.Dialog.open(t, e, null, Laya.Handler.create(this, function () {
                        a && a();
                    }));
                }
        }, {
                key: "showEndView"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                        , e = new I.PopView.EndViewUI();
                    e.addComponent(me)
                        .init(t), e.popup(!1, !0);
                }
        }, {
                key: "showDialogBox"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                        , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                        , n = new I.PopView.DialogNPCUI();
                    n.addComponent(ve)
                        .init(e, t, a), n.zOrder = 100, n.popup(!1, !0);
                }
        }, {
                key: "showFreeMpView"
                , value: function () {
                    var t = this;
                    de.Instance.level_control.teachEnd && (this.freeMpCD || (this.freeMpCD = !0, setTimeout(function () {
                        t.showPopViewByLaya(j.FreeMpView);
                    }, 500), setTimeout(function () {
                        t.freeMpCD = !1;
                    }, 3e3)));
                }
        }, {
                key: "showFreeBodyView"
                , value: function () {
                    var t = this;
                    de.Instance.level_control.teachEnd && (this.freeBodyCD || (this.freeBodyCD = !0
                        , setTimeout(function () {
                            t.showPopViewByLaya(j.FreeBodyView);
                        }, 500), setTimeout(function () {
                            t.freeBodyCD = !1;
                        }, 3e3)));
                }
        }, {
                key: "showLockView"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                        , a = new I.PopView.SkillLockViewUI();
                    a.addComponent(_e)
                        .init(t, e), a.popup(!1, !0);
                }
        }, {
                key: "showTryCarView"
                , value: function (t, e) {
                    var a = this;
                    if (de.Instance.level_control.teachEnd && !this.tryCD) {
                        this.tryCD = !0, Laya.timer.once(3e3, this, function () {
                            a.tryCD = !1;
                        });
                        var n = new I.PopView.TryCarViewUI();
                        n.addComponent(Ce)
                            .init(t, e), n.popup(!1, !0);
                    }
                }
        }, {
                key: "showBuyBulletView"
                , value: function () {
                    var t = this
                        , e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                        , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!this.inBuyBulletView) {
                        this.inBuyBulletView = !0;
                        var n = new I.PopView.BuyBulletViewUI();
                        n.addComponent(ye)
                            .init(e, function () {
                                t.inBuyBulletView = !1, a && a(), console.log("call showBuyBulletView");
                            }), n.popup(!1, !0);
                    }
                }
        }, {
                key: "showBuyWeaponView"
                , value: function (t) {
                    var e = this
                        , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!this.inBuyBulletView) {
                        this.inBuyBulletView = !0;
                        var n = new I.PopView.TryWeaponViewUI();
                        n.addComponent(Ie)
                            .init(t, function () {
                                e.inBuyBulletView = !1, a && a();
                            }), n.popup(!1, !0);
                    }
                }
        }], [{
                key: "Instance"
                , get: function () {
                    return this._Instance || (this._Instance = new t()), this._Instance;
                }
        }]), t;
        }();
    we._Instance = null;
    var Le = function () {
        function t() {
            (0, s.default)(this, t);
        }
        return (0, r.default)(t, null, [{
            key: "StartGame"
            , value: function (t) {
                var e = this;
                H.OpenPage(R.LuckBoxPage, function () {
                    we.Instance && ze.Instance ? (H.ShowCustom([0]), H.HideBanner(), e.Level = t
                        , Ne.SetWorldVisible(!0), we.Instance.showSceneByLaya(X.GameScene, !0, function () {
                            ze.Instance.startGame(t), Ve.Instance.startGame(), e.state = e.PlayingState;
                        })) : Laya.timer.once(100, e, function () {
                        e.StartGame(t);
                    });
                }, function () {
                    mt.Coin += 100, mt.NormalBullet += 20, S.Instance.showLabelTips("获得金币x100"), S.Instance.showLabelTips("获得普通子弹x20");
                });
            }
        }, {
            key: "PauseGame"
            , value: function () {
                this.IsPlaying && (ze.Instance.moveControl.playAnim(Te.idle), this.state = this.PauseState);
            }
        }, {
            key: "ResumeGame"
            , value: function () {
                this.state != this.StopState && (this.state = this.PlayingState);
            }
        }, {
            key: "StopGame"
            , value: function () {
                this.state = this.StopState;
            }
        }, {
            key: "GameEnd"
            , value: function (t) {
                this.state != this.StopState && (t && B.Instance.playSound(m.Get0), this.StopGame()
                    , we.Instance.showEndView(t));
            }
        }, {
            key: "IsPlaying"
            , get: function () {
                return this.state == t.PlayingState;
            }
        }]), t;
    }();
    Le.PlayingState = "1", Le.StopState = "2", Le.PauseState = "3", Le.state = Le.StopState
        , Le.Level = 0;
    var Se = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "onEnable"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onEnable", this)
                    .call(this);
                }
        }, {
                key: "initRoad"
                , value: function (t, e, n) {
                    (0, o.default)((0, u.default)(a.prototype), "initRoad", this)
                    .call(this, t, e, n)
                        , this.runIndex = 0, this.waitTime = 0, t.length && (this.runIndex = K.Random(0, 1e3) % this.roadPos.length
                            , this.transform.position = this.roadPos[this.runIndex]);
                }
        }, {
                key: "onInit"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    Le.IsPlaying && this.root && (this.hp <= 0 ? this.currSpeed = 0 : ((0, o.default)((0
                            , u.default)(a.prototype), "update", this)
                        .call(this, t), this.waitTime > 0 && (this.waitTime -= t
                            , this.waitTime = K.Clamp(this.waitTime, 0, 9999), this.state = Bt.Stop, 0 == this.waitTime && (this.currSpeed = .5
                                , this.state = Bt.Move)), this.move(t), this._frame % 30 == 0 && this.getDisByPlayer() <= 12 && B.Instance.playSound(m.car_didi)));
                }
        }, {
                key: "move"
                , value: function (t) {
                    if (0 != Laya.timer.scale) {
                        this.houLun && (this.houLun.transform.localRotationEulerX += this.currSpeed), this.qianLun && (this.qianLun.transform.localRotationEulerX += this.currSpeed);
                        var e = this.roadPos[(this.runIndex + 1) % this.roadPos.length]
                            , a = this.transform.position
                            , n = new Laya.Vector3();
                        Laya.Vector3.subtract(e, a, n), Laya.Vector3.normalize(n, n);
                        var i = Laya.Vector3.distance(a, e);
                        switch (this.state) {
                        case Bt.Move:
                            this.currSpeed += this.addSpeed * t;
                            break;

                        case Bt.Stop:
                            this.currSpeed -= this.subSpeed * t;
                        }
                        if (!(this.currSpeed <= 0)) {
                            var o = this.currSpeed * t;
                            o > i && (o = i, this.runIndex++), Laya.Vector3.scale(n, o, n), this.root.transform.translate(n, !1);
                            var s = F.GetForward(this.root);
                            Laya.Vector3.scale(s, -1, s);
                            var r = F.toAngle(s, n);
                            F.Cross(s, n)
                                .y < 0 && (r *= -1), this.root.transform.rotate(new Laya.Vector3(0, 4 * r * t, 0), !1, !1)
                                , this._frame % 180 == 0 && this.getDisByPlayer();
                        }
                    }
                }
        }, {
                key: "death"
                , value: function () {
                    Ve.Instance.deleteCar(this), Ve.Instance.creatNewCar(this.roadTag, 3), (0, o.default)((0
                            , u.default)(a.prototype), "death", this)
                        .call(this);
                }
        }]), a;
        }(At)
        , be = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.owner);
                    t && (t.collisionGroup = N.Car, t.canCollideWith = N.Human, t.isTrigger = !0);
                }
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    var e = this.root.parent.getComponent(Be);
                    e && e.showGetCar();
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Y)
        , Be = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .try_index = 0, t.car_id = 0
                    , t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function (t, e) {
                    this.try_index = t, this.car_id = e;
                    var a = F.GetComponentInChildren(Laya.PhysicsCollider, this.owner);
                    a && (a.collisionGroup = N.Car, a.canCollideWith = N.Human);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    var t = this.root.getChildByName("car_fx");
                    t && (t.active = !0, t.addComponent(be));
                }
        }, {
                key: "showGetCar"
                , value: function () {
                    console.log("展示车辆页面"), we.Instance.showTryCarView(this.try_index, this.car_id);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Y)
        , Ve = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .allRoads = [], t.cars = [], t.tryCarRoadNodes = []
                    , t.tryCarSprites = [], t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this), this.transform.position = new Laya.Vector3(0, 0, 0)
                        , a.Instance = this, this.loadAllRoads(), this.loadAllTryRoadNodes();
                }
        }, {
                key: "loadAllRoads"
                , value: function () {
                    var t = Ne.World.getChildByName("CarRoad");
                    if (t)
                        for (var e = 0; e < t.numChildren; e++) {
                            var a = t.getChildAt(e);
                            a.numChildren && this.allRoads.push([]);
                            for (var n = 0; n < a.numChildren; n++) {
                                var i = a.getChildAt(n);
                                this.allRoads[e][n] = i.transform.position.clone();
                            }
                        }
                }
        }, {
                key: "loadAllTryRoadNodes"
                , value: function () {
                    var t = Ne.World.getChildByName("Map")
                        .getChildByName("TryCar");
                    if (t)
                        for (var e = 0; e < t.numChildren; e++) this.tryCarRoadNodes.push(t.getChildAt(e));
                }
        }, {
                key: "createTryCar"
                , value: function (t) {
                    var e = this.tryCarSprites[t];
                    if (!e || e.destroyed) {
                        var a = K.Random(0, 1e3) % 4
                            , n = Ne.World.getChildByName("Car");
                        if (n) {
                            var i = n.getChildByName("car".concat(a));
                            i && (i = i.clone(), Ne.World.addChild(i), i.transform.localPosition = this.tryCarRoadNodes[t].transform.position.clone()
                                , i.transform.localRotationEuler = new Laya.Vector3(0, K.Random(0, 180), 0), i.active = !0
                                , i.addComponent(Be)
                                .init(t, a), this.tryCarSprites[t] = i);
                        }
                    }
                }
        }, {
                key: "clearTryCars"
                , value: function (t) {
                    var e = this.tryCarSprites[t];
                    e && !e.destroyed && e.destroy(!0), this.tryCarSprites[t] = null;
                }
        }, {
                key: "clearAllTryCars"
                , value: function () {
                    for (var t = 0; t < this.tryCarSprites.length; t++) this.tryCarSprites[t] && !this.tryCarSprites[t].destroyed && (this.tryCarSprites[t].destroy(!0)
                        , this.tryCarSprites[t] = null);
                }
        }, {
                key: "getTryCars"
                , value: function (t, e) {
                    console.log("".concat(t, ",getTryCars,")
                        .concat(e)), this.clearTryCars(t), ze.Instance.startCar(t, e);
                }
        }, {
                key: "putDownTryCar"
                , value: function (t) {
                    var e = this;
                    Laya.timer.once(200, this, function () {
                        e.createTryCar(t);
                    });
                }
        }, {
                key: "startGame"
                , value: function () {
                    this.clearAllCar(), Laya.timer.clearAll(this);
                    for (var t = 0; t < this.allRoads.length; t++) this.creatNewCar(t);
                    this.clearAllTryCars();
                    for (var e = 0; e < this.tryCarRoadNodes.length; e++) this.creatNormalNewCar(e);
                }
        }, {
                key: "creatNormalNewCar"
                , value: function (t) {
                    var e = Ne.World.getChildByName("Car")
                        , a = K.Random(0, 1e3) % 6;
                    if (6 == t && (a = 6), !e) return null;
                    var n = e.getChildByName("car".concat(a));
                    if (!n) return null;
                    n = n.clone(), this.root.addChild(n), n.transform.position = this.tryCarRoadNodes[t].transform.position.clone()
                        , n.transform.localRotationEuler = new Laya.Vector3(0, K.Random(0, 180), 0), n.active = !0;
                    var i = n.addComponent(At);
                    return i.initRoad(null, null, a, t), this.addCar(i), n;
                }
        }, {
                key: "getCar"
                , value: function (t) {
                    if (-1 != this.cars.indexOf(t)) {
                        var e = ze.Instance.startCar(t.stopIndex, t.carSkinIndex);
                        console.log("getCar", t.carSkinIndex), e && (-1 == t.stopIndex && (console.log(t.roadTag, this.allRoads[t.roadTag])
                            , this.creatNewCar(t.roadTag, 2)), this.deleteCar(t), t.destroyByDriver(), console.log(t.root));
                    }
                }
        }, {
                key: "putDownCar"
                , value: function (t) {
                    -1 != t && null != t && this.creatNormalNewCar(t);
                }
        }, {
                key: "creatNewCar"
                , value: function (t) {
                    var e = this
                        , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (this.allRoads.length) {
                        var n = Ne.World.getChildByName("Car");
                        n && Laya.timer.once(1e3 * a, this, function () {
                            var a = K.Random(0, 1e3) % n.numChildren;
                            6 == a && (a = 0);
                            var i = n.getChildByName("car".concat(a));
                            if (i) {
                                i = i.clone(), e.root.addChild(i), i.active = !0;
                                var o = i.addComponent(Se);
                                o.initRoad(e.allRoads[t], t, a), e.addCar(o);
                            }
                        });
                    }
                }
        }, {
                key: "normalStopCarDeath"
                , value: function (t) {
                    var e = this.creatNormalNewCar(t);
                    e && (e.active = !1, Laya.timer.once(5e3, this, function () {
                        e && !e.destroyed && (e.active = !0);
                    }));
                }
        }, {
                key: "addCar"
                , value: function (t) {
                    -1 == this.cars.indexOf(t) && this.cars.push(t);
                }
        }, {
                key: "deleteCar"
                , value: function (t) {
                    var e = this.cars.indexOf(t); -
                    1 != e && this.cars.splice(e, 1);
                }
        }, {
                key: "clearAllCar"
                , value: function () {
                    for (var t = this.cars.length - 1; t >= 0; t--) this.cars[t].destroyByDriver();
                }
        }, {
                key: "mixNearCar"
                , get: function () {
                    for (var t = null, e = 99999, a = new Laya.Vector3(), n = 0; n < this.cars.length; n++) {
                        var i = this.cars[n];
                        if (i && !i.destroyed) {
                            Laya.Vector3.subtract(i.root.transform.position, ze.Instance.transform.position, a);
                            var o = Laya.Vector3.scalarLengthSquared(a);
                            o < e && (e = o, t = i);
                        }
                    }
                    return t && Math.sqrt(e) <= 3 ? t : null;
                }
        }]), a;
        }(Y);
    Ve.Instance = null;
    var Re = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .box = null, t;
            }
            return (0, r.default)(a, [{
                key: "onEnable"
                , value: function () {
                    this.box || (this.box = Ne.World.getChildByName("Map")
                        .getChildByName("JiaTeLinColliderBox"));
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    this._frame % 60 == 0 && (this.box.active = !mt.IsHasGun(ut.JustinGatlin));
                }
        }]), a;
        }(Y)
        , xe = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.root);
                    t && (t.canCollideWith = N.Human, t.collisionGroup = N.RoadPos, t.isTrigger = !0);
                }
        }]), (0, r.default)(a, [{
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    t.collisionGroup == N.Human && we.Instance.showBuyWeaponView(ut.JustinGatlin);
                }
        }]), a;
        }(Y)
        , Pe = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .cd = !1, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.root);
                    t && (t.canCollideWith = N.Human, t.collisionGroup = N.RoadPos);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    a.MedicalCD || t.collisionGroup == N.Human && this._getHp();
                }
        }, {
                key: "onTriggerStay"
                , value: function (t) {}
        }, {
                key: "_getHp"
                , value: function () {
                    de.Instance.level_control.teachEnd && Le.IsPlaying && (K.Random(0, 1e3) % 3 ? we.Instance.showPopViewByLaya(j.VideoHpRewardView) : we.Instance.showPopViewByLaya(j.FreeBodyView));
                }
        }, {
                key: "update"
                , value: function (t) {
                    this.root.transform.localRotationEulerY += 1;
                }
        }]), a;
        }(Y);
    Pe.MedicalCD = !1;
    var Ae, Te, Ue = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .box = null, t;
            }
            return (0, r.default)(a, [{
                key: "onEnable"
                , value: function () {
                    this.box || (this.box = Ne.World.getChildByName("Map")
                        .getChildByName("HuojianColliderBox"));
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    this._frame % 60 == 0 && (this.box.active = !mt.IsHasGun(ut.RocketLauncher));
                }
        }]), a;
        }(Y)
        , Ee = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.root);
                    t && (t.canCollideWith = N.Human, t.collisionGroup = N.RoadPos, t.isTrigger = !0);
                }
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    t.collisionGroup == N.Human && we.Instance.showBuyWeaponView(ut.RocketLauncher);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Y)
        , De = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.PhysicsCollider, this.root);
                    t && (t.canCollideWith = N.Human, t.collisionGroup = N.RoadPos, t.isTrigger = !0);
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    t.collisionGroup == N.Human && we.Instance.showPopViewByLaya(j.ShopWeaponView);
                }
        }]), a;
        }(Y)
        , Ge = Laya.Shader3D
        , Me = Laya.SubShader
        , He = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .MAIN_TEX = Ge.propertyNameToID("u_MainTex")
                    , t.NOISE_TEX = Ge.propertyNameToID("u_NoiseTex"), t.TIME = Ge.propertyNameToID("u_Time")
                    , t.setShaderName("Water"), t.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT
                    , t.alphaTest = !1, t._shaderValues.setBool(Laya.Material.DEPTH_WRITE, !1), t._shaderValues.setInt(Laya.Material.CULL, Laya.RenderState.CULL_BACK)
                    , t._shaderValues.setInt(Laya.Material.BLEND, Laya.RenderState.BLEND_ENABLE_ALL)
                    , t._shaderValues.setInt(Laya.Material.BLEND_SRC, Laya.RenderState.BLENDPARAM_SRC_ALPHA)
                    , t._shaderValues.setInt(Laya.Material.BLEND_DST, Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA)
                    , t._shaderValues.setInt(Laya.Material.DEPTH_TEST, Laya.RenderState.DEPTHTEST_LESS)
                    , t;
            }
            return (0, r.default)(a, [{
                key: "mainTex"
                , set: function (t) {
                    this._shaderValues.setTexture(this.MAIN_TEX, t);
                }
        }, {
                key: "noiseTex"
                , set: function (t) {
                    this._shaderValues.setTexture(this.NOISE_TEX, t);
                }
        }, {
                key: "uTime"
                , set: function (t) {
                    this._shaderValues.setNumber(this.TIME, t);
                }
        }], [{
                key: "initShader"
                , value: function () {
                    var t = {
                            a_Position: Laya.VertexMesh.MESH_POSITION0
                            , a_Normal: Laya.VertexMesh.MESH_NORMAL0
                            , a_Textcoord: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
                        }
                        , e = {
                            u_WorldMat: Ge.PERIOD_SPRITE
                            , u_MvpMatrix: Ge.PERIOD_SPRITE
                            , u_MainTex: Ge.PERIOD_MATERIAL
                            , u_NoiseTex: Ge.PERIOD_MATERIAL
                            , u_Time: Ge.PERIOD_SCENE
                        }
                        , a = Ge.add("Water", null, null, !0)
                        , n = new Me(t, e)
                        , i = {
                            s_Cull: Ge.RENDER_STATE_CULL
                            , s_Blend: Ge.RENDER_STATE_BLEND
                            , s_BlendSrc: Ge.RENDER_STATE_BLEND_SRC
                            , s_BlendDst: Ge.RENDER_STATE_BLEND_DST
                            , s_DepthTest: Ge.RENDER_STATE_DEPTH_TEST
                            , s_DepthWrite: Ge.RENDER_STATE_DEPTH_WRITE
                        };
                    a.addSubShader(n), n.addShaderPass('\n        #include "Lighting.glsl";\n        \n        attribute vec4 a_Position;\n        attribute vec2 a_Textcoord;\n        uniform mat4 u_WorldMat;\n        uniform mat4 u_MvpMatrix;\n        \n        varying vec2 v_textcoord;\n        \n        void main()\n        {\n            v_textcoord = a_Textcoord;\n            gl_Position = u_MvpMatrix * a_Position;\n            gl_Position = remapGLPositionZ(gl_Position);\n        }', '\n        #ifdef HIGHPRECISION\n        precision highp float;\n        #else\n        precision mediump float;\n        #endif\n\n        #include "Lighting.glsl";\n        \n        uniform sampler2D u_MainTex;\n        uniform sampler2D u_NoiseTex;\n        uniform float u_Time;\n\n        varying vec2 v_textcoord;\n        void main()\n        {\n            float _NoiseSpeedX = 0.02;\n            float _NoiseSpeedY = 0.02;\n            float _NoiseScaleX = 0.99;\n            float _NoiseScaleY = 0.99;\n            float _NoiseBrightOffset = 0.25;\n            vec2 tuv1 = v_textcoord + vec2(u_Time * _NoiseSpeedX,0);\n            vec2 tuv2 = v_textcoord + vec2(0,u_Time * _NoiseSpeedY);\n            vec2 ouvxy = vec2(texture2D(u_NoiseTex,tuv1).r,texture2D(u_NoiseTex,tuv2).r);\n            ouvxy -= _NoiseBrightOffset;\n            ouvxy *= vec2(_NoiseScaleX, _NoiseScaleY);\n\n            vec4 col = texture2D(u_MainTex,v_textcoord + ouvxy);\n            col.a = 0.5;\n            gl_FragColor = col;\n        }\n        ', i);
                }
        }]), a;
        }(Laya.Material)
        , Ne = function () {
            function t() {
                (0, s.default)(this, t);
            }
            return (0, r.default)(t, null, [{
                key: "AddWorld"
                , value: function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    e && (this.World || (a = a || Laya.stage, t.WorldParent = a, this.World = e, a.addChild(e)
                        , a.setChildIndex(e, 0), console.log(this.World), this.SetShadow(this.World, !1)
                        , this.AddActionManager(this.World), this.AddWorldBorderColliderGroup(), this.World.addComponent(Re)
                        , this.World.addComponent(Ue)));
                }
        }, {
                key: "AddWorldBorderColliderGroup"
                , value: function () {
                    var t = this.World.getChildByName("Map")
                        .getChildByName("border");
                    if (t)
                        for (var e = F.GetComponentsInChildren(Laya.PhysicsCollider, t), a = 0; a < e.length; a++) e[a].canCollideWith = N.Human
                            , e[a].collisionGroup = N.Border;
                    var n = this.World.getChildByName("Map")
                        .getChildByName("jianzhu");
                    if (n)
                        for (var i = F.GetComponentsInChildren(Laya.PhysicsCollider, n), o = 0; o < i.length; o++) i[o].canCollideWith = N.Human
                            , i[o].collisionGroup = N.Build;
                }
        }, {
                key: "RemoveWorld"
                , value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.World && (t.WorldParent.removeChild(this.World), e && this.World.destroy(!0)
                        , this.World = null);
                }
        }, {
                key: "SetWorldVisible"
                , value: function (t) {
                    this.World && (this.World.active = t);
                }
        }, {
                key: "SetShadow"
                , value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                        , a = t.numChildren;
                    t instanceof Laya.LightSprite && (e ? (t.shadowMode = Laya.ShadowMode.Hard, t.shadowStrength = .6
                        , t.shadowDistance = 90) : t.shadowMode = Laya.ShadowMode.None);
                    for (var n = 0; n < a; n++) {
                        var i = t.getChildAt(n);
                        this.SetShadow(i, e);
                    }
                }
        }, {
                key: "AddActionManager"
                , value: function (t) {
                    if (t)
                        for (var e = t.numChildren, a = 0; a < e; a++) {
                            var n = t.getChildAt(a);
                            switch (n.name) {
                            case "Player":
                                n.addComponent(ze);
                                break;

                            case "MapLevel":
                                n.addComponent(de);
                                break;

                            case "CarManager":
                                n.addComponent(Ve);
                                break;

                            case "Key_yiliaobao":
                                !n.getComponent(Pe) && n.addComponent(Pe);
                                break;

                            case "WeaponShopCollider":
                                !n.getComponent(De) && n.addComponent(De);
                                break;

                            case "HuojianCollider":
                                !n.getComponent(Ee) && n.addComponent(Ee);
                                break;

                            case "JiaTeLinCollider":
                                !n.getComponent(xe) && n.addComponent(xe);
                            }
                            this.AddActionManager(n);
                        }
                }
        }, {
                key: "AddWater"
                , value: function (t) {
                    if (t instanceof Laya.MeshSprite3D) {
                        if (-1 == t.meshRenderer.material.name.indexOf("water")) return;
                        Laya.loader.create(["res/water/shuibo.jpg", "res/water/Water.jpg"], Laya.Handler.create(this, function () {
                            He.initShader();
                            var e = new He();
                            e.mainTex = Laya.loader.getRes("res/water/Water.jpg"), e.noiseTex = Laya.loader.getRes("res/water/shuibo.jpg")
                                , t.meshRenderer.material = e;
                        }));
                    }
                }
        }, {
                key: "FxParent"
                , get: function () {
                    return this.World.getChildByName("Fx");
                }
        }]), t;
        }();
    Ne.World = null, Ne.WorldParent = null;
    var Fe = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .dir = new Laya.Vector3(), t.speed = 200
                    , t.time = .5, t;
            }
            return (0, r.default)(a, [{
                key: "onEnable"
                , value: function () {}
        }, {
                key: "init"
                , value: function (t, e) {
                    this.root || (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                        .call(this)
                        , this.root.transform.position = t, Laya.Vector3.subtract(e, t, this.dir), Laya.Vector3.normalize(this.dir, this.dir);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    if (!this.root.destroyed)
                        if (this.time -= t, this.time <= 0) this.root.destroy(!0);
                        else if (this.dir) {
                        var e = new Laya.Vector3();
                        Laya.Vector3.scale(this.dir, t * this.speed, e), this.transform.translate(e, !1);
                    }
                }
        }]), a;
        }(Y)
        , Oe = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.apply(this, arguments);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    var t = F.GetComponentInChildren(Laya.Rigidbody3D, this.root);
                    t && (t.canCollideWith = N.Car | N.Enemy | N.People | N.Police, t.collisionGroup = N.Human
                        , t.isTrigger = !0);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    var t = this;
                    Laya.timer.once(1e3, this, function () {
                        t.root.destroy(!0);
                    });
                }
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    Le.IsPlaying && ze.Instance.atk2Obj(t.owner, t.collisionGroup, 100);
                }
        }]), a;
        }(Y)
        , We = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .dir = new Laya.Vector3(), t.speed = 100
                    , t.time = 3, t.stop = !1, t;
            }
            return (0, r.default)(a, [{
                key: "onEnable"
                , value: function () {}
        }, {
                key: "init"
                , value: function (t, e) {
                    this.root || (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                        .call(this)
                        , this.root.transform.position = t, Laya.Vector3.subtract(e, t, this.dir), Laya.Vector3.normalize(this.dir, this.dir);
                    var n = F.GetComponentInChildren(Laya.Rigidbody3D, this.root);
                    n && (n.canCollideWith = N.Build | N.Border | N.Car | N.Enemy | N.People | N.Police
                        , n.collisionGroup = N.Human, n.isTrigger = !0, console.log("collider 火箭", n));
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    if (!this.stop && !this.root.destroyed)
                        if (this.time -= t, this.time <= 0) this.root.destroy(!0);
                        else if (this.dir) {
                        var e = new Laya.Vector3();
                        Laya.Vector3.scale(this.dir, t * this.speed, e);
                        var a = new Laya.Vector3();
                        Laya.Vector3.add(e, this.transform.position, a), this.transform.lookAt(a, new Laya.Vector3(0, 1, 0), !1)
                            , this.transform.position = a;
                    }
                }
        }, {
                key: "onTriggerEnter"
                , value: function (t) {
                    this.root.destroyed || (console.log(t.owner.name), this.boom());
                }
        }, {
                key: "boom"
                , value: function () {
                    B.Instance.playSound(m.car_boom), this.stop = !0;
                    var t = Ne.World.getChildByName("BulletPre")
                        .getChildByName("BoomRange");
                    t && (t = t.clone(), Ne.World.addChild(t), t.transform.position = this.transform.position
                        , t.addComponent(Oe), t.active = !0), this.root.destroy(!0);
                }
        }]), a;
        }(Y)
        , Xe = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .eyeRocker = null, t._cameraNode = null
                    , t._camera = null, t._target = null, t._startPos = null, t._isCloser = !1, t._lastPos = null
                    , t.carAnimCameraNode = null, t._follow_scale = 5.5, t._pos = new Laya.Vector3()
                    , t;
            }
            return (0, r.default)(a, [{
                key: "setCameraFx"
                , value: function (t) {
                    this.cameraNode.getChildAt(1)
                        .active = t;
                }
        }, {
                key: "init"
                , value: function (t) {
                    this._target = t, this._cameraNode || (this.eyeOutHitInfo = new Laya.HitResult()
                        , this._cameraNode = Ne.World.getChildByName("PlayerCamerNode"), this._camera = this._cameraNode.getChildAt(0)
                        , this._startPos = this._camera.transform.position.clone(), this.carAnimCameraNode = Ne.World.getChildByName("CarDoorCamerNode"));
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "setCarPos"
                , value: function () {
                    var t = F.localposition2World(this._cameraNode.transform, new Laya.Vector3(0, 4.5, -4.25));
                    this._camera.transform.position = t;
                }
        }, {
                key: "setNomralPos"
                , value: function () {
                    var t = F.localposition2World(this._cameraNode.transform, this._startPos);
                    this._camera.transform.position = t;
                }
        }, {
                key: "moveHor"
                , value: function (t) {
                    t *= -.35, this._cameraNode.transform.localRotationEulerY += t;
                }
        }, {
                key: "moveVer"
                , value: function (t) {
                    t *= .5;
                    var e = this._cameraNode.transform.localRotationEulerX;
                    e += t, e = K.Clamp(e, -60, 40), this._cameraNode.transform.localRotationEulerX = e;
                }
        }, {
                key: "playGetCarCameraAnim"
                , value: function (t) {
                    var e = this
                        , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (t && !t.destroyed && Le.IsPlaying) {
                        if (Le.PauseGame(), !this.carAnimCameraNode) return Le.ResumeGame(), void(a && a());
                        this.carAnimCameraNode.active = !0, this._cameraNode.active = !1;
                        var n = t.getChildByName("carDoor_Pos0")
                            , i = t.getChildByName("carDoor_Pos1")
                            , o = Ne.World.getChildByName("HumanType")
                            .getChildByName("carDoorHuman_0");
                        o = o.clone();
                        var s = Ne.World.getChildByName("HumanType")
                            .getChildByName("carDoorHuman_1");
                        s = s.clone();
                        for (var r = ["WoQuan", "FangSongShou", "Tou", "body"], l = Ne.World.getChildByName("PlayerMat"), u = null, c = 0; c < l.meshRenderer.materials.length; c++)
                            if (-1 != l.meshRenderer.materials[c].name.indexOf(mt.CurrSkin)) {
                                u = l.meshRenderer.materials[c];
                                break;
                            }
                        for (var h = 0; h < r.length; h++) {
                            var d = this.getChildrenByName(r[h], o);
                            d && (d instanceof Laya.SkinnedMeshSprite3D ? d.skinnedMeshRenderer.material = u : d.meshRenderer.material = u);
                        }
                        n.addChild(o), i.addChild(s), o.transform.localPosition = new Laya.Vector3(0, 0, 0)
                            , s.transform.localPosition = new Laya.Vector3(0, 0, 0), o.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)
                            , s.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), o.active = !0, s.active = !0
                            , this.carAnimCameraNode.transform.position = t.transform.position, this.carAnimCameraNode.transform.localRotationEulerY = t.transform.localRotationEulerY
                            , ze.Instance.transform.position = t.transform.position, ze.Instance.transform.localRotationEulerY = t.transform.localRotationEulerY
                            , ze.Instance.moveControl.meshBody.active = !1, Laya.timer.once(2200, this, function () {
                                o.destroy(!0), s.destroy(!0), e.carAnimCameraNode.active = !1, e._cameraNode.active = !0
                                    , Le.ResumeGame(), a && a();
                            });
                    }
                }
        }, {
                key: "lateUpdate"
                , value: function (t) {
                    if (this._cameraNode.active && this._target) {
                        this.cameraFX.active;
                        var e = ze.Instance.moveControl.state == Ae.Car
                            , a = this._follow_scale;
                        e && (a = 10), ze.Instance.moveControl.isGround ? Laya.Vector3.lerp(this._cameraNode.transform.position, this._target.transform.position, a * t, this._pos) : this._pos = this._target.transform.position
                            , this._cameraNode.transform.position = this._pos;
                        var n = ze.Instance.moveControl.state == Ae.Car;
                        if ((this.eyeRocker && !this.eyeRocker.isTouch && ze.Instance.moveControl.isNormalState || n) && (ze.Instance.moveControl.rocker && ze.Instance.moveControl.rocker.isTouch || n)) {
                            if (this.eyeRocker.isTouch) return;
                            var i = F.GetForward(this._target)
                                , o = F.GetForward(this.cameraNode);
                            i.y = 0, o.y = 0;
                            var s = F.toAngle(o, i)
                                , r = F.Cross(o, i);
                            s = K.Clamp(s, 0, e ? 40 : 25), r && r.y < 0 && (s *= -1), this.cameraNode.transform.rotate(new Laya.Vector3(0, s * t, 0), !1, !1);
                            var l = ze.Instance.moveControl.isGround ? .5 : 2
                                , u = !ze.Instance.moveControl.isGround && ze.Instance.moveControl.inAnim(Te.sky_idle) ? 35 : -15
                                , c = this._target.transform.localRotationEulerX - this._cameraNode.transform.localRotationEulerX + u;
                            Math.abs(c) <= 3 || (c < 0 && (l *= -1), this._cameraNode.transform.localRotationEulerX += l);
                        }
                        if (n) return;
                        var h = this._target.transform.position.clone();
                        if (h.y += 1, Ne.World.physicsSimulation.raycastFromTo(this._camera.transform.position, h, this.eyeOutHitInfo, N.Human, N.Border | N.Build)
                            , this.eyeOutHitInfo.succeeded) {
                            this._isCloser = !0, this._lastPos = this._target.transform.position.clone();
                            var d = F.positionWorld2local(this.eyeOutHitInfo.point, this._cameraNode);
                            Laya.Vector3.lerp(this._camera.transform.localPosition, d, .08, d), this._camera.transform.localPosition = d;
                        } else {
                            if (this._lastPos && Laya.Vector3.distance(this._lastPos, this._target.transform.position) < 3) return;
                            if (this._lastPos = null, this._isCloser = !1, ze.Instance.moveControl.isNormalState) {
                                var f = F.GetForward(this._camera)
                                    , y = 1.25;
                                y *= Math.abs(this._cameraNode.transform.localRotationEulerX) / 60, 0 == this._cameraNode.transform.localRotationEulerX && (y = 0)
                                    , this._cameraNode.transform.localRotationEulerX > 0 && (y *= -1);
                                var p = F.localposition2World(this._cameraNode.transform, this._startPos);
                                Laya.Vector3.scale(f, y, f), Laya.Vector3.add(f, p, f), Laya.Vector3.lerp(this._camera.transform.position, f, .08, f)
                                    , this._camera.transform.position = f;
                            }
                        }
                    }
                }
        }, {
                key: "cameraNode"
                , get: function () {
                    return this._cameraNode;
                }
        }, {
                key: "camera"
                , get: function () {
                    return this._camera;
                }
        }, {
                key: "cameraFX"
                , get: function () {
                    return this.cameraNode.getChildAt(1);
                }
        }, {
                key: "follow_Scale"
                , set: function (t) {
                    this._follow_scale = t;
                }
        }]), a;
        }(Y)
        , je = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .qianLun = null, t.houLun = null
                    , t.key = 0, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    (0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this);
                    for (var t = 0; t < this.root.numChildren; t++) {
                        var e = this.root.getChildAt(t)
                            .name; -
                        1 != e.indexOf("HouLun") && (this.houLun = this.root.getChildAt(t)), -1 != e.indexOf("QianLun") && (this.qianLun = this.root.getChildAt(t));
                    }
                }
        }, {
                key: "init"
                , value: function (t) {
                    this.key = t;
                }
        }, {
                key: "carDown"
                , value: function () {}
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "update"
                , value: function (t) {
                    this.houLun && (this.houLun.transform.localRotationEulerX += ze.Instance.moveControl.carSpeed)
                        , this.qianLun && (this.qianLun.transform.localRotationEulerX += ze.Instance.moveControl.carSpeed);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Y)
        , Ye = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .fitDis = .35, t._catchSkySpeed = 20
                    , t._speed = 5, t._carSpeed = 0, t._carFwMaxSpeed = 15, t._carBackMaxSpeed = -3.5
                    , t._carAddSpeed = 10, t._carSubSpeed = -25, t.carForward = !1, t.carBack = !1, t.carRight = !1
                    , t.carLeft = !1, t.carParent = null, t.my_car = null, t.car_index = -1, t.fly_speed = 9
                    , t._vPos = new Laya.Vector3(), t._hPos = new Laya.Vector3(), t._character = null
                    , t._dir = new Laya.Vector3(), t.rocker = null, t._shadow3D = null, t._anim = null
                    , t._meshBody = null, t.flyWeapon = null, t._state = Ae.Normal, t.lastIsGround = !1
                    , t._fastRun = !1, t.sphereShape = null, t.carBoxShape = null, t.nullTime = 0, t.catch_position = null
                    , t.catch_obj = null, t.catch_normal = null, t.firstFall = !0, t.normalPhyGroup = N.Border | N.Build | N.Car | N.Enemy | N.LitileBaby | N.RoadPos | N.Police | N.Money
                    , t.carPhyGroup = N.Border | N.Build | N.Border | N.Car | N.RoadPos | N.Money | N.CarBorder | N.Police | N.People | N.Enemy
                    , t._inCheckMaxY = !1, t._tmpMaxY = 0, t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function () {
                    var t = this.root.addComponent(Laya.CharacterController);
                    this._character = t;
                    var e = new Laya.CapsuleColliderShape(.3, 2)
                        , a = new Laya.BoxColliderShape(1.8, 1, 4.4);
                    a.localOffset = new Laya.Vector3(0, .5, 0), this.carBoxShape = a, e.localOffset = new Laya.Vector3(0, 1, 0)
                        , this.sphereShape = e, this._shadow3D = this.root.getChildByName("shadow"), this._anim = F.GetComponentInChildren(Laya.Animator, this.root)
                        , this._meshBody = this._anim.owner, this.flyWeapon = this.getChildrenByName("FeiXingQi", this.root)
                        , this.carParent = this.getChildrenByName("carNode"), this.setHumanCharacter();
                }
        }, {
                key: "setHumanCharacter"
                , value: function () {
                    this._character.colliderShape = this.sphereShape, this._character.canCollideWith = this.normalPhyGroup
                        , this._character.collisionGroup = N.Human, this._character.stepHeight = .4, this.carParent.destroyChildren()
                        , this._meshBody.active = !0;
                }
        }, {
                key: "createHumanCar"
                , value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1
                        , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    console.log("createHumanCar", t, e);
                    var a = Ne.World.getChildByName("Car");
                    if (a) {
                        var n = a.getChildByName("car".concat(e));
                        if (n) {
                            n = n.clone(), this.carParent.addChild(n), n.transform.localPosition = new Laya.Vector3(0, 0, 0)
                                , n.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this.setCarCharacter()
                                , this.state = Ae.Car, ze.Instance.cameraControl.setCarPos();
                            var i = n.addComponent(je);
                            i.init(e), this.my_car = i, this.car_index = t, this._meshBody.active = !1;
                        }
                    }
                }
        }, {
                key: "deleteCar"
                , value: function () {
                    this.my_car && !this.my_car.destroyed && (this.my_car.carDown(), this.my_car.root.destroy(!0))
                        , this.car_index = -1, this.setHumanCharacter();
                }
        }, {
                key: "setCarCharacter"
                , value: function () {
                    this._character.colliderShape = this.carBoxShape, this._character.canCollideWith = this.carPhyGroup
                        , this._character.collisionGroup = N.Human, this._character.stepHeight = .2, ze.Instance.cameraControl.setNomralPos()
                        , this.carBack = !1, this.carForward = !1;
                }
        }, {
                key: "setFlyWeapon"
                , value: function (t) {
                    this.flyWeapon && (this.flyWeapon.active = t, this.flyWeapon.getChildAt(0)
                            .active = t)
                        , t ? (this._meshBody.transform.localRotationEulerX = 0, this.state = Ae.Fly, this._character.fallSpeed = 0
                            , this.playAnim(Te.sky_idle)) : this.state = Ae.Normal, Ht.Instance.flyUI.setUIVisible(t);
                }
        }, {
                key: "_move"
                , value: function (t) {
                    if (Le.IsPlaying && this.rocker && !ze.Instance.c4action)
                        if (0 == this.rocker.VerValue && 0 == this.rocker.HorValue) {
                            if (this._character.move(new Laya.Vector3(0, 0, 0)), this.isGround) switch (ze.Instance.myAtkType) {
                            case ut.Fist:
                                this.playAnim(Te.idle);
                                break;

                            case ut.HandGun:
                                this.playAnim(Te.shouqiang_idle);
                                break;

                            case ut.Ak:
                                this.playAnim(Te.buqiang_idle);
                                break;

                            case ut.JustinGatlin:
                                this.playAnim(Te.jiatelin_idle);
                                break;

                            case ut.RocketLauncher:
                                this.playAnim(Te.huojian_idle);
                            }
                        } else {
                            ze.Instance.cameraControl.cameraNode.transform.getForward(this._vPos), ze.Instance.cameraControl.cameraNode.transform.getRight(this._hPos)
                                , Laya.Vector3.scale(this._vPos, this.rocker.VerValue * this._speed * t, this._vPos)
                                , Laya.Vector3.scale(this._hPos, -this.rocker.HorValue * this._speed * t, this._hPos);
                            var e = new Laya.Vector3();
                            if (Laya.Vector3.add(this._vPos, this._hPos, e), e.y = 0, Laya.Vector3.normalize(e, this._dir)
                                , Ht.Instance.atkButton.onTouch && ze.Instance.myAtkType != ut.Fist || this._lookAt()
                                , this._character.isGrounded) {
                                switch (this._meshBody.transform.localRotationEulerX = 0, ze.Instance.myAtkType) {
                                case ut.Fist:
                                    this.playAnim(Te.run);
                                    break;

                                case ut.HandGun:
                                    this.playAnim(Te.shouqiang_run);
                                    break;

                                case ut.Ak:
                                    this.playAnim(Te.buqiang_run);
                                    break;

                                case ut.JustinGatlin:
                                    this.playAnim(Te.jiatelin_run);
                                    break;

                                case ut.RocketLauncher:
                                    this.playAnim(Te.huojian_run);
                                }
                                this.fastRun ? (Laya.Vector3.scale(e, 2, e), ze.Instance.subBody(t * mt.GetCurrSkillData(ot.Run)[1])) : (B.Instance.stopOneSound(m.wind)
                                    , ze.Instance.cameraControl.setCameraFx(!1));
                            } else this.fastRun = !1, B.Instance.stopOneSound(m.wind), ze.Instance.myWeaponParent.active = !1;
                            this.transform.translate(e, !1);
                        }
                }
        }, {
                key: "catch_skyMove"
                , value: function (t) {
                    if (Le.IsPlaying && this.catch_position) {
                        var e = Laya.Vector3.distance(this.catch_position, this.transform.position);
                        if (e <= this.fitDis) {
                            if (1 == this.catch_normal.y) return this._meshBody.transform.localRotationEulerX = 0
                                , this.state = Ae.Normal, void ze.Instance.cameraControl.setCameraFx(!1);
                            B.Instance.stopOneSound(m.wind), ze.Instance.cameraControl.setCameraFx(!1), this.state = Ae.Catch;
                            var a = new Laya.Vector3();
                            return Laya.Vector3.add(this.catch_position, this.catch_normal, a), this.transform.lookAt(a, new Laya.Vector3(0, 1, 0), !1)
                                , this._meshBody.transform.localRotationEulerX = 0, void this.playAnim(Te.climb_idle);
                        }
                        var n = new Laya.Vector3();
                        Laya.Vector3.subtract(this.catch_position, this.transform.position, n), Laya.Vector3.normalize(n, n);
                        var i = t * this._catchSkySpeed;
                        i = i >= e ? e : i, Laya.Vector3.scale(n, i, n);
                        var o = new Laya.Vector3();
                        Laya.Vector3.subtract(this.transform.position, n, o), this.transform.lookAt(o, new Laya.Vector3(0, 1, 0), !1)
                            , this._meshBody.transform.localRotationEulerX = 90, this.transform.translate(n, !1);
                    }
                }
        }, {
                key: "catch_move"
                , value: function (t) {
                    if (Le.IsPlaying)
                        if (0 != this.rocker.HorValue || 0 != this.rocker.VerValue) {
                            this._hPos = F.GetRight(this.root), this._vPos = F.GetUp(this.root), Laya.Vector3.scale(this._vPos, -this.rocker.VerValue * this._speed * t * .25, this._vPos)
                                , Laya.Vector3.scale(this._hPos, -this.rocker.HorValue * this._speed * t * .25, this._hPos);
                            var e = new Laya.Vector3();
                            Laya.Vector3.add(this._vPos, this._hPos, e), this.transform.translate(e, !1), this._frame % 20 == 0 && B.Instance.playSound(m.climb)
                                , Math.abs(this.rocker.HorValue) > Math.abs(this.rocker.VerValue) ? this.rocker.HorValue > 0 ? this.playAnim(Te.climb_right) : this.playAnim(Te.climb_left) : e.y > 0 ? this.playAnim(Te.climb_up) : this.playAnim(Te.climb_down);
                            var a = F.GetForward(this.root)
                                , n = F.GetUp(this.root);
                            Laya.Vector3.scale(n, -1, n), Laya.Vector3.add(a, n, n), Laya.Vector3.scale(a, -1, a);
                            var i = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3())
                                , o = new Laya.HitResult();
                            if (i.origin = this.transform.position, i.direction = a, ze.Instance.scene.physicsSimulation.rayCast(i, o, 2, N.Human, N.Build | N.Border)
                                , o.succeeded) {
                                var s = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3())
                                    , r = new Laya.HitResult();
                                s.origin = this.transform.position, s.direction = n, ze.Instance.scene.physicsSimulation.rayCast(s, r, 1, N.Human, N.Build | N.Border)
                                    , r.succeeded && (this.state = Ae.Normal);
                            } else this.state = Ae.Normal;
                        } else this.playAnim(Te.climb_idle);
                }
        }, {
                key: "_lookAt"
                , value: function () {
                    var t = new Laya.Vector3(0, 0, 0);
                    this._dir.z *= -1, this._dir.x *= -1, Laya.Vector3.add(this._dir, this.transform.position, t)
                        , t.y = this.transform.position.y, this.transform.lookAt(t, new Laya.Vector3(0, 1, 0), !1);
                }
        }, {
                key: "fly_lookAt"
                , value: function () {
                    var t = F.GetForward(ze.Instance.cameraControl.camera);
                    Laya.Vector3.scale(t, -10, t), Laya.Vector3.add(t, ze.Instance.cameraControl.camera.transform.position, t)
                        , this.transform.lookAt(t, new Laya.Vector3(0, 1, 0), !1);
                }
        }, {
                key: "fly_move"
                , value: function (t) {
                    if (Le.IsPlaying && this.rocker)
                        if (4 != Le.Level && ze.Instance.subBody(t * mt.GetCurrSkillData(ot.Fly)[1])
                            , 0 == this.rocker.VerValue && 0 == this.rocker.HorValue) this._character.move(new Laya.Vector3(0, 0, 0))
                            , this.playAnim(Te.sky_idle);
                        else {
                            ze.Instance.cameraControl.cameraNode.transform.getForward(this._vPos), ze.Instance.cameraControl.cameraNode.transform.getRight(this._hPos)
                                , Laya.Vector3.scale(this._vPos, this.rocker.VerValue * this.fly_speed * t, this._vPos)
                                , Laya.Vector3.scale(this._hPos, -this.rocker.HorValue * this.fly_speed * t, this._hPos);
                            var e = new Laya.Vector3();
                            Laya.Vector3.add(this._vPos, this._hPos, e), Laya.Vector3.normalize(e, this._dir)
                                , this.fly_lookAt(), this.transform.translate(e, !1), this.playAnim(Te.sky_idle);
                        }
                }
        }, {
                key: "carMove"
                , value: function (t) {
                    if (Le.IsPlaying && this.rocker && Le.IsPlaying && this.rocker && !ze.Instance.c4action) {
                        var e = this.root.transform.localRotationEulerY;
                        if (this.carLeft) {
                            var a = 60 * t;
                            this.carBack && (a *= -1), e += a;
                        }
                        if (this.carRight) {
                            var n = 60 * t;
                            this.carBack && (n *= -1), e -= n;
                        }
                        var i = F.GetForward(this.root);
                        this.carForward ? this.carSpeed += this._carAddSpeed * t : (this.carSpeed += this._carSubSpeed * t
                                , this.carSpeed <= 0 && !this.carBack && !this.carForward && (this.carSpeed = 0))
                            , 0 != this.carSpeed && (this.root.transform.localRotationEulerY = e), Laya.Vector3.scale(i, -this.carSpeed * t, i)
                            , this.root.transform.translate(i, !1);
                    }
                }
        }, {
                key: "update"
                , value: function (t) {
                    if (this.transform.position.y <= -16 && (this.transform.localPositionY = 20, this.transform.localPositionX = 0
                            , this.transform.localPositionZ = 0), this.state == Ae.OnPlane) return this.fastRun = !1
                        , void(this.lastIsGround = !0);
                    if (this.stateAction(t), this._shadow3D && (this.isNormalState || this._state == Ae.Atk ? this._shadow3D.active = this._character.isGrounded : this._shadow3D.active = !1)
                        , this.isNormalState && Le.IsPlaying) {
                        if (this.isGround && (this._inCheckMaxY = !1), this._inCheckMaxY && (this._tmpMaxY = this.transform.position.y >= this._tmpMaxY ? this.transform.position.y : this._tmpMaxY
                                , this._frame % 4 == 0)) {
                            var e = new Laya.Vector3(0, -1, 0)
                                , a = this.transform.position.clone()
                                , n = new Laya.Ray(a, e)
                                , i = new Laya.HitResult();
                            ze.Instance.scene.physicsSimulation.rayCast(n, i, 500, N.Human, N.Border | N.Build)
                                , i.succeeded ? Laya.Vector3.distance(this.transform.position, i.point) >= 15 ? (this._meshBody.transform.localRotationEulerX = 135
                                    , this.playAnim(Te.sky_idle), ze.Instance.cameraControl.setCameraFx(!0)) : (this._meshBody.transform.localRotationEulerX = 0
                                    , this.playAnim(Te.jump_hold)) : (this._meshBody.transform.localRotationEulerX = 135
                                    , this.playAnim(Te.sky_idle));
                        }
                        if (this.lastIsGround != this._character.isGrounded)
                            if (this._character.isGrounded) {
                                this.firstFall && (this.firstFall = !1, Ht.Instance.downUI.showGameButton()), this._inCheckMaxY = !1;
                                var o = this._tmpMaxY - this.transform.position.y;
                                if (B.Instance.stopOneSound(m.wind), ze.Instance.cameraControl.setCameraFx(!1)
                                    , o >= 10) {
                                    this._meshBody.transform.localRotationEulerX = 0, this.state = Ae.Null;
                                    this.nullTime = 1.5, this.playAnim(Te.fall_pose), B.Instance.playSound(m.fallToFloor)
                                        , this.playFallPoseFx(1.5);
                                } else this.playAnim(Te.jump_fall);
                            } else {
                                this._inCheckMaxY = !0, this._tmpMaxY = this.transform.position.y;
                                var s = new Laya.Vector3(0, -1, 0)
                                    , r = this.transform.position.clone()
                                    , l = new Laya.Ray(r, s)
                                    , u = new Laya.HitResult();
                                ze.Instance.scene.physicsSimulation.rayCast(l, u, 500, N.Human, N.Border | N.Build)
                                    , u.succeeded ? Laya.Vector3.distance(this.transform.position, u.point) >= 15 && (B.Instance.playSound(m.wind)
                                        , ze.Instance.cameraControl.setCameraFx(!0)) : (B.Instance.playSound(m.wind), ze.Instance.cameraControl.setCameraFx(!0));
                            }
                    }
                    this.lastIsGround = this._character.isGrounded;
                }
        }, {
                key: "playFallPoseFx"
                , value: function (t) {
                    if (Ne.FxParent) {
                        var e = Ne.FxParent.getChildByName("FX_luodi");
                        if (!e) return;
                        e = e.clone(), Ne.World.addChild(e), e.transform.position = this.transform.position
                            , e.transform.localRotationEulerY = 1, e.active = !0, console.log(e), setTimeout(function () {
                                e.destroy(!0);
                            }, 500 * t);
                    }
                }
        }, {
                key: "stateAction"
                , value: function (t) {
                    switch (this._state != Ae.Normal && (this.fastRun = !1), this._state) {
                    case Ae.Normal:
                        ze.Instance.myWeaponParent.active = !0, this._move(t), this._character.collisionGroup = N.Human;
                        break;

                    case Ae.Catch_Sky:
                        ze.Instance.myWeaponParent.active = !1, this.catch_skyMove(t);
                        break;

                    case Ae.Catch:
                        ze.Instance.myWeaponParent.active = !1, this.catch_move(t), this._character.collisionGroup = N.Human;
                        break;

                    case Ae.Fly:
                        ze.Instance.myWeaponParent.active = !1, this.fly_move(t), this._character.collisionGroup = N.Human;
                        break;

                    case Ae.Null:
                        this.nullTime -= t, this.nullTime <= 0 && (this.state = Ae.Normal), this._character.collisionGroup = N.Human
                            , ze.Instance.myWeaponParent.active = !1;
                        break;

                    case Ae.Car:
                        this.carMove(t);
                    }
                }
        }, {
                key: "playAnim"
                , value: function (t) {
                    if (this._anim) {
                        var e = this._anim.getControllerLayer(0)
                            , a = e.getCurrentPlayState();
                        if (a.animatorState.name == t && a.normalizedTime % 1 != 0);
                        else {
                            switch (t) {
                            case Te.run:
                                B.Instance.stopOneSound(m.run0), B.Instance.playSound(m.run0, 999);
                                break;

                            case Te.idle:
                            case Te.sky_idle:
                                break;

                            case Te.catch_sky:
                                B.Instance.playSound(m.wind), ze.Instance.cameraControl.setCameraFx(!0);
                                break;

                            case Te.catch_start:
                                B.Instance.playSound(m.catch);
                                break;

                            case Te.skill_catch:
                                B.Instance.playSound(m.skill_zhuwang);
                                break;

                            case Te.atk_1:
                            case Te.jump_hold:
                            }
                            t != Te.run && B.Instance.stopOneSound(m.run0), this._anim.play(t, 0, 0);
                        }
                        t == Te.run && ((a = e.getCurrentPlayState())
                            .animatorState.speed = this.fastRun ? 2 : 1);
                    }
                }
        }, {
                key: "inAnim"
                , value: function (t) {
                    return !!this._anim && this._anim.getControllerLayer(0)
                        .getCurrentPlayState()
                        .animatorState.name == t;
                }
        }, {
                key: "jump"
                , value: function () {
                    !this.isGround && this.isNormalState || this.isFlyState || (this.state != Ae.Catch && this.state != Ae.Catch_Sky || (this.state = Ae.Normal)
                        , this.character.jump(new Laya.Vector3(0, 15, 0)), B.Instance.playSound(m.jump));
                }
        }, {
                key: "carSpeed"
                , get: function () {
                    return this._carSpeed;
                }
                , set: function (t) {
                    this._carSpeed = K.Clamp(t, this._carBackMaxSpeed, this._carFwMaxSpeed);
                }
        }, {
                key: "character"
                , get: function () {
                    return this._character;
                }
        }, {
                key: "meshBody"
                , get: function () {
                    return this._meshBody;
                }
        }, {
                key: "state"
                , get: function () {
                    return this._state;
                }
                , set: function (t) {
                    t != Ae.Null && (t == Ae.Normal || t == Ae.Car ? (this.catch_position = null, this.catch_obj = null
                            , this.catch_normal = null, this._character.fallSpeed = 40) : this._character.fallSpeed = 0)
                        , this._state = t;
                }
        }, {
                key: "isGround"
                , get: function () {
                    return this._character.isGrounded;
                }
        }, {
                key: "isNormalState"
                , get: function () {
                    return this._state == Ae.Normal;
                }
        }, {
                key: "isFlyState"
                , get: function () {
                    return this._state == Ae.Fly;
                }
        }, {
                key: "isNullState"
                , get: function () {
                    return this._state == Ae.Null;
                }
        }, {
                key: "fastRun"
                , get: function () {
                    return this._fastRun;
                }
                , set: function (t) {
                    this.isGround && t != this.fastRun && (ze.Instance.cameraControl.setCameraFx(t)
                        , this.root.getChildByName("FX_xingzou")
                        .active = t, t ? B.Instance.playSound(m.wind) : B.Instance.stopOneSound(m.wind)
                        , this._fastRun = t);
                }
        }]), a;
        }(Y)
        , Ke = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    ._plane = null, t._camPlane = null
                    , t._pos0 = new Laya.Vector3(), t._pos1 = null, t._dir = new Laya.Vector3(), t._speed = 30
                    , t;
            }
            return (0, r.default)(a, [{
                key: "init"
                , value: function () {
                    this._plane = Ne.World.getChildByName("feiji"), this._camPlane = Ne.World.getChildByName("PlaneCamerNode")
                        , this._plane.active = !1, this._camPlane.active = !1, Ne.World.getChildByName("PlanePos")
                        , this._pos0.x = -112, this._pos0.y = 148, this._pos0.z = 92, this._pos1 = new Laya.Vector3(178, 148, -18)
                        , Laya.Vector3.subtract(this._pos1, this._pos0, this._dir), Laya.Vector3.normalize(this._dir, this._dir);
                }
        }, {
                key: "startPlane"
                , value: function () {
                    this._plane.transform.position = this._pos0, this._plane.active = !0, this._camPlane.active = !0
                        , this._camPlane.transform.position = this._pos0, Ht.Instance.downUI.startPlane();
                }
        }, {
                key: "fallPlane"
                , value: function () {
                    this._plane.active = !1, this._camPlane.active = !1, B.Instance.stopOneSound(m.onPlane);
                }
        }, {
                key: "update"
                , value: function (t) {
                    if (this._plane && this._plane.active) {
                        var e = new Laya.Vector3();
                        Laya.Vector3.scale(this._dir, this._speed * t, e);
                        var a = new Laya.Vector3();
                        Laya.Vector3.add(this._plane.transform.position, e, a), this._plane.transform.lookAt(a, new Laya.Vector3(0, 1, 0), !1)
                            , this._plane.transform.translate(e, !1);
                        var n = new Laya.Vector3();
                        Laya.Vector3.lerp(this._camPlane.transform.position, this._plane.transform.position, 7 * t, n)
                            , this._camPlane.transform.position = n, this._camPlane.transform.localRotationEulerY = 150 + this._plane.transform.localRotationEulerY;
                    }
                }
        }, {
                key: "onEnable"
                , value: function () {}
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "currPlanePosition"
                , get: function () {
                    return this._plane.transform.position;
                }
        }]), a;
        }(Y);
    ! function (t) {
        t[t.Normal = 1] = "Normal", t[t.Catch_Sky = 2] = "Catch_Sky", t[t.Catch = 3] = "Catch"
            , t[t.Atk = 4] = "Atk", t[t.Null = 5] = "Null", t[t.Fly = 6] = "Fly", t[t.OnPlane = 7] = "OnPlane"
            , t[t.Car = 8] = "Car";
    }(Ae || (Ae = {}))
    , function (t) {
        t.atk_4 = "atk_4", t.atk_1 = "atk_1", t.atk_2 = "atk_2", t.atk_3 = "atk_3", t.atk_idle = "atk_idle"
            , t.idle = "idle", t.death = "death", t.jump_fall = "jump_fall", t.jump_hold = "jump_hold"
            , t.jump_start = "jump_start", t.run = "run", t.walk = "walk", t.fall_pose = "fall_pose"
            , t.skill_catch = "skill_catch", t.sky_idle = "sky_idle", t.climb_right = "climb_right"
            , t.climb_down = "climb_down", t.climb_left = "climb_left", t.climb_up = "climb_up"
            , t.climb_idle = "climb_idle", t.catch_start = "catch_start", t.catch_sky = "catch_sky"
            , t.normal_death = "normal_death", t.c4 = "c4", t.shouqiangkaiqiang = "shouqiangkaiqiang"
            , t.buqiangkaiqiang = "buqiangkaiqiang", t.buqiang_run = "buqiang_run", t.shouqiang_run = "shouqiang_run"
            , t.buqiang_idle = "buqiang_idle", t.shouqiang_idle = "shouqiang_idle", t.huojian_idle = "huojian_idle"
            , t.huojian_run = "huojian_walk", t.jiatelin_idle = "jiatelin_idle", t.jiatelin_run = "jiatelin_walk";
    }(Te || (Te = {}));
    var ze = function (t) {
        (0, c.default)(a, t);
        var e = f(a);

        function a() {
            var t;
            return (0, s.default)(this, a), (t = e.apply(this, arguments))
                ._cameraControl = null
                , t._moveControl = null, t._planeControl = null, t._atkIndex = 0, t._scene = null
                , t.woquan_mesh = null, t.fangshou_mesh = null, t.baby_mesh = null, t.inC4Pos = !1
                , t._c4action = !1, t._c4Time = 0, t.atkGroup = N.Car | N.Enemy | N.Police | N.People
                , t._myAtkType = ut.Fist, t.myWeaponParent = null, t.myGun = null, t.gun_fx = null
                , t.inMyGunCD = !1, t._catchMoveCD = 0, t._catchSkillCD = 0, t.vestHp = 0, t.shootCD = !1
                , t._errorValue = 0, t.hurtSoundCd = !1, t;
        }
        return (0, r.default)(a, [{
            key: "addError"
            , value: function (t) {
                if (!(this.errorValue >= 100)) {
                    this.errorValue += t, this.errorValue = K.Clamp(this.errorValue, 0, 100);
                    var e = Ht.Instance;
                    e && e.errorUI.updateError();
                }
            }
        }, {
            key: "onAwake"
            , value: function () {
                var t = this;
                this.root || ((0, o.default)((0, u.default)(a.prototype), "onAwake", this)
                    .call(this)
                    , this.isPlayer = !0, a.Instance = this, this.myWeaponParent = this.getChildrenByName("wuqi")
                    , this.woquan_mesh = this.getChildrenByName("WoQuan"), this.fangshou_mesh = this.getChildrenByName("FangSongShou")
                    , this._cameraControl = this.root.addComponent(Xe), this._moveControl = this.root.addComponent(Ye)
                    , this._planeControl = this.root.addComponent(Ke), this._planeControl.init(), this._cameraControl.init(this.root)
                    , this._moveControl.init(), this._scene = Ne.World, this.baby_mesh = this.getChildrenByName("XiaoHai")
                    , $.on(z.GetVest, function () {
                        t.vestHp <= 0 && (t.vestHp = 100);
                    }, this));
            }
        }, {
            key: "onDestroy"
            , value: function () {}
        }, {
            key: "onEnable"
            , value: function () {}
        }, {
            key: "onDisable"
            , value: function () {
                this._cameraControl.eyeRocker = null, this._moveControl.rocker = null;
            }
        }, {
            key: "update"
            , value: function (t) {
                if (this.woquan_mesh && (this.woquan_mesh.active = this._moveControl.state == Ae.Atk)
                    , this.fangshou_mesh && (this.fangshou_mesh.active = !this.woquan_mesh.active), this.c4action) {
                    this._c4Time += t;
                    var e = this._c4Time / 10;
                    Ht.Instance.progressBarTips.show(e), this.moveControl.playAnim(Te.c4), e >= 1 && this.finishC4();
                }
                this.addBody(3 / (10 / t) * ("skin2" == mt.CurrSkin ? 2.2 : 2)), this._catchMoveCD > 0 && (this._catchMoveCD -= t
                    , this._catchMoveCD <= 0 && (this._catchMoveCD = 0)), this._catchSkillCD > 0 && (this._catchSkillCD -= t
                    , this._catchSkillCD <= 0 && (this._catchSkillCD = 0));
            }
        }, {
            key: "updateSkin"
            , value: function () {
                for (var t = ["WoQuan", "FangSongShou", "Tou", "body"], e = Ne.World.getChildByName("PlayerMat"), a = null, n = 0; n < e.meshRenderer.materials.length; n++)
                    if (-1 != e.meshRenderer.materials[n].name.indexOf(mt.CurrSkin)) {
                        a = e.meshRenderer.materials[n];
                        break;
                    }
                for (var i = 0; i < t.length; i++) {
                    var o = this.getChildrenByName(t[i], this.root);
                    o && (o instanceof Laya.SkinnedMeshSprite3D ? o.skinnedMeshRenderer.material = a : o.meshRenderer.material = a);
                }
            }
        }, {
            key: "startGame"
            , value: function (t) {
                var e = this;
                this.myWeaponParent.active = !0, this.myAtkType = ut.Fist, this._catchMoveCD = 0
                    , this._catchSkillCD = 0, this.moveControl.fastRun = !1, this.moveControl.setFlyWeapon(!1)
                    , this.init(), this._planeControl.startPlane(), this.moveControl.state = Ae.OnPlane
                    , Laya.timer.once(7e3, this, this.fallPlane), de.Instance.addLevel(t), B.Instance.playSound(m.onPlane, 999)
                    , B.Instance.playSound(m.wind), this.cameraControl.setCameraFx(!0), this.cameraControl.moveVer(100)
                    , this.shootCD = !1, setInterval(function () {
                        e.resetSubError();
                    }, 6e4);
            }
        }, {
            key: "resetSubError"
            , value: function () {
                Le.IsPlaying && this.addError(-20);
            }
        }, {
            key: "init"
            , value: function () {
                this.moveControl.firstFall = !0, this.hpMax = this.hp = mt.GameHP * ("skin1" == mt.CurrSkin ? 1.1 : 1)
                    , this.mp = this.mpMax = 100, this.body = this.bodyMax = mt.GameBody, this.getBaby = !1
                    , Ht.Instance.playerInfo.updateHp(), Ht.Instance.playerInfo.updateBody(), this.moveControl.setHumanCharacter()
                    , this.updateSkin(), mt.Vest > 0 ? this.vestHp = 100 : this.vestHp = 0, this.inC4Pos = !1;
            }
        }, {
            key: "subHp"
            , value: function (t, e) {
                if (this.moveControl.state != Ae.OnPlane && this.moveControl.state != Ae.Car && !(this.hp <= 0)) {
                    if (mt.Vest > 0) return this.vestHp -= t, this.vestHp = K.Clamp(this.vestHp, 0, 100)
                        , void(this.vestHp <= 0 && (mt.Vest -= 1, this.vestHp = 100));
                    this.stopC4(), this.hp -= t, this.hp = K.Clamp(this.hp, 0, this.hpMax), this.onSubHp(t, e)
                        , 0 == this.hp && this.onDeath();
                }
            }
        }, {
            key: "startC4"
            , value: function () {
                this.inC4Pos && (this.c4action = !0);
            }
        }, {
            key: "stopC4"
            , value: function () {
                this.c4action && (this.c4action = !1, S.Instance.showLabelTips("拆除操作被打断"), console.log("第五关打断")
                    , Ht.Instance.progressBarTips.hide());
            }
        }, {
            key: "finishC4"
            , value: function () {
                this.c4action = !1, Ht.Instance.progressBarTips.hide(), console.log("第五关完成"), de.Instance.level_control.level_success();
            }
        }, {
            key: "onSubHp"
            , value: function (t, e) {
                (0, o.default)((0, u.default)(a.prototype), "onSubHp", this)
                .call(this, t, e), console.log("玩家扣血")
                    , Ht.Instance && Ht.Instance.redTipsUI.showRed(2), Ht.Instance && Ht.Instance.playerInfo.updateHp()
                    , this.hurtSoundCd;
            }
        }, {
            key: "onAddHp"
            , value: function (t) {
                Ht.Instance && Ht.Instance.playerInfo.updateHp();
            }
        }, {
            key: "onAddMp"
            , value: function (t) {}
        }, {
            key: "onSubMp"
            , value: function (t) {
                Ht.Instance && this.mp;
            }
        }, {
            key: "onAddBody"
            , value: function () {
                Ht.Instance && Ht.Instance.playerInfo.updateBody();
            }
        }, {
            key: "onSubBody"
            , value: function () {
                Ht.Instance && Ht.Instance.playerInfo.updateBody(), this.body <= 0 && (this.moveControl.fastRun = !1
                    , we.Instance.showFreeBodyView(), Ht.Instance.flyUI.onClick_FlyDown(null));
            }
        }, {
            key: "onDeath"
            , value: function () {
                (0, o.default)((0, u.default)(a.prototype), "onDeath", this)
                .call(this), Le.PauseGame()
                    , we.Instance.showPopViewByLaya(j.ReliveView);
            }
        }, {
            key: "fallPlane"
            , value: function () {
                this.moveControl.state == Ae.OnPlane && (B.Instance.stopOneSound(m.onPlane), B.Instance.stopOneSound(m.wind)
                    , this.cameraControl.setCameraFx(!1), this.root.transform.position = this._planeControl.currPlanePosition
                    , this.moveControl.state = Ae.Normal, this._planeControl.fallPlane(), this.moveControl.character.jump(new Laya.Vector3(0, 10, 0))
                    , Ht.Instance.downUI.hidePlaneButton());
            }
        }, {
            key: "startCar"
            , value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return !(!Le.IsPlaying || !(this.moveControl.state == Ae.Car || this.moveControl.isNormalState && this.moveControl.isGround) || (this.moveControl.state == Ae.Car ? (S.Instance.showLabelTips("请先离开当前车辆")
                    , 1) : (this.moveControl.setFlyWeapon(!1), console.log("".concat(t, ",startCar,")
                        .concat(e))
                    , this.moveControl.createHumanCar(t, e), Ht.Instance.showCarUI(), 1 == Le.Level && de.Instance.level_control.getCar()
                    , 0)));
            }
        }, {
            key: "EndCar"
            , value: function () {
                this.moveControl.state = Ae.Normal, Ve.Instance.putDownCar(this.moveControl.car_index)
                    , this.moveControl.deleteCar(), Ht.Instance.hideCarUI();
            }
        }, {
            key: "normalAtk"
            , value: function () {
                switch (this.myAtkType) {
                case ut.Fist:
                    this.fistAtk();
                    break;

                case ut.HandGun:
                    this.handGunAtk();
                    break;

                case ut.Ak:
                    this.akGunAtk();
                    break;

                case ut.JustinGatlin:
                    this.jusGunAtk();
                    break;

                case ut.RocketLauncher:
                    this.rocketGunAtk();
                }
            }
        }, {
            key: "fistAtk"
            , value: function () {
                var t = this;
                if (this.myAtkType == ut.Fist && (this.stopC4(), this.moveControl.isNormalState && this.moveControl.isGround)) {
                    this.moveControl.state = Ae.Atk, Laya.timer.once(650, this, function () {
                        t.moveControl.state = Ae.Normal;
                    }), Laya.timer.once(300, this, function () {
                        t.check_atkObj(mt.GameATK);
                    });
                    var e = this._atkIndex++ % 4 + 1;
                    4 == e ? B.Instance.playSound(m.tui) : B.Instance.playSound(m.quan), this.moveControl.playAnim(Te["atk_".concat(e)]);
                }
            }
        }, {
            key: "handGunAtk"
            , value: function () {
                var t = this;
                if (this.moveControl.isGround && !this.shootCD && this.myGun) {
                    if (mt.NormalBullet <= 0) return we.Instance.showBuyBulletView(!0), void console.log("展示购买子弹页面");
                    var e = this.getChildrenByName("pos", this.myGun);
                    if (e) {
                        var a = Ne.World.getChildByName("BulletPre");
                        if (a = a.getChildByName("normal_bullet")) {
                            this.setGunFx(500), this.shootCD = !0, Laya.timer.once(500, this, function () {
                                t.shootCD = !1;
                            });
                            var n = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2)
                                , i = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                            this.cameraControl.camera.viewportPointToRay(n, i);
                            var o = new Laya.Vector3();
                            Laya.Vector3.scale(i.direction, 300, o), Laya.Vector3.add(i.origin, o, o), a = a.clone()
                                , Ne.World.addChild(a), a.active = !0, a.addComponent(Fe)
                                .init(e.transform.position, o);
                            var s = F.GetForward(this.cameraControl.cameraNode);
                            Laya.Vector3.scale(s, 10, s), Laya.Vector3.add(s, this.cameraControl.cameraNode.transform.position, s)
                                , s.y = this.transform.position.y, this.root.transform.lookAt(s, new Laya.Vector3(0, 1, 0), !1);
                            var r = new Laya.HitResult()
                                , l = N.Build | N.Border | N.Car | N.Enemy | N.People | N.Police;
                            if (this._scene.physicsSimulation.rayCast(i, r, 300, N.Human, l), mt.NormalBullet--
                                , B.Instance.playSound(m.Shoot_Hand), r.succeeded) {
                                if (console.log("射击到目标"), console.log(r.collider.owner.name), r.collider.collisionGroup == N.Build || r.collider.collisionGroup == N.Border) return void this.atkBulid(r);
                                this.atk2Obj(r.collider.owner, r.collider.collisionGroup, 25, null);
                            }
                        }
                    }
                }
            }
        }, {
            key: "akGunAtk"
            , value: function () {
                var t = this;
                if (this.moveControl.isGround && !this.shootCD && this.myGun) {
                    if (mt.NormalBullet <= 0) return console.log("展示购买子弹页面"), void we.Instance.showBuyBulletView(!0);
                    var e = this.getChildrenByName("pos", this.myGun);
                    if (e) {
                        var a = Ne.World.getChildByName("BulletPre");
                        if (a = a.getChildByName("normal_bullet")) {
                            this.setGunFx(300), this.shootCD = !0, Laya.timer.once(100, this, function () {
                                t.shootCD = !1;
                            });
                            var n = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2)
                                , i = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                            this.cameraControl.camera.viewportPointToRay(n, i);
                            var o = new Laya.Vector3();
                            Laya.Vector3.scale(i.direction, 300, o), Laya.Vector3.add(i.origin, o, o), a = a.clone()
                                , Ne.World.addChild(a), a.active = !0, a.addComponent(Fe)
                                .init(e.transform.position, o);
                            var s = F.GetForward(this.cameraControl.cameraNode);
                            Laya.Vector3.scale(s, 10, s), Laya.Vector3.add(s, this.cameraControl.cameraNode.transform.position, s)
                                , s.y = this.transform.position.y, this.root.transform.lookAt(s, new Laya.Vector3(0, 1, 0), !1);
                            var r = new Laya.HitResult()
                                , l = N.Build | N.Border | N.Car | N.Enemy | N.People | N.Police;
                            if (this._scene.physicsSimulation.rayCast(i, r, 300, N.Human, l), mt.NormalBullet--
                                , B.Instance.playSound(m.Shoot_AK), r.succeeded) {
                                if (console.log("射击到目标"), console.log(r.collider.owner.name), r.collider.collisionGroup == N.Build || r.collider.collisionGroup == N.Border) return void this.atkBulid(r);
                                this.atk2Obj(r.collider.owner, r.collider.collisionGroup, 20, null);
                            }
                        }
                    }
                }
            }
        }, {
            key: "jusGunAtk"
            , value: function () {
                var t = this;
                if (this.moveControl.isGround && !this.shootCD && this.myGun) {
                    if (mt.NormalBullet <= 0) return console.log("展示购买子弹页面"), void we.Instance.showBuyBulletView(!0);
                    var e = this.getChildrenByName("pos", this.myGun);
                    if (e) {
                        var a = Ne.World.getChildByName("BulletPre");
                        if (a = a.getChildByName("normal_bullet")) {
                            this.setGunFx(300), this.shootCD = !0, Laya.timer.once(75, this, function () {
                                t.shootCD = !1;
                            });
                            var n = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2)
                                , i = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                            this.cameraControl.camera.viewportPointToRay(n, i);
                            var o = new Laya.Vector3();
                            Laya.Vector3.scale(i.direction, 300, o), Laya.Vector3.add(i.origin, o, o), a = a.clone()
                                , Ne.World.addChild(a), a.active = !0, a.addComponent(Fe)
                                .init(e.transform.position, o);
                            var s = F.GetForward(this.cameraControl.cameraNode);
                            Laya.Vector3.scale(s, 10, s), Laya.Vector3.add(s, this.cameraControl.cameraNode.transform.position, s)
                                , s.y = this.transform.position.y, this.root.transform.lookAt(s, new Laya.Vector3(0, 1, 0), !1);
                            var r = new Laya.HitResult()
                                , l = N.Build | N.Border | N.Car | N.Enemy | N.People | N.Police;
                            if (this._scene.physicsSimulation.rayCast(i, r, 300, N.Human, l), mt.NormalBullet--
                                , B.Instance.playSound(m.Shoot_MP5), r.succeeded) {
                                if (console.log("射击到目标"), console.log(r.collider.owner.name), r.collider.collisionGroup == N.Build || r.collider.collisionGroup == N.Border) return void this.atkBulid(r);
                                this.atk2Obj(r.collider.owner, r.collider.collisionGroup, 20, null);
                            }
                        }
                    }
                }
            }
        }, {
            key: "rocketGunAtk"
            , value: function () {
                var t = this;
                if (this.moveControl.isGround && !this.shootCD && this.myGun) {
                    if (mt.RocketBullet <= 0) return console.log("展示购买子弹页面"), void we.Instance.showBuyBulletView(!1);
                    var e = this.getChildrenByName("pos", this.myGun);
                    if (e) {
                        var a = Ne.World.getChildByName("BulletPre");
                        if (a = a.getChildByName("huojiandan_bullet")) {
                            mt.RocketBullet--, this.setGunFx(500), this.shootCD = !0, Laya.timer.once(500, this, function () {
                                t.shootCD = !1;
                            });
                            var n = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2)
                                , i = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                            this.cameraControl.camera.viewportPointToRay(n, i);
                            var o = new Laya.Vector3();
                            Laya.Vector3.scale(i.direction, 300, o), Laya.Vector3.add(i.origin, o, o), a = a.clone()
                                , Ne.World.addChild(a), a.active = !0, a.addComponent(We)
                                .init(e.transform.position, o);
                            var s = F.GetForward(this.cameraControl.cameraNode);
                            Laya.Vector3.scale(s, 10, s), Laya.Vector3.add(s, this.cameraControl.cameraNode.transform.position, s)
                                , s.y = this.transform.position.y, this.root.transform.lookAt(s, new Laya.Vector3(0, 1, 0), !1);
                        }
                    }
                }
            }
        }, {
            key: "atkBulid"
            , value: function (t) {
                var e = Ne.World.getChildByName("BulletHole");
                if (e) {
                    e = e.clone(), Ne.World.addChild(e), e.active = !0, e.transform.position = t.point;
                    var a = new Laya.Vector3();
                    e.transform.localScale = new Laya.Vector3(.3, .3, .3), Laya.Vector3.add(t.point, t.normal, a)
                        , e.transform.lookAt(a, new Laya.Vector3(0, 1, 0), !1), setTimeout(function () {
                            e.destroy(!0);
                        }, 1e3);
                }
            }
        }, {
            key: "check_atkObj"
            , value: function (t) {
                var e = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3())
                    , a = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3())
                    , n = new Laya.HitResult()
                    , i = new Laya.HitResult()
                    , o = F.GetForward(this.root);
                Laya.Vector3.scale(o, -1, o);
                var s = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3())
                    , r = new Laya.HitResult()
                    , l = this.root.transform.position.clone();
                l.y = .5, o.y = 0, s.origin = l, s.direction = o, e.origin = l, a.origin = l, this.scene.physicsSimulation.rayCast(s, r, 1.35, N.Human, this.atkGroup);
                var u = new Laya.Vector4(o.x, .5, o.z, 0)
                    , c = new Laya.Vector4(o.x, .5, o.z, 0)
                    , h = new Laya.Matrix4x4();
                Laya.Matrix4x4.createRotationY(20, h);
                var d = new Laya.Matrix4x4();
                Laya.Matrix4x4.createRotationY(-20, d), u.y = 0, c.y = 0, Laya.Vector4.transformByM4x4(u, h, u)
                    , Laya.Vector4.transformByM4x4(c, d, c), e.direction = new Laya.Vector3(u.x, 0, u.z)
                    , a.direction = new Laya.Vector3(c.x, 0, c.z), this.scene.physicsSimulation.rayCast(e, n, 1.35, N.Human, this.atkGroup)
                    , this.scene.physicsSimulation.rayCast(a, i, 1.35, N.Human, this.atkGroup);
                var f = null
                    , y = null;
                r.succeeded ? (f = r.collider.owner, y = r) : i.succeeded ? (f = i.collider.owner
                    , y = i) : n.succeeded && (f = n.collider.owner, y = n), f && this.atk2Obj(f, y.collider.collisionGroup, t, y.point);
            }
        }, {
            key: "atk2Obj"
            , value: function (t, e, a) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                this._myAtkType == ut.Fist && (a = mt.GameATK), a *= "skin0" == mt.CurrSkin ? 1.1 : 1;
                var i = this.moveControl.state == Ae.Car;
                switch (i && e != N.Car && (a = 9999), Ht.Instance.showAtkTips(a), e) {
                case N.Car:
                    var o = t.getComponent(At);
                    if (!o) return;
                    o.subHp(a), n && o.playCarHurtFx(n);
                    break;

                case N.Police:
                    console.log("攻击警察了");
                    var s = t.getComponent(Jt);
                    s.carDeath = i;
                    var r = s.hp / s.hpMax;
                    s.subHp(a, this);
                    var l = s.hp / s.hpMax;
                    Ht.Instance.atkHpTips.showHpTips(r, l, s.humanName, !0);
                    break;

                case N.People:
                    console.log("攻击平民了");
                    var u = t.getComponent($t);
                    u.carDeath = i;
                    var c = u.hp / u.hpMax;
                    u.subHp(a, this);
                    var h = u.hp / u.hpMax;
                    Ht.Instance.atkHpTips.showHpTips(c, h, u.humanName, !0);
                    break;

                case N.Enemy:
                    var d = t.getComponent(zt);
                    d.carDeath = i;
                    var f = d.hp / d.hpMax;
                    d.subHp(a, this);
                    var y = d.hp / d.hpMax;
                    Ht.Instance.atkHpTips.showHpTips(f, y, d.humanName, !0);
                }
            }
        }, {
            key: "checkCatchRay"
            , value: function (t) {
                var e = this;
                if (!(this._catchMoveCD > 0 || this.moveControl.isNullState)) {
                    var a = mt.GetCurrSkillData(ot.Catch)[1];
                    if (this.body <= a) return we.Instance.showFreeBodyView(), void S.Instance.showLabelTips("体力不足");
                    this.stopC4();
                    var n = function () {
                        e.moveControl.playAnim(Te.catch_sky);
                        var n = new Laya.Vector2(Laya.stage.width / 2, Laya.stage.height / 2)
                            , i = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                        e.cameraControl.camera.viewportPointToRay(n, i);
                        var o = new Laya.HitResult();
                        e._scene.physicsSimulation.rayCast(i, o, 300, N.Human, N.Build | N.Border), o.succeeded ? o.collider.collisionGroup == N.Build ? (e.moveControl.catch_obj = o.collider.owner
                            , e.moveControl.catch_position = o.point.clone(), e.moveControl.catch_normal = o.normal.clone()
                            , e.moveControl.state = Ae.Catch_Sky, e.subBody(a), e._catchMoveCD = t) : (e.moveControl.state = Ae.Normal
                            , e.cameraControl.setCameraFx(!1)) : (e.cameraControl.setCameraFx(!1), e.moveControl.state = Ae.Normal);
                    };
                    if (this.moveControl.isNormalState && this.moveControl.isGround) {
                        this.moveControl.state = Ae.Null, this.moveControl.nullTime = 999;
                        var i = F.GetForward(this.cameraControl.cameraNode);
                        Laya.Vector3.scale(i, 10, i), Laya.Vector3.add(i, this.cameraControl.cameraNode.transform.position, i)
                            , i.y = this.transform.position.y, this.root.transform.lookAt(i, new Laya.Vector3(0, 1, 0), !1)
                            , this.moveControl.playAnim(Te.catch_start), Laya.timer.once(500, this, function () {
                                n();
                            });
                    } else n();
                }
            }
        }, {
            key: "relive"
            , value: function () {
                Le.ResumeGame(), this.addHp(this.hpMax);
            }
        }, {
            key: "gameFail"
            , value: function () {
                this.moveControl.playAnim(Te.death), B.Instance.playSound(m.hurt3), Laya.timer.once(1500, this, function () {
                    Le.GameEnd(!1);
                });
            }
        }, {
            key: "onCollisionEnter"
            , value: function (t) {
                if (t.other.collisionGroup == N.Car) {
                    var e = t.other.owner.getComponent(Se);
                    this.moveControl.state == Ae.Car ? (this.atk2Obj(t.other.owner, N.Car, 10, null)
                        , this.moveControl.carSpeed = 0, e && (e.waitTime = K.Random(2, 4)), B.Instance.playSound(m.zhuangche)) : e && this.hurtByCar(e);
                }
            }
        }, {
            key: "hurtByCar"
            , value: function (t) {
                if (this.moveControl.state != Ae.Catch_Sky && !(t.currSpeed <= 0)) {
                    this.moveControl.state == Ae.Fly && Ht.Instance.flyUI.onClick_FlyDown(null), t.waitTime = K.Random(6, 10);
                    var e = F.GetForward(t.root);
                    Laya.Vector3.scale(e, -1, e);
                    var a = new Laya.Vector3();
                    Laya.Vector3.subtract(this.transform.position, t.transform.position, a), Laya.Vector3.normalize(a, a)
                        , Laya.Vector3.add(a, e, a);
                    var n = t.currSpeed;
                    Laya.Vector3.scale(a, n, a), this.moveControl.state = Ae.Null, this.moveControl.nullTime = .5
                        , a.y = 4, this.moveControl.character.jump(a), this.subHp(10, null), this.atk2Obj(t.root, N.Car, 1, this.transform.position)
                        , this.moveControl.playAnim(Te.jump_hold);
                }
            }
        }, {
            key: "onTriggerEnter"
            , value: function (t) {
                this.moveControl.state == Ae.Car && (t.collisionGroup != N.People && t.collisionGroup != N.Police && t.collisionGroup != N.Enemy || console.log("玩家车撞人")
                    , 0 != this.moveControl.carSpeed && this.atk2Obj(t.owner, t.collisionGroup, 100));
            }
        }, {
            key: "setGunFx"
            , value: function (t) {
                if (this.gun_fx && this.myGun && !this.gun_fx.active) {
                    var e = this.myGun.getChildByName("pos");
                    e && (e.addChild(this.gun_fx), this.gun_fx.transform.localPosition = new Laya.Vector3(0, 0, 0)
                        , this.gun_fx.active = !0, Laya.timer.once(t, this, this.resetGunFx, null, !0));
                }
            }
        }, {
            key: "resetGunFx"
            , value: function () {
                this.gun_fx && (this.myWeaponParent.addChild(this.gun_fx), this.gun_fx.active = !1);
            }
        }, {
            key: "cameraControl"
            , get: function () {
                return this._cameraControl;
            }
        }, {
            key: "moveControl"
            , get: function () {
                return this._moveControl;
            }
        }, {
            key: "scene"
            , get: function () {
                return this._scene;
            }
        }, {
            key: "getBaby"
            , get: function () {
                return this.baby_mesh.active;
            }
            , set: function (t) {
                this.baby_mesh && (this.baby_mesh.active = t);
            }
        }, {
            key: "c4action"
            , get: function () {
                return this._c4action;
            }
            , set: function (t) {
                this._c4action != t && (this._c4action = t, t || (this._c4Time = 0));
            }
        }, {
            key: "myAtkType"
            , get: function () {
                return this._myAtkType;
            }
            , set: function (t) {
                if (this._myAtkType = t, this.myGun = null, this.myWeaponParent) {
                    for (var e = 0; e < this.myWeaponParent.numChildren; e++) {
                        var a = this.myWeaponParent.getChildAt(e);
                        a.active = a.name == t, a.active && (this.myGun = a, this.gun_fx = F.GetChildrenByName("fx", this.myGun));
                    }
                    this.shootCD = !1, Ht.Instance.atkButton.updateWeaponUI();
                }
                console.log("my gun:".concat(this.myGun, ",")
                    .concat(t));
            }
        }, {
            key: "catchSkillCD"
            , get: function () {
                return this._catchSkillCD;
            }
        }, {
            key: "catchMoveCD"
            , get: function () {
                return this._catchMoveCD;
            }
        }, {
            key: "getVestHpPro"
            , get: function () {
                return this.vestHp / 100;
            }
        }, {
            key: "errorValue"
            , get: function () {
                return this._errorValue;
            }
            , set: function (t) {
                this._errorValue = t;
            }
        }]), a;
    }(Xt);
    ze.Instance = null;
    var qe = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.uiRoot = this.owner, b.Instance.adView(this.uiRoot), this.uiRoot.VideoButton.on(Laya.Event.CLICK, this, this.onClick_Video)
                        , this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close), this.bannerState = H.GetBannerStatus()
                        , this.uiRoot.VideoIcon.visible = H.IsShowVideoIcon;
                }
        }, {
                key: "onEnable"
                , value: function () {
                    var t = this;
                    H.HideBanner(), H.IsButtonDelayStatus && (this.uiRoot.CloseButton.visible = !1
                        , this.errBanner(), setTimeout(function () {
                            t.uiRoot.CloseButton.visible = !0;
                        }, 3500));
                }
        }, {
                key: "errBanner"
                , value: function () {
                    Ht.Instance && H.IsBannerError(Ht.Instance.customTime) && setTimeout(function () {
                        H.ShowBanner(), setTimeout(function () {
                            H.HideBanner();
                        }, 1e3);
                    }, 300);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onClick_Video"
                , value: function () {
                    var t = this;
                    B.Instance.playSound(m.Button), H.ShowVideo(function () {
                        B.Instance.playSound(m.Get0), ze.Instance.addBody(ze.Instance.bodyMax), S.Instance.showLabelTips("体力恢复了!")
                            , t.hide();
                    });
                }
        }, {
                key: "onClick_Close"
                , value: function () {
                    B.Instance.playSound(m.Button), this.hide();
                }
        }, {
                key: "hide"
                , value: function () {
                    this.uiRoot.close(), this.bannerState ? H.ShowBanner() : H.HideBanner(), H.ShowInterstitial();
                }
        }]), a;
        }(Laya.Script)
        , Je = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.uiRoot = this.owner, b.Instance.adView(this.uiRoot), this.uiRoot.GoldLabel.text = "".concat(500)
                        , this.uiRoot.VideoButton.on(Laya.Event.CLICK, this, this.onClick_Video), this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close)
                        , this.bannerState = H.GetBannerStatus(), this.uiRoot.VideoIcon.visible = H.IsShowVideoIcon;
                }
        }, {
                key: "onEnable"
                , value: function () {
                    var t = this;
                    H.ShowBanner(), H.IsButtonDelayStatus && (this.uiRoot.CloseButton.visible = !1
                        , setTimeout(function () {
                            t.uiRoot.CloseButton.visible = !0;
                        }, 3500));
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onClick_Video"
                , value: function () {
                    B.Instance.playSound(m.Button), H.ShowVideo(function () {
                        B.Instance.playSound(m.Get0), mt.Coin += 500, S.Instance.showLabelTips("恭喜获得金币".concat(500));
                    });
                }
        }, {
                key: "onClick_Close"
                , value: function () {
                    B.Instance.playSound(m.Button), this.hide();
                }
        }, {
                key: "hide"
                , value: function () {
                    this.uiRoot.close(), this.bannerState ? H.ShowBanner() : H.HideBanner();
                }
        }]), a;
        }(Laya.Script)
        , Qe = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.uiRoot = this.owner, b.Instance.adView(this.uiRoot);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    Le.PauseGame(), this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close)
                        , this.startAnim();
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "startAnim"
                , value: function () {
                    var t = this;
                    this.updateLock();
                    for (var e = 0; e < this.uiRoot.UIBox.numChildren; e++) {
                        var a = this.uiRoot.UIBox.getChildAt(e);
                        Laya.Tween.from(a, {
                            alpha: 0
                            , scaleX: 0
                            , scaleY: 0
                        }, 100 + 50 * e, null);
                    }
                    Laya.timer.once(300, this, function () {
                        t.addListen();
                    }), this.updateCurr();
                }
        }, {
                key: "addListen"
                , value: function () {
                    var t = this;
                    this.uiRoot.HandGun.on(Laya.Event.CLICK, this, function () {
                        mt.IsHasGun(ut.HandGun) ? ze.Instance.myAtkType = ut.HandGun : we.Instance.showBuyWeaponView(ut.HandGun, function () {
                            t.updateLock();
                        }), t.updateCurr();
                    }), this.uiRoot.AK.on(Laya.Event.CLICK, this, function () {
                        mt.IsHasGun(ut.Ak) ? ze.Instance.myAtkType = ut.Ak : we.Instance.showBuyWeaponView(ut.Ak, function () {
                            t.updateLock();
                        }), t.updateCurr();
                    }), this.uiRoot.Fist.on(Laya.Event.CLICK, this, function () {
                        mt.IsHasGun(ut.Fist) ? ze.Instance.myAtkType = ut.Fist : S.Instance.showLabelTips("未拥有该武器")
                            , t.updateCurr();
                    }), this.uiRoot.JustinGatlin.on(Laya.Event.CLICK, this, function () {
                        mt.IsHasGun(ut.JustinGatlin) ? ze.Instance.myAtkType = ut.JustinGatlin : S.Instance.showLabelTips("该武器隐藏在城市中，拾取可解锁。")
                            , t.updateCurr();
                    }), this.uiRoot.RocketLauncher.on(Laya.Event.CLICK, this, function () {
                        mt.IsHasGun(ut.RocketLauncher) ? ze.Instance.myAtkType = ut.RocketLauncher : S.Instance.showLabelTips("该武器隐藏在城市中，拾取可解锁。")
                            , t.updateCurr();
                    });
                }
        }, {
                key: "updateCurr"
                , value: function () {
                    this.uiRoot.CurrButton.skin = "ObjIcon/".concat(ze.Instance.myAtkType, "UI.png");
                }
        }, {
                key: "updateLock"
                , value: function () {
                    mt.IsHasGun(ut.Ak) ? (this.uiRoot.AK_Lock.visible = !1, this.uiRoot.AK.alpha = 1) : (this.uiRoot.AK_Lock.visible = !0
                            , this.uiRoot.AK.alpha = .7), mt.IsHasGun(ut.HandGun) ? (this.uiRoot.HandGun_Lock.visible = !1
                            , this.uiRoot.HandGun.alpha = 1) : (this.uiRoot.HandGun_Lock.visible = !0, this.uiRoot.HandGun.alpha = .7)
                        , mt.IsHasGun(ut.Fist) ? (this.uiRoot.Fist_Lock.visible = !1, this.uiRoot.Fist.alpha = 1) : (this.uiRoot.Fist_Lock.visible = !0
                            , this.uiRoot.Fist.alpha = .7), mt.IsHasGun(ut.JustinGatlin) ? (this.uiRoot.JustinGatlin_Lock.visible = !1
                            , this.uiRoot.JustinGatlin.alpha = 1) : (this.uiRoot.JustinGatlin_Lock.visible = !0
                            , this.uiRoot.JustinGatlin.alpha = .7), mt.IsHasGun(ut.RocketLauncher) ? (this.uiRoot.RocketLauncher_Lock.visible = !1
                            , this.uiRoot.RocketLauncher.alpha = 1) : (this.uiRoot.RocketLauncher_Lock.visible = !0
                            , this.uiRoot.RocketLauncher.alpha = .7);
                }
        }, {
                key: "onClick_Close"
                , value: function () {
                    B.Instance.playSound(m.Button), this._hide(), Le.ResumeGame();
                }
        }, {
                key: "_hide"
                , value: function () {
                    this.uiRoot.close();
                }
        }]), a;
        }(Laya.Script)
        , Ze = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .uiRoot = null, t.select = mt.Level > 6 ? 6 : mt.Level
                    , t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    var t = this;
                    this.uiRoot = this.owner, this.uiRoot.Video_LockButton.visible = mt.Level < 7, b.Instance.adView(this.uiRoot);
                    for (var e = function (e) {
                            var a = t.uiRoot["LV_".concat(e)];
                            a && a.on(Laya.Event.CLICK, t, function () {
                                t.select = e, t.updateSelectInfo();
                            });
                        }, a = 1; a <= 7; a++) e(a);
                }
        }, {
                key: "_hide"
                , value: function () {
                    this.uiRoot.close();
                }
        }, {
                key: "onClick_Close"
                , value: function () {
                    this._hide();
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close), this.uiRoot.Video_LockButton.on(Laya.Event.CLICK, this, this.onClick_finishAllLevel)
                        , this.uiRoot.StartButton.on(Laya.Event.CLICK, this, this.onClick_StartGame), this.uiRoot.VideoIcon_LockButton.visible = H.IsShowVideoIcon
                        , this.updateCurrLvInfo(), this.updateSelectInfo();
                }
        }, {
                key: "updateCurrLvInfo"
                , value: function () {
                    for (var t = 0; t < Nt.length; t++) {
                        var e = t + 1
                            , a = this.uiRoot["LV_".concat(e)];
                        if (a) {
                            var n = a.getChildByName("curr")
                                , i = a.getChildByName("lock")
                                , o = a.getChildByName("normal")
                                , s = a.getChildByName("finish")
                                , r = a.getChildByName("atk");
                            n.visible = !1, s.visible = !1, i.visible = !1, a.alpha = 1, o.visible = !0, e > mt.Level && (i.visible = !0
                                    , a.alpha = .5), e < mt.Level && (s.visible = !0), e == mt.Level && (n.visible = !0)
                                , r.visible = !o.visible;
                        }
                    }
                }
        }, {
                key: "updateSelectInfo"
                , value: function () {
                    mt.Level > 6 && (this.uiRoot.Video_LockButton.visible = !1);
                    var t = Nt[this.select];
                    t && (this.uiRoot.LvInfoBox.visible = !0, this.uiRoot.LvInfoBox_GoldLabel.text = "".concat(t.reward)
                        , this.uiRoot.LvInfoBox_InfoLabel.text = "".concat(t.info), this.uiRoot.LvInfoBox_LvLabel.text = "第".concat(this.select, "关"));
                }
        }, {
                key: "_upTween"
                , value: function (t) {
                    var e = this;
                    Laya.Tween.to(t, {
                        top: -50
                    }, 1e3, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(t, {
                            top: -60
                        }, 1e3, null, Laya.Handler.create(e, function () {
                            e._upTween(t);
                        }));
                    }));
                }
        }, {
                key: "onClick_StartGame"
                , value: function () {
                    this.select > mt.Level ? we.Instance.showDialogBox("需要先完成前一个关卡才能进行游戏", "") : (Le.StartGame(this.select)
                        , this._hide());
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onClick_finishAllLevel"
                , value: function () {
                    var t = this;
                    H.ShowVideo(function () {
                        mt.Level = 7, t.updateCurrLvInfo(), t.updateSelectInfo(), S.Instance.showLabelTips("全部完成,请自由探索")
                            , $.emit(z.ChangeStartUI);
                    });
                }
        }]), a;
        }(Laya.Script)
        , $e = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .label = null, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.label = F.GetChildrenByName("label", this.owner), $.on(z.ChangeCoin, this._updateCoin, this);
                }
        }, {
                key: "onDestroy"
                , value: function () {
                    $.off(z.ChangeCoin, this._updateCoin, this);
                }
        }, {
                key: "onClick"
                , value: function (t) {
                    B.Instance.playSound(m.Button), we.Instance.showPopViewByLaya(j.FreeGoldView);
                }
        }, {
                key: "_updateCoin"
                , value: function () {
                    this.label && !this.label.destroyed && mt.Coin >= 0 && (this.label.text = mt.Coin.toString());
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this._updateCoin();
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , ta = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .uiRoot = null, t._time = 5, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    var t = this;
                    this.uiRoot = this.owner, this.uiRoot.width = Laya.stage.width, this.uiRoot.height = Laya.stage.height
                        , this.uiRoot.pos(0, 0), H.ShowBanner(), this.uiRoot.VideoIcon.visible = H.IsShowVideoIcon
                        , H.IsButtonDelayStatus && (this.uiRoot.CancelButton.visible = !1, setTimeout(function () {
                            t.uiRoot.CancelButton.visible = !0;
                        }, 3500));
                }
        }, {
                key: "timer"
                , value: function () {
                    if (this._time < 0) this.onClick_cancel();
                    else {
                        for (var t = null, e = 0; e < 6; e++) {
                            var a = this.uiRoot["T".concat(e)];
                            a.visible = this._time == e, a.visible && (t = a);
                        }
                        B.Instance.playSound(m.CountDown), t.alpha = 0, t.scale(3, 3), Laya.Tween.to(t, {
                            scaleX: 1
                            , scaleY: 1
                            , alpha: 1
                        }, 500, null, Laya.Handler.create(this, function () {
                            Laya.Tween.to(t, {
                                alpha: 0
                            }, 500);
                        })), this._time--, Laya.timer.once(1e3, this, this.timer);
                    }
                }
        }, {
                key: "onClick_cancel"
                , value: function () {
                    B.Instance.playSound(m.Button), Laya.timer.clear(this, this.timer), ze.Instance.gameFail()
                        , this._hide();
                }
        }, {
                key: "onClick_video"
                , value: function () {
                    var t = this;
                    B.Instance.playSound(m.Button), H.ShowVideo(function () {
                        Laya.timer.clear(t, t.timer), ze.Instance.relive(), t._hide();
                    });
                }
        }, {
                key: "_hide"
                , value: function () {
                    H.HideBanner(), this.uiRoot.close();
                }
        }, {
                key: "onEnable"
                , value: function () {
                    var t = this;
                    this.uiRoot.CancelButton.on(Laya.Event.CLICK, this, this.onClick_cancel), this.uiRoot.VideoButton.on(Laya.Event.CLICK, this, this.onClick_video)
                        , this.uiRoot.CancelButton.visible = !0, Laya.timer.once(3e3, this, function () {
                            t.uiRoot.CancelButton.visible = !0;
                        });
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , ea = [{
            type: "gold"
            , count: 100
    }, {
            type: "gold"
            , count: 100
    }, {
            type: "gold"
            , count: 105
    }, {
            type: "gold"
            , count: 110
    }, {
            type: "gold"
            , count: 110
    }, {
            type: "gold"
            , count: 120
    }, {
            type: "gold"
            , count: 200
    }]
        , aa = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .uiRoot = null, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.uiRoot = this.owner, this.uiRoot.width = Laya.stage.width, this.uiRoot.height = Laya.stage.width
                        , this.uiRoot.pos(0, 0);
                }
        }, {
                key: "updateReward"
                , value: function () {
                    for (var t = this, e = function (e) {
                            var a = t.uiRoot["D".concat(e + 1)];
                            if (!a) return "continue";
                            var n = a.getChildByName("icon")
                                , i = a.getChildByName("day");
                            i && (i.text = "第".concat(e + 1, "天")), n.skin = "StartSceneUI/金币.png", a.on(Laya.Event.CLICK, t, function () {
                                t.onClick_Sign(e);
                            }), 6 != e && (a.getChildByName("name")
                                .text = "".concat(ea[e].count));
                        }, a = 0; a < 7; a++) e(a);
                }
        }, {
                key: "updateSign"
                , value: function () {
                    for (var t = this, e = function (e) {
                            var a = t.uiRoot["D".concat(e + 1)]
                                , n = a.getChildByName("get");
                            if (n.visible = !1, 6 == e) return e < rt.SignInfo.count ? (n.visible = !0, "continue") : "continue";
                            var i = a.getChildByName("yes")
                                , o = a.getChildByName("no")
                                , s = a.getChildByName("curr");
                            e < rt.SignInfo.count ? (i.visible = !0, o.visible = !1, s.visible = !1, n.visible = !0) : rt.SignInfo.isSign && rt.SignInfo.count == e ? (i.visible = !1
                                , o.visible = !1, s.visible = !0, Laya.timer.once(500, t, function () {
                                    nt.Instance.addTeach(a, 0, null, !1), nt.Instance.showNextTeach();
                                })) : (i.visible = !1, o.visible = !0, s.visible = !1);
                        }, a = 0; a < 7; a++) e(a);
                }
        }, {
                key: "onClick_Sign"
                , value: function (t) {
                    if (rt.SignInfo.isSign) {
                        if (t == rt.SignInfo.count) {
                            B.Instance.playSound(m.Button);
                            var e = rt.SignInfo.count++ % 7;
                            rt.SignInfo.isSign = !1, lt.SetKeyValue(it.SignInfo);
                            var a = ea[e];
                            mt.Coin += a.count, this.updateSign(), S.Instance.showLabelTips("签到成功,获得".concat(a.count, "金币"))
                                , nt.Instance.clearTeach();
                        }
                    } else S.Instance.showLabelTips("今天已经进行过签到了");
                }
        }, {
                key: "onClick_Close"
                , value: function () {
                    nt.Instance.clearTeach(), B.Instance.playSound(m.Button), this.uiRoot.close();
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this.updateReward(), this.updateSign(), this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }], [{
                key: "InitSignData"
                , value: function () {
                    var t = new Date()
                        .toLocaleDateString();
                    rt.SignInfo.date != t && (7 == rt.SignInfo.count && (rt.SignInfo.count = 0), rt.SignInfo.date = t
                        , rt.SignInfo.isSign = !0, lt.SetKeyValue(it.SignInfo));
                }
        }]), a;
        }(Laya.Script)
        , na = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    ._select = null, t._uiScene = null
                    , t._camera = null, t._role = null, t._animtor = null, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.uiRoot = this.owner, b.Instance.adView(this.uiRoot);
                }
        }, {
                key: "updateSkin"
                , value: function () {
                    for (var t = ["WoQuan", "FangSongShou", "Tou", "body"], e = Ne.World.getChildByName("PlayerMat"), a = null, n = 0; n < e.meshRenderer.materials.length; n++)
                        if (-1 != e.meshRenderer.materials[n].name.indexOf(mt.CurrSkin)) {
                            a = e.meshRenderer.materials[n];
                            break;
                        }
                    for (var i = 0; i < t.length; i++) {
                        var o = F.GetChildrenByName(t[i], this._role);
                        console.log(o), o && (o instanceof Laya.SkinnedMeshSprite3D ? o.skinnedMeshRenderer.material = a : o.meshRenderer.material = a);
                    }
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this.initRole(), this._select = null, this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close)
                        , this.uiRoot.ShopList.vScrollBarSkin = "", this.uiRoot.ShopList.renderHandler = new Laya.Handler(this, this._render)
                        , this.uiRoot.ShopList.mouseHandler = new Laya.Handler(this, this._click), this.uiRoot.GoldBuyButton.on(Laya.Event.CLICK, this, this.goldBuy)
                        , this.uiRoot.BuyVideoButton.on(Laya.Event.CLICK, this, this.videoBuy), this._updateList()
                        , this.updateSkin(), this.uiRoot.VideoIcon.visible = H.IsShowVideoIcon;
                }
        }, {
                key: "_updateList"
                , value: function () {
                    var t = K.DeepClone(ht);
                    this.uiRoot.ShopList.array = t, Laya.timer.once(100, this, this._updateSkinInfo);
                }
        }, {
                key: "onClick_Close"
                , value: function () {
                    B.Instance.playSound(m.Button), this._hide();
                }
        }, {
                key: "_hide"
                , value: function () {
                    this.uiRoot.close();
                }
        }, {
                key: "_render"
                , value: function (t, e) {
                    if (t.dataSource) {
                        var a = t.getChildByName("icon")
                            , n = t.getChildByName("price")
                            .getChildByName("goldLabel")
                            , i = t.getChildByName("name")
                            , o = t.getChildByName("info")
                            , s = t.getChildByName("skillInfo");
                        i.text = t.dataSource.name, o.text = t.dataSource.info, s.text = t.dataSource.skillInfo
                            , n.text = "".concat(t.dataSource.coin), a.skin = t.dataSource.icon;
                    }
                }
        }, {
                key: "_updateSkinInfo"
                , value: function () {
                    this.uiRoot.BuyVideoButton.visible = !1, this.uiRoot.GoldBuyButton.visible = !1;
                    for (var t = 0; t < this.uiRoot.ShopList.cells.length; t++) {
                        var e = this.uiRoot.ShopList.cells[t]
                            , a = e.dataSource;
                        if (a) {
                            var n = e.getChildByName("yes");
                            n.visible = this._select == a.type;
                            var i = e.getChildByName("curr")
                                , o = e.getChildByName("price");
                            i.visible = mt.CurrSkin == a.type, o.visible = !mt.IsHasSkin(a.type), o.alpha = 0
                                , n.visible && (o.visible ? (this.uiRoot.BuyVideoButton.visible = !0, this.uiRoot.GoldBuyButton.visible = !0
                                    , this.uiRoot.GoldBuyButton_Label.text = "".concat(a.coin)) : (this.uiRoot.BuyVideoButton.visible = !1
                                    , this.uiRoot.GoldBuyButton.visible = !1));
                        }
                    }
                }
        }, {
                key: "goldBuy"
                , value: function () {
                    if (this._select) {
                        var t = this.getShopInfo(this._select);
                        t && mt.Coin >= t.coin ? (mt.Coin -= t.coin, mt.GetSkin(this._select), mt.CurrSkin = this._select
                            , S.Instance.showLabelTips("获得新皮肤"), this._updateSkinInfo(), this.updateSkin()) : we.Instance.showPopViewByLaya(j.FreeGoldView);
                    }
                }
        }, {
                key: "videoBuy"
                , value: function () {
                    var t = this;
                    H.ShowVideo(function () {
                        mt.GetSkin(t._select), mt.CurrSkin = t._select, S.Instance.showLabelTips("获得新皮肤")
                            , t._updateSkinInfo(), t.updateSkin();
                    });
                }
        }, {
                key: "getShopInfo"
                , value: function (t) {
                    for (var e = 0; e < ht.length; e++)
                        if (ht[e].type == t) return ht[e];
                    return null;
                }
        }, {
                key: "_click"
                , value: function (t, e) {
                    if (t.type == Laya.Event.CLICK) {
                        B.Instance.playSound(m.Button);
                        var a = this.uiRoot.ShopList.getCell(e);
                        a.dataSource && (this._select = a.dataSource.type, mt.IsHasSkin(a.dataSource.type) && (mt.CurrSkin = a.dataSource.type
                            , this.updateSkin()), this._updateSkinInfo());
                    }
                }
        }, {
                key: "initRole"
                , value: function () {
                    var t = this;
                    this._uiScene = new Laya.Scene3D(), this.uiRoot.addChild(this._uiScene);
                    var e = Ne.World.getChildByName("Model")
                        .getChildByName("zhujue");
                    this._role = e.clone(), this._uiScene.addChild(this._role);
                    var a = new Laya.DirectionLight();
                    this._uiScene.addChild(a), this._camera = new Laya.Camera(), this._uiScene.addChild(this._camera)
                        , this._camera.transform.position = new Laya.Vector3(0, 0, 3), this._camera.clearFlag = Laya.CameraClearFlags.DepthOnly
                        , this._camera.orthographic = !0, Laya.timer.once(50, this, function () {
                            t._role.active = !0;
                            var e = new Laya.Vector3(t.uiRoot.PlayerSkinUI.x, t.uiRoot.PlayerSkinUI.y, 0);
                            t._camera.convertScreenCoordToOrthographicCoord(e, e), t._role.transform.position = new Laya.Vector3(e.x, e.y, 0)
                                , t._role.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                        }), this._animtor = F.GetComponentInChildren(Laya.Animator, this._role), this._role.transform.localScale = new Laya.Vector3(4, 4, 4);
                }
        }, {
                key: "playAnim"
                , value: function (t) {
                    this._animtor && this._animtor.play(t);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , ia = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    .uiRoot = null, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.uiRoot = this.owner, b.Instance.adView(this.uiRoot), this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Close)
                        , this.uiRoot.TaskList.vScrollBarSkin = "", this.uiRoot.TaskList.renderHandler = new Laya.Handler(this, this._render)
                        , this.uiRoot.TaskList.mouseHandler = new Laya.Handler(this, this._click), this.uiRoot.Video_TaskButton.on(Laya.Event.CLICK, this, this.onClick_finishAllTask)
                        , this.uiRoot.VideoIcon_TaskButton.visible = H.IsShowVideoIcon;
                }
        }, {
                key: "updateTaskList"
                , value: function () {
                    this.uiRoot.TaskList.array = Pt.GetTaskList();
                }
        }, {
                key: "_render"
                , value: function (t, e) {
                    if (t.dataSource) {
                        var a = t.dataSource
                            , n = Pt.GetTask(a.id)
                            , i = Pt.GetTaskJsonData(a.id)
                            , o = t.getChildByName("taskName")
                            , s = t.getChildByName("taskInfo")
                            , r = t.getChildByName("yes")
                            , l = t.getChildByName("no")
                            , u = t.getChildByName("progress")
                            , c = t.getChildByName("progress_label")
                            , h = t.getChildByName("icon")
                            , d = t.getChildByName("reward_label");
                        h.skin = "StartSceneUI/金币.png", d.text = i.reward, o.text = i.title, r.visible = 1 == n.isFinish
                            , l.visible = !r.visible;
                        var f = n.progress / n.aim;
                        f = K.Clamp(f, 0, 1), u.width = 330 * f, c.text = "".concat((100 * f)
                            .toFixed(1), "%");
                        var y = K.DeepClone(i.info);
                        y = y.replace("xxx", i.aim), s.text = y;
                    }
                }
        }, {
                key: "_click"
                , value: function (t, e) {
                    if (t.type == Laya.Event.CLICK) {
                        var a = this.uiRoot.TaskList.getCell(e);
                        if (a.dataSource) {
                            var n = a.dataSource;
                            if (n.progress / n.aim < 1) console.log("未完成");
                            else if (!n.isFinish) {
                                Pt.FinishTask(n.id);
                                var i = Pt.GetTaskJsonData(n.id);
                                console.log(n, i);
                                var o = i.reward;
                                mt.Coin += o, this.updateTaskList(), S.Instance.showLabelTips("完成所有任务,获得金币".concat(o));
                            }
                        }
                    }
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this.updateTaskList(), H.HideBanner();
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onClick_Close"
                , value: function () {
                    B.Instance.playSound(m.Button), this.uiRoot.close(), H.ShowBanner();
                }
        }, {
                key: "onClick_finishAllTask"
                , value: function () {
                    var t = this;
                    H.ShowVideo(function () {
                        for (var e = 0, a = xt, n = 0; n < a.length; n++) {
                            var i = a[n];
                            Pt.IsFinishTask(i.id) || (Pt.FinishTask(i.id), console.log(i), e += i.reward);
                        }
                        mt.Coin += e, t.updateTaskList(), S.Instance.showLabelTips("完成所有任务,获得金币".concat(e));
                    });
                }
        }]), a;
        }(Laya.Script)
        , oa = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.apply(this, arguments))
                    .uiRoot = null, t._uiScene = null
                    , t._camera = null, t._role = null, t.bannerState = H.GetBannerStatus(), t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this.uiRoot = this.owner, b.Instance.adView(this.uiRoot);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this.initRole(), this.uiRoot.CloseButton.on(Laya.Event.CLICK, this, this.onClick_Cancel)
                        , this.uiRoot.VideoButton.once(Laya.Event.CLICK, this, this.onClick_Video), H.ShowBanner()
                        , Le.PauseGame(), Pe.MedicalCD = !0;
                }
        }, {
                key: "initRole"
                , value: function () {
                    var t = this;
                    this._uiScene = new Laya.Scene3D(), this.uiRoot.addChild(this._uiScene);
                    var e = Ne.World.getChildByName("Map")
                        .getChildByName("Key_yiliaobao");
                    if (e) {
                        this._role = e.clone(), this._uiScene.addChild(this._role);
                        var a = new Laya.DirectionLight();
                        this._uiScene.addChild(a), this._camera = new Laya.Camera(), this._uiScene.addChild(this._camera)
                            , this._camera.transform.position = new Laya.Vector3(0, 0, 3), this._camera.clearFlag = Laya.CameraClearFlags.DepthOnly
                            , this._camera.orthographic = !0, Laya.timer.once(50, this, function () {
                                t._role.active = !0;
                                var e = new Laya.Vector3(t.uiRoot.hpIcon.x, t.uiRoot.hpIcon.y, 0);
                                t._camera.convertScreenCoordToOrthographicCoord(e, e), t._role.transform.position = new Laya.Vector3(e.x, e.y, 0)
                                    , t._role.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                            });
                    }
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onClick_Video"
                , value: function () {
                    var t = this;
                    H.ShowVideo(function () {
                        Le.ResumeGame(), t.success();
                    }, function () {
                        t.uiRoot.VideoButton.once(Laya.Event.CLICK, t, t.onClick_Video);
                    }, function () {
                        t.uiRoot.VideoButton.once(Laya.Event.CLICK, t, t.onClick_Video);
                    }), B.Instance.playSound(m.Button);
                }
        }, {
                key: "onClick_Cancel"
                , value: function () {
                    Le.ResumeGame(), this.hide(), B.Instance.playSound(m.Button);
                }
        }, {
                key: "hide"
                , value: function () {
                    this.bannerState || (H.HideBanner(), K.Random(0, 1e3) % 3 && H.ShowInterstitial())
                        , this.uiRoot.close(), setTimeout(function () {
                            Pe.MedicalCD = !1;
                        }, H.GetCustomStatus(1) ? 5e3 : 3e3);
                }
        }, {
                key: "success"
                , value: function () {
                    ze.Instance.addHp(ze.Instance.hpMax), S.Instance.showLabelTips("恢复了损失的生命值"), B.Instance.playSound(m.Get0)
                        , this.hide();
                }
        }]), a;
        }(Laya.Script)
        , sa = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
        , ra = function () {
            function t() {
                (0, s.default)(this, t);
            }
            return (0, r.default)(t, null, [{
                key: "isPrime"
                , value: function (t) {
                    if (0 != (1 & t)) {
                        for (var e = Math.sqrt(t), a = 3; a <= e; a += 2)
                            if (0 == (t & a)) return !1;
                        return !0;
                    }
                    return 2 == t;
                }
        }, {
                key: "getPrime"
                , value: function (t) {
                    if (t < 0) throw new Error("参数错误 min不能小于0");
                    for (var e = 0; e < this.primes.length; e++) {
                        var a = this.primes[e];
                        if (a >= t) return a;
                    }
                    for (var n = 1 | t; n < Number.MAX_VALUE; n += 2)
                        if (this.isPrime(n) && (n - 1) % this.hashPrime != 0) return n;
                    return t;
                }
        }, {
                key: "expandPrime"
                , value: function (t) {
                    var e = 2 * t;
                    return e > this.maxPrimeArrayLength && this.maxPrimeArrayLength > t ? this.maxPrimeArrayLength : this.getPrime(e);
                }
        }, {
                key: "getHashCode"
                , value: function (t) {
                    var e, a = 0;
                    if (0 == (e = "object" == (0, n.default)(t) ? JSON.stringify(t) : t.toString())
                        .length) return a;
                    for (var i = 0; i < e.length; i++) a = (a << 5) - a + e.charCodeAt(i), a &= a;
                    return a;
                }
        }, {
                key: "randomUUID"
                , value: function () {
                    var t = 4294967295 * Math.random() | 0
                        , e = 4294967295 * Math.random() | 0
                        , a = 4294967295 * Math.random() | 0
                        , n = 4294967295 * Math.random() | 0;
                    return sa[255 & t] + sa[t >> 8 & 255] + sa[t >> 16 & 255] + sa[t >> 24 & 255] + "-" + sa[255 & e] + sa[e >> 8 & 255] + "-" + sa[e >> 16 & 15 | 64] + sa[e >> 24 & 255] + "-" + sa[63 & a | 128] + sa[a >> 8 & 255] + "-" + sa[a >> 16 & 255] + sa[a >> 24 & 255] + sa[255 & n] + sa[n >> 8 & 255] + sa[n >> 16 & 255] + sa[n >> 24 & 255];
                }
        }, {
                key: "computeHash"
                , value: function () {
                    for (var t = 2166136261, e = 0; e < arguments.length; e++) t = 16777619 * (t ^ (e < 0 || arguments.length <= e ? void 0 : arguments[e]));
                    return t += t << 13, t ^= t >> 7, t += t << 3, (t ^= t >> 17) + (t << 5);
                }
        }]), t;
        }();

    function la(t) {
        switch ((0, n.default)(t)) {
        case "boolean":
        case "number":
        case "string":
            return "" + t;

        case "function":
            return (e = t)
                .className || e.name;

        default:
            return t.uuid = t.uuid ? t.uuid : ra.randomUUID(), t.uuid;
        }
        var e;
    }
    ra.hashCollisionThreshold = 100, ra.hashPrime = 101, ra.primes = [3, 7, 11, 17, 23, 29, 37, 47, 59, 71, 89, 107, 131, 163, 197, 239, 293, 353, 431, 521, 631, 761, 919, 1103, 1327, 1597, 1931, 2333, 2801, 3371, 4049, 4861, 5839, 7013, 8419, 10103, 12143, 14591, 17519, 21023, 25229, 30293, 36353, 43627, 52361, 62851, 75431, 90523, 108631, 130363, 156437, 187751, 225307, 270371, 324449, 389357, 467237, 560689, 672827, 807403, 968897, 1162687, 1395263, 1674319, 2009191, 2411033, 2893249, 3471899, 4166287, 4999559, 5999471, 7199369]
        , ra.maxPrimeArrayLength = 2146435069;
    var ua = function () {
            function t() {
                (0, s.default)(this, t), this.clear();
            }
            return (0, r.default)(t, [{
                key: "clear"
                , value: function () {
                    this._map = {}, this._keys = {};
                }
        }, {
                key: "values"
                , value: function () {
                    var t = []
                        , e = this._map;
                    for (var a in e) t.push(e[a]);
                    return t;
                }
        }, {
                key: "contains"
                , value: function (t) {
                    var e = this._map;
                    for (var a in e)
                        if (t === e[a]) return !0;
                    return !1;
                }
        }, {
                key: "containsKey"
                , value: function (t) {
                    return la(t) in this._map;
                }
        }, {
                key: "containsValue"
                , value: function (t) {
                    var e = this._map;
                    for (var a in e)
                        if (t === e[a]) return !0;
                    return !1;
                }
        }, {
                key: "get"
                , value: function (t) {
                    return this._map[la(t)];
                }
        }, {
                key: "isEmpty"
                , value: function () {
                    return 0 === Object.keys(this._map)
                        .length;
                }
        }, {
                key: "keys"
                , value: function () {
                    var t = this._map
                        , e = [];
                    for (var a in t) e.push(t[a]);
                    return e;
                }
        }, {
                key: "put"
                , value: function (t, e) {
                    var a = la(t);
                    this._map[a] = e, this._keys[a] = t;
                }
        }, {
                key: "remove"
                , value: function (t) {
                    var e = this._map
                        , a = la(t)
                        , n = e[a];
                    return delete e[a], delete this._keys[a], n;
                }
        }, {
                key: "size"
                , value: function () {
                    return Object.keys(this._map)
                        .length;
                }
        }]), t;
        }()
        , ca = function () {
            function t() {
                (0, s.default)(this, t), this._hashMap = new ua();
            }
            return (0, r.default)(t, [{
                key: "loadAssets"
                , value: function (t, e, a) {
                    var n = this;
                    t instanceof Array || (t = [t]);
                    var i = [];
                    t.forEach(function (o) {
                        if (!n._hashMap.contains(o)) {
                            var s = o.split(".")
                                , r = n._getAssetsType(s[s.length - 1]);
                            if (!r) return !1;
                            var l;
                            l = r === Laya.Loader.JSON || r === Laya.Loader.BUFFER && "zip" === s[s.length - 1] ? {
                                url: "".concat(y, "/") + o
                                , type: r
                            } : {
                                url: o
                                , type: r
                            }, i.push(l);
                        }
                        i.length <= 0 ? e && e.runWith(!0) : Laya.loader.load(i, Laya.Handler.create(n, function (a, i) {
                            var o = 0;
                            t.forEach(function (t) {
                                n._hashMap.put(t, Laya.loader.getRes(a[o].url)), o++;
                            }), e && e.runWith(i);
                        }, [i]), a);
                    });
                }
        }, {
                key: "clearAssets"
                , value: function (t) {
                    var e = this;
                    t instanceof Array || (t = [t]), t.forEach(function (a, n) {
                        var i = a.split(".")
                            , o = e._getAssetsType(i[i.length - 1]);
                        if (!o) return !1;
                        var s;
                        s = o === Laya.Loader.JSON ? "".concat(y, " / ") + a : a, Laya.loader.clearRes(s)
                            , e._hashMap.remove(t[n]);
                    });
                }
        }, {
                key: "clearTextureRes"
                , value: function (t) {
                    var e = this;
                    t instanceof Array || (t = [t]), t.forEach(function (t) {
                        var a = t.split(".")
                            , n = e._getAssetsType(a[a.length - 1]);
                        if (!n) return !1;
                        var i;
                        i = n === Laya.Loader.JSON ? "".concat(y, " /") + t : t, Laya.loader.clearTextureRes(i);
                    });
                }
        }, {
                key: "getAssets"
                , value: function (t) {
                    return this._hashMap.get(t);
                }
        }, {
                key: "_getAssetsType"
                , value: function (t) {
                    var e = null;
                    switch (t) {
                    case "jpg":
                    case "png":
                        e = Laya.Loader.IMAGE;
                        break;

                    case "fui":
                    case "txt":
                    case "sk":
                        e = Laya.Loader.BUFFER;
                        break;

                    case "json":
                        e = Laya.Loader.JSON;
                        break;

                    case "atlas":
                        e = Laya.Loader.ATLAS;
                        break;

                    case "xml":
                        e = Laya.Loader.XML;
                        break;

                    case "mp3":
                    case "wav":
                        e = Laya.Loader.SOUND;
                        break;

                    case "csv":
                        e = "csv";
                        break;

                    case "zip":
                        e = Laya.Loader.BUFFER;
                        break;

                    default:
                        e = null;
                    }
                    return e;
                }
        }], [{
                key: "Instance"
                , get: function () {
                    return null == t._instance && (t._instance = new t()), t._instance;
                }
        }]), t;
        }()
        , ha = function () {
            function t() {
                (0, s.default)(this, t), this.instance = new JSZip();
            }
            return (0, r.default)(t, [{
                key: "getInstance"
                , value: function () {
                    if (this.instance) return this.instance;
                    console.log("readZip not have instance");
                }
        }, {
                key: "loadAsync"
                , value: function (t) {
                    return this.loadAsyncObj = this.instance.loadAsync(t), this.loadAsyncObj;
                }
        }, {
                key: "convertToJson"
                , value: function (t, e) {
                    if (t.RECORDS) {
                        var a = {};
                        return t.RECORDS.forEach(function (t) {
                            a[t[e]] = t;
                        }), a;
                    }
                    console.log("json数据有问题需要查看~", t);
                }
        }, {
                key: "judgeIsZip"
                , value: function (t) {
                    var e;
                    return t instanceof Array && (e = t[0]), e.indexOf(".zip") > -1;
                }
        }]), t;
        }()
        , da = function () {
            function t() {
                (0, s.default)(this, t), this._dataCollection = {}, this._loadStat = !1;
            }
            return (0, r.default)(t, [{
                key: "loadDataTables"
                , value: function (t, e) {
                    var a = this
                        , n = [];
                    for (var i in this._loadStat = !1, k) n.push(i + ".zip");
                    ca.Instance.loadAssets(n, Laya.Handler.create(this, function (e) {
                        a._loadStat = !0, a._loadDataComplete(t, e);
                    }), e);
                }
        }, {
                key: "getData"
                , value: function (t, e) {
                    var a = p[l[t]];
                    return e ? this._cloneData(this._dataCollection[a.file][e]) : this._cloneData(this._dataCollection[a.file]);
                }
        }, {
                key: "getDataByKey"
                , value: function (t, e, a) {
                    var n = "number" == typeof t ? p[l[t]].file : t
                        , i = this._dataCollection;
                    if (null == i) return i;
                    var o = i[n];
                    if (!o || null == e) return o;
                    var s = o[e];
                    return s && null != a ? s[a] : s;
                }
        }, {
                key: "_cloneData"
                , value: function (t) {
                    var e = {};
                    return Object.getOwnPropertyNames(t)
                        .forEach(function (a) {
                            e[a] = t[a];
                        }), e;
                }
        }, {
                key: "_loadDataComplete"
                , value: function (t, e) {
                    var a = this;
                    if (!this._loadStat) throw new Error("DataTables haven't  loaded data files yet");
                    var n = new ha()
                        , i = 0;
                    n.loadAsync(Laya.loader.getRes("".concat(y, "/")
                            .concat(Object.keys(k)[0], ".zip")))
                        .then(function (o) {
                            Object.getOwnPropertyNames(k.jsonZip)
                                .forEach(function (s) {
                                    console.log("config", s), o.file("".concat(p[s].file, ".json"))
                                        .async("text")
                                        .then(function (o) {
                                            a._dataCollection[p[s].file] = n.convertToJson(JSON.parse(o), p[s].key), i++, console.log(i, Object.keys(p)
                                                    .length)
                                                , i >= Object.keys(p)
                                                .length && t && (console.log("zip load complete"), t.runWith(e));
                                        });
                                });
                        });
                }
        }], [{
                key: "Instance"
                , get: function () {
                    return null == t._instance && (t._instance = new t()), t._instance;
                }
        }]), t;
        }()
        , fa = function (t) {
            (0, c.default)(n, t);
            var e = f(n);

            function n() {
                var t;
                return (0, s.default)(this, n), (t = e.apply(this, arguments))
                    ._progressValue = 0
                    , t.startPlanePos = new Laya.Vector2(), t;
            }
            return (0, r.default)(n, [{
                key: "onAwake"
                , value: function () {
                    lt.InitLocalData(), b.Instance.setSceneAdaptHeight(), Pt.InitTaskDataManager();
                }
        }, {
                key: "onEnable"
                , value: function () {
                    this._root = this.owner, this._updateProgress(), this._resourceAwater = this._resourceInit()
                        , this._sdkAwater = this._sdkInit(), this.lightAction(), this.planeAction();
                }
        }, {
                key: "lightAction"
                , value: function () {}
        }, {
                key: "planeAction"
                , value: function () {}
        }, {
                key: "_resourceInit"
                , value: function () {
                    var t = this;
                    return new Promise(function (e, n) {
                        return V(t, void 0, void 0, a.default.mark(function t() {
                            return a.default.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, this._loadSubPackage();

                                case 3:
                                    Laya.Scene.load(v.PlayingScene, Laya.Handler.create(this, this._complete)), e()
                                        , t.next = 10;
                                    break;

                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), console.log(t.t0), n(t.t0);

                                case 10:
                                case "end":
                                    return t.stop();
                                }
                            }, t, this, [[0, 7]]);
                        }));
                    });
                }
        }, {
                key: "_sdkInit"
                , value: function () {
                    var t = this;
                    return new Promise(function (e, n) {
                        return V(t, void 0, void 0, a.default.mark(function t() {
                            return a.default.wrap(function (t) {
                                for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.t0 = Laya.Browser.onMiniGame, !t.t0) {
                                        t.next = 4;
                                        break;
                                    }
                                    return t.next = 4, H.Init();

                                case 4:
                                    e();

                                case 5:
                                case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                    });
                }
        }, {
                key: "_loadJsonZip"
                , value: function () {
                    var t = this;
                    return new Promise(function (e, a) {
                        da.Instance.loadDataTables(Laya.Handler.create(t, function (t) {
                            e();
                        }));
                    });
                }
        }, {
                key: "_loadSubPackage"
                , value: function () {
                    return new Promise(function (t, e) {
                        if (Laya.Browser.onMiniGame) {
                            console.log("开始分包");
                            var a = wx.loadSubpackage({
                                name: "subpackage"
                                , success: function (e) {
                                    t(e), console.log("分包成功");
                                }
                                , fail: function (t) {
                                    e(t), console.log("分包加载失败");
                                }
                            });
                            a.onProgressUpdate(function (t) {
                                console.log("下载进度", t.progress), console.log("已经下载的数据长度", t.totalBytesWritten)
                                    , console.log("预期需要下载的数据总长度", t.totalBytesExpectedToWrite);
                            }), console.log(a);
                        } else t(), console.log("分包加载失败2222");
                    });
                }
        }, {
                key: "_updateProgress"
                , value: function () {
                    this.progressValue = 0, Laya.timer.frameLoop(2, this, this._progressIncrease);
                }
        }, {
                key: "_progressIncrease"
                , value: function () {
                    this.progressValue < .4 ? this.progressValue += .01 : this.progressValue < .95 && this.progressValue >= .4 && (this.progressValue += .015)
                        , this._progressing();
                }
        }, {
                key: "_progressing"
                , value: function () {
                    var t = 100 * this._progressValue;
                    this._root.loadingLabel.value = Math.floor(t) + "%", this._root.progressBar_up.mask.graphics.clear()
                        , this._root.progressBar_up.mask.graphics.drawRect(0, 0, 604 * this._progressValue, 57, "#ff0000");
                }
        }, {
                key: "_complete"
                , value: function () {
                    return V(this, void 0, void 0, a.default.mark(function t() {
                        var e = this;
                        return a.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this._sdkAwater;

                            case 2:
                                return t.next = 4, this._resourceAwater;

                            case 4:
                                return t.next = 6, this._gameSceneAwaiter;

                            case 6:
                                Laya.timer.clearAll(this), J.LoadAllRes3D(), Laya.Tween.to(this, {
                                    progressValue: 1
                                }, 500, null, Laya.Handler.create(this, function () {
                                    J.getRes(O.World_3d, !0, function (t) {
                                        Ne.AddWorld(t, null), Ne.SetWorldVisible(!1), e._startGame();
                                    });
                                }));

                            case 9:
                            case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                }
        }, {
                key: "_startGame"
                , value: function () {
                    new nt(), Laya.Scene.open(v.PlayingScene, !0, null, Laya.Handler.create(this, function () {}))
                        , console.log(this._root);
                }
        }, {
                key: "progressValue"
                , get: function () {
                    return this._progressValue;
                }
                , set: function (t) {
                    this._progressValue = t, this._progressing();
                }
        }]), n;
        }(Laya.Script)
        , ya = function () {
            function t() {
                (0, s.default)(this, t);
            }
            return (0, r.default)(t, null, [{
                key: "GetInstance"
                , value: function (e) {
                    for (var a = 0; a < t._instances.length; a++)
                        if (t._instances[a] instanceof e) return t._instances[a];
                    return null;
                }
        }, {
                key: "AddInstance"
                , value: function (e) {
                    e && -1 == t._instances.indexOf(e) && t._instances.push(e);
                }
        }, {
                key: "RemoveInstance"
                , value: function (e) {
                    for (var a = !1, n = t._instances.length - 1; n >= 0; n--) t._instances[n] instanceof e && (t._instances.splice(n, 1)
                        , a = !0);
                    return a || console.error("没有".concat(e, "的实例对象")), a;
                }
        }, {
                key: "Instances"
                , get: function () {
                    return this._instances;
                }
        }]), t;
        }();
    ya._instances = [];
    var pa = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                return (0, s.default)(this, a), e.call(this);
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    aa.InitSignData(), ya.AddInstance(this), b.Instance.setSceneAdaptHeight();
                }
        }, {
                key: "onDestroy"
                , value: function () {
                    ya.AddInstance(a);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    we.Instance.showSceneByLaya(X.StartScene, null, null);
                }
        }, {
                key: "onStart"
                , value: function () {}
        }]), a;
        }(Laya.Script)
        , ma = function (t) {
            (0, c.default)(a, t);
            var e = f(a);

            function a() {
                var t;
                return (0, s.default)(this, a), (t = e.call(this))
                    ._uiScene = null, t._camera = null
                    , t._role = null, t._animtor = null, t.updateUI = null, t;
            }
            return (0, r.default)(a, [{
                key: "onAwake"
                , value: function () {
                    this._uiRoot = this.owner, b.Instance.setSceneAdaptHeight(), $.on(z.SkinChange, this.updateSkin, this)
                        , $.on(z.ChangeStartUI, this.updateStartButton, this), this._uiRoot.PlayerTouchPos.on(Laya.Event.CLICK, this, this.onClick_3dPos)
                        , this.updateUI = this._uiRoot.addComponent(pt), this.updateUI.init(this._uiRoot);
                }
        }, {
                key: "updateStartButton"
                , value: function () {
                    this._uiRoot.FreeButton_yes.visible = mt.Level > 3;
                }
        }, {
                key: "onClick_3dPos"
                , value: function () {
                    nt.Instance.clearTeach();
                    var t = ["atk_4", "atk_3", "atk_2", "atk_1", "atk_idle", "idle", "walk", "run", "c4"];
                    this.playAnim(t[K.Random(0, 1e3) % t.length]);
                }
        }, {
                key: "onEnable"
                , value: function () {
                    nt.Instance.clearTeach(), Laya.timer.once(100, this, this._addListen), this.initRole()
                        , this.updateSkin(), B.Instance.playMusic(m.BGM), H.ShowBanner(), this.updateStartButton();
                }
        }, {
                key: "updateSkin"
                , value: function () {
                    this._uiRoot.PlayerNameLabel.text = mt.GetSkinName(mt.CurrSkin);
                    for (var t = ["WoQuan", "FangSongShou", "Tou", "body"], e = Ne.World.getChildByName("PlayerMat"), a = null, n = 0; n < e.meshRenderer.materials.length; n++)
                        if (-1 != e.meshRenderer.materials[n].name.indexOf(mt.CurrSkin)) {
                            a = e.meshRenderer.materials[n];
                            break;
                        }
                    for (var i = 0; i < t.length; i++) {
                        var o = F.GetChildrenByName(t[i], this._role);
                        o && (o instanceof Laya.SkinnedMeshSprite3D ? o.skinnedMeshRenderer.material = a : o.meshRenderer.material = a);
                    }
                }
        }, {
                key: "_addListen"
                , value: function () {
                    this._uiRoot.SignButton.on(Laya.Event.CLICK, this, this.onClick_Sign), this._uiRoot.SkinButton.on(Laya.Event.CLICK, this, this.onClick_Skin)
                        , this._uiRoot.LvButton.on(Laya.Event.CLICK, this, this.onClick_Level), this._uiRoot.FreeButton.on(Laya.Event.CLICK, this, this.onClick_FreeGame)
                        , this._uiRoot.TaskButton.on(Laya.Event.CLICK, this, this.onClick_Task), this._uiRoot.ShopButton.on(Laya.Event.CLICK, this, this.onClick_Shop);
                }
        }, {
                key: "onClick_Task"
                , value: function () {
                    nt.Instance.clearTeach(), B.Instance.playSound(m.Button), we.Instance.showPopViewByLaya(j.TaskView);
                }
        }, {
                key: "onClick_Sign"
                , value: function () {
                    nt.Instance.clearTeach(), B.Instance.playSound(m.Button), we.Instance.showPopViewByLaya(j.SignView);
                }
        }, {
                key: "onClick_Skin"
                , value: function () {
                    nt.Instance.clearTeach(), B.Instance.playSound(m.Button), we.Instance.showPopViewByLaya(j.SkinView);
                }
        }, {
                key: "onClick_Level"
                , value: function () {
                    nt.Instance.clearTeach(), B.Instance.playSound(m.Button), we.Instance.showPopViewByLaya(j.LevelView);
                }
        }, {
                key: "onClick_FreeGame"
                , value: function () {
                    nt.Instance.clearTeach(), B.Instance.playSound(m.Button), mt.Level > 3 ? (this._uiRoot.LvButton.visible = !1
                        , this._uiRoot.FreeButton.visible = !1, Le.StartGame(99)) : (we.Instance.showPopViewByLaya(j.LevelView)
                        , we.Instance.showDialogBox("需要完成第三关才能开启自由模式哦", "联盟"));
                }
        }, {
                key: "onClick_Shop"
                , value: function () {
                    console.log("???"), nt.Instance.clearTeach(), B.Instance.playSound(m.Button), we.Instance.showPopViewByLaya(j.ShopWeaponView);
                }
        }, {
                key: "onDisable"
                , value: function () {}
        }, {
                key: "onDestroy"
                , value: function () {
                    $.off(z.SkinChange, this.updateSkin, this), $.off(z.ChangeStartUI, this.updateStartButton, this);
                }
        }, {
                key: "initRole"
                , value: function () {
                    var t = this;
                    this._uiScene = new Laya.Scene3D(), this._uiRoot.addChild(this._uiScene);
                    var e = Ne.World.getChildByName("Model")
                        .getChildByName("zhujue");
                    this._role = e.clone(), this._uiScene.addChild(this._role);
                    var a = new Laya.DirectionLight();
                    this._uiScene.addChild(a), this._camera = new Laya.Camera(), this._uiScene.addChild(this._camera)
                        , this._camera.transform.position = new Laya.Vector3(0, 0, 3), this._camera.clearFlag = Laya.CameraClearFlags.DepthOnly
                        , this._camera.orthographic = !0, Laya.timer.once(50, this, function () {
                            t._role.active = !0;
                            var e = new Laya.Vector3(t._uiRoot.PlayerSkinUI.x, t._uiRoot.PlayerSkinUI.y, 0);
                            t._camera.convertScreenCoordToOrthographicCoord(e, e), t._role.transform.position = new Laya.Vector3(e.x, e.y, 0)
                                , t._role.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                        }), this._animtor = F.GetComponentInChildren(Laya.Animator, this._role), this._role.transform.localScale = new Laya.Vector3(4, 4, 4);
                }
        }, {
                key: "playAnim"
                , value: function (t) {
                    this._animtor && this._animtor.play(t);
                }
        }]), a;
        }(Laya.Script)
        , va = function () {
            function t() {
                (0, s.default)(this, t);
            }
            return (0, r.default)(t, null, [{
                key: "init"
                , value: function () {
                    var t = Laya.ClassUtils.regClass;
                    t("core/LayaTool/ScaleButton.ts", d), t("game/View/FreeBodyViewControl.ts", qe)
                        , t("game/View/FreeGoldViewControl.ts", Je), t("game/View/GameChangeWeaponViewControl.ts", Qe)
                        , t("game/View/LevelViewControl.ts", Ze), t("game/ViewUI/GoldBoxUI.ts", $e), t("game/View/ReliveViewControl.ts", ta)
                        , t("game/View/WeaponShopViewControl.ts", ge), t("game/View/SignViewControl.ts", aa)
                        , t("game/View/SkinViewControl.ts", na), t("game/View/TaskViewControl.ts", ia), t("game/View/VideoHpRewardViewControl.ts", oa)
                        , t("core/LayaTool/EyeRocker.ts", Z), t("core/LayaTool/Rocker.ts", tt), t("game/View/GameViewControl.ts", Ht)
                        , t("game/Controller/LoadingSceneController.ts", fa), t("game/Controller/UIController/PlayingSceneController.ts", pa)
                        , t("game/View/ViewManager.ts", we), t("game/View/StartSceneControl.ts", ma), t("umsdk/export/laya/UMCustomPage.ts", M)
                        , t("umsdk/export/laya/UMMultipleClicksPage.ts", G);
                }
        }]), t;
        }();
    va.width = 1334, va.height = 750, va.scaleMode = "fixedheight", va.screenMode = "horizontal"
        , va.alignV = "top", va.alignH = "left", va.startScene = "Scenes/LoadingScene.scene"
        , va.sceneRoot = "", va.debug = !1, va.stat = !1, va.physicsDebug = !1, va.exportSceneToJson = !0
        , va.init(), new(function () {
            function t() {
                var e = this;
                (0, s.default)(this, t), this._version = "1.0.0";
                var a = function () {
                    Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable()
                        , Laya.stage.scaleMode = va.scaleMode, Laya.stage.screenMode = va.screenMode, Laya.stage.alignV = va.alignV
                        , Laya.stage.alignH = va.alignH, Laya.URL.exportSceneToJson = va.exportSceneToJson
                        , (va.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel()
                        , va.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), va.stat && Laya.Stat.show()
                        , Laya.alertGlobalError(!0), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(e, e.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
                };
                window.wx ? window.Laya3D ? Laya3D.init(va.width, va.height, null, Laya.Handler.create(this, function () {
                    a();
                })) : Laya.init(va.width, va.height, Laya.WebGL) : (window.Laya3D ? Laya3D.init(va.width, va.height, null, Laya.Handler.create(this, function () {})) : Laya.init(va.width, va.height, Laya.WebGL)
                    , a());
            }
            return (0, r.default)(t, [{
                key: "onVersionLoaded"
                , value: function () {
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                }
        }, {
                key: "onConfigLoaded"
                , value: function () {
                    va.startScene && Laya.Scene.open(va.startScene);
                }
        }]), t;
        }())();
}();
