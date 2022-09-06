var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/helpers/typeof"));

System.register("chunks:///_virtual/_rollupPluginBabelHelpers.js", [], function(t, r) {
    function n(r) {
        return "function" == typeof Symbol && "symbol" == (0, e.default)(Symbol.iterator) ? t("typeof", n = function(t) {
            return (0, e.default)(t);
        }) : t("typeof", n = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : (0, 
            e.default)(t);
        }), n(r);
    }
    function i(e, t, r, n, i, o, u) {
        try {
            var l = e[o](u), a = l.value;
        } catch (e) {
            //e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return void r(e);
        }
        l.done ? t(a) : Promise.resolve(a).then(n, i);
    }
    function o(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    function u(e) {
        return t("getPrototypeOf", u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        }), u(e);
    }
    function l(e, r) {
        return t("setPrototypeOf", l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        }), l(e, r);
    }
    function a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    return t({
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
        assertThisInitialized: a,
        asyncToGenerator: function(e) {
            return function() {
                var t = this, r = arguments;
                return new Promise(function(n, o) {
                    var u = e.apply(t, r);
                    function l(e) {
                        i(u, n, o, l, a, "next", e);
                    }
                    function a(e) {
                        i(u, n, o, l, a, "throw", e);
                    }
                    l(void 0);
                });
            };
        },
        classCallCheck: function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        createClass: function(e, t, r) {
            return t && o(e.prototype, t), r && o(e, r), e;
        },
        getPrototypeOf: u,
        inherits: function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t);
        },
        initializerDefineProperty: function(e, t, r, n) {
            r && Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            });
        },
        possibleConstructorReturn: function(t, r) {
            return !r || "object" != (0, e.default)(r) && "function" != typeof r ? a(t) : r;
        },
        setPrototypeOf: l,
        typeof: n
    }), {
        setters: [],
        execute: function() {}
    };
});