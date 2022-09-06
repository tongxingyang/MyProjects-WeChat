!function() {
    function n(n, r) {
        var t = (65535 & n) + (65535 & r);
        return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t;
    }
    function r(r, t, u, e, o, f) {
        return n(function(n, r) {
            return n << r | n >>> 32 - r;
        }(n(n(t, r), n(e, f)), o), u);
    }
    function t(n, t, u, e, o, f, c) {
        return r(t & u | ~t & e, n, t, o, f, c);
    }
    function u(n, t, u, e, o, f, c) {
        return r(t & e | u & ~e, n, t, o, f, c);
    }
    function e(n, t, u, e, o, f, c) {
        return r(t ^ u ^ e, n, t, o, f, c);
    }
    function o(n, t, u, e, o, f, c) {
        return r(u ^ (t | ~e), n, t, o, f, c);
    }
    function f(r) {
        for (var f = 1732584193, c = -271733879, i = -1732584194, a = 271733878, h = 0; h < r.length; h += 16) {
            var l = f, g = c, v = i, d = a;
            f = t(f, c, i, a, r[h + 0], 7, -680876936), a = t(a, f, c, i, r[h + 1], 12, -389564586), 
            i = t(i, a, f, c, r[h + 2], 17, 606105819), c = t(c, i, a, f, r[h + 3], 22, -1044525330), 
            f = t(f, c, i, a, r[h + 4], 7, -176418897), a = t(a, f, c, i, r[h + 5], 12, 1200080426), 
            i = t(i, a, f, c, r[h + 6], 17, -1473231341), c = t(c, i, a, f, r[h + 7], 22, -45705983), 
            f = t(f, c, i, a, r[h + 8], 7, 1770035416), a = t(a, f, c, i, r[h + 9], 12, -1958414417), 
            i = t(i, a, f, c, r[h + 10], 17, -42063), c = t(c, i, a, f, r[h + 11], 22, -1990404162), 
            f = t(f, c, i, a, r[h + 12], 7, 1804603682), a = t(a, f, c, i, r[h + 13], 12, -40341101), 
            i = t(i, a, f, c, r[h + 14], 17, -1502002290), f = u(f, c = t(c, i, a, f, r[h + 15], 22, 1236535329), i, a, r[h + 1], 5, -165796510), 
            a = u(a, f, c, i, r[h + 6], 9, -1069501632), i = u(i, a, f, c, r[h + 11], 14, 643717713), 
            c = u(c, i, a, f, r[h + 0], 20, -373897302), f = u(f, c, i, a, r[h + 5], 5, -701558691), 
            a = u(a, f, c, i, r[h + 10], 9, 38016083), i = u(i, a, f, c, r[h + 15], 14, -660478335), 
            c = u(c, i, a, f, r[h + 4], 20, -405537848), f = u(f, c, i, a, r[h + 9], 5, 568446438), 
            a = u(a, f, c, i, r[h + 14], 9, -1019803690), i = u(i, a, f, c, r[h + 3], 14, -187363961), 
            c = u(c, i, a, f, r[h + 8], 20, 1163531501), f = u(f, c, i, a, r[h + 13], 5, -1444681467), 
            a = u(a, f, c, i, r[h + 2], 9, -51403784), i = u(i, a, f, c, r[h + 7], 14, 1735328473), 
            f = e(f, c = u(c, i, a, f, r[h + 12], 20, -1926607734), i, a, r[h + 5], 4, -378558), 
            a = e(a, f, c, i, r[h + 8], 11, -2022574463), i = e(i, a, f, c, r[h + 11], 16, 1839030562), 
            c = e(c, i, a, f, r[h + 14], 23, -35309556), f = e(f, c, i, a, r[h + 1], 4, -1530992060), 
            a = e(a, f, c, i, r[h + 4], 11, 1272893353), i = e(i, a, f, c, r[h + 7], 16, -155497632), 
            c = e(c, i, a, f, r[h + 10], 23, -1094730640), f = e(f, c, i, a, r[h + 13], 4, 681279174), 
            a = e(a, f, c, i, r[h + 0], 11, -358537222), i = e(i, a, f, c, r[h + 3], 16, -722521979), 
            c = e(c, i, a, f, r[h + 6], 23, 76029189), f = e(f, c, i, a, r[h + 9], 4, -640364487), 
            a = e(a, f, c, i, r[h + 12], 11, -421815835), i = e(i, a, f, c, r[h + 15], 16, 530742520), 
            f = o(f, c = e(c, i, a, f, r[h + 2], 23, -995338651), i, a, r[h + 0], 6, -198630844), 
            a = o(a, f, c, i, r[h + 7], 10, 1126891415), i = o(i, a, f, c, r[h + 14], 15, -1416354905), 
            c = o(c, i, a, f, r[h + 5], 21, -57434055), f = o(f, c, i, a, r[h + 12], 6, 1700485571), 
            a = o(a, f, c, i, r[h + 3], 10, -1894986606), i = o(i, a, f, c, r[h + 10], 15, -1051523), 
            c = o(c, i, a, f, r[h + 1], 21, -2054922799), f = o(f, c, i, a, r[h + 8], 6, 1873313359), 
            a = o(a, f, c, i, r[h + 15], 10, -30611744), i = o(i, a, f, c, r[h + 6], 15, -1560198380), 
            c = o(c, i, a, f, r[h + 13], 21, 1309151649), f = o(f, c, i, a, r[h + 4], 6, -145523070), 
            a = o(a, f, c, i, r[h + 11], 10, -1120210379), i = o(i, a, f, c, r[h + 2], 15, 718787259), 
            c = o(c, i, a, f, r[h + 9], 21, -343485551), f = n(f, l), c = n(c, g), i = n(i, v), 
            a = n(a, d);
        }
        return [ f, c, i, a ];
    }
    function c(n) {
        for (var r = "", t = 0; t < 4 * n.length; t++) r += "0123456789abcdef".charAt(n[t >> 2] >> t % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(n[t >> 2] >> t % 4 * 8 & 15);
        return r;
    }
    function i(n) {
        for (var r = 1 + (n.length + 8 >> 6), t = new Array(16 * r), u = 0; u < 16 * r; u++) t[u] = 0;
        for (u = 0; u < n.length; u++) t[u >> 2] |= (255 & n.charCodeAt(u)) << u % 4 * 8;
        return t[u >> 2] |= 128 << u % 4 * 8, t[16 * r - 2] = 8 * n.length, t;
    }
    module.exports = {
        hexMD5: function(n) {
            return c(f(i(n)));
        }
    };
}();