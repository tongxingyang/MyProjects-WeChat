var e = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/helpers/typeof"));

(function() {
    var t, n = "undefined" != typeof self, r = "undefined" != typeof document, i = n ? self : window;
    if (r) {
        var o = document.querySelector("base[href]");
        o && (t = o.href);
    }
    if (!t && "undefined" != typeof location) {
        var u = (t = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
        -1 !== u && (t = t.slice(0, u + 1));
    }
    var s = /\\/g;
    function c(e, t) {
        if (-1 !== e.indexOf("\\") && (e = e.replace(s, "/")), "/" === e[0] && "/" === e[1]) return t.slice(0, t.indexOf(":") + 1) + e;
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
    function a(e, t) {
        return c(e, t) || (-1 !== e.indexOf(":") ? e : c("./" + e, t));
    }
    function f(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function l(e, t, n, r, i) {
        for (var o in e) {
            var u = c(o, n) || o, s = e[o];
            if ("string" == typeof s) {
                var a = v(r, c(s, n) || s, i);
                a ? t[u] = a : p(o, s, "bare specifier did not resolve");
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
    function d(e, t) {
        var n = h(e, t);
        if (n) {
            var r = t[n];
            if (null === r) return;
            if (!(e.length > n.length && "/" !== r[r.length - 1])) return r + e.slice(n.length);
            p(n, r, "should have a trailing '/'");
        }
    }
    function p(e, t, n) {
        console.warn("Package target " + n + ", resolving target '" + t + "' for " + e);
    }
    function v(e, t, n) {
        for (var r = n && h(n, e.scopes); r; ) {
            var i = d(t, e.scopes[r]);
            if (i) return i;
            r = h(r.slice(0, r.lastIndexOf("/")), e.scopes);
        }
        return d(t, e.imports) || -1 !== t.indexOf(":") && t;
    }
    var m = Object.freeze({
        hasSelf: n,
        hasDocument: r,
        window: i,
        get baseUrl() {
            return t;
        },
        resolveIfNotPlainOrUrl: c,
        resolveUrl: a,
        resolveAndComposeImportMap: function(e, t, n) {
            var r = {
                imports: f({}, n.imports),
                scopes: f({}, n.scopes)
            };
            if (e.imports && l(e.imports, r.imports, t, n, null), e.scopes) for (var i in e.scopes) {
                var o = a(i, t);
                l(e.scopes[i], r.scopes[o] || (r.scopes[o] = {}), t, n, o);
            }
            return r;
        },
        resolveImportMap: v
    }), g = "undefined" != typeof Symbol, y = g && Symbol.toStringTag, w = g ? Symbol() : "@";
    function b() {
        this[w] = {};
    }
    var O, S = b.prototype;
    function x(e) {
        return e.id;
    }
    function E(e, t, n) {
        if (e.onload(n, t.id, t.d && t.d.map(x)), n) throw n;
    }
    S.patches = {}, S.patches.common = m, S.prepareImport = function() {}, S.import = function(t, n) {
        var r = this;
        return Promise.resolve(r.prepareImport()).then(function() {
            return r.resolve(t, n);
        }).then(function(t) {
            var n = function t(n, r, i) {
                var o = n[w][r];
                if (o) return o;
                var u = [], s = Object.create(null);
                y && Object.defineProperty(s, y, {
                    value: "Module"
                });
                var c = Promise.resolve().then(function() {
                    return n.instantiate(r, i);
                }).then(function(t) {
                    if (!t) throw Error("Module " + r + " did not instantiate");
                    var i = t[1](function(t, n) {
                        o.h = !0;
                        var r = !1;
                        if ("object" != (0, e.default)(t)) t in s && s[t] === n || (s[t] = n, r = !0); else {
                            for (var i in t) {
                                var c = t[i];
                                i in s && s[i] === c || (s[i] = c, r = !0);
                            }
                            t.__esModule && (s.__esModule = t.__esModule);
                        }
                        if (r) for (var a = 0; a < u.length; a++) u[a](s);
                        return n;
                    }, 2 === t[1].length ? {
                        import: function(e) {
                            return n.import(e, r);
                        },
                        meta: n.createContext(r)
                    } : void 0);
                    return o.e = i.execute || function() {}, [ t[0], i.setters || [] ];
                }), a = (c = c.catch(function(e) {
                    E(n, o, e);
                })).then(function(e) {
                    return Promise.all(e[0].map(function(i, o) {
                        var u = e[1][o];
                        return Promise.resolve(n.resolve(i, r)).then(function(e) {
                            var i = t(n, e, r);
                            return Promise.resolve(i.I).then(function() {
                                return u && (i.i.push(u), !i.h && i.I || u(i.n)), i;
                            });
                        });
                    })).then(function(e) {
                        o.d = e;
                    });
                });
                return a.catch(function(e) {
                    o.e = null, o.er = e;
                }), o = n[w][r] = {
                    id: r,
                    i: u,
                    n: s,
                    I: c,
                    L: a,
                    h: !1,
                    d: void 0,
                    e: void 0,
                    er: void 0,
                    E: void 0,
                    C: void 0
                };
            }(r, t);
            return n.C || function(e, t) {
                return t.C = function e(t, n, r) {
                    if (!r[n.id]) return r[n.id] = !0, Promise.resolve(n.L).then(function() {
                        return Promise.all(n.d.map(function(n) {
                            return e(t, n, r);
                        }));
                    });
                }(e, t, {}).then(function() {
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
                                    u && (u.catch(function(e) {
                                        E(t, n, e);
                                    }), (i = i || []).push(u));
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    E(t, n, e);
                                }
                            }), i ? Promise.all(i).then(o) : o();
                        }
                        function o() {
                            try {
                                var e = n.e.call(P);
                                if (e) return e = e.then(function() {
                                    n.C = n.n, n.E = null, E(t, n, null);
                                }, function(e) {
                                    E(t, n, e);
                                }), n.E = n.E || e;
                                n.C = n.n, E(t, n, null);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                throw E(t, n, e), n.er = e, e;
                            } finally {
                                n.L = n.I = void 0, n.e = null;
                            }
                        }
                    }(e, t, {});
                }).then(function() {
                    return t.n;
                });
            }(r, n);
        });
    }, S.createContext = function(e) {
        return {
            url: e
        };
    }, S.onload = function() {}, S.register = function(e, t) {
        O = [ e, t ];
    }, S.getRegister = function() {
        var e = O;
        return O = void 0, e;
    };
    var P = Object.freeze(Object.create(null));
    i.System = new b(), S.patches.importMap = {
        imports: {},
        scopes: {}
    }, S.resolve = function(e, n) {
        return n = n || t, v(S.patches.importMap, c(e, n) || e, n) || function(e, t) {
            throw Error("Unable to resolve specifier '" + e + (t ? "' from " + t : "'"));
        }(e, n);
    };
    var j, I, M = S.register;
    function R() {
        Array.prototype.forEach.call(document.querySelectorAll("script[type=systemjs-module]"), function(e) {
            e.src && System.import("import:" === e.src.slice(0, 7) ? e.src.slice(7) : a(e.src, t));
        });
    }
    S.register = function(e, t) {
        M.call(this, e, t);
    }, S.createScript = function(e) {
        var t = document.createElement("script");
        return t.charset = "utf-8", t.async = !0, t.crossOrigin = "anonymous", t.src = e, 
        t;
    }, r && window.addEventListener("error", function(e) {
        j = e.filename, I = e.error;
    }), S.instantiate = function(e, t) {
        var n = this;
        return new Promise(function(r, i) {
            var o = S.createScript(e);
            o.addEventListener("error", function() {
                i(Error("Error loading " + e + (t ? " from " + t : "")));
            }), o.addEventListener("load", function() {
                document.head.removeChild(o), j === e ? i(I) : r(n.getRegister());
            }), document.head.appendChild(o);
        });
    }, r && (window.addEventListener("DOMContentLoaded", R), R()), n && "function" == typeof importScripts && (S.instantiate = function(e) {
        var t = this;
        return new Promise(function(n, r) {
            try {
                importScripts(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                r(e);
            }
            n(t.getRegister());
        });
    }), function(e) {
        var t, n, r, i = e.System.constructor.prototype, o = -1 !== navigator.userAgent.indexOf("Trident"), u = i.import;
        i.import = function(i, s) {
            return function() {
                for (var i in t = n = void 0, e) !e.hasOwnProperty(i) || !isNaN(i) && i < e.length || o && e[i] && e[i].parent === window || (t ? n || (n = i) : t = i, 
                r = i);
            }(), u.call(this, i, s);
        };
        var s = [ [], function() {
            return {};
        } ], c = i.getRegister;
        i.getRegister = function() {
            var i = c.call(this);
            if (i) return i;
            var u, a = function() {
                var i, u = 0;
                for (var s in e) if (!(!e.hasOwnProperty(s) || !isNaN(s) && s < e.length || o && e[s] && e[s].parent === window)) {
                    if (0 === u && s !== t || 1 === u && s !== n) return s;
                    u++, i = s;
                }
                if (i !== r) return i;
            }();
            if (!a) return s;
            try {
                u = e[a];
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return s;
            }
            return [ [], function(e) {
                return {
                    execute: function() {
                        e({
                            default: u,
                            __useDefault: !0
                        });
                    }
                };
            } ];
        };
    }("undefined" != typeof self ? self : window), function(e) {
        var t = ("undefined" != typeof self ? self : window).System.constructor.prototype, n = t.instantiate, r = /\.(css|html|json|wasm)$/;
        t.shouldFetch = function(e) {
            var t = e.split("?")[0].split("#")[0];
            return t.slice(t.lastIndexOf(".")).match(r);
        }, t.fetch = function(e) {
            return fetch(e);
        }, t.instantiate = function(e, t) {
            var r = this;
            return this.shouldFetch(e) ? this.fetch(e).then(function(n) {
                if (!n.ok) throw Error(n.status + " " + n.statusText + ", loading " + e + (t ? " from " + t : ""));
                var i = n.headers.get("content-type");
                if (i.match(/^(text|application)\/(x-)?javascript(;|$)/)) return n.text().then(function(e) {
                    return (0, eval)(e), r.getRegister();
                });
                if (i.match(/^application\/json(;|$)/)) return n.text().then(function(e) {
                    return [ [], function(t) {
                        return {
                            execute: function() {
                                t("default", JSON.parse(e));
                            }
                        };
                    } ];
                });
                if (i.match(/^text\/css(;|$)/)) return n.text().then(function(e) {
                    return [ [], function(t) {
                        return {
                            execute: function() {
                                var n = new CSSStyleSheet();
                                n.replaceSync(e), t("default", n);
                            }
                        };
                    } ];
                });
                if (i.match(/^application\/wasm(;|$)/)) return (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(n) : n.arrayBuffer().then(WebAssembly.compile)).then(function(e) {
                    var t = [], n = [], r = {};
                    return WebAssembly.Module.imports && WebAssembly.Module.imports(e).forEach(function(e) {
                        var i = e.module;
                        -1 === t.indexOf(i) && (t.push(i), n.push(function(e) {
                            r[i] = e;
                        }));
                    }), [ t, function(t) {
                        return {
                            setters: n,
                            execute: function() {
                                return WebAssembly.instantiate(e, r).then(function(e) {
                                    t(e.exports);
                                });
                            }
                        };
                    } ];
                });
                throw new Error('Unknown module type "' + i + '"');
            }) : n.apply(this, arguments);
        };
    }();
    var C = "undefined" != typeof Symbol && Symbol.toStringTag;
    S.get = function(e) {
        var t = this[w][e];
        if (t && null === t.e && !t.E) return t.er ? null : t.n;
    }, S.set = function(e, t) {
        var n;
        C && "Module" === t[C] ? n = t : (n = Object.assign(Object.create(null), t), C && Object.defineProperty(n, C, {
            value: "Module"
        }));
        var r = Promise.resolve(n), i = this[w][e] || (this[w][e] = {
            id: e,
            i: [],
            h: !1,
            d: [],
            e: null,
            er: void 0,
            E: void 0
        });
        return !i.e && !i.E && (Object.assign(i, {
            n: n,
            I: void 0,
            L: void 0,
            C: r
        }), n);
    }, S.has = function(e) {
        return !!this[w][e];
    }, S.delete = function(e) {
        var t = this[w], n = t[e];
        if (!n || null !== n.e || n.E) return !1;
        var r = n.i;
        return n.d && n.d.forEach(function(e) {
            var t = e.i.indexOf(n);
            -1 !== t && e.i.splice(t, 1);
        }), delete t[e], function() {
            var n = t[e];
            if (!n || !r || null !== n.e || n.E) return !1;
            r.forEach(function(e) {
                n.i.push(e), e(n.n);
            }), r = null;
        };
    };
    var A = "undefined" != typeof Symbol && Symbol.iterator;
    S.entries = function() {
        var e, t, n = this, r = Object.keys(n[w]), i = 0, o = {
            next: function() {
                for (;void 0 !== (t = r[i++]) && void 0 === (e = n.get(t)); ) ;
                return {
                    done: void 0 === t,
                    value: void 0 !== t && [ t, e ]
                };
            }
        };
        return o[A] = function() {
            return this;
        }, o;
    };
})(), ("undefined" != typeof self ? self : window).System.constructor.prototype.createScript = function(e, t) {
    throw new Error("You are trying to load " + e + " from " + t + ". However your platform does not support loading script through DOM.");
}, function(e) {
    var t = ("undefined" != typeof self ? self : window).System;
    u(t);
    var n, r = t.constructor.prototype, i = t.constructor, o = function() {
        i.call(this), u(this);
    };
    function u(e) {
        e.registerRegistry = Object.create(null);
    }
    o.prototype = r, t.constructor = o;
    var s = r.register;
    r.register = function(e, t, r) {
        if ("string" != typeof e) return s.apply(this, arguments);
        var i = [ t, r ];
        return this.registerRegistry[e] = i, n || (n = i, Promise.resolve().then(function() {
            n = null;
        })), s.apply(this, arguments);
    };
    var c = r.resolve;
    r.resolve = function(e, t) {
        try {
            return c.call(this, e, t);
        } catch (t) {
            //t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            if (e in this.registerRegistry) return e;
            throw t;
        }
    };
    var a = r.instantiate;
    r.instantiate = function(e, t) {
        var n = this.registerRegistry[e];
        return n ? (this.registerRegistry[e] = null, n) : a.call(this, e, t);
    };
    var f = r.getRegister;
    r.getRegister = function() {
        var e = f.call(this), t = n || e;
        return n = null, t;
    };
}();