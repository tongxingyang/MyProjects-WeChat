
	var global = (function () { return this })();	if (!global && typeof GameGlobal !== 'undefined') global = GameGlobal;	var pluginInfoMap = {};	;	global.requirePlugin = global.requirePlugin || function(path) {		    var position = path.indexOf('/');    		var alias = '';    		var pagePath = '';    		if (position !== -1) {    		    alias = path.substr(0, position);    		    pagePath = path.substr(position + 1, path.length);    		}    		else {    		    alias = path;    		}    		if (pluginInfoMap.hasOwnProperty(alias)) {    		    var realPath = '';    		    if (pagePath.length === 0) {    		        realPath =  '__plugin__/' + pluginInfoMap[alias].appid;    		        return require(realPath);    		    } else {    		        realPath = '__plugin__/' + pluginInfoMap[alias].appid + '/' + pagePath;    		        return require(realPath);    		    }    		}    		else {    		    console.error('not found alias: ', alias);    		    throw new Error('Plugin ' + alias + ' is not defined.')    		}	};	define("subpackages/subpack/game.js", function(require, module, exports){ 			
"use strict";

window.__require = function e(t, o, n) {
  function i(a, s) {
    if (!o[a]) {
      if (!t[a]) {
        var c = a.split("/");

        if (c = c[c.length - 1], !t[c]) {
          var d = "function" == typeof __require && __require;
          if (!s && d) return d(c, !0);
          if (r) return r(c, !0);
          throw new Error("Cannot find module '" + a + "'");
        }

        a = c;
      }

      var p = o[a] = {
        exports: {}
      };
      t[a][0].call(p.exports, function (e) {
        return i(t[a][1][e] || e);
      }, p, p.exports, e, t, o, n);
    }

    return o[a].exports;
  }

  for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) {
    i(n[a]);
  }

  return i;
}({
  BoxMistakePanel: [function (e, t, o) {
    "use strict";

    cc._RF.push(t, "f547eVGpRBFpq9jZbscRVdw", "BoxMistakePanel"), Object.defineProperty(o, "__esModule", {
      value: !0
    });

    var n = e("../../../Config/GameConfig"),
        i = e("../../../Config/GameDataCenter"),
        r = e("../../../Framework/Platform/WechatGame/ALDStatistics"),
        a = e("../../../Framework/Platform/WechatGame/FLWechatGameBannerAd2"),
        s = e("../../../Framework/Platform/WechatGame/FLWechatGameRewardVideoAd"),
        c = e("../../../Framework/UI/FLUIManager"),
        d = cc._decorator,
        p = d.ccclass,
        h = d.property,
        l = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.tips = null, t.animationNode = null, t.lightBeam = null, t.videoBar1 = null, t.videoBar2 = null, t.bannerBar = null, t.videoLayer1 = null, t.videoLayer2 = null, t.bannerLayer = null, t._isClick = !1, t.isClosed = !1, t.missVideo = !1, t.missBanner = !1, t.isOpenScenen = !1, t.isBannerNum = 3, t.AdType = null, t.progressBar = null, t;
      }

      return __extends(t, e), t.prototype.onEnabled = function () {
        r.ALDStatistics.sendUserEvent("\u8FDB\u5165\u524D\u7F6E\u8BEF\u89E6\u9875"), a.FLWechatGameBannerAd2.hideAllBannerAd(), this.scheduleOnce(function () {
          a.FLWechatGameBannerAd2.hideAllBannerAd();
        }, 1), this.isClosed = !1, this.lightBeamFun(), this.updateAdType();
      }, t.prototype.onDisabled = function () {
        this.progressBar.progress = 0, cc.systemEvent.emit("SHOW_RESIDENT_BANNER_AD", {
          adUnitId: "",
          adConfigKey: ""
        });
      }, t.prototype.onAddEvents = function () {
        cc.systemEvent.on("WECHAT_MINI_GAME_SHOW", this.onWechatMiniGameHide, this), cc.systemEvent.on("MISSBANNER_OPENVIDEO", this.onVideo, this), cc.systemEvent.on("OPENVIDEO_OK", this.onClose, this);
      }, t.prototype.onRemoveEvents = function () {
        cc.systemEvent.off("WECHAT_MINI_GAME_SHOW", this.onWechatMiniGameHide, this), cc.systemEvent.off("MISSBANNER_OPENVIDEO", this.onVideo, this), cc.systemEvent.off("OPENVIDEO_OK", this.onClose, this);
      }, t.prototype.onStart = function () {
        this.isTipsEffect();
      }, t.prototype.onUpdate = function (e) {
        if (this.progressBar.progress > 0 && (this.progressBar.progress -= .3 * e), !this.isClosed && this.progressBar.progress >= n.GameConfig.serverConfig.SWITCH_CRY_AD_RATIO) {
          if (this.isClosed = !0, this.missBanner && this.missVideo) return this.isClosed = !1, void this.onClose();

          switch (i.GameDataCenter.isCrazy = !0, this.AdType) {
            case "video":
              this.getComponent(s.default).showRewardVideoAd();
              break;

            case "banner":
              this.onShowBanner();
          }
        }
      }, t.prototype.onShowBanner = function () {
        var e = this;
        this.isBannerNum--, this.node.getComponent(a.FLWechatGameBannerAd2).show(), this.scheduleOnce(function () {
          e.isClosed = !1, e.node.getComponent(a.FLWechatGameBannerAd2).hide();
        }, 2), this.isBannerNum <= 0 && (this.isClosed = !1, this.onClose());
      }, t.prototype.onVideo = function () {
        this.missBanner = !0, this.getComponent(s.default).showRewardVideoAd();
      }, t.prototype.onVideoCb = function (e, t) {
        i.GameDataCenter.isCrazy = !1, this.isClosed = !1, this.onClose();
      }, t.prototype.onVideoErr = function (e) {
        i.GameDataCenter.isCrazy = !1, this.isClosed = !1, this.missVideo = !0, this.onClose();
      }, t.prototype.onDestroyed = function () {
        i.GameDataCenter.isStartCrazy && cc.systemEvent.emit("ONOPENNATIVE", !0), i.GameDataCenter.isStartCrazy = !1;
      }, t.prototype.onClicked = function (e, t) {
        this.progressBar.progress += n.GameConfig.serverConfig.SWITCH_CRY_AD_REDUCE, this._isClick || (this._isClick = !0, this.boxShake());
      }, t.prototype.onWechatMiniGameHide = function () {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (e) {
            return this.onJumpPanle(), [2];
          });
        });
      }, t.prototype.onClose = function () {
        return __awaiter(this, void 0, void 0, function () {
          var e = this;
          return __generator(this, function (t) {
            return this.isClosed ? [2] : (this.isClosed = !0, this.scheduleOnce(function () {
              e.onJumpPanle();
            }, 2), [2]);
          });
        });
      }, t.prototype.onJumpPanle = function () {
        this.isOpenScenen || (this.isOpenScenen = !0, this.animationNode.getComponent(dragonBones.ArmatureDisplay).playAnimation("bao", 1), this.animationNode.getComponent(dragonBones.ArmatureDisplay).addEventListener(dragonBones.EventObject.COMPLETE, this.dragonbBonesClick.bind(this)), this.scheduleOnce(function () {
          r.ALDStatistics.sendUserEvent("\u524D\u7F6E\u8BEF\u89E6\u5B8C\u6210"), c.FLUIManager.close("HScrazyBox/BoxMistakePanel", !0), i.GameDataCenter.frontCrazy_1 && (i.GameDataCenter.frontCrazy_1 = !1, 0 === window.eReviewSwitch && 3 !== n.GameConfig.serverConfig.FIRST_BOX_SWITCH ? c.FLUIManager.open("GameBoxPanel") : i.GameDataCenter.isFirst = !1), i.GameDataCenter.frontCrazy_2 && (i.GameDataCenter.frontCrazy_2 = !1, c.FLUIManager.open("GamePanel"));
        }, n.GameConfig.serverConfig.MISS_TO_TIME));
      }, t.prototype.dragonbBonesClick = function () {
        this.animationNode.getComponent(dragonBones.ArmatureDisplay).playAnimation("bao2", 0), this.animationNode.getComponent(dragonBones.ArmatureDisplay).removeEventListener(dragonBones.EventObject.COMPLETE, this.dragonbBonesClick.bind(this));
      }, t.prototype.boxShake = function () {
        var e = this;
        cc.tween(this.animationNode).to(.08, {
          angle: 8
        }).to(.01, {
          angle: 0
        }).to(.08, {
          angle: -8
        }).to(.01, {
          angle: 0
        }).to(.08, {
          angle: 8
        }).to(.01, {
          angle: 0
        }).to(.08, {
          angle: -8
        }).to(.01, {
          angle: 0
        }).call(function () {
          e._isClick = !1;
        }).start();
      }, t.prototype.lightBeamFun = function () {
        var e = cc.rotateBy(5, 360).repeatForever();
        this.lightBeam.runAction(e);
      }, t.prototype.isTipsEffect = function () {
        var e = cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.1), cc.scaleTo(1, .9)));
        this.tips.runAction(e);
      }, t.prototype.updateAdType = function () {
        (this.AdType = null, this.progressBar = null, this.videoLayer1.active = !1, this.videoLayer2.active = !1, this.bannerLayer.active = !1, Math.random() < n.GameConfig.serverConfig.SWITCH_CRY_AD_TYPE) ? (this.AdType = "video", Math.random() < n.GameConfig.serverConfig.SWITCH_CRY_PAGE_TYPE ? (this.videoLayer1.active = !0, this.progressBar = this.videoBar1, console.log("\u65E7\u89C6\u9891\u5E03\u5C40====")) : (this.videoLayer2.active = !0, this.progressBar = this.videoBar2, console.log("\u65B0\u89C6\u9891\u5E03\u5C40===="))) : (this.AdType = "banner", this.bannerLayer.active = !0, this.progressBar = this.bannerBar, console.log("banner\u5E03\u5C40===="));
        console.log("\u5E7F\u544A\u7C7B\u578B=====", this.AdType);
      }, __decorate([h({
        type: cc.Node,
        tooltip: "\u72C2\u70B9\u8FD9\u91CC"
      })], t.prototype, "tips", void 0), __decorate([h({
        type: cc.Node,
        tooltip: "\u5B9D\u7BB1\u52A8\u753B"
      })], t.prototype, "animationNode", void 0), __decorate([h({
        type: cc.Node,
        tooltip: "\u5149\u73AF\u6548\u679C"
      })], t.prototype, "lightBeam", void 0), __decorate([h({
        type: cc.ProgressBar,
        tooltip: "\u89C6\u9891\u8FDB\u5EA6\u67611"
      })], t.prototype, "videoBar1", void 0), __decorate([h({
        type: cc.ProgressBar,
        tooltip: "\u89C6\u9891\u8FDB\u5EA6\u67612"
      })], t.prototype, "videoBar2", void 0), __decorate([h({
        type: cc.ProgressBar,
        tooltip: "banner\u8FDB\u5EA6\u6761"
      })], t.prototype, "bannerBar", void 0), __decorate([h({
        type: cc.Node,
        tooltip: "\u89C6\u9891\u754C\u9762\u5E03\u5C40"
      })], t.prototype, "videoLayer1", void 0), __decorate([h({
        type: cc.Node,
        tooltip: "\u89C6\u9891\u754C\u9762\u5E03\u5C402"
      })], t.prototype, "videoLayer2", void 0), __decorate([h({
        type: cc.Node,
        tooltip: "banner\u754C\u9762\u5E03\u5C402"
      })], t.prototype, "bannerLayer", void 0), t = __decorate([p], t);
    }(FLUIPanel);

    o.BoxMistakePanel = l, cc._RF.pop();
  }, {
    "../../../Config/GameConfig": void 0,
    "../../../Config/GameDataCenter": void 0,
    "../../../Framework/Platform/WechatGame/ALDStatistics": void 0,
    "../../../Framework/Platform/WechatGame/FLWechatGameBannerAd2": void 0,
    "../../../Framework/Platform/WechatGame/FLWechatGameRewardVideoAd": void 0,
    "../../../Framework/UI/FLUIManager": void 0
  }]
}, {}, ["BoxMistakePanel"]); 
 			}); 	require("subpackages/subpack/game.js");
 	