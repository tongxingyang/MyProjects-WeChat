System.register([ "./json-asset-933a1d4c.js", "./index-f2b92470.js" ], function(n) {
    var r;
    return {
        setters: [ function(n) {
            r = n.V;
        }, function() {} ],
        execute: function() {
            function t(n, r) {
                var t = r.length;
                return r[n < 0 ? t - -n % t : n % t];
            }
            function e(n, r, e) {
                for (var u = []; r < n; ) r += e.length;
                for (;n <= r; ++n) u.push(t(n, e));
                return u;
            }
            function u(n) {
                l(n);
                for (var s, v, g, m, M, p, C = [], d = new r(), b = new r(), j = 0, w = 0, _ = 0; _ < n.length; ++_) if (f(_, n)) {
                    v = g = 1e8;
                    for (var k = 0; k < n.length; ++k) o(t(_ - 1, n), t(_, n), t(k, n)) && h(t(_ - 1, n), t(_, n), t(k - 1, n)) && (m = y(t(_ - 1, n), t(_, n), t(k, n), t(k - 1, n)), 
                    a(t(_ + 1, n), t(_, n), m) && (s = x(t(_, n), m)) < v && (v = s, d = m, j = k)), 
                    o(t(_ + 1, n), t(_, n), t(k + 1, n)) && h(t(_ + 1, n), t(_, n), t(k, n)) && (m = y(t(_ + 1, n), t(_, n), t(k, n), t(k + 1, n)), 
                    o(t(_ - 1, n), t(_, n), m) && (s = x(t(_, n), m)) < g && (g = s, w = k, b = m));
                    if (j == (w + 1) % n.length) {
                        var P = d.add(b).multiplyScalar(.5);
                        (M = e(_, w, n)).push(P), (p = e(j, _, n)).push(P);
                    } else {
                        for (var S = 0, W = j; w < j; ) w += n.length;
                        for (var z = j; z <= w; ++z) if (i(_, z, n)) {
                            var F = 1 / (x(t(_, n), t(z, n)) + 1);
                            f(z, n) ? h(t(z - 1, n), t(z, n), t(_, n)) && c(t(z + 1, n), t(z, n), t(_, n)) ? F += 3 : F += 2 : F += 1, 
                            F > S && (W = z, S = F);
                        }
                        M = e(_, W, n), p = e(W, _, n);
                    }
                    return (C = C.concat(u(M))).concat(u(p));
                }
                C.push(n);
                for (var I = C.length - 1; I >= 0; I--) 0 == C[I].length && C.splice(I, 0);
                return C;
            }
            function i(n, e, u) {
                if (f(n, u)) {
                    if (c(t(n, u), t(n - 1, u), t(e, u)) && h(t(n, u), t(n + 1, u), t(e, u))) return !1;
                } else if (h(t(n, u), t(n + 1, u), t(e, u)) || c(t(n, u), t(n - 1, u), t(e, u))) return !1;
                if (f(e, u)) {
                    if (c(t(e, u), t(e - 1, u), t(n, u)) && h(t(e, u), t(e + 1, u), t(n, u))) return !1;
                } else if (h(t(e, u), t(e + 1, u), t(n, u)) || c(t(e, u), t(e - 1, u), t(n, u))) return !1;
                for (var i = 0; i < u.length; ++i) if ((i + 1) % u.length != n && i != n && (i + 1) % u.length != e && i != e) {
                    var a = new r();
                    if (v(t(n, u), t(e, u), t(i, u), t(i + 1, u), a)) return !1;
                }
                return !0;
            }
            function f(n, r) {
                return a(n, r);
            }
            function a(n, r, e) {
                if (void 0 === e) {
                    var u = n, i = r;
                    n = t(u - 1, i), r = t(u, i), e = t(u + 1, i);
                }
                return g(n, r, e) < 0;
            }
            function o(n, r, t) {
                return g(n, r, t) > 0;
            }
            function c(n, r, t) {
                return g(n, r, t) >= 0;
            }
            function h(n, r, t) {
                return g(n, r, t) <= 0;
            }
            function x(n, r) {
                var t = r.x - n.x, e = r.y - n.y;
                return t * t + e * e;
            }
            function l(n) {
                s(n) || n.reverse();
            }
            function s(n) {
                return n.length < 3 || function(n) {
                    var r, t = 0;
                    for (r = 0; r < n.length; r++) {
                        var e = (r + 1) % n.length;
                        t += n[r].x * n[e].y, t -= n[r].y * n[e].x;
                    }
                    return t / 2;
                }(n) > 0;
            }
            function y(n, t, e, u) {
                var i, f = new r(), a = t.y - n.y, o = n.x - t.x, c = a * n.x + o * n.y, h = u.y - e.y, x = e.x - u.x, l = h * e.x + x * e.y, s = a * x - h * o;
                return i = s, Math.abs(i - 0) <= 1e-6 || (f.x = (x * c - o * l) / s, f.y = (a * l - h * c) / s), 
                f;
            }
            function v(n, r, t, e, u) {
                if (n == t || n == e || r == t || r == e) return !1;
                var i = n.x, f = n.y, a = r.x, o = r.y, c = t.x, h = t.y, x = e.x, l = e.y;
                if (Math.max(i, a) < Math.min(c, x) || Math.max(c, x) < Math.min(i, a)) return !1;
                if (Math.max(f, o) < Math.min(h, l) || Math.max(h, l) < Math.min(f, o)) return !1;
                var s = (x - c) * (f - h) - (l - h) * (i - c), y = (a - i) * (f - h) - (o - f) * (i - c), v = (l - h) * (a - i) - (x - c) * (o - f);
                return !(Math.abs(v) < 1e-6) && (y /= v, (s /= v) > 0 && s < 1 && y > 0 && y < 1 && (u.x = i + s * (a - i), 
                u.y = f + s * (o - f), !0));
            }
            function g(n, r, t) {
                return n.x * (r.y - t.y) + r.x * (t.y - n.y) + t.x * (n.y - r.y);
            }
            n("C", u), n("P", Object.freeze({
                __proto__: null,
                ConvexPartition: u,
                ForceCounterClockWise: l,
                IsCounterClockWise: s
            }));
        }
    };
});