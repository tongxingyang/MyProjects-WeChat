!function() {
    "use strict";
    class t {
        constructor() {}
        static init() {
            Laya.ClassUtils.regClass;
        }
    }
    t.width = 1920, t.height = 1080, t.scaleMode = "fixedheight", t.screenMode = "horizontal", 
    t.alignV = "top", t.alignH = "left", t.startScene = "CustomInterstitialAdView.scene", 
    t.sceneRoot = "", t.debug = !1, t.stat = !1, t.physicsDebug = !1, t.exportSceneToJson = !0, 
    t.init();
    class u {
        constructor() {}
        static loadQueue(t, e, i) {
            let a = 0, s = () => {
                this.load(t[a], e[a], () => {
                    a++, (a < t.length ? s : i)();
                });
            };
            s();
        }
        static load(t, e, i) {
            if (this.mapPool[t]) return i();
            Laya.loader.load(e, Laya.Handler.create(this, () => {
                this.createAMapInfo(t, e), i();
            }));
        }
        static createAMapInfo(t, e) {
            let i = Laya.loader.getRes(e);
            var a = i.getPixels(0, 0, i.width, i.height);
            let s = {
                width: 0,
                height: 0,
                walkInfoArr: []
            };
            s.width = i.width, s.height = i.height;
            let r = 0;
            for (let t = 0; t < s.width; t++) for (let t = 0; t < s.height; t++) {
                let t = a[r + 3];
                0 < t && (t = 1), s.walkInfoArr.push(t), r += 4;
            }
            this.mapPool[t] = s;
        }
        static walk(t, e, i) {
            t = this.mapPool[t];
            return e = Math.floor(Math.min(t.width, Math.max(1, e))), i = Math.floor(Math.min(t.height, Math.max(1, i))), 
            t.walkInfoArr[(i - 1) * t.width + e - 1];
        }
        static walkDp(t, e, i) {
            var a = this.mapPool[t];
            return e = Math.floor(e * a.width), i = Math.floor(i * a.height), this.walk(t, e, i);
        }
        static clearAMap(t) {
            let e = this.mapPool[t];
            e && (e.walkInfoArr.length = 0, e.walkInfoArr = null, delete this.mapPool[t]);
        }
        static loadZipQueue(e, i, a, s = []) {
            let r = 0, o = () => {
                let t = "";
                r < s.length && (t = s[r]), this.loadZip(e[r], i[r], () => {
                    r++, (r < e.length ? o : a)();
                }, t);
            };
            o();
        }
        static loadZip(i, a, s, r = "") {
            if (console.log(i, a), this.mapPool[i]) return s();
            Laya.loader.create([ {
                url: a,
                type: Laya.Loader.BUFFER
            } ], Laya.Handler.create(this, () => {
                let t = new JSZip(Laya.loader.getRes(a));
                "" == r && (r = i);
                var e = t.file(r + ".json").asText();
                this.mapPool[i] = JSON.parse(e), s();
            }));
        }
        static exportJson(i) {
            var t = JSON.stringify(this.mapPool[i]);
            Laya.Browser.window.download = function(t) {
                var t = t, e = new Blob([ t ], {
                    type: "text/plain"
                }), t = document.createElement("a");
                t.href = URL.createObjectURL(e), t.setAttribute("download", i + ".json"), t.innerHTML = "下载", 
                document.body.appendChild(t), document.getElementById("layaContainer").style.display = "none";
            }, Laya.Browser.window.download(t);
        }
    }
    u.mapPool = {};
    class g {
        constructor(t, e) {
            this.x = t, this.z = e;
        }
    }
    class y {
        constructor() {}
        static init(t) {
            let e = JSON.parse(t);
            this.row = e.row, this.col = e.col, this.width = e.width, this.height = e.height, 
            this.size = e.size;
            var i = e.data.split(",");
            for (let t = 0; t < i.length; t++) this.heightArr.push(parseFloat(i[t]));
        }
        static getY(t, e, i) {
            var a = this.checkIndex(Math.floor((t + .5 * this.width) / this.size) + Math.floor((i + .5 * this.height) / this.size) * this.col), s = this.checkIndex(a + 1), r = this.checkIndex(a + this.col), o = this.checkIndex(r + 1), n = (t = (t - Math.floor(t / this.size) * this.size) / this.size) * (i = (i - Math.floor(i / this.size) * this.size) / this.size);
            return this.heightArr[a] * (1 - i - t + n) + this.heightArr[s] * (t - n) + this.heightArr[o] * n + this.heightArr[r] * (i - n);
        }
        static checkIndex(t) {
            return Math.min(this.heightArr.length - 1, Math.max(0, t));
        }
        static getTerrainY(t) {
            return this.getY(t.transform.localPositionX / this.mapScale, t.transform.localPositionY, t.transform.localPositionZ / this.mapScale) * this.mapScale;
        }
        static getTerrainYValue(t, e, i) {
            return this.getY(t / this.mapScale, e / this.mapScale, i / this.mapScale) * this.mapScale;
        }
        static limitX(t, e = 1) {
            return Math.min(.5 * this.width * this.mapScale * e, Math.max(.5 * -this.width * this.mapScale * e, t));
        }
        static limitZ(t, e = 1) {
            return Math.min(.5 * this.height * this.mapScale * e, Math.max(.5 * -this.height * this.mapScale * e, t));
        }
        static loadZip(i, a) {
            this.heightArr && (this.heightArr.length = 0), this.heightArr = [], Laya.loader.create([ {
                url: i,
                type: Laya.Loader.BUFFER
            } ], Laya.Handler.create(this, () => {
                let t = new JSZip(Laya.loader.getRes(i));
                var e = t.file("data.json").asText();
                this.init(e), a();
            }));
        }
        static loadJson(e, i) {
            this.heightArr && (this.heightArr.length = 0), this.heightArr = [], Laya.loader.create([ {
                url: e,
                type: Laya.Loader.JSON
            } ], Laya.Handler.create(this, () => {
                var t = JSON.stringify(Laya.loader.getRes(e));
                this.init(t), i();
            }));
        }
        static canWalk(t, e, i) {
            return 0 == u.walkDp(t, (e / y.mapScale + .5 * y.width) / y.width, (i / y.mapScale + .5 * y.height) / y.height);
        }
        static walkTo(t, e, i, a) {
            var s = t.transform.localPositionX + a * Math.cos(i), r = t.transform.localPositionZ - a * Math.sin(i);
            if (y.canWalk(e, s, r)) t.transform.localPositionX = s, t.transform.localPositionZ = r; else {
                a = y.checkWalkInfo("map1", t.transform.localPositionX, t.transform.localPositionZ, i, .5 * a);
                if (!a) return !1;
                t.transform.localPositionX = a.x, t.transform.localPositionZ = a.z;
            }
            return !0;
        }
        static checkWalkInfo(e, i, a, s, r) {
            let o = !1, n, h;
            u.mapPool[e], y.width, this.mapScale, y.height, this.mapScale;
            var l = this.getTestDir(e, i, a, s, r);
            if (0 != l) {
                var d = Math.PI / 180 * 3, c = Math.PI / d;
                for (let t = 0; t < c; t++) {
                    var p = i + Math.cos(s + d * l * t) * r, m = a - Math.sin(s + d * l * t) * r;
                    if (this.canWalk(e, p, m)) {
                        n = p, h = m, o = !0;
                        break;
                    }
                }
            }
            return o ? (n = y.limitX(n, .8), h = y.limitZ(h, .8), new g(n, h)) : null;
        }
        static getTestDir(t, e, i, a, s) {
            var r = e + Math.cos(a + Math.PI / 2) * s, o = i - Math.sin(a + Math.PI / 2) * s;
            y.width, this.mapScale, y.height, this.mapScale;
            return this.canWalk(t, r, o) ? 1 : (r = e + Math.cos(a - Math.PI / 2) * s, o = i - Math.sin(a - Math.PI / 2) * s, 
            this.canWalk(t, r, o) ? -1 : 0);
        }
        static checkIsDirToPos(e, i, a, t, s, r = 10) {
            var o = (t - i) / (r + 1), n = (s - a) / (r + 1);
            for (let t = 0; t < r; t++) {
                var h = i + t * o, l = a + t * n;
                if (!y.canWalk(e, h, l)) return !1;
            }
            return !0;
        }
    }
    y.heightArr = [], y.mapScale = 1;
    class e extends Laya.Sprite {
        constructor(t, e = 36, i = "#ffffff") {
            super();
            var a = new Laya.Image();
            a.sizeGrid = "20,20,20,20", this.addChild(a);
            var s = new Laya.Text();
            s.text = t, s.color = i, s.fontSize = e, s.bold = !0, this.addChild(s), s.pos(.5 * -s.textWidth, 80 - s.textHeight >> 1), 
            a.size(s.textWidth + 160, 80), a.x = .5 * -a.width, Laya.stage.addChild(this), this.pos(.5 * Laya.stage.width, 400);
            var r = this;
            r.alpha = 0, Laya.Tween.to(this, {
                y: 280,
                alpha: 1
            }, 500, Laya.Ease.sineOut, Laya.Handler.create(null, function() {
                Laya.Tween.to(r, {
                    alpha: 0,
                    y: r.y - 50
                }, 100, Laya.Ease.linearNone, Laya.Handler.create(null, function() {
                    r.removeSelf();
                }), 2e3);
            }));
        }
    }
    class s extends Laya.EventDispatcher {
        static on(t, e, i, a = []) {
            this.instance || (this.instance = new s()), this.instance.on(t, e, i, a);
        }
        static off(t, e, i) {
            this.instance || (this.instance = new s()), this.instance.off(t, e, i);
        }
        static event(t, e) {
            this.instance || (this.instance = new s()), this.instance.event(t, e);
        }
    }
    s.DIAMOND_CHANGE = "diamond_change", s.GOLD_CHANGE = "gold_change", s.QIANGBI_CHANGE = "qiangbi_change", 
    s.GAME_SHOW = "game_show", s.VIEW_CHANGE = "view_change", s.GAME_START = "game_start", 
    s.INTEGRAL_CHANGE = "integral_change", s.PLAYER_LEAVE = "player_leave", s.PLAYER_SKIN_CHANGE = "player_skin_change";
    class i extends Laya.Sprite {
        constructor() {
            super(), this.viewType = "", this.viewIsShowing = !1;
        }
        showToStage(t) {}
        removeFromStage() {}
        getUIView() {
            return this.uiView;
        }
        clearRes() {}
    }
    var a, r, f = Laya.ClassUtils.regClass;
    !function(t) {
        class e extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(e.uiView);
            }
        }
        e.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    width: 2340,
                    var: "bg",
                    height: 1080,
                    alpha: .9
                },
                compId: 7,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 2340,
                        lineWidth: 1,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 8
                } ]
            }, {
                type: "Sprite",
                props: {
                    width: 1920,
                    var: "content"
                },
                compId: 5,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 41,
                        x: 844,
                        texture: "images/customad/rmtj.png"
                    },
                    compId: 3
                }, {
                    type: "Sprite",
                    props: {
                        y: 925,
                        x: 846,
                        var: "continueBtn",
                        texture: "images/customad/jxyx.png"
                    },
                    compId: 4
                } ]
            } ],
            loadList: [ "images/customad/rmtj.png", "images/customad/jxyx.png" ],
            loadList3D: []
        }, t.CustomInterstitialAdViewUI = e, f("ui.CustomInterstitialAdViewUI", e);
        class i extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(i.uiView);
            }
        }
        i.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    var: "leftMenu"
                },
                compId: 5,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 636,
                        x: 81,
                        width: 389,
                        var: "userControl",
                        texture: "images/game/yundong.png",
                        height: 389
                    },
                    compId: 8,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 35,
                            x: 133,
                            var: "moveItem",
                            skin: "images/game/btn_yundong.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 47
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 178,
                        x: 110,
                        var: "stars"
                    },
                    compId: 106,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 21,
                            x: 23,
                            var: "star1",
                            skin: "images/game/xx2.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 100
                    }, {
                        type: "Image",
                        props: {
                            y: 21,
                            x: 74,
                            var: "star2",
                            skin: "images/game/xx2.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 101
                    }, {
                        type: "Image",
                        props: {
                            y: 21,
                            x: 125,
                            var: "star3",
                            skin: "images/game/xx2.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 102
                    }, {
                        type: "Image",
                        props: {
                            y: 21,
                            x: 177,
                            var: "star4",
                            skin: "images/game/xx2.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 103
                    }, {
                        type: "Image",
                        props: {
                            y: 21,
                            x: 228,
                            var: "star5",
                            skin: "images/game/xx2.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 104
                    }, {
                        type: "Image",
                        props: {
                            y: 21,
                            x: 279,
                            visible: !1,
                            var: "star6",
                            skin: "images/game/xx2.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 105
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 363,
                        x: 110,
                        var: "taskInfo",
                        texture: "images/game/renwu.png"
                    },
                    compId: 117,
                    child: [ {
                        type: "Text",
                        props: {
                            y: -42,
                            x: 2,
                            text: "任务",
                            fontSize: 36,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 118
                    }, {
                        type: "Text",
                        props: {
                            y: 9,
                            x: 9,
                            width: 309,
                            var: "taskTxt",
                            valign: "middle",
                            text: "城市巡逻",
                            height: 88,
                            fontSize: 36,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 119
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 85,
                        x: 154,
                        var: "experenceInfo",
                        texture: "images/game/6-tiao08.png"
                    },
                    compId: 114,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 3,
                            x: 3,
                            var: "experience",
                            texture: "images/game/6-tiao04.png"
                        },
                        compId: 115
                    }, {
                        type: "Sprite",
                        props: {
                            y: 5.5,
                            x: 63,
                            texture: "images/game/wz-02.png",
                            scaleY: .8,
                            scaleX: .8
                        },
                        compId: 116
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 46,
                        x: 116,
                        var: "bloodInfo",
                        texture: "images/game/6-tiao02.png"
                    },
                    compId: 111,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 5,
                            x: 23,
                            var: "blood",
                            texture: "images/game/6-tiao01.png"
                        },
                        compId: 112
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 20,
                        x: 26,
                        var: "userInfo",
                        texture: "images/game/tx.png"
                    },
                    compId: 107,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 73,
                            x: 72,
                            width: 106,
                            var: "userIcon",
                            height: 106,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 109
                    }, {
                        type: "Sprite",
                        props: {
                            y: 108,
                            x: 87,
                            var: "levelInfo",
                            texture: "images/game/dj.png"
                        },
                        compId: 108,
                        child: [ {
                            type: "Text",
                            props: {
                                y: 14,
                                x: -1,
                                width: 44,
                                var: "levelTxt",
                                text: "100",
                                fontSize: 16,
                                color: "#ffffff",
                                bold: !0,
                                align: "center",
                                runtime: "laya.display.Text"
                            },
                            compId: 110
                        } ]
                    }, {
                        type: "Sprite",
                        props: {
                            y: 36,
                            x: 188,
                            texture: "images/game/wz-01.png",
                            scaleY: .8,
                            scaleX: .8
                        },
                        compId: 113
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 72,
                        x: 620,
                        width: 120,
                        var: "custom_s2",
                        height: 120
                    },
                    compId: 139
                } ]
            }, {
                type: "Sprite",
                props: {
                    x: 2340,
                    var: "rightMenu"
                },
                compId: 96,
                child: [ {
                    type: "Image",
                    props: {
                        y: 519,
                        x: -144,
                        var: "bianshenBtn",
                        skin: "images/game/btn_to_car.png",
                        pivotY: 66,
                        pivotX: 66,
                        label: "label"
                    },
                    compId: 85,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 63,
                            x: 65,
                            visible: !1,
                            skin: "images/game/fg.png",
                            scaleY: .5,
                            scaleX: .5,
                            name: "light",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 94
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 732,
                        x: -356,
                        visible: !1,
                        var: "shootItem",
                        texture: "images/game/hkbg.png"
                    },
                    compId: 88,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: -19,
                            x: -1,
                            texture: "images/game/hk.png"
                        },
                        compId: 87
                    }, {
                        type: "Sprite",
                        props: {
                            y: 107,
                            x: 104,
                            var: "paodanBtn",
                            texture: "images/game/ic-14.png",
                            pivotY: 70,
                            pivotX: 70
                        },
                        compId: 86,
                        child: [ {
                            type: "Image",
                            props: {
                                y: 70,
                                x: 71,
                                visible: !1,
                                skin: "images/game/fg.png",
                                scaleY: .5,
                                scaleX: .5,
                                name: "light",
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 95
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        var: "skillBtns"
                    },
                    compId: 99,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 904,
                            x: -199,
                            var: "attackBtn",
                            texture: "images/game/ic-15.png",
                            pivotY: 124,
                            pivotX: 124
                        },
                        compId: 80,
                        child: [ {
                            type: "Image",
                            props: {
                                y: 117,
                                x: 118,
                                visible: !1,
                                skin: "images/game/fg.png",
                                name: "light",
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 89
                        } ]
                    }, {
                        type: "Sprite",
                        props: {
                            y: 664,
                            x: -143,
                            var: "jumpBtn",
                            texture: "images/game/ic-16.png",
                            pivotY: 72,
                            pivotX: 70
                        },
                        compId: 82,
                        child: [ {
                            type: "Image",
                            props: {
                                y: 70,
                                x: 71,
                                visible: !1,
                                skin: "images/game/fg.png",
                                scaleY: .5,
                                scaleX: .5,
                                name: "light",
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 93
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            y: 685,
                            x: -308,
                            var: "runBtn",
                            skin: "images/game/pb.png",
                            pivotY: 70,
                            pivotX: 70
                        },
                        compId: 83,
                        child: [ {
                            type: "Image",
                            props: {
                                y: 70,
                                x: 71,
                                visible: !1,
                                skin: "images/game/fg.png",
                                scaleY: .5,
                                scaleX: .5,
                                name: "light",
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 92
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            y: 951,
                            x: -451,
                            var: "zhongquanBtn",
                            skin: "images/game/zq.png",
                            pivotY: 70,
                            pivotX: 70
                        },
                        compId: 84,
                        child: [ {
                            type: "Image",
                            props: {
                                y: 70.5,
                                x: 71.5,
                                visible: !1,
                                skin: "images/game/fg.png",
                                scaleY: .5,
                                scaleX: .5,
                                name: "light",
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 91
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            y: 789,
                            x: -431,
                            var: "kickBtn",
                            skin: "images/game/tf.png",
                            pivotY: 70,
                            pivotX: 70
                        },
                        compId: 97,
                        child: [ {
                            type: "Image",
                            props: {
                                y: 70,
                                x: 71,
                                visible: !1,
                                skin: "images/game/fg.png",
                                scaleY: .5,
                                scaleX: .5,
                                name: "light",
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 98
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 30,
                        x: -395,
                        var: "map",
                        texture: "images/game/water.png"
                    },
                    compId: 120,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 16,
                            x: 16,
                            width: 280,
                            var: "minMap"
                        },
                        compId: 122,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 143,
                                x: 143,
                                var: "m",
                                renderType: "mask"
                            },
                            compId: 123,
                            child: [ {
                                type: "Circle",
                                props: {
                                    radius: 140,
                                    lineWidth: 1,
                                    fillColor: "#ff0000"
                                },
                                compId: 124
                            } ]
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            y: 185,
                            x: -12,
                            var: "backBtn",
                            skin: "images/game/btn_tuichu.png",
                            label: "label"
                        },
                        compId: 125
                    }, {
                        type: "Image",
                        props: {
                            y: 256,
                            x: 69,
                            var: "helpBtn",
                            skin: "images/game/btn_04.png",
                            label: "label"
                        },
                        compId: 126
                    }, {
                        type: "Image",
                        props: {
                            y: 259,
                            x: 170,
                            var: "shopBtn",
                            skin: "images/game/btn_03.png",
                            label: "label"
                        },
                        compId: 127
                    }, {
                        type: "Image",
                        props: {
                            y: 196,
                            x: 244,
                            var: "signBtn",
                            skin: "images/game/btn_sezi.png",
                            label: "label"
                        },
                        compId: 128
                    }, {
                        type: "Image",
                        props: {
                            y: 97,
                            x: 268,
                            var: "zhuanpanBtn",
                            skin: "images/game/btn_05.png",
                            label: "label"
                        },
                        compId: 129
                    }, {
                        type: "Sprite",
                        props: {
                            y: 62,
                            x: 74,
                            width: 160,
                            var: "mapBtn",
                            height: 196
                        },
                        compId: 131
                    }, {
                        type: "Sprite",
                        props: {
                            y: 313,
                            x: -112,
                            width: 192,
                            var: "tips",
                            height: 90
                        },
                        compId: 136,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 11,
                                x: 19,
                                width: 161,
                                texture: "images/game/shop_text_bg.png",
                                height: 78,
                                alpha: .5
                            },
                            compId: 137
                        }, {
                            type: "Sprite",
                            props: {
                                y: 35,
                                x: 34,
                                texture: "images/game/tishi01.png"
                            },
                            compId: 133,
                            child: [ {
                                type: "Text",
                                props: {
                                    y: 16,
                                    x: 31,
                                    text: "目的地",
                                    fontSize: 30,
                                    color: "#ffffff",
                                    bold: !0,
                                    runtime: "laya.display.Text"
                                },
                                compId: 134
                            }, {
                                type: "Text",
                                props: {
                                    y: -15,
                                    x: 11,
                                    text: "小提示：",
                                    fontSize: 24,
                                    color: "#ffffff",
                                    bold: !0,
                                    runtime: "laya.display.Text"
                                },
                                compId: 135
                            } ]
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 440.75,
                        x: -376,
                        var: "yaoshuiBtn",
                        texture: "images/game/ic-08.png",
                        scaleY: 1.5,
                        scaleX: 1.5
                    },
                    compId: 121
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "freeContainer"
                },
                compId: 141,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 45,
                        x: 1379,
                        width: 143,
                        var: "freeVideoBtn",
                        texture: "images/common/mfjb.png",
                        height: 152
                    },
                    compId: 142
                } ]
            } ],
            loadList: [ "images/game/yundong.png", "images/game/btn_yundong.png", "images/game/xx2.png", "images/game/renwu.png", "images/game/6-tiao08.png", "images/game/6-tiao04.png", "images/game/wz-02.png", "images/game/6-tiao02.png", "images/game/6-tiao01.png", "images/game/tx.png", "images/game/dj.png", "images/game/wz-01.png", "images/game/btn_to_car.png", "images/game/fg.png", "images/game/hkbg.png", "images/game/hk.png", "images/game/ic-14.png", "images/game/ic-15.png", "images/game/ic-16.png", "images/game/pb.png", "images/game/zq.png", "images/game/tf.png", "images/game/water.png", "images/game/btn_tuichu.png", "images/game/btn_04.png", "images/game/btn_03.png", "images/game/btn_sezi.png", "images/game/btn_05.png", "images/game/shop_text_bg.png", "images/game/tishi01.png", "images/game/ic-08.png", "images/common/mfjb.png" ],
            loadList3D: []
        }, t.GameViewUI = i, f("ui.GameViewUI", i);
        class a extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(a.uiView);
            }
        }
        a.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    texture: "images/help/bg_banzhu.png"
                },
                compId: 3,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        texture: "images/help/3-shu.png"
                    },
                    compId: 4
                }, {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        texture: "images/common/header.png"
                    },
                    compId: 21
                } ]
            }, {
                type: "Image",
                props: {
                    y: 241,
                    x: 0,
                    width: 267,
                    var: "tab1",
                    skin: "images/help/3-kuan.png",
                    height: 136
                },
                compId: 24,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 46.5,
                        x: 109,
                        texture: "images/help/wz1.png"
                    },
                    compId: 25
                }, {
                    type: "Sprite",
                    props: {
                        y: 133,
                        x: 0,
                        texture: "images/help/3-tiao1.png"
                    },
                    compId: 29
                } ]
            }, {
                type: "Image",
                props: {
                    y: 434,
                    x: 0,
                    width: 267,
                    var: "tab2",
                    skin: "images/help/3-kuan.png",
                    height: 136
                },
                compId: 26,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 46.5,
                        x: 109,
                        texture: "images/help/wz2.png"
                    },
                    compId: 27
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 0,
                        texture: "images/help/3-tiao1.png"
                    },
                    compId: 28
                } ]
            }, {
                type: "Sprite",
                props: {
                    var: "content"
                },
                compId: 31,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 140,
                        x: 344,
                        texture: "images/help/czdi.png"
                    },
                    compId: 30
                }, {
                    type: "Sprite",
                    props: {
                        y: 158,
                        x: 503,
                        var: "content1",
                        texture: "images/help/help_cz.png",
                        scaleY: .95,
                        scaleX: .95
                    },
                    compId: 32
                }, {
                    type: "Sprite",
                    props: {
                        y: 140,
                        x: 344,
                        var: "content2"
                    },
                    compId: 33,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 23,
                            x: 64,
                            texture: "images/help/3-kuan02.png"
                        },
                        compId: 34,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 82,
                                x: 72,
                                texture: "images/help/tu1.png"
                            },
                            compId: 35
                        }, {
                            type: "Text",
                            props: {
                                y: 44,
                                x: 409,
                                wordWrap: !0,
                                width: 860,
                                valign: "middle",
                                text: "可以通过攻击来减少敌人的血量，同时也要注意敌人的攻击，不要被反杀哦，请时刻注意自身的状态哦。",
                                height: 222,
                                fontSize: 40,
                                color: "#ffffff",
                                bold: !0,
                                align: "left",
                                runtime: "laya.display.Text"
                            },
                            compId: 36
                        } ]
                    }, {
                        type: "Sprite",
                        props: {
                            y: 359,
                            x: 64,
                            texture: "images/help/3-kuan02.png"
                        },
                        compId: 37,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 82,
                                x: 72,
                                texture: "images/help/tu2.png"
                            },
                            compId: 38
                        }, {
                            type: "Text",
                            props: {
                                y: 44,
                                x: 409,
                                wordWrap: !0,
                                width: 860,
                                valign: "middle",
                                text: "攻击是要注意周围环境变化，注意观察敌人。",
                                height: 222,
                                fontSize: 40,
                                color: "#ffffff",
                                bold: !0,
                                align: "left",
                                runtime: "laya.display.Text"
                            },
                            compId: 39
                        } ]
                    } ]
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "topMenu"
                },
                compId: 10,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 16,
                        x: 728,
                        width: 280,
                        var: "goldInfo",
                        height: 65.5
                    },
                    compId: 11,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 32,
                            x: 31,
                            skin: "images/common/bi.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 12
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 59,
                            texture: "images/common/+-bg.png"
                        },
                        compId: 13
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 83,
                            width: 171,
                            var: "goldTxt",
                            valign: "middle",
                            text: "1000",
                            height: 43,
                            fontSize: 32,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 14
                    }, {
                        type: "Sprite",
                        props: {
                            y: 36,
                            x: 236,
                            texture: "images/common/+.png",
                            scaleY: .5,
                            scaleX: .5
                        },
                        compId: 15
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 16,
                        x: 1046,
                        width: 280,
                        var: "diamondInfo",
                        height: 65.5
                    },
                    compId: 16,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 32,
                            x: 31,
                            skin: "images/common/zuan.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 17
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 59,
                            texture: "images/common/+-bg.png"
                        },
                        compId: 18
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 83,
                            width: 171,
                            var: "diamondTxt",
                            valign: "middle",
                            text: "1000",
                            height: 43,
                            fontSize: 32,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 19
                    }, {
                        type: "Sprite",
                        props: {
                            y: 36,
                            x: 236,
                            texture: "images/common/+.png",
                            scaleY: .5,
                            scaleX: .5
                        },
                        compId: 20
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 110,
                        texture: "images/help/banzhu.png"
                    },
                    compId: 23
                }, {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        var: "backBtn",
                        texture: "images/common/fanhui.png"
                    },
                    compId: 22
                } ]
            }, {
                type: "Sprite",
                props: {
                    x: 1920,
                    var: "rightMenu"
                },
                compId: 48,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 843,
                        x: -334,
                        var: "loading"
                    },
                    compId: 42,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 112,
                            x: 107,
                            var: "circle",
                            skin: "images/help/3-.png",
                            scaleY: .8,
                            scaleX: .8,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 40
                    }, {
                        type: "Text",
                        props: {
                            y: 101,
                            x: 59,
                            width: 90,
                            var: "loadingTxt",
                            text: "10%",
                            fontSize: 30,
                            color: "#fefc84",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 43
                    } ]
                }, {
                    type: "Image",
                    props: {
                        y: 864,
                        x: -507,
                        var: "startBtn",
                        skin: "images/main/btn_start.png",
                        label: "label"
                    },
                    compId: 44,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: -4,
                            x: 4,
                            width: 360,
                            height: 159
                        },
                        compId: 45,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 25,
                                x: 25,
                                width: 335,
                                var: "liuGuang",
                                texture: "images/main/light .png",
                                height: 129
                            },
                            compId: 46
                        }, {
                            type: "Sprite",
                            props: {
                                y: 24,
                                x: 16,
                                width: 345,
                                texture: "images/main/mask.png",
                                renderType: "mask",
                                height: 129
                            },
                            compId: 47
                        } ]
                    } ]
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 601,
                    x: 102.5,
                    width: 120,
                    var: "custom_s1",
                    height: 120
                },
                compId: 49
            } ],
            loadList: [ "images/help/bg_banzhu.png", "images/help/3-shu.png", "images/common/header.png", "images/help/3-kuan.png", "images/help/wz1.png", "images/help/3-tiao1.png", "images/help/wz2.png", "images/help/czdi.png", "images/help/help_cz.png", "images/help/3-kuan02.png", "images/help/tu1.png", "images/help/tu2.png", "images/common/bi.png", "images/common/+-bg.png", "images/common/+.png", "images/common/zuan.png", "images/help/banzhu.png", "images/common/fanhui.png", "images/help/3-.png", "images/main/btn_start.png", "images/main/light .png", "images/main/mask.png" ],
            loadList3D: []
        }, t.HelpViewUI = a, f("ui.HelpViewUI", a);
        class s extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(s.uiView);
            }
        }
        s.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    texture: "loading/bg.png"
                },
                compId: 3,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 149,
                        x: 449,
                        texture: "loading/logo.png"
                    },
                    compId: 4
                } ]
            }, {
                type: "Sprite",
                props: {
                    var: "content"
                },
                compId: 9,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 709,
                        x: 307,
                        texture: "loading/tiao2.png"
                    },
                    compId: 5
                }, {
                    type: "Sprite",
                    props: {
                        y: 709,
                        x: 307,
                        width: 1305,
                        var: "progress",
                        texture: "loading/tiao1.png",
                        height: 23
                    },
                    compId: 6
                }, {
                    type: "Sprite",
                    props: {
                        y: 651,
                        x: 872,
                        texture: "loading/jiazai.png"
                    },
                    compId: 7
                }, {
                    type: "Sprite",
                    props: {
                        y: 718,
                        x: 1610,
                        width: 115,
                        var: "star",
                        texture: "loading/guang.png",
                        pivotY: 57,
                        pivotX: 58,
                        height: 114
                    },
                    compId: 8
                }, {
                    type: "Sprite",
                    props: {
                        y: 355,
                        x: 128,
                        width: 120,
                        var: "custom_s1",
                        height: 120
                    },
                    compId: 10
                }, {
                    type: "Sprite",
                    props: {
                        y: 359,
                        x: 1663,
                        width: 120,
                        var: "custom_s2",
                        height: 120
                    },
                    compId: 11
                } ]
            } ],
            loadList: [ "loading/bg.png", "loading/logo.png", "loading/tiao2.png", "loading/tiao1.png", "loading/jiazai.png", "loading/guang.png" ],
            loadList3D: []
        }, t.LoadingViewUI = s, f("ui.LoadingViewUI", s);
        class r extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(r.uiView);
            }
        }
        r.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    texture: "images/main/bg_zjm.png"
                },
                compId: 3,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        texture: "images/common/header.png"
                    },
                    compId: 4
                } ]
            }, {
                type: "Sprite",
                props: {
                    var: "topMenu"
                },
                compId: 5,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 16,
                        x: 728,
                        width: 280,
                        var: "goldInfo",
                        height: 65.5
                    },
                    compId: 6,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 32,
                            x: 31,
                            skin: "images/common/bi.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 7
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 59,
                            texture: "images/common/+-bg.png"
                        },
                        compId: 8
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 83,
                            width: 171,
                            var: "goldTxt",
                            valign: "middle",
                            text: "1000",
                            height: 43,
                            fontSize: 32,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 9
                    }, {
                        type: "Sprite",
                        props: {
                            y: 36,
                            x: 236,
                            texture: "images/common/+.png",
                            scaleY: .5,
                            scaleX: .5
                        },
                        compId: 15
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 16,
                        x: 1046,
                        width: 280,
                        var: "diamondInfo",
                        height: 65.5
                    },
                    compId: 10,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 32,
                            x: 31,
                            skin: "images/common/zuan.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 12
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 59,
                            texture: "images/common/+-bg.png"
                        },
                        compId: 13
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 83,
                            width: 171,
                            var: "diamondTxt",
                            valign: "middle",
                            text: "1000",
                            height: 43,
                            fontSize: 32,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 14
                    }, {
                        type: "Sprite",
                        props: {
                            y: 36,
                            x: 236,
                            texture: "images/common/+.png",
                            scaleY: .5,
                            scaleX: .5
                        },
                        compId: 16
                    } ]
                } ]
            }, {
                type: "Sprite",
                props: {
                    x: 960,
                    var: "midContent"
                },
                compId: 17,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 589,
                        x: -326,
                        texture: "images/main/tai.png"
                    },
                    compId: 27,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 243,
                            x: 364,
                            var: "role"
                        },
                        compId: 28
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 248,
                        x: -428,
                        var: "attackBtn",
                        texture: "images/main/icon-gj.png"
                    },
                    compId: 24
                }, {
                    type: "Sprite",
                    props: {
                        y: 572,
                        x: -431,
                        var: "chuidiBtn",
                        texture: "images/main/icon-cd.png"
                    },
                    compId: 25
                }, {
                    type: "Sprite",
                    props: {
                        y: 412,
                        x: -519,
                        var: "paodanBtn",
                        texture: "images/main/tifei.png"
                    },
                    compId: 26
                }, {
                    type: "Sprite",
                    props: {
                        y: 138,
                        x: -80,
                        texture: "images/main/bg_mz.png"
                    },
                    compId: 39,
                    child: [ {
                        type: "Text",
                        props: {
                            y: 1,
                            x: 23,
                            width: 189,
                            var: "levelTxt",
                            valign: "middle",
                            text: "LV.1",
                            height: 46,
                            fontSize: 30,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 40
                    } ]
                } ]
            }, {
                type: "Sprite",
                props: {
                    var: "leftMenu"
                },
                compId: 18,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 198,
                        x: 261,
                        var: "zhuanpanBtn",
                        texture: "images/main/list-01.png"
                    },
                    compId: 20
                }, {
                    type: "Sprite",
                    props: {
                        y: 332,
                        x: 144,
                        var: "signBtn",
                        texture: "images/main/list-02.png"
                    },
                    compId: 21
                }, {
                    type: "Sprite",
                    props: {
                        y: 447,
                        x: 274,
                        var: "shopBtn",
                        texture: "images/main/list-03.png"
                    },
                    compId: 22
                }, {
                    type: "Sprite",
                    props: {
                        y: 615,
                        x: 211,
                        var: "inviteBtn",
                        texture: "images/main/list-04.png"
                    },
                    compId: 23
                }, {
                    type: "Sprite",
                    props: {
                        y: 804,
                        x: 161,
                        var: "onlingBtn",
                        texture: "images/main/zaixianjianli.png"
                    },
                    compId: 52
                } ]
            }, {
                type: "Sprite",
                props: {
                    x: 1920,
                    var: "rightMenu"
                },
                compId: 19,
                child: [ {
                    type: "Panel",
                    props: {
                        y: 165,
                        x: -364,
                        width: 137,
                        var: "list",
                        height: 612
                    },
                    compId: 29
                }, {
                    type: "Image",
                    props: {
                        y: 815,
                        x: -487.5,
                        var: "startBtn",
                        skin: "images/main/btn_start.png",
                        label: "label"
                    },
                    compId: 34,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: -4,
                            x: 4,
                            width: 360,
                            height: 159
                        },
                        compId: 37,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 25,
                                x: 25,
                                width: 335,
                                var: "liuGuang",
                                texture: "images/main/light .png",
                                height: 129
                            },
                            compId: 35
                        }, {
                            type: "Sprite",
                            props: {
                                y: 24,
                                x: 16,
                                width: 345,
                                texture: "images/main/mask.png",
                                renderType: "mask",
                                height: 129
                            },
                            compId: 38
                        } ]
                    } ]
                }, {
                    type: "Image",
                    props: {
                        y: 400,
                        x: -563,
                        var: "worldBtn",
                        skin: "images/main/jijiaduizhang.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 44
                }, {
                    type: "Sprite",
                    props: {
                        y: 538.5,
                        x: -683,
                        width: 120,
                        var: "custom_s1",
                        height: 120
                    },
                    compId: 47
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "freeContainer"
                },
                compId: 50,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 46,
                        x: 1400,
                        width: 143,
                        var: "freeVideoBtn",
                        texture: "images/common/mfjb.png",
                        height: 152
                    },
                    compId: 51
                } ]
            } ],
            loadList: [ "images/main/bg_zjm.png", "images/common/header.png", "images/common/bi.png", "images/common/+-bg.png", "images/common/+.png", "images/common/zuan.png", "images/main/tai.png", "images/main/icon-gj.png", "images/main/icon-cd.png", "images/main/tifei.png", "images/main/bg_mz.png", "images/main/list-01.png", "images/main/list-02.png", "images/main/list-03.png", "images/main/list-04.png", "images/main/zaixianjianli.png", "images/main/btn_start.png", "images/main/light .png", "images/main/mask.png", "images/main/jijiaduizhang.png", "images/common/mfjb.png" ],
            loadList3D: []
        }, t.MainViewUI = r, f("ui.MainViewUI", r);
        class o extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(o.uiView);
            }
        }
        o.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    texture: "images/main/bg_zjm.png"
                },
                compId: 6,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        texture: "images/match/4-panel.png"
                    },
                    compId: 7
                } ]
            }, {
                type: "Sprite",
                props: {
                    var: "content"
                },
                compId: 13,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 107,
                        x: 864,
                        texture: "images/match/pipeizhon.png"
                    },
                    compId: 8
                }, {
                    type: "Sprite",
                    props: {
                        y: 695,
                        x: 564,
                        texture: "images/match/3-tishik.png"
                    },
                    compId: 9,
                    child: [ {
                        type: "Text",
                        props: {
                            y: 18.5,
                            x: 239.27734375,
                            text: "努力寻找势均力敌的对手",
                            fontSize: 30,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 11
                    } ]
                }, {
                    type: "Image",
                    props: {
                        y: 468,
                        x: 976,
                        var: "circle",
                        skin: "images/match/4-jiazai.png",
                        anchorY: .5,
                        anchorX: .55
                    },
                    compId: 10
                }, {
                    type: "Text",
                    props: {
                        y: 449,
                        x: 835,
                        width: 262,
                        var: "timeTxt",
                        text: "00:02",
                        height: 40,
                        fontSize: 40,
                        color: "#ffffff",
                        bold: !0,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 12
                }, {
                    type: "Sprite",
                    props: {
                        y: 120,
                        x: 130,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 14
                }, {
                    type: "Sprite",
                    props: {
                        y: 120,
                        x: 1665,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 15
                } ]
            } ],
            loadList: [ "images/main/bg_zjm.png", "images/match/4-panel.png", "images/match/pipeizhon.png", "images/match/3-tishik.png", "images/match/4-jiazai.png" ],
            loadList3D: []
        }, t.MatchViewUI = o, f("ui.MatchViewUI", o);
        class n extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(n.uiView);
            }
        }
        n.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            loadList: [],
            loadList3D: []
        }, t.RoleViewUI = n, f("ui.RoleViewUI", n);
        class h extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(h.uiView);
            }
        }
        h.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    texture: "images/shop/bg_banzhu.png"
                },
                compId: 3,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        texture: "images/shop/3-shu.png"
                    },
                    compId: 9
                }, {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        texture: "images/common/header.png"
                    },
                    compId: 10
                } ]
            }, {
                type: "Image",
                props: {
                    y: 241,
                    x: 0,
                    width: 267,
                    var: "tab1",
                    skin: "images/shop/ditu.png",
                    height: 136
                },
                compId: 4,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 46.5,
                        x: 109,
                        texture: "images/shop/jijia.png"
                    },
                    compId: 11
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "content"
                },
                compId: 6,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 140,
                        x: 344,
                        texture: "images/shop/shop_bg.png"
                    },
                    compId: 15
                }, {
                    type: "Panel",
                    props: {
                        y: 169,
                        x: 378,
                        width: 1399,
                        var: "list",
                        height: 634
                    },
                    compId: 84
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "topMenu"
                },
                compId: 7,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 16,
                        x: 728,
                        width: 280,
                        var: "goldInfo",
                        height: 65.5
                    },
                    compId: 24,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 32,
                            x: 31,
                            skin: "images/common/bi.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 25
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 59,
                            texture: "images/common/+-bg.png"
                        },
                        compId: 26
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 83,
                            width: 171,
                            var: "goldTxt",
                            valign: "middle",
                            text: "1000",
                            height: 43,
                            fontSize: 32,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 27
                    }, {
                        type: "Sprite",
                        props: {
                            y: 36,
                            x: 236,
                            texture: "images/common/+.png",
                            scaleY: .5,
                            scaleX: .5
                        },
                        compId: 28
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 16,
                        x: 1046,
                        width: 280,
                        var: "diamondInfo",
                        height: 65.5
                    },
                    compId: 29,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 32,
                            x: 31,
                            skin: "images/common/zuan.png",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 30
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 59,
                            texture: "images/common/+-bg.png"
                        },
                        compId: 31
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 83,
                            width: 171,
                            var: "diamondTxt",
                            valign: "middle",
                            text: "1000",
                            height: 43,
                            fontSize: 32,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 32
                    }, {
                        type: "Sprite",
                        props: {
                            y: 36,
                            x: 236,
                            texture: "images/common/+.png",
                            scaleY: .5,
                            scaleX: .5
                        },
                        compId: 33
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: -15,
                        x: 110,
                        texture: "images/shop/shop.png"
                    },
                    compId: 34
                }, {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        var: "backBtn",
                        texture: "images/common/fanhui.png"
                    },
                    compId: 35
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 444,
                    x: 95,
                    width: 120,
                    var: "custom_s1",
                    height: 120
                },
                compId: 85
            } ],
            loadList: [ "images/shop/bg_banzhu.png", "images/shop/3-shu.png", "images/common/header.png", "images/shop/ditu.png", "images/shop/jijia.png", "images/shop/shop_bg.png", "images/common/bi.png", "images/common/+-bg.png", "images/common/+.png", "images/common/zuan.png", "images/shop/shop.png", "images/common/fanhui.png" ],
            loadList3D: []
        }, t.ShopViewUI = h, f("ui.ShopViewUI", h);
    }(a = a || {}), function(t) {
        class e extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(e.uiView);
            }
        }
        e.uiView = {
            type: "View",
            props: {
                width: 912,
                height: 136
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 10,
                    x: 7,
                    var: "normalBg",
                    texture: "images/invite/tip_bg.png"
                },
                compId: 3
            }, {
                type: "Sprite",
                props: {
                    y: 6,
                    x: -62,
                    var: "completeBg",
                    texture: "images/invite/select_bg.png"
                },
                compId: 4
            }, {
                type: "Text",
                props: {
                    y: 55,
                    x: 31,
                    var: "titleTxt",
                    text: "成功邀请一位好友",
                    fontSize: 26,
                    color: "#ffffff",
                    bold: !0,
                    runtime: "laya.display.Text"
                },
                compId: 5
            }, {
                type: "Sprite",
                props: {
                    y: 45,
                    x: 467,
                    var: "diamondIcon",
                    texture: "images/invite/zuanshi.png"
                },
                compId: 6
            }, {
                type: "Sprite",
                props: {
                    y: 46,
                    x: 465,
                    var: "goldIcon",
                    texture: "images/invite/jinbi.png"
                },
                compId: 7
            }, {
                type: "Text",
                props: {
                    y: 55,
                    x: 307,
                    width: 101,
                    var: "completeTxt",
                    text: "0/1",
                    height: 26,
                    fontSize: 26,
                    color: "#ffffff",
                    bold: !0,
                    align: "center",
                    runtime: "laya.display.Text"
                },
                compId: 8
            }, {
                type: "Text",
                props: {
                    y: 55,
                    x: 524,
                    width: 101,
                    var: "rewardTxt",
                    text: "100",
                    height: 26,
                    fontSize: 26,
                    color: "#ffffff",
                    bold: !0,
                    align: "left",
                    runtime: "laya.display.Text"
                },
                compId: 9
            }, {
                type: "Image",
                props: {
                    y: 36,
                    x: 720,
                    var: "getBtn",
                    skin: "images/invite/btn_lqu.png",
                    label: "label"
                },
                compId: 10
            }, {
                type: "Image",
                props: {
                    y: 36,
                    x: 720,
                    var: "inviteBtn",
                    skin: "images/invite/btn_yaoq.png",
                    label: "label"
                },
                compId: 11
            }, {
                type: "Sprite",
                props: {
                    y: 43,
                    x: 721,
                    var: "completeIcon",
                    texture: "images/invite/yiwanc.png"
                },
                compId: 12
            } ],
            loadList: [ "images/invite/tip_bg.png", "images/invite/select_bg.png", "images/invite/zuanshi.png", "images/invite/jinbi.png", "images/invite/btn_lqu.png", "images/invite/btn_yaoq.png", "images/invite/yiwanc.png" ],
            loadList3D: []
        }, t.InviteItemUI = e, f("ui.items.InviteItemUI", e);
        class i extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(i.uiView);
            }
        }
        i.uiView = {
            type: "View",
            props: {
                width: 137,
                height: 132
            },
            compId: 2,
            child: [ {
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 137,
                    var: "bg",
                    skin: "images/main/suo-2.png",
                    height: 132
                },
                compId: 3
            }, {
                type: "Image",
                props: {
                    y: 66,
                    x: 69,
                    width: 116,
                    var: "icon",
                    height: 116,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 4
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "cover",
                    texture: "images/main/suo-2.png",
                    alpha: .5
                },
                compId: 5
            }, {
                type: "Text",
                props: {
                    y: 16,
                    x: 9,
                    width: 117,
                    var: "nameTxt",
                    text: "名称",
                    strokeColor: "#000000",
                    stroke: 4,
                    height: 26,
                    fontSize: 26,
                    color: "#ffffff",
                    align: "center",
                    runtime: "laya.display.Text"
                },
                compId: 6
            }, {
                type: "Sprite",
                props: {
                    y: 62,
                    x: 45,
                    var: "lock",
                    texture: "images/main/suo-1.png"
                },
                compId: 7
            } ],
            loadList: [ "images/main/suo-2.png", "images/main/suo-1.png" ],
            loadList3D: []
        }, t.MainRoleItemUI = i, f("ui.items.MainRoleItemUI", i);
        class a extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(a.uiView);
            }
        }
        a.uiView = {
            type: "View",
            props: {
                width: 260,
                height: 312
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    width: 260,
                    texture: "images/shop/shop_tip_bg.png",
                    height: 311
                },
                compId: 3
            }, {
                type: "Text",
                props: {
                    y: 13,
                    x: 8,
                    width: 244,
                    var: "nameTxt",
                    text: "机甲的名字",
                    height: 36,
                    fontSize: 36,
                    color: "#ffffff",
                    bold: !0,
                    align: "center",
                    runtime: "laya.display.Text"
                },
                compId: 4
            }, {
                type: "Image",
                props: {
                    y: 60,
                    x: 6,
                    width: 248,
                    var: "icon",
                    height: 245
                },
                compId: 5
            }, {
                type: "Image",
                props: {
                    y: 237,
                    x: 50,
                    var: "videoBtn",
                    skin: "images/shop/btn_spgm.png",
                    label: "label"
                },
                compId: 6
            }, {
                type: "Image",
                props: {
                    y: 237,
                    x: 50,
                    var: "buyBtn",
                    skin: "images/shop/btn_goumai.png",
                    label: "label"
                },
                compId: 7,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: -55,
                        x: -34,
                        texture: "images/shop/shop_text_bg.png"
                    },
                    compId: 8,
                    child: [ {
                        type: "Text",
                        props: {
                            y: 7,
                            x: 50,
                            width: 121,
                            var: "priceTxt",
                            text: "100",
                            height: 32,
                            fontSize: 32,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 9
                    }, {
                        type: "Image",
                        props: {
                            y: 10,
                            x: 17,
                            width: 32,
                            var: "priceIcon",
                            skin: "images/common/bi.png",
                            height: 32
                        },
                        compId: 10
                    } ]
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 238,
                    x: 52,
                    var: "useBtn",
                    texture: "images/shop/shiyon.png"
                },
                compId: 11
            }, {
                type: "Sprite",
                props: {
                    y: 244.5,
                    x: 16,
                    var: "usingStatus",
                    texture: "images/shop/shop_text_bg.png"
                },
                compId: 13,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 8,
                        x: 71,
                        texture: "images/shop/shiyonzhon.png"
                    },
                    compId: 12
                } ]
            } ],
            loadList: [ "images/shop/shop_tip_bg.png", "images/shop/btn_spgm.png", "images/shop/btn_goumai.png", "images/shop/shop_text_bg.png", "images/common/bi.png", "images/shop/shiyon.png", "images/shop/shiyonzhon.png" ],
            loadList3D: []
        }, t.ShopItemUI = a, f("ui.items.ShopItemUI", a);
        class s extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(s.uiView);
            }
        }
        s.uiView = {
            type: "View",
            props: {},
            compId: 2,
            child: [ {
                type: "Image",
                props: {
                    y: -14,
                    x: 0,
                    var: "icon",
                    skin: "images/common/jingbidui.png",
                    scaleY: .7,
                    scaleX: .7,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 3
            }, {
                type: "Text",
                props: {
                    y: 62,
                    x: -65,
                    width: 129,
                    var: "txt",
                    text: "100",
                    height: 40,
                    fontSize: 40,
                    color: "#ffffff",
                    bold: !0,
                    align: "center",
                    runtime: "laya.display.Text"
                },
                compId: 4
            } ],
            loadList: [ "images/common/jingbidui.png" ],
            loadList3D: []
        }, t.TurnTableItemUI = s, f("ui.items.TurnTableItemUI", s);
    }((r = a = a || {}).items || (r.items = {})), function(t) {
        class e extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(e.uiView);
            }
        }
        e.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 3,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 4
                } ]
            }, {
                type: "Sprite",
                props: {
                    width: 1920,
                    var: "content",
                    height: 1080
                },
                compId: 5,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 76,
                        x: 518,
                        texture: "images/common/kt_bg.png"
                    },
                    compId: 6
                }, {
                    type: "Sprite",
                    props: {
                        y: 583,
                        x: 844,
                        var: "videoBtn",
                        texture: "images/common/kt_bth_1.png"
                    },
                    compId: 7
                }, {
                    type: "Image",
                    props: {
                        y: 404,
                        x: 979,
                        var: "icon",
                        skin: "images/common/jingbidui.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 9
                }, {
                    type: "Text",
                    props: {
                        y: 501,
                        x: 847,
                        width: 260,
                        var: "numTxt",
                        text: "+100",
                        fontSize: 36,
                        color: "#ffffff",
                        bold: !0,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 10
                }, {
                    type: "Sprite",
                    props: {
                        y: 92,
                        x: 1441,
                        var: "skipBtn",
                        texture: "images/common/cha.png",
                        scaleY: 2,
                        scaleX: 2
                    },
                    compId: 11
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 12
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 13
                } ]
            } ],
            loadList: [ "images/common/kt_bg.png", "images/common/kt_bth_1.png", "images/common/jingbidui.png", "images/common/cha.png" ],
            loadList3D: []
        }, t.AirdropWindowUI = e, f("ui.window.AirdropWindowUI", e);
        class i extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(i.uiView);
            }
        }
        i.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .6
                },
                compId: 3,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 4
                } ]
            }, {
                type: "Sprite",
                props: {
                    width: 1920,
                    var: "content",
                    height: 1080
                },
                compId: 6,
                child: [ {
                    type: "Image",
                    props: {
                        y: 481,
                        x: 960,
                        var: "circle",
                        skin: "loading/10-jiazai.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 5
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 7
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 8
                } ]
            } ],
            loadList: [ "loading/10-jiazai.png" ],
            loadList3D: []
        }, t.CommonLoadingUI = i, f("ui.window.CommonLoadingUI", i);
        class a extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(a.uiView);
            }
        }
        a.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 3,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 5
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "content"
                },
                compId: 4,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 185,
                        x: 553,
                        texture: "images/common/tishi.png"
                    },
                    compId: 6
                }, {
                    type: "Sprite",
                    props: {
                        y: 556,
                        x: 642,
                        var: "okBtn",
                        texture: "images/common/qued.png"
                    },
                    compId: 9
                }, {
                    type: "Sprite",
                    props: {
                        y: 556,
                        x: 1006,
                        var: "cancelBtn",
                        texture: "images/common/quxiao.png"
                    },
                    compId: 10
                }, {
                    type: "Text",
                    props: {
                        y: 294,
                        x: 638,
                        wordWrap: !0,
                        width: 644,
                        var: "tip",
                        valign: "middle",
                        text: "你确定要退出游戏吗？",
                        stroke: 2,
                        height: 237,
                        fontSize: 40,
                        color: "#ffffff",
                        bold: !0,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 11
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 12
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 13
                } ]
            } ],
            loadList: [ "images/common/tishi.png", "images/common/qued.png", "images/common/quxiao.png" ],
            loadList3D: []
        }, t.CommonWindowUI = a, f("ui.window.CommonWindowUI", a);
        class s extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(s.uiView);
            }
        }
        s.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 3,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 5
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    width: 1920,
                    var: "content",
                    height: 1080
                },
                compId: 4,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 76,
                        x: 525,
                        texture: "images/common/bg.png"
                    },
                    compId: 6
                }, {
                    type: "Sprite",
                    props: {
                        y: 583,
                        x: 852,
                        var: "videoBtn",
                        texture: "images/common/kt_bth_1.png"
                    },
                    compId: 7
                }, {
                    type: "Image",
                    props: {
                        y: 380,
                        x: 979,
                        var: "icon",
                        skin: "images/common/jingbidui.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 8
                }, {
                    type: "Text",
                    props: {
                        y: 466,
                        x: 847,
                        width: 260,
                        var: "numTxt",
                        text: "+100",
                        fontSize: 36,
                        color: "#ffffff",
                        bold: !0,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 9
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 11
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 12
                }, {
                    type: "Sprite",
                    props: {
                        y: 87,
                        x: 1438,
                        var: "skipBtn",
                        texture: "images/common/cha.png",
                        scaleY: 2,
                        scaleX: 2
                    },
                    compId: 15
                }, {
                    type: "Sprite",
                    props: {
                        y: 519,
                        x: 855,
                        texture: "images/common/goudi.png"
                    },
                    compId: 16,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: -9,
                            x: 8,
                            var: "gou",
                            texture: "images/common/gou.png"
                        },
                        compId: 17
                    }, {
                        type: "Text",
                        props: {
                            y: 22,
                            x: 65,
                            text: "看视频领取奖励",
                            fontSize: 28,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 18
                    }, {
                        type: "Sprite",
                        props: {
                            y: 30,
                            x: 37,
                            width: 20,
                            var: "selectBtn",
                            height: 20
                        },
                        compId: 19
                    } ]
                } ]
            } ],
            loadList: [ "images/common/bg.png", "images/common/kt_bth_1.png", "images/common/jingbidui.png", "images/common/cha.png", "images/common/goudi.png", "images/common/gou.png" ],
            loadList3D: []
        }, t.FreeRewardWindowUI = s, f("ui.window.FreeRewardWindowUI", s);
        class r extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(r.uiView);
            }
        }
        r.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 4,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 6
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    width: 1920,
                    var: "content",
                    height: 1080
                },
                compId: 5,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 55,
                        x: 440,
                        texture: "images/invite/bg_yaoq.png"
                    },
                    compId: 7
                }, {
                    type: "Image",
                    props: {
                        y: 34,
                        x: 1437.5,
                        var: "closeBtn",
                        skin: "images/invite/btn_gb.png",
                        label: "label"
                    },
                    compId: 8
                }, {
                    type: "Panel",
                    props: {
                        y: 185,
                        x: 503,
                        width: 912,
                        var: "list",
                        height: 481
                    },
                    compId: 88
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 89
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 90
                } ]
            } ],
            loadList: [ "images/invite/bg_yaoq.png", "images/invite/btn_gb.png" ],
            loadList3D: []
        }, t.InviteWindowUI = r, f("ui.window.InviteWindowUI", r);
        class o extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(o.uiView);
            }
        }
        o.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 3,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 4
                } ]
            }, {
                type: "Sprite",
                props: {
                    x: 1920,
                    var: "content"
                },
                compId: 6,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: -958,
                        width: 958,
                        texture: "images/maxmap/bg_ditu.png",
                        height: 1080
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 449,
                        x: -1079,
                        var: "closeBtn",
                        skin: "images/maxmap/btn_guanbi.png",
                        label: "label"
                    },
                    compId: 7
                }, {
                    type: "Sprite",
                    props: {
                        y: 53,
                        x: -907,
                        width: 854,
                        var: "map",
                        height: 972
                    },
                    compId: 8,
                    child: [ {
                        type: "Sprite",
                        props: {
                            width: 854,
                            renderType: "mask",
                            height: 972
                        },
                        compId: 9,
                        child: [ {
                            type: "Rect",
                            props: {
                                width: 854,
                                height: 972,
                                fillColor: "#000000"
                            },
                            compId: 10
                        } ]
                    } ]
                } ]
            } ],
            loadList: [ "images/maxmap/bg_ditu.png", "images/maxmap/btn_guanbi.png" ],
            loadList3D: []
        }, t.MaxMapWindowUI = o, f("ui.window.MaxMapWindowUI", o);
        class n extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(n.uiView);
            }
        }
        n.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    var: "bg",
                    alpha: .75
                },
                compId: 3,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 4
                } ]
            }, {
                type: "Sprite",
                props: {
                    var: "content"
                },
                compId: 7,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 185,
                        x: 553,
                        texture: "images/quit/tishi.png"
                    },
                    compId: 6
                }, {
                    type: "Sprite",
                    props: {
                        y: 221,
                        x: 1297,
                        var: "closeBtn",
                        texture: "images/quit/cha.png"
                    },
                    compId: 8
                }, {
                    type: "Sprite",
                    props: {
                        y: 362,
                        x: 698.5,
                        texture: "images/quit/wenz.png"
                    },
                    compId: 9
                }, {
                    type: "Sprite",
                    props: {
                        y: 556,
                        x: 642,
                        var: "okBtn",
                        texture: "images/quit/qued.png"
                    },
                    compId: 10
                }, {
                    type: "Sprite",
                    props: {
                        y: 556,
                        x: 1006,
                        var: "cancelBtn",
                        texture: "images/quit/quxiao.png"
                    },
                    compId: 11
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 12
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 13
                } ]
            } ],
            loadList: [ "images/quit/tishi.png", "images/quit/cha.png", "images/quit/wenz.png", "images/quit/qued.png", "images/quit/quxiao.png" ],
            loadList3D: []
        }, t.QuitWindowUI = n, f("ui.window.QuitWindowUI", n);
        class h extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(h.uiView);
            }
        }
        h.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 3,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 5
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    width: 1920,
                    var: "content",
                    height: 1080
                },
                compId: 4,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 183,
                        x: 552.5,
                        texture: "images/result/jieshu.png"
                    },
                    compId: 11
                }, {
                    type: "Sprite",
                    props: {
                        y: 550,
                        x: 829,
                        var: "replayBtn",
                        texture: "images/result/cxkaiji .png"
                    },
                    compId: 12
                }, {
                    type: "Text",
                    props: {
                        y: 380,
                        x: 715.3125,
                        text: "复活失败，请重新开始游戏",
                        fontSize: 40,
                        color: "#ffffff",
                        bold: !0,
                        runtime: "laya.display.Text"
                    },
                    compId: 13
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 14
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 15
                } ]
            } ],
            loadList: [ "images/result/jieshu.png", "images/result/cxkaiji .png" ],
            loadList3D: []
        }, t.ResultWindowUI = h, f("ui.window.ResultWindowUI", h);
        class l extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(l.uiView);
            }
        }
        l.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 4,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 5
                } ]
            }, {
                type: "Sprite",
                props: {
                    var: "content"
                },
                compId: 6,
                child: [ {
                    type: "Image",
                    props: {
                        y: 363,
                        x: 960,
                        var: "circle",
                        skin: "images/revive/10-jiazai.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 7
                }, {
                    type: "Text",
                    props: {
                        y: 334,
                        x: 863,
                        width: 187,
                        var: "timeTxt",
                        text: "5",
                        height: 60,
                        fontSize: 60,
                        color: "#fefc84",
                        bold: !0,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 3
                }, {
                    type: "Sprite",
                    props: {
                        y: 41,
                        x: 827,
                        texture: "images/revive/fuhuo.png"
                    },
                    compId: 8
                }, {
                    type: "Sprite",
                    props: {
                        y: 560,
                        x: 822,
                        var: "videoBtn",
                        texture: "images/revive/lijifuhuo.png"
                    },
                    compId: 9
                }, {
                    type: "Image",
                    props: {
                        y: 654,
                        x: 822,
                        var: "skipBtn",
                        skin: "images/revive/tiaoguo.png"
                    },
                    compId: 10
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 11
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 12
                } ]
            } ],
            loadList: [ "images/revive/10-jiazai.png", "images/revive/fuhuo.png", "images/revive/lijifuhuo.png", "images/revive/tiaoguo.png" ],
            loadList3D: []
        }, t.ReviveWindowUI = l, f("ui.window.ReviveWindowUI", l);
        class d extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(d.uiView);
            }
        }
        d.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 3,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 5
                } ]
            }, {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    width: 1920,
                    var: "content",
                    height: 1080
                },
                compId: 4,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 76,
                        x: 509,
                        texture: "images/common/bg.png"
                    },
                    compId: 6
                }, {
                    type: "Sprite",
                    props: {
                        y: 583,
                        x: 842,
                        var: "videoBtn",
                        texture: "images/common/yq_wb_btn.png"
                    },
                    compId: 7
                }, {
                    type: "Image",
                    props: {
                        y: 404,
                        x: 963,
                        var: "icon",
                        skin: "images/common/jingbidui.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 8
                }, {
                    type: "Text",
                    props: {
                        y: 480,
                        x: 831,
                        width: 260,
                        var: "numTxt",
                        text: "+100",
                        fontSize: 36,
                        color: "#ffffff",
                        bold: !0,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 9
                }, {
                    type: "Sprite",
                    props: {
                        y: 87,
                        x: 1438,
                        var: "getBtn",
                        texture: "images/common/cha.png",
                        scaleY: 2,
                        scaleX: 2
                    },
                    compId: 10
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 11
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 12
                }, {
                    type: "Sprite",
                    props: {
                        y: 519,
                        x: 817
                    },
                    compId: 13,
                    child: [ {
                        type: "Text",
                        props: {
                            y: 22,
                            x: 65,
                            text: "看视频领取奖励",
                            fontSize: 28,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 15
                    }, {
                        type: "Sprite",
                        props: {
                            texture: "images/common/goudi.png"
                        },
                        compId: 17
                    }, {
                        type: "Sprite",
                        props: {
                            y: -9,
                            x: 8,
                            var: "gou",
                            texture: "images/common/gou.png"
                        },
                        compId: 14
                    }, {
                        type: "Sprite",
                        props: {
                            y: 30,
                            x: 37,
                            width: 20,
                            var: "selectBtn",
                            height: 20
                        },
                        compId: 16
                    } ]
                } ]
            } ],
            loadList: [ "images/common/bg.png", "images/common/yq_wb_btn.png", "images/common/jingbidui.png", "images/common/cha.png", "images/common/goudi.png", "images/common/gou.png" ],
            loadList3D: []
        }, t.RewardWindowUI = d, f("ui.window.RewardWindowUI", d);
        class c extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(c.uiView);
            }
        }
        c.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 4,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 5
                } ]
            }, {
                type: "Sprite",
                props: {
                    width: 1920,
                    var: "content",
                    height: 1080
                },
                compId: 7,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 55,
                        x: 440,
                        texture: "images/sign/mianban.png"
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 75,
                        x: 1435.5,
                        var: "closeBtn",
                        skin: "images/sign/btn_gb.png",
                        label: "label"
                    },
                    compId: 8
                }, {
                    type: "Sprite",
                    props: {
                        y: 697,
                        x: 1008,
                        var: "videoBtn",
                        texture: "images/common/yq_wb_btn.png"
                    },
                    compId: 9
                }, {
                    type: "Sprite",
                    props: {
                        y: 697,
                        x: 674,
                        var: "getBtn",
                        texture: "images/common/lianqu.png"
                    },
                    compId: 10
                }, {
                    type: "Sprite",
                    props: {
                        y: 186,
                        x: 497,
                        var: "day1",
                        texture: "images/sign/bg_qd1.png"
                    },
                    compId: 12,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 117,
                            x: 106,
                            skin: "images/common/zuanshidui.png",
                            name: "icon",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 24
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 147,
                            text: "第一天",
                            rotation: 45,
                            fontSize: 24,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 22
                    }, {
                        type: "Text",
                        props: {
                            y: 200,
                            x: 51,
                            width: 117,
                            text: "+100",
                            name: "numTxt",
                            fontSize: 28,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 23
                    }, {
                        type: "Image",
                        props: {
                            y: 216,
                            x: 50,
                            skin: "images/common/zuan.png",
                            scaleY: .5,
                            scaleX: .5,
                            name: "icon2",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 25
                    }, {
                        type: "Sprite",
                        props: {
                            y: -25,
                            x: -23,
                            texture: "images/sign/guang.png",
                            name: "cur"
                        },
                        compId: 11,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 175,
                                x: 73,
                                texture: "images/sign/wenzi_jrlq.png"
                            },
                            compId: 19
                        } ]
                    }, {
                        type: "Sprite",
                        props: {
                            y: -1,
                            x: -1,
                            texture: "images/sign/bg_qd2.png",
                            name: "status"
                        },
                        compId: 20,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 59,
                                x: 58,
                                texture: "images/sign/yiqiandao.png"
                            },
                            compId: 21
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 186,
                        x: 737,
                        var: "day2",
                        texture: "images/sign/bg_qd1.png"
                    },
                    compId: 14,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 117,
                            x: 106,
                            skin: "images/common/zuanshidui.png",
                            name: "icon",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 26
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 147,
                            text: "第二天",
                            rotation: 45,
                            fontSize: 24,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 27
                    }, {
                        type: "Text",
                        props: {
                            y: 200,
                            x: 51,
                            width: 117,
                            text: "+100",
                            name: "numTxt",
                            fontSize: 28,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 28
                    }, {
                        type: "Image",
                        props: {
                            y: 216,
                            x: 50,
                            skin: "images/common/zuan.png",
                            scaleY: .5,
                            scaleX: .5,
                            name: "icon2",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 29
                    }, {
                        type: "Sprite",
                        props: {
                            y: -25,
                            x: -23,
                            texture: "images/sign/guang.png",
                            name: "cur"
                        },
                        compId: 30,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 175,
                                x: 73,
                                texture: "images/sign/wenzi_jrlq.png"
                            },
                            compId: 32
                        } ]
                    }, {
                        type: "Sprite",
                        props: {
                            y: -1,
                            x: -1,
                            texture: "images/sign/bg_qd2.png",
                            name: "status"
                        },
                        compId: 31,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 59,
                                x: 58,
                                texture: "images/sign/yiqiandao.png"
                            },
                            compId: 33
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 186,
                        x: 976,
                        var: "day3",
                        texture: "images/sign/bg_qd1.png"
                    },
                    compId: 15,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 117,
                            x: 106,
                            skin: "images/common/zuanshidui.png",
                            name: "icon",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 34
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 147,
                            text: "第三天",
                            rotation: 45,
                            fontSize: 24,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 35
                    }, {
                        type: "Text",
                        props: {
                            y: 200,
                            x: 51,
                            width: 117,
                            text: "+100",
                            name: "numTxt",
                            fontSize: 28,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 36
                    }, {
                        type: "Image",
                        props: {
                            y: 216,
                            x: 50,
                            skin: "images/common/zuan.png",
                            scaleY: .5,
                            scaleX: .5,
                            name: "icon2",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 37
                    }, {
                        type: "Sprite",
                        props: {
                            y: -25,
                            x: -23,
                            texture: "images/sign/guang.png",
                            name: "cur"
                        },
                        compId: 38,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 175,
                                x: 73,
                                texture: "images/sign/wenzi_jrlq.png"
                            },
                            compId: 40
                        } ]
                    }, {
                        type: "Sprite",
                        props: {
                            y: -1,
                            x: -1,
                            texture: "images/sign/bg_qd2.png",
                            name: "status"
                        },
                        compId: 39,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 59,
                                x: 58,
                                texture: "images/sign/yiqiandao.png"
                            },
                            compId: 41
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 187,
                        x: 1216,
                        var: "day4",
                        texture: "images/sign/bg_qd1.png"
                    },
                    compId: 16,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 117,
                            x: 106,
                            skin: "images/common/zuanshidui.png",
                            name: "icon",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 42
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 147,
                            text: "第四天",
                            rotation: 45,
                            fontSize: 24,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 43
                    }, {
                        type: "Text",
                        props: {
                            y: 200,
                            x: 51,
                            width: 117,
                            text: "+100",
                            name: "numTxt",
                            fontSize: 28,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 44
                    }, {
                        type: "Image",
                        props: {
                            y: 216,
                            x: 50,
                            skin: "images/common/zuan.png",
                            scaleY: .5,
                            scaleX: .5,
                            name: "icon2",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 45
                    }, {
                        type: "Sprite",
                        props: {
                            y: -25,
                            x: -23,
                            texture: "images/sign/guang.png",
                            name: "cur"
                        },
                        compId: 46,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 131,
                                x: 73,
                                texture: "images/sign/wenzi_jrlq.png"
                            },
                            compId: 48
                        } ]
                    }, {
                        type: "Sprite",
                        props: {
                            y: -1,
                            x: -1,
                            texture: "images/sign/bg_qd2.png",
                            name: "status"
                        },
                        compId: 47,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 59,
                                x: 58,
                                texture: "images/sign/yiqiandao.png"
                            },
                            compId: 49
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 443,
                        x: 497,
                        var: "day5",
                        texture: "images/sign/bg_qd1.png"
                    },
                    compId: 17,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 117,
                            x: 106,
                            skin: "images/common/zuanshidui.png",
                            name: "icon",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 50
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 147,
                            text: "第五天",
                            rotation: 45,
                            fontSize: 24,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 51
                    }, {
                        type: "Text",
                        props: {
                            y: 200,
                            x: 51,
                            width: 117,
                            text: "+100",
                            name: "numTxt",
                            fontSize: 28,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 52
                    }, {
                        type: "Image",
                        props: {
                            y: 216,
                            x: 50,
                            skin: "images/common/zuan.png",
                            scaleY: .5,
                            scaleX: .5,
                            name: "icon2",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 53
                    }, {
                        type: "Sprite",
                        props: {
                            y: -25,
                            x: -23,
                            texture: "images/sign/guang.png",
                            name: "cur"
                        },
                        compId: 54,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 131,
                                x: 73,
                                texture: "images/sign/wenzi_jrlq.png"
                            },
                            compId: 56
                        } ]
                    }, {
                        type: "Sprite",
                        props: {
                            y: -1,
                            x: -1,
                            texture: "images/sign/bg_qd2.png",
                            name: "status"
                        },
                        compId: 55,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 59,
                                x: 58,
                                texture: "images/sign/yiqiandao.png"
                            },
                            compId: 57
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 443,
                        x: 737,
                        var: "day6",
                        texture: "images/sign/bg_qd1.png"
                    },
                    compId: 18,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 117,
                            x: 106,
                            skin: "images/common/zuanshidui.png",
                            name: "icon",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 58
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 147,
                            text: "第六天",
                            rotation: 45,
                            fontSize: 24,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 59
                    }, {
                        type: "Text",
                        props: {
                            y: 200,
                            x: 51,
                            width: 117,
                            text: "+100",
                            name: "numTxt",
                            fontSize: 28,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 60
                    }, {
                        type: "Image",
                        props: {
                            y: 216,
                            x: 50,
                            skin: "images/common/zuan.png",
                            scaleY: .5,
                            scaleX: .5,
                            name: "icon2",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 61
                    }, {
                        type: "Sprite",
                        props: {
                            y: -25,
                            x: -23,
                            texture: "images/sign/guang.png",
                            name: "cur"
                        },
                        compId: 62,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 131,
                                x: 73,
                                texture: "images/sign/wenzi_jrlq.png"
                            },
                            compId: 64
                        } ]
                    }, {
                        type: "Sprite",
                        props: {
                            y: -1,
                            x: -1,
                            texture: "images/sign/bg_qd2.png",
                            name: "status"
                        },
                        compId: 63,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 59,
                                x: 58,
                                texture: "images/sign/yiqiandao.png"
                            },
                            compId: 65
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 443,
                        x: 982,
                        width: 445,
                        var: "day7",
                        texture: "images/sign/bg_qd3.png",
                        height: 250
                    },
                    compId: 13,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 117,
                            x: 219,
                            skin: "images/common/zuanshi_1.png",
                            name: "icon",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 66
                    }, {
                        type: "Text",
                        props: {
                            y: 8,
                            x: 380,
                            text: "第七天",
                            rotation: 45,
                            fontSize: 24,
                            color: "#ffffff",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 67
                    }, {
                        type: "Text",
                        props: {
                            y: 200,
                            x: 51,
                            width: 366,
                            text: "+100",
                            name: "numTxt",
                            height: 28,
                            fontSize: 28,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 68
                    }, {
                        type: "Image",
                        props: {
                            y: 216,
                            x: 50,
                            skin: "images/common/zuan.png",
                            scaleY: .5,
                            scaleX: .5,
                            name: "icon2",
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 69
                    }, {
                        type: "Image",
                        props: {
                            y: -25,
                            x: -23,
                            width: 486,
                            skin: "images/sign/guang.png",
                            sizeGrid: "76,82,89,87",
                            name: "cur",
                            height: 290
                        },
                        compId: 70,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 131,
                                x: 190,
                                texture: "images/sign/wenzi_jrlq.png"
                            },
                            compId: 72
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            y: -2,
                            x: -1,
                            width: 443,
                            skin: "images/sign/bg_qd2.png",
                            sizeGrid: "67,64,85,61",
                            name: "status",
                            height: 244
                        },
                        compId: 71,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 59,
                                x: 178,
                                texture: "images/sign/yiqiandao.png"
                            },
                            compId: 73
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 74
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 75
                } ]
            } ],
            loadList: [ "images/sign/mianban.png", "images/sign/btn_gb.png", "images/common/yq_wb_btn.png", "images/common/lianqu.png", "images/sign/bg_qd1.png", "images/common/zuanshidui.png", "images/common/zuan.png", "images/sign/guang.png", "images/sign/wenzi_jrlq.png", "images/sign/bg_qd2.png", "images/sign/yiqiandao.png", "images/sign/bg_qd3.png", "images/common/zuanshi_1.png" ],
            loadList3D: []
        }, t.SignWindowUI = c, f("ui.window.SignWindowUI", c);
        class p extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(p.uiView);
            }
        }
        p.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 9,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 10
                } ]
            }, {
                type: "Sprite",
                props: {
                    var: "content"
                },
                compId: 14,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 281,
                        x: 560,
                        texture: "images/task/duihuakuan.png"
                    },
                    compId: 11,
                    child: [ {
                        type: "Text",
                        props: {
                            y: 15,
                            x: 35,
                            width: 706,
                            var: "npcNameTxt",
                            valign: "middle",
                            text: "XXX",
                            height: 60,
                            fontSize: 40,
                            color: "#ffffff",
                            bold: !0,
                            align: "left",
                            runtime: "laya.display.Text"
                        },
                        compId: 15
                    }, {
                        type: "Text",
                        props: {
                            y: 90,
                            x: 47,
                            wordWrap: !0,
                            width: 706,
                            var: "contentTxt",
                            text: "XXX",
                            height: 94,
                            fontSize: 32,
                            color: "#ffffff",
                            bold: !0,
                            align: "left",
                            runtime: "laya.display.Text"
                        },
                        compId: 16
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 430,
                        x: 978,
                        var: "taskNoneBtns"
                    },
                    compId: 18,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 0,
                            var: "skipBtn",
                            texture: "images/task/tiaoguo.png"
                        },
                        compId: 12
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 184,
                            var: "continueBtn",
                            texture: "images/task/jixu.png"
                        },
                        compId: 13
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 430,
                        x: 978,
                        var: "rewardBtns"
                    },
                    compId: 19,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 0,
                            var: "normalBtn",
                            texture: "images/task/ptlq.png"
                        },
                        compId: 22
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 183,
                            var: "videoBtn",
                            texture: "images/task/sblq.png"
                        },
                        compId: 23
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 430,
                        x: 978,
                        var: "taskNormalBtns"
                    },
                    compId: 27,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 0,
                            var: "giveupBtn",
                            texture: "images/task/fanqirenwu.png"
                        },
                        compId: 28
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 183,
                            var: "backBtn",
                            texture: "images/task/fanhui.png"
                        },
                        compId: 29
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 30
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 31
                }, {
                    type: "Sprite",
                    props: {
                        y: 94,
                        x: 1420,
                        var: "closeBtn",
                        texture: "images/common/cha.png",
                        scaleY: 2,
                        scaleX: 2
                    },
                    compId: 34
                } ]
            } ],
            loadList: [ "images/task/duihuakuan.png", "images/task/tiaoguo.png", "images/task/jixu.png", "images/task/ptlq.png", "images/task/sblq.png", "images/task/fanqirenwu.png", "images/task/fanhui.png", "images/common/cha.png" ],
            loadList3D: []
        }, t.TaskWindowUI = p, f("ui.window.TaskWindowUI", p);
        class m extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(m.uiView);
            }
        }
        m.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            loadList: [],
            loadList3D: []
        }, t.TipWindowUI = m, f("ui.window.TipWindowUI", m);
        class u extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(u.uiView);
            }
        }
        u.uiView = {
            type: "View",
            props: {
                width: 2340,
                height: 1080
            },
            compId: 2,
            child: [ {
                type: "Sprite",
                props: {
                    y: 0,
                    x: 0,
                    var: "bg",
                    alpha: .75
                },
                compId: 3,
                child: [ {
                    type: "Rect",
                    props: {
                        width: 1920,
                        height: 1080,
                        fillColor: "#000000"
                    },
                    compId: 4
                } ]
            }, {
                type: "Sprite",
                props: {
                    width: 1920,
                    var: "content",
                    height: 1080
                },
                compId: 5,
                child: [ {
                    type: "Sprite",
                    props: {
                        y: 51,
                        x: 669,
                        texture: "images/turntable/mianban.png"
                    },
                    compId: 6
                }, {
                    type: "Sprite",
                    props: {
                        y: 371,
                        x: 959,
                        width: 543,
                        var: "table",
                        pivotY: 271.5,
                        pivotX: 271.5,
                        height: 543
                    },
                    compId: 13,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 272,
                            x: 272,
                            skin: "images/turntable/zhuanpan.png",
                            rotation: -22.5,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 7
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 83,
                        x: 1436,
                        var: "closeBtn",
                        texture: "images/turntable/close.png",
                        scaleY: 2,
                        scaleX: 2
                    },
                    compId: 8
                }, {
                    type: "Sprite",
                    props: {
                        y: 671,
                        x: 839,
                        var: "freeBtn",
                        texture: "images/turntable/mianfei.png"
                    },
                    compId: 9
                }, {
                    type: "Sprite",
                    props: {
                        y: 671,
                        x: 839,
                        var: "videoBtn",
                        texture: "images/turntable/shiping.png"
                    },
                    compId: 10,
                    child: [ {
                        type: "Text",
                        props: {
                            y: 25,
                            x: 94,
                            width: 134,
                            var: "videoTxt",
                            text: "(10/10)",
                            fontSize: 36,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 11
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 225,
                        x: 867,
                        texture: "images/turntable/ziding.png"
                    },
                    compId: 12
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 140,
                        width: 120,
                        var: "custom_v1",
                        height: 120
                    },
                    compId: 14
                }, {
                    type: "Sprite",
                    props: {
                        y: 130,
                        x: 1675,
                        width: 120,
                        var: "custom_v2",
                        height: 120
                    },
                    compId: 15
                } ]
            } ],
            loadList: [ "images/turntable/mianban.png", "images/turntable/zhuanpan.png", "images/turntable/close.png", "images/turntable/mianfei.png", "images/turntable/shiping.png", "images/turntable/ziding.png" ],
            loadList3D: []
        }, t.TurnTableWindowUI = u, f("ui.window.TurnTableWindowUI", u);
    }((r = a = a || {}).window || (r.window = {}));
    class o {
        constructor(t) {
            this.time = 10, this.obj = t, Laya.timer.frameLoop(1, this, this.update);
        }
        update() {
            this.obj.alpha = .5 + .5 * Math.random(), this.time--, this.time <= 0 && (Laya.timer.clear(this, this.update), 
            this.obj.alpha = 1, this.obj = null);
        }
    }
    class n extends Laya.EventDispatcher {
        constructor() {
            super();
        }
        getPlatformWidth() {
            return 0;
        }
        getPlatformHeight() {
            return 0;
        }
        showBannerAd(t = 0, e) {}
        hideBannerAd(t = 0) {}
        showVideoAd(t) {}
        showInterstialAd() {}
        setBannerPos(t, e) {}
        showAppBox() {}
        hasAppBox() {
            return !1;
        }
    }
    n.WECHAT = "wechat", n.QQ = "qq", n.VIVO = "vivo", n.BAIDU = "baidu", n.OPPO = "oppo", 
    n.TT = "tt", n.NONE = "none";
    class h extends Laya.View {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {}
        initEvent() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
        }
        resize() {
            this.size(Laya.stage.width, Laya.stage.height);
        }
        show(t, e = 0) {
            this.closeCallback = t, this.resize();
        }
        hide() {
            Laya.stage.off(Laya.Event.RESIZE, this, this.resize), p.adContainer.removeChild(this);
        }
    }
    class l extends h {
        constructor() {
            super(), this.clickNum = 0;
        }
        initView() {
            this.bg = new Laya.Image("qx/wx/mask.png"), this.addChild(this.bg), this.content = new Laya.Sprite(), 
            this.addChild(this.content), this.title = new Laya.Image("qx/wx/rmtj.png"), this.title.anchorX = this.title.anchorY = .5, 
            this.content.addChild(this.title), this.continueBtn = new Laya.Image("qx/wx/jxyx.png"), 
            this.continueBtn.anchorX = this.continueBtn.anchorY = .5, this.content.addChild(this.continueBtn);
            let t = 1;
            t = Laya.stage.width > Laya.stage.height ? (this.content.size(1080 / Laya.stage.height * Laya.stage.width, 1080), 
            Laya.stage.height / 1080) : (this.content.size(1080, 1080 / Laya.stage.width * Laya.stage.height), 
            Laya.stage.width / 1080), this.addChild(this.content), this.content.scale(t, t);
        }
        initEvent() {
            super.initEvent(), this.continueBtn.on(Laya.Event.CLICK, this, this.onContinueBtn);
        }
        onContinueBtn() {
            this.clickNum++, this.clickNum >= p.hotClickNum && (this.closeCallback && this.closeCallback(!0), 
            this.hide());
        }
        resize() {
            super.resize(), this.bg.scale(Laya.stage.width / 174, Laya.stage.height / 174), 
            this.title.pos(.5 * this.content.width, 100), this.continueBtn.pos(.5 * this.content.width, this.content.height - 130), 
            Laya.stage.width < Laya.stage.height && (this.title.scale(2, 2), this.title.y += 60, 
            this.continueBtn.scale(2, 2), this.continueBtn.y -= 80);
        }
        show(t, e) {
            super.show(t, e), Laya.stage.width < Laya.stage.height ? p.showCustomInterstitial() : p.showTwinsCustomInterstitial(), 
            this.clickNum = 0, p.isHotBannerOn && (p.hideBanner(), this.continueBtn.visible = !1, 
            Laya.timer.once(1e3, this, () => {
                this.continueBtn.visible = !0, Laya.timer.once(1e3, this, this.onBannerHandler);
            }));
        }
        onBannerHandler() {
            var t, e;
            2 == p.hotBannerOnType ? p.isFlashSCustom ? p.hideFlashSCustom() : (t = p.getLayaX(125), 
            e = p.getLayaY(90), p.showFlashSCustomWithPositionArr([ new Laya.Point(.5 * Laya.stage.width - .5 * t, Laya.stage.height - e), new Laya.Point(.5 * Laya.stage.width, Laya.stage.height - e) ])) : p.isBanner ? p.hideCurBanner() : p.showCurBanner(), 
            Laya.timer.once(500 + 500 * Math.random(), this, this.onBannerHandler);
        }
        hide() {
            Laya.timer.clearAll(this), super.hide(), p.hideBanner(), p.hideCustomInterstitial(), 
            p.hideFlashSCustom();
        }
    }
    class d extends h {
        constructor() {
            super(), this.clickNum = 0, this.targetNum = 0, this.angle = 0;
        }
        initView() {
            super.initView(), this.bg = new Laya.Image("qx/wx/mask.png"), this.addChild(this.bg), 
            this.content = new Laya.Sprite();
            let t = 1;
            t = Laya.stage.width > Laya.stage.height ? (this.content.size(1080 / Laya.stage.height * Laya.stage.width, 1080), 
            Laya.stage.height / 1080) : (this.content.size(1080, 1080 / Laya.stage.width * Laya.stage.height), 
            Laya.stage.width / 1080), this.addChild(this.content), this.content.scale(t, t), 
            this.title = new Laya.Image("qx/wx/dianjibaox.png"), this.title.anchorX = this.title.anchorY = .5, 
            this.content.addChild(this.title), this.box = new Laya.Image("qx/wx/box.png"), this.box.anchorX = this.box.anchorY = .5, 
            this.content.addChild(this.box);
            Laya.stage.width, Laya.stage.height;
            this.box.scale(2, 2), this.btn = new Laya.Image("qx/wx/btnLijilingqu.png"), this.btn.anchorX = this.btn.anchorY = .5, 
            this.content.addChild(this.btn);
            Laya.stage.width, Laya.stage.height;
            this.btn.scale(1, 1), this.hand = new Laya.Image("qx/wx/help_hand.png"), this.hand.anchorX = .1, 
            this.hand.anchorY = .1, this.content.addChild(this.hand), this.proBg = new Laya.Image("qx/wx/pro_bg.png"), 
            this.proBg.size(566, 39), this.content.addChild(this.proBg), this.proBar = new Laya.Image("qx/wx/pro_bgbar.png"), 
            this.content.addChild(this.proBar), this.proBar.size(558, 29);
        }
        initEvent() {
            super.initEvent();
        }
        onBoxClick(t) {
            let e = t.currentTarget;
            t = this.boxType == p.BOX_TYPE_GRID ? 1.75 : .75;
            let i = this.boxType == p.BOX_TYPE_GRID ? 2 : 1;
            Laya.Tween.to(e, {
                scaleX: t,
                scaleY: t
            }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                Laya.Tween.to(e, {
                    scaleX: i,
                    scaleY: i
                }, 50, Laya.Ease.linearNone);
            })), this.boxType == p.BOX_TYPE_BANNER && (this.proBar.scaleX += .075, this.proBar.scaleX = Math.min(1, this.proBar.scaleX)), 
            this.clickNum >= this.targetNum || (this.clickNum++, this.clickNum >= this.targetNum && (this.boxType == p.BOX_TYPE_GRID ? p.isSingleCustomAdReady() ? (p.showCustomInterstitial(), 
            Laya.timer.once(3e3, this, () => {
                this.hide(), this.closeCallback(!0);
            })) : p.isGridBoxVideoOn ? p.showVideo(() => {
                console.log("Close Box View!"), this.hide(), this.closeCallback(!0);
            }) : (this.hide(), this.closeCallback(!0), p.showInterstitial()) : (this.hide(), 
            this.closeCallback(!0))));
        }
        resize() {
            super.resize(), this.bg.scale(Laya.stage.width / 174, Laya.stage.height / 174), 
            this.title.pos(.5 * this.content.width, 180), this.box.pos(.5 * this.content.width, .5 * this.content.height), 
            this.btn.pos(.5 * this.content.width, this.content.height - 150), this.proBg.pos(this.content.width - this.proBg.width >> 1, this.box.y + 220), 
            this.proBar.pos(this.content.width - this.proBar.width >> 1, this.proBg.y + .5 * (this.proBg.height - this.proBar.height)), 
            this.boxType == p.BOX_TYPE_GRID ? this.hand.pos(this.box.x, this.box.y) : this.hand.pos(this.btn.x, this.btn.y), 
            Laya.stage.width < Laya.stage.height && (this.proBg.y += 230, this.proBar.y += 230, 
            this.title.y += 230);
        }
        show(t, e) {
            this.boxType = e.boxType, super.show(t, e), Laya.stage.width < Laya.stage.height ? this.targetNum = 5 + Math.floor(6 * Math.random()) : this.targetNum = 10 + Math.floor(6 * Math.random()), 
            this.clickNum = 0, this.boxType == p.BOX_TYPE_GRID ? (this.box.on(Laya.Event.CLICK, this, this.onBoxClick), 
            this.box.skin = "qx/wx/box.png", p.showBanner(), this.btn.visible = !1, this.proBg.visible = !1, 
            this.proBar.visible = !1, this.title.skin = "qx/wx/dianjibaox.png") : (this.proBg.visible = !0, 
            this.proBar.visible = !0, this.proBar.scaleX = 0, this.btn.visible = !0, this.box.skin = "qx/wx/box2.png", 
            this.title.skin = "qx/wx/dianjilingqu.png", this.btn.on(Laya.Event.CLICK, this, this.onBoxClick), 
            Laya.timer.once(200, this, () => {
                let t;
                Laya.stage.width > Laya.stage.height && (t = Laya.stage.width - 1920 >> 1), p.showVCustomWithPositionArr([ new Laya.Point(140 + t, 130), new Laya.Point(1675 + t, 130) ]);
            })), Laya.timer.frameLoop(1, this, this.onUpdateHandTip);
        }
        onUpdateHandTip() {
            this.boxType == p.BOX_TYPE_BANNER && (this.proBar.scaleX -= .002, this.proBar.scaleX = Math.max(0, this.proBar.scaleX)), 
            this.angle += 6 / 180 * Math.PI, this.angle %= 2 * Math.PI;
            var t = .1 * Math.cos(this.angle);
            this.hand.scale(.9 + t, .9 + t);
        }
        hide() {
            p.hideVCustom(), this.box.off(Laya.Event.CLICK, this, this.onBoxClick), this.btn.off(Laya.Event.CLICK, this, this.onBoxClick), 
            Laya.timer.clear(this, this.onUpdateHandTip), super.hide(), p.hideCustomInterstitial(), 
            p.hideBanner();
        }
    }
    class c {
        constructor() {}
    }
    c.appId = "wx9a8675ef694aba2b", c.version = "1.0.0", c.configUrl = "https://www.qxyouxi.com:19999/api/v1/game-config", 
    c.shareTitleArr = [], c.shareImgArr = [], c.videoIdArr = [ "adunit-47ec1f516c09a8ac", "adunit-11e590ed407d9c9a" ], 
    c.allBannerAdArr = [ "adunit-193dd1ee4c982519", "adunit-a6d9d3bf2a749281", "adunit-de1eee6aac11ba2b", "adunit-de085f8fb773a5ed", "adunit-ad42f7a329c05368" ], 
    c.customInterstitialIdArr = [ "adunit-a6720b6506a36ffa", "adunit-8fff98b0df830df6", "adunit-fd75ff5afe1541b0" ], 
    c.vCustomIdArr = [ "adunit-9c8bbef19ff3263e", "adunit-1d3716fdde2cbd18" ], c.sCustomIdArr = [ "adunit-584feeeac4786eba", "adunit-584feeeac4786eba" ], 
    c.hCustomIdArr = [], c.interstitialIdArr = [ "adunit-967952cfe946d841", "adunit-b8433d7722a4a005" ], 
    c.flashSCustomIdArr = [ "adunit-956c1deecd79e73d", "adunit-956c1deecd79e73d" ];
    class p {
        constructor() {}
        static init(a, t = null) {
            this.bannerIdArr = c.allBannerAdArr.concat(), this.adContainer = t || Laya.stage, 
            Laya.Browser.onMiniGame && (this.sysInfo = Laya.Browser.window.wx.getSystemInfoSync());
            let e = c.configUrl + "?appId=" + c.appId + "&version=" + c.version + "&random=" + Math.random();
            Laya.loader.create([ {
                url: e,
                type: Laya.Loader.JSON
            } ], Laya.Handler.create(this, t => {
                var i = Laya.loader.getRes(e);
                if (console.log(i), i && 0 == i.code && i.data && this.enable) {
                    let e = i.data;
                    e.banner_id && (c.allBannerAdArr = e.banner_id.split(","), this.bannerIdArr = c.allBannerAdArr.concat()), 
                    console.log("BannerIdArr:", this.bannerIdArr), this.isMainSwitchOn = 1 == e.main_switch, 
                    this.isInAdScenes() && this.isMainSwitchOn ? (e.city_areas && (this.cityArr = e.city_areas.split(",")), 
                    this.checkCityForbidden(t => {
                        console.log("CityForbidden:", t), t || (this.isHotOn = 1 == e.hot, this.isHotBannerOn = 0 < e.hot_banner_btn, 
                        this.hotBannerOnType = e.hot_banner_btn, this.isGridBoxOn = 1 == e.grid_box, this.isGridBoxVideoOn = 1 == e.grid_box_video, 
                        this.isBannerBoxOn = 1 == e.banner_box, this.isBannerBtnOn = 1 == e.banner_btn, 
                        this.hotClickNum = e.hot_click_num || 1, this.isBannerRefresh = 1 == e.banner_reflesh, 
                        this.bannerRefreshTime = e.banner_reflesh_time || 15, this.isLittleBannerOn = 1 == e.little_banner, 
                        this.littleBannerRefleshTime = e.little_banner_refresh_time || 30, this.isGameAutoAdOn = 1 == e.game_auto_ad, 
                        this.gameAutoAdTime = e.game_auto_ad_time || 30, e.top_right_bannerid && (this.topRightBannerId = e.top_right_bannerid)), 
                        this.initWxSDK(a);
                    })) : this.initWxSDK(a);
                } else this.initWxSDK(a);
            }));
        }
        static initWxSDK(t) {
            var e = Math.floor(Math.random() * c.allBannerAdArr.length);
            this.littleBannerId = c.allBannerAdArr[e], c.allBannerAdArr.splice(e, 1), this.bannerIdArr = c.allBannerAdArr.concat(), 
            this.createToRightBanner(), this.createBannerArr(), this.preLoadCustomInterstitialAd(), 
            this.startAutoRefreshBanner(), this.beforeFirstLoading(() => {}), this.preloadTime = Date.now(), 
            t();
        }
        static createToRightBanner() {
            if (Laya.Browser.onMiniGame && this.topRightBannerId && "" != this.topRightBannerId) {
                let e = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: this.topRightBannerId,
                    adIntervals: 30,
                    style: {
                        left: 0,
                        top: 0,
                        width: 200
                    }
                });
                e.onError(() => {}), e.onResize(t => {
                    e.style.left = this.sysInfo.windowWidth - 2, e.style.top = 2 - t.height;
                }), e.show();
            }
        }
        static checkCityForbidden(a) {
            if (0 != this.cityArr.length) {
                let i = "https://www.qxyouxi.com:19999/api/v1/ipaddr/region/get?r=" + Math.random();
                Laya.loader.create([ {
                    url: i,
                    type: Laya.Loader.JSON
                } ], Laya.Handler.create(this, t => {
                    var e = Laya.loader.getRes(i);
                    if (e) {
                        if (e.data) return e.data.city && (console.log(e.data.city), this.inCityArr(e.data.city)) || e.data.province && (console.log(e.data.province), 
                        this.inCityArr(e.data.province)) ? a(!0) : void a(!1);
                        a(!1);
                    } else a(!1);
                }));
            } else a(!1);
        }
        static inCityArr(i) {
            for (let e = 0; e < this.cityArr.length; e++) {
                let t = this.cityArr[e];
                if (-1 != t.indexOf(i) || -1 != i.indexOf(this.cityArr[e])) return !0;
            }
            return !1;
        }
        static startAutoRefreshBanner() {
            Laya.timer.clear(this, this.onAutoRefreshBanner), this.isBannerRefresh && 0 < this.bannerRefreshTime && Laya.timer.loop(1e3 * this.bannerRefreshTime, this, this.onAutoRefreshBanner);
        }
        static onAutoRefreshBanner() {
            this.isBanner && this.showBanner(null, !0);
        }
        static stopAutoRefreshBanner() {
            Laya.timer.clear(this, this.onAutoRefreshBanner);
        }
        static createBannerArr() {
            if (Laya.Browser.onMiniGame) for (let t = 0; t < this.bannerIdArr.length; t++) {
                let e = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: this.bannerIdArr[t],
                    style: {
                        left: 0,
                        top: 0,
                        width: 200
                    }
                });
                e.onError(() => {
                    e.destroy(), this.bannerAdArr[t] = null, this.preLoadBanner(t);
                }), e.onResize(t => {
                    e.style.left = this.sysInfo.windowWidth - t.width >> 1, e.style.top = this.sysInfo.windowHeight - t.height - (1400 < Laya.stage.height ? 20 : 0);
                }), this.bannerAdArr.push(e), this.bannerShowNumArr.push(0);
            }
        }
        static preLoadBanner(t) {
            let e = Laya.Browser.window.wx.createBannerAd({
                adUnitId: this.bannerIdArr[t],
                style: {
                    left: 0,
                    top: 0,
                    width: 200
                }
            });
            e.onError(() => {
                e.destroy(), this.bannerAdArr[t] = null;
            }), e.onResize(t => {
                e.style.left = this.sysInfo.windowWidth - t.width >> 1, e.style.top = this.sysInfo.windowHeight - t.height - (1400 < Laya.stage.height ? 20 : 0);
            }), this.bannerAdArr[t] = e;
        }
        static isTwinsCustomAdReady() {
            return !(!this.customInterstitialArr[0] && !this.customInterstitialArr[1]);
        }
        static isSingleCustomAdReady() {
            return !!this.customInterstitialArr[2];
        }
        static preLoadCustomInterstitialAd() {
            this.showTwinsCustomInterstitial({
                preLoad: !0
            }), this.showCustomInterstitial({
                preLoad: !0
            });
        }
        static showBanner(t = 0, e = !1) {
            if (0 != this.bannerAdArr.length) {
                var i = Date.now();
                if (!(!e && i - this.bannerShowTime < 1e3 * this.bannerRefreshTime && this.isBanner || e && i - this.bannerShowTime < .5 * this.bannerRefreshTime * 1e3)) {
                    if (this.hideBanner(), this.bannerAdIndex++, this.bannerAdIndex %= this.bannerAdArr.length, 
                    !this.bannerAdArr[this.bannerAdIndex]) {
                        this.bannerAdIndex;
                        this.preLoadBanner(this.bannerAdIndex), this.bannerAdIndex++, this.bannerAdIndex %= this.bannerAdArr.length;
                        e = this.getNextBannerIndex(this.bannerAdIndex);
                        if (-1 == e) return;
                        this.bannerAdIndex = e;
                    }
                    this.bannerAdArr[this.bannerAdIndex].show(), this.bannerShowNumArr[this.bannerAdIndex]++, 
                    this.bannerShowTime = i, this.isBanner = !0;
                }
            }
        }
        static getNextBannerIndex(t) {
            let e = t + 1;
            for (e %= this.bannerIdArr.length; e != t; ) {
                if (this.bannerAdArr[e]) return e;
                e++, e %= this.bannerIdArr.length;
            }
            return -1;
        }
        static hideBanner(t = 0) {
            this.isBanner && 0 != this.bannerAdArr.length && this.bannerAdArr[this.bannerAdIndex] && (this.bannerAdArr[this.bannerAdIndex].hide(), 
            this.isBanner = !1, this.bannerShowNumArr[this.bannerAdIndex] >= this.bannerReloadNum && (this.bannerShowNumArr[this.bannerAdIndex] = 0, 
            this.bannerAdArr[this.bannerAdIndex].destroy(), this.bannerAdArr[this.bannerAdIndex] = null, 
            this.preLoadBanner(this.bannerAdIndex)));
        }
        static showCurBanner() {
            this.hideCurBanner();
            var t = Date.now();
            this.bannerShowTime = t, this.bannerAdIndex++, this.bannerAdIndex %= this.bannerIdArr.length, 
            this.bannerAdArr[this.bannerAdIndex] ? this.bannerAdArr[this.bannerAdIndex].show() : -1 != (t = this.getNextBannerIndex(this.bannerAdIndex)) && (this.bannerAdIndex = t, 
            this.bannerAdArr[t].show()), this.isBanner = !0;
        }
        static hideCurBanner() {
            this.isBanner && (this.bannerAdArr[this.bannerAdIndex] && this.bannerAdArr[this.bannerAdIndex].hide(), 
            this.isBanner = !1);
        }
        static showCustomInterstitial(s = null) {
            if (!this.isCustomInterstitial && Laya.Browser.onMiniGame) {
                if (this.customInterstitialArr[2]) return s && s.preLoad ? void 0 : (this.customInterstitialArr[2].show(), 
                void (this.isCustomInterstitial = !0));
                let t, e, i;
                i = Laya.stage.width > Laya.stage.height ? (t = this.getNativeX(.4 * Laya.stage.width), 
                e = this.getNativeX(.6 * Laya.stage.width * .5), this.getNativeY(125)) : (t = this.getNativeX(.8 * Laya.stage.width), 
                e = this.getNativeX(Laya.stage.width * (1 - .8) * .5), this.getNativeY(.25 * Laya.stage.height));
                let a = Laya.Browser.window.wx.createCustomAd({
                    adUnitId: c.customInterstitialIdArr[this.customInterstitialIdIndex],
                    adIntervals: 30,
                    style: {
                        width: t,
                        left: e,
                        top: i
                    }
                });
                this.customInterstitialIdIndex++, this.customInterstitialIdIndex %= c.customInterstitialIdArr.length, 
                a.onError(() => {
                    this.customInterstitialArr[2] = null, a.destroy(), Laya.timer.once(1e3, this, this.preLoadCustomInterstitialAd);
                }), this.customInterstitialArr[2] = a, s && s.preLoad || (a.show(), this.isCustomInterstitial = !0);
            }
        }
        static showTwinsCustomInterstitial(i = null) {
            if (!this.isCustomInterstitial && Laya.Browser.onMiniGame) {
                var a = [ .1 * this.sysInfo.windowWidth, .5 * this.sysInfo.windowWidth ], s = this.getNativeY(70), r = .4 * this.sysInfo.windowWidth;
                for (let e = 0; e < a.length; e++) if (this.customInterstitialArr[e]) i && i.preLoad || this.customInterstitialArr[e].show(); else {
                    let t = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: c.customInterstitialIdArr[this.customInterstitialIdIndex],
                        adIntervals: 30,
                        style: {
                            width: r,
                            left: a[e],
                            top: s
                        }
                    });
                    this.customInterstitialIdIndex++, this.customInterstitialIdIndex %= c.customInterstitialIdArr.length, 
                    t.onError(() => {
                        this.customInterstitialArr[e] = null, t.destroy(), Laya.timer.once(1e3, this, this.preLoadCustomInterstitialAd);
                    }), this.customInterstitialArr[e] = t, i && i.preLoad || t.show();
                }
                i && i.preLoad || (this.isCustomInterstitial = !0);
            }
        }
        static hideCustomInterstitial(t = 0) {
            if (this.isCustomInterstitial) {
                for (let t = 0; t < this.customInterstitialArr.length; t++) this.customInterstitialArr[t] && this.customInterstitialArr[t].hide && this.customInterstitialArr[t].hide();
                this.isCustomInterstitial = !1;
            }
        }
        static showVCustomWithContainer(i, t = 0) {
            if (!this.isVCustom && Laya.Browser.onMiniGame) {
                let e = [];
                for (let t = 0; t < i.length; t++) {
                    var a;
                    i[t] ? (a = i[t].parent.localToGlobal(new Laya.Point(i[t].x, i[t].y)), e.push(a)) : e.push(null);
                }
                this.showVCustomWithPositionArr(e);
            }
        }
        static showVCustomWithPositionArr(i, t = 0) {
            if (!this.isVCustom && (this.isVCustom = !0, Laya.Browser.onMiniGame)) for (let e = 0; e < i.length; e++) if (i[e]) if (i[e] && this.vCustomArr[e]) this.vCustomArr[e].show(); else {
                var a = i[e];
                let t = Laya.Browser.window.wx.createCustomAd({
                    adUnitId: c.vCustomIdArr[this.vCustomIdIndex],
                    adIntervals: 30,
                    style: {
                        left: this.getNativeX(a.x),
                        top: this.getNativeY(a.y)
                    }
                });
                if (!t) return;
                this.vCustomArr[e] = t, t.onError(() => {
                    this.vCustomArr[e] = null, t.destroy();
                }), t.show(), this.vCustomIdIndex++, this.vCustomIdIndex %= c.vCustomIdArr.length;
            }
        }
        static hideVCustom(t = 0) {
            if (this.isVCustom) {
                this.isVCustom = !1;
                for (let t = 0; t < this.vCustomArr.length; t++) this.vCustomArr[t] && this.vCustomArr[t].hide && this.vCustomArr[t].hide();
            }
        }
        static showSCustomWithContainer(i) {
            if (!this.isSCustom && 0 != c.sCustomIdArr.length && Laya.Browser.onMiniGame) {
                let e = [];
                for (let t = 0; t < i.length; t++) {
                    var a;
                    i[t] ? (a = i[t].parent.localToGlobal(new Laya.Point(i[t].x, i[t].y)), e.push(a)) : e.push(null);
                }
                this.showSCustomWithPositionArr(e);
            }
        }
        static showSCustomWithPositionArr(i) {
            if (0 != c.sCustomIdArr.length && !this.isSCustom && (this.isSCustom = !0, Laya.Browser.onMiniGame)) for (let e = 0; e < i.length; e++) if (i[e]) if (i[e] && this.sCustomArr[e]) this.sCustomArr[e].show(); else {
                var a = i[e];
                let t = Laya.Browser.window.wx.createCustomAd({
                    adUnitId: c.sCustomIdArr[this.sCustomIdIndex],
                    adIntervals: 30,
                    style: {
                        left: this.getNativeX(a.x),
                        top: this.getNativeY(a.y)
                    }
                });
                if (!t) return;
                this.sCustomArr[e] = t, t.onError(() => {
                    this.sCustomArr[e] = null, t.destroy();
                }), t.show(), this.sCustomIdIndex++, this.sCustomIdIndex %= c.sCustomIdArr.length;
            }
        }
        static hideSCustom(t = 0) {
            if (this.isSCustom) {
                this.isSCustom = !1;
                for (let t = 0; t < this.sCustomArr.length; t++) this.sCustomArr[t] && this.sCustomArr[t].hide && this.sCustomArr[t].hide();
            }
        }
        static showFlashSCustomWithPositionArr(i) {
            if (0 != c.flashSCustomIdArr.length && !this.isFlashSCustom && (this.isFlashSCustom = !0, 
            Laya.Browser.onMiniGame)) for (let e = 0; e < i.length; e++) if (i[e]) if (i[e] && this.flashSCustomArr[e]) this.flashSCustomArr[e].show(); else {
                var a = i[e];
                let t = Laya.Browser.window.wx.createCustomAd({
                    adUnitId: c.flashSCustomIdArr[this.flashSCustomIdIndex],
                    style: {
                        left: this.getNativeX(a.x),
                        top: this.getNativeY(a.y)
                    }
                });
                if (!t) return;
                this.flashSCustomArr[e] = t, t.onError(() => {
                    this.flashSCustomArr[e] = null, t.destroy();
                }), t.show(), this.flashSCustomIdIndex++, this.flashSCustomIdIndex %= c.flashSCustomIdArr.length;
            }
        }
        static hideFlashSCustom(t = 0) {
            if (this.isFlashSCustom) {
                this.isFlashSCustom = !1;
                for (let t = 0; t < this.flashSCustomArr.length; t++) this.flashSCustomArr[t] && this.flashSCustomArr[t].hide && this.flashSCustomArr[t].hide();
            }
        }
        static showHCustom() {
            if (Laya.Browser.onMiniGame) {
                let t = [];
                t.push(new Laya.Point(.5 * (Laya.stage.width - 300 / this.sysInfo.windowWidth * Laya.stage.width), Laya.stage.height - 120 / this.sysInfo.windowHeight * Laya.stage.height)), 
                this.showHCustomWithPositionArr(t);
            }
        }
        static showHCustomWithPositionArr(i = null) {
            if (0 != c.sCustomIdArr.length && (this.hideHCustom(), Laya.Browser.onMiniGame)) if (this.hCustomArr[0]) this.hCustomArr[0].show(); else for (let e = 0; e < i.length; e++) {
                var a = i[e];
                let t = Laya.Browser.window.wx.createCustomAd({
                    adUnitId: c.hCustomIdArr[this.hCustomIdIndex],
                    adIntervals: 30,
                    style: {
                        left: this.getNativeX(a.x),
                        top: this.getNativeY(a.y)
                    }
                });
                if (!t) return;
                this.hCustomArr[0] = t, t.onError(() => {
                    t.destroy(), this.hCustomArr[0] = null;
                }), t.show(), this.hCustomIdIndex++, this.hCustomIdIndex %= c.hCustomIdArr.length;
            }
        }
        static hideHCustom(t = 0) {
            for (let t = 0; t < this.hCustomArr.length; t++) this.hCustomArr[t] && this.hCustomArr[t].hide && this.hCustomArr[t].hide();
        }
        static showAdView(t, e, i = {
            boxType: p.BOX_TYPE_BANNER
        }) {
            let a = this.viewPool[t];
            if (!a) switch (t) {
              case this.VIEW_TYPE_HOT:
                if (!this.isHotOn) return void e(!1);
                a = this.viewPool[t] = new l();
                break;

              case this.VIEW_TYPE_BOX:
                if (!i || !i.boxType) throw new Error("缺少参数，例如{boxType:QxWxSDK.BOX_TYPE_GRID}");
                if (!this.isGridBoxOn && i.boxType == this.BOX_TYPE_GRID) return void e(!1);
                if (!this.isBannerBoxOn && i.boxType == this.BOX_TYPE_BANNER) return void e(!1);
                a = this.viewPool[t] = new d();
            }
            this.adContainer.addChild(a), a.show(e, i);
        }
        static showBannerBtn(t) {
            var e;
            this.isBannerBtnOn && (this.isInBannerBtn = !0, t.oy || (t.oy = t.y), e = t.parent.globalToLocal(new Laya.Point(0, Laya.stage.height - 150)), 
            t.y = e.y, t.onDisable = (() => {
                this.isInBannerBtn = !1, this.onBannerBtn(t);
            }), this.onBannerHandler());
        }
        static onBannerHandler() {
            this.isInBannerBtn && (p.isBanner ? p.hideCurBanner() : p.showCurBanner(), Laya.timer.once(500 + 500 * Math.random(), this, this.onBannerHandler));
        }
        static onBannerBtn(t) {
            this.isInBannerBtn && (this.showBanner(), t.y = t.oy);
        }
        static cancelShowBannerBtn() {
            this.isInBannerBtn = !1, Laya.timer.clear(this, this.onBannerBtn), Laya.timer.clear(this, this.onBannerHandler);
        }
        static createVideoAndInterstitial() {
            Laya.Browser.onMiniGame && (this.videoAd = Laya.Browser.window.wx.createRewardedVideoAd({
                adUnitId: c.videoIdArr[this.videoIdIndex]
            }), this.videoAd.onError(t => {
                this.videoCallback && this.videoCallback(!1), this.videoCallback = null, this.videoIdIndex++, 
                this.videoIdIndex %= c.videoIdArr.length;
                var e = Date.now();
                e - this.videoPreTime < this.videoReloadTime || (this.videoPreTime = e, Laya.Browser.window.wx.createRewardedVideoAd({
                    adUnitId: c.videoIdArr[this.videoIdIndex]
                }));
            }), this.videoAd.onClose(t => {
                t && t.isEnded ? (this.videoCallback && this.videoCallback(!0), this.videoCallback = null) : Laya.Browser.window.wx.showModal({
                    title: "提示",
                    content: "观看完视频即可领取奖励",
                    confirmText: "好的",
                    cancelText: "取消",
                    success: t => {
                        t.confirm ? this.showVideo(this.videoCallback) : t.cancel && (this.videoCallback && this.videoCallback(!1), 
                        this.videoCallback = null);
                    }
                });
            }), 0 < c.interstitialIdArr.length && (this.interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                adUnitId: c.interstitialIdArr[this.interstitialIdIndex]
            }), this.interstitialAd.onError(() => {
                this.interstitialAd && (this.interstitialAd.destroy(), this.interstitialAd = null), 
                this.interstitialIdIndex++, this.interstitialIdIndex %= c.interstitialIdArr.length;
            })));
        }
        static showInterstitial() {
            this.interstitialAd || (this.interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                adUnitId: c.interstitialIdArr[this.interstitialIdIndex]
            }), this.interstitialAd.onError(() => {
                this.interstitialAd && (this.interstitialAd.destroy(), this.interstitialAd = null), 
                this.interstitialIdIndex++, this.interstitialIdIndex %= c.interstitialIdArr.length;
            })), this.interstitialAd.show();
        }
        static showVideo(t) {
            Laya.Browser.onMiniGame && this.videoAd ? (this.videoCallback = t, this.videoAd.load().then(() => this.videoAd.show().then(() => {})).catch(t => {
                this.videoCallback && this.videoCallback(!1), this.videoCallback = null;
            })) : t && t(!1);
        }
        static getNativeX(t) {
            return this.sysInfo ? this.sysInfo.windowWidth * t / Laya.stage.width : t;
        }
        static getNativeY(t) {
            return this.sysInfo ? this.sysInfo.windowHeight * t / Laya.stage.height : t;
        }
        static getLayaX(t) {
            return this.sysInfo ? t / this.sysInfo.windowWidth * Laya.stage.width : t;
        }
        static getLayaY(t) {
            return this.sysInfo ? t / this.sysInfo.windowHeight * Laya.stage.height : t;
        }
        static beforeFirstLoading(t) {
            Laya.timer.loop(1e3 * this.littleBannerRefleshTime, this, this.onLittleBanner), 
            t();
        }
        static onLittleBanner() {
            if (Laya.Browser.onMiniGame && this.isLittleBannerOn) {
                this.littleBannerAd && (this.littleBannerAd.destroy(), this.littleBannerAd = null);
                let e = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: this.littleBannerId,
                    style: {
                        left: 0,
                        top: 0,
                        width: 200
                    }
                });
                e.onError(() => {}), e.onResize(t => {
                    e.style.left = 2 - t.width, e.style.top = 2 - t.height;
                }), this.littleBannerAd = e, this.littleBannerAd.show();
            }
        }
        static enterHomePage(t) {
            var e = Date.now() - this.preloadTime;
            e >= this.preloadAdTime ? (this.createVideoAndInterstitial(), this.showAdView(this.VIEW_TYPE_HOT, () => {
                this.showAdView(this.VIEW_TYPE_BOX, t, {
                    boxType: this.BOX_TYPE_GRID
                });
            })) : Laya.timer.once(this.preloadAdTime - e, this, () => {
                this.createVideoAndInterstitial(), this.showAdView(this.VIEW_TYPE_HOT, () => {
                    this.showAdView(this.VIEW_TYPE_BOX, t, {
                        boxType: this.BOX_TYPE_GRID
                    });
                });
            });
        }
        static enterGamePage(t) {
            this.showAdView(this.VIEW_TYPE_HOT, () => {
                this.showAdView(this.VIEW_TYPE_BOX, t, {
                    boxType: this.BOX_TYPE_BANNER
                });
            });
        }
        static quitGamePage(t) {
            this.showAdView(this.VIEW_TYPE_HOT, () => {
                this.showAdView(this.VIEW_TYPE_BOX, t, {
                    boxType: this.BOX_TYPE_GRID
                });
            });
        }
        static onGamingAd() {
            this.isGamingAd || (this.isGamingAd = !0, this.showAdView(this.VIEW_TYPE_HOT, () => {
                this.showAdView(this.VIEW_TYPE_BOX, () => {
                    this.showBanner(), Laya.timer.clear(this, this.onGamingAd), Laya.timer.loop(1e3 * this.gameAutoAdTime, this, this.onGamingAd), 
                    this.isGamingAd = !1;
                }, {
                    boxType: this.BOX_TYPE_BANNER
                });
            }));
        }
        static gameStart() {
            this.isGameAutoAdOn && (this.isGamingAd = !1, Laya.timer.loop(1e3 * this.gameAutoAdTime, this, this.onGamingAd));
        }
        static gameEnd() {
            Laya.timer.clear(this, this.onGamingAd), this.isGamingAd = !1;
        }
        static setGameEndRewardButton(t) {
            this.showBannerBtn(t);
        }
        static backToHomePage(t) {
            this.showAdView(this.VIEW_TYPE_HOT, () => {
                this.showAdView(this.VIEW_TYPE_BOX, t, {
                    boxType: this.BOX_TYPE_BANNER
                });
            });
        }
        static isInAdScenes() {
            if (!Laya.Browser.onMiniGame) return !0;
            if ("2" == Laya.LocalStorage.getItem("wuwu")) return !0;
            let t;
            Laya.Browser.onMiniGame && (t = Laya.Browser.window.wx.getLaunchOptionsSync());
            let e = !1;
            return t && t.query && "debug" == t.query.test ? (Laya.LocalStorage.setItem("wuwu", "2"), 
            !0) : (t && t.query && "qianxue" == t.query.plat && (e = !0), !!e && (!(!t || -1 == [ 1035, 1045, 1046, 1067, 1068, 1084, 1095, 1097, 1100, 1144, 1152, 1176, 1189, 1191, 1197, 1198, 1206, 1216 ].indexOf(t.scene)) && (e = !0, 
            e && Laya.LocalStorage.setItem("wuwu", "2"), e)));
        }
    }
    p.adContainer = null, p.enable = !0, p.topRightBannerId = "", p.bannerIdArr = [], 
    p.bannerAdArr = [], p.bannerShowNumArr = [], p.bannerReloadNum = 3, p.bannerAdIndex = 0, 
    p.interstitialIdIndex = 0, p.customInterstitialIdIndex = 0, p.customInterstitialArr = [ null, null, null ], 
    p.vCustomIdIndex = 0, p.vCustomArr = [ null, null ], p.sCustomIdIndex = 0, p.sCustomArr = [ null, null ], 
    p.flashSCustomIdIndex = 0, p.flashSCustomArr = [ null, null ], p.hCustomIdIndex = 0, 
    p.hCustomArr = [ null ], p.isMainSwitchOn = !1, p.isHotOn = !1, p.hotClickNum = 1, 
    p.isHotBannerOn = !1, p.hotBannerOnType = 1, p.isGridBoxVideoOn = !0, p.isGridBoxOn = !1, 
    p.isBannerBoxOn = !1, p.isBannerBtnOn = !1, p.isBannerRefresh = !0, p.bannerRefreshTime = 30, 
    p.isLittleBannerOn = !1, p.littleBannerRefleshTime = 30, p.isGameAutoAdOn = !1, 
    p.gameAutoAdTime = 30, p.isGamingAd = !1, p.cityArr = [], p.videoIdIndex = 0, p.isBanner = !1, 
    p.bannerShowTime = 0, p.isCustomInterstitial = !1, p.isVCustom = !1, p.isSCustom = !1, 
    p.isHCustom = !1, p.isFlashSCustom = !1, p.viewPool = {}, p.VIEW_TYPE_HOT = "view_type_hot", 
    p.VIEW_TYPE_BOX = "view_type_box", p.BOX_TYPE_GRID = "box_type_grid", p.BOX_TYPE_BANNER = "box_type_banner", 
    p.preloadAdTime = 0, p.preloadTime = 0, p.isInBannerBtn = !1, p.videoReloadTime = 3e3, 
    p.videoPreTime = 0;
    class m extends n {
        constructor() {
            if (super(), this.bannerIdIndex = 0, this.videoIndex = 0, this.interstitialIdIndex = 0, 
            this.needAuth = !1, this.customArr = [], this.isUnCustomInterstitalAd = !1, this.isUnCustomInterstitalAd2 = !1, 
            this.customInterstitialIndex = 0, this.customIndex = 0, this.bannerIdArr = [ "adunit-193dd1ee4c982519", "adunit-318a49d683258226", "adunit-488d20270e730d2b", "adunit-de085f8fb773a5ed", "adunit-b66c3b1a718988f0" ], 
            this.videoIdArr = [ "adunit-47ec1f516c09a8ac", "adunit-11e590ed407d9c9a" ], this.interstitialIdArr = [ "adunit-67e401b12f282b46", "adunit-1391eea3f25eb843" ], 
            this.customInterstitialIdArr = [ "adunit-6703baaf2e5ad974", "adunit-5ebb449b852df1fb" ], 
            this.sCustomIdArr = [ "adunit-c5fcdb719ccc3062", "adunit-aacb0f245eed1da9" ], this.vCustomIdArr = [ "adunit-15e52a9028efd5e1", "adunit-11ced1fa50a799de" ], 
            this.t = 0, this.isVideo = !1, this.isHideCustomInterstitialAd = !1, Laya.Browser.onMiniGame) {
                let i = this;
                this.sysInfo = Laya.Browser.window.wx.getSystemInfoSync(), Laya.Browser.window.wx.showShareMenu({
                    withShareTicket: !0
                }), Laya.Browser.window.wx.onShareAppMessage(() => {
                    var t = A.getARandomShareInfo();
                    return {
                        title: t.title,
                        imageUrl: t.image
                    };
                }), Laya.Browser.window.wx.onShow(function(t) {
                    A._isShare && (A._isShare = !1, A._shareCallback && A._shareCallback(!0, "分享成功")), 
                    this.isVideo || s.event(s.GAME_SHOW, [ t ]);
                }), this.createNormalInterstitialAd(), !A.getLocal("userName") && this.needAuth && Laya.Browser.window.wx.getUserInfo({
                    success: function(t) {
                        var e = t.userInfo, i = e.nickName, e = e.avatarUrl;
                        A.setLocal("userName", i), A.setLocal("userImg", e), console.log(t);
                    },
                    fail: function(t) {
                        let e = Laya.Browser.window.wx.createUserInfoButton({
                            type: "text",
                            text: "",
                            style: {
                                left: 0,
                                top: 0,
                                width: i.sysInfo.windowWidth,
                                height: i.sysInfo.windowHeight,
                                lineHeight: 40,
                                backgroundColor: "#ffffff",
                                color: "#ffffff",
                                textAlign: "center",
                                fontSize: 16,
                                borderRadius: 4,
                                opacity: .1
                            }
                        });
                        e.onTap(t => {
                            t.userInfo && (A.setLocal("userName", t.userInfo.nickName), A.setLocal("userImg", t.userInfo.avatarUrl), 
                            e.hide());
                        });
                    }
                });
            }
        }
        createNormalInterstitialAd() {
            Laya.Browser.window.wx.createInterstitialAd && (this.interstitialIdIndex++, this.interstitialIdIndex %= this.interstitialIdArr.length, 
            this.interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                adUnitId: this.interstitialIdArr[this.interstitialIdIndex]
            }), this.interstitialAd.onError(() => {
                this.interstitialAd && (this.interstitialAd.destroy(), this.interstitialAd = null), 
                s.event("interstitial_ad_error", []);
            }));
        }
        showBannerAd() {
            let e = this;
            var t;
            Laya.Browser.onMiniGame && (45e3 < (t = Date.now()) - this.t && (this.bannerAd && this.bannerAd.destroy(), 
            this.bannerAd = null, this.t = t), this.bannerAd || (this.bannerAd = Laya.Browser.window.wx.createBannerAd({
                adUnitId: this.bannerIdArr[this.bannerIdIndex],
                adIntervals: 30,
                style: {
                    left: 0,
                    top: 0,
                    width: 200
                }
            }), this.bannerAd.onError(t => {
                this.bannerIdIndex++, this.bannerIdIndex %= this.bannerIdArr.length;
            }), this.bannerAd.onResize(t => {
                e.bannerAd && (e.bannerAd.style.left = e.sysInfo.windowWidth - t.width >> 1, e.bannerAd.style.top = e.sysInfo.windowHeight - t.height - (1400 < Laya.stage.height ? 20 : 0));
            })), this.bannerAd.show());
        }
        hideBannerAd() {
            Laya.Browser.onMiniGame && this.bannerAd && this.bannerAd.hide();
        }
        showVideoAd(t) {
            p.showVideo(t);
        }
        showInterstialAd() {
            if (Laya.Browser.onMiniGame) return this.interstitialAd ? void this.interstitialAd.show() : (this.createNormalInterstitialAd(), 
            void (this.interstitialAd && this.interstitialAd.show()));
        }
        showCustomAd(i, a = "custom_s") {
            if (Laya.Browser.onMiniGame && Laya.Browser.window.wx.createCustomAd) for (let e = 0; e < i.length; e++) {
                var s = i[e].parent.localToGlobal(new Laya.Point(i[e].x, i[e].y));
                let t = Laya.Browser.window.wx.createCustomAd({
                    adUnitId: this.getCustomId(a),
                    style: {
                        left: this.getSysX(s.x),
                        top: this.getSysY(s.y)
                    }
                });
                if (!t) return;
                this.customArr.push(t), t.onError = function(t) {}, t.show();
            }
        }
        hideCustomAd() {
            for (let t = 0; t < this.customArr.length; t++) this.customArr[t].destroy();
            this.customArr = [];
        }
        getSysX(t) {
            return this.sysInfo.windowWidth * t / Laya.stage.width;
        }
        getSysY(t) {
            return this.sysInfo.windowHeight * t / Laya.stage.height;
        }
        getCustomId(t) {
            t = t == m.CUSTOM_S ? this.sCustomIdArr : this.vCustomIdArr;
            return this.customIndex++, this.customIndex >= t.length && (this.customIndex = 0), 
            t[this.customIndex];
        }
        showCustomInterstitialAd() {
            if (Laya.Browser.onMiniGame && Laya.Browser.window.wx.createCustomAd) if (Laya.stage.height < Laya.stage.width) this.isUnCustomInterstitalAd = !1, 
            this.isUnCustomInterstitalAd2 = !1, this.customInterstitialAd || (this.customInterstitialAd = Laya.Browser.window.wx.createCustomAd({
                adUnitId: this.customInterstitialIdArr[this.customInterstitialIndex],
                adIntervals: 60,
                style: {
                    width: .4 * this.sysInfo.windowWidth,
                    left: .1 * this.sysInfo.windowWidth,
                    top: this.getSysY(125)
                }
            }), this.customInterstitialAd && this.customInterstitialAd.onError(t => {
                this.customInterstitialIndex++, this.customInterstitialIndex %= this.customInterstitialIdArr.length, 
                this.customInterstitialAd.destroy(), this.customInterstitialAd = null, this.isUnCustomInterstitalAd = !0, 
                this.isUnCustomInterstitalAd && this.isUnCustomInterstitalAd2 && this.showInterstialAd();
            })), this.customInterstitialAd2 || (this.customInterstitialIndex++, this.customInterstitialIndex %= this.customInterstitialIdArr.length, 
            this.customInterstitialAd2 = Laya.Browser.window.wx.createCustomAd({
                adUnitId: this.customInterstitialIdArr[this.customInterstitialIndex],
                adIntervals: 60,
                style: {
                    width: .4 * this.sysInfo.windowWidth,
                    left: .5 * this.sysInfo.windowWidth,
                    top: this.getSysY(125)
                }
            }), this.customInterstitialAd2 && this.customInterstitialAd2.onError(t => {
                this.customInterstitialIndex++, this.customInterstitialIndex %= this.customInterstitialIdArr.length, 
                this.customInterstitialAd2.destroy(), this.customInterstitialAd2 = null, this.isUnCustomInterstitalAd2 = !0, 
                this.isUnCustomInterstitalAd && this.isUnCustomInterstitalAd2 && this.showInterstialAd();
            })), this.hideCustomAd(), this.customInterstitialAd.show(), this.customInterstitialAd2.show(), 
            this.isHideCustomInterstitialAd = !1; else {
                if (!this.customInterstitialAd) {
                    if (this.customInterstitialAd = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: this.customInterstitialIdArr[this.customInterstitialIndex],
                        adIntervals: 60,
                        style: {
                            width: .8 * this.sysInfo.windowWidth,
                            left: .1 * this.sysInfo.windowWidth,
                            top: this.getSysY(290)
                        }
                    }), !this.customInterstitialAd) return;
                    this.customInterstitialAd.onError(t => {
                        this.customInterstitialIndex++, this.customInterstitialIndex %= this.customInterstitialIdArr.length, 
                        this.customInterstitialAd.destroy(), this.customInterstitialAd = null, this.showInterstialAd();
                    });
                }
                this.hideCustomAd(), this.customInterstitialAd.show(), this.isHideCustomInterstitialAd = !1;
            }
        }
        hideCustomInterstitialAd() {
            this.customInterstitialAd && !this.isHideCustomInterstitialAd && (this.customInterstitialAd.hide(), 
            this.isHideCustomInterstitialAd = !0, this.customInterstitialAd2 && this.customInterstitialAd2.hide());
        }
    }
    m.CUSTOM_V = "custom_v", m.CUSTOM_S = "custom_s";
    class w {
        constructor() {}
    }
    w.isAndroidNativeApp = !1, w.BGM = "res/sound/bgm.mp3", w.BUTTON = "res/sound/button.mp3", 
    w.CAR_FORWARD = "res/sound/AccelerationHigh_baofeng.mp3", w.CAR_BACK = "res/sound/AccelerationLow_baofeng.mp3", 
    w.ATTACK = "res/sound/Bonecrush_baofeng.mp3", w.BRAKE = "res/sound/brake.mp3", w.HIT = "res/sound/carcrash01.mp3", 
    w.ENGINE = "res/sound/engine.mp3", w.EXPLOSION = "res/sound/Explosion_baofeng.mp3", 
    w.ZHONGQUAN = "res/sound/FireExplosion7_baofeng.mp3", w.POLICE = "res/sound/police.mp3", 
    w.HURT = "res/sound/robot_hit.mp3", w.RUN = "res/sound/run.mp3", w.WALK = "res/sound/walk1.mp3", 
    w.SHOOT = "res/sound/shot.mp3", w.BIANSHEN = "res/sound/transformation.mp3", w.ZHUANWAN = "res/sound/Skid_baofeng.mp3", 
    w.TASK_GET = "res/sound/get.mp3", w.TASK_COMPLETE = "res/sound/finally.mp3", w.TASK_REWARD = "res/sound/finish.mp3";
    class I extends n {
        constructor() {
            if (super(), this.customArr = [], this.bannerId = "0d76d509a55ec3c49cca73ff47e62a76", 
            this.videoId = "8d2cd84b03c31dd3e1896d729e647569", this.interstitialId = "3f0dd4cce9d92fa23775018d74d73a27", 
            this.customId = "98b5ddf0b739c071189086758705d28f", this.boxId = "e50f1614b6adb51716bca3e5e5bd5daa", 
            this.needAuth = !1, this.align = "center", this.isLoadBanner = !1, this.isUserSetPos = !1, 
            this.bannerX = 0, this.bannerY = 0, this.isAppBoxReady = !1, this.preTime = 1e19, 
            this.preBannerId = "", this.isVideo = !1, Laya.Browser.onQQMiniGame) {
                let i = this;
                this.sysInfo = Laya.Browser.window.wx.getSystemInfoSync(), Laya.Browser.window.wx.showShareMenu({
                    withShareTicket: !0,
                    menus: [ "shareAppMessage", "shareTimeline" ]
                }), Laya.Browser.window.wx.onShareAppMessage(() => {
                    var t = A.getARandomShareInfo();
                    return {
                        title: t.title,
                        imageUrl: t.image
                    };
                }), Laya.Browser.window.wx.onShareTimeline && Laya.Browser.window.wx.onShareTimeline(() => {
                    var t = A.getARandomShareInfo();
                    return {
                        title: t.title,
                        imageUrl: t.image
                    };
                }), Laya.Browser.window.wx.onShow(function(t) {
                    A._isShare && (A._isShare = !1, A._shareCallback && A._shareCallback(!0, "分享成功")), 
                    this.isVideo || s.event(s.GAME_SHOW, [ t ]);
                }), this.videoAd = Laya.Browser.window.wx.createRewardedVideoAd({
                    adUnitId: this.videoId
                }), this.videoAd.onError(t => {
                    i.videoCallback && i.videoCallback(!1, "暂无视频"), i.videoCallback = null, this.isVideo = !1;
                }), this.videoAd.onClose(t => {
                    t && t.isEnded ? i.videoCallback && (i.videoCallback(!0), A.playMusic(w.BGM)) : i.videoCallback && (i.videoCallback(!1, "视频未播放完成，无法获得奖励"), 
                    A.playMusic(w.BGM)), i.videoCallback = null, this.isVideo = !1;
                }), Laya.Browser.window.wx.createInterstitialAd && (this.interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                    adUnitId: this.interstitialId
                })), Laya.Browser.window.qq.createAppBox && (this.appBox = Laya.Browser.window.qq.createAppBox({
                    adUnitId: i.boxId
                }), this.appBox.load().then(() => {
                    i.isAppBoxReady = !0, s.event("game_box", []);
                })), !A.getLocal("userName") && this.needAuth && Laya.Browser.window.wx.getUserInfo({
                    success: function(t) {
                        var e = t.userInfo, t = e.nickName, e = e.avatarUrl;
                        A.setLocal("userName", t), A.setLocal("userImg", e);
                    },
                    fail: function(t) {
                        let e = Laya.Browser.window.wx.createUserInfoButton({
                            type: "text",
                            text: "",
                            style: {
                                left: 0,
                                top: 0,
                                width: i.sysInfo.windowWidth,
                                height: i.sysInfo.windowHeight,
                                lineHeight: 40,
                                backgroundColor: "#ffffff",
                                color: "#ffffff",
                                textAlign: "center",
                                fontSize: 16,
                                borderRadius: 4,
                                opacity: .1
                            }
                        });
                        e.onTap(t => {
                            t.userInfo && (A.setLocal("userName", t.userInfo.nickName), A.setLocal("userImg", t.userInfo.avatarUrl), 
                            e.hide());
                        });
                    }
                });
            }
        }
        showBannerAd(t = !0, e = "center") {
            this.isUserSetPos = !1, this.align = e;
            let i = this;
            if (Laya.Browser.onQQMiniGame) {
                e = new Date().getTime();
                if (45e3 < e - this.preTime && (t = !0), this.preTime = e, !t && this.bannerAd) return this.bannerAd.show(), 
                void (this.isLoadBanner && (this.isUserSetPos ? (i.bannerAd.style.left = i.bannerX, 
                i.bannerAd.style.top = i.bannerY) : "center" == this.align ? i.bannerAd.style.left = i.sysInfo.windowWidth - i.bannerInfo.width >> 1 : "right" == this.align ? i.bannerAd.style.left = i.sysInfo.windowWidth - this.bannerInfo.width : i.bannerAd.style.left = 0));
                this.bannerAd && t && (this.bannerAd.destroy(), this.isLoadBanner = !1), this.bannerAd = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: this.bannerId,
                    style: {
                        left: 0,
                        top: 0,
                        width: 200
                    }
                }), this.bannerAd.onError(t => {}), this.bannerAd.onResize(t => {
                    i.isLoadBanner = !0, i.bannerInfo = t, i.bannerAd && (i.isUserSetPos ? (i.bannerAd.style.left = i.bannerX, 
                    i.bannerAd.style.top = i.bannerY) : ("center" == i.align ? i.bannerAd.style.left = i.sysInfo.windowWidth - t.width >> 1 : "right" == i.align ? i.bannerAd.style.left = i.sysInfo.windowWidth - t.width : i.bannerAd.style.left = 0, 
                    i.bannerAd.style.top = i.sysInfo.windowHeight - t.height - (Laya.stage.width, 0)));
                }), this.bannerAd.show();
            }
        }
        showBannerAdById(t, e = !0, i = "center") {
            this.preBannerId != t && (e = !0), this.preBannerId = t, this.isUserSetPos = !1, 
            this.align = i;
            let a = this;
            if (Laya.Browser.onQQMiniGame) {
                i = new Date().getTime();
                if (45e3 < i - this.preTime && (e = !0), this.preTime = i, !e && this.bannerAd) return this.bannerAd.show(), 
                void (this.isLoadBanner && (this.isUserSetPos ? (a.bannerAd.style.left = a.bannerX, 
                a.bannerAd.style.top = a.bannerY) : "center" == this.align ? a.bannerAd.style.left = a.sysInfo.windowWidth - a.bannerInfo.width >> 1 : "right" == this.align ? a.bannerAd.style.left = a.sysInfo.windowWidth - this.bannerInfo.width : a.bannerAd.style.left = 0));
                this.bannerAd && e && (this.bannerAd.destroy(), this.isLoadBanner = !1), this.bannerAd = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: t,
                    style: {
                        left: 0,
                        top: 0,
                        width: 200
                    }
                }), this.bannerAd.onError(t => {}), this.bannerAd.onResize(t => {
                    a.isLoadBanner = !0, a.bannerInfo = t, a.bannerAd && (a.isUserSetPos ? (a.bannerAd.style.left = a.bannerX, 
                    a.bannerAd.style.top = a.bannerY) : ("center" == a.align ? a.bannerAd.style.left = a.sysInfo.windowWidth - t.width >> 1 : "right" == a.align ? a.bannerAd.style.left = a.sysInfo.windowWidth - t.width : a.bannerAd.style.left = 0, 
                    a.bannerAd.style.top = a.sysInfo.windowHeight - t.height - (Laya.stage.width, 0)));
                }), this.bannerAd.show();
            }
        }
        hideBannerAd(t = !0) {
            Laya.Browser.onQQMiniGame && (this.bannerAd && t ? (this.bannerAd.destroy(), this.bannerAd = null) : this.bannerAd && this.bannerAd.hide());
        }
        showVideoAd(t) {
            if (!Laya.Browser.onQQMiniGame) return t && t(!1), void _t.showFlyTip("暂无视频");
            this.videoCallback = t;
            let e = this;
            this.isVideo = !0, this.videoAd.load().then(() => this.videoAd.show().then(() => {})).catch(t => {
                e.videoCallback && e.videoCallback(!1, "暂无视频"), e.videoCallback = null, this.isVideo = !1;
            });
        }
        showInterstialAd() {
            Laya.Browser.onQQMiniGame && this.interstitialAd && this.interstitialAd.show();
        }
        showCustomAd(i) {
            if (Laya.Browser.onQQMiniGame) {
                this.hideCustomAd();
                for (let e = 0; e < i.length; e++) {
                    if (!Laya.Browser.window.wx.createBlockAd) return;
                    console.log("oxy:", i[e].x, i[e].y), console.log("xy:", this.getSysX(i[e].x), this.getSysY(i[e].y));
                    let t = Laya.Browser.window.wx.createBlockAd({
                        adUnitId: this.customId,
                        size: 1,
                        style: {
                            left: this.getSysX(i[e].x),
                            top: this.getSysY(i[e].y)
                        },
                        orientation: "landscape"
                    });
                    this.customArr.push(t), t.onError = function(t) {}, t.show();
                }
            }
        }
        hideCustomAd() {
            for (let t = 0; t < this.customArr.length; t++) this.customArr[t].destroy();
            this.customArr = [];
        }
        setBannerPos(t, e) {
            this.isUserSetPos = !0, this.bannerX = this.sysInfo.windowWidth * t / Laya.stage.width, 
            this.bannerY = this.sysInfo.windowHeight * e / Laya.stage.height, this.isLoadBanner && this.bannerAd && (this.bannerAd.style.left = this.bannerX, 
            this.bannerAd.style.top = this.bannerY);
        }
        getSysX(t) {
            return this.sysInfo.windowWidth * t / Laya.stage.width;
        }
        getSysY(t) {
            return this.sysInfo.windowHeight * t / Laya.stage.height;
        }
        showAppBox() {
            if (this.hasAppBox()) return this.appBox.show();
        }
        hasAppBox() {
            return this.isAppBoxReady;
        }
    }
    I.ALIGN_CENTER = "center", I.ALIGN_LEFT = "left", I.ALIGN_RIGHT = "right";
    class A {
        constructor() {}
        static init(t) {
            switch (this.platFormType = t) {
              case n.WECHAT:
                this.instance = new m();
                break;

              case n.QQ:
                this.instance = new I();
            }
        }
        static getARandomShareInfo() {
            return {
                title: this.shareTitleArr[Math.floor(this.shareTitleArr.length * Math.random())],
                image: this.shareImageArr[Math.floor(this.shareImageArr.length * Math.random())]
            };
        }
        static getLocal(t) {
            t = this.appName + "_" + t;
            t = Laya.LocalStorage.getItem(t);
            if (!t) return null;
            t = JSON.parse(t);
            return t && (t.data || 0 == t.data || "0" == t.data) ? t.data : null;
        }
        static setLocal(t, e) {
            t = this.appName + "_" + t, Laya.LocalStorage.setItem(t, JSON.stringify({
                data: e
            }));
        }
        static showBannerAd(t = !0, e = "center") {
            this.instance.showBannerAd(t, e);
        }
        static hideBannerAd(t = !0) {
            this.instance.hideBannerAd(t);
        }
        static showVideoAd(t) {
            s.event("play_video", []), this.instance.showVideoAd(t);
        }
        static showInterstitialAd() {
            this.instance.showInterstialAd();
        }
        static setBannerPos(t, e) {
            this.instance.setBannerPos(t, e);
        }
        static updateScore(t, e) {
            (Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame) && Laya.Browser.window.wx.postMessage({
                type: "request",
                score: t,
                scoreType: e
            });
        }
        static request(t, e, i) {
            var a = "";
            if (e) {
                var s, a = "?", r = [];
                for (s in e) r.push(s + "=" + e[s]);
                a += r.join("&");
            }
            var o = new Laya.HttpRequest();
            o.http.timeout = 1e4, o.once(Laya.Event.COMPLETE, null, function(t) {
                i && i(JSON.parse(t), null);
            }), o.once(Laya.Event.ERROR, null, function(t) {
                i && i(null, t);
            }), o.on(Laya.Event.PROGRESS, null, function(t) {}), o.send(t + a, "", "get", "text");
        }
        static share(t = null) {
            (Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame) && (this._isShare = !0, this._shareCallback = t, 
            Laya.Browser.window.wx.shareAppMessage({
                title: A.shareTitleArr[Math.floor(A.shareTitleArr.length * Math.random())],
                imageUrl: A.shareImageArr[Math.floor(A.shareImageArr.length * Math.random())]
            }));
        }
        static isSound() {
            return 2 != A.getLocal("sound");
        }
        static isShake() {
            return 2 != A.getLocal("shake");
        }
        static setSound(t) {
            A.setLocal("sound", t ? 0 : 2), t ? this.playMusic(w.BGM) : Laya.SoundManager.stopMusic();
        }
        static shake() {
            this.isShake() && (Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame) && Laya.Browser.window.wx.vibrateLong({
                success: function(t) {},
                fail: function(t) {},
                complete: function(t) {}
            });
        }
        static shortShake() {
            this.isShake() && (Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame) && Laya.Browser.window.wx.vibrateShort && Laya.Browser.window.wx.vibrateShort({
                success: function(t) {},
                fail: function(t) {},
                complete: function(t) {}
            });
        }
        static playSound(e, i = 1, a = 1) {
            if (this.isSoundRepeatLimit && this.preSoundUrl == e) {
                var t = Date.now();
                if (t - this.soundTime < this.soundLimitTime) return;
                this.soundTime = t, this.preSoundUrl = e;
            }
            if (this.getConfigVal(this.CONFIG_SOUND, this.CONFIG_OPEN_VALUE) != this.CONFIG_CLOSE_VALUE && this.isSound() && e && "" != e) {
                w.isAndroidNativeApp && (e = this.mp3ToWav(e));
                let t = Laya.SoundManager.playSound(e, i);
                t && (t.volume = a);
            }
        }
        static playMusic(t) {
            this.getConfigVal(this.CONFIG_MUSIC, this.CONFIG_OPEN_VALUE) != this.CONFIG_CLOSE_VALUE && t && "" != t && this.isSound() && (w.isAndroidNativeApp && (t = this.mp3ToWav(t)), 
            A.bgm = t, Laya.SoundManager.setMusicVolume(.3), (t = Laya.SoundManager.playMusic(t, 0)) && (t.volume = .3));
        }
        static mp3ToWav(t) {
            return t.substring(0, t.length - 3) + "ogg";
        }
        static stopSound(t) {
            w.isAndroidNativeApp && (t = this.mp3ToWav(t)), Laya.SoundManager.stopSound(t);
        }
        static stopMusic(t) {
            Laya.SoundManager.stopMusic();
        }
        static getConfigVal(t, e) {
            t = this.getLocal(t);
            return t || e;
        }
        static isWuScene() {
            return !1;
        }
    }
    A.shareTitleArr = [ "机甲变形金刚超能战车，开放自由世界激战斗，模拟机器战士警察，在飞行和射击机器人游戏的帮助下，从邪恶的机器人拯救未来世界" ], 
    A.shareImageArr = [ "https://mmocgame.qpic.cn/wechatgame/gHyogdXBWicqgEdibic9ZY4DmBLkCmmmrJFNttpNDkfT9ribOPMg57yUQic7N0zntPCbP/0", "https://mmocgame.qpic.cn/wechatgame/gHyogdXBWicrstjwDXX6psnkqHOHWA21NqBCic0icb4GV5M0TCzgGOicb5picQQcPJGgG/0" ], 
    A.platFormType = "", A.appName = "jjbxzcmn", A.bgm = "", A._shareCallback = null, 
    A._isShare = !1, A.soundTime = 0, A.soundLimitTime = 100, A.preSoundUrl = "", A.isSoundRepeatLimit = !0, 
    A.CONFIG_SOUND = "config_sound", A.CONFIG_MUSIC = "config_music", A.CONFIG_CAMERA = "config_camera", 
    A.CONFIG_OPEN_VALUE = 1, A.CONFIG_CLOSE_VALUE = 2;
    class b {
        constructor() {}
        static alignToCenter(t) {
            t.x = Laya.stage.width - this.designWidth >> 1;
        }
        static scaleToFull(t) {
            t.scaleX = Laya.stage.width / this.designWidth;
        }
        static findAMesh(t, e) {
            let i = t;
            if (i.name == e && i.meshRenderer) return i;
            for (let t = 0; t < i.numChildren; t++) {
                var a = this.findAMesh(i.getChildAt(t), e);
                if (a) return a;
            }
            return null;
        }
        static findMeshArr(t, e, i, a = !1) {
            let s = t;
            (s.name == i || a && -1 != s.name.indexOf(i)) && s.meshRenderer && -1 == e.indexOf(s) && e.push(s);
            for (let t = 0; t < s.numChildren; t++) this.findMeshArr(s.getChildAt(t), e, i, a);
            return e;
        }
        static translate3dTo2d(t, e = null) {
            var i = new Laya.Vector3();
            let a = e || this.camera;
            return a.viewport.project(t, a.projectionViewMatrix, i), new Laya.Point(i.x / Laya.stage.clientScaleX, i.y / Laya.stage.clientScaleY);
        }
        static addMeshCollider(t) {
            let e = t.addComponent(Laya.PhysicsCollider), i = new Laya.MeshColliderShape();
            i.mesh = t.meshFilter.sharedMesh, e.colliderShape = i;
        }
        static random(t, e) {
            return t + (e - t) * Math.random();
        }
        static translateTargetRotation(t, e) {
            for (;180 < Math.abs(t.x - e.x); ) e.x += 360 * (t.x > e.x ? 1 : -1);
            for (;180 < Math.abs(t.y - e.y); ) e.y += 360 * (t.y > e.y ? 1 : -1);
            for (;180 < Math.abs(t.z - e.z); ) e.z += 360 * (t.z > e.z ? 1 : -1);
            return e;
        }
        static getAngle(t, e) {
            for (;180 < Math.abs(t - e); ) e += 360 * (e < t ? 1 : -1);
            return e;
        }
        static createColorPBRMaterail(t) {
            let e = new Laya.PBRStandardMaterial();
            return e.albedoColor = this.strToColorVector4(t), e;
        }
        static strToColorVector4(t, e = 1) {
            t = t.toLocaleLowerCase();
            let i = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
            var a = (16 * i.indexOf(t.substr(1, 1)) + i.indexOf(t.substr(2, 1))) / 255, s = (16 * i.indexOf(t.substr(3, 1)) + i.indexOf(t.substr(4, 1))) / 255, t = (16 * i.indexOf(t.substr(5, 1)) + i.indexOf(t.substr(6, 1))) / 255;
            return new Laya.Vector4(a, s, t, e);
        }
        static strToColorVector3(t) {
            t = t.toLocaleLowerCase();
            let e = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
            var i = (16 * e.indexOf(t.substr(1, 1)) + e.indexOf(t.substr(2, 1))) / 255, a = (16 * e.indexOf(t.substr(3, 1)) + e.indexOf(t.substr(4, 1))) / 255, t = (16 * e.indexOf(t.substr(5, 1)) + e.indexOf(t.substr(6, 1))) / 255;
            return new Laya.Vector3(i, a, t);
        }
        static test3dObjPos(i, a = .01) {
            Laya.stage.on(Laya.Event.KEY_DOWN, null, function(t) {
                let e = i.transform.localPosition.clone();
                switch (t.keyCode) {
                  case Laya.Keyboard.W:
                    e.z -= a;
                    break;

                  case Laya.Keyboard.S:
                    e.z += a;
                    break;

                  case Laya.Keyboard.A:
                    e.x -= a;
                    break;

                  case Laya.Keyboard.D:
                    e.x += a;
                    break;

                  case Laya.Keyboard.Z:
                    e.y += a;
                    break;

                  case Laya.Keyboard.X:
                    e.y -= a;
                }
                i.transform.localPosition = e, console.log(e);
            });
        }
        static test3dObjRot(i, a = 1) {
            Laya.stage.on(Laya.Event.KEY_DOWN, null, function(t) {
                let e = i.transform.localRotationEuler.clone();
                switch (t.keyCode) {
                  case Laya.Keyboard.W:
                    e.x += a;
                    break;

                  case Laya.Keyboard.S:
                    e.x -= a;
                    break;

                  case Laya.Keyboard.A:
                    e.y += a;
                    break;

                  case Laya.Keyboard.D:
                    e.y -= a;
                    break;

                  case Laya.Keyboard.Z:
                    e.z += a;
                    break;

                  case Laya.Keyboard.X:
                    e.z -= a;
                }
                i.transform.localRotationEuler = e, console.log(e);
            });
        }
        static getDailyValByKey(e, t = 0) {
            var i = new Date().getDate();
            let a = Laya.LocalStorage.getItem(this.generateKeyName(e) + "_" + i);
            if (!a) {
                a = t;
                for (let t = 1; t <= 31; t++) t != i && Laya.LocalStorage.removeItem(this.generateKeyName(e) + "_" + t);
                Laya.LocalStorage.setItem(this.generateKeyName(e) + "_" + i, a + "");
            }
            return a = Math.floor(a), a;
        }
        static autoIncreaseDailyValWithKey(t, e = 0) {
            let i = this.getDailyValByKey(t, e);
            e = new Date().getDate();
            i++, Laya.LocalStorage.setItem(this.generateKeyName(t) + "_" + e, i.toString());
        }
        static generateKeyName(t) {
            return this.gameName + "_" + t;
        }
        static autoIncreaseTotalWithKey(t, e = 0) {
            let i = this.getIncreaseTotalValWithKey(t, e);
            return i++, Laya.LocalStorage.setItem(this.generateKeyName(t), i.toString()), i;
        }
        static getIncreaseTotalValWithKey(t, e = 0) {
            let i = Laya.LocalStorage.getItem(this.generateKeyName(t));
            return i || (i = e, Laya.LocalStorage.setItem(this.generateKeyName(t), i + "")), 
            i = Math.floor(i), i;
        }
        static clearIncreaseTotalValWithKey(t, e = 0) {
            Laya.LocalStorage.setItem(this.generateKeyName(t), e + "");
        }
        static echoClass(t, e) {
            var i, a = Laya.loader.getRes(t);
            let s = 0, r = "", o = "\tprivate parse(data:any){\n";
            for (i in a) {
                if (0 == s) {
                    var n, h = a[i];
                    for (n in h) r += "\tpublic " + n + ":" + typeof h[n] + ";\n", o += "\t\tthis." + n + "=data." + n + ";\n";
                }
                s++;
            }
            o += "\t}\n}";
            e = "export default class " + e + "{\n";
            e += r, e += "\tconstructor(param:any){\n\t\tthis.parse(param);\n\t}\n", e += o, 
            console.log(e);
        }
        static cloneMaterial(e) {
            let i = e;
            if (i.meshRenderer && i.meshRenderer.materials) for (let t = 0; t < i.meshRenderer.materials.length; t++) i.meshRenderer.materials[t] = i.meshRenderer.materials[t].clone();
            if (i.meshRenderer && i.meshRenderer.material) i.meshRenderer.material = i.meshRenderer.material.clone(); else {
                let t = e;
                t.skinnedMeshRenderer && t.skinnedMeshRenderer.material && (t.skinnedMeshRenderer.material = t.skinnedMeshRenderer.material.clone());
            }
            for (let t = 0; t < e.numChildren; t++) this.cloneMaterial(e.getChildAt(t));
        }
        static getBezierPoints(e, i, a, s, r, o, t) {
            var n = t;
            let h = [];
            for (let t = 0; t < n; t++) {
                var l = t / n;
                h.push(new Laya.Point((1 - l) * (1 - l) * e + 2 * l * (1 - l) * a + l * l * r, (1 - l) * (1 - l) * i + 2 * l * (1 - l) * s + l * l * o));
            }
            return h;
        }
        static getWorldPoint(t) {
            var e = new Laya.Point(t.x, t.y);
            return e = t.parent.localToGlobal(e);
        }
        static getObj(t, e) {
            let i = e;
            var a = t.split(".");
            for (let t = 0; t < a.length; t++) i = i.getChildByName(a[t]);
            return i;
        }
        static shakeObj(t, e) {
            t.transform.localPositionX += e * (.5 - Math.random()), t.transform.localPositionY += e * (.5 - Math.random()), 
            t.transform.localPositionZ += e * (.5 - Math.random());
        }
    }
    b.gameName = "jjzc", b.designWidth = 1920, b.designHeight = 1080;
    class v extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.GameViewUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.bianshenBtn.on(Laya.Event.MOUSE_DOWN, this, this.onBianshenBtn), this.uiView.attackBtn.on(Laya.Event.MOUSE_DOWN, this, this.onAttackBtn), 
            this.uiView.jumpBtn.on(Laya.Event.MOUSE_DOWN, this, this.onJumpBtn), this.uiView.runBtn.on(Laya.Event.MOUSE_DOWN, this, this.onRunBtn), 
            this.uiView.kickBtn.on(Laya.Event.MOUSE_DOWN, this, this.onKickBtn), this.uiView.paodanBtn.on(Laya.Event.MOUSE_DOWN, this, this.onPaodanBtn), 
            this.uiView.zhongquanBtn.on(Laya.Event.MOUSE_DOWN, this, this.onZhongquanBtn), this.uiView.yaoshuiBtn.on(Laya.Event.CLICK, this, this.onYaoshuiBtn), 
            this.uiView.backBtn.on(Laya.Event.CLICK, this, this.onBackBtn), this.uiView.helpBtn.on(Laya.Event.CLICK, this, this.onHelpBtn), 
            this.uiView.shopBtn.on(Laya.Event.CLICK, this, this.onShopBtn), this.uiView.signBtn.on(Laya.Event.CLICK, this, this.onSignBtn), 
            this.uiView.zhuanpanBtn.on(Laya.Event.CLICK, this, this.onZhuanpanBtn), this.uiView.mapBtn.on(Laya.Event.CLICK, this, this.onMapBtn), 
            this.uiView.taskInfo.on(Laya.Event.CLICK, this, this.onTaskBtn), this.uiView.freeVideoBtn.on(Laya.Event.CLICK, this, this.onFreeVideoBtn);
        }
        onFreeVideoBtn() {
            A.showVideoAd(t => {
                t && Zt.addLocal("gold", 300, !0);
            });
        }
        onTaskBtn() {
            _t.showPopup(_t.TASK_WINDOW);
        }
        onMapBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.MAXMAP_WINDOW);
        }
        onZhuanpanBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.TURNTABLE_WINDOW);
        }
        onSignBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.SIGN_WINDOW);
        }
        onShopBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.SHOP_VIEW);
        }
        onHelpBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.HELP_VIEW);
        }
        onBackBtn() {
            A.playSound(w.BUTTON), p.hideBanner(), p.hideSCustom(), p.gameEnd(), p.quitGamePage(() => {
                _t.showPopup(_t.QUIT_WINDOW);
            });
        }
        onYaoshuiBtn() {
            A.playSound(w.BUTTON), A.showVideoAd(t => {
                t && (Zt.gta.user.fullBlood(), _t.showFlyTip("你使用了万能药水，气血已恢复到最大值！"));
            });
        }
        onBianshenBtn(t) {
            this.showClickBtnEff(t), Zt.gta.user.bianshen(), this.updateBianshenBtn();
        }
        onRunBtn(t) {
            this.showClickBtnEff(t), Zt.gta.user.setIsRun(!Zt.gta.user.isRun), this.updateRunWalkBtn();
        }
        onAttackBtn(t) {
            this.showClickBtnEff(t), Zt.gta.user.attack();
        }
        onJumpBtn(t) {
            this.showClickBtnEff(t), Zt.gta.user.jump();
        }
        onKickBtn(t) {
            this.showClickBtnEff(t), Zt.gta.user.kick();
        }
        onPaodanBtn(t) {
            this.showClickBtnEff(t), Zt.gta.user.shoot();
        }
        onZhongquanBtn(t) {
            this.showClickBtnEff(t), Zt.gta.user.zhongquan();
        }
        showClickBtnEff(t) {
            let e = t.currentTarget;
            Laya.Tween.clearAll(e), Laya.Tween.to(e, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 100, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.linearNone);
            }));
            let i = e.getChildByName("light");
            Laya.Tween.clearAll(i);
            t = e == this.uiView.attackBtn ? 1 : .5;
            i.scale(t, t), i.alpha = 1, i.visible = !0, Laya.Tween.to(i, {
                scaleX: 1.2 * t,
                scaleY: 1.2 * t,
                alpha: 0
            }, 150, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                i.visible = !1;
            }));
        }
        showToStage(t) {
            this.uiView.userIcon.skin = "images/head/circle" + Zt.roleId + ".png", this.uiView.rightMenu.x = Laya.stage.width, 
            b.alignToCenter(this.uiView.freeContainer), this.updateRunWalkBtn(), this.updateBlood(1), 
            this.updateStar(0), this.updateExperienceInfo(), this.updateTaskInfo(), s.on("star_change", this, this.updateStar), 
            s.on("blood_change", this, this.onUserBloodChange), s.on("experience", this, this.updateExperienceInfo), 
            s.on("task_change", this, this.updateTaskInfo), s.on(s.PLAYER_SKIN_CHANGE, this, this.onPlayerSkinChange);
        }
        onPlayerSkinChange() {
            _t.showPopup(_t.COMMON_LOADING);
            var t = Gt.roleResArr[Zt.roleId - 1].getUrlArr();
            Laya.loader.create(t, Laya.Handler.create(this, t => {
                this.uiView.userIcon.skin = "images/head/circle" + Zt.roleId + ".png", _t.hideView(_t.COMMON_LOADING), 
                t ? Zt.gta.user.changeSkin() : _t.showFlyTip("加载资源失败！");
            }));
        }
        updateTaskInfo() {
            Zt.gta.curFeederTask ? (this.uiView.taskTxt.text = Gt.feedermissionDataArr[Zt.gta.curFeederTask.taskId - 1].feedermissiontitle, 
            this.uiView.tips.visible = !0) : (this.uiView.taskTxt.text = "我的任务", this.uiView.tips.visible = !1);
        }
        updateExperienceInfo() {
            this.updateExperience(Zt.getCurExperienceProgress()), this.updateLevel(Zt.level);
        }
        onUserBloodChange() {
            this.updateBlood(Zt.gta.user.curBlood / Zt.gta.user.totalBlood);
        }
        updateRunWalkBtn() {
            Zt.gta.user.isRun ? this.uiView.runBtn.skin = "images/game/xz.png" : this.uiView.runBtn.skin = "images/game/pb.png";
        }
        updateBianshenBtn() {
            Zt.gta.user.isCar ? (this.uiView.skillBtns.visible = !1, this.uiView.bianshenBtn.skin = "images/game/btn_to_role.png") : (this.uiView.skillBtns.visible = !0, 
            this.uiView.bianshenBtn.skin = "images/game/btn_to_car.png"), this.uiView.shootItem.visible = !1;
        }
        removeFromStage() {
            s.off("star_change", this, this.updateStar), s.off("experience", this, this.updateExperienceInfo), 
            s.off("blood_change", this, this.onUserBloodChange), s.off("task_change", this, this.updateTaskInfo), 
            s.off(s.PLAYER_SKIN_CHANGE, this, this.onPlayerSkinChange);
        }
        updateStar(i, a = !1) {
            for (let e = 1; e <= 5; e++) {
                let t = this.uiView["star" + e];
                e <= i ? (t.skin = "images/game/xx1.png", a && new o(t)) : t.skin = "images/game/xx2.png";
            }
        }
        addMiniMap(t) {
            this.uiView.minMap.addChild(t);
        }
        updateExperience(t) {
            this.uiView.experience.scaleX = t;
        }
        updateBlood(t) {
            this.uiView.blood.scaleX = t;
        }
        updateLevel(t) {
            this.uiView.levelTxt.text = t + "";
        }
    }
    class L extends i {
        constructor() {
            super(), this.progress = 0, this.speed = .001, this.initView();
        }
        initView() {
            this.uiView = new a.LoadingViewUI(), this.addChild(this.uiView);
        }
        showToStage(t) {
            this.onResize(), Laya.stage.on(Laya.Event.RESIZE, this, this.onResize), Laya.timer.frameLoop(1, this, this.update), 
            this.progress = 0, this.update();
        }
        update() {
            this.progress += this.speed, this.progress = Math.min(.99, this.progress), this.uiView.progress.scaleX = this.progress, 
            this.uiView.star.x = this.uiView.progress.x + 1305 * this.progress;
        }
        onResize() {
            b.scaleToFull(this.uiView.bg), b.alignToCenter(this.uiView.content);
        }
        removeFromStage() {
            Laya.stage.off(Laya.Event.RESIZE, this, this.onResize), Laya.timer.clear(this, this.update);
        }
    }
    class C extends Laya.Sprite3D {
        constructor(t, e = null) {
            super(), this.isDestroy = !1, Laya.loader.create(t, Laya.Handler.create(this, () => {
                this.isDestroy || (this.role = Laya.Sprite3D.instantiate(Laya.loader.getRes(t)), 
                this.addChild(this.role), this.role.transform.localPosition = new Laya.Vector3(), 
                Laya.timer.callLater(this, () => {
                    e && !this.isDestroy && e();
                }));
            }));
        }
        play(e, t = 0) {
            if (this.role) {
                let t = this.role.getComponent(Laya.Animator);
                t && t.play(e, 0, 0);
            }
        }
        dispose() {
            this.isDestroy = !0, this.role && (this.role.destroy(), this.role = null, this.destroy());
        }
    }
    class k extends Laya.Scene3D {
        constructor() {
            super(), this.roleArr = [], this.camera = this.addChild(new Laya.Camera(0, .1, 40)), 
            this.camera.orthographic = !0, this.camera.orthographicVerticalSize = 3, this.camera.clearFlag = Laya.Camera.CLEARFLAG_DEPTHONLY, 
            this.light = this.addChild(new Laya.DirectionLight()), this.light.color = new Laya.Vector3(1, 1, 1);
        }
        loadRole(t, e, i = null) {
            var a = new Laya.Point(e.x, e.y), a = e.parent.localToGlobal(a);
            let s = new C(t, i);
            this.addChild(s);
            i = new Laya.Vector3();
            return this.camera.convertScreenCoordToOrthographicCoord(new Laya.Vector3(a.x, a.y, 0), i), 
            s.transform.position = i, this.roleArr.push(s), s;
        }
        removeRoleArr() {
            for (let t = 0; t < this.roleArr.length; t++) this.roleArr[t].dispose();
            this.roleArr = [];
        }
        loadRoleArr(e, i) {
            for (let t = 0; t < e.length; t++) this.loadRole(e[t], i[t]);
        }
        setRoleScale(e) {
            for (let t = 0; t < this.roleArr.length; t++) this.roleArr[t].transform.localScale = new Laya.Vector3(e, e, e);
        }
        dispose() {
            for (let t = 0; t < this.roleArr.length; t++) this.roleArr[t].dispose();
            this.roleArr.length = 0, this.roleArr = null, this.destroy(), this.camera = null, 
            this.light = null;
        }
    }
    class x {
        constructor() {}
        static show(t) {
            this.airDropItem || (this.airDropItem = new Laya.Image("images/main/airdrop.png"), 
            this.airDropItem.pivotX = 92, this.airDropItem.on(Laya.Event.CLICK, this, () => {
                _t.showPopup(_t.AIRDROP_WINDOW);
            })), this.airDropItem.removeSelf(), t.addChild(this.airDropItem), this.isOnshow || (this.isOnshow = !0, 
            this.airDropItem.visible = !0, this.airDropItem.x = -this.airDropItem.width, this.airDropItem.y = 1080 * (60 + 150 * Math.random()) / 750, 
            this.tx = Laya.stage.width + this.airDropItem.width, this.ty = 1080 * (210 + 150 * Math.random()) / 750, 
            t = Math.atan2(this.ty - this.airDropItem.y, this.tx - this.airDropItem.x), this.vx = +Math.cos(t), 
            this.vy = +Math.sin(t), Laya.timer.frameLoop(1, this, this.update));
        }
        static hide() {
            this.isOnshow = !1, this.airDropItem.visible = !1, this.airDropItem.removeSelf(), 
            Laya.timer.clear(this, this.update);
        }
        static pause() {
            Laya.timer.clear(this, this.update);
        }
        static update() {
            this.rAngle += 3, this.airDropItem.x += this.vx, this.airDropItem.y += this.vy, 
            this.airDropItem.x > this.tx && (this.airDropItem.x = -this.airDropItem.width, this.airDropItem.y = 1080 * (60 + 150 * Math.random()) / 750, 
            this.tx = Laya.stage.width + this.airDropItem.width, this.ty = 1080 * (210 + 150 * Math.random()) / 750), 
            this.airDropItem.rotation = 6 * Math.cos(this.rAngle / 180 * Math.PI);
        }
        static resume() {
            this.isOnshow && Laya.timer.frameLoop(1, this, this.update);
        }
    }
    x.isOnshow = !1, x.rAngle = 0;
    class T {
        constructor(t, e) {
            this.type = t, this.num = e;
        }
    }
    class P extends i {
        constructor() {
            super(), this.urlArr = [ {
                url: "res/atlas/images/help.atlas",
                type: Laya.Loader.ATLAS
            } ], this.curTab = 1, this.progress = 0, this.speed = .001;
        }
        initView() {
            this.uiView = new a.HelpViewUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.tab1.on(Laya.Event.CLICK, this, this.onTab1), this.uiView.tab2.on(Laya.Event.CLICK, this, this.onTab2), 
            this.uiView.startBtn.on(Laya.Event.CLICK, this, this.onStartBtn), this.uiView.backBtn.on(Laya.Event.CLICK, this, this.onBackBtn), 
            this.uiView.goldInfo.on(Laya.Event.CLICK, this, () => {
                A.playSound(w.BUTTON), _t.showPopup(_t.FREEREWARD_WINDOW, new T("gold", 300));
            }), this.uiView.diamondInfo.on(Laya.Event.CLICK, this, () => {
                A.playSound(w.BUTTON), _t.showPopup(_t.FREEREWARD_WINDOW, new T("diamond", 100));
            }), this.updateGoldTxt(), this.updateDiamondTxt(), s.on(s.GOLD_CHANGE, this, this.updateGoldTxt), 
            s.on(s.DIAMOND_CHANGE, this, this.updateDiamondTxt);
        }
        onBackBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.HELP_VIEW);
        }
        onTab1() {
            A.playSound(w.BUTTON), this.curTab = 1, this.updateTab();
        }
        onTab2() {
            A.playSound(w.BUTTON), this.curTab = 2, this.updateTab();
        }
        showToStage(t) {
            _t.loadView(this.urlArr, _t.HELP_VIEW, _t.COMMON_LOADING, () => {
                this.uiView || (this.initView(), this.initEvent()), b.alignToCenter(this.uiView.content), 
                b.scaleToFull(this.uiView.bg), this.curTab = 1, this.updateTab(), t && t.from == P.HELP_FROM_TYPE_LOADING ? this.loadGameRes() : (this.uiView.backBtn.visible = !0, 
                this.uiView.loading.visible = !1, this.uiView.startBtn.visible = !1), this.uiView.rightMenu.x = Laya.stage.width;
            });
        }
        loadGameRes() {
            this.uiView.backBtn.visible = !1, this.uiView.startBtn.visible = !1, this.showLoading(), 
            Gt.loadGameRes(() => {
                this.hideLoading(), this.showStartBtn();
            });
        }
        showLoading() {
            this.uiView.loading.visible = !0, this.progress = 0, this.updateLoading(), Laya.timer.frameLoop(1, this, this.updateLoading);
        }
        updateLoading() {
            this.uiView.circle.rotation += 3, this.progress += this.speed, this.progress = Math.min(.99, this.progress), 
            this.uiView.loadingTxt.text = Math.floor(100 * this.progress) + "%";
        }
        hideLoading() {
            Laya.timer.clear(this, this.updateLoading), this.uiView.loading.visible = !1;
        }
        showStartBtn() {
            this.uiView.startBtn.visible = !0, Laya.timer.frameLoop(1, this, this.updateStartBtn);
        }
        updateStartBtn() {
            this.uiView.liuGuang.x += 10, 360 < this.uiView.liuGuang.x && (this.uiView.liuGuang.x = -310);
        }
        hideStartBtn() {
            Laya.timer.clear(this, this.updateStartBtn), this.uiView.startBtn.visible = !1;
        }
        onStartBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.HELP_VIEW), p.enterGamePage(t => {
                Zt.createGTAGame(), _t.showView(_t.GAME_VIEW), t && Zt.addLocal("gold", 150, !0);
            });
        }
        updateTab() {
            this.uiView.tab1.skin = 1 == this.curTab ? "images/help/3-kuan.png" : "", this.uiView.tab2.skin = 2 == this.curTab ? "images/help/3-kuan.png" : "", 
            this.uiView.content1.visible = 1 == this.curTab, this.uiView.content2.visible = 2 == this.curTab;
        }
        removeFromStage() {
            this.hideLoading(), this.hideStartBtn();
        }
        updateGoldTxt() {
            this.uiView.goldTxt.text = "" + Zt.gold;
        }
        updateDiamondTxt() {
            this.uiView.diamondTxt.text = "" + Zt.diamond;
        }
    }
    P.HELP_FROM_TYPE_LOADING = "loading";
    class S {
        constructor(t, e = null, i = null, a = !1) {
            this.cancel = !1, this.tip = "", this.tip = t, this.confirmCallback = e, this.cancelCallback = i, 
            this.cancel = a;
        }
    }
    class E extends i {
        constructor() {
            super(), this.urlArr = [ {
                url: "res/atlas/images/shop.atlas",
                type: Laya.Loader.ATLAS
            } ], this.jijiaItemArr = [];
        }
        static initShopData() {
            for (let t = 0; t < Gt.roleDataArr.length; t++) {
                var e = Gt.roleDataArr[t], e = {
                    id: e.id,
                    name: e.name,
                    gettype: e.resourcesid,
                    getvalue: e.piecenum
                };
                E.shopArr.push(e);
            }
        }
        initView() {
            this.uiView = new a.ShopViewUI(), this.addChild(this.uiView), this.uiView.list.vScrollBarSkin = "", 
            this.uiView.list.vScrollBar.elasticDistance = 100, this.createJijiaItemArr();
        }
        initEvent() {
            this.uiView.backBtn.on(Laya.Event.CLICK, this, this.onBackBtn), this.uiView.goldInfo.on(Laya.Event.CLICK, this, () => {
                A.playSound(w.BUTTON), _t.showPopup(_t.FREEREWARD_WINDOW, new T("gold", 300));
            }), this.uiView.diamondInfo.on(Laya.Event.CLICK, this, () => {
                A.playSound(w.BUTTON), _t.showPopup(_t.FREEREWARD_WINDOW, new T("diamond", 100));
            }), this.updateGoldTxt(), this.updateDiamondTxt(), s.on(s.GOLD_CHANGE, this, this.updateGoldTxt), 
            s.on(s.DIAMOND_CHANGE, this, this.updateDiamondTxt);
        }
        onBackBtn() {
            _t.hideView(_t.SHOP_VIEW), A.playSound(w.BUTTON);
        }
        createJijiaItemArr() {
            var i = (this.uiView.list.width - 1300) / 6;
            for (let e = 0; e < E.shopArr.length; e++) {
                let t = new a.items.ShopItemUI();
                t.pos((t.width + i) * (e % 5), (t.height + i) * Math.floor(e / 5)), this.jijiaItemArr.push(t), 
                this.uiView.list.addChild(t), t.nameTxt.text = E.shopArr[e].name, t.icon.skin = "images/head/head" + (e + 1) + ".png", 
                this.setJijiaItemEvent(t, e);
            }
        }
        setJijiaItemEvent(t, i) {
            t.buyBtn.on(Laya.Event.CLICK, this, () => {
                A.playSound(w.BUTTON);
                let t = 1 == E.shopArr[i].gettype ? "gold" : "diamond";
                var e = E.shopArr[i].getvalue;
                if (Zt.useLocal(t, e)) {
                    let t = E.getShopStatusArr();
                    t[i] = E.BUY, E.setShopStatusArr(t), this.updateJijiaStatus(), _t.showFlyTip("获得新机甲！");
                } else _t.showPopup(_t.COMMON_WINDOW, new S("gold" == t ? "你的金币不足！" : "你的钻石不足", () => {
                    _t.showPopup(_t.FREEREWARD_WINDOW, new T(t, 200));
                }));
            }), t.videoBtn.on(Laya.Event.CLICK, this, () => {
                A.showVideoAd(t => {
                    if (t) {
                        let t = E.getShopStatusArr();
                        t[i] = E.BUY, E.setShopStatusArr(t), this.updateJijiaStatus(), _t.showFlyTip("获得新机甲！");
                    }
                });
            }), t.useBtn.on(Laya.Event.CLICK, this, () => {
                Zt.useRole(i + 1), this.updateJijiaStatus(), _t.showFlyTip("设置成功！");
            });
        }
        updateJijiaStatus() {
            var e = E.getShopStatusArr();
            for (let t = 0; t < this.jijiaItemArr.length; t++) if (e[t] == E.BUY) this.jijiaItemArr[t].buyBtn.visible = !1, 
            this.jijiaItemArr[t].videoBtn.visible = !1, t == Zt.roleId - 1 ? (this.jijiaItemArr[t].usingStatus.visible = !0, 
            this.jijiaItemArr[t].useBtn.visible = !1) : (this.jijiaItemArr[t].usingStatus.visible = !1, 
            this.jijiaItemArr[t].useBtn.visible = !0); else switch (this.jijiaItemArr[t].usingStatus.visible = !1, 
            this.jijiaItemArr[t].useBtn.visible = !1, E.shopArr[t].gettype) {
              case 1:
                this.jijiaItemArr[t].buyBtn.visible = !0, this.jijiaItemArr[t].videoBtn.visible = !1, 
                this.jijiaItemArr[t].priceTxt.text = E.shopArr[t].getvalue + "", this.jijiaItemArr[t].priceIcon.skin = "images/common/bi.png";
                break;

              case 2:
                this.jijiaItemArr[t].buyBtn.visible = !0, this.jijiaItemArr[t].videoBtn.visible = !1, 
                this.jijiaItemArr[t].priceTxt.text = E.shopArr[t].getvalue + "", this.jijiaItemArr[t].priceIcon.skin = "images/common/zuan.png";
                break;

              case 3:
                this.jijiaItemArr[t].buyBtn.visible = !1, this.jijiaItemArr[t].videoBtn.visible = !0;
            }
        }
        showToStage(t) {
            this.oldSkinId = Zt.roleId, _t.loadView(this.urlArr, _t.SHOP_VIEW, _t.COMMON_LOADING, () => {
                this.uiView || (this.initView(), this.initEvent()), b.scaleToFull(this.uiView.bg), 
                b.alignToCenter(this.uiView.content), this.updateJijiaStatus();
            });
        }
        removeFromStage() {
            Zt.roleId != this.oldSkinId && s.event(s.PLAYER_SKIN_CHANGE, []);
        }
        updateGoldTxt() {
            this.uiView.goldTxt.text = "" + Zt.gold;
        }
        updateDiamondTxt() {
            this.uiView.diamondTxt.text = "" + Zt.diamond;
        }
        static getShopStatusArr() {
            let t = A.getLocal("shop_status");
            if (!t) {
                let e = [];
                for (let t = 0; t < this.shopArr.length; t++) 0 == this.shopArr[t].getvalue ? e.push(E.BUY) : e.push(E.NORMAL);
                t = e.join(",");
            }
            var e = t.split(",");
            let i = [];
            for (let t = 0; t < E.shopArr.length; t++) i.push(parseFloat(e[t]));
            return i;
        }
        static setShopStatusArr(t) {
            A.setLocal("shop_status", t.join(",")), s.event("shop_role_status", []);
        }
    }
    E.shopArr = [], E.NORMAL = 0, E.BUY = 1;
    class B {
        constructor(t, e, i = 0, a = !1) {
            this.index = 0, this.status = "normal", this.pointArr = [], this.loop = !1, this.moveItem = t, 
            this.rotateItem = e, this.speed = i, this.loop = a;
        }
        setPathArr(t) {
            this.index = 0, this.pointArr = t, this.status = B.NORMAL;
        }
        setWalkEndCallback(t) {
            this.walkEndCallback = t;
        }
        resume() {
            0 != this.pointArr.length && this.status != B.STOP && (this.status = B.NORMAL);
        }
        pause() {
            this.status = B.PAUSE;
        }
        stop() {
            this.status = B.STOP, this.pointArr = [];
        }
        update() {
            if (this.status == B.NORMAL && 0 != this.pointArr.length) {
                var t = this.pointArr[this.index].x - this.moveItem.transform.localPositionX, e = this.pointArr[this.index].y - this.moveItem.transform.localPositionZ;
                if (Math.sqrt(t * t + e * e) <= 2 * this.speed) {
                    if (this.index == this.pointArr.length - 1) return void (this.loop ? this.index = 0 : (this.stop(), 
                    this.walkEndCallback && this.walkEndCallback()));
                    this.index++;
                }
                var i = Math.atan2(e, t), e = Math.cos(i) * this.speed, t = Math.sin(i) * this.speed;
                this.moveItem.transform.localPositionX += e, this.moveItem.transform.localPositionZ += t;
                i = 90 - i / Math.PI * 180;
                this.rotateItem.transform.localRotationEulerY += .3 * (b.getAngle(this.rotateItem.transform.localRotationEulerY, i) - this.rotateItem.transform.localRotationEulerY), 
                this.moveItem.transform.localPositionY = y.getTerrainY(this.moveItem);
            }
        }
        dispose() {
            this.status = B.STOP, this.moveItem = null, this.rotateItem = null, this.pointArr = null;
        }
        createRandomPoint(t = !1) {
            let e = 0;
            3 < this.pointArr.length && (e = Math.floor(this.pointArr.length * (t ? MGOBE.RandomUtil : Math).random())), 
            this.index = e;
            var i = Math.min(this.pointArr.length - 1, e + 1), a = this.pointArr[i].x - this.pointArr[e].x, i = this.pointArr[i].y - this.pointArr[e].y, t = (t ? MGOBE.RandomUtil : Math).random();
            return new Laya.Point(this.pointArr[e].x + a * t, this.pointArr[e].y + i * t);
        }
    }
    B.NORMAL = "normal", B.STOP = "stop", B.PAUSE = "pause";
    class V {
        constructor() {}
        static enable() {
            this.isUpdate = !0;
        }
        static disable() {
            this.isUpdate = !1;
        }
        static addFramer(t) {
            return "" == t.frameId && (t.frameId = "framer" + this.framerId, this.framerId++), 
            this.framerPool[t.frameId] = t;
        }
        static addFramerOnce(t) {
            return t.once = !0, t.frameId = "framer" + this.framerId, this.framerId++, this.framerPool[t.frameId] = t;
        }
        static removeFramer(t) {
            return delete this.framerPool[this.framerId], t;
        }
        static removeFramerById(t) {
            t = this.getFramer(t);
            return this.removeFramer(t);
        }
        static recoverFramer(t) {
            this.framerPool[t.frameId] = t;
        }
        static getFramer(t) {
            return this.framerPool[t];
        }
        static clear(t) {
            t && this.clearByFramerId(t.frameId);
        }
        static clearByFramerId(t) {
            let e = this.getFramer(t);
            e && e.dispose(), delete this.framerPool[t];
        }
        static clearAll() {
            for (var t in this.framerPool) this.clearByFramerId(t);
            this.framerId = 0;
        }
        static update() {
            if (this.isUpdate) for (var e in this.framerPool) {
                let t = this.framerPool[e];
                t.update();
            }
        }
    }
    V.framerPool = {}, V.framerId = 0, V.isUpdate = !1;
    class R {
        constructor(t, e = 0, i = !1) {
            this.frameId = "", this.callbackPool = {}, this.isUpdate = !0, this.currentFrame = 0, 
            this.repeat = 0, this.curRepeat = 0, this.isLoop = !1, this.once = !1, this.totalFrames = t, 
            this.isLoop = i, this.repeat = e;
        }
        reset() {
            this.currentFrame = 0, this.curRepeat = 0;
        }
        resume() {
            this.isUpdate = !0;
        }
        pause() {
            this.isUpdate = !1;
        }
        addFrameCallback(t, e) {
            this.callbackPool["callback" + t] = e;
        }
        removeFrameCallback(t) {
            delete this.callbackPool["callback" + t];
        }
        removeAllCallback() {
            for (var t in this.callbackPool) delete this.callbackPool[t];
        }
        update() {
            if (this.isUpdate) {
                this.currentFrame++;
                let t = this.callbackPool["callback" + this.currentFrame];
                t && t(), this.currentFrame >= this.totalFrames && (this.once ? V.clear(this) : this.isLoop ? this.currentFrame = 0 : (this.curRepeat++, 
                this.curRepeat > this.repeat ? this.isUpdate = !1 : this.currentFrame = 0));
            }
        }
        dispose() {
            for (var t in this.callbackPool) delete this.callbackPool[t];
            this.callbackPool = null;
        }
    }
    class _ {
        constructor(t, e) {
            this.gridArr = [], this.openGridArr = [], this.closeGridArr = [], this.isFinding = !1, 
            this.finderConfig = e, this.gridWidth = this.finderConfig.width / this.finderConfig.col, 
            this.gridHeight = this.finderConfig.height / this.finderConfig.row, this.col = e.col, 
            this.row = e.row, this.gridArr = t;
        }
        getGrid(e, i) {
            for (let t = 0; t < this.gridArr.length; t++) if (this.gridArr[t].row == e && this.gridArr[t].col == i) return this.gridArr[t];
            return null;
        }
        findPathByPosition(t, e, i, a) {
            e = this.getGridByPosition(t, e);
            if (!e) return null;
            a = this.getGridByPosition(i, a);
            return a ? this.findPath(e.row, e.col, a.row, a.col) : null;
        }
        getGridByPosition(t, e) {
            t = Math.floor((t - this.finderConfig.x) / this.gridWidth), e = Math.floor((e - this.finderConfig.y) / this.gridHeight);
            return this.getGrid(e, t);
        }
        getPositionByGrid(t) {
            return new Laya.Point(this.finderConfig.x + t.col * this.gridWidth + .5 * this.gridWidth, this.finderConfig.y + t.row * this.gridHeight + .5 * this.gridHeight);
        }
        findPath(t, e, i, a) {
            if (this.isFinding) return null;
            if (this.isFinding = !0, t == i && e == a) return this.isFinding = !1, null;
            for (let t = 0; t < this.gridArr.length; t++) this.gridArr[t].init();
            if (this.startGrid = this.getGrid(t, e), this.endGrid = this.getGrid(i, a), this.openGridArr = [], 
            this.closeGridArr = [], !this.startGrid || !this.endGrid) return this.isFinding = !1, 
            null;
            this.startGrid.parent = null, this.endGrid.parent = null;
            let s = this.startGrid;
            for (s.g = 0, s.h = this.getHeuristic(s), s.f = s.g + s.h; s != this.endGrid; ) {
                var r = Math.max(0, s.row - 1), o = Math.min(this.row - 1, s.row + 1), n = Math.max(0, s.col - 1), h = Math.min(this.col - 1, s.col + 1);
                for (let i = r; i <= o; i++) for (let t = n; t <= h; t++) {
                    let e = this.getGrid(i, t);
                    if (s != e && e.walkabled && this.getGrid(e.row, s.col).walkabled && this.getGrid(s.row, e.col).walkabled) {
                        let t = 1;
                        s.row == e.row && s.col == e.col || (t = Math.SQRT2);
                        var l = s.g + t, d = this.getHeuristic(e), c = l + d;
                        -1 != this.openGridArr.indexOf(e) || -1 != this.closeGridArr.indexOf(e) ? e.f > c && (e.f = c, 
                        e.g = c, e.h = d, e.parent = s) : (e.g = l, e.f = c, e.h = d, e.parent = s, this.openGridArr.push(e));
                    }
                }
                if (this.closeGridArr.push(s), 0 == this.openGridArr.length) return this.isFinding = !1, 
                null;
                this.openGridArr = this.openGridArr.sort(function(t, e) {
                    return t.f > e.f ? 1 : -1;
                }), s = this.openGridArr.shift();
            }
            return this.buildPath();
        }
        buildPath() {
            let t = [ this.endGrid ];
            for (;t[0].parent && t[0].parent != this.startGrid; ) t.unshift(t[0].parent);
            return t.unshift(this.startGrid), this.isFinding = !1, t;
        }
        getHeuristic(t) {
            var e = t.col - this.endGrid.col, t = t.row - this.endGrid.row;
            return Math.sqrt(t * t + e * e);
        }
        dispose() {
            for (let t = 0; t < this.gridArr.length; t++) this.gridArr[t].dispose();
            this.gridArr.length = 0, this.gridArr = null, this.openGridArr.length = 0, this.openGridArr = null, 
            this.closeGridArr.length = 0, this.closeGridArr = null;
        }
    }
    class M {
        constructor() {
            this.parent = null;
        }
        init() {
            this.g = this.h = this.f = 0, this.parent = null;
        }
        dispose() {
            this.parent = null;
        }
    }
    class N {
        constructor() {}
        static createPathFinder(a, s) {
            let r = [];
            var o = s.width / s.col, n = s.height / s.row;
            for (let i = 0; i < s.row; i++) for (let e = 0; e < s.col; e++) {
                let t = new M();
                t.row = i, t.col = e, t.walkabled = y.canWalk(a, s.x + e * o + .5 * o, s.y + i * n + .5 * n), 
                r.push(t);
            }
            return new _(r, s);
        }
        static getRectByTwoPoints(t, e) {
            return new Laya.Rectangle(Math.min(t.x, e.x), Math.min(t.y, e.y), Math.abs(e.x - t.x), Math.abs(e.y - t.y));
        }
        static getPathPointArrByGridArr(e, i) {
            let a = [];
            for (let t = 0; t < e.length; t++) a.push(i.getPositionByGrid(e[t]));
            return a;
        }
    }
    class O {
        constructor(t, e, i, a, s, r) {
            this.x = t, this.y = e, this.width = i, this.height = a, this.col = s, this.row = r;
        }
    }
    class F {
        constructor(t) {
            this.carId = "", this.speed = .05, this.angle = 0, this.wantToFindPath = !1, this.owner = t, 
            this.pathFindTimer = V.addFramer(new R(180, 0, !0)), this.pathFindTimer.addFrameCallback(this.pathFindTimer.totalFrames, () => {
                this.findAPath();
            }), this.pathFollower = new B(this.owner, this.owner.robotItem, .05);
        }
        seekTarget(t) {
            this.seekingTarget != t && (this.seekingTarget = t);
        }
        update() {
            var t, e, i;
            this.owner.isNormalAni() && (this.seekingTarget ? (t = this.seekingTarget.transform.localPositionX - this.owner.transform.localPositionX, 
            e = this.seekingTarget.transform.localPositionZ - this.owner.transform.localPositionZ, 
            (i = Math.sqrt(t * t + e * e)) < this.getMyAttackDist() ? (this.pathFindTimer.pause(), 
            this.angle = Math.atan2(e, t), this.owner.robotItem.transform.localRotationEulerY = 90 - this.angle / Math.PI * 180, 
            this.owner.play(this.owner.config.hasGun ? z.ANI_ATTACK_GUN : z.ANI_ATTACK_NONE), 
            this.wantToFindPath = !1) : (this.pathFindTimer.resume(), i < this.getMySeekDist() ? (this.pathFollower.update(), 
            this.pathFollower.status == B.STOP ? this.wander() : this.owner.play(this.owner.config.hasGun ? z.ANI_RUN_GUN : z.ANI_RUN_NONE), 
            this.wantToFindPath = !0) : (this.wantToFindPath = !1, this.seekingTarget = null))) : (this.pathFollower.speed = this.speed, 
            this.pathFindTimer.resume(), this.pathFollower.update(), this.owner.play(this.owner.config.hasGun ? z.ANI_WALK_GUN : z.ANI_WALK_NONE)));
        }
        findAPath() {
            if (this.seekingTarget) {
                if (this.wantToFindPath) {
                    this.pathFinder && (this.pathFinder.dispose(), this.pathFinder = null);
                    let t = N.getRectByTwoPoints(new Laya.Point(this.owner.transform.localPositionX, this.owner.transform.localPositionZ), new Laya.Point(this.seekingTarget.transform.localPositionX, this.seekingTarget.transform.localPositionZ));
                    t.x -= 10, t.y -= 10, t.width += 20, t.height += 20, this.pathFinder = N.createPathFinder("map1", new O(t.x, t.y, t.width, t.height, 20, 20));
                    var e = this.pathFinder.findPathByPosition(this.owner.transform.localPositionX, this.owner.transform.localPositionZ, this.seekingTarget.transform.localPositionX, this.seekingTarget.transform.localPositionZ);
                    e ? (e = N.getPathPointArrByGridArr(e, this.pathFinder), this.pathFollower.setPathArr(e), 
                    this.pathFollower.speed = 4 * this.speed) : (this.seekingTarget = null, this.wander()), 
                    this.pathFinder.dispose(), this.pathFinder = null;
                }
            } else this.wander();
        }
        wander() {
            this.pathFollower.speed = this.speed;
            let t = [];
            t.push(new Laya.Point(this.owner.transform.localPositionX, this.owner.transform.localPositionZ));
            var e = 2 * Math.PI * MGOBE.RandomUtil.random(), i = 20 + 20 * MGOBE.RandomUtil.random();
            t.push(new Laya.Point(this.owner.transform.localPositionX + i * Math.cos(e), this.owner.transform.localPositionZ + i * Math.sin(e))), 
            y.checkIsDirToPos("map1", t[0].x, t[0].y, t[1].x, t[1].y) && this.pathFollower.setPathArr(t);
        }
        getMySeekDist() {
            return 100;
        }
        getMyAttackDist() {
            return this.owner.config.hasGun ? 20 : 2;
        }
        dispose() {
            V.clear(this.pathFindTimer), this.pathFindTimer = null, this.pathFollower && (this.pathFollower.dispose(), 
            this.pathFollower = null), this.pathFinder && (this.pathFinder.dispose(), this.pathFinder = null), 
            this.owner = null, this.seekingTarget = null;
        }
        revive() {
            this.clear(), this.owner.play(this.owner.config.hasGun ? z.ANI_ATTACK_GUN : z.ANI_ATTACK_NONE, !0);
        }
        clear() {
            this.pathFollower.setPathArr([]), this.wantToFindPath = !1;
        }
    }
    class U {
        constructor() {}
    }
    U.teamPlayer = 6;
    class D {
        constructor() {}
        static addCallback(t) {
            t.onJoinRoom = this.onJoinRoom.bind(this), t.onLeaveRoom = this.onLeaveRoom.bind(this), 
            t.onDismissRoom = this.onDissRoom.bind(this), t.onStartFrameSync = this.onStartFrameSync.bind(this), 
            t.onStopFrameSync = this.onStopFrameSync.bind(this), t.onRecvFrame = this.onRecvFrame.bind(this), 
            t.onChangeCustomPlayerStatus = this.onChangeCustomPlayerStatus.bind(this), t.onAutoRequestFrameError = this.onAutoRequestFrameError.bind(this);
        }
        static removeCallback(t) {
            t.onJoinRoom = null, t.onLeaveRoom = null, t.onDismissRoom = null, t.onStartFrameSync = null, 
            t.onStopFrameSync = null, t.onRecvFrame = null, t.onChangeCustomPlayerStatus = null, 
            t.onAutoRequestFrameError = null;
        }
        static onAutoRequestFrameError() {}
        static onChangeCustomPlayerStatus() {}
        static onRecvFrame(t) {
            X.recvFrame(t.data), X.checkEnterGame();
        }
        static onStopFrameSync() {}
        static onStartFrameSync() {}
        static onDissRoom() {}
        static onLeaveRoom(t) {
            s.event(s.PLAYER_LEAVE, [ t.data.leavePlayerId ]);
        }
        static onJoinRoom() {}
        static logicUpdate(t, e) {
            this.logicUpdateCallback && this.logicUpdateCallback();
        }
        static executeCommand(t) {
            this.commandExecuteCallback && this.commandExecuteCallback(t);
        }
        static setLogicUpdateCallback(t) {
            this.logicUpdateCallback = t;
        }
        static setCammandExecuteCallback(t) {
            this.commandExecuteCallback = t;
        }
    }
    class W {
        constructor(t) {
            for (var e in this.playerId = "", t) this[e] = t[e];
        }
    }
    W.MOVE = "move", W.ROTATE = "rotate", W.ATTACK = "attack", W.ZHONGQUAN = "zhongquan", 
    W.KICK = "kick", W.RUNWALK = "runwalk", W.JUMP = "jump", W.REVIVE = "revive", W.GIVEUP = "giveup", 
    W.BIANSHEN = "bianshen", W.SHAOHEI = "shaohei", W.GIVEUPSHAOHEI = "giveupshaohei", 
    W.QUIT = "quit", W.SCORE = "score", W.SKIN = "skin", W.YAOSHUI = "yaoshui", W.PAUSE = "pause", 
    W.RESUME = "resume";
    class Y {
        constructor() {
            this.avatarUrl = "", this.nickName = "", this.userId = "", this.skinId = 1;
        }
        stringify() {
            var t = {
                avatarUrl: this.avatarUrl,
                nickName: this.nickName,
                userId: this.userId,
                skinId: this.skinId
            };
            return JSON.stringify(t);
        }
        parse(t) {
            var e, i = JSON.parse(t);
            for (e in i) this[e] = i[e];
        }
    }
    class G {
        constructor() {}
        static init() {
            X.isLocal = !0, X.isEnabled = !0, X.room = {
                roomInfo: {
                    frameRate: 30,
                    owner: this.uid,
                    id: "dj",
                    playerList: [ {
                        id: this.uid,
                        customProfile: "",
                        name: "",
                        customPlayerStatus: 0
                    } ]
                },
                matchRoom: (t, e) => {
                    X.room.roomInfo.playerList[0].name = t.playerInfo.name, X.room.roomInfo.playerList[0].customProfile = t.playerInfo.customProfile, 
                    X.room.roomInfo.playerList[0].customPlayerStatus = t.playerInfo.customPlayerStatus, 
                    e({
                        code: MGOBE.ErrCode.EC_OK
                    }), X.room.onUpdate && X.room.onUpdate(), X.room.onChangeCustomPlayerStatus && X.room.onChangeCustomPlayerStatus({
                        data: {
                            customPlayerStatus: X.room.roomInfo.playerList[0].customPlayerStatus
                        }
                    });
                },
                createRoom: (t, e) => {
                    X.room.roomInfo.playerList[0].name = X.userInfo.nickName, X.room.roomInfo.playerList[0].customProfile = X.userInfo.stringify(), 
                    X.room.roomInfo.playerList[0].customPlayerStatus = 0, e({
                        code: MGOBE.ErrCode.EC_OK
                    }), X.room.onUpdate && X.room.onUpdate(), X.room.onChangeCustomPlayerStatus && X.room.onChangeCustomPlayerStatus({
                        data: {
                            customPlayerStatus: X.room.roomInfo.playerList[0].customPlayerStatus
                        }
                    });
                },
                startFrameSync: (t, e) => {
                    X.room.onRecvFrame && X.room.onRecvFrame({
                        data: {
                            frame: {
                                id: 1,
                                ext: {
                                    seed: Math.random()
                                },
                                items: [],
                                time: Date.now()
                            }
                        }
                    });
                },
                leaveRoom: (t, e) => {
                    e({
                        code: MGOBE.ErrCode.EC_OK
                    });
                },
                changeCustomPlayerStatus: (t, e) => {
                    X.room.roomInfo.playerList[0].customPlayerStatus = t.customPlayerStatus, e({
                        code: MGOBE.ErrCode.EC_OK
                    }), X.room.onUpdate && X.room.onUpdate(), X.room.onChangeCustomPlayerStatus && X.room.onChangeCustomPlayerStatus({
                        data: {
                            customPlayerStatus: X.room.roomInfo.playerList[0].customPlayerStatus
                        }
                    });
                },
                changeRoom: (t, e) => {
                    e({
                        code: MGOBE.ErrCode.EC_OK
                    }), X.room.onUpdate && X.room.onUpdate();
                },
                dismissRoom: (t, e) => {
                    e({
                        code: MGOBE.ErrCode.EC_OK
                    }), X.room.onUpdate && X.room.onUpdate();
                }
            };
        }
    }
    G.uid = "user";
    class X {
        constructor() {}
        static login(t) {
            this.frameTime = 1e3 / this.frameRate, this.userInfo = new Y();
            let e = A.getLocal("oid");
            e || (e = this.generateUUID(), A.setLocal("oid", e)), this.gameInfo.openId = e, 
            this.tryToLogin(t);
        }
        static tryToLogin(e) {
            MGOBE.Listener.init(this.gameInfo, this.config, t => (console.log(t), t.code === MGOBE.ErrCode.EC_OK ? (this.room = new MGOBE.Room(), 
            MGOBE.Listener.add(this.room), this.isEnabled = !0, void e(!0)) : this.curTryNum < this.maxTryNum ? (this.curTryNum++, 
            this.tryToLogin(e)) : (G.init(), void e(!1))));
        }
        static addCallbackHandler() {
            D.addCallback(this.room);
        }
        static removeCallbackHandler() {
            D.removeCallback(this.room);
        }
        static sendFrame(t, e = null) {
            if (this.isSingleGame) return this.singleFrameArr.push({
                data: t,
                playerId: this.uid(),
                timestamp: Date.now()
            }), void (e && e());
            this.room.sendFrame({
                data: t
            }, () => {
                e && e();
            });
        }
        static startMatch(e) {
            var t = {
                playerInfo: {
                    name: this.userInfo.nickName,
                    customPlayerStatus: 0,
                    customProfile: this.userInfo.stringify()
                },
                maxPlayers: 2 * U.teamPlayer,
                roomType: this.mode
            };
            this.room.matchRoom(t, t => {
                t.code == MGOBE.ErrCode.EC_OK ? e(!0) : t.code != MGOBE.ErrCode.EC_ROOM_PLAYER_ALREADY_IN_ROOM ? e(!1) : this.leaveRoom(t => {
                    t && this.startMatch(e);
                });
            });
        }
        static createRoom(t, e) {
            this.leaveRoom(() => {
                var t = {
                    name: this.userInfo.nickName,
                    customPlayerStatus: 0,
                    customProfile: this.userInfo.stringify()
                }, t = {
                    roomName: "机甲大战",
                    maxPlayers: 2 * U.teamPlayer,
                    roomType: this.mode,
                    customProperties: "WAIT",
                    isPrivate: !0,
                    playerInfo: t
                };
                this.room.createRoom(t, t => {
                    e(t.code == MGOBE.ErrCode.EC_OK);
                });
            });
        }
        static joinRoom(e, i) {
            this.leaveRoom(() => {
                this.room.initRoom({
                    id: e
                });
                var t = {
                    name: this.userInfo.nickName,
                    customPlayerStatus: 0,
                    customProfile: this.userInfo.stringify()
                };
                this.room.joinRoom({
                    playerInfo: t
                }, t => {
                    i(t.code == MGOBE.ErrCode.EC_OK);
                });
            });
        }
        static startFrameSync() {
            console.log("StartFrameSync"), console.log(this.room.roomInfo), this.room.startFrameSync({}, t => {});
        }
        static checkEnterGame() {
            this.isCheckEnterGame || (this.logicUpdate(), 1 == this.room.roomInfo.playerList.length && (this.isSingleGame = !0, 
            this.frameRate = 30, this.frameTime = 1e3 / this.frameRate), this.isCheckEnterGame = !0, 
            s.event(s.GAME_START, []));
        }
        static leaveRoom(e) {
            this.room.leaveRoom({}, t => {
                t.code == MGOBE.ErrCode.EC_OK ? e(!0) : e(!1);
            });
        }
        static recvFrame(t, e = !1) {
            this.isSingleGame && !e || (this.frameArr.push(t.frame), t.frame.items.sort((t, e) => t.timestamp - e.timestamp));
        }
        static logicUpdate() {
            if (this.isSingleGame && (this.recvFrame({
                frame: {
                    id: this.frameId + 1,
                    ext: {
                        seed: Math.random()
                    },
                    items: this.singleFrameArr.concat(),
                    time: Date.now()
                }
            }, !0), this.singleFrameArr = []), 0 != this.frameArr.length) {
                let e = 1;
                this.frameArr.length > this.maxCacheFrame && (e = this.frameArr.length);
                for (let t = 0; t < e; t++) {
                    var i = this.frameArr.shift(), a = i.ext.seed + i.id;
                    MGOBE.RandomUtil.init(a);
                    for (let e = 0; e < i.items.length; e++) {
                        var s = i.items[e], r = s.data.i || s.playerId;
                        let t = new W(s.data);
                        t.playerId = r, D.executeCommand(t);
                    }
                    D.logicUpdate(this.room.roomInfo.frameRate, i.isReplay), this.frameId = i.id, this.timestamp = i.time;
                }
            }
        }
        static resetMgobe() {
            this.singleFrameArr = [], this.frameArr = [], this.isSingleGame = !1, this.isCheckEnterGame = !1;
        }
        static generateUUID() {
            var i = new Date().getTime();
            return window.performance && "function" == typeof window.performance.now && (i += performance.now()), 
            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var e = (i + 16 * Math.random()) % 16 | 0;
                return i = Math.floor(i / 16), ("x" == t ? e : 3 & e | 8).toString(16);
            });
        }
        static uid() {
            return this.isLocal ? G.uid : MGOBE.Player.id;
        }
    }
    X.gameInfo = {
        gameId: "obg-71ojpd2t",
        openId: "",
        secretKey: "9062557e96cff79ed5462a6fbf0dfa00bc2b636a"
    }, X.config = {
        url: "71ojpd2t.wxlagame.com",
        reconnectMaxTimes: 5,
        reconnectInterval: 1e3,
        resendInterval: 1e3,
        resendTimeout: 1e4,
        isAutoRequestFrame: !0
    }, X.isSingleGame = !1, X.singleFrameArr = [], X.isEnabled = !1, X.isLocal = !1, 
    X.isCheckEnterGame = !1, X.frameId = 0, X.timestamp = 0, X.frameArr = [], X.frameRate = 30, 
    X.frameTime = 300, X.maxCacheFrame = 1, X.mode = "jjzc1v1", X.maxTryNum = 5, X.curTryNum = 0;
    class K {
        constructor() {}
        static init() {
            this.scoreArr = [], this.starArr = [];
            for (let t = 0; t < U.teamPlayer; t++) this.scoreArr.push(0), this.starArr.push(0);
        }
        static reset(e) {
            if (ut.gta && ut.gta.userArr) for (let t = 0; t < ut.gta.userArr.length; t++) e == ut.gta.userArr[t].userId && (this.scoreArr[t] = 0, 
            this.starArr[t] = 0, ut.gta.userArr[t].starNum = this.starArr[t], ut.gta.userArr[t].userId == X.uid() && s.event("star_change", [ this.starArr[t], !0 ]));
        }
        static attack() {
            this.curFrame = 0;
        }
        static addScore(e, i) {
            for (let t = 0; t < ut.gta.userArr.length; t++) ut.gta.userArr[t].userId == e && (this.scoreArr[t] += i);
        }
        static update() {
            if (this.curFrame++, this.curFrame > this.coldFrames) for (let t = 0; t < this.scoreArr.length; t++) this.scoreArr[t] -= this.speed, 
            this.scoreArr[t] = Math.max(0, this.scoreArr[t]);
            for (let t = 0; t < this.scoreArr.length; t++) {
                var e = this.getStar(this.scoreArr[t]);
                e != this.starArr[t] && (this.starArr[t] = e, ut.gta.userArr[t].starNum = this.starArr[t], 
                ut.gta.userArr[t].userId == X.uid() && s.event("star_change", [ this.starArr[t], !0 ]));
            }
        }
        static getStar(e) {
            for (let t = Gt.starDataArr.length - 1; 0 <= t; t--) if (e >= Gt.starDataArr[t].score) return Gt.starDataArr[t].star;
            return 0;
        }
        static getTopOneStarUserIndex() {
            let e = 0;
            for (let t = 1; t < this.scoreArr.length; t++) this.scoreArr[t] > this.scoreArr[e] && (e = t);
            return e;
        }
        static remove(t) {
            this.starArr.splice(t, 1), this.scoreArr.splice(t, 1);
        }
    }
    K.scoreArr = [], K.speed = .05, K.starArr = [], K.maxStar = 5, K.coldFrames = 3600, 
    K.curFrame = 0;
    class H {
        constructor() {
            this.isPassStartPos = !1, this.status = "none", this.targetKillNum = 3, this.curKillNum = 0;
        }
        clone() {
            let t = new H();
            return t.taskId = this.taskId, t.targetPos = this.targetPos.clone(), t.npcPos = this.npcPos.clone(), 
            t.status = this.status, t.startPos = this.startPos.clone(), t.isPassStartPos = this.isPassStartPos, 
            t;
        }
        dispose() {
            this.targetPos = null, this.npcPos = null, this.startPos = null;
        }
    }
    H.XUNLUO = 1, H.ZAIKE = 2, H.SHAOHEICHUE = 3, H.HUSONG = 4, H.SHOUJI = 5, H.NONE = "none", 
    H.NORMAL = "normal", H.COMPLETE = "complete";
    class z extends Laya.Sprite3D {
        constructor(t) {
            super(), this.type = "", this.isHeibang = !1, this.robotId = "", this.curAniName = "idle_none", 
            this.isInAttack = !1, this.heibangRadius = 100, this.isKillByUser = !1, this.isWuguLuren = !1, 
            this.config = t, this.blood = t.blood, this.attack = t.attack, this.initRobot();
        }
        initRobot() {
            if (this.robotItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getRobotUrlByName(this.config.type))), 
            this.addChild(this.robotItem), this.robotItem.transform.localPosition = new Laya.Vector3(), 
            this.robotItem.transform.localScale = new Laya.Vector3(.5, .5, .5), this.robotControl = new F(this), 
            this.config.hasGun) {
                var e = MGOBE.RandomUtil.random() < .5 ? z.GUN_AK74 : z.GUN_M4A1;
                let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getGunUrlByName(e)));
                b.getObj(e, this.robotItem).addChild(t), t.transform.localPosition = new Laya.Vector3(), 
                this.kaihuoEff = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrlArr()[Gt.EFF_KAIHUO])), 
                t.addChild(this.kaihuoEff), this.kaihuoEff.transform.localPosition = new Laya.Vector3(.5, .2, 0), 
                this.kaihuoEff.transform.localRotationEulerY += 90, this.kaihuoEff.active = !1;
            }
        }
        logicUpdate() {
            this.robotControl.update();
        }
        renderUpdate() {}
        heibangHide() {
            this.robotControl.seekTarget(null), this.isKillByUser = !0, ut.gta.recoverRobotRole(this);
        }
        heibangReUse() {
            this.isKillByUser = !1, this.blood = this.config.blood;
        }
        backToPos() {
            var t = 2 * Math.PI * MGOBE.RandomUtil.random(), e = 4 * MGOBE.RandomUtil.random() + 4;
            this.transform.localPositionX = this.heibangCenter.x + e * Math.cos(t), this.transform.localPositionZ = this.heibangCenter.z + e * Math.sin(t);
        }
        setIsHeibang(t, e, i) {
            this.taskOwner = t, this.heibangCenter = e, this.heibangRadius = i, this.isHeibang = !0, 
            t.userId == X.uid() ? (this.targetEff || (this.targetEff = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrl(Gt.EFF_TASK))), 
            this.addChild(this.targetEff), this.targetEff.transform.localScale = new Laya.Vector3(30, 30, 30), 
            this.targetEff.transform.localPosition = new Laya.Vector3()), this.targetEff.active = !0) : this.targetEff && (this.targetEff.active = !1);
        }
        isNormalAni() {
            return !(this.curAniName == z.ANI_DIE || this.curAniName == z.ANI_FALLDOWN || this.curAniName == z.ANI_GETUP);
        }
        attackByUser(e) {
            if (this.isNormalAni()) {
                this.play(z.ANI_FALLDOWN), this.robotControl.seekTarget(e), this.blood -= e.power, 
                this.blood = Math.max(0, this.blood), K.attack();
                let t = new R(30);
                t.addFrameCallback(t.totalFrames, () => {
                    if (!this.isKillByUser) {
                        if (0 == this.blood) return ut.gta.curFeederTask && ut.gta.curFeederTask.taskId == H.SHAOHEICHUE && !this.isKillByUser && e == this.taskOwner && X.uid() == e.userId && (ut.gta.curFeederTask.curKillNum++, 
                        ut.gta.curFeederTask.curKillNum >= ut.gta.curFeederTask.targetKillNum && (ut.gta.curFeederTask.status = H.COMPLETE, 
                        _t.showPopup(_t.TASK_WINDOW))), this.isKillByUser = !0, ut.gta.recoverRobotRole(this), 
                        e.userId == X.uid() && Zt.addExperience(Gt.getRobotDataByType(this.config.type).experience), 
                        void K.addScore(e.userId, this.config.score);
                        this.play(z.ANI_GETUP);
                        let t = new R(30);
                        t.addFrameCallback(t.totalFrames, () => {
                            this.isKillByUser || (this.play(this.config.hasGun ? z.ANI_WALK_GUN : z.ANI_WALK_NONE), 
                            this.robotControl.seekingTarget ? this.robotControl.findAPath() : this.robotControl.wander());
                        }), V.addFramerOnce(t);
                    }
                }), V.addFramerOnce(t);
            }
        }
        revive() {
            this.blood = this.config.blood, this.isKillByUser = !1, this.robotControl.seekTarget(null), 
            this.robotControl.revive(), this.robotControl.findAPath();
        }
        play(e, t = !1) {
            if (e == z.ANI_ATTACK_GUN || e == z.ANI_ATTACK_NONE ? this.isInAttack || (this.isInAttack = !0, 
            this.attackFramer = new R(30), this.attackFramer.addFrameCallback(this.attackFramer.totalFrames, () => {
                this.isKillByUser || this.attackTarget();
            }), V.addFramerOnce(this.attackFramer)) : (this.kaihuoEff && (this.kaihuoEff.active = !1), 
            V.clear(this.attackFramer), this.isInAttack = !1), this.curAniName != e || t) {
                this.curAniName = e;
                let t = this.robotItem.getComponent(Laya.Animator);
                t.crossFade(e, .1, 0, 0);
            }
        }
        attackTarget() {
            this.robotControl.seekingTarget ? (this.kaihuoEff && (this.kaihuoEff.active = !0), 
            this.isInAttack = !1, this.robotControl.seekingTarget.attackByRobot(this, this.config.hasGun ? z.ANI_ATTACK_GUN : z.ANI_ATTACK_NONE)) : this.kaihuoEff && (this.kaihuoEff.active = !1);
        }
        dispose() {
            this.taskOwner = null, this.targetEff && this.targetEff.destroy(), this.targetEff = null, 
            this.kaihuoEff && this.kaihuoEff.destroy(), this.kaihuoEff = null, Laya.timer.clear(this, this.attackTarget), 
            this.robotControl.dispose(), this.robotItem.destroy(), this.robotControl = null, 
            this.robotItem = null, this.attackFramer = null, this.heibangCenter = null, this.config = null;
        }
    }
    z.GUN_AK74 = "ak74", z.GUN_M4A1 = "m4a1", z.TYPE_COP = "cop", z.TYPE_GIRL = "girl", 
    z.TYPE_MAN1 = "man1", z.TYPE_MAN2 = "man2", z.TYPE_MAN3 = "man3", z.TYPE_MAN4 = "man4", 
    z.TYPE_SOLDIER = "soldier", z.TYPE_WOMAN = "woman", z.ANI_IDLE_NONE = "idle_none", 
    z.ANI_IDLE_GUN = "idle_gun", z.ANI_WALK_NONE = "walk_none", z.ANI_WALK_GUN = "walk_gun", 
    z.ANI_RUN_NONE = "run_none", z.ANI_RUN_GUN = "run_gun", z.ANI_ATTACK_NONE = "attack_none", 
    z.ANI_ATTACK_GUN = "attack_gun", z.ANI_FALLDOWN = "falldown", z.ANI_GETUP = "getup", 
    z.ANI_DIE = "die";
    class j {
        constructor(t) {
            if (this.speed = .6, this.angle = 0, this.wheelArr = [], this.wantToFindPath = !1, 
            this.gravity = -.03, this.resumeCheckStep = 0, this.inAttackStatus = !1, this.owner = t, 
            this.owner.config.type != Z.TYPE_TANK) {
                let e = this.owner.carItem.getChildByName("wheel");
                if (e) for (let t = 0; t < e.numChildren; t++) this.wheelArr.push(e.getChildAt(t));
            }
            this.pathFindTimer = V.addFramer(new R(180, 0, !0)), this.pathFindTimer.addFrameCallback(this.pathFindTimer.totalFrames, () => {
                this.findAPath();
            }), this.pathFollower = new B(this.owner, this.owner.carItem, .05), this.attackFramer = V.addFramer(new R(60, 0, !0)), 
            this.attackFramer.addFrameCallback(this.attackFramer.totalFrames, () => {
                this.inAttackStatus && this.seekingTarget && (this.seekingTarget.userId == X.uid() && ut.gta.user.shake(), 
                this.seekingTarget.attackByCar(this.owner));
            });
        }
        seekTarget(t) {
            this.seekingTarget != t && (this.seekingTarget = t);
        }
        update() {
            if (this.owner.isPaofei) {
                this.owner.paofeiVelocity.y += this.gravity;
                let t = this.owner.transform.localPositionX + this.owner.paofeiVelocity.x, e = this.owner.transform.localPositionZ + this.owner.paofeiVelocity.z;
                var a = y.getTerrainYValue(t, 0, e);
                let i = this.owner.transform.localPositionY + this.owner.paofeiVelocity.y;
                return i < a && (i = a, this.owner.paofeiVelocity.y *= -.8, Math.abs(this.owner.paofeiVelocity.y) < .06 && (this.owner.isPaofei = !1)), 
                y.canWalk("map1", t, e) || (t = this.owner.transform.localPositionX, e = this.owner.transform.localPositionZ), 
                void (this.owner.transform.localPosition = new Laya.Vector3(t, i, e));
            }
            var t;
            if (!this.owner.isNoBody) return this.follower && !this.seekingTarget ? (this.follower.update(), 
            this.rotateWheels(), void this.updateCarRotX()) : void (this.seekingTarget ? (t = this.seekingTarget.transform.localPositionX - this.owner.transform.localPositionX, 
            a = this.seekingTarget.transform.localPositionZ - this.owner.transform.localPositionZ, 
            Math.sqrt(t * t + a * a) < this.getMyAttackDist() ? (this.pathFindTimer.pause(), 
            this.angle = Math.atan2(a, t), this.owner.carItem.transform.localRotationEulerY = 90 - this.angle / Math.PI * 180, 
            this.wantToFindPath = !1, this.updateCarRotX(), this.owner.config.type == Z.TYPE_TANK ? (this.inAttackStatus = !0, 
            this.owner.showKaihuoEff()) : (this.owner.isNoBody = !0, ut.gta.createSeekMan(this.owner, this.getManType(), this.seekingTarget), 
            A.stopSound(w.POLICE)), this.resumeCheckStep = 0, this.pathFollower.setPathArr([])) : (this.inAttackStatus = !1, 
            this.owner.hideKaihuoEff(), this.pathFindTimer.resume(), this.pathFollower.update(), 
            this.wantToFindPath = !0, this.updateCarRotX()), this.rotateWheels()) : (this.inAttackStatus = !1, 
            this.pathFollower.speed = this.speed, this.pathFindTimer.resume(), this.pathFollower.update(), 
            this.updateCarRotX()));
        }
        baoCar(t) {
            A.playSound(w.EXPLOSION), t.userId == X.uid() && Zt.addExperience(Gt.getVehicleDataByType(this.owner.config.type).experience), 
            K.addScore(t.userId, Gt.getVehicleDataByType(this.owner.config.type).score);
            let e = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrlArr()[Gt.EFF_BAOZHA]));
            this.owner.parent.addChild(e), e.transform.localScale = new Laya.Vector3(10, 10, 10), 
            e.transform.position = this.owner.transform.position.clone(), e.transform.localPositionY += .25, 
            e.active = !1, e.active = !0, Laya.timer.once(1500, this, () => {
                e.destroy(!0);
            }), ut.gta.recoverRobotCar(this.owner);
        }
        getManType() {
            let t = "";
            switch (this.owner.config.type) {
              case Z.TYPE_POLICE:
                t = z.TYPE_COP;
                break;

              case Z.TYPE_ZHUANGJIA:
                t = z.TYPE_SOLDIER;
            }
            return t;
        }
        findAPath() {
            if (this.seekingTarget) {
                if (this.wantToFindPath) {
                    this.pathFinder && (this.pathFinder.dispose(), this.pathFinder = null);
                    let t = N.getRectByTwoPoints(new Laya.Point(this.owner.transform.localPositionX, this.owner.transform.localPositionZ), new Laya.Point(this.seekingTarget.transform.localPositionX, this.seekingTarget.transform.localPositionZ));
                    t.x -= 10, t.y -= 10, t.width += 20, t.height += 20, this.pathFinder = N.createPathFinder("map1", new O(t.x, t.y, t.width, t.height, 20, 20));
                    var e = this.pathFinder.findPathByPosition(this.owner.transform.localPositionX, this.owner.transform.localPositionZ, this.seekingTarget.transform.localPositionX, this.seekingTarget.transform.localPositionZ);
                    e ? (e = N.getPathPointArrByGridArr(e, this.pathFinder), this.pathFollower.setPathArr(e), 
                    this.pathFollower.speed = 4 * this.speed) : this.pathFollower.status == B.STOP && this.wander(), 
                    this.pathFinder.dispose(), this.pathFinder = null;
                }
            } else this.wander();
        }
        wander() {
            this.pathFollower.speed = this.speed;
            let t = [];
            t.push(new Laya.Point(this.owner.transform.localPositionX, this.owner.transform.localPositionZ));
            var e = 2 * Math.PI * MGOBE.RandomUtil.random(), i = 20 + 20 * MGOBE.RandomUtil.random();
            t.push(new Laya.Point(this.owner.transform.localPositionX + i * Math.cos(e), this.owner.transform.localPositionZ + i * Math.sin(e))), 
            y.checkIsDirToPos("map1", t[0].x, t[0].y, t[1].x, t[1].y) && this.pathFollower.setPathArr(t);
        }
        pause() {
            V.clear(this.resumeFramer), (this.follower || this.pathFollower).pause(), this.resumeFramer = new R(90), 
            this.resumeFramer.addFrameCallback(this.resumeFramer.totalFrames, this.resume.bind(this)), 
            V.addFramerOnce(this.resumeFramer);
        }
        resume() {
            (this.follower || this.pathFollower).resume();
        }
        getMySeekDist() {
            return 100;
        }
        getMyAttackDist() {
            return this.owner.config.type == Z.TYPE_TANK ? 40 : 20;
        }
        rotateWheels() {
            for (let t = 0; t < this.wheelArr.length; t++) this.wheelArr[t].transform.localRotationEulerX += 10;
        }
        dispose() {
            V.clear(this.resumeFramer), this.resumeFramer = null, this.attackFramer = null, 
            this.wheelArr.length = 0, this.wheelArr = null, this.follower && (this.follower.dispose(), 
            this.follower = null), this.pathFinder && (this.pathFinder.dispose(), this.pathFinder = null), 
            this.pathFollower && (this.pathFollower.dispose(), this.pathFollower = null), this.seekingTarget = null, 
            this.owner = null;
        }
        setRolePath(t) {
            this.follower || (this.follower = new B(this.owner, this.owner.carItem, this.speed, !0)), 
            this.follower.setPathArr(t);
            t = this.follower.createRandomPoint(!0);
            this.owner.transform.localPositionX = t.x, this.owner.transform.localPositionZ = t.y;
        }
        clear() {
            this.pathFollower.setPathArr([]), this.wantToFindPath = !1, this.inAttackStatus = !1, 
            this.owner.isPaofei = !1, this.owner.isNoBody = !1;
        }
        clearNormalParams() {
            this.pathFollower.setPathArr([]), this.wantToFindPath = !1, this.inAttackStatus = !1, 
            this.owner.isPaofei = !1;
        }
        updateCarRotX() {
            var t = -(this.owner.carItem.transform.localRotationEulerY / 180 * Math.PI + Math.PI / 2), e = this.owner.transform.localPositionX + -1 * Math.cos(t), i = this.owner.transform.localPositionZ + -1 * Math.sin(t), a = this.owner.transform.localPositionX + +Math.cos(t), s = this.owner.transform.localPositionZ + +Math.sin(t), r = y.getTerrainYValue(e, 0, i) - y.getTerrainYValue(a, 0, s), o = e - a, n = i - s, h = Math.sqrt(o * o + n * n - r * r), e = Math.atan2(h, r);
            this.owner.carItem.transform.localRotationEulerX = e / Math.PI * 180 - 90;
            a = this.owner.transform.localPositionX + -1 * Math.cos(t + Math.PI / 2) * .5, i = this.owner.transform.localPositionZ + -1 * Math.sin(t + Math.PI / 2) * .5, 
            s = this.owner.transform.localPositionX + .5 * +Math.cos(t + Math.PI / 2), t = this.owner.transform.localPositionZ + .5 * +Math.sin(t + Math.PI / 2), 
            r = y.getTerrainYValue(a, 0, i) - y.getTerrainYValue(s, 0, t), o = a - s, n = i - t, 
            h = Math.sqrt(o * o + n * n - r * r), e = Math.atan2(h, r);
            this.owner.carItem.transform.localRotationEulerZ = e / Math.PI * 180 - 90;
        }
        isSeekingUser(t) {
            return this.seekingTarget == t;
        }
    }
    class Z extends Laya.Sprite3D {
        constructor(t) {
            super(), this.isPaofei = !1, this.radius = 1, this.isNoBody = !1, this.isWuguCar = !1, 
            this.config = t, this.blood = t.blood, this.attack = t.attack, this.initCar();
        }
        initCar() {
            this.carItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getCarUrlByType(this.config.type))), 
            b.cloneMaterial(this.carItem), this.addChild(this.carItem), this.carItem.transform.localPosition = new Laya.Vector3(), 
            this.carControl = new j(this);
            var t = .936 * Gt.getCarScaleByType(this.config.type);
            if (this.carItem.transform.localScale = new Laya.Vector3(t, t, t), b.cloneMaterial(this.carItem), 
            this.config.type == Z.TYPE_TANK) {
                this.kaihuoEff = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrlArr()[Gt.EFF_KAIHUO]));
                let t = b.findAMesh(this.carItem, "paokou");
                t.addChild(this.kaihuoEff), this.kaihuoEff.transform.localPosition = new Laya.Vector3(0, 0, 0);
                let e = this.kaihuoEff.getChildAt(0);
                e.particleSystem.startSizeConstantMax = 16, e.particleSystem.startSizeConstant = 16, 
                this.kaihuoEff.active = !1;
            }
        }
        logicUpdate() {
            this.carControl.update();
        }
        renderUpdate() {}
        showKaihuoEff() {
            this.kaihuoEff && (this.kaihuoEff.active = !0);
        }
        hideKaihuoEff() {
            this.kaihuoEff && (this.kaihuoEff.active = !1);
        }
        update() {
            this.carControl.update();
        }
        revive() {
            this.blood = this.config.blood, this.carControl.clear();
        }
        dispose() {
            this.kaihuoEff && this.kaihuoEff.destroy(), this.kaihuoEff = null, A.stopSound(w.POLICE), 
            this.carControl.dispose(), this.carItem.destroy(), this.carControl = null, this.carItem = null, 
            this.config = null, this.paofeiVelocity = null;
        }
        attackByUser(t, e) {
            0 != this.blood && ("kick" != e && "zhongquan" != e || (e = new Laya.Vector3(), 
            Laya.Vector3.subtract(this.transform.localPosition, t.transform.localPosition, e), 
            Laya.Vector3.normalize(e, e), this.paofei(e), this.blood -= t.power, this.blood = Math.max(0, this.blood), 
            K.attack(), 0 == this.blood && this.carControl.baoCar(t)));
        }
        paofei(t) {
            t.y = .36, t.x *= .1, t.z *= .1, this.paofeiVelocity = t, this.isPaofei = !0;
        }
        pause() {
            this.carControl.pause();
        }
    }
    Z.TYPE_ZHUANGJIA = 0, Z.TYPE_TANK = 1, Z.TYPE_CAR1 = 2, Z.TYPE_CAR2 = 3, Z.TYPE_CAR3 = 4, 
    Z.TYPE_CAR4 = 5, Z.TYPE_POLICE = 6, Z.TYPE_PLANE = 7;
    class q {
        constructor() {
            this.roadId = "", this.roadPointArr = [];
        }
        createPointFromSprite3D(e) {
            for (let t = 0; t < e.numChildren; t++) {
                var i = e.getChildAt(t);
                this.roadPointArr.push(new Laya.Point(i.transform.localPositionX, i.transform.localPositionZ));
            }
        }
        distToRole(t) {
            var e = this.getCenterPoint(), i = t.transform.localPositionX - e.x, e = t.transform.localPositionZ - e.y;
            return Math.sqrt(i * i + e * e);
        }
        getCenterPoint() {
            let t = new Laya.Point(), e = 0, i = 0;
            for (let t = 0; t < this.roadPointArr.length; t++) e += this.roadPointArr[t].x, 
            i += this.roadPointArr[t].y;
            return t.x = e / this.roadPointArr.length, t.y = i / this.roadPointArr.length, t;
        }
        dispose() {
            this.roadPointArr.length = 0, this.roadPointArr = null;
        }
    }
    class J {
        constructor(t, e, i = null) {
            this.allwaysUpdate = !1, this.isMainRole = !1, this.isUpdateOnce = !1, this.destroyed = !1, 
            this.allwaysShow = !1, this.isOwnerDestroyAbled = !1, t.anchorX = t.anchorY = .5, 
            this.icon = t, this.owner = e, this.rot = i;
        }
        update(t) {
            if (!this.allwaysUpdate && !this.allwaysShow) {
                if (this.isUpdateOnce) return;
                this.isUpdateOnce = !0;
            }
            var e, i;
            this.icon.x = (-this.owner.transform.localPositionX + .5 * y.width * y.mapScale) / (y.width * y.mapScale) * t.mapWidth, 
            this.icon.y = (-this.owner.transform.localPositionZ + .5 * y.height * y.mapScale) / (y.height * y.mapScale) * t.mapHeight, 
            this.allwaysShow && (i = this.icon.x - t.centerX, e = this.icon.y - t.centerY, Math.sqrt(i * i + e * e) > .5 * t.miniWidth * .75 && (i = Math.atan2(e, i), 
            this.icon.x = t.centerX + Math.cos(i) * t.miniWidth * .5 * .75, this.icon.y = t.centerY + Math.sin(i) * t.miniWidth * .5 * .75)), 
            this.rot && (this.icon.rotation = -this.rot.transform.localRotationEulerY);
        }
        dispose(t = !1) {
            (t || this.isOwnerDestroyAbled) && this.owner && this.owner.destroy(), this.destroyed = !0, 
            this.icon.removeSelf(), this.icon = null, this.owner = null, this.rot = null;
        }
    }
    class Q {
        constructor(t) {
            this.carId = "", this.speed = .05, this.angle = 0, this.wantToFindPath = !1, this.owner = t, 
            this.pathFindTimer = V.addFramer(new R(180, 0, !0)), this.pathFindTimer.addFrameCallback(this.pathFindTimer.totalFrames, () => {
                this.findAPath();
            }), this.pathFollower = new B(this.owner, this.owner.robotItem, .05);
        }
        seekTarget(t) {
            this.seekingTarget != t && (this.seekingTarget = t);
        }
        update() {
            var t, e, i;
            this.owner.isInRenderView && this.owner.isNormalAni() && (this.seekingTarget ? (t = this.seekingTarget.transform.localPositionX - this.owner.transform.localPositionX, 
            e = this.seekingTarget.transform.localPositionZ - this.owner.transform.localPositionZ, 
            (i = Math.sqrt(t * t + e * e)) < this.getMyAttackDist() ? (this.pathFindTimer.pause(), 
            this.angle = Math.atan2(e, t), this.owner.robotItem.transform.localRotationEulerY = 90 - this.angle / Math.PI * 180, 
            this.owner.play(this.owner.config.hasGun ? tt.ANI_ATTACK_GUN : tt.ANI_ATTACK_NONE), 
            this.wantToFindPath = !1) : (this.pathFindTimer.resume(), i < this.getMySeekDist() ? (this.pathFollower.update(), 
            this.pathFollower.status == B.STOP ? this.wander() : this.owner.play(this.owner.config.hasGun ? tt.ANI_RUN_GUN : tt.ANI_RUN_NONE), 
            this.wantToFindPath = !0) : (this.wantToFindPath = !1, this.seekingTarget = null))) : (this.pathFollower.speed = this.speed, 
            this.pathFindTimer.resume(), this.pathFollower.update(), this.owner.play(this.owner.config.hasGun ? tt.ANI_WALK_GUN : tt.ANI_WALK_NONE)));
        }
        findAPath() {
            if (this.owner.isNormalAni()) if (this.seekingTarget) {
                if (this.wantToFindPath) {
                    this.pathFinder && (this.pathFinder.dispose(), this.pathFinder = null);
                    let t = N.getRectByTwoPoints(new Laya.Point(this.owner.transform.localPositionX, this.owner.transform.localPositionZ), new Laya.Point(this.seekingTarget.transform.localPositionX, this.seekingTarget.transform.localPositionZ));
                    t.x -= 10, t.y -= 10, t.width += 20, t.height += 20, this.pathFinder = N.createPathFinder("map1", new O(t.x, t.y, t.width, t.height, 20, 20));
                    var e = this.pathFinder.findPathByPosition(this.owner.transform.localPositionX, this.owner.transform.localPositionZ, this.seekingTarget.transform.localPositionX, this.seekingTarget.transform.localPositionZ);
                    e ? (e = N.getPathPointArrByGridArr(e, this.pathFinder), this.pathFollower.setPathArr(e), 
                    this.pathFollower.speed = 4 * this.speed) : (this.seekingTarget = null, this.wander()), 
                    this.pathFinder.dispose(), this.pathFinder = null;
                }
            } else this.wander();
        }
        wander() {
            this.pathFollower.speed = this.speed;
            let t = [];
            t.push(new Laya.Point(this.owner.transform.localPositionX, this.owner.transform.localPositionZ));
            var e = 2 * Math.PI * Math.random(), i = 20 + 20 * Math.random();
            t.push(new Laya.Point(this.owner.transform.localPositionX + i * Math.cos(e), this.owner.transform.localPositionZ + i * Math.sin(e))), 
            y.checkIsDirToPos("map1", t[0].x, t[0].y, t[1].x, t[1].y) && this.pathFollower.setPathArr(t);
        }
        getMySeekDist() {
            return 100;
        }
        getMyAttackDist() {
            return this.owner.config.hasGun ? 20 : 2;
        }
        dispose() {
            V.clear(this.pathFindTimer), this.pathFindTimer = null, this.pathFollower && (this.pathFollower.dispose(), 
            this.pathFollower = null), this.pathFinder && (this.pathFinder.dispose(), this.pathFinder = null), 
            this.owner = null, this.seekingTarget = null;
        }
        clear() {
            this.pathFollower.setPathArr([]), this.wantToFindPath = !1;
        }
    }
    class $ {
        constructor() {}
        static reset() {
            this.score = 0, this.star = 0, Zt.gta && Zt.gta.user && (Zt.gta.user.starNum = this.star), 
            s.event("star_change", [ this.star, !0 ]);
        }
        static attack() {
            this.curFrame = 0;
        }
        static addScore(t) {
            this.score += t;
        }
        static update() {
            this.curFrame++, this.curFrame > this.coldFrames && (this.score -= this.speed, this.score = Math.max(0, this.score));
            var t = this.getStar();
            t != this.star && (this.star = t, Zt.gta.user.starNum = this.star, s.event("star_change", [ this.star, !0 ]));
        }
        static getStar() {
            for (let t = Gt.starDataArr.length - 1; 0 <= t; t--) if (this.score >= Gt.starDataArr[t].score) return Gt.starDataArr[t].star;
            return 0;
        }
    }
    $.score = 0, $.speed = .05, $.star = 0, $.maxStar = 5, $.coldFrames = 3600, $.curFrame = 0;
    class tt extends Laya.Sprite3D {
        constructor(t) {
            super(), this.type = "", this.isInRenderView = !0, this.robotId = "", this.curAniName = "idle_none", 
            this.isInAttack = !1, this.isHeibang = !1, this.heibangRadius = 100, this.isKillByUser = !1, 
            this.config = t, this.blood = t.blood, this.attack = t.attack, this.initRobot();
        }
        initRobot() {
            if (this.robotItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getRobotUrlByName(this.config.type))), 
            this.addChild(this.robotItem), this.robotItem.transform.localPosition = new Laya.Vector3(), 
            this.robotItem.transform.localScale = new Laya.Vector3(.5, .5, .5), this.robotControl = new Q(this), 
            this.config.hasGun) {
                var e = Math.random() < .5 ? tt.GUN_AK74 : tt.GUN_M4A1;
                let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getGunUrlByName(e)));
                b.getObj(e, this.robotItem).addChild(t), t.transform.localPosition = new Laya.Vector3(), 
                this.kaihuoEff = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrlArr()[Gt.EFF_KAIHUO])), 
                t.addChild(this.kaihuoEff), this.kaihuoEff.transform.localPosition = new Laya.Vector3(.5, .2, 0), 
                this.kaihuoEff.transform.localRotationEulerY += 90, this.kaihuoEff.active = !1;
            }
        }
        setIsHeibang(t, e) {
            this.heibangCenter = t, this.heibangRadius = e, this.isHeibang = !0, this.targetEff || (this.targetEff = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrl(Gt.EFF_TASK))), 
            this.addChild(this.targetEff), this.targetEff.transform.localScale = new Laya.Vector3(30, 30, 30), 
            this.targetEff.transform.localPosition = new Laya.Vector3());
        }
        backToPos() {
            var t = 2 * Math.PI * Math.random(), e = 4 * Math.random() + 4;
            this.transform.localPositionX = this.heibangCenter.x + e * Math.cos(t), this.transform.localPositionZ = this.heibangCenter.z + e * Math.sin(t);
        }
        update() {
            this.isInRenderView && this.robotControl.update();
        }
        setIsRender(t, e = !0) {
            this.isInRenderView = t, this.active = t, this.isInRenderView ? (e && (this.blood = this.config.blood), 
            this.play(this.config.hasGun ? tt.ANI_WALK_GUN : tt.ANI_WALK_NONE)) : this.play(tt.ANI_IDLE_NONE);
        }
        dispose() {
            this.targetEff && this.targetEff.destroy(), this.targetEff = null, this.kaihuoEff && this.kaihuoEff.destroy(), 
            this.kaihuoEff = null, Laya.timer.clear(this, this.attackTarget), this.robotControl.dispose(), 
            this.robotItem.destroy(), this.robotControl = null, this.robotItem = null;
        }
        heibangReUse() {
            this.isKillByUser = !1, this.blood = this.config.blood;
        }
        heibangHide() {
            this.isKillByUser = !0, this.setIsRender(!1);
        }
        attackByUser(t) {
            this.isNormalAni() && this.isInRenderView && (this.play(tt.ANI_FALLDOWN), this.robotControl.seekTarget(t), 
            this.blood -= t.power, this.blood = Math.max(0, this.blood), $.attack(), Laya.timer.once(1e3, this, () => 0 == this.blood ? (Zt.gta.curFeederTask && Zt.gta.curFeederTask.taskId == H.SHAOHEICHUE && !this.isKillByUser && (Zt.gta.curFeederTask.curKillNum++, 
            Zt.gta.curFeederTask.curKillNum >= Zt.gta.curFeederTask.targetKillNum && (Zt.gta.curFeederTask.status = H.COMPLETE, 
            _t.showPopup(_t.TASK_WINDOW))), this.isKillByUser = !0, this.setIsRender(!1), Zt.addExperience(Gt.getRobotDataByType(this.config.type).experience), 
            void $.addScore(this.config.score)) : (this.play(tt.ANI_GETUP), void Laya.timer.once(1e3, this, () => {
                this.play(this.config.hasGun ? tt.ANI_WALK_GUN : tt.ANI_WALK_NONE), this.robotControl.seekingTarget ? this.robotControl.findAPath() : this.robotControl.wander();
            }))));
        }
        isNormalAni() {
            return !(this.curAniName == tt.ANI_DIE || this.curAniName == tt.ANI_FALLDOWN || this.curAniName == tt.ANI_GETUP);
        }
        play(e, t = !1) {
            if (e == tt.ANI_ATTACK_GUN || e == tt.ANI_ATTACK_NONE ? this.isInAttack || (this.isInAttack = !0, 
            Laya.timer.once(1e3, this, this.attackTarget)) : (this.kaihuoEff && (this.kaihuoEff.active = !1), 
            Laya.timer.clear(this, this.attackTarget), this.isInAttack = !1), this.curAniName != e || t) {
                this.curAniName = e;
                let t = this.robotItem.getComponent(Laya.Animator);
                t.crossFade(e, .1, 0, 0);
            }
        }
        attackTarget() {
            this.robotControl.seekingTarget ? (this.kaihuoEff && (this.kaihuoEff.active = !0), 
            this.isInAttack = !1, this.robotControl.seekingTarget.attackByRobot(this, this.config.hasGun ? tt.ANI_ATTACK_GUN : tt.ANI_ATTACK_NONE)) : this.kaihuoEff && (this.kaihuoEff.active = !1);
        }
    }
    tt.GUN_AK74 = "ak74", tt.GUN_M4A1 = "m4a1", tt.TYPE_COP = "cop", tt.TYPE_GIRL = "girl", 
    tt.TYPE_MAN1 = "man1", tt.TYPE_MAN2 = "man2", tt.TYPE_MAN3 = "man3", tt.TYPE_MAN4 = "man4", 
    tt.TYPE_SOLDIER = "soldier", tt.TYPE_WOMAN = "woman", tt.ANI_IDLE_NONE = "idle_none", 
    tt.ANI_IDLE_GUN = "idle_gun", tt.ANI_WALK_NONE = "walk_none", tt.ANI_WALK_GUN = "walk_gun", 
    tt.ANI_RUN_NONE = "run_none", tt.ANI_RUN_GUN = "run_gun", tt.ANI_ATTACK_NONE = "attack_none", 
    tt.ANI_ATTACK_GUN = "attack_gun", tt.ANI_FALLDOWN = "falldown", tt.ANI_GETUP = "getup", 
    tt.ANI_DIE = "die";
    class et extends Laya.Sprite3D {
        constructor(t) {
            super(), this.isInRenderView = !0, this.isOnshow = !0, this.isTalkingToUser = !1, 
            this.npcId = t, this.npcEff = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrl(Gt.EFF_TASK))), 
            this.addChild(this.npcEff);
            this.npcEff.transform.localScale = new Laya.Vector3(60, 60, 60), this.npcEff.transform.localPosition = new Laya.Vector3();
            t = [ tt.TYPE_MAN1, tt.TYPE_MAN2, tt.TYPE_MAN3, tt.TYPE_MAN4, tt.TYPE_WOMAN ];
            this.npcRole = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getRobotUrlByName(t[Math.floor(t.length * Math.random())]))), 
            this.addChild(this.npcRole), this.npcRole.transform.localScale = new Laya.Vector3(.5, .5, .5), 
            this.npcRole.transform.localPosition = new Laya.Vector3(-3, 0, 0), this.npcRole.transform.localRotationEulerY += 90, 
            Laya.timer.once(100, this, () => {
                (this.npcRole || this.npcRole.transform) && this.npcRole.getComponent(Laya.Animator).play(tt.ANI_WALK_NONE, 0, 0);
            }), this.mapFlag = new J(new Laya.Image("images/game/0" + this.npcId + ".png"), this), 
            this.mapFlag.icon.anchorX = this.mapFlag.icon.anchorY = .5, this.mapFlag.isMainRole = !1, 
            this.mapFlag.allwaysUpdate = !1, this.mapFlag.icon.scale(.5, .5);
        }
        show() {
            this.isOnshow || (this.isOnshow = !0, this.active = !0, (this.npcRole || this.npcRole.transform) && this.npcRole.getComponent(Laya.Animator).play(tt.ANI_WALK_NONE, 0, 0));
        }
        hide() {
            this.isOnshow && (this.isOnshow = !1, Laya.timer.clearAll(this), this.active = !1);
        }
        dispose() {
            Laya.timer.clearAll(this), this.npcEff.destroy(!0), this.npcRole.destroy(!0);
        }
        isRoleNearMe(t, e) {
            return Laya.Vector3.distance(t.transform.localPosition.clone(), this.transform.localPosition.clone()) < e;
        }
    }
    class it {
        constructor(t) {
            this.moveCenterX = 0, this.moveCenterY = 0, this.moveCenterRaidus = 197, this.preRotateX = 0, 
            this.preRotateY = 0, this.moveTouchId = -1, this.rotateTouchId = -1, this.gameUI = t;
        }
        enable() {
            this.gameUI.moveItem.pos(this.moveCenterRaidus, this.moveCenterRaidus), this.moveTouchId = -1, 
            this.rotateTouchId = -1, Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), 
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.stage.on(Laya.Event.ROLL_OUT, this, this.onMouseUp), 
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
        }
        onKeyDown(t) {
            this.checkKeyBoardHandler();
        }
        onKeyUp(t) {
            this.checkKeyBoardHandler();
        }
        checkKeyBoardHandler() {
            let t = 0, e = 0;
            var i;
            Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.A) && Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.D) || (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.A) ? t = -1 : Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.D) && (t = 1)), 
            Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.W) && Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.S) || (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.W) ? e = -1 : Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.S) && (e = 1)), 
            0 == t && 0 == e ? this.moveCallbackHandler(0, 0) : (i = Math.atan2(e, t), this.moveCallbackHandler(this.moveCenterRaidus, i)), 
            Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.SPACE) && this.spaceCallbackHandler && this.spaceCallbackHandler();
        }
        setControlCallback(t, e, i = null) {
            this.moveCallbackHandler = t, this.rotateCallbackHandler = e, this.spaceCallbackHandler = i;
        }
        disEnable() {
            this.moveTouchId = -1, this.rotateTouchId = -1, this.resetMoveItem(), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), 
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.stage.off(Laya.Event.ROLL_OUT, this, this.onMouseUp), 
            Laya.stage.off(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.off(Laya.Event.KEY_UP, this, this.onKeyUp);
        }
        resetMoveItem() {
            Laya.Tween.to(this.gameUI.moveItem, {
                x: this.moveCenterRaidus,
                y: this.moveCenterRaidus
            }, 150, Laya.Ease.linearNone);
        }
        onMouseDown(t) {
            -1 == this.moveTouchId && this.isInMoveRect(Laya.stage.mouseX, Laya.stage.mouseY) ? (this.moveTouchId = t.touchId, 
            this.moveCenterX = Laya.stage.mouseX, this.moveCenterY = Laya.stage.mouseY) : -1 == this.rotateTouchId && this.isInRotateRect(Laya.stage.mouseX, Laya.stage.mouseY) && (this.rotateTouchId = t.touchId, 
            this.preRotateX = Laya.stage.mouseX, this.preRotateY = Laya.stage.mouseY);
        }
        onMouseMove(t) {
            var e, i, a;
            -1 != this.moveTouchId && t.touchId == this.moveTouchId ? (a = Laya.stage.mouseX - this.moveCenterX, 
            e = Laya.stage.mouseY - this.moveCenterY, i = Math.min(this.moveCenterRaidus, Math.sqrt(a * a + e * e)), 
            a = Math.atan2(e, a), this.gameUI.moveItem.x = this.moveCenterRaidus + i * Math.cos(a), 
            this.gameUI.moveItem.y = this.moveCenterRaidus + i * Math.sin(a), this.moveCallbackHandler(i, a)) : -1 != this.rotateTouchId && t.touchId == this.rotateTouchId && (a = Laya.stage.mouseX - this.preRotateX, 
            t = Laya.stage.mouseY - this.preRotateY, this.rotateCallbackHandler(a, t), this.preRotateX = Laya.stage.mouseX, 
            this.preRotateY = Laya.stage.mouseY);
        }
        onMouseUp(t) {
            -1 != this.moveTouchId && t.touchId == this.moveTouchId ? (this.moveTouchId = -1, 
            this.moveCallbackHandler(0, 0), this.resetMoveItem()) : -1 != this.rotateTouchId && t.touchId == this.rotateTouchId && (this.rotateTouchId = -1);
        }
        isInMoveRect(t, e) {
            let i = new Laya.Rectangle(0, .5 * Laya.stage.height, +Laya.stage.width / 3, .5 * Laya.stage.height);
            return i.contains(t, e);
        }
        isInRotateRect(t, e) {
            return !this.isInMoveRect(t, e);
        }
        dispose() {
            this.disEnable(), this.moveCallbackHandler = null, this.rotateCallbackHandler = null, 
            this.spaceCallbackHandler = null, this.gameUI = null;
        }
    }
    class at {
        constructor() {}
        static enable() {
            this.preTime = Date.now(), this.isUpdate = !0;
        }
        static disable() {
            this.isUpdate = !1;
        }
        static play(t, e, i = !1) {
            let a = this.animatorPool[t];
            a.play(e, i);
        }
        static gotoPlayAndStop(t, e) {
            let i = this.animatorPool[t];
            i.gotoAndStop(e);
        }
        static stop(t) {
            let e = this.animatorPool[t];
            e.stop();
        }
        static addFrameCallbackToAnimation(t, e, i) {
            let a = this.animatorPool[t];
            return a.addFrameCallback(e, i);
        }
        static removeFrameCallbackFromAnimation(t, e) {
            let i = this.animatorPool[t];
            i.removeFrameCallback(e);
        }
        static removeAnimator(t) {
            delete this.animatorPool[t.animationId];
        }
        static recoverAnimator(t) {
            return this.animatorPool[t.animationId] = t;
        }
        static clearAll() {
            for (var t in this.animatorPool) this.clear(t);
            this.animatorId = 0;
        }
        static getAnimator(t) {
            return this.animatorPool[t];
        }
        static clear(t) {
            let e = this.animatorPool[t];
            e && e.dispose(), delete this.animatorPool[t];
        }
        static clearAnimator(t) {
            t && this.clear(t.animationId);
        }
        static add(t) {
            return "" != t.animationId ? this.recoverAnimator(t) : (this.animatorId++, (this.animatorPool["ani" + this.animatorId] = t).animationId = "ani" + this.animatorId, 
            t);
        }
        static update() {
            var t, e = Date.now(), i = e - this.preTime;
            for (t in this.animatorPool) this.animatorPool[t].render(i);
            this.preTime = e;
        }
    }
    at.animatorPool = {}, at.preTime = 0, at.animatorId = 0, at.isUpdate = !1;
    class st {
        constructor(t, e, i, a = !1) {
            this.currentFrame = 0, this.totalFrames = 0, this.status = "stop", this.isLooping = !1, 
            this.isReverse = !1, this.dt = 0, this.callbackPool = {}, this.callbackIndex = -1, 
            this.animationId = "", this.key = t, e.speed = 1e-11, this.animator = e, this.isLooping = a, 
            this.totalFrames = i;
        }
        play(t, e = !1) {
            if (!e && !this.isLooping && this.status == st.STATUS_STOP) if (this.isReverse) {
                if (t == this.currentFrame && 0 == t) return;
            } else if (t == this.currentFrame && t == this.totalFrames) return;
            this.isLooping = e, this.currentFrame = t, this.status = st.STATUS_NORMAL, this.updateAnimator();
        }
        gotoAndStop(t) {
            this.play(t), this.stop(), this.updateAnimator();
        }
        stop() {
            this.status = st.STATUS_STOP;
        }
        render(t) {
            this.status != st.STATUS_STOP && (this.dt += t, this.isReverse ? (this.currentFrame--, 
            0 != this.currentFrame || this.isLooping ? this.currentFrame < 0 && (this.currentFrame = this.totalFrames) : this.status = st.STATUS_STOP) : (this.currentFrame++, 
            this.currentFrame != this.totalFrames || this.isLooping ? this.currentFrame > this.totalFrames && (this.currentFrame = 0) : this.status = st.STATUS_STOP), 
            this.updateAnimator());
        }
        updateAnimator() {
            var t = this.currentFrame / this.totalFrames;
            this.animator.play(this.key, 0, t);
            let e = this.callbackPool["frame" + this.currentFrame];
            if (e) for (var i in e) e[i]();
            this.dt = 0;
        }
        addFrameCallback(t, e) {
            this.callbackIndex++;
            let i = this.callbackPool["frame" + t];
            return i || (i = {}, this.callbackPool["frame" + t] = i), i["callback" + this.callbackIndex] = e, 
            this.callbackIndex;
        }
        removeFrameCallback(t) {
            for (var e in this.callbackPool) if (this.callbackPool[e]["callback" + t]) {
                delete this.callbackPool[e]["callback" + t];
                break;
            }
        }
        dispose() {
            for (var t in this.callbackPool) {
                for (var e in this.callbackPool[t]) delete this.callbackPool[t][e];
                delete this.callbackPool[t];
            }
            this.callbackPool = null, this.animator = null;
        }
    }
    st.STATUS_NORMAL = "normal", st.STATUS_STOP = "stop";
    class rt {
        constructor() {}
        static downQueueZip(a, s) {
            if (Laya.Browser.onMiniGame) {
                let i = [];
                for (let t = 0; t < a.length; t++) this.downloadZip(a[t], (t, e) => {
                    t ? i.push("") : i.push(e), i.length == a.length && s(i);
                });
            } else s([]);
        }
        static downloadZip(t, e) {
            Laya.Browser.onMiniGame ? Laya.Browser.window.wx.downloadFile({
                url: t,
                success: function(t) {
                    t = t.tempFilePath;
                    e(!0, t);
                },
                fail: function(t) {
                    e(!1);
                }
            }) : e(!1);
        }
        static unZip(e, i, a) {
            if (Laya.Browser.onMiniGame) {
                this.path = Laya.Browser.window.wx.env.USER_DATA_PATH + "/";
                let t = Laya.Browser.window.wx.getFileSystemManager();
                t.unzip({
                    zipFilePath: e,
                    targetPath: this.path + i,
                    success(t) {
                        console.log("UnZipComplete:", e), a(!0);
                    },
                    fail(t) {
                        a(!1);
                    }
                });
            } else a(!1);
        }
        static unZipQueue(e, i) {
            let a = 0;
            for (let t = 0; t < e.length; t++) this.unZip(e[t].path, e[t].folder, () => {
                a++, a == e.length && i();
            });
        }
    }
    rt.path = "";
    class ot extends Laya.Sprite3D {
        constructor(t) {
            super(), this.wheelArr = [], this.animations = {}, this.curAniName = "stand", this.skinId = 1, 
            this.skinId = t, this.initRole(t), this.initAnimation();
        }
        initRole(t) {
            t = Gt.roleResArr[t - 1];
            this.bianshenItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + t.bianshenUrl)), 
            this.roleItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + t.roleUrl));
            let e = b.findAMesh(this.roleItem, "sword");
            e && (e.active = !1), this.carItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + t.carUrl)), 
            this.addChild(this.roleItem), this.addChild(this.bianshenItem), this.addChild(this.carItem), 
            this.roleItem.transform.localPosition = new Laya.Vector3(), this.carItem.transform.localPosition = new Laya.Vector3(), 
            this.bianshenItem.transform.localPosition = new Laya.Vector3(0, 0, 0);
            t = 1.5;
            this.roleItem.transform.localScale = new Laya.Vector3(.05 * t, .05 * t, .05 * t), 
            this.bianshenItem.transform.localScale = new Laya.Vector3(75, 75, 75);
            this.carItem.transform.localScale = new Laya.Vector3(75 * 1.36, 75 * 1.36, 75 * 1.36), 
            this.bianshenItem.active = !1, this.carItem.active = !1, this.wheelArr = [], this.setWheelArr();
        }
        initAnimation() {
            var t = this.roleItem.getComponent(Laya.Animator), e = this.bianshenItem.getComponent(Laya.Animator);
            this.animations = {
                stand: new st("walk", t, 30),
                walk: new st("walk", t, 45),
                run: new st("run", t, 35),
                jump: new st("jump", t, 30),
                kick: new st("kick", t, 20),
                zhongquan: new st("attack4", t, 30),
                attack1: new st("attack1", t, 30),
                attack2: new st("attack2", t, 30),
                attack3: new st("attack3", t, 30),
                bianshenCar: new st("", e, 30),
                bianshenRole: new st("", e, 30),
                shouji: new st("hit", t, 10),
                fail: new st("fail", t, 30)
            }, this.animations.bianshenCar.isReverse = !0;
        }
        setWheelArr() {
            if (1 == this.skinId) for (let t = 0; t < this.carItem.getChildByName("wheel").numChildren; t++) this.wheelArr.push(this.carItem.getChildByName("wheel").getChildAt(t)); else this.wheelArr = b.findMeshArr(this.carItem, [], "wheel", !0);
        }
        playAnimation(i, a = !1) {
            if (i != this.curAniName) {
                let t = this.animations[this.curAniName];
                t.stop(), at.removeAnimator(t), this.curAniName = i;
                let e = this.animations[i];
                at.add(e), "stand" == i ? e.gotoAndStop(5) : (i = e.isReverse ? e.totalFrames : 0, 
                e.play(i, a));
            }
        }
        destroyCurRoleAni() {
            for (var t in this.animations) at.clearAnimator(this.animations[t]), delete this.animations[t];
        }
        update(t) {
            if (0 < t) for (let t = 0; t < this.wheelArr.length; t++) this.wheelArr[t].transform.localRotationEulerX -= 10;
            if (t < 0) for (let t = 0; t < this.wheelArr.length; t++) this.wheelArr[t].transform.localRotationEulerX += 10;
        }
        playEff(t) {
            switch (t) {
              case Gt.EFF_DILIE:
                this.dilieEff || (this.dilieEff = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrlArr()[t])), 
                this.dilieEff.transform.localPositionY = .05, this.addChild(this.dilieEff)), this.dilieEff.active = !1, 
                this.dilieEff.active = !0;
                break;

              case Gt.EFF_BAOZHA:
            }
        }
        dispose() {
            for (let t = 0; t < this.wheelArr.length; t++) this.wheelArr[t].destroy();
            for (var t in this.wheelArr.length = 0, this.wheelArr = null, this.roleItem.destroy(), 
            this.roleItem = null, this.bianshenItem.destroy(), this.bianshenItem = null, this.carItem.destroy(), 
            this.carItem = null, this.shoujiEff && (this.shoujiEff.destroy(), this.shoujiEff = null), 
            this.dilieEff && (this.dilieEff.destroy(), this.dilieEff = null), this.animations) at.clearAnimator(this.animations[t]), 
            delete this.animations[t];
            this.animations = null;
        }
        changeSkin(t) {
            console.log("用户更改了皮肤！"), this.destroyCurRoleAni(), this.skinId = t;
            var e = this.roleItem.active, i = this.carItem.active, a = this.bianshenItem.active;
            this.roleItem.destroy(!0), this.carItem.destroy(!0), this.bianshenItem.destroy(!0);
            t = Gt.roleResArr[t - 1];
            this.bianshenItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + t.bianshenUrl)), 
            this.roleItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + t.roleUrl));
            let s = b.findAMesh(this.roleItem, "sword");
            s && (s.active = !1), this.carItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + t.carUrl)), 
            this.addChild(this.roleItem), this.addChild(this.bianshenItem), this.addChild(this.carItem), 
            this.roleItem.transform.localPosition = new Laya.Vector3(), this.carItem.transform.localPosition = new Laya.Vector3(), 
            this.bianshenItem.transform.localPosition = new Laya.Vector3(0, 0, 0);
            t = 1.5;
            this.roleItem.transform.localScale = new Laya.Vector3(.05 * t, .05 * t, .05 * t), 
            this.bianshenItem.transform.localScale = new Laya.Vector3(75, 75, 75);
            this.carItem.transform.localScale = new Laya.Vector3(75 * 1.36, 75 * 1.36, 75 * 1.36), 
            this.initAnimation(), this.roleItem.active = e, this.carItem.active = i, this.bianshenItem.active = a, 
            this.playAnimation(this.curAniName), this.wheelArr = [], this.setWheelArr();
        }
    }
    class nt {
        constructor(t) {
            this.attackType = "", this.reviveIndex = 0, this.owner = t, this.checkWalkRunOrOhterFramer = new R(30, 0, !0), 
            this.checkWalkRunOrOhterFramer.addFrameCallback(this.checkWalkRunOrOhterFramer.totalFrames, () => {
                this.check();
            }), V.addFramer(this.checkWalkRunOrOhterFramer);
        }
        update() {
            var t, e;
            this.owner.isGameOver ? 90 == this.reviveIndex ? (this.owner.revive(), this.reviveIndex = 0) : this.reviveIndex++ : (e = ut.gta.getAnUserAttackableTarget(this.owner)) ? ("" == this.attackType && (this.attackType = MGOBE.RandomUtil.random() < .2 ? W.ZHONGQUAN : W.ATTACK), 
            t = this.attackType == W.ZHONGQUAN ? 10 : 2, e.dist > t && (this.owner.isRun || D.executeCommand(new W({
                playerId: this.owner.userId,
                a: W.RUNWALK
            })), e = e.target, e = Math.PI + Math.atan2(e.transform.localPositionZ - this.owner.transform.localPositionZ, e.transform.localPositionX - this.owner.transform.localPositionX), 
            D.executeCommand(new W({
                playerId: this.owner.userId,
                a: W.MOVE,
                p: {
                    speed: 147.75,
                    angle: e
                }
            })))) : this.attackType = "";
        }
        check() {
            var t, e, i, a;
            this.owner.isGameOver || (t = ut.gta.getAnUserAttackableTarget(this.owner), MGOBE.RandomUtil.random() < .03 && D.executeCommand(new W({
                playerId: this.owner.userId,
                a: W.JUMP
            })), t && "" != this.attackType ? (i = (e = this.attackType) == W.ZHONGQUAN ? 10 : 4, 
            t.dist < i && (a = new W({
                playerId: this.owner.userId,
                a: e
            }), D.executeCommand(a))) : (a = 394 * MGOBE.RandomUtil.random() / 2, MGOBE.RandomUtil.random() < .2 && D.executeCommand(new W({
                playerId: this.owner.userId,
                a: W.RUNWALK
            })), D.executeCommand(new W({
                playerId: this.owner.userId,
                a: W.MOVE,
                p: {
                    speed: a,
                    angle: 2 * Math.PI * MGOBE.RandomUtil.random()
                }
            }))));
        }
        dispose() {
            V.clear(this.checkWalkRunOrOhterFramer), this.checkWalkRunOrOhterFramer = null, 
            this.owner = null;
        }
    }
    class ht extends Laya.Sprite3D {
        constructor(t, e = null) {
            super(), this.cameraParams = {
                rotX: 0,
                rotY: 0
            }, this.lookAtAngle = -Math.PI / 2, this.lookAtDist = 6, this.speed = 0, this.targetSpeed = 0, 
            this.angle = 0, this.isFollowerPath = !1, this.isRun = !1, this.isCar = !1, this.isJump = !1, 
            this.gravity = -.05, this.isInCar = !1, this.attackAniArr = [ "attack1", "attack2", "attack3" ], 
            this.attackAniId = 0, this.isBianshening = !1, this.roleId = "", this.starNum = 0, 
            this.totalBlood = 100, this.curBlood = 100, this.power = 20, this.isGameOver = !1, 
            this.isRobot = !1, this.curAction = "stand", this.framerPool = {}, this.skinId = 1, 
            this.isPause = !1, this.userId = t, this.camera = e, this.initRole(), this.initControl();
        }
        initRole() {
            let e = new Y();
            for (let t = 0; t < X.room.roomInfo.playerList.length; t++) if (X.room.roomInfo.playerList[t].id == this.userId) {
                e.parse(X.room.roomInfo.playerList[t].customProfile);
                break;
            }
            this.skinId = e.skinId, this.tishen = new ot(e.skinId), this.hitVelocity = new Laya.Vector3(), 
            this.bianshenItem = new Laya.Sprite3D(), this.roleItem = new Laya.Sprite3D(), this.carItem = new Laya.Sprite3D(), 
            this.addChild(this.roleItem), this.addChild(this.bianshenItem), this.addChild(this.carItem), 
            this.roleItem.transform.localPosition = new Laya.Vector3(), this.carItem.transform.localPosition = new Laya.Vector3(), 
            this.bianshenItem.transform.localPosition = new Laya.Vector3(0, 0, 0);
            var t = this.userId == X.uid() ? "images/game/6-guan01.png" : "images/game/6-guan03.png";
            this.mapFlag = new J(new Laya.Image(t), this, this.roleItem), this.mapFlag.icon.anchorX = this.mapFlag.icon.anchorY = .5, 
            this.userId == X.uid() && (this.mapFlag.isMainRole = !0), this.mapFlag.allwaysUpdate = !0;
            t = Gt.roleDataArr[e.skinId - 1];
            this.totalBlood = this.curBlood = t.blood, this.power = t.attack;
        }
        setIsRobot() {
            this.isRobot = !0, this.power *= .5, this.robotControl = new nt(this);
        }
        initControl() {
            if (this.cameraParams.rotY = 90 - this.lookAtAngle / Math.PI * 180, this.cameraParams.rotX = Math.max(-90, Math.min(90, this.cameraParams.rotX)), 
            this.userId == X.uid()) {
                let t = new it(_t.getView(_t.MULGAME_VIEW).getUIView());
                this.userControl = t, t.enable(), t.setControlCallback((t, e) => {
                    this.isFollowerPath || this.isGameOver || _t.getTopViewType([]) == _t.MULGAME_VIEW && X.sendFrame({
                        a: W.MOVE,
                        p: {
                            speed: t,
                            angle: e
                        }
                    });
                }, (t, e) => {
                    _t.getTopViewType([]) == _t.MULGAME_VIEW && (this.isInCar || X.sendFrame({
                        a: W.ROTATE,
                        p: {
                            angleX: t,
                            angleY: e
                        }
                    }));
                }, () => {
                    _t.getTopViewType([]) == _t.MULGAME_VIEW && X.sendFrame({
                        a: W.JUMP
                    });
                });
            }
        }
        move(t, e) {
            if (this.isInCar) return 0 == t ? A.stopSound(w.ENGINE) : 0 == this.targetSpeed && (0 < t ? this.userId == X.uid() && A.playSound(w.CAR_BACK) : this.userId == X.uid() && A.playSound(w.CAR_FORWARD), 
            this.userId == X.uid() && A.playSound(w.ENGINE, 1e4)), this.targetSpeed = 5e-4 * t * 1.5, 
            void (0 != t && (this.angle = e));
            this.angle = e;
            e = this.speed;
            this.speed = 5e-4 * t, 0 == t ? (A.stopSound(w.WALK), A.stopSound(w.RUN)) : 0 == e && (this.isRun ? this.userId == X.uid() && A.playSound(w.RUN, 1e4) : this.userId == X.uid() && A.playSound(w.WALK, 1e4)), 
            0 != t && (this.roleItem.transform.localRotationEulerY = this.cameraParams.rotY + 90 - this.angle / Math.PI * 180, 
            this.carItem.transform.localRotationEulerY = this.bianshenItem.transform.localRotationEulerY = this.roleItem.transform.localRotationEulerY), 
            this.playMoveAnimation();
        }
        rotate(t, e) {
            this.lookAtAngle += .1 * t / 180 * Math.PI, this.cameraParams.rotY = 90 - this.lookAtAngle / Math.PI * 180, 
            this.cameraParams.rotX -= .1 * e, this.cameraParams.rotX = Math.max(-90, Math.min(90, this.cameraParams.rotX));
        }
        jump() {
            this.isAllowPlayRunWalkAni() && (this.tishen.playAnimation("jump"), this.curAction = "jump", 
            this.setFrameCallback(this.curAction), this.isJump = !0, this.vy = .75);
        }
        setIsRun(t) {
            this.isRun = t, this.playMoveAnimation(), s.event("runwalk", []);
        }
        playMoveAnimation(t = !1) {
            (this.isAllowPlayRunWalkAni() || t) && (0 == this.speed ? (this.tishen.playAnimation("stand"), 
            this.curAction = "stand") : (t = this.isRun ? "run" : "walk", this.tishen.playAnimation(t, !0), 
            this.curAction = t), this.setFrameCallback(this.curAction));
        }
        kick() {
            this.isAllowPlayRunWalkAni() && (this.tishen.playAnimation("kick"), this.curAction = "kick", 
            this.setFrameCallback(this.curAction), this.userId == X.uid() && A.playSound(w.ATTACK));
        }
        zhongquan() {
            this.isAllowPlayRunWalkAni() && (this.tishen.playAnimation("zhongquan"), this.curAction = "zhongquan", 
            this.setFrameCallback(this.curAction), this.userId == X.uid() && A.playSound(w.ZHONGQUAN));
        }
        attack() {
            this.isAllowPlayRunWalkAni() && (this.userId == X.uid() && A.playSound(w.ATTACK), 
            this.tishen.playAnimation(this.attackAniArr[this.attackAniId]), this.curAction = this.attackAniArr[this.attackAniId], 
            this.setFrameCallback(this.curAction), this.attackAniId++, this.attackAniId >= this.attackAniArr.length && (this.attackAniId = 0));
        }
        bianshen() {
            (this.isCar || this.isAllowPlayRunWalkAni()) && (this.isBianshening || (this.stopLoopSound(), 
            this.userId == X.uid() && A.playSound(w.BIANSHEN), this.isBianshening = !0, this.isInCar = !1, 
            this.isCar = !this.isCar, this.carItem.active = !1, this.bianshenItem.active = !0, 
            this.roleItem.active = !1, this.tishen.carItem.active = this.carItem.active, this.tishen.bianshenItem.active = this.bianshenItem.active, 
            this.tishen.roleItem.active = this.roleItem.active, this.isCar ? (this.tishen.playAnimation("bianshenCar"), 
            this.curAction = "bianshenCar") : (this.tishen.playAnimation("bianshenRole"), this.curAction = "bianshenRole"), 
            this.setFrameCallback(this.curAction), s.event("bianshen", [])));
        }
        initCamera() {
            this.camera.transform.localRotationEulerX = this.cameraParams.rotX, this.camera.transform.localRotationEulerY = this.cameraParams.rotY;
            var t = this.lookAtDist * (this.cameraParams.rotX + 90) / 90, e = this.transform.localPositionX + t * Math.cos(this.lookAtAngle), t = this.transform.localPositionZ + t * Math.sin(this.lookAtAngle);
            this.camera.transform.localPositionX = e, this.camera.transform.localPositionZ = t;
            t = Math.max(this.transform.localPositionY + 3, y.getTerrainY(this.camera) + 3);
            this.camera.transform.localPositionY = t;
        }
        shake() {
            this.userId == X.uid() && (this.shaker || (this.shaker = new R(10), this.shaker.addFrameCallback(10, () => {
                V.removeFramer(this.shaker);
            })), this.shaker.reset(), this.shaker.resume(), V.addFramer(this.shaker));
        }
        getHitPoint() {
            return this.transform.localPosition.clone();
        }
        logicUpdate() {
            this.updateRole();
        }
        renderUpdate() {
            this.tishen.carItem.transform.localRotationEulerY += .3 * (b.getAngle(this.tishen.carItem.transform.localRotationEulerY, this.carItem.transform.localRotationEulerY) - this.tishen.carItem.transform.localRotationEulerY), 
            this.tishen.roleItem.transform.localRotationEulerY = this.roleItem.transform.localRotationEulerY, 
            this.tishen.bianshenItem.transform.localRotationEulerY = this.bianshenItem.transform.localRotationEulerY;
            this.tishen.transform.localPositionX += .3 * (this.transform.localPositionX - this.tishen.transform.localPositionX), 
            this.tishen.transform.localPositionZ += .3 * (this.transform.localPositionZ - this.tishen.transform.localPositionZ), 
            this.isJump ? this.tishen.transform.localPositionY += .6 * (this.transform.localPositionY - this.tishen.transform.localPositionY) : this.tishen.transform.localPositionY = y.getTerrainY(this.tishen), 
            this.isCar && this.updateCarRotX(), this.updateCamera();
        }
        fullBlood() {
            this.curBlood = this.totalBlood, s.event("blood_change", []);
        }
        updateRole() {
            if (!this.isPause) if (this.robotControl && this.robotControl.update(), ut.gta.checkUserHit(this), 
            this.isInCar) this.speed = this.targetSpeed, this.controlCar(); else if (this.isInMoveLogicAni()) {
                if (!this.isFollowerPath) {
                    var t = this.isRun ? 4 * this.speed : this.speed, e = this.roleItem.transform.localRotationEulerY / 180 * Math.PI - Math.PI / 2, i = this.transform.localPositionX + t * Math.cos(e), a = this.transform.localPositionZ - t * Math.sin(e), s = y.getTerrainYValue(i, this.transform.localPositionY, a);
                    if (s - this.transform.localPositionY < .1 && (i = this.transform.localPositionX + this.hitVelocity.x, 
                    a = this.transform.localPositionZ + this.hitVelocity.z, this.hitVelocity.x *= .3, 
                    this.hitVelocity.z *= .3, y.canWalk("map1", i, a) && (this.transform.localPositionX = i, 
                    this.transform.localPositionZ = a), !y.walkTo(this, "map1", e, t) && !this.isJump)) return;
                }
                t = y.getTerrainY(this);
                this.isJump ? (this.vy += this.gravity, this.transform.localPositionY += this.vy, 
                this.transform.localPositionY < t && (this.isJump = !1, this.playMoveAnimation(!0), 
                this.transform.localPositionY = t, this.shake())) : this.transform.localPositionY = t;
            }
        }
        applyHitVeclocity(t) {
            t.x *= 8 * this.speed, t.z *= 8 * this.speed, this.hitVelocity = t;
        }
        applyHitVeclocityWithRole(t) {
            t.x *= this.speed, t.z *= this.speed, this.hitVelocity = t;
        }
        controlCar() {
            if (0 != this.speed) {
                var i = this.transform.localPositionX + this.hitVelocity.x, a = this.transform.localPositionZ + this.hitVelocity.z;
                this.hitVelocity.x *= .3, this.hitVelocity.z *= .3, y.canWalk("map1", i, a) && (this.transform.localPositionX = i, 
                this.transform.localPositionZ = a);
                var s = Math.cos(this.angle) * this.speed, r = Math.sin(this.angle) * this.speed;
                let t = 1;
                0 == this.targetSpeed && (t = 0);
                let e;
                var o = this.transform.localPositionY, i = this.transform.localPositionX, a = this.transform.localPositionZ;
                if (this.tishen.update(0 == this.speed ? this.speed : r), r > .03 * this.speed) {
                    if (this.roleItem.transform.localRotationEulerY += s / this.speed * t, e = this.roleItem.transform.localRotationEulerY / 180 * Math.PI + Math.PI / 2, 
                    this.carItem.transform.localRotationEulerY = this.bianshenItem.transform.localRotationEulerY = this.roleItem.transform.localRotationEulerY, 
                    !y.walkTo(this, "map1", e, 8 * Math.abs(r))) return void this.updateCarCamera();
                } else if (this.roleItem.transform.localRotationEulerY -= s / this.speed * t, e = this.roleItem.transform.localRotationEulerY / 180 * Math.PI - Math.PI / 2, 
                this.carItem.transform.localRotationEulerY = this.bianshenItem.transform.localRotationEulerY = this.roleItem.transform.localRotationEulerY, 
                !y.walkTo(this, "map1", e, 8 * Math.abs(r))) return void this.updateCarCamera();
                r = y.getTerrainY(this);
                if (.3 < r - o) return this.transform.localPositionX = i, this.transform.localPositionZ = a, 
                void this.updateCarCamera();
                this.transform.localPositionY = r, this.updateCarCamera();
            } else this.updateCarCamera();
        }
        updateCarCamera() {
            var t = -Math.PI / 2 - this.roleItem.transform.localRotationEulerY / 180 * Math.PI;
            this.lookAtAngle += .3 * (b.getAngle(this.lookAtAngle / Math.PI * 180, t / Math.PI * 180) / 180 * Math.PI - this.lookAtAngle), 
            this.cameraParams.rotY = 90 - this.lookAtAngle / Math.PI * 180, this.cameraParams.rotX = -15;
        }
        updateCamera() {
            var t, e, i;
            this.camera && (this.camera.transform.localRotationEulerX += .3 * (b.getAngle(this.camera.transform.localRotationEulerX, this.cameraParams.rotX) - this.camera.transform.localRotationEulerX), 
            this.camera.transform.localRotationEulerY += .3 * (b.getAngle(this.camera.transform.localRotationEulerY, this.cameraParams.rotY) - this.camera.transform.localRotationEulerY), 
            t = this.lookAtDist, i = (90 - this.camera.transform.localRotationEulerY) / 180 * Math.PI, 
            e = this.tishen.transform.localPositionX + t * Math.cos(i), i = this.tishen.transform.localPositionZ + t * Math.sin(i), 
            this.camera.transform.localPositionX = e, this.camera.transform.localPositionZ = i, 
            i = Math.max(this.tishen.transform.localPositionY + 3, y.getTerrainY(this.camera) + 3), 
            this.camera.transform.localPositionY = i, this.shaker && this.shaker.isUpdate && b.shakeObj(this.camera, .1));
        }
        stopLoopSound() {
            A.stopSound(w.WALK), A.stopSound(w.RUN), A.stopSound(w.ENGINE);
        }
        updateCarRotX() {
            var t = -(this.tishen.roleItem.transform.localRotationEulerY / 180 * Math.PI + Math.PI / 2), e = this.tishen.transform.localPositionX + -1 * Math.cos(t), i = this.tishen.transform.localPositionZ + -1 * Math.sin(t), a = this.tishen.transform.localPositionX + +Math.cos(t), s = this.tishen.transform.localPositionZ + +Math.sin(t), r = y.getTerrainYValue(e, 0, i) - y.getTerrainYValue(a, 0, s), o = e - a, n = i - s, h = Math.sqrt(o * o + n * n - r * r), e = Math.atan2(h, r);
            this.tishen.carItem.transform.localRotationEulerX = e / Math.PI * 180 - 90;
            a = this.tishen.transform.localPositionX + -1 * Math.cos(t + Math.PI / 2) * .5, 
            i = this.tishen.transform.localPositionZ + -1 * Math.sin(t + Math.PI / 2) * .5, 
            s = this.tishen.transform.localPositionX + .5 * +Math.cos(t + Math.PI / 2), t = this.tishen.transform.localPositionZ + .5 * +Math.sin(t + Math.PI / 2), 
            r = y.getTerrainYValue(a, 0, i) - y.getTerrainYValue(s, 0, t), o = a - s, n = i - t, 
            h = Math.sqrt(o * o + n * n - r * r), e = Math.atan2(h, r);
            this.tishen.carItem.transform.localRotationEulerZ = e / Math.PI * 180 - 90;
        }
        attackByRobot(t, e) {
            if (!this.isGameOver && !this.isPause) {
                if (this.curBlood -= t.config.attack, this.curBlood = Math.max(0, this.curBlood), 
                this.userId == X.uid() && (s.event("blood_change", []), this.stopLoopSound()), 0 == this.curBlood) return this.isGameOver = !0, 
                void (this.isAllowPlayRunWalkAni() ? (this.tishen.playAnimation("fail"), this.curAction = "fail", 
                this.setFrameCallback(this.curAction)) : this.userId == X.uid() && this.showReviveView());
                e == z.ANI_ATTACK_GUN && this.userId == X.uid() && A.playSound(w.SHOOT), this.userId == X.uid() && A.playSound(w.HURT), 
                this.isAllowPlayRunWalkAni() && (this.tishen.playAnimation("shouji"), this.curAction = "shouji", 
                this.setFrameCallback(this.curAction));
            }
        }
        attackByCar(t) {
            if (!this.isGameOver && !this.isPause) {
                if (this.curBlood -= t.config.attack, this.curBlood = Math.max(0, this.curBlood), 
                this.userId == X.uid() && (s.event("blood_change", []), this.stopLoopSound()), 0 == this.curBlood) return this.isGameOver = !0, 
                void (this.isAllowPlayRunWalkAni() ? (this.tishen.playAnimation("fail"), this.curAction = "fail", 
                this.setFrameCallback(this.curAction)) : this.userId == X.uid() && this.showReviveView());
                this.isAllowPlayRunWalkAni() && (this.tishen.playAnimation("shouji"), this.curAction = "shouji", 
                this.setFrameCallback(this.curAction));
            }
        }
        attackByUser(t, e) {
            if (!this.isGameOver && !this.isPause) {
                if (this.curBlood -= t.power, this.curBlood = Math.max(0, this.curBlood), this.userId == X.uid() && (s.event("blood_change", []), 
                this.stopLoopSound()), 0 == this.curBlood) return this.isGameOver = !0, K.addScore(t.userId, Gt.roleDataArr[this.skinId - 1].score), 
                void (this.isAllowPlayRunWalkAni() ? (this.tishen.playAnimation("fail"), this.curAction = "fail", 
                this.setFrameCallback(this.curAction)) : this.userId == X.uid() && this.showReviveView());
                e == z.ANI_ATTACK_GUN && this.userId == X.uid() && A.playSound(w.SHOOT), this.userId == X.uid() && A.playSound(w.HURT), 
                this.isAllowPlayRunWalkAni() && (this.tishen.playAnimation("shouji"), this.curAction = "shouji", 
                this.setFrameCallback(this.curAction));
            }
        }
        showReviveView() {
            Zt.showCustomInterstitialAdView(() => {
                _t.showPopup(_t.REVIVIE_WINDOW);
            });
        }
        revive() {
            this.isRobot && ut.gta.robotToRandomPos(this, this, 150), this.starNum = 0, this.isGameOver = !1, 
            K.reset(this.userId), this.isCar || this.playMoveAnimation(!0), this.curBlood = this.totalBlood, 
            this.userId == X.uid() && (s.event("star_change", [ this.starNum ]), s.event("blood_change", []));
        }
        isInMoveLogicAni() {
            return "run" == this.curAction || "walk" == this.curAction || "jump" == this.curAction;
        }
        isAllowPlayRunWalkAni() {
            return "stand" == this.curAction || "walk" == this.curAction || "run" == this.curAction;
        }
        setFrameCallback(t) {
            for (var e in this.framerPool) V.clear(this.framerPool[e]), delete this.framerPool[e];
            switch (t) {
              case "kick":
                this.framerPool.kick1 = this.addFrameCallback("kick", 20, () => {
                    this.isGameOver || this.playMoveAnimation(!0);
                }), this.framerPool.kick2 = this.addFrameCallback("kick", 10, () => {
                    this.isGameOver || ut.gta.userAttack(this, "kick");
                });
                break;

              case "zhongquan":
                this.framerPool.zhongquan1 = this.addFrameCallback("zhongquan", 50, () => {
                    this.isGameOver || this.playMoveAnimation(!0);
                }), this.framerPool.zhongquan2 = this.addFrameCallback("zhongquan", 30, () => {
                    this.shake(), this.isGameOver || ut.gta.userAttack(this, "zhongquan"), this.tishen.playEff(Gt.EFF_DILIE);
                });
                break;

              case "fail":
                this.framerPool.fail = this.addFrameCallback("fail", 30, () => {
                    this.userId == X.uid() && this.showReviveView();
                });
                break;

              case "shouji":
                this.framerPool.shouji = this.addFrameCallback("shouji", 10, () => {
                    this.isGameOver || this.playMoveAnimation(!0);
                });
                break;

              case "attack1":
              case "attack2":
              case "attack3":
                this.framerPool.attack1 = this.addFrameCallback("attack1", 30, () => {
                    this.isGameOver || this.playMoveAnimation(!0);
                }), this.framerPool.attack2 = this.addFrameCallback("attack1", 12, () => {
                    this.isGameOver || ut.gta.userAttack(this, "attack1");
                });
                break;

              case "bianshenCar":
                this.framerPool.bianshenCar = this.addFrameCallback("bianshenCar", 30, () => {
                    this.bianshenItem.active = !1, this.carItem.active = !0, this.isInCar = !0, this.isBianshening = !1, 
                    this.speed = 0, this.targetSpeed = this.speed, this.tishen.carItem.active = this.carItem.active, 
                    this.tishen.bianshenItem.active = this.bianshenItem.active;
                });
                break;

              case "bianshenRole":
                this.framerPool.bianshenRole = this.addFrameCallback("bianshenRole", 30, () => {
                    this.bianshenItem.active = !1, this.roleItem.active = !0, this.isBianshening = !1, 
                    this.playMoveAnimation(!0), this.targetSpeed = this.speed, this.tishen.bianshenItem.active = this.bianshenItem.active, 
                    this.tishen.roleItem.active = this.roleItem.active;
                });
            }
        }
        addFrameCallback(t, e, i) {
            let a = new R(Math.floor(e / 2));
            return a.addFrameCallback(a.totalFrames, i), V.addFramerOnce(a), a;
        }
        dispose() {
            if (this.framerPool) {
                for (var t in this.framerPool) delete this.framerPool[t];
                this.framerPool = null;
            }
            this.hitVelocity = null, this.tishen && this.tishen.dispose(), this.tishen = null, 
            this.stopLoopSound(), this.mapFlag && (this.mapFlag.dispose(), this.mapFlag = null), 
            this.robotControl && this.robotControl.dispose(), this.robotControl = null, this.userControl && this.userControl.dispose(), 
            this.userControl = null, this.roleItem.destroy(), this.roleItem = null, this.bianshenItem.destroy(), 
            this.bianshenItem = null, this.carItem.destroy(), this.carItem = null, this.cameraParams = null, 
            this.camera = null, this.attackAniArr.length = 0, this.attackAniArr = null, V.clear(this.shaker), 
            this.shaker = null;
        }
        changeSkin(e) {
            var t = Gt.roleResArr[e - 1].getUrlArr();
            Laya.loader.create(t, Laya.Handler.create(this, t => {
                t && this.tishen ? (t = Gt.roleDataArr[e - 1], this.totalBlood = t.blood, this.curBlood = Math.min(this.curBlood, this.totalBlood), 
                this.power = t.attack, this.skinId = e, this.tishen.changeSkin(e)) : _t.showFlyTip("加载资源失败！");
            }));
        }
    }
    class lt extends Laya.Sprite {
        constructor(t, e, i, a, s) {
            super(), this.miniWidth = 294, this.miniHeight = 294, this.mapWidth = 441, this.mapHeight = 441, 
            this.flagArr = [], this.isLookAtMainRole = !1, this.miniWidth = e, this.miniHeight = i, 
            this.mapWidth = a, this.mapHeight = s, this.miniMap = new Laya.Image(t), this.miniMap.size(this.mapWidth, this.mapHeight), 
            this.addChild(this.miniMap), this.map = new Laya.Sprite(), this.addChild(this.map), 
            this.x = -(.5 * this.mapWidth - .5 * this.miniWidth), this.y = -(.5 * this.mapHeight - .5 * this.miniHeight), 
            this.centerX = .5 * this.mapWidth, this.centerY = .5 * this.mapHeight;
        }
        update() {
            for (let t = 0; t < this.flagArr.length; t++) this.flagArr[t].destroyed ? (this.removeFlag(this.flagArr[t]), 
            t--) : (this.flagArr[t].update(this), this.isLookAtMainRole && this.flagArr[t].isMainRole && this.isLookAtMainRole && (this.x = -(this.flagArr[t].icon.x - .5 * this.miniWidth), 
            this.y = -(this.flagArr[t].icon.y - .5 * this.miniHeight), this.centerX = this.flagArr[t].icon.x, 
            this.centerY = this.flagArr[t].icon.y));
        }
        addFlag(t) {
            this.flagArr.push(t), this.map.addChild(t.icon);
        }
        removeFlag(t) {
            t = this.flagArr.indexOf(t);
            -1 != t && (this.flagArr[t].icon && this.flagArr[t].icon.removeSelf(), this.flagArr.splice(t, 1));
        }
        dispose() {
            this.flagArr.length = 0, this.flagArr = null, this.removeSelf();
        }
        destroyAll() {
            for (let t = 0; t < this.flagArr.length; t++) this.flagArr[t].dispose();
            this.dispose();
        }
    }
    class dt {
        constructor() {
            this.blood = 0, this.attack = 0, this.score = 0, this.hasGun = !1;
        }
    }
    class ct {
        constructor() {}
    }
    class pt extends i {
        constructor() {
            super(), this.urlArr = [ {
                url: "res/atlas/images/task.atlas",
                type: Laya.Loader.ATLAS
            } ], this.taskId = -1;
        }
        initView() {
            this.uiView = new a.window.TaskWindowUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.skipBtn.on(Laya.Event.CLICK, this, this.onSkipBtn), this.uiView.continueBtn.on(Laya.Event.CLICK, this, this.onContinueBtn), 
            this.uiView.normalBtn.on(Laya.Event.CLICK, this, this.onNormalBtn), this.uiView.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn), 
            this.uiView.giveupBtn.on(Laya.Event.CLICK, this, this.onGiveupBtn), this.uiView.closeBtn.on(Laya.Event.CLICK, this, this.onSkipBtn), 
            this.uiView.backBtn.on(Laya.Event.CLICK, this, this.onSkipBtn);
        }
        onGiveupBtn() {
            A.playSound(w.BUTTON), Zt.isDanji ? Zt.gta.acceptATask(-1) : ut.gta.acceptATask(ut.gta.user, -1), 
            _t.showFlyTip("你放弃了任务！"), _t.hideView(_t.TASK_WINDOW);
        }
        onNormalBtn() {
            A.playSound(w.TASK_REWARD);
            let t;
            Zt.isDanji ? (t = Gt.feedermissionDataArr[Zt.gta.curFeederTask.taskId - 1], Zt.gta.acceptATask(-1), 
            $.addScore(t.getstar)) : (t = Gt.feedermissionDataArr[ut.gta.curFeederTask.taskId - 1], 
            ut.gta.acceptATask(ut.gta.user, -1), X.sendFrame({
                a: W.SCORE,
                p: {
                    score: t.getstar
                }
            })), Zt.addLocal("gold", t.piecenum, !0), Zt.addExperience(t.expericence), _t.hideView(_t.TASK_WINDOW);
        }
        onVideoBtn() {
            A.playSound(w.BUTTON), A.showVideoAd(t => {
                t && (t = Zt.isDanji ? Gt.feedermissionDataArr[Zt.gta.curFeederTask.taskId - 1] : Gt.feedermissionDataArr[ut.gta.curFeederTask.taskId - 1], 
                Zt.addLocal("gold", 2 * t.piecenum, !0), Zt.addExperience(2 * t.expericence), Zt.isDanji ? (Zt.gta.acceptATask(-1), 
                $.addScore(t.getstar)) : (ut.gta.acceptATask(ut.gta.user, -1), X.sendFrame({
                    a: W.SCORE,
                    p: {
                        score: t.getstar
                    }
                })), _t.hideView(_t.TASK_WINDOW), A.playSound(w.TASK_REWARD));
            });
        }
        onSkipBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.TASK_WINDOW);
        }
        onContinueBtn() {
            A.playSound(w.TASK_GET), Zt.isDanji ? Zt.gta.acceptATask(this.taskId) : ut.gta.acceptATask(ut.gta.user, this.taskId), 
            _t.hideView(_t.TASK_WINDOW), _t.showFlyTip("你接到了一个新任务！");
        }
        showToStage(i) {
            pt.isOpening = !0, Zt.isDanji || X.sendFrame({
                a: W.PAUSE
            }), _t.loadView(this.urlArr, _t.TASK_WINDOW, _t.COMMON_LOADING, () => {
                this.uiView || (this.initView(), this.initEvent()), b.scaleToFull(this.uiView.bg), 
                b.alignToCenter(this.uiView.content);
                var t, e = (Zt.isDanji ? Zt : ut).gta.curFeederTask;
                e ? (t = Gt.feedermissionDataArr[e.taskId - 1], this.uiView.npcNameTxt.text = t.feedermissiontitle, 
                this.taskId = t.id, e.status == H.COMPLETE ? (A.playSound(w.TASK_COMPLETE), this.uiView.taskNoneBtns.visible = !1, 
                this.uiView.rewardBtns.visible = !0, this.uiView.taskNormalBtns.visible = !1, this.uiView.contentTxt.text = t.feedermissiondialogue2) : (this.uiView.contentTxt.text = t.feedermissiondialogue1, 
                this.uiView.taskNoneBtns.visible = !1, this.uiView.rewardBtns.visible = !1, this.uiView.taskNormalBtns.visible = !0, 
                this.uiView.giveupBtn.visible = !0)) : i ? (t = Gt.feedermissionDataArr[i.taskId - 1], 
                this.uiView.npcNameTxt.text = t.feedermissiontitle, this.uiView.contentTxt.text = t.feedermissiondialogue1, 
                this.uiView.taskNoneBtns.visible = !0, this.uiView.rewardBtns.visible = !1, this.uiView.taskNormalBtns.visible = !1, 
                this.taskId = i.taskId) : (this.uiView.npcNameTxt.text = "提示", this.uiView.contentTxt.text = "你可以到地图上的任务点那里接任务哦！", 
                this.uiView.taskNoneBtns.visible = !1, this.uiView.rewardBtns.visible = !1, this.uiView.taskNormalBtns.visible = !0, 
                this.uiView.giveupBtn.visible = !1, this.taskId = -1);
            });
        }
        removeFromStage() {
            pt.isOpening = !1, Zt.isDanji || X.sendFrame({
                a: W.RESUME
            });
        }
    }
    pt.isOpening = !1;
    class mt {
        constructor() {
            this.carArr = [], this.roadArr = [], this.npcArr = [], this.taskArr = [], this.xuebaoArr = [], 
            this.xuebaoRefleshFrame = 7200, this.curXuebaoRefleshFrame = 0, this.userArr = [], 
            this.robotArr = [], this.freeCarArr = [], this.freeRobotArr = [], this.feederTaskList = [], 
            this.feederTaskNpcPos = [], this.npcCheckFrameNum = 12, this.curNpcCheckFrame = 12, 
            this.curFeederTask = null, this.preHitTime = 0, this.hitLimitTime = 1e3, this.xuebaoRefleshFrame = 2 * X.frameRate * 60, 
            this.init3DParams(), this.initGame();
        }
        init3DParams() {
            this.scene = _t.instance.rootContainer.addChild(new Laya.Scene3D()), this.camera = this.scene.addChild(new Laya.Camera(0, 1, 250)), 
            this.camera.transform.localPosition = new Laya.Vector3(0, 3, 3), this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
            let t = this.scene.addChild(new Laya.DirectionLight());
            t.transform.worldMatrix.setForward(new Laya.Vector3(-1, 1, -1)), t.color = new Laya.Vector3(1, 1, 1), 
            t.intensity = 1.2, this.scene.ambientColor = new Laya.Vector3(1, 1, 1), this.scene.enableLight = !0;
            let e = this.scene.addChild(new Laya.PointLight());
            e.color = new Laya.Vector3(1, 1, 1), e.transform.localPositionY = 100, e.range = 1200, 
            e.intensity = .5, this.createSky(Math.floor(1 + 10 * Math.random())), this.createWater();
        }
        createSky(t) {
            Laya.BaseMaterial.load(rt.path + "3d/skybox/skybox" + t + "/skyBox.lmat", Laya.Handler.create(this, e => {
                if (this.scene && this.scene.skyRenderer) {
                    let t = this.scene.skyRenderer;
                    t.mesh = Laya.SkyBox.instance, t.material = e;
                }
            }));
        }
        createWater() {
            Laya.BaseMaterial.load(rt.path + "3d/mat/Wat.lmat", Laya.Handler.create(this, e => {
                if (this.cj && e) {
                    let t = e;
                    t.waveSpeed = new Laya.Vector4(.95, .45, -.8, -.35), t.waveScale = .25, t.horizonColor.w = .75, 
                    t.renderMode = Laya.PBRStandardMaterial.RENDERMODE_FADE, b.getObj("shui", this.cj).meshRenderer.material = t;
                }
            }));
        }
        initGame() {
            K.init();
            let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + Gt.sceneUrl));
            this.scene.addChild(t), t.transform.localScale = new Laya.Vector3(y.mapScale, y.mapScale, y.mapScale), 
            this.cj = t;
            let r = Gt.getBuildingNameArr(), o = [];
            for (let s = 0; s < r.length; s++) {
                let a = b.getObj("spot.building." + r[s], t);
                if (a) for (let i = 0; i < a.numChildren; i++) {
                    let t = a.getChildAt(i), e = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getGameObjUrlByName(r[s])));
                    t.addChild(e), e.transform.localPosition = new Laya.Vector3(), o.push(e);
                }
            }
            r = Gt.getOtherItemNameArr();
            for (let s = 0; s < r.length; s++) {
                let a = b.getObj("spot." + r[s], t);
                if (a) for (let i = 0; i < a.numChildren; i++) {
                    let t = a.getChildAt(i), e = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getGameObjUrlByName(r[s])));
                    t.addChild(e), e.transform.localPosition = new Laya.Vector3(), o.push(e);
                }
            }
            let e = b.findMeshArr(t, [], "collider", !0);
            for (let t = 0; t < e.length; t++) e[t].active = !1;
            Laya.StaticBatchManager.combine(this.cj, o), this.createXuebao(), this.createRoad(), 
            this.createMainRole(), this.createNPCAndTaskList(), this.createRobotRole(), this.createCars(), 
            this.miniMap = new lt(rt.path + "3d/map/map1/mini1.png", 284, 284, 1024, 1024), 
            this.miniMap.isLookAtMainRole = !0, _t.getView(_t.MULGAME_VIEW).addMiniMap(this.miniMap);
            for (let t = 0; t < this.npcArr.length; t++) this.miniMap.addFlag(this.npcArr[t].mapFlag);
            for (let t = 0; t < this.userArr.length; t++) this.miniMap.addFlag(this.userArr[t].mapFlag);
            at.enable(), V.enable(), this.time = Date.now(), D.setCammandExecuteCallback(this.onCammandCallbackHandler.bind(this)), 
            D.setLogicUpdateCallback(this.onLogicUpdateCallbackHandler.bind(this)), this.checkInViewFramer = new R(60, 0, !0), 
            this.checkInViewFramer.addFrameCallback(this.checkInViewFramer.totalFrames, () => {
                this.checkInViewPositionInfo();
            }), V.addFramer(this.checkInViewFramer), Laya.timer.frameLoop(2, this, this.update);
        }
        createXuebao() {
            let a = b.getObj("spot.building.xuebao", this.cj);
            if (a) for (let i = 0; i < a.numChildren; i++) {
                let t = a.getChildAt(i), e = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrl(Gt.EFF_REBLEEDING)));
                e.transform.localScale = new Laya.Vector3(360, 360, 360), t.addChild(e), e.transform.localPosition = new Laya.Vector3(0, 1, 0), 
                this.xuebaoArr.push(e);
            }
        }
        createMainRole() {
            let r = 0;
            for (let s = 0; s < U.teamPlayer; s++) {
                let t, e, i;
                s < X.room.roomInfo.playerList.length ? (i = !1, e = X.room.roomInfo.playerList[s].id) : (i = !0, 
                e = "robot" + r, r++), e == X.uid() && (t = this.camera);
                let a = new ht(e, t);
                i && a.setIsRobot(), this.scene.addChild(a), this.scene.addChild(a.tishen), this.setRoleRandomPos(a), 
                a.tishen.transform.localPosition = a.transform.localPosition.clone(), this.userArr.push(a), 
                t && (a.initCamera(), this.user = a);
            }
        }
        setRoleRandomPos(t) {
            var e = 2 * MGOBE.RandomUtil.random() * Math.PI, i = 200 + 800 * MGOBE.RandomUtil.random(), a = 0 + Math.cos(e) * i, i = 0 + Math.sin(e) * i;
            y.canWalk("map1", a, i) ? (t.transform.localPositionX = a, t.transform.localPositionZ = i) : this.setRoleRandomPos(t);
        }
        createRoad() {
            let i = b.getObj("spot.building.luxiang_che", this.cj);
            if (i) for (let e = 0; e < i.numChildren; e++) {
                var a = i.getChildAt(e);
                let t = new q();
                t.roadId = "road" + e, t.createPointFromSprite3D(a), this.roadArr.push(t);
            }
        }
        getRoad(e) {
            for (let t = 0; t < this.roadArr.length; t++) if (this.roadArr[t].roadId == e) return this.roadArr[t];
            return null;
        }
        createMaxMap() {
            let a = new lt(rt.path + "3d/map/map1/mini1.png", 854, 972, 1920, 1920);
            a.isLookAtMainRole = !0;
            for (let t = 0; t < this.npcArr.length; t++) {
                var e = new J(new Laya.Image("images/game/0" + (t + 1) + ".png"), this.npcArr[t]);
                a.addFlag(e);
            }
            if (this.curFeederTask) {
                var s = this.curFeederTask.taskId;
                Gt.feedermissionDataArr[s - 1];
                let t = new Laya.Image("images/game/tishi01.png");
                t.anchorX = t.anchorY = .5;
                let e = new Laya.Sprite3D();
                this.scene.addChild(e), this.curFeederTask.taskId != H.XUNLUO || this.curFeederTask.isPassStartPos ? e.transform.localPosition = this.curFeederTask.targetPos.clone() : e.transform.localPosition = this.curFeederTask.startPos.clone();
                let i = new J(t, e);
                i.allwaysShow = !0, i.isOwnerDestroyAbled = !0, a.addFlag(i);
            }
            for (let e = 0; e < this.userArr.length; e++) {
                var i = this.userArr[e].userId == X.uid() ? "images/maxmap/lvdian.png" : "images/maxmap/huangdian.png";
                let t = new J(new Laya.Image(i), this.userArr[e], this.userArr[e].roleItem);
                t.icon.scale(.7, .7), t.isMainRole = this.userArr[e].userId == X.uid(), t.allwaysUpdate = !0, 
                a.addFlag(t);
            }
            return a;
        }
        createNPCAndTaskList() {
            let s = new Laya.Sprite3D();
            this.scene.addChild(s);
            let e = b.getObj("spot.building.renwu.xunluo", this.cj), t = e.getChildByName("task01");
            s.transform.position = t.transform.position.clone();
            let r = s.transform.localPosition.clone();
            this.feederTaskNpcPos.push(r);
            for (let t = 0; t < e.numChildren; t++) {
                let a = e.getChildAt(t);
                if ("task01" != a.name) {
                    let t = a.getChildByName("qi"), e = a.getChildByName("zhong"), i = new H();
                    i.taskId = H.XUNLUO, s.transform.position = t.transform.position.clone(), i.startPos = s.transform.localPosition.clone(), 
                    s.transform.position = e.transform.position.clone(), i.targetPos = s.transform.localPosition.clone(), 
                    i.npcPos = r.clone(), this.taskArr.push(i);
                }
            }
            let a = b.getObj("spot.building.renwu.zaike", this.cj);
            t = a.getChildByName("task02"), s.transform.position = t.transform.position.clone(), 
            r = s.transform.localPosition.clone(), this.feederTaskNpcPos.push(r);
            for (let t = 0; t < a.numChildren; t++) {
                let i = a.getChildAt(t);
                if ("task02" != i.name) {
                    let t = i.getChildByName("zhong");
                    s.transform.position = t.transform.position.clone();
                    let e = new H();
                    e.npcPos = r.clone(), e.startPos = r.clone(), e.targetPos = s.transform.localPosition.clone(), 
                    e.taskId = H.ZAIKE, this.taskArr.push(e);
                }
            }
            let o = b.getObj("spot.building.renwu.shaoheichue", this.cj);
            t = o.getChildByName("task03"), s.transform.position = t.transform.position.clone(), 
            r = s.transform.localPosition.clone(), this.feederTaskNpcPos.push(r);
            for (let t = 0; t < o.numChildren; t++) {
                let i = o.getChildAt(t);
                if ("task03" != i.name) {
                    let t = i.getChildAt(0);
                    s.transform.position = t.transform.position.clone();
                    let e = new H();
                    e.taskId = H.SHAOHEICHUE, e.npcPos = r.clone(), e.startPos = r.clone(), e.targetPos = s.transform.localPosition.clone(), 
                    this.taskArr.push(e);
                }
            }
            let n = b.getObj("spot.building.renwu.husong", this.cj);
            t = n.getChildByName("task04"), s.transform.position = t.transform.position.clone(), 
            r = s.transform.localPosition.clone(), this.feederTaskNpcPos.push(r);
            for (let t = 0; t < n.numChildren; t++) {
                let i = n.getChildAt(t);
                if ("task04" != i.name) {
                    let t = i.getChildByName("zhong");
                    s.transform.position = t.transform.position.clone();
                    let e = new H();
                    e.npcPos = r.clone(), e.startPos = r.clone(), e.targetPos = s.transform.localPosition.clone(), 
                    e.taskId = H.HUSONG, this.taskArr.push(e);
                }
            }
            let h = b.getObj("spot.building.renwu.shouji", this.cj);
            t = h.getChildByName("task05"), s.transform.position = t.transform.position.clone(), 
            r = s.transform.localPosition.clone(), this.feederTaskNpcPos.push(r);
            for (let t = 0; t < h.numChildren; t++) {
                let i = h.getChildAt(t);
                if ("task05" != i.name) {
                    let t = i.getChildByName("zhong");
                    s.transform.position = t.transform.position.clone();
                    let e = new H();
                    e.npcPos = r.clone(), e.startPos = r.clone(), e.targetPos = s.transform.localPosition.clone(), 
                    e.taskId = H.SHOUJI, this.taskArr.push(e);
                }
            }
            s.destroy(!0);
            for (let e = 0; e < this.feederTaskNpcPos.length; e++) {
                let t = new et(e + 1);
                t.transform.localPosition = this.feederTaskNpcPos[e].clone(), this.scene.addChild(t), 
                this.npcArr.push(t), t.hide();
            }
        }
        getARandomFeederTask(e) {
            let i = [];
            for (let t = 0; t < this.taskArr.length; t++) this.taskArr[t].taskId == e && i.push(this.taskArr[t]);
            return 0 < i.length ? i[Math.floor(i.length * MGOBE.RandomUtil.random())] : null;
        }
        acceptATask(i, a) {
            if (-1 == a) this.taskFlag && (this.taskFlag.dispose(!0), this.taskFlag = null), 
            this.curFeederTask && (this.curFeederTask.dispose(), this.curFeederTask = null), 
            X.sendFrame({
                a: W.GIVEUPSHAOHEI
            }); else {
                Gt.feedermissionDataArr[a - 1];
                this.curFeederTask = this.getARandomFeederTask(a).clone();
                let t = new Laya.Image("images/game/tishi01.png");
                t.anchorX = t.anchorY = .5;
                let e = new Laya.Sprite3D();
                if (this.scene.addChild(e), a != H.SHAOHEICHUE) {
                    let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrl(Gt.EFF_TASK)));
                    if (t.transform.localScale = new Laya.Vector3(60, 60, 60), t.transform.localPosition = new Laya.Vector3(), 
                    e.addChild(t), a == H.SHOUJI) {
                        let t = new C(rt.path + Gt.lingjianUrl);
                        t.transform.localScale = new Laya.Vector3(2, 2, 2), t.transform.localPositionY = 1.6, 
                        e.addChild(t), this.curFeederTask.targetPos = this.getALocalTaskRandomPos(this.user, 400);
                    } else (a == H.ZAIKE || a == H.HUSONG) && (this.curFeederTask.targetPos = this.getALocalTaskRandomPos(this.user, 400));
                } else this.curFeederTask.targetPos = this.getALocalTaskRandomPos(i, 400), X.sendFrame({
                    a: W.SHAOHEI,
                    p: {
                        pos: this.curFeederTask.targetPos.clone()
                    }
                });
                this.curFeederTask.taskId == H.XUNLUO ? e.transform.localPosition = this.curFeederTask.startPos.clone() : e.transform.localPosition = this.curFeederTask.targetPos.clone(), 
                e.transform.localPositionY = y.getTerrainY(e), this.taskFlag = new J(t, e), this.taskFlag.allwaysShow = !0, 
                this.miniMap.addFlag(this.taskFlag);
            }
            s.event("task_change", []);
        }
        getATaskRandomPos(t, e, i = 0) {
            if (1e3 < i) return t.transform.localPosition.clone();
            let a = new Laya.Vector3();
            a.x = (MGOBE.RandomUtil.random() - .5) * y.mapScale * y.width, a.z = (MGOBE.RandomUtil.random() - .5) * y.mapScale * y.height;
            this.getUseRoleById(X.room.roomInfo.owner);
            var s = a.x - t.transform.localPositionX, r = a.z - t.transform.localPositionZ;
            return !(e < Math.sqrt(s * s + r * r)) && y.canWalk("map1", a.x, a.z) ? a : this.getATaskRandomPos(t, e, i + 1);
        }
        getALocalTaskRandomPos(t, e) {
            let i = new Laya.Vector3();
            i.x = (Math.random() - .5) * y.mapScale * y.width, i.z = (Math.random() - .5) * y.mapScale * y.height;
            this.getUseRoleById(X.room.roomInfo.owner);
            var a = i.x - t.transform.localPositionX, s = i.z - t.transform.localPositionZ;
            return !(e < Math.sqrt(a * a + s * s)) && y.canWalk("map1", i.x, i.z) ? i : this.getALocalTaskRandomPos(t, e);
        }
        createRobotRole() {
            var i = [ z.TYPE_GIRL, z.TYPE_MAN1, z.TYPE_MAN2, z.TYPE_MAN3, z.TYPE_MAN4 ];
            for (let e = 0; e < i.length; e++) {
                let t = new dt();
                MGOBE.RandomUtil.random() < .3 && (t.hasGun = !0), t.type = i[e];
                var a = Gt.getRobotDataByType(t.type);
                t.attack = t.hasGun ? a.attack2 : a.attack1, t.blood = a.blood, t.score = a.score;
                a = new z(t);
                this.robotArr.push(a), this.scene.addChild(a), this.robotToRandomPos(a, this.getUseRoleById(X.room.roomInfo.owner), 150);
            }
        }
        robotToRandomPos(t, e, i) {
            let a = this.getATaskRandomPos(e, i);
            a.x == e.transform.localPositionX && a.z == e.transform.localPositionZ && (a = t.transform.localPosition.clone()), 
            t.transform.localPosition = a, t.transform.localPositionY = y.getTerrainY(t);
        }
        createCars() {
            var a = [ Z.TYPE_CAR1, Z.TYPE_CAR2, Z.TYPE_CAR3, Z.TYPE_CAR4 ];
            for (let i = 0; i < a.length; i++) {
                let t = new ct();
                t.type = a[i];
                var s = Gt.getVehicleDataByType(t.type);
                t.blood = s.blood, t.attack = s.attack, t.score = s.score;
                let e = new Z(t);
                e.radius = t.type == Z.TYPE_TANK ? 8.8 : 4, this.carArr.push(e), this.scene.addChild(e), 
                this.carFollowARandomRoad(e);
            }
        }
        createHeibang(a, t, s, r) {
            let e = !1;
            for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].isHeibang && !this.robotArr[t].taskOwner && (e = !0, 
            this.robotArr[t].heibangReUse(), this.robotArr[t].setIsHeibang(a, s, r), this.robotArr[t].backToPos());
            if (!e) for (let i = 0; i < t; i++) {
                var o = [ z.TYPE_MAN1, z.TYPE_MAN2, z.TYPE_MAN3, z.TYPE_MAN4 ];
                let t = new dt();
                MGOBE.RandomUtil.random() < .3 && (t.hasGun = !0), t.type = o[i];
                o = Gt.getRobotDataByType(t.type);
                t.attack = t.hasGun ? o.attack2 : o.attack1, t.blood = o.blood, t.score = o.score;
                let e = new z(t);
                e.transform.localPositionY = y.getTerrainY(e), this.robotArr.push(e), this.scene.addChild(e), 
                e.setIsHeibang(a, s, r), e.backToPos();
            }
        }
        recoverRobotRole(t) {
            if (!t.taskOwner && t.config.type != z.TYPE_COP && t.config.type != z.TYPE_SOLDIER) return this.robotToRandomPos(t, this.getUseRoleById(X.room.roomInfo.owner), 150), 
            void t.revive();
            t.taskOwner = null, t.removeSelf(), this.freeRobotArr.push(t);
            t = this.robotArr.indexOf(t);
            -1 != t && this.robotArr.splice(t, 1);
        }
        carFollowARandomRoad(t) {
            var e = Math.floor(MGOBE.RandomUtil.random() * this.roadArr.length);
            t.carControl.setRolePath(this.roadArr[e].roadPointArr);
        }
        recoverRobotCar(t) {
            var e;
            t.config.type == Z.TYPE_POLICE || t.config.type == Z.TYPE_TANK ? (-1 != (e = this.carArr.indexOf(t)) && this.carArr.splice(e, 1), 
            t.removeSelf(), this.freeCarArr.push(t)) : (this.carFollowARandomRoad(t), t.revive());
        }
        checkNpcInfo() {
            if (this.curNpcCheckFrame--, this.curNpcCheckFrame <= 0) {
                this.curNpcCheckFrame = this.npcCheckFrameNum;
                for (let t = 0; t < this.npcArr.length; t++) (this.npcArr[t].npcId != H.ZAIKE || !this.curFeederTask || this.curFeederTask.taskId != H.ZAIKE) && this.npcArr[t].isRoleNearMe(this.user, 100) ? this.npcArr[t].show() : this.npcArr[t].hide();
            }
            var t;
            if (!pt.isOpening) if (this.curFeederTask) this.curFeederTask.taskId != H.SHAOHEICHUE && (t = this.curFeederTask.taskId != H.XUNLUO || this.curFeederTask.isPassStartPos ? this.curFeederTask.targetPos : this.curFeederTask.startPos, 
            Laya.Vector3.distance(t, this.user.transform.localPosition) < 3 && (this.curFeederTask.taskId != H.XUNLUO || this.curFeederTask.isPassStartPos ? (this.curFeederTask.status = H.COMPLETE, 
            _t.showPopup(_t.TASK_WINDOW)) : (this.curFeederTask.isPassStartPos = !0, this.taskFlag && (this.taskFlag.owner.transform.localPosition = this.curFeederTask.targetPos.clone(), 
            this.taskFlag.isUpdateOnce = !1, _t.showFlyTip("顺利通过第一个巡逻点！"))))); else for (let t = 0; t < this.npcArr.length; t++) this.npcArr[t].isRoleNearMe(this.user, 3) ? this.npcArr[t].isTalkingToUser || (this.npcArr[t].isTalkingToUser = !0, 
            _t.showPopup(_t.TASK_WINDOW, {
                taskId: this.npcArr[t].npcId
            })) : this.npcArr[t].isTalkingToUser = !1;
        }
        checkSeekInfo() {
            var t = K.getTopOneStarUserIndex(), a = this.userArr[t];
            let s = -1, r = "";
            switch (a.starNum) {
              case 3:
                s = Z.TYPE_POLICE, r = z.TYPE_COP;
                break;

              case 4:
                s = Z.TYPE_ZHUANGJIA, r = z.TYPE_SOLDIER;
                break;

              case 5:
                s = Z.TYPE_TANK;
            }
            let e = [ Z.TYPE_POLICE, Z.TYPE_TANK, Z.TYPE_ZHUANGJIA ], o = [ z.TYPE_COP, z.TYPE_SOLDIER ], n = [ Z.TYPE_TANK, Z.TYPE_PLANE ];
            if (-1 != s) {
                let i = 0;
                for (let t = 0; t < this.carArr.length; t++) this.carArr[t].config.type != s || this.carArr[t].isNoBody || i++, 
                -1 != n.indexOf(this.carArr[t].config.type) && this.carArr[t].carControl.seekTarget(a);
                if (s != Z.TYPE_TANK && s != Z.TYPE_PLANE) {
                    let e = 0;
                    for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].config.type == r && e++;
                    e < 1 && 0 == i && this.createSeekCar(s, a);
                } else 0 == i && this.createSeekCar(s, a);
                for (let t = 0; t < this.robotArr.length; t++) -1 != o.indexOf(this.robotArr[t].config.type) && this.robotArr[t].robotControl.seekTarget(a);
            } else {
                for (let t = 0; t < this.carArr.length; t++) -1 != e.indexOf(this.carArr[t].config.type) && this.carArr[t].carControl.seekTarget(null);
                for (let t = 0; t < this.robotArr.length; t++) -1 != o.indexOf(this.robotArr[t].config.type) && this.robotArr[t].robotControl.seekTarget(null);
            }
        }
        createSeekCar(e, t) {
            let i = this.getAUnUseCar(e);
            if (i) i.revive(); else {
                let t = new ct();
                var a = Gt.getVehicleDataByType(e);
                t.type = e, t.attack = a.attack, t.blood = a.blood, t.score = a.score, i = new Z(t), 
                i.radius = t.type == Z.TYPE_TANK ? 8.8 : 4;
            }
            this.carArr.push(i), this.scene.addChild(i), i.isNoBody = !1, i.carControl.seekTarget(t), 
            this.setCarRandomPos(i, t);
        }
        setCarRandomPos(t, e) {
            var i, a, s;
            t.isNoBody || (i = 2 * MGOBE.RandomUtil.random() * Math.PI, s = 100 + 20 * MGOBE.RandomUtil.random(), 
            a = e.transform.localPositionX + Math.cos(i) * s, s = e.transform.localPositionZ + Math.sin(i) * s, 
            y.canWalk("map1", a, s) ? (t.carControl.clearNormalParams(), t.transform.localPositionX = a, 
            t.transform.localPositionZ = s, t.transform.localPositionY = y.getTerrainY(t)) : this.setCarRandomPos(t, e));
        }
        getAUnUseCar(e) {
            for (let t = 0; t < this.freeCarArr.length; t++) if (this.freeCarArr[t].config.type == e) {
                var i = this.freeCarArr[t];
                return this.freeCarArr.splice(t, 1), i;
            }
            return null;
        }
        getAUnUseRobot(e) {
            for (let t = 0; t < this.freeRobotArr.length; t++) if (this.freeRobotArr[t].config.type == e && null == this.freeRobotArr[t].robotControl.seekingTarget) {
                var i = this.freeRobotArr[t];
                return this.freeRobotArr.splice(t, 1), i;
            }
            return null;
        }
        createSeekMan(i, a, s) {
            for (let t = 0; t < 2; t++) {
                let e = this.getAUnUseRobot(a);
                if (e) e.revive(); else {
                    let t = new dt();
                    MGOBE.RandomUtil.random() < .3 && (t.hasGun = !0);
                    var r = Gt.getRobotDataByType(a);
                    t.type = a, t.blood = r.blood, t.attack = t.hasGun ? r.attack2 : r.attack1, t.score = r.score, 
                    e = new z(t);
                }
                this.robotArr.push(e), this.scene.addChild(e);
                r = this.getCarBesidePos(i);
                e.transform.localPositionX = r.x, e.transform.localPositionZ = r.y, e.transform.localPositionY = y.getTerrainY(e), 
                e.robotControl.seekTarget(s), e.robotControl.wantToFindPath = !0, e.robotControl.findAPath();
            }
        }
        getCarBesidePos(t, e = 0) {
            if (100 < e) return new Laya.Point(t.transform.localPositionX + t.radius, t.transform.localPositionZ + t.radius);
            var i = MGOBE.RandomUtil.random() * Math.PI * 2, a = t.transform.localPositionX + t.radius * Math.cos(i), i = t.transform.localPositionZ + t.radius * Math.sin(i);
            return y.canWalk("map1", a, i) ? new Laya.Point(a, i) : this.getCarBesidePos(t, e + 1);
        }
        update() {
            this.logicUpdate(), this.renderUpdate();
        }
        logicUpdate() {
            var t = Date.now();
            t - this.time > X.frameTime && (X.logicUpdate(), this.time = t);
        }
        onCammandCallbackHandler(t) {
            let e = this.getUseRoleById(t.playerId);
            if (e) switch (t.a) {
              case W.MOVE:
                e.move(t.p.speed, t.p.angle);
                break;

              case W.ROTATE:
                e.rotate(t.p.angleX, t.p.angleY);
                break;

              case W.JUMP:
                e.jump();
                break;

              case W.KICK:
                e.kick();
                break;

              case W.ZHONGQUAN:
                e.zhongquan();
                break;

              case W.ATTACK:
                e.attack();
                break;

              case W.RUNWALK:
                e.setIsRun(!e.isRun);
                break;

              case W.BIANSHEN:
                e.bianshen();
                break;

              case W.REVIVE:
                e.revive();
                break;

              case W.SHAOHEI:
                this.createHeibang(e, 3, t.p.pos, 50);
                break;

              case W.GIVEUPSHAOHEI:
                for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].isHeibang && this.robotArr[t].taskOwner == e && (this.robotArr[t].heibangHide(), 
                t--);
                break;

              case W.QUIT:
                for (let t = 0; t < this.carArr.length; t++) this.carArr[t].carControl.isSeekingUser(e) && this.carArr[t].carControl.seekTarget(null);
                for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].robotControl.seekingTarget == e && this.robotArr[t].robotControl.seekTarget(null);
                for (let t = 0; t < this.userArr.length; t++) ;
                for (let t = 0; t < this.userArr.length; t++) if (this.userArr[t].userId == e.userId && X.room.roomInfo.owner != this.userArr[t].userId) {
                    this.userArr[t].dispose(), this.userArr.splice(t, 1), K.remove(t);
                    break;
                }
                break;

              case W.SCORE:
                K.addScore(e.userId, t.p.score);
                break;

              case W.SKIN:
                var i = t.p.skinId;
                e.changeSkin(i);
                break;

              case W.YAOSHUI:
                e.fullBlood(), e.userId == X.uid() && _t.showFlyTip("你使用了万能药水，气血已恢复到最大值！");
                break;

              case W.PAUSE:
                e.isPause = !0;
                break;

              case W.RESUME:
                e.isPause = !1;
            }
        }
        onLogicUpdateCallbackHandler() {
            V.update(), K.update();
            for (let t = 0; t < this.userArr.length; t++) this.checkUserFullBlood(this.userArr[t]), 
            this.userArr[t].logicUpdate();
            this.checkCarCollision();
            for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].logicUpdate();
            for (let t = 0; t < this.carArr.length; t++) this.carArr[t].logicUpdate();
            if (this.checkNpcInfo(), this.checkSeekInfo(), this.curXuebaoRefleshFrame++, this.curXuebaoRefleshFrame >= this.xuebaoRefleshFrame) for (let t = this.curXuebaoRefleshFrame = 0; t < this.xuebaoArr.length; t++) this.xuebaoArr[t].active = !0;
        }
        renderUpdate() {
            at.update();
            for (let t = 0; t < this.userArr.length; t++) this.userArr[t].renderUpdate();
            for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].renderUpdate();
            for (let t = 0; t < this.carArr.length; t++) this.carArr[t].renderUpdate();
            this.miniMap.update(), this.miniMap.parent.reCache();
        }
        quit() {
            this.removeAllEvent(), X.removeCallbackHandler(), D.setCammandExecuteCallback(null), 
            D.setLogicUpdateCallback(null), X.sendFrame({
                a: W.QUIT
            }, () => {
                X.leaveRoom(() => {
                    Laya.timer.callLater(this, () => {
                        this.dispose(), _t.hideView(_t.MULGAME_VIEW), _t.showPopup(_t.MAIN_VIEW);
                    });
                });
            });
        }
        checkUserFullBlood(e) {
            if ("fail" != e.curAction) for (let t = 0; t < this.xuebaoArr.length; t++) if (this.xuebaoArr[t].active && Laya.Vector3.distance(e.transform.position, this.xuebaoArr[t].transform.position) < 1.5) return this.xuebaoArr[t].active = !1, 
            e.fullBlood(), void (e.userId == X.uid() && _t.showFlyTip("已恢复血量！"));
        }
        checkCarCollision() {
            for (let e = 0; e < this.carArr.length; e++) for (let t = e + 1; t < this.carArr.length; t++) {
                var i = this.carArr[t].transform.localPositionX - this.carArr[e].transform.localPositionX, a = this.carArr[t].transform.localPositionZ - this.carArr[e].transform.localPositionZ, s = Math.sqrt(i * i + a * a), r = this.carArr[e].radius + this.carArr[t].radius;
                s < r && (i = Math.atan2(a, i), this.carArr[t].transform.localPositionX = this.carArr[e].transform.localPositionX + Math.cos(i) * r, 
                this.carArr[t].transform.localPositionZ = this.carArr[e].transform.localPositionZ + Math.sin(i) * r);
            }
        }
        removeAllEvent() {
            Laya.timer.clear(this, this.update);
        }
        checkUserHit(e) {
            let i = 1.8;
            for (let t = 0; t < this.robotArr.length; t++) {
                var a;
                this.robotArr[t].isWuguLuren || this.robotArr[t].taskOwner && this.robotArr[t].taskOwner != e || Laya.Vector3.distance(e.getHitPoint(), this.robotArr[t].transform.localPosition) < i && e.isCar && (this.robotArr[t].attackByUser(e), 
                a = new Laya.Vector3(), Laya.Vector3.subtract(e.getHitPoint(), this.robotArr[t].transform.localPosition, a), 
                Laya.Vector3.normalize(a, a), e.applyHitVeclocity(a), e.shake(), e.userId == X.uid() && A.playSound(w.HIT));
            }
            i = 4;
            for (let t = 0; t < this.carArr.length; t++) {
                var s, r;
                this.carArr[t].isWuguCar || (s = Laya.Vector3.distance(e.transform.localPosition, this.carArr[t].transform.localPosition), 
                r = this.carArr[t].config.type == Z.TYPE_TANK ? 2.2 : 1, s < i * r && (r = new Laya.Vector3(), 
                Laya.Vector3.subtract(e.transform.localPosition, this.carArr[t].transform.localPosition, r), 
                Laya.Vector3.normalize(r, r), e.applyHitVeclocity(r), this.carArr[t].pause(), e.isCar && (e.shake(), 
                (r = Date.now()) - this.preHitTime > this.hitLimitTime && (e.userId == X.uid() && A.playSound(w.HIT), 
                this.preHitTime = r))));
            }
            for (let t = 0; t < this.userArr.length; t++) {
                var o;
                this.userArr[t].userId != e.userId && Laya.Vector3.distance(e.transform.localPosition, this.userArr[t].transform.localPosition) < (e.isCar ? 2 : 1) + (this.userArr[t].isCar ? 2 : 1) && (o = new Laya.Vector3(), 
                Laya.Vector3.subtract(e.transform.localPosition, this.userArr[t].transform.localPosition, o), 
                Laya.Vector3.normalize(o, o), e.applyHitVeclocityWithRole(o), !e.isCar && !this.userArr[t].isCar || e.roleId != this.user.userId && this.userArr[t].userId != this.user.userId || (this.user.shake(), 
                (o = Date.now()) - this.preHitTime > this.hitLimitTime && (e.userId == X.uid() && A.playSound(w.HIT), 
                this.preHitTime = o)));
            }
        }
        dispose() {
            for (let t = 0; t < this.xuebaoArr.length; t++) this.xuebaoArr[t].destroy();
            this.xuebaoArr.length = 0, this.xuebaoArr = null;
            for (let t = 0; t < this.freeCarArr.length; t++) this.freeCarArr[t].dispose();
            this.freeCarArr.length = 0, this.freeCarArr = null;
            for (let t = 0; t < this.freeRobotArr.length; t++) this.freeRobotArr[t].dispose();
            this.freeRobotArr.length = 0, this.freeRobotArr = null, this.feederTaskNpcPos.length = 0, 
            this.feederTaskNpcPos = null, this.checkInViewFramer = null;
            for (let t = 0; t < this.carArr.length; t++) this.carArr[t].dispose();
            this.carArr.length = 0, this.carArr = null;
            for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].dispose();
            this.robotArr.length = 0, this.robotArr = null;
            for (let t = 0; t < this.roadArr.length; t++) this.roadArr[t].dispose();
            this.roadArr.length = 0, this.roadArr = null;
            for (let t = 0; t < this.npcArr.length; t++) this.npcArr[t].dispose();
            this.npcArr.length = 0, this.npcArr = null;
            for (let t = 0; t < this.taskArr.length; t++) this.taskArr[t].dispose();
            this.taskArr.length = 0, this.taskArr = null, this.curFeederTask = null, this.taskFlag && this.taskFlag.dispose(), 
            this.taskFlag = null, this.user = null;
            for (let t = 0; t < this.userArr.length; t++) this.userArr[t].dispose();
            this.userArr.length = 0, this.userArr = null, this.miniMap.dispose(), this.miniMap = null, 
            this.camera.destroy(), this.camera = null, this.cj.destroy(), this.cj = null, this.scene.destroy(!0), 
            this.scene = null, at.disable(), at.clearAll(), V.disable(), V.clearAll(), Laya.Resource.destroyUnusedResources();
        }
        getUseRoleById(e) {
            let i;
            for (let t = 0; t < this.userArr.length; t++) if (this.userArr[t].userId == e) {
                i = this.userArr[t];
                break;
            }
            return i;
        }
        userAttack(e, i) {
            let a;
            a = "zhongquan" == i ? 10 : 2;
            for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].isWuguLuren || this.robotArr[t].taskOwner && this.robotArr[t].taskOwner != e || Laya.Vector3.distance(e.transform.localPosition, this.robotArr[t].transform.localPosition) < a && this.robotArr[t].attackByUser(e);
            for (let t = 0; t < this.carArr.length; t++) this.carArr[t].isWuguCar || Laya.Vector3.distance(e.transform.localPosition, this.carArr[t].transform.localPosition) < (this.carArr[t].config.type == Z.TYPE_TANK ? 6 : 3) + a && this.carArr[t].attackByUser(e, i);
            a = "zhongquan" == i ? 10 : 4;
            for (let t = 0; t < this.userArr.length; t++) e.userId != this.userArr[t].userId && Laya.Vector3.distance(e.transform.localPosition, this.userArr[t].transform.localPosition) < a && this.userArr[t].attackByUser(e, i);
        }
        checkInViewPositionInfo() {
            var e, t = K.getTopOneStarUserIndex(), i = this.userArr[t];
            for (let t = 0; t < this.carArr.length; t++) this.carArr[t].isWuguCar ? 200 < Laya.Vector3.distance(this.carArr[t].transform.localPosition, this.user.transform.localPosition) && (e = this.getNearestRoad(this.user), 
            this.carArr[t].carControl.setRolePath(e.roadPointArr)) : i && (this.carArr[t].config.type == Z.TYPE_POLICE || this.carArr[t].config.type == Z.TYPE_TANK || this.carArr[t].config.type == Z.TYPE_ZHUANGJIA ? 200 < Laya.Vector3.distance(i.transform.localPosition, this.carArr[t].transform.localPosition) && this.setCarRandomPos(this.carArr[t], i) : 200 < Laya.Vector3.distance(i.transform.localPosition, this.carArr[t].transform.localPosition) && this.carArr[t].carControl.setRolePath(this.getNearestRoad(i).roadPointArr));
            for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].isWuguLuren ? 150 < Laya.Vector3.distance(this.user.transform.localPosition, this.robotArr[t].transform.localPosition) && this.robotToRandomPos(this.robotArr[t], this.user, 100) : i && !this.robotArr[t].isHeibang ? 150 < Laya.Vector3.distance(i.transform.localPosition, this.robotArr[t].transform.localPosition) && this.robotToRandomPos(this.robotArr[t], i, 100) : this.robotArr[t].isHeibang && this.robotArr[t].taskOwner && 150 < Laya.Vector3.distance(this.robotArr[t].taskOwner.transform.localPosition, this.robotArr[t].transform.localPosition) && this.robotArr[t].backToPos();
        }
        getNearestRoad(e) {
            let i = this.roadArr[0], a = i.distToRole(e);
            for (let t = 1; t < this.roadArr.length; t++) {
                var s = this.roadArr[t].distToRole(e);
                s < a && (a = s, i = this.roadArr[t]);
            }
            return i;
        }
        getInSeekingRole() {
            var t = K.getTopOneStarUserIndex();
            return 3 <= this.userArr[t].starNum ? this.userArr[t] : null;
        }
        getAnUserAttackableTarget(e) {
            let i = 1e4, a;
            for (let t = 0; t < this.userArr.length; t++) {
                var s;
                this.userArr[t].isRobot || this.userArr[t].isGameOver || (s = Laya.Vector3.distance(e.transform.localPosition, this.userArr[t].transform.localPosition)) < i && (i = s, 
                a = this.userArr[t]);
            }
            return i < 100 ? {
                target: a,
                dist: i
            } : null;
        }
    }
    class ut {
        constructor() {}
        static createGame() {
            this.gta = new mt();
        }
        static loginMgobe() {
            X.isEnabled ? _t.showPopup(_t.MATCH_VIEW) : (_t.showPopup(_t.COMMON_LOADING), X.login(t => {
                _t.hideView(_t.COMMON_LOADING), _t.showPopup(_t.MATCH_VIEW);
            }));
        }
        static quitGTAGame() {
            this.gta && this.gta.quit(), this.gta = null;
        }
    }
    class gt {
        constructor(t, e, i) {
            this.type = t, this.num = e, this.callback = i;
        }
    }
    class yt extends i {
        constructor() {
            super(), this.urlArr = [ {
                url: "res/atlas/images/sign.atlas",
                type: Laya.Loader.ATLAS
            } ], this.rewardArr = [ {
                id: 1,
                type: "gold",
                value: 100
            }, {
                id: 2,
                type: "diamond",
                value: 200
            }, {
                id: 3,
                type: "gold",
                value: 300
            }, {
                id: 4,
                type: "diamond",
                value: 400
            }, {
                id: 5,
                type: "gold",
                value: 500
            }, {
                id: 6,
                type: "diamond",
                value: 600
            }, {
                id: 7,
                type: "diamond",
                value: 700
            } ];
        }
        initView() {
            this.uiView = new a.window.SignWindowUI(), this.addChild(this.uiView);
            for (let s = 0; s < this.rewardArr.length; s++) {
                let t = this.uiView["day" + (s + 1)], e = t.getChildByName("icon"), i = t.getChildByName("icon2"), a = t.getChildByName("numTxt");
                a.text = this.rewardArr[s].value + "", e.skin = "gold" == this.rewardArr[s].type ? "images/common/jingbidui.png" : "images/common/zuanshidui.png", 
                i.skin = "gold" == this.rewardArr[s].type ? "images/common/bi.png" : "images/common/zuan.png";
            }
        }
        initEvent() {
            this.uiView.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn), this.uiView.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn), 
            this.uiView.getBtn.on(Laya.Event.CLICK, this, this.onGetBtn);
        }
        onGetBtn(t = !1) {
            t || (A.playSound(w.BUTTON), _t.hideView(_t.SIGN_WINDOW)), this.sign();
            let e = this.rewardArr[yt.getSignInfo().signDay - 1];
            _t.showPopup(_t.REWARD_WINDOW, new gt(e.type, e.value, t => {
                Zt.addLocal(e.type, t * e.value, !0);
            }));
        }
        onCloseBtn() {
            _t.hideView(_t.SIGN_WINDOW), A.playSound(w.BUTTON), yt.getSignInfo().signToday ? _t.showPopup(_t.FREEREWARD_WINDOW, new T("gold", 300)) : this.onGetBtn(!0);
        }
        onVideoBtn() {
            A.playSound(w.BUTTON), A.showVideoAd(t => {
                var e;
                t && (this.sign(), t = 5 * (e = this.rewardArr[yt.getSignInfo().signDay - 1]).value, 
                Zt.addLocal(e.type, t, !0));
            });
        }
        showToStage(t) {
            this.params = t, _t.loadView(this.urlArr, _t.SIGN_WINDOW, _t.COMMON_LOADING, () => {
                this.uiView || (this.initView(), this.initEvent()), this.resize(), Laya.stage.on(Laya.Event.RESIZE, this, this.resize), 
                this.updateSignStatus();
            });
        }
        resize() {
            b.scaleToFull(this.uiView.bg), b.alignToCenter(this.uiView.content);
        }
        removeFromStage() {
            Laya.stage.off(Laya.Event.RESIZE, this, this.resize), this.params && this.params.popup && _t.showPopup(_t.TURNTABLE_WINDOW, {
                popup: !0
            });
        }
        updateSignStatus() {
            var s = yt.getSignInfo(), r = s.signToday ? s.signDay - 1 : s.signDay;
            for (let a = 0; a < 7; a++) {
                let t = this.uiView["day" + (a + 1)], e = t.getChildByName("cur"), i = t.getChildByName("status");
                a < r ? (e.visible = !1, i.visible = !0) : a == r ? (e.visible = !0, s.signToday ? (i.visible = !0, 
                this.uiView.videoBtn.visible = !1, this.uiView.getBtn.visible = !1) : (i.visible = !1, 
                this.uiView.videoBtn.visible = !0, this.uiView.getBtn.visible = !0)) : (i.visible = !1, 
                e.visible = !1);
            }
        }
        sign() {
            var t = yt.getSignInfo();
            t.signToday || (b.autoIncreaseDailyValWithKey("sign_today"), A.setLocal("sign_day", t.signDay + 1), 
            this.updateSignStatus());
        }
        static getSignInfo() {
            let t = {
                signToday: !1,
                signDay: 0
            };
            0 < b.getDailyValByKey("sign_today") && (t.signToday = !0);
            let e = A.getLocal("sign_day");
            return e = e || 0, t.signToday || 7 != e || (e = 0), t.signDay = e, t;
        }
    }
    class ft extends i {
        constructor() {
            super(), this.roleItemArr = [], this.isPopup = !1, this.angle = 0, this.attackIndex = 0, 
            this.attackArr = [ "attack1", "attack2", "attack3" ], E.initShopData(), this.initView(), 
            this.initEvent();
        }
        initView() {
            this.uiView = new a.MainViewUI(), this.addChild(this.uiView), this.createMainRoleItemArr();
        }
        initEvent() {
            this.uiView.startBtn.on(Laya.Event.CLICK, this, this.onStartBtn), this.uiView.shopBtn.on(Laya.Event.CLICK, this, this.onShopBtn), 
            this.uiView.inviteBtn.on(Laya.Event.CLICK, this, this.onInviteBtn), this.uiView.zhuanpanBtn.on(Laya.Event.CLICK, this, this.onZhuanpanBtn), 
            this.uiView.signBtn.on(Laya.Event.CLICK, this, this.onSignBtn), this.uiView.attackBtn.on(Laya.Event.CLICK, this, this.onAttackBtn), 
            this.uiView.paodanBtn.on(Laya.Event.CLICK, this, this.onTifeiBtn), this.uiView.chuidiBtn.on(Laya.Event.CLICK, this, this.onChuidiBtn), 
            this.uiView.worldBtn.on(Laya.Event.CLICK, this, this.onWorldBtn), this.uiView.freeVideoBtn.on(Laya.Event.CLICK, this, this.onFreeVideoBtn), 
            this.uiView.goldInfo.on(Laya.Event.CLICK, this, () => {
                _t.showPopup(_t.FREEREWARD_WINDOW, new T("gold", 300));
            }), this.uiView.diamondInfo.on(Laya.Event.CLICK, this, () => {
                _t.showPopup(_t.FREEREWARD_WINDOW, new T("diamond", 100));
            }), this.updateGoldTxt(), this.updateDiamondTxt(), s.on(s.GOLD_CHANGE, this, this.updateGoldTxt), 
            s.on(s.DIAMOND_CHANGE, this, this.updateDiamondTxt), s.on("shop_role_status", this, this.updateRoleItemArr), 
            A.playMusic(w.BGM), s.on(s.GAME_SHOW, this, () => {
                A.playMusic(w.BGM);
            }), this.uiView.onlingBtn.on(Laya.Event.CLICK, this, this.onChaojifuliClick);
        }
        onFreeVideoBtn() {
            A.showVideoAd(t => {
                t && Zt.addLocal("gold", 300, !0);
            });
        }
        onWorldBtn() {
            Zt.isDanji = !1, _t.hideView(_t.MAIN_VIEW), ut.loginMgobe();
        }
        createMainRoleItemArr() {
            this.uiView.list.vScrollBarSkin = "", this.uiView.list.vScrollBar.elasticDistance = 100;
            for (let e = 0; e < Gt.roleDataArr.length; e++) {
                let t = new a.items.MainRoleItemUI();
                this.uiView.list.addChild(t), this.roleItemArr.push(t), t.icon.skin = "images/head/head" + (e + 1) + ".png", 
                t.nameTxt.text = Gt.roleDataArr[e].name, t.y = (t.height + 20) * e, this.setMainRoleItemEvent(t, e);
            }
            this.updateRoleItemArr();
        }
        setMainRoleItemEvent(t, e) {
            t.on(Laya.Event.CLICK, this, () => E.getShopStatusArr()[e] == E.BUY ? (Zt.useRole(e + 1), 
            void s.event(s.PLAYER_SKIN_CHANGE, [])) : void _t.showPopup(_t.SHOP_VIEW));
        }
        updateRoleItemArr() {
            var e = E.getShopStatusArr();
            for (let t = 0; t < this.roleItemArr.length; t++) this.roleItemArr[t].lock.visible = e[t] == E.NORMAL, 
            this.roleItemArr[t].cover.visible = this.roleItemArr[t].visible, t == Zt.roleId - 1 ? (this.roleItemArr[t].bg.skin = "images/main/kuan.png", 
            this.roleItemArr[t].cover.visible = !1) : this.roleItemArr[t].bg.skin = "images/main/suo-2.png";
        }
        onSignBtn() {
            _t.showPopup(_t.SIGN_WINDOW), A.playSound(w.BUTTON);
        }
        onShopBtn() {
            _t.showPopup(_t.SHOP_VIEW), A.playSound(w.BUTTON);
        }
        onInviteBtn() {
            _t.showPopup(_t.INVITE_WINDOW), A.playSound(w.BUTTON);
        }
        onZhuanpanBtn() {
            _t.showPopup(_t.TURNTABLE_WINDOW), A.playSound(w.BUTTON);
        }
        onStartBtn() {
            Zt.isDanji = !0, _t.hideView(_t.MAIN_VIEW), _t.showPopup(_t.HELP_VIEW, {
                from: P.HELP_FROM_TYPE_LOADING
            }), A.playSound(w.BUTTON);
        }
        showToStage(t) {
            Laya.stage.on(Laya.Event.RESIZE, this, this.resize), this.resize(), Laya.timer.frameLoop(1, this, this.updateLiuguang), 
            this.roleViewer && (this.roleViewer.dispose(), this.roleViewer = null), this.roleViewer = new k(), 
            this.uiView.role.addChild(this.roleViewer), this.role = this.roleViewer.loadRole(rt.path + Gt.roleResArr[Zt.roleId - 1].roleUrl, this.uiView.role, () => {
                let t = b.findAMesh(this.role, "sword");
                t && (t.active = !1);
            }), this.roleViewer.setRoleScale(.04), x.show(this.uiView), this.uiView.levelTxt.text = "Lv." + Zt.level, 
            s.on(s.PLAYER_SKIN_CHANGE, this, this.onPlayerSkinChange), Laya.timer.frameLoop(1, this, this.updateWorldScale), 
            2 != A.getLocal("o_o") && (this.isPopup || (A.setLocal("o_o", 2), this.isPopup = !0, 
            yt.getSignInfo().signToday ? _t.showPopup(_t.TURNTABLE_WINDOW, {
                popup: !0
            }) : _t.showPopup(_t.SIGN_WINDOW, {
                popup: !0
            })));
        }
        onChaojifuliClick() {
            A.playSound(w.BUTTON), yt.getSignInfo().signToday ? _t.showPopup(_t.TURNTABLE_WINDOW, {
                popup: !0
            }) : _t.showPopup(_t.SIGN_WINDOW, {
                popup: !0
            });
        }
        updateWorldScale() {
            this.angle += 8;
            var t = .1 * Math.cos(this.angle / 180 * Math.PI) + 1;
            this.uiView.worldBtn.scale(t, t), this.angle %= 360;
        }
        onPlayerSkinChange() {
            this.updateRoleItemArr(), this.roleViewer && (this.roleViewer.dispose(), this.roleViewer = null), 
            this.roleViewer = new k(), this.uiView.role.addChild(this.roleViewer), this.role = this.roleViewer.loadRole(rt.path + Gt.roleResArr[Zt.roleId - 1].roleUrl, this.uiView.role, () => {
                let t = b.findAMesh(this.role, "sword");
                t && (t.active = !1);
            }), this.roleViewer.setRoleScale(.04);
        }
        resize() {
            this.uiView.midContent.x = .5 * Laya.stage.width, this.uiView.rightMenu.x = Laya.stage.width, 
            b.alignToCenter(this.uiView.freeContainer), b.scaleToFull(this.uiView.bg);
        }
        removeFromStage() {
            Laya.timer.clear(this, this.updateWorldScale), s.off(s.PLAYER_SKIN_CHANGE, this, this.onPlayerSkinChange), 
            Laya.stage.off(Laya.Event.RESIZE, this, this.resize), this.roleViewer && (this.roleViewer.dispose(), 
            this.roleViewer = null), this.role = null, x.hide();
        }
        onAttackBtn() {
            this.role.play(this.attackArr[this.attackIndex]), this.attackIndex++, this.attackIndex >= this.attackArr.length && (this.attackIndex = 0), 
            A.playSound(w.ATTACK);
        }
        onChuidiBtn() {
            this.role.play("attack4"), A.playSound(w.ZHONGQUAN);
        }
        onTifeiBtn() {
            this.role.play("kick"), A.playSound(w.ATTACK);
        }
        updateLiuguang() {
            this.role && this.role.transform && --this.role.transform.localRotationEulerY, this.uiView.liuGuang.x += 10, 
            360 < this.uiView.liuGuang.x && (this.uiView.liuGuang.x = -310);
        }
        updateGoldTxt() {
            this.uiView.goldTxt.text = "" + Zt.gold;
        }
        updateDiamondTxt() {
            this.uiView.diamondTxt.text = "" + Zt.diamond;
        }
    }
    class wt extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.window.QuitWindowUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.okBtn.on(Laya.Event.CLICK, this, this.onOkBtn), this.uiView.cancelBtn.on(Laya.Event.CLICK, this, this.onCancelBtn), 
            this.uiView.closeBtn.on(Laya.Event.CLICK, this, this.onCancelBtn);
        }
        onOkBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.QUIT_WINDOW), (Zt.isDanji ? Zt : ut).quitGTAGame();
        }
        onCancelBtn() {
            p.gameStart(), A.playSound(w.BUTTON), _t.hideView(_t.QUIT_WINDOW);
        }
        showToStage(t) {
            b.alignToCenter(this.uiView.content), b.scaleToFull(this.uiView.bg);
        }
        removeFromStage() {}
    }
    class It extends i {
        constructor() {
            super(), this.countTime = 6, this.curCountTime = 6, this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.window.ReviveWindowUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn), this.uiView.skipBtn.on(Laya.Event.CLICK, this, this.onSkipBtn);
        }
        onVideoBtn() {
            A.playSound(w.BUTTON), Laya.timer.clear(this, this.updateCountTime), A.showVideoAd(t => {
                t && (_t.hideView(_t.REVIVIE_WINDOW), Zt.isDanji ? Zt.gta.user.revive() : X.sendFrame({
                    a: W.REVIVE
                }));
            });
        }
        onSkipBtn() {
            p.gameEnd(), A.playSound(w.BUTTON), _t.hideView(_t.REVIVIE_WINDOW), _t.showPopup(_t.RESULT_WINDOW);
        }
        showToStage(t) {
            this.curCountTime = this.countTime, this.updateCountTimeView(), Laya.timer.frameLoop(1, this, this.updateCircle), 
            Laya.timer.loop(1e3, this, this.updateCountTime), b.scaleToFull(this.uiView.bg), 
            b.alignToCenter(this.uiView.content);
        }
        updateCountTimeView() {
            this.uiView.timeTxt.text = this.curCountTime + "";
        }
        updateCountTime() {
            this.curCountTime--, this.updateCountTimeView(), this.curCountTime <= 0 && this.onSkipBtn();
        }
        updateCircle() {
            this.uiView.circle.rotation += 5;
        }
        removeFromStage() {
            Laya.timer.clear(this, this.updateCircle), Laya.timer.clear(this, this.updateCountTime);
        }
    }
    class At extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.window.ResultWindowUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.replayBtn.on(Laya.Event.CLICK, this, this.onReplayBtn);
        }
        onReplayBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.RESULT_WINDOW), A.isWuScene() ? _t.showPopup(_t.CUSTOMINAD_VIEW, () => {
                this.replay();
            }) : this.replay();
        }
        replay() {
            (Zt.isDanji ? Zt : ut).gta.quit();
        }
        showToStage(t) {
            b.scaleToFull(this.uiView.bg), b.alignToCenter(this.uiView.content), p.setGameEndRewardButton(this.uiView.replayBtn);
        }
        removeFromStage() {}
    }
    class bt extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.window.AirdropWindowUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.skipBtn.on(Laya.Event.CLICK, this, this.onSkipBtn), this.uiView.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn);
        }
        onSkipBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.AIRDROP_WINDOW), _t.showPopup(_t.FREEREWARD_WINDOW, new T("gold", 300));
        }
        onVideoBtn() {
            A.playSound(w.BUTTON), A.showVideoAd(t => {
                t && (Zt.addLocal("gold", 100, !0), _t.hideView(_t.AIRDROP_WINDOW));
            });
        }
        showToStage(t) {
            A.playSound(w.BUTTON), b.scaleToFull(this.uiView.bg), b.alignToCenter(this.uiView.content);
        }
        removeFromStage() {}
    }
    class vt extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.window.CommonLoadingUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.on(Laya.Event.CLICK, this, t => {
                t.stopPropagation();
            });
        }
        showToStage(t) {
            Laya.timer.frameLoop(1, this, this.update), this.resize(), Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
        }
        resize() {
            b.scaleToFull(this.uiView.bg), b.alignToCenter(this.uiView.content);
        }
        removeFromStage() {
            Laya.timer.clear(this, this.update), Laya.stage.off(Laya.Event.RESIZE, this, this.resize);
        }
        update() {
            this.uiView.circle.rotation += 3;
        }
    }
    class Lt extends i {
        constructor() {
            super(), this.curTableVal = 0, this.isTruning = !1, this.curAngle = 0, this.normalSpeedAngle = 11.25, 
            this.stopSpeedAngle = 0, this.stopSpeedA = 0, this.goodsArr = [ {
                desc: "钻石100",
                type: "diamond",
                num: 100,
                id: 1,
                angle: 0
            }, {
                desc: "金币100",
                type: "gold",
                num: 200,
                id: 2,
                angle: -45
            }, {
                desc: "钻石200",
                type: "diamond",
                num: 200,
                id: 3,
                angle: -90
            }, {
                desc: "金币200",
                type: "gold",
                num: 300,
                id: 4,
                angle: -135
            }, {
                desc: "钻石300",
                type: "diamond",
                num: 300,
                id: 5,
                angle: -180
            }, {
                desc: "金币300",
                type: "gold",
                num: 400,
                id: 6,
                angle: -225
            }, {
                desc: "钻石400",
                type: "diamond",
                num: 400,
                id: 7,
                angle: -270
            }, {
                desc: "金币400",
                type: "gold",
                num: 100,
                id: 8,
                angle: -315
            } ], this.srcArr = [ {
                url: "res/atlas/images/turntable.atlas",
                type: Laya.Loader.ATLAS
            } ];
        }
        initView() {
            this.tableView = new a.window.TurnTableWindowUI(), this.uiView = this.tableView, 
            this.addChild(this.tableView);
            for (let e = 0; e < 8; e++) {
                let t = new a.items.TurnTableItemUI();
                t.txt.text = this.goodsArr[e].num + "", t.icon.skin = "gold" == this.goodsArr[e].type ? "images/common/jingbidui.png" : "images/common/zuanshidui.png", 
                this.tableView.table.addChild(t), t.rotation = 360 / this.goodsArr.length * e;
                var i = t.rotation / 180 * Math.PI - Math.PI / 2;
                t.pos(271.5 + 203.625 * Math.cos(i), 271.5 + 203.625 * Math.sin(i));
            }
        }
        initEvent() {
            this.tableFramer = new R(180), this.stopFramer = new R(60), this.tableView.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn), 
            this.tableView.freeBtn.on(Laya.Event.CLICK, this, this.onFreeBtn), this.tableView.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn);
        }
        onFreeBtn() {
            A.playSound(w.BUTTON), this.isTruning || this.startTrunTable();
        }
        onVideoBtn() {
            A.playSound(w.BUTTON), this.isTruning || (11 <= this.curTableVal ? _t.showFlyTip("今天的抽奖次数用完了！") : A.showVideoAd(t => {
                t && this.startTrunTable();
            }));
        }
        startTrunTable() {
            this.tableFramer.reset(), this.tableFramer.isUpdate = !0, this.isTruning = !0, this.isNormal = !0, 
            this.targetIndex = Math.floor(this.goodsArr.length * Math.random()), this.tableView.closeBtn.visible = !1, 
            this.tableView.freeBtn.alpha = this.tableView.videoBtn.alpha = .5, Laya.timer.frameLoop(1, this, this.updateTable);
        }
        updateTable() {
            if (this.isNormal) {
                if (this.tableFramer.update(), this.tableView.table.rotation += this.normalSpeedAngle, 
                !this.tableFramer.isUpdate) {
                    for (this.isNormal = !1, this.stopFramer.reset(), this.stopFramer.isUpdate = !0, 
                    this.targetAngle = this.goodsArr[this.targetIndex].angle, this.curAngle = this.tableView.table.rotation; this.curAngle < 0; ) this.curAngle += 360;
                    for (;this.targetAngle < 0; ) this.targetAngle += 360;
                    for (;this.targetAngle < this.curAngle; ) this.targetAngle += 360;
                    let t = this.targetAngle - this.curAngle;
                    for (;t < 720; ) t += 720;
                    this.stopSpeedAngle = this.normalSpeedAngle, this.stopSpeedA = this.normalSpeedAngle * this.normalSpeedAngle / 2 / t, 
                    this.stopFramer.totalFrames = Math.floor(this.normalSpeedAngle / this.stopSpeedA);
                }
            } else this.curAngle += this.stopSpeedAngle, this.stopSpeedAngle -= this.stopSpeedA, 
            this.tableView.table.rotation = this.curAngle - 7, this.stopFramer.update(), this.stopFramer.isUpdate || this.stopTurnTable();
        }
        stopTurnTable() {
            Laya.timer.clear(this, this.updateTable), this.tableView.closeBtn.visible = !0, 
            b.autoIncreaseDailyValWithKey("tableVal", 0), this.curTableVal = b.getDailyValByKey("tableVal"), 
            this.tableView.freeBtn.alpha = this.tableView.videoBtn.alpha = 1, this.updateBtnView(), 
            this.isTruning = !1, this.handlerResult();
        }
        handlerResult() {
            let e = this.goodsArr[this.targetIndex];
            console.log("大转盘转到", e), _t.hideView(_t.TURNTABLE_WINDOW), _t.showPopup(_t.REWARD_WINDOW, new gt(e.type, e.num, t => {
                Zt.addLocal(e.type, t * e.num, !0);
            }));
        }
        onCloseBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.TURNTABLE_WINDOW), _t.showPopup(_t.FREEREWARD_WINDOW, new T("gold", 300));
        }
        resize() {
            b.alignToCenter(this.tableView.content), b.scaleToFull(this.tableView.bg);
        }
        showToStage(t) {
            this.params = t, _t.loadView(this.srcArr, _t.TURNTABLE_WINDOW, _t.COMMON_LOADING, () => {
                this.tableView || (this.initView(), this.initEvent()), this.tableView.closeBtn.visible = !0, 
                this.curTableVal = b.getDailyValByKey("tableVal", 0), this.updateBtnView(), Laya.stage.on(Laya.Event.RESIZE, this, this.resize), 
                this.resize();
            });
        }
        updateBtnView() {
            0 == this.curTableVal ? (this.tableView.freeBtn.visible = !0, this.tableView.videoBtn.visible = !1) : (this.tableView.freeBtn.visible = !1, 
            this.tableView.videoBtn.visible = !0, this.tableView.videoTxt.text = "(" + (this.curTableVal - 1) + "/10)");
        }
        removeFromStage() {
            Laya.stage.off(Laya.Event.RESIZE, this, this.resize), this.params && this.params.popup && _t.showPopup(_t.AIRDROP_WINDOW);
        }
    }
    class Ct extends Laya.Sprite {
        static init() {
            this.isInit = !0;
            let e = this;
            s.on(s.GAME_SHOW, null, function() {
                Ct.callback && (new Date().getTime() - Ct.shareTime > Ct.time ? (Ct.callback(!0), 
                Ct.callback = null) : e.isCheckOnce ? (Ct.callback(!1), Ct.callback = null) : (e.isCheckOnce = !0, 
                Laya.Browser.window.wx.showModal({
                    title: "提示",
                    content: "请换个群分享试试！",
                    success(t) {
                        t.confirm ? Ct.share(e.callback, !0) : t.cancel && (Ct.callback(!1), Ct.callback = null);
                    }
                })));
            });
        }
        static check() {
            Ct.isInit || Ct.init();
        }
        static share(t, e = !1) {
            this.isCheckOnce = e, Ct.isInit || Ct.init(), this.shareTime = new Date().getTime(), 
            this.callback = t, A.share();
        }
    }
    Ct.time = 3e3, Ct.shareTime = 0, Ct.isInit = !1, Ct.isCheckOnce = !1;
    class kt extends i {
        constructor() {
            super(), this.urlArr = [ {
                url: "res/atlas/images/invite.atlas",
                type: Laya.Loader.ATLAS
            } ], this.inviteItemArr = [];
        }
        initView() {
            this.uiView = new a.window.InviteWindowUI(), this.addChild(this.uiView), this.uiView.list.vScrollBarSkin = "", 
            this.uiView.list.vScrollBar.elasticDistance = 100, this.createInviteItemArr();
        }
        initEvent() {
            this.uiView.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn);
        }
        createInviteItemArr() {
            var t = kt.getInviteArr();
            for (let e = 0; e < t.length; e++) {
                let t = new a.items.InviteItemUI();
                this.inviteItemArr.push(t), t.y = (t.height + 3) * e, this.uiView.list.addChild(t), 
                this.setInviteItemEvent(t, e);
            }
        }
        setInviteItemEvent(t, e) {
            t.inviteBtn.on(Laya.Event.CLICK, this, () => {
                Ct.share(t => {
                    if (t) {
                        let e = kt.getInviteArr();
                        for (let t = 0; t < e.length; t++) e[t] += 1;
                        kt.setInviteArr(e), this.updateInviteArrView();
                    }
                });
            }), t.getBtn.on(Laya.Event.CLICK, this, () => {
                let t = kt.getInviteStatusArr();
                t[e] = kt.COMPLETE, kt.setInviteStatusArr(t), _t.showPopup(_t.REWARD_WINDOW, new gt(kt.inviteGoalArr[e].type, kt.inviteGoalArr[e].reward, t => {
                    Zt.addLocal(kt.inviteGoalArr[e].type, kt.inviteGoalArr[e].reward * t, !0);
                })), this.updateInviteArrView();
            });
        }
        updateInviteArrView() {
            var i = kt.getInviteArr(), a = kt.getInviteStatusArr();
            for (let e = 0; e < this.inviteItemArr.length; e++) {
                let t = this.inviteItemArr[e];
                switch (t.titleTxt.text = "邀请" + kt.inviteGoalArr[e].goal + "个好友", t.completeTxt.text = Math.min(i[e], kt.inviteGoalArr[e].goal) + "/" + kt.inviteGoalArr[e].goal, 
                t.goldIcon.visible = "gold" == kt.inviteGoalArr[e].type, t.diamondIcon.visible = !t.goldIcon.visible, 
                a[e]) {
                  case kt.NORMAL:
                    t.completeBg.visible = !1, t.normalBg.visible = !0, t.getBtn.visible = !1, t.completeIcon.visible = !1, 
                    t.inviteBtn.visible = !0;
                    break;

                  case kt.GET:
                    t.completeBg.visible = !1, t.normalBg.visible = !0, t.getBtn.visible = !0, t.completeIcon.visible = !1, 
                    t.inviteBtn.visible = !1;
                    break;

                  case kt.COMPLETE:
                    t.completeBg.visible = !0, t.normalBg.visible = !1, t.getBtn.visible = !1, t.completeIcon.visible = !0, 
                    t.inviteBtn.visible = !1;
                }
            }
        }
        onCloseBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.INVITE_WINDOW);
        }
        showToStage(t) {
            _t.loadView(this.urlArr, _t.INVITE_WINDOW, _t.COMMON_LOADING, () => {
                this.uiView || (this.initView(), this.initEvent()), b.scaleToFull(this.uiView.bg), 
                b.alignToCenter(this.uiView.content), this.updateInviteArrView();
            });
        }
        static getInviteArr() {
            let t = A.getLocal("invite");
            if (!t) {
                let e = [];
                for (let t = 0; t < this.inviteGoalArr.length; t++) e.push(0);
                t = e.join(",");
            }
            var e = t.split(",");
            let i = [];
            for (let t = 0; t < e.length; t++) i.push(parseFloat(e[t]));
            return i;
        }
        static setInviteArr(e) {
            let i = this.getInviteStatusArr();
            for (let t = 0; t < e.length; t++) i[t] == this.NORMAL && e[t] >= this.inviteGoalArr[t].goal && (i[t] = this.GET);
            this.setInviteStatusArr(i), A.setLocal("invite", e.join(","));
        }
        static setInviteVal(t, e) {
            let i = this.getInviteArr();
            i[t] = e, this.setInviteArr(i);
        }
        static getInviteStatusArr() {
            let t = A.getLocal("invite_status");
            if (!t) {
                let e = [];
                for (let t = 0; t < this.inviteGoalArr.length; t++) e.push(0);
                t = e.join(",");
            }
            var e = t.split(",");
            let i = [];
            for (let t = 0; t < e.length; t++) i.push(parseFloat(e[t]));
            return i;
        }
        static setInviteStatusArr(t) {
            A.setLocal("invite_status", t.join(","));
        }
        static setInviteStatusVal(t, e) {
            let i = this.getInviteStatusArr();
            i[t] = e, this.setInviteStatusArr(i);
        }
    }
    kt.inviteGoalArr = [ {
        goal: 1,
        reward: 100,
        type: "gold"
    }, {
        goal: 2,
        reward: 100,
        type: "diamond"
    }, {
        goal: 3,
        reward: 100,
        type: "gold"
    }, {
        goal: 4,
        reward: 100,
        type: "diamond"
    }, {
        goal: 5,
        reward: 100,
        type: "gold"
    }, {
        goal: 6,
        reward: 100,
        type: "diamond"
    }, {
        goal: 7,
        reward: 100,
        type: "gold"
    }, {
        goal: 8,
        reward: 100,
        type: "diamond"
    } ], kt.NORMAL = 0, kt.GET = 1, kt.COMPLETE = 2;
    class xt extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.window.RewardWindowUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.getBtn.on(Laya.Event.CLICK, this, this.onGetBtn), this.uiView.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn), 
            this.uiView.selectBtn.on(Laya.Event.CLICK, this, this.onSelectBtn);
        }
        onSelectBtn() {
            this.uiView.gou.visible = !this.uiView.gou.visible, this.uiView.getBtn.visible = !this.uiView.gou.visible;
        }
        onGetBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.REWARD_WINDOW), this.rewardConfig.callback(1);
        }
        onVideoBtn() {
            A.playSound(w.BUTTON), A.showVideoAd(t => {
                t && (_t.hideView(_t.REWARD_WINDOW), this.rewardConfig.callback(5));
            });
        }
        showToStage(t) {
            A.isWuScene() ? (this.uiView.gou.visible = !0, this.uiView.getBtn.visible = !1) : (this.uiView.gou.visible = !1, 
            this.uiView.getBtn.visible = !0), this.rewardConfig = t, b.scaleToFull(this.uiView.bg), 
            b.alignToCenter(this.uiView.content), this.uiView.icon.skin = "gold" == this.rewardConfig.type ? "images/common/jingbidui.png" : "images/common/zuanshidui.png", 
            this.uiView.numTxt.text = "+" + this.rewardConfig.num;
        }
        removeFromStage() {}
    }
    class Tt extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.window.CommonWindowUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.okBtn.on(Laya.Event.CLICK, this, this.onOkBtn), this.uiView.cancelBtn.on(Laya.Event.CLICK, this, this.onCancelBtn);
        }
        onOkBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.COMMON_WINDOW), this.commonConfig.confirmCallback && this.commonConfig.confirmCallback();
        }
        onCancelBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.COMMON_WINDOW), this.commonConfig.cancelCallback && this.commonConfig.cancelCallback();
        }
        showToStage(t) {
            this.commonConfig = t, b.scaleToFull(this.uiView.bg), b.alignToCenter(this.uiView.content), 
            this.commonConfig.cancel ? (this.uiView.cancelBtn.visible = !0, this.uiView.okBtn.x = 642) : (this.uiView.cancelBtn.visible = !1, 
            this.uiView.okBtn.x = 821), this.uiView.tip.text = this.commonConfig.tip;
        }
        removeFromStage() {}
    }
    class Pt extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.window.FreeRewardWindowUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.skipBtn.on(Laya.Event.CLICK, this, this.onSkipBtn), this.uiView.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn), 
            this.uiView.selectBtn.on(Laya.Event.CLICK, this, this.onSelectBtn);
        }
        onSelectBtn() {
            this.uiView.gou.visible = !this.uiView.gou.visible, this.uiView.skipBtn.visible = !this.uiView.gou.visible;
        }
        onSkipBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.FREEREWARD_WINDOW);
        }
        onVideoBtn() {
            A.playSound(w.BUTTON), A.showVideoAd(t => {
                t && (Zt.addLocal(this.freeConfig.type, this.freeConfig.num, !0), _t.hideView(_t.FREEREWARD_WINDOW));
            });
        }
        showToStage(t) {
            A.isWuScene() ? (this.uiView.gou.visible = !0, this.uiView.skipBtn.visible = !1) : (this.uiView.gou.visible = !1, 
            this.uiView.skipBtn.visible = !0), b.scaleToFull(this.uiView.bg), b.alignToCenter(this.uiView.content), 
            this.freeConfig = t, this.uiView.numTxt.text = "+" + this.freeConfig.num, "gold" == this.freeConfig.type ? this.uiView.icon.skin = "images/common/jingbidui.png" : this.uiView.icon.skin = "images/common/zuanshidui.png";
        }
        removeFromStage() {}
    }
    class St extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.window.MaxMapWindowUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn);
        }
        onCloseBtn() {
            A.playSound(w.BUTTON), _t.hideView(_t.MAXMAP_WINDOW);
        }
        showToStage(t) {
            this.uiView.content.x = Laya.stage.width, b.scaleToFull(this.uiView.bg), Zt.isDanji ? this.maxMap = Zt.gta.createMaxMap() : this.maxMap = ut.gta.createMaxMap(), 
            this.uiView.map.addChild(this.maxMap), Laya.timer.frameLoop(1, this, this.update);
        }
        update() {
            this.maxMap.update(), this.uiView.map.reCache();
        }
        removeFromStage() {
            Laya.timer.clear(this, this.update), this.maxMap.destroyAll();
        }
    }
    class Et extends i {
        constructor() {
            super(), this.urlArr = [ {
                url: "res/atlas/images/match.atlas",
                type: Laya.Loader.ATLAS
            } ], this.coutTime = 15, this.curTime = 0, this.preTime = 0, this.isMatchComplete = !1;
        }
        initView() {
            this.uiView = new a.MatchViewUI(), this.addChild(this.uiView);
        }
        initEvent() {}
        showToStage(t) {
            this.isMatchComplete = !1, _t.loadView(this.urlArr, _t.MATCH_VIEW, _t.COMMON_LOADING, () => {
                this.uiView || (this.initView(), this.initEvent()), b.scaleToFull(this.uiView.bg), 
                b.alignToCenter(this.uiView.content), this.curTime = this.coutTime, this.preTime = new Date().getTime(), 
                this.updateTime(), Laya.timer.frameLoop(1, this, this.updateTime), X.room.onUpdate = this.onRoomUpdate.bind(this), 
                this.startMatchRoom(t);
            });
        }
        startMatchRoom(t) {
            X.userInfo.userId = X.uid(), X.userInfo.nickName = "张三", X.userInfo.avatarUrl = "images/head/head1.png", 
            X.userInfo.skinId = Zt.roleId, X.startMatch(t => {
                t || console.log("匹配失败！"), console.log("OK", t);
            });
        }
        onRoomUpdate() {
            X.room.roomInfo.frameSyncState == MGOBE.ENUM.FrameSyncState.STOP && X.room.roomInfo.playerList.length == U.teamPlayer && 0 == X.room.roomInfo.playerList.filter(t => t.commonNetworkState != MGOBE.ENUM.NetworkState.COMMON_ONLINE).length && this.matchComplete();
        }
        matchComplete() {
            this.isMatchComplete || (this.isMatchComplete = !0, X.room.changeRoom({
                isPrivate: !0,
                isForbidJoin: !0
            }, () => {
                X.resetMgobe(), X.addCallbackHandler(), this.goAhead();
            }));
        }
        updateTime() {
            var t = new Date().getTime();
            this.curTime -= (t - this.preTime) / 1e3, this.preTime = t, this.curTime <= 0 && (this.curTime = 0, 
            this.isMatchComplete || this.matchComplete());
            let e = Math.floor(this.curTime) + "";
            e.length < 2 && (e = "0" + e), this.uiView.timeTxt.text = "00:" + e, this.uiView.circle.rotation += 3;
        }
        removeFromStage() {
            X.room.onUpdate = null, Laya.timer.clear(this, this.updateTime);
        }
        goAhead() {
            _t.hideView(_t.MATCH_VIEW), _t.showPopup(_t.MULLoading_VIEW);
        }
    }
    class Bt extends i {
        constructor() {
            super(), this.progressVal = 0, this.isCheckEnterGame = !1, this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.LoadingViewUI(), this.addChild(this.uiView), this.onResize();
        }
        initEvent() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
        }
        onResize() {
            b.scaleToFull(this.uiView.bg), b.alignToCenter(this.uiView.content);
        }
        showToStage(t) {
            this.isCheckEnterGame = !1, this.progressVal = 0, this.updateLoading(), Laya.timer.frameLoop(1, this, this.updateLoading), 
            s.on(s.GAME_START, this, this.enterGame), X.room.onUpdate = this.onRoomUpdate.bind(this);
            let e = new Date().getTime();
            Gt.loadGameRes(() => {
                var t = new Date().getTime() - e;
                t < 4e3 ? Laya.timer.once(4e3 - t, this, this.loadResComplete) : this.loadResComplete();
            }), this.onRoomUpdate();
        }
        loadResComplete() {
            X.room.changeCustomPlayerStatus({
                customPlayerStatus: 1
            }, t => {
                console.log("LoadResComplete!");
            });
        }
        onRoomUpdate() {
            0 == X.room.roomInfo.playerList.filter(t => 1 != t.customPlayerStatus).length && this.checkEnterGame();
        }
        checkEnterGame() {
            console.log("CheckEnterGame!"), this.isCheckEnterGame || (this.isCheckEnterGame = !0, 
            X.room.changeCustomPlayerStatus({
                customPlayerStatus: 0
            }, t => {
                t.code == MGOBE.ErrCode.EC_OK && X.room.roomInfo.owner == X.uid() && X.startFrameSync();
            }));
        }
        enterGame() {
            s.off(s.GAME_START, this, this.enterGame), ut.createGame(), _t.hideView(_t.MULLoading_VIEW), 
            _t.showPopup(_t.MULGAME_VIEW);
        }
        updateLoading() {
            this.progressVal += .001, this.progressVal = Math.min(.99, this.progressVal), this.uiView.progress.scaleX = this.progressVal, 
            this.uiView.star.x = this.uiView.progress.x + 1305 * this.progressVal;
        }
        removeFromStage() {
            X.room.onUpdate = null, s.off(s.GAME_START, this, this.enterGame), Laya.timer.clear(this, this.updateLoading);
        }
    }
    class Vt extends i {
        constructor() {
            super(), this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.GameViewUI(), this.addChild(this.uiView);
        }
        initEvent() {
            this.uiView.bianshenBtn.on(Laya.Event.MOUSE_DOWN, this, this.onBianshenBtn), this.uiView.attackBtn.on(Laya.Event.MOUSE_DOWN, this, this.onAttackBtn), 
            this.uiView.jumpBtn.on(Laya.Event.MOUSE_DOWN, this, this.onJumpBtn), this.uiView.runBtn.on(Laya.Event.MOUSE_DOWN, this, this.onRunBtn), 
            this.uiView.kickBtn.on(Laya.Event.MOUSE_DOWN, this, this.onKickBtn), this.uiView.paodanBtn.on(Laya.Event.MOUSE_DOWN, this, this.onPaodanBtn), 
            this.uiView.zhongquanBtn.on(Laya.Event.MOUSE_DOWN, this, this.onZhongquanBtn), this.uiView.yaoshuiBtn.on(Laya.Event.CLICK, this, this.onYaoshuiBtn), 
            this.uiView.backBtn.on(Laya.Event.CLICK, this, this.onBackBtn), this.uiView.helpBtn.on(Laya.Event.CLICK, this, this.onHelpBtn), 
            this.uiView.shopBtn.on(Laya.Event.CLICK, this, this.onShopBtn), this.uiView.signBtn.on(Laya.Event.CLICK, this, this.onSignBtn), 
            this.uiView.zhuanpanBtn.on(Laya.Event.CLICK, this, this.onZhuanpanBtn), this.uiView.mapBtn.on(Laya.Event.CLICK, this, this.onMapBtn), 
            this.uiView.taskInfo.on(Laya.Event.CLICK, this, this.onTaskBtn);
        }
        onTaskBtn() {
            _t.showPopup(_t.TASK_WINDOW);
        }
        onMapBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.MAXMAP_WINDOW);
        }
        onZhuanpanBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.TURNTABLE_WINDOW);
        }
        onSignBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.SIGN_WINDOW);
        }
        onShopBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.SHOP_VIEW);
        }
        onHelpBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.HELP_VIEW);
        }
        onBackBtn() {
            A.playSound(w.BUTTON), _t.showPopup(_t.QUIT_WINDOW);
        }
        onYaoshuiBtn() {
            A.playSound(w.BUTTON), A.showVideoAd(t => {
                t && X.sendFrame({
                    a: W.YAOSHUI
                });
            });
        }
        onBianshenBtn(t) {
            this.showClickBtnEff(t), X.sendFrame({
                a: W.BIANSHEN
            });
        }
        onRunBtn(t) {
            this.showClickBtnEff(t), X.sendFrame({
                a: W.RUNWALK
            });
        }
        onAttackBtn(t) {
            this.showClickBtnEff(t), X.sendFrame({
                a: W.ATTACK
            });
        }
        onJumpBtn(t) {
            this.showClickBtnEff(t), X.sendFrame({
                a: W.JUMP
            });
        }
        onKickBtn(t) {
            this.showClickBtnEff(t), X.sendFrame({
                a: W.KICK
            });
        }
        onPaodanBtn(t) {
            this.showClickBtnEff(t);
        }
        onZhongquanBtn(t) {
            this.showClickBtnEff(t), X.sendFrame({
                a: W.ZHONGQUAN
            });
        }
        showClickBtnEff(t) {
            let e = t.currentTarget;
            Laya.Tween.clearAll(e), Laya.Tween.to(e, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 100, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.linearNone);
            }));
            let i = e.getChildByName("light");
            Laya.Tween.clearAll(i);
            t = e == this.uiView.attackBtn ? 1 : .5;
            i.scale(t, t), i.alpha = 1, i.visible = !0, Laya.Tween.to(i, {
                scaleX: 1.2 * t,
                scaleY: 1.2 * t,
                alpha: 0
            }, 150, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                i.visible = !1;
            }));
        }
        showToStage(t) {
            this.uiView.userIcon.skin = "images/head/circle" + Zt.roleId + ".png", this.uiView.rightMenu.x = Laya.stage.width, 
            this.updateRunWalkBtn(), this.updateBianshenBtn(), this.updateBlood(1), this.updateStar(0), 
            this.updateExperienceInfo(), this.updateTaskInfo(), s.on("star_change", this, this.updateStar), 
            s.on("blood_change", this, this.onUserBloodChange), s.on("experience", this, this.updateExperienceInfo), 
            s.on("task_change", this, this.updateTaskInfo), s.on(s.PLAYER_SKIN_CHANGE, this, this.onPlayerSkinChange), 
            s.on("runwalk", this, this.updateRunWalkBtn), s.on("bianshen", this, this.updateBianshenBtn);
        }
        onPlayerSkinChange() {
            X.sendFrame({
                a: W.SKIN,
                p: {
                    skinId: Zt.roleId
                }
            }), this.uiView.userIcon.skin = "images/head/circle" + Zt.roleId + ".png";
        }
        updateTaskInfo() {
            ut.gta.curFeederTask ? (this.uiView.taskTxt.text = Gt.feedermissionDataArr[ut.gta.curFeederTask.taskId - 1].feedermissiontitle, 
            this.uiView.tips.visible = !0) : (this.uiView.taskTxt.text = "我的任务", this.uiView.tips.visible = !1);
        }
        updateExperienceInfo() {
            this.updateExperience(Zt.getCurExperienceProgress()), this.updateLevel(Zt.level);
        }
        onUserBloodChange() {
            this.updateBlood(ut.gta.user.curBlood / ut.gta.user.totalBlood);
        }
        updateRunWalkBtn() {
            ut.gta.user.isRun ? this.uiView.runBtn.skin = "images/game/xz.png" : this.uiView.runBtn.skin = "images/game/pb.png";
        }
        updateBianshenBtn() {
            ut.gta.user.isCar ? (this.uiView.skillBtns.visible = !1, this.uiView.bianshenBtn.skin = "images/game/btn_to_role.png") : (this.uiView.skillBtns.visible = !0, 
            this.uiView.bianshenBtn.skin = "images/game/btn_to_car.png"), this.uiView.shootItem.visible = !1;
        }
        removeFromStage() {
            s.off("task_change", this, this.updateTaskInfo), s.off("runwalk", this, this.updateRunWalkBtn), 
            s.off("bianshen", this, this.updateBianshenBtn), s.off("star_change", this, this.updateStar), 
            s.off("experience", this, this.updateExperienceInfo), s.off("blood_change", this, this.onUserBloodChange), 
            s.off(s.PLAYER_SKIN_CHANGE, this, this.onPlayerSkinChange);
        }
        updateStar(i, a = !1) {
            for (let e = 1; e <= 5; e++) {
                let t = this.uiView["star" + e];
                e <= i ? (t.skin = "images/game/xx1.png", a && new o(t)) : t.skin = "images/game/xx2.png";
            }
        }
        addMiniMap(t) {
            this.uiView.minMap.addChild(t);
        }
        updateExperience(t) {
            this.uiView.experience.scaleX = t;
        }
        updateBlood(t) {
            this.uiView.blood.scaleX = t;
        }
        updateLevel(t) {
            this.uiView.levelTxt.text = t + "";
        }
    }
    class Rt extends i {
        constructor() {
            super(), this.curIndex = 0, this.closeIndex = 2, this.isOnshow = !1, this.isShowVideo = !1, 
            this.appWidth = 200, this.appHeight = 200, this.appDataArr = [ {
                id: 1,
                name: "和平王者大乱斗",
                icon: "icons/1.png",
                appid: "wx8610fd288450d870",
                path: "?from=3824"
            }, {
                id: 2,
                name: "机甲变形超能战车",
                icon: "icons/2.png",
                appid: "wx9a8675ef694aba2b",
                path: "?from=3824"
            }, {
                id: 3,
                name: "战地卡车运输模拟",
                icon: "icons/3.png",
                appid: "wx815661592f736490",
                path: "?from=3824"
            }, {
                id: 4,
                name: "野狼模拟器",
                icon: "icons/4.png",
                appid: "wx9580c23f80396665",
                path: "?from=3824"
            }, {
                id: 5,
                name: "香肠人派对与狗",
                icon: "icons/5.png",
                appid: "wxf43e0f9c19de140b",
                path: "?from=3824"
            }, {
                id: 6,
                name: "恐龙岛荒野生存2",
                icon: "icons/6.png",
                appid: "wx7d74053c15f7482f",
                path: "?from=3824"
            }, {
                id: 7,
                name: "二战帝国模拟器",
                icon: "icons/7.png",
                appid: "wxa7cea5f72b5b4a5e",
                path: "?wxgamecid=CCBgAAoXkpQY9e-XgOifeV"
            }, {
                id: 9,
                name: "和平荣耀像素吃鸡",
                icon: "icons/9.png",
                appid: "wxd38fe9e27c645c78",
                path: "?wxgamecid=CCBgAAoXkpQY9e-XgOifeV"
            }, {
                id: 10,
                name: "天天玩皮筋",
                icon: "icons/10.png",
                appid: "wxaf51bdccc0e0f76a",
                path: "?wxgamecid=CCBgAAoXkpQY9e-XgOifeV"
            } ], this.initView(), this.initEvent();
        }
        initView() {
            this.uiView = new a.CustomInterstitialAdViewUI(), this.addChild(this.uiView);
        }
        initEvent() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.onResize), this.uiView.continueBtn.on(Laya.Event.CLICK, this, this.onContinueBtn);
        }
        onContinueBtn() {
            this.curIndex++, this.curIndex >= this.closeIndex ? _t.hideView(_t.CUSTOMINAD_VIEW) : !this.isShowVideo && Math.random() < .15 && (this.isShowVideo = !0, 
            A.showVideoAd(t => {}));
        }
        onResize() {
            this.uiView.continueBtn.y = Laya.stage.height - 120, this.uiView.content.x = Laya.stage.width - 1920 >> 1;
        }
        showToStage(t) {
            this.isShowVideo = !1, this.isOnshow = !0, this.onResize(), A.hideBannerAd(), this.appContainer && (this.appContainer.visible = !1), 
            s.on("interstitial_ad_error", this, this.showMatrixApps), A.instance.showCustomInterstitialAd(), 
            this.curIndex = 0, this.closeIndex = Math.random() < .5 ? 2 : 3, this.callback = t;
        }
        removeFromStage() {
            this.isOnshow = !1, A.instance.hideCustomInterstitialAd(), s.off("interstitial_ad_error", this, this.showMatrixApps), 
            this.callback();
        }
        setCallback(t) {
            this.callback = t;
        }
        showMatrixApps() {
            if (!this.appContainer) {
                this.appContainer = new Laya.Sprite(), this.uiView.content.addChild(this.appContainer);
                var i = (650 - 3 * this.appWidth) / 2;
                this.appContainer.pos(635, 180);
                for (let e = 0; e < this.appDataArr.length; e++) {
                    let t = new Laya.Image("qxsdk/" + this.appDataArr[e].icon);
                    t.size(this.appWidth, this.appHeight), t.pos((this.appWidth + i) * (e % 3), (this.appWidth + i) * Math.floor(e / 3)), 
                    this.appContainer.addChild(t), t.on(Laya.Event.CLICK, this, this.onAppClick, [ e ]);
                }
            }
            this.appContainer.visible = !0;
        }
        onAppClick(t) {
            console.log("ClickApp:", this.appDataArr[t].appid);
            var e = this.appDataArr[t].appid;
            Laya.Browser.onMiniGame && Laya.Browser.window.wx.navigateToMiniProgram({
                appId: e,
                path: this.appDataArr[t].appid,
                success: function() {},
                fail: function() {}
            });
        }
    }
    class _t {
        constructor() {}
        static init() {
            this.instance = new _t(), this.instance.rootContainer = new Laya.Sprite(), this.instance.viewContainer = new Laya.Sprite(), 
            this.instance.popupContainer = new Laya.Sprite(), this.instance.topContainer = new Laya.Sprite(), 
            Laya.stage.addChild(this.instance.rootContainer), Laya.stage.addChild(this.instance.viewContainer), 
            Laya.stage.addChild(this.instance.popupContainer), Laya.stage.addChild(this.instance.topContainer), 
            this.register(ft, this.MAIN_VIEW), this.register(v, this.GAME_VIEW), this.register(L, this.LOADING_VIEW), 
            this.register(P, this.HELP_VIEW), this.register(E, this.SHOP_VIEW), this.register(Et, this.MATCH_VIEW), 
            this.register(Bt, this.MULLoading_VIEW), this.register(Vt, this.MULGAME_VIEW), this.register(vt, this.COMMON_LOADING), 
            this.register(wt, this.QUIT_WINDOW), this.register(It, this.REVIVIE_WINDOW), this.register(At, this.RESULT_WINDOW), 
            this.register(bt, this.AIRDROP_WINDOW), this.register(yt, this.SIGN_WINDOW), this.register(Lt, this.TURNTABLE_WINDOW), 
            this.register(kt, this.INVITE_WINDOW), this.register(xt, this.REWARD_WINDOW), this.register(Tt, this.COMMON_WINDOW), 
            this.register(Pt, this.FREEREWARD_WINDOW), this.register(St, this.MAXMAP_WINDOW), 
            this.register(pt, this.TASK_WINDOW), this.register(Rt, this.CUSTOMINAD_VIEW);
        }
        static register(t, e) {
            this.viewClass[e] = t;
        }
        static showView(t, e = null) {
            this.viewChangeNum++;
            var i = this.getView(t);
            return this.addViewToArr(t), i && (this.instance.viewContainer.addChild(i), i.showToStage(e), 
            i.viewIsShowing = !0), i;
        }
        static showPopup(t, e = null) {
            this.viewChangeNum++;
            var i = this.getView(t);
            return this.addViewToArr(t), i && (this.instance.topContainer.addChild(i), i.showToStage(e), 
            i.viewIsShowing = !0), i;
        }
        static hideView(t, e = !1) {
            var i = this.getView(t);
            this.removeViewFromArr(t), i && (i.removeFromStage(), i.removeSelf(), i.viewIsShowing = !1, 
            e && (i.clearRes(), delete this.viewPool[t]));
        }
        static getView(t) {
            var e = this.viewPool[t];
            return !e && this.viewClass[t] && ((e = new this.viewClass[t]()).viewType = t, this.viewPool[t] = e), 
            e;
        }
        static hasView(t) {
            return this.viewPool[t];
        }
        static loadView(e, i, a, s) {
            this.viewStatus[i] ? 2 == this.viewStatus[i] && s() : (this.showPopup(a), Laya.loader.create(e, Laya.Handler.create(this, function(t) {
                this.hideView(a), t ? (this.viewStatus[i] = 2, s()) : _t.showPopup(_t.COMMON_WINDOW, new S("加载失败，请点击确定重新加载！", () => {
                    this.loadView(e, i, a, s);
                }));
            })));
        }
        static showFlyTip(t) {
            return new e(t);
        }
        static getTopViewType(e = []) {
            for (let t = this.viewTypeArr.length - 1; 0 <= t; t--) if (-1 == e.indexOf(this.viewTypeArr[t])) return this.viewTypeArr[t];
            return "";
        }
        static moveViewToTop(e) {
            var i = this.getView(e);
            if (i) {
                let t = i.parent;
                t && (t.setChildIndex(i, t.numChildren - 1), this.addViewToArr(e));
            }
        }
        static addViewToArr(t) {
            this.removeViewFromArr(t), this.viewTypeArr.push(t), s.event(s.VIEW_CHANGE, [ t ]);
        }
        static removeViewFromArr(t) {
            var e = this.viewTypeArr.indexOf(t);
            -1 != e && this.viewTypeArr.splice(e, 1), s.event(s.VIEW_CHANGE, [ t ]);
        }
    }
    _t.viewClass = {}, _t.viewPool = {}, _t.viewStatus = {}, _t.viewChangeNum = 0, _t.viewTypeArr = [], 
    _t.MAIN_VIEW = "main_view", _t.GAME_VIEW = "game_view", _t.LOADING_VIEW = "loading_view", 
    _t.HELP_VIEW = "help_view", _t.SHOP_VIEW = "shop_view", _t.MATCH_VIEW = "match_view", 
    _t.MULLoading_VIEW = "mulloading_view", _t.MULGAME_VIEW = "mulgame_view", _t.COMMON_LOADING = "common_loading", 
    _t.QUIT_WINDOW = "quit_window", _t.REVIVIE_WINDOW = "revive_window", _t.RESULT_WINDOW = "result_window", 
    _t.AIRDROP_WINDOW = "airdrop_window", _t.SIGN_WINDOW = "sign_window", _t.TURNTABLE_WINDOW = "turntable_window", 
    _t.INVITE_WINDOW = "invite_window", _t.REWARD_WINDOW = "reward_window", _t.FREEREWARD_WINDOW = "freereward_window", 
    _t.COMMON_WINDOW = "common_window", _t.MAXMAP_WINDOW = "maxmap_window", _t.TASK_WINDOW = "task_window", 
    _t.CUSTOMINAD_VIEW = "custominad_view";
    class Mt {
        constructor(t) {
            this.parse(t);
        }
        parse(t) {
            this.id = t.id, this.star = t.star, this.score = t.score;
        }
    }
    class Nt {
        constructor(t) {
            this.parse(t);
        }
        parse(t) {
            this.id = t.id, this.robotname = t.robotname, this.robotid = t.robotid, this.attack1 = t.attack1, 
            this.attack2 = t.attack2, this.blood = t.blood, this.experience = t.experience, 
            this.range = t.range, this.score = t.score;
        }
    }
    class Ot {
        constructor(t) {
            this.parse(t);
        }
        parse(t) {
            this.id = t.id, this.name = t.name, this.blood = t.blood, this.attack = t.attack, 
            this.experience = t.experience, this.range = t.range, this.score = t.score;
        }
    }
    class Ft {
        constructor(t) {
            this.parse(t);
        }
        parse(t) {
            this.id = t.id, this.name = t.name, this.resourcesid = t.resourcesid, this.piecenum = t.piecenum, 
            this.blood = t.blood, this.attack = t.attack, this.score = t.score;
        }
    }
    class Ut {
        constructor(t) {
            this.parse(t);
        }
        parse(t) {
            this.id = t.id, this.level = t.level, this.experience = t.experience;
        }
    }
    class Dt {
        constructor(t) {
            this.roleUrl = t.roleUrl, this.carUrl = t.carUrl, this.bianshenUrl = t.bianshenUrl;
        }
        getUrlArr() {
            return [ rt.path + this.roleUrl, rt.path + this.carUrl, rt.path + this.bianshenUrl ];
        }
    }
    class Wt {
        constructor(t) {
            this.parse(t);
        }
        parse(t) {
            this.id = t.id, this.feedermissiontitle = t.feedermissiontitle, this.feedermissiondialogue1 = t.feedermissiondialogue1, 
            this.feedermissiondialogue2 = t.feedermissiondialogue2, this.resourcesid = t.resourcesid, 
            this.piecenum = t.piecenum, this.getstar = t.getstar, this.expericence = t.expericence;
        }
    }
    class Yt {
        constructor() {}
        static isEnable() {
            return !(!Laya.Browser.onMiniGame && !Laya.Browser.onQQMiniGame || A.platFormType == n.TT);
        }
        static load(e, i, a = null) {
            if (this.isEnable()) {
                let t = Laya.Browser.window.wx.loadSubpackage({
                    name: e,
                    success: function(t) {
                        i(!0);
                    },
                    fail: function(t) {
                        i(!1);
                    }
                });
                t.onProgressUpdate(function(t) {
                    a && a(t);
                });
            } else i(!0);
        }
        static loadQueue(e, i, a = null) {
            let s = function(t) {
                Yt.loadQueueItem(e, t, s, i, a);
            };
            this.loadQueueItem(e, 0, s, i, a);
        }
        static loadQueueItem(t, e, i, a, s = null) {
            this.load(t[e], function() {
                ++e < t.length ? i(e) : a(!0);
            }, function(t) {
                s && s(t, e);
            });
        }
    }
    class Gt {
        constructor() {}
        static loadHomeRes(e) {
            for (let t = 0; t < this.roleResConfig.length; t++) this.roleResArr.push(new Dt(this.roleResConfig[t]));
            Laya.Browser.onMiniGame && (Laya.MiniAdpter.autoCacheFile = !1), Yt.loadQueue([ "images", "res", "3d_role" ], () => {
                rt.unZip("3d_role/LayaScene_roles.zip", "3d", () => {
                    Laya.loader.create(this.getHomeResUrlArr(), Laya.Handler.create(this, t => {
                        this.parseDataToArr("res/gamedata/robot.json", this.robotDataArr, Nt), this.parseDataToArr("res/gamedata/star.json", this.starDataArr, Mt), 
                        this.parseDataToArr("res/gamedata/vehicle.json", this.vehicleDataArr, Ot), this.parseDataToArr("res/gamedata/role.json", this.roleDataArr, Ft), 
                        this.parseDataToArr("res/gamedata/rolelevel.json", this.roleLevelDataArr, Ut), this.parseDataToArr("res/gamedata/feedermission.json", this.feedermissionDataArr, Wt), 
                        e();
                    }));
                });
            });
        }
        static parseDataToArr(t, e, i) {
            var a, s = Laya.loader.getRes(t);
            for (a in s) e.push(new i(s[a]));
        }
        static getHomeResUrlArr() {
            return [ {
                url: "res/atlas/images/common.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/images/main.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/gamedata/robot.json",
                type: Laya.Loader.JSON
            }, {
                url: "res/gamedata/star.json",
                type: Laya.Loader.JSON
            }, {
                url: "res/gamedata/vehicle.json",
                type: Laya.Loader.JSON
            }, {
                url: "res/gamedata/role.json",
                type: Laya.Loader.JSON
            }, {
                url: "res/gamedata/rolelevel.json",
                type: Laya.Loader.JSON
            }, {
                url: "res/gamedata/feedermission.json",
                type: Laya.Loader.JSON
            } ];
        }
        static loadGameRes(e) {
            Yt.load("3d", () => {
                rt.unZip("3d/3d.zip", "3d", () => {
                    Laya.loader.create(this.getGameResUrlArr(), Laya.Handler.create(this, t => {
                        t ? y.loadZip(rt.path + "3d/map/map1/data.zip", () => {
                            u.loadZip("map1", rt.path + "3d/map/map1/map1.zip", () => {
                                e();
                            });
                        }) : _t.showPopup(_t.COMMON_WINDOW, new S("加载出错，请稍候再试", () => {
                            _t.hideView(_t.HELP_VIEW), _t.showPopup(_t.MAIN_VIEW);
                        }));
                    }));
                });
            });
        }
        static getGameResUrlArr() {
            let e = [ {
                url: "res/atlas/images/quit.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/images/game.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/images/maxmap.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/images/revive.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/images/result.atlas",
                type: Laya.Loader.ATLAS
            }, rt.path + this.sceneUrl ];
            e = e.concat(this.getRoleUrlArr()), e = e.concat(this.getRobotsUrlArr()), e = e.concat(this.getCarUrlArr()), 
            e = e.concat(this.getEffUrlArr());
            var i = this.getGameObjNameArr();
            for (let t = 0; t < i.length; t++) e.push(this.getGameObjUrlByName(i[t]));
            return e;
        }
        static getBuildingNameArr() {
            return [ "b2", "b3", "b5", "b6", "b9", "b11", "b14", "b15", "b17", "b22" ];
        }
        static getOtherItemNameArr() {
            return [ "shu", "statue" ];
        }
        static getGameObjNameArr() {
            return [ "b2", "b3", "b5", "b6", "b9", "b11", "b14", "b15", "b17", "b22", "shu", "statue" ];
        }
        static getGameObjUrlByName(t) {
            return rt.path + "3d/LayaScene_items/Conventional/" + t + ".lh";
        }
        static getRoleUrlArr() {
            let i = [ 1 ];
            if (Zt.isDanji) -1 == i.indexOf(Zt.roleId) && i.push(Zt.roleId); else for (let e = 0; e < X.room.roomInfo.playerList.length; e++) {
                let t = new Y();
                t.parse(X.room.roomInfo.playerList[e].customProfile), -1 == i.indexOf(t.skinId) && i.push(t.skinId);
            }
            let e = [];
            for (let t = 0; t < i.length; t++) e = e.concat(this.roleResArr[i[t] - 1].getUrlArr());
            return e;
        }
        static getRobotsUrlArr() {
            return [ rt.path + "3d/LayaScene_robots/Conventional/cop_.lh", rt.path + "3d/LayaScene_robots/Conventional/girl_.lh", rt.path + "3d/LayaScene_robots/Conventional/man1_.lh", rt.path + "3d/LayaScene_robots/Conventional/man2_.lh", rt.path + "3d/LayaScene_robots/Conventional/man3_.lh", rt.path + "3d/LayaScene_robots/Conventional/man4_.lh", rt.path + "3d/LayaScene_robots/Conventional/soldier_.lh", rt.path + "3d/LayaScene_robots/Conventional/woman_.lh", rt.path + "3d/LayaScene_robots/Conventional/ak74.lh", rt.path + "3d/LayaScene_robots/Conventional/m4a1.lh" ];
        }
        static getRobotUrlByName(t) {
            return rt.path + "3d/LayaScene_robots/Conventional/" + t + "_.lh";
        }
        static getGunUrlByName(t) {
            return rt.path + "3d/LayaScene_robots/Conventional/" + t + ".lh";
        }
        static getCarUrlArr() {
            return [ rt.path + "3d/LayaScene_cars/Conventional/car_dgnc.lh", rt.path + "3d/LayaScene_cars/Conventional/car_tank.lh", rt.path + "3d/LayaScene_cars/Conventional/Car1.lh", rt.path + "3d/LayaScene_cars/Conventional/Car3.lh", rt.path + "3d/LayaScene_cars/Conventional/Car9.lh", rt.path + "3d/LayaScene_cars/Conventional/Car10.lh", rt.path + "3d/LayaScene_cars/Conventional/Police.lh" ];
        }
        static getCarScaleArr() {
            return [ 30, 40, 120, 120, 120, 120, 120 ];
        }
        static getCarUrlByType(t) {
            return this.getCarUrlArr()[t];
        }
        static getCarScaleByType(t) {
            return this.getCarScaleArr()[t];
        }
        static getRobotDataByType(t) {
            return this.robotDataArr[[ "cop", "girl", "man1", "man2", "man3", "man4", "soldier", "woman" ].indexOf(t)];
        }
        static getVehicleDataByType(t) {
            return this.vehicleDataArr[t];
        }
        static getEffUrlArr() {
            return [ rt.path + "3d/LayaScene_effects/Conventional/baozha.lh", rt.path + "3d/LayaScene_effects/Conventional/dilie.lh", rt.path + "3d/LayaScene_effects/Conventional/kaihuo.lh", rt.path + "3d/LayaScene_effects/Conventional/shouji.lh", rt.path + "3d/LayaScene_task/Conventional/task.lh", rt.path + "3d/LayaScene_effects/Conventional/rebleeding.lh" ];
        }
        static getEffUrl(t) {
            return this.getEffUrlArr()[t];
        }
    }
    Gt.starDataArr = [], Gt.robotDataArr = [], Gt.vehicleDataArr = [], Gt.roleDataArr = [], 
    Gt.roleLevelDataArr = [], Gt.feedermissionDataArr = [], Gt.roleResConfig = [ {
        id: 1,
        roleUrl: "3d/LayaScene_roles/Conventional/bai.lh",
        carUrl: "3d/LayaScene_roles/Conventional/car_bai.lh",
        bianshenUrl: "3d/LayaScene_roles/Conventional/bianshen_bai.lh"
    }, {
        id: 1,
        roleUrl: "3d/LayaScene_roles/Conventional/red.lh",
        carUrl: "3d/LayaScene_roles/Conventional/car_red.lh",
        bianshenUrl: "3d/LayaScene_roles/Conventional/bianshen_red.lh"
    }, {
        id: 1,
        roleUrl: "3d/LayaScene_roles/Conventional/yellow.lh",
        carUrl: "3d/LayaScene_roles/Conventional/car_yellow.lh",
        bianshenUrl: "3d/LayaScene_roles/Conventional/bianshen_yellow.lh"
    }, {
        id: 1,
        roleUrl: "3d/LayaScene_roles/Conventional/blue.lh",
        carUrl: "3d/LayaScene_roles/Conventional/car_blue.lh",
        bianshenUrl: "3d/LayaScene_roles/Conventional/bianshen_blue.lh"
    } ], Gt.roleResArr = [], Gt.serviceUrl = "https://xcx.youletd.com/file/wechat/jjbxzcmn/v100/", 
    Gt.sceneUrl = "3d/LayaScene_Main/Conventional/CJ1.lh", Gt.lingjianUrl = "3d/LayaScene_cars/Conventional/b_lingjian.lh", 
    Gt.EFF_BAOZHA = 0, Gt.EFF_DILIE = 1, Gt.EFF_KAIHUO = 2, Gt.EFF_SHOUJI = 3, Gt.EFF_TASK = 4, 
    Gt.EFF_REBLEEDING = 5;
    class Xt {
        constructor(t) {
            this.moveCenterX = 0, this.moveCenterY = 0, this.moveCenterRaidus = 197, this.preRotateX = 0, 
            this.preRotateY = 0, this.moveTouchId = -1, this.rotateTouchId = -1, this.gameUI = t;
        }
        enable() {
            this.gameUI.moveItem.pos(this.moveCenterRaidus, this.moveCenterRaidus), this.moveTouchId = -1, 
            this.rotateTouchId = -1, Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), 
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.stage.on(Laya.Event.ROLL_OUT, this, this.onMouseUp), 
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
        }
        onKeyDown(t) {
            this.checkKeyBoardHandler();
        }
        onKeyUp(t) {
            this.checkKeyBoardHandler();
        }
        checkKeyBoardHandler() {
            let t = 0, e = 0;
            var i;
            Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.A) && Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.D) || (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.A) ? t = -1 : Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.D) && (t = 1)), 
            Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.W) && Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.S) || (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.W) ? e = -1 : Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.S) && (e = 1)), 
            0 == t && 0 == e ? this.moveCallbackHandler(0, 0) : (i = Math.atan2(e, t), this.moveCallbackHandler(this.moveCenterRaidus, i)), 
            Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.SPACE) && this.spaceCallbackHandler && this.spaceCallbackHandler();
        }
        setControlCallback(t, e, i = null) {
            this.moveCallbackHandler = t, this.rotateCallbackHandler = e, this.spaceCallbackHandler = i;
        }
        disEnable() {
            this.moveTouchId = -1, this.rotateTouchId = -1, this.resetMoveItem(), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), 
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.stage.off(Laya.Event.ROLL_OUT, this, this.onMouseUp), 
            Laya.stage.off(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.off(Laya.Event.KEY_UP, this, this.onKeyUp);
        }
        resetMoveItem() {
            Laya.Tween.to(this.gameUI.moveItem, {
                x: this.moveCenterRaidus,
                y: this.moveCenterRaidus
            }, 150, Laya.Ease.linearNone);
        }
        onMouseDown(t) {
            -1 == this.moveTouchId && this.isInMoveRect(Laya.stage.mouseX, Laya.stage.mouseY) ? (this.moveTouchId = t.touchId, 
            this.moveCenterX = Laya.stage.mouseX, this.moveCenterY = Laya.stage.mouseY) : -1 == this.rotateTouchId && this.isInRotateRect(Laya.stage.mouseX, Laya.stage.mouseY) && (this.rotateTouchId = t.touchId, 
            this.preRotateX = Laya.stage.mouseX, this.preRotateY = Laya.stage.mouseY);
        }
        onMouseMove(t) {
            var e, i, a;
            -1 != this.moveTouchId && t.touchId == this.moveTouchId ? (a = Laya.stage.mouseX - this.moveCenterX, 
            e = Laya.stage.mouseY - this.moveCenterY, i = Math.min(this.moveCenterRaidus, Math.sqrt(a * a + e * e)), 
            a = Math.atan2(e, a), this.gameUI.moveItem.x = this.moveCenterRaidus + i * Math.cos(a), 
            this.gameUI.moveItem.y = this.moveCenterRaidus + i * Math.sin(a), this.moveCallbackHandler(i, a)) : -1 != this.rotateTouchId && t.touchId == this.rotateTouchId && (a = Laya.stage.mouseX - this.preRotateX, 
            t = Laya.stage.mouseY - this.preRotateY, this.rotateCallbackHandler(a, t), this.preRotateX = Laya.stage.mouseX, 
            this.preRotateY = Laya.stage.mouseY);
        }
        onMouseUp(t) {
            -1 != this.moveTouchId && t.touchId == this.moveTouchId ? (this.moveTouchId = -1, 
            this.moveCallbackHandler(0, 0), this.resetMoveItem()) : -1 != this.rotateTouchId && t.touchId == this.rotateTouchId && (this.rotateTouchId = -1);
        }
        isInMoveRect(t, e) {
            let i = new Laya.Rectangle(0, .5 * Laya.stage.height, +Laya.stage.width / 3, .5 * Laya.stage.height);
            return i.contains(t, e);
        }
        isInRotateRect(t, e) {
            return !this.isInMoveRect(t, e);
        }
        dispose() {
            this.disEnable(), this.moveCallbackHandler = null, this.rotateCallbackHandler = null, 
            this.spaceCallbackHandler = null, this.gameUI = null;
        }
    }
    class Kt extends Laya.Sprite3D {
        constructor(t) {
            super(), this.cameraParams = {
                rotX: 0,
                rotY: 0
            }, this.lookAtAngle = -Math.PI / 2, this.lookAtDist = 6, this.speed = 0, this.targetSpeed = 0, 
            this.angle = 0, this.isFollowerPath = !1, this.animations = {}, this.curAniName = "stand", 
            this.isRun = !1, this.isCar = !1, this.isJump = !1, this.gravity = -.035, this.isInCar = !1, 
            this.attackAniArr = [ "attack1", "attack2", "attack3" ], this.attackAniId = 0, this.isBianshening = !1, 
            this.roleId = "", this.starNum = 0, this.totalBlood = 100, this.curBlood = 100, 
            this.power = 20, this.isGameOver = !1, this.wheelArr = [], this.camera = t, this.initRole(), 
            this.initAnimation(), this.initControl();
        }
        initRole() {
            this.hitVelocity = new Laya.Vector3();
            var t = Gt.roleResArr[Zt.roleId - 1];
            this.bianshenItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + t.bianshenUrl)), 
            this.roleItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + t.roleUrl));
            let e = b.findAMesh(this.roleItem, "sword");
            e && (e.active = !1), this.carItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + t.carUrl)), 
            this.addChild(this.roleItem), this.addChild(this.bianshenItem), this.addChild(this.carItem), 
            this.roleItem.transform.localPosition = new Laya.Vector3(), this.carItem.transform.localPosition = new Laya.Vector3(), 
            this.bianshenItem.transform.localPosition = new Laya.Vector3(0, 0, 0);
            t = 1.5;
            this.roleItem.transform.localScale = new Laya.Vector3(.05 * t, .05 * t, .05 * t), 
            this.bianshenItem.transform.localScale = new Laya.Vector3(75, 75, 75);
            this.carItem.transform.localScale = new Laya.Vector3(75 * 1.36, 75 * 1.36, 75 * 1.36), 
            this.bianshenItem.active = !1, this.carItem.active = !1, this.mapFlag = new J(new Laya.Image("images/game/6-guan01.png"), this, this.roleItem), 
            this.mapFlag.icon.anchorX = this.mapFlag.icon.anchorY = .5, this.mapFlag.isMainRole = !0, 
            this.mapFlag.allwaysUpdate = !0;
            t = Gt.roleDataArr[Zt.roleId - 1];
            this.totalBlood = this.curBlood = t.blood, this.power = t.attack, this.wheelArr = [], 
            this.setWheelArr();
        }
        setWheelArr() {
            if (1 == Zt.roleId) for (let t = 0; t < this.carItem.getChildByName("wheel").numChildren; t++) this.wheelArr.push(this.carItem.getChildByName("wheel").getChildAt(t)); else this.wheelArr = b.findMeshArr(this.carItem, [], "wheel", !0);
        }
        initControl() {
            this.cameraParams.rotY = 90 - this.lookAtAngle / Math.PI * 180, this.cameraParams.rotX = Math.max(-90, Math.min(90, this.cameraParams.rotX));
            let t = new Xt(_t.getView(_t.GAME_VIEW).getUIView());
            this.userControl = t, t.enable(), t.setControlCallback((t, e) => {
                if (!this.isFollowerPath && !this.isGameOver && _t.getTopViewType([]) == _t.GAME_VIEW) {
                    if (this.isInCar) return 0 == t ? A.stopSound(w.ENGINE) : 0 == this.targetSpeed && (0 < t ? A.playSound(w.CAR_BACK) : A.playSound(w.CAR_FORWARD), 
                    A.playSound(w.ENGINE, 1e4)), this.targetSpeed = 5e-4 * t, void (0 != t && (this.angle = e));
                    this.angle = e;
                    e = this.speed;
                    this.speed = 5e-4 * t, 0 == t ? (A.stopSound(w.WALK), A.stopSound(w.RUN)) : 0 == e && (this.isRun ? A.playSound(w.RUN, 1e4) : A.playSound(w.WALK, 1e4)), 
                    0 != t && (this.roleItem.transform.localRotationEulerY = this.cameraParams.rotY + 90 - this.angle / Math.PI * 180, 
                    this.carItem.transform.localRotationEulerY = this.bianshenItem.transform.localRotationEulerY = this.roleItem.transform.localRotationEulerY), 
                    this.playMoveAnimation();
                }
            }, (t, e) => {
                _t.getTopViewType([]) == _t.GAME_VIEW && (this.isInCar || (this.lookAtAngle += .1 * t / 180 * Math.PI, 
                this.cameraParams.rotY = 90 - this.lookAtAngle / Math.PI * 180, this.cameraParams.rotX -= .1 * e, 
                this.cameraParams.rotX = Math.max(-90, Math.min(90, this.cameraParams.rotX))));
            }, () => {
                _t.getTopViewType([]) == _t.GAME_VIEW && this.jump();
            });
        }
        destroyCurRoleAni() {
            for (var t in this.animations) at.clearAnimator(this.animations[t]), delete this.animations[t];
        }
        changeSkin() {
            console.log("用户更改了皮肤！"), this.destroyCurRoleAni();
            var t = this.roleItem.active, e = this.carItem.active, i = this.bianshenItem.active;
            this.roleItem.destroy(!0), this.carItem.destroy(!0), this.bianshenItem.destroy(!0);
            var a = Gt.roleResArr[Zt.roleId - 1];
            this.bianshenItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + a.bianshenUrl)), 
            this.roleItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + a.roleUrl));
            let s = b.findAMesh(this.roleItem, "sword");
            s && (s.active = !1), this.carItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + a.carUrl)), 
            this.addChild(this.roleItem), this.addChild(this.bianshenItem), this.addChild(this.carItem), 
            this.roleItem.transform.localPosition = new Laya.Vector3(), this.carItem.transform.localPosition = new Laya.Vector3(), 
            this.bianshenItem.transform.localPosition = new Laya.Vector3(0, 0, 0);
            a = 1.5;
            this.roleItem.transform.localScale = new Laya.Vector3(.05 * a, .05 * a, .05 * a), 
            this.bianshenItem.transform.localScale = new Laya.Vector3(75, 75, 75);
            this.carItem.transform.localScale = new Laya.Vector3(75 * 1.36, 75 * 1.36, 75 * 1.36), 
            (this.mapFlag.owner = this).mapFlag.rot = this.roleItem;
            a = Gt.roleDataArr[Zt.roleId - 1];
            this.totalBlood = a.blood, this.curBlood = Math.min(this.curBlood, this.totalBlood), 
            this.power = a.attack, this.initAnimation(), this.roleItem.active = t, this.carItem.active = e, 
            this.bianshenItem.active = i, this.playAnimation(this.curAniName), this.wheelArr = [], 
            this.setWheelArr();
        }
        setIsRun(t) {
            this.isRun = t, this.playMoveAnimation();
        }
        playMoveAnimation(t = !1) {
            (this.isAllowPlayRunWalkAni() || t) && (0 == this.speed ? this.playAnimation("stand") : (t = this.isRun ? "run" : "walk", 
            this.playAnimation(t, !0)));
        }
        isAllowPlayRunWalkAni() {
            return "stand" == this.curAniName || "walk" == this.curAniName || "run" == this.curAniName;
        }
        jump() {
            this.isAllowPlayRunWalkAni() && (this.playAnimation("jump"), this.isJump = !0, this.vy = 1);
        }
        kick() {
            this.isAllowPlayRunWalkAni() && (this.playAnimation("kick"), A.playSound(w.ATTACK));
        }
        zhongquan() {
            this.isAllowPlayRunWalkAni() && (this.playAnimation("zhongquan"), A.playSound(w.ZHONGQUAN));
        }
        attack() {
            this.isAllowPlayRunWalkAni() && (A.playSound(w.ATTACK), this.playAnimation(this.attackAniArr[this.attackAniId]), 
            this.attackAniId++, this.attackAniId >= this.attackAniArr.length && (this.attackAniId = 0));
        }
        bianshen() {
            (this.isCar || this.isAllowPlayRunWalkAni()) && (this.isBianshening || (this.stopLoopSound(), 
            A.playSound(w.BIANSHEN), this.isBianshening = !0, this.isInCar = !1, this.isCar = !this.isCar, 
            this.carItem.active = !1, this.bianshenItem.active = !0, this.roleItem.active = !1, 
            this.isCar ? this.playAnimation("bianshenCar") : this.playAnimation("bianshenRole")));
        }
        shoot() {}
        fullBlood() {
            this.curBlood = this.totalBlood, s.event("blood_change", []);
        }
        initAnimation() {
            var t = this.roleItem.getComponent(Laya.Animator), e = this.bianshenItem.getComponent(Laya.Animator);
            this.animations = {
                stand: new st("walk", t, 30),
                walk: new st("walk", t, 45),
                run: new st("run", t, 35),
                jump: new st("jump", t, 60),
                kick: new st("kick", t, 20),
                zhongquan: new st("attack4", t, 30),
                attack1: new st("attack1", t, 30),
                attack2: new st("attack2", t, 30),
                attack3: new st("attack3", t, 30),
                bianshenCar: new st("", e, 60),
                bianshenRole: new st("", e, 60),
                shouji: new st("hit", t, 10),
                fail: new st("fail", t, 30)
            }, this.addFrameCallback("kick", 20, () => {
                this.playMoveAnimation(!0);
            }), this.addFrameCallback("kick", 10, () => {
                Zt.gta.userAttack(this, "kick");
            }), this.addFrameCallback("zhongquan", 30, () => {
                this.playMoveAnimation(!0);
            }), this.addFrameCallback("zhongquan", 18, () => {
                this.shake(), Zt.gta.userAttack(this, "zhongquan"), this.playEff(Gt.EFF_DILIE);
            }), this.addFrameCallback("fail", 30, () => {
                this.showReviveView();
            }), this.addFrameCallback("shouji", 10, () => {
                this.playMoveAnimation(!0);
            }), this.addFrameCallback("attack1", 30, () => {
                this.playMoveAnimation(!0);
            }), this.addFrameCallback("attack1", 12, () => {
                Zt.gta.userAttack(this, "attack1");
            }), this.addFrameCallback("attack2", 30, () => {
                this.playMoveAnimation(!0);
            }), this.addFrameCallback("attack2", 12, () => {
                Zt.gta.userAttack(this, "attack2");
            }), this.addFrameCallback("attack3", 30, () => {
                this.playMoveAnimation(!0);
            }), this.addFrameCallback("attack3", 12, () => {
                Zt.gta.userAttack(this, "attack3");
            }), this.animations.bianshenCar.isReverse = !0, this.addFrameCallback("bianshenCar", 0, () => {
                this.bianshenItem.active = !1, this.carItem.active = !0, this.isInCar = !0, this.isBianshening = !1, 
                this.speed = 0, this.targetSpeed = this.speed;
            }), this.addFrameCallback("bianshenRole", 60, () => {
                this.bianshenItem.active = !1, this.roleItem.active = !0, this.isBianshening = !1, 
                this.playMoveAnimation(!0), this.targetSpeed = this.speed;
            });
        }
        addFrameCallback(t, e, i) {
            this.animations[t].addFrameCallback(e, i);
        }
        isInMoveLogicAni() {
            return "run" == this.curAniName || "walk" == this.curAniName || "jump" == this.curAniName;
        }
        playAnimation(i, a = !1) {
            if (i != this.curAniName) {
                let t = this.animations[this.curAniName];
                t.stop(), at.removeAnimator(t), this.curAniName = i;
                let e = this.animations[i];
                at.add(e), "stand" == i ? e.gotoAndStop(5) : (i = e.isReverse ? e.totalFrames : 0, 
                e.play(i, a));
            }
        }
        update() {
            pt.isOpening || (this.updateRole(), this.updateCamera());
        }
        updateRole() {
            if (Zt.gta.checkUserHit(this), this.isInCar) this.speed += .02 * (this.targetSpeed - this.speed), 
            this.controlCar(), this.updateCarRotX(); else if (this.isInMoveLogicAni()) {
                if (!this.isFollowerPath) {
                    var t = this.isRun ? 4 * this.speed : this.speed, e = this.roleItem.transform.localRotationEulerY / 180 * Math.PI - Math.PI / 2, i = this.transform.localPositionX + t * Math.cos(e), a = this.transform.localPositionZ - t * Math.sin(e), s = y.getTerrainYValue(i, this.transform.localPositionY, a);
                    if (s - this.transform.localPositionY < .1 && (i = this.transform.localPositionX + this.hitVelocity.x, 
                    a = this.transform.localPositionZ + this.hitVelocity.z, this.hitVelocity.x *= .3, 
                    this.hitVelocity.z *= .3, y.canWalk("map1", i, a) && (this.transform.localPositionX = i, 
                    this.transform.localPositionZ = a), !y.walkTo(this, "map1", e, t) && !this.isJump)) return;
                }
                t = y.getTerrainY(this);
                this.isJump ? (this.vy += this.gravity, this.transform.localPositionY += this.vy, 
                this.transform.localPositionY < t && (this.isJump = !1, this.playMoveAnimation(!0), 
                this.transform.localPositionY = t, this.shake())) : this.transform.localPositionY = t;
            }
        }
        controlCar() {
            if (!(Math.abs(this.speed) <= 5e-4)) {
                var i = this.transform.localPositionX + this.hitVelocity.x, a = this.transform.localPositionZ + this.hitVelocity.z;
                this.hitVelocity.x *= .3, this.hitVelocity.z *= .3, y.canWalk("map1", i, a) && (this.transform.localPositionX = i, 
                this.transform.localPositionZ = a);
                var s = Math.cos(this.angle) * this.speed, r = Math.sin(this.angle) * this.speed;
                let t = 1;
                0 == this.targetSpeed && (t = 0);
                let e;
                var o = this.transform.localPositionY, i = this.transform.localPositionX, a = this.transform.localPositionZ;
                if (r > .03 * this.speed) {
                    if (this.roleItem.transform.localRotationEulerY += s / this.speed * t, e = this.roleItem.transform.localRotationEulerY / 180 * Math.PI + Math.PI / 2, 
                    this.carItem.transform.localRotationEulerY = this.bianshenItem.transform.localRotationEulerY = this.roleItem.transform.localRotationEulerY, 
                    !y.walkTo(this, "map1", e, 8 * Math.abs(r))) return;
                    for (let t = 0; t < this.wheelArr.length; t++) this.wheelArr[t].transform.localRotationEulerX -= 10;
                } else {
                    if (this.roleItem.transform.localRotationEulerY -= s / this.speed * t, e = this.roleItem.transform.localRotationEulerY / 180 * Math.PI - Math.PI / 2, 
                    this.carItem.transform.localRotationEulerY = this.bianshenItem.transform.localRotationEulerY = this.roleItem.transform.localRotationEulerY, 
                    !y.walkTo(this, "map1", e, 8 * Math.abs(r))) return;
                    for (let t = 0; t < this.wheelArr.length; t++) this.wheelArr[t].transform.localRotationEulerX += 10;
                }
                r = y.getTerrainY(this);
                if (this.lookAtAngle = -Math.PI / 2 - this.roleItem.transform.localRotationEulerY / 180 * Math.PI, 
                this.cameraParams.rotY = 90 - this.lookAtAngle / Math.PI * 180, this.cameraParams.rotX = -15, 
                .3 < r - o) return this.transform.localPositionX = i, void (this.transform.localPositionZ = a);
                this.transform.localPositionY = r;
            }
        }
        updateCamera(t = 0) {
            this.camera.transform.localRotationEulerX += .15 * (b.getAngle(this.camera.transform.localRotationEulerX, this.cameraParams.rotX) - this.camera.transform.localRotationEulerX), 
            this.camera.transform.localRotationEulerY += .15 * (b.getAngle(this.camera.transform.localRotationEulerY, this.cameraParams.rotY) - this.camera.transform.localRotationEulerY);
            var e = this.lookAtDist, i = this.transform.localPositionX + e * Math.cos(this.lookAtAngle), e = this.transform.localPositionZ + e * Math.sin(this.lookAtAngle);
            this.camera.transform.localPositionX += .3 * (i - this.camera.transform.localPositionX), 
            this.camera.transform.localPositionZ += .3 * (e - this.camera.transform.localPositionZ);
            e = Math.max(this.transform.localPositionY + 3, y.getTerrainY(this.camera) + 3);
            this.camera.transform.localPositionY = e, this.shaker && this.shaker.isUpdate && b.shakeObj(this.camera, .1);
        }
        initCamera() {
            this.camera.transform.localRotationEulerX = this.cameraParams.rotX, this.camera.transform.localRotationEulerY = this.cameraParams.rotY;
            var t = this.lookAtDist * (this.cameraParams.rotX + 90) / 90, e = this.transform.localPositionX + t * Math.cos(this.lookAtAngle), t = this.transform.localPositionZ + t * Math.sin(this.lookAtAngle);
            this.camera.transform.localPositionX = e, this.camera.transform.localPositionZ = t;
            t = Math.max(this.transform.localPositionY + 3, y.getTerrainY(this.camera) + 3);
            this.camera.transform.localPositionY = t;
        }
        shake() {
            this.shaker || (this.shaker = new R(10), this.shaker.addFrameCallback(10, () => {
                V.removeFramer(this.shaker);
            })), this.shaker.reset(), this.shaker.resume(), V.addFramer(this.shaker);
        }
        updateCarRotX() {
            var t = -(this.roleItem.transform.localRotationEulerY / 180 * Math.PI + Math.PI / 2), e = this.transform.localPositionX + -1 * Math.cos(t), i = this.transform.localPositionZ + -1 * Math.sin(t), a = this.transform.localPositionX + +Math.cos(t), s = this.transform.localPositionZ + +Math.sin(t), r = y.getTerrainYValue(e, 0, i) - y.getTerrainYValue(a, 0, s), o = e - a, n = i - s, h = Math.sqrt(o * o + n * n - r * r), e = Math.atan2(h, r);
            this.carItem.transform.localRotationEulerX = e / Math.PI * 180 - 90;
            a = this.transform.localPositionX + -1 * Math.cos(t + Math.PI / 2) * .5, i = this.transform.localPositionZ + -1 * Math.sin(t + Math.PI / 2) * .5, 
            s = this.transform.localPositionX + .5 * +Math.cos(t + Math.PI / 2), t = this.transform.localPositionZ + .5 * +Math.sin(t + Math.PI / 2), 
            r = y.getTerrainYValue(a, 0, i) - y.getTerrainYValue(s, 0, t), o = a - s, n = i - t, 
            h = Math.sqrt(o * o + n * n - r * r), e = Math.atan2(h, r);
            this.carItem.transform.localRotationEulerZ = e / Math.PI * 180 - 90;
        }
        applyHitVeclocity(t) {
            t.x *= 8 * this.speed, t.z *= 8 * this.speed, this.hitVelocity = t;
        }
        dispose() {
            for (var t in this.wheelArr = null, this.stopLoopSound(), this.mapFlag && (this.mapFlag.dispose(), 
            this.mapFlag = null), this.userControl.dispose(), this.userControl = null, this.roleItem.destroy(), 
            this.roleItem = null, this.bianshenItem.destroy(), this.bianshenItem = null, this.carItem.destroy(), 
            this.carItem = null, this.cameraParams = null, this.camera = null, this.animations) at.clearAnimator(this.animations[t]), 
            delete this.animations[t];
            this.animations = null, this.attackAniArr.length = 0, this.attackAniArr = null, 
            V.clear(this.shaker), this.shaker = null;
        }
        attackByRobot(t, e) {
            if ("fail" != this.curAniName && !this.isGameOver && _t.getTopViewType([]) == _t.GAME_VIEW && !pt.isOpening) {
                if (this.curBlood -= t.config.attack, this.curBlood = Math.max(0, this.curBlood), 
                s.event("blood_change", []), 0 == this.curBlood) return this.isGameOver = !0, this.stopLoopSound(), 
                void (this.isAllowPlayRunWalkAni() ? this.playAnimation("fail") : this.showReviveView());
                this.isAllowPlayRunWalkAni() && (this.playAnimation("shouji"), e == tt.ANI_ATTACK_GUN && A.playSound(w.SHOOT), 
                A.playSound(w.HURT));
            }
        }
        stopLoopSound() {
            A.stopSound(w.WALK), A.stopSound(w.RUN), A.stopSound(w.ENGINE);
        }
        showReviveView() {
            Zt.showCustomInterstitialAdView(() => {
                _t.showPopup(_t.REVIVIE_WINDOW);
            });
        }
        revive() {
            this.starNum = 0, this.isGameOver = !1, $.reset(), this.isCar || this.playMoveAnimation(!0), 
            this.curBlood = this.totalBlood, s.event("star_change", [ this.starNum ]), s.event("blood_change", []);
        }
        attackByCar(t) {
            "fail" != this.curAniName && (this.curBlood -= t.config.attack, this.curBlood = Math.max(0, this.curBlood), 
            s.event("blood_change", []), 0 != this.curBlood ? this.isAllowPlayRunWalkAni() && this.playAnimation("shouji") : this.isAllowPlayRunWalkAni() ? this.playAnimation("fail") : this.showReviveView());
        }
        playEff(t) {
            switch (t) {
              case Gt.EFF_DILIE:
                this.dilieEff || (this.dilieEff = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrlArr()[t])), 
                this.dilieEff.transform.localPositionY = .05, this.addChild(this.dilieEff)), this.dilieEff.active = !1, 
                this.dilieEff.active = !0;
                break;

              case Gt.EFF_BAOZHA:
            }
        }
    }
    class Ht {
        constructor(t) {
            if (this.speed = .6, this.angle = 0, this.wheelArr = [], this.wantToFindPath = !1, 
            this.gravity = -.03, this.resumeCheckStep = 0, this.inAttackStatus = !1, this.owner = t, 
            this.owner.config.type != zt.TYPE_TANK) {
                let e = this.owner.carItem.getChildByName("wheel");
                if (e) for (let t = 0; t < e.numChildren; t++) this.wheelArr.push(e.getChildAt(t));
            }
            this.pathFindTimer = V.addFramer(new R(180, 0, !0)), this.pathFindTimer.addFrameCallback(this.pathFindTimer.totalFrames, () => {
                this.findAPath();
            }), this.pathFollower = new B(this.owner, this.owner.carItem, .05), this.attackFramer = V.addFramer(new R(60, 0, !0)), 
            this.attackFramer.addFrameCallback(this.attackFramer.totalFrames, () => {
                this.inAttackStatus && this.seekingTarget && (Zt.gta.user.shake(), this.seekingTarget.attackByCar(this.owner));
            });
        }
        seekTarget(t) {
            this.seekingTarget != t && (this.seekingTarget = t);
        }
        update() {
            if (this.owner.isPaofei) {
                this.owner.paofeiVelocity.y += this.gravity;
                let t = this.owner.transform.localPositionX + this.owner.paofeiVelocity.x, e = this.owner.transform.localPositionZ + this.owner.paofeiVelocity.z;
                var a = y.getTerrainYValue(t, 0, e);
                let i = this.owner.transform.localPositionY + this.owner.paofeiVelocity.y;
                return i < a && (i = a, this.owner.paofeiVelocity.y *= -.8, Math.abs(this.owner.paofeiVelocity.y) < .06 && (this.owner.isPaofei = !1)), 
                y.canWalk("map1", t, e) || (t = this.owner.transform.localPositionX, e = this.owner.transform.localPositionZ), 
                void (this.owner.transform.localPosition = new Laya.Vector3(t, i, e));
            }
            var t;
            if (!this.owner.isNoBody) return this.follower && !this.seekingTarget ? (this.follower.update(), 
            this.rotateWheels(), void this.updateCarRotX()) : void (this.seekingTarget ? (t = this.seekingTarget.transform.localPositionX - this.owner.transform.localPositionX, 
            a = this.seekingTarget.transform.localPositionZ - this.owner.transform.localPositionZ, 
            Math.sqrt(t * t + a * a) < this.getMyAttackDist() ? (this.pathFindTimer.pause(), 
            this.angle = Math.atan2(a, t), this.owner.carItem.transform.localRotationEulerY = 90 - this.angle / Math.PI * 180, 
            this.wantToFindPath = !1, this.updateCarRotX(), this.owner.config.type == zt.TYPE_TANK ? (this.inAttackStatus = !0, 
            this.owner.showKaihuoEff()) : (this.owner.isNoBody = !0, Zt.gta.createSeekMan(this.owner, this.getManType(), this.seekingTarget), 
            A.stopSound(w.POLICE)), this.resumeCheckStep = 0, this.pathFollower.setPathArr([])) : (this.inAttackStatus = !1, 
            this.owner.hideKaihuoEff(), this.pathFindTimer.resume(), this.pathFollower.update(), 
            this.wantToFindPath = !0, this.updateCarRotX()), this.rotateWheels()) : (this.inAttackStatus = !1, 
            this.pathFollower.speed = this.speed, this.pathFindTimer.resume(), this.pathFollower.update(), 
            this.updateCarRotX()));
        }
        baoCar() {
            this.owner.setIsRender(!1), A.playSound(w.EXPLOSION), Zt.addExperience(Gt.getVehicleDataByType(this.owner.config.type).experience), 
            $.addScore(Gt.getVehicleDataByType(this.owner.config.type).score);
            let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrlArr()[Gt.EFF_BAOZHA]));
            this.owner.parent.addChild(t), t.transform.localScale = new Laya.Vector3(10, 10, 10), 
            t.transform.position = this.owner.transform.position.clone(), t.transform.localPositionY += .25, 
            t.active = !1, t.active = !0, Laya.timer.once(1500, this, () => {
                t.destroy(!0);
            });
        }
        getManType() {
            let t = "";
            switch (this.owner.config.type) {
              case zt.TYPE_POLICE:
                t = tt.TYPE_COP;
                break;

              case zt.TYPE_ZHUANGJIA:
                t = tt.TYPE_SOLDIER;
            }
            return t;
        }
        findAPath() {
            if (this.seekingTarget) {
                if (this.wantToFindPath) {
                    this.pathFinder && (this.pathFinder.dispose(), this.pathFinder = null);
                    let t = N.getRectByTwoPoints(new Laya.Point(this.owner.transform.localPositionX, this.owner.transform.localPositionZ), new Laya.Point(this.seekingTarget.transform.localPositionX, this.seekingTarget.transform.localPositionZ));
                    t.x -= 10, t.y -= 10, t.width += 20, t.height += 20, this.pathFinder = N.createPathFinder("map1", new O(t.x, t.y, t.width, t.height, 20, 20));
                    var e = this.pathFinder.findPathByPosition(this.owner.transform.localPositionX, this.owner.transform.localPositionZ, this.seekingTarget.transform.localPositionX, this.seekingTarget.transform.localPositionZ);
                    e ? (e = N.getPathPointArrByGridArr(e, this.pathFinder), this.pathFollower.setPathArr(e), 
                    this.pathFollower.speed = 4 * this.speed) : this.pathFollower.status == B.STOP && this.wander(), 
                    this.pathFinder.dispose(), this.pathFinder = null;
                }
            } else this.wander();
        }
        wander() {
            this.pathFollower.speed = this.speed;
            let t = [];
            t.push(new Laya.Point(this.owner.transform.localPositionX, this.owner.transform.localPositionZ));
            var e = 2 * Math.PI * Math.random(), i = 20 + 20 * Math.random();
            t.push(new Laya.Point(this.owner.transform.localPositionX + i * Math.cos(e), this.owner.transform.localPositionZ + i * Math.sin(e))), 
            y.checkIsDirToPos("map1", t[0].x, t[0].y, t[1].x, t[1].y) && this.pathFollower.setPathArr(t);
        }
        pause() {
            Laya.timer.clear(this, this.resume), (this.follower || this.pathFollower).pause(), 
            Laya.timer.once(3e3, this, this.resume);
        }
        resume() {
            (this.follower || this.pathFollower).resume();
        }
        getMySeekDist() {
            return 100;
        }
        getMyAttackDist() {
            return this.owner.config.type == zt.TYPE_TANK ? 40 : 20;
        }
        rotateWheels() {
            for (let t = 0; t < this.wheelArr.length; t++) this.wheelArr[t].transform.localRotationEulerX += 10;
        }
        dispose() {
            Laya.timer.clear(this, this.resume), this.attackFramer = null, this.wheelArr.length = 0, 
            this.wheelArr = null, this.follower && (this.follower.dispose(), this.follower = null), 
            this.pathFinder && (this.pathFinder.dispose(), this.pathFinder = null), this.pathFollower && (this.pathFollower.dispose(), 
            this.pathFollower = null), this.seekingTarget = null, this.owner = null;
        }
        setRolePath(t) {
            this.follower || (this.follower = new B(this.owner, this.owner.carItem, this.speed, !0)), 
            this.follower.setPathArr(t);
            t = this.follower.createRandomPoint();
            this.owner.transform.localPositionX = t.x, this.owner.transform.localPositionZ = t.y;
        }
        clear() {
            this.pathFollower.setPathArr([]), this.wantToFindPath = !1, this.inAttackStatus = !1, 
            this.owner.isPaofei = !1, this.owner.isNoBody = !1;
        }
        updateCarRotX() {
            var t = -(this.owner.carItem.transform.localRotationEulerY / 180 * Math.PI + Math.PI / 2), e = this.owner.transform.localPositionX + -1 * Math.cos(t), i = this.owner.transform.localPositionZ + -1 * Math.sin(t), a = this.owner.transform.localPositionX + +Math.cos(t), s = this.owner.transform.localPositionZ + +Math.sin(t), r = y.getTerrainYValue(e, 0, i) - y.getTerrainYValue(a, 0, s), o = e - a, n = i - s, h = Math.sqrt(o * o + n * n - r * r), e = Math.atan2(h, r);
            this.owner.carItem.transform.localRotationEulerX = e / Math.PI * 180 - 90;
            a = this.owner.transform.localPositionX + -1 * Math.cos(t + Math.PI / 2) * .5, i = this.owner.transform.localPositionZ + -1 * Math.sin(t + Math.PI / 2) * .5, 
            s = this.owner.transform.localPositionX + .5 * +Math.cos(t + Math.PI / 2), t = this.owner.transform.localPositionZ + .5 * +Math.sin(t + Math.PI / 2), 
            r = y.getTerrainYValue(a, 0, i) - y.getTerrainYValue(s, 0, t), o = a - s, n = i - t, 
            h = Math.sqrt(o * o + n * n - r * r), e = Math.atan2(h, r);
            this.owner.carItem.transform.localRotationEulerZ = e / Math.PI * 180 - 90;
        }
    }
    class zt extends Laya.Sprite3D {
        constructor(t) {
            super(), this.isInRenderView = !0, this.carId = "", this.isPaofei = !1, this.radius = 1, 
            this.isNoBody = !1, this.config = t, this.blood = t.blood, this.attack = t.attack, 
            this.initCar();
        }
        initCar() {
            this.carItem = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getCarUrlByType(this.config.type))), 
            b.cloneMaterial(this.carItem), this.addChild(this.carItem), this.carItem.transform.localPosition = new Laya.Vector3(), 
            this.carControl = new Ht(this);
            var t = .936 * Gt.getCarScaleByType(this.config.type);
            if (this.carItem.transform.localScale = new Laya.Vector3(t, t, t), b.cloneMaterial(this.carItem), 
            this.config.type == zt.TYPE_TANK) {
                this.kaihuoEff = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrlArr()[Gt.EFF_KAIHUO]));
                let t = b.findAMesh(this.carItem, "paokou");
                t.addChild(this.kaihuoEff), this.kaihuoEff.transform.localPosition = new Laya.Vector3(0, 0, 0);
                let e = this.kaihuoEff.getChildAt(0);
                e.particleSystem.startSizeConstantMax = 16, e.particleSystem.startSizeConstant = 16, 
                this.kaihuoEff.active = !1;
            }
        }
        showKaihuoEff() {
            this.kaihuoEff && (this.kaihuoEff.active = !0);
        }
        hideKaihuoEff() {
            this.kaihuoEff && (this.kaihuoEff.active = !1);
        }
        update() {
            this.isInRenderView && this.carControl.update();
        }
        setIsRender(t) {
            !this.isInRenderView && t && this.config.type == zt.TYPE_POLICE && A.playSound(w.POLICE), 
            this.isInRenderView = t, this.active = t, this.isInRenderView && (this.blood = this.config.blood, 
            this.carControl.clear());
        }
        dispose() {
            this.kaihuoEff && this.kaihuoEff.destroy(), this.kaihuoEff = null, A.stopSound(w.POLICE), 
            this.carControl.dispose(), this.carItem.destroy(), this.carControl = null, this.carItem = null;
        }
        attackByUser(t, e) {
            0 != this.blood && ("kick" != e && "zhongquan" != e || (e = new Laya.Vector3(), 
            Laya.Vector3.subtract(this.transform.localPosition, t.transform.localPosition, e), 
            Laya.Vector3.normalize(e, e), this.paofei(e), this.blood -= t.power, this.blood = Math.max(0, this.blood), 
            $.attack(), 0 == this.blood && this.carControl.baoCar()));
        }
        paofei(t) {
            t.y = .36, t.x *= .1, t.z *= .1, this.paofeiVelocity = t, this.isPaofei = !0;
        }
        pause() {
            this.carControl.pause();
        }
    }
    zt.TYPE_ZHUANGJIA = 0, zt.TYPE_TANK = 1, zt.TYPE_CAR1 = 2, zt.TYPE_CAR2 = 3, zt.TYPE_CAR3 = 4, 
    zt.TYPE_CAR4 = 5, zt.TYPE_POLICE = 6, zt.TYPE_PLANE = 7;
    class jt {
        constructor() {
            this.carArr = [], this.robotArr = [], this.roadArr = [], this.npcArr = [], this.taskArr = [], 
            this.xuebaoArr = [], this.xuebaoRefleshFrame = 7200, this.curXuebaoRefleshFrame = 0, 
            this.feederTaskList = [], this.feederTaskNpcPos = [], this.npcCheckFrameNum = 12, 
            this.curNpcCheckFrame = 12, this.curFeederTask = null, this.preHitTime = 0, this.hitLimitTime = 1e3, 
            this.init3DParams(), this.initGame(), p.gameStart();
        }
        init3DParams() {
            this.scene = _t.instance.rootContainer.addChild(new Laya.Scene3D()), this.camera = this.scene.addChild(new Laya.Camera(0, 1, 250)), 
            this.camera.transform.localPosition = new Laya.Vector3(0, 3, 3), this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
            let t = this.scene.addChild(new Laya.DirectionLight());
            t.transform.worldMatrix.setForward(new Laya.Vector3(-1, 1, -1)), t.color = new Laya.Vector3(1, 1, 1), 
            t.intensity = 1.2, this.scene.ambientColor = new Laya.Vector3(1, 1, 1), this.scene.enableLight = !0;
            let e = this.scene.addChild(new Laya.PointLight());
            e.color = new Laya.Vector3(1, 1, 1), e.transform.localPositionY = 100, e.range = 1200, 
            e.intensity = .5, this.createSky(Math.floor(1 + 10 * Math.random())), this.createWater();
        }
        initGame() {
            $.reset();
            let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(rt.path + Gt.sceneUrl));
            this.scene.addChild(t), t.transform.localScale = new Laya.Vector3(y.mapScale, y.mapScale, y.mapScale), 
            this.cj = t;
            let r = Gt.getBuildingNameArr();
            for (let s = 0; s < r.length; s++) {
                let a = b.getObj("spot.building." + r[s], t);
                if (a) for (let i = 0; i < a.numChildren; i++) {
                    let t = a.getChildAt(i), e = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getGameObjUrlByName(r[s])));
                    t.addChild(e), e.transform.localPosition = new Laya.Vector3();
                }
            }
            r = Gt.getOtherItemNameArr();
            for (let s = 0; s < r.length; s++) {
                let a = b.getObj("spot." + r[s], t);
                if (a) for (let i = 0; i < a.numChildren; i++) {
                    let t = a.getChildAt(i), e = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getGameObjUrlByName(r[s])));
                    t.addChild(e), e.transform.localPosition = new Laya.Vector3();
                }
            }
            let e = b.findMeshArr(t, [], "collider", !0);
            for (let t = 0; t < e.length; t++) e[t].active = !1;
            Laya.StaticBatchManager.combine(this.cj), this.createXuebao(), this.createRoad(), 
            this.createMainRole(), this.createNPCAndTaskList(), this.createRobotRole(), this.createCars(), 
            this.miniMap = new lt(rt.path + "3d/map/map1/mini1.png", 284, 284, 1024, 1024), 
            this.miniMap.isLookAtMainRole = !0, _t.getView(_t.GAME_VIEW).addMiniMap(this.miniMap);
            for (let t = 0; t < this.npcArr.length; t++) this.miniMap.addFlag(this.npcArr[t].mapFlag);
            this.miniMap.addFlag(this.user.mapFlag), this.positionFramer = V.addFramer(new R(180, 0, !0)), 
            this.positionFramer.addFrameCallback(this.positionFramer.totalFrames, () => {
                this.checkObjPositions();
            }), Laya.timer.frameLoop(1, this, this.update), at.enable(), V.enable();
        }
        testDemoBoxToContainer(a, s, t) {
            let r = b.findMeshArr(t, [], "collider", !0);
            for (let i = 0; i < r.length; i++) {
                var o = 2 * r[i].meshFilter.sharedMesh.bounds.getExtent().x * s.transform.localScaleX, n = 2 * r[i].meshFilter.sharedMesh.bounds.getExtent().z * s.transform.localScaleZ;
                let t = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(o, 100, n));
                t.transform.localRotationEulerY = s.transform.localRotationEulerY, t.transform.position = s.transform.position.clone(), 
                a.addChild(t);
                let e = new Laya.PBRStandardMaterial();
                e.renderMode = Laya.PBRStandardMaterial.RENDERMODE_FADE, e.albedoColorA = .75, t.meshRenderer.material = e;
            }
        }
        createMaxMap() {
            let a = new lt(rt.path + "3d/map/map1/mini1.png", 854, 972, 1920, 1920);
            a.isLookAtMainRole = !0;
            for (let t = 0; t < this.npcArr.length; t++) {
                var e = new J(new Laya.Image("images/game/0" + (t + 1) + ".png"), this.npcArr[t]);
                a.addFlag(e);
            }
            if (this.curFeederTask) {
                var s = this.curFeederTask.taskId;
                Gt.feedermissionDataArr[s - 1];
                let t = new Laya.Image("images/game/tishi01.png");
                t.anchorX = t.anchorY = .5;
                let e = new Laya.Sprite3D();
                this.scene.addChild(e), this.curFeederTask.taskId != H.XUNLUO || this.curFeederTask.isPassStartPos ? e.transform.localPosition = this.curFeederTask.targetPos.clone() : e.transform.localPosition = this.curFeederTask.startPos.clone();
                let i = new J(t, e);
                i.allwaysShow = !0, i.isOwnerDestroyAbled = !0, a.addFlag(i);
            }
            let t = new J(new Laya.Image("images/maxmap/danqian.png"), this.user, this.user.roleItem);
            return t.icon.scale(.7, .7), t.isMainRole = !0, t.allwaysUpdate = !0, a.addFlag(t), 
            a;
        }
        createNPCAndTaskList() {
            let s = new Laya.Sprite3D();
            this.scene.addChild(s);
            let e = b.getObj("spot.building.renwu.xunluo", this.cj), t = e.getChildByName("task01");
            s.transform.position = t.transform.position.clone();
            let r = s.transform.localPosition.clone();
            this.feederTaskNpcPos.push(r);
            for (let t = 0; t < e.numChildren; t++) {
                let a = e.getChildAt(t);
                if ("task01" != a.name) {
                    let t = a.getChildByName("qi"), e = a.getChildByName("zhong"), i = new H();
                    i.taskId = H.XUNLUO, s.transform.position = t.transform.position.clone(), i.startPos = s.transform.localPosition.clone(), 
                    s.transform.position = e.transform.position.clone(), i.targetPos = s.transform.localPosition.clone(), 
                    i.npcPos = r.clone(), this.taskArr.push(i);
                }
            }
            let a = b.getObj("spot.building.renwu.zaike", this.cj);
            t = a.getChildByName("task02"), s.transform.position = t.transform.position.clone(), 
            r = s.transform.localPosition.clone(), this.feederTaskNpcPos.push(r);
            for (let t = 0; t < a.numChildren; t++) {
                let i = a.getChildAt(t);
                if ("task02" != i.name) {
                    let t = i.getChildByName("zhong");
                    s.transform.position = t.transform.position.clone();
                    let e = new H();
                    e.npcPos = r.clone(), e.startPos = r.clone(), e.targetPos = s.transform.localPosition.clone(), 
                    e.taskId = H.ZAIKE, this.taskArr.push(e);
                }
            }
            let o = b.getObj("spot.building.renwu.shaoheichue", this.cj);
            t = o.getChildByName("task03"), s.transform.position = t.transform.position.clone(), 
            r = s.transform.localPosition.clone(), this.feederTaskNpcPos.push(r);
            for (let t = 0; t < o.numChildren; t++) {
                let i = o.getChildAt(t);
                if ("task03" != i.name) {
                    let t = i.getChildAt(0);
                    s.transform.position = t.transform.position.clone();
                    let e = new H();
                    e.taskId = H.SHAOHEICHUE, e.npcPos = r.clone(), e.startPos = r.clone(), e.targetPos = s.transform.localPosition.clone(), 
                    this.taskArr.push(e);
                }
            }
            let n = b.getObj("spot.building.renwu.husong", this.cj);
            t = n.getChildByName("task04"), s.transform.position = t.transform.position.clone(), 
            r = s.transform.localPosition.clone(), this.feederTaskNpcPos.push(r);
            for (let t = 0; t < n.numChildren; t++) {
                let i = n.getChildAt(t);
                if ("task04" != i.name) {
                    let t = i.getChildByName("zhong");
                    s.transform.position = t.transform.position.clone();
                    let e = new H();
                    e.npcPos = r.clone(), e.startPos = r.clone(), e.targetPos = s.transform.localPosition.clone(), 
                    e.taskId = H.HUSONG, this.taskArr.push(e);
                }
            }
            let h = b.getObj("spot.building.renwu.shouji", this.cj);
            t = h.getChildByName("task05"), s.transform.position = t.transform.position.clone(), 
            r = s.transform.localPosition.clone(), this.feederTaskNpcPos.push(r);
            for (let t = 0; t < h.numChildren; t++) {
                let i = h.getChildAt(t);
                if ("task05" != i.name) {
                    let t = i.getChildByName("zhong");
                    s.transform.position = t.transform.position.clone();
                    let e = new H();
                    e.npcPos = r.clone(), e.startPos = r.clone(), e.targetPos = s.transform.localPosition.clone(), 
                    e.taskId = H.SHOUJI, this.taskArr.push(e);
                }
            }
            s.destroy(!0);
            for (let e = 0; e < this.feederTaskNpcPos.length; e++) {
                let t = new et(e + 1);
                t.transform.localPosition = this.feederTaskNpcPos[e].clone(), this.scene.addChild(t), 
                this.npcArr.push(t), t.hide();
            }
        }
        getARandomFeederTask(e) {
            let i = [];
            for (let t = 0; t < this.taskArr.length; t++) this.taskArr[t].taskId == e && i.push(this.taskArr[t]);
            return 0 < i.length ? i[Math.floor(i.length * Math.random())] : null;
        }
        acceptATask(i) {
            if (-1 == i) {
                this.taskFlag && (this.taskFlag.dispose(!0), this.taskFlag = null), this.curFeederTask && (this.curFeederTask.dispose(), 
                this.curFeederTask = null);
                for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].isHeibang && this.robotArr[t].heibangHide();
            } else {
                Gt.feedermissionDataArr[i - 1];
                this.curFeederTask = this.getARandomFeederTask(i).clone();
                let t = new Laya.Image("images/game/tishi01.png");
                t.anchorX = t.anchorY = .5;
                let e = new Laya.Sprite3D();
                if (this.scene.addChild(e), i != H.SHAOHEICHUE) {
                    let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrl(Gt.EFF_TASK)));
                    if (t.transform.localScale = new Laya.Vector3(60, 60, 60), t.transform.localPosition = new Laya.Vector3(), 
                    e.addChild(t), i == H.SHOUJI) {
                        let t = new C(rt.path + Gt.lingjianUrl);
                        t.transform.localScale = new Laya.Vector3(2, 2, 2), t.transform.localPositionY = 1.6, 
                        e.addChild(t), this.curFeederTask.targetPos = this.getATaskRandomPos();
                    } else (i == H.ZAIKE || i == H.HUSONG) && (this.curFeederTask.targetPos = this.getATaskRandomPos());
                }
                this.curFeederTask.taskId == H.XUNLUO ? e.transform.localPosition = this.curFeederTask.startPos.clone() : e.transform.localPosition = this.curFeederTask.targetPos.clone(), 
                e.transform.localPositionY = y.getTerrainY(e), this.taskFlag = new J(t, e), this.taskFlag.allwaysShow = !0, 
                this.miniMap.addFlag(this.taskFlag), i == H.SHAOHEICHUE && this.createHeibang(3, this.curFeederTask.targetPos.clone(), 50);
            }
            s.event("task_change", []);
        }
        getATaskRandomPos(t = 0) {
            let e = new Laya.Vector3();
            e.x = (Math.random() - .5) * y.mapScale * y.width, e.z = (Math.random() - .5) * y.mapScale * y.height;
            var i = e.x - this.user.transform.localPositionX, a = e.z - this.user.transform.localPositionZ;
            return !(Math.sqrt(i * i + a * a) < 400 && t < 1e3) && y.canWalk("map1", e.x, e.z) ? e : this.getATaskRandomPos(t + 1);
        }
        checkNpc() {
            if (!this.user.isGameOver) {
                if (this.curNpcCheckFrame--, this.curNpcCheckFrame <= 0) {
                    this.curNpcCheckFrame = this.npcCheckFrameNum;
                    for (let t = 0; t < this.npcArr.length; t++) (this.npcArr[t].npcId != H.ZAIKE || !this.curFeederTask || this.curFeederTask.taskId != H.ZAIKE) && this.npcArr[t].isRoleNearMe(this.user, 100) ? this.npcArr[t].show() : this.npcArr[t].hide();
                }
                var t;
                if (!pt.isOpening) if (this.curFeederTask) this.curFeederTask.taskId != H.SHAOHEICHUE && (t = this.curFeederTask.taskId != H.XUNLUO || this.curFeederTask.isPassStartPos ? this.curFeederTask.targetPos : this.curFeederTask.startPos, 
                Laya.Vector3.distance(t, this.user.transform.localPosition) < 3 && (this.curFeederTask.taskId != H.XUNLUO || this.curFeederTask.isPassStartPos ? (this.curFeederTask.status = H.COMPLETE, 
                _t.showPopup(_t.TASK_WINDOW)) : (this.curFeederTask.isPassStartPos = !0, this.taskFlag && (this.taskFlag.owner.transform.localPosition = this.curFeederTask.targetPos.clone(), 
                this.taskFlag.isUpdateOnce = !1, _t.showFlyTip("顺利通过第一个巡逻点！"))))); else for (let t = 0; t < this.npcArr.length; t++) this.npcArr[t].isOnshow && (this.npcArr[t].isRoleNearMe(this.user, 3) ? this.npcArr[t].isTalkingToUser || (this.npcArr[t].isTalkingToUser = !0, 
                _t.showPopup(_t.TASK_WINDOW, {
                    taskId: this.npcArr[t].npcId
                })) : this.npcArr[t].isTalkingToUser = !1);
            }
        }
        createMainRole() {
            this.user = new Kt(this.camera), this.scene.addChild(this.user), this.user.transform.position = b.getObj("spot.start", this.cj).transform.position.clone(), 
            this.user.initCamera();
        }
        createRoad() {
            let i = b.getObj("spot.building.luxiang_che", this.cj);
            if (i) for (let e = 0; e < i.numChildren; e++) {
                var a = i.getChildAt(e);
                let t = new q();
                t.roadId = "road" + e, t.createPointFromSprite3D(a), this.roadArr.push(t);
            }
        }
        getRoad(e) {
            for (let t = 0; t < this.roadArr.length; t++) if (this.roadArr[t].roadId == e) return this.roadArr[t];
            return null;
        }
        createHeibang(t, a, s) {
            let e = !1;
            for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].isHeibang && (e = !0, 
            this.robotArr[t].heibangReUse(), this.robotArr[t].setIsHeibang(a, s), this.robotArr[t].backToPos());
            if (!e) for (let i = 0; i < t; i++) {
                var r = [ tt.TYPE_MAN1, tt.TYPE_MAN2, tt.TYPE_MAN3, tt.TYPE_MAN4 ];
                let t = new dt();
                Math.random() < .3 && (t.hasGun = !0), t.type = r[i];
                r = Gt.getRobotDataByType(t.type);
                t.attack = t.hasGun ? r.attack2 : r.attack1, t.blood = r.blood, t.score = r.score;
                let e = new tt(t);
                this.recoverAndUseRobot(e), e.transform.localPositionY = y.getTerrainY(e), this.robotArr.push(e), 
                this.scene.addChild(e), e.setIsHeibang(a, s), e.backToPos();
            }
        }
        getNearestRoad(e) {
            let i = this.roadArr[0], a = i.distToRole(e);
            for (let t = 1; t < this.roadArr.length; t++) {
                var s = this.roadArr[t].distToRole(e);
                s < a && (a = s, i = this.roadArr[t]);
            }
            return i;
        }
        createSeekMan(i, a, s) {
            for (let t = 0; t < 2; t++) {
                let e = this.getAUnUseRobot(a);
                if (!e) {
                    let t = new dt();
                    Math.random() < .3 && (t.hasGun = !0);
                    var r = Gt.getRobotDataByType(a);
                    t.type = a, t.blood = r.blood, t.attack = t.hasGun ? r.attack2 : r.attack1, t.score = r.score, 
                    e = new tt(t), this.robotArr.push(e), this.scene.addChild(e);
                }
                r = this.getCarBesidePos(i);
                e.transform.localPositionX = r.x, e.transform.localPositionZ = r.y, e.transform.localPositionY = y.getTerrainY(e), 
                e.setIsRender(!0), e.robotControl.seekTarget(s), e.robotControl.wantToFindPath = !0, 
                e.robotControl.findAPath();
            }
        }
        getCarBesidePos(t, e = 0) {
            if (100 < e) return new Laya.Point(t.transform.localPositionX + t.radius, t.transform.localPositionZ + t.radius);
            var i = Math.random() * Math.PI * 2, a = t.transform.localPositionX + t.radius * Math.cos(i), i = t.transform.localPositionZ + t.radius * Math.sin(i);
            return y.canWalk("map1", a, i) ? new Laya.Point(a, i) : this.getCarBesidePos(t, e + 1);
        }
        checkSeekInfo() {
            let a = -1, s = "";
            switch (this.user.starNum) {
              case 3:
                a = zt.TYPE_POLICE, s = tt.TYPE_COP;
                break;

              case 4:
                a = zt.TYPE_ZHUANGJIA, s = tt.TYPE_SOLDIER;
                break;

              case 5:
                a = zt.TYPE_TANK;
            }
            let e = [ zt.TYPE_POLICE, zt.TYPE_TANK, zt.TYPE_ZHUANGJIA ], r = [ tt.TYPE_COP, tt.TYPE_SOLDIER ], o = [ zt.TYPE_TANK, zt.TYPE_PLANE ];
            if (-1 != a) {
                let i = 0;
                for (let t = 0; t < this.carArr.length; t++) this.carArr[t].config.type == a && !this.carArr[t].isNoBody && this.carArr[t].isInRenderView && i++, 
                -1 != o.indexOf(this.carArr[t].config.type) && this.carArr[t].isInRenderView && this.carArr[t].carControl.seekTarget(this.user);
                if (a != zt.TYPE_TANK && a != zt.TYPE_PLANE) {
                    let e = 0;
                    for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].config.type == s && this.robotArr[t].isInRenderView && e++;
                    e < 1 && 0 == i && this.createSeekCar(a);
                } else 0 == i && this.createSeekCar(a);
                for (let t = 0; t < this.robotArr.length; t++) -1 != r.indexOf(this.robotArr[t].config.type) && this.robotArr[t].isInRenderView && this.robotArr[t].robotControl.seekTarget(this.user);
            } else {
                for (let t = 0; t < this.carArr.length; t++) -1 != e.indexOf(this.carArr[t].config.type) && (this.carArr[t].carControl.seekTarget(null), 
                200 < Laya.Vector3.distance(this.carArr[t].transform.localPosition, this.user.transform.localPosition) && this.carArr[t].setIsRender(!1));
                for (let t = 0; t < this.robotArr.length; t++) -1 != r.indexOf(this.robotArr[t].config.type) && (this.robotArr[t].robotControl.seekTarget(null), 
                200 < Laya.Vector3.distance(this.robotArr[t].transform.localPosition, this.user.transform.localPosition) && this.robotArr[t].setIsRender(!1));
            }
        }
        createRobotRole() {
            var a = [ tt.TYPE_GIRL, tt.TYPE_MAN1, tt.TYPE_MAN2, tt.TYPE_MAN3, tt.TYPE_MAN4 ];
            for (let i = 0; i < a.length; i++) {
                let t = new dt();
                Math.random() < .3 && (t.hasGun = !0), t.type = a[i];
                var s = Gt.getRobotDataByType(t.type);
                t.attack = t.hasGun ? s.attack2 : s.attack1, t.blood = s.blood, t.score = s.score;
                let e = new tt(t);
                this.recoverAndUseRobot(e), e.transform.localPositionY = y.getTerrainY(e), this.robotArr.push(e), 
                this.scene.addChild(e);
            }
        }
        createSeekCar(e) {
            let i = this.getAUnUseCar(e);
            if (!i) {
                let t = new ct();
                var a = Gt.getVehicleDataByType(e);
                t.type = e, t.attack = a.attack, t.blood = a.blood, t.score = a.score, i = new zt(t), 
                i.radius = t.type == zt.TYPE_TANK ? 8.8 : 4, this.carArr.push(i), this.scene.addChild(i);
            }
            i.isNoBody = !1, i.setIsRender(!0), i.carControl.seekTarget(this.user), this.setCarRandomPos(i);
        }
        setCarRandomPos(t) {
            var e = 2 * Math.random() * Math.PI, i = 100 + 20 * Math.random(), a = this.user.transform.localPositionX + Math.cos(e) * i, i = this.user.transform.localPositionZ + Math.sin(e) * i;
            y.canWalk("map1", a, i) ? (t.carControl.clear(), t.transform.localPositionX = a, 
            t.transform.localPositionZ = i, t.transform.localPositionY = y.getTerrainY(t)) : this.setCarRandomPos(t);
        }
        getAUnUseCar(e) {
            for (let t = 0; t < this.carArr.length; t++) if (this.carArr[t].config.type == e && !this.carArr[t].isInRenderView) return this.carArr[t];
            return null;
        }
        getAUnUseRobot(e) {
            for (let t = 0; t < this.robotArr.length; t++) if (this.robotArr[t].config.type == e && (!this.robotArr[t].isInRenderView || null == this.robotArr[t].robotControl.seekingTarget)) return this.robotArr[t];
            return null;
        }
        createCars() {
            var a = [ zt.TYPE_CAR1, zt.TYPE_CAR2, zt.TYPE_CAR3, zt.TYPE_CAR4 ];
            for (let i = 0; i < a.length; i++) {
                let t = new ct();
                t.type = a[i];
                var s = Gt.getVehicleDataByType(t.type);
                t.blood = s.blood, t.attack = s.attack, t.score = s.score;
                let e = new zt(t);
                e.radius = t.type == zt.TYPE_TANK ? 8.8 : 4, this.carArr.push(e), this.scene.addChild(e), 
                e.setIsRender(!0), this.carArr[i].carControl.setRolePath(this.roadArr[0].roadPointArr);
            }
        }
        createSky(t) {
            Laya.BaseMaterial.load(rt.path + "3d/skybox/skybox" + t + "/skyBox.lmat", Laya.Handler.create(this, e => {
                if (this.scene && this.scene.skyRenderer) {
                    let t = this.scene.skyRenderer;
                    t.mesh = Laya.SkyBox.instance, t.material = e;
                }
            }));
        }
        createWater() {
            Laya.BaseMaterial.load(rt.path + "3d/mat/Wat.lmat", Laya.Handler.create(this, e => {
                if (this.cj && e) {
                    let t = e;
                    t.waveSpeed = new Laya.Vector4(.95, .45, -.8, -.35), t.waveScale = .25, t.horizonColor.w = .75, 
                    t.renderMode = Laya.PBRStandardMaterial.RENDERMODE_FADE, b.getObj("shui", this.cj).meshRenderer.material = t;
                }
            }));
        }
        createXuebao() {
            let a = b.getObj("spot.building.xuebao", this.cj);
            if (a) for (let i = 0; i < a.numChildren; i++) {
                let t = a.getChildAt(i), e = Laya.Sprite3D.instantiate(Laya.loader.getRes(Gt.getEffUrl(Gt.EFF_REBLEEDING)));
                e.transform.localScale = new Laya.Vector3(360, 360, 360), t.addChild(e), e.transform.localPosition = new Laya.Vector3(0, 1, 0), 
                this.xuebaoArr.push(e);
            }
        }
        userAttack(e, i) {
            let a;
            a = "zhongquan" == i ? 10 : 2;
            for (let t = 0; t < this.robotArr.length; t++) Laya.Vector3.distance(e.transform.localPosition, this.robotArr[t].transform.localPosition) < a && this.robotArr[t].attackByUser(e);
            for (let t = 0; t < this.carArr.length; t++) Laya.Vector3.distance(e.transform.localPosition, this.carArr[t].transform.localPosition) < (this.carArr[t].config.type == zt.TYPE_TANK ? 6 : 3) + a && this.carArr[t].attackByUser(e, i);
        }
        checkUserHit(e) {
            let i = 1.8;
            for (let t = 0; t < this.robotArr.length; t++) {
                var a;
                this.robotArr[t].isNormalAni() && Laya.Vector3.distance(e.transform.localPosition.clone(), this.robotArr[t].transform.localPosition.clone()) < i && e.isCar && (this.robotArr[t].attackByUser(e), 
                a = new Laya.Vector3(), Laya.Vector3.subtract(e.transform.localPosition.clone(), this.robotArr[t].transform.localPosition.clone(), a), 
                Laya.Vector3.normalize(a, a), e.applyHitVeclocity(a), e.shake(), A.playSound(w.HIT));
            }
            i = 4;
            for (let t = 0; t < this.carArr.length; t++) {
                var s, r;
                this.carArr[t].isInRenderView && (s = Laya.Vector3.distance(e.transform.localPosition.clone(), this.carArr[t].transform.localPosition.clone()), 
                r = this.carArr[t].config.type == zt.TYPE_TANK ? 2.2 : 1, s < i * r && (r = new Laya.Vector3(), 
                Laya.Vector3.subtract(e.transform.localPosition.clone(), this.carArr[t].transform.localPosition.clone(), r), 
                Laya.Vector3.normalize(r, r), e.applyHitVeclocity(r), this.carArr[t].pause(), e.isCar && (e.shake(), 
                (r = Date.now()) - this.preHitTime > this.hitLimitTime && (A.playSound(w.HIT), this.preHitTime = r))));
            }
        }
        update() {
            if ($.update(), at.update(), V.update(), this.checkNpc(), this.user.update(), this.checkUserFullBlood(this.user), 
            this.updateRobots(), this.updateCars(), this.checkSeekInfo(), this.miniMap.update(), 
            this.curXuebaoRefleshFrame++, this.curXuebaoRefleshFrame >= this.xuebaoRefleshFrame) for (let t = this.curXuebaoRefleshFrame = 0; t < this.xuebaoArr.length; t++) this.xuebaoArr[t].active = !0;
            this.miniMap.parent.reCache();
        }
        updateRobots() {
            for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].isInRenderView && this.robotArr[t].update();
        }
        updateCars() {
            for (let t = 0; t < this.carArr.length; t++) this.carArr[t].update(), this.carArr[t].isNoBody && 200 < Laya.Vector3.distance(this.carArr[t].transform.localPosition, this.user.transform.localPosition) && this.carArr[t].setIsRender(!1);
            for (let e = 0; e < this.carArr.length; e++) if (this.carArr[e].isInRenderView) for (let t = e + 1; t < this.carArr.length; t++) {
                var i, a, s;
                this.carArr[t].isInRenderView && (s = this.carArr[t].transform.localPositionX - this.carArr[e].transform.localPositionX, 
                i = this.carArr[t].transform.localPositionZ - this.carArr[e].transform.localPositionZ, 
                Math.sqrt(s * s + i * i) < (a = this.carArr[e].radius + this.carArr[t].radius) && (s = Math.atan2(i, s), 
                this.carArr[t].transform.localPositionX = this.carArr[e].transform.localPositionX + Math.cos(s) * a, 
                this.carArr[t].transform.localPositionZ = this.carArr[e].transform.localPositionZ + Math.sin(s) * a));
            }
        }
        isNormalMan(t) {
            let e = [ tt.TYPE_GIRL, tt.TYPE_MAN1, tt.TYPE_MAN2, tt.TYPE_MAN3, tt.TYPE_MAN4, tt.TYPE_WOMAN ];
            return -1 != e.indexOf(t);
        }
        isNormalCar(t) {
            let e = [ zt.TYPE_CAR1, zt.TYPE_CAR2, zt.TYPE_CAR3, zt.TYPE_CAR4 ];
            return -1 != e.indexOf(t);
        }
        checkObjPositions() {
            for (let t = 0; t < this.robotArr.length; t++) (this.robotArr[t].isInRenderView || this.isNormalMan(this.robotArr[t].config.type)) && (150 < Laya.Vector3.distance(this.robotArr[t].transform.localPosition, this.user.transform.localPosition) ? this.robotArr[t].isHeibang ? (this.robotArr[t].backToPos(), 
            this.robotArr[t].setIsRender(!1)) : this.recoverAndUseRobot(this.robotArr[t]) : !this.robotArr[t].isHeibang || this.robotArr[t].isKillByUser || this.robotArr[t].isInRenderView || this.robotArr[t].setIsRender(!0, !1));
            for (let t = 0; t < this.carArr.length; t++) this.carArr[t].isInRenderView && !this.carArr[t].isNoBody && 200 < Laya.Vector3.distance(this.carArr[t].transform.localPosition, this.user.transform.localPosition) && this.recoverAndUseCar(this.carArr[t]);
        }
        recoverAndUseRobot(t) {
            var e, i, a;
            t.isHeibang ? t.backToPos() : (e = 2 * Math.random() * Math.PI, a = 50 + 20 * Math.random(), 
            i = this.user.transform.localPositionX + Math.cos(e) * a, a = this.user.transform.localPositionZ + Math.sin(e) * a, 
            y.canWalk("map1", i, a) ? (t.robotControl.clear(), t.transform.localPositionX = i, 
            t.transform.localPositionZ = a, t.transform.localPositionY = y.getTerrainY(t), !t.isInRenderView && this.isNormalMan(t.config.type) && (t.setIsRender(!0), 
            t.robotControl.seekTarget(null))) : this.recoverAndUseRobot(t));
        }
        recoverAndUseCar(e) {
            if (!e.isInRenderView && this.isNormalCar(e.config.type) && e.setIsRender(!0), e.carControl.follower) {
                let t = e;
                var i = this.getNearestRoad(this.user);
                t.carControl.setRolePath(i.roadPointArr);
            } else {
                var t = 2 * Math.random() * Math.PI, a = 100 + 20 * Math.random(), i = this.user.transform.localPositionX + Math.cos(t) * a, a = this.user.transform.localPositionZ + Math.sin(t) * a;
                y.canWalk("map1", i, a) ? (e.carControl.clear(), e.transform.localPositionX = i, 
                e.transform.localPositionZ = a, e.transform.localPositionY = y.getTerrainY(e)) : this.recoverAndUseCar(e);
            }
        }
        checkUserFullBlood(e) {
            if ("fail" != e.curAniName) for (let t = 0; t < this.xuebaoArr.length; t++) if (this.xuebaoArr[t].active && Laya.Vector3.distance(e.transform.position, this.xuebaoArr[t].transform.position) < 1.5) return this.xuebaoArr[t].active = !1, 
            e.fullBlood(), void _t.showFlyTip("已恢复血量！");
        }
        quit() {
            this.removeAllEvent(), Laya.timer.callLater(this, () => {
                this.dispose(), _t.hideView(_t.GAME_VIEW), _t.showPopup(_t.MAIN_VIEW);
            });
        }
        removeAllEvent() {
            Laya.timer.clear(this, this.update);
        }
        dispose() {
            this.positionFramer = null;
            for (let t = 0; t < this.xuebaoArr.length; t++) this.xuebaoArr[t].destroy();
            this.xuebaoArr.length = 0, this.xuebaoArr = null;
            for (let t = 0; t < this.carArr.length; t++) this.carArr[t].dispose();
            this.carArr.length = 0, this.carArr = null;
            for (let t = 0; t < this.robotArr.length; t++) this.robotArr[t].dispose();
            this.robotArr.length = 0, this.robotArr = null;
            for (let t = 0; t < this.roadArr.length; t++) this.roadArr[t].dispose();
            this.roadArr.length = 0, this.roadArr = null;
            for (let t = 0; t < this.npcArr.length; t++) this.npcArr[t].dispose();
            this.npcArr.length = 0, this.npcArr = null;
            for (let t = 0; t < this.taskArr.length; t++) this.taskArr[t].dispose();
            this.taskArr.length = 0, this.taskArr = null, this.curFeederTask = null, this.taskFlag && this.taskFlag.dispose(), 
            this.taskFlag = null, this.user.dispose(), this.user = null, this.miniMap.dispose(), 
            this.miniMap = null, this.camera.destroy(), this.camera = null, this.cj.destroy(), 
            this.cj = null, this.scene.destroy(!0), this.scene = null, at.disable(), at.clearAll(), 
            V.disable(), V.clearAll(), Laya.Resource.destroyUnusedResources();
        }
    }
    class Zt {
        constructor() {}
        static initConfig() {}
        static initLocal() {
            this.gold = this.getLocal("gold", 0), this.diamond = this.getLocal("diamond", 0), 
            this.experience = this.getLocal("experience", 0), this.level = this.getLocal("level", 1), 
            this.roleId = this.getLocal("role", 1);
        }
        static addExperience(t) {
            this.experience += t;
            t = this.getNextLevelExperience(this.level);
            t <= this.experience && (this.experience -= t, t = this.level, this.level = Math.min(this.level + 1, Gt.roleLevelDataArr.length), 
            A.setLocal("level", this.level), this.level > t && console.log("恭喜你升级到了" + this.level + "级")), 
            A.setLocal("experience", this.experience), s.event("experience", []);
        }
        static getNextLevelExperience(t) {
            t = Math.min(t + 1, Gt.roleLevelDataArr.length);
            return Gt.roleLevelDataArr[t - 1].experience;
        }
        static getCurExperienceProgress() {
            return Math.min(1, this.experience / this.getNextLevelExperience(this.level));
        }
        static useRole(t) {
            this.roleId = t, A.setLocal("role", t);
        }
        static useLocal(t, e) {
            switch (t) {
              case "gold":
                if (e > this.gold) return !1;
                this.gold -= e, A.setLocal(t, this.gold), s.event(s.GOLD_CHANGE, []);
                break;

              case "diamond":
                if (e > this.diamond) return !1;
                this.diamond -= e, A.setLocal(t, this.diamond), s.event(s.DIAMOND_CHANGE, []);
            }
            return !0;
        }
        static addLocal(t, e, i = !1) {
            switch (t) {
              case "gold":
                this.gold += e, A.setLocal(t, this.gold), s.event(s.GOLD_CHANGE, []), i && _t.showFlyTip("获得" + e + "金币");
                break;

              case "diamond":
                this.diamond += e, A.setLocal(t, this.diamond), s.event(s.DIAMOND_CHANGE, []), i && _t.showFlyTip("获得" + e + "钻石");
            }
        }
        static getLocal(t, e) {
            let i = A.getLocal(t);
            return i = i || e, i;
        }
        static createGTAGame() {
            this.gta = new jt();
        }
        static quitGTAGame() {
            this.gta && this.gta.quit(), this.gta = null;
        }
        static showCustomInterstitialAdView(t) {
            if (!A.isWuScene()) return t();
            let e = _t.getView(_t.CUSTOMINAD_VIEW);
            e.isOnshow ? e.setCallback(t) : _t.showPopup(_t.CUSTOMINAD_VIEW, t);
        }
        static wuchu() {
            A.isWuScene() && !this.isSetActivityEvent && (this.isSetActivityEvent = !0, Laya.stage.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.activityIndex = 0;
            }), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, () => {
                this.activityIndex = 0;
            }), Laya.stage.on(Laya.Event.MOUSE_UP, this, () => {
                this.activityIndex = 0;
            }), Laya.timer.frameLoop(1, this, () => {
                var t;
                this.activityIndex++, this.activityIndex >= this.activityValue && (this.activityIndex = 0, 
                (t = _t.getTopViewType([ _t.COMMON_LOADING ])) != _t.MULLoading_VIEW && t != _t.MATCH_VIEW && (_t.getView(_t.CUSTOMINAD_VIEW).isOnshow || _t.showPopup(_t.CUSTOMINAD_VIEW, () => {})));
            }));
        }
    }
    Zt.gold = 0, Zt.diamond = 0, Zt.experience = 0, Zt.level = 1, Zt.roleId = 1, Zt.isDanji = !0, 
    Zt.isSetActivityEvent = !1, Zt.activityIndex = 0, Zt.activityValue = 720;
    class qt {
        constructor() {}
        static initBanner() {
            s.on(s.VIEW_CHANGE, this, () => {
                Laya.timer.clear(this, this.showBanner), Laya.timer.once(100, this, this.showBanner);
            }), this.showBanner();
        }
        static showBanner() {
            var t = _t.getTopViewType([ _t.LOADING_VIEW, _t.MULLoading_VIEW, _t.COMMON_LOADING ]);
            let e = _t.getView(t), i = [ _t.MAXMAP_WINDOW, _t.MULGAME_VIEW, _t.CUSTOMINAD_VIEW, _t.RESULT_WINDOW ];
            if (p.isInAdScenes() || i.push(_t.GAME_VIEW), -1 != i.indexOf(t) || "" == t ? p.hideBanner() : p.showBanner(), 
            p.hideSCustom(), p.hideVCustom(), -1 == this.ignoreArr.indexOf(t)) {
                if (e) {
                    var a = e.getUIView();
                    if (a) {
                        let e = [], i = [];
                        for (let t = 1; t <= 2; t++) {
                            var s = a["custom_v" + t];
                            s ? e.push(s) : e.push(null);
                            s = a["custom_s" + t];
                            s ? i.push(s) : i.push(null);
                        }
                        p.showVCustomWithContainer(e), p.showSCustomWithContainer(i);
                    }
                }
                var r = new Date().getTime();
                r - this.oldInterTime < 2e3 || -1 != [].indexOf(t) && (this.oldInterTime = r, A.showInterstitialAd(), 
                console.log("插屏广告"));
            }
        }
    }
    qt.ignoreArr = [], qt.oldInterTime = -1e6;
    new class {
        constructor() {
            this.isRes = !1, this.isAd = !1, window.Laya3D ? Laya3D.init(t.width, t.height) : Laya.init(t.width, t.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = t.scaleMode, Laya.stage.screenMode = t.screenMode, Laya.stage.alignV = t.alignV, 
            Laya.stage.alignH = t.alignH, Laya.URL.exportSceneToJson = t.exportSceneToJson, 
            A.init(n.WECHAT), _t.init(), _t.showPopup(_t.LOADING_VIEW), this.isAd = !0, p.init(() => {
                Gt.loadHomeRes(() => {
                    this.isRes = !0, this.isRes && this.isAd && this.enterGame();
                });
            });
        }
        enterGame() {
            p.enterHomePage(t => {
                _t.hideView(_t.LOADING_VIEW), Zt.initConfig(), Zt.initLocal(), _t.showPopup(_t.MAIN_VIEW), 
                qt.initBanner(), Zt.wuchu(), t && Zt.addLocal("gold", 50, !0);
            });
        }
    }();
}();