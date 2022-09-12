define("engine/assets/internal/index.js", function() {
  "use strict";
  (function n(t, i, r) {
      function u(f, o) {
          var s, c, h;
          if (!i[f]) {
              if (!t[f]) {
                  if (s = f.split("/"), s = s[s.length - 1], !t[s]) {
                      if (c = "function" == typeof __require && __require, !o && c) return c(s, !0);
                      if (e) return e(s, !0);
                      throw new Error("Cannot find module '" + f + "'");
                  }
                  f = s
              }
              h = i[f] = {
                  exports: {}
              };
              t[f][0].call(h.exports, function(n) {
                  return u(t[f][1][n] || n)
              }, h, h.exports, n, t, i, r)
          }
          return i[f].exports
      }
      for (var e = "function" == typeof __require && __require, f = 0; f < r.length; f++) u(r[f]);
      return u
  })({}, {}, [])
});