

"undefined" != typeof swan && "undefined" != typeof swanGlobal ? (require("swan-game-adapter.js"), 
require("libs/laya.bdmini.js")) : "undefined" != typeof wx && (require("weapp-adapter.js"), 
require("libs/min/laya.wxmini.min.js")), window.loadLib = require, require("index-64d8ccd0ae.js");

require("./bi_sdk/bi-game.js");
require("WXSDK/wxsdk.min.js");

require("./bi_sdk/bi-game-conf.js");