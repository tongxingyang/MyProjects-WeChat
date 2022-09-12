define("engine/ccRequire.js", function(n) {
  "use strict";
  var t = {
      "assets/internal/index.js": function() {
          return n("assets/internal/index.js")
      },
      "src/scripts/resources/index.js": function() {
          return n("src/scripts/resources/index.js")
      },
      "src/scripts/main/index.js": function() {
          return n("src/scripts/main/index.js")
      }
  };
  window.__cocos_require__ = function(n) {
      var i = t[n];
      if (!i) throw new Error("cannot find module ".concat(n));
      return i()
  }
});