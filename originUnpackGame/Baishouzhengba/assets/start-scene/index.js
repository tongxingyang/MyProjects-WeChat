var _typeof2 = require("../../@babel/runtime/helpers/typeof");

window.__require = function e(t, a, n) {
    function i(c, r) {
        if (!a[c]) {
            if (!t[c]) {
                var l = c.split("/");
                if (l = l[l.length - 1], !t[l]) {
                    var s = "function" == typeof __require && __require;
                    if (!r && s) return s(l, !0);
                    if (o) return o(l, !0);
                    throw new Error("Cannot find module '" + c + "'");
                }
                c = l;
            }
            var h = a[c] = {
                exports: {}
            };
            t[c][0].call(h.exports, function(e) {
                return i(t[c][1][e] || e);
            }, h, h.exports, e, t, a, n);
        }
        return a[c].exports;
    }
    for (var o = "function" == typeof __require && __require, c = 0; c < n.length; c++) {
        i(n[c]);
    }
    return i;
}({
    ButtonGroup: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "74d8dpLCjVE1IpX6s4ztDf+", "ButtonGroup");
        var _n, i = this && this.__extends || (_n = function n(e, t) {
            return (_n = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.BTG_EVT_INDEX_ACTIVED = void 0;
        var c = cc._decorator, r = c.ccclass, l = c.property;
        a.BTG_EVT_INDEX_ACTIVED = "on-index-actived";
        var s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.titleTransition = null, t.frameTransition = null, t._activedIndex = null, 
                t.eventTarget = t.node, t.buttons = [], t.titles = [], t.backgrounds = [], t.extraFrames = [], 
                t.extraColors = [], t.ignoreMultipleClicks = !0, t;
            }
            return i(t, e), Object.defineProperty(t.prototype, "activedIndex", {
                get: function get() {
                    return this._activedIndex;
                },
                set: function set(e) {
                    this._activedIndex = e;
                    var t = this.frameTransition, a = this.titleTransition;
                    t && this.backgrounds.forEach(function(a, n) {
                        t(a, n == e, n);
                    }), a && this.titles.forEach(function(t, n) {
                        a(t, n == e, n);
                    });
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.onLoad = function() {
                var e = this;
                console.log(this.eventTarget == this.node, this.eventTarget), this.eventTarget || (this.eventTarget = this.node), 
                this.buttons.forEach(function(t, n) {
                    t.node.on("click", function() {
                        e.ignoreMultipleClicks && n === e.activedIndex || e.eventTarget.emit(a.BTG_EVT_INDEX_ACTIVED, n), 
                        e.activedIndex = n;
                    });
                });
            }, t.prototype.start = function() {
                this.activedIndex = 0;
            }, o([ l(cc.Node) ], t.prototype, "eventTarget", void 0), o([ l([ cc.Button ]) ], t.prototype, "buttons", void 0), 
            o([ l([ cc.Node ]) ], t.prototype, "titles", void 0), o([ l(cc.Node) ], t.prototype, "backgrounds", void 0), 
            o([ l([ cc.SpriteFrame ]) ], t.prototype, "extraFrames", void 0), o([ l([ cc.Color ]) ], t.prototype, "extraColors", void 0), 
            o([ l ], t.prototype, "ignoreMultipleClicks", void 0), o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    Container: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "f55ecI93atKFKKo65/7M5xO", "Container");
        var _n2, i = this && this.__extends || (_n2 = function n(e, t) {
            return (_n2 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n2(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = (c.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return i(t, e), t.prototype.onLoad = function() {
                var e = this;
                this._nodes = this.node.children.slice(), this._lists = new Array(this._nodes.length), 
                this._nodes.forEach(function(t, a) {
                    t && (t.removeFromParent(!1), e._lists[a] = [ t ]);
                });
            }, t.prototype.onDestroy = function() {
                for (var e = 0, t = this._lists; e < t.length; e++) {
                    var a = t[e];
                    a && a.forEach(function(e) {
                        return e.destroy();
                    });
                }
            }, t.prototype.push = function(e, t) {
                e.parent && (e.removeFromParent(!1), this._lists[t].push(e));
            }, t.prototype.pop = function(e) {
                var t = this._lists[e], a = t.length ? t.pop() : cc.instantiate(this._nodes[e]);
                return a.parent = this.node, a;
            }, o([ r ], t);
        }(cc.Component));
        a.default = l, cc._RF.pop();
    }, {} ],
    CustomBar: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "56db5W8qgVMxL1rSHMkdM1E", "CustomBar");
        var _n3, i = this && this.__extends || (_n3 = function n(e, t) {
            return (_n3 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n3(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._percent = 0, t.initialLength = 0, t.direction = cc.Layout.AxisDirection.HORIZONTAL, 
                t;
            }
            return i(t, e), Object.defineProperty(t.prototype, "percent", {
                get: function get() {
                    return this._percent;
                },
                set: function set(e) {
                    this._percent = e, this.initialLength ? this.direction == cc.Layout.AxisDirection.HORIZONTAL ? this.node.width = this.initialLength * e : this.node.height = this.initialLength * e : console.warn("The initial length of custom progress bar shall not be 0");
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.onLoad = function() {
                this.initialLength || (this.direction == cc.Layout.AxisDirection.HORIZONTAL ? this.initialLength = this.node.width : this.initialLength = this.node.height);
            }, o([ l ], t.prototype, "initialLength", void 0), o([ l({
                type: cc.Layout.AxisDirection
            }) ], t.prototype, "direction", void 0), o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    DataManage: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "486eaoNSZ9JvZKoFn8a59Pj", "DataManage");
        var _n4, i = this && this.__extends || (_n4 = function n(e, t) {
            return (_n4 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n4(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.Utils = a.DataManage = void 0;
        var c, r, l = e("./libppgame/libwechat"), s = cc._decorator, h = s.ccclass, d = (s.property, 
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return i(t, e), t.prototype.start = function() {
                r.getLocalData();
            }, o([ h ], t);
        }(cc.Component));
        a.default = d, function(e) {
            e.cardData = [], e.gold = 0, e.battleTeam = [], e.iconId = 1, e.playerName = "未命名", 
            e.stage = 0, e.enemyData = [], e.myTeamPower = 0, e.arenaData = [], e.battleType = 0, 
            e.battleStageOrPosi = 0, e.lastLanding = 0, e.arenaBoxData = [], e.missionData = [], 
            e.freeZhuan = 0, e.zhuan = 0, e.onLineTimes = 0, e.onLineAward = [], e.signTimes = 0, 
            e.landTimes = 0, e.landing = 0, e.backTimes = 0, e.guideStep = 0, e.specMenuFectch = 0, 
            e.specNew = 0, e.firstLanding = 0, e.cardTemplate = [ [ 1001, "西伯利亚虎", 1, 2, "CN", 96e3, 96e3, 2014 ], [ 1002, "狮虎兽", 1, 2, "FR", 96e3, 94e3, 2013 ], [ 1003, "虎鲸", 2, 2, "IS", 92e3, 99e3, 2025 ], [ 1004, "美洲白头鹰", 3, 2, "US", 98e3, 93e3, 2004 ], [ 1005, "非洲雄狮", 1, 2, "ET", 94e3, 96e3, 2001 ], [ 1006, "华南虎", 1, 4, "CN", 132e3, 13e4, 2002 ], [ 1007, "公牛鲨", 2, 4, "AU", 121e3, 142e3, 2011 ], [ 1008, "苍鹰", 3, 1, "ES", 98e3, 83e3, 2004 ], [ 1009, "亚洲狮", 1, 4, "IN", 131e3, 131e3, 2001 ], [ 1010, "北极熊", 1, 3, "PN", 105e3, 111e3, 2005 ], [ 1011, "黑曼巴蛇", 1, 3, "GA", 107e3, 108e3, 2006 ], [ 1012, "大白鲨", 2, 3, "CL", 104e3, 113e3, 2011 ], [ 1013, "白尾海雕", 3, 3, "PL", 117e3, 1e5, 2007 ], [ 1014, "北落基山狼", 1, 3, "CA", 109e3, 108e3, 2003 ], [ 1015, "草原狼", 1, 2, "MN", 94e3, 95e3, 2003 ], [ 1016, "虎鲨", 2, 2, "ID", 93e3, 97e3, 2011 ], [ 1017, "吸血蝙蝠", 3, 2, "BR", 93e3, 96e3, 2012 ], [ 1018, "云豹", 1, 2, "NP", 95e3, 94e3, 2023 ], [ 1019, "埃及眼镜蛇", 1, 2, "EG", 97e3, 92e3, 2018 ], [ 1020, "恒河豚", 2, 1, "BD", 8e4, 9e4, 2022 ], [ 1021, "猎狗", 1, 1, "AF", 76e3, 79e3, 2015 ], [ 1022, "棕熊", 1, 1, "RU", 73e3, 98e3, 2017 ], [ 1023, "猎豹", 1, 1, "KE", 74e3, 8e4, 2023 ], [ 1024, "北极狐", 1, 1, "PN", 78e3, 73e3, 2027 ], [ 1025, "藏獒", 1, 1, "CN", 89e3, 83e3, 2015 ], [ 1026, "大熊猫", 1, 1, "CN", 88e3, 85e3, 2005 ], [ 1027, "马来大狐蝠", 3, 1, "MY", 8e4, 7e4, 2024 ], [ 1028, "关岛大蝙蝠", 3, 1, "US", 7e4, 8e4, 2024 ], [ 1029, "野牛", 1, 1, "MX", 82e3, 83e3, 2008 ], [ 1030, "日本锯鲨", 2, 1, "JP", 85e3, 84e3, 2011 ], [ 1031, "一角鲸", 2, 1, "CA", 96e3, 75e3, 2010 ], [ 1032, "猎隼", 3, 1, "MN", 97e3, 71e3, 2004 ], [ 1033, "非洲水牛", 1, 1, "NG", 75e3, 94e3, 2008 ], [ 1034, "金雕", 3, 4, "DE", 141e3, 122e3, 2007 ], [ 1035, "角马", 1, 1, "AO", 9e4, 9e4, 2009 ], [ 1036, "白犀牛", 1, 1, "ZA", 75e3, 98e3, 2021 ], [ 1037, "河马", 1, 1, "MZ", 9e4, 8e4, 2021 ], [ 1038, "印度犀牛", 1, 1, "IN", 83e3, 99e3, 2021 ], [ 1039, "巨蟒", 1, 1, "KH", 85e3, 94e3, 2006 ], [ 1040, "响尾蛇", 1, 1, "CO", 83e3, 93e3, 2018 ], [ 1041, "黑虎", 1, 3, "CN", 111e3, 11e4, 2002 ], [ 1042, "蓝鲸", 2, 4, "SE", 125e3, 138e3, 2025 ], [ 1043, "猛犸象", 1, 4, "RU", 136e3, 127e3, 2019 ], [ 1044, "利爪白虎", 1, 2, "MX", 96e3, 96e3, 2002 ], [ 1045, "赤焰黑虎", 1, 3, "MZ", 11e4, 111e3, 2001 ], [ 1046, "山魈", 1, 3, "NP", 12e4, 98e3, 2016 ], [ 1047, "非洲草原象", 1, 3, "ET", 108e3, 11e4, 2019 ], [ 1048, "黑狮", 1, 2, "ES", 99e3, 92e3, 2013 ], [ 1049, "长须鲸", 2, 2, "BR", 92e3, 97e3, 2025 ], [ 1050, "双髻鲨", 2, 2, "CL", 95e3, 94e3, 2011 ], [ 1051, "狒狒", 1, 1, "GA", 78e3, 8e4, 2016 ], [ 1052, "非洲丛林象", 1, 1, "ET", 82e3, 96e3, 2019 ] ], 
            e.specielCards = [ 1043, 1045, 1048, 1026 ], e.stageTemplate = [ [ 1, "冒险开始", [ 1035, 1036, 1035 ], 80, null ], [ 2, "发光的野兽", [ 1024, 1024 ], 80, null ], [ 3, "无穷战意", [ 1025, 1029, 1025 ], 80, null ], [ 4, "越战越勇", [ 1051, 1036, 1051 ], 80, null ], [ 5, "国宝大熊猫", [ 1026, 1026 ], 80, 1002 ], [ 6, "古老的预言", [ 1027, 1039, 1027 ], 80, null ], [ 7, "困难重重", [ 1021, 1023, 1021 ], 80, null ], [ 8, "奇妙的邂逅", [ 1032, 1032 ], 80, null ], [ 9, "第二次接触", [ 1021, 1021, 1021 ], 80, null ], [ 10, "脱群的战士", [ 1015 ], 80, 1041 ], [ 11, "危机四伏", [ 1008, 1022, 1008 ], 80, null ], [ 12, "力量的源泉", [ 1029, 1029 ], 80, null ], [ 13, "疯狂的兽群", [ 1052, 1052, 1052 ], 80, null ], [ 14, "无尽森林", [ 1032, 1039, 1051 ], 80, null ], [ 15, "深海巨兽", [ 1016 ], 80, 1003 ], [ 16, "丛林深处", [ 1040, 1040 ], 80, null ], [ 17, "最强输出", [ 1031, 1030 ], 80, null ], [ 18, "家园守护者", [ 1033, 1033, 1033 ], 80, null ], [ 19, "斗志在燃烧", [ 1037, 1037 ], 80, null ], [ 20, "王者归来", [ 1026, 1045, 1048 ], 80, 1045 ], [ 21, "挣脱奴役", [ 1020, 1020 ], 80, null ], [ 22, "流放者", [ 1028, 1028, 1028 ], 80, null ], [ 23, "消失的同伴", [ 1040, 1039, 1040 ], 80, null ], [ 24, "遭遇偷袭", [ 1021, 1021, 1021 ], 80, null ], [ 25, "森林之王", [ 1051, 1041, 1051 ], 80, 1001 ], [ 26, "王与王的对决", [ 1001, 1002 ], 80, null ], [ 27, "怪兽幻境", [ 1028, 1017, 1027 ], 80, null ], [ 28, "正义审判", [ 1036, 1038, 1036 ], 80, null ], [ 29, "矛盾的源头", [ 1004, 1004 ], 80, null ], [ 30, "劲敌", [ 1014, 1014 ], 80, 1014 ], [ 31, "荒野战神", [ 1008, 1005, 1008 ], 80, null ], [ 32, "坚不可摧的盾", [ 1036, 1036 ], 80, null ], [ 33, "无坚不摧的矛", [ 1031, 1031 ], 80, null ], [ 34, "可怕的团队", [ 1023, 1018, 1023 ], 80, null ], [ 35, "利齿的主人", [ 1012, 1016 ], 80, 1015 ], [ 36, "草原大暴乱", [ 1035, 1035, 1035 ], 80, null ], [ 37, "领域统治者", [ 1050, 1050 ], 80, null ], [ 38, "致命的毒素", [ 1019, 1019, 1019 ], 80, null ], [ 39, "隐秘的危险", [ 1040, 1018, 1040 ], 80, null ], [ 40, "神兽降临", [ 1013, 1032 ], 80, 1013 ], [ 41, "野性的呼唤", [ 1038, 1002, 1038 ], 80, null ], [ 42, "忠诚的定义", [ 1025, 1025, 1025 ], 80, null ], [ 43, "沉睡魔咒", [ 1027, 1019, 1027 ], 80, null ], [ 44, "巨大的身影", [ 1003, 1049, 1003 ], 80, null ], [ 45, "猎物？猎人！", [ 1039, 1011, 1039 ], 80, 1019 ], [ 46, "海市蜃楼", [ 1050, 1020, 1030 ], 80, null ], [ 47, "敌友难分", [ 1024, 1044, 1024 ], 80, null ], [ 48, "迷幻的梦境", [ 1015, 1015, 1015 ], 80, null ], [ 49, "成长之路", [ 1022, 1048, 1022 ], 80, null ], [ 50, "深蓝恐惧", [ 1030, 1042, 1030 ], 80, 1042 ], [ 51, "紧急避让", [ 1016, 1016 ], 80, null ], [ 52, "告别黑暗", [ 1017, 1017, 1017 ], 80, null ], [ 53, "狂躁", [ 1052, 1005, 1052 ], 80, null ], [ 54, "落难兄弟", [ 1015 ], 80, null ], [ 55, "凛冬", [ 1010, 1010 ], 80, 1004 ], [ 56, "最后的反击", [ 1033, 1004, 1035 ], 80, null ], [ 57, "败者淘汰", [ 1025, 1001, 1037 ], 80, null ], [ 58, "生存的资格", [ 1024, 1049, 1026 ], 80, null ], [ 59, "等待时机", [ 1023, 1018, 1023 ], 80, null ], [ 60, "谁与争锋", [ 1025, 1006, 1025 ], 80, 1046 ], [ 61, "无畏的战士", [ 1014, 1015 ], 80, null ], [ 62, "卑劣竞争者", [ 1046, 1019, 1021 ], 80, null ], [ 63, "和平大使", [ 1052, 1047, 1052 ], 80, null ], [ 64, "厄运降临", [ 1028, 1011, 1028 ], 80, null ], [ 65, "九死一生", [ 1031, 1007, 1031 ], 80, 1049 ], [ 66, "存活的可能性", [ 1051, 1047, 1051 ], 80, null ], [ 67, "鲜血的诱惑", [ 1030, 1012, 1030 ], 80, null ], [ 68, "终极武器", [ 1022, 1010, 1022 ], 80, null ], [ 69, "风暴诞生", [ 1008, 1045, 1032 ], 80, null ], [ 70, "一瞬间的机会", [ 1033, 1009, 1033 ], 80, 1010 ], [ 71, "友好的相遇", [ 1047, 1033 ], 80, null ], [ 72, "差枪走火", [ 1003, 1050 ], 80, null ], [ 73, "静止的时间", [ 1001, 1018 ], 80, null ], [ 74, "冒险的行为", [ 1029, 1041, 1029 ], 80, null ], [ 75, "空中霸主", [ 1032, 1034, 1032 ], 80, 1005 ], [ 76, "未知关系", [ 1024, 1014, 1015 ], 80, null ], [ 77, "生命的终点", [ 1005, 1013, 1035 ], 80, null ], [ 78, "胜利的希望", [ 1002, 1002, 1002 ], 80, null ], [ 79, "闪光之爪", [ 1044, 1044 ], 80, null ], [ 80, "大地之祖", [ 1038, 1043, 1036 ], 80, 1047 ], [ 81, "超越极限", [ 1048, 1048 ], 80, null ], [ 82, "大海的倒影", [ 1049, 1049 ], 80, null ], [ 83, "绝技", [ 1037, 1046 ], 80, null ], [ 84, "猛兽大将", [ 1016, 1016, 1031 ], 80, null ], [ 85, "海洋巡视者", [ 1030, 1042, 1030 ], 80, 1016 ], [ 86, "堕入深渊", [ 1022, 1011, 1022 ], 80, null ], [ 87, "光的指引", [ 1020, 1045, 1020 ], 80, null ], [ 88, "燎原之火", [ 1041, 1001 ], 80, null ], [ 89, "诀别", [ 1014, 1025 ], 80, null ], [ 90, "沉睡中苏醒", [ 1006, 1040 ], 80, 1012 ], [ 91, "黑暗潜伏者", [ 1017, 1017, 1017 ], 80, null ], [ 92, "遥不可及", [ 1013, 1032 ], 80, null ], [ 93, "致胜的关键", [ 1026, 1010 ], 80, null ], [ 94, "生存法则", [ 1047, 1005 ], 80, null ], [ 95, "地狱咆哮", [ 1007, 1029 ], 80, 1017 ], [ 96, "禁止通行", [ 1050, 1012, 1030 ], 80, null ], [ 97, "空中决斗", [ 1004, 1013, 1031 ], 80, null ], [ 98, "神出鬼没", [ 1021, 1011, 1021 ], 80, null ], [ 99, "死亡缠绕", [ 1019, 1019, 1019 ], 80, null ], [ 100, "熊出没", [ 1010, 1009, 1010 ], 80, 1009 ], [ 101, "火爆怪兽", [ 1046, 1051, 1046 ], 80, null ], [ 102, "月夜的士兵", [ 1039, 1041, 1039 ], 80, null ], [ 103, "移动城堡", [ 1052, 1047, 1052 ], 80, null ], [ 104, "人猿森林", [ 1046, 1046 ], 80, null ], [ 105, "危机时刻", [ 1012, 1012 ], 80, 1011 ], [ 106, "入侵", [ 1045, 1038 ], 80, null ], [ 107, "死斗", [ 1010, 1037 ], 80, null ], [ 108, "疯狂试探", [ 1029, 1014, 1029 ], 80, null ], [ 109, "抉择时刻", [ 1048, 1048 ], 80, null ], [ 110, "灾难的开始", [ 1052, 1043, 1052 ], 80, 1010 ], [ 111, "血性战队", [ 1017, 1013, 1017 ], 80, null ], [ 112, "光和影", [ 1001, 1041 ], 80, null ], [ 113, "曾经的盟友", [ 1044, 1045 ], 80, null ], [ 114, "支离破碎", [ 1016, 1049 ], 80, null ], [ 115, "食物链顶端", [ 1035, 1006, 1035 ], 80, 1013 ], [ 116, "奇怪的影子", [ 1011, 1002 ], 80, null ], [ 117, "边缘挑战者", [ 1016, 1012, 1016 ], 80, null ], [ 118, "隐形的杀手", [ 1014, 1014 ], 80, null ], [ 119, "十面埋伏", [ 1003, 1003, 1003 ], 80, null ], [ 120, "海里的秘密", [ 1039, 1007, 1039 ], 80, 1042 ], [ 121, "空间碎裂者", [ 1018, 1018 ], 80, null ], [ 122, "黑暗地带", [ 1048, 1048 ], 80, null ], [ 123, "卑鄙的行径", [ 1019, 1019 ], 80, null ], [ 124, "脆弱的协议", [ 1003, 1016, 1050 ], 80, null ], [ 125, "庞然大物", [ 1042, 1022 ], 80, 1046 ], [ 126, "强大的支柱", [ 1051, 1046, 1051 ], 80, null ], [ 127, "生的可能！", [ 1017, 1017 ], 80, null ], [ 128, "无处不在", [ 1004, 1004, 1004 ], 80, null ], [ 129, "遭遇", [ 1001, 1011, 1001 ], 80, null ], [ 130, "突围", [ 1034, 1034 ], 80, 1014 ], [ 131, "年轻的王", [ 1029, 1009, 1035 ], 80, null ], [ 132, "历史的痕迹", [ 1014, 1014 ], 80, null ], [ 133, "吸血鬼", [ 1017, 1017 ], 80, null ], [ 134, "勇者无争", [ 1031, 1012, 1031 ], 80, null ], [ 135, "滔天巨浪", [ 1007, 1040 ], 80, 1045 ], [ 136, "捕食艺术家", [ 1038, 1041, 1038 ], 80, null ], [ 137, "束手无策", [ 1032, 1013, 1032 ], 80, null ], [ 138, "以牙还牙", [ 1010, 1037 ], 80, null ], [ 139, "守卫天空", [ 1008, 1013, 1008 ], 80, null ], [ 140, "王座之争", [ 1009, 1009 ], 80, 1009 ], [ 141, "草食系王者", [ 1033, 1047, 1033 ], 80, null ], [ 142, "鹬蚌相争", [ 1046, 1022 ], 80, null ], [ 143, "弱者的武器", [ 1049, 1049 ], 80, null ], [ 144, "反杀", [ 1021, 1014, 1021 ], 80, null ], [ 145, "暴风雨前的寂静", [ 1043, 1043 ], 80, 1012 ], [ 146, "奇怪的组合", [ 1018, 1011, 1026 ], 80, null ], [ 147, "漏网之鱼", [ 1023, 1045, 1023 ], 80, null ], [ 148, "尽归囊中", [ 1002, 1002 ], 80, null ], [ 149, "侵略者", [ 1048, 1048 ], 80, null ], [ 150, "胜者为王", [ 1041, 1045 ], 80, 1047 ], [ 151, "大限将至", [ 1030, 1012, 1030 ], 80, null ], [ 152, "针锋相对", [ 1051, 1046, 1051 ], 80, null ], [ 153, "地盘之争", [ 1024, 1010, 1024 ], 80, null ], [ 154, "千钧一发", [ 1003, 1003 ], 80, null ], [ 155, "进化的终点", [ 1042, 1042 ], 80, 1010 ], [ 156, "兽王的诅咒", [ 1001, 1011, 1001 ], 80, null ], [ 157, "卷土重来", [ 1015, 1047, 1015 ], 80, null ], [ 158, "风云崛起", [ 1007, 1031 ], 80, null ], [ 159, "战士的试炼", [ 1014, 1018 ], 80, null ], [ 160, "来自深渊的恶魔", [ 1006, 1009 ], 80, 1006 ], [ 161, "新的考验", [ 1008, 1034, 1008 ], 80, null ], [ 162, "超时空之战", [ 1015, 1018, 1048 ], 80, null ], [ 163, "战斗的残骸", [ 1014, 1002, 1021 ], 80, null ], [ 164, "异常现象", [ 1029, 1006, 1029 ], 80, null ], [ 165, "家族创造者", [ 1032, 1007, 1032 ], 80, 1013 ], [ 166, "雪山的冰花", [ 1035, 1010, 1001 ], 80, null ], [ 167, "森林里的骚动", [ 1004, 1005, 1019 ], 80, null ], [ 168, "森林深处的精灵", [ 1004, 1046, 1051 ], 80, null ], [ 169, "进攻准备", [ 1030, 1042, 1031 ], 80, null ], [ 170, "世纪之战", [ 1003, 1016 ], 80, 1034 ], [ 171, "野兽竞技场", [ 1027, 1041, 1017 ], 80, null ], [ 172, "战斗种族", [ 1036, 1034, 1039 ], 80, null ], [ 173, "高手的较量", [ 1044, 1015 ], 80, null ], [ 174, "华丽的收场", [ 1013, 1018 ], 80, null ], [ 175, "臣服", [ 1002, 1045, 1023 ], 80, 1014 ], [ 176, "获得通行证", [ 1047, 1039 ], 80, null ], [ 177, "探索丛林", [ 1011, 1051 ], 80, null ], [ 178, "礼貌的问候", [ 1040, 1043, 1040 ], 80, null ], [ 179, "力量传承", [ 1016, 1010, 1037 ], 80, null ], [ 180, "重返战力巅峰", [ 1034, 1032 ], 80, 1043 ], [ 181, "前往领域中心", [ 1049, 1050 ], 80, null ], [ 182, "狮子王的帮助", [ 1029, 1009, 1029 ], 80, null ], [ 183, "无法逃避", [ 1019, 1011, 1040 ], 80, null ], [ 184, "终有一战", [ 1038, 1006, 1038 ], 80, null ], [ 185, "满目疮痍的胜利", [ 1043, 1036 ], 80, 1045 ], [ 186, "神秘的访客", [ 1017, 1017 ], 80, null ], [ 187, "无力的抵抗", [ 1049, 1012, 1030 ], 80, null ], [ 188, "勇士的证明", [ 1002, 1048 ], 80, null ], [ 189, "战至最后一刻", [ 1013, 1004 ], 80, null ], [ 190, "和解", [ 1005, 1046, 1037 ], 80, 1009 ], [ 191, "冰冷的预言", [ 1019, 1011 ], 80, null ], [ 192, "世界末日", [ 1026, 1007, 1033 ], 80, null ], [ 193, "迷雾缭绕", [ 1018, 1041, 1021 ], 80, null ], [ 194, "昔日的荣光", [ 1019, 1002, 1017 ], 80, null ], [ 195, "全新的时代", [ 1022, 1043, 1052 ], 80, 1047 ], [ 196, "禁区", [ 1012, 1012 ], 80, null ], [ 197, "幸存者的敌意", [ 1040, 1006, 1014 ], 80, null ], [ 198, "艰难逃亡", [ 1002, 1004, 1044 ], 80, null ], [ 199, "巨大的裂缝", [ 1045, 1041 ], 80, null ], [ 200, "远古巨兽", [ 1043 ], 80, 1006 ] ];
        }(c = a.DataManage || (a.DataManage = {})), function(e) {
            e.requestWithCallBack = function(e, t, a) {
                void 0 === a && (a = null);
                var n = cc.loader.getXMLHttpRequest();
                n.onreadystatechange = function() {
                    4 == n.readyState && n.status >= 200 && n.status < 300 && null != a && (console.log(n.response), 
                    a(n.response, t));
                }, n.open("GET", e, !0), cc.sys.isNative && n.setRequestHeader("Accept-Encoding", "gzip,deflate"), 
                n.timeout = 5e3, n.send();
            }, e.getLocalData = function() {
                var t = cc.sys.localStorage.getItem("cardData");
                if (null != t && null != t && "" != t) {
                    for (var a = [], n = [], i = t.split(","), o = "", r = 0; r != i.length; r++) {
                        o = i[r].split("|"), n = [];
                        for (var l = 0; l != o.length; l++) {
                            n[l] = parseInt(o[l]), n[l][1] > 10 && (n[l][1] = 10);
                        }
                        a[r] = n;
                    }
                    c.cardData = a, console.log(a);
                } else {
                    var s = [], h = (n = [], c.cardTemplate);
                    for (r = 0; r != h.length; r++) {
                        n = [ h[r][0], 0 ], s.push(n);
                    }
                    c.cardData = s, e.saveCardData(), console.log(a);
                }
                var d = cc.sys.localStorage.getItem("cardWarGold");
                null != d && null != d && "" != d ? c.gold = parseInt(d) : (c.gold = 200, e.setLocalData());
                var u = cc.sys.localStorage.getItem("battleTeam");
                if (null != u && null != u && "" != u) {
                    i = u.split(",");
                    var g = [];
                    for (r = 0; r != i.length; r++) {
                        g.push(parseInt(i[r]));
                    }
                    c.battleTeam = g;
                } else c.battleTeam = [ 0, 0, 0 ];
                var p = cc.sys.localStorage.getItem("battleStage");
                c.stage = null != p && null != p && "" != p ? parseInt(p) : 0;
                var m = cc.sys.localStorage.getItem("arenaData");
                if (null != m && null != m && "" != m) {
                    var f = [], y = (i = m.split(","), []);
                    for (o = "", r = 0; r != i.length; r++) {
                        for (o = i[r].split("|"), y = [], l = 0; l != o.length; l++) {
                            0 == l ? y.push(o[l]) : y.push(parseInt(o[l]));
                        }
                        f.push(y);
                    }
                    c.arenaData = f;
                } else c.arenaData = e.randomArenaData();
                var C = cc.sys.localStorage.getItem("lastLogin");
                null != C && null != C && "" != C && (c.lastLanding = parseInt(C));
                var N = cc.sys.localStorage.getItem("arenaBox");
                if (null != N && null != N && "" != N) {
                    var _ = [];
                    for (i = N.split(","), y = [], o = "", r = 0; r != i.length; r++) {
                        for (o = i[r].split("|"), y = [], l = 0; l != o.length; l++) {
                            y.push(parseInt(o[l]));
                        }
                        _.push(y);
                    }
                    c.arenaBoxData = _;
                } else c.arenaBoxData = [ [ 1, 3, 0, 0 ], [ 1, 7, 0, 0 ], [ 2, 3, 0, 0 ] ], e.saveArenaBoxData();
                var w = cc.sys.localStorage.getItem("missionData");
                if (null != w && null != w && "" != w) {
                    var v = [];
                    for (i = w.split(","), y = [], o = "", r = 0; r != i.length; r++) {
                        for (o = i[r].split("|"), y = [], l = 0; l != o.length; l++) {
                            y.push(parseInt(o[l]));
                        }
                        v.push(y);
                    }
                    c.missionData = v;
                } else c.missionData = [ [ 1, 1, 1, 200, 0, 1 ], [ 2, 3, 0, 300, 0, 1 ], [ 3, 1, 0, 100, 0, 5 ], [ 4, 3, 0, 200, 0, 1 ], [ 5, 1, 0, 100, 0, 5 ], [ 6, 1, 0, 500, 0, 1 ] ], 
                e.saveMissionData();
                var b = cc.sys.localStorage.getItem("freeZhuan");
                c.freeZhuan = null != b && null != b && "" != b ? parseInt(b) : 1, console.log(" free zhuan is : " + b);
                var B = cc.sys.localStorage.getItem("zhuan");
                c.zhuan = null != B && null != B && "" != B ? parseInt(B) : 0;
                var S = cc.sys.localStorage.getItem("onLineTimes");
                c.onLineTimes = null != S && null != S && "" != S ? parseInt(S) : 0;
                var T = cc.sys.localStorage.getItem("onLineAward");
                if (null != T && null != T && "" != T) {
                    var D = [];
                    for (i = T.split(","), r = 0; r != i.length; r++) {
                        D.push(i[r]);
                    }
                    c.onLineAward = D;
                } else c.onLineAward = [ 0, 0, 0 ], e.saveOnLineAward();
                var G = cc.sys.localStorage.getItem("signTimes");
                c.signTimes = null != G && null != G && "" != G ? parseInt(G) : 0;
                var M = cc.sys.localStorage.getItem("landTimes");
                c.landTimes = null != M && null != M && "" != M ? parseInt(M) : 0, e.setActive();
                var O = cc.sys.localStorage.getItem("guideStep");
                c.guideStep = null != O && null != O && "" != O ? parseInt(O) : 0;
                var W = cc.sys.localStorage.getItem("specMenuFectch");
                c.specMenuFectch = null != W && null != W && "" != W ? parseInt(W) : 0;
            }, e.setSepcMenuFecth = function() {
                cc.sys.localStorage.setItem("specMenuFectch", c.specMenuFectch);
            }, e.setActive = function() {
                cc.sys.localStorage.setItem("freeZhuan", c.freeZhuan), cc.sys.localStorage.setItem("zhuan", c.zhuan), 
                cc.sys.localStorage.setItem("landTimes", c.landTimes), this.saveSign(), this.saveOnline();
            }, e.saveGuideStep = function() {
                cc.sys.localStorage.setItem("guideStep", c.guideStep);
            }, e.saveSign = function() {
                cc.sys.localStorage.setItem("signTimes", c.signTimes);
            }, e.saveOnline = function() {
                cc.sys.localStorage.setItem("onLineTimes", c.onLineTimes);
            }, e.saveOnLineAward = function() {
                for (var e = "", t = 0; t != c.onLineAward.length; t++) {
                    e += c.onLineAward[t], t == c.onLineAward.length - 1 || (e += ",");
                }
                cc.sys.localStorage.setItem("onLineAward", e);
            }, e.saveMissionData = function() {
                for (var e = "", t = 0; t != c.missionData.length; t++) {
                    for (var a = 0; a != c.missionData[t].length; a++) {
                        e += c.missionData[t][a], a == c.missionData[t].length - 1 || (e += "|");
                    }
                    t == c.missionData.length - 1 || (e += ",");
                }
                cc.sys.localStorage.setItem("missionData", e);
            }, e.saveArenaBoxData = function() {
                for (var e = "", t = 0; t != c.arenaBoxData.length; t++) {
                    for (var a = 0; a != c.arenaBoxData[t].length; a++) {
                        e += c.arenaBoxData[t][a], a == c.arenaBoxData[t].length.length - 1 || (e += "|");
                    }
                    t == c.arenaBoxData.length - 1 || (e += ",");
                }
                cc.sys.localStorage.setItem("arenaBox", e);
            }, e.getZeroStamp = function(e) {
                return e - e % 86400;
            }, e.saveArenaData = function() {
                for (var e = "", t = 0; t != c.arenaData.length; t++) {
                    for (var a = 0; a != c.arenaData[t].length; a++) {
                        e += c.arenaData[t][a], e += "|";
                    }
                    t == c.arenaData.length - 1 || (e += ",");
                }
                cc.sys.localStorage.setItem("arenaData", e);
            }, e.randomArenaData = function() {
                for (var t, a = [], n = c.cardData, i = [ 0, 0, 0 ], o = [ 0, 0, 0 ], r = 0; r != n.length; r++) {
                    n[r][1] > 0 && a.push(n[r]);
                }
                var l = [];
                if (a.length < 3) {
                    var s = null;
                    for (r = 1; 6 != r; r++) {
                        s = e.randomEnemy([ 1, 1, 1 ], 45e4), l.push([ e.randomName(r), e.randomNum(1, 100), r, s[0], s[1], s[2], s[3], s[4], s[5], 1 ]);
                    }
                    return l;
                }
                a.sort(function(t, a) {
                    return e.getCardPower(a[0]) - e.getCardPower(t[0]);
                });
                var h = 0;
                for (r = 0; r != a.length && !(4 == e.getCardTemplate(a[r][0])[3] && (i[h] = a[r][0], 
                o[h] = 4, ++h > 2)); r++) {}
                if (h < 3) for (r = 0; r != a.length && !(3 == e.getCardTemplate(a[r][0])[3] && (i[h] = a[r][0], 
                o[h] = 3, ++h > 2)); r++) {}
                if (h < 3) for (r = 0; r != a.length && !(2 == e.getCardTemplate(a[r][0])[3] && (i[h] = a[r][0], 
                o[h] = 2, ++h > 2)); r++) {}
                if (h < 3) for (r = 0; r != a.length && !(1 == e.getCardTemplate(a[r][0])[3] && (i[h] = a[r][0], 
                o[h] = 1, ++h > 2)); r++) {}
                t = e.getCardPower(i[0]) + e.getCardPower(i[1]) + e.getCardPower(i[2]);
                var d = [ o[0], o[1], o[2] ], u = 2;
                for (r = 0; r != d.length && !(d[r] > 1 && (d[r] -= 1, 0 == --u)); r++) {}
                var g = e.randomEnemy(d, t);
                for (l.push([ e.randomName(1), e.randomNum(1, 100), 1, g[0], g[1], g[2], g[3], g[4], g[5], 1 ]), 
                r = 2; 5 != r; r++) {
                    d = [ o[0], o[1], o[2] ], g = e.randomEnemy(d, t), l.push([ e.randomName(r), e.randomNum(1, 100), r, g[0], g[1], g[2], g[3], g[4], g[5], 1 ]);
                }
                for (d = [ o[0], o[1], o[2] ], r = 0; 2 != r; r++) {
                    for (var p = 0; p != d.length; p++) {
                        if (d[p] < 4) {
                            d[p] += 1;
                            break;
                        }
                    }
                }
                return g = e.randomEnemy(d, t), l.push([ e.randomName(5), e.randomNum(1, 100), 5, g[0], g[1], g[2], g[3], g[4], g[5], 1 ]), 
                c.arenaData = l, l;
            }, e.randomEnemy = function(t, a) {
                for (var n = c.cardTemplate, i = [], o = [], r = [], l = 0; l != n.length; l++) {
                    n[l][3] == t[0] ? i.push(n[l][0]) : n[l][3] == t[1] ? o.push(n[l][0]) : n[l][3] == t[2] && r.push(n[l][0]);
                }
                0 == o.length && (o = i), 0 == r.length && (r = i);
                var s = i[e.randomNum(0, i.length - 1)], h = o[e.randomNum(0, o.length - 1)], d = r[e.randomNum(0, r.length - 1)], u = e.countPower(s, 1), g = Math.floor((a / 3 - u) / (20 * u));
                g > 10 && (g = 10), g < 1 && (g = 1);
                var p = e.countPower(h, 1), m = Math.floor((a / 3 - p) / (20 * p));
                m > 10 && (m = 10), m < 1 && (m = 1);
                var f = e.countPower(d, 1), y = Math.floor((a / 3 - f) / (20 * f));
                return y > 10 && (y = 10), y < 1 && (y = 1), [ s, g, h, m, d, y ];
            }, e.randomName = function(e) {
                return "驯兽师" + e;
            }, e.setStage = function() {
                cc.sys.localStorage.setItem("battleStage", c.stage);
            }, e.setTeamData = function() {
                for (var e = "", t = 0; t != c.battleTeam.length; t++) {
                    t == c.battleTeam.length - 1 ? e += "" + c.battleTeam[t] : e += c.battleTeam[t] + ",";
                }
                cc.sys.localStorage.setItem("battleTeam", e);
            }, e.setLocalData = function() {
                cc.sys.localStorage.setItem("cardWarGold", c.gold);
            }, e.saveCardData = function() {
                for (var e = "", t = "", a = null, n = 0; n != c.cardData.length; n++) {
                    a = c.cardData[n], e = "";
                    for (var i = 0; i != a.length; i++) {
                        i == a.length - 1 ? e += a[i] : e = e + a[i] + "|";
                    }
                    n == c.cardData.length - 1 ? t += e : t = t + e + ",";
                }
                cc.sys.localStorage.setItem("cardData", t), console.log(t);
            }, e.getCardTemplate = function(e) {
                for (var t = c.cardTemplate, a = 0; a != t.length; a++) {
                    if (t[a][0] == e) return t[a];
                }
            }, e.getCardInfo = function(e) {
                for (var t = c.cardData, a = 0; a != t.length; a++) {
                    if (t[a][0] == e) return t[a];
                }
            }, e.randomNum = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            }, e.getCardPower = function(t) {
                var a = e.getCardTemplate(t);
                if (a) {
                    var n = parseInt("" + a[5]) + parseInt("" + a[6]), i = e.getCardInfo(t)[1];
                    return Math.floor(n * (1 + .05 * i));
                }
                return 0;
            }, e.countPower = function(t, a) {
                var n = e.getCardTemplate(t), i = parseInt("" + n[5]) + parseInt("" + n[6]);
                return Math.floor(i * (1 + .05 * a));
            }, e.showNotice = function(e) {
                var t = cc.director.getScene().getChildByName("Canvas"), a = new cc.Node("labelBg"), n = new cc.Texture2D(), i = new cc.SpriteFrame();
                n.initWithData(new Uint8Array([ 0, 0, 0 ]), cc.Texture2D.PixelFormat.RGB888, 1, 1), 
                i.setTexture(n), i.setRect(cc.rect(0, 0, 780, 40)), a.addComponent(cc.Sprite).spriteFrame = i, 
                a.setPosition(cc.v2(0, -400)), t.addChild(a);
                var o = new cc.Node();
                o.addComponent(cc.Label).string = e, o.setPosition(cc.v2(0, 0)), a.addChild(o), 
                a.runAction(cc.sequence(cc.moveTo(.4, cc.v2(0, 0)), cc.delayTime(.5), cc.moveTo(.4, cc.v2(0, 400)), cc.fadeTo(.2, 0), cc.removeSelf()));
            }, e.buttonBeat = function(e) {
                e.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1))));
            }, e.checkSpecNew = function(t) {
                0 == e.getCardInfo(t)[1] && (c.specNew = 1);
            }, e.blinkBanner = function(e, t) {
                l.wechat.showBannerAd(), e.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function() {
                    l.wechat.hideBannerAd();
                })));
            };
        }(r = a.Utils || (a.Utils = {})), cc._RF.pop();
    }, {
        "./libppgame/libwechat": "libwechat"
    } ],
    HttpRequest: [ function(e, t) {
        "use strict";
        cc._RF.push(t, "37e468al1VMhrFmVGbKBZPS", "HttpRequest");
        var a = {
            requestGet: function requestGet(e, t, a) {
                var n = !1, i = cc.loader.getXMLHttpRequest();
                i.open("GET", e);
                var o = function o(e, t) {
                    n || (n = !0, a && a(e, t));
                };
                i.onreadystatechange = function() {
                    var e;
                    4 == i.readyState && (200 == i.status ? (0, e = i.responseText, n || (n = !0, t(0, e))) : o(i.statusText, i.responseText));
                }, i.onerror = function() {
                    o(i.status, null);
                }, i.send();
            }
        };
        t.exports = a, cc._RF.pop();
    }, {} ],
    ListView: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "82f06e74nZOLYLfK3rmE7Ps", "ListView");
        var _n5, i = this && this.__extends || (_n5 = function n(e, t) {
            return (_n5 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n5(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._length = 0, t.resizable = !0, t.precreate = 10, t.synchronous = !0, t.updatingStride = 1, 
                t.optimization = !1, t.optimizingStride = 1, t.contianer = null, t.placeholder = null, 
                t.scrollView = null, t;
            }
            return i(t, e), Object.defineProperty(t.prototype, "length", {
                get: function get() {
                    return this._length;
                },
                set: function set(e) {
                    if (e < 0) throw "INVALID_RANGE";
                    if (this._length = e, this.placeholder && (this.placeholder.active = !e), this.size < e) this.size = e; else {
                        var t = this.nodes;
                        if (this.synchronous) {
                            for (var a = 0; a < e; ++a) {
                                t[a].active = !0;
                            }
                            for (a = e; a < t.length; ++a) {
                                t[a].active = !1;
                            }
                        } else {
                            for (a = e; a < t.length; ++a) {
                                t[a].active = !1;
                            }
                            var n = function n(e) {
                                i.scheduleOnce(function() {
                                    return t[e].active = !0;
                                }, e / 60 * i.updatingStride);
                            }, i = this;
                            for (a = 0; a < e; ++a) {
                                n(a);
                            }
                        }
                    }
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "size", {
                get: function get() {
                    return this.nodes.length;
                },
                set: function set(e) {
                    if (!e) throw "INVALID_RANGE";
                    if (!this.resizable) throw "READ_ONLY";
                    for (var t = this.nodes, a = t.length; a < e; ++a) {
                        cc.instantiate(t[0]).parent = t[0].parent;
                    }
                    var n = t.slice(e, t.length - e);
                    for (a = 0; a < n.length; ++a) {
                        n[a].destroy();
                    }
                    this.length > e ? this.length = e : this.length = this.length;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nodes", {
                get: function get() {
                    return this.contianer.children;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.comps = function(e) {
                return this.nodes.map(function(t) {
                    return t.getComponent(e);
                });
            }, t.prototype.onLoad = function() {
                if (this.optimizingStride = Math.round(this.optimizingStride), this.updatingStride = Math.round(this.updatingStride), 
                !this.nodes.length) throw "INVALID_RANGE";
                this.resizable && (this.size = this.precreate), this.length = 0, this.optimization && (this.scrollView || (this.scrollView = this.node.getComponent(cc.ScrollView)), 
                this.scrollView ? (this.scrollView.node.on("scrolling", this.onDynamicOptimization, this), 
                this._counting = this.optimizingStride - 1, this.scheduleOnce(this.onDynamicOptimization, 1 / 60)) : console.error("Can not find the component cc.ScrollView. Reset the component or turn off the optimaztion of draw call."));
            }, t.prototype.onDynamicOptimization = function() {
                if (++this._counting == this.optimizingStride) {
                    this._counting = 0;
                    var e = this.contianer.parent, t = e.getBoundingBox(), a = e.parent.convertToWorldSpaceAR(cc.v2(t.x, t.y));
                    t.x = a.x, t.y = a.y;
                    for (var n = 0, i = this.contianer.children; n < i.length; n++) {
                        var o = i[n];
                        o.opacity = t.intersects(o.getBoundingBoxToWorld()) ? 255 : 0;
                    }
                }
            }, o([ l ], t.prototype, "resizable", void 0), o([ l({
                visible: function visible() {
                    return this.resizable;
                },
                step: 1
            }) ], t.prototype, "precreate", void 0), o([ l({
                displayName: "Activate/Deactivate Synchronously"
            }) ], t.prototype, "synchronous", void 0), o([ l({
                visible: function visible() {
                    return !this.synchronous;
                },
                range: [ 1, 60, 1 ],
                slide: !0
            }) ], t.prototype, "updatingStride", void 0), o([ l({
                displayName: "Draw Call Optimization"
            }) ], t.prototype, "optimization", void 0), o([ l({
                visible: function visible() {
                    return this.optimization;
                },
                range: [ 1, 20, 1 ],
                slide: !0
            }) ], t.prototype, "optimizingStride", void 0), o([ l(cc.Node) ], t.prototype, "contianer", void 0), 
            o([ l(cc.Node) ], t.prototype, "placeholder", void 0), o([ l({
                type: cc.ScrollView,
                visible: function visible() {
                    return this.optimization;
                }
            }) ], t.prototype, "scrollView", void 0), o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    Panel: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "7cd9cg3HBNEp57lXOBT/DQH", "Panel");
        var _n6, i = this && this.__extends || (_n6 = function n(e, t) {
            return (_n6 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n6(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        }, c = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(i, o) {
                function c(e) {
                    try {
                        l(n.next(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function r(e) {
                    try {
                        l(n.throw(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                        e(t);
                    })).then(c, r);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }, r = this && this.__generator || function(e, t) {
            var a, n, i, o, c = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return o = {
                next: r(0),
                throw: r(1),
                return: r(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
            }), o;
            function r(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (;c; ) {
                    try {
                        if (a = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 
                        0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
                          case 0:
                          case 1:
                            i = o;
                            break;

                          case 4:
                            return c.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            c.label++, n = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = c.ops.pop(), c.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                c = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                c.label = o[1];
                                break;
                            }
                            if (6 === o[0] && c.label < i[1]) {
                                c.label = i[1], i = o;
                                break;
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2], c.ops.push(o);
                                break;
                            }
                            i[2] && c.ops.pop(), c.trys.pop();
                            continue;
                        }
                        o = t.call(e, c);
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        o = [ 6, r ], n = 0;
                    } finally {
                        a = i = 0;
                    }
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }
        }, l = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, a = arguments.length; t < a; t++) {
                e += arguments[t].length;
            }
            var n = Array(e), i = 0;
            for (t = 0; t < a; t++) {
                for (var o = arguments[t], c = 0, r = o.length; c < r; c++, i++) {
                    n[i] = o[c];
                }
            }
            return n;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.PopingCallback = a.SlidingCallback = a.PANEL_EVT_BTN_CLK = a.PANEL_EVT_HIDE = a.PANEL_EVT_SHOW = void 0;
        var s = cc._decorator, h = s.ccclass, d = s.property;
        a.PANEL_EVT_SHOW = "on-panel-show", a.PANEL_EVT_HIDE = "on-panel-hide", a.PANEL_EVT_BTN_CLK = "on-button-click", 
        a.SlidingCallback = function(e, t, a) {
            return new Promise(function(e) {
                if ("show" == a) {
                    var n = t.getComponent(cc.Widget);
                    n && (n.target = cc.Canvas.instance.node, n.updateAlignment()), t.opacity = 0, t.runAction(cc.sequence(cc.moveBy(0, 0, t.height), cc.fadeIn(0), cc.moveBy(.6, 0, -t.height).easing(cc.easeBackOut()), cc.callFunc(e)));
                } else t.runAction(cc.sequence(cc.moveBy(.6, 0, t.height).easing(cc.easeBackIn()), cc.callFunc(e)));
            });
        }, a.PopingCallback = function(e, t, a) {
            return new Promise(function(e) {
                "show" == a ? (t.opacity = 0, t.scale = .2, t.runAction(cc.sequence(cc.spawn(cc.fadeIn(.4), cc.scaleTo(.4, 1).easing(cc.easeBackOut())), cc.callFunc(e)))) : t.runAction(cc.sequence(cc.spawn(cc.fadeOut(.4), cc.scaleTo(.4, .2).easing(cc.easeBackIn())), cc.callFunc(e)));
            });
        };
        var u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.animatingCallback = a.PopingCallback, t._createdPath = null, t._animating = !1, 
                t.touchBlocker = null, t.background = null, t.blockerOpacity = 150, t.closeButtons = [], 
                t.menuButtons = [], t;
            }
            var n;
            return i(t, e), n = t, t.create = function(e, t) {
                return c(this, void 0, Promise, function() {
                    var a, i = this;
                    return r(this, function() {
                        return (a = this._allPanels.get(e)) || (a = new Promise(function(a, o) {
                            cc.loader.loadRes("Panels/" + e, cc.Prefab, function(c, r) {
                                if (c) i._allPanels.delete(e), o(c); else {
                                    var l = cc.instantiate(r).getComponent(n);
                                    l._createdPath = e, t && (l.animatingCallback = t), a(l);
                                }
                            });
                        }), this._allPanels.set(e, a)), [ 2, a ];
                    });
                });
            }, t.showWithArguments = function(e) {
                for (var t = e.path, a = e.animating, n = [], i = 1; i < arguments.length; i++) {
                    n[i - 1] = arguments[i];
                }
                return c(this, void 0, Promise, function() {
                    var e;
                    return r(this, function(i) {
                        switch (i.label) {
                          case 0:
                            return [ 4, this.create(t, a) ];

                          case 1:
                            return (e = i.sent()).show.apply(e, n), [ 2 ];
                        }
                    });
                });
            }, t.showWithCallbacks = function(e, t) {
                for (var n = e.path, i = e.animating, o = [], s = 2; s < arguments.length; s++) {
                    o[s - 2] = arguments[s];
                }
                return c(this, void 0, Promise, function() {
                    var e, c, s, h, d;
                    return r(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return r.trys.push([ 0, 2, , 3 ]), [ 4, this.create(n, i) ];

                          case 1:
                            return e = r.sent(), c = t.onPanelShow, s = t.onPanelHide, h = t.onButtonClick, 
                            c && e.node.once(a.PANEL_EVT_SHOW, c, e), h && e.node.on(a.PANEL_EVT_BTN_CLK, h, e), 
                            e.node.once(a.PANEL_EVT_HIDE, function() {
                                for (var t = [], n = 0; n < arguments.length; n++) {
                                    t[n] = arguments[n];
                                }
                                h && e.node.off(a.PANEL_EVT_BTN_CLK, h, e), s && s.call.apply(s, l([ e ], t));
                            }), e.show.apply(e, o), [ 3, 3 ];

                          case 2:
                            if (d = r.sent(), !t.onError) throw d;
                            return t.onError.call(e, d), [ 3, 3 ];

                          case 3:
                            return [ 2 ];
                        }
                    });
                });
            }, t.showWithPromise = function(e) {
                for (var t = e.path, a = e.animating, n = [], i = 1; i < arguments.length; i++) {
                    n[i - 1] = arguments[i];
                }
                return c(this, void 0, Promise, function() {
                    var e = this;
                    return r(this, function() {
                        return [ 2, new Promise(function(i, o) {
                            e.showWithCallbacks.apply(e, l([ {
                                path: t,
                                animating: a
                            }, {
                                onPanelHide: i,
                                onError: o
                            } ], n));
                        }) ];
                    });
                });
            }, t.findByPath = function(e) {
                return this._allPanels.get(e) || Promise.resolve(null);
            }, t.hideByPath = function(e) {
                for (var t = [], a = 1; a < arguments.length; a++) {
                    t[a - 1] = arguments[a];
                }
                this._allPanels.get(e).then(function(e) {
                    if (!e) return console.warn("target panel doesn't exist");
                    e.node.parent || console.warn("target panel is currently hidding"), e.hide.apply(e, t);
                });
            }, t.exists = function(e) {
                return Boolean(this._allPanels.get(e));
            }, t.prototype.show = function() {
                for (var e, t = this, i = [], o = 0; o < arguments.length; o++) {
                    i[o] = arguments[o];
                }
                if (this.node.parent) throw "INVALID_STATE";
                if (this._animating) throw "BUSY_INVOKING";
                cc.Canvas.instance.node.addChild(this.node, n.Z_INDEX), (e = this.node).emit.apply(e, l([ a.PANEL_EVT_SHOW ], i)), 
                this.node.parent.emit(a.PANEL_EVT_SHOW, this), this.animatingCallback && (this._animating = !0, 
                this.animatingCallback(this.node, this.background, "show").then(function() {
                    t._animating = !1;
                }));
            }, t.prototype.hide = function() {
                for (var e, t = this, n = [], i = 0; i < arguments.length; i++) {
                    n[i] = arguments[i];
                }
                if (!this.node.parent) throw "INVALID_STATE";
                if (this._animating) throw "BUSY_INVOKING";
                (e = this.node).emit.apply(e, l([ a.PANEL_EVT_HIDE ], n)), this.node.parent.emit(a.PANEL_EVT_HIDE, this), 
                this.animatingCallback ? (this._animating = !0, this.animatingCallback(this.node, this.background, "hide").then(function() {
                    t._animating = !1, t.node.removeFromParent(!1);
                })) : this.node.removeFromParent(!1);
            }, t.prototype.onLoad = function() {
                var e = this;
                this.touchBlocker.opacity = this.blockerOpacity, this.touchBlocker.on("click", function() {
                    return e.hide(null);
                }), this.menuButtons.forEach(function(t, n) {
                    t && t.node.on("click", function() {
                        return e.node.emit(a.PANEL_EVT_BTN_CLK, n);
                    });
                }), this.closeButtons.forEach(function(t, a) {
                    t && t.node.on("click", function() {
                        return e.hide(a);
                    });
                });
                var t = cc.view.getDesignResolutionSize(), n = cc.Canvas.instance.node.getContentSize();
                n.width / n.height < t.width / t.height ? this.node.setScale(n.width / t.width) : this.node.setScale(n.height / t.height);
                var i = this.touchBlocker.getComponent(cc.Widget);
                i && (i.target = cc.Canvas.instance.node, i.updateAlignment());
            }, t.prototype.onDestroy = function() {
                n._allPanels.delete(this._createdPath);
            }, t.Z_INDEX = 20, t._allPanels = new Map(), o([ d(cc.Node) ], t.prototype, "touchBlocker", void 0), 
            o([ d(cc.Node) ], t.prototype, "background", void 0), o([ d ], t.prototype, "blockerOpacity", void 0), 
            o([ d([ cc.Button ]) ], t.prototype, "closeButtons", void 0), o([ d([ cc.Button ]) ], t.prototype, "menuButtons", void 0), 
            n = o([ h ], t);
        }(cc.Component);
        a.default = u, cc._RF.pop();
    }, {} ],
    Queue: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "97b8bwj5Z9KEYh4eureit1s", "Queue");
        var n = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, a = arguments.length; t < a; t++) {
                e += arguments[t].length;
            }
            var n = Array(e), i = 0;
            for (t = 0; t < a; t++) {
                for (var o = arguments[t], c = 0, r = o.length; c < r; c++, i++) {
                    n[i] = o[c];
                }
            }
            return n;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e) {
                for (var t = [], a = 1; a < arguments.length; a++) {
                    t[a - 1] = arguments[a];
                }
                e || (e = 32), this._head = 0, this._rear = 0, "number" != typeof e || t.length ? (this._elements = new (Array.bind.apply(Array, n([ void 0, e ], t)))(), 
                this._length = this.size) : (this._elements = new Array(e), this._length = 0);
            }
            return Object.defineProperty(e.prototype, "front", {
                get: function get() {
                    if (this._length) return this._elements[(this._rear + this.size - 1) % this.size];
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "length", {
                get: function get() {
                    return this._length;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "size", {
                get: function get() {
                    return this._elements.length;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "array", {
                get: function get() {
                    for (var e = this.size, t = new Array(this._length), a = 0; a < this._length; ++a) {
                        t[a] = this._elements[(a + this._head) % e];
                    }
                    return t;
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.push = function(e) {
                this._length == this.size && this.resize(), this._length += 1, this._elements[this._rear++] = e, 
                this._rear = this._rear % this.size;
            }, e.prototype.pop = function() {
                if (this._length) {
                    this._length -= 1;
                    var e = this._elements[this._head++];
                    return this._head = this._head % this.size, e;
                }
            }, e.prototype.resize = function(e) {
                e = e || 2 * this.size;
                for (var t = new Array(e), a = 0; a < e && this._length; ++a) {
                    t[a] = this.pop();
                }
                this._head = 0, this._rear = a % t.length, this._length = a, this._elements = t;
            }, e.prototype.clear = function() {
                this._head = 0, this._rear = 0, this._length = 0;
            }, e;
        }();
        a.default = i, cc._RF.pop();
    }, {} ],
    Toast: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "c65249VygZFToUtTpKrnHbS", "Toast");
        var _n7, i = this && this.__extends || (_n7 = function n(e, t) {
            return (_n7 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n7(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        }, c = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(i, o) {
                function c(e) {
                    try {
                        l(n.next(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function r(e) {
                    try {
                        l(n.throw(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                        e(t);
                    })).then(c, r);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }, r = this && this.__generator || function(e, t) {
            var a, n, i, o, c = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return o = {
                next: r(0),
                throw: r(1),
                return: r(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
            }), o;
            function r(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (;c; ) {
                    try {
                        if (a = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 
                        0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
                          case 0:
                          case 1:
                            i = o;
                            break;

                          case 4:
                            return c.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            c.label++, n = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = c.ops.pop(), c.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                c = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                c.label = o[1];
                                break;
                            }
                            if (6 === o[0] && c.label < i[1]) {
                                c.label = i[1], i = o;
                                break;
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2], c.ops.push(o);
                                break;
                            }
                            i[2] && c.ops.pop(), c.trys.pop();
                            continue;
                        }
                        o = t.call(e, c);
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        o = [ 6, r ], n = 0;
                    } finally {
                        a = i = 0;
                    }
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = e("./libcocos"), s = e("./Queue"), h = cc._decorator, d = h.ccclass, u = h.property, g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._showing = !1, t._prehiding = !1, t._showingAction = null, t.background = null, 
                t.contentLabel = null, t.maximumDisplay = 5, t;
            }
            var a;
            return i(t, e), a = t, t.create = function() {
                return c(this, void 0, Promise, function() {
                    var e, t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                          case 0:
                            return (e = this._instances).length ? [ 2, e.pop() ] : (n = (t = cc).instantiate, 
                            [ 4, l.cocos.loadRes("Items/toast") ]);

                          case 1:
                            return [ 2, n.apply(t, [ i.sent() ]).getComponent(a) ];
                        }
                    });
                });
            }, t.showWithContent = function(e, t) {
                return c(this, void 0, void 0, function() {
                    return r(this, function(a) {
                        switch (a.label) {
                          case 0:
                            return [ 4, this.create() ];

                          case 1:
                            return [ 2, a.sent().show(e, t) ];
                        }
                    });
                });
            }, t.prototype.show = function(e, t) {
                var n = this;
                if (void 0 === t && (t = 2), this._showing) throw "INVALID_STATE";
                this._showing = !0;
                var i = cc.Canvas.instance.node.height, o = a._holding;
                this.node.opacity = 0, this.node.scale = .5, this.node.setPosition(0, i / 4), this.contentLabel.string = e, 
                cc.Canvas.instance.node.addChild(this.node, a.Z_INDEX), this.background.width = this.contentLabel.node.width + 48, 
                this.background.height = this.contentLabel.node.height + 24;
                var c = o.array;
                if (c.forEach(function(e) {
                    return e.node.runAction(cc.moveBy(.2, 0, n.background.height + 8));
                }), o.push(this), this._prehiding = !1, o.length > this.maximumDisplay) for (var r = 0; r < o.length - this.maximumDisplay; ++r) {
                    c[r]._prehiding || (c[r]._prehiding = !0, c[r].hide());
                }
                this.node.stopAllActions(), this._showingAction = this.node.runAction(cc.sequence(cc.spawn(cc.fadeIn(.5), cc.scaleTo(.5, 1).easing(cc.easeBackOut())), cc.delayTime(t), cc.callFunc(this.hide, this)));
            }, t.prototype.hide = function() {
                var e = this;
                if (!this._showing) throw "INVALID_STATE";
                this.node.stopAction(this._showingAction), this.node.runAction(cc.sequence(cc.spawn(cc.fadeOut(.5), cc.scaleTo(.5, .5).easing(cc.easeBackIn())), cc.callFunc(function() {
                    e.node.removeFromParent(!1), e._showing = !1, a._holding.pop(), a._instances.push(e);
                })));
            }, t.prototype.onDestroy = function() {
                a._holding.clear();
                var e = a._instances.indexOf(this);
                -1 != e && a._instances.splice(e, 1);
            }, t.Z_INDEX = 30, t._instances = new Array(), t._holding = new s.default(32), o([ u(cc.Node) ], t.prototype, "background", void 0), 
            o([ u(cc.Label) ], t.prototype, "contentLabel", void 0), o([ u ], t.prototype, "maximumDisplay", void 0), 
            a = o([ d ], t);
        }(cc.Component);
        a.default = g, cc._RF.pop();
    }, {
        "./Queue": "Queue",
        "./libcocos": "libcocos"
    } ],
    WXGameClubButton: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "2009f3wG41LtIJ6/pK9DWVW", "WXGameClubButton");
        var _n8, i = this && this.__extends || (_n8 = function n(e, t) {
            return (_n8 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n8(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./libwechat"), r = cc._decorator, l = r.ccclass, s = r.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._gameClubButton = null, t.buttonTexture = null, t.hideOriginalButton = !0, 
                t;
            }
            return i(t, e), t.prototype.onLoad = function() {
                this.node.on("click", this.onButtonClick, this);
            }, t.prototype.start = function() {
                var e = this;
                CC_WECHATGAME && wx.createGameClubButton && (this._gameClubButton = wx.createGameClubButton({
                    image: this.textureUrl,
                    style: c.wechat.wxCoordProjection(this.node)
                }), this.hideOriginalButton && (this.node.opacity = 0), this._gameClubButton.onTap(function() {
                    e.node.emit("click");
                }));
            }, t.prototype.onEnable = function() {
                this._gameClubButton && this._gameClubButton.show();
            }, t.prototype.onDisable = function() {
                this._gameClubButton && this._gameClubButton.hide();
            }, t.prototype.onDestroy = function() {
                this._gameClubButton && this._gameClubButton.destroy();
            }, Object.defineProperty(t.prototype, "textureUrl", {
                get: function get() {
                    if (!this.buttonTexture || !this.buttonTexture.nativeUrl) return "";
                    var e = this.buttonTexture.nativeUrl;
                    return cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e)), wxDownloader.REMOTE_SERVER_ROOT && (e = wxDownloader.REMOTE_SERVER_ROOT + "/" + e), 
                    e;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.onButtonClick = function() {
                CC_WECHATGAME && wx.createGameClubButton && this.node.emit(c.WX_EVT_GAME_CLUB);
            }, o([ s({
                type: cc.Texture2D
            }) ], t.prototype, "buttonTexture", void 0), o([ s ], t.prototype, "hideOriginalButton", void 0), 
            o([ l ], t);
        }(cc.Component);
        a.default = h, cc._RF.pop();
    }, {
        "./libwechat": "libwechat"
    } ],
    WXGameWall: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "b4edceMDbNHz5ME4jvzAH9o", "WXGameWall");
        var n = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(i, o) {
                function c(e) {
                    try {
                        l(n.next(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function r(e) {
                    try {
                        l(n.throw(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                        e(t);
                    })).then(c, r);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }, i = this && this.__generator || function(e, t) {
            var a, n, i, o, c = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return o = {
                next: r(0),
                throw: r(1),
                return: r(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
            }), o;
            function r(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (;c; ) {
                    try {
                        if (a = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 
                        0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
                          case 0:
                          case 1:
                            i = o;
                            break;

                          case 4:
                            return c.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            c.label++, n = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = c.ops.pop(), c.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                c = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                c.label = o[1];
                                break;
                            }
                            if (6 === o[0] && c.label < i[1]) {
                                c.label = i[1], i = o;
                                break;
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2], c.ops.push(o);
                                break;
                            }
                            i[2] && c.ops.pop(), c.trys.pop();
                            continue;
                        }
                        o = t.call(e, c);
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        o = [ 6, r ], n = 0;
                    } finally {
                        a = i = 0;
                    }
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.wechatGameWall = void 0;
        var o = e("./libwechat"), c = "undefined" != typeof wx, r = e("HttpRequest");
        a.wechatGameWall = new (function() {
            function e() {
                this._Single = null, this._Line = null, this._Wall = null, this._wallTittle = null, 
                this._vertical1 = null, this._vertical2 = null, this.gridWidth = 100, this.gridHeight = 100, 
                this.offSet = 6, this.iconFrameGroup = [], this.iconIdGroup = [], this.iconNameGroup = [], 
                this.totalImgNum = 9, this.buttonGroup1 = [], this.buttonGroup2 = [], this.buttonGroup3 = [], 
                this.buttonGroup5 = [], this.buttonGroup6 = [], this.wallData = null, this._grayBg = null, 
                this.firstIdx1 = 0, this.firstIdx2 = 0, this.firstIdx5 = 0, this.firstIdx6 = 0, 
                this.closeButton1 = null, this.closeButton2 = null, this.wallType = 0, this.singleScale = 1, 
                this.lineScale = 1, this.singleShow = !1, this.lineShow = !1, this.wallShow = !1, 
                this.verticalShow1 = !1, this.verticalShow2 = !1, this.tittle1 = null, this.tittle2 = null, 
                this.nameHeight = 25, this.tittleHeight = 50, this.bigOffSet = 30, this.tittleFontSize = 30, 
                this.nameFontSize = 26, this.resGroup = [], this.resNum = 7, this.tittleType = "rewan";
            }
            return e.prototype.initGameWall = function(e, t, c, l, s, h, d) {
                return void 0 === t && (t = cc.v2(0, 0)), void 0 === c && (c = cc.v2(0, 0)), void 0 === l && (l = cc.v2(0, 0)), 
                void 0 === s && (s = cc.v2(0, 0)), void 0 === h && (h = cc.v2(0, 0)), void 0 === d && (d = 110), 
                n(this, void 0, void 0, function() {
                    var n, u;
                    return i(this, function() {
                        return a.wechatGameWall.resetData(), a.wechatGameWall.loadRemoteRes(), a.wechatGameWall.gridWidth = d, 
                        a.wechatGameWall.gridHeight = d, n = cc.Canvas.instance, u = "https://xyx.p8games.com/wxgame/gameList?appid=" + e + "&count=" + a.wechatGameWall.totalImgNum + "&name=1", 
                        r.requestGet(u, function(e, i) {
                            i = JSON.parse(i), console.log("msg get : " + i), a.wechatGameWall.wallData = i;
                            for (var r = 0; r != i.length; r++) {
                                a.wechatGameWall.loadIcons(i[r].icon, i[r].appid, i[r].name);
                            }
                            var d = cc.size(a.wechatGameWall.gridWidth + a.wechatGameWall.offSet, a.wechatGameWall.gridHeight + a.wechatGameWall.offSet), u = cc.size(5 * (a.wechatGameWall.gridWidth + a.wechatGameWall.offSet) + a.wechatGameWall.offSet + 20, a.wechatGameWall.gridHeight + 2 * a.wechatGameWall.offSet), g = (cc.size(3 * (a.wechatGameWall.gridWidth + a.wechatGameWall.offSet) + a.wechatGameWall.offSet, 3 * (a.wechatGameWall.gridHeight + a.wechatGameWall.offSet) + 2 * a.wechatGameWall.offSet), 
                            cc.size(cc.winSize.width, cc.winSize.height)), p = cc.size(a.wechatGameWall.gridWidth + 2 * a.wechatGameWall.offSet, 5 * (a.wechatGameWall.gridWidth + a.wechatGameWall.offSet) + a.wechatGameWall.offSet), m = new cc.Node("wallMask1"), f = new cc.Node("wallMask2"), y = new cc.Node("wallMask3"), C = new cc.Node("wallMask4"), N = new cc.Node("wallMask5"), _ = new cc.Node("wallMask6"), w = new cc.Node("wallMask7");
                            m.addComponent(cc.Mask), f.addComponent(cc.Mask), m.setPosition(t), f.setPosition(c), 
                            y.setPosition(l), N.setPosition(s), _.setPosition(h), m.setContentSize(d), f.setContentSize(cc.size(u.width, u.height)), 
                            y.setContentSize(g), N.setContentSize(p), _.setContentSize(p), w.setContentSize(g), 
                            n.node.addChild(m), n.node.addChild(f), n.node.addChild(C), n.node.addChild(y), 
                            n.node.addChild(N), n.node.addChild(_), n.node.addChild(w);
                            var v = new cc.Node("wallBg1"), b = new cc.Node("wallBg2"), B = new cc.Node("wallBg3"), S = new cc.Node("wallBg4"), T = new cc.Node("wallBg5"), D = new cc.Node("wallBg6"), G = new cc.Node("wallBg7"), M = new cc.Texture2D(), O = new cc.SpriteFrame();
                            M.initWithData(new Uint8Array([ 0, 0, 0 ]), cc.Texture2D.PixelFormat.RGB888, 1, 1), 
                            O.setTexture(M), O.setRect(cc.rect(0, 0, d.width, d.height)), v.addComponent(cc.Sprite).spriteFrame = O, 
                            v.setPosition(cc.v2(0, 0)), v.addComponent(cc.BlockInputEvents), m.addChild(v), 
                            O.setRect(cc.rect(0, 0, cc.winSize.width, u.height)), b.addComponent(cc.Sprite).spriteFrame = O, 
                            b.setPosition(cc.v2(0, 0)), b.addComponent(cc.BlockInputEvents), f.addChild(b);
                            var W = new cc.Texture2D(), A = new cc.SpriteFrame();
                            W.initWithData(new Uint8Array([ 255, 255, 255 ]), cc.Texture2D.PixelFormat.RGB888, 1, 1), 
                            A.setTexture(W), O.setRect(cc.rect(0, 0, g.width, g.height)), B.addComponent(cc.Sprite).spriteFrame = O, 
                            B.setPosition(cc.v2(0, 0)), B.addComponent(cc.BlockInputEvents), y.addChild(B), 
                            y.opacity = 200, O.setRect(cc.rect(0, 0, cc.winSize.width, cc.winSize.height)), 
                            S.addComponent(cc.Sprite).spriteFrame = O, S.setPosition(cc.v2(0, 0)), S.opacity = 200, 
                            S.addComponent(cc.BlockInputEvents), C.addChild(S), O.setRect(cc.rect(0, 0, p.width, p.height)), 
                            T.addComponent(cc.Sprite).spriteFrame = O, T.setPosition(cc.v2(0, 0)), T.addComponent(cc.BlockInputEvents), 
                            N.addChild(T), O.setRect(cc.rect(0, 0, p.width, p.height)), D.addComponent(cc.Sprite).spriteFrame = O, 
                            D.setPosition(cc.v2(0, 0)), D.addComponent(cc.BlockInputEvents), _.addChild(D), 
                            O.setRect(cc.rect(0, 0, g.width, g.height)), G.addComponent(cc.Sprite).spriteFrame = O, 
                            G.setPosition(cc.v2(0, 0)), G.addComponent(cc.BlockInputEvents), w.addChild(G), 
                            G.opacity = 200, a.wechatGameWall._Single = m, a.wechatGameWall._Line = f, a.wechatGameWall._Wall = y, 
                            a.wechatGameWall._grayBg = C, a.wechatGameWall._grayBg.active = !1, a.wechatGameWall._vertical1 = N, 
                            a.wechatGameWall._vertical2 = _, a.wechatGameWall._wallTittle = w, a.wechatGameWall._vertical1.zIndex = 99, 
                            a.wechatGameWall._vertical2.zIndex = 99, a.wechatGameWall.singleShow || (a.wechatGameWall._Single.opacity = 0), 
                            a.wechatGameWall.lineShow || (a.wechatGameWall._Line.opacity = 0), o.wechat._gridWall ? (a.wechatGameWall.wallShow || (a.wechatGameWall._wallTittle.opacity = 0), 
                            a.wechatGameWall._Wall.opacity = 0, a.wechatGameWall._grayBg.active = !1) : (a.wechatGameWall.wallShow || (a.wechatGameWall._Wall.opacity = 0, 
                            a.wechatGameWall._grayBg.active = !1), a.wechatGameWall._wallTittle.opacity = 0), 
                            a.wechatGameWall.wallShow && o.wechat.showBannerAd(), a.wechatGameWall.verticalShow1 || (a.wechatGameWall._vertical1.opacity = 0), 
                            a.wechatGameWall.verticalShow2 || (a.wechatGameWall._vertical2.opacity = 0);
                        }), [ 2, !0 ];
                    });
                });
            }, e.prototype.resetData = function() {
                a.wechatGameWall._Single = null, a.wechatGameWall._Line = null, a.wechatGameWall._Wall = null, 
                a.wechatGameWall._wallTittle = null, a.wechatGameWall._vertical1 = null, a.wechatGameWall._vertical2 = null, 
                a.wechatGameWall.iconFrameGroup = [], a.wechatGameWall.iconIdGroup = [], a.wechatGameWall.iconNameGroup = [], 
                a.wechatGameWall.buttonGroup1 = [], a.wechatGameWall.buttonGroup2 = [], a.wechatGameWall.buttonGroup3 = [], 
                a.wechatGameWall.buttonGroup5 = [], a.wechatGameWall.buttonGroup6 = [], a.wechatGameWall.wallData = null, 
                a.wechatGameWall._grayBg = null, a.wechatGameWall.firstIdx1 = 0, a.wechatGameWall.firstIdx2 = 0, 
                a.wechatGameWall.firstIdx5 = 0, a.wechatGameWall.firstIdx6 = 0, a.wechatGameWall.closeButton1 = null, 
                a.wechatGameWall.closeButton2 = null, a.wechatGameWall.wallType = 0, a.wechatGameWall.singleScale = 1, 
                a.wechatGameWall.lineScale = 1, a.wechatGameWall.singleShow = !1, a.wechatGameWall.lineShow = !1, 
                a.wechatGameWall.wallShow = !1, a.wechatGameWall.verticalShow1 = !1, a.wechatGameWall.verticalShow2 = !1, 
                a.wechatGameWall.resGroup = [], a.wechatGameWall.tittle1 = null, a.wechatGameWall.tittle2 = null, 
                a.wechatGameWall.tittleType = "rewan";
            }, e.prototype.loadRemoteRes = function() {
                var e = [ "https://res.p8games.com/cdn/footcity/gameWallRes/x.png", "https://res.p8games.com/cdn/footcity/gameWallRes/tuichu.png", "https://res.p8games.com/cdn/footcity/gameWallRes/rewan.png", "https://res.p8games.com/cdn/footcity/gameWallRes/remen.png", "https://res.p8games.com/cdn/footcity/gameWallRes/jinqi.png", "https://res.p8games.com/cdn/footcity/gameWallRes/g1.png", "https://res.p8games.com/cdn/footcity/gameWallRes/baokuan.png" ];
                cc.assetManager.loadRemote(e[0], {
                    ext: ".png"
                }, function(e, t) {
                    var n = new cc.SpriteFrame(t);
                    a.wechatGameWall.resGroup[0] = n, a.wechatGameWall.totalImgNum == a.wechatGameWall.iconFrameGroup.length && a.wechatGameWall.resGroup.length == a.wechatGameWall.resNum && (a.wechatGameWall.initSigle(), 
                    a.wechatGameWall.initLine(), a.wechatGameWall.initWall(), a.wechatGameWall.initVerticals());
                }), cc.assetManager.loadRemote(e[1], {
                    ext: ".png"
                }, function(e, t) {
                    var n = new cc.SpriteFrame(t);
                    a.wechatGameWall.resGroup[1] = n, a.wechatGameWall.totalImgNum == a.wechatGameWall.iconFrameGroup.length && a.wechatGameWall.resGroup.length == a.wechatGameWall.resNum && (a.wechatGameWall.initSigle(), 
                    a.wechatGameWall.initLine(), a.wechatGameWall.initWall(), a.wechatGameWall.initVerticals());
                }), cc.assetManager.loadRemote(e[2], {
                    ext: ".png"
                }, function(e, t) {
                    var n = new cc.SpriteFrame(t);
                    a.wechatGameWall.resGroup[2] = n, a.wechatGameWall.totalImgNum == a.wechatGameWall.iconFrameGroup.length && a.wechatGameWall.resGroup.length == a.wechatGameWall.resNum && (a.wechatGameWall.initSigle(), 
                    a.wechatGameWall.initLine(), a.wechatGameWall.initWall(), a.wechatGameWall.initVerticals());
                }), cc.assetManager.loadRemote(e[3], {
                    ext: ".png"
                }, function(e, t) {
                    var n = new cc.SpriteFrame(t);
                    a.wechatGameWall.resGroup[3] = n, a.wechatGameWall.totalImgNum == a.wechatGameWall.iconFrameGroup.length && a.wechatGameWall.resGroup.length == a.wechatGameWall.resNum && (a.wechatGameWall.initSigle(), 
                    a.wechatGameWall.initLine(), a.wechatGameWall.initWall(), a.wechatGameWall.initVerticals());
                }), cc.assetManager.loadRemote(e[4], {
                    ext: ".png"
                }, function(e, t) {
                    var n = new cc.SpriteFrame(t);
                    a.wechatGameWall.resGroup[4] = n, a.wechatGameWall.totalImgNum == a.wechatGameWall.iconFrameGroup.length && a.wechatGameWall.resGroup.length == a.wechatGameWall.resNum && (a.wechatGameWall.initSigle(), 
                    a.wechatGameWall.initLine(), a.wechatGameWall.initWall(), a.wechatGameWall.initVerticals());
                }), cc.assetManager.loadRemote(e[5], {
                    ext: ".png"
                }, function(e, t) {
                    var n = new cc.SpriteFrame(t);
                    a.wechatGameWall.resGroup[5] = n, a.wechatGameWall.totalImgNum == a.wechatGameWall.iconFrameGroup.length && a.wechatGameWall.resGroup.length == a.wechatGameWall.resNum && (a.wechatGameWall.initSigle(), 
                    a.wechatGameWall.initLine(), a.wechatGameWall.initWall(), a.wechatGameWall.initVerticals());
                }), cc.assetManager.loadRemote(e[6], {
                    ext: ".png"
                }, function(e, t) {
                    var n = new cc.SpriteFrame(t);
                    a.wechatGameWall.resGroup[6] = n, a.wechatGameWall.totalImgNum == a.wechatGameWall.iconFrameGroup.length && a.wechatGameWall.resGroup.length == a.wechatGameWall.resNum && (a.wechatGameWall.initSigle(), 
                    a.wechatGameWall.initLine(), a.wechatGameWall.initWall(), a.wechatGameWall.initVerticals());
                });
            }, e.prototype.loadIcons = function(e, t, n) {
                var i = t, o = n;
                cc.assetManager.loadRemote(e, {
                    ext: ".jpg"
                }, function(e, t) {
                    var n = new cc.SpriteFrame(t);
                    a.wechatGameWall.iconFrameGroup.push(n), a.wechatGameWall.iconIdGroup.push(i), a.wechatGameWall.iconNameGroup.push(o), 
                    a.wechatGameWall.totalImgNum == a.wechatGameWall.iconFrameGroup.length && a.wechatGameWall.resGroup.length == a.wechatGameWall.resNum && (a.wechatGameWall.initSigle(), 
                    a.wechatGameWall.initLine(), a.wechatGameWall.initWall(), a.wechatGameWall.initVerticals());
                });
            }, e.prototype.initSigle = function() {
                if (!(a.wechatGameWall.buttonGroup1.length > 0)) {
                    for (var e = 0; e != a.wechatGameWall.iconFrameGroup.length; e++) {
                        var t = new cc.Node("appButton");
                        t.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.iconFrameGroup[e], t.scale = a.wechatGameWall.gridWidth / 140, 
                        t.addComponent(cc.Button), t.setPosition(cc.v2(e * (a.wechatGameWall.gridWidth + a.wechatGameWall.offSet), 0));
                        var n = {
                            appId: a.wechatGameWall.iconIdGroup[e]
                        };
                        t.attr(n), a.wechatGameWall._Single.addChild(t), a.wechatGameWall.buttonGroup1.push(t), 
                        t.on(cc.Node.EventType.TOUCH_END, a.wechatGameWall.goToGame);
                    }
                    a.wechatGameWall.buttonRoll1(), a.wechatGameWall.singleShow || (a.wechatGameWall._Single.active = !1), 
                    a.wechatGameWall._Single.scale = a.wechatGameWall.singleScale;
                }
            }, e.prototype.buttonRoll1 = function() {
                a.wechatGameWall._Single.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
                    for (var e = 0; e != a.wechatGameWall.buttonGroup1.length; e++) {
                        a.wechatGameWall.buttonGroup1[e].runAction(cc.moveBy(.2, cc.v2(0 - a.wechatGameWall.gridWidth - a.wechatGameWall.offSet, 0)));
                    }
                }), cc.delayTime(.2), cc.callFunc(function() {
                    var e = a.wechatGameWall.firstIdx1 - 1;
                    -1 == e && (e = 8);
                    var t = a.wechatGameWall.buttonGroup1[e].x + a.wechatGameWall.offSet + a.wechatGameWall.gridWidth;
                    a.wechatGameWall.buttonGroup1[a.wechatGameWall.firstIdx1].setPosition(cc.v2(t, 0)), 
                    a.wechatGameWall.firstIdx1++, a.wechatGameWall.firstIdx1 > a.wechatGameWall.buttonGroup1.length - 1 && (a.wechatGameWall.firstIdx1 = 0), 
                    a.wechatGameWall.buttonRoll1();
                }), cc.rotateTo(.1, -10), cc.rotateTo(.1, 10), cc.rotateTo(.1, -10), cc.rotateTo(.1, 10), cc.rotateTo(.1, -10), cc.rotateTo(.1, 10), cc.rotateTo(.1, -10), cc.rotateTo(.1, 10), cc.rotateTo(.1, -10), cc.rotateTo(.1, 10), cc.rotateTo(.1, -10), cc.rotateTo(.1, 0)));
            }, e.prototype.initLine = function() {
                if (!(a.wechatGameWall.buttonGroup2.length > 0)) {
                    for (var e = cc.size(5 * (a.wechatGameWall.gridWidth + a.wechatGameWall.offSet) + a.wechatGameWall.offSet + 20, a.wechatGameWall.gridHeight + 2 * a.wechatGameWall.offSet), t = 0; t != a.wechatGameWall.iconFrameGroup.length; t++) {
                        var n = new cc.Node("appButton");
                        n.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.iconFrameGroup[t], n.addComponent(cc.Button), 
                        n.scale = a.wechatGameWall.gridWidth / 140;
                        var i = 20 - e.width / 2 + a.wechatGameWall.gridWidth / 2 + a.wechatGameWall.offSet + (a.wechatGameWall.gridWidth + a.wechatGameWall.offSet) * t;
                        n.setPosition(cc.v2(i, 0));
                        var o = {
                            appId: a.wechatGameWall.iconIdGroup[t]
                        };
                        n.attr(o), a.wechatGameWall._Line.addChild(n), a.wechatGameWall.buttonGroup2.push(n), 
                        n.on(cc.Node.EventType.TOUCH_END, a.wechatGameWall.goToGame);
                    }
                    a.wechatGameWall.buttonRoll2(), a.wechatGameWall.lineShow || (a.wechatGameWall._Line.active = !1);
                    var c = new cc.Node("lineTittle");
                    c.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[5], c.scale = .9, 
                    c.setPosition(cc.v2(0 - e.width / 2 + a.wechatGameWall.gridWidth / 2 - 42, 0)), 
                    a.wechatGameWall._Line.addChild(c), a.wechatGameWall._Line.scale = a.wechatGameWall.lineScale;
                }
            }, e.prototype.buttonRoll2 = function() {
                a.wechatGameWall._Line.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                    for (var e = 0; e != a.wechatGameWall.buttonGroup2.length; e++) {
                        a.wechatGameWall.buttonGroup2[e].runAction(cc.moveBy(.4, cc.v2(0 - a.wechatGameWall.gridWidth - a.wechatGameWall.offSet, 0)));
                    }
                }), cc.delayTime(.4), cc.callFunc(function() {
                    var e = a.wechatGameWall.firstIdx2 - 1;
                    -1 == e && (e = 8);
                    var t = a.wechatGameWall.buttonGroup2[e].x + a.wechatGameWall.offSet + a.wechatGameWall.gridWidth;
                    a.wechatGameWall.buttonGroup2[a.wechatGameWall.firstIdx2].setPosition(cc.v2(t, 0)), 
                    a.wechatGameWall.firstIdx2++, a.wechatGameWall.firstIdx2 > a.wechatGameWall.buttonGroup2.length - 1 && (a.wechatGameWall.firstIdx2 = 0), 
                    a.wechatGameWall.buttonRoll2();
                })));
            }, e.prototype.buttonRoll5 = function() {
                a.wechatGameWall._vertical1.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                    for (var e = 0; e != a.wechatGameWall.buttonGroup5.length; e++) {
                        a.wechatGameWall.buttonGroup5[e].runAction(cc.moveBy(.4, cc.v2(0, a.wechatGameWall.gridHeight + a.wechatGameWall.offSet)));
                    }
                }), cc.delayTime(.2), cc.callFunc(function() {
                    var e = a.wechatGameWall.firstIdx5 - 1;
                    -1 == e && (e = 8);
                    var t = a.wechatGameWall.buttonGroup5[e].y - a.wechatGameWall.offSet - a.wechatGameWall.gridHeight;
                    a.wechatGameWall.buttonGroup5[a.wechatGameWall.firstIdx5].setPosition(cc.v2(0, t)), 
                    a.wechatGameWall.firstIdx5++, a.wechatGameWall.firstIdx5 > a.wechatGameWall.buttonGroup5.length - 1 && (a.wechatGameWall.firstIdx5 = 0), 
                    a.wechatGameWall.buttonRoll5();
                })));
            }, e.prototype.buttonRoll6 = function() {
                a.wechatGameWall._vertical2.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                    for (var e = 0; e != a.wechatGameWall.buttonGroup6.length; e++) {
                        a.wechatGameWall.buttonGroup6[e].runAction(cc.moveBy(.4, cc.v2(0, a.wechatGameWall.gridHeight + a.wechatGameWall.offSet)));
                    }
                }), cc.delayTime(.2), cc.callFunc(function() {
                    var e = a.wechatGameWall.firstIdx6 - 1;
                    -1 == e && (e = 8);
                    var t = a.wechatGameWall.buttonGroup6[e].y - a.wechatGameWall.offSet - a.wechatGameWall.gridHeight;
                    a.wechatGameWall.buttonGroup6[a.wechatGameWall.firstIdx6].setPosition(cc.v2(0, t)), 
                    a.wechatGameWall.firstIdx6++, a.wechatGameWall.firstIdx6 > a.wechatGameWall.buttonGroup6.length - 1 && (a.wechatGameWall.firstIdx6 = 0), 
                    a.wechatGameWall.buttonRoll6();
                })));
            }, e.prototype.initWall = function() {
                if (!(a.wechatGameWall.buttonGroup3.length > 0)) {
                    var e = new cc.Node("rewanRail");
                    e.addComponent(cc.Button), e.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[2], 
                    e.setPosition(cc.v2(0, cc.winSize.height / 2 - 90)), a.wechatGameWall._Wall.addChild(e), 
                    e.on(cc.Node.EventType.TOUCH_END, a.wechatGameWall.hideWall), e.setContentSize(cc.size(420, 60));
                    var t = new cc.Node("wallTittle");
                    t.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[4], t.setPosition(cc.v2(18, 0)), 
                    e.addChild(t), a.wechatGameWall._Wall.tittle1 = t;
                    var n = new cc.Node("wallTittle1_1");
                    n.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[1], n.setPosition(cc.v2(18, 0)), 
                    e.addChild(n), a.wechatGameWall._Wall.tittle2 = n;
                    var i = new cc.Node("closeButton");
                    i.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[0], i.setPosition(cc.v2(-200, 0)), 
                    t.addChild(i), a.wechatGameWall.closeButton1 = e;
                    for (var c = a.wechatGameWall.randomNum(0, 8), r = a.wechatGameWall.randomNum(0, 8); r == c; ) {
                        r = a.wechatGameWall.randomNum(0, 8);
                    }
                    for (var l = 0; l != a.wechatGameWall.iconFrameGroup.length; l++) {
                        var s = new cc.Node("appButton");
                        s.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.iconFrameGroup[l], s.addComponent(cc.Button);
                        var h = Math.floor(l / 3), d = l - 3 * h, u = 0 - (a.wechatGameWall.gridWidth + a.wechatGameWall.bigOffSet) + (a.wechatGameWall.gridWidth + a.wechatGameWall.bigOffSet) * d, g = a.wechatGameWall.gridHeight + 3 * a.wechatGameWall.bigOffSet + a.wechatGameWall.nameHeight - (a.wechatGameWall.gridHeight + a.wechatGameWall.bigOffSet + a.wechatGameWall.nameHeight) * h;
                        s.setPosition(cc.v2(u, g));
                        var p = {
                            appId: a.wechatGameWall.iconIdGroup[l]
                        };
                        s.attr(p), a.wechatGameWall._Wall.addChild(s), a.wechatGameWall.buttonGroup3.push(s), 
                        s.on(cc.Node.EventType.TOUCH_END, a.wechatGameWall.goToGame);
                        var m = new cc.Node("appName");
                        if (m.setPosition(cc.v2(0, 0 - a.wechatGameWall.gridHeight / 2 - 2 * a.wechatGameWall.nameHeight)), 
                        m.addComponent(cc.Label).string = a.wechatGameWall.iconNameGroup[l], m.getComponent(cc.Label).fontSize = a.wechatGameWall.nameFontSize, 
                        m.color = cc.color(255, 255, 255), s.addChild(m), l == c) {
                            var f = new cc.Node("lt1");
                            f.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[6], f.setPosition(cc.v2(60, 60)), 
                            s.addChild(f);
                        } else if (l == r) {
                            var y = new cc.Node("lt2");
                            y.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[3], y.setPosition(cc.v2(60, 60)), 
                            s.addChild(y);
                        }
                        s.scale = 12 / 14;
                    }
                    var C = new cc.Node("rewanRail");
                    C.addComponent(cc.Button), C.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[2], 
                    C.setPosition(cc.v2(0, cc.winSize.height / 2 - 90)), a.wechatGameWall._wallTittle.addChild(C), 
                    C.on(cc.Node.EventType.TOUCH_END, a.wechatGameWall.hideWall), C.setContentSize(cc.size(420, 60));
                    var N = new cc.Node("wallTittle");
                    N.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[4], N.setPosition(cc.v2(18, 0)), 
                    C.addChild(N);
                    var _ = new cc.Node("wallTittle2");
                    _.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[1], _.setPosition(cc.v2(18, 0)), 
                    C.addChild(_), a.wechatGameWall._wallTittle.tittle1 = N, a.wechatGameWall._wallTittle.tittle2 = _;
                    var w = new cc.Node("closeButton");
                    w.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.resGroup[0], w.setPosition(cc.v2(-200, 0)), 
                    N.addChild(w), a.wechatGameWall.closeButton2 = C, e.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1)))), 
                    C.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1)))), 
                    o.wechat._gridWall ? (a.wechatGameWall.wallShow || (a.wechatGameWall._wallTittle.active = !1), 
                    a.wechatGameWall._Wall.active = !1) : (a.wechatGameWall.wallShow || (a.wechatGameWall._Wall.active = !1), 
                    a.wechatGameWall._wallTittle.active = !1), "rewan" == a.wechatGameWall.tittleType ? (a.wechatGameWall._Wall.tittle1.active = !0, 
                    a.wechatGameWall._Wall.tittle2.active = !1, a.wechatGameWall._wallTittle.tittle1.active = !0, 
                    a.wechatGameWall._wallTittle.tittle2.active = !1) : (a.wechatGameWall._Wall.tittle1.active = !1, 
                    a.wechatGameWall._Wall.tittle2.active = !0, a.wechatGameWall._wallTittle.tittle1.active = !1, 
                    a.wechatGameWall._wallTittle.tittle2.active = !0);
                }
            }, e.prototype.randomNum = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e);
            }, e.prototype.initVerticals = function() {
                if (!(a.wechatGameWall.buttonGroup6.length > 0)) {
                    for (var e = cc.size(a.wechatGameWall.gridWidth + 2 * a.wechatGameWall.offSet, 5 * (a.wechatGameWall.gridHeight + a.wechatGameWall.offSet) + a.wechatGameWall.offSet), t = 0; t != a.wechatGameWall.iconFrameGroup.length; t++) {
                        var n = new cc.Node("appButton");
                        n.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.iconFrameGroup[t], n.addComponent(cc.Button), 
                        n.scale = a.wechatGameWall.gridWidth / 140;
                        var i = e.height / 2 - a.wechatGameWall.gridHeight / 2 - a.wechatGameWall.offSet - (a.wechatGameWall.gridHeight + a.wechatGameWall.offSet) * t;
                        n.setPosition(cc.v2(0, i));
                        var o = {
                            appId: a.wechatGameWall.iconIdGroup[t]
                        };
                        n.attr(o), a.wechatGameWall._vertical1.addChild(n), a.wechatGameWall.buttonGroup5.push(n), 
                        n.on(cc.Node.EventType.TOUCH_END, a.wechatGameWall.goToGame);
                        var c = new cc.Node("appButton2");
                        c.addComponent(cc.Sprite).spriteFrame = a.wechatGameWall.iconFrameGroup[t], c.addComponent(cc.Button), 
                        c.scale = a.wechatGameWall.gridWidth / 140, c.setPosition(cc.v2(0, i)), c.attr(o), 
                        a.wechatGameWall._vertical2.addChild(c), a.wechatGameWall.buttonGroup6.push(c), 
                        c.on(cc.Node.EventType.TOUCH_END, a.wechatGameWall.goToGame);
                    }
                    a.wechatGameWall.buttonRoll5(), a.wechatGameWall.buttonRoll6(), a.wechatGameWall.verticalShow1 || (a.wechatGameWall._vertical1.active = !1), 
                    a.wechatGameWall.verticalShow2 || (a.wechatGameWall._vertical2.active = !1), a.wechatGameWall._vertical1.scale = a.wechatGameWall.lineScale, 
                    a.wechatGameWall._vertical2.scale = a.wechatGameWall.lineScale;
                }
            }, e.prototype.setWallActionType = function(e) {
                0 == e || 1 == e || 2 == e ? a.wechatGameWall.wallType = e : console.log("we don't have type : " + e);
            }, e.prototype.setSingleScale = function(e) {
                a.wechatGameWall._Single ? a.wechatGameWall._Single.scale = e : a.wechatGameWall.singleScale = e;
            }, e.prototype.setLineScale = function(e) {
                a.wechatGameWall._Line ? a.wechatGameWall._Line.scale = e : a.wechatGameWall.lineScale = e;
            }, e.prototype.goToGame = function(e) {
                var t = e.target.appId;
                console.log(t), c && wx.navigateToMiniProgram({
                    appId: t,
                    extraData: {
                        foo: "bar"
                    },
                    envVersion: "release",
                    success: function success() {
                        console.log(" open app !!! ");
                    }
                });
            }, e.prototype.showSingle = function() {
                if (a.wechatGameWall._Single) return 255 != a.wechatGameWall._Single.opacity && (a.wechatGameWall._Single.opacity = 255), 
                a.wechatGameWall._Single.active = !0;
                a.wechatGameWall.singleShow = !0;
            }, e.prototype.showLine = function() {
                o.wechat._is_review || o.wechat._gridLine && o.wechat.showGridLine();
            }, e.prototype.showVertical1 = function() {
                if (a.wechatGameWall._vertical1) return 255 != a.wechatGameWall._vertical1.opacity && (a.wechatGameWall._vertical1.opacity = 255), 
                a.wechatGameWall._vertical1.active = !0;
                a.wechatGameWall.verticalShow1 = !0;
            }, e.prototype.showVertical2 = function() {
                if (a.wechatGameWall._vertical2) return 255 != a.wechatGameWall._vertical2.opacity && (a.wechatGameWall._vertical2.opacity = 255), 
                a.wechatGameWall._vertical2.active = !0;
                a.wechatGameWall.verticalShow2 = !0;
            }, e.prototype.showWall = function(e) {
                void 0 === e && (e = "rewan"), a.wechatGameWall.tittleType = e, o.wechat.showBannerAd(), 
                o.wechat._gridWall ? (o.wechat.showGridWall(), a.wechatGameWall._wallTittle ? (200 != a.wechatGameWall._wallTittle.opacity && (a.wechatGameWall._wallTittle.opacity = 200), 
                a.wechatGameWall._wallTittle && (a.wechatGameWall._wallTittle.active = !0), a.wechatGameWall.closeButton2.on(cc.Node.EventType.TOUCH_END, a.wechatGameWall.hideWall), 
                "rewan" == e ? (a.wechatGameWall._wallTittle.tittle1.active = !0, a.wechatGameWall._wallTittle.tittle2.active = !1) : "jixu" == e && (a.wechatGameWall._wallTittle.tittle1.active = !1, 
                a.wechatGameWall._wallTittle.tittle2.active = !0)) : a.wechatGameWall.wallShow = !0) : a.wechatGameWall._Wall ? (200 != a.wechatGameWall._Wall.opacity && (a.wechatGameWall._Wall.opacity = 200), 
                a.wechatGameWall._grayBg.active, a.wechatGameWall._Wall.setPosition(cc.v2(-cc.winSize.width / 2 - a.wechatGameWall._Wall.width / 2, a.wechatGameWall._Wall.y)), 
                a.wechatGameWall._Wall.active = !0, a.wechatGameWall._Wall.runAction(cc.moveTo(.2, cc.v2(0, 0))), 
                a.wechatGameWall.closeButton1.on(cc.Node.EventType.TOUCH_END, a.wechatGameWall.hideWall), 
                "rewan" == e ? (a.wechatGameWall._Wall.tittle1.active = !0, a.wechatGameWall._Wall.tittle2.active = !1) : "jixu" == e && (a.wechatGameWall._Wall.tittle1.active = !1, 
                a.wechatGameWall._Wall.tittle2.active = !0)) : a.wechatGameWall.wallShow = !0;
            }, e.prototype.hideSingle = function() {
                if (a.wechatGameWall._Single) return a.wechatGameWall._Single.active = !1;
            }, e.prototype.hideLine = function() {
                if (o.wechat._gridLine && o.wechat.hideGridLine(), a.wechatGameWall._Line) return a.wechatGameWall._Line.active = !1;
            }, e.prototype.hideVertical1 = function() {
                if (a.wechatGameWall._vertical1) return a.wechatGameWall._vertical1.active = !1;
            }, e.prototype.hideVertical2 = function() {
                if (a.wechatGameWall._vertical2) return a.wechatGameWall._vertical2.active = !1;
            }, e.prototype.hideWall = function(e) {
                void 0 === e && (e = !0), a.wechatGameWall._Wall && (a.wechatGameWall._grayBg.active && (a.wechatGameWall._grayBg.active = !1), 
                a.wechatGameWall._Wall.runAction(cc.sequence(cc.moveTo(.2, cc.v2(-cc.winSize.width / 2 - a.wechatGameWall._Wall.width / 2, a.wechatGameWall._Wall.y)), cc.callFunc(function() {
                    a.wechatGameWall._Wall.active = !1;
                })))), a.wechatGameWall.closeButton1 && a.wechatGameWall.closeButton1.off(cc.Node.EventType.TOUCH_END, a.wechatGameWall.hideWall), 
                a.wechatGameWall.closeButton2 && a.wechatGameWall.closeButton2.off(cc.Node.EventType.TOUCH_END, a.wechatGameWall.hideWall), 
                o.wechat._gridWall && o.wechat.hideGridWall(), a.wechatGameWall._wallTittle.active && (a.wechatGameWall._wallTittle.active = !1), 
                o.wechat.hideBannerAd();
            }, e;
        }())(), cc._RF.pop();
    }, {
        "./libwechat": "libwechat",
        HttpRequest: "HttpRequest"
    } ],
    WXUserInfoButton: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "a6bc24IZnJJ45l4n/1LjKkJ", "WXUserInfoButton");
        var _n9, i = this && this.__extends || (_n9 = function n(e, t) {
            return (_n9 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n9(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./libwechat"), r = cc._decorator, l = r.ccclass, s = r.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._userInfoButton = null, t.buttonTexture = null, t.hideOriginalButton = !0, 
                t;
            }
            var a;
            return i(t, e), a = t, t.prototype.onLoad = function() {
                a._createdButtons.push(this), this.node.on("click", this.onButtonClick, this);
            }, t.prototype.start = function() {
                var e = this;
                CC_WECHATGAME && wx.createUserInfoButton && c.wechat.wxUserInfo.catch(function() {
                    wx.createUserInfoButton && (e._userInfoButton = wx.createUserInfoButton({
                        type: "image",
                        image: e.textureUrl,
                        withCredentials: !0,
                        style: c.wechat.wxCoordProjection(e.node)
                    }), e.hideOriginalButton && (e.node.opacity = 0), e._userInfoButton.onTap(function(t) {
                        t.rawData ? (c.wechat.resetWxUserInfo(t), a._createdButtons.forEach(function(e) {
                            e._userInfoButton && (e._userInfoButton.destroy(), e.hideOriginalButton && (e.node.opacity = 255));
                        }), e.node.emit("click")) : e.node.emit(c.WX_EVT_ERROR_EVT, new Error(c.ERR_MSG_USER_CANCELLED));
                    }));
                });
            }, t.prototype.onEnable = function() {
                this._userInfoButton && this._userInfoButton.show();
            }, t.prototype.onDisable = function() {
                this._userInfoButton && this._userInfoButton.hide();
            }, t.prototype.onDestroy = function() {
                this._userInfoButton && this._userInfoButton.destroy();
                var e = a._createdButtons;
                e.splice(e.indexOf(this), 1);
            }, t.prototype.onButtonClick = function() {
                var e = this;
                CC_WECHATGAME ? c.wechat.wxUserInfo.then(function(t) {
                    e.node.emit(c.WX_EVT_USER_INFO, t);
                }).catch(function() {
                    e.node.emit(c.WX_EVT_ERROR_EVT, new Error(c.ERR_MSG_USER_CANCELLED));
                }) : this.node.emit(c.WX_EVT_USER_INFO, null);
            }, Object.defineProperty(t.prototype, "textureUrl", {
                get: function get() {
                    if (!this.buttonTexture || !this.buttonTexture.nativeUrl) return "";
                    var e = this.buttonTexture.nativeUrl;
                    return cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e)), wxDownloader.REMOTE_SERVER_ROOT && (e = wxDownloader.REMOTE_SERVER_ROOT + "/" + e), 
                    e;
                },
                enumerable: !1,
                configurable: !0
            }), t._createdButtons = [], o([ s({
                type: cc.Texture2D
            }) ], t.prototype, "buttonTexture", void 0), o([ s ], t.prototype, "hideOriginalButton", void 0), 
            a = o([ l ], t);
        }(cc.Component);
        a.default = h, cc._RF.pop();
    }, {
        "./libwechat": "libwechat"
    } ],
    adBox: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "032bcb0KX9KlrxEyNjAg3qx", "adBox");
        var _n10, i = this && this.__extends || (_n10 = function n(e, t) {
            return (_n10 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n10(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./libppgame/libwechat"), r = cc._decorator, l = r.ccclass, s = (r.property, 
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.canClose = !1, t._maxProgress = 100, t._boxProgress = 0, t._adOutValue = 0, 
                t._bannerOut = !1, t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("adButton").on(cc.Node.EventType.TOUCH_END, this.boxTouch, this), 
                this.node.getChildByName("adButton").y = 0 - cc.winSize.height / 2 + 150, this.node.getChildByName("bgNode").on(cc.Node.EventType.TOUCH_END, this.closeNode, this);
            }, t.prototype.closeNode = function() {
                this.canClose && (c.wechat.hideBannerAd(), this.node.parent.getComponent("menuScene") ? this.node.parent.getComponent("menuScene").onBtnShowGameWall() : this.node.parent.parent.getChildByName("resultNode") && this.node.parent.parent.getChildByName("resultNode").getComponent("resultNode").onBtnShowGameWall(), 
                this.node.active = !1);
            }, t.prototype.adBoxShow = function() {
                this.canClose = !1, this._boxProgress = 35, this.setProgress(), this.node.getChildByName("adButton").active = !0, 
                this.node.getChildByName("boxNode").active = !0, this.node.getChildByName("boxNodeOpen").active = !1, 
                this.node.zIndex = 999, this.node.active = !0, this.node.getChildByName("bgNode").setContentSize(cc.winSize), 
                this._bannerOut = !1, this._adOutValue = 69;
            }, t.prototype.boxTouch = function() {
                if (this.node.getChildByName("boxNode").runAction(cc.sequence(cc.rotateTo(.05, 10), cc.rotateTo(.05, -10), cc.rotateTo(.05, 0))), 
                this._boxProgress += 10, this._boxProgress >= this._adOutValue && !this._bannerOut) {
                    this._boxProgress = this._maxProgress, this._bannerOut = !0, c.wechat.showBannerAd(), 
                    this.node.getChildByName("adButton").active = !1, this.node.getChildByName("boxNode").active = !1, 
                    this.node.getChildByName("boxNodeOpen").active = !0, this.node.getChildByName("boxNodeOpen").runAction(cc.sequence(cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1)));
                    var e = this;
                    this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                        e.canClose = !0, e.node.getChildByName("label").active = !0, e.node.getChildByName("label").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1))));
                    })));
                }
                this.setProgress();
            }, t.prototype.update = function() {
                this._boxProgress > .5 && this._boxProgress < this._maxProgress ? (this._boxProgress -= .5, 
                this.setProgress()) : this._boxProgress < this._maxProgress && (this._boxProgress = 0, 
                this.setProgress());
            }, t.prototype.setProgress = function() {
                this.node.getChildByName("enterProgress").getComponent(cc.ProgressBar).progress = this._boxProgress / this._maxProgress;
            }, t.prototype.randomNum = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            }, o([ l ], t);
        }(cc.Component));
        a.default = s, cc._RF.pop();
    }, {
        "./libppgame/libwechat": "libwechat"
    } ],
    arenaEnemyScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "c7858Ww4X9GVbuq8b2birQF", "arenaEnemyScript");
        var _n11, i = this && this.__extends || (_n11 = function n(e, t) {
            return (_n11 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n11(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = cc._decorator, l = r.ccclass, s = r.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.teamSetPrefab = null, t.text = "hello", t.enemyPosition = 0, t.enemyTeam = [], 
                t.defeat = -1, t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_END, this.openTeamSet, this);
            }, t.prototype.openTeamSet = function() {
                if (2 != this.defeat) {
                    c.DataManage.enemyData = this.enemyTeam;
                    var e = cc.instantiate(this.teamSetPrefab);
                    e.setPosition(cc.v2(0, 0)), e.getComponent("setTeamNode").initSetTeamNode(this.enemyTeam, 2, this.enemyPosition), 
                    cc.director.getScene().getChildByName("Canvas").addChild(e);
                }
            }, t.prototype.initEnemy = function(e) {
                var t = e[0], a = e[1], n = e[2], i = e[3], o = e[4], r = e[5], l = e[6], s = e[7], h = e[8];
                this.defeat = e[9], this.enemyPosition = n, this.enemyTeam = [ [ i, o ], [ r, l ], [ s, h ] ];
                var d = c.Utils.countPower(i, o) + c.Utils.countPower(r, l) + c.Utils.countPower(s, h);
                this.node.getChildByName("nameLabel").getComponent(cc.Label).string = t, this.node.getChildByName("powerNode").getComponent("menuPowerScript").setPower(d);
                var u = [ {
                    path: "cardBattle/headIcon/" + a,
                    type: cc.SpriteFrame
                } ], g = this;
                cc.assetManager.loadAny(u, {
                    bundle: "resources"
                }, null, function(e, t) {
                    g.node.getChildByName("img_headframe").getChildByName("img_headpic").getComponent(cc.Sprite).spriteFrame = t, 
                    g.node.getChildByName("img_headframe").getChildByName("img_headpic").setContentSize(cc.size(86, 86));
                });
                var p = 0;
                1 == n ? p = 100 : 2 == n || 3 == n || 4 == n ? p = 150 : 5 == n && (p = 200), this.node.getChildByName("goldNode").getChildByName("goldLabel").getComponent(cc.Label).string = "" + p, 
                2 == this.defeat ? this.node.getChildByName("img_lose").active = !0 : this.node.getChildByName("img_lose").active = !1;
            }, o([ s(cc.Prefab) ], t.prototype, "teamSetPrefab", void 0), o([ s ], t.prototype, "text", void 0), 
            o([ l ], t);
        }(cc.Component);
        a.default = h, cc._RF.pop();
    }, {
        "../DataManage": "DataManage"
    } ],
    arenaNode: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "7c8cfHydBpCj5FVZC0EQmiB", "arenaNode");
        var _n12, i = this && this.__extends || (_n12 = function n(e, t) {
            return (_n12 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n12(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./DataManage"), r = e("./libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.boxFrame = [ null ], t.resultNode = null, t.isInit = !1, t.time1 = 0, t.countTime = 3, 
                t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("img_jingjiwindow").getChildByName("img_return").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                this.node.getChildByName("img_jingjiwindow").getChildByName("button_shuaxin").on(cc.Node.EventType.TOUCH_END, this.refreshEnemy, this), 
                this.node.getChildByName("img_jiangliwindow").getChildByName("box1").attr({
                    idx: 1
                }), this.node.getChildByName("img_jiangliwindow").getChildByName("box2").attr({
                    idx: 2
                }), this.node.getChildByName("img_jiangliwindow").getChildByName("box3").attr({
                    idx: 3
                }), this.node.getChildByName("img_jiangliwindow").getChildByName("box1").on(cc.Node.EventType.TOUCH_END, this.openBox, this), 
                this.node.getChildByName("img_jiangliwindow").getChildByName("box2").on(cc.Node.EventType.TOUCH_END, this.openBox, this), 
                this.node.getChildByName("img_jiangliwindow").getChildByName("box3").on(cc.Node.EventType.TOUCH_END, this.openBox, this), 
                c.Utils.buttonBeat(this.node.getChildByName("img_jingjiwindow").getChildByName("button_shuaxin"));
            }, t.prototype.openBox = function(e) {
                this.node.parent.parent.getComponent("menuScene").playEffect("click");
                var t = e.target.idx, a = c.DataManage.arenaBoxData[t - 1];
                if (!(a[2] < a[1] || a[3] > 0)) {
                    var n = 0;
                    1 == t ? n = 100 : 2 == t ? n = 150 : 3 == t && (n = 200), c.DataManage.arenaBoxData[t - 1][3] = 2, 
                    c.Utils.saveArenaBoxData();
                    var i = cc.instantiate(this.resultNode);
                    i.setPosition(cc.v2(0, 0)), this.node.addChild(i), i.getComponent("resultNode").initResultNode(0, 0, n), 
                    c.DataManage.gold += n, c.Utils.setLocalData(), this.refreshArenaNode(), e.target.stopAllActions(), 
                    e.target.scale = 1;
                }
            }, t.prototype.refreshArenaNode = function() {
                if (0 == this.isInit) {
                    null == c.DataManage.arenaData && (c.DataManage.arenaData = c.Utils.randomArenaData(), 
                    c.Utils.saveArenaData());
                    for (var e = c.DataManage.arenaData, t = "", a = 0; a != e.length; a++) {
                        t = "enemy" + (a + 1), this.node.getChildByName("img_jingjiwindow").getChildByName("enemyNode").getChildByName(t).getComponent("arenaEnemyScript").initEnemy(e[a]);
                    }
                    this.isInit = !0, this.node.getChildByName("img_jingjiwindow").getChildByName("enemyNode").active = !0, 
                    this.node.getChildByName("img_jingjiwindow").getChildByName("labelNode").active = !1;
                } else this.node.getChildByName("img_jingjiwindow").getChildByName("enemyNode").active = !0, 
                this.node.getChildByName("img_jingjiwindow").getChildByName("labelNode").active = !1;
                var n = c.DataManage.arenaBoxData, i = 0, o = 0, r = 0, l = "";
                for (a = 0; a != n.length; a++) {
                    i = n[a][1], (o = n[a][2]) > i && (o = i), r = n[a][3], l = "box" + (a + 1), this.node.getChildByName("img_jiangliwindow").getChildByName(l).getChildByName("label2").getComponent(cc.Label).string = o + "/" + i, 
                    2 == r ? (this.node.getChildByName("img_jiangliwindow").getChildByName(l).getComponent(cc.Sprite).spriteFrame = this.boxFrame[1], 
                    this.node.getChildByName("img_jiangliwindow").getChildByName(l).off(cc.Node.EventType.TOUCH_END, this.openBox, this)) : o < i ? (this.node.getChildByName("img_jiangliwindow").getChildByName(l).off(cc.Node.EventType.TOUCH_END, this.openBox, this), 
                    this.node.getChildByName("img_jiangliwindow").getChildByName(l).getComponent(cc.Sprite).spriteFrame = this.boxFrame[0]) : (this.node.getChildByName("img_jiangliwindow").getChildByName(l).getComponent(cc.Sprite).spriteFrame = this.boxFrame[0], 
                    c.Utils.buttonBeat(this.node.getChildByName("img_jiangliwindow").getChildByName(l)));
                }
            }, t.prototype.refreshEnemy = function() {
                this.node.parent.parent.getComponent("menuScene").playEffect("click");
                var e = this;
                r.wechat.showRewardedVideoAd().then(function(t) {
                    t && e.shuaXin();
                }).catch(function() {});
            }, t.prototype.shuaXin = function() {
                c.DataManage.missionData[2][2]++, c.Utils.saveMissionData(), c.DataManage.arenaData = c.Utils.randomArenaData(), 
                c.Utils.saveArenaData();
                for (var e = c.DataManage.arenaData, t = "", a = 0; a != e.length; a++) {
                    t = "enemy" + (a + 1), this.node.getChildByName("img_jingjiwindow").getChildByName("enemyNode").getChildByName(t).getComponent("arenaEnemyScript").initEnemy(e[a]);
                }
                this.isInit = !0, this.node.getChildByName("img_jingjiwindow").getChildByName("enemyNode").active = !1, 
                this.node.getChildByName("img_jingjiwindow").getChildByName("labelNode").active = !0, 
                this.node.getChildByName("img_jingjiwindow").getChildByName("labelNode").getChildByName("randomEnemyLabel2").getComponent(cc.Label).string = "(3)......", 
                this.time1 = 0, this.countTime = 3;
            }, t.prototype.closeNode = function() {
                this.node.parent.parent.getComponent("menuScene").playEffect("click"), this.node.parent.parent.getComponent("menuScene").checkFetchStatu(), 
                this.node.active = !1;
            }, t.prototype.update = function(e) {
                this.node.getChildByName("img_jingjiwindow").getChildByName("labelNode").active && (this.time1 += e, 
                this.time1 > 1 && (this.time1 -= 1, this.countTime -= 1, this.countTime < 0 ? (this.node.getChildByName("img_jingjiwindow").getChildByName("enemyNode").active = !0, 
                this.node.getChildByName("img_jingjiwindow").getChildByName("labelNode").active = !1, 
                this.node.getChildByName("img_jingjiwindow").getChildByName("button_shuaxin").active = !0) : this.node.getChildByName("img_jingjiwindow").getChildByName("labelNode").getChildByName("randomEnemyLabel2").getComponent(cc.Label).string = "(" + this.countTime + ")......"));
            }, o([ h([ cc.SpriteFrame ]) ], t.prototype, "boxFrame", void 0), o([ h(cc.Prefab) ], t.prototype, "resultNode", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "./DataManage": "DataManage",
        "./libppgame/libwechat": "libwechat"
    } ],
    bagScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "39bf4F3hPlDvqJCDyj+b3Jz", "bagScript");
        var _n13, i = this && this.__extends || (_n13 = function n(e, t) {
            return (_n13 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n13(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./DataManage"), r = e("./libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.scrollCardNode = null, t.text = "hello", t.UrGroup = [], t.SsrGroup = [], 
                t.SrGroup = [], t.RGroup = [], t.chooseScroll = -1, t.scrollNodeGroup = [], t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("shangzhen").getChildByName("img_return").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                this.node.getChildByName("shangzhen").getChildByName("tihuan1").on(cc.Node.EventType.TOUCH_END, this.changeTeam1, this), 
                this.node.getChildByName("shangzhen").getChildByName("tihuan2").on(cc.Node.EventType.TOUCH_END, this.changeTeam2, this), 
                this.node.getChildByName("shangzhen").getChildByName("tihuan3").on(cc.Node.EventType.TOUCH_END, this.changeTeam3, this), 
                this.node.getChildByName("img_down").getChildByName("choose1").on(cc.Node.EventType.TOUCH_END, this.refreshScroll1, this), 
                this.node.getChildByName("img_down").getChildByName("choose2").on(cc.Node.EventType.TOUCH_END, this.refreshScroll2, this), 
                this.node.getChildByName("img_down").getChildByName("choose3").on(cc.Node.EventType.TOUCH_END, this.refreshScroll3, this), 
                this.node.getChildByName("img_down").getChildByName("choose4").on(cc.Node.EventType.TOUCH_END, this.refreshScroll4, this), 
                this.node.getChildByName("img_down").getChildByName("choose5").on(cc.Node.EventType.TOUCH_END, this.refreshScroll5, this), 
                r.wechat.hideBannerAd();
            }, t.prototype.refreshBagNode = function() {
                this.refreshGroups(), this.refreshMyCards(), this.UrGroup.length > 0 ? this.refreshScroll5() : this.SsrGroup.length > 0 ? this.refreshScroll4() : this.SrGroup.length > 0 ? this.refreshScroll3() : this.RGroup.length > 0 ? this.refreshScroll2() : this.refreshScroll1();
            }, t.prototype.refreshGroups = function() {
                this.UrGroup = [], this.SsrGroup = [], this.SrGroup = [], this.RGroup = [];
                for (var e = c.DataManage.cardData, t = null, a = 0; a != e.length; a++) {
                    e[a][1] > 0 && (1 == (t = c.Utils.getCardTemplate(e[a][0]))[3] ? this.RGroup.push(e[a]) : 2 == t[3] ? this.SrGroup.push(e[a]) : 3 == t[3] ? this.SsrGroup.push(e[a]) : 4 == t[3] && this.UrGroup.push(e[a]));
                }
                this.RGroup.sort(function(e, t) {
                    return t[1] - e[1];
                }), this.SrGroup.sort(function(e, t) {
                    return t[1] - e[1];
                }), this.SsrGroup.sort(function(e, t) {
                    return t[1] - e[1];
                }), this.UrGroup.sort(function(e, t) {
                    return t[1] - e[1];
                });
            }, t.prototype.refreshMyCards = function() {
                for (var e = c.DataManage.battleTeam, t = "", a = 0; a != e.length; a++) {
                    t = "cardNode" + (a + 1), this.node.getChildByName("shangzhen").getChildByName(t).getComponent("cardScript").initCard(e[a]);
                }
            }, t.prototype.refreshScroll = function(e) {
                this.node.parent.parent.getComponent("menuScene").playEffect("click");
                for (var t = "", a = 1; 6 != a; a++) {
                    t = "choose" + a, a == e ? (this.node.getChildByName("img_down").getChildByName(t).getChildByName("choose").active = !0, 
                    this.node.getChildByName("img_down").getChildByName(t).getChildByName("buttonLabel").color = cc.color(255, 255, 255)) : (this.node.getChildByName("img_down").getChildByName(t).getChildByName("choose").active = !1, 
                    this.node.getChildByName("img_down").getChildByName(t).getChildByName("buttonLabel").color = cc.color(84, 159, 232));
                }
                var n = null;
                if (5 == e) n = this.UrGroup; else if (4 == e) n = this.SsrGroup; else if (3 == e) n = this.SrGroup; else if (2 == e) n = this.RGroup; else if (1 == e) {
                    for (n = this.UrGroup, a = 0; a != this.SsrGroup.length; a++) {
                        n.push(this.SsrGroup[a]);
                    }
                    for (a = 0; a != this.SrGroup.length; a++) {
                        n.push(this.SrGroup[a]);
                    }
                    for (a = 0; a != this.RGroup.length; a++) {
                        n.push(this.RGroup[a]);
                    }
                }
                if (this.scrollNodeGroup.length > 0) {
                    for (a = 0; a != this.scrollNodeGroup.length; a++) {
                        this.scrollNodeGroup[a].runAction(cc.removeSelf());
                    }
                    this.scrollNodeGroup = [];
                }
                var i, o = 0, c = 0;
                for (a = 0; a != n.length; a++) {
                    var r = cc.instantiate(this.scrollCardNode);
                    r.getComponent("cardScript").initCard(n[a][0]), r.scale = .66, o = a % 2 * 300 - 150, 
                    c = -226 - 430 * Math.floor(a / 2), r.setPosition(cc.v2(o, c)), this.node.getChildByName("img_down").getChildByName("bagScroll").getChildByName("view").getChildByName("content").addChild(r), 
                    this.scrollNodeGroup.push(r);
                }
                i = Math.max(702, 430 * Math.ceil(n.length / 2)), this.node.getChildByName("img_down").getChildByName("bagScroll").getChildByName("view").getChildByName("content").setContentSize(cc.size(640, i));
            }, t.prototype.closeNode = function() {
                this.node.parent.parent.getComponent("menuScene").playEffect("click"), this.node.active = !1;
            }, t.prototype.changeTeam1 = function() {
                this.node.parent.parent.getComponent("menuScene").playEffect("click"), this.node.getChildByName("changeCardNode").active = !0, 
                this.node.getChildByName("changeCardNode").getComponent("changeCardScript").refreshChangeCardScroll(0);
            }, t.prototype.changeTeam2 = function() {
                this.node.parent.parent.getComponent("menuScene").playEffect("click"), this.node.getChildByName("changeCardNode").active = !0, 
                this.node.getChildByName("changeCardNode").getComponent("changeCardScript").refreshChangeCardScroll(1);
            }, t.prototype.changeTeam3 = function() {
                this.node.parent.parent.getComponent("menuScene").playEffect("click"), this.node.getChildByName("changeCardNode").active = !0, 
                this.node.getChildByName("changeCardNode").getComponent("changeCardScript").refreshChangeCardScroll(2);
            }, t.prototype.refreshScroll1 = function() {
                1 != this.chooseScroll && (this.chooseScroll = 1, this.refreshScroll(1));
            }, t.prototype.refreshScroll2 = function() {
                this.refreshScroll(2);
            }, t.prototype.refreshScroll3 = function() {
                this.refreshScroll(3);
            }, t.prototype.refreshScroll4 = function() {
                this.refreshScroll(4);
            }, t.prototype.refreshScroll5 = function() {
                this.refreshScroll(5);
            }, o([ h(cc.Prefab) ], t.prototype, "scrollCardNode", void 0), o([ h ], t.prototype, "text", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "./DataManage": "DataManage",
        "./libppgame/libwechat": "libwechat"
    } ],
    battleInfoScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "df46fsZIK9IQL0ccHjXuc4m", "battleInfoScript");
        var _n14, i = this && this.__extends || (_n14 = function n(e, t) {
            return (_n14 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n14(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.hpImages = [ null ], t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.setProgressImage = function(e) {
                this.node.getChildByName("hpProgress").getChildByName("bar").getComponent(cc.Sprite).spriteFrame = this.hpImages[e];
            }, o([ l([ cc.SpriteFrame ]) ], t.prototype, "hpImages", void 0), o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    battleNodeScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "b06fbmwlSFLT405whasfkRH", "battleNodeScript");
        var _n15, i = this && this.__extends || (_n15 = function n(e, t) {
            return (_n15 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n15(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = cc._decorator, l = r.ccclass, s = r.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null, t.text = "hello", t.cardIdName = "", t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.initCard = function(e) {
                var t = [ {
                    path: "animalPrefab/" + e,
                    type: cc.Prefab
                } ], a = this;
                cc.assetManager.loadAny(t, {
                    bundle: "resources"
                }, null, function(e, t) {
                    var n = cc.instantiate(t);
                    n.setPosition(cc.v2(0, 0)), a.node.getChildByName("animalNode").addChild(n), a.node.runAction(cc.sequence(cc.delayTime(c.Utils.randomNum(0, 5) / 5), cc.callFunc(function() {
                        a.setAnimation("idle");
                    }))), a.node.scale = .66;
                }), this.cardIdName = "" + e;
            }, t.prototype.setAnimation = function(e) {
                "idle" == e ? this.node.getChildByName("animalNode").getComponent(cc.Animation).play("1000") : "attack" == e && this.node.getChildByName("animalNode").getChildByName(this.cardIdName).getComponent(cc.Animation).play(this.cardIdName + 1);
            }, o([ s(cc.Label) ], t.prototype, "label", void 0), o([ s ], t.prototype, "text", void 0), 
            o([ l ], t);
        }(cc.Component);
        a.default = h, cc._RF.pop();
    }, {
        "../DataManage": "DataManage"
    } ],
    battleScene: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "8194bVZbttNdZApBKPV0prc", "battleScene");
        var _n16, i = this && this.__extends || (_n16 = function n(e, t) {
            return (_n16 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n16(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./DataManage"), r = e("./libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.bgSpriteFrame = [ null ], t.resultNode = null, t.getCardNode = null, t.kezhiNode = null, 
                t.bg1 = null, t.bg2 = null, t.attackInfo = [], t.battleData = [ [], [] ], t.battleRole = [], 
                t.enemyPower = 0, t.myPower = 0, t.enterType = 0, t.battleStageOrPosi = 0, t.vsAnimal1 = 0, 
                t.vsAnimal2 = 0, t.showIndex = 0, t.battleRound = 0, t.nextAttackTimes = 1, t.lastAttackIdx = [ -1, -1 ], 
                t.attackTag = [ [ 0, 0, 0 ], [ 0, 0, 0 ] ], t.attackDis = 80, t.actionTimeGroup = [ .2, .4, .8, .1, .1, 1.6 ], 
                t.nowAttackType = 0, t.nowAttackId = 0, t.attackOrder = [ [ 3, 4, 5 ], [ 4, 3, 5 ], [ 5, 4, 3 ], [ 0, 1, 2 ], [ 1, 0, 2 ], [ 2, 1, 0 ] ], 
                t.time1 = 0, t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("bg1").getChildByName("animals").getChildByName("mask").zIndex = 2, 
                this.node.getChildByName("bg1").getChildByName("animals").getChildByName("eff_atk").zIndex = 15, 
                this.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_haihit").zIndex = 15, 
                this.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_konghit").zIndex = 15, 
                this.bg1.setContentSize(cc.winSize), this.bg2.setContentSize(cc.winSize);
            }, t.prototype.initBattle = function(e, t, a, n) {
                void 0 === n && (n = 0), c.Utils.blinkBanner(this.node, 1), this.attackInfo = [], 
                this.enterType = a, this.battleStageOrPosi = n, this.enemyPower = 0, this.myPower = 0;
                var i = this.node.getChildByName("bg1").getChildByName("animals");
                this.battleRole = [ i.getChildByName("battleNode1"), i.getChildByName("battleNode2"), i.getChildByName("battleNode3"), i.getChildByName("battleNode4"), i.getChildByName("battleNode5"), i.getChildByName("battleNode6") ];
                var o = [];
                if (1 == a) {
                    var r = 2 + .015 * n, l = [ 0, 0, 0 ], s = [ 0, 1.4, 1.3, 1.2, 1 ];
                    3 == t.length ? (l = [ .3, .4, .3 ], this.battleRole[0].getComponent("battleNodeScript").initCard(t[0][0]), 
                    this.battleRole[1].getComponent("battleNodeScript").initCard(t[1][0]), this.battleRole[2].getComponent("battleNodeScript").initCard(t[2][0]), 
                    this.vsAnimal2 = t[0][0]) : 2 == t.length ? (l = [ .5, 0, .5 ], t = [ t[0], null, t[1] ], 
                    this.battleRole[0].scale = 1.32, this.battleRole[1].active = !1, this.battleRole[1] = null, 
                    this.battleRole[2].scale = 1.32, this.battleRole[0].getComponent("battleNodeScript").initCard(t[0][0]), 
                    this.battleRole[2].getComponent("battleNodeScript").initCard(t[2][0]), this.vsAnimal2 = t[0][0]) : 1 == t.length && (l = [ 0, 1, 0 ], 
                    t = [ null, t[0], null ], this.battleRole[0].active = !1, this.battleRole[0] = null, 
                    this.battleRole[1].scale = 1.1 * 1.5, this.battleRole[2].active = !1, this.battleRole[2] = null, 
                    this.battleRole[1].getComponent("battleNodeScript").initCard(t[1][0]), this.vsAnimal2 = t[1][0]), 
                    n < 5 && (s = [ 1, 1, 1, 1 ]);
                    for (var h = 0; h != t.length; h++) {
                        null == t[h] ? this.battleData[0].push(null) : ((o = this.getCardDetail(t[h][0])).push(t[h][1]), 
                        o[3] = o[3] * s[o[2]], o[3] = Math.floor(o[3] * l[h] * r), o[4] = o[4] * s[o[2]], 
                        o[4] = Math.floor(o[4] * l[h] * r), this.enemyPower += o[3], this.enemyPower += o[4], 
                        o[4] *= 3, o[5] = o[4], this.battleData[0].push(o));
                    }
                    for (this.vsAnimal1 = e[0][0], h = 0; h != e.length; h++) {
                        (o = this.getCardDetail(e[h][0])).push(e[h][1]), this.battleData[1].push(o), this.battleRole[3 + h].getComponent("battleNodeScript").initCard(e[h][0]);
                    }
                } else {
                    for (this.vsAnimal2 = t[0][0], h = 0; h != t.length; h++) {
                        (o = this.getCardDetail(t[h][0])).push(t[h][1]), o[3] += Math.floor(o[3] * t[h][1] * .05), 
                        o[4] += Math.floor(o[4] * t[h][1] * .05), this.enemyPower += o[3], this.enemyPower += o[4], 
                        o[4] *= 3, o[5] = o[4], this.battleData[0].push(o), this.battleRole[h].getComponent("battleNodeScript").initCard(t[h][0]);
                    }
                    for (this.vsAnimal1 = e[0][0], h = 0; h != e.length; h++) {
                        (o = this.getCardDetail(e[h][0])).push(e[h][1]), this.battleData[1].push(o), this.battleRole[3 + h].getComponent("battleNodeScript").initCard(e[h][0]);
                    }
                }
                var d = 0, u = 0, g = 0, p = 0;
                for (h = 0; h != this.battleData[0].length; h++) {
                    this.battleData[0][h] && (1 == this.battleData[0][h][1] ? (d++, p = 0) : 2 == this.battleData[0][h][1] ? (u++, 
                    p = 1) : 3 == this.battleData[0][h][1] && (g++, p = 2));
                }
                d > u && d > g ? p = 0 : u > d && u > g ? p = 1 : g > d && g > u && (p = 2), p > 0 && (this.node.getChildByName("bg1").getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame[p]), 
                this.node.getChildByName("bg1").getChildByName("enemyPowerBg").getChildByName("power").getComponent(cc.Label).string = "" + this.enemyPower, 
                this.vsNodeShow();
                var m = 0;
                for (h = 0; h != e.length; h++) {
                    m += c.Utils.getCardPower(e[h][0]);
                }
                this.node.getChildByName("bg1").getChildByName("myPowerBg").getChildByName("power").getComponent(cc.Label).string = "" + m;
                this.node.getChildByName("bg1").getChildByName("myPowerBg").getComponent(cc.Widget).bottom = 230;
            }, t.prototype.vsNodeShow = function() {
                var e = [];
                e.push({
                    path: "cardBattle/cards/" + this.vsAnimal1,
                    type: cc.SpriteFrame
                }), e.push({
                    path: "cardBattle/cards/" + this.vsAnimal2,
                    type: cc.SpriteFrame
                });
                var t = this;
                cc.assetManager.loadAny(e, {
                    bundle: "resources"
                }, null, function(e, a) {
                    t.node.getChildByName("vsNode").getChildByName("animal1").getChildByName("card").getComponent(cc.Sprite).spriteFrame = a[1], 
                    t.node.getChildByName("vsNode").getChildByName("animal2").getChildByName("card").getComponent(cc.Sprite).spriteFrame = a[0], 
                    t.node.getChildByName("vsNode").getComponent(cc.Animation).play("vsAnimation"), 
                    t.node.runAction(cc.sequence(cc.delayTime(4), cc.callFunc(function() {
                        t.showIndex = 0, t.myCardShow(t.showIndex), t.playEffect("battleBgm");
                    }))), t.playEffect("vs"), t.node.getChildByName("bg1").active = !0, cc.director.preloadScene("stageScene"), 
                    cc.director.preloadScene("menuScene");
                });
            }, t.prototype.myCardShow = function(e) {
                this.playEffect("cardFlip");
                var t = this;
                this.node.getChildByName("bg1").getChildByName("showCard").opacity = 0, this.node.getChildByName("bg1").getChildByName("showCard").getComponent("cardScript").initCard(this.battleData[1][e][0]), 
                this.node.getChildByName("bg1").getChildByName("showCard").scale = 1, this.node.getChildByName("bg1").getChildByName("showCard").setPosition(cc.v2(0, 0)), 
                this.node.getChildByName("bg1").getChildByName("showCard").runAction(cc.sequence(cc.spawn(cc.fadeTo(.3, 255), cc.scaleTo(.3, 1.5)), cc.scaleTo(.2, 1), cc.moveTo(.2, t.battleRole[3 + e].getPosition()), cc.callFunc(function() {
                    t.battleRole[3 + e].opacity = 255, t.battleData[1][e][4] *= 3, t.battleData[1][e][5] = t.battleData[1][e][4], 
                    2 == e ? (t.node.getChildByName("bg1").getChildByName("showCard").opacity = 0, t.battleRound = 0, 
                    t.lastAttackIdx = [ -1, -1 ], t.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                        t.battleStart();
                    })))) : (e++, t.myCardShow(e));
                })));
            }, t.prototype.battleStart = function() {
                0 == this.battleRound ? (this.attackTag[1] = [ 0, 0, 0 ], this.nextAttackTimes = 1, 
                this.oneRound(1)) : this.battleRound % 2 == 0 ? (this.attackTag[1] = [ 0, 0, 0 ], 
                this.nextAttackTimes = 2, this.oneRound(1)) : (this.attackTag[0] = [ 0, 0, 0 ], 
                this.nextAttackTimes = 2, this.oneRound(0)), this.battleRound++;
            }, t.prototype.oneRound = function(e) {
                var t = this.getAttackIndex(e), a = -1;
                if (-1 == t) {
                    if (0 == this.getAlive(e)) return void (0 == e ? (this.winNodeShow(), console.log("我方胜利")) : (this.loseNodeShow(), 
                    console.log("敌方胜利")));
                    this.battleStart();
                } else {
                    if (-1 == (a = this.getTargetIndex(t))) return void (1 == e ? (this.winNodeShow(), 
                    console.log("我方胜利")) : (this.loseNodeShow(), console.log("敌方胜利")));
                    this.attack(t, a, e);
                }
            }, t.prototype.winNodeShow = function() {
                c.DataManage.missionData[3][2]++, c.Utils.saveMissionData();
                var e = this, t = 0, a = 0;
                if (1 == this.enterType) {
                    if (c.DataManage.stage == c.DataManage.battleStageOrPosi) {
                        var n = c.DataManage.stageTemplate[c.DataManage.stage];
                        if (null != n[4]) {
                            a = parseInt("" + n[4]);
                            for (var i = c.Utils.getCardInfo(a), o = 0; o != c.DataManage.cardData.length; o++) {
                                if (c.DataManage.cardData[o][0] == i[0] && (c.DataManage.cardData[o][1]++, c.DataManage.cardData[o][1] > 10)) {
                                    var l = 0, s = c.Utils.getCardTemplate(i[0]);
                                    4 == s[3] ? l = 50 : 3 == s[3] ? l = 20 : 2 == s[3] ? l = 10 : 1 == s[3] && (l = 5), 
                                    c.DataManage.gold += l;
                                }
                            }
                            c.Utils.saveCardData();
                        }
                        c.DataManage.stage++, c.Utils.setStage(), t = 80;
                    } else t = 0;
                } else if (2 == this.enterType) {
                    1 == c.DataManage.battleStageOrPosi ? t = 100 : 2 == c.DataManage.battleStageOrPosi || 3 == c.DataManage.battleStageOrPosi || 4 == c.DataManage.battleStageOrPosi ? t = 150 : 5 == c.DataManage.battleStageOrPosi && (t = 200);
                    for (var h = 0; h != c.DataManage.arenaData.length; h++) {
                        if (c.DataManage.arenaData[h][2] == c.DataManage.battleStageOrPosi) {
                            c.DataManage.arenaData[h][9] = 2;
                            break;
                        }
                    }
                    for (c.Utils.saveArenaData(), h = 0; h != c.DataManage.arenaBoxData.length; h++) {
                        c.DataManage.arenaBoxData[h][2] = c.DataManage.arenaBoxData[h][2] + 1;
                    }
                    c.Utils.saveArenaBoxData();
                }
                c.DataManage.gold += t, c.Utils.setLocalData(), this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    var n = cc.instantiate(e.resultNode);
                    if (n.getComponent("resultNode").initResultNode(e.enterType, 1, t), n.setPosition(cc.v2(0, 0)), 
                    e.node.addChild(n), 0 != a) {
                        var i = cc.instantiate(e.getCardNode);
                        i.getComponent("getCardScript").initGetCardNode([ [ a, 1 ] ], -1), e.node.addChild(i);
                    }
                }))), 0 == c.DataManage.firstLanding ? (1 == r.wechat.gamestartVideo && r.wechat.mustVideo(), 
                c.DataManage.firstLanding = 1) : 1 == r.wechat.levelstartVideo && r.wechat.mustVideo();
            }, t.prototype.loseNodeShow = function() {
                for (var e = 0; e != c.DataManage.arenaBoxData.length; e++) {
                    1 == c.DataManage.arenaBoxData[e][0] && (c.DataManage.arenaBoxData[e][2] = c.DataManage.arenaBoxData[e][2] + 1);
                }
                c.Utils.saveArenaBoxData();
                var t = this;
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    var e = cc.instantiate(t.resultNode);
                    e.getComponent("resultNode").initResultNode(t.enterType, 2), e.setPosition(cc.v2(0, 0)), 
                    t.node.addChild(e);
                })));
            }, t.prototype.attack = function(e, t, a) {
                var n = this, i = n.battleRole[e], o = n.battleRole[t], r = i.getPosition(), l = o.getPosition(), s = i.scale, h = o.scale;
                i.scale *= 1.5, o.scale *= 1.5;
                var d;
                d = o.y > r.y ? 0 - this.attackDis : this.attackDis;
                for (var u = cc.v2(0, r.y - d), g = cc.v2(0, l.y + d), p = cc.v2(0, g.y + 2 * d), m = 0; m != n.battleRole.length; m++) {
                    null != n.battleRole[m] && (n.battleRole[m].zIndex = 1);
                }
                e < 3 ? (i.zIndex = 3, o.zIndex = 4) : (i.zIndex = 4, o.zIndex = 3);
                var f = 0, y = 0, C = !1, N = !1, _ = 0, w = 1;
                e > 2 && (_ = 1, w = 0);
                var v = n.battleData[_][e - 3 * _], b = n.battleData[w][t - 3 * w], B = v[1], S = b[1], T = v[2], D = b[2], G = !0;
                for (m = 0; m != this.attackInfo.length; m++) {
                    if (this.attackInfo[m][0] == v[0] && this.attackInfo[m][1] == b[0]) {
                        G = !1;
                        break;
                    }
                }
                G && (this.attackInfo.push([ v[0], b[0] ]), n.checkCrit(B, S) && (C = !0, f = 2), 
                T > D && (N = !0, y = 2)), n.node.getChildByName("bg1").getChildByName("animals").getChildByName("mask").runAction(cc.fadeTo(.2, 199)), 
                o.runAction(cc.moveTo(n.actionTimeGroup[0], g)), n.nowAttackType = B, n.nowAttackId = v[6], 
                i.runAction(cc.sequence(cc.moveTo(n.actionTimeGroup[0], u), cc.callFunc(function() {
                    C && (n.playEffect("kezhi"), 0 == _ ? n.kezhiNode.getComponent("kezhiScript").initKeZhi(1, _ + 1, B, S) : n.kezhiNode.getComponent("kezhiScript").initKeZhi(1, _ + 1, S, B));
                }), cc.delayTime(f), cc.callFunc(function() {
                    N && (n.playEffect("yazhi"), 0 == _ ? n.kezhiNode.getComponent("kezhiScript").initKeZhi(2, _ + 1, T, D) : n.kezhiNode.getComponent("kezhiScript").initKeZhi(2, _ + 1, D, T));
                }), cc.delayTime(y), cc.moveTo(n.actionTimeGroup[1], p).easing(cc.easeOut(2)), cc.callFunc(function() {
                    n.playAnimalEffect(n.nowAttackId);
                    var t = c.Utils.randomNum(120, 140), a = c.Utils.randomNum(100, 120), i = c.Utils.randomNum(40, 60), r = c.Utils.randomNum(-10, 10);
                    g.y < 0 ? (t = g.y - t, a = g.y - a, i = g.y - i, r = g.y - r) : (t = g.y + t, a = g.y + a, 
                    i = g.y + i, r = g.y + r), o.runAction(cc.sequence(cc.delayTime(.6), cc.moveTo(.1, cc.v2(g.x + c.Utils.randomNum(-10, 10), t)), cc.moveTo(.1, cc.v2(g.x + c.Utils.randomNum(-10, 10), a)), cc.moveTo(.1, cc.v2(g.x + c.Utils.randomNum(-10, 10), i)), cc.moveTo(.1, cc.v2(g.x + c.Utils.randomNum(-10, 10), r)), cc.moveTo(.1, g))), 
                    n.battleRole[e].getComponent("battleNodeScript").setAnimation("attack");
                }), cc.delayTime(.75 * n.actionTimeGroup[2]), cc.callFunc(function() {
                    console.log(n.nowAttackType + "   ,........"), 1 == n.nowAttackType ? (n.node.getChildByName("bg1").getChildByName("animals").getChildByName("eff_atk").getComponent(cc.Animation).play("eff_atk"), 
                    n.node.getChildByName("bg1").getChildByName("animals").getChildByName("eff_atk").getChildByName("lizi01").getComponent(cc.ParticleSystem).resetSystem(), 
                    n.node.getChildByName("bg1").getChildByName("animals").getChildByName("eff_atk").getChildByName("lizi02").getComponent(cc.ParticleSystem).resetSystem(), 
                    n.node.getChildByName("bg1").getChildByName("animals").getChildByName("eff_atk").y = o.y, 
                    n.node.getChildByName("bg1").getChildByName("animals").getChildByName("eff_atk").opacity = 255) : 2 == n.nowAttackType ? (n.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_haihit").getComponent(cc.Animation).play("anim_haihit"), 
                    n.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_haihit").y = o.y, 
                    n.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_haihit").opacity = 255) : 3 == n.nowAttackType && (n.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_konghit").getComponent(cc.Animation).play("anim_konghit"), 
                    n.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_konghit").y = o.y, 
                    n.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_konghit").opacity = 255);
                    var i = 0, r = 1;
                    e > 2 && (i = 1, r = 0);
                    var l = n.battleData[i][e - 3 * i], s = n.battleData[r][t - 3 * r], h = l[3], d = (s[4], 
                    c.Utils.randomNum(90, 110)), u = l[1], g = s[1], p = l[2], m = s[2];
                    n.checkCrit(u, g) && (d += 15), p > m && (d += 15), h = Math.floor(h * d / 100), 
                    e > 2 ? n.attackTag[a][e - 3] = 1 : n.attackTag[a][e] = 1, n.battleData[r][t - 3 * r][4] -= h, 
                    n.battleData[r][t - 3 * r][4] < 0 && (n.battleData[r][t - 3 * r][4] = 0), o.getChildByName("battleInfo").getChildByName("bmFont").active = !0, 
                    0 == r ? o.getChildByName("battleInfo").getChildByName("bmFont").getComponent("bmFontScript").setShowString("-" + h, 1) : 1 == r && o.getChildByName("battleInfo").getChildByName("bmFont").getComponent("bmFontScript").setShowString("-" + h, 2);
                    var f = n.battleData[r][t - 3 * r][4] / n.battleData[r][t - 3 * r][5];
                    if (o.getChildByName("battleInfo").getChildByName("hpProgress").getChildByName("bar").runAction(cc.scaleTo(1, f, 1)), 
                    0 == f) {
                        var y = n.battleRole[t];
                        y.runAction(cc.sequence(cc.delayTime(.5), cc.fadeTo(.5, 0), cc.callFunc(function() {
                            y.active = !1;
                        }))), n.battleRole[t] = null;
                    }
                }), cc.delayTime(1), cc.moveTo(n.actionTimeGroup[3], u).easing(cc.easeOut(2)), cc.callFunc(function() {
                    o.getChildByName("battleInfo").getChildByName("bmFont").active = !1, o.runAction(cc.moveTo(n.actionTimeGroup[4], l)), 
                    n.node.getChildByName("bg1").getChildByName("animals").getChildByName("mask").opacity = 0, 
                    1 == n.nowAttackType ? n.node.getChildByName("bg1").getChildByName("animals").getChildByName("eff_atk").opacity = 0 : 2 == n.nowAttackType ? n.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_haihit").opacity = 0 : 3 == n.nowAttackType && (n.node.getChildByName("bg1").getChildByName("animals").getChildByName("Eff_konghit").opacity = 0), 
                    i.scale = s, o.scale = h;
                }), cc.moveTo(n.actionTimeGroup[4], r), cc.delayTime(.5), cc.callFunc(function() {
                    n.nextAttackTimes > 1 ? (n.oneRound(a), n.nextAttackTimes--) : n.battleStart();
                })));
            }, t.prototype.checkCrit = function(e, t) {
                return 3 == e && 1 == t || 1 == e && 2 == t || 2 == e && 3 == t;
            }, t.prototype.getTargetIndex = function(e) {
                for (var t = -1, a = this.attackOrder[e], n = 0; n != a.length; n++) {
                    if (null != this.battleRole[a[n]]) {
                        t = a[n];
                        break;
                    }
                }
                return t;
            }, t.prototype.getAttackIndex = function(e) {
                var t = -1;
                2 == this.lastAttackIdx[e] && (this.lastAttackIdx[e] = -1), 1 == this.lastAttackIdx[e] && null == this.battleRole[3 * e + 2] && (this.lastAttackIdx[e] = -1);
                for (var a = 0; 3 != a; a++) {
                    if (null != this.battleRole[3 * e + a] && 0 == this.attackTag[e][a] && (a > this.lastAttackIdx[e] || 1 == this.getAlive(e))) {
                        this.lastAttackIdx[e] = a, t = 3 * e + a;
                        break;
                    }
                }
                return t;
            }, t.prototype.getAlive = function(e) {
                for (var t = 0, a = 0; 3 != a; a++) {
                    null != this.battleRole[3 * e + a] && t++;
                }
                return t;
            }, t.prototype.getCardDetail = function(e) {
                var t = c.Utils.getCardTemplate(e), a = parseInt("" + t[2]), n = parseInt("" + t[3]), i = parseInt("" + t[5]), o = parseInt("" + t[6]);
                return [ e, a, n, i, o, o, t[7] ];
            }, t.prototype.update = function(e) {
                this.time1 += e, this.time1 > 1 && (this.time1 = 0, c.DataManage.onLineTimes++, 
                c.DataManage.onLineTimes % 30 == 0 && c.Utils.saveOnline());
            }, t.prototype.playEffect = function(e) {
                this.node.getChildByName("sound").getChildByName(e).getComponent(cc.AudioSource).play();
            }, t.prototype.playAnimalEffect = function(e) {
                this.node.getChildByName("sound").getChildByName("animals").getChildByName("" + e).getComponent(cc.AudioSource).play();
            }, o([ h([ cc.SpriteFrame ]) ], t.prototype, "bgSpriteFrame", void 0), o([ h(cc.Prefab) ], t.prototype, "resultNode", void 0), 
            o([ h(cc.Prefab) ], t.prototype, "getCardNode", void 0), o([ h(cc.Node) ], t.prototype, "kezhiNode", void 0), 
            o([ h(cc.Node) ], t.prototype, "bg1", void 0), o([ h(cc.Node) ], t.prototype, "bg2", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "./DataManage": "DataManage",
        "./libppgame/libwechat": "libwechat"
    } ],
    bmFontScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "9bc63kHt39H8ammp1udkc8j", "bmFontScript");
        var _n17, i = this && this.__extends || (_n17 = function n(e, t) {
            return (_n17 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n17(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.huangFrames = [ null ], t.hongFrames = [ null ], t.lanFrames = [ null ], 
                t.fontGroup = [], t.targetFrames = null, t.fontScale = 1.5, t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.setShowString = function(e, t) {
                if (0 == t ? (this.targetFrames = this.huangFrames, this.fontScale = 1.5) : 1 == t ? (this.targetFrames = this.hongFrames, 
                this.fontScale = 1.4) : 2 == t && (this.targetFrames = this.lanFrames, this.fontScale = 1.4), 
                0 != this.fontGroup.length) {
                    for (var a = 0; a != this.fontGroup.length; a++) {
                        this.fontGroup[a].runAction(cc.removeSelf());
                    }
                    this.fontGroup = [];
                }
                for (a = 0; a != e.length; a++) {
                    var n = new cc.Node();
                    n.addComponent(cc.Sprite).spriteFrame = this.createImageNode(e[a]), this.node.addChild(n), 
                    n.scale = this.fontScale, n.setPosition(cc.v2(30 * this.fontGroup.length * this.fontScale, 0)), 
                    this.fontGroup.push(n), n.opacity = 0, n.runAction(cc.sequence(cc.delayTime(.05 * a), cc.spawn(cc.scaleTo(.05, 2 * this.fontScale), cc.fadeTo(.1, 255)), cc.scaleTo(.05, this.fontScale)));
                }
            }, t.prototype.createImageNode = function(e) {
                if ("%" == e) return this.targetFrames[0];
                if ("+" == e) return this.targetFrames[1];
                if ("-" == e) return this.targetFrames[2];
                var t = this.targetFrames[3].copy(), a = parseInt(e);
                return a > -1 && a < 10 || (a = 0), t.setRect(cc.rect(38 * a, 0, 38, 38)), t;
            }, o([ l([ cc.SpriteFrame ]) ], t.prototype, "huangFrames", void 0), o([ l([ cc.SpriteFrame ]) ], t.prototype, "hongFrames", void 0), 
            o([ l([ cc.SpriteFrame ]) ], t.prototype, "lanFrames", void 0), o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    cardScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "2ff109HL4FIP564l92LJ2Lp", "cardScript");
        var _n18, i = this && this.__extends || (_n18 = function n(e, t) {
            return (_n18 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n18(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = cc._decorator, l = r.ccclass, s = r.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.levelFrame = [ null ], t.cardTypeFrame = [ null ], t.cardTypeRail = [ null ], 
                t.cardBg = [ null ], t.cardBorder = [ null ], t.idNum = 0, t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.initCard = function(e, t) {
                void 0 === t && (t = 0), this.idNum = e;
                for (var a = 0; a != c.DataManage.battleTeam.length && e != c.DataManage.battleTeam[a]; a++) {}
                var n = !1;
                for (a = 0; a != c.DataManage.specielCards.length; a++) {
                    if (c.DataManage.specielCards[a] == e) {
                        n = !0;
                        break;
                    }
                }
                this.node.getChildByName("img_jueban").active = !!n;
                var i = c.Utils.getCardTemplate(e), o = c.Utils.getCardInfo(e), r = i[1], l = parseInt("" + i[2]), s = parseInt("" + i[3]), h = parseInt("" + i[5]), d = parseInt("" + i[6]), u = o[1];
                d = Math.floor(d * (1 + .05 * u)), h = Math.floor(h * (1 + .05 * u)), this.node.getChildByName("frame").getChildByName("name").getComponent(cc.Label).string = "" + r;
                var g = [];
                g.push({
                    path: "cardBattle/cards/" + e,
                    type: cc.SpriteFrame
                });
                var p = this;
                cc.assetManager.loadAny(g, {
                    bundle: "resources"
                }, null, function(e, t) {
                    p.node.getChildByName("cardMask").getChildByName("card").getComponent(cc.Sprite).spriteFrame = t;
                });
                var m = s - 1, f = l - 1;
                this.node.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = this.cardBorder[m], 
                this.node.getChildByName("frame").getChildByName("cardType").getComponent(cc.Sprite).spriteFrame = this.cardTypeRail[f], 
                this.node.getChildByName("frame").getChildByName("cardType").getChildByName("type").getComponent(cc.Sprite).spriteFrame = this.cardTypeFrame[f], 
                this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.cardBg[f], 
                u > 10 && (u = 10), this.node.getChildByName("cardNum").getComponent("numberScript").setNumber(u, 0, 0), 
                this.node.getChildByName("frame").getChildByName("quality").getComponent(cc.Sprite).spriteFrame = this.levelFrame[m];
                var y = 6;
                2 == s ? y = 7 : 3 == s ? y = 8 : 4 == s && (y = 10), this.node.getChildByName("frame").getChildByName("starNode").getComponent("starScript").setStar(y), 
                this.node.getChildByName("frame").getChildByName("attack").getComponent("numberScript").setNumber(h, 1, 0), 
                this.node.getChildByName("frame").getChildByName("hp").getComponent("numberScript").setNumber(d, 1, 1);
            }, t.prototype.setShowNum = function(e) {
                this.node.getChildByName("cardNum").getComponent("numberScript").setNumber(e, 0, 0);
            }, t.prototype.refreshNum = function() {
                var e = c.Utils.getCardInfo(this.idNum)[1];
                this.node.getChildByName("cardNum").getComponent("numberScript").setNumber(e, 0, 0);
            }, t.prototype.getCardId = function() {
                return this.idNum;
            }, o([ s([ cc.SpriteFrame ]) ], t.prototype, "levelFrame", void 0), o([ s([ cc.SpriteFrame ]) ], t.prototype, "cardTypeFrame", void 0), 
            o([ s([ cc.SpriteFrame ]) ], t.prototype, "cardTypeRail", void 0), o([ s([ cc.SpriteFrame ]) ], t.prototype, "cardBg", void 0), 
            o([ s([ cc.SpriteFrame ]) ], t.prototype, "cardBorder", void 0), o([ l ], t);
        }(cc.Component);
        a.default = h, cc._RF.pop();
    }, {
        "../DataManage": "DataManage"
    } ],
    changeCardScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "fce068SpQ9DTK6H5+gdbc3n", "changeCardScript");
        var _n19, i = this && this.__extends || (_n19 = function n(e, t) {
            return (_n19 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n19(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = cc._decorator, l = r.ccclass, s = r.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.scrollNodePrefab = null, t.parentNode = null, t.scrollNodeGroup = [], t.chooseTeamIdx = -1, 
                t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("huankaBg").getChildByName("closeButton").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                this.node.getChildByName("maskNode").setContentSize(cc.winSize);
            }, t.prototype.closeNode = function() {
                this.node.active = !1;
            }, t.prototype.refreshChangeCardScroll = function(e) {
                this.chooseTeamIdx = e;
                var t = c.Utils.getCardPower(c.DataManage.battleTeam[this.chooseTeamIdx]);
                if (this.scrollNodeGroup.length > 0) {
                    for (var a = 0; a != this.scrollNodeGroup.length; a++) {
                        this.scrollNodeGroup[a].runAction(cc.removeSelf());
                    }
                    this.scrollNodeGroup = [];
                }
                var n = this.sortCard(), i = 0, o = 0, r = 0, l = {}, s = 0;
                for (a = 0; a != n.length; a++) {
                    var h = cc.instantiate(this.scrollNodePrefab);
                    o = i % 2, r = Math.floor(i / 2), h.setPosition(cc.v2(300 * o - 150, -210 - 470 * r)), 
                    this.node.getChildByName("huankaBg").getChildByName("cardScroll").getChildByName("view").getChildByName("content").addChild(h), 
                    l = {
                        cardId: n[a]
                    }, h.attr(l), h.getComponent("cardScript").initCard(n[a]), h.on(cc.Node.EventType.TOUCH_END, this.setTeam, this), 
                    i++, this.scrollNodeGroup.push(h), s = c.Utils.getCardPower(n[a]), h.getChildByName("powerChange").getComponent("powerChangeScript").showPowerChange(s - t);
                }
                var d = Math.max(940, 470 * (r + 1));
                this.node.getChildByName("huankaBg").getChildByName("cardScroll").getChildByName("view").getChildByName("content").setContentSize(cc.size(580, d));
            }, t.prototype.setTeam = function(e) {
                var t = e.target.cardId;
                c.DataManage.battleTeam[this.chooseTeamIdx] = t, c.Utils.setTeamData(), null != this.parentNode ? this.parentNode.getComponent("bagScript").refreshMyCards() : this.node.parent.getComponent("setTeamNode").refreshMyCards(), 
                this.node.active = !1;
            }, t.prototype.sortCard = function() {
                for (var e = c.DataManage.battleTeam, t = e[0], a = e[1], n = e[2], i = [], o = [], r = [], l = [], s = c.DataManage.cardData, h = null, d = 0; d != s.length; d++) {
                    0 != s[d][1] && s[d][0] != t && s[d][0] != a && s[d][0] != n && (1 == (h = c.Utils.getCardTemplate(s[d][0]))[3] ? l.push(s[d]) : 2 == h[3] ? r.push(s[d]) : 3 == h[3] ? o.push(s[d]) : 4 == h[3] && i.push(s[d]));
                }
                l.sort(function(e, t) {
                    return t[1] - e[1];
                }), r.sort(function(e, t) {
                    return t[1] - e[1];
                }), o.sort(function(e, t) {
                    return t[1] - e[1];
                }), i.sort(function(e, t) {
                    return t[1] - e[1];
                });
                var u = [];
                for (d = 0; d != i.length; d++) {
                    u.push(i[d][0]);
                }
                for (d = 0; d != o.length; d++) {
                    u.push(o[d][0]);
                }
                for (d = 0; d != r.length; d++) {
                    u.push(r[d][0]);
                }
                for (d = 0; d != l.length; d++) {
                    u.push(l[d][0]);
                }
                return u;
            }, o([ s(cc.Prefab) ], t.prototype, "scrollNodePrefab", void 0), o([ s(cc.Node) ], t.prototype, "parentNode", void 0), 
            o([ l ], t);
        }(cc.Component);
        a.default = h, cc._RF.pop();
    }, {
        "../DataManage": "DataManage"
    } ],
    choukaScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "4d17eTvoV5Lm6apIzR2tez5", "choukaScript");
        var _n20, i = this && this.__extends || (_n20 = function n(e, t) {
            return (_n20 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n20(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./DataManage"), r = e("./libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getCardPrefab = null, t.goldLabel = null, t.kabaoFrame = [ null ], t.actionResult = null, 
                t.drawType = 0, t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("tittle").getChildByName("closeButton").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                this.node.getChildByName("getCard1").on(cc.Node.EventType.TOUCH_END, this.drawCard1, this), 
                this.node.getChildByName("getCard2").on(cc.Node.EventType.TOUCH_END, this.drawCard2, this), 
                this.node.getChildByName("getCard3").on(cc.Node.EventType.TOUCH_END, this.drawCard3, this), 
                this.node.getChildByName("getCard4").on(cc.Node.EventType.TOUCH_END, this.drawCard4, this), 
                this.node.getChildByName("resultNode").getChildByName("kabao").on(cc.Node.EventType.TOUCH_START, this.openBox, this), 
                r.wechat.hideBannerAd();
            }, t.prototype.openBox = function() {
                if (this.node.parent.parent.getComponent("menuScene").playEffect("vs"), null != this.actionResult) {
                    this.node.getChildByName("resultNode").active = !1;
                    var e = cc.instantiate(this.getCardPrefab);
                    e.getComponent("getCardScript").initGetCardNode(this.actionResult, this.drawType), 
                    this.node.parent.addChild(e);
                }
            }, t.prototype.drawCard1 = function() {
                this.drawType = 1, this.drawCard();
            }, t.prototype.drawCard2 = function() {
                this.drawType = 2, this.drawCard();
            }, t.prototype.drawCard3 = function() {
                this.drawType = 3, this.drawCard();
            }, t.prototype.drawCard4 = function() {
                this.node.parent.parent.getComponent("menuScene").playEffect("click"), c.Utils.showNotice("通过活动获得");
            }, t.prototype.drawCard = function() {
                this.node.parent.parent.getComponent("menuScene").playEffect("click");
                var e = 0;
                if (1 == this.drawType ? e = 200 : 2 == this.drawType ? e = 680 : 3 == this.drawType && (e = 2450), 
                c.DataManage.gold < e) this.node.parent.parent.getChildByName("meirizuanshi").active = !0, 
                this.node.parent.parent.getChildByName("meirizuanshi").getComponent("meirizuanshi").openAction(), 
                c.Utils.showNotice("钻石不足"); else {
                    1 == c.DataManage.guideStep && (this.node.parent.parent.getChildByName("guideNode").getChildByName("guide2").active = !1, 
                    c.DataManage.guideStep = 2, c.Utils.saveGuideStep()), c.DataManage.missionData[1][2]++, 
                    c.Utils.saveMissionData();
                    for (var t = this.getDrawResult(this.drawType), a = null, n = 0; n != t.length; n++) {
                        a = c.Utils.getCardInfo(t[n][0]);
                        for (var i = 0; i != c.DataManage.cardData.length; i++) {
                            if (c.DataManage.cardData[i][0] == a[0] && (c.DataManage.cardData[i][1]++, c.DataManage.cardData[i][1] > 10)) {
                                var o = 0, r = c.Utils.getCardTemplate(a[0]);
                                4 == r[3] ? o = 50 : 3 == r[3] ? o = 20 : 2 == r[3] ? o = 10 : 1 == r[3] && (o = 5), 
                                c.DataManage.gold += o;
                            }
                        }
                    }
                    c.Utils.saveCardData(), c.DataManage.gold -= e, c.Utils.setLocalData(), this.goldLabel.getComponent(cc.Label).string = "" + c.DataManage.gold, 
                    this.actionResult = t, this.node.getChildByName("resultNode").active = !0, this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[this.drawType - 1], 
                    this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                    this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                    this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78)))));
                }
            }, t.prototype.getDrawResult = function(e) {
                var t = 0, a = 0, n = 0, i = 0;
                1 == e ? (i = 5, n = 3) : 2 == e ? (a = 2, n = 3, i = 3) : 3 == e ? (t = 1, a = 3, 
                n = 4) : 4 == e && (t = 1, a = 2, n = 2, i = 3);
                for (var o = [], r = [], l = [], s = [], h = [], d = c.DataManage.cardTemplate, u = null, g = c.DataManage.specielCards, p = !1, m = 0; m != d.length; m++) {
                    for (var f = 0; f != g.length; f++) {
                        if (d[m][0] == g[f]) {
                            p = !0;
                            break;
                        }
                    }
                    p || (1 == (u = d[m])[3] ? h.push(d[m]) : 2 == u[3] ? s.push(d[m]) : 3 == u[3] ? l.push(d[m]) : 4 == u[3] && r.push(d[m]));
                }
                var y = -1;
                for (m = 0; m != t; m++) {
                    y = c.Utils.randomNum(0, r.length - 1), o.push(r[y]);
                }
                for (m = 0; m != a; m++) {
                    y = c.Utils.randomNum(0, l.length - 1), o.push(l[y]);
                }
                for (m = 0; m != n; m++) {
                    y = c.Utils.randomNum(0, s.length - 1), o.push(s[y]);
                }
                for (m = 0; m != i; m++) {
                    y = c.Utils.randomNum(0, h.length - 1), o.push(h[y]);
                }
                if (1 == e && 0 == c.DataManage.stage && (o[1] = [ 1021, "猎狗", 1, 1, "AF", 76e3, 79e3, 2015 ], 
                o[4] = [ 1022, "棕熊", 1, 1, "RU", 73e3, 98e3, 2017 ], o[6] = [ 1023, "猎豹", 1, 1, "KE", 74e3, 8e4, 2023 ]), 
                4 == e) {
                    var C = c.Utils.randomNum(0, 99);
                    if (C < 20) {
                        for (m = 0; m != o.length; m++) {
                            if (4 == o[m][3]) {
                                o[m] = [ 1043, "猛犸象", 1, 4, "RU", 136e3, 127e3 ], c.Utils.checkSpecNew(1043);
                                break;
                            }
                        }
                    } else if (C < 45) {
                        for (m = 0; m != o.length; m++) {
                            if (3 == o[m][3]) {
                                o[m] = [ 1045, "赤焰黑虎", 1, 3, "MZ", 11e4, 111e3 ], c.Utils.checkSpecNew(1045);
                                break;
                            }
                        }
                    } else if (C < 70) {
                        for (m = 0; m != o.length; m++) {
                            if (2 == o[m][3]) {
                                o[m] = [ 1048, "黑狮", 1, 2, "ES", 99e3, 92e3 ], c.Utils.checkSpecNew(1048);
                                break;
                            }
                        }
                    } else for (m = 0; m != o.length; m++) {
                        if (1 == o[m][3]) {
                            o[m] = [ 1026, "大熊猫", 1, 1, "CN", 88e3, 85e3 ], c.Utils.checkSpecNew(1026);
                            break;
                        }
                    }
                }
                return o.sort(function() {
                    return Math.random() - .5;
                }), o;
            }, t.prototype.closeNode = function() {
                2 == c.DataManage.guideStep && (this.node.parent.parent.getChildByName("guideNode").getChildByName("guide3").active = !1, 
                this.node.parent.parent.getChildByName("guideNode").getChildByName("guide4").active = !0, 
                this.node.parent.parent.getChildByName("guideNode").getChildByName("guide4").getChildByName("img_sz").getComponent(cc.Animation).play("handAnimation")), 
                this.node.parent.parent.getComponent("menuScene").playEffect("click"), this.node.active = !1;
            }, o([ h(cc.Prefab) ], t.prototype, "getCardPrefab", void 0), o([ h(cc.Node) ], t.prototype, "goldLabel", void 0), 
            o([ h([ cc.SpriteFrame ]) ], t.prototype, "kabaoFrame", void 0), o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "./DataManage": "DataManage",
        "./libppgame/libwechat": "libwechat"
    } ],
    clickNode: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "2f9f80v3IdLlb9tcdMqWvBo", "clickNode");
        var _n21, i = this && this.__extends || (_n21 = function n(e, t) {
            return (_n21 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n21(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null, t.text = "hello", t.battlePercent = 0, t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("img_dianji").on(cc.Node.EventType.TOUCH_END, this.buttonClick, this);
            }, t.prototype.buttonClick = function() {
                this.battlePercent += 13;
            }, t.prototype.initClickNode = function() {}, t.prototype.update = function() {}, 
            o([ l(cc.Label) ], t.prototype, "label", void 0), o([ l ], t.prototype, "text", void 0), 
            o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    gameIcon: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "814945B2KJGXLsgHE/ysPGl", "gameIcon");
        var _n22, i = this && this.__extends || (_n22 = function n(e, t) {
            return (_n22 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n22(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        }, c = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(i, o) {
                function c(e) {
                    try {
                        l(n.next(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function r(e) {
                    try {
                        l(n.throw(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                        e(t);
                    })).then(c, r);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }, r = this && this.__generator || function(e, t) {
            var a, n, i, o, c = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return o = {
                next: r(0),
                throw: r(1),
                return: r(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
            }), o;
            function r(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (;c; ) {
                    try {
                        if (a = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 
                        0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
                          case 0:
                          case 1:
                            i = o;
                            break;

                          case 4:
                            return c.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            c.label++, n = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = c.ops.pop(), c.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                c = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                c.label = o[1];
                                break;
                            }
                            if (6 === o[0] && c.label < i[1]) {
                                c.label = i[1], i = o;
                                break;
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2], c.ops.push(o);
                                break;
                            }
                            i[2] && c.ops.pop(), c.trys.pop();
                            continue;
                        }
                        o = t.call(e, c);
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        o = [ 6, r ], n = 0;
                    } finally {
                        a = i = 0;
                    }
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = cc._decorator, s = l.ccclass, h = l.property, d = e("./libppgame/libwechat"), u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.sp = null, t.icon_type = "", t._refresh_time = 0, t._single_list = null, 
                t._single_index = 0, t._redirectId = 0, t._appid = "", t._gameName = "", t._icon = "", 
                t._path = "", t;
            }
            return i(t, e), Object.defineProperty(t.prototype, "redirectId", {
                get: function get() {
                    return this._redirectId;
                },
                set: function set(e) {
                    this._redirectId != e && (this._redirectId = e);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "appid", {
                get: function get() {
                    return this._appid;
                },
                set: function set(e) {
                    this._appid != e && (this._appid = e);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gameName", {
                get: function get() {
                    return this._gameName;
                },
                set: function set(e) {
                    this._gameName != e && (this._gameName = e);
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "icon", {
                get: function get() {
                    return this._icon;
                },
                set: function set(e) {
                    var t = this;
                    this._icon != e && (this._icon = e, cc.loader.load({
                        url: this._icon
                    }, function(e, a) {
                        a && t.sp && t.sp.node && t.sp.node.isValid && (t.sp.spriteFrame = new cc.SpriteFrame(a));
                    }));
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "path", {
                get: function get() {
                    return this._path;
                },
                set: function set(e) {
                    this._path != e && (this._path = e);
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.setData = function(e) {
                this.appid = e.appid, this.gameName = e.name, this.icon = e.icon, this.path = e.path, 
                this.redirectId = e.redirectId;
            }, t.prototype.getData = function() {
                return {
                    appid: this.appid,
                    gameName: this.gameName,
                    icon: this.icon,
                    path: this.path,
                    redirectId: this.redirectId
                };
            }, t.prototype.start = function() {
                var e = this, t = this.node.getComponent(cc.Button);
                t || (t = this.node.addComponent(cc.Button)), this.node.on("click", this.onClick, this), 
                "single" === this.icon_type ? (this.refreshIcon(), cc.tween(this.node).repeatForever(cc.tween().to(.1, {
                    angle: 12
                }).to(.1, {
                    angle: -12
                }).to(.1, {
                    angle: 12
                }).to(.1, {
                    angle: -12
                }).to(.05, {
                    angle: 0
                }).delay(2.5).call(function() {
                    e.refreshIcon();
                })).start()) : "banner" === this.icon_type && this.refreshIcon();
            }, t.prototype.onClick = function() {
                var e = this;
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    var t = this._appid, a = this._path;
                    wx.navigateToMiniProgram({
                        appId: t,
                        path: a,
                        envVersion: "release",
                        success: function success() {
                            wx.request({
                                url: "https://xyx.p8games.com/wxgame/navigate/log",
                                data: {
                                    ad: 1,
                                    game: d.wechat.game_id,
                                    appid: t,
                                    name: e._gameName
                                }
                            });
                        }
                    });
                }
                "single" !== this.icon_type && "banner" !== this.icon_type || this.refreshIcon();
            }, t.prototype.refreshIcon = function() {
                return c(this, void 0, void 0, function() {
                    var e;
                    return r(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return this._refresh_time = new Date().getTime(), "single" !== this.icon_type ? [ 3, 3 ] : this._single_list ? [ 3, 2 ] : [ 4, d.wechat.requestGameListNew(9) ];

                          case 1:
                            (e = t.sent())[0] && e.length > 0 && (this._single_list = e), t.label = 2;

                          case 2:
                            return this.setData(this._single_list[this._single_index]), this._single_index++, 
                            this._single_index >= this._single_list.length && (this._single_index = 0), [ 3, 5 ];

                          case 3:
                            return "banner" !== this.icon_type ? [ 3, 5 ] : [ 4, d.wechat.requestGameListNew(1) ];

                          case 4:
                            (e = t.sent()).data && e.data.length > 0 && this.setData(e.data[0]), t.label = 5;

                          case 5:
                            return [ 2 ];
                        }
                    });
                });
            }, t.prototype.update = function() {
                if ("single" === this.icon_type) ; else if ("banner" === this.icon_type) {
                    var e = new Date().getTime();
                    this._refresh_time < e - 6e4 && this.refreshIcon();
                }
            }, o([ h(cc.Sprite) ], t.prototype, "sp", void 0), o([ h ], t.prototype, "icon_type", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = u, cc._RF.pop();
    }, {
        "./libppgame/libwechat": "libwechat"
    } ],
    gameline: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "cdfdbpZ9CVMJoXN9cNUiHOT", "gameline");
        var _n23, i = this && this.__extends || (_n23 = function n(e, t) {
            return (_n23 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n23(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        }, c = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(i, o) {
                function c(e) {
                    try {
                        l(n.next(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function r(e) {
                    try {
                        l(n.throw(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                        e(t);
                    })).then(c, r);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }, r = this && this.__generator || function(e, t) {
            var a, n, i, o, c = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return o = {
                next: r(0),
                throw: r(1),
                return: r(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
            }), o;
            function r(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (;c; ) {
                    try {
                        if (a = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 
                        0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
                          case 0:
                          case 1:
                            i = o;
                            break;

                          case 4:
                            return c.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            c.label++, n = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = c.ops.pop(), c.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                c = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                c.label = o[1];
                                break;
                            }
                            if (6 === o[0] && c.label < i[1]) {
                                c.label = i[1], i = o;
                                break;
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2], c.ops.push(o);
                                break;
                            }
                            i[2] && c.ops.pop(), c.trys.pop();
                            continue;
                        }
                        o = t.call(e, c);
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        o = [ 6, r ], n = 0;
                    } finally {
                        a = i = 0;
                    }
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = cc._decorator, s = l.ccclass, h = l.property, d = e("./libppgame/libwechat"), u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.content = null, t.game_list = null, t;
            }
            return i(t, e), t.prototype.start = function() {
                return c(this, void 0, void 0, function() {
                    var e, t;
                    return r(this, function(a) {
                        switch (a.label) {
                          case 0:
                            return [ 4, d.wechat.requestGameListNew(6) ];

                          case 1:
                            return (e = a.sent()) && e[1] && (this.game_list = e, this.show(this.game_list)), 
                            this.node.parent && (t = this.node.parent.getContentSize().width) && 640 != t && (this.node.scale = t / 640), 
                            [ 2 ];
                        }
                    });
                });
            }, t.prototype.onEnable = function() {
                this.node.zIndex = 1e4, this.content.setContentSize(890, this.content.getContentSize().height);
                for (var e = 0; e < 6; e++) {
                    this.content.children[e].stopAllActions(), this.content.children[e].x = 150 * e - 375;
                }
                var t = function t(e) {
                    var t = a.content.children[e];
                    cc.tween(t).repeatForever(cc.tween().delay(1.5).by(.5, {
                        position: cc.v2(-150, 0)
                    }).delay(.5).call(function() {
                        t.x <= -675 && (t.x = 225);
                    })).start();
                }, a = this;
                for (e = 0; e < 6; e++) {
                    t(e);
                }
            }, t.prototype.show = function(e) {
                for (var t = 0; t < 6; t++) {
                    this.content.children[t] && e[t] && this.content.children[t].getComponent("gameIcon").setData(e[t]);
                }
            }, t.showLine = function() {
                var e = this;
                if (console.log("------------------showLine native", !!this.native_ad, this.native_ad_loaded), 
                this.native_ad && this.native_ad_loaded) return this.native_ad.show().catch(function(t) {
                    t && "the advertisement has shown" == t.errMsg || (e.native_ad = null, cc.Canvas.instance.node.emit("show-line"));
                }), !0;
            }, t.hideLine = function() {
                this.native_ad && this.native_ad_loaded && this.native_ad.hide();
            }, t.init = function(e, t) {
                var a = this;
                if ("undefined" == typeof wx || void 0 === wx.createCustomAd) return !1;
                if (!this.native_ad) {
                    var n = d.wechat.wxCoordProjection(t || new cc.Rect(0, 0, 0, 0)), i = wx.getSystemInfoSync().screenWidth;
                    this.native_ad = wx.createCustomAd({
                        adUnitId: "adunit-bd05308d7564344e",
                        style: {
                            top: n.top,
                            left: (i - 360) / 2
                        }
                    }), console.log("--------------------native line top", n.top), this.native_ad.onLoad(function() {
                        a.native_ad_loaded = !0, console.log("=======================native line ad onLoad");
                    });
                }
            }, t.load = function() {
                return new Promise(function(e, t) {
                    cc.loader.loadRes("gameline/gameline", cc.Prefab, function(a, n) {
                        a ? t(a) : e(cc.instantiate(n));
                    });
                });
            }, t.native_ad = null, t.native_ad_loaded = !1, o([ h(cc.Node) ], t.prototype, "content", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = u, cc._RF.pop();
    }, {
        "./libppgame/libwechat": "libwechat"
    } ],
    gamewall: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "8cfb1ZcTMNDZLAaM2UY0awg", "gamewall");
        var _n24, i = this && this.__extends || (_n24 = function n(e, t) {
            return (_n24 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n24(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        }, c = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(i, o) {
                function c(e) {
                    try {
                        l(n.next(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function r(e) {
                    try {
                        l(n.throw(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                        e(t);
                    })).then(c, r);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }, r = this && this.__generator || function(e, t) {
            var a, n, i, o, c = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return o = {
                next: r(0),
                throw: r(1),
                return: r(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
            }), o;
            function r(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (;c; ) {
                    try {
                        if (a = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 
                        0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
                          case 0:
                          case 1:
                            i = o;
                            break;

                          case 4:
                            return c.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            c.label++, n = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = c.ops.pop(), c.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                c = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                c.label = o[1];
                                break;
                            }
                            if (6 === o[0] && c.label < i[1]) {
                                c.label = i[1], i = o;
                                break;
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2], c.ops.push(o);
                                break;
                            }
                            i[2] && c.ops.pop(), c.trys.pop();
                            continue;
                        }
                        o = t.call(e, c);
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        o = [ 6, r ], n = 0;
                    } finally {
                        a = i = 0;
                    }
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = e("./libppgame/libwechat"), s = e("./libppgame/libcocos"), h = cc._decorator, d = h.ccclass, u = (h.property, 
        0), g = 30, p = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t._show_type = "normal", t._pop_navigate = null, console.log("constructor(gameWall)"), 
                !a._req_game_list_line && u > 0 && (a._req_game_list_line = l.wechat.requestGameList(u)), 
                a.game_list || (a._req_game_list = l.wechat.requestGameListNew(g)), t;
            }
            var a;
            return i(t, e), a = t, t.prototype.onLoad = function() {
                return c(this, void 0, void 0, function() {
                    var e, t, n, i, o, c, h, d, g, p, m, f, y, C, N = this;
                    return r(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return e = this.node.getChildByName("wall"), (t = this.node.getChildByName("button")) && (t.on("click", function() {
                                N.onBtnClose();
                            }), cc.tween(t).repeatForever(cc.tween().to(.3, {
                                scale: 1.1
                            }, {
                                easing: "sineOut"
                            }).to(.4, {
                                scale: 1
                            }, {
                                easing: "sineIn"
                            }).call(function() {})).start()), 0 == u && ((n = this.node.getChildByName("block")).addComponent(cc.Button), 
                            n.on("click", function() {
                                N.onBtnClose();
                            }), i = e.getChildByName("scrollView"), (o = new cc.Node()).addComponent(cc.Sprite).spriteFrame = n.getComponent(cc.Sprite).spriteFrame, 
                            i.children[0].zIndex = 2, i.addChild(o, 1), o.setContentSize(625, 925), o.color = n.color, 
                            n.getComponent(cc.Sprite).spriteFrame = null), !a.game_list_line && u > 0 ? (c = a, 
                            [ 4, a._req_game_list_line ]) : [ 3, 2 ];

                          case 1:
                            c.game_list_line = r.sent(), r.label = 2;

                          case 2:
                            return a.game_list ? [ 3, 4 ] : (h = a, [ 4, a._req_game_list ]);

                          case 3:
                            h.game_list = r.sent(), r.label = 4;

                          case 4:
                            if (e) {
                                if (a.game_list_line) for (d = e.getChildByName("scrollViewLine"), (g = d.getChildByName("view").getChildByName("content")).width = 140 * a.game_list_line.length - 20 + 4, 
                                p = function p(e) {
                                    cc.loader.loadRes("gamewall/gameicon1", function(t, n) {
                                        if (null == t && n) {
                                            var i = cc.instantiate(n);
                                            if (i) {
                                                g.addChild(i), i.y = 0, i.x = 62 + 140 * e, s.cocos.load({
                                                    url: a.game_list_line[e].icon,
                                                    type: "png"
                                                }).then(function(e) {
                                                    i.isValid && e && (i.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e));
                                                });
                                                var o = a.game_list_line[e].appid, c = a.game_list_line[e].path || "", r = a.game_list_line[e].name || "";
                                                i.addComponent(cc.Button), i.on("click", function() {
                                                    cc.sys.platform === cc.sys.WECHAT_GAME ? wx.navigateToMiniProgram({
                                                        appId: o,
                                                        path: c,
                                                        envVersion: "release",
                                                        success: function success() {
                                                            wx.request({
                                                                url: "https://xyx.p8games.com/wxgame/navigate/log",
                                                                data: {
                                                                    ad: 2,
                                                                    game: l.wechat.game_id,
                                                                    appid: o,
                                                                    name: r
                                                                }
                                                            });
                                                        }
                                                    }) : console.log("navigate to appid", o);
                                                });
                                            }
                                        } else cc.warn(t + " name load error!!!");
                                    });
                                }, C = 0; C < a.game_list_line.length; C++) {
                                    p(C);
                                } else e.getChildByName("scrollViewLine").active = !1, e.getChildByName("title1").active = !1, 
                                e.getChildByName("title2").active = !1, e.getChildByName("scrollView").getComponent(cc.Widget).enabled = !1, 
                                e.getChildByName("scrollView").y = 0, e.getChildByName("scrollView").scale = .8;
                                for (m = e.getChildByName("scrollView"), f = m.getChildByName("view").getChildByName("content"), 
                                a.game_list.length % 3 == 0 ? f.height = 250 * Math.floor(a.game_list.length / 3) - 20 + 200 : f.height = 250 * (Math.floor(a.game_list.length / 3) + 1) - 20 + 200, 
                                y = function y(e) {
                                    cc.loader.loadRes("gamewall/gameicon2", function(t, n) {
                                        if (null == t && n) {
                                            var i = cc.instantiate(n);
                                            if (i) {
                                                f.addChild(i), i.x = e % 3 * 200 - 200, i.y = -250 * Math.floor(e / 3) - 115;
                                                var o = Math.floor(100 * Math.random());
                                                o < 15 ? i.getChildByName("bg").getChildByName("red1").active = !0 : o < 30 && (i.getChildByName("bg").getChildByName("red2").active = !0), 
                                                s.cocos.load({
                                                    url: a.game_list[e].icon,
                                                    type: "png"
                                                }).then(function(e) {
                                                    i.isValid && e && (i.getChildByName("bg").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e));
                                                }), i.getChildByName("bg").getChildByName("name").getComponent(cc.Label).string = a.game_list[e].name;
                                                var c = a.game_list[e].appid, r = a.game_list[e].path || "";
                                                i.addComponent(cc.Button), i.on("click", function() {
                                                    cc.sys.platform === cc.sys.WECHAT_GAME ? wx.navigateToMiniProgram({
                                                        appId: c,
                                                        path: r,
                                                        envVersion: "release",
                                                        success: function success() {
                                                            wx.request({
                                                                url: "https://xyx.p8games.com/wxgame/navigate/log",
                                                                data: {
                                                                    ad: 2,
                                                                    game: l.wechat.game_id,
                                                                    appid: c,
                                                                    name: gameName
                                                                }
                                                            });
                                                        }
                                                    }) : console.log("navigate to appid", c);
                                                });
                                            }
                                        } else cc.warn(t + " name load error!!!");
                                    });
                                }, C = 0; C < a.game_list.length; C++) {
                                    y(C);
                                }
                            }
                            return [ 2 ];
                        }
                    });
                });
            }, t.init = function(e) {
                return c(this, void 0, void 0, function() {
                    return r(this, function() {
                        return "" != this._init_state ? [ 2 ] : e && 2 == e.length ? (this._init_state = "initing", 
                        this.native_grid_adIds = e, this.createNative(), this._init_state = "inited", [ 2 ]) : (console.error("广告id数组错误。['id1', 'id2']"), 
                        [ 2 ]);
                    });
                });
            }, t.load = function() {
                return new Promise(function(e, t) {
                    cc.loader.loadRes("gamewall/gamewall", cc.Prefab, function(a, n) {
                        a ? t(a) : e(cc.instantiate(n));
                    });
                });
            }, t.createNative = function() {
                if (!a.native_grid_ad && "undefined" != typeof wx) {
                    var e = wx.getSystemInfoSync(), t = e.screenWidth, n = e.screenHeight;
                    a.small_native = n / t < 1.875;
                    var i = wx.getSystemInfoSync(), o = (i.screenHeight - 1422 * i.screenWidth / 1080) / 2;
                    a.native_grid_ad = wx.createCustomAd({
                        adUnitId: "adunit-bd05308d7564344e",
                        style: {
                            top: o,
                            left: 0
                        }
                    }), a.native_grid_ad.onLoad(function() {
                        console.log("---------------native ad onload");
                    }), a.native_grid_ad.onError(function(e) {
                        console.log("---------------native ad onError", e);
                    });
                }
            }, t.prototype.showNative = function() {
                var e = this;
                if (this.node.getChildByName("button").y = 480, "undefined" != typeof wx && void 0 !== wx.createCustomAd) {
                    var t = parseInt(l.wechat.getConfig("ppgame_rate"));
                    if (Math.floor(100 * Math.random()) < t) this.show_wall(); else if (a.createNative(), 
                    a.native_grid_ad) {
                        if (console.log("---------------try to show native"), this.node.getChildByName("wall").active = !1, 
                        a.native_grid_ad.isShow()) return;
                        a.native_grid_ad.show().then(function() {
                            console.log("---------------succ to show native"), a.native_grid_ad.offHide(), a.native_grid_ad.onHide(function() {
                                if (e.node.active) {
                                    var t = e.node.getChildByName("wall");
                                    cc.tween(t).by(.2, {
                                        position: cc.v2(-320, 0)
                                    }).call(function() {
                                        e.node.active = !1, cc.Canvas.instance.node.emit("hide-wall", null);
                                    }).start();
                                }
                            });
                        }).catch(function(t) {
                            console.log("---------------fail to show grid native", t), t && "the advertisement has shown" != t.errMsg && e.show_wall();
                        });
                    } else this.show_wall();
                } else this.show_wall();
            }, t.prototype.hideNative = function() {
                a.native_grid_ad && a.native_grid_ad.hide();
            }, t.prototype.show = function(e) {
                return void 0 === e && (e = "normal"), c(this, void 0, void 0, function() {
                    return r(this, function() {
                        return this._show_type = e, this.node.active = !0, this.node.zIndex = 10002, 640 != cc.winSize.width && (this.node.scale = cc.winSize.width / 640), 
                        this.showNative(), [ 2 ];
                    });
                });
            }, t.prototype.show_wall = function() {
                return c(this, void 0, void 0, function() {
                    var e, t;
                    return r(this, function() {
                        return (e = this.node.getChildByName("wall")).active = !0, cc.tween(e).to(.2, {
                            position: cc.v2(0, 0)
                        }).start(), e.getChildByName("scrollViewLine").getChildByName("view").getChildByName("content").x = -260, 
                        a.gameListLineChange = -1.5, e.getChildByName("scrollView").getChildByName("view").getChildByName("content").y = 400, 
                        a.gameListChange = 1.5, (t = this.node.getChildByName("button")).y = -280, cc.winSize.height / cc.winSize.width >= 2.03125 && (t.y = -400), 
                        [ 2 ];
                    });
                });
            }, t.prototype.onBtnClose = function() {
                var e = this, t = this.node.getChildByName("wall");
                cc.tween(t).by(.2, {
                    position: cc.v2(-320, 0)
                }).call(function() {
                    e.node.active = !1, cc.Canvas.instance.node.emit("hide-wall", e._show_type);
                }).start(), this.hideNative();
            }, t.prototype.start = function() {}, t.prototype.update = function() {
                if (this.node && this.node.active) {
                    var e = this.node.getChildByName("wall");
                    if (e) {
                        if (u > 0) {
                            var t = e.getChildByName("scrollViewLine").getChildByName("view").getChildByName("content");
                            t.x += a.gameListLineChange, t.x < 260 - t.width && a.gameListLineChange < 0 && (a.gameListLineChange = -a.gameListLineChange), 
                            t.x > -260 && a.gameListLineChange > 0 && (a.gameListLineChange = -a.gameListLineChange);
                        }
                        var n = e.getChildByName("scrollView").getChildByName("view").getChildByName("content");
                        n.y += a.gameListChange, n.y < 400 && a.gameListChange < 0 && (a.gameListChange = -a.gameListChange), 
                        n.y > n.height - 400 && a.gameListChange > 0 && (a.gameListChange = -a.gameListChange);
                    }
                }
            }, t.game_list_line = null, t.game_list = null, t.gameListLineChange = 0, t.gameListChange = 0, 
            t._req_game_list_line = null, t._req_game_list = null, t._init_state = "", t.native_grid_adIds = null, 
            t.native_grid_ad = null, t.small_native = !0, a = o([ d ], t);
        }(cc.Component);
        a.default = p, cc._RF.pop();
    }, {
        "./libppgame/libcocos": "libcocos",
        "./libppgame/libwechat": "libwechat"
    } ],
    getCardScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "8ed77VOUilNarP7rshS25dw", "getCardScript");
        var _n25, i = this && this.__extends || (_n25 = function n(e, t) {
            return (_n25 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n25(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = e("../libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null, t.text = "hello", t.showIndex = 0, t.flipStep = 0, t.resultData = null, 
                t.drawType = -1, t.shackValue = 30, t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("resultNode").getChildByName("button_share").on(cc.Node.EventType.TOUCH_END, this.shareEvent, this), 
                this.node.getChildByName("resultNode").getChildByName("button_zailai").on(cc.Node.EventType.TOUCH_END, this.drawCard, this);
            }, t.prototype.initGetCardNode = function(e, t) {
                void 0 === t && (t = -1), this.node.getChildByName("bgButton").off(cc.Node.EventType.TOUCH_END, this.flipCard, this), 
                this.node.getChildByName("cardNode1").opacity = 8, this.node.getChildByName("cardNode2").opacity = 7, 
                this.node.getChildByName("cardNode3").opacity = 6, this.node.getChildByName("cardNode4").opacity = 5, 
                this.node.getChildByName("cardNode5").opacity = 4, this.node.getChildByName("cardNode6").opacity = 3, 
                this.node.getChildByName("cardNode7").opacity = 2, this.node.getChildByName("cardNode8").opacity = 1, 
                this.node.getChildByName("resultNode").active = !1, this.node.getChildByName("cardNode1").opacity = 0, 
                this.node.getChildByName("cardNode2").opacity = 0, this.node.getChildByName("cardNode3").opacity = 0, 
                this.node.getChildByName("cardNode4").opacity = 0, this.node.getChildByName("cardNode5").opacity = 0, 
                this.node.getChildByName("cardNode6").opacity = 0, this.node.getChildByName("cardNode7").opacity = 0, 
                this.node.getChildByName("cardNode8").opacity = 0, this.node.getChildByName("cardNode1").getChildByName("cardBack").active = !0, 
                this.node.getChildByName("cardNode2").getChildByName("cardBack").active = !0, this.node.getChildByName("cardNode3").getChildByName("cardBack").active = !0, 
                this.node.getChildByName("cardNode4").getChildByName("cardBack").active = !0, this.node.getChildByName("cardNode5").getChildByName("cardBack").active = !0, 
                this.node.getChildByName("cardNode6").getChildByName("cardBack").active = !0, this.node.getChildByName("cardNode7").getChildByName("cardBack").active = !0, 
                this.node.getChildByName("cardNode8").getChildByName("cardBack").active = !0, this.node.getChildByName("cardNode1").scale = 1.5, 
                this.node.getChildByName("cardNode2").scale = 1.5, this.node.getChildByName("cardNode3").scale = 1.5, 
                this.node.getChildByName("cardNode4").scale = 1.5, this.node.getChildByName("cardNode5").scale = 1.5, 
                this.node.getChildByName("cardNode6").scale = 1.5, this.node.getChildByName("cardNode7").scale = 1.5, 
                this.node.getChildByName("cardNode8").scale = 1.5, this.node.getChildByName("cardNode1").setPosition(cc.v2(7.287, 31.584)), 
                this.node.getChildByName("cardNode1").angle = -3, this.node.getChildByName("cardNode2").setPosition(cc.v2(36.064, 63.619)), 
                this.node.getChildByName("cardNode2").angle = -5, this.node.getChildByName("cardNode3").setPosition(cc.v2(4.31, .112)), 
                this.node.getChildByName("cardNode3").angle = 13, this.node.getChildByName("cardNode4").setPosition(cc.v2(32.888, -12.588)), 
                this.node.getChildByName("cardNode4").angle = 5, this.node.getChildByName("cardNode5").setPosition(cc.v2(-15.988, -20.411)), 
                this.node.getChildByName("cardNode5").angle = -8, this.node.getChildByName("cardNode6").setPosition(cc.v2(29.713, 15.989)), 
                this.node.getChildByName("cardNode6").angle = 13, this.node.getChildByName("cardNode7").setPosition(cc.v2(-46.828, 63.95)), 
                this.node.getChildByName("cardNode7").angle = -5, this.node.getChildByName("cardNode8").setPosition(cc.v2(77.343, 28.691)), 
                this.node.getChildByName("cardNode8").angle = 9, this.drawType = t, this.showIndex = 0, 
                this.flipStep = 0, this.resultData = e, 1 == this.resultData.length && (this.node.getChildByName("img_arrow").active = !1);
                for (var a = "", n = 0, i = e.length - 1; -1 != i; i--) {
                    a = "cardNode" + (i + 1), this.node.getChildByName(a).getComponent("cardScript").initCard(this.resultData[i][0]), 
                    this.node.getChildByName(a).getComponent("cardScript").setShowNum(1), this.node.getChildByName(a).runAction(cc.sequence(cc.delayTime(.08 * n), cc.spawn(cc.fadeTo(.1, 255), cc.scaleTo(.1, .7)))), 
                    n++;
                }
                var o = this;
                this.node.runAction(cc.sequence(cc.delayTime(.2 + .1 * e.length), cc.callFunc(function() {
                    o.node.getChildByName("bgButton").on(cc.Node.EventType.TOUCH_END, o.flipCard, o), 
                    o.node.getChildByName("nextLabel").active = !0, c.Utils.buttonBeat(o.node.getChildByName("nextLabel"));
                })));
                var r = 0;
                1 == this.drawType ? r = 200 : 2 == this.drawType ? r = 680 : 3 == this.drawType && (r = 2450), 
                this.node.getChildByName("resultNode").getChildByName("button_zailai").getChildByName("goldLabel").getComponent(cc.Label).string = "x" + r;
            }, t.prototype.shareEvent = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play(), r.wechat.shareAppMessage();
            }, t.prototype.drawCard = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play();
                var e = 0;
                if (1 == this.drawType ? e = 200 : 2 == this.drawType ? e = 680 : 3 == this.drawType && (e = 2450), 
                c.DataManage.gold < e) this.node.parent.parent.getChildByName("meirizuanshi").active = !0, 
                this.node.parent.parent.getChildByName("meirizuanshi").getComponent("meirizuanshi").openAction(), 
                c.Utils.showNotice("钻石不足"); else {
                    for (var t = this.getDrawResult(this.drawType), a = null, n = 0; n != t.length; n++) {
                        a = c.Utils.getCardInfo(t[n][0]);
                        for (var i = 0; i != c.DataManage.cardData.length; i++) {
                            if (c.DataManage.cardData[i][0] == a[0] && (c.DataManage.cardData[i][1]++, c.DataManage.cardData[i][1] > 10)) {
                                var o = 0, r = c.Utils.getCardTemplate(a[0]);
                                4 == r[3] ? o = 50 : 3 == r[3] ? o = 20 : 2 == r[3] ? o = 10 : 1 == r[3] && (o = 5), 
                                c.DataManage.gold += o;
                            }
                        }
                    }
                    c.Utils.saveCardData(), this.initGetCardNode(t, this.drawType), c.DataManage.gold -= e, 
                    c.Utils.setLocalData(), this.node.parent.getChildByName("img_coinbox").getChildByName("diamondLabel").getComponent(cc.Label).string = "" + c.DataManage.gold;
                }
            }, t.prototype.flipCard = function() {
                if (this.showIndex > this.resultData.length) 5 != c.DataManage.guideStep && (this.node.parent.parent.getChildByName("guideNode").getChildByName("guide3").active = !0, 
                this.node.parent.parent.getChildByName("guideNode").getChildByName("guide3").getChildByName("img_sz").getComponent(cc.Animation).play("handAnimation")), 
                this.node.runAction(cc.removeSelf()); else {
                    this.node.getChildByName("bgButton").off(cc.Node.EventType.TOUCH_END, this.flipCard, this);
                    var e = "cardNode" + this.showIndex, t = this;
                    if (0 == this.flipStep) {
                        this.showIndex++, e = "cardNode" + this.showIndex;
                        var a = this.node.getChildByName(e).getComponent("cardScript").getCardId(), n = c.Utils.getCardTemplate(a);
                        1 == n[3] || 2 == n[3] ? this.node.getChildByName(e).runAction(cc.sequence(cc.spawn(cc.rotateTo(.1, 0), cc.moveTo(.1, cc.v2(0, 0))), cc.scaleTo(.1, 1), cc.scaleTo(.1, 0, 1), cc.callFunc(function() {
                            t.node.getChildByName(e).getChildByName("cardBack").active = !1, t.node.getChildByName("cardFlip").getComponent(cc.AudioSource).play();
                        }), cc.scaleTo(.2, 1, 1), cc.callFunc(function() {
                            t.flipStep = 1, t.node.getChildByName("bgButton").on(cc.Node.EventType.TOUCH_END, t.flipCard, t), 
                            t.node.getChildByName(e).getChildByName("cardMask").getChildByName("eff_saoguang").getComponent(cc.Animation).play("anim_sao", 0);
                        }))) : 3 == n[3] ? this.node.getChildByName(e).runAction(cc.sequence(cc.spawn(cc.rotateTo(.1, 0), cc.moveTo(.1, cc.v2(0, 0))), cc.scaleTo(.1, 1), cc.callFunc(function() {
                            t.node.getChildByName("choukaSSR").active = !0, t.node.getChildByName("choukaSSR").getChildByName("card").getChildByName("cardNode").getComponent("cardScript").initCard(a), 
                            t.node.getChildByName("choukaSSR").getChildByName("card").getChildByName("cardNode").getComponent("cardScript").setShowNum(1), 
                            t.node.getChildByName("choukaSSR").getChildByName("card01").getChildByName("cardNode").getComponent("cardScript").initCard(a), 
                            t.node.getChildByName("choukaSSR").getChildByName("card01").getChildByName("cardNode").getComponent("cardScript").setShowNum(1), 
                            t.node.getChildByName("choukaSSR").getComponent(cc.Animation).play("effc_chouka"), 
                            t.node.getChildByName("superCard").getComponent(cc.AudioSource).play();
                        }), cc.scaleTo(.1, 0), cc.delayTime(4), cc.scaleTo(.1, 1), cc.callFunc(function() {
                            t.node.getChildByName(e).getChildByName("cardBack").active = !1, t.flipStep = 1, 
                            t.node.getChildByName("bgButton").on(cc.Node.EventType.TOUCH_END, t.flipCard, t), 
                            t.node.getChildByName(e).getChildByName("cardMask").getChildByName("eff_saoguang").getComponent(cc.Animation).play("anim_sao", 0);
                        }))) : 4 == n[3] && this.node.getChildByName(e).runAction(cc.sequence(cc.spawn(cc.rotateTo(.1, 0), cc.moveTo(.1, cc.v2(0, 0))), cc.scaleTo(.1, 1), cc.callFunc(function() {
                            t.node.getChildByName("choukaUR").active = !0, t.node.getChildByName("choukaUR").getChildByName("card").getChildByName("cardNode").getComponent("cardScript").initCard(a), 
                            t.node.getChildByName("choukaUR").getChildByName("card").getChildByName("cardNode").getComponent("cardScript").setShowNum(1), 
                            t.node.getChildByName("choukaUR").getChildByName("card01").getChildByName("cardNode").getComponent("cardScript").initCard(a), 
                            t.node.getChildByName("choukaUR").getChildByName("card01").getChildByName("cardNode").getComponent("cardScript").setShowNum(1), 
                            t.node.getChildByName("choukaUR").getComponent(cc.Animation).play("effc_choukaUR"), 
                            t.node.getChildByName("superCard").getComponent(cc.AudioSource).play();
                        }), cc.scaleTo(.1, 0), cc.delayTime(4), cc.scaleTo(.1, 1), cc.callFunc(function() {
                            t.node.getChildByName(e).getChildByName("cardBack").active = !1, t.flipStep = 1, 
                            t.node.getChildByName("bgButton").on(cc.Node.EventType.TOUCH_END, t.flipCard, t), 
                            t.node.getChildByName(e).getChildByName("cardMask").getChildByName("eff_saoguang").getComponent(cc.Animation).play("anim_sao", 0);
                        })));
                    } else if (this.node.getChildByName("choukaSSR").active && (this.node.getChildByName("choukaSSR").active = !1), 
                    this.node.getChildByName("choukaUR").active && (this.node.getChildByName("choukaUR").active = !1), 
                    -1 == this.drawType || 1 == this.resultData.length) this.node.getChildByName(e).runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, 0), cc.moveTo(.3, cc.v2(-233.5, -607.5))), cc.callFunc(function() {
                        t.node.runAction(cc.removeSelf());
                    }))); else if (this.node.getChildByName(e).runAction(cc.spawn(cc.scaleTo(.3, 0), cc.moveTo(.3, cc.v2(-233.5, -607.5)))), 
                    this.flipStep = 0, this.showIndex == this.resultData.length) {
                        t = this;
                        for (var i = 0, o = 0, r = 0; r != this.resultData.length; r++) {
                            e = "cardNode" + (r + 1), i = r % 4, o = Math.floor(r / 4), this.node.getChildByName(e).opacity = 0, 
                            this.node.getChildByName(e).scale = .3, this.node.getChildByName(e).runAction(cc.sequence(cc.delayTime(.1 + .2 * r), cc.moveTo(.02, cc.v2(152 * i - 228, 225 - 225 * o)), cc.fadeTo(.1, 255), cc.scaleTo(.1, .4), cc.scaleTo(.1, .3), cc.callFunc(function() {
                                t.node.getChildByName("cardFlip").getComponent(cc.AudioSource).play();
                            })));
                        }
                        this.node.runAction(cc.sequence(cc.delayTime(.2 * t.resultData.length + .1), cc.callFunc(function() {
                            t.node.getChildByName("resultNode").opacity = 0, t.node.getChildByName("resultNode").active = !0, 
                            t.node.getChildByName("resultNode").runAction(cc.fadeTo(.15, 255)), t.node.getChildByName("bgButton").on(cc.Node.EventType.TOUCH_END, t.flipCard, t), 
                            t.showIndex++, 0 == c.DataManage.stage ? (t.node.getChildByName("resultNode").getChildByName("button_share").active = !1, 
                            t.node.getChildByName("resultNode").getChildByName("button_zailai").active = !1) : 4 == t.drawType && (t.node.getChildByName("resultNode").getChildByName("button_zailai").active = !1);
                        })));
                    } else this.node.getChildByName("bgButton").on(cc.Node.EventType.TOUCH_END, this.flipCard, this);
                }
            }, t.prototype.getDrawResult = function(e) {
                var t = 0, a = 0, n = 0, i = 0;
                1 == e ? (i = 5, n = 3) : 2 == e ? (a = 2, n = 3, i = 3) : 3 == e ? (t = 1, a = 3, 
                n = 4) : 4 == e && (t = 1, a = 2, n = 2, i = 3);
                for (var o = [], r = [], l = [], s = [], h = [], d = c.DataManage.cardTemplate, u = null, g = c.DataManage.specielCards, p = !1, m = 0; m != d.length; m++) {
                    for (var f = 0; f != g.length; f++) {
                        if (d[m][0] == g[f]) {
                            p = !0;
                            break;
                        }
                    }
                    p || (1 == (u = d[m])[3] ? h.push(d[m]) : 2 == u[3] ? s.push(d[m]) : 3 == u[3] ? l.push(d[m]) : 4 == u[3] && r.push(d[m]));
                }
                var y = -1;
                for (m = 0; m != t; m++) {
                    y = c.Utils.randomNum(0, r.length - 1), o.push(r[y]);
                }
                for (m = 0; m != a; m++) {
                    y = c.Utils.randomNum(0, l.length - 1), o.push(l[y]);
                }
                for (m = 0; m != n; m++) {
                    y = c.Utils.randomNum(0, s.length - 1), o.push(s[y]);
                }
                for (m = 0; m != i; m++) {
                    y = c.Utils.randomNum(0, h.length - 1), o.push(h[y]);
                }
                if (4 == e) {
                    var C = c.Utils.randomNum(0, 99);
                    if (C < 20) {
                        for (m = 0; m != o.length; m++) {
                            if (4 == o[m][3]) {
                                o[m] = [ 1043, "猛犸象", 1, 4, "RU", 136e3, 127e3 ], c.Utils.checkSpecNew(1043);
                                break;
                            }
                        }
                    } else if (C < 45) {
                        for (m = 0; m != o.length; m++) {
                            if (3 == o[m][3]) {
                                o[m] = [ 1045, "赤焰黑虎", 1, 3, "MZ", 11e4, 111e3 ], c.Utils.checkSpecNew(1045);
                                break;
                            }
                        }
                    } else if (C < 70) {
                        for (m = 0; m != o.length; m++) {
                            if (2 == o[m][3]) {
                                o[m] = [ 1048, "黑狮", 1, 2, "ES", 99e3, 92e3 ], c.Utils.checkSpecNew(1048);
                                break;
                            }
                        }
                    } else for (m = 0; m != o.length; m++) {
                        if (1 == o[m][3]) {
                            o[m] = [ 1026, "大熊猫", 1, 1, "CN", 88e3, 85e3 ], c.Utils.checkSpecNew(1026);
                            break;
                        }
                    }
                }
                return o.sort(function() {
                    return Math.random() - .5;
                }), o;
            }, o([ h(cc.Label) ], t.prototype, "label", void 0), o([ h ], t.prototype, "text", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "../DataManage": "DataManage",
        "../libppgame/libwechat": "libwechat"
    } ],
    kezhiScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "460e5hzyYlC1rJ4x5Cc8gEL", "kezhiScript");
        var _n26, i = this && this.__extends || (_n26 = function n(e, t) {
            return (_n26 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n26(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.propFrames = [ null ], t.arrowFrames = [ null ], t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.initKeZhi = function(e, t, a, n) {
                1 == e ? 1 == t ? this.checkCrit(a, n) && (this.node.getChildByName("img_icondm").getComponent(cc.Sprite).spriteFrame = this.propFrames[a - 1], 
                this.node.getChildByName("img_icontk").getComponent(cc.Sprite).spriteFrame = this.propFrames[n - 1], 
                this.node.getChildByName("img_iconkzg").getComponent(cc.Sprite).spriteFrame = this.arrowFrames[1], 
                this.node.getChildByName("bmFont").getComponent("bmFontScript").setShowString("15%", 0), 
                this.node.getChildByName("bmFont").setPosition(cc.v2(60, -68))) : 2 == t && this.checkCrit(n, a) && (this.node.getChildByName("img_icondm").getComponent(cc.Sprite).spriteFrame = this.propFrames[a - 1], 
                this.node.getChildByName("img_icontk").getComponent(cc.Sprite).spriteFrame = this.propFrames[n - 1], 
                this.node.getChildByName("img_iconkzg").getComponent(cc.Sprite).spriteFrame = this.arrowFrames[0], 
                this.node.getChildByName("bmFont").getComponent("bmFontScript").setShowString("15%", 0), 
                this.node.getChildByName("bmFont").setPosition(cc.v2(60, 90))) : 2 == e && (1 == t ? a > n && (this.node.getChildByName("img_icondm").getComponent(cc.Sprite).spriteFrame = this.propFrames[a + 2], 
                this.node.getChildByName("img_icontk").getComponent(cc.Sprite).spriteFrame = this.propFrames[n + 2], 
                this.node.getChildByName("img_iconkzg").getComponent(cc.Sprite).spriteFrame = this.arrowFrames[3], 
                this.node.getChildByName("bmFont").getComponent("bmFontScript").setShowString("15%", 0), 
                this.node.getChildByName("bmFont").setPosition(cc.v2(60, -68))) : 2 == t && n > a && (this.node.getChildByName("img_icondm").getComponent(cc.Sprite).spriteFrame = this.propFrames[a + 2], 
                this.node.getChildByName("img_icontk").getComponent(cc.Sprite).spriteFrame = this.propFrames[n + 2], 
                this.node.getChildByName("img_iconkzg").getComponent(cc.Sprite).spriteFrame = this.arrowFrames[2], 
                this.node.getChildByName("bmFont").getComponent("bmFontScript").setShowString("15%", 0), 
                this.node.getChildByName("bmFont").setPosition(cc.v2(60, 90)))), this.node.active = !0, 
                this.node.getComponent(cc.Animation).play("relationShip", 0);
                var i = this;
                this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                    i.node.active = !1;
                })));
            }, t.prototype.checkCrit = function(e, t) {
                return 3 == e && 1 == t || 1 == e && 2 == t || 2 == e && 3 == t;
            }, o([ l([ cc.SpriteFrame ]) ], t.prototype, "propFrames", void 0), o([ l([ cc.SpriteFrame ]) ], t.prototype, "arrowFrames", void 0), 
            o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    libIos: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "de6c6kgeVZL9IiwmBv1roBD", "libIos"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.i_o_s = void 0;
        var n = {};
        window.onIapSucc = function(e) {
            var t = n[e];
            t && t.callback && (t.callback(), t.callback = null);
        }, a.i_o_s = new (function() {
            function e() {
                this.showNow = !1, this._device = "", this._videoStatu = !1;
            }
            return e.prototype.getDeviceId = function() {
                return this._device;
            }, e.prototype.videoReady = function() {
                return this._videoStatu;
            }, e.prototype.initDeviceId = function() {
                if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
                    console.log("####### get deviceId");
                    var e = jsb.reflection.callStaticMethod("SDKUtil", "getIOSUserDeviceID");
                    cc.log("######## deviceId is " + e), this._device = e;
                }
            }, e.prototype.lg_event = function(e, t) {
                cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("SDKUtil", "lg_event:params:", e, "" + t);
            }, e.prototype.loadVideo = function() {
                var e = this;
                cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && (console.log("####### loadVideo"), 
                jsb.reflection.callStaticMethod("SDKUtil", "loadRewardVideoAd"), window.videoLoadSuccess = function() {
                    console.log("####### videoLoadSuccess"), e._videoStatu = !0;
                }, window.videoLoadFail = function() {
                    console.log("####### videoLoadFail"), e._videoStatu = !1;
                });
            }, e.prototype.showRewardVideoAd = function(e) {
                var t = this;
                if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
                    if (this._videoStatu) {
                        console.log("###### call getRewardVideoAdStatus");
                        var a = jsb.reflection.callStaticMethod("SDKUtil", "getRewardVideoAdStatus");
                        console.log("###### getRewardVideoAdStatus", a), a ? (console.log("####### showRewardAd"), 
                        jsb.reflection.callStaticMethod("SDKUtil", "showRewardVideoAd")) : (console.log("####### load video again"), 
                        jsb.reflection.callStaticMethod("SDKUtil", "loadRewardVideoAd"));
                    } else console.log("####### load video again"), jsb.reflection.callStaticMethod("SDKUtil", "loadRewardVideoAd"), 
                    this.showNow = !0;
                    window.videoLoadSuccess = function() {
                        console.log("####### videoLoadSuccess"), t._videoStatu = !0, t.showNow && (console.log("####### showRewardAd"), 
                        jsb.reflection.callStaticMethod("SDKUtil", "showRewardVideoAd"), t.showNow = !1);
                    }, window.videoLoadFail = function() {
                        console.log("####### videoLoadFail"), t._videoStatu = !1;
                    }, window.videoFinished = function() {
                        console.log("####### videoFinished"), t._videoStatu = !1, e({
                            isEnd: !0
                        }), jsb.reflection.callStaticMethod("SDKUtil", "loadRewardVideoAd");
                    };
                }
            }, e.prototype.gotoAppStore = function() {
                cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("SDKUtil", "gotoAppStore");
            }, e;
        }())(), cc._RF.pop();
    }, {} ],
    libcocos: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "92c7fdngN1CR4zugyLMw7UA", "libcocos"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.cocos = void 0, a.cocos = new (function() {
            function e() {
                this.audio = new (function() {
                    function e() {
                        this._audioClips = new Map(), this._effectMap = new Object();
                    }
                    return e.prototype.playMusic = function(e, t) {
                        void 0 === t && (t = !0), this.loadAudioClip(e).then(function(e) {
                            return cc.audioEngine.playMusic(e, t);
                        });
                    }, e.prototype.playEffect = function(e, t) {
                        var a = this;
                        void 0 === t && (t = !1), this.loadAudioClip(e).then(function(n) {
                            var i = a._effectMap, o = i[e] || 0;
                            o <= 0 && (i[e] = o + 1, cc.audioEngine.playEffect(n, t), setTimeout(function() {
                                return i[e] -= 1;
                            }, 100));
                        });
                    }, e.prototype.setMusicVolume = function(e) {
                        var t = cc.audioEngine.getMusicVolume(), a = 0, n = setInterval(function() {
                            (a += .02) >= 1 ? (clearInterval(n), cc.audioEngine.setMusicVolume(e)) : cc.audioEngine.setMusicVolume(t + (e - t) * a);
                        }, 20);
                        return t;
                    }, e.prototype.loadAudioClip = function(e) {
                        var t = this, n = this._audioClips.get(e);
                        return n ? new Promise(function(e) {
                            return e(n);
                        }) : a.cocos.loadRes(e, cc.AudioClip).then(function(a) {
                            return t._audioClips.set(e, a), a;
                        });
                    }, e;
                }())();
            }
            return e.prototype.preloadScene = function(e, t) {
                return new Promise(function(a, n) {
                    cc.director.preloadScene(e, t, function(e, t) {
                        e ? n(e) : a(t);
                    });
                });
            }, e.prototype.load = function(e, t) {
                return new Promise(function(a, n) {
                    cc.loader.load(e, t, function(e, t) {
                        e ? n(e) : a(t);
                    });
                });
            }, e.prototype.loadRes = function(e, t, a) {
                return new Promise(function(n, i) {
                    cc.loader.loadRes(e, t, a, function(e, t) {
                        e ? i(e) : n(t);
                    });
                });
            }, e.prototype.loadResArray = function(e, t, a) {
                return new Promise(function(n, i) {
                    cc.loader.loadResArray(e, t, a, function(e, t) {
                        e ? i(e) : n(t);
                    });
                });
            }, e.prototype.loadResDir = function(e, t, a) {
                return new Promise(function(n, i) {
                    cc.loader.loadResDir(e, t, a, function(e, t) {
                        e ? i(e) : n(t);
                    });
                });
            }, e.prototype.traverse = function(e, t) {
                for (var a = new Array(e); a.length; ) {
                    var n = a.pop();
                    t(n), a.push.apply(a, n.children);
                }
            }, e.prototype.asyncwait = function(e) {
                for (var t = [], a = 1; a < arguments.length; a++) {
                    t[a - 1] = arguments[a];
                }
                return new Promise(function(a) {
                    return cc.Canvas.instance.scheduleOnce(function() {
                        return a.apply(void 0, t);
                    }, e / 1e3);
                });
            }, e.prototype.resizeCanvas = function(e) {
                var t = cc.view.getDesignResolutionSize(), a = cc.view.getFrameSize(), n = cc.Canvas.instance;
                a.height / a.width > t.height / t.width ? (n.fitHeight = !0, n.fitWidth = !1) : (n.fitHeight = !1, 
                n.fitWidth = !0), n.node.width / n.node.height < t.width / t.height ? e.setScale(n.node.width / t.width) : e.setScale(n.node.height / t.height);
            }, e;
        }())(), cc._RF.pop();
    }, {} ],
    libnetwork: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "c08a4MzZbNIMp8I1xE7Kq2y", "libnetwork");
        var _n27, i = this && this.__extends || (_n27 = function n(e, t) {
            return (_n27 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n27(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(i, o) {
                function c(e) {
                    try {
                        l(n.next(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function r(e) {
                    try {
                        l(n.throw(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                        e(t);
                    })).then(c, r);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }, c = this && this.__generator || function(e, t) {
            var a, n, i, o, c = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return o = {
                next: r(0),
                throw: r(1),
                return: r(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
            }), o;
            function r(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (;c; ) {
                    try {
                        if (a = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 
                        0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
                          case 0:
                          case 1:
                            i = o;
                            break;

                          case 4:
                            return c.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            c.label++, n = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = c.ops.pop(), c.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                c = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                c.label = o[1];
                                break;
                            }
                            if (6 === o[0] && c.label < i[1]) {
                                c.label = i[1], i = o;
                                break;
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2], c.ops.push(o);
                                break;
                            }
                            i[2] && c.ops.pop(), c.trys.pop();
                            continue;
                        }
                        o = t.call(e, c);
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        o = [ 6, r ], n = 0;
                    } finally {
                        a = i = 0;
                    }
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.network = a.Socket = a.NET_EVT_XHR_ERROR = a.NET_EVT_WS_MESSAGE = a.NET_EVT_WS_ERROR = a.NET_EVT_WS_CLOSED = a.NET_EVT_WS_CONNECTED = void 0, 
        a.NET_EVT_WS_CONNECTED = "on-ws-connected", a.NET_EVT_WS_CLOSED = "on-ws-closed", 
        a.NET_EVT_WS_ERROR = "on-ws-error", a.NET_EVT_WS_MESSAGE = "on-ws-message", a.NET_EVT_XHR_ERROR = "on-xhr-error";
        var r = function(e) {
            function t(t) {
                var a = e.call(this) || this;
                return a._buffer = new Array(), a._threads = new Array(), a.connected(t), a;
            }
            return i(t, e), Object.defineProperty(t.prototype, "closed", {
                get: function get() {
                    return null == this._websocket;
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.connected = function(e) {
                var t = this;
                this._websocket = e, this._buffer.length = 0, this._threads.forEach(function(e) {
                    return e.reject("ABORTED");
                }), "undefined" != typeof wx ? (e.onClose(function(e) {
                    t._websocket = null, t.emit(a.NET_EVT_WS_CLOSED, e);
                }), e.onError(function(e) {
                    t.emit(a.NET_EVT_WS_ERROR, e);
                }), e.onMessage(function(e) {
                    t.emit(a.NET_EVT_WS_MESSAGE, e.data);
                    var n = t._threads[0];
                    n ? (n.resolve(e.data), t._threads.splice(0, 1)) : t._buffer.push(e.data);
                })) : (e.onclose = function(e) {
                    t._websocket = null, t.emit(a.NET_EVT_WS_CLOSED, e);
                }, e.onerror = function(e) {
                    t.emit(a.NET_EVT_WS_ERROR, e);
                }, e.onmessage = function(e) {
                    if (e.data instanceof Blob) {
                        var n = new FileReader();
                        n.readAsArrayBuffer(e.data), n.onload = function() {
                            t.emit(a.NET_EVT_WS_MESSAGE, n.result);
                            var e = t._threads[0];
                            e ? (e.resolve(n.result), t._threads.splice(0, 1)) : t._buffer.push(n.result);
                        };
                    } else {
                        t.emit(a.NET_EVT_WS_MESSAGE, e.data);
                        var i = t._threads[0];
                        i ? (i.resolve(e.data), t._threads.splice(0, 1)) : t._buffer.push(e.data);
                    }
                });
            }, t.prototype.send = function(e) {
                var t = this;
                if (!this._websocket) throw "UNCONNECTED";
                "undefined" != typeof wx ? this._websocket.send({
                    data: e,
                    fail: function fail(e) {
                        t.emit(a.NET_EVT_WS_ERROR, e);
                    }
                }) : this._websocket.send(e);
            }, t.prototype.recv = function() {
                var e = this;
                return new Promise(function(t, a) {
                    var n = e._buffer.pop();
                    return null != n ? t(n) : e._websocket ? void e._threads.push({
                        resolve: t,
                        reject: a
                    }) : a("UNCONNECTED");
                });
            }, t.prototype.close = function(e, t) {
                var n = this;
                "undefined" != typeof wx ? this._websocket.close({
                    code: e,
                    reason: t,
                    fail: function fail(e) {
                        n.emit(a.NET_EVT_WS_ERROR, e);
                    }
                }) : this._websocket.close(e, t);
            }, t;
        }(cc.EventTarget);
        a.Socket = r, a.network = new (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.RETRY_TIMES = 5, t;
            }
            return i(t, e), t.prototype.request = function(e, t, a, n) {
                return void 0 === n && (n = this.RETRY_TIMES), o(this, void 0, Promise, function() {
                    var i, o, r;
                    return c(this, function(c) {
                        switch (c.label) {
                          case 0:
                            i = 0, c.label = 1;

                          case 1:
                            if (!(i < n)) return [ 3, 6 ];
                            c.label = 2;

                          case 2:
                            return c.trys.push([ 2, 4, , 5 ]), [ 4, this.ajax(e, t, a) ];

                          case 3:
                            return [ 2, c.sent() ];

                          case 4:
                            return o = c.sent(), r = o, [ 3, 5 ];

                          case 5:
                            return ++i, [ 3, 1 ];

                          case 6:
                            throw r;
                        }
                    });
                });
            }, t.prototype.connect = function(e, t) {
                return void 0 === t && (t = this.RETRY_TIMES), o(this, void 0, Promise, function() {
                    var a, n, i, o;
                    return c(this, function(c) {
                        switch (c.label) {
                          case 0:
                            a = 0, c.label = 1;

                          case 1:
                            if (!(a < t)) return [ 3, 6 ];
                            c.label = 2;

                          case 2:
                            return c.trys.push([ 2, 4, , 5 ]), n = r.bind, [ 4, this.websocket(e) ];

                          case 3:
                            return [ 2, new (n.apply(r, [ void 0, c.sent() ]))() ];

                          case 4:
                            return i = c.sent(), o = i, [ 3, 5 ];

                          case 5:
                            return ++a, [ 3, 1 ];

                          case 6:
                            throw o;
                        }
                    });
                });
            }, t.prototype.reconnect = function(e, t, a) {
                return void 0 === a && (a = this.RETRY_TIMES), o(this, void 0, Promise, function() {
                    var n, i, o, r, l;
                    return c(this, function(c) {
                        switch (c.label) {
                          case 0:
                            if (!t.closed) throw "BUSY_INVOKING";
                            n = 0, c.label = 1;

                          case 1:
                            if (!(n < a)) return [ 3, 6 ];
                            c.label = 2;

                          case 2:
                            return c.trys.push([ 2, 4, , 5 ]), o = (i = t).connected, [ 4, this.websocket(e) ];

                          case 3:
                            return [ 2, o.apply(i, [ c.sent() ]) ];

                          case 4:
                            return r = c.sent(), l = r, [ 3, 5 ];

                          case 5:
                            return ++n, [ 3, 1 ];

                          case 6:
                            throw l;
                        }
                    });
                });
            }, t.prototype.websocket = function(e, t) {
                var n = this;
                return new Promise(function(i, o) {
                    if ("undefined" == typeof wx) {
                        var c = new WebSocket(e, t);
                        return c.onerror = function(e) {
                            n.emit(a.NET_EVT_WS_ERROR, e), o("FAILED_CONNECTING");
                        }, void (c.onopen = function(e) {
                            c.onerror = null, n.emit(a.NET_EVT_WS_CONNECTED, e), i(c);
                        });
                    }
                    var r = wx.connectSocket({
                        url: e,
                        protocols: t
                    });
                    r.onError(function(e) {
                        n.emit(a.NET_EVT_WS_ERROR, e), o("FAILED_CONNECTING");
                    }), r.onOpen(function(e) {
                        r.onError(null), n.emit(a.NET_EVT_WS_CONNECTED, e), i(r);
                    });
                });
            }, t.prototype.ajax = function(e, t, n, i) {
                var o = this;
                return void 0 === i && (i = {}), new Promise(function(c, r) {
                    if ("undefined" != typeof wx) wx.request({
                        url: e,
                        method: t,
                        data: n,
                        header: i,
                        success: function success(e) {
                            return c(e.data);
                        },
                        fail: function fail(e) {
                            o.emit(a.NET_EVT_XHR_ERROR, e), r("FAILED_REQUESTING");
                        }
                    }); else {
                        var l = new XMLHttpRequest();
                        if (l.onerror = function(e) {
                            o.emit(a.NET_EVT_XHR_ERROR, e), r("FAILED_REQUESTING");
                        }, l.onreadystatechange = function() {
                            if (l.readyState == XMLHttpRequest.DONE) return l.status >= 200 && l.status < 300 ? c(l.response) : void r("ERROR_RESPONSE");
                        }, "get" == t.toLocaleLowerCase()) {
                            for (var s in n && (e = e + "?" + o.obj2uri(n)), l.open(t, e), i) {
                                l.setRequestHeader(s, i[s]);
                            }
                            l.send();
                        } else {
                            for (var s in l.open(t, e), i) {
                                l.setRequestHeader(s, i[s]);
                            }
                            l.send(o.obj2uri(n));
                        }
                    }
                });
            }, t.prototype.obj2uri = function(e) {
                if (!e) return "";
                if (!(e instanceof Object)) return e.toString();
                var t = [];
                if (e instanceof Object) for (var a in e) {
                    e[a] instanceof Object ? t.push(a + "=" + encodeURIComponent(JSON.stringify(e[a]))) : t.push(a + "=" + encodeURIComponent(e[a]));
                }
                return t.join("&");
            }, t;
        }(cc.EventTarget))(), cc._RF.pop();
    }, {} ],
    libutils: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "0c2791pQ/lG9KLYOztir1oE", "libutils");
        var n = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, a = arguments.length; t < a; t++) {
                e += arguments[t].length;
            }
            var n = Array(e), i = 0;
            for (t = 0; t < a; t++) {
                for (var o = arguments[t], c = 0, r = o.length; c < r; c++, i++) {
                    n[i] = o[c];
                }
            }
            return n;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.utils = void 0, a.utils = new (function() {
            function e() {}
            return e.prototype.random = function(e, t) {
                return void 0 === e && (e = 0), void 0 === t && (t = 1), Math.random() * (t - e) + e;
            }, e.prototype.randomInt = function(e, t) {
                return Math.floor(this.random(e, t));
            }, e.prototype.randomSet = function(e, t, a) {
                for (var n = new Array(t - e), i = e; i < t; ++i) {
                    n[i] = i;
                }
                for (i = 0; i < n.length; ++i) {
                    var o = this.randomInt(0, n.length), c = this.randomInt(0, n.length), r = n[o];
                    n[o] = n[c], n[c] = r;
                }
                return n.splice(a), n;
            }, e.prototype.randomObj = function(e) {
                return e[this.randomInt(0, e.length)];
            }, e.prototype.asyncwait = function(e) {
                for (var t = [], a = 1; a < arguments.length; a++) {
                    t[a - 1] = arguments[a];
                }
                return new Promise(function(a) {
                    return setTimeout.apply(void 0, n([ a, e ], t));
                });
            }, e;
        }())(), cc._RF.pop();
    }, {} ],
    libwechat_review: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "9af97lXqq1OWaPntHW76IPq", "libwechat_review");
        var _n28, i = this && this.__extends || (_n28 = function n(e, t) {
            return (_n28 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n28(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        });
        function o(e) {
            return 1011 == e || 1047 == e || 1017 == e || 1007 == e || 1008 == e || 1030 == e;
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.wechat_review = void 0;
        var c = "ppgames-scene";
        function r() {
            var e = cc.sys.localStorage.getItem(c);
            return console.log("localStorage scene:" + e), e && parseInt(e) ? parseInt(e) : 0;
        }
        a.wechat_review = new (function(e) {
            function t() {
                var t, a = e.call(this) || this;
                if (a._channel = null, a._scene = 0, a._is_review = !1, a._remote_review = !1, a.getOpScene = 0, 
                cc.sys.platform === cc.sys.WECHAT_GAME) {
                    var n = wx.getLaunchOptionsSync();
                    if (n && (n.query && n.query.channel ? a._channel = n.query.channel : n.referrerInfo && n.referrerInfo.appId && (a._channel = n.referrerInfo.appId), 
                    a.getOpScene = n.scene, o(n.scene) ? (a._scene = n.scene, t = n.scene, cc.sys.localStorage.setItem(c, t), 
                    console.log("localStorage save scene:" + a._scene), a._is_review = !0) : (a._scene = r(), 
                    a._is_review = o(a._scene))), a._channel) cc.sys.localStorage.setItem("ppgames-channel", a._channel), 
                    console.log("localStorage save channel:" + a._channel); else {
                        var i = cc.sys.localStorage.getItem("ppgames-channel");
                        console.log("localStorage channel:" + a._channel), i && (a._channel = i);
                    }
                    console.log("is review", a.isReview);
                }
                return a;
            }
            return i(t, e), Object.defineProperty(t.prototype, "channel", {
                get: function get() {
                    return this._channel;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "scene", {
                get: function get() {
                    return this._scene;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "remote_review", {
                set: function set(e) {
                    this._remote_review = e;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isReview", {
                get: function get() {
                    return !!this._remote_review || !this._channel && this._is_review;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "opScene", {
                get: function get() {
                    return this.getOpScene;
                },
                enumerable: !1,
                configurable: !0
            }), t;
        }(cc.EventTarget))(), cc._RF.pop();
    }, {} ],
    libwechat: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "6b5a6mQmUJHyK95fbrVATb5", "libwechat");
        var n = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(i, o) {
                function c(e) {
                    try {
                        l(n.next(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function r(e) {
                    try {
                        l(n.throw(e));
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        o(t);
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
                        e(t);
                    })).then(c, r);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }, i = this && this.__generator || function(e, t) {
            var a, n, i, o, c = {
                label: 0,
                sent: function sent() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                },
                trys: [],
                ops: []
            };
            return o = {
                next: r(0),
                throw: r(1),
                return: r(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this;
            }), o;
            function r(e) {
                return function(t) {
                    return l([ e, t ]);
                };
            }
            function l(o) {
                if (a) throw new TypeError("Generator is already executing.");
                for (;c; ) {
                    try {
                        if (a = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 
                        0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
                          case 0:
                          case 1:
                            i = o;
                            break;

                          case 4:
                            return c.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            c.label++, n = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = c.ops.pop(), c.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                c = 0;
                                continue;
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                c.label = o[1];
                                break;
                            }
                            if (6 === o[0] && c.label < i[1]) {
                                c.label = i[1], i = o;
                                break;
                            }
                            if (i && c.label < i[2]) {
                                c.label = i[2], c.ops.push(o);
                                break;
                            }
                            i[2] && c.ops.pop(), c.trys.pop();
                            continue;
                        }
                        o = t.call(e, c);
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        o = [ 6, r ], n = 0;
                    } finally {
                        a = i = 0;
                    }
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                };
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.wechat = a.WX_EVT_USER_INFO = a.WX_EVT_GAME_CLUB = a.WX_EVT_GAME_HIDE = a.WX_EVT_GAME_SHOW = void 0;
        var o = e("./libwechat_review"), c = e("./WXGameWall"), r = "undefined" != typeof wx;
        a.WX_EVT_GAME_SHOW = "wx-on-game-show", a.WX_EVT_GAME_HIDE = "wx-on-game-hide", 
        a.WX_EVT_GAME_CLUB = "wx-on-game-club", a.WX_EVT_USER_INFO = "wx-on-user-info";
        var l = !1;
        function s(e, t, a, n, i) {
            return void 0 === t && (t = "get"), void 0 === a && (a = null), void 0 === n && (n = {}), 
            void 0 === i && (i = ""), new Promise(function(o, c) {
                var r = new XMLHttpRequest();
                for (var s in r.open(t, e, !0), r.responseType = i, n) {
                    r.setRequestHeader(s, n[s]);
                }
                r.onload = function() {
                    r.status >= 200 && r.status < 300 ? (l && console.log("###### response:", e, r.response), 
                    o(r.response)) : (l && console.log("###### response err:", e, r.status), c("XHR_RES_ERROR"));
                }, r.onerror = function() {
                    c("XHR_REQ_ERROR");
                }, l && console.log("###### request:", e, t, a), r.send(a);
            });
        }
        a.wechat = new (function() {
            function e() {
                this._game_config = {}, this._appId = "", this.game_id = window.game_id || "27", 
                this.onShareAppMessage = function() {
                    return {
                        title: "收集动物卡牌，成为百兽之王！",
                        imageUrl: "https://res.p8games.com/cdn/footcity/animalCard/share/share.png"
                    };
                }, this.nowOnShowTime = 0, this._is_review = !1, this.version = 1, this.onShowTimes = 0, 
                this.adBoxValue = 1, this.bannerValue = 1, this.loadedVideo = 0, this.resultVideo = 0, 
                this.gamestartVideo = 0, this.levelstartVideo = 0, this._config_loaded = !1, this._req_config_promis = null;
            }
            return Object.defineProperty(e.prototype, "wxOpenId", {
                get: function get() {
                    return this._wxOpenId;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "wxUserInfo", {
                get: function get() {
                    return this._wxUserInfo;
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.requestGameList = function(e) {
                return void 0 === e && (e = 9), n(this, void 0, Promise, function() {
                    return i(this, function() {
                        return [ 2, s("https://detective.p8games.com/wxgame/gameList?appid=" + this._appId + "&count=" + e + "&name=1", "get", null, {}, "json") ];
                    });
                });
            }, e.prototype.requestGameListNew = function(e) {
                return void 0 === e && (e = 9), n(this, void 0, Promise, function() {
                    return i(this, function() {
                        return [ 2, s("https://detective.p8games.com/wxgame/gameList?appid=" + this._appId + "&count=" + e + "&name=1&noblack=1", "get", null, {}, "json") ];
                    });
                });
            }, e.prototype.getConfig = function(e) {
                return this._game_config ? this._game_config[e] : void 0;
            }, e.prototype.resetWxUserInfo = function(e) {
                this._wxUserInfo = new Promise(function(t, a) {
                    if (e) return t(e);
                    wx.getUserInfo({
                        withCredentials: !0,
                        success: function success(e) {
                            t(e);
                        },
                        fail: function fail(e) {
                            a(e);
                        }
                    });
                });
            }, e.prototype.initialize = function(e, t, l, s, h, d, u, g) {
                return void 0 === g && (g = 0), n(this, void 0, void 0, function() {
                    var n, p, m, f, y, C, N, _, w = this;
                    return i(this, function(i) {
                        switch (i.label) {
                          case 0:
                            if (!r) return [ 2 ];
                            this._appId = e, n = window.game_id || "27", p = "https://xyx.p8games.com/wxgame/getConfig?game=" + n, 
                            this._req_config_promis = new Promise(function(e, t) {
                                wx.request({
                                    url: p,
                                    success: function success(t) {
                                        if (console.log("------------got config", t), w._config_loaded = !0, t.data) {
                                            w._game_config = t.data;
                                            var n = parseInt(w.getConfig("adBox")) || 1;
                                            console.log("adBox", n), w.adBoxValue = parseInt(w.getConfig("ad_box")) || 1, w.bannerValue = parseInt(w.getConfig("banner")) || 1, 
                                            w.loadedVideo = 0, w.resultVideo = 0, 
                                            w.gamestartVideo = 0, w.levelstartVideo = 0, 
                                            console.log(w.adBoxValue + ":" + w.bannerValue + ":" + w.loadedVideo + ":" + w.resultVideo), 
                                            t.data.review && (o.wechat_review.remote_review = !0, a.wechat._is_review = !0), 
                                            e(!0);
                                        } else e(!1);
                                    },
                                    fail: function fail(e) {
                                        console.log("------------fail to got config", e), o.wechat_review.remote_review = !0, 
                                        a.wechat._is_review = !0, t(e);
                                    }
                                });
                            }), a.wechat._is_review = o.wechat_review.isReview, t && (console.log(t + "        !!"), 
                            this._rewardedVideoAd = wx.createRewardedVideoAd({
                                adUnitId: "adunit-16a5e7db6ed76e6a"
                            }), this._rewardedVideoAd.onError(function() {}), this._rewardedVideoAd.onLoad(function() {})), 
                            l ? (this.banner_id = l, N = wx.getSystemInfoSync(), this._bannerAd = wx.createBannerAd({
                                adUnitId: l,
                                style: {
                                    left: 0,
                                    top: N.windowHeight - 140,
                                    width: N.windowWidth,
                                    height: 140
                                }
                            }), this._bannerAd.onError(function(e) {
                                console.log("bannerAd error", e);
                            }), this._bannerAd.onLoad(function() {})) : console.log("bannerAd not found"), wx.showShareMenu({
                                withShareTicket: !0
                            }), wx.onShareAppMessage(function() {
                                return w.onShareAppMessage();
                            }), wx.onShow(function(e) {
                                return cc.Canvas.instance.node.emit(a.WX_EVT_GAME_SHOW, e);
                            }), wx.onHide(function() {
                                return cc.Canvas.instance.node.emit(a.WX_EVT_GAME_HIDE);
                            }), i.label = 1;

                          case 1:
                            return i.trys.push([ 1, 3, , 4 ]), [ 4, this.initializeUserInfo() ];

                          case 2:
                            return i.sent(), [ 3, 4 ];

                          case 3:
                            return m = i.sent(), console.warn("Failed initializing wechat user information"), 
                            console.warn(m), [ 3, 4 ];

                          case 4:
                            for (f = 0; f < 5; ++f) {
                                try {
                                    this.initializeOpenId(e);
                                    break;
                                } catch (v) {
                                    v = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(v);
                                    if (console.warn("Failed initializing wechat user open id"), console.warn(v), 4 == f) throw v;
                                }
                            }
                            return _ = wx.getSystemInfoSync(), _.screenWidth, _.screenHeight, _.devicePixelRatio, 
                            y = _.safeArea, C = _.statusBarHeight, 0 == g && (this._fullGrid = wx.createInterstitialAd({
                                adUnitId: "adunit-4050a161fd80b89d",
                                style: {
                                    left: 0,
                                    top: 0
                                }
                            }), this._fullGrid.onError(function(e) {
                                console.log("#### _fullGrid onError", e), 1004 == e.errCode && (w._fullGrid.destroy(), 
                                w._fullGrid = null);
                            }), this._fullGrid.onClose(function() {
                                w._fullGrid = null;
                            }), this._gridWall = wx.createCustomAd({
                                adUnitId: "adunit-bd05308d7564344e",
                                style: {
                                    left: 0,
                                    top: (y ? y.top : 10) + C + 30
                                }
                            }), this._gridWall.onError(function(e) {
                                console.log("gridAd err", JSON.stringify(e)), w._gridWall = null;
                            }), this._gridWall.onClose(function() {
                                w._gridWall = null;
                            }), this._is_review ? this._gridLine = null : (this._gridLine = wx.createCustomAd({
                                adUnitId: "adunit-bd05308d7564344e",
                                style: {
                                    left: 30,
                                    top: (y ? y.top : 10) + C + 20
                                }
                            }), this._gridLine.onError(function(e) {
                                console.log("gridAd err", JSON.stringify(e)), w._gridLine = null;
                            }), this._gridLine.onClose(function() {
                                w._gridLine = null, c.wechatGameWall.showLine();
                            })), N = wx.getSystemInfoSync(), this._gridAd2 = wx.createCustomAd({
                                adUnitId: "adunit-95bb74fc84444bfb",
                                style: {
                                    left: N.windowWidth - 70,
                                    top: (y ? y.top : 10) + C-30
                                }
                            }), this._gridAd2.onError(function(e) {
                                console.log("gridAd err", JSON.stringify(e)), w._gridAd2 = null;
                            }), this._gridAd2.onClose(function() {
                                w._gridAd2 = null;
                            })), wx.setKeepScreenOn({
                                keepScreenOn: !0
                            }), [ 2 ];
                        }
                    });
                });
            }, e.prototype.ensureConfigLoaded = function() {
                return n(this, void 0, void 0, function() {
                    return i(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return this._config_loaded ? [ 2, Promise.resolve() ] : [ 4, this._req_config_promis ];

                          case 1:
                            return e.sent(), [ 2 ];
                        }
                    });
                });
            }, e.prototype.showFullGrid = function() {
                return console.log("grid ad ----  is    " + this._fullGrid), this._fullGrid ? this._fullGrid.show() : Promise.resolve();
            }, e.prototype.showGridAd1 = function() {
                if (!a.wechat._is_review) {
                    if (console.log("grid ad ----  is    " + this._gridAd1), !this._gridAd2) {
                        if (a.wechat.getConfig("no_single")) return;
                        return c.wechatGameWall.showSingle();
                    }
                    return this._gridAd2.show();
                }
            }, e.prototype.hideGridAd1 = function() {
                return this._gridAd2 ? this._gridAd2.hide() : c.wechatGameWall.hideSingle();
            }, e.prototype.showGridAd2 = function() {
                if (!a.wechat._is_review) {
                    if (console.log("grid ad ----  is    " + this._gridAd2), !this._gridAd2) {
                        if (a.wechat.getConfig("no_single")) return;
                        return c.wechatGameWall.showSingle();
                    }
                    return this._gridAd2.show();
                }
            }, e.prototype.hideGridAd2 = function() {
                return this._gridAd2 ? this._gridAd2.hide() : c.wechatGameWall.hideSingle();
            }, e.prototype.showGridAd3 = function() {
                return console.log("grid ad ----  is    " + this._gridAd3), this._gridAd3 ? this._gridAd3.show() : c.wechatGameWall.showSingle();
            }, e.prototype.hideGridAd3 = function() {
                return this._gridAd3 ? this._gridAd3.hide() : c.wechatGameWall.hideSingle();
            }, e.prototype.shareAppMessage = function(e) {
                if (void 0 === e && (e = {}), r) {
                    var t = this.onShareAppMessage();
                    e.title = e.title || t.title, e.query = e.query || t.query, e.imageUrl = e.imageUrl || t.imageUrl, 
                    e.imageUrlId = e.imageUrlId || t.imageUrlId, wx.shareAppMessage(e);
                }
            }, e.prototype.showUserInfoButton = function(e) {
                var t = this;
                if (r && !this._wxUserInfo) if (this._wxUserInfoButton) {
                    var n = this._wxUserInfoButton, i = this.wxCoordProjection(e);
                    n.style.left = i.left, n.style.top = i.top, n.style.width = i.width, n.style.height = i.height, 
                    this._wxUserInfoButton.show(), console.log("Updated wechat UserInfoButton");
                } else this._wxUserInfoButton = wx.createUserInfoButton({
                    type: "image",
                    image: "",
                    withCredentials: !0,
                    style: this.wxCoordProjection(e)
                }), this._wxUserInfoButton.onTap(function(e) {
                    e.userInfo && (t._wxUserInfo = e.userInfo, t._wxUserInfoButton.destroy(), t._wxUserInfoButton = null, 
                    cc.Canvas.instance.node.emit(a.WX_EVT_USER_INFO));
                }), this._wxUserInfoButton.show(), console.log("Wechat UserInfoButton created");
            }, e.prototype.hideUserInfoButton = function() {
                this._wxUserInfoButton && this._wxUserInfoButton.hide();
            }, e.prototype.showBannerAd = function() {
                return console.log("banner ad ----  is   1111 " + this._bannerAd), this._bannerAd ? this._bannerAd.show() : Promise.resolve();
            }, e.prototype.hideBannerAd = function() {
                if (console.log("banner hide"), console.log(this.bannerValue), console.log(this.onShowTimes), 
                this.nowOnShowTime != this.onShowTimes && (this.nowOnShowTime = this.onShowTimes, 
                this.onShowTimes % this.bannerValue == 0 && this.refreshBannerAd()), this._bannerAd) return this._bannerAd.hide();
            }, e.prototype.refreshBannerAd = function() {
                this._bannerAd && (this._bannerAd.destroy(), this._bannerAd = null);
                var e = wx.getSystemInfoSync();
                this._bannerAd = wx.createBannerAd({
                    adUnitId: this.banner_id,
                    style: {
                        left: 0,
                        top: e.windowHeight - 140,
                        width: e.windowWidth,
                        height: 140
                    }
                }), this._bannerAd.scale = .5, this._bannerAd.onError(function(e) {
                    console.log("bannerAd error", e);
                });
            }, e.prototype.uploadPlayerRecord = function(e, t) {
                r && this._wxOpenId && wx.request({
                    url: "https://detective.p8games.com/wxgame/tiematching/updateLevel",
                    data: {
                        id: this._wxOpenId,
                        level: e,
                        star: t
                    },
                    success: function success(e) {
                        console.log("Player record has been updated."), console.log(e);
                    },
                    fail: function fail(e) {
                        console.log("Failed uploading player record."), console.log(e);
                    }
                });
            }, e.prototype.showInterstitialAd = function() {
                return n(this, void 0, void 0, function() {
                    return i(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return this._interstitialAd ? [ 4, this._interstitialAd.load() ] : [ 2 ];

                          case 1:
                            return e.sent(), [ 4, this._interstitialAd.show() ];

                          case 2:
                            return e.sent(), [ 2 ];
                        }
                    });
                });
            }, e.prototype.showRewardedVideoAd = function() {
                return n(this, void 0, Promise, function() {
                    var e = this;
                    return i(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return r ? this._rewardedVideoAd ? [ 4, this._rewardedVideoAd.load() ] : [ 2, !1 ] : [ 2 ];

                          case 1:
                            return t.sent(), [ 4, this._rewardedVideoAd.show() ];

                          case 2:
                            return t.sent(), [ 2, new Promise(function(t) {
                                e._rewardedVideoAd.onClose(function(e) {
                                    e && e.isEnded || void 0 === e ? t(!0) : t(!1);
                                });
                            }) ];
                        }
                    });
                });
            }, e.prototype.initializeOpenId = function() {
                return new Promise(function(e, t) {
                    wx.login({
                        success: function success() {},
                        fail: function fail(e) {
                            t(e);
                        }
                    });
                });
            }, e.prototype.initializeUserInfo = function() {}, e.prototype.wxCoordProjection = function(e) {
                var t, a = cc.Canvas.instance, n = cc.view.getDesignResolutionSize(), i = cc.view.getFrameSize();
                if (e instanceof cc.Node) {
                    if (t = e.getBoundingBox(), e.parent) {
                        var o = e.parent.convertToWorldSpaceAR(cc.v2(t.x, t.y));
                        t.x = o.x, t.y = o.y;
                    }
                    for (var c = e.parent; c; ) {
                        t.width *= c.scaleX, t.height *= c.scaleY, c = c.parent;
                    }
                } else t = e;
                if (t.y = a.node.height - t.yMax, a.node.width / a.node.height != n.width / n.height) {
                    var r = i.height / a.node.height;
                    return t.x *= r, t.y *= r, t.width *= r, t.height *= r, {
                        left: t.x,
                        top: t.y,
                        width: t.width,
                        height: t.height
                    };
                }
                return i.width / i.height < n.width / n.height ? (r = i.width / n.width, t.x *= r, 
                t.y *= r, t.y += (i.height - n.height * r) / 2, t.width *= r, t.height *= r) : (r = i.height / n.height, 
                t.x *= r, t.x += (i.width - n.width * r) / 2, t.y *= r, t.width *= r, t.height *= r), 
                {
                    left: t.x,
                    top: t.y,
                    width: t.width,
                    height: t.height
                };
            }, e.prototype.showGridWall = function() {
                this._gridWall && this._gridWall.show();
            }, e.prototype.hideGridWall = function() {
                this._gridWall && this._gridWall.hide();
            }, e.prototype.showGridLine = function() {
                this._gridLine && this._gridLine.show();
            }, e.prototype.hideGridLine = function() {
                this._gridLine && this._gridLine.hide();
            }, e.prototype.mustVideo = function() {
                this._is_review || this.showRewardedVideoAd().then(function() {}).catch(function(e) {
                    e.errCode;
                });
            }, e;
        }())(), cc._RF.pop();
    }, {
        "./WXGameWall": "WXGameWall",
        "./libwechat_review": "libwechat_review"
    } ],
    meirizuanshi: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "a0238V1NXZAmLdgjDqU2CmT", "meirizuanshi");
        var _n29, i = this && this.__extends || (_n29 = function n(e, t) {
            return (_n29 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n29(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = e("../libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null, t.text = "hello", t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("img_all").getChildByName("button_free").on(cc.Node.EventType.TOUCH_END, this.watchVideo, this), 
                this.node.getChildByName("img_all").getChildByName("img_close").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                c.Utils.buttonBeat(this.node.getChildByName("img_all").getChildByName("button_free"));
            }, t.prototype.refreshShow = function() {}, t.prototype.openAction = function() {
                this.node.getChildByName("img_all").scale = 0, this.node.getChildByName("img_all").runAction(cc.scaleTo(.2, 1));
            }, t.prototype.closeNode = function() {
                this.node.parent.getComponent("menuScene").playEffect("click");
                var e = this;
                this.node.getChildByName("img_all").runAction(cc.sequence(cc.scaleTo(.2, 0), cc.callFunc(function() {
                    e.node.active = !1;
                })));
            }, t.prototype.watchVideo = function() {
                this.node.parent.getComponent("menuScene").playEffect("click");
                var e = this;
                r.wechat.showRewardedVideoAd().then(function(t) {
                    t && (e.goldAction(), c.DataManage.gold += 200, c.Utils.setLocalData());
                }).catch(function() {});
            }, t.prototype.goldAction = function() {
                var e = this;
                this.node.getChildByName("zs").setPosition(cc.v2(0, 0)), this.node.getChildByName("zs").opacity = 255, 
                this.node.getChildByName("zs").scale = 1, this.node.getChildByName("zs").runAction(cc.sequence(cc.moveTo(.4, cc.v2(100, 590)).easing(cc.easeInOut(2)), cc.scaleTo(.2, 1.5), cc.spawn(cc.scaleTo(.2, .1), cc.fadeTo(.2, 0)), cc.callFunc(function() {
                    e.node.parent.getComponent("menuScene").playEffect("getDiamond");
                })));
            }, o([ h(cc.Label) ], t.prototype, "label", void 0), o([ h ], t.prototype, "text", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "../DataManage": "DataManage",
        "../libppgame/libwechat": "libwechat"
    } ],
    menuPowerScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "0f239mLC2pLfKzX8aOB3ps+", "menuPowerScript");
        var _n30, i = this && this.__extends || (_n30 = function n(e, t) {
            return (_n30 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n30(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.numberFrames = [ null ], t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.setPower = function(e) {
                var t, a, n, i, o, c, r, l = 0, s = e;
                s -= 1e7 * (l = Math.floor(s / 1e7)), s -= 1e6 * (t = Math.floor(s / 1e6)), s -= 1e5 * (a = Math.floor(s / 1e5)), 
                s -= 1e4 * (n = Math.floor(s / 1e4)), s -= 1e3 * (i = Math.floor(s / 1e3)), s -= 100 * (o = Math.floor(s / 100)), 
                r = s -= 10 * (c = Math.floor(s / 10)), l > 9 && (l = 9);
                var h = !1;
                0 == l ? this.node.getChildByName("num1").active = !1 : (this.node.getChildByName("num1").active = !0, 
                this.node.getChildByName("num1").getComponent(cc.Sprite).spriteFrame = this.numberFrames[l], 
                h = !0), 0 != t || h ? (this.node.getChildByName("num2").active = !0, this.node.getChildByName("num2").getComponent(cc.Sprite).spriteFrame = this.numberFrames[t], 
                h = !0) : this.node.getChildByName("num2").active = !1, 0 != a || h ? (this.node.getChildByName("num3").active = !0, 
                this.node.getChildByName("num3").getComponent(cc.Sprite).spriteFrame = this.numberFrames[a], 
                h = !0) : this.node.getChildByName("num3").active = !1, 0 != n || h ? (this.node.getChildByName("num4").active = !0, 
                this.node.getChildByName("num4").getComponent(cc.Sprite).spriteFrame = this.numberFrames[n], 
                h = !0) : this.node.getChildByName("num4").active = !1, 0 != i || h ? (this.node.getChildByName("num5").active = !0, 
                this.node.getChildByName("num5").getComponent(cc.Sprite).spriteFrame = this.numberFrames[i], 
                h = !0) : this.node.getChildByName("num5").active = !1, 0 != o || h ? (this.node.getChildByName("num6").active = !0, 
                this.node.getChildByName("num6").getComponent(cc.Sprite).spriteFrame = this.numberFrames[o], 
                h = !0) : this.node.getChildByName("num6").active = !1, 0 != c || h ? (this.node.getChildByName("num7").active = !0, 
                this.node.getChildByName("num7").getComponent(cc.Sprite).spriteFrame = this.numberFrames[c], 
                h = !0) : this.node.getChildByName("num7").active = !1, this.node.getChildByName("num8").getComponent(cc.Sprite).spriteFrame = this.numberFrames[r];
            }, o([ l([ cc.SpriteFrame ]) ], t.prototype, "numberFrames", void 0), o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    menuScene: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "d43dbEIk5dLjZVX0/Z1s0s3", "menuScene");
        var _n31, i = this && this.__extends || (_n31 = function n(e, t) {
            return (_n31 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n31(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./DataManage"), r = e("./gamewall"), l = e("./libppgame/libwechat"), s = e("./libppgame/WXGameWall"), h = cc._decorator, d = h.ccclass, u = h.property, g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.missionNodePrefab = null, t.text = "hello", t.bg = null, t.game_wall = null, 
                t.nowShowIndex = 0, t.sortGroup = [], t.cardNodeGroup = [], t.cardNodeSort = [], 
                t.firstCard = 0, t.touchStartX = null, t.touchEndX = null, t.time1 = 0, t;
            }
            return i(t, e), t.prototype.start = function() {
                r.default.init([ "adunit-1d070146e75ec295", "adunit-2a930d4fde15a1a2" ]);
                var e = l.wechat.getConfig("no_gamewall") || !1;
                this.setPlayerInfo(), this.addButtonEvents(), this.initMenuCard(), this.refreshTeamPower(), 
                this.node.getChildByName("bg").getChildByName("bg").on(cc.Node.EventType.TOUCH_START, this.layerStart, this), 
                this.node.getChildByName("bg").getChildByName("bg").on(cc.Node.EventType.TOUCH_END, this.layerEnd, this), 
                this.node.getChildByName("bg").getChildByName("bg").on(cc.Node.EventType.TOUCH_MOVE, this.layerMove, this), 
                this.node.getChildByName("bg").getChildByName("bg").on(cc.Node.EventType.TOUCH_CANCEL, this.layerCancel, this), 
                this.bg.setContentSize(cc.winSize);
                var t = this;
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.node.getChildByName("sound").getChildByName("bgm").getComponent(cc.AudioSource).play();
                }))), this.enterAction(), 1 == c.DataManage.landing && (this.node.getChildByName("wallButton").getChildByName("attention").active = !1), 
                this.node.getChildByName("wallButton").on(cc.Node.EventType.TOUCH_END, this.adWall, this), 
                l.wechat._is_review && (this.node.getChildByName("wallButton").active = !1), e ? this.node.getChildByName("wallButton").active = !1 : l.wechat._is_review ? this.node.getChildByName("wallButton").active = !1 : this.node.getChildByName("wallButton").active = !0, 
                c.DataManage.battleTeam == [ 0, 0, 0 ] && (c.DataManage.guideStep = 0), this.checkGuideStep(), 
                this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                    l.wechat.hideBannerAd();
                }))), s.wechatGameWall.hideLine(), l.wechat.showGridAd2(), this.updateActivePoint(), 
                cc.director.preloadScene("stageScene"), cc.director.preloadScene("battleScene");
            }, t.prototype.updateActivePoint = function() {
                c.DataManage.zhuan < 10 ? this.node.getChildByName("bg").getChildByName("active4").getChildByName("attention").active = !0 : this.node.getChildByName("bg").getChildByName("active4").getChildByName("attention").active = !1, 
                c.DataManage.landTimes > c.DataManage.signTimes && c.DataManage.signTimes < 7 ? this.node.getChildByName("bg").getChildByName("active3").getChildByName("attention").active = !0 : this.node.getChildByName("bg").getChildByName("active3").getChildByName("attention").active = !1, 
                0 == c.DataManage.specNew ? this.node.getChildByName("bg").getChildByName("active5").getChildByName("attention").active = !1 : this.node.getChildByName("bg").getChildByName("active5").getChildByName("attention").active = !0;
            }, t.prototype.checkGuideStep = function() {
                0 == c.DataManage.guideStep ? (this.node.getChildByName("guideNode").getChildByName("guide1").active = !0, 
                this.node.getChildByName("guideNode").getChildByName("guide1").getChildByName("img_sz").getComponent(cc.Animation).play("handAnimation"), 
                c.DataManage.guideStep = 1) : 2 == c.DataManage.guideStep && (this.node.getChildByName("guideNode").getChildByName("guide4").active = !0, 
                this.node.getChildByName("guideNode").getChildByName("guide4").getChildByName("img_sz").getComponent(cc.Animation).play("handAnimation"));
            }, t.prototype.adWall = function() {
                this.node.getChildByName("wallButton").getChildByName("attention").active && (this.node.getChildByName("wallButton").getChildByName("attention").active = !1, 
                c.DataManage.landing = 1), this.onBtnShowGameWall();
            }, t.prototype.onBtnShowGameWall = function() {
                var e = this, t = l.wechat.getConfig("no_gamewall") || !1;
                l.wechat._is_review || t || (l.wechat.hideGridAd2(), l.wechat.showBannerAd(), console.log("OnBtnShowGameWall", !!this.game_wall), 
                this.game_wall ? this.game_wall.show() : r.default.load().then(function(t) {
                    console.log("gamewall loaded"), e.game_wall = t.getComponent("gamewall"), e.node.addChild(t), 
                    e.game_wall.show();
                }).catch(function(e) {
                    console.log("load fail", e);
                }));
            }, t.prototype.enterAction = function() {
                this.node.getChildByName("bg").getChildByName("button_chuangguan").x = -700, this.node.getChildByName("bg").getChildByName("button_kabao").x = 700, 
                this.node.getChildByName("bg").getChildByName("button_chuangguan").runAction(cc.moveTo(.5, cc.v2(-144, -326))), 
                this.node.getChildByName("bg").getChildByName("button_kabao").runAction(cc.moveTo(.5, cc.v2(145, -326))), 
                this.node.getChildByName("bg").getChildByName("button_jingji").y = -1e3, this.node.getChildByName("bg").getChildByName("button_kace").y = -1e3, 
                this.node.getChildByName("bg").getChildByName("button_renwu").y = -1e3, this.node.getChildByName("bg").getChildByName("button_kace").runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.3, cc.v2(-185, -441)))), 
                this.node.getChildByName("bg").getChildByName("button_renwu").runAction(cc.sequence(cc.delayTime(.6), cc.moveTo(.3, cc.v2(0, -441)))), 
                this.node.getChildByName("bg").getChildByName("button_jingji").runAction(cc.sequence(cc.delayTime(.7), cc.moveTo(.3, cc.v2(185, -441)))), 
                this.node.getChildByName("bg").getChildByName("active1").y = 1e3, this.node.getChildByName("bg").getChildByName("active2").y = 1e3, 
                this.node.getChildByName("bg").getChildByName("active3").y = 1e3, this.node.getChildByName("bg").getChildByName("active4").y = 1e3, 
                this.node.getChildByName("bg").getChildByName("active5").y = 1e3, this.node.getChildByName("bg").getChildByName("active1").runAction(cc.sequence(cc.delayTime(.6), cc.moveTo(.3, cc.v2(-250, 510)))), 
                this.node.getChildByName("bg").getChildByName("active2").runAction(cc.sequence(cc.delayTime(.6), cc.moveTo(.3, cc.v2(-150, 510)))), 
                this.node.getChildByName("bg").getChildByName("active3").runAction(cc.sequence(cc.delayTime(.6), cc.moveTo(.3, cc.v2(-50, 510)))), 
                this.node.getChildByName("bg").getChildByName("active4").runAction(cc.sequence(cc.delayTime(.6), cc.moveTo(.3, cc.v2(50, 510)))), 
                this.node.getChildByName("bg").getChildByName("active5").runAction(cc.sequence(cc.delayTime(.6), cc.moveTo(.3, cc.v2(150, 510))));
            }, t.prototype.initMenuCard = function() {
                var e = this.node.getChildByName("bg").getChildByName("menuCardNode");
                if (0 != c.DataManage.battleTeam[0]) {
                    e.active = !0, this.sortGroup = this.sortCard();
                    for (var t = 0, a = 1, n = "", i = this.nowShowIndex; 4 != i; i++) {
                        t = i, i > this.sortGroup.length - 1 && (t = i - this.sortGroup.length), n = "cardNode" + a, 
                        e.getChildByName(n).getComponent("cardScript").initCard(this.sortGroup[t]), a++, 
                        this.cardNodeGroup.push(e.getChildByName(n));
                    }
                    this.cardNodeSort = [ 0, 1, 2, 3 ], this.firstCard = 0;
                    var o = this;
                    this.cardNodeGroup[0].runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                        o.cardNodeGroup[0].getChildByName("cardMask").getChildByName("eff_saoguang").getComponent(cc.Animation).play("anim_sao", 0);
                    }))), this.cardNodeGroup[1].runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                        o.cardNodeGroup[1].getChildByName("cardMask").getChildByName("eff_saoguang").getComponent(cc.Animation).play("anim_sao", 0);
                    }))), this.cardNodeGroup[2].runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                        o.cardNodeGroup[2].getChildByName("cardMask").getChildByName("eff_saoguang").getComponent(cc.Animation).play("anim_sao", 0);
                    }))), this.cardNodeGroup[3].runAction(cc.sequence(cc.delayTime(4), cc.callFunc(function() {
                        o.cardNodeGroup[3].getChildByName("cardMask").getChildByName("eff_saoguang").getComponent(cc.Animation).play("anim_sao", 0);
                    }))), this.checkFetchStatu();
                } else e.active = !1;
            }, t.prototype.checkFetchStatu = function() {
                for (var e = !1, t = !1, a = c.DataManage.missionData, n = 0; n != a.length; n++) {
                    if (a[n][2] >= a[n][1] && a[n][4] < a[n][5]) {
                        e = !0;
                        break;
                    }
                }
                var i = c.DataManage.arenaBoxData;
                for (n = 0; n != i.length; n++) {
                    if (i[n][2] >= i[n][1] && 0 == i[n][3]) {
                        t = !0;
                        break;
                    }
                }
                this.node.getChildByName("bg").getChildByName("button_renwu").getChildByName("attention").active = e, 
                this.node.getChildByName("bg").getChildByName("button_jingji").getChildByName("attention").active = t;
            }, t.prototype.refreshTeamPower = function() {
                for (var e = null, t = 0, a = c.DataManage.battleTeam, n = [ null, null, null ], i = null, o = 0; o != a.length; o++) {
                    i = c.Utils.getCardInfo(a[o]), n[o] = i;
                }
                for (o = 0; o != n.length; o++) {
                    if (null != n[o]) {
                        e = c.Utils.getCardTemplate(n[o][0]);
                        var r = parseInt("" + e[5]), l = parseInt("" + e[6]);
                        t += Math.floor(r * (1 + .05 * n[o][1])), t += Math.floor(l * (1 + .05 * n[o][1]));
                    }
                }
                this.node.getChildByName("bg").getChildByName("img_IDbox").getChildByName("powerNode").getComponent("menuPowerScript").setPower(t);
            }, t.prototype.refreshMenuCards = function() {
                for (var e = 0; e != this.cardNodeGroup.length; e++) {
                    this.cardNodeGroup[e].getComponent("cardScript").refreshNum();
                }
            }, t.prototype.turnCard = function() {
                this.playEffect("cardFlip"), this.cardNodeGroup[this.firstCard].runAction(cc.moveTo(.2, cc.v2(-17, 204))), 
                this.nowShowIndex++, this.nowShowIndex > this.sortGroup.length - 1 && (this.nowShowIndex = 0), 
                this.firstCard++, this.firstCard > 3 && (this.firstCard = 0);
                for (var e = this.getCardzIndex(this.firstCard), t = 0; t != this.cardNodeGroup.length; t++) {
                    this.cardNodeGroup[t].zIndex = e[t];
                }
                var a = this.nowShowIndex + 2, n = this.firstCard + 2;
                a > this.sortGroup.length - 1 && (a -= this.sortGroup.length), n > 3 && (n -= 4), 
                this.cardNodeGroup[n].getComponent("cardScript").initCard(this.sortGroup[a]);
            }, t.prototype.getCardzIndex = function(e) {
                return 0 == e ? [ 3, 2, 1, 0 ] : 1 == e ? [ 0, 3, 2, 1 ] : 2 == e ? [ 1, 0, 3, 2 ] : 3 == e ? [ 2, 1, 0, 3 ] : void 0;
            }, t.prototype.getNewSort = function(e) {
                return 0 == e ? [ 0, 1, 2, 3 ] : 1 == e ? [ 1, 2, 3, 0 ] : 2 == e ? [ 2, 3, 0, 1 ] : 3 == e ? [ 3, 0, 1, 2 ] : void 0;
            }, t.prototype.layerStart = function(e) {
                this.touchStartX = e.getLocation().x, this.touchEndX = this.touchStartX;
            }, t.prototype.layerMove = function(e) {
                if (null != this.touchStartX) {
                    var t = e.getDelta();
                    this.cardNodeGroup.length > 0 && (this.cardNodeGroup[this.firstCard].x += t.x, this.cardNodeGroup[this.firstCard].y += t.y);
                }
            }, t.prototype.layerEnd = function() {
                this.cardNodeGroup.length > 0 && (this.cardNodeGroup[this.firstCard].x < 0 ? this.turnCard("left") : this.turnCard("right"), 
                this.touchStartX = null, this.touchEndX = null);
            }, t.prototype.layerCancel = function() {
                this.cardNodeGroup.length > 0 && (this.cardNodeGroup[this.firstCard].x < 0 ? this.turnCard("left") : this.turnCard("right"), 
                this.touchStartX = null, this.touchEndX = null);
            }, t.prototype.sortCard = function() {
                for (var e = c.DataManage.battleTeam, t = e[0], a = e[1], n = e[2], i = [], o = [], r = [], l = [], s = c.DataManage.cardData, h = null, d = 0; d != s.length; d++) {
                    0 != s[d][1] && s[d][0] != t && s[d][0] != a && s[d][0] != n && (1 == (h = c.Utils.getCardTemplate(s[d][0]))[3] ? l.push(s[d]) : 2 == h[3] ? r.push(s[d]) : 3 == h[3] ? o.push(s[d]) : 4 == h[3] && i.push(s[d]));
                }
                l.sort(function(e, t) {
                    return t[1] - e[1];
                }), r.sort(function(e, t) {
                    return t[1] - e[1];
                }), o.sort(function(e, t) {
                    return t[1] - e[1];
                }), i.sort(function(e, t) {
                    return t[1] - e[1];
                });
                var u = [];
                for (d = 0; d != e.length; d++) {
                    u.push(e[d]);
                }
                for (d = 0; d != i.length; d++) {
                    u.push(i[d][0]);
                }
                for (d = 0; d != o.length; d++) {
                    u.push(o[d][0]);
                }
                for (d = 0; d != r.length; d++) {
                    u.push(r[d][0]);
                }
                for (d = 0; d != l.length; d++) {
                    u.push(l[d][0]);
                }
                return u;
            }, t.prototype.setPlayerInfo = function() {
                var e = c.DataManage.iconId, t = c.DataManage.gold, a = c.DataManage.playerName;
                this.node.getChildByName("bg").getChildByName("img_IDbox").getChildByName("img_namebox").getChildByName("nameLabel").getComponent(cc.Label).string = a;
                var n = [ {
                    path: "cardBattle/headIcon/" + e,
                    type: cc.SpriteFrame
                } ], i = this;
                cc.assetManager.loadAny(n, {
                    bundle: "resources"
                }, null, function(e, t) {
                    i.node.getChildByName("bg").getChildByName("img_IDbox").getChildByName("img_headframe").getChildByName("img_headpic").getComponent(cc.Sprite).spriteFrame = t, 
                    i.node.getChildByName("bg").getChildByName("img_IDbox").getChildByName("img_headframe").getChildByName("img_headpic").setContentSize(cc.size(86, 86));
                }), this.node.getChildByName("bg").getChildByName("img_coinbox").getChildByName("diamondLabel").getComponent(cc.Label).string = "" + t;
            }, t.prototype.addButtonEvents = function() {
                this.node.getChildByName("bg").getChildByName("button_chuangguan").on(cc.Node.EventType.TOUCH_END, this.enterStage, this), 
                this.node.getChildByName("bg").getChildByName("button_jingji").on(cc.Node.EventType.TOUCH_END, this.pkScene, this), 
                this.node.getChildByName("bg").getChildByName("button_kabao").on(cc.Node.EventType.TOUCH_END, this.chouka, this), 
                this.node.getChildByName("bg").getChildByName("button_kace").on(cc.Node.EventType.TOUCH_END, this.bag, this), 
                this.node.getChildByName("bg").getChildByName("button_renwu").on(cc.Node.EventType.TOUCH_END, this.mission, this), 
                this.node.getChildByName("bg").getChildByName("active1").on(cc.Node.EventType.TOUCH_END, this.meirizuanshi, this), 
                this.node.getChildByName("bg").getChildByName("active2").on(cc.Node.EventType.TOUCH_END, this.zaixianjiangli, this), 
                this.node.getChildByName("bg").getChildByName("active3").on(cc.Node.EventType.TOUCH_END, this.qiandao, this), 
                this.node.getChildByName("bg").getChildByName("active4").on(cc.Node.EventType.TOUCH_END, this.zhuanpan, this), 
                this.node.getChildByName("bg").getChildByName("active5").on(cc.Node.EventType.TOUCH_END, this.specMenu, this);
            }, t.prototype.meirizuanshi = function() {
                this.node.getChildByName("meirizuanshi").active = !0, this.node.getChildByName("meirizuanshi").getComponent("meirizuanshi").openAction(), 
                this.playEffect("click"), c.Utils.blinkBanner(this.node, 2);
            }, t.prototype.zaixianjiangli = function() {
                this.node.getChildByName("zaixian").active = !0, this.node.getChildByName("zaixian").getComponent("zaixian").openAction(), 
                this.playEffect("click"), c.Utils.blinkBanner(this.node, 2);
            }, t.prototype.qiandao = function() {
                this.node.getChildByName("qiandao").active = !0, this.node.getChildByName("qiandao").getComponent("qiandao").openAction(), 
                this.playEffect("click"), c.Utils.blinkBanner(this.node, 2);
            }, t.prototype.zhuanpan = function() {
                this.node.getChildByName("zuanpan").active = !0, this.node.getChildByName("zuanpan").getComponent("zuanpan").openAction(), 
                this.playEffect("click"), c.Utils.blinkBanner(this.node, 2);
            }, t.prototype.specMenu = function() {
                this.node.getChildByName("specMenu").active = !0, this.node.getChildByName("specMenu").getComponent("specMenu").openAction(), 
                this.node.getChildByName("specMenu").getComponent("specMenu").refreshSpecMenu(), 
                this.playEffect("click"), c.Utils.blinkBanner(this.node, 2);
            }, t.prototype.enterStage = function() {
                this.playEffect("click"), this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    cc.director.loadScene("stageScene");
                })));
            }, t.prototype.pkScene = function() {
                this.playEffect("click"), this.node.getChildByName("bg").getChildByName("arenaNode").active = !0, 
                this.node.getChildByName("bg").getChildByName("arenaNode").getComponent("arenaNode").refreshArenaNode(), 
                c.Utils.blinkBanner(this.node, 2);
            }, t.prototype.chouka = function() {
                this.playEffect("click"), this.node.getChildByName("bg").getChildByName("choukaNode").active = !0, 
                1 == c.DataManage.guideStep && (this.node.getChildByName("guideNode").getChildByName("guide1").active = !1, 
                this.node.getChildByName("guideNode").getChildByName("guide2").active = !0, this.node.getChildByName("guideNode").getChildByName("guide2").getChildByName("img_sz").getComponent(cc.Animation).play("handAnimation")), 
                c.Utils.blinkBanner(this.node, 2);
            }, t.prototype.bag = function() {
                this.playEffect("click"), this.node.getChildByName("bg").getChildByName("bagNode").active = !0, 
                this.node.getChildByName("bg").getChildByName("bagNode").getComponent("bagScript").refreshBagNode(), 
                c.Utils.blinkBanner(this.node, 2);
            }, t.prototype.mission = function() {
                this.playEffect("click");
                var e = cc.instantiate(this.missionNodePrefab);
                e.setPosition(cc.v2(0, 0)), this.node.getChildByName("bg").addChild(e), e.getComponent("missionScript").refreshMissionScroll(), 
                c.Utils.blinkBanner(this.node, 2);
            }, t.prototype.update = function(e) {
                this.time1 += e, this.time1 > 1 && (this.time1 = 0, this.refreshMenuGold(), c.DataManage.onLineTimes++, 
                c.DataManage.onLineTimes % 30 == 0 && c.Utils.saveOnline(), this.updateZaixian());
            }, t.prototype.updateZaixian = function() {
                for (var e = -1, t = 0; t != c.DataManage.onLineAward.length; t++) {
                    if (0 == c.DataManage.onLineAward[t]) {
                        e = t;
                        break;
                    }
                }
                var a = 0;
                0 == e ? a = 300 : 1 == e ? a = 900 : 2 == e && (a = 1800);
                var n, i = a - c.DataManage.onLineTimes;
                i < 0 ? (i = 0, this.node.getChildByName("bg").getChildByName("active2").getChildByName("attention").active = e < 3 && -1 != e) : this.node.getChildByName("bg").getChildByName("active2").getChildByName("attention").active = !1;
                var o = "";
                (n = Math.floor(i / 60)) < 10 && (o += "0"), o += n, o += ":", (i -= 60 * n) < 10 && (o += "0"), 
                o += i, this.node.getChildByName("bg").getChildByName("active2").getChildByName("onlineLabel").getComponent(cc.Label).string = o;
            }, t.prototype.refreshMenuGold = function() {
                this.node.getChildByName("bg").getChildByName("img_coinbox").getChildByName("diamondLabel").getComponent(cc.Label).string != "" + c.DataManage.gold && (this.node.getChildByName("bg").getChildByName("img_coinbox").getChildByName("diamondLabel").getComponent(cc.Label).string = "" + c.DataManage.gold);
            }, t.prototype.playEffect = function(e) {
                this.node.getChildByName("sound").getChildByName(e).getComponent(cc.AudioSource).play();
            }, o([ u(cc.Prefab) ], t.prototype, "missionNodePrefab", void 0), o([ u ], t.prototype, "text", void 0), 
            o([ u(cc.Node) ], t.prototype, "bg", void 0), o([ d ], t);
        }(cc.Component);
        a.default = g, cc._RF.pop();
    }, {
        "./DataManage": "DataManage",
        "./gamewall": "gamewall",
        "./libppgame/WXGameWall": "WXGameWall",
        "./libppgame/libwechat": "libwechat"
    } ],
    missionScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "b56971U1sNG4qgA38J8kRaD", "missionScript");
        var _n32, i = this && this.__extends || (_n32 = function n(e, t) {
            return (_n32 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n32(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./DataManage"), r = e("./libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.missionItem = null, t.scrollButtonFrame = [ null ], t.resultNode = null, 
                t.missionItemGroup = [], t.missionDes = [ "每日登陆游戏", "进行3次抽卡", "竞技场更换对手1次", "成功闯关3次", "观看视频1次", "完成所有任务" ], 
                t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("closeButton").on(cc.Node.EventType.TOUCH_END, this.closeNode, this);
            }, t.prototype.closeNode = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play(), this.node.parent.parent.getComponent("menuScene").checkFetchStatu(), 
                this.node.runAction(cc.sequence(cc.delayTime(.1), cc.removeSelf()));
            }, t.prototype.refreshMissionScroll = function() {
                for (var e = c.DataManage.missionData, t = 0; t != e.length; t++) {
                    var a = cc.instantiate(this.missionItem);
                    a.setPosition(cc.v2(0, -66 - 150 * t));
                    var n = {
                        missionType: e[t][0],
                        missionTarget: e[t][1],
                        missionFinish: e[t][2],
                        missionAward: e[t][3],
                        missionFetchNum: e[t][4],
                        missionMaxFetch: e[t][5]
                    };
                    a.attr(n), this.node.getChildByName("missionScroll").getChildByName("view").getChildByName("content").addChild(a), 
                    this.missionItemGroup.push(a), this.refreshItem(a), a.getChildByName("button").on(cc.Node.EventType.TOUCH_END, this.missionEvent, this);
                }
            }, t.prototype.missionEvent = function(e) {
                var t = e.target.parent, a = t.missionType, n = t.missionTarget, i = t.missionFinish, o = t.missionAward;
                if (t.missionFetchNum < t.missionMaxFetch) if (i < n) {
                    if (5 == a) {
                        var l = this;
                        r.wechat.showRewardedVideoAd().then(function(e) {
                            e && (c.DataManage.missionData[a - 1][2]++, t.missionFinish += 1, c.Utils.saveMissionData(), 
                            l.refreshItem(t));
                        }).catch(function() {});
                    } else 2 == a ? (this.node.parent.parent.getComponent("menuScene").chouka(), this.closeNode()) : 3 == a ? (this.node.parent.parent.getComponent("menuScene").pkScene(), 
                    this.closeNode()) : 4 == a && (this.node.parent.parent.getComponent("menuScene").enterStage(), 
                    this.closeNode());
                } else {
                    c.DataManage.missionData[a - 1][2] = 0, c.DataManage.missionData[a - 1][4]++;
                    for (var s = 0, h = 0; h != c.DataManage.missionData.length; h++) {
                        c.DataManage.missionData[h][4] == c.DataManage.missionData[h][5] && s++;
                    }
                    5 == s && (c.DataManage.missionData[5][2]++, this.missionItemGroup[this.missionItemGroup.length - 1].missionFinish++, 
                    this.refreshItem(this.missionItemGroup[this.missionItemGroup.length - 1])), c.Utils.saveMissionData(), 
                    t.missionFetchNum++, t.missionFinish = c.DataManage.missionData[a - 1][2], this.refreshItem(t);
                    var d = cc.instantiate(this.resultNode);
                    d.setPosition(cc.v2(0, 0)), this.node.addChild(d), d.getComponent("resultNode").initResultNode(0, 0, o), 
                    c.DataManage.gold += o, c.Utils.setLocalData();
                }
            }, t.prototype.refreshItem = function(e) {
                var t = e.missionType, a = e.missionTarget, n = e.missionFinish, i = e.missionAward, o = e.missionFetchNum, c = e.missionMaxFetch;
                e.getChildByName("missionDes").getComponent(cc.Label).string = this.missionDes[t - 1], 
                e.getChildByName("itemFrame").getChildByName("itemNum").getComponent(cc.Label).string = "" + i, 
                o < c ? n < a ? (e.getChildByName("progressLabel").getComponent(cc.Label).string = n + "/" + a, 
                e.getChildByName("progress").getComponent(cc.ProgressBar).progress = n / a, e.getChildByName("fetchLabel").getComponent(cc.Label).string = o + "/" + c, 
                e.getChildByName("button").getComponent(cc.Sprite).spriteFrame = this.scrollButtonFrame[0]) : (e.getChildByName("progress").getComponent(cc.ProgressBar).progress = 1, 
                e.getChildByName("progressLabel").getComponent(cc.Label).string = a + "/" + a, e.getChildByName("button").getComponent(cc.Sprite).spriteFrame = this.scrollButtonFrame[1], 
                e.getChildByName("fetchLabel").getComponent(cc.Label).string = o + "/" + c) : (e.getChildByName("button").getComponent(cc.Sprite).spriteFrame = this.scrollButtonFrame[1], 
                e.getChildByName("progressLabel").getComponent(cc.Label).string = a + "/" + a, e.getChildByName("progress").getComponent(cc.ProgressBar).progress = 1, 
                e.getChildByName("fetchLabel").getComponent(cc.Label).string = c + "/" + c, e.getChildByName("button").color = cc.color(100, 100, 100));
            }, o([ h(cc.Prefab) ], t.prototype, "missionItem", void 0), o([ h([ cc.SpriteFrame ]) ], t.prototype, "scrollButtonFrame", void 0), 
            o([ h(cc.Prefab) ], t.prototype, "resultNode", void 0), o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "./DataManage": "DataManage",
        "./libppgame/libwechat": "libwechat"
    } ],
    numberScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "f2dd2TSJ2xMmp6jJKUoYyZK", "numberScript");
        var _n33, i = this && this.__extends || (_n33 = function n(e, t) {
            return (_n33 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n33(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.yellowNumbers = [ null ], t.greenNumbers = [ null ], t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.setNumber = function(e, t, a) {
                if (void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === a && (a = 0), 0 == t) {
                    var n = e - 10 * (s = Math.floor(e / 10));
                    0 == a ? (this.node.getChildByName("num1").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[s], 
                    this.node.getChildByName("num2").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[n]) : (this.node.getChildByName("num1").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[s], 
                    this.node.getChildByName("num2").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[n]);
                } else {
                    if (e > 99999) {
                        var i = e;
                        i -= 1e5 * (s = Math.floor(e / 1e5)), i -= 1e4 * (n = Math.floor(i / 1e4)), i -= 1e3 * (c = Math.floor(i / 1e3));
                        var o = (i -= 100 * (r = Math.floor(i / 100))) - 10 * (l = Math.floor(i / 10));
                        0 == a ? (this.node.getChildByName("num1").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[s], 
                        this.node.getChildByName("num2").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[n], 
                        this.node.getChildByName("num3").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[c], 
                        this.node.getChildByName("num4").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[r], 
                        this.node.getChildByName("num5").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[l], 
                        this.node.getChildByName("num6").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[o]) : (this.node.getChildByName("num1").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[s], 
                        this.node.getChildByName("num2").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[n], 
                        this.node.getChildByName("num3").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[c], 
                        this.node.getChildByName("num4").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[r], 
                        this.node.getChildByName("num5").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[l], 
                        this.node.getChildByName("num6").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[o]), 
                        this.node.getChildByName("num6").active = !0;
                    } else {
                        var c, r;
                        i = e, i -= 1e4 * (s = Math.floor(e / 1e4)), i -= 1e3 * (n = Math.floor(i / 1e3)), 
                        i -= 100 * (c = Math.floor(i / 100));
                        var l = i -= 10 * (r = Math.floor(i / 10));
                        0 == a ? (this.node.getChildByName("num1").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[s], 
                        this.node.getChildByName("num2").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[n], 
                        this.node.getChildByName("num3").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[c], 
                        this.node.getChildByName("num4").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[r], 
                        this.node.getChildByName("num5").getComponent(cc.Sprite).spriteFrame = this.yellowNumbers[l]) : (this.node.getChildByName("num1").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[s], 
                        this.node.getChildByName("num2").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[n], 
                        this.node.getChildByName("num3").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[c], 
                        this.node.getChildByName("num4").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[r], 
                        this.node.getChildByName("num5").getComponent(cc.Sprite).spriteFrame = this.greenNumbers[l]), 
                        this.node.getChildByName("num6").active = !1;
                    }
                    var s = Math.floor(e / 1e5);
                }
            }, o([ l([ cc.SpriteFrame ]) ], t.prototype, "yellowNumbers", void 0), o([ l([ cc.SpriteFrame ]) ], t.prototype, "greenNumbers", void 0), 
            o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    openEnd: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "23050DIJBBLyI+xFoD1YsJA", "openEnd");
        var _n34, i = this && this.__extends || (_n34 = function n(e, t) {
            return (_n34 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n34(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = (c.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.openEnd = function() {
                this.node.getComponent(cc.Animation).play("loop");
            }, o([ r ], t);
        }(cc.Component));
        a.default = l, cc._RF.pop();
    }, {} ],
    powerChangeScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "e5481WMmVdO75KB/M0w+1j+", "powerChangeScript");
        var _n35, i = this && this.__extends || (_n35 = function n(e, t) {
            return (_n35 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n35(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.arrowImage = [ null ], t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.showPowerChange = function(e) {
                var t = Math.abs(e), a = cc.color(0, 0, 0);
                e < 0 ? (a = cc.color(242, 25, 69), this.node.getChildByName("img_up").getComponent(cc.Sprite).spriteFrame = this.arrowImage[1]) : (a = cc.color(22, 236, 17), 
                this.node.getChildByName("img_up").getComponent(cc.Sprite).spriteFrame = this.arrowImage[0]), 
                this.node.getChildByName("label1").color = a, this.node.getChildByName("label2").color = a, 
                this.node.getChildByName("label2").getComponent(cc.Label).string = "" + t;
            }, o([ l([ cc.SpriteFrame ]) ], t.prototype, "arrowImage", void 0), o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    qiandaoItem: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "c443dvP+hpEHZVjoxEdB8Hh", "qiandaoItem");
        var _n36, i = this && this.__extends || (_n36 = function n(e, t) {
            return (_n36 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n36(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = c.property, s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null, t.text = "hello", t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.setStatu = function(e) {
                this.node.getChildByName("img_box_get1") ? 0 == e ? (this.node.getChildByName("img_black_got").active = !1, 
                this.node.getChildByName("img_black_gottext").active = !1, this.node.getChildByName("img_box_get2").active = !1, 
                this.node.getChildByName("img_box_get1").active = !1, this.node.getChildByName("img_box_get3").active = !0) : 1 == e ? (this.node.getChildByName("img_black_got").active = !0, 
                this.node.getChildByName("img_black_gottext").active = !0, this.node.getChildByName("img_box_get2").active = !0, 
                this.node.getChildByName("img_box_get1").active = !1, this.node.getChildByName("img_box_get3").active = !1, 
                this.node.getChildByName("button_chaoqian").active = !1) : -1 == e ? (this.node.getChildByName("img_black_got").active = !1, 
                this.node.getChildByName("img_black_gottext").active = !1, this.node.getChildByName("img_box_get2").active = !1, 
                this.node.getChildByName("img_box_get1").active = !0, this.node.getChildByName("img_box_get3").active = !1) : 2 == e && (this.node.getChildByName("img_black_got").active = !1, 
                this.node.getChildByName("img_black_gottext").active = !1, this.node.getChildByName("img_box_get2").active = !1, 
                this.node.getChildByName("img_box_get1").active = !0, this.node.getChildByName("img_box_get3").active = !1, 
                this.node.getChildByName("button_chaoqian").active = !0) : 0 == e ? (this.node.getChildByName("img_black_got").active = !1, 
                this.node.getChildByName("img_black_gottext").active = !1) : 1 == e ? (this.node.getChildByName("img_black_got").active = !0, 
                this.node.getChildByName("img_black_gottext").active = !0, this.node.getChildByName("button_chaoqian").active = !1) : -1 == e ? (this.node.getChildByName("img_black_got").active = !1, 
                this.node.getChildByName("img_black_gottext").active = !1) : 2 == e && (this.node.getChildByName("img_black_got").active = !1, 
                this.node.getChildByName("img_black_gottext").active = !1, this.node.getChildByName("button_chaoqian").active = !0);
            }, o([ l(cc.Label) ], t.prototype, "label", void 0), o([ l ], t.prototype, "text", void 0), 
            o([ r ], t);
        }(cc.Component);
        a.default = s, cc._RF.pop();
    }, {} ],
    qiandao: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "0bad1d7UoFHv7+uTMrXfQX7", "qiandao");
        var _n37, i = this && this.__extends || (_n37 = function n(e, t) {
            return (_n37 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n37(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = e("../libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getCardPrefab = null, t.kabaoFrame = [ null ], t.signButtons = [], t.actionResult = null, 
                t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("img_windowqd").getChildByName("img_close").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode1").on(cc.Node.EventType.TOUCH_END, this.qiandao1, this), 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode2").on(cc.Node.EventType.TOUCH_END, this.qiandao2, this), 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode3").on(cc.Node.EventType.TOUCH_END, this.qiandao3, this), 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode4").on(cc.Node.EventType.TOUCH_END, this.qiandao4, this), 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode5").on(cc.Node.EventType.TOUCH_END, this.qiandao5, this), 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode6").on(cc.Node.EventType.TOUCH_END, this.qiandao6, this), 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode7").on(cc.Node.EventType.TOUCH_END, this.qiandao7, this), 
                this.node.getChildByName("resultNode").getChildByName("kabao").on(cc.Node.EventType.TOUCH_START, this.openBox, this);
                for (var e = this.node.getChildByName("img_windowqd").getChildByName("buttonNode"), t = "", a = 1; 8 != a; a++) {
                    t = "qiandaoNode" + a, this.signButtons.push(e.getChildByName(t));
                }
                this.initQiandao();
            }, t.prototype.checkButtonBeat = function() {
                for (var e = 0; e != this.signButtons.length; e++) {
                    this.signButtons[e].stopAllActions(), this.signButtons[e].scale = 1;
                }
                c.DataManage.landTimes > c.DataManage.signTimes && c.DataManage.signTimes < 7 ? c.Utils.buttonBeat(this.signButtons[c.DataManage.signTimes]) : c.DataManage.signTimes < 7 && c.Utils.buttonBeat(this.signButtons[c.DataManage.signTimes]);
            }, t.prototype.signAward = function(e) {
                1 == e ? this.drawOne(2) : 2 == e ? (this.node.getChildByName("resultNode").active = !0, 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[3], 
                this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78))))), 
                this.drawCard(4)) : 3 == e ? this.drawOne(3) : 4 == e ? (this.goldAction(e), c.DataManage.gold += 400, 
                c.Utils.setLocalData()) : 5 == e ? (this.goldAction(e), c.DataManage.gold += 600, 
                c.Utils.setLocalData()) : 6 == e ? (this.goldAction(e), c.DataManage.gold += 800, 
                c.Utils.setLocalData()) : 7 == e && (this.node.getChildByName("resultNode").active = !0, 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[3], 
                this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78))))), 
                this.drawCard(4));
            }, t.prototype.openBox = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("vs"), null != this.actionResult) {
                    this.node.getChildByName("resultNode").active = !1;
                    var e = cc.instantiate(this.getCardPrefab);
                    e.getComponent("getCardScript").initGetCardNode(this.actionResult, 4), this.node.parent.addChild(e);
                }
            }, t.prototype.goldAction = function(e) {
                var t = this, a = this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode" + e);
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("zs").setPosition(a.getPosition()), 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("zs").opacity = 255, 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("zs").scale = 1, 
                this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("zs").runAction(cc.sequence(cc.moveTo(.4, cc.v2(100, 590)).easing(cc.easeInOut(2)), cc.scaleTo(.2, 1.5), cc.spawn(cc.scaleTo(.2, .1), cc.fadeTo(.2, 0)), cc.callFunc(function() {
                    t.node.parent.getComponent("menuScene").playEffect("getDiamond");
                })));
            }, t.prototype.getDrawSpecResult = function(e) {
                var t = 0, a = 0, n = 0, i = 0;
                1 == e ? (i = 5, n = 3) : 2 == e ? (a = 2, n = 3, i = 3) : 3 == e ? (t = 1, a = 3, 
                n = 4) : 4 == e && (t = 1, a = 2, n = 2, i = 3);
                for (var o = [], r = [], l = [], s = [], h = [], d = c.DataManage.cardTemplate, u = null, g = c.DataManage.specielCards, p = !1, m = 0; m != d.length; m++) {
                    for (var f = 0; f != g.length; f++) {
                        if (d[m][0] == g[f]) {
                            p = !0;
                            break;
                        }
                    }
                    p || (1 == (u = d[m])[3] ? h.push(d[m]) : 2 == u[3] ? s.push(d[m]) : 3 == u[3] ? l.push(d[m]) : 4 == u[3] && r.push(d[m]));
                }
                var y = -1;
                for (m = 0; m != t; m++) {
                    y = c.Utils.randomNum(0, r.length - 1), o.push(r[y]);
                }
                for (m = 0; m != a; m++) {
                    y = c.Utils.randomNum(0, l.length - 1), o.push(l[y]);
                }
                for (m = 0; m != n; m++) {
                    y = c.Utils.randomNum(0, s.length - 1), o.push(s[y]);
                }
                for (m = 0; m != i; m++) {
                    y = c.Utils.randomNum(0, h.length - 1), o.push(h[y]);
                }
                if (4 == e) {
                    var C = c.Utils.randomNum(0, 99);
                    if (C < 20) {
                        for (m = 0; m != o.length; m++) {
                            if (4 == o[m][3]) {
                                o[m] = [ 1043, "猛犸象", 1, 4, "RU", 136e3, 127e3 ], c.Utils.checkSpecNew(1043);
                                break;
                            }
                        }
                    } else if (C < 45) {
                        for (m = 0; m != o.length; m++) {
                            if (3 == o[m][3]) {
                                o[m] = [ 1045, "赤焰黑虎", 1, 3, "MZ", 11e4, 111e3 ], c.Utils.checkSpecNew(1045);
                                break;
                            }
                        }
                    } else if (C < 70) {
                        for (m = 0; m != o.length; m++) {
                            if (2 == o[m][3]) {
                                o[m] = [ 1048, "黑狮", 1, 2, "ES", 99e3, 92e3 ], c.Utils.checkSpecNew(1048);
                                break;
                            }
                        }
                    } else for (m = 0; m != o.length; m++) {
                        if (1 == o[m][3]) {
                            o[m] = [ 1026, "大熊猫", 1, 1, "CN", 88e3, 85e3 ], c.Utils.checkSpecNew(1026);
                            break;
                        }
                    }
                }
                return o.sort(function() {
                    return Math.random() - .5;
                }), o;
            }, t.prototype.drawCard = function(e) {
                for (var t = this.getDrawSpecResult(e), a = null, n = 0; n != t.length; n++) {
                    a = c.Utils.getCardInfo(t[n][0]);
                    for (var i = 0; i != c.DataManage.cardData.length; i++) {
                        if (c.DataManage.cardData[i][0] == a[0] && (c.DataManage.cardData[i][1]++, c.DataManage.cardData[i][1] > 10)) {
                            var o = 0, r = c.Utils.getCardTemplate(a[0]);
                            4 == r[3] ? o = 50 : 3 == r[3] ? o = 20 : 2 == r[3] ? o = 10 : 1 == r[3] && (o = 5), 
                            c.DataManage.gold += o;
                        }
                    }
                }
                c.Utils.saveCardData(), this.actionResult = t;
            }, t.prototype.drawOne = function(e) {
                for (var t = [], a = [], n = [], i = [], o = [], r = c.DataManage.cardTemplate, l = null, s = c.DataManage.specielCards, h = !1, d = 0; d != r.length; d++) {
                    for (var u = 0; u != s.length; u++) {
                        if (r[d][0] == s[u]) {
                            h = !0;
                            break;
                        }
                    }
                    h || (1 == (l = r[d])[3] ? o.push(r[d]) : 2 == l[3] ? i.push(r[d]) : 3 == l[3] ? n.push(r[d]) : 4 == l[3] && a.push(r[d]));
                }
                var g = -1;
                1 == e ? (g = c.Utils.randomNum(0, o.length - 1), t.push(o[g])) : 2 == e ? (g = c.Utils.randomNum(0, i.length - 1), 
                t.push(i[g])) : 3 == e ? (g = c.Utils.randomNum(0, n.length - 1), t.push(n[g])) : 4 == e && (g = c.Utils.randomNum(0, a.length - 1), 
                t.push(a[g]));
                var p = null;
                for (d = 0; d != t.length; d++) {
                    for (p = c.Utils.getCardInfo(t[d][0]), u = 0; u != c.DataManage.cardData.length; u++) {
                        if (c.DataManage.cardData[u][0] == p[0] && (c.DataManage.cardData[u][1]++, c.DataManage.cardData[u][1] > 10)) {
                            var m = 0, f = c.Utils.getCardTemplate(p[0]);
                            4 == f[3] ? m = 50 : 3 == f[3] ? m = 20 : 2 == f[3] ? m = 10 : 1 == f[3] && (m = 5), 
                            c.DataManage.gold += m;
                        }
                    }
                }
                c.Utils.saveCardData(), console.log("  show   get Card  node  !!!");
                var y = cc.instantiate(this.getCardPrefab);
                y.getComponent("getCardScript").initGetCardNode(t, 4), this.node.parent.addChild(y);
            }, t.prototype.initQiandao = function() {
                for (var e = c.DataManage.landTimes, t = c.DataManage.signTimes, a = !1, n = 1; 8 != n; n++) {
                    n < t + 1 ? this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode" + n).getComponent("qiandaoItem").setStatu(1) : n == t + 1 && e + 1 > n ? (this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode" + n).getComponent("qiandaoItem").setStatu(0), 
                    a = !0) : 0 == a && n == t + 1 ? this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode" + n).getComponent("qiandaoItem").setStatu(2) : this.node.getChildByName("img_windowqd").getChildByName("buttonNode").getChildByName("qiandaoNode" + n).getComponent("qiandaoItem").setStatu(-1);
                }
                this.checkButtonBeat();
            }, t.prototype.qiandao7 = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("click"), c.DataManage.landTimes > 6 && 6 == c.DataManage.signTimes) c.DataManage.signTimes++, 
                c.Utils.saveSign(), this.initQiandao(), this.signAward(c.DataManage.signTimes); else if (6 == c.DataManage.signTimes && 6 == c.DataManage.landTimes) {
                    var e = this;
                    r.wechat.showRewardedVideoAd().then(function(t) {
                        t && (c.DataManage.signTimes++, c.DataManage.landTimes++, cc.sys.localStorage.setItem("landTimes", c.DataManage.landTimes), 
                        c.Utils.saveSign(), e.initQiandao(), e.signAward(c.DataManage.signTimes));
                    }).catch(function() {});
                }
            }, t.prototype.qiandao6 = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("click"), c.DataManage.landTimes > 5 && 5 == c.DataManage.signTimes) c.DataManage.signTimes++, 
                c.Utils.saveSign(), this.initQiandao(), this.signAward(c.DataManage.signTimes); else if (5 == c.DataManage.signTimes && 5 == c.DataManage.landTimes) {
                    var e = this;
                    r.wechat.showRewardedVideoAd().then(function(t) {
                        t && (c.DataManage.signTimes++, c.DataManage.landTimes++, cc.sys.localStorage.setItem("landTimes", c.DataManage.landTimes), 
                        c.Utils.saveSign(), e.initQiandao(), e.signAward(c.DataManage.signTimes));
                    }).catch(function() {});
                }
            }, t.prototype.qiandao5 = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("click"), c.DataManage.landTimes > 4 && 4 == c.DataManage.signTimes) c.DataManage.signTimes++, 
                c.Utils.saveSign(), this.initQiandao(), this.signAward(c.DataManage.signTimes); else if (4 == c.DataManage.signTimes && 4 == c.DataManage.landTimes) {
                    var e = this;
                    r.wechat.showRewardedVideoAd().then(function(t) {
                        t && (c.DataManage.signTimes++, c.DataManage.landTimes++, cc.sys.localStorage.setItem("landTimes", c.DataManage.landTimes), 
                        c.Utils.saveSign(), e.initQiandao(), e.signAward(c.DataManage.signTimes));
                    }).catch(function() {});
                }
            }, t.prototype.qiandao4 = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("click"), c.DataManage.landTimes > 3 && 3 == c.DataManage.signTimes) c.DataManage.signTimes++, 
                c.Utils.saveSign(), this.initQiandao(), this.signAward(c.DataManage.signTimes); else if (3 == c.DataManage.signTimes && 3 == c.DataManage.landTimes) {
                    var e = this;
                    r.wechat.showRewardedVideoAd().then(function(t) {
                        t && (c.DataManage.signTimes++, c.DataManage.landTimes++, cc.sys.localStorage.setItem("landTimes", c.DataManage.landTimes), 
                        c.Utils.saveSign(), e.initQiandao(), e.signAward(c.DataManage.signTimes));
                    }).catch(function() {});
                }
            }, t.prototype.qiandao3 = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("click"), c.DataManage.landTimes > 2 && 2 == c.DataManage.signTimes) c.DataManage.signTimes++, 
                c.Utils.saveSign(), this.initQiandao(), this.signAward(c.DataManage.signTimes); else if (2 == c.DataManage.signTimes && 2 == c.DataManage.landTimes) {
                    var e = this;
                    r.wechat.showRewardedVideoAd().then(function(t) {
                        t && (c.DataManage.signTimes++, c.DataManage.landTimes++, cc.sys.localStorage.setItem("landTimes", c.DataManage.landTimes), 
                        c.Utils.saveSign(), e.initQiandao(), e.signAward(c.DataManage.signTimes));
                    }).catch(function() {});
                }
            }, t.prototype.qiandao2 = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("click"), c.DataManage.landTimes > 1 && 1 == c.DataManage.signTimes) c.DataManage.signTimes++, 
                c.Utils.saveSign(), this.initQiandao(), this.signAward(c.DataManage.signTimes); else if (1 == c.DataManage.signTimes && 1 == c.DataManage.landTimes) {
                    var e = this;
                    r.wechat.showRewardedVideoAd().then(function(t) {
                        t && (c.DataManage.signTimes++, c.DataManage.landTimes++, cc.sys.localStorage.setItem("landTimes", c.DataManage.landTimes), 
                        c.Utils.saveSign(), e.initQiandao(), e.signAward(c.DataManage.signTimes));
                    }).catch(function() {});
                }
            }, t.prototype.qiandao1 = function() {
                this.node.parent.getComponent("menuScene").playEffect("click"), c.DataManage.landTimes > 0 && 0 == c.DataManage.signTimes && (c.DataManage.signTimes++, 
                c.Utils.saveSign(), this.initQiandao(), this.signAward(c.DataManage.signTimes));
            }, t.prototype.closeNode = function() {
                this.node.parent.getComponent("menuScene").updateActivePoint(), this.node.parent.getComponent("menuScene").playEffect("click");
                var e = this;
                this.node.getChildByName("img_windowqd").runAction(cc.sequence(cc.scaleTo(.2, 0), cc.callFunc(function() {
                    e.node.active = !1;
                })));
            }, t.prototype.openAction = function() {
                this.node.getChildByName("img_windowqd").scale = 0, this.node.getChildByName("img_windowqd").runAction(cc.scaleTo(.2, 1));
            }, o([ h(cc.Prefab) ], t.prototype, "getCardPrefab", void 0), o([ h([ cc.SpriteFrame ]) ], t.prototype, "kabaoFrame", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "../DataManage": "DataManage",
        "../libppgame/libwechat": "libwechat"
    } ],
    resultNode: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "d84c07kaUxPJJ0dQwd5T5Xu", "resultNode");
        var _n38, i = this && this.__extends || (_n38 = function n(e, t) {
            return (_n38 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n38(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = e("../gamewall"), l = e("../libppgame/libwechat"), s = e("../libppgame/WXGameWall"), h = cc._decorator, d = h.ccclass, u = h.property, g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.tittles = [ null ], t.battleType = 0, t.getGold = 0, t.game_wall = null, 
                t;
            }
            return i(t, e), t.prototype.start = function() {
                r.default.init([ "adunit-1d070146e75ec295", "adunit-2a930d4fde15a1a2" ]), this.node.getChildByName("button_double").on(cc.Node.EventType.TOUCH_END, this.doubleFetch, this), 
                this.node.getChildByName("fontButton").on(cc.Node.EventType.TOUCH_END, this.normalFetch, this), 
                this.node.getChildByName("button_gochouka").on(cc.Node.EventType.TOUCH_END, this.goDrawCard, this), 
                this.node.getChildByName("fontButton2").on(cc.Node.EventType.TOUCH_END, this.exitBattle, this);
            }, t.prototype.goDrawCard = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play(), cc.director.loadScene("menuScene", function() {
                    cc.director.getScene().getChildByName("Canvas").getComponent("menuScene").chouka();
                });
            }, t.prototype.normalFetch = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play(), this.exitBattle();
            }, t.prototype.doubleFetch = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play();
                var e = this;
                l.wechat.showRewardedVideoAd().then(function(t) {
                    t && (c.DataManage.gold += e.getGold, c.Utils.setLocalData(), e.exitBattle());
                }).catch(function() {});
            }, t.prototype.exitBattle = function() {
                l.wechat.hideBannerAd(), s.wechatGameWall.hideLine(), this.node.getChildByName("click").getComponent(cc.AudioSource).play(), 
                1 == this.battleType ? cc.director.loadScene("stageScene") : 2 == this.battleType ? cc.director.loadScene("menuScene", function() {
                    cc.director.getScene().getChildByName("Canvas").getComponent("menuScene").pkScene();
                }) : 0 == this.battleType && (l.wechat.showGridAd2(), this.node.runAction(cc.removeSelf()));
            }, t.prototype.initResultNode = function(e, t, a) {
                window.showEnd();
                if (void 0 === a && (a = 0), this.getGold = a, this.battleType = e, 1 == t ? (this.node.getChildByName("win").getComponent(cc.AudioSource).play(), 
                this.node.getChildByName("fontButton").active = !0, this.node.getChildByName("itemFrame").active = !0, 
                this.node.getChildByName("button_double").active = !0, this.node.getChildByName("img_losepic").active = !1, 
                this.node.getChildByName("img_losetext").active = !1, this.node.getChildByName("button_gochouka").active = !1, 
                this.node.getChildByName("fontButton2").active = !1, this.node.getChildByName("tittle").active = !1, 
                this.node.getChildByName("Eff_victory").active = !0, this.node.getChildByName("Eff_victory").getComponent(cc.Animation).play("anim_victory"), 
                this.node.getComponent(cc.Animation).play("shengli")) : 2 == t ? (s.wechatGameWall.showLine(), 
                l.wechat.showBannerAd(), this.node.getChildByName("lose").getComponent(cc.AudioSource).play(), 
                this.node.getChildByName("tittle").active = !0, this.node.getChildByName("tittle").getComponent(cc.Sprite).spriteFrame = this.tittles[t], 
                this.node.getChildByName("fontButton").active = !1, this.node.getChildByName("itemFrame").active = !1, 
                this.node.getChildByName("button_double").active = !1, this.node.getChildByName("img_losepic").active = !0, 
                this.node.getChildByName("img_losetext").active = !0, this.node.getChildByName("button_gochouka").active = !0, 
                this.node.getChildByName("fontButton2").active = !0, this.node.getChildByName("img_losepic").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1))))) : (s.wechatGameWall.showLine(), 
                l.wechat.showBannerAd(), this.node.getChildByName("getDiamond").getComponent(cc.AudioSource).play(), 
                this.node.getChildByName("tittle").active = !0, this.node.getChildByName("itemFrame").scale = 0, 
                this.node.getChildByName("itemFrame").runAction(cc.scaleTo(.4, 1))), this.node.getChildByName("itemFrame").getChildByName("itemNum").getComponent(cc.Label).string = "" + a, 
                0 == t && (this.battleType = 0), (1 == e || 2 == e) && (l.wechat.hideBannerAd(), 
                console.log(" _is_review is " + l.wechat._is_review), !l.wechat._is_review)) {
                    if (0) this.node.getChildByName("adBox").getComponent("adBox").adBoxShow(cc.v2(0, 0)); else if (c.DataManage.backTimes > 0) {
                        var n = l.wechat.getConfig("new_gamewall") || !1;
                        console.log(" newgamewall is " + n), n && this.onBtnShowGameWall();
                    }
                    c.DataManage.backTimes++;
                }
            }, t.prototype.onBtnShowGameWall = function() {
                var e = this, t = 0/* l.wechat.getConfig("new_gamewall") || !1 */;
                console.log(" newgamewall is " + t), !l.wechat._is_review && t && (l.wechat.hideGridAd2(), 
                l.wechat.showBannerAd(), console.log("OnBtnShowGameWall", !!this.game_wall), this.game_wall ? this.game_wall.show() : r.default.load().then(function(t) {
                    console.log("gamewall loaded"), e.game_wall = t.getComponent("gamewall"), e.node.addChild(t), 
                    e.game_wall.show();
                }).catch(function(e) {
                    console.log("load fail", e);
                }));
            }, o([ u([ cc.SpriteFrame ]) ], t.prototype, "tittles", void 0), o([ d ], t);
        }(cc.Component);
        a.default = g, cc._RF.pop();
    }, {
        "../DataManage": "DataManage",
        "../gamewall": "gamewall",
        "../libppgame/WXGameWall": "WXGameWall",
        "../libppgame/libwechat": "libwechat"
    } ],
    setTeamNode: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "daa5c2mmGhMzJwyckuJpcRS", "setTeamNode");
        var _n39, i = this && this.__extends || (_n39 = function n(e, t) {
            return (_n39 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n39(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = e("../libppgame/libwechat"), l = e("../libppgame/WXGameWall"), s = cc._decorator, h = s.ccclass, d = s.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.adSprite = [ null ], t.text = "hello", t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("bg").getChildByName("img_return").on(cc.Node.EventType.TOUCH_END, this.backEvent, this), 
                this.node.getChildByName("bg").getChildByName("zhandou").on(cc.Node.EventType.TOUCH_END, this.enterBattle, this), 
                this.node.getChildByName("bg").getChildByName("zuiqiang").on(cc.Node.EventType.TOUCH_END, this.bestTeam, this), 
                this.node.getChildByName("bg").getChildByName("setButton1").on(cc.Node.EventType.TOUCH_END, this.changeCard1, this), 
                this.node.getChildByName("bg").getChildByName("setButton2").on(cc.Node.EventType.TOUCH_END, this.changeCard2, this), 
                this.node.getChildByName("bg").getChildByName("setButton3").on(cc.Node.EventType.TOUCH_END, this.changeCard3, this), 
                l.wechatGameWall.hideLine(), 3 == c.DataManage.guideStep ? (this.node.getChildByName("bg").getChildByName("zuiqiang").getComponent(cc.Sprite).spriteFrame = this.adSprite[0], 
                this.node.parent.getChildByName("guideNode").getChildByName("guide1").active = !1, 
                this.node.parent.getChildByName("guideNode").getChildByName("guide2").active = !0, 
                this.node.parent.getChildByName("guideNode").getChildByName("guide2").getChildByName("img_sz").getComponent(cc.Animation).play("handAnimation"), 
                c.DataManage.guideStep = 4, this.node.parent.getChildByName("guideNode").zIndex = 2, 
                this.node.zIndex = 1) : this.node.getChildByName("bg").getChildByName("zuiqiang").getComponent(cc.Sprite).spriteFrame = this.adSprite[1];
            }, t.prototype.changeCard1 = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play(), this.node.getChildByName("changeCardNode").active = !0, 
                this.node.getChildByName("changeCardNode").getComponent("changeCardScript").refreshChangeCardScroll(0);
            }, t.prototype.changeCard2 = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play(), this.node.getChildByName("changeCardNode").active = !0, 
                this.node.getChildByName("changeCardNode").getComponent("changeCardScript").refreshChangeCardScroll(1);
            }, t.prototype.changeCard3 = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play(), this.node.getChildByName("changeCardNode").active = !0, 
                this.node.getChildByName("changeCardNode").getComponent("changeCardScript").refreshChangeCardScroll(2);
            }, t.prototype.backEvent = function() {
                1 == c.DataManage.battleType && l.wechatGameWall.showLine(), this.node.getChildByName("click").getComponent(cc.AudioSource).play(), 
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.removeSelf()));
            }, t.prototype.enterBattle = function() {
                var e = this;
                1 ? (this.node.getChildByName("click").getComponent(cc.AudioSource).play(), 
                cc.director.loadScene("battleScene", function() {
                    for (var e = c.DataManage.enemyData, t = [], a = null, n = 0; n != c.DataManage.battleTeam.length; n++) {
                        a = c.Utils.getCardInfo(c.DataManage.battleTeam[n]), t.push([ a[0], a[1] ]);
                    }
                    cc.director.getScene().getChildByName("Canvas").getComponent("battleScene").initBattle(t, e, c.DataManage.battleType, c.DataManage.battleStageOrPosi);
                })) : r.wechat.showRewardedVideoAd().then(function() {
                    e.node.getChildByName("click").getComponent(cc.AudioSource).play(), cc.director.loadScene("battleScene", function() {
                        for (var e = c.DataManage.enemyData, t = [], a = null, n = 0; n != c.DataManage.battleTeam.length; n++) {
                            a = c.Utils.getCardInfo(c.DataManage.battleTeam[n]), t.push([ a[0], a[1] ]);
                        }
                        cc.director.getScene().getChildByName("Canvas").getComponent("battleScene").initBattle(t, e, c.DataManage.battleType, c.DataManage.battleStageOrPosi);
                    });
                }).catch(function(t) {
                    t.errCode, e.node.getChildByName("click").getComponent(cc.AudioSource).play(), cc.director.loadScene("battleScene", function() {
                        for (var e = c.DataManage.enemyData, t = [], a = null, n = 0; n != c.DataManage.battleTeam.length; n++) {
                            a = c.Utils.getCardInfo(c.DataManage.battleTeam[n]), t.push([ a[0], a[1] ]);
                        }
                        cc.director.getScene().getChildByName("Canvas").getComponent("battleScene").initBattle(t, e, c.DataManage.battleType, c.DataManage.battleStageOrPosi);
                    });
                });
            }, t.prototype.bestTeam = function() {
                var e = this;
                if (4 == c.DataManage.guideStep) {
                    for (var t = [], a = c.DataManage.cardData, n = 0; n != a.length; n++) {
                        a[n][1] > 0 && t.push(a[n]);
                    }
                    t.sort(function(e, t) {
                        return c.Utils.getCardPower(t[0]) - c.Utils.getCardPower(e[0]);
                    });
                    var i = 0;
                    for (n = 0; n != t.length && !(4 == c.Utils.getCardTemplate(t[n][0])[3] && (c.DataManage.battleTeam[i] = t[n][0], 
                    ++i > 2)); n++) {}
                    if (i < 3) for (n = 0; n != t.length && !(3 == c.Utils.getCardTemplate(t[n][0])[3] && (c.DataManage.battleTeam[i] = t[n][0], 
                    ++i > 2)); n++) {}
                    if (i < 3) for (n = 0; n != t.length && !(2 == c.Utils.getCardTemplate(t[n][0])[3] && (c.DataManage.battleTeam[i] = t[n][0], 
                    ++i > 2)); n++) {}
                    if (i < 3) for (n = 0; n != t.length && !(1 == c.Utils.getCardTemplate(t[n][0])[3] && (c.DataManage.battleTeam[i] = t[n][0], 
                    ++i > 2)); n++) {}
                    c.Utils.setTeamData(), e.refreshMyCards(), c.DataManage.guideStep < 5 && (this.node.parent.getChildByName("guideNode").getChildByName("guide2").active = !1, 
                    this.node.parent.getChildByName("guideNode").getChildByName("guide3").active = !0, 
                    this.node.parent.getChildByName("guideNode").getChildByName("guide3").getChildByName("img_sz").getComponent(cc.Animation).play("handAnimation"), 
                    c.DataManage.guideStep = 5, c.Utils.saveGuideStep());
                } else r.wechat.showRewardedVideoAd().then(function(t) {
                    if (t) {
                        for (var a = [], n = c.DataManage.cardData, i = 0; i != n.length; i++) {
                            n[i][1] > 0 && a.push(n[i]);
                        }
                        a.sort(function(e, t) {
                            return c.Utils.getCardPower(t[0]) - c.Utils.getCardPower(e[0]);
                        });
                        var o = 0;
                        for (i = 0; i != a.length && !(4 == c.Utils.getCardTemplate(a[i][0])[3] && (c.DataManage.battleTeam[o] = a[i][0], 
                        ++o > 2)); i++) {}
                        if (o < 3) for (i = 0; i != a.length && !(3 == c.Utils.getCardTemplate(a[i][0])[3] && (c.DataManage.battleTeam[o] = a[i][0], 
                        ++o > 2)); i++) {}
                        if (o < 3) for (i = 0; i != a.length && !(2 == c.Utils.getCardTemplate(a[i][0])[3] && (c.DataManage.battleTeam[o] = a[i][0], 
                        ++o > 2)); i++) {}
                        if (o < 3) for (i = 0; i != a.length && !(1 == c.Utils.getCardTemplate(a[i][0])[3] && (c.DataManage.battleTeam[o] = a[i][0], 
                        ++o > 2)); i++) {}
                        c.Utils.setTeamData(), e.refreshMyCards();
                    }
                }).catch(function() {});
                this.node.getChildByName("click").getComponent(cc.AudioSource).play();
            }, t.prototype.initSetTeamNode = function(e, t, a) {
                void 0 === a && (a = 0), c.DataManage.battleType = t, c.DataManage.battleStageOrPosi = a, 
                3 == e.length ? (this.node.getChildByName("bg").getChildByName("cards").getChildByName("cardNode1").getComponent("cardScript").initCard(e[0][0]), 
                this.node.getChildByName("bg").getChildByName("cards").getChildByName("cardNode2").getComponent("cardScript").initCard(e[1][0]), 
                this.node.getChildByName("bg").getChildByName("cards").getChildByName("cardNode3").getComponent("cardScript").initCard(e[2][0])) : 2 == e.length ? (this.node.getChildByName("bg").getChildByName("cards").getChildByName("cardNode1").getComponent("cardScript").initCard(e[0][0]), 
                this.node.getChildByName("bg").getChildByName("cards").getChildByName("cardNode2").active = !1, 
                this.node.getChildByName("bg").getChildByName("cards").getChildByName("cardNode3").getComponent("cardScript").initCard(e[1][0])) : 1 == e.length && (this.node.getChildByName("bg").getChildByName("cards").getChildByName("cardNode1").active = !1, 
                this.node.getChildByName("bg").getChildByName("cards").getChildByName("cardNode2").getComponent("cardScript").initCard(e[0][0]), 
                this.node.getChildByName("bg").getChildByName("cards").getChildByName("cardNode3").active = !1);
                var n = null, i = 0;
                if (1 == t) {
                    var o = 2 + .015 * a, r = [ 0, 0, 0 ], l = [ 0, 1.4, 1.3, 1.2, 1 ];
                    3 == e.length ? r = [ .3, .4, .3 ] : 2 == e.length ? r = [ .5, .5, 0 ] : 1 == e.length && (r = [ 1, 0, 0 ]);
                    for (var s = 0; s != e.length; s++) {
                        if (null == e[s]) ; else {
                            n = c.Utils.getCardTemplate(e[s][0]);
                            var h = parseInt("" + n[3]), d = (u = parseInt("" + n[5])) + (g = parseInt("" + n[6]));
                            d *= l[h], i += d = Math.floor(d * r[s] * o);
                        }
                    }
                } else for (s = 0; s != e.length; s++) {
                    n = c.Utils.getCardTemplate(e[s][0]);
                    var u = parseInt("" + n[5]), g = parseInt("" + n[6]);
                    i += Math.floor(u * (1 + .05 * e[s][1])), i += Math.floor(g * (1 + .05 * e[s][1]));
                }
                this.node.getChildByName("bg").getChildByName("img_diren").getChildByName("powerLabel").getComponent(cc.Label).string = "" + i, 
                this.refreshMyCards();
            }, t.prototype.refreshMyCards = function() {
                var e = null, t = 0, a = c.DataManage.battleTeam;
                if (0 != a[0] && 0 != a[1] && 0 != a[2]) {
                    for (var n = [ null, null, null ], i = null, o = 0; o != a.length; o++) {
                        i = c.Utils.getCardInfo(a[o]), n[o] = i;
                    }
                    for (o = 0; o != n.length; o++) {
                        e = c.Utils.getCardTemplate(n[o][0]);
                        var r = parseInt("" + e[5]), l = parseInt("" + e[6]);
                        t += Math.floor(r * (1 + .05 * n[o][1])), t += Math.floor(l * (1 + .05 * n[o][1]));
                        var s = "cardNode" + (o + 4);
                        this.node.getChildByName("bg").getChildByName("cards").getChildByName(s).getComponent("cardScript").initCard(n[o][0]);
                    }
                    this.node.getChildByName("bg").getChildByName("img_wofang").getChildByName("powerLabel").getComponent(cc.Label).string = "" + t;
                }
            }, o([ d([ cc.SpriteFrame ]) ], t.prototype, "adSprite", void 0), o([ d ], t.prototype, "text", void 0), 
            o([ h ], t);
        }(cc.Component);
        a.default = u, cc._RF.pop();
    }, {
        "../DataManage": "DataManage",
        "../libppgame/WXGameWall": "WXGameWall",
        "../libppgame/libwechat": "libwechat"
    } ],
    specMenu: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "16598U5UTtEr4Tr3Ur/x0Jx", "specMenu");
        var _n40, i = this && this.__extends || (_n40 = function n(e, t) {
            return (_n40 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n40(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = cc._decorator, l = r.ccclass, s = r.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buttonSpriteFrame = [ null ], t.unLockNum = 0, t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("img_windowqd").getChildByName("img_close").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                this.node.getChildByName("img_windowqd").getChildByName("button_getjl").on(cc.Node.EventType.TOUCH_END, this.fetch, this);
            }, t.prototype.openAction = function() {
                this.node.getChildByName("img_windowqd").scale = 0, this.node.getChildByName("img_windowqd").runAction(cc.scaleTo(.2, 1));
            }, t.prototype.fetch = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("click"), 0 == c.DataManage.specMenuFectch && 4 == this.unLockNum) {
                    var e = this, t = this.node.getChildByName("img_windowqd").getChildByName("button_getjl");
                    this.node.getChildByName("img_windowqd").getChildByName("zs").setPosition(t.getPosition()), 
                    this.node.getChildByName("img_windowqd").getChildByName("zs").opacity = 255, this.node.getChildByName("img_windowqd").getChildByName("zs").scale = 1, 
                    this.node.getChildByName("img_windowqd").getChildByName("zs").runAction(cc.sequence(cc.moveTo(.4, cc.v2(100, 528)).easing(cc.easeInOut(2)), cc.scaleTo(.2, 1.5), cc.spawn(cc.scaleTo(.2, .1), cc.fadeTo(.2, 0)), cc.callFunc(function() {
                        e.node.parent.getComponent("menuScene").playEffect("getDiamond");
                    }))), c.DataManage.gold += 2e4, c.Utils.setLocalData(), c.DataManage.specMenuFectch = 1, 
                    c.Utils.setSepcMenuFecth(), t.getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame[1];
                } else 0 == c.DataManage.specMenuFectch ? c.Utils.showNotice("卡册未集满") : c.Utils.showNotice("已领取");
            }, t.prototype.closeNode = function() {
                c.DataManage.specNew = 0, this.node.parent.getComponent("menuScene").updateActivePoint(), 
                this.node.parent.getComponent("menuScene").playEffect("click");
                var e = this;
                this.node.getChildByName("img_windowqd").runAction(cc.sequence(cc.scaleTo(.2, 0), cc.callFunc(function() {
                    e.node.active = !1;
                })));
            }, t.prototype.refreshSpecMenu = function() {
                for (var e = [], t = null, a = 0; a != c.DataManage.specielCards.length; a++) {
                    (t = c.Utils.getCardInfo(c.DataManage.specielCards[a]))[1] > 0 && e.push(t);
                }
                var n = this.node.getChildByName("img_windowqd").getChildByName("cardNode"), i = "";
                for (a = 1; 5 != a; a++) {
                    i = "card" + a, n.getChildByName(i).getChildByName("cardNode").active = !1;
                }
                for (a = 0; a != e.length; a++) {
                    i = "card" + (a + 1), n.getChildByName(i).getChildByName("cardNode").getComponent("cardScript").initCard(e[a][0]), 
                    n.getChildByName(i).getChildByName("cardNode").active = !0;
                }
                4 == e.length && 0 == c.DataManage.specMenuFectch ? (this.unLockNum = 4, this.node.getChildByName("img_windowqd").getChildByName("button_getjl").getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame[0]) : e.length < 4 && (this.node.getChildByName("img_windowqd").getChildByName("button_getjl").getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame[1]), 
                this.node.getChildByName("img_windowqd").getChildByName("menuProgress").getComponent(cc.ProgressBar).progress = e.length / 4, 
                this.node.getChildByName("img_windowqd").getChildByName("progressLabel").getComponent(cc.Label).string = e.length + " / 4";
            }, o([ s([ cc.SpriteFrame ]) ], t.prototype, "buttonSpriteFrame", void 0), o([ l ], t);
        }(cc.Component);
        a.default = h, cc._RF.pop();
    }, {
        "../DataManage": "DataManage"
    } ],
    stageButtons: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "0e1e4JGYn5IHobocVO6wdBz", "stageButtons");
        var _n41, i = this && this.__extends || (_n41 = function n(e, t) {
            return (_n41 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n41(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = cc._decorator, l = r.ccclass, s = r.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.stageName = null, t.buttonFrames = [ null ], t.teamSetPrefab = null, t.cardBg = [ null ], 
                t.cardQuality = [ null ], t.cardFrame = [ null ], t.enemyTeam = null, t.stage = 0, 
                t.color1 = cc.color(26, 247, 255), t.color2 = cc.color(255, 51, 85), t;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.initStage = function(e) {
                this.stage = e;
                var t = c.DataManage.stageTemplate[e];
                this.stageName.getComponent(cc.Label).string = t[0] + "." + t[1], this.enemyTeam = t[2];
                var a = c.DataManage.stage;
                if (e < a) this.node.getChildByName("button").getComponent(cc.Sprite).spriteFrame = this.buttonFrames[0], 
                this.node.getChildByName("kuangzi1").active = !1, this.node.getChildByName("kuangzi2").active = !1, 
                this.node.on(cc.Node.EventType.TOUCH_END, this.openTeamSet, this), this.node.getChildByName("img_ywc").active = !0; else {
                    if (null != t[4]) {
                        this.node.getChildByName("smallCardNode").active = !0;
                        var n = [];
                        n.push({
                            path: "cardBattle/cards/" + t[4],
                            type: cc.SpriteFrame
                        });
                        var i = this;
                        cc.assetManager.loadAny(n, {
                            bundle: "resources"
                        }, null, function(e, t) {
                            i.node && (i.node.getChildByName("smallCardNode").getChildByName("cardMask").getChildByName("card").getComponent(cc.Sprite).spriteFrame = t);
                        });
                        var o = c.Utils.getCardTemplate(t[4]), r = parseInt("" + o[2]), l = parseInt("" + o[3]);
                        this.node.getChildByName("smallCardNode").getChildByName("frame").getComponent(cc.Sprite).spriteFrame = this.cardFrame[l - 1], 
                        this.node.getChildByName("smallCardNode").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.cardBg[r - 1], 
                        this.node.getChildByName("smallCardNode").getChildByName("quality").getComponent(cc.Sprite).spriteFrame = this.cardQuality[l - 1];
                    }
                    e > a ? (this.node.getChildByName("button").getComponent(cc.Sprite).spriteFrame = this.buttonFrames[2], 
                    this.node.getComponent(cc.Button).interactable = !1) : e == a && (this.node.getChildByName("button").getComponent(cc.Sprite).spriteFrame = this.buttonFrames[1], 
                    this.node.on(cc.Node.EventType.TOUCH_END, this.openTeamSet, this), this.node.getChildByName("img_sz").active = !0, 
                    this.node.getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.25, 20), cc.rotateTo(.25, 0), cc.delayTime(.4)))), 
                    this.node.getChildByName("button").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1)))));
                }
                this.node.getChildByName("kuangzi1").getChildByName("goldLabel").getComponent(cc.Label).string = "x" + t[3];
                var s = 0, h = 2 + .015 * e, d = [ 0, 0, 0 ], u = [ 0, 1.4, 1.3, 1.2, 1 ], g = null;
                3 == this.enemyTeam.length ? d = [ .3, .4, .3 ] : 2 == this.enemyTeam.length ? d = [ .5, .5, 0 ] : 1 == this.enemyTeam.length && (d = [ 1, 0, 0 ]);
                for (var p = 0; p != this.enemyTeam.length; p++) {
                    if (null == this.enemyTeam[p]) ; else {
                        g = c.Utils.getCardTemplate(this.enemyTeam[p]), l = parseInt("" + g[3]);
                        var m = parseInt("" + g[5]) + parseInt("" + g[6]);
                        m *= u[l], s += m = Math.floor(m * d[p] * h);
                    }
                }
                this.node.getChildByName("kuangzi2").getChildByName("powerLabel").getComponent(cc.Label).string = "战力:" + s, 
                s > c.DataManage.myTeamPower ? this.node.getChildByName("kuangzi2").getChildByName("powerLabel").color = this.color2 : this.node.getChildByName("kuangzi2").getChildByName("powerLabel").color = this.color1;
            }, t.prototype.openTeamSet = function() {
                this.node.getChildByName("click").getComponent(cc.AudioSource).play(), c.DataManage.enemyData = this.enemyTeam;
                for (var e = [], t = 0; t != c.DataManage.enemyData.length; t++) {
                    e.push([ c.DataManage.enemyData[t], 1 ]);
                }
                c.DataManage.enemyData = e;
                var a = cc.instantiate(this.teamSetPrefab);
                a.setPosition(cc.v2(0, 0)), a.getComponent("setTeamNode").initSetTeamNode(e, 1, this.stage), 
                cc.director.getScene().getChildByName("Canvas").addChild(a);
            }, o([ s(cc.Node) ], t.prototype, "stageName", void 0), o([ s([ cc.SpriteFrame ]) ], t.prototype, "buttonFrames", void 0), 
            o([ s(cc.Prefab) ], t.prototype, "teamSetPrefab", void 0), o([ s([ cc.SpriteFrame ]) ], t.prototype, "cardBg", void 0), 
            o([ s([ cc.SpriteFrame ]) ], t.prototype, "cardQuality", void 0), o([ s([ cc.SpriteFrame ]) ], t.prototype, "cardFrame", void 0), 
            o([ l ], t);
        }(cc.Component);
        a.default = h, cc._RF.pop();
    }, {
        "../DataManage": "DataManage"
    } ],
    stageScene: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "2e55bfgQ6hI0YUnRt0Y78sg", "stageScene");
        var _n42, i = this && this.__extends || (_n42 = function n(e, t) {
            return (_n42 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n42(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./DataManage"), r = e("./libppgame/libwechat"), l = e("./libppgame/WXGameWall"), s = cc._decorator, h = s.ccclass, d = s.property, u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.stagePrefab = null, t.lineImg = null, t.bg = null, t.initIndex = 0, t.nowStep = 0, 
                t.firstInitStart = 0, t.firstInitEnd = 0, t.time1 = 0, t.stopInit = !1, t;
            }
            return i(t, e), t.prototype.start = function() {
                c.Utils.blinkBanner(this.node, 2), this.node.getChildByName("bg").getChildByName("stageNode").getChildByName("backButton").on(cc.Node.EventType.TOUCH_END, this.backEvent, this), 
                this.initStageScene(), this.bg.setContentSize(cc.winSize), l.wechatGameWall.showLine(), 
                2 == c.DataManage.guideStep && (this.node.getChildByName("guideNode").getChildByName("guide1").active = !0, 
                c.DataManage.guideStep = 3), r.wechat.hideGridAd2(), r.wechat.hideBannerAd();
            }, t.prototype.initStageScene = function() {
                var e = c.DataManage.stage;
                this.nowStep = Math.floor(e / 10), this.initStage30(this.nowStep), e = c.DataManage.stage;
                var t = c.DataManage.stageTemplate, a = this.node.getChildByName("bg").getChildByName("stageNode").getChildByName("stageScroll").getChildByName("view").getChildByName("content"), n = 184 * t.length;
                n = Math.max(n, 1386), a.setContentSize(cc.size(640, n));
                var i = e / t.length;
                this.node.getChildByName("bg").getChildByName("stageNode").getChildByName("stageScroll").getComponent(cc.ScrollView).scrollTo(cc.v2(0, i), .1);
                var o = this;
                this.initIndex = 0, this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    o.initStage10();
                })));
            }, t.prototype.initStage30 = function(e) {
                var t = 10 * (e - 1), a = 10 * (e + 2), n = c.DataManage.stageTemplate;
                t < 0 && (t = 0), a > n.length - 1 && (a = n.length - 1), this.firstInitStart = t, 
                this.firstInitEnd = a;
                for (var i = this.node.getChildByName("bg").getChildByName("stageNode").getChildByName("stageScroll").getChildByName("view").getChildByName("content"), o = 0, r = 0, l = 0, s = t; s != n.length; s++) {
                    if (l = s % 2, s < n.length - 1) {
                        var h = new cc.Node();
                        h.addComponent(cc.Sprite).spriteFrame = this.lineImg, h.setPosition(cc.v2(0, 350 + 184 * s)), 
                        i.addChild(h), h.angle = 60 * l - 30;
                    }
                    o = 160 - 320 * l, r = 284 + 184 * s;
                    var d = cc.instantiate(this.stagePrefab);
                    if (d.setPosition(cc.v2(o, r)), i.addChild(d), d.getComponent("stageButtons").initStage(s), 
                    s > a) break;
                }
            }, t.prototype.initStage10 = function() {
                if (!this.stopInit) {
                    this.initIndex == this.firstInitStart && (this.initIndex = this.firstInitEnd);
                    for (var e = this.initIndex + 10, t = c.DataManage.stageTemplate, a = this.node.getChildByName("bg").getChildByName("stageNode").getChildByName("stageScroll").getChildByName("view").getChildByName("content"), n = 0, i = 0, o = 0, r = this.initIndex; r != t.length; r++) {
                        if (o = r % 2, r < t.length - 1) {
                            var l = new cc.Node();
                            l.addComponent(cc.Sprite).spriteFrame = this.lineImg, l.setPosition(cc.v2(0, 350 + 184 * r)), 
                            a.addChild(l), l.angle = 60 * o - 30;
                        }
                        n = 160 - 320 * o, i = 284 + 184 * r;
                        var s = cc.instantiate(this.stagePrefab);
                        if (s.setPosition(cc.v2(n, i)), a.addChild(s), s.getComponent("stageButtons").initStage(r), 
                        this.initIndex++, this.initIndex > e) break;
                    }
                    if (this.initIndex >= t.length - 1) ; else {
                        var h = this;
                        this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            h.initStage10();
                        })));
                    }
                }
            }, t.prototype.backEvent = function() {
                r.wechat.showGridAd2(), this.node.getChildByName("click").getComponent(cc.AudioSource).play(), 
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    cc.director.loadScene("menuScene");
                })));
            }, t.prototype.update = function(e) {
                this.time1 += e, this.time1 > 1 && (this.time1 = 0, c.DataManage.onLineTimes++, 
                c.DataManage.onLineTimes % 30 == 0 && c.Utils.saveOnline());
            }, t.prototype.onDestroy = function() {
                this.stopInit = !0;
            }, o([ d(cc.Prefab) ], t.prototype, "stagePrefab", void 0), o([ d(cc.SpriteFrame) ], t.prototype, "lineImg", void 0), 
            o([ d(cc.Node) ], t.prototype, "bg", void 0), o([ h ], t);
        }(cc.Component);
        a.default = u, cc._RF.pop();
    }, {
        "./DataManage": "DataManage",
        "./libppgame/WXGameWall": "WXGameWall",
        "./libppgame/libwechat": "libwechat"
    } ],
    starScript: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "c9a2eHhYjtDz6ShZecC4DFH", "starScript");
        var _n43, i = this && this.__extends || (_n43 = function n(e, t) {
            return (_n43 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n43(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = cc._decorator, r = c.ccclass, l = (c.property, function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return i(t, e), t.prototype.start = function() {}, t.prototype.setStar = function(e) {
                for (var t = "", a = 0; 10 != a; a++) {
                    t = "star" + (a + 1), this.node.getChildByName(t).active = a < e;
                }
            }, o([ r ], t);
        }(cc.Component));
        a.default = l, cc._RF.pop();
    }, {} ],
    startMenu: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "d3c97/agBVO74lUkHp+0Ui0", "startMenu");
        var _n44, i = this && this.__extends || (_n44 = function n(e, t) {
            return (_n44 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n44(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("./DataManage"), r = e("./libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.loadingProgress = null, t.progressLabel = null, t.bg = null, t;
            }
            return i(t, e), t.prototype.start = function() {
                var e = this;
                r.wechat.ensureConfigLoaded();
                var t = window["adunit-video"] || "adunit-36efd46d4e45b4b5", a = window["adunit-interstitial"] || "adunit-07ee337d983625c2", n = window["adunit-line"] || "adunit-8b30b6afdbd7fff7", i = window["adunit-single"] || "adunit-2a61f03a09f0e4cd", o = window["adunit-wall"] || "adunit-2a930d4fde15a1a2", l = window["adunit-banner"] || "adunit-c4e290e6205c8f66";
                r.wechat.initialize("wx32ad3541370964d4", t, l, a, i, n, o), r.wechat.showBannerAd(), 
                cc.director.preloadScene("stageScene", function(t, a) {
                    if (e.loadingProgress) {
                        var n = Math.floor(100 * t / a);
                        e.progressLabel.getComponent(cc.Label).string = n + "%", e.loadingProgress.getComponent(cc.ProgressBar).progress = t / a;
                    }
                }, function() {
                    var t = new Date(new Date().toLocaleDateString()).getTime();
                    if ((t = Math.floor(t / 1e3)) > c.Utils.getZeroStamp(c.DataManage.lastLanding)) {
                        console.log("new day");
                        var a = new Date().getTime();
                        c.DataManage.lastLanding = Math.floor(a / 1e3), cc.sys.localStorage.setItem("lastLogin", c.DataManage.lastLanding), 
                        c.DataManage.arenaData = c.Utils.randomArenaData(), c.Utils.saveArenaData(), c.DataManage.arenaBoxData = [ [ 1, 3, 0, 0 ], [ 1, 7, 0, 0 ], [ 2, 3, 0, 0 ] ], 
                        c.Utils.saveArenaBoxData(), c.DataManage.missionData = [ [ 1, 1, 1, 200, 0, 1 ], [ 2, 3, 0, 300, 0, 1 ], [ 3, 1, 0, 100, 0, 5 ], [ 4, 3, 0, 200, 0, 1 ], [ 5, 1, 0, 100, 0, 5 ], [ 6, 1, 0, 500, 0, 1 ] ], 
                        c.Utils.saveMissionData(), c.DataManage.freeZhuan = 1, c.DataManage.zhuan = 0, c.DataManage.onLineTimes = 0, 
                        c.DataManage.onLineAward = [ 0, 0, 0 ], c.DataManage.landTimes += 1, c.Utils.setActive(), 
                        c.Utils.saveOnLineAward();
                    }
                    e.startGame();
                }), this.bg.setContentSize(cc.winSize), cc.game.on(cc.game.EVENT_SHOW, function() {
                    r.wechat.onShowTimes++, r.wechat.showFullGrid();
                });
            }, t.prototype.startGame = function() {
                1 == r.wechat.loadedVideo && r.wechat.mustVideo(), cc.director.loadScene("menuScene", this.onEnterGame);
            }, t.prototype.onEnterGame = function() {}, o([ h(cc.Node) ], t.prototype, "loadingProgress", void 0), 
            o([ h(cc.Node) ], t.prototype, "progressLabel", void 0), o([ h(cc.Node) ], t.prototype, "bg", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "./DataManage": "DataManage",
        "./libppgame/libwechat": "libwechat"
    } ],
    zaixian: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "0d4a01Jot5F15GB5ZuSe61d", "zaixian");
        var _n45, i = this && this.__extends || (_n45 = function n(e, t) {
            return (_n45 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n45(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = cc._decorator, l = r.ccclass, s = r.property, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null, t.kabaoFrame = [ null ], t.getCardPrefab = null, t.canFetch1 = !1, 
                t.canFetch2 = !1, t.canFetch3 = !1, t.actionResult = null, t.time1 = 0, t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("img_windowqd").getChildByName("img_close").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                this.node.getChildByName("resultNode").getChildByName("kabao").on(cc.Node.EventType.TOUCH_START, this.openBox, this), 
                this.initSmallCards();
            }, t.prototype.closeNode = function() {
                this.node.parent.getComponent("menuScene").updateActivePoint(), this.node.parent.getComponent("menuScene").playEffect("click");
                var e = this;
                this.node.getChildByName("img_windowqd").runAction(cc.sequence(cc.scaleTo(.2, 0), cc.callFunc(function() {
                    e.node.active = !1;
                })));
            }, t.prototype.openAction = function() {
                this.node.getChildByName("img_windowqd").scale = 0, this.node.getChildByName("img_windowqd").runAction(cc.scaleTo(.2, 1)), 
                this.refreshButtonStatu();
            }, t.prototype.initSmallCards = function() {
                for (var e = this.node.getChildByName("img_windowqd").getChildByName("zaixianScroll").getChildByName("view").getChildByName("content"), t = e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("img_black_got").getChildByName("cards"), a = e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("img_black_got").getChildByName("cards"), n = e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("img_black_got").getChildByName("cards"), i = 1, o = 1, r = 1, l = c.DataManage.cardTemplate, s = 0; s != l.length; s++) {
                    i < 8 && l[s][3] < 3 && (t.getChildByName("cardNode" + i).getComponent("cardScript").initCard(l[s][0]), 
                    i++), o < 8 && l[s][3] < 4 && l[s][3] > 1 && (a.getChildByName("cardNode" + o).getComponent("cardScript").initCard(l[s][0]), 
                    o++), r < 8 && l[s][3] < 5 && l[s][3] > 2 && (n.getChildByName("cardNode" + r).getComponent("cardScript").initCard(l[s][0]), 
                    r++);
                }
                e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("button_get").on(cc.Node.EventType.TOUCH_END, this.fetch1, this), 
                e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("button_get").on(cc.Node.EventType.TOUCH_END, this.fetch2, this), 
                e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("button_get").on(cc.Node.EventType.TOUCH_END, this.fetch3, this);
            }, t.prototype.refreshButtonStatu = function() {
                var e = this.node.getChildByName("img_windowqd").getChildByName("zaixianScroll").getChildByName("view").getChildByName("content"), t = Math.floor(c.DataManage.onLineTimes / 60), a = 0, n = 2;
                t > 4 ? 0 == c.DataManage.onLineAward[0] ? (this.canFetch1 = !0, e.getChildByName("zaixianNode1").setPosition(cc.v2(0, -330 * a)), 
                a++, e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("button_get").color = cc.color(255, 255, 255), 
                c.Utils.buttonBeat(e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("button_get"))) : (this.canFetch1 = !1, 
                e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("button_get").color = cc.color(80, 80, 80), 
                e.getChildByName("zaixianNode1").setPosition(cc.v2(0, -330 * n)), e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("button_get").stopAllActions(), 
                e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("button_get").scale = 1, 
                n--) : (e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("button_get").color = cc.color(80, 80, 80), 
                e.getChildByName("zaixianNode1").setPosition(cc.v2(0, -330 * a)), e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("button_get").stopAllActions(), 
                e.getChildByName("zaixianNode1").getChildByName("img_box_get").getChildByName("button_get").scale = 1, 
                a++), t > 14 ? 0 == c.DataManage.onLineAward[1] ? (this.canFetch2 = !0, e.getChildByName("zaixianNode2").setPosition(cc.v2(0, -330 * a)), 
                a++, e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("button_get").color = cc.color(255, 255, 255), 
                c.Utils.buttonBeat(e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("button_get"))) : (this.canFetch2 = !1, 
                e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("button_get").color = cc.color(80, 80, 80), 
                e.getChildByName("zaixianNode2").setPosition(cc.v2(0, -330 * n)), e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("button_get").stopAllActions(), 
                e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("button_get").scale = 1, 
                n--) : (e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("button_get").color = cc.color(80, 80, 80), 
                e.getChildByName("zaixianNode2").setPosition(cc.v2(0, -330 * a)), e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("button_get").stopAllActions(), 
                e.getChildByName("zaixianNode2").getChildByName("img_box_get").getChildByName("button_get").scale = 1, 
                a++), t > 29 ? 0 == c.DataManage.onLineAward[2] ? (this.canFetch3 = !0, e.getChildByName("zaixianNode3").setPosition(cc.v2(0, -330 * a)), 
                e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("button_get").color = cc.color(255, 255, 255), 
                c.Utils.buttonBeat(e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("button_get"))) : (this.canFetch3 = !1, 
                e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("button_get").color = cc.color(80, 80, 80), 
                e.getChildByName("zaixianNode3").setPosition(cc.v2(0, -330 * n)), e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("button_get").stopAllActions(), 
                e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("button_get").scale = 1, 
                n--) : (e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("button_get").color = cc.color(80, 80, 80), 
                e.getChildByName("zaixianNode3").setPosition(cc.v2(0, -330 * a)), e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("button_get").stopAllActions(), 
                e.getChildByName("zaixianNode3").getChildByName("img_box_get").getChildByName("button_get").scale = 1, 
                a++);
            }, t.prototype.fetch1 = function() {
                this.node.parent.getComponent("menuScene").playEffect("click"), this.canFetch1 && (this.node.getChildByName("resultNode").active = !0, 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[0], 
                this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78))))), 
                this.drawCard(1), this.canFetch1 = !1, c.DataManage.onLineAward[0] = 1, c.Utils.saveOnLineAward(), 
                this.refreshButtonStatu());
            }, t.prototype.fetch2 = function() {
                this.node.parent.getComponent("menuScene").playEffect("click"), this.canFetch2 && (this.node.getChildByName("resultNode").active = !0, 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[1], 
                this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78))))), 
                this.drawCard(2), this.canFetch2 = !1, c.DataManage.onLineAward[1] = 1, c.Utils.saveOnLineAward(), 
                this.refreshButtonStatu());
            }, t.prototype.fetch3 = function() {
                this.node.parent.getComponent("menuScene").playEffect("click"), this.canFetch3 && (this.node.getChildByName("resultNode").active = !0, 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[2], 
                this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78))))), 
                this.drawCard(3), this.canFetch3 = !1, c.DataManage.onLineAward[2] = 1, c.Utils.saveOnLineAward(), 
                this.refreshButtonStatu());
            }, t.prototype.openBox = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("vs"), null != this.actionResult) {
                    this.node.getChildByName("resultNode").active = !1;
                    var e = cc.instantiate(this.getCardPrefab);
                    e.getComponent("getCardScript").initGetCardNode(this.actionResult, 4), this.node.parent.addChild(e);
                }
            }, t.prototype.drawCard = function(e) {
                for (var t = this.getDrawSpecResult(e), a = null, n = 0; n != t.length; n++) {
                    a = c.Utils.getCardInfo(t[n][0]);
                    for (var i = 0; i != c.DataManage.cardData.length; i++) {
                        if (c.DataManage.cardData[i][0] == a[0] && (c.DataManage.cardData[i][1]++, c.DataManage.cardData[i][1] > 10)) {
                            var o = 0, r = c.Utils.getCardTemplate(a[0]);
                            4 == r[3] ? o = 50 : 3 == r[3] ? o = 20 : 2 == r[3] ? o = 10 : 1 == r[3] && (o = 5), 
                            c.DataManage.gold += o;
                        }
                    }
                }
                c.Utils.saveCardData(), this.actionResult = t;
            }, t.prototype.getDrawSpecResult = function(e) {
                var t = 0, a = 0, n = 0, i = 0;
                1 == e ? (i = 5, n = 3) : 2 == e ? (a = 2, n = 3, i = 3) : 3 == e ? (t = 1, a = 3, 
                n = 4) : 4 == e && (t = 1, a = 2, n = 2, i = 3);
                for (var o = [], r = [], l = [], s = [], h = [], d = c.DataManage.cardTemplate, u = null, g = c.DataManage.specielCards, p = !1, m = 0; m != d.length; m++) {
                    for (var f = 0; f != g.length; f++) {
                        if (d[m][0] == g[f]) {
                            p = !0;
                            break;
                        }
                    }
                    p || (1 == (u = d[m])[3] ? h.push(d[m]) : 2 == u[3] ? s.push(d[m]) : 3 == u[3] ? l.push(d[m]) : 4 == u[3] && r.push(d[m]));
                }
                var y = -1;
                for (m = 0; m != t; m++) {
                    y = c.Utils.randomNum(0, r.length - 1), o.push(r[y]);
                }
                for (m = 0; m != a; m++) {
                    y = c.Utils.randomNum(0, l.length - 1), o.push(l[y]);
                }
                for (m = 0; m != n; m++) {
                    y = c.Utils.randomNum(0, s.length - 1), o.push(s[y]);
                }
                for (m = 0; m != i; m++) {
                    y = c.Utils.randomNum(0, h.length - 1), o.push(h[y]);
                }
                if (4 == e) {
                    var C = c.Utils.randomNum(0, 99);
                    if (C < 20) {
                        for (m = 0; m != o.length; m++) {
                            if (4 == o[m][3]) {
                                o[m] = [ 1043, "猛犸象", 1, 4, "RU", 136e3, 127e3 ];
                                break;
                            }
                        }
                    } else if (C < 45) {
                        for (m = 0; m != o.length; m++) {
                            if (3 == o[m][3]) {
                                o[m] = [ 1045, "赤焰黑虎", 1, 3, "MZ", 11e4, 111e3 ];
                                break;
                            }
                        }
                    } else if (C < 70) {
                        for (m = 0; m != o.length; m++) {
                            if (2 == o[m][3]) {
                                o[m] = [ 1048, "黑狮", 1, 2, "ES", 99e3, 92e3 ];
                                break;
                            }
                        }
                    } else for (m = 0; m != o.length; m++) {
                        if (1 == o[m][3]) {
                            o[m] = [ 1026, "大熊猫", 1, 1, "CN", 88e3, 85e3 ];
                            break;
                        }
                    }
                }
                return o.sort(function() {
                    return Math.random() - .5;
                }), o;
            }, t.prototype.update = function(e) {
                this.time1 += e, this.time1 > 1 && (this.time1 = 0, this.refreshButtonStatu());
            }, o([ s(cc.Label) ], t.prototype, "label", void 0), o([ s([ cc.SpriteFrame ]) ], t.prototype, "kabaoFrame", void 0), 
            o([ s(cc.Prefab) ], t.prototype, "getCardPrefab", void 0), o([ l ], t);
        }(cc.Component);
        a.default = h, cc._RF.pop();
    }, {
        "../DataManage": "DataManage"
    } ],
    zuanpan: [ function(e, t, a) {
        "use strict";
        cc._RF.push(t, "08466ktfLFHPbXcbJw9UJ7P", "zuanpan");
        var _n46, i = this && this.__extends || (_n46 = function n(e, t) {
            return (_n46 = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var a in t) {
                    t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            })(e, t);
        }, function(e, t) {
            function a() {
                this.constructor = e;
            }
            _n46(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, 
            new a());
        }), o = this && this.__decorate || function(e, t, a, n) {
            var i, o = arguments.length, c = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, a) : n;
            if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, a, n); else for (var r = e.length - 1; r >= 0; r--) {
                (i = e[r]) && (c = (o < 3 ? i(c) : o > 3 ? i(t, a, c) : i(t, a)) || c);
            }
            return o > 3 && c && Object.defineProperty(t, a, c), c;
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = e("../DataManage"), r = e("../libppgame/libwechat"), l = cc._decorator, s = l.ccclass, h = l.property, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.selectFrame = null, t.normalFrame = null, t.freeButton = null, t.adButton = null, 
                t.getCardPrefab = null, t.kabaoFrame = [ null ], t.actionResult = null, t.weightGroup = [ 0, 100, 25, 33, 40, 100, 30, 50, 100, 20, 100 ], 
                t.blinkTimes = 0, t.auto = !1, t.nowSelect = 1, t.time1 = 0, t;
            }
            return i(t, e), t.prototype.start = function() {
                this.node.getChildByName("img_windowqd").getChildByName("img_close").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                this.node.getChildByName("img_windowqd").getChildByName("button_ad").on(cc.Node.EventType.TOUCH_END, this.zhuan, this), 
                this.refreshUi(), this.node.getChildByName("resultNode").getChildByName("kabao").on(cc.Node.EventType.TOUCH_START, this.openBox, this), 
                c.Utils.buttonBeat(this.node.getChildByName("img_windowqd").getChildByName("button_ad"));
            }, t.prototype.openBox = function() {
                if (this.node.parent.getComponent("menuScene").playEffect("vs"), null != this.actionResult) {
                    this.node.getChildByName("resultNode").active = !1;
                    var e = cc.instantiate(this.getCardPrefab);
                    e.getComponent("getCardScript").initGetCardNode(this.actionResult, 4), this.node.parent.addChild(e);
                }
            }, t.prototype.startZhuan = function() {
                this.node.parent.getComponent("menuScene").playEffect("click"), this.node.getChildByName("img_windowqd").getChildByName("button_ad").off(cc.Node.EventType.TOUCH_END, this.zhuan, this), 
                this.node.getChildByName("img_windowqd").getChildByName("img_close").off(cc.Node.EventType.TOUCH_END, this.closeNode, this);
                for (var e = 0, t = 0; t != this.weightGroup.length; t++) {
                    e += this.weightGroup[t];
                }
                var a = c.Utils.randomNum(0, e - 1), n = 0, i = 0;
                for (t = 0; t != this.weightGroup.length; t++) {
                    if (a < (n += this.weightGroup[t])) {
                        i = t;
                        break;
                    }
                }
                this.auto = !1, this.blinkTimes = i - this.nowSelect + 40, this.blinkTimes < 40 && (this.blinkTimes += 10), 
                this.zhuanAction(0);
            }, t.prototype.showResultNode = function() {
                console.log(" show Result node !!! " + this.nowSelect), this.actionResult = null, 
                1 == this.nowSelect ? (this.node.getChildByName("resultNode").active = !0, this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[0], 
                this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78))))), 
                this.drawCard(1)) : 2 == this.nowSelect ? (this.goldAction(), c.DataManage.gold += 800, 
                c.Utils.setLocalData()) : 3 == this.nowSelect ? (this.goldAction(), c.DataManage.gold += 600, 
                c.Utils.setLocalData()) : 4 == this.nowSelect ? (this.node.getChildByName("resultNode").active = !0, 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[1], 
                this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78))))), 
                this.drawCard(2)) : 5 == this.nowSelect ? this.drawOne(2) : 6 == this.nowSelect ? (this.node.getChildByName("resultNode").active = !0, 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[2], 
                this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78))))), 
                this.drawCard(3)) : 7 == this.nowSelect ? (this.goldAction(), c.DataManage.gold += 400, 
                c.Utils.setLocalData()) : 8 == this.nowSelect ? (this.goldAction(), c.DataManage.gold += 200, 
                c.Utils.setLocalData()) : 9 == this.nowSelect ? (this.node.getChildByName("resultNode").active = !0, 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("kabao4").getComponent(cc.Sprite).spriteFrame = this.kabaoFrame[3], 
                this.node.getChildByName("resultNode").getChildByName("kabao").scale = 0, this.node.getChildByName("resultNode").getChildByName("kabao").runAction(cc.scaleTo(.2, 1)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").setPosition(cc.v2(-68, 78)), 
                this.node.getChildByName("resultNode").getChildByName("kabao").getChildByName("img_sz").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.4, 194, 78), cc.moveTo(1, cc.v2(-68, 78))))), 
                this.drawCard(4)) : 10 == this.nowSelect && this.drawOne(1), this.refreshUi(), this.node.getChildByName("img_windowqd").getChildByName("button_ad").on(cc.Node.EventType.TOUCH_END, this.zhuan, this), 
                this.node.getChildByName("img_windowqd").getChildByName("img_close").on(cc.Node.EventType.TOUCH_END, this.closeNode, this), 
                this.auto = !0;
            }, t.prototype.goldAction = function() {
                var e = this, t = this.getItemNode(this.nowSelect);
                this.node.getChildByName("img_windowqd").getChildByName("zuanpanNode").getChildByName("zs").setPosition(t.getPosition()), 
                this.node.getChildByName("img_windowqd").getChildByName("zuanpanNode").getChildByName("zs").opacity = 255, 
                this.node.getChildByName("img_windowqd").getChildByName("zuanpanNode").getChildByName("zs").scale = 1, 
                this.node.getChildByName("img_windowqd").getChildByName("zuanpanNode").getChildByName("zs").runAction(cc.sequence(cc.moveTo(.4, cc.v2(100, 655)).easing(cc.easeInOut(2)), cc.scaleTo(.2, 1.5), cc.spawn(cc.scaleTo(.2, .1), cc.fadeTo(.2, 0)), cc.callFunc(function() {
                    e.node.parent.getComponent("menuScene").playEffect("getDiamond");
                })));
            }, t.prototype.zhuanAction = function(e) {
                var t = this;
                console.log(" step : " + e);
                var a = this.getItemNode(this.nowSelect);
                if (e == this.blinkTimes) console.log("转完了"), a.runAction(cc.sequence(cc.blink(3, 12), cc.callFunc(function() {
                    t.showResultNode();
                }))); else {
                    var n;
                    n = 0 == e || e == this.blinkTimes - 1 ? .8 : 1 == e || e == this.blinkTimes - 2 ? .6 : 2 == e || e == this.blinkTimes - 3 ? .4 : 3 == e || e == this.blinkTimes - 4 ? .3 : 4 == e || e == this.blinkTimes - 5 ? .2 : 5 == e || e == this.blinkTimes - 6 ? .1 : .05, 
                    a.getComponent(cc.Sprite).spriteFrame = this.normalFrame, this.nowSelect++, this.nowSelect > 10 && (this.nowSelect = 1), 
                    (a = this.getItemNode(this.nowSelect)).getComponent(cc.Sprite).spriteFrame = this.selectFrame, 
                    a.runAction(cc.sequence(cc.delayTime(n), cc.callFunc(function() {
                        t.zhuanAction(e + 1);
                    })));
                }
            }, t.prototype.refreshUi = function() {
                console.log(" free zhuan us : " + c.DataManage.freeZhuan), c.DataManage.zhuan > 0 && (c.DataManage.freeZhuan = 0), 
                console.log(" free zhuan us : " + c.DataManage.freeZhuan), c.DataManage.freeZhuan > 0 ? this.node.getChildByName("img_windowqd").getChildByName("button_ad").getComponent(cc.Sprite).spriteFrame = this.freeButton : this.node.getChildByName("img_windowqd").getChildByName("button_ad").getComponent(cc.Sprite).spriteFrame = this.adButton, 
                this.node.getChildByName("img_windowqd").getChildByName("label").getComponent(cc.Label).string = "剩余次数:" + (10 - c.DataManage.zhuan) + "次", 
                c.DataManage.zhuan < 10 || (this.node.getChildByName("img_windowqd").getChildByName("button_ad").color = cc.color(156, 156, 156));
            }, t.prototype.zhuan = function() {
                if (c.DataManage.zhuan < 10) {
                    if (c.DataManage.freeZhuan > 0) c.DataManage.freeZhuan--, this.startZhuan(), c.DataManage.zhuan++, 
                    c.Utils.setActive(); else {
                        var e = this;
                        r.wechat.showRewardedVideoAd().then(function(t) {
                            t && (e.startZhuan(), c.DataManage.zhuan++, c.Utils.setActive());
                        }).catch(function() {});
                    }
                } else c.Utils.showNotice("今日次数已用完，请明日再来");
            }, t.prototype.closeNode = function() {
                this.node.parent.getComponent("menuScene").updateActivePoint(), this.node.parent.getComponent("menuScene").playEffect("click");
                var e = this;
                this.node.getChildByName("img_windowqd").runAction(cc.sequence(cc.scaleTo(.2, 0), cc.callFunc(function() {
                    e.node.active = !1;
                })));
            }, t.prototype.openAction = function() {
                this.node.getChildByName("img_windowqd").scale = 0, this.node.getChildByName("img_windowqd").runAction(cc.scaleTo(.2, 1)), 
                this.autoView();
            }, t.prototype.autoView = function() {
                this.auto = !0;
            }, t.prototype.update = function(e) {
                this.auto && (this.time1 += e, this.time1 > 1 && (this.time1 -= 1, this.nowSelect++, 
                this.nowSelect > 10 && (this.nowSelect = 1), this.select()));
            }, t.prototype.select = function() {
                var e = this.nowSelect - 1;
                0 == e && (e = 10), this.getItemNode(e).getComponent(cc.Sprite).spriteFrame = this.normalFrame, 
                this.getItemNode(this.nowSelect).getComponent(cc.Sprite).spriteFrame = this.selectFrame;
            }, t.prototype.getItemNode = function(e) {
                var t = "zuanpanItem" + e;
                return this.node.getChildByName("img_windowqd").getChildByName("zuanpanNode").getChildByName(t);
            }, t.prototype.drawOne = function(e) {
                for (var t = [], a = [], n = [], i = [], o = [], r = c.DataManage.cardTemplate, l = null, s = c.DataManage.specielCards, h = !1, d = 0; d != r.length; d++) {
                    for (var u = 0; u != s.length; u++) {
                        if (r[d][0] == s[u]) {
                            h = !0;
                            break;
                        }
                    }
                    h || (1 == (l = r[d])[3] ? o.push(r[d]) : 2 == l[3] ? i.push(r[d]) : 3 == l[3] ? n.push(r[d]) : 4 == l[3] && a.push(r[d]));
                }
                var g = -1;
                1 == e ? (g = c.Utils.randomNum(0, o.length - 1), t.push(o[g])) : 2 == e ? (g = c.Utils.randomNum(0, i.length - 1), 
                t.push(i[g])) : 3 == e ? (g = c.Utils.randomNum(0, n.length - 1), t.push(n[g])) : 4 == e && (g = c.Utils.randomNum(0, a.length - 1), 
                t.push(a[g]));
                var p = null;
                for (d = 0; d != t.length; d++) {
                    for (p = c.Utils.getCardInfo(t[d][0]), u = 0; u != c.DataManage.cardData.length; u++) {
                        if (c.DataManage.cardData[u][0] == p[0] && (c.DataManage.cardData[u][1]++, c.DataManage.cardData[u][1] > 10)) {
                            var m = 0, f = c.Utils.getCardTemplate(p[0]);
                            4 == f[3] ? m = 50 : 3 == f[3] ? m = 20 : 2 == f[3] ? m = 10 : 1 == f[3] && (m = 5), 
                            c.DataManage.gold += m;
                        }
                    }
                }
                c.Utils.saveCardData(), console.log("  show   get Card  node  !!!");
                var y = cc.instantiate(this.getCardPrefab);
                y.getComponent("getCardScript").initGetCardNode(t, 4), this.node.parent.addChild(y);
            }, t.prototype.drawCard = function(e) {
                for (var t = this.getDrawSpecResult(e), a = null, n = 0; n != t.length; n++) {
                    a = c.Utils.getCardInfo(t[n][0]);
                    for (var i = 0; i != c.DataManage.cardData.length; i++) {
                        if (c.DataManage.cardData[i][0] == a[0] && (c.DataManage.cardData[i][1]++, c.DataManage.cardData[i][1] > 10)) {
                            var o = 0, r = c.Utils.getCardTemplate(a[0]);
                            4 == r[3] ? o = 50 : 3 == r[3] ? o = 20 : 2 == r[3] ? o = 10 : 1 == r[3] && (o = 5), 
                            c.DataManage.gold += o;
                        }
                    }
                }
                c.Utils.saveCardData(), this.actionResult = t;
            }, t.prototype.getDrawSpecResult = function(e) {
                var t = 0, a = 0, n = 0, i = 0;
                1 == e ? (i = 5, n = 3) : 2 == e ? (a = 2, n = 3, i = 3) : 3 == e ? (t = 1, a = 3, 
                n = 4) : 4 == e && (t = 1, a = 2, n = 2, i = 3);
                for (var o = [], r = [], l = [], s = [], h = [], d = c.DataManage.cardTemplate, u = null, g = c.DataManage.specielCards, p = !1, m = 0; m != d.length; m++) {
                    for (var f = 0; f != g.length; f++) {
                        if (d[m][0] == g[f]) {
                            p = !0;
                            break;
                        }
                    }
                    p || (1 == (u = d[m])[3] ? h.push(d[m]) : 2 == u[3] ? s.push(d[m]) : 3 == u[3] ? l.push(d[m]) : 4 == u[3] && r.push(d[m]));
                }
                var y = -1;
                for (m = 0; m != t; m++) {
                    y = c.Utils.randomNum(0, r.length - 1), o.push(r[y]);
                }
                for (m = 0; m != a; m++) {
                    y = c.Utils.randomNum(0, l.length - 1), o.push(l[y]);
                }
                for (m = 0; m != n; m++) {
                    y = c.Utils.randomNum(0, s.length - 1), o.push(s[y]);
                }
                for (m = 0; m != i; m++) {
                    y = c.Utils.randomNum(0, h.length - 1), o.push(h[y]);
                }
                if (4 == e) {
                    var C = c.Utils.randomNum(0, 99);
                    if (C < 20) {
                        for (m = 0; m != o.length; m++) {
                            if (4 == o[m][3]) {
                                o[m] = [ 1043, "猛犸象", 1, 4, "RU", 136e3, 127e3 ];
                                break;
                            }
                        }
                    } else if (C < 45) {
                        for (m = 0; m != o.length; m++) {
                            if (3 == o[m][3]) {
                                o[m] = [ 1045, "赤焰黑虎", 1, 3, "MZ", 11e4, 111e3 ];
                                break;
                            }
                        }
                    } else if (C < 70) {
                        for (m = 0; m != o.length; m++) {
                            if (2 == o[m][3]) {
                                o[m] = [ 1048, "黑狮", 1, 2, "ES", 99e3, 92e3 ];
                                break;
                            }
                        }
                    } else for (m = 0; m != o.length; m++) {
                        if (1 == o[m][3]) {
                            o[m] = [ 1026, "大熊猫", 1, 1, "CN", 88e3, 85e3 ];
                            break;
                        }
                    }
                }
                return o.sort(function() {
                    return Math.random() - .5;
                }), o;
            }, o([ h(cc.SpriteFrame) ], t.prototype, "selectFrame", void 0), o([ h(cc.SpriteFrame) ], t.prototype, "normalFrame", void 0), 
            o([ h(cc.SpriteFrame) ], t.prototype, "freeButton", void 0), o([ h(cc.SpriteFrame) ], t.prototype, "adButton", void 0), 
            o([ h(cc.Prefab) ], t.prototype, "getCardPrefab", void 0), o([ h([ cc.SpriteFrame ]) ], t.prototype, "kabaoFrame", void 0), 
            o([ s ], t);
        }(cc.Component);
        a.default = d, cc._RF.pop();
    }, {
        "../DataManage": "DataManage",
        "../libppgame/libwechat": "libwechat"
    } ]
}, {}, [ "DataManage", "adBox", "arenaNode", "bagScript", "battleScene", "choukaScript", "clickNode", "gameIcon", "gameline", "gamewall", "ButtonGroup", "Container", "CustomBar", "HttpRequest", "ListView", "Panel", "Queue", "Toast", "WXGameClubButton", "WXGameWall", "WXUserInfoButton", "libIos", "libcocos", "libnetwork", "libutils", "libwechat", "libwechat_review", "menuScene", "missionScript", "arenaEnemyScript", "battleInfoScript", "battleNodeScript", "bmFontScript", "cardScript", "changeCardScript", "getCardScript", "kezhiScript", "meirizuanshi", "menuPowerScript", "numberScript", "openEnd", "powerChangeScript", "qiandao", "qiandaoItem", "resultNode", "setTeamNode", "specMenu", "stageButtons", "starScript", "zaixian", "zuanpan", "stageScene", "startMenu" ]);