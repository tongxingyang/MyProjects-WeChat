System.register([], function(e, t) {
    return {
        execute: function() {
            System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function(e) {
                return {
                    execute: function() {
                        function t(e, t, r, n, i, o, a) {
                            try {
                                var u = e[o](a), c = u.value;
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                return void r(e);
                            }
                            u.done ? t(c) : Promise.resolve(c).then(n, i);
                        }
                        function r(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                Object.defineProperty(e, n.key, n);
                            }
                        }
                        function n() {
                            return (n = e("extends", Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            })).apply(this, arguments);
                        }
                        function i(t, r) {
                            return (i = e("setPrototypeOf", Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e;
                            }))(t, r);
                        }
                        e({
                            applyDecoratedDescriptor: function(e, t, r, n, i) {
                                var o = {};
                                return Object.keys(n).forEach(function(e) {
                                    o[e] = n[e];
                                }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), 
                                o = r.slice().reverse().reduce(function(r, n) {
                                    return n(e, t, r) || r;
                                }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, 
                                o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), 
                                o = null), o;
                            },
                            assertThisInitialized: function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            },
                            asyncToGenerator: function(e) {
                                return function() {
                                    var r = this, n = arguments;
                                    return new Promise(function(i, o) {
                                        var a = e.apply(r, n);
                                        function u(e) {
                                            t(a, i, o, u, c, "next", e);
                                        }
                                        function c(e) {
                                            t(a, i, o, u, c, "throw", e);
                                        }
                                        u(void 0);
                                    });
                                };
                            },
                            createClass: function(e, t, n) {
                                return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), e;
                            },
                            extends: n,
                            inheritsLoose: function(e, t) {
                                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, i(e, t);
                            },
                            initializerDefineProperty: function(e, t, r, n) {
                                r && Object.defineProperty(e, t, {
                                    enumerable: r.enumerable,
                                    configurable: r.configurable,
                                    writable: r.writable,
                                    value: r.initializer ? r.initializer.call(n) : void 0
                                });
                            },
                            setPrototypeOf: i
                        });
                    }
                };
            });
        }
    };
});