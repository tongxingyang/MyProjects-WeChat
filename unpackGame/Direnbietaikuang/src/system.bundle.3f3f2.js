!function() {
    function e(e, t) {
        return (t || "") + " (SystemJS https://git.io/JvFET#" + e + ")";
    }
    var t, n = "undefined" != typeof Symbol, r = "undefined" != typeof self, i = "undefined" != typeof document, o = r ? self : global;
    if (i) {
        var u = document.querySelector("base[href]");
        u && (t = u.href);
    }
    if (!t && "undefined" != typeof location) {
        var c = (t = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
        -1 !== c && (t = t.slice(0, c + 1));
    }
    var l = /\\/g;
    function s(e, t) {
        if (-1 !== e.indexOf("\\") && (e = e.replace(l, "/")), "/" === e[0] && "/" === e[1]) return t.slice(0, t.indexOf(":") + 1) + e;
        if ("." === e[0] && ("/" === e[1] || "." === e[1] && ("/" === e[2] || 2 === e.length && (e += "/")) || 1 === e.length && (e += "/")) || "/" === e[0]) {
            var n, r = t.slice(0, t.indexOf(":") + 1);
            if (n = "/" === t[r.length + 1] ? "file:" !== r ? (n = t.slice(r.length + 2)).slice(n.indexOf("/") + 1) : t.slice(8) : t.slice(r.length + ("/" === t[r.length])), 
            "/" === e[0]) return t.slice(0, t.length - n.length - 1) + e;
            for (var i = n.slice(0, n.lastIndexOf("/") + 1) + e, o = [], u = -1, c = 0; c < i.length; c++) -1 !== u ? "/" === i[c] && (o.push(i.slice(u, c + 1)), 
            u = -1) : "." === i[c] ? "." !== i[c + 1] || "/" !== i[c + 2] && c + 2 !== i.length ? "/" === i[c + 1] || c + 1 === i.length ? c += 1 : u = c : (o.pop(), 
            c += 2) : u = c;
            return -1 !== u && o.push(i.slice(u)), t.slice(0, t.length - n.length) + o.join("");
        }
    }
    function f(e, t) {
        return s(e, t) || (-1 !== e.indexOf(":") ? e : s("./" + e, t));
    }
    function a(e, t, n, r, i) {
        for (var o in e) {
            var u = s(o, n) || o, c = e[o];
            if ("string" == typeof c) {
                var l = g(r, s(c, n) || c, i);
                l ? t[u] = l : p("W1", o, c);
            }
        }
    }
    function h(e, t) {
        if (t[e]) return e;
        var n = e.length;
        do {
            var r = e.slice(0, n + 1);
            if (r in t) return r;
        } while (-1 !== (n = e.lastIndexOf("/", n - 1)));
    }
    function v(e, t) {
        var n = h(e, t);
        if (n) {
            var r = t[n];
            if (null === r) return;
            if (!(e.length > n.length && "/" !== r[r.length - 1])) return r + e.slice(n.length);
            p("W2", n, r);
        }
    }
    function p(t, n, r, i) {
        console.warn(e(t, [ r, n ].join(", ")));
    }
    function g(e, t, n) {
        for (var r = e.scopes, i = n && h(n, r); i; ) {
            var o = v(t, r[i]);
            if (o) return o;
            i = h(i.slice(0, i.lastIndexOf("/")), r);
        }
        return v(t, e.imports) || -1 !== t.indexOf(":") && t;
    }
    var d = n && Symbol.toStringTag, m = n ? Symbol() : "@";
    function y() {
        this[m] = {};
    }
    var w, O = y.prototype;
    function b(t, n, r) {
        var i = t[m][n];
        if (i) return i;
        var o = [], u = Object.create(null);
        d && Object.defineProperty(u, d, {
            value: "Module"
        });
        var c = Promise.resolve().then(function() {
            return t.instantiate(n, r);
        }).then(function(r) {
            if (!r) throw Error(e(2, n));
            var c = r[1](function(e, t) {
                i.h = !0;
                var n = !1;
                if ("string" == typeof e) e in u && u[e] === t || (u[e] = t, n = !0); else {
                    for (var r in e) t = e[r], r in u && u[r] === t || (u[r] = t, n = !0);
                    e.__esModule && (u.__esModule = e.__esModule);
                }
                if (n) for (var c = 0; c < o.length; c++) {
                    var l = o[c];
                    l && l(u);
                }
                return t;
            }, 2 === r[1].length ? {
                import: function(e) {
                    return t.import(e, n);
                },
                meta: t.createContext(n)
            } : void 0);
            return i.e = c.execute || function() {}, [ r[0], c.setters || [] ];
        }, function(e) {
            throw i.e = null, i.er = e, e;
        }), l = c.then(function(e) {
            return Promise.all(e[0].map(function(r, i) {
                var o = e[1][i];
                return Promise.resolve(t.resolve(r, n)).then(function(e) {
                    var r = b(t, e, n);
                    return Promise.resolve(r.I).then(function() {
                        return o && (r.i.push(o), !r.h && r.I || o(r.n)), r;
                    });
                });
            })).then(function(e) {
                i.d = e;
            });
        });
        return i = t[m][n] = {
            id: n,
            i: o,
            n: u,
            I: c,
            L: l,
            h: !1,
            d: void 0,
            e: void 0,
            er: void 0,
            E: void 0,
            C: void 0,
            p: void 0
        };
    }
    O.import = function(e, t) {
        var n = this;
        return Promise.resolve(n.prepareImport()).then(function() {
            return n.resolve(e, t);
        }).then(function(e) {
            var t = b(n, e);
            return t.C || function(e, t) {
                return t.C = function e(t, n, r, i) {
                    if (!i[n.id]) return i[n.id] = !0, Promise.resolve(n.L).then(function() {
                        return n.p && null !== n.p.e || (n.p = r), Promise.all(n.d.map(function(n) {
                            return e(t, n, r, i);
                        }));
                    }).catch(function(e) {
                        if (n.er) throw e;
                        throw n.e = null, e;
                    });
                }(e, t, t, {}).then(function() {
                    return function e(t, n, r) {
                        if (!r[n.id]) {
                            if (r[n.id] = !0, !n.e) {
                                if (n.er) throw n.er;
                                return n.E ? n.E : void 0;
                            }
                            var i;
                            return n.d.forEach(function(o) {
                                try {
                                    var u = e(t, o, r);
                                    u && (i = i || []).push(u);
                                } catch (e) {
                                    // e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    // throw n.e = null, n.er = e, e;
                                }
                            }), i ? Promise.all(i).then(o) : o();
                        }
                        function o() {
                            try {
                                var e = n.e.call(x);
                                if (e) return e = e.then(function() {
                                    n.C = n.n, n.E = null;
                                }, function(e) {
                                    throw n.er = e, n.E = null, e;
                                }), n.E = e;
                                n.C = n.n, n.L = n.I = void 0;
                            } catch (e) {
                                // e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                // throw n.er = e, e;
                            } finally {
                                n.e = null;
                            }
                        }
                    }(e, t, {});
                }).then(function() {
                    return t.n;
                });
            }(n, t);
        });
    }, O.createContext = function(e) {
        var t = this;
        return {
            url: e,
            resolve: function(n, r) {
                return Promise.resolve(t.resolve(n, r || e));
            }
        };
    }, O.register = function(e, t) {
        w = [ e, t ];
    }, O.getRegister = function() {
        var e = w;
        return w = void 0, e;
    };
    var x = Object.freeze(Object.create(null));
    o.System = new y(), O.instantiate = function(e, t) {
        throw new Error("Unable to instantiate ".concat(e, " from ").concat(t));
    };
    var P = t, E = {
        imports: {},
        scopes: {}
    };
    function I(e) {
        return function(t) {
            var n, r = this;
            try {
                n = e(t);
            } catch (e) {
                // e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                // return Promise.reject(e);
            }
            return function(e) {
                return Boolean(e && "function" == typeof e.then);
            }(n) ? new Promise(function(e) {
                return n.then(function() {
                    e(r.getRegister());
                });
            }) : r.getRegister();
        };
    }
    function R(e, t) {
        var n = O.instantiate;
        O.instantiate = function(r, i) {
            var o = r.substr(0, e.length) === e ? r.substr(e.length) : null;
            return null === o ? n.call(this, r, i) : t.call(this, o, i);
        };
    }
    O.resolve = function(e, t) {
        return g(E, s(e, t = t || P) || e, t) || function(e, t) {
            throw new Error("Unresolved id: ".concat(e, " from parentUrl: ").concat(t));
        }(e, t);
    }, function(e) {
        var t = ("undefined" != typeof self ? self : global).System;
        u(t);
        var n, r = t.constructor.prototype, i = t.constructor, o = function() {
            i.call(this), u(this);
        };
        function u(e) {
            e.registerRegistry = Object.create(null);
        }
        o.prototype = r, t.constructor = o;
        var c = r.register;
        r.register = function(e, t, r) {
            if ("string" != typeof e) return c.apply(this, arguments);
            var i = [ t, r ];
            return this.registerRegistry[e] = i, n || (n = i, Promise.resolve().then(function() {
                n = null;
            })), c.apply(this, arguments);
        };
        var l = r.resolve;
        r.resolve = function(e, t) {
            try {
                return l.call(this, e, t);
            } catch (t) {
                // t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                // if (e in this.registerRegistry) return e;
                // throw t;
            }
        };
        var s = r.instantiate;
        r.instantiate = function(e, t) {
            var n = this.registerRegistry[e];
            return n ? (this.registerRegistry[e] = null, n) : s.call(this, e, t);
        };
        var f = r.getRegister;
        r.getRegister = function() {
            var e = f.call(this), t = n || e;
            return n = null, t;
        };
    }(), O.prepareImport = function(e) {}, O.warmup = function(e) {
        var t = e.pathname, n = void 0 === t ? "/" : t, r = e.importMap, i = e.importMapUrl, o = e.defaultHandler, u = e.handlers;
        if (function(e) {
            P = e;
        }("no-schema:".concat(n)), function(e, t) {
            !function(e, t, n) {
                var r;
                for (r in e.imports && a(e.imports, n.imports, t, n, null), e.scopes || {}) {
                    var i = f(r, t);
                    a(e.scopes[r], n.scopes[i] || (n.scopes[i] = {}), t, n, i);
                }
                for (r in e.depcache || {}) n.depcache[f(r, t)] = e.depcache[r];
                for (r in e.integrity || {}) n.integrity[f(r, t)] = e.integrity[r];
            }(e, t || P, E);
        }(r, "no-schema:/".concat(i)), o && R("no-schema:", I(o)), u) for (var c = 0, l = Object.keys(u); c < l.length; c++) {
            var s = l[c];
            R(s, I(u[s]));
        }
    };
}();