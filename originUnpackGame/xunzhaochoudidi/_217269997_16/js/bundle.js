var _typeof2 = require("../@babel/runtime/helpers/typeof");

var _get2 = require("../@babel/runtime/helpers/get");

var _getPrototypeOf2 = require("../@babel/runtime/helpers/getPrototypeOf");

var _classCallCheck2 = require("../@babel/runtime/helpers/classCallCheck");

var _createClass2 = require("../@babel/runtime/helpers/createClass");

var _assertThisInitialized2 = require("../@babel/runtime/helpers/assertThisInitialized");

var _inherits2 = require("../@babel/runtime/helpers/inherits");

var _createSuper2 = require("../@babel/runtime/helpers/createSuper");

!function() {
    "use strict";
    var e = /* */ function(_Laya$Scene) {
        _inherits2(e, _Laya$Scene);
        var _super = _createSuper2(e);
        function e(_e2, t) {
            var _this;
            _classCallCheck2(this, e);
            _this = _super.call(this), _this._gameScene = null, _this.loadScene(_e2), _this._onInitUI(), 
            _this._onRegisterEvent(), "string" == typeof t && "" !== t && Laya.Scene3D.load(t, Laya.Handler.create(null, function(e) {
                this._onLoadSceneCompleted(e);
            }.bind(_assertThisInitialized2(_this))));
            return _this;
        }
        _createClass2(e, [ {
            key: "onOpened",
            value: function onOpened() {
                G_Event.dispatchEvent(G_EventName.EN_FIRST_OPEN_MAIN_SCENE);
            }
        }, {
            key: "_onInitUI",
            value: function _onInitUI() {
                "function" == typeof this.onInitUI && this.onInitUI();
            }
        }, {
            key: "_onRegisterEvent",
            value: function _onRegisterEvent() {
                "function" == typeof this.onRegisterEvent && this.onRegisterEvent();
            }
        }, {
            key: "_onLoadSceneCompleted",
            value: function _onLoadSceneCompleted(_e3) {
                Laya.stage.addChildAt(_e3, 0), this._gameScene = _e3, "function" == typeof this.onLoadSceneCompleted && this.onLoadSceneCompleted(_e3);
            }
        } ]);
        return e;
    }(Laya.Scene);
    var t = /* */ function(_Laya$Script3D) {
        _inherits2(t, _Laya$Script3D);
        var _super2 = _createSuper2(t);
        function t() {
            _classCallCheck2(this, t);
            return _super2.apply(this, arguments);
        }
        _createClass2(t, [ {
            key: "init",
            value: function init(e) {
                this.m_Target = e, this.tempV3 = new Laya.Vector3(), this._upV3 = new Laya.Vector3(0, 1, 0), 
                this.offset = new Laya.Vector3(-4.6, 14, 12), this.isFollow = !1;
            }
        }, {
            key: "follow",
            value: function follow() {
                this.isFollow && (Laya.Vector3.add(this.m_Target.transform.position, this.offset, this.tempV3), 
                Laya.Vector3.lerp(this.owner.transform.position, this.tempV3, .08, this.tempV3), 
                this.owner.transform.position = this.tempV3);
            }
        } ]);
        return t;
    }(Laya.Script3D);
    var n = /* */ function(_Laya$Script3D2) {
        _inherits2(n, _Laya$Script3D2);
        var _super3 = _createSuper2(n);
        function n() {
            _classCallCheck2(this, n);
            return _super3.call(this);
        }
        _createClass2(n, [ {
            key: "onEnable",
            value: function onEnable() {
                this.init();
            }
        }, {
            key: "init",
            value: function init() {
                this.speed = .02, this.dir = new Laya.Vector3(0, 0, 0), this.toPos = new Laya.Vector3(0, 0, 0), 
                this.rota = new Laya.Quaternion(), this.owner.transform.getForward(this.dir), Laya.Vector3.scale(this.dir, this.speed, this.dir), 
                this.Ray = new Laya.Ray(this.owner.transform.position, this.dir), this.hitResult = new Laya.HitResult(), 
                this.v1 = new Laya.Vector3(0, 1, 0), this.moveType = 3, this.ani = null;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (1 == this.moveType) if (gameScene.physicsSimulation.rayCast(this.Ray, this.hitResult, .3)) {
                    var _e4 = this.hitResult.collider.owner;
                    if (_e4.name) {
                        var _t2 = this.owner.transform.position.clone();
                        if ("move" == _e4.name || "noMove" == _e4.name || "noMoveL" == _e4.name) return this.owner.transform.position = _t2, 
                        void this.changeMove(10);
                        this.owner.transform.translate(this.dir, !1);
                    }
                } else this.owner.transform.translate(this.dir, !1);
                3 != this.moveType && this.owner.getChildByName("name").transform.lookAt(playCtrl.camera.transform.position, this.v1, !1);
            }
        }, {
            key: "getIsInCamera",
            value: function getIsInCamera() {
                return this.render._visible;
            }
        }, {
            key: "startGame",
            value: function startGame() {
                this.moveType = 1, this.ani = this.owner.getChildByName("wujian").addComponent(Laya.Animator);
                var e = gameScene.getChildByName("ani").clone();
                this.ani.addControllerLayer(e._components[0].getControllerLayer()), e.destroy(), 
                this.ani.active = !0, this.ani.play("daoju_tiao"), this.changeMove(G_Utils.random(30, 175));
                var t = 1e3 * G_Utils.random(4, 7);
                Laya.timer.loop(t, this, this.startMove);
            }
        }, {
            key: "startMove",
            value: function startMove() {
                this.moveType = 2, 5 != G_Utils.random(1, 6) ? Laya.timer.once(1e3, this, function() {
                    this.changeMove(G_Utils.random(0, 60) - 30), this.moveType = 1;
                }.bind(this)) : this.stopMove();
            }
        }, {
            key: "stopMove",
            value: function stopMove() {
                this.moveType = 3, this.owner.getChildByName("name").active = !1, this.ani.destroy(), 
                this.owner.getChildByName("wujian").getChildByName("jiaju").transform.localPosition = new Laya.Vector3(0, 0, 0), 
                Laya.timer.clearAll(this);
            }
        }, {
            key: "changeMove",
            value: function changeMove(e) {
                var t = this.owner.transform.rotationEuler;
                t.y -= e, t.y < -360 && (t.y += 360), this.owner.transform.rotationEuler = t, this.owner.transform.getForward(this.dir), 
                Laya.Vector3.scale(this.dir, this.speed, this.dir);
            }
        } ]);
        return n;
    }(Laya.Script3D);
    var i = /* */ function(_Laya$Script3D3) {
        _inherits2(i, _Laya$Script3D3);
        var _super4 = _createSuper2(i);
        function i() {
            _classCallCheck2(this, i);
            return _super4.call(this);
        }
        _createClass2(i, [ {
            key: "onEnable",
            value: function onEnable() {
                this.init();
            }
        }, {
            key: "init",
            value: function init() {
                this.timeSpeed = 30, this.rotaNum = 0, this.randNum = 15;
            }
        }, {
            key: "startRota",
            value: function startRota() {
                Laya.timer.loop(this.timeSpeed, this, this.arrowRote), this.rotaNum = 0, this.b = G_Utils.random(1, 6), 
                6 == this.b && (this.b = G_Utils.random(1, 6));
                this.randNum = [ 57, 60, 63, 66, 69, 72 ][this.b - 1], G_UIManager.getUI("gameView")[1].btn_anim(!0);
            }
        }, {
            key: "arrowRote",
            value: function arrowRote() {
                this.rotaNum++, this.owner.transform.rotate(new Laya.Vector3(0, 20, 0), !1, !1), 
                this.rotaNum % 3 == 0 ? (G_PlatHelper.vibratePhone(!1), this.owner.getChildByName("Plane").active = !0) : this.owner.getChildByName("Plane").active = !1, 
                this.randNum == this.rotaNum && (Laya.timer.clear(this, this.arrowRote), G_UIManager.getUI("gameView")[1].btn_anim(!1), 
                Laya.timer.once(1e3, this, function() {
                    this.owner.active = !1, playCtrl.changePeople(this.b);
                }));
            }
        }, {
            key: "clearTime",
            value: function clearTime(e) {
                e ? (this.owner.active = !1, playCtrl.changePeople(6)) : Laya.timer.clear(this, this.arrowRote);
            }
        } ]);
        return i;
    }(Laya.Script3D);
    var o = /* */ function() {
        function o() {
            _classCallCheck2(this, o);
        }
        _createClass2(o, null, [ {
            key: "setPosition",
            value: function setPosition(e, t) {
                var n = null, i = null;
                1 == e ? (n = o.change1, i = o.static1) : 2 == e ? (n = o.change2, i = o.static2) : 3 == e ? (n = o.change3, 
                i = o.static3) : 4 == e && (n = o.change4, i = o.static4);
                for (var _e5 = 0; _e5 < n.length; _e5++) {
                    var _i = t.getChildByName("change").addChild(Laya.Loader.getRes("res/scene/LayaScene_wujian/Conventional/" + n[_e5][0] + ".lh").clone());
                    _i.transform.localPosition = n[_e5][1], _i.transform.localRotationEuler = n[_e5][2];
                }
                for (var _e6 = 0; _e6 < i.length; _e6++) {
                    var _n = t.getChildByName("static").addChild(Laya.Loader.getRes("res/scene/LayaScene_wujian/Conventional/" + i[_e6][0] + ".lh").clone());
                    _n.transform.localPosition = i[_e6][1], _n.transform.localRotationEuler = i[_e6][2];
                }
            }
        } ]);
        return o;
    }();
    o.posInfoList = [ new Laya.Vector3(0, 0, 0), new Laya.Vector3(.97, 0, -.562), new Laya.Vector3(.968, 0, -1.694), new Laya.Vector3(0, 0, -2.225), new Laya.Vector3(-.988, 0, -1.694), new Laya.Vector3(-.971, 0, -.554) ], 
    o.roteInfoList = [ new Laya.Vector3(0, 180, 0), new Laya.Vector3(0, -120, 0), new Laya.Vector3(0, -60, 0), new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 60, 0), new Laya.Vector3(0, 120, 0) ], 
    o.zhuaPosList = [ new Laya.Vector3(0, 0, -2.5), new Laya.Vector3(0, 0, -3.8) ], 
    o.change1 = [ [ "lideng", new Laya.Vector3(-7.04, -.497, -2.79), new Laya.Vector3(-0, -90, -0) ], [ "yizi1", new Laya.Vector3(-7.83, -.519, 2.36), new Laya.Vector3(-0, -90, -0) ], [ "yizi1", new Laya.Vector3(-7.7, -.519, .948), new Laya.Vector3(-0, -90, -0) ], [ "yizi1", new Laya.Vector3(-11.188, -.519, .53), new Laya.Vector3(0, 90, -0) ], [ "yizi1", new Laya.Vector3(-11.35, -.519, 2.37), new Laya.Vector3(0, 90, -0) ], [ "yizi2", new Laya.Vector3(9.93, -.461, 3.2), new Laya.Vector3(-0, -0, -0) ], [ "yizi2", new Laya.Vector3(8.138, -.461, 4.83), new Laya.Vector3(0, 90, -0) ], [ "yizi2", new Laya.Vector3(11.61, -.461, 4.99), new Laya.Vector3(-0, -90, -0) ], [ "yizi2", new Laya.Vector3(9.93, -.461, 6.57), new Laya.Vector3(0, 180, -0) ], [ "yizi3", new Laya.Vector3(2.66, -.5, 6.14), new Laya.Vector3(0, 150, -0) ], [ "yizi3", new Laya.Vector3(1.28, -.5, 4.77), new Laya.Vector3(0, 135, -0) ], [ "yizi3", new Laya.Vector3(.09, -.5, 3.23), new Laya.Vector3(0, 120, -0) ], [ "waterCooler", new Laya.Vector3(-2.26, -.498, -5.93), new Laya.Vector3(-0, -0, -0) ], [ "yizi", new Laya.Vector3(-12.35, -.3, 4.639), new Laya.Vector3(-0, -.53, -0) ] ], 
    o.static1 = [ [ "gui", new Laya.Vector3(-14.08, -.46, -.76), new Laya.Vector3(0, 90, -0) ], [ "gui", new Laya.Vector3(-10.01, -.46, 6.53), new Laya.Vector3(0, 180, -0) ], [ "canzhuo02", new Laya.Vector3(9.898, -.411, 4.928), new Laya.Vector3(-0, -90, -0) ], [ "gangqing", new Laya.Vector3(-4.81, -.505, -7.06), new Laya.Vector3(-0, -0, -0) ] ], 
    o.change2 = [ [ "lajitong2", new Laya.Vector3(-2.29, -.46, 5.28), new Laya.Vector3(0, 90, -0) ], [ "penzai1", new Laya.Vector3(4, -.566, -13.99), new Laya.Vector3(0, 90, -0) ], [ "penzai1", new Laya.Vector3(-3.2, -.566, -14), new Laya.Vector3(0, 90, -0) ], [ "lajitong1", new Laya.Vector3(3.495543, -.56, -.8), new Laya.Vector3(0, -154, -0) ], [ "lajitong2", new Laya.Vector3(3.395544, -.539, 8.75), new Laya.Vector3(0, 90, -0) ], [ "lajitong2", new Laya.Vector3(.65, -.539, 10.34), new Laya.Vector3(0, 90, -0) ], [ "lajitong1", new Laya.Vector3(-5.42, -.56, -8.8), new Laya.Vector3(0, -153.24, -0) ], [ "lajitong1", new Laya.Vector3(-5.32, -.55, -5.78), new Laya.Vector3(0, -153.24, -0) ], [ "waterCooler", new Laya.Vector3(3.19, -.526, .32), new Laya.Vector3(-0, -0, -0) ], [ "lajitong1", new Laya.Vector3(-5.47, -.55, -2.93), new Laya.Vector3(0, -153.24, -0) ], [ "yizi", new Laya.Vector3(-1.15, -.5, 10.41), new Laya.Vector3(-0, -90.3, -0) ], [ "lajitong1", new Laya.Vector3(-5.184456, -.55, -.67), new Laya.Vector3(0, -153.24, -0) ], [ "yizi", new Laya.Vector3(-2.93, -.5, 6.47), new Laya.Vector3(0, 45, -0) ], [ "yizi", new Laya.Vector3(2.51, -.5, 10.13), new Laya.Vector3(-0, -134.8, -0) ], [ "guizi", new Laya.Vector3(-7.09, -.536, 5.85), new Laya.Vector3(0, 90, -0) ], [ "guizi", new Laya.Vector3(-1.64, -.536, -4.12), new Laya.Vector3(-0, -36.1, -0) ], [ "yizi", new Laya.Vector3(1.9, -.5, -3.85), new Laya.Vector3(0, -12.05, -0) ], [ "penzai1", new Laya.Vector3(2.355544, -.566, -10.99), new Laya.Vector3(0, 90, -0) ], [ "lajitong2", new Laya.Vector3(.29, -.46, -6.89), new Laya.Vector3(0, 90, -0) ], [ "matong", new Laya.Vector3(-6.81, -.47, -6.84), new Laya.Vector3(0, 90, -1.53) ], [ "matong", new Laya.Vector3(-6.81, -.47, -10.1), new Laya.Vector3(0, 90, -1.53) ], [ "matong", new Laya.Vector3(-6.81, -.47, -1.39), new Laya.Vector3(0, 90, -1.53) ], [ "matong", new Laya.Vector3(-6.81, -.47, -4), new Laya.Vector3(0, 90, -23.53) ] ], 
    o.static2 = [ [ "zhuozi", new Laya.Vector3(-9.71, -.484, -1.47), new Laya.Vector3(-0, -90, -0) ], [ "zhuozi", new Laya.Vector3(-7.12, -.484, -2.4), new Laya.Vector3(0, 90, -0) ], [ "zhuozi", new Laya.Vector3(-1.52, -.484, 5.49), new Laya.Vector3(-0, -0, -0) ], [ "zhuozi", new Laya.Vector3(-12.32, -.49, -.14), new Laya.Vector3(-0, -90, -0) ], [ "zhuozi", new Laya.Vector3(-10.87, -.49, 3.36), new Laya.Vector3(0, 90, -0) ], [ "zhuozi", new Laya.Vector3(-6.35, -.51, 5.27), new Laya.Vector3(-0, -0, -0) ], [ "matong1", new Laya.Vector3(10.66, .08, 7.31), new Laya.Vector3(0, 180, -0) ], [ "matong1", new Laya.Vector3(6.66, .08, 7.31), new Laya.Vector3(0, 180, -0) ], [ "matong1", new Laya.Vector3(8.66, .08, 7.31), new Laya.Vector3(0, 180, -0) ], [ "matong1", new Laya.Vector3(4.66, .08, 7.31), new Laya.Vector3(0, 180, -0) ], [ "guizi", new Laya.Vector3(-7.07, -.47, -7.04), new Laya.Vector3(-0, -0, -0) ], [ "guizi", new Laya.Vector3(-8.26, -.48, -6.03), new Laya.Vector3(0, 90, -0) ] ], 
    o.change3 = [ [ "yizi4", new Laya.Vector3(6.84, .06, 4.43), new Laya.Vector3(-0, -0, -0) ], [ "yizi4", new Laya.Vector3(5.134, .06, 4.43), new Laya.Vector3(-0, -0, -0) ], [ "yizi4", new Laya.Vector3(3.423, .06, 4.43), new Laya.Vector3(-0, -0, -0) ], [ "yizi4", new Laya.Vector3(5.134, .06, 7.83), new Laya.Vector3(-0, -0, -0) ], [ "yizi5", new Laya.Vector3(.716, .059, 8.33), new Laya.Vector3(-0, -90, -0) ], [ "yizi5", new Laya.Vector3(.716, .059, 6.15), new Laya.Vector3(-0, -90, -0) ], [ "yizi5", new Laya.Vector3(-3.56, .059, 6.18), new Laya.Vector3(0, 90, -0) ], [ "yizi5", new Laya.Vector3(-3.56, .059, 8.33), new Laya.Vector3(0, 90, -0) ], [ "yizi5", new Laya.Vector3(-1.776, .059, -4.15), new Laya.Vector3(0, 90, -0) ], [ "yizi5", new Laya.Vector3(-1.776, .059, -6.14), new Laya.Vector3(0, 90, -0) ], [ "yizi5", new Laya.Vector3(2.5, .059, -5.68), new Laya.Vector3(-0, -90, -0) ], [ "yizi5", new Laya.Vector3(2.5, .059, -4.15), new Laya.Vector3(-0, -90, -0) ], [ "yizi5", new Laya.Vector3(10.276, .059, -6.09), new Laya.Vector3(-0, -90, -0) ], [ "yizi5", new Laya.Vector3(10.276, .059, -7.62), new Laya.Vector3(-0, -90, -0) ], [ "yizi5", new Laya.Vector3(6, .059, -7.61), new Laya.Vector3(0, 90, -0) ], [ "yizi5", new Laya.Vector3(6, .059, -6.09), new Laya.Vector3(0, 90, -0) ], [ "yizi5", new Laya.Vector3(13.51, .059, -2.34), new Laya.Vector3(-0, -0, -0) ], [ "yizi5", new Laya.Vector3(11.39, .059, -2.38), new Laya.Vector3(-0, -0, -0) ], [ "yizi5", new Laya.Vector3(13.44, .059, 1.92), new Laya.Vector3(0, 180, -0) ], [ "yizi5", new Laya.Vector3(11.59, .059, 1.88), new Laya.Vector3(0, 180, -0) ], [ "yizi2", new Laya.Vector3(5.27, .078, -2.47), new Laya.Vector3(-0, -0, -0) ], [ "yizi2", new Laya.Vector3(6.31, .078, 1.25), new Laya.Vector3(0, 180, -0) ], [ "yizi2", new Laya.Vector3(-13.09, .078, -1.5), new Laya.Vector3(0, 180, -0) ], [ "yizi2", new Laya.Vector3(-13.09, .078, -5.24), new Laya.Vector3(-0, -0, -0) ], [ "yizi2", new Laya.Vector3(-9.95, .078, -8.74), new Laya.Vector3(-0, -90, -0) ], [ "yizi2", new Laya.Vector3(-13.89, .078, -8.8), new Laya.Vector3(0, 90, -0) ], [ "yizi2", new Laya.Vector3(-13.89, .078, 1.85), new Laya.Vector3(0, 90, -0) ], [ "yizi2", new Laya.Vector3(-9.26, .078, 1.53), new Laya.Vector3(-0, -90, -0) ], [ "penzai1", new Laya.Vector3(-6.93, .078, -5.9), new Laya.Vector3(-0, -0, -0) ], [ "penzai1", new Laya.Vector3(-7.38, .078, -8.86), new Laya.Vector3(-0, -0, -0) ], [ "penzai1", new Laya.Vector3(-7.38, .078, 8.26), new Laya.Vector3(-0, -0, -0) ], [ "penzai2", new Laya.Vector3(13.51, 0, -8), new Laya.Vector3(-0, -0, -0) ], [ "penzai2", new Laya.Vector3(-3.88, 0, -8.38), new Laya.Vector3(-0, -0, -0) ], [ "penzai2", new Laya.Vector3(11.1, 0, 8.7), new Laya.Vector3(-0, -0, -0) ], [ "lideng", new Laya.Vector3(12.07, .096, -5.54), new Laya.Vector3(-0, -0, -0) ], [ "lideng", new Laya.Vector3(3.27, .096, -2.77), new Laya.Vector3(-0, -0, -0) ], [ "lideng", new Laya.Vector3(1.6, .096, 3.83), new Laya.Vector3(-0, -0, -0) ], [ "lideng", new Laya.Vector3(-8.23, .096, 5.95), new Laya.Vector3(-0, -0, -0) ], [ "lideng", new Laya.Vector3(-9.86, .096, -5.64), new Laya.Vector3(-0, -0, -0) ], [ "lideng", new Laya.Vector3(-11.75, .096, -1.95), new Laya.Vector3(-0, -0, -0) ], [ "lideng", new Laya.Vector3(9.8, .096, 3.79), new Laya.Vector3(-0, -0, -0) ], [ "canjia", new Laya.Vector3(-7.97, .07, -1.39), new Laya.Vector3(-0, -0, -0) ], [ "canjia", new Laya.Vector3(-10.63, .07, -3.52), new Laya.Vector3(-0, -0, -0) ], [ "canjia", new Laya.Vector3(-11.9, .07, -6.85), new Laya.Vector3(-0, -90, -0) ], [ "canjia", new Laya.Vector3(-11.9, .07, 3.8), new Laya.Vector3(-0, -90, -0) ], [ "canjia", new Laya.Vector3(-1.38, .07, 4.33), new Laya.Vector3(-0, -90, -0) ], [ "canjia", new Laya.Vector3(.4, .07, -8.55), new Laya.Vector3(-0, -90, -0) ], [ "canjia", new Laya.Vector3(8.21, .07, -4.21), new Laya.Vector3(-0, -90, -0) ], [ "canjia", new Laya.Vector3(9.78, .07, -.28), new Laya.Vector3(-0, -0, -0) ], [ "lajitong1", new Laya.Vector3(6.24, .011, -4), new Laya.Vector3(-0, -0, -0) ], [ "lajitong1", new Laya.Vector3(9.96, .011, -2.09), new Laya.Vector3(-0, -0, -0) ], [ "lajitong1", new Laya.Vector3(-3.56, .011, 4.02), new Laya.Vector3(-0, -0, -0) ], [ "lajitong1", new Laya.Vector3(2.38, .011, -1.7), new Laya.Vector3(-0, -0, -0) ], [ "lajitong1", new Laya.Vector3(-8.52, .011, -3.54), new Laya.Vector3(-0, -0, -0) ], [ "lajitong1", new Laya.Vector3(-11.83, .011, -5.07), new Laya.Vector3(-0, -0, -0) ], [ "lajitong1", new Laya.Vector3(-10.26, .011, -7.19), new Laya.Vector3(-0, -0, -0) ], [ "lajitong1", new Laya.Vector3(-10.26, .011, 3.52), new Laya.Vector3(-0, -0, -0) ] ], 
    o.static3 = [ [ "canzhuo01", new Laya.Vector3(-6.02, 0, 7.12), new Laya.Vector3(-0, -90, -0) ], [ "canzhuo01", new Laya.Vector3(-4.236, 0, -4.863), new Laya.Vector3(-0, -90, -0) ], [ "canzhuo01", new Laya.Vector3(3.48, 0, -7.037), new Laya.Vector3(-0, -90, -0) ], [ "canzhuo01", new Laya.Vector3(7.98, 0, -.23), new Laya.Vector3(-0, -0, -0) ], [ "canzhuo02", new Laya.Vector3(-17.7, .048, -3.35), new Laya.Vector3(-0, -90, -0) ], [ "canzhuo02", new Laya.Vector3(-16.54, .048, -8.61), new Laya.Vector3(-0, -0, -0) ], [ "canzhuo02", new Laya.Vector3(-15.97, .048, 1.72), new Laya.Vector3(-0, -0, -0) ], [ "gangqing", new Laya.Vector3(-17.23, .06, 6.59), new Laya.Vector3(0, 45, -0) ] ];
    var a = /* */ function(_Laya$Script3D4) {
        _inherits2(a, _Laya$Script3D4);
        var _super5 = _createSuper2(a);
        function a() {
            _classCallCheck2(this, a);
            return _super5.call(this);
        }
        _createClass2(a, [ {
            key: "onEnable",
            value: function onEnable() {
                this.init();
            }
        }, {
            key: "init",
            value: function init() {
                this.roteSpeed = .05, this.moveDir = new Laya.Vector3(0, 0, this.moveSpeed), this.mouseMoveLastTime = 0, 
                this.mouseDonwPos = null, this.canMove = !1, this.rotSprite = new Laya.Sprite3D("rotSprite"), 
                this.owner.addChild(this.rotSprite), this.isStart = !1, this.isPlayAni = !1, this.isGreen = !1, 
                this.hideObjList = [], this.skinNum = G_PlayerInfo.getCurrWeaponSkin(), this.dir = new Laya.Vector3(0, 0, 0), 
                this.rota = new Laya.Quaternion(), this.toForward = new Laya.Vector3(), this.curPos = new Laya.Vector3(0, 0, 0), 
                this.toPos = new Laya.Vector3(), this.v1 = new Laya.Vector3(0, 1, 0), this.owner.transform.getForward(this.dir), 
                this.Ray = new Laya.Ray(this.owner.transform.position, this.dir), this.hitInfo = new Laya.HitResult(), 
                this.camera = gameScene.getChildByName("ccamera").getChildByName("Main Camera"), 
                this.cameraCtrl = this.camera.addComponent(t), this.cameraCtrl.init(this.owner), 
                this.arrow = gameScene.getChildByName("arrow"), this.arrowCtrl = this.arrow.addComponent(i), 
                this.mode = null;
                for (var _e7 = 0; _e7 < 6; _e7++) {
                    var _t3 = G_Utils.random(1, 10), _i2 = gameScene.getChildByName("player" + _e7), _o = _t3 > 5 ? "man" : "wuMan", _a3 = Laya.Loader.getRes("res/scene/LayaScene_wujian/Conventional/" + _o + ".lh").clone();
                    _i2.addChild(_a3), _a3.name = "person", _e7 > 0 && _i2.addComponent(n);
                }
                this.arrestPeople = gameScene.getChildByName("captors"), this.Collider = new Laya.ConeColliderShape(.7, 4), 
                this.initGame();
            }
        }, {
            key: "initGame",
            value: function initGame() {
                Laya.timer.clearAll(this), this.killNum = 0, this.moveSpeed = Math.min(.04 * (.02 * (G_PlayerInfo.getSpeed() - 1) + 1), .08), 
                this.isPrepare = !0, this.fightType = 1, this.isHideOk = !1, this.hideTime = 0, 
                this.furniturePos = null, this.otherPosList = [], this.hitResult = [], this.isShowPic = !1;
                var e = gameScene.getChildByName("stage");
                e && e.destroy();
                var t = G_PlayerInfo.getLevel();
                t > 3 && (t = G_Utils.random(1, 3)), t = 1;
                var n = Laya.Loader.getRes("res/scene/LayaScene_allLevel/Conventional/changjing" + t + ".lh").clone();
                gameScene.addChild(n), o.setPosition(t, n), n.active = !0, n.name = "stage", this.camera.transform.position = new Laya.Vector3(0, 6.5, 5.5), 
                this.camera.transform.rotationEuler = new Laya.Vector3(-40, 0, 0), this.arrestPeople.transform.position = new Laya.Vector3(0, -10, 50);
                var i = G_Utils.random(1, 8);
                for (var _e8 = 0; _e8 < 6; _e8++) {
                    var _t4 = gameScene.getChildByName("player" + _e8);
                    _t4.transform.localPosition = o.posInfoList[_e8], _t4.transform.rotationEuler = o.roteInfoList[_e8];
                    var _n2 = _t4.getChildByName("person");
                    if (_n2.active = !0, _n2.getChildByName("Hair4")) {
                        var _e9 = G_Utils.random(1, 4);
                        for (var _t6 = 1; _t6 < 5; _t6++) {
                            _n2.getChildByName("Hair" + _t6).active = _t6 == _e9;
                        }
                        var _t5 = G_Utils.random(1, 2);
                        for (var _e10 = 1; _e10 < 3; _e10++) {
                            _n2.getChildByName("yi" + _e10).active = _e10 == _t5;
                        }
                        _n2.getChildByName("Tshirt_Male").skinnedMeshRenderer.materials[0].albedoColor = new Laya.Vector4(G_Utils.random(1, 100) / 100, G_Utils.random(1, 100) / 100, G_Utils.random(1, 100) / 100, 1);
                    } else {
                        var _e11 = G_Utils.random(1, 3);
                        1 == _e11 ? (_n2.getChildByName("Hair1").active = !0, _n2.getChildByName("Hair3").active = !0, 
                        _n2.getChildByName("Hair2").active = !1) : 2 == _e11 ? (_n2.getChildByName("Hair1").active = !1, 
                        _n2.getChildByName("Hair3").active = !1, _n2.getChildByName("Hair2").active = !0) : (_n2.getChildByName("Hair1").active = !1, 
                        _n2.getChildByName("Hair3").active = !0, _n2.getChildByName("Hair2").active = !1);
                        var _t7 = G_Utils.random(1, 2);
                        for (var _e12 = 1; _e12 < 3; _e12++) {
                            _n2.getChildByName("yi" + _e12).active = _e12 == _t7;
                        }
                        _n2.getChildByName("yi" + _t7).skinnedMeshRenderer.materials[0].albedoColor = new Laya.Vector4(G_Utils.random(1, 100) / 100, G_Utils.random(1, 100) / 100, G_Utils.random(1, 100) / 100, 1);
                    }
                    _n2.getComponent(Laya.Animator).play("Idle"), _t4.getChildByName("name").active = !0, 
                    _e8 > 0 && (_t4.getChildByName("name").meshRenderer.material.albedoTexture = Laya.Loader.getRes("res/name/" + (i + _e8) + ".png"), 
                    _t4.getChildByName("name").meshRenderer.material.emissionTexture = Laya.Loader.getRes("res/name/" + (i + _e8) + ".png")), 
                    _t4.getChildByName("name").transform.rotationEuler = new Laya.Vector3(150, 0, 180), 
                    _t4.getChildByName("wujian") && _t4.getChildByName("wujian").destroy();
                }
                this.owner.getChildByName("zhua") && (this.owner.getChildByName("zhua").active = !1, 
                this.owner.getChildByName("zhua").transform.localRotationEuler = new Laya.Vector3(0, 0, 0)), 
                this.arrow.active = !0, this.arrow.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            }
        }, {
            key: "startGame",
            value: function startGame() {
                this.arrowCtrl.startRota();
            }
        }, {
            key: "addListener",
            value: function addListener() {
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
                this.isStart = !0, this.cameraCtrl.isFollow = !0, this.cameraCtrl.offset = new Laya.Vector3(0, 16, 7.5);
            }
        }, {
            key: "removeListener",
            value: function removeListener() {
                Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMove), this.canMove = !1, this.cameraCtrl.isFollow = !1;
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown(e) {
                0 != this.isStart && e && (this.mouseDonwPos = new Laya.Vector3(e.stageX, 0, e.stageY), 
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMove));
            }
        }, {
            key: "onMouseUp",
            value: function onMouseUp(e) {
                if (Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMove), this.canMove = !1, 
                0 != this.isStart && !this.isPlayAni) if (1 != this.fightType) {
                    if (this.isStart) {
                        this.isPlayAni = !0, this.mode.getComponent(Laya.Animator).crossFade("Attack", 0, 0);
                        var _e13 = this.owner.getChildByName("gongji");
                        _e13._particleSystem.play(), _e13.getChildByName("1")._particleSystem.play(), _e13.getChildByName("2")._particleSystem.play(), 
                        Laya.timer.once(300, this, function() {
                            this.attack();
                        }), Laya.timer.once(600, this, function() {
                            this.isPlayAni = !1, !this.canMove && this.isStart && this.mode.getComponent(Laya.Animator).crossFade("Idle", .2, 0);
                        });
                    }
                } else this.ani.play("ting");
            }
        }, {
            key: "onMove",
            value: function onMove(e) {
                if (0 == this.isStart) return;
                this.canMove || (this.canMove = !0, this.isPlayAni = !1, 2 == this.fightType ? this.mode.getComponent(Laya.Animator).crossFade("Walk", 0, 0) : this.ani.play("daoju_tiao")), 
                this.curPos.x = e.stageX, this.curPos.z = e.stageY, Laya.Vector3.subtract(this.curPos, this.mouseDonwPos, this.toPos), 
                this.toPos.x = -this.toPos.x, Laya.Vector3.normalize(this.toPos, this.toPos), Laya.Vector3.scale(this.toPos, -1, this.toPos), 
                Laya.Quaternion.rotationLookAt(this.toPos, new Laya.Vector3(0, 1, 0), this.rota), 
                this.rota.x = this.owner.transform.rotation.x, this.rota.z = this.owner.transform.rotation.z, 
                this.owner.transform.getForward(this.dir), this.rotSprite.transform.rotation = this.rota.clone(), 
                this.rotSprite.transform.getForward(this.toForward);
                var t = Laya.Vector3.dot(this.dir, this.toForward) / (Laya.Vector3.scalarLength(this.dir) * Laya.Vector3.scalarLength(this.toForward)) > .5 ? this.moveSpeed : .1 * this.moveSpeed;
                this.moveDir.z = t, Laya.Quaternion.lerp(this.owner.transform.rotation, this.rota, Laya.timer.delta * this.roteSpeed, this.rota), 
                this.owner.transform.rotation = this.rota, this.mouseMoveLastTime = Laya.timer.currTimer;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this.owner.getChildByName("name").transform.lookAt(this.camera.transform.position, this.v1, !1), 
                0 != this.isStart) {
                    if (this.canMove) {
                        Laya.timer.currTimer - this.mouseMoveLastTime > 20 && (this.moveDir.z = this.moveSpeed), 
                        this.Ray.origin = this.owner.transform.position;
                        var _e14 = this.dir.clone();
                        Laya.Vector3.scale(_e14, -1, _e14), this.Ray.direction = _e14;
                        var _t8 = gameScene.physicsSimulation.rayCast(this.Ray, this.hitInfo, .7);
                        Laya.timer.currTimer - this.mouseMoveLastTime > 20 && (this.moveDir.z = this.moveSpeed);
                        var _n3 = this.owner.transform.position.clone();
                        if (this.owner.transform.translate(this.moveDir, !0), _t8) {
                            var _e15 = this.hitInfo.collider.owner;
                            if (_e15.name && ("move" == _e15.name || "noMove" == _e15.name || "noMoveL" == _e15.name || "jiaju" == _e15.name)) return void (this.owner.transform.position = _n3);
                        }
                    }
                    if (1 == this.fightType) this.isHideOk ? gameScene.getChildByName("ccamera").transform.lookAt(this.arrestPeople.transform.position, this.v1, !1) : this.cameraCtrl.follow(); else if (2 == this.fightType) {
                        this.cameraCtrl.follow();
                        var _e16 = 0;
                        for (var _t9 = this.otherPosList.length - 1; _t9 >= 0; _t9--) {
                            if (Laya.Vector3.distance(this.otherPosList[_t9], this.owner.transform.localPosition) <= 3) {
                                _e16++;
                                break;
                            }
                        }
                        _e16 && !this.isShowPic ? (G_UIManager.getUI("gameView")[1].showNearby(!0), this.isShowPic = !0) : !_e16 && this.isShowPic && (G_UIManager.getUI("gameView")[1].showNearby(!1), 
                        this.isShowPic = !1), G_UIManager.getUI("gameView")[1].showFigerNum();
                    }
                }
            }
        }, {
            key: "changeJiaJu",
            value: function changeJiaJu(e) {
                var t = null;
                this.furniturePos = this.result[0].transform.position.clone(), (t = 0 == e ? dPlayer.addChild(this.result[0]) : dPlayer.addChild(Laya.Loader.getRes("res/scene/LayaScene_wujian/Conventional/" + e + ".lh").clone())).transform.localPosition = new Laya.Vector3(0, 0, 0), 
                t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), t.name = "wujian", t.getChildAt(0).name = "jiaju", 
                this.ani = t.addComponent(Laya.Animator);
                var n = gameScene.getChildByName("ani").clone();
                this.ani.addControllerLayer(n._components[0].getControllerLayer()), n.destroy(), 
                this.ani.active = !0;
                var i = 0;
                for (var _e17 = 0; _e17 < 6; _e17++) {
                    var _t10 = gameScene.getChildByName("player" + _e17), _n4 = gameScene.getChildByName("bai" + i);
                    if (this.num % 6 != _e17) {
                        if (0 == _e17) {
                            _t10.getChildByName("person").active = !1;
                            var _e18 = _t10.transform.localPosition.clone();
                            _e18.y = .3, _n4.transform.localPosition = _e18, _n4._particleSystem.play();
                        } else {
                            _t10.getChildByName("person").active = !1;
                            var _e19 = _t10.transform.localPosition.clone();
                            _e19.y = .3, _n4.transform.localPosition = _e19, _n4._particleSystem.play();
                            var _o2 = _t10.addChild(this.result[i]);
                            _o2.transform.localPosition = new Laya.Vector3(0, 0, 0), _o2.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
                            _o2.name = "wujian", _o2.getChildAt(0).name = "jiaju", this.hideObjList.push(_t10);
                        }
                        i++;
                    }
                }
            }
        }, {
            key: "select",
            value: function select() {
                gameScene.getChildByName("hei")._particleSystem.play(), this.arrestPeople.transform.position = new Laya.Vector3(0, -10, 20), 
                Laya.timer.once(1e3, this, function() {
                    G_UIManager.showUI("selectView", null, this.result[0].name, this.num);
                });
            }
        }, {
            key: "changePeople",
            value: function changePeople(e) {
                this.num = e, this.fightType = e % 6 == 0 ? 2 : 1, this.hideObjList = [];
                var t = gameScene.getChildByName("stage").getChildByName("change")._children;
                this.result = [];
                var n = [];
                for (var i = 0; i < t.length; i++) {
                    n.push(i);
                }
                for (;this.result.length < 5; ) {
                    this.result.push(t[n.splice(Math.floor(n.length * Math.random()), 1)[0]]);
                }
                var o = gameScene.getChildByName("player" + e % 6), _a2 = gameScene.getChildByName("hei"), r = o.transform.localPosition.clone();
                if (r.y = .3, _a2.transform.position = r, _a2._particleSystem.play(), 1 == this.fightType) o.getChildByName("person").active = !1, 
                o.getChildByName("name").active = !1, this.arrestPeople.transform.localPosition = o.transform.localPosition.clone(), 
                this.arrestPeople.transform.localRotationEuler = o.transform.localRotationEuler.clone(), 
                this.arrestPeople.getChildByName("zhua").getComponent(Laya.Animator).play("Attack"), 
                Laya.timer.once(2e3, this, this.select); else {
                    this.owner.getChildByName("person").active = !1;
                    var _t11 = G_PlayerInfo.getCurrWeaponSkin();
                    if (this.skinNum == _t11 && this.owner.getChildByName("zhua")) this.owner.getChildByName("zhua").active = !0; else {
                        this.mode && this.mode.destroy();
                        var _e20 = Laya.Loader.getRes("res/scene/LayaScene_wujian/Conventional/zhua" + (G_PlayerInfo.getCurrWeaponSkin() + 1) + ".lh").clone();
                        this.owner.addChild(_e20), _e20.name = "zhua", this.mode = this.owner.getChildByName("zhua"), 
                        this.skinNum = _t11;
                    }
                    Laya.timer.once(2e3, this, function() {
                        _a2._particleSystem.play(), this.owner.getChildByName("zhua").active = !1, this.owner.getChildByName("name").active = !1, 
                        Laya.timer.once(1e3, this, function() {
                            var t = 0;
                            for (var _e21 = 1; _e21 < 6; _e21++) {
                                var _n5 = gameScene.getChildByName("player" + _e21), _i3 = gameScene.getChildByName("bai" + t), _o3 = _n5.transform.localPosition.clone();
                                _o3.y = .3, _i3.transform.localPosition = _o3, _i3._particleSystem.play(), _n5.getChildByName("person").active = !1, 
                                this.hideObjList.push(this.result[t].transform.position.clone());
                                var _a4 = _n5.addChild(this.result[t]);
                                _a4.transform.localPosition = new Laya.Vector3(0, 0, 0), _a4.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
                                _a4.getChildAt(0).name = "jiaju", _a4.name = "wujian", t++;
                            }
                            this.startCamera(e, 20);
                        }.bind(this));
                    }.bind(this));
                }
            }
        }, {
            key: "startCamera",
            value: function startCamera(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
                Laya.timer.once(1500, this, function() {
                    1 == this.fightType ? (G_UIManager.getUI("gameView")[1].showAnimator(1), G_UIHelper.tweenMoveCamera(this.camera, 1e3, !1, {
                        position: new Laya.Vector3(0, 7.5, 2.5),
                        rotationEuler: new Laya.Vector3(-60, 0, 0),
                        fieldOfView: 60
                    }, {
                        position: new Laya.Vector3(0, 16, 7.5),
                        rotationEuler: new Laya.Vector3(-60, 0, 0),
                        fieldOfView: 60
                    }, !1, function() {
                        this.addListener(), this.startChangeHide(e, t);
                    }.bind(this))) : (G_UIManager.getUI("gameView")[1].showBlackPic(), this.setPosition(), 
                    this.owner.getChildByName("zhua").active = !0, this.owner.getChildByName("name").active = !0, 
                    this.mode.getComponent(Laya.Animator).crossFade("Idle", .2, 0), this.camera.transform.rotationEuler = new Laya.Vector3(-60, 0, 0), 
                    this.cameraCtrl.offset = new Laya.Vector3(0, 14, 7));
                }.bind(this));
            }
        }, {
            key: "startChangeHide",
            value: function startChangeHide(e, t) {
                Laya.timer.once(2e3, this, function() {
                    G_UIManager.getUI("gameView")[1].ok.visible = !0;
                }), this.hideTime <= 0 && (this.hideTime = t, G_UIManager.getUI("gameView")[1].updataTime(this.hideTime), 
                Laya.timer.loop(1e3, this, this.downHideTime));
                for (var _t12 = 1; _t12 < 6; _t12++) {
                    if (e % 6 != _t12) {
                        gameScene.getChildByName("player" + _t12).getComponent(n).startGame();
                    }
                }
            }
        }, {
            key: "startZhua",
            value: function startZhua() {
                this.hideTime <= 0 && (this.hideTime = Math.min(G_PlayerInfo.getTime() - 1 + 20, 60), 
                G_UIManager.getUI("gameView")[1].updataTime(this.hideTime), Laya.timer.loop(1e3, this, this.downHideTime));
            }
        }, {
            key: "downHideTime",
            value: function downHideTime() {
                this.hideTime--, this.hideTime < 0 ? Laya.timer.clear(this, this.downHideTime) : G_UIManager.getUI("gameView")[1].updataTime(this.hideTime);
            }
        }, {
            key: "hideOver",
            value: function hideOver() {
                Laya.timer.clear(this, this.downHideTime), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), 
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMove), 
                this.canMove = !1, this.isHideOk = !0, this.isGreen = Laya.Vector3.distance(this.furniturePos, this.owner.transform.position) < 3;
                for (var _e22 = 1; _e22 < 6; _e22++) {
                    if (this.arrowCtrl.b % 6 != _e22) {
                        var _t13 = gameScene.getChildByName("player" + _e22).getComponent(n);
                        _t13 && (_t13.stopMove(), _t13.active = !1);
                    } else {
                        this.arrestPeople.active = !0;
                        var _e23 = o.zhuaPosList, _t14 = Laya.Vector3.distance(_e23[0], this.owner.transform.position) > Laya.Vector3.distance(_e23[1], this.owner.transform.position) ? _e23[0] : _e23[1];
                        this.arrestPeople.transform.position = _t14, this.arrestPeople._scripts[0].startGame();
                    }
                }
                this.ani.destroy(), gameScene.getChildByName("ccamera").transform.localPosition = this.owner.transform.localPosition.clone(), 
                this.camera.transform.localRotationEuler = new Laya.Vector3(-20, 0, 0), this.camera.transform.localPosition = new Laya.Vector3(0, 3, 2.5), 
                Laya.timer.once(300, this, function() {
                    gameScene.physicsSimulation.raycastFromTo(this.camera.transform.position, this.owner.transform.position, this.hitInfo) && "noMove" == this.hitInfo.collider.owner.name && (this.hitInfo.collider.owner.active = !1);
                });
            }
        }, {
            key: "setPosition",
            value: function setPosition() {
                var e = gameScene.getChildByName("stage").getChildByName("point")._children;
                var t = [];
                var n = [];
                for (var i = 0; i < e.length; i++) {
                    n.push(i);
                }
                for (;t.length < 3; ) {
                    t.push(e[n.splice(Math.floor(n.length * Math.random()), 1)[0]]);
                }
                for (var _e24 = 1; _e24 < 6; _e24++) {
                    var _n6 = gameScene.getChildByName("player" + _e24);
                    _n6.transform.position = _e24 < 4 ? t[_e24 - 1].transform.position.clone() : this.hideObjList[_e24 - 4], 
                    this.otherPosList.push(_n6.transform.localPosition), _n6.getChildByName("name").active = !1;
                }
            }
        }, {
            key: "attack",
            value: function attack() {
                var e = this.dir.clone();
                if (Laya.Vector3.normalize(e, e), e.x = -.7 * e.x + this.owner.transform.position.x, 
                e.y = -.7 * e.y + this.owner.transform.position.y, e.z = -.7 * e.z + this.owner.transform.position.z, 
                this.isTouchCollider = gameScene.physicsSimulation.shapeCastAll(this.Collider, this.owner.transform.position, e, this.hitResult), 
                this.isTouchCollider) {
                    G_SoundMgr.playSound("res/sounds/KillEnemy.mp3"), G_PlatHelper.vibratePhone(!1);
                    for (var _e25 = 0; _e25 < this.hitResult.length; _e25++) {
                        var _t15 = this.hitResult[_e25].collider.owner;
                        if (_t15.name) if ("jiaju" == _t15.name) {
                            var _n7 = _t15.parent.parent;
                            _n7.getChildByName("person").active = !0, _n7.getChildByName("name").active = !0, 
                            _t15.active = !1, _n7.getChildByName("person").getComponent(Laya.Animator).play("Dead");
                            for (var _e26 = this.otherPosList.length - 1; _e26 >= 0; _e26--) {
                                if (this.otherPosList[_e26] == _n7.transform.localPosition) {
                                    this.otherPosList.splice(_e26, 1);
                                    break;
                                }
                            }
                            this.killNum++, G_UIManager.getUI("gameView")[1].showKillText(), G_UIManager.getUI("gameView")[1].jinPos = null, 
                            5 == this.killNum && this.showSuccessView(), this.hitResult[_e25].collider.destroy();
                        } else if ("move" == _t15.name) {
                            var _n8 = _t15._parent;
                            this.hitResult[_e25].collider.destroy(), _n8.transform.rotationEuler = this.owner.transform.rotationEuler.clone();
                            var _i4 = _n8.addComponent(Laya.Animator), _o4 = gameScene.getChildByName("ani").clone();
                            _i4.addControllerLayer(_o4._components[0].getControllerLayer()), _i4.active = !0, 
                            _i4.play("Dead");
                        }
                    }
                }
            }
        }, {
            key: "showFailView",
            value: function showFailView() {
                this.isStart = !1, this.cameraCtrl.isFollow = !1, G_SoundMgr.playSound("res/sounds/Level_lose.mp3"), 
                Laya.timer.once(1200, this, function() {
                    G_UIManager.hideUI("gameView"), G_UIManager.showUI("failView");
                }.bind(this));
            }
        }, {
            key: "showSuccessView",
            value: function showSuccessView() {
                this.removeListener(), 2 == this.fightType && Laya.timer.clear(this, this.downHideTime), 
                this.isStart = !1, G_SoundMgr.playSound("res/sounds/Level_win.mp3"), Laya.timer.once(1e3, this, function() {
                    G_UIManager.hideUI("gameView"), G_UIManager.showUI("successView");
                }.bind(this));
            }
        } ]);
        return a;
    }(Laya.Script3D);
    var r = /* */ function(_Laya$PBRMaterial) {
        _inherits2(r, _Laya$PBRMaterial);
        var _super6 = _createSuper2(r);
        function r() {
            var _this2;
            _classCallCheck2(this, r);
            _this2 = _super6.call(this), _this2._smoothnessSource = 0, _this2.setShaderName("MyPBR_XRay"), 
            _this2._shaderValues.setNumber(r.METALLIC, 0);
            return _this2;
        }
        _createClass2(r, [ {
            key: "showColor",
            get: function get() {
                return this._shaderValues.getVector(r.SHOWCOLOR);
            },
            set: function set(e) {
                this._shaderValues.setVector(r.SHOWCOLOR, e);
            }
        }, {
            key: "showPow",
            get: function get() {
                return this._shaderValues.getNumber(r.SHOWPOW);
            },
            set: function set(e) {
                this._shaderValues.setNumber(r.SHOWPOW, e);
            }
        }, {
            key: "metallicGlossTexture",
            get: function get() {
                return this._shaderValues.getTexture(r.METALLICGLOSSTEXTURE);
            },
            set: function set(e) {
                e ? this._shaderValues.addDefine(r.SHADERDEFINE_METALLICGLOSSTEXTURE) : this._shaderValues.removeDefine(r.SHADERDEFINE_METALLICGLOSSTEXTURE), 
                this._shaderValues.setTexture(r.METALLICGLOSSTEXTURE, e);
            }
        }, {
            key: "metallic",
            get: function get() {
                return this._shaderValues.getNumber(r.METALLIC);
            },
            set: function set(e) {
                this._shaderValues.setNumber(r.METALLIC, Math.max(0, Math.min(1, e)));
            }
        }, {
            key: "smoothnessSource",
            get: function get() {
                return this._smoothnessSource;
            },
            set: function set(e) {
                e ? this._shaderValues.addDefine(r.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA) : this._shaderValues.removeDefine(r.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA), 
                this._smoothnessSource = e;
            }
        }, {
            key: "clone",
            value: function clone() {
                var e = new r();
                return this.cloneTo(e), e;
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                var e = {
                    a_Position: Laya.VertexMesh.MESH_POSITION0,
                    a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                    a_Tangent0: Laya.VertexMesh.MESH_TANGENT0,
                    a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
                    a_Texcoord1: Laya.VertexMesh.MESH_TEXTURECOORDINATE1,
                    a_BoneWeights: Laya.VertexMesh.MESH_BLENDWEIGHT0,
                    a_BoneIndices: Laya.VertexMesh.MESH_BLENDINDICES0,
                    a_MvpMatrix: Laya.VertexMesh.MESH_MVPMATRIX_ROW0,
                    a_WorldMat: Laya.VertexMesh.MESH_WORLDMATRIX_ROW0
                }, t = {
                    u_Bones: Laya.Shader3D.PERIOD_CUSTOM,
                    u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                    u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                    u_LightmapScaleOffset: Laya.Shader3D.PERIOD_SPRITE,
                    u_LightMap: Laya.Shader3D.PERIOD_SPRITE,
                    u_LightMapDirection: Laya.Shader3D.PERIOD_SPRITE,
                    u_SimpleAnimatorTexture: Laya.Shader3D.PERIOD_SPRITE,
                    u_SimpleAnimatorParams: Laya.Shader3D.PERIOD_SPRITE,
                    u_SimpleAnimatorTextureSize: Laya.Shader3D.PERIOD_SPRITE,
                    u_ReflectCubeHDRParams: Laya.Shader3D.PERIOD_SPRITE,
                    u_ReflectTexture: Laya.Shader3D.PERIOD_SPRITE,
                    u_SpecCubeProbePosition: Laya.Shader3D.PERIOD_SPRITE,
                    u_SpecCubeBoxMax: Laya.Shader3D.PERIOD_SPRITE,
                    u_SpecCubeBoxMin: Laya.Shader3D.PERIOD_SPRITE,
                    u_CameraPos: Laya.Shader3D.PERIOD_CAMERA,
                    u_View: Laya.Shader3D.PERIOD_CAMERA,
                    u_ProjectionParams: Laya.Shader3D.PERIOD_CAMERA,
                    u_Viewport: Laya.Shader3D.PERIOD_CAMERA,
                    u_ViewProjection: Laya.Shader3D.PERIOD_CAMERA,
                    u_AlphaTestValue: Laya.Shader3D.PERIOD_MATERIAL,
                    u_AlbedoColor: Laya.Shader3D.PERIOD_MATERIAL,
                    u_EmissionColor: Laya.Shader3D.PERIOD_MATERIAL,
                    u_AlbedoTexture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_NormalTexture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_ParallaxTexture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_OcclusionTexture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_EmissionTexture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Smoothness: Laya.Shader3D.PERIOD_MATERIAL,
                    u_SmoothnessScale: Laya.Shader3D.PERIOD_MATERIAL,
                    u_occlusionStrength: Laya.Shader3D.PERIOD_MATERIAL,
                    u_NormalScale: Laya.Shader3D.PERIOD_MATERIAL,
                    u_ParallaxScale: Laya.Shader3D.PERIOD_MATERIAL,
                    u_TilingOffset: Laya.Shader3D.PERIOD_MATERIAL,
                    u_MetallicGlossTexture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Metallic: Laya.Shader3D.PERIOD_MATERIAL,
                    u_AmbientColor: Laya.Shader3D.PERIOD_SCENE,
                    u_FogStart: Laya.Shader3D.PERIOD_SCENE,
                    u_FogRange: Laya.Shader3D.PERIOD_SCENE,
                    u_FogColor: Laya.Shader3D.PERIOD_SCENE,
                    u_DirationLightCount: Laya.Shader3D.PERIOD_SCENE,
                    u_LightBuffer: Laya.Shader3D.PERIOD_SCENE,
                    u_LightClusterBuffer: Laya.Shader3D.PERIOD_SCENE,
                    u_ShadowBias: Laya.Shader3D.PERIOD_SCENE,
                    u_ShadowLightDirection: Laya.Shader3D.PERIOD_SCENE,
                    u_ShadowMap: Laya.Shader3D.PERIOD_SCENE,
                    u_ShadowParams: Laya.Shader3D.PERIOD_SCENE,
                    u_ShadowSplitSpheres: Laya.Shader3D.PERIOD_SCENE,
                    u_ShadowMatrices: Laya.Shader3D.PERIOD_SCENE,
                    u_ShadowMapSize: Laya.Shader3D.PERIOD_SCENE,
                    u_SpotShadowMap: Laya.Shader3D.PERIOD_SCENE,
                    u_SpotViewProjectMatrix: Laya.Shader3D.PERIOD_SCENE,
                    u_ShadowLightPosition: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHAr: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHAg: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHAb: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHBr: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHBg: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHBb: Laya.Shader3D.PERIOD_SCENE,
                    u_AmbientSHC: Laya.Shader3D.PERIOD_SCENE,
                    "u_DirectionLight.direction": Laya.Shader3D.PERIOD_SCENE,
                    "u_DirectionLight.color": Laya.Shader3D.PERIOD_SCENE,
                    "u_PointLight.position": Laya.Shader3D.PERIOD_SCENE,
                    "u_PointLight.range": Laya.Shader3D.PERIOD_SCENE,
                    "u_PointLight.color": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.position": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.direction": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.range": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.spot": Laya.Shader3D.PERIOD_SCENE,
                    "u_SpotLight.color": Laya.Shader3D.PERIOD_SCENE,
                    u_ShowPow: Laya.Shader3D.PERIOD_MATERIAL,
                    u_ShowColor: Laya.Shader3D.PERIOD_MATERIAL
                }, n = {
                    s_Cull: Laya.Shader3D.RENDER_STATE_CULL,
                    s_Blend: Laya.Shader3D.RENDER_STATE_BLEND,
                    s_BlendSrc: Laya.Shader3D.RENDER_STATE_BLEND_SRC,
                    s_BlendDst: Laya.Shader3D.RENDER_STATE_BLEND_DST,
                    s_DepthTest: Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
                    s_DepthWrite: Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
                }, i = Laya.Shader3D.add("MyPBR_XRay", e, t, !0), o = new Laya.SubShader(e, t);
                i.addSubShader(o);
                var a = o.addShaderPass(r.PBOutLineVs, r.PBOutLinePs);
                a.renderState.depthTest = Laya.RenderState.DEPTHTEST_GEQUAL, a.renderState.blend = Laya.RenderState.BLEND_ENABLE_ALL, 
                a.renderState.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA, a.renderState.dstBlend = Laya.RenderState.BLENDPARAM_ONE, 
                a.renderState.depthWrite = !1, o.addShaderPass(r.PBRVS, r.PBRPS, n, "Forward");
            }
        } ]);
        return r;
    }(Laya.PBRMaterial);
    r.PBOutLineVs = '\n#include "Lighting.glsl";\nattribute vec4 a_Position; \nattribute vec3 a_Normal;\nattribute mat4 a_MvpMatrix;\nuniform mat4 u_MvpMatrix; \nuniform mat4 u_WorldMat;\nattribute mat4 a_WorldMat;\n\nvarying vec3 test;\nuniform vec3 u_CameraPos;\nvarying vec3 v_NormalWS;\nvarying vec3 v_ViewDir;\n\n#ifdef BONE\n    attribute vec4 a_BoneIndices;\n    attribute vec4 a_BoneWeights;\n    const int c_MaxBoneCount = 125;\n    uniform mat4 u_Bones[c_MaxBoneCount];\n#endif\nvoid main()\n{\n    #ifdef BONE\n            mat4 skinTransform=mat4(0.0);\n            skinTransform += u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n            skinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n            skinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n            skinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n            vec4 position = skinTransform * a_Position;\n            #ifdef GPU_INSTANCE\n                gl_Position = a_MvpMatrix * position;\n            #else\n                gl_Position = u_MvpMatrix * position;\n            #endif\n            mat3 worldMat;\n            #ifdef GPU_INSTANCE\n                worldMat = mat3(a_WorldMat * skinTransform);\n            #else\n                worldMat =mat3 (u_WorldMat * skinTransform);\n            #endif\n\n            v_NormalWS=normalize(worldMat*a_Normal);\n            vec3 worldPos=(worldMat*a_Position.xyz);\n            v_ViewDir=normalize( u_CameraPos-worldPos);\n\n    #else \n    vec4 position=a_Position;\n    #ifdef GPU_INSTANCE\n        gl_Position = a_MvpMatrix * position;\n    #else\n        gl_Position = u_MvpMatrix * position;\n    #endif\n    \n    \n    mat3 worldMat;\n    #ifdef GPU_INSTANCE\n        worldMat =mat3( a_WorldMat);\n    #else\n        worldMat = mat3(u_WorldMat);\n    #endif\n    v_NormalWS=normalize(a_Normal*worldMat);\n    vec3 worldPos=position.xyz*worldMat;\n    v_ViewDir=normalize( u_CameraPos-worldPos);\n            \n\n    #endif\n    \n    \n   \n    \n}\n', 
    r.PBOutLinePs = "\n#ifdef FSHIGHPRECISION\n    precision highp float; \n#else \n    precision mediump float; \n#endif \nuniform vec4 u_ShowColor;\nuniform float u_ShowPow;\nvarying vec3 v_NormalWS;\nvarying vec3 v_ViewDir;\nvarying vec3 test;\nvoid main() \n{ \n    gl_FragColor =vec4(255/255, 23/255, 0/255,1.0); \n}\n", 
    r.PBRVS = '\n#include "Lighting.glsl";\n#include "Shadow.glsl"\n#include "PBRVSInput.glsl";\n#include "PBRVertex.glsl";\n\nvoid main()\n{\n    vertexForward();\n    gl_Position=remapGLPositionZ(gl_Position);\n}\n', 
    r.PBRPS = '\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    precision highp int;\n#else\n    precision mediump float;\n    precision mediump int;\n#endif\n\n#include "Lighting.glsl";\n#include "Shadow.glsl"\n#include "PBRFSInput.glsl";\n#include "LayaPBRBRDF.glsl";\n#include "GlobalIllumination.glsl";\n#include "PBRCore.glsl";\n\nvoid main()\n{\n    fragmentForward();\n}\n', 
    r.SHOWCOLOR = Laya.Shader3D.propertyNameToID("u_ShowColor"), r.SHOWPOW = Laya.Shader3D.propertyNameToID("u_ShowPow"), 
    r.METALLICGLOSSTEXTURE = Laya.Shader3D.propertyNameToID("u_MetallicGlossTexture"), 
    r.METALLIC = Laya.Shader3D.propertyNameToID("u_Metallic"), r.defaultMaterial, r.SHADERDEFINE_METALLICGLOSSTEXTURE = Laya.Shader3D.getDefineByName("METALLICGLOSSTEXTURE"), 
    r.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA = Laya.Shader3D.getDefineByName("SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA");
    var s = /* */ function(_Laya$Script3D5) {
        _inherits2(s, _Laya$Script3D5);
        var _super7 = _createSuper2(s);
        function s() {
            _classCallCheck2(this, s);
            return _super7.call(this);
        }
        _createClass2(s, [ {
            key: "onEnable",
            value: function onEnable() {
                this.init();
            }
        }, {
            key: "init",
            value: function init() {
                this.speed = -.03, this.dir = new Laya.Vector3(0, 0, 0), this.up = new Laya.Vector3(0, 1, 0), 
                this.toPos = new Laya.Vector3(0, 0, 0), this.toPos1 = new Laya.Vector3(0, 0, 0), 
                this.rota = new Laya.Quaternion(), this.isForward = !1, this.isRight = !1, this.ray = new Laya.Ray(this.owner.transform.position, this.dir), 
                this.hitInfo = new Laya.HitResult(), this.ray1 = new Laya.Ray(this.owner.transform.position, this.dir), 
                this.hitInfo1 = new Laya.HitResult(), this.body = this.owner.getChildByName("zhua"), 
                this.animator = this.body.getComponent(Laya.Animator), this.animator.cullingMode = Laya.Animator.CULLINGMODE_ALWAYSANIMATE, 
                this.targetPeoPle = null, this.moveType = 2, this.targetNum = 9, this.isInLeft = !1, 
                this.skinNum = G_PlayerInfo.getCurrWeaponSkin();
                var e = new r(), t = this.body.getChildByName("Body").skinnedMeshRenderer.material;
                this.body.getChildByName("Body").skinnedMeshRenderer.material = e, e.albedoColor = t.albedoColor, 
                e.albedoTexture = t.albedoTexture, e.smoothness = t.smoothness, e.emissionColor = t.emissionColor, 
                e.emissionTexture = t.emissionTexture, e.enableEmission = !0, e.showColor = new Laya.Vector4(1, 23 / 255, 0, 1), 
                e.showPow = 1.2;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                1 == this.moveType && (this.isForward || this.isRight || this.changeDir(), this.owner.transform.getForward(this.dir), 
                Laya.Vector3.normalize(this.dir, this.dir), Laya.Vector3.scale(this.dir, this.speed, this.dir), 
                this.animator.play("Walk"), this.sendLine());
            }
        }, {
            key: "startZhua",
            value: function startZhua() {
                this.hideTime = 20, G_UIManager.getUI("gameView")[1].updataZhuaTime(this.hideTime), 
                Laya.timer.loop(1e3, this, this.downHideTime);
            }
        }, {
            key: "downHideTime",
            value: function downHideTime() {
                this.hideTime--, this.hideTime < 0 ? (Laya.timer.clearAll(this), this.moveType = 3, 
                this.animator.play("Idle"), playCtrl.showSuccessView()) : G_UIManager.getUI("gameView")[1].updataZhuaTime(this.hideTime);
            }
        }, {
            key: "changeSkin",
            value: function changeSkin() {
                var e = G_PlayerInfo.getCurrWeaponSkin();
                if (this.skinNum != e) {
                    this.body.destroy();
                    var _t16 = this.owner.addChild(Laya.Loader.getRes("res/scene/LayaScene_wujian/Conventional/zhua" + (e + 1) + ".lh").clone());
                    _t16.transform.localPosition = new Laya.Vector3(0, 0, 0), _t16.name = "zhua", this.body = this.owner.getChildByName("zhua"), 
                    this.animator = this.body.getComponent(Laya.Animator), this.animator.cullingMode = Laya.Animator.CULLINGMODE_ALWAYSANIMATE, 
                    this.skinNum = e;
                    var _n9 = new r(), _i5 = this.body.getChildByName("Body").skinnedMeshRenderer.material;
                    this.body.getChildByName("Body").skinnedMeshRenderer.material = _n9, _n9.albedoColor = _i5.albedoColor, 
                    _n9.albedoTexture = _i5.albedoTexture, _n9.smoothness = _i5.smoothness, _n9.emissionColor = _i5.emissionColor, 
                    _n9.emissionTexture = _i5.emissionTexture, _n9.enableEmission = !0, _n9.showColor = new Laya.Vector4(1, 23 / 255, 0, 1), 
                    _n9.showPow = 1.2;
                }
            }
        }, {
            key: "startGame",
            value: function startGame() {
                this.moveType = 1, this.targetNum = 9, this.animator.speed = 1, this.owner.getChildByName("gongji")._particleSystem.simulationSpeed = 1, 
                this.owner.getChildByName("gongji").getChildByName("1").active = !0, this.owner.getChildByName("gongji").getChildByName("2")._particleSystem.simulationSpeed = 1, 
                this.isInLeft = dPlayer.transform.position.z < -3.5, this.changeTarget(), this.startZhua();
            }
        }, {
            key: "changeTarget",
            value: function changeTarget() {
                if (this.targetPeoPle = null, playCtrl.isGreen) {
                    G_Utils.random(1, 100) > 10 ? this.findOther() : this.targetPeoPle = dPlayer;
                } else {
                    G_Utils.random(1, 10) <= this.targetNum ? this.findOther() : this.targetPeoPle = dPlayer, 
                    this.targetNum = Math.max(2, this.targetNum -= 3);
                }
            }
        }, {
            key: "findOther",
            value: function findOther() {
                var e = gameScene.getChildByName("stage").getChildByName("change")._children.concat(playCtrl.hideObjList);
                for (var _t17 = e.length - 1; _t17 >= 0; _t17--) {
                    if ((this.isInLeft ? e[_t17].transform.position.z < -4.2 : e[_t17].transform.position.z > -2) && "dead" != e[_t17].name) {
                        this.targetPeoPle = e[_t17];
                        break;
                    }
                }
                null == this.targetPeoPle && (this.targetPeoPle = dPlayer);
            }
        }, {
            key: "changeDir",
            value: function changeDir() {
                Laya.Vector3.subtract(this.owner.transform.position, this.targetPeoPle.transform.position, this.toPos), 
                this.toPos.y = 0, this.toPos.x = -this.toPos.x, Laya.Quaternion.rotationLookAt(this.toPos, this.up, this.rota), 
                Laya.Quaternion.lerp(this.owner.transform.rotation, this.rota, .005 * Laya.timer.delta, this.rota), 
                this.owner.transform.rotation = this.rota;
            }
        }, {
            key: "sendLine",
            value: function sendLine() {
                if (this.ray.origin = this.owner.transform.position.clone(), this.ray.direction = this.dir, 
                gameScene.physicsSimulation.rayCast(this.ray, this.hitInfo, .7)) {
                    var _e27 = this.hitInfo.collider.owner.name;
                    if ("noMove" == _e27) this.owner.transform.localRotationEulerY += 10, 0 == this.isForward && (this.isForward = !0); else if ("noMoveL" == _e27) this.owner.transform.localRotationEulerY -= 10, 
                    0 == this.isForward && (this.isForward = !0); else if ("jiaju" == _e27) {
                        this.moveType = 2, G_SoundMgr.playSound("res/sounds/KillEnemy.mp3");
                        var _e28 = this.hitInfo.collider.owner.parent.parent;
                        this.hitInfo.collider.owner.active = !1, this.animator.play("Attack");
                        var _t18 = this.owner.getChildByName("gongji");
                        if (_t18._particleSystem.play(), _t18.getChildByName("1")._particleSystem.play(), 
                        _t18.getChildByName("2")._particleSystem.play(), "player0" == _e28.name) _t18._particleSystem.simulationSpeed = .1, 
                        _t18.getChildByName("1").active = !1, _t18.getChildByName("2")._particleSystem.simulationSpeed = .1, 
                        this.animator.speed = .1, Laya.timer.clearAll(this), G_UIManager.getUI("gameView")[1].showKuangDianBtn(); else {
                            _e28.getChildByName("person").active = !0, _e28.getChildByName("name").active = !0, 
                            _e28.getChildByName("person").getComponent(Laya.Animator).play("Dead");
                            for (var _t19 = 0; _t19 < playCtrl.hideObjList.length; _t19++) {
                                if (_e28 == playCtrl.hideObjList[_t19]) {
                                    playCtrl.hideObjList.splice(_t19, 1);
                                    break;
                                }
                            }
                            this.changeTarget(), Laya.timer.once(1200, this, function() {
                                this.moveType = 1;
                            }.bind(this));
                        }
                    } else if ("move" == _e27) {
                        this.moveType = 2, G_SoundMgr.playSound("res/sounds/KillEnemy.mp3"), this.animator.play("Attack");
                        var _e29 = this.owner.getChildByName("gongji");
                        _e29._particleSystem.play(), _e29.getChildByName("1")._particleSystem.play(), _e29.getChildByName("2")._particleSystem.play();
                        var _t20 = this.hitInfo.collider.owner._parent;
                        _t20.transform.rotationEuler = this.owner.transform.rotationEuler.clone();
                        var _n10 = _t20.getComponent(Laya.Animator);
                        if (!_n10) {
                            _n10 = _t20.addComponent(Laya.Animator);
                            var _e30 = gameScene.getChildByName("ani").clone();
                            _n10.addControllerLayer(_e30._components[0].getControllerLayer());
                        }
                        _n10.active = !0, _n10.play("Dead"), this.hitInfo.collider.destroy(), _t20.name = "dead", 
                        this.changeTarget(), Laya.timer.once(1200, this, function() {
                            this.moveType = 1;
                        }.bind(this));
                    }
                } else this.owner.transform.translate(this.dir, !1);
                if (this.isForward) if (this.ray1.origin = this.owner.transform.position.clone(), 
                Laya.Vector3.subtract(this.targetPeoPle.transform.position, this.owner.transform.position, this.toPos1), 
                this.toPos1.y = 0, this.ray1.direction = this.toPos1, gameScene.physicsSimulation.rayCast(this.ray1, this.hitInfo1, .7)) {
                    var _e31 = this.hitInfo1.collider.owner.name;
                    "noMove" == _e31 || "noMoveL" == _e31 ? this.isRight = !0 : (this.isForward = !1, 
                    this.isRight = !1);
                } else this.isForward = !1, this.isRight = !1;
            }
        } ]);
        return s;
    }(Laya.Script3D);
    var l = /* */ function(_e32) {
        _inherits2(l, _e32);
        var _super8 = _createSuper2(l);
        function l() {
            _classCallCheck2(this, l);
            return _super8.call(this, "game/GameScene.scene", "res/scene/LayaScene_mainScene/Conventional/mainScene.ls");
        }
        _createClass2(l, [ {
            key: "onOpened",
            value: function onOpened() {
                _get2(_getPrototypeOf2(l.prototype), "onOpened", this).call(this), G_SoundMgr.playMusic("res/sounds/BGM.mp3");
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this.uiRoot && (G_UIManager.registerUIRoot(this.uiRoot), G_UIManager.showUI("startView"), 
                Laya.MouseManager.multiTouchEnabled = !1);
            }
        }, {
            key: "onDisable",
            value: function onDisable() {
                this.uiRoot && G_UIManager.unregisterUIRoot();
            }
        }, {
            key: "onInitUI",
            value: function onInitUI() {}
        }, {
            key: "onRegisterEvent",
            value: function onRegisterEvent() {}
        }, {
            key: "onShowOwnBanner",
            value: function onShowOwnBanner() {}
        }, {
            key: "onHideOwnBanner",
            value: function onHideOwnBanner() {}
        }, {
            key: "onShowOwnInsertAd",
            value: function onShowOwnInsertAd(e) {
                G_UIManager.showUI("insertAd", e);
            }
        }, {
            key: "onShowFullSceneAd",
            value: function onShowFullSceneAd() {
                G_UIManager.showUI("fullSceneAd");
            }
        }, {
            key: "onShowLocalTips",
            value: function onShowLocalTips(e) {
                G_UIManager.showUI("tips", null, e);
            }
        }, {
            key: "onHideLocalTips",
            value: function onHideLocalTips() {
                G_UIManager.hideUI("tips");
            }
        }, {
            key: "onShowLocalModal",
            value: function onShowLocalModal(e) {
                G_UIManager.showUI("modal", null, e);
            }
        }, {
            key: "onShowLocalLoading",
            value: function onShowLocalLoading(e) {
                G_UIManager.showUI("loading", null, e);
            }
        }, {
            key: "onHideLocalLoading",
            value: function onHideLocalLoading() {
                G_UIManager.hideUI("loading");
            }
        }, {
            key: "onLoadSceneCompleted",
            value: function onLoadSceneCompleted(e) {
                window.gameScene = e, r.__init__(), window.dPlayer = gameScene.getChildByName("player0"), 
                window.playCtrl = dPlayer.addComponent(a);
                var t = Laya.Loader.getRes("res/scene/LayaScene_wujian/Conventional/zhua" + (G_PlayerInfo.getCurrWeaponSkin() + 1) + ".lh").clone();
                gameScene.getChildByName("captors").addChild(t), t.name = "zhua", gameScene.getChildByName("captors").addComponent(s);
            }
        } ]);
        return l;
    }(e);
    var c = /* */ function(_Laya$Script) {
        _inherits2(c, _Laya$Script);
        var _super9 = _createSuper2(c);
        function c() {
            var _this3;
            _classCallCheck2(this, c);
            _this3 = _super9.call(this), _this3.layoutParent = "parent", _this3.isAlignTop = !1, 
            _this3.top = 0, _this3.isAlignBottom = !1, _this3.bottom = 0, _this3.isAlignLeft = !1, 
            _this3.left = 0, _this3.isAlignRight = !1, _this3.right = 0, _this3.isAlignHorizontalCenter = !1, 
            _this3.horizontalCenter = 0, _this3.isAlignVerticalCenter = !1, _this3.verticalCenter = 0;
            return _this3;
        }
        _createClass2(c, [ {
            key: "onEnable",
            value: function onEnable() {
                Laya.stage.on(Laya.Event.RESIZE, this, this.onResize), this.onLayout();
            }
        }, {
            key: "onDisable",
            value: function onDisable() {
                Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
            }
        }, {
            key: "onResize",
            value: function onResize() {
                this.onLayout();
            }
        }, {
            key: "onLayout",
            value: function onLayout() {
                (function() {
                    console.log("Layout ...");
                    var e = this.getLayoutParent();
                    e && (this.isAlignLeft && this.isAlignRight && (this.owner.width = e.width - this.left - this.right), 
                    this.isAlignTop && this.isAlignBottom && (this.owner.height = e.height - this.top - this.bottom), 
                    this.isAlignHorizontalCenter ? this.owner.x = e.width / 2 - this.owner.width + this._getLayoutCenterOffsetX() + this.horizontalCenter : this.isAlignLeft ? this.owner.x = this.left + this._getLayoutCenterOffsetX() : this.isAlignRight && (this.owner.x = e.width - this.right - this.owner.width + this._getLayoutCenterOffsetX()), 
                    this.isAlignVerticalCenter ? this.owner.y = e.height / 2 - this.owner.height + this._getLayoutCenterOffsetY() + this.verticalCenter : this.isAlignTop ? this.owner.y = this.top + this._getLayoutCenterOffsetY() : this.isAlignBottom && (this.owner.y = e.height - this.bottom - this.owner.height + this._getLayoutCenterOffsetY()));
                }).bind(this)();
            }
        }, {
            key: "getLayoutParent",
            value: function getLayoutParent() {
                return "parent" === this.layoutParent ? this.owner.parent : Laya.stage;
            }
        }, {
            key: "_getLayoutCenterOffsetX",
            value: function _getLayoutCenterOffsetX() {
                return void 0 === this.owner.pivotX || isNaN(this.owner.pivotX) || void 0 === this.owner.anchorX || isNaN(this.owner.anchorX) ? void 0 === this.owner.pivotX || isNaN(this.owner.pivotX) ? this.owner.width * this.owner.anchorX : this.owner.pivotX : 0 === this.owner.pivotX && 0 === this.owner.anchorX ? 0 : 0 !== this.owner.pivotX ? this.owner.pivotX : this.owner.width * this.owner.anchorX;
            }
        }, {
            key: "_getLayoutCenterOffsetY",
            value: function _getLayoutCenterOffsetY() {
                return void 0 === this.owner.pivotY || isNaN(this.owner.pivotY) || void 0 === this.owner.anchorY || isNaN(this.owner.anchorY) ? void 0 === this.owner.pivotY || isNaN(this.owner.pivotY) ? this.owner.height * this.owner.anchorY : this.owner.pivotY : 0 === this.owner.pivotY && 0 === this.owner.anchorY ? 0 : 0 !== this.owner.pivotY ? this.owner.pivotY : this.owner.height * this.owner.anchorY;
            }
        } ]);
        return c;
    }(Laya.Script);
    var h = {
        SS_SYSTEM_MENU: "SystemMenu",
        SS_SHARE_APP: "ShareApp"
    };
    var d = new (/* */ function() {
        function _class() {
            _classCallCheck2(this, _class);
        }
        _createClass2(_class, [ {
            key: "init",
            value: function init() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                "undefined" != typeof HLSDK ? HLSDK.init(e) : e && "function" == typeof e.onInit && e.onInit();
            }
        }, {
            key: "showMainView",
            value: function showMainView() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                "undefined" != typeof HLSDK ? HLSDK.showMainView(e) : "function" == typeof e && e();
            }
        }, {
            key: "showGamingView",
            value: function showGamingView() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                "undefined" != typeof HLSDK ? HLSDK.showGamingView(e) : "function" == typeof e && e();
            }
        }, {
            key: "showGameEndView",
            value: function showGameEndView() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                "undefined" != typeof HLSDK ? HLSDK.showGameEndView(e) : "function" == typeof e && e();
            }
        }, {
            key: "showReviveView",
            value: function showReviveView() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                "undefined" != typeof HLSDK ? HLSDK.showReviveView(e) : "function" == typeof e && e();
            }
        }, {
            key: "showFinishView",
            value: function showFinishView() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                "undefined" != typeof HLSDK ? HLSDK.showFinishView(e) : "function" == typeof e && e();
            }
        }, {
            key: "showFinishFailView",
            value: function showFinishFailView() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                "undefined" != typeof HLSDK ? HLSDK.showFinishFailView(e) : "function" == typeof e && e();
            }
        }, {
            key: "tempHide",
            value: function tempHide() {
                "undefined" != typeof HLSDK && HLSDK.tempHide();
            }
        }, {
            key: "showTempHide",
            value: function showTempHide() {
                "undefined" != typeof HLSDK && HLSDK.showTempHide();
            }
        }, {
            key: "showBannerAd",
            value: function showBannerAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                "undefined" != typeof HLSDK && HLSDK.showBannerAd(e);
            }
        }, {
            key: "hideBannerAd",
            value: function hideBannerAd() {
                "undefined" != typeof HLSDK && HLSDK.hideBannerAd();
            }
        }, {
            key: "pauseAutoRefreshBannerAd",
            value: function pauseAutoRefreshBannerAd() {
                "undefined" != typeof HLSDK && HLSDK.pauseAutoRefreshBannerAd();
            }
        }, {
            key: "resumeAutoRefreshBannerAd",
            value: function resumeAutoRefreshBannerAd() {
                "undefined" != typeof HLSDK && HLSDK.resumeAutoRefreshBannerAd();
            }
        }, {
            key: "moveBannerAd",
            value: function moveBannerAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                "undefined" != typeof HLSDK && HLSDK.moveBannerAd(e);
            }
        }, {
            key: "moveBannerAdTo",
            value: function moveBannerAdTo(e) {
                "undefined" != typeof HLSDK && HLSDK.moveBannerAdTo(e);
            }
        }, {
            key: "isBannerOnShow",
            value: function isBannerOnShow() {
                return "undefined" != typeof HLSDK && HLSDK.isBannerOnShow();
            }
        }, {
            key: "getNextFreeGetWay",
            value: function getNextFreeGetWay() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                "undefined" != typeof HLSDK ? HLSDK.getNextFreeGetWay(e) : e && "function" == typeof e.cb && e.cb("adv");
            }
        }, {
            key: "tryFreeToGetAReward",
            value: function tryFreeToGetAReward(e) {
                "undefined" != typeof HLSDK ? HLSDK.tryFreeToGetAReward(e) : e && "function" == typeof e.succCb && e.succCb();
            }
        }, {
            key: "isWatchingVideoAdv",
            value: function isWatchingVideoAdv() {
                return "undefined" != typeof HLSDK && HLSDK.isWatchingVideoAdv();
            }
        }, {
            key: "showInterstitialAd",
            value: function showInterstitialAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                "undefined" != typeof HLSDK ? HLSDK.showInterstitialAd(e) : e && "function" == typeof e.closeCb && e.closeCb();
            }
        }, {
            key: "share",
            value: function share() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                "undefined" != typeof HLSDK ? HLSDK.share(e) : e && "function" == typeof e.cb && e.cb(!0);
            }
        }, {
            key: "shareVideo",
            value: function shareVideo() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                "undefined" != typeof HLSDK ? HLSDK.shareVideo(e) : e && "function" == typeof e.cb && e.cb(!0);
            }
        }, {
            key: "sendEvent",
            value: function sendEvent(e) {
                "undefined" != typeof HLSDK && HLSDK.sendEvent(e);
            }
        }, {
            key: "isMistakeEnabled",
            value: function isMistakeEnabled() {
                return "undefined" == typeof HLSDK || HLSDK.isMistakeEnabled();
            }
        }, {
            key: "getOpenID",
            value: function getOpenID() {
                return "undefined" != typeof HLSDK ? HLSDK.getOpenID() : null;
            }
        }, {
            key: "setSoundEnable",
            value: function setSoundEnable(e) {
                "undefined" != typeof HLSDK && HLSDK.setSoundEnable(e);
            }
        }, {
            key: "isSoundEnable",
            value: function isSoundEnable() {
                return "undefined" != typeof HLSDK && HLSDK.isSoundEnable();
            }
        }, {
            key: "setMusicEnable",
            value: function setMusicEnable(e) {
                "undefined" != typeof HLSDK && HLSDK.setMusicEnable(e);
            }
        }, {
            key: "isMusicEnable",
            value: function isMusicEnable() {
                return "undefined" != typeof HLSDK && HLSDK.isMusicEnable();
            }
        }, {
            key: "setMuteEnable",
            value: function setMuteEnable(e) {
                "undefined" != typeof HLSDK && HLSDK.setMuteEnable(e);
            }
        }, {
            key: "isMuteEnable",
            value: function isMuteEnable() {
                return "undefined" != typeof HLSDK && HLSDK.isMuteEnable();
            }
        }, {
            key: "doBtnMistake",
            value: function doBtnMistake(e) {
                "undefined" != typeof HLSDK ? HLSDK.doBtnMistake(e) : e && "function" == typeof e.touchCb && e.touchCb();
            }
        }, {
            key: "doBtnCrazyClick",
            value: function doBtnCrazyClick(e) {
                "undefined" != typeof HLSDK ? HLSDK.doBtnCrazyClick(e) : (e && "function" == typeof e.progressCb && e.progressCb(1), 
                e && "function" == typeof e.rewardCb && e.rewardCb());
            }
        } ]);
        return _class;
    }())();
    var u = /* */ function(_e33) {
        _inherits2(u, _e33);
        var _super10 = _createSuper2(u);
        function u() {
            var _this4;
            _classCallCheck2(this, u);
            _this4 = _super10.call(this, "game/GameTestScene.scene"), _this4.readyView && _this4.readyView.doShow(), 
            _this4.popupView && _this4.popupView.doHide(), _this4.testImage && (_this4.testImage.dark = !0);
            return _this4;
        }
        _createClass2(u, [ {
            key: "onOpened",
            value: function onOpened() {
                _get2(_getPrototypeOf2(u.prototype), "onOpened", this).call(this), G_PlatHelper.getPlat() && (G_Switch.isPublishing(function(e) {
                    console.log("isPublishing: ", e);
                }), G_Switch.isNewGame(function(e) {
                    console.log("isNewGame: ", e);
                }), console.log("isSupportBannerAd: ", G_Adv.isSupportBannerAd()), console.log("isSupportVideoAd: ", G_Adv.isSupportVideoAd()), 
                G_FreeGetMgr.getNextFreeGetWay(function(e) {
                    console.log("next free get way: ", e);
                }));
                var e = {
                    arr: [ 0, 1, 2 ],
                    boolean: !0,
                    date: new Date(0),
                    err: new Error("我是一个错误"),
                    func: function func() {
                        console.log("我是一个函数");
                    },
                    nul: null,
                    num: 0,
                    obj: {
                        name: "我是一个对象",
                        id: 1
                    },
                    reg: new RegExp("/我是一个正则/ig"),
                    str: "123aa",
                    unf: void 0
                };
                console.log(e), console.log("deepClone...");
                var t = G_Utils.deepClone(e);
                console.log(t), console.log(t.err), t.func(), console.log("cloneDeep...");
                var n = G_Utils.cloneDeep(e);
                console.log(n), console.log(n.err), n.func();
                var i = function i() {
                    console.log("test!!!");
                };
                console.error("aaabbccc event..."), G_Event.addEventListerner("aaabbccc", i), G_Event.removeEventListerner("aaabbccc", i), 
                G_Event.dispatchEvent("aaabbccc");
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this.uiRoot && G_UIManager.registerUIRoot(this.uiRoot);
            }
        }, {
            key: "onDisable",
            value: function onDisable() {
                this.uiRoot && G_UIManager.unregisterUIRoot();
            }
        }, {
            key: "onInitUI",
            value: function onInitUI() {
                if (this.settingBtn) {
                    this.settingBtn.on("click", null, function() {
                        G_UIHelper.playBtnTouchAction(this.settingBtn, function() {
                            this.onSettingTouched();
                        }.bind(this)), G_SoundMgr.playSound(G_SoundName.SN_CLICK);
                    }.bind(this));
                }
                this.moreGamesBtn && this.moreGamesBtn.on("click", null, function() {
                    G_UIHelper.playBtnTouchAction(this.moreGamesBtn, function() {});
                }.bind(this)), this.testUIBtn && (G_UIHelper.refreshFreeWayOfBtn(this.testUIBtn, "comm/video_icon.png", "comm/share_icon.png"), 
                this.testUIBtn.on("click", null, function() {
                    this.testUIBtn.doTouch(h.SS_SHARE_APP, function() {
                        console.log("succ....");
                    }, function() {
                        console.log("fail....");
                    });
                }.bind(this))), this.testBannerBtn && this.testBannerBtn.on("click", null, function() {
                    G_SoundMgr.playSound(G_SoundName.SN_CLICK), G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD, {
                        min: !0
                    });
                }.bind(this)), this.testInsertBtn && this.testInsertBtn.on("click", null, function() {
                    G_SoundMgr.playSound(G_SoundName.SN_CLICK), G_Event.dispatchEvent(G_EventName.EN_SHOW_INSERT_AD);
                }.bind(this)), this.testSubscribeOnceBtn && this.testSubscribeOnceBtn.on("click", null, function() {
                    G_SoundMgr.playSound(G_SoundName.SN_CLICK), G_Subscriber.isSupportOnce() ? G_Subscriber.reqSubscribeOnceMsgs("Test", function(e) {
                        console.log("reqSubscribeOnceMsgs state: ", e), e ? G_PlatHelper.showToast("订阅一次性消息成功") : G_PlatHelper.showToast("订阅一次性消息失败");
                    }) : G_PlatHelper.showToast("当前平台暂不支持");
                }.bind(this)), this.testSubscribeForeverBtn && this.testSubscribeForeverBtn.on("click", null, function() {
                    G_SoundMgr.playSound(G_SoundName.SN_CLICK), G_Subscriber.isSupportForever() ? G_Subscriber.reqSubscribeAllForeverMsgs(function(e) {
                        console.log("reqSubscribeAllForeverMsgs state: ", e), e ? G_PlatHelper.showToast("订阅长期消息成功") : G_PlatHelper.showToast("订阅长期消息失败");
                    }) : G_PlatHelper.showToast("当前平台暂不支持");
                }.bind(this)), this.testDepositBtn && this.testDepositBtn.on("click", null, function() {
                    G_RedPackageMgr.depositMoney(function(e, t) {
                        console.log("deposit money state: ", e, t);
                    });
                }.bind(this)), this.testWithdrawBtn && this.testWithdrawBtn.on("click", null, function() {
                    G_RedPackageMgr.withdrawMoney(3, function(e, t) {
                        console.log("withdraw money state: ", e, t);
                    });
                }.bind(this)), this.testWithdrawEverydayBtn && this.testWithdrawEverydayBtn.on("click", null, function() {
                    G_RedPackageMgr.withdrawEverydayMoney(function(e, t) {
                        console.log("withdraw everyday money state: ", e, t);
                    });
                }.bind(this)), this.testLoginBtn && this.testLoginBtn.on("click", null, function() {
                    G_NativeWXMgr.isWXAppInstalled() ? G_NativeWXMgr.reqLoginToWX(function(e, t) {
                        console.log("login result: ", e, t);
                    }) : console.warn("wx app is not installed...");
                }.bind(this)), this.testShareBtn && this.testShareBtn.on("click", null, function() {
                    !G_PlatHelper.isNativePlatform() || G_NativeWXMgr.isWXAppInstalled() ? G_UIManager.showUI("capture", function() {
                        console.log("on show capture closed...");
                    }, function(e) {
                        G_NativeWXMgr.reqShareImage(!0, e, function(e) {
                            console.log("share result: ", e);
                        });
                    }) : console.warn("wx app is not installed...");
                }.bind(this)), this.readyView && this._initBaseMenu(this.readyView);
            }
        }, {
            key: "onRegisterEvent",
            value: function onRegisterEvent() {
                var _this5 = this;
                G_Event.addEventListerner(G_EventName.EN_REFRESH_VIDEO_AD, function() {
                    _this5.testUIBtn && G_UIHelper.refreshFreeWayOfBtn(_this5.testUIBtn, "comm/video_icon.png", "comm/share_icon.png");
                });
            }
        }, {
            key: "onShowOwnBanner",
            value: function onShowOwnBanner() {
                G_UIManager.showUI("bannerAd");
            }
        }, {
            key: "onHideOwnBanner",
            value: function onHideOwnBanner() {
                G_UIManager.hideUI("bannerAd");
            }
        }, {
            key: "onShowOwnInsertAd",
            value: function onShowOwnInsertAd(e) {
                G_UIManager.showUI("insertAd", e);
            }
        }, {
            key: "onShowLocalTips",
            value: function onShowLocalTips(e) {
                G_UIManager.showUI("tips", null, e);
            }
        }, {
            key: "onHideLocalTips",
            value: function onHideLocalTips() {
                G_UIManager.hideUI("tips");
            }
        }, {
            key: "onShowLocalModal",
            value: function onShowLocalModal(e) {
                G_UIManager.showUI("modal", null, e);
            }
        }, {
            key: "onShowLocalLoading",
            value: function onShowLocalLoading(e) {
                G_UIManager.showUI("loading", null, e);
            }
        }, {
            key: "onHideLocalLoading",
            value: function onHideLocalLoading() {
                G_UIManager.hideUI("loading");
            }
        }, {
            key: "onLoadSceneCompleted",
            value: function onLoadSceneCompleted(e) {}
        }, {
            key: "onSettingTouched",
            value: function onSettingTouched(e) {
                G_UIManager.showUI("setting", function() {
                    console.log("on show setting closed...");
                });
            }
        }, {
            key: "_initBaseMenu",
            value: function _initBaseMenu(e) {
                e && (e.doShow = function() {
                    e.visible = !0;
                }, e.doHide = function() {
                    e.visible = !1;
                }, e.doHide());
            }
        } ]);
        return u;
    }(e);
    var _ = /* */ function(_Laya$Script2) {
        _inherits2(_, _Laya$Script2);
        var _super11 = _createSuper2(_);
        function _() {
            var _this6;
            _classCallCheck2(this, _);
            _this6 = _super11.call(this), _this6.gap = 3e3, _this6._tween = null, _this6._shakeTimes = 0;
            return _this6;
        }
        _createClass2(_, [ {
            key: "onEnable",
            value: function onEnable() {
                var _this7 = this;
                var _e34 = null;
                (_e34 = function e() {
                    _this7.owner && !_this7.owner.destroyed && (_this7._shakeTimes > 0 && _this7._shakeTimes % 2 == 0 ? (_this7._shakeTimes = 0, 
                    _this7._shakeToMiddle(function() {
                        G_Scheduler.schedule("auto_shake_" + G_Utils.generateString(32), _e34, !1, _this7.gap, 0);
                    })) : _this7.owner.rotation < 15 ? (_this7._shakeTimes += 1, _this7._shakeToRight(_e34)) : (_this7._shakeTimes += 1, 
                    _this7._shakeToLeft(_e34)));
                })();
            }
        }, {
            key: "_shakeToLeft",
            value: function _shakeToLeft(e) {
                var _this8 = this;
                if (this._clearTween(), this.owner && this.owner.rotation > -15) {
                    var _t21 = (this.owner.rotation + 15) / 30 * 50;
                    this._tween = Laya.Tween.to(this.owner, {
                        rotation: -15
                    }, _t21, null, Laya.Handler.create(null, function() {
                        _this8._tween = null, "function" == typeof e && e();
                    }));
                } else "function" == typeof e && e();
            }
        }, {
            key: "_shakeToRight",
            value: function _shakeToRight(e) {
                var _this9 = this;
                if (this._clearTween(), this.owner && this.owner.rotation < 15) {
                    var _t22 = (15 - this.owner.rotation) / 30 * 50;
                    this._tween = Laya.Tween.to(this.owner, {
                        rotation: 15
                    }, _t22, null, Laya.Handler.create(null, function() {
                        _this9._tween = null, "function" == typeof e && e();
                    }));
                } else "function" == typeof e && e();
            }
        }, {
            key: "_shakeToMiddle",
            value: function _shakeToMiddle(e) {
                var _this10 = this;
                if (this._clearTween(), this.owner && 0 != this.owner.rotation) {
                    var _t23 = Math.abs(this.owner.rotation) / 30 * 50;
                    this._tween = Laya.Tween.to(this.owner, {
                        rotation: 0
                    }, _t23, null, Laya.Handler.create(null, function() {
                        _this10._tween = null, "function" == typeof e && e();
                    }));
                } else "function" == typeof e && e();
            }
        }, {
            key: "_clearTween",
            value: function _clearTween() {
                this.owner && this._tween && (this._tween.clear(), this._tween = null);
            }
        } ]);
        return _;
    }(Laya.Script);
    var f = /* */ function(_Laya$Script3) {
        _inherits2(f, _Laya$Script3);
        var _super12 = _createSuper2(f);
        function f() {
            var _this11;
            _classCallCheck2(this, f);
            _this11 = _super12.call(this), _this11.miniScale = 1, _this11.maxScale = 1.1, _this11.duration = 800, 
            _this11._tween = null;
            return _this11;
        }
        _createClass2(f, [ {
            key: "onEnable",
            value: function onEnable() {
                var _this12 = this;
                var _e35 = null;
                (_e35 = function e() {
                    _this12.owner && !_this12.owner.destroyed && (_this12.owner.scaleX < _this12.maxScale ? _this12._scaleToMax(_e35) : _this12._scaleToMini(_e35));
                })();
            }
        }, {
            key: "_scaleToMini",
            value: function _scaleToMini(e) {
                var _this13 = this;
                if (this._clearTween(), this.owner && this.owner.scaleX > this.miniScale) {
                    var _t24 = (this.owner.scaleX - this.miniScale) / (this.maxScale - this.miniScale) * this.duration;
                    this._tween = Laya.Tween.to(this.owner, {
                        scaleX: this.miniScale,
                        scaleY: this.miniScale
                    }, _t24, null, Laya.Handler.create(null, function() {
                        _this13._tween = null, "function" == typeof e && e();
                    }), 0, !1, !1);
                } else "function" == typeof e && e();
            }
        }, {
            key: "_scaleToMax",
            value: function _scaleToMax(e) {
                var _this14 = this;
                if (this._clearTween(), this.owner && this.owner.scaleX < this.maxScale) {
                    var _t25 = (this.maxScale - this.owner.scaleX) / (this.maxScale - this.miniScale) * this.duration;
                    this._tween = Laya.Tween.to(this.owner, {
                        scaleX: this.maxScale,
                        scaleY: this.maxScale
                    }, _t25, null, Laya.Handler.create(null, function() {
                        _this14._tween = null, "function" == typeof e && e();
                    }), 0, !1, !1);
                } else "function" == typeof e && e();
            }
        }, {
            key: "_clearTween",
            value: function _clearTween() {
                this.owner && this._tween && (this._tween.clear(), this._tween = null);
            }
        } ]);
        return f;
    }(Laya.Script);
    var y = Laya.UIUtils;
    y.darkFilter = new Laya.ColorFilter([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ]), 
    y.dark = function(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        t ? y.addFilter(e, y.darkFilter) : y.clearFilter(e, Laya.ColorFilter);
    }, Laya.Sprite.drawToCanvas = function(e, t, n, i, o, a) {
        o -= e.x, a -= e.y, o |= 0, a |= 0, n |= 0, i |= 0;
        var r = new Laya.Context();
        r.size(n, i), r.asBitmap = !0, r._targets.start(), r._targets.clear(0, 0, 0, 0), 
        Laya.RenderSprite.renders[t]._fun(e, r, o, a), r.flush(), r._targets.end(), r._targets.restore();
        var s = r._targets.getData(0, 0, n, i);
        r.destroy();
        var l = new Laya.HTMLCanvas(!0);
        l.size(n, i);
        for (var c = l.getContext("2d").getImageData(0, 0, n, i), h = 4 * n, d = c.data, u = i - 1, _ = u * h, f = 0; u >= 0; u--) {
            d.set(s.subarray(f, f + h), _), _ -= h, f += h;
        }
        var y = new Laya.HTMLCanvas(!0);
        return y.size(n, i), y.getContext("2d").putImageData(c, 0, 0), y;
    }, Laya.UIComponent.prototype._dark = !1, Object.defineProperty(Laya.UIComponent.prototype, "dark", {
        get: function get() {
            return this._dark;
        },
        set: function set(e) {
            e !== this._dark && (this._dark = e, Laya.UIUtils.dark(this, e));
        }
    }), Laya.Animator.prototype._setClipDatasToNode = function(e, t, n, i) {
        for (var o = e._realtimeDatas, a = e._clip._nodes, r = e._nodeOwners, s = 0, l = a.count; s < l; s++) {
            var c = r[s];
            if (c) {
                var h = c.propertyOwner;
                if (h) {
                    switch (c.type) {
                      case 0:
                        for (var d = c.property, u = d.length - 1, _ = 0; _ < u && (h = h[d[_]]); _++) {}
                        if (this._applyFloat(h, d[u], c, t, n, i, o[s]), h instanceof Laya.Vector4) {
                            var _e36 = c.propertyOwner;
                            for (var _t26 = 0; _t26 < u; _t26++) {
                                if (_e36 = _e36[d[_t26]], _t26 == u - 2) {
                                    _e36[d[_t26 + 1]] = h;
                                    break;
                                }
                            }
                        }
                        break;

                      case 1:
                        var f = h.localPosition;
                        this._applyPositionAndRotationEuler(c, t, n, i, o[s], f), h.localPosition = f;
                        break;

                      case 2:
                        var y = h.localRotation;
                        this._applyRotation(c, t, n, i, o[s], y), h.localRotation = y;
                        break;

                      case 3:
                        var p = h.localScale;
                        this._applyScale(c, t, n, i, o[s], p), h.localScale = p;
                        break;

                      case 4:
                        var g = h.localRotationEuler;
                        this._applyPositionAndRotationEuler(c, t, n, i, o[s], g), h.localRotationEuler = g;
                    }
                    c.updateMark = this._updateMark;
                }
            }
        }
    }, Object.defineProperty(Laya.CharRender_Canvas.prototype, "canvasWidth", {
        get: function get() {
            return Laya.CharRender_Canvas.canvas.width;
        },
        set: function set(e) {
            Laya.CharRender_Canvas.canvas.width != e && (Laya.CharRender_Canvas.canvas.width = e, 
            e > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), this.ctx.setTransform(this.lastScaleX, 0, 0, this.lastScaleY, 0, 0));
        }
    }), Laya.getMiniAdpter = function() {
        return Laya.MiniAdpter ? Laya.MiniAdpter : Laya.QQMiniAdapter ? Laya.QQMiniAdapter : Laya.VVMiniAdapter ? Laya.VVMiniAdapter : Laya.QGMiniAdapter ? Laya.QGMiniAdapter : Laya.TTMiniAdapter ? Laya.TTMiniAdapter : Laya.HWMiniAdapter ? Laya.HWMiniAdapter : null;
    }, String.prototype.format = function(e) {
        var t = this;
        if (arguments.length < 1) return t;
        var n = arguments;
        for (var i in 1 == arguments.length && "object" == _typeof2(e) && (n = e), n) {
            var o = n[i];
            null != o && (t = t.replace("{" + i + "}", o));
        }
        return t;
    };
    var p = {
        init: function init() {
            window.G_EventName = {
                EN_SYSTEM_ERROR: "EN_SYSTEM_ERROR",
                EN_SDK_NOT_SUPPORT: "EN_SDK_NOT_SUPPORT",
                EN_NET_CONNECTION_LOST: "EN_NET_CONNECTION_LOST",
                EN_NET_CONNECTION_RECOVER: "EN_NET_CONNECTION_RECOVER",
                EN_WILL_EXIT: "EN_WILL_EXIT",
                EN_APP_AFTER_ONSHOW: "EN_APP_AFTER_ONSHOW",
                EN_APP_BEFORE_ONHIDE: "EN_APP_BEFORE_ONHIDE",
                EN_BANNER_NOT_SUPPORT_RIGHT_NOW: "EN_BANNER_NOT_SUPPORT_RIGHT_NOW",
                EN_VIDEO_NOT_SUPPORT_RIGHT_NOW: "EN_VIDEO_NOT_SUPPORT_RIGHT_NOW",
                EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW: "EN_INTERSTITIAL_NOT_SUPPORT_RIGHT_NOW",
                EN_LAUNCH_APP_FROM_UNKNOW: "EN_LAUNCH_APP_FROM_UNKNOW",
                EN_LAUNCH_APP_FROM_EVERYWHERE: "EN_LAUNCH_APP_FROM_EVERYWHERE",
                EN_LAUNCH_APP_FROM_RECENT: "EN_LAUNCH_APP_FROM_RECENT",
                EN_LAUNCH_APP_FROM_FAVOURITE: "EN_LAUNCH_APP_FROM_FAVOURITE",
                EN_LAUNCH_APP_FROM_SINGLE_SHARE: "EN_LAUNCH_APP_FROM_SINGLE_SHARE",
                EN_LAUNCH_APP_FROM_GROUP_SHARE: "EN_LAUNCH_APP_FROM_GROUP_SHARE",
                EN_LAUNCH_APP_FROM_SHARE: "EN_LAUNCH_APP_FROM_SHARE",
                EN_LAUNCH_APP_BACK_FROM_OTHER_APP: "EN_LAUNCH_APP_BACK_FROM_OTHER_APP",
                EN_SHOW_LOCAL_TIPS: "EN_SHOW_LOCAL_TIPS",
                EN_HIDE_LOCAL_TIPS: "EN_HIDE_LOCAL_TIPS",
                EN_SHOW_LOCAL_MODAL: "EN_SHOW_LOCAL_MODAL",
                EN_SHOW_LOCAL_LOADING: "EN_SHOW_LOCAL_LOADING",
                EN_HIDE_LOCAL_LOADING: "EN_HIDE_LOCAL_LOADING"
            };
            var e = {};
            window.G_NotPropagationEventName = e, window.G_IsGlobalEventPropagation = function(t) {
                return "string" != typeof t || !G_EventName[t] || !e[t];
            };
            window.G_OpenDataOperation = {
                ODO_PRELOAD: "preload",
                ODO_SHOW_RANK: "show_rank"
            };
            window.G_ReportEventName = {
                REN_NAVIGATION_TO_MINIPROGRAM: "navigation_to_miniprogram",
                REN_NAVIGATION_TO_MINIPROGRAM_SUCCESS: "navigation_to_miniprogram_success",
                REN_NAVIGATION_TO_MINIPROGRAM_CANCEL: "navigation_to_miniprogram_cancel",
                REN_NAVIGATION_TO_MINIPROGRAM_ERROR: "navigation_to_miniprogram_error",
                REN_RECEIVED_MEMORY_WARNING: "received_memory_warning"
            };
            window.G_Const = {
                C_TIMEOUT_OF_LOGIN: 1e4,
                C_SCHEDULE_REPEAT_FOREVER: 1561963389461
            };
            window.G_Dbs = [], window.G_LoginBtnPath = "resources/***.png", window.G_IsAlwaysNewPlayer = !1, 
            window.G_OpenID = null, window.G_SessID = null, window.G_Nickname = "", window.G_Sex = 0, 
            window.G_HeadUrl = "";
        }
    }, g = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_Scheduler Instance...");
                    var e = {};
                    return {
                        schedule: function schedule(t, n, i, o, a) {
                            if (!this._checkKey(t) || !this._checkCallback(n)) return !1;
                            if (e[t]) return !1;
                            null == o && (o = i ? 1 : 0), null == a && (a = G_Const.C_SCHEDULE_REPEAT_FOREVER);
                            var r = 0 === a ? n : function(n) {
                                var i = e[t];
                                if (i) if (i.invokeTimes += 1, i.invokeTimes >= a) {
                                    var _e37 = i.cb;
                                    this.unschedule(t), _e37();
                                } else i.cb(n);
                            }.bind(this);
                            return 0 === a ? i ? Laya.timer.frameOnce(o, this, r) : Laya.timer.once(o, this, r) : (e[t] = {
                                invokeTimes: 0,
                                cb: n,
                                scheduleCb: r
                            }, i ? Laya.timer.frameLoop(o, this, r) : Laya.timer.loop(o, this, r)), !0;
                        },
                        unschedule: function unschedule(t) {
                            return !!this._checkKey(t) && !!e[t] && (Laya.timer.clear(this, e[t].scheduleCb), 
                            delete e[t], !0);
                        },
                        isScheduled: function isScheduled(t) {
                            return !!this._checkKey(t) && !!e[t];
                        },
                        unscheduleAll: function unscheduleAll() {
                            for (var _t27 in e) {
                                Laya.timer.clear(this, e[_t27].cb);
                            }
                            e = {};
                        },
                        _checkKey: function _checkKey(e) {
                            return "string" == typeof e && "" !== e;
                        },
                        _checkCallback: function _checkCallback(e) {
                            return "function" == typeof e;
                        }
                    };
                }()), e;
            }
        };
    }(), m = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_Event Instance...");
                    var e = {};
                    return {
                        addEventListerner: function addEventListerner(t, n) {
                            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                            if (!this._checkString(t) || !this._checkListerner(n)) return "";
                            void 0 === e[t] && (e[t] = []);
                            var o = G_Utils.generateString(32);
                            return e[t].push({
                                key: o,
                                method: n,
                                caller: i
                            }), o;
                        },
                        removeEventListernerByKey: function removeEventListernerByKey(t, n) {
                            if (this._checkString(t) && this._checkString(n) && void 0 !== e[t]) for (var _i6 = 0; _i6 < e[t].length; _i6++) {
                                if (e[t][_i6].key === n) return void e[t].splice(_i6, 1);
                            }
                        },
                        removeEventListerner: function removeEventListerner(t, n) {
                            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                            if (this._checkString(t) && this._checkListerner(n) && void 0 !== e[t]) for (var _o5 = 0; _o5 < e[t].length; _o5++) {
                                var _a5 = e[t][_o5];
                                if (_a5.method === n && _a5.caller === i) return void e[t].splice(_o5, 1);
                            }
                        },
                        removeAllEventListerners: function removeAllEventListerners() {
                            e = {};
                        },
                        hasEventListerner: function hasEventListerner(t) {
                            return !!this._checkString(t) && void 0 !== e[t] && e[t].length > 0;
                        },
                        dispatchEvent: function dispatchEvent(t) {
                            if (!this._checkString(t)) return;
                            var n = Array.prototype.slice.call(arguments);
                            n.shift(), n.length > 0 ? console.log("dispatch EventName: {0}, Params: {1}".format(t, JSON.stringify(n))) : console.log("dispatch EventName: {0}".format(t));
                            var i = null;
                            for (var _o6 in e[t]) {
                                var _a6 = e[t][_o6], _r = !1;
                                void 0 === (_r = _a6.method.apply(_a6.caller, n)) && (_r = null), i = i || _r;
                            }
                            if (null === i && (i = G_IsGlobalEventPropagation(t)), !i) {
                                var _e38 = this._getParentEventName(t);
                                "" !== _e38 && (n.splice(0, 0, _e38), this.dispatchEvent.apply(this, n));
                            }
                        },
                        _checkString: function _checkString(e) {
                            return void 0 !== e && "string" == typeof e && "" !== e;
                        },
                        _checkListerner: function _checkListerner(e) {
                            return "function" == typeof e;
                        },
                        _getParentEventName: function _getParentEventName(e) {
                            if (!this._checkString(e)) return "";
                            var t = e.split("_"), n = "";
                            for (var _e39 = 0; _e39 < t.length - 1; _e39++) {
                                n += "" === n ? t[_e39] : "_" + t[_e39];
                            }
                            return n;
                        }
                    };
                }()), e;
            }
        };
    }(), w = function() {
        var e, t;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_Utils Instance...");
                    var e = function e(_e40, t, n) {
                        var i = _e40.toString();
                        for (n || (n = "0"); i.length < t; ) {
                            i = n + i;
                        }
                        return i;
                    };
                    return {
                        registerLodash: function registerLodash(e) {
                            t = e;
                        },
                        getLodash: function getLodash() {
                            return t;
                        },
                        HexString2Uint8Array: function HexString2Uint8Array(e) {
                            if ("" === e || e.length % 2 != 0) return new Uint8Array();
                            var t = [];
                            for (var _n11 = 0; _n11 < e.length; _n11 += 2) {
                                t[t.length] = parseInt(e[_n11] + e[_n11 + 1], 16);
                            }
                            return new Uint8Array(t);
                        },
                        Uint8Array2HexString: function Uint8Array2HexString(e) {
                            var t = "";
                            for (var _n12 = 0; _n12 < e.length; _n12++) {
                                var _i7 = e[_n12].toString(16).toUpperCase();
                                t += 1 == _i7.length ? "0" + _i7 : _i7;
                            }
                            return t;
                        },
                        formatDate: function formatDate(t, n, i) {
                            var o = "", a = "";
                            if (n || i || (n = i = !0), n) {
                                var r = t.getFullYear(), s = t.getMonth() + 1, l = t.getDate();
                                o = 2 == n ? r + "/" + e(s, 2) + "/" + e(l, 2) : r + "年" + s + "月" + l + "日";
                            }
                            if (i) {
                                var c = t.getHours(), h = (s = t.getMinutes(), t.getSeconds());
                                a = e(c, 2) + ":" + e(s, 2) + ":" + e(h, 2);
                            }
                            return n && i ? o + " " + a : n ? o : i ? a : o + " " + a;
                        },
                        clone: function clone(e) {
                            return t ? t.clone(e) : (G_PlatHelper.isQQPlatform() || console.warn("can not use clone utils before register lodash tools..."), 
                            this.deepClone(e));
                        },
                        cloneDeep: function cloneDeep(e) {
                            return t ? t.cloneDeep(e) : (G_PlatHelper.isQQPlatform() || console.warn("can not use cloneDeep utils before register lodash tools..."), 
                            this.deepClone(e));
                        },
                        deepClone: function deepClone(e) {
                            if (!e) return e;
                            var t;
                            if ([ Number, String, Boolean ].forEach(function(n) {
                                e instanceof n && (t = n(e));
                            }), void 0 === t) {
                                var n = this;
                                if ("[object Array]" === Object.prototype.toString.call(e)) t = [], e.forEach(function(e, i, o) {
                                    t[i] = n.deepClone(e);
                                }); else if ("object" == _typeof2(e)) {
                                    if (e.nodeType && "function" == typeof e.cloneNode) t = e.cloneNode(!0); else if (e.prototype) t = e; else if (e instanceof Date) t = new Date(e); else for (var i in t = {}, 
                                    e) {
                                        t[i] = n.deepClone(e[i]);
                                    }
                                } else t = e;
                            }
                            return t;
                        },
                        random: function random(e, t) {
                            if (e < 0 || t <= 0) return 0;
                            switch (arguments.length) {
                              case 1:
                                return Math.floor(Math.random() * e + 1);

                              case 2:
                                return Math.floor(Math.random() * (t - e + 1) + e);

                              default:
                                return 0;
                            }
                        },
                        generateString: function generateString(e) {
                            var t = "";
                            if ("number" == typeof e) for (var _n13 = 0; _n13 < e; _n13++) {
                                Math.random() < .5 ? t += String.fromCharCode(this.random("0".charCodeAt(), "0".charCodeAt() + 9)) : t += String.fromCharCode(this.random("a".charCodeAt(), "a".charCodeAt() + 25));
                            }
                            return t;
                        },
                        cutString: function cutString(e, t) {
                            var n = 0, i = "", o = /[^\x00-\xff]/g, a = "", r = e.replace(o, "**").length;
                            if (r > t) {
                                for (var s = 0; s < r && (null != (a = e.charAt(s).toString()).match(o) ? n += 2 : n++, 
                                !(n > t)); s++) {
                                    i += a;
                                }
                                r > t && (i += "...");
                            } else i = e;
                            return i;
                        },
                        bigNumber2StrNumber: function bigNumber2StrNumber(e, t) {
                            if (e) {
                                if ("number" == typeof e && (e = BigNumber(e)), !(e instanceof BigNumber)) return "";
                                if (e.e <= 4) return e.toFixed();
                                var _n14 = "k";
                                if (e.e >= 6) for (var _t28 = 6; _t28 <= 246; _t28 += 3) {
                                    if (e.e >= _t28 && e.e < _t28 + 3) {
                                        6 === _t28 ? _n14 = "m" : 9 === _t28 ? _n14 = "b" : 12 === _t28 ? _n14 = "t" : (_n14 = String.fromCharCode("a".charCodeAt() + (_t28 - 15) / 3), 
                                        _n14 += _n14);
                                        break;
                                    }
                                }
                                "number" != typeof t && (t = 3);
                                var _i8 = e.toExponential(t - 1);
                                return BigNumber(_i8.substring(0, _i8.indexOf("e"))).times(Math.pow(10, e.e % 3)).toString() + _n14;
                            }
                            return "";
                        },
                        convertNumberToChinese: function convertNumberToChinese(e) {
                            if ("number" != typeof e) return "一";
                            switch (e) {
                              case 1:
                                return "一";

                              case 2:
                                return "二";

                              case 3:
                                return "三";

                              case 4:
                                return "四";

                              case 5:
                                return "五";

                              case 6:
                                return "六";

                              case 7:
                                return "日";

                              default:
                                return "一";
                            }
                        },
                        convertSecondToHourMinute: function convertSecondToHourMinute(e) {
                            if (!G_GameDB.isLoaded()) return "";
                            var t = G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_UNIT_HOUR).word, n = G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_UNIT_MINUTE).word;
                            if ("number" == typeof e) {
                                if (e >= 3600) {
                                    var _i9 = Math.floor(e / 3600), _o7 = Math.floor((e - 3600 * _i9) / 60);
                                    return _o7 > 0 ? _i9.toString() + t + _o7.toString() + n : _i9.toString() + t;
                                }
                                return e >= 60 ? Math.floor(e / 60).toString() + n : e > 0 ? "1" + n : "0" + n;
                            }
                            return "";
                        },
                        convertSecondToHourMinuteSecond: function convertSecondToHourMinuteSecond(e, t) {
                            var n = "";
                            if (e >= 3600) {
                                var _t29 = Math.floor(e / 3600);
                                n += _t29 >= 10 ? _t29.toString() : "0" + _t29.toString();
                            } else t || (n += "00");
                            "" !== n && (n += ":");
                            var i = Math.floor(e % 3600 / 60);
                            n += i > 0 ? i >= 10 ? i.toString() : "0" + i.toString() : "00", n += ":";
                            var o = e % 60;
                            return n += o > 0 ? o >= 10 ? o.toString() : "0" + o.toString() : "00";
                        },
                        isObject: function isObject(e) {
                            return e && "object" == _typeof2(e);
                        },
                        shuffleArray: function shuffleArray(e) {
                            if (Array.isArray(e)) for (var _t30 = 0; _t30 < e.length; _t30++) {
                                var _n15 = Math.round(Math.random() * (e.length - 1 - _t30)) + _t30, _i10 = e[_n15];
                                e[_n15] = e[_t30], e[_t30] = _i10;
                            }
                        },
                        checkHDR: function checkHDR() {
                            var e = Laya.SystemUtils.supportRenderTextureFormat(Laya.RenderTextureFormat.R16G16B16A16) && Laya.SystemUtils.supportRenderTextureFormat(Laya.RenderTextureFormat.R8G8B8A8);
                            if (e) {
                                var _t31 = new Laya.RenderTexture(512, 512, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.STENCIL_8);
                                e = !!_t31._glTexture && !Object.keys(_t31._glTexture).includes("getExtra");
                            }
                            return e;
                        },
                        printExposeAdvInfos: function printExposeAdvInfos(e) {
                            var t = function t(e) {
                                console.log("曝光广告：", {
                                    advId: e.adv_id,
                                    appId: e.appid,
                                    title: e.title,
                                    path: e.origin_path ? e.origin_path : e.logo_url.origin_path
                                });
                            };
                            Array.isArray(e) ? (console.warn("曝光广告" + e.length + "条"), e.forEach(function(e) {
                                t(e);
                            })) : (console.warn("曝光广告1条"), t(e));
                        }
                    };
                }()), e;
            }
        };
    }(), S = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (console.log("Init G_UIHelper Instance..."), e = {
                    seekNodeByName: function seekNodeByName(e, t) {
                        var _this15 = this;
                        if (e.name === t) return e;
                        var n = void 0;
                        return e._children.forEach(function(e) {
                            n || (n = _this15.seekNodeByName(e, t));
                        }), n;
                    },
                    getComponentByName: function getComponentByName(e, t) {
                        var n = void 0;
                        return e._components.forEach(function(e) {
                            !n && e && -1 != e.runtime.indexOf(t) && (n = e);
                        }), n;
                    },
                    playBtnTouchAction: function playBtnTouchAction(e, t) {
                        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                        var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                        var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 500;
                        if (e) {
                            if (e._lastClickTime && Date.now() - e._lastClickTime <= a) return;
                            e._lastClickTime = Date.now(), e._touchTween && (e._touchTween.clear(), e._touchTween = null), 
                            e.scaleX = n, e.scaleY = n, e._touchTween = Laya.Tween.to(e, {
                                scaleX: 1.1 * n * i,
                                scaleY: 1.1 * n * i
                            }, 100 * o, null, Laya.Handler.create(null, function() {
                                e._touchTween = Laya.Tween.to(e, {
                                    scaleX: n,
                                    scaleY: n
                                }, 50 * o, null, Laya.Handler.create(null, function() {
                                    e._touchTween = null, "function" == typeof t && t();
                                }), 0, !1, !1);
                            }), 0, !1, !1);
                        }
                    },
                    playOpenPopupAction: function playOpenPopupAction(e, t) {
                        this.playUIScaleAction(e, .8, 1, 500, t);
                    },
                    playUIScaleAction: function playUIScaleAction(e, t, n, i, o) {
                        e && (e._scaleTween && (e._scaleTween.clear(), e._scaleTween = null), e.scaleX = t, 
                        e.scaleY = t, e._scaleTween = Laya.Tween.to(e, {
                            scaleX: n,
                            scaleY: n
                        }, i, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                            e._scaleTween = null, "function" == typeof o && o();
                        }), 0, !1, !1));
                    },
                    playOpenPopupAction_FromLeft: function playOpenPopupAction_FromLeft(e, t) {
                        e && (e._leftPopupTween && (e._leftPopupTween.clear(), e._leftPopupTween = null), 
                        e.x = 240, e._leftPopupTween = Laya.Tween.to(e, {
                            x: 360
                        }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                            e._leftPopupTween = null, "function" == typeof t && t();
                        }), 0, !1, !1));
                    },
                    playOpenPopupAction_FromBottom: function playOpenPopupAction_FromBottom(e, t) {
                        e && (e._bottomPopupTween && (e._bottomPopupTween.clear(), e._bottomPopupTween = null), 
                        e.y = Laya.stage.height / 4, e._bottomPopupTween = Laya.Tween.to(e, {
                            y: Laya.stage.height - e.height
                        }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                            e._bottomPopupTween = null, "function" == typeof t && t();
                        }), 0, !1, !1));
                    },
                    layoutItemsInContent: function layoutItemsInContent(e, t, n) {
                        if (e && t && t.length > 0 && "number" == typeof n) {
                            var _i11 = 0;
                            for (var _e41 = 0; _e41 < t.length; _e41++) {
                                _i11 += t[_e41].width * t[_e41].scaleX, 0 !== _e41 && (_i11 += n);
                            }
                            var _o8 = (e.width - _i11) / 2;
                            for (var _e42 = 0; _e42 < t.length; _e42++) {
                                if (0 === _e42) t[_e42].x = _o8 + t[_e42].width * t[_e42].scaleX * (t[_e42].pivotX / t[_e42].width); else {
                                    var _i12 = t[_e42 - 1].x + t[_e42 - 1].width * t[_e42 - 1].scaleX * (1 - t[_e42 - 1].pivotX / t[_e42 - 1].width) + n;
                                    t[_e42].x = _i12 + t[_e42].width * t[_e42].scaleX * (t[_e42].pivotX / t[_e42].width);
                                }
                            }
                        }
                    },
                    refreshFreeWayOfBtn: function refreshFreeWayOfBtn(e) {
                        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "comm/video_icon.png";
                        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "comm/share_icon.png";
                        e && (G_PlatHelper.isTTPlatform() && (n = t), e.getWay || (e._way = G_FreeGetWay.FGW_NONE, 
                        e.getWay = function() {
                            return e._way;
                        }), e.refreshWay || (e.refreshWay = function() {
                            G_FreeGetMgr.getNextFreeGetWay(function(i) {
                                console.log("next free get way: " + i), e._way = i;
                                var o = G_UIHelper.seekNodeByName(e, "icon");
                                o && (i === G_FreeGetWay.FGW_ADV ? o.skin = t : o.skin = n), i === G_FreeGetWay.FGW_NONE ? e.visible = !1 : e.visible = !0;
                            });
                        }), e.doTouch || (e.doTouch = function(t, n, i) {
                            var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
                            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                            G_UIHelper.playBtnTouchAction(e, function() {
                                if (G_SoundMgr.pauseMusic(), G_PlatHelper.isNativePlatform()) {
                                    var _t32 = function _t32() {
                                        G_SoundMgr.resumeMusic(), e.refreshWay(), o && G_PlatHelper.showToast(G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_VIDEO_NOT_READY_YET).word), 
                                        "function" == typeof i && i();
                                    };
                                    G_NativeAdvMgr.isRewardVideoLoaded() ? G_NativeAdvMgr.showRewardVideo(function(e) {
                                        e ? (G_SoundMgr.resumeMusic(), "function" == typeof n && n()) : _t32();
                                    }, _t32) : _t32();
                                } else d.tryFreeToGetAReward({
                                    shareScene: t,
                                    succCb: n,
                                    failCb: i
                                });
                            }, e._originalScale), G_SoundMgr.playSound(G_SoundName.SN_CLICK);
                        }), e._originalScale = e.scaleX, e.refreshWay());
                    },
                    delayShow: function delayShow(e) {
                        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3e3;
                        e && !G_PlatHelper.isOPPOPlatform() ? (e.visible = !1, G_Scheduler.schedule("Delay_Show_Of_" + G_Utils.generateString(32), function() {
                            e.visible = !0;
                        }, !1, t, 0)) : e.visible = !0;
                    },
                    autoMoveWithDefaultConfig: function autoMoveWithDefaultConfig(e, t, n) {
                        var _this16 = this;
                        G_Switch.getMoveMistakeConfig(function(i) {
                            _this16.autoMove(e, 0, i.hold1, i.hold2, i.move, !0, t, n);
                        });
                    },
                    autoMove: function autoMove(e, t, n, i, o, a, r, s) {
                        e && (e._originalPos || (e._originalPos = {
                            x: e.x,
                            y: e.y
                        }), e._moveTween && (e._moveTween.clear(), e._moveTween = null), e._scheduleKey && (G_Scheduler.unschedule(e._scheduleKey), 
                        e._scheduleKey = null), e.visible = !1, e.x = e._originalPos.x + r.x, e.y = e._originalPos.y + r.y, 
                        e._scheduleKey = G_Utils.generateString(32), G_Scheduler.schedule(e._scheduleKey, function() {
                            e._scheduleKey = null, "function" == typeof s && s("hide_finished"), e.visible = !0, 
                            e._scheduleKey = G_Utils.generateString(32), G_Scheduler.schedule(e._scheduleKey, function() {
                                e._scheduleKey = null, "function" == typeof s && s("hold_finished_1"), e._scheduleKey = G_Utils.generateString(32), 
                                G_Scheduler.schedule(e._scheduleKey, function() {
                                    e._scheduleKey = null, "function" == typeof s && s("hold_finished_2"), a ? e._moveTween = Laya.Tween.to(e, {
                                        x: e._originalPos.x,
                                        y: e._originalPos.y
                                    }, o, null, Laya.Handler.create(null, function() {
                                        e._moveTween = null, e.x = e._originalPos.x, e.y = e._originalPos.y, "function" == typeof s && s("move_finished");
                                    }), 0, !1, !1) : (e._scheduleKey = G_Utils.generateString(32), G_Scheduler.schedule(e._scheduleKey, function() {
                                        e._scheduleKey = null, e.x = e._originalPos.x, e.y = e._originalPos.y, "function" == typeof s && s("move_finished");
                                    }, !1, o, 1));
                                }, !1, i, 1);
                            }, !1, n, 1);
                        }, !1, t, 1));
                    },
                    changeSkin: function changeSkin(e, t) {
                        var n = this.seekNodeByName(e, "mesh");
                        n || (n = e), "string" == typeof t && t !== n._texturePath && (n._texturePath = t, 
                        Laya.Texture2D.load(t, Laya.Handler.create(null, function(e) {
                            n.meshRenderer.sharedMaterial.albedoTexture = e;
                        })));
                    },
                    changeColor: function changeColor(e, t, n, i) {
                        var o = this.seekNodeByName(e, "mesh");
                        o || (o = e), o.meshRenderer.sharedMaterial.albedoColor = new Laya.Vector4(t / 255, n / 255, i / 255, 1);
                    },
                    tweenMoveCamera: function tweenMoveCamera(e, t, n, i, o, a, r) {
                        if (e) {
                            if (e._scheduleKey && (G_Scheduler.unschedule(e._scheduleKey), e._scheduleKey = ""), 
                            n) {
                                var _t33 = i.position.clone();
                                !0 === a.posX && (_t33.x = e.transform.localPosition.x), !0 === a.posY && (_t33.y = e.transform.localPosition.y), 
                                !0 === a.posZ && (_t33.z = e.transform.localPosition.z), e.transform.localPosition = _t33, 
                                e.transform.localRotationEuler = i.rotationEuler.clone();
                            } else {
                                var _t34 = i.position.clone();
                                !0 === a.posX && (_t34.x = e.transform.position.x), !0 === a.posY && (_t34.y = e.transform.position.y), 
                                !0 === a.posZ && (_t34.z = e.transform.position.z), e.transform.position = _t34, 
                                e.transform.rotationEuler = i.rotationEuler.clone();
                            }
                            e.fieldOfView = i.fieldOfView, e._scheduleKey = "key_of_tween_move_camera", e._passedTime = 0, 
                            e._totalTime = t, e._isLocal = n, e._start = i, e._end = o, e._disableEffects = a, 
                            e._cb = r, G_Scheduler.schedule(e._scheduleKey, function() {
                                e._passedTime += Laya.timer.delta;
                                var t = e._passedTime / e._totalTime;
                                if (t > 1 && (t = 1), e._isLocal) {
                                    var _n16 = this.getMidVec3(e._start.position, e._end.position, t);
                                    !0 === e._disableEffects.posX && (_n16.x = e.transform.localPosition.x), !0 === e._disableEffects.posY && (_n16.y = e.transform.localPosition.y), 
                                    !0 === e._disableEffects.posZ && (_n16.z = e.transform.localPosition.z), e.transform.localPosition = _n16, 
                                    e.transform.localRotationEuler = this.getMidVec3(e._start.rotationEuler, e._end.rotationEuler, t);
                                } else {
                                    var _n17 = this.getMidVec3(e._start.position, e._end.position, t);
                                    !0 === e._disableEffects.posX && (_n17.x = e.transform.position.x), !0 === e._disableEffects.posY && (_n17.y = e.transform.position.y), 
                                    !0 === e._disableEffects.posZ && (_n17.z = e.transform.position.z), e.transform.position = _n17, 
                                    e.transform.rotationEuler = this.getMidVec3(e._start.rotationEuler, e._end.rotationEuler, t);
                                }
                                if (e.fieldOfView = e._start.fieldOfView + (e._end.fieldOfView - e._start.fieldOfView) * t, 
                                1 === t) {
                                    G_Scheduler.unschedule(e._scheduleKey), e._scheduleKey = "";
                                    var _t35 = e._cb;
                                    e._cb = null, "function" == typeof _t35 && _t35();
                                }
                            }.bind(this), !0);
                        }
                    },
                    getMidVec3: function getMidVec3(e, t, n) {
                        var i = new Laya.Vector3();
                        return i.x = e.x + this._caculateMultiply(t.x - e.x, n), i.y = e.y + this._caculateMultiply(t.y - e.y, n), 
                        i.z = e.z + this._caculateMultiply(t.z - e.z, n), i;
                    },
                    convertToOpenGLPt: function convertToOpenGLPt(e) {
                        var t = new Laya.Vector2(0, 0);
                        if (void 0 === e.x || null === e.x || void 0 === e.y || null === e.y) return t;
                        var n = G_PlatHelper.getSysInfo();
                        return t.x = e.x / Laya.stage.width * n.screenWidth, t.y = e.y / Laya.stage.height * n.screenHeight, 
                        t;
                    },
                    convertToOpenGLSize: function convertToOpenGLSize(e) {
                        var t = new Laya.Size(0, 0);
                        if (void 0 === e.width || null === e.width || void 0 === e.height || null === e.height) return t;
                        var n = G_PlatHelper.getSysInfo();
                        return t._width = e.width / Laya.stage.width * n.screenWidth, t._height = e.height / Laya.stage.height * n.screenHeight, 
                        t;
                    },
                    convertToWorldPt: function convertToWorldPt(e) {
                        var t = new Laya.Vector2(0, 0);
                        if (void 0 === e.x || null === e.x || void 0 === e.y || null === e.y) return t;
                        var n = G_PlatHelper.getSysInfo();
                        return t.x = e.x / n.screenWidth * Laya.stage.width, t.y = e.y / n.screenHeight * Laya.stage.height, 
                        t;
                    },
                    convertToWorldSize: function convertToWorldSize(e) {
                        var t = new Laya.Size(0, 0);
                        if (void 0 === e.width || null === e.width || void 0 === e.height || null === e.height) return t;
                        var n = G_PlatHelper.getSysInfo();
                        return t._width = e.width / n.screenWidth * Laya.stage.width, t._width = e.height / n.screenHeight * Laya.stage.height, 
                        t;
                    },
                    _caculateMultiply: function _caculateMultiply(e, t) {
                        return 1e4 * e * (1e4 * t) / 1e8;
                    },
                    _checkString: function _checkString(e) {
                        return "string" == typeof e && "" !== e;
                    }
                }), e;
            }
        };
    }(), I = null, v = function v(e) {
        var t = e.lastIndexOf("/") + 1, n = e.lastIndexOf(".");
        return e.substring(t, n);
    }, L = function() {
        var e;
        function init() {
            console.log("Init G_GameDB Instance...");
            var e = !1, t = [], n = {}, i = null;
            return {
                isLoaded: function isLoaded() {
                    return e;
                },
                load: function load(i) {
                    I = i, window.db = i, window.BaseConfigIDs = i.BaseConfigIDs, window.UIWordIDs = i.UIWordIDs, 
                    function() {
                        if (G_PlatHelper.getPlat() && G_PlatHelper.getPlat().getFileSystemManager) {
                            (function() {
                                var i = G_PlatHelper.getPlat().getFileSystemManager(), o = G_Dbs.length, a = 0;
                                var _loop = function _loop(_r2) {
                                    var s = G_Dbs[_r2];
                                    i.readFile({
                                        filePath: s,
                                        success: function success(i) {
                                            var r = v(s), l = i.data;
                                            if ("" != r && l && I[r]) {
                                                var _e43 = new I[r].decode(new Uint8Array(l));
                                                _e43 && (n[r] = _e43), a += 1;
                                            }
                                            if (a === o) {
                                                e = !0;
                                                for (var _e44 = 0; _e44 < t.length; _e44++) {
                                                    t[_e44]();
                                                }
                                                t = [];
                                            }
                                        }
                                    });
                                };
                                for (var _r2 in G_Dbs) {
                                    _loop(_r2);
                                }
                            })();
                        } else Laya.loader.create(G_Dbs, Laya.Handler.create(this, function() {
                            for (var _e45 = 0; _e45 < G_Dbs.length; _e45++) {
                                var _t36 = G_Dbs[_e45].url, _i13 = v(_t36), _o9 = Laya.loader.getRes(_t36);
                                if ("" != _i13 && _o9 && I[_i13]) {
                                    var _e46 = new I[_i13].decode(new Uint8Array(_o9));
                                    _e46 && (n[_i13] = _e46);
                                }
                            }
                            e = !0;
                            for (var _e47 = 0; _e47 < t.length; _e47++) {
                                t[_e47]();
                            }
                            t = [];
                        }), null, Laya.Loader.BUFFER);
                    }();
                },
                registerAll: function registerAll(e) {
                    var _this17 = this;
                    if (e) {
                        i = e;
                        var _loop2 = function _loop2(_e48) {
                            var t = i[_e48];
                            if (t && void 0 !== t.key) {
                                if (!0 === t.getFunc) {
                                    _this17["get" + t.key + "ByID"] = function(e) {
                                        return this.getConfigByID("TB" + t.key, e);
                                    }.bind(_this17);
                                }
                                if (!0 === t.getAllFunc) {
                                    _this17["getAll" + t.key + "s"] = function() {
                                        var e = this.getConfigs("TB" + t.key);
                                        return e ? e.list : [];
                                    }.bind(_this17);
                                }
                                if (!0 === t.getCountFunc) {
                                    _this17["getAll" + t.key + "Count"] = function() {
                                        var e = this.getConfigs("TB" + t.key);
                                        return e ? e.list.length : 0;
                                    }.bind(_this17);
                                }
                            }
                        };
                        for (var _e48 = 0; _e48 < i.length; _e48++) {
                            _loop2(_e48);
                        }
                    }
                },
                onLoad: function onLoad(e) {
                    null != e && "function" == typeof e && (this.isLoaded() ? e() : t[t.length] = e);
                },
                addDB: function addDB(e, t) {
                    if (t) {
                        var i = this.getConfigs("TB" + e);
                        if (void 0 === i && (n["TB" + e] = new I["TB" + e](), i = n["TB" + e]), i) i.list.push(t);
                    }
                },
                replaceDB: function replaceDB(e, t, n) {
                    if (n) {
                        var i = this.getConfigs("TB" + e);
                        if (i) for (var o = i.list, a = 0; a < o.length; a++) {
                            var r = o[a];
                            r && r.id === t && (o[a] = n);
                        }
                    }
                },
                printDB: function printDB(e) {
                    if (G_PlatHelper.isWin()) {
                        var t = this.getConfigs("TB" + e);
                        if (t) {
                            var _e49 = t.constructor.encode(t).finish(), _n18 = G_Utils.Uint8Array2HexString(_e49);
                            console.log(_n18);
                        }
                    }
                },
                getConfigByID: function getConfigByID(e, t) {
                    var n = this.getConfigs(e);
                    if (n) for (var i = n.list, o = 0; o < i.length; o++) {
                        var a = i[o];
                        if (a && a.id === t) return a;
                    }
                    return null;
                },
                getConfigs: function getConfigs(e) {
                    return null == e || "" == e ? null : this.isLoaded() ? n[e] : null;
                }
            };
        }
        return {
            getInstance: function getInstance() {
                return e || (e = init()), e;
            }
        };
    }(), P = "storage_key_of_openID_And_SessID";
    var N = /* */ function() {
        function N() {
            _classCallCheck2(this, N);
            console.log("Init G_PlatHelper Instance..."), this._plat = null, this._platType = "None", 
            this._platDesc = "未定义", this._sysInfo = null, this._recogniseSceneIDs = [], this._isModalOnShow = !1, 
            this._isToastOnShow = !1, this._isLoadingOnShow = !1, this._hideAppTime = 0, this._channelID = null;
        }
        _createClass2(N, [ {
            key: "_checkLaunchOptions",
            value: function _checkLaunchOptions(e, t) {
                var n = !1;
                for (var _i14 = 0; _i14 < this._recogniseSceneIDs.length; ++_i14) {
                    var _o10 = this._recogniseSceneIDs[_i14];
                    for (var _i15 = 0; _i15 < _o10.sceneIDs.length; ++_i15) {
                        if (e === _o10.sceneIDs[_i15]) {
                            n = !0, G_Event.dispatchEvent(_o10.eventName, t);
                            break;
                        }
                    }
                }
                G_Event.dispatchEvent(G_EventName.EN_LAUNCH_APP_FROM_EVERYWHERE, e, t), n || G_Event.dispatchEvent(G_EventName.EN_LAUNCH_APP_FROM_UNKNOW, e, t);
            }
        }, {
            key: "init",
            value: function init() {
                if (this._plat) {
                    var e = this;
                    if (this._plat.getLaunchOptionsSync) {
                        var _e50 = this._plat.getLaunchOptionsSync();
                        this._checkLaunchOptions(_e50.scene, _e50.query);
                    }
                    this._plat.onShow && this._plat.onShow(function(t) {
                        G_ServerInfo.reload(function() {
                            0 !== e._hideAppTime ? (G_Event.dispatchEvent(G_EventName.EN_APP_AFTER_ONSHOW, G_ServerInfo.getServerTime() - e._hideAppTime), 
                            e._hideAppTime = 0) : G_Event.dispatchEvent(G_EventName.EN_APP_AFTER_ONSHOW), e._checkLaunchOptions(t.scene, t.query);
                        });
                    }), this._plat.onHide && this._plat.onHide(function(t) {
                        e._hideAppTime = G_ServerInfo.getServerTime(), G_Event.dispatchEvent(G_EventName.EN_APP_BEFORE_ONHIDE);
                    }), this._plat.onMemoryWarning && this._plat.onMemoryWarning(function() {
                        console.warn("On Memory Warning Received..."), G_Reportor && G_Reportor.report(G_ReportEventName.REN_RECEIVED_MEMORY_WARNING);
                    });
                }
            }
        }, {
            key: "getPlat",
            value: function getPlat() {
                return this._plat;
            }
        }, {
            key: "getPlatType",
            value: function getPlatType() {
                return this._platType;
            }
        }, {
            key: "getPlatDesc",
            value: function getPlatDesc() {
                return this._platDesc;
            }
        }, {
            key: "restartApp",
            value: function restartApp() {
                this.exitApp();
            }
        }, {
            key: "exitApp",
            value: function exitApp() {
                this._plat && this._plat.exitMiniProgram && this._plat.exitMiniProgram({
                    fail: function fail() {
                        G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                    }
                });
            }
        }, {
            key: "getLaunchOptions",
            value: function getLaunchOptions() {
                return this._plat && this._plat.getLaunchOptionsSync ? this._plat.getLaunchOptionsSync() : null;
            }
        }, {
            key: "getChannelID",
            value: function getChannelID() {
                if (null === this._channelID) {
                    this._channelID = "";
                    var _e51 = this.getLaunchOptions();
                    if (_e51) for (var _t37 in _e51.query || {}) {
                        if ("chid" === _t37) {
                            this._channelID = _e51.query[_t37].toString();
                            break;
                        }
                    }
                }
                return this._channelID;
            }
        }, {
            key: "isSupportVibratePhone",
            value: function isSupportVibratePhone() {
                return !0;
            }
        }, {
            key: "vibratePhone",
            value: function vibratePhone(e) {
                G_PlayerInfo.isMuteEnable() && (e ? this._plat && this._plat.vibrateLong && this._plat.vibrateLong() : this._plat && this._plat.vibrateShort && this._plat.vibrateShort());
            }
        }, {
            key: "installShortcut",
            value: function installShortcut(e) {}
        }, {
            key: "showMoreGamesModal",
            value: function showMoreGamesModal(e, t, n) {}
        }, {
            key: "startRecord",
            value: function startRecord() {}
        }, {
            key: "pauseRecord",
            value: function pauseRecord() {}
        }, {
            key: "resumeRecord",
            value: function resumeRecord() {}
        }, {
            key: "stopRecord",
            value: function stopRecord() {}
        }, {
            key: "getSavedVideoPath",
            value: function getSavedVideoPath() {
                return "";
            }
        }, {
            key: "showModal",
            value: function showModal(e, t, n, i, o) {
                if (!this._isModalOnShow) if (this._plat && this._plat.showModal && this._checkString(t)) {
                    var _a7 = {
                        content: t,
                        showCancel: n,
                        success: function(e) {
                            this._isModalOnShow = !1, "function" == typeof i && ("boolean" == typeof e ? i(e) : e.confirm ? i(!0) : (e.cancel, 
                            i(!1)));
                        }.bind(this)
                    };
                    this._checkString(e) && (_a7.title = e), o && (o.cancelText && (_a7.cancelText = o.cancelText), 
                    o.cancelColor && (_a7.cancelColor = o.cancelColor), o.confirmText && (_a7.confirmText = o.confirmText), 
                    o.confirmColor && (_a7.confirmColor = o.confirmColor)), this._isModalOnShow = !0, 
                    this._plat.showModal(_a7);
                } else "function" == typeof i && i(!1);
            }
        }, {
            key: "showToast",
            value: function showToast(e, t) {
                if (this._clearToastAndLoading(), this._plat && this._plat.showToast && this._checkString(e)) {
                    var _n19 = {
                        title: e,
                        duration: 2e3,
                        success: function(e) {
                            this._isToastOnShow = !0, G_Scheduler.schedule("Auto_Reset_Toast_State", function() {
                                this._isToastOnShow = !1;
                            }.bind(this), !1, 2e3, 0);
                        }.bind(this)
                    };
                    _n19.icon = t || "none", this._plat.showToast(_n19);
                }
            }
        }, {
            key: "hideToast",
            value: function hideToast() {
                this._isToastOnShow && (this._isToastOnShow = !1, this._plat && this._plat.hideToast && this._plat.hideToast());
            }
        }, {
            key: "showRandomToast",
            value: function showRandomToast(e) {
                if (e) {
                    var _t38 = G_Utils.random(0, e.length - 1);
                    this.showToast(e[_t38]);
                }
            }
        }, {
            key: "showLoading",
            value: function showLoading(e) {
                if (this._clearToastAndLoading(), this._plat && this._plat.showLoading) {
                    var _t39 = {
                        title: e,
                        mask: !0
                    };
                    this._isLoadingOnShow = !0, this._plat.showLoading(_t39);
                } else console.log("show loading: " + e);
            }
        }, {
            key: "hideLoading",
            value: function hideLoading() {
                this._isLoadingOnShow && (this._isLoadingOnShow = !1, this._plat && this._plat.hideLoading && this._plat.hideLoading());
            }
        }, {
            key: "_clearToastAndLoading",
            value: function _clearToastAndLoading() {
                this.hideToast(), this.hideLoading();
            }
        }, {
            key: "getSysInfo",
            value: function getSysInfo() {
                if (null === this._sysInfo) if (this._plat && this._plat.getSystemInfoSync) try {
                    this._sysInfo = G_Utils.deepClone(this._plat.getSystemInfoSync());
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                } else this._sysInfo = {
                    screenHeight: Math.round(Laya.stage.height),
                    screenWidth: Math.round(Laya.stage.width),
                    windowHeight: Math.round(Laya.stage.height),
                    windowWidth: Math.round(Laya.stage.width),
                    statusBarHeight: 0,
                    brand: "microsoft",
                    platform: "window",
                    system: "Window 7",
                    SDKVersion: "0.0.0"
                };
                return this._sysInfo;
            }
        }, {
            key: "getSDKVersion",
            value: function getSDKVersion() {
                var e = this.getSysInfo();
                return e && void 0 !== e.SDKVersion ? e.SDKVersion : "0.0.0";
            }
        }, {
            key: "isIPhoneX",
            value: function isIPhoneX() {
                var e = this.getSysInfo();
                if (e) {
                    if (e.model && -1 !== e.model.indexOf("iPhone X")) return !0;
                    if (e.SDKVersion >= "1.1.0" && Laya.Browser.onIOS && e.screenHeight / e.screenWidth > 2) return !0;
                }
                return !1;
            }
        }, {
            key: "setStorage",
            value: function setStorage(e, t) {
                if (this._checkString(e)) {
                    if (this._plat && this._plat.setStorageSync) try {
                        this._plat.setStorageSync(e, t);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error("PlatHelper.setStorage Fail, No Support This Kind Of Data: ", t);
                    } else Laya.LocalStorage.setItem(e, t);
                } else console.error("PlatHelper.setStorage Fail, Check Input...");
            }
        }, {
            key: "getStorage",
            value: function getStorage(e, t) {
                if (this._checkString(e)) {
                    if (!this._plat || !this._plat.getStorageSync) return Laya.LocalStorage.getItem(e);
                    try {
                        return this._plat.getStorageSync(e);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return void 0 !== t ? t : null;
                    }
                } else console.error("PlatHelper.getStorage Fail, Check Input...");
            }
        }, {
            key: "clearStorage",
            value: function clearStorage(e) {
                if (this._checkString(e)) {
                    if (this._plat && this._plat.removeStorageSync) try {
                        this._plat.removeStorageSync(e);
                    } catch (e) {} else Laya.LocalStorage.removeItem(e);
                } else console.error("PlatHelper.clearStorage Fail, Check Input...");
            }
        }, {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !1;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !1;
            }
        }, {
            key: "autoLogin",
            value: function autoLogin(e) {
                var t = function t(_t40) {
                    "function" == typeof e && e(_t40);
                };
                if (this.canLoginOnline()) {
                    var _e52 = this.getStorage(P);
                    if (_e52 && "" !== _e52) {
                        var _n20 = _e52.split("&&");
                        if (2 == _n20.length) {
                            console.log("Checked Local OpenID And PHP SessID Is Still In Storage...");
                            var _e53 = function() {
                                this.clearStorage(P), t(null);
                            }.bind(this);
                            this._plat.checkSession({
                                success: function success() {
                                    console.log("Remote SessionKey Is Still Vailid...");
                                    var i = _n20[0], o = _n20[1];
                                    G_NetHelper.reqCheckLogin(o, function(n) {
                                        n && 0 === n.code ? (console.log("Remote Login Status Is Still Vailid..."), console.log("current openID: {0}".format(i)), 
                                        console.log("current sessID: {0}".format(o)), G_PlayerInfo.load(i, o, function(e) {
                                            t(e);
                                        })) : _e53();
                                    });
                                },
                                fail: function fail() {
                                    _e53();
                                }
                            });
                        } else t(null);
                    } else t(null);
                } else t(null);
            }
        }, {
            key: "login",
            value: function login(e, t) {
                this._login(function(n, i) {
                    console.log("current openID: {0}".format(n)), console.log("current sessID: {0}".format(i)), 
                    n && i && G_PlayerInfo.load(n, i, function(n) {
                        e && (n.nickname = e.nickname || "", n.sex = e.sex || 1, n.headUrl = e.headUrl || "", 
                        console.log("upload baseInfo to server..."), G_PlayerInfo.save()), "function" == typeof t && t(n);
                    });
                });
            }
        }, {
            key: "_login",
            value: function _login(e) {
                var _this18 = this;
                if (this.canLoginOnline()) this.__login(e); else if (!G_PlatHelper.isNativePlatform() || "vivo" !== G_PlatHelper.getChannel() && "oppo" !== G_PlatHelper.getChannel()) {
                    G_IsAlwaysNewPlayer && (console.log("clear openid and sessid succ..."), this.clearStorage(P));
                    var _t41 = this.getStorage(P);
                    if (_t41 && "" !== _t41) {
                        var _n21 = _t41.split("&&");
                        if (2 == _n21.length) {
                            console.log("Checked Local OpenID And PHP SessID Is Still In Storage...");
                            var _t42 = _n21[0], _i16 = _n21[1];
                            return void ("function" == typeof e && e(_t42, _i16));
                        }
                    }
                    if ("function" == typeof e) {
                        var _t43 = G_OpenID;
                        _t43 && "" !== _t43 || (_t43 = this._generateOpenID());
                        var _n22 = G_SessID;
                        _n22 && "" !== _n22 || (_n22 = this._generateSessID()), this.setStorage(P, _t43 + "&&" + _n22), 
                        e(_t43, _n22);
                    }
                } else G_NativeUnionMgr.login(function(t, n) {
                    console.log("true"), t ? "function" == typeof e && e(n, _this18._generateSessID()) : G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                });
            }
        }, {
            key: "__login",
            value: function __login(e) {
                var t = this;
                this._plat.login({
                    timeout: G_Const.C_TIMEOUT_OF_LOGIN,
                    success: function success(n) {
                        G_NetHelper.reqLogin(t._toGetLoginCode(n), function(n) {
                            if (console.log(n), n && 0 === n.code) {
                                var _i17 = n.data.openId, _o11 = n.data.javaSessionID;
                                t.setStorage(P, _i17 + "&&" + _o11), "function" == typeof e && e(_i17, _o11);
                            } else G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                        });
                    },
                    fail: function fail() {
                        G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                    }
                });
            }
        }, {
            key: "_toGetLoginCode",
            value: function _toGetLoginCode(e) {
                return e.code;
            }
        }, {
            key: "isWINPlatform",
            value: function isWINPlatform() {
                return null === this._plat;
            }
        }, {
            key: "isWXPlatform",
            value: function isWXPlatform() {
                return !(void 0 === window.wx || !Laya.MiniAdpter);
            }
        }, {
            key: "isQQPlatform",
            value: function isQQPlatform() {
                return void 0 !== window.qq;
            }
        }, {
            key: "isOPPOPlatform",
            value: function isOPPOPlatform() {
                return void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("oppo") > -1;
            }
        }, {
            key: "isVIVOPlatform",
            value: function isVIVOPlatform() {
                return void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("vivo") > -1;
            }
        }, {
            key: "isOVPlatform",
            value: function isOVPlatform() {
                return void 0 !== window.qg;
            }
        }, {
            key: "isTTPlatform",
            value: function isTTPlatform() {
                return void 0 !== window.tt;
            }
        }, {
            key: "isQTTPlatform",
            value: function isQTTPlatform() {
                return void 0 !== window.qttGame;
            }
        }, {
            key: "isMZPlatform",
            value: function isMZPlatform() {
                return void 0 !== window.mz && window.mz.getProvider().toLowerCase().indexOf("meizu") > -1;
            }
        }, {
            key: "isNativePlatform",
            value: function isNativePlatform() {
                return void 0 !== window.conch;
            }
        }, {
            key: "isAndroidNativePlatform",
            value: function isAndroidNativePlatform() {
                return void 0 !== window.conch && "Conch-android" === window.conchConfig.getOS();
            }
        }, {
            key: "isIOSNativePlatform",
            value: function isIOSNativePlatform() {
                return void 0 !== window.conch && "Conch-ios" === window.conchConfig.getOS();
            }
        }, {
            key: "isHWPlatform",
            value: function isHWPlatform() {
                return void 0 !== window.hbs;
            }
        }, {
            key: "_generateOpenID",
            value: function _generateOpenID() {
                return G_Utils.generateString(32);
            }
        }, {
            key: "_generateSessID",
            value: function _generateSessID() {
                return G_Utils.generateString(26);
            }
        }, {
            key: "_checkString",
            value: function _checkString(e) {
                return "string" == typeof e && "" !== e;
            }
        } ]);
        return N;
    }();
    var C = /* */ function(_N) {
        _inherits2(C, _N);
        var _super13 = _createSuper2(C);
        function C() {
            var _this19;
            _classCallCheck2(this, C);
            _this19 = _super13.call(this), _this19._isUseLocalModal = !1, _this19._isUseLocalToast = !1, 
            _this19._isUseLocalLoading = !1;
            return _this19;
        }
        _createClass2(C, [ {
            key: "init",
            value: function init() {
                _get2(_getPrototypeOf2(C.prototype), "init", this).call(this), this._isUseLocalModal && (C.prototype.showModal = function(e, t, n, i, o) {
                    var _this20 = this;
                    if (!this._isModalOnShow) if (this._checkString(t)) {
                        var _a8 = {
                            content: t,
                            showCancel: n,
                            cb: function cb(e) {
                                _this20._isModalOnShow = !1, "function" == typeof i && i(e);
                            }
                        };
                        this._checkString(e) && (_a8.title = e), o && (o.cancelText && (_a8.cancelText = o.cancelText), 
                        o.cancelColor && (_a8.cancelColor = o.cancelColor), o.confirmText && (_a8.confirmText = o.confirmText), 
                        o.confirmColor && (_a8.confirmColor = o.confirmColor)), G_Event.dispatchEvent(G_EventName.EN_SHOW_LOCAL_MODAL, _a8);
                    } else "function" == typeof i && i(!1);
                }), this._isUseLocalToast && (C.prototype.showToast = function(e, t) {
                    this._clearToastAndLoading(), console.log("show toast: " + e), G_Event.dispatchEvent(G_EventName.EN_SHOW_LOCAL_TIPS, e);
                }, C.prototype.hideToast = function() {
                    G_Event.dispatchEvent(G_EventName.EN_HIDE_LOCAL_TIPS);
                }), this._isUseLocalLoading && (C.prototype.showLoading = function(e) {
                    this._clearToastAndLoading(), console.log("show loading: " + e), G_Event.dispatchEvent(G_EventName.EN_SHOW_LOCAL_LOADING, e);
                }, C.prototype.hideLoading = function() {
                    G_Event.dispatchEvent(G_EventName.EN_HIDE_LOCAL_LOADING);
                });
            }
        } ]);
        return C;
    }(N);
    var G = /* */ function(_C) {
        _inherits2(G, _C);
        var _super14 = _createSuper2(G);
        function G() {
            var _this21;
            _classCallCheck2(this, G);
            _this21 = _super14.call(this), _this21._platType = "WIN", _this21._platDesc = "Windows小游戏平台", 
            _this21._isUseLocalModal = !0, _this21._isUseLocalToast = !0, _this21._isUseLocalToast = !0;
            return _this21;
        }
        _createClass2(G, [ {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !1;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !1;
            }
        }, {
            key: "isSupportVibratePhone",
            value: function isSupportVibratePhone() {
                return !1;
            }
        } ]);
        return G;
    }(C);
    var T = /* */ function(_C2) {
        _inherits2(T, _C2);
        var _super15 = _createSuper2(T);
        function T() {
            var _this22;
            _classCallCheck2(this, T);
            _this22 = _super15.call(this), _this22._plat = window.conch, _this22._platType = "Native", 
            _this22._platDesc = "原生小游戏平台", _this22._bridge = null, _this22._isUseLocalModal = !0, 
            _this22._isUseLocalToast = !0, _this22._isUseLocalToast = !0;
            return _this22;
        }
        _createClass2(T, [ {
            key: "init",
            value: function init() {
                var _this23 = this;
                _get2(_getPrototypeOf2(T.prototype), "init", this).call(this), this._bridge = PlatformClass.createClass(this._fixClassName("JSBridge")), 
                this._plat.setOnBackPressedFunction(function() {
                    _this23.callStaticMethod("exitApp");
                });
            }
        }, {
            key: "callStaticMethod",
            value: function callStaticMethod(e, t) {
                return this._bridge ? void 0 !== t ? this._bridge.call(this._fixNativeFuncName(e), t) : G_PlatHelper.isIOSNativePlatform() ? this._bridge.call(this._fixNativeFuncName(e), "") : this._bridge.call(this._fixNativeFuncName(e)) : null;
            }
        }, {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !1;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !1;
            }
        }, {
            key: "getChannel",
            value: function getChannel() {
                return G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_NATIVE_MINI_PROGRAM_CHANNEL).str.toLowerCase();
            }
        }, {
            key: "getSysInfo",
            value: function getSysInfo() {
                if (null === this._sysInfo) {
                    var _e54 = this.callStaticMethod("getSysInfo");
                    try {
                        this._sysInfo = JSON.parse(_e54);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                    }
                }
                return this._sysInfo;
            }
        }, {
            key: "vibratePhone",
            value: function vibratePhone(e) {
                G_PlayerInfo.isMuteEnable() && this.callStaticMethod("vibrate", 400);
            }
        }, {
            key: "_fixNativeFuncName",
            value: function _fixNativeFuncName(e) {
                return G_PlatHelper.isIOSNativePlatform() ? e + ":" : e;
            }
        }, {
            key: "_fixClassName",
            value: function _fixClassName(e) {
                return G_PlatHelper.isAndroidNativePlatform() ? "hiillo." + e : e;
            }
        } ]);
        return T;
    }(C);
    var E = /* */ function(_C3) {
        _inherits2(E, _C3);
        var _super16 = _createSuper2(E);
        function E() {
            var _this24;
            _classCallCheck2(this, E);
            _this24 = _super16.call(this), _this24._plat = window.wx, _this24._platType = "WX", 
            _this24._platDesc = "微信小游戏平台", _this24._recogniseSceneIDs.push({
                sceneIDs: [ 1007 ],
                eventName: G_EventName.EN_LAUNCH_APP_FROM_SINGLE_SHARE
            }), _this24._recogniseSceneIDs.push({
                sceneIDs: [ 1008 ],
                eventName: G_EventName.EN_LAUNCH_APP_FROM_GROUP_SHARE
            }), _this24._recogniseSceneIDs.push({
                sceneIDs: [ 1007, 1008 ],
                eventName: G_EventName.EN_LAUNCH_APP_FROM_SHARE
            }), _this24._recogniseSceneIDs.push({
                sceneIDs: [ 1089 ],
                eventName: G_EventName.EN_LAUNCH_APP_FROM_RECENT
            }), _this24._recogniseSceneIDs.push({
                sceneIDs: [ 1038 ],
                eventName: G_EventName.EN_LAUNCH_APP_BACK_FROM_OTHER_APP
            }), _this24._recogniseSceneIDs.push({
                sceneIDs: [ 1104 ],
                eventName: G_EventName.EN_LAUNCH_APP_FROM_FAVOURITE
            });
            return _this24;
        }
        _createClass2(E, [ {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !0;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !0;
            }
        } ]);
        return E;
    }(C);
    var O = /* */ function(_C4) {
        _inherits2(O, _C4);
        var _super17 = _createSuper2(O);
        function O() {
            var _this25;
            _classCallCheck2(this, O);
            _this25 = _super17.call(this), _this25._plat = window.qq, _this25._platType = "QQ", 
            _this25._platDesc = "QQ小游戏平台", _this25._recogniseSceneIDs.push({
                sceneIDs: [ 1007 ],
                eventName: G_EventName.EN_LAUNCH_APP_FROM_SINGLE_SHARE
            }), _this25._recogniseSceneIDs.push({
                sceneIDs: [ 1008 ],
                eventName: G_EventName.EN_LAUNCH_APP_FROM_GROUP_SHARE
            }), _this25._recogniseSceneIDs.push({
                sceneIDs: [ 1007, 1008 ],
                eventName: G_EventName.EN_LAUNCH_APP_FROM_SHARE
            }), _this25._recogniseSceneIDs.push({
                sceneIDs: [ 1038 ],
                eventName: G_EventName.EN_LAUNCH_APP_BACK_FROM_OTHER_APP
            });
            return _this25;
        }
        _createClass2(O, [ {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !0;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !0;
            }
        } ]);
        return O;
    }(C);
    var b = /* */ function(_C5) {
        _inherits2(b, _C5);
        var _super18 = _createSuper2(b);
        function b() {
            var _this26;
            _classCallCheck2(this, b);
            _this26 = _super18.call(this), _this26._plat = window.qg, _this26._platType = "OPPO", 
            _this26._platDesc = "OPPO小游戏平台", _this26._isUseLocalToast = !0;
            return _this26;
        }
        _createClass2(b, [ {
            key: "exitApp",
            value: function exitApp() {
                this._plat && this._plat.exitApplication && this._plat.exitApplication({
                    fail: function fail() {
                        G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                    }
                });
            }
        }, {
            key: "getSDKVersion",
            value: function getSDKVersion() {
                var e = this.getSysInfo();
                return e && void 0 !== e.platformVersion ? e.platformVersion.toString() : "0";
            }
        }, {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !1;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !1;
            }
        }, {
            key: "vibratePhone",
            value: function vibratePhone(e) {
                G_PlayerInfo.isMuteEnable() && (e ? this._plat && this._plat.vibrateLong && this._plat.vibrateLong({
                    success: null,
                    fail: null,
                    complete: null
                }) : this._plat && this._plat.vibrateShort && this._plat.vibrateShort({}));
            }
        }, {
            key: "hideLoading",
            value: function hideLoading() {
                this._isLoadingOnShow && (this._isLoadingOnShow = !1, this._plat && this._plat.hideLoading && this._plat.hideLoading({
                    success: null,
                    fail: null,
                    complete: null
                }));
            }
        }, {
            key: "installShortcut",
            value: function installShortcut(e) {
                var _this27 = this;
                this._plat.hasShortcutInstalled({
                    success: function success(t) {
                        0 == t && _this27._plat.installShortcut({
                            success: function success() {
                                "function" == typeof e && e();
                            }
                        });
                    }
                });
            }
        }, {
            key: "_toGetLoginCode",
            value: function _toGetLoginCode(e) {
                return e.data.token;
            }
        } ]);
        return b;
    }(C);
    var D = /* */ function(_C6) {
        _inherits2(D, _C6);
        var _super19 = _createSuper2(D);
        function D() {
            var _this28;
            _classCallCheck2(this, D);
            _this28 = _super19.call(this), _this28._plat = window.qg, _this28._platType = "VIVO", 
            _this28._platDesc = "VIVO小游戏平台", _this28._isUseLocalToast = !0;
            return _this28;
        }
        _createClass2(D, [ {
            key: "exitApp",
            value: function exitApp() {
                this._plat && this._plat.exitApplication && this._plat.exitApplication();
            }
        }, {
            key: "getSDKVersion",
            value: function getSDKVersion() {
                var e = this.getSysInfo();
                return e && void 0 !== e.platformVersion ? e.platformVersion.toString() : "0";
            }
        }, {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !1;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !1;
            }
        }, {
            key: "showModal",
            value: function showModal(e, t, n, i, o) {
                var _this29 = this;
                if (!this._isModalOnShow) if (this._plat && this._plat.showDialog && this._checkString(t)) {
                    var _a9 = {
                        message: t,
                        buttons: [ {
                            text: "确认"
                        } ],
                        success: function success(e) {
                            _this29._isModalOnShow = !1, "function" == typeof i && (0 === e.index ? i(!0) : 1 === e.index && i(!1));
                        },
                        cancel: function cancel() {
                            _this29._isModalOnShow = !1, "function" == typeof i && i(!1);
                        },
                        fail: function fail() {
                            _this29._isModalOnShow = !1, "function" == typeof i && i(!1);
                        }
                    };
                    n && _a9.buttons.push({
                        text: "取消"
                    }), o && (this._checkString(e) && (_a9.title = e), o.confirmText && (_a9.buttons[0].text = o.confirmText), 
                    o.confirmColor && (_a9.buttons[0].color = o.confirmColor), n && (o.cancelText && (_a9.buttons[1].text = o.cancelText), 
                    o.cancelColor && (_a9.buttons[1].color = o.cancelColor))), this._isModalOnShow = !0, 
                    this._plat.showDialog(_a9);
                } else "function" == typeof i && i(!1);
            }
        }, {
            key: "installShortcut",
            value: function installShortcut(e) {
                var _this30 = this;
                this._plat.hasShortcutInstalled({
                    success: function success(t) {
                        0 == t && _this30._plat.installShortcut({
                            success: function success() {
                                "function" == typeof e && e();
                            }
                        });
                    }
                });
            }
        }, {
            key: "setStorage",
            value: function setStorage(e, t) {
                this._checkString(e) ? Laya.LocalStorage.setItem(e, t) : console.error("PlatHelper.setStorage Fail, Check Input...");
            }
        }, {
            key: "getStorage",
            value: function getStorage(e, t) {
                if (this._checkString(e)) return Laya.LocalStorage.getItem(e);
                console.error("PlatHelper.getStorage Fail, Check Input...");
            }
        }, {
            key: "clearStorage",
            value: function clearStorage(e) {
                this._checkString(e) ? Laya.LocalStorage.removeItem(e) : console.error("PlatHelper.clearStorage Fail, Check Input...");
            }
        } ]);
        return D;
    }(C);
    var M = /* */ function(_C7) {
        _inherits2(M, _C7);
        var _super20 = _createSuper2(M);
        function M() {
            var _this31;
            _classCallCheck2(this, M);
            _this31 = _super20.call(this), _this31._plat = window.mz, _this31._platType = "MeiZu", 
            _this31._platDesc = "MeiZu小游戏平台", _this31._isUseLocalModal = !0, _this31._isUseLocalToast = !0, 
            "undefined" != typeof qg && Object.keys(qg).forEach(function(e) {
                mz.hasOwnProperty(e) || (mz[e] = qg[e]);
            });
            return _this31;
        }
        _createClass2(M, [ {
            key: "exitApp",
            value: function exitApp() {
                this._plat && this._plat.exitGame && this._plat.exitGame();
            }
        }, {
            key: "getSDKVersion",
            value: function getSDKVersion() {
                var e = this.getSysInfo();
                return e && void 0 !== e.platformVersion ? e.platformVersion.toString() : "0";
            }
        }, {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !1;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !1;
            }
        }, {
            key: "vibratePhone",
            value: function vibratePhone(e) {
                G_PlayerInfo.isMuteEnable() && (e ? this._plat && this._plat.vibrateLong && this._plat.vibrateLong({
                    success: null,
                    fail: null,
                    complete: null
                }) : this._plat && this._plat.vibrateShort && this._plat.vibrateShort({
                    success: null,
                    fail: null,
                    complete: null
                }));
            }
        }, {
            key: "setStorage",
            value: function setStorage(e, t) {
                this._checkString(e) ? Laya.LocalStorage.setItem(e, t) : console.error("PlatHelper.setStorage Fail, Check Input...");
            }
        }, {
            key: "getStorage",
            value: function getStorage(e, t) {
                if (this._checkString(e)) return Laya.LocalStorage.getItem(e);
                console.error("PlatHelper.getStorage Fail, Check Input...");
            }
        }, {
            key: "clearStorage",
            value: function clearStorage(e) {
                this._checkString(e) ? Laya.LocalStorage.removeItem(e) : console.error("PlatHelper.clearStorage Fail, Check Input...");
            }
        } ]);
        return M;
    }(C);
    var A = /* */ function(_C8) {
        _inherits2(A, _C8);
        var _super21 = _createSuper2(A);
        function A() {
            var _this32;
            _classCallCheck2(this, A);
            _this32 = _super21.call(this), _this32._plat = window.tt, _this32._platType = "TT", 
            _this32._platDesc = "TT小游戏平台", _this32._onNavigateSuccCb = null, _this32._onNavigateFailCb = null, 
            _this32._onMoreGamesModalCloseCb = null, _this32._videoRecorder = null, _this32._shareVideoPath = "", 
            _this32._isUseLocalToast = !0;
            return _this32;
        }
        _createClass2(A, [ {
            key: "init",
            value: function init() {
                var _this33 = this;
                _get2(_getPrototypeOf2(A.prototype), "init", this).call(this), this._plat && this._plat.onNavigateToMiniProgram && this._plat.onNavigateToMiniProgram(function(e) {
                    0 === e.errCode || 1 === e.errCode ? (console.log("跳转成功", e), G_Reportor.report(G_ReportEventName.REN_NAVIGATE_SUCC_ON_TT_PLAT), 
                    "function" == typeof _this33._onNavigateSuccCb && _this33._onNavigateSuccCb()) : (console.error("跳转失败", e), 
                    "function" == typeof _this33._onNavigateFailCb && _this33._onNavigateFailCb());
                }), this._plat && this._plat.onMoreGamesModalClose && this._plat.onMoreGamesModalClose(function() {
                    _this33._onNavigateSuccCb = null, _this33._onNavigateFailCb = null;
                    var e = _this33._onMoreGamesModalCloseCb;
                    _this33._onMoreGamesModalCloseCb = null, "function" == typeof e && e();
                });
            }
        }, {
            key: "exitApp",
            value: function exitApp() {
                this._plat && this._plat.exitApplication && this._plat.exitApplication();
            }
        }, {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !1;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !1;
            }
        }, {
            key: "showMoreGamesModal",
            value: function showMoreGamesModal(e, t, n) {
                "ios" !== this.getSysInfo().platform ? this._plat.showMoreGamesModal && (this._plat.showMoreGamesModal({
                    appLaunchOptions: []
                }), this._onNavigateSuccCb = t, this._onNavigateFailCb = n, this._onMoreGamesModalCloseCb = e) : this.showToast(G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_NOT_SUPPORT_ON_IOS_PLATFORM).word);
            }
        }, {
            key: "startRecord",
            value: function startRecord() {
                var _this34 = this;
                this._videoRecorder || (this._videoRecorder = this._plat.getGameRecorderManager(), 
                this._videoRecorder.onStart(function(e) {
                    console.log("start record and clear succ..."), _this34._shareVideoPath = "";
                }), this._videoRecorder.onStop(function(e) {
                    console.log("stop record and save succ..."), _this34._videoRecorder.clipVideo({
                        path: e.videoPath,
                        timeRange: [ 25, 0 ],
                        success: function success(e) {
                            _this34._shareVideoPath = e.videoPath;
                        },
                        fail: function fail(e) {
                            console.error("clip video fail: ", e);
                        }
                    });
                })), this._videoRecorder && this._videoRecorder.start({
                    duration: 60
                });
            }
        }, {
            key: "pauseRecord",
            value: function pauseRecord() {
                this._videoRecorder && this._videoRecorder.pause();
            }
        }, {
            key: "resumeRecord",
            value: function resumeRecord() {
                this._videoRecorder && this._videoRecorder.resume();
            }
        }, {
            key: "stopRecord",
            value: function stopRecord() {
                this._videoRecorder && this._videoRecorder.stop();
            }
        }, {
            key: "getSavedVideoPath",
            value: function getSavedVideoPath() {
                return this._shareVideoPath;
            }
        }, {
            key: "_convertStyle",
            value: function _convertStyle(e, t) {
                var n = {
                    textColor: "#000000",
                    textAlign: "center",
                    fontSize: 0,
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: "#000000"
                };
                t && (void 0 !== t.backgroundColor && (n.backgroundColor = t.backgroundColor), void 0 !== t.textColor && (n.textColor = t.textColor), 
                void 0 !== t.textAlign && (n.textAlign = t.textAlign), void 0 !== t.fontSize && (n.fontSize = t.fontSize), 
                void 0 !== t.borderRadius && (n.borderRadius = t.borderRadius), void 0 !== t.borderWidth && (n.borderWidth = t.borderWidth), 
                void 0 !== t.borderColor && (n.borderColor = t.borderColor));
                var i = e.localToGlobal(new Laya.Vector2(e.width / 2, e.height / 2), !0), o = i.x - e.width / 2 * e.scaleX, a = i.y - e.height / 2 * e.scaleY, r = G_UIHelper.convertToOpenGLPt({
                    x: o,
                    y: a
                }), s = G_UIHelper.convertToOpenGLSize({
                    width: e.width * e.scaleX,
                    height: e.height * e.scaleY
                });
                return n.left = r.x, n.top = r.y, n.width = s.width, n.height = s.height, n;
            }
        } ]);
        return A;
    }(C);
    var R = /* */ function(_C9) {
        _inherits2(R, _C9);
        var _super22 = _createSuper2(R);
        function R() {
            var _this35;
            _classCallCheck2(this, R);
            _this35 = _super22.call(this), _this35._plat = window.qttGame, _this35._platType = "QTT", 
            _this35._platDesc = "趣头条小游戏平台", _this35._isUseLocalToast = !0, _this35._isUseLocalModal = !0, 
            _this35._isUseLocalLoading = !0;
            return _this35;
        }
        _createClass2(R, [ {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !1;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !0;
            }
        }, {
            key: "autoLogin",
            value: function autoLogin(e) {
                "function" == typeof e && e(null);
            }
        }, {
            key: "_login",
            value: function _login(e) {
                this.__login(e);
            }
        }, {
            key: "__login",
            value: function __login(e) {
                var _this36 = this;
                var t = this._getLocationParams(), n = {
                    app_id: G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_QTT_MINI_PROGRAM_APP_ID).str,
                    app_key: G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_QTT_MINI_PROGRAM_APP_SECRET).str,
                    platform: t.platform,
                    ticket: t.ticket,
                    time: Date.parse(new Date()) / 1e3
                }, i = [];
                for (var _e55 in n) {
                    i.push(_e55);
                }
                i.sort();
                var o = "";
                i.forEach(function(e) {
                    o += e, o += n[e];
                }), n.sign = hex_md5(o);
                var a = "app_id=" + n.app_id + "&platform=" + n.platform + "&ticket=" + n.ticket + "&time=" + n.time + "&sign=" + n.sign;
                G_HttpHelper.getJson("https://newidea4-gamecenter-backend.1sapp.com/x/open/user/ticket?" + a, function(t, n) {
                    console.log(n), t && n && n.data && n.data.open_id ? "function" == typeof e && e(n.data.open_id, _this36._generateSessID()) : G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                });
            }
        }, {
            key: "isSupportVibratePhone",
            value: function isSupportVibratePhone() {
                return !1;
            }
        }, {
            key: "_getLocationParams",
            value: function _getLocationParams() {
                var e = window.location.search.substring();
                if (e) {
                    var _t44 = (e = e.substring(e.indexOf("?") + 1)).split("&"), _n23 = {};
                    return _t44.forEach(function(e) {
                        var t = e.split("=");
                        2 === t.length && (_n23[t[0]] = t[1]);
                    }), _n23;
                }
                return {};
            }
        } ]);
        return R;
    }(C);
    var B = /* */ function(_C10) {
        _inherits2(B, _C10);
        var _super23 = _createSuper2(B);
        function B() {
            var _this37;
            _classCallCheck2(this, B);
            _this37 = _super23.call(this), _this37._plat = window.hbs, _this37._platType = "HuaWei", 
            _this37._platDesc = "HuaWei小游戏平台", _this37._isUseLocalModal = !0;
            return _this37;
        }
        _createClass2(B, [ {
            key: "exitApp",
            value: function exitApp() {
                this._plat && this._plat.exitApplication && this._plat.exitApplication({
                    success: null,
                    fail: null,
                    complete: null
                });
            }
        }, {
            key: "getSDKVersion",
            value: function getSDKVersion() {
                var e = this.getSysInfo();
                return e && void 0 !== e.version ? e.version.toString() : "0";
            }
        }, {
            key: "canLoginOnline",
            value: function canLoginOnline() {
                return !1;
            }
        }, {
            key: "canSaveOnline",
            value: function canSaveOnline() {
                return !1;
            }
        }, {
            key: "installShortcut",
            value: function installShortcut(e) {
                var _this38 = this;
                this._plat.hasInstalled({
                    success: function success(t) {
                        0 == t && _this38._plat.install({
                            success: function success() {
                                "function" == typeof e && e();
                            }
                        });
                    }
                });
            }
        } ]);
        return B;
    }(C);
    var k = null;
    k = void 0 !== window.qq ? O : void 0 !== window.tt ? A : void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("oppo") > -1 ? b : void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("vivo") > -1 ? D : void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("meizu") > -1 ? M : void 0 !== window.qttGame ? R : void 0 !== window.hbs ? B : void 0 !== window.wx ? E : void 0 !== window.conch ? T : G;
    var U = function U(e) {
        if ("function" == typeof e) {
            var _t45 = Array.prototype.slice.call(arguments);
            return _t45.shift(), e.apply(null, _t45);
        }
        return null;
    }, H = function H(e, t) {
        if (e) if (G_PlatHelper.isWXPlatform()) e.currentTime > 0 && e.seek(0), U(t, e); else {
            var _n24 = function _n24() {
                e.offSeeked(_n24), U(t, e);
            };
            e.currentTime > 0 ? (e.onSeeked(_n24), e.seek(0)) : U(t, e);
        }
    };
    var V = /* */ function() {
        function V() {
            _classCallCheck2(this, V);
            this._isInited = !1, this._nativePlayLoopTimes = {}, this._playingContexts = [], 
            this._backupContexts = [], this._bgAudioContext = null, this._bgMusicUrl = "", this._bgMusicLoopState = !0, 
            this._bgMusicRate = 1, this._bgNativeAudio = null, this._isBgMusicStoped = !1, this._lastBgMusicPos = -1;
        }
        _createClass2(V, [ {
            key: "init",
            value: function init() {
                this._isInited || (this._isInited = !0, this._isSupportAudioContext() && (this._bgAudioContext = this._getAudioContext(), 
                this._bgAudioContext && (this._bgAudioContext._bgSrc = "")));
            }
        }, {
            key: "_isSupportAudioContext",
            value: function _isSupportAudioContext() {
                return !0;
            }
        }, {
            key: "_isSupportNativeUrl",
            value: function _isSupportNativeUrl() {
                return !0;
            }
        }, {
            key: "_getAudioContext",
            value: function _getAudioContext() {
                var e = null;
                return this._isSupportAudioContext() && (this._backupContexts.length > 0 ? (e = this._backupContexts[0], 
                this._backupContexts.splice(0, 1)) : (e = G_PlatHelper.getPlat().createInnerAudioContext()).onError(function(e) {
                    console.log("play error:", e);
                })), this._playingContexts.push(e), e;
            }
        }, {
            key: "_recycleAudioContext",
            value: function _recycleAudioContext(e) {
                var t = this._playingContexts.indexOf(e);
                -1 !== t && this._playingContexts.splice(t, 1), this._backupContexts.push(e);
            }
        }, {
            key: "loadSound",
            value: function loadSound(e, t) {
                if (this.init(), this._checkUrl(e)) {
                    if (Laya.MiniFileMgr && void 0 !== Laya.MiniFileMgr.fakeObj[e] || e.indexOf("http") < 0 && !this._isSupportNativeUrl()) U(t, null); else if (this._isSupportAudioContext()) {
                        var _n25 = this._getAudioContext();
                        if (_n25.src == e) return void H(_n25, t);
                        _n25.src = e, _n25.loop = !1, _n25.autoplay = !1;
                        var _i18 = function _i18() {
                            _n25.offCanplay(_i18), H(_n25, t);
                        };
                        _n25.onCanplay(_i18);
                    } else U(t, null);
                } else U(t, null);
            }
        }, {
            key: "loadMusic",
            value: function loadMusic(e, t) {
                var _this39 = this;
                if (this.init(), this._checkUrl(e)) {
                    if (Laya.MiniFileMgr && void 0 !== Laya.MiniFileMgr.fakeObj[e] || e.indexOf("http") < 0 && !this._isSupportNativeUrl()) U(t, null); else if (this._isSupportAudioContext()) {
                        if (this._bgAudioContext.src == e) return this._bgAudioContext._bgSrc = e, void H(this._bgAudioContext, t);
                        this._bgAudioContext.src = e, this._bgAudioContext._bgSrc = e, this._bgAudioContext.autoplay = !1;
                        var _n26 = function _n26() {
                            _this39._bgAudioContext.offCanplay(_n26), H(_this39._bgAudioContext, t);
                        };
                        this._bgAudioContext.onCanplay(_n26);
                    } else U(t, null);
                } else U(t, null);
            }
        }, {
            key: "playSound",
            value: function playSound(e) {
                var _this40 = this;
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                if (this.init(), this._checkUrl(e)) if (this.stopSound(e), t = t <= 0 ? 99999 : t, 
                Laya.MiniFileMgr && void 0 !== Laya.MiniFileMgr.fakeObj[e] || e.indexOf("http") < 0 && !this._isSupportNativeUrl()) this._playSoundByNative(e, t, n); else if (this._isSupportAudioContext()) {
                    var _i19 = G_Utils.generateString(32);
                    this.loadSound(e, function(o) {
                        if (o) {
                            var _a10 = function _a10() {
                                void 0 !== _this40._nativePlayLoopTimes[e] && _this40._nativePlayLoopTimes[e].identify === _i19 && _this40._nativePlayLoopTimes[e].loops > 1 ? (_this40._nativePlayLoopTimes[e].loops -= 1, 
                                o.seek(0), o.play()) : (void 0 !== _this40._nativePlayLoopTimes[e] && delete _this40._nativePlayLoopTimes[e], 
                                o._endCb = null, o.offEnded(_a10), _this40._recycleAudioContext(o));
                            };
                            t > 1 && (_this40._nativePlayLoopTimes[e] = {
                                loops: t,
                                identify: _i19
                            }), o.loop = !1, o.playbackRate = n, o.seek(0), o.play(), o._endCb = _a10, o.onEnded(_a10);
                        }
                    });
                } else this._playSoundByNative(e, t, n);
            }
        }, {
            key: "_playSoundByNative",
            value: function _playSoundByNative(e) {
                var _this41 = this;
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                var i = G_Utils.generateString(32);
                t > 1 && (this._nativePlayLoopTimes[e] = {
                    loops: t,
                    identify: i
                });
                var o = function o() {
                    Laya.SoundManager.playbackRate = n, Laya.SoundManager.playSound(e, 1, Laya.Handler.create(null, function() {
                        void 0 !== _this41._nativePlayLoopTimes[e] && _this41._nativePlayLoopTimes[e].identify === i && (_this41._nativePlayLoopTimes[e].loops -= 1, 
                        _this41._nativePlayLoopTimes[e].loops > 0 ? o() : delete _this41._nativePlayLoopTimes[e]);
                    }), 0);
                };
                o();
            }
        }, {
            key: "stopSound",
            value: function stopSound(e) {
                if (this._checkUrl(e)) if (Laya.MiniFileMgr && void 0 !== Laya.MiniFileMgr.fakeObj[e] || e.indexOf("http") < 0 && !this._isSupportNativeUrl()) this._stopSoundByNative(e); else if (this._isSupportAudioContext()) {
                    void 0 !== this._nativePlayLoopTimes[e] && delete this._nativePlayLoopTimes[e];
                    for (var _t46 = 0; _t46 < this._playingContexts.length; _t46++) {
                        var _n27 = this._playingContexts[_t46];
                        _n27.src === e && (_n27._endCb && (_n27.offEnded(_n27._endCb), _n27._endCb = null), 
                        _n27.stop(), this._recycleAudioContext(_n27));
                    }
                } else this._stopSoundByNative(e);
            }
        }, {
            key: "_stopSoundByNative",
            value: function _stopSoundByNative(e) {
                Laya.SoundManager.stopSound(e), void 0 !== this._nativePlayLoopTimes[e] && delete this._nativePlayLoopTimes[e];
            }
        }, {
            key: "stopAllSounds",
            value: function stopAllSounds() {
                for (var _e56 in this._nativePlayLoopTimes) {
                    this.stopSound(_e56);
                }
            }
        }, {
            key: "playMusic",
            value: function playMusic(e, t) {
                var _this42 = this;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                this.init(), this._checkUrl(e) && this.stopMusic(function() {
                    if (_this42._isBgMusicStoped = !1, Laya.MiniFileMgr && void 0 !== Laya.MiniFileMgr.fakeObj[e] || -1 === e.indexOf("http") && !_this42._isSupportNativeUrl()) return _this42._playMusicByNative(e, n, i), 
                    void U(t);
                    _this42._isSupportAudioContext() ? _this42.loadMusic(e, function(e) {
                        if (!_this42._isBgMusicStoped && e) {
                            var _o12 = function _o12() {
                                e.offEnded(_o12), _this42._recycleAudioContext(e);
                            };
                            e.loop = n, e.playbackRate = i, e.volume = 1, e.seek(0), e.play(), e.onEnded(_o12), 
                            U(t);
                        }
                    }) : (_this42._playMusicByNative(e, n, i), U(t));
                });
            }
        }, {
            key: "_playMusicByNative",
            value: function _playMusicByNative(e, t) {
                var _this43 = this;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                this._bgMusicUrl = e, this._bgMusicLoopState = t, this._bgMusicRate = n;
                var i = t ? 99999 : 1, o = function o() {
                    Laya.SoundManager.playbackRate = n, _this43._bgNativeAudio = Laya.SoundManager.playMusic(e, 1, Laya.Handler.create(null, function() {
                        i -= 1, "" !== _this43._bgMusicUrl && i > 0 && o();
                    }), 0), _this43._bgNativeAudio && (_this43._bgNativeAudio.volume = 1);
                };
                o();
            }
        }, {
            key: "stopMusic",
            value: function stopMusic(e) {
                var _this44 = this;
                if (this._isBgMusicStoped = !0, this._lastBgMusicPos = -1, "" !== this._bgMusicUrl) this._stopMusicByNative(), 
                U(e); else if (this._bgAudioContext && "" !== this._bgAudioContext._bgSrc) {
                    var _t47 = function _t47() {
                        _this44._bgAudioContext && _this44._bgAudioContext.offStop(_t47), U(e);
                    };
                    0 !== this._bgAudioContext.volume ? (this._bgAudioContext.onStop(_t47), this._bgAudioContext.stop()) : (this._bgAudioContext.stop(), 
                    U(e)), this._bgAudioContext.volume = 0, this._bgAudioContext._bgSrc = "";
                } else U(e);
            }
        }, {
            key: "_stopMusicByNative",
            value: function _stopMusicByNative() {
                this._bgMusicUrl = "", this._bgMusicLoopState = !0, this._bgMusicRate = 1, this._bgNativeAudio && (this._bgNativeAudio.stop(), 
                this._bgNativeAudio.volume = 0, this._bgNativeAudio = null);
            }
        }, {
            key: "resumeMusic",
            value: function resumeMusic() {
                "" !== this._bgMusicUrl ? this._bgNativeAudio ? (this._bgNativeAudio.volume = 1, 
                this._bgNativeAudio.resume()) : this.playMusic(this._bgMusicUrl, null, this._bgMusicLoopState, this._bgMusicRate) : this._bgAudioContext && "" !== this._bgAudioContext._bgSrc && (this._bgAudioContext.volume = 1, 
                -1 != this._lastBgMusicPos && (this._bgAudioContext.seek(this._lastBgMusicPos), 
                this._lastBgMusicPos = -1), this._bgAudioContext.play());
            }
        }, {
            key: "pauseMusic",
            value: function pauseMusic() {
                "" !== this._bgMusicUrl ? this._bgNativeAudio && (this._bgNativeAudio.volume = 0, 
                this._bgNativeAudio.pause()) : this._bgAudioContext && (this._bgAudioContext.pause(), 
                this._lastBgMusicPos = this.getCurMusicTime(), this._bgAudioContext.volume = 0);
            }
        }, {
            key: "getCurMusicTime",
            value: function getCurMusicTime() {
                if ("" !== this._bgMusicUrl) {
                    if (this._bgNativeAudio) return this._bgNativeAudio.position;
                } else if (this._bgAudioContext) return this._bgAudioContext.currentTime;
                return 0;
            }
        }, {
            key: "isMusicUrlValid",
            value: function isMusicUrlValid() {
                return !!("" !== this._bgMusicUrl || this._bgAudioContext && "" !== this._bgAudioContext._bgSrc);
            }
        }, {
            key: "setMusicInfo",
            value: function setMusicInfo(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                this._bgAudioContext ? (this._bgAudioContext._bgSrc = e, this._bgAudioContext.loop = t, 
                this._bgAudioContext.playbackRate = n) : (this._bgMusicUrl = e, this._bgMusicLoopState = t, 
                this._bgMusicRate = n);
            }
        }, {
            key: "_checkUrl",
            value: function _checkUrl(e) {
                return "string" == typeof e && "" !== e;
            }
        } ]);
        return V;
    }();
    var x = function x(e) {
        if ("function" == typeof e) {
            var _t48 = Array.prototype.slice.call(arguments);
            return _t48.shift(), e.apply(null, _t48);
        }
        return null;
    };
    var W = /* */ function(_V) {
        _inherits2(W, _V);
        var _super24 = _createSuper2(W);
        function W() {
            _classCallCheck2(this, W);
            return _super24.call(this);
        }
        _createClass2(W, [ {
            key: "_isSupportAudioContext",
            value: function _isSupportAudioContext() {
                return !G_PlatHelper.isMZPlatform() && !G_PlatHelper.isNativePlatform() && G_PlatHelper.getPlat();
            }
        }, {
            key: "_isSupportNativeUrl",
            value: function _isSupportNativeUrl() {
                return !0;
            }
        }, {
            key: "playMusic",
            value: function playMusic(e, t) {
                var _this45 = this;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                _get2(_getPrototypeOf2(W.prototype), "playMusic", this).call(this, e, function() {
                    G_PlatHelper.getPlat() && d.isWatchingVideoAdv() && (_this45.pauseMusic(), _this45._bgAudioContext._bgSrc = e), 
                    x(t);
                }, n, i);
            }
        } ]);
        return W;
    }(V);
    var F = /* */ function(_V2) {
        _inherits2(F, _V2);
        var _super25 = _createSuper2(F);
        function F() {
            _classCallCheck2(this, F);
            return _super25.call(this);
        }
        _createClass2(F, [ {
            key: "_isSupportAudioContext",
            value: function _isSupportAudioContext() {
                return !0;
            }
        }, {
            key: "_isSupportNativeUrl",
            value: function _isSupportNativeUrl() {
                return !1;
            }
        }, {
            key: "playMusic",
            value: function playMusic(e, t) {
                var _this46 = this;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                _get2(_getPrototypeOf2(F.prototype), "playMusic", this).call(this, e, function() {
                    G_OVAdv.isWatchingVideoAdv() && (_this46.pauseMusic(), _this46._bgAudioContext._bgSrc = e), 
                    x(t);
                }, n, i);
            }
        } ]);
        return F;
    }(V);
    var j = /* */ function(_V3) {
        _inherits2(j, _V3);
        var _super26 = _createSuper2(j);
        function j() {
            _classCallCheck2(this, j);
            return _super26.call(this);
        }
        _createClass2(j, [ {
            key: "_isSupportAudioContext",
            value: function _isSupportAudioContext() {
                return !0;
            }
        }, {
            key: "_isSupportNativeUrl",
            value: function _isSupportNativeUrl() {
                return !1;
            }
        }, {
            key: "_recycleAudioContext",
            value: function _recycleAudioContext(e) {
                var t = this._playingContexts.indexOf(e);
                -1 !== t && this._playingContexts.splice(t, 1), e && e.destroy();
            }
        }, {
            key: "playMusic",
            value: function playMusic(e, t) {
                var _this47 = this;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                _get2(_getPrototypeOf2(j.prototype), "playMusic", this).call(this, e, function() {
                    G_OVAdv.isWatchingVideoAdv() && (_this47.pauseMusic(), _this47._bgAudioContext._bgSrc = e), 
                    x(t);
                }, n, i);
            }
        } ]);
        return j;
    }(V);
    var z = null;
    z = void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("oppo") > -1 ? F : void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("vivo") > -1 ? j : W;
    var K = function K() {
        var e = G_PlatHelper.getStorage("subscribe_forever_day_of_player_{0}".format(G_PlayerInfo.getOpenID()));
        return e && "" !== e ? parseInt(e, 10) : 0;
    }, q = function q(e) {
        G_PlatHelper.setStorage("subscribe_forever_day_of_player_{0}".format(G_PlayerInfo.getOpenID()), e.toString());
    };
    var Y = /* */ function() {
        function Y() {
            _classCallCheck2(this, Y);
            console.log("Init G_Subscriber Instance..."), this._onceTmplIds = {}, this._foreverTmplIds = {};
        }
        _createClass2(Y, [ {
            key: "addOnceTmplId",
            value: function addOnceTmplId(e, t) {
                void 0 === this._onceTmplIds[e] ? this._onceTmplIds[e] = t : console.error("once tmplId: {0} has been added before...".format(e));
            }
        }, {
            key: "addForeverTmplId",
            value: function addForeverTmplId(e, t) {
                void 0 === this._foreverTmplIds[e] ? this._foreverTmplIds[e] = t : console.error("forever tmplId: {0} has been added before...".format(e));
            }
        }, {
            key: "isSupportOnce",
            value: function isSupportOnce() {
                return !1;
            }
        }, {
            key: "isSupportForever",
            value: function isSupportForever() {
                return !1;
            }
        }, {
            key: "reqSubscribeOnceMsgs",
            value: function reqSubscribeOnceMsgs(e, t) {
                var _this48 = this;
                var n = function n(e) {
                    "function" == typeof t && t(e);
                };
                if (!this.isSupportOnce()) return console.warn("reqSubscribeOnceMsgs fail, not support on this plat..."), 
                void n(!1);
                var i = [];
                if ("string" == typeof e && void 0 !== this._onceTmplIds[e] ? i.push(this._onceTmplIds[e]) : Array.isArray(e) && e.forEach(function(e) {
                    void 0 !== _this48._onceTmplIds[e] && i.length < 3 && i.push(_this48._onceTmplIds[e]);
                }), 0 === i.length) return console.error("reqSubscribeOnceMsgs fail, check web config..."), 
                void n(!1);
                this._getSubscribeFunc()(this._fillSubscribeOnceObj(i, n));
            }
        }, {
            key: "reqSubscribeAllForeverMsgs",
            value: function reqSubscribeAllForeverMsgs(e) {
                var t = function t(_t49) {
                    "function" == typeof e && e(_t49);
                };
                return this.isSupportForever() ? G_ServerInfo.getCurServerDayOfYear() === K() ? (console.warn("reqSubscribeAllForeverMsgs fail, has been subscribed today..."), 
                void t(!1)) : void this._getSubscribeFunc()(this._fillSubscribeForeverObj(e)) : (console.warn("reqSubscribeAllForeverMsgs fail, not support on this plat..."), 
                void t(!1));
            }
        }, {
            key: "_fillSubscribeOnceObj",
            value: function _fillSubscribeOnceObj(e, t) {
                var _this49 = this;
                return {
                    tmplIds: e,
                    subscribe: !0,
                    success: function success(n) {
                        var i = !0, o = [];
                        if (e && e.length > 0) for (var _t50 = 0; _t50 < e.length; _t50++) {
                            var _a11 = e[_t50];
                            "reject" === n[_a11] ? i = !1 : "accept" === n[_a11] && o.push(_a11);
                        }
                        o.length > 0 && G_NetHelper.reqNotifyAllOnceSubscribers(G_PlayerInfo.getSessID(), o, function(e) {
                            0 === e.code ? console.log("notify all once subscribers succ...") : console.log("notify all once subscribers fail...");
                        }), "function" == typeof t && t(i);
                    },
                    fail: function fail() {
                        _this49._doCheckSetting(e, function(e) {
                            e ? _this49._doTryOpenSetting(t) : "function" == typeof t && t(!1);
                        });
                    }
                };
            }
        }, {
            key: "_fillSubscribeForeverObj",
            value: function _fillSubscribeForeverObj(e) {
                var _this50 = this;
                return {
                    subscribe: !0,
                    success: function success() {
                        q(G_ServerInfo.getCurServerDayOfYear()), "function" == typeof e && e(!0);
                    },
                    fail: function fail() {
                        _this50._doCheckSetting(null, function(t) {
                            t ? _this50._doTryOpenSetting(e) : "function" == typeof e && e(!1);
                        });
                    }
                };
            }
        }, {
            key: "_getSubscribeFunc",
            value: function _getSubscribeFunc() {
                return null;
            }
        }, {
            key: "_doCheckSetting",
            value: function _doCheckSetting(e, t) {
                "function" == typeof t && t(!1);
            }
        }, {
            key: "_doTryOpenSetting",
            value: function _doTryOpenSetting(e) {
                G_PlatHelper.showModal(null, G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_SUBSCRIBE_FAIL_CONTENT).word, !0, function(t) {
                    t ? G_PlatHelper.getPlat() && G_PlatHelper.getPlat().openSetting && G_PlatHelper.getPlat().openSetting({
                        complete: function complete() {
                            "function" == typeof e && e(!0);
                        }
                    }) : "function" == typeof e && e(!1);
                }, {
                    confirmText: G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_SUBSCRIBE_FAIL_CONFIRM_TEXT).word,
                    cancelText: G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_SUBSCRIBE_FAIL_CANCEL_TEXT).word
                });
            }
        } ]);
        return Y;
    }();
    var X = /* */ function(_Y) {
        _inherits2(X, _Y);
        var _super27 = _createSuper2(X);
        function X() {
            _classCallCheck2(this, X);
            return _super27.call(this);
        }
        _createClass2(X, [ {
            key: "isSupportOnce",
            value: function isSupportOnce() {
                return !1;
            }
        }, {
            key: "isSupportForever",
            value: function isSupportForever() {
                return !1;
            }
        } ]);
        return X;
    }(Y);
    var J = /* */ function(_Y2) {
        _inherits2(J, _Y2);
        var _super28 = _createSuper2(J);
        function J() {
            _classCallCheck2(this, J);
            return _super28.call(this);
        }
        _createClass2(J, [ {
            key: "isSupportOnce",
            value: function isSupportOnce() {
                return !0;
            }
        }, {
            key: "isSupportForever",
            value: function isSupportForever() {
                return !1;
            }
        }, {
            key: "_doCheckSetting",
            value: function _doCheckSetting(e, t) {
                G_PlatHelper.getPlat().getSetting({
                    withSubscriptions: !0,
                    success: function success(n) {
                        if ("function" == typeof t) {
                            if (e && e.length > 0) for (var _i20 = 0; _i20 < e.length; _i20++) {
                                var _o13 = e[_i20];
                                if ("reject" === n.subscriptionsSetting[_o13]) return void t(!0);
                            }
                            t(!1);
                        }
                    }
                });
            }
        }, {
            key: "_getSubscribeFunc",
            value: function _getSubscribeFunc() {
                return G_PlatHelper.getPlat().requestSubscribeMessage;
            }
        } ]);
        return J;
    }(Y);
    var Q = /* */ function(_Y3) {
        _inherits2(Q, _Y3);
        var _super29 = _createSuper2(Q);
        function Q() {
            _classCallCheck2(this, Q);
            return _super29.call(this);
        }
        _createClass2(Q, [ {
            key: "isSupportOnce",
            value: function isSupportOnce() {
                return !0;
            }
        }, {
            key: "isSupportForever",
            value: function isSupportForever() {
                return !0;
            }
        }, {
            key: "_doCheckSetting",
            value: function _doCheckSetting(e, t) {
                G_PlatHelper.getPlat().getSetting({
                    success: function success(e) {
                        "function" == typeof t && (!1 === e.authSetting["setting.appMsgSubscribed"] || !1 === e.authSetting["scope.appMsgSubscribed"] ? t(!0) : t(!1));
                    }
                });
            }
        }, {
            key: "_getSubscribeFunc",
            value: function _getSubscribeFunc() {
                return G_PlatHelper.getPlat().subscribeAppMsg;
            }
        } ]);
        return Q;
    }(Y);
    var Z = null;
    Z = void 0 !== window.qq ? Q : void 0 !== window.wx ? J : X;
    var $ = 1e4, ee = 1e4, te = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_NativeAdvMgr Instance...");
                    var e = !1, t = null, n = null, i = null, o = !1, a = null, r = null, s = null, l = function l(e, t) {
                        var n = "";
                        return e.forEach(function(e) {
                            n += "" === n ? e : "|" + e;
                        }), n;
                    }, c = function c(e) {
                        if ("function" == typeof e) {
                            var _t51 = Array.prototype.slice.call(arguments);
                            return _t51.shift(), e.apply(null, _t51);
                        }
                        return null;
                    };
                    return {
                        preload: function preload() {
                            G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("preloadAllAdvs", JSON.stringify({
                                userID: G_PlayerInfo.getOpenID(),
                                splashIDs: l(G_advConfigs.splashAdUnitIDs),
                                bannerIDs: l(G_advConfigs.bannerAdUnitIDs),
                                videoIDs: l(G_advConfigs.videoAdUnitIDs),
                                interactionIDs: l(G_advConfigs.interstitialAdUnitIDs)
                            }));
                        },
                        getBridge: function getBridge() {
                            return this._bridge;
                        },
                        isSupportBanner: function isSupportBanner() {
                            return G_advConfigs.bannerAdUnitIDs.length > 0;
                        },
                        showBanner: function showBanner() {
                            G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("showBannerAdv");
                        },
                        hideBanner: function hideBanner() {
                            G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("hideBannerAdv");
                        },
                        isSupportRewardVideo: function isSupportRewardVideo() {
                            return G_advConfigs.videoAdUnitIDs.length > 0;
                        },
                        isRewardVideoLoaded: function isRewardVideoLoaded() {
                            return e;
                        },
                        showRewardVideo: function showRewardVideo(t, o) {
                            e ? ("function" == typeof t && (n = t), i = "function" == typeof o ? o : null, G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("showRewardVideoAdv")) : c(o);
                        },
                        _loadNextRewardVideo: function _loadNextRewardVideo(n, o) {
                            e ? c(n) : ("function" == typeof n && (t = n), i = "function" == typeof o ? o : null, 
                            G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("loadRewardVideoAdv"));
                        },
                        onRewardVideoLoaded: function onRewardVideoLoaded() {
                            e = !0;
                            var n = t;
                            t = null, c(n, !1);
                        },
                        onRewardVideoClosed: function onRewardVideoClosed() {
                            e = !1;
                            var t = n;
                            n = null, c(t, !1), this._autoLoadNextRewardVideo();
                        },
                        onRewardVideoFinished: function onRewardVideoFinished() {
                            e = !1;
                            var t = n;
                            n = null, c(t, !0), this._autoLoadNextRewardVideo();
                        },
                        onRewardVideoError: function onRewardVideoError() {
                            e = !1;
                            var t = i;
                            i = null, c(t), this._autoLoadNextRewardVideo();
                        },
                        _autoLoadNextRewardVideo: function _autoLoadNextRewardVideo() {
                            G_Scheduler.schedule("Auto_Load_Next_Reward_Video", function() {
                                e || this._loadNextRewardVideo();
                            }.bind(this), !1, $, 0);
                        },
                        isSupportInteraction: function isSupportInteraction() {
                            return G_advConfigs.interstitialAdUnitIDs.length > 0;
                        },
                        isInteractionLoaded: function isInteractionLoaded() {
                            return o;
                        },
                        showInteraction: function showInteraction(e, t) {
                            o ? ("function" == typeof e && (r = e), s = "function" == typeof t ? t : null, G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("showInteractionAdv")) : c(t);
                        },
                        _loadNextInteraction: function _loadNextInteraction(e, t) {
                            o ? c(e) : ("function" == typeof e && (a = e), s = "function" == typeof t ? t : null, 
                            G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("loadInteractionAdv"));
                        },
                        onInteractionLoaded: function onInteractionLoaded() {
                            o = !0;
                            var e = a;
                            a = null, c(e);
                        },
                        onInteractionClosed: function onInteractionClosed() {
                            o = !1;
                            var e = r;
                            r = null, c(e), this._autoLoadNextInteraction();
                        },
                        onInteractionError: function onInteractionError() {
                            o = !1;
                            var e = s;
                            s = null, c(e), this._autoLoadNextInteraction();
                        },
                        _autoLoadNextInteraction: function _autoLoadNextInteraction() {
                            G_Scheduler.schedule("Auto_Load_Next_Interaction", function() {
                                o || this._loadNextInteraction();
                            }.bind(this), !1, ee, 0);
                        }
                    };
                }()), e;
            }
        };
    }(), ne = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_NativeWXMgr Instance...");
                    var e = !1, t = null, n = null, i = null, o = function o(e) {
                        if ("function" == typeof e) {
                            var _t52 = Array.prototype.slice.call(arguments);
                            return _t52.shift(), e.apply(null, _t52);
                        }
                        return null;
                    };
                    return {
                        init: function init(n) {
                            e ? o(n) : (t = n, G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("initWX", JSON.stringify({
                                appID: G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_NATIVE_MINI_PROGRAM_APP_ID).str,
                                universalLink: G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_NATIVE_MINI_PROGRAM_UNIVERSAL_LINKS).str
                            })));
                        },
                        isWXAppInstalled: function isWXAppInstalled() {
                            if (G_PlatHelper.isNativePlatform()) return G_PlatHelper.callStaticMethod("isWXAppInstalled");
                        },
                        reqLoginToWX: function reqLoginToWX(e) {
                            this.init(function() {
                                n = "function" == typeof e ? e : null, G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("reqLoginToWX");
                            });
                        },
                        reqShareText: function reqShareText(e, t, n) {
                            this.init(function() {
                                i = "function" == typeof n ? n : null;
                                var o = e ? "session" : "timeline";
                                G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("reqShareTextToWX", JSON.stringify({
                                    shareScene: o,
                                    text: t
                                }));
                            });
                        },
                        reqShareImage: function reqShareImage(e, t, n) {
                            this.init(function() {
                                i = "function" == typeof n ? n : null;
                                var o = e ? "session" : "timeline";
                                G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("reqShareImageToWX", JSON.stringify({
                                    shareScene: o,
                                    imgPath: t
                                }));
                            });
                        },
                        reqShareWeb: function reqShareWeb(e, t, n, o, a) {
                            this.init(function() {
                                i = "function" == typeof a ? a : null;
                                var r = e ? "session" : "timeline";
                                G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("reqShareWebToWX", JSON.stringify({
                                    shareScene: r,
                                    title: t,
                                    desc: n,
                                    link: o
                                }));
                            });
                        },
                        onRegisterSucc: function onRegisterSucc() {
                            var n = t;
                            t = null, e = !0, o(n);
                        },
                        onRegisterFail: function onRegisterFail() {
                            t = null, G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                        },
                        onLoginSucc: function onLoginSucc(e) {
                            var t = n;
                            n = null, o(t, !0, e);
                        },
                        onLoginFail: function onLoginFail() {
                            var e = n;
                            n = null, o(e, !1);
                        },
                        onShareSucc: function onShareSucc() {
                            var e = i;
                            i = null, o(e, !0);
                        },
                        onShareFail: function onShareFail() {
                            var e = i;
                            i = null, o(e, !1);
                        }
                    };
                }()), e;
            }
        };
    }(), ie = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_NativeUnionMgr Instance...");
                    var e = null, t = null, n = null, i = function i(e) {
                        if ("function" == typeof e) {
                            var _t53 = Array.prototype.slice.call(arguments);
                            return _t53.shift(), e.apply(null, _t53);
                        }
                        return null;
                    };
                    return {
                        login: function login(n) {
                            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                            e = n, t = i, G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("login");
                        },
                        isUserRealName: function isUserRealName(e) {
                            n = e, G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("isUserRealName");
                        },
                        openPrivacyPolicy: function openPrivacyPolicy() {
                            G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("openPrivacyPolicy");
                        },
                        openServiceAgreement: function openServiceAgreement() {
                            G_PlatHelper.isNativePlatform() && G_PlatHelper.callStaticMethod("openServiceAgreement");
                        },
                        onLoginSucc: function onLoginSucc(t) {
                            var n = e;
                            e = null, i(n, !0, t);
                        },
                        onLoginFail: function onLoginFail() {
                            var t = e;
                            e = null, i(t, !1);
                        },
                        onLoginOut: function onLoginOut() {
                            var e = t;
                            t = null, i(e);
                        },
                        onUserRealName: function onUserRealName() {
                            var e = n;
                            n = null, i(e, !0);
                        },
                        onUserNotRealName: function onUserNotRealName() {
                            var e = n;
                            n = null, i(e, !1);
                        }
                    };
                }()), e;
            }
        };
    }(), oe = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_SDKCfg Instance...");
                    var e = null, t = {
                        max_connect_times: 3,
                        timeout_of_connect: 5e3,
                        max_try_send_times: 3
                    }, n = {
                        timeout_of_request: 1e4,
                        max_try_send_times: 3
                    }, i = null, o = -1, a = -1;
                    return {
                        isOpenDataEnabled: function isOpenDataEnabled() {
                            return !0;
                        },
                        isNetwordEnabled: function isNetwordEnabled() {
                            return !1;
                        },
                        getNetAddr: function getNetAddr() {
                            return this.isNetwordEnabled() ? (e || (e = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_NET_ADDR).str), 
                            e) : "";
                        },
                        getNetCfgs: function getNetCfgs() {
                            return this.isNetwordEnabled() ? t : {};
                        },
                        isHttpsEnabled: function isHttpsEnabled() {
                            return !0;
                        },
                        getHttpsCfgs: function getHttpsCfgs() {
                            return this.isHttpsEnabled() ? n : {};
                        },
                        getBaseWebUrl: function getBaseWebUrl() {
                            return i || (i = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_BASE_WEB_URL).str), 
                            i;
                        },
                        getAppVersion: function getAppVersion() {
                            return -1 === o && (o = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_APP_VERSION).num), 
                            o;
                        },
                        getAssetResVersion: function getAssetResVersion() {
                            return -1 === a && (a = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_ASSET_RES_VERSION).num), 
                            a;
                        }
                    };
                }()), e;
            }
        };
    }(), ae = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_OpenHelper Instance...");
                    var e = !1;
                    return {
                        init: function init() {
                            G_PlatHelper.isQQPlatform() ? e = !0 : G_PlatHelper.isWXPlatform() && (G_PlatHelper.getSDKVersion() >= "1.9.92" ? e = !0 : (e = !1, 
                            G_Event.dispatchEvent(G_EventName.EN_SDK_NOT_SUPPORT, G_PlatHelper.getSDKVersion())));
                        },
                        isSupport: function isSupport() {
                            return e;
                        },
                        saveSelfInfo: function saveSelfInfo(t, n) {
                            if (e && 0 !== Object.keys(t).length && window.wx && window.wx.setUserCloudStorage) {
                                var _e57 = [];
                                for (var _n28 in t) {
                                    _e57.push({
                                        key: _n28,
                                        value: t[_n28].toString()
                                    });
                                }
                                wx.setUserCloudStorage({
                                    KVDataList: _e57,
                                    success: function success() {
                                        "function" == typeof n && n();
                                    }
                                });
                            }
                        },
                        clearSelfInfo: function clearSelfInfo(t, n) {
                            e && window.wx && window.wx.removeUserCloudStorage && wx.removeUserCloudStorage({
                                KVDataList: t,
                                success: function success() {
                                    "function" == typeof n && n();
                                }
                            });
                        },
                        preload: function preload(t) {
                            e && this._doOperation(G_OpenDataOperation.ODO_PRELOAD, t);
                        },
                        showRank: function showRank(t) {
                            e && this._doOperation(G_OpenDataOperation.ODO_SHOW_RANK, t);
                        },
                        _doOperation: function _doOperation(e, t) {
                            if (window.wx && window.wx.getOpenDataContext) {
                                var _n29 = window.wx.getOpenDataContext(), _i21 = {
                                    operation: e
                                };
                                null != t && (_i21.params = JSON.stringify(t)), console.log("post message!!!"), 
                                console.log(_i21), _n29.postMessage(_i21);
                            }
                        }
                    };
                }()).init(), e;
            }
        };
    }(), re = 65529, se = 26333, le = 256, ce = 65535;
    var he = /* */ function() {
        function he() {
            _classCallCheck2(this, he);
            this._cmdID = 0, this._msgLen = 0;
        }
        _createClass2(he, [ {
            key: "init",
            value: function init(e, t) {
                return !(!this._setCmdID(e) || !this._setBodyLen(t));
            }
        }, {
            key: "getCmdID",
            value: function getCmdID() {
                return this._cmdID;
            }
        }, {
            key: "encode",
            value: function encode() {
                var e = [];
                return e.push(Math.floor(se / le)), e.push(se % le), e.push(Math.floor(this._cmdID / le)), 
                e.push(this._cmdID % le), e.push(Math.floor(this._msgLen / le)), e.push(this._msgLen % le), 
                e;
            }
        }, {
            key: "_setCmdID",
            value: function _setCmdID(e) {
                return e >= 0 && e <= ce && (this._cmdID = e, !0);
            }
        }, {
            key: "_setBodyLen",
            value: function _setBodyLen(e) {
                return e >= 0 && e <= re && (this._msgLen = e, !0);
            }
        } ]);
        return he;
    }();
    he.prototype.create = function(e, t) {
        var n = new he();
        if (n.init(e, t)) return n;
    }, he.prototype.decode = function(e) {
        if (void 0 !== e && e.byteLength >= 6) {
            var _t54 = new Uint8Array(e, 0, 6);
            if (_t54[0] * le + _t54[1] === se) {
                var _e58 = _t54[2] * le + _t54[3], _n30 = _t54[4] * le + _t54[5];
                return he.create(_e58, _n30);
            }
        }
    };
    var de = /* */ function() {
        function de() {
            _classCallCheck2(this, de);
            this._head = void 0, this._msg = void 0;
        }
        _createClass2(de, [ {
            key: "init",
            value: function init(e, t) {
                return void 0 !== t && (this._head = he.create(e, t.length), void 0 !== this._head) && (this._msg = t, 
                !0);
            }
        }, {
            key: "setHead",
            value: function setHead(e) {
                this._head = e;
            }
        }, {
            key: "setMsg",
            value: function setMsg(e) {
                this._msg = e;
            }
        }, {
            key: "getCmdID",
            value: function getCmdID() {
                return null != this._head ? this._head.getCmdID() : 0;
            }
        }, {
            key: "getMsg",
            value: function getMsg() {
                return this._msg;
            }
        }, {
            key: "encode",
            value: function encode() {
                var e = this._head.encode();
                for (var _t55 = 0; _t55 < this._msg.length; _t55++) {
                    e.push(this._msg[_t55]);
                }
                return new Uint8Array(e).buffer;
            }
        } ]);
        return de;
    }();
    de.prototype.create = function(e, t) {
        var n = new de();
        if (n.init(e, t)) return n;
    }, de.prototype.decode = function(e) {
        var t = he.decode(e);
        if (void 0 !== t) {
            var _n31 = new Uint8Array(e, 6);
            return de.create(t.getCmdID(), _n31);
        }
    };
    var ue = /* */ function() {
        function ue() {
            _classCallCheck2(this, ue);
            this._ws = void 0, this._addr = "", this.onConnectOpen = void 0, this.onConnectClose = void 0, 
            this.onConnectError = void 0, this.onGotMessage = void 0;
        }
        _createClass2(ue, [ {
            key: "connect",
            value: function connect(e) {
                !function(e) {
                    return !(void 0 === e || !e.startsWith("ws://") && !e.startsWith("wss://"));
                }(e) ? console.log(String.format("Invalid Addr: {0}", e)) : (this._clear(), this._addr = e, 
                this._doConnect());
            }
        }, {
            key: "close",
            value: function close() {
                void 0 !== this._ws && this._ws.close();
            }
        }, {
            key: "send",
            value: function send(e) {
                this.isConnected() ? this._ws.send(e) : console.log("Can Not Send Any Data Before Connect.");
            }
        }, {
            key: "isConnected",
            value: function isConnected() {
                return !(!window.WebSocket || void 0 === this._ws) && this._ws.readyState === WebSocket.OPEN;
            }
        }, {
            key: "_doConnect",
            value: function _doConnect() {
                var e = this;
                window.WebSocket ? (console.log("Start Connect: {0}".format(this._addr)), this._ws = new WebSocket(this._addr), 
                this._ws.onopen = function(t) {
                    e._ws.readyState === WebSocket.OPEN && (console.log("Connect Open..."), e._ws.binaryType = "arraybuffer", 
                    e._doConnectOpenCb());
                }, this._ws.onmessage = function(t) {
                    console.log("Got Message..."), e._doGotMessageCb(t.data);
                }, this._ws.onerror = function(t) {
                    console.error("Connect Error..."), e._ws.readyState === WebSocket.OPEN && e._doConnectErrorCb();
                }, this._ws.onclose = function(t) {
                    if (console.log("Connect Close..."), void 0 !== e._ws) {
                        e._ws = void 0;
                        var _t56 = e.onConnectClose;
                        e._clear(), e._doConnectCloseCb(_t56);
                    }
                }) : console.log("Do Not Support On Current Platform.");
            }
        }, {
            key: "_clear",
            value: function _clear() {
                console.log("Reset Connect Environment..."), this._addr = "", this.onConnectOpen = void 0, 
                this.onConnectClose = void 0, this.onConnectError = void 0, this.onGotMessage = void 0;
            }
        }, {
            key: "_doConnectOpenCb",
            value: function _doConnectOpenCb() {
                "function" == typeof this.onConnectOpen ? this.onConnectOpen() : console.log("Do Not Register Open Connect Callback.");
            }
        }, {
            key: "_doConnectCloseCb",
            value: function _doConnectCloseCb(e) {
                "function" == typeof e ? e() : console.log("Do Not Register Close Connect Callback.");
            }
        }, {
            key: "_doConnectErrorCb",
            value: function _doConnectErrorCb() {
                "function" == typeof this.onConnectError ? this.onConnectError() : console.log("Do Not Register Connect Error Callback.");
            }
        }, {
            key: "_doGotMessageCb",
            value: function _doGotMessageCb(e) {
                "function" == typeof this.onGotMessage ? this.onGotMessage(e) : console.log("Do Not Register Got Message Callback.");
            }
        } ]);
        return ue;
    }();
    var _e = "Schedule_Of_WSHelper", fe = "Schedule_Of_Connect_Timeout", ye = "close_timeout_connectin_on_next_frame", pe = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_WSHelper Instance...");
                    var e = {}, t = void 0, n = [], i = [];
                    return {
                        registerAll: function registerAll(e) {
                            for (var t = 0; t < e.length; t++) {
                                this.register(e[t].cmdID, e[t].reqClassName, e[t].rspClassName);
                            }
                        },
                        register: function register(t, n, i) {
                            e[t] = {
                                cmdID: t,
                                reqClassName: n,
                                rspClassName: i
                            }, this._schedule();
                        },
                        send: function send(e, n, i, o) {
                            var a = this._makeMsgInfo(e, n, i, o);
                            this._addIntoUnsendList(a), void 0 === t && this._doConnect();
                        },
                        _doSend: function _doSend(e) {
                            if (this._canRetainIntoSentList(e.cmdID)) {
                                var _n32 = this._makeReqBuf(e.cmdID, e.content);
                                if (void 0 !== _n32) {
                                    var _i22 = de.create(e.cmdID, _n32);
                                    if (void 0 !== _i22) return t.send(_i22.encode()), void this._retainIntoSentList(e);
                                }
                            }
                            e.doErrCallback();
                        },
                        _isReadyToSend: function _isReadyToSend() {
                            return !(void 0 === t || !t.isConnected());
                        },
                        _doConnect: function _doConnect() {
                            var e = this;
                            (t = new ue()).connect(G_SDKCfg.getNetAddr()), this._addTryConnectTimes(), t.onConnectOpen = function() {
                                console.log("Is Ready To Send..."), e._resetTryConnectTimes();
                            }, t.onConnectClose = function() {
                                if (e._connect = void 0, e._sentMsgInfos.length > 0) {
                                    e._releaseAllFromSendList();
                                    for (var _t57 = e._sentMsgInfos.length - 1; _t57 >= 0; _t57--) {
                                        var _n33 = e._sentMsgInfos[_t57];
                                        _n33.sendCount >= G_SDKCfg.getNetCfgs().max_try_send_times ? (e._sentMsgInfos.splice(_t57, 1), 
                                        _n33.doErrCallback()) : e._reSendMsgInfos.push(_n33);
                                    }
                                }
                                if (e._tryConnectTimes < G_SDKCfg.getNetCfgs().max_connect_times) e._doConnect(); else {
                                    if (e._unSendMsgInfos.length > 0) {
                                        for (var _t58 = 0; _t58 < e._unSendMsgInfos.length; _t58++) {
                                            e._unSendMsgInfos[_t58].doErrCallback();
                                        }
                                        e._unSendMsgInfos.splice(0, e._unSendMsgInfos.length);
                                    }
                                    if (e._reSendMsgInfos.length > 0) {
                                        for (var _t59 = 0; _t59 < e._reSendMsgInfos.length; _t59++) {
                                            e._reSendMsgInfos[_t59].doErrCallback();
                                        }
                                        e._reSendMsgInfos.splice(0, e._reSendMsgInfos.length);
                                    }
                                }
                            }, t.onConnectError = function() {
                                if (e._sentMsgInfos.length > 0) {
                                    e._releaseAllFromSendList();
                                    for (var _t60 = e._sentMsgInfos.length - 1; _t60 >= 0; _t60--) {
                                        var _n34 = e._sentMsgInfos[_t60];
                                        _n34.sendCount >= G_SDKCfg.getNetCfgs().max_try_send_times ? (e._sentMsgInfos.splice(_t60, 1), 
                                        _n34.doErrCallback()) : e._doSend(_n34);
                                    }
                                }
                            }, t.onGotMessage = function(t) {
                                if (e._sentMsgInfos.length > 0) {
                                    var _n35 = de.decode(t);
                                    if (void 0 !== _n35) {
                                        var _t61 = e._getFromSentList(_n35.getCmdID()), _i23 = e._makeRspMsg(_n35.getCmdID(), _n35.getMsg());
                                        void 0 !== _i23 ? _t61.doCallback(_i23.toJSON()) : _t61.doErrCallback(), e._removeFromSentList(_n35.getCmdID());
                                    }
                                }
                            };
                        },
                        _makeMsgInfo: function _makeMsgInfo(e, t, n, i) {
                            return void 0 !== n && "function" != typeof n && (n = void 0, console.log("Can Not Support Callback Of CmdID: {0}".format(e.toString()))), 
                            void 0 !== i && "function" != typeof i && (i = void 0, console.log("Can Not Support Error Callback Of CmdID: {0}".format(e.toString()))), 
                            {
                                cmdID: e,
                                content: t,
                                cb: n,
                                errCb: i,
                                sendCount: 0,
                                isSending: !1,
                                doCallback: function doCallback() {
                                    if ("function" == typeof this.cb) {
                                        var _e59 = Array.prototype.slice.call(arguments);
                                        this.cb.apply(null, _e59);
                                    }
                                },
                                doErrCallback: function doErrCallback() {
                                    if ("function" == typeof this.errCb) {
                                        var _e60 = Array.prototype.slice.call(arguments);
                                        this.errCb.apply(null, _e60);
                                    }
                                },
                                markSendState: function markSendState() {
                                    this.sendCount += 1, this.isSending = !0;
                                },
                                markUnsendState: function markUnsendState() {
                                    this.isSending = !1;
                                }
                            };
                        },
                        _makeReqMsg: function _makeReqMsg(t, n) {
                            if (e.hasOwnProperty(t)) {
                                var _i24 = e[t].reqClassName;
                                if ("" !== _i24 && db.hasOwnProperty(_i24)) return db[_i24].create(n);
                            }
                        },
                        _makeReqBuf: function _makeReqBuf(t, n) {
                            var i = this._makeReqMsg(t, n);
                            if (void 0 !== i) {
                                var _n36 = e[t].reqClassName;
                                return db[_n36].encode(i).finish();
                            }
                        },
                        _makeRspMsg: function _makeRspMsg(t, n) {
                            if (e.hasOwnProperty(t)) {
                                var _i25 = e[t].rspClassName;
                                if ("" !== _i25 && db.hasOwnProperty(_i25)) return db[_i25].decode(n);
                            }
                        },
                        _addIntoUnsendList: function _addIntoUnsendList(e) {
                            void 0 !== e && (n.push(e), this._schedule());
                        },
                        _getFromUnsendList: function _getFromUnsendList(e) {
                            var t = void 0;
                            return n.length > 0 && (t = n[0], e && n.splice(0, 1)), 0 == n.length && this._unschedule(), 
                            t;
                        },
                        _retainIntoSentList: function _retainIntoSentList(e) {
                            var t = this._getFromSentList(e.cmdID);
                            void 0 === t && (i.push(e), t = e), t.markSendState();
                        },
                        _releaseAllFromSendList: function _releaseAllFromSendList() {
                            for (var _e61 = 0; _e61 < i.length; _e61++) {
                                i[_e61].markUnsendState();
                            }
                        },
                        _removeFromSentList: function _removeFromSentList(e) {
                            for (var _t62 = 0; _t62 < i.length; _t62++) {
                                i[_t62].cmdID === e && (i[_t62].markUnsendState(), i.splice(_t62, 1));
                            }
                        },
                        _canRetainIntoSentList: function _canRetainIntoSentList(e) {
                            return this._getRetainCountIntoSendList(e) < G_SDKCfg.getNetCfgs().max_try_send_times;
                        },
                        _getRetainCountIntoSendList: function _getRetainCountIntoSendList(e) {
                            var t = this._getFromSentList(e);
                            return void 0 !== t ? t.sendCount : 0;
                        },
                        _getFromSentList: function _getFromSentList(e) {
                            for (var _t63 = 0; _t63 < i.length; _t63++) {
                                if (i[_t63].cmdID === e) return i[_t63];
                            }
                        },
                        _update: function _update() {
                            if (this._isReadyToSend()) {
                                if (_resendMsgInfos.length > 0) {
                                    for (var _e63 = 0; _e63 < _resendMsgInfos.length; _e63++) {
                                        this._doSend(_resendMsgInfos[_e63]);
                                    }
                                    _resendMsgInfos.splice(0, _resendMsgInfos.length);
                                }
                                var _e62 = this._getFromUnsendList();
                                void 0 !== _e62 && 0 === this._getRetainCountIntoSendList(_e62.cmdID) && (this._getFromUnsendList(!0), 
                                this._doSend(_e62));
                            }
                        },
                        _schedule: function _schedule() {
                            this._isScheduled() || G_Scheduler.schedule(_e, function() {
                                this._update();
                            }.bind(this), !0);
                        },
                        _isScheduled: function _isScheduled() {
                            return G_Scheduler.isScheduled(_e);
                        },
                        _unschedule: function _unschedule() {
                            G_Scheduler.unschedule(_e);
                        },
                        _addTryConnectTimes: function _addTryConnectTimes() {
                            this._scheduleConnectTimeout();
                        },
                        _resetTryConnectTimes: function _resetTryConnectTimes() {
                            this._unscheduleConnectTimeout();
                        },
                        _connectTimeout: function _connectTimeout() {
                            G_Scheduler.schedule(ye, function() {
                                void 0 !== this._connect && this._connect.close();
                            }.bind(this), !0, 0, 0);
                        },
                        _scheduleConnectTimeout: function _scheduleConnectTimeout() {
                            this._unscheduleConnectTimeout(), G_Scheduler.schedule(fe, function() {
                                this._connectTimeout();
                            }.bind(this), !1, G_SDKCfg.getNetCfgs().timeout_of_connect, 0);
                        },
                        _unscheduleConnectTimeout: function _unscheduleConnectTimeout() {
                            G_Scheduler.unschedule(fe);
                        }
                    };
                }()), e;
            }
        };
    }(), ge = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_HttpHelper Instance...");
                    var e = null;
                    return {
                        registerGetServerTimeFunc: function registerGetServerTimeFunc(t) {
                            "function" == typeof t && (e = t);
                        },
                        _getServerTime: function _getServerTime() {
                            return e ? e() : Math.round(new Date() / 1e3);
                        },
                        getJson: function getJson(e, t) {
                            this._doJsonRequest("GET", e, null, null, t);
                        },
                        sendJson: function sendJson(e, t, n, i) {
                            this._doJsonRequest("POST", e, t, n, i);
                        },
                        sendForm: function sendForm(e, t, n, i) {
                            this._doFormRequest("POST", e, t, n, i);
                        },
                        _doJsonRequest: function _doJsonRequest(e, t, n, i, o) {
                            var a = this._createRequest(e, t, o);
                            try {
                                if (i) {
                                    if (a.setRequestHeader("content-type", "application/json"), "object" == _typeof2(n)) for (var _e64 in n) {
                                        a.setRequestHeader(_e64, n[_e64]);
                                    }
                                    a.send(JSON.stringify(i));
                                } else a.send(null);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                console.error(e), "function" == typeof o && o(!1, "未知错误");
                            }
                        },
                        _doFormRequest: function _doFormRequest(e, t, n, i, o) {
                            var a = this._createRequest(e, t, o);
                            try {
                                if (i) {
                                    if (a.setRequestHeader("content-type", "application/x-www-form-urlencoded"), "object" == _typeof2(n)) for (var _e66 in n) {
                                        a.setRequestHeader(_e66, n[_e66]);
                                    }
                                    var _e65 = null, _t64 = [];
                                    for (var _e67 in i) {
                                        _t64.push(encodeURIComponent(_e67) + "=" + encodeURIComponent(i[_e67]));
                                    }
                                    _t64.length > 0 && (_e65 = _t64.join("&").replace(/%20/g, "+")), a.send(_e65);
                                } else a.send(null);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                console.error(e), "function" == typeof o && o(!1, "未知错误");
                            }
                        },
                        _createRequest: function _createRequest(e, t, n) {
                            return this._createBaseRequest(e, t, function(e, t) {
                                "function" == typeof n && (void 0 === e ? n(!1, "返回数据格式错误") : "json" === t ? n(!0, JSON.parse(e)) : n(!1, "返回数据解析错误"));
                            });
                        },
                        sendProto: function sendProto(e, t, n, i) {
                            if (void 0 !== n && void 0 !== n.constructor) {
                                var _o14 = this._createProtoDataRequest("POST", e, i);
                                if (void 0 !== _o14) {
                                    if (_o14.setRequestHeader("content-type", "application/json"), "object" == _typeof2(t)) for (var _e69 in t) {
                                        _o14.setRequestHeader(_e69, t[_e69]);
                                    }
                                    var _e68 = new Object(), _a12 = n.constructor.encode(n).finish(), _r3 = G_Utils.Uint8Array2HexString(_a12);
                                    _e68.data = _r3;
                                    try {
                                        _o14.send(JSON.stringify(_e68));
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        console.error(e), "function" == typeof i && i(!1, "请求数据错误");
                                    }
                                } else "function" == typeof i && i(!1, "未知错误");
                            }
                        },
                        getProto: function getProto(e, t) {
                            var n = this._createProtoDataRequest("GET", e, t);
                            if (void 0 !== n) try {
                                n.send(null);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                console.error(e), "function" == typeof t && t(!1, "请求数据错误");
                            } else "function" == typeof t && t(!1, "未知错误");
                        },
                        _createProtoDataRequest: function _createProtoDataRequest(e, t, n) {
                            var i = this;
                            return this._createBaseRequest(e, t, function(e, t) {
                                "function" == typeof n && (void 0 === e ? n(!1, "未知错误") : "json" === t ? i._checkProtoResponse(JSON.parse(e), function(e, t) {
                                    n(!!e, t);
                                }) : n(!1, "返回数据格式错误"));
                            });
                        },
                        _createBaseRequest: function _createBaseRequest(e, t, n) {
                            if ("GET" === e || "POST" === e) {
                                if (void 0 !== t && "" !== t) {
                                    var i = new Laya.HttpRequest()._http;
                                    return -1 == t.indexOf("?") && (t = "{0}?timestamp={1}".format(t, this._getServerTime().toString())), 
                                    i.open(e, t, !0), console.log("req url: {0}".format(t)), i.onload = function() {
                                        if ("function" == typeof n) if (4 === i.readyState) {
                                            if (i.status >= 200 && i.status < 300) {
                                                if ("arraybuffer" === i.getResponseHeader("content-type")) n(i.response, "arraybuffer"); else if ("application/json" === i.getResponseHeader("content-type")) n(i.responseText, "json"); else {
                                                    var _e70 = !1;
                                                    try {
                                                        JSON.parse(i.responseText), _e70 = !0, n(i.responseText, "json");
                                                    } catch (t) {
                                                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                                        console.error(t), _e70 || n(i.responseText, "text");
                                                    }
                                                }
                                            } else n();
                                        } else n();
                                    }, i.timeout = G_SDKCfg.getHttpsCfgs().timeout_of_request, i.ontimeout = function(e) {
                                        "function" == typeof n && n();
                                    }, i.onerror = function(e) {
                                        console.error(e), "function" == typeof n && n();
                                    }, i;
                                }
                                console.error("Http Err: url Is Not Right, Url: {0}".format(t));
                            } else console.error("Http Err: Only Support GET or POST Way of Request, Way: {0}".format(e));
                        },
                        _checkProtoResponse: function _checkProtoResponse(e, t) {
                            if ("function" == typeof t) if (void 0 !== e.data) {
                                var _n37 = e.data, _i26 = G_Utils.HexString2Uint8Array(_n37), _o15 = new db.ResponseClient.decode(_i26);
                                1 == _o15.ret ? t(!0, _o15) : t(!1, G_GameDB.getNetErrorByID(_o15.ret).word);
                            } else t(!1, "返回数据格式错误");
                        }
                    };
                }()), e;
            }
        };
    }(), me = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_NetHelper Instance...");
                    var e = {}, t = null, n = "", i = null, o = [];
                    return {
                        init: function init() {
                            if (G_PlatHelper.getPlat() && G_PlatHelper.getPlat().onNetworkStatusChange) {
                                G_PlatHelper.getPlat().onNetworkStatusChange(function(e) {
                                    var t = i;
                                    i = e.networkType, e.isConnected || (i = "none"), "none" === i ? G_Event.dispatchEvent(G_EventName.EN_NET_CONNECTION_LOST) : "none" === t && G_Event.dispatchEvent(G_EventName.EN_NET_CONNECTION_RECOVER);
                                });
                                var e = function e() {
                                    for (var _e71 = 0; _e71 < o.length; _e71++) {
                                        o[_e71](i);
                                    }
                                    o = [];
                                };
                                G_PlatHelper.getPlat().getNetworkType && G_PlatHelper.getPlat().getNetworkType({
                                    success: function success(t) {
                                        i = t.networkType, e();
                                    },
                                    fail: function fail(t) {
                                        i = "none", e();
                                    }
                                });
                            } else i = "wifi";
                        },
                        getNetType: function getNetType(e) {
                            "function" == typeof e && (null !== i ? e(i) : o.push(e));
                        },
                        isConnected: function isConnected(e) {
                            "function" == typeof e && (null !== i ? e("none" !== i) : o.push(function(t) {
                                e("none" !== t);
                            }));
                        },
                        registerBaseUrl: function registerBaseUrl(t, n) {
                            this._checkString(n) || 0 === n.indexOf("https://") || 0 === n.indexOf("http://") ? (console.log("Register Base Url Succ!"), 
                            e[t] = n) : console.error("Register Base Url Fail, Check Input!");
                        },
                        registerOpenID: function registerOpenID(e) {
                            this._checkString(e) || console.error("Register OpenID Fail, Check Input!"), console.log("Register OpenID Succ!"), 
                            t = e;
                        },
                        _getTag: function _getTag() {
                            return "" === n && (n = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_SHOT_NAME).str), 
                            n;
                        },
                        _makeUrl: function _makeUrl(t, n) {
                            return void 0 !== e[t] ? e[t] + n : "";
                        },
                        sendJsonOrForm: function sendJsonOrForm(e, t, n, i, o) {
                            var a = this;
                            this.isConnected(function(r) {
                                r ? a._doRequest(a._makeObj(e, t, n, i, o)) : "function" == typeof o && o(null);
                            });
                        },
                        sendProto: function sendProto(e, t, n, i) {
                            var o = this;
                            this.isConnected(function(a) {
                                a ? o._doRequest(o._makeObj("sendProto", e, t, n, i)) : "function" == typeof i && i(null);
                            });
                        },
                        reqLogin: function reqLogin(e, t) {
                            var n = {
                                code: e
                            };
                            G_PlatHelper.isQQPlatform() ? (n.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_QQ_MINI_PROGRAM_APP_ID).str, 
                            this.sendJsonOrForm("sendForm", this._getTag(), "/qq/login", n, t)) : G_PlatHelper.isTTPlatform() ? (n.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_TT_MINI_PROGRAM_APP_ID).str, 
                            this.sendJsonOrForm("sendForm", this._getTag(), "/tt/login", n, t)) : (n.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_MINI_PROGRAM_APP_ID).str, 
                            this.sendJsonOrForm("sendForm", this._getTag(), "/wx/login", n, t));
                        },
                        reqCheckLogin: function reqCheckLogin(e, t) {
                            var n = {
                                JavasessionId: e
                            };
                            this.sendJsonOrForm("sendForm", this._getTag(), "/wx/checkLogin", n, t);
                        },
                        reqLoadPlayerInfo: function reqLoadPlayerInfo(e, t) {
                            var n = {
                                JavasessionId: e
                            };
                            this.sendJsonOrForm("sendForm", this._getTag(), "/wx/getWxUserInfo", n, t);
                        },
                        reqSavePlayerInfo: function reqSavePlayerInfo(e, t, n) {
                            var i = {
                                JavasessionId: e,
                                selfStore: t
                            };
                            this.sendJsonOrForm("sendForm", this._getTag(), "/wx/setWxUserInfo", i, n);
                        },
                        reqLoadPlayerInfo_WithOpenID: function reqLoadPlayerInfo_WithOpenID(e, t) {
                            var n = {
                                openId: e
                            };
                            this.sendJsonOrForm("sendForm", this._getTag(), "/pip/getUserInfo", n, t);
                        },
                        reqSavePlayerInfo_WithOpenID: function reqSavePlayerInfo_WithOpenID(e, t, n) {
                            var i = {
                                openId: e,
                                selfStore: t
                            };
                            this.sendJsonOrForm("sendForm", this._getTag(), "/pip/setUserInfo", i, n);
                        },
                        reqGetServerTime: function reqGetServerTime(e) {
                            this.sendJsonOrForm("sendForm", this._getTag(), "/wx/getTime", null, e);
                        },
                        reqGetWebConfig: function reqGetWebConfig(e) {
                            var t = {};
                            G_PlatHelper.isQQPlatform() ? t.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_QQ_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isTTPlatform() ? t.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_TT_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isOPPOPlatform() ? t.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_OPPO_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isVIVOPlatform() ? t.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_VIVO_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isQTTPlatform() ? t.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_QTT_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isMZPlatform() ? t.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_MZ_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isHWPlatform() ? t.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_HW_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isNativePlatform() ? t.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_NATIVE_MINI_PROGRAM_APP_ID).str : t.app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_MINI_PROGRAM_APP_ID).str, 
                            this.sendJsonOrForm("sendForm", this._getTag(), "/pip/earnGameCfg", t, e);
                        },
                        reqDepositMoney: function reqDepositMoney(e, t, n, i) {
                            var o = {
                                JavasessionId: e,
                                money: n
                            }, a = {
                                depositType: t
                            };
                            o.opts = JSON.stringify(a), this.sendJsonOrForm("sendForm", this._getTag(), "/pip/depositMoney", o, i);
                        },
                        reqWithdrawMoney: function reqWithdrawMoney(e, t, n, i, o) {
                            var a = {
                                JavasessionId: e,
                                money: t
                            }, r = {
                                advTimesOfToday: n,
                                totalAdvTimes: i
                            };
                            a.opts = JSON.stringify(r), a.sign = hex_md5(e + hex_md5("money={0}&key=withdrawMoney&money={1}&opts={2}".format(t.toString(), t.toString(), a.opts))), 
                            this.sendJsonOrForm("sendForm", this._getTag(), "/pip/withdrawMoney", a, o);
                        },
                        reqWithdrawEverydayMoney: function reqWithdrawEverydayMoney(e, t, n, i, o, a) {
                            var r = {
                                JavasessionId: e,
                                money: t
                            }, s = {
                                advTimesOfToday: n,
                                totalAdvTimes: i,
                                recordDayOfEverydayMoney: o
                            };
                            r.opts = JSON.stringify(s), r.sign = hex_md5(e + hex_md5("money={0}&key=withdrawEverydayMoney&money={1}&opts={2}".format(t.toString(), t.toString(), r.opts))), 
                            this.sendJsonOrForm("sendForm", this._getTag(), "/pip/withdrawEverydayMoney", r, a);
                        },
                        reqReportMyVideoRankInfos: function reqReportMyVideoRankInfos(e, t) {
                            var n = {
                                opts: JSON.stringify(e)
                            };
                            this.sendJsonOrForm("sendForm", this._getTag(), "/pip/rankingReport", n, t);
                        },
                        reqAllVideoRankInfos: function reqAllVideoRankInfos(e) {
                            this.sendJsonOrForm("sendForm", this._getTag(), "/pip/rankingSort", {
                                order_field: "digg",
                                order_type: "desc"
                            }, e);
                        },
                        reqNotifyAllOnceSubscribers: function reqNotifyAllOnceSubscribers(e, t, n) {
                            var i = {
                                JavasessionId: e,
                                tmplIds: JSON.stringify(t)
                            };
                            this.sendJsonOrForm("sendForm", this._getTag(), "/gmsgcfg/pushBsis", i, n);
                        },
                        _makeObj: function _makeObj(e, t, n, i, o) {
                            return {
                                way: e,
                                key: t,
                                path: n,
                                data: i,
                                cb: o,
                                try_times: 0
                            };
                        },
                        _doRequest: function _doRequest(e) {
                            if (e) {
                                var t = this;
                                var _n38 = function _n38(n, i) {
                                    if (n) {
                                        if ("function" == typeof e.cb) {
                                            var _t65 = e.cb;
                                            e.cb = null, _t65(i);
                                        }
                                    } else if (console.log("Request {0} Fail, Reason: {1}".format(e.path, i)), e.try_times >= G_SDKCfg.getHttpsCfgs().max_try_send_times) {
                                        if ("function" == typeof e.cb) {
                                            var _t66 = e.cb;
                                            e.cb = null, _t66(null);
                                        }
                                    } else t._doRequest(e);
                                };
                                e.try_times += 1;
                                var _i27 = {};
                                G_PlatHelper.isQQPlatform() ? _i27.appId = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_QQ_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isTTPlatform() ? _i27.appId = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_TT_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isOPPOPlatform() ? _i27.appId = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_OPPO_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isVIVOPlatform() ? _i27.appId = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_VIVO_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isQTTPlatform() ? _i27.appId = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_QTT_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isMZPlatform() ? _i27.appId = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_MZ_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isHWPlatform() ? _i27.appId = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_HW_MINI_PROGRAM_APP_ID).str : G_PlatHelper.isNativePlatform() ? _i27.appId = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_NATIVE_MINI_PROGRAM_APP_ID).str : _i27.appId = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_MINI_PROGRAM_APP_ID).str, 
                                "sendJson" === e.way ? G_HttpHelper.sendJson(this._makeUrl(e.key, e.path), _i27, e.data, _n38) : "sendForm" === e.way ? G_HttpHelper.sendForm(this._makeUrl(e.key, e.path), _i27, e.data, _n38) : "sendProto" === e.way ? G_HttpHelper.sendProto(this._makeUrl(e.key, e.path), _i27, e.data, _n38) : (console.error("Do Not Support This Kind Of Request Right Now, Way: {0}".format(e.way)), 
                                _n38(!1, null));
                            }
                        },
                        _checkString: function _checkString(e) {
                            return "string" == typeof e && "" !== e;
                        },
                        _makeRequestProto: function _makeRequestProto(e) {
                            var n = new db.RequestServer();
                            return n ? (n.reqID = e, t && (n.openID = t), n) : null;
                        }
                    };
                }()).init(), e;
            }
        };
    }(), we = {};
    we.init = function() {
        console.log("开始初始化 QYSDK..."), window.G_Scheduler = g.getInstance(), window.G_Event = m.getInstance(), 
        window.G_Utils = w.getInstance(), window.G_UIHelper = S.getInstance(), window.G_PlatHelper = new k(), 
        G_PlatHelper.init(), console.log("当前平台为：" + G_PlatHelper.getPlatDesc()), window.G_WXHelper = G_PlatHelper, 
        window.G_AudioHelper = new z(), window.G_GameDB = L.getInstance(), G_GameDB.onLoad(function() {
            console.log("GameDB 初始化完成..."), window.G_SDKCfg = oe.getInstance(), G_SDKCfg.isOpenDataEnabled() && (window.G_OpenHelper = ae.getInstance()), 
            G_SDKCfg.isNetwordEnabled() && (window.G_WSHelper = pe.getInstance()), G_SDKCfg.isHttpsEnabled() && (window.G_HttpHelper = ge.getInstance()), 
            window.G_NetHelper = me.getInstance();
            var e = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_HTTP_ADDR_OF_SERVER).str.split("||");
            G_NetHelper.registerBaseUrl(e[0], e[1]), window.G_Subscriber = new Z(), window.G_NativeAdvMgr = te.getInstance(), 
            window.G_NativeWXMgr = ne.getInstance(), window.G_NativeUnionMgr = ie.getInstance();
        });
    }, console.log("开始预先初始化 QYSDK..."), p.init();
    var Se = {
        init: function init() {
            var e = {
                EN_FIRST_OPEN_MAIN_SCENE: "EN_FIRST_OPEN_MAIN_SCENE",
                EN_FIRST_START_GAME: "EN_FIRST_START_GAME",
                EN_SHOW_BANNER_AD: "EN_SHOW_BANNER_AD",
                EN_HIDE_BANNER_AD: "EN_HIDE_BANNER_AD",
                EN_MOVE_BANNER_AD: "EN_MOVE_BANNER_AD",
                EN_SHOW_INSERT_AD: "EN_SHOW_INSERT_AD",
                EN_SHOW_OWN_INSERT_AD: "EN_SHOW_OWN_INSERT_AD",
                EN_REFRESH_VIDEO_AD: "EN_REFRESH_VIDEO_AD"
            };
            for (var _t67 in e) {
                void 0 === G_EventName[_t67] ? G_EventName[_t67] = e[_t67] : console.error("Event Name: {0} Conflicted, It's Used By SDK...".format(_t67));
            }
            var t = {};
            for (var _e72 in t) {
                void 0 === G_NotPropagationEventName[_e72] ? G_NotPropagationEventName[_e72] = t[_e72] : console.error("Event Name: {0} Conflicted, It's Used By SDK...".format(_e72));
            }
            window.G_FreeGetWay = {
                FGW_NONE: "none",
                FGW_SHARE: "share",
                FGW_ADV: "adv"
            };
            var n = {
                REN_NAVIGATE_SUCC_ON_TT_PLAT: "navigate_succ_on_tt_plat"
            };
            for (var _e73 in n) {
                void 0 === G_ReportEventName[_e73] ? G_ReportEventName[_e73] = n[_e73] : console.error("Report Name: {0} Conflicted, It's Used By SDK...".format(_e73));
            }
            [ "res/conf/db/TBBaseConfig.txt", "res/conf/db/TBUIWord.txt", "res/conf/db/TBNetError.txt" ].forEach(function(e) {
                G_Dbs.push(e);
            });
            window.G_GameDBConfigs = [ {
                key: "BaseConfig",
                getFunc: !0,
                getAllFunc: !0,
                getCountFunc: !1
            }, {
                key: "UIWord",
                getFunc: !0,
                getAllFunc: !0,
                getCountFunc: !1
            }, {
                key: "NetError",
                getFunc: !0,
                getAllFunc: !0,
                getCountFunc: !1
            } ];
            window.G_advConfigs = {
                splashAdUnitIDs: null,
                bannerAdUnitIDs: null,
                videoAdUnitIDs: null,
                interstitialAdUnitIDs: null
            };
            window.G_PreDownloadAssets = [];
            window.G_PreloadAssets = [];
            window.G_SwitchName = {
                SN_IS_PUBLISHING: "is_publishing",
                SN_COMMIT_VERSION: "commitVersion"
            };
            window.G_ShareScene = {
                SS_SYSTEM_MENU: "SystemMenu",
                SS_SHARE_APP: "ShareApp",
                SS_CUSTOMER_SERVER: "CustomerServer"
            };
            window.G_SoundName = {
                SN_CLICK: "res/sounds/click.mp3"
            }, window.G_BaseUrlPath = "", window.G_AppNativefiles = [ "res/atlas/loading", "res/conf/", "ad/" ], 
            window.G_IsAllowLoginOffline = !0, window.G_IsUseOwnInsertAd = !1, void 0 !== window.qg && (G_IsUseOwnInsertAd = !0);
        }
    }, Ie = {
        init: function init() {
            Se.init();
            var e = {
                EN_COIN_CHANGED: "EN_COIN_CHANGED",
                EN_LACK_OF_COIN: "EN_LACK_OF_COIN"
            };
            for (var _t68 in e) {
                void 0 === G_EventName[_t68] ? G_EventName[_t68] = e[_t68] : console.error("Event Name: {0} Conflicted, It's Used By SDK...".format(_t68));
            }
            var t = {};
            for (var _e74 in t) {
                void 0 === G_NotPropagationEventName[_e74] ? G_NotPropagationEventName[_e74] = t[_e74] : console.error("Event Name: {0} Conflicted, It's Used By SDK...".format(_e74));
            }
            var n = {};
            for (var _e75 in n) {
                void 0 === G_ReportEventName[_e75] ? G_ReportEventName[_e75] = n[_e75] : console.error("Report Name: {0} Conflicted, It's Used By SDK...".format(_e75));
            }
            [].forEach(function(e) {
                G_Dbs.push(e);
            });
            [].forEach(function(e) {
                G_GameDBConfigs.push(e);
            });
            [ "res/scene/LayaScene_mainScene/Conventional/mainScene.ls", "res/scene/LayaScene_wujian/Conventional/man.lh", "res/scene/LayaScene_wujian/Conventional/wuMan.lh", "res/scene/LayaScene_wujian/Conventional/zhua1.lh", "res/scene/LayaScene_wujian/Conventional/zhua2.lh", "res/scene/LayaScene_wujian/Conventional/zhua3.lh", "res/scene/LayaScene_wujian/Conventional/zhua4.lh", "res/scene/LayaScene_wujian/Conventional/zhua5.lh", "res/scene/LayaScene_wujian/Conventional/zhua6.lh", "res/scene/LayaScene_allLevel/Conventional/changjing1.lh", "res/scene/LayaScene_allLevel/Conventional/changjing2.lh", "res/scene/LayaScene_allLevel/Conventional/changjing3.lh", "res/scene/LayaScene_wujian/Conventional/matong.lh", "res/scene/LayaScene_wujian/Conventional/penzai1.lh", "res/scene/LayaScene_wujian/Conventional/penzai2.lh", "res/scene/LayaScene_wujian/Conventional/yizi.lh", "res/scene/LayaScene_wujian/Conventional/yizi1.lh", "res/scene/LayaScene_wujian/Conventional/yizi2.lh", "res/scene/LayaScene_wujian/Conventional/yizi3.lh", "res/scene/LayaScene_wujian/Conventional/yizi4.lh", "res/scene/LayaScene_wujian/Conventional/yizi5.lh", "res/scene/LayaScene_wujian/Conventional/zhuozi.lh", "res/scene/LayaScene_wujian/Conventional/lajitong2.lh", "res/scene/LayaScene_wujian/Conventional/lajitong1.lh", "res/scene/LayaScene_wujian/Conventional/guizi.lh", "res/scene/LayaScene_wujian/Conventional/matong1.lh", "res/scene/LayaScene_wujian/Conventional/waterCooler.lh", "res/scene/LayaScene_wujian/Conventional/gui.lh", "res/scene/LayaScene_wujian/Conventional/gangqing.lh", "res/scene/LayaScene_wujian/Conventional/lideng.lh", "res/scene/LayaScene_wujian/Conventional/canzhuo01.lh", "res/scene/LayaScene_wujian/Conventional/canzhuo02.lh", "res/scene/LayaScene_wujian/Conventional/canjia.lh", "res/name/1.png", "res/name/2.png", "res/name/3.png", "res/name/4.png", "res/name/5.png", "res/name/6.png", "res/name/7.png", "res/name/8.png", "res/name/9.png", "res/name/10.png", "res/name/11.png", "res/name/12.png", "res/name/13.png" ].forEach(function(e) {
                G_PreloadAssets.push(e);
            });
            var i = {};
            for (var _e76 in i) {
                void 0 === G_SwitchName[_e76] ? G_SwitchName[_e76] = i[_e76] : console.error("Switch Name: {0} Conflicted, It's Used By SDK...".format(_e76));
            }
            var o = {};
            for (var _e77 in o) {
                void 0 === G_ShareScene[_e77] ? G_ShareScene[_e77] = o[_e77] : console.error("Share Name: {0} Conflicted, It's Used By SDK...".format(_e77));
            }
            var a = {};
            for (var _e78 in a) {
                void 0 === G_SoundName[_e78] ? G_SoundName[_e78] = a[_e78] : console.error("Sound Name: {0} Conflicted, It's Used By SDK...".format(_e78));
            }
            G_BaseUrlPath = "";
            [].forEach(function(e) {
                G_AppNativefiles.push(e);
            }), G_IsAllowLoginOffline = !1, G_IsUseOwnInsertAd = !1, G_LoginBtnPath = "resources/***.png", 
            G_IsAlwaysNewPlayer = !0, G_OpenID = null, G_SessID = null, G_Nickname = "", G_Sex = 0, 
            G_HeadUrl = "", void 0 === window.hbs && void 0 === window.wx && void 0 === window.qq && void 0 === window.qg && void 0 === window.tt || (G_IsAlwaysNewPlayer = !1, 
            G_OpenID = null, G_SessID = null, G_Nickname = "", G_Sex = 0, G_HeadUrl = ""), (void 0 !== window.hbs || void 0 !== window.qg && -1 === window.qg.getProvider().toLowerCase().indexOf("meizu")) && (G_IsUseOwnInsertAd = !0);
        }
    };
    var ve = /* */ function() {
        function ve() {
            _classCallCheck2(this, ve);
            this._cfgs = null, this._initedCbs = {}, this._isAdvStateNormal = null, this._isExportAdvEnabled = null, 
            console.log("Init G_Switch Instance...");
        }
        _createClass2(ve, [ {
            key: "__add",
            value: function __add(e, t) {
                this._cfgs || (this._cfgs = {}), void 0 === this._cfgs[e] ? this._cfgs[e] = t : console.error("G_Switch.addCfg: key: {0} has registered before...".format(e));
            }
        }, {
            key: "_add",
            value: function _add(e) {
                if (e) for (var _t69 in e) {
                    this.__add(_t69, e[_t69]);
                }
            }
        }, {
            key: "_checkString",
            value: function _checkString(e) {
                return "string" == typeof e && "" !== e;
            }
        }, {
            key: "_getCfgByKey",
            value: function _getCfgByKey(e, t) {
                "function" == typeof t && (this._checkString(e) || t(!1, ""), this._cfgs ? void 0 !== this._cfgs[e] ? t(!0, this._cfgs[e]) : t(!1, "") : this._initedCbs[e] = t);
            }
        }, {
            key: "addCfgs",
            value: function addCfgs(e) {
                this._add(e);
            }
        }, {
            key: "addCfg",
            value: function addCfg(e, t) {
                this.__add(e, t);
            }
        }, {
            key: "inited",
            value: function inited() {
                for (var _e79 in this._initedCbs) {
                    this._initedCbs[_e79](!0, this._cfgs[_e79]);
                }
                this._initedCbs = {}, "function" == typeof this.onInited && this.onInited();
            }
        }, {
            key: "getCommitVersion",
            value: function getCommitVersion(e) {
                "function" == typeof e && this._getCfgByKey(G_SwitchName.SN_COMMIT_VERSION, function(t, n) {
                    e(t ? parseInt(n, 10) : 0);
                });
            }
        }, {
            key: "isPublishing",
            value: function isPublishing(e) {
                "function" == typeof e && this._getCfgByKey(G_SwitchName.SN_IS_PUBLISHING, function(t, n) {
                    e(!!t && 1 === parseInt(n, 10));
                });
            }
        }, {
            key: "getConfigByKey",
            value: function getConfigByKey(e) {
                return this._cfgs && void 0 !== this._cfgs[e] ? this._cfgs[e] : null;
            }
        } ]);
        return ve;
    }();
    window.G_Switch = new (/* */ function(_ve) {
        _inherits2(_class2, _ve);
        var _super30 = _createSuper2(_class2);
        function _class2() {
            _classCallCheck2(this, _class2);
            return _super30.call(this);
        }
        _createClass2(_class2, [ {
            key: "onInited",
            value: function onInited() {}
        } ]);
        return _class2;
    }(ve))();
    var Le = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (console.log("Init G_FreeGetMgr Instance..."), e = {
                    getNextFreeGetWay: function getNextFreeGetWay(e) {
                        "function" == typeof e && (G_PlatHelper.isNativePlatform() ? e(G_FreeGetWay.FGW_ADV) : d.getNextFreeGetWay({
                            cb: e
                        }));
                    }
                }), e;
            }
        };
    }();
    window.G_FreeGetMgr = Le.getInstance();
    var Pe = 6, Ne = !1, Ce = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_NodePoolMgr Instance...");
                    var e = {}, t = {
                        count: 0
                    };
                    return {
                        preload: function preload(t, n) {
                            for (var _n39 = t.length - 1; _n39 >= 0; _n39--) {
                                void 0 !== e[t[_n39]] && t.splice(_n39, 1);
                            }
                            t.length > 0 ? this._preloadAll(t, n) : "function" == typeof n && n();
                        },
                        getNode: function getNode(t) {
                            var n = e[t];
                            if (n) {
                                if (n.backups.length > 0) return n.backups.shift();
                                {
                                    var _e80 = Laya.Sprite3D.instantiate(n.origin, null, !1);
                                    return _e80._asset = t, _e80;
                                }
                            }
                            return null;
                        },
                        clear: function clear(e) {
                            var _this51 = this;
                            if ("string" == typeof e) {
                                var _t70 = e;
                                this._doClear(_t70);
                            } else Array.isArray(e) && e.forEach(function(e) {
                                _this51._doClear(e);
                            });
                        },
                        clearAll: function clearAll() {
                            var _this52 = this;
                            Object.keys(e).forEach(function(e) {
                                _this52._doClear(e);
                            });
                        },
                        _doClear: function _doClear(t) {
                            var n = e[t];
                            n && (n.backups.length > 0 && (n.backups.forEach(function(e) {
                                e.destroy();
                            }), n.backups = []), Ne || (n.origin.destroy(), n.origin = null), delete e[t]);
                        },
                        recycleNode: function recycleNode(t) {
                            if (t.parent) return void console.error("Can Not Recycle The Node Which Its Parent Is Not Null...");
                            if (!t._asset) return void console.error("Can Not Recycle The Node Which Its Not Created By This Pool...");
                            var n = e[t._asset];
                            n && n.backups.push(t);
                        },
                        canRecycle: function canRecycle(e) {
                            return !(!e || !e._asset);
                        },
                        _preloadAll: function _preloadAll(e, n) {
                            var _this53 = this;
                            if (e.length > 0) {
                                var _i28 = e.length, _o16 = 0, _a13 = function _a13(t) {
                                    (_o16 += 1) === _i28 ? "function" == typeof n && n() : e.length > 0 && _r4();
                                }, _r4 = function _r4() {
                                    for (;e.length > 0 && t.count < Pe; ) {
                                        var _n40 = e.shift();
                                        void 0 !== t[_n40] ? t[_n40].cbs.push(_a13) : (t[_n40] = {
                                            path: _n40,
                                            cbs: []
                                        }, t.count += 1, _this53._preloadOne(_n40, function(e) {
                                            var n = t[e];
                                            n.cbs.length > 0 && n.cbs.forEach(function(t) {
                                                "function" == typeof t && t(e);
                                            }), t.count -= 1, delete t[e], _a13(e);
                                        }));
                                    }
                                };
                                _r4();
                            } else "function" == typeof n && n();
                        },
                        _preloadOne: function _preloadOne(t, n) {
                            var i = function i() {
                                "function" == typeof n && n(t);
                            };
                            void 0 === e[t] ? Laya.Sprite3D.load(t, Laya.Handler.create(this, function(n) {
                                n._asset = t, e[t] = {
                                    origin: n,
                                    backups: []
                                }, Ne && e[t].backups.push(n), i();
                            })) : i();
                        }
                    };
                }()), e;
            }
        };
    }();
    window.G_NodePoolMgr = Ce.getInstance();
    var Ge = "storage_key_of_player_info_{0}", Te = 18e4;
    var Ee = /* */ function() {
        function Ee() {
            _classCallCheck2(this, Ee);
            this._playerInfo = null, this._isNewPlayer = !1, this._isBlocked = !1, this._lockedReason = "", 
            this._outlineTime = 0;
        }
        _createClass2(Ee, [ {
            key: "_serializePlayerInfoIntoLocal",
            value: function _serializePlayerInfoIntoLocal() {
                if (this._playerInfo) {
                    var _e81 = this._playerInfo.constructor.encode(this._playerInfo).finish(), _t71 = G_Utils.Uint8Array2HexString(_e81), _n41 = {
                        saveTime: Math.floor(G_ServerInfo.getServerTime() / 1e3),
                        data: _t71
                    };
                    G_PlatHelper.setStorage(Ge.format(this._playerInfo.openID), JSON.stringify(_n41));
                }
            }
        }, {
            key: "_checkPlayerInfoFromLocal",
            value: function _checkPlayerInfoFromLocal(e) {
                if (this._playerInfo) {
                    var _t72 = G_PlatHelper.getStorage(Ge.format(this._playerInfo.openID));
                    if (_t72 && "" !== _t72) {
                        var _n42 = JSON.parse(_t72);
                        if (void 0 !== _n42.saveTime && void 0 !== _n42.data && _n42.saveTime > this._playerInfo.lastSaveTime) {
                            var _t73 = G_Utils.HexString2Uint8Array(_n42.data), _i29 = new db.PlayerInfo.decode(_t73);
                            return this._playerInfo = _i29, this._playerInfo.sessID = e, !0;
                        }
                    }
                }
                return this._playerInfo.sessID = e, !1;
            }
        }, {
            key: "_loadPlayerInfoFromLocal",
            value: function _loadPlayerInfoFromLocal(e, t) {
                var n = G_PlatHelper.getStorage(Ge.format(e));
                if (n && "" !== n) {
                    var _e82 = JSON.parse(n);
                    if (void 0 !== _e82.data) {
                        var _n43 = G_Utils.HexString2Uint8Array(_e82.data), _i30 = new db.PlayerInfo.decode(_n43);
                        return _i30.sessID = t, _i30;
                    }
                }
                return null;
            }
        }, {
            key: "_fixOptionalDataInPlayerInfo",
            value: function _fixOptionalDataInPlayerInfo() {
                var e = !1;
                return this._playerInfo && (void 0 !== this._playerInfo.totalShareTimes && this._playerInfo.shareTimesOfToday > this._playerInfo.totalShareTimes && (this._playerInfo.totalShareTimes = this._playerInfo.shareTimesOfToday, 
                e = !0), void 0 !== this._playerInfo.totalAdvTimes && this._playerInfo.advTimesOfToday > this._playerInfo.totalAdvTimes && (this._playerInfo.totalAdvTimes = this._playerInfo.advTimesOfToday, 
                e = !0), null === this._playerInfo.redGift && (this._playerInfo.redGift = new db.RedGiftConfig(), 
                this._playerInfo.redGift.money = 0, this._playerInfo.redGift.totalWithdrawMoney = 0, 
                this._playerInfo.redGift.totalWithdrawMoneyTimes = 0, this._playerInfo.redGift.totalGotRedPackageCount = 0, 
                this._playerInfo.redGift.isWithdrawEverydayMoneyToday = !1, this._playerInfo.redGift.recordDayOfEverydayMoney = G_ServerInfo.getCurServerDayOfYear(), 
                this._playerInfo.redGift.totalWithdrawEverydayMoney = 0, e = !0)), "function" == typeof this.onFixOptionalDataInPlayerInfo && (e = this.onFixOptionalDataInPlayerInfo() || e), 
                e;
            }
        }, {
            key: "load",
            value: function load(e, t, n) {
                var i = this;
                var o = !1, a = function a(e) {
                    if (G_Switch.addCfgs(e.data.config.base), G_Switch.addCfgs(e.data.config.custom), 
                    parseInt(e.data.config.base.commitVersion, 10) === G_SDKCfg.getAppVersion() ? (G_Switch.addCfg(G_SwitchName.SN_IS_PUBLISHING, e.data.config.base.commitVersionStatus), 
                    "1" === e.data.config.base.commitVersionStatus.toString() ? console.log("app ver: ", G_SDKCfg.getAppVersion(), " ispublishing: true") : console.log("app ver: ", G_SDKCfg.getAppVersion(), " ispublishing: false")) : (G_Switch.addCfg(G_SwitchName.SN_IS_PUBLISHING, "0"), 
                    console.log("app ver: ", G_SDKCfg.getAppVersion(), " ispublishing: false")), G_Switch.inited(), 
                    Array.isArray(e.data.config.flowAd)) {
                        e.data.config.flowAd.forEach(function(e) {
                            G_PlatHelper.isNativePlatform() && ("banner" === e.flows_type ? G_advConfigs.bannerAdUnitIDs = e.flows_id.split("||") : "video" === e.flows_type ? G_advConfigs.videoAdUnitIDs = e.flows_id.split("||") : "insert" === e.flows_type ? G_advConfigs.interstitialAdUnitIDs = e.flows_id.split("||") : "splash" === e.flows_type && (G_advConfigs.splashAdUnitIDs = e.flows_id.split("||")));
                        });
                    }
                    e.data.config.red && G_RedPackageMgr.iniCfgs(e.data.config.red), e.data.config.pushPack && e.data.config.pushPack.forEach(function(e) {
                        "一次性订阅" === e.msgType ? G_Subscriber.addOnceTmplId(e.msgKey, e.msgId) : "长期订阅" === e.msgType && G_Subscriber.addForeverTmplId(e.msgKey, e.msgId);
                    });
                }, r = function r() {
                    i._initAfterGetPlayerInfo(), o && (console.log("Local PlayerInfo Is Newest..."), 
                    i.save()), "function" == typeof n && n(i._playerInfo), G_PlatHelper.canSaveOnline() && G_Scheduler.schedule("Auto_Save_Player_Info", function() {
                        i.save();
                    }, !1, Te);
                };
                if (G_PlatHelper.canSaveOnline()) {
                    var _n44 = function _n44(n) {
                        if (console.log(n), n && 0 === n.code) {
                            if ("" !== n.data.selfStore) {
                                var _e83 = G_Utils.HexString2Uint8Array(n.data.selfStore);
                                i._playerInfo = new db.PlayerInfo.decode(_e83), i._isNewPlayer = !1, o = i._checkPlayerInfoFromLocal(t), 
                                o = i._fixOptionalDataInPlayerInfo() || o;
                            } else i._playerInfo = i._generateNewPlayerInfo(e, t), i._playerInfo.userID = n.data.userId, 
                            i._isNewPlayer = !0, o = !0;
                            i._playerInfo.nickname = n.data.nickname, i._playerInfo.headUrl = n.data.avatarurl, 
                            i._isBlocked = 1 == n.data.isLock, i._isBlocked && (i._lockedReason = n.data.lockMessage), 
                            i._playerInfo.redGift && (i._playerInfo.redGift.money = n.data.money, i._playerInfo.redGift.totalWithdrawMoney = n.data.totalWithdrawMoney, 
                            i._playerInfo.redGift.totalWithdrawMoneyTimes = n.data.totalWithdrawMoneyTimes, 
                            i._playerInfo.redGift.totalGotRedPackageCount = n.data.totalGotRedPackageCount, 
                            i._playerInfo.redGift.isWithdrawEverydayMoneyToday = n.data.isWithdrawEverydayMoneyToday, 
                            i._playerInfo.redGift.recordDayOfEverydayMoney = n.data.recordDayOfEverydayMoney, 
                            i._playerInfo.redGift.totalWithdrawEverydayMoney = n.data.totalWithdrawEverydayMoney), 
                            a(n), r();
                        } else G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                    };
                    G_PlatHelper.canLoginOnline() ? G_NetHelper.reqLoadPlayerInfo(t, _n44) : G_NetHelper.reqLoadPlayerInfo_WithOpenID(e, _n44);
                } else this._playerInfo = this._loadPlayerInfoFromLocal(e, t), this._playerInfo ? o = this._fixOptionalDataInPlayerInfo() || o : (this._playerInfo = this._generateNewPlayerInfo(e, t), 
                this._isNewPlayer = !0), G_NetHelper.reqGetWebConfig(function(e) {
                    console.log(e), e && 0 === e.code ? (a(e), r()) : G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                });
            }
        }, {
            key: "_generateNewPlayerInfo",
            value: function _generateNewPlayerInfo(e, t) {
                var n = new db.PlayerInfo();
                return n.openID = e, n.sessID = t, n.userID = 0, n.lastSaveTime = 0, n.nickname = G_Nickname || "", 
                n.sex = G_Sex || 0, n.headUrl = G_HeadUrl || "", n.shareTimesOfToday = 0, n.totalShareTimes = 0, 
                n.recordDayOfShareTimes = G_ServerInfo.getCurServerDayOfYear(), n.advTimesOfToday = 0, 
                n.totalAdvTimes = 0, n.recordDayOfAdvTimes = G_ServerInfo.getCurServerDayOfYear(), 
                n.setting = new db.SettingConfig(), n.setting.isSoundOn = !0, n.setting.isMuteOn = !0, 
                void 0 !== n.redGift && (n.redGift = new db.RedGiftConfig(), n.redGift.money = 0, 
                n.redGift.totalWithdrawMoney = 0, n.redGift.totalWithdrawMoneyTimes = 0, n.redGift.totalGotRedPackageCount = 0, 
                n.redGift.isWithdrawEverydayMoneyToday = !1, n.redGift.recordDayOfEverydayMoney = G_ServerInfo.getCurServerDayOfYear(), 
                n.redGift.totalWithdrawEverydayMoney = 0), "function" == typeof this.onGeneratedNewPlayerInfo && this.onGeneratedNewPlayerInfo(n), 
                n;
            }
        }, {
            key: "_initAfterGetPlayerInfo",
            value: function _initAfterGetPlayerInfo() {
                this._caculateOutlineTime(), "function" == typeof this.onInitAfterGetPlayerInfo && this.onInitAfterGetPlayerInfo();
            }
        }, {
            key: "save",
            value: function save() {
                if (G_PlatHelper.canSaveOnline() && this._playerInfo) {
                    var e = this;
                    var _t74 = this._playerInfo.constructor.encode(this._playerInfo).finish(), _n45 = G_Utils.Uint8Array2HexString(_t74);
                    G_PlatHelper.canLoginOnline() ? G_NetHelper.reqSavePlayerInfo(this._playerInfo.sessID, _n45, function() {
                        e._playerInfo.lastSaveTime = Math.floor(G_ServerInfo.getServerTime() / 1e3), e.saveToWX();
                    }) : G_NetHelper.reqSavePlayerInfo_WithOpenID(this._playerInfo.openID, _n45, function() {
                        e._playerInfo.lastSaveTime = Math.floor(G_ServerInfo.getServerTime() / 1e3), e.saveToWX();
                    });
                }
            }
        }, {
            key: "saveToWX",
            value: function saveToWX() {
                if ("undefined" != typeof G_OpenHelper) {
                    var _e84 = {};
                    "function" == typeof this.onFillSaveToWXData && this.onFillSaveToWXData(_e84), G_OpenHelper.saveSelfInfo(_e84, function() {
                        console.log("Upload To WX Cloud Succ.");
                    });
                }
            }
        }, {
            key: "getOpenID",
            value: function getOpenID() {
                return this._playerInfo ? this._playerInfo.openID : "";
            }
        }, {
            key: "getSessID",
            value: function getSessID() {
                return this._playerInfo ? this._playerInfo.sessID : "";
            }
        }, {
            key: "getUserID",
            value: function getUserID() {
                return this._playerInfo ? this._playerInfo.userID : "";
            }
        }, {
            key: "getNickName",
            value: function getNickName() {
                return this._playerInfo ? this._playerInfo.nickname : "";
            }
        }, {
            key: "getHeadUrl",
            value: function getHeadUrl() {
                return this._playerInfo ? this._playerInfo.headUrl : "";
            }
        }, {
            key: "isNewPlayer",
            value: function isNewPlayer() {
                return !!this._playerInfo && this._isNewPlayer;
            }
        }, {
            key: "isBlocked",
            value: function isBlocked() {
                return !!this._playerInfo && this._isBlocked;
            }
        }, {
            key: "getLockedReason",
            value: function getLockedReason() {
                return this._lockedReason;
            }
        }, {
            key: "getOutlineTime",
            value: function getOutlineTime() {
                return this._outlineTime;
            }
        }, {
            key: "setSoundEnable",
            value: function setSoundEnable(e) {
                this._playerInfo && (this._playerInfo.setting.isSoundOn = e, this._serializePlayerInfoIntoLocal());
            }
        }, {
            key: "isSoundEnable",
            value: function isSoundEnable() {
                return !!this._playerInfo && this._playerInfo.setting.isSoundOn;
            }
        }, {
            key: "setMuteEnable",
            value: function setMuteEnable(e) {
                this._playerInfo && (this._playerInfo.setting.isMuteOn = e, this._serializePlayerInfoIntoLocal());
            }
        }, {
            key: "isMuteEnable",
            value: function isMuteEnable() {
                return !!this._playerInfo && this._playerInfo.setting.isMuteOn;
            }
        }, {
            key: "getTodayShareTimes",
            value: function getTodayShareTimes() {
                return this._playerInfo ? (this._checkShareTimesValid(), this._playerInfo.shareTimesOfToday) : 0;
            }
        }, {
            key: "getTotalShareTimes",
            value: function getTotalShareTimes() {
                return this._playerInfo ? (this._checkShareTimesValid(), void 0 !== this._playerInfo.totalShareTimes ? this._playerInfo.totalShareTimes : 0) : 0;
            }
        }, {
            key: "plusTodayShareTimes",
            value: function plusTodayShareTimes() {
                this._playerInfo && (this._checkShareTimesValid(), this._playerInfo.shareTimesOfToday += 1, 
                void 0 !== this._playerInfo.totalShareTimes && (this._playerInfo.totalShareTimes += 1), 
                this._playerInfo.recordDayOfShareTimes = G_ServerInfo.getCurServerDayOfYear(), this._serializePlayerInfoIntoLocal());
            }
        }, {
            key: "_checkShareTimesValid",
            value: function _checkShareTimesValid() {
                this._playerInfo.recordDayOfShareTimes !== G_ServerInfo.getCurServerDayOfYear() && (this._playerInfo.shareTimesOfToday = 0, 
                this._playerInfo.recordDayOfShareTimes = G_ServerInfo.getCurServerDayOfYear(), this._serializePlayerInfoIntoLocal());
            }
        }, {
            key: "getTodayAdvTimes",
            value: function getTodayAdvTimes() {
                return this._playerInfo ? (this._checkAdvTimesValid(), this._playerInfo.advTimesOfToday) : 0;
            }
        }, {
            key: "getTotalAdvTimes",
            value: function getTotalAdvTimes() {
                return this._playerInfo ? (this._checkAdvTimesValid(), void 0 !== this._playerInfo.totalAdvTimes ? this._playerInfo.totalAdvTimes : 0) : 0;
            }
        }, {
            key: "plusTodayAdvimes",
            value: function plusTodayAdvimes() {
                this._playerInfo && (this._checkAdvTimesValid(), this._playerInfo.advTimesOfToday += 1, 
                void 0 !== this._playerInfo.totalAdvTimes && (this._playerInfo.totalAdvTimes += 1), 
                this._playerInfo.recordDayOfAdvTimes = G_ServerInfo.getCurServerDayOfYear(), this._serializePlayerInfoIntoLocal(), 
                G_Event.dispatchEvent(G_EventName.EN_ADV_TIMES_CHANGED));
            }
        }, {
            key: "isNoMoreAdvTimesToday",
            value: function isNoMoreAdvTimesToday(e) {
                G_Switch.getRewardTimesOfEachDay(function(t) {
                    "function" == typeof e && e(this.getTodayAdvTimes() >= t);
                }.bind(this));
            }
        }, {
            key: "_checkAdvTimesValid",
            value: function _checkAdvTimesValid() {
                this._playerInfo.recordDayOfAdvTimes !== G_ServerInfo.getCurServerDayOfYear() && (this._playerInfo.advTimesOfToday = 0, 
                this._playerInfo.recordDayOfAdvTimes = G_ServerInfo.getCurServerDayOfYear(), this._serializePlayerInfoIntoLocal());
            }
        }, {
            key: "depositMoney",
            value: function depositMoney(e) {
                "number" != typeof e || e <= 0 ? console.error("depositMoney fail, check input...", e) : this._playerInfo.redGift && (this._playerInfo.redGift.money += e, 
                this._serializePlayerInfoIntoLocal(), console.log("{0} time depositMoney {1} succ, current money: ".format((this._playerInfo.redGift.totalGotRedPackageCount + 1).toString(), e.toString()), this._playerInfo.redGift.money));
            }
        }, {
            key: "withdrawMoney",
            value: function withdrawMoney(e) {
                "number" != typeof e || e <= 0 ? console.error("withdrawMoney fail, check input...", e) : this._playerInfo.redGift && (this._playerInfo.redGift.money >= e ? (this._playerInfo.redGift.money -= e, 
                this._playerInfo.redGift.totalWithdrawMoney += e, this._playerInfo.redGift.totalWithdrawMoneyTimes += 1, 
                this._serializePlayerInfoIntoLocal(), console.log("{0} time withdrawMoney {1} succ, total withdraw {2}, rest money: ".format(this._playerInfo.redGift.totalWithdrawMoneyTimes.toString(), e.toString(), this._playerInfo.redGift.totalWithdrawMoney.toString()), this._playerInfo.redGift.money)) : console.error("withdrawMoney fail, not enough money..."));
            }
        }, {
            key: "getMoney",
            value: function getMoney() {
                return this._playerInfo.redGift ? this._playerInfo.redGift.money : 0;
            }
        }, {
            key: "getTotalWithdrawMoney",
            value: function getTotalWithdrawMoney() {
                return this._playerInfo.redGift ? this._playerInfo.redGift.totalWithdrawMoney : 0;
            }
        }, {
            key: "getTotalWithdrawMoneyTimes",
            value: function getTotalWithdrawMoneyTimes() {
                return this._playerInfo.redGift ? this._playerInfo.redGift.totalWithdrawMoneyTimes : 0;
            }
        }, {
            key: "addTotalGotRedPackageCount",
            value: function addTotalGotRedPackageCount() {
                this._playerInfo.redGift && (this._playerInfo.redGift.totalGotRedPackageCount += 1);
            }
        }, {
            key: "getTotalGotRedPackageCount",
            value: function getTotalGotRedPackageCount() {
                return this._playerInfo.redGift ? this._playerInfo.redGift.totalGotRedPackageCount : 0;
            }
        }, {
            key: "isWithdrawEverydayMoneyToday",
            value: function isWithdrawEverydayMoneyToday() {
                return this._playerInfo.redGift ? (this._checkEverydayMoneyValid(), this._playerInfo.redGift.isWithdrawEverydayMoneyToday) : 0;
            }
        }, {
            key: "withdrawEverydayMoney",
            value: function withdrawEverydayMoney(e) {
                "number" != typeof e || e <= 0 ? console.error("withdrawEverydayMoney fail, check input...", e) : this._playerInfo.redGift && (this._playerInfo.redGift.isWithdrawEverydayMoneyToday ? console.error("withdrawEverydayMoney fail, withdrawed before...") : (this._playerInfo.redGift.totalWithdrawEverydayMoney += e, 
                this._playerInfo.redGift.isWithdrawEverydayMoneyToday = !0, this._serializePlayerInfoIntoLocal(), 
                console.log("withdrawEverydayMoney {0} succ, total withdraw {1}".format(e.toString(), this._playerInfo.redGift.totalWithdrawEverydayMoney.toString()))));
            }
        }, {
            key: "_checkEverydayMoneyValid",
            value: function _checkEverydayMoneyValid() {
                this._playerInfo.redGift && this._playerInfo.redGift.recordDayOfEverydayMoney !== G_ServerInfo.getCurServerDayOfYear() && (this._playerInfo.redGift.isWithdrawEverydayMoneyToday = !1, 
                this._playerInfo.redGift.recordDayOfEverydayMoney = G_ServerInfo.getCurServerDayOfYear(), 
                this._serializePlayerInfoIntoLocal());
            }
        }, {
            key: "_joinStrArr",
            value: function _joinStrArr(e) {
                var t = "";
                if (e) for (var _n46 = 0; _n46 < e.length; _n46++) {
                    t += e[_n46], _n46 !== e.length - 1 && (t += ",");
                }
                return t;
            }
        }, {
            key: "_caculateOutlineTime",
            value: function _caculateOutlineTime() {
                this._playerInfo && 0 !== this._playerInfo.lastSaveTime ? (this._outlineTime = Math.floor(G_ServerInfo.getServerTime() / 1e3) - this._playerInfo.lastSaveTime, 
                this._outlineTime < 0 && (this._outlineTime = 0)) : this._outlineTime = 0, this._outlineTime > 0 && console.log("Outline From Last Login: {0} seconds.".format(this._outlineTime.toString()));
            }
        } ]);
        return Ee;
    }();
    window.G_PlayerInfo = new (/* */ function(_Ee) {
        _inherits2(_class3, _Ee);
        var _super31 = _createSuper2(_class3);
        function _class3() {
            var _this54;
            _classCallCheck2(this, _class3);
            _this54 = _super31.call(this), _this54._coinBigNumber = null, _this54._totalCoinBigNumber = null, 
            console.log("Init G_PlayerInfo Instance...");
            return _this54;
        }
        _createClass2(_class3, [ {
            key: "onGeneratedNewPlayerInfo",
            value: function onGeneratedNewPlayerInfo(e) {
                void 0 !== BaseConfigIDs.BC_BORN_COIN_NUM ? e.coin = G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_BORN_COIN_NUM).num.toString() : e.coin = "0", 
                e.totalCoin = e.coin, e.currLevel = 1, e.speed = 1, e.time = 1, e.coin = 0, e.powerNum = 0, 
                e.timeShow = 0, e.SignDay = 0, e.SignTime = 0, e.currWeaponSkin = 0, e.unlockedWeaponSkin = "0";
            }
        }, {
            key: "onInitAfterGetPlayerInfo",
            value: function onInitAfterGetPlayerInfo() {
                this._loadCoin(), this._loadTotalCoin();
            }
        }, {
            key: "onFixOptionalDataInPlayerInfo",
            value: function onFixOptionalDataInPlayerInfo() {
                var e = !1;
                return this._playerInfo && (0 === this._playerInfo.currWeaponSkin && (this._playerInfo.currWeaponSkin = 0, 
                e = !0), "" === this._playerInfo.unlockedWeaponSkin && (this._playerInfo.unlockedWeaponSkin = "0", 
                e = !0), "" === this._playerInfo.coin && (this._playerInfo.coin = 0, e = !0), 0 === this._playerInfo.speed && (this._playerInfo.speed = 1, 
                e = !0), 0 === this._playerInfo.time && (this._playerInfo.time = 1, e = !0)), e;
            }
        }, {
            key: "onFillSaveToWXData",
            value: function onFillSaveToWXData(e) {
                this._playerInfo && void 0 !== this._playerInfo.totalCoin && (e.totalCoin = this._playerInfo.totalCoin);
            }
        }, {
            key: "addLevel",
            value: function addLevel() {
                this._playerInfo.currLevel++, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "getLevel",
            value: function getLevel() {
                return this._playerInfo.currLevel;
            }
        }, {
            key: "resetLevel",
            value: function resetLevel(e) {
                this._playerInfo.currLevel = e, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "setCurrWeaponSkin",
            value: function setCurrWeaponSkin(e) {
                this._playerInfo.currWeaponSkin = e, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "getCurrWeaponSkin",
            value: function getCurrWeaponSkin() {
                return this._playerInfo.currWeaponSkin || 0;
            }
        }, {
            key: "unlockWeaponSkin",
            value: function unlockWeaponSkin(e) {
                this._playerInfo.unlockedWeaponSkin += "|" + e, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "getUnlockWeaponSkin",
            value: function getUnlockWeaponSkin() {
                return this._playerInfo.unlockedWeaponSkin.split("|");
            }
        }, {
            key: "addSpeed",
            value: function addSpeed() {
                this._playerInfo.speed++, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "getSpeed",
            value: function getSpeed() {
                return this._playerInfo.speed;
            }
        }, {
            key: "addTime",
            value: function addTime() {
                this._playerInfo.time++, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "getTime",
            value: function getTime() {
                return this._playerInfo.time;
            }
        }, {
            key: "getCoin",
            value: function getCoin() {
                return this._playerInfo.coin || 0;
            }
        }, {
            key: "addCoin",
            value: function addCoin(e) {
                this._playerInfo.coin += e, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "downCoin",
            value: function downCoin(e) {
                this._playerInfo.coin -= e, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "setPowerNum",
            value: function setPowerNum(e) {
                this._playerInfo.powerNum = e, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "getPowerNum",
            value: function getPowerNum() {
                return this._playerInfo.powerNum;
            }
        }, {
            key: "setTimeNum",
            value: function setTimeNum(e) {
                this._playerInfo.timeShow = e, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "getTimeNum",
            value: function getTimeNum() {
                return this._playerInfo.timeShow;
            }
        }, {
            key: "setSignTime",
            value: function setSignTime(e) {
                this._playerInfo.SignTime = e, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "getSignTime",
            value: function getSignTime() {
                return this._playerInfo.SignTime;
            }
        }, {
            key: "setSignDay",
            value: function setSignDay(e) {
                this._playerInfo.SignDay = e, _get2(_getPrototypeOf2(_class3.prototype), "_serializePlayerInfoIntoLocal", this).call(this);
            }
        }, {
            key: "getSignDay",
            value: function getSignDay() {
                return this._playerInfo.SignDay;
            }
        }, {
            key: "getTotalCoin",
            value: function getTotalCoin() {
                return this._totalCoinBigNumber;
            }
        }, {
            key: "plusCoin",
            value: function plusCoin(e) {
                this._coinBigNumber && this._totalCoinBigNumber ? "number" == typeof e || BigNumber.isBigNumber(e) ? (this._coinBigNumber = this._coinBigNumber.plus(e), 
                this._totalCoinBigNumber = this._totalCoinBigNumber.plus(e), this._saveTotalCoin(), 
                this._saveCoin()) : console.error("PlayerInfo.plusCoin: param num must be a type of number or BigNumber...") : console.error("PlayerInfo.plusCoin: can not operation coin data before login...");
            }
        }, {
            key: "minusCoin",
            value: function minusCoin(e) {
                this._coinBigNumber ? "number" == typeof e || BigNumber.isBigNumber(e) ? (this._coinBigNumber = this._coinBigNumber.minus(e), 
                this._saveCoin()) : console.error("PlayerInfo.minusCoin: param num must be a type of number or BigNumber...") : console.error("PlayerInfo.minusCoin: can not operation coin data before login...");
            }
        }, {
            key: "_loadCoin",
            value: function _loadCoin() {
                this._playerInfo && !this._coinBigNumber && (this._coinBigNumber = BigNumber(this._playerInfo.coin));
            }
        }, {
            key: "_saveCoin",
            value: function _saveCoin() {
                this._playerInfo && this._coinBigNumber && (this._playerInfo.coin = this._coinBigNumber.toFixed(0), 
                this._serializePlayerInfoIntoLocal()), G_Event.dispatchEvent(G_EventName.EN_COIN_CHANGED);
            }
        }, {
            key: "_loadTotalCoin",
            value: function _loadTotalCoin() {
                this._playerInfo && !this._totalCoinBigNumber && (this._totalCoinBigNumber = BigNumber(this._playerInfo.totalCoin));
            }
        }, {
            key: "_saveTotalCoin",
            value: function _saveTotalCoin() {
                this._playerInfo && this._totalCoinBigNumber && (this._playerInfo.totalCoin = this._totalCoinBigNumber.toFixed(0));
            }
        } ]);
        return _class3;
    }(Ee))();
    var Oe = "Server_Time_Tick", be = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_ServerInfo Instance...");
                    var e = !1, t = 0, n = 0, i = 0, o = 0;
                    return {
                        load: function load(t) {
                            e = !1, G_PlatHelper.canLoginOnline() && G_NetHelper ? G_NetHelper.reqGetServerTime(function(n) {
                                n && 0 === n.code ? (e = !0, this._registerServerTime(parseInt(n.time, 10)), "function" == typeof t && t()) : G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                            }.bind(this)) : (this._registerServerTime(Math.round(new Date() / 1e3)), "function" == typeof t && t());
                        },
                        passedOneDay: function passedOneDay() {
                            o += 1, console.log("have passed {0} days".format(o.toString()));
                        },
                        reload: function reload(e) {
                            this._unregisterServerTime(), this.load(function() {
                                "function" == typeof e && e();
                            });
                        },
                        _registerServerTime: function _registerServerTime(o) {
                            console.log("server time: ", o), n = Date.now(), i = t = 1e3 * o, G_Scheduler.schedule(Oe, function() {
                                e && (t = i + Date.now() - n);
                            }, !0);
                        },
                        _unregisterServerTime: function _unregisterServerTime() {
                            e && (e = !1, t = 0, n = 0, i = 0, G_Scheduler.unschedule(Oe));
                        },
                        getServerTime: function getServerTime() {
                            return e ? t : Date.now();
                        },
                        getServerDate: function getServerDate() {
                            return e ? new Date(t) : new Date();
                        },
                        getCurServerDayOfWeek: function getCurServerDayOfWeek() {
                            var e = this.getServerDate().getDay();
                            return 0 === e && (e = 7), e;
                        },
                        getCurServerDayOfMonth: function getCurServerDayOfMonth() {
                            return this.getServerDate().getDate();
                        },
                        getCurServerDayOfYear: function getCurServerDayOfYear() {
                            var e = this.getServerDate(), t = new Date(e.getFullYear(), 0, 0), n = e - t + 60 * (t.getTimezoneOffset() - e.getTimezoneOffset()) * 1e3;
                            return Math.floor(n / 864e5) + o;
                        },
                        getCurServerWeekOfYear: function getCurServerWeekOfYear() {
                            var e = this.getServerDate(), t = new Date(e.valueOf()), n = (e.getDay() + 6) % 7;
                            t.setDate(t.getDate() - n + 3);
                            var i = t.valueOf();
                            return t.setMonth(0, 1), 4 !== t.getDay() && t.setMonth(0, 1 + (4 - t.getDay() + 7) % 7), 
                            1 + Math.ceil((i - t) / 6048e5);
                        }
                    };
                }()), e;
            }
        };
    }();
    window.G_ServerInfo = be.getInstance();
    var De = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (console.log("Init G_SoundMgr Instance..."), e = {
                    loadSound: function loadSound(e, t) {
                        G_AudioHelper.loadSound(e, t);
                    },
                    playSound: function playSound(e) {
                        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                        G_PlayerInfo.isSoundEnable() && (e = this._fixSoundUrl(e), G_AudioHelper.playSound(e, t));
                    },
                    playSoundWithRate: function playSoundWithRate(e) {
                        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                        G_PlayerInfo.isSoundEnable() && (e = this._fixSoundUrl(e), G_AudioHelper.playSound(e, t, n));
                    },
                    stopSound: function stopSound(e) {
                        e = this._fixSoundUrl(e), G_AudioHelper.stopSound(e);
                    },
                    stopAllSounds: function stopAllSounds() {
                        G_AudioHelper.stopAllSounds();
                    },
                    loadMusic: function loadMusic(e, t) {
                        G_AudioHelper.loadMusic(e, t);
                    },
                    playMusic: function playMusic(e, t, n) {
                        e = this._fixSoundUrl(e), G_PlayerInfo.isSoundEnable() ? G_AudioHelper.playMusic(e, t, n) : G_AudioHelper.setMusicInfo(e, n);
                    },
                    playMusicWithRate: function playMusicWithRate(e, t, n, i) {
                        e = this._fixSoundUrl(e), G_PlayerInfo.isSoundEnable() ? G_AudioHelper.playMusic(e, n, i, t) : G_AudioHelper.setMusicInfo(e, i, t);
                    },
                    stopMusic: function stopMusic(e) {
                        G_AudioHelper.stopMusic(e);
                    },
                    pauseMusic: function pauseMusic() {
                        G_AudioHelper.pauseMusic();
                    },
                    resumeMusic: function resumeMusic() {
                        G_PlayerInfo.isSoundEnable() && G_AudioHelper.resumeMusic();
                    },
                    getCurMusicTime: function getCurMusicTime() {
                        return G_AudioHelper.getCurMusicTime();
                    },
                    setSoundEnable: function setSoundEnable(e) {
                        G_PlayerInfo.isSoundEnable() !== e && (G_PlayerInfo.setSoundEnable(e), e && G_AudioHelper.isMusicUrlValid() ? G_AudioHelper.resumeMusic() : !e && G_AudioHelper.isMusicUrlValid() && G_AudioHelper.pauseMusic());
                    },
                    isSoundEnable: function isSoundEnable() {
                        return G_PlayerInfo.isSoundEnable();
                    },
                    _fixSoundUrl: function _fixSoundUrl(e) {
                        if (G_PlatHelper.getPlat() && "" !== G_BaseUrlPath) {
                            var _t75 = !1;
                            if (G_AppNativefiles.length > 0) for (var _n47 = 0; _n47 < G_AppNativefiles.length; _n47++) {
                                var _i31 = G_AppNativefiles[_n47];
                                if (-1 !== e.indexOf(_i31)) {
                                    _t75 = !0;
                                    break;
                                }
                            }
                            _t75 || (e = G_BaseUrlPath + e);
                        }
                        return G_PlatHelper.isNativePlatform() && -1 !== e.indexOf(".mp3") && (e = e.substring(0, e.indexOf(".mp3")) + ".wav"), 
                        e;
                    }
                }), e;
            }
        };
    }();
    window.G_SoundMgr = De.getInstance();
    var Me = /* */ function(_Laya$Script4) {
        _inherits2(Me, _Laya$Script4);
        var _super32 = _createSuper2(Me);
        function Me() {
            var _this55;
            _classCallCheck2(this, Me);
            _this55 = _super32.call(this), _this55._rootNode = void 0, _this55._callbacks = {}, 
            _this55._openType = "none", _this55._closeType = "none";
            return _this55;
        }
        _createClass2(Me, [ {
            key: "showUI",
            value: function showUI() {
                var _this56 = this;
                this.owner.visible = !0, arguments.length > 0 ? this._onInit.apply(this, arguments) : this._onInit(), 
                "scale" === this._openType ? this._runScaleOpenAction(function() {
                    _this56._onShow();
                }) : "fromLeft" === this._openType ? this._runFromLeftOpenAction(function() {
                    _this56._onShow();
                }) : "fromBottom" === this._openType ? this._runFromBottomOpenAction(function() {
                    _this56._onShow();
                }) : "opacity" === this._openType ? this._runOpacityOpenAction(function() {
                    _this56._onShow();
                }) : this._onShow();
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                var _this57 = this;
                "scale" === this._closeType ? this._runScaleCloseAction(function() {
                    _this57._onHide();
                }) : "opacity" === this._closeType ? this._runOpacityCloseAction(function() {
                    _this57._onHide();
                }) : this._onHide();
            }
        }, {
            key: "isOnShow",
            value: function isOnShow() {
                var e = function e(t) {
                    return !(!t || !t.visible) && (t.parent ? e(t.parent) : t === Laya.stage);
                };
                return e(this.owner);
            }
        }, {
            key: "_onInit",
            value: function _onInit() {
                this._rootNode && (this._rootNode.pivotX = this._rootNode.width / 2, this._rootNode.pivotY = this._rootNode.height / 2, 
                this._rootNode.parent ? (this._rootNode.x = this._rootNode.parent.width / 2, this._rootNode.y = this._rootNode.parent.height / 2) : (this._rootNode.x = Laya.stage.width / 2, 
                this._rootNode.y = Laya.stage.height / 2), this._rootNode.alpha = 1), "function" == typeof this.onInit && (arguments.length > 0 ? this.onInit.apply(this, arguments) : this.onInit());
            }
        }, {
            key: "_onShow",
            value: function _onShow() {
                this._rootNode && this._rootNode._baseTween && (this._rootNode._baseTween.clear(), 
                this._rootNode._baseTween = null), "function" == typeof this.onShow && this.onShow();
            }
        }, {
            key: "_onHide",
            value: function _onHide() {
                "function" == typeof this.onHide && this.onHide(), this.owner.visible = !1, this.invokeCallback("close");
            }
        }, {
            key: "_runScaleOpenAction",
            value: function _runScaleOpenAction(e) {
                if (this._rootNode) {
                    var _t76 = this._rootNode;
                    _t76._baseTween && (_t76._baseTween.clear(), _t76._baseTween = null), _t76.scaleX = .8, 
                    _t76.scaleY = .8, _t76._baseTween = Laya.Tween.to(_t76, {
                        scaleX: 1,
                        scaleY: 1
                    }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                        _t76._baseTween = null, "function" == typeof e && e();
                    }));
                }
            }
        }, {
            key: "_runFromLeftOpenAction",
            value: function _runFromLeftOpenAction(e) {
                if (this._rootNode) {
                    var _t77 = this._rootNode;
                    _t77._baseTween && (_t77._baseTween.clear(), _t77._baseTween = null), _t77.x = Laya.stage.width / 3, 
                    _t77._baseTween = Laya.Tween.to(_t77, {
                        x: Laya.stage.width / 2
                    }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                        _t77._baseTween = null, "function" == typeof e && e();
                    }));
                }
            }
        }, {
            key: "_runFromBottomOpenAction",
            value: function _runFromBottomOpenAction(e) {
                if (this._rootNode) {
                    var _t78 = this._rootNode;
                    _t78._baseTween && (_t78._baseTween.clear(), _t78._baseTween = null), _t78.y = Laya.stage.height / 4, 
                    _t78._baseTween = Laya.Tween.to(_t78, {
                        y: Laya.stage.height - _t78.height
                    }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                        _t78._baseTween = null, "function" == typeof e && e();
                    }));
                }
            }
        }, {
            key: "_runOpacityOpenAction",
            value: function _runOpacityOpenAction(e) {
                if (this._rootNode) {
                    var _t79 = this._rootNode;
                    _t79._baseTween && (_t79._baseTween.clear(), _t79._baseTween = null), _t79.alpha = 0, 
                    _t79._baseTween = Laya.Tween.to(_t79, {
                        alpha: 1
                    }, 400, null, Laya.Handler.create(null, function() {
                        _t79._baseTween = null, "function" == typeof e && e();
                    }));
                }
            }
        }, {
            key: "_runScaleCloseAction",
            value: function _runScaleCloseAction(e) {
                if (this._rootNode) {
                    var _t80 = this._rootNode;
                    _t80._baseTween && (_t80._baseTween.clear(), _t80._baseTween = null), _t80.scaleX = 1, 
                    _t80.scaleY = 1, _t80._baseTween = Laya.Tween.to(_t80, {
                        scaleX: .1,
                        scaleY: .1
                    }, 500, Laya.Ease.elasticOut, Laya.Handler.create(null, function() {
                        _t80._baseTween = null, "function" == typeof e && e();
                    }));
                }
            }
        }, {
            key: "_runOpacityCloseAction",
            value: function _runOpacityCloseAction(e) {
                if (this._rootNode) {
                    var _t81 = this._rootNode;
                    _t81._baseTween && (_t81._baseTween.clear(), _t81._baseTween = null), _t81.alpha = 1, 
                    _t81._baseTween = Laya.Tween.to(_t81, {
                        alpha: 0
                    }, 400, null, Laya.Handler.create(null, function() {
                        _t81._baseTween = null, "function" == typeof e && e();
                    }));
                }
            }
        }, {
            key: "registerCallback",
            value: function registerCallback(e, t) {
                this._checkString(e) && (void 0 === this._callbacks[e] && (this._callbacks[e] = []), 
                this._callbacks[e].push(t));
            }
        }, {
            key: "unregisterCallback",
            value: function unregisterCallback(e, t) {
                if (this._checkString(e) && void 0 !== this._callbacks[e]) if (t) {
                    var _n48 = this._callbacks[e], _i32 = _n48.indexOf(t);
                    _i32 > -1 && _n48.splice(_i32, 1);
                } else this._callbacks[e] = [];
            }
        }, {
            key: "invokeCallback",
            value: function invokeCallback(e) {
                if (this._checkString(e) && void 0 !== this._callbacks[e]) {
                    var _t82 = [].concat(this._callbacks[e]), _n49 = Array.prototype.slice.call(arguments);
                    _n49.shift();
                    for (var _e85 = 0; _e85 < _t82.length; _e85++) {
                        _t82[_e85].apply(null, _n49);
                    }
                }
            }
        }, {
            key: "_checkString",
            value: function _checkString(e) {
                return "string" == typeof e && "" !== e;
            }
        } ]);
        return Me;
    }(Laya.Script);
    var Ae = /* */ function(_Me) {
        _inherits2(Ae, _Me);
        var _super33 = _createSuper2(Ae);
        function Ae() {
            var _this58;
            _classCallCheck2(this, Ae);
            _this58 = _super33.call(this), _this58._inited = !1, _this58._sp = null, _this58._savedCaptureFilePath = "";
            return _this58;
        }
        _createClass2(Ae, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                if (this._initUI(), G_PlatHelper.getPlat()) {
                    var _e86 = this._getCaptureSaveRootDir();
                    if (G_PlatHelper.isNativePlatform()) this._inited = !0; else {
                        var _t83 = G_PlatHelper.getPlat().getFileSystemManager();
                        try {
                            _t83.accessSync(_e86), this._inited = !0;
                        } catch (n) {
                            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                            try {
                                _t83.mkdirSync(_e86, !0), this._inited = !0;
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                            }
                        }
                    }
                }
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                var e = G_UIHelper.seekNodeByName(this.owner, "sp");
                e && (e.on("click", null, function() {
                    G_UIManager.hideUI("capture");
                }), this._sp = e);
            }
        }, {
            key: "onInit",
            value: function onInit(e) {
                var _this59 = this;
                var t = 1;
                G_PlatHelper.isQQPlatform() && (t = 1.5), this._sp && (this._sp.visible = !1, this._sp.width = Laya.stage.width * t, 
                this._sp.height = Laya.stage.height * t, this._sp.pivotX = this._sp.width, this._sp.pivotY = .75 * this._sp.height, 
                this._sp.x = Laya.stage.width, this._sp.y = .75 * Laya.stage.height);
                var n = "", i = !1, o = function o() {
                    "" !== n && i && "function" == typeof e && e(n);
                }, a = Laya.stage.drawToCanvas(Laya.stage.width * t, Laya.stage.height * t, 0, 0), r = a.getTexture();
                if (this._sp && (this._sp.visible = !0, this._sp.graphics.clear(!0), this._sp.graphics.drawImage(r), 
                this._sp._scaleTween && (this._sp._scaleTween.clear(), this._sp._scaleTween = null), 
                this._sp.scaleX = 1 / t, this._sp.scaleY = 1 / t, this._sp._scaleTween = Laya.Tween.to(this._sp, {
                    scaleX: .3 / t,
                    scaleY: .3 / t
                }, 1e3, Laya.Ease.sineOut, Laya.Handler.create(null, function() {
                    _this59._sp._scaleTween = null, i = !0, o();
                }), 0, !1, !1)), G_PlatHelper.getPlat()) {
                    var _e87 = this._getCaptureSaveRootDir() + "/" + G_Utils.generateString(16) + ".jpg";
                    if (G_PlatHelper.isNativePlatform()) G_PlatHelper.getPlat().captureScreen(function(t, i, a) {
                        G_PlatHelper.getPlat().saveAsJpeg(t, i, a, _e87), n = _e87, o();
                    }); else {
                        var _t84 = G_PlatHelper.getPlat().getFileSystemManager(), _i33 = a.toBase64("image/jpg");
                        _t84.writeFile({
                            filePath: _e87,
                            data: _i33.substring(_i33.indexOf(",") + 1),
                            encoding: "base64",
                            success: function success() {
                                n = _e87, o();
                            },
                            fail: function fail(e) {
                                console.error("save error: ", e.errMsg), G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                            }
                        });
                    }
                }
            }
        }, {
            key: "onHide",
            value: function onHide() {
                this._sp && this._sp._scaleTween && (this._sp._scaleTween.clear(), this._sp._scaleTween = null);
            }
        }, {
            key: "_getCaptureSaveRootDir",
            value: function _getCaptureSaveRootDir() {
                return G_PlatHelper.getPlat() ? G_PlatHelper.isNativePlatform() ? G_PlatHelper.getPlat().getCachePath() : G_PlatHelper.getPlat().env.USER_DATA_PATH + "/capture" : "";
            }
        } ]);
        return Ae;
    }(Me);
    var Re = /* */ function(_Me2) {
        _inherits2(Re, _Me2);
        var _super34 = _createSuper2(Re);
        function Re() {
            _classCallCheck2(this, Re);
            return _super34.call(this);
        }
        _createClass2(Re, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                var e = G_UIHelper.seekNodeByName(this.owner, "closeBtn");
                e && e.on("click", null, function() {
                    this.onCloseTouched(e);
                }.bind(this));
                var t = G_UIHelper.seekNodeByName(this.owner, "privateBtn");
                t && t.on("click", null, function() {
                    this.onAgreeBtn();
                }.bind(this));
                var n = G_UIHelper.seekNodeByName(this.owner, "shareAppBtn");
                n && (n.on("click", null, function() {
                    this.onShareTouched(n);
                }.bind(this)), n.visible = !1, G_PlatHelper.isTTPlatform() && (n.visible = !1));
                var i = G_UIHelper.seekNodeByName(this.owner, "soundSwitchBtn");
                i && (i.on("click", null, function() {
                    this.onSoundSwitchTouched(i);
                }.bind(this)), this._initSwitchBtn(i), i.setWitchState(G_SoundMgr.isSoundEnable()));
                var o = G_UIHelper.seekNodeByName(this.owner, "muteSwitchBtn");
                o && (o.on("click", null, function() {
                    this.onMuteSwitchTouched(o);
                }.bind(this)), this._initSwitchBtn(o), o.setWitchState(G_PlayerInfo.isMuteEnable()), 
                G_UIHelper.seekNodeByName(this.owner, "muteIcon") && (G_UIHelper.seekNodeByName(this.owner, "muteIcon").visible = G_PlatHelper.isSupportVibratePhone()), 
                G_UIHelper.seekNodeByName(this.owner, "muteText") && (G_UIHelper.seekNodeByName(this.owner, "muteText").visible = G_PlatHelper.isSupportVibratePhone()), 
                G_UIHelper.seekNodeByName(this.owner, "muteSwitchBtn") && (G_UIHelper.seekNodeByName(this.owner, "muteSwitchBtn").visible = G_PlatHelper.isSupportVibratePhone()));
            }
        }, {
            key: "onAgreeBtn",
            value: function onAgreeBtn() {
                window.HLSDK.showPrivacy();
            }
        }, {
            key: "_initSwitchBtn",
            value: function _initSwitchBtn(e) {
                e.setWitchState = function(t) {
                    e._isOn !== t && (e._isOn = t, e.skin = t ? "game/popup/setting/on_btn.png" : "game/popup/setting/off_btn.png");
                }, e.getWitchState = function() {
                    return e._isOn;
                }, e.setWitchState(!1);
            }
        }, {
            key: "onCloseTouched",
            value: function onCloseTouched(e) {
                G_UIHelper.playBtnTouchAction(e, function() {
                    G_UIManager.hideUI("setting");
                }.bind(this)), G_SoundMgr.playSound(G_SoundName.SN_CLICK);
            }
        }, {
            key: "onShareTouched",
            value: function onShareTouched(e) {
                G_UIHelper.playBtnTouchAction(e), G_SoundMgr.playSound(G_SoundName.SN_CLICK), d.share({
                    sceneName: h.SS_SHARE_APP,
                    customQueryObj: null,
                    showFailTips: !1,
                    cb: function cb(e) {
                        e && console.log("share app succ...");
                    }
                });
            }
        }, {
            key: "onSoundSwitchTouched",
            value: function onSoundSwitchTouched(e) {
                G_UIHelper.playBtnTouchAction(e), G_SoundMgr.playSound(G_SoundName.SN_CLICK), G_SoundMgr.isSoundEnable() ? G_SoundMgr.setSoundEnable(!1) : G_SoundMgr.setSoundEnable(!0), 
                e.setWitchState(G_SoundMgr.isSoundEnable()), d.setSoundEnable(G_SoundMgr.isSoundEnable()), 
                d.setMusicEnable(G_SoundMgr.isSoundEnable());
            }
        }, {
            key: "onMuteSwitchTouched",
            value: function onMuteSwitchTouched(e) {
                G_UIHelper.playBtnTouchAction(e), G_SoundMgr.playSound(G_SoundName.SN_CLICK), G_PlayerInfo.isMuteEnable() ? G_PlayerInfo.setMuteEnable(!1) : G_PlayerInfo.setMuteEnable(!0), 
                e.setWitchState(G_PlayerInfo.isMuteEnable()), d.setMuteEnable(G_SoundMgr.isSoundEnable());
            }
        } ]);
        return Re;
    }(Me);
    var Be = {
        key: "setting",
        zOrder: 101,
        isAutoDestory: !1,
        cls: Re,
        prefab: "prefab/settingView.json"
    }, ke = {
        key: "capture",
        zIndex: 997,
        isAutoDestory: !1,
        cls: Ae,
        prefab: "prefab/captureView.json"
    };
    var Ue = null;
    Ue = void 0 !== window.qq ? [ ke, Be ] : void 0 !== window.tt ? [ ke, Be ] : void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("oppo") > -1 ? [ Be ] : void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("vivo") > -1 ? [ Be ] : void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("meizu") > -1 ? [ Be ] : void 0 !== window.hbs ? [ Be ] : void 0 !== window.qttGame ? [ Be ] : void 0 !== window.wx ? [ Be ] : [ ke, Be ];
    var He = /* */ function() {
        function He() {
            _classCallCheck2(this, He);
        }
        _createClass2(He, null, [ {
            key: "uiScaleAnimation",
            value: function uiScaleAnimation(e, t) {
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                var a = e;
                a && (a._tween && (a._tween.clear(), a._tween = null), a.scaleX = n, a.scaleY = n, 
                a._tween = Laya.Tween.to(a, {
                    scaleX: 1.1 * n * i,
                    scaleY: 1.1 * n * i
                }, 100 * o, null, Laya.Handler.create(null, function() {
                    a._tween = Laya.Tween.to(a, {
                        scaleX: n,
                        scaleY: n
                    }, 50 * o, null, Laya.Handler.create(null, function() {
                        a._tween = null, t instanceof Laya.Handler ? t.run() : "function" == typeof t && t();
                    }));
                })));
            }
        }, {
            key: "onErrorCb",
            value: function onErrorCb(e) {}
        }, {
            key: "onLoadCb",
            value: function onLoadCb() {}
        }, {
            key: "showAd",
            value: function showAd() {}
        }, {
            key: "showVideo",
            value: function showVideo() {}
        }, {
            key: "BrushBanner",
            value: function BrushBanner() {
                this.idList = [ "adunit-d763f2b2b8e1f48b", "adunit-c847d0b4095ae980", "adunit-71fc793308e70195", "adunit-5f1e650d5178dddd", "adunit-99025fb3bd75480f" ], 
                this._adUnitIndex = Math.floor(Math.random() * this.idList.length);
            }
        }, {
            key: "Refresh",
            value: function Refresh() {}
        }, {
            key: "HideOff",
            value: function HideOff() {}
        } ]);
        return He;
    }();
    He.customAd = null;
    var Ve = /* */ function(_Me3) {
        _inherits2(Ve, _Me3);
        var _super35 = _createSuper2(Ve);
        function Ve() {
            _classCallCheck2(this, Ve);
            return _super35.call(this);
        }
        _createClass2(Ve, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType, 
                this.jinPos = null, this.isFirst = !1;
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                this.fig1 = G_UIHelper.seekNodeByName(this.owner, "figer1"), this.box = G_UIHelper.seekNodeByName(this.owner, "box"), 
                this.kill_img = G_UIHelper.seekNodeByName(this.owner, "kill"), this.time = G_UIHelper.seekNodeByName(this.owner, "time"), 
                this.timeNum = G_UIHelper.seekNodeByName(this.owner, "timeNum"), this.levelT = G_UIHelper.seekNodeByName(this.owner, "level1"), 
                this.levelT1 = G_UIHelper.seekNodeByName(this.owner, "level2"), this.levelImg = G_UIHelper.seekNodeByName(this.owner, "levelImg"), 
                this.ok = G_UIHelper.seekNodeByName(this.owner, "ok"), this.black = G_UIHelper.seekNodeByName(this.owner, "black"), 
                this.nearby = G_UIHelper.seekNodeByName(this.owner, "nearby"), this.zhuabuBtn = G_UIHelper.seekNodeByName(this.owner, "zhuabuBtn"), 
                this.zheng = G_UIHelper.seekNodeByName(this.owner, "zheng"), this.nei = G_UIHelper.seekNodeByName(this.owner, "nei"), 
                this.hong = G_UIHelper.seekNodeByName(this.owner, "hong"), this.forward = new Laya.Vector3(0, 0, 1), 
                this.toEnemy = new Laya.Vector3(), this.ok && this.ok.on("click", null, function() {
                    this.hideOver();
                }.bind(this)), G_UIHelper.refreshFreeWayOfBtn(this.zhuabuBtn), this.zhuabuBtn && this.zhuabuBtn.on("click", null, function() {
                    playCtrl.arrowCtrl.clearTime(!1), this.zhuabuBtn.doTouch(G_ShareScene.SS_SHARE_APP, function() {
                        this.btn_anim(!1), playCtrl.arrowCtrl.clearTime(!0);
                    }.bind(this), function() {
                        playCtrl.arrow.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), playCtrl.arrowCtrl.startRota();
                    }.bind(this));
                }.bind(this)), this.click_btn = G_UIHelper.seekNodeByName(this.owner, "click_btn"), 
                this.click_btn && this.click_btn.on("click", null, function() {
                    G_UIHelper.playBtnTouchAction(this.click_btn), G_PlatHelper.vibratePhone(!1), this.nei.scaleX += .15, 
                    this.nei.scaleY += .15, this.clickNum++;
                }.bind(this));
            }
        }, {
            key: "showUI",
            value: function showUI() {
                _get2(_getPrototypeOf2(Ve.prototype), "showUI", this).call(this), G_UIHelper.tweenMoveCamera(playCtrl.camera, 600, !1, {
                    position: new Laya.Vector3(0, 6.5, 5.5),
                    rotationEuler: new Laya.Vector3(-40, 0, 0),
                    fieldOfView: 60
                }, {
                    position: new Laya.Vector3(0, 7.5, 2.5),
                    rotationEuler: new Laya.Vector3(-60, 0, 0),
                    fieldOfView: 60
                }, !1, function() {
                    playCtrl.startGame();
                }.bind(this)), this.fig1.visible = !1, this.kill_img.visible = !1, this.time.visible = !1, 
                this.black.visible = !1, this.nearby.visible = !1, this.zhuabuBtn.visible = !1, 
                this.zheng.visible = !1, this.hong.visible = !1, this.clickNum = 0, this.levelT.text = G_PlayerInfo.getLevel(), 
                this.levelT1.text = G_PlayerInfo.getLevel() + 1;
                var e = G_Switch.getConfigByKey("clickMistake").split("||");
                this.showTime = parseInt(e[0]), this.clickRandNum = G_Utils.random(parseInt(e[1]), parseInt(e[2])), 
                d.isMistakeEnabled() && (!this.isFirst || G_Utils.random(1, 100) <= parseFloat(e[10])) ? this.showBannerTime = G_Utils.random(parseInt(e[3]), parseInt(e[4])) : this.showBannerTime = -1, 
                this.showNum1 = parseInt(e[5]), this.showNum2 = parseInt(e[6]), this.showNum3 = parseFloat(e[7]), 
                this.showNum4 = parseFloat(e[8]), this.showNum5 = parseFloat(e[9]);
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                _get2(_getPrototypeOf2(Ve.prototype), "hideUI", this).call(this), this.time.visible = !1;
            }
        }, {
            key: "btn_anim",
            value: function btn_anim() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                e ? (this.zhuabuBtn.visible = !0, He.uiScaleAnimation(this.zhuabuBtn, Laya.Handler.create(this, this.btn_anim), .95, 1.1, 5)) : (this.zhuabuBtn.visible = !1, 
                this.zhuabuBtn._tween && (this.zhuabuBtn._tween.clear(), this.zhuabuBtn._tween = null));
            }
        }, {
            key: "showBlackPic",
            value: function showBlackPic() {
                G_Event.dispatchEvent(G_EventName.EN_HIDE_BANNER_AD), this.black.visible = !0, this.black.alpha = 1, 
                this.owner.x321.play(0, 0), Laya.timer.once(3500, this, function() {
                    Laya.timer.loop(50, this, this.updateAlpha);
                });
            }
        }, {
            key: "showAnimator",
            value: function showAnimator(e) {
                1 == e ? (G_UIHelper.seekNodeByName(this.owner, "hideAni").skin = "game/duocang.png", 
                this.owner.hide.play(0, 0)) : (G_UIHelper.seekNodeByName(this.owner, "hideAni").skin = "game/find.png", 
                this.owner.find.play(0, 0));
            }
        }, {
            key: "updateAlpha",
            value: function updateAlpha() {
                this.black.alpha -= .07, this.black.alpha <= 0 && (Laya.timer.clear(this, this.updateAlpha), 
                this.black.visible = !1, this.black.alpha = 1, playCtrl.addListener(), playCtrl.startZhua(), 
                this.showAnimator(2));
            }
        }, {
            key: "showKillText",
            value: function showKillText() {
                this.kill_img.visible = !0, this.owner.kill.play(0, 0);
            }
        }, {
            key: "showKuangDianBtn",
            value: function showKuangDianBtn() {
                this.zheng.visible = !0, this.hong.visible = !0, this.nei.scaleX = 1, this.nei.scaleY = 1, 
                this.timeN = 0, this.owner.shouzhi.play(0, 1), Laya.timer.frameLoop(1, this, this.progressBarLogic);
            }
        }, {
            key: "progressBarLogic",
            value: function progressBarLogic() {
                if (this.timeN++, this.showBannerTime == this.timeN) return playCtrl.showSuccessView(), 
                Laya.timer.clear(this, this.progressBarLogic), void (this.zheng.visible = !1);
                if (this.timeN >= this.showTime) return Laya.timer.clear(this, this.progressBarLogic), 
                this.zheng.visible = !1, void (this.clickNum >= this.clickRandNum ? playCtrl.showSuccessView() : (dPlayer.getChildByName("person").active = !0, 
                dPlayer.getChildByName("name").active = !0, dPlayer.getChildByName("person").getComponent(Laya.Animator).play("Dead"), 
                playCtrl.showFailView()));
                var e = 0;
                e = this.timeN < this.showNum1 ? this.showNum3 : this.timeN > this.showNum2 ? this.showNum5 : this.showNum4, 
                this.nei.scaleX -= e, this.nei.scaleY -= e, this.nei.scaleX < 1 && (this.nei.scaleX = 1, 
                this.nei.scaleY = 1);
            }
        }, {
            key: "updataTime",
            value: function updataTime(e) {
                0 == e ? 1 == playCtrl.fightType ? this.hideOver() : playCtrl.killNum >= 3 ? playCtrl.showSuccessView() : playCtrl.showFailView() : (this.time.visible = !0, 
                this.timeNum.text = e < 10 ? "00:0" + e : "00:" + e);
            }
        }, {
            key: "updataZhuaTime",
            value: function updataZhuaTime(e) {
                0 != e ? (this.time.visible = !0, this.timeNum.text = e < 10 ? "00:0" + e : "00:" + e) : this.time.visible = !1;
            }
        }, {
            key: "hideOver",
            value: function hideOver() {
                this.ok.visible = !1, this.time.visible = !1, playCtrl.hideOver();
            }
        }, {
            key: "showNearby",
            value: function showNearby(e) {
                this.nearby.visible = e, e ? this.owner.near.play(0, 1) : this.owner.near.stop();
            }
        }, {
            key: "showFigerNum",
            value: function showFigerNum() {
                var e = playCtrl.otherPosList;
                if (!e) return;
                var t = dPlayer.transform.localPosition;
                if (!this.jinPos) {
                    var _n50 = 1e3, _i34 = null;
                    for (var _o17 = 0; _o17 < e.length; _o17++) {
                        var _a14 = Laya.Vector3.distance(e[_o17], t);
                        _a14 < _n50 && (_n50 = _a14, _i34 = e[_o17]);
                    }
                    this.jinPos = _i34;
                }
                this.fig1.visible = Laya.Vector3.distance(this.jinPos, t) > 3;
                var n = this.box.height / 2, i = this.box.width / 2;
                this.fig1.visible && this.figerRotate(this.fig1, this.jinPos, n, i, t);
            }
        }, {
            key: "figerRotate",
            value: function figerRotate(e, t, n, i, o) {
                Laya.Vector3.subtract(t, o, this.toEnemy);
                var a = Laya.Vector3.dot(this.forward, this.toEnemy), r = Laya.Vector3.scalarLength(this.forward) * Laya.Vector3.scalarLength(this.toEnemy), s = 180 * Math.acos(a / r) / Math.PI;
                o.x < t.x && (s = -s);
                var l = s >= 0 ? -1 : 1, c = Math.abs(s), h = 0;
                90 != c && (h = Math.tan(s * Math.PI / 180));
                var d = 180 * Math.atan(i / n) / Math.PI, u = 180 - d;
                c <= d ? (e.centerX = -h * n, e.centerY = n) : c > d && c <= u ? (e.centerX = l * i, 
                e.centerY = 90 == c ? 0 : i / h * -l) : (e.centerY = -n, e.centerX = Math.abs(h) * n * l), 
                e.rotation = s + 180;
            }
        } ]);
        return Ve;
    }(Me);
    var xe = /* */ function(_Me4) {
        _inherits2(xe, _Me4);
        var _super36 = _createSuper2(xe);
        function xe() {
            _classCallCheck2(this, xe);
            return _super36.call(this);
        }
        _createClass2(xe, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType, 
                this.skinNum = 0, this.first = !1, this.customAd = null, this.insertAd = null, this.isFirst = !0, 
                this._bannerAd = null, this._customAd = null, this.AdErrCode = 0;
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "showDaoBox",
            value: function showDaoBox() {}
        }, {
            key: "showUI",
            value: function showUI() {
                var _this60 = this;
                _get2(_getPrototypeOf2(xe.prototype), "showUI", this).call(this), this.onCoinChange(), 
                this.level_num.text = "关卡-" + G_PlayerInfo.getLevel(), this.skinNum = G_PlayerInfo.getCurrWeaponSkin(), 
                this.changeSkin(), this.btn_an1();
                var e = G_PlayerInfo.getTime(), t = G_PlayerInfo.getSpeed();
                this.timeBtn.getChildByName("level").text = "lv." + e, this.timeBtn.getChildByName("coinNum").text = 100 * e, 
                this.speedBtn.getChildByName("level").text = "lv." + t, this.speedBtn.getChildByName("coinNum").text = 100 * t, 
                this._customAd = null, this._bannerAd = null, this.AdErrCode = 0, d.showMainView(function() {
                    var e = G_PlayerInfo.getPowerNum(), t = G_PlayerInfo.getTimeNum(), n = G_ServerInfo.getCurServerDayOfYear();
                    t != n && (G_PlayerInfo.setTimeNum(n), e = 5, G_PlayerInfo.setPowerNum(5)), _this60.power_num.text = e, 
                    G_PlayerInfo.getSignTime() != n && (d.tempHide(), G_UIManager.showUI("signView"));
                });
            }
        }, {
            key: "ShowCustomAd",
            value: function ShowCustomAd() {}
        }, {
            key: "showFakeloading",
            value: function showFakeloading() {
                this.isFirst && G_MistakeMgr.isShowFake1MistakeEnabledAsync() ? G_Switch.getFakeLoadingConfig(function(e) {
                    e.time > 0 ? G_UIManager.showUI("fakeLoadingAd") : G_MistakeMgr.isCclickMistakeEnabledAsync() && G_UIManager.showUI("startMistakeView");
                }) : G_MistakeMgr.isCclickMistakeEnabledAsync() && G_UIManager.showUI("startMistakeView"), 
                this.isFirst = !1;
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                _get2(_getPrototypeOf2(xe.prototype), "hideUI", this).call(this), this._customAd && (console.log("HIDE````"), 
                this._customAd.hide());
            }
        }, {
            key: "btn_an1",
            value: function btn_an1() {
                He.uiScaleAnimation(this.startImg, Laya.Handler.create(this, this.btn_an1), .95, 1.1, 5);
            }
        }, {
            key: "changeSkin",
            value: function changeSkin() {
                this.skinTxt.text = this.skinNum + 1 + "/6", this.skinImg.skin = "game/start/pp" + (this.skinNum + 1) + ".png";
            }
        }, {
            key: "onCoinChange",
            value: function onCoinChange() {
                this.coin_num.text = G_PlayerInfo.getCoin().toString();
            }
        }, {
            key: "startGame",
            value: function startGame() {
                G_UIManager.hideUI("startView"), G_UIManager.showUI("gameView"), playCtrl.arrestPeople._scripts[0].changeSkin();
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                this.coin_num = G_UIHelper.seekNodeByName(this.owner, "coin_number"), this.power_num = G_UIHelper.seekNodeByName(this.owner, "power_number"), 
                this.level_num = G_UIHelper.seekNodeByName(this.owner, "level_text"), this.allbg = G_UIHelper.seekNodeByName(this.owner, "allbg"), 
                this.skinTxt = G_UIHelper.seekNodeByName(this.owner, "skinNum"), this.skinImg = G_UIHelper.seekNodeByName(this.owner, "skinImg"), 
                this.startImg = G_UIHelper.seekNodeByName(this.owner, "startImg"), this.start_click_btn = G_UIHelper.seekNodeByName(this.owner, "start_btn"), 
                G_UIHelper.refreshFreeWayOfBtn(this.start_click_btn, "game/bofang.png", "game/bofang.png"), 
                this.start_click_btn.on("click", null, function() {
                    G_SoundMgr.playSound("res/sounds/anniu.mp3");
                    var e = G_PlayerInfo.getPowerNum();
                    if (e <= 0) return G_PlatHelper.showToast("体力不足！"), void G_UIManager.showUI("plusPowerView");
                    d.showGamingView(function() {
                        e -= 1, G_PlayerInfo.setPowerNum(e), this.startGame();
                    }.bind(this));
                }.bind(this));
                var e = G_UIHelper.seekNodeByName(this.owner, "settingBtn");
                e && e.on("click", null, function() {
                    G_SoundMgr.playSound("res/sounds/anniu.mp3"), G_UIManager.showUI("setting");
                }.bind(this));
                var t = G_UIHelper.seekNodeByName(this.owner, "addCoin");
                t && t.on("click", null, function() {
                    G_UIManager.showUI("plusCoinView");
                }.bind(this));
                var n = G_UIHelper.seekNodeByName(this.owner, "addPower");
                n && n.on("click", null, function() {
                    G_UIManager.showUI("plusPowerView");
                }.bind(this));
                var i = G_UIHelper.seekNodeByName(this.owner, "signBtn");
                i && i.on("click", null, function() {
                    G_UIManager.showUI("signView");
                }.bind(this)), this.more_click_btn = G_UIHelper.seekNodeByName(this.owner, "moreGameBtn"), 
                this.more_click_btn && this.more_click_btn.on("click", null, function() {
                    1004 == this.AdErrCode ? (console.log("显示更多游戏"), G_UIManager.showUI("moreGameAd")) : (console.log("显示原生广告"), 
                    this.ShowCustomAd());
                }.bind(this));
                var o = G_UIHelper.seekNodeByName(this.owner, "changeSkin");
                o && o.on("click", null, function() {
                    G_SoundMgr.playSound("res/sounds/anniu.mp3");
                    var e = this.skinNum;
                    if (++e > 5 && (e = 0), -1 == G_PlayerInfo.getUnlockWeaponSkin().indexOf(e.toString())) {
                        if (1 == e) return void G_PlatHelper.showToast("酷炫皮肤皮肤未解锁!");
                        this.skinNum = 0, this.changeSkin(), G_PlayerInfo.setCurrWeaponSkin(this.skinNum);
                    } else this.skinNum = e, this.changeSkin(), G_PlayerInfo.setCurrWeaponSkin(this.skinNum);
                }.bind(this)), this.timeBtn = G_UIHelper.seekNodeByName(this.owner, "timeBtn"), 
                this.timeBtn && this.timeBtn.on("click", null, function() {
                    G_UIHelper.playBtnTouchAction(this.timeBtn);
                    var e = G_PlayerInfo.getTime();
                    G_PlayerInfo.getCoin() < 100 * e ? G_UIManager.showUI("plusCoinView") : (G_PlayerInfo.downCoin(100 * e), 
                    G_PlayerInfo.addTime(), G_PlatHelper.showToast("升级成功！您的抓捕时间提升了！"), this.timeBtn.getChildByName("level").text = "lv." + (e + 1), 
                    this.timeBtn.getChildByName("coinNum").text = 100 * (e + 1), this.onCoinChange());
                }.bind(this)), this.speedBtn = G_UIHelper.seekNodeByName(this.owner, "speedBtn"), 
                this.speedBtn && this.speedBtn.on("click", null, function() {
                    G_UIHelper.playBtnTouchAction(this.speedBtn);
                    var e = G_PlayerInfo.getSpeed();
                    G_PlayerInfo.getCoin() < 100 * e ? G_UIManager.showUI("plusCoinView") : (G_PlayerInfo.downCoin(100 * e), 
                    G_PlayerInfo.addSpeed(), G_PlatHelper.showToast("升级成功！您的移动速度提升了！"), this.speedBtn.getChildByName("level").text = "lv." + (e + 1), 
                    this.speedBtn.getChildByName("coinNum").text = 100 * (e + 1), this.onCoinChange());
                }.bind(this));
            }
        } ]);
        return xe;
    }(Me);
    var We = /* */ function(_Me5) {
        _inherits2(We, _Me5);
        var _super37 = _createSuper2(We);
        function We() {
            _classCallCheck2(this, We);
            return _super37.call(this);
        }
        _createClass2(We, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType, 
                this.firstNoSkin = -1;
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this.bgBtn = G_UIHelper.seekNodeByName(this.owner, "next_level"), this.video_btn = G_UIHelper.seekNodeByName(this.owner, "video_btn"), 
                this.progressBar = G_UIHelper.seekNodeByName(this.owner, "progressBar"), this.barNum = G_UIHelper.seekNodeByName(this.owner, "barNum"), 
                this.typeText = G_UIHelper.seekNodeByName(this.owner, "type2"), this._initUI();
            }
        }, {
            key: "showUI",
            value: function showUI() {
                _get2(_getPrototypeOf2(We.prototype), "showUI", this).call(this), d.showGameEndView(function() {
                    this.btn_anim(), 1 == playCtrl.fightType ? (G_UIHelper.seekNodeByName(this.owner, "type1").visible = !0, 
                    G_UIHelper.seekNodeByName(this.owner, "type2").visible = !1, G_UIHelper.seekNodeByName(this.owner, "coin_n").text = "60") : (G_UIHelper.seekNodeByName(this.owner, "type1").visible = !1, 
                    G_UIHelper.seekNodeByName(this.owner, "type2").visible = !0, 3 == playCtrl.killNum ? this.typeText.text = "厉害，你抓到了3个人！" : 4 == playCtrl.killNum ? this.typeText.text = "太棒了，你抓到了4个人！！" : this.typeText.text = "无与伦比，你抓到了所有人！！！", 
                    G_UIHelper.seekNodeByName(this.owner, "coin_n").text = 60 + 20 * playCtrl.killNum);
                }.bind(this));
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                _get2(_getPrototypeOf2(We.prototype), "hideUI", this).call(this);
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                this.bgBtn && this.bgBtn.on("click", null, function() {
                    var _this61 = this;
                    (function() {
                        G_PlayerInfo.addCoin(60 + 20 * playCtrl.killNum), G_PlayerInfo.addLevel(), G_UIManager.hideUI("successView"), 
                        G_SoundMgr.playSound("res/sounds/anniu.mp3"), _this61.showGift();
                    })();
                }.bind(this)), G_UIHelper.refreshFreeWayOfBtn(this.video_btn), this.video_btn && this.video_btn.on("click", null, function() {
                    this.video_btn.doTouch(G_ShareScene.SS_SHARE_APP, function() {
                        G_PlayerInfo.addCoin(120 + 40 * playCtrl.killNum), G_PlayerInfo.addLevel(), G_UIManager.hideUI("successView"), 
                        this.showGift(), G_SoundMgr.playSound("res/sounds/anniu.mp3");
                    }.bind(this));
                }.bind(this));
            }
        }, {
            key: "showGift",
            value: function showGift() {
                var e = G_PlayerInfo.getUnlockWeaponSkin();
                this.firstNoSkin = -1;
                for (var _t85 = 0; _t85 < 6; _t85++) {
                    if (-1 == e.indexOf(_t85.toString())) {
                        this.firstNoSkin = _t85;
                        break;
                    }
                }
                -1 != this.firstNoSkin ? G_UIManager.showUI("giftView", function() {
                    G_UIManager.showUI("startView");
                }.bind(this), this.firstNoSkin) : (G_UIManager.showUI("startView"), playCtrl.initGame());
            }
        }, {
            key: "btn_anim",
            value: function btn_anim() {
                He.uiScaleAnimation(this.video_btn, Laya.Handler.create(this, this.btn_anim), .95, 1.1, 5);
            }
        } ]);
        return We;
    }(Me);
    var Fe = /* */ function(_Me6) {
        _inherits2(Fe, _Me6);
        var _super38 = _createSuper2(Fe);
        function Fe() {
            _classCallCheck2(this, Fe);
            return _super38.call(this);
        }
        _createClass2(Fe, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "showUI",
            value: function showUI() {
                _get2(_getPrototypeOf2(Fe.prototype), "showUI", this).call(this), d.showGameEndView(null), 
                this.btn_anim();
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                _get2(_getPrototypeOf2(Fe.prototype), "hideUI", this).call(this);
            }
        }, {
            key: "btn_anim",
            value: function btn_anim() {
                He.uiScaleAnimation(this.fuhuo_Btn, Laya.Handler.create(this, this.btn_anim), .95, 1, 5);
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                this.bgBtn = G_UIHelper.seekNodeByName(this.owner, "replay"), G_UIHelper.refreshFreeWayOfBtn(this.fuhuo_Btn), 
                this.bgBtn && this.bgBtn && this.bgBtn.on("click", null, function() {
                    G_UIManager.hideUI("failView"), G_UIManager.showUI("startView"), G_SoundMgr.playSound("res/sounds/anniu.mp3"), 
                    playCtrl.initGame();
                }.bind(this));
            }
        } ]);
        return Fe;
    }(Me);
    var je = /* */ function(_Me7) {
        _inherits2(je, _Me7);
        var _super39 = _createSuper2(je);
        function je() {
            _classCallCheck2(this, je);
            return _super39.call(this);
        }
        _createClass2(je, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType, 
                this.get_coin_btn = null;
            }
        }, {
            key: "showUI",
            value: function showUI() {
                _get2(_getPrototypeOf2(je.prototype), "showUI", this).call(this), this.plus_coin_btn_anim();
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                _get2(_getPrototypeOf2(je.prototype), "hideUI", this).call(this);
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                var e = G_UIHelper.seekNodeByName(this.owner, "closeBtn");
                e && e.on("click", null, function() {
                    G_SoundMgr.playSound("res/sounds/anniu.mp3"), G_UIManager.hideUI("plusCoinView");
                }.bind(this)), this.get_coin_btn = G_UIHelper.seekNodeByName(this.owner, "get_coin_btn"), 
                G_UIHelper.refreshFreeWayOfBtn(this.get_coin_btn), this.get_coin_btn.on("click", null, function() {
                    G_SoundMgr.playSound("res/sounds/anniu.mp3"), this.get_coin_btn.doTouch(G_ShareScene.SS_SHARE_APP, function() {
                        this.getCoin();
                    }.bind(this));
                }.bind(this));
            }
        }, {
            key: "getCoin",
            value: function getCoin() {
                G_PlayerInfo.addCoin(300), G_PlatHelper.showToast("恭喜您获得了300金币！"), G_UIManager.getUI("startView")[1].onCoinChange(), 
                G_UIManager.hideUI("plusCoinView");
            }
        }, {
            key: "plus_coin_btn_anim",
            value: function plus_coin_btn_anim() {
                He.uiScaleAnimation(this.get_coin_btn, Laya.Handler.create(this, this.plus_coin_btn_anim), .9, 1.1, 5);
            }
        } ]);
        return je;
    }(Me);
    var ze = /* */ function(_Me8) {
        _inherits2(ze, _Me8);
        var _super40 = _createSuper2(ze);
        function ze() {
            _classCallCheck2(this, ze);
            return _super40.call(this);
        }
        _createClass2(ze, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType, 
                this.num = 0, this.firstNoSkin = 1;
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "showUI",
            value: function showUI(e) {
                _get2(_getPrototypeOf2(ze.prototype), "showUI", this).call(this), d.showFinishView(function() {
                    0 == this.num ? (this.click_btn.visible = !1, this.num = 1, this.owner.alp1.play(0, 0)) : (this.click_btn.visible = !0, 
                    this.btn_anim(), this.num = 0, this.owner.alp2.play(0, 0)), this.firstNoSkin = e, 
                    this.skinPic.skin = "game/start/pp" + (this.firstNoSkin + 1) + ".png";
                }.bind(this));
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                _get2(_getPrototypeOf2(ze.prototype), "hideUI", this).call(this);
            }
        }, {
            key: "btn_anim",
            value: function btn_anim() {
                He.uiScaleAnimation(this.click_btn, Laya.Handler.create(this, this.btn_anim), .95, 1.1, 5);
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                this.skinPic = G_UIHelper.seekNodeByName(this.owner, "Pic");
                var e = G_UIHelper.seekNodeByName(this.owner, "close");
                e && e.on("click", null, function() {
                    G_UIManager.hideUI("giftView"), playCtrl.initGame();
                }.bind(this)), this.click_btn = G_UIHelper.seekNodeByName(this.owner, "click_btn"), 
                G_UIHelper.refreshFreeWayOfBtn(this.click_btn), this.click_btn && this.click_btn.on("click", null, function() {
                    this.click_btn.doTouch(G_ShareScene.SS_SHARE_APP, function() {
                        G_UIManager.hideUI("giftView"), G_PlayerInfo.unlockWeaponSkin(this.firstNoSkin), 
                        G_PlatHelper.showToast("恭喜您解锁了新的抓捕者皮肤！"), playCtrl.initGame();
                    }.bind(this));
                }.bind(this));
            }
        } ]);
        return ze;
    }(Me);
    var Ke = /* */ function(_Me9) {
        _inherits2(Ke, _Me9);
        var _super41 = _createSuper2(Ke);
        function Ke() {
            _classCallCheck2(this, Ke);
            return _super41.call(this);
        }
        _createClass2(Ke, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType, 
                this.get_coin_btn = null;
            }
        }, {
            key: "showUI",
            value: function showUI() {
                _get2(_getPrototypeOf2(Ke.prototype), "showUI", this).call(this);
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                _get2(_getPrototypeOf2(Ke.prototype), "hideUI", this).call(this);
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                var e = G_UIHelper.seekNodeByName(this.owner, "closeBtn");
                e && e.on("click", null, function() {
                    G_SoundMgr.playSound("res/sounds/anniu.mp3"), G_UIManager.hideUI("plusPowerView");
                }.bind(this)), this.get_coin_btn = G_UIHelper.seekNodeByName(this.owner, "get_coin_btn"), 
                this.get_coin_btn.on("click", null, function() {
                    G_SoundMgr.playSound("res/sounds/anniu.mp3"), G_PlayerInfo.getCoin() >= 100 ? this.getCoin() : (G_PlatHelper.showToast("金币不足！"), 
                    G_UIManager.hideUI("plusPowerView"), G_UIManager.showUI("plusCoinView"));
                }.bind(this));
            }
        }, {
            key: "getCoin",
            value: function getCoin() {
                var e = G_PlayerInfo.getPowerNum();
                e >= 5 ? G_PlatHelper.showToast("您的体力已达最大值！") : (G_PlayerInfo.downCoin(100), e += 1, 
                G_PlayerInfo.setPowerNum(e), G_PlatHelper.showToast("体力购买成功！"), G_UIManager.getUI("startView")[1].power_num.text = e, 
                G_UIManager.getUI("startView")[1].onCoinChange(), G_UIManager.hideUI("plusPowerView"));
            }
        } ]);
        return Ke;
    }(Me);
    var qe = /* */ function(_Me10) {
        _inherits2(qe, _Me10);
        var _super42 = _createSuper2(qe);
        function qe() {
            _classCallCheck2(this, qe);
            return _super42.call(this);
        }
        _createClass2(qe, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
            }
        }, {
            key: "showUI",
            value: function showUI() {
                _get2(_getPrototypeOf2(qe.prototype), "showUI", this).call(this), G_PlayerInfo.getSignTime() != G_ServerInfo.getCurServerDayOfYear() ? this.get_btn.lable = "领取" : (this.get_btn.disabled = !0, 
                this.get_btn.lable = "已签到"), this.showSign();
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "showSign",
            value: function showSign() {
                var e = G_PlayerInfo.getSignDay();
                this.day1.getChildByName("gou").visible = e >= 1, this.day2.getChildByName("gou").visible = e >= 2, 
                this.day3.getChildByName("gou").visible = 3 == e;
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                this.day1 = G_UIHelper.seekNodeByName(this.owner, "day1"), this.day2 = G_UIHelper.seekNodeByName(this.owner, "day2"), 
                this.day3 = G_UIHelper.seekNodeByName(this.owner, "day3");
                var e = G_UIHelper.seekNodeByName(this.owner, "closeBtn");
                e && e.on("click", null, function() {
                    d.showTempHide(), G_SoundMgr.playSound("res/sounds/anniu.mp3"), G_UIManager.hideUI("signView");
                }.bind(this)), this.get_btn = G_UIHelper.seekNodeByName(this.owner, "get_coin_btn"), 
                this.get_btn.on("click", null, function() {
                    G_SoundMgr.playSound("res/sounds/anniu.mp3"), this.get_btn.lable = "已签到";
                    var e = G_PlayerInfo.getSignDay();
                    if (4 == ++e) e = 0; else if (1 == e) G_PlayerInfo.addCoin(200), G_PlatHelper.showToast("成功获得了200金币！"), 
                    G_UIManager.getUI("startView")[1].onCoinChange(); else if (2 == e) G_PlayerInfo.addCoin(500), 
                    G_PlatHelper.showToast("成功获得了500金币！"), G_UIManager.getUI("startView")[1].onCoinChange(); else if (3 == e) {
                        var _e88 = G_PlayerInfo.getUnlockWeaponSkin(), _t86 = -1;
                        for (var _n51 = 0; _n51 < 6; _n51++) {
                            if (-1 == _e88.indexOf(_n51.toString())) {
                                _t86 = _n51;
                                break;
                            }
                        }
                        -1 != _t86 ? (G_PlayerInfo.unlockWeaponSkin(_t86), G_PlatHelper.showToast("成功解锁了新的抓捕者！")) : G_PlatHelper.showToast("您已经解锁了全部皮肤了！");
                    }
                    G_PlayerInfo.setSignDay(e), G_PlayerInfo.setSignTime(G_ServerInfo.getCurServerDayOfYear()), 
                    this.showSign(), this.get_btn.disabled = !0;
                }.bind(this));
            }
        } ]);
        return qe;
    }(Me);
    var Ye = /* */ function(_Me11) {
        _inherits2(Ye, _Me11);
        var _super43 = _createSuper2(Ye);
        function Ye() {
            _classCallCheck2(this, Ye);
            return _super43.call(this);
        }
        _createClass2(Ye, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType, 
                this.num = 0, this.changeList = [ "yizi", "yizi1", "yizi2", "yizi3", "yizi4", "yizi5", "canjia", "penzai1", "penzai2", "waterCooler", "matong", "lideng", "guizi", "lajitong1", "lajitong2" ];
            }
        }, {
            key: "showUI",
            value: function showUI(e, t) {
                _get2(_getPrototypeOf2(Ye.prototype), "showUI", this).call(this), this.num = t, 
                this.timeNum = 3, this.a = G_Utils.random(1, 15) - 1, this.b = G_Utils.random(1, 15) - 1, 
                this.select1.getChildByName("pic").skin = "game/jiaju/" + e + ".png", this.select2.getChildByName("pic").skin = "game/jiaju/" + this.changeList[this.a] + ".png", 
                this.select3.getChildByName("pic").skin = "game/jiaju/" + this.changeList[this.b] + ".png", 
                this.time.skin = "game/xin/3.png", Laya.timer.loop(1500, this, this.showTime);
            }
        }, {
            key: "showTime",
            value: function showTime() {
                this.timeNum--, this.timeNum <= 0 ? (Laya.timer.clearAll(this), this.hideView(0), 
                G_UIManager.hideUI("selectView")) : this.time.skin = "game/xin/" + this.timeNum + ".png";
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                this.select1 = G_UIHelper.seekNodeByName(this.owner, "select1"), this.select2 = G_UIHelper.seekNodeByName(this.owner, "select2"), 
                this.select3 = G_UIHelper.seekNodeByName(this.owner, "select3"), this.time = G_UIHelper.seekNodeByName(this.owner, "time"), 
                this.select1.getChildByName("xuan").on("click", null, function() {
                    this.hideView(0);
                }.bind(this));
                var e = this.select2.getChildByName("xuan");
                G_UIHelper.refreshFreeWayOfBtn(e, "game/xin/toumbof.png", "game/xin/toumbof.png"), 
                e.on("click", null, function() {
                    Laya.timer.clearAll(this), e.doTouch(G_ShareScene.SS_SHARE_APP, function() {
                        this.hideView(this.changeList[this.a]);
                    }.bind(this), function() {
                        this.hideView(0);
                    }.bind(this));
                }.bind(this));
                var t = this.select3.getChildByName("xuan");
                G_UIHelper.refreshFreeWayOfBtn(t, "game/xin/toumbof.png", "game/xin/toumbof.png"), 
                t.on("click", null, function() {
                    Laya.timer.clearAll(this), t.doTouch(G_ShareScene.SS_SHARE_APP, function() {
                        this.hideView(this.changeList[this.b]);
                    }.bind(this), function() {
                        this.hideView(0);
                    }.bind(this));
                }.bind(this));
            }
        }, {
            key: "hideView",
            value: function hideView(e) {
                G_SoundMgr.playSound("res/sounds/anniu.mp3"), G_UIManager.hideUI("selectView"), 
                Laya.timer.clearAll(this), playCtrl.changeJiaJu(e);
                var t = 20;
                0 != e && (t = 32), playCtrl.startCamera(this.num, t);
            }
        } ]);
        return Ye;
    }(Me);
    var Xe = /* */ function(_Me12) {
        _inherits2(Xe, _Me12);
        var _super44 = _createSuper2(Xe);
        function Xe() {
            var _this62;
            _classCallCheck2(this, Xe);
            _this62 = _super44.call(this), _this62.self = null, _this62.progressBar = null, 
            _this62.click_tip = null, _this62.lable = 1;
            return _this62;
        }
        _createClass2(Xe, [ {
            key: "onAwake",
            value: function onAwake() {
                this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType, 
                this.addNum = null, this.rangeNum = null, this.showAdv = parseInt(G_Switch.getConfigByKey("boxCfg"));
            }
        }, {
            key: "showUI",
            value: function showUI(e) {
                _get2(_getPrototypeOf2(Xe.prototype), "showUI", this).call(this), this.lable = e, 
                this.progressBar.value = 0;
                var t = G_Switch.getConfigByKey("clickMistakeCfg").split("||");
                this.downNum = parseFloat(t[0]), this.addNum = parseFloat(t[1]), this.rangeNum = parseInt(t[2]), 
                this.isOpendBanner = !1, Laya.timer.frameLoop(1, this, this.progressBarLogic);
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                _get2(_getPrototypeOf2(Xe.prototype), "hideUI", this).call(this), Laya.timer.clearAll(this);
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._initUI();
            }
        }, {
            key: "_initUI",
            value: function _initUI() {
                this.progressBar = G_UIHelper.seekNodeByName(this.owner, "progressBar"), this.click_tip = G_UIHelper.seekNodeByName(this.owner, "click_tip"), 
                this.click_tip_anim();
                var e = G_UIHelper.seekNodeByName(this.owner, "click_btn");
                e && e.on("click", null, function() {
                    G_UIHelper.playBtnTouchAction(e), this.progressBar.value += this.addNum;
                }.bind(this));
            }
        }, {
            key: "click_tip_anim",
            value: function click_tip_anim() {
                He.uiScaleAnimation(this.click_tip, Laya.Handler.create(this, this.click_tip_anim), .9, 1.1, 1);
            }
        }, {
            key: "progressBarLogic",
            value: function progressBarLogic() {
                this.progressBar.value > 0 && (this.progressBar.value > this.rangeNum / 100 && !this.isOpendBanner && (this.isOpendBanner = !0, 
                1 == this.showAdv ? (G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD), this.closeView()) : (G_UIManager.getUI("startView")[1].start_click_btn.doTouch(G_ShareScene.SS_SHARE_APP, function() {
                    this.closeView();
                }.bind(this), function() {
                    this.closeView();
                }.bind(this)), G_UIManager.getUI("startView")[1].showDaoBox())), this.progressBar.value -= Laya.timer._delta * this.downNum, 
                this.progressBar.value < 0 && (this.progressBar.value = 0));
            }
        }, {
            key: "closeView",
            value: function closeView() {
                Laya.timer.once(1500, this, function() {
                    Laya.timer.clear(this, this.progressBarLogic), G_PlayerInfo.addCoin(300), G_PlatHelper.showToast("恭喜您获得了300金币！"), 
                    G_UIManager.hideUI("startMistakeView");
                });
            }
        } ]);
        return Xe;
    }(Me);
    [ {
        key: "startView",
        zOrder: 10,
        isAutoDestory: !1,
        cls: xe,
        prefab: "prefab/startView.json"
    }, {
        key: "gameView",
        zOrder: 11,
        isAutoDestory: !1,
        cls: Ve,
        prefab: "prefab/gameView.json"
    }, {
        key: "giftView",
        zOrder: 11,
        isAutoDestory: !1,
        cls: ze,
        prefab: "prefab/giftView.json"
    }, {
        key: "successView",
        zOrder: 11,
        isAutoDestory: !1,
        cls: We,
        prefab: "prefab/successView.json"
    }, {
        key: "failView",
        zOrder: 11,
        isAutoDestory: !1,
        cls: Fe,
        prefab: "prefab/failView.json"
    }, {
        key: "plusCoinView",
        zOrder: 16,
        isAutoDestory: !1,
        cls: je,
        prefab: "prefab/plusCoinView.json"
    }, {
        key: "skinView",
        zOrder: 11,
        isAutoDestory: !1,
        cls: /* */ function(_Me13) {
            _inherits2(cls, _Me13);
            var _super45 = _createSuper2(cls);
            function cls() {
                var _this63;
                _classCallCheck2(this, cls);
                _this63 = _super45.call(this), _this63.skin_list = null, _this63.close_btn = null, 
                _this63.unlock_btn = null, _this63.coin_num = null, _this63.curr_indx = 0, _this63.skin_Weapon_List = [ {
                    id: 0,
                    img: "guai1.png",
                    coin: 500
                }, {
                    id: 1,
                    img: "guai2.png",
                    coin: 0
                }, {
                    id: 2,
                    img: "guai3.png",
                    coin: 600
                }, {
                    id: 3,
                    img: "guai4.png",
                    coin: 800
                }, {
                    id: 4,
                    img: "guai5.png",
                    coin: 500
                }, {
                    id: 5,
                    img: "guai6.png",
                    coin: 0
                }, {
                    id: 6,
                    img: "guai7.png",
                    coin: 0
                }, {
                    id: 7,
                    img: "guai8.png",
                    coin: 1e3
                }, {
                    id: 8,
                    img: "guai9.png",
                    coin: 800
                }, {
                    id: 9,
                    img: "guai10.png",
                    coin: 0
                } ];
                return _this63;
            }
            _createClass2(cls, [ {
                key: "onAwake",
                value: function onAwake() {
                    this._rootNode = this.rootNode, this._openType = this.openType, this._closeType = this.closeType;
                }
            }, {
                key: "showUI",
                value: function showUI() {
                    _get2(_getPrototypeOf2(cls.prototype), "showUI", this).call(this), this.curr_indx = 0, 
                    this.leftBtn.visible = 0 != this.curr_indx, this.rightBtn.visible = 9 != this.curr_indx, 
                    dPlayer.getChildByName("Plane")._children[0].active = !1, dPlayer.getChildByName("Plane")._children[1].active = !1, 
                    isShowYuan && G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD);
                }
            }, {
                key: "hideUI",
                value: function hideUI() {
                    _get2(_getPrototypeOf2(cls.prototype), "hideUI", this).call(this), dPlayer.getChildByName("Plane")._children[0].active = !0, 
                    dPlayer.getChildByName("Plane")._children[1].active = !0;
                }
            }, {
                key: "initWeaponSkinList",
                value: function initWeaponSkinList() {
                    this.onSelect(this.curr_indx), this.disbaleUnlockBtn();
                }
            }, {
                key: "onSelect",
                value: function onSelect(e) {
                    var t = dPlayer.addChild(Laya.Loader.getRes("res/scene/LayaScene_mode/Conventional/guai" + (this.curr_indx + 1) + ".lh").clone());
                    t.transform.position = new Laya.Vector3(0, 0, 0), dPlayer.getChildByName("mode").removeSelf(), 
                    playerCtrl.mode = t, t.name = "mode", t.getComponent(Laya.Animator).play("Idle"), 
                    t.addComponent(AniCtrl), this.curr_indx = e;
                    var n = null;
                    if ((n = G_PlayerInfo.getUnlockWeaponSkin()).indexOf(e.toString()) > -1) this.disbaleUnlockBtn(); else {
                        t.getChildByName("body").skinnedMeshRenderer.sharedMaterial = gameScene.getChildByName("Quad").meshRenderer.sharedMaterial;
                        var _e89 = G_UIHelper.seekNodeByName(t, "eye");
                        _e89 && (_e89.meshRenderer.sharedMaterial = gameScene.getChildByName("Quad").meshRenderer.sharedMaterial), 
                        t.getChildByName("Face") && (t.getChildByName("Face").skinnedMeshRenderer.sharedMaterial = gameScene.getChildByName("Quad").meshRenderer.sharedMaterial), 
                        t.getChildByName("hair") && (t.getChildByName("hair").skinnedMeshRenderer.sharedMaterial = gameScene.getChildByName("Quad").meshRenderer.sharedMaterial);
                        var _n52 = this.skin_Weapon_List[this.curr_indx].coin;
                        this.coin_num.text = _n52, 0 == _n52 ? this.videoLockSkin() : G_PlayerInfo.getCoin() >= _n52 ? this.enableUnlockBtn() : this.notEnoughCoin();
                    }
                }
            }, {
                key: "onEnable",
                value: function onEnable() {
                    this._initUI();
                }
            }, {
                key: "_initUI",
                value: function _initUI() {
                    this.coin_num = G_UIHelper.seekNodeByName(this.owner, "coinNumber"), this.unlock_btn = G_UIHelper.seekNodeByName(this.owner, "unlock_btn"), 
                    this.leftBtn = G_UIHelper.seekNodeByName(this.owner, "left"), this.rightBtn = G_UIHelper.seekNodeByName(this.owner, "right"), 
                    G_UIHelper.refreshFreeWayOfBtn(this.unlock_btn), this.disbaleUnlockBtn(), this.close_btn = G_UIHelper.seekNodeByName(this.owner, "close_btn"), 
                    this.close_btn.on("click", null, function() {
                        G_UIManager.hideUI("skinView"), G_UIHelper.tweenMoveCamera(gameScene.getChildByName("Main Camera"), 1e3, !1, {
                            position: new Laya.Vector3(-2, 2.3, 4.5),
                            rotationEuler: new Laya.Vector3(-14, -23, 0),
                            fieldOfView: 60
                        }, {
                            position: new Laya.Vector3(-2.3, 7, 6),
                            rotationEuler: new Laya.Vector3(-48, -20, 0),
                            fieldOfView: 60
                        }, !1, function() {
                            if (G_PlayerInfo.getUnlockWeaponSkin().indexOf(this.curr_indx.toString()) <= -1) {
                                var _e90 = dPlayer.addChild(Laya.Loader.getRes("res/scene/LayaScene_mode/Conventional/guai" + (G_PlayerInfo.getCurrWeaponSkin() + 1) + ".lh").clone());
                                _e90.transform.position = new Laya.Vector3(0, 0, 0), dPlayer.getChildByName("mode").removeSelf(), 
                                playerCtrl.mode = _e90, _e90.name = "mode", _e90.getComponent(Laya.Animator).play("Idle"), 
                                _e90.addComponent(AniCtrl);
                            }
                            G_UIManager.showUI("startView");
                        }.bind(this));
                    }.bind(this)), this.leftBtn.on("click", null, function() {
                        this.curr_indx--, this.leftBtn.visible = 0 != this.curr_indx, this.rightBtn.visible = 9 != this.curr_indx, 
                        this.onSelect(this.curr_indx);
                    }.bind(this)), this.rightBtn.on("click", null, function() {
                        this.curr_indx++, this.leftBtn.visible = 0 != this.curr_indx, this.rightBtn.visible = 9 != this.curr_indx, 
                        this.onSelect(this.curr_indx);
                    }.bind(this));
                }
            }, {
                key: "enableUnlockBtn",
                value: function enableUnlockBtn() {
                    this.unlock_btn.getChildByName("grey_bg").visible = !1, this.unlock_btn.getChildByName("jie_suo_coin").visible = !0, 
                    this.unlock_btn.getChildByName("video").visible = !1, this.unlock_btn.off("click"), 
                    this.unlock_btn.on("click", null, function() {
                        G_UIHelper.playBtnTouchAction(this.unlock_btn, function() {
                            G_PlayerInfo.unlockWeaponSkin(this.curr_indx), G_PlayerInfo.setCurrWeaponSkin(this.curr_indx), 
                            this.initWeaponSkinList(), G_PlayerInfo.downCoin(parseInt(this.coin_num.text)), 
                            G_UIManager.getUI("startView")[1].onCoinChange();
                        }.bind(this));
                    }.bind(this));
                }
            }, {
                key: "notEnoughCoin",
                value: function notEnoughCoin() {
                    this.unlock_btn.getChildByName("grey_bg").visible = !0, this.unlock_btn.getChildByName("jie_suo_coin").visible = !0, 
                    this.unlock_btn.getChildByName("video").visible = !1, this.unlock_btn.off("click"), 
                    this.unlock_btn.on("click", null, function() {
                        G_UIManager.showUI("plusCoinView");
                    }.bind(this));
                }
            }, {
                key: "disbaleUnlockBtn",
                value: function disbaleUnlockBtn() {
                    this.unlock_btn.getChildByName("grey_bg").visible = !0, this.unlock_btn.getChildByName("jie_suo_coin").visible = !1, 
                    this.unlock_btn.getChildByName("video").visible = !1, this.unlock_btn.off("click"), 
                    this.unlock_btn.on("click", null, function() {
                        G_UIManager.hideUI("skinView"), G_UIHelper.tweenMoveCamera(gameScene.getChildByName("Main Camera"), 1e3, !1, {
                            position: new Laya.Vector3(-2, 2.3, 4.5),
                            rotationEuler: new Laya.Vector3(-14, -23, 0),
                            fieldOfView: 60
                        }, {
                            position: new Laya.Vector3(-2.3, 7, 6),
                            rotationEuler: new Laya.Vector3(-48, -20, 0),
                            fieldOfView: 60
                        }, !1, function() {
                            if (G_PlayerInfo.getUnlockWeaponSkin().indexOf(this.curr_indx.toString()) <= -1) {
                                var _e91 = dPlayer.addChild(Laya.Loader.getRes("res/scene/LayaScene_mode/Conventional/guai" + (G_PlayerInfo.getCurrWeaponSkin() + 1) + ".lh").clone());
                                _e91.transform.position = new Laya.Vector3(0, 0, 0), dPlayer.getChildByName("mode").removeSelf(), 
                                playerCtrl.mode = _e91, _e91.name = "mode", _e91.getComponent(Laya.Animator).play("Idle"), 
                                _e91.addComponent(AniCtrl);
                            }
                            G_UIManager.showUI("startView");
                        }.bind(this)), G_PlayerInfo.setCurrWeaponSkin(this.curr_indx);
                    }.bind(this));
                }
            }, {
                key: "videoLockSkin",
                value: function videoLockSkin() {
                    this.unlock_btn.getChildByName("grey_bg").visible = !1, this.unlock_btn.getChildByName("jie_suo_coin").visible = !1, 
                    this.unlock_btn.getChildByName("video").visible = !0, this.unlock_btn.off("click"), 
                    this.unlock_btn.on("click", null, function() {
                        this.unlock_btn.doTouch(G_ShareScene.SS_SHARE_APP, function() {
                            G_PlayerInfo.unlockWeaponSkin(this.curr_indx), G_PlayerInfo.setCurrWeaponSkin(this.curr_indx), 
                            this.initWeaponSkinList();
                        }.bind(this));
                    }.bind(this));
                }
            } ]);
            return cls;
        }(Me),
        prefab: "prefab/skinView.json"
    }, {
        key: "plusPowerView",
        zOrder: 16,
        isAutoDestory: !1,
        cls: Ke,
        prefab: "prefab/plusPowerView.json"
    }, {
        key: "signView",
        zOrder: 16,
        isAutoDestory: !1,
        cls: qe,
        prefab: "prefab/signView.json"
    }, {
        key: "selectView",
        zOrder: 16,
        isAutoDestory: !1,
        cls: Ye,
        prefab: "prefab/selectView.json"
    }, {
        key: "startMistakeView",
        zOrder: 16,
        isAutoDestory: !1,
        cls: Xe,
        prefab: "prefab/startMistakeView.json"
    } ].forEach(function(e) {
        Ue.push(e);
    });
    var Je = function() {
        var e;
        return {
            getInstance: function getInstance() {
                return e || (e = function() {
                    console.log("Init G_UIManager Instance...");
                    var e = {}, t = null, n = function n(e) {
                        return "string" == typeof e && "" !== e;
                    };
                    return {
                        registerUIRoot: function registerUIRoot(e) {
                            t = e;
                        },
                        unregisterUIRoot: function unregisterUIRoot() {
                            t = null;
                        },
                        registerAllUIs: function registerAllUIs() {
                            var _this64 = this;
                            Ue.forEach(function(e) {
                                _this64.registerUI(e.key, e.zOrder, e.isAutoDestory, e.cls, e.prefab);
                            });
                        },
                        registerUI: function registerUI(t, i, o, a, r) {
                            n(t) ? void 0 === e[t] ? n(r) && r.lastIndexOf(".json") === r.length - 5 ? (e[t] = {
                                key: t,
                                zOrder: i,
                                isAutoDestory: o,
                                cls: a,
                                prefab: r,
                                prefabObj: null,
                                node: null,
                                clsObj: null,
                                closeCb: null
                            }, Laya.loader.create(r, Laya.Handler.create(null, function(n) {
                                e[t].prefabObj = n;
                            })), console.log("UIManager.registerUI: {0} UI has registered successful...".format(t))) : console.error("UIManager.registerUI: prefab must be a type of string and not empty and end with '.json'...") : console.error("UIManager.registerUI: {0} has registered before...".format(t)) : console.error("UIManager.registerUI: key must be a type of string and not empty...");
                        },
                        unregisterUI: function unregisterUI(t) {
                            this._doCheck(t, "unregisterUI") && (delete e[t], console.log("UIManager.unregisterUI: {0} UI has unregistered successful...".format(t)));
                        },
                        showUI: function showUI(e, n) {
                            var i = this._doCheck(e, "showUI");
                            if (i) {
                                if (!i.node) {
                                    var _e92 = new Laya.Prefab();
                                    _e92.json = i.prefabObj, i.node = _e92.create(), i.node && ("string" == typeof i.cls ? i.clsObj = G_UIHelper.getComponentByName(i.node, i.cls) : i.clsObj = i.node.getComponent(i.cls), 
                                    i.node.zOrder = i.zOrder, t.addChild(i.node));
                                }
                                if (i.closeCb = n, arguments.length > 2) {
                                    var _e93 = Array.prototype.slice.call(arguments);
                                    _e93.shift(), _e93.shift(), i.clsObj.showUI.apply(i.clsObj, _e93);
                                } else i.clsObj.showUI.apply(i.clsObj, []);
                                return [ i.node, i.clsObj ];
                            }
                            return null;
                        },
                        hideUI: function hideUI(e) {
                            var t = this._doCheck(e, "hideUI");
                            if (t && t.node) {
                                var _e94 = null;
                                _e94 = function() {
                                    t.clsObj.unregisterCallback("close", _e94), "function" == typeof t.closeCb && (t.closeCb(), 
                                    t.closeCb = null), t.isAutoDestory && this._destroyUI(t);
                                }.bind(this), t.clsObj.registerCallback("close", _e94), t.clsObj.hideUI();
                            }
                        },
                        getUI: function getUI(e) {
                            var t = this._doCheck(e, "getUI");
                            return t ? [ t.node, t.clsObj ] : null;
                        },
                        preloadUI: function preloadUI(e, t) {
                            var n = [];
                            if ("string" == typeof e) {
                                var _t87 = e;
                                n.push(this._doPreloadUI(_t87));
                            } else if (Array.isArray(e)) for (var _t88 = 0; _t88 < e.length; _t88++) {
                                var _i35 = e[_t88];
                                n.push(this._doPreloadUI(_i35));
                            }
                            G_Scheduler.schedule("UIManager_Preload_UI", function() {
                                for (var _e95 = 0; _e95 < n.length; _e95++) {
                                    var _t89 = n[_e95];
                                    _t89.visible = !1, _t89.opacity = 255;
                                }
                                "function" == typeof t && t();
                            }.bind(this), !1, 100, 0);
                        },
                        _doPreloadUI: function _doPreloadUI(e) {
                            if (this._doCheck(e, "preloadUI")) {
                                var _t90 = this.showUI(e), _n53 = null;
                                if (_t90 && (_n53 = _t90[0]), _n53) return _n53.opacity = 0, _n53;
                            }
                            return null;
                        },
                        _doCheck: function _doCheck(t, i) {
                            if (!n(t)) return console.error("UIManager.{0}: key must be a type of string and not empty...".format(i)), 
                            null;
                            var o = e[t];
                            return void 0 === o ? (console.error("UIManager.{0}: {1} has not registered before...".format(i, t)), 
                            null) : o;
                        },
                        _destroyUI: function _destroyUI(e) {
                            e && e.node && (e.node.destroy(), e.node = null);
                        }
                    };
                }()), e;
            }
        };
    }();
    window.G_UIManager = Je.getInstance();
    var Qe = 1;
    var Ze = function() {
        var e;
        function init() {
            console.log("Init G_RedPackageMgr Instance...");
            var e = null;
            return {
                iniCfgs: function iniCfgs(t) {
                    console.log("init red package config: ", t), e = t;
                },
                depositMoney: function depositMoney(t) {
                    if ("function" != typeof t) return;
                    if (!e) return console.error("depositMoney fail, check web config..."), void t(!1, "未检查到相应红包网络配置");
                    var n = function() {
                        if (e && e.redPack.length > 0) {
                            var _t91 = G_PlayerInfo.getTotalGotRedPackageCount() + 1, _n54 = -1, _i36 = -1;
                            for (var _o18 = 0; _o18 < e.redPack.length; _o18++) {
                                var _a15 = e.redPack[_o18];
                                _a15.redPackStartNum <= _t91 && _a15.redPackEndNum >= _t91 && (_n54 = _a15.redPackMinMoney, 
                                _i36 = _a15.redPackMaxMoney);
                            }
                            if (-1 === _n54) {
                                var _t92 = e.redPack[e.redPack.length - 1];
                                _n54 = _t92.redPackMinMoney, _i36 = _t92.redPackMaxMoney;
                            }
                            return console.log("{0} time to deposit money, min: {1}, max: {2}".format(_t91.toString(), _n54.toString(), _i36.toString())), 
                            G_Utils.random(_n54, _i36);
                        }
                        return 0;
                    }();
                    if (0 === n) return console.error("depositMoney fail, check web config..."), void t(!1, "未检查到相应红包网络配置");
                    G_NetHelper.reqDepositMoney(G_PlayerInfo.getSessID(), Qe, n, function(e) {
                        e && 0 === e.code ? (G_PlayerInfo.depositMoney(n), G_PlayerInfo.addTotalGotRedPackageCount(), 
                        t(!0, n)) : t(!1, "当前网络异常，请稍后重试");
                    });
                },
                withdrawMoney: function withdrawMoney(t, n) {
                    if ("function" != typeof n) return;
                    if (!e) return console.error("withdrawMoney fail, check web config..."), void n(!1, "未检查到相应提取网络配置");
                    if ("number" != typeof t) return console.error("withdrawMoney fail, check input...", t), 
                    void n(!1, "提取金额错误");
                    if (G_PlayerInfo.getMoney() < t) return console.warn("withdrawMoney fail, not enough money..."), 
                    void n(!1, "余额不足");
                    G_NetHelper.reqWithdrawMoney(G_PlayerInfo.getSessID(), t, G_PlayerInfo.getTodayAdvTimes(), G_PlayerInfo.getTotalAdvTimes(), function(e) {
                        e && 0 === e.code ? (G_PlayerInfo.withdrawMoney(t), n(!0, t)) : n(!1, "当前提取人数过多，请稍后尝试");
                    });
                },
                withdrawEverydayMoney: function withdrawEverydayMoney(t) {
                    if ("function" != typeof t) return;
                    if (!e) return console.error("withdrawEverydayMoney fail, check web config..."), 
                    void t(!1, "未检查到相应提取网络配置");
                    if (G_PlayerInfo.isWithdrawEverydayMoneyToday()) return console.warn("withdrawEverydayMoney fail, withdrawed before..."), 
                    void t(!1, "您今天已经提取过了");
                    if (G_PlayerInfo.getTodayAdvTimes() < e.everydayWithdraw.currentDayVideoNum) return console.warn("withdrawEverydayMoney fail, need more adv times..."), 
                    void t(!1, "当前广告观看次数不够");
                    var n = function() {
                        return e && e.everydayWithdraw.minMoney <= e.everydayWithdraw.maxMoney ? G_Utils.random(e.everydayWithdraw.minMoney, e.everydayWithdraw.maxMoney) : 0;
                    }();
                    if (0 === n) return console.error("withdrawEverydayMoney fail, check web config..."), 
                    void t(!1, "未检查到相应提取网络配置");
                    G_NetHelper.reqWithdrawEverydayMoney(G_PlayerInfo.getSessID(), n, G_PlayerInfo.getTodayAdvTimes(), G_PlayerInfo.getTotalAdvTimes(), G_ServerInfo.getCurServerDayOfYear(), function(e) {
                        e && 0 === e.code ? (G_PlayerInfo.withdrawEverydayMoney(n), t(!0, n)) : t(!1, "当前提取人数过多，请稍后尝试");
                    });
                },
                getMoney: function getMoney() {
                    return G_PlayerInfo.getMoney();
                },
                getTotalWithdrawMoney: function getTotalWithdrawMoney() {
                    return G_PlayerInfo.getTotalWithdrawMoney();
                },
                getTotalWithdrawMoneyTimes: function getTotalWithdrawMoneyTimes() {
                    return G_PlayerInfo.getTotalWithdrawMoneyTimes();
                },
                isWithdrawEverydayMoneyToday: function isWithdrawEverydayMoneyToday() {
                    return G_PlayerInfo.isWithdrawEverydayMoneyToday();
                },
                getNeedAdvTimesOfEverydayMoney: function getNeedAdvTimesOfEverydayMoney() {
                    return e ? e.everydayWithdraw.currentDayVideoNum : 0;
                },
                getAllDepositOptions: function getAllDepositOptions() {
                    var t = [];
                    if (e && e.withdraw.length > 0) for (var _n55 = 0; _n55 < e.withdraw.length; _n55++) {
                        var _i37 = e.withdraw[_n55];
                        t.push(_i37.withdrawMoney);
                    }
                    return t.length > 0 && (t.sort(function(e, t) {
                        return e - t;
                    }), (this.getTotalWithdrawMoney() > 0 || this.getTotalWithdrawMoneyTimes() > 0) && t.splice(0, 1)), 
                    t;
                }
            };
        }
        return {
            getInstance: function getInstance() {
                return e || (e = init()), e;
            }
        };
    }();
    window.G_RedPackageMgr = Ze.getInstance();
    var $e = function() {
        var e, t = function t() {
            var e = G_PlatHelper.getStorage("my_video_ids_of_player_{0}".format(G_PlayerInfo.getOpenID()));
            if (e && "" !== e) {
                return JSON.parse(e);
            }
            return [];
        }, n = function n(e) {
            var t = G_PlatHelper.getStorage("my_video_ids_of_player_{0}".format(G_PlayerInfo.getOpenID())), n = null;
            (n = t && "" !== t ? JSON.parse(t) : []).push(e), G_PlatHelper.setStorage("my_video_ids_of_player_{0}".format(G_PlayerInfo.getOpenID()), JSON.stringify(n));
        };
        return {
            getInstance: function getInstance() {
                return e || (console.log("Init G_VideoRankMgr Instance..."), e = {
                    refreshAndReport: function refreshAndReport() {
                        if (!G_PlatHelper.isTTPlatform()) return;
                        var e = t();
                        e.length > 0 && G_PlatHelper.getPlat().request({
                            url: "https://gate.snssdk.com/developer/api/get_video_info",
                            method: "POST",
                            data: {
                                alias_ids: e
                            },
                            success: function success(e) {
                                if (e.data && e.data.data && e.data.data.length > 0) {
                                    var _t93 = [];
                                    e.data.data.forEach(function(e) {
                                        _t93.push({
                                            videoId: e.alias_id,
                                            digg: e.video_info.digg_count,
                                            coverUrl: e.video_info.cover_url
                                        });
                                    }), G_NetHelper.reqReportMyVideoRankInfos(_t93, function(e) {
                                        0 === e.code ? console.log("report my video infos succ...") : console.log("report my video infos fail...");
                                    });
                                }
                            }
                        });
                    },
                    recordMyNewVideoId: function recordMyNewVideoId(e) {
                        G_PlatHelper.isTTPlatform() && (n(e), this.refreshAndReport());
                    },
                    getAllVideoRankInfo: function getAllVideoRankInfo(e) {
                        G_PlatHelper.isTTPlatform() && "function" == typeof e && G_NetHelper.reqAllVideoRankInfos(function(t) {
                            0 === t.code ? e(t.data) : e([]);
                        });
                    }
                }), e;
            }
        };
    }();
    window.G_VideoRankMgr = $e.getInstance();
    var et = "storage_key_of_local_asset_version", tt = "zip_info.json", nt = function() {
        var e;
        function init() {
            console.log("Init G_AssetMgr Instance...");
            var e = !1, t = null, n = {}, i = function i(e) {
                var t = G_PlatHelper.getStorage(et);
                if (t && "" !== t) {
                    var _n56 = JSON.parse(t);
                    if (void 0 !== _n56[e]) return _n56[e].version;
                }
                return 0;
            }, o = function o() {
                return G_PlatHelper.getPlat() ? G_PlatHelper.getPlat().getFileSystemManager() : null;
            }, a = function a(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (G_PlatHelper.getPlat()) {
                    var _n57 = o();
                    if (G_PlatHelper.isVIVOPlatform()) {
                        var _i38 = e;
                        if ("/" !== _i38[_i38.length - 1] && (_i38 += "/"), !_n57.accessSync(_i38)) return t && _n57.mkdirSync(_i38), 
                        !1;
                    } else try {
                        _n57.accessSync(e);
                    } catch (i) {
                        i = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(i);
                        try {
                            return t && _n57.mkdirSync(e, !0), !1;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                        }
                    }
                    return !0;
                }
                return !0;
            }, r = function r(e, t) {
                if (G_PlatHelper.getPlat()) {
                    var _n58 = o(), _i39 = _n58.readdirSync(e + (G_PlatHelper.isVIVOPlatform() ? "/" : ""));
                    G_PlatHelper.isVIVOPlatform() && (_i39 = _i39.files), Array.isArray(_i39) && _i39.length > 0 && _i39.forEach(function(i) {
                        var o = e + "/" + i, a = _n58.statSync(o);
                        G_PlatHelper.isVIVOPlatform() && (a = a.stats), a.isFile() ? t.push(o) : r(o, t);
                    });
                }
            }, s = function s() {
                if (G_PlatHelper.getPlat()) {
                    var _e96 = G_PlatHelper.getPlat().env.USER_DATA_PATH + "/layaairGame";
                    return a(_e96, !0), _e96;
                }
                return "";
            }, l = function l(e) {
                if ("function" == typeof e) {
                    var _t94 = Array.prototype.slice.call(arguments);
                    return _t94.shift(), e.apply(null, _t94);
                }
                return null;
            };
            return {
                init: function init(n) {
                    var _this65 = this;
                    if (G_PlatHelper.getPlat()) {
                        if (G_PlatHelper.isNativePlatform()) return console.warn("Do Not Support On Current Platform..."), 
                        void l(n);
                        G_HttpHelper.getJson(this._getAssetVersionWebPath(), function(o, a) {
                            if (o && a) {
                                t = a;
                                for (var _e97 in t) {
                                    var _n59 = i(_e97);
                                    _n59 === t[_e97].version && _this65._isAssetDownloaded(_e97) || (console.log("asset " + _e97 + " need update: " + _n59 + " => " + t[_e97].version), 
                                    _this65._deleteTargetAssetCache(_e97));
                                }
                                e = !0, l(n);
                            } else G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                        });
                    } else l(n);
                },
                isAssetDownloaded: function isAssetDownloaded(t) {
                    return !e || this._isAssetDownloaded(t);
                },
                download: function download(i, o, a) {
                    var _this66 = this;
                    if (!e) return l(o, 1), void l(a);
                    var r = [], s = function s(e) {
                        return !(!G_PlatHelper.getPlat() || void 0 === t[e] || _this66._isAssetDownloaded(e) || void 0 !== n[e]);
                    };
                    if (Array.isArray(i)) i.forEach(function(e) {
                        s(e) && r.push(e);
                    }); else {
                        var _e98 = i;
                        s(_e98) && r.push(_e98);
                    }
                    if (r.length > 0) {
                        var _e99 = 0;
                        r.forEach(function(t) {
                            _this66._downloadAsset(t, function() {
                                l(o, (_e99 += 1) / r.length), _e99 === r.length && l(a);
                            });
                        });
                    } else l(o, 1), l(a);
                },
                _downloadAsset: function _downloadAsset(e, t) {
                    void 0 === n[e] ? (n[e] = [], this._deleteTargetAssetCache(e), this._doDownloadAndParseAsset(e, function(i) {
                        n[e].length > 0 && (n[e].forEach(function(e) {
                            l(e, i);
                        }), delete n[e]), l(t, i);
                    })) : n[e].push(t);
                },
                _doDownloadAndParseAsset: function _doDownloadAndParseAsset(e, n) {
                    var _this67 = this;
                    var i = Date.now(), o = this._getAssetWebPath(e, t[e].version);
                    this._doDownloadAsset(o, function(o, a) {
                        var r = Date.now();
                        console.log("cost time(ms) of download asset: {0}".format(e), r - i);
                        var s = Laya.URL.getPath(_this67._getAssetCacheDir(e));
                        "/" === s[s.length - 1] && (s = s.substr(0, s.length - 1)), _this67._unzipAsset(o, s, function() {
                            var o = Date.now();
                            console.log("cost time(ms) of unzip asset: {0}".format(e), o - r), _this67._parseAsset(e, s + "/" + e, function() {
                                var a = Date.now();
                                console.log("cost time(ms) of parse asset: {0}".format(e), a - o), console.log("cost total time(ms) of asset: {0}".format(e), a - i), 
                                function(e, t) {
                                    var n = G_PlatHelper.getStorage(et), i = null;
                                    void 0 !== (i = n && "" !== n ? JSON.parse(n) : {})[e] ? i[e].version = t : i[e] = {
                                        version: t
                                    }, G_PlatHelper.setStorage(et, JSON.stringify(i));
                                }(e, t[e].version), l(n, s);
                            });
                        });
                    });
                },
                _doDownloadAsset: function _doDownloadAsset(e, t) {
                    G_PlatHelper.getPlat().downloadFile({
                        url: e,
                        success: function success(e) {
                            200 === e.statusCode ? l(t, e.tempFilePath) : G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                        },
                        fail: function fail() {
                            G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                        }
                    });
                },
                _unzipAsset: function _unzipAsset(e, t, n) {
                    o().unzip({
                        zipFilePath: e,
                        targetPath: t,
                        success: function success() {
                            l(n);
                        },
                        fail: function fail() {
                            G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                        }
                    });
                },
                _parseAsset: function _parseAsset(e, t, n) {
                    var i = [];
                    if (r(t, i), i.length > 0) {
                        var _o19 = [], _a16 = function _a16() {
                            _o19.length === i.length && (Laya.MiniFileMgr.onSaveZipFiles(_o19), l(n));
                        };
                        for (var _n60 = 0; _n60 < i.length; _n60++) {
                            var _r5 = i[_n60], _s = "." + Laya.Utils.getFileExtension(_r5), _l = _r5.replace(t, e), _c = G_BaseUrlPath + _l;
                            ".lmat" === _s || ".lh" === _s || ".ls" === _s || ".json" === _s ? (_o19.push({
                                readyUrl: _c,
                                md5Name: _l,
                                encoding: "utf8",
                                fileSize: 0
                            }), _a16()) : (_o19.push({
                                readyUrl: _c,
                                md5Name: _l,
                                encoding: "",
                                fileSize: 0
                            }), _a16());
                        }
                    }
                },
                _isAssetDownloaded: function _isAssetDownloaded(e) {
                    if (!G_PlatHelper.getPlat()) return !0;
                    var t = this._getAssetCacheDir(e);
                    if (a(t) && function(e) {
                        if (G_PlatHelper.getPlat()) {
                            var _t95 = o();
                            if (G_PlatHelper.isVIVOPlatform()) {
                                if (!_t95.accessSync(e)) return !1;
                            } else try {
                                _t95.accessSync(e);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                return !1;
                            }
                            return !0;
                        }
                        return !0;
                    }(t + "/" + tt)) {
                        var _n61 = o().readFileSync(t + "/" + tt, "utf-8");
                        if ("string" == typeof _n61 && "" !== _n61) {
                            var _t96 = JSON.parse(_n61);
                            for (var _n62 = 0; _n62 < _t96.files.length; _n62++) {
                                var _i40 = _t96.files[_n62], _o20 = G_BaseUrlPath + e + "/" + _i40;
                                if (void 0 === Laya.MiniFileMgr.fakeObj[_o20]) return console.warn("check webUrl: {0}, state: false, need re-download...".format(_o20)), 
                                !1;
                            }
                            return !0;
                        }
                        return !1;
                    }
                    return !1;
                },
                _getAssetCacheDir: function _getAssetCacheDir(e) {
                    return G_PlatHelper.getPlat() ? s() + "/" + e : e;
                },
                _deleteTargetAssetCache: function _deleteTargetAssetCache(e) {
                    if (!G_PlatHelper.getPlat()) return;
                    !function(e) {
                        if (G_PlatHelper.getPlat()) {
                            var _t97 = o(), _n63 = function _n63(e) {
                                var i = _t97.readdirSync(e + (G_PlatHelper.isVIVOPlatform() ? "/" : ""));
                                G_PlatHelper.isVIVOPlatform() && (i = i.files), Array.isArray(i) && i.length > 0 && i.forEach(function(i) {
                                    var o = e + "/" + i, a = _t97.statSync(o);
                                    G_PlatHelper.isVIVOPlatform() && (a = a.stats), a.isFile() ? _t97.unlinkSync(o) : _n63(o);
                                }), _t97.rmdirSync(e);
                            };
                            try {
                                _n63(e), console.log("remove dir: " + e + " succ...");
                            } catch (e) {}
                        }
                    }(s() + "/" + e), function(e) {
                        var t = G_PlatHelper.getStorage(et);
                        if (t && "" !== t) {
                            var _n64 = JSON.parse(t);
                            void 0 !== _n64[e] && (delete _n64[e], G_PlatHelper.setStorage(et, JSON.stringify(_n64)));
                        }
                    }(e);
                },
                _getAssetWebPath: function _getAssetWebPath(e, t) {
                    return this._fillPlatType(G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_HTTP_ADDR_OF_ASSET_ROOT).str) + "/" + e + "/" + t + ".zip";
                },
                _getAssetVersionWebPath: function _getAssetVersionWebPath() {
                    return this._fillPlatType(G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_HTTP_ADDR_OF_ASSET_VERSION).str);
                },
                _fillPlatType: function _fillPlatType(e) {
                    return e.format(G_PlatHelper.getPlatType(), G_SDKCfg.getAssetResVersion().toString());
                }
            };
        }
        return {
            getInstance: function getInstance() {
                return e || (e = init()), e;
            }
        };
    }();
    window.G_AssetMgr = nt.getInstance();
    var it = protobuf, ot = it.Reader, at = it.Writer, rt = it.util, st = it.roots.default || (it.roots.default = {});
    st.secretagent = function() {
        var e, t, n = {};
        return n.BaseConfigIDs = (e = {}, (t = Object.create(e))[e[1] = "BC_NET_ADDR"] = 1, 
        t[e[2] = "BC_SHOT_NAME"] = 2, t[e[3] = "BC_HTTP_ADDR_OF_SERVER"] = 3, t[e[4] = "BC_HTTP_ADDR_OF_PATCH_PACKAGE"] = 4, 
        t[e[5] = "BC_HTTP_ADDR_OF_ASSET_VERSION"] = 5, t[e[6] = "BC_HTTP_ADDR_OF_ASSET_ROOT"] = 6, 
        t[e[7] = "BC_APP_VERSION"] = 7, t[e[8] = "BC_ASSET_RES_VERSION"] = 8, t[e[9] = "BC_MINI_PROGRAM_ID"] = 9, 
        t[e[10] = "BC_MINI_PROGRAM_APP_ID"] = 10, t[e[11] = "BC_MINI_PROGRAM_APP_SECRET"] = 11, 
        t[e[12] = "BC_QQ_MINI_PROGRAM_APP_ID"] = 12, t[e[13] = "BC_QQ_MINI_PROGRAM_APP_SECRET"] = 13, 
        t[e[14] = "BC_OPPO_MINI_PROGRAM_APP_ID"] = 14, t[e[15] = "BC_OPPO_MINI_PROGRAM_APP_SECRET"] = 15, 
        t[e[16] = "BC_VIVO_MINI_PROGRAM_APP_ID"] = 16, t[e[17] = "BC_VIVO_MINI_PROGRAM_APP_SECRET"] = 17, 
        t[e[18] = "BC_TT_MINI_PROGRAM_APP_ID"] = 18, t[e[19] = "BC_TT_MINI_PROGRAM_APP_SECRET"] = 19, 
        t[e[20] = "BC_QTT_MINI_PROGRAM_APP_ID"] = 20, t[e[21] = "BC_QTT_MINI_PROGRAM_APP_SECRET"] = 21, 
        t[e[22] = "BC_QTT_MINI_PROGRAM_APP_NAME"] = 22, t[e[23] = "BC_MZ_MINI_PROGRAM_APP_ID"] = 23, 
        t[e[24] = "BC_HW_MINI_PROGRAM_APP_ID"] = 24, t[e[31] = "BC_NATIVE_MINI_PROGRAM_APP_ID"] = 31, 
        t[e[32] = "BC_NATIVE_MINI_PROGRAM_CHANNEL"] = 32, t[e[33] = "BC_NATIVE_MINI_PROGRAM_UNIVERSAL_LINKS"] = 33, 
        t[e[61] = "BC_MAX_ADV_TIMES_OF_ONE_DAY"] = 61, t), n.UIWordIDs = function() {
            var e = {}, t = Object.create(e);
            return t[e[1] = "UIWORD_ID_APP_NAME"] = 1, t[e[2] = "UIWORD_ID_SYSTEM_ERROR_TITLE"] = 2, 
            t[e[3] = "UIWORD_ID_SYSTEM_ERROR_CONTENT"] = 3, t[e[4] = "UIWORD_ID_SYSTEM_ERROR_RELOAD_GAME"] = 4, 
            t[e[5] = "UIWORD_ID_SYSTEM_ERROR_EXIT_GAME"] = 5, t[e[6] = "UIWORD_ID_QQ_PLATFORM_NAME"] = 6, 
            t[e[7] = "UIWORD_ID_WX_PLATFORM_NAME"] = 7, t[e[8] = "UIWORD_ID_SDK_NOT_SUPPORT_FORMAT"] = 8, 
            t[e[9] = "UIWORD_ID_NOT_FINISHED_YET"] = 9, t[e[10] = "UIWORD_ID_PLAYER_BLOCKED_TITLE"] = 10, 
            t[e[11] = "UIWORD_ID_PLAYER_BLOCKED_CONTENT"] = 11, t[e[12] = "UIWORD_ID_VIDEO_NOT_SUPPORT"] = 12, 
            t[e[13] = "UIWORD_ID_SHARE_SUCCESS"] = 13, t[e[14] = "UIWORD_ID_ADV_SUCCESS"] = 14, 
            t[e[15] = "UIWORD_ID_ADV_FAIL"] = 15, t[e[16] = "UIWORD_ID_ADV_NOT_FINISH_CONTENT"] = 16, 
            t[e[17] = "UIWORD_ID_ADV_NOT_FINISH_CANCEL_TEXT"] = 17, t[e[18] = "UIWORD_ID_ADV_NOT_FINISH_CONFIRM_TEXT"] = 18, 
            t[e[19] = "UIWORD_ID_SUBSCRIBE_FAIL_CONTENT"] = 19, t[e[20] = "UIWORD_ID_SUBSCRIBE_FAIL_CANCEL_TEXT"] = 20, 
            t[e[21] = "UIWORD_ID_SUBSCRIBE_FAIL_CONFIRM_TEXT"] = 21, t[e[22] = "UIWORD_ID_NO_MORE_REWARD"] = 22, 
            t[e[23] = "UIWORD_ID_UNIT_DAY"] = 23, t[e[24] = "UIWORD_ID_UNIT_WEEK"] = 24, t[e[25] = "UIWORD_ID_UNIT_HOUR"] = 25, 
            t[e[26] = "UIWORD_ID_UNIT_MINUTE"] = 26, t[e[27] = "UIWORD_ID_VIDEO_NOT_READY_YET"] = 27, 
            t[e[28] = "UIWORD_ID_FORMAT_OF_VIDEO_NOT_READY_YET"] = 28, t[e[29] = "UIWORD_ID_INSTALL_SHORTCUT_SUCCESS"] = 29, 
            t[e[30] = "UIWORD_ID_NOT_SUPPORT_ON_IOS_PLATFORM"] = 30, t[e[1001] = "UIWORD_ID_SHARE_FAIL_TIPS_ONE"] = 1001, 
            t[e[1002] = "UIWORD_ID_SHARE_FAIL_TIPS_TWO"] = 1002, t[e[1003] = "UIWORD_ID_SHARE_FAIL_TIPS_THREE"] = 1003, 
            t[e[1004] = "UIWORD_ID_SHARE_VIDEO_FAIL_TIPS_ONE"] = 1004, t;
        }(), n.BaseConfig = function() {
            function BaseConfig(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                    null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
            }
            return BaseConfig.prototype.id = 0, BaseConfig.prototype.num = 0, BaseConfig.prototype.decimal = 0, 
            BaseConfig.prototype.str = "", BaseConfig.create = function(e) {
                return new BaseConfig(e);
            }, BaseConfig.encode = function(e, t) {
                return t || (t = at.create()), t.uint32(8).uint32(e.id), null != e.num && Object.hasOwnProperty.call(e, "num") && t.uint32(16).uint32(e.num), 
                null != e.decimal && Object.hasOwnProperty.call(e, "decimal") && t.uint32(24).uint32(e.decimal), 
                null != e.str && Object.hasOwnProperty.call(e, "str") && t.uint32(34).string(e.str), 
                t;
            }, BaseConfig.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim();
            }, BaseConfig.decode = function(e, t) {
                e instanceof ot || (e = ot.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, i = new st.secretagent.BaseConfig(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        i.id = e.uint32();
                        break;

                      case 2:
                        i.num = e.uint32();
                        break;

                      case 3:
                        i.decimal = e.uint32();
                        break;

                      case 4:
                        i.str = e.string();
                        break;

                      default:
                        e.skipType(7 & o);
                    }
                }
                if (!i.hasOwnProperty("id")) throw rt.ProtocolError("missing required 'id'", {
                    instance: i
                });
                return i;
            }, BaseConfig.decodeDelimited = function(e) {
                return e instanceof ot || (e = new ot(e)), this.decode(e, e.uint32());
            }, BaseConfig.verify = function(e) {
                return "object" != _typeof2(e) || null === e ? "object expected" : rt.isInteger(e.id) ? null != e.num && e.hasOwnProperty("num") && !rt.isInteger(e.num) ? "num: integer expected" : null != e.decimal && e.hasOwnProperty("decimal") && !rt.isInteger(e.decimal) ? "decimal: integer expected" : null != e.str && e.hasOwnProperty("str") && !rt.isString(e.str) ? "str: string expected" : null : "id: integer expected";
            }, BaseConfig.fromObject = function(e) {
                if (e instanceof st.secretagent.BaseConfig) return e;
                var t = new st.secretagent.BaseConfig();
                return null != e.id && (t.id = e.id >>> 0), null != e.num && (t.num = e.num >>> 0), 
                null != e.decimal && (t.decimal = e.decimal >>> 0), null != e.str && (t.str = String(e.str)), 
                t;
            }, BaseConfig.toObject = function(e, t) {
                t || (t = {});
                var n = {};
                return t.defaults && (n.id = 0, n.num = 0, n.decimal = 0, n.str = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), 
                null != e.num && e.hasOwnProperty("num") && (n.num = e.num), null != e.decimal && e.hasOwnProperty("decimal") && (n.decimal = e.decimal), 
                null != e.str && e.hasOwnProperty("str") && (n.str = e.str), n;
            }, BaseConfig.prototype.toJSON = function() {
                return this.constructor.toObject(this, it.util.toJSONOptions);
            }, BaseConfig;
        }(), n.TBBaseConfig = function() {
            function TBBaseConfig(e) {
                if (this.list = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                    null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
            }
            return TBBaseConfig.prototype.list = rt.emptyArray, TBBaseConfig.create = function(e) {
                return new TBBaseConfig(e);
            }, TBBaseConfig.encode = function(e, t) {
                if (t || (t = at.create()), null != e.list && e.list.length) for (var n = 0; n < e.list.length; ++n) {
                    st.secretagent.BaseConfig.encode(e.list[n], t.uint32(10).fork()).ldelim();
                }
                return t;
            }, TBBaseConfig.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim();
            }, TBBaseConfig.decode = function(e, t) {
                e instanceof ot || (e = ot.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, i = new st.secretagent.TBBaseConfig(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        i.list && i.list.length || (i.list = []), i.list.push(st.secretagent.BaseConfig.decode(e, e.uint32()));
                        break;

                      default:
                        e.skipType(7 & o);
                    }
                }
                return i;
            }, TBBaseConfig.decodeDelimited = function(e) {
                return e instanceof ot || (e = new ot(e)), this.decode(e, e.uint32());
            }, TBBaseConfig.verify = function(e) {
                if ("object" != _typeof2(e) || null === e) return "object expected";
                if (null != e.list && e.hasOwnProperty("list")) {
                    if (!Array.isArray(e.list)) return "list: array expected";
                    for (var t = 0; t < e.list.length; ++t) {
                        var n = st.secretagent.BaseConfig.verify(e.list[t]);
                        if (n) return "list." + n;
                    }
                }
                return null;
            }, TBBaseConfig.fromObject = function(e) {
                if (e instanceof st.secretagent.TBBaseConfig) return e;
                var t = new st.secretagent.TBBaseConfig();
                if (e.list) {
                    if (!Array.isArray(e.list)) throw TypeError(".secretagent.TBBaseConfig.list: array expected");
                    t.list = [];
                    for (var n = 0; n < e.list.length; ++n) {
                        if ("object" != _typeof2(e.list[n])) throw TypeError(".secretagent.TBBaseConfig.list: object expected");
                        t.list[n] = st.secretagent.BaseConfig.fromObject(e.list[n]);
                    }
                }
                return t;
            }, TBBaseConfig.toObject = function(e, t) {
                t || (t = {});
                var n = {};
                if ((t.arrays || t.defaults) && (n.list = []), e.list && e.list.length) {
                    n.list = [];
                    for (var i = 0; i < e.list.length; ++i) {
                        n.list[i] = st.secretagent.BaseConfig.toObject(e.list[i], t);
                    }
                }
                return n;
            }, TBBaseConfig.prototype.toJSON = function() {
                return this.constructor.toObject(this, it.util.toJSONOptions);
            }, TBBaseConfig;
        }(), n.UIWord = function() {
            function UIWord(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                    null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
            }
            return UIWord.prototype.id = 0, UIWord.prototype.word = "", UIWord.create = function(e) {
                return new UIWord(e);
            }, UIWord.encode = function(e, t) {
                return t || (t = at.create()), t.uint32(8).uint32(e.id), t.uint32(18).string(e.word), 
                t;
            }, UIWord.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim();
            }, UIWord.decode = function(e, t) {
                e instanceof ot || (e = ot.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, i = new st.secretagent.UIWord(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        i.id = e.uint32();
                        break;

                      case 2:
                        i.word = e.string();
                        break;

                      default:
                        e.skipType(7 & o);
                    }
                }
                if (!i.hasOwnProperty("id")) throw rt.ProtocolError("missing required 'id'", {
                    instance: i
                });
                if (!i.hasOwnProperty("word")) throw rt.ProtocolError("missing required 'word'", {
                    instance: i
                });
                return i;
            }, UIWord.decodeDelimited = function(e) {
                return e instanceof ot || (e = new ot(e)), this.decode(e, e.uint32());
            }, UIWord.verify = function(e) {
                return "object" != _typeof2(e) || null === e ? "object expected" : rt.isInteger(e.id) ? rt.isString(e.word) ? null : "word: string expected" : "id: integer expected";
            }, UIWord.fromObject = function(e) {
                if (e instanceof st.secretagent.UIWord) return e;
                var t = new st.secretagent.UIWord();
                return null != e.id && (t.id = e.id >>> 0), null != e.word && (t.word = String(e.word)), 
                t;
            }, UIWord.toObject = function(e, t) {
                t || (t = {});
                var n = {};
                return t.defaults && (n.id = 0, n.word = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), 
                null != e.word && e.hasOwnProperty("word") && (n.word = e.word), n;
            }, UIWord.prototype.toJSON = function() {
                return this.constructor.toObject(this, it.util.toJSONOptions);
            }, UIWord;
        }(), n.TBUIWord = function() {
            function TBUIWord(e) {
                if (this.list = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                    null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
            }
            return TBUIWord.prototype.list = rt.emptyArray, TBUIWord.create = function(e) {
                return new TBUIWord(e);
            }, TBUIWord.encode = function(e, t) {
                if (t || (t = at.create()), null != e.list && e.list.length) for (var n = 0; n < e.list.length; ++n) {
                    st.secretagent.UIWord.encode(e.list[n], t.uint32(10).fork()).ldelim();
                }
                return t;
            }, TBUIWord.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim();
            }, TBUIWord.decode = function(e, t) {
                e instanceof ot || (e = ot.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, i = new st.secretagent.TBUIWord(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        i.list && i.list.length || (i.list = []), i.list.push(st.secretagent.UIWord.decode(e, e.uint32()));
                        break;

                      default:
                        e.skipType(7 & o);
                    }
                }
                return i;
            }, TBUIWord.decodeDelimited = function(e) {
                return e instanceof ot || (e = new ot(e)), this.decode(e, e.uint32());
            }, TBUIWord.verify = function(e) {
                if ("object" != _typeof2(e) || null === e) return "object expected";
                if (null != e.list && e.hasOwnProperty("list")) {
                    if (!Array.isArray(e.list)) return "list: array expected";
                    for (var t = 0; t < e.list.length; ++t) {
                        var n = st.secretagent.UIWord.verify(e.list[t]);
                        if (n) return "list." + n;
                    }
                }
                return null;
            }, TBUIWord.fromObject = function(e) {
                if (e instanceof st.secretagent.TBUIWord) return e;
                var t = new st.secretagent.TBUIWord();
                if (e.list) {
                    if (!Array.isArray(e.list)) throw TypeError(".secretagent.TBUIWord.list: array expected");
                    t.list = [];
                    for (var n = 0; n < e.list.length; ++n) {
                        if ("object" != _typeof2(e.list[n])) throw TypeError(".secretagent.TBUIWord.list: object expected");
                        t.list[n] = st.secretagent.UIWord.fromObject(e.list[n]);
                    }
                }
                return t;
            }, TBUIWord.toObject = function(e, t) {
                t || (t = {});
                var n = {};
                if ((t.arrays || t.defaults) && (n.list = []), e.list && e.list.length) {
                    n.list = [];
                    for (var i = 0; i < e.list.length; ++i) {
                        n.list[i] = st.secretagent.UIWord.toObject(e.list[i], t);
                    }
                }
                return n;
            }, TBUIWord.prototype.toJSON = function() {
                return this.constructor.toObject(this, it.util.toJSONOptions);
            }, TBUIWord;
        }(), n.NetError = function() {
            function NetError(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                    null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
            }
            return NetError.prototype.id = 0, NetError.prototype.word = "", NetError.create = function(e) {
                return new NetError(e);
            }, NetError.encode = function(e, t) {
                return t || (t = at.create()), t.uint32(8).uint32(e.id), t.uint32(18).string(e.word), 
                t;
            }, NetError.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim();
            }, NetError.decode = function(e, t) {
                e instanceof ot || (e = ot.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, i = new st.secretagent.NetError(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        i.id = e.uint32();
                        break;

                      case 2:
                        i.word = e.string();
                        break;

                      default:
                        e.skipType(7 & o);
                    }
                }
                if (!i.hasOwnProperty("id")) throw rt.ProtocolError("missing required 'id'", {
                    instance: i
                });
                if (!i.hasOwnProperty("word")) throw rt.ProtocolError("missing required 'word'", {
                    instance: i
                });
                return i;
            }, NetError.decodeDelimited = function(e) {
                return e instanceof ot || (e = new ot(e)), this.decode(e, e.uint32());
            }, NetError.verify = function(e) {
                return "object" != _typeof2(e) || null === e ? "object expected" : rt.isInteger(e.id) ? rt.isString(e.word) ? null : "word: string expected" : "id: integer expected";
            }, NetError.fromObject = function(e) {
                if (e instanceof st.secretagent.NetError) return e;
                var t = new st.secretagent.NetError();
                return null != e.id && (t.id = e.id >>> 0), null != e.word && (t.word = String(e.word)), 
                t;
            }, NetError.toObject = function(e, t) {
                t || (t = {});
                var n = {};
                return t.defaults && (n.id = 0, n.word = ""), null != e.id && e.hasOwnProperty("id") && (n.id = e.id), 
                null != e.word && e.hasOwnProperty("word") && (n.word = e.word), n;
            }, NetError.prototype.toJSON = function() {
                return this.constructor.toObject(this, it.util.toJSONOptions);
            }, NetError;
        }(), n.TBNetError = function() {
            function TBNetError(e) {
                if (this.list = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                    null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
            }
            return TBNetError.prototype.list = rt.emptyArray, TBNetError.create = function(e) {
                return new TBNetError(e);
            }, TBNetError.encode = function(e, t) {
                if (t || (t = at.create()), null != e.list && e.list.length) for (var n = 0; n < e.list.length; ++n) {
                    st.secretagent.NetError.encode(e.list[n], t.uint32(10).fork()).ldelim();
                }
                return t;
            }, TBNetError.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim();
            }, TBNetError.decode = function(e, t) {
                e instanceof ot || (e = ot.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, i = new st.secretagent.TBNetError(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        i.list && i.list.length || (i.list = []), i.list.push(st.secretagent.NetError.decode(e, e.uint32()));
                        break;

                      default:
                        e.skipType(7 & o);
                    }
                }
                return i;
            }, TBNetError.decodeDelimited = function(e) {
                return e instanceof ot || (e = new ot(e)), this.decode(e, e.uint32());
            }, TBNetError.verify = function(e) {
                if ("object" != _typeof2(e) || null === e) return "object expected";
                if (null != e.list && e.hasOwnProperty("list")) {
                    if (!Array.isArray(e.list)) return "list: array expected";
                    for (var t = 0; t < e.list.length; ++t) {
                        var n = st.secretagent.NetError.verify(e.list[t]);
                        if (n) return "list." + n;
                    }
                }
                return null;
            }, TBNetError.fromObject = function(e) {
                if (e instanceof st.secretagent.TBNetError) return e;
                var t = new st.secretagent.TBNetError();
                if (e.list) {
                    if (!Array.isArray(e.list)) throw TypeError(".secretagent.TBNetError.list: array expected");
                    t.list = [];
                    for (var n = 0; n < e.list.length; ++n) {
                        if ("object" != _typeof2(e.list[n])) throw TypeError(".secretagent.TBNetError.list: object expected");
                        t.list[n] = st.secretagent.NetError.fromObject(e.list[n]);
                    }
                }
                return t;
            }, TBNetError.toObject = function(e, t) {
                t || (t = {});
                var n = {};
                if ((t.arrays || t.defaults) && (n.list = []), e.list && e.list.length) {
                    n.list = [];
                    for (var i = 0; i < e.list.length; ++i) {
                        n.list[i] = st.secretagent.NetError.toObject(e.list[i], t);
                    }
                }
                return n;
            }, TBNetError.prototype.toJSON = function() {
                return this.constructor.toObject(this, it.util.toJSONOptions);
            }, TBNetError;
        }(), n.SettingConfig = function() {
            function SettingConfig(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                    null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
            }
            return SettingConfig.prototype.isSoundOn = !1, SettingConfig.prototype.isMuteOn = !1, 
            SettingConfig.create = function(e) {
                return new SettingConfig(e);
            }, SettingConfig.encode = function(e, t) {
                return t || (t = at.create()), t.uint32(8).bool(e.isSoundOn), t.uint32(16).bool(e.isMuteOn), 
                t;
            }, SettingConfig.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim();
            }, SettingConfig.decode = function(e, t) {
                e instanceof ot || (e = ot.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, i = new st.secretagent.SettingConfig(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        i.isSoundOn = e.bool();
                        break;

                      case 2:
                        i.isMuteOn = e.bool();
                        break;

                      default:
                        e.skipType(7 & o);
                    }
                }
                if (!i.hasOwnProperty("isSoundOn")) throw rt.ProtocolError("missing required 'isSoundOn'", {
                    instance: i
                });
                if (!i.hasOwnProperty("isMuteOn")) throw rt.ProtocolError("missing required 'isMuteOn'", {
                    instance: i
                });
                return i;
            }, SettingConfig.decodeDelimited = function(e) {
                return e instanceof ot || (e = new ot(e)), this.decode(e, e.uint32());
            }, SettingConfig.verify = function(e) {
                return "object" != _typeof2(e) || null === e ? "object expected" : "boolean" != typeof e.isSoundOn ? "isSoundOn: boolean expected" : "boolean" != typeof e.isMuteOn ? "isMuteOn: boolean expected" : null;
            }, SettingConfig.fromObject = function(e) {
                if (e instanceof st.secretagent.SettingConfig) return e;
                var t = new st.secretagent.SettingConfig();
                return null != e.isSoundOn && (t.isSoundOn = Boolean(e.isSoundOn)), null != e.isMuteOn && (t.isMuteOn = Boolean(e.isMuteOn)), 
                t;
            }, SettingConfig.toObject = function(e, t) {
                t || (t = {});
                var n = {};
                return t.defaults && (n.isSoundOn = !1, n.isMuteOn = !1), null != e.isSoundOn && e.hasOwnProperty("isSoundOn") && (n.isSoundOn = e.isSoundOn), 
                null != e.isMuteOn && e.hasOwnProperty("isMuteOn") && (n.isMuteOn = e.isMuteOn), 
                n;
            }, SettingConfig.prototype.toJSON = function() {
                return this.constructor.toObject(this, it.util.toJSONOptions);
            }, SettingConfig;
        }(), n.RedGiftConfig = function() {
            function RedGiftConfig(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                    null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
            }
            return RedGiftConfig.prototype.money = 0, RedGiftConfig.prototype.totalWithdrawMoney = 0, 
            RedGiftConfig.prototype.totalWithdrawMoneyTimes = 0, RedGiftConfig.prototype.totalGotRedPackageCount = 0, 
            RedGiftConfig.prototype.isWithdrawEverydayMoneyToday = !1, RedGiftConfig.prototype.recordDayOfEverydayMoney = 0, 
            RedGiftConfig.prototype.totalWithdrawEverydayMoney = 0, RedGiftConfig.create = function(e) {
                return new RedGiftConfig(e);
            }, RedGiftConfig.encode = function(e, t) {
                return t || (t = at.create()), t.uint32(8).uint32(e.money), t.uint32(16).uint32(e.totalWithdrawMoney), 
                t.uint32(24).uint32(e.totalWithdrawMoneyTimes), t.uint32(32).uint32(e.totalGotRedPackageCount), 
                t.uint32(40).bool(e.isWithdrawEverydayMoneyToday), t.uint32(48).uint32(e.recordDayOfEverydayMoney), 
                t.uint32(56).uint32(e.totalWithdrawEverydayMoney), t;
            }, RedGiftConfig.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim();
            }, RedGiftConfig.decode = function(e, t) {
                e instanceof ot || (e = ot.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, i = new st.secretagent.RedGiftConfig(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        i.money = e.uint32();
                        break;

                      case 2:
                        i.totalWithdrawMoney = e.uint32();
                        break;

                      case 3:
                        i.totalWithdrawMoneyTimes = e.uint32();
                        break;

                      case 4:
                        i.totalGotRedPackageCount = e.uint32();
                        break;

                      case 5:
                        i.isWithdrawEverydayMoneyToday = e.bool();
                        break;

                      case 6:
                        i.recordDayOfEverydayMoney = e.uint32();
                        break;

                      case 7:
                        i.totalWithdrawEverydayMoney = e.uint32();
                        break;

                      default:
                        e.skipType(7 & o);
                    }
                }
                if (!i.hasOwnProperty("money")) throw rt.ProtocolError("missing required 'money'", {
                    instance: i
                });
                if (!i.hasOwnProperty("totalWithdrawMoney")) throw rt.ProtocolError("missing required 'totalWithdrawMoney'", {
                    instance: i
                });
                if (!i.hasOwnProperty("totalWithdrawMoneyTimes")) throw rt.ProtocolError("missing required 'totalWithdrawMoneyTimes'", {
                    instance: i
                });
                if (!i.hasOwnProperty("totalGotRedPackageCount")) throw rt.ProtocolError("missing required 'totalGotRedPackageCount'", {
                    instance: i
                });
                if (!i.hasOwnProperty("isWithdrawEverydayMoneyToday")) throw rt.ProtocolError("missing required 'isWithdrawEverydayMoneyToday'", {
                    instance: i
                });
                if (!i.hasOwnProperty("recordDayOfEverydayMoney")) throw rt.ProtocolError("missing required 'recordDayOfEverydayMoney'", {
                    instance: i
                });
                if (!i.hasOwnProperty("totalWithdrawEverydayMoney")) throw rt.ProtocolError("missing required 'totalWithdrawEverydayMoney'", {
                    instance: i
                });
                return i;
            }, RedGiftConfig.decodeDelimited = function(e) {
                return e instanceof ot || (e = new ot(e)), this.decode(e, e.uint32());
            }, RedGiftConfig.verify = function(e) {
                return "object" != _typeof2(e) || null === e ? "object expected" : rt.isInteger(e.money) ? rt.isInteger(e.totalWithdrawMoney) ? rt.isInteger(e.totalWithdrawMoneyTimes) ? rt.isInteger(e.totalGotRedPackageCount) ? "boolean" != typeof e.isWithdrawEverydayMoneyToday ? "isWithdrawEverydayMoneyToday: boolean expected" : rt.isInteger(e.recordDayOfEverydayMoney) ? rt.isInteger(e.totalWithdrawEverydayMoney) ? null : "totalWithdrawEverydayMoney: integer expected" : "recordDayOfEverydayMoney: integer expected" : "totalGotRedPackageCount: integer expected" : "totalWithdrawMoneyTimes: integer expected" : "totalWithdrawMoney: integer expected" : "money: integer expected";
            }, RedGiftConfig.fromObject = function(e) {
                if (e instanceof st.secretagent.RedGiftConfig) return e;
                var t = new st.secretagent.RedGiftConfig();
                return null != e.money && (t.money = e.money >>> 0), null != e.totalWithdrawMoney && (t.totalWithdrawMoney = e.totalWithdrawMoney >>> 0), 
                null != e.totalWithdrawMoneyTimes && (t.totalWithdrawMoneyTimes = e.totalWithdrawMoneyTimes >>> 0), 
                null != e.totalGotRedPackageCount && (t.totalGotRedPackageCount = e.totalGotRedPackageCount >>> 0), 
                null != e.isWithdrawEverydayMoneyToday && (t.isWithdrawEverydayMoneyToday = Boolean(e.isWithdrawEverydayMoneyToday)), 
                null != e.recordDayOfEverydayMoney && (t.recordDayOfEverydayMoney = e.recordDayOfEverydayMoney >>> 0), 
                null != e.totalWithdrawEverydayMoney && (t.totalWithdrawEverydayMoney = e.totalWithdrawEverydayMoney >>> 0), 
                t;
            }, RedGiftConfig.toObject = function(e, t) {
                t || (t = {});
                var n = {};
                return t.defaults && (n.money = 0, n.totalWithdrawMoney = 0, n.totalWithdrawMoneyTimes = 0, 
                n.totalGotRedPackageCount = 0, n.isWithdrawEverydayMoneyToday = !1, n.recordDayOfEverydayMoney = 0, 
                n.totalWithdrawEverydayMoney = 0), null != e.money && e.hasOwnProperty("money") && (n.money = e.money), 
                null != e.totalWithdrawMoney && e.hasOwnProperty("totalWithdrawMoney") && (n.totalWithdrawMoney = e.totalWithdrawMoney), 
                null != e.totalWithdrawMoneyTimes && e.hasOwnProperty("totalWithdrawMoneyTimes") && (n.totalWithdrawMoneyTimes = e.totalWithdrawMoneyTimes), 
                null != e.totalGotRedPackageCount && e.hasOwnProperty("totalGotRedPackageCount") && (n.totalGotRedPackageCount = e.totalGotRedPackageCount), 
                null != e.isWithdrawEverydayMoneyToday && e.hasOwnProperty("isWithdrawEverydayMoneyToday") && (n.isWithdrawEverydayMoneyToday = e.isWithdrawEverydayMoneyToday), 
                null != e.recordDayOfEverydayMoney && e.hasOwnProperty("recordDayOfEverydayMoney") && (n.recordDayOfEverydayMoney = e.recordDayOfEverydayMoney), 
                null != e.totalWithdrawEverydayMoney && e.hasOwnProperty("totalWithdrawEverydayMoney") && (n.totalWithdrawEverydayMoney = e.totalWithdrawEverydayMoney), 
                n;
            }, RedGiftConfig.prototype.toJSON = function() {
                return this.constructor.toObject(this, it.util.toJSONOptions);
            }, RedGiftConfig;
        }(), n.PlayerInfo = function() {
            function PlayerInfo(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
                    null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
            }
            return PlayerInfo.prototype.openID = "", PlayerInfo.prototype.sessID = "", PlayerInfo.prototype.userID = "", 
            PlayerInfo.prototype.lastSaveTime = 0, PlayerInfo.prototype.nickname = "", PlayerInfo.prototype.sex = 0, 
            PlayerInfo.prototype.headUrl = "", PlayerInfo.prototype.shareTimesOfToday = 0, PlayerInfo.prototype.recordDayOfShareTimes = 0, 
            PlayerInfo.prototype.advTimesOfToday = 0, PlayerInfo.prototype.recordDayOfAdvTimes = 0, 
            PlayerInfo.prototype.setting = null, PlayerInfo.prototype.currLevel = 0, PlayerInfo.prototype.currWeaponSkin = 0, 
            PlayerInfo.prototype.unlockedWeaponSkin = "", PlayerInfo.prototype.coin = 0, PlayerInfo.prototype.speed = 0, 
            PlayerInfo.prototype.time = 0, PlayerInfo.prototype.timeShow = 0, PlayerInfo.prototype.powerNum = 0, 
            PlayerInfo.prototype.SignDay = 0, PlayerInfo.prototype.SignTime = 0, PlayerInfo.prototype.totalShareTimes = 0, 
            PlayerInfo.prototype.totalAdvTimes = 0, PlayerInfo.prototype.redGift = null, PlayerInfo.create = function(e) {
                return new PlayerInfo(e);
            }, PlayerInfo.encode = function(e, t) {
                return t || (t = at.create()), t.uint32(10).string(e.openID), t.uint32(18).string(e.sessID), 
                t.uint32(26).string(e.userID), t.uint32(32).uint32(e.lastSaveTime), t.uint32(42).string(e.nickname), 
                t.uint32(48).uint32(e.sex), t.uint32(58).string(e.headUrl), t.uint32(64).uint32(e.shareTimesOfToday), 
                t.uint32(72).uint32(e.recordDayOfShareTimes), t.uint32(80).uint32(e.advTimesOfToday), 
                t.uint32(88).uint32(e.recordDayOfAdvTimes), st.secretagent.SettingConfig.encode(e.setting, t.uint32(98).fork()).ldelim(), 
                null != e.currLevel && Object.hasOwnProperty.call(e, "currLevel") && t.uint32(104).uint32(e.currLevel), 
                null != e.currWeaponSkin && Object.hasOwnProperty.call(e, "currWeaponSkin") && t.uint32(112).uint32(e.currWeaponSkin), 
                null != e.unlockedWeaponSkin && Object.hasOwnProperty.call(e, "unlockedWeaponSkin") && t.uint32(122).string(e.unlockedWeaponSkin), 
                null != e.coin && Object.hasOwnProperty.call(e, "coin") && t.uint32(128).uint32(e.coin), 
                null != e.speed && Object.hasOwnProperty.call(e, "speed") && t.uint32(136).uint32(e.speed), 
                null != e.time && Object.hasOwnProperty.call(e, "time") && t.uint32(144).uint32(e.time), 
                null != e.timeShow && Object.hasOwnProperty.call(e, "timeShow") && t.uint32(152).uint32(e.timeShow), 
                null != e.powerNum && Object.hasOwnProperty.call(e, "powerNum") && t.uint32(160).uint32(e.powerNum), 
                null != e.SignDay && Object.hasOwnProperty.call(e, "SignDay") && t.uint32(168).uint32(e.SignDay), 
                null != e.SignTime && Object.hasOwnProperty.call(e, "SignTime") && t.uint32(176).uint32(e.SignTime), 
                null != e.totalShareTimes && Object.hasOwnProperty.call(e, "totalShareTimes") && t.uint32(184).uint32(e.totalShareTimes), 
                null != e.totalAdvTimes && Object.hasOwnProperty.call(e, "totalAdvTimes") && t.uint32(192).uint32(e.totalAdvTimes), 
                null != e.redGift && Object.hasOwnProperty.call(e, "redGift") && st.secretagent.RedGiftConfig.encode(e.redGift, t.uint32(202).fork()).ldelim(), 
                t;
            }, PlayerInfo.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim();
            }, PlayerInfo.decode = function(e, t) {
                e instanceof ot || (e = ot.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, i = new st.secretagent.PlayerInfo(); e.pos < n; ) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                      case 1:
                        i.openID = e.string();
                        break;

                      case 2:
                        i.sessID = e.string();
                        break;

                      case 3:
                        i.userID = e.string();
                        break;

                      case 4:
                        i.lastSaveTime = e.uint32();
                        break;

                      case 5:
                        i.nickname = e.string();
                        break;

                      case 6:
                        i.sex = e.uint32();
                        break;

                      case 7:
                        i.headUrl = e.string();
                        break;

                      case 8:
                        i.shareTimesOfToday = e.uint32();
                        break;

                      case 9:
                        i.recordDayOfShareTimes = e.uint32();
                        break;

                      case 10:
                        i.advTimesOfToday = e.uint32();
                        break;

                      case 11:
                        i.recordDayOfAdvTimes = e.uint32();
                        break;

                      case 12:
                        i.setting = st.secretagent.SettingConfig.decode(e, e.uint32());
                        break;

                      case 13:
                        i.currLevel = e.uint32();
                        break;

                      case 14:
                        i.currWeaponSkin = e.uint32();
                        break;

                      case 15:
                        i.unlockedWeaponSkin = e.string();
                        break;

                      case 16:
                        i.coin = e.uint32();
                        break;

                      case 17:
                        i.speed = e.uint32();
                        break;

                      case 18:
                        i.time = e.uint32();
                        break;

                      case 19:
                        i.timeShow = e.uint32();
                        break;

                      case 20:
                        i.powerNum = e.uint32();
                        break;

                      case 21:
                        i.SignDay = e.uint32();
                        break;

                      case 22:
                        i.SignTime = e.uint32();
                        break;

                      case 23:
                        i.totalShareTimes = e.uint32();
                        break;

                      case 24:
                        i.totalAdvTimes = e.uint32();
                        break;

                      case 25:
                        i.redGift = st.secretagent.RedGiftConfig.decode(e, e.uint32());
                        break;

                      default:
                        e.skipType(7 & o);
                    }
                }
                if (!i.hasOwnProperty("openID")) throw rt.ProtocolError("missing required 'openID'", {
                    instance: i
                });
                if (!i.hasOwnProperty("sessID")) throw rt.ProtocolError("missing required 'sessID'", {
                    instance: i
                });
                if (!i.hasOwnProperty("userID")) throw rt.ProtocolError("missing required 'userID'", {
                    instance: i
                });
                if (!i.hasOwnProperty("lastSaveTime")) throw rt.ProtocolError("missing required 'lastSaveTime'", {
                    instance: i
                });
                if (!i.hasOwnProperty("nickname")) throw rt.ProtocolError("missing required 'nickname'", {
                    instance: i
                });
                if (!i.hasOwnProperty("sex")) throw rt.ProtocolError("missing required 'sex'", {
                    instance: i
                });
                if (!i.hasOwnProperty("headUrl")) throw rt.ProtocolError("missing required 'headUrl'", {
                    instance: i
                });
                if (!i.hasOwnProperty("shareTimesOfToday")) throw rt.ProtocolError("missing required 'shareTimesOfToday'", {
                    instance: i
                });
                if (!i.hasOwnProperty("recordDayOfShareTimes")) throw rt.ProtocolError("missing required 'recordDayOfShareTimes'", {
                    instance: i
                });
                if (!i.hasOwnProperty("advTimesOfToday")) throw rt.ProtocolError("missing required 'advTimesOfToday'", {
                    instance: i
                });
                if (!i.hasOwnProperty("recordDayOfAdvTimes")) throw rt.ProtocolError("missing required 'recordDayOfAdvTimes'", {
                    instance: i
                });
                if (!i.hasOwnProperty("setting")) throw rt.ProtocolError("missing required 'setting'", {
                    instance: i
                });
                return i;
            }, PlayerInfo.decodeDelimited = function(e) {
                return e instanceof ot || (e = new ot(e)), this.decode(e, e.uint32());
            }, PlayerInfo.verify = function(e) {
                if ("object" != _typeof2(e) || null === e) return "object expected";
                if (!rt.isString(e.openID)) return "openID: string expected";
                if (!rt.isString(e.sessID)) return "sessID: string expected";
                if (!rt.isString(e.userID)) return "userID: string expected";
                if (!rt.isInteger(e.lastSaveTime)) return "lastSaveTime: integer expected";
                if (!rt.isString(e.nickname)) return "nickname: string expected";
                if (!rt.isInteger(e.sex)) return "sex: integer expected";
                if (!rt.isString(e.headUrl)) return "headUrl: string expected";
                if (!rt.isInteger(e.shareTimesOfToday)) return "shareTimesOfToday: integer expected";
                if (!rt.isInteger(e.recordDayOfShareTimes)) return "recordDayOfShareTimes: integer expected";
                if (!rt.isInteger(e.advTimesOfToday)) return "advTimesOfToday: integer expected";
                if (!rt.isInteger(e.recordDayOfAdvTimes)) return "recordDayOfAdvTimes: integer expected";
                var t;
                if (t = st.secretagent.SettingConfig.verify(e.setting)) return "setting." + t;
                if (null != e.currLevel && e.hasOwnProperty("currLevel") && !rt.isInteger(e.currLevel)) return "currLevel: integer expected";
                if (null != e.currWeaponSkin && e.hasOwnProperty("currWeaponSkin") && !rt.isInteger(e.currWeaponSkin)) return "currWeaponSkin: integer expected";
                if (null != e.unlockedWeaponSkin && e.hasOwnProperty("unlockedWeaponSkin") && !rt.isString(e.unlockedWeaponSkin)) return "unlockedWeaponSkin: string expected";
                if (null != e.coin && e.hasOwnProperty("coin") && !rt.isInteger(e.coin)) return "coin: integer expected";
                if (null != e.speed && e.hasOwnProperty("speed") && !rt.isInteger(e.speed)) return "speed: integer expected";
                if (null != e.time && e.hasOwnProperty("time") && !rt.isInteger(e.time)) return "time: integer expected";
                if (null != e.timeShow && e.hasOwnProperty("timeShow") && !rt.isInteger(e.timeShow)) return "timeShow: integer expected";
                if (null != e.powerNum && e.hasOwnProperty("powerNum") && !rt.isInteger(e.powerNum)) return "powerNum: integer expected";
                if (null != e.SignDay && e.hasOwnProperty("SignDay") && !rt.isInteger(e.SignDay)) return "SignDay: integer expected";
                if (null != e.SignTime && e.hasOwnProperty("SignTime") && !rt.isInteger(e.SignTime)) return "SignTime: integer expected";
                if (null != e.totalShareTimes && e.hasOwnProperty("totalShareTimes") && !rt.isInteger(e.totalShareTimes)) return "totalShareTimes: integer expected";
                if (null != e.totalAdvTimes && e.hasOwnProperty("totalAdvTimes") && !rt.isInteger(e.totalAdvTimes)) return "totalAdvTimes: integer expected";
                if (null != e.redGift && e.hasOwnProperty("redGift") && (t = st.secretagent.RedGiftConfig.verify(e.redGift))) return "redGift." + t;
                return null;
            }, PlayerInfo.fromObject = function(e) {
                if (e instanceof st.secretagent.PlayerInfo) return e;
                var t = new st.secretagent.PlayerInfo();
                if (null != e.openID && (t.openID = String(e.openID)), null != e.sessID && (t.sessID = String(e.sessID)), 
                null != e.userID && (t.userID = String(e.userID)), null != e.lastSaveTime && (t.lastSaveTime = e.lastSaveTime >>> 0), 
                null != e.nickname && (t.nickname = String(e.nickname)), null != e.sex && (t.sex = e.sex >>> 0), 
                null != e.headUrl && (t.headUrl = String(e.headUrl)), null != e.shareTimesOfToday && (t.shareTimesOfToday = e.shareTimesOfToday >>> 0), 
                null != e.recordDayOfShareTimes && (t.recordDayOfShareTimes = e.recordDayOfShareTimes >>> 0), 
                null != e.advTimesOfToday && (t.advTimesOfToday = e.advTimesOfToday >>> 0), null != e.recordDayOfAdvTimes && (t.recordDayOfAdvTimes = e.recordDayOfAdvTimes >>> 0), 
                null != e.setting) {
                    if ("object" != _typeof2(e.setting)) throw TypeError(".secretagent.PlayerInfo.setting: object expected");
                    t.setting = st.secretagent.SettingConfig.fromObject(e.setting);
                }
                if (null != e.currLevel && (t.currLevel = e.currLevel >>> 0), null != e.currWeaponSkin && (t.currWeaponSkin = e.currWeaponSkin >>> 0), 
                null != e.unlockedWeaponSkin && (t.unlockedWeaponSkin = String(e.unlockedWeaponSkin)), 
                null != e.coin && (t.coin = e.coin >>> 0), null != e.speed && (t.speed = e.speed >>> 0), 
                null != e.time && (t.time = e.time >>> 0), null != e.timeShow && (t.timeShow = e.timeShow >>> 0), 
                null != e.powerNum && (t.powerNum = e.powerNum >>> 0), null != e.SignDay && (t.SignDay = e.SignDay >>> 0), 
                null != e.SignTime && (t.SignTime = e.SignTime >>> 0), null != e.totalShareTimes && (t.totalShareTimes = e.totalShareTimes >>> 0), 
                null != e.totalAdvTimes && (t.totalAdvTimes = e.totalAdvTimes >>> 0), null != e.redGift) {
                    if ("object" != _typeof2(e.redGift)) throw TypeError(".secretagent.PlayerInfo.redGift: object expected");
                    t.redGift = st.secretagent.RedGiftConfig.fromObject(e.redGift);
                }
                return t;
            }, PlayerInfo.toObject = function(e, t) {
                t || (t = {});
                var n = {};
                return t.defaults && (n.openID = "", n.sessID = "", n.userID = "", n.lastSaveTime = 0, 
                n.nickname = "", n.sex = 0, n.headUrl = "", n.shareTimesOfToday = 0, n.recordDayOfShareTimes = 0, 
                n.advTimesOfToday = 0, n.recordDayOfAdvTimes = 0, n.setting = null, n.currLevel = 0, 
                n.currWeaponSkin = 0, n.unlockedWeaponSkin = "", n.coin = 0, n.speed = 0, n.time = 0, 
                n.timeShow = 0, n.powerNum = 0, n.SignDay = 0, n.SignTime = 0, n.totalShareTimes = 0, 
                n.totalAdvTimes = 0, n.redGift = null), null != e.openID && e.hasOwnProperty("openID") && (n.openID = e.openID), 
                null != e.sessID && e.hasOwnProperty("sessID") && (n.sessID = e.sessID), null != e.userID && e.hasOwnProperty("userID") && (n.userID = e.userID), 
                null != e.lastSaveTime && e.hasOwnProperty("lastSaveTime") && (n.lastSaveTime = e.lastSaveTime), 
                null != e.nickname && e.hasOwnProperty("nickname") && (n.nickname = e.nickname), 
                null != e.sex && e.hasOwnProperty("sex") && (n.sex = e.sex), null != e.headUrl && e.hasOwnProperty("headUrl") && (n.headUrl = e.headUrl), 
                null != e.shareTimesOfToday && e.hasOwnProperty("shareTimesOfToday") && (n.shareTimesOfToday = e.shareTimesOfToday), 
                null != e.recordDayOfShareTimes && e.hasOwnProperty("recordDayOfShareTimes") && (n.recordDayOfShareTimes = e.recordDayOfShareTimes), 
                null != e.advTimesOfToday && e.hasOwnProperty("advTimesOfToday") && (n.advTimesOfToday = e.advTimesOfToday), 
                null != e.recordDayOfAdvTimes && e.hasOwnProperty("recordDayOfAdvTimes") && (n.recordDayOfAdvTimes = e.recordDayOfAdvTimes), 
                null != e.setting && e.hasOwnProperty("setting") && (n.setting = st.secretagent.SettingConfig.toObject(e.setting, t)), 
                null != e.currLevel && e.hasOwnProperty("currLevel") && (n.currLevel = e.currLevel), 
                null != e.currWeaponSkin && e.hasOwnProperty("currWeaponSkin") && (n.currWeaponSkin = e.currWeaponSkin), 
                null != e.unlockedWeaponSkin && e.hasOwnProperty("unlockedWeaponSkin") && (n.unlockedWeaponSkin = e.unlockedWeaponSkin), 
                null != e.coin && e.hasOwnProperty("coin") && (n.coin = e.coin), null != e.speed && e.hasOwnProperty("speed") && (n.speed = e.speed), 
                null != e.time && e.hasOwnProperty("time") && (n.time = e.time), null != e.timeShow && e.hasOwnProperty("timeShow") && (n.timeShow = e.timeShow), 
                null != e.powerNum && e.hasOwnProperty("powerNum") && (n.powerNum = e.powerNum), 
                null != e.SignDay && e.hasOwnProperty("SignDay") && (n.SignDay = e.SignDay), null != e.SignTime && e.hasOwnProperty("SignTime") && (n.SignTime = e.SignTime), 
                null != e.totalShareTimes && e.hasOwnProperty("totalShareTimes") && (n.totalShareTimes = e.totalShareTimes), 
                null != e.totalAdvTimes && e.hasOwnProperty("totalAdvTimes") && (n.totalAdvTimes = e.totalAdvTimes), 
                null != e.redGift && e.hasOwnProperty("redGift") && (n.redGift = st.secretagent.RedGiftConfig.toObject(e.redGift, t)), 
                n;
            }, PlayerInfo.prototype.toJSON = function() {
                return this.constructor.toObject(this, it.util.toJSONOptions);
            }, PlayerInfo;
        }(), n;
    }();
    var lt = st.secretagent, ct = {
        init: function init() {
            console.log("start to load framework_extend.js");
        }
    };
    var ht = /* */ function(_Laya$Script5) {
        _inherits2(ht, _Laya$Script5);
        var _super46 = _createSuper2(ht);
        function ht() {
            var _this68;
            _classCallCheck2(this, ht);
            _this68 = _super46.call(this), _this68._serverCheckFinishedCb = null, _this68._showLoadingFunc = null, 
            _this68._hideLoadingFunc = null, _this68._isBannerOnShow = !1, _this68._bannerAdvObj = null, 
            _this68._isFirstStartGame = !1, _this68._startApp();
            return _this68;
        }
        _createClass2(ht, [ {
            key: "_startApp",
            value: function _startApp() {
                Ie.init(), we.init(), "undefined" != typeof lodash && G_Utils.registerLodash(lodash), 
                G_UIManager.registerAllUIs(), G_GameDB.load(lt), G_GameDB.registerAll(G_GameDBConfigs), 
                G_GameDB.onLoad(function() {
                    ct.init(), G_ServerInfo.load(function() {
                        G_HttpHelper.registerGetServerTimeFunc(function() {
                            return G_ServerInfo.getServerTime();
                        }), this._doServerCheckFinishedCb();
                    }.bind(this));
                }.bind(this)), this._onAppEventRegistered(), this._onBannerEventRegistered(), this._onInsertEventRegistered();
            }
        }, {
            key: "_onAppEventRegistered",
            value: function _onAppEventRegistered() {
                var _this69 = this;
                G_Event.addEventListerner(G_EventName.EN_APP_AFTER_ONSHOW, function() {
                    d.isWatchingVideoAdv() || G_SoundMgr.resumeMusic();
                }), G_Event.addEventListerner(G_EventName.EN_APP_BEFORE_ONHIDE, function() {
                    G_SoundMgr.pauseMusic();
                }), G_Event.addEventListerner(G_EventName.EN_SYSTEM_ERROR, function() {
                    G_PlatHelper.showModal(G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_SYSTEM_ERROR_TITLE).word, G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_SYSTEM_ERROR_CONTENT).word, !0, function(e) {
                        e ? (console.error("restart"), G_PlatHelper.restartApp()) : (console.error("exit"), 
                        G_PlatHelper.exitApp());
                    }, {
                        confirmText: G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_SYSTEM_ERROR_RELOAD_GAME).word,
                        cancelText: G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_SYSTEM_ERROR_EXIT_GAME).word
                    });
                }), G_Event.addEventListerner(G_EventName.EN_SDK_NOT_SUPPORT, function() {
                    var e = G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_SDK_NOT_SUPPORT_FORMAT).word, t = "";
                    t = G_PlatHelper.isQQPlatform() ? e.format(G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_QQ_PLATFORM_NAME).word) : e.format(G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_WX_PLATFORM_NAME).word), 
                    G_PlatHelper.showToast(t);
                }), G_Event.addEventListerner(G_EventName.EN_VIDEO_NOT_SUPPORT_RIGHT_NOW, function() {
                    G_PlatHelper.showToast(G_GameDB.getUIWordByID(UIWordIDs.UIWORD_ID_VIDEO_NOT_SUPPORT).word);
                }), G_Event.addEventListerner(G_EventName.EN_FIRST_OPEN_MAIN_SCENE, function() {
                    G_PlatHelper.isNativePlatform() && G_NativeAdvMgr.preload();
                }), G_Event.addEventListerner(G_EventName.EN_FIRST_START_GAME, function() {
                    _this69._isFirstStartGame || (_this69._isFirstStartGame = !0);
                });
            }
        }, {
            key: "_onBannerEventRegistered",
            value: function _onBannerEventRegistered() {
                G_Event.addEventListerner(G_EventName.EN_SHOW_BANNER_AD, function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    G_PlatHelper.isNativePlatform() ? (this._isBannerOnShow = !0, G_NativeAdvMgr.showBanner()) : G_PlatHelper.getPlat() && d.showBannerAd(e);
                }.bind(this)), G_Event.addEventListerner(G_EventName.EN_HIDE_BANNER_AD, function() {
                    G_PlatHelper.isNativePlatform() ? (this._isBannerOnShow = !1, G_NativeAdvMgr.hideBanner()) : G_PlatHelper.getPlat() && d.hideBannerAd();
                }.bind(this)), G_Event.addEventListerner(G_EventName.EN_MOVE_BANNER_AD, function(e) {
                    !G_PlatHelper.isNativePlatform() && G_PlatHelper.getPlat() && d.moveBannerAd(e);
                }.bind(this));
            }
        }, {
            key: "_onInsertEventRegistered",
            value: function _onInsertEventRegistered() {
                G_Event.addEventListerner(G_EventName.EN_SHOW_INSERT_AD, function(e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Random";
                    G_PlatHelper.isNativePlatform() ? G_NativeAdvMgr.showInteraction(function() {
                        console.log("just shutdown the interaction ad...");
                    }, function() {
                        console.log("show interaction ad fail, try later...");
                    }) : G_PlatHelper.getPlat() && d.showInterstitialAd({
                        closeCb: e
                    });
                }.bind(this));
            }
        }, {
            key: "onServerCheckFinished",
            value: function onServerCheckFinished(e) {
                "function" == typeof e && (this._serverCheckFinishedCb = e);
            }
        }, {
            key: "_doServerCheckFinishedCb",
            value: function _doServerCheckFinishedCb() {
                "function" == typeof this._serverCheckFinishedCb && this._serverCheckFinishedCb();
            }
        }, {
            key: "registerShowLoadingFunc",
            value: function registerShowLoadingFunc(e) {
                "function" == typeof e && (this._showLoadingFunc = e);
            }
        }, {
            key: "_doShowLoading",
            value: function _doShowLoading(e) {
                "function" == typeof this._showLoadingFunc && this._showLoadingFunc(e);
            }
        }, {
            key: "registerHideLoadingFunc",
            value: function registerHideLoadingFunc(e) {
                "function" == typeof e && (this._hideLoadingFunc = e);
            }
        }, {
            key: "_doHideLoading",
            value: function _doHideLoading() {
                "function" == typeof this._hideLoadingFunc && this._hideLoadingFunc();
            }
        } ]);
        return ht;
    }(Laya.Script);
    var dt = /* */ function(_Laya$Scene2) {
        _inherits2(dt, _Laya$Scene2);
        var _super47 = _createSuper2(dt);
        function dt(e) {
            var _this70;
            _classCallCheck2(this, dt);
            _this70 = _super47.call(this), _this70._app = null, _this70._isCfgChecked = !1, 
            _this70._isHLSDKInited = !1, _this70._isLoaded = !1, _this70.loadScene(e), _this70._onInitUI(), 
            _this70._onRegisterEvent();
            return _this70;
        }
        _createClass2(dt, [ {
            key: "_onInitUI",
            value: function _onInitUI() {
                "function" == typeof this.onInitUI && this.onInitUI();
            }
        }, {
            key: "_onRegisterEvent",
            value: function _onRegisterEvent() {
                "function" == typeof this.onRegisterEvent && this.onRegisterEvent();
            }
        }, {
            key: "_startCheckServer",
            value: function _startCheckServer() {
                if (this._app = this.addComponent(ht), this._app) {
                    var e = this;
                    this._app.registerShowLoadingFunc(function(t) {
                        e._autoShowLoading(t);
                    }), this._app.registerHideLoadingFunc(function() {
                        e._cancelAutoShowLoading(!0);
                    }), this._app.onServerCheckFinished(function() {
                        e.onServerChecked();
                    });
                }
            }
        }, {
            key: "_onServerChecked",
            value: function _onServerChecked() {
                "function" == typeof this.onServerChecked ? this.onServerChecked() : (this._startLogin(), 
                this._startInitHLSDK(), this._startLoad());
            }
        }, {
            key: "_startInitHLSDK",
            value: function _startInitHLSDK() {
                var _this71 = this;
                d.init({
                    onInit: function onInit() {
                        _this71._openGameScene({
                            isHLSDKInited: !0
                        });
                    }
                });
            }
        }, {
            key: "_startLogin",
            value: function _startLogin() {
                var e = this;
                console.log("auto login..."), G_PlatHelper.autoLogin(function(t) {
                    t ? e._onLogined(t) : (console.log("manual login..."), G_PlatHelper.login(null, function(t) {
                        e._onLogined(t);
                    }));
                });
            }
        }, {
            key: "_startLoad",
            value: function _startLoad() {
                var _this72 = this;
                if ("" !== G_BaseUrlPath && Laya.getMiniAdpter && Laya.getMiniAdpter()) {
                    Laya.URL.basePath = G_BaseUrlPath;
                    var _e100 = G_AppNativefiles, _t98 = Laya.getMiniAdpter();
                    _t98 && (_t98.nativefiles = _t98.nativefiles.concat(_e100), _t98.AutoCacheDownFile = !0);
                }
                var e = function e() {
                    G_PreloadAssets.length > 0 ? (Laya.loader.create(G_PreloadAssets, Laya.Handler.create(_this72, _this72._onLoadComplete), Laya.Handler.create(_this72, _this72._onLoadProgress)), 
                    Laya.loader.on(Laya.Event.ERROR, null, function() {
                        G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR);
                    })) : (_this72._onLoadProgress(1), _this72._onLoadComplete());
                };
                G_PlatHelper.getPlat() && !G_PlatHelper.isNativePlatform() && "" !== G_GameDB.getBaseConfigByID(BaseConfigIDs.BC_HTTP_ADDR_OF_ASSET_VERSION).str ? G_AssetMgr.init(function() {
                    G_AssetMgr.download(G_PreDownloadAssets, function(e) {
                        _this72._onLoadProgress(e);
                    }, function() {
                        _this72._onLoadProgress(0), e();
                    });
                }) : e();
            }
        }, {
            key: "_onLoadProgress",
            value: function _onLoadProgress(e) {
                "function" == typeof this.onLoadProgress && this.onLoadProgress(e);
            }
        }, {
            key: "_onLoadComplete",
            value: function _onLoadComplete() {
                "function" == typeof this.onLoadComplete ? this.onLoadComplete() : this._openGameScene({
                    isLoaded: !0
                });
            }
        }, {
            key: "_onLogined",
            value: function _onLogined(e) {
                "function" == typeof this.onLogined ? this.onLogined(e) : this._startCheckCfgs();
            }
        }, {
            key: "_startCheckCfgs",
            value: function _startCheckCfgs() {
                this._onCfgChecked();
            }
        }, {
            key: "_onCfgChecked",
            value: function _onCfgChecked() {
                "function" == typeof this.onCfgChecked ? this.onCfgChecked() : this._openGameScene({
                    cfgChecked: !0
                });
            }
        }, {
            key: "_openGameScene",
            value: function _openGameScene(e) {
                var _this73 = this;
                e && e.cfgChecked && (this._isCfgChecked = !0), e && e.isLoaded && (this._isLoaded = !0), 
                e && e.isHLSDKInited && (this._isHLSDKInited = !0), console.log("login state: cfgChecked: ", this._isCfgChecked, ", isLoaded: ", this._isLoaded, ", isHLSDKInited: ", this._isHLSDKInited), 
                this._isCfgChecked && this._isLoaded && this._isHLSDKInited && G_Scheduler.schedule("delay_open_game_scene", function() {
                    var e = _this73.getGameSceneName();
                    console.log("open scene: {0}...".format(e)), Laya.Scene.open(e);
                }, !1, 100, 0);
            }
        }, {
            key: "getGameSceneName",
            value: function getGameSceneName() {
                return "game/GameScene.scene";
            }
        }, {
            key: "_autoShowLoading",
            value: function _autoShowLoading(e) {
                this._cancelAutoShowLoading(!0), this._isWillShowLoading = !0, G_Scheduler.schedule("Loading_Auto_Show_Loading", function() {
                    G_PlatHelper.showLoading(e), this._cancelAutoShowLoading(!1);
                }.bind(this), !1, 1e3);
            }
        }, {
            key: "_cancelAutoShowLoading",
            value: function _cancelAutoShowLoading(e) {
                this._isWillShowLoading && (this._isWillShowLoading = !1, G_Scheduler.unschedule("Loading_Auto_Show_Loading")), 
                e && G_PlatHelper.hideLoading();
            }
        } ]);
        return dt;
    }(Laya.Scene);
    var ut = /* */ function(_dt) {
        _inherits2(ut, _dt);
        var _super48 = _createSuper2(ut);
        function ut() {
            _classCallCheck2(this, ut);
            return _super48.call(this, "loading/LoadingScene.scene");
        }
        _createClass2(ut, [ {
            key: "onInitUI",
            value: function onInitUI() {}
        }, {
            key: "onRegisterEvent",
            value: function onRegisterEvent() {}
        }, {
            key: "onEnable",
            value: function onEnable() {
                this._startCheckServer();
            }
        }, {
            key: "onServerChecked",
            value: function onServerChecked() {
                console.log("server checked successfully..."), this._startLogin(), this._startInitHLSDK(), 
                this._startLoad();
            }
        }, {
            key: "onLogined",
            value: function onLogined(e) {
                console.log("login successfully..."), console.log(e), this._startCheckCfgs();
            }
        }, {
            key: "onLoadComplete",
            value: function onLoadComplete() {
                this._openGameScene({
                    isLoaded: !0
                });
            }
        }, {
            key: "onCfgChecked",
            value: function onCfgChecked() {
                this._openGameScene({
                    cfgChecked: !0
                });
            }
        }, {
            key: "getGameSceneName",
            value: function getGameSceneName() {
                return "game/GameScene.scene";
            }
        }, {
            key: "onLoadProgress",
            value: function onLoadProgress(e) {
                this.loadingProgress && (this.loadingProgress.value = e, this.loadingProgress.getChildByName("loadingTips").text = e <= .3 ? "正在为您准备变身的家具....." + parseInt(100 * e) + "%" : .7 < e ? "正在变身，即将进入场景....." + parseInt(100 * e) + "%" : "正在为您加载躲藏的地点......" + parseInt(100 * e) + "%");
            }
        } ]);
        return ut;
    }(dt);
    var _t = /* */ function() {
        function _t() {
            _classCallCheck2(this, _t);
        }
        _createClass2(_t, null, [ {
            key: "init",
            value: function init() {
                var e = Laya.ClassUtils.regClass;
                e("script/game/Game.js", l), e("script/game/ctrl/WidgetMgr.js", c), e("script/game/GameTest.js", u), 
                e("script/game/ctrl/AutoShake.js", _), e("script/game/ctrl/AutoScale.js", f), e("script/game/Loading.js", ut), 
                e("script/game/ui/popup/CaptureMgr.js", Ae), e("script/game/Page/FailView.js", Fe), 
                e("script/game/Page/GameView.js", Ve), e("script/game/Page/GiftView.js", ze), e("script/game/Page/PlusCoinPopup.js", je), 
                e("script/game/Page/PlusPowerPopup.js", Ke), e("script/game/Page/SelectPopup.js", Ye), 
                e("script/game/ui/popup/SettingPopup.js", Re), e("script/game/Page/SignPopup.js", qe), 
                e("script/game/Page/StartMistakePopup.js", Xe), e("script/game/Page/StartView.js", xe), 
                e("script/game/Page/SuccessView.js", We);
            }
        } ]);
        return _t;
    }();
    _t.width = 750, _t.height = 1334, _t.scaleMode = "fixedwidth", _t.screenMode = "none", 
    _t.alignV = "top", _t.alignH = "left", _t.startScene = "loading/LoadingScene.scene", 
    _t.sceneRoot = "", _t.debug = !1, _t.stat = !1, _t.physicsDebug = !1, _t.exportSceneToJson = !0, 
    _t.init();
    new (/* */ function() {
        function _class4() {
            _classCallCheck2(this, _class4);
            if (void 0 !== window.mz) if (mz.getAndroidVersion() <= 23) console.log("sdk is below android 6"), 
            mz.setSurfaceScaleShowAll(_t.width, _t.height), _t.scaleMode = Laya.Stage.SCALE_SHOWALL; else {
                var _e101 = qg.getSystemInfoSync();
                if (_t.scaleMode === Laya.Stage.SCALE_FIXED_WIDTH) {
                    var _t99 = _t.width, _n65 = _e101.screenHeight / _e101.screenWidth * _t99;
                    mz.setSurfaceScaleShowAll(_t99, _n65), console.log("mz.setSurfaceScaleShowAll", _t99, _n65);
                } else if (_t.scaleMode === Laya.Stage.SCALE_FIXED_HEIGHT) {
                    var _t100 = _t.height, _n66 = _e101.screenWidth / _e101.screenHeight * _t100;
                    mz.setSurfaceScaleShowAll(_n66, _t100), console.log("mz.setSurfaceScaleShowAll", _n66, _t100);
                }
            }
            window.Laya3D ? Laya3D.init(_t.width, _t.height) : Laya.init(_t.width, _t.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = _t.scaleMode, Laya.stage.screenMode = _t.screenMode, Laya.stage.alignV = _t.alignV, 
            Laya.stage.alignH = _t.alignH, Laya.URL.exportSceneToJson = _t.exportSceneToJson, 
            (_t.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            _t.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), _t.stat && Laya.Stat.show(), 
            Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        _createClass2(_class4, [ {
            key: "onVersionLoaded",
            value: function onVersionLoaded() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }
        }, {
            key: "onConfigLoaded",
            value: function onConfigLoaded() {
                _t.startScene && Laya.Scene.open(_t.startScene);
            }
        } ]);
        return _class4;
    }())();
}();