
	var global = (function () { return this })();	if (!global && typeof GameGlobal !== 'undefined') global = GameGlobal;	var pluginInfoMap = {};	;	global.requirePlugin = global.requirePlugin || function(path) {		    var position = path.indexOf('/');    		var alias = '';    		var pagePath = '';    		if (position !== -1) {    		    alias = path.substr(0, position);    		    pagePath = path.substr(position + 1, path.length);    		}    		else {    		    alias = path;    		}    		if (pluginInfoMap.hasOwnProperty(alias)) {    		    var realPath = '';    		    if (pagePath.length === 0) {    		        realPath =  '__plugin__/' + pluginInfoMap[alias].appid;    		        return require(realPath);    		    } else {    		        realPath = '__plugin__/' + pluginInfoMap[alias].appid + '/' + pagePath;    		        return require(realPath);    		    }    		}    		else {    		    console.error('not found alias: ', alias);    		    throw new Error('Plugin ' + alias + ' is not defined.')    		}	};	define("subpackages/kuandian/game.js", function(require, module, exports){ 			
"use strict";

(function r(e, n, t) {
  function i(u, f) {
    if (!n[u]) {
      if (!e[u]) {
        var _ = u.split("/");

        if (_ = _[_.length - 1], !e[_]) {
          var p = "function" == typeof __require && __require;
          if (!f && p) return p(_, !0);
          if (o) return o(_, !0);
          throw new Error("Cannot find module '" + u + "'");
        }

        u = _;
      }

      var a = n[u] = {
        exports: {}
      };
      e[u][0].call(a.exports, function (r) {
        return i(e[u][1][r] || r);
      }, a, a.exports, r, e, n, t);
    }

    return n[u].exports;
  }

  for (var o = "function" == typeof __require && __require, u = 0; u < t.length; u++) {
    i(t[u]);
  }

  return i;
})({}, {}, []); 
 			}); 	require("game.js");
 	