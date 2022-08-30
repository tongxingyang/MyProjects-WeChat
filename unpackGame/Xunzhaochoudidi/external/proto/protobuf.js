var _typeof2 = require("../../@babel/runtime/helpers/typeof");

!function(undefined) {
    "use strict";
    !function(e, t, r) {
        var n = function $require(r) {
            var n = t[r];
            return n || e[r][0].call(n = t[r] = {
                exports: {}
            }, $require, n, n.exports), n.exports;
        }(r[0]);
        n.util.global.protobuf = n, "function" == typeof define && define.amd && define([ "long" ], function(e) {
            return e && e.isLong && (n.util.Long = e, n.configure()), n;
        }), "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && module && module.exports && (module.exports = n);
    }({
        1: [ function(e, t, r) {
            t.exports = function(e, t) {
                var r = new Array(arguments.length - 1), n = 0, i = 2, o = !0;
                for (;i < arguments.length; ) {
                    r[n++] = arguments[i++];
                }
                return new Promise(function(i, s) {
                    r[n] = function(e) {
                        if (o) if (o = !1, e) s(e); else {
                            for (var t = new Array(arguments.length - 1), r = 0; r < t.length; ) {
                                t[r++] = arguments[r];
                            }
                            i.apply(null, t);
                        }
                    };
                    try {
                        e.apply(t || null, r);
                    } catch (e) {
                        e = null;//.handleException(e);
                        o && (o = !1, s(e));
                    }
                });
            };
        }, {} ],
        2: [ function(e, t, r) {
            var n = r;
            n.length = function(e) {
                var t = e.length;
                if (!t) return 0;
                for (var r = 0; --t % 4 > 1 && "=" === e.charAt(t); ) {
                    ++r;
                }
                return Math.ceil(3 * e.length) / 4 - r;
            };
            for (var i = new Array(64), o = new Array(123), s = 0; s < 64; ) {
                o[i[s] = s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : s - 59 | 43] = s++;
            }
            n.encode = function(e, t, r) {
                for (var n, o = null, s = [], a = 0, f = 0; t < r; ) {
                    var u = e[t++];
                    switch (f) {
                      case 0:
                        s[a++] = i[u >> 2], n = (3 & u) << 4, f = 1;
                        break;

                      case 1:
                        s[a++] = i[n | u >> 4], n = (15 & u) << 2, f = 2;
                        break;

                      case 2:
                        s[a++] = i[n | u >> 6], s[a++] = i[63 & u], f = 0;
                    }
                    a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), a = 0);
                }
                return f && (s[a++] = i[n], s[a++] = 61, 1 === f && (s[a++] = 61)), o ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))), 
                o.join("")) : String.fromCharCode.apply(String, s.slice(0, a));
            };
            n.decode = function(e, t, r) {
                for (var n, i = r, s = 0, a = 0; a < e.length; ) {
                    var f = e.charCodeAt(a++);
                    if (61 === f && s > 1) break;
                    if ((f = o[f]) === undefined) throw Error("invalid encoding");
                    switch (s) {
                      case 0:
                        n = f, s = 1;
                        break;

                      case 1:
                        t[r++] = n << 2 | (48 & f) >> 4, n = f, s = 2;
                        break;

                      case 2:
                        t[r++] = (15 & n) << 4 | (60 & f) >> 2, n = f, s = 3;
                        break;

                      case 3:
                        t[r++] = (3 & n) << 6 | f, s = 0;
                    }
                }
                if (1 === s) throw Error("invalid encoding");
                return r - i;
            }, n.test = function(e) {
                return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e);
            };
        }, {} ],
        3: [ function(e, t, r) {
            function codegen(e, t) {
                "string" == typeof e && (t = e, e = undefined);
                var r = [];
                function Codegen(e) {
                    if ("string" != typeof e) {
                        var t = toString();
                        if (codegen.verbose && console.log("codegen: " + t), t = "return " + t, e) {
                            for (var n = Object.keys(e), i = new Array(n.length + 1), o = new Array(n.length), s = 0; s < n.length; ) {
                                i[s] = n[s], o[s] = e[n[s++]];
                            }
                            return i[s] = t, Function.apply(null, i).apply(null, o);
                        }
                        return Function(t)();
                    }
                    for (var a = new Array(arguments.length - 1), f = 0; f < a.length; ) {
                        a[f] = arguments[++f];
                    }
                    if (f = 0, e = e.replace(/%([%dfijs])/g, function(e, t) {
                        var r = a[f++];
                        switch (t) {
                          case "d":
                          case "f":
                            return String(Number(r));

                          case "i":
                            return String(Math.floor(r));

                          case "j":
                            return JSON.stringify(r);

                          case "s":
                            return String(r);
                        }
                        return "%";
                    }), f !== a.length) throw Error("parameter count mismatch");
                    return r.push(e), Codegen;
                }
                function toString(n) {
                    return "function " + (n || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + r.join("\n  ") + "\n}";
                }
                return Codegen.toString = toString, Codegen;
            }
            t.exports = codegen, codegen.verbose = !1;
        }, {} ],
        4: [ function(e, t, r) {
            function EventEmitter() {
                this._listeners = {};
            }
            t.exports = EventEmitter, EventEmitter.prototype.on = function(e, t, r) {
                return (this._listeners[e] || (this._listeners[e] = [])).push({
                    fn: t,
                    ctx: r || this
                }), this;
            }, EventEmitter.prototype.off = function(e, t) {
                if (e === undefined) this._listeners = {}; else if (t === undefined) this._listeners[e] = []; else for (var r = this._listeners[e], n = 0; n < r.length; ) {
                    r[n].fn === t ? r.splice(n, 1) : ++n;
                }
                return this;
            }, EventEmitter.prototype.emit = function(e) {
                var t = this._listeners[e];
                if (t) {
                    for (var r = [], n = 1; n < arguments.length; ) {
                        r.push(arguments[n++]);
                    }
                    for (n = 0; n < t.length; ) {
                        t[n].fn.apply(t[n++].ctx, r);
                    }
                }
                return this;
            };
        }, {} ],
        5: [ function(e, t, r) {
            t.exports = fetch;
            var n = e(1), i = e(7)("fs");
            function fetch(e, t, r) {
                return "function" == typeof t ? (r = t, t = {}) : t || (t = {}), r ? !t.xhr && i && i.readFile ? i.readFile(e, function(n, i) {
                    return n && "undefined" != typeof XMLHttpRequest ? fetch.xhr(e, t, r) : n ? r(n) : r(null, t.binary ? i : i.toString("utf8"));
                }) : fetch.xhr(e, t, r) : n(fetch, this, e, t);
            }
            fetch.xhr = function(e, t, r) {
                var n = new XMLHttpRequest();
                n.onreadystatechange = function() {
                    if (4 !== n.readyState) return undefined;
                    if (0 !== n.status && 200 !== n.status) return r(Error("status " + n.status));
                    if (t.binary) {
                        var e = n.response;
                        if (!e) {
                            e = [];
                            for (var i = 0; i < n.responseText.length; ++i) {
                                e.push(255 & n.responseText.charCodeAt(i));
                            }
                        }
                        return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e);
                    }
                    return r(null, n.responseText);
                }, t.binary && ("overrideMimeType" in n && n.overrideMimeType("text/plain; charset=x-user-defined"), 
                n.responseType = "arraybuffer"), n.open("GET", e), n.send();
            };
        }, {
            1: 1,
            7: 7
        } ],
        6: [ function(e, t, r) {
            function factory(e) {
                return "undefined" != typeof Float32Array ? function() {
                    var t = new Float32Array([ -0 ]), r = new Uint8Array(t.buffer), n = 128 === r[3];
                    function writeFloat_f32_cpy(e, n, i) {
                        t[0] = e, n[i] = r[0], n[i + 1] = r[1], n[i + 2] = r[2], n[i + 3] = r[3];
                    }
                    function writeFloat_f32_rev(e, n, i) {
                        t[0] = e, n[i] = r[3], n[i + 1] = r[2], n[i + 2] = r[1], n[i + 3] = r[0];
                    }
                    function readFloat_f32_cpy(e, n) {
                        return r[0] = e[n], r[1] = e[n + 1], r[2] = e[n + 2], r[3] = e[n + 3], t[0];
                    }
                    function readFloat_f32_rev(e, n) {
                        return r[3] = e[n], r[2] = e[n + 1], r[1] = e[n + 2], r[0] = e[n + 3], t[0];
                    }
                    e.writeFloatLE = n ? writeFloat_f32_cpy : writeFloat_f32_rev, e.writeFloatBE = n ? writeFloat_f32_rev : writeFloat_f32_cpy, 
                    e.readFloatLE = n ? readFloat_f32_cpy : readFloat_f32_rev, e.readFloatBE = n ? readFloat_f32_rev : readFloat_f32_cpy;
                }() : function() {
                    function writeFloat_ieee754(e, t, r, n) {
                        var i = t < 0 ? 1 : 0;
                        if (i && (t = -t), 0 === t) e(1 / t > 0 ? 0 : 2147483648, r, n); else if (isNaN(t)) e(2143289344, r, n); else if (t > 3.4028234663852886e38) e((i << 31 | 2139095040) >>> 0, r, n); else if (t < 1.1754943508222875e-38) e((i << 31 | Math.round(t / 1.401298464324817e-45)) >>> 0, r, n); else {
                            var o = Math.floor(Math.log(t) / Math.LN2);
                            e((i << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, r, n);
                        }
                    }
                    function readFloat_ieee754(e, t, r) {
                        var n = e(t, r), i = 2 * (n >> 31) + 1, o = n >>> 23 & 255, s = 8388607 & n;
                        return 255 === o ? s ? NaN : i * (1 / 0) : 0 === o ? 1.401298464324817e-45 * i * s : i * Math.pow(2, o - 150) * (s + 8388608);
                    }
                    e.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE), e.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE), 
                    e.readFloatLE = readFloat_ieee754.bind(null, readUintLE), e.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
                }(), "undefined" != typeof Float64Array ? function() {
                    var t = new Float64Array([ -0 ]), r = new Uint8Array(t.buffer), n = 128 === r[7];
                    function writeDouble_f64_cpy(e, n, i) {
                        t[0] = e, n[i] = r[0], n[i + 1] = r[1], n[i + 2] = r[2], n[i + 3] = r[3], n[i + 4] = r[4], 
                        n[i + 5] = r[5], n[i + 6] = r[6], n[i + 7] = r[7];
                    }
                    function writeDouble_f64_rev(e, n, i) {
                        t[0] = e, n[i] = r[7], n[i + 1] = r[6], n[i + 2] = r[5], n[i + 3] = r[4], n[i + 4] = r[3], 
                        n[i + 5] = r[2], n[i + 6] = r[1], n[i + 7] = r[0];
                    }
                    function readDouble_f64_cpy(e, n) {
                        return r[0] = e[n], r[1] = e[n + 1], r[2] = e[n + 2], r[3] = e[n + 3], r[4] = e[n + 4], 
                        r[5] = e[n + 5], r[6] = e[n + 6], r[7] = e[n + 7], t[0];
                    }
                    function readDouble_f64_rev(e, n) {
                        return r[7] = e[n], r[6] = e[n + 1], r[5] = e[n + 2], r[4] = e[n + 3], r[3] = e[n + 4], 
                        r[2] = e[n + 5], r[1] = e[n + 6], r[0] = e[n + 7], t[0];
                    }
                    e.writeDoubleLE = n ? writeDouble_f64_cpy : writeDouble_f64_rev, e.writeDoubleBE = n ? writeDouble_f64_rev : writeDouble_f64_cpy, 
                    e.readDoubleLE = n ? readDouble_f64_cpy : readDouble_f64_rev, e.readDoubleBE = n ? readDouble_f64_rev : readDouble_f64_cpy;
                }() : function() {
                    function writeDouble_ieee754(e, t, r, n, i, o) {
                        var s = n < 0 ? 1 : 0;
                        if (s && (n = -n), 0 === n) e(0, i, o + t), e(1 / n > 0 ? 0 : 2147483648, i, o + r); else if (isNaN(n)) e(0, i, o + t), 
                        e(2146959360, i, o + r); else if (n > 1.7976931348623157e308) e(0, i, o + t), e((s << 31 | 2146435072) >>> 0, i, o + r); else {
                            var a;
                            if (n < 2.2250738585072014e-308) e((a = n / 5e-324) >>> 0, i, o + t), e((s << 31 | a / 4294967296) >>> 0, i, o + r); else {
                                var f = Math.floor(Math.log(n) / Math.LN2);
                                1024 === f && (f = 1023), e(4503599627370496 * (a = n * Math.pow(2, -f)) >>> 0, i, o + t), 
                                e((s << 31 | f + 1023 << 20 | 1048576 * a & 1048575) >>> 0, i, o + r);
                            }
                        }
                    }
                    function readDouble_ieee754(e, t, r, n, i) {
                        var o = e(n, i + t), s = e(n, i + r), a = 2 * (s >> 31) + 1, f = s >>> 20 & 2047, u = 4294967296 * (1048575 & s) + o;
                        return 2047 === f ? u ? NaN : a * (1 / 0) : 0 === f ? 5e-324 * a * u : a * Math.pow(2, f - 1075) * (u + 4503599627370496);
                    }
                    e.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4), e.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0), 
                    e.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4), e.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
                }(), e;
            }
            function writeUintLE(e, t, r) {
                t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24;
            }
            function writeUintBE(e, t, r) {
                t[r] = e >>> 24, t[r + 1] = e >>> 16 & 255, t[r + 2] = e >>> 8 & 255, t[r + 3] = 255 & e;
            }
            function readUintLE(e, t) {
                return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
            }
            function readUintBE(e, t) {
                return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
            }
            t.exports = factory(factory);
        }, {} ],
        7: [ function(require, module, exports) {
            function inquire(moduleName) {
                try {
                    var mod = eval("quire".replace(/^/, "re"))(moduleName);
                    if (mod && (mod.length || Object.keys(mod).length)) return mod;
                } catch (e) {}
                return null;
            }
            module.exports = inquire;
        }, {} ],
        8: [ function(e, t, r) {
            var n = r, i = n.isAbsolute = function(e) {
                return /^(?:\/|\w+:)/.test(e);
            }, o = n.normalize = function(e) {
                var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), r = i(e), n = "";
                r && (n = t.shift() + "/");
                for (var o = 0; o < t.length; ) {
                    ".." === t[o] ? o > 0 && ".." !== t[o - 1] ? t.splice(--o, 2) : r ? t.splice(o, 1) : ++o : "." === t[o] ? t.splice(o, 1) : ++o;
                }
                return n + t.join("/");
            };
            n.resolve = function(e, t, r) {
                return r || (t = o(t)), i(t) ? t : (r || (e = o(e)), (e = e.replace(/(?:\/|^)[^\/]+$/, "")).length ? o(e + "/" + t) : t);
            };
        }, {} ],
        9: [ function(e, t, r) {
            t.exports = function(e, t, r) {
                var n = r || 8192, i = n >>> 1, o = null, s = n;
                return function(r) {
                    if (r < 1 || r > i) return e(r);
                    s + r > n && (o = e(n), s = 0);
                    var a = t.call(o, s, s += r);
                    return 7 & s && (s = 1 + (7 | s)), a;
                };
            };
        }, {} ],
        10: [ function(e, t, r) {
            var n = r;
            n.length = function(e) {
                for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
                    (r = e.charCodeAt(n)) < 128 ? t += 1 : r < 2048 ? t += 2 : 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(n + 1)) ? (++n, 
                    t += 4) : t += 3;
                }
                return t;
            }, n.read = function(e, t, r) {
                if (r - t < 1) return "";
                for (var n, i = null, o = [], s = 0; t < r; ) {
                    (n = e[t++]) < 128 ? o[s++] = n : n > 191 && n < 224 ? o[s++] = (31 & n) << 6 | 63 & e[t++] : n > 239 && n < 365 ? (n = ((7 & n) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, 
                    o[s++] = 55296 + (n >> 10), o[s++] = 56320 + (1023 & n)) : o[s++] = (15 & n) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], 
                    s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), s = 0);
                }
                return i ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, s));
            }, n.write = function(e, t, r) {
                for (var n, i, o = r, s = 0; s < e.length; ++s) {
                    (n = e.charCodeAt(s)) < 128 ? t[r++] = n : n < 2048 ? (t[r++] = n >> 6 | 192, t[r++] = 63 & n | 128) : 55296 == (64512 & n) && 56320 == (64512 & (i = e.charCodeAt(s + 1))) ? (n = 65536 + ((1023 & n) << 10) + (1023 & i), 
                    ++s, t[r++] = n >> 18 | 240, t[r++] = n >> 12 & 63 | 128, t[r++] = n >> 6 & 63 | 128, 
                    t[r++] = 63 & n | 128) : (t[r++] = n >> 12 | 224, t[r++] = n >> 6 & 63 | 128, t[r++] = 63 & n | 128);
                }
                return r - o;
            };
        }, {} ],
        11: [ function(e, t, r) {
            t.exports = common;
            var n, i = /\/|\./;
            function common(e, t) {
                i.test(e) || (e = "google/protobuf/" + e + ".proto", t = {
                    nested: {
                        google: {
                            nested: {
                                protobuf: {
                                    nested: t
                                }
                            }
                        }
                    }
                }), common[e] = t;
            }
            common("any", {
                Any: {
                    fields: {
                        type_url: {
                            type: "string",
                            id: 1
                        },
                        value: {
                            type: "bytes",
                            id: 2
                        }
                    }
                }
            }), common("duration", {
                Duration: n = {
                    fields: {
                        seconds: {
                            type: "int64",
                            id: 1
                        },
                        nanos: {
                            type: "int32",
                            id: 2
                        }
                    }
                }
            }), common("timestamp", {
                Timestamp: n
            }), common("empty", {
                Empty: {
                    fields: {}
                }
            }), common("struct", {
                Struct: {
                    fields: {
                        fields: {
                            keyType: "string",
                            type: "Value",
                            id: 1
                        }
                    }
                },
                Value: {
                    oneofs: {
                        kind: {
                            oneof: [ "nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue" ]
                        }
                    },
                    fields: {
                        nullValue: {
                            type: "NullValue",
                            id: 1
                        },
                        numberValue: {
                            type: "double",
                            id: 2
                        },
                        stringValue: {
                            type: "string",
                            id: 3
                        },
                        boolValue: {
                            type: "bool",
                            id: 4
                        },
                        structValue: {
                            type: "Struct",
                            id: 5
                        },
                        listValue: {
                            type: "ListValue",
                            id: 6
                        }
                    }
                },
                NullValue: {
                    values: {
                        NULL_VALUE: 0
                    }
                },
                ListValue: {
                    fields: {
                        values: {
                            rule: "repeated",
                            type: "Value",
                            id: 1
                        }
                    }
                }
            }), common("wrappers", {
                DoubleValue: {
                    fields: {
                        value: {
                            type: "double",
                            id: 1
                        }
                    }
                },
                FloatValue: {
                    fields: {
                        value: {
                            type: "float",
                            id: 1
                        }
                    }
                },
                Int64Value: {
                    fields: {
                        value: {
                            type: "int64",
                            id: 1
                        }
                    }
                },
                UInt64Value: {
                    fields: {
                        value: {
                            type: "uint64",
                            id: 1
                        }
                    }
                },
                Int32Value: {
                    fields: {
                        value: {
                            type: "int32",
                            id: 1
                        }
                    }
                },
                UInt32Value: {
                    fields: {
                        value: {
                            type: "uint32",
                            id: 1
                        }
                    }
                },
                BoolValue: {
                    fields: {
                        value: {
                            type: "bool",
                            id: 1
                        }
                    }
                },
                StringValue: {
                    fields: {
                        value: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                BytesValue: {
                    fields: {
                        value: {
                            type: "bytes",
                            id: 1
                        }
                    }
                }
            }), common("field_mask", {
                FieldMask: {
                    fields: {
                        paths: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                        }
                    }
                }
            }), common.get = function(e) {
                return common[e] || null;
            };
        }, {} ],
        12: [ function(e, t, r) {
            var n = r, i = e(15), o = e(37);
            function genValuePartial_fromObject(e, t, r, n) {
                if (t.resolvedType) {
                    if (t.resolvedType instanceof i) {
                        e("switch(d%s){", n);
                        for (var o = t.resolvedType.values, s = Object.keys(o), a = 0; a < s.length; ++a) {
                            t.repeated && o[s[a]] === t.typeDefault && e("default:"), e("case%j:", s[a])("case %i:", o[s[a]])("m%s=%j", n, o[s[a]])("break");
                        }
                        e("}");
                    } else e('if(typeof d%s!=="object")', n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, r, n);
                } else {
                    var f = !1;
                    switch (t.type) {
                      case "double":
                      case "float":
                        e("m%s=Number(d%s)", n, n);
                        break;

                      case "uint32":
                      case "fixed32":
                        e("m%s=d%s>>>0", n, n);
                        break;

                      case "int32":
                      case "sint32":
                      case "sfixed32":
                        e("m%s=d%s|0", n, n);
                        break;

                      case "uint64":
                        f = !0;

                      case "int64":
                      case "sint64":
                      case "fixed64":
                      case "sfixed64":
                        e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, f)('else if(typeof d%s==="string")', n)("m%s=parseInt(d%s,10)", n, n)('else if(typeof d%s==="number")', n)("m%s=d%s", n, n)('else if(typeof d%s==="object")', n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, f ? "true" : "");
                        break;

                      case "bytes":
                        e('if(typeof d%s==="string")', n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length)", n)("m%s=d%s", n, n);
                        break;

                      case "string":
                        e("m%s=String(d%s)", n, n);
                        break;

                      case "bool":
                        e("m%s=Boolean(d%s)", n, n);
                    }
                }
                return e;
            }
            function genValuePartial_toObject(e, t, r, n) {
                if (t.resolvedType) t.resolvedType instanceof i ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", n, r, n, n) : e("d%s=types[%i].toObject(m%s,o)", n, r, n); else {
                    var o = !1;
                    switch (t.type) {
                      case "double":
                      case "float":
                        e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                        break;

                      case "uint64":
                        o = !0;

                      case "int64":
                      case "sint64":
                      case "fixed64":
                      case "sfixed64":
                        e('if(typeof m%s==="number")', n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, o ? "true" : "", n);
                        break;

                      case "bytes":
                        e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
                        break;

                      default:
                        e("d%s=m%s", n, n);
                    }
                }
                return e;
            }
            n.fromObject = function(e) {
                var t = e.fieldsArray, r = o.codegen([ "d" ], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                if (!t.length) return r("return new this.ctor");
                r("var m=new this.ctor");
                for (var n = 0; n < t.length; ++n) {
                    var s = t[n].resolve(), a = o.safeProp(s.name);
                    s.map ? (r("if(d%s){", a)('if(typeof d%s!=="object")', a)("throw TypeError(%j)", s.fullName + ": object expected")("m%s={}", a)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", a), 
                    genValuePartial_fromObject(r, s, n, a + "[ks[i]]")("}")("}")) : s.repeated ? (r("if(d%s){", a)("if(!Array.isArray(d%s))", a)("throw TypeError(%j)", s.fullName + ": array expected")("m%s=[]", a)("for(var i=0;i<d%s.length;++i){", a), 
                    genValuePartial_fromObject(r, s, n, a + "[i]")("}")("}")) : (s.resolvedType instanceof i || r("if(d%s!=null){", a), 
                    genValuePartial_fromObject(r, s, n, a), s.resolvedType instanceof i || r("}"));
                }
                return r("return m");
            }, n.toObject = function(e) {
                var t = e.fieldsArray.slice().sort(o.compareFieldsById);
                if (!t.length) return o.codegen()("return {}");
                for (var r = o.codegen([ "m", "o" ], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), n = [], s = [], a = [], f = 0; f < t.length; ++f) {
                    t[f].partOf || (t[f].resolve().repeated ? n : t[f].map ? s : a).push(t[f]);
                }
                if (n.length) {
                    for (r("if(o.arrays||o.defaults){"), f = 0; f < n.length; ++f) {
                        r("d%s=[]", o.safeProp(n[f].name));
                    }
                    r("}");
                }
                if (s.length) {
                    for (r("if(o.objects||o.defaults){"), f = 0; f < s.length; ++f) {
                        r("d%s={}", o.safeProp(s[f].name));
                    }
                    r("}");
                }
                if (a.length) {
                    for (r("if(o.defaults){"), f = 0; f < a.length; ++f) {
                        var u = a[f], l = o.safeProp(u.name);
                        if (u.resolvedType instanceof i) r("d%s=o.enums===String?%j:%j", l, u.resolvedType.valuesById[u.typeDefault], u.typeDefault); else if (u.long) r("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", l)("}else")("d%s=o.longs===String?%j:%i", l, u.typeDefault.toString(), u.typeDefault.toNumber()); else if (u.bytes) {
                            var p = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                            r("if(o.bytes===String)d%s=%j", l, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", l, p)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", l, l)("}");
                        } else r("d%s=%j", l, u.typeDefault);
                    }
                    r("}");
                }
                var c = !1;
                for (f = 0; f < t.length; ++f) {
                    u = t[f];
                    var d = e._fieldsArray.indexOf(u);
                    l = o.safeProp(u.name);
                    u.map ? (c || (c = !0, r("var ks2")), r("if(m%s&&(ks2=Object.keys(m%s)).length){", l, l)("d%s={}", l)("for(var j=0;j<ks2.length;++j){"), 
                    genValuePartial_toObject(r, u, d, l + "[ks2[j]]")("}")) : u.repeated ? (r("if(m%s&&m%s.length){", l, l)("d%s=[]", l)("for(var j=0;j<m%s.length;++j){", l), 
                    genValuePartial_toObject(r, u, d, l + "[j]")("}")) : (r("if(m%s!=null&&m.hasOwnProperty(%j)){", l, u.name), 
                    genValuePartial_toObject(r, u, d, l), u.partOf && r("if(o.oneofs)")("d%s=%j", o.safeProp(u.partOf.name), u.name)), 
                    r("}");
                }
                return r("return d");
            };
        }, {
            15: 15,
            37: 37
        } ],
        13: [ function(e, t, r) {
            t.exports = function(e) {
                var t = o.codegen([ "r", "l" ], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function(e) {
                    return e.map;
                }).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
                e.group && t("if((t&7)===4)")("break");
                t("switch(t>>>3){");
                for (var r = 0; r < e.fieldsArray.length; ++r) {
                    var s = e._fieldsArray[r].resolve(), a = s.resolvedType instanceof n ? "int32" : s.type, f = "m" + o.safeProp(s.name);
                    t("case %i:", s.id), s.map ? (t("r.skip().pos++")("if(%s===util.emptyObject)", f)("%s={}", f)("k=r.%s()", s.keyType)("r.pos++"), 
                    i.long[s.keyType] !== undefined ? i.basic[a] === undefined ? t('%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())', f, r) : t('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()', f, a) : i.basic[a] === undefined ? t("%s[k]=types[%i].decode(r,r.uint32())", f, r) : t("%s[k]=r.%s()", f, a)) : s.repeated ? (t("if(!(%s&&%s.length))", f, f)("%s=[]", f), 
                    i.packed[a] !== undefined && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", f, a)("}else"), 
                    i.basic[a] === undefined ? t(s.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", f, r) : t("%s.push(r.%s())", f, a)) : i.basic[a] === undefined ? t(s.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", f, r) : t("%s=r.%s()", f, a), 
                    t("break");
                }
                for (t("default:")("r.skipType(t&7)")("break")("}")("}"), r = 0; r < e._fieldsArray.length; ++r) {
                    var u = e._fieldsArray[r];
                    u.required && t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", missing(u));
                }
                return t("return m");
            };
            var n = e(15), i = e(36), o = e(37);
            function missing(e) {
                return "missing required '" + e.name + "'";
            }
        }, {
            15: 15,
            36: 36,
            37: 37
        } ],
        14: [ function(e, t, r) {
            t.exports = function(e) {
                for (var t, r = o.codegen([ "m", "w" ], e.name + "$encode")("if(!w)")("w=Writer.create()"), s = e.fieldsArray.slice().sort(o.compareFieldsById), a = 0; a < s.length; ++a) {
                    var f = s[a].resolve(), u = e._fieldsArray.indexOf(f), l = f.resolvedType instanceof n ? "int32" : f.type, p = i.basic[l];
                    t = "m" + o.safeProp(f.name), f.map ? (r("if(%s!=null&&m.hasOwnProperty(%j)){", t, f.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (f.id << 3 | 2) >>> 0, 8 | i.mapKey[f.keyType], f.keyType), 
                    p === undefined ? r("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t) : r(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, l, t), 
                    r("}")("}")) : f.repeated ? (r("if(%s!=null&&%s.length){", t, t), f.packed && i.packed[l] !== undefined ? r("w.uint32(%i).fork()", (f.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", l, t)("w.ldelim()") : (r("for(var i=0;i<%s.length;++i)", t), 
                    p === undefined ? genTypePartial(r, f, u, t + "[i]") : r("w.uint32(%i).%s(%s[i])", (f.id << 3 | p) >>> 0, l, t)), 
                    r("}")) : (f.optional && r("if(%s!=null&&m.hasOwnProperty(%j))", t, f.name), p === undefined ? genTypePartial(r, f, u, t) : r("w.uint32(%i).%s(%s)", (f.id << 3 | p) >>> 0, l, t));
                }
                return r("return w");
            };
            var n = e(15), i = e(36), o = e(37);
            function genTypePartial(e, t, r, n) {
                return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, n, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, n, (t.id << 3 | 2) >>> 0);
            }
        }, {
            15: 15,
            36: 36,
            37: 37
        } ],
        15: [ function(e, t, r) {
            t.exports = Enum;
            var n = e(24);
            ((Enum.prototype = Object.create(n.prototype)).constructor = Enum).className = "Enum";
            var i = e(23), o = e(37);
            function Enum(e, t, r, i, o) {
                if (n.call(this, e, r), t && "object" != _typeof2(t)) throw TypeError("values must be an object");
                if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = i, 
                this.comments = o || {}, this.reserved = undefined, t) for (var s = Object.keys(t), a = 0; a < s.length; ++a) {
                    "number" == typeof t[s[a]] && (this.valuesById[this.values[s[a]] = t[s[a]]] = s[a]);
                }
            }
            Enum.fromJSON = function(e, t) {
                var r = new Enum(e, t.values, t.options, t.comment, t.comments);
                return r.reserved = t.reserved, r;
            }, Enum.prototype.toJSON = function(e) {
                var t = !!e && Boolean(e.keepComments);
                return o.toObject([ "options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined ]);
            }, Enum.prototype.add = function(e, t, r) {
                if (!o.isString(e)) throw TypeError("name must be a string");
                if (!o.isInteger(t)) throw TypeError("id must be an integer");
                if (this.values[e] !== undefined) throw Error("duplicate name '" + e + "' in " + this);
                if (this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);
                if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
                if (this.valuesById[t] !== undefined) {
                    if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);
                    this.values[e] = t;
                } else this.valuesById[this.values[e] = t] = e;
                return this.comments[e] = r || null, this;
            }, Enum.prototype.remove = function(e) {
                if (!o.isString(e)) throw TypeError("name must be a string");
                var t = this.values[e];
                if (null == t) throw Error("name '" + e + "' does not exist in " + this);
                return delete this.valuesById[t], delete this.values[e], delete this.comments[e], 
                this;
            }, Enum.prototype.isReservedId = function(e) {
                return i.isReservedId(this.reserved, e);
            }, Enum.prototype.isReservedName = function(e) {
                return i.isReservedName(this.reserved, e);
            };
        }, {
            23: 23,
            24: 24,
            37: 37
        } ],
        16: [ function(e, t, r) {
            t.exports = Field;
            var n = e(24);
            ((Field.prototype = Object.create(n.prototype)).constructor = Field).className = "Field";
            var i, o = e(15), s = e(36), a = e(37), f = /^required|optional|repeated$/;
            function Field(e, t, r, i, o, u, l) {
                if (a.isObject(i) ? (l = o, u = i, i = o = undefined) : a.isObject(o) && (l = u, 
                u = o, o = undefined), n.call(this, e, u), !a.isInteger(t) || t < 0) throw TypeError("id must be a non-negative integer");
                if (!a.isString(r)) throw TypeError("type must be a string");
                if (i !== undefined && !f.test(i = i.toString().toLowerCase())) throw TypeError("rule must be a string rule");
                if (o !== undefined && !a.isString(o)) throw TypeError("extend must be a string");
                this.rule = i && "optional" !== i ? i : undefined, this.type = r, this.id = t, this.extend = o || undefined, 
                this.required = "required" === i, this.optional = !this.required, this.repeated = "repeated" === i, 
                this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, 
                this.defaultValue = null, this.long = !!a.Long && s.long[r] !== undefined, this.bytes = "bytes" === r, 
                this.resolvedType = null, this.extensionField = null, this.declaringField = null, 
                this._packed = null, this.comment = l;
            }
            Field.fromJSON = function(e, t) {
                return new Field(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
            }, Object.defineProperty(Field.prototype, "packed", {
                get: function get() {
                    return null === this._packed && (this._packed = !1 !== this.getOption("packed")), 
                    this._packed;
                }
            }), Field.prototype.setOption = function(e, t, r) {
                return "packed" === e && (this._packed = null), n.prototype.setOption.call(this, e, t, r);
            }, Field.prototype.toJSON = function(e) {
                var t = !!e && Boolean(e.keepComments);
                return a.toObject([ "rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined ]);
            }, Field.prototype.resolve = function() {
                if (this.resolved) return this;
                if ((this.typeDefault = s.defaults[this.type]) === undefined && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), 
                this.resolvedType instanceof i ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), 
                this.options && null != this.options.default && (this.typeDefault = this.options.default, 
                this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), 
                this.options && (!0 !== this.options.packed && (this.options.packed === undefined || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed, 
                Object.keys(this.options).length || (this.options = undefined)), this.long) this.typeDefault = a.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), 
                Object.freeze && Object.freeze(this.typeDefault); else if (this.bytes && "string" == typeof this.typeDefault) {
                    var e;
                    a.base64.test(this.typeDefault) ? a.base64.decode(this.typeDefault, e = a.newBuffer(a.base64.length(this.typeDefault)), 0) : a.utf8.write(this.typeDefault, e = a.newBuffer(a.utf8.length(this.typeDefault)), 0), 
                    this.typeDefault = e;
                }
                return this.map ? this.defaultValue = a.emptyObject : this.repeated ? this.defaultValue = a.emptyArray : this.defaultValue = this.typeDefault, 
                this.parent instanceof i && (this.parent.ctor.prototype[this.name] = this.defaultValue), 
                n.prototype.resolve.call(this);
            }, Field.d = function(e, t, r, n) {
                return "function" == typeof t ? t = a.decorateType(t).name : t && "object" == _typeof2(t) && (t = a.decorateEnum(t).name), 
                function(i, o) {
                    a.decorateType(i.constructor).add(new Field(o, e, t, r, {
                        default: n
                    }));
                };
            }, Field._configure = function(e) {
                i = e;
            };
        }, {
            15: 15,
            24: 24,
            36: 36,
            37: 37
        } ],
        17: [ function(e, t, r) {
            var n = t.exports = e(18);
            n.build = "light", n.load = function(e, t, r) {
                return "function" == typeof t ? (r = t, t = new n.Root()) : t || (t = new n.Root()), 
                t.load(e, r);
            }, n.loadSync = function(e, t) {
                return t || (t = new n.Root()), t.loadSync(e);
            }, n.encoder = e(14), n.decoder = e(13), n.verifier = e(40), n.converter = e(12), 
            n.ReflectionObject = e(24), n.Namespace = e(23), n.Root = e(29), n.Enum = e(15), 
            n.Type = e(35), n.Field = e(16), n.OneOf = e(25), n.MapField = e(20), n.Service = e(33), 
            n.Method = e(22), n.Message = e(21), n.wrappers = e(41), n.types = e(36), n.util = e(37), 
            n.ReflectionObject._configure(n.Root), n.Namespace._configure(n.Type, n.Service, n.Enum), 
            n.Root._configure(n.Type), n.Field._configure(n.Type);
        }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            18: 18,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            29: 29,
            33: 33,
            35: 35,
            36: 36,
            37: 37,
            40: 40,
            41: 41
        } ],
        18: [ function(e, t, r) {
            var n = r;
            function configure() {
                n.Reader._configure(n.BufferReader), n.util._configure();
            }
            n.build = "minimal", n.Writer = e(42), n.BufferWriter = e(43), n.Reader = e(27), 
            n.BufferReader = e(28), n.util = e(39), n.rpc = e(31), n.roots = e(30), n.configure = configure, 
            n.Writer._configure(n.BufferWriter), configure();
        }, {
            27: 27,
            28: 28,
            30: 30,
            31: 31,
            39: 39,
            42: 42,
            43: 43
        } ],
        19: [ function(e, t, r) {
            var n = t.exports = e(17);
            n.build = "full", n.tokenize = e(34), n.parse = e(26), n.common = e(11), n.Root._configure(n.Type, n.parse, n.common);
        }, {
            11: 11,
            17: 17,
            26: 26,
            34: 34
        } ],
        20: [ function(e, t, r) {
            t.exports = MapField;
            var n = e(16);
            ((MapField.prototype = Object.create(n.prototype)).constructor = MapField).className = "MapField";
            var i = e(36), o = e(37);
            function MapField(e, t, r, i, s, a) {
                if (n.call(this, e, t, i, undefined, undefined, s, a), !o.isString(r)) throw TypeError("keyType must be a string");
                this.keyType = r, this.resolvedKeyType = null, this.map = !0;
            }
            MapField.fromJSON = function(e, t) {
                return new MapField(e, t.id, t.keyType, t.type, t.options, t.comment);
            }, MapField.prototype.toJSON = function(e) {
                var t = !!e && Boolean(e.keepComments);
                return o.toObject([ "keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined ]);
            }, MapField.prototype.resolve = function() {
                if (this.resolved) return this;
                if (i.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);
                return n.prototype.resolve.call(this);
            }, MapField.d = function(e, t, r) {
                return "function" == typeof r ? r = o.decorateType(r).name : r && "object" == _typeof2(r) && (r = o.decorateEnum(r).name), 
                function(n, i) {
                    o.decorateType(n.constructor).add(new MapField(i, e, t, r));
                };
            };
        }, {
            16: 16,
            36: 36,
            37: 37
        } ],
        21: [ function(e, t, r) {
            t.exports = Message;
            var n = e(39);
            function Message(e) {
                if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) {
                    this[t[r]] = e[t[r]];
                }
            }
            Message.create = function(e) {
                return this.$type.create(e);
            }, Message.encode = function(e, t) {
                return this.$type.encode(e, t);
            }, Message.encodeDelimited = function(e, t) {
                return this.$type.encodeDelimited(e, t);
            }, Message.decode = function(e) {
                return this.$type.decode(e);
            }, Message.decodeDelimited = function(e) {
                return this.$type.decodeDelimited(e);
            }, Message.verify = function(e) {
                return this.$type.verify(e);
            }, Message.fromObject = function(e) {
                return this.$type.fromObject(e);
            }, Message.toObject = function(e, t) {
                return this.$type.toObject(e, t);
            }, Message.prototype.toJSON = function() {
                return this.$type.toObject(this, n.toJSONOptions);
            };
        }, {
            39: 39
        } ],
        22: [ function(e, t, r) {
            t.exports = Method;
            var n = e(24);
            ((Method.prototype = Object.create(n.prototype)).constructor = Method).className = "Method";
            var i = e(37);
            function Method(e, t, r, o, s, a, f, u) {
                if (i.isObject(s) ? (f = s, s = a = undefined) : i.isObject(a) && (f = a, a = undefined), 
                t !== undefined && !i.isString(t)) throw TypeError("type must be a string");
                if (!i.isString(r)) throw TypeError("requestType must be a string");
                if (!i.isString(o)) throw TypeError("responseType must be a string");
                n.call(this, e, f), this.type = t || "rpc", this.requestType = r, this.requestStream = !!s || undefined, 
                this.responseType = o, this.responseStream = !!a || undefined, this.resolvedRequestType = null, 
                this.resolvedResponseType = null, this.comment = u;
            }
            Method.fromJSON = function(e, t) {
                return new Method(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment);
            }, Method.prototype.toJSON = function(e) {
                var t = !!e && Boolean(e.keepComments);
                return i.toObject([ "type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined ]);
            }, Method.prototype.resolve = function() {
                return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), 
                this.resolvedResponseType = this.parent.lookupType(this.responseType), n.prototype.resolve.call(this));
            };
        }, {
            24: 24,
            37: 37
        } ],
        23: [ function(e, t, r) {
            t.exports = Namespace;
            var n = e(24);
            ((Namespace.prototype = Object.create(n.prototype)).constructor = Namespace).className = "Namespace";
            var i, o, s, a = e(16), f = e(37);
            function arrayToJSON(e, t) {
                if (!e || !e.length) return undefined;
                for (var r = {}, n = 0; n < e.length; ++n) {
                    r[e[n].name] = e[n].toJSON(t);
                }
                return r;
            }
            function Namespace(e, t) {
                n.call(this, e, t), this.nested = undefined, this._nestedArray = null;
            }
            function clearCache(e) {
                return e._nestedArray = null, e;
            }
            Namespace.fromJSON = function(e, t) {
                return new Namespace(e, t.options).addJSON(t.nested);
            }, Namespace.arrayToJSON = arrayToJSON, Namespace.isReservedId = function(e, t) {
                if (e) for (var r = 0; r < e.length; ++r) {
                    if ("string" != typeof e[r] && e[r][0] <= t && e[r][1] >= t) return !0;
                }
                return !1;
            }, Namespace.isReservedName = function(e, t) {
                if (e) for (var r = 0; r < e.length; ++r) {
                    if (e[r] === t) return !0;
                }
                return !1;
            }, Object.defineProperty(Namespace.prototype, "nestedArray", {
                get: function get() {
                    return this._nestedArray || (this._nestedArray = f.toArray(this.nested));
                }
            }), Namespace.prototype.toJSON = function(e) {
                return f.toObject([ "options", this.options, "nested", arrayToJSON(this.nestedArray, e) ]);
            }, Namespace.prototype.addJSON = function(e) {
                if (e) for (var t, r = Object.keys(e), n = 0; n < r.length; ++n) {
                    t = e[r[n]], this.add((t.fields !== undefined ? i.fromJSON : t.values !== undefined ? s.fromJSON : t.methods !== undefined ? o.fromJSON : t.id !== undefined ? a.fromJSON : Namespace.fromJSON)(r[n], t));
                }
                return this;
            }, Namespace.prototype.get = function(e) {
                return this.nested && this.nested[e] || null;
            }, Namespace.prototype.getEnum = function(e) {
                if (this.nested && this.nested[e] instanceof s) return this.nested[e].values;
                throw Error("no such enum: " + e);
            }, Namespace.prototype.add = function(e) {
                if (!(e instanceof a && e.extend !== undefined || e instanceof i || e instanceof s || e instanceof o || e instanceof Namespace)) throw TypeError("object must be a valid nested object");
                if (this.nested) {
                    var t = this.get(e.name);
                    if (t) {
                        if (!(t instanceof Namespace && e instanceof Namespace) || t instanceof i || t instanceof o) throw Error("duplicate name '" + e.name + "' in " + this);
                        for (var r = t.nestedArray, n = 0; n < r.length; ++n) {
                            e.add(r[n]);
                        }
                        this.remove(t), this.nested || (this.nested = {}), e.setOptions(t.options, !0);
                    }
                } else this.nested = {};
                return this.nested[e.name] = e, e.onAdd(this), clearCache(this);
            }, Namespace.prototype.remove = function(e) {
                if (!(e instanceof n)) throw TypeError("object must be a ReflectionObject");
                if (e.parent !== this) throw Error(e + " is not a member of " + this);
                return delete this.nested[e.name], Object.keys(this.nested).length || (this.nested = undefined), 
                e.onRemove(this), clearCache(this);
            }, Namespace.prototype.define = function(e, t) {
                if (f.isString(e)) e = e.split("."); else if (!Array.isArray(e)) throw TypeError("illegal path");
                if (e && e.length && "" === e[0]) throw Error("path must be relative");
                for (var r = this; e.length > 0; ) {
                    var n = e.shift();
                    if (r.nested && r.nested[n]) {
                        if (!((r = r.nested[n]) instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
                    } else r.add(r = new Namespace(n));
                }
                return t && r.addJSON(t), r;
            }, Namespace.prototype.resolveAll = function() {
                for (var e = this.nestedArray, t = 0; t < e.length; ) {
                    e[t] instanceof Namespace ? e[t++].resolveAll() : e[t++].resolve();
                }
                return this.resolve();
            }, Namespace.prototype.lookup = function(e, t, r) {
                if ("boolean" == typeof t ? (r = t, t = undefined) : t && !Array.isArray(t) && (t = [ t ]), 
                f.isString(e) && e.length) {
                    if ("." === e) return this.root;
                    e = e.split(".");
                } else if (!e.length) return this;
                if ("" === e[0]) return this.root.lookup(e.slice(1), t);
                var n = this.get(e[0]);
                if (n) {
                    if (1 === e.length) {
                        if (!t || t.indexOf(n.constructor) > -1) return n;
                    } else if (n instanceof Namespace && (n = n.lookup(e.slice(1), t, !0))) return n;
                } else for (var i = 0; i < this.nestedArray.length; ++i) {
                    if (this._nestedArray[i] instanceof Namespace && (n = this._nestedArray[i].lookup(e, t, !0))) return n;
                }
                return null === this.parent || r ? null : this.parent.lookup(e, t);
            }, Namespace.prototype.lookupType = function(e) {
                var t = this.lookup(e, [ i ]);
                if (!t) throw Error("no such type: " + e);
                return t;
            }, Namespace.prototype.lookupEnum = function(e) {
                var t = this.lookup(e, [ s ]);
                if (!t) throw Error("no such Enum '" + e + "' in " + this);
                return t;
            }, Namespace.prototype.lookupTypeOrEnum = function(e) {
                var t = this.lookup(e, [ i, s ]);
                if (!t) throw Error("no such Type or Enum '" + e + "' in " + this);
                return t;
            }, Namespace.prototype.lookupService = function(e) {
                var t = this.lookup(e, [ o ]);
                if (!t) throw Error("no such Service '" + e + "' in " + this);
                return t;
            }, Namespace._configure = function(e, t, r) {
                i = e, o = t, s = r;
            };
        }, {
            16: 16,
            24: 24,
            37: 37
        } ],
        24: [ function(e, t, r) {
            t.exports = ReflectionObject, ReflectionObject.className = "ReflectionObject";
            var n, i = e(37);
            function ReflectionObject(e, t) {
                if (!i.isString(e)) throw TypeError("name must be a string");
                if (t && !i.isObject(t)) throw TypeError("options must be an object");
                this.options = t, this.name = e, this.parent = null, this.resolved = !1, this.comment = null, 
                this.filename = null;
            }
            Object.defineProperties(ReflectionObject.prototype, {
                root: {
                    get: function get() {
                        for (var e = this; null !== e.parent; ) {
                            e = e.parent;
                        }
                        return e;
                    }
                },
                fullName: {
                    get: function get() {
                        for (var e = [ this.name ], t = this.parent; t; ) {
                            e.unshift(t.name), t = t.parent;
                        }
                        return e.join(".");
                    }
                }
            }), ReflectionObject.prototype.toJSON = function() {
                throw Error();
            }, ReflectionObject.prototype.onAdd = function(e) {
                this.parent && this.parent !== e && this.parent.remove(this), this.parent = e, this.resolved = !1;
                var t = e.root;
                t instanceof n && t._handleAdd(this);
            }, ReflectionObject.prototype.onRemove = function(e) {
                var t = e.root;
                t instanceof n && t._handleRemove(this), this.parent = null, this.resolved = !1;
            }, ReflectionObject.prototype.resolve = function() {
                return this.resolved ? this : (this.root instanceof n && (this.resolved = !0), this);
            }, ReflectionObject.prototype.getOption = function(e) {
                return this.options ? this.options[e] : undefined;
            }, ReflectionObject.prototype.setOption = function(e, t, r) {
                return r && this.options && this.options[e] !== undefined || ((this.options || (this.options = {}))[e] = t), 
                this;
            }, ReflectionObject.prototype.setOptions = function(e, t) {
                if (e) for (var r = Object.keys(e), n = 0; n < r.length; ++n) {
                    this.setOption(r[n], e[r[n]], t);
                }
                return this;
            }, ReflectionObject.prototype.toString = function() {
                var e = this.constructor.className, t = this.fullName;
                return t.length ? e + " " + t : e;
            }, ReflectionObject._configure = function(e) {
                n = e;
            };
        }, {
            37: 37
        } ],
        25: [ function(e, t, r) {
            t.exports = OneOf;
            var n = e(24);
            ((OneOf.prototype = Object.create(n.prototype)).constructor = OneOf).className = "OneOf";
            var i = e(16), o = e(37);
            function OneOf(e, t, r, i) {
                if (Array.isArray(t) || (r = t, t = undefined), n.call(this, e, r), t !== undefined && !Array.isArray(t)) throw TypeError("fieldNames must be an Array");
                this.oneof = t || [], this.fieldsArray = [], this.comment = i;
            }
            function addFieldsToParent(e) {
                if (e.parent) for (var t = 0; t < e.fieldsArray.length; ++t) {
                    e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
                }
            }
            OneOf.fromJSON = function(e, t) {
                return new OneOf(e, t.oneof, t.options, t.comment);
            }, OneOf.prototype.toJSON = function(e) {
                var t = !!e && Boolean(e.keepComments);
                return o.toObject([ "options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined ]);
            }, OneOf.prototype.add = function(e) {
                if (!(e instanceof i)) throw TypeError("field must be a Field");
                return e.parent && e.parent !== this.parent && e.parent.remove(e), this.oneof.push(e.name), 
                this.fieldsArray.push(e), e.partOf = this, addFieldsToParent(this), this;
            }, OneOf.prototype.remove = function(e) {
                if (!(e instanceof i)) throw TypeError("field must be a Field");
                var t = this.fieldsArray.indexOf(e);
                if (t < 0) throw Error(e + " is not a member of " + this);
                return this.fieldsArray.splice(t, 1), (t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1), 
                e.partOf = null, this;
            }, OneOf.prototype.onAdd = function(e) {
                n.prototype.onAdd.call(this, e);
                for (var t = 0; t < this.oneof.length; ++t) {
                    var r = e.get(this.oneof[t]);
                    r && !r.partOf && (r.partOf = this, this.fieldsArray.push(r));
                }
                addFieldsToParent(this);
            }, OneOf.prototype.onRemove = function(e) {
                for (var t, r = 0; r < this.fieldsArray.length; ++r) {
                    (t = this.fieldsArray[r]).parent && t.parent.remove(t);
                }
                n.prototype.onRemove.call(this, e);
            }, OneOf.d = function() {
                for (var e = new Array(arguments.length), t = 0; t < arguments.length; ) {
                    e[t] = arguments[t++];
                }
                return function(t, r) {
                    o.decorateType(t.constructor).add(new OneOf(r, e)), Object.defineProperty(t, r, {
                        get: o.oneOfGetter(e),
                        set: o.oneOfSetter(e)
                    });
                };
            };
        }, {
            16: 16,
            24: 24,
            37: 37
        } ],
        26: [ function(e, t, r) {
            t.exports = parse, parse.filename = null, parse.defaults = {
                keepCase: !1
            };
            var n = e(34), i = e(29), o = e(35), s = e(16), a = e(20), f = e(25), u = e(15), l = e(33), p = e(22), c = e(36), d = e(37), h = /^[1-9][0-9]*$/, y = /^-?[1-9][0-9]*$/, m = /^0[x][0-9a-fA-F]+$/, g = /^-?0[x][0-9a-fA-F]+$/, v = /^0[0-7]+$/, b = /^-?0[0-7]+$/, w = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, O = /^[a-zA-Z_][a-zA-Z_0-9]*$/, k = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, j = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
            function parse(e, t, r) {
                t instanceof i || (r = t, t = new i()), r || (r = parse.defaults);
                var _, A, x, S, E, T = n(e, r.alternateCommentMode || !1), N = T.next, B = T.push, R = T.peek, F = T.skip, L = T.cmnt, C = !0, I = !1, D = t, V = r.keepCase ? function(e) {
                    return e;
                } : d.camelCase;
                function illegal(e, t, r) {
                    var n = parse.filename;
                    return r || (parse.filename = null), Error("illegal " + (t || "token") + " '" + e + "' (" + (n ? n + ", " : "") + "line " + T.line + ")");
                }
                function readString() {
                    var e, t = [];
                    do {
                        if ('"' !== (e = N()) && "'" !== e) throw illegal(e);
                        t.push(N()), F(e), e = R();
                    } while ('"' === e || "'" === e);
                    return t.join("");
                }
                function readValue(e) {
                    var t = N();
                    switch (t) {
                      case "'":
                      case '"':
                        return B(t), readString();

                      case "true":
                      case "TRUE":
                        return !0;

                      case "false":
                      case "FALSE":
                        return !1;
                    }
                    try {
                        return function(e, t) {
                            var r = 1;
                            "-" === e.charAt(0) && (r = -1, e = e.substring(1));
                            switch (e) {
                              case "inf":
                              case "INF":
                              case "Inf":
                                return r * (1 / 0);

                              case "nan":
                              case "NAN":
                              case "Nan":
                              case "NaN":
                                return NaN;

                              case "0":
                                return 0;
                            }
                            if (h.test(e)) return r * parseInt(e, 10);
                            if (m.test(e)) return r * parseInt(e, 16);
                            if (v.test(e)) return r * parseInt(e, 8);
                            if (w.test(e)) return r * parseFloat(e);
                            throw illegal(e, "number", t);
                        }(t, !0);
                    } catch (r) {
                        r = null;//.handleException(r);
                        if (e && k.test(t)) return t;
                        throw illegal(t, "value");
                    }
                }
                function readRanges(e, t) {
                    var r, n;
                    do {
                        !t || '"' !== (r = R()) && "'" !== r ? e.push([ n = parseId(N()), F("to", !0) ? parseId(N()) : n ]) : e.push(readString());
                    } while (F(",", !0));
                    F(";");
                }
                function parseId(e, t) {
                    switch (e) {
                      case "max":
                      case "MAX":
                      case "Max":
                        return 536870911;

                      case "0":
                        return 0;
                    }
                    if (!t && "-" === e.charAt(0)) throw illegal(e, "id");
                    if (y.test(e)) return parseInt(e, 10);
                    if (g.test(e)) return parseInt(e, 16);
                    if (b.test(e)) return parseInt(e, 8);
                    throw illegal(e, "id");
                }
                function parsePackage() {
                    if (_ !== undefined) throw illegal("package");
                    if (_ = N(), !k.test(_)) throw illegal(_, "name");
                    D = D.define(_), F(";");
                }
                function parseImport() {
                    var e, t = R();
                    switch (t) {
                      case "weak":
                        e = x || (x = []), N();
                        break;

                      case "public":
                        N();

                      default:
                        e = A || (A = []);
                    }
                    t = readString(), F(";"), e.push(t);
                }
                function parseSyntax() {
                    if (F("="), S = readString(), !(I = "proto3" === S) && "proto2" !== S) throw illegal(S, "syntax");
                    F(";");
                }
                function parseCommon(e, t) {
                    switch (t) {
                      case "option":
                        return parseOption(e, t), F(";"), !0;

                      case "message":
                        return function(e, t) {
                            if (!O.test(t = N())) throw illegal(t, "type name");
                            var r = new o(t);
                            ifBlock(r, function(e) {
                                if (!parseCommon(r, e)) switch (e) {
                                  case "map":
                                    !function(e) {
                                        F("<");
                                        var t = N();
                                        if (c.mapKey[t] === undefined) throw illegal(t, "type");
                                        F(",");
                                        var r = N();
                                        if (!k.test(r)) throw illegal(r, "type");
                                        F(">");
                                        var n = N();
                                        if (!O.test(n)) throw illegal(n, "name");
                                        F("=");
                                        var i = new a(V(n), parseId(N()), t, r);
                                        ifBlock(i, function(e) {
                                            if ("option" !== e) throw illegal(e);
                                            parseOption(i, e), F(";");
                                        }, function() {
                                            parseInlineOptions(i);
                                        }), e.add(i);
                                    }(r);
                                    break;

                                  case "required":
                                  case "optional":
                                  case "repeated":
                                    parseField(r, e);
                                    break;

                                  case "oneof":
                                    !function(e, t) {
                                        if (!O.test(t = N())) throw illegal(t, "name");
                                        var r = new f(V(t));
                                        ifBlock(r, function(e) {
                                            "option" === e ? (parseOption(r, e), F(";")) : (B(e), parseField(r, "optional"));
                                        }), e.add(r);
                                    }(r, e);
                                    break;

                                  case "extensions":
                                    readRanges(r.extensions || (r.extensions = []));
                                    break;

                                  case "reserved":
                                    readRanges(r.reserved || (r.reserved = []), !0);
                                    break;

                                  default:
                                    if (!I || !k.test(e)) throw illegal(e);
                                    B(e), parseField(r, "optional");
                                }
                            }), e.add(r);
                        }(e, t), !0;

                      case "enum":
                        return function(e, t) {
                            if (!O.test(t = N())) throw illegal(t, "name");
                            var r = new u(t);
                            ifBlock(r, function(e) {
                                switch (e) {
                                  case "option":
                                    parseOption(r, e), F(";");
                                    break;

                                  case "reserved":
                                    readRanges(r.reserved || (r.reserved = []), !0);
                                    break;

                                  default:
                                    !function(e, t) {
                                        if (!O.test(t)) throw illegal(t, "name");
                                        F("=");
                                        var r = parseId(N(), !0), n = {};
                                        ifBlock(n, function(e) {
                                            if ("option" !== e) throw illegal(e);
                                            parseOption(n, e), F(";");
                                        }, function() {
                                            parseInlineOptions(n);
                                        }), e.add(t, r, n.comment);
                                    }(r, e);
                                }
                            }), e.add(r);
                        }(e, t), !0;

                      case "service":
                        return function(e, t) {
                            if (!O.test(t = N())) throw illegal(t, "service name");
                            var r = new l(t);
                            ifBlock(r, function(e) {
                                if (!parseCommon(r, e)) {
                                    if ("rpc" !== e) throw illegal(e);
                                    !function(e, t) {
                                        var r = t;
                                        if (!O.test(t = N())) throw illegal(t, "name");
                                        var n, i, o, s, a = t;
                                        F("("), F("stream", !0) && (i = !0);
                                        if (!k.test(t = N())) throw illegal(t);
                                        n = t, F(")"), F("returns"), F("("), F("stream", !0) && (s = !0);
                                        if (!k.test(t = N())) throw illegal(t);
                                        o = t, F(")");
                                        var f = new p(a, r, n, o, i, s);
                                        ifBlock(f, function(e) {
                                            if ("option" !== e) throw illegal(e);
                                            parseOption(f, e), F(";");
                                        }), e.add(f);
                                    }(r, e);
                                }
                            }), e.add(r);
                        }(e, t), !0;

                      case "extend":
                        return function(e, t) {
                            if (!k.test(t = N())) throw illegal(t, "reference");
                            var r = t;
                            ifBlock(null, function(t) {
                                switch (t) {
                                  case "required":
                                  case "repeated":
                                  case "optional":
                                    parseField(e, t, r);
                                    break;

                                  default:
                                    if (!I || !k.test(t)) throw illegal(t);
                                    B(t), parseField(e, "optional", r);
                                }
                            });
                        }(e, t), !0;
                    }
                    return !1;
                }
                function ifBlock(e, t, r) {
                    var n = T.line;
                    if (e && (e.comment = L(), e.filename = parse.filename), F("{", !0)) {
                        for (var i; "}" !== (i = N()); ) {
                            t(i);
                        }
                        F(";", !0);
                    } else r && r(), F(";"), e && "string" != typeof e.comment && (e.comment = L(n));
                }
                function parseField(e, t, r) {
                    var n = N();
                    if ("group" !== n) {
                        if (!k.test(n)) throw illegal(n, "type");
                        var i = N();
                        if (!O.test(i)) throw illegal(i, "name");
                        i = V(i), F("=");
                        var a = new s(i, parseId(N()), n, t, r);
                        ifBlock(a, function(e) {
                            if ("option" !== e) throw illegal(e);
                            parseOption(a, e), F(";");
                        }, function() {
                            parseInlineOptions(a);
                        }), e.add(a), I || !a.repeated || c.packed[n] === undefined && c.basic[n] !== undefined || a.setOption("packed", !1, !0);
                    } else !function(e, t) {
                        var r = N();
                        if (!O.test(r)) throw illegal(r, "name");
                        var n = d.lcFirst(r);
                        r === n && (r = d.ucFirst(r));
                        F("=");
                        var i = parseId(N()), a = new o(r);
                        a.group = !0;
                        var f = new s(n, i, r, t);
                        f.filename = parse.filename, ifBlock(a, function(e) {
                            switch (e) {
                              case "option":
                                parseOption(a, e), F(";");
                                break;

                              case "required":
                              case "optional":
                              case "repeated":
                                parseField(a, e);
                                break;

                              default:
                                throw illegal(e);
                            }
                        }), e.add(a).add(f);
                    }(e, t);
                }
                function parseOption(e, t) {
                    var r = F("(", !0);
                    if (!k.test(t = N())) throw illegal(t, "name");
                    var n = t;
                    r && (F(")"), n = "(" + n + ")", t = R(), j.test(t) && (n += t, N())), F("="), parseOptionValue(e, n);
                }
                function parseOptionValue(e, t) {
                    if (F("{", !0)) do {
                        if (!O.test(E = N())) throw illegal(E, "name");
                        "{" === R() ? parseOptionValue(e, t + "." + E) : (F(":"), "{" === R() ? parseOptionValue(e, t + "." + E) : setOption(e, t + "." + E, readValue(!0))), 
                        F(",", !0);
                    } while (!F("}", !0)); else setOption(e, t, readValue(!0));
                }
                function setOption(e, t, r) {
                    e.setOption && e.setOption(t, r);
                }
                function parseInlineOptions(e) {
                    if (F("[", !0)) {
                        do {
                            parseOption(e, "option");
                        } while (F(",", !0));
                        F("]");
                    }
                    return e;
                }
                for (;null !== (E = N()); ) {
                    switch (E) {
                      case "package":
                        if (!C) throw illegal(E);
                        parsePackage();
                        break;

                      case "import":
                        if (!C) throw illegal(E);
                        parseImport();
                        break;

                      case "syntax":
                        if (!C) throw illegal(E);
                        parseSyntax();
                        break;

                      case "option":
                        if (!C) throw illegal(E);
                        parseOption(D, E), F(";");
                        break;

                      default:
                        if (parseCommon(D, E)) {
                            C = !1;
                            continue;
                        }
                        throw illegal(E);
                    }
                }
                return parse.filename = null, {
                    package: _,
                    imports: A,
                    weakImports: x,
                    syntax: S,
                    root: t
                };
            }
        }, {
            15: 15,
            16: 16,
            20: 20,
            22: 22,
            25: 25,
            29: 29,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37
        } ],
        27: [ function(e, t, r) {
            t.exports = Reader;
            var n, i = e(39), o = i.LongBits, s = i.utf8;
            function indexOutOfRange(e, t) {
                return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
            }
            function Reader(e) {
                this.buf = e, this.pos = 0, this.len = e.length;
            }
            var a, f = "undefined" != typeof Uint8Array ? function(e) {
                if (e instanceof Uint8Array || Array.isArray(e)) return new Reader(e);
                throw Error("illegal buffer");
            } : function(e) {
                if (Array.isArray(e)) return new Reader(e);
                throw Error("illegal buffer");
            };
            function readLongVarint() {
                var e = new o(0, 0), t = 0;
                if (!(this.len - this.pos > 4)) {
                    for (;t < 3; ++t) {
                        if (this.pos >= this.len) throw indexOutOfRange(this);
                        if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
                    }
                    return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e;
                }
                for (;t < 4; ++t) {
                    if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
                }
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, 
                this.buf[this.pos++] < 128) return e;
                if (t = 0, this.len - this.pos > 4) {
                    for (;t < 5; ++t) {
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e;
                    }
                } else for (;t < 5; ++t) {
                    if (this.pos >= this.len) throw indexOutOfRange(this);
                    if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e;
                }
                throw Error("invalid varint encoding");
            }
            function readFixed32_end(e, t) {
                return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
            }
            function readFixed64() {
                if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
                return new o(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
            }
            Reader.create = i.Buffer ? function(e) {
                return (Reader.create = function(e) {
                    return i.Buffer.isBuffer(e) ? new n(e) : f(e);
                })(e);
            } : f, Reader.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, 
            Reader.prototype.uint32 = (a = 4294967295, function() {
                if (a = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return a;
                if (a = (a | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return a;
                if (a = (a | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return a;
                if (a = (a | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return a;
                if (a = (a | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return a;
                if ((this.pos += 5) > this.len) throw this.pos = this.len, indexOutOfRange(this, 10);
                return a;
            }), Reader.prototype.int32 = function() {
                return 0 | this.uint32();
            }, Reader.prototype.sint32 = function() {
                var e = this.uint32();
                return e >>> 1 ^ -(1 & e) | 0;
            }, Reader.prototype.bool = function() {
                return 0 !== this.uint32();
            }, Reader.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
                return readFixed32_end(this.buf, this.pos += 4);
            }, Reader.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
                return 0 | readFixed32_end(this.buf, this.pos += 4);
            }, Reader.prototype.float = function() {
                if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
                var e = i.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, e;
            }, Reader.prototype.double = function() {
                if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
                var e = i.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, e;
            }, Reader.prototype.bytes = function() {
                var e = this.uint32(), t = this.pos, r = this.pos + e;
                if (r > this.len) throw indexOutOfRange(this, e);
                return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? new this.buf.constructor(0) : this._slice.call(this.buf, t, r);
            }, Reader.prototype.string = function() {
                var e = this.bytes();
                return s.read(e, 0, e.length);
            }, Reader.prototype.skip = function(e) {
                if ("number" == typeof e) {
                    if (this.pos + e > this.len) throw indexOutOfRange(this, e);
                    this.pos += e;
                } else do {
                    if (this.pos >= this.len) throw indexOutOfRange(this);
                } while (128 & this.buf[this.pos++]);
                return this;
            }, Reader.prototype.skipType = function(e) {
                switch (e) {
                  case 0:
                    this.skip();
                    break;

                  case 1:
                    this.skip(8);
                    break;

                  case 2:
                    this.skip(this.uint32());
                    break;

                  case 3:
                    for (;4 != (e = 7 & this.uint32()); ) {
                        this.skipType(e);
                    }
                    break;

                  case 5:
                    this.skip(4);
                    break;

                  default:
                    throw Error("invalid wire type " + e + " at offset " + this.pos);
                }
                return this;
            }, Reader._configure = function(e) {
                n = e;
                var t = i.Long ? "toLong" : "toNumber";
                i.merge(Reader.prototype, {
                    int64: function int64() {
                        return readLongVarint.call(this)[t](!1);
                    },
                    uint64: function uint64() {
                        return readLongVarint.call(this)[t](!0);
                    },
                    sint64: function sint64() {
                        return readLongVarint.call(this).zzDecode()[t](!1);
                    },
                    fixed64: function fixed64() {
                        return readFixed64.call(this)[t](!0);
                    },
                    sfixed64: function sfixed64() {
                        return readFixed64.call(this)[t](!1);
                    }
                });
            };
        }, {
            39: 39
        } ],
        28: [ function(e, t, r) {
            t.exports = BufferReader;
            var n = e(27);
            (BufferReader.prototype = Object.create(n.prototype)).constructor = BufferReader;
            var i = e(39);
            function BufferReader(e) {
                n.call(this, e);
            }
            i.Buffer && (BufferReader.prototype._slice = i.Buffer.prototype.slice), BufferReader.prototype.string = function() {
                var e = this.uint32();
                return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len));
            };
        }, {
            27: 27,
            39: 39
        } ],
        29: [ function(e, t, r) {
            t.exports = Root;
            var n = e(23);
            ((Root.prototype = Object.create(n.prototype)).constructor = Root).className = "Root";
            var i, o, s, a = e(16), f = e(15), u = e(25), l = e(37);
            function Root(e) {
                n.call(this, "", e), this.deferred = [], this.files = [];
            }
            function SYNC() {}
            Root.fromJSON = function(e, t) {
                return t || (t = new Root()), e.options && t.setOptions(e.options), t.addJSON(e.nested);
            }, Root.prototype.resolvePath = l.path.resolve, Root.prototype.load = function load(e, t, r) {
                "function" == typeof t && (r = t, t = undefined);
                var n = this;
                if (!r) return l.asPromise(load, n, e, t);
                var i = r === SYNC;
                function finish(e, t) {
                    if (r) {
                        var n = r;
                        if (r = null, i) throw e;
                        n(e, t);
                    }
                }
                function process(e, r) {
                    try {
                        if (l.isString(r) && "{" === r.charAt(0) && (r = JSON.parse(r)), l.isString(r)) {
                            o.filename = e;
                            var s, f = o(r, n, t), u = 0;
                            if (f.imports) for (;u < f.imports.length; ++u) {
                                (s = n.resolvePath(e, f.imports[u])) && fetch(s);
                            }
                            if (f.weakImports) for (u = 0; u < f.weakImports.length; ++u) {
                                (s = n.resolvePath(e, f.weakImports[u])) && fetch(s, !0);
                            }
                        } else n.setOptions(r.options).addJSON(r.nested);
                    } catch (e) {
                        e = null;//.handleException(e);
                        finish(e);
                    }
                    i || a || finish(null, n);
                }
                function fetch(e, t) {
                    var o = e.lastIndexOf("google/protobuf/");
                    if (o > -1) {
                        var f = e.substring(o);
                        f in s && (e = f);
                    }
                    if (!(n.files.indexOf(e) > -1)) if (n.files.push(e), e in s) i ? process(e, s[e]) : (++a, 
                    setTimeout(function() {
                        --a, process(e, s[e]);
                    })); else if (i) {
                        var u;
                        try {
                            u = l.fs.readFileSync(e).toString("utf8");
                        } catch (e) {
                            e = null;//.handleException(e);
                            return void (t || finish(e));
                        }
                        process(e, u);
                    } else ++a, l.fetch(e, function(i, o) {
                        --a, r && (i ? t ? a || finish(null, n) : finish(i) : process(e, o));
                    });
                }
                var a = 0;
                l.isString(e) && (e = [ e ]);
                for (var f, u = 0; u < e.length; ++u) {
                    (f = n.resolvePath("", e[u])) && fetch(f);
                }
                return i ? n : (a || finish(null, n), undefined);
            }, Root.prototype.loadSync = function(e, t) {
                if (!l.isNode) throw Error("not supported");
                return this.load(e, t, SYNC);
            }, Root.prototype.resolveAll = function() {
                if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(e) {
                    return "'extend " + e.extend + "' in " + e.parent.fullName;
                }).join(", "));
                return n.prototype.resolveAll.call(this);
            };
            var p = /^[A-Z]/;
            function tryHandleExtension(e, t) {
                var r = t.parent.lookup(t.extend);
                if (r) {
                    var n = new a(t.fullName, t.id, t.type, t.rule, undefined, t.options);
                    return n.declaringField = t, t.extensionField = n, r.add(n), !0;
                }
                return !1;
            }
            Root.prototype._handleAdd = function(e) {
                if (e instanceof a) e.extend === undefined || e.extensionField || tryHandleExtension(0, e) || this.deferred.push(e); else if (e instanceof f) p.test(e.name) && (e.parent[e.name] = e.values); else if (!(e instanceof u)) {
                    if (e instanceof i) for (var t = 0; t < this.deferred.length; ) {
                        tryHandleExtension(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                    }
                    for (var r = 0; r < e.nestedArray.length; ++r) {
                        this._handleAdd(e._nestedArray[r]);
                    }
                    p.test(e.name) && (e.parent[e.name] = e);
                }
            }, Root.prototype._handleRemove = function(e) {
                if (e instanceof a) {
                    if (e.extend !== undefined) if (e.extensionField) e.extensionField.parent.remove(e.extensionField), 
                    e.extensionField = null; else {
                        var t = this.deferred.indexOf(e);
                        t > -1 && this.deferred.splice(t, 1);
                    }
                } else if (e instanceof f) p.test(e.name) && delete e.parent[e.name]; else if (e instanceof n) {
                    for (var r = 0; r < e.nestedArray.length; ++r) {
                        this._handleRemove(e._nestedArray[r]);
                    }
                    p.test(e.name) && delete e.parent[e.name];
                }
            }, Root._configure = function(e, t, r) {
                i = e, o = t, s = r;
            };
        }, {
            15: 15,
            16: 16,
            23: 23,
            25: 25,
            37: 37
        } ],
        30: [ function(e, t, r) {
            t.exports = {};
        }, {} ],
        31: [ function(e, t, r) {
            r.Service = e(32);
        }, {
            32: 32
        } ],
        32: [ function(e, t, r) {
            t.exports = Service;
            var n = e(39);
            function Service(e, t, r) {
                if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
                n.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(t), 
                this.responseDelimited = Boolean(r);
            }
            (Service.prototype = Object.create(n.EventEmitter.prototype)).constructor = Service, 
            Service.prototype.rpcCall = function rpcCall(e, t, r, i, o) {
                if (!i) throw TypeError("request must be specified");
                var s = this;
                if (!o) return n.asPromise(rpcCall, s, e, t, r, i);
                if (!s.rpcImpl) return setTimeout(function() {
                    o(Error("already ended"));
                }, 0), undefined;
                try {
                    return s.rpcImpl(e, t[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(t, n) {
                        if (t) return s.emit("error", t, e), o(t);
                        if (null === n) return s.end(!0), undefined;
                        if (!(n instanceof r)) try {
                            n = r[s.responseDelimited ? "decodeDelimited" : "decode"](n);
                        } catch (t) {
                            t = null;//.handleException(t);
                            return s.emit("error", t, e), o(t);
                        }
                        return s.emit("data", n, e), o(null, n);
                    });
                } catch (t) {
                    t = null;//.handleException(t);
                    return s.emit("error", t, e), setTimeout(function() {
                        o(t);
                    }, 0), undefined;
                }
            }, Service.prototype.end = function(e) {
                return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, 
                this.emit("end").off()), this;
            };
        }, {
            39: 39
        } ],
        33: [ function(e, t, r) {
            t.exports = Service;
            var n = e(23);
            ((Service.prototype = Object.create(n.prototype)).constructor = Service).className = "Service";
            var i = e(22), o = e(37), s = e(31);
            function Service(e, t) {
                n.call(this, e, t), this.methods = {}, this._methodsArray = null;
            }
            function clearCache(e) {
                return e._methodsArray = null, e;
            }
            Service.fromJSON = function(e, t) {
                var r = new Service(e, t.options);
                if (t.methods) for (var n = Object.keys(t.methods), o = 0; o < n.length; ++o) {
                    r.add(i.fromJSON(n[o], t.methods[n[o]]));
                }
                return t.nested && r.addJSON(t.nested), r.comment = t.comment, r;
            }, Service.prototype.toJSON = function(e) {
                var t = n.prototype.toJSON.call(this, e), r = !!e && Boolean(e.keepComments);
                return o.toObject([ "options", t && t.options || undefined, "methods", n.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", r ? this.comment : undefined ]);
            }, Object.defineProperty(Service.prototype, "methodsArray", {
                get: function get() {
                    return this._methodsArray || (this._methodsArray = o.toArray(this.methods));
                }
            }), Service.prototype.get = function(e) {
                return this.methods[e] || n.prototype.get.call(this, e);
            }, Service.prototype.resolveAll = function() {
                for (var e = this.methodsArray, t = 0; t < e.length; ++t) {
                    e[t].resolve();
                }
                return n.prototype.resolve.call(this);
            }, Service.prototype.add = function(e) {
                if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
                return e instanceof i ? (this.methods[e.name] = e, e.parent = this, clearCache(this)) : n.prototype.add.call(this, e);
            }, Service.prototype.remove = function(e) {
                if (e instanceof i) {
                    if (this.methods[e.name] !== e) throw Error(e + " is not a member of " + this);
                    return delete this.methods[e.name], e.parent = null, clearCache(this);
                }
                return n.prototype.remove.call(this, e);
            }, Service.prototype.create = function(e, t, r) {
                for (var n, i = new s.Service(e, t, r), a = 0; a < this.methodsArray.length; ++a) {
                    var f = o.lcFirst((n = this._methodsArray[a]).resolve().name).replace(/[^$\w_]/g, "");
                    i[f] = o.codegen([ "r", "c" ], o.isReserved(f) ? f + "_" : f)("return this.rpcCall(m,q,s,r,c)")({
                        m: n,
                        q: n.resolvedRequestType.ctor,
                        s: n.resolvedResponseType.ctor
                    });
                }
                return i;
            };
        }, {
            22: 22,
            23: 23,
            31: 31,
            37: 37
        } ],
        34: [ function(e, t, r) {
            t.exports = tokenize;
            var n = /[\s{}=;:[\],'"()<>]/g, i = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, o = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, s = /^ *[*\/]+ */, a = /^\s*\*?\/*/, f = /\n/g, u = /\s/, l = /\\(.?)/g, p = {
                0: "\0",
                r: "\r",
                n: "\n",
                t: "\t"
            };
            function unescape(e) {
                return e.replace(l, function(e, t) {
                    switch (t) {
                      case "\\":
                      case "":
                        return t;

                      default:
                        return p[t] || "";
                    }
                });
            }
            function tokenize(e, t) {
                e = e.toString();
                var r = 0, l = e.length, p = 1, c = null, d = null, h = 0, y = !1, m = [], g = null;
                function illegal(e) {
                    return Error("illegal " + e + " (line " + p + ")");
                }
                function charAt(t) {
                    return e.charAt(t);
                }
                function setComment(r, n) {
                    c = e.charAt(r++), h = p, y = !1;
                    var i, o = r - (t ? 2 : 3);
                    do {
                        if (--o < 0 || "\n" === (i = e.charAt(o))) {
                            y = !0;
                            break;
                        }
                    } while (" " === i || "\t" === i);
                    for (var u = e.substring(r, n).split(f), l = 0; l < u.length; ++l) {
                        u[l] = u[l].replace(t ? a : s, "").trim();
                    }
                    d = u.join("\n").trim();
                }
                function isDoubleSlashCommentLine(t) {
                    var r = findEndOfLine(t), n = e.substring(t, r);
                    return /^\s*\/{1,2}/.test(n);
                }
                function findEndOfLine(e) {
                    for (var t = e; t < l && "\n" !== charAt(t); ) {
                        t++;
                    }
                    return t;
                }
                function next() {
                    if (m.length > 0) return m.shift();
                    if (g) return function() {
                        var t = "'" === g ? o : i;
                        t.lastIndex = r - 1;
                        var n = t.exec(e);
                        if (!n) throw illegal("string");
                        return r = t.lastIndex, push(g), g = null, unescape(n[1]);
                    }();
                    var s, a, f, c, d;
                    do {
                        if (r === l) return null;
                        for (s = !1; u.test(f = charAt(r)); ) {
                            if ("\n" === f && ++p, ++r === l) return null;
                        }
                        if ("/" === charAt(r)) {
                            if (++r === l) throw illegal("comment");
                            if ("/" === charAt(r)) {
                                if (t) {
                                    if (c = r, d = !1, isDoubleSlashCommentLine(r)) {
                                        d = !0;
                                        do {
                                            if ((r = findEndOfLine(r)) === l) break;
                                            r++;
                                        } while (isDoubleSlashCommentLine(r));
                                    } else r = Math.min(l, findEndOfLine(r) + 1);
                                    d && setComment(c, r), p++, s = !0;
                                } else {
                                    for (d = "/" === charAt(c = r + 1); "\n" !== charAt(++r); ) {
                                        if (r === l) return null;
                                    }
                                    ++r, d && setComment(c, r - 1), ++p, s = !0;
                                }
                            } else {
                                if ("*" !== (f = charAt(r))) return "/";
                                c = r + 1, d = t || "*" === charAt(c);
                                do {
                                    if ("\n" === f && ++p, ++r === l) throw illegal("comment");
                                    a = f, f = charAt(r);
                                } while ("*" !== a || "/" !== f);
                                ++r, d && setComment(c, r - 2), s = !0;
                            }
                        }
                    } while (s);
                    var h = r;
                    if (n.lastIndex = 0, !n.test(charAt(h++))) for (;h < l && !n.test(charAt(h)); ) {
                        ++h;
                    }
                    var y = e.substring(r, r = h);
                    return '"' !== y && "'" !== y || (g = y), y;
                }
                function push(e) {
                    m.push(e);
                }
                function peek() {
                    if (!m.length) {
                        var e = next();
                        if (null === e) return null;
                        push(e);
                    }
                    return m[0];
                }
                return Object.defineProperty({
                    next: next,
                    peek: peek,
                    push: push,
                    skip: function skip(e, t) {
                        var r = peek();
                        if (r === e) return next(), !0;
                        if (!t) throw illegal("token '" + r + "', '" + e + "' expected");
                        return !1;
                    },
                    cmnt: function cmnt(e) {
                        var r = null;
                        return e === undefined ? h === p - 1 && (t || "*" === c || y) && (r = d) : (h < e && peek(), 
                        h !== e || y || !t && "/" !== c || (r = d)), r;
                    }
                }, "line", {
                    get: function get() {
                        return p;
                    }
                });
            }
            tokenize.unescape = unescape;
        }, {} ],
        35: [ function(e, t, r) {
            t.exports = Type;
            var n = e(23);
            ((Type.prototype = Object.create(n.prototype)).constructor = Type).className = "Type";
            var i = e(15), o = e(25), s = e(16), a = e(20), f = e(33), u = e(21), l = e(27), p = e(42), c = e(37), d = e(14), h = e(13), y = e(40), m = e(12), g = e(41);
            function Type(e, t) {
                n.call(this, e, t), this.fields = {}, this.oneofs = undefined, this.extensions = undefined, 
                this.reserved = undefined, this.group = undefined, this._fieldsById = null, this._fieldsArray = null, 
                this._oneofsArray = null, this._ctor = null;
            }
            function clearCache(e) {
                return e._fieldsById = e._fieldsArray = e._oneofsArray = null, delete e.encode, 
                delete e.decode, delete e.verify, e;
            }
            Object.defineProperties(Type.prototype, {
                fieldsById: {
                    get: function get() {
                        if (this._fieldsById) return this._fieldsById;
                        this._fieldsById = {};
                        for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
                            var r = this.fields[e[t]], n = r.id;
                            if (this._fieldsById[n]) throw Error("duplicate id " + n + " in " + this);
                            this._fieldsById[n] = r;
                        }
                        return this._fieldsById;
                    }
                },
                fieldsArray: {
                    get: function get() {
                        return this._fieldsArray || (this._fieldsArray = c.toArray(this.fields));
                    }
                },
                oneofsArray: {
                    get: function get() {
                        return this._oneofsArray || (this._oneofsArray = c.toArray(this.oneofs));
                    }
                },
                ctor: {
                    get: function get() {
                        return this._ctor || (this.ctor = Type.generateConstructor(this)());
                    },
                    set: function set(e) {
                        var t = e.prototype;
                        t instanceof u || ((e.prototype = new u()).constructor = e, c.merge(e.prototype, t)), 
                        e.$type = e.prototype.$type = this, c.merge(e, u, !0), this._ctor = e;
                        for (var r = 0; r < this.fieldsArray.length; ++r) {
                            this._fieldsArray[r].resolve();
                        }
                        var n = {};
                        for (r = 0; r < this.oneofsArray.length; ++r) {
                            n[this._oneofsArray[r].resolve().name] = {
                                get: c.oneOfGetter(this._oneofsArray[r].oneof),
                                set: c.oneOfSetter(this._oneofsArray[r].oneof)
                            };
                        }
                        r && Object.defineProperties(e.prototype, n);
                    }
                }
            }), Type.generateConstructor = function(e) {
                for (var t, r = c.codegen([ "p" ], e.name), n = 0; n < e.fieldsArray.length; ++n) {
                    (t = e._fieldsArray[n]).map ? r("this%s={}", c.safeProp(t.name)) : t.repeated && r("this%s=[]", c.safeProp(t.name));
                }
                return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
            }, Type.fromJSON = function(e, t) {
                var r = new Type(e, t.options);
                r.extensions = t.extensions, r.reserved = t.reserved;
                for (var u = Object.keys(t.fields), l = 0; l < u.length; ++l) {
                    r.add((void 0 !== t.fields[u[l]].keyType ? a.fromJSON : s.fromJSON)(u[l], t.fields[u[l]]));
                }
                if (t.oneofs) for (u = Object.keys(t.oneofs), l = 0; l < u.length; ++l) {
                    r.add(o.fromJSON(u[l], t.oneofs[u[l]]));
                }
                if (t.nested) for (u = Object.keys(t.nested), l = 0; l < u.length; ++l) {
                    var p = t.nested[u[l]];
                    r.add((p.id !== undefined ? s.fromJSON : p.fields !== undefined ? Type.fromJSON : p.values !== undefined ? i.fromJSON : p.methods !== undefined ? f.fromJSON : n.fromJSON)(u[l], p));
                }
                return t.extensions && t.extensions.length && (r.extensions = t.extensions), t.reserved && t.reserved.length && (r.reserved = t.reserved), 
                t.group && (r.group = !0), t.comment && (r.comment = t.comment), r;
            }, Type.prototype.toJSON = function(e) {
                var t = n.prototype.toJSON.call(this, e), r = !!e && Boolean(e.keepComments);
                return c.toObject([ "options", t && t.options || undefined, "oneofs", n.arrayToJSON(this.oneofsArray, e), "fields", n.arrayToJSON(this.fieldsArray.filter(function(e) {
                    return !e.declaringField;
                }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", r ? this.comment : undefined ]);
            }, Type.prototype.resolveAll = function() {
                for (var e = this.fieldsArray, t = 0; t < e.length; ) {
                    e[t++].resolve();
                }
                var r = this.oneofsArray;
                for (t = 0; t < r.length; ) {
                    r[t++].resolve();
                }
                return n.prototype.resolveAll.call(this);
            }, Type.prototype.get = function(e) {
                return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
            }, Type.prototype.add = function(e) {
                if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
                if (e instanceof s && e.extend === undefined) {
                    if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) throw Error("duplicate id " + e.id + " in " + this);
                    if (this.isReservedId(e.id)) throw Error("id " + e.id + " is reserved in " + this);
                    if (this.isReservedName(e.name)) throw Error("name '" + e.name + "' is reserved in " + this);
                    return e.parent && e.parent.remove(e), this.fields[e.name] = e, e.message = this, 
                    e.onAdd(this), clearCache(this);
                }
                return e instanceof o ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, 
                e.onAdd(this), clearCache(this)) : n.prototype.add.call(this, e);
            }, Type.prototype.remove = function(e) {
                if (e instanceof s && e.extend === undefined) {
                    if (!this.fields || this.fields[e.name] !== e) throw Error(e + " is not a member of " + this);
                    return delete this.fields[e.name], e.parent = null, e.onRemove(this), clearCache(this);
                }
                if (e instanceof o) {
                    if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + " is not a member of " + this);
                    return delete this.oneofs[e.name], e.parent = null, e.onRemove(this), clearCache(this);
                }
                return n.prototype.remove.call(this, e);
            }, Type.prototype.isReservedId = function(e) {
                return n.isReservedId(this.reserved, e);
            }, Type.prototype.isReservedName = function(e) {
                return n.isReservedName(this.reserved, e);
            }, Type.prototype.create = function(e) {
                return new this.ctor(e);
            }, Type.prototype.setup = function() {
                for (var e = this.fullName, t = [], r = 0; r < this.fieldsArray.length; ++r) {
                    t.push(this._fieldsArray[r].resolve().resolvedType);
                }
                this.encode = d(this)({
                    Writer: p,
                    types: t,
                    util: c
                }), this.decode = h(this)({
                    Reader: l,
                    types: t,
                    util: c
                }), this.verify = y(this)({
                    types: t,
                    util: c
                }), this.fromObject = m.fromObject(this)({
                    types: t,
                    util: c
                }), this.toObject = m.toObject(this)({
                    types: t,
                    util: c
                });
                var n = g[e];
                if (n) {
                    var i = Object.create(this);
                    i.fromObject = this.fromObject, this.fromObject = n.fromObject.bind(i), i.toObject = this.toObject, 
                    this.toObject = n.toObject.bind(i);
                }
                return this;
            }, Type.prototype.encode = function(e, t) {
                return this.setup().encode(e, t);
            }, Type.prototype.encodeDelimited = function(e, t) {
                return this.encode(e, t && t.len ? t.fork() : t).ldelim();
            }, Type.prototype.decode = function(e, t) {
                return this.setup().decode(e, t);
            }, Type.prototype.decodeDelimited = function(e) {
                return e instanceof l || (e = l.create(e)), this.decode(e, e.uint32());
            }, Type.prototype.verify = function(e) {
                return this.setup().verify(e);
            }, Type.prototype.fromObject = function(e) {
                return this.setup().fromObject(e);
            }, Type.prototype.toObject = function(e, t) {
                return this.setup().toObject(e, t);
            }, Type.d = function(e) {
                return function(t) {
                    c.decorateType(t, e);
                };
            };
        }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            20: 20,
            21: 21,
            23: 23,
            25: 25,
            27: 27,
            33: 33,
            37: 37,
            40: 40,
            41: 41,
            42: 42
        } ],
        36: [ function(e, t, r) {
            var n = r, i = e(37), o = [ "double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes" ];
            function bake(e, t) {
                var r = 0, n = {};
                for (t |= 0; r < e.length; ) {
                    n[o[r + t]] = e[r++];
                }
                return n;
            }
            n.basic = bake([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2 ]), n.defaults = bake([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", i.emptyArray, null ]), 
            n.long = bake([ 0, 0, 0, 1, 1 ], 7), n.mapKey = bake([ 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2 ], 2), 
            n.packed = bake([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0 ]);
        }, {
            37: 37
        } ],
        37: [ function(e, t, r) {
            var n, i, o = t.exports = e(39), s = e(30);
            o.codegen = e(3), o.fetch = e(5), o.path = e(8), o.fs = o.inquire("fs"), o.toArray = function(e) {
                if (e) {
                    for (var t = Object.keys(e), r = new Array(t.length), n = 0; n < t.length; ) {
                        r[n] = e[t[n++]];
                    }
                    return r;
                }
                return [];
            }, o.toObject = function(e) {
                for (var t = {}, r = 0; r < e.length; ) {
                    var n = e[r++], i = e[r++];
                    i !== undefined && (t[n] = i);
                }
                return t;
            };
            var a = /\\/g, f = /"/g;
            o.isReserved = function(e) {
                return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
            }, o.safeProp = function(e) {
                return !/^[$\w_]+$/.test(e) || o.isReserved(e) ? '["' + e.replace(a, "\\\\").replace(f, '\\"') + '"]' : "." + e;
            }, o.ucFirst = function(e) {
                return e.charAt(0).toUpperCase() + e.substring(1);
            };
            var u = /_([a-z])/g;
            o.camelCase = function(e) {
                return e.substring(0, 1) + e.substring(1).replace(u, function(e, t) {
                    return t.toUpperCase();
                });
            }, o.compareFieldsById = function(e, t) {
                return e.id - t.id;
            }, o.decorateType = function(t, r) {
                if (t.$type) return r && t.$type.name !== r && (o.decorateRoot.remove(t.$type), 
                t.$type.name = r, o.decorateRoot.add(t.$type)), t.$type;
                n || (n = e(35));
                var i = new n(r || t.name);
                return o.decorateRoot.add(i), i.ctor = t, Object.defineProperty(t, "$type", {
                    value: i,
                    enumerable: !1
                }), Object.defineProperty(t.prototype, "$type", {
                    value: i,
                    enumerable: !1
                }), i;
            };
            var l = 0;
            o.decorateEnum = function(t) {
                if (t.$type) return t.$type;
                i || (i = e(15));
                var r = new i("Enum" + l++, t);
                return o.decorateRoot.add(r), Object.defineProperty(t, "$type", {
                    value: r,
                    enumerable: !1
                }), r;
            }, Object.defineProperty(o, "decorateRoot", {
                get: function get() {
                    return s.decorated || (s.decorated = new (e(29))());
                }
            });
        }, {
            15: 15,
            29: 29,
            3: 3,
            30: 30,
            35: 35,
            39: 39,
            5: 5,
            8: 8
        } ],
        38: [ function(e, t, r) {
            t.exports = LongBits;
            var n = e(39);
            function LongBits(e, t) {
                this.lo = e >>> 0, this.hi = t >>> 0;
            }
            var i = LongBits.zero = new LongBits(0, 0);
            i.toNumber = function() {
                return 0;
            }, i.zzEncode = i.zzDecode = function() {
                return this;
            }, i.length = function() {
                return 1;
            };
            var o = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
            LongBits.fromNumber = function(e) {
                if (0 === e) return i;
                var t = e < 0;
                t && (e = -e);
                var r = e >>> 0, n = (e - r) / 4294967296 >>> 0;
                return t && (n = ~n >>> 0, r = ~r >>> 0, ++r > 4294967295 && (r = 0, ++n > 4294967295 && (n = 0))), 
                new LongBits(r, n);
            }, LongBits.from = function(e) {
                if ("number" == typeof e) return LongBits.fromNumber(e);
                if (n.isString(e)) {
                    if (!n.Long) return LongBits.fromNumber(parseInt(e, 10));
                    e = n.Long.fromString(e);
                }
                return e.low || e.high ? new LongBits(e.low >>> 0, e.high >>> 0) : i;
            }, LongBits.prototype.toNumber = function(e) {
                if (!e && this.hi >>> 31) {
                    var t = 1 + ~this.lo >>> 0, r = ~this.hi >>> 0;
                    return t || (r = r + 1 >>> 0), -(t + 4294967296 * r);
                }
                return this.lo + 4294967296 * this.hi;
            }, LongBits.prototype.toLong = function(e) {
                return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: Boolean(e)
                };
            };
            var s = String.prototype.charCodeAt;
            LongBits.fromHash = function(e) {
                return e === o ? i : new LongBits((s.call(e, 0) | s.call(e, 1) << 8 | s.call(e, 2) << 16 | s.call(e, 3) << 24) >>> 0, (s.call(e, 4) | s.call(e, 5) << 8 | s.call(e, 6) << 16 | s.call(e, 7) << 24) >>> 0);
            }, LongBits.prototype.toHash = function() {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
            }, LongBits.prototype.zzEncode = function() {
                var e = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, 
                this;
            }, LongBits.prototype.zzDecode = function() {
                var e = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, 
                this;
            }, LongBits.prototype.length = function() {
                var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, r = this.hi >>> 24;
                return 0 === r ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : r < 128 ? 9 : 10;
            };
        }, {
            39: 39
        } ],
        39: [ function(e, t, r) {
            var n = r;
            function merge(e, t, r) {
                for (var n = Object.keys(t), i = 0; i < n.length; ++i) {
                    e[n[i]] !== undefined && r || (e[n[i]] = t[n[i]]);
                }
                return e;
            }
            function newError(e) {
                function CustomError(e, t) {
                    if (!(this instanceof CustomError)) return new CustomError(e, t);
                    Object.defineProperty(this, "message", {
                        get: function get() {
                            return e;
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, CustomError) : Object.defineProperty(this, "stack", {
                        value: new Error().stack || ""
                    }), t && merge(this, t);
                }
                return (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError, 
                Object.defineProperty(CustomError.prototype, "name", {
                    get: function get() {
                        return e;
                    }
                }), CustomError.prototype.toString = function() {
                    return this.name + ": " + this.message;
                }, CustomError;
            }
            n.asPromise = e(1), n.base64 = e(2), n.EventEmitter = e(4), n.float = e(6), n.inquire = e(7), 
            n.utf8 = e(10), n.pool = e(9), n.LongBits = e(38), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, 
            n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, 
            n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), 
            n.isInteger = Number.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
            }, n.isString = function(e) {
                return "string" == typeof e || e instanceof String;
            }, n.isObject = function(e) {
                return e && "object" == _typeof2(e);
            }, n.isset = n.isSet = function(e, t) {
                var r = e[t];
                return !(null == r || !e.hasOwnProperty(t)) && ("object" != _typeof2(r) || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0);
            }, n.Buffer = function() {
                try {
                    var e = n.inquire("buffer").Buffer;
                    return e.prototype.utf8Write ? e : null;
                } catch (e) {
                    e = null;//.handleException(e);
                    return null;
                }
            }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(e) {
                return "number" == typeof e ? n.Buffer ? n._Buffer_allocUnsafe(e) : new n.Array(e) : n.Buffer ? n._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e);
            }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), 
            n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, 
            n.longToHash = function(e) {
                return e ? n.LongBits.from(e).toHash() : n.LongBits.zeroHash;
            }, n.longFromHash = function(e, t) {
                var r = n.LongBits.fromHash(e);
                return n.Long ? n.Long.fromBits(r.lo, r.hi, t) : r.toNumber(Boolean(t));
            }, n.merge = merge, n.lcFirst = function(e) {
                return e.charAt(0).toLowerCase() + e.substring(1);
            }, n.newError = newError, n.ProtocolError = newError("ProtocolError"), n.oneOfGetter = function(e) {
                for (var t = {}, r = 0; r < e.length; ++r) {
                    t[e[r]] = 1;
                }
                return function() {
                    for (var e = Object.keys(this), r = e.length - 1; r > -1; --r) {
                        if (1 === t[e[r]] && this[e[r]] !== undefined && null !== this[e[r]]) return e[r];
                    }
                };
            }, n.oneOfSetter = function(e) {
                return function(t) {
                    for (var r = 0; r < e.length; ++r) {
                        e[r] !== t && delete this[e[r]];
                    }
                };
            }, n.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, n._configure = function() {
                var e = n.Buffer;
                e ? (n._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, r) {
                    return new e(t, r);
                }, n._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
                    return new e(t);
                }) : n._Buffer_from = n._Buffer_allocUnsafe = null;
            };
        }, {
            1: 1,
            10: 10,
            2: 2,
            38: 38,
            4: 4,
            6: 6,
            7: 7,
            9: 9
        } ],
        40: [ function(e, t, r) {
            t.exports = function(e) {
                var t = i.codegen([ "m" ], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"), r = e.oneofsArray, n = {};
                r.length && t("var p={}");
                for (var o = 0; o < e.fieldsArray.length; ++o) {
                    var s = e._fieldsArray[o].resolve(), a = "m" + i.safeProp(s.name);
                    if (s.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", a, s.name), s.map) t("if(!util.isObject(%s))", a)("return%j", invalid(s, "object"))("var k=Object.keys(%s)", a)("for(var i=0;i<k.length;++i){"), 
                    genVerifyKey(t, s, "k[i]"), genVerifyValue(t, s, o, a + "[k[i]]")("}"); else if (s.repeated) t("if(!Array.isArray(%s))", a)("return%j", invalid(s, "array"))("for(var i=0;i<%s.length;++i){", a), 
                    genVerifyValue(t, s, o, a + "[i]")("}"); else {
                        if (s.partOf) {
                            var f = i.safeProp(s.partOf.name);
                            1 === n[s.partOf.name] && t("if(p%s===1)", f)("return%j", s.partOf.name + ": multiple values"), 
                            n[s.partOf.name] = 1, t("p%s=1", f);
                        }
                        genVerifyValue(t, s, o, a);
                    }
                    s.optional && t("}");
                }
                return t("return null");
            };
            var n = e(15), i = e(37);
            function invalid(e, t) {
                return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected";
            }
            function genVerifyValue(e, t, r, i) {
                if (t.resolvedType) {
                    if (t.resolvedType instanceof n) {
                        e("switch(%s){", i)("default:")("return%j", invalid(t, "enum value"));
                        for (var o = Object.keys(t.resolvedType.values), s = 0; s < o.length; ++s) {
                            e("case %i:", t.resolvedType.values[o[s]]);
                        }
                        e("break")("}");
                    } else e("{")("var e=types[%i].verify(%s);", r, i)("if(e)")("return%j+e", t.name + ".")("}");
                } else switch (t.type) {
                  case "int32":
                  case "uint32":
                  case "sint32":
                  case "fixed32":
                  case "sfixed32":
                    e("if(!util.isInteger(%s))", i)("return%j", invalid(t, "integer"));
                    break;

                  case "int64":
                  case "uint64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", invalid(t, "integer|Long"));
                    break;

                  case "float":
                  case "double":
                    e('if(typeof %s!=="number")', i)("return%j", invalid(t, "number"));
                    break;

                  case "bool":
                    e('if(typeof %s!=="boolean")', i)("return%j", invalid(t, "boolean"));
                    break;

                  case "string":
                    e("if(!util.isString(%s))", i)("return%j", invalid(t, "string"));
                    break;

                  case "bytes":
                    e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)("return%j", invalid(t, "buffer"));
                }
                return e;
            }
            function genVerifyKey(e, t, r) {
                switch (t.keyType) {
                  case "int32":
                  case "uint32":
                  case "sint32":
                  case "fixed32":
                  case "sfixed32":
                    e("if(!util.key32Re.test(%s))", r)("return%j", invalid(t, "integer key"));
                    break;

                  case "int64":
                  case "uint64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e("if(!util.key64Re.test(%s))", r)("return%j", invalid(t, "integer|Long key"));
                    break;

                  case "bool":
                    e("if(!util.key2Re.test(%s))", r)("return%j", invalid(t, "boolean key"));
                }
                return e;
            }
        }, {
            15: 15,
            37: 37
        } ],
        41: [ function(e, t, r) {
            var n = r, i = e(21);
            n[".google.protobuf.Any"] = {
                fromObject: function fromObject(e) {
                    if (e && e["@type"]) {
                        var t = this.lookup(e["@type"]);
                        if (t) {
                            var r = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
                            return this.create({
                                type_url: "/" + r,
                                value: t.encode(t.fromObject(e)).finish()
                            });
                        }
                    }
                    return this.fromObject(e);
                },
                toObject: function toObject(e, t) {
                    if (t && t.json && e.type_url && e.value) {
                        var r = e.type_url.substring(e.type_url.lastIndexOf("/") + 1), n = this.lookup(r);
                        n && (e = n.decode(e.value));
                    }
                    if (!(e instanceof this.ctor) && e instanceof i) {
                        var o = e.$type.toObject(e, t);
                        return o["@type"] = e.$type.fullName, o;
                    }
                    return this.toObject(e, t);
                }
            };
        }, {
            21: 21
        } ],
        42: [ function(e, t, r) {
            t.exports = Writer;
            var n, i = e(39), o = i.LongBits, s = i.base64, a = i.utf8;
            function Op(e, t, r) {
                this.fn = e, this.len = t, this.next = undefined, this.val = r;
            }
            function noop() {}
            function State(e) {
                this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states;
            }
            function Writer() {
                this.len = 0, this.head = new Op(noop, 0, 0), this.tail = this.head, this.states = null;
            }
            function writeByte(e, t, r) {
                t[r] = 255 & e;
            }
            function VarintOp(e, t) {
                this.len = e, this.next = undefined, this.val = t;
            }
            function writeVarint64(e, t, r) {
                for (;e.hi; ) {
                    t[r++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
                }
                for (;e.lo > 127; ) {
                    t[r++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;
                }
                t[r++] = e.lo;
            }
            function writeFixed32(e, t, r) {
                t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24;
            }
            Writer.create = i.Buffer ? function() {
                return (Writer.create = function() {
                    return new n();
                })();
            } : function() {
                return new Writer();
            }, Writer.alloc = function(e) {
                return new i.Array(e);
            }, i.Array !== Array && (Writer.alloc = i.pool(Writer.alloc, i.Array.prototype.subarray)), 
            Writer.prototype._push = function(e, t, r) {
                return this.tail = this.tail.next = new Op(e, t, r), this.len += t, this;
            }, VarintOp.prototype = Object.create(Op.prototype), VarintOp.prototype.fn = function(e, t, r) {
                for (;e > 127; ) {
                    t[r++] = 127 & e | 128, e >>>= 7;
                }
                t[r] = e;
            }, Writer.prototype.uint32 = function(e) {
                return this.len += (this.tail = this.tail.next = new VarintOp((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, 
                this;
            }, Writer.prototype.int32 = function(e) {
                return e < 0 ? this._push(writeVarint64, 10, o.fromNumber(e)) : this.uint32(e);
            }, Writer.prototype.sint32 = function(e) {
                return this.uint32((e << 1 ^ e >> 31) >>> 0);
            }, Writer.prototype.uint64 = function(e) {
                var t = o.from(e);
                return this._push(writeVarint64, t.length(), t);
            }, Writer.prototype.int64 = Writer.prototype.uint64, Writer.prototype.sint64 = function(e) {
                var t = o.from(e).zzEncode();
                return this._push(writeVarint64, t.length(), t);
            }, Writer.prototype.bool = function(e) {
                return this._push(writeByte, 1, e ? 1 : 0);
            }, Writer.prototype.fixed32 = function(e) {
                return this._push(writeFixed32, 4, e >>> 0);
            }, Writer.prototype.sfixed32 = Writer.prototype.fixed32, Writer.prototype.fixed64 = function(e) {
                var t = o.from(e);
                return this._push(writeFixed32, 4, t.lo)._push(writeFixed32, 4, t.hi);
            }, Writer.prototype.sfixed64 = Writer.prototype.fixed64, Writer.prototype.float = function(e) {
                return this._push(i.float.writeFloatLE, 4, e);
            }, Writer.prototype.double = function(e) {
                return this._push(i.float.writeDoubleLE, 8, e);
            };
            var f = i.Array.prototype.set ? function(e, t, r) {
                t.set(e, r);
            } : function(e, t, r) {
                for (var n = 0; n < e.length; ++n) {
                    t[r + n] = e[n];
                }
            };
            Writer.prototype.bytes = function(e) {
                var t = e.length >>> 0;
                if (!t) return this._push(writeByte, 1, 0);
                if (i.isString(e)) {
                    var r = Writer.alloc(t = s.length(e));
                    s.decode(e, r, 0), e = r;
                }
                return this.uint32(t)._push(f, t, e);
            }, Writer.prototype.string = function(e) {
                var t = a.length(e);
                return t ? this.uint32(t)._push(a.write, t, e) : this._push(writeByte, 1, 0);
            }, Writer.prototype.fork = function() {
                return this.states = new State(this), this.head = this.tail = new Op(noop, 0, 0), 
                this.len = 0, this;
            }, Writer.prototype.reset = function() {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, 
                this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Op(noop, 0, 0), 
                this.len = 0), this;
            }, Writer.prototype.ldelim = function() {
                var e = this.head, t = this.tail, r = this.len;
                return this.reset().uint32(r), r && (this.tail.next = e.next, this.tail = t, this.len += r), 
                this;
            }, Writer.prototype.finish = function() {
                for (var e = this.head.next, t = this.constructor.alloc(this.len), r = 0; e; ) {
                    e.fn(e.val, t, r), r += e.len, e = e.next;
                }
                return t;
            }, Writer._configure = function(e) {
                n = e;
            };
        }, {
            39: 39
        } ],
        43: [ function(e, t, r) {
            t.exports = BufferWriter;
            var n = e(42);
            (BufferWriter.prototype = Object.create(n.prototype)).constructor = BufferWriter;
            var i = e(39), o = i.Buffer;
            function BufferWriter() {
                n.call(this);
            }
            BufferWriter.alloc = function(e) {
                return (BufferWriter.alloc = i._Buffer_allocUnsafe)(e);
            };
            var s = o && o.prototype instanceof Uint8Array && "set" === o.prototype.set.name ? function(e, t, r) {
                t.set(e, r);
            } : function(e, t, r) {
                if (e.copy) e.copy(t, r, 0, e.length); else for (var n = 0; n < e.length; ) {
                    t[r++] = e[n++];
                }
            };
            function writeStringBuffer(e, t, r) {
                e.length < 40 ? i.utf8.write(e, t, r) : t.utf8Write(e, r);
            }
            BufferWriter.prototype.bytes = function(e) {
                i.isString(e) && (e = i._Buffer_from(e, "base64"));
                var t = e.length >>> 0;
                return this.uint32(t), t && this._push(s, t, e), this;
            }, BufferWriter.prototype.string = function(e) {
                var t = o.byteLength(e);
                return this.uint32(t), t && this._push(writeStringBuffer, t, e), this;
            };
        }, {
            39: 39,
            42: 42
        } ]
    }, {}, [ 19 ]);
}();