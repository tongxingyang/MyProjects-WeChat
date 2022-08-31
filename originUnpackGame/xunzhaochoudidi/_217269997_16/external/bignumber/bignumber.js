var _typeof2 = require("../../@babel/runtime/helpers/typeof");

!function(e) {
    "use strict";
    var r, n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, t = Math.ceil, i = Math.floor, o = "[BigNumber Error] ", u = o + "Number primitive has more than 15 significant digits: ", f = 1e14, c = 14, s = 9007199254740991, l = [ 1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13 ], a = 1e7, g = 1e9;
    function bitFloor(e) {
        var r = 0 | e;
        return e > 0 || e === r ? r : r - 1;
    }
    function coeffToString(e) {
        for (var r, n, t = 1, i = e.length, o = e[0] + ""; t < i; ) {
            for (r = e[t++] + "", n = c - r.length; n--; r = "0" + r) {}
            o += r;
        }
        for (i = o.length; 48 === o.charCodeAt(--i); ) {}
        return o.slice(0, i + 1 || 1);
    }
    function compare(e, r) {
        var n, t, i = e.c, o = r.c, u = e.s, f = r.s, c = e.e, s = r.e;
        if (!u || !f) return null;
        if (n = i && !i[0], t = o && !o[0], n || t) return n ? t ? 0 : -f : u;
        if (u != f) return u;
        if (n = u < 0, t = c == s, !i || !o) return t ? 0 : !i ^ n ? 1 : -1;
        if (!t) return c > s ^ n ? 1 : -1;
        for (f = (c = i.length) < (s = o.length) ? c : s, u = 0; u < f; u++) {
            if (i[u] != o[u]) return i[u] > o[u] ^ n ? 1 : -1;
        }
        return c == s ? 0 : c > s ^ n ? 1 : -1;
    }
    function intCheck(e, r, n, u) {
        if (e < r || e > n || e !== (e < 0 ? t(e) : i(e))) throw Error(o + (u || "Argument") + ("number" == typeof e ? e < r || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
    }
    function isOdd(e) {
        var r = e.c.length - 1;
        return bitFloor(e.e / c) == r && e.c[r] % 2 != 0;
    }
    function toExponential(e, r) {
        return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r;
    }
    function toFixedPoint(e, r, n) {
        var t, i;
        if (r < 0) {
            for (i = n + "."; ++r; i += n) {}
            e = i + e;
        } else if (++r > (t = e.length)) {
            for (i = n, r -= t; --r; i += n) {}
            e += i;
        } else r < t && (e = e.slice(0, r) + "." + e.slice(r));
        return e;
    }
    (r = function clone(e) {
        var r, m, h, b, N, p, B, d, w, O = BigNumber.prototype = {
            constructor: BigNumber,
            toString: null,
            valueOf: null
        }, v = new BigNumber(1), y = 20, E = 4, C = -7, S = 21, x = -1e7, A = 1e7, F = !1, k = 1, P = 0, T = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: " ",
            suffix: ""
        }, R = "0123456789abcdefghijklmnopqrstuvwxyz";
        function BigNumber(e, r) {
            var t, o, f, l, a, g, b, N, p = this;
            if (!(p instanceof BigNumber)) return new BigNumber(e, r);
            if (null == r) {
                if (e instanceof BigNumber) return p.s = e.s, p.e = e.e, void (p.c = (e = e.c) ? e.slice() : e);
                if ((g = "number" == typeof e) && 0 * e == 0) {
                    if (p.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                        for (l = 0, a = e; a >= 10; a /= 10, l++) {}
                        return p.e = l, void (p.c = [ e ]);
                    }
                    N = String(e);
                } else {
                    if (N = String(e), !n.test(N)) return h(p, N, g);
                    p.s = 45 == N.charCodeAt(0) ? (N = N.slice(1), -1) : 1;
                }
                (l = N.indexOf(".")) > -1 && (N = N.replace(".", "")), (a = N.search(/e/i)) > 0 ? (l < 0 && (l = a), 
                l += +N.slice(a + 1), N = N.substring(0, a)) : l < 0 && (l = N.length);
            } else {
                if (intCheck(r, 2, R.length, "Base"), N = String(e), 10 == r) return round(p = new BigNumber(e instanceof BigNumber ? e : N), y + p.e + 1, E);
                if (g = "number" == typeof e) {
                    if (0 * e != 0) return h(p, N, g, r);
                    if (p.s = 1 / e < 0 ? (N = N.slice(1), -1) : 1, BigNumber.DEBUG && N.replace(/^0\.0*|\./, "").length > 15) throw Error(u + e);
                    g = !1;
                } else p.s = 45 === N.charCodeAt(0) ? (N = N.slice(1), -1) : 1;
                for (t = R.slice(0, r), l = a = 0, b = N.length; a < b; a++) {
                    if (t.indexOf(o = N.charAt(a)) < 0) {
                        if ("." == o) {
                            if (a > l) {
                                l = b;
                                continue;
                            }
                        } else if (!f && (N == N.toUpperCase() && (N = N.toLowerCase()) || N == N.toLowerCase() && (N = N.toUpperCase()))) {
                            f = !0, a = -1, l = 0;
                            continue;
                        }
                        return h(p, String(e), g, r);
                    }
                }
                (l = (N = m(N, r, 10, p.s)).indexOf(".")) > -1 ? N = N.replace(".", "") : l = N.length;
            }
            for (a = 0; 48 === N.charCodeAt(a); a++) {}
            for (b = N.length; 48 === N.charCodeAt(--b); ) {}
            if (N = N.slice(a, ++b)) {
                if (b -= a, g && BigNumber.DEBUG && b > 15 && (e > s || e !== i(e))) throw Error(u + p.s * e);
                if ((l = l - a - 1) > A) p.c = p.e = null; else if (l < x) p.c = [ p.e = 0 ]; else {
                    if (p.e = l, p.c = [], a = (l + 1) % c, l < 0 && (a += c), a < b) {
                        for (a && p.c.push(+N.slice(0, a)), b -= c; a < b; ) {
                            p.c.push(+N.slice(a, a += c));
                        }
                        N = N.slice(a), a = c - N.length;
                    } else a -= b;
                    for (;a--; N += "0") {}
                    p.c.push(+N);
                }
            } else p.c = [ p.e = 0 ];
        }
        function format(e, r, n, t) {
            var i, o, u, f, c;
            if (null == n ? n = E : intCheck(n, 0, 8), !e.c) return e.toString();
            if (i = e.c[0], u = e.e, null == r) c = coeffToString(e.c), c = 1 == t || 2 == t && (u <= C || u >= S) ? toExponential(c, u) : toFixedPoint(c, u, "0"); else if (o = (e = round(new BigNumber(e), r, n)).e, 
            f = (c = coeffToString(e.c)).length, 1 == t || 2 == t && (r <= o || o <= C)) {
                for (;f < r; c += "0", f++) {}
                c = toExponential(c, o);
            } else if (r -= u, c = toFixedPoint(c, o, "0"), o + 1 > f) {
                if (--r > 0) for (c += "."; r--; c += "0") {}
            } else if ((r += o - f) > 0) for (o + 1 == f && (c += "."); r--; c += "0") {}
            return e.s < 0 && i ? "-" + c : c;
        }
        function maxOrMin(e, r) {
            for (var n, t = 1, i = new BigNumber(e[0]); t < e.length; t++) {
                if (!(n = new BigNumber(e[t])).s) {
                    i = n;
                    break;
                }
                r.call(i, n) && (i = n);
            }
            return i;
        }
        function normalise(e, r, n) {
            for (var t = 1, i = r.length; !r[--i]; r.pop()) {}
            for (i = r[0]; i >= 10; i /= 10, t++) {}
            return (n = t + n * c - 1) > A ? e.c = e.e = null : n < x ? e.c = [ e.e = 0 ] : (e.e = n, 
            e.c = r), e;
        }
        function round(e, r, n, o) {
            var u, s, a, g, m, h, b, N = e.c, p = l;
            if (N) {
                e: {
                    for (u = 1, g = N[0]; g >= 10; g /= 10, u++) {}
                    if ((s = r - u) < 0) s += c, a = r, b = (m = N[h = 0]) / p[u - a - 1] % 10 | 0; else if ((h = t((s + 1) / c)) >= N.length) {
                        if (!o) break e;
                        for (;N.length <= h; N.push(0)) {}
                        m = b = 0, u = 1, a = (s %= c) - c + 1;
                    } else {
                        for (m = g = N[h], u = 1; g >= 10; g /= 10, u++) {}
                        b = (a = (s %= c) - c + u) < 0 ? 0 : m / p[u - a - 1] % 10 | 0;
                    }
                    if (o = o || r < 0 || null != N[h + 1] || (a < 0 ? m : m % p[u - a - 1]), o = n < 4 ? (b || o) && (0 == n || n == (e.s < 0 ? 3 : 2)) : b > 5 || 5 == b && (4 == n || o || 6 == n && (s > 0 ? a > 0 ? m / p[u - a] : 0 : N[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), 
                    r < 1 || !N[0]) return N.length = 0, o ? (r -= e.e + 1, N[0] = p[(c - r % c) % c], 
                    e.e = -r || 0) : N[0] = e.e = 0, e;
                    if (0 == s ? (N.length = h, g = 1, h--) : (N.length = h + 1, g = p[c - s], N[h] = a > 0 ? i(m / p[u - a] % p[a]) * g : 0), 
                    o) for (;;) {
                        if (0 == h) {
                            for (s = 1, a = N[0]; a >= 10; a /= 10, s++) {}
                            for (a = N[0] += g, g = 1; a >= 10; a /= 10, g++) {}
                            s != g && (e.e++, N[0] == f && (N[0] = 1));
                            break;
                        }
                        if (N[h] += g, N[h] != f) break;
                        N[h--] = 0, g = 1;
                    }
                    for (s = N.length; 0 === N[--s]; N.pop()) {}
                }
                e.e > A ? e.c = e.e = null : e.e < x && (e.c = [ e.e = 0 ]);
            }
            return e;
        }
        function valueOf(e) {
            var r, n = e.e;
            return null === n ? e.toString() : (r = coeffToString(e.c), r = n <= C || n >= S ? toExponential(r, n) : toFixedPoint(r, n, "0"), 
            e.s < 0 ? "-" + r : r);
        }
        return BigNumber.clone = clone, BigNumber.ROUND_UP = 0, BigNumber.ROUND_DOWN = 1, 
        BigNumber.ROUND_CEIL = 2, BigNumber.ROUND_FLOOR = 3, BigNumber.ROUND_HALF_UP = 4, 
        BigNumber.ROUND_HALF_DOWN = 5, BigNumber.ROUND_HALF_EVEN = 6, BigNumber.ROUND_HALF_CEIL = 7, 
        BigNumber.ROUND_HALF_FLOOR = 8, BigNumber.EUCLID = 9, BigNumber.config = BigNumber.set = function(e) {
            var r, n;
            if (null != e) {
                if ("object" != _typeof2(e)) throw Error(o + "Object expected: " + e);
                if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (intCheck(n = e[r], 0, g, r), y = n), 
                e.hasOwnProperty(r = "ROUNDING_MODE") && (intCheck(n = e[r], 0, 8, r), E = n), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((n = e[r]) && n.pop ? (intCheck(n[0], -g, 0, r), 
                intCheck(n[1], 0, g, r), C = n[0], S = n[1]) : (intCheck(n, -g, g, r), C = -(S = n < 0 ? -n : n))), 
                e.hasOwnProperty(r = "RANGE")) if ((n = e[r]) && n.pop) intCheck(n[0], -g, -1, r), 
                intCheck(n[1], 1, g, r), x = n[0], A = n[1]; else {
                    if (intCheck(n, -g, g, r), !n) throw Error(o + r + " cannot be zero: " + n);
                    x = -(A = n < 0 ? -n : n);
                }
                if (e.hasOwnProperty(r = "CRYPTO")) {
                    if ((n = e[r]) !== !!n) throw Error(o + r + " not true or false: " + n);
                    if (n) {
                        if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw F = !n, 
                        Error(o + "crypto unavailable");
                        F = n;
                    } else F = n;
                }
                if (e.hasOwnProperty(r = "MODULO_MODE") && (intCheck(n = e[r], 0, 9, r), k = n), 
                e.hasOwnProperty(r = "POW_PRECISION") && (intCheck(n = e[r], 0, g, r), P = n), e.hasOwnProperty(r = "FORMAT")) {
                    if ("object" != _typeof2(n = e[r])) throw Error(o + r + " not an object: " + n);
                    T = n;
                }
                if (e.hasOwnProperty(r = "ALPHABET")) {
                    if ("string" != typeof (n = e[r]) || /^.$|[+-.\s]|(.).*\1/.test(n)) throw Error(o + r + " invalid: " + n);
                    R = n;
                }
            }
            return {
                DECIMAL_PLACES: y,
                ROUNDING_MODE: E,
                EXPONENTIAL_AT: [ C, S ],
                RANGE: [ x, A ],
                CRYPTO: F,
                MODULO_MODE: k,
                POW_PRECISION: P,
                FORMAT: T,
                ALPHABET: R
            };
        }, BigNumber.isBigNumber = function(e) {
            return e instanceof BigNumber || e && !0 === e._isBigNumber || !1;
        }, BigNumber.maximum = BigNumber.max = function() {
            return maxOrMin(arguments, O.lt);
        }, BigNumber.minimum = BigNumber.min = function() {
            return maxOrMin(arguments, O.gt);
        }, BigNumber.random = (b = 9007199254740992 * Math.random() & 2097151 ? function() {
            return i(9007199254740992 * Math.random());
        } : function() {
            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0);
        }, function(e) {
            var r, n, u, f, s, a = 0, m = [], h = new BigNumber(v);
            if (null == e ? e = y : intCheck(e, 0, g), f = t(e / c), F) if (crypto.getRandomValues) {
                for (r = crypto.getRandomValues(new Uint32Array(f *= 2)); a < f; ) {
                    (s = 131072 * r[a] + (r[a + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), 
                    r[a] = n[0], r[a + 1] = n[1]) : (m.push(s % 1e14), a += 2);
                }
                a = f / 2;
            } else {
                if (!crypto.randomBytes) throw F = !1, Error(o + "crypto unavailable");
                for (r = crypto.randomBytes(f *= 7); a < f; ) {
                    (s = 281474976710656 * (31 & r[a]) + 1099511627776 * r[a + 1] + 4294967296 * r[a + 2] + 16777216 * r[a + 3] + (r[a + 4] << 16) + (r[a + 5] << 8) + r[a + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, a) : (m.push(s % 1e14), 
                    a += 7);
                }
                a = f / 7;
            }
            if (!F) for (;a < f; ) {
                (s = b()) < 9e15 && (m[a++] = s % 1e14);
            }
            for (f = m[--a], e %= c, f && e && (s = l[c - e], m[a] = i(f / s) * s); 0 === m[a]; m.pop(), 
            a--) {}
            if (a < 0) m = [ u = 0 ]; else {
                for (u = -1; 0 === m[0]; m.splice(0, 1), u -= c) {}
                for (a = 1, s = m[0]; s >= 10; s /= 10, a++) {}
                a < c && (u -= c - a);
            }
            return h.e = u, h.c = m, h;
        }), BigNumber.sum = function() {
            for (var e = 1, r = arguments, n = new BigNumber(r[0]); e < r.length; ) {
                n = n.plus(r[e++]);
            }
            return n;
        }, m = function() {
            function toBaseOut(e, r, n, t) {
                for (var i, o, u = [ 0 ], f = 0, c = e.length; f < c; ) {
                    for (o = u.length; o--; u[o] *= r) {}
                    for (u[0] += t.indexOf(e.charAt(f++)), i = 0; i < u.length; i++) {
                        u[i] > n - 1 && (null == u[i + 1] && (u[i + 1] = 0), u[i + 1] += u[i] / n | 0, u[i] %= n);
                    }
                }
                return u.reverse();
            }
            return function(e, n, t, i, o) {
                var u, f, c, s, l, a, g, m, h = e.indexOf("."), b = y, N = E;
                for (h >= 0 && (s = P, P = 0, e = e.replace(".", ""), a = (m = new BigNumber(n)).pow(e.length - h), 
                P = s, m.c = toBaseOut(toFixedPoint(coeffToString(a.c), a.e, "0"), 10, t, "0123456789"), 
                m.e = m.c.length), c = s = (g = toBaseOut(e, n, t, o ? (u = R, "0123456789") : (u = "0123456789", 
                R))).length; 0 == g[--s]; g.pop()) {}
                if (!g[0]) return u.charAt(0);
                if (h < 0 ? --c : (a.c = g, a.e = c, a.s = i, g = (a = r(a, m, b, N, t)).c, l = a.r, 
                c = a.e), h = g[f = c + b + 1], s = t / 2, l = l || f < 0 || null != g[f + 1], l = N < 4 ? (null != h || l) && (0 == N || N == (a.s < 0 ? 3 : 2)) : h > s || h == s && (4 == N || l || 6 == N && 1 & g[f - 1] || N == (a.s < 0 ? 8 : 7)), 
                f < 1 || !g[0]) e = l ? toFixedPoint(u.charAt(1), -b, u.charAt(0)) : u.charAt(0); else {
                    if (g.length = f, l) for (--t; ++g[--f] > t; ) {
                        g[f] = 0, f || (++c, g = [ 1 ].concat(g));
                    }
                    for (s = g.length; !g[--s]; ) {}
                    for (h = 0, e = ""; h <= s; e += u.charAt(g[h++])) {}
                    e = toFixedPoint(e, c, u.charAt(0));
                }
                return e;
            };
        }(), r = function() {
            function multiply(e, r, n) {
                var t, i, o, u, f = 0, c = e.length, s = r % a, l = r / a | 0;
                for (e = e.slice(); c--; ) {
                    f = ((i = s * (o = e[c] % a) + (t = l * o + (u = e[c] / a | 0) * s) % a * a + f) / n | 0) + (t / a | 0) + l * u, 
                    e[c] = i % n;
                }
                return f && (e = [ f ].concat(e)), e;
            }
            function compare(e, r, n, t) {
                var i, o;
                if (n != t) o = n > t ? 1 : -1; else for (i = o = 0; i < n; i++) {
                    if (e[i] != r[i]) {
                        o = e[i] > r[i] ? 1 : -1;
                        break;
                    }
                }
                return o;
            }
            function subtract(e, r, n, t) {
                for (var i = 0; n--; ) {
                    e[n] -= i, i = e[n] < r[n] ? 1 : 0, e[n] = i * t + e[n] - r[n];
                }
                for (;!e[0] && e.length > 1; e.splice(0, 1)) {}
            }
            return function(e, r, n, t, o) {
                var u, s, l, a, g, m, h, b, N, p, B, d, w, O, v, y, E, C = e.s == r.s ? 1 : -1, S = e.c, x = r.c;
                if (!(S && S[0] && x && x[0])) return new BigNumber(e.s && r.s && (S ? !x || S[0] != x[0] : x) ? S && 0 == S[0] || !x ? 0 * C : C / 0 : NaN);
                for (N = (b = new BigNumber(C)).c = [], C = n + (s = e.e - r.e) + 1, o || (o = f, 
                s = bitFloor(e.e / c) - bitFloor(r.e / c), C = C / c | 0), l = 0; x[l] == (S[l] || 0); l++) {}
                if (x[l] > (S[l] || 0) && s--, C < 0) N.push(1), a = !0; else {
                    for (O = S.length, y = x.length, l = 0, C += 2, (g = i(o / (x[0] + 1))) > 1 && (x = multiply(x, g, o), 
                    S = multiply(S, g, o), y = x.length, O = S.length), w = y, B = (p = S.slice(0, y)).length; B < y; p[B++] = 0) {}
                    E = x.slice(), E = [ 0 ].concat(E), v = x[0], x[1] >= o / 2 && v++;
                    do {
                        if (g = 0, (u = compare(x, p, y, B)) < 0) {
                            if (d = p[0], y != B && (d = d * o + (p[1] || 0)), (g = i(d / v)) > 1) for (g >= o && (g = o - 1), 
                            h = (m = multiply(x, g, o)).length, B = p.length; 1 == compare(m, p, h, B); ) {
                                g--, subtract(m, y < h ? E : x, h, o), h = m.length, u = 1;
                            } else 0 == g && (u = g = 1), h = (m = x.slice()).length;
                            if (h < B && (m = [ 0 ].concat(m)), subtract(p, m, B, o), B = p.length, -1 == u) for (;compare(x, p, y, B) < 1; ) {
                                g++, subtract(p, y < B ? E : x, B, o), B = p.length;
                            }
                        } else 0 === u && (g++, p = [ 0 ]);
                        N[l++] = g, p[0] ? p[B++] = S[w] || 0 : (p = [ S[w] ], B = 1);
                    } while ((w++ < O || null != p[0]) && C--);
                    a = null != p[0], N[0] || N.splice(0, 1);
                }
                if (o == f) {
                    for (l = 1, C = N[0]; C >= 10; C /= 10, l++) {}
                    round(b, n + (b.e = l + s * c - 1) + 1, t, a);
                } else b.e = s, b.r = +a;
                return b;
            };
        }(), N = /^(-?)0([xbo])(?=\w[\w.]*$)/i, p = /^([^.]+)\.$/, B = /^\.([^.]+)$/, d = /^-?(Infinity|NaN)$/, 
        w = /^\s*\+(?=[\w.])|^\s+|\s+$/g, h = function h(e, r, n, t) {
            var i, u = n ? r : r.replace(w, "");
            if (d.test(u)) e.s = isNaN(u) ? null : u < 0 ? -1 : 1, e.c = e.e = null; else {
                if (!n && (u = u.replace(N, function(e, r, n) {
                    return i = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, t && t != i ? e : r;
                }), t && (i = t, u = u.replace(p, "$1").replace(B, "0.$1")), r != u)) return new BigNumber(u, i);
                if (BigNumber.DEBUG) throw Error(o + "Not a" + (t ? " base " + t : "") + " number: " + r);
                e.c = e.e = e.s = null;
            }
        }, O.absoluteValue = O.abs = function() {
            var e = new BigNumber(this);
            return e.s < 0 && (e.s = 1), e;
        }, O.comparedTo = function(e, r) {
            return compare(this, new BigNumber(e, r));
        }, O.decimalPlaces = O.dp = function(e, r) {
            var n, t, i, o = this;
            if (null != e) return intCheck(e, 0, g), null == r ? r = E : intCheck(r, 0, 8), 
            round(new BigNumber(o), e + o.e + 1, r);
            if (!(n = o.c)) return null;
            if (t = ((i = n.length - 1) - bitFloor(this.e / c)) * c, i = n[i]) for (;i % 10 == 0; i /= 10, 
            t--) {}
            return t < 0 && (t = 0), t;
        }, O.dividedBy = O.div = function(e, n) {
            return r(this, new BigNumber(e, n), y, E);
        }, O.dividedToIntegerBy = O.idiv = function(e, n) {
            return r(this, new BigNumber(e, n), 0, 1);
        }, O.exponentiatedBy = O.pow = function(e, r) {
            var n, u, f, s, l, a, g, m, h = this;
            if ((e = new BigNumber(e)).c && !e.isInteger()) throw Error(o + "Exponent not an integer: " + valueOf(e));
            if (null != r && (r = new BigNumber(r)), l = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return m = new BigNumber(Math.pow(+valueOf(h), l ? 2 - isOdd(e) : +valueOf(e))), 
            r ? m.mod(r) : m;
            if (a = e.s < 0, r) {
                if (r.c ? !r.c[0] : !r.s) return new BigNumber(NaN);
                (u = !a && h.isInteger() && r.isInteger()) && (h = h.mod(r));
            } else {
                if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || l && h.c[1] >= 24e7 : h.c[0] < 8e13 || l && h.c[0] <= 9999975e7))) return s = h.s < 0 && isOdd(e) ? -0 : 0, 
                h.e > -1 && (s = 1 / s), new BigNumber(a ? 1 / s : s);
                P && (s = t(P / c + 2));
            }
            for (l ? (n = new BigNumber(.5), a && (e.s = 1), g = isOdd(e)) : g = (f = Math.abs(+valueOf(e))) % 2, 
            m = new BigNumber(v); ;) {
                if (g) {
                    if (!(m = m.times(h)).c) break;
                    s ? m.c.length > s && (m.c.length = s) : u && (m = m.mod(r));
                }
                if (f) {
                    if (0 === (f = i(f / 2))) break;
                    g = f % 2;
                } else if (round(e = e.times(n), e.e + 1, 1), e.e > 14) g = isOdd(e); else {
                    if (0 == (f = +valueOf(e))) break;
                    g = f % 2;
                }
                h = h.times(h), s ? h.c && h.c.length > s && (h.c.length = s) : u && (h = h.mod(r));
            }
            return u ? m : (a && (m = v.div(m)), r ? m.mod(r) : s ? round(m, P, E, void 0) : m);
        }, O.integerValue = function(e) {
            var r = new BigNumber(this);
            return null == e ? e = E : intCheck(e, 0, 8), round(r, r.e + 1, e);
        }, O.isEqualTo = O.eq = function(e, r) {
            return 0 === compare(this, new BigNumber(e, r));
        }, O.isFinite = function() {
            return !!this.c;
        }, O.isGreaterThan = O.gt = function(e, r) {
            return compare(this, new BigNumber(e, r)) > 0;
        }, O.isGreaterThanOrEqualTo = O.gte = function(e, r) {
            return 1 === (r = compare(this, new BigNumber(e, r))) || 0 === r;
        }, O.isInteger = function() {
            return !!this.c && bitFloor(this.e / c) > this.c.length - 2;
        }, O.isLessThan = O.lt = function(e, r) {
            return compare(this, new BigNumber(e, r)) < 0;
        }, O.isLessThanOrEqualTo = O.lte = function(e, r) {
            return -1 === (r = compare(this, new BigNumber(e, r))) || 0 === r;
        }, O.isNaN = function() {
            return !this.s;
        }, O.isNegative = function() {
            return this.s < 0;
        }, O.isPositive = function() {
            return this.s > 0;
        }, O.isZero = function() {
            return !!this.c && 0 == this.c[0];
        }, O.minus = function(e, r) {
            var n, t, i, o, u = this, s = u.s;
            if (r = (e = new BigNumber(e, r)).s, !s || !r) return new BigNumber(NaN);
            if (s != r) return e.s = -r, u.plus(e);
            var l = u.e / c, a = e.e / c, g = u.c, m = e.c;
            if (!l || !a) {
                if (!g || !m) return g ? (e.s = -r, e) : new BigNumber(m ? u : NaN);
                if (!g[0] || !m[0]) return m[0] ? (e.s = -r, e) : new BigNumber(g[0] ? u : 3 == E ? -0 : 0);
            }
            if (l = bitFloor(l), a = bitFloor(a), g = g.slice(), s = l - a) {
                for ((o = s < 0) ? (s = -s, i = g) : (a = l, i = m), i.reverse(), r = s; r--; i.push(0)) {}
                i.reverse();
            } else for (t = (o = (s = g.length) < (r = m.length)) ? s : r, s = r = 0; r < t; r++) {
                if (g[r] != m[r]) {
                    o = g[r] < m[r];
                    break;
                }
            }
            if (o && (i = g, g = m, m = i, e.s = -e.s), (r = (t = m.length) - (n = g.length)) > 0) for (;r--; g[n++] = 0) {}
            for (r = f - 1; t > s; ) {
                if (g[--t] < m[t]) {
                    for (n = t; n && !g[--n]; g[n] = r) {}
                    --g[n], g[t] += f;
                }
                g[t] -= m[t];
            }
            for (;0 == g[0]; g.splice(0, 1), --a) {}
            return g[0] ? normalise(e, g, a) : (e.s = 3 == E ? -1 : 1, e.c = [ e.e = 0 ], e);
        }, O.modulo = O.mod = function(e, n) {
            var t, i, o = this;
            return e = new BigNumber(e, n), !o.c || !e.s || e.c && !e.c[0] ? new BigNumber(NaN) : !e.c || o.c && !o.c[0] ? new BigNumber(o) : (9 == k ? (i = e.s, 
            e.s = 1, t = r(o, e, 0, 3), e.s = i, t.s *= i) : t = r(o, e, 0, k), (e = o.minus(t.times(e))).c[0] || 1 != k || (e.s = o.s), 
            e);
        }, O.multipliedBy = O.times = function(e, r) {
            var n, t, i, o, u, s, l, g, m, h, b, N, p, B, d, w = this, O = w.c, v = (e = new BigNumber(e, r)).c;
            if (!(O && v && O[0] && v[0])) return !w.s || !e.s || O && !O[0] && !v || v && !v[0] && !O ? e.c = e.e = e.s = null : (e.s *= w.s, 
            O && v ? (e.c = [ 0 ], e.e = 0) : e.c = e.e = null), e;
            for (t = bitFloor(w.e / c) + bitFloor(e.e / c), e.s *= w.s, (l = O.length) < (h = v.length) && (p = O, 
            O = v, v = p, i = l, l = h, h = i), i = l + h, p = []; i--; p.push(0)) {}
            for (B = f, d = a, i = h; --i >= 0; ) {
                for (n = 0, b = v[i] % d, N = v[i] / d | 0, o = i + (u = l); o > i; ) {
                    n = ((g = b * (g = O[--u] % d) + (s = N * g + (m = O[u] / d | 0) * b) % d * d + p[o] + n) / B | 0) + (s / d | 0) + N * m, 
                    p[o--] = g % B;
                }
                p[o] = n;
            }
            return n ? ++t : p.splice(0, 1), normalise(e, p, t);
        }, O.negated = function() {
            var e = new BigNumber(this);
            return e.s = -e.s || null, e;
        }, O.plus = function(e, r) {
            var n, t = this, i = t.s;
            if (r = (e = new BigNumber(e, r)).s, !i || !r) return new BigNumber(NaN);
            if (i != r) return e.s = -r, t.minus(e);
            var o = t.e / c, u = e.e / c, s = t.c, l = e.c;
            if (!o || !u) {
                if (!s || !l) return new BigNumber(i / 0);
                if (!s[0] || !l[0]) return l[0] ? e : new BigNumber(s[0] ? t : 0 * i);
            }
            if (o = bitFloor(o), u = bitFloor(u), s = s.slice(), i = o - u) {
                for (i > 0 ? (u = o, n = l) : (i = -i, n = s), n.reverse(); i--; n.push(0)) {}
                n.reverse();
            }
            for ((i = s.length) - (r = l.length) < 0 && (n = l, l = s, s = n, r = i), i = 0; r; ) {
                i = (s[--r] = s[r] + l[r] + i) / f | 0, s[r] = f === s[r] ? 0 : s[r] % f;
            }
            return i && (s = [ i ].concat(s), ++u), normalise(e, s, u);
        }, O.precision = O.sd = function(e, r) {
            var n, t, i, o = this;
            if (null != e && e !== !!e) return intCheck(e, 1, g), null == r ? r = E : intCheck(r, 0, 8), 
            round(new BigNumber(o), e, r);
            if (!(n = o.c)) return null;
            if (t = (i = n.length - 1) * c + 1, i = n[i]) {
                for (;i % 10 == 0; i /= 10, t--) {}
                for (i = n[0]; i >= 10; i /= 10, t++) {}
            }
            return e && o.e + 1 > t && (t = o.e + 1), t;
        }, O.shiftedBy = function(e) {
            return intCheck(e, -s, s), this.times("1e" + e);
        }, O.squareRoot = O.sqrt = function() {
            var e, n, t, i, o, u = this, f = u.c, c = u.s, s = u.e, l = y + 4, a = new BigNumber("0.5");
            if (1 !== c || !f || !f[0]) return new BigNumber(!c || c < 0 && (!f || f[0]) ? NaN : f ? u : 1 / 0);
            if (0 == (c = Math.sqrt(+valueOf(u))) || c == 1 / 0 ? (((n = coeffToString(f)).length + s) % 2 == 0 && (n += "0"), 
            c = Math.sqrt(+n), s = bitFloor((s + 1) / 2) - (s < 0 || s % 2), t = new BigNumber(n = c == 1 / 0 ? "1e" + s : (n = c.toExponential()).slice(0, n.indexOf("e") + 1) + s)) : t = new BigNumber(c + ""), 
            t.c[0]) for ((c = (s = t.e) + l) < 3 && (c = 0); ;) {
                if (o = t, t = a.times(o.plus(r(u, o, l, 1))), coeffToString(o.c).slice(0, c) === (n = coeffToString(t.c)).slice(0, c)) {
                    if (t.e < s && --c, "9999" != (n = n.slice(c - 3, c + 1)) && (i || "4999" != n)) {
                        +n && (+n.slice(1) || "5" != n.charAt(0)) || (round(t, t.e + y + 2, 1), e = !t.times(t).eq(u));
                        break;
                    }
                    if (!i && (round(o, o.e + y + 2, 0), o.times(o).eq(u))) {
                        t = o;
                        break;
                    }
                    l += 4, c += 4, i = 1;
                }
            }
            return round(t, t.e + y + 1, E, e);
        }, O.toExponential = function(e, r) {
            return null != e && (intCheck(e, 0, g), e++), format(this, e, r, 1);
        }, O.toFixed = function(e, r) {
            return null != e && (intCheck(e, 0, g), e = e + this.e + 1), format(this, e, r);
        }, O.toFormat = function(e, r, n) {
            var t, i = this;
            if (null == n) null != e && r && "object" == _typeof2(r) ? (n = r, r = null) : e && "object" == _typeof2(e) ? (n = e, 
            e = r = null) : n = T; else if ("object" != _typeof2(n)) throw Error(o + "Argument not an object: " + n);
            if (t = i.toFixed(e, r), i.c) {
                var u, f = t.split("."), c = +n.groupSize, s = +n.secondaryGroupSize, l = n.groupSeparator || "", a = f[0], g = f[1], m = i.s < 0, h = m ? a.slice(1) : a, b = h.length;
                if (s && (u = c, c = s, s = u, b -= u), c > 0 && b > 0) {
                    for (u = b % c || c, a = h.substr(0, u); u < b; u += c) {
                        a += l + h.substr(u, c);
                    }
                    s > 0 && (a += l + h.slice(u)), m && (a = "-" + a);
                }
                t = g ? a + (n.decimalSeparator || "") + ((s = +n.fractionGroupSize) ? g.replace(new RegExp("\\d{" + s + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : g) : a;
            }
            return (n.prefix || "") + t + (n.suffix || "");
        }, O.toFraction = function(e) {
            var n, t, i, u, f, s, a, g, m, h, b, N, p = this, B = p.c;
            if (null != e && (!(a = new BigNumber(e)).isInteger() && (a.c || 1 !== a.s) || a.lt(v))) throw Error(o + "Argument " + (a.isInteger() ? "out of range: " : "not an integer: ") + valueOf(a));
            if (!B) return new BigNumber(p);
            for (n = new BigNumber(v), m = t = new BigNumber(v), i = g = new BigNumber(v), N = coeffToString(B), 
            f = n.e = N.length - p.e - 1, n.c[0] = l[(s = f % c) < 0 ? c + s : s], e = !e || a.comparedTo(n) > 0 ? f > 0 ? n : m : a, 
            s = A, A = 1 / 0, a = new BigNumber(N), g.c[0] = 0; h = r(a, n, 0, 1), 1 != (u = t.plus(h.times(i))).comparedTo(e); ) {
                t = i, i = u, m = g.plus(h.times(u = m)), g = u, n = a.minus(h.times(u = n)), a = u;
            }
            return u = r(e.minus(t), i, 0, 1), g = g.plus(u.times(m)), t = t.plus(u.times(i)), 
            g.s = m.s = p.s, b = r(m, i, f *= 2, E).minus(p).abs().comparedTo(r(g, t, f, E).minus(p).abs()) < 1 ? [ m, i ] : [ g, t ], 
            A = s, b;
        }, O.toNumber = function() {
            return +valueOf(this);
        }, O.toPrecision = function(e, r) {
            return null != e && intCheck(e, 1, g), format(this, e, r, 2);
        }, O.toString = function(e) {
            var r, n = this, t = n.s, i = n.e;
            return null === i ? t ? (r = "Infinity", t < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = i <= C || i >= S ? toExponential(coeffToString(n.c), i) : toFixedPoint(coeffToString(n.c), i, "0") : 10 === e ? r = toFixedPoint(coeffToString((n = round(new BigNumber(n), y + i + 1, E)).c), n.e, "0") : (intCheck(e, 2, R.length, "Base"), 
            r = m(toFixedPoint(coeffToString(n.c), i, "0"), 10, e, t, !0)), t < 0 && n.c[0] && (r = "-" + r)), 
            r;
        }, O.valueOf = O.toJSON = function() {
            return valueOf(this);
        }, O._isBigNumber = !0, "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) && (O[Symbol.toStringTag] = "BigNumber", 
        O[Symbol.for("nodejs.util.inspect.custom")] = O.valueOf), null != e && BigNumber.set(e), 
        BigNumber;
    }()).default = r.BigNumber = r, window.BigNumber = r;
}();