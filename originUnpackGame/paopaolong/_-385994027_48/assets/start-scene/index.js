var t = require("../../@babel/runtime/helpers/interopRequireDefault");

require("../../@babel/runtime/helpers/Objectentries"), require("../../@babel/runtime/helpers/Arrayincludes");

var e, i, n = t(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/typeof");

System.register("chunks:///start-scene.js", [ "cc" ], function() {
    var t, e, i, o, a, s, l, u, c, h, d, f, p, v, b, g, m, y, _, I, w, S, C, A, T, k, x, E, B, P, R, L, D, O, M, F, N, z, G, U, V, W, H, j, Y, K, q, X, J, Q, Z, $, tt, et, it, nt, rt, ot, at, st;
    return {
        setters: [ function(n) {
            t = n.cclegacy, e = n._decorator, i = n.Node, o = n.game, a = n.Component, s = n.v2, 
            l = n.v3, u = n.find, c = n.UITransform, h = n.sys, d = n.log, f = n.resources, 
            p = n.error, v = n.Texture2D, b = n.SpriteFrame, g = n.AudioSource, m = n.instantiate, 
            y = n.NodePool, _ = n.director, I = n.Animation, w = n.ParticleSystem2D, S = n.Vec3, 
            C = n.sp, A = n.view, T = n.Enum, k = n.Sprite, x = n.CCInteger, E = n.assetManager, 
            B = n.ScrollView, P = n.Layout, R = n.Button, L = n.Label, D = n.TextAsset, O = n.warn, 
            M = n.EventTouch, F = n.tween, N = n.MotionStreak, z = n.Tween, G = n.UIOpacity, 
            U = n.ProgressBar, V = n.Prefab, W = n.Color, H = n.AnimationComponent, j = n.Vec2, 
            Y = n.SubContextView, K = n.Canvas, q = n.Widget, X = n.isValid, J = n.color, Q = n.LabelOutline, 
            Z = n.EventHandler, $ = n.CCBoolean, tt = n.size, et = n.Event, it = n.EditBox, 
            nt = n.AnimationClip, rt = n.Toggle, ot = n.Size, at = n.Mask, st = n.RichText;
        } ],
        execute: function() {
            function lt(t, e, i, n, r, o, a) {
                try {
                    var s = t[o](a), l = s.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void i(t);
                }
                s.done ? e(l) : Promise.resolve(l).then(n, r);
            }
            function ut(t) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(n, r) {
                        var o = t.apply(e, i);
                        function a(t) {
                            lt(o, n, r, a, s, "next", t);
                        }
                        function s(t) {
                            lt(o, n, r, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function ct(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(t, n.key, n);
                }
            }
            function ht(t, e, i) {
                return e && ct(t.prototype, e), i && ct(t, i), t;
            }
            function dt(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t;
            }
            function ft() {
                return (ft = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                    }
                    return t;
                }).apply(this, arguments);
            }
            function pt(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, vt(t, e);
            }
            function vt(t, e) {
                return (vt = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }
            function bt() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                    !0;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return !1;
                }
            }
            function gt(t, e, i) {
                return (gt = bt() ? Reflect.construct : function(t, e, i) {
                    var n = [ null ];
                    n.push.apply(n, e);
                    var r = new (Function.bind.apply(t, n))();
                    return i && vt(r, i.prototype), r;
                }).apply(null, arguments);
            }
            function mt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function yt(t, e, i, n) {
                i && Object.defineProperty(t, e, {
                    enumerable: i.enumerable,
                    configurable: i.configurable,
                    writable: i.writable,
                    value: i.initializer ? i.initializer.call(n) : void 0
                });
            }
            function _t(t, e, i, n, r) {
                var o = {};
                return Object.keys(n).forEach(function(t) {
                    o[t] = n[t];
                }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), 
                o = i.slice().reverse().reduce(function(i, n) {
                    return n(t, e, i) || i;
                }, o), r && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(r) : void 0, 
                o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(t, e, o), 
                o = null), o;
            }
            var It;
            t._RF.push({}, "02b4eC3VWJOxZpD/JY1HQ1k", "MapData", void 0);
            var wt = e.ccclass, St = (e.property, wt(It = function() {
                dt(this, "id", void 0), dt(this, "data", void 0), dt(this, "array", void 0), dt(this, "num", void 0), 
                dt(this, "rec", void 0), dt(this, "hard", void 0), dt(this, "test", void 0), dt(this, "ball", void 0), 
                dt(this, "typeCount", []);
            }) || It);
            t._RF.pop(), t._RF.push({}, "fde1cj/pOFNIIUs1XDZ56kw", "SDKConst", void 0);
            var Ct = {
                game_id: "10057",
                channel_id: "10057",
                version: "1.5.3",
                appkey: "23a3eeb840107c0994d6068d9decffd5",
                interstitialAdId: "adunit-20c31579ed6cde07",
                bannerId: "",
                gridId: "",
                customId: "adunit-3ecef510636baa07",
                videoAd: "adunit-9dd2c053e75cb44e",
                shareMessageToFriend: {
                    scene: 10,
                    sharekey: "shareMessageToFriendScene",
                    share_id: 26
                },
                default_share: {
                    content: "还记得童年的泡泡龙吗？一起来怀旧吧~    这个可以不？",
                    icon: "https://cdn-wxsdk.miso-lab.com/f0/5653094b6b7826c8afd813d12735e3.jpg",
                    id: "9999",
                    key: "default",
                    title: "默认",
                    typ: 1,
                    videoid: ""
                },
                subscribeIds: [ "yB-vq0DvOhazzDbvS1UzttLMIQ50Z_i0n8st6yEZYkw", "4al8p3UBb3xqn7TYN1J5wYtKrCbFc2MYESAv1vWi-C0" ],
                versionContent: "1、开启每日幸运转盘活动\r\n2、针对部分玩家出现的卡顿问题进行修复"
            }, At = "https://wxsdk-ver.d3games.com/version", Tt = "logstores/login/track", kt = "logstores/adlog/track", xt = "logstores/times/track", Et = "logstores/share/track", Bt = "logstores/firstsecren/track", Pt = "logstores/stay/track", Rt = "logstores/behaviors/track", Lt = "logstores/events/track", Dt = "logstores/jumps/track", Ot = "logstores/level/track", Mt = "api/login", Ft = "api/login", Nt = "api/reftoken", zt = "api/share/lst", Gt = "api/game/config", Ut = "api/subscribe/add", Vt = "api/member/savedata", Wt = "api/member/getdata", Ht = "api/rank/add", jt = "api/rank/list", Yt = "game/totalrank/add", Kt = "game/totalrank/list", qt = "api/subscribe/event", Xt = "api/adplan/list", Jt = "game/notice/info", Qt = "__pcsdk_launch_key__", Zt = "__pcsdk_usershield_key__", $t = 1e4, te = {
                code: 1e3,
                msg: "要看完视频哦!"
            }, ee = {
                code: 1001,
                msg: "视频广告加载失败!"
            }, ie = {
                code: 999,
                msg: "视频UID不存在!"
            }, ne = {
                code: 1002,
                msg: "视频组件未开放!"
            }, re = {
                code: 1003,
                msg: "正在观看视频中..."
            }, oe = {
                code: 1006,
                msg: "请分享到群哦!"
            }, ae = {
                code: 1e3,
                msg: "广告 uid不能为空!"
            }, se = {
                code: 1001,
                msg: "加载广告失败!"
            }, le = {
                code: 1002,
                msg: "加载广告失败!"
            };
            t._RF.pop(), t._RF.push({}, "62bcfqSbjVMOrufv1thC/52", "md5", void 0);
            var ue = function() {
                function t() {
                    dt(this, "_dataLength", void 0), dt(this, "_bufferLength", void 0), dt(this, "_state", new Int32Array(4)), 
                    dt(this, "_buffer", new ArrayBuffer(68)), dt(this, "_buffer8", void 0), dt(this, "_buffer32", void 0), 
                    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), 
                    this.start();
                }
                t.hashStr = function(t, e) {
                    return void 0 === e && (e = !1), this.onePassHasher.start().appendStr(t).end(e);
                }, t.hashAsciiStr = function(t, e) {
                    return void 0 === e && (e = !1), this.onePassHasher.start().appendAsciiStr(t).end(e);
                }, t._hex = function(e) {
                    var i, n, r, o, a = t.hexChars, s = t.hexOut;
                    for (o = 0; o < 4; o += 1) for (n = 8 * o, i = e[o], r = 0; r < 8; r += 2) s[n + 1 + r] = a.charAt(15 & i), 
                    i >>>= 4, s[n + 0 + r] = a.charAt(15 & i), i >>>= 4;
                    return s.join("");
                }, t._md5cycle = function(t, e) {
                    var i = t[0], n = t[1], r = t[2], o = t[3];
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n & r | ~n & o) + e[0] - 680876936 | 0) << 7 | i >>> 25) + n | 0) & n | ~i & r) + e[1] - 389564586 | 0) << 12 | o >>> 20) + i | 0) & i | ~o & n) + e[2] + 606105819 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & i) + e[3] - 1044525330 | 0) << 22 | n >>> 10) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n & r | ~n & o) + e[4] - 176418897 | 0) << 7 | i >>> 25) + n | 0) & n | ~i & r) + e[5] + 1200080426 | 0) << 12 | o >>> 20) + i | 0) & i | ~o & n) + e[6] - 1473231341 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & i) + e[7] - 45705983 | 0) << 22 | n >>> 10) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n & r | ~n & o) + e[8] + 1770035416 | 0) << 7 | i >>> 25) + n | 0) & n | ~i & r) + e[9] - 1958414417 | 0) << 12 | o >>> 20) + i | 0) & i | ~o & n) + e[10] - 42063 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & i) + e[11] - 1990404162 | 0) << 22 | n >>> 10) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n & r | ~n & o) + e[12] + 1804603682 | 0) << 7 | i >>> 25) + n | 0) & n | ~i & r) + e[13] - 40341101 | 0) << 12 | o >>> 20) + i | 0) & i | ~o & n) + e[14] - 1502002290 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & i) + e[15] + 1236535329 | 0) << 22 | n >>> 10) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n & o | r & ~o) + e[1] - 165796510 | 0) << 5 | i >>> 27) + n | 0) & r | n & ~r) + e[6] - 1069501632 | 0) << 9 | o >>> 23) + i | 0) & n | i & ~n) + e[11] + 643717713 | 0) << 14 | r >>> 18) + o | 0) & i | o & ~i) + e[0] - 373897302 | 0) << 20 | n >>> 12) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n & o | r & ~o) + e[5] - 701558691 | 0) << 5 | i >>> 27) + n | 0) & r | n & ~r) + e[10] + 38016083 | 0) << 9 | o >>> 23) + i | 0) & n | i & ~n) + e[15] - 660478335 | 0) << 14 | r >>> 18) + o | 0) & i | o & ~i) + e[4] - 405537848 | 0) << 20 | n >>> 12) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n & o | r & ~o) + e[9] + 568446438 | 0) << 5 | i >>> 27) + n | 0) & r | n & ~r) + e[14] - 1019803690 | 0) << 9 | o >>> 23) + i | 0) & n | i & ~n) + e[3] - 187363961 | 0) << 14 | r >>> 18) + o | 0) & i | o & ~i) + e[8] + 1163531501 | 0) << 20 | n >>> 12) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n & o | r & ~o) + e[13] - 1444681467 | 0) << 5 | i >>> 27) + n | 0) & r | n & ~r) + e[2] - 51403784 | 0) << 9 | o >>> 23) + i | 0) & n | i & ~n) + e[7] + 1735328473 | 0) << 14 | r >>> 18) + o | 0) & i | o & ~i) + e[12] - 1926607734 | 0) << 20 | n >>> 12) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n ^ r ^ o) + e[5] - 378558 | 0) << 4 | i >>> 28) + n | 0) ^ n ^ r) + e[8] - 2022574463 | 0) << 11 | o >>> 21) + i | 0) ^ i ^ n) + e[11] + 1839030562 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ i) + e[14] - 35309556 | 0) << 23 | n >>> 9) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n ^ r ^ o) + e[1] - 1530992060 | 0) << 4 | i >>> 28) + n | 0) ^ n ^ r) + e[4] + 1272893353 | 0) << 11 | o >>> 21) + i | 0) ^ i ^ n) + e[7] - 155497632 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ i) + e[10] - 1094730640 | 0) << 23 | n >>> 9) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n ^ r ^ o) + e[13] + 681279174 | 0) << 4 | i >>> 28) + n | 0) ^ n ^ r) + e[0] - 358537222 | 0) << 11 | o >>> 21) + i | 0) ^ i ^ n) + e[3] - 722521979 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ i) + e[6] + 76029189 | 0) << 23 | n >>> 9) + r | 0, 
                    n = ((n += ((r = ((r += ((o = ((o += ((i = ((i += (n ^ r ^ o) + e[9] - 640364487 | 0) << 4 | i >>> 28) + n | 0) ^ n ^ r) + e[12] - 421815835 | 0) << 11 | o >>> 21) + i | 0) ^ i ^ n) + e[15] + 530742520 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ i) + e[2] - 995338651 | 0) << 23 | n >>> 9) + r | 0, 
                    n = ((n += ((o = ((o += (n ^ ((i = ((i += (r ^ (n | ~o)) + e[0] - 198630844 | 0) << 6 | i >>> 26) + n | 0) | ~r)) + e[7] + 1126891415 | 0) << 10 | o >>> 22) + i | 0) ^ ((r = ((r += (i ^ (o | ~n)) + e[14] - 1416354905 | 0) << 15 | r >>> 17) + o | 0) | ~i)) + e[5] - 57434055 | 0) << 21 | n >>> 11) + r | 0, 
                    n = ((n += ((o = ((o += (n ^ ((i = ((i += (r ^ (n | ~o)) + e[12] + 1700485571 | 0) << 6 | i >>> 26) + n | 0) | ~r)) + e[3] - 1894986606 | 0) << 10 | o >>> 22) + i | 0) ^ ((r = ((r += (i ^ (o | ~n)) + e[10] - 1051523 | 0) << 15 | r >>> 17) + o | 0) | ~i)) + e[1] - 2054922799 | 0) << 21 | n >>> 11) + r | 0, 
                    n = ((n += ((o = ((o += (n ^ ((i = ((i += (r ^ (n | ~o)) + e[8] + 1873313359 | 0) << 6 | i >>> 26) + n | 0) | ~r)) + e[15] - 30611744 | 0) << 10 | o >>> 22) + i | 0) ^ ((r = ((r += (i ^ (o | ~n)) + e[6] - 1560198380 | 0) << 15 | r >>> 17) + o | 0) | ~i)) + e[13] + 1309151649 | 0) << 21 | n >>> 11) + r | 0, 
                    n = ((n += ((o = ((o += (n ^ ((i = ((i += (r ^ (n | ~o)) + e[4] - 145523070 | 0) << 6 | i >>> 26) + n | 0) | ~r)) + e[11] - 1120210379 | 0) << 10 | o >>> 22) + i | 0) ^ ((r = ((r += (i ^ (o | ~n)) + e[2] + 718787259 | 0) << 15 | r >>> 17) + o | 0) | ~i)) + e[9] - 343485551 | 0) << 21 | n >>> 11) + r | 0, 
                    t[0] = i + t[0] | 0, t[1] = n + t[1] | 0, t[2] = r + t[2] | 0, t[3] = o + t[3] | 0;
                };
                var e = t.prototype;
                return e.start = function() {
                    return this._dataLength = 0, this._bufferLength = 0, this._state.set(t.stateIdentity), 
                    this;
                }, e.appendStr = function(e) {
                    var i, n, r = this._buffer8, o = this._buffer32, a = this._bufferLength;
                    for (n = 0; n < e.length; n += 1) {
                        if ((i = e.charCodeAt(n)) < 128) r[a++] = i; else if (i < 2048) r[a++] = 192 + (i >>> 6), 
                        r[a++] = 63 & i | 128; else if (i < 55296 || i > 56319) r[a++] = 224 + (i >>> 12), 
                        r[a++] = i >>> 6 & 63 | 128, r[a++] = 63 & i | 128; else {
                            if ((i = 1024 * (i - 55296) + (e.charCodeAt(++n) - 56320) + 65536) > 1114111) throw new Error("Unicode standard supports code points up to U+10FFFF");
                            r[a++] = 240 + (i >>> 18), r[a++] = i >>> 12 & 63 | 128, r[a++] = i >>> 6 & 63 | 128, 
                            r[a++] = 63 & i | 128;
                        }
                        a >= 64 && (this._dataLength += 64, t._md5cycle(this._state, o), a -= 64, o[0] = o[16]);
                    }
                    return this._bufferLength = a, this;
                }, e.appendAsciiStr = function(e) {
                    for (var i, n = this._buffer8, r = this._buffer32, o = this._bufferLength, a = 0; ;) {
                        for (i = Math.min(e.length - a, 64 - o); i--; ) n[o++] = e.charCodeAt(a++);
                        if (o < 64) break;
                        this._dataLength += 64, t._md5cycle(this._state, r), o = 0;
                    }
                    return this._bufferLength = o, this;
                }, e.appendByteArray = function(e) {
                    for (var i, n = this._buffer8, r = this._buffer32, o = this._bufferLength, a = 0; ;) {
                        for (i = Math.min(e.length - a, 64 - o); i--; ) n[o++] = e[a++];
                        if (o < 64) break;
                        this._dataLength += 64, t._md5cycle(this._state, r), o = 0;
                    }
                    return this._bufferLength = o, this;
                }, e.getState = function() {
                    var t = this, e = t._state;
                    return {
                        buffer: String.fromCharCode.apply(null, t._buffer8),
                        buflen: t._bufferLength,
                        length: t._dataLength,
                        state: [ e[0], e[1], e[2], e[3] ]
                    };
                }, e.setState = function(t) {
                    var e, i = t.buffer, n = t.state, r = this._state;
                    for (this._dataLength = t.length, this._bufferLength = t.buflen, r[0] = n[0], r[1] = n[1], 
                    r[2] = n[2], r[3] = n[3], e = 0; e < i.length; e += 1) this._buffer8[e] = i.charCodeAt(e);
                }, e.end = function(e) {
                    void 0 === e && (e = !1);
                    var i, n = this._bufferLength, r = this._buffer8, o = this._buffer32, a = 1 + (n >> 2);
                    if (this._dataLength += n, r[n] = 128, r[n + 1] = r[n + 2] = r[n + 3] = 0, o.set(t.buffer32Identity.subarray(a), a), 
                    n > 55 && (t._md5cycle(this._state, o), o.set(t.buffer32Identity)), (i = 8 * this._dataLength) <= 4294967295) o[14] = i; else {
                        var s = i.toString(16).match(/(.*?)(.{0,8})$/);
                        if (null === s) return;
                        var l = parseInt(s[2], 16), u = parseInt(s[1], 16) || 0;
                        o[14] = l, o[15] = u;
                    }
                    return t._md5cycle(this._state, o), e ? this._state : t._hex(this._state);
                }, t;
            }();
            dt(ue, "stateIdentity", new Int32Array([ 1732584193, -271733879, -1732584194, 271733878 ])), 
            dt(ue, "buffer32Identity", new Int32Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])), 
            dt(ue, "hexChars", "0123456789abcdef"), dt(ue, "hexOut", []), dt(ue, "onePassHasher", new ue()), 
            "5d41402abc4b2a76b9719d911017c592" !== ue.hashStr("hello") && console.error("Md5 self test failed."), 
            t._RF.pop(), t._RF.push({}, "b3b66e5R+5FhY6H4WYayepZ", "SDKUtils", void 0);
            var ce = function() {
                function t() {}
                return t.isString = function(t) {
                    return "[object String]" === this.toString.call(t);
                }, t.isFunction = function(t) {
                    return "function" == typeof t;
                }, t.isPlainObject = function(t) {
                    return null !== t && "[object Object]" === this.toString.call(t) && "isPrototypeOf" in t;
                }, t.isObject = function(t) {
                    return null !== t && "[object Object]" === this.toString.call(t);
                }, t.isArray = function(t) {
                    return "[object Array]" === this.toString.call(t);
                }, t.isNumber = function(t) {
                    return "number" == typeof t && isFinite(t);
                }, t.isUndefined = function(t) {
                    return void 0 === t || "undefined" === t;
                }, t.hasProperty = function(t, e) {
                    return !!t && t.hasOwnProperty(e);
                }, t.trim = function(t) {
                    return t.replace(/^\s+/g, "").replace(/\s+$/g, "");
                }, t.isEmpty = function(t) {
                    return !t || void 0 === t || this.isString(t) && "" === this.trim(t) || "null" === t;
                }, t.covertArray = function(t) {
                    return this.isArray(t) ? [].concat(t) : [ t ];
                }, t.serializeParams = function(t) {
                    if (!t) return "";
                    var e = encodeURIComponent;
                    return Object.keys(t).map(function(i) {
                        return e(i) + "=" + e(t[i]);
                    }).join("&");
                }, t.compareVersion = function(t, e) {
                    t = t.split("."), e = e.split(".");
                    for (var i = Math.max(t.length, e.length); t.length < i; ) t.push("0");
                    for (;e.length < i; ) e.push("0");
                    for (var n = 0; n < i; n++) {
                        var r = parseInt(t[n]), o = parseInt(e[n]);
                        if (r > o) return 1;
                        if (r < o) return -1;
                    }
                    return 0;
                }, t.clone = function(t) {
                    if (null === t || "object" != r(t)) return t;
                    if (this.isArray(t)) {
                        for (var e = t.slice(), i = 0, n = e.length; i < n; i++) e[i] = this.clone(e[i]);
                        return e;
                    }
                    var o = {};
                    for (var a in t) o[a] = this.clone(t[a]);
                    return o;
                }, t.merge = function(t, e, i) {
                    if (null === t || "object" != r(t)) throw new TypeError("SDK merge() - 第一个参数必须是object, 不能为 " + r(t) + "。");
                    if (null === e || "object" != r(e)) throw new TypeError("SDK merge() - 第二个参数必须是object, 不能为 " + r(e) + "。");
                    if (this.isArray(t) || this.isArray(e)) throw new TypeError("SDK merge() - 不支持数组合并。");
                    for (var n in e) {
                        var o = void 0, a = e[n];
                        Object.prototype.hasOwnProperty.call(t, n) ? i || (null !== (o = t[n]) && "object" == r(o) && null !== a && "object" == r(a) ? this.merge(o, a, !1) : t[n] = this.clone(a)) : t[n] = this.clone(a);
                    }
                    return t;
                }, t.promisifyAsyncWrap = function(t) {
                    return function(e) {
                        return new Promise(function(i, n) {
                            var r = {
                                success: function(t) {
                                    i(t);
                                },
                                fail: function(t) {
                                    n(t);
                                }
                            };
                            t(Object.assign({}, r, e));
                        });
                    };
                }, t;
            }();
            dt(ce, "toString", Object.prototype.toString), t._RF.pop(), t._RF.push({}, "5342c+RJdNHib3qadUC4xpM", "SignUtils", void 0);
            var he = function() {
                function t() {}
                var e = t.prototype;
                return e.createSign = function(t) {
                    var e = this.createQuery(t) + "" + Ct.appkey;
                    return ue.hashStr(e);
                }, e.ksort = function(t) {
                    var e, i, n, r = {}, o = [], a = {};
                    for (n in e = function(t, e) {
                        var i = parseFloat(t), n = parseFloat(e), r = i + "" === t, o = n + "" === e;
                        return r && o ? i > n ? 1 : i < n ? -1 : 0 : r && !o ? 1 : !r && o ? -1 : t > e ? 1 : t < e ? -1 : 0;
                    }, t) t.hasOwnProperty(n) && o.push(n);
                    for (o.sort(e), i = 0; i < o.length; i++) r[n = o[i]] = t[n];
                    for (i in r) r.hasOwnProperty(i) && (a[i] = r[i]);
                    return a;
                }, e.createQuery = function(t) {
                    t = t || {};
                    for (var e = Object.keys(this.ksort(t)), i = "", n = "", r = 0, o = e.length; r < o; r++) "" !== t[e[r]] && "0" !== t[e[r]] && 0 !== t[e[r]] && "ver" !== e[r] && (i = e[r], 
                    r && (n += ""), ce.isArray(t[i]) ? n += i + "=" + JSON.stringify(t[i]) : n += i + "=" + t[i]);
                    return n;
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(he, "instance", void 0), t._RF.pop(), t._RF.push({}, "a6caciHdkVIgbGSxOtcd74H", "SDKHttp", void 0);
            var de, fe, pe, ve, be, ge, me, ye, _e, Ie, we, Se = function() {
                function t() {}
                return t.httpRequest = function() {
                    var t = ut(n.default.mark(function t(e, i, o, a) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.abrupt("return", new Promise(function(t, n) {
                                    if (o = ft({}, o, {
                                        ver: Ct.version,
                                        gameid: Ct.game_id,
                                        sign_type: "md5",
                                        time_stamp: Math.floor(Date.now() / 1e3) + ""
                                    }), (o = ft({}, o, {
                                        sign: he.I.createSign(o)
                                    })) && "object" == r(o) && (o = JSON.stringify(o)), o = o || "", "GET" == i && "" != o) {
                                        o = JSON.parse(o);
                                        var a = "";
                                        for (var s in o) a = a + "" + s + "=" + o[s] + "&";
                                        e += "?" + a, o = "";
                                    }
                                    var l = new XMLHttpRequest();
                                    l.onreadystatechange = function() {
                                        if (4 == l.readyState) if (l.status >= 200 && l.status < 400) {
                                            var i = l.responseText;
                                            try {
                                                return i = JSON.parse(i), void (e.indexOf(".json") > -1 ? t({
                                                    code: 0,
                                                    data: i,
                                                    msg: i.msg
                                                }) : t({
                                                    code: +i.code,
                                                    data: i.data,
                                                    msg: i.msg
                                                }));
                                            } catch (e) {
                                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                                return void t({
                                                    msg: "JSON parse error:" + e.message,
                                                    code: -1
                                                });
                                            }
                                        } else console.error(l.status, "网络请求失败！"), t({
                                            code: -1
                                        });
                                    }, l.ontimeout = function(e) {
                                        t({
                                            msg: "请求超时！",
                                            code: -1
                                        });
                                    }, l.onerror = function(e) {
                                        t({
                                            msg: "请求失败！",
                                            code: -1
                                        });
                                    }, l.onabort = function(e) {
                                        t({
                                            msg: "请求失败！",
                                            code: -1
                                        });
                                    }, l.open(i, e, !0), "POST" == i && l.setRequestHeader("Content-Type", "application/json;charset=utf-8"), 
                                    l.timeout = 3e3, l.send(o);
                                }));

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e, i, n, r) {
                        return t.apply(this, arguments);
                    };
                }(), t.httpGet = function() {
                    var t = ut(n.default.mark(function t(e, i, r) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.abrupt("return", (void 0 === r && (r = "json"), this.httpRequest(e, "GET", i, r)));

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n) {
                        return t.apply(this, arguments);
                    };
                }(), t.httpPost = function(t, e, i) {
                    return void 0 === i && (i = "json"), this.httpRequest(t, "POST", e, i);
                }, t;
            }();
            t._RF.pop(), t._RF.push({}, "cdd6618qIhGSaRZnOXnvzHW", "SDKEnum", void 0), function(t) {
                t[t.Prod = 2] = "Prod", t[t.Pre = 1] = "Pre";
            }(de || (de = {})), function(t) {
                t[t.Invalid = -1] = "Invalid", t[t.Unknown = 0] = "Unknown", t[t.Male = 1] = "Male", 
                t[t.Female = 2] = "Female";
            }(fe || (fe = {})), function(t) {
                t[t.Click = 0] = "Click", t[t.Cancel = -1] = "Cancel";
            }(pe || (pe = {})), function(t) {
                t[t.None = -1] = "None", t[t.Share = 1] = "Share", t[t.Video = 2] = "Video", t[t.VideoToShare = 3] = "VideoToShare";
            }(ve || (ve = {})), function(t) {
                t[t.None = 0] = "None", t[t.Share = 1] = "Share", t[t.ShareAysnc = 2] = "ShareAysnc", 
                t[t.Video = 3] = "Video";
            }(be || (be = {})), function(t) {
                t[t.ShareLaunch = 10] = "ShareLaunch", t[t.ShareInterrupt = 11] = "ShareInterrupt", 
                t[t.ShareSuccess = 12] = "ShareSuccess", t[t.ShareEnterLaunch = 13] = "ShareEnterLaunch", 
                t[t.ShareEnterGame = 14] = "ShareEnterGame", t[t.VideoFetchSuccess = 20] = "VideoFetchSuccess", 
                t[t.VideoPlayInterrupt = 21] = "VideoPlayInterrupt", t[t.VideoPlayComplete = 22] = "VideoPlayComplete", 
                t[t.VideoFetchFail = 23] = "VideoFetchFail", t[t.InterstitialAdSuccess = 30] = "InterstitialAdSuccess", 
                t[t.InterstitialAdFail = 31] = "InterstitialAdFail";
            }(ge || (ge = {})), function(t) {
                t[t.default = 0] = "default", t[t.share = 1] = "share", t[t.click = 2] = "click";
            }(me || (me = {})), function(t) {
                t[t.default = 0] = "default", t[t.banner = 1] = "banner", t[t.video = 2] = "video", 
                t[t.interstitial = 3] = "interstitial", t[t.grid = 4] = "grid", t[t.custom = 5] = "custom";
            }(ye || (ye = {})), function(t) {
                t[t.default = 0] = "default", t[t.request = 1] = "request", t[t.rt = 2] = "rt", 
                t[t.show = 3] = "show", t[t.click = 4] = "click", t[t.complete = 5] = "complete", 
                t[t.interrupt = 6] = "interrupt", t[t.fail = 7] = "fail";
            }(_e || (_e = {})), function(t) {
                t.Wifi = "wifi", t["2g"] = "2g", t["3g"] = "3g", t["4g"] = "4g", t.Unknown = "unknown", 
                t.None = "none";
            }(Ie || (Ie = {})), function(t) {
                t[t.default = 0] = "default", t[t.draw = 1] = "draw", t[t.guessLike = 2] = "guessLike", 
                t[t.grid = 3] = "grid", t[t.play = 4] = "play";
            }(we || (we = {})), t._RF.pop(), t._RF.push({}, "f09e3j/TWhBfokElJEn5NMh", "SdkData", void 0);
            var Ce, Ae = function() {
                dt(this, "token", void 0), dt(this, "refToken", void 0), dt(this, "expice", void 0), 
                dt(this, "isnew", void 0), dt(this, "scene", void 0), dt(this, "openId", void 0), 
                dt(this, "userId", void 0), dt(this, "regTime", void 0), dt(this, "launchTime", void 0), 
                dt(this, "shareId", void 0), dt(this, "shareKey", void 0), dt(this, "platform", void 0), 
                dt(this, "networkType", void 0), dt(this, "gender", void 0), dt(this, "channelId", void 0), 
                dt(this, "queryChannelId", void 0), dt(this, "inviteType", void 0), dt(this, "shareTicket", void 0), 
                dt(this, "systemId", void 0), dt(this, "launchKey", void 0), dt(this, "launchSource", void 0), 
                dt(this, "authorize", void 0), dt(this, "referrerInfo", void 0), dt(this, "version", void 0), 
                dt(this, "cdnUrl", void 0), dt(this, "envEnum", void 0), dt(this, "inviteUid", void 0), 
                dt(this, "queryUserInviteUid", void 0), dt(this, "queryExtData", void 0), dt(this, "shield", void 0), 
                dt(this, "configParams", void 0), dt(this, "userState", void 0), dt(this, "isCross", void 0), 
                dt(this, "isDrawer", void 0), dt(this, "isGuessLike", void 0), this.token = "", 
                this.refToken = "", this.expice = 0, this.isnew = 0, this.scene = "", this.openId = "", 
                this.userId = 0, this.regTime = "", this.launchTime = 0, this.shareId = 0, this.shareKey = "", 
                this.platform = "", this.networkType = Ie.Unknown, this.gender = fe.Unknown, this.channelId = 0, 
                this.queryChannelId = 0, this.queryExtData = {}, this.inviteType = 0, this.shareTicket = "", 
                this.systemId = 0, this.launchKey = "", this.launchSource = -1, this.authorize = !1, 
                this.cdnUrl = "", this.envEnum = 2, this.version = "1.0", this.inviteUid = 0, this.queryUserInviteUid = 0, 
                this.shield = 0, this.configParams = null, this.userState = Ce.Default, this.isCross = !1, 
                this.isDrawer = !1, this.isGuessLike = !1;
            };
            !function(t) {
                t[t.Default = 0] = "Default", t[t.Old = 1] = "Old", t[t.New = 2] = "New";
            }(Ce || (Ce = {})), t._RF.pop(), t._RF.push({}, "60130FMeqNOtLgYWD2Tep8F", "WxStorage", void 0);
            var Te = function() {
                function t() {}
                var e = t.prototype;
                return e.getItem = function(t) {
                    return wx.getStorageSync(t);
                }, e.setItem = function(t, e) {
                    wx.setStorageSync(t, e);
                }, e.removeItem = function(t) {
                    wx.removeStorageSync(t);
                }, e.clear = function() {
                    wx.clearStorageSync();
                }, e.hasKey = function(t) {
                    var e = wx.getStorageInfoSync().keys, i = [];
                    return e && e.length && (i = e.filter(function(e) {
                        return e === t;
                    })), 0 !== i.length;
                }, t;
            }();
            t._RF.pop(), t._RF.push({}, "b9e02nBK7FNU6eU+EAJX1eQ", "Storage", void 0);
            var ke = function() {
                function t() {}
                var e = t.prototype;
                return e.getItem = function(t) {
                    return localStorage.getItem(t) || "";
                }, e.setItem = function(t, e) {
                    localStorage.setItem(t, e);
                }, e.removeItem = function(t) {
                    localStorage.removeItem(t);
                }, e.clear = function() {
                    localStorage.clear();
                }, e.hasKey = function(t) {
                    var e = localStorage.length;
                    if (e) for (var i = 0; i < e; i++) if (t === localStorage.key(i)) return !0;
                    return !1;
                }, t;
            }();
            t._RF.pop(), t._RF.push({}, "ffc5dnZ+ZhDhbDFKTMMXvKV", "StorageUtils", void 0);
            var xe = function() {
                function t() {
                    dt(this, "store", null), "object" == ("undefined" == typeof localStorage ? "undefined" : r(localStorage)) && (this.store = new ke()), 
                    "undefined" != typeof wx && (this.store = new Te());
                }
                var e = t.prototype;
                return e.__isExpired = function(t) {
                    return !t || this.timestamp - (t.timestamp + t.expiration) >= 0;
                }, e.set = function(t, e, i) {
                    void 0 === i && (i = 0);
                    var n = {
                        timestamp: this.timestamp,
                        expiration: i,
                        key: t,
                        value: e
                    };
                    return this.store.setItem(t, JSON.stringify(n)), this;
                }, e.get = function(t) {
                    var e;
                    try {
                        if (!(e = this.store.getItem(t))) return null;
                        e = JSON.parse(e);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        return console.warn(t), null;
                    }
                    return e.expiration && this.__isExpired(e) ? (this.remove(t), null) : e.value;
                }, e.remove = function(t) {
                    try {
                        this.store.removeItem(t);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        console.warn(t);
                    }
                    return this;
                }, e.clear = function() {
                    try {
                        this.store.clear();
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        console.warn(t);
                    }
                    return this;
                }, e.isExist = function(t) {
                    return this.store.hasKey(t);
                }, ht(t, [ {
                    key: "timestamp",
                    get: function() {
                        return +(new Date().getTime() / 1e3).toFixed(0);
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(xe, "instance", void 0), t._RF.pop(), t._RF.push({}, "640e9AX5vdNjZ+vi7mf1+Er", "WxLaunch", void 0);
            var Ee, Be, Pe, Re = function() {
                function t() {
                    dt(this, "data", void 0), this.data = wx.getLaunchOptionsSync();
                }
                return ht(t, [ {
                    key: "LaunchData",
                    get: function() {
                        return this.data;
                    }
                }, {
                    key: "query",
                    get: function() {
                        return this.data.query;
                    }
                }, {
                    key: "scene",
                    get: function() {
                        return this.data.scene;
                    }
                }, {
                    key: "shareTicket",
                    get: function() {
                        return this.data.shareTicket;
                    }
                }, {
                    key: "referrerInfo",
                    get: function() {
                        return this.data.referrerInfo;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(Re, "instance", void 0), t._RF.pop(), t._RF.push({}, "470deaGE9FILYt52nMsV7Kw", "TimeManager", void 0);
            var Le, De = e.ccclass, Oe = (e.property, De("TimeManager")((Pe = Be = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "_persistRootNode", null), 
                    e;
                }
                return pt(e, t), e.prototype.init = function() {
                    this._persistRootNode || (this._persistRootNode = new i("time"), o.addPersistRootNode(this._persistRootNode), 
                    this._persistRootNode.addComponent(e));
                }, ht(e, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new e(), this._instance.init()), this._instance;
                    }
                } ]), e;
            }(a), dt(Be, "_instance", void 0), Ee = Pe)) || Ee);
            t._RF.pop(), t._RF.push({}, "d775bLmEZFPQKR1b/MsAuHV", "Utils", void 0);
            var Me = e.ccclass;
            function Fe(t) {
                return new RegExp("({)?\\{" + t + "\\}(?!})", "gm");
            }
            function Ne(t) {
                return null == t ? "" : t.replace(Fe("\\d+"), "");
            }
            e.property, String.prototype.format = function() {
                for (var t = this.toString(), e = 0; e < arguments.length; e++) {
                    var i = Fe(e);
                    arguments[e] = String(arguments[e]).replace(/\$/gm, "♒☯◈∭"), t = (t = t.replace(i, null == arguments[e] ? "" : arguments[e])).replace(/♒☯◈∭/gm, "$");
                }
                return Ne(t);
            };
            var ze, Ge, Ue, Ve = Me("Utils")(Le = function() {
                function t() {}
                return t.clone = function(t) {
                    if (null === t || "object" != r(t)) return t;
                    var e = {};
                    for (var i in t.constructor === Array && (e = []), t) t.hasOwnProperty(i) && (e[i] = this.clone(t[i]));
                    return e;
                }, t.objectToArray = function(t) {
                    var e = [];
                    for (var i in t) t.hasOwnProperty(i) && e.push(t[i]);
                    return e;
                }, t.arrayToObject = function(t, e) {
                    var i = {};
                    for (var n in t) t.hasOwnProperty(n) && t[n][e] && (i[t[n][e]] = t[n]);
                    return i;
                }, t.getWeightRandIndex = function(t, e) {
                    for (var i = Math.floor(Math.random() * e), n = 0, r = 0; r < t.length && !(i < (n += t[r])); r++) ;
                    return r;
                }, t.getRandomNFromM = function(t, e) {
                    for (var i = [], n = 0, r = 0; r < e && !(r >= t + 1); ) {
                        n = this.getRandomInt(0, t);
                        for (var o = 0, a = 0; a < r; a++) if (i[a] === n) {
                            o = 1;
                            break;
                        }
                        0 === o && (i[r] = n, r++);
                    }
                    return i;
                }, t.getRandomInt = function(t, e) {
                    var i = Math.random() * (e - t + 1) + t;
                    return Math.floor(i);
                }, t.random = function(t, e) {
                    return Math.random() * (e - t) + t;
                }, t.getStringLength = function(t) {
                    for (var e = t, i = 0, n = 0, r = e.length; n < r; n++) i += e.charCodeAt(n) <= 255 ? 1 : 2;
                    return Math.ceil(i / 2);
                }, t.isEmptyObject = function(t) {
                    var e = !0;
                    if (t && t.constructor === Object) {
                        for (var i in t) if (t.hasOwnProperty(i)) {
                            e = !1;
                            break;
                        }
                    } else e = !1;
                    return e;
                }, t.isNewDay = function(t) {
                    var e = new Date(t), i = new Date(), n = e.getYear(), r = e.getMonth(), o = e.getDate(), a = i.getYear(), s = i.getMonth(), l = i.getDate();
                    return a > n || s > r || l > o;
                }, t.getPropertyCount = function(t) {
                    var e, i = 0;
                    for (e in t) t.hasOwnProperty(e) && i++;
                    return i;
                }, t.difference = function(t, e) {
                    var i = [];
                    if (t.constructor !== Array || e.constructor !== Array) return i;
                    for (var n = t.length, r = 0; r < n; r++) -1 === e.indexOf(t[r]) && i.push(t[r]);
                    return i;
                }, t._stringToArray = function(t) {
                    var e, i = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", n = RegExp("[\\u200d\\ud800-\\udfff" + i + "\\ufe0e\\ufe0f]"), r = "\\ud83c[\\udffb-\\udfff]", o = "[\\ufe0e\\ufe0f]?", a = "[" + i + "]", s = "(?:" + a + "|" + r + ")?", l = "[^\\ud800-\\udfff]", u = "(?:\\ud83c[\\udde6-\\uddff]){2}", c = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = o + s + "(?:\\u200d(?:" + [ l, u, c ].join("|") + ")" + o + s + ")*", d = "(?:" + [ l + a + "?", a, u, c, "[\\ud800-\\udfff]" ].join("|") + ")", f = RegExp(r + "(?=" + r + ")|" + d + h, "g");
                    return e = t, n.test(e) ? function(t) {
                        return t.match(f) || [];
                    }(t) : function(t) {
                        return t.split("");
                    }(t);
                }, t.simulationUUID = function() {
                    function t() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                    }
                    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
                }, t.trim = function(t) {
                    return t.replace(/(^\s*)|(\s*$)/g, "");
                }, t.isNowValid = function(t, e) {
                    var i = new Date(t), n = new Date(e), r = !1;
                    if (i.getDate() + "" != "NaN" && n.getDate() + "" != "NaN") {
                        var o = new Date();
                        r = o < n && o > i;
                    }
                    return r;
                }, t.getDeltaDays = function(t, e) {
                    t = new Date(t), e = new Date(e);
                    var i = t.getFullYear(), n = t.getMonth() + 1, r = t.getDate(), o = e.getFullYear(), a = e.getMonth() + 1, s = e.getDate();
                    t = new Date(i + "/" + n + "/" + r + " GMT+0800").getTime();
                    var l = (e = new Date(o + "/" + a + "/" + s + " GMT+0800").getTime()) - t;
                    return Math.floor(l / 864e5);
                }, t.getMin = function(t) {
                    var e = null;
                    if (t.constructor === Array) for (var i = t.length, n = 0; n < i; n++) e = 0 === n ? Number(t[0]) : e > Number(t[n]) ? Number(t[n]) : e;
                    return e;
                }, t.formatTwoDigits = function(t) {
                    return (Array(2).join(0) + t).slice(-2);
                }, t.formatDate = function(t, e) {
                    var i = {
                        "M+": t.getMonth() + 1,
                        "d+": t.getDate(),
                        "h+": t.getHours(),
                        "m+": t.getMinutes(),
                        "s+": t.getSeconds(),
                        "q+": Math.floor((t.getMonth() + 3) / 3),
                        S: t.getMilliseconds()
                    };
                    for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), 
                    i) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? i[n] : ("00" + i[n]).substr(("" + i[n]).length)));
                    return e;
                }, t.getDay = function() {
                    var t = new Date();
                    return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
                }, t.formatName = function(t, e) {
                    e = e || 6;
                    var i = this._stringToArray(t), n = "";
                    if (i.length > e) {
                        for (var r = 0; r < e; r++) n += i[r];
                        n += "...";
                    } else n = t;
                    return n;
                }, t.formatMoney = function(t) {
                    for (var e = [ "", "K", "M", "G", "T", "P", "E", "Z", "Y", "B", "N", "D" ], i = "", n = 0; n < e.length; n++) {
                        if (!(t >= 1e4)) {
                            i = Math.floor(t) + e[n];
                            break;
                        }
                        t /= 1e3;
                    }
                    return "" === i && (i = Math.floor(t) + "U"), i;
                }, t.formatValue = function(t) {
                    for (var e = [], i = "", n = 0; n < 26; n++) e.push(String.fromCharCode(97 + n));
                    for (var r = 0; r < e.length; r++) {
                        if (!(t >= 1e4)) {
                            i = Math.floor(t) + e[r];
                            break;
                        }
                        t /= 1e3;
                    }
                    return i;
                }, t.getFormatBySecond = function(t, e) {
                    void 0 === e && (e = 1);
                    var i = "";
                    switch (t > 3600 && 3 == e && (e = 1), e) {
                      case 0:
                        i = this.getFormatBySecond0(t);
                        break;

                      case 1:
                        i = this.getFormatBySecond1(t);
                        break;

                      case 2:
                        i = this.getFormatBySecond2(t);
                        break;

                      case 3:
                        i = this.getFormatBySecond3(t);
                        break;

                      case 4:
                        i = this.getFormatBySecond4(t);
                        break;

                      case 5:
                        i = this.getFormatBySecond5(t);
                    }
                    return i;
                }, t.getFormatBySecond0 = function(t) {
                    void 0 === t && (t = 0);
                    var e = Math.floor(t / 60), i = Math.floor(t % 60);
                    return (0 == e ? "00" : e < 10 ? "0" + e : "" + e) + ":" + (0 == i ? "00" : i < 10 ? "0" + i : "" + i);
                }, t.getFormatBySecond1 = function(t) {
                    void 0 === t && (t = 0);
                    var e, i = Math.floor(t / 3600), n = "";
                    if (0 == i) e = "00"; else if (i < 10) e = "0" + i; else {
                        var r = i % 24;
                        i >= 24 ? (e = r < 10 ? "0" + r : "" + r, n = Math.floor(i / 24) + "d ") : e = r < 10 ? "0" + r : "" + r;
                    }
                    var o = Math.floor((t - 3600 * i) / 60), a = Math.floor((t - 3600 * i) % 60);
                    return n + e + ":" + (0 == o ? "00" : o < 10 ? "0" + o : "" + o) + ":" + (0 == a ? "00" : a < 10 ? "0" + a : "" + a);
                }, t.getFormatBySecond3 = function(t) {
                    void 0 === t && (t = 0);
                    var e = Math.floor(t / 3600), i = Math.floor((t - 3600 * e) / 60), n = Math.floor((t - 3600 * e) % 60);
                    return (0 == i ? "00" : i < 10 ? "0" + i : "" + i) + ":" + (0 == n ? "00" : n < 10 ? "0" + n : "" + n);
                }, t.getFormatBySecond2 = function(t) {
                    var e = new Date(t);
                    return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
                }, t.getFormatBySecond4 = function(t) {
                    var e = Math.floor(t / 3600);
                    return e > 0 ? e > 24 ? Math.floor(e / 24) + "天前" : e + "小时前" : Math.floor(t / 60) + "分钟前";
                }, t.getFormatBySecond5 = function(t) {
                    var e = 3600, i = Math.floor(t / 86400), n = Math.floor(t % 86400 / e), r = Math.floor((t - n * e) / 60), o = Math.floor((t - n * e) % 60), a = "";
                    return t > 0 ? 0 == i ? 0 == n ? (a = "", 0 == r ? 0 == o ? "" : o < 10 ? "0" + o + "秒" : o + "秒" : r + "分" + (0 == o ? "" : o < 10 ? "0" + o + "秒" : o + "秒")) : (a = n + "小时", 
                    0 == r ? a + (0 == o ? "" : o < 10 ? "0" + o + "秒" : o + "秒") : a + (r < 10 ? "0" + r + "分" : r + "分")) : i + "天" + (a = 0 == n ? "" : n < 10 ? "0" + n + "小时" : n + "小时") : "";
                }, t.formatTimeForMillisecond = function(t) {
                    var e = Math.floor(t / 1e3 % 60), i = Math.floor(t / 1e3 / 60 % 60);
                    return {
                        hour: Math.floor(t / 1e3 / 60 / 60),
                        minute: i,
                        second: e
                    };
                }, t.rand = function(t) {
                    for (var e = this.clone(t), i = e.length - 1; i >= 0; i--) {
                        var n = Math.floor(Math.random() * (i + 1)), r = e[n];
                        e[n] = e[i], e[i] = r;
                    }
                    return e;
                }, t.getOffsetMimutes = function(t, e) {
                    var i = e - t;
                    return Math.floor(i % 36e5 / 6e4);
                }, t.formatNumToFixed = function(t, e) {
                    return void 0 === e && (e = 0), Number(t.toFixed(e));
                }, t.lerp = function(t, e, i) {
                    void 0 === i && (i = .25);
                    var n = e;
                    return t > e ? n = e + (t - e) * i : t < e && (n = e - (e - t) * i), n;
                }, t.decrypt = function(t) {
                    var e = 6;
                    t.length % 2 == 0 && (e = 7);
                    for (var i = "", n = 0; n < t.length - e; n += 2) i += t[n + 1], i += t[n];
                    return i += t.slice(t.length - e + 1), this._base64Decode(i);
                }, t.encrypt = function(t) {
                    var e = this._base64encode(t), i = 6;
                    e.length % 2 == 0 && (i = 7);
                    for (var n = "", r = 0; r < (e.length - i + 1) / 2; r++) n += e[2 * r + 1], n += e[2 * r];
                    return n + e.slice(e.length - i + 1);
                }, t._base64encode = function(t) {
                    var e, i, n, r, o, a, s, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", u = "", c = 0;
                    for (t = this._utf8Encode(t); c < t.length; ) r = (e = t.charCodeAt(c++)) >> 2, 
                    o = (3 & e) << 4 | (i = t.charCodeAt(c++)) >> 4, a = (15 & i) << 2 | (n = t.charCodeAt(c++)) >> 6, 
                    s = 63 & n, isNaN(i) ? a = s = 64 : isNaN(n) && (s = 64), u = u + l.charAt(r) + l.charAt(o) + l.charAt(a) + l.charAt(s);
                    return u;
                }, t._utf8Encode = function(t) {
                    t = t.replace(/\r\n/g, "\n");
                    for (var e = "", i = 0; i < t.length; i++) {
                        var n = t.charCodeAt(i);
                        n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), 
                        e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), 
                        e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128));
                    }
                    return e;
                }, t._utf8Decode = function(t) {
                    for (var e = "", i = 0, n = 0, r = 0, o = 0; i < t.length; ) (n = t.charCodeAt(i)) < 128 ? (e += String.fromCharCode(n), 
                    i++) : n > 191 && n < 224 ? (r = t.charCodeAt(i + 1), e += String.fromCharCode((31 & n) << 6 | 63 & r), 
                    i += 2) : (r = t.charCodeAt(i + 1), o = t.charCodeAt(i + 2), e += String.fromCharCode((15 & n) << 12 | (63 & r) << 6 | 63 & o), 
                    i += 3);
                    return e;
                }, t._base64Decode = function(t) {
                    var e, i, n, r, o, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", l = "", u = 0;
                    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < t.length; ) e = s.indexOf(t.charAt(u++)) << 2 | (r = s.indexOf(t.charAt(u++))) >> 4, 
                    i = (15 & r) << 4 | (o = s.indexOf(t.charAt(u++))) >> 2, n = (3 & o) << 6 | (a = s.indexOf(t.charAt(u++))), 
                    l += String.fromCharCode(e), 64 != o && (l += String.fromCharCode(i)), 64 != a && (l += String.fromCharCode(n));
                    return this._utf8Decode(l);
                }, t.checkIsLowPhone = function() {
                    if (window.wx) {
                        var t = -1, e = window.wx.getSystemInfoSync();
                        if (e.system.indexOf("iOS") >= 0) {
                            for (var i = e.model, n = [ "iPhone1,1", "iPhone1,2", "iPhone2,1", "iPhone3,1", "iPhone3,3", "iPhone4,1", "iPhone5,1", "iPhone5,2", "iPhone5,3", "iPhone5,4", "iPhone6,1", "iPhone6,2" ], r = [ "iPhone6,2", "iPhone7,1", "iPhone7,2", "iPhone8,1", "iPhone8,2", "iPhone8,4" ], o = [ "iPhone9,1", "iPhone9,2", "iPhone9,3", "iPhone9,4", "iPhone10,1", "iPhone10,2", "iPhone10,3", "iPhone10,4", "iPhone10,5", "iPhone10,6" ], a = [ "iPhone11,2", "iPhone11,4", "iPhone11,6", "iPhone11,8", "iPhone12,1", "iPhone12,3", "iPhone12,5", "iPhone12,8" ], s = 0; s < n.length; s++) i.indexOf(n[s]) >= 0 && (t = 5);
                            for (var l = 0; l < r.length; l++) i.indexOf(r[l]) >= 0 && (t = 10);
                            for (var u = 0; u < o.length; u++) i.indexOf(o[u]) >= 0 && (t = 20);
                            for (var c = 0; c < a.length; c++) i.indexOf(a[c]) >= 0 && (t = 30);
                        } else t = e.benchmarkLevel;
                        return t < 22;
                    }
                    return !1;
                }, t.splitSting2Int = function(t, e) {
                    for (var i = t.split(e), n = 0; n < i.length; n++) i[n] = parseInt(i[n]);
                    return i;
                }, t.randomInt = function(t, e) {
                    return Math.floor(Math.random() * (e - t + 1) + t);
                }, t.randOneList = function(t) {
                    return t[this.randomInt(0, t.length - 1)];
                }, t.wait = function(t) {
                    return void 0 === t && (t = 1), new Promise(function(e, i) {
                        Oe.I.scheduleOnce(e, t);
                    });
                }, t.cacuDis = function(t, e, i, n) {
                    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - e, 2));
                }, t.getRadian2 = function(t, e, i, n) {
                    return Math.atan2(n - e, i - t);
                }, t.getAngle = function(t, e, i, n) {
                    var r = Math.abs(t - i), o = Math.abs(e - n), a = o / Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)), s = Math.acos(a), l = 180 / (Math.PI / s);
                    return i > t && n > e && (l = 180 - l), i == t && n > e && (l = 180), i > t && n == e && (l = 90), 
                    i < t && n > e && (l = 180 + l), i < t && n == e && (l = 270), i < t && n < e && (l = 360 - l), 
                    l;
                }, t.pointToLineDistance = function(t, e, i, n, r, o) {
                    var a = Math.sqrt((i - t) * (i - t) + (n - e) * (n - e));
                    return Math.abs((r - t) * (n - e) - (o - e) * (i - t)) / a;
                }, t.AnimationRecover = function(t, e) {
                    var i;
                    if (t) {
                        var n = t.getState(e || (null === (i = t.clips[0]) || void 0 === i ? void 0 : i.name));
                        n && (n.setTime(0), n.sample());
                    }
                }, t.subV2 = function(t, e) {
                    return s(t.x - e.x, t.y - e.y);
                }, t.addV2 = function(t, e) {
                    return s(t.x + e.x, t.y + e.y);
                }, t.mulV2 = function(t, e) {
                    return s(t.x * e, t.y * e);
                }, t.subV3 = function(t, e) {
                    return l(t.x - e.x, t.y - e.y, t.z - e.z);
                }, t.addV3 = function(t, e) {
                    return l(t.x + e.x, t.y + e.y, t.z + e.z);
                }, t.mulV3 = function(t, e) {
                    return l(t.x * e, t.y * e, t.z * e);
                }, t.removeFromList = function(t, e) {
                    var i = t.indexOf(e);
                    i < 0 || t.splice(i, 1);
                }, t.toFixed = function(t, e) {
                    var i = Math.pow(10, e);
                    return Math.round(t * i) / i;
                }, t.playSpine = function() {
                    var t = ut(n.default.mark(function t(e, i, r) {
                        var o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return void 0 === r && (r = !1), i || (i = e.animation), o = e.setAnimation(0, i, r), 
                                a = o ? o.animation.duration : this.getSpineDuration(e, i), t.next = 4, this.wait(a / e.timeScale);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n) {
                        return t.apply(this, arguments);
                    };
                }(), t.getSpineDuration = function(t, e) {
                    if (!(t && t.skeletonData && t.skeletonData._skeletonCache && t.skeletonData._skeletonCache.animations)) return 0;
                    for (var i = 0; i < t.skeletonData._skeletonCache.animations.length; ++i) if (t.skeletonData._skeletonCache.animations[i].name == e) return t.skeletonData._skeletonCache.animations[i].duration;
                }, t.runWithCancel = function(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    var r, o, a = t.apply(void 0, i), s = new Promise(function(t, e) {
                        function i(t) {
                            if (!r) {
                                var i;
                                try {
                                    i = a.next(t);
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    return e(t);
                                }
                                return s(i), null;
                            }
                        }
                        function n(t) {
                            var i;
                            try {
                                i = a.throw(t);
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                return e(t);
                            }
                            s(i);
                        }
                        function s(e) {
                            var r = e.done, o = e.value;
                            return r ? t(o) : o.then(i, n);
                        }
                        o = function() {
                            r = !0, e({
                                reason: "cancelled"
                            });
                        }, i();
                    });
                    return s.catch(function() {}), {
                        promise: s,
                        cancel: o
                    };
                }, t.getTomorrowHourTime = function(t) {
                    var e = new Date(), i = e.getTime() + 864e5;
                    e.setTime(i);
                    var n = e.getFullYear(), r = e.getMonth(), o = e.getDate();
                    return new Date(n, r, o, t, 0, 0, 0).getTime();
                }, t.formatString = function(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    return String.format.apply(String, i);
                }, t.isNewWeek = function(t) {
                    var e = new Date(t), i = e.getFullYear(), n = e.getMonth(), r = e.getDate(), o = e.getDay();
                    0 == o && (o = 7);
                    var a = new Date(i, n, r, 0, 0, 0, 0).getTime();
                    return a -= 864e5 * (o - 1), new Date().getTime() - a >= 6048e5;
                }, ht(t, null, [ {
                    key: "winWidth",
                    get: function() {
                        return u("Canvas").getComponent(c).width;
                    }
                }, {
                    key: "winHeight",
                    get: function() {
                        return u("Canvas").getComponent(c).height;
                    }
                } ]), t;
            }()) || Le;
            t._RF.pop(), t._RF.push({}, "45820lZfU1DEYZNzfMqrRr4", "StorageManager", void 0);
            var We = e.ccclass, He = (e.property, We("StorageManager")((Ue = Ge = function() {
                function t() {
                    dt(this, "_jsonData", {}), dt(this, "_path", null), dt(this, "KEY_CONFIG", "template"), 
                    dt(this, "_markSave", !1), dt(this, "_saveTimer", -1);
                }
                var e = t.prototype;
                return e.init = function() {
                    var t, e = this;
                    if (this._jsonData = {
                        userId: "001",
                        "001": {}
                    }, this._path = this._getConfigPath(), (t = h.isNative ? jsb.fileUtils.getValueMapFromFile(this._path)[this.KEY_CONFIG] : h.localStorage.getItem(this.KEY_CONFIG)) && t.length) {
                        t.startsWith("@") && (t = t.substring(1), t = Ve.decrypt(t));
                        try {
                            var i = JSON.parse(t);
                            this._jsonData = i;
                        } catch (t) {}
                    }
                    this._saveTimer = Oe.I.schedule(function() {
                        return e.scheduleSave();
                    }, .1);
                }, e.setConfigDataWithoutSave = function(t, e) {
                    var i = this._jsonData.userId;
                    this._jsonData[i] ? this._jsonData[i][t] = e : console.error("no account can not save");
                }, e.setConfigData = function(t, e) {
                    this.setConfigDataWithoutSave(t, e), this._markSave = !0;
                }, e.getConfigData = function(t) {
                    var e = this._jsonData.userId;
                    return this._jsonData[e] ? this._jsonData[e][t] || "" : (d("no account can not load"), 
                    "");
                }, e.setGlobalData = function(t, e) {
                    this._jsonData[t] = e, this.save();
                }, e.getGlobalData = function(t) {
                    return this._jsonData[t];
                }, e.setUserId = function(t) {
                    this._jsonData.userId = t, this._jsonData[t] || (this._jsonData[t] = {}), this.save();
                }, e.getUserId = function() {
                    return this._jsonData.userId;
                }, e.scheduleSave = function() {
                    this._markSave && this.save();
                }, e.markModified = function() {
                    this._markSave = !0;
                }, e.save = function() {
                    var t = JSON.stringify(this._jsonData), e = "@" + Ve.encrypt(t);
                    if (this._markSave = !1, h.isNative) {
                        var i = {};
                        i[this.KEY_CONFIG] = e, jsb.fileUtils.writeToFile(i);
                    } else h.localStorage.setItem(this.KEY_CONFIG, e);
                }, e._getConfigPath = function() {
                    var t = h.platform, e = "";
                    return t === h.OS.WINDOWS ? e = "src/conf" : t === h.OS.LINUX ? e = "./conf" : h.isNative ? (e = jsb.fileUtils.getWritablePath(), 
                    e += "conf") : e = "src/conf", e;
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t(), this._instance.init()), this._instance;
                    }
                } ]), t;
            }(), dt(Ge, "_instance", void 0), ze = Ue)) || ze);
            t._RF.pop(), t._RF.push({}, "b8d44MrVH5K9q4dkY3UOluS", "DataService", void 0);
            var je = function() {
                function t() {
                    dt(this, "_data", void 0), this.load();
                }
                var e = t.prototype;
                return e.setValue = function(t, e) {
                    var i;
                    ce.isUndefined(e) || (this._data = ft({}, this._data, ((i = {})[t] = e, i)), this.save());
                }, e.clear = function() {
                    this._data = this.initData(), this.save();
                }, e.initData = function() {
                    return new Ae();
                }, e.load = function() {
                    var t = He.I.getConfigData("bubble_shooter_sdkdata"), e = t ? JSON.parse(t) : {};
                    this._data = ft({}, this.initData(), e), this.save();
                }, e.save = function() {
                    He.I.setConfigData("bubble_shooter_sdkdata", JSON.stringify(this._data));
                }, e.setLoginData = function(t) {
                    t && 0 !== Object.keys(t).length && (t.hasOwnProperty("openId") && this.setOpenId(t.openId), 
                    t.hasOwnProperty("channel") && this.setChannelId(t.channel), t.hasOwnProperty("userId") && this.setUserId(t.userId), 
                    t.hasOwnProperty("regTime") && this.setRegTime(t.regTime), t.hasOwnProperty("token") && this.setToken(t.token), 
                    t.hasOwnProperty("refToken") && this.setRefToken(t.refToken), t.hasOwnProperty("expire") && this.setExpice(t.expire), 
                    t.hasOwnProperty("isnew") && this.setIsnew(t.isnew));
                }, e.setExpice = function(t) {
                    return this.setValue("expire", t), this;
                }, e.setIsnew = function(t) {
                    return this.setValue("isnew", t), this;
                }, e.setScene = function(t) {
                    return this.setValue("scene", t), this;
                }, e.setReferrerInfo = function(t) {
                    return this.setValue("referrerInfo", t), this;
                }, e.setToken = function(t) {
                    return this.setValue("token", t), this;
                }, e.setRefToken = function(t) {
                    return this.setValue("refToken", t), this;
                }, e.setOpenId = function(t) {
                    return this.setValue("openId", t), this;
                }, e.setUserId = function(t) {
                    return this.setValue("userId", t), this;
                }, e.setRegTime = function(t) {
                    return this.setValue("regTime", t), this;
                }, e.setLaunchTime = function(t) {
                    return this.setValue("launchTime", t), this;
                }, e.setShareId = function(t) {
                    return this.setValue("shareId", t), this;
                }, e.setShareKey = function(t) {
                    return this.setValue("shareKey", t), this;
                }, e.setPlatform = function(t) {
                    return this.setValue("platform", t), this;
                }, e.setNetworkType = function(t) {
                    return this.setValue("networkType", t), this;
                }, e.setGender = function(t) {
                    return this.setValue("gender", t), this;
                }, e.setChannelId = function(t) {
                    return this.setValue("channelId", t), this;
                }, e.setQueryChannelId = function(t) {
                    return this.setValue("queryChannelId", t), this;
                }, e.setInviteType = function(t) {
                    return this.setValue("inviteType", t), this;
                }, e.setQueryUserInviteUid = function(t) {
                    return this.setValue("queryUserInviteUid", t), this;
                }, e.setQueryExtData = function(t) {
                    return this.setValue("queryExtData", t), this;
                }, e.setUserInviteUid = function(t) {
                    return this.setValue("inviteUid", t), this;
                }, e.setUserState = function(t) {
                    return this.setValue("userState", t), this;
                }, e.setShield = function(t) {
                    return this.setValue("shield", t), xe.I.set(Zt, t), this;
                }, e.setShareTicket = function(t) {
                    return this.setValue("shareTicket", t), this;
                }, e.setSystemId = function() {
                    var t = "android" === this.Platform ? 1 : 0;
                    return this.setValue("systemId", t), this;
                }, e.setAuthorize = function(t) {
                    return this.setValue("authorize", t), this;
                }, e.setVersion = function(t) {
                    return this.setValue("version", t), this;
                }, e.setCdnUrl = function(t) {
                    return this.setValue("cdnUrl", t), this;
                }, e.setEnvEnum = function(t) {
                    return this.setValue("envEnum", t), this;
                }, e.fixLaunchKey = function(t) {
                    return t && (xe.I.set(Qt, t), this.setValue("launchKey", t)), this;
                }, e.setLaunchSource = function() {
                    var t = 0, e = Re.I.LaunchData.query;
                    return e ? e.scene ? decodeURIComponent(e.scene).split("&")[1] && (t = 1) : (e.user_invite_id || e.user_invite_uid || e.invite_unionid) && (t = 1) : t = 0, 
                    this.setValue("launchSource", t), this;
                }, e.setIsCross = function(t) {
                    return this.setValue("isCross", t), this;
                }, e.setIsDrawer = function(t) {
                    return this.setValue("isDrawer", t), this;
                }, e.setIsGuessLike = function(t) {
                    return this.setValue("isGuessLike", t), this;
                }, ht(t, [ {
                    key: "Data",
                    get: function() {
                        return this._data;
                    }
                }, {
                    key: "expice",
                    get: function() {
                        return this._data.expice;
                    }
                }, {
                    key: "isnew",
                    get: function() {
                        return this._data.isnew;
                    }
                }, {
                    key: "Scene",
                    get: function() {
                        return this._data.scene || 0;
                    }
                }, {
                    key: "ReferrerInfo",
                    get: function() {
                        return this._data.referrerInfo || {};
                    }
                }, {
                    key: "Token",
                    get: function() {
                        return this._data.token || "";
                    }
                }, {
                    key: "refToken",
                    get: function() {
                        return this._data.refToken;
                    }
                }, {
                    key: "OpenId",
                    get: function() {
                        return this._data.openId;
                    }
                }, {
                    key: "UserId",
                    get: function() {
                        return this._data.userId ? this._data.userId : this.OpenId;
                    }
                }, {
                    key: "RegTime",
                    get: function() {
                        return this._data.regTime;
                    }
                }, {
                    key: "LaunchTime",
                    get: function() {
                        return this._data.launchTime;
                    }
                }, {
                    key: "ShareId",
                    get: function() {
                        return this._data.shareId;
                    }
                }, {
                    key: "ShareKey",
                    get: function() {
                        return this._data.shareKey;
                    }
                }, {
                    key: "Platform",
                    get: function() {
                        return this._data.platform;
                    }
                }, {
                    key: "Gender",
                    get: function() {
                        return this._data.gender || fe.Unknown;
                    }
                }, {
                    key: "ChannelId",
                    get: function() {
                        return this._data.channelId;
                    }
                }, {
                    key: "QueryChannelId",
                    get: function() {
                        return this._data.queryChannelId || 0;
                    }
                }, {
                    key: "InviteType",
                    get: function() {
                        return this._data.inviteType || 0;
                    }
                }, {
                    key: "QueryUserInviteUid",
                    get: function() {
                        return this._data.queryUserInviteUid || 0;
                    }
                }, {
                    key: "QueryExtData",
                    get: function() {
                        return this._data.queryExtData || {};
                    }
                }, {
                    key: "UserInviteUid",
                    get: function() {
                        return this._data.inviteUid || 0;
                    }
                }, {
                    key: "Shield",
                    get: function() {
                        return this._data.shield || xe.I.get(Zt) || 0;
                    }
                }, {
                    key: "ShareTicket",
                    get: function() {
                        return this._data.shareTicket;
                    }
                }, {
                    key: "SystemId",
                    get: function() {
                        return this._data.systemId;
                    }
                }, {
                    key: "Authorize",
                    get: function() {
                        return this._data.authorize;
                    }
                }, {
                    key: "Version",
                    get: function() {
                        return this._data.version;
                    }
                }, {
                    key: "CdnUrl",
                    get: function() {
                        return this._data.cdnUrl;
                    }
                }, {
                    key: "EnvEnum",
                    get: function() {
                        return this._data.envEnum;
                    }
                }, {
                    key: "LoginApi",
                    get: function() {
                        var t = "https://login-wxsdk.d3games.com/";
                        return 1 === this.EnvEnum && (t = "https://login-wxsdk-pre.d3games.com/"), t;
                    }
                }, {
                    key: "GameApi",
                    get: function() {
                        var t = "https://wxsdk-data.d3games.com/";
                        return 1 === this.EnvEnum && (t = "https://wxsdk-data-pre.d3games.com/"), t;
                    }
                }, {
                    key: "DotApi",
                    get: function() {
                        var t = "https://wxsdk-api.cn-beijing.log.aliyuncs.com/";
                        return 1 === this.EnvEnum && (t = "https://wxsdk-api.cn-beijing.log.aliyuncs.com/"), 
                        t;
                    }
                }, {
                    key: "GameId",
                    get: function() {
                        return Ct.game_id;
                    }
                }, {
                    key: "LaunchKey",
                    get: function() {
                        return this._data.launchKey || xe.I.get(Qt) || "";
                    }
                }, {
                    key: "IsCross",
                    get: function() {
                        return this._data.isCross;
                    }
                }, {
                    key: "IsDrawer",
                    get: function() {
                        return this._data.isDrawer;
                    }
                }, {
                    key: "IsGuessLike",
                    get: function() {
                        return this._data.isGuessLike;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(je, "instance", void 0), t._RF.pop(), t._RF.push({}, "0605fxjPCdKBYVMmDj1aZA3", "SDKApi", void 0);
            var Ye = function() {};
            dt(Ye, "Version", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + At ].concat(e));
            }), dt(Ye, "ShareList", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + zt ].concat(e));
            }), dt(Ye, "notice", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + Jt ].concat(e));
            }), dt(Ye, "getConfig", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + Gt ].concat(e));
            }), dt(Ye, "subscribe", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + Ut ].concat(e));
            }), dt(Ye, "sendsubscribe", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + qt ].concat(e));
            }), dt(Ye, "saveData", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + Vt ].concat(e));
            }), dt(Ye, "getData", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + Wt ].concat(e));
            }), dt(Ye, "rankAdd", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + Ht ].concat(e));
            }), dt(Ye, "totalrankAdd", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + Yt ].concat(e));
            }), dt(Ye, "rankList", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + jt ].concat(e));
            }), dt(Ye, "totalrankList", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + Kt ].concat(e));
            }), dt(Ye, "adList", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.GameApi + Xt ].concat(e));
            }), dt(Ye, "Login", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.LoginApi + Mt ].concat(e));
            }), dt(Ye, "reftoken", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.LoginApi + Nt ].concat(e));
            }), dt(Ye, "weakLogin", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpPost.apply(Se, [ "" + je.I.LoginApi + Ft ].concat(e));
            }), dt(Ye, "logOut", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + xt ].concat(e));
            }), dt(Ye, "loadingFinish", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + Bt ].concat(e));
            }), dt(Ye, "active", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + Tt ].concat(e));
            }), dt(Ye, "share", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + Et ].concat(e));
            }), dt(Ye, "adStat", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + kt ].concat(e));
            }), dt(Ye, "stay", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + Pt ].concat(e));
            }), dt(Ye, "behaviors", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + Rt ].concat(e));
            }), dt(Ye, "dot", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + Lt ].concat(e));
            }), dt(Ye, "jumps", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + Dt ].concat(e));
            }), dt(Ye, "level", function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Se.httpGet.apply(Se, [ "" + je.I.DotApi + Ot ].concat(e));
            }), t._RF.pop(), t._RF.push({}, "4c674kMNHpMvoRNX0bMYbdX", "GameConst", void 0);
            var Ke, qe, Xe, Je = {
                MAX_PASS_TIME: 300,
                MAX_LEVEL: 3e3,
                SHOOT_LINE_MAX: 5e3,
                SHOOT_LINE_SHOW_MAX: 3e3,
                SHOOT_ANGLE_LIMIT: 105,
                BUBBLE_ROW_MAX: 9,
                BUBBLE_CHECK_ROW: 11,
                BUBBLE_R: 34,
                GRID_SCROLL_SPEED: 700,
                SHOOT_BUBBLE_INIT_DELAY: .4,
                SHOOT_BUBBLE_SPEED: 2200,
                FIRE_BALL_AREA: 60,
                CLEAR_INTERVAL: .06,
                BOOSTER_UNLOCK: [ 2, 8, 12, 5 ],
                BOMB_FILL_REQ: 9,
                FIREBALL_FILL_REQ: 6.9,
                LEVEL_REWARD: 15,
                BOOSTER_CONF: [ [ "炸弹", 100, "爆炸时可以炸掉附近的泡泡" ], [ "雷电", 100, "消除一排的泡泡" ], [ "彩虹", 250, "消除它所击中的所有同一颜色的泡泡" ], [ "火箭", 150, "烧掉所接触到的泡泡" ] ],
                HARD_SHOP_BOOSTER_CONF: [ {
                    name: "+5步",
                    price: 100,
                    discount: 70,
                    type: -1
                }, {
                    name: "闪电",
                    price: 100,
                    discount: 70,
                    type: 1
                }, {
                    name: "彩虹",
                    price: 250,
                    discount: 150,
                    type: 2
                } ],
                BUBBLE_CONF: [ [ 18, "双色泡泡", "和它匹配的任一一种颜色都能将其消除。", "102_1" ], [ 20, "金属泡泡", "金属泡泡只能通过道具消除；或尝试让其掉落。", "12" ], [ 30, "钻石泡泡", "钻石泡泡无法被消除，请尝试让其掉落。", "13" ], [ 40, "锁链", "用匹配的颜色击打一次将其解开。", "51" ], [ 50, "黑洞泡泡", "发射到黑洞周围的泡泡会被吸入。", "14" ], [ 70, "双锁链", "用匹配的颜色击打两次将其解开。", "52_1" ], [ 90, "黏液", "它能阻止被包裹的泡泡的消除效果；只能间接地将其消除。", "53" ], [ 123, "水", "用匹配的颜色击打一次将其清除。如果本轮没有泡泡被消除，则它会向外蔓延。", "54" ], [ 155, "冰", "只能通过道具消除；或尝试让其掉落。如果本轮没有泡泡被消除，则它会向外蔓延。", "55" ], [ 200, "狙击泡泡", "与它颜色相同的泡泡靠近时会被击破。", "15_1" ] ],
                ACTIVITY_BUBBLE_CONF: [ [ 1000021, "双色泡泡", "和它匹配的任一一种颜色都能将其消除。", "102_1" ], [ 1000021, "金属泡泡", "金属泡泡只能通过道具消除；或尝试让其掉落。", "12" ], [ 1000021, "钻石泡泡", "钻石泡泡无法被消除，请尝试让其掉落。", "13" ], [ 1000021, "锁链", "用匹配的颜色击打一次将其解开。", "51" ], [ 1000021, "黑洞泡泡", "发射到黑洞周围的泡泡会被吸入。", "14" ], [ 1000021, "双锁链", "用匹配的颜色击打两次将其解开。", "52_1" ], [ 1000021, "黏液", "它能阻止被包裹的泡泡的消除效果；只能间接地将其消除。", "53" ], [ 1000021, "水", "用匹配的颜色击打一次将其清除。如果本轮没有泡泡被消除，则它会向外蔓延。", "54" ], [ 1000021, "冰", "只能通过道具消除；或尝试让其掉落。如果本轮没有泡泡被消除，则它会向外蔓延。", "55" ], [ 1000021, "狙击泡泡", "与它颜色相同的泡泡靠近时会被击破。", "15_1" ] ],
                HALO_COLORS: [ [ 255, 80, 80 ], [ 255, 242, 102 ], [ 1, 125, 251 ], [ 50, 249, 51 ], [ 242, 43, 249 ], [ 104, 255, 254 ], [ 250, 147, 78 ] ],
                COLORS: [ [ 223, 49, 33 ], [ 255, 204, 0 ], [ 16, 101, 246 ], [ 8, 207, 10 ], [ 172, 31, 212 ], [ 50, 224, 223 ], [ 226, 122, 25 ] ],
                LINT_COLORS: [ [ 243, 63, 45 ], [ 255, 227, 35 ], [ 66, 149, 255 ], [ 25, 244, 27 ], [ 232, 46, 250 ], [ 38, 212, 211 ], [ 255, 165, 22 ] ],
                BOOSETR_LINE_COLORS: [ [ [ 216, 54, 41 ], [ 120, 29, 9 ] ], [ [ 61, 216, 255 ] ], [ [ 225, 69, 3 ], [ 253, 208, 8 ], [ 90, 238, 71 ], [ 137, 248, 241 ], [ 155, 163, 253 ], [ 249, 171, 236 ] ], [ [ 247, 63, 49 ] ] ],
                BUBBLE_ERROR_MAX: 6,
                SUBSCRIBE_SIGN_TIME: 9,
                SUBSCRIBE_WHEEL_TIME: 17,
                WHEEL_OPEN: 10,
                ONLINE_GOLD_COUNTS: 2,
                ACTIVITY_POWER_MAX: 5,
                ACTIVITY_POWER_CD: 18e5,
                ACTIVITY_OPEN_LEVEL: 35,
                ACTIVITY_ID_START: 1e6,
                ACTIVITY_TEST_OPEN: 1644336e6,
                ACTIVITY_TEST_CLOSE: 16548224e5,
                ACTIVITY_TEST_EVENT: "event_10",
                MISSION_OPEN_LEVEL: 20,
                MISSION_AD_TIMES: 3,
                MISSION_BOX_TIMES: 2,
                DRAWER_OPEN_LEVEL: 8,
                RANK_OPEN_LEVEL: 30
            }, Qe = "ROUND", Ze = "BUBBLE_CREATE", $e = "BUBBLE_ADD_COLOR", ti = "BUBBLE_ADD_BUFF", ei = "BUBBLE_REMOVE_BUFF", ii = "BUBBLE_CHANGE_BUFF", ni = "BUBBLE_SHAKE", ri = "BUBBLE_CLEAR", oi = "BUBBLE_FALL", ai = "BUBBLE_GROW_BUFF", si = "GRID_INIT", li = "GRID_UPDATE_POS", ui = "SHOOT_BUBBLE_INIT", ci = "SHOOT_BUBBLE_FILL", hi = "SHOOT_BUBBLE_REFRESH", di = "SHOOT_SHOW", fi = "SHOOT_SHOW_ANGLE", pi = "SHOOT_CLEAR", vi = "SHOOT", bi = "SHOOT_START", gi = "SHOOT_TARGET", mi = "SHOOT_EXCHANGE", yi = "HIDE_TOP_MASK", _i = "SHOW_TOP_MASK", Ii = "SNIP_BUBBBLE", wi = "CHOOSTE_BOOSTER", Si = "CANCEL_BOOSTER", Ci = "SHOW_BOOSTER_LAYER", Ai = "INIT_SCORE", Ti = "ADD_SCORE", ki = "LEFT_NORMAL", xi = "SHOOT_BUBBLE_COUNT", Ei = "SHOOT_BUBBLE_COUNT_ADD", Bi = "BUBBLE_SPOUT", Pi = "GAME_RESET", Ri = "GAME_START", Li = "GAME_RESTART", Di = "GAME_WIN", Oi = "GAME_DEAD", Mi = "GAME_FAIL", Fi = "SHOW_HIT_AREA", Ni = "HIDE_HIT_AREA", zi = "CHECK_BOOSTER_HIT_AREA", Gi = "BOOSTER_CLEAR", Ui = "BOOSTER_ENERGY", Vi = "BOOSTER_ENERGY_CLEAR", Wi = "SHOW_TOUCH_MASK", Hi = "HIDE_TOUCH_MASK", ji = "SHOW_GUIDE_DESC", Yi = "HIDE_GUIDE_DESC", Ki = "BOTTOM_CHANGE", qi = "SHOW_FIREWORK", Xi = "SHOW_HARD_TIPS", Ji = "BOMB_READY", Qi = "ROCKET_READY", Zi = "SET_LUCKY_GIFT", $i = "HARD_SHOP_BUY", tn = "SHOP_SELF_AD_GRID", en = "SHOP_SELF_AD_LIST", nn = "WHEEL_UPDATE", rn = "GAME_ACTIVITY_RESULT", on = "ACTIVITY_HOME_RETURN", an = "BOX_DRAWER_CHANGE", sn = "MISSION_NEWDAY", ln = "MISSION_FINISH", un = "MISSION_ICON_UPDATE", cn = "SHOW_SUB_VIEW", hn = [ 1, 2, 3, 4, 5, 8, 12 ];
            !function(t) {
                t[t.BOMB = 0] = "BOMB", t[t.LIGHTING = 1] = "LIGHTING", t[t.RAINBOW = 2] = "RAINBOW", 
                t[t.FIREBALL = 3] = "FIREBALL";
            }(Ke || (Ke = {})), function(t) {
                t[t.default = 0] = "default", t[t.wall = 1] = "wall", t[t.top = 2] = "top", t[t.bubble = 3] = "bubble";
            }(qe || (qe = {})), function(t) {
                t[t.bomb = 0] = "bomb", t[t.lighting = 1] = "lighting", t[t.rainbow = 2] = "rainbow", 
                t[t.fireball = 3] = "fireball";
            }(Xe || (Xe = {})), t._RF.pop(), t._RF.push({}, "19fa8/160lDMq067A1V6T9z", "Const", void 0);
            var dn, fn = "APP_ON_HIDE";
            t._RF.pop(), t._RF.push({}, "cc54bw53ttKKqQb76K+v5C6", "ResManager", void 0);
            var pn, vn, bn, gn = e.ccclass, mn = (e.property, gn("ResManager")(dn = function() {
                function t() {}
                return t.loadRes = function(t, e) {
                    return new Promise(function(i, n) {
                        f.load(t, e, function(t, e) {
                            if (t) return p(t.message || t), void n(t);
                            i(e);
                        });
                    });
                }, t.loadSpriteFrame = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r, o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.loadRes(i);

                              case 2:
                                r = t.sent, (o = new v()).image = r, (a = new b()).texture = o, e.spriteFrame = a;

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), t.preloadRes = function(t, e) {
                    return new Promise(function(i, n) {
                        f.preload(t, e, function(t, e) {
                            if (t) return p(t.message || t), void n(t);
                            i(e);
                        });
                    });
                }, t.checkRes = function(t, e) {
                    return new Promise(function(i, n) {
                        f.load(t, e, function(t, e) {
                            i(!!e);
                        });
                    });
                }, t;
            }()) || dn);
            t._RF.pop(), t._RF.push({}, "61326KP8F5Al7Pndr91fhtI", "AudioManager", void 0);
            var yn, _n = e.ccclass, In = (e.property, "audio/");
            !function(t) {
                t[t.BGM2 = 0] = "BGM2", t[t.Clear = 1] = "Clear", t[t.Black_Hole = 2] = "Black_Hole", 
                t[t.Bomb = 3] = "Bomb", t[t.Bounce = 4] = "Bounce", t[t.Button = 5] = "Button", 
                t[t.Chain = 6] = "Chain", t[t.Drop = 7] = "Drop", t[t.Fireball = 8] = "Fireball", 
                t[t.Ice = 9] = "Ice", t[t.Lightning = 10] = "Lightning", t[t.Load = 11] = "Load", 
                t[t.Lost = 12] = "Lost", t[t.Pop = 13] = "Pop", t[t.Rainbow = 14] = "Rainbow", t[t.Ready = 15] = "Ready", 
                t[t.Shot = 16] = "Shot", t[t.Star = 17] = "Star", t[t.Swap = 18] = "Swap", t[t.Water = 19] = "Water", 
                t[t.Win = 20] = "Win";
            }(yn || (yn = {}));
            var wn = _n("AudioManager")((bn = vn = function() {
                function t() {
                    dt(this, "_persistRootNode", null), dt(this, "_audioSources", []), dt(this, "musicVolume", void 0), 
                    dt(this, "soundVolume", void 0), dt(this, "music", void 0), dt(this, "sound", void 0);
                }
                var e = t.prototype;
                return e.init = function() {
                    if (!this._persistRootNode) {
                        this._persistRootNode = new i("audio"), o.addPersistRootNode(this._persistRootNode);
                        var t = this.getAudioSetting(!0), e = this.getAudioSetting(!1), n = !0;
                        window.jsb && (n = jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "isPlayAudio", "()Z")), 
                        this.musicVolume = n && t ? .4 : 0, this.soundVolume = n && e ? 1 : 0;
                    }
                }, e.createAudioSource = function() {
                    var t = this._persistRootNode.addComponent(g);
                    return this._audioSources.push(t), t;
                }, e.getAudioSetting = function(t) {
                    var e;
                    return !(e = t ? He.I.getGlobalData("music") : He.I.getGlobalData("sound")) || "true" === e;
                }, e.playMusic = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r, o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = In + yn[e], t.next = 3, mn.loadRes(r);

                              case 3:
                                o = t.sent, (a = this.music || (this.music = this.createAudioSource())).volume = this.musicVolume, 
                                a.clip = o, a.loop = i, a.play();

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), e.playSound = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r, o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (void 0 === i && (i = !1), !this.soundVolume) {
                                    t.next = 7;
                                    break;
                                }
                                return r = In + yn[e], t.next = 4, mn.loadRes(r);

                              case 4:
                                o = t.sent, (a = this.sound || (this.sound = this.createAudioSource())).volume = this.soundVolume, 
                                a.loop = i, a.playOneShot(o);

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), e.getMusicVolume = function() {
                    return this.musicVolume;
                }, e.setMusic = function(t) {
                    this.musicVolume = t, this.music && (this.music.volume = this.musicVolume);
                }, e.pauseAll = function() {
                    this.music && this.music.pause();
                }, e.resumeAll = function() {
                    this.music && this.music.play();
                }, e.openMusic = function() {
                    this.setMusic(.8), He.I.setGlobalData("music", "true");
                }, e.closeMusic = function() {
                    this.setMusic(0), He.I.setGlobalData("music", "false");
                }, e.openSound = function() {
                    this.setSound(1), He.I.setGlobalData("sound", "true");
                }, e.closeSound = function() {
                    this.setSound(0), He.I.setGlobalData("sound", "false");
                }, e.setSound = function(t) {
                    this.soundVolume = t;
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t(), this._instance.init()), this._instance;
                    }
                } ]), t;
            }(), dt(vn, "_instance", void 0), pn = bn)) || pn;
            t._RF.pop(), t._RF.push({}, "08a5fK0rBJPu70739EGkKlj", "ResConst", void 0);
            var Sn, Cn, An, Tn = {
                DATA_MAP: "data/map",
                DATA_BUBBLE: "data/bubble",
                PREFAB_BUBBLE_PATH: "prefab/bubble/",
                EFFECT_NORMAL_REMOVE: "effect/boom",
                EFFECT_BOOSTER_IDLE_ARR: [ "effect/dilei", "effect/lightning", "effect/caihong", "effect/huojian" ],
                EFFECT_BOOSTER_REMOVE_ARR: [ "effect/zhadan_1", "effect/shandian_1", "effect/caihong_1" ],
                EFFECT_BOOSTER_HIT_ARR: [ null, null, "effect/caihong_1", "effect/huojian_1" ],
                EFFECT_FALL_PAR: "effect/diaoluo1",
                EFFECT_STAR_APPEAR: "effect/getStarAnim",
                EFFECT_HARD_TIPS: "effect/hardTips",
                EFFECT_STAR_GET: "effect/ui_xingxing",
                EFFECT_BOMB_READY: "effect/bombReady",
                EFFECT_FIREBALL_READY: "effect/fireballReady",
                EFFECT_FIREWORK: "effect/firework",
                EFFECT_SNIPER_ATTACK: "effect/sniper_attack",
                EFFECT_SNIPER_ATTACK1: "effect/sniper_attack1",
                EFFECT_SNIPER_HIT: "effect/sniper_hit",
                EFFECT_BOOSTER_ICON: "prefab/common/boosterIcon",
                EFFECT_BOOSTER_ADDSTEP: "effect/addStep",
                EFFECT_BOOSTER_ADD: "effect/par_addstep",
                EFFECT_BOOSTER_FLY: "effect/par_flypoint"
            };
            t._RF.pop(), t._RF.push({}, "37c4brjTYdNT60IZpWxHUSW", "PoolManager", void 0);
            var kn, xn, En, Bn = e.ccclass, Pn = (e.property, Bn("PoolManager")((An = Cn = function() {
                function t() {
                    dt(this, "_dictPool", {}), dt(this, "_dictPrefab", {});
                }
                var e = t.prototype;
                return e.getNode = function(t, e) {
                    var i = t.name;
                    t.position || (i = t.data.name), this._dictPrefab[i] = t;
                    var n = null;
                    if (this._dictPool.hasOwnProperty(i)) {
                        var r = this._dictPool[i];
                        n = r.size() > 0 ? r.get() : m(t);
                    } else {
                        var o = new y();
                        this._dictPool[i] = o, n = m(t);
                    }
                    return e && (n.parent = e), n.active = !0, n;
                }, e.putNode = function(t) {
                    if (t) {
                        var e = t.name, i = null;
                        this._dictPool.hasOwnProperty(e) ? i = this._dictPool[e] : (i = new y(), this._dictPool[e] = i);
                        var n = !0;
                        switch (e) {
                          case "normal":
                            n = this._dictPool[e].size() < 300;
                            break;

                          default:
                            n = this._dictPool[e].size() < 20;
                        }
                        n ? i.put(t) : t.destroy();
                    }
                }, e.clearPool = function(t) {
                    this._dictPool.hasOwnProperty(t) && this._dictPool[t].clear();
                }, e.prePool = function(t, e) {
                    var i = t.name, n = new y();
                    this._dictPool[i] = n;
                    for (var r = 0; r < e; r++) {
                        var o = m(t);
                        n.put(o);
                    }
                }, e.limitPool = function(t, e) {
                    var i = 0;
                    if (this._dictPool.hasOwnProperty(t)) {
                        var n = this._dictPool[t];
                        for (console.log("裁剪对象池", n.size() + "=>" + e); n.size() > e; ) {
                            var r = n.get();
                            r && (r.destroy(), i++);
                        }
                    }
                    console.log("删除对象池个数：", i);
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t()), this._instance;
                    }
                } ]), t;
            }(), dt(Cn, "_instance", void 0), Sn = An)) || Sn);
            t._RF.pop(), t._RF.push({}, "d17c2wMQl1N4aqw9d61B+Sl", "EffectManager", void 0);
            var Rn, Ln, Dn, On = e.ccclass, Mn = (e.property, On("EffectManager")((En = xn = function() {
                function t() {
                    dt(this, "_ndParent", null), dt(this, "_effectDic", {});
                }
                var e = t.prototype;
                return e.init = function() {
                    this._ndParent || (this._ndParent = new i("effect"), _.getScene().addChild(this._ndParent));
                }, e.playEffectInNode = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o, a, s, l, u) {
                        var c;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (void 0 === r && (r = !0), void 0 === o && (o = !0), void 0 === a && (a = 0), 
                                !e.parent) {
                                    t.next = 6;
                                    break;
                                }
                                return t.next = 3, this.loadEffect(i, e);

                              case 3:
                                return c = t.sent, t.next = 6, this.playEffect(c, r, o, a, s, l, u);

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n, r, o, a, s, l) {
                        return t.apply(this, arguments);
                    };
                }(), e.playEffect = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o, a, s, l) {
                        var u, c;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return void 0 === i && (i = !0), void 0 === r && (r = !0), void 0 === o && (o = 0), 
                                a && e.setScale(new S(a, a, a)), s && e.setWorldPosition(s), l && (e.angle = l), 
                                u = 0, i && (e.getComponentsInChildren(I).forEach(function(t, e) {
                                    var i, n, r = (null == t || null === (i = t.defaultClip) || void 0 === i ? void 0 : i.name) || (null == t || null === (n = t.clips[0]) || void 0 === n ? void 0 : n.name);
                                    if (null == t || t.play(r), r) {
                                        var o = t.getState(r);
                                        if (o) {
                                            var a = o.duration;
                                            u = a > u ? a : u, o.speed = 1;
                                        }
                                    }
                                }), e.getComponentsInChildren(C.Skeleton).forEach(function(t, e) {
                                    var i = t.animation, n = t.setAnimation(0, i, !1), r = (n ? n.animation.duration : Ve.getSpineDuration(t, i)) / t.timeScale;
                                    u = r > u ? r : u;
                                })), r && e.getComponentsInChildren(w).forEach(function(t) {
                                    null == t || t.resetSystem();
                                    var e = t.duration;
                                    u = e > u ? e : u;
                                }), c = o && o > 0 ? o : u, t.next = 7, Ve.wait(c);

                              case 7:
                                e.parent && Pn.I.putNode(e);

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e, i, n, r, o, a, s) {
                        return t.apply(this, arguments);
                    };
                }(), e.removeEffect = function(t, e) {
                    void 0 === e && (e = this._ndParent);
                    var i = e.getChildByName(t);
                    i && (i.getComponentsInChildren(I).forEach(function(t) {
                        t.stop();
                    }), (null == i ? void 0 : i.getComponentsInChildren(w)).forEach(function(t) {
                        null == t || t.stopSystem();
                    }), Pn.I.putNode(i));
                }, e.playParticle = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o, a, s, l) {
                        var u, c, h, d;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return void 0 === r && (r = 0), void 0 === o && (o = 1), void 0 === l && (l = !1), 
                                t.next = 3, mn.loadRes(e);

                              case 3:
                                u = t.sent, (c = Pn.I.getNode(u, this._ndParent)).setScale(new S(o, o, o)), c.setWorldPosition(i), 
                                a && (c.eulerAngles = a), h = 0, (d = c.getComponentsInChildren(w)).forEach(function(t) {
                                    null == t || t.resetSystem();
                                    var e = t.duration;
                                    h = e > h ? e : h;
                                }), l || setTimeout(function() {
                                    c.parent && (s && s(), d.forEach(function(t) {
                                        null == t || t.stopSystem();
                                    }), Pn.I.putNode(c));
                                }, 1e3 * (r && r > 0 ? r : h));

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n, r, o, a, s) {
                        return t.apply(this, arguments);
                    };
                }(), e.playParticleNotPool = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o, a, s, l) {
                        var u, c, h;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return void 0 === r && (r = 0), void 0 === o && (o = 1), void 0 === l && (l = !1), 
                                t.next = 3, mn.loadRes(e);

                              case 3:
                                u = t.sent, (c = m(u)).parent = this._ndParent, c.setScale(new S(o, o, o)), c.setWorldPosition(i), 
                                a && (c.eulerAngles = a), h = 0, c.getComponentsInChildren(w).forEach(function(t) {
                                    null == t || t.resetSystem();
                                    var e = t.duration;
                                    h = e > h ? e : h;
                                }), l || setTimeout(function() {
                                    c.parent && (s && s(), c.destroy());
                                }, 1e3 * (r && r > 0 ? r : h));

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n, r, o, a, s) {
                        return t.apply(this, arguments);
                    };
                }(), e.loadEffect = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (r = this._effectDic[e], t.t0 = r, t.t0) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 5, mn.loadRes(e);

                              case 5:
                                r = t.sent, this._effectDic[e] = r;

                              case 7:
                                return t.abrupt("return", Pn.I.getNode(r, i));

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), e.preloadEffects = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i, r, o, a = arguments;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                for (e = a.length, i = new Array(e), r = 0; r < e; r++) i[r] = a[r];
                                for (o = 0; o < i.length; o++) this._effectDic[i[o]] && (i.splice(o, 1), o--);
                                return t.next = 4, mn.preloadRes(i);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.preloadBaseEffect = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.preloadEffects(Tn.EFFECT_NORMAL_REMOVE);

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.preloadBoosterEffect = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = Tn.EFFECT_BOOSTER_IDLE_ARR[e], r = Tn.EFFECT_BOOSTER_REMOVE_ARR[e], o = Tn.EFFECT_BOOSTER_HIT_ARR[e], 
                                a = [], i && a.push(i), r && a.push(r), o && a.push(o), t.next = 6, this.preloadEffects.apply(this, a);

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t(), this._instance.init()), this._instance;
                    }
                } ]), t;
            }(), dt(xn, "_instance", void 0), kn = En)) || kn);
            t._RF.pop(), t._RF.push({}, "71720ud/HtLx5wJEXvf1hDW", "EventCenter", void 0);
            var Fn = e.ccclass, Nn = (e.property, Fn("EventCenter")((Dn = Ln = function() {
                function t() {
                    dt(this, "_handlers", {});
                }
                var e = t.prototype;
                return e.on = function(t, e, i) {
                    var n = this._handlers[t];
                    n || (n = [], this._handlers[t] = n);
                    for (var r = 0; r < n.length; r++) if (n[r] && n[r].handler == e && n[r].target == i) return r;
                    var o = {
                        handler: e,
                        target: i
                    };
                    for (r = 0; r < n.length; r++) if (!n[r]) return n[r] = o, r;
                    return n.push(o), n.length;
                }, e.once = function(t, e, i) {
                    var n = this._handlers[t];
                    n || (n = [], this._handlers[t] = n);
                    for (var r = 0; r < n.length; r++) if (n[r] && n[r].handler == e && n[r].target == i) return r;
                    var o = {
                        handler: e,
                        target: i,
                        once: !0
                    };
                    for (r = 0; r < n.length; r++) if (!n[r]) return n[r] = o, r;
                    return n.push(o), n.length;
                }, e.off = function(t, e, i) {
                    var n = this._handlers[t];
                    if (n) for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (o.handler === e && (!i || i === o.target)) {
                            n.splice(r, 1);
                            break;
                        }
                    }
                }, e.emit = function(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    var r, o = this._handlers[t], a = [];
                    for (r = 1; r < arguments.length; r++) a.push(arguments[r]);
                    if (o) for (r = 0; r < o.length; r++) {
                        var s = o[r];
                        s.handler && (s.handler.apply(s.target, a), s.once && (o.splice(r, 1), r--));
                    }
                }, e.waitEventValue = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (i == r) {
                                    t.next = 6;
                                    break;
                                }
                                return t.next = 3, this.waitEvent(e);

                              case 3:
                                r = t.sent;

                              case 4:
                                t.next = 0;
                                break;

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), e.waitEvent = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = this, t.abrupt("return", new Promise(function(t) {
                                    i.once(e, t, i);
                                }));

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (window.EC = this, this._instance = new t()), this._instance;
                    }
                } ]), t;
            }(), dt(Ln, "_instance", void 0), Rn = Dn)) || Rn);
            t._RF.pop(), t._RF.push({}, "95e84ozzjlH+71z0f/H7gat", "DateUtils", void 0);
            var zn = function() {
                function t() {}
                return t.add = function(t) {
                    return t < 10 ? "0" + t : "" + t;
                }, ht(t, null, [ {
                    key: "now",
                    get: function() {
                        return Math.floor(this.nowTime / 1e3);
                    }
                }, {
                    key: "nowTime",
                    get: function() {
                        return new Date().getTime();
                    }
                }, {
                    key: "today",
                    get: function() {
                        var t = new Date(this.nowTime), e = t.getFullYear(), i = t.getMonth() + 1, n = t.getDate();
                        return e + "-" + this.add(i) + "-" + this.add(n);
                    }
                } ]), t;
            }();
            t._RF.pop(), t._RF.push({}, "df631ILWXtJr4JBGU3Clf7a", "RandomUtils", void 0);
            var Gn = function() {
                function t() {}
                return t.randomArray = function(t) {
                    return t[Math.floor(Math.random() * t.length)];
                }, t.rand = function(t, e) {
                    return t = t || 0, e = e || 1e4, Math.floor(1e4 * Math.random()) % (e - t) + t;
                }, t.rang = function(t, e) {
                    return Math.round(Math.random() * (e - t) + t);
                }, t.randFloat = function(t, e) {
                    return parseFloat((Math.random() * (e - t) + t).toFixed(2));
                }, t;
            }();
            t._RF.pop(), t._RF.push({}, "e33d52HHfpOAJwy6Ldzbs14", "SDKBaseData", void 0);
            var Un = function() {};
            dt(Un, "SimulateShareTime", 3e3), t._RF.pop(), t._RF.push({}, "c30c01k2T1F0pcAUD3fAsmZ", "SDKEventCenter", void 0);
            var Vn, Wn = function() {
                function t() {
                    dt(this, "_events", void 0), dt(this, "_onceReturnValue", void 0), this._events = {};
                }
                var e = t.prototype;
                return e.getEvents = function() {
                    return this._events || (this._events = {});
                }, e.getListeners = function(t) {
                    var e = this.getEvents();
                    return e[t] || (e[t] = []);
                }, e.getListenersAsObject = function(t) {
                    var e, i = this.getListeners(t);
                    return i instanceof Array && ((e = {})[t] = i), e || i;
                }, e.isValidListener = function(t) {
                    return "function" == typeof t || t instanceof RegExp || !(!t || "object" != r(t)) && this.isValidListener(t.listener);
                }, e.getOnceReturnValue = function() {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
                }, e.indexOf = function(t, e, i) {
                    for (var n = t.length; n--; ) if (t[n].listener === e && (!i || t[n].context === i)) return n;
                    return -1;
                }, e.add = function(t, e, i) {
                    if (!t || !t.constructor) throw new TypeError("evt must be a string");
                    if (!this.isValidListener(e)) throw new TypeError("listener must be a function");
                    var n, o = this.getListenersAsObject(t), a = "object" == r(e);
                    for (n in o) o.hasOwnProperty(n) && -1 === this.indexOf(o[n], e, i) && o[n].push(a ? e : {
                        listener: e,
                        context: i,
                        once: !1
                    });
                    return this;
                }, e.once = function(t, e, i) {
                    return this.add(t, {
                        listener: e,
                        context: i,
                        once: !0
                    });
                }, e.remove = function(t, e, i) {
                    var n, r, o = this.getListenersAsObject(t);
                    for (r in o) o.hasOwnProperty(r) && -1 !== (n = this.indexOf(o[r], e, i)) && o[r].splice(n, 1);
                    return this;
                }, e.removeAll = function(t) {
                    var e = r(t), i = this.getEvents();
                    return "string" === e ? delete i[t] : delete this._events, this;
                }, e.trigger = function(t) {
                    for (var e, i, n, r, o = this.getListenersAsObject(t), a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) s[l - 1] = arguments[l];
                    for (r in o) if (o.hasOwnProperty(r)) for (e = o[r].slice(0), n = 0; n < e.length; n++) !0 === (i = e[n]).once && this.remove(t, i.listener, i.context), 
                    i.listener.apply(i.context || this, s || []) === this.getOnceReturnValue() && this.remove(t, i.listener, i.context);
                    return this;
                }, e.emit = function(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    return this.trigger.apply(this, [ t ].concat(i));
                }, e.defineEvent = function(t) {
                    return this.getListeners(t), this;
                }, e.defineEvents = function(t) {
                    for (var e = 0, i = t.length; e < i; e++) this.defineEvent(t[e]);
                    return this;
                }, ht(t, [ {
                    key: "onceReturnValue",
                    set: function(t) {
                        this._onceReturnValue = t;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(Wn, "instance", void 0), t._RF.pop(), t._RF.push({}, "2e19dyU/7JJqLWFdXDxcvUk", "SDKEventEnum", void 0), 
            function(t) {
                t.APP_SHOW = "app.show", t.APP_HIDE = "app.hide", t.TACTIC_UPDATE = "tactic.update", 
                t.BANNER_HIDE = "banner.hide", t.BANNER_SHOW = "banner.show", t.BANNER_ERROR = "banner.error", 
                t.BANNER_DESTORY = "banner.destory", t.BANNER_SUCCESS = "banner.success", t.ONLINE_SUCCESS = "online.success";
            }(Vn || (Vn = {})), t._RF.pop(), t._RF.push({}, "4ff4eeHrSlJ34+ZRzkbGs0B", "SimulateShare", void 0);
            var Hn = function() {
                function t() {
                    dt(this, "callbacks", void 0), dt(this, "hideTime", void 0), dt(this, "delayTime", void 0), 
                    this.hideTime = 0, this.delayTime = 300;
                }
                var e = t.prototype;
                return e.bind = function(t) {
                    var e = t.success, i = t.fail, n = t.cancel, r = !0;
                    t.success = function(t) {
                        r && e(t), r = !1;
                    }, t.fail = function(t) {
                        r && i(t), r = !1;
                    }, t.cancel = function(t) {
                        r && n(t), r = !1;
                    }, this.hideTime = 0, this.callbacks = t, Wn.I.add(Vn.APP_SHOW, this.onShow, this), 
                    Wn.I.add(Vn.APP_HIDE, this.onHide, this);
                }, e.clear = function() {
                    this.hideTime = 0, Wn.I.remove(Vn.APP_SHOW, this.onShow, this), Wn.I.remove(Vn.APP_HIDE, this.onHide, this);
                }, e.onHide = function() {
                    this.hideTime = new Date().getTime();
                }, e.onShow = function() {
                    var t, e = this.SuccessTime, i = this.callbacks, n = i.success, r = i.fail, o = Date.now() - this.hideTime;
                    t = o < e ? setTimeout(function() {
                        r && r({
                            errMsg: "模拟分享失败！"
                        }), clearTimeout(t), t = null;
                    }, this.delayTime) : setTimeout(function() {
                        n && n({
                            errMsg: "模拟分享成功！",
                            shareTickets: [ "simulate_ticket" ]
                        }), clearTimeout(t), t = null;
                    }, this.delayTime), this.clear();
                }, ht(t, [ {
                    key: "SuccessTime",
                    get: function() {
                        return Un.SimulateShareTime;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(Hn, "instance", void 0), t._RF.pop(), t._RF.push({}, "d340e2rw6JMiJexQuFeOdBk", "WxSystem", void 0);
            var jn = function() {
                function t() {
                    dt(this, "data", void 0), this.data = wx.getSystemInfoSync();
                }
                return ht(t, [ {
                    key: "SystemData",
                    get: function() {
                        return this.data;
                    }
                }, {
                    key: "version",
                    get: function() {
                        return this.data.version;
                    }
                }, {
                    key: "system",
                    get: function() {
                        return this.data.system;
                    }
                }, {
                    key: "platform",
                    get: function() {
                        return this.data.platform;
                    }
                }, {
                    key: "language",
                    get: function() {
                        return this.data.language;
                    }
                }, {
                    key: "winWidth",
                    get: function() {
                        return this.data.windowWidth;
                    }
                }, {
                    key: "winHeight",
                    get: function() {
                        return this.data.windowHeight;
                    }
                }, {
                    key: "screenWidth",
                    get: function() {
                        return this.data.screenWidth;
                    }
                }, {
                    key: "screenHeight",
                    get: function() {
                        return this.data.screenHeight;
                    }
                }, {
                    key: "SDKVersion",
                    get: function() {
                        return this.data.SDKVersion;
                    }
                }, {
                    key: "brand",
                    get: function() {
                        return this.data.brand;
                    }
                }, {
                    key: "model",
                    get: function() {
                        return this.data.model;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(jn, "instance", void 0), t._RF.pop(), t._RF.push({}, "79f56VblXJOA5fAD6FmIEBM", "LogService", void 0);
            var Yn = function() {
                function t() {
                    dt(this, "exposureArr", void 0), dt(this, "logResArr", void 0), dt(this, "logLevelArr", void 0), 
                    dt(this, "isHandledShare", void 0), dt(this, "timeoutShareId", void 0), dt(this, "regFinishState", void 0), 
                    dt(this, "lastReqBannerTime", void 0), dt(this, "lastReqBannerData", void 0), dt(this, "queue", []), 
                    dt(this, "isLogin", !1), dt(this, "stayInterval", void 0), this.exposureArr = {}, 
                    this.logResArr = [], this.logLevelArr = [], this.regFinishState = 0, this.isHandledShare = !1, 
                    this.timeoutShareId = 0, this.lastReqBannerTime = {}, this.lastReqBannerData = {};
                }
                var e = t.prototype;
                return e.setRegFinishState = function(t) {
                    this.regFinishState = t;
                }, e.fixLaunchKey = function(t) {
                    je.I.fixLaunchKey(t);
                }, e.setLogind = function(t) {
                    if (je.I.setLoginData(t), this.isLogin = !0, this.queue.length > 0) for (var e = 0; e < this.queue.length; e++) (0, 
                    this.queue[e])();
                    this.queue = [];
                }, e.dot = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var o, a, s, l;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (o = this, void 0 === i && (i = {}), a = "", s = "", "{}" != JSON.stringify(i) && "object" == r(i)) for (l in i) "" === a && (a = l, 
                                s = i[l]);
                                this.checkLogin(function() {
                                    return Ye.dot(ft({}, o.buildParams(), {
                                        eventkey: e,
                                        value: JSON.stringify(i),
                                        itemkey: a,
                                        itemvalue: s
                                    }));
                                });

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), e.levelStart = function() {
                    var t = ut(n.default.mark(function t(e, i, r) {
                        var o;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o = this, this.checkLogin(function() {
                                    return Ye.level(ft({}, o.buildParams(), {
                                        stageid: e,
                                        stagename: i,
                                        pattern: r,
                                        typ: 1
                                    }));
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n) {
                        return t.apply(this, arguments);
                    };
                }(), e.levelRunning = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o, a, s, l, u) {
                        var c;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                c = this, this.checkLogin(function() {
                                    return Ye.level(ft({}, c.buildParams(), {
                                        stageid: e,
                                        stagename: i,
                                        pattern: r,
                                        event: o,
                                        params_id: a,
                                        params_name: s,
                                        params_count: l,
                                        params_desc: u,
                                        typ: 2
                                    }));
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n, r, o, a, s, l) {
                        return t.apply(this, arguments);
                    };
                }(), e.levelEnd = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o, a, s, l) {
                        var u;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                u = this, this.checkLogin(function() {
                                    return Ye.level(ft({}, u.buildParams(), {
                                        stageid: e,
                                        stagename: i,
                                        pattern: r,
                                        event: o,
                                        times: a,
                                        perc: s,
                                        typ: 3,
                                        valence: l
                                    }));
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n, r, o, a, s) {
                        return t.apply(this, arguments);
                    };
                }(), e.loadingFinish = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e = this, this.checkLogin(function() {
                                    return Ye.loadingFinish(ft({}, e.buildParams()));
                                }), this.startStay();

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.active = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e = this, this.checkLogin(function() {
                                    return Ye.active(ft({}, e.buildParams(), {
                                        isnew: 0,
                                        sharekey: e.shareKey,
                                        shareid: e.shareId
                                    }));
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.logOut = function(t) {
                    var e = this;
                    this.checkLogin(function() {
                        return Ye.logOut(ft({}, e.buildParams(), {
                            times: t
                        }));
                    });
                }, e.share = function(t, e, i) {
                    var n = this;
                    this.checkLogin(function() {
                        return Ye.share(ft({}, n.buildParams(), {
                            typ: i,
                            sharekey: t,
                            shareid: e,
                            shareuid: i === me.click ? n.QueryUserInviteUid : ""
                        }));
                    });
                }, e.adStat = function(t, e, i, n) {
                    var r = this;
                    this.checkLogin(function() {
                        return Ye.adStat(ft({}, r.buildParams(), {
                            videokey: t,
                            adplat: "1",
                            adid: e,
                            adtyp: i,
                            adstatus: n
                        }));
                    });
                }, e.startStay = function() {
                    this.stayInterval = setInterval(this.stayFun.bind(this), 1e3);
                }, e.stayFun = function() {
                    var t = xe.I.get("newUserTime") || 0;
                    t++, xe.I.set("newUserTime", t), 1 === (xe.I.get("newUserDot") || 0) && clearInterval(this.stayInterval), 
                    t >= 30 && (xe.I.set("newUserDot", 1), this.loadingFinishStay(30), clearInterval(this.stayInterval));
                }, e.loadingFinishStay = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                i = this, this.checkLogin(function() {
                                    je.I.RegTime === zn.today && Ye.stay(ft({}, i.buildParams(), {
                                        times: e
                                    }));
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.stay = function(t) {}, e.behaviors = function() {
                    var t = this;
                    this.checkLogin(function() {
                        return Ye.behaviors(ft({}, t.buildParams()));
                    });
                }, e.checkLogin = function(t) {
                    this.isLogin ? t() : this.queue.push(t);
                }, e.jumps = function(t, e) {
                    var i = this;
                    this.checkLogin(function() {
                        return Ye.jumps(ft({}, i.buildParams(), {
                            adid: 0,
                            adplat: 1,
                            adtyp: e,
                            typ: 1,
                            times: 1,
                            id: t
                        }));
                    });
                }, e.bannerExposure2 = function(t, e, i) {
                    var n = this;
                    this.checkLogin(function() {
                        return Ye.jumps(ft({}, n.buildParams(), {
                            adid: 0,
                            adplat: 1,
                            adtyp: e,
                            typ: 2,
                            times: i,
                            id: t
                        }));
                    });
                }, e.addExposure = function(t, e) {
                    var i = this;
                    e && e.forEach(function(e) {
                        var n = e.id;
                        if (i.exposureArr.hasOwnProperty(t)) {
                            var r;
                            i.exposureArr[t].hasOwnProperty(n) ? i.exposureArr[t][n]++ : i.exposureArr[t] = ft({}, i.exposureArr[t], ((r = {})[n] = 1, 
                            r));
                        } else {
                            var o, a, s = ((a = {})[t] = ((o = {})[n] = 1, o), a);
                            i.exposureArr = ft({}, i.exposureArr, s);
                        }
                    });
                }, e.bannerExposure = function() {
                    if ("{}" !== JSON.stringify(this.exposureArr)) {
                        var t = JSON.parse(JSON.stringify(this.exposureArr));
                        for (var e in this.exposureArr = {}, t) {
                            var i = t[e];
                            for (var n in i) this.bannerExposure2(n, e, i[n]);
                        }
                    }
                }, e.buildParams = function() {
                    return {
                        gameid: Ct.game_id,
                        channel: je.I.ChannelId,
                        APIVersion: "0.6.0",
                        brand: jn.I.brand,
                        model: jn.I.model,
                        version: jn.I.version,
                        system: jn.I.system,
                        platform: jn.I.platform,
                        sdkversion: jn.I.SDKVersion,
                        scene: je.I.Scene + "",
                        uid: this.UserId,
                        env: 1 === je.I.EnvEnum ? "pre" : "prod"
                    };
                }, ht(t, [ {
                    key: "SystemId",
                    get: function() {
                        return je.I.SystemId;
                    }
                }, {
                    key: "LaunchTime",
                    get: function() {
                        return je.I.LaunchTime;
                    }
                }, {
                    key: "LaunchKey",
                    get: function() {
                        return je.I.LaunchKey;
                    }
                }, {
                    key: "Scene",
                    get: function() {
                        return je.I.Scene;
                    }
                }, {
                    key: "RegTime",
                    get: function() {
                        return je.I.RegTime;
                    }
                }, {
                    key: "UserId",
                    get: function() {
                        return je.I.UserId;
                    }
                }, {
                    key: "OpenId",
                    get: function() {
                        return je.I.OpenId;
                    }
                }, {
                    key: "UserInviteUid",
                    get: function() {
                        return je.I.UserInviteUid;
                    }
                }, {
                    key: "QueryUserInviteUid",
                    get: function() {
                        return je.I.QueryUserInviteUid;
                    }
                }, {
                    key: "QueryExtData",
                    get: function() {
                        return je.I.QueryExtData;
                    }
                }, {
                    key: "Shield",
                    get: function() {
                        return je.I.Shield;
                    }
                }, {
                    key: "shareKey",
                    get: function() {
                        return je.I.ShareKey;
                    }
                }, {
                    key: "shareId",
                    get: function() {
                        return je.I.ShareId;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(Yn, "instance", void 0), t._RF.pop(), t._RF.push({}, "e651bUTSQFPdJggZ31fe3Gn", "SDKShare", void 0);
            var Kn = function() {
                function t() {
                    dt(this, "shareSimulate", void 0), this.shareSimulate = !0;
                }
                var e = t.prototype;
                return e.share = function(t, e, i) {
                    var n = this;
                    return void 0 === i && (i = {}), new Promise(function(r, o) {
                        var a = e.title, s = e.imageUrl, l = e.query, u = e.imageUrlId, c = e.share_id, h = (e.withShareTicket, 
                        {
                            title: a,
                            imageUrl: s,
                            query: l,
                            imageUrlId: u || ""
                        }), d = {
                            success: function(e) {
                                Yn.I.share(t, c, me.share), r(e);
                            },
                            fail: function(t) {
                                o(ft({}, oe));
                            },
                            cancel: function() {
                                o(null);
                            }
                        };
                        n.shareSimulate && !i.closeSimulate && n.simulate(ft({}, d)), n.shareSimulate && i.closeSimulate && Yn.I.share(t, c, me.share), 
                        wx.shareAppMessage(h);
                    });
                }, e.updateShareMenu = function(t) {
                    "undefined" != typeof wx && wx.updateShareMenu({
                        withShareTicket: t
                    });
                }, e.forward = function(t, e) {
                    void 0 === e && (e = {});
                    var i = this, n = t.title, r = t.imageUrl, o = t.query, a = t.imageUrlId;
                    wx.onShareAppMessage(function() {
                        var t = {
                            title: n,
                            imageUrl: r,
                            query: o,
                            imageUrlId: a || "",
                            success: function(t) {
                                e.success && e.success.call(e.context, t);
                            },
                            fail: function(t) {
                                e.fail && e.fail.call(e.context, t);
                            },
                            cancel: function() {
                                e.fail && e.fail.call(e.context, null);
                            }
                        };
                        return i.shareSimulate && !e.closeSimulate && i.simulate(ft({}, t)), t;
                    }), wx.showShareMenu({});
                }, e.createQuery = function(t) {
                    void 0 === t && (t = {}), t = ft({}, t);
                    var e = "";
                    for (var i in t) e.length && (e += "&"), e += i + "=" + t[i];
                    return e;
                }, e.simulate = function(t) {
                    Hn.I.bind(t);
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(Kn, "instance", void 0), t._RF.pop(), t._RF.push({}, "22a42X5xoFMA5W9ZYNdKf+I", "SDKVideo", void 0);
            var qn = function() {
                function t() {
                    dt(this, "_isPlaying", void 0), dt(this, "_isErrored", void 0), dt(this, "resolve", void 0), 
                    dt(this, "reject", void 0), dt(this, "videoAd", void 0), dt(this, "videoKey", void 0), 
                    dt(this, "adUnitId", void 0), dt(this, "videoAd2", void 0), dt(this, "preloadVideoAd", void 0), 
                    dt(this, "isPreload", !1), this.videoKey = "", this._isPlaying = !1, this._isErrored = !1;
                }
                var e = t.prototype;
                return e.preloadVideo = function(t) {
                    var e = this;
                    if (!this.preloadVideoAd && !this.isPreload) {
                        this.isPreload = !0;
                        var i = wx.createRewardedVideoAd({
                            adUnitId: t
                        });
                        i.onError(this.preError), i.load().then(this.handleLoaded2).catch(function() {
                            e.isPreload = !1;
                        }), this.videoAd2 = i;
                    }
                }, e.preError = function() {
                    t.I.isPreload = !1;
                }, e.handleLoaded2 = function() {
                    var e = t.I;
                    e.preloadVideoAd = e.videoAd2, e.isPreload = !1;
                }, e.offPreload = function() {
                    var e = t.I;
                    e.preloadVideoAd.offError(e.preError);
                }, e.show = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = this, t.abrupt("return", new Promise(function() {
                                    var t = ut(n.default.mark(function t(o, a) {
                                        var s, l;
                                        return n.default.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                if (!r.isPlaying) {
                                                    t.next = 2;
                                                    break;
                                                }
                                                return t.abrupt("return", a(ft({}, re)));

                                              case 2:
                                                if (i) {
                                                    t.next = 4;
                                                    break;
                                                }
                                                return t.abrupt("return", a(ft({}, ie)));

                                              case 4:
                                                if (Yn.I.adStat(e, r.adUnitId, ye.video, _e.request), r.preloadVideoAd ? (l = !0, 
                                                r.offPreload(), s = r.preloadVideoAd, r.preloadVideoAd = null) : (l = !1, s = wx.createRewardedVideoAd({
                                                    adUnitId: i
                                                })), s) {
                                                    t.next = 6;
                                                    break;
                                                }
                                                return t.abrupt("return", a(ft({}, ne)));

                                              case 6:
                                                if (r._isPlaying = !0, r._isErrored = !1, r.videoKey = e, r.adUnitId = i, r.resolve = o, 
                                                r.reject = a, r.videoAd = s, s.onClose(r.handleClose), s.onError(r.onError), !l) {
                                                    t.next = 19;
                                                    break;
                                                }
                                                return t.prev = 7, t.next = 10, r.handleLoaded();

                                              case 10:
                                                t.next = 17;
                                                break;

                                              case 12:
                                                return t.prev = 12, t.t0 = t.catch(7), t.next = 16, s.load();

                                              case 16:
                                                r.handleLoaded();

                                              case 17:
                                                t.next = 29;
                                                break;

                                              case 19:
                                                return t.prev = 19, t.next = 22, s.load();

                                              case 22:
                                                return t.next = 24, r.handleLoaded();

                                              case 24:
                                                t.next = 29;
                                                break;

                                              case 26:
                                                t.prev = 26, t.t1 = t.catch(19), r.handleError({});

                                              case 29:
                                                r.preloadVideo(i);

                                              case 30:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t, null, [ [ 7, 12 ], [ 19, 26 ] ]);
                                    }));
                                    return function(e, i) {
                                        return t.apply(this, arguments);
                                    };
                                }()));

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), e.onError = function(e) {
                    var i = t.I;
                    !i.isErrored && i.handleError(e);
                }, e.handleLoaded = function() {
                    var e = ut(n.default.mark(function e() {
                        var i;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (i = t.I, e.prev = 1, Yn.I.adStat(this.videoKey, this.adUnitId, ye.video, _e.show), 
                                !i.videoAd.isReady()) {
                                    e.next = 8;
                                    break;
                                }
                                return e.next = 6, i.videoAd.show();

                              case 6:
                                e.next = 9;
                                break;

                              case 8:
                                i.videoAd.load().then(function() {
                                    i.videoAd.show();
                                }).catch(i.handleError);

                              case 9:
                                e.next = 14;
                                break;

                              case 11:
                                e.prev = 11, e.t0 = e.catch(1), i.handleError({});

                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 1, 11 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(), e.handleClose = function(e) {
                    var i = t.I;
                    e && e.isEnded || void 0 === e ? (Yn.I.adStat(i.videoKey, i.adUnitId, ye.video, _e.complete), 
                    i.resolve && i.resolve({
                        type: 2
                    })) : (Yn.I.adStat(i.videoKey, i.adUnitId, ye.video, _e.interrupt), i.reject && i.reject(ft({}, te))), 
                    i.videoAd.offClose(i.handleClose), i._isPlaying = !1, i._isErrored = !1;
                }, e.handleError = function(e) {
                    var i = t.I;
                    Yn.I.adStat(i.videoKey, i.adUnitId, ye.video, _e.fail), i.reject && i.reject(ft({}, ee)), 
                    i.videoAd && i.videoAd.offClose && i.videoAd.offClose(i.handleClose), i._isPlaying = !1, 
                    i._isErrored = !0;
                }, ht(t, [ {
                    key: "isErrored",
                    get: function() {
                        return this._isErrored;
                    }
                }, {
                    key: "isPlaying",
                    get: function() {
                        return this._isPlaying;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(qn, "instance", void 0), t._RF.pop(), t._RF.push({}, "91574oAAFtDkbxVdAQGFaBy", "ShareVideoService", void 0);
            var Xn, Jn, Qn = function() {
                function t() {
                    dt(this, "forwardKey", void 0), dt(this, "shareObjs", void 0), dt(this, "preload", !0), 
                    this.forwardKey = "forward", this.shareObjs = {
                        default: [ Ct.default_share ]
                    };
                }
                var e = t.prototype;
                return e.setForwardKey = function(t) {
                    this.forwardKey = t, this.forward(this.forwardKey);
                }, e.init = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Ye.ShareList();

                              case 2:
                                e = t.sent, this.setShareVideoData(e), Kn.I.updateShareMenu(!0), wx.setMessageToFriendQuery({
                                    shareMessageToFriendScene: Ct.shareMessageToFriend.scene
                                }), this.forwardKey && this.forward(this.forwardKey);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.preloadVideo = function() {
                    Ct.videoAd.length && qn.I.preloadVideo(Ct.videoAd);
                }, e.share = function(t, e, i) {
                    var n = this;
                    return void 0 === i && (i = {}), new Promise(function(e, r) {
                        var o = n.getShareVideoData(t), a = o.id, s = o.typ, l = o.content, u = o.key, c = o.icon, h = o.videoid, d = {
                            title: l,
                            imageUrl: c,
                            share_id: a,
                            query: n.createQuery({
                                share_key: u,
                                share_id: a
                            })
                        };
                        switch (i && (i.title && (d.title = i.title), i.img_url && (d.imageUrl = i.img_url), 
                        i.share_type && (s = i.share_type)), console.log("share_query", JSON.stringify(d), d.query, a, s, l, u, c, h), 
                        +s) {
                          case ve.Video:
                            qn.I.show(t, h).then(function(t) {
                                e(t);
                            }).catch(function(t) {
                                r(t);
                            });
                            break;

                          case ve.VideoToShare:
                            qn.I.show(t, h).then(function(t) {
                                e(t);
                            }).catch(function(n) {
                                1e3 !== n.code && 1003 !== n.code ? Kn.I.share(t, d, i).then(function(t) {
                                    e(t);
                                }).catch(function(t) {
                                    r(t);
                                }) : r(n);
                            });
                            break;

                          case ve.Share:
                            Kn.I.share(t, d, i).then(function(t) {
                                e(t);
                            }).catch(function(t) {
                                r(t);
                            });
                            break;

                          case ve.None:
                          default:
                            e({});
                        }
                    });
                }, e.forward = function(t) {
                    var e = this.getShareVideoData(t || this.forwardKey), i = {
                        title: e.content,
                        imageUrl: e.icon,
                        query: this.createQuery({
                            share_key: e.key,
                            share_id: e.id
                        })
                    };
                    Kn.I.forward(i);
                }, e.shareDispatch = function(t, e, i) {}, e.dispatchType = function(t, e, i, n) {}, 
                e.shareWithType = function(t, e, i, n) {
                    void 0 === i && (i = {}), void 0 === n && (n = {}), this.dispatchType(t, e, i, n);
                }, e.getShareVideoID = function(t) {
                    return this.getShareVideoData(t).id;
                }, e.getShareVideoID2 = function(t) {
                    return this.getShareVideoData(t).videoid;
                }, e.getShareVideoType = function(t) {
                    return +this.getShareVideoData(t).typ;
                }, e.getShareType = function(t) {
                    return this.getShareVideoType(t);
                }, e.getType = function(t) {
                    return this.getShareVideoType(t);
                }, e.handleSuccess = function(t, e, i, n) {}, e.handleFail = function(t, e, i, n, r) {}, 
                e.setShareVideoData = function(t) {
                    var e = this;
                    (t.data || []).forEach(function(t) {
                        e.shareObjs[t.key] = e.shareObjs[t.key] || [], e.shareObjs[t.key].push(t);
                    });
                }, e.getShareVideoData = function(t) {
                    var e = this.shareObjs[t];
                    return e || (e = this.shareObjs.default), e[Gn.rand(0, e.length)];
                }, e.createQuery = function(t) {
                    void 0 === t && (t = {}), t = ft({}, t, {
                        channel_id: Ct.channel_id,
                        user_invite_uid: je.I.UserId
                    });
                    var e = "";
                    for (var i in t) e.length && (e += "&"), e += i + "=" + t[i];
                    return e;
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(Qn, "instance", void 0), t._RF.pop(), t._RF.push({}, "475e1HfJM5EqKmrBkIjC/Q5", "Version", void 0), 
            function(t) {
                t.WX = "wx", t.QQ = "qq";
            }(Xn || (Xn = {})), function(t) {
                t.PlatformType = "wx";
            }(Jn || (Jn = {}));
            var Zn = function() {
                function t() {
                    var t, e, i, n, r, o, a, s, l, u, c, h, d, f, p, v;
                    dt(this, "DEFUALT", "0.0.0"), dt(this, "VERSION", {
                        createRewardedVideoAd: (t = {}, t[Xn.WX] = "2.0.4", t[Xn.QQ] = "0.1.26", t),
                        createInterstitialAd: (e = {}, e[Xn.WX] = "2.6.0", e),
                        createFeedbackButton: (i = {}, i[Xn.WX] = "2.1.2", i),
                        createUserInfoButton: (n = {}, n[Xn.WX] = "2.0.1", n),
                        createBannerAd: (r = {}, r[Xn.WX] = "2.0.4", r[Xn.QQ] = "0.1.26", r),
                        createGameBanner: (o = {}, o[Xn.WX] = "2.7.5", o),
                        createGamePortal: (a = {}, a[Xn.WX] = "2.7.5", a),
                        createGameIcon: (s = {}, s[Xn.WX] = "2.8.2", s),
                        setClipboardData: (l = {}, l[Xn.WX] = "1.1.0", l),
                        setSubscribeMessage: (u = {}, u[Xn.WX] = "2.8.0", u),
                        getUpdateManager: (c = {}, c[Xn.WX] = "1.9.90", c),
                        updateShareMenu: (h = {}, h[Xn.WX] = "1.2.0", h),
                        showShareMenu: (d = {}, d[Xn.WX] = "1.1.0", d),
                        vibrate: (f = {}, f[Xn.WX] = "1.2.0", f),
                        getShareInfo: (p = {}, p[Xn.WX] = "1.1.0", p),
                        openCustomerServiceConversation: (v = {}, v[Xn.WX] = "2.0.3", v)
                    });
                }
                var e = t.prototype;
                return e.getVRewardedVideoAd = function() {
                    return this.VERSION.createRewardedVideoAd[Jn.PlatformType] || this.DEFUALT;
                }, e.getVInterstitialAd = function() {
                    return this.VERSION.createInterstitialAd[Jn.PlatformType] || this.DEFUALT;
                }, e.getVFeedbackButton = function() {
                    return this.VERSION.createFeedbackButton[Jn.PlatformType] || this.DEFUALT;
                }, e.getVUserInfoButton = function() {
                    return this.VERSION.createUserInfoButton[Jn.PlatformType] || this.DEFUALT;
                }, e.getVBannerAd = function() {
                    return this.VERSION.createBannerAd[Jn.PlatformType] || this.DEFUALT;
                }, e.getVGameBanner = function() {
                    return this.VERSION.createGameBanner[Jn.PlatformType] || this.DEFUALT;
                }, e.getVGamePortal = function() {
                    return this.VERSION.createGamePortal[Jn.PlatformType] || this.DEFUALT;
                }, e.getVGameIcon = function() {
                    return this.VERSION.createGameIcon[Jn.PlatformType] || this.DEFUALT;
                }, e.getVClipboardData = function() {
                    return this.VERSION.setClipboardData[Jn.PlatformType] || this.DEFUALT;
                }, e.getVSubscribeMessage = function() {
                    return this.VERSION.setSubscribeMessage[Jn.PlatformType] || this.DEFUALT;
                }, e.getVUpdateManager = function() {
                    return this.VERSION.getUpdateManager[Jn.PlatformType] || this.DEFUALT;
                }, e.getVVibrate = function() {
                    return this.VERSION.vibrate[Jn.PlatformType] || this.DEFUALT;
                }, e.getVShareInfo = function() {
                    return this.VERSION.getShareInfo[Jn.PlatformType] || this.DEFUALT;
                }, e.getVUpdateShareMenu = function() {
                    return this.VERSION.updateShareMenu[Jn.PlatformType] || this.DEFUALT;
                }, e.getVShowShareMenu = function() {
                    return this.VERSION.showShareMenu[Jn.PlatformType] || this.DEFUALT;
                }, e.getVCustomerService = function() {
                    return this.VERSION.openCustomerServiceConversation[Jn.PlatformType] || this.DEFUALT;
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(Zn, "instance", void 0), t._RF.pop(), t._RF.push({}, "e1d2eP+HxhOk40HcsR+qEnz", "WxApi", void 0);
            var $n = function() {
                function t() {}
                var e = t.prototype;
                return e.getVersionError = function(t) {
                    return {
                        errMsg: "支持最低版本：" + t,
                        errCode: -1
                    };
                }, e.canIUse = function(t) {
                    return ce.compareVersion(jn.I.SDKVersion, t) >= 0;
                }, e.showModal = function(t) {
                    wx.showModal(t);
                }, e.subscribeMessage = function(t) {
                    var e = Zn.I.getVSubscribeMessage();
                    return this.canIUse(e) ? new Promise(function(e, i) {
                        wx.requestSubscribeMessage({
                            tmplIds: t,
                            success: function(t) {
                                e(t);
                            },
                            fail: function(t) {
                                i(t);
                            }
                        });
                    }) : Promise.reject(this.getVersionError(e));
                }, e.goCollectSet = function(t) {
                    wx.requestSubscribeMessage ? wx.requestSubscribeMessage({
                        tmplIds: t,
                        success: function(e) {
                            "accept" === e[t[0]] || "reject" === e[t[0]] || wx.showToast({
                                title: "授权订阅消息有误",
                                icon: "none"
                            });
                        },
                        fail: function(t) {
                            20004 == t.errCode || wx.showModal({
                                title: "提示",
                                content: t.errMsg,
                                showCancel: !1
                            });
                        }
                    }) : wx.showModal({
                        title: "提示",
                        content: "请更新您微信版本，来获取订阅消息功能",
                        showCancel: !1
                    });
                }, e.createBannerAd = function(t, e, i) {
                    return this.canIUse(Zn.I.getVBannerAd()) ? wx.createBannerAd({
                        adUnitId: t,
                        style: e
                    }) : null;
                }, e.createGameBanner = function(t, e) {
                    return this.canIUse(Zn.I.getVGameBanner()) ? wx.createGameBanner({
                        adUnitId: t,
                        style: e
                    }) : null;
                }, e.createInterstitialAd = function(t) {
                    return this.canIUse(Zn.I.getVInterstitialAd()) ? wx.createInterstitialAd({
                        adUnitId: t
                    }) : null;
                }, e.createGameIcon = function(t, e) {
                    return this.canIUse(Zn.I.getVGameIcon()) ? wx.createGameIcon(ft({
                        adUnitId: t
                    }, e)) : null;
                }, e.createGamePortal = function(t) {
                    return this.canIUse(Zn.I.getVGamePortal()) ? wx.createGamePortal({
                        adUnitId: t
                    }) : null;
                }, e.createRewardedVideoAd = function(t) {
                    return this.canIUse(Zn.I.getVRewardedVideoAd()) ? wx.createRewardedVideoAd({
                        adUnitId: t
                    }) : null;
                }, e.createFeedbackButton = function(t) {
                    return this.canIUse(Zn.I.getVFeedbackButton()) ? wx.createFeedbackButton(t) : null;
                }, e.createUserInfoButton = function(t) {
                    return this.canIUse(Zn.I.getVUserInfoButton()) ? wx.createUserInfoButton(t) : null;
                }, e.openCustomerServiceConversation = function(t) {
                    return this.canIUse(Zn.I.getVCustomerService()) ? (wx.openCustomerServiceConversation(ft({}, t)), 
                    1) : -1;
                }, e.vibrateLong = function() {
                    return this.canIUse(Zn.I.getVVibrate()) ? new Promise(function(t, e) {
                        wx.vibrateLong({
                            success: function() {
                                t(1);
                            },
                            fail: function() {
                                t(0);
                            }
                        });
                    }) : Promise.reject(null);
                }, e.vibrateShort = function() {
                    return this.canIUse(Zn.I.getVVibrate()) ? new Promise(function(t, e) {
                        wx.vibrateShort({
                            success: function() {
                                t(1);
                            },
                            fail: function() {
                                t(0);
                            }
                        });
                    }) : Promise.reject(null);
                }, e.updateShareMenu = function(t) {
                    this.canIUse(Zn.I.getVUpdateShareMenu()) && wx.updateShareMenu({
                        withShareTicket: t
                    });
                }, e.checkUpdate = function(t) {
                    if (this.canIUse(Zn.I.getVUpdateManager())) {
                        var e = this, i = {
                            title: (t = t || {}).title || "更新提示",
                            content: t.content || "新版本已经准备好，是否重启应用？",
                            showCancel: !1,
                            success: function(e) {
                                t.success && t.success(e), e.confirm && n.applyUpdate();
                            },
                            fail: function(e) {
                                return t.fail && t.fail(e);
                            },
                            complete: function() {
                                return t.complete && t.complete();
                            }
                        };
                        [ "cancelText", "cancelColor", "confirmText", "confirmColor" ].forEach(function(e) {
                            var n;
                            return ce.hasProperty(t, e) && (i = ft({}, i, ((n = {})[e] = t[e], n)));
                        });
                        var n = wx.getUpdateManager();
                        n.onCheckForUpdate(function(t) {}), n.onUpdateReady(function() {
                            e.showModal(i);
                        }), n.onUpdateFailed(function() {});
                    }
                }, e.showShareMenu = function(t, e) {
                    this.canIUse(Zn.I.getVShowShareMenu()) && (wx.onShareAppMessage(function() {
                        return t;
                    }), wx.showShareMenu(e));
                }, e.shareAppMessage = function(t) {
                    wx.shareAppMessage(t);
                }, e.previewImage = function(t, e) {
                    return new Promise(function(i, n) {
                        t && 0 !== t.length ? wx.previewImage({
                            current: t[e],
                            urls: t,
                            success: function(t) {
                                i(ft({}, t, {
                                    qrcode: 1
                                }));
                            },
                            fail: function(t) {
                                n(t);
                            }
                        }) : n();
                    });
                }, e.getNetworkType = function() {
                    return new Promise(function(t, e) {
                        wx.getNetworkType({
                            success: function(e) {
                                t(e);
                            },
                            fail: function(t) {
                                e({
                                    networkType: Ie.Unknown
                                });
                            }
                        });
                    });
                }, e.navigateToMiniProgram = function(t, e, i) {
                    return void 0 === i && (i = {}), new Promise(function(n, r) {
                        wx.navigateToMiniProgram({
                            appId: t,
                            path: e,
                            extraData: i.extraData || {},
                            envVersion: i.envVersion || "release",
                            success: function(t) {
                                n(t);
                            },
                            fail: function(t) {
                                r(t);
                            }
                        });
                    });
                }, e.login = function() {
                    return new Promise(function(e, i) {
                        wx.login({
                            success: function(t) {
                                e(t.code);
                            },
                            fail: function(e) {
                                i(e), t.I.setAuthorize(ft({
                                    errorTip: "wx.login fail"
                                }, e));
                            }
                        });
                    });
                }, e.getUserinfo = function() {
                    return new Promise(function(e, i) {
                        wx.getUserInfo({
                            lang: "zh_CN",
                            withCredentials: !0,
                            success: function(n) {
                                if (!n) return i(n), t.I.setAuthorize(ft({
                                    errorTip: "getUserInfo Success result is null"
                                }, n));
                                e(n);
                            },
                            fail: function(e) {
                                i(e), t.I.setAuthorize(ft({
                                    errorTip: "getUserInfo Fail"
                                }, e));
                            }
                        });
                    });
                }, e.getShareInfo = function(t) {
                    return this.canIUse(Zn.I.getVShareInfo()) ? new Promise(function(e, i) {
                        wx.getShareInfo({
                            shareTicket: t,
                            success: function(t) {
                                "getShareInfo:ok" === t.errMsg ? e(t) : i(t);
                            },
                            fail: function(t) {
                                i(t);
                            }
                        });
                    }) : Promise.reject(null);
                }, e.requestMidasPayment = function(t) {
                    var e = t.mode, i = t.env, n = t.offerId, r = t.currencyType, o = t.platform, a = t.buyQuantity, s = t.zoneId;
                    return console.warn("====> PCSDK WxApi requestMidasPayment 支付参数", {
                        mode: e,
                        env: i,
                        offerId: n,
                        currencyType: r,
                        platform: o,
                        buyQuantity: a,
                        zoneId: s
                    }), new Promise(function(t, l) {
                        wx.requestMidasPayment({
                            mode: e,
                            env: i,
                            offerId: n,
                            currencyType: r,
                            platform: o,
                            buyQuantity: a,
                            zoneId: s,
                            success: function(e) {
                                e && "requestMidasPayment:ok" === e.errMsg ? t(e) : l(e);
                            },
                            fail: function(t) {
                                l(t);
                            }
                        });
                    });
                }, e.setAuthorize = function(t) {
                    je.I.setAuthorize(!1);
                }, e.createAuthorizeBtn = function(t, e) {
                    var i = t.getComponent(c).getBoundingBoxToWorld(), n = A.getDevicePixelRatio(), r = A.getScaleX() / n, o = i.width * r, a = i.height * r, s = i.x * r, l = wx.getSystemInfoSync().screenHeight - (i.y + i.height) * r, u = wx.createUserInfoButton({
                        type: "text",
                        text: "",
                        style: {
                            left: s,
                            top: l,
                            width: o,
                            height: a,
                            lineHeight: 20,
                            textAlign: "center",
                            fontSize: 16,
                            borderRadius: 4
                        }
                    });
                    return u.onTap(function(t) {
                        e(t);
                    }), u;
                }, e.postMessage = function(t, e) {
                    if (!br.isWx) return null;
                    wx.getOpenDataContext().postMessage({
                        type: t,
                        data: e
                    });
                }, e.setUserCloudStorage = function(t) {
                    if (!br.isWx) return null;
                    je.I.Authorize && wx.setUserCloudStorage({
                        KVDataList: [ {
                            key: "data",
                            value: JSON.stringify(t)
                        } ],
                        success: function(e) {
                            console.log("分数上传 成功", t);
                        },
                        fail: function(t) {
                            console.log("分数上传 失败");
                        }
                    });
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t());
                    }
                } ]), t;
            }();
            dt($n, "_instance", void 0), t._RF.pop(), t._RF.push({}, "188e2UMcypGYbLf71bAaevY", "WxInit", void 0);
            var tr = function() {
                function t() {
                    dt(this, "onlineTime", void 0), this.onlineTime = zn.nowTime, wx.onShow(this.onShow.bind(this)), 
                    wx.onHide(this.onHide.bind(this)), wx.onNetworkStatusChange(this.onNetworkStatusChange.bind(this));
                }
                var e = t.prototype;
                return e.init = function() {
                    var t = this, e = jn.I.SystemData.platform, i = Re.I.LaunchData;
                    console.log("启动信息", i);
                    var n = i.query, r = i.scene, o = i.referrerInfo, a = n.invite_type, s = n.channelId, l = n.channel_id, u = n.td_channelid, c = n.channel, h = n.share_id, d = n.share_key, f = n.user_invite_uid, p = n.weixinadinfo, v = n.account_id, b = n.service_id, g = n.shareMessageToFriendScene, m = s || l || c || u;
                    if (p) {
                        var y = p.split(".");
                        y && y.length && (m = y[0]);
                    }
                    g && g >= 0 && g <= 50 && (d = Ct.shareMessageToFriend.sharekey, h = Ct.shareMessageToFriend.share_id), 
                    je.I.setScene(r).setReferrerInfo(o || {}).setShareId(h).setPlatform(e).setShareKey(d).setChannelId(m).setQueryChannelId(m || Ct.channel_id).setInviteType(a).setQueryUserInviteUid(f || 0).setQueryExtData({
                        account_id: v,
                        service_id: b
                    }).setSystemId().setLaunchSource(), $n.I.getNetworkType().then(function(e) {
                        return t.setNetworkType(e);
                    }).catch(function(e) {
                        return t.setNetworkType(e);
                    });
                }, e.onShow = function(t) {
                    console.log("onshow_opts", t);
                    var e = zn.nowTime, i = t.scene, n = t.shareTicket;
                    if (this.onlineTime = e, je.I.setScene(i).setLaunchTime(e).setLaunchSource(), t && t.query) {
                        var r = t.query, o = r.share_key, a = r.share_id, s = r.invite_type, l = r.user_invite_uid;
                        !ce.isUndefined(a) && je.I.setShareId(a), !ce.isUndefined(o) && je.I.setShareKey(o), 
                        !ce.isUndefined(s) && je.I.setInviteType(s), !ce.isUndefined(n) && je.I.setShareTicket(n), 
                        !ce.isUndefined(l) && je.I.setQueryUserInviteUid(l), a && o && Yn.I.share(o, a, me.click);
                    }
                    Wn.I.emit(Vn.APP_SHOW, t);
                }, e.onHide = function() {
                    Wn.I.emit(Vn.APP_HIDE), Yn.I.bannerExposure(), this.onlineTime && (Yn.I.logOut(zn.nowTime - this.onlineTime), 
                    this.onlineTime = 0);
                }, e.onNetworkStatusChange = function(t) {
                    console.warn("网络变化了：", t), this.setNetworkType(t);
                }, e.setNetworkType = function(t) {
                    t && t.networkType && je.I.setNetworkType(t.networkType);
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(tr, "instance", void 0), t._RF.pop(), t._RF.push({}, "52b8aD5HTFFOJFebPQ+eK+n", "OnlineService", void 0);
            var er = function() {
                function t() {
                    dt(this, "isDebug", void 0), dt(this, "data", void 0), this.isDebug = !1;
                }
                var e = t.prototype;
                return e.setData = function(t) {
                    t && (this.data = t);
                }, e.setDebugMode = function(t) {
                    this.isDebug = t;
                }, e.updateOnlineConfig = function() {
                    var t = this;
                    return new Promise(function(e, i) {
                        t.reqOnlineConfig().then(function(t) {
                            return e(t);
                        }).catch(function(t) {
                            return i(t);
                        });
                    });
                }, e.getParams = function(t) {
                    if (!t) return null;
                    var e = this.data;
                    return e && e.hasOwnProperty(t) ? e[t] : null;
                }, e.getParamsObj = function() {
                    var t = this.getParams(arguments.length <= 0 ? void 0 : arguments[0]);
                    return 2 !== arguments.length || t ? t ? JSON.parse(t) : t : arguments.length <= 1 ? void 0 : arguments[1];
                }, e.getParamsInt = function() {
                    var t = this.getParams(arguments.length <= 0 ? void 0 : arguments[0]);
                    return 2 !== arguments.length || t ? +t : arguments.length <= 1 ? void 0 : arguments[1];
                }, e.getParamsString = function() {
                    var t = this.getParams(arguments.length <= 0 ? void 0 : arguments[0]);
                    return 2 !== arguments.length || t ? t : arguments.length <= 1 ? void 0 : arguments[1];
                }, e.reqOnlineConfig = function() {
                    var t = this;
                    return new Promise(function(e, i) {
                        Ye.getConfig().then(function(i) {
                            (t.data = i && i.data && i.data.config) && (t.data = i.data.config), e(t.data);
                        }).catch(function(t) {
                            i(t);
                        });
                    });
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(er, "instance", void 0), t._RF.pop(), t._RF.push({}, "291f5naJMhGsaccFfbNp/02", "WxLogin", void 0);
            var ir = function() {
                function t() {
                    dt(this, "isFirst", void 0), dt(this, "countDown", void 0);
                }
                var e = t.prototype;
                return e.login = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = this, t.abrupt("return", new Promise(function() {
                                    var t = ut(n.default.mark(function t(r, o) {
                                        var a;
                                        return n.default.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                return t.next = 2, $n.I.login();

                                              case 2:
                                                a = t.sent, e ? $n.I.getUserinfo().then(function(t) {
                                                    return i.authedlogin(t, a, r, o);
                                                }).catch(function(t) {
                                                    return i.weakLogin(t, a, r, o);
                                                }) : i.weakLogin({
                                                    errCode: 1,
                                                    msg: "默认未授权登录"
                                                }, a, r, o);

                                              case 4:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    return function(e, i) {
                                        return t.apply(this, arguments);
                                    };
                                }()));

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.authedlogin = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o) {
                        var a, s, l, u, c, h;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                a = this, e.rawData, s = e.iv, l = e.encryptedData, u = e.signature, c = e.userInfo, 
                                h = ft({}, this.buildParams(), {
                                    code: i,
                                    signature: u,
                                    iv: s,
                                    encryptedData: l
                                }), c && je.I.setGender(c.gender), Ye.Login(h).then(function(t) {
                                    a.handleLogin(t, r, !0), r(t);
                                }).catch(function(t) {
                                    return o(t);
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n, r) {
                        return t.apply(this, arguments);
                    };
                }(), e.weakLogin = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o) {
                        var a, s;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                a = this, e && e.errCode !== $t && (je.I.ReferrerInfo, s = ft({}, this.buildParams(), {
                                    code: i
                                }), Ye.weakLogin(s).then(function(t) {
                                    a.handleLogin(t, r, !1);
                                }).catch(function(t) {
                                    return o(t);
                                }));

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n, r) {
                        return t.apply(this, arguments);
                    };
                }(), e.handleLogin = function(t, e, i) {
                    if (console.log("登录请求结果data", t, i), t && t.data) {
                        var n = t.data, r = n.channel, o = n.uid, a = n.firstlogin, s = n.token, l = n.reftoken, u = n.openid, c = n.expire, h = n.isnew, d = n.gameconfig;
                        Yn.I.setLogind({
                            channel: r,
                            userId: o,
                            regTime: a,
                            openId: u,
                            isnew: h,
                            token: s,
                            refToken: l,
                            expire: c
                        }), er.I.setData(d), Yn.I.active(), !this.isFirst && je.I.ShareKey && je.I.ShareId && (this.isFirst = !0, 
                        Yn.I.share(je.I.ShareKey, je.I.ShareId, me.click));
                        try {
                            this.handleExpire(c);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            console.log("handleExpire_error", t);
                        }
                        Qn.I.forward();
                    }
                    e(t);
                }, e.buildParams = function() {
                    return {
                        channel: je.I.QueryChannelId + "",
                        brand: jn.I.brand,
                        model: jn.I.model,
                        version: jn.I.version,
                        system: jn.I.system,
                        platform: jn.I.platform,
                        sdkversion: jn.I.SDKVersion,
                        shareuid: +je.I.QueryUserInviteUid,
                        scene: je.I.Scene + "",
                        sharekey: je.I.ShareKey,
                        shareid: je.I.ShareId + ""
                    };
                }, e.handleExpire = function(t) {
                    var e = t - zn.now;
                    this.countDown && clearTimeout(this.countDown), this.countDown = setTimeout(this.refreshToken, 1e3 * e);
                }, e.refreshToken = function() {
                    var t = this;
                    Ye.reftoken({
                        channel: je.I.ChannelId + "",
                        uid: je.I.UserId,
                        token: je.I.Token,
                        reftoken: je.I.refToken
                    }).then(function(e) {
                        var i = e.data, n = i.token, r = i.reftoken, o = i.expire;
                        je.I.setLoginData({
                            token: n,
                            refToken: r,
                            expire: o
                        });
                        try {
                            t.handleExpire(o);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            console.log("handleExpire_error", t);
                        }
                    });
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t());
                    }
                } ]), t;
            }();
            dt(ir, "_instance", void 0), t._RF.pop(), t._RF.push({}, "d0dc5es7w1A+qJ+aSKg5f9Y", "GameService", void 0);
            var nr = function() {
                function t() {}
                var e = t.prototype;
                return e.env = function() {
                    return new Promise(function(t, e) {
                        Ye.Version().then(function(e) {
                            if (e) {
                                var i = e.data && e.data.env ? e.data.env : 2;
                                je.I.setEnvEnum(+i);
                            }
                            t(e);
                        }).catch(function(t) {
                            e(t);
                        });
                    });
                }, e.login = function(t) {
                    return void 0 === t && (t = !1), ir.I.login(t);
                }, e.saveData = function(t, e) {
                    return Ye.saveData({
                        key: t,
                        content: e,
                        uid: je.I.UserId,
                        token: je.I.Token
                    });
                }, e.getData = function(t) {
                    return Ye.getData({
                        key: t,
                        uid: je.I.UserId,
                        token: je.I.Token
                    });
                }, e.rankAdd = function(t, e) {
                    return Ye.rankAdd({
                        typ: t,
                        fraction: e,
                        uid: je.I.UserId,
                        token: je.I.Token
                    });
                }, e.rankList = function(t, e, i) {
                    return Ye.rankList({
                        typ: t,
                        t: e,
                        rankdata: i ? 1 : 0,
                        uid: je.I.UserId,
                        token: je.I.Token
                    });
                }, e.totalrankAdd = function(t, e, i, n) {
                    return Ye.totalrankAdd({
                        typ: t,
                        sort: n,
                        t: i,
                        fraction: e,
                        uid: je.I.UserId,
                        token: je.I.Token
                    });
                }, e.totalrankList = function(t, e, i, n) {
                    return Ye.totalrankList({
                        typ: t,
                        t: e,
                        sort: n,
                        rankdata: i ? 1 : 0,
                        uid: je.I.UserId,
                        token: je.I.Token
                    });
                }, e.adList = function(t) {
                    return Ye.adList({
                        adtyp: t,
                        uid: je.I.UserId,
                        token: je.I.Token
                    });
                }, e.getGameNotice = function() {
                    return Ye.notice();
                }, e.subScribe = function(t, e, i) {
                    return new Promise(function(n, r) {
                        $n.I.subscribeMessage(t).then(function(o) {
                            o = o || {};
                            var a = t.filter(function(t) {
                                return o[t] && "accept" === o[t];
                            });
                            a.length ? (e(a), console.log("订阅成功", o, a), n(o)) : (i(), r({
                                errCode: 0,
                                errMsg: "点击取消订阅"
                            }));
                        }).catch(function(t) {
                            return r(t);
                        });
                    });
                }, e.sendSubScribe = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o) {
                        var a, s, l;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return void 0 === o && (o = 0), a = +je.I.UserId, s = je.I.Token + "", l = je.I.OpenId + "", 
                                t.next = 4, Ye.sendsubscribe({
                                    uid: a,
                                    token: s,
                                    openid: l,
                                    status: 1,
                                    message: encodeURIComponent(i),
                                    sendtime: Math.floor(r),
                                    time: o,
                                    temid: e[0]
                                });

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e, i, n, r) {
                        return t.apply(this, arguments);
                    };
                }(), e.postMessage = function(t, e) {
                    return $n.I.postMessage(t, e);
                }, e.setUserCloudStorage = function(t) {
                    return $n.I.setUserCloudStorage(t);
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(nr, "instance", void 0), t._RF.pop(), t._RF.push({}, "d17b1CDbgFKc43MDebF1gv6", "WxBanner", void 0);
            var rr = function() {
                function t(t, e) {
                    dt(this, "designWidth", void 0), dt(this, "bannerWidth", void 0), dt(this, "bannerHeight", void 0), 
                    dt(this, "bannerScale", void 0), dt(this, "bannerParams", void 0), dt(this, "_isErrored", void 0), 
                    dt(this, "adUnitId", void 0), dt(this, "bannerAd", void 0), dt(this, "resolve", void 0), 
                    dt(this, "reject", void 0), dt(this, "queue", []), dt(this, "isEnd", !1), t = t || 750, 
                    e = e || 750, this.adUnitId = "", this._isErrored = !1, this.designWidth = t, this.bannerScale = jn.I.winWidth / this.designWidth, 
                    this.bannerWidth = Math.max(this.bannerScale * e, 300), this.bannerHeight = jn.I.winHeight / this.bannerScale;
                }
                var e = t.prototype;
                return e.create = function(e, i) {
                    var n = this;
                    return this.bannerParams = i || {}, i && i.bannerWidth && (this.bannerWidth = i.bannerWidth), 
                    this.isEnd = !0, this.bannerParams.type = this.bannerParams.type || 1, this.bannerParams.offsetY = -this.bannerParams.offsetY || 0, 
                    this.bannerParams.adIntervals = this.bannerParams.adIntervals || 120, new Promise(function(r, o) {
                        if (n.resolve = r, n.reject = o, n._isErrored = !1, n.adUnitId = e, ce.isEmpty(e)) return t.I.handleQueue(), 
                        n.reject(ft({}, ae, {
                            adUnitId: n.adUnitId
                        }));
                        2 === n.bannerParams.type && (n.bannerWidth = jn.I.winWidth);
                        var a = {
                            top: 0,
                            left: (jn.I.winWidth - n.bannerWidth) / 2,
                            width: n.bannerWidth
                        };
                        if (a = ft({}, a, {
                            top: 0 + n.bannerParams.offsetY
                        }), n.bannerAd) (!i || i && !i.isOff) && n.show(!1); else {
                            if (n.bannerAd = wx.createBannerAd({
                                adUnitId: e,
                                style: a,
                                adIntervals: n.bannerParams.adIntervals
                            }), Yn.I.adStat("banner", n.adUnitId, ye.banner, _e.request), !n.bannerAd) return t.I.handleQueue(), 
                            n.reject(ft({}, le, {
                                adUnitId: n.adUnitId
                            }));
                            n.bannerAd.onLoad(n.onLoad), n.bannerAd.onError(n.onError), n.bannerAd.onResize(n.onResize), 
                            (!i || i && !i.isOff) && n.show(!1);
                        }
                    });
                }, e.show = function(e) {
                    var i = this;
                    if (void 0 === e && (e = !0), !t.I.isEnd || !e) return t.I.isEnd = !0, this.bannerAd ? (this.bannerAd.style.realHeight && (this.bannerAd.style.top = jn.I.winHeight - this.bannerAd.style.realHeight + this.bannerParams.offsetY), 
                    2 === this.bannerParams.type && this.bannerAd.style.width ? this.bannerAd.style.left = (jn.I.winWidth - this.bannerAd.style.width) / 2 : this.bannerAd.style.left = (jn.I.winWidth - this.bannerWidth) / 2, 
                    Yn.I.adStat("banner", this.adUnitId, ye.banner, _e.show), this.bannerAd.show().catch(function(t) {
                        return i.handleShowError(t);
                    }), t.I.handleQueue(), !0) : (t.I.handleQueue(), !1);
                    t.I.queue.push(t.I.show.bind(t.I));
                }, e.hide = function() {
                    var e = t.I;
                    e.isEnd ? e.queue.push(e.hide.bind(e)) : (e.isEnd = !0, this.bannerAd && (this.bannerAd.style.left = -9999, 
                    this.bannerAd.hide(), Yn.I.adStat("banner", e.adUnitId, ye.banner, _e.interrupt)), 
                    e.handleQueue());
                }, e.toggle = function(t) {
                    t ? this.show() : this.hide();
                }, e.destory = function() {
                    this.bannerAd && (this.bannerAd.style.left = -9999, this.bannerAd.destroy(), this.bannerAd = null, 
                    Yn.I.adStat("banner", this.adUnitId, ye.banner, _e.interrupt));
                }, e.onLoad = function() {
                    var e = t.I, i = e.bannerAd;
                    i && (i.style.realHeight && (i.style.top = jn.I.winHeight - i.style.realHeight + e.bannerParams.offsetY), 
                    e.unbind(), e.handleQueue(), e.resolve && e.resolve({
                        adUnitId: e.adUnitId,
                        scale: e.bannerScale,
                        width: i.style.realWidth / e.bannerScale,
                        height: i.style.realHeight / e.bannerScale
                    }));
                }, e.onError = function(e) {
                    var i = t.I;
                    !i._isErrored && i.handleError(e, ft({}, se, {
                        adUnitId: i.adUnitId
                    }));
                }, e.onResize = function() {
                    var e = t.I, i = e.bannerAd;
                    i && (i.style.top = jn.I.winHeight - i.style.realHeight + e.bannerParams.offsetY, 
                    i.style.left = (jn.I.winWidth - i.style.realWidth) / 2);
                }, e.handleShowError = function(e) {
                    var i = t.I, n = e.errCode, r = e.errMsg;
                    !i.isErrored && i.handleError(e, {
                        code: n,
                        msg: r
                    });
                }, e.handleError = function(e, i) {
                    var n = t.I;
                    n.unbind(), n._isErrored = !0, n.bannerAd = null, n.handleQueue(), Yn.I.adStat("banner", n.adUnitId, ye.banner, _e.fail), 
                    n.reject && n.reject(ft({}, i, {
                        adUnitId: n.adUnitId
                    }));
                }, e.unbind = function() {
                    this.bannerAd && (this.bannerAd.offLoad(this.onLoad), this.bannerAd.offError(this.onError), 
                    this.bannerAd.offResize(this.onResize));
                }, e.handleQueue = function() {
                    var e = t.I;
                    e.queue.length > 0 ? (e.isEnd = !1, e.queue.shift()()) : e.isEnd = !1;
                }, ht(t, [ {
                    key: "isErrored",
                    get: function() {
                        return this._isErrored;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t(750, 750));
                    }
                } ]), t;
            }();
            dt(rr, "instance", void 0), t._RF.pop(), t._RF.push({}, "9f6f6XLOz1AHrD7DCB3tqqM", "WxGrid", void 0);
            var or = function() {
                function t(t, e) {
                    dt(this, "designWidth", void 0), dt(this, "bannerWidth", void 0), dt(this, "bannerHeight", void 0), 
                    dt(this, "bannerScale", void 0), dt(this, "bannerParams", void 0), dt(this, "_isErrored", void 0), 
                    dt(this, "adUnitId", void 0), dt(this, "gridAd", void 0), dt(this, "resolve", void 0), 
                    dt(this, "reject", void 0), dt(this, "AdList", void 0), t = t || 750, e = e || 750, 
                    this.AdList = {}, this.adUnitId = "", this._isErrored = !1, this.designWidth = t, 
                    this.bannerScale = jn.I.winWidth / this.designWidth, this.bannerWidth = Math.max(this.bannerScale * e, 300), 
                    this.bannerHeight = jn.I.winHeight / this.bannerScale;
                }
                var e = t.prototype;
                return e.create = function(t, e, i) {
                    var n = this;
                    return this.bannerParams = i || {}, this.AdList[t] = ft({}, i, {
                        adUnitId: e,
                        key: t,
                        isEnd: !1,
                        queue: []
                    }), i && i.bannerWidth && (this.bannerWidth = i.bannerWidth), this.bannerParams.type = this.bannerParams.type || 1, 
                    this.bannerParams.gridCount = this.bannerParams.gridCount || 5, this.bannerParams.offsetY = -this.bannerParams.offsetY || 0, 
                    this.bannerParams.adIntervals = this.bannerParams.adIntervals || 60, new Promise(function(i, r) {
                        if (n.resolve = i, n.reject = r, n._isErrored = !1, n.adUnitId = e, ce.isEmpty(e)) return n.reject(ft({}, ae, {
                            adUnitId: n.adUnitId
                        }));
                        2 === n.bannerParams.type && (n.bannerWidth = jn.I.winWidth);
                        var o = {
                            top: 0,
                            left: (jn.I.winWidth - n.bannerWidth) / 2,
                            width: n.bannerWidth
                        };
                        return o = ft({}, o, {
                            top: 0 + n.bannerParams.offsetY
                        }), n.AdList[t].gridAd ? (n.AdList[t].isOff && n.show(t), void i()) : (n.gridAd = wx.createGridAd({
                            adUnitId: e,
                            style: {
                                left: o.left,
                                top: n.bannerHeight
                            },
                            gridCount: n.bannerParams.gridCount
                        }), Yn.I.adStat("grid", e, ye.grid, _e.request), n.gridAd ? (n.AdList[t].gridAd = n.gridAd, 
                        n.gridAd.onLoad(n.onLoad), n.gridAd.onError(n.onError), n.gridAd.onResize(n.onResize), 
                        void (n.AdList[t].isOff || n.show(t))) : n.reject(ft({}, le, {
                            adUnitId: n.adUnitId
                        })));
                    });
                }, e.show = function(e) {
                    var i = this;
                    return this.AdList[e].gridAd ? this.AdList[e].isEnd ? void this.AdList[e].queue.push(function(e) {
                        t.I.show(e);
                    }) : (this.AdList[e].isEnd = !0, this.AdList[e].gridAd.style.realHeight && (this.AdList[e].gridAd.style.top = jn.I.winHeight - this.AdList[e].gridAd.style.realHeight + this.AdList[e].offsetY), 
                    2 === this.bannerParams.type && this.AdList[e].gridAd.style.width ? this.AdList[e].gridAd.style.left = (jn.I.winWidth - this.AdList[e].gridAd.style.width) / 2 : this.AdList[e].gridAd.style.left = (jn.I.winWidth - this.bannerWidth) / 2, 
                    Yn.I.adStat("grid", this.AdList[e].adUnitId, ye.grid, _e.show), this.AdList[e].gridAd.show().catch(function(t) {
                        return i.handleShowError(t);
                    }), this.onResize(), t.I.handleQueue(e), !0) : (t.I.handleQueue(e), !1);
                }, e.hide = function(e) {
                    if (this.AdList[e].gridAd) {
                        if (this.AdList[e].isEnd) return void this.AdList[e].queue.push(function(e) {
                            t.I.hide(e);
                        });
                        this.AdList[e].isEnd = !0, this.AdList[e].gridAd.style.left = -9999, this.AdList[e].gridAd.hide(), 
                        Yn.I.adStat("grid", this.AdList[e].adUnitId, ye.grid, _e.interrupt), t.I.handleQueue(e);
                    }
                }, e.destory = function(t) {
                    this.AdList[t] && this.AdList[t].gridAd && (this.AdList[t].gridAd.style.left = -9999, 
                    this.AdList[t].gridAd.destroy(), this.AdList[t].gridAd = null, Yn.I.adStat("grid", this.AdList[t].adUnitId, ye.grid, _e.interrupt));
                }, e.onLoad = function() {
                    var e = t.I, i = e.gridAd;
                    i && (i.style.realHeight && (i.style.top = jn.I.winHeight - i.style.realHeight + e.bannerParams.offsetY, 
                    i.style.left = (jn.I.winWidth - i.style.realWidth) / 2), e.unbind(), e.resolve && e.resolve({
                        adUnitId: e.adUnitId,
                        scale: e.bannerScale,
                        width: i.style.realWidth / e.bannerScale,
                        height: i.style.realHeight / e.bannerScale
                    }));
                }, e.onError = function(e) {
                    var i = t.I;
                    !i._isErrored && i.handleError(e, ft({}, se, {
                        adUnitId: i.adUnitId
                    }));
                }, e.onResize = function() {
                    var e = t.I, i = e.gridAd;
                    i && (i.style.top = jn.I.winHeight - i.style.realHeight + e.bannerParams.offsetY, 
                    i.style.left = (jn.I.winWidth - i.style.realWidth) / 2);
                }, e.handleShowError = function(e) {
                    var i = t.I, n = e.errCode, r = e.errMsg;
                    !i.isErrored && i.handleError(e, {
                        code: n,
                        msg: r
                    });
                }, e.handleError = function(e, i) {
                    var n = t.I;
                    n.unbind(), n.gridAd && n.gridAd.destroy(), n.gridAd = null, n._isErrored = !0, 
                    n.reject && n.reject(ft({}, i, {
                        adUnitId: n.adUnitId
                    })), Yn.I.adStat("grid", n.adUnitId, ye.grid, _e.fail);
                }, e.unbind = function() {
                    this.gridAd && (this.gridAd.offLoad(this.onLoad), this.gridAd.offError(this.onError), 
                    this.gridAd.offResize(this.onResize));
                }, e.handleQueue = function(e) {
                    var i = t.I;
                    i.AdList[e].queue.length > 0 ? (i.AdList[e].isEnd = !1, i.AdList[e].queue.shift()()) : i.AdList[e].isEnd = !1;
                }, ht(t, [ {
                    key: "isErrored",
                    get: function() {
                        return this._isErrored;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t(750, 750));
                    }
                } ]), t;
            }();
            dt(or, "instance", void 0), t._RF.pop(), t._RF.push({}, "ccc9aImKkVIZ7u/1bGjC4Ik", "WxCustom", void 0);
            var ar = function() {
                function t() {
                    dt(this, "bannerParams", void 0), dt(this, "_isErrored", void 0), dt(this, "adUnitId", void 0), 
                    dt(this, "customAd", void 0), dt(this, "resolve", void 0), dt(this, "reject", void 0), 
                    dt(this, "queue", []), dt(this, "isEnd", !1), this.adUnitId = "", this._isErrored = !1;
                }
                var e = t.prototype;
                return e.create = function(e, i) {
                    var n = this;
                    if (this.bannerParams = i || {}, this.bannerParams.adIntervals = this.bannerParams.adIntervals || 60, 
                    !this.customAd || !t.I.isEnd) return this.isEnd = !0, Nn.I.emit(tn, !1), new Promise(function(r, o) {
                        if (n.resolve = r, n.reject = o, n._isErrored = !1, n.adUnitId = e, ce.isEmpty(e)) return t.I.handleQueue(), 
                        n.reject(ft({}, ae, {
                            adUnitId: n.adUnitId
                        }));
                        if (n.customAd) n.show(!1); else {
                            var a = {
                                top: i.top,
                                left: i.left
                            };
                            if (n.customAd = wx.createCustomAd({
                                adUnitId: e,
                                style: a,
                                adIntervals: n.bannerParams.adIntervals
                            }), Yn.I.adStat("custom", n.adUnitId, ye.custom, _e.request), !n.customAd) return n.reject(ft({}, le, {
                                adUnitId: n.adUnitId
                            }));
                            n.customAd.onLoad(n.onLoad), n.customAd.onClose(n.onClose), n.customAd.onError(n.onError);
                        }
                    });
                    t.I.queue.push(t.I.show.bind(t.I));
                }, e.show = function(e) {
                    var i = this;
                    if (void 0 === e && (e = !0), !t.I.isEnd || !e) return t.I.isEnd = !0, this.customAd ? (Yn.I.adStat("custom", this.adUnitId, ye.custom, _e.show), 
                    this.customAd.show().then(function(e) {
                        t.I.handleQueue();
                    }).catch(function(t) {
                        return i.handleShowError(t);
                    }), !0) : (t.I.handleQueue(), !1);
                    t.I.queue.push(t.I.show.bind(t.I));
                }, e.hide = function() {
                    var e = t.I;
                    e.isEnd ? e.queue.push(e.hide.bind(e)) : (e.isEnd = !0, this.customAd && (this.customAd.hide(), 
                    Yn.I.adStat("custom", e.adUnitId, ye.custom, _e.interrupt)), e.handleQueue());
                }, e.toggle = function(t) {
                    t ? this.show() : this.hide();
                }, e.destory = function() {
                    this.customAd && (this.customAd.destroy(), this.customAd = null, Yn.I.adStat("custom", this.adUnitId, ye.custom, _e.interrupt));
                }, e.onLoad = function() {
                    var e = t.I;
                    e.customAd && (e.show(!1), e.unbind(), e.resolve && e.resolve({
                        adUnitId: e.adUnitId,
                        top: e.bannerParams.top,
                        left: e.bannerParams.left
                    }));
                }, e.onError = function(e) {
                    var i = t.I;
                    !i._isErrored && i.handleError(e, ft({}, se, {
                        adUnitId: i.adUnitId
                    })), Nn.I.emit(tn, !0);
                }, e.onClose = function() {
                    t.I.customAd = null, Yn.I.dot("wxCustom_close");
                }, e.handleShowError = function(e) {
                    var i = t.I, n = e.errCode, r = e.errMsg;
                    !i.isErrored && i.handleError(e, {
                        code: n,
                        msg: r
                    });
                }, e.handleError = function(e, i) {
                    var n = t.I;
                    n.unbind(), n._isErrored = !0, n.customAd && n.customAd.destroy(), n.customAd = null, 
                    n.handleQueue(), n.reject && n.reject(ft({}, i, {
                        adUnitId: n.adUnitId
                    })), Yn.I.adStat("custom", this.adUnitId, ye.custom, _e.fail);
                }, e.unbind = function() {
                    this.customAd && (this.customAd.offLoad(this.onLoad), this.customAd.offClose(this.onClose), 
                    this.customAd.offError(this.onError));
                }, e.handleQueue = function() {
                    var e = t.I;
                    e.queue.length > 0 ? (e.isEnd = !1, e.queue.shift()()) : e.isEnd = !1;
                }, ht(t, [ {
                    key: "isErrored",
                    get: function() {
                        return this._isErrored;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(ar, "instance", void 0), t._RF.pop(), t._RF.push({}, "1e261K/DypKqIG4qvui02sw", "WxInterstitial", void 0);
            var sr = function() {
                function t() {}
                return t.initInterstitialAd = function(t) {
                    void 0 === t && (t = Ct.interstitialAdId), this.interstitialAdId = t, this.createInterstitial();
                }, t.showInterstitialAd = function(t) {
                    var e = this;
                    void 0 === t && (t = Ct.interstitialAdId), this.interstitialAdId = t, this.interstitialSuccell ? (this.interstitialAd.show(), 
                    setTimeout(function() {
                        e.createInterstitial(!1);
                    }, 5e3)) : this.createInterstitial(!0);
                }, t.createInterstitial = function(e) {
                    var i = this;
                    void 0 === e && (e = !1), Yn.I.adStat("InterstitialAd", this.interstitialAdId, ye.interstitial, _e.request), 
                    this.interstitialAd = $n.I.createInterstitialAd(this.interstitialAdId), this.interstitialAd.onLoad(function() {
                        t.interstitialSuccell = !0, Yn.I.adStat("InterstitialAd", i.interstitialAdId, ye.interstitial, _e.rt), 
                        e && (Yn.I.adStat("InterstitialAd", i.interstitialAdId, ye.interstitial, _e.show), 
                        i.interstitialAd.show());
                    }), this.interstitialAd.onError(function(e) {
                        Yn.I.adStat("InterstitialAd", i.interstitialAdId, ye.interstitial, _e.fail), t.interstitialSuccell = !1;
                    });
                }, t;
            }();
            dt(sr, "interstitialAdId", Ct.interstitialAdId), dt(sr, "interstitialAd", void 0), 
            dt(sr, "interstitialSuccell", !1), t._RF.pop(), t._RF.push({}, "7c8b4Ss0xtJsqzCxsbm5/Uf", "AdService", void 0);
            var lr = function() {
                function t() {}
                var e = t.prototype;
                return e.createBanner = function(t, e) {
                    return rr.I.create(t, e);
                }, e.showBanner = function() {
                    rr.I.show();
                }, e.hideBanner = function() {
                    rr.I.hide();
                }, e.destoryBanner = function() {
                    rr.I.destory();
                }, e.createInterstitialAd = function(t) {
                    sr.showInterstitialAd(t);
                }, e.createGrid = function(t, e, i) {
                    return or.I.create(t, e, i);
                }, e.showGrid = function(t) {
                    or.I.show(t);
                }, e.hideGrid = function(t) {
                    or.I.hide(t);
                }, e.destoryGrid = function(t) {
                    or.I.destory(t);
                }, e.createCustom = function(t, e) {
                    return ar.I.create(t, e);
                }, e.showCustom = function() {
                    ar.I.show();
                }, e.hideCustom = function() {
                    ar.I.hide();
                }, e.destoryCustom = function() {
                    ar.I.destory();
                }, e.navigateToMiniProgram = function(t, e, i) {
                    var n = t.id, r = t.appid, o = t.path;
                    return t.game, Yn.I.jumps(n, e), o || (o = "?channel_id=" + Ct.channel_id), $n.I.navigateToMiniProgram(r, o, i);
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(lr, "instance", void 0), t._RF.pop(), t._RF.push({}, "eb64d9jQORMGaZHA/mXOqdW", "WXSDK", void 0);
            var ur = function() {
                function t() {}
                return t.init = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.isWx && tr.I.init(), t.next = 3, this.game.env();

                              case 3:
                                return this.isWx && Qn.I.init(), t.abrupt("return", Promise.resolve());

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), ht(t, null, [ {
                    key: "isWx",
                    get: function() {
                        return "undefined" != typeof wx;
                    }
                }, {
                    key: "data",
                    get: function() {
                        return je.I.Data;
                    }
                }, {
                    key: "share",
                    get: function() {
                        return Qn.I;
                    }
                }, {
                    key: "game",
                    get: function() {
                        return nr.I;
                    }
                }, {
                    key: "ad",
                    get: function() {
                        return lr.I;
                    }
                }, {
                    key: "stat",
                    get: function() {
                        return Yn.I;
                    }
                }, {
                    key: "online",
                    get: function() {
                        return er.I;
                    }
                } ]), t;
            }();
            t._RF.pop(), t._RF.push({}, "4730aJaOstFHLw71RlyGHZu", "SDKTools", void 0);
            var cr, hr, dr, fr, pr, vr, br = function() {
                function t() {}
                return t.isAfterTime = function(t) {
                    try {
                        var e = new Date(t).getTime();
                        return new Date(ur.data.regTime + " 00:00:00").getTime() >= e;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        return !1;
                    }
                }, t.createBanner = function(t, e) {
                    if (void 0 === t && (t = Ct.bannerId), this.isWx) return ur.ad.createBanner(t, e);
                }, t.showBanner = function() {
                    this.isWx && ur.ad.showBanner();
                }, t.hideBanner = function() {
                    this.isWx && ur.ad.hideBanner();
                }, t.destoryBanner = function() {
                    this.isWx && ur.ad.destoryBanner();
                }, t.createInterstitialAd = function(t) {
                    void 0 === t && (t = Ct.interstitialAdId), this.isWx && ur.ad.createInterstitialAd(t);
                }, t.createGrid = function(t, e, i) {
                    if (void 0 === e && (e = Ct.gridId), this.isWx) return ur.ad.createGrid(t, e, i);
                }, t.showGrid = function(t) {
                    this.isWx && ur.ad.showGrid(t);
                }, t.hideGrid = function(t) {
                    this.isWx && ur.ad.hideGrid(t);
                }, t.destoryGrid = function(t) {
                    this.isWx && ur.ad.destoryGrid(t);
                }, t.createCustom = function(t, e) {
                    if (void 0 === t && (t = Ct.customId), this.isWx) return ur.ad.createCustom(t, e);
                }, t.showCustom = function() {
                    this.isWx && ur.ad.showCustom();
                }, t.hideCustom = function() {
                    this.isWx && ur.ad.hideCustom();
                }, t.destoryCustom = function() {
                    this.isWx && ur.ad.destoryCustom();
                }, t.navigateToMiniProgram = function(t, e, i) {
                    if (this.isWx) return ur.ad.navigateToMiniProgram(t, e, i);
                }, t.subScribe = function(t, e, i) {
                    if (window.wx) return ur.game.subScribe(t, e, i);
                }, t.login = function(t) {
                    return ur.game.login(t);
                }, t.saveData = function(t, e) {
                    return ur.game.saveData(t, e);
                }, t.getData = function(t) {
                    return ur.game.getData(t);
                }, t.rankAdd = function(t, e) {
                    return ur.game.rankAdd(t, e);
                }, t.updateRankData = function(t) {
                    void 0 === t && (t = {});
                    var e = JSON.stringify(t);
                    return ur.game.saveData("rankData", e);
                }, t.rankList = function(t, e, i) {
                    return void 0 === e && (e = 1), void 0 === i && (i = !1), this.isWx ? ur.game.rankList(t, e, i) : Promise.resolve({
                        code: -1
                    });
                }, t.totalrankAdd = function(t, e, i, n) {
                    return void 0 === i && (i = 0), void 0 === n && (n = 1), ur.game.totalrankAdd(t, e, i, n);
                }, t.totalrankList = function(t, e, i, n) {
                    return void 0 === e && (e = 0), void 0 === i && (i = !1), void 0 === n && (n = 1), 
                    this.isWx ? ur.game.totalrankList(t, e, i, n) : Promise.resolve({
                        code: -1
                    });
                }, t.adList = function(t) {
                    return this.isWx ? ur.game.adList(t) : Promise.resolve({
                        code: -1
                    });
                }, t.addExposure = function(t, e) {
                    return this.isWx ? ur.stat.addExposure(t, e) : Promise.resolve({
                        code: -1
                    });
                }, t.updateOnlineParams = function() {
                    return ur.online.updateOnlineConfig();
                }, t.getParamsInt = function(t, e) {
                    return void 0 === e && (e = 0), ur.online.getParamsInt(t.toString(), e);
                }, t.getParamsObj = function(t, e) {
                    return void 0 === e && (e = {}), ur.online.getParamsObj(t.toString(), e);
                }, t.getParamsString = function(t, e) {
                    return void 0 === e && (e = ""), ur.online.getParamsString(t.toString(), e);
                }, ht(t, null, [ {
                    key: "isWx",
                    get: function() {
                        return "undefined" != typeof wx;
                    }
                }, {
                    key: "isSupported",
                    get: function() {
                        return "object" == r(ur);
                    }
                }, {
                    key: "envNum",
                    get: function() {
                        return ur.data.envEnum;
                    }
                }, {
                    key: "scene",
                    get: function() {
                        return ur.data.scene;
                    }
                }, {
                    key: "uid",
                    get: function() {
                        return ur.data.userId;
                    }
                }, {
                    key: "isnew",
                    get: function() {
                        try {
                            var t = zn.today;
                            return ur.data.regTime === t;
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            return !1;
                        }
                    }
                }, {
                    key: "isFirstLogin",
                    get: function() {
                        try {
                            return 1 === ur.data.isnew;
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            return !1;
                        }
                    }
                }, {
                    key: "openId",
                    get: function() {
                        return ur.data.openId;
                    }
                } ]), t;
            }();
            !function(t) {
                t.isOpenInterstitialAdId = "isOpenInterstitialAdId", t.shareRandom = "shareRandom", 
                t.switch_draw = "switch_draw", t.switch_banner = "switch_banner", t.switch_grid = "switch_grid", 
                t.calendar_level_max = "calendar_level_max", t.over_show_ad = "over_show_ad", t.event_open_1 = "event_open_1", 
                t.event_close_1 = "event_close_1", t.event_level_1 = "event_level_1";
            }(cr || (cr = {})), t._RF.pop(), t._RF.push({}, "fe7e47+ps9DdLTfAlzkVK/N", "CustomAd", void 0);
            var gr, mr, yr, _r, Ir, wr = e.ccclass, Sr = e.property, Cr = (hr = wr("CustomAd"), 
            dr = Sr({
                tooltip: "等待时间"
            }), hr((vr = _t((pr = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "wait", vr, mt(e)), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.start = function() {}, i.onEnable = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i, r, o, a, s;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = ur.isWx, !t.t0) {
                                    t.next = 5;
                                    break;
                                }
                                return t.next = 4, Ve.wait(.1);

                              case 4:
                                t.t0 = this.node.active;

                              case 5:
                                if (!t.t0) {
                                    t.next = 8;
                                    break;
                                }
                                e = this.node.worldPosition, i = Ve.winWidth, r = Ve.winHeight, o = i / wx.getSystemInfoSync().windowWidth, 
                                a = (r - e.y - this.node.getComponent(c).height / 2) / o, s = (e.x - this.node.getComponent(c).width / 2) / o, 
                                br.createCustom(Ct.customId, {
                                    top: a,
                                    left: s
                                });

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.onDisable = function() {
                    br.hideCustom();
                }, e;
            }(a)).prototype, "wait", [ dr ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), fr = pr)) || fr);
            t._RF.pop(), t._RF.push({}, "a0b04p5dMJDnp/Ftu9s2yYD", "BaseColl", void 0);
            var Ar, Tr = e.ccclass, kr = e.property;
            !function(t) {
                t[t.default = 0] = "default", t[t.bubble = 1] = "bubble", t[t.wall = 2] = "wall", 
                t[t.top = 3] = "top";
            }(Ar || (Ar = {}));
            var xr, Er, Br, Pr, Rr = (gr = Tr("BaseColl"), mr = kr({
                type: T(Ar)
            }), gr((Ir = _t((_r = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "group", Ir, mt(e)), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onEnable = function() {
                    Nn.I.emit("add_coll", this);
                }, i.onDisable = function() {
                    Nn.I.emit("remove_coll", this);
                }, ht(e, [ {
                    key: "x",
                    get: function() {
                        return this.node.worldPosition.x;
                    }
                }, {
                    key: "y",
                    get: function() {
                        return this.node.worldPosition.y;
                    }
                } ]), e;
            }(a)).prototype, "group", [ mr ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Ar.default;
                }
            }), yr = _r)) || yr);
            t._RF.pop(), t._RF.push({}, "6fb8aVYWX9I2Z1F4vI+Kuco", "BoxColl", void 0);
            var Lr, Dr, Or, Mr = e.ccclass, Fr = e.property, Nr = Mr("BoxColl")((Br = _t((Er = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "width", Br, mt(e)), 
                    yt(mt(e), "height", Pr, mt(e)), e;
                }
                return pt(e, t), ht(e, [ {
                    key: "left",
                    get: function() {
                        return this.x - this.width / 2;
                    }
                }, {
                    key: "right",
                    get: function() {
                        return this.x + this.width / 2;
                    }
                }, {
                    key: "top",
                    get: function() {
                        return this.y + this.height / 2;
                    }
                }, {
                    key: "bottom",
                    get: function() {
                        return this.y - this.height / 2;
                    }
                } ]), e;
            }(Rr)).prototype, "width", [ Fr ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Pr = _t(Er.prototype, "height", [ Fr ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), xr = Er)) || xr;
            t._RF.pop(), t._RF.push({}, "8b706FUT5BHOJLvfNUQnIvw", "CircleColl", void 0);
            var zr, Gr, Ur, Vr = e.ccclass, Wr = e.property, Hr = Vr("CircleColl")((Or = _t((Dr = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "radius", Or, mt(e)), 
                    e;
                }
                return pt(e, t), e;
            }(Rr)).prototype, "radius", [ Wr ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Lr = Dr)) || Lr;
            t._RF.pop(), t._RF.push({}, "809bdVx5axGlYMQCRGuEKY5", "ColliderManager", void 0);
            var jr = e.ccclass, Yr = (e.property, jr("ColliderManager")((Ur = Gr = function() {
                function t() {
                    dt(this, "_colliders", []), Nn.I.on("add_coll", this.add, this), Nn.I.on("remove_coll", this.remove, this);
                }
                var e = t.prototype;
                return e.clearCircle = function() {
                    for (var t = 0; t < this._colliders.length; t++) this._colliders instanceof Hr && (this._colliders.splice(t, 1), 
                    t--);
                }, e.raycast = function(t, e) {
                    for (var i = [], n = 0; n < this._colliders.length; n++) {
                        var r = this._colliders[n];
                        if (r.group != Ar.default) {
                            var o = void 0;
                            r instanceof Nr ? o = this.lineToBox(t, e, r) : r instanceof Hr && (o = this.lineToCircle(t, e, r)), 
                            o && i.push(o);
                        }
                    }
                    return this.getMinPoint(t, e, i);
                }, e.lineToBox = function(t, e, i) {
                    var n = [ this.segmentsIntr(t, e, i.left, i.top, i.right, i.top), this.segmentsIntr(t, e, i.right, i.top, i.right, i.bottom), this.segmentsIntr(t, e, i.right, i.bottom, i.left, i.bottom), this.segmentsIntr(t, e, i.left, i.bottom, i.left, i.top) ], r = this.getMinPoint(t, e, n);
                    return r && (r.collider = i, r.normal = s(r.x > i.x ? -1 : 1, 0), r.x = Ve.toFixed(r.x, 8), 
                    r.y = Ve.toFixed(r.y, 8)), r;
                }, e.lineToCircle = function(t, e, i) {
                    var n = Ve.cacuDis(t.x, t.y, e.x, e.y), r = (e.x - t.x) / n, o = (e.y - t.y) / n, a = i.x - t.x, s = i.y - t.y, l = a * r + s * o, u = l * l, c = a * a + s * s, h = Math.pow(i.radius, 2);
                    if (h - c + u < 0) return null;
                    var d, f = l - Math.sqrt(h - c + u);
                    return f - 0 > -1e-8 && f - n < 1e-8 && (d = {
                        x: t.x + f * r,
                        y: t.y + f * o
                    }), d && (d.collider = i), d;
                }, e.segmentsIntr = function(t, e, i, n, r, o) {
                    var a = (t.x - i) * (e.y - n) - (t.y - n) * (e.x - i), s = (t.x - r) * (e.y - o) - (t.y - o) * (e.x - r);
                    if (a * s >= 0) return !1;
                    var l = (i - t.x) * (o - t.y) - (n - t.y) * (r - t.x);
                    if (l * (l + a - s) >= 0) return !1;
                    var u = l / (s - a), c = u * (e.x - t.x), h = u * (e.y - t.y);
                    return {
                        x: t.x + c,
                        y: t.y + h
                    };
                }, e.getMinPoint = function(t, e, i) {
                    for (var n = null, r = null, o = 0; o < i.length; o++) {
                        var a = i[o];
                        if (a) {
                            var s = a.dis || Ve.cacuDis(t.x, t.y, a.x, a.y);
                            (null == n || s < n) && ((r = a).dis = n = s);
                        }
                    }
                    return r;
                }, e.add = function(t) {
                    t && this._colliders.indexOf(t) < 0 && this._colliders.push(t);
                }, e.remove = function(t) {
                    t && Ve.removeFromList(this._colliders, t);
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t()), this._instance;
                    }
                } ]), t;
            }(), dt(Gr, "_instance", void 0), zr = Ur)) || zr);
            t._RF.pop(), t._RF.push({}, "f4d20ysz2dPMLEs065qd8IW", "Analytics", void 0);
            var Kr, qr = function() {
                function t() {
                    dt(this, "systemType", void 0);
                }
                var e = t.prototype;
                return e.dot = function(t, e) {
                    if (void 0 === e && (e = {}), "undefined" != typeof wx) return ur.stat.dot(t, e);
                }, e.loadingFinish = function() {
                    return ur.stat.loadingFinish();
                }, e.stay = function(t) {
                    return ur.stat.stay(t);
                }, e.behaviors = function() {
                    return ur.stat.behaviors();
                }, e.jumps = function(t, e) {
                    return ur.stat.jumps(t, e);
                }, e.levelStart = function(t, e, i) {
                    return e || (e = "第" + t + "关"), i || (i = "普通模式"), ur.stat.levelStart(t, e, i);
                }, e.levelRunning = function(t, e, i, n, r, o, a, s) {
                    return e || (e = "第" + t + "关"), i || (i = "普通模式"), ur.stat.levelRunning(t, e, i, n, r, o, a, s);
                }, e.levelEnd = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o, a, s, l) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.abrupt("return", (void 0 === l && (l = 0), i || (i = "第" + e + "关"), r || (r = "普通模式"), 
                                ur.stat.levelEnd(e, i, r, o, a, s, l)));

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e, i, n, r, o, a, s) {
                        return t.apply(this, arguments);
                    };
                }(), ht(t, [ {
                    key: "isSupported",
                    get: function() {
                        return "object" == r(ur);
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t());
                    }
                } ]), t;
            }();
            dt(qr, "_instance", void 0), dt(qr, "IGNORE_LOGGER", !1), function(t) {
                t.toggleScene = "toggleScene", t.recoverGame = "recoverGame", t.replayGame = "replayGame", 
                t.settingClose = "settingClose", t.updateLvUI = "updateLvUI";
            }(Kr || (Kr = {})), t._RF.pop(), t._RF.push({}, "1b927N7hHZBDYc83M+5LsW2", "DrawManager", void 0);
            var Xr, Jr, Qr, Zr, $r, to, eo, io, no = function() {
                function t() {
                    dt(this, "drawList", void 0), dt(this, "bannerList", void 0), dt(this, "gridList", void 0), 
                    dt(this, "gridIdx", -1);
                }
                var e = t.prototype;
                return e.updateDrawList = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.drawList) {
                                    t.next = 5;
                                    break;
                                }
                                return t.next = 3, br.adList(we.draw);

                              case 3:
                                (e = t.sent).code || (this.drawList = e.data);

                              case 5:
                                return t.abrupt("return", (this.drawList && this.drawList.sort(function(t, e) {
                                    return .5 - Math.random();
                                }), Promise.resolve()));

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.updateBannerList = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.bannerList) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 3, br.adList(we.guessLike);

                              case 3:
                                if (e = t.sent, console.log("adList", e), !e.code) {
                                    t.next = 6;
                                    break;
                                }
                                return t.abrupt("return");

                              case 6:
                                this.bannerList = e.data;

                              case 7:
                                return t.abrupt("return", (this.bannerList && this.bannerList.sort(function(t, e) {
                                    return .5 - Math.random();
                                }), Promise.resolve()));

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.getGrid = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.gridList) {
                                    t.next = 5;
                                    break;
                                }
                                return t.next = 3, br.adList(we.grid);

                              case 3:
                                e = t.sent, console.log("adList", e), e.code || (this.gridList = e.data, this.gridList && this.gridList.sort(function() {
                                    return .5 - Math.random();
                                }));

                              case 5:
                                if (i = this.gridList.length, !this.gridList || 0 === i) {
                                    t.next = 8;
                                    break;
                                }
                                return t.abrupt("return", (this.gridIdx++, this.gridIdx == i && (this.gridIdx = 0), 
                                Promise.resolve(this.gridIdx)));

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.onDrawGame = function(t) {
                    var e = this.drawList[t];
                    e && this.navigateToMiniProgram(e, Xr.draw);
                }, e.onBannerGame = function(t) {
                    var e = this.bannerList[t];
                    e && this.navigateToMiniProgram(e, Xr.guessLike);
                }, e.onGridGame = function(t) {
                    var e = this.gridList[t];
                    e && this.navigateToMiniProgram(e, Xr.grid);
                }, e.navigateToMiniProgram = function(t, e) {
                    t.id, t.appid, t.path;
                    var i = t.game;
                    qr.I.dot("jump_appid", {
                        from: "" + i
                    }), br.navigateToMiniProgram(t, e).then(function(t) {
                        console.log("navigateToMiniProgram成功", t);
                    }).catch(function(t) {
                        console.log("navigateToMiniProgram失败", t);
                    });
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t());
                    }
                } ]), t;
            }();
            dt(no, "_instance", void 0), function(t) {
                t[t.default = 0] = "default", t[t.draw = 1] = "draw", t[t.guessLike = 2] = "guessLike", 
                t[t.grid = 3] = "grid", t[t.play = 4] = "play";
            }(Xr || (Xr = {})), t._RF.pop(), t._RF.push({}, "961b9RHmNVP7Ly+lCdEyiLX", "SelfAD", void 0);
            var ro, oo, ao, so, lo, uo, co, ho = e.ccclass, fo = e.property, po = (Jr = ho("SelfAD"), 
            Qr = fo({
                type: k,
                displayName: "icon"
            }), Zr = fo(x), Jr((eo = _t((to = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "icon", eo, mt(e)), 
                    yt(mt(e), "type", io, mt(e)), dt(mt(e), "_data", void 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onEnable = function() {
                    this.icon.spriteFrame = null, this.init();
                }, i.init = function() {
                    1 === br.getParamsInt(cr.switch_grid, 0) ? (this.initGrid(), this.schedule(this.initGrid, 30)) : this.node.active = !1;
                }, i.initGrid = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, no.I.getGrid();

                              case 2:
                                e = t.sent, this._data = no.I.gridList[e], br.addExposure(this.type, [ this._data ]), 
                                this.show();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.show = function() {
                    var t = this;
                    null != this._data && ("" != this._data.icon ? (this.icon.node.active = !0, E.loadRemote(this._data.icon, function(e, i) {
                        if (t.isValid) if (!e && i) {
                            var n = new b(), r = new v();
                            r.image = i, n.texture = r, t.icon.spriteFrame = n;
                        } else t.icon.node.active = !1;
                    })) : this.icon.node.active = !1);
                }, i.onItem = function() {
                    this._data && (no.I.navigateToMiniProgram(this._data, Xr.grid), this.initGrid(), 
                    this.unschedule(this.initGrid), this.schedule(this.initGrid, 30));
                }, i.onClose = function() {
                    this.node.active = !1;
                }, e;
            }(a)).prototype, "icon", [ Qr ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), io = _t(to.prototype, "type", [ Zr ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Xr.grid;
                }
            }), $r = to)) || $r);
            t._RF.pop(), t._RF.push({}, "ffee4N6LvFMG5OtxZgCLJz2", "SelfADList", void 0);
            var vo, bo, go, mo, yo, _o, Io, wo = e.ccclass, So = e.property, Co = (ro = wo("SelfADList"), 
            oo = So(i), ao = So(B), ro((uo = _t((lo = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "model", uo, mt(e)), 
                    yt(mt(e), "list", co, mt(e)), dt(mt(e), "_data", []), dt(mt(e), "gridMax", 26), 
                    dt(mt(e), "isTouch", !1), dt(mt(e), "speed", 1), dt(mt(e), "minX", -74), dt(mt(e), "maxX", 3070), 
                    dt(mt(e), "modelWidth", 144), dt(mt(e), "test", {
                        adtyp: "2",
                        animation: "0",
                        appid: "wx9cbcb605a30e3553",
                        game: "恐龙竞技场",
                        highlight: "1",
                        icon: "https://cdn-wxsdk.miso-lab.com/4e/2916124caf91b57a4c6fb167005b61.jpg?attname=%E6%81%90%E9%BE%99%E7%AB%9E%E6%8A%80%E5%9C%BA.jpg",
                        id: 1392,
                        path: ""
                    }), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onload = function() {
                    var t = this;
                    this.list.node.on("scroll-began", function() {
                        t.isTouch = !0;
                    }, this), this.list.node.on("scroll-ended", function() {
                        t.isTouch = !1;
                    }, this), this.minX = -this.modelWidth / 2, this.maxX = this.modelWidth / 2 + (this.modelWidth + this.list.content.getComponent(P).spacingX) * (this.gridMax - 1) + this.list.content.getComponent(P).spacingX;
                }, i.onEnable = function() {
                    this.init();
                }, i.init = function() {
                    1 === br.getParamsInt(cr.switch_banner, 0) ? this.initGrid() : this.node.active = !1;
                }, i.initGrid = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, no.I.updateBannerList();

                              case 2:
                                if (!no.I.bannerList) {
                                    t.next = 7;
                                    break;
                                }
                                if (no.I.bannerList.length >= this.gridMax) this._data = no.I.bannerList.slice(0, this.gridMax); else if (no.I.bannerList.length <= 4) {
                                    for (e = 0; e < this.gridMax; e += no.I.bannerList.length) this._data = this._data.concat(no.I.bannerList);
                                    this._data = this._data.splice(0, this.gridMax);
                                } else this._data = no.I.bannerList;
                                this.initList(), t.next = 8;
                                break;

                              case 7:
                                this.node.active = !1;

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.initTestData = function() {
                    for (var t = 0; t < this.gridMax; ++t) this._data.push(this.test);
                }, i.initList = function() {
                    for (var t = 0; t < this._data.length; ++t) {
                        var e = m(this.model);
                        e.active = !0, this.list.content.addChild(e), this.show(e, t), e.index = t, br.addExposure(Xr.guessLike, [ this._data[t] ]);
                    }
                    this.list.content.getComponent(c).width = this._data.length * (this.modelWidth + this.list.content.getComponent(P).spacingX);
                }, i.show = function(t, e) {
                    var i = this._data[e], n = t.getComponent(k);
                    null != i && ("" != i.icon ? (n.node.active = !0, t.getComponent(R).clickEvents[0].customEventData = "" + e, 
                    E.loadRemote(i.icon, function(t, e) {
                        if (n.isValid) if (!t && e) {
                            var i = new b(), r = new v();
                            r.image = e, i.texture = r, n.spriteFrame = i;
                        } else n.node.active = !1;
                    })) : n.node.active = !1);
                }, i.onItem = function(t, e) {
                    var i = parseInt(e);
                    this._data && no.I.navigateToMiniProgram(this._data[i], Xr.guessLike);
                }, i.update = function(t) {
                    for (var e = 0; e < this.list.content.children.length; ++e) {
                        var i = this.list.content.children[e].position;
                        this.isTouch || this.list.content.children[e].setPosition(l(i.x - this.speed, i.y, i.z)), 
                        this.list.content.children[e].position.x < this.minX && this.list.content.children[e].setPosition(l(this.maxX, i.y, i.z)), 
                        this.list.content.children[e].position.x > this.maxX && this.list.content.children[e].setPosition(l(this.minX, i.y, i.z));
                    }
                }, e;
            }(a)).prototype, "model", [ oo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), co = _t(lo.prototype, "list", [ ao ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), so = lo)) || so);
            t._RF.pop(), t._RF.push({}, "33f8bvKzJlPv6IPrC1EJvc3", "BoosterIcon", void 0);
            var Ao, To, ko, xo = e.ccclass, Eo = e.property, Bo = (vo = xo("BoosterIcon"), bo = Eo(k), 
            go = Eo(b), vo((_o = _t((yo = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "icon", _o, mt(e)), 
                    yt(mt(e), "iconSprites", Io, mt(e)), dt(mt(e), "_type", void 0), e;
                }
                return pt(e, t), ht(e, [ {
                    key: "type",
                    get: function() {
                        return this._type;
                    },
                    set: function(t) {
                        this._type = t, this.icon.spriteFrame = this.iconSprites[t];
                    }
                } ]), e;
            }(a)).prototype, "icon", [ bo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Io = _t(yo.prototype, "iconSprites", [ go ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), mo = yo)) || mo);
            t._RF.pop(), t._RF.push({}, "d925ciUhiZIKIfnn2lDJEVY", "ObjectInstance", void 0);
            var Po, Ro = e.ccclass, Lo = (e.property, Ro("ObjectInstance")((ko = To = function() {
                function t() {}
                return t.getInstance = function(e) {
                    if (!t.instances.has(e)) {
                        var i = new e();
                        return t.instances.set(e, i), i;
                    }
                    return t.instances.get(e);
                }, t;
            }(), dt(To, "instances", new Map()), Ao = ko)) || Ao);
            t._RF.pop(), t._RF.push({}, "1e5f9gf27hLv6UjjeDWYDKa", "GameManager", void 0);
            var Do = e.ccclass, Oo = (e.property, Do(Po = function() {
                function t() {
                    dt(this, "level", void 0);
                }
                var e = t.prototype;
                return e.convertPosToVec = function(t, e) {
                    var i = Je.BUBBLE_R, n = (-e / i - 1) / Math.sqrt(3), r = (t / i - 1 - Math.round(n) % 2) / 2;
                    return s(r, n);
                }, e.convertVecToPos = function(t, e) {
                    var i = Je.BUBBLE_R, n = (e % 2 + 1 + 2 * t) * i, r = -(e * Math.sqrt(3) + 1) * i;
                    return l(n, r);
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return Lo.getInstance(t);
                    }
                } ]), t;
            }()) || Po);
            t._RF.pop(), t._RF.push({}, "1c7c0FD1qVFmYzFTnpB7p11", "WxHelper", void 0);
            var Mo = function() {
                function t() {}
                return t.getSystemInfo = function() {
                    "undefined" != typeof wx && (this.SystemInfo = wx.getSystemInfoSync());
                }, t.postMessage = function(t, e) {
                    "undefined" != typeof wx && this.checkVerison("1.9.92") && (cc.log("发送事件"), wx.getOpenDataContext().postMessage({
                        eventType: t,
                        data: e
                    }));
                }, t.updateWxRank = function(t) {
                    if ("undefined" != typeof wx && this.checkVerison("1.9.92")) {
                        var e = {
                            score: t
                        };
                        cc.error("score", t), wx.setUserCloudStorage({
                            KVDataList: [ {
                                key: "score",
                                value: JSON.stringify(e)
                            } ]
                        });
                    }
                }, t.createFeedbackButton = function(t) {
                    var e = this.computWxPosition(t);
                    return wx.createFeedbackButton({
                        type: "text",
                        text: " ",
                        style: {
                            left: e.left,
                            top: e.top,
                            width: e.width,
                            height: e.height,
                            borderRadius: 5
                        }
                    });
                }, t.createUserInfoButton = function(t) {
                    var e = this.computWxPosition(t);
                    return wx.createUserInfoButton({
                        type: "text",
                        text: " ",
                        style: {
                            left: e.left,
                            top: e.top,
                            width: e.width,
                            height: e.height,
                            borderRadius: 5
                        },
                        withCredentials: !0
                    });
                }, t.computWxPosition = function(t) {
                    var e = {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    }, i = t.worldPosition, n = t.getComponent(c).width, r = t.getComponent(c).height, o = A.getDevicePixelRatio(), a = A.getScaleX() / o;
                    return e.left = (i.x - n / 2) * a, e.top = wx.getSystemInfoSync().screenHeight - (i.y + r / 2) * a, 
                    e.width = n * a, e.height = r * a, e;
                }, t.compareVersion = function(t, e) {
                    t = t.split("."), e = e.split(".");
                    for (var i = Math.max(t.length, e.length); t.length < i; ) t.push("0");
                    for (;e.length < i; ) e.push("0");
                    for (var n = 0; n < i; n++) {
                        var r = parseInt(t[n]), o = parseInt(e[n]);
                        if (r > o) return 1;
                        if (r < o) return -1;
                    }
                    return 0;
                }, t.checkVerison = function(t) {
                    return this.compareVersion(this.SystemInfo.SDKVersion, t) >= 0;
                }, t.showModal = function(t) {
                    return new Promise(function(e, i) {
                        "undefined" != typeof wx ? wx.showModal(ft({}, t, {
                            success: function(t) {
                                t.confirm ? e(!0) : e(!1);
                            },
                            fail: function() {
                                i();
                            }
                        })) : cc.log(JSON.stringify(t));
                    });
                }, t.showToast = function(t, e) {
                    void 0 === e && (e = 1500), "undefined" != typeof wx && wx.showToast({
                        title: t,
                        icon: "none",
                        duration: e
                    });
                }, t.copy = function(t) {
                    return this.checkVerison("1.1.0") ? new Promise(function(e, i) {
                        wx.setClipboardData({
                            data: t,
                            success: function(t) {
                                e(t);
                            },
                            fail: function() {
                                e("");
                            }
                        });
                    }) : Promise.reject("");
                }, t.vibrateLong = function() {
                    return this.checkVerison("1.2.0") ? new Promise(function(t, e) {
                        wx.vibrateLong({
                            success: function() {
                                t(1);
                            },
                            fail: function() {
                                t(0);
                            }
                        });
                    }) : Promise.reject(null);
                }, t.vibrateShort = function() {
                    return this.checkVerison("1.2.0") ? new Promise(function(t, e) {
                        wx.vibrateShort({
                            success: function() {
                                t({
                                    code: 0
                                });
                            },
                            fail: function() {
                                t({
                                    code: 1
                                });
                            }
                        });
                    }) : Promise.reject(null);
                }, t.checkUpdate = function(t) {
                    if (void 0 === t && (t = !0), this.checkVerison("1.9.90")) {
                        var e = wx.getUpdateManager();
                        e.onCheckForUpdate(function(t) {
                            console.log("updateManager", t.hasUpdate);
                        }), e.onUpdateReady(function() {
                            wx.showModal({
                                title: "更新提示",
                                content: "新版本已经准备好，请重启应用！",
                                showCancel: t,
                                success: function(t) {
                                    t.confirm && e.applyUpdate();
                                }
                            });
                        }), e.onUpdateFailed(function() {});
                    }
                }, t.openCustomerServiceConversation = function() {
                    var t = this;
                    return new Promise(function(e, i) {
                        t.checkVerison("2.0.3") || e({
                            code: 1
                        }), wx.openCustomerServiceConversation({
                            showMessageCard: !0,
                            sendMessageTitle: "我要更多好玩！",
                            sendMessageImg: "http://dep.miso-lab.com/tetrischangeskin/bin/share/concat.png",
                            success: function() {
                                e({
                                    code: 0
                                });
                            },
                            fail: function() {
                                e({
                                    code: 1
                                });
                            }
                        });
                    });
                }, t.openConversation = function() {
                    var t = this;
                    return new Promise(function(e, i) {
                        t.checkVerison("2.0.3") || e({
                            code: 1
                        }), wx.openCustomerServiceConversation({
                            success: function() {
                                e({
                                    code: 0
                                });
                            },
                            fail: function() {
                                e({
                                    code: 1
                                });
                            }
                        });
                    });
                }, t.onShow = function(t) {
                    "undefined" != typeof wx && wx.onShow(t);
                }, t.onHide = function(t) {
                    "undefined" != typeof wx && wx.onHide(t);
                }, t.updateShareMenu = function(t) {
                    "undefined" != typeof wx && wx.updateShareMenu({
                        withShareTicket: t
                    });
                }, t.authorize = function(t) {
                    void 0 === t && (t = "scope.userInfo"), "undefined" != typeof wx && wx.getSetting({
                        success: function(e) {
                            e.authSetting[t] || wx.authorize({
                                scope: t,
                                success: function() {}
                            });
                        }
                    });
                }, t.getUserInfo = function(t) {
                    wx.getUserInfo({
                        success: function(e) {
                            t(e);
                        },
                        fail: function(e) {
                            t(e);
                        }
                    });
                }, t.createGameClubButton = function(t) {
                    var e = this.computWxPosition(t);
                    return wx.createGameClubButton({
                        icon: "green",
                        style: {
                            left: e.left,
                            top: e.top,
                            width: e.width,
                            height: e.height
                        }
                    });
                }, t;
            }();
            dt(Mo, "SystemInfo", void 0), dt(Mo, "userInfo", void 0), dt(Mo, "userInfoButton", void 0), 
            t._RF.pop(), t._RF.push({}, "9e454GehXxIBqWGRn1dgA/F", "shareTools", void 0);
            var Fo, No = function() {
                function t() {}
                return t.share = function(e, i, r) {
                    var o = this;
                    "undefined" == typeof wx || this.isTest ? i && i.success && i.success() : (this.onShowAd = !0, 
                    ur.share.share(e.toString(), i, r).then(function() {
                        var t = ut(n.default.mark(function t(e) {
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    o.onShowAd = !1, i && i.success && i.success(e);

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()).catch(function() {
                        var a = ut(n.default.mark(function a(s) {
                            return n.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (console.log("err", s), !s || !s.code || 1006 !== s.code) {
                                        n.next = 10;
                                        break;
                                    }
                                    if (!(Math.random() > br.getParamsInt(cr.shareRandom, 1)) || o.isFail) {
                                        n.next = 9;
                                        break;
                                    }
                                    return o.isFail = !0, n.next = 5, Mo.showModal({
                                        title: "分享失败",
                                        content: Math.random() > .5 ? "分享失败,请重新分享！" : "请分享其它群试试！",
                                        showCancel: !0,
                                        confirmText: "去分享"
                                    });

                                  case 5:
                                    if (!n.sent) {
                                        n.next = 7;
                                        break;
                                    }
                                    return n.abrupt("return", void t.share(e, i, r));

                                  case 7:
                                    n.next = 10;
                                    break;

                                  case 9:
                                    o.isFail = !1;

                                  case 10:
                                    o.onShowAd = !1, i && i.fail ? i && i.fail && i.fail(s) : Mo.showToast(s.msg);

                                  case 11:
                                  case "end":
                                    return n.stop();
                                }
                            }, a);
                        }));
                        return function(t) {
                            return a.apply(this, arguments);
                        };
                    }()));
                }, t.pureShare = function(t, e) {
                    void 0 === e && (e = {}), this.share(t, {}, ft({
                        closeSimulate: !0
                    }, e));
                }, t.setForwardKey = function(t) {
                    ur.share.setForwardKey(t);
                }, t.getShareType = function(t) {
                    try {
                        return ur.share.getType(t);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        return console.log("1"), 2;
                    }
                }, t;
            }();
            dt(No, "isFail", !1), dt(No, "onShowAd", !1), dt(No, "isTest", !1), t._RF.pop(), 
            t._RF.push({}, "7c8ad9V6FFKO69IOnsI7iJm", "AdManager", void 0);
            var zo, Go = e.ccclass, Uo = (e.property, Go("AdManager")(Fo = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e.playAd = function() {
                    var t = ut(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.abrupt("return", new Promise(function(t) {
                                    No.share(e, {
                                        success: function() {
                                            t(1);
                                            var e = Oo.I.level;
                                            e && (qr.I.dot("LevelAd", {
                                                ad: e
                                            }), qr.I.dot("LevelAd", {
                                                key: e
                                            }));
                                        }
                                    });
                                }));

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }(a)) || Fo);
            !function(t) {
                t.revive = "revive", t.gold = "gold", t.luckyGift = "luckyGift", t.luckyGoldFifty = "luckyGoldFifty", 
                t.luckyGiftDouble = "luckyGiftDouble", t.onlineGift = "onlineGift", t.onlineGiftDouble = "onlineGiftDouble", 
                t.onlineGiftRewardDouble = "onlineGiftRewardDouble", t.signDouble = "signDouble", 
                t.setting = "setting", t.wheelDouble = "wheelDouble", t.activityEnergy = "activityEnergy", 
                t.activityRevive = "activityRevive", t.missionRewardX2 = "missionRewardX2", t.missionRewardX3 = "missionRewardX3";
            }(zo || (zo = {})), t._RF.pop(), t._RF.push({}, "48021d6RlJEv5eK73UAaTiV", "UserConst", void 0);
            var Vo, Wo, Ho, jo, Yo, Ko, qo, Xo, Jo, Qo, Zo, $o = {
                SIGN_REWARDS: [ {
                    type: 0,
                    boosterType: 0,
                    cnt: 1
                }, {
                    type: 1,
                    cnt: 150
                }, {
                    type: 0,
                    boosterType: 1,
                    cnt: 1
                }, {
                    type: 0,
                    boosterType: 2,
                    cnt: 1
                }, {
                    type: 1,
                    cnt: 300
                }, {
                    type: 0,
                    boosterType: 3,
                    cnt: 1
                }, {
                    type: 0,
                    cnt: 2
                } ]
            }, ta = "CHANGE_GOLD", ea = "CHANGE_BOOSTER", ia = "REWARD_GOLD", na = "ONLINE_GIFT_RECEIVE", ra = "REWARD_POWER", oa = "CHANGE_POWER", aa = "ACTIVITY_CLICK";
            t._RF.pop(), t._RF.push({}, "39291SnRV1Gp54taOvdxKUO", "OnlineGift", void 0);
            var sa, la = e.ccclass, ua = e.property, ca = (Vo = la("OnlineGift"), Wo = ua(L), 
            Ho = ua(L), jo = ua(k), Yo = ua(I), Vo((Xo = _t((qo = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "desc", Xo, mt(e)), 
                    yt(mt(e), "time", Jo, mt(e)), yt(mt(e), "videoIcon", Qo, mt(e)), yt(mt(e), "hintAnim", Zo, mt(e)), 
                    dt(mt(e), "cd", void 0), dt(mt(e), "canReceive", void 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.checkUnlock = function() {
                    this.node.active || _d.I.curLevel >= 13 && (this.node.active = !0);
                }, i.start = function() {
                    Nn.I.on(na, this.onReceive, this), this.canReceive = !1, _d.I.onlineRecord(), this.hintAnim.stop(), 
                    Ve.AnimationRecover(this.hintAnim), this.schedule(this.updateTime.bind(this), .1), 
                    this.cd = 120, 0 == _d.I.onlineGiftCnt && (this.cd /= 2), this.updateTime();
                }, i.updateTime = function() {
                    var t = _d.I.onlineTime, e = this.cd - t / 1e3;
                    e > 0 ? (this.videoIcon.node.active = !1, this.time.node.parent.active = !0, this.desc.string = "在线奖励", 
                    this.time.string = Ve.getFormatBySecond(Math.round(e), 3)) : (this.stop(), this.hintAnim.play(), 
                    this.videoIcon.node.active = !0, this.desc.string = "领取奖励", this.time.node.parent.active = !1, 
                    this.canReceive = !0);
                }, i.btnReceive = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = this.canReceive, !t.t0) {
                                    t.next = 5;
                                    break;
                                }
                                return t.next = 4, Uo.playAd(zo.onlineGift);

                              case 4:
                                this.receive(1);

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.receive = function(t) {
                    void 0 === t && (t = 0), this.canReceive && (_d.I.onlineGiftCnt <= Je.ONLINE_GOLD_COUNTS && Nn.I.off(Qe, this.receive, this), 
                    0 == t ? ad.I.openPopwin(td.onlineGift) : ad.I.openPopwin(td.onlineGiftReward, 2));
                }, i.onReceive = function() {
                    this.start();
                }, i.stop = function() {
                    this.unscheduleAllCallbacks(), _d.I.onlineGiftCnt <= Je.ONLINE_GOLD_COUNTS && Nn.I.on(Qe, this.receive, this);
                }, e;
            }(a)).prototype, "desc", [ Wo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Jo = _t(qo.prototype, "time", [ Ho ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Qo = _t(qo.prototype, "videoIcon", [ jo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Zo = _t(qo.prototype, "hintAnim", [ Yo ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ko = qo)) || Ko);
            t._RF.pop(), t._RF.push({}, "90ef6Vevf5NBIqFwP4O5HxD", "GameDataManager", void 0);
            var ha = e.ccclass, da = (e.property, ha(sa = function() {
                function t() {
                    dt(this, "_mapDic", void 0), dt(this, "_maxMap", void 0), dt(this, "_bubbleDic", void 0), 
                    dt(this, "_mapActDic", void 0), dt(this, "_maxActMap", void 0), dt(this, "_bubbleActDic", void 0);
                }
                var e = t.prototype;
                return e.initMaps = function(t) {
                    var e = this;
                    this._mapDic = {}, this._maxMap = 0;
                    var i = null;
                    t.forEach(function(t) {
                        var n = t.id, r = t.data, o = new St();
                        o = ft({}, t), r || console.error("错误的地图配置，id:", n), o.data = [];
                        var a = r.split("|"), s = {};
                        a.forEach(function(t) {
                            var e = t.split(",");
                            e.forEach(function(t, i) {
                                t = Ve.splitSting2Int(t, "&"), e[i] = t, e[i][0] && (s.hasOwnProperty(e[i][0]) || (s[e[i][0]] = 0), 
                                s[e[i][0]]++);
                            }), o.data.push(e);
                        }), o.ball = s;
                        var l = 0, u = 0;
                        for (var c in s) parseInt(c) <= 6 ? l += s[c] : u += s[c];
                        o.typeCount = [ l, u ], e._mapDic.hasOwnProperty(n) && console.error("地图配置文件中有重复ID:", n), 
                        e._mapDic[n] = o;
                        for (var h = 0; h < (null === (d = o.array) || void 0 === d ? void 0 : d.length); ++h) {
                            var d;
                            if (o.array[h] > Je.BUBBLE_ERROR_MAX) {
                                i || (i = {}), i[n] = o.array[h];
                                break;
                            }
                        }
                        e._maxMap = Math.max(e._maxMap, parseInt(n));
                    }), i && console.error("地图配置文件中有异常颜色:", i);
                }, e.initBubbles = function(t) {
                    var e = this;
                    this._bubbleDic = {}, t.forEach(function(t) {
                        e._bubbleDic[t.id] = t;
                    });
                }, e.getMapData = function(t) {
                    if (t > this._maxMap) {
                        var e = this._maxMap - 50;
                        t = 50 + ((t - 50) % e || e);
                    }
                    for (var i = [], n = 0; n < 10; n++) {
                        var r = t + "";
                        n > 0 && (r += "_" + n);
                        var o = this._mapDic[r];
                        if (!o) break;
                        i.push(o);
                    }
                    var a = i[_d.I.seed % i.length];
                    return i.length > 1 && (a.test = !0), a;
                }, e.getBubbleData = function(t) {
                    return this._bubbleDic[t];
                }, e.initACTMaps = function(t) {
                    var e = this;
                    this._mapActDic = {}, this._maxActMap = 0;
                    var i = null;
                    t.forEach(function(t) {
                        var n = t.id, r = t.data, o = new St();
                        o = ft({}, t), r || console.error("错误的地图配置，id:", n), o.data = [];
                        var a = r.split("|"), s = {};
                        a.forEach(function(t) {
                            var e = t.split(",");
                            e.forEach(function(t, i) {
                                t = Ve.splitSting2Int(t, "&"), e[i] = t, e[i][0] && (s.hasOwnProperty(e[i][0]) || (s[e[i][0]] = 0), 
                                s[e[i][0]]++);
                            }), o.data.push(e);
                        }), o.ball = s;
                        var l = 0, u = 0;
                        for (var c in s) parseInt(c) <= 6 ? l += s[c] : u += s[c];
                        o.typeCount = [ l, u ], e._mapActDic.hasOwnProperty(n) && console.error("地图配置文件中有重复ID:", n), 
                        e._mapActDic[n] = o;
                        for (var h = 0; h < (null === (d = o.array) || void 0 === d ? void 0 : d.length); ++h) {
                            var d;
                            if (o.array[h] > Je.BUBBLE_ERROR_MAX) {
                                i || (i = {}), i[n] = o.array[h];
                                break;
                            }
                        }
                        e._maxActMap = Math.max(e._maxActMap, parseInt(n));
                    }), i && console.error("地图配置文件中有异常颜色:", i);
                }, e.initActBubbles = function(t) {
                    var e = this;
                    this._bubbleActDic = {}, t.forEach(function(t) {
                        e._bubbleActDic[t.id] = t;
                    });
                }, e.getActMapData = function(t) {
                    return this._mapActDic[t];
                }, e.getActBubbleData = function(t) {
                    return this._bubbleActDic[t];
                }, ht(t, [ {
                    key: "actMapMaxID",
                    get: function() {
                        return this._maxActMap;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return Lo.getInstance(t);
                    }
                } ]), t;
            }()) || sa);
            t._RF.pop(), t._RF.push({}, "9a388O0TfVP/6sh03MgM8VB", "ConfigManager", void 0);
            var fa = function() {
                function t() {
                    dt(this, "bInit", !1), dt(this, "TurnTableData", new Array()), dt(this, "ActivityData", new Array()), 
                    dt(this, "Mission", new Array()), dt(this, "MissionKind", new Array());
                }
                var e = t.prototype;
                return e.loadConfig = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.bInit) {
                                    t.next = 13;
                                    break;
                                }
                                return t.next = 3, Ia("TurnTableData", ga);

                              case 3:
                                return this.TurnTableData = t.sent, t.next = 6, Ia("Mission", ya);

                              case 6:
                                return this.Mission = t.sent, t.next = 9, Ia("MissionKind", _a);

                              case 9:
                                return this.MissionKind = t.sent, this.bInit = !0, console.log("配置加载完成"), t.abrupt("return", new Promise(function(t, e) {
                                    t(null);
                                }));

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.loadActivityConfig = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, mn.loadRes("data/" + e);

                              case 2:
                                return i = t.sent, da.I.initACTMaps(i.json), t.next = 6, Ia("d_" + e, ma);

                              case 6:
                                this.ActivityData = t.sent;

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.getTurnTableRewards = function(t) {
                    return t >= this.TurnTableData.length && (t = this.TurnTableData.length - 1), this.TurnTableData[t];
                }, e.getActivityBox = function(t) {
                    var e = Math.floor(t / 5);
                    return e < 1 && (e = 1), e > this.ActivityData.length && (e = this.ActivityData.length), 
                    this.ActivityData[e - 1];
                }, e.getActivityGuideLV = function() {
                    return this.ActivityData.length <= 0 ? [] : [].concat(this.ActivityData[0].level || []);
                }, e.getMissionByID = function(t) {
                    return t < 1 && (t = 1), t > this.Mission.length && (t = this.Mission.length), this.Mission[t - 1];
                }, e.getMissionKindByDay = function(t) {
                    return this.MissionKind[t - 1];
                }, e.getMissionKindeToday = function() {
                    var t = new Date().getDay();
                    return 0 == t && (t = 7), this.getMissionKindByDay(t);
                }, e.readConfigByString = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.abrupt("return", new Promise(function(t, n) {
                                    for (var r = e.split("\n"), o = r[1].split(","), a = [], s = 0; s < o.length; ++s) {
                                        var l = o[s].split(":");
                                        2 == l.length ? a.push({
                                            key: l[0],
                                            value: l[1]
                                        }) : a.push({
                                            key: "key" + s,
                                            value: "string"
                                        });
                                    }
                                    var u = [];
                                    for (s = 2; s < r.length; ++s) if ("" != r[s]) {
                                        for (var c = r[s].split(","), h = new i(), d = 0; d < c.length; ++d) {
                                            var f = c[d];
                                            switch (a[d], a[d].value) {
                                              case "number":
                                                f = Number(f);
                                                break;

                                              case "string":
                                                f = f;
                                                break;

                                              case "boolean":
                                                f = 1 == Number(f);
                                                break;

                                              case "table":
                                                f = f.split("|");
                                                break;

                                              case "inttable":
                                                f = f ? f.split("|") : [];
                                                for (var p = 0; p < f.length; ++p) f[p] = Number(f[p]);
                                                break;

                                              case "group":
                                                if (f) {
                                                    f = f.split("*");
                                                    var v = new va();
                                                    v.id = Number(f[0]), v.num = Number(f[1]), f = v;
                                                } else f = null;
                                                break;

                                              case "grouplist":
                                                if (f) {
                                                    var b = [];
                                                    f.split("|").forEach(function(t, e) {
                                                        var i = t.split("*"), n = new va();
                                                        n.id = Number(i[0]), n.num = Number(i[1]), b.push(n);
                                                    }), f = b;
                                                } else f = [];
                                                break;

                                              case "groupweight":
                                                if (f) {
                                                    var g = [];
                                                    f.split(";").forEach(function(t, e) {
                                                        var i = t.split("|"), n = new ba();
                                                        n.id = Number(i[0]), n.num = Number(i[1]), n.weight = Number(i[2]), g.push(n);
                                                    }), f = g;
                                                } else f = [];
                                                break;

                                              case "intlist":
                                                if (f) {
                                                    var m = [];
                                                    f.split(";").forEach(function(t, e) {
                                                        for (var i = [], n = t.split("|"), r = 0; r < n.length; ++r) i.push(Number(n[r]));
                                                        m.push(i);
                                                    }), f = m;
                                                } else f = [];
                                            }
                                            h[a[d].key] = f;
                                        }
                                        u.push(h);
                                    }
                                    t(u);
                                }));

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t());
                    }
                } ]), t;
            }();
            dt(fa, "_instance", void 0);
            var pa, va = function() {
                dt(this, "id", void 0), dt(this, "num", void 0);
            }, ba = function() {
                dt(this, "id", void 0), dt(this, "num", void 0), dt(this, "weight", void 0);
            }, ga = function() {
                dt(this, "id", void 0), dt(this, "reward", void 0), dt(this, "stars", void 0);
            }, ma = function() {
                dt(this, "id", void 0), dt(this, "reward", void 0), dt(this, "level", void 0);
            }, ya = function() {
                dt(this, "id", void 0), dt(this, "ref", void 0), dt(this, "target", void 0), dt(this, "reward", void 0);
            }, _a = function() {
                dt(this, "id", void 0), dt(this, "detail", void 0), dt(this, "reward", void 0);
            }, Ia = function() {
                var t = ut(n.default.mark(function t(e, i) {
                    return n.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.abrupt("return", new Promise(function(t, n) {
                                E.getBundle("resources").load("data/" + e, D, function(e, r) {
                                    if (e) return console.log(e), void n();
                                    for (var o = r.text.split("\n"), a = o[1].split(","), s = [], l = 0; l < a.length; ++l) {
                                        var u = a[l].split(":");
                                        2 == u.length ? s.push({
                                            key: u[0],
                                            value: u[1]
                                        }) : s.push({
                                            key: "key" + l,
                                            value: "string"
                                        });
                                    }
                                    var c = [];
                                    for (l = 2; l < o.length; ++l) if ("" != o[l]) {
                                        for (var h = o[l].split(","), d = new i(), f = 0; f < h.length; ++f) {
                                            var p = h[f];
                                            switch (s[f], s[f].value) {
                                              case "number":
                                                p = Number(p);
                                                break;

                                              case "string":
                                                p = p;
                                                break;

                                              case "boolean":
                                                p = 1 == Number(p);
                                                break;

                                              case "table":
                                                p = p.split("|");
                                                break;

                                              case "inttable":
                                                p = p ? p.split("|") : [];
                                                for (var v = 0; v < p.length; ++v) p[v] = Number(p[v]);
                                                break;

                                              case "group":
                                                if (p) {
                                                    p = p.split("|");
                                                    var b = new va();
                                                    b.id = Number(p[0]), b.num = Number(p[1]), p = b;
                                                } else p = null;
                                                break;

                                              case "grouplist":
                                                if (p) {
                                                    var g = [];
                                                    p.split(";").forEach(function(t, e) {
                                                        var i = t.split("|"), n = new va();
                                                        n.id = Number(i[0]), n.num = Number(i[1]), g.push(n);
                                                    }), p = g;
                                                } else p = [];
                                                break;

                                              case "groupweight":
                                                if (p) {
                                                    var m = [];
                                                    p.split(";").forEach(function(t, e) {
                                                        var i = t.split("|"), n = new ba();
                                                        n.id = Number(i[0]), n.num = Number(i[1]), n.weight = Number(i[2]), m.push(n);
                                                    }), p = m;
                                                } else p = [];
                                                break;

                                              case "intlist":
                                                if (p) {
                                                    var y = [];
                                                    p.split(";").forEach(function(t, e) {
                                                        for (var i = [], n = t.split("|"), r = 0; r < n.length; ++r) i.push(Number(n[r]));
                                                        y.push(i);
                                                    }), p = y;
                                                } else p = [];
                                            }
                                            d[s[f].key] = p;
                                        }
                                        c.push(d);
                                    }
                                    t(c);
                                });
                            }));

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }));
                return function(e, i) {
                    return t.apply(this, arguments);
                };
            }();
            t._RF.pop(), t._RF.push({}, "6dd2dgP/7VEE7jJTLQrvGFC", "GuideManager", void 0);
            var wa, Sa = e.ccclass, Ca = (e.property, Sa("GuideManager")(pa = function() {
                function t() {
                    dt(this, "_scene", void 0), dt(this, "_shootMin", void 0), dt(this, "_shootMax", void 0), 
                    dt(this, "_shootCur", void 0), dt(this, "_shootAdd", void 0), dt(this, "_scheduleFun", void 0), 
                    dt(this, "_handType", void 0), dt(this, "_handV", void 0), dt(this, "guideArr", []), 
                    dt(this, "stopGuide", void 0), dt(this, "stopWaitArrow", void 0), dt(this, "_guideLevel", void 0), 
                    dt(this, "_guideStep", void 0);
                }
                var e = t.prototype;
                return e.setScene = function(t) {
                    this._scene = t;
                }, e.stop = function() {
                    this.cancelEmitShooterRange(), this.stopGuide && this.stopGuide.cancel(), this.stopWaitArrow && this.stopWaitArrow.cancel(), 
                    this.stopGuide = this.stopWaitArrow = null, ad.I.closePopwin(td.guide);
                }, e.checkGuide = function(t) {
                    if (this._guideLevel = t, hn.indexOf(t) >= 0 && !_d.I.checkHasGuide(t)) this.guideStep = 0, 
                    this.stopGuide = Ve.runWithCancel(this.guideLevel.bind(this), t); else {
                        if (this.guideArr.indexOf(t) >= 0) return;
                        for (var e = Je.BUBBLE_CONF, i = Je.ACTIVITY_BUBBLE_CONF, n = fa.I.getActivityGuideLV(), r = 0; r < e.length; r++) if (t > Je.ACTIVITY_ID_START) {
                            if (n[r] == t && this.guideArr.indexOf(e[r][0]) < 0) {
                                var o;
                                this.guideStep = 0, (o = ad.I).openPopwin.apply(o, [ td.bubbleUnlock ].concat(i[r])), 
                                this.guideStep++;
                                break;
                            }
                        } else if (e[r][0] == t) {
                            var a;
                            this.guideStep = 0, (a = ad.I).openPopwin.apply(a, [ td.bubbleUnlock ].concat(e[r])), 
                            this.guideArr.push(t), this.guideStep++;
                            break;
                        }
                    }
                }, e.guideLevel = n.default.mark(function t(e) {
                    return n.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            t.t0 = e, t.next = 1 === t.t0 ? 3 : 2 === t.t0 ? 14 : 3 === t.t0 ? 30 : 5 === t.t0 ? 36 : 8 === t.t0 ? 55 : 12 === t.t0 ? 69 : 4 === t.t0 ? 83 : 92;
                            break;

                          case 3:
                            return this._handType = 2, this._handV = 230, this.emitShooterRange(-50, 50, 0, -.5), 
                            Nn.I.emit(ji, "左右滑动，发射泡泡"), this._scene.showColorArea(), t.next = 10, Nn.I.waitEvent(di);

                          case 10:
                            return this.guideStep++, this.cancelEmitShooterRange(), Nn.I.emit(Yi), t.abrupt("break", 92);

                          case 14:
                            return t.next = 16, Nn.I.waitEvent(Ji);

                          case 16:
                            return this.guideStep++, this._scene.showBoosterArrow(Ke.BOMB), ad.I.openPopwin(td.guide, "一次掉落9个以上的泡泡就可获得炸弹！", 320), 
                            t.next = 21, Nn.I.waitEvent(wi);

                          case 21:
                            return ad.I.closePopwin(td.guide), this._scene.hideBootserArrow(), this.guideStep++, 
                            ad.I.openPopwin(td.guide, "炸弹可以炸掉击中范围内所有泡泡！", 320), t.next = 27, Nn.I.waitEvent(bi);

                          case 27:
                            return this.guideStep++, this.stopWaitArrow = Ve.runWithCancel(this.waitToShowArrow.bind(this), Ke.BOMB, Ji, wi), 
                            t.abrupt("break", 92);

                          case 30:
                            return t.next = 32, ad.I.openPopwin(td.guide, "点击发射台可以交换泡泡！", 320, {
                                size: 180,
                                pos: this._scene.shooter.node.worldPosition,
                                arrow: !0
                            });

                          case 32:
                            return t.next = 34, Nn.I.waitEvent(mi);

                          case 34:
                            return this.guideStep++, t.abrupt("break", 92);

                          case 36:
                            return t.next = 38, Nn.I.waitEvent(ci);

                          case 38:
                            return ad.I.openPopwin(td.guide, "连续7次消除泡泡就可获得火箭！", 320), this.guideStep++, t.next = 42, 
                            Nn.I.waitEvent(Qi);

                          case 42:
                            return this.guideStep++, this._scene.showBoosterArrow(Ke.FIREBALL), t.next = 46, 
                            Nn.I.waitEvent(wi);

                          case 46:
                            return this.guideStep++, this._scene.hideBootserArrow(), t.next = 50, ad.I.openPopwin(td.guide, "火箭可以消除路径上的所有泡泡！", 320);

                          case 50:
                            return t.next = 52, Nn.I.waitEvent(bi);

                          case 52:
                            return this.guideStep++, this.stopWaitArrow = Ve.runWithCancel(this.waitToShowArrow.bind(this), Ke.FIREBALL, Qi, wi), 
                            t.abrupt("break", 92);

                          case 55:
                            return t.next = 57, ad.I.openPopwin(td.guide, "真棒，闪电道具已解锁，本关免费使用！", 320);

                          case 57:
                            return this._scene.showBoosterArrow(Ke.LIGHTING), t.next = 60, Nn.I.waitEventValue(wi, Ke.LIGHTING);

                          case 60:
                            return this._scene.hideBootserArrow(), this.guideStep++, t.next = 64, ad.I.openPopwin(td.guide, "闪电可以消除一排泡泡！", 320);

                          case 64:
                            return t.next = 66, Nn.I.waitEvent(bi);

                          case 66:
                            return this.guideStep++, this.stopWaitArrow = Ve.runWithCancel(this.waitToShowArrow.bind(this), Ke.LIGHTING, null, wi), 
                            t.abrupt("break", 92);

                          case 69:
                            return t.next = 71, ad.I.openPopwin(td.guide, "真棒，彩虹道具已解锁，本关免费使用！", 320);

                          case 71:
                            return this._scene.showBoosterArrow(Ke.RAINBOW), t.next = 74, Nn.I.waitEventValue(wi, Ke.RAINBOW);

                          case 74:
                            return this._scene.hideBootserArrow(), this.guideStep++, t.next = 78, ad.I.openPopwin(td.guide, "彩虹会消除其碰到颜色的所有泡泡！", 320);

                          case 78:
                            return t.next = 80, Nn.I.waitEvent(bi);

                          case 80:
                            return this.guideStep++, this.stopWaitArrow = Ve.runWithCancel(this.waitToShowArrow.bind(this), Ke.RAINBOW, null, wi), 
                            t.abrupt("break", 92);

                          case 83:
                            return this._handType = 1, this._handV = -200, this.emitShooterRange(-48, -29, -48, .2), 
                            Nn.I.emit(ji, "通过墙壁反弹泡泡"), t.next = 89, Nn.I.waitEvent(di);

                          case 89:
                            this.guideStep++, this.cancelEmitShooterRange(), Nn.I.emit(Yi);

                          case 92:
                            this.guideArr.push(e);

                          case 93:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }), e.waitToShowArrow = n.default.mark(function t(e, i, r) {
                    return n.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!i) {
                                t.next = 6;
                                break;
                            }
                            return t.next = 3, Nn.I.waitEvent(i);

                          case 3:
                            this.guideStep++, t.next = 8;
                            break;

                          case 6:
                            return t.next = 8, Nn.I.waitEvent(Qe);

                          case 8:
                            return this._scene.showBoosterArrow(e), t.next = 11, Nn.I.waitEventValue(r, e);

                          case 11:
                            this._scene.hideBootserArrow(), this.guideStep++, this.stopWaitArrow = Ve.runWithCancel(this.waitToShowArrow.bind(this), e, i, r);

                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }), e.emitShooterRange = function(t, e, i, n) {
                    this._shootMin = t, this._shootMax = e, this._shootCur = i, this._shootAdd = -n, 
                    this._scheduleFun = this.updateShooterRange.bind(this), Oe.I.schedule(this._scheduleFun);
                }, e.cancelEmitShooterRange = function() {
                    Oe.I.unschedule(this._scheduleFun);
                }, e.updateShooterRange = function() {
                    this._shootCur += this._shootAdd, this._shootAdd > 0 ? this._shootCur >= this._shootMax && (this._shootCur = this._shootMax, 
                    this._shootAdd *= -1) : this._shootCur <= this._shootMin && (this._shootCur = this._shootMin, 
                    this._shootAdd *= -1), Nn.I.emit(fi, this._shootCur, this._handType, this._handV, !0);
                }, ht(t, [ {
                    key: "guideStep",
                    get: function() {
                        return this._guideStep;
                    },
                    set: function(t) {
                        this._guideStep = t, qr.I.dot("Guide", {
                            step: this._guideLevel + "_" + t
                        }), O(this._guideLevel + "_" + t);
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return Lo.getInstance(t);
                    }
                } ]), t;
            }()) || pa);
            t._RF.pop(), t._RF.push({}, "4d348A99nBImbyWZ0mLxbE7", "MissionManager", void 0);
            var Aa, Ta, ka, xa, Ea = e.ccclass, Ba = (e.property, Ea(wa = function() {
                function t() {
                    dt(this, "tasks", []);
                }
                var e = t.prototype;
                return e.loadMission = function() {
                    if (!(_d.I.curLevel < Je.MISSION_OPEN_LEVEL)) if (0 == _d.I.MissionTimer) this.initDailyTask(); else {
                        var t = fa.I.getMissionKindByDay(_d.I.MissionDay);
                        this.tasks = [];
                        for (var e = 0; e < t.detail.length; ++e) {
                            var i = new Pa();
                            i.id = t.detail[e], 16 == t.detail[e] ? i.type = Aa.coinUse : i.type = t.detail[e], 
                            i.counts = _d.I.MissionCounts[e], this.tasks.push(i);
                        }
                        _d.I.MissionTimer = new Date().getTime(), console.log("加载任务：", this.tasks);
                    }
                }, e.initDailyTask = function() {
                    if (-1 == _d.I.MissionDay) _d.I.MissionDay = 8; else {
                        var t = new Date().getDay();
                        0 == t && (t = 7), _d.I.MissionDay = t;
                    }
                    var e = fa.I.getMissionKindByDay(_d.I.MissionDay);
                    this.tasks = [], _d.I.MissionFlags = [];
                    for (var i = 0; i < e.detail.length; ++i) {
                        var n = new Pa();
                        n.id = e.detail[i], 16 == e.detail[i] ? n.type = Aa.coinUse : n.type = e.detail[i], 
                        this.tasks.push(n), _d.I.MissionFlags.push(0);
                    }
                    _d.I.setMissionCounts(this.tasks), _d.I.MissionTimer = new Date().getTime(), _d.I.MissionBoxFlag = 0, 
                    console.log("重置任务：", _d.I.MissionDay, this.tasks);
                }, e.addDailyTaskCounts = function(t, e) {
                    if (void 0 === e && (e = 1), !(this.tasks.length <= 0)) for (var i = 0; i < this.tasks.length; ++i) if (this.tasks[i].type == t) {
                        this.tasks[i].counts += e, _d.I.setMissionCounts(this.tasks);
                        break;
                    }
                }, e.getMissionCounts = function(t) {
                    if (t == Aa.level) return _d.I.curLevel;
                    16 == t && (t = 15);
                    for (var e = 0; e < this.tasks.length; ++e) if (this.tasks[e].type == t) return t == Aa.online ? Math.floor(this.tasks[e].counts / 60) : this.tasks[e].counts;
                    return 0;
                }, e.getMissionReward = function(t, e) {
                    if (void 0 === e && (e = 1), !(t >= this.tasks.length || _d.I.MissionFlags[t] > 0)) {
                        var i = this.tasks[t].id, n = fa.I.getMissionByID(i);
                        n && (n.reward.id > 0 ? _d.I.addBooster(n.reward.id - 1, n.reward.num * e) : _d.I.addGold(n.reward.num * e)), 
                        _d.I.setMissionFlag(t);
                    }
                }, e.clearMission = function() {
                    this.tasks = [];
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return Lo.getInstance(t);
                    }
                } ]), t;
            }()) || wa), Pa = function() {
                dt(this, "id", 0), dt(this, "type", Aa.default), dt(this, "counts", 0);
            };
            !function(t) {
                t[t.default = 0] = "default", t[t.level = 1] = "level", t[t.game = 2] = "game", 
                t[t.online = 3] = "online", t[t.propBomb = 4] = "propBomb", t[t.propLighting = 5] = "propLighting", 
                t[t.propRainbow = 6] = "propRainbow", t[t.propFireball = 7] = "propFireball", t[t.propAll = 8] = "propAll", 
                t[t.ballRed = 9] = "ballRed", t[t.ballYellow = 10] = "ballYellow", t[t.ballBlue = 11] = "ballBlue", 
                t[t.ballGreen = 12] = "ballGreen", t[t.ballPurple = 13] = "ballPurple", t[t.ballCyan = 14] = "ballCyan", 
                t[t.coinUse = 15] = "coinUse";
            }(Aa || (Aa = {})), t._RF.pop(), t._RF.push({}, "4f0b0ujMuFIkZvHf4wC/OgH", "PhyManager", void 0);
            var Ra, La, Da, Oa = e.ccclass, Ma = (e.property, Oa(Ta = (0, e.menu)("game/PhyManager")((xa = ka = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "_moveLen", void 0), 
                    dt(mt(e), "_movePoints", void 0), dt(mt(e), "_shootTarget", void 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.run = function() {}, i.stop = function() {}, i.clearLines = function() {}, 
                i.getMoveLine = function(t, e, i) {
                    return void 0 === i && (i = !0), this._moveLen = 0, this._movePoints = [], this.drawRayCast(t, e, i), 
                    this._movePoints;
                }, i.drawRayCast = function(t, e, i) {
                    var n = Je.SHOOT_LINE_MAX - this._moveLen;
                    if (!(n <= 0)) {
                        var r = Ve.addV2(t, Ve.mulV2(e, n)), o = Yr.I.raycast(t, r);
                        if (o) {
                            var a = s(o.x, o.y), l = o.collider.group;
                            this._movePoints.push(a);
                            var u = Ve.subV2(a, t).length();
                            switch (this._moveLen += u, l) {
                              case Ar.bubble:
                              case Ar.top:
                                return void (this._shootTarget = o.collider.node);

                              case Ar.wall:
                                var c = o.normal, h = e, d = Ve.subV2(h, Ve.mulV2(c, 2 * h.dot(c)));
                                i && this.drawRayCast(a, d, i);
                            }
                        }
                    }
                }, ht(e, [ {
                    key: "shootTarget",
                    get: function() {
                        return this._shootTarget;
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new e());
                    }
                } ]), e;
            }(a), dt(ka, "_instance", void 0), Ta = xa)) || Ta) || Ta);
            t._RF.pop(), t._RF.push({}, "82e99CcxaxBBYh2QcwjHb3k", "TouchManager", void 0);
            var Fa, Na = e.ccclass, za = (e.property, Na(Ra = (0, e.menu)("game/TouchManager")((Da = La = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "_curTouchId", void 0), 
                    dt(mt(e), "isEnd", !1), dt(mt(e), "_lastMoveTime", 0), e;
                }
                pt(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    e._instance ? O("重复的TouchManager") : e._instance = this;
                }, n.run = function(t) {
                    if (void 0 === t && (t = !1), !this.isEnd || t) {
                        this.isEnd = !1;
                        var e = u("Canvas");
                        e.on(i.EventType.TOUCH_START, this.touchStart, this), e.on(i.EventType.TOUCH_MOVE, this.touchMove, this), 
                        e.on(i.EventType.TOUCH_END, this.touchEnd, this), e.on(i.EventType.TOUCH_CANCEL, this.touchEnd, this), 
                        Nn.I.emit(Hi), Nn.I.on(fn, this.cancelTouch, this), this._curTouchId = null;
                    }
                }, n.stop = function(t) {
                    if (void 0 === t && (t = !1), !this.isEnd) {
                        this.isEnd = t;
                        var e = u("Canvas");
                        e.off(i.EventType.TOUCH_START, this.touchStart, this), e.off(i.EventType.TOUCH_MOVE, this.touchMove, this), 
                        e.off(i.EventType.TOUCH_END, this.touchEnd, this), e.off(i.EventType.TOUCH_CANCEL, this.touchEnd, this), 
                        Nn.I.emit(Wi), Nn.I.off(fn, this.cancelTouch, this);
                    }
                }, n.touchStart = function(t) {
                    var e = t.getID();
                    null != this._curTouchId && e != this._curTouchId || (this._curTouchId = e, this._lastMoveTime = Date.now(), 
                    Nn.I.emit(di, t.getUILocation()));
                }, n.touchMove = function(t) {
                    if (t instanceof M) {
                        var e = t.getID();
                        if (null != this._curTouchId && e != this._curTouchId) return;
                    }
                    var i = t instanceof M ? t.getUILocation() : t;
                    this._lastMoveTime = Date.now(), Nn.I.emit(di, i);
                }, n.touchEnd = function(t) {
                    var e = t.getID();
                    null != this._curTouchId && e != this._curTouchId || (this._curTouchId = null, Nn.I.emit(vi, t.getUILocation()));
                }, n.cancelTouch = function() {
                    this._curTouchId = null;
                    var t = s(0, -1e4);
                    Nn.I.emit(di, t), Nn.I.emit(vi, t);
                }, ht(e, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance;
                    }
                } ]), e;
            }(a), dt(La, "_instance", void 0), Ra = Da)) || Ra) || Ra);
            t._RF.pop(), t._RF.push({}, "bbb0f+8BKpL254U73n0X9vI", "Tree", void 0);
            var Ga, Ua = (0, e.ccclass)("Tree")(Fa = function() {
                function t() {
                    dt(this, "root", void 0), dt(this, "leafs", void 0);
                }
                var e = t.prototype;
                return e.init = function(t) {
                    this.root = t;
                }, e.findAllLeaf = function(t) {
                    var e = this;
                    return t || (t = this.root, this.leafs = []), t.children.length ? t.children.forEach(function(t) {
                        e.findAllLeaf(t);
                    }) : this.leafs.push(t), this.leafs;
                }, e.foreach = function(t, e) {
                    var i = this;
                    e || (e = this.root), t(e), e.children.forEach(function(e) {
                        i.foreach(t, e);
                    });
                }, t;
            }()) || Fa;
            t._RF.pop(), t._RF.push({}, "a6d65ldZXdOBrNTRzDAPXE5", "TreeNode", void 0);
            var Va = e.ccclass, Wa = (e.property, Va("TreeNode")(Ga = function() {
                function t() {
                    dt(this, "content", void 0), dt(this, "parent", void 0), dt(this, "children", void 0);
                }
                var e = t.prototype;
                return e.init = function() {
                    this.children = [];
                }, e.addChild = function(t) {
                    this.children.push(t), t.parent = this;
                }, t;
            }()) || Ga);
            t._RF.pop(), t._RF.push({}, "074bczHIlxIkr55ffaUZ70X", "BubbleData", void 0);
            var Ha, ja, Ya, Ka, qa = e.ccclass;
            e.property, qa(function() {
                dt(this, "id", void 0), dt(this, "type", void 0), dt(this, "color", void 0), dt(this, "buff", void 0), 
                dt(this, "prefab", void 0), dt(this, "trans", void 0);
            }), function(t) {
                t[t.NORMAL = 1] = "NORMAL", t[t.METAL = 2] = "METAL", t[t.DIAMOND = 3] = "DIAMOND", 
                t[t.BHOLE = 4] = "BHOLE", t[t.SNIPER = 5] = "SNIPER";
            }(Ha || (Ha = {})), function(t) {
                t[t.CHAIN = 1] = "CHAIN", t[t.DCHAIN = 2] = "DCHAIN", t[t.MUCUS = 3] = "MUCUS", 
                t[t.WATER = 4] = "WATER", t[t.ICE = 5] = "ICE";
            }(ja || (ja = {})), function(t) {
                t[t.RED = 1] = "RED", t[t.YELLOW = 2] = "YELLOW", t[t.BLUE = 4] = "BLUE", t[t.GREEN = 8] = "GREEN", 
                t[t.PURPLE = 16] = "PURPLE", t[t.COLORFUL = 31] = "COLORFUL";
            }(Ya || (Ya = {})), t._RF.pop(), t._RF.push({}, "ab47cdz5EFMC5rCp1PFqL2c", "BubbleModel", void 0);
            var Xa, Ja = e.ccclass, Qa = (e.property, Ja(Ka = function() {
                function t() {
                    dt(this, "_id", void 0), dt(this, "_data", void 0), dt(this, "_buff", void 0), dt(this, "_addColor", void 0), 
                    dt(this, "_pos", s()), dt(this, "_growTimes", void 0), dt(this, "checkDis", void 0), 
                    dt(this, "delayTime", void 0), dt(this, "giftType", void 0);
                }
                var e = t.prototype;
                return e.init = function(t, e) {
                    this._id = t, this._data = e, this._addColor = null, this._buff = null, this._growTimes = 0, 
                    this.checkDis = 0, this.delayTime = 0, this.giftType = 0;
                }, e.setBuff = function(t) {
                    this._buff = t;
                }, e.setAddColor = function(t) {
                    this._addColor = t;
                }, e.setPos = function(t, e) {
                    this._pos.x = t, this._pos.y = e;
                }, e.hit = function(t, e) {
                    if (void 0 === t && (t = 1), this._buff) {
                        switch (this._buff.buff) {
                          case ja.DCHAIN:
                            this.setBuff(da.I.getBubbleData(this.buff.trans)), Nn.I.emit(ii, this, e);
                            break;

                          case ja.ICE:
                            if (t <= 1) return !1;

                          default:
                            this.setBuff(null), Nn.I.emit(ei, this, e);
                        }
                        return !1;
                    }
                    return !0;
                }, e.checkHit = function() {
                    return this.data.type != Ha.DIAMOND;
                }, e.round = function(t, e) {}, ht(t, [ {
                    key: "x",
                    get: function() {
                        return this._pos.x;
                    }
                }, {
                    key: "y",
                    get: function() {
                        return this._pos.y;
                    }
                }, {
                    key: "id",
                    get: function() {
                        return this._id;
                    }
                }, {
                    key: "data",
                    get: function() {
                        return this._data;
                    }
                }, {
                    key: "color",
                    get: function() {
                        return this.data.color ? this.data.color | (this._addColor ? this._addColor.color : 0) : 0;
                    }
                }, {
                    key: "addColor",
                    get: function() {
                        return this._addColor;
                    }
                }, {
                    key: "buff",
                    get: function() {
                        return this._buff;
                    }
                } ]), t;
            }()) || Ka);
            t._RF.pop(), t._RF.push({}, "3420eBNOS5DtoAhiUSNyDXW", "GameModel", void 0);
            var Za, $a = e.ccclass, ts = (e.property, $a(Xa = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "_levelId", void 0), 
                    dt(mt(e), "_mapData", void 0), dt(mt(e), "_bubbles", void 0), dt(mt(e), "_curBubbleIdx", void 0), 
                    dt(mt(e), "_curShootBubble", void 0), dt(mt(e), "_nextShootBubble", void 0), dt(mt(e), "maxRow", void 0), 
                    dt(mt(e), "_bubbleCheckArr", void 0), dt(mt(e), "_leftNormal", void 0), dt(mt(e), "_shootBubbleCnt", void 0), 
                    dt(mt(e), "_defaultColor", void 0), dt(mt(e), "_boosterToClear", void 0), dt(mt(e), "_toShowColorArea", void 0), 
                    dt(mt(e), "_shootColorList", void 0), dt(mt(e), "_refreshColorList", void 0), dt(mt(e), "_missCnt", 0), 
                    dt(mt(e), "_startTime", void 0), dt(mt(e), "_startBubbleCnt", void 0), dt(mt(e), "_isFirst", !0), 
                    dt(mt(e), "_roundClearBubbles", void 0), dt(mt(e), "_growTrees", void 0), dt(mt(e), "isActivity", !1), 
                    dt(mt(e), "clearRow", 0), dt(mt(e), "_ida", 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.init = function(t, e) {
                    if (void 0 === e && (e = !1), this.isActivity = e, this.unscheduleAllCallbacks(), 
                    this._levelId = t, this._mapData = this.isActivity ? da.I.getActMapData(t) : da.I.getMapData(t), 
                    this._mapData || (console.error("未找到活动关卡:", t), this._mapData = da.I.getMapData(t)), 
                    this._toShowColorArea = !1, this.initBubbles(this._mapData), Nn.I.emit(Ai, this._mapData.rec), 
                    Oo.I.level = this._mapData.id, this._mapData.test) {
                        var i = {};
                        i[t] = this._mapData.id + "_start", qr.I.dot("Test", i), O("Test", i);
                    }
                }, i.initBubbles = function(t) {
                    var e = this, i = t.data;
                    this._leftNormal = 0, this._bubbles = [], this._roundClearBubbles = [], this._bubbleCheckArr = [], 
                    this._shootColorList = [], this._refreshColorList = [], this._growTrees = null, 
                    this._defaultColor = 0, this._missCnt = 0, this._startTime = Date.now(), this.maxRow = i.length, 
                    this.clearRow = 0, i.length > Je.BUBBLE_ROW_MAX && (this._isFirst = !1), Nn.I.emit(si, i.length);
                    for (var n = 0; n < i.length; n++) for (var r = i[n], o = 0; o < r.length; o++) {
                        var a = r[o];
                        this.createBubble(a, o, n).then(function(t) {
                            t && (e._defaultColor |= t.color);
                        });
                    }
                    var s = parseInt(t.id);
                    if (s % 5 == 0) {
                        for (var l = 0, u = 0; u < 5; ++u) {
                            var c = this.isActivity ? da.I.getActMapData(s) : da.I.getMapData(s);
                            c.typeCount[0] > l && (l = c.typeCount[0]);
                        }
                        Pn.I.limitPool("normal", l);
                    }
                    this.initShootBubble(), this.checkLuckyGift(), this.checkHardAnim(t), Nn.I.emit(ki, this._leftNormal), 
                    this._startBubbleCnt = this._leftNormal;
                }, i.checkLuckyGift = function() {
                    var t = br.getParamsInt("LuckyLevel", 3), e = br.getParamsInt("LuckyLevelCD", 3);
                    if (t > 0 && _d.I.curLevel >= t && _d.I.luckyPassLevel >= e) {
                        var i = [];
                        this._bubbleCheckArr.forEach(function(t) {
                            t.data.type == Ha.NORMAL && i.push(t);
                        });
                        var n = Ve.randOneList(i), r = _d.I.nextLucktType;
                        n.giftType = r || Ve.randomInt(1, 2);
                    }
                }, i.checkHardAnim = function(t) {
                    var e = t.hard;
                    _d.I.lastTimeLevel >= this.levelId ? 1 == e && Nn.I.emit(Xi, !0) : (this.levelId >= _d.I.curLevel && (_d.I.lastTimeLevel = this.levelId), 
                    1 == e && Nn.I.emit(Xi, !1));
                }, i.initGrowTree = function() {
                    var t = this._bubbles;
                    this._growTrees = [];
                    for (var e = 0; e < t.length; e++) for (var i = t[e], n = 0; n < i.length; n++) {
                        var r = i[n];
                        if (r && r.buff && (r.buff.buff == ja.ICE || r.buff.buff == ja.WATER)) {
                            var o = new Ua(), a = new Wa();
                            a.init(), a.content = r, o.init(a), this._growTrees.push(o);
                        }
                    }
                }, i.initShootBubble = function() {
                    this._curBubbleIdx = 0;
                    var t, e, i = this.getShootColorArr(), n = this._mapData.array;
                    if (n) {
                        var r = n[this._curBubbleIdx];
                        r > Je.BUBBLE_ERROR_MAX && (r = 0);
                        var o = n[this._curBubbleIdx + 1];
                        o > Je.BUBBLE_ERROR_MAX && (o = 0), r && (t = Math.pow(2, r - 1)), o && (e = Math.pow(2, o - 1));
                    }
                    t || (t = this.randomOneShootColor(i)), e || (e = this.randomOneShootColor(i)), 
                    this.curShootBubble = this.createShootBubble(t), this._nextShootBubble = this.createShootBubble(e), 
                    Nn.I.emit(ui, this.curShootBubble, this._nextShootBubble), this.shootBubbleCnt = this._mapData.num;
                }, i.shootExchange = function() {
                    var t = this.curShootBubble;
                    this.curShootBubble = this._nextShootBubble, this._nextShootBubble = t;
                }, i.shoot = function(t) {
                    this._isFirst = !1, this.shootBubbleCnt--, t || (this._missCnt++, this._shootColorList.push(this.curShootBubble.color), 
                    this.curShootBubble = null);
                }, i.setToShowColorArea = function() {
                    this._toShowColorArea = !0, this.showColorArea();
                }, i.showColorArea = function() {
                    if (this.curShootBubble) {
                        var t = this.getBubbles(Je.BUBBLE_CHECK_ROW, this.curShootBubble.color);
                        Nn.I.emit(Fi, t, !0);
                    } else Nn.I.emit(Ni);
                }, i.addBubble = function() {
                    var t = ut(n.default.mark(function t(e, i, r, o) {
                        var a, s, l;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (a = !1, this.clearStart(), s = !1, l = this.getShootTargetVec(i, r, o), t.t0 = l, 
                                !t.t0) {
                                    t.next = 16;
                                    break;
                                }
                                if (this.setBubble(e, l.x, l.y), this.getAroundBubbles(l.x, l.y).forEach(function(t) {
                                    Nn.I.emit(ni, t, e);
                                }), t.t1 = this.checkClear(e) > 0, !t.t1) {
                                    t.next = 15;
                                    break;
                                }
                                return wn.I.playSound(yn.Clear), a = !0, t.next = 13, this.wait(Je.CLEAR_INTERVAL);

                              case 13:
                                return t.next = 15, this.checkFall();

                              case 15:
                                this.checkUpdatePos() && (s = !0);

                              case 16:
                                this.round(a, !0, s);

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n, r) {
                        return t.apply(this, arguments);
                    };
                }(), i.boosterClear = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                i = this, this.clearStart(), this._boosterToClear.forEach(function(t) {
                                    t.hit(2, e) && (i.setBubble(null, t.x, t.y), i.getAroundBubbles(t.x, t.y).forEach(function(n) {
                                        i._boosterToClear.indexOf(n) < 0 && Nn.I.emit(ni, n, t, e);
                                    }), Nn.I.emit(ri, t, e), i._missCnt = 0);
                                }), this.isActivity || Nn.I.emit(Ti, this.cacuBoosterClearScore(this._boosterToClear.length)), 
                                Nn.I.emit(ki, this._leftNormal), this._boosterToClear = [], r = !1, o = 0, t.t0 = e.type, 
                                t.next = t.t0 === Ke.BOMB ? 6 : t.t0 === Ke.LIGHTING ? 8 : 9;
                                break;

                              case 6:
                                return o = .15, t.abrupt("break", 9);

                              case 8:
                                o = .2;

                              case 9:
                                return t.next = 11, this.wait(Je.CLEAR_INTERVAL);

                              case 11:
                                return t.next = 13, this.checkFall();

                              case 13:
                                return t.next = 15, this.wait(o);

                              case 15:
                                this.checkUpdatePos() && (r = !0), this.round(!0, !1, r);

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.clearStart = function() {
                    Nn.I.emit(_i), this._roundClearBubbles = [];
                }, i.checkBoosterHitArea = function(t, e, i) {
                    var n = this.getShootTargetVec(e.x, e.y, i), r = [];
                    switch (t) {
                      case Ke.BOMB:
                        r = this.getAroundBubbles(n.x, n.y, 2);
                        break;

                      case Ke.LIGHTING:
                        var o = 0, a = 0;
                        i && (o = i.x, a = i.y), r = this.getRowBubbles(o, a);
                        break;

                      case Ke.RAINBOW:
                        var s = this.getAroundBubbles(n.x, n.y), l = 0;
                        s.forEach(function(t) {
                            l |= t.color;
                        }), r = this.getBubbles(Je.BUBBLE_CHECK_ROW, l);
                    }
                    return this.setBoosterHitArea(t, r), r;
                }, i.setBoosterHitArea = function(t, e) {
                    for (var i = 0; i < e.length; i++) e[i].checkHit() || (e.splice(i, 1), i--);
                    this._boosterToClear = e, Nn.I.emit(Fi, e);
                }, i.getShootTargetVec = function(t, e, i) {
                    var n = 1e3, r = -1, o = -1;
                    if (i) {
                        var a;
                        a = this.getAroundEmpty(i.x, i.y, 1);
                        for (var l = 0; l < a.length; l++) {
                            var u = a[l], c = Oo.I.convertVecToPos(u.x, u.y), h = Ve.cacuDis(t, e, c.x, c.y);
                            this.checkPosUseble(u.x, u.y) && h < n && (n = h, r = u.x, o = u.y);
                        }
                    } else for (var d = Oo.I.convertPosToVec(t, e), f = Math.floor(d.x); f <= Math.ceil(d.x); f++) {
                        var p = Math.abs(d.x - f);
                        p < n && !this.getBubbble(f, 0) && this.checkPosUseble(f, 0) && (n = p, r = f, o = 0);
                    }
                    return r >= 0 && o >= 0 && s(r, o);
                }, i.round = function() {
                    var t = ut(n.default.mark(function t(e, i, r) {
                        var o, a, s, l, u, c, h, d, f, p, v;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (void 0 === i && (i = !0), void 0 === r && (r = !0), this._roundClearBubbles = [], 
                                i && (e ? Nn.I.emit(Ui, Ke.FIREBALL, 1 / Je.FIREBALL_FILL_REQ) : Nn.I.emit(Vi, Ke.FIREBALL)), 
                                r || za.I.run(), !(this._leftNormal > 0)) {
                                    t.next = 15;
                                    break;
                                }
                                if (this.fillNextShoot(), !e && this.roundGrow(this._bubbleCheckArr), 0 != this.shootBubbleCnt) {
                                    t.next = 12;
                                    break;
                                }
                                return za.I.stop(!0), o = Math.min((Date.now() - this._startTime) / 1e3, Je.MAX_PASS_TIME), 
                                a = Math.max(0, (this._startBubbleCnt - this._leftNormal) / this._startBubbleCnt), 
                                t.next = 6, this.wait(.4);

                              case 6:
                                if (Nn.I.emit(Oi, o, a), !this._mapData.test) {
                                    t.next = 10;
                                    break;
                                }
                                (s = {})[this._levelId] = this._mapData.id + "_dead", qr.I.dot("Test", s), O("Test", s);

                              case 10:
                                t.next = 13;
                                break;

                              case 12:
                                Nn.I.emit(Qe);

                              case 13:
                                t.next = 42;
                                break;

                              case 15:
                                if (za.I.stop(!0), l = Math.min((Date.now() - this._startTime) / 1e3, Je.MAX_PASS_TIME), 
                                u = Math.max(0, (this._mapData.num - this.shootBubbleCnt) / this._mapData.num), 
                                c = this._shootColorList.length / this._startBubbleCnt, this.fallAll(), this.shootBubbleCnt >= 2 && this.fillNextShoot(), 
                                0 != this.shootBubbleCnt) {
                                    t.next = 25;
                                    break;
                                }
                                return t.next = 20, this.wait(.3);

                              case 20:
                                return Nn.I.emit(pi), t.next = 23, this.wait(.3);

                              case 23:
                                t.next = 41;
                                break;

                              case 25:
                                return t.next = 27, this.wait(.5);

                              case 27:
                                for (wn.I.playSound(yn.Win), h = this.shootBubbleCnt, d = this.splitColor(this._defaultColor), 
                                f = (1.2 + .05 * h) / .25 + 1, p = 0; p < f; p++) Nn.I.emit(qi, .25 * p + .2);
                                v = 0;

                              case 30:
                                if (!(v < h)) {
                                    t.next = 39;
                                    break;
                                }
                                return t.next = 33, this.wait(.05);

                              case 33:
                                this.spout(this.randomOneShootColor(d)), this.shootBubbleCnt--, this.isActivity || Nn.I.emit(Ti, this.cacuSpoutScore(v));

                              case 36:
                                v++, t.next = 30;
                                break;

                              case 39:
                                return t.next = 41, this.wait(1.2);

                              case 41:
                                this.isActivity ? Nn.I.emit(rn, !0, l, u, c, this._mapData) : Nn.I.emit(Di, l, u, c, this._mapData);

                              case 42:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n) {
                        return t.apply(this, arguments);
                    };
                }(), i.spout = function(t) {
                    var e = this.createShootBubble(t);
                    Nn.I.emit(Bi, e);
                }, i.checkClear = function(t) {
                    var e = this, i = [ t ];
                    if (t.checkDis = 0, this.getLinkBubbles(t, i, !0, t.color), i.length >= 3) {
                        var n = .01;
                        return i.forEach(function(r) {
                            r.hit(1, t) && (e.setBubble(null, r.x, r.y), e.getAroundBubbles(r.x, r.y).forEach(function(t) {
                                i.indexOf(t) < 0 && Nn.I.emit(ni, t, r);
                            }), Nn.I.emit(ri, r, t), e._missCnt = 0, n = Math.max(n, r.checkDis));
                        }), this.isActivity || Nn.I.emit(Ti, this.cacuNormalClearScore(i.length)), Nn.I.emit(ki, this._leftNormal), 
                        n;
                    }
                    return Nn.I.emit(ki, this._leftNormal), 0;
                }, i.fallAll = function() {
                    return this.fall([], !1);
                }, i.checkFall = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i, r, o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                for (e = this._bubbles[0], i = [], r = 0; r < e.length; r++) (o = e[r]) && (i.push(o), 
                                o.checkDis = 0, this.getLinkBubbles(o, i));
                                if (!((a = this.fall(i)) > 0)) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 5, this.wait(a + .3);

                              case 5:
                                t.next = 10;
                                break;

                              case 7:
                                return this._roundClearBubbles.forEach(function(t) {
                                    a = Math.max(a, t.delayTime);
                                }), t.next = 10, this.wait(a);

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.fall = function(t, e) {
                    var i = this;
                    void 0 === e && (e = !0);
                    for (var n = this._bubbles, r = [], o = 0; o < n.length; o++) for (var a = n[o], s = 0; s < a.length; s++) {
                        var l = a[s];
                        l && t.indexOf(l) < 0 && r.push(l);
                    }
                    if (!r.length) return 0;
                    r.length >= Je.BOMB_FILL_REQ && Nn.I.emit(Ui, Ke.BOMB, 1);
                    for (var u = [], c = 0, h = function(t) {
                        var n = r[t];
                        if (u.indexOf(n) >= 0) return "continue";
                        u.push(n);
                        var o = [ n ];
                        i.getLinkBubbles(n, o), u = u.concat(o);
                        var a = 0;
                        e && o.forEach(function(t) {
                            i._roundClearBubbles.forEach(function(e) {
                                i.checkIsNearby(t, e) && (a = Math.max(e.delayTime, a));
                            });
                        }), i.wait(a).then(function() {
                            wn.I.playSound(yn.Drop), o.forEach(function(t) {
                                i.setBubble(null, t.x, t.y), Nn.I.emit(oi, t);
                            }), i.isActivity || Nn.I.emit(Ti, i.cacuFallScore(o.length)), Nn.I.emit(ki, i._leftNormal);
                        }), c = Math.max(c, a);
                    }, d = 0; d < r.length; d++) h(d);
                    return c;
                }, i.checkUpdatePos = function() {
                    for (var t = this._bubbles, e = 0, i = this.clearRow > 0 ? this.clearRow - 1 : this.clearRow, n = t.length - 1 - i; n >= 0; n--) {
                        for (var r = t[n], o = !0, a = 0; a < r.length; a++) if (r[a]) {
                            e = n + 1, o = !1;
                            break;
                        }
                        if (o && (this.clearRow = t.length - n - 1), e > 0) break;
                    }
                    return e != this.maxRow && (this.maxRow = e, Nn.I.emit(li, e), !0);
                }, i.fillNextShoot = function() {
                    var t = this.getShootColorArr();
                    if (t.length || (t = this.splitColor(this._defaultColor)), this.maxRow <= Je.BUBBLE_ROW_MAX && (this.curShootBubble && t.indexOf(this.curShootBubble.color) < 0 && (this.curShootBubble = this.createShootBubble(this.randomOneShootColor(t))), 
                    this._nextShootBubble && t.indexOf(this._nextShootBubble.color) < 0 && (this._nextShootBubble = this.createShootBubble(this.randomOneShootColor(t))), 
                    Nn.I.emit(hi, this.curShootBubble, this._nextShootBubble)), !this.curShootBubble || !this._nextShootBubble) {
                        this.curShootBubble = this._nextShootBubble, this._curBubbleIdx++;
                        var e, i = this._mapData.array;
                        if (i) {
                            var n = i[this._curBubbleIdx + 1];
                            n && (e = Math.pow(2, n - 1)), t.indexOf(e) < 0 && (e = null);
                        }
                        return e || (e = this.randomOneShootColor(t)), this._nextShootBubble = this.createShootBubble(e), 
                        Nn.I.emit(ci, this._nextShootBubble), !0;
                    }
                }, i.createBubble = function() {
                    var t = ut(n.default.mark(function t(e, i, r) {
                        var o, a, s, l, u, c, h;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (o = .01 * r + .001 * i, a = da.I, !(s = a.getBubbleData(e[0]))) {
                                    t.next = 12;
                                    break;
                                }
                                if ((l = new Qa()).init(this.newId, s), this.setBubble(l, i, r), t.t0 = this._isFirst, 
                                t.t0) {
                                    t.next = 9;
                                    break;
                                }
                                return t.next = 9, this.wait(o);

                              case 9:
                                for (Nn.I.emit(Ze, l), u = 1; u < e.length; u++) c = e[u], !(h = a.getBubbleData(c)).type && h.color ? (l.setAddColor(h), 
                                Nn.I.emit($e, l)) : h.buff && (l.setBuff(h), Nn.I.emit(ti, l));
                                return t.abrupt("return", (l.giftType > 0 && Nn.I.emit(Zi, l), l));

                              case 12:
                                return t.abrupt("return", null);

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n) {
                        return t.apply(this, arguments);
                    };
                }(), i.createShootBubble = function(t) {
                    var e = Math.log2(t) + 1, i = da.I, n = new Qa(), r = i.getBubbleData(e);
                    return n.init(this.newId, r), n;
                }, i.roundGrow = function(t) {
                    this._growTrees || this.initGrowTree();
                    for (var e = 0; e < this._growTrees.length; e++) {
                        var i = this._growTrees[e];
                        i.foreach(function(t) {
                            t.content && t.content.buff || (t.content = null);
                        });
                        var n = i.findAllLeaf();
                        this.randomGrow(n, t);
                    }
                }, i.randomGrow = function(t, e) {
                    for (var i = Ve.randomInt(0, t.length - 1), n = t[i], r = null; n && !r; ) e.indexOf(n.content) >= 0 && (r = this.growBuff(n)), 
                    r || (n = n.parent);
                    r || (t.splice(i, 1), t.length && this.randomGrow(t, e));
                }, i.growBuff = function(t) {
                    if (!t.content) return null;
                    var e = t.content, i = this.getAroundBubbles(e.x, e.y), n = [], r = [ 0, 1, -1 ];
                    i.forEach(function(t) {
                        t.data.type != Ha.NORMAL || t.buff || n.push(t);
                    }), n.sort(function(t, i) {
                        return t.y != i.y ? r.indexOf(t.y - e.y) - r.indexOf(i.y - e.y) : Math.random() - .5;
                    });
                    var o = n[0];
                    if (o) {
                        o.setBuff(e.buff);
                        var a = new Wa();
                        a.init(), a.content = o, t.addChild(a), Nn.I.emit(ai, e, o);
                    }
                    return o;
                }, i.getBubbble = function(t, e) {
                    return this._bubbles && this._bubbles[e] && this._bubbles[e][t];
                }, i.getLinkBubbles = function(t, e, i, n) {
                    void 0 === i && (i = !1);
                    for (var r = this.getSingleLinkBubbles(t, e, i, n); r.length; ) {
                        for (var o = [], a = 0; a < r.length; a++) o = o.concat(this.getSingleLinkBubbles(r[a], e, i, n));
                        r = o;
                    }
                }, i.getSingleLinkBubbles = function(t, e, i, n) {
                    void 0 === i && (i = !1);
                    var r = this.getAroundBubbles(t.x, t.y), o = [];
                    return r.forEach(function(r) {
                        e.includes(r) || (!i || r.color & n && (1 != e.length || !r.buff || r.buff.buff != ja.MUCUS)) && (r.checkDis = t.checkDis + 1, 
                        e.push(r), o.push(r));
                    }), o;
                }, i.getRowBubbles = function(t, e) {
                    var i = [], n = this._bubbles[e];
                    if (n) for (var r = 0; r < n.length; r++) {
                        var o = this.getBubbble(r, e);
                        o && i.push(o);
                    }
                    return i;
                }, i.getAroundBubbles = function(t, e, i) {
                    void 0 === i && (i = 1);
                    for (var n = [], r = Math.abs(i) / 2, o = e % 2 == 0 ? -Math.ceil(r) : -Math.floor(r), a = -i; a <= i; a++) for (var s = (i - Math.abs(a)) / 2, l = o + ((e + i) % 2 == 0 ? -Math.ceil(s) : -Math.floor(s)), u = l + 2 * i - Math.abs(a), c = l; c <= u; c++) if (0 != c || 0 != a) {
                        var h = t + c, d = e + a, f = this.getBubbble(h, d);
                        f && n.push(f);
                    }
                    return n;
                }, i.getAroundEmpty = function(t, e, i) {
                    void 0 === i && (i = 1);
                    for (var n = [], r = Math.abs(i) / 2, o = e % 2 == 0 ? -Math.ceil(r) : -Math.floor(r), a = -i; a <= i; a++) for (var l = (i - Math.abs(a)) / 2, u = o + ((e + i) % 2 == 0 ? -Math.ceil(l) : -Math.floor(l)), c = u + 2 * i - Math.abs(a), h = u; h <= c; h++) if (0 != h || 0 != a) {
                        var d = t + h, f = e + a;
                        this.getBubbble(d, f) || n.push(s(d, f));
                    }
                    return n;
                }, i.setBubble = function(t, e, i) {
                    this._bubbles[i] || (this._bubbles[i] = []);
                    var n = this._bubbles[i][e];
                    n && n.data.type == Ha.NORMAL && this._leftNormal--, null == t && n && this._roundClearBubbles.push(n), 
                    this._bubbles[i][e] = t, t && t.data.type == Ha.NORMAL && this._leftNormal++, t && t.setPos(e, i);
                }, i.getBubbles = function(t, e) {
                    void 0 === e && (e = -1);
                    for (var i = [], n = 0, r = this._bubbles, o = r.length - 1; o >= 0; o--) {
                        var a = r[o], s = !1;
                        if (a) for (var l = 0; l < a.length; l++) {
                            var u = a[l];
                            u && (s = !0), u && (-1 == e || u.color & e) && i.push(u);
                        }
                        if (s && n++, n >= t) break;
                    }
                    return i;
                }, i.randomOneShootColor = function(t) {
                    for (var e = [], i = this._shootColorList, n = this._refreshColorList, r = 0, o = 0; o < t.length; o++) {
                        if (e[o] = 100, this._missCnt >= 2) for (var a = i.length - 1; a >= i.length - this._missCnt; a--) i[a] == t[o] && (e[o] /= 2);
                        for (var s = n.length - 1; s >= 0 && n[s] != t[o]; s--) n.length - s >= t.length && (e[o] *= 2);
                        r += e[o];
                    }
                    var l = t[Ve.getWeightRandIndex(e, r)];
                    return this._refreshColorList.push(l), l;
                }, i.getShootColorArr = function() {
                    var t = 0;
                    return this._bubbleCheckArr = this.getBubbles(Je.BUBBLE_CHECK_ROW), this._bubbleCheckArr.forEach(function(e) {
                        t |= e.color;
                    }), this.splitColor(t);
                }, i.splitColor = function(t) {
                    for (var e = t.toString(2), i = [], n = 0; n < e.length; n++) parseInt(e[n]) && i.push(Math.pow(2, e.length - n - 1));
                    return i;
                }, i.checkIsNearby = function(t, e) {
                    var i = Math.abs(t.y - e.y), n = t.x - e.x;
                    return 0 == i ? 1 == Math.abs(n) : 1 == i && (t.y % 2 == 0 ? 0 == n || 1 == n : 0 == n || -1 == n);
                }, i.checkPosUseble = function(t, e) {
                    return e >= 0 && t >= 0 && t <= (e % 2 == 0 ? 10 : 9);
                }, i.cacuNormalClearScore = function(t) {
                    return 5 * (Math.pow(t, 2) - t);
                }, i.cacuBoosterClearScore = function(t) {
                    return 5 * (Math.pow(t, 2) + 3 * t + 4);
                }, i.cacuFallScore = function(t) {
                    return 100 * t;
                }, i.cacuSpoutScore = function(t) {
                    return 50 * (t + 1);
                }, i.wait = function(t) {
                    var e = this;
                    return void 0 === t && (t = 1), new Promise(function(i, n) {
                        e.scheduleOnce(i, t);
                    });
                }, ht(e, [ {
                    key: "curShootBubble",
                    get: function() {
                        return this._curShootBubble;
                    },
                    set: function(t) {
                        this._curShootBubble = t, this._toShowColorArea && this.showColorArea();
                    }
                }, {
                    key: "shootBubbleCnt",
                    get: function() {
                        return +this._shootBubbleCnt;
                    },
                    set: function(t) {
                        this._shootBubbleCnt = t, Nn.I.emit(xi, this._shootBubbleCnt);
                    }
                }, {
                    key: "levelId",
                    get: function() {
                        return this._levelId;
                    }
                }, {
                    key: "newId",
                    get: function() {
                        return this._ida++;
                    }
                } ]), e;
            }(a)) || Xa);
            t._RF.pop(), t._RF.push({}, "a96eeqqTfhIOKw050/7l2Ef", "BaseView", void 0);
            var es, is, ns, rs, os, as, ss, ls = e.ccclass, us = (e.property, ls(Za = function(t) {
                function e() {
                    var e;
                    return dt(mt(e = t.call(this) || this), "_events", []), e.initEvent(), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.run = function() {
                    this.addEvent();
                }, i.stop = function() {
                    this.removeEvent();
                }, i.initEvent = function() {}, i.addEvent = function() {
                    var t = this;
                    this._events.forEach(function(e) {
                        e[0] || (e[0] = t.node), e[0].on(e[1], e[2], e[3] || t);
                    });
                }, i.removeEvent = function() {
                    var t = this;
                    this._events.forEach(function(e) {
                        e[0] || (e[0] = t.node), e[0].off(e[1], e[2], e[3] || t);
                    });
                }, e;
            }(a)) || Za);
            t._RF.pop(), t._RF.push({}, "e1d51DUkWdEYpdFhK9fAduw", "GiftItem", void 0);
            var cs, hs, ds, fs, ps, vs = e.ccclass, bs = e.property, gs = (es = vs("GiftItem"), 
            is = bs(k), ns = bs(b), es((as = _t((os = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "icon", as, mt(e)), 
                    yt(mt(e), "sprites", ss, mt(e)), dt(mt(e), "type", void 0), e;
                }
                return pt(e, t), e.prototype.init = function(t) {
                    this.type = t, this.icon.spriteFrame = this.sprites[t - 1];
                }, e;
            }(a)).prototype, "icon", [ is ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ss = _t(os.prototype, "sprites", [ ns ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), rs = os)) || rs);
            t._RF.pop(), t._RF.push({}, "60e1e9xdVVI0aapWPOZa6WV", "Bubble", void 0);
            var ms, ys, _s, Is = e.ccclass, ws = e.property, Ss = (cs = (0, e.menu)("game/Bubble"), 
            hs = ws(i), Is(ds = cs((ps = _t((fs = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "con", ps, mt(e)), 
                    dt(mt(e), "_model", void 0), dt(mt(e), "_removeEffect", void 0), dt(mt(e), "_isShake", void 0), 
                    dt(mt(e), "_isFall", void 0), dt(mt(e), "_throwPower", void 0), dt(mt(e), "_fallCallBack", void 0), 
                    dt(mt(e), "_xspeed", void 0), dt(mt(e), "_yspeed", void 0), dt(mt(e), "_targetSpeed", void 0), 
                    dt(mt(e), "_addcolor", void 0), dt(mt(e), "_buff", void 0), dt(mt(e), "_dropEffect", void 0), 
                    dt(mt(e), "_offset", void 0), dt(mt(e), "_gift", void 0), dt(mt(e), "_opacity", void 0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.init = function(t) {
                    this._model = t, this._isFall = !1, this.z = 0, this.node.angle = 0, this.node.setScale(1, 1, 1), 
                    this.con.setScale(1, 1, 1), this.con.setPosition(0, 0), this.opacity.opacity = 255, 
                    this.disabledTrail(), this.con.active = !0, this.getComponent(Rr) && (this.getComponent(Rr).group = Ar.bubble, 
                    Yr.I.add(this.getComponent(Rr)));
                }, i.setPos = function(t, e) {
                    var i = Oo.I.convertVecToPos(t, e);
                    this.node.setPosition(i.x, i.y), this._offset = i;
                }, i.addColor = function(t) {
                    this.con.addChild(t), t.setPosition(0, 0), this._addcolor = t;
                }, i.addLuckyGift = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, mn.loadRes("prefab/game/giftItem");

                              case 2:
                                e = t.sent, this.model.giftType > 0 && (i = Pn.I.getNode(e), this.con.addChild(i), 
                                i.getComponent(gs).init(this.model.giftType), this._gift = i);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.addBuff = function(t) {
                    this.con.addChild(t), t.setPosition(0, 0), this._buff = t;
                }, i.growBuff = function(t, e) {
                    var i = this;
                    this.con.addChild(t), this.z = 1, t.setWorldPosition(e.node.worldPosition), F(t).to(.3, {
                        position: l(0, 0)
                    }).call(function() {
                        i.z = 0;
                    }).start(), this._buff = t;
                }, i.removeBuff = function(t) {
                    var i = this._buff;
                    i && (i.parent = this.node, this._buff = null, window.wx && !He.I.getGlobalData("shock") && $n.I.vibrateShort(), 
                    i.getComponent(e).remove(function() {
                        Pn.I.putNode(i), t && t();
                    }));
                }, i.enabledTrail = function() {
                    var t = this.getComponent(N);
                    if (t) {
                        var e;
                        t.enabled = !0;
                        var i = Je.LINT_COLORS[Math.floor(Math.log2(this.model.color))];
                        (e = t.color).set.apply(e, i);
                    }
                }, i.disabledTrail = function() {
                    var t = this.getComponent(N);
                    t && (t.enabled = !1);
                }, i.moveToTruePos = function() {
                    var t = this.getTruePos(), e = t.x - this.node.position.x, i = t.y - this.node.position.y;
                    this.setPos(this._model.x, this._model.y), this.con.setPosition(-e, -i), F(this.con).to(.15, {
                        position: l(0, 0)
                    }, {
                        easing: "backOut"
                    }).start();
                }, i.getTruePos = function() {
                    return Oo.I.convertVecToPos(this._model.x, this._model.y);
                }, i.shake = function(t, e, i) {
                    var n = this;
                    if (void 0 === i && (i = 1), !this._isShake) {
                        this._isShake = !0, this.z = 1;
                        var r = Ve.cacuDis(this.node.position.x, this.node.position.y, t, e), o = Ve.getRadian2(t, e, this.node.position.x, this.node.position.y), a = 800 / r, s = (a *= i) * Math.cos(o), u = a * Math.sin(o);
                        F(this.con).by(.1, {
                            position: l(s, u)
                        }).by(.2, {
                            position: l(-s, -u)
                        }).call(function() {
                            n.z = 0, n._isShake = !1, n.con.setPosition(0, 0);
                        }).start();
                    }
                }, i.removeByEffect = function() {
                    var t = ut(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.scaleBoost();

                              case 2:
                                return t.next = 4, Mn.I.playEffectInNode(fh.BUBBLE_EFFECT_LAYER, e, !0, !0, 0, null, this.node.worldPosition);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.toRemove = function() {
                    this.getComponent(Rr) && (this.getComponent(Rr).group = Ar.default, Yr.I.remove(this.getComponent(Rr)));
                }, i.remove = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.toRemove(), r = i || this._removeEffect, window.wx && !He.I.getGlobalData("shock") && $n.I.vibrateShort(), 
                                !r) {
                                    t.next = 9;
                                    break;
                                }
                                return t.next = 6, this.removeByEffect(r);

                              case 6:
                                e && e(), t.next = 10;
                                break;

                              case 9:
                                F(this.con).to(.25, {
                                    scale: l(0, 0, 0)
                                }, {
                                    easing: "backIn"
                                }).call(e).start();

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), i.scaleBoost = function() {
                    var t = this;
                    return new Promise(function(e) {
                        F(t.con).to(.08, {
                            scale: l(1.25, 1.25, 1)
                        }).call(function() {
                            e(1);
                        }).delay(.06).call(function() {
                            t.con.active = !1;
                        }).start();
                    });
                }, i.recover = function() {
                    z.stopAllByTarget(this.con), z.stopAllByTarget(this.node), Pn.I.putNode(this.node), 
                    this._addcolor && Pn.I.putNode(this._addcolor), this._addcolor = null, this._buff && Pn.I.putNode(this._buff), 
                    this._buff = null, this._dropEffect = null, this._gift && Pn.I.putNode(this._gift), 
                    this._gift = null;
                }, i.fall = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.toRemove(), this.z = 1, i = s(Ve.random(-.35, .35), Ve.random(.5, 1)), 
                                this._throwPower = 1, this._fallCallBack = e, this._xspeed = i.x * this._throwPower * 600, 
                                this._yspeed = i.y * this._throwPower * 600, this._fallCallBack = e, t.next = 8, 
                                Ve.wait(Ve.random(0, .1));

                              case 8:
                                this._isFall = !0, this._targetSpeed = -4e3;

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.spout = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                i = this, r = s(Ve.random(-.4, .4), Ve.random(3.3, 3.6)), this._throwPower = 1, 
                                this._fallCallBack = function() {
                                    return i.remove(e);
                                }, this._xspeed = r.x * this._throwPower * 600, this._yspeed = r.y * this._throwPower * 600, 
                                this._isFall = !0, this._targetSpeed = Ve.random(-1e3, -1500);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.update = function(t) {
                    this._isFall && (this.node.translate(l(this._xspeed * t, this._yspeed * t)), this._yspeed -= 3e3 * t, 
                    this._yspeed <= this._targetSpeed && (this._isFall = !1, this._fallCallBack && this._fallCallBack()));
                }, ht(e, [ {
                    key: "id",
                    get: function() {
                        return this._model.id;
                    }
                }, {
                    key: "model",
                    get: function() {
                        return this._model;
                    }
                }, {
                    key: "z",
                    get: function() {
                        return this.node.position.z;
                    },
                    set: function(t) {
                        this.node.setPosition(this.node.position.x, this.node.position.y, t);
                    }
                }, {
                    key: "opacity",
                    get: function() {
                        return this._opacity || (this._opacity = this.con.getComponent(G) || this.con.addComponent(G)), 
                        this._opacity;
                    }
                } ]), e;
            }(us)).prototype, "con", [ hs ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ds = fs)) || ds) || ds);
            t._RF.pop(), t._RF.push({}, "95743HeDThPA4M5qqtjZpun", "DymicBar", void 0);
            var Cs, As, Ts, ks, xs, Es, Bs, Ps, Rs, Ls, Ds, Os, Ms, Fs, Ns, zs, Gs, Us = e.ccclass, Vs = e.property, Ws = Us("DymicBar")((_s = _t((ys = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "tweenSpeed", _s, mt(e)), 
                    dt(mt(e), "target", null), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.update = function(t) {
                    if (null != this.target) {
                        var e = this.target - this.progress;
                        if (0 == e) return;
                        var i = Math.max(this.tweenSpeed, 4 * Math.abs(e)) * t;
                        i >= Math.abs(e) ? this.progress = this.target : this.progress += (e > 0 ? 1 : -1) * i;
                    }
                }, i.setProgress = function(t, e) {
                    void 0 === e && (e = !1), e ? this.target = t : (this.progress = t, this.target = null);
                }, e;
            }(U)).prototype, "tweenSpeed", [ Vs ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), ms = ys)) || ms;
            t._RF.pop(), t._RF.push({}, "c9fafeHintMRKr9A21rKP6H", "BoosterItem", void 0);
            var Hs, js, Ys, Ks, qs = e.ccclass, Xs = e.property, Js = (Cs = (0, e.menu)("game/comp/BoosterItem"), 
            As = Xs({
                type: T(Ke)
            }), Ts = Xs(k), ks = Xs(k), xs = Xs(b), Es = Xs(L), Bs = Xs(Ws), Ps = Xs(C.Skeleton), 
            qs(Rs = Cs((Ds = _t((Ls = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "type", Ds, mt(e)), 
                    yt(mt(e), "bg", Os, mt(e)), yt(mt(e), "icon", Ms, mt(e)), yt(mt(e), "bgSprites", Fs, mt(e)), 
                    yt(mt(e), "cntLbl", Ns, mt(e)), yt(mt(e), "energyBar", zs, mt(e)), yt(mt(e), "energyAnim", Gs, mt(e)), 
                    dt(mt(e), "_locked", void 0), dt(mt(e), "_count", void 0), dt(mt(e), "_energy", void 0), 
                    dt(mt(e), "_isInfi", void 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.start = function() {
                    this.reset();
                }, i.use = function() {
                    this.locked || (this._isInfi || this.count > 0 || this.energy >= 1 ? Nn.I.emit(wi, this.type) : ad.I.openPopwin(td.boosterBuy, this.type));
                }, i.onUse = function() {
                    qr.I.levelRunning(u("Canvas/GameScene").getComponent(fh).levelId, null, null, "tools", this.type, Je.BOOSTER_CONF[this.type][0], 1), 
                    this._isInfi || (this.energy >= 1 ? (this.clearEnergy(), this.type == Ke.BOMB ? (qr.I.dot("PropUse", {
                        key: "bomb_free"
                    }), qr.I.dot("PropCharge", {
                        action: "bomb_click"
                    })) : (qr.I.dot("PropUse", {
                        key: "fireball_free"
                    }), qr.I.dot("PropCharge", {
                        action: "rocket_click"
                    }))) : (qr.I.dot("PropUse", {
                        key: Xe[this.type]
                    }), _d.I.useBooster(this.type))), Ba.I.addDailyTaskCounts(this.type + 4), Ba.I.addDailyTaskCounts(Aa.propAll);
                }, i.reset = function() {
                    this._isInfi = !1;
                    var t = _d.I.curLevel, e = Je.BOOSTER_UNLOCK[this.type];
                    switch (t > e && _d.I.unlockBooster(this.type), this.type) {
                      case Ke.LIGHTING:
                      case Ke.RAINBOW:
                        t == e && (_d.I.unlockBooster(this.type), t == e && (this._isInfi = !0));
                    }
                    this.locked = !_d.I.checkBoosterUnlock(this.type), this.clearEnergy();
                }, i.updateCnt = function() {
                    if (this.locked = !_d.I.checkBoosterUnlock(this.type), this.locked) this.cntLbl.node.parent.active = !1; else {
                        this.cntLbl.node.parent.active = !0;
                        var t = _d.I.getBoosterCnt(this.type);
                        this._count = t, this._isInfi ? (this.cntLbl.string = "∞", this.cntLbl.fontSize = 44) : t > 0 ? (this.cntLbl.string = "" + t, 
                        this.cntLbl.fontSize = 22) : this.energy >= 1 ? this.cntLbl.node.parent.active = !1 : (this.cntLbl.string = "+", 
                        this.cntLbl.fontSize = 36);
                    }
                }, i.addEnergy = function(t, e) {
                    if (void 0 === e && (e = !1), e || !(_d.I.curLevel < Je.BOOSTER_UNLOCK[this.type])) {
                        this.locked && (_d.I.unlockBooster(this.type), this.locked = !1);
                        var i = this.energy;
                        this.energy += t, i < 1 && this.energy >= 1 && this.showReady(), this.energy >= 1 ? this.energyAnim && (this.energyAnim.node.active = !0, 
                        Ve.playSpine(this.energyAnim, "idle", !0)) : this.energyAnim && (this.energyAnim.node.active = !0, 
                        Ve.playSpine(this.energyAnim, "play", !1)), this.updateCnt();
                    }
                }, i.clearEnergy = function() {
                    this._energy = 0, this.energyBar && this.energyBar.setProgress(0), this.energyAnim && (this.energyAnim.node.active = !1), 
                    this.updateCnt();
                }, i.showReady = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (wn.I.playSound(yn.Ready), e = this.type == Ke.FIREBALL && Tn.EFFECT_FIREBALL_READY || this.type == Ke.BOMB && Tn.EFFECT_BOMB_READY, 
                                t.t0 = e, !t.t0) {
                                    t.next = 8;
                                    break;
                                }
                                return this.type == Ke.BOMB ? (Nn.I.emit(Ji), qr.I.dot("PropCharge", {
                                    action: "bomb_ready"
                                })) : (Nn.I.emit(Qi), qr.I.dot("PropCharge", {
                                    action: "rocket_ready"
                                })), window.wx && !He.I.getGlobalData("shock") && $n.I.vibrateShort(), t.next = 8, 
                                Mn.I.playEffectInNode(this.node.parent, e);

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), ht(e, [ {
                    key: "locked",
                    get: function() {
                        return this._locked;
                    },
                    set: function(t) {
                        this._locked = t, this.bg.spriteFrame = this.bgSprites[t ? 1 : 0], this.icon.grayscale = t;
                    }
                }, {
                    key: "energy",
                    get: function() {
                        return this._energy;
                    },
                    set: function(t) {
                        this._energy = t, this.energyBar && this.energyBar.setProgress(t, !0);
                    }
                }, {
                    key: "count",
                    get: function() {
                        return this._count;
                    }
                } ]), e;
            }(a)).prototype, "type", [ As ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Ke.BOMB;
                }
            }), Os = _t(Ls.prototype, "bg", [ Ts ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ms = _t(Ls.prototype, "icon", [ ks ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Fs = _t(Ls.prototype, "bgSprites", [ xs ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Ns = _t(Ls.prototype, "cntLbl", [ Es ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zs = _t(Ls.prototype, "energyBar", [ Bs ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Gs = _t(Ls.prototype, "energyAnim", [ Ps ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Rs = Ls)) || Rs) || Rs);
            t._RF.pop(), t._RF.push({}, "f321d4DvBtES4tFikvNlX9h", "NumerLabel", void 0);
            var Qs, Zs, $s, tl, el, il = e.ccclass, nl = e.property, rl = e.executeInEditMode, ol = il("NumerLabel")(Hs = rl((Ys = _t((js = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "tweenSpeed", Ys, mt(e)), 
                    yt(mt(e), "unit", Ks, mt(e)), dt(mt(e), "target", null), dt(mt(e), "_number", 0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.update = function(t) {
                    if (null != this.target) {
                        var e = this.target - this.number;
                        if (0 == e) return;
                        var i = Math.max(this.tweenSpeed, 4 * Math.abs(e)) * t;
                        i >= Math.abs(e) ? this.number = this.target : this.number += (e > 0 ? 1 : -1) * i;
                    }
                }, i.setNumber = function(t, e) {
                    void 0 === e && (e = !1), e ? this.target = t : (this.number = t, this.target = null);
                }, ht(e, [ {
                    key: "number",
                    get: function() {
                        return this._number;
                    },
                    set: function(t) {
                        this._number = t, this.string = "" + Math.floor(t / this.unit) * this.unit;
                    }
                } ]), e;
            }(L)).prototype, "tweenSpeed", [ nl ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), Ks = _t(js.prototype, "unit", [ nl ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), Hs = js)) || Hs) || Hs;
            t._RF.pop(), t._RF.push({}, "c4fabscO4lNg47g6MDCHezT", "LeftBubble", void 0);
            var al, sl, ll, ul, cl, hl, dl, fl, pl, vl = e.ccclass, bl = e.property, gl = (Qs = (0, 
            e.menu)("game/comp/LeftBubble"), Zs = bl(ol), vl($s = Qs((el = _t((tl = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "cntLbl", el, mt(e)), 
                    dt(mt(e), "_count", void 0), e;
                }
                return pt(e, t), e.prototype.reset = function() {
                    this.cntLbl.string = "", this.cntLbl.setNumber(0);
                }, ht(e, [ {
                    key: "count",
                    get: function() {
                        return this._count;
                    },
                    set: function(t) {
                        this._count = t, this.cntLbl.setNumber(t, !0);
                    }
                } ]), e;
            }(a)).prototype, "cntLbl", [ Zs ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), $s = tl)) || $s) || $s);
            t._RF.pop(), t._RF.push({}, "2e063mM+VhH1bp82oF3niJO", "ScoreBar", void 0);
            var ml, yl, _l, Il, wl, Sl, Cl, Al, Tl = e.ccclass, kl = e.property, xl = (al = (0, 
            e.menu)("game/comp/ScoreBar"), sl = kl(Ws), ll = kl(C.Skeleton), ul = kl(ol), Tl(cl = al((dl = _t((hl = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "bar", dl, mt(e)), 
                    yt(mt(e), "stars", fl, mt(e)), yt(mt(e), "scoreLbl", pl, mt(e)), dt(mt(e), "targetScores", void 0), 
                    dt(mt(e), "maxScore", void 0), dt(mt(e), "_score", void 0), dt(mt(e), "_star", void 0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.start = function() {
                    this.reset();
                }, i.init = function(t) {
                    this.targetScores = t;
                    for (var e = 1.2 * t[t.length - 1], i = this.bar.node.position.x, n = this.bar.getComponent(c).width, r = 0; r < t.length; r++) this.stars[r].node.active = !1, 
                    this.stars[r].node.parent.setPosition(i - n / 2 + t[r] / e * n, this.stars[r].node.position.y);
                    this.maxScore = e, this.score = 0, this._star = 0;
                }, i.add = function(t) {
                    this.score += t;
                }, i.reset = function() {
                    this.bar.progress = 0, this._score = 0, this.scoreLbl.string = "", this.scoreLbl.setNumber(0), 
                    this.stars.forEach(function(t) {
                        t.node.active = !1;
                    });
                }, i.addStar = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = this.node.parent.parent, this._star++, t.next = 4, Mn.I.loadEffect(Tn.EFFECT_STAR_APPEAR);

                              case 4:
                                return r = t.sent, i.addChild(r), r.worldPosition = this.node.worldPosition, o = l(r.position.x + this.stars[e].node.parent.position.x, r.position.y), 
                                F(r).delay(.4).to(.4, {
                                    position: o
                                }).start(), t.next = 10, Mn.I.playEffect(r);

                              case 10:
                                this.stars[e].node.active = !0, Ve.playSpine(this.stars[e]), this.addStarGetEffect(e);

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.addStarGetEffect = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return wn.I.playSound(yn.Star), t.next = 3, Mn.I.loadEffect(Tn.EFFECT_STAR_GET);

                              case 3:
                                return i = t.sent, this.node.insertChild(i, this.stars[e].node.getSiblingIndex()), 
                                i.setPosition(this.stars[e].node.position), t.next = 8, Mn.I.playEffect(i);

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), ht(e, [ {
                    key: "score",
                    get: function() {
                        return this._score;
                    },
                    set: function(t) {
                        var e = this, i = this._score;
                        this._score = t, this.scoreLbl.setNumber(t, !1), this.bar.setProgress(t / this.maxScore, !0);
                        for (var n = 0, r = function(r) {
                            var o = e.targetScores[r];
                            i < o && t >= o && (e.scheduleOnce(function() {
                                e.addStar(r);
                            }, .3 * n), n++);
                        }, o = 0; o < this.targetScores.length; o++) r(o);
                    }
                }, {
                    key: "star",
                    get: function() {
                        return this._star;
                    }
                } ]), e;
            }(a)).prototype, "bar", [ sl ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), fl = _t(hl.prototype, "stars", [ ll ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), pl = _t(hl.prototype, "scoreLbl", [ ul ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), cl = hl)) || cl) || cl);
            t._RF.pop(), t._RF.push({}, "83a38CkE45FDbLp3PGrTl+W", "BubbleFactory", void 0);
            var El, Bl, Pl, Rl, Ll, Dl, Ol, Ml, Fl, Nl, zl, Gl, Ul, Vl = e.ccclass, Wl = e.property, Hl = e.menu, jl = (ml = Vl("BubbleFactory"), 
            yl = Hl("game/BubbleFactory"), _l = Wl(V), ml(Il = yl((Al = Cl = function(t) {
                function e() {
                    var e;
                    return dt(mt(e = t.call(this) || this), "_bubblePrefabDic", void 0), yt(mt(e), "bubbles", Sl, mt(e)), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    var t = this;
                    e._instance ? O("重复的BubbleFactory") : e._instance = this, this._bubblePrefabDic = {}, 
                    this.bubbles.forEach(function(e) {
                        t._bubblePrefabDic[e.data.name] = e;
                    });
                }, i.createBubble = function(t) {
                    return Pn.I.getNode(this._bubblePrefabDic[t]);
                }, i.recover = function(t) {
                    Pn.I.putNode(t);
                }, ht(e, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance;
                    }
                } ]), e;
            }(a), dt(Cl, "_instance", void 0), Sl = _t((wl = Al).prototype, "bubbles", [ _l ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Il = wl)) || Il) || Il);
            t._RF.pop(), t._RF.push({}, "88b630u0dpD7aIH7pZ7CD42", "Grid", void 0);
            var Yl, Kl = e.ccclass, ql = e.property, Xl = (El = (0, e.menu)("game/Grid"), Bl = ql(i), 
            Pl = ql(i), Rl = ql(i), Ll = ql(i), Dl = ql(V), Kl(Ol = El((Fl = _t((Ml = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "_bubbleDic", void 0), 
                    yt(mt(e), "bubbleLayer", Fl, mt(e)), yt(mt(e), "topCollider", Nl, mt(e)), yt(mt(e), "bubbleTopLayer", zl, mt(e)), 
                    yt(mt(e), "effectLayer", Gl, mt(e)), yt(mt(e), "hitAreaPrefab", Ul, mt(e)), dt(mt(e), "_bubbleMask", void 0), 
                    dt(mt(e), "_hitAreas", []), dt(mt(e), "inUpdate", void 0), dt(mt(e), "isFirst", !0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.reset = function() {
                    for (var t in this._bubbleDic) this._bubbleDic[t].recover();
                    this.hideHitArea(), this._bubbleDic = {}, this._hitAreas = [], this.inUpdate = !1;
                }, i.run = function() {
                    t.prototype.run.call(this);
                }, i.stop = function() {
                    t.prototype.stop.call(this);
                }, i.initEvent = function() {
                    this._events = [ [ Nn.I, Ze, this.createBubble, this ], [ Nn.I, "BUBBLE_SET_POS", this.setBubblePos, this ], [ Nn.I, ri, this.clearBubble, this ], [ Nn.I, $e, this.addBubbleColor, this ], [ Nn.I, ti, this.addBubbleBuff, this ], [ Nn.I, ii, this.changeBubbleBuff, this ], [ Nn.I, ai, this.growBubbleBuff, this ], [ Nn.I, ei, this.removeBubbleBuff, this ], [ Nn.I, oi, this.fallBubble, this ], [ Nn.I, ni, this.shakeBubble, this ], [ Nn.I, si, this.init, this ], [ Nn.I, li, this.updatePos, this ], [ Nn.I, Fi, this.showHitArea, this ], [ Nn.I, Ni, this.hideHitArea, this ], [ Nn.I, Zi, this.addLuckyGift, this ] ];
                }, i.init = function(t) {
                    t > Je.BUBBLE_ROW_MAX && (this.isFirst = !1);
                    var e = -u("Canvas").getComponent(c).height / 2;
                    this.node.setPosition(this.node.position.x, e), this.updatePos(t, 2, function() {
                        Nn.I.emit("READY");
                    });
                }, i.updatePos = function(t, e, i) {
                    var n = this;
                    void 0 === e && (e = 1), this.inUpdate = !0;
                    var r = Je.BUBBLE_R, o = Je.BUBBLE_ROW_MAX, a = (t - 1) * Math.sqrt(3) * r + r, s = (o - 1) * Math.sqrt(3) * r + r, l = 1.6 * Math.sqrt(3) * r;
                    this._bubbleMask = a > s;
                    var u = 667 + (a = Math.max(a, s)) - s - l, c = function() {
                        za.I.run(), n.inUpdate = !1, i && i();
                    };
                    this.isFirst ? (this.isFirst = !1, this.node.setPosition(this.node.position.x, u), 
                    c()) : this.scheduleOnce(function() {
                        return n.moveGird(u, e, c);
                    }, .001);
                }, i.moveGird = function(t, e, i) {
                    void 0 === e && (e = 1), this.topCollider.setPosition(this.topCollider.position.x, 0);
                    var n = Math.abs(t - this.node.position.y) / (Je.GRID_SCROLL_SPEED * e);
                    n = Math.max(.25, n), z.stopAllByTarget(this.node), F(this.node).to(n, {
                        position: l(this.node.position.x, t)
                    }, {
                        easing: "quadOut"
                    }).call(i).start();
                }, i.checkBubbleMask = function() {
                    return this._bubbleMask;
                }, i.createBubble = function(t) {
                    var e = t.data, i = jl.I.createBubble(e.prefab);
                    t.data.type == Ha.SNIPER ? this.bubbleTopLayer.addChild(i) : this.bubbleLayer.addChild(i);
                    var n = i.getComponent(Ss);
                    return n.init(t), this._bubbleDic[t.id] = n, this.setBubblePos(t, t.x, t.y), n;
                }, i.addBubbleColor = function(t) {
                    var e = t.addColor, i = jl.I.createBubble(e.prefab);
                    i.getComponent(Ss).init(t), this._bubbleDic[t.id].addColor(i);
                }, i.growBubbleBuff = function(t, e) {
                    var i = e.buff, n = jl.I.createBubble(i.prefab);
                    switch (n.getComponent(Ss).init(e), this._bubbleDic[e.id].growBuff(n, this._bubbleDic[t.id]), 
                    t.buff.buff) {
                      case ja.WATER:
                        wn.I.playSound(yn.Water);
                        break;

                      case ja.ICE:
                        wn.I.playSound(yn.Ice);
                    }
                }, i.addLuckyGift = function(t) {
                    this._bubbleDic[t.id] && this._bubbleDic[t.id].addLuckyGift();
                }, i.addBubbleBuff = function(t) {
                    if (this._bubbleDic[t.id]) {
                        var e = t.buff;
                        if (e) {
                            var i = jl.I.createBubble(e.prefab);
                            i.getComponent(Ss).init(t), this._bubbleDic[t.id].addBuff(i);
                        }
                    }
                }, i.removeBubbleBuff = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!this._bubbleDic[e.id]) {
                                    t.next = 7;
                                    break;
                                }
                                if (r = this._bubbleDic[e.id], t.t0 = i, !t.t0) {
                                    t.next = 6;
                                    break;
                                }
                                return t.next = 6, this.srcDelay(i, r);

                              case 6:
                                r.removeBuff();

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), i.changeBubbleBuff = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r, o;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (r = this, !this._bubbleDic[e.id]) {
                                    t.next = 8;
                                    break;
                                }
                                if (o = this._bubbleDic[e.id], t.t0 = i, !t.t0) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 7, this.srcDelay(i, o);

                              case 7:
                                o.removeBuff(function() {
                                    r.addBubbleBuff(e);
                                });

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), i.clearBubble = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (r = this._bubbleDic[e.id], Ba.I.addDailyTaskCounts(r.model.data.id + 8), delete this._bubbleDic[e.id], 
                                t.t0 = i, !t.t0) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 7, this.srcDelay(i, r);

                              case 7:
                                r.remove(function() {
                                    r.recover();
                                }, i && i._hitEffect), this.openGift(e);

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), i.getBubble = function(t) {
                    return this._bubbleDic[t.id];
                }, i.srcDelay = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (r = 0, e && e.type == Ke.FIREBALL ? (r = Ve.cacuDis(i.node.worldPosition.x, i.node.worldPosition.y, e.node.worldPosition.x, e.node.worldPosition.y) / Je.SHOOT_BUBBLE_SPEED, 
                                r -= .05) : e && e.type == Ke.RAINBOW ? (r = Ve.cacuDis(i.node.worldPosition.x, i.node.worldPosition.y, e.node.worldPosition.x, e.node.worldPosition.y) / (2 * Je.BUBBLE_R) * Je.CLEAR_INTERVAL, 
                                r -= Je.CLEAR_INTERVAL) : e && e.data && e.id && (r = (i.model.checkDis - 1) * Je.CLEAR_INTERVAL), 
                                r = Math.max(0, r), i.model.delayTime = r, t.t0 = r > 0, !t.t0) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 8, Ve.wait(r);

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), i.fallBubble = function(t) {
                    var e = this._bubbleDic[t.id];
                    Ba.I.addDailyTaskCounts(e.model.data.id + 8), delete this._bubbleDic[t.id], z.stopAllByTarget(e.node), 
                    e.node.setParent(fh.BUBBLE_EFFECT_LAYER, !0), e.fall(function() {
                        e.recover();
                    }), this.openGift(t);
                }, i.openGift = function(t) {
                    switch (t.giftType) {
                      case 1:
                        t.giftType = 0, ad.I.openPopwin(td.luckyGift);
                        break;

                      case 2:
                        t.giftType = 0, ad.I.openPopwin(td.luckyGold);
                    }
                }, i.shakeBubble = function() {
                    var t = ut(n.default.mark(function t(e, i, r) {
                        var o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return o = this._bubbleDic[e.id], a = this._bubbleDic[i.id], t.next = 3, this.srcDelay(r || i, a);

                              case 3:
                                o.shake(a.node.position.x, a.node.position.y);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n) {
                        return t.apply(this, arguments);
                    };
                }(), i.addToBubbleLayer = function(t) {
                    var e = this.createBubble(t.model);
                    return this.bubbleLayer.addChild(e.node), e.node.worldPosition = t.node.worldPosition, 
                    t.toRemove(), t.recover(), e.node.setScale(1, 1), e;
                }, i.setBubblePos = function(t, e, i) {
                    this._bubbleDic[t.id].setPos(e, i);
                }, i.showHitArea = function(t, e) {
                    var i = this;
                    void 0 === e && (e = !1), this.hideHitArea(), t.forEach(function(t) {
                        var n, r, o = i._bubbleDic[t.id], a = Pn.I.getNode(i.hitAreaPrefab, i.bubbleLayer);
                        i.bubbleLayer.addChild(a), a.setPosition(o.getTruePos()), i._hitAreas.push(a), e ? null === (n = a.getComponent(I)) || void 0 === n || n.play() : (null === (r = a.getComponent(I)) || void 0 === r || r.stop(), 
                        a.getComponent(G).opacity = 255);
                    });
                }, i.hideHitArea = function() {
                    this._hitAreas.forEach(function(t) {
                        Pn.I.putNode(t);
                    }), this._hitAreas = [];
                }, i.getLineDisBubbles = function(t, e, i, n, r) {
                    var o = this._bubbleDic, a = [];
                    for (var s in o) {
                        var l = o[s];
                        Ve.pointToLineDistance(t, e, i, n, l.node.position.x, l.node.position.y) <= r && a.push(l.model);
                    }
                    return a;
                }, e;
            }(us)).prototype, "bubbleLayer", [ Bl ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Nl = _t(Ml.prototype, "topCollider", [ Pl ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zl = _t(Ml.prototype, "bubbleTopLayer", [ Rl ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Gl = _t(Ml.prototype, "effectLayer", [ Ll ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ul = _t(Ml.prototype, "hitAreaPrefab", [ Dl ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ol = Ml)) || Ol) || Ol);
            t._RF.pop(), t._RF.push({}, "84c251ng65AnKNRkgyycKJY", "Booster", void 0);
            var Jl, Ql, Zl, $l, tu, eu, iu, nu = e.ccclass, ru = (e.property, nu(Yl = (0, e.menu)("game/Booster")(Yl = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "_type", void 0), 
                    dt(mt(e), "_removeEffect", void 0), dt(mt(e), "_hitEffect", void 0), dt(mt(e), "_direct", void 0), 
                    dt(mt(e), "_vx", void 0), dt(mt(e), "_vy", void 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.init = function(t) {
                    this._type = t, this.node.children[0].active = !0, this._removeEffect = Tn.EFFECT_BOOSTER_REMOVE_ARR[this._type], 
                    this._hitEffect = Tn.EFFECT_BOOSTER_HIT_ARR[this._type], this.node.children[0].angle = 0;
                }, i.setVec = function(t, e) {
                    this._vx = t, this._vy = e;
                }, i.setDirect = function(t) {
                    this._direct = t, this.node.children[0].angle = t + 25;
                }, i.removeByEffect = function() {
                    var t = ut(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.node.children[0].active = !1, t.next = 3, Mn.I.playEffectInNode(fh.BOOSTER_EFFECT_LAYER, e, !0, !0, 0, null, this.node.worldPosition);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.remove = function() {
                    var t = ut(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = this._removeEffect, !t.t0) {
                                    t.next = 4;
                                    break;
                                }
                                return t.next = 4, this.removeByEffect(this._removeEffect);

                              case 4:
                                e();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.recover = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                Pn.I.putNode(this.node);

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.enabledTrail = function() {
                    var t = this.getComponent(N);
                    t && (t.enabled = !0);
                }, i.disabledTrail = function() {
                    var t = this.getComponent(N);
                    t && (t.enabled = !1);
                }, ht(e, [ {
                    key: "type",
                    get: function() {
                        return this._type;
                    }
                }, {
                    key: "isBooster",
                    get: function() {
                        return !0;
                    }
                }, {
                    key: "direct",
                    get: function() {
                        return this._direct;
                    }
                }, {
                    key: "z",
                    get: function() {
                        return this.node.position.z;
                    },
                    set: function(t) {
                        this.node.setPosition(this.node.position.x, this.node.position.y, t);
                    }
                } ]), e;
            }(a)) || Yl) || Yl);
            t._RF.pop(), t._RF.push({}, "9d9dddCUaBCMZaMR3XfQLaa", "ShootLine", void 0);
            var ou, au, su, lu, uu, cu = e.ccclass, hu = e.property, du = (Jl = (0, e.menu)("game/comp/ShootLine"), 
            Ql = hu(V), cu(Zl = Jl((iu = eu = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "linePointPrefab", tu, mt(e)), 
                    dt(mt(e), "_points", []), dt(mt(e), "perSize", 40), e;
                }
                return pt(e, t), e.prototype.refresh = function(t, i, n, r, o, a) {
                    for (var s = (n - o) / this.perSize, l = 0; l < s; l++) {
                        var u = this._points[l];
                        u || (u = Pn.I.getNode(this.linePointPrefab, this.node), this._points[l] = u), u.setPosition(0, o + l * this.perSize);
                        var c = u.getComponent(I).getState("anim_line_point1");
                        c.isPlaying || c.play(), 0 == r ? e.ZERO_TIME = c.time % c.duration : c.setTime(e.ZERO_TIME + c.duration / 2 * (r % 2)), 
                        u.getComponent(k).color = gt(W, a[r % a.length]), r++;
                    }
                    for (var h = this._points.length; h >= s; h--) this._points[h] && Pn.I.putNode(this._points[h]), 
                    this._points[h] = null;
                    return this.node.setPosition(t.x, t.y), this.node.angle = Ve.getAngle(t.x, t.y, i.x, i.y) - 180, 
                    [ r, o = this.perSize - (n - o) % this.perSize ];
                }, e;
            }(a), dt(eu, "ZERO_TIME", 0), tu = _t(($l = iu).prototype, "linePointPrefab", [ Ql ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Zl = $l)) || Zl) || Zl);
            t._RF.pop(), t._RF.push({}, "aa466E18nNLob2k5gaiXwJn", "ShootLineGroup", void 0);
            var fu, pu, vu, bu, gu, mu, yu, _u, Iu, wu, Su, Cu, Au, Tu, ku, xu, Eu, Bu, Pu, Ru, Lu, Du, Ou, Mu, Fu, Nu = e.ccclass, zu = e.property, Gu = (ou = (0, 
            e.menu)("game/comp/ShootLineGroup"), au = zu(V), Nu(su = ou((uu = _t((lu = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "linePre", uu, mt(e)), 
                    dt(mt(e), "lines", []), dt(mt(e), "count", void 0), dt(mt(e), "points", void 0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.clear = function() {
                    for (var t = 0; t < this.lines.length; t++) this.lines[t].node.active = !1;
                }, i.refresh = function(t, e) {
                    t || (t = this.points), this.points = t, this.clear(), this.node.active = !0, this.count = t.length - 1;
                    for (var i = Je.SHOOT_LINE_SHOW_MAX, n = [ 0, 50 ], r = 0; r < t.length - 1; r++) {
                        var o = this.lines[r];
                        o ? o.node.active = !0 : (o = m(this.linePre).getComponent(du), this.node.addChild(o.node), 
                        this.lines[r] = o);
                        var a = Ve.cacuDis(t[r].x, t[r].y, t[r + 1].x, t[r + 1].y);
                        r == t.length - 2 && (a += 15), i -= a = Math.min(i, a), n = o.refresh(t[r], t[r + 1], a, n[0], n[1], e);
                    }
                    for (var s = t.length - 1; s < this.lines.length; s++) this.lines[s].node.active = !1;
                }, e;
            }(a)).prototype, "linePre", [ au ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), su = lu)) || su) || su);
            t._RF.pop(), t._RF.push({}, "bd11b05z8RIfp13l0473xta", "Shooter", void 0);
            var Uu, Vu, Wu, Hu, ju, Yu, Ku, qu, Xu, Ju, Qu, Zu, $u, tc, ec, ic, nc, rc, oc, ac, sc, lc, uc, hc, dc, fc, pc, vc, bc, gc, mc, yc, _c, Ic, wc, Sc, Cc, Ac, Tc, kc, xc, Ec, Bc, Pc, Rc, Lc, Dc, Oc, Mc, Fc, Nc, zc, Gc, Uc, Vc, Wc, Hc, jc, Yc, Kc, qc, Xc, Jc, Qc = e.ccclass, Zc = e.property, $c = (fu = (0, 
            e.menu)("game/Shooter"), pu = Zc(i), vu = Zc(i), bu = Zc(i), gu = Zc(i), mu = Zc(i), 
            yu = Zc(i), _u = Zc(i), Iu = Zc(Gu), wu = Zc(C.Skeleton), Su = Zc(i), Cu = Zc(L), 
            Qc(Au = fu((ku = _t((Tu = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "bubbleLayer", ku, mt(e)), 
                    yt(mt(e), "boosterLayer", xu, mt(e)), yt(mt(e), "curBubbleCon", Eu, mt(e)), yt(mt(e), "nextBubbleCon", Bu, mt(e)), 
                    yt(mt(e), "boosterCon", Pu, mt(e)), yt(mt(e), "addBox", Ru, mt(e)), yt(mt(e), "cancelBtn", Lu, mt(e)), 
                    yt(mt(e), "shootLineGroup", Du, mt(e)), yt(mt(e), "roundAnim", Ou, mt(e)), yt(mt(e), "hand", Mu, mt(e)), 
                    yt(mt(e), "cntLbl", Fu, mt(e)), dt(mt(e), "_shootStartPos", void 0), dt(mt(e), "_curShootBubble", void 0), 
                    dt(mt(e), "_nextShootBubble", void 0), dt(mt(e), "_booster", void 0), dt(mt(e), "_anim", void 0), 
                    dt(mt(e), "_inAnim", void 0), dt(mt(e), "_shootTween", void 0), dt(mt(e), "_bubbleCnt", void 0), 
                    dt(mt(e), "_shootPoints", void 0), dt(mt(e), "_curShootColorArr", void 0), dt(mt(e), "_lastPos", void 0), 
                    dt(mt(e), "animAddNode", void 0), dt(mt(e), "isAdd", void 0), e;
                }
                pt(e, t);
                var r = e.prototype;
                return r.start = function() {
                    this.shootLineGroup.node.worldPosition = this.curBubbleCon.worldPosition;
                }, r.reset = function() {
                    this.clear();
                }, r.run = function() {
                    t.prototype.run.call(this), this._shootStartPos = s(this.curBubbleCon.worldPosition.x, this.curBubbleCon.worldPosition.y), 
                    this._anim = this.getComponent(H);
                }, r.stop = function() {
                    t.prototype.stop.call(this);
                }, r.initEvent = function() {
                    this._events = [ [ Nn.I, ui, this.init, this ], [ Nn.I, ci, this.fill, this ], [ Nn.I, hi, this.refresh, this ], [ Nn.I, xi, this.updateBubbleCnt, this ], [ Nn.I, di, this.shootShow, this ], [ Nn.I, fi, this.shootShowAngle, this ], [ Nn.I, pi, this.clear, this ], [ Nn.I, vi, this.shoot, this ], [ Nn.I, Ii, this.stopShoot, this ], [ Nn.I, Bi, this.spout, this ], [ Nn.I, "BOOTER_ANIM", this.animAdd, this ], [ this.node, i.EventType.TOUCH_END, this.exchange, this ] ];
                }, r.init = function(t, e) {
                    var i = this;
                    this.curShootBubble = this.createBubble(t), this.nextShootBubble = this.createBubble(e), 
                    this.bubbleCnt = 0, this.bubbleLayer.active = !0, this.boosterLayer.active = !1, 
                    Ve.AnimationRecover(this._anim, "anim_shooter_choose1");
                    var n = Je.SHOOT_BUBBLE_INIT_DELAY;
                    this.emitMove(20 / 60 + n), this.scheduleOnce(function() {
                        i._anim.play("anim_shooter_choose1");
                    }, n);
                }, r.chooseBooster = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return wn.I.playSound(yn.Load), Ve.AnimationRecover(this._anim, "anim_shooter_choose2"), 
                                this.inAnim = !0, this.bubbleLayer.active = !1, this.boosterLayer.active = !0, Je.BOOSTER_UNLOCK[e] == _d.I.curLevel ? this.cancelBtn.active = !1 : this.cancelBtn.active = !0, 
                                this._anim.play("anim_shooter_choose2"), t.next = 3, Mn.I.loadEffect(Tn.EFFECT_BOOSTER_IDLE_ARR[e]);

                              case 3:
                                i = t.sent, this.boosterCon.addChild(i), i.setPosition(0, 0), this._booster = i.getComponent(ru), 
                                this._booster.init(e), this.emitMove(20 / 60), 12 == (r = u("Canvas/GameScene").getComponent(fh).levelId) && e == Ke.RAINBOW && qr.I.dot("level_" + r, {
                                    from: "rainbow_click"
                                });

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), r.chooseBubble = function() {
                    Ve.AnimationRecover(this._anim, "anim_shooter_choose1"), this.bubbleLayer.active = !0, 
                    this.boosterLayer.active = !1, this._anim.play("anim_shooter_choose1"), this._booster && this._booster.recover(), 
                    this._booster = null, this.emitMove(20 / 60);
                }, r.cancelBooster = function() {
                    Nn.I.emit(Si);
                }, r.onShootBooster = function() {
                    this.cancelBtn.active = !1, Nn.I.emit(Ci);
                }, r.clear = function() {
                    this._curShootBubble && this._curShootBubble.recover(), this._nextShootBubble && this._nextShootBubble.recover(), 
                    this._booster && this._booster.recover(), this._curShootBubble = null, this._nextShootBubble = null, 
                    this._booster = null, this.hand.active = !1, this.clearShootShow();
                }, r.fill = function(t) {
                    this.curShootBubble = this.nextShootBubble, this.nextShootBubble = this.createBubble(t), 
                    Ve.AnimationRecover(this._anim, "anim_shooter_fill"), this._anim.play("anim_shooter_fill"), 
                    this.emitMove(22 / 60);
                }, r.refresh = function(t, e) {
                    this.curShootBubble && this.curShootBubble.init(t), this.nextShootBubble && this.nextShootBubble.init(e);
                }, r.exchange = function() {
                    if (!this.inAnim && this.curShootBubble) {
                        wn.I.playSound(yn.Swap);
                        var t = this.curShootBubble.model;
                        this.curShootBubble.init(this.nextShootBubble.model), this.nextShootBubble.init(t), 
                        Ve.AnimationRecover(this._anim, "anim_shooter_exchange"), this._anim.play("anim_shooter_exchange"), 
                        this.emitMove(20 / 60), Nn.I.emit(mi);
                        var e = u("Canvas/GameScene").getComponent(fh).levelId;
                        qr.I.dot("BubbleSwap", {
                            level: e
                        }), 3 == e && qr.I.dot("level_" + e, {
                            from: "swap"
                        });
                    }
                }, r.clearShootShow = function() {
                    this.shootLineGroup.clear(), this._curShootColorArr = null;
                }, r.shootShowAngle = function(t, e, i) {
                    void 0 === e && (e = 0);
                    var n = t / 180 * Math.PI, r = 100 * Math.sin(n), o = 100 * Math.cos(n);
                    this.shootShow(s(r, o).add(this._shootStartPos), e, i, !0);
                }, r.shootShow = function(t, e, i, n) {
                    var r = this;
                    if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = !1), 
                    t && !(n && this._shootPoints && this._shootPoints.length) && (this.bubbleLayer.active ? this._curShootBubble : this._booster) && !this.inAnim) {
                        this.roundAnim.getCurrent(0).loop = !1, this._lastPos = t.clone();
                        var o = !1;
                        if (this.checkShootTarget(t)) {
                            var a = Ve.subV2(t, this._shootStartPos).normalize();
                            switch (e) {
                              case 0:
                                this.hand.active = !1;
                                break;

                              case 1:
                                this.hand.active = !0, this.hand.setPosition(i + this._shootStartPos.x - this.node.worldPosition.x, i / a.x * a.y + this._shootStartPos.y - this.node.worldPosition.y);
                                break;

                              case 2:
                                this.hand.active = !0, this.hand.setPosition(i * a.x / a.y + this._shootStartPos.x - this.node.worldPosition.x, i + this._shootStartPos.y - this.node.worldPosition.y);
                            }
                            var s = Ma.I.getMoveLine(this._shootStartPos, a, !(this._booster && this._booster.type == Ke.FIREBALL));
                            s.forEach(function(t) {
                                t.subtract(r._shootStartPos);
                            }), s.unshift(j.ZERO), this.shootLineGroup.refresh(s, this.getCurShootColorArr()), 
                            n || (this._shootPoints = s), Nn.I.emit(yi), this._booster && this._booster.type == Ke.FIREBALL && this._booster.setDirect(Ve.getAngle(s[0].x, s[0].y, s[1].x, s[1].y) - 180), 
                            this.bubbleLayer.active || (o = !0, Nn.I.emit(zi, this._booster.type, Ve.addV2(s[s.length - 2], this._shootStartPos), Ve.addV2(s[s.length - 1], this._shootStartPos)));
                        } else this.hand.active = !1, this.clearShootShow(), this._shootPoints = [], Nn.I.emit(_i);
                        !o && Nn.I.emit(Ni);
                    }
                }, r.shoot = function(t) {
                    var e = this, i = this.bubbleLayer.active ? this._curShootBubble : this._booster;
                    if (i && !this.inAnim) {
                        this.clearShootShow();
                        var n = this.roundAnim.getCurrent(0);
                        if (n.animationEnd == n.animationLast ? this.roundAnim.setAnimation(0, "play", !0) : n.loop = !0, 
                        this._lastPos && this._shootPoints && this._shootPoints.length) {
                            za.I.stop(), this.bubbleLayer.active ? (this._curShootBubble = null, wn.I.playSound(yn.Shot)) : (this._booster.type == Ke.FIREBALL ? (wn.I.playSound(yn.Fireball), 
                            this.playFireBallEffect(this._booster)) : (wn.I.playSound(yn.Shot), this._booster.type, 
                            Ke.LIGHTING), this._booster = null, this.onShootBooster());
                            var r = this._shootPoints;
                            z.stopAllByTarget(i.node);
                            for (var o = F(i.node), a = 1; a < r.length; a++) {
                                var s = Ve.cacuDis(r[a - 1].x, r[a - 1].y, r[a].x, r[a].y) / Je.SHOOT_BUBBLE_SPEED;
                                o.to(s, {
                                    position: l(r[a].x, r[a].y)
                                });
                            }
                            i.enabledTrail(), Nn.I.emit(bi, i), o.call(function() {
                                e.bubbleLayer.active ? Nn.I.emit(gi, i, Ma.I.shootTarget) : (Nn.I.emit(Gi, i), wn.I.playSound(yn.Bounce)), 
                                e.scheduleOnce(function() {
                                    return i.disabledTrail();
                                }, .5);
                            }), o.start(), this._shootTween = o;
                        } else Nn.I.emit(_i);
                        this._shootPoints = [], Nn.I.emit(Ni), this._lastPos = null;
                        var c = u("Canvas/GameScene").getComponent(fh).levelId, h = u("Canvas/GameScene").getComponent(fh).isCloseLuckPop;
                        [ 3, 6 ].indexOf(c) > -1 && (h ? qr.I.dot("level_" + c, {
                            from: "shoot_1"
                        }) : qr.I.dot("level_" + c, {
                            from: "shoot_0"
                        }));
                    }
                }, r.cancelShoot = function() {
                    if (this._lastPos) {
                        this.clearShootShow();
                        var t = this.roundAnim.getCurrent(0);
                        t.animationEnd == t.animationLast ? this.roundAnim.setAnimation(0, "play", !0) : t.loop = !0, 
                        Nn.I.emit(_i), this._shootPoints = [], Nn.I.emit(Ni), this._lastPos = null;
                    }
                }, r.fixLightingPos = function(t) {
                    t -= this._shootStartPos.y;
                    var e = this._shootPoints;
                    if (e && e.length) {
                        var i = e[e.length - 2], n = e[e.length - 1], r = t - n.y, o = r * (n.x - i.x) / (n.y - i.y);
                        n.x += o, n.y += r;
                    }
                }, r.playFireBallEffect = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = e.node.worldPosition.clone(), t.next = 3, Ve.wait(.1);

                              case 3:
                                return t.next = 5, Mn.I.loadEffect(Tn.EFFECT_BOOSTER_HIT_ARR[e.type]);

                              case 5:
                                r = t.sent, fh.BOOSTER_EFFECT_LAYER.addChild(r), Mn.I.playEffect(r), r.angle = e.direct, 
                                r.worldPosition = i;

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), r.stopShoot = function() {
                    this._shootTween.stop();
                }, r.spout = function(t) {
                    var e, i = this;
                    this._curShootBubble ? (e = this._curShootBubble, this._curShootBubble = null) : this._nextShootBubble && (e = this._nextShootBubble, 
                    this._nextShootBubble = null), e ? this.spoutBubble(e) : ((e = this.createBubble(t)).node.setScale(0, 0), 
                    this.nextBubbleCon.addChild(e.node), F(e.node).to(.1, {
                        scale: l(.7, .7, 1)
                    }).call(function() {
                        i.spoutBubble(e);
                    }).start());
                }, r.spoutBubble = function() {
                    var t = ut(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e && (window.wx && !He.I.getGlobalData("shock") && $n.I.vibrateShort(), e.node.setParent(this.node, !0), 
                                F(e.node).to(.15, {
                                    scale: l(1, 1, 1)
                                }).start(), e.spout(function() {
                                    return e.recover();
                                }));

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), r.createBubble = function(t) {
                    if (t && t.data) {
                        var e = jl.I.createBubble("shooterBubble");
                        e.setPosition(0, 0);
                        var i = e.getComponent(Ss);
                        return i.init(t), i;
                    }
                }, r.animAdd = function() {
                    var t = ut(n.default.mark(function t(e, i, r) {
                        var o, a, s, u, c, h;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (o = this, !i) {
                                    t.next = 13;
                                    break;
                                }
                                return t.next = 4, Mn.I.loadEffect(Tn.EFFECT_BOOSTER_ADDSTEP);

                              case 4:
                                return a = t.sent, this.addBox.addChild(a), s = l(375, this.addBox.worldPosition.y + 300), 
                                a.setWorldPosition(s), a.scale = l(0, 0, 0), this.animAddNode = a, F(this.animAddNode).to(.2, {
                                    scale: l(1.2, 1.2, 1.2)
                                }).to(.2, {
                                    scale: l(1, 1, 1)
                                }).start(), t.next = 13, Ve.wait(.2);

                              case 13:
                                return t.next = 15, Mn.I.loadEffect(Tn.EFFECT_BOOSTER_FLY);

                              case 15:
                                u = t.sent, this.addBox.addChild(u), c = 60 * Math.random(), this.isAdd = !this.isAdd, 
                                this.isAdd && (c = -c), s = l(375 + c, this.addBox.worldPosition.y + 300), u.setWorldPosition(s), 
                                h = function() {
                                    var t = ut(n.default.mark(function t() {
                                        var i;
                                        return n.default.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                return t.next = 2, Mn.I.loadEffect(Tn.EFFECT_BOOSTER_ADD);

                                              case 2:
                                                i = t.sent, o.addBox.addChild(i), i.setWorldPosition(o.addBox.worldPosition), F(i).delay(.1).call(function() {
                                                    Nn.I.emit(Ei, e), i.removeFromParent();
                                                }).start();

                                              case 4:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    return function() {
                                        return t.apply(this, arguments);
                                    };
                                }(), F(u).to(.3, {
                                    worldPosition: this.addBox.worldPosition
                                }).call(function() {
                                    h(), r && o.animAddNode && F(o.animAddNode).to(.2, {
                                        scale: l(1.2, 1.2, 1.2)
                                    }).to(.1, {
                                        scale: l(0, 0, 0)
                                    }).call(function() {
                                        o.animAddNode.removeFromParent(), o.animAddNode = null;
                                    }).start(), u.removeFromParent();
                                }).start();

                              case 23:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i, n) {
                        return t.apply(this, arguments);
                    };
                }(), r.checkShootTarget = function(t) {
                    var e = this._shootStartPos;
                    if (t.y < e.y + 30) return !1;
                    var i = Ve.getAngle(e.x, e.y, t.x, t.y), n = Je.SHOOT_ANGLE_LIMIT;
                    return !(i < n || 360 - i < n);
                }, r.updateBubbleCnt = function(t) {
                    this.bubbleCnt = t;
                }, r.getCurShootColorArr = function() {
                    return this._curShootColorArr || (this._booster ? this._curShootColorArr = Je.BOOSETR_LINE_COLORS[this._booster.type] : this._curShootColorArr = [ Je.LINT_COLORS[Math.log2(this._curShootBubble.model.color)] ]), 
                    this._curShootColorArr;
                }, r.emitMove = function() {
                    var t = ut(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.inAnim = !0, t.next = 3, Ve.wait(e + .001);

                              case 3:
                                this.inAnim = !1;

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), ht(e, [ {
                    key: "curShootBubble",
                    get: function() {
                        return this._curShootBubble;
                    },
                    set: function(t) {
                        t && (this._curShootBubble = t, t.node.parent = this.curBubbleCon, t.node.setPosition(0, 0));
                    }
                }, {
                    key: "nextShootBubble",
                    get: function() {
                        return this._nextShootBubble;
                    },
                    set: function(t) {
                        t && (this._nextShootBubble = t, t.node.parent = this.nextBubbleCon, t.node.setPosition(0, 0));
                    }
                }, {
                    key: "bubbleCnt",
                    get: function() {
                        return this._bubbleCnt;
                    },
                    set: function(t) {
                        this._bubbleCnt = t, this.cntLbl.string = "" + t;
                    }
                }, {
                    key: "inAnim",
                    get: function() {
                        return this._inAnim;
                    },
                    set: function(t) {
                        this._inAnim = t, t && this.cancelShoot();
                    }
                } ]), e;
            }(us)).prototype, "bubbleLayer", [ pu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), xu = _t(Tu.prototype, "boosterLayer", [ vu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Eu = _t(Tu.prototype, "curBubbleCon", [ bu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Bu = _t(Tu.prototype, "nextBubbleCon", [ gu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Pu = _t(Tu.prototype, "boosterCon", [ mu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ru = _t(Tu.prototype, "addBox", [ yu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Lu = _t(Tu.prototype, "cancelBtn", [ _u ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Du = _t(Tu.prototype, "shootLineGroup", [ Iu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ou = _t(Tu.prototype, "roundAnim", [ wu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Mu = _t(Tu.prototype, "hand", [ Su ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Fu = _t(Tu.prototype, "cntLbl", [ Cu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Au = Tu)) || Au) || Au);
            t._RF.pop(), t._RF.push({}, "b7338/xYGNJqYYf71+5Cpp2", "GameScene", void 0);
            var th, eh, ih, nh, rh, oh, ah, sh, lh, uh, ch, hh = e.ccclass, dh = e.property, fh = (Uu = (0, 
            e.menu)("game/GameScene"), Vu = dh(Xl), Wu = dh($c), Hu = dh(i), ju = dh(i), Yu = dh(Js), 
            Ku = dh(xl), qu = dh(gl), Xu = dh(i), Ju = dh(V), Qu = dh(i), Zu = dh(i), $u = dh(L), 
            tc = dh(Cr), ec = dh(ca), ic = dh(po), nc = dh(Co), rc = dh(i), oc = dh(i), ac = dh(R), 
            sc = dh(L), lc = dh(I), uc = dh(i), hc = dh(i), dc = dh(R), fc = dh(R), pc = dh(R), 
            vc = dh(i), bc = dh(Y), gc = dh(R), hh(mc = Uu((Jc = Xc = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "grid", _c, mt(e)), 
                    yt(mt(e), "shooter", Ic, mt(e)), yt(mt(e), "topView", wc, mt(e)), yt(mt(e), "boosterLayer", Sc, mt(e)), 
                    yt(mt(e), "boosterItems", Cc, mt(e)), yt(mt(e), "scoreBar", Ac, mt(e)), yt(mt(e), "leftBubble", Tc, mt(e)), 
                    yt(mt(e), "touchMask", kc, mt(e)), yt(mt(e), "handPrefab", xc, mt(e)), yt(mt(e), "effectLayer", Ec, mt(e)), 
                    yt(mt(e), "arrowCon", Bc, mt(e)), yt(mt(e), "guideDesc", Pc, mt(e)), yt(mt(e), "customAd", Rc, mt(e)), 
                    yt(mt(e), "onlineGift", Lc, mt(e)), yt(mt(e), "selfAd", Dc, mt(e)), yt(mt(e), "SelfADList", Oc, mt(e)), 
                    yt(mt(e), "SelfADStay", Mc, mt(e)), yt(mt(e), "SelfADR", Fc, mt(e)), yt(mt(e), "activityBtn", Nc, mt(e)), 
                    yt(mt(e), "lblActivity", zc, mt(e)), yt(mt(e), "acitivityAnimation", Gc, mt(e)), 
                    yt(mt(e), "activityBtnEffect", Uc, mt(e)), yt(mt(e), "layoutDrawer", Vc, mt(e)), 
                    yt(mt(e), "btnDrawer", Wc, mt(e)), yt(mt(e), "btnMission", Hc, mt(e)), yt(mt(e), "btnMoreGame", jc, mt(e)), 
                    yt(mt(e), "drawerMask", Yc, mt(e)), yt(mt(e), "subView", Kc, mt(e)), yt(mt(e), "btnRank", qc, mt(e)), 
                    dt(mt(e), "_levelId", void 0), dt(mt(e), "_gameModel", void 0), dt(mt(e), "_topIsShow", void 0), 
                    dt(mt(e), "isCloseLuckPop", !1), dt(mt(e), "isActivity", !1), dt(mt(e), "selfADRShow", !1), 
                    dt(mt(e), "frameTime", []), dt(mt(e), "fps", 60), dt(mt(e), "drawerClick", !1), 
                    dt(mt(e), "drawerMoving", !1), dt(mt(e), "AuthorizeBtn", null), dt(mt(e), "_boosterArrow", void 0), 
                    dt(mt(e), "_hand", void 0), e;
                }
                pt(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    var t = ut(n.default.mark(function t() {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this._gameModel = this.node.addComponent(ts), Nn.I.on("READY", this.gameReady, this), 
                                Nn.I.on(bi, this.shoot, this), Nn.I.on(gi, this.shootTarget, this), Nn.I.on(mi, this.shootExchange, this), 
                                Nn.I.on(yi, this.hideTop, this), Nn.I.on(_i, this.showTop, this), Nn.I.on(Ii, this.snipBubble, this), 
                                Nn.I.on(wi, this.chooseBooster, this), Nn.I.on(Si, this.cancelBooster, this), Nn.I.on(Gi, this.boosterClear, this), 
                                Nn.I.on(Ci, this.showBoosterLayer, this), Nn.I.on(zi, this.showBoosterHitArea, this), 
                                Nn.I.on(Ai, this.initScore, this), Nn.I.on(Ti, this.addScore, this), Nn.I.on(ki, this.setLeftBubbleCnt, this), 
                                Nn.I.on(Di, this.win, this), Nn.I.on(Oi, this.dead, this), Nn.I.on(Mi, this.fail, this), 
                                Nn.I.on(Ri, this.startGame, this), Nn.I.on(Ui, this.fillBoosterEnergy, this), Nn.I.on(Vi, this.clearBoosterEnergy, this), 
                                Nn.I.on(ea, this.changeBooster, this), Nn.I.on(Pi, this.reset, this), Nn.I.on(Li, this.restart, this), 
                                Nn.I.on("SHOW_SETTING", this.showSetting, this), Nn.I.on("SHOW_HOME_SETTING", this.showHomeSetting, this), 
                                Nn.I.on("HIDE_SETTING", this.hideSetting, this), Nn.I.on(Wi, this.showTouchMask, this), 
                                Nn.I.on(Hi, this.hideTouchMask, this), Nn.I.on("SHOW_HAND", this.showHand, this), 
                                Nn.I.on(di, this.hideHand, this), Nn.I.on(qi, this.showFireWork, this), Nn.I.on(Xi, this.showHardTips, this), 
                                Nn.I.on(Ei, this.addShootBubbleCount, this), Nn.I.on(ji, this.showGuideDesc, this), 
                                Nn.I.on(Yi, this.hideGuideDesc, this), Nn.I.on($i, this.hardShopBuy, this), Nn.I.on(tn, this.showSelfADGrid, this), 
                                Nn.I.on(en, this.showSelfADList, this), Nn.I.on(rn, this.activityResult, this), 
                                Nn.I.on(an, this.onBtnDrawerClick, this), Nn.I.on(un, this.updateBtnMission, this), 
                                Nn.I.on(cn, this.showSubView, this), this.updateBtnDrawer(), Yr.I, this.boosterLayer.setPosition(0, -400 * Ve.winHeight / 1334), 
                                this.onlineGift.node.setPosition(this.onlineGift.node.position.x, this.boosterLayer.position.y + 160), 
                                this.activityBtn.node.setPosition(this.activityBtn.node.position.x, this.boosterLayer.position.y + 160), 
                                this.SelfADStay.setPosition(this.SelfADStay.position.x, this.boosterLayer.position.y + 160), 
                                this.customAd.node.setPosition(this.customAd.node.position.x, this.boosterLayer.position.y + 220), 
                                e.BOTTOM = this.boosterLayer.worldPosition.y - this.boosterLayer.getComponent(c).height / 2, 
                                Nn.I.emit(Ki), e.BUBBLE_EFFECT_LAYER = new i(), e.BOOSTER_EFFECT_LAYER = new i(), 
                                this.effectLayer.addChild(e.BUBBLE_EFFECT_LAYER), this.effectLayer.addChild(e.BOOSTER_EFFECT_LAYER), 
                                Ca.I.setScene(this), t.next = 3, nr.I.getGameNotice();

                              case 3:
                                if (t.t0 = t.sent, t.t0) {
                                    t.next = 6;
                                    break;
                                }
                                t.t0 = {};

                              case 6:
                                if (r = t.t0, t.t1 = r && r.data && r.data.ver != _d.I.CurVersion && r && r.data && _d.I.curLevel >= parseInt(r.data.level), 
                                !t.t1) {
                                    t.next = 11;
                                    break;
                                }
                                return t.next = 11, ad.I.openPopwin(td.versionUpgrade, r.data);

                              case 11:
                                if (0 == (xe.I.get("newUserTime") || 0) && (console.log("设置玩家新签到界面"), _d.I.NewSign = !0), 
                                _d.I.hasWheel || _d.I.chearWheel(), t.t2 = _d.I.curLevel > 1 && !_d.I.hasSign, !t.t2) {
                                    t.next = 17;
                                    break;
                                }
                                return t.next = 17, ad.I.openPopwin(td.sign);

                              case 17:
                                this.checkActivityBtn(), ad.I.addToUITop(this.subView.node);

                              case 19:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), r.start = function() {
                    var t = this;
                    wn.I.playMusic(yn.BGM2, !0);
                    var e = _d.I.curLevel;
                    this.scheduleOnce(function() {
                        return t.startGame(e);
                    }, .1), this.schedule(function() {
                        _d.I.checkForActivityPower(), t.checkActivityOpen(), t.checkActivityBtn(), t.checkGameFrame(), 
                        t.checkMission(), t.updatBtnMoreGame(), t.updateBtnRank(), Ba.I.addDailyTaskCounts(Aa.online);
                    }, 1);
                }, r.restart = function() {
                    za.I.isEnd || this.startGame(this._levelId);
                }, r.reset = function() {
                    Yr.I.clearCircle(), Ca.I.stop(), this.hideGuideDesc(), this.hideHand(), this.boosterItems.forEach(function(t) {
                        t.reset();
                    }), this.scoreBar.reset(), this.leftBubble.reset(), this.grid.reset(), this.shooter.reset(), 
                    this.boosterLayer.active = !0, this.hideBootserArrow();
                }, r.startGame = function(t, e) {
                    void 0 === e && (e = !1), this.scoreBar.node.active = !e, qr.I.levelStart(t), this._levelId = t, 
                    this.isCloseLuckPop = !1, this.reset(), this.grid.run(), this.shooter.run(), Ma.I.run(), 
                    za.I.stop(!0), this.isActivity = e, this._gameModel.init(t, e), this._topIsShow = !0, 
                    this.onlineGift.checkUnlock();
                    var i = br.getParamsInt("cusAdLevel");
                    i > 0 && _d.I.curLevel >= i ? this.customAd.node.active = !0 : this.customAd.node.active = !1, 
                    [ 3, 6, 7, 12 ].indexOf(t) > -1 && qr.I.dot("level_" + t, {
                        from: "level_start"
                    }), Ba.I.tasks.length <= 0 && t >= Je.MISSION_OPEN_LEVEL && Ba.I.loadMission();
                }, r.gameReady = function() {
                    Ca.I.checkGuide(this._levelId), za.I.run(!0), 3 == this._levelId && qr.I.dot("level_" + this._levelId, {
                        from: "show_finish"
                    });
                }, r.shoot = function(t) {
                    this._gameModel.shoot(t.isBooster), t.isBooster && this.boosterItems[t.type].onUse();
                }, r.shootTarget = function(t, e) {
                    var i, n = this.grid.addToBubbleLayer(t);
                    this._gameModel.addBubble(n.model, n.node.position.x, n.node.position.y, null == e || null === (i = e.getComponent(Ss)) || void 0 === i ? void 0 : i.model), 
                    n.moveToTruePos();
                }, r.showBoosterHitArea = function(t, e, i) {
                    var n = this.grid.node.worldPosition, r = e.subtract2f(n.x, n.y), o = i.subtract2f(n.x, n.y);
                    if (t == Ke.FIREBALL) {
                        var a = this.grid.getLineDisBubbles(r.x, r.y, o.x, o.y, Je.FIRE_BALL_AREA);
                        this._gameModel.setBoosterHitArea(t, a);
                    } else {
                        var s = Ma.I.shootTarget.getComponent(Ss), l = this._gameModel.checkBoosterHitArea(t, o, s && s.model);
                        if (t == Ke.LIGHTING && l.length) {
                            var u = this.grid.getBubble(l[0]);
                            u && this.shooter.fixLightingPos(u.node.worldPosition.y);
                        }
                    }
                }, r.boosterClear = function() {
                    var t = ut(n.default.mark(function t(i) {
                        var r, o, a, s;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (i.node.setParent(e.BOOSTER_EFFECT_LAYER, !0), i.type != Ke.FIREBALL) {
                                    t.next = 5;
                                    break;
                                }
                                r = 1200, o = -i.direct / 180 * Math.PI, a = r * Math.sin(o) + i.node.position.x, 
                                s = r * Math.cos(o) + i.node.position.y, F(i.node).to(r / Je.SHOOT_BUBBLE_SPEED, {
                                    position: l(a, s)
                                }).call(function() {
                                    i.recover();
                                }).start(), t.next = 14;
                                break;

                              case 5:
                                t.t0 = (window.wx && !He.I.getGlobalData("shock") && $n.I.vibrateShort(), i.type), 
                                t.next = t.t0 === Ke.BOMB ? 8 : t.t0 === Ke.RAINBOW ? 10 : t.t0 === Ke.LIGHTING ? 12 : 13;
                                break;

                              case 8:
                                return wn.I.playSound(yn.Bomb), t.abrupt("break", 13);

                              case 10:
                                return wn.I.playSound(yn.Rainbow), t.abrupt("break", 13);

                              case 12:
                                wn.I.playSound(yn.Lightning);

                              case 13:
                                i.remove(function() {
                                    return i.recover();
                                });

                              case 14:
                                return this._gameModel.boosterClear(i), t.next = 17, Ve.wait(.5);

                              case 17:
                                this.shooter.chooseBubble();

                              case 18:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), r.snipBubble = function(t, e) {
                    var i = this;
                    e.snip(t, function() {
                        t.recover(), i._gameModel.round(!1, !0, !1);
                    });
                }, r.shootExchange = function() {
                    this._gameModel.shootExchange();
                }, r.showTop = function() {
                    this._topIsShow || (this._topIsShow = !0, z.stopAllByTarget(this.topView), F(this.topView.getComponent(G)).to(.15, {
                        opacity: 255
                    }).start());
                }, r.hideTop = function() {
                    this._topIsShow && this.grid.checkBubbleMask() && (this._topIsShow = !1, z.stopAllByTarget(this.topView), 
                    F(this.topView.getComponent(G)).to(.3, {
                        opacity: 100
                    }).start());
                }, r.chooseBooster = function(t) {
                    this.shooter.inAnim || (this.boosterLayer.active = !1, this.shooter.chooseBooster(t));
                }, r.cancelBooster = function() {
                    this.shooter.inAnim || (this.boosterLayer.active = !0, this.shooter.chooseBubble());
                }, r.showBoosterLayer = function() {
                    this.boosterLayer.active = !0;
                }, r.fillBoosterEnergy = function(t, e, i) {
                    void 0 === i && (i = !1), this.boosterItems[t].addEnergy(e, i);
                }, r.clearBoosterEnergy = function(t) {
                    this.boosterItems[t].energy < 1 && this.boosterItems[t].clearEnergy();
                }, r.changeBooster = function(t) {
                    this.boosterItems[t].updateCnt();
                }, r.initScore = function(t) {
                    this.scoreBar.init(t);
                }, r.addScore = function(t) {
                    this.scoreBar.add(t);
                }, r.setLeftBubbleCnt = function(t) {
                    this.leftBubble.count = t;
                }, r.dead = function(t, e) {
                    ad.I.openPopwin(td.relive, t, e, this.isActivity);
                }, r.win = function(t, e, i, n) {
                    ad.I.openPopwin(td.levelWin, this._gameModel.levelId, this.scoreBar.star, this.scoreBar.score, t, e, i, n), 
                    10 == this._gameModel.levelId && qr.I.behaviors();
                }, r.fail = function(t, e) {
                    wn.I.playSound(yn.Lost), ad.I.openPopwin(td.levelFail, this._gameModel.levelId, this.scoreBar.star, this.scoreBar.score, t, e);
                }, r.showSetting = function() {
                    ad.I.openPopwin(td.setting, this._levelId, this.isActivity);
                }, r.showHomeSetting = function() {
                    ad.I.openPopwin(td.homeSetting);
                }, r.hideSetting = function() {
                    ad.I.closePopwin(td.setting);
                }, r.showTouchMask = function() {
                    this.touchMask.active = !0;
                }, r.hideTouchMask = function() {
                    this.touchMask.active = !1;
                }, r.showFireWork = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Ve.wait(e);

                              case 2:
                                i = Ve.winHeight, Mn.I.playEffectInNode(this.effectLayer, Tn.EFFECT_FIREWORK, !0, !0, 0, null, l(Ve.random(100, 650), Ve.random(i / 2 + 100, i / 2 + 667 - 100)));

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), r.showHardTips = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = Ve.winHeight, t.next = 3, Mn.I.playEffectInNode(this.effectLayer, Tn.EFFECT_HARD_TIPS, !0, !0, 0, null, l(Ve.random(100, 650), Ve.random(i / 2 + 100, i / 2 + 667 - 100)));

                              case 3:
                                e && ad.I.openPopwin(td.hardShop);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), r.addShootBubbleCount = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r, o, a, s, l, u;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (void 0 === i && (i = !1), !i) {
                                    t.next = 13;
                                    break;
                                }
                                if (o = [], (r = e) < 5) for (a = 1; a <= r; a++) o.push(a); else for (s = r - 5, 
                                a = 1; a <= 5; a++) l = Math.floor(Math.random() * s), 5 == a && (l = s), s -= l, 
                                u = l + 1, o.push(u);
                                a = 0;

                              case 4:
                                if (!(a < o.length)) {
                                    t.next = 11;
                                    break;
                                }
                                return this.shooter.animAdd(o[a], 0 == a, a == o.length - 1), t.next = 8, Ve.wait(.1);

                              case 8:
                                a++, t.next = 4;
                                break;

                              case 11:
                                t.next = 14;
                                break;

                              case 13:
                                this._gameModel.shootBubbleCnt += e;

                              case 14:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), r.showBoosterArrow = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.arrowCon.active = !0, i = this.boosterItems[e], this._boosterArrow) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 5, mn.loadRes("prefab/game/arrow");

                              case 5:
                                r = t.sent, this._boosterArrow = Pn.I.getNode(r, this.arrowCon);

                              case 7:
                                (o = i.node.worldPosition.clone()).y += 100, this._boosterArrow.setWorldPosition(o);

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), r.hideBootserArrow = function() {
                    this.arrowCon.active = !1;
                }, r.showHand = function(t, e) {
                    this._hand || (this._hand = m(this.handPrefab)), u("Canvas").addChild(this._hand), 
                    this._hand.setPosition(t, e), this._gameModel.setToShowColorArea();
                }, r.showGuideDesc = function(t) {
                    this.guideDesc.node.active = !0, this.guideDesc.string = t;
                }, r.hideGuideDesc = function() {
                    this.guideDesc.node.active = !1;
                }, r.hardShopBuy = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                for (r = 0, o = 0; o < e.length; o++) -1 == (a = e[o]).type ? r += 5 * a.count : (i = !0, 
                                this.flyBooster(a.type, a.count));
                                if (t.t0 = r > 0, !t.t0) {
                                    t.next = 8;
                                    break;
                                }
                                if (t.t1 = i, !t.t1) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 7, Ve.wait(.5);

                              case 7:
                                this.addShootBubbleCount(r, !0);

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), r.flyBooster = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r, o, a, s;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = this, t.next = 3, Mn.I.loadEffect(Tn.EFFECT_BOOSTER_ICON);

                              case 3:
                                (o = t.sent).getComponent(Bo).type = e, a = this.boosterItems[e].node.worldPosition, 
                                this.boosterLayer.addChild(o), s = l(375, a.y + 500), o.setWorldPosition(s), F(o).to(.5, {
                                    worldPosition: a,
                                    scale: l(.41, .41, .41)
                                }).call(function() {
                                    o.removeFromParent(), r.fillBoosterEnergy(e, i, !0);
                                }).start();

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), r.showColorArea = function() {
                    this._gameModel.setToShowColorArea();
                }, r.hideHand = function() {
                    this._hand && this._hand.removeFromParent();
                }, r.showSelfADGrid = function(t) {
                    this.selfAd.node.active = t;
                }, r.showSelfADList = function(t) {
                    this.SelfADList.node.active = t;
                }, r.activityResult = function(t, e, i, n, r) {
                    ad.I.openPopwin(td.activityResult, t, this._gameModel.levelId, this.scoreBar.star, this.scoreBar.score, e, i, n, r);
                }, r.checkActivityOpen = function() {
                    for (var t = 1; t <= 10; ++t) {
                        var e = br.getParamsInt("event_open_" + t) || 0;
                        br.isWx || (e = Je.ACTIVITY_TEST_OPEN);
                        var i = br.getParamsInt("event_close_" + t) || 0;
                        br.isWx || (i = Je.ACTIVITY_TEST_CLOSE);
                        var n = br.getParamsString("event_level_" + t) || "";
                        if (br.isWx || (n = Je.ACTIVITY_TEST_EVENT), e > 0 && i > 0 && n && _d.I.checkActivityOpen(e, i, n)) {
                            console.log("活动开启：", e, i, n);
                            break;
                        }
                    }
                }, r.checkActivityBtn = function() {
                    if (this.isActivity) this.activityBtn.node.active = !1; else {
                        this.activityBtn.node.active = !!_d.I.CurActivity, this.activityBtn.node.getChildByName("Node").getChildByName("icon_limitactivity").getChildByName("point").active = _d.I.CurActivity && !_d.I.hasActivityClick && _d.I.ActivityLevel <= da.I.actMapMaxID, 
                        this.activityBtn.node.active && (this.activityBtn.interactable = _d.I.curLevel >= Je.ACTIVITY_OPEN_LEVEL, 
                        this.activityBtn.node.getChildByName("Node").getChildByName("icon_limitactivity").getComponent(k).grayscale = _d.I.curLevel < Je.ACTIVITY_OPEN_LEVEL, 
                        this.lblActivity.string = _d.I.curLevel < Je.ACTIVITY_OPEN_LEVEL ? Je.ACTIVITY_OPEN_LEVEL + "关开启" : this.getEndTime(), 
                        this.activityBtn.interactable ? this.acitivityAnimation.play("anim_activitybtn") : this.acitivityAnimation.stop());
                        for (var t = 0; t < this.activityBtnEffect.length; ++t) this.activityBtnEffect[t].active = _d.I.curLevel >= Je.ACTIVITY_OPEN_LEVEL;
                    }
                }, r.getEndTime = function() {
                    var t = _d.I.CurActivity.split("_"), e = parseInt(t[t.length - 1]), i = br.getParamsInt("event_close_" + e) || 0;
                    br.isWx || (i = Je.ACTIVITY_TEST_CLOSE);
                    var n = Math.floor((i - new Date().getTime()) / 1e3);
                    return Ve.getFormatBySecond(n, 5);
                }, r.onActivityClick = function() {
                    ad.I.openPopwin(td.activityHome), qr.I.dot("Event_GameScene", {
                        id: _d.I.CurActivity
                    }), _d.I.hasActivityClick = !0;
                }, r.checkGameFrame = function() {
                    if (this.frameTime.push(this.fps), this.frameTime.length >= 10) {
                        var t = 0;
                        this.frameTime.forEach(function(e, i) {
                            t += e;
                        }), t /= this.frameTime.length, this.frameTime = [];
                        var e = o.frameRate, i = t / Number(e);
                        o.frameRate = i > .85 ? 60 : 30;
                    }
                }, r.update = function(t) {
                    this.fps = 1 / t;
                }, r.onBtnDrawerClick = function() {
                    var t = this;
                    if (!this.drawerMoving) {
                        this.drawerMoving = !0, this.drawerClick = !this.drawerClick, this.btnDrawer.node.children[0].setScale(this.drawerClick ? -1 : 1, 1, 1), 
                        this.drawerMask.active = this.drawerClick;
                        var e = this.drawerClick ? -150 : 150;
                        !this.drawerClick && this.AuthorizeBtn && this.AuthorizeBtn.destroy(), F(this.layoutDrawer).to(.3, {
                            position: l(this.layoutDrawer.position.x + e, this.layoutDrawer.position.y, this.layoutDrawer.position.z)
                        }).call(function() {
                            t.drawerMoving = !1, t.drawerClick && br.isWx && !je.I.Authorize && _d.I.curLevel >= Je.RANK_OPEN_LEVEL && (t.AuthorizeBtn = $n.I.createAuthorizeBtn(t.btnRank.node, function(e) {
                                t.tryAuthorizeCB(e), br.login(!0);
                            }));
                        }).start(), F(this.btnDrawer.node).to(.3, {
                            position: l(this.btnDrawer.node.position.x + e, this.btnDrawer.node.position.y, this.btnDrawer.node.position.z)
                        }).call(function() {
                            t.drawerMoving = !1;
                        }).start();
                    }
                }, r.checkMission = function() {
                    var t = _d.I.curLevel >= Je.MISSION_OPEN_LEVEL;
                    _d.I.MissionTimer > 0 && Ve.isNewDay(_d.I.MissionTimer) && (Ba.I.initDailyTask(), 
                    Nn.I.emit(sn));
                    var e = !1, i = 0;
                    if (t) for (var n = 0; n < Ba.I.tasks.length; ++n) {
                        var r = fa.I.getMissionByID(Ba.I.tasks[n].id);
                        if (Ba.I.getMissionCounts(Ba.I.tasks[n].type) >= (r.target.length > 1 ? r.target[1] : r.target[0])) {
                            if (_d.I.MissionFlags[n] < 1) {
                                e = !0;
                                break;
                            }
                            i++;
                        }
                    }
                    i > 0 && i >= Ba.I.tasks.length && _d.I.MissionBoxFlag < 1 && (e = !0), Nn.I.emit(un, t, e);
                }, r.updateBtnDrawer = function() {
                    this.btnDrawer.node.active = _d.I.curLevel >= Je.DRAWER_OPEN_LEVEL, this.btnDrawer.node.children[1].active = this.btnMission.node.children[1].active || this.btnMoreGame.node.children[1].active || this.btnRank.node.children[1].active;
                }, r.updateBtnMission = function(t, e) {
                    this.btnMission.interactable = t, this.btnMission.node.getComponent(k).grayscale = !t, 
                    this.btnMission.node.children[0].getComponent(L).string = t ? "每日任务" : Je.MISSION_OPEN_LEVEL + "关开启", 
                    this.btnMission.node.children[1].active = e, this.updateBtnDrawer();
                }, r.updatBtnMoreGame = function() {
                    this.btnMoreGame.node.children[1].active = _d.I.MoreGameShow, this.updateBtnDrawer();
                }, r.updateBtnRank = function() {
                    var t = _d.I.curLevel >= Je.RANK_OPEN_LEVEL;
                    this.btnRank.interactable = t, this.btnRank.node.getComponent(k).grayscale = !t, 
                    this.btnRank.node.children[0].getComponent(L).string = t ? "排行榜" : Je.RANK_OPEN_LEVEL + "关开启", 
                    this.btnRank.node.children[1].active = t && !_d.I.hasRankClick, this.updateBtnDrawer();
                }, r.onBtnMissionClick = function() {
                    ad.I.openPopwin(td.mission), qr.I.dot("Mission_PopLevel");
                }, r.onBtnRankClick = function() {
                    ad.I.openPopwin(td.rankList);
                }, r.onBtnMoreGameClick = function() {
                    ad.I.openPopwin(td.moreGame);
                }, r.showSubView = function(t) {
                    this.subView.enabled != t && (this.subView.enabled = t, this.subView.node.active = t, 
                    t && (this.subView.node.setSiblingIndex(999), $n.I.postMessage("friend", {
                        openid: je.I.OpenId,
                        avatarUrl: _d.I.AvatarUrl,
                        nickname: _d.I.NickName,
                        level: _d.I.curLevel,
                        stars: _d.I.allStar
                    })));
                }, r.tryAuthorizeCB = function(t) {
                    if (t && t.errMsg.indexOf("ok") > -1) {
                        var e = JSON.parse(t.rawData);
                        _d.I.UserInfo = e, je.I.setAuthorize(!0), this.onBtnRankClick(), this.AuthorizeBtn && this.AuthorizeBtn.destroy();
                    } else console.log("授权失败", null == t ? void 0 : t.errMsg), je.I.setAuthorize(!1);
                }, ht(e, [ {
                    key: "levelId",
                    get: function() {
                        return this._levelId;
                    }
                } ]), e;
            }(a), dt(Xc, "BOTTOM", void 0), dt(Xc, "BOOSTER_EFFECT_LAYER", void 0), dt(Xc, "BUBBLE_EFFECT_LAYER", void 0), 
            _c = _t((yc = Jc).prototype, "grid", [ Vu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ic = _t(yc.prototype, "shooter", [ Wu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), wc = _t(yc.prototype, "topView", [ Hu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Sc = _t(yc.prototype, "boosterLayer", [ ju ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Cc = _t(yc.prototype, "boosterItems", [ Yu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Ac = _t(yc.prototype, "scoreBar", [ Ku ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Tc = _t(yc.prototype, "leftBubble", [ qu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), kc = _t(yc.prototype, "touchMask", [ Xu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), xc = _t(yc.prototype, "handPrefab", [ Ju ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ec = _t(yc.prototype, "effectLayer", [ Qu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Bc = _t(yc.prototype, "arrowCon", [ Zu ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Pc = _t(yc.prototype, "guideDesc", [ $u ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Rc = _t(yc.prototype, "customAd", [ tc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Lc = _t(yc.prototype, "onlineGift", [ ec ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Dc = _t(yc.prototype, "selfAd", [ ic ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Oc = _t(yc.prototype, "SelfADList", [ nc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Mc = _t(yc.prototype, "SelfADStay", [ rc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Fc = _t(yc.prototype, "SelfADR", [ oc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Nc = _t(yc.prototype, "activityBtn", [ ac ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zc = _t(yc.prototype, "lblActivity", [ sc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Gc = _t(yc.prototype, "acitivityAnimation", [ lc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Uc = _t(yc.prototype, "activityBtnEffect", [ uc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Vc = _t(yc.prototype, "layoutDrawer", [ hc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Wc = _t(yc.prototype, "btnDrawer", [ dc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Hc = _t(yc.prototype, "btnMission", [ fc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), jc = _t(yc.prototype, "btnMoreGame", [ pc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Yc = _t(yc.prototype, "drawerMask", [ vc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Kc = _t(yc.prototype, "subView", [ bc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), qc = _t(yc.prototype, "btnRank", [ gc ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), mc = yc)) || mc) || mc);
            t._RF.pop(), t._RF.push({}, "6c058o+YFFMw7YSYkJa+8mT", "GoldBar", void 0);
            var ph, vh, bh, gh, mh, yh, _h, Ih, wh, Sh, Ch, Ah, Th, kh = e.ccclass, xh = e.property, Eh = (th = kh("GoldBar"), 
            eh = xh(L), ih = xh(i), nh = xh(V), th((ch = uh = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "goldLabel", ah, mt(e)), 
                    yt(mt(e), "icon", sh, mt(e)), yt(mt(e), "goldPrefab", lh, mt(e)), dt(mt(e), "_gold", void 0), 
                    dt(mt(e), "items", []), dt(mt(e), "a", 3), dt(mt(e), "a2", -3), dt(mt(e), "isUpdate", !1), 
                    dt(mt(e), "callBackFun", null), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.start = function() {
                    Nn.I.on(ta, this.updateGold, this);
                }, i.resetShowOne = function() {
                    e.showOne = this;
                }, i.onEnable = function() {
                    e.rewardOne != this && (e.showOne = this, this.updateGold());
                }, i.onDisable = function() {
                    e.showOne == this && (e.showOne = null);
                }, i.updateGold = function() {
                    this.gold = _d.I.gold;
                }, i.addGold = function() {
                    this.addGoldAD();
                }, i.addGoldAD = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Uo.playAd(zo.gold);

                              case 2:
                                _d.I.addGold(100), qr.I.dot("coinget_VideoGold", {
                                    key: 100
                                }), qr.I.dot("Popwin", {
                                    VideoGold: "receive"
                                });

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.rewardGold = function(t, i) {
                    var n = this;
                    if (e.rewardOne == this) {
                        e.showOne && (this.node.setWorldPosition(e.showOne.node.worldPosition), e.showOne.gold = _d.I.gold), 
                        this.gold = _d.I.gold - t, this.node.active = !0;
                        var r = this.getComponent(G);
                        r || (r = this.addComponent(G)), z.stopAllByTarget(r), r.opacity = 255;
                        var o, a, s = Math.ceil(Math.min(t / 5, 10)), l = t / s, u = this.node.worldPosition, c = 0;
                        i ? (o = i.worldPosition.x, a = i.worldPosition.y) : (o = Ve.winWidth / 2, a = Ve.winHeight / 2), 
                        this.fly(this.node, s, o - u.x, a - u.y, this.icon.position.x, this.icon.position.y, function() {
                            n.gold = Math.min(n.gold + l, _d.I.gold), ++c == s && (e.showOne ? n.node.active = !1 : F(r).to(1, {
                                opacity: 0
                            }).call(function() {
                                n.node.active = !1;
                            }).start());
                        });
                    }
                }, i.fly = function(t, e, i, n, r, o, a) {
                    void 0 === e && (e = 1), e > 0 && (this.isUpdate = !0);
                    var s = 6.28 / e, l = 0;
                    for (this.callBackFun = a, 0 == l && (l = 6.28 * Math.random()); e--; ) {
                        var u = Pn.I.getNode(this.goldPrefab);
                        t.addChild(u), u.setPosition(i, n), this.items.push({
                            item: u,
                            delayAnim: .5 * Math.random(),
                            speed: 0,
                            ex: r,
                            ey: o,
                            speed2: 5 * Math.random() + 26,
                            xDir: Math.cos(l),
                            yDir: Math.sin(l)
                        }), l += s;
                    }
                }, i.clearItems = function() {
                    for (var t = this.items.length - 1; t >= 0; t--) {
                        var e = this.items[t];
                        this.items.splice(t, 1), Pn.I.putNode(e.item);
                    }
                }, i.update = function(t) {
                    if (this.isUpdate) for (var e, i = this.items.length, n = NaN, r = NaN, o = NaN, a = NaN; i--; ) {
                        (e = this.items[i]).delayAnim > 0 && (e.delayAnim -= t);
                        var s = e.item.position.x, l = e.item.position.y;
                        e.speed2 > 10 ? (e.speed2 += this.a2, s += e.xDir * e.speed2 / 1.44, l += e.yDir * e.speed2 / 1.44) : e.speed < 30 && (e.speed += this.a), 
                        e.endXY && (e.ex = e.endXY.x, e.ey = e.endXY.y), (o = (n = e.ex - s) * n + (r = e.ey - l) * r) < 150 ? (this.items.splice(i, 1), 
                        Pn.I.putNode(e.item), this.callBackFun && this.callBackFun(), 0 == this.items.length && (this.isUpdate = !1)) : (a = 1 / Math.sqrt(o), 
                        s += n * e.speed * a / 1.44 + e.xDir * e.speed2 / 1.44, l += r * e.speed * a / 1.44 + e.yDir * e.speed2 / 1.44, 
                        e.item.setPosition(s, l));
                    }
                }, ht(e, [ {
                    key: "gold",
                    get: function() {
                        return this._gold;
                    },
                    set: function(t) {
                        this._gold = t, this.goldLabel.string = "" + Math.floor(t);
                    }
                } ]), e;
            }(a), dt(uh, "showOne", void 0), dt(uh, "rewardOne", void 0), ah = _t((oh = ch).prototype, "goldLabel", [ eh ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), sh = _t(oh.prototype, "icon", [ ih ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), lh = _t(oh.prototype, "goldPrefab", [ nh ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), rh = oh)) || rh);
            t._RF.pop(), t._RF.push({}, "68c2eOXHkVJXa42NwVB2MTj", "PowerBar", void 0);
            var Bh, Ph, Rh, Lh = e.ccclass, Dh = e.property, Oh = (ph = Lh("PowerBar"), vh = Dh(L), 
            bh = Dh(L), gh = Dh(i), mh = Dh(V), ph((Th = Ah = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "powerLabel", Ih, mt(e)), 
                    yt(mt(e), "lblPowerTime", wh, mt(e)), yt(mt(e), "icon", Sh, mt(e)), yt(mt(e), "powerPrefab", Ch, mt(e)), 
                    dt(mt(e), "_power", void 0), dt(mt(e), "items", []), dt(mt(e), "a", 3), dt(mt(e), "a2", -3), 
                    dt(mt(e), "isUpdate", !1), dt(mt(e), "callBackFun", null), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.start = function() {
                    Nn.I.on(oa, this.updatePower, this), this.schedule(this.updatePowerTime, 1);
                }, i.resetShowOne = function() {
                    e.showOne = this;
                }, i.onEnable = function() {
                    e.rewardOne != this && (e.showOne = this, this.updatePower());
                }, i.onDisable = function() {
                    e.showOne == this && (e.showOne = null);
                }, i.updatePower = function() {
                    this.power = _d.I.ActivityPower;
                }, i.addPower = function() {
                    ad.I.openPopwin(td.activityBuy);
                }, i.rewardPower = function(t, i) {
                    var n = this;
                    if (e.rewardOne == this) {
                        e.showOne && (this.node.setWorldPosition(e.showOne.node.worldPosition), e.showOne.power = _d.I.ActivityPower), 
                        this.power = _d.I.ActivityPower - t, this.node.active = !0;
                        var r = this.getComponent(G);
                        r || (r = this.addComponent(G)), z.stopAllByTarget(r), r.opacity = 255;
                        var o, a, s = Math.ceil(Math.min(t / 5, 10)), l = t / s, u = this.node.worldPosition, c = 0;
                        i ? (o = i.worldPosition.x, a = i.worldPosition.y) : (o = Ve.winWidth / 2, a = Ve.winHeight / 2), 
                        this.fly(this.node, s, o - u.x, a - u.y, this.icon.position.x, this.icon.position.y, function() {
                            n.power = Math.min(n.power + l, _d.I.gold), ++c == s && (e.showOne ? n.node.active = !1 : F(r).to(1, {
                                opacity: 0
                            }).call(function() {
                                n.node.active = !1;
                            }).start());
                        });
                    }
                }, i.fly = function(t, e, i, n, r, o, a) {
                    void 0 === e && (e = 1), e > 0 && (this.isUpdate = !0);
                    var s = 6.28 / e, l = 0;
                    for (this.callBackFun = a, 0 == l && (l = 6.28 * Math.random()); e--; ) {
                        var u = Pn.I.getNode(this.powerPrefab);
                        t.addChild(u), u.setPosition(i, n), this.items.push({
                            item: u,
                            delayAnim: .5 * Math.random(),
                            speed: 0,
                            ex: r,
                            ey: o,
                            speed2: 5 * Math.random() + 26,
                            xDir: Math.cos(l),
                            yDir: Math.sin(l)
                        }), l += s;
                    }
                }, i.update = function(t) {
                    if (this.isUpdate) for (var e, i = this.items.length, n = NaN, r = NaN, o = NaN, a = NaN; i--; ) {
                        (e = this.items[i]).delayAnim > 0 && (e.delayAnim -= t);
                        var s = e.item.position.x, l = e.item.position.y;
                        e.speed2 > 10 ? (e.speed2 += this.a2, s += e.xDir * e.speed2 / 1.44, l += e.yDir * e.speed2 / 1.44) : e.speed < 30 && (e.speed += this.a), 
                        e.endXY && (e.ex = e.endXY.x, e.ey = e.endXY.y), (o = (n = e.ex - s) * n + (r = e.ey - l) * r) < 150 ? (this.items.splice(i, 1), 
                        Pn.I.putNode(e.item), this.callBackFun && this.callBackFun(), 0 == this.items.length && (this.isUpdate = !1)) : (a = 1 / Math.sqrt(o), 
                        s += n * e.speed * a / 1.44 + e.xDir * e.speed2 / 1.44, l += r * e.speed * a / 1.44 + e.yDir * e.speed2 / 1.44, 
                        e.item.setPosition(s, l));
                    }
                }, i.getNextTime = function() {
                    var t = _d.I.ActivityPowerTimer + Je.ACTIVITY_POWER_CD, e = Math.floor((t - new Date().getTime()) / 1e3);
                    return e < 0 && (e = 0), Ve.getFormatBySecond(e, 0);
                }, i.updatePowerTime = function() {
                    this.lblPowerTime.string = _d.I.ActivityPower < Je.ACTIVITY_POWER_MAX ? this.getNextTime() : "已满";
                }, ht(e, [ {
                    key: "power",
                    get: function() {
                        return this._power;
                    },
                    set: function(t) {
                        this._power = t, this.powerLabel.string = "" + Math.floor(t), this.updatePowerTime();
                    }
                } ]), e;
            }(a), dt(Ah, "showOne", void 0), dt(Ah, "rewardOne", void 0), Ih = _t((_h = Th).prototype, "powerLabel", [ vh ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), wh = _t(_h.prototype, "lblPowerTime", [ bh ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Sh = _t(_h.prototype, "icon", [ gh ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ch = _t(_h.prototype, "powerPrefab", [ mh ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), yh = _h)) || yh);
            t._RF.pop(), t._RF.push({}, "46fcd9tzRBK5Lc9hT7HCVM6", "PromiseSame", void 0);
            var Mh, Fh = e.ccclass, Nh = (e.property, Fh("PromiseSame")((Rh = Ph = function() {
                function t() {}
                return t.do = function(t, e) {
                    var i = this;
                    return new Promise(function(n, r) {
                        var o = i.queue[e];
                        !o && (o = []), o.push({
                            resolve: n,
                            reject: r
                        }), i.queue[e] = o, 1 == o.length && t().then(function(t) {
                            i.onResolve(t, e);
                        }).catch(function(t) {
                            i.onReject(t, e);
                        });
                    });
                }, t.get = function(t) {
                    var e = this;
                    return new Promise(function(i, n) {
                        var r = e.queue[t];
                        r && r.length ? r.push({
                            resolve: i,
                            reject: n
                        }) : n();
                    });
                }, t.onResolve = function(t, e) {
                    var i = this.queue[e];
                    i && i.forEach(function(e) {
                        e.resolve(t);
                    }), this.queue[e] = [];
                }, t.onReject = function(t, e) {
                    var i = this.queue[e];
                    i && i.forEach(function(e) {
                        e.reject(t);
                    }), this.queue[e] = [];
                }, t;
            }(), dt(Ph, "queue", {}), Bh = Rh)) || Bh);
            t._RF.pop(), t._RF.push({}, "711d5aBqnRMCarszUByoUWw", "BannerManager", void 0);
            var zh, Gh, Uh, Vh, Wh = e.ccclass, Hh = (e.property, Wh("BannerManager")(Mh = function() {
                function t() {
                    dt(this, "DEBUG", !1), dt(this, "banners", {}), dt(this, "keys", []);
                }
                var e = t.prototype;
                return e.showBannerByBottom = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o, a, s, l, u, c, h, d, f;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (i = this, !window.wx) {
                                    t.next = 16;
                                    break;
                                }
                                for (a = zh.Bottom, s = this.banners[a], this.keys.indexOf(a) < 0 && this.keys.push(a), 
                                l = 0; l < this.keys.length; l++) this.keys[l] != a && this.hideBanner(this.keys[l]);
                                if (e <= 260 ? (r = e / 260 * 750, o = 0) : (r = 750, o = e - 260), !s) {
                                    t.next = 12;
                                    break;
                                }
                                u = wx.getSystemInfoSync(), c = u.windowWidth / Ve.winWidth, h = s.style.realWidth, 
                                d = s.style.realHeight, O(r), s.style.width = r * c, O(s.style.width), d *= r * c / h, 
                                O(f = o * c), s.style.top = u.windowHeight - d - f, s.style.left = (u.windowWidth - s.style.width) / 2, 
                                O(s.style), t.next = 15;
                                break;

                              case 12:
                                return t.next = 14, Nh.do(function() {
                                    return i.createBanner(a, r, o);
                                }, "create_banner_" + a);

                              case 14:
                                s = t.sent;

                              case 15:
                                this.DEBUG && console.warn("banner onshow: ", a), 0 == e ? (s.style.left = -9999, 
                                s.hide()) : s.show(), Yn.I.adStat("banner", a, ye.banner, _e.show);

                              case 16:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.showBanner = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o, a, s, l, u;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (i = this, !window.wx) {
                                    t.next = 21;
                                    break;
                                }
                                for (r = this.banners[e], this.keys.indexOf(e) < 0 && this.keys.push(e), o = 0; o < this.keys.length; o++) this.keys[o] != e && this.hideBanner(this.keys[o]);
                                if (!r) {
                                    t.next = 10;
                                    break;
                                }
                                a = wx.getSystemInfoSync(), r.style.left = (a.windowWidth - r.style.realWidth) / 2, 
                                t.next = 20;
                                break;

                              case 10:
                                u = Ve.winHeight, t.t0 = e, t.next = t.t0 === zh.Main ? 14 : t.t0 === zh.Pop ? 16 : 17;
                                break;

                              case 14:
                                return s = Math.min(210 / 260 * u / 1334 * 750, 750), l = 0, t.abrupt("break", 17);

                              case 16:
                                s = 750, l = (u - 1334) / 2;

                              case 17:
                                return t.next = 19, Nh.do(function() {
                                    return i.createBanner(e, s, l);
                                }, "create_banner_" + e);

                              case 19:
                                r = t.sent;

                              case 20:
                                this.DEBUG && console.warn("banner onshow: ", e), r.show();

                              case 21:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.hideBanner = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!window.wx) {
                                    t.next = 11;
                                    break;
                                }
                                if (i = this.banners[e], t.t0 = i, t.t0) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 6, Nh.get("create_banner_" + e);

                              case 6:
                                i = t.sent;

                              case 7:
                                this.DEBUG && console.warn("banner onhide: ", e), i.style.left = -9999, i.hide(), 
                                Yn.I.adStat("banner", e, ye.banner, _e.interrupt);

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.hideAll = function() {
                    if (window.wx) for (var t = 0; t < this.keys.length; t++) this.hideBanner(this.keys[t]);
                }, e.createBanner = function(t, e, i) {
                    var n = this;
                    return new Promise(function(r, o) {
                        var a = wx.createBannerAd({
                            adUnitId: t,
                            style: {
                                left: 0,
                                top: -1e3,
                                width: 0
                            },
                            adIntervals: 120
                        }), s = wx.getSystemInfoSync(), l = s.windowWidth / Ve.winWidth;
                        a.style.width = e * l, i *= l, a.onLoad(function() {
                            a.style.top = s.windowHeight - a.style.realHeight - i, a.style.left = (s.windowWidth - a.style.realWidth) / 2, 
                            a.offLoad(), n.banners[t] = a, r(a), n.DEBUG && console.warn("banner onload: ", t);
                        }), a.onError(function(e) {
                            o(e), n.DEBUG && console.warn("banner onerror: ", t), Yn.I.adStat("banner", t, ye.banner, _e.fail), 
                            Nn.I.emit(en, !0);
                        });
                    });
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return Lo.getInstance(t);
                    }
                } ]), t;
            }()) || Mh);
            !function(t) {
                t[t.Main = "adunit-43432ec63a609ef2"] = "Main", t[t.Pop = "adunit-43432ec63a609ef2"] = "Pop", 
                t[t.Bottom = "adunit-43432ec63a609ef2"] = "Bottom";
            }(zh || (zh = {})), t._RF.pop(), t._RF.push({}, "5fcdcW4mDBOC56uRkCQHtcv", "PromiseAnim", void 0);
            var jh, Yh = e.ccclass, Kh = (e.property, Yh("PromiseAnim")((Vh = Uh = function() {
                function t() {}
                return t.play = function(t, e, i) {
                    var n = this;
                    return new Promise(function(i) {
                        t.play(e || t.clips[0].name), t.on("finished", i), n.list.push([ t, e, i ]);
                    });
                }, t.stop = function(t, e) {
                    var i = this;
                    return new Promise(function(n) {
                        t.stop(), i.list.forEach(function(i) {
                            i[0] == t && i[1] == e && t.off("finished", i[2]);
                        }), n(null);
                    });
                }, t;
            }(), dt(Uh, "list", []), Gh = Vh)) || Gh);
            t._RF.pop(), t._RF.push({}, "b154d7eUf9CJIZnjFuQGpcQ", "UIBase", void 0);
            var qh, Xh, Jh, Qh, Zh = e.ccclass, $h = (e.property, Zh("UIBase")(jh = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "_uiname", void 0), 
                    dt(mt(e), "_closeCb", void 0), dt(mt(e), "_canClose", void 0), dt(mt(e), "layer", qh.popwin), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.initName = function(t) {
                    this._uiname = t;
                }, i.open = function() {
                    var t = this, e = this.getComponent(I);
                    e ? (this._canClose = !1, Kh.play(e).then(function() {
                        t._canClose = !0;
                    })) : this._canClose = !0;
                }, i.close = function() {}, i.onClose = function() {
                    this._closeCb && this._closeCb(), this._closeCb = null;
                }, i.btnClose = function() {
                    var t;
                    if (this._canClose) {
                        for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                        (t = ad.I).closePopwin.apply(t, [ this._uiname ].concat(i));
                    }
                }, i.waitClose = function() {
                    var t = this;
                    return new Promise(function(e) {
                        t._closeCb = e;
                    });
                }, ht(e, [ {
                    key: "bottom",
                    get: function() {
                        var t;
                        return (null === (t = this.node.getChildByName("bottom")) || void 0 === t ? void 0 : t.worldPosition.y) || -1;
                    }
                } ]), e;
            }(a)) || jh);
            !function(t) {
                t[t.game = 0] = "game", t[t.popwin = 1] = "popwin", t[t.reward = 2] = "reward", 
                t[t.modal = 3] = "modal", t[t.hint = 4] = "hint";
            }(qh || (qh = {})), t._RF.pop(), t._RF.push({}, "aae84jOq3VA6KR8DBssbE2m", "UIManager", void 0);
            var td, ed = e.ccclass, id = (e.property, "ui");
            !function(t) {
                t[t.guide = 0] = "guide", t[t.sign = 1] = "sign", t[t.confirm = 2] = "confirm", 
                t[t.bubbleUnlock = 3] = "bubbleUnlock", t[t.levelWin = 4] = "levelWin", t[t.setting = 5] = "setting", 
                t[t.boosterBuy = 6] = "boosterBuy", t[t.receiveGold = 7] = "receiveGold", t[t.relive = 8] = "relive", 
                t[t.hardShop = 9] = "hardShop", t[t.levelFail = 10] = "levelFail", t[t.levelStart = 11] = "levelStart", 
                t[t.home = 12] = "home", t[t.homeSetting = 13] = "homeSetting", t[t.luckyGift = 14] = "luckyGift", 
                t[t.luckyGold = 15] = "luckyGold", t[t.onlineGift = 16] = "onlineGift", t[t.onlineGiftReward = 17] = "onlineGiftReward", 
                t[t.turnTable = 18] = "turnTable", t[t.turnTableAwards = 19] = "turnTableAwards", 
                t[t.versionUpgrade = 20] = "versionUpgrade", t[t.activityResult = 21] = "activityResult", 
                t[t.activityHome = 22] = "activityHome", t[t.activityStart = 23] = "activityStart", 
                t[t.activityBox = 24] = "activityBox", t[t.activityGet = 25] = "activityGet", t[t.activityBuy = 26] = "activityBuy", 
                t[t.activityOpen = 27] = "activityOpen", t[t.activityQuit = 28] = "activityQuit", 
                t[t.activityRestart = 29] = "activityRestart", t[t.activityRule = 30] = "activityRule", 
                t[t.activityPower = 31] = "activityPower", t[t.activityOver = 32] = "activityOver", 
                t[t.mission = 33] = "mission", t[t.missionGet = 34] = "missionGet", t[t.moreGame = 35] = "moreGame", 
                t[t.rankList = 36] = "rankList";
            }(td || (td = {}));
            var nd, rd, od, ad = ed("UIManager")((Qh = Jh = function() {
                function t() {
                    dt(this, "_persistRootNode", null), dt(this, "_dictUI", {}), dt(this, "_dictLoading", {}), 
                    dt(this, "_goldBar", void 0), dt(this, "_powerBar", void 0);
                }
                var e = t.prototype;
                return e.init = function() {
                    if (!this._persistRootNode) {
                        this._persistRootNode = new i("ui"), this._persistRootNode.layer = 33554432, o.addPersistRootNode(this._persistRootNode), 
                        this._persistRootNode.addComponent(K);
                        var t = this._persistRootNode.addComponent(q);
                        t.isAlignTop = t.isAlignBottom = t.isAlignLeft = t.isAlignRight = !0, t.left = t.right = t.top = t.bottom = 0, 
                        Nn.I.on(Ki, this.onBottomChange, this), Nn.I.on(ia, this.showGoldReward, this), 
                        Nn.I.on(ra, this.showPowerReward, this), this.initGoldBar(), this.initPowerBar();
                    }
                }, e.isUIShow = function(t) {
                    if (!this._dictUI.hasOwnProperty(t)) return !1;
                    var e = this._dictUI[t];
                    return X(e) && e.active && e.parent;
                }, e.openPopwin = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o, a, s, l, u = arguments;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this._dictLoading[e]) {
                                    t.next = 22;
                                    break;
                                }
                                if (i = this._dictUI[e], r = !1, t.t0 = i, t.t0) {
                                    t.next = 10;
                                    break;
                                }
                                return this._dictLoading[e] = !0, t.next = 7, this.loadUI(e);

                              case 7:
                                i = t.sent, this._dictLoading[e] || (r = !0), this._dictLoading[e] = !1;

                              case 10:
                                return o = i.getComponent($h), t.next = 13, Ve.wait(.001);

                              case 13:
                                if (this.addUI(o, e), !r) {
                                    t.next = 18;
                                    break;
                                }
                                this.closePopwin(e), t.next = 21;
                                break;

                              case 18:
                                for (a = u.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) s[l - 1] = u[l];
                                return t.next = 21, o.open.apply(o, s);

                              case 21:
                                return t.abrupt("return", (this.onBottomChange(), o));

                              case 22:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.closePopwin = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o, a, s, l = arguments;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this._dictLoading[e] = !1, !this.isUIShow(e)) {
                                    t.next = 9;
                                    break;
                                }
                                for (i = this._dictUI[e], r = i.getComponent($h), o = l.length, a = new Array(o > 1 ? o - 1 : 0), 
                                s = 1; s < o; s++) a[s - 1] = l[s];
                                return t.next = 4, r.close.apply(r, a);

                              case 4:
                                r.onClose(), this._persistRootNode.removeChild(i), this.onBottomChange(), !Eh.showOne && this._goldBar && this._goldBar.resetShowOne(), 
                                !Oh.showOne && this._powerBar && this._powerBar.resetShowOne();

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.closeAll = function() {
                    for (var t in this._dictUI) this.isUIShow(+t) && (this._dictUI[t].getComponent($h)._closeCb = null, 
                    this.closePopwin(+t));
                    !Eh.showOne && this._goldBar && this._goldBar.resetShowOne(), !Oh.showOne && this._powerBar && this._powerBar.resetShowOne();
                }, e.addUI = function(t, e) {
                    for (var i = this._persistRootNode.children, n = 0, r = 0; r < i.length; r++) if (n = r, 
                    i[r].getComponent($h)) {
                        if (i[r].getComponent($h).layer > t.layer) break;
                        r == i.length - 1 && n++;
                    }
                    this._persistRootNode.addChild(t.node), t.node.setSiblingIndex(n), this._goldBar && this._goldBar.node.setSiblingIndex(i.length + 1), 
                    this._powerBar && this._powerBar.node.setSiblingIndex(i.length + 1);
                    for (var o = 0; o < this._persistRootNode.children.length; ++o) "sign" == this._persistRootNode.children[o].name && (this._persistRootNode.children[o].setSiblingIndex(100), 
                    this._goldBar && this._goldBar.node.setSiblingIndex(101));
                    for (var a = 0; a < this._persistRootNode.children.length; ++a) {
                        var s = this._persistRootNode.children[a].getComponentInChildren(Eh);
                        if (s) {
                            s.resetShowOne();
                            break;
                        }
                    }
                    for (var l = 0; l < this._persistRootNode.children.length; ++l) {
                        var u = this._persistRootNode.children[l].getComponentInChildren(Oh);
                        if (u) {
                            u.resetShowOne();
                            break;
                        }
                    }
                }, e.preloadAll = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                for (i in e = [], td) parseInt(i) >= 0 && e.push(this.preloadUI(i));
                                return t.abrupt("return", Promise.all(e));

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.loadUI = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this._dictUI[e]) {
                                    t.next = 11;
                                    break;
                                }
                                if (i = td[e], r = E.getBundle(id), t.t0 = r, t.t0) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 6, this.loadBundle();

                              case 6:
                                r = t.sent;

                              case 7:
                                return t.next = 9, this.loadBundleRes(r, i);

                              case 9:
                                o = t.sent, this._dictUI[e] = m(o), this._dictUI[e].getComponent($h).initName(e);

                              case 11:
                                return t.abrupt("return", this._dictUI[e]);

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.preloadUI = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this._dictUI[e]) {
                                    t.next = 9;
                                    break;
                                }
                                if (i = td[e], r = E.getBundle(id), t.t0 = r, t.t0) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 6, this.loadBundle();

                              case 6:
                                r = t.sent;

                              case 7:
                                return t.next = 9, this.loadBundleRes(r, i);

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.loadBundle = function() {
                    return new Promise(function(t) {
                        E.loadBundle(id, function(e, i) {
                            t(i);
                        });
                    });
                }, e.loadBundleRes = function(t, e) {
                    return new Promise(function(i) {
                        t.load(e, function(t, e) {
                            i(e);
                        });
                    });
                }, e.preloadBundleRes = function(t, e) {
                    return new Promise(function(i) {
                        t.preload(e, function(t, e) {
                            i(e);
                        });
                    });
                }, e.onBottomChange = function() {
                    var t, e, i = null === (t = this._persistRootNode.children[this._persistRootNode.children.length - 1]) || void 0 === t ? void 0 : t.getComponent($h), n = 0;
                    try {
                        n = i && i.bottom > 0 ? i.bottom : fh.BOTTOM;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        t(t);
                    }
                    n >= 210 && (n = Math.min(n, 260), e = !0), this.showBanner(e, n);
                }, e.showBanner = function(t, e) {
                    t ? (Nn.I.emit(en, !1), Hh.I.showBannerByBottom(e)) : (Hh.I.hideAll(), Nn.I.emit(en, !0));
                }, e.initGoldBar = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, mn.loadRes("prefab/common/goldBar");

                              case 2:
                                e = t.sent, i = Pn.I.getNode(e), this._goldBar = i.getComponent(Eh), this._goldBar.node.active = !1, 
                                this._persistRootNode.addChild(this._goldBar.node), Eh.rewardOne = this._goldBar;

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.showGoldReward = function(t, e) {
                    this._goldBar && this._goldBar.rewardGold(t, e);
                }, e.initPowerBar = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, mn.loadRes("prefab/common/powerBar");

                              case 2:
                                e = t.sent, i = Pn.I.getNode(e), this._powerBar = i.getComponent(Oh), this._powerBar.node.active = !1, 
                                this._persistRootNode.addChild(this._powerBar.node), Oh.rewardOne = this._powerBar;

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.showPowerReward = function(t, e) {
                    this._powerBar && this._powerBar.rewardPower(t, e);
                }, e.isPopWin = function(t) {
                    for (var e = 0; e < this._persistRootNode.children.length; ++e) if (this._persistRootNode.children[e].name == td[t]) return !0;
                    return !1;
                }, e.addToUITop = function(t) {
                    this._persistRootNode.addChild(t), t.setSiblingIndex(999);
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t(), this._instance.init()), this._instance;
                    }
                } ]), t;
            }(), dt(Jh, "_instance", void 0), Xh = Qh)) || Xh;
            t._RF.pop(), t._RF.push({}, "8dcb3yEDR1LQ4Og36dHfJgt", "UserManager", void 0);
            var sd, ld, ud, cd, hd, dd, fd, pd, vd, bd, gd, md, yd = e.ccclass, _d = (e.property, 
            yd("UserManager")((od = rd = function() {
                function t() {
                    dt(this, "data", void 0), dt(this, "serverIsLoad", !1), this.load();
                }
                var e = t.prototype;
                return e.initData = function() {
                    var t = new Id();
                    t.seed = Ve.randomInt(1, 1e4), t.gold = 0, t.level = 1, t.lastTimeLevel = 1, t.music = !0, 
                    t.sound = !0, t.stars = [], t.scores = [], t.boosters = [ 0, 0, 0, 0 ], t.index = 1, 
                    t.intAdPassLevel = 0, t.lastIntAddTime = 0, t.luckyPassLevel = 3, t.nextLuckGiftType = 0, 
                    t.boosterUnlock = [ !1, !1, !1, !1 ], t.lastOnlineTime = 0, t.curOnlineTime = 0, 
                    t.onlineGiftCnt = 0, t.lastSignTime = 0, t.curSignDay = 0, t.popSign = !0, t.turnTableStars = 0, 
                    t.turnTableCounts = 0, t.turnTableTimer = 0, t.subscribeSign = !1, t.subscribeWheel = !1, 
                    t.subscribeSignTimer = 0, t.subscribeWheelTimer = 0, t.curActivity = "", t.activityLevel = 1000001, 
                    t.activityPower = 7, t.activityPowerTimer = 0, t.MissionDay = -1, t.MissionCounts = [], 
                    t.MissionFlags = [], t.MissionTimer = 0, t.MissionBoxFlag = 0, t.moreGameTimer = 0;
                    for (var e = 0; e < fa.I.getMissionKindByDay(1).detail.length; ++e) t.MissionCounts.push(0), 
                    t.MissionFlags.push(0);
                    return t.nickName = "", t.avatarUrl = "", t.userInfo = "", t.weekLevel = 0, t.weekStars = 0, 
                    t.weekTimer = 0, t.curVersion = "", t;
                }, e.passLevel = function(t, e, i) {
                    var n = this.getLevelStar(t);
                    n < e && (this.data.stars[t] = e, this.checkNewWeek(), this.WeekStars += e - n, 
                    je.I.Authorize && (br.updateRankData({
                        stars: this.allStar,
                        level: this.curLevel,
                        weekLevel: this.WeekLevel,
                        weekStars: this.WeekStars,
                        weekTimer: this.WeekTimer
                    }), nr.I.setUserCloudStorage({
                        stars: this.allStar,
                        level: this.curLevel,
                        weekLevel: this.WeekLevel,
                        weekStars: this.WeekStars,
                        weekTimer: this.WeekTimer
                    }))), this.getLevelScore(t) < i && (this.data.scores[t] = i);
                    var r = 0;
                    (t += 1) > this.data.level && (this.data.level = t, r = Je.LEVEL_REWARD, this.gold += r, 
                    this.checkNewWeek(), this.WeekLevel++, je.I.Authorize && (br.totalrankAdd("all", t), 
                    br.totalrankAdd("week", this.WeekLevel, 2)));
                    for (var o = 0; o < Je.BOOSTER_UNLOCK.length; o++) this.data.level == Je.BOOSTER_UNLOCK[o] && Mn.I.preloadBoosterEffect(o);
                    return this.data.lastIntAddTime > 0 && (this.data.intAdPassLevel += 1), this.data.nextLuckGiftType > 0 && (this.data.luckyPassLevel += 1), 
                    this.save(), r;
                }, e.setLevel = function(t) {
                    this.data.level = t, this.save();
                }, e.getLevelStar = function(t) {
                    return this.data.stars[t] || 0;
                }, e.getLevelScore = function(t) {
                    return this.data.scores[t] || 0;
                }, e.checkUnlock = function(t) {
                    return null != this.data.stars[t] || null != this.data.stars[t - 1] || 1 == t;
                }, e.useBooster = function(t) {
                    this.data.boosters[t]--, this.save(), Nn.I.emit(ea, t);
                }, e.buyBootser = function(t) {
                    var e = Je.BOOSTER_CONF[t][1];
                    this.gold -= +e, Nn.I.emit(ta), this.addBooster(t, 1), this.save();
                }, e.updatePrice = function(t) {
                    this.gold += +t, Nn.I.emit(ta), this.save();
                }, e.addBooster = function(t, e) {
                    this.data.boosters[t] += e, this.unlockBooster(t), Nn.I.emit(ea, t), this.save();
                }, e.getBoosterCnt = function(t) {
                    return this.data.boosters[t];
                }, e.unlockBooster = function(t) {
                    this.data.boosterUnlock[t] = !0, this.save();
                }, e.checkBoosterUnlock = function(t) {
                    return this.data.boosterUnlock[t];
                }, e.checkHasGuide = function(t) {
                    return this.curLevel != t;
                }, e.addGold = function(t, e) {
                    this.gold += t, Nn.I.emit(ia, t, e);
                }, e.recordIntAd = function() {
                    this.data.intAdPassLevel = 0, this.data.lastIntAddTime = Date.now(), this.save();
                }, e.recordLuckyGift = function(t) {
                    this.data.luckyPassLevel = 0, this.data.nextLuckGiftType = t, this.save();
                }, e.updateSound = function() {
                    wn.I.setMusic(this.music ? 1 : 0), wn.I.setSound(this.sound ? 1 : 0);
                }, e.onlineRecord = function() {
                    this.data.level < 13 || (Ve.isNewDay(this.data.lastOnlineTime) && (this.data.onlineGiftCnt = 0, 
                    this.data.curOnlineTime = 0), this.data.lastOnlineTime = Date.now(), this.save());
                }, e.offlineRecord = function() {
                    this.data.curOnlineTime = this.onlineTime, this.data.lastOnlineTime = Date.now(), 
                    this.save();
                }, e.onlineGiftReceive = function() {
                    this.data.lastOnlineTime = Date.now(), this.data.curOnlineTime = 0, this.data.onlineGiftCnt++, 
                    Nn.I.emit(na), this.save();
                }, e.sign = function() {
                    this.data.curSignDay += 1, this.data.lastSignTime = Date.now(), Nn.I.emit("SIGN_CHANGE"), 
                    this.save();
                }, e.popSign = function() {
                    this.data.popSign = !1, this.save();
                }, e.chearWheel = function() {
                    this.data.turnTableStars = 0, this.data.turnTableCounts = 0, this.data.turnTableTimer = new Date().getTime(), 
                    this.save();
                }, e.addTurnTableCounts = function(t, e) {
                    this.turnTableCounts += t, this.turnTableStars -= e, this.save();
                }, e.clear = function() {
                    this.data = this.initData(), Ba.I.clearMission(), this.save(), this.saveServerData();
                }, e.load = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e = He.I.getConfigData("bubble_shooter_user"), i = e ? JSON.parse(e) : {}, this.data = ft({}, this.initData(), i), 
                                this.save();

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.save = function() {
                    He.I.setConfigData("bubble_shooter_user", JSON.stringify(this.data));
                }, e.loadServerData = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i, r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, ur.game.getData("user");

                              case 2:
                                e = t.sent, (i = e && e.data && e.data.content) && (i = JSON.parse(i)).index > this.data.index && (r = ft({}, this.data, i), 
                                this.data = r, this.save(), ad.I.closeAll(), Nn.I.emit(Ri, this.data.level)), this.serverIsLoad = !0;

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e.saveServerData = function() {
                    this.serverIsLoad && (this.data.index++, this.save(), He.I.scheduleSave(), ur.game.saveData("user", JSON.stringify(this.data)));
                }, e.subscribeSign = function() {
                    var t = Ve.getTomorrowHourTime(Je.SUBSCRIBE_SIGN_TIME);
                    nr.I.sendSubScribe([ Ct.subscribeIds[0] ], JSON.stringify({
                        thing10: {
                            value: "每日签到"
                        },
                        thing3: {
                            value: "免费领取金币、道具"
                        }
                    }), t / 1e3);
                }, e.subscribeWheel = function() {
                    var t = Ve.getTomorrowHourTime(Je.SUBSCRIBE_WHEEL_TIME);
                    nr.I.sendSubScribe([ Ct.subscribeIds[1] ], JSON.stringify({
                        thing1: {
                            value: "每日幸运转盘"
                        },
                        thing5: {
                            value: "免费金币、道具"
                        }
                    }), t / 1e3);
                }, e.clearSubscribeData = function() {
                    this.data.subscribeSign = !1, this.data.subscribeWheel = !1, this.data.subscribeSignTimer = 0, 
                    this.data.subscribeWheelTimer = 0;
                }, e.passActivity = function(t) {
                    var e;
                    return t <= da.I.actMapMaxID && this.ActivityLevel++, e = Je.LEVEL_REWARD, this.gold += e, 
                    this.save(), e;
                }, e.addPower = function(t, e) {
                    this.ActivityPower += t, Nn.I.emit(ra, t, e), this.save();
                }, e.initActivity = function() {
                    var t = ut(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, fa.I.loadActivityConfig(e);

                              case 2:
                                console.log("活动初始化", this.data.curActivity + "=>" + e), this.data.curActivity = e, 
                                this.data.activityLevel = 1000001, this.data.activityPower = 7, this.data.activityPowerTimer = 0, 
                                this.save();

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e.checkActivityOpen = function(t, e, i) {
                    var n = new Date().getTime();
                    if (n >= t && n <= e) {
                        if (i != this.data.curActivity) return this.initActivity(i), !0;
                    } else i == this.data.curActivity && (console.log("活动关闭", this.data.curActivity, this.data.activityLevel), 
                    this.data.curActivity = "");
                    return !1;
                }, e.checkForActivityPower = function() {
                    if (!(this.data.activityPowerTimer <= 0)) {
                        var t = new Date().getTime() - this.data.activityPowerTimer;
                        if (t >= Je.ACTIVITY_POWER_CD) {
                            var e = Math.floor(t / Je.ACTIVITY_POWER_CD);
                            this.ActivityPower + e >= Je.ACTIVITY_POWER_MAX && (e = Je.ACTIVITY_POWER_MAX - this.ActivityPower), 
                            this.data.activityPowerTimer += Je.ACTIVITY_POWER_CD * e, this.ActivityPower += e;
                        }
                    }
                }, e.setMissionCounts = function(t) {
                    for (var e = 0; e < t.length; ++e) this.data.MissionCounts[e] = t[e].counts;
                    this.save();
                }, e.setMissionFlag = function(t) {
                    this.data.MissionFlags[t] = 1, this.save();
                }, e.checkNewWeek = function() {
                    Ve.isNewWeek(this.WeekTimer) && (this.data.weekLevel = 0, this.data.weekStars = 0);
                }, ht(t, [ {
                    key: "curLevel",
                    get: function() {
                        return this.data.level;
                    }
                }, {
                    key: "lastTimeLevel",
                    get: function() {
                        return this.data.lastTimeLevel;
                    },
                    set: function(t) {
                        this.data.lastTimeLevel = t, this.save();
                    }
                }, {
                    key: "onlineTime",
                    get: function() {
                        return this.data.curOnlineTime + Date.now() - this.data.lastOnlineTime;
                    }
                }, {
                    key: "onlineGiftCnt",
                    get: function() {
                        return this.data.onlineGiftCnt;
                    }
                }, {
                    key: "intAdPassLevelCnt",
                    get: function() {
                        return this.data.intAdPassLevel;
                    }
                }, {
                    key: "lastIntAdTime",
                    get: function() {
                        return this.data.lastIntAddTime;
                    }
                }, {
                    key: "luckyPassLevel",
                    get: function() {
                        return this.data.luckyPassLevel;
                    }
                }, {
                    key: "nextLucktType",
                    get: function() {
                        return this.data.nextLuckGiftType;
                    }
                }, {
                    key: "allStar",
                    get: function() {
                        var t = 0;
                        return this.data.stars.forEach(function(e) {
                            t += e || 0;
                        }), t;
                    }
                }, {
                    key: "sound",
                    get: function() {
                        return this.data.sound;
                    }
                }, {
                    key: "music",
                    get: function() {
                        return this.data.music;
                    }
                }, {
                    key: "gold",
                    get: function() {
                        return this.data.gold;
                    },
                    set: function(t) {
                        t < this.data.gold && Ba.I.addDailyTaskCounts(Aa.coinUse, this.data.gold - t), this.data.gold = t, 
                        this.save();
                    }
                }, {
                    key: "seed",
                    get: function() {
                        return this.data.seed;
                    }
                }, {
                    key: "hasSign",
                    get: function() {
                        return !Ve.isNewDay(this.data.lastSignTime);
                    }
                }, {
                    key: "curSignDay",
                    get: function() {
                        return this.data.curSignDay;
                    }
                }, {
                    key: "toPopSign",
                    get: function() {
                        return this.data.popSign;
                    }
                }, {
                    key: "turnTableStars",
                    get: function() {
                        return this.data.turnTableStars;
                    },
                    set: function(t) {
                        this.data.turnTableStars = t, this.data.turnTableTimer = new Date().getTime(), this.save();
                    }
                }, {
                    key: "turnTableCounts",
                    get: function() {
                        return this.data.turnTableCounts;
                    },
                    set: function(t) {
                        this.data.turnTableCounts++, this.save();
                    }
                }, {
                    key: "hasWheel",
                    get: function() {
                        return !Ve.isNewDay(this.data.turnTableTimer);
                    }
                }, {
                    key: "SubscribeSign",
                    get: function() {
                        return Ve.isNewDay(this.data.subscribeSignTimer) && (this.data.subscribeSign = !1), 
                        this.data.subscribeSign;
                    },
                    set: function(t) {
                        this.data.subscribeSign = t, this.data.subscribeSignTimer = new Date().getTime();
                    }
                }, {
                    key: "SubscribeWheel",
                    get: function() {
                        return Ve.isNewDay(this.data.subscribeWheelTimer) && (this.data.subscribeWheel = !1), 
                        this.data.subscribeWheel;
                    },
                    set: function(t) {
                        this.data.subscribeWheel = t, this.data.subscribeWheelTimer = new Date().getTime();
                    }
                }, {
                    key: "NewSign",
                    get: function() {
                        return this.data.newSign;
                    },
                    set: function(t) {
                        this.data.newSign = t, this.save();
                    }
                }, {
                    key: "ActivityLevel",
                    get: function() {
                        return this.data.activityLevel;
                    },
                    set: function(t) {
                        this.data.activityLevel = t;
                    }
                }, {
                    key: "ActivityPower",
                    get: function() {
                        return this.data.activityPower;
                    },
                    set: function(t) {
                        this.data.activityPower = t, t < Je.ACTIVITY_POWER_MAX && 0 == this.data.activityPowerTimer && (this.data.activityPowerTimer = new Date().getTime()), 
                        this.data.activityPower >= Je.ACTIVITY_POWER_MAX && (this.data.activityPowerTimer = 0), 
                        Nn.I.emit(oa, this.data.activityPower);
                    }
                }, {
                    key: "ActivityPowerTimer",
                    get: function() {
                        return this.data.activityPowerTimer;
                    }
                }, {
                    key: "CurActivity",
                    get: function() {
                        return this.data.curActivity;
                    }
                }, {
                    key: "hasActivityClick",
                    get: function() {
                        var t = parseInt(localStorage.getItem("ActivityClick") || "0");
                        return t > 0 && Ve.isNewDay(t) && (t = 0), t > 0;
                    },
                    set: function(t) {
                        localStorage.setItem("ActivityClick", new Date().getTime().toString()), Nn.I.emit(aa);
                    }
                }, {
                    key: "MissionCounts",
                    get: function() {
                        return this.data.MissionCounts;
                    }
                }, {
                    key: "MissionFlags",
                    get: function() {
                        return this.data.MissionFlags;
                    },
                    set: function(t) {
                        this.data.MissionFlags = t, this.save();
                    }
                }, {
                    key: "MissionTimer",
                    get: function() {
                        var t = this.data.MissionTimer;
                        return Ve.isNewDay(t) && (t = 0), t;
                    },
                    set: function(t) {
                        this.data.MissionTimer = t, this.save();
                    }
                }, {
                    key: "MissionBoxFlag",
                    get: function() {
                        return this.data.MissionBoxFlag;
                    },
                    set: function(t) {
                        this.data.MissionBoxFlag = t, this.save();
                    }
                }, {
                    key: "MissionDay",
                    get: function() {
                        return this.data.MissionDay;
                    },
                    set: function(t) {
                        this.data.MissionDay = t, this.save();
                    }
                }, {
                    key: "MoreGameTimer",
                    get: function() {
                        var t = this.data.moreGameTimer;
                        return t > 0 && Ve.isNewDay(t) && (t = 0), t;
                    },
                    set: function(t) {
                        this.data.moreGameTimer = t, this.save();
                    }
                }, {
                    key: "MoreGameShow",
                    get: function() {
                        return 0 == this.MoreGameTimer;
                    }
                }, {
                    key: "NickName",
                    get: function() {
                        return this.data.nickName;
                    }
                }, {
                    key: "AvatarUrl",
                    get: function() {
                        return this.data.avatarUrl;
                    }
                }, {
                    key: "UserInfo",
                    get: function() {
                        return "" == this.data.userInfo ? null : JSON.parse(this.data.userInfo);
                    },
                    set: function(t) {
                        this.data.nickName = t.nickName, this.data.avatarUrl = t.avatarUrl, this.data.userInfo = JSON.stringify(t), 
                        this.save();
                    }
                }, {
                    key: "WeekTimer",
                    get: function() {
                        return this.data.weekTimer;
                    },
                    set: function(t) {
                        this.data.weekTimer = t, this.save();
                    }
                }, {
                    key: "WeekLevel",
                    get: function() {
                        return this.data.weekLevel;
                    },
                    set: function(t) {
                        this.data.weekLevel = t, this.WeekTimer = new Date().getTime();
                    }
                }, {
                    key: "WeekStars",
                    get: function() {
                        return this.data.weekStars;
                    },
                    set: function(t) {
                        this.data.weekStars = t, this.WeekTimer = new Date().getTime();
                    }
                }, {
                    key: "hasRankClick",
                    get: function() {
                        var t = parseInt(localStorage.getItem("RankClick") || "0");
                        return t > 0 && Ve.isNewDay(t) && (t = 0), t > 0;
                    },
                    set: function(t) {
                        localStorage.setItem("RankClick", new Date().getTime().toString()), Nn.I.emit(aa);
                    }
                }, {
                    key: "CurVersion",
                    get: function() {
                        return this.data.curVersion;
                    },
                    set: function(t) {
                        this.data.curVersion = t, this.save();
                    }
                } ], [ {
                    key: "I",
                    get: function() {
                        return this._instance || (this._instance = new t()), this._instance;
                    }
                } ]), t;
            }(), dt(rd, "_instance", void 0), nd = od)) || nd), Id = function() {
                dt(this, "seed", void 0), dt(this, "index", void 0), dt(this, "gold", void 0), dt(this, "level", void 0), 
                dt(this, "lastTimeLevel", void 0), dt(this, "sound", void 0), dt(this, "music", void 0), 
                dt(this, "stars", void 0), dt(this, "scores", void 0), dt(this, "boosters", void 0), 
                dt(this, "boosterUnlock", void 0), dt(this, "intAdPassLevel", void 0), dt(this, "lastIntAddTime", void 0), 
                dt(this, "luckyPassLevel", void 0), dt(this, "nextLuckGiftType", void 0), dt(this, "lastOnlineTime", void 0), 
                dt(this, "curOnlineTime", void 0), dt(this, "onlineGiftCnt", void 0), dt(this, "lastSignTime", void 0), 
                dt(this, "curSignDay", void 0), dt(this, "popSign", void 0), dt(this, "turnTableStars", void 0), 
                dt(this, "turnTableCounts", void 0), dt(this, "turnTableTimer", void 0), dt(this, "subscribeSign", void 0), 
                dt(this, "subscribeSignTimer", void 0), dt(this, "subscribeWheel", void 0), dt(this, "subscribeWheelTimer", void 0), 
                dt(this, "newSign", void 0), dt(this, "curActivity", void 0), dt(this, "activityLevel", void 0), 
                dt(this, "activityPower", void 0), dt(this, "activityPowerTimer", void 0), dt(this, "MissionDay", void 0), 
                dt(this, "MissionCounts", void 0), dt(this, "MissionFlags", void 0), dt(this, "MissionTimer", void 0), 
                dt(this, "MissionBoxFlag", void 0), dt(this, "moreGameTimer", void 0), dt(this, "nickName", void 0), 
                dt(this, "avatarUrl", void 0), dt(this, "userInfo", void 0), dt(this, "weekLevel", void 0), 
                dt(this, "weekStars", void 0), dt(this, "weekTimer", void 0), dt(this, "curVersion", void 0);
            };
            t._RF.pop(), t._RF.push({}, "0700cVf+sBBQbFeSO2xs4rG", "BoosterBuyPopwin", void 0);
            var wd, Sd, Cd, Ad, Td, kd, xd, Ed, Bd, Pd, Rd, Ld, Dd, Od, Md, Fd, Nd, zd, Gd, Ud, Vd, Wd = e.ccclass, Hd = e.property;
            sd = Wd("BoosterBuyPopwin"), ld = Hd(L), ud = Hd(L), cd = Hd(L), hd = Hd(Bo), dd = Hd(k), 
            sd((pd = _t((fd = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "title", pd, mt(e)), 
                    yt(mt(e), "desc", vd, mt(e)), yt(mt(e), "price", bd, mt(e)), yt(mt(e), "icon", gd, mt(e)), 
                    yt(mt(e), "buyBtn", md, mt(e)), dt(mt(e), "_price", void 0), dt(mt(e), "_type", void 0), 
                    dt(mt(e), "outLineColor1", J(24, 129, 83)), dt(mt(e), "outLineColor2", J(0, 0, 0)), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop);
                    var i = Je.BOOSTER_CONF[e];
                    this.icon.type = e, this.title.string = "" + i[0], this.price.string = "" + i[1], 
                    this.desc.string = "" + i[2], this._price = +i[1], this._type = e, this.price.color = W.WHITE, 
                    this.price.getComponent(Q).color = this.outLineColor1, this.buyBtn.grayscale = !1, 
                    qr.I.dot("Popwin", {
                        PropBuy: "show"
                    });
                }, i.buy = function() {
                    _d.I.gold >= this._price ? (qr.I.dot("coinuse_" + this._type, {
                        key: 1
                    }), _d.I.buyBootser(this._type), this.btnClose(), qr.I.levelRunning(u("Canvas/GameScene").getComponent(fh).levelId, null, null, "award", this._type, Je.BOOSTER_CONF[this._type][0], 1), 
                    Nn.I.emit(wi, this._type), qr.I.dot("Popwin", {
                        PropBuy: "buy_" + this._type
                    })) : ad.I.openPopwin(td.receiveGold);
                }, i.skip = function() {
                    this.btnClose(), qr.I.dot("Popwin", {
                        PropBuy: "close"
                    });
                }, e;
            }($h)).prototype, "title", [ ld ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), vd = _t(fd.prototype, "desc", [ ud ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), bd = _t(fd.prototype, "price", [ cd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), gd = _t(fd.prototype, "icon", [ hd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), md = _t(fd.prototype, "buyBtn", [ dd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), fd)), t._RF.pop(), t._RF.push({}, "c519fLCEC9O+oV+IhgIiVL0", "MissionModel", void 0);
            var jd, Yd, Kd, qd, Xd, Jd, Qd, Zd, $d, tf, ef, nf, rf, of, af, sf, lf, uf, cf, hf, df, ff, pf, vf, bf, gf, mf, yf, _f = e.ccclass, If = e.property, wf = (wd = _f("MissionModel"), 
            Sd = If(L), Cd = If(U), Ad = If(L), Td = If(k), kd = If(L), xd = If(R), Ed = If(L), 
            Bd = If(b), Pd = If(b), wd((Dd = _t((Ld = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "content", Dd, mt(e)), 
                    yt(mt(e), "progress", Od, mt(e)), yt(mt(e), "counts", Md, mt(e)), yt(mt(e), "icon", Fd, mt(e)), 
                    yt(mt(e), "reward", Nd, mt(e)), yt(mt(e), "btn", zd, mt(e)), yt(mt(e), "state", Gd, mt(e)), 
                    yt(mt(e), "itemRes", Ud, mt(e)), yt(mt(e), "btnRes", Vd, mt(e)), dt(mt(e), "index", 0), 
                    dt(mt(e), "mission", null), dt(mt(e), "curNum", 0), dt(mt(e), "target", 0), dt(mt(e), "propName", [ "炸弹", "闪电", "彩虹", "火箭" ]), 
                    dt(mt(e), "ballName", [ "红色", "黄色", "蓝色", "绿色", "紫色", "青色" ]), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.initModel = function(t, e) {
                    this.index = t, this.mission = e, this.content.string = this.getMissionContent(), 
                    this.curNum = Ba.I.getMissionCounts(e.id), this.target = e.target[0], e.target.length > 1 && (this.target = e.target[1]), 
                    this.curNum > this.target && (this.curNum = this.target), this.counts.string = this.curNum + "/" + this.target, 
                    this.progress.progress = this.curNum / this.target, this.icon.spriteFrame = this.itemRes[e.reward.id], 
                    this.reward.string = e.reward.num.toString(), this.updateBtn(), Nn.I.on(ln, this.updateBtn, this);
                }, i.getMissionContent = function() {
                    return this.mission.id >= 4 && this.mission.id <= 7 ? this.mission.ref.format(this.propName[this.mission.target[0] - 1], this.mission.target[1]) : this.mission.id >= 9 && this.mission.id <= 14 ? this.mission.ref.format(this.ballName[this.mission.target[0] - 1], this.mission.target[1]) : this.mission.target.length > 1 ? this.mission.ref.format(this.mission.target[0], this.mission.target[1]) : this.mission.ref.format(this.mission.target[0]);
                }, i.onBtnClick = function() {
                    this.curNum >= this.target ? ad.I.openPopwin(td.missionGet, this.index) : ad.I.isPopWin(td.home) ? (ad.I.openPopwin(td.levelStart, _d.I.curLevel), 
                    qr.I.dot("Mission_Play", {
                        id: this.mission.id
                    })) : Nn.I.emit(an);
                }, i.updateBtn = function() {
                    var t = _d.I.MissionFlags[this.index];
                    this.btn.interactable = t < 1, this.btn.node.getComponent(G).opacity = t < 1 ? 255 : 153;
                    var e = this.btn.node.getComponent(k);
                    e.grayscale = t > 0, this.state.string = t > 0 ? "已完成" : this.curNum >= this.target ? "领奖" : "去完成", 
                    e.spriteFrame = this.btnRes["领奖" == this.state.string ? 1 : 0];
                }, e;
            }($h)).prototype, "content", [ Sd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Od = _t(Ld.prototype, "progress", [ Cd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Md = _t(Ld.prototype, "counts", [ Ad ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Fd = _t(Ld.prototype, "icon", [ Td ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Nd = _t(Ld.prototype, "reward", [ kd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zd = _t(Ld.prototype, "btn", [ xd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Gd = _t(Ld.prototype, "state", [ Ed ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ud = _t(Ld.prototype, "itemRes", [ Bd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Vd = _t(Ld.prototype, "btnRes", [ Pd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Rd = Ld)) || Rd);
            t._RF.pop(), t._RF.push({}, "0ccddmhOTpEn7d8UamDmfdv", "MissionPopwin", void 0);
            var Sf, Cf = e.ccclass, Af = e.property;
            jd = Cf("MissionPopwin"), Yd = Af(L), Kd = Af(U), qd = Af(L), Xd = Af(i), Jd = Af(V), 
            Qd = Af(i), Zd = Af(i), $d = Af(i), tf = Af(i), ef = Af(i), nf = Af(i), rf = Af(b), 
            of = Af(b), jd((sf = _t((af = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "lblBox", sf, mt(e)), 
                    yt(mt(e), "progressBox", lf, mt(e)), yt(mt(e), "lblCounts", uf, mt(e)), yt(mt(e), "content", cf, mt(e)), 
                    yt(mt(e), "model", hf, mt(e)), yt(mt(e), "boxReward", df, mt(e)), yt(mt(e), "itemContent", ff, mt(e)), 
                    yt(mt(e), "item", pf, mt(e)), yt(mt(e), "btnBox", vf, mt(e)), yt(mt(e), "boxAnimation", bf, mt(e)), 
                    yt(mt(e), "boxEffect", gf, mt(e)), yt(mt(e), "itemRes", mf, mt(e)), yt(mt(e), "boxRes", yf, mt(e)), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    Nn.I.on(an, this.btnClose, this), Nn.I.on(sn, this.init, this), Nn.I.on(ln, this.init, this);
                }, i.open = function() {
                    t.prototype.open.call(this), this.init();
                }, i.init = function() {
                    this.onBoxClose(), this.initPanel(), this.initMission();
                }, i.initPanel = function() {
                    var t = this.getFinishCounts();
                    _d.I.MissionBoxFlag > 0 ? this.lblBox.string = "您已领取今日奖励请明日再来" : t >= _d.I.MissionFlags.length ? this.lblBox.string = "已完成全部任务请领取今日奖励" : this.lblBox.string = "完成全部任务以领取今日奖励", 
                    this.progressBox.progress = t / _d.I.MissionFlags.length, this.lblCounts.string = t + "/" + _d.I.MissionFlags.length, 
                    this.btnBox.getComponent(k).spriteFrame = this.boxRes[_d.I.MissionBoxFlag > 0 ? 1 : 0], 
                    this.boxEffect.active = _d.I.MissionBoxFlag < 1 && t >= _d.I.MissionFlags.length;
                }, i.initMission = function() {
                    this.content.removeAllChildren();
                    for (var t = 0; t < Ba.I.tasks.length; ++t) {
                        var e = m(this.model);
                        e.parent = this.content, e.getComponent(wf).initModel(t, fa.I.getMissionByID(Ba.I.tasks[t].id));
                    }
                }, i.getFinishCounts = function() {
                    for (var t = 0, e = 0; e < _d.I.MissionFlags.length; ++e) _d.I.MissionFlags[e] > 0 && t++;
                    return t;
                }, i.onBoxClick = function() {
                    var t = this;
                    if (!(_d.I.MissionBoxFlag > 0)) if (this.getFinishCounts() >= _d.I.MissionFlags.length) {
                        var e = m(this.boxAnimation);
                        e.parent = this.boxAnimation.parent, this.btnBox.active = !1, e.active = !0;
                        var i = e.getComponent(I);
                        i.play("anim_box"), i.on(H.EventType.FINISHED, function() {
                            t.btnBox.getComponent(k).spriteFrame = t.boxRes[1], t.btnBox.active = !0, t.boxEffect.active = !1, 
                            e.removeFromParent(), ad.I.openPopwin(td.missionGet);
                        });
                    } else this.boxReward.active = !0, this.initReward();
                }, i.onBoxClose = function() {
                    this.boxReward.active = !1;
                }, i.initReward = function() {
                    this.itemContent.removeAllChildren();
                    for (var t = fa.I.getMissionKindByDay(_d.I.MissionDay), e = 0; e < t.reward.length; ++e) {
                        var i = m(this.item);
                        i.parent = this.itemContent, i.active = !0, i.getComponent(k).spriteFrame = this.itemRes[t.reward[e].id], 
                        i.getChildByName("num").getComponent(L).string = "X" + t.reward[e].num;
                    }
                }, e;
            }($h)).prototype, "lblBox", [ Yd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), lf = _t(af.prototype, "progressBox", [ Kd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), uf = _t(af.prototype, "lblCounts", [ qd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), cf = _t(af.prototype, "content", [ Xd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), hf = _t(af.prototype, "model", [ Jd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), df = _t(af.prototype, "boxReward", [ Qd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ff = _t(af.prototype, "itemContent", [ Zd ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), pf = _t(af.prototype, "item", [ $d ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), vf = _t(af.prototype, "btnBox", [ tf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), bf = _t(af.prototype, "boxAnimation", [ ef ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), gf = _t(af.prototype, "boxEffect", [ nf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), mf = _t(af.prototype, "itemRes", [ rf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), yf = _t(af.prototype, "boxRes", [ of ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), af)), t._RF.pop(), t._RF.push({}, "0d964KPJEpOO5Zfot2gbjZm", "Metal", void 0);
            var Tf, kf, xf, Ef, Bf, Pf, Rf, Lf, Df, Of, Mf, Ff, Nf, zf, Gf, Uf = e.ccclass;
            e.property, Uf(Sf = (0, e.menu)("game/bubble/Metal")(Sf = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e;
            }(Ss)) || Sf), t._RF.pop(), t._RF.push({}, "b51bfEbea5Pyq6VJdvuwnM+", "SignItem", void 0);
            var Vf = e.ccclass, Wf = e.property, Hf = (Tf = Vf("SignItem"), kf = Wf(L), xf = Wf(k), 
            Ef = Wf(b), Bf = Wf(i), Pf = Wf(L), Rf = Wf(i), Tf((Of = _t((Df = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "day", Of, mt(e)), 
                    yt(mt(e), "bg", Mf, mt(e)), yt(mt(e), "bgSprites", Ff, mt(e)), yt(mt(e), "hasDone", Nf, mt(e)), 
                    yt(mt(e), "counts", zf, mt(e)), yt(mt(e), "videoIcon", Gf, mt(e)), dt(mt(e), "curDay", void 0), 
                    dt(mt(e), "dayString", "一二三四五六七"), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.setDay = function(t) {
                    this.curDay = t, this.day.string = "第" + this.dayString[t - 1] + "天";
                }, i.setData = function() {}, i.setState = function(t) {
                    switch (t) {
                      case 0:
                        this.bg.spriteFrame = this.bgSprites[0], this.hasDone.active = !1, this.day.node.active = !0, 
                        this.day.node.setPosition(0, -42), this.videoIcon.active = !1;
                        break;

                      case 1:
                        this.bg.spriteFrame = this.bgSprites[1], this.hasDone.active = !1, this.day.node.active = !0, 
                        this.day.node.setPosition(-15, -42), this.videoIcon.active = !0;
                        break;

                      case 2:
                        this.bg.spriteFrame = this.bgSprites[1], this.hasDone.active = !0, this.day.node.active = !1, 
                        this.videoIcon.active = !1;
                        for (var e = 0; e < this.counts.length; e++) this.counts[e].string = "";
                    }
                }, e;
            }(a)).prototype, "day", [ kf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Mf = _t(Df.prototype, "bg", [ xf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ff = _t(Df.prototype, "bgSprites", [ Ef ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Nf = _t(Df.prototype, "hasDone", [ Bf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zf = _t(Df.prototype, "counts", [ Pf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Gf = _t(Df.prototype, "videoIcon", [ Rf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Lf = Df)) || Lf);
            t._RF.pop(), t._RF.push({}, "0f502ON4pZBrZjfpOw6vmui", "GoldSignItem", void 0);
            var jf = e.ccclass;
            e.property, jf("GoldSignItem")(function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e.prototype.setData = function(t) {
                    for (var e = 0; e < this.counts.length; e++) this.counts[e].string = "x" + t;
                }, e;
            }(Hf)), t._RF.pop(), t._RF.push({}, "10b886+eVVFB5eiAQ4lMttR", "Base64Utils", void 0), 
            t._RF.pop(), t._RF.push({}, "12015Tg3SRGv4p/TL6wwdTN", "RewardManager", void 0);
            var Yf, Kf, qf, Xf, Jf, Qf, Zf, $f = e.ccclass;
            e.property, $f("RewardManager")(function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e;
            }(a)), t._RF.pop(), t._RF.push({}, "1ba04n05r9HSJC5PqAZnxWq", "Normal", void 0);
            var tp, ep, ip, np, rp, op, ap, sp, lp, up, cp, hp, dp, fp, pp, vp, bp, gp = e.ccclass, mp = e.property;
            Yf = (0, e.menu)("game/bubble/Normal"), Kf = mp(k), qf = mp(b), gp(Xf = Yf((Qf = _t((Jf = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "icon", Qf, mt(e)), 
                    yt(mt(e), "sprites", Zf, mt(e)), dt(mt(e), "_model", void 0), dt(mt(e), "_removeEffect", Tn.EFFECT_NORMAL_REMOVE), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.init = function(e) {
                    t.prototype.init.call(this, e);
                    var i = e.data.color;
                    this.icon.spriteFrame = this.sprites[Math.log2(i)];
                }, i.removeByEffect = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Mn.I.loadEffect(e);

                              case 2:
                                if (i = t.sent, e != Tn.EFFECT_NORMAL_REMOVE) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 6, this.scaleBoost();

                              case 6:
                                t.next = 9;
                                break;

                              case 8:
                                this.scaleBoost();

                              case 9:
                                if (fh.BUBBLE_EFFECT_LAYER.addChild(i), i.setWorldPosition(this.node.worldPosition), 
                                this._removeEffect != e) {
                                    t.next = 14;
                                    break;
                                }
                                r = Je.COLORS[Math.log2(this.model.data.color)], i.children[0].getComponent(C.Skeleton).color = gt(W, r);

                              case 14:
                                return t.next = 16, Ve.playSpine(i.children[0].getComponent(C.Skeleton));

                              case 16:
                                Pn.I.putNode(i);

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }(Ss)).prototype, "icon", [ Kf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Zf = _t(Jf.prototype, "sprites", [ qf ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Xf = Jf)) || Xf), t._RF.pop(), t._RF.push({}, "bfe7d734m9GvaMmC9hngNs8", "ListItem", void 0);
            var yp, _p = e.ccclass, Ip = e.property, wp = e.disallowMultiple, Sp = e.menu, Cp = e.executionOrder;
            !function(t) {
                t[t.NONE = 0] = "NONE", t[t.TOGGLE = 1] = "TOGGLE", t[t.SWITCH = 2] = "SWITCH";
            }(yp || (yp = {}));
            var Ap, Tp, kp, xp, Ep, Bp, Pp, Rp, Lp, Dp, Op, Mp, Fp, Np, zp, Gp, Up, Vp, Wp, Hp, jp, Yp, Kp, qp, Xp, Jp, Qp, Zp, $p, tv, ev, iv, nv, rv, ov, av, sv, lv, uv, cv, hv = (tp = wp(), 
            ep = Sp("自定义组件/List Item"), ip = Cp(-5001), np = Ip({
                type: k,
                tooltip: "图标"
            }), rp = Ip({
                type: i,
                tooltip: "标题"
            }), op = Ip({
                type: T(yp),
                tooltip: "选择模式"
            }), ap = Ip({
                type: i,
                tooltip: "被选标志",
                visible: function() {
                    return this.selectedMode > yp.NONE;
                }
            }), sp = Ip({
                type: b,
                tooltip: "被选择的SpriteFrame",
                visible: function() {
                    return this.selectedMode == yp.SWITCH;
                }
            }), lp = Ip({
                tooltip: "自适应尺寸（宽或高）"
            }), _p(up = tp(up = ep(up = ip((hp = _t((cp = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "icon", hp, mt(e)), 
                    yt(mt(e), "title", dp, mt(e)), yt(mt(e), "selectedMode", fp, mt(e)), yt(mt(e), "selectedFlag", pp, mt(e)), 
                    yt(mt(e), "selectedSpriteFrame", vp, mt(e)), dt(mt(e), "_unselectedSpriteFrame", null), 
                    yt(mt(e), "adaptiveSize", bp, mt(e)), dt(mt(e), "_selected", !1), dt(mt(e), "_btnCom", void 0), 
                    dt(mt(e), "list", void 0), dt(mt(e), "_eventReg", !1), dt(mt(e), "listId", void 0), 
                    e;
                }
                pt(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    if (this.selectedMode == yp.SWITCH) {
                        var t = this.selectedFlag.getComponent(k);
                        this._unselectedSpriteFrame = t.spriteFrame;
                    }
                }, n.onDestroy = function() {
                    this.node.off(i.EventType.SIZE_CHANGED, this._onSizeChange, this);
                }, n._registerEvent = function() {
                    this._eventReg || (this.btnCom && this.list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis")), 
                    this.adaptiveSize && this.node.on(i.EventType.SIZE_CHANGED, this._onSizeChange, this), 
                    this._eventReg = !0);
                }, n._onSizeChange = function() {
                    this.list._onItemAdaptive(this.node);
                }, n.createEvt = function(t, e, i) {
                    if (void 0 === i && (i = null), t.isValid) {
                        t.comName = t.comName || t.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
                        var n = new Z();
                        return n.target = i || t.node, n.component = t.comName, n.handler = e, n;
                    }
                }, n.showAni = function(t, e, i) {
                    var n = this, r = F(this.node);
                    switch (t) {
                      case 0:
                        r.by(.3, {
                            position: l(0, 2 * this.node.getComponent(c).height)
                        }), r.to(.2, {
                            scale: l(.7, .7, 1)
                        });
                        break;

                      case 1:
                        r.by(.3, {
                            position: l(2 * this.node.getComponent(c).width, 0)
                        }), r.to(.2, {
                            scale: l(.7, .7, 1)
                        });
                        break;

                      case 2:
                        r.by(.3, {
                            position: l(0, -2 * this.node.getComponent(c).height)
                        }), r.to(.2, {
                            scale: l(.7, .7, 1)
                        });
                        break;

                      case 3:
                        r.by(.3, {
                            position: l(-2 * this.node.getComponent(c).width, 0)
                        }), r.to(.2, {
                            scale: l(.7, .7, 1)
                        });
                        break;

                      default:
                        r.to(.3, {
                            scale: l(.1, .1, 1)
                        });
                    }
                    (e || i) && r.call(function() {
                        if (i) {
                            n.list._delSingleItem(n.node);
                            for (var t = n.list.displayData.length - 1; t >= 0; t--) if (n.list.displayData[t].id == n.listId) {
                                n.list.displayData.splice(t, 1);
                                break;
                            }
                        }
                        e();
                    }), r.start();
                }, n.onClickThis = function() {
                    this.list.selectedId = this.listId;
                }, ht(e, [ {
                    key: "selected",
                    get: function() {
                        return this._selected;
                    },
                    set: function(t) {
                        if (this._selected = t, this.selectedFlag) switch (this.selectedMode) {
                          case yp.TOGGLE:
                            this.selectedFlag.active = t;
                            break;

                          case yp.SWITCH:
                            var e = this.selectedFlag.getComponent(k);
                            e && (e.spriteFrame = t ? this.selectedSpriteFrame : this._unselectedSpriteFrame);
                        }
                    }
                }, {
                    key: "btnCom",
                    get: function() {
                        return this._btnCom || (this._btnCom = this.node.getComponent(R)), this._btnCom;
                    }
                } ]), e;
            }(a)).prototype, "icon", [ np ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), dp = _t(cp.prototype, "title", [ rp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), fp = _t(cp.prototype, "selectedMode", [ op ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return yp.NONE;
                }
            }), pp = _t(cp.prototype, "selectedFlag", [ ap ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), vp = _t(cp.prototype, "selectedSpriteFrame", [ sp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), bp = _t(cp.prototype, "adaptiveSize", [ lp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), up = cp)) || up) || up) || up) || up);
            t._RF.pop(), t._RF.push({}, "3fba5nv/iNEtqw6/ERvKMaF", "List", void 0);
            var dv, fv, pv, vv = e.ccclass, bv = e.property, gv = e.disallowMultiple, mv = e.menu, yv = e.executionOrder, _v = e.requireComponent;
            !function(t) {
                t[t.NODE = 1] = "NODE", t[t.PREFAB = 2] = "PREFAB";
            }(dv || (dv = {})), function(t) {
                t[t.NORMAL = 1] = "NORMAL", t[t.ADHERING = 2] = "ADHERING", t[t.PAGE = 3] = "PAGE";
            }(fv || (fv = {})), function(t) {
                t[t.NONE = 0] = "NONE", t[t.SINGLE = 1] = "SINGLE", t[t.MULT = 2] = "MULT";
            }(pv || (pv = {}));
            var Iv, wv, Sv, Cv, Av, Tv, kv, xv, Ev, Bv, Pv, Rv, Lv, Dv, Ov, Mv, Fv, Nv, zv, Gv, Uv, Vv, Wv, Hv = (Ap = gv(), 
            Tp = mv("自定义组件/List"), kp = _v(B), xp = yv(-5e3), Ep = bv({
                type: T(dv),
                tooltip: "模板类型"
            }), Bp = bv({
                type: i,
                tooltip: "模板Item",
                visible: function() {
                    return this.templateType == dv.NODE;
                }
            }), Pp = bv({
                type: V,
                tooltip: "模板Item",
                visible: function() {
                    return this.templateType == dv.PREFAB;
                }
            }), Rp = bv({
                type: T(fv),
                tooltip: "滑动模式"
            }), Lp = bv({
                range: [ 0, 1, .1 ],
                tooltip: "翻页作用距离",
                slide: !0,
                visible: function() {
                    return this._slideMode == fv.PAGE;
                }
            }), Dp = bv({
                type: Z,
                tooltip: "页面改变事件",
                visible: function() {
                    return this._slideMode == fv.PAGE;
                }
            }), Op = bv({
                type: $,
                tooltip: "是否为虚拟列表（动态列表）"
            }), Mp = bv({
                tooltip: "是否为循环列表",
                visible: function() {
                    var t = this.virtual && this.slideMode == fv.NORMAL;
                    return t || (this.cyclic = !1), t;
                }
            }), Fp = bv({
                tooltip: "Item数量不足以填满Content时，是否居中显示Item（不支持Grid布局）",
                visible: function() {
                    return this.virtual;
                }
            }), Np = bv({
                tooltip: "Item数量不足以填满Content时，是否可滑动",
                visible: function() {
                    var t = this.virtual && !this.lackCenter;
                    return t || (this.lackSlide = !1), t;
                }
            }), zp = bv({
                range: [ 0, 6, 1 ],
                tooltip: "刷新频率（值越大刷新频率越低、性能越高）",
                slide: !0
            }), Gp = bv({
                range: [ 0, 12, 1 ],
                tooltip: "逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）",
                slide: !0
            }), Up = bv({
                type: Z,
                tooltip: "渲染事件（渲染器）"
            }), Vp = bv({
                type: T(pv),
                tooltip: "选择模式"
            }), Wp = bv({
                tooltip: "是否重复响应单选事件",
                visible: function() {
                    return this.selectedMode == pv.SINGLE;
                }
            }), Hp = bv({
                type: Z,
                tooltip: "触发选择事件",
                visible: function() {
                    return this.selectedMode > pv.NONE;
                }
            }), jp = bv({
                serializable: !1
            }), vv(Yp = Ap(Yp = Tp(Yp = kp(Yp = xp((qp = _t((Kp = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "templateType", qp, mt(e)), 
                    yt(mt(e), "tmpNode", Xp, mt(e)), yt(mt(e), "tmpPrefab", Jp, mt(e)), yt(mt(e), "_slideMode", Qp, mt(e)), 
                    yt(mt(e), "pageDistance", Zp, mt(e)), yt(mt(e), "pageChangeEvent", $p, mt(e)), yt(mt(e), "_virtual", tv, mt(e)), 
                    yt(mt(e), "cyclic", ev, mt(e)), yt(mt(e), "lackCenter", iv, mt(e)), yt(mt(e), "lackSlide", nv, mt(e)), 
                    yt(mt(e), "_updateRate", rv, mt(e)), yt(mt(e), "frameByFrameRenderNum", ov, mt(e)), 
                    yt(mt(e), "renderEvent", av, mt(e)), yt(mt(e), "selectedMode", sv, mt(e)), yt(mt(e), "repeatEventSingle", lv, mt(e)), 
                    yt(mt(e), "selectedEvent", uv, mt(e)), dt(mt(e), "_selectedId", -1), dt(mt(e), "_lastSelectedId", void 0), 
                    dt(mt(e), "multSelected", void 0), dt(mt(e), "_forceUpdate", !1), dt(mt(e), "_align", void 0), 
                    dt(mt(e), "_horizontalDir", void 0), dt(mt(e), "_verticalDir", void 0), dt(mt(e), "_startAxis", void 0), 
                    dt(mt(e), "_alignCalcType", void 0), dt(mt(e), "content", void 0), dt(mt(e), "firstListId", void 0), 
                    dt(mt(e), "displayItemNum", void 0), dt(mt(e), "_updateDone", !0), dt(mt(e), "_updateCounter", void 0), 
                    dt(mt(e), "_actualNumItems", void 0), dt(mt(e), "_cyclicNum", void 0), dt(mt(e), "_cyclicPos1", void 0), 
                    dt(mt(e), "_cyclicPos2", void 0), yt(mt(e), "_numItems", cv, mt(e)), dt(mt(e), "_inited", !1), 
                    dt(mt(e), "_scrollView", void 0), dt(mt(e), "_layout", void 0), dt(mt(e), "_topGap", void 0), 
                    dt(mt(e), "_rightGap", void 0), dt(mt(e), "_bottomGap", void 0), dt(mt(e), "_leftGap", void 0), 
                    dt(mt(e), "_columnGap", void 0), dt(mt(e), "_lineGap", void 0), dt(mt(e), "_colLineNum", void 0), 
                    dt(mt(e), "_lastDisplayData", void 0), dt(mt(e), "displayData", void 0), dt(mt(e), "_pool", void 0), 
                    dt(mt(e), "_itemTmp", void 0), dt(mt(e), "_needUpdateWidget", !1), dt(mt(e), "_itemSize", void 0), 
                    dt(mt(e), "_sizeType", void 0), dt(mt(e), "_customSize", void 0), dt(mt(e), "frameCount", void 0), 
                    dt(mt(e), "_aniDelRuning", !1), dt(mt(e), "viewTop", void 0), dt(mt(e), "viewRight", void 0), 
                    dt(mt(e), "viewBottom", void 0), dt(mt(e), "viewLeft", void 0), dt(mt(e), "_doneAfterUpdate", !1), 
                    dt(mt(e), "elasticTop", void 0), dt(mt(e), "elasticRight", void 0), dt(mt(e), "elasticBottom", void 0), 
                    dt(mt(e), "elasticLeft", void 0), dt(mt(e), "scrollToListId", void 0), dt(mt(e), "adhering", !1), 
                    dt(mt(e), "_adheringBarrier", !1), dt(mt(e), "nearestListId", void 0), dt(mt(e), "curPageNum", 0), 
                    dt(mt(e), "_beganPos", void 0), dt(mt(e), "_scrollPos", void 0), dt(mt(e), "_scrollToListId", void 0), 
                    dt(mt(e), "_scrollToEndTime", void 0), dt(mt(e), "_scrollToSo", void 0), dt(mt(e), "_lack", void 0), 
                    dt(mt(e), "_allItemSize", void 0), dt(mt(e), "_allItemSizeNoEdge", void 0), dt(mt(e), "_scrollItem", void 0), 
                    e;
                }
                pt(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    this._init();
                }, n.onDestroy = function() {
                    var t = this;
                    for (t._itemTmp && t._itemTmp.isValid && t._itemTmp.destroy(), t.tmpNode && t.tmpNode.isValid && t.tmpNode.destroy(); t._pool.size(); ) t._pool.get().destroy();
                }, n.onEnable = function() {
                    this._registerEvent(), this._init();
                }, n.onDisable = function() {
                    this._unregisterEvent();
                }, n._registerEvent = function() {
                    var t = this;
                    t.node.on(i.EventType.TOUCH_START, t._onTouchStart, t, !0), t.node.on("touch-up", t._onTouchUp, t), 
                    t.node.on(i.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0), t.node.on("scroll-began", t._onScrollBegan, t, !0), 
                    t.node.on("scroll-ended", t._onScrollEnded, t, !0), t.node.on("scrolling", t._onScrolling, t, !0), 
                    t.node.on(i.EventType.SIZE_CHANGED, t._onSizeChanged, t);
                }, n._unregisterEvent = function() {
                    var t = this;
                    t.node.off(i.EventType.TOUCH_START, t._onTouchStart, t, !0), t.node.off("touch-up", t._onTouchUp, t), 
                    t.node.off(i.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0), t.node.off("scroll-began", t._onScrollBegan, t, !0), 
                    t.node.off("scroll-ended", t._onScrollEnded, t, !0), t.node.off("scrolling", t._onScrolling, t, !0), 
                    t.node.off(i.EventType.SIZE_CHANGED, t._onSizeChanged, t);
                }, n._init = function() {
                    var t = this;
                    if (!t._inited) if (t._scrollView = t.node.getComponent(B), t.content = t._scrollView.content, 
                    t.content) {
                        switch (t._layout = t.content.getComponent(P), t._align = t._layout.type, t._resizeMode = t._layout.resizeMode, 
                        t._startAxis = t._layout.startAxis, t._topGap = t._layout.paddingTop, t._rightGap = t._layout.paddingRight, 
                        t._bottomGap = t._layout.paddingBottom, t._leftGap = t._layout.paddingLeft, t._columnGap = t._layout.spacingX, 
                        t._lineGap = t._layout.spacingY, t._colLineNum, t._verticalDir = t._layout.verticalDirection, 
                        t._horizontalDir = t._layout.horizontalDirection, t.setTemplateItem(m(t.templateType == dv.PREFAB ? t.tmpPrefab : t.tmpNode)), 
                        t._slideMode != fv.ADHERING && t._slideMode != fv.PAGE || (t._scrollView.inertia = !1, 
                        t._scrollView._onMouseWheel = function() {}), t.virtual || (t.lackCenter = !1), 
                        t._lastDisplayData = [], t.displayData = [], t._pool = new y(), t._forceUpdate = !1, 
                        t._updateCounter = 0, t._updateDone = !0, t.curPageNum = 0, t.cyclic && (t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t), 
                        t._scrollView._startBounceBackIfNeeded = function() {
                            return !1;
                        }), t._align) {
                          case P.Type.HORIZONTAL:
                            switch (t._horizontalDir) {
                              case P.HorizontalDirection.LEFT_TO_RIGHT:
                                t._alignCalcType = 1;
                                break;

                              case P.HorizontalDirection.RIGHT_TO_LEFT:
                                t._alignCalcType = 2;
                            }
                            break;

                          case P.Type.VERTICAL:
                            switch (t._verticalDir) {
                              case P.VerticalDirection.TOP_TO_BOTTOM:
                                t._alignCalcType = 3;
                                break;

                              case P.VerticalDirection.BOTTOM_TO_TOP:
                                t._alignCalcType = 4;
                            }
                            break;

                          case P.Type.GRID:
                            switch (t._startAxis) {
                              case P.AxisDirection.HORIZONTAL:
                                switch (t._verticalDir) {
                                  case P.VerticalDirection.TOP_TO_BOTTOM:
                                    t._alignCalcType = 3;
                                    break;

                                  case P.VerticalDirection.BOTTOM_TO_TOP:
                                    t._alignCalcType = 4;
                                }
                                break;

                              case P.AxisDirection.VERTICAL:
                                switch (t._horizontalDir) {
                                  case P.HorizontalDirection.LEFT_TO_RIGHT:
                                    t._alignCalcType = 1;
                                    break;

                                  case P.HorizontalDirection.RIGHT_TO_LEFT:
                                    t._alignCalcType = 2;
                                }
                            }
                        }
                        t.content.removeAllChildren(), t._inited = !0;
                    } else p(t.node.name + "'s ScrollView unset content!");
                }, n._processAutoScrolling = function(t) {
                    this._scrollView._autoScrollAccumulatedTime += 1 * t;
                    var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
                    if (this._scrollView._autoScrollAttenuate) {
                        var i = e - 1;
                        e = i * i * i * i * i + 1;
                    }
                    var n = Ve.addV3(this._scrollView._autoScrollStartPosition, Ve.mulV3(this._scrollView._autoScrollTargetDelta, e)), r = this._scrollView.getScrollEndedEventTiming(), o = Math.abs(e - 1) <= r;
                    Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired && (this._scrollView._dispatchEvent("scroll-ended-with-threshold"), 
                    this._scrollView._isScrollEndedWithThresholdEventFired = !0), o && (this._scrollView._autoScrolling = !1);
                    var a = Ve.subV3(n, this._scrollView.getContentPosition());
                    this._scrollView._clampDelta(a), this._scrollView._moveContent(a, o), this._scrollView._dispatchEvent("scrolling"), 
                    this._scrollView._autoScrolling || (this._scrollView._isBouncing = !1, this._scrollView._scrolling = !1, 
                    this._scrollView._dispatchEvent("scroll-ended"));
                }, n.setTemplateItem = function(t) {
                    if (t) {
                        var e = this;
                        e._itemTmp = t, e._resizeMode == P.ResizeMode.CHILDREN ? e._itemSize = e._layout.cellSize : e._itemSize = tt(t.getComponent(c).width, t.getComponent(c).height);
                        var i = t.getComponent(hv), n = !1;
                        switch (i || (n = !0), n && (e.selectedMode = pv.NONE), (i = t.getComponent(q)) && i.enabled && (e._needUpdateWidget = !0), 
                        e.selectedMode == pv.MULT && (e.multSelected = []), e._align) {
                          case P.Type.HORIZONTAL:
                            e._colLineNum = 1, e._sizeType = !1;
                            break;

                          case P.Type.VERTICAL:
                            e._colLineNum = 1, e._sizeType = !0;
                            break;

                          case P.Type.GRID:
                            switch (e._startAxis) {
                              case P.AxisDirection.HORIZONTAL:
                                var r = e.content.getComponent(c).width - e._leftGap - e._rightGap;
                                e._colLineNum = Math.floor((r + e._columnGap) / (e._itemSize.width + e._columnGap)), 
                                e._sizeType = !0;
                                break;

                              case P.AxisDirection.VERTICAL:
                                var o = e.content.getComponent(c).height - e._topGap - e._bottomGap;
                                e._colLineNum = Math.floor((o + e._lineGap) / (e._itemSize.height + e._lineGap)), 
                                e._sizeType = !1;
                            }
                        }
                    }
                }, n.checkInited = function(t) {
                    return void 0 === t && (t = !0), !!this._inited || (t && p("List initialization not completed!"), 
                    !1);
                }, n._resizeContent = function() {
                    var t, e = this;
                    switch (e._align) {
                      case P.Type.HORIZONTAL:
                        if (e._customSize) {
                            var i = e._getFixedSize(null);
                            t = e._leftGap + i.val + e._itemSize.width * (e._numItems - i.count) + e._columnGap * (e._numItems - 1) + e._rightGap;
                        } else t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
                        break;

                      case P.Type.VERTICAL:
                        if (e._customSize) {
                            var n = e._getFixedSize(null);
                            t = e._topGap + n.val + e._itemSize.height * (e._numItems - n.count) + e._lineGap * (e._numItems - 1) + e._bottomGap;
                        } else t = e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
                        break;

                      case P.Type.GRID:
                        switch (e.lackCenter && (e.lackCenter = !1), e._startAxis) {
                          case P.AxisDirection.HORIZONTAL:
                            var r = Math.ceil(e._numItems / e._colLineNum);
                            t = e._topGap + e._itemSize.height * r + e._lineGap * (r - 1) + e._bottomGap;
                            break;

                          case P.AxisDirection.VERTICAL:
                            var o = Math.ceil(e._numItems / e._colLineNum);
                            t = e._leftGap + e._itemSize.width * o + e._columnGap * (o - 1) + e._rightGap;
                        }
                    }
                    var a = e.content.getComponent(P);
                    if (a && (a.enabled = !1), e._allItemSize = t, e._allItemSizeNoEdge = e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap : e._leftGap + e._rightGap), 
                    e.cyclic) {
                        var s = e._sizeType ? e.node.getComponent(c).height : e.node.getComponent(c).width;
                        e._cyclicPos1 = 0, s -= e._cyclicPos1, e._cyclicNum = Math.ceil(s / e._allItemSizeNoEdge) + 1;
                        var l = e._sizeType ? e._lineGap : e._columnGap;
                        e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + l, e._cyclicAllItemSize = e._allItemSize + e._allItemSizeNoEdge * (e._cyclicNum - 1) + l * (e._cyclicNum - 1), 
                        e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicNum, e._cycilcAllItemSizeNoEdge += l * (e._cyclicNum - 1);
                    }
                    e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.node.getComponent(c).height : e.node.getComponent(c).width);
                    var u = e._lack && e.lackCenter || !e.lackSlide ? .1 : 0, h = e._lack ? (e._sizeType ? e.node.getComponent(c).height : e.node.getComponent(c).width) - u : e.cyclic ? e._cyclicAllItemSize : e._allItemSize;
                    h < 0 && (h = 0), e._sizeType ? e.content.getComponent(c).height = h : e.content.getComponent(c).width = h;
                }, n._onScrolling = function(t) {
                    if (void 0 === t && (t = null), null == this.frameCount && (this.frameCount = this._updateRate), 
                    !this._forceUpdate && t && this.frameCount > 0) this.frameCount--; else if (this.frameCount = this._updateRate, 
                    !this._aniDelRuning) {
                        if (this.cyclic) {
                            var e = this.content.getPosition();
                            e = this._sizeType ? e.y : e.x;
                            var i = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap), n = this._sizeType ? s(0, i) : s(i, 0);
                            switch (this._alignCalcType) {
                              case 1:
                                e > -this._cyclicPos1 ? (this.content.setPosition(-this._cyclicPos2, this.content.position.y), 
                                this._scrollView.isAutoScrolling() && this._scrollView._autoScrollStartPosition.subtract(n)) : e < -this._cyclicPos2 && (this.content.setPosition(-this._cyclicPos1, this.content.position.y), 
                                this._scrollView.isAutoScrolling() && this._scrollView._autoScrollStartPosition.add(n));
                                break;

                              case 2:
                                e < this._cyclicPos1 ? (this.content.setPosition(this._cyclicPos2, this.content.position.y), 
                                this._scrollView.isAutoScrolling() && this._scrollView._autoScrollStartPosition.add(n)) : e > this._cyclicPos2 && (this.content.setPosition(this._cyclicPos1, this.content.position.y), 
                                this._scrollView.isAutoScrolling() && this._scrollView._autoScrollStartPosition.subtract(n));
                                break;

                              case 3:
                                e < this._cyclicPos1 ? (this.content.setPosition(this.content.position.x, this._cyclicPos2), 
                                this._scrollView.isAutoScrolling() && this._scrollView._autoScrollStartPosition.add(n)) : e > this._cyclicPos2 && (this.content.setPosition(this.content.position.x, this._cyclicPos1), 
                                this._scrollView.isAutoScrolling() && this._scrollView._autoScrollStartPosition.subtract(n));
                                break;

                              case 4:
                                e > -this._cyclicPos1 ? (this.content.setPosition(this.content.position.x, -this._cyclicPos2), 
                                this._scrollView.isAutoScrolling() && this._scrollView._autoScrollStartPosition.subtract(n)) : e < -this._cyclicPos2 && (this.content.setPosition(this.content.position.x, -this._cyclicPos1), 
                                this._scrollView.isAutoScrolling() && this._scrollView._autoScrollStartPosition.add(n));
                            }
                        }
                        var r, o, a, l;
                        if (this._calcViewPos(), this._sizeType ? (r = this.viewTop, a = this.viewBottom) : (o = this.viewRight, 
                        l = this.viewLeft), this._virtual) {
                            var u;
                            this.displayData = [];
                            var c = 0, h = this._numItems - 1;
                            if (this._customSize) for (var d = !1; c <= h && !d; c++) switch (u = this._calcItemPos(c), 
                            this._align) {
                              case P.Type.HORIZONTAL:
                                u.right >= l && u.left <= o ? this.displayData.push(u) : 0 != c && this.displayData.length > 0 && (d = !0);
                                break;

                              case P.Type.VERTICAL:
                                u.bottom <= r && u.top >= a ? this.displayData.push(u) : 0 != c && this.displayData.length > 0 && (d = !0);
                                break;

                              case P.Type.GRID:
                                switch (this._startAxis) {
                                  case P.AxisDirection.HORIZONTAL:
                                    u.bottom <= r && u.top >= a ? this.displayData.push(u) : 0 != c && this.displayData.length > 0 && (d = !0);
                                    break;

                                  case P.AxisDirection.VERTICAL:
                                    u.right >= l && u.left <= o ? this.displayData.push(u) : 0 != c && this.displayData.length > 0 && (d = !0);
                                }
                            } else {
                                var f = this._itemSize.width + this._columnGap, p = this._itemSize.height + this._lineGap;
                                switch (this._alignCalcType) {
                                  case 1:
                                    c = (l + this._leftGap) / f, h = (o + this._rightGap) / f;
                                    break;

                                  case 2:
                                    c = (-o - this._rightGap) / f, h = (-l - this._leftGap) / f;
                                    break;

                                  case 3:
                                    c = (-r - this._topGap) / p, h = (-a - this._bottomGap) / p;
                                    break;

                                  case 4:
                                    c = (a - this._bottomGap) / p, h = (r - this._topGap) / p;
                                }
                                for (c = Math.floor(c) * this._colLineNum, h = Math.ceil(h) * this._colLineNum, 
                                c < 0 && (c = 0), --h >= this._numItems && (h = this._numItems - 1); c <= h; c++) this.displayData.push(this._calcItemPos(c));
                            }
                            if (this._delRedundantItem(), this.displayData.length <= 0 || !this._numItems) return void (this._lastDisplayData = []);
                            this.firstListId = this.displayData[0].id, this.displayItemNum = this.displayData.length;
                            var v = this._lastDisplayData.length, b = this.displayItemNum != v;
                            if (b && (this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function(t, e) {
                                return t - e;
                            }), b = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[v - 1]), 
                            this._forceUpdate || b) if (this.frameByFrameRenderNum > 0) this._numItems > 0 ? (this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0, 
                            this._updateDone = !1) : (this._updateCounter = 0, this._updateDone = !0); else {
                                this._lastDisplayData = [];
                                for (var g = 0; g < this.displayItemNum; g++) this._createOrUpdateItem(this.displayData[g]);
                                this._forceUpdate = !1;
                            }
                            this._calcNearestItem();
                        }
                    }
                }, n._calcViewPos = function() {
                    var t = this.content.getPosition();
                    switch (this._alignCalcType) {
                      case 1:
                        this.elasticLeft = t.x > 0 ? t.x : 0, this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft, 
                        this.viewRight = this.viewLeft + this.node.getComponent(c).width, this.elasticRight = this.viewRight > this.content.getComponent(c).width ? Math.abs(this.viewRight - this.content.getComponent(c).width) : 0, 
                        this.viewRight += this.elasticRight;
                        break;

                      case 2:
                        this.elasticRight = t.x < 0 ? -t.x : 0, this.viewRight = (t.x > 0 ? -t.x : 0) + this.elasticRight, 
                        this.viewLeft = this.viewRight - this.node.getComponent(c).width, this.elasticLeft = this.viewLeft < -this.content.getComponent(c).width ? Math.abs(this.viewLeft + this.content.getComponent(c).width) : 0, 
                        this.viewLeft -= this.elasticLeft;
                        break;

                      case 3:
                        this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0, this.viewTop = (t.y > 0 ? -t.y : 0) + this.elasticTop, 
                        this.viewBottom = this.viewTop - this.node.getComponent(c).height, this.elasticBottom = this.viewBottom < -this.content.getComponent(c).height ? Math.abs(this.viewBottom + this.content.getComponent(c).height) : 0, 
                        this.viewBottom += this.elasticBottom;
                        break;

                      case 4:
                        this.elasticBottom = t.y > 0 ? Math.abs(t.y) : 0, this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom, 
                        this.viewTop = this.viewBottom + this.node.getComponent(c).height, this.elasticTop = this.viewTop > this.content.getComponent(c).height ? Math.abs(this.viewTop - this.content.getComponent(c).height) : 0, 
                        this.viewTop -= this.elasticTop;
                    }
                }, n._calcItemPos = function(t) {
                    var e, i, n, r, o, a, s, l;
                    switch (this._align) {
                      case P.Type.HORIZONTAL:
                        switch (this._horizontalDir) {
                          case P.HorizontalDirection.LEFT_TO_RIGHT:
                            if (this._customSize) {
                                var u = this._getFixedSize(t);
                                o = this._leftGap + (this._itemSize.width + this._columnGap) * (t - u.count) + (u.val + this._columnGap * u.count);
                                var h = this._customSize[t];
                                e = h > 0 ? h : this._itemSize.width;
                            } else o = this._leftGap + (this._itemSize.width + this._columnGap) * t, e = this._itemSize.width;
                            if (a = o + e, this.lackCenter) {
                                var d = this.content.getComponent(c).width / 2 - this._allItemSizeNoEdge / 2;
                                o += d, a += d;
                            }
                            return {
                                id: t,
                                left: o,
                                right: a,
                                x: o + this._itemTmp.getComponent(c).anchorX * e,
                                y: this._itemTmp.position.y
                            };

                          case P.HorizontalDirection.RIGHT_TO_LEFT:
                            if (this._customSize) {
                                var f = this._getFixedSize(t);
                                a = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - f.count) - (f.val + this._columnGap * f.count);
                                var p = this._customSize[t];
                                e = p > 0 ? p : this._itemSize.width;
                            } else a = -this._rightGap - (this._itemSize.width + this._columnGap) * t, e = this._itemSize.width;
                            if (o = a - e, this.lackCenter) {
                                var v = this.content.getComponent(c).width / 2 - this._allItemSizeNoEdge / 2;
                                o -= v, a -= v;
                            }
                            return {
                                id: t,
                                right: a,
                                left: o,
                                x: o + this._itemTmp.getComponent(c).anchorX * e,
                                y: this._itemTmp.position.y
                            };
                        }
                        break;

                      case P.Type.VERTICAL:
                        switch (this._verticalDir) {
                          case P.VerticalDirection.TOP_TO_BOTTOM:
                            if (this._customSize) {
                                var b = this._getFixedSize(t);
                                n = -this._topGap - (this._itemSize.height + this._lineGap) * (t - b.count) - (b.val + this._lineGap * b.count);
                                var g = this._customSize[t];
                                i = g > 0 ? g : this._itemSize.height;
                            } else n = -this._topGap - (this._itemSize.height + this._lineGap) * t, i = this._itemSize.height;
                            if (r = n - i, this.lackCenter) {
                                var m = this.content.getComponent(c).height / 2 - this._allItemSizeNoEdge / 2;
                                n -= m, r -= m;
                            }
                            return {
                                id: t,
                                top: n,
                                bottom: r,
                                x: this._itemTmp.position.x,
                                y: r + this._itemTmp.getComponent(c).anchorY * i
                            };

                          case P.VerticalDirection.BOTTOM_TO_TOP:
                            if (this._customSize) {
                                var y = this._getFixedSize(t);
                                r = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - y.count) + (y.val + this._lineGap * y.count);
                                var _ = this._customSize[t];
                                i = _ > 0 ? _ : this._itemSize.height;
                            } else r = this._bottomGap + (this._itemSize.height + this._lineGap) * t, i = this._itemSize.height;
                            if (n = r + i, this.lackCenter) {
                                var I = this.content.getComponent(c).height / 2 - this._allItemSizeNoEdge / 2;
                                n += I, r += I;
                            }
                            return {
                                id: t,
                                top: n,
                                bottom: r,
                                x: this._itemTmp.position.x,
                                y: r + this._itemTmp.getComponent(c).anchorY * i
                            };
                        }

                      case P.Type.GRID:
                        var w = Math.floor(t / this._colLineNum);
                        switch (this._startAxis) {
                          case P.AxisDirection.HORIZONTAL:
                            switch (this._verticalDir) {
                              case P.VerticalDirection.TOP_TO_BOTTOM:
                                l = (r = (n = -this._topGap - (this._itemSize.height + this._lineGap) * w) - this._itemSize.height) + this._itemTmp.getComponent(c).anchorY * this._itemSize.height;
                                break;

                              case P.VerticalDirection.BOTTOM_TO_TOP:
                                n = (r = this._bottomGap + (this._itemSize.height + this._lineGap) * w) + this._itemSize.height, 
                                l = r + this._itemTmp.getComponent(c).anchorY * this._itemSize.height;
                            }
                            switch (s = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap), 
                            this._horizontalDir) {
                              case P.HorizontalDirection.LEFT_TO_RIGHT:
                                s += this._itemTmp.getComponent(c).anchorX * this._itemSize.width, s -= this.content.getComponent(c).anchorX * this.content.getComponent(c).width;
                                break;

                              case P.HorizontalDirection.RIGHT_TO_LEFT:
                                s += (1 - this._itemTmp.getComponent(c).anchorX) * this._itemSize.width, s -= (1 - this.content.getComponent(c).anchorX) * this.content.getComponent(c).width, 
                                s *= -1;
                            }
                            return {
                                id: t,
                                top: n,
                                bottom: r,
                                x: s,
                                y: l
                            };

                          case P.AxisDirection.VERTICAL:
                            switch (this._horizontalDir) {
                              case P.HorizontalDirection.LEFT_TO_RIGHT:
                                a = (o = this._leftGap + (this._itemSize.width + this._columnGap) * w) + this._itemSize.width, 
                                s = o + this._itemTmp.getComponent(c).anchorX * this._itemSize.width, s -= this.content.getComponent(c).anchorX * this.content.getComponent(c).width;
                                break;

                              case P.HorizontalDirection.RIGHT_TO_LEFT:
                                s = (o = (a = -this._rightGap - (this._itemSize.width + this._columnGap) * w) - this._itemSize.width) + this._itemTmp.getComponent(c).anchorX * this._itemSize.width, 
                                s += (1 - this.content.getComponent(c).anchorX) * this.content.getComponent(c).width;
                            }
                            switch (l = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap), 
                            this._verticalDir) {
                              case P.VerticalDirection.TOP_TO_BOTTOM:
                                l -= (1 - this._itemTmp.getComponent(c).anchorY) * this._itemSize.height, l += (1 - this.content.getComponent(c).anchorY) * this.content.getComponent(c).height;
                                break;

                              case P.VerticalDirection.BOTTOM_TO_TOP:
                                l -= this._itemTmp.getComponent(c).anchorY * this._itemSize.height, l += this.content.getComponent(c).anchorY * this.content.getComponent(c).height, 
                                l *= -1;
                            }
                            return {
                                id: t,
                                left: o,
                                right: a,
                                x: s,
                                y: l
                            };
                        }
                    }
                }, n._calcExistItemPos = function(t) {
                    var e = this.getItemByListId(t);
                    if (!e) return null;
                    var i = {
                        id: t,
                        x: e.position.x,
                        y: e.position.y
                    };
                    return this._sizeType ? (i.top = e.position.y + e.getComponent(c).height * (1 - e.getComponent(c).anchorY), 
                    i.bottom = e.position.y - e.getComponent(c).height * e.getComponent(c).anchorY) : (i.left = e.position.x - e.getComponent(c).width * e.getComponent(c).anchorX, 
                    i.right = e.position.x + e.getComponent(c).width * (1 - e.getComponent(c).anchorX)), 
                    i;
                }, n.getItemPos = function(t) {
                    return this._virtual || this.frameByFrameRenderNum ? this._calcItemPos(t) : this._calcExistItemPos(t);
                }, n._getFixedSize = function(t) {
                    if (!this._customSize) return null;
                    null == t && (t = this._numItems);
                    var e = 0, i = 0;
                    for (var n in this._customSize) parseInt(n) < t && (e += this._customSize[n], i++);
                    return {
                        val: e,
                        count: i
                    };
                }, n._onScrollBegan = function() {
                    this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
                }, n._onScrollEnded = function() {
                    var t = this;
                    if (null != t.scrollToListId) {
                        var e = t.getItemByListId(t.scrollToListId);
                        t.scrollToListId = null, e && F(e).to(.1, {
                            scale: l(1.06, 1.06, 1)
                        }).to(.1, {
                            scale: l(1, 1, 1)
                        }).start();
                    }
                    t._onScrolling(), t._slideMode != fv.ADHERING || t.adhering ? t._slideMode == fv.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere()) : t.adhere();
                }, n._onTouchStart = function(t, e) {
                    if (!this._scrollView._hasNestedViewGroup(t, e) && (t.eventPhase !== et.AT_TARGET || t.target !== this.node)) {
                        for (var i = t.target; null == i._listId && i.parent; ) i = i.parent;
                        this._scrollItem = null != i._listId ? i : t.target;
                    }
                }, n._onTouchUp = function() {
                    var t = this;
                    t._scrollPos = null, t._slideMode == fv.ADHERING ? (this.adhering && (this._adheringBarrier = !0), 
                    t.adhere()) : t._slideMode == fv.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere()), 
                    this._scrollItem = null;
                }, n._onTouchCancelled = function(t, e) {
                    var i = this;
                    i._scrollView._hasNestedViewGroup(t, e) || t.simulate || (i._scrollPos = null, i._slideMode == fv.ADHERING ? (i.adhering && (i._adheringBarrier = !0), 
                    i.adhere()) : i._slideMode == fv.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere()), 
                    this._scrollItem = null);
                }, n._onSizeChanged = function() {
                    this.checkInited(!1) && this._onScrolling();
                }, n._onItemAdaptive = function(t) {
                    if (!this._sizeType && t.getComponent(c).width != this._itemSize.width || this._sizeType && t.getComponent(c).height != this._itemSize.height) {
                        this._customSize || (this._customSize = {});
                        var e = this._sizeType ? t.getComponent(c).height : t.getComponent(c).width;
                        this._customSize[t._listId] != e && (this._customSize[t._listId] = e, this._resizeContent(), 
                        this.updateAll(), null != this._scrollToListId && (this._scrollPos = null, this.unschedule(this._scrollToSo), 
                        this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3))));
                    }
                }, n._pageAdhere = function() {
                    var t = this;
                    if (t.cyclic || !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
                        var e = t._sizeType ? t.viewTop : t.viewLeft, i = (t._sizeType ? t.node.getComponent(c).height : t.node.getComponent(c).width) * t.pageDistance;
                        if (Math.abs(t._beganPos - e) > i) {
                            var n = .5;
                            switch (t._alignCalcType) {
                              case 1:
                              case 4:
                                t._beganPos > e ? t.prePage(n) : t.nextPage(n);
                                break;

                              case 2:
                              case 3:
                                t._beganPos < e ? t.prePage(n) : t.nextPage(n);
                            }
                        } else t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
                        t._beganPos = null;
                    }
                }, n.adhere = function() {
                    var t = this;
                    if (t.checkInited() && !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
                        t.adhering = !0, t._calcNearestItem();
                        var e = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.getComponent(c).height : t.node.getComponent(c).width);
                        t.scrollTo(t.nearestListId, .7, e);
                    }
                }, n.update = function() {
                    if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
                        for (var t = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum, e = this._updateCounter; e < t; e++) {
                            var i = this.displayData[e];
                            i && this._createOrUpdateItem(i);
                        }
                        this._updateCounter >= this.displayItemNum - 1 ? this._doneAfterUpdate ? (this._updateCounter = 0, 
                        this._updateDone = !1, this._doneAfterUpdate = !1) : (this._updateDone = !0, this._delRedundantItem(), 
                        this._forceUpdate = !1, this._calcNearestItem(), this.slideMode == fv.PAGE && (this.curPageNum = this.nearestListId)) : this._updateCounter += this.frameByFrameRenderNum;
                    } else if (this._updateCounter < this._numItems) {
                        for (var n = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, r = this._updateCounter; r < n; r++) this._createOrUpdateItem2(r);
                        this._updateCounter += this.frameByFrameRenderNum;
                    } else this._updateDone = !0, this._calcNearestItem(), this.slideMode == fv.PAGE && (this.curPageNum = this.nearestListId);
                }, n._createOrUpdateItem = function(t) {
                    var e = this.getItemByListId(t.id);
                    if (e) this._forceUpdate && this.renderEvent && (e.setPosition(t.x, t.y), this._resetItemSize(e), 
                    this.renderEvent && Z.emitEvents([ this.renderEvent ], e, t.id % this._actualNumItems)); else {
                        var i = this._pool.size() > 0;
                        if ((e = i ? this._pool.get() : m(this._itemTmp))._listId != t.id && (e._listId = t.id, 
                        e.getComponent(c).setContentSize(this._itemSize)), e.setPosition(t.x, t.y), this._resetItemSize(e), 
                        this.content.addChild(e), i && this._needUpdateWidget) {
                            var n = e.getComponent(q);
                            n && n.updateAlignment();
                        }
                        e.setSiblingIndex(this.content.children.length - 1);
                        var r = e.getComponent(hv);
                        e.listItem = r, r && (r.listId = t.id, r.list = this, r._registerEvent()), this.renderEvent && Z.emitEvents([ this.renderEvent ], e, t.id % this._actualNumItems);
                    }
                    e.setSiblingIndex(t.id), this._resetItemSize(e), this._updateListItem(e.listItem), 
                    this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id);
                }, n._createOrUpdateItem2 = function(t) {
                    var e, i = this.content.children[t];
                    i ? this._forceUpdate && this.renderEvent && (i._listId = t, e && (e.listId = t), 
                    this.renderEvent && Z.emitEvents([ this.renderEvent ], i, t)) : ((i = m(this._itemTmp))._listId = t, 
                    this.content.addChild(i), e = i.getComponent(hv), i.listItem = e, e && (e.listId = t, 
                    e.list = this, e._registerEvent()), this.renderEvent && Z.emitEvents([ this.renderEvent ], i, t)), 
                    this._updateListItem(e), this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t);
                }, n._updateListItem = function(t) {
                    if (t && this.selectedMode > pv.NONE) {
                        var e = t.node;
                        switch (this.selectedMode) {
                          case pv.SINGLE:
                            t.selected = this.selectedId == e._listId;
                            break;

                          case pv.MULT:
                            t.selected = this.multSelected.indexOf(e._listId) >= 0;
                        }
                    }
                }, n._resetItemSize = function(t) {}, n._updateItemPos = function(t) {
                    var e = isNaN(t) ? t : this.getItemByListId(t), i = this.getItemPos(e._listId);
                    e.setPosition(i.x, i.y);
                }, n.setMultSelected = function(t, e) {
                    var i = this;
                    if (i.checkInited()) {
                        var n, r;
                        if (Array.isArray(t) || (t = [ t ]), null == e) i.multSelected = t; else if (e) for (var o = t.length - 1; o >= 0; o--) n = t[o], 
                        (r = i.multSelected.indexOf(n)) < 0 && i.multSelected.push(n); else for (var a = t.length - 1; a >= 0; a--) n = t[a], 
                        (r = i.multSelected.indexOf(n)) >= 0 && i.multSelected.splice(r, 1);
                        i._forceUpdate = !0, i._onScrolling();
                    }
                }, n.updateItem = function(t) {
                    if (this.checkInited()) {
                        Array.isArray(t) || (t = [ t ]);
                        for (var e = 0, i = t.length; e < i; e++) {
                            var n = t[e], r = this.getItemByListId(n);
                            r && Z.emitEvents([ this.renderEvent ], r, n % this._actualNumItems);
                        }
                    }
                }, n.updateAll = function() {
                    this.checkInited() && (this.numItems = this.numItems);
                }, n.getItemByListId = function(t) {
                    if (this.content) for (var e = this.content.children.length - 1; e >= 0; e--) {
                        var i = this.content.children[e];
                        if (i._listId == t) return i;
                    }
                }, n._getOutsideItem = function() {
                    for (var t, e = [], i = this.content.children.length - 1; i >= 0; i--) t = this.content.children[i], 
                    this.displayData.find(function(e) {
                        return e.id == t._listId;
                    }) || e.push(t);
                    return e;
                }, n._delRedundantItem = function() {
                    if (this._virtual) for (var t = this._getOutsideItem(), e = t.length - 1; e >= 0; e--) {
                        var i = t[e];
                        if (!this._scrollItem || i._listId != this._scrollItem._listId) {
                            this._pool.put(i);
                            for (var n = this._lastDisplayData.length - 1; n >= 0; n--) if (this._lastDisplayData[n] == i._listId) {
                                this._lastDisplayData.splice(n, 1);
                                break;
                            }
                        }
                    } else for (;this.content.children.length > this._numItems; ) this._delSingleItem(this.content.children[this.content.children.length - 1]);
                }, n._delSingleItem = function(t) {
                    t.removeFromParent(), t.destroy && t.destroy(), t = null;
                }, n.aniDelItem = function(t, e, i) {
                    var n = this;
                    if (!n.checkInited() || n.cyclic || !n._virtual) return p("This function is not allowed to be called!");
                    if (n._aniDelRuning) return O("Please wait for the current deletion to finish!");
                    var r, o = n.getItemByListId(t);
                    if (o) {
                        r = o.getComponent(hv), n._aniDelRuning = !0;
                        var a = n.displayData[n.displayData.length - 1].id, s = r.selected;
                        r.showAni(i, function() {
                            var i;
                            if (a < n._numItems - 2 && (i = a + 1), null != i) {
                                var r = n._calcItemPos(i);
                                n.displayData.push(r), n._virtual ? n._createOrUpdateItem(r) : n._createOrUpdateItem2(i);
                            } else n._numItems--;
                            if (n.selectedMode == pv.SINGLE) s ? n._selectedId = -1 : n._selectedId - 1 >= 0 && n._selectedId--; else if (n.selectedMode == pv.MULT && n.multSelected.length) {
                                var u = n.multSelected.indexOf(t);
                                u >= 0 && n.multSelected.splice(u, 1);
                                for (var c = n.multSelected.length - 1; c >= 0; c--) n.multSelected[c] >= t && n.multSelected[c]--;
                            }
                            if (n._customSize) {
                                n._customSize[t] && delete n._customSize[t];
                                var h, d = {};
                                for (var f in n._customSize) {
                                    h = n._customSize[f];
                                    var p = parseInt(f);
                                    d[p - (p >= t ? 1 : 0)] = h;
                                }
                                n._customSize = d;
                            }
                            for (var v, b = F(o), g = null != i ? i : a; g >= t + 1; g--) if (o = n.getItemByListId(g)) {
                                var m = n._calcItemPos(g - 1);
                                b.to(.2333, {
                                    position: l(m.x, m.y)
                                }), g <= t + 1 && (v = !0, b.call(function() {
                                    n._aniDelRuning = !1, e(t);
                                })), b.start();
                            }
                            v || (n._aniDelRuning = !1, e(t));
                        }, !0);
                    } else e(t);
                }, n.scrollTo = function(t, e, i, n) {
                    void 0 === e && (e = .5), void 0 === i && (i = null), void 0 === n && (n = !1);
                    var r = this;
                    if (r.checkInited(!1)) {
                        null == e ? e = .5 : e < 0 && (e = 0), t < 0 ? t = 0 : t >= r._numItems && (t = r._numItems - 1), 
                        !r._virtual && r._layout && r._layout.enabled && r._layout.updateLayout();
                        var o, a, u = r.getItemPos(t);
                        switch (r._alignCalcType) {
                          case 1:
                            o = u.left, o -= null != i ? r.node.getComponent(c).width * i : r._leftGap, u = s(o, 0);
                            break;

                          case 2:
                            o = u.right - r.node.getComponent(c).width, o += null != i ? r.node.getComponent(c).width * i : r._rightGap, 
                            u = s(o + r.content.getComponent(c).width, 0);
                            break;

                          case 3:
                            a = u.top, a += null != i ? r.node.getComponent(c).height * i : r._topGap, u = s(0, -a);
                            break;

                          case 4:
                            a = u.bottom + r.node.getComponent(c).height, a -= null != i ? r.node.getComponent(c).height * i : r._bottomGap, 
                            u = s(0, -a + r.content.getComponent(c).height);
                        }
                        var h = r.content.getPosition();
                        h = Math.abs(r._sizeType ? h.y : h.x);
                        var d = r._sizeType ? u.y : u.x;
                        Math.abs((null != r._scrollPos ? r._scrollPos : h) - d) > .5 && (r._scrollView.scrollToOffset(u, e), 
                        r._scrollToListId = t, r._scrollToEndTime = new Date().getTime() / 1e3 + e, r._scrollToSo = r.scheduleOnce(function() {
                            if (r._adheringBarrier || (r.adhering = r._adheringBarrier = !1), r._scrollPos = r._scrollToListId = r._scrollToEndTime = r._scrollToSo = null, 
                            n) {
                                var e = r.getItemByListId(t);
                                e && F(e).to(.1, {
                                    scale: l(1.05, 1.05, 1)
                                }).to(.1, {
                                    scale: l(1, 1, 1)
                                }).start();
                            }
                        }, e + .1), e <= 0 && r._onScrolling());
                    }
                }, n._calcNearestItem = function() {
                    var t, e, i, n, r, o, a = this;
                    a.nearestListId = null, a._virtual && a._calcViewPos(), i = a.viewTop, n = a.viewRight, 
                    r = a.viewBottom, o = a.viewLeft;
                    for (var s = !1, l = 0; l < a.content.children.length && !s; l += a._colLineNum) if (t = a._virtual ? a.displayData[l] : a._calcExistItemPos(l)) switch (e = a._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, 
                    a._alignCalcType) {
                      case 1:
                        t.right >= o && (a.nearestListId = t.id, o > e && (a.nearestListId += a._colLineNum), 
                        s = !0);
                        break;

                      case 2:
                        t.left <= n && (a.nearestListId = t.id, n < e && (a.nearestListId += a._colLineNum), 
                        s = !0);
                        break;

                      case 3:
                        t.bottom <= i && (a.nearestListId = t.id, i < e && (a.nearestListId += a._colLineNum), 
                        s = !0);
                        break;

                      case 4:
                        t.top >= r && (a.nearestListId = t.id, r > e && (a.nearestListId += a._colLineNum), 
                        s = !0);
                    }
                    if ((t = a._virtual ? a.displayData[a.displayItemNum - 1] : a._calcExistItemPos(a._numItems - 1)) && t.id == a._numItems - 1) switch (e = a._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, 
                    a._alignCalcType) {
                      case 1:
                        n > e && (a.nearestListId = t.id);
                        break;

                      case 2:
                        o < e && (a.nearestListId = t.id);
                        break;

                      case 3:
                        r < e && (a.nearestListId = t.id);
                        break;

                      case 4:
                        i > e && (a.nearestListId = t.id);
                    }
                }, n.prePage = function(t) {
                    void 0 === t && (t = .5), this.checkInited() && this.skipPage(this.curPageNum - 1, t);
                }, n.nextPage = function(t) {
                    void 0 === t && (t = .5), this.checkInited() && this.skipPage(this.curPageNum + 1, t);
                }, n.skipPage = function(t, e) {
                    var i = this;
                    if (i.checkInited()) return i._slideMode != fv.PAGE ? p("This function is not allowed to be called, Must SlideMode = PAGE!") : void (t < 0 || t >= i._numItems || i.curPageNum != t && (i.curPageNum = t, 
                    i.pageChangeEvent && Z.emitEvents([ i.pageChangeEvent ], t), i.scrollTo(t, e)));
                }, n.calcCustomSize = function(t) {
                    var e = this;
                    if (e.checkInited()) {
                        if (!e._itemTmp) return p("Unset template item!");
                        if (!e.renderEvent) return p("Unset Render-Event!");
                        e._customSize = {};
                        var i = m(e._itemTmp);
                        e.content.addChild(i);
                        for (var n = 0; n < t; n++) Z.emitEvents([ e.renderEvent ], i, n), i.getComponent(c).height == e._itemSize.height && i.getComponent(c).width == e._itemSize.width || (e._customSize[n] = e._sizeType ? i.getComponent(c).height : i.getComponent(c).width);
                        return Object.keys(e._customSize).length || (e._customSize = null), i.removeFromParent(), 
                        i.destroy && i.destroy(), e._customSize;
                    }
                }, ht(e, [ {
                    key: "slideMode",
                    get: function() {
                        return this._slideMode;
                    },
                    set: function(t) {
                        this._slideMode = t;
                    }
                }, {
                    key: "virtual",
                    get: function() {
                        return this._virtual;
                    },
                    set: function(t) {
                        null != t && (this._virtual = t), 0 != this._numItems && this._onScrolling();
                    }
                }, {
                    key: "updateRate",
                    get: function() {
                        return this._updateRate;
                    },
                    set: function(t) {
                        t >= 0 && t <= 6 && (this._updateRate = t);
                    }
                }, {
                    key: "selectedId",
                    get: function() {
                        return this._selectedId;
                    },
                    set: function(t) {
                        var e, i = this;
                        switch (i.selectedMode) {
                          case pv.SINGLE:
                            if (!i.repeatEventSingle && t == i._selectedId) return;
                            if (e = i.getItemByListId(t), i._selectedId >= 0 ? i._lastSelectedId = i._selectedId : i._lastSelectedId = null, 
                            i._selectedId = t, e && (e.getComponent(hv).selected = !0), i._lastSelectedId >= 0 && i._lastSelectedId != i._selectedId) {
                                var n = i.getItemByListId(i._lastSelectedId);
                                n && (n.getComponent(hv).selected = !1);
                            }
                            i.selectedEvent && Z.emitEvents([ i.selectedEvent ], e, t % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems);
                            break;

                          case pv.MULT:
                            if (!(e = i.getItemByListId(t))) return;
                            var r = e.getComponent(hv);
                            i._selectedId >= 0 && (i._lastSelectedId = i._selectedId), i._selectedId = t;
                            var o = !r.selected;
                            r.selected = o;
                            var a = i.multSelected.indexOf(t);
                            o && a < 0 ? i.multSelected.push(t) : !o && a >= 0 && i.multSelected.splice(a, 1), 
                            i.selectedEvent && Z.emitEvents([ i.selectedEvent ], e, t % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems, o);
                        }
                    }
                }, {
                    key: "numItems",
                    get: function() {
                        return this._actualNumItems;
                    },
                    set: function(t) {
                        var e = this;
                        if (e.checkInited(!1)) if (null == t || t < 0) p("numItems set the wrong::", t); else if (e._actualNumItems = e._numItems = t, 
                        e._forceUpdate = !0, e._virtual) e._resizeContent(), e.cyclic && (e._numItems = e._cyclicNum * e._numItems), 
                        e._onScrolling(), e.frameByFrameRenderNum || e.slideMode != fv.PAGE || (e.curPageNum = e.nearestListId); else {
                            var i = e.content.getComponent(P);
                            if (i && (i.enabled = !0), e._delRedundantItem(), e.firstListId = 0, e.frameByFrameRenderNum > 0) {
                                for (var n = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum, r = 0; r < n; r++) e._createOrUpdateItem2(r);
                                e.frameByFrameRenderNum < e._numItems && (e._updateCounter = e.frameByFrameRenderNum, 
                                e._updateDone = !1);
                            } else {
                                for (var o = 0; o < t; o++) e._createOrUpdateItem2(o);
                                e.displayItemNum = t;
                            }
                        }
                    }
                }, {
                    key: "scrollView",
                    get: function() {
                        return this._scrollView;
                    }
                } ]), e;
            }(a)).prototype, "templateType", [ Ep ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return dv.NODE;
                }
            }), Xp = _t(Kp.prototype, "tmpNode", [ Bp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Jp = _t(Kp.prototype, "tmpPrefab", [ Pp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Qp = _t(Kp.prototype, "_slideMode", [ bv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return fv.NORMAL;
                }
            }), _t(Kp.prototype, "slideMode", [ Rp ], Object.getOwnPropertyDescriptor(Kp.prototype, "slideMode"), Kp.prototype), 
            Zp = _t(Kp.prototype, "pageDistance", [ Lp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3;
                }
            }), $p = _t(Kp.prototype, "pageChangeEvent", [ Dp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Z();
                }
            }), tv = _t(Kp.prototype, "_virtual", [ bv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), _t(Kp.prototype, "virtual", [ Op ], Object.getOwnPropertyDescriptor(Kp.prototype, "virtual"), Kp.prototype), 
            ev = _t(Kp.prototype, "cyclic", [ Mp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), iv = _t(Kp.prototype, "lackCenter", [ Fp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), nv = _t(Kp.prototype, "lackSlide", [ Np ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), rv = _t(Kp.prototype, "_updateRate", [ bv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), _t(Kp.prototype, "updateRate", [ zp ], Object.getOwnPropertyDescriptor(Kp.prototype, "updateRate"), Kp.prototype), 
            ov = _t(Kp.prototype, "frameByFrameRenderNum", [ Gp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), av = _t(Kp.prototype, "renderEvent", [ Up ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Z();
                }
            }), sv = _t(Kp.prototype, "selectedMode", [ Vp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return pv.NONE;
                }
            }), lv = _t(Kp.prototype, "repeatEventSingle", [ Wp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), uv = _t(Kp.prototype, "selectedEvent", [ Hp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), cv = _t(Kp.prototype, "_numItems", [ jp ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Yp = Kp)) || Yp) || Yp) || Yp) || Yp) || Yp);
            t._RF.pop(), t._RF.push({}, "5f634MLmbFPjqOflUMhK5TG", "LevelItem", void 0);
            var jv, Yv, Kv, qv, Xv, Jv, Qv, Zv, $v, tb = e.ccclass, eb = e.property, ib = (Iv = tb("LevelItem"), 
            wv = eb(L), Sv = eb(k), Cv = eb(b), Av = eb(k), Tv = eb(b), kv = eb(i), xv = eb(k), 
            Ev = eb(b), Bv = eb(b), Pv = eb(i), Iv((Dv = _t((Lv = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "level", Dv, mt(e)), 
                    yt(mt(e), "btn", Ov, mt(e)), yt(mt(e), "btnSprites", Mv, mt(e)), yt(mt(e), "halo", Fv, mt(e)), 
                    yt(mt(e), "haloSprites", Nv, mt(e)), yt(mt(e), "hardIcon", zv, mt(e)), yt(mt(e), "stars", Gv, mt(e)), 
                    yt(mt(e), "starSprites", Uv, mt(e)), yt(mt(e), "boxSprites", Vv, mt(e)), yt(mt(e), "activityIcon", Wv, mt(e)), 
                    dt(mt(e), "colorArr", [ J(81, 70, 115), J(64, 137, 220), J(86, 28, 123), J(174, 108, 50) ]), 
                    dt(mt(e), "_levelId", void 0), dt(mt(e), "isActivity", !1), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.updateData = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i, r, o, a, s;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                for (this._levelId = e, this.level.string = "" + e, this.level.fontSize = e >= 1e3 ? 30 : e >= 100 ? 34 : 38, 
                                i = da.I.getMapData(e), r = _d.I.curLevel, o = _d.I.getLevelStar(e), a = r >= e, 
                                s = 0; s < this.stars.length; s++) this.stars[s].spriteFrame = this.starSprites[s < o ? 0 : 1], 
                                this.stars[s].node.active = a;
                                i.hard ? (e > r ? (this.btn.spriteFrame = this.btnSprites[0], this.level.getComponent(Q).color = this.colorArr[0], 
                                this.halo.node.active = !1) : (e == r ? (this.halo.node.active = !0, this.halo.spriteFrame = this.haloSprites[1]) : this.halo.node.active = !1, 
                                this.btn.spriteFrame = this.btnSprites[2], this.level.getComponent(Q).color = this.colorArr[2]), 
                                this.hardIcon.active = !0) : (e > r ? (this.btn.spriteFrame = this.btnSprites[0], 
                                this.level.getComponent(Q).color = this.colorArr[0], this.halo.node.active = !1) : e == r ? (this.halo.node.active = !0, 
                                this.halo.spriteFrame = this.haloSprites[0], this.btn.spriteFrame = this.btnSprites[3], 
                                this.level.getComponent(Q).color = this.colorArr[3]) : (this.halo.node.active = !1, 
                                this.btn.spriteFrame = this.btnSprites[1], this.level.getComponent(Q).color = this.colorArr[1]), 
                                this.hardIcon.active = !1);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.startLevel = function() {
                    if (this.isActivity) {
                        if (_d.I.ActivityLevel != this._levelId + Je.ACTIVITY_ID_START || !_d.I.CurActivity) return;
                        ad.I.openPopwin(td.activityStart, this._levelId + Je.ACTIVITY_ID_START);
                    } else {
                        if (_d.I.curLevel < this._levelId) return;
                        ad.I.openPopwin(td.levelStart, this._levelId);
                    }
                }, i.updateActivityData = function(t) {
                    this._levelId = t, this.isActivity = !0, this.level.string = "" + t, this.level.fontSize = t >= 1e3 ? 30 : t >= 100 ? 34 : 38;
                    var e = _d.I.ActivityLevel;
                    t + Je.ACTIVITY_ID_START > e ? (this.btn.spriteFrame = this.btnSprites[0], this.level.getComponent(Q).color = this.colorArr[0], 
                    this.halo.node.active = !1) : t + Je.ACTIVITY_ID_START == e ? (this.halo.node.active = !0, 
                    this.halo.spriteFrame = this.haloSprites[0], this.btn.spriteFrame = this.btnSprites[3], 
                    this.level.getComponent(Q).color = this.colorArr[3]) : (this.halo.node.active = !1, 
                    this.btn.spriteFrame = this.btnSprites[1], this.level.getComponent(Q).color = this.colorArr[1]), 
                    this.activityIcon.active = t > 0 && t % 5 == 0, this.activityIcon.active && (this.activityIcon.getComponent(k).spriteFrame = this.boxSprites[t < _d.I.ActivityLevel - Je.ACTIVITY_ID_START ? 0 : 1]), 
                    this.activityIcon.on("click", this.onActivityBoxClick, this);
                }, i.onActivityBoxClick = function() {
                    ad.I.openPopwin(td.activityBox, this._levelId);
                }, e;
            }(a)).prototype, "level", [ wv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ov = _t(Lv.prototype, "btn", [ Sv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Mv = _t(Lv.prototype, "btnSprites", [ Cv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Fv = _t(Lv.prototype, "halo", [ Av ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Nv = _t(Lv.prototype, "haloSprites", [ Tv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), zv = _t(Lv.prototype, "hardIcon", [ kv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Gv = _t(Lv.prototype, "stars", [ xv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Uv = _t(Lv.prototype, "starSprites", [ Ev ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Vv = _t(Lv.prototype, "boxSprites", [ Bv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Wv = _t(Lv.prototype, "activityIcon", [ Pv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Rv = Lv)) || Rv);
            t._RF.pop(), t._RF.push({}, "dd459IkhsFI1YJnNh6Nw5vI", "LevelGroup", void 0);
            var nb, rb, ob, ab, sb, lb, ub, cb, hb, db, fb, pb, vb, bb, gb, mb, yb, _b, Ib, wb, Sb, Cb, Ab, Tb, kb, xb, Eb, Bb, Pb = e.ccclass, Rb = e.property, Lb = (jv = Pb("LevelGroup"), 
            Yv = Rb(ib), Kv = Rb(i), qv = Rb(b), jv((Qv = _t((Jv = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "levels", Qv, mt(e)), 
                    yt(mt(e), "paths", Zv, mt(e)), yt(mt(e), "pathSprite", $v, mt(e)), dt(mt(e), "pathArr", [ 2, 3, 3, 2, 1, 1 ]), 
                    dt(mt(e), "isActivity", !1), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.updateData = function(t, e) {
                    var i = this;
                    this.isActivity = !1;
                    var n = Je.MAX_LEVEL;
                    this.levels.forEach(function(e, i) {
                        t + i > n ? e.node.active = !1 : e.updateData(t + i);
                    }), this.paths.forEach(function(r, o) {
                        var a = i.pathArr[o] - 1;
                        t + o >= n || !e && o == i.paths.length - 1 ? r.active = !1 : t + o >= _d.I.curLevel ? r.getComponent(k).spriteFrame = i.pathSprite[2 * a + 1] : r.getComponent(k).spriteFrame = i.pathSprite[2 * a];
                    });
                }, i.updateActivityData = function(t, e) {
                    var i = this;
                    this.isActivity = !0;
                    var n = da.I.actMapMaxID - Je.ACTIVITY_ID_START;
                    this.levels.forEach(function(e, i) {
                        t + i > n ? e.node.active = !1 : (e.node.active = !0, e.updateActivityData(t + i));
                    }), this.paths.forEach(function(r, o) {
                        t + o >= n || !e && o == i.paths.length - 1 ? r.active = !1 : (r.active = !0, t + o >= _d.I.ActivityLevel - Je.ACTIVITY_ID_START ? r.getComponent(G).opacity = 120 : r.getComponent(G).opacity = 255);
                    });
                }, e;
            }(a)).prototype, "levels", [ Yv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Zv = _t(Jv.prototype, "paths", [ Kv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), $v = _t(Jv.prototype, "pathSprite", [ qv ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Xv = Jv)) || Xv);
            t._RF.pop(), t._RF.push({}, "1c70d+SrTFJnIXu2d108gDL", "HomePopwin", void 0);
            var Db, Ob, Mb, Fb, Nb, zb, Gb = e.ccclass, Ub = e.property;
            nb = Gb("HomePopwin"), rb = Ub(Hv), ob = Ub(L), ab = Ub(U), sb = Ub(R), lb = Ub(I), 
            ub = Ub(i), cb = Ub(R), hb = Ub(L), db = Ub(i), fb = Ub(I), pb = Ub(i), vb = Ub(R), 
            bb = Ub(R), nb((mb = _t((gb = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "levelList", mb, mt(e)), 
                    yt(mt(e), "level", yb, mt(e)), yt(mt(e), "wheelBar", _b, mt(e)), yt(mt(e), "wheelBtn", Ib, mt(e)), 
                    yt(mt(e), "wheelAni", wb, mt(e)), yt(mt(e), "wheelEffect", Sb, mt(e)), yt(mt(e), "activityBtn", Cb, mt(e)), 
                    yt(mt(e), "lblActivity", Ab, mt(e)), yt(mt(e), "goldBar", Tb, mt(e)), yt(mt(e), "acitivityAnimation", kb, mt(e)), 
                    yt(mt(e), "activityBtnEffect", xb, mt(e)), yt(mt(e), "btnMission", Eb, mt(e)), yt(mt(e), "btnRank", Bb, mt(e)), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onEnable = function() {
                    this.resetGoldBar();
                }, i.onLoad = function() {
                    Nn.I.on(on, this.resetGoldBar, this), Nn.I.on(un, this.updateBtnMission, this);
                }, i.open = function(e, i) {
                    var n = this;
                    t.prototype.open.call(this), this.levelList._bottomGap = this.levelList.content.getComponent(P).paddingBottom = 300 + (u("Canvas").getComponent(c).height - 1334) / 2;
                    var r = _d.I.curLevel;
                    this.levelList.numItems = Math.ceil(Je.MAX_LEVEL / 6);
                    var o = -this.levelList.tmpPrefab.data.getComponent(Lb).levels[(r - 1) % 6].node.position.y;
                    this.level.string = "第" + _d.I.curLevel + "关", this.levelList.scrollTo(Math.ceil(r / 6) - 1, 0, (o + this.levelList._bottomGap) / this.levelList.getComponent(c).height), 
                    qr.I.dot("Popwin", {
                        win: "show"
                    }), qr.I.dot("Home", {
                        from: e
                    }), qr.I.dot("Home", {
                        level: i
                    }), this.wheelBtn.node.active = r > Je.WHEEL_OPEN, Nn.I.on(nn, this.updateWheel, this), 
                    this.updateWheel(), this.checkActivityBtn(), this.checkMission(), this.updateBtnRank(), 
                    this.schedule(function() {
                        n.checkActivityBtn(), n.updateBtnRank();
                    }, 1);
                }, i.updateLevelGroupItem = function(t, e) {
                    t.getComponent(Lb).updateData(6 * e + 1, e < this.levelList.numItems - 1);
                }, i.startLevel = function() {
                    ad.I.openPopwin(td.levelStart, _d.I.curLevel);
                }, i.openSign = function() {
                    ad.I.openPopwin(td.sign);
                }, i.openTurnTable = function() {
                    ad.I.openPopwin(td.turnTable);
                }, i.updateWheel = function() {
                    this.wheelBar.node.active = _d.I.turnTableCounts < fa.I.TurnTableData.length;
                    var t = this.wheelBtn.node.getChildByName("point");
                    if (_d.I.turnTableCounts < fa.I.TurnTableData.length) {
                        var e = fa.I.getTurnTableRewards(_d.I.turnTableCounts);
                        t.active = _d.I.turnTableStars >= e.stars;
                        var i = _d.I.turnTableStars / e.stars;
                        i > 1 && (i = 1), this.wheelBar.progress = i;
                    } else this.wheelBar.progress = 1, t.active = !1;
                    t.active ? this.wheelAni.play("anim_wheelbtn") : (this.wheelAni.stop(), this.wheelEffect.active = !1);
                }, i.onActivityClick = function() {
                    ad.I.openPopwin(td.activityHome), qr.I.dot("Event_Main", {
                        id: _d.I.CurActivity
                    }), _d.I.hasActivityClick = !0;
                }, i.checkActivityBtn = function() {
                    this.activityBtn.node.active = !!_d.I.CurActivity, this.activityBtn.node.getChildByName("Node").getChildByName("icon_limitactivity").getChildByName("point").active = _d.I.CurActivity && !_d.I.hasActivityClick && _d.I.ActivityLevel <= da.I.actMapMaxID, 
                    this.activityBtn.node.active && (this.activityBtn.interactable = _d.I.curLevel >= Je.ACTIVITY_OPEN_LEVEL, 
                    this.activityBtn.node.getChildByName("Node").getChildByName("icon_limitactivity").getComponent(k).grayscale = _d.I.curLevel < Je.ACTIVITY_OPEN_LEVEL, 
                    this.lblActivity.string = _d.I.curLevel < Je.ACTIVITY_OPEN_LEVEL ? Je.ACTIVITY_OPEN_LEVEL + "关开启" : this.getEndTime(), 
                    this.activityBtn.interactable ? this.acitivityAnimation.play("anim_activitybtn") : this.acitivityAnimation.stop());
                    for (var t = 0; t < this.activityBtnEffect.length; ++t) this.activityBtnEffect[t].active = _d.I.curLevel >= Je.ACTIVITY_OPEN_LEVEL;
                }, i.resetGoldBar = function() {
                    this.goldBar.getComponent(Eh).resetShowOne();
                }, i.getEndTime = function() {
                    var t = _d.I.CurActivity.split("_"), e = parseInt(t[t.length - 1]), i = br.getParamsInt("event_close_" + e) || 0;
                    br.isWx || (i = Je.ACTIVITY_TEST_CLOSE);
                    var n = Math.floor((i - new Date().getTime()) / 1e3);
                    return Ve.getFormatBySecond(n, 5);
                }, i.onBtnMissionClick = function() {
                    ad.I.openPopwin(td.mission), qr.I.dot("Mission_Main");
                }, i.checkMission = function() {
                    var t = _d.I.curLevel >= Je.MISSION_OPEN_LEVEL;
                    _d.I.MissionTimer > 0 && Ve.isNewDay(_d.I.MissionTimer) && (Ba.I.initDailyTask(), 
                    Nn.I.emit(sn));
                    var e = !1, i = 0;
                    if (t) for (var n = 0; n < Ba.I.tasks.length; ++n) {
                        var r = fa.I.getMissionByID(Ba.I.tasks[n].id);
                        if (Ba.I.getMissionCounts(Ba.I.tasks[n].type) >= (r.target.length > 1 ? r.target[1] : r.target[0])) {
                            if (_d.I.MissionFlags[n] < 1) {
                                e = !0;
                                break;
                            }
                            i++;
                        }
                    }
                    i > 0 && i >= Ba.I.tasks.length && _d.I.MissionBoxFlag < 1 && (e = !0), Nn.I.emit(un, t, e);
                }, i.updateBtnMission = function(t, e) {
                    this.btnMission.interactable = t, this.btnMission.node.getComponent(k).grayscale = !t, 
                    this.btnMission.node.children[0].getComponent(L).string = t ? "每日任务" : Je.MISSION_OPEN_LEVEL + "关开启", 
                    this.btnMission.node.children[1].active = e;
                }, i.onBtnRankClick = function() {
                    ad.I.openPopwin(td.rankList);
                }, i.updateBtnRank = function() {
                    var t = _d.I.curLevel >= Je.RANK_OPEN_LEVEL;
                    this.btnRank.interactable = t, this.btnRank.node.getComponent(k).grayscale = !t, 
                    this.btnRank.node.children[0].getComponent(L).string = t ? "排行榜" : Je.RANK_OPEN_LEVEL + "关开启", 
                    this.btnRank.node.children[1].active = t && !_d.I.hasRankClick;
                }, e;
            }($h)).prototype, "levelList", [ rb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), yb = _t(gb.prototype, "level", [ ob ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _b = _t(gb.prototype, "wheelBar", [ ab ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ib = _t(gb.prototype, "wheelBtn", [ sb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), wb = _t(gb.prototype, "wheelAni", [ lb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Sb = _t(gb.prototype, "wheelEffect", [ ub ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Cb = _t(gb.prototype, "activityBtn", [ cb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ab = _t(gb.prototype, "lblActivity", [ hb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Tb = _t(gb.prototype, "goldBar", [ db ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), kb = _t(gb.prototype, "acitivityAnimation", [ fb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), xb = _t(gb.prototype, "activityBtnEffect", [ pb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Eb = _t(gb.prototype, "btnMission", [ vb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Bb = _t(gb.prototype, "btnRank", [ bb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), gb)), t._RF.pop(), t._RF.push({}, "25db7iS/TxNQ5JUK/G6uOeQ", "GmTool", void 0);
            var Vb, Wb, Hb, jb, Yb, Kb, qb, Xb, Jb, Qb, Zb = e.ccclass, $b = e.property;
            Db = Zb("GmTool"), Ob = $b(it), Mb = $b(it), Db((Nb = _t((Fb = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "levelEdit", Nb, mt(e)), 
                    yt(mt(e), "goldEdit", zb, mt(e)), dt(mt(e), "_level", 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.start = function() {
                    this.goldEdit.string = "100", Nn.I.on(Ri, this.updateLevel, this), this.updateLevel(_d.I.curLevel);
                }, i.updateLevel = function(t) {
                    this._level = t, this.levelEdit.string = "" + _d.I.curLevel;
                }, i.jump = function() {
                    var t = parseInt(this.levelEdit.string);
                    t <= 0 && (t = 1), _d.I.setLevel(t), Nn.I.emit(Ri, t);
                }, i.prev = function() {
                    var t = Math.max(this._level - 1, 1);
                    _d.I.setLevel(t), Nn.I.emit(Ri, t);
                }, i.next = function() {
                    var t = Math.max(this._level + 1, 0);
                    _d.I.setLevel(t), Nn.I.emit(Ri, t);
                }, i.addGold = function() {
                    _d.I.addGold(parseInt(this.goldEdit.string));
                }, i.ontest = function() {
                    ad.I.openPopwin(td.hardShop);
                }, i.clearUserData = function() {
                    _d.I.clear(), je.I.clear();
                }, i.sendSubscribe = function() {
                    wx.onTouchEnd(function() {
                        br.subScribe(Ct.subscribeIds, function(t) {
                            "accept" == t[Ct.subscribeIds[0]] && (_d.I.SubscribeSign = !0, _d.I.subscribeSign()), 
                            "accept" == t[Ct.subscribeIds[1]] && (_d.I.SubscribeWheel = !0, _d.I.subscribeWheel());
                        }, function() {
                            console.log("发送订阅失败");
                        });
                    });
                }, i.clearWheelData = function() {
                    _d.I.chearWheel();
                }, i.addWheelStars = function() {
                    _d.I.turnTableStars += 3;
                }, i.clearSub = function() {
                    _d.I.clearSubscribeData();
                }, i.jumpActMap = function() {
                    if (_d.I.CurActivity) {
                        var t = parseInt(this.levelEdit.string);
                        t <= Je.ACTIVITY_ID_START && (t = Je.ACTIVITY_ID_START + 1), _d.I.ActivityLevel = t, 
                        Nn.I.emit(Ri, t, !0);
                    }
                }, i.addPower = function() {
                    _d.I.addPower(1);
                }, i.clearActivityOpen = function() {
                    localStorage.setItem("ActivityOpen", "0");
                }, i.addMissionOnline = function() {
                    Ba.I.addDailyTaskCounts(Aa.online, 60);
                }, i.finishAllMission = function() {
                    for (var t = 0; t < Ba.I.tasks.length; ++t) Ba.I.addDailyTaskCounts(Ba.I.tasks[t].type, 1e3);
                }, i.clearRankClick = function() {
                    localStorage.removeItem("RankClick");
                }, e;
            }(a)).prototype, "levelEdit", [ Ob ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zb = _t(Fb.prototype, "goldEdit", [ Mb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Fb)), t._RF.pop(), t._RF.push({}, "25e02cC/zdOWrEuB6+ODtIJ", "OnlineGiftRewardPopwin", void 0);
            var tg = e.ccclass, eg = e.property;
            Vb = tg("OnlineGiftRewardPopwin"), Wb = eg(Bo), Hb = eg(L), jb = eg(k), Yb = eg(L), 
            Vb((qb = _t((Kb = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "layer", qh.reward), 
                    yt(mt(e), "boosterIcon", qb, mt(e)), yt(mt(e), "boosterCnt", Xb, mt(e)), yt(mt(e), "goldIcon", Jb, mt(e)), 
                    yt(mt(e), "goldCnt", Qb, mt(e)), dt(mt(e), "count", void 0), dt(mt(e), "rewardBooster", void 0), 
                    dt(mt(e), "rewardGold", void 0), dt(mt(e), "weights", [ 3, 3, 1, 3 ]), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this.count = e, this.rewardBooster = Ve.getWeightRandIndex(this.weights, 10), 
                    this.boosterIcon.type = this.rewardBooster, this.boosterCnt.string = "+" + e, this.rewardGold = 10 * Ve.randomInt(1, 9), 
                    this.goldCnt.string = "+" + e * this.rewardGold, qr.I.dot("Popwin", {
                        OnlineGiftReward: "show"
                    });
                }, i.getReward = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Uo.playAd(zo.onlineGiftRewardDouble);

                              case 2:
                                this.receive(2), qr.I.dot("Popwin", {
                                    OnlineGiftReward: "doubleReceive"
                                });

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.skip = function() {
                    this.receive(1), qr.I.dot("Popwin", {
                        OnlineGiftReward: "receive"
                    });
                }, i.receive = function(t) {
                    var e = t;
                    this.count *= t, _d.I.addBooster(this.rewardBooster, this.count), _d.I.addGold(this.rewardGold * this.count, this.goldIcon.node), 
                    1 == e ? qr.I.dot("coinget_OnlineGift", {
                        key: this.rewardGold * this.count
                    }) : qr.I.dot("coinget_OnlineGiftx2", {
                        key: this.rewardGold * this.count
                    }), _d.I.onlineGiftReceive(), this.btnClose();
                }, e;
            }($h)).prototype, "boosterIcon", [ Wb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Xb = _t(Kb.prototype, "boosterCnt", [ Hb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Jb = _t(Kb.prototype, "goldIcon", [ jb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Qb = _t(Kb.prototype, "goldCnt", [ Yb ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Kb)), t._RF.pop(), t._RF.push({}, "2db408yEApEs59CFRAftioK", "EventButton", void 0);
            var ig, ng = e.ccclass;
            e.property, ng("EventButton")(function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e.prototype.sendEvent = function(t, e) {
                    var i, n = e.split(","), r = n.splice(0);
                    (i = Nn.I).emit.apply(i, [ r ].concat(n));
                }, e;
            }(R)), t._RF.pop(), t._RF.push({}, "3450fSbjOFKUYq17brLKBKC", "Diamond", void 0);
            var rg, og, ag, sg, lg, ug, cg = e.ccclass;
            e.property, cg(ig = (0, e.menu)("game/bubble/Diamond")(ig = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e;
            }(Ss)) || ig), t._RF.pop(), t._RF.push({}, "36cb939Bv9EFqxtQuwhAVR/", "ActivityOverPopwin", void 0);
            var hg, dg, fg, pg, vg = e.ccclass, bg = e.property;
            rg = vg("ActivityOverPopwin"), og = bg(L), ag = bg(L), rg((lg = _t((sg = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "tittle", lg, mt(e)), 
                    yt(mt(e), "desc", ug, mt(e)), e;
                }
                return pt(e, t), e.prototype.open = function(e) {
                    void 0 === e && (e = !1), t.prototype.open.call(this), wn.I.playSound(yn.Pop), this.tittle.string = e ? "活动已结束" : "活动已完成", 
                    this.desc.string = e ? "本期活动已结束!\r\n敬请期待下次活动" : "本期活动已完成!\r\n敬请期待下次活动";
                }, e;
            }($h)).prototype, "tittle", [ og ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ug = _t(sg.prototype, "desc", [ ag ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), sg)), t._RF.pop(), t._RF.push({}, "39520pIJgZEoqAuEWwJx3YZ", "ActivityOpenPopwin", void 0);
            var gg = e.ccclass, mg = e.property;
            hg = gg("ActivityOpenPopwin"), dg = mg(L), hg((pg = _t((fg = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "lblDesc", pg, mt(e)), 
                    dt(mt(e), "_levelId", 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this._levelId = e, qr.I.dot("EventPop", {
                        win: "show"
                    });
                }, i.activityHome = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return ad.I.openPopwin(td.home, "win", this._levelId), t.next = 3, ad.I.openPopwin(td.activityHome);

                              case 3:
                                Nn.I.emit(Pi), qr.I.dot("EventPop", {
                                    win: "click"
                                }), this.btnClose();

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.btnClose = function() {
                    t.prototype.btnClose.call(this), localStorage.setItem("ActivityOpen", new Date().getTime().toString()), 
                    qr.I.dot("EventPop", {
                        win: "hide"
                    });
                }, e;
            }($h)).prototype, "lblDesc", [ dg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), fg)), t._RF.pop(), t._RF.push({}, "3f871U7zJVEbo8atbzc34o0", "LuckGoldPopwin", void 0);
            var yg, _g, Ig, wg, Sg = e.ccclass;
            e.property, Sg("LuckGoldPopwin")(function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "layer", qh.reward), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function() {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), qr.I.dot("Popwin", {
                        LuckGold: "show"
                    });
                    var e = u("Canvas/GameScene").getComponent(fh).levelId;
                    [ 3, 6 ].indexOf(e) > -1 && qr.I.dot("level_" + e, {
                        from: "luckgold_show"
                    });
                }, i.getReward = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Uo.playAd(zo.luckyGoldFifty);

                              case 2:
                                this.btnClose(), _d.I.recordLuckyGift(2), _d.I.addGold(250), qr.I.dot("coinget_LuckGoldx50", {
                                    key: 250
                                }), qr.I.dot("Popwin", {
                                    LuckGold: "fiftyreceive"
                                }), e = u("Canvas/GameScene").getComponent(fh).levelId, [ 3, 6 ].indexOf(e) > -1 && (qr.I.dot("level_" + e, {
                                    from: "luckgold_video"
                                }), u("Canvas/GameScene").getComponent(fh).isCloseLuckPop = !0);

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.skip = function() {
                    this.btnClose(), _d.I.recordLuckyGift(1), _d.I.addGold(5), qr.I.dot("coinget_LuckGold", {
                        key: 5
                    }), qr.I.dot("Popwin", {
                        LuckGold: "receive"
                    });
                    var t = u("Canvas/GameScene").getComponent(fh).levelId;
                    [ 3, 6 ].indexOf(t) > -1 && (qr.I.dot("level_" + t, {
                        from: "luckgold_close"
                    }), u("Canvas/GameScene").getComponent(fh).isCloseLuckPop = !0);
                }, e;
            }($h)), t._RF.pop(), t._RF.push({}, "4092dYmedZNQooHofwWYHzF", "LevelFailPopwin", void 0);
            var Cg, Ag, Tg, kg, xg, Eg, Bg, Pg, Rg, Lg, Dg, Og, Mg, Fg, Ng, zg, Gg, Ug, Vg, Wg, Hg, jg = e.ccclass, Yg = e.property;
            yg = jg("LevelFailPopwin"), _g = Yg(L), yg((wg = _t((Ig = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "title", wg, mt(e)), 
                    dt(mt(e), "_levelId", void 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e, i, n, r, o) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this._levelId = e, this.title.string = "关卡 " + e, 
                    O(r, o), qr.I.levelEnd(e, null, null, "fail", r, o, 0), qr.I.dot("Popwin", {
                        fail: "show"
                    });
                }, i.retry = function() {
                    this.btnClose(), Nn.I.emit(Ri, this._levelId), qr.I.dot("Popwin", {
                        fail: "restart"
                    });
                }, i.home = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return qr.I.dot("Popwin", {
                                    fail: "close"
                                }), t.next = 3, ad.I.openPopwin(td.home, "fail", this._levelId);

                              case 3:
                                Nn.I.emit(Pi), this.btnClose();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }($h)).prototype, "title", [ _g ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ig)), t._RF.pop(), t._RF.push({}, "a2a20eE+lpGiK83QiHJWzz4", "ModelRank", void 0);
            var Kg, qg, Xg, Jg, Qg, Zg, $g, tm, em, im, nm, rm, om, am, sm, lm, um, cm, hm, dm, fm, pm, vm, bm, gm, mm, ym, _m, Im, wm, Sm, Cm, Am = e.ccclass, Tm = e.property, km = (Cg = Am("ModelRank"), 
            Ag = Tm(k), Tg = Tm(b), kg = Tm(k), xg = Tm(b), Eg = Tm(L), Bg = Tm(k), Pg = Tm(L), 
            Rg = Tm(L), Lg = Tm(L), Cg((Mg = _t((Og = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "bg", Mg, mt(e)), 
                    yt(mt(e), "modelRes", Fg, mt(e)), yt(mt(e), "icon_rank", Ng, mt(e)), yt(mt(e), "iconRes", zg, mt(e)), 
                    yt(mt(e), "rank", Gg, mt(e)), yt(mt(e), "icon", Ug, mt(e)), yt(mt(e), "nickname", Vg, mt(e)), 
                    yt(mt(e), "stars", Wg, mt(e)), yt(mt(e), "level", Hg, mt(e)), dt(mt(e), "index", -1), 
                    dt(mt(e), "data", null), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.initModel = function(t, e, i) {
                    this.bg.spriteFrame = e.openid == je.I.OpenId ? this.modelRes[1] : this.modelRes[0], 
                    this.icon_rank.node.active = t > -1 && t < 3, this.icon_rank.node.active && (this.icon_rank.spriteFrame = this.iconRes[t]), 
                    this.rank.node.active = -1 == t || t > 2, this.rank.string = (t + 1).toString(), 
                    e.avatarUrl && this.loadUrlImg(e.avatarUrl), this.nickname.string = e.nickname, 
                    "week" == i ? (this.stars.string = e.weekStars.toString(), this.level.string = "通过" + e.weekLevel + "关") : (this.stars.string = e.stars.toString(), 
                    this.level.string = "第" + e.level + "关");
                }, i.loadUrlImg = function(t) {
                    var e = this;
                    E.loadRemote(t, {
                        ext: ".png"
                    }, function(t, i) {
                        if (e.isValid) if (!t && i) {
                            var n = new b(), r = new v();
                            r.image = i, n.texture = r, e.icon.spriteFrame = n;
                        } else e.icon.node.active = !1;
                    });
                }, e;
            }(a)).prototype, "bg", [ Ag ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Fg = _t(Og.prototype, "modelRes", [ Tg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Ng = _t(Og.prototype, "icon_rank", [ kg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zg = _t(Og.prototype, "iconRes", [ xg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Gg = _t(Og.prototype, "rank", [ Eg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ug = _t(Og.prototype, "icon", [ Bg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Vg = _t(Og.prototype, "nickname", [ Pg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Wg = _t(Og.prototype, "stars", [ Rg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Hg = _t(Og.prototype, "level", [ Lg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Dg = Og)) || Dg);
            t._RF.pop(), t._RF.push({}, "434e7sFielPubG/pG3jKzQR", "RankListPopwin", void 0);
            var xm, Em = e.ccclass, Bm = e.property, Pm = (Kg = Em("RankListPopwin"), qg = Bm(b), 
            Xg = Bm(k), Jg = Bm(k), Qg = Bm(L), Zg = Bm(L), $g = Bm(i), tm = Bm(k), em = Bm(k), 
            im = Bm(L), nm = Bm(L), rm = Bm(Hv), om = Bm(L), am = Bm(V), sm = Bm(i), lm = Bm(b), 
            Kg((cm = _t((um = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "tabRes", cm, mt(e)), 
                    yt(mt(e), "tabAll", hm, mt(e)), yt(mt(e), "tabFriend", dm, mt(e)), yt(mt(e), "lblAll", fm, mt(e)), 
                    yt(mt(e), "lblFriend", pm, mt(e)), yt(mt(e), "layoutType", vm, mt(e)), yt(mt(e), "typeAll", bm, mt(e)), 
                    yt(mt(e), "typeWeek", gm, mt(e)), yt(mt(e), "lblTypeAll", mm, mt(e)), yt(mt(e), "lblTypeWeek", ym, mt(e)), 
                    yt(mt(e), "list", _m, mt(e)), yt(mt(e), "lblOpen", Im, mt(e)), yt(mt(e), "modelRank", wm, mt(e)), 
                    yt(mt(e), "selfModel", Sm, mt(e)), yt(mt(e), "iconRes", Cm, mt(e)), dt(mt(e), "rankList", []), 
                    dt(mt(e), "tabLabelColor", [ "#ffffff", "#967DE2" ]), dt(mt(e), "tabLabelOutColor", [ "#1C1345", "#332572" ]), 
                    dt(mt(e), "typeLabelColor", [ "#AF96F9", "#5C3DBD" ]), dt(mt(e), "typeLabelOutColor", [ "#1C1345", "#1C1345" ]), 
                    dt(mt(e), "tab", "all"), dt(mt(e), "type", "all"), dt(mt(e), "selfIndex", -1), dt(mt(e), "allList", []), 
                    dt(mt(e), "weekList", []), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function() {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), br.isWx || this.initTest(), 
                    this.tab = "all", this.type = "all", this.initPanel(), localStorage.setItem("RankClick", new Date().getTime().toString()), 
                    _d.I.hasRankClick = !0, Nn.I.emit("RANK_CLICK");
                }, i.initTest = function() {
                    this.rankList = [];
                    for (var t = 0; t < 100; ++t) {
                        var e = new Pm();
                        e.avatarUrl = "https://res.wx.qq.com/wechatgame/product/webpack/userupload/20191119/wegoing.jpeg", 
                        e.nickname = "Player" + (t + 1), e.level = Ve.randomInt(10, 2600), e.stars = Ve.randomInt(0, 1e3), 
                        e.weekLevel = Ve.randomInt(0, 1e3), e.weekStars = Ve.randomInt(0, 1e3), this.rankList.push(e);
                    }
                    this.rankList.sort(function(t, e) {
                        return e.level - t.level;
                    });
                }, i.reqAllList = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i, r, o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, br.totalrankList("all", 0, !0);

                              case 2:
                                if (0 != (e = t.sent).code) {
                                    t.next = 15;
                                    break;
                                }
                                for (this.allList = [], i = e.data.list, r = 0; r < i.length; ++r) o = null, (o = i[r].rankData ? JSON.parse(i[r].rankData) : new Pm()).openid = i[r].openid, 
                                i[r].headurl && (o.avatarUrl = i[r].headurl), i[r].nickname && (o.nickname = i[r].nickname), 
                                o.openid == je.I.OpenId && (this.selfIndex = r, o.level = _d.I.curLevel, o.stars = _d.I.allStar), 
                                this.allList.push(o);
                                this.allList.sort(function(t, e) {
                                    return t.level == e.level ? e.stars - t.stars : e.level - t.level;
                                }), a = 0;

                              case 8:
                                if (!(a < this.allList.length)) {
                                    t.next = 15;
                                    break;
                                }
                                if (this.allList[a].openid != je.I.OpenId) {
                                    t.next = 12;
                                    break;
                                }
                                return this.selfIndex = a, t.abrupt("break", 15);

                              case 12:
                                ++a, t.next = 8;
                                break;

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.reqWeekList = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i, r, o, a;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, br.totalrankList("week", 2, !0);

                              case 2:
                                if (0 != (e = t.sent).code) {
                                    t.next = 15;
                                    break;
                                }
                                for (this.weekList = [], i = e.data.list, r = 0; r < i.length; ++r) o = null, (o = i[r].rankData ? JSON.parse(i[r].rankData) : new Pm()).openid = i[r].openid || "", 
                                i[r].headurl && (o.avatarUrl = i[r].headurl), i[r].nickname && (o.nickname = i[r].nickname), 
                                o.openid == je.I.OpenId && (this.selfIndex = r, o.weekLevel = _d.I.WeekLevel, o.weekStars = _d.I.WeekStars), 
                                this.weekList.push(o);
                                this.weekList.sort(function(t, e) {
                                    return t.weekLevel == e.weekLevel ? e.weekStars - t.weekStars : e.weekLevel - t.weekLevel;
                                }), a = 0;

                              case 8:
                                if (!(a < this.weekList.length)) {
                                    t.next = 15;
                                    break;
                                }
                                if (this.weekList[a].openid != je.I.OpenId) {
                                    t.next = 12;
                                    break;
                                }
                                return this.selfIndex = a, t.abrupt("break", 15);

                              case 12:
                                ++a, t.next = 8;
                                break;

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.initPanel = function() {
                    this.initTab(), this.initType(), this.initSelf(), this.initList();
                }, i.initTab = function() {
                    this.tabAll.spriteFrame = "all" == this.tab ? this.tabRes[0] : this.tabRes[1], this.tabFriend.spriteFrame = "all" == this.tab ? this.tabRes[1] : this.tabRes[0], 
                    this.lblAll.color = new W().fromHEX("all" == this.tab ? this.tabLabelColor[0] : this.tabLabelColor[1]), 
                    this.lblFriend.node.getComponent(Q).color = new W().fromHEX("all" == this.tab ? this.tabLabelOutColor[0] : this.tabLabelOutColor[1]), 
                    this.list.node.active = "all" == this.tab, this.selfModel.active = "all" == this.tab, 
                    Nn.I.emit(cn, "friend" == this.tab);
                }, i.initType = function() {
                    this.layoutType.active = "all" == this.tab, this.typeAll.enabled = "all" == this.type, 
                    this.typeWeek.enabled = "week" == this.type, this.lblTypeAll.color = new W().fromHEX("all" == this.type ? this.typeLabelColor[0] : this.typeLabelColor[1]), 
                    this.lblTypeAll.node.getComponent(Q).color = new W().fromHEX("all" == this.type ? this.typeLabelOutColor[0] : this.typeLabelOutColor[1]);
                }, i.initList = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if ("all" != this.tab) {
                                    t.next = 15;
                                    break;
                                }
                                if (e = this.rankList, t.t0 = br.isWx, !t.t0) {
                                    t.next = 13;
                                    break;
                                }
                                if ("all" != this.type) {
                                    t.next = 10;
                                    break;
                                }
                                return t.next = 7, this.reqAllList();

                              case 7:
                                e = this.allList, t.next = 13;
                                break;

                              case 10:
                                return t.next = 12, this.reqWeekList();

                              case 12:
                                e = this.weekList;

                              case 13:
                                this.list.numItems = e.length, this.initSelf();

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.initSelf = function() {
                    var t = this.selfModel.getChildByName("icon_rank").getComponent(k);
                    t.node.active = this.selfIndex > -1 && this.selfIndex < 3, t.node.active && (t.spriteFrame = this.iconRes[this.selfIndex]);
                    var e = this.selfModel.getChildByName("rank").getComponent(L);
                    e.node.active = -1 == this.selfIndex || this.selfIndex > 2, e.string = -1 == this.selfIndex ? "未上榜" : (this.selfIndex + 1).toString();
                    var i = this.selfModel.getChildByName("icon").getComponent(k);
                    _d.I.AvatarUrl && this.loadUrlImg(_d.I.AvatarUrl, i), this.selfModel.getChildByName("name").getComponent(L).string = _d.I.NickName;
                    var n = this.selfModel.getChildByName("stars").getComponent(L), r = this.selfModel.getChildByName("level").getComponent(L);
                    "week" == this.type ? (n.string = _d.I.WeekStars.toString(), r.string = "通过" + _d.I.WeekLevel + "关") : (n.string = _d.I.allStar.toString(), 
                    r.string = "第" + _d.I.curLevel + "关");
                }, i.onTabClick = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                this.tab != i && (this.tab = i, this.type = "all", this.initTab(), this.initType(), 
                                this.initList());

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), i.onTypeClick = function(t, e) {
                    this.type != e && (this.type = e, this.initType(), this.initList());
                }, i.btnClose = function() {
                    Nn.I.emit(cn, !1), t.prototype.btnClose.call(this);
                }, i.loadUrlImg = function(t, e) {
                    var i = this;
                    E.loadRemote(t, {
                        ext: ".png"
                    }, function(t, n) {
                        if (i.isValid) if (!t && n) {
                            var r = new b(), o = new v();
                            o.image = n, r.texture = o, e.spriteFrame = r;
                        } else e.node.active = !1;
                    });
                }, i.updateModel = function(t, e) {
                    var i = this.rankList;
                    br.isWx && (i = "all" == this.type ? this.allList : this.weekList), t.getComponent(km).initModel(e, i[e], this.type);
                }, e;
            }($h)).prototype, "tabRes", [ qg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), hm = _t(um.prototype, "tabAll", [ Xg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), dm = _t(um.prototype, "tabFriend", [ Jg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), fm = _t(um.prototype, "lblAll", [ Qg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), pm = _t(um.prototype, "lblFriend", [ Zg ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), vm = _t(um.prototype, "layoutType", [ $g ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), bm = _t(um.prototype, "typeAll", [ tm ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), gm = _t(um.prototype, "typeWeek", [ em ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), mm = _t(um.prototype, "lblTypeAll", [ im ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ym = _t(um.prototype, "lblTypeWeek", [ nm ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _m = _t(um.prototype, "list", [ rm ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Im = _t(um.prototype, "lblOpen", [ om ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), wm = _t(um.prototype, "modelRank", [ am ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Sm = _t(um.prototype, "selfModel", [ sm ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Cm = _t(um.prototype, "iconRes", [ lm ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), um)), function() {
                dt(this, "openid", ""), dt(this, "avatarUrl", ""), dt(this, "nickname", ""), dt(this, "stars", 0), 
                dt(this, "level", 0), dt(this, "weekLevel", 0), dt(this, "weekStars", 0), dt(this, "weekTimer", 0);
            });
            t._RF.pop(), t._RF.push({}, "773b5oVdzpG/rgKZW9uFyg5", "Buff", void 0);
            var Rm, Lm, Dm, Om, Mm, Fm, Nm, zm = e.ccclass, Gm = (e.property, zm(xm = (0, e.menu)("game/bubble/Buff")(xm = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e.prototype.remove = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!(r = i || this._removeEffect)) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 4, this.removeByEffect(r);

                              case 4:
                                e && e(), t.next = 8;
                                break;

                              case 7:
                                F(this.opacity).to(.2, {
                                    opacity: 0
                                }).call(e).start();

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }(Ss)) || xm) || xm);
            t._RF.pop(), t._RF.push({}, "4680f3aCOdBML0TK0LYHbn0", "Chain", void 0);
            var Um, Vm, Wm, Hm, jm, Ym, Km = e.ccclass, qm = e.property;
            Rm = (0, e.menu)("game/bubble/Chain"), Lm = qm(I), Dm = qm(nt), Km(Om = Rm((Fm = _t((Mm = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "anim", Fm, mt(e)), 
                    yt(mt(e), "animClip", Nm, mt(e)), dt(mt(e), "icon", null), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.init = function(e) {
                    t.prototype.init.call(this, e), this.icon = this.con.getChildByName("icon");
                    var i = m(this.icon);
                    this.icon.active = !1, i.parent = this.con, i.active = !0, this.anim = i.getComponent(I);
                }, i.remove = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                r = this, wn.I.playSound(yn.Chain), this.anim.play("anim_suolian2"), this.anim.on(H.EventType.FINISHED, function() {
                                    e && e(), r.anim.node.removeFromParent(), r.icon.active = !0;
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }(Gm)).prototype, "anim", [ Lm ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Nm = _t(Mm.prototype, "animClip", [ Dm ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Om = Mm)) || Om), t._RF.pop(), t._RF.push({}, "4be83CXpEVLU7/g9tGqs5Dj", "MoreGamePopwin", void 0);
            var Xm, Jm = e.ccclass, Qm = e.property;
            Um = Jm("MoreGamePopwin"), Vm = Qm(B), Wm = Qm(i), Um((jm = _t((Hm = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "list", jm, mt(e)), 
                    yt(mt(e), "model", Ym, mt(e)), dt(mt(e), "test", {
                        adtyp: "1",
                        animation: "0",
                        appid: "wx84ee3117640be563",
                        game: "宝石九宫格",
                        highlight: "1",
                        icon: "https://cdn-wxsdk.miso-lab.com/86/5e4870441c0df3e16b9dea99be24d6.jpg?attname=%E4%B9%9D%E5%AE%AB%E6%A0%BC%E6%96%B9%E5%9D%97.jpg",
                        id: 1427,
                        path: "?channel_id=cpa1_10057_1427"
                    }), dt(mt(e), "data", []), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function() {
                    t.prototype.open.call(this), this.initGames(), _d.I.MoreGameTimer = new Date().getTime(), 
                    Nn.I.emit("MOREGAME_CHANGE");
                }, i.initGames = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, no.I.updateDrawList();

                              case 2:
                                if (this.data = no.I.drawList, br.isWx || this.initTestData(), !this.data) {
                                    t.next = 15;
                                    break;
                                }
                                this.list.content.removeAllChildren(), e = 0;

                              case 7:
                                if (!(e < this.data.length)) {
                                    t.next = 15;
                                    break;
                                }
                                if (this.node) {
                                    t.next = 10;
                                    break;
                                }
                                return t.abrupt("return");

                              case 10:
                                (i = m(this.model)).active = !0, this.list.content.addChild(i), this.show(i, e), 
                                i.index = e, br.addExposure(Xr.draw, [ this.data[e] ]);

                              case 12:
                                ++e, t.next = 7;
                                break;

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.initTestData = function() {
                    this.data = [];
                    for (var t = 0; t < 60; ++t) this.data.push(this.test);
                }, i.show = function(t, e) {
                    var i = this.data[e], n = t.getComponent(k);
                    null != i && ("" != i.icon ? (n.node.active = !0, t.getComponent(R).clickEvents[0].customEventData = e.toString(), 
                    E.loadRemote(i.icon, function(t, e) {
                        if (n.isValid) if (!t && e) {
                            var i = new b(), r = new v();
                            r.image = e, i.texture = r, n.spriteFrame = i;
                        } else n.node.active = !1;
                    })) : n.node.active = !1);
                }, i.onItem = function(t, e) {
                    var i = parseInt(e);
                    this.data.length <= 0 || no.I.navigateToMiniProgram(this.data[i], Xr.draw);
                }, i.btnClose = function() {
                    z.stopAllByTarget(this.node), t.prototype.btnClose.call(this);
                }, e;
            }($h)).prototype, "list", [ Vm ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ym = _t(Hm.prototype, "model", [ Wm ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Hm)), t._RF.pop(), t._RF.push({}, "577c8eqwCBIHqFVSRNEC8ka", "TileMapTool", void 0);
            var Zm = e.ccclass, $m = (e.property, Zm(Xm = function() {
                function t() {}
                return t.crCalculateBlend = function(t, e, i, n) {
                    return (i * t * (1 - e) + n * e) / (t + e - t * e);
                }, t.load = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, mn.loadRes("data/map_tile");

                              case 2:
                                e = t.sent, this.convert(e.json);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), t.checkMapTile = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, mn.checkRes("data/map_tile");

                              case 2:
                                return t.abrupt("return", t.sent);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), t.convert = function(t) {
                    var e = this, i = t.tilesets, n = [];
                    i.forEach(function(t) {
                        t.tiles.forEach(function(e) {
                            var i = {};
                            e.properties && e.properties.forEach(function(t) {
                                i[t.name] = t.value;
                            }), n[e.id + t.firstgid] = i;
                        });
                    });
                    var r = t.layers, o = [];
                    r.forEach(function(t) {
                        var e = new ey();
                        t.properties && t.properties.forEach(function(t) {
                            "string" == t.type && t.value.indexOf(",") >= 0 ? t.value.split(",").forEach(function(i) {
                                e[t.name] || (e[t.name] = []), e[t.name].push(+i);
                            }) : e[t.name] = t.value;
                        }), e.id = t.name;
                        for (var i = [], r = 0; r < t.height / 2; r++) {
                            i[r] = [];
                            for (var a = 0; a < t.width / 2; a++) {
                                var s = 2 * a, l = 2 * r;
                                r % 2 && (s += 1);
                                for (var u = [], c = 0; c <= 3; c++) {
                                    var h = s + c % 2, d = l + Math.floor(c / 2);
                                    if (c > 0 && !u[0]) break;
                                    var f = n[t.data[d * t.width + h]];
                                    switch (c) {
                                      case 0:
                                        t.data[d * t.width + h] && !f ? p("错误数据,左上角未找到数据：map" + e.id + ",x" + h + ",y" + d, f, t.data[d * t.width + h]) : f && !f.type ? p("错误数据,左上角只可放置基础方块和特殊方块：map" + e.id + ",x" + h + ",y" + d, f) : u.push(f && f.id || 0);
                                        break;

                                      case 1:
                                        !f || f.color && !f.type ? f && f.id && u.push(f.id) : p("错误数据,右上角只可放置附加颜色：map" + e.id + ",x" + h + ",y" + d, f);
                                        break;

                                      case 2:
                                        f && p("错误数据,左下角不可放置：map" + e.id + ",x" + h + ",y" + d, f);
                                        break;

                                      case 3:
                                        f && !f.buff ? p("错误数据,右下角只可放置BUFF：map" + e.id + ",x" + h + ",y" + d, f) : f && f.id && u.push(f.id);
                                    }
                                }
                                i[r][a] = u.join("&");
                            }
                        }
                        for (var v = i.length - 1; v >= 0; v--) {
                            for (var b = !1, g = 0; g < i[v].length; g++) if (i[v][g]) {
                                b = !0;
                                break;
                            }
                            if (b) break;
                            i.pop();
                        }
                        e.data = i, o.push(e);
                    }), o.forEach(function(t) {
                        for (var e = t.data, i = [], n = !1, r = e.length - 1; r >= 0; r--) {
                            for (var o = e[r], a = 0; a < o.length; a++) "0" != o[a] && (n = !0);
                            n && i.unshift(o.join(","));
                        }
                        t.data = i.join("|");
                    });
                    var a = [];
                    n.forEach(function(t) {
                        a.push(t);
                    }), this.saveForBrowser(JSON.stringify(o), "map.json"), setTimeout(function() {
                        e.saveForBrowser(JSON.stringify(a), "bubble.json");
                    }, 2e3);
                }, t.saveForBrowser = function(t, e) {
                    if (h.isBrowser) {
                        console.log("浏览器");
                        var i = new Blob([ t ], {
                            type: "application/json"
                        }), n = document.createElement("a");
                        n.download = e, n.innerHTML = "Download File", null != window.webkitURL ? n.href = window.webkitURL.createObjectURL(i) : (n.href = window.URL.createObjectURL(i), 
                        n.style.display = "none", document.body.appendChild(n)), n.click();
                    }
                }, t.formatArr = function(t) {
                    for (var e = [], i = 0; i < 40; i++) e.push(t.slice(22 * i * 2, 22 * i * 2 + 21));
                    O(e);
                }, t;
            }()) || Xm);
            window.TileMapTool = $m;
            var ty, ey = function() {
                dt(this, "id", void 0), dt(this, "data", void 0), dt(this, "bullet", void 0);
            };
            t._RF.pop(), t._RF.push({}, "5a3daOFmzFBoYCqwsDFsXq/", "Ice", void 0);
            var iy, ny, ry = e.ccclass;
            e.property, ry(ty = (0, e.menu)("game/bubble/Ice")(ty = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e;
            }(Gm)) || ty), t._RF.pop(), t._RF.push({}, "5b8766KRjpBh4zVN+a/mqyA", "PromisC", void 0);
            var oy, ay, sy, ly, uy = e.ccclass;
            e.property, uy("PromisC")((ny = iy = function t(e) {
                var i = null, n = new Promise(function(t, n) {
                    return i = n, e(function(e) {
                        t(e);
                    }, n);
                });
                return n.about = function() {
                    i(t.CancelExceptionName);
                }, n;
            }, dt(iy, "CancelExceptionName", "CancelablePromise AbortError"), ny)), t._RF.pop(), 
            t._RF.push({}, "60998WIyn1MVa49cZt/9OHl", "BoosterSignItem", void 0);
            var cy, hy, dy, fy, py, vy, by, gy, my, yy, _y, Iy, wy, Sy, Cy = e.ccclass, Ay = e.property;
            oy = Cy("BoosterSignItem"), ay = Ay(Bo), oy((ly = _t((sy = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "boosterIcon", ly, mt(e)), 
                    e;
                }
                return pt(e, t), e.prototype.setData = function(t, e) {
                    null != t && (this.boosterIcon.type = t);
                    for (var i = 0; i < this.counts.length; i++) this.counts[i].string = "x" + e;
                }, e;
            }(Hf)).prototype, "boosterIcon", [ ay ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), sy)), t._RF.pop(), t._RF.push({}, "614e9Gm93xCJ5w8P88sm9yN", "ActivityBuyPopwin", void 0);
            var Ty, ky, xy = e.ccclass, Ey = e.property;
            cy = xy("ActivityBuyPopwin"), hy = Ey(L), dy = Ey(i), fy = Ey(L), py = Ey(L), vy = Ey(i), 
            by = Ey(i), cy((my = _t((gy = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "lblDesc", my, mt(e)), 
                    yt(mt(e), "imgAD", yy, mt(e)), yt(mt(e), "lblGet", _y, mt(e)), yt(mt(e), "lblFull", Iy, mt(e)), 
                    yt(mt(e), "imgBuyBtn", wy, mt(e)), yt(mt(e), "powerBar", Sy, mt(e)), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onEnable = function() {
                    this.powerBar.getComponent(Oh).resetShowOne();
                }, i.open = function() {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this.lblDesc.string = _d.I.ActivityPower >= Je.ACTIVITY_POWER_MAX ? "您的体力已经满了哦" : "观看视频可获得2点体力", 
                    this.imgAD.active = _d.I.ActivityPower < Je.ACTIVITY_POWER_MAX, this.lblGet.node.active = _d.I.ActivityPower < Je.ACTIVITY_POWER_MAX, 
                    this.lblFull.node.active = _d.I.ActivityPower >= Je.ACTIVITY_POWER_MAX, this.imgBuyBtn.getComponent(R).interactable = _d.I.ActivityPower < Je.ACTIVITY_POWER_MAX, 
                    this.imgBuyBtn.getComponent(k).grayscale = _d.I.ActivityPower >= Je.ACTIVITY_POWER_MAX;
                }, i.getPower = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = _d.I.ActivityPower >= Je.ACTIVITY_POWER_MAX, t.t0) {
                                    t.next = 7;
                                    break;
                                }
                                return qr.I.dot("EventMain_BuyEnergy"), t.next = 5, Uo.playAd(zo.activityEnergy);

                              case 5:
                                return t.next = 7, ad.I.openPopwin(td.activityPower);

                              case 7:
                                this.btnClose();

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.activityHome = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return ad.I.openPopwin(td.home, "win", _d.I.curLevel), t.next = 3, ad.I.openPopwin(td.activityHome);

                              case 3:
                                Nn.I.emit(Pi), this.btnClose();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }($h)).prototype, "lblDesc", [ hy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), yy = _t(gy.prototype, "imgAD", [ dy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _y = _t(gy.prototype, "lblGet", [ fy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Iy = _t(gy.prototype, "lblFull", [ py ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), wy = _t(gy.prototype, "imgBuyBtn", [ vy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Sy = _t(gy.prototype, "powerBar", [ by ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), gy)), t._RF.pop(), t._RF.push({}, "70c80j5G/JBEJpG9DAwYTBa", "Lodash", void 0);
            var By, Py, Ry, Ly, Dy, Oy, My, Fy = e.ccclass;
            e.property, Fy("Lodash")((ky = Ty = function() {
                function t() {}
                return t.find = function(e, i) {
                    var n;
                    if (Array.isArray(e) || (e = t._toArray(e)), (n = e.filter(i)).length) return n[0];
                }, t.forEach = function(e, i) {
                    Array.isArray(e) ? e.forEach(i) : t._toArrayKey(e).forEach(function(t, n, r) {
                        var o = t.key, a = t.value;
                        i(a, o, e);
                    });
                }, t.cloneDeep = function(e) {
                    if (null === e || "object" != r(e)) return e;
                    var i = {};
                    for (var n in e.constructor === Array && (i = []), e) e.hasOwnProperty(n) && (i[n] = t.cloneDeep(e[n]));
                    return i;
                }, t.map = function(e, i) {
                    Array.isArray(e) || (e = t._toArray(e));
                    var n = [];
                    return e.forEach(function(t, e, r) {
                        n.push(i(t, e, r));
                    }), n;
                }, t._toArrayKey = function(t) {
                    var e = [];
                    for (var i in t) t.hasOwnProperty(i) && e.push({
                        key: i,
                        value: t[i]
                    });
                    return e;
                }, t._toArray = function(t) {
                    var e = [];
                    for (var i in t) t.hasOwnProperty(i) && e.push(t[i]);
                    return e;
                }, t.filter = function(e, i) {
                    return Array.isArray(e) || (e = t._toArray(e)), e.filter(i);
                }, t.isEqual = function(e, i) {
                    if (!(e instanceof Object && i instanceof Object)) return e === i;
                    if (Object.keys(e).length !== Object.keys(i).length) return !1;
                    for (var n in e) {
                        var r = e[n] instanceof Object, o = i[n] instanceof Object;
                        if (r && o) return t.isEqual(e[n], i[n]);
                        if (e[n] !== i[n]) return !1;
                    }
                    return !0;
                }, t.pullAllWith = function(t, e, i) {
                    return e.forEach(function(e) {
                        t.filter(function(t) {
                            return i(t, e);
                        }).forEach(function(e) {
                            var i = t.indexOf(e);
                            -1 !== t.indexOf(e) && t.splice(i, 1);
                        });
                    }), t;
                }, t.now = function() {
                    return Date.now();
                }, t.pullAll = function(t, e) {
                    return e.forEach(function(e) {
                        var i = t.indexOf(e);
                        -1 !== t.indexOf(e) && t.splice(i, 1);
                    }), t;
                }, t.forEachRight = function(e, i) {
                    Array.isArray(e) || (e = t._toArray(e));
                    for (var n = e.length - 1; n >= 0 && i(e[n]); n--) ;
                }, t.startsWith = function(t, e, i) {
                    return (t = t.substr(i)).startsWith(e);
                }, t.endsWith = function(t, e, i) {
                    return (t = t.substr(i)).endsWith(e);
                }, t.remove = function(e, i) {
                    var n = [], r = [];
                    return e.forEach(function(t, e) {
                        i(t) && (n.push(t), r.push(e));
                    }), t._basePullAt(e, r), n;
                }, t._basePullAt = function(t, e) {
                    for (var i, n = t ? e.length : 0, r = n - 1; n--; ) {
                        var o = e[n];
                        n !== r && o === i || (i = o, Array.prototype.splice.call(t, o, 1));
                    }
                    return t;
                }, t.findIndex = function(t, e, i) {
                    var n;
                    if (t = t.slice(i), "function" == typeof e) {
                        for (n = 0; n < t.length; n++) if (e(t[n])) return n;
                    } else if (Array.isArray(e)) for (n = 0; n < t.length; n++) {
                        var r = e[0], o = !0;
                        if (e.length > 1 && (o = e[1]), t[n][r] === o) return n;
                    } else for (n = 0; n < t.length; n++) if (t[n] === e) return n;
                    return -1;
                }, t.concat = function() {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var e = arguments[0], i = 1; i < t; ) e = e.concat(arguments[i]), i++;
                    return e;
                }, t.isNumber = function(t) {
                    return "number" == typeof t;
                }, t.indexOf = function(t, e, i) {
                    return (t = t.slice(i)).indexOf(e);
                }, t.join = function(t, e) {
                    if (null === t) return "";
                    var i = "";
                    return t.forEach(function(t) {
                        i += t + e;
                    }), i.substr(0, i.length - 1);
                }, t.split = function(t, e, i) {
                    return t.split(e, i);
                }, t.max = function(t) {
                    if (t && t.length) {
                        for (var e, i = 0; i < t.length; i++) 0 === i ? e = t[0] : e < t[i] && (e = t[i]);
                        return e;
                    }
                }, t.drop = function(t, e) {
                    return null !== t && t.length ? t.slice(e) : [];
                }, t.flattenDeep = function(e) {
                    return e.reduce(function(e, i) {
                        return e.concat(Array.isArray(i) ? t.flattenDeep(i) : i);
                    }, []);
                }, t.uniq = function(t) {
                    var e = [];
                    return t.forEach(function(t) {
                        -1 === e.indexOf(t) && e.push(t);
                    }), e;
                }, t.isNaN = function(e) {
                    return t.isNumber(e) && e !== +e;
                }, t.chunk = function(t, e) {
                    if (null === t || !t.length || e < 1) return [];
                    for (var i = []; t.length > e; ) i.push(t.slice(0, e)), t = t.slice(e);
                    return i.push(t), i;
                }, t.toFinite = function(t) {
                    return t ? (t = Number(t)) === 1 / 0 || t === -1 / 0 ? 1.7976931348623157e308 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0;
                }, t.isObject = function(t) {
                    var e = r(t);
                    return null !== t && ("object" === e || "function" === e);
                }, t.isLength = function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= t.MAX_SAFE_INTEGER;
                }, t._isArrayLike = function(e) {
                    return null !== e && t.isLength(e.length);
                }, t.maxBy = function(t, e) {
                    if (t && t.length) {
                        for (var i, n, r = 0; r < t.length; r++) 0 === r ? (i = e(t[0]), n = t[0]) : i < t[r] && (i = t[r], 
                        n = t[r]);
                        return n;
                    }
                }, t.minBy = function(t, e) {
                    if (t && t.length) {
                        for (var i, n, r = 0; r < t.length; r++) 0 === r ? (i = e(t[0]), n = t[0]) : i > t[r] && (i = e(t[r]), 
                        n = t[r]);
                        return n;
                    }
                }, t.sumBy = function(t, e) {
                    var i = 0;
                    for (var n in t) i += e(t[n]);
                    return i;
                }, t.countBy = function(t, e) {
                    var i = {};
                    for (var n in t) {
                        var r = e(n);
                        i.hasOwnProperty(r) ? i[r] += 1 : i[r] = 1;
                    }
                    return i;
                }, t;
            }(), dt(Ty, "MAX_SAFE_INTEGER", 9007199254740991), ky)), t._RF.pop(), t._RF.push({}, "d69ee0xvNtIroZeJPi2cbFv", "HardShopItem", void 0);
            var Ny, zy, Gy, Uy, Vy = e.ccclass, Wy = e.property, Hy = (By = Vy("HardShopItem"), 
            Py = Wy(i), Ry = Wy(i), By((Oy = _t((Dy = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "btnNode", Oy, mt(e)), 
                    yt(mt(e), "purchasedNode", My, mt(e)), dt(mt(e), "callback", void 0), dt(mt(e), "index", void 0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.setData = function(t, e) {
                    this.index = t, this.callback = e, this.updateState(!0);
                }, i.onItem = function() {
                    this.callback(this.index);
                }, i.updateState = function(t) {
                    this.btnNode.active = t, this.purchasedNode.active = !t;
                }, e;
            }(a)).prototype, "btnNode", [ Py ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), My = _t(Dy.prototype, "purchasedNode", [ Ry ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ly = Dy)) || Ly);
            t._RF.pop(), t._RF.push({}, "71719MIWjBArJzCYiSkDT2m", "HardShopPopwin", void 0);
            var jy, Yy, Ky, qy, Xy, Jy, Qy, Zy, $y, t_, e_, i_, n_, r_, o_, a_, s_, l_, u_, c_, h_, d_, f_ = e.ccclass, p_ = e.property;
            Ny = f_("HardShopPopwin"), zy = p_(Hy), Ny((Uy = _t((Gy = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "list", Uy, mt(e)), 
                    dt(mt(e), "buyData", []), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function() {
                    t.prototype.open.call(this);
                    for (var e = 0; e < this.list.length; e++) this.list[e].setData(e, this.onItem.bind(this));
                    this.buyData = [], qr.I.dot("hard_buy", {
                        from: "show"
                    });
                }, i.onItem = function(t) {
                    var e = Je.HARD_SHOP_BOOSTER_CONF[t], i = e.discount;
                    _d.I.gold >= i ? (_d.I.updatePrice(-i), this.list[t].updateState(!1), 0 == t ? this.buyData.unshift({
                        type: e.type,
                        count: 1
                    }) : this.buyData.push({
                        type: e.type,
                        count: 1
                    }), qr.I.dot("hard_buy", {
                        from: [ "step", "lighting", "rainbow" ][t]
                    }), qr.I.dot("coinuse_" + (t + 4), {
                        key: 1
                    })) : ad.I.openPopwin(td.receiveGold);
                }, i.onCloseBtn = function() {
                    qr.I.dot("hard_buy", {
                        from: "close"
                    }), Nn.I.emit($i, this.buyData), this.btnClose();
                }, e;
            }($h)).prototype, "list", [ zy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Gy)), t._RF.pop(), t._RF.push({}, "729171KT55FDa+N2ZJqXTmU", "TurnTablePopwin", void 0);
            var v_, b_, g_, m_, y_, __, I_, w_, S_, C_, A_, T_, k_, x_, E_, B_, P_, R_, L_, D_, O_, M_, F_, N_, z_, G_, U_, V_, W_, H_, j_, Y_, K_, q_, X_, J_, Q_, Z_, $_, tI = e.ccclass, eI = e.property;
            jy = tI("TurnTablePopwin"), Yy = eI(i), Ky = eI(i), qy = eI(i), Xy = eI(L), Jy = eI(L), 
            Qy = eI(L), Zy = eI(L), $y = eI(R), t_ = eI(b), e_ = eI(rt), jy((n_ = _t((i_ = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "table", n_, mt(e)), 
                    yt(mt(e), "wheel", r_, mt(e)), yt(mt(e), "pointer", o_, mt(e)), yt(mt(e), "lblOpen", a_, mt(e)), 
                    yt(mt(e), "lblStars", s_, mt(e)), yt(mt(e), "lblEnd", l_, mt(e)), yt(mt(e), "lblCounts", u_, mt(e)), 
                    yt(mt(e), "btnOpen", c_, mt(e)), yt(mt(e), "items", h_, mt(e)), yt(mt(e), "ToggleSub", d_, mt(e)), 
                    dt(mt(e), "lights", []), dt(mt(e), "weightTable", []), dt(mt(e), "totalweight", 0), 
                    dt(mt(e), "data", null), dt(mt(e), "index", 0), dt(mt(e), "canClose", !0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function() {
                    t.prototype.open.call(this), this.lights = [];
                    for (var e = 0; e < this.wheel.children.length; ++e) this.wheel.children[e].name.indexOf("img_wheel_light") > -1 && this.lights.push(this.wheel.children[e]);
                    wn.I.playSound(yn.Pop), qr.I.dot("Lottery", {
                        popwin: !0
                    }), Nn.I.on(nn, this.updatePanel, this), this.updatePanel(), this.initRewards();
                }, i.initRewards = function() {
                    this.index = 0, this.pointer.setRotation(0, 0, 0, 0), this.pointer.angle = 0, this.weightTable = [], 
                    this.totalweight = 0;
                    for (var t = 0; t < this.data.reward.length; ++t) this.weightTable.push(this.data.reward[t].weight), 
                    this.totalweight += this.data.reward[t].weight, this.table.children[t].getComponent(k).spriteFrame = this.items[this.data.reward[t].id], 
                    this.table.children[t].getChildByName("lbl_item").getComponent(L).string = "X" + this.data.reward[t].num;
                }, i.updatePanel = function() {
                    this.data = fa.I.getTurnTableRewards(_d.I.turnTableCounts), this.lblOpen.node.active = _d.I.turnTableCounts < fa.I.TurnTableData.length && _d.I.turnTableStars >= this.data.stars, 
                    this.lblStars.node.parent.active = _d.I.turnTableStars < this.data.stars && _d.I.turnTableCounts < fa.I.TurnTableData.length, 
                    this.lblStars.string = _d.I.turnTableStars + "/" + this.data.stars, this.lblEnd.node.active = _d.I.turnTableCounts >= fa.I.TurnTableData.length, 
                    this.btnOpen.node.getComponent(k).grayscale = _d.I.turnTableCounts >= fa.I.TurnTableData.length || _d.I.turnTableStars < this.data.stars, 
                    this.btnOpen.interactable = _d.I.turnTableCounts < fa.I.TurnTableData.length && _d.I.turnTableStars >= this.data.stars, 
                    this.lblCounts.string = "今日剩余抽奖次数：" + (fa.I.TurnTableData.length - _d.I.turnTableCounts) + "/" + fa.I.TurnTableData.length;
                }, i.onBtnOpen = function() {
                    this.canClose && (this.canClose = !1, this.turnTable(), _d.I.addTurnTableCounts(1, this.data.stars), 
                    qr.I.dot("Lottery", {
                        click: !0
                    }), Nn.I.emit(nn));
                }, i.showLight = function() {
                    var t = this;
                    F(this.wheel).call(function() {
                        t.lights[t.lights.length - 1].children[0].active = !1, t.lights[0].children[0].active = !0;
                    }).delay(.2).repeatForever().start();
                }, i.turnTable = function() {
                    var t = this;
                    this.index = Ve.getWeightRandIndex(this.weightTable, this.totalweight);
                    var e = -1 * Ve.random(45 * this.index, 45 * (this.index + 1));
                    e -= 1800;
                    var i = this.data.reward[this.index];
                    F(this.pointer).to(.5, {
                        angle: e
                    }, {
                        easing: "sineOut"
                    }).delay(1).call(function() {
                        ad.I.openPopwin(td.turnTableAwards, i), t.canClose = !0, t.btnClose();
                    }).start();
                }, i.btnClose = function() {
                    this.canClose && t.prototype.btnClose.call(this);
                }, e;
            }($h)).prototype, "table", [ Yy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), r_ = _t(i_.prototype, "wheel", [ Ky ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), o_ = _t(i_.prototype, "pointer", [ qy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), a_ = _t(i_.prototype, "lblOpen", [ Xy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), s_ = _t(i_.prototype, "lblStars", [ Jy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), l_ = _t(i_.prototype, "lblEnd", [ Qy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), u_ = _t(i_.prototype, "lblCounts", [ Zy ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), c_ = _t(i_.prototype, "btnOpen", [ $y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), h_ = _t(i_.prototype, "items", [ t_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), d_ = _t(i_.prototype, "ToggleSub", [ e_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), i_)), function(t) {
                t[t["金币"] = 0] = "金币", t[t["炸弹"] = 1] = "炸弹", t[t["火箭"] = 2] = "火箭", t[t["闪电"] = 3] = "闪电", 
                t[t["彩虹"] = 4] = "彩虹";
            }(v_ || (v_ = {})), t._RF.pop(), t._RF.push({}, "7366auVwoJNC6y4XN3Qy/X0", "window", void 0), 
            t._RF.pop(), t._RF.push({}, "7b914APHvdCr7H+EoKy5xL7", "LevelWinPopwin", void 0);
            var iI, nI, rI, oI, aI, sI, lI, uI, cI, hI, dI, fI, pI = e.ccclass, vI = e.property;
            b_ = pI("LevelWinPopwin"), g_ = vI(i), m_ = vI(L), y_ = vI(L), __ = vI(C.Skeleton), 
            I_ = vI(L), w_ = vI(i), S_ = vI(i), C_ = vI(U), A_ = vI(L), T_ = vI(L), k_ = vI(i), 
            x_ = vI(w), E_ = vI(I), B_ = vI(i), P_ = vI(I), R_ = vI(i), L_ = vI(L), D_ = vI(i), 
            b_((M_ = _t((O_ = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "boxContent", M_, mt(e)), 
                    yt(mt(e), "title", F_, mt(e)), yt(mt(e), "scoreLbl", N_, mt(e)), yt(mt(e), "stars", z_, mt(e)), 
                    yt(mt(e), "reward", G_, mt(e)), yt(mt(e), "rewardIcon", U_, mt(e)), yt(mt(e), "iconWheel", V_, mt(e)), 
                    yt(mt(e), "barWheel", W_, mt(e)), yt(mt(e), "wheelCounts", H_, mt(e)), yt(mt(e), "wheelProgress", j_, mt(e)), 
                    yt(mt(e), "wheelEffect", Y_, mt(e)), yt(mt(e), "wheelAni", K_, mt(e)), yt(mt(e), "wheelAct", q_, mt(e)), 
                    yt(mt(e), "btnBox", X_, mt(e)), yt(mt(e), "activityAnimation", J_, mt(e)), yt(mt(e), "activityNode", Q_, mt(e)), 
                    yt(mt(e), "activityLabel", Z_, mt(e)), yt(mt(e), "goldBar", $_, mt(e)), dt(mt(e), "_levelId", void 0), 
                    dt(mt(e), "mapData", void 0), dt(mt(e), "effectPos", []), dt(mt(e), "canClose", !0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    for (var t = 0; t < this.wheelEffect.length; ++t) this.effectPos.push(this.wheelEffect[t].position.clone());
                    Nn.I.on(nn, this.wheelInfo, this);
                }, i.open = function(e, i, n, r, o, a, s) {
                    var l = this;
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop);
                    var u = _d.I.getLevelStar(e), c = i >= u ? i - u : 0, h = _d.I.passLevel(e, i, n);
                    (_d.I.curLevel <= Je.WHEEL_OPEN || _d.I.turnTableCounts >= fa.I.TurnTableData.length) && (c = 0), 
                    this._levelId = e, this.mapData = s, this.title.string = "关卡 " + e, h > 0 ? (this.reward.node.parent.parent = this.scoreLbl.node.parent.parent, 
                    this.reward.string = "+" + h, this.waitGold(h)) : this.reward.node.parent.removeFromParent();
                    for (var d = function(t) {
                        l.stars[t].node.active = !1, t < i && l.wait(.5 * (t + 1)).then(function() {
                            l.stars[t].node.active = !0, Ve.playSpine(l.stars[t]).then(function() {
                                window.wx && !He.I.getGlobalData("shock") && $n.I.vibrateShort();
                            }), wn.I.playSound(yn.Star), t < c && (z.stopAllByTarget(l.wheelEffect[t]), l.wheelEffect[t].setPosition(l.effectPos[t].clone()), 
                            l.wheelEffect[t].active = !0, F(l.wheelEffect[t]).to(.5, {
                                position: l.iconWheel.position
                            }).call(function() {
                                l.wheelEffect[t].active = !1;
                            }).start());
                        });
                    }, f = 0; f < this.stars.length; f++) d(f);
                    if (this.scoreLbl.string = "" + n, qr.I.levelEnd(e, null, null, "complete", r, o, a), 
                    qr.I.dot("Popwin", {
                        win: "show"
                    }), s.test) {
                        var p = {};
                        p[this._levelId] = s.id + "_win", qr.I.dot("Test", p), O("Test", p);
                    }
                    var v = da.I.getMapData(this._levelId + 1);
                    this.boxContent.getComponent(I).play("anim_levelwin_state" + (v.hard ? 2 : 1)), 
                    [ 3, 6, 7, 12 ].indexOf(e) > -1 && qr.I.dot("level_" + e, {
                        from: "level_finish"
                    }), this.wheelInfo(), this.showWheelEffct(c, i), this.btnBox.active = e >= Je.ACTIVITY_OPEN_LEVEL && _d.I.ActivityLevel <= da.I.actMapMaxID && !!_d.I.CurActivity, 
                    this.activityLabel.string = "限时活动", this.activityNode.getChildByName("icon_limitactivity").getChildByName("point").active = _d.I.CurActivity && !_d.I.hasActivityClick && _d.I.ActivityLevel <= da.I.actMapMaxID, 
                    this.btnBox.active && _d.I.ActivityLevel > da.I.actMapMaxID ? (this.activityAnimation.stop(), 
                    this.activityNode.active = !1) : (this.activityNode.active = !0, this.activityAnimation.play("anim_activitybtn")), 
                    Ba.I.addDailyTaskCounts(Aa.game);
                }, i.waitGold = function() {
                    var t = ut(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.wait(1);

                              case 2:
                                Nn.I.emit(ia, e, this.rewardIcon);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.retry = function() {
                    if (this.canClose) {
                        if (this.btnClose(), Nn.I.emit(Ri, this._levelId), qr.I.dot("Popwin", {
                            win: "restart"
                        }), this.mapData.test) {
                            var t = {};
                            t[this._levelId] = this.mapData.id + "_retry", qr.I.dot("Test", t), O("Test", t);
                        }
                        [ 3, 6, 7, 12 ].indexOf(this._levelId) > -1 && qr.I.dot("level_" + this._levelId, {
                            from: "level_replay"
                        });
                    }
                }, i.next = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i, r, o, a, s, l, u;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!this.canClose) {
                                    t.next = 20;
                                    break;
                                }
                                if (this.btnClose(), [ 3, 6, 7, 12 ].indexOf(this._levelId) > -1 && qr.I.dot("level_" + this._levelId, {
                                    from: "level_next"
                                }), Nn.I.emit(Ri, this._levelId + 1), e = br.getParamsInt("signPop") || 6, i = !1, 
                                _d.I.hasSign || _d.I.curLevel != e || !_d.I.toPopSign) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 6, ad.I.openPopwin(td.sign);

                              case 6:
                                t.next = 9;
                                break;

                              case 8:
                                (br.getParamsInt("ActivityPop") || 0) > 0 && ((r = parseInt(localStorage.getItem("ActivityOpen") || "0")) > 0 && Ve.isNewDay(r) && (r = 0), 
                                _d.I.CurActivity && _d.I.curLevel >= Je.ACTIVITY_OPEN_LEVEL && 0 == r && (i = !0, 
                                ad.I.openPopwin(td.activityOpen)));

                              case 9:
                                if (o = br.getParamsInt("IntAdLevel"), a = br.getParamsInt("InAdType"), s = br.getParamsInt("InAdVal"), 
                                !(a > 0 && _d.I.curLevel >= o) || i) {
                                    t.next = 19;
                                    break;
                                }
                                l = !1, t.t0 = a, t.next = 1 === t.t0 ? 15 : 2 === t.t0 ? 17 : 18;
                                break;

                              case 15:
                                return 0 != s && _d.I.intAdPassLevelCnt % s != 0 || (l = !0), t.abrupt("break", 18);

                              case 17:
                                Date.now() - _d.I.lastIntAdTime > 60 * s * 1e3 && (l = !0);

                              case 18:
                                l && (window.wx && br.createInterstitialAd(), _d.I.recordIntAd(), 6 == this._levelId && qr.I.dot("level_7", {
                                    from: "ad_show"
                                }));

                              case 19:
                                qr.I.dot("Popwin", {
                                    win: "next"
                                }), this.mapData.test && ((u = {})[this._levelId] = this.mapData.id + "_next", qr.I.dot("Test", u), 
                                O("Test", u));

                              case 20:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.home = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return qr.I.dot("Popwin", {
                                    win: "close"
                                }), this.mapData.test && ((e = {})[this._levelId] = this.mapData.id + "_home", qr.I.dot("Test", e), 
                                O("Test", e)), t.next = 3, ad.I.openPopwin(td.home, "win", this._levelId);

                              case 3:
                                Nn.I.emit(Pi), this.btnClose(), [ 3, 6, 7, 12 ].indexOf(this._levelId) > -1 && qr.I.dot("level_" + this._levelId, {
                                    from: "backhome"
                                });

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.onClose = function() {
                    t.prototype.onClose.call(this), this.unscheduleAllCallbacks();
                }, i.btnClose = function() {
                    this.canClose && t.prototype.btnClose.call(this);
                }, i.wait = function(t) {
                    var e = this;
                    return void 0 === t && (t = 1), new Promise(function(i, n) {
                        e.scheduleOnce(i, t);
                    });
                }, i.openTurnTable = function() {
                    ad.I.openPopwin(td.turnTable);
                }, i.wheelInfo = function() {
                    this.iconWheel.getChildByName("wheelEnd").active = _d.I.turnTableCounts >= fa.I.TurnTableData.length, 
                    this.iconWheel.getChildByName("wheelOpen").active = _d.I.curLevel <= Je.WHEEL_OPEN && _d.I.turnTableCounts < fa.I.TurnTableData.length, 
                    this.barWheel.node.active = _d.I.curLevel > Je.WHEEL_OPEN && _d.I.turnTableCounts < fa.I.TurnTableData.length;
                    var t = fa.I.getTurnTableRewards(_d.I.turnTableCounts), e = _d.I.turnTableStars / t.stars;
                    this.wheelProgress.string = _d.I.turnTableStars + "/" + t.stars, e > 1 && (e = 1), 
                    this.barWheel.progress = e, this.wheelCounts.string = "今日剩余抽奖次数：" + (fa.I.TurnTableData.length - _d.I.turnTableCounts) + "/" + fa.I.TurnTableData.length;
                }, i.showWheelEffct = function(t, e) {
                    var i = this, n = fa.I.getTurnTableRewards(_d.I.turnTableCounts);
                    if (t > 0) {
                        var r = _d.I.turnTableStars;
                        _d.I.turnTableStars += t, _d.I.turnTableStars >= n.stars && (this.canClose = !1), 
                        this.wait(.5 * (e + 1)).then(function() {
                            i.wheelAct.play("anim_wheel_result"), i.wheelAct.on(H.EventType.FINISHED, function() {
                                i.wheelAni.node.active = !1;
                            });
                            var e = _d.I.turnTableStars / n.stars;
                            e > 1 && (e = 1), _d.I.turnTableCounts < fa.I.TurnTableData.length && t > 0 ? F(i.barWheel).to(1, {
                                progress: e
                            }, {
                                onUpdate: function(e, o) {
                                    var a = Math.floor(o * t);
                                    i.wheelProgress.string = r + a + "/" + n.stars;
                                }
                            }).call(function() {
                                i.barWheel.progress = e, i.wheelProgress.string = _d.I.turnTableStars + "/" + n.stars, 
                                _d.I.turnTableStars >= n.stars && ad.I.openPopwin(td.turnTable);
                            }).delay(1).call(function() {
                                i.canClose = !0;
                            }).start() : i.barWheel.progress = e;
                        });
                    }
                }, i.showActivityOpen = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, ad.I.openPopwin(td.home, "win", this._levelId);

                              case 2:
                                return t.next = 4, ad.I.openPopwin(td.activityHome);

                              case 4:
                                Nn.I.emit(Pi), this.btnClose(), _d.I.hasActivityClick = !0, qr.I.dot("Event_PopLevel", {
                                    id: _d.I.CurActivity
                                });

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }($h)).prototype, "boxContent", [ g_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), F_ = _t(O_.prototype, "title", [ m_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), N_ = _t(O_.prototype, "scoreLbl", [ y_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), z_ = _t(O_.prototype, "stars", [ __ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), G_ = _t(O_.prototype, "reward", [ I_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), U_ = _t(O_.prototype, "rewardIcon", [ w_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), V_ = _t(O_.prototype, "iconWheel", [ S_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), W_ = _t(O_.prototype, "barWheel", [ C_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), H_ = _t(O_.prototype, "wheelCounts", [ A_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), j_ = _t(O_.prototype, "wheelProgress", [ T_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Y_ = _t(O_.prototype, "wheelEffect", [ k_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), K_ = _t(O_.prototype, "wheelAni", [ x_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), q_ = _t(O_.prototype, "wheelAct", [ E_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), X_ = _t(O_.prototype, "btnBox", [ B_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), J_ = _t(O_.prototype, "activityAnimation", [ P_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Q_ = _t(O_.prototype, "activityNode", [ R_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Z_ = _t(O_.prototype, "activityLabel", [ L_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), $_ = _t(O_.prototype, "goldBar", [ D_ ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), O_)), t._RF.pop(), t._RF.push({}, "7dae0Vf0YNDxZ1CvC+e/DcM", "ActivityBoxPopwin", void 0);
            var bI, gI, mI, yI, _I, II, wI, SI, CI, AI, TI, kI, xI = e.ccclass, EI = e.property;
            iI = xI("ActivityBoxPopwin"), nI = EI(i), rI = EI(i), oI = EI(b), aI = EI(b), sI = EI(k), 
            iI((uI = _t((lI = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "iconItem", uI, mt(e)), 
                    yt(mt(e), "layoutInfo", cI, mt(e)), yt(mt(e), "itemRes", hI, mt(e)), yt(mt(e), "boxSprites", dI, mt(e)), 
                    yt(mt(e), "iconBox", fI, mt(e)), dt(mt(e), "_levelId", void 0), dt(mt(e), "box", []), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    var i;
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this._levelId = e, this.box = null === (i = fa.I.getActivityBox(this._levelId)) || void 0 === i ? void 0 : i.reward, 
                    this.iconBox.spriteFrame = this.boxSprites[e < _d.I.ActivityLevel - Je.ACTIVITY_ID_START ? 0 : 1], 
                    this.initReward();
                }, i.initReward = function() {
                    this.layoutInfo.removeAllChildren();
                    for (var t = 0; t < this.box.length; ++t) {
                        var e = m(this.iconItem);
                        e.parent = this.layoutInfo, e.active = !0, e.getComponent(k).spriteFrame = this.itemRes[this.box[t].id], 
                        e.getChildByName("counts").getComponent(L).string = "X" + this.box[t].num;
                    }
                }, e;
            }($h)).prototype, "iconItem", [ nI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), cI = _t(lI.prototype, "layoutInfo", [ rI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), hI = _t(lI.prototype, "itemRes", [ oI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), dI = _t(lI.prototype, "boxSprites", [ aI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), fI = _t(lI.prototype, "iconBox", [ sI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), lI)), t._RF.pop(), t._RF.push({}, "820747pzqVIyImH9jcwCteH", "LuckGiftPopwin", void 0);
            var BI, PI, RI, LI, DI, OI, MI, FI, NI, zI, GI, UI, VI, WI, HI, jI, YI = e.ccclass, KI = e.property;
            bI = YI("LuckGiftPopwin"), gI = KI(L), mI = KI(L), yI = KI(L), _I = KI(i), II = KI(Bo), 
            bI((SI = _t((wI = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "layer", qh.reward), 
                    yt(mt(e), "title", SI, mt(e)), yt(mt(e), "btnLabel", CI, mt(e)), yt(mt(e), "desc", AI, mt(e)), 
                    yt(mt(e), "closeBtn", TI, mt(e)), yt(mt(e), "icon", kI, mt(e)), dt(mt(e), "_state", void 0), 
                    dt(mt(e), "_type", void 0), dt(mt(e), "weights", [ 3, 3, 1, 3 ]), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e, i) {
                    switch (void 0 === e && (e = 0), t.prototype.open.call(this), wn.I.playSound(yn.Pop), 
                    this._state = e, e) {
                      case 0:
                        i = Ve.getWeightRandIndex(this.weights, 10), this.title.string = "幸运道具", this.btnLabel.string = "领 取", 
                        this.closeBtn.active = !0, qr.I.dot("Popwin", {
                            LuckGift: "show"
                        });
                        break;

                      case 1:
                        this.title.string = "恭喜获得", this.btnLabel.string = "双倍领取", this.closeBtn.active = !0, 
                        qr.I.dot("Popwin", {
                            LuckGift: "rewardshow"
                        });
                    }
                    this._type = i;
                    var n = Je.BOOSTER_CONF[i];
                    this.icon.type = i, this.desc.string = "" + n[2];
                    var r = u("Canvas/GameScene").getComponent(fh).levelId;
                    if ([ 3, 6 ].indexOf(r) > -1) {
                        var o = [ "bomb", "leidian", "caihong", "rocket" ][this._type];
                        qr.I.dot("level_" + r, {
                            from: "luck" + o + "_show"
                        });
                    }
                }, i.getReward = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e = u("Canvas/GameScene").getComponent(fh).levelId, t.t0 = this._state, t.next = 0 === t.t0 ? 4 : 1 === t.t0 ? 14 : 22;
                                break;

                              case 4:
                                return t.next = 6, Uo.playAd(zo.luckyGift);

                              case 6:
                                if (this.btnClose(), ad.I.openPopwin(td.luckyGift, 1, this._type), _d.I.recordLuckyGift(1), 
                                qr.I.dot("Popwin", {
                                    LuckGift: "receive"
                                }), !([ 3, 6 ].indexOf(e) > -1)) {
                                    t.next = 13;
                                    break;
                                }
                                i = [ "bomb", "leidian", "caihong", "rocket" ][this._type], qr.I.dot("level_" + e, {
                                    from: "luck" + i + "_video"
                                }), u("Canvas/GameScene").getComponent(fh).isCloseLuckPop = !0;

                              case 13:
                                return t.abrupt("break", 22);

                              case 14:
                                return t.next = 16, Uo.playAd(zo.luckyGiftDouble);

                              case 16:
                                if (this.btnClose(), _d.I.addBooster(this._type, 2), qr.I.dot("Popwin", {
                                    LuckGift: "doublereceive"
                                }), !([ 3, 6 ].indexOf(e) > -1)) {
                                    t.next = 22;
                                    break;
                                }
                                i = [ "bomb", "leidian", "caihong", "rocket" ][this._type], qr.I.dot("level_" + e, {
                                    from: "luck" + i + "_video2"
                                }), u("Canvas/GameScene").getComponent(fh).isCloseLuckPop = !0;

                              case 22:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.skip = function() {
                    switch (this.btnClose(), this._state) {
                      case 0:
                        _d.I.recordLuckyGift(2), qr.I.dot("Popwin", {
                            LuckGift: "skip"
                        });
                        break;

                      case 1:
                        _d.I.addBooster(this._type, 1), qr.I.dot("Popwin", {
                            LuckGift: "doubleSkip"
                        });
                    }
                    var t = u("Canvas/GameScene").getComponent(fh).levelId;
                    if ([ 3, 6 ].indexOf(t) > -1) {
                        var e = [ "bomb", "leidian", "caihong", "rocket" ][this._type];
                        qr.I.dot("level_" + t, {
                            from: "luck" + e + "_close"
                        }), u("Canvas/GameScene").getComponent(fh).isCloseLuckPop = !0;
                    }
                }, e;
            }($h)).prototype, "title", [ gI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), CI = _t(wI.prototype, "btnLabel", [ mI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), AI = _t(wI.prototype, "desc", [ yI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), TI = _t(wI.prototype, "closeBtn", [ _I ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), kI = _t(wI.prototype, "icon", [ II ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), wI)), t._RF.pop(), t._RF.push({}, "89f1eYTIo1DY5vLHLN3nkHb", "TurnTableAwardsPopwin%20", void 0);
            var qI = e.ccclass, XI = e.property;
            BI = qI("TurnTableAwardsPopwin"), PI = XI(b), RI = XI(k), LI = XI(L), DI = XI(R), 
            OI = XI(rt), MI = XI(rt), FI = XI(L), BI((zI = _t((NI = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "items", zI, mt(e)), 
                    yt(mt(e), "item", GI, mt(e)), yt(mt(e), "lblCounts", UI, mt(e)), yt(mt(e), "getBtn", VI, mt(e)), 
                    yt(mt(e), "ToggleSub", WI, mt(e)), yt(mt(e), "ToggleDouble", HI, mt(e)), yt(mt(e), "lblGet", jI, mt(e)), 
                    dt(mt(e), "data", null), dt(mt(e), "toggleCB", null), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    var i = this;
                    t.prototype.open.call(this), this.data = e, wn.I.playSound(yn.Pop), qr.I.dot("Lottery", {
                        reward: !0
                    }), this.item.spriteFrame = this.items[this.data.id], this.lblCounts.string = "X" + this.data.num, 
                    this.addReward(), this.toggleCB = function(t) {
                        var e = !1, n = t.changedTouches[t.changedTouches.length - 1], r = i.getCloseBtnSize(i.getBtn.node);
                        if (n.clientX >= r.left - r.btnSize.width / 2 && n.clientX <= r.left + r.btnSize.width / 2 && n.clientY >= r.top - r.btnSize.height / 2 && n.clientY <= r.top + r.btnSize.height / 2 && (e = !0), 
                        e && ("undefined" != typeof wx && wx.offTouchEnd(i.toggleCB), i.ToggleSub.isChecked && !_d.I.SubscribeWheel)) {
                            var o = [];
                            _d.I.SubscribeSign || o.push(Ct.subscribeIds[0]), _d.I.SubscribeWheel || o.push(Ct.subscribeIds[1]), 
                            br.subScribe(o, function(t) {
                                t.indexOf(Ct.subscribeIds[0]) > -1 && (_d.I.SubscribeSign = !0, _d.I.subscribeSign()), 
                                t.indexOf(Ct.subscribeIds[1]) > -1 && (_d.I.SubscribeWheel = !0, _d.I.subscribeWheel());
                            }, function() {
                                console.log("发送订阅失败");
                            });
                        }
                    }, this.ToggleSub.node.active = !_d.I.SubscribeWheel, this.ToggleDouble.node.active = _d.I.SubscribeWheel, 
                    this.ToggleSub.node.active && "undefined" != typeof wx && wx.onTouchEnd(this.toggleCB), 
                    this.ToggleDouble.isChecked = this.ToggleDouble.node.active, this.ToggleSub.node.on("toggle", this.ToggleSubCallback, this), 
                    this.ToggleSub.isChecked = !0, this.ToggleDouble.node.on("toggle", this.updateToggleDouble, this), 
                    this.updateToggleDouble();
                }, i.addReward = function(t) {
                    void 0 === t && (t = !1), this.data.id > 0 ? _d.I.addBooster(this.data.id - 1, this.data.num) : (_d.I.addGold(this.data.num), 
                    t ? qr.I.dot("coinget_lottery" + this.data.num + "x2", {
                        key: this.data.num
                    }) : qr.I.dot("coinget_lottery" + this.data.num, {
                        key: this.data.num
                    })), t && qr.I.dot("Lottery", {
                        rewardx2: !0
                    });
                }, i.onBtnDoubleClick = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Uo.playAd(zo.wheelDouble);

                              case 2:
                                this.addReward(!0), this.btnClose();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.btnClose = function() {
                    t.prototype.btnClose.call(this);
                }, i.btnGetClick = function() {
                    this.ToggleDouble.isChecked ? this.onBtnDoubleClick() : this.btnClose();
                }, i.ToggleSubCallback = function(t) {
                    t.isChecked && ("undefined" != typeof wx ? wx.onTouchEnd(this.toggleCB) : "undefined" != typeof wx && wx.offTouchEnd(this.toggleCB));
                }, i.updateToggleDouble = function() {
                    this.lblGet.string = this.ToggleDouble.isChecked ? "双倍领取" : "收下了";
                }, i.getCloseBtnSize = function(t) {
                    var e = new ot(t.getComponent(c).width, t.getComponent(c).height), i = t.getComponent(c).getBoundingBoxToWorld(), n = A.getDevicePixelRatio(), r = A.getScaleX() / n;
                    return {
                        btnSize: e,
                        left: i.x * r,
                        top: wx.getSystemInfoSync().screenHeight - (i.y + i.height) * r
                    };
                }, e;
            }($h)).prototype, "items", [ PI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), GI = _t(NI.prototype, "item", [ RI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), UI = _t(NI.prototype, "lblCounts", [ LI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), VI = _t(NI.prototype, "getBtn", [ DI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), WI = _t(NI.prototype, "ToggleSub", [ OI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), HI = _t(NI.prototype, "ToggleDouble", [ MI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), jI = _t(NI.prototype, "lblGet", [ FI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), NI)), t._RF.pop(), t._RF.push({}, "9134dvuc91JrIuOS6+B1Ru1", "RelivePopwin", void 0);
            var JI, QI, ZI, $I, tw, ew, iw, nw, rw = e.ccclass;
            e.property, rw("RelivePopwin")(function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "passTime", void 0), 
                    dt(mt(e), "per", void 0), dt(mt(e), "isActivity", !1), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e, i, n) {
                    this.isActivity = n, t.prototype.open.call(this), wn.I.playSound(yn.Pop), this.passTime = e, 
                    this.per = i, this.isActivity ? qr.I.dot("Popwin", {
                        activityRelive: "show"
                    }) : qr.I.dot("Popwin", {
                        relive: "show"
                    });
                }, i.relive = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Uo.playAd(this.isActivity ? zo.activityRevive : zo.revive);

                              case 2:
                                this.btnClose(), Nn.I.emit(Ei, 5), Nn.I.emit(Ui, Ke.FIREBALL, 1, !0), za.I.run(!0), 
                                this.isActivity ? qr.I.dot("Popwin", {
                                    activityRelive: "relive"
                                }) : qr.I.dot("Popwin", {
                                    relive: "relive"
                                });

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.skip = function() {
                    this.btnClose(), this.isActivity ? (Nn.I.emit(rn, !1, this.passTime, this.per), 
                    qr.I.dot("Popwin", {
                        activityRelive: "hide"
                    })) : (Nn.I.emit(Mi, this.passTime, this.per), qr.I.dot("Popwin", {
                        relive: "hide"
                    }));
                }, e;
            }($h)), t._RF.pop(), t._RF.push({}, "91a51nvXQtFs4m+8e0H3O1F", "BubbleUnlockPopwin", void 0);
            var ow, aw, sw, lw, uw = e.ccclass, cw = e.property;
            JI = uw("BubbleUnlockPopwin"), QI = cw(k), ZI = cw(L), $I = cw(L), JI((ew = _t((tw = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "icon", ew, mt(e)), 
                    yt(mt(e), "bubbleName", iw, mt(e)), yt(mt(e), "bubbleDesc", nw, mt(e)), e;
                }
                return pt(e, t), e.prototype.open = function(e, i, n, r) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this.bubbleName.string = i, 
                    this.bubbleDesc.string = n, this.icon.spriteFrame = null, mn.loadSpriteFrame(this.icon, "texture/bubble/" + r);
                }, e;
            }($h)).prototype, "icon", [ QI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), iw = _t(tw.prototype, "bubbleName", [ ZI ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), nw = _t(tw.prototype, "bubbleDesc", [ $I ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), tw)), t._RF.pop(), t._RF.push({}, "94e91nYanNLDI5T+eAoPTnR", "SoundButton", void 0);
            var hw = e.ccclass, dw = e.property;
            ow = hw("SoundButton"), aw = dw({
                type: T(yn)
            }), ow((lw = _t((sw = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "audioName", lw, mt(e)), 
                    e;
                }
                pt(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    this.node.on(i.EventType.TOUCH_END, this.playSound, this);
                }, n.playSound = function() {
                    wn.I.playSound(this.audioName);
                }, e;
            }(a)).prototype, "audioName", [ aw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return yn.Button;
                }
            }), sw)), t._RF.pop(), t._RF.push({}, "96210CKmWRHIoVHE/iDTwSl", "TopToolAdapt", void 0);
            var fw, pw, vw, bw, gw = e.ccclass;
            e.property, gw("TopToolAdapt")(function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    window.wx && (this.node.active = !1, this.scheduleOnce(function() {
                        t.node.active = !0;
                        var e = wx && wx.getMenuButtonBoundingClientRect(), i = wx.getSystemInfoSync(), n = u("Canvas").getComponent(c).width, r = u("Canvas").getComponent(c).height, o = i.windowWidth / n, a = (e.top + e.height / 2) / o;
                        e.left, e.width, t.node.setWorldPosition(t.node.worldPosition.x, r - a, 0);
                    }));
                }, e;
            }(a)), t._RF.pop(), t._RF.push({}, "97f1bBGh3BN56NtXHQchd/I", "ActivityQuitPopwin", void 0);
            var mw, yw = e.ccclass, _w = e.property;
            fw = yw("ActivityQuitPopwin"), pw = _w(L), fw((bw = _t((vw = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "lblBox", bw, mt(e)), 
                    dt(mt(e), "_levelId", void 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this._levelId = e;
                    var i = this.getNextBoxCounts();
                    this.lblBox.string = 1 == i ? "本关开启宝箱" : "还剩" + i + "关开启宝箱";
                }, i.activityHome = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return ad.I.openPopwin(td.home, "win", this._levelId), t.next = 3, ad.I.openPopwin(td.activityHome);

                              case 3:
                                Nn.I.emit(Pi), this.btnClose();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.getNextBoxCounts = function() {
                    for (var t = 0; t < 5; ++t) if ((this._levelId + t) % 5 == 0) return t + 1;
                }, e;
            }($h)).prototype, "lblBox", [ pw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), vw)), t._RF.pop(), t._RF.push({}, "9a41c2HjspHU6pMHFF436OL", "BaseIStorage", void 0), 
            t._RF.pop(), t._RF.push({}, "9cadbjUZ/xDz6PNiGKpLpYX", "SDKDefault", void 0), t._RF.pop(), 
            t._RF.push({}, "9f37e/e32FLTaDf4x+T8dmT", "Lighting", void 0);
            var Iw, ww, Sw, Cw, Aw, Tw, kw, xw, Ew, Bw, Pw, Rw, Lw, Dw, Ow, Mw, Fw, Nw, zw, Gw, Uw, Vw, Ww, Hw, jw, Yw, Kw, qw, Xw, Jw, Qw, Zw, $w, tS, eS, iS, nS, rS, oS, aS, sS, lS, uS, cS, hS, dS, fS = e.ccclass;
            e.property, fS(mw = (0, e.menu)("game/booster/Lighting")(mw = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e;
            }(ru)) || mw), t._RF.pop(), t._RF.push({}, "a2d54GdYPtI44SLoaso1iqS", "ActivityResultPopwin", void 0);
            var pS = e.ccclass, vS = e.property;
            Iw = pS("ActivityResultPopwin"), ww = vS(k), Sw = vS(L), Cw = vS(L), Aw = vS(L), 
            Tw = vS(i), kw = vS(b), xw = vS(R), Ew = vS(R), Bw = vS(R), Pw = vS(L), Rw = vS(i), 
            Lw = vS(L), Dw = vS(L), Ow = vS(L), Mw = vS(i), Fw = vS(i), Nw = vS(L), zw = vS(i), 
            Gw = vS(I), Uw = vS(V), Vw = vS(i), Ww = vS(i), Iw((jw = _t((Hw = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "imgTitle", jw, mt(e)), 
                    yt(mt(e), "lblTitle", Yw, mt(e)), yt(mt(e), "lblScore", Kw, mt(e)), yt(mt(e), "reward", qw, mt(e)), 
                    yt(mt(e), "rewardIcon", Xw, mt(e)), yt(mt(e), "spriteTitle", Jw, mt(e)), yt(mt(e), "homeBtn", Qw, mt(e)), 
                    yt(mt(e), "nextBtn", Zw, mt(e)), yt(mt(e), "retryBtn", $w, mt(e)), yt(mt(e), "boxContent", tS, mt(e)), 
                    yt(mt(e), "lblFail", eS, mt(e)), yt(mt(e), "lblPower", iS, mt(e)), yt(mt(e), "lblPowerTime", nS, mt(e)), 
                    yt(mt(e), "lblTime", rS, mt(e)), yt(mt(e), "goldBar", oS, mt(e)), yt(mt(e), "retryLive", aS, mt(e)), 
                    yt(mt(e), "lblNext", sS, mt(e)), yt(mt(e), "nextLive", lS, mt(e)), yt(mt(e), "animationBox", uS, mt(e)), 
                    yt(mt(e), "prefabBox", cS, mt(e)), yt(mt(e), "boxNode", hS, mt(e)), yt(mt(e), "overBtn", dS, mt(e)), 
                    dt(mt(e), "_levelId", 0), dt(mt(e), "mapData", null), dt(mt(e), "canClose", !0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onEnable = function() {
                    this.goldBar.getComponent(Eh).resetShowOne();
                }, i.open = function(e, i, n, r, o, a, s, l) {
                    var u = this;
                    t.prototype.open.call(this), this.resetBoxNode(), wn.I.playSound(yn.Pop), this._levelId = i, 
                    this.mapData = l, this.lblTitle.string = "活动关卡 " + (i - Je.ACTIVITY_ID_START);
                    var c = this.getNextBoxCounts();
                    this.boxContent.string = "还剩" + c + "关开启宝箱", this.reward.node.parent.active = e, 
                    e && (this.addReward(), i % 5 == 0 && (this.boxContent.string = "宝箱已开启", this.canClose = !1, 
                    setTimeout(function() {
                        u.showActivityGet();
                    }, 1e3))), this.nextBtn.node.active = e && _d.I.ActivityLevel <= da.I.actMapMaxID && !!_d.I.CurActivity, 
                    this.homeBtn.node.active = e && _d.I.ActivityLevel > da.I.actMapMaxID && !!_d.I.CurActivity, 
                    this.overBtn.active = !_d.I.CurActivity, this.imgTitle.spriteFrame = e ? this.spriteTitle[0] : this.spriteTitle[1], 
                    this.retryBtn.node.active = !e && !!_d.I.CurActivity, this.lblFail.active = !e, 
                    this.updatePower(), this.goldBar.active = e, qr.I.levelEnd(i, null, null, e ? "complete" : "fail", o, a, s);
                }, i.addReward = function() {
                    var t = _d.I.passActivity(this._levelId);
                    t > 0 ? (this.reward.node.parent.parent = this.reward.node.parent.parent, this.reward.string = "+" + t, 
                    this.waitGold(t)) : this.reward.node.parent.removeFromParent();
                }, i.waitGold = function() {
                    var t = ut(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.wait(1);

                              case 2:
                                Nn.I.emit(ia, e, this.rewardIcon);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.next = function() {
                    var t = this;
                    this.canClose && "" != _d.I.CurActivity && (_d.I.ActivityPower <= 0 ? this.addPower() : (this.canClose = !1, 
                    _d.I.ActivityPower--, this.updatePower(), this.doLiveAction(this.nextLive, function() {
                        t.canClose = !0, t.btnClose(), Nn.I.emit(Ri, t._levelId + 1, !0);
                    })));
                }, i.home = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = this.canClose, !t.t0) {
                                    t.next = 6;
                                    break;
                                }
                                return t.next = 4, ad.I.openPopwin(td.home, "win", this._levelId);

                              case 4:
                                Nn.I.emit(Pi), this.btnClose();

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.activityHome = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = this.canClose, !t.t0) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 4, ad.I.openPopwin(td.home, "win", this._levelId);

                              case 4:
                                return t.next = 6, ad.I.openPopwin(td.activityHome);

                              case 6:
                                Nn.I.emit(Pi), this.btnClose();

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.activityOver = function() {
                    ad.I.openPopwin(td.activityOver, !0);
                }, i.onClose = function() {
                    t.prototype.onClose.call(this), this.unscheduleAllCallbacks();
                }, i.btnClose = function() {
                    this.canClose && t.prototype.btnClose.call(this);
                }, i.retry = function() {
                    var t = this;
                    _d.I.ActivityPower <= 0 ? this.addPower() : (this.canClose = !1, _d.I.ActivityPower--, 
                    this.updatePower(), this.doLiveAction(this.retryLive, function() {
                        t.canClose = !0, t.btnClose(), Nn.I.emit(Ri, t._levelId, !0);
                    }));
                }, i.wait = function(t) {
                    var e = this;
                    return void 0 === t && (t = 1), new Promise(function(i, n) {
                        e.scheduleOnce(i, t);
                    });
                }, i.getNextBoxCounts = function() {
                    for (var t = 0; t < 5; ++t) if ((this._levelId + t) % 5 == 0) return t;
                }, i.showActivityGet = function() {
                    var t = this;
                    this.animationBox.play("anim_box"), this.animationBox.on(H.EventType.FINISHED, function() {
                        ad.I.openPopwin(td.activityGet, t._levelId), t.canClose = !0;
                    });
                }, i.updatePower = function() {
                    this.lblPower.string = _d.I.ActivityPower.toString(), this.lblPowerTime.string = _d.I.ActivityPower < Je.ACTIVITY_POWER_MAX ? this.getNextTime() : "已满", 
                    this.lblTime.string = this.getEndTime();
                }, i.getNextTime = function() {
                    var t = _d.I.ActivityPowerTimer + Je.ACTIVITY_POWER_CD, e = Math.floor((t - new Date().getTime()) / 1e3);
                    return Ve.getFormatBySecond(e, 0);
                }, i.getEndTime = function() {
                    var t = _d.I.CurActivity.split("_"), e = parseInt(t[t.length - 1]), i = br.getParamsInt("event_close_" + e) || 0;
                    br.isWx || (i = Je.ACTIVITY_TEST_CLOSE);
                    var n = Math.floor((i - new Date().getTime()) / 1e3);
                    return Ve.getFormatBySecond(n, 5);
                }, i.addPower = function() {
                    ad.I.openPopwin(td.activityBuy);
                }, i.doLiveAction = function(t, e) {
                    var i = m(t);
                    i.parent = t.parent, i.active = !0;
                    var n = t.parent.getChildByName("board_live").position.clone();
                    F(i).delay(.1).to(.5, {
                        position: n
                    }).delay(.1).call(e).removeSelf().start();
                }, i.resetBoxNode = function() {
                    this.boxNode.removeAllChildren();
                    var t = m(this.prefabBox);
                    t.parent = this.boxNode, this.animationBox = t.getComponent(I), this.boxContent = t.getChildByName("lblBox").getComponent(L), 
                    this.boxContent.node.active = !0;
                }, e;
            }($h)).prototype, "imgTitle", [ ww ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Yw = _t(Hw.prototype, "lblTitle", [ Sw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Kw = _t(Hw.prototype, "lblScore", [ Cw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), qw = _t(Hw.prototype, "reward", [ Aw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Xw = _t(Hw.prototype, "rewardIcon", [ Tw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Jw = _t(Hw.prototype, "spriteTitle", [ kw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Qw = _t(Hw.prototype, "homeBtn", [ xw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Zw = _t(Hw.prototype, "nextBtn", [ Ew ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), $w = _t(Hw.prototype, "retryBtn", [ Bw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), tS = _t(Hw.prototype, "boxContent", [ Pw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), eS = _t(Hw.prototype, "lblFail", [ Rw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), iS = _t(Hw.prototype, "lblPower", [ Lw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), nS = _t(Hw.prototype, "lblPowerTime", [ Dw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), rS = _t(Hw.prototype, "lblTime", [ Ow ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), oS = _t(Hw.prototype, "goldBar", [ Mw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), aS = _t(Hw.prototype, "retryLive", [ Fw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), sS = _t(Hw.prototype, "lblNext", [ Nw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), lS = _t(Hw.prototype, "nextLive", [ zw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), uS = _t(Hw.prototype, "animationBox", [ Gw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), cS = _t(Hw.prototype, "prefabBox", [ Uw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), hS = _t(Hw.prototype, "boxNode", [ Vw ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), dS = _t(Hw.prototype, "overBtn", [ Ww ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Hw)), t._RF.pop(), t._RF.push({}, "a3795S4d25EE5+T16CMceZy", "ReceiveGoldPopwin", void 0);
            var bS, gS, mS, yS, _S, IS, wS, SS = e.ccclass;
            e.property, SS("ReceiveGoldPopwin")(function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function() {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), qr.I.dot("Popwin", {
                        VideoGold: "show"
                    });
                }, i.receive = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Uo.playAd(zo.gold);

                              case 2:
                                this.btnClose(), _d.I.addGold(100), qr.I.dot("coinget_VideoGold", {
                                    key: 100
                                }), qr.I.dot("Popwin", {
                                    VideoGold: "receive"
                                });

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.skip = function() {
                    this.btnClose(), qr.I.dot("Popwin", {
                        VideoGold: "close"
                    });
                }, e;
            }($h)), t._RF.pop(), t._RF.push({}, "a971c0LCZVKBpqNMJk+DPBX", "AColor", void 0);
            var CS, AS, TS = e.ccclass, kS = e.property;
            bS = (0, e.menu)("game/bubble/AColor"), gS = kS(k), mS = kS(b), TS(yS = bS((IS = _t((_S = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "icon", IS, mt(e)), 
                    yt(mt(e), "sprites", wS, mt(e)), dt(mt(e), "_model", void 0), e;
                }
                return pt(e, t), e.prototype.init = function(t, e) {
                    this._model = t;
                    var i = t.addColor.color;
                    this.icon.spriteFrame = this.sprites[Math.log2(i)];
                }, e;
            }(Ss)).prototype, "icon", [ gS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), wS = _t(_S.prototype, "sprites", [ mS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), yS = _S)) || yS), t._RF.pop(), t._RF.push({}, "aa3ceS3TP9ITr6ELgdPg+Bo", "DelayShow", void 0);
            var xS, ES, BS, PS, RS, LS, DS, OS = e.ccclass, MS = e.property;
            OS("DelayShow")((AS = _t((CS = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "delayTime", AS, mt(e)), 
                    e;
                }
                return pt(e, t), e.prototype.onEnable = function() {
                    var t = this.getComponent(G);
                    t || (t = this.addComponent(G)), z.stopAllByTarget(t), t.opacity = 0, F(t).delay(this.delayTime).to(.5, {
                        opacity: 255
                    }).start();
                }, e;
            }(a)).prototype, "delayTime", [ MS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2.5;
                }
            }), CS)), t._RF.pop(), t._RF.push({}, "ab073UwBpxM5YYufQHSqbUV", "AudioButton", void 0);
            var FS, NS, zS, GS, US, VS, WS, HS = e.ccclass, jS = e.property;
            xS = HS("AudioButton"), ES = jS(b), BS = jS(b), xS((RS = _t((PS = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "isMusic", RS, mt(e)), 
                    yt(mt(e), "onState", LS, mt(e)), yt(mt(e), "offState", DS, mt(e)), dt(mt(e), "_state", void 0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    this._state = wn.I.getAudioSetting(this.isMusic), this.updateState();
                }, i.change = function() {
                    this._state = !this._state, this.isMusic ? this._state ? wn.I.openMusic() : wn.I.closeMusic() : this._state ? wn.I.openSound() : wn.I.closeSound(), 
                    this.updateState();
                }, i.updateState = function() {
                    this.getComponent(k).spriteFrame = this._state ? this.onState : this.offState;
                }, e;
            }(R)).prototype, "isMusic", [ jS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), LS = _t(PS.prototype, "onState", [ ES ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), DS = _t(PS.prototype, "offState", [ BS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), PS)), t._RF.pop(), t._RF.push({}, "accf2doPoZHxq78e0FkZEPT", "DChain", void 0);
            var YS, KS, qS, XS, JS, QS, ZS, $S, tC = e.ccclass, eC = e.property;
            FS = (0, e.menu)("game/bubble/DChain"), NS = eC(I), zS = eC(nt), tC(GS = FS((VS = _t((US = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "anim", VS, mt(e)), 
                    yt(mt(e), "animClip", WS, mt(e)), dt(mt(e), "icon", null), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.init = function(e) {
                    t.prototype.init.call(this, e), this.icon = this.con.getChildByName("icon");
                    var i = m(this.icon);
                    this.icon.active = !1, i.parent = this.con, i.active = !0, this.anim = i.getComponent(I);
                }, i.remove = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                r = this, wn.I.playSound(yn.Chain), this.anim.play("anim_suolian"), this.anim.on(H.EventType.FINISHED, function() {
                                    e && e(), r.anim.getState("anim_suolian").time = 0, r.anim.getState("anim_suolian").sample(), 
                                    r.anim.node.removeFromParent();
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }(Gm)).prototype, "anim", [ NS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), WS = _t(US.prototype, "animClip", [ zS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), GS = US)) || GS), t._RF.pop(), t._RF.push({}, "addbfqUB0RO5LL3PYwIAjlL", "ActivityGetPopwin", void 0);
            var iC, nC = e.ccclass, rC = e.property;
            YS = nC("ActivityGetPopwin"), KS = rC(i), qS = rC(i), XS = rC(b), YS((QS = _t((JS = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "iconItem", QS, mt(e)), 
                    yt(mt(e), "layoutInfo", ZS, mt(e)), yt(mt(e), "itemRes", $S, mt(e)), dt(mt(e), "_levelId", void 0), 
                    dt(mt(e), "box", []), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    var i;
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this._levelId = e, this.box = null === (i = fa.I.getActivityBox(this._levelId - Je.ACTIVITY_ID_START)) || void 0 === i ? void 0 : i.reward, 
                    this.initReward(), qr.I.dot("EventChest", {
                        id: this._levelId
                    });
                }, i.initReward = function() {
                    this.layoutInfo.removeAllChildren();
                    for (var t = 0; t < this.box.length; ++t) {
                        var e = m(this.iconItem);
                        e.parent = this.layoutInfo, e.active = !0, e.getComponent(k).spriteFrame = this.itemRes[this.box[t].id], 
                        e.getChildByName("num").getComponent(L).string = "X" + this.box[t].num, this.addReward(this.box[t]);
                    }
                }, i.addReward = function(t) {
                    t.id > 0 ? _d.I.addBooster(t.id - 1, t.num) : _d.I.addGold(t.num);
                }, e;
            }($h)).prototype, "iconItem", [ KS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ZS = _t(JS.prototype, "layoutInfo", [ qS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), $S = _t(JS.prototype, "itemRes", [ XS ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), JS)), t._RF.pop(), t._RF.push({}, "b11beu6WulMGJxhOB75+DgM", "Fireball", void 0);
            var oC, aC = e.ccclass;
            e.property, aC(iC = (0, e.menu)("game/booster/Fireball")(iC = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e.prototype.init = function(e) {
                    t.prototype.init.call(this, e), this._hitEffect = null;
                }, e;
            }(ru)) || iC), t._RF.pop(), t._RF.push({}, "b279b619zhCi65N6kv36r7Z", "Rainbow", void 0);
            var sC = e.ccclass;
            e.property, sC(oC = (0, e.menu)("game/booster/Rainbow")(oC = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e;
            }(ru)) || oC), t._RF.pop(), t._RF.push({}, "b6107y3769O7aD58fOk/jf0", "ActivityRulePopwin", void 0);
            var lC, uC, cC, hC, dC, fC, pC, vC, bC, gC, mC, yC, _C, IC, wC, SC, CC, AC, TC = e.ccclass;
            e.property, TC("ActivityRulePopwin")(function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e.prototype.open = function(e) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop);
                }, e;
            }($h)), t._RF.pop(), t._RF.push({}, "b8e07kNSchDzZC5KYNs8ZRd", "GuidePopwin", void 0);
            var kC = e.ccclass, xC = e.property;
            lC = kC("GuidePopwin"), uC = xC(c), cC = xC(i), hC = xC(L), dC = xC(at), fC = xC(i), 
            pC = xC(i), vC = xC(i), bC = xC(i), lC((mC = _t((gC = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "layer", qh.game), 
                    yt(mt(e), "bg", mC, mt(e)), yt(mt(e), "content", yC, mt(e)), yt(mt(e), "desc", _C, mt(e)), 
                    yt(mt(e), "guideMask", IC, mt(e)), yt(mt(e), "arrow", wC, mt(e)), yt(mt(e), "boder", SC, mt(e)), 
                    yt(mt(e), "okBtn", CC, mt(e)), yt(mt(e), "maskBtn", AC, mt(e)), dt(mt(e), "_target", void 0), 
                    e;
                }
                pt(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    u("Canvas").on(i.EventType.TOUCH_END, this.clickBg, this);
                }, r.open = function(e, i, n) {
                    if (void 0 === i && (i = 220), t.prototype.open.call(this), this._target = n, this.content.setPosition(0, i), 
                    this.guideMask.node.active = !1, this.desc.string = e, this.guideMask.enabled = !1, 
                    this.arrow.active = !1, this.okBtn.active = !1, this.boder.getComponent(c).height = 180, 
                    this.maskBtn.active = !1, n) {
                        this.guideMask.node.active = !0, this.guideMask.enabled = !0, this.guideMask.node.setWorldPosition(n.pos), 
                        this.maskBtn.setWorldPosition(n.pos);
                        var r = this.guideMask.node.position;
                        this.maskBtn.getComponent(c).width = this.maskBtn.getComponent(c).height = this.guideMask.getComponent(c).width = this.guideMask.getComponent(c).height = n.size, 
                        n.waitEvent && this.waitForEvent(), n.confirm && (this.okBtn.active = !0, this.boder.getComponent(c).height = 300), 
                        n.arrow && (this.arrow.active = !0, this.arrow.setPosition(r.x, r.y + n.size / 2 + 5));
                    }
                    this.bg.width = Ve.winWidth, this.bg.height = Ve.winHeight, this.bg.node.setWorldPosition(l(this.bg.width / 2, this.bg.height / 2));
                }, r.waitForEvent = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = this._target, !t.t0) {
                                    t.next = 5;
                                    break;
                                }
                                return t.next = 4, Nn.I.waitEvent(this._target.waitEvent);

                              case 4:
                                this.btnClose();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), r.clickBg = function() {
                    this._target && (this._target.waitEvent || this._target.confirm) || this.btnClose();
                }, e;
            }($h)).prototype, "bg", [ uC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), yC = _t(gC.prototype, "content", [ cC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _C = _t(gC.prototype, "desc", [ hC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), IC = _t(gC.prototype, "guideMask", [ dC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), wC = _t(gC.prototype, "arrow", [ fC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), SC = _t(gC.prototype, "boder", [ pC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), CC = _t(gC.prototype, "okBtn", [ vC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), AC = _t(gC.prototype, "maskBtn", [ bC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), gC)), t._RF.pop(), t._RF.push({}, "b994fE/1DJDqp+Zo8MqWv4z", "Sha1Utils", void 0);
            var EC, BC, PC, RC, LC, DC, OC, MC, FC, NC, zC, GC, UC = function() {
                function t() {
                    dt(this, "blockstart", void 0), dt(this, "W", void 0), dt(this, "H0", void 0), dt(this, "H1", void 0), 
                    dt(this, "H2", void 0), dt(this, "H3", void 0), dt(this, "H4", void 0), dt(this, "A", void 0), 
                    dt(this, "B", void 0), dt(this, "C", void 0), dt(this, "D", void 0), dt(this, "E", void 0), 
                    dt(this, "temp", void 0), dt(this, "msg", void 0), dt(this, "msg_len", void 0), 
                    dt(this, "word_array", void 0);
                }
                var e = t.prototype;
                return e.init = function(t) {
                    this.blockstart = null, this.W = new Array(80), this.H0 = 1732584193, this.H1 = 4023233417, 
                    this.H2 = 2562383102, this.H3 = 271733878, this.H4 = 3285377520, this.A = this.B = this.C = this.D = this.E = this.temp = this.msg = this.msg_len = null, 
                    this.word_array = [], this.msg = this.Utf8Encode(t), this.msg_len = this.msg.length;
                    for (var e = 0; e < this.msg_len - 3; e += 4) {
                        var i = this.msg.charCodeAt(e) << 24 | this.msg.charCodeAt(e + 1) << 16 | this.msg.charCodeAt(e + 2) << 8 | this.msg.charCodeAt(e + 3);
                        this.word_array.push(i);
                    }
                    this.initMsg(this.msg_len);
                }, e.initMsg = function(t) {
                    var e;
                    switch (t % 4) {
                      case 0:
                        e = 2147483648;
                        break;

                      case 1:
                        e = this.msg.charCodeAt(t - 1) << 24 | 8388608;
                        break;

                      case 2:
                        e = this.msg.charCodeAt(t - 2) << 24 | this.msg.charCodeAt(t - 1) << 16 | 32768;
                        break;

                      case 3:
                        e = this.msg.charCodeAt(t - 3) << 24 | this.msg.charCodeAt(t - 2) << 16 | this.msg.charCodeAt(t - 1) << 8 | 128;
                    }
                    for (this.word_array.push(e); this.word_array.length % 16 != 14; ) this.word_array.push(0);
                    this.word_array.push(t >>> 29), this.word_array.push(t << 3 & 4294967295), this.getTemp();
                }, e.getTemp = function() {
                    for (this.blockstart = 0; this.blockstart < this.word_array.length; this.blockstart += 16) {
                        for (var t = 0; t < 16; t++) this.W[t] = this.word_array[this.blockstart + t];
                        for (var e = 16; e <= 79; e++) this.W[e] = this.rotate_left(this.W[e - 3] ^ this.W[e - 8] ^ this.W[e - 14] ^ this.W[e - 16], 1);
                        this.A = this.H0, this.B = this.H1, this.C = this.H2, this.D = this.H3, this.E = this.H4;
                        for (var i = 0; i <= 19; i++) this.temp = this.rotate_left(this.A, 5) + (this.B & this.C | ~this.B & this.D) + this.E + this.W[i] + 1518500249 & 4294967295, 
                        this.E = this.D, this.D = this.C, this.C = this.rotate_left(this.B, 30), this.B = this.A, 
                        this.A = this.temp;
                        for (var n = 20; n <= 39; n++) this.temp = this.rotate_left(this.A, 5) + (this.B ^ this.C ^ this.D) + this.E + this.W[n] + 1859775393 & 4294967295, 
                        this.E = this.D, this.D = this.C, this.C = this.rotate_left(this.B, 30), this.B = this.A, 
                        this.A = this.temp;
                        for (var r = 40; r <= 59; r++) this.temp = this.rotate_left(this.A, 5) + (this.B & this.C | this.B & this.D | this.C & this.D) + this.E + this.W[r] + 2400959708 & 4294967295, 
                        this.E = this.D, this.D = this.C, this.C = this.rotate_left(this.B, 30), this.B = this.A, 
                        this.A = this.temp;
                        for (var o = 60; o <= 79; o++) this.temp = this.rotate_left(this.A, 5) + (this.B ^ this.C ^ this.D) + this.E + this.W[o] + 3395469782 & 4294967295, 
                        this.E = this.D, this.D = this.C, this.C = this.rotate_left(this.B, 30), this.B = this.A, 
                        this.A = this.temp;
                        this.H0 = this.H0 + this.A & 4294967295, this.H1 = this.H1 + this.B & 4294967295, 
                        this.H2 = this.H2 + this.C & 4294967295, this.H3 = this.H3 + this.D & 4294967295, 
                        this.H4 = this.H4 + this.E & 4294967295;
                    }
                }, e.hex_sha1 = function(t) {
                    return this.init(t), (this.cvt_hex(this.H0) + this.cvt_hex(this.H1) + this.cvt_hex(this.H2) + this.cvt_hex(this.H3) + this.cvt_hex(this.H4)).toLowerCase();
                }, e.rotate_left = function(t, e) {
                    return t << e | t >>> 32 - e;
                }, e.lsb_hex = function(t) {
                    var e, i, n = "";
                    for (e = 0; e <= 6; e += 2) i = t >>> 4 * e & 15, n += (t >>> 4 * e + 4 & 15).toString(16) + i.toString(16);
                    return n;
                }, e.cvt_hex = function(t) {
                    var e, i = "";
                    for (e = 7; e >= 0; e--) i += (t >>> 4 * e & 15).toString(16);
                    return i;
                }, e.Utf8Encode = function(t) {
                    void 0 === t && (t = ""), t = t.replace(/\r\n/g, "\n");
                    for (var e = "", i = 0; i < t.length; i++) {
                        var n = t.charCodeAt(i);
                        n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), 
                        e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), 
                        e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128));
                    }
                    return e;
                }, ht(t, null, [ {
                    key: "I",
                    get: function() {
                        return this.instance || (this.instance = new t());
                    }
                } ]), t;
            }();
            dt(UC, "instance", void 0), t._RF.pop(), t._RF.push({}, "ba9aaXhdb5LVK2JG8oX6+T5", "ActivityHomePopwin", void 0);
            var VC, WC = e.ccclass, HC = e.property;
            EC = WC("ActivityHomePopwin"), BC = HC(Hv), PC = HC(L), RC = HC(L), LC = HC(i), 
            DC = HC(i), EC((MC = _t((OC = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "levelList", MC, mt(e)), 
                    yt(mt(e), "lblTime", FC, mt(e)), yt(mt(e), "level", NC, mt(e)), yt(mt(e), "goldBar", zC, mt(e)), 
                    yt(mt(e), "powerBar", GC, mt(e)), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onEnable = function() {
                    this.goldBar.getComponent(Eh).resetShowOne(), this.powerBar.getComponent(Oh).resetShowOne();
                }, i.open = function(e, i) {
                    t.prototype.open.call(this), this.levelList._bottomGap = this.levelList.content.getComponent(P).paddingBottom = 300 + (u("Canvas").getComponent(c).height - 1334) / 2;
                    var n = _d.I.ActivityLevel - Je.ACTIVITY_ID_START;
                    this.levelList.numItems = Math.ceil((da.I.actMapMaxID - Je.ACTIVITY_ID_START) / 6);
                    var r = -this.levelList.tmpPrefab.data.getComponent(Lb).levels[(n - 1) % 6].node.position.y;
                    this.level.string = _d.I.ActivityLevel > da.I.actMapMaxID ? "已完成" : "第" + n + "关", 
                    this.levelList.scrollTo(Math.ceil(n / 6) - 1, 0, (r + this.levelList._bottomGap) / this.levelList.getComponent(c).height), 
                    _d.I.CurActivity ? _d.I.ActivityLevel > da.I.actMapMaxID && ad.I.openPopwin(td.activityOver) : ad.I.openPopwin(td.activityOver, !0), 
                    this.updateActivityTime(), this.schedule(this.updateActivityTime, 1);
                }, i.updateLevelGroupItem = function(t, e) {
                    t.getComponent(Lb).updateActivityData(6 * e + 1, e < this.levelList.numItems - 1);
                }, i.startLevel = function() {
                    _d.I.ActivityLevel > da.I.actMapMaxID || !_d.I.CurActivity || ad.I.openPopwin(td.activityStart, _d.I.ActivityLevel);
                }, i.getNextTime = function() {
                    var t = _d.I.ActivityPowerTimer + Je.ACTIVITY_POWER_CD, e = Math.floor((t - new Date().getTime()) / 1e3);
                    return Ve.getFormatBySecond(e, 0);
                }, i.getEndTime = function() {
                    if (!_d.I.CurActivity) return "活动已结束";
                    var t = _d.I.CurActivity.split("_"), e = parseInt(t[t.length - 1]), i = br.getParamsInt("event_close_" + e) || 0;
                    br.isWx || (i = Je.ACTIVITY_TEST_CLOSE);
                    var n = Math.floor((i - new Date().getTime()) / 1e3);
                    return Ve.getFormatBySecond(n, 5);
                }, i.addPower = function() {
                    ad.I.openPopwin(td.activityBuy);
                }, i.updateActivityTime = function() {
                    this.lblTime.string = this.getEndTime();
                }, i.showActivityRule = function() {
                    ad.I.openPopwin(td.activityRule);
                }, i.returnHome = function() {
                    Nn.I.emit(on), this.btnClose();
                }, i.home = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, ad.I.openPopwin(td.home, "win", _d.I.curLevel);

                              case 2:
                                Nn.I.emit(Pi), this.btnClose();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }($h)).prototype, "levelList", [ BC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), FC = _t(OC.prototype, "lblTime", [ PC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), NC = _t(OC.prototype, "level", [ RC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zC = _t(OC.prototype, "goldBar", [ LC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), GC = _t(OC.prototype, "powerBar", [ DC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), OC)), t._RF.pop(), t._RF.push({}, "bd043sXiTdBcI8xhfOz6fVg", "Bomb", void 0);
            var jC, YC, KC, qC, XC, JC, QC, ZC, $C, tA, eA, iA, nA, rA, oA = e.ccclass;
            e.property, oA(VC = (0, e.menu)("game/booster/Bomb")(VC = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e;
            }(ru)) || VC), t._RF.pop(), t._RF.push({}, "be568cPoDNGeINRBtT93O+f", "MissionGetPopwin", void 0);
            var aA = e.ccclass, sA = e.property;
            jC = aA("MissionGetPopwin"), YC = sA(i), KC = sA(i), qC = sA(b), XC = sA(rt), JC = sA(L), 
            QC = sA(L), jC(($C = _t((ZC = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "iconItem", $C, mt(e)), 
                    yt(mt(e), "layoutInfo", tA, mt(e)), yt(mt(e), "itemRes", eA, mt(e)), yt(mt(e), "ToggleAD", iA, mt(e)), 
                    yt(mt(e), "lblAD", nA, mt(e)), yt(mt(e), "lblGet", rA, mt(e)), dt(mt(e), "index", -1), 
                    dt(mt(e), "adTimes", 1), dt(mt(e), "box", []), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    if (void 0 === e && (e = -1), t.prototype.open.call(this), wn.I.playSound(yn.Pop), 
                    this.index = e, -1 == e) {
                        var i = fa.I.getMissionKindByDay(_d.I.MissionDay);
                        this.box = i.reward;
                    } else {
                        var n = Ba.I.tasks[e].id, r = fa.I.getMissionByID(n);
                        this.box = [ r.reward ];
                    }
                    -1 == this.index ? this.adTimes = Je.MISSION_BOX_TIMES : this.adTimes = Je.MISSION_AD_TIMES, 
                    this.initReward(), this.ToggleAD.isChecked = !0, this.lblAD.string = "看广告得" + this.adTimes + "倍奖励", 
                    this.ToggleAD.node.on("toggle", this.ToggleADCallback, this);
                }, i.initReward = function() {
                    this.layoutInfo.removeAllChildren();
                    for (var t = 0; t < this.box.length; ++t) {
                        var e = m(this.iconItem);
                        e.parent = this.layoutInfo, e.active = !0, e.getComponent(k).spriteFrame = this.itemRes[this.box[t].id], 
                        e.getChildByName("num").getComponent(L).string = "X" + this.box[t].num * this.adTimes;
                    }
                }, i.addReward = function(t) {
                    t.id > 0 ? _d.I.addBooster(t.id - 1, t.num * this.adTimes) : _d.I.addGold(t.num * this.adTimes), 
                    qr.I.dot(1 == this.adTimes ? "Mission_Chest" : "Mission_Chestx2", {
                        day: _d.I.MissionDay
                    });
                }, i.onBtnGetClick = function() {
                    var t = ut(n.default.mark(function t() {
                        var e;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = this.adTimes > 1, !t.t0) {
                                    t.next = 4;
                                    break;
                                }
                                return t.next = 4, Uo.playAd(2 == this.adTimes ? zo.missionRewardX2 : zo.missionRewardX3);

                              case 4:
                                if (-1 != this.index) {
                                    t.next = 9;
                                    break;
                                }
                                for (e = 0; e < this.box.length; ++e) this.addReward(this.box[e]);
                                _d.I.MissionBoxFlag = 1, t.next = 10;
                                break;

                              case 9:
                                Ba.I.getMissionReward(this.index, this.adTimes), qr.I.dot(1 == this.adTimes ? "Mission_Reward" : "Mission_Rewardx3", {
                                    id: Ba.I.tasks[this.index].id
                                });

                              case 10:
                                this.btnClose(), Nn.I.emit(ln);

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.ToggleADCallback = function() {
                    this.ToggleAD.isChecked ? -1 == this.index ? this.adTimes = Je.MISSION_BOX_TIMES : this.adTimes = Je.MISSION_AD_TIMES : this.adTimes = 1, 
                    this.initReward();
                }, e;
            }($h)).prototype, "iconItem", [ YC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), tA = _t(ZC.prototype, "layoutInfo", [ KC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), eA = _t(ZC.prototype, "itemRes", [ qC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), iA = _t(ZC.prototype, "ToggleAD", [ XC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), nA = _t(ZC.prototype, "lblAD", [ JC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), rA = _t(ZC.prototype, "lblGet", [ QC ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ZC)), t._RF.pop(), t._RF.push({}, "be983knHwJMZbvJkOa9BLfq", "ShrinkStars", void 0);
            var lA, uA = e.ccclass;
            e.property, uA("ShrinkStars")(function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e.prototype.start = function() {
                    for (var t = this.node.children, e = 1 / t.length, i = [], n = 0; n < t.length; n++) i.push(Ve.random(n * e, (n + 2) * e));
                    i.sort(function() {
                        return Math.random() - .5;
                    }), t.forEach(function(t, e) {
                        var n, r = t.getComponent(I), o = r.getState(null === (n = r.clips[0]) || void 0 === n ? void 0 : n.name);
                        o.speed = Ve.random(.8, 1.5), o && (o.isPlaying || o.play(), o.setTime(i[e]), o.sample());
                    });
                }, e;
            }(a)), t._RF.pop(), t._RF.push({}, "bf166HynS1OPLZEDU716+0R", "Mucus", void 0);
            var cA, hA = e.ccclass;
            e.property, hA(lA = (0, e.menu)("game/bubble/Mucus")(lA = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e;
            }(Gm)) || lA), t._RF.pop(), t._RF.push({}, "c7c1bU8xSpPtYM/NU8NlLHo", "Water", void 0);
            var dA = e.ccclass;
            e.property, dA(cA = (0, e.menu)("game/bubble/Water")(cA = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return pt(e, t), e;
            }(Gm)) || cA), t._RF.pop(), t._RF.push({}, "c85b0hIc1BEt6BUCo54nMBb", "ActivityPowerPopwin", void 0);
            var fA, pA, vA, bA, gA, mA, yA = e.ccclass;
            e.property, yA("ActivityPowerPopwin")(function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function() {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop);
                }, i.addPower = function() {
                    _d.I.addPower(2), this.btnClose();
                }, e;
            }($h)), t._RF.pop(), t._RF.push({}, "ca632RAxNBK/79gNtHPh+O9", "LoadingScene", void 0);
            var _A, IA, wA, SA, CA, AA, TA, kA, xA, EA, BA = e.ccclass, PA = e.property;
            fA = BA("LoadingScene"), pA = PA(k), vA = PA(k), fA((gA = _t((bA = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "logo", gA, mt(e)), 
                    yt(mt(e), "bottom", mA, mt(e)), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.start = function() {
                    this.logo.node.setScale(0, 0), this.bottom.node.setPosition(0, -1300), F(this.logo.node).to(.3, {
                        scale: l(1, 1, 1)
                    }, {
                        easing: "backOut"
                    }).start(), F(this.bottom.node).to(.3, {
                        position: l(1, -812, 1)
                    }, {
                        easing: "backOut"
                    }).start(), this.loadTool(), Object.entries || (Object.entries = function(t) {
                        for (var e = Object.keys(t), i = e.length, n = new Array(i); i--; ) n[i] = [ e[i], t[e[i]] ];
                        return n;
                    }), br.isWx && wx.setPreferredFramesPerSecond(60);
                }, i.loadTool = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                f.load("prefab/loading/loadingTool", function(t, e) {
                                    u("Canvas").addChild(e.data);
                                });

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }(a)).prototype, "logo", [ pA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), mA = _t(bA.prototype, "bottom", [ vA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), bA)), t._RF.pop(), t._RF.push({}, "cb945QrVu5K2ZqdkEXqfFfN", "SettingPopwin", void 0);
            var RA, LA, DA, OA, MA = e.ccclass, FA = e.property;
            _A = MA("SettingPopwin"), IA = FA(i), wA = FA(k), SA = FA(b), CA = FA(L), _A((TA = _t((AA = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "feedbackBtn", TA, mt(e)), 
                    yt(mt(e), "shockSP", kA, mt(e)), yt(mt(e), "shockSF", xA, mt(e)), yt(mt(e), "version", EA, mt(e)), 
                    dt(mt(e), "fbBtn", void 0), dt(mt(e), "toShow", void 0), dt(mt(e), "delayTime", .3), 
                    dt(mt(e), "_levelId", 0), dt(mt(e), "isActivity", !1), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e, i) {
                    this._levelId = e, this.isActivity = i, t.prototype.open.call(this), this.showFb(), 
                    this.version.string = "版本: " + Ct.version, this.initUI();
                }, i.onShock = function() {
                    var t = He.I.getGlobalData("shock");
                    t = !t, He.I.setGlobalData("shock", t), this.initUI();
                }, i.initUI = function() {
                    var t = He.I.getGlobalData("shock");
                    this.shockSP.spriteFrame = this.shockSF[t ? 0 : 1];
                }, i.onClose = function() {
                    t.prototype.onClose.call(this), this.hideFb();
                }, i.home = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!this.isActivity) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return", (ad.I.openPopwin(td.activityQuit, this._levelId, this.isActivity), 
                                void this.btnClose()));

                              case 2:
                                return t.next = 4, ad.I.openPopwin(td.home, "setting", _d.I.curLevel);

                              case 4:
                                Nn.I.emit(Pi), qr.I.dot("Popwin", {
                                    setting: "home"
                                }), this.btnClose();

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.restart = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!this.isActivity) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return", (ad.I.openPopwin(td.activityRestart, this._levelId, this.isActivity), 
                                void this.btnClose()));

                              case 2:
                                Nn.I.emit(Li), qr.I.dot("Popwin", {
                                    setting: "restart"
                                }), this.btnClose();

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.share = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Uo.playAd(zo.setting);

                              case 2:
                                qr.I.dot("Popwin", {
                                    setting: "share"
                                });

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.showFb = function() {
                    if (!this.toShow && this.feedbackBtn && (this.toShow = !0, !this.fbBtn)) {
                        if (!this.node || !this.node.isValid || !this.toShow) return;
                        window.wx && (this.fbBtn = Mo.createFeedbackButton(this.feedbackBtn)), this.toShow = !1;
                    }
                }, i.hideFb = function() {
                    this.toShow = !1, this.fbBtn && (this.fbBtn && this.fbBtn.destroy(), this.fbBtn = null);
                }, e;
            }($h)).prototype, "feedbackBtn", [ IA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), kA = _t(AA.prototype, "shockSP", [ wA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), xA = _t(AA.prototype, "shockSF", [ SA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), EA = _t(AA.prototype, "version", [ CA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), AA)), t._RF.pop(), t._RF.push({}, "cda59oSygVITobciSKcZ5Oe", "LoadingTool", void 0);
            var NA, zA, GA, UA, VA, WA, HA = e.ccclass, jA = e.property;
            RA = HA("LoadingTool"), LA = jA(Ws), RA((OA = _t((DA = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "progressBar", OA, mt(e)), 
                    dt(mt(e), "_progress", void 0), dt(mt(e), "lastTime", void 0), dt(mt(e), "totalTime", 0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.start = function() {
                    this.startLoad();
                }, i.startLoad = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.progress = 0, t.next = 3, fa.I.loadConfig();

                              case 3:
                                return t.next = 5, this.login();

                              case 5:
                                return qr.I.dot("Loading", {
                                    step: "start"
                                }), t.next = 8, this.loadGameData();

                              case 8:
                                return qr.I.dot("Loading", {
                                    step: "gameData"
                                }), t.next = 11, Mn.I.preloadBaseEffect();

                              case 11:
                                for (qr.I.dot("Loading", {
                                    step: "baseEffect"
                                }), e = [], i = 0; i < Je.BOOSTER_UNLOCK.length; i++) _d.I.curLevel >= Je.BOOSTER_UNLOCK[i] && e.push(Mn.I.preloadBoosterEffect(i));
                                if (!e.length) {
                                    t.next = 20;
                                    break;
                                }
                                return this.progress += .1, t.next = 17, Promise.all(e);

                              case 17:
                                this.progress += .1, t.next = 21;
                                break;

                              case 20:
                                this.progress += .2;

                              case 21:
                                return qr.I.dot("Loading", {
                                    step: "boosterEffecteData"
                                }), t.next = 24, this.preloadScene(.5);

                              case 24:
                                if (qr.I.dot("Loading", {
                                    step: "scene"
                                }), this.loadComplete(), t.t0 = "undefined" == typeof wx, !t.t0) {
                                    t.next = 33;
                                    break;
                                }
                                return t.next = 30, $m.checkMapTile();

                              case 30:
                                if (t.t1 = t.sent, !t.t1) {
                                    t.next = 33;
                                    break;
                                }
                                $m.load();

                              case 33:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.loadGameData = function() {
                    var t = ut(n.default.mark(function t() {
                        var e, i, r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.checkActivityOpen(), t.next = 3, mn.loadRes(Tn.DATA_BUBBLE);

                              case 3:
                                return e = t.sent, this.progress += .1, t.next = 7, mn.loadRes(Tn.DATA_MAP);

                              case 7:
                                if (i = t.sent, this.progress += .2, da.I.initMaps(i.json), da.I.initBubbles(e.json), 
                                console.log("当前活动：", _d.I.CurActivity), t.t0 = _d.I.CurActivity, !t.t0) {
                                    t.next = 16;
                                    break;
                                }
                                return t.next = 16, fa.I.loadActivityConfig(_d.I.CurActivity);

                              case 16:
                                return t.next = 18, mn.loadRes("prefab/bubble/normal");

                              case 18:
                                r = t.sent, Pn.I.prePool(r, 80), Ba.I.loadMission();

                              case 20:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.preloadScene = function() {
                    var t = ut(n.default.mark(function t(e) {
                        var i;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return _d.I.curLevel, i = "game", t.next = 3, this.doPreloadScene(i, e);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), i.login = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = window.wx, !t.t0) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 4, ur.init();

                              case 4:
                                return t.next = 6, br.login(je.I.Authorize);

                              case 6:
                                return t.next = 8, _d.I.loadServerData();

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.doPreloadScene = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = this, t.abrupt("return", new Promise(function(t) {
                                    var n = 0;
                                    _.preloadScene(e, function(t, e, o) {
                                        var a = t / e, s = a - n;
                                        s > 0 && (n = a, r.progress += s * i);
                                    }, function(e) {
                                        t(null);
                                    });
                                }));

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), i.loadComplete = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                _.loadScene("game"), ad.I.preloadAll();

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.onShow = function(t) {
                    _.resume(), No.onShowAd ? No.onShowAd = !1 : window.wx && br.createInterstitialAd(), 
                    Nn.I.emit("APP_ON_SHOW"), _d.I.onlineRecord();
                }, i.onHide = function() {
                    _d.I.saveServerData(), _.pause(), Nn.I.emit(fn), _d.I.offlineRecord();
                }, i.onDestroy = function() {
                    qr.I.dot("LoadingFinish"), qr.I.loadingFinish(), Mo.onShow(this.onShow.bind(this)), 
                    Mo.onHide(this.onHide.bind(this));
                }, i.checkActivityOpen = function() {
                    for (var t = 1; t <= 10; ++t) {
                        var e = br.getParamsInt("event_open_" + t) || 0;
                        br.isWx || (e = Je.ACTIVITY_TEST_OPEN);
                        var i = br.getParamsInt("event_close_" + t) || 0;
                        br.isWx || (i = Je.ACTIVITY_TEST_CLOSE);
                        var n = br.getParamsString("event_level_" + t) || "";
                        if (br.isWx || (n = Je.ACTIVITY_TEST_EVENT), e > 0 && i > 0 && n && _d.I.checkActivityOpen(e, i, n)) {
                            console.log("活动开启：", e, i, n);
                            break;
                        }
                    }
                }, ht(e, [ {
                    key: "progress",
                    get: function() {
                        return this._progress;
                    },
                    set: function(t) {
                        this._progress = t, this.progressBar.setProgress(t, t > 0);
                    }
                } ]), e;
            }(a)).prototype, "progressBar", [ LA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), DA)), t._RF.pop(), t._RF.push({}, "cecf9wwKitCmak9D4281ClD", "ActivityRestartPopwin", void 0);
            var YA, KA, qA, XA, JA, QA, ZA, $A, tT, eT, iT, nT, rT = e.ccclass, oT = e.property;
            NA = rT("ActivityRestartPopwin"), zA = oT(L), GA = oT(i), NA((VA = _t((UA = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "lblLive", VA, mt(e)), 
                    yt(mt(e), "imgLive", WA, mt(e)), dt(mt(e), "_levelId", void 0), dt(mt(e), "canClose", !0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this._levelId = e;
                }, i.retry = function() {
                    var t = this;
                    this.canClose && (_d.I.ActivityPower <= 0 ? this.addPower() : (_d.I.ActivityPower--, 
                    this.canClose = !1, z.stopAllByTarget(this.imgLive), this.doLiveAction(this.imgLive, function() {
                        t.canClose = !0, t.btnClose(), Nn.I.emit(Ri, t._levelId, !0);
                    })));
                }, i.btnClose = function() {
                    this.canClose && t.prototype.btnClose.call(this);
                }, i.addPower = function() {
                    ad.I.openPopwin(td.activityBuy);
                }, i.doLiveAction = function(t, e) {
                    var i = m(t);
                    i.parent = t.parent, i.active = !0;
                    var n = t.parent.getChildByName("board_live").position.clone();
                    F(i).delay(.1).to(.5, {
                        position: n
                    }).delay(.1).call(e).removeSelf().start();
                }, e;
            }($h)).prototype, "lblLive", [ zA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), WA = _t(UA.prototype, "imgLive", [ GA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), UA)), t._RF.pop(), t._RF.push({}, "d0695GIz/VJPZXtN0pVmXmz", "ActivityStartPopwin", void 0);
            var aT, sT, lT, uT, cT, hT, dT, fT, pT, vT, bT, gT, mT, yT, _T, IT, wT = e.ccclass, ST = e.property;
            YA = wT("ActivityStartPopwin"), KA = ST(L), qA = ST(L), XA = ST(L), JA = ST(i), 
            QA = ST(i), YA(($A = _t((ZA = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "title", $A, mt(e)), 
                    yt(mt(e), "boxContent", tT, mt(e)), yt(mt(e), "desc", eT, mt(e)), yt(mt(e), "imgLive", iT, mt(e)), 
                    yt(mt(e), "powerBar", nT, mt(e)), dt(mt(e), "_levelId", void 0), dt(mt(e), "canClose", !0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this._levelId = e, this.title.string = "活动关卡 " + (e - Je.ACTIVITY_ID_START);
                    var i = da.I.getActMapData(e);
                    this.desc.string = "在" + i.num + "次射击内清除所有的泡泡！";
                    var n = this.getNextBoxCounts();
                    this.boxContent.string = 1 == n ? "本关开启宝箱" : "还剩" + n + "关开启宝箱";
                }, i.getNextBoxCounts = function() {
                    for (var t = 0; t < 5; ++t) if ((this._levelId + t) % 5 == 0) return t + 1;
                }, i.startGame = function() {
                    var t = this;
                    this.canClose && "" != _d.I.CurActivity && (_d.I.ActivityPower <= 0 ? this.addPower() : (_d.I.ActivityPower--, 
                    this.canClose = !1, z.stopAllByTarget(this.imgLive), this.doLiveAction(this.imgLive, function() {
                        t.canClose = !0, ad.I.closeAll(), Nn.I.emit(Ri, t._levelId, !0), qr.I.dot("EventMain_Play", {
                            id: t._levelId
                        });
                    })));
                }, i.addPower = function() {
                    ad.I.openPopwin(td.activityBuy);
                }, i.btnClose = function() {
                    this.canClose && t.prototype.btnClose.call(this);
                }, i.doLiveAction = function(t, e) {
                    var i = m(t);
                    i.parent = t.parent, i.active = !0;
                    var n = t.parent.getChildByName("board_live").position.clone();
                    F(i).delay(.1).to(.5, {
                        position: n
                    }).delay(.1).call(e).removeSelf().start();
                }, e;
            }($h)).prototype, "title", [ KA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), tT = _t(ZA.prototype, "boxContent", [ qA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), eT = _t(ZA.prototype, "desc", [ XA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), iT = _t(ZA.prototype, "imgLive", [ JA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), nT = _t(ZA.prototype, "powerBar", [ QA ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ZA)), t._RF.pop(), t._RF.push({}, "d9db9sTRwtFbZX/dTVOwjyg", "ShareData", void 0), 
            t._RF.pop(), t._RF.push({}, "dd634J1BeZLKaHJvG47DiiM", "VersionUpgradePopwin", void 0);
            var CT, AT, TT, kT = e.ccclass, xT = e.property;
            aT = kT("VersionUpgradePopwin "), sT = xT(k), lT = xT(L), uT = xT(st), cT = xT(i), 
            hT = xT(i), dT = xT(b), fT = xT(rt), aT((vT = _t((pT = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "icon", vT, mt(e)), 
                    yt(mt(e), "top", bT, mt(e)), yt(mt(e), "content", gT, mt(e)), yt(mt(e), "iconItem", mT, mt(e)), 
                    yt(mt(e), "layoutItem", yT, mt(e)), yt(mt(e), "itemRes", _T, mt(e)), yt(mt(e), "ToggleSub", IT, mt(e)), 
                    dt(mt(e), "data", null), dt(mt(e), "reward", []), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this.data = e, this.loadUrlImg(e.img), 
                    this.top.string = e.title, this.content.string = e.message, e.reward && (this.reward = this.formatReward(e.reward)), 
                    this.initRewardLayout(), qr.I.dot("Notice", {
                        show: !0
                    });
                }, i.loadUrlImg = function(t) {
                    var e = this;
                    E.loadRemote(t, function(t, i) {
                        if (e.isValid) if (!t && i) {
                            var n = new b(), r = new v();
                            r.image = i, n.texture = r, e.icon.spriteFrame = n;
                        } else e.icon.node.active = !1;
                    });
                }, i.initRewardLayout = function() {
                    this.layoutItem.removeAllChildren();
                    for (var t = 0; t < this.reward.length; ++t) {
                        var e = m(this.iconItem);
                        e.parent = this.layoutItem, e.active = !0, e.getComponent(k).spriteFrame = this.itemRes[this.reward[t].id], 
                        e.getChildByName("counts").getComponent(L).string = "X" + this.reward[t].num;
                    }
                }, i.formatReward = function(t) {
                    for (var e = t.split("|"), i = [], n = 0; n < e.length; ++n) {
                        var r = e[n].split(","), o = new va();
                        o.id = parseInt(r[0]), o.num = parseInt(r[1]), i.push(o);
                    }
                    return i;
                }, i.getReward = function() {
                    for (var t = 0; t < this.reward.length; ++t) this.reward[t].id > 0 ? _d.I.addBooster(this.reward[t].id - 1, this.reward[t].num) : _d.I.addGold(this.reward[t].num);
                    _d.I.CurVersion = this.data.ver, qr.I.dot("Notice", {
                        reward: this.data.reward
                    }), qr.I.dot("Notice", {
                        click: !0
                    }), this.btnClose();
                }, e;
            }($h)).prototype, "icon", [ sT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), bT = _t(pT.prototype, "top", [ lT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), gT = _t(pT.prototype, "content", [ uT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), mT = _t(pT.prototype, "iconItem", [ cT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), yT = _t(pT.prototype, "layoutItem", [ hT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), _T = _t(pT.prototype, "itemRes", [ dT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), IT = _t(pT.prototype, "ToggleSub", [ fT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), pT)), t._RF.pop(), t._RF.push({}, "e4cc0xCBE1PNogou4A2JpNK", "RedPoint", void 0);
            var ET, BT, PT, RT, LT, DT, OT, MT, FT, NT, zT, GT, UT, VT, WT, HT, jT = e.ccclass, YT = e.property;
            jT("RedPoint")((AT = _t((CT = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "event", AT, mt(e)), 
                    yt(mt(e), "key", TT, mt(e)), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    Nn.I.on(this.event, this.updatePoint, this), this.updatePoint();
                }, i.updatePoint = function() {
                    this.node.active = !_d.I[this.key];
                }, e;
            }(a)).prototype, "event", [ YT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), TT = _t(CT.prototype, "key", [ YT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), CT)), t._RF.pop(), t._RF.push({}, "eecfaxum5hAh6QYc1yb1tqG", "LevelStartPopwin", void 0);
            var KT, qT, XT, JT, QT, ZT, $T, tk = e.ccclass, ek = e.property;
            ET = tk("LevelStartPopwin"), BT = ek(L), PT = ek(i), RT = ek(k), LT = ek(b), DT = ek(L), 
            OT = ek(i), MT = ek(i), ET((NT = _t((FT = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "title", NT, mt(e)), 
                    yt(mt(e), "boxContent", zT, mt(e)), yt(mt(e), "stars", GT, mt(e)), yt(mt(e), "starSprites", UT, mt(e)), 
                    yt(mt(e), "desc", VT, mt(e)), yt(mt(e), "btn_normal_next", WT, mt(e)), yt(mt(e), "btn_hard_next", HT, mt(e)), 
                    dt(mt(e), "_levelId", void 0), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this._levelId = e, this.title.string = "关卡 " + e;
                    var i = da.I.getMapData(e);
                    this.desc.string = "在" + i.num + "次射击内清除所有的泡泡！";
                    for (var n = _d.I.getLevelStar(e), r = 0; r < this.stars.length; r++) this.stars[r].spriteFrame = this.starSprites[r < n ? 0 : 1];
                    qr.I.dot("Popwin", {
                        levelStart: "show"
                    });
                    var o = da.I.getMapData(this._levelId);
                    this.btn_hard_next.active = !!o.hard, this.btn_normal_next.active = !this.btn_hard_next.active;
                }, i.startGame = function() {
                    ad.I.closeAll(), Nn.I.emit(Ri, this._levelId), qr.I.dot("Popwin", {
                        levelStart: "start"
                    });
                }, i.btnClose = function() {
                    t.prototype.btnClose.call(this), qr.I.dot("Popwin", {
                        levelStart: "close"
                    });
                }, e;
            }($h)).prototype, "title", [ BT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), zT = _t(FT.prototype, "boxContent", [ PT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), GT = _t(FT.prototype, "stars", [ RT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), UT = _t(FT.prototype, "starSprites", [ LT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), VT = _t(FT.prototype, "desc", [ DT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), WT = _t(FT.prototype, "btn_normal_next", [ OT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), HT = _t(FT.prototype, "btn_hard_next", [ MT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), FT)), t._RF.pop(), t._RF.push({}, "f0fecQ0IqRG9Ivb4XORStnr", "Sniper", void 0);
            var ik, nk, rk, ok, ak, sk, lk = e.ccclass, uk = e.property;
            KT = (0, e.menu)("game/bubble/Sniper"), qT = uk(C.Skeleton), XT = uk(C.Skeleton), 
            lk(JT = KT((ZT = _t((QT = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "eye", ZT, mt(e)), 
                    yt(mt(e), "halo", $T, mt(e)), dt(mt(e), "isReady", !1), dt(mt(e), "target", void 0), 
                    dt(mt(e), "colorArr", [ "hong", "huang", "lan", "lv", "zi", "qing", "cheng" ]), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.init = function(e) {
                    t.prototype.init.call(this, e), Nn.I.on(bi, this.readySnip, this), Nn.I.on(gi, this.stopSnip, this), 
                    Nn.I.on(Ii, this.stopSnip, this), this.isReady = !1, this.halo.node.active = !0, 
                    Mn.I.preloadEffects(Tn.EFFECT_SNIPER_HIT, Tn.EFFECT_SNIPER_ATTACK, Tn.EFFECT_SNIPER_ATTACK1);
                }, i.addColor = function(e) {
                    t.prototype.addColor.call(this, e), e.removeFromParent();
                    var i = Je.COLORS[Math.log2(this.model.addColor.color)];
                    this.halo.color = gt(W, i), this.eye.setSkin(this.colorArr[Math.log2(this.model.addColor.color)]);
                }, i.readySnip = function(t) {
                    !t.isBooster && t.model && t.model.color == this.model.addColor.color && (this.isReady = !0, 
                    this.target = t);
                }, i.snip = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                Mn.I.playEffectInNode(this.node, Tn.EFFECT_SNIPER_ATTACK1, !0, !0, 0, null, null, Ve.getAngle(this.node.worldPosition.x, this.node.worldPosition.y, e.node.worldPosition.x, e.node.worldPosition.y)), 
                                Mn.I.playEffectInNode(this.node, Tn.EFFECT_SNIPER_ATTACK), e.remove(i, Tn.EFFECT_SNIPER_HIT);

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), i.stopSnip = function() {
                    this.isReady = !1, this.target = null;
                }, i.toRemove = function() {
                    t.prototype.toRemove.call(this), this.halo.node.active = !1;
                }, i.recover = function() {
                    t.prototype.recover.call(this), Nn.I.off(bi, this.readySnip, this), Nn.I.off(gi, this.stopSnip, this);
                }, i.update = function(e) {
                    if (t.prototype.update.call(this, e), this.isReady && this.target) {
                        var i = this.target.node.worldPosition, n = this.node.worldPosition;
                        Ve.cacuDis(n.x, n.y, i.x, i.y) / Je.BUBBLE_R <= 5 && (Nn.I.emit(Ii, this.target, this), 
                        this.stopSnip());
                    }
                }, e;
            }(Ss)).prototype, "eye", [ qT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), $T = _t(QT.prototype, "halo", [ XT ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), JT = QT)) || JT), t._RF.pop(), t._RF.push({}, "f57ecwUOmRLJaemwdVogdlr", "OnlineGiftPopwin", void 0);
            var ck, hk, dk, fk, pk, vk, bk, gk, mk, yk, _k = e.ccclass, Ik = e.property;
            ik = _k("OnlineGiftPopwin"), nk = Ik(rt), rk = Ik(L), ik((ak = _t((ok = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "layer", qh.reward), 
                    yt(mt(e), "toggleBtn", ak, mt(e)), yt(mt(e), "btnLbl", sk, mt(e)), e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function() {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this.toggleBtn.isChecked = !0, 
                    qr.I.dot("Popwin", {
                        OnlineGift: "show"
                    });
                }, i.getReward = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!this.toggleBtn.isChecked) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 3, Uo.playAd(zo.onlineGiftDouble);

                              case 3:
                                this.receive(2), qr.I.dot("Popwin", {
                                    OnlineGift: "doubleReceive"
                                }), t.next = 8;
                                break;

                              case 7:
                                this.receive(1), qr.I.dot("Popwin", {
                                    OnlineGift: "receive"
                                });

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.receive = function(t) {
                    this.btnClose(), ad.I.openPopwin(td.onlineGiftReward, t);
                }, i.toggle = function() {
                    this.btnLbl.string = this.toggleBtn.isChecked ? "双倍领取" : "领取";
                }, e;
            }($h)).prototype, "toggleBtn", [ nk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), sk = _t(ok.prototype, "btnLbl", [ rk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), ok)), t._RF.pop(), t._RF.push({}, "f828d7cJRBFqZOK1ote8qce", "ConfirmPopwin", void 0);
            var wk, Sk, Ck, Ak, Tk, kk, xk, Ek, Bk, Pk, Rk, Lk, Dk, Ok, Mk, Fk, Nk = e.ccclass, zk = e.property;
            ck = Nk("ConfirmPopwin"), hk = zk(L), dk = zk(L), fk = zk(L), pk = zk(L), ck((bk = _t((vk = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return dt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "layer", qh.modal), 
                    yt(mt(e), "title", bk, mt(e)), yt(mt(e), "desc", gk, mt(e)), yt(mt(e), "confirmLbl", mk, mt(e)), 
                    yt(mt(e), "cancelLbl", yk, mt(e)), dt(mt(e), "_confirmCb", void 0), dt(mt(e), "_cancelCb", void 0), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.open = function(e, i, n, r, o, a) {
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this.title.string = e, this.desc.string = i, 
                    this._confirmCb = n, this._cancelCb = r, this.confirmLbl.string = o || "确定", a ? (this.cancelLbl.string = a, 
                    this.confirmLbl.node.parent.setPosition(136, this.confirmLbl.node.parent.position.y), 
                    this.cancelLbl.node.parent.active = !0, this.cancelLbl.node.parent.setPosition(-136, this.cancelLbl.node.parent.position.y)) : (this.confirmLbl.node.parent.setPosition(0, this.confirmLbl.node.parent.position.y), 
                    this.cancelLbl.node.parent.active = !1);
                }, i.confirm = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = this._confirmCb, !t.t0) {
                                    t.next = 4;
                                    break;
                                }
                                return t.next = 4, this._confirmCb();

                              case 4:
                                this.btnClose();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), i.cancel = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.t0 = this._cancelCb, !t.t0) {
                                    t.next = 4;
                                    break;
                                }
                                return t.next = 4, this._cancelCb();

                              case 4:
                                this.btnClose();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), e;
            }($h)).prototype, "title", [ hk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), gk = _t(vk.prototype, "desc", [ dk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), mk = _t(vk.prototype, "confirmLbl", [ fk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), yk = _t(vk.prototype, "cancelLbl", [ pk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), vk)), t._RF.pop(), t._RF.push({}, "f8981M3xdVIxK5UEL0Q+IK0", "SignPopwin", void 0);
            var Gk, Uk, Vk, Wk, Hk, jk, Yk, Kk = e.ccclass, qk = e.property;
            wk = Kk("SignPopwin"), Sk = qk(i), Ck = qk(R), Ak = qk(R), Tk = qk(R), kk = qk(rt), 
            xk = qk(R), Ek = qk(L), wk((Pk = _t((Bk = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "signItems", Pk, mt(e)), 
                    yt(mt(e), "receiveBtn", Rk, mt(e)), yt(mt(e), "doubleBtn", Lk, mt(e)), yt(mt(e), "doneBtn", Dk, mt(e)), 
                    yt(mt(e), "ToggleSub", Ok, mt(e)), yt(mt(e), "closeBtn", Mk, mt(e)), yt(mt(e), "doublePrice", Fk, mt(e)), 
                    dt(mt(e), "_day", void 0), dt(mt(e), "toggleCB", null), dt(mt(e), "closing", !1), 
                    e;
                }
                pt(e, t);
                var r = e.prototype;
                return r.open = function() {
                    var e = this;
                    t.prototype.open.call(this), wn.I.playSound(yn.Pop), this.updateSignItemData(), 
                    this.updateState(), qr.I.dot("Popwin", {
                        Sign: "show"
                    }), _d.I.toPopSign && _d.I.popSign();
                    var i = u("Canvas/GameScene").getComponent(fh).levelId;
                    6 == i && qr.I.dot("level_" + i, {
                        from: "sign_show"
                    }), this.toggleCB = function(t) {
                        var i = !1, n = t.changedTouches[t.changedTouches.length - 1], r = e.getCloseBtnSize(e.closeBtn.node);
                        if (n.clientX >= r.left - r.btnSize.width / 2 && n.clientX <= r.left + r.btnSize.width / 2 && n.clientY >= r.top - r.btnSize.height / 2 && n.clientY <= r.top + r.btnSize.height / 2 && (i = !0), 
                        e.doneBtn.node.active) {
                            var o = e.getCloseBtnSize(e.doneBtn.node);
                            n.clientX >= o.left - o.btnSize.width / 2 && n.clientX <= o.left + o.btnSize.width / 2 && n.clientY >= o.top - o.btnSize.height / 2 && n.clientY <= o.top + o.btnSize.height / 2 && (i = !0);
                        }
                        if (i && ("undefined" != typeof wx && wx.offTouchEnd(e.toggleCB), e.ToggleSub.isChecked && !_d.I.SubscribeSign)) {
                            var a = [];
                            _d.I.SubscribeSign || a.push(Ct.subscribeIds[0]), _d.I.SubscribeWheel || a.push(Ct.subscribeIds[1]), 
                            br.subScribe(a, function(t) {
                                t.indexOf(Ct.subscribeIds[0]) > -1 && (_d.I.SubscribeSign = !0, _d.I.subscribeSign()), 
                                t.indexOf(Ct.subscribeIds[1]) > -1 && (_d.I.SubscribeWheel = !0, _d.I.subscribeWheel());
                            }, function() {
                                console.log("发送订阅失败");
                            });
                        }
                    }, "undefined" != typeof wx && wx.onTouchEnd(this.toggleCB), this.ToggleSub.node.on("toggle", this.ToggleSubCallback, this), 
                    this.ToggleSub.isChecked = !0, this.updateBtn();
                }, r.wait = function(t) {
                    var e = this;
                    return void 0 === t && (t = 1), new Promise(function(i, n) {
                        e.scheduleOnce(i, t);
                    });
                }, r.doubleReceive = function() {
                    var t = ut(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Uo.playAd(zo.signDouble);

                              case 2:
                                this.getReward(_d.I.NewSign ? 2 : 1), qr.I.dot("Popwin", {
                                    Sign: "doubleReceive"
                                });

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(), r.receive = function() {
                    this.getReward(1), qr.I.dot("Popwin", {
                        Sign: "receive"
                    });
                }, r.getReward = function(t) {
                    var e = t, i = _d.I.curSignDay % this.signItems.length;
                    this._day = i + 1;
                    var n = $o.SIGN_REWARDS[i];
                    if (t *= n.cnt, 0 == n.type) if (null != n.boosterType) _d.I.addBooster(n.boosterType, t); else for (var r = 0; r < 4; r++) _d.I.addBooster(r, t); else 1 == e ? qr.I.dot("coinget_sign" + this._day, {
                        key: t
                    }) : qr.I.dot("coinget_sign" + this._day + "x2", {
                        key: t
                    }), _d.I.addGold(t);
                    1 == e ? qr.I.dot("SignReward", {
                        key: "D" + this._day + "_receive"
                    }) : qr.I.dot("SignReward", {
                        key: "D" + this._day + "_doublereceive"
                    }), _d.I.sign(), this.updateState();
                    var o = u("Canvas/GameScene").getComponent(fh).levelId;
                    6 == o && qr.I.dot("level_" + o, {
                        from: "sign_receive_" + t
                    });
                }, r.updateSignItemData = function() {
                    for (var t = $o.SIGN_REWARDS, e = 0; e < this.signItems.length; e++) {
                        var i = this.signItems[e].getComponent(Hf);
                        i.setDay(e + 1);
                        var n = t[e];
                        0 == n.type ? i.setData(n.boosterType, n.cnt) : i.setData(n.cnt);
                    }
                }, r.updateState = function() {
                    var t = _d.I.curSignDay % this.signItems.length, e = _d.I.hasSign;
                    this.receiveBtn.node.active = !e, this.doubleBtn.node.active = !e, this.doneBtn.node.active = e, 
                    e && 0 == t && (t = this.signItems.length);
                    for (var n = 0; n < this.signItems.length; n++) {
                        var r = this.signItems[n].getComponent(Hf);
                        r.bg.node.off(i.EventType.TOUCH_END, this.doubleReceive, this), r.setDay(n + 1), 
                        e ? n >= t ? r.setState(0) : r.setState(2) : n > t ? r.setState(0) : n == t ? (r.setState(1), 
                        r.bg.node.on(i.EventType.TOUCH_END, this.doubleReceive, this)) : r.setState(2);
                    }
                }, r.btnClose = function() {
                    this.closing = !0, t.prototype.btnClose.call(this), qr.I.dot("Popwin", {
                        Sign: "close"
                    });
                    var e = u("Canvas/GameScene").getComponent(fh).levelId;
                    6 == e && qr.I.dot("level_" + e, {
                        from: "sign_close"
                    });
                }, r.ToggleSubCallback = function(t) {
                    t.isChecked && ("undefined" != typeof wx ? wx.onTouchEnd(this.toggleCB) : "undefined" != typeof wx && wx.offTouchEnd(this.toggleCB));
                }, r.getCloseBtnSize = function(t) {
                    var e = new ot(t.getComponent(c).width, t.getComponent(c).height), i = t.getComponent(c).getBoundingBoxToWorld(), n = A.getDevicePixelRatio(), r = A.getScaleX() / n;
                    return {
                        btnSize: e,
                        left: i.x * r,
                        top: wx.getSystemInfoSync().screenHeight - (i.y + i.height) * r
                    };
                }, r.updateBtn = function() {
                    this.receiveBtn.node.active = !_d.I.hasSign && !_d.I.NewSign;
                    var t = this.doubleBtn.node.position.clone();
                    t.x = _d.I.NewSign ? 0 : 135, this.doubleBtn.node.setPosition(t), this.doublePrice.string = _d.I.NewSign ? "领取奖励" : "双倍领取";
                }, e;
            }($h)).prototype, "signItems", [ Sk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Rk = _t(Bk.prototype, "receiveBtn", [ Ck ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Lk = _t(Bk.prototype, "doubleBtn", [ Ak ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Dk = _t(Bk.prototype, "doneBtn", [ Tk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ok = _t(Bk.prototype, "ToggleSub", [ kk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Mk = _t(Bk.prototype, "closeBtn", [ xk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Fk = _t(Bk.prototype, "doublePrice", [ Ek ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Bk)), t._RF.pop(), t._RF.push({}, "ff24fFrkMBIQZaDJeUz7Xbw", "BHole", void 0);
            var Xk = e.ccclass, Jk = e.property;
            Gk = (0, e.menu)("game/bubble/BHole"), Uk = Jk(H), Vk = Jk(i), Xk(Wk = Gk((jk = _t((Hk = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return yt(mt(e = t.call.apply(t, [ this ].concat(n)) || this), "holeAnim", jk, mt(e)), 
                    dt(mt(e), "isReady", !1), dt(mt(e), "target", void 0), yt(mt(e), "holeCon", Yk, mt(e)), 
                    e;
                }
                pt(e, t);
                var i = e.prototype;
                return i.init = function(e) {
                    t.prototype.init.call(this, e), Nn.I.on(bi, this.readySnip, this), Nn.I.on(gi, this.stopSnip, this), 
                    Nn.I.on(Ii, this.stopSnip, this), this.isReady = !1;
                }, i.readySnip = function(t) {
                    t.isBooster || (this.isReady = !0, this.target = t);
                }, i.snip = function() {
                    var t = ut(n.default.mark(function t(e, i) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return wn.I.playSound(yn.Black_Hole), Ve.AnimationRecover(this.holeAnim, "anim_in_hole"), 
                                this.holeCon.worldPosition = e.node.worldPosition, e.node.setParent(this.holeCon, !0), 
                                this.holeAnim.play("anim_in_hole"), this.node.setSiblingIndex(this.node.parent.children.length), 
                                F(this.holeCon).to(80 / 60, {
                                    position: l()
                                }, {
                                    easing: "quartOut"
                                }).start(), t.next = 9, Ve.wait(82 / 60);

                              case 9:
                                i && i();

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments);
                    };
                }(), i.stopSnip = function() {
                    this.isReady = !1, this.target = null;
                }, i.recover = function() {
                    t.prototype.recover.call(this), Nn.I.off(bi, this.readySnip, this), Nn.I.off(gi, this.stopSnip, this);
                }, i.update = function(e) {
                    if (t.prototype.update.call(this, e), this.isReady && this.target) {
                        var i = this.target.node.worldPosition, n = this.node.worldPosition;
                        Ve.cacuDis(n.x, n.y, i.x, i.y) / Je.BUBBLE_R <= 2.1 && Nn.I.emit(Ii, this.target, this);
                    }
                }, e;
            }(Ss)).prototype, "holeAnim", [ Uk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Yk = _t(Hk.prototype, "holeCon", [ Vk ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Wk = Hk)) || Wk), t._RF.pop();
        }
    };
}), e = "virtual:///prerequisite-imports/start-scene", i = "chunks:///start-scene.js", 
System.register(e, [ i ], function(t, e) {
    return {
        setters: [ function(e) {
            var i = {};
            for (var n in e) "default" !== n && "__esModule" !== n && (i[n] = e[n]);
            t(i);
        } ],
        execute: function() {}
    };
});