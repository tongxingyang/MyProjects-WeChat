System.register([], function(e, t) {
    return {
        execute: function() {
            System.register("chunks:///_virtual/_rollupPluginModLoBabelHelpers.js", [], function(e) {
                return {
                    execute: function() {
                        function t(e, t, r, n, o, i, u) {
                            try {
                                var c = e[i](u), a = c.value;
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                return void r(e);
                            }
                            c.done ? t(a) : Promise.resolve(a).then(n, o);
                        }
                        function r(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function n(t) {
                            return (n = e("getPrototypeOf", Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e);
                            }))(t);
                        }
                        function o(t, r) {
                            return (o = e("setPrototypeOf", Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e;
                            }))(t, r);
                        }
                        function i() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                                !0;
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                return !1;
                            }
                        }
                        function u(t, r, n) {
                            return (u = i() ? e("construct", Reflect.construct) : e("construct", function(e, t, r) {
                                var n = [ null ];
                                n.push.apply(n, t);
                                var i = new (Function.bind.apply(e, n))();
                                return r && o(i, r.prototype), i;
                            })).apply(null, arguments);
                        }
                        function c(e) {
                            return -1 !== Function.toString.call(e).indexOf("[native code]");
                        }
                        function a(t) {
                            var r = "function" == typeof Map ? new Map() : void 0;
                            return (a = e("wrapNativeSuper", function(e) {
                                if (null === e || !c(e)) return e;
                                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                if (void 0 !== r) {
                                    if (r.has(e)) return r.get(e);
                                    r.set(e, t);
                                }
                                function t() {
                                    return u(e, arguments, n(this).constructor);
                                }
                                return t.prototype = Object.create(e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), o(t, e);
                            }))(t);
                        }
                        function l(e, t) {
                            for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e)); ) ;
                            return e;
                        }
                        function f(t, r, n) {
                            return (f = "undefined" != typeof Reflect && Reflect.get ? e("get", Reflect.get) : e("get", function(e, t, r) {
                                var n = l(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(r) : o.value;
                                }
                            }))(t, r, n || t);
                        }
                        function p(e, t) {
                            if (e) {
                                if ("string" == typeof e) return s(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0;
                            }
                        }
                        function s(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                            return n;
                        }
                        e({
                            applyDecoratedDescriptor: function(e, t, r, n, o) {
                                var i = {};
                                return Object.keys(n).forEach(function(e) {
                                    i[e] = n[e];
                                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), 
                                i = r.slice().reverse().reduce(function(r, n) {
                                    return n(e, t, r) || r;
                                }, i), o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0, 
                                i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), 
                                i = null), i;
                            },
                            arrayLikeToArray: s,
                            assertThisInitialized: function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            },
                            asyncToGenerator: function(e) {
                                return function() {
                                    var r = this, n = arguments;
                                    return new Promise(function(o, i) {
                                        var u = e.apply(r, n);
                                        function c(e) {
                                            t(u, o, i, c, a, "next", e);
                                        }
                                        function a(e) {
                                            t(u, o, i, c, a, "throw", e);
                                        }
                                        c(void 0);
                                    });
                                };
                            },
                            construct: u,
                            createClass: function(e, t, n) {
                                return t && r(e.prototype, t), n && r(e, n), e;
                            },
                            createForOfIteratorHelperLoose: function(e, t) {
                                var r;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (Array.isArray(e) || (r = p(e)) || t && e && "number" == typeof e.length) {
                                        r && (e = r);
                                        var n = 0;
                                        return function() {
                                            return n >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[n++]
                                            };
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                return (r = e[Symbol.iterator]()).next.bind(r);
                            },
                            defineProperty: function(e, t, r) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r, e;
                            },
                            get: f,
                            getPrototypeOf: n,
                            inheritsLoose: function(e, t) {
                                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, o(e, t);
                            },
                            initializerDefineProperty: function(e, t, r, n) {
                                r && Object.defineProperty(e, t, {
                                    enumerable: r.enumerable,
                                    configurable: r.configurable,
                                    writable: r.writable,
                                    value: r.initializer ? r.initializer.call(n) : void 0
                                });
                            },
                            isNativeFunction: c,
                            isNativeReflectConstruct: i,
                            setPrototypeOf: o,
                            superPropBase: l,
                            unsupportedIterableToArray: p,
                            wrapNativeSuper: a
                        });
                    }
                };
            });
        }
    };
});