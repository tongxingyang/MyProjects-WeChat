window.screenOrientation = "sensor_landscape", loadLib("libs/laya.core.js"), loadLib("libs/laya.ui.js"), 
loadLib("libs/laya.d3.js"), loadLib("myLibs/crypto/jsencrypt.js"), loadLib("myLibs/crypto/crypto-js.js"), 
loadLib("myLibs/cos/cosUtil.js"), "undefined" != typeof tt ? (window.COS = require("myLibs/cos/cos-wx-sdk-v5.min.js"), 
loadLib("myLibs/image/imageUtil-tt.js")) : "undefined" != typeof wx ? (window.COS = require("myLibs/cos/cos-wx-sdk-v5.min.js"), 
loadLib("myLibs/image/imageUtil-wx.js")) : loadLib("myLibs/image/imageUtil-web.js"), 
loadLib("js/bundle.js");