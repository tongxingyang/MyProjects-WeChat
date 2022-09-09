window.__require = function t(e, n, o) {
  function r(s, c) {
    if (!n[s]) {
      if (!e[s]) {
        var a = s.split("/");
        if (a = a[a.length - 1], !e[a]) {
          var l = "function" == typeof __require && __require;
          if (!c && l) return l(a, !0);
          if (i) return i(a, !0);
          throw new Error("Cannot find module '" + s + "'");
        }
        s = a;
      }
      var u = n[s] = {
        exports: {}
      };
      e[s][0].call(u.exports, function (t) {
        return r(e[s][1][t] || t);
      }, u, u.exports, t, e, n, o);
    }
    return n[s].exports;
  }
  for (var i = "function" == typeof __require && __require, s = 0; s < o.length; s++) r(o[s]);
  return r;
}({
  ADGameBanner: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "b414c6O5DBCz4NsN6tX7a/4", "ADGameBanner");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./ADWXBanner"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../FrameWork/Util/AppPlatform"),
      a = t("../WXAPI"),
      l = t("../../../FrameWork/Mgr/WudianMgr"),
      u = cc._decorator,
      d = u.ccclass,
      p = (u.property,
        function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }
          return o(e, t), e.prototype.refresh_csryw = function (e) {
            var n = this;
            if (!this.needShow_csryw()) return this.sprIcon.node.active = !1, void(null != e && e());
            1 == s.default.getInstance_csryw().getAppSwitchData_csryw().banner_csryw ? this.refreshWXBanner_csryw() : t.prototype.refresh_csryw.call(this, function () {
              n.refreshBanner_csryw(), null != e && e();
            });
          }, e.prototype.needShow_csryw = function () {
            var t = null;
            c.default.is_WECHAT_GAME_csryw() && (t = a.default.getLaunchOptionsSync_csryw().scene);
            for (var e = !0, n = s.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw, o = 0; o < n.length; ++o) {
              t == n[o] && (e = !1);
            }
            return l.default.ryw_GetIpBlocked_csryw() && e;
          }, e = r([d], e);
        }(i.default));
    n.default = p, cc._RF.pop();
  }, {
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../WXAPI": "WXAPI",
    "./ADWXBanner": "ADWXBanner"
  }],
  ADLimitListView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "95d2aDt/2NEnqQoFZDdbkjr", "ADLimitListView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../Config/AppSwitchConfig"),
      s = t("../Util/ShareAd"),
      c = t("./KRQ_Base"),
      a = cc._decorator,
      l = a.ccclass,
      u = a.property,
      d = (a.menu,
        a.disallowMultiple,
        function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.AdLocationType = s.AdLocationTypeEnum.ID_LoopAd, e.itemList = [], e._AdPosID_csryw = -1,
              e.adTag_csryw = "", e.itemArrayList_csryw = [], e;
          }
          return o(e, t), e.prototype.onLoad = function () {
            this._AdPosID_csryw = s.default.getAdLocationIDByType_csryw(this.AdLocationType);
          }, e.prototype.start = function () {
            var t = this;
            console.log("ADListView  start "), 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isPinZhuangJumpVideo_csryw ? this.adTag_csryw = "jump" : this.adTag_csryw = "nojump",
              s.default.getADVs_csryw(this._AdPosID_csryw, function (e) {
                if (null != e)
                  for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    if (t.itemList[n]) {
                      var r = t.itemList[n].getComponent(c.default);
                      r && (r.setData_csryw(o), r.setAdTag_csryw(t.adTag_csryw), t.itemArrayList_csryw.push(r));
                    }
                  }
              });
          }, e.prototype.setAdtag_csryw = function (t) {
            this.adTag_csryw = t;
            for (var e = 0; e < this.itemArrayList_csryw.length; e++) {
              this.itemArrayList_csryw[e].setAdTag_csryw(this.adTag_csryw);
            }
          }, r([u({
            type: cc.Enum(s.AdLocationTypeEnum),
            tooltip: "当前广告的类型\n ID_LoopAd 普通导出广告\nID_BannerAd Banner广告\nID_InsertAd 插屏广告\nID_AniAd 序列帧广告\n ID_HistoryAd 历史广告\nID_MoreGameAd 更多游戏广告"
          })], e.prototype, "AdLocationType", void 0), r([u({
            type: [cc.Node],
            tooltip: "克隆的Item"
          })], e.prototype, "itemList", void 0), e = r([l], e);
        }(cc.Component));
    n.default = d, cc._RF.pop();
  }, {
    "../Config/AppSwitchConfig": "AppSwitchConfig",
    "../Util/ShareAd": "ShareAd",
    "./KRQ_Base": "KRQ_Base"
  }],
  ADListView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "147d4lAHtdE+7v8H7JuuNc6", "ADListView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i, s = t("../Util/ShareAd"),
      c = t("../Interface/FMInterface"),
      a = t("./KRQ_Base"),
      l = t("../Config/AppSwitchConfig"),
      u = t("../Mgr/WudianMgr"),
      d = t("../Util/Utilit"),
      p = cc._decorator,
      y = p.ccclass,
      h = p.property,
      _ = p.menu,
      f = p.disallowMultiple;
    (function (t) {
      t[t.AUTO_VIEW = 1] = "AUTO_VIEW", t[t.FIX_VIEW = 2] = "FIX_VIEW", t[t.FIX_VIEW_NO_ACT = 3] = "FIX_VIEW_NO_ACT";
    })(i || (i = {}));
    var w = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.scrollView = null, e.cloneItem = null, e.AdLocationType = s.AdLocationTypeEnum.ID_LoopAd,
          e.viewType = i.FIX_VIEW, e.maxRowNum = 2, e.itemStartX = 0, e.itemStartY = 0, e.itemGapWidth = 0,
          e.itemGapHeight = 0, e.itemRankSum = 2, e.moveSpeed = 3, e.stopWaitTimeSum = 0,
          e.moveEndSum = 0, e.tipIconNum = 0, e.stopWaitTime_csryw = 0, e._AdPosID_csryw = -1,
          e.isTouchView_csryw = !1, e.state_csryw = -1, e.moveWay_csryw = 0, e.moveMaxLength_csryw = 0,
          e.moveEndPoint_csryw = 0, e.adAllDatas_csryw = [], e.itemArrayList_csryw = [], e.adTag_csryw = "",
          e.SlideSkip = 0, e.ForceSkip = 0, e.isJumpVideo = !0, e;
      }
      return o(e, t), e.prototype.onLoad = function () {
        var t = this;
        this.SlideSkip = l.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.SlideSkip_csryw,
          this.ForceSkip = l.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.ForceSkip_csryw,
          this.scrollView.content.removeAllChildren(), this.scrollView.content.setAnchorPoint(cc.v2(0, 1)),
          this.scrollView.elastic = !1, this.cloneItem.active = !1, this.cloneItem.anchorX = .5,
          this.cloneItem.anchorY = .5, this._AdPosID_csryw = s.default.getAdLocationIDByType_csryw(this.AdLocationType),
          this.scrollView.node.on("scroll-ended", function () {
            if (t.isTouchView_csryw = !1, t.setState_csryw(1), 1 == t.SlideSkip && u.default.wudianFlag_csryw) {
              var e = d.default.random_csryw(t.itemArrayList_csryw.length);
              t.itemArrayList_csryw[e].ryw_onClickAd_csryw({});
            }
          }, this), this.scrollView.node.on("scroll-began", function () {
            t.isTouchView_csryw = !0;
          }, this);
      }, e.prototype.setParam_csryw = function (t) {
        t && (this.ForceSkip = t.ForceSkip, this.SlideSkip = t.SlideSkip, this.isJumpVideo = 1 == t.JumpVideo,
          this.isJumpVideo ? this.setAdtag_csryw("jump") : this.setAdtag_csryw("nojump"));
      }, e.prototype.setListenerRefresh_csryw = function (t) {
        this._listneRefresh_csryw = t;
      }, e.prototype.start = function () {
        var t = this;
        console.log("ADListView  start "), this.isTouchView_csryw = !1, this.scrollView.content.removeAllChildren(),
          this.setState_csryw(-1), s.default.getADVs_csryw(this._AdPosID_csryw, function (e) {
            if (null != e) {
              t.adAllDatas_csryw = e, console.log(t.adAllDatas_csryw);
              for (var n = t.itemRankSum * t.maxRowNum, o = 0, r = 0, s = 0, l = t.itemStartY, u = t.itemStartX, d = function (d) {
                  var p = e[d],
                    y = cc.instantiate(t.cloneItem);
                  y.active = !0;
                  var h = y.getComponent(a.default);
                  if (h.setData_csryw(p), h.setAdTag_csryw(t.adTag_csryw), t.scrollView.content.addChild(y),
                    t.itemArrayList_csryw.push(h), t.scrollView.horizontal ? (0 == o && (r = u + y.width * y.scaleX / 2,
                        u = u + y.width * y.scaleX + t.itemGapWidth, s = -t.itemStartY), s -= y.height * y.scaleY / 2,
                      y.x = r, y.y = s, s -= y.height * y.scaleY / 2, s -= t.itemGapHeight, (o += 1) >= t.itemRankSum && (o = 0)) : (0 == o && (s = -(l + y.height * y.scaleY / 2),
                        l = l + y.height * y.scaleY + t.itemGapHeight, r = t.itemStartX), r += y.width * y.scaleX / 2,
                      y.x = r, y.y = s, r += y.width * y.scaleX / 2, r += t.itemGapWidth, (o += 1) >= t.itemRankSum && (o = 0)),
                    t.viewType == i.FIX_VIEW) {
                    if (h.setCallClickListener_csryw(c.handleFM_csryw(function () {
                        var t = e[Math.floor(Math.random() * e.length)];
                        h.setData_csryw(t);
                      }, t)), t.ryw_playAni_csryw(y), (n -= 1) <= 0) return "break";
                  } else if (t.viewType == i.FIX_VIEW_NO_ACT && (h.setCallClickListener_csryw(c.handleFM_csryw(function () {
                      var t = e[Math.floor(Math.random() * e.length)];
                      h.setData_csryw(t);
                    }, t)), (n -= 1) <= 0)) return "break";
                }, p = 0; p < e.length; p++) {
                if ("break" === d(p)) break;
              }
              t.viewType == i.AUTO_VIEW ? (t.scrollView.horizontal ? (t.scrollView.content.width = u,
                    t.moveMaxLength_csryw = u - t.scrollView.node.width) : (t.scrollView.content.height = l,
                    t.moveMaxLength_csryw = l - t.scrollView.node.height), t.moveMaxLength_csryw < 0 && (t.moveMaxLength_csryw = 0),
                  t.moveSpeed <= 0 ? t.setState_csryw(-1) : t.scrollView.horizontal ? t.scrollView.content.width <= t.scrollView.node.width ? t.setState_csryw(-1) : t.setState_csryw(0) : t.scrollView.vertical && (t.scrollView.content.height <= t.scrollView.node.height ? t.setState_csryw(-1) : t.setState_csryw(0))) : t.setState_csryw(-1),
                t._listneRefresh_csryw && c.callFM_csryw(t._listneRefresh_csryw, t.scrollView.content, t.adAllDatas_csryw),
                t.randomKRQTip();
            }
          });
      }, e.prototype.randClick = function () {
        if (console.log("randClick.."), this.itemArrayList_csryw.length > 0) {
          var t = d.default.random_csryw(this.itemArrayList_csryw.length);
          this.itemArrayList_csryw[t].ryw_onClickAd_csryw({});
        }
      }, e.prototype.onEnable = function () {
        var t = this,
          e = "export2View" == this.node.parent.name,
          n = "WX001Export2View" == this.node.parent.name,
          o = "WX001Export3View" == this.node.parent.name,
          r = "WX001GameSettleView" == this.node.parent.name;
        this.node.parent.parent && this.node.parent.parent.name;
        var i = "ExportRowView" != this.node.name;
        console.log("this.node.name", this.node.name), console.log("iscanShow", i), console.log("ly ForceSkip:", this.ForceSkip, "isExport2View", e, "isWX001Export2View", n, "isWX001Export3View", o, "isWX001GameSettleView", r),
          setTimeout(function () {
            if (1 == t.ForceSkip && u.default.wudianFlag_csryw && i)
              if (console.log("弹!!!!!!!!!!!!!!!!!!!"),
                t.itemArrayList_csryw.length > 0) {
                var e = d.default.random_csryw(t.itemArrayList_csryw.length);
                t.itemArrayList_csryw[e].ryw_onClickAd_csryw({});
              } else console.log("弹不了");
          }, 500);
      }, e.prototype.update = function (t) {
        this.onUpdateMove_csryw();
      }, e.prototype.setAdtag_csryw = function (t) {
        this.adTag_csryw = t;
        for (var e = 0; e < this.itemArrayList_csryw.length; e++) {
          this.itemArrayList_csryw[e].setAdTag_csryw(this.adTag_csryw);
        }
      }, e.prototype.randomKRQ = function () {
        this.adAllDatas_csryw = this.adAllDatas_csryw.sort(function (t, e) {
          return .5 - Math.random();
        });
        for (var t = 0; t < this.itemArrayList_csryw.length; t++) {
          var e = this.itemArrayList_csryw[t];
          e.setData_csryw(this.adAllDatas_csryw[t]), e.setAdTag_csryw(this.adTag_csryw);
        }
      }, e.prototype.randomKRQTip = function () {
        var t = this;
        if (0 == this.tipIconNum)
          for (var e = 0; e < this.itemArrayList_csryw.length; e++) {
            (o = this.itemArrayList_csryw[e]).setTipIconActive(!1);
          } else {
            var n = [];
            for (e = 0; e < this.itemArrayList_csryw.length; e++) {
              var o = this.itemArrayList_csryw[e];
              n.push(e);
            }
            n = n.sort(function (t, e) {
              return .5 - Math.random();
            });
            var r = function (e) {
              if (n.length < t.tipIconNum) return !0;
              for (var o = 0; o < t.tipIconNum; o++)
                if (n[o] && e == n[o]) return !0;
              return !1;
            };
            for (e = 0; e < this.itemArrayList_csryw.length; e++) {
              o = this.itemArrayList_csryw[e];
              r(e) ? o.setTipIconActive(!0) : o.setTipIconActive(!1);
            }
          }
      }, e.prototype.onUpdateMove_csryw = function () {
        if (this.viewType == i.AUTO_VIEW && !this.isTouchView_csryw) switch (this.state_csryw) {
          case 0:
            this.stopWaitTime_csryw = this.stopWaitTime_csryw + 1, this.stopWaitTime_csryw > this.stopWaitTimeSum && (this.stopWaitTime_csryw = 0,
              this.setState_csryw(1));
            break;

          case 1:
            break;

          case 2:
            this.scrollView.horizontal ? 0 == this.moveWay_csryw ? (this.scrollView.content.x = this.scrollView.content.x - this.moveSpeed,
              this.scrollView.content.x < -this.moveMaxLength_csryw ? (this.scrollView.content.x = -this.moveMaxLength_csryw,
                this.moveWay_csryw = 1, this.setState_csryw(0)) : this.moveEndSum > 0 && this.scrollView.content.x < this.moveEndPoint_csryw && (this.scrollView.content.x = this.moveEndPoint_csryw,
                this.setState_csryw(0))) : (this.scrollView.content.x = this.scrollView.content.x + this.moveSpeed,
              this.scrollView.content.x > 0 ? (this.scrollView.content.x = 0, this.moveWay_csryw = 0,
                this.setState_csryw(0)) : this.moveEndSum > 0 && this.scrollView.content.x > this.moveEndPoint_csryw && (this.scrollView.content.x = this.moveEndPoint_csryw,
                this.setState_csryw(0))) : this.scrollView.vertical && (0 == this.moveWay_csryw ? (this.scrollView.content.y = this.scrollView.content.y + this.moveSpeed,
              this.scrollView.content.y > this.moveMaxLength_csryw ? (this.scrollView.content.y = this.moveMaxLength_csryw,
                this.moveWay_csryw = 1, this.setState_csryw(0)) : this.moveEndSum > 0 && this.scrollView.content.y > this.moveEndPoint_csryw && (this.scrollView.content.y = this.moveEndPoint_csryw,
                this.setState_csryw(0))) : (this.scrollView.content.y = this.scrollView.content.y - this.moveSpeed,
              this.scrollView.content.y < 0 ? (this.scrollView.content.y = 0, this.moveWay_csryw = 0,
                this.setState_csryw(0)) : this.moveEndSum > 0 && this.scrollView.content.y < this.moveEndPoint_csryw && (this.scrollView.content.y = this.moveEndPoint_csryw,
                this.setState_csryw(0))));
        }
      }, e.prototype.setState_csryw = function (t) {
        switch (this.state_csryw = t, this.state_csryw) {
          case 0:
            this.stopWaitTime_csryw = 0, this.stopWaitTimeSum <= 0 && this.setState_csryw(1);
            break;

          case 1:
            if (this.moveEndSum <= 0) this.setState_csryw(2);
            else if (this.scrollView.horizontal) {
              var e = this.cloneItem.width + this.itemGapWidth,
                n = Math.floor(Math.abs(this.scrollView.content.x - this.itemStartX) / e);
              0 == this.moveWay_csryw ? (this.moveEndPoint_csryw = -(n + 1) * e - this.itemStartX,
                this.moveEndPoint_csryw - e / 2 <= -(this.scrollView.content.width - this.scrollView.node.width) && (this.moveEndPoint_csryw = -(this.scrollView.content.width - this.scrollView.node.width))) : (this.moveEndPoint_csryw = -(n - 1) * e - this.itemStartX,
                this.moveEndPoint_csryw + e / 2 >= 0 && (this.moveEndPoint_csryw = 0)), this.setState_csryw(2);
            } else if (this.scrollView.vertical) {
              var o = this.cloneItem.height + this.itemGapHeight;
              n = Math.floor(Math.abs(this.scrollView.content.y + this.itemStartY) / o);
              0 == this.moveWay_csryw ? (this.moveEndPoint_csryw = this.itemStartY + (n + 1) * o,
                this.moveEndPoint_csryw + o / 2 >= this.scrollView.content.height - this.scrollView.node.height && (this.moveEndPoint_csryw = this.scrollView.content.height - this.scrollView.node.height)) : (this.moveEndPoint_csryw = this.itemStartY + (n - 1) * o,
                this.moveEndPoint_csryw - o / 2 <= 0 && (this.moveEndPoint_csryw = 0)), this.setState_csryw(2);
            }
        }
      }, e.prototype.ryw_playAni_csryw = function (t, e) {
        var n = cc.view.getFrameSize().width,
          o = t.x;
        t.x = t.x - n, cc.tween(t).by(.4, {
          angle: -360,
          x: n
        }).call(function () {
          t.angle = 0, t.x = o, null != e && e();
        }).start();
      }, r([h({
        tooltip: "滚动容器",
        type: cc.ScrollView
      })], e.prototype, "scrollView", void 0), r([h({
        tooltip: "克隆的Item",
        type: cc.Node
      })], e.prototype, "cloneItem", void 0), r([h({
        type: cc.Enum(s.AdLocationTypeEnum),
        tooltip: "当前广告的类型\n ID_LoopAd 普通导出广告\nID_BannerAd Banner广告\nID_InsertAd 插屏广告\nID_AniAd 序列帧广告\n ID_HistoryAd 历史广告\nID_MoreGameAd 更多游戏广告"
      })], e.prototype, "AdLocationType", void 0), r([h({
        type: cc.Enum(i),
        tooltip: "滚动方向:\n AUTO_VIEW 自动滚动\nFIX_VIEW固定不动 带进入动画\nFIX_VIEW_NO_ACT固定不动 不带进入动画"
      })], e.prototype, "viewType", void 0), r([h({
        tooltip: "最大行数",
        type: cc.Integer,
        visible: function () {
          return this.viewType == i.FIX_VIEW || this.viewType == i.FIX_VIEW_NO_ACT;
        }
      })], e.prototype, "maxRowNum", void 0), r([h({
        tooltip: "起始X间隔",
        type: cc.Float
      })], e.prototype, "itemStartX", void 0), r([h({
        tooltip: "起始Y间隔",
        type: cc.Float
      })], e.prototype, "itemStartY", void 0), r([h({
        tooltip: "横向间隔",
        type: cc.Float
      })], e.prototype, "itemGapWidth", void 0), r([h({
        tooltip: "竖向间隔",
        type: cc.Float
      })], e.prototype, "itemGapHeight", void 0), r([h({
        tooltip: "一行几列 or 一列几行",
        type: cc.Integer
      })], e.prototype, "itemRankSum", void 0), r([h({
        tooltip: "移动的速度(0不动)",
        type: cc.Float
      })], e.prototype, "moveSpeed", void 0), r([h({
        tooltip: "移动的开始等待时间(帧数)",
        type: cc.Float
      })], e.prototype, "stopWaitTimeSum", void 0), r([h({
        tooltip: "移动间隔数（0持续）",
        type: cc.Integer
      })], e.prototype, "moveEndSum", void 0), r([h({
        tooltip: "提示点的个数",
        type: cc.Integer
      })], e.prototype, "tipIconNum", void 0), e = r([y, f(), _("FrameWork组件/ADListView")], e);
    }(cc.Component);
    n.default = w, cc._RF.pop();
  }, {
    "../Config/AppSwitchConfig": "AppSwitchConfig",
    "../Interface/FMInterface": "FMInterface",
    "../Mgr/WudianMgr": "WudianMgr",
    "../Util/ShareAd": "ShareAd",
    "../Util/Utilit": "Utilit",
    "./KRQ_Base": "KRQ_Base"
  }],
  ADPageEventEnum: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "bd555hsxGNEd4Ex0H7O4VqW", "ADPageEventEnum"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.ADEvent = n.PageEvent = n.ZorderEventNum = void 0,
      function (t) {
        t[t.PageEvent = 0] = "PageEvent", t[t.ADEvent = 100] = "ADEvent";
      }(n.ZorderEventNum || (n.ZorderEventNum = {})),
      function (t) {
        t[t.SHOW_MAIN = 0] = "SHOW_MAIN", t[t.HIDE_MAIN = 1] = "HIDE_MAIN", t[t.SHOW_MORE = 2] = "SHOW_MORE",
          t[t.SHOW_RESULT = 3] = "SHOW_RESULT", t[t.SHOW_CRAZY = 4] = "SHOW_CRAZY", t[t.SHOW_EXPORT = 5] = "SHOW_EXPORT",
          t[t.SHOW_HOTPLAY = 6] = "SHOW_HOTPLAY", t[t.SHOW_RANKING = 7] = "SHOW_RANKING",
          t[t.SHOW_GAME = 8] = "SHOW_GAME", t[t.HIDE_GAME = 9] = "HIDE_GAME", t[t.SHOW_EXPORT_INSTALL = 10] = "SHOW_EXPORT_INSTALL",
          t[t.SHOW_MYCrazy = 11] = "SHOW_MYCrazy", t[t.HIDE_MYCrazy = 12] = "HIDE_MYCrazy",
          t[t.SHOW_NATIVEAD = 13] = "SHOW_NATIVEAD", t[t.HIDE_NATIVEAD = 14] = "HIDE_NATIVEAD",
          t[t.SHOW_BEFORENATIVE = 15] = "SHOW_BEFORENATIVE", t[t.SHOW_MOREBTN = 16] = "SHOW_MOREBTN";
      }(n.PageEvent || (n.PageEvent = {})),
      function (t) {
        t[t.HIDE_ALL_AD = 100] = "HIDE_ALL_AD", t[t.SHOW_BANNER = 101] = "SHOW_BANNER",
          t[t.HIDE_BANNER = 102] = "HIDE_BANNER", t[t.GAME_START_BEFORE = 103] = "GAME_START_BEFORE",
          t[t.CONTINUE = 104] = "CONTINUE";
      }(n.ADEvent || (n.ADEvent = {})), cc._RF.pop();
  }, {}],
  ADPageEventMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "8740epNITBOq5CMA797zGJR", "ADPageEventMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../../../../FrameWork/Util/LogUtils"),
      r = function () {
        function t() {}
        return t.emitEvent_csryw = function (t, e, n, r, i, s) {
          o.LogUtils.info_csryw("广播事件：" + t), this.eventTarget_csryw.emit(t + "", e, n, r, i, s);
        }, t.onEvent_csryw = function (t, e, n) {
          this.eventTarget_csryw.on(t + "", e, n);
        }, t.onceEvent_csryw = function (t, e, n) {
          this.eventTarget_csryw.once(t + "", e, n);
        }, t.offEvent_csryw = function (t, e, n) {
          this.eventTarget_csryw.off(t + "", e, n);
        }, t.offTargetEvent_csryw = function (t) {
          this.eventTarget_csryw.targetOff(t);
        }, t.eventTarget_csryw = new cc.EventTarget(), t;
      }();
    n.default = r, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Util/LogUtils": "LogUtils"
  }],
  ADSingle: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "08a79DhIu1PZLfP1X3J0g2a", "ADSingle");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./KRQ_Base"),
      s = t("../Util/ShareAd"),
      c = t("../Util/AppPlatform"),
      a = cc._decorator,
      l = a.ccclass,
      u = a.property,
      d = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.AdLocationType = s.AdLocationTypeEnum.ID_LoopAd, e._AdPosID_csryw = -10086,
            e._datas_csryw = [], e;
        }
        var n;
        return o(e, t), n = e, e.prototype.initView_csryw = function () {
          this._AdPosID_csryw = s.default.getAdLocationIDByType_csryw(this.AdLocationType),
            this.node.on("click", this.onClickAd_csryw, this), this.sprIcon.node.active = !1,
            this.refresh_csryw();
        }, e.prototype.onClickAd_csryw = function () {
          c.default.navigateToMiniProgram_csryw(this.ad_data_csryw), console.log("点击了图片 做跳转");
        }, e.prototype.clearRepeat_csryw = function () {
          if (null != this.ad_data_csryw)
            for (var t = 0; t < n._repeatCheckList_csryw.length; ++t) {
              if (n._repeatCheckList_csryw[t] == this.ad_data_csryw.appid) {
                n._repeatCheckList_csryw.splice(t, 1);
                break;
              }
            }
        }, e.prototype.playActionAngle_csryw = function () {
          var t = this;
          t.node.angle = 0, cc.tween(t.node).to(.25, {
            angle: 20
          }).to(.25, {
            angle: 0
          }).call(function () {
            t.node.angle = 0;
          }).start();
        }, e.prototype.refresh_csryw = function (t) {
          var e = this,
            o = this;
          this._initView_csryw(), s.default.getADVs_csryw(this._AdPosID_csryw, function (r) {
            if (null != r) {
              if (o._datas_csryw = r, o.node) {
                for (var i = 0; i < o._datas_csryw.length; ++i) {
                  for (var s = !1, c = o._datas_csryw[i], a = 0; a < n._repeatCheckList_csryw.length; ++a) {
                    if (n._repeatCheckList_csryw[a] == c.appid) {
                      s = !0;
                      break;
                    }
                  }
                  if (!s) {
                    o.clearRepeat_csryw(), o.ad_data_csryw = c;
                    break;
                  }
                }
                if (null == o.ad_data_csryw && (o.ad_data_csryw = o._datas_csryw[Math.floor(Math.random() * r.length)]),
                  null != o.ad_data_csryw) {
                  e.setData_csryw(o.ad_data_csryw);
                  var l = !1;
                  for (a = 0; a < n._repeatCheckList_csryw.length; ++a) {
                    if (n._repeatCheckList_csryw[a] == o.ad_data_csryw.appid) {
                      l = !0;
                      break;
                    }
                  }
                  l || n._repeatCheckList_csryw.push(o.ad_data_csryw.appid);
                } else o.sprIcon.node.active = !1, t && t();
              }
            } else o.sprIcon.node.active = !1, t && t();
          });
        }, e._repeatCheckList_csryw = new Array(), r([u({
          type: cc.Enum(s.AdLocationTypeEnum),
          tooltip: "当前广告的类型\n ID_LoopAd 普通导出广告\nID_BannerAd Banner广告\nID_InsertAd 插屏广告\nID_AniAd 序列帧广告\n ID_HistoryAd 历史广告\nID_MoreGameAd 更多游戏广告"
        })], e.prototype, "AdLocationType", void 0), e = n = r([l], e);
      }(i.default);
    n.default = d, cc._RF.pop();
  }, {
    "../Util/AppPlatform": "AppPlatform",
    "../Util/ShareAd": "ShareAd",
    "./KRQ_Base": "KRQ_Base"
  }],
  ADWXBanner: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "142800zIqNPy4DYJWAvDj0c", "ADWXBanner");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.AlignXBannerEnum = void 0;
    var i, s = t("../../../FrameWork/View/KRQ_Base"),
      c = t("../../../FrameWork/Util/ShareAd"),
      a = t("../../../FrameWork/Util/AppPlatform"),
      l = t("../../../FrameWork/Config/AppSwitchConfig"),
      u = t("../../../FrameWork/Util/Utilit"),
      d = t("../../../FrameWork/Config/AppConfig"),
      p = t("../../../FrameWork/Mgr/RemoteMgr"),
      y = t("../../../FrameWork/Interface/FMInterface"),
      h = t("../../../FrameWork/Util/LogUtils"),
      _ = cc._decorator,
      f = _.ccclass,
      w = _.property;
    (function (t) {
      t[t.AlignXLeft = 0] = "AlignXLeft", t[t.AlignXLMiddle = 1] = "AlignXLMiddle", t[t.AlignXRight = 2] = "AlignXRight";
    })(i = n.AlignXBannerEnum || (n.AlignXBannerEnum = {}));
    var g = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.AlignX = i.AlignXLMiddle, e._wxBanner_csryw = null, e._onLoad_csryw = null,
          e._onError_csryw = null, e._onResize_csryw = null, e._isCreating_csryw = !1, e._AdPosID_csryw = -10086,
          e._datasAll_csryw = [], e._isOnStartFlag_csryw = !1, e;
      }
      return o(e, t), e.prototype.initView_csryw = function () {
          var t = this;
          this._AdPosID_csryw = c.default.getAdLocationIDByType_csryw(c.AdLocationTypeEnum.ID_BannerAd),
            this.sprIcon.node.on("click", this.onClickAd_csryw, this), this.sprIcon.node.active = !1;
          var e = this.node.getComponent(cc.Widget);
          e && e.updateAlignment(), this.scheduleOnce(function () {
            t._isOnStartFlag_csryw = !0, t.isActiveView_csryw() && t.refresh_csryw();
          });
        }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
        e.prototype.setData_csryw = function (t, e) {
          this.ad_data_csryw = t;
        }, e.prototype.onClickAd_csryw = function () {
          a.default.navigateToMiniProgram_csryw(this.ad_data_csryw), console.log("点击了图片 做跳转");
        }, e.prototype.hideView_csryw = function () {
          this.node.active = !1, this.clearWXBaner_csryw();
        }, e.prototype.showView_csryw = function () {
          this.node.active = !0, this.refresh_csryw();
        }, e.prototype.refresh_csryw = function (t) {
          this.isValid && (this._initView_csryw(), 1 == l.default.getInstance_csryw().getAppSwitchData_csryw().banner_csryw ? this.refreshWXBanner_csryw() : this.refreshBanner_csryw());
        }, e.prototype.refreshWXBanner_csryw = function () {
          var t = this;
          if (!a.default.is_WECHAT_GAME_csryw() && !a.default.is_QQ_PLAY_csryw() || null == this.node || !this.node.activeInHierarchy) return this.unschedule(this.refreshWXBanner_csryw),
            void this.clearWXBaner_csryw();
          if (!this._isCreating_csryw && this.isActiveView_csryw()) {
            this.clearWXBaner_csryw();
            var e = this,
              n = null;
            a.default.is_WECHAT_GAME_csryw() ? n = window.wx.getSystemInfoSync() : a.default.is_QQ_PLAY_csryw() && (n = window.qq.getSystemInfoSync());
            var o = u.default.convertDesignToFrameSize_csryw(this.node),
              r = o.left,
              s = o.top,
              c = o.width,
              p = c;
            switch (c < 300 && (p = 300), this.AlignX) {
              case i.AlignXLeft:
                break;

              case i.AlignXRight:
                r -= p - c;
                break;

              default:
                r -= (p - c) / 2;
            }
            if (console.log("创建  createBannerAd  "), a.default.is_WECHAT_GAME_csryw()) {
              e._isCreating_csryw = !0;
              var y = ["adunit-cfdfd82466dbaabe", "adunit-fa57eb8c8969cd17", "adunit-684791d3482f81eb", "adunit-494493c2e7104ad9", "adunit-674a392e855e8df9"];
              this._wxBanner_csryw = window.wx.createBannerAd({
                adUnitId: "adunit-cfdfd82466dbaabe",
                adIntervals: 30,
                style: {
                  left: r,
                  top: s,
                  width: c
                }
              }), null != e._wxBanner_csryw ? (e._wxBanner_csryw.onLoad(function (o) {
                if (console.log("KRQ  WXBanner广告 加载完成 : ", y), e._isCreating_csryw = !1, e.isValid && null != e._wxBanner_csryw && t.node.activeInHierarchy) {
                  if (n.screenHeight - e._wxBanner_csryw.style.top < e._wxBanner_csryw.style.realHeight) {
                    var r = n.screenHeight - e._wxBanner_csryw.style.realHeight;
                    e._wxBanner_csryw.style.top = r;
                  }
                  e._wxBanner_csryw.show(), t.sprIcon && (t.sprIcon.node.active = !1);
                } else e.clearWXBaner_csryw();
              }), e._wxBanner_csryw.onError(function (n) {
                console.log("KRQ WXBanner广告 加载失败 : ", y), e._isCreating_csryw = !1, e.clearWXBaner_csryw(),
                  e.isValid && t.node.activeInHierarchy && e.refreshBanner_csryw();
              }), e._wxBanner_csryw.onResize(function (t) {})) : (console.log("没有wx banner"), e.refreshBanner_csryw());
            } else if (a.default.is_QQ_PLAY_csryw()) {
              e._isCreating_csryw = !0;
              var h, _ = (h = l.default.getInstance_csryw().getAppSwitchData_csryw().recreateBannerIDList_csryw)[Math.floor(Math.random() * h.length)];
              null == _ && (_ = d.default.qq_bannerAdUnitId_csryw), e._wxBanner_csryw = window.qq.createBannerAd({
                adUnitId: _,
                adIntervals: 30,
                style: {
                  left: r,
                  top: s,
                  width: c
                }
              }), null != e._wxBanner_csryw ? (e._onLoad_csryw = function (n) {
                  console.log("KRQ QQBanner广告 加载完成 : ", _), console.log(n), e._isCreating_csryw = !1,
                    e.isValid && null != e._wxBanner_csryw && t.node.activeInHierarchy ? (e._wxBanner_csryw.show(),
                      t.sprIcon && (t.sprIcon.node.active = !1)) : e.clearWXBaner_csryw();
                }, e._wxBanner_csryw.onLoad(e._onLoad_csryw), e._onError_csryw = function (n) {
                  console.log("KRQ QQBanner广告 加载失败 : ", _), console.log(n), e._isCreating_csryw = !1,
                    e.clearWXBaner_csryw(), e.isValid && null != e._wxBanner_csryw && t.node.activeInHierarchy && e.refreshBanner_csryw();
                }, e._wxBanner_csryw.onError(e._onError_csryw), e._onResize_csryw = function (t) {},
                e._wxBanner_csryw.onResize(e._onResize_csryw)) : e.refreshBanner_csryw();
            }
          }
        }, e.prototype.clearWXBaner_csryw = function () {
          console.log("清除微信端banner"), this._wxBanner_csryw && (this._wxBanner_csryw.hide(),
              this._wxBanner_csryw.offLoad(this._onLoad_csryw), this._wxBanner_csryw.offError(this._onError_csryw),
              this._wxBanner_csryw.offResize(this._onResize_csryw), this._wxBanner_csryw.destroy()),
            this._wxBanner_csryw = null;
        }, e.prototype.refreshBanner_csryw = function () {
          var t = this;
          if (this.isValid) {
            var e = this;
            c.default.getADVs_csryw(this._AdPosID_csryw, function (n) {
              if (null != n) {
                e._datasAll_csryw = n;
                var o = n[Math.floor(Math.random() * n.length)];
                e.setData_csryw(o), o && (console.log("刷新本地banner"), e.ad_data_csryw && e.ad_data_csryw.logo ? p.default.loadRemote_csryw(e.ad_data_csryw.logo, y.handleFM_csryw(function (t, n) {
                  if (!t && e.isValid && e.sprIcon) {
                    var o = new cc.SpriteFrame(n);
                    e.sprIcon.spriteFrame = o, e.sprIcon.node.active = !0, console.log("下载  " + e.ad_data_csryw.logo);
                  }
                }, t)) : h.LogUtils.error_csryw("刷新图片异常" + e.ad_data_csryw));
              }
            });
          }
        }, e.prototype.onEnable = function () {
          t.prototype.onEnable.call(this), this._isOnStartFlag_csryw && this.refresh_csryw();
        }, e.prototype.onDisable = function () {
          t.prototype.onDisable.call(this), this.clearWXBaner_csryw(), this.unschedule(this.refreshWXBanner_csryw);
        }, e.prototype.onDestroy = function () {
          t.prototype.onDestroy.call(this), this.clearWXBaner_csryw();
        }, r([w({
          type: cc.Enum(i),
          tooltip: "Banner对齐类型\n AlignXLeft 左对齐\nAlignXLMiddle 居中对齐AlignXRight 右对齐\n"
        })], e.prototype, "AlignX", void 0), e = r([f], e);
    }(s.default);
    n.default = g, cc._RF.pop();
  }, {
    "../../../FrameWork/Config/AppConfig": "AppConfig",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Interface/FMInterface": "FMInterface",
    "../../../FrameWork/Mgr/RemoteMgr": "RemoteMgr",
    "../../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../../../FrameWork/Util/LogUtils": "LogUtils",
    "../../../FrameWork/Util/ShareAd": "ShareAd",
    "../../../FrameWork/Util/Utilit": "Utilit",
    "../../../FrameWork/View/KRQ_Base": "KRQ_Base"
  }],
  AIBase: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "254acqPYLJFNYw5L/BHf3bd", "AIBase");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = t("../Character"),
      i = t("../CharacterActionState"),
      s = t("../../utils/Utils"),
      c = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.aiLevel = 0, e.responeTimeFixed = 30, e.disCombo = 240, e.disFixed = 150,
            e.disMin = 50, e.disMax = e.disFixed, e.responseTimeMax = 30, e.responseTime = 0,
            e.vect = cc.v2(), e.forceCombo = !1, e.isInit = !1, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
          }, e.prototype.initEvent = function () {}, e.prototype.onSetAILevel = function (t) {},
          e.prototype.update = function (e) {
            this.gameCtrl.isPaused || (t.prototype.update.call(this, e), this.aiLoop());
          }, e.prototype.initActFsm = function () {
            this.fsmAct = new a(this), this.fsmAct.id = this.pid;
          }, e.prototype.aiLoop = function () {}, e.prototype.chanceToAct = function (t) {
            return s.default.randomRange(0, 100) < t;
          }, e.prototype.checkRangeWeapon = function () {
            var t = this.node.parent.getChildByName("Throwing");
            return !(!t || t.group == this.atkGroup || !t.isValid);
          }, e.prototype.stopAttack = function () {
            return !!this.target && (!(!this.target.fsmAct.isBeaten() || this.target.isOnGround) || !!this.target.fsmAct.isGetUp());
          }, e;
      }(r.default);
    n.default = c;
    var a = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return o(e, t), e.prototype.initEvent = function () {}, e;
    }(i.default);
    cc._RF.pop();
  }, {
    "../../utils/Utils": "Utils",
    "../Character": "Character",
    "../CharacterActionState": "CharacterActionState"
  }],
  AIMiddleConfig: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "ce19dkePgRBT7WT9b0WWWYL", "AIMiddleConfig"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.AIMiddleConfigData = void 0;
    var o = function () {
      return function () {};
    }();
    n.AIMiddleConfigData = o;
    var r = function () {
      function t() {
        this._data = new Array();
      }
      return t.getInstance = function () {
        return null == t._instance && (t._instance = new t()), t._instance;
      }, t.prototype.init = function (t) {
        this._data = t;
      }, t.prototype.getDatas = function () {
        return this._data;
      }, t.prototype.getData = function (t) {
        return this._data[t];
      }, t.prototype.getDataLength = function () {
        return this._data.length;
      }, t.prototype.getDataById = function (t) {
        for (var e = null, n = 0, o = this._data; n < o.length; n++) {
          var r = o[n];
          if (t == r.id) {
            e = r;
            break;
          }
        }
        return e;
      }, t;
    }();
    n.default = r, cc._RF.pop();
  }, {}],
  AIMiddle: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "74636iKMElKs5gR0NEoFipH", "AIMiddle");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = t("../../config/AIMiddleConfig"),
      i = t("../../Constants"),
      s = t("../../utils/Utils"),
      c = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.responeTimeFixed = 30, e.disCombo = 200, e.disFixed = 150, e.disMin = 50,
            e.actResponseTimeFixed = 25, e.actResponseTime = 0, e.disMax = e.disFixed, e.comboFlag = !1,
            e;
        }
        return o(e, t), e.prototype.onSetAILevel = function (t) {
          this.aiLevel = t;
          var e = r.default.getInstance().getDataById(this.aiLevel);
          if (null == e) {
            var n = r.default.getInstance().getDataLength();
            e = r.default.getInstance().getDatas()[n - 1];
          }
          this.responeTimeFixed = e.responeTimeFixed, this.disCombo = e.disCombo, this.disFixed = e.disFixed,
            this.disMin = e.disMin, this.actResponseTimeFixed = e.actResponseTimeFixed, this.act1 = e.act1,
            this.act2 = e.act2, this.act3 = e.act3, this.act4 = e.act4, this.act5 = e.act5,
            this.act6 = e.act6, this.isInit = !0;
        }, e.prototype.aiLoop = function () {
          if (0 != this.isInit && this.gameCtrl.state == i.GameState.START) {
            if (this.fsmAct.isBeaten() && (this.vect = cc.Vec2.ZERO), this.stopAttack()) return this.responseTime = 0,
              this.vect = cc.Vec2.ZERO, void this.handleJoyStick(this.vect);
            var t = s.default.getXdistance(this.node.getPosition(), this.target.node.getPosition());
            if (t < this.disMin) return this.responseTime = 0, this.vect = cc.v2(0, 0), void this.handleJoyStick(this.vect);
            if (t > this.disMax) this.disMax = this.disFixed, this.responseTime > this.responeTimeFixed && (this.responseTime = 0,
                this.fsmAct.isBeaten() || (this.chanceToAct(this.act1) ? this.vect = this.getTargetToSelfVect() : this.vect = this.getFaceToTargetVect())),
              this.actResponseTime > this.actResponseTimeFixed && (this.actResponseTime = 0, this.canDefence() && this.chanceToAct(this.act2) ? this.vect.x = this.target.faceDirection : (this.fsmAct.handleInput(i.ButtonKeyName.SKILL3, i.UIEvent.TOUCHUP),
                this.chanceToAct(this.act3) ? this.fsmAct.handleInput(i.ButtonKeyName.SKILL2, i.UIEvent.TOUCHUP) : this.fsmAct.handleInput(i.ButtonKeyName.SKILL1, i.UIEvent.TOUCHUP)));
            else {
              this.disMax = this.disFixed;
              var e = !1;
              this.actResponseTime > this.actResponseTimeFixed && (this.actResponseTime = 0, this.chanceToAct(this.act4) ? (this.comboFlag = !0,
                  this.canDefence() && this.chanceToAct(this.act5) ? (this.vect.x = this.target.faceDirection,
                    this.comboFlag = !1, e = !0) : this.fsmAct.handleInput(i.ButtonKeyName.SKILL3, i.UIEvent.TOUCHUP)) : (this.comboFlag = !1,
                  this.chanceToAct(this.act6) ? this.fsmAct.handleInput(i.ButtonKeyName.SKILL1, i.UIEvent.TOUCHUP) : this.fsmAct.handleInput(i.ButtonKeyName.NORMALATTACK, i.UIEvent.TOUCHUP)),
                e || (this.vect = cc.Vec2.ZERO)), this.comboFlag && this.fsmAct.handleInput(i.ButtonKeyName.NORMALATTACK, i.UIEvent.TOUCHUP);
            }
            this.responseTime++, this.actResponseTime++, this.handleJoyStick(this.vect);
          }
        }, e.prototype.canDefence = function () {
          return this.target.fsmAct.isAttack();
        }, e;
      }(t("./AIBase").default);
    n.default = c, cc._RF.pop();
  }, {
    "../../Constants": "Constants",
    "../../config/AIMiddleConfig": "AIMiddleConfig",
    "../../utils/Utils": "Utils",
    "./AIBase": "AIBase"
  }],
  AINormalConfig: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "c2b92JnWZRCgqbUlgTmqwwc", "AINormalConfig"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.AINormalConfigData = void 0;
    var o = function () {
      return function () {};
    }();
    n.AINormalConfigData = o;
    var r = function () {
      function t() {
        this._data = new Array();
      }
      return t.getInstance = function () {
        return null == t._instance && (t._instance = new t()), t._instance;
      }, t.prototype.init = function (t) {
        this._data = t;
      }, t.prototype.getDatas = function () {
        return this._data;
      }, t.prototype.getData = function (t) {
        return this._data[t];
      }, t.prototype.getDataLength = function () {
        return this._data.length;
      }, t.prototype.getDataById = function (t) {
        for (var e = null, n = 0, o = this._data; n < o.length; n++) {
          var r = o[n];
          if (t == r.id) {
            e = r;
            break;
          }
        }
        return e;
      }, t;
    }();
    n.default = r, cc._RF.pop();
  }, {}],
  AINormal: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d70754YBqFIYYEUGv9iVacz", "AINormal");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = t("../../config/AINormalConfig"),
      i = t("../../Constants"),
      s = t("../../utils/Utils"),
      c = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return o(e, t), e.prototype.onLoad = function () {
          t.prototype.onLoad.call(this);
        }, e.prototype.onSetAILevel = function (t) {
          this.aiLevel = t;
          var e = r.default.getInstance().getDataById(this.aiLevel);
          if (null == e) {
            var n = r.default.getInstance().getDataLength();
            e = r.default.getInstance().getDatas()[n - 1];
          }
          console.log("AINormal onSetAILevel cfg =", e), this.responeTimeFixed = e.responeTimeFixed,
            this.disCombo = e.disCombo, this.disFixed = e.disFixed, this.disMin = e.disMin,
            this.pugong1 = e.pugong1, this.pugong2 = e.pugong2, this.pugong3 = e.pugong3, this.act1 = e.act1,
            this.act2 = e.act2, this.jineng1 = e.jineng1, this.jineng2 = e.jineng2, this.isInit = !0;
        }, e.prototype.aiLoop = function () {
          if (0 != this.isInit && this.gameCtrl.state == i.GameState.START) {
            if (this.fsmAct.isBeaten() || this.stopAttack()) return this.responseTime = 0, this.vect = cc.v2(0, 0),
              this.forceCombo = !1, void this.handleJoyStick(this.vect);
            var t = s.default.getXdistance(this.node.getPosition(), this.target.node.getPosition());
            if (t < this.disMin) return this.responseTime = 0, this.vect = cc.v2(0, 0), this.forceCombo = !1,
              void this.handleJoyStick(this.vect);
            t < this.disMax ? (this.handleJoyStick(cc.Vec2.ZERO), this.forceCombo ? (this.fsmAct.handleInput(i.ButtonKeyName.NORMALATTACK, i.UIEvent.TOUCHUP),
              this.disMax = this.disCombo) : this.responseTime > this.responseTimeMax ? (this.responseTime = 0,
              this.disMax = this.disFixed, this.chanceToAct(this.pugong1) && (this.fsmAct.handleInput(i.ButtonKeyName.NORMALATTACK, i.UIEvent.TOUCHUP),
                this.chanceToAct(this.pugong2) ? this.responseTimeMax = s.default.randomRange(0, this.responeTimeFixed) : this.chanceToAct(this.pugong3) && (this.forceCombo = !0))) : this.disMax = this.disFixed) : (this.responseTime > this.responeTimeFixed && (this.responseTime = 0,
                this.chanceToAct(this.act1) ? (this.vect.x = 0, this.vect.y = 0) : this.chanceToAct(this.act2) ? this.vect = this.getTargetToSelfVect() : this.vect = this.getFaceToTargetVect(),
                this.chanceToAct(this.jineng1) && (this.vect.y = 1, this.chanceToAct(this.jineng2) ? this.fsmAct.handleInput(i.ButtonKeyName.SKILL2, i.UIEvent.TOUCHUP) : this.fsmAct.handleInput(i.ButtonKeyName.SKILL1, i.UIEvent.TOUCHUP))),
              this.forceCombo = !1, this.handleJoyStick(this.vect)), this.responseTime++;
          }
        }, e;
      }(t("./AIBase").default);
    n.default = c, cc._RF.pop();
  }, {
    "../../Constants": "Constants",
    "../../config/AINormalConfig": "AINormalConfig",
    "../../utils/Utils": "Utils",
    "./AIBase": "AIBase"
  }],
  ALD: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "09832sOC2NHNYxAOCbDWrpP", "ALD"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.ALDEventDef = void 0,
      function (t) {
        t.None_csryw = "", t.ReportAdClickSuccess_csryw = "广告导出成功", t.ReportAdClickFail_csryw = "广告导出失败",
          t.ReportLaunchOptions_csryw = "用户启动参数", t.ReportEnterGame = "关卡进入", t.ReportGameFail = "关卡失败",
          t.ReportGameSuccess = "关卡胜利", t.ReportGameRelive = "关卡复活", t.ReportSelectArmor = "选择铠甲",
          t.ReportSelectHelmet = "选择头盔", t.ReportSelectAttack = "选择攻击力", t.ReportSelectAll = "选择所有",
          t.ReportGameTry = "英雄试用", t.ReportHeroUnlock = "英雄解锁", t.ReportHeroUsing = "角色选择",
          t.ReportLaunchUnlockClick = "启动英雄解锁弹窗", t.ReportClickStartButton = "点击开始按钮", t.ReportCrazyView = "狂点界面进入",
          t.ReportTransitionView = "游戏加载界面", t.ReportLobbyEnter = "登录进入游戏大厅";
      }(n.ALDEventDef || (n.ALDEventDef = {}));
    var o = function () {
      function t() {}
      return t.aldSendOpenId_csryw = function (t) {}, t.aldSendEvent_csryw = function (t, e) {},
        t.aldSendReportAdClickSuccess_csryw = function (t) {}, t.aldSendReportAdClickFail_csryw = function (t) {},
        t.aldSendReportLaunchOptions_csryw = function (t, e, n) {}, t.aldLevelStart = function (t) {},
        t.aldLevelRunning = function (t, e, n) {
          void 0 === e && (e = "operation");
        }, t.aldLevelEnd = function (t, e, n) {
          void 0 === e && (e = "complete"), void 0 === n && (n = "关卡结束");
        }, t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  ActionState: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "0141a0+ihFNI6YA2z4+vgAK", "ActionState");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = function (t) {
      function e(e, n, o, r, i) {
        var s = t.call(this, e) || this;
        return s.caller = n, s.enterHandle = o, s.exitHandle = r, s.updateHandle = i, s;
      }
      return o(e, t), e.prototype.OnEnter = function (t) {
        null != t ? t.unshift ? this.enterHandle && this.enterHandle.apply(this.caller, t) : this.enterHandle && this.enterHandle.call(this.caller, t) : this.enterHandle && this.enterHandle.call(this.caller);
      }, e.prototype.OnUpdate = function () {
        this.updateHandle && this.updateHandle.call(this.caller);
      }, e.prototype.OnExit = function () {
        this.exitHandle && this.exitHandle.call(this.caller);
      }, e;
    }(t("./State").default);
    n.default = r, cc._RF.pop();
  }, {
    "./State": "State"
  }],
  AdFrameWork: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "2884bfr33dFFJ0jvK8f3VZa", "AdFrameWork"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../../FrameWork/Config/AppConfig"),
      r = t("../../../FrameWork/Mgr/UmengMgr"),
      i = t("../../../FrameWork/User/User"),
      s = t("../../../FrameWork/Util/AppPlatform"),
      c = t("../../../Platform/weixin/public/WXADMgr"),
      a = t("../../../Platform/weixin/WXAPI"),
      l = t("../config/DinosaurConfig"),
      u = t("./ResCenter"),
      d = t("./SoundsManager"),
      p = t("./Utils"),
      y = function () {
        function t() {}
        return t.getRandomVideoID = function () {
          return o.default.adUnitId_csryw[p.default.randomRange(0, o.default.adUnitId_csryw.length - 1)];
        }, t.showBanner = function (e) {
          s.default.is_WECHAT_GAME_csryw() && c.default.getBanner_csryw(function (e) {
            t.wxBanner = e, null != t.wxBanner && t.wxBanner.show_csryw();
          });
        }, t.destroyBanner = function () {
          null != t.wxBanner && t.wxBanner.hide_csryw(), t.wxBanner = null;
        }, t.showRewardVideo = function (t, e, n, o) {
          this.debug ? t && t.call(n) : a.default.showRewardedVideoAd_csryw(function (o) {
            d.default.continuePlayMusic(), o ? t && t.call(n) : e && e.call(n);
          }, function () {
            u.default.createTipDialog(), e && e.call(n);
          }, o);
        }, t.aldLevelStart = function () {
          s.default.is_WECHAT_GAME_csryw() && window.wx.aldStage.onStart({
            stageId: i.default.getLeveNum_csryw() + "",
            stageName: "关卡" + i.default.getLeveNum_csryw()
          });
        }, t.aldLevelRunning = function (t, e) {
          void 0 === t && (t = "operation"), s.default.is_WECHAT_GAME_csryw() && window.wx.aldStage.onRunning({
            stageId: i.default.getLeveNum_csryw() + "",
            stageName: "关卡" + i.default.getLeveNum_csryw(),
            event: t,
            params: e
          });
        }, t.aldLevelEnd = function (t, e) {
          void 0 === t && (t = "complete"), void 0 === e && (e = "关卡结束"), s.default.is_WECHAT_GAME_csryw() && window.wx.aldStage.onEnd({
            stageId: i.default.getLeveNum_csryw() + "",
            stageName: "关卡" + i.default.getLeveNum_csryw(),
            event: t,
            params: {
              desc: e
            }
          });
        }, t.aldUseHero = function (t, e) {
          void 0 === e && (e = 0);
          var n = l.default.getInstance().getDataById(t);
          n && o.default.useUmeng && r.UmengMgr.sendEvent_csryw("ReportHeroUsing", {
            DinosaurName: n.DinosaurName,
            level: i.default.getLeveNum_csryw(),
            isTry: e
          });
        }, t.debug = !1, t.wxBanner = null, t;
      }();
    n.default = y, cc._RF.pop();
  }, {
    "../../../FrameWork/Config/AppConfig": "AppConfig",
    "../../../FrameWork/Mgr/UmengMgr": "UmengMgr",
    "../../../FrameWork/User/User": "User",
    "../../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../../../Platform/weixin/WXAPI": "WXAPI",
    "../../../Platform/weixin/public/WXADMgr": "WXADMgr",
    "../config/DinosaurConfig": "DinosaurConfig",
    "./ResCenter": "ResCenter",
    "./SoundsManager": "SoundsManager",
    "./Utils": "Utils"
  }],
  AddMoneyView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "3233e1ni5VGU4egPFox81iR", "AddMoneyView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../FrameWork/Mgr/GameMgr"),
      s = t("../../../../FrameWork/Mgr/UmengMgr"),
      c = t("../../../../FrameWork/User/User"),
      a = t("../../../../Platform/weixin/WXAPI"),
      l = t("../../utils/ResCenter"),
      u = cc._decorator,
      d = u.ccclass,
      p = u.property,
      y = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.addGoldLabel = null, e.addGoldNum = 3e3, e;
        }
        return o(e, t), e.prototype.start = function () {
            this.addGoldLabel.string = "" + this.addGoldNum;
          }, e.prototype.onCloseCall = function () {
            this.node.destroy();
          }, e.prototype.onLookVideoCall = function () {
            var t = this;
            a.default.showRewardedVideoAd_csryw(function (e) {
              e && (c.default.addMoney_csryw(t.addGoldNum), i.default.getInstance_csryw().saveGameData_csryw(),
                s.UmengMgr.sendEvent_csryw(s.StatsFrameWorkEvent.Total_videoNumber, {
                  info: s.LookVideoType.addMoney
                }), t.onCloseCall());
            }, function () {
              l.default.createTipDialog();
            });
          }, r([p({
            tooltip: "加的金币",
            type: cc.Label
          })], e.prototype, "addGoldLabel", void 0), r([p(cc.Integer)], e.prototype, "addGoldNum", void 0),
          e = r([d], e);
      }(cc.Component);
    n.default = y, cc._RF.pop();
  }, {
    "../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../FrameWork/Mgr/UmengMgr": "UmengMgr",
    "../../../../FrameWork/User/User": "User",
    "../../../../Platform/weixin/WXAPI": "WXAPI",
    "../../utils/ResCenter": "ResCenter"
  }],
  AesTools: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "9c8c9VeXudGa6FEiTG/ZPQx", "AesTools"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("./aes.js"),
      r = function () {
        function t() {}
        return t.encrypt_csryw = function (e) {
          var n = o.enc.Utf8.parse(t.KEY_csryw),
            r = o.enc.Utf8.parse(t.IV_csryw);
          return o.AES.encrypt(e, n, {
            iv: r,
            mode: o.mode.CBC,
            padding: o.pad.Pkcs7
          }).toString();
        }, t.decrypt_csryw = function (e) {
          var n = o.enc.Utf8.parse(t.KEY_csryw),
            r = o.enc.Utf8.parse(t.IV_csryw);
          return o.AES.decrypt(e, n, {
            iv: r,
            padding: o.pad.Pkcs7
          }).toString(o.enc.Utf8);
        }, t.KEY_csryw = "b#63fFJ6AvkK3YT*", t.IV_csryw = "J$f4DU%sNL73M&Go", t;
      }();
    n.default = r, cc._RF.pop();
  }, {
    "./aes.js": "aes"
  }],
  AppConfig: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "b8f67bBoedOMYO872FafoSD", "AppConfig"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.GameName_csryw = "", t.useUmeng = !0, t.showLoadingLogo_csryw = !1, t.closeUseRYSDK_csryw = !1,
        t.isWX_TT_QQ_MiniGame_csryw = 0, t.TT_APP_ID_csryw = "ttdf2ca9914006af60", t.WX_APP_ID_csryw = "wxeb84cb4d06bce1c2",
        t.QQ_APP_ID_csryw = "1110386742", t.VIVO_APP_ID_csryw = "", t.OPPO_APP_ID_csryw = "",
        t.APK_APP_ID_csryw = "", t.TT_gameid_csryw = 122, t.WX_gameid_csryw = 1164, t.QQ_gameid_csryw = 125,
        t.VIVO_gameid_csryw = -1, t.OPPO_gameid_csryw = 112, t.APK_gameid_csryw = 847, t.TT_ResServer_csryw = "https://oss.renyouwangluo.cn/jjnw_tt",
        t.WX_ResServer_csryw = "https://oss.renyouwangluo.cn/zzklld", t.QQ_ResServer_csryw = "https://oss.renyouwangluo.cn/jjnw_qq",
        t.VIVO_ResServer_csryw = "https://oss.renyouwangluo.cn/jjnw", t.OPPO_ResServer_csryw = "https://oss.renyouwangluo.cn/jjnw_OPPO",
        t.APK_ResServer_csryw = "", t.TT_Versions_csryw = "0.0.0", t.WX_Versions_csryw = "1.0.0",
        t.QQ_Versions_csryw = "0.0.0", t.VIVO_Versions_csryw = "0.0.0", t.OPPO_Versions_csryw = "0.0.0",
        t.APK_Versions_csryw = "0.0.0", t.TT_LoopAdLocationID_csryw = -1, t.TT_BannerAdLocationID_csryw = -1,
        t.TT_InsertAdLocationID_csryw = -1, t.TT_AniAdLocationID_csryw = -1, t.TT_HistoryLocationID_csryw = -1,
        t.TT_MoreGameLocationID_csryw = -1, t.WX_LoopAdLocationID_csryw = "b71abcfc59a6c006427f76aaa73fe615",
        t.WX_BannerAdLocationID_csryw = "97c2b7a1efbf27d448b8695ac48ddabe", t.WX_InsertAdLocationID_csryw = -1,
        t.WX_AniAdLocationID_csryw = "95ef4b378758a9db1c6a54a70e0b5532", t.WX_HistoryLocationID_csryw = 292,
        t.WX_MoreGameLocationID_csryw = "3c5c8650fe4141eb57237e7050830032", t.QQ_LoopAdLocationID_csryw = -1,
        t.QQ_BannerAdLocationID_csryw = -1, t.QQ_InsertAdLocationID_csryw = -1, t.QQ_AniAdLocationID_csryw = -1,
        t.QQ_HistoryLocationID_csryw = -1, t.QQ_MoreGameLocationID_csryw = -1, t.VIVO_LoopAdLocationID_csryw = -1,
        t.VIVO_BannerAdLocationID_csryw = -1, t.VIVO_InsertAdLocationID_csryw = -1, t.VIVO_AniAdLocationID_csryw = -1,
        t.VIVO_HistoryLocationID_csryw = -1, t.VIVO_MoreGameLocationID_csryw = -1, t.OPPO_LoopAdLocationID_csryw = -1,
        t.OPPO_BannerAdLocationID_csryw = -1, t.OPPO_InsertAdLocationID_csryw = -1, t.OPPO_AniAdLocationID_csryw = -1,
        t.OPPO_HistoryLocationID_csryw = -1, t.OPPO_MoreGameLocationID_csryw = -1, t.adUnitId_csryw = "adunit-d0386e835662d3fa",
        t.bannerAdUnitId_csryw = "adunit-c5a025dd111aca97", t.InsAdUnitId_csryw = "adunit-2d086c3cdd96ff82",
        t.InsAdUnitIdList_csryw = ["adunit-2d086c3cdd96ff82"], t.nativeADId1_csryw = "adunit-fbedc104167c5576",
        t.nativeADId2_csryw = "adunit-71d739f55e1aa761", t.nativeADIdBig_csryw = "adunit-eb2d4dc05c7f00b6",
        t.tt_adUnitId_csryw = "2olhom4fg38389qnae", t.tt_bannerAdUnitId_csryw = "of6a5i4oi6rqecpnp4",
        t.tt_InsAdUnitId_csryw = "", t.tt_templateId_csryw = "5d1b4nobadk5163i86", t.qq_adUnitId_csryw = "5b57820f7aff1c8c238e450d22d468e6",
        t.qq_bannerAdUnitId_csryw = "4f66f2f5b95a75f49166da22da1e85ae", t.qq_InsAdUnitId_csryw = "341bb8725515401c5c923294ee653a64",
        t.qq_AppBoxId_csryw = "f10e0d49ad67e7cfab7c639e517823f8", t.qq_blockAdArray_csryw = ["b4d20888f606cf0a70cb7c3d071c2d27", "9a4ae7e232aacedf11100881c0f428c6", "4fa18896b8cab872507bce053a1a3f4e", "62daa9df5453871d8130856a528a6f00", "fd88d17d217d0f8eec10a05fda088dc1", "b9c8f5e3fe77052a693b8b5e351988a6"],
        t.subResArray_csryw = ["subResMain", "subResGame", "subRes", "kuandian"], t.TT_state_csryw = 1,
        t.WX_state_csryw = 0, t.QQ_state_csryw = 4, t.VIVO_state_csryw = 7, t.OPPO_state_csryw = 5,
        t.BD_state_csryw = 3, t.APK_state_csryw = 6, t.AppID_csryw = "", t.state_csryw = 0,
        t.gameid_csryw = 0, t.ResServer_csryw = "", t.Versions_csryw = "0.0.0", t.LoopAdLocationID_csryw = -1,
        t.BannerAdLocationID_csryw = -1, t.InsertAdLocationID_csryw = -1, t.AniAdLocationID_csryw = -1,
        t.HistoryLocationID_csryw = -1, t.MoreGameLocationID_csryw = -1, t.UseRYSDK_csryw = !0,
        t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  AppPlatform: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "f8b57dn8sFM+5vHjIk2kcjH", "AppPlatform"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("./LogUtils"),
      r = t("../Config/AppConfig"),
      i = t("../Event/EventMgr"),
      s = t("../Event/EventEnum"),
      c = t("../Mgr/RYPlatformMgr"),
      a = t("../../Platform/tt/TTAPI"),
      l = t("../../Platform/oppo/OPPOAPI"),
      u = t("../../Platform/vivo/VIVOAPI"),
      d = t("../../Platform/qq/QQMiniGameAPI"),
      p = t("../../Platform/qq/CachedQQBannerAd"),
      y = t("../../Platform/weixin/WXAPI"),
      h = t("../NetWork/HttpUnit"),
      _ = t("../Mgr/UmengMgr"),
      f = t("../../Platform/weixin/BannerMgr"),
      w = function () {
        function t() {}
        return t.loginPlatform_csryw = function (e, n, o) {
          if (t.is_TT_GAME_csryw()) a.default.ttLogin_csryw(function (t) {
            e(t);
          }, function () {
            n();
          });
          else if (t.is_WECHAT_GAME_csryw()) y.default.wxLogin_csryw(function (t) {
            e(t);
          }, null);
          else if (t.is_OPPO_GAME_csryw()) l.default.initAdService_csryw(function () {}, function () {}, function () {}),
            l.default.Login_csryw(function (t) {
              e(t);
            }, null);
          else if (t.is_QQ_PLAY_csryw()) d.default.Login_csryw(function (t) {
            e(t);
          }, null);
          else if (t.is_VIVO_GAME_csryw()) {
            var r = 0,
              i = function (t) {
                e(t);
              },
              s = function () {
                if (r >= 1) return console.log("vivo 登陆失败！！！重试次数已达上限"), void n();
                u.default.showDialog_csryw("提示", "登录失败，点击确定按钮重试", [{
                  text: "确定",
                  color: "#33dd44"
                }], function () {
                  u.default.Login_csryw(function (t, e) {
                    i(t);
                  }, function () {
                    s();
                  }), ++r;
                }, function () {}, function () {});
              };
            u.default.Login_csryw(function (t, e) {
              i(t);
            }, function () {
              s();
            });
          } else t.is_Android_csryw() ? e(FMJava.get_IdentifierId()) : t.is_Iphone_csryw() ? e(FMOC.get_IdentifierId()) : o ? o() : n();
        }, t.loadSubpackageFinish_csryw = function (t) {}, t.playVideo_csryw = function (e) {
          t.is_WECHAT_GAME_csryw() ? y.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed, e.name) : t.is_TT_GAME_csryw() ? a.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed) : t.is_VIVO_GAME_csryw() ? u.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed) : t.is_OPPO_GAME_csryw() ? l.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed) : t.is_QQ_PLAY_csryw() ? d.default.showRewardedVideoAd_csryw(e.onClose, e.onFailed) : t.is_Android_csryw() ? "full" == e.name ? FMJava.showCSJ_FullScreenVideo(e.onClose, e.onFailed) : FMJava.showCSJ_Video(e.onClose, e.onFailed) : t.is_Iphone_csryw() ? "full" == e.name ? FMOC.showCSJ_FullScreenVideo(e.onClose, e.onFailed) : FMOC.showCSJ_Video(e.onClose, e.onFailed) : (o.LogUtils.log_csryw("playVideo 其他平台 未实现"),
            e.onClose && e.onClose(!0));
        }, t.showToast_csryw = function (e) {
          t.is_WECHAT_GAME_csryw() || (t.is_TT_GAME_csryw() ? window.tt.showToast({
            title: e,
            icon: "none"
          }) : t.is_VIVO_GAME_csryw() ? window.qg.showToast({
            message: e
          }) : t.is_OPPO_GAME_csryw() ? window.qg.showToast({
            title: e,
            icon: "none"
          }) : t.is_QQ_PLAY_csryw() ? window.qq.showToast({
            title: e,
            icon: "none"
          }) : t.is_Android_csryw() || t.is_Iphone_csryw() || o.LogUtils.log_csryw("showToast 其他平台 未实现"));
        }, t.navigateToMiniProgram_csryw = function (e, n) {
          e && (o.LogUtils.log_csryw("跳转游戏： " + e.title), t.is_TT_GAME_csryw() ? a.default.showMoreGamesModal_csryw(function () {
            o.LogUtils.log_csryw("跳转成功");
          }, function () {
            o.LogUtils.log_csryw("跳转失败"), i.default.emitEvent_csryw(s.ryw_Event.ryw_AD_OnShareAdFail_csryw);
          }) : t.is_WECHAT_GAME_csryw() ? (c.default.sendClickAd_csryw(e.id), _.UmengMgr.sendReportAdClickStart_csryw(e.title, e.appid),
            y.default.navigateToMiniProgram_csryw(e.appid, e.url, function (t) {
              o.LogUtils.log_csryw("跳转成功"), _.UmengMgr.sendReportAdClickSuccess_csryw(e.title, e.appid),
                c.default.sendClickAdAllow_csryw(e.id);
            }, function (t) {
              o.LogUtils.log_csryw("跳转失败"), i.default.emitEvent_csryw(s.ryw_Event.ryw_AD_OnShareAdFail_csryw),
                "navigateToMiniProgram:fail cancel" == t.errMsg && (o.LogUtils.log_csryw("用户取消跳转"),
                  _.UmengMgr.sendReportAdClickFail_csryw(e.title, e.appid), i.default.emitEvent_csryw(s.ryw_Event.ryw_ADKRQ_ClickQuit_csryw, n));
            }, function (t) {
              o.LogUtils.log_csryw("跳转完成");
            })) : t.is_OPPO_GAME_csryw() ? l.default.navigateToMiniProgram_csryw(e.appid, e.title, e.url, function (t) {
            o.LogUtils.log_csryw("跳转成功");
          }, function (t) {
            o.LogUtils.log_csryw("跳转失败"), i.default.emitEvent_csryw(s.ryw_Event.ryw_AD_OnShareAdFail_csryw);
          }, function (t) {
            o.LogUtils.log_csryw("跳转完成");
          }) : t.is_QQ_PLAY_csryw() ? d.default.navigateToMiniProgram_csryw(e.appid, e.url, function (t) {
            o.LogUtils.log_csryw("跳转成功");
          }, function (t) {
            o.LogUtils.log_csryw("跳转失败"), i.default.emitEvent_csryw(s.ryw_Event.ryw_AD_OnShareAdFail_csryw);
          }, function (t) {
            o.LogUtils.log_csryw("跳转完成");
          }) : t.is_VIVO_GAME_csryw() && u.default.navigateToMiniProgram_csryw(e.appid, e.url, function (t) {
            o.LogUtils.log_csryw("跳转成功");
          }, function (t) {
            o.LogUtils.log_csryw("跳转失败"), i.default.emitEvent_csryw(s.ryw_Event.ryw_AD_OnShareAdFail_csryw);
          }, function (t) {
            o.LogUtils.log_csryw("跳转完成");
          }));
        }, t.initGame_csryw = function () {
          if (t.is_WECHAT_GAME_csryw()) f.default.init_csryw();
          else if (t.is_QQ_PLAY_csryw()) p.default.preloadBanner_csryw(),
            d.default.LoadAppBoxAd_csryw(function () {}, function () {});
          else if (t.is_OPPO_GAME_csryw()) null != window.qg.reportMonitor && "function" == typeof window.qg.reportMonitor && window.qg.reportMonitor("game_scene", 0),
            l.default.LoadCahcedNativeAd_csryw();
          else if (t.is_VIVO_GAME_csryw()) u.default.LoadCahcedNativeAd_csryw();
          else if (t.is_TT_GAME_csryw()) {
            var e = a.default.getLaunchOptionsSync_csryw().query;
            window.tt.login({
              force: !1,
              success: function (t) {
                console.log("申请code成功:", t);
                var n = t.code;
                h.default.reportTTLaunchChannel_csryw(r.default.AppID_csryw, n, e, function (t) {
                  console.log("抖音上报渠道来源成功");
                }, function (t) {
                  console.log("抖音上报渠道来源失败");
                });
              },
              fail: function (t) {
                console.log("申请code失败", JSON.stringify(t));
              }
            });
          }
        }, t.is_WECHAT_GAME_csryw = function () {
          return 0 == r.default.isWX_TT_QQ_MiniGame_csryw && cc.sys.platform == cc.sys.WECHAT_GAME;
        }, t.is_QQ_PLAY_csryw = function () {
          return cc.sys.platform == cc.sys.WECHAT_GAME && 2 == r.default.isWX_TT_QQ_MiniGame_csryw;
        }, t.is_OPPO_GAME_csryw = function () {
          return cc.sys.platform == cc.sys.OPPO_GAME;
        }, t.is_VIVO_GAME_csryw = function () {
          return cc.sys.platform == cc.sys.VIVO_GAME;
        }, t.is_TT_GAME_csryw = function () {
          return cc.sys.platform == cc.sys.BYTEDANCE_GAME;
        }, t.is_Xiaomi_GAME_csryw = function () {
          return cc.sys.platform == cc.sys.XIAOMI_GAME;
        }, t.is_Android_csryw = function () {
          return cc.sys.platform == cc.sys.ANDROID;
        }, t.isIphoneX_csryw = function () {
          if (this.is_Iphone_csryw()) {
            var t = cc.sys.windowPixelResolution;
            if (2436 == t.width && 1125 == t.height || 2436 == t.height && 1125 == t.width) return !0;
            if (2688 == t.width && 1242 == t.height || 2688 == t.height && 1242 == t.width) return !0;
            if (1792 == t.width && 828 == t.height || 1792 == t.height && 828 == t.width) return !0;
          }
          return !1;
        }, t.is_Iphone_csryw = function () {
          return cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD;
        }, t.getLaunchOptionsSync_csryw = function () {
          var e = null;
          if (t.is_TT_GAME_csryw()) {
            e = window.tt.getLaunchOptionsSync();
            var n = JSON.stringify(e);
            return o.LogUtils.log_csryw("场景值: " + n), e;
          }
          if (t.is_WECHAT_GAME_csryw()) {
            e = window.wx.getLaunchOptionsSync();
            n = JSON.stringify(e);
            return o.LogUtils.log_csryw("场景值: " + n), e;
          }
          if (t.is_OPPO_GAME_csryw()) {
            var r = window.qg.getLaunchOptionsSync();
            null != r && "" != r ? e = r : (e = {
              query: "",
              referrerInfo: {
                package: "",
                extraData: {
                  appid: ""
                }
              }
            }, console.log("没有启动设置！！！"));
            n = JSON.stringify(e);
            return o.LogUtils.log_csryw("场景值: " + n), e;
          }
          if (t.is_QQ_PLAY_csryw()) {
            e = window.qq.getLaunchOptionsSync();
            n = JSON.stringify(e);
            return o.LogUtils.log_csryw("场景值: " + n), e;
          }
          return e = (t.is_VIVO_GAME_csryw(), {});
        }, t.PlatformResSubName_csryw = "PlatformRes", t.isBackGameWX = !1, t;
      }();
    n.default = w, cc._RF.pop();
  }, {
    "../../Platform/oppo/OPPOAPI": "OPPOAPI",
    "../../Platform/qq/CachedQQBannerAd": "CachedQQBannerAd",
    "../../Platform/qq/QQMiniGameAPI": "QQMiniGameAPI",
    "../../Platform/tt/TTAPI": "TTAPI",
    "../../Platform/vivo/VIVOAPI": "VIVOAPI",
    "../../Platform/weixin/BannerMgr": "BannerMgr",
    "../../Platform/weixin/WXAPI": "WXAPI",
    "../Config/AppConfig": "AppConfig",
    "../Event/EventEnum": "EventEnum",
    "../Event/EventMgr": "EventMgr",
    "../Mgr/RYPlatformMgr": "RYPlatformMgr",
    "../Mgr/UmengMgr": "UmengMgr",
    "../NetWork/HttpUnit": "HttpUnit",
    "./LogUtils": "LogUtils"
  }],
  AppSwitchConfig: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "363a2/EfUxOjLZAJUzEw51c", "AppSwitchConfig"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.cocosWxcfg = n.BDCfg = n.VVcfg = n.TT2Cfg = n.TTCfg = n.QQCfg = n.OPPOCfg = n.WXCfg = n.Quickgamecfg = n.AppSwitchData = void 0;
    var o = t("./AppConfig"),
      r = t("../Util/LogUtils"),
      i = t("../Interface/FMInterface"),
      s = function () {
        function t() {
          this.version_csryw = "", this.banner_csryw = 0, this.wudian_csryw = 0, this.debuginfo_csryw = 0,
            this.isNetWorkGame_csryw = 1, this.wudianAvailableTime_csryw = {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0,
              18: 0,
              19: 0,
              20: 0,
              21: 0,
              22: 0,
              23: 0
            }, this.homePageExportTimeControl = {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0,
              18: 0,
              19: 0,
              20: 0,
              21: 0,
              22: 0,
              23: 0
            }, this.mailiang_csryw = 1, this.mailianglist_csryw = new Array(), this.mailiangSceneList_csryw = new Array(),
            this.wxWuDianBanners_csryw = new Array(), this.recreateBannerIDList_csryw = new Array(),
            this.bannerRecreateTime_csryw = 5, this.kuangdianjiange_csryw = 0, this.btnMoveTimer_csryw = 1,
            this.bannerMoveTimer_csryw = .5, this.bannerFreshTimer_csryw = 200, this.bannerCreateFailNum_csryw = 3,
            this.bannerTodayBannerMax_csryw = 10, this.adSwitch_csryw = 1, this.wudianSceneList_csryw = new Array(),
            this.continueBtnDelayTime_csryw = 2, this.bannerShowTime_csryw = 30, this.fakeBtn_csryw = 0,
            this.popAd_csryw = 0, this.continueBanner_csryw = 0, this.continueBannerShowTime_csryw = 2,
            this.continueBannerHideTime_csryw = 2, this.oppocfg_csryw = new l(), this.qqcfg_csryw = new u(),
            this.ttcfg_csryw = new d(), this.vivocfg_csryw = new y(), this.wxcfg_csryw = new a(),
            this.tt2cfg_csryw = new p(), this.cocosWxcfg_csryw = new _(), this.bdcfg_csryw = new h(),
            this.quickgamecfg_csryw = new c();
        }
        return Object.defineProperty(t.prototype, "homePageExportIsOpen_csryw", {
          get: function () {
            return console.log(this.homePageExportTimeControl), console.log(new Date().getHours()),
              console.log(Number(this.homePageExportTimeControl["" + new Date().getHours()])),
              console.log("homePageIsOpen" + (1 == Number(this.homePageExportTimeControl["" + new Date().getHours()]))),
              1 == Number(this.homePageExportTimeControl["" + new Date().getHours()]);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "wudianTimeAvaliable_csryw", {
          get: function () {
            return 1 == this.wudianAvailableTime_csryw[new Date().getHours()];
          },
          enumerable: !1,
          configurable: !0
        }), t;
      }();
    n.AppSwitchData = s;
    var c = function () {
      return function () {
        this.autoExport = 0, this.bigExportColor = "416e8d", this.bigExportColor_g = "416e8d",
          this.bigExportBannerType = 100, this.bigExportShowBannerTime = 1, this.bigExportHideBannerTime = 2,
          this.hotplayBannerType = 100, this.hotplayShowBannerTime = 1, this.hotplayHideBannerTime = 2,
          this.recommendBannerType = 100, this.recommendShowBannerTime = 1, this.recommendButMoveTime = .2,
          this.endBannerType = 100, this.endShowBannerTime = 1, this.endButMoveTime = .2,
          this.crazyShowBanner = [3, 10], this.playButVideo = 0, this.crazyBannerHideTime = 0;
      };
    }();
    n.Quickgamecfg = c;
    var a = function () {
      return function () {
        this.kuangdian_csryw = 1, this.kuangdianBanner_csryw = 0, this.kuangdianLevelSpcacing_csryw = 0,
          this.ForceSkip_csryw = 0, this.SlideSkip_csryw = 0, this.tc_ForceSkip_csryw = 0,
          this.tc_SlideSkip_csryw = 0, this.phb_ForceSkip_csryw = 0, this.phb_SlideSkip_csryw = 0,
          this.tc_continueBanner_csryw = 0, this.MainPop_csryw = 0, this.hyrw_ForceSkip_csryw = 0,
          this.hyrw_SlideSkip_csryw = 0, this.hyrw_continueBanner_csryw = 0, this.handShow_csryw = 1,
          this.firstOpen_csryw = 0, this.startVideo_csryw = 0, this.mainBackBtn_csryw = 1,
          this.mainMoreBtn_csryw = 1, this.mainItemBtn_csryw = 1, this.mainExportShow_csryw = 0,
          this.isJumpHotPlay_csryw = 0, this.moreGameShowLevel_csryw = 0, this.PinzhuangChapingKaiguan_csryw = 0,
          this.PinzhuangDaochuKaiguan_csryw = 0, this.setUserScan_csryw = 0, this.HPdisability = 0,
          this.HPdisabilitytime = 0, this.firstHotPlayPop = 0, this.firstHotPlayBannerShow = 0,
          this.isJumpVideo_csryw = 0, this.JumpVideoProb_csryw = 0, this.isResultJumpVideo_csryw = 0,
          this.isRankJumpVideo_csryw = 0, this.isMoreJumpVideo_csryw = 0, this.isHotPlayJumpVideo_csryw = 0,
          this.isPinZhuangJumpVideo_csryw = 0, this.isCrazyJumpVideo_csryw = 0, this.isExportJumpVideo_csryw = 0,
          this.kuangdianvideo_csryw = 0, this.kuangdianovercount = 5, this.resulekuangdian = 0,
          this.resulekuangdiantype = 0, this.before_main_native_csryw = 0, this.native_continueBanner_csryw = 0,
          this.isShowMainNative_csryw = 0, this.isShowResultAndNoGameResult_csryw = 1, this.isShowGameResultAD_csryw = 0,
          this.ShowResult = 1, this.ShowMoneyView = 1, this.ShowVideoView = 1;
      };
    }();
    n.WXCfg = a;
    var l = function () {
      return function () {
        this.yuansheng_csryw = 100, this.yuanshengSwitch_csryw = 1, this.addToDesktop_csryw = 0,
          this.oppoversions_csryw = "", this.btnShowTimer_csryw = 0, this.indexAdSwitch_csryw = 0,
          this.endAdSwitch_csryw = 0, this.yuansheng2_csryw = 100, this.yuanshengSwitch2_csryw = 1;
      };
    }();
    n.OPPOCfg = l;
    var u = function () {
      return function () {
        this.kuangdianBanner_csryw = 0, this.kuangdianBox_csryw = 0, this.box_csryw = 0,
          this.weiyi_csryw = 0, this.qqversions_csryw = "";
      };
    }();
    n.QQCfg = u;
    var d = function () {
      return function () {
        this.moreGameSwitch_csryw = 0, this.kuangdianBanner_csryw = 0, this.luping_csryw = 0,
          this.ttversions_csryw = "";
      };
    }();
    n.TTCfg = d;
    var p = function () {
      return function () {
        this.startSwitch_csryw = 0, this.signInSwitch_csryw = 0, this.getSwitch_csryw = 0,
          this.useSwitch_csryw = 0, this.reliveSwitch_csryw = 0, this.screenCapSwitch_csryw = 0,
          this.boxSwitch_csryw = 0;
      };
    }();
    n.TT2Cfg = p;
    var y = function () {
      return function () {
        this.yuanshengSwitch_csryw = 1, this.yuansheng_csryw = 100, this.yuanshengSwitch2_csryw = 1,
          this.yuansheng2_csryw = 100, this.chapingSwitch_csryw = 1, this.chaping_csryw = 100,
          this.addToDesktop_csryw = 1, this.vivoversions_csryw = "", this.btnShowTimer_csryw = 1;
      };
    }();
    n.VVcfg = y;
    var h = function () {
      return function () {
        this.version_csryw = "", this.signInSwitch_csryw = 0, this.taskVideo_csryw = 1,
          this.btnDelayTime_csryw = 0;
      };
    }();
    n.BDCfg = h;
    var _ = function () {
      return function () {
        this.loopAd = {
          rollWayLeftUp_csryw: 0,
          rollWaitNum_csryw: 1,
          rollWaitTime_csryw: 1,
          roolSpeed_csryw: 3,
          bgColor_csryw: "62d5ff"
        }, this.skinTrial = {
          videoIcon_csryw: 0,
          wudian_csryw: 0,
          timeClick_csryw: 0,
          butMoveTime_csryw: 0,
          bannerShowTime_csryw: 0,
          bannerHideTime_csryw: 0,
          butDelayShowTime_csryw: 0,
          rollWayLeftUp_csryw: 1,
          rollWaitNum_csryw: 1,
          rollWaitTime_csryw: 1,
          roolSpeed_csryw: 3
        }, this.revival = {
          videoIcon_csryw: 0,
          wudian_csryw: 0,
          timeClick_csryw: 0,
          butMoveTime_csryw: 0,
          bannerShowTime_csryw: 0,
          bannerHideTime_csryw: 0,
          butDelayShowTime_csryw: 0,
          rollWayLeftUp_csryw: 1,
          rollWaitNum_csryw: 1,
          rollWaitTime_csryw: 1,
          roolSpeed_csryw: 3
        }, this.moreGoodGame = {
          bgColor_csryw: "3485fb",
          maskColor_csryw: "",
          mouseEventIsUp_csryw: 0,
          cancelIntercept_csryw: 1,
          wudian_csryw: 0,
          timeClick_csryw: 0,
          butMoveTime_csryw: 0,
          bannerShowTime_csryw: 0,
          bannerHideTime_csryw: 0,
          butDelayShowTime_csryw: 0,
          rollWayLeftUp_csryw: 1,
          rollWaitNum_csryw: 1,
          rollWaitTime_csryw: 1,
          roolSpeed_csryw: 3
        }, this.bigLoopAd = {
          bgColor_csryw: "3485fb",
          maskColor_csryw: "",
          wudian_csryw: 0,
          timeClick_csryw: 0,
          butMoveTime_csryw: 0,
          bannerShowTime_csryw: 0,
          bannerHideTime_csryw: 0,
          butDelayShowTime_csryw: 0,
          rollWayLeftUp_csryw: 1,
          rollWaitNum_csryw: 1,
          rollWaitTime_csryw: 1,
          roolSpeed_csryw: 3
        }, this.settlePage = {
          bgColor_csryw: "3485fb",
          maskColor_csryw: "",
          wudian_csryw: 0,
          timeClick_csryw: 0,
          butMoveTime_csryw: 0,
          bannerShowTime_csryw: 0,
          bannerHideTime_csryw: 0,
          butDelayShowTime_csryw: 0,
          rollWayLeftUp_csryw: 1,
          rollWaitNum_csryw: 1,
          rollWaitTime_csryw: 1,
          roolSpeed_csryw: 3
        }, this.moreGoodGame2 = {
          bgColor_csryw: "3485fb",
          maskColor_csryw: "",
          butDelayShowTime_csryw: 0,
          rollWayLeftUp_csryw: 1,
          rollWaitNum_csryw: 1,
          rollWaitTime_csryw: 1,
          roolSpeed_csryw: 3
        };
      };
    }();
    n.cocosWxcfg = _;
    var f = function () {
      function t() {
        this._data_csryw = new Array();
      }
      return t.getInstance_csryw = function () {
        return t._instance_csryw;
      }, t.prototype.loadUrlConfig_csryw = function (t) {
        var e = this;
        if (console.log("ly +++++++++++++++++++++++++      loadUrlConfig_csryw  "), "" == o.default.ResServer_csryw) return r.LogUtils.warn_csryw("没有找到合适的AppswitchConfig 路径"),
          this._data_csryw.push(new s()), void(t && i.callFM_csryw(t));
        var n = new Date().getTime();
        cc.assetManager.loadRemote(o.default.ResServer_csryw + "/json/appswitch.json?" + n, function (c, a) {
          if (cc.assetManager.cacheManager && cc.assetManager.cacheManager.removeCache(o.default.ResServer_csryw + "/json/appswitch.json?" + n),
            c) return r.LogUtils.error_csryw(c), void e._data_csryw.push(new s());
          e._data_csryw.length = 0;
          var l = a.json;
          if (r.LogUtils.log_csryw("下载 appswitch.json>>>"), r.LogUtils.log_csryw(a), l)
            for (var u = 0; u < l.length; ++u) {
              var d = l[u],
                p = new s();
              p.version_csryw = String(d.version), p.banner_csryw = Number(d.banner), p.wudian_csryw = Number(d.wudian),
                p.debuginfo_csryw = Number(d.debuginfo), p.isNetWorkGame_csryw = Number(d.netWorkgame),
                p.wudianAvailableTime_csryw = Object(d.wudianTime), p.homePageExportTimeControl = Object(d.homePageExportTimeControl),
                p.mailiang_csryw = Number(d.mailiang);
              var y = d.mailianglist;
              if (null != y)
                for (var h = 0; h < y.length; ++h) {
                  var _ = Number(y[h]);
                  p.mailianglist_csryw.push(_);
                }
              var f = d.mailiangScenelist;
              if (null != f)
                for (h = 0; h < f.length; ++h) {
                  var w = Number(f[h]);
                  p.mailiangSceneList_csryw.push(w);
                }
              var g = d.wxwudianbanners;
              if (null != g)
                for (h = 0; h < g.length; ++h) {
                  var m = String(g[h]);
                  p.wxWuDianBanners_csryw.push(m);
                }
              var v = d.recreateBannerIDList;
              if (null != v)
                for (h = 0; h < v.length; ++h) {
                  m = String(v[h]);
                  p.recreateBannerIDList_csryw.push(m);
                }
              p.bannerRecreateTime_csryw = null != d.bannerRecreateTime ? Number(d.bannerRecreateTime) : p.bannerRecreateTime_csryw,
                p.kuangdianjiange_csryw = null != d.kuangdianjiange ? Number(d.kuangdianjiange) : p.kuangdianjiange_csryw,
                p.btnMoveTimer_csryw = Number(d.btnMoveTimer), p.bannerMoveTimer_csryw = Number(d.bannerMoveTimer),
                p.bannerCreateFailNum_csryw = Number(d.createFailNum), p.bannerFreshTimer_csryw = Number(d.bannerFreshTimer),
                p.bannerTodayBannerMax_csryw = Number(d.todayBannerMax), p.adSwitch_csryw = Number(d.adSwitch);
              var A = d.wudianSceneList;
              if (null != A)
                for (h = 0; h < A.length; ++h) {
                  var b = Number(A[h]);
                  p.wudianSceneList_csryw.push(b);
                }
              if (p.continueBtnDelayTime_csryw = Number(d.continueBtnDelayTime), p.bannerShowTime_csryw = Number(d.bannerShowTime),
                p.fakeBtn_csryw = null != d.fakeBtn ? Number(d.fakeBtn) : p.fakeBtn_csryw, p.popAd_csryw = null != d.popAd ? Number(d.popAd) : p.popAd_csryw,
                p.continueBanner_csryw = null != d.continueBanner ? Number(d.continueBanner) : p.continueBanner_csryw,
                p.continueBannerShowTime_csryw = null != d.continueBannerShowTime ? Number(d.continueBannerShowTime) : p.continueBannerShowTime_csryw,
                p.continueBannerHideTime_csryw = null != d.continueBannerHideTime ? Number(d.continueBannerHideTime) : p.continueBannerHideTime_csryw,
                null != d.oppocfg) {
                var S = d.oppocfg;
                p.oppocfg_csryw.yuansheng_csryw = Number(S.yuansheng), p.oppocfg_csryw.yuanshengSwitch_csryw = Number(S.yuanshengSwitch),
                  p.oppocfg_csryw.addToDesktop_csryw = Number(S.addToDesktop), p.oppocfg_csryw.oppoversions_csryw = String(S.oppoversions),
                  p.oppocfg_csryw.btnShowTimer_csryw = Number(S.btnShowTimer), p.oppocfg_csryw.indexAdSwitch_csryw = Number(S.indexAdSwitch),
                  p.oppocfg_csryw.endAdSwitch_csryw = Number(S.endAdSwitch), p.oppocfg_csryw.yuansheng2_csryw = null != S.yuansheng2 ? Number(S.yuansheng2) : p.oppocfg_csryw.yuansheng2_csryw,
                  p.oppocfg_csryw.yuanshengSwitch2_csryw = null != S.yuanshengSwitch2 ? Number(S.yuanshengSwitch2) : p.oppocfg_csryw.yuanshengSwitch2_csryw;
              }
              if (null != d.qqcfg) {
                S = d.qqcfg;
                p.qqcfg_csryw.kuangdianBanner_csryw = Number(S.kuangdianBanner), p.qqcfg_csryw.kuangdianBox_csryw = Number(S.kuangdianBox),
                  p.qqcfg_csryw.box_csryw = Number(S.box), p.qqcfg_csryw.weiyi_csryw = Number(S.weiyi),
                  p.qqcfg_csryw.qqversions_csryw = String(S.qqversions);
              }
              if (null != d.ttcfg) {
                S = d.ttcfg;
                p.ttcfg_csryw.moreGameSwitch_csryw = Number(S.moreGameSwitch), p.ttcfg_csryw.kuangdianBanner_csryw = Number(S.kuangdianBanner),
                  p.ttcfg_csryw.luping_csryw = Number(S.luping), p.ttcfg_csryw.ttversions_csryw = String(S.ttversions);
              }
              if (null != d.tt2cfg) {
                S = d.tt2cfg;
                p.tt2cfg_csryw.startSwitch_csryw = Number(S.startSwitch), p.tt2cfg_csryw.signInSwitch_csryw = Number(S.signInSwitch),
                  p.tt2cfg_csryw.getSwitch_csryw = Number(S.getSwitch), p.tt2cfg_csryw.useSwitch_csryw = Number(S.useSwitch),
                  p.tt2cfg_csryw.reliveSwitch_csryw = Number(S.reliveSwitch), p.tt2cfg_csryw.screenCapSwitch_csryw = Number(S.screenCapSwitch),
                  p.tt2cfg_csryw.boxSwitch_csryw = Number(S.boxSwitch);
              }
              if (null != d.vivocfg) {
                S = d.vivocfg;
                p.vivocfg_csryw.yuanshengSwitch_csryw = Number(S.yuanshengSwitch), p.vivocfg_csryw.yuansheng_csryw = Number(S.yuansheng),
                  p.vivocfg_csryw.yuanshengSwitch2_csryw = Number(S.yuanshengSwitch2), p.vivocfg_csryw.yuansheng2_csryw = Number(S.yuansheng2),
                  p.vivocfg_csryw.chapingSwitch_csryw = Number(S.chapingSwitch), p.vivocfg_csryw.chaping_csryw = Number(S.chaping),
                  p.vivocfg_csryw.addToDesktop_csryw = Number(S.addToDesktop), p.vivocfg_csryw.vivoversions_csryw = String(S.vivoversions),
                  p.vivocfg_csryw.btnShowTimer_csryw = Number(S.btnShowTimer);
              }
              if (null != d.wxcfg) {
                S = d.wxcfg;
                p.wxcfg_csryw.kuangdian_csryw = Number(S.kuangdian), p.wxcfg_csryw.kuangdianBanner_csryw = Number(S.kuangdianBanner),
                  p.wxcfg_csryw.kuangdianLevelSpcacing_csryw = Number(S.kuangdianLevelSpcacing), p.wxcfg_csryw.ForceSkip_csryw = Number(S.ForceSkip),
                  p.wxcfg_csryw.SlideSkip_csryw = Number(S.SlideSkip), p.wxcfg_csryw.tc_ForceSkip_csryw = Number(S.tc_ForceSkip),
                  p.wxcfg_csryw.tc_SlideSkip_csryw = Number(S.tc_SlideSkip), p.wxcfg_csryw.phb_ForceSkip_csryw = Number(S.phb_ForceSkip),
                  p.wxcfg_csryw.phb_SlideSkip_csryw = Number(S.phb_SlideSkip), p.wxcfg_csryw.tc_continueBanner_csryw = Number(S.tc_continueBanner),
                  p.wxcfg_csryw.MainPop_csryw = Number(S.MainPop), p.wxcfg_csryw.hyrw_ForceSkip_csryw = Number(S.hyrw_ForceSkip),
                  p.wxcfg_csryw.hyrw_SlideSkip_csryw = Number(S.hyrw_SlideSkip), p.wxcfg_csryw.hyrw_continueBanner_csryw = Number(S.hyrw_continueBanner),
                  p.wxcfg_csryw.handShow_csryw = Number(S.handShow), p.wxcfg_csryw.firstOpen_csryw = Number(S.firstOpen),
                  p.wxcfg_csryw.startVideo_csryw = Number(S.startVideo), p.wxcfg_csryw.mainBackBtn_csryw = Number(S.mainBackBtn),
                  p.wxcfg_csryw.mainMoreBtn_csryw = Number(S.mainMoreBtn), p.wxcfg_csryw.mainItemBtn_csryw = Number(S.mainItemBtn),
                  p.wxcfg_csryw.mainExportShow_csryw = Number(S.mainExportShow), p.wxcfg_csryw.isJumpHotPlay_csryw = Number(S.isJumpHotPlay),
                  p.wxcfg_csryw.moreGameShowLevel_csryw = Number(S.moreGameShowLevel), p.wxcfg_csryw.PinzhuangChapingKaiguan_csryw = Number(S.PinzhuangChapingKaiguan),
                  p.wxcfg_csryw.PinzhuangDaochuKaiguan_csryw = Number(S.PinzhuangDaochuKaiguan), p.wxcfg_csryw.setUserScan_csryw = Number(S.setUserScan),
                  p.wxcfg_csryw.HPdisability = Number(S.HPdisability), p.wxcfg_csryw.HPdisabilitytime = Number(S.HPdisabilitytime),
                  p.wxcfg_csryw.firstHotPlayPop = Number(S.firstHotPlayPop), p.wxcfg_csryw.firstHotPlayBannerShow = Number(S.firstHotPlayBannerShow),
                  p.wxcfg_csryw.isJumpVideo_csryw = Number(S.isJumpVideo), p.wxcfg_csryw.JumpVideoProb_csryw = Number(S.JumpVideoProb),
                  p.wxcfg_csryw.isResultJumpVideo_csryw = Number(S.isResultJumpVideo), p.wxcfg_csryw.isRankJumpVideo_csryw = Number(S.isRankJumpVideo),
                  p.wxcfg_csryw.isMoreJumpVideo_csryw = Number(S.isMoreJumpVideo), p.wxcfg_csryw.isHotPlayJumpVideo_csryw = Number(S.isHotPlayJumpVideo),
                  p.wxcfg_csryw.isPinZhuangJumpVideo_csryw = Number(S.isPinZhuangJumpVideo), p.wxcfg_csryw.isCrazyJumpVideo_csryw = Number(S.isCrazyJumpVideo),
                  p.wxcfg_csryw.isExportJumpVideo_csryw = Number(S.isExportJumpVideo), p.wxcfg_csryw.kuangdianvideo_csryw = Number(S.kuangdianvideo),
                  p.wxcfg_csryw.kuangdianovercount = Number(S.kuangdianovercount), p.wxcfg_csryw.resulekuangdian = Number(S.resulekuangdian),
                  p.wxcfg_csryw.resulekuangdiantype = Number(S.resulekuangdiantype), p.wxcfg_csryw.before_main_native_csryw = Number(S.before_main_native),
                  p.wxcfg_csryw.native_continueBanner_csryw = Number(S.native_continueBanner), p.wxcfg_csryw.isShowMainNative_csryw = Number(S.isShowMainNative),
                  p.wxcfg_csryw.isShowResultAndNoGameResult_csryw = Number(S.isShowResultAndNoGameResult),
                  p.wxcfg_csryw.isShowGameResultAD_csryw = Number(S.isShowGameResultAD), p.wxcfg_csryw.ShowResult = Number(S.ShowResult),
                  p.wxcfg_csryw.ShowMoneyView = Number(S.ShowMoneyView), p.wxcfg_csryw.ShowVideoView = Number(S.ShowVideoView);
              }
              if (null != d.bdcfg) {
                S = d.bdcfg;
                p.bdcfg_csryw.btnDelayTime_csryw = Number(S.btnDelayTime), p.bdcfg_csryw.signInSwitch_csryw = Number(S.signInSwitch),
                  p.bdcfg_csryw.taskVideo_csryw = Number(S.taskVideo), p.bdcfg_csryw.version_csryw = String(S.version);
              }
              if (null != d.cocosWxConfig) {
                var C = (S = d.cocosWxConfig).loopAd,
                  I = S.skinTrial,
                  E = S.revival,
                  k = S.moreGoodGame,
                  T = S.bigLoopAd,
                  M = S.settlePage,
                  P = S.moreGoodGame2;
                for (var D in p.cocosWxcfg_csryw.loopAd) Object.prototype.hasOwnProperty.call(p.cocosWxcfg_csryw.loopAd, D) && (p.cocosWxcfg_csryw.loopAd[D] = "bgColor" == D ? null != C[D] ? String(C[D]) : p.cocosWxcfg_csryw.loopAd[D] : null != C[D] ? Number(C[D]) : p.cocosWxcfg_csryw.loopAd[D]);
                for (var D in p.cocosWxcfg_csryw.skinTrial) Object.prototype.hasOwnProperty.call(p.cocosWxcfg_csryw.skinTrial, D) && (p.cocosWxcfg_csryw.skinTrial[D] = null != I[D] ? Number(I[D]) : p.cocosWxcfg_csryw.skinTrial[D]);
                for (var D in p.cocosWxcfg_csryw.revival) Object.prototype.hasOwnProperty.call(p.cocosWxcfg_csryw.revival, D) && (p.cocosWxcfg_csryw.revival[D] = null != E[D] ? Number(E[D]) : p.cocosWxcfg_csryw.revival[D]);
                for (var D in p.cocosWxcfg_csryw.moreGoodGame) Object.prototype.hasOwnProperty.call(p.cocosWxcfg_csryw.moreGoodGame, D) && (p.cocosWxcfg_csryw.moreGoodGame[D] = "bgColor" == D || "maskColor" == D ? null != k[D] ? String(k[D]) : p.cocosWxcfg_csryw.moreGoodGame[D] : null != k[D] ? Number(k[D]) : p.cocosWxcfg_csryw.moreGoodGame[D]);
                for (var D in p.cocosWxcfg_csryw.bigLoopAd) Object.prototype.hasOwnProperty.call(p.cocosWxcfg_csryw.bigLoopAd, D) && (p.cocosWxcfg_csryw.bigLoopAd[D] = "bgColor" == D || "maskColor" == D ? null != T[D] ? String(T[D]) : p.cocosWxcfg_csryw.bigLoopAd[D] : null != T[D] ? Number(T[D]) : p.cocosWxcfg_csryw.bigLoopAd[D]);
                for (var D in p.cocosWxcfg_csryw.settlePage) Object.prototype.hasOwnProperty.call(p.cocosWxcfg_csryw.settlePage, D) && (p.cocosWxcfg_csryw.settlePage[D] = "bgColor" == D || "maskColor" == D ? null != M[D] ? String(M[D]) : p.cocosWxcfg_csryw.settlePage[D] : null != M[D] ? Number(M[D]) : p.cocosWxcfg_csryw.settlePage[D]);
                for (var D in p.cocosWxcfg_csryw.moreGoodGame2) Object.prototype.hasOwnProperty.call(p.cocosWxcfg_csryw.moreGoodGame2, D) && (p.cocosWxcfg_csryw.moreGoodGame2[D] = "bgColor" == D || "maskColor" == D ? null != P[D] ? String(P[D]) : p.cocosWxcfg_csryw.moreGoodGame2[D] : null != P[D] ? Number(P[D]) : p.cocosWxcfg_csryw.moreGoodGame2[D]);
              }
              if (null != d.quickgamecfg) {
                S = d.quickgamecfg;
                p.quickgamecfg_csryw.autoExport = Number(S.autoExport), p.quickgamecfg_csryw.bigExportColor = S.bigExportColor,
                  p.quickgamecfg_csryw.bigExportColor_g = S.bigExportColor_g, p.quickgamecfg_csryw.bigExportBannerType = Number(S.bigExportBannerType),
                  p.quickgamecfg_csryw.bigExportShowBannerTime = Number(S.bigExportShowBannerTime),
                  p.quickgamecfg_csryw.bigExportHideBannerTime = Number(S.bigExportHideBannerTime),
                  p.quickgamecfg_csryw.hotplayBannerType = Number(S.hotplayBannerType), p.quickgamecfg_csryw.hotplayShowBannerTime = Number(S.hotplayShowBannerTime),
                  p.quickgamecfg_csryw.hotplayHideBannerTime = Number(S.hotplayHideBannerTime), p.quickgamecfg_csryw.recommendBannerType = Number(S.recommendBannerType),
                  p.quickgamecfg_csryw.recommendShowBannerTime = Number(S.recommendShowBannerTime),
                  p.quickgamecfg_csryw.recommendButMoveTime = Number(S.recommendButMoveTime), p.quickgamecfg_csryw.endBannerType = Number(S.endBannerType),
                  p.quickgamecfg_csryw.endShowBannerTime = Number(S.endShowBannerTime), p.quickgamecfg_csryw.endButMoveTime = Number(S.endButMoveTime),
                  p.quickgamecfg_csryw.playButVideo = null == S.playButVideo ? 0 : Number(S.playButVideo),
                  p.quickgamecfg_csryw.crazyBannerHideTime = null == S.crazyBannerHideTime ? 0 : Number(S.crazyBannerHideTime);
                var O = S.crazyShowBanner;
                if (O) {
                  var L = O.split(",");
                  p.quickgamecfg_csryw.crazyShowBanner[0] = Number(L[0]), p.quickgamecfg_csryw.crazyShowBanner[1] = Number(L[1]);
                }
              }
              e._data_csryw.push(p);
            } else e._data_csryw.push(new s());
          t && i.callFM_csryw(t);
        });
      }, t.prototype.getAppSwitchData_csryw = function () {
        return this._data_csryw[0];
      }, t._instance_csryw = new t(), t;
    }();
    n.default = f, cc._RF.pop();
  }, {
    "../Interface/FMInterface": "FMInterface",
    "../Util/LogUtils": "LogUtils",
    "./AppConfig": "AppConfig"
  }],
  AutoRotation: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "7541fTXo45KdZnmls5lgkCk", "AutoRotation");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = i.property,
      a = i.disallowMultiple,
      l = i.menu,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.rotate = 1, e;
        }
        return o(e, t), e.prototype.update = function (t) {
          this.node.angle -= this.rotate;
        }, r([c({
          type: cc.Integer,
          tooltip: "旋转度数"
        })], e.prototype, "rotate", void 0), e = r([s, a(), l("框架组件/自动旋转")], e);
      }(cc.Component);
    n.default = u, cc._RF.pop();
  }, {}],
  BannerMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d403dZi0VFBhYuI4dkpVlzV", "BannerMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("./BannerPos"),
      r = t("./Banner"),
      i = t("../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../FrameWork/Util/AppPlatform"),
      c = function () {
        function t() {}
        return t.init_csryw = function () {
            var e = this;
            if (s.default.is_WECHAT_GAME_csryw()) {
              for (var n = i.default.getInstance_csryw().getAppSwitchData_csryw().wxWuDianBanners_csryw, o = 0; o < n.length; ++o) this._bannerIds_csryw.push(n[o]);
              this.bannerMax = this._bannerIds_csryw.length;
              var r = 1e3 * i.default.getInstance_csryw().getAppSwitchData_csryw().bannerRecreateTime_csryw;
              setInterval(function () {
                if (e.bannerCnt < e.bannerMax) {
                  var n = t._createBannerAd_csryw();
                  e._banners_csryw.push(n);
                }
              }, r);
              var c = t._createBannerAd_csryw();
              this._banners_csryw.push(c);
            }
          }, t._createBannerAd_csryw = function () {
            console.log("banner 创建");
            var t = this.getRandomBannerID,
              e = this.createBanner_csryw(t),
              n = new r.Banner(e);
            return this.bannerCnt++, n;
          }, t.createBanner_csryw = function (t) {
            if (s.default.is_WECHAT_GAME_csryw()) {
              var e = cc.view.getFrameSize(),
                n = (e.width - 288) / 2,
                o = e.height - 88;
              console.log("Banner 开始加载", t);
              var r = window.wx.createBannerAd({
                adUnitId: "adunit-cfdfd82466dbaabe",
                adIntervals: 30,
                style: {
                  left: n,
                  top: o,
                  width: 288
                }
              });
              return r.onLoad(function () {
                console.log("Banner 加载完成", t);
              }), r.onError(function (e) {
                console.log("Banner 加载失败", t, JSON.stringify(e));
              }), r;
            }
          }, Object.defineProperty(t, "getRandomBannerID", {
            get: function () {
              return this._bannerIds_csryw[Math.floor(Math.random() * this._bannerIds_csryw.length)];
            },
            enumerable: !1,
            configurable: !0
          }), t.getBanner_csryw = function () {
            var t, e = this._banners_csryw.shift();
            if (e) t = e.banner_csryw, this.bannerCnt--;
            else {
              var n = this.getRandomBannerID;
              t = this.createBanner_csryw(n);
            }
            return console.log("获得banner..."), t;
          }, t.showBanner_csryw = function (t, e, n) {
            void 0 === t && (t = o.BannerPos.Center_Bottom), void 0 === e && (e = 0), void 0 === n && (n = 0),
              console.log("显示banner"), s.default.is_WECHAT_GAME_csryw() && (this.currBanner && this.hideBanner_csryw(),
                this.currBanner = this._banners_csryw.shift(), this.bannerCnt--, console.log("showBanner_csryw" + this.currBanner),
                this.currBanner && this.currBanner.show_csryw(t, e, n));
          }, t.hideBanner_csryw = function () {
            console.log("隐藏banner"), s.default.is_WECHAT_GAME_csryw() && this.currBanner && (this.currBanner.auto = !1,
              this.currBanner.hide_csryw(), this.currBanner.destory_csryw(), this.currBanner = null);
          }, t._bannerIds_csryw = new Array(), t._banners_csryw = new Array(), t.currBanner = null,
          t.bannerMax = 0, t.bannerCnt = 0, t;
      }();
    n.default = c, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Util/AppPlatform": "AppPlatform",
    "./Banner": "Banner",
    "./BannerPos": "BannerPos"
  }],
  BannerPos: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "615222iAQVF6owcdiXiijCQ", "BannerPos"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.BannerPos = void 0,
      function (t) {
        t[t.Left_Top = 0] = "Left_Top", t[t.Left_Center = 1] = "Left_Center", t[t.Left_Bottom = 2] = "Left_Bottom",
          t[t.Center_Top = 3] = "Center_Top", t[t.Center_Center = 4] = "Center_Center", t[t.Center_Bottom = 5] = "Center_Bottom",
          t[t.Right_Top = 6] = "Right_Top", t[t.Right_Center = 7] = "Right_Center", t[t.Right_Bottom = 8] = "Right_Bottom";
      }(n.BannerPos || (n.BannerPos = {})), cc._RF.pop();
  }, {}],
  Banner: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "e0c5cL++GxAvY/IPITWG9ab", "Banner"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.Banner = void 0;
    var o = t("./BannerPos"),
      r = t("./BannerMgr"),
      i = t("../../FrameWork/Config/AppSwitchConfig"),
      s = function () {
        function t(t) {
          this._banner_csryw = null, this._showTime_csryw = 0, this._resetMax = 3, this._resetNumber = 0,
            this._auto = !0, this._offsetX = 0, this._offsetY = 0, this._showTime_csryw = i.default.getInstance_csryw().getAppSwitchData_csryw().bannerFreshTimer_csryw,
            this._banner_csryw = t;
        }
        return Object.defineProperty(t.prototype, "banner_csryw", {
          get: function () {
            return this._banner_csryw;
          },
          set: function (t) {
            this._banner_csryw = t;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "auto", {
          get: function () {
            return this._auto;
          },
          set: function (t) {
            this._auto = t;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.startTime_csryw = function () {
          var t = this;
          setTimeout(function () {
            t.refresh_csryw();
          }, 1e3 * this._showTime_csryw);
        }, t.prototype.getPos = function () {
          var t = cc.view.getFrameSize(),
            e = this._banner_csryw.style,
            n = e.realHeight,
            r = e.realWidth;
          isNaN(n) && (n = 100);
          var i, s = 0;
          switch (this._pos) {
            case o.BannerPos.Center_Top:
              i = (t.width - r) / 2, s = 0;
              break;

            case o.BannerPos.Center_Center:
              i = (t.width - r) / 2, s = (t.height - n) / 2;
              break;

            case o.BannerPos.Center_Bottom:
              i = (t.width - r) / 2, s = t.height - n;
              break;

            case o.BannerPos.Left_Top:
              i = 0, s = 0;
              break;

            case o.BannerPos.Left_Center:
              i = 0, s = (t.height - n) / 2;
              break;

            case o.BannerPos.Left_Bottom:
              i = 0, s = t.height - n;
              break;

            case o.BannerPos.Right_Top:
              i = t.width - r, s = 0;
              break;

            case o.BannerPos.Right_Center:
              i = t.width - r, s = (t.height - n) / 2;
              break;

            case o.BannerPos.Right_Bottom:
              i = t.width - r, s = t.height - n;
          }
          return console.log(i, s), {
            left: i,
            top: s
          };
        }, t.prototype.show_csryw = function (t, e, n) {
          void 0 === t && (t = o.BannerPos.Center_Bottom), void 0 === e && (e = 0), void 0 === n && (n = 0),
            this._pos = t, this._offsetX = e, this._offsetY = n;
          var r = this.getPos();
          this._banner_csryw.style.left = r.left + e, this._banner_csryw.style.top = r.top + n,
            this._banner_csryw.show(), this.startTime_csryw();
        }, t.prototype.hide_csryw = function () {
          this._banner_csryw.hide(), console.log("Banner 隐藏");
        }, t.prototype.destory_csryw = function () {
          this._banner_csryw.destroy(), this._banner_csryw = null, console.log("Banner 销毁");
        }, t.prototype.refresh_csryw = function () {
          null != this._banner_csryw && (this.hide_csryw(), this.destory_csryw()), this.auto && (this._banner_csryw = r.default.getBanner_csryw(),
            console.log("Banner 更新", this._banner_csryw), this.show_csryw(this._pos, this._offsetX, this._offsetY));
        }, t;
      }();
    n.Banner = s, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "./BannerMgr": "BannerMgr",
    "./BannerPos": "BannerPos"
  }],
  BeforeMainNativeUI: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "a47be6dDhpDka16X85FL/G9", "BeforeMainNativeUI");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../FrameWork/Mgr/WudianMgr"),
      c = t("../../FrameWork/Util/Utilit"),
      a = t("../CustimWxApi"),
      l = t("./newFrame/src/event/ADPageEventEnum"),
      u = t("./newFrame/src/event/ADPageEventMgr"),
      d = t("./newFrame/src/wxViewBase"),
      p = cc._decorator,
      y = p.ccclass,
      h = p.property,
      _ = p.disallowMultiple,
      f = p.menu,
      w = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.closeBtn = null, e._isCanClose_csryw = !1, e._isCloseClicked_csryw = !1,
            e;
        }
        return o(e, t), e.prototype.addEvent_csryw = function () {
          this.closeBtn.on("click", this.onClose, this);
        }, e.prototype.removeEvent_csryw = function () {
          this.closeBtn.off("click", this.onClose, this);
        }, e.prototype.onEnable = function () {
          setTimeout(function () {
            u.default.emitEvent_csryw(l.PageEvent.SHOW_MOREBTN, !1);
          }, 500), a.default.showCustimAd(a.CustimWxTag.EnumCustimMainBefore1), a.default.showCustimAd(a.CustimWxTag.EnumCustimMainBefore2);
        }, e.prototype.onDisable = function () {
          a.default.hideCustimAd(a.CustimWxTag.EnumCustimMainBefore1), a.default.hideCustimAd(a.CustimWxTag.EnumCustimMainBefore2),
            this._isCloseClicked_csryw = !1, this._isCanClose_csryw = !1;
        }, e.prototype.onClose = function () {
          var t = this,
            e = this,
            n = i.default.getInstance_csryw().getAppSwitchData_csryw();
          s.default.wudianFlag_csryw && c.default.checkVersions_csryw() && 1 == n.continueBanner_csryw && 1 == n.wxcfg_csryw.native_continueBanner_csryw ? this._isCloseClicked_csryw || (this._isCloseClicked_csryw = !0,
            this.scheduleOnce(function () {
              console.log("ly+++++++++++++++++  onClose scheduleOnce"), e.showBanner_csryw(),
                t.scheduleOnce(function () {
                  e._isCanClose_csryw = !0, e.hideBanner_csryw();
                }, n.continueBannerHideTime_csryw);
            }, n.continueBannerShowTime_csryw)) : e._isCanClose_csryw = !0, this._isCanClose_csryw && (a.default.hideCustimAd(a.CustimWxTag.EnumCustimMainBefore1),
            a.default.hideCustimAd(a.CustimWxTag.EnumCustimMainBefore2), u.default.emitEvent_csryw(l.PageEvent.SHOW_MOREBTN, !0),
            this.hideView_csryw(), s.default.wudianFlag_csryw && c.default.checkVersions_csryw() && 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isShowMainNative_csryw && a.default.showCustimAd(a.CustimWxTag.EnumCustimResultPop));
        }, r([h({
          tooltip: "关闭按钮",
          type: cc.Node
        })], e.prototype, "closeBtn", void 0), e = r([y, _(), f("新框架组件/原生广告页")], e);
      }(d.default);
    n.default = w, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../FrameWork/Util/Utilit": "Utilit",
    "../CustimWxApi": "CustimWxApi",
    "./newFrame/src/event/ADPageEventEnum": "ADPageEventEnum",
    "./newFrame/src/event/ADPageEventMgr": "ADPageEventMgr",
    "./newFrame/src/wxViewBase": "wxViewBase"
  }],
  BundleMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "877a3UASUlFu5nMq3NX2h6R", "BundleMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.loadBundleByName_csryw = function (t, e) {
        LogUtils.info_csryw("加载资源包 " + t), cc.assetManager.loadBundle(t, function (t, n) {
          console.log(n), callFM_csryw(e, t, n);
        });
      }, t.getBundle_csryw = function (t) {
        return cc.assetManager.getBundle(t);
      }, t.removeBundle_csryw = function (t, e) {
        void 0 === e && (e = !0);
        var n = this.getBundle_csryw(t);
        n && e && n.releaseAll(), cc.assetManager.removeBundle(n);
      }, t.runScene_csryw = function (t, e, n) {
        void 0 === n && (n = null);
        var o = this.getBundle_csryw(t);
        o ? o.loadScene(e, function (t, e) {
          n && callFM_csryw(n), cc.director.runScene(e);
        }) : this.loadBundleByName_csryw(t, handleFM_csryw(function (t, o) {
          o.loadScene(e, function (t, e) {
            n && callFM_csryw(n), cc.director.runScene(e);
          });
        }, this));
      }, t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  CachedQQBannerAd: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "016d2nJK9VIaoKr10XVy4OV", "CachedQQBannerAd"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../FrameWork/Config/AppSwitchConfig"),
      r = t("../../FrameWork/Util/AppPlatform"),
      i = function () {
        function t() {}
        return t.preloadBanner_csryw = function () {}, t.show_csryw = function (e) {
            var n = o.default.getInstance_csryw().getAppSwitchData_csryw().wxWuDianBanners_csryw;
            o.default.getInstance_csryw().getAppSwitchData_csryw().bannerTodayBannerMax_csryw;
            if (e = n[Math.floor(Math.random() * n.length)], r.default.is_QQ_PLAY_csryw() && null != e) {
              var i = window.qq.getSystemInfoSync(),
                s = i.screenWidth,
                c = i.screenHeight,
                a = window.qq.createBannerAd({
                  adUnitId: e,
                  adIntervals: 30,
                  style: {
                    left: 0,
                    top: (cc.visibleRect.height - 240) / cc.visibleRect.height * c,
                    width: s
                  }
                });
              if (a) {
                var l = this;
                t._onLoad = function (n) {
                  console.log("CachedQQBanner 广告 加载完成", e), console.log(n), l._isHide_csryw ? (a.offLoad(t._onLoad),
                    a.offError(t._onError), a.destroy()) : a.show();
                }, a.onLoad(t._onLoad), t._onError = function (n) {
                  console.log("CachedQQBanner 广告 加载失败", e), console.log(n), a.offLoad(t._onLoad),
                    a.offError(t._onError), a.destroy();
                }, a.onError(t._onError), t._curBanner_csryw = a;
              }
            }
            t._isHide_csryw = !1;
          }, t.hide_csryw = function () {
            t._isHide_csryw = !0, null != t._curBanner_csryw && (t._curBanner_csryw.hide(),
              t._curBanner_csryw.offLoad(t._onLoad), t._curBanner_csryw.offError(t._onError),
              t._curBanner_csryw.destroy(), t._curBanner_csryw = null, console.log("CachedQQBanner 广告隐藏"));
          }, t.changeShow_csryw = function () {
            null != t._curBanner_csryw && (t._curBanner_csryw.hide(), t._curBanner_csryw = null),
              t.show_csryw();
          }, t.clear_csryw = function () {}, t._curBanner_csryw = null, t._onLoad = null, t._onError = null,
          t._isHide_csryw = !0, t;
      }();
    n.default = i, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Util/AppPlatform": "AppPlatform"
  }],
  CameraGhost: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "a0655pUhY9M84P5jcXFKfQ8", "CameraGhost");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = i.property,
      a = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.roleNode = null, e.renderNode = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          this.camera = this.node.getComponent(cc.Camera);
        }, e.prototype.start = function () {}, e.prototype.update = function (t) {}, e.prototype.createGhost = function (t) {
          var e = this,
            n = new cc.RenderTexture();
          this.renderNode.children.forEach(function (o, r) {
            if (o.active) {
              var i = o.getComponent(cc.Sprite),
                s = new cc.SpriteFrame();
              n.initWithSize(o.width, o.height), i.spriteFrame = s, s.setTexture(n), e.camera.cullingMask = 1 << t,
                e.camera.targetTexture = n;
            }
          }, this);
        }, e.prototype.setRenderNode = function (t) {
          this.renderNode = t;
        }, r([c(cc.Node)], e.prototype, "roleNode", void 0), e = r([s], e);
      }(cc.Component);
    n.default = a, cc._RF.pop();
  }, {}],
  Camera: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "1ca7cFQ7s9CJ6OFvHxJhFb9", "Camera");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./utils/Utils"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.posLerpFactor = 1, e.zoomLerpFactor = .02, e.borders = [], e.bgCamera = null,
            e.maxZoom = 1, e.minZoom = .5, e.cameraOffsetY = 180, e.baseDis = 0, e.srcY = 0,
            e.target = null, e.borderLeftX = 0, e.borderRightX = 0, e.screenXScale = 0, e.charY = 0,
            e.showwidth = 1334, e.minDis = e.showwidth, e.maxDis = 2 * e.showwidth - 300, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            this.camera = this.node.getComponent(cc.Camera), this.srcY = this.node.y, this.borderLeftX = this.borders[0].x + .5 * this.borders[0].width,
              this.borderRightX = this.borders[1].x - .5 * this.borders[1].width, this.screenXScale = cc.visibleRect.width / 1334;
          }, e.prototype.start = function () {}, e.prototype.update = function (t) {
            this.character1 && this.character2 && (this.target ? this.followTarget() : this.followCenter());
          }, e.prototype.setCharacters = function (t) {
            this.character1 = t[0], this.character2 = t[1], this.baseDis = this.minDis, this.camera.zoomRatio = this.getZoomSize(),
              this.bgCamera && (this.bgCamera.zoomRatio = this.camera.zoomRatio), this.charY = this.character1.node.y;
          }, e.prototype.getZoomSize = function () {
            var t = cc.Vec2.distance(this.character1.node.getPosition(), this.character2.node.getPosition());
            this.maxZoom;
            return t <= this.minDis ? this.maxZoom : t >= this.maxDis ? this.minZoom : cc.misc.lerp(this.maxZoom, this.minZoom, (t - this.minDis) / (this.maxDis - this.minDis));
          }, e.prototype.followCenter = function () {
            var t = this.getZoomSize();
            t = cc.misc.lerp(this.camera.zoomRatio, t, this.zoomLerpFactor), this.camera.zoomRatio = t,
              this.bgCamera && (this.bgCamera.zoomRatio = t);
            var e = i.default.getCenterVec2(this.character1.node.getPosition(), this.character2.node.getPosition()),
              n = .5 * (6144 - this.showwidth * this.screenXScale / t);
            e.x < -n && (e.x = -n), e.x > n && (e.x = n);
            var o = cc.misc.lerp(this.node.x, e.x, this.posLerpFactor);
            this.node.x = o;
            var r = (e.y - this.srcY) * this.posLerpFactor + this.srcY;
            this.node.y = r;
          }, e.prototype.followTarget = function () {
            var t = cc.misc.lerp(this.camera.zoomRatio, 1.2, this.zoomLerpFactor);
            this.camera.zoomRatio = t, this.bgCamera && (this.bgCamera.zoomRatio = t);
            var e = this.target.position.clone();
            e.y += 200, this.node.position = this.node.position.lerp(e, this.posLerpFactor);
          }, e.prototype.setTarget = function (t) {
            this.target = t;
          }, e.prototype.getBorderLeftX = function () {
            return this.borderLeftX;
          }, e.prototype.getBorderRightX = function () {
            return this.borderRightX;
          }, e.prototype.charAllInSky = function () {
            return !this.character1.isOnGround && !this.character2.isOnGround;
          }, r([a(cc.Float)], e.prototype, "posLerpFactor", void 0), r([a(cc.Float)], e.prototype, "zoomLerpFactor", void 0),
          r([a([cc.Node])], e.prototype, "borders", void 0), r([a(cc.Camera)], e.prototype, "bgCamera", void 0),
          e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "./utils/Utils": "Utils"
  }],
  CharEffect: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "0d917uj46VAIYu0x0t9x96I", "CharEffect");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../utils/Utils"),
      s = t("./DamageInfo"),
      c = t("./weapon/UnlimitedRangeThrowing"),
      a = cc._decorator,
      l = a.ccclass,
      u = a.property,
      d = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.bodyAttach = null, e.headAttach = null, e.superEff = null, e.beatenEff = null,
            e.rangedWeapon = null, e.smoke = null, e.specifyEff = [], e.specifyDamageEff = [],
            e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            this.superEff && (this.superEff.active = !1), this.beatenEff.active = !1, this.rangedWeapon && (this.rangedWeapon.active = !1),
              this.specifyEff.forEach(function (t, e) {
                t.active = !1;
              }), this.smoke.node.active = !1;
          }, e.prototype.playSuperEff = function () {
            if (null != this.superEff) {
              var t = cc.instantiate(this.superEff);
              t.active = !0, t.scaleX = Math.abs(this.node.scaleX) / this.node.scaleX, t.setPosition(this.getWorldPos(this.superEff)),
                this.node.parent.addChild(t, 2);
              var e = t.getComponent(sp.Skeleton);
              e.setAnimation(0, "play", !1), e.setCompleteListener(function (e) {
                t.removeFromParent(), t.destroy();
              });
            }
          }, e.prototype.playBeatenEff = function (t, e) {
            void 0 === t && (t = 0);
            var n = ["pugong1", "pugong2", "zhongji"];
            switch (t) {
              case s.DamageType.Normal:
                this.loadBeatenEff(n[i.default.randomRange(0, 1)]);
                break;

              case s.DamageType.FloatBack:
              case s.DamageType.Hard:
              case s.DamageType.Float:
                this.loadBeatenEff(n[2]);
                break;

              default:
                this.loadBeatenEff(n[i.default.randomRange(0, 1)]);
            }
          }, e.prototype.loadBeatenEff = function (t, e) {
            var n = cc.instantiate(this.beatenEff);
            n.active = !0, n.scaleX = -Math.abs(this.node.scaleX) / this.node.scaleX * n.scaleX;
            var o = this.getWorldPos(e || this.bodyAttach);
            o.x += i.default.randomRange(-30, 30), o.y += i.default.randomRange(-30, 30), n.angle = i.default.randomRange(-40, 40),
              n.setPosition(o), this.node.parent.addChild(n, 2);
            var r = n.getComponent(sp.Skeleton);
            r.setAnimation(0, t, !1), r.setCompleteListener(function (t) {
              n.removeFromParent(), n.destroy();
            });
          }, e.prototype.createRangedWeapon = function (t) {
            if (this.rangedWeapon) {
              var e = cc.instantiate(this.rangedWeapon);
              t.effScale && (e.scale = t.effScale), e.active = !0, e.scaleX = Math.abs(this.node.scaleX) / this.node.scaleX * e.scaleX;
              var n = this.getWorldPos(this.rangedWeapon);
              e.setPosition(n), e.getComponent(c.default).init(t), this.node.parent.addChild(e, 2, "Throwing");
            }
          }, e.prototype.createSpecifyDamageEff = function (t, e) {
            if (this.specifyDamageEff[e]) {
              var n = cc.instantiate(this.specifyDamageEff[e]);
              n.active = !0, n.scaleX = Math.abs(this.node.scaleX) / this.node.scaleX * n.scaleX;
              var o = this.getWorldPos(t);
              n.setPosition(o), this.node.parent.addChild(n, 2);
              var r = n.getComponent(sp.Skeleton);
              r || (r = n.children[0].getComponent(sp.Skeleton)), r.setCompleteListener(function (t) {
                n.removeFromParent(), n.destroy();
              });
            }
          }, e.prototype.getWorldPos = function (t) {
            var e = new cc.Vec2();
            return t.parent.convertToWorldSpaceAR(t.getPosition(), e), e.x -= .5 * cc.visibleRect.width,
              e.y -= .5 * cc.visibleRect.height, e;
          }, e.prototype.playSpecifyEff = function (t, e) {
            if (this.specifyEff[t]) {
              var n = cc.instantiate(this.specifyEff[t]);
              n.active = !0, n.scaleX = Math.abs(this.node.scaleX) / this.node.scaleX * n.scaleX;
              var o = this.getWorldPos(this.specifyEff[t]);
              n.setPosition(o), this.node.parent.addChild(n, 2);
              var r = n.getComponent(sp.Skeleton);
              r || (r = n.children[0].getComponent(sp.Skeleton)), r.setCompleteListener(function (t) {
                n.removeFromParent(), n.destroy();
              });
            }
          }, e.prototype.showSmoke = function () {
            this.smoke.node.active = !0, this.smoke.setAnimation(0, "play", !1);
          }, r([u(cc.Node)], e.prototype, "bodyAttach", void 0), r([u(cc.Node)], e.prototype, "headAttach", void 0),
          r([u(cc.Node)], e.prototype, "superEff", void 0), r([u(cc.Node)], e.prototype, "beatenEff", void 0),
          r([u(cc.Node)], e.prototype, "rangedWeapon", void 0), r([u(sp.Skeleton)], e.prototype, "smoke", void 0),
          r([u({
            type: [cc.Node],
            tooltip: "角色特有技能特效，根据动作事件帧触发"
          })], e.prototype, "specifyEff", void 0), r([u({
            type: [cc.Prefab],
            tooltip: "对敌方造成的特殊受击特效"
          })], e.prototype, "specifyDamageEff", void 0), e = r([l], e);
      }(cc.Component);
    n.default = d, cc._RF.pop();
  }, {
    "../utils/Utils": "Utils",
    "./DamageInfo": "DamageInfo",
    "./weapon/UnlimitedRangeThrowing": "UnlimitedRangeThrowing"
  }],
  CharacterActCollider: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "4c783+INwNDGpqtWnsQU8ow", "CharacterActCollider");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./Character"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.parentNode = null, e;
        }
        var n;
        return o(e, t), n = e, e.prototype.onLoad = function () {
          this.character = this.parentNode.getComponent(i.default), this.node.name.indexOf("beat") >= 0 ? (this.character.addBeatCollider(this.node),
            this.node.group = this.character.beatenGroup) : this.node.name.indexOf("attack") >= 0 && (this.character.addAtkCollider(this.node),
            this.node.group = this.character.atkGroup, this.node.active = !1);
        }, e.prototype.start = function () {}, e.prototype.onCollisionEnter = function (t, e) {
          if (e.node.name.indexOf("attack") >= 0) {
            var o = e.node.getComponent(n),
              r = t.node.getComponent(n);
            if (r) {
              var i = r.character;
              if (i.isInvincible) return;
              for (var s = 0, c = o.damageInfo.targets; s < c.length; s++) {
                if (c[s].pid == i.pid) return;
              }
              o.damageInfo.targets.push(i), i.fsmAct.isDefence() ? i.fsmAct.currentState.repeatStateCall(o.damageInfo) : i.fsmAct.forceBeaten(o.damageInfo);
            }
          }
        }, e.prototype.setDamageInfo = function (t) {
          this.damageInfo = t;
        }, r([a(cc.Node)], e.prototype, "parentNode", void 0), e = n = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "./Character": "Character"
  }],
  CharacterActionState: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "06dd18UAAlL/b3p79xqIoc2", "CharacterActionState");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = t("../Constants"),
      i = t("../utils/StateMachine/StateMachine"),
      s = t("../utils/StateMachine/State"),
      c = t("../utils/EventCenter"),
      a = t("./CharacterAnimtor"),
      l = t("../utils/SoundsManager"),
      u = t("./DamageInfo"),
      d = t("../utils/Utils"),
      p = t("./DinosaurProperty"),
      y = t("../UI/GuidingLayer"),
      h = t("../../../FrameWork/Mgr/VibrateMgr"),
      _ = t("../../../FrameWork/Mgr/SoundMgr"),
      f = function (t) {
        function e(e) {
          var n = t.call(this) || this;
          n.events = [r.UIEvent.TOUCHDOWN, r.UIEvent.TOUCHUP], n.cls = [g, v, C, A, b, S, m, E, I],
            n.character = e;
          for (var o = 0; o < n.cls.length; o++) n.addState(new n.cls[o](n));
          return n.initEvent(), n;
        }
        return o(e, t), e.prototype.init = function () {
          this.character.props.equipArmor ? this.transition("ReadyPose") : this.forceIdle(!0);
        }, e.prototype.initEvent = function () {
          var t = this;
          this.events.forEach(function (e, n) {
            c.default.on(e, t.handleInput, t);
          });
        }, e.prototype.deinitEvent = function () {
          c.default.clearAllByNode(this);
        }, e.prototype.handleInput = function (t, e) {
          if (this.character.gameCtrl.state == r.GameState.START || this.character.gameCtrl.state == r.GameState.GUIDING) {
            switch (this.character.gameCtrl.state, r.GameState.GUIDING, e) {
              case r.UIEvent.TOUCHDOWN:
                this.handleTouchDown(t);
                break;

              case r.UIEvent.TOUCHUP:
                this.handleTouchUp(t);
            }
            this.currentState.handleInput(t, e);
          }
        }, e.prototype.handleTouchDown = function (t) {
          switch (t) {
            case r.ButtonKeyName.SKILL3:
              this.forceDefence(null);
          }
        }, e.prototype.handleTouchUp = function (t) {
          switch (t) {
            case r.ButtonKeyName.NORMALATTACK:
              (this.isIdle() || this.isNormalAttack() || this.isDefence()) && this.transition("NormalAttack");
              break;

            case r.ButtonKeyName.SKILL4:
              if (this.character.isJump()) break;
              (this.isIdle() || this.isNormalAttack()) && this.character.props.isEnergyEnough(p.EnergyType.StraightAttack) && (this.character.gameCtrl.btnEff4.node.active && 0 == this.character.pid && (this.character.gameCtrl.btnEff4.node.active = !1,
                this.character.gameCtrl.btnEff4.setAnimation(0, "dianji", !1)), this.transition("StraightAttack"));
              break;

            case r.ButtonKeyName.SKILL3:
              this.isDefence() && this.transition("NoneAct");
              break;

            case r.ButtonKeyName.SKILL2:
              if (this.character.isJump()) break;
              (this.isIdle() || this.isNormalAttack()) && this.character.props.isEnergyEnough(p.EnergyType.RangedAttack) && (this.character.gameCtrl.btnEff2.node.active && 0 == this.character.pid && (this.character.gameCtrl.btnEff2.node.active = !1,
                this.character.gameCtrl.btnEff2.setAnimation(0, "dianji", !1)), this.transition("RangedAttack"));
              break;

            case r.ButtonKeyName.SKILL1:
              this.character.isOnGround && this.character.props.isEnergyEnough(p.EnergyType.SuperAttack) && (this.character.gameCtrl.btnEff1.node.active && 0 == this.character.pid && (this.character.gameCtrl.btnEff1.node.active = !1,
                this.character.gameCtrl.btnEff1.setAnimation(0, "dianji", !1)), this.forceSuperAttack());
          }
        }, e.prototype.isDefence = function () {
          return "Defence" == this.currentState.name;
        }, e.prototype.isIdle = function () {
          return "NoneAct" == this.currentState.name;
        }, e.prototype.isFloating = function () {
          return "Floating" == this.currentState.name;
        }, e.prototype.isBeaten = function () {
          return "Beaten" == this.currentState.name || "Floating" == this.currentState.name;
        }, e.prototype.isSuperAttack = function () {
          return "SuperAttack" == this.currentState.name;
        }, e.prototype.isEnterSuperAttack = function () {
          return "EnterSuperAttack" == this.currentState.name;
        }, e.prototype.isNormalAttack = function () {
          return "NormalAttack" == this.currentState.name;
        }, e.prototype.isGetUp = function () {
          return "GetUp" == this.currentState.name;
        }, e.prototype.isRangedAttack = function () {
          return "RangedAttack" == this.currentState.name;
        }, e.prototype.isStraightAttack = function () {
          return "StraightAttack" == this.currentState.name;
        }, e.prototype.isAttack = function () {
          return this.isNormalAttack() || this.isSuperAttack() || this.isRangedAttack() || this.isStraightAttack();
        }, e.prototype.canTransDefence = function () {
          return "NoneAct" == this.currentState.name;
        }, e.prototype.forceGetUp = function (t) {
          this.transition("GetUp", t);
        }, e.prototype.forceDefence = function (t) {
          this.canTransDefence() && this.transition("Defence", t);
        }, e.prototype.forcePush = function (t, e) {
          this.isSuperAttack() || this.transition("PushedAway", t, e);
        }, e.prototype.forceBeaten = function (t) {
          this.isGetUp() || this.isFloating() || this.isDefence() || this.isEnterSuperAttack() || this.isSuperAttack() || this.transition("Beaten", t);
        }, e.prototype.forceIdle = function (t) {
          this.transition("NoneAct", t);
        }, e.prototype.forceFloating = function (t) {
          this.isDefence() || this.isSuperAttack() || this.transition("Floating", t);
        }, e.prototype.forceSuperAttack = function () {
          this.isBeaten() || this.isGetUp() || this.transition("SuperAttack");
        }, e.prototype.forceLocked = function () {
          this.isDefence() || (this.character.forceIdle(), this.transition("Locked"));
        }, e.prototype.forceDead = function () {
          this.transition("Dead");
        }, e.prototype.forceNormalAttack = function () {
          this.transition("NormalAttack");
        }, e.prototype.canMove = function () {
          return this.isIdle();
        }, e;
      }(i.default);
    n.default = f;
    var w = function (t) {
        function e(e) {
          var n = t.call(this, "") || this;
          return n.soundName = "", n.soundDelay = .25, n.charAct = null, n.char = null, n.speed = 300,
            n.damgeTriggerOn = !1, n.isPause = !1, n.attackStep = 0, n.isJump = !1, n.delayTime = 0,
            n.delayFlag = !1, n.charAct = e, n.char = e.character, n;
        }
        return o(e, t), e.prototype.OnEnter = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          this.char.animator.stateChange(this), this.attackStep = 0;
        }, e.prototype.OnUpdate = function (t) {
          this.damageInfo && this.damageInfo.canMove && this.move(this.vect), this.delayFlag && this.delayTime > 0 && (this.delayTime -= t,
            this.delayTime <= 0 && (this.delayFlag = !1, this.delayCallBack && this.delayCallBack()));
        }, e.prototype.OnExit = function () {
          this.char.enableAtkArea(!1, this.damageInfo);
        }, e.prototype.delayCall = function (t, e) {
          this.delayTime = t, this.delayFlag = !0, this.delayCallBack = e;
        }, e.prototype.stopDelayCall = function () {
          this.delayFlag = !1;
        }, e.prototype.triger = function (t, e) {
          "attack" == t ? (this.char.enableAtkArea(!1, this.damageInfo), this.initDamageInfo(e)) : "movement" == t ? this.initMoveInfo(e) : "energy" == t ? this.initEnergyInfo(e) : "stepframe" == t ? this.initStepframeInfo(e) : "vfx" == t ? this.char.eff.playSpecifyEff(e.type, e.effPosType) : "sound" == t && this.initSoundInof(e);
        }, e.prototype.initSoundInof = function (t) {
          if (0 == t.type) _.default.playSound_csryw(t.soundName);
          else if (1 == t.type) {
            var e = "dinosaur_" + this.char.props.id + "/sound/" + t.soundName;
            _.default.playSpineSound_dinosaur(e);
          }
        }, e.prototype.initStepframeInfo = function (t) {
          0 == t.triggerType ? this.char.gameCtrl._stepFrame(t.time) : this.damageInfo && (this.damageInfo.stepFrameTime = t.time,
            this.damageInfo.stepFrameType = t.triggerType, this.damageInfo.stepFrameTargetType = t.triggerTarget);
        }, e.prototype.initEnergyInfo = function (t) {
          0 == t.triggerType ? this.char.dealEnergy(t.valueId) : 1 == t.triggerType && this.damageInfo && (this.damageInfo.energyId = t.valueId);
        }, e.prototype.initMoveInfo = function (t) {
          if (!this.isJump) {
            var e = this.char.faceDirection;
            if (1 == t.target) {
              var n = this.char.JoyHorizontalDirection();
              0 != n && (e = n);
            }
            1 == t.type ? (this.damageInfo.canMove = !0, this.vect = cc.v2(t.speedX * e, t.speedY)) : 2 == t.type ? (this.damageInfo.canMove = !1,
              this.moveTeleport(cc.v2(t.speedX, t.speedY))) : 3 == t.type ? (this.damageInfo.canMove = !1,
              this.moveTeleportGround(cc.v2(t.speedX, t.speedY))) : this.moveRigid(cc.v2(t.speedX * e, t.speedY));
          }
        }, e.prototype.initDamageInfo = function (t) {
          this.damageInfo.attacker = this.char, this.damageInfo.direction = this.char.faceDirection,
            this.damageInfo.atkAreaID = t.atkAreaID, this.damageInfo.atkType = t.atkType, this.damageInfo.damageType = t.damageType,
            this.damageInfo.beatenLinearVec = cc.v2(this.char.faceDirection * t.speedX, t.speedY),
            this.damageInfo.damage = this.getDamage.call(this.char.props, this.attackStep),
            this.damageInfo.hardValue = t.hardValue, this.damageInfo.selfHardValue = t.selfHardValue,
            this.damageInfo.beatenAction = t.beatenAction, this.damageInfo.effScale = t.scale,
            this.damageInfo.damageEffId = t.damageEffId, t.damageType == u.DamageType.FloatBack && this.isJump && (this.damageInfo.damageType = u.DamageType.Hard,
              this.damageInfo.beatenLinearVec.x *= .5, this.damageInfo.beatenLinearVec.y = 0),
            this.damageInfo.atkType == u.AttackType.Close ? this.char.enableAtkArea(!0, this.damageInfo) : this.damageInfo.atkType == u.AttackType.Ranged && (this.damageInfo.targets = [],
              this.char.eff.createRangedWeapon(this.damageInfo)), this.attackStep++;
        }, e.prototype.move = function (t) {
          if (t) {
            var e = this.char.node.x + t.x,
              n = Math.abs(e - this.char.target.node.x);
            this.inBorder(e) && n > 150 && (this.char.node.x = e);
          }
        }, e.prototype.moveTeleportGround = function (t) {
          this.char.rigid.linearVelocity = cc.v2(0, 0), this.char.node.y = this.char.onGroundY;
        }, e.prototype.moveTeleport = function (t) {
          var e = this.char.target.headAttach.parent.convertToWorldSpaceAR(this.char.target.headAttach.position),
            n = this.char.node.parent.convertToWorldSpaceAR(this.char.node.position),
            o = this.char.node.x + e.x - n.x + t.x,
            r = this.char.node.y + e.y - n.y + t.y;
          this.char.rigid.linearVelocity = cc.v2(0, 0), this.char.camera.getBorderLeftX, o < this.char.camera.getBorderLeftX() + 30 ? o = this.char.camera.getBorderLeftX() + 30 : o > this.char.camera.getBorderRightX() + 30 && (o = this.char.camera.getBorderRightX() + 30),
            this.char.node.x = o, this.char.node.y = r, this.char.node.y > 0 && (this.char.isOnGround = !1,
              this.char.node.y += 30);
        }, e.prototype.moveRigid = function (t) {
          t && (t.y > 0 && (this.char.isOnGround = !1, this.char.node.y += 30), this.char.rigid.linearVelocity = cc.v2(t.x ? t.x : this.char.rigid.linearVelocity.x, t.y ? t.y : this.char.rigid.linearVelocity.y));
        }, e.prototype.translate = function (t, e, n) {
          e = e || this.speed, this.char.rigid.linearVelocity = cc.v2(t * this.speed, n || this.char.rigid.linearVelocity.y);
        }, e.prototype.floating = function (t, e, n) {
          this.char.isOnGround = !1, this.char.rigid.linearVelocity = cc.v2(t * e, n || this.char.rigid.linearVelocity.y);
        }, e.prototype.forceToIdle = function () {
          this.charAct.forceIdle();
        }, e.prototype.inBorder = function (t) {
          return t > this.char.camera.getBorderLeftX() + 50 && t < this.char.camera.getBorderRightX() - 50;
        }, e.prototype.stepFrameChar = function (t, e) {
          void 0 === e && (e = .3), t.animator.pauseAnim(), t.scheduleOnce(function () {
            t.animator.resumeAnim();
          }, e);
        }, e;
      }(s.default),
      g = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.name = "NoneAct", e;
        }
        return o(e, t), e.prototype.OnEnter = function (e) {
          t.prototype.OnEnter.call(this), "Defence" == this.char.fsmAct.lastState.name && this.char.animator.stateChange(this.char.fsm.currentState),
            this.char.animator.setTimeScale(a.AnimSpeed.SPEED1), this.char.enableGhost(!1),
            this.char.turnAround(!0), e && 0 == this.char.pid && this.char.gameCtrl._gameStart();
        }, e;
      }(w),
      m = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.name = "SuperAttack", e;
        }
        return o(e, t), e.prototype.OnInit = function () {
          this.getDamage = this.char.props.getSuperSkillDamage;
        }, e.prototype.OnEnter = function () {
          this.char.isOnGround && this.char.forceIdle(), t.prototype.OnEnter.call(this), this.damageInfo = new u.default(),
            this.char.faceToTarget(!0), this.char.gameCtrl.superTime = !0, this.char.animator.setTimeScale(a.AnimSpeed.SPEED1),
            this.char.gameCtrl._shadowTheBg(!0), this.char.gameCtrl._showChaTu(this.char.pid),
            this.char.props.changeEnergy(p.EnergyType.SuperAttack), this.char.eff.playSuperEff(),
            this.char.sounds.playSuper(), this.char.enableGhost(!0);
        }, e.prototype.OnExit = function () {
          t.prototype.OnExit.call(this), this.char.gameCtrl.superTime = !1, this.char.gameCtrl._shadowTheBg(!1),
            this.char.enableGhost(!1);
        }, e.prototype.OnUpdate = function (e) {
          t.prototype.OnUpdate.call(this, e);
        }, e.prototype.animOver = function () {
          this.forceToIdle();
        }, e;
      }(w),
      v = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.name = "NormalAttack", e.comboIndex = 0, e.isInAnimation = !1, e.comboDelay = .3,
            e;
        }
        return o(e, t), e.prototype.OnInit = function () {
          this.comboSkills = this.char.skillConfig.comboNames.slice(0), this.jumpAtkName = this.char.skillConfig.jumpAtkName,
            this.getDamage = this.char.props.getComboDamage;
        }, e.prototype.OnEnter = function () {
          if (this.char.isOnGround && this.char.forceIdle(), t.prototype.OnEnter.call(this),
            this.damageInfo = new u.default(), this.comboIndex = 0, this.isInAnimation = !0,
            this.char.animator.setTimeScale(a.AnimSpeed.SPEED3), this.char.isOnGround) this.char.enableGhost(!0),
            this.isJump = !1, this.vect = this.char.getFaceToTargetVect(), this.translate(this.char.faceDirection, 400),
            this.char.animator.playAnim(this.comboSkills[this.comboIndex]);
          else {
            this.isJump = !0, this.char.faceToTarget(!0);
            var e = this.jumpAtkName ? this.jumpAtkName : "pugong0";
            this.char.animator.playAnim(e);
          }
          this.comboIndex++;
        }, e.prototype.OnExit = function () {
          this.stopDelayCall(), this.char.enableAtkArea(!1, this.damageInfo);
        }, e.prototype.OnUpdate = function (e) {
          t.prototype.OnUpdate.call(this, e), this.char.isOnGround && this.isJump && this.forceToIdle();
        }, e.prototype.animOver = function () {
          this.isJump || (this.isInAnimation = !1, this.damageInfo && this.damageInfo.selfHardValue ? this.delayCall(this.damageInfo.selfHardValue, this.forceToIdle) : this.delayCall(this.comboDelay, this.forceToIdle));
        }, e.prototype.repeatStateCall = function () {
          this.isJump || this.isInAnimation || this.comboIndex >= this.comboSkills.length || (this.char.enableAtkArea(!1, this.damageInfo),
            this.isInAnimation = !0, this.stopDelayCall(), this.char.animator.playComboAnim(this.comboIndex),
            this.comboIndex++);
        }, e;
      }(w),
      A = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.name = "RangedAttack", e;
        }
        return o(e, t), e.prototype.OnInit = function () {
          this.getDamage = this.char.props.getRangedDamage;
        }, e.prototype.OnEnter = function () {
          this.char.isOnGround && this.char.forceIdle(), t.prototype.OnEnter.call(this), this.damageInfo = new u.default(),
            this.char.enableGhost(!0), this.char.faceToTarget(!0), this.char.props.changeEnergy(p.EnergyType.RangedAttack),
            this.char.sounds.playSecondSkill(0);
        }, e.prototype.OnExit = function () {
          t.prototype.OnExit.call(this), this.char.enableGhost(!1);
        }, e.prototype.OnUpdate = function (e) {
          t.prototype.OnUpdate.call(this, e);
        }, e.prototype.animOver = function () {
          this.forceToIdle();
        }, e;
      }(w),
      b = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.name = "StraightAttack", e;
        }
        return o(e, t), e.prototype.OnInit = function () {
          this.getDamage = this.char.props.getStraightDamage;
        }, e.prototype.OnEnter = function () {
          this.char.isOnGround && this.char.forceIdle(), t.prototype.OnEnter.call(this), this.damageInfo = new u.default(),
            this.char.enableGhost(!0), this.char.faceToTarget(!0), this.char.props.changeEnergy(p.EnergyType.StraightAttack),
            this.char.sounds.playFourSkill(0);
        }, e.prototype.OnExit = function () {
          t.prototype.OnExit.call(this), this.char.enableGhost(!1);
        }, e.prototype.OnUpdate = function (e) {
          t.prototype.OnUpdate.call(this, e);
        }, e.prototype.animOver = function () {
          this.delayCall(.3, this.forceToIdle);
        }, e;
      }(w),
      S = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.name = "Defence", e;
        }
        return o(e, t), e.prototype.OnEnter = function (e) {
          t.prototype.OnEnter.call(this), this.lastDirection = this.char.vector.x, this.char.faceToTarget(!0),
            this.repeatStateCall(e);
        }, e.prototype.OnExit = function () {
          t.prototype.OnExit.call(this);
        }, e.prototype.OnUpdate = function (e) {
          t.prototype.OnUpdate.call(this, e), this.char.isJoyDown() || this.charAct.forceIdle();
        }, e.prototype.guiding = function () {
          this.char.gameCtrl.state == r.GameState.GUIDING && (this.char.target.fsmAct.forceNormalAttack(),
            this.char.gameCtrl.guidingLayer.tipByStep(y.GuidingState.STEP4, this.char.gameCtrl.uiLayer.getSkill1ButtonPos()),
            this.delayCall(.3, this.forceToIdle));
        }, e.prototype.repeatStateCall = function (t) {
          t && (1 == t.stepFrameTargetType && (t.stepFrameTargetType = null), this.translate(this.char.target.faceDirection),
            this.char.eff.playBeatenEff(u.DamageType.Normal), this.char.props.changeEnergy(p.EnergyType.DefenceBeattack),
            l.default.playEff("fangyu"));
        }, e;
      }(w),
      C = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.name = "Beaten", e.animNames = ["shouji1", "shouji2", "shouji3", "shouji4"],
            e.lastStateIsOpMove = !1, e;
        }
        return o(e, t), e.prototype.OnEnter = function (e) {
          this.char.isOnGround ? (this.isJump = !1, this.char.forceIdle()) : this.isJump = !0,
            t.prototype.OnEnter.call(this), "OppositeMove" == this.char.fsm.lastState.name ? this.lastStateIsOpMove = !0 : this.lastStateIsOpMove = !1,
            this.char.faceToTarget(!0), this.damageInfo = e, this.dealDamageInfo();
        }, e.prototype.OnExit = function () {
          t.prototype.OnExit.call(this), this.char.isInvincible || this.char.resetRigidSize(),
            this.stopDelayCall(), this.char.enableGhost(!1);
        }, e.prototype.OnUpdate = function (e) {
          t.prototype.OnUpdate.call(this, e), this.char.isOnGround ? (this.char.animator.curAnim == this.animNames[2] ? (this.char.isInvincible = !0,
              this.char.animator.curAnimIsOver && this.charAct.forceGetUp(this.damageInfo)) : this.char.animator.curAnimIsOver && this.isJump && this.animOver(),
            this.isJump = !1) : this.isJump = !0;
        }, e.prototype.animOver = function () {
          if (this.char.isOnGround) {
            var t = .3;
            this.damageInfo && this.damageInfo.hardValue && (t = this.damageInfo.hardValue),
              this.delayCall(t, this.forceToIdle);
          }
        }, e.prototype.repeatStateCall = function (t) {
          this.damageInfo = t, this.stopDelayCall(), this.dealDamageInfo();
        }, e.prototype.triger = function (e, n) {
          t.prototype.triger.call(this, e, n), "canstepframe" == e && this.damageInfo && (0 == this.damageInfo.stepFrameTargetType ? (this.char.gameCtrl._stepFrame(this.damageInfo.stepFrameTime),
            this.damageInfo.stepFrameTargetType = null) : 1 == this.damageInfo.stepFrameTargetType && (this.stepFrameChar(this.char, this.damageInfo.stepFrameTime),
            this.damageInfo.stepFrameTargetType = null));
        }, e.prototype.dealDamageInfo = function () {
          this.char.beatenSound();
          var t = this.damageInfo.attacker;
          this.char.changeRigidSize(100), this.damageInfo.damage && this.char.dealDamage(this.damageInfo.damage),
            null != this.damageInfo.damageEffId && t.eff.createSpecifyDamageEff(this.char.node, this.damageInfo.damageEffId),
            this.char.eff.playBeatenEff(this.damageInfo.damageType), this.damageInfo.energyId >= 0 && (t.dealEnergy(this.damageInfo.energyId),
              this.damageInfo.energyId = -1), 2 == this.damageInfo.stepFrameType && (this.char.gameCtrl._stepFrame(this.damageInfo.stepFrameTime),
              this.damageInfo.stepFrameType = null, this.damageInfo.stepFrameTargetType = null),
            this.damageInfo.isMove && (this.damageInfo.canMove = !1), this.animNames[this.damageInfo.damageType] && 1 != this.damageInfo.beatenAction && (this.char.animator.curAnim == this.animNames[2] ? (this.char.animator.playAnim(this.animNames[2]),
              h.default.vibrateShort_csryw()) : this.char.animator.playAnim(this.animNames[this.damageInfo.damageType])),
            2 == this.damageInfo.damageType && this.char.enableGhost(!0), this.moveRigid(this.damageInfo.beatenLinearVec),
            d.default.shake(this.char.camera.node, void 0, void 0, 12);
        }, e;
      }(w),
      I = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.name = "GetUp", e;
        }
        return o(e, t), e.prototype.OnEnter = function (e) {
          t.prototype.OnEnter.call(this), e && e.isMove && (e.canMove = !1);
        }, e.prototype.OnExit = function () {
          this.char.resetRigidSize();
        }, e.prototype.animOver = function () {
          this.charAct.forceIdle();
        }, e;
      }(w),
      E = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.name = "Dead", e.isAnimOver = !1, e;
        }
        return o(e, t), e.prototype.OnEnter = function () {
          t.prototype.OnEnter.call(this), this.char.enableGhost(!1);
        }, e.prototype.OnUpdate = function () {
          this.char.isOnGround && this.isAnimOver && (this.char.isDead = !0, this.char.animator.curAnim = null);
        }, e.prototype.animOver = function () {
          this.isAnimOver = !0;
        }, e;
      }(w);
    cc._RF.pop();
  }, {
    "../../../FrameWork/Mgr/SoundMgr": "SoundMgr",
    "../../../FrameWork/Mgr/VibrateMgr": "VibrateMgr",
    "../Constants": "Constants",
    "../UI/GuidingLayer": "GuidingLayer",
    "../utils/EventCenter": "EventCenter",
    "../utils/SoundsManager": "SoundsManager",
    "../utils/StateMachine/State": "State",
    "../utils/StateMachine/StateMachine": "StateMachine",
    "../utils/Utils": "Utils",
    "./CharacterAnimtor": "CharacterAnimtor",
    "./DamageInfo": "DamageInfo",
    "./DinosaurProperty": "DinosaurProperty"
  }],
  CharacterAnimtor: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "968e76AkghDkJST16i8jds9", "CharacterAnimtor"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.AnimSpeed = void 0;
    var o = t("../utils/EventCenter");
    (function (t) {
      t[t.SPEED1 = 1] = "SPEED1", t[t.SPEED2 = 1] = "SPEED2", t[t.SPEED3 = 1.5] = "SPEED3",
        t[t.SPEED4 = 1.8] = "SPEED4";
    })(n.AnimSpeed || (n.AnimSpeed = {}));
    var r = function () {
      function t(t) {
        this.curAnim = null, this.curAnimIsOver = !1, this.animConfig = {
            Move: {
              name: "houtui",
              isLoop: !0
            },
            Idle: {
              name: "daiji",
              isLoop: !0
            },
            NoneAct: {
              name: "daiji",
              isLoop: !0
            },
            Jump: {
              name: "tiaoyue"
            },
            Defence: {
              name: "fangyu"
            },
            Beaten: {
              name: "shouji2"
            },
            OppositeMove: {
              name: "zoulu",
              isLoop: !0
            },
            Floating: {
              name: "shouji3"
            },
            Dead: {
              name: "siwang"
            },
            GetUp: {
              name: "qilai"
            }
          }, this.mixConfig = [{
            from: "Move",
            to: "Jump",
            duration: .1
          }, {
            from: "Idle",
            to: "Jump",
            duration: .1
          }, {
            from: "Jump",
            to: "Idle",
            duration: .1
          }, {
            from: "Jump",
            to: "Move",
            duration: .1
          }, {
            from: "Jump",
            to: "Defence",
            duration: .1
          }, {
            from: "Idle",
            to: "Move",
            duration: .1
          }, {
            from: "Move",
            to: "Idle",
            duration: .1
          }, {
            from: "Beaten",
            to: "Idle",
            duration: .1
          }, {
            from: "Defence",
            to: "Idle",
            duration: .1
          }, {
            from: "Defence",
            to: "Jump",
            duration: .1
          }, {
            from: "Idle",
            to: "Defence",
            duration: .1
          }, {
            from: "Jump",
            to: "OppositeMove",
            duration: .1
          }, {
            from: "Idle",
            to: "OppositeMove",
            duration: .1
          }, {
            from: "OppositeMove",
            to: "Idle",
            duration: .1
          }, {
            from: "OppositeMove",
            to: "Move",
            duration: .1
          }, {
            from: "Move",
            to: "OppositeMove",
            duration: .1
          }, {
            from: "Idle",
            to: "Floating",
            duration: .1
          }, {
            from: "Floating",
            to: "Idle",
            duration: .1
          }, {
            from: "Beaten",
            to: "Dead",
            duration: .1
          }, {
            from: "Beaten",
            to: "GetUp",
            duration: .1
          }, {
            from: "Floating",
            to: "GetUp",
            duration: .1
          }, {
            from: "Idle",
            to: "SuperAttack",
            duration: .1
          }, {
            from: "Idle",
            to: "StraightAttack",
            duration: .1
          }, {
            from: "RangedAttack",
            to: "Idle",
            duration: .1
          }], this.comboAnimConfig = [], this.lastTimeScale = 0, this.skinName = ["1", "2"],
          this.character = t, this.skeleton = t.node.getComponent(sp.Skeleton), this.comboAnimConfig = t.skillConfig.comboNames,
          this.animConfig.SuperAttack = {
            name: this.character.skillConfig.superName
          }, this.animConfig.RangedAttack = {
            name: this.character.skillConfig.secondSkillName
          }, this.animConfig.StraightAttack = {
            name: this.character.skillConfig.fourSkillName
          }, this.mixInit(), this.listenerInit();
      }
      return t.prototype.setSkin = function () {
        this.skinName[this.character.pid];
        this.skeleton.setSkin("default");
      }, t.prototype.playAnimByStateName = function (t) {
        var e = this.animConfig[t];
        e && this.playAnim(e.name, e.isLoop);
      }, t.prototype.pauseAnim = function () {
        this.skeleton.timeScale = 0;
      }, t.prototype.resumeAnim = function () {
        0 == this.skeleton.timeScale && this.setTimeScale(this.lastTimeScale);
      }, t.prototype.playAnim = function (t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = 0), this.curAnim = t, this.curAnimIsOver = !1,
          this.skeleton.setAnimation(n, t, e);
      }, t.prototype.addAnim = function (t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = 0), void 0 === o && (o = 0), this.curAnim = t,
          this.skeleton.addAnimation(o, t, e, n);
      }, t.prototype.setTimeScale = function (t) {
        this.lastTimeScale = t, this.skeleton.timeScale = t;
      }, t.prototype.deinitEvent = function () {
        o.default.clearAllByNode(this);
      }, t.prototype.stateChange = function (t) {
        var e = this.animConfig[t.name];
        if (e) {
          if (this.curAnim == e.name) return;
          var n = e.name,
            o = e.isLoop;
          this.playAnim(n, o);
        }
      }, t.prototype.playComboAnim = function (t) {
        var e = this.comboAnimConfig[t];
        e && this.addAnim(e);
      }, t.prototype.getState = function () {
        return this.skeleton.getState();
      }, t.prototype.mixInit = function () {
        for (var t = 0; t < this.mixConfig.length; t++) {
          var e = this.mixConfig[t],
            n = this.animConfig[e.from],
            o = this.animConfig[e.to];
          this.skeleton.setMix(n.name, o.name, e.duration);
        }
        this.comboMixInit();
      }, t.prototype.comboMixInit = function () {
        for (var t = 0; t < this.comboAnimConfig.length; t++) {
          var e = this.comboAnimConfig[t];
          if (console.log("comboMixInit   anim=", e), this.skeleton.setMix("daiji", e, .1),
            this.skeleton.setMix(e, "daiji", .1), this.skeleton.setMix("tiaoyue", e, .1), t < this.comboAnimConfig.length - 1) {
            var n = this.comboAnimConfig[t + 1];
            this.skeleton.setMix(e, n, .1);
          }
        }
      }, t.prototype.listenerInit = function () {
        var t = this;
        this.skeleton.setStartListener(function (e) {
          var n = e.animation ? e.animation.name : "";
          t.curAnim = n, t.curAnimIsOver = !1;
        }), this.skeleton.setCompleteListener(function (e) {
          var n = e.animation ? e.animation.name : "";
          t.curAnim == n && t.character.fsmAct.currentState.animOver(), t.curAnimIsOver = !0;
        }), this.skeleton.setEndListener(function (t) {
          t.animation && t.animation.name;
        }), this.skeleton.setInterruptListener(function (t) {
          t.animation && t.animation.name;
        }), this.skeleton.setEventListener(function (e, n) {
          if (n.data && n.stringValue) {
            var o = {};
            0 == n.stringValue.indexOf("{") && (o = JSON.parse(n.stringValue)), t.character.fsmAct.currentState.triger(n.data.name, o);
          }
        });
      }, t;
    }();
    n.default = r, cc._RF.pop();
  }, {
    "../utils/EventCenter": "EventCenter"
  }],
  CharacterShapeCollider: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "66ff78S5YlMCof8yCNjWXG6", "CharacterShapeCollider");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./Character"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.parentNode = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          this.character = this.parentNode.getComponent(i.default);
        }, e.prototype.start = function () {}, e.prototype.onBeginContact = function (t, e, n) {
          "plane" == n.node.name ? this.character && this.character.onGround() : "border" == n.node.name && this.character && "EnterSuperAttack" == this.character.fsmAct.currentState.name && this.character.fsmAct.forceIdle();
        }, r([a(cc.Node)], e.prototype, "parentNode", void 0), e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "./Character": "Character"
  }],
  Character: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "8273aYj1qlI64Lz3hu2sgfs", "Character");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.Squat = n.Jump = n.OppositeMove = n.Move = n.Idle = n.DefaultState = void 0;
    var r = t("../utils/StateMachine/StateMachine"),
      i = t("../utils/StateMachine/State"),
      s = t("../utils/EventCenter"),
      c = t("./CharacterAnimtor"),
      a = t("./CharacterActionState"),
      l = t("../utils/Utils"),
      u = t("../Constants"),
      d = t("../utils/ResCenter"),
      p = t("../utils/SoundsManager"),
      y = t("../config/SkillConfig"),
      h = t("./CharEffect"),
      _ = t("./SoundEffect"),
      f = t("../../../FrameWork/Mgr/UmengMgr"),
      w = t("../../../FrameWork/User/User"),
      g = t("./DinosaurProperty"),
      m = t("../UI/joystick/JoystickEnum"),
      v = t("./CharacterActCollider"),
      A = t("../UI/GuidingLayer"),
      b = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.speed = 0, e.normalSpeed = 10, e.jumpSpeed = cc.v2(9, 18), e.vector = cc.Vec2.ZERO,
            e.joyVector = cc.Vec2.ZERO, e.srcScaleX = 0, e.isOnGround = !0, e.props = new g.DinosaurProperty(),
            e.pid = 0, e.isDead = !1, e.combo = 0, e.ghostNode = null, e.onGroundY = 0, e.faceDirection = 0,
            e.sounds = null, e.invincibleTime = .5, e.isInvincible = !1, e.beatArea = [], e.atkArea = [],
            e.target = null, e.events = [m.default.EventType.TOUCH_START, m.default.EventType.TOUCH_MOVE, m.default.EventType.TOUCH_END],
            e.cls = [C, I, k, E, T], e.headFlag = null, e.startPos = cc.v2(), e.lastPos = cc.v2(),
            e.delta = 0, e.srcPointsX = [], e.pointsIndex = [0, 5, 2, 3], e.rigidSizeChanged = !1,
            e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            var t = this;
            this.speed = this.normalSpeed, this.srcScaleX = this.node.scaleX, this.skeleton = this.node.getComponent(sp.Skeleton),
              this.rigid = this.node.getComponent(cc.RigidBody), this.physicCollider = this.node.getComponent(cc.PhysicsPolygonCollider);
            this.skeleton;
            this.eff = this.node.getComponent(h.default), this.bodyAttach = this.eff.bodyAttach,
              this.headAttach = this.eff.headAttach, this.sounds = this.node.getComponent(_.default),
              this.pointsIndex.forEach(function (e, n) {
                t.srcPointsX[n] = t.physicCollider.points[e].x;
              }), this.initFsm(), this.initActFsm(), this.initEvent();
          }, e.prototype.onDestroy = function () {
            this.fsmAct.deinitEvent(), this.animator.deinitEvent(), s.default.clearAllByNode(this);
          }, e.prototype.start = function () {
            this.fsm.transition("Idle"), this.fsmAct.init(), this.startPos.x = this.node.getPosition().x,
              this.startPos.y = this.node.getPosition().y;
          }, e.prototype.update = function (t) {
            this.gameCtrl && this.gameCtrl.state && (this.gameCtrl.isPaused || (this.fsmAct.loop(t),
              this.fsm.loop(t), this.isInvincible && (this.delta += t, this.delta > this.invincibleTime && (this.delta = 0,
                this.isInvincible = !1)), 0 == this.pid && this.JoyHorizontalDirection()));
          }, e.prototype.lateUpdate = function () {
            var t = this;
            this.props && 0 == this.props.hp && this.dead(), this.props && 0 == this.pid && (this.props.isEnergyEnough(g.EnergyType.SuperAttack) ? this.gameCtrl.btnEff1.node.active || (this.gameCtrl.btnEff1.node.active = !0,
              this.gameCtrl.btnEff1.setAnimation(0, "lengque", !1), this.gameCtrl.btnEff1.setCompleteListener(function (e) {
                var n = e.animation ? e.animation.name : "";
                "dianji" != n && "lengque" != n || t.gameCtrl.btnEff1.setAnimation(0, "xunhuang", !0);
              })) : this.gameCtrl.btnEff1.node.active = !1, this.props.isEnergyEnough(g.EnergyType.RangedAttack) ? this.gameCtrl.btnEff2.node.active || (this.gameCtrl.btnEff2.node.active = !0,
              this.gameCtrl.btnEff2.setAnimation(0, "lengque", !1), this.gameCtrl.btnEff2.setCompleteListener(function (e) {
                var n = e.animation ? e.animation.name : "";
                "dianji" != n && "lengque" != n || t.gameCtrl.btnEff2.setAnimation(0, "xunhuang", !0);
              })) : this.gameCtrl.btnEff2.node.active = !1, this.props.isEnergyEnough(g.EnergyType.StraightAttack) ? this.gameCtrl.btnEff4.node.active || (this.gameCtrl.btnEff4.node.active = !0,
              this.gameCtrl.btnEff4.setAnimation(0, "lengque", !1), this.gameCtrl.btnEff4.setCompleteListener(function (e) {
                var n = e.animation ? e.animation.name : "";
                "dianji" != n && "lengque" != n || t.gameCtrl.btnEff4.setAnimation(0, "xunhuang", !0);
              })) : this.gameCtrl.btnEff4.node.active = !1), this.headFlagFollow(), this.correctPos();
          }, e.prototype.btnEff = function () {}, e.prototype.correctPos = function () {
            isNaN(this.node.x) || isNaN(this.node.y) ? (this.rigid.active = !1, this.isOnGround = !0,
              this.forceIdle(), this.fsmAct.forceIdle(), this.node.setPosition(this.lastPos)) : (this.lastPos.x = this.node.x,
              this.lastPos.y = this.node.y);
          }, e.prototype.addBeatCollider = function (t) {
            this.beatArea.push(t);
          }, e.prototype.addAtkCollider = function (t) {
            this.atkArea.push(t);
          }, e.prototype.enableBeatCollider = function (t) {
            this.beatArea.forEach(function (e, n) {
              e.active = t;
            });
          }, e.prototype.enableAtkArea = function (t, e) {
            this.atkArea.forEach(function (n, o) {
              var r = n.getComponent(v.default);
              if (e && n.name == "attackArea_" + e.atkAreaID) return n.active = t, void(t && (e.targets = [],
                r.setDamageInfo(e)));
            });
          }, e.prototype.initProperty = function (t, e, n) {
            this.pid = e, this.beatenGroup = "beatenCollider" + e, this.atkGroup = "attackCollider" + e,
              this.skillConfig = y.default.getInstance().getDataById(t), this.props.initData(t, 0 == e, !0),
              n && this.initHeadFlag();
          }, e.prototype.initHeadFlag = function () {
            var t = this;
            0 == this.pid && d.default.loadPrefabsInBundle(2, "prefab/P" + (this.pid + 1), function (e) {
              var n = cc.instantiate(e.data);
              t.node.parent.addChild(n, 1 - t.pid + 1), t.headFlag = n;
            }, this);
          }, e.prototype.headFlagFollow = function () {
            if (this.headFlag) {
              var t = this.bodyAttach.parent.convertToWorldSpaceAR(this.bodyAttach.position);
              t.x -= .5 * cc.visibleRect.width, t.y -= .5 * cc.visibleRect.height - 100, this.headFlag.setPosition(t);
            }
          }, e.prototype.initFsm = function () {
            this.fsm = new r.default();
            for (var t = 0; t < this.cls.length; t++) this.fsm.addState(new this.cls[t](this));
            this.fsm.id = this.pid, this.animator = new c.default(this);
          }, e.prototype.initActFsm = function () {
            this.fsmAct = new a.default(this), this.fsmAct.id = this.pid;
          }, e.prototype.initEvent = function () {
            var t = this;
            this.events.forEach(function (e, n) {
              s.default.on(e, t.handleInput, t);
            }), s.default.on(u.GameEvent.RELIVE, this.relive, this);
          }, e.prototype.onGround = function () {
            this.isOnGround || (this.eff.showSmoke(), p.default.playEff("luodi")), this.isOnGround = !0,
              this.onGroundY = this.node.y;
          }, e.prototype.handleInput = function (t, e) {
            if (!this.isDead && this.gameCtrl.state == u.GameState.START) switch (e) {
              case m.default.EventType.TOUCH_START:
              case m.default.EventType.TOUCH_MOVE:
                this.handleJoyStick(t.vector);
                break;

              case m.default.EventType.TOUCH_END:
                this.handleJoyStick(cc.Vec2.ZERO);
            }
          }, e.prototype.handleJoyStick = function (t) {
            this.joyVector = t.clone(), this.vector = t;
          }, e.prototype.translate = function (t, e, n, o) {
            if ("Beaten" != this.fsmAct.currentState.name || t) {
              var r = t ? t.clone() : this.vector.clone();
              this.turnAround(e), r.x *= n ? n.x : this.speed;
              var i = cc.v2(this.node.x + r.x, this.node.y),
                s = l.default.getXdistance(i, this.target.node.getPosition());
              s <= 400 && this.vector.x * this.target.faceDirection < 0 || (i.x - 200 < this.gameCtrl.camera.borderLeftX ? i.x = this.gameCtrl.camera.borderLeftX + 200 : i.x + 200 > this.gameCtrl.camera.borderRightX && (i.x = this.gameCtrl.camera.borderRightX - 200),
                (s <= this.gameCtrl.camera.maxDis || this.vector.x * this.target.faceDirection < 0) && this.node.setPosition(i));
            }
          }, e.prototype.turnAround = function (t) {
            this.faceToTarget(t);
          }, e.prototype.faceToTarget = function (t) {
            if (void 0 === t && (t = !1), this.isOnGround || t) {
              var e = 1;
              this.faceVectorToTarget(this.target.node, this.node).x < 0 && (e = -1), this.faceDirection != e && (this.faceDirection = e),
                this.node.scaleX = this.faceDirection * this.srcScaleX;
            }
          }, e.prototype.moveCondition = function () {
            return this.isOnGround && !this.isOpposite() && 0 != this.vector.x && this.fsmAct.canMove();
          }, e.prototype.oppositeMoveCondition = function () {
            return this.isOnGround && this.isOpposite() && 0 != this.vector.x && this.fsmAct.canMove();
          }, e.prototype.jumpCondition = function () {
            if (!this.fsmAct.canMove()) return !1;
            if (!this.isOnGround) return !1;
            if (this.vector.equals(cc.Vec2.ZERO)) {
              if (0 != this.pid) return !1;
              if (this.joyVector.equals(cc.Vec2.ZERO)) return !1;
              var t = -cc.misc.radiansToDegrees(this.joyVector.signAngle(cc.v2(1, 0)));
              return t > 45 && t < 135;
            }
            var e = -cc.misc.radiansToDegrees(this.vector.signAngle(cc.v2(1, 0)));
            return e > 45 && e < 135;
          }, e.prototype.squatCondition = function () {
            if (!this.fsmAct.canMove()) return !1;
            if (!this.isOnGround) return !1;
            if (this.vector.equals(cc.Vec2.ZERO)) {
              if (0 != this.pid) return !1;
              if (this.joyVector.equals(cc.Vec2.ZERO)) return !1;
              var t = -cc.misc.radiansToDegrees(this.joyVector.signAngle(cc.v2(1, 0)));
              return t > -135 && t < -45;
            }
            var e = -cc.misc.radiansToDegrees(this.vector.signAngle(cc.v2(1, 0)));
            return e > -135 && e < -45;
          }, e.prototype.idleCondition = function () {
            return this.isOnGround && this.vector.equals(cc.Vec2.ZERO) && this.fsmAct.isIdle();
          }, e.prototype.setTarget = function (t) {
            this.target = t, this.animator.setSkin();
          }, e.prototype.back = function (t) {
            var e = this.getTargetToSelfVect();
            return e.y = 1, e.mulSelf(t), e;
          }, e.prototype.isOpposite = function () {
            var t = this.getTargetToSelfVect();
            return 0 != this.vector.x && 0 != t.x && Math.abs(t.x) / t.x != Math.abs(this.vector.x) / this.vector.x;
          }, e.prototype.getFaceToTargetVect = function () {
            return this.faceVector(this.target.node, this.node);
          }, e.prototype.getTargetToSelfVect = function () {
            return this.faceVector(this.node, this.target.node);
          }, e.prototype.faceVectorToTarget = function (t, e) {
            var n = cc.v2();
            return cc.Vec2.subtract(n, cc.v2(t.x, 0), cc.v2(e.x, 0)), Math.abs(n.x) < 5 && (n.x = 0),
              n.normalizeSelf(), n.x > 0 ? n.x = 1 : n.x < 0 && (n.x = -1), n;
          }, e.prototype.faceVector = function (t, e) {
            var n = cc.v2();
            return cc.Vec2.subtract(n, cc.v2(t.x, 0), cc.v2(e.x, 0)), n.normalizeSelf(), n;
          }, e.prototype.forceIdle = function () {
            this.fsm.transition("Idle");
          }, e.prototype.createReadyEff = function () {}, e.prototype.delReadyEff = function () {
            var t = this.node.parent.getChildByName("ReadyEff");
            t && this.node.parent.removeChild(t);
          }, e.prototype.dealDamage = function (t) {
            null != t && (this.props.changeHp(t), this.target.addCombo(), this.resetCombo());
          }, e.prototype.dealEnergy = function (t, e) {
            if (null == t) return 0;
            this.props.changeEnergy(t, e);
          }, e.prototype.relive = function () {
            f.UmengMgr.sendEvent_csryw(f.StatsFrameWorkEvent.ReportGameRelive, {
                currentLevelNum: w.default.getLeveNum_csryw() + ""
              }), this.isDead = !1, this.resetCombo(), this.props.reset(), this.fsmAct.forceIdle(),
              this.enableBeatCollider(!0), this.energyAutoTimer(), this.gameCtrl.state = u.GameState.START;
          }, e.prototype.dead = function () {
            this.gameCtrl.state == u.GameState.START && this.gameCtrl._setState(u.GameState.DEAD),
              this.fsmAct.forceDead(), this.enableBeatCollider(!1), this.deinitEnergyAutoTimer();
          }, e.prototype.reset = function () {
            this.vector = cc.Vec2.ZERO, this.joyVector = cc.Vec2.ZERO;
          }, e.prototype.addCombo = function () {
            this.combo++;
          }, e.prototype.resetCombo = function () {
            this.combo = 0;
          }, e.prototype.enableGhost = function (t) {
            this.ghostNode && this.ghostNode.enableGhost(t);
          }, e.prototype.energyAutoTimer = function () {
            if (this.props.autoEnergyIncrease) {
              var t = this.props.autoEnergyInterval ? this.props.autoEnergyInterval : 10;
              this.schedule(this.autoIncreaseEnergy, t);
            }
          }, e.prototype.deinitEnergyAutoTimer = function () {
            this.unschedule(this.autoIncreaseEnergy);
          }, e.prototype.autoIncreaseEnergy = function () {
            this.props.changeMp(this.props.autoEnergyIncrease);
          }, e.prototype.beatenSound = function () {
            p.default.playEff("shouji");
          }, e.prototype.isJump = function () {
            return "Jump" == this.fsm.currentState.name;
          }, e.prototype.isOppositeMove = function () {
            return "OppositeMove" == this.fsm.currentState.name;
          }, e.prototype.isSquat = function () {
            return "Squat" == this.fsm.currentState.name;
          }, e.prototype.isJoyOpposite = function () {
            return this.node.x < this.target.node.x && this.vector.x < 0 || this.node.x > this.target.node.x && this.vector.x > 0;
          }, e.prototype.isJoyDown = function () {
            var t = -cc.misc.radiansToDegrees(this.vector.signAngle(cc.v2(1, 0)));
            return t > -135 && t < -45;
          }, e.prototype.JoyHorizontalDirection = function () {
            var t = 0;
            if (0 == this.vector.x) return t;
            var e = -cc.misc.radiansToDegrees(this.vector.signAngle(cc.v2(1, 0)));
            return e < 45 && e > -45 ? t = 1 : (e < -135 && e >= -180 || e > 135 && e <= 180) && (t = -1),
              t;
          }, e.prototype.changeRigidSize = function (t) {}, e.prototype.resetRigidSize = function () {},
          e;
      }(cc.Component);
    n.default = b;
    var S = function (t) {
      function e(e) {
        var n = t.call(this, "") || this;
        return n.soundName = "", n.soundDelay = .25, n.character = null, n.character = e,
          n;
      }
      return o(e, t), e.prototype.OnEnter = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.character.animator.stateChange(this);
      }, e.prototype.OnUpdate = function () {}, e;
    }(i.default);
    n.DefaultState = S;
    var C = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.name = "Idle", e;
      }
      return o(e, t), e.prototype.OnInit = function () {
        this.addTransition("Squat", this.character, this.character.squatCondition), this.addTransition("Move", this.character, this.character.moveCondition),
          this.addTransition("OppositeMove", this.character, this.character.oppositeMoveCondition),
          this.addTransition("Jump", this.character, this.character.jumpCondition);
      }, e.prototype.OnEnter = function () {
        this.character.fsmAct.isDefence() || this.character.fsmAct.isNormalAttack() || this.character.animator.stateChange(this);
      }, e.prototype.OnUpdate = function () {
        t.prototype.OnUpdate.call(this), this.character.faceToTarget();
      }, e;
    }(S);
    n.Idle = C;
    var I = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.name = "Move", e;
      }
      return o(e, t), e.prototype.OnInit = function () {
        this.addTransition("Squat", this.character, this.character.squatCondition), this.addTransition("Idle", this.character, this.character.idleCondition),
          this.addTransition("Jump", this.character, this.character.jumpCondition), this.addTransition("OppositeMove", this.character, this.character.oppositeMoveCondition);
      }, e.prototype.OnEnter = function () {
        t.prototype.OnEnter.call(this), this.character.animator.setTimeScale(c.AnimSpeed.SPEED2);
      }, e.prototype.OnUpdate = function () {
        t.prototype.OnUpdate.call(this), this.character.translate(), this.guidingCheck();
      }, e.prototype.guidingCheck = function () {
        this.character.gameCtrl.state == u.GameState.GUIDING && (l.default.getXdistance(this.character.node.getPosition(), this.character.target.node.getPosition()) <= 100 && (this.character.gameCtrl.guidingLayer.tipByStep(A.GuidingState.STEP2, this.character.gameCtrl.uiLayer.getNormalAttackButtonPos()),
          this.character.handleJoyStick(cc.Vec2.ZERO)));
      }, e;
    }(S);
    n.Move = I;
    var E = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.name = "OppositeMove", e;
      }
      return o(e, t), e.prototype.OnInit = function () {
        this.addTransition("Squat", this.character, this.character.squatCondition), this.addTransition("Idle", this.character, this.character.idleCondition),
          this.addTransition("Jump", this.character, this.character.jumpCondition), this.addTransition("Move", this.character, this.character.moveCondition);
      }, e.prototype.OnEnter = function () {
        t.prototype.OnEnter.call(this), this.character.speed = 8;
      }, e.prototype.OnExit = function () {
        this.character.speed = this.character.normalSpeed;
      }, e.prototype.OnUpdate = function () {
        t.prototype.OnUpdate.call(this), this.character.translate(null, !0);
      }, e;
    }(S);
    n.OppositeMove = E;
    var k = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.name = "Jump", e.limitHeight = 350, e.limitY = 0, e;
      }
      return o(e, t), e.prototype.OnInit = function () {
        this.addTransition("Idle", this.character, this.character.idleCondition), this.addTransition("Move", this.character, this.character.moveCondition),
          this.addTransition("OppositeMove", this.character, this.character.oppositeMoveCondition);
      }, e.prototype.OnEnter = function () {
        t.prototype.OnEnter.call(this), p.default.playEff("tiaoyue"), this.character.enableGhost(!0),
          this.limitY = this.character.onGroundY + this.limitHeight, this.jumpVector = this.character.vector.clone(),
          this.jump();
      }, e.prototype.OnExit = function () {
        this.character.enableGhost(!1);
      }, e.prototype.OnUpdate = function () {
        t.prototype.OnUpdate.call(this), l.default.getXdistance(this.character.node.getPosition(), this.character.target.node.getPosition()) > cc.visibleRect.width && this.character.vector.x * this.character.target.faceDirection > 0 && (this.character.rigid.linearVelocity = cc.v2(0, this.character.rigid.linearVelocity.y)),
          (this.character.node.y > this.limitY || 0 == Number(this.character.rigid.linearVelocity.y.toFixed())) && (this.character.rigid.linearVelocity = cc.v2(this.character.rigid.linearVelocity.x, -700)),
          this.character.isOnGround && this.character.fsmAct.isIdle() && this.character.forceIdle();
      }, e.prototype.jump = function () {
        this.character.isOnGround = !1, l.default.getXdistance(this.character.node.getPosition(), this.character.target.node.getPosition()) > cc.visibleRect.width && this.character.vector.x * this.character.target.faceDirection > 0 && (this.jumpVector.x = 0),
          this.character.node.y += 30, this.character.rigid.linearVelocity = cc.v2(1e3 * this.jumpVector.x, 1400);
      }, e;
    }(S);
    n.Jump = k;
    var T = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.name = "Squat", e;
      }
      return o(e, t), e.prototype.OnInit = function () {
        this.addTransition("Idle", this.character, this.character.idleCondition), this.addTransition("Jump", this.character, this.character.jumpCondition),
          this.addTransition("Move", this.character, this.character.moveCondition), this.addTransition("OppositeMove", this.character, this.character.oppositeMoveCondition);
      }, e.prototype.OnEnter = function () {
        this.character.fsmAct.forceDefence(null);
      }, e.prototype.OnUpdate = function () {
        t.prototype.OnUpdate.call(this), this.character.faceToTarget();
      }, e;
    }(S);
    n.Squat = T, cc._RF.pop();
  }, {
    "../../../FrameWork/Mgr/UmengMgr": "UmengMgr",
    "../../../FrameWork/User/User": "User",
    "../Constants": "Constants",
    "../UI/GuidingLayer": "GuidingLayer",
    "../UI/joystick/JoystickEnum": "JoystickEnum",
    "../config/SkillConfig": "SkillConfig",
    "../utils/EventCenter": "EventCenter",
    "../utils/ResCenter": "ResCenter",
    "../utils/SoundsManager": "SoundsManager",
    "../utils/StateMachine/State": "State",
    "../utils/StateMachine/StateMachine": "StateMachine",
    "../utils/Utils": "Utils",
    "./CharEffect": "CharEffect",
    "./CharacterActCollider": "CharacterActCollider",
    "./CharacterActionState": "CharacterActionState",
    "./CharacterAnimtor": "CharacterAnimtor",
    "./DinosaurProperty": "DinosaurProperty",
    "./SoundEffect": "SoundEffect"
  }],
  Common: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "50741XyLllMFLPp3iHvyV3u", "Common"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.createPrefab_csryw = function (t, e, n) {
        var o = cc.instantiate(t);
        return n ? n.addChild(o) : cc.director.getScene().getChildByName("Canvas").addChild(o),
          o.getComponent(e);
      }, t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  ConfigMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "3fbb2z7xENMerVXvy5w8XpQ", "ConfigMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../../FrameWork/Config/AppConfig"),
      r = t("./AIMiddleConfig"),
      i = t("./AINormalConfig"),
      s = t("./DinosaurConfig"),
      c = t("./GlobalConfig"),
      a = t("./LevelConfig"),
      l = t("./SkillConfig"),
      u = function () {
        function t() {}
        return t.loadAllConfig = function (t, e, n) {
          var l = this;
          void 0 === n && (n = 0);
          var u = [{
            url: o.default.ResServer_csryw + "/json/AIMiddlesConfig.json",
            cls: r.default
          }, {
            url: o.default.ResServer_csryw + "/json/AINormalsConfig.json",
            cls: i.default
          }, {
            url: o.default.ResServer_csryw + "/json/LevelsConfig.json",
            cls: a.default
          }, {
            url: o.default.ResServer_csryw + "/json/GlobalConfig.json",
            cls: c.default
          }, {
            url: o.default.ResServer_csryw + "/json/DinosaursConfig.json",
            cls: s.default
          }];
          0 != u.length ? cc.assetManager.loadRemote(u[n].url, function (o, r) {
            r && r.json && "" != r.json && (u[n].cls.getInstance().init(r.json), n++), n == u.length && t ? l.loadAllConfigLocal(t, e) : l.loadAllConfig(t, e, n);
          }) : this.loadAllConfigLocal(t, e);
        }, t.loadAllConfigLocal = function (t, e, n) {
          var o = this;
          void 0 === n && (n = 0);
          var r = [{
            url: "config/SkillsConfig",
            cls: l.default
          }];
          0 != r.length ? cc.resources.load(r[n].url, function (i, s) {
            s && s.json && "" != s.json && (r[n].cls.getInstance().init(s.json), n++), n == r.length && t ? t.call(e) : o.loadAllConfigLocal(t, e, n);
          }) : t && t.call(e);
        }, t;
      }();
    n.default = u, cc._RF.pop();
  }, {
    "../../../FrameWork/Config/AppConfig": "AppConfig",
    "./AIMiddleConfig": "AIMiddleConfig",
    "./AINormalConfig": "AINormalConfig",
    "./DinosaurConfig": "DinosaurConfig",
    "./GlobalConfig": "GlobalConfig",
    "./LevelConfig": "LevelConfig",
    "./SkillConfig": "SkillConfig"
  }],
  Constants: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "2a7ba87JTlI4oNuOgHwMqvO", "Constants"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.ADEvent = n.GameState = n.GameEvent = n.ButtonKeyName = n.UIEvent = void 0,
      function (t) {
        t.TOUCHDOWN = "TouchDown", t.TOUCHMOVE = "TouchMove", t.TOUCHUP = "TouchUp", t.GAMEFAIL = "GameFail",
          t.GAMEWIN = "GameWin", t.HEROUNLOCK = "HeroUnlock";
      }(n.UIEvent || (n.UIEvent = {})),
      function (t) {
        t.NORMALATTACK = "normalAtk", t.SKILL1 = "skill1", t.SKILL2 = "skill2", t.SKILL3 = "skill3",
          t.SKILL4 = "skill4";
      }(n.ButtonKeyName || (n.ButtonKeyName = {})),
      function (t) {
        t.END = "GameEnd", t.RELIVE = "Relive";
      }(n.GameEvent || (n.GameEvent = {})),
      function (t) {
        t[t.NONE = 0] = "NONE", t[t.FREE = 1] = "FREE", t[t.READY = 2] = "READY", t[t.START = 3] = "START",
          t[t.DEAD = 4] = "DEAD", t[t.END = 5] = "END", t[t.GUIDING = 6] = "GUIDING";
      }(n.GameState || (n.GameState = {})),
      function (t) {
        t.SHOWBANNER = "ShowBanner", t.HIDEBANNER = "HideBanner";
      }(n.ADEvent || (n.ADEvent = {})), cc._RF.pop();
  }, {}],
  CrazyClickView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "bdf5asO6qdOnITID9CnOaGt", "CrazyClickView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../../FrameWork/Mgr/GameMgr"),
      c = t("../../../../../FrameWork/User/User"),
      a = t("../event/ADPageEventEnum"),
      l = t("../event/ADPageEventMgr"),
      u = t("../wxViewBase"),
      d = cc._decorator,
      p = d.ccclass,
      y = d.property,
      h = d.disallowMultiple,
      _ = d.menu,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.progreeBar = null, e.clickButton = null, e.arrowNode = null, e.prizeView = null,
            e.prizeViewWin = null, e.prizeViewFail = null, e.animateSp = null, e.totalClickMax = 15,
            e.needClickMax = 10, e.prizeSureNode = null, e.moneyLab = null, e.isTouched_csryw = !1,
            e.timeCnt_csryw = 1, e.bannerClickTime_csryw = 3, e.isBarNeedReduce_csryw = !1,
            e;
        }
        return o(e, t), e.prototype.updateMoney = function (t) {
          this.moneyLab.getComponent(cc.Label).string = "" + t;
        }, e.prototype.initView_csryw = function () {
          t.prototype.initView_csryw.call(this), this.animateSp && (this.dragonBonesAct_csryw = this.animateSp.getComponent(dragonBones.ArmatureDisplay),
              this.dragonBonesAct_csryw.playAnimation("daiji", 1), this.dragonBonesAct_csryw.node.active = !0),
            this.clickButton.on("click", this.onListenerClick_csryw, this), this.prizeSureNode.on("click", this.onListenerClosePrizeWindow_csryw, this),
            this.progreeBar.progress = 0, this.clickButton.active = !0, this.prizeView.active = !1,
            this.isBarNeedReduce_csryw = !0, this.prizeViewWin.active = !0, this.prizeViewFail.active = !1,
            this.arrowNode && cc.tween(this.arrowNode).repeatForever(cc.tween().by(.14, {
              y: -80
            }).by(.14, {
              y: 80
            })).start(), this.bannerClickTime_csryw = Math.floor(5 * Math.random()) + 2, l.default.emitEvent_csryw(a.ADEvent.HIDE_BANNER);
        }, e.prototype.update = function (t) {
          this.isBarNeedReduce_csryw && (this.isTouched_csryw ? (this.timeCnt_csryw += t,
            this.timeCnt_csryw > 1.1 && (this.timeCnt_csryw = 0, this.isTouched_csryw = !1,
              this.dragonBonesAct_csryw && this.dragonBonesAct_csryw.playAnimation("daiji", 0))) : (this.progreeBar.progress > 0 ? this.progreeBar.progress -= t : this.progreeBar.progress = 0,
            this.clickNum_csryw = 0));
        }, e.prototype.onListenerClick_csryw = function () {
          var t = this;
          if (this.clickNum_csryw++, this.clickSum_csryw++, this.isTouched_csryw = !0, this.dragonBonesAct_csryw && this.dragonBonesAct_csryw.playAnimation("jida", 1),
            this.clickNum_csryw > this.needClickMax && (this.clickNum_csryw = this.needClickMax),
            this.clickNum_csryw >= this.bannerClickTime_csryw) {
            if (this.clickNum_csryw >= this.needClickMax && (this.clickNum_csryw = this.needClickMax - 1),
              this.ryw__bannerClicked_csryw) return;
            this.ryw__bannerClicked_csryw = !0, this.clickToBannerClickTime_csryw(), this.scheduleOnce(function () {
              t.BannerClicked_csryw();
            }, 2);
          } else this.clickSum_csryw > this.totalClickMax && (this.clickToTotalClickMax_csryw(),
            this.BannerClicked_csryw());
          this.progreeBar.progress = this.progreeBar.progress + 1 / this.needClickMax;
        }, e.prototype.clickToBannerClickTime_csryw = function () {
          i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianBanner_csryw && this.showBanner_csryw();
        }, e.prototype.clickToTotalClickMax_csryw = function () {
          i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianBanner_csryw && this.showBanner_csryw();
        }, e.prototype.onListenerClosePrizeWindow_csryw = function () {
          var t = Number(this.moneyLab.getComponent(cc.Label).string);
          isNaN(t) || (c.default.addMoney_csryw(t), s.default.getInstance_csryw().saveGameData_csryw()),
            this.hideBanner_csryw(), this.emitListenerEvent_csryw(this.EventEnumView_csryw.okBtn_csryw);
        }, e.prototype.ryw_OpenPrizeWindow_csryw = function () {
          this.prizeView.active = !0, this.dragonBonesAct_csryw && (this.dragonBonesAct_csryw.node.active = !1),
            this.clickButton.active = !1;
        }, e.prototype.BannerClicked_csryw = function () {
          this.isBarNeedReduce_csryw = !1, this.ryw__bannerClicked_csryw = !0, this.clickNum_csryw = this.needClickMax,
            this.progreeBar.progress = 1, this.ryw_OpenPrizeWindow_csryw();
        }, r([y({
          tooltip: "进度条",
          type: cc.ProgressBar
        })], e.prototype, "progreeBar", void 0), r([y({
          tooltip: "点击按钮",
          type: cc.Node
        })], e.prototype, "clickButton", void 0), r([y({
          tooltip: "箭头",
          type: cc.Node
        })], e.prototype, "arrowNode", void 0), r([y({
          tooltip: "结果显示",
          type: cc.Node
        })], e.prototype, "prizeView", void 0), r([y({
          tooltip: "结果显示Win",
          type: cc.Node
        })], e.prototype, "prizeViewWin", void 0), r([y({
          tooltip: "结果显示Fail",
          type: cc.Node
        })], e.prototype, "prizeViewFail", void 0), r([y({
          tooltip: "龙骨动画",
          type: cc.Node
        })], e.prototype, "animateSp", void 0), r([y({
          tooltip: "最大的次数",
          type: cc.Integer
        })], e.prototype, "totalClickMax", void 0), r([y({
          tooltip: "点击获奖的次数",
          type: cc.Integer
        })], e.prototype, "needClickMax", void 0), r([y({
          tooltip: "对话框确定按钮",
          type: cc.Node
        })], e.prototype, "prizeSureNode", void 0), r([y({
          tooltip: "金币数",
          type: cc.Node
        })], e.prototype, "moneyLab", void 0), e = r([p, h(), _("框架组件/狂点页面")], e);
      }(u.default);
    n.default = f, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../../FrameWork/User/User": "User",
    "../event/ADPageEventEnum": "ADPageEventEnum",
    "../event/ADPageEventMgr": "ADPageEventMgr",
    "../wxViewBase": "wxViewBase"
  }],
  CrazyView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "a6bfftpKMhAtay2zSptW7Bo", "CrazyView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./Progress"),
      s = t("../../utils/Utils"),
      c = t("../../../../FrameWork/User/User"),
      a = t("../../../../FrameWork/Mgr/GameMgr"),
      l = t("../../../../Platform/weixin/newFrame/src/event/ADPageEventMgr"),
      u = t("../../../../Platform/weixin/newFrame/src/event/ADPageEventEnum"),
      d = t("../../Constants"),
      p = t("../../utils/EventCenter"),
      y = t("../../utils/SoundsManager"),
      h = t("../../../../Platform/weixin/WXAPI"),
      _ = t("../../../../FrameWork/Config/AppSwitchConfig"),
      f = t("../../../../FrameWork/Util/AppPlatform"),
      w = cc._decorator,
      g = w.ccclass,
      m = w.property,
      v = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.hero1 = null, e.hero2 = null, e.dialog = null, e.eff = null, e.hpBar = null,
            e.btnNode = null, e.addHp = 50, e.hpMax = 1e3, e.hp = 0, e.dstHp = 0, e.once = !1,
            e.totaltime = 0, e._isShowVideo = !1, e._isTouchBanner = !1, e._isNeedShow = !1,
            e.inHit = !1, e.comboAnim = ["pugong0", "pugong1", "pugong2"], e.comboIndex = 0,
            e.beatenAnim = "shouji2", e.idleAnim = "daiji", e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            for (var t = this, e = 0; e < this.comboAnim.length; e++) {
              for (var n = e + 1; n < this.comboAnim.length; n++) this.hero1.setMix(this.comboAnim[e], this.comboAnim[n], .1);
              this.hero1.setMix(this.idleAnim, this.comboAnim[e], .1), this.hero1.setMix(this.comboAnim[e], this.idleAnim, .1);
            }
            this.hero2.setMix(this.idleAnim, this.beatenAnim, .1), this.hero2.setMix(this.beatenAnim, this.idleAnim, .1),
              this.hero1.setCompleteListener(function (e) {
                (e.animation ? e.animation.name : "") != t.idleAnim && (t.inHit = !1, t.hero1.node.stopAllActions(),
                  cc.tween(t.hero1.node).delay(.3).call(function () {
                    t.hero1.timeScale = 1, t.hero1.addAnimation(0, t.idleAnim, !0), t.comboIndex = 0;
                  }).start());
              }), this.hero1.setEventListener(function (e, n) {
                "attack" == n.data.name && (t.eff.node.active = !0, y.default.playEff("shouji"),
                  t.eff.setAnimation(0, "pugong1", !1), t.hero2.setAnimation(0, t.beatenAnim, !1),
                  t.hero2.node.stopAllActions(), cc.tween(t.hero2.node).delay(.5).call(function () {
                    t.hero2.addAnimation(0, t.idleAnim, !0);
                  }).start(), t._updateHp());
              }), this.hp = this.hpMax, this.dstHp = 100 * s.default.randomRange(3, 5), this.hpBar.setMaxValue(this.hpMax),
              this._isNeedShow = h.default.tryShowWXCrazyClick_csryw();
            var o = _.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianvideo_csryw;
            this._isNeedShow && 1 == o && (this.dstHp = 100 * s.default.randomRange(4, 5), this.btnNode.x = 250,
              this.btnNode.y = -160);
          }, e.prototype.start = function () {
            var t = this;
            l.default.emitEvent_csryw(u.PageEvent.SHOW_MYCrazy), p.default.on(d.UIEvent.TOUCHUP, this.handleInput, this);
            f.default.is_WECHAT_GAME_csryw() ? window.wx.onHide(function () {
              t._isTouchBanner = !0;
            }) : this._isTouchBanner = !0;
          }, e.prototype.update = function (t) {
            this.totaltime += t, this._addHp();
          }, e.prototype._addHp = function () {
            this.once || this.totaltime > .4 && this.hp > 0 && (this.hp += this.addHp, this.hp > this.hpMax && (this.hp = this.hpMax),
              this.hpBar.updateProgress(this.hp, !0), this.totaltime = 0);
          }, e.prototype.handleInput = function (t, e) {
            switch (e) {
              case d.UIEvent.TOUCHDOWN:
                break;

              case d.UIEvent.TOUCHUP:
                this.handleTouchUp(t);
            }
          }, e.prototype.handleTouchUp = function (t) {
            switch (t) {
              case d.ButtonKeyName.NORMALATTACK:
                this.onClickHit();
            }
          }, e.prototype.onClickHit = function () {
            this.once || this.inHit || (this.hero1.timeScale = 3, this.inHit = !0, this.hero1.node.stopAllActions(),
              this.hero1.addAnimation(0, this.comboAnim[this.comboIndex], !1), this.comboIndex++,
              this.comboIndex >= this.comboAnim.length && (this.comboIndex = 0));
          }, e.prototype.onClickConfirm = function () {
            c.default.addMoney_csryw(1e3), a.default.getInstance_csryw().saveGameData_csryw(),
              l.default.emitEvent_csryw(u.ADEvent.HIDE_BANNER), l.default.emitEvent_csryw(u.PageEvent.HIDE_MYCrazy),
              a.default.getInstance_csryw().loadTransitionScene();
          }, e.prototype._updateHp = function () {
            var t = this;
            if (this.hp -= 80, this.hp < 0 && (this.hp = 0), this.hpBar.updateProgress(this.hp, !0),
              this.hp <= this.dstHp && this._isNeedShow) {
              var e = _.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianvideo_csryw;
              if (console.log(" ********************        MyCrazyView   _updateHp   video= ", e),
                1 == e) 0 == this._isShowVideo && (this._isShowVideo = !0, h.default.showRewardedVideoAd_csryw(function (t) {}, function () {}));
              else if (0 == this._isTouchBanner) {
                l.default.emitEvent_csryw(u.ADEvent.SHOW_BANNER);
                var n = _.default.getInstance_csryw().getAppSwitchData_csryw().continueBannerHideTime_csryw;
                this.scheduleOnce(function () {
                  l.default.emitEvent_csryw(u.ADEvent.HIDE_BANNER);
                }, n);
              }
            }
            this.hp <= 0 && (this.once = !0, this.hero2.node.stopAllActions(), this.hero2.timeScale = .5,
              this.hero2.addAnimation(0, "siwang", !1), this.scheduleOnce(function () {
                t.dialog.active = !0;
              }, 1));
          }, r([m(sp.Skeleton)], e.prototype, "hero1", void 0), r([m(sp.Skeleton)], e.prototype, "hero2", void 0),
          r([m(cc.Node)], e.prototype, "dialog", void 0), r([m(sp.Skeleton)], e.prototype, "eff", void 0),
          r([m(i.default)], e.prototype, "hpBar", void 0), r([m(cc.Node)], e.prototype, "btnNode", void 0),
          e = r([g], e);
      }(cc.Component);
    n.default = v, cc._RF.pop();
  }, {
    "../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../FrameWork/User/User": "User",
    "../../../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../../../../Platform/weixin/WXAPI": "WXAPI",
    "../../../../Platform/weixin/newFrame/src/event/ADPageEventEnum": "ADPageEventEnum",
    "../../../../Platform/weixin/newFrame/src/event/ADPageEventMgr": "ADPageEventMgr",
    "../../Constants": "Constants",
    "../../utils/EventCenter": "EventCenter",
    "../../utils/SoundsManager": "SoundsManager",
    "../../utils/Utils": "Utils",
    "./Progress": "Progress"
  }],
  CustimWxApi: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "9655asLJnZI+aZSmbjEcdu3", "CustimWxApi"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.CustimWxTag = n.CustimWx = void 0;
    var o, r = t("../FrameWork/Util/AppPlatform"),
      i = function () {
        function t() {
          this._left = 0, this._top = 0, this._width = 0, this.customAd = null, this.isCustomAdState = 0;
        }
        return t.prototype.showCustimAd = function (t, e) {
          var n = this;
          void 0 === e && (e = !0), r.default.is_WECHAT_GAME_csryw() && (null == this.customAd ? (console.log("原生模板广告创建"),
            this.isCustomAdState = 1, console.log("ly++++++++++ ", this._left, this._top), this.customAd = window.wx.createCustomAd({
              adUnitId: t,
              adIntervals: 30,
              style: {
                left: this._left,
                top: this._top,
                width: this._width
              }
            }), this.customAd.onLoad(function () {
              console.log("原生模板广告加载成功"), 1 == n.isCustomAdState && (e ? (n.isCustomAdState = 2,
                n.customAd.show().then(function () {
                  console.log("原生模板广告显示"), 0 == n.isCustomAdState && n.hideCustimAd();
                }).catch(function (t) {
                  console.log("原生模板广告显示失败 ", t), n.customAd = null;
                })) : console.log("原生模板广告加载成功,但没有自动显示"));
            }), this.customAd.onClose(function () {
              console.log("原生模板广告关闭"), n.customAd = null, n.isCustomAdState = 0;
            }), this.customAd.onError(function (t) {
              console.log("生模板广告错误", t), n.customAd = null, n.isCustomAdState = 0;
            })) : 2 != this.isCustomAdState && (this.isCustomAdState = 2, console.log("准备==原生模板广告显示"),
            this.customAd.show().then(function () {
              console.log("原生模板广告显示"), 0 == n.isCustomAdState && n.hideCustimAd();
            }).catch(function (t) {
              console.log("原生模板广告显示失败 ", t), n.customAd = null;
            })));
        }, t.prototype.hideCustimAd = function () {
          this.customAd && 2 == this.isCustomAdState && (console.log("原生模板广告隐藏"), this.customAd.hide()),
            this.isCustomAdState = 0;
        }, t.prototype.destroyCustimAd = function () {
          this.customAd && (this.customAd.destroy(), this.customAd = null);
        }, t;
      }();
    n.CustimWx = i,
      function (t) {
        t[t.EnumCustimMainBefore1 = 0] = "EnumCustimMainBefore1", t[t.EnumCustimMainBefore2 = 1] = "EnumCustimMainBefore2",
          t[t.EnumCustimResultPop = 2] = "EnumCustimResultPop", t[t.EnumCustimInGameLeft = 3] = "EnumCustimInGameLeft",
          t[t.EnumCustimInGameRight = 4] = "EnumCustimInGameRight", t[t.EnumCustimSettleView = 5] = "EnumCustimSettleView";
      }(o = n.CustimWxTag || (n.CustimWxTag = {}));
    var s = function () {
      function t() {}
      return t.preLoadCustimAd = function (t, e, n, o) {
          void 0 === o && (o = 90);
          var r = this.custimWxAdUnitIds[t];
          r ? (console.log("预加载原生广告id ", r), this.custimWxMap[r] || (this.custimWxMap[r] = new i(),
              this.custimWxMap[r]._left = e, this.custimWxMap[r]._top = n, this.custimWxMap[r]._width = o),
            null === this.custimWxMap[r].customAd && this.custimWxMap[r].showCustimAd(r, !1)) : console.error("原生广告 没有找到广告id, ", t);
        }, t.showCustimAd = function (t, e, n) {
          var o = this.custimWxAdUnitIds[t];
          o ? (console.log("显示原生广告id ", o), this.custimWxMap[o] || (this.custimWxMap[o] = new i()),
            this.custimWxMap[o].showCustimAd(o, !0)) : console.error("原生广告 没有找到广告id, ", t);
        }, t.hideCustimAd = function (t) {
          var e = this.custimWxAdUnitIds[t];
          e ? this.custimWxMap[e] && this.custimWxMap[e].hideCustimAd() : console.error("原生广告 没有找到广告id, ", t);
        }, t.destroyCustimAd = function (t) {
          var e = this.custimWxAdUnitIds[t];
          e ? this.custimWxMap[e] && this.custimWxMap[e].destroyCustimAd() : console.error("原生广告 没有找到广告id, ", t);
        }, t.initMyCustimAds = function () {
          if (r.default.is_WECHAT_GAME_csryw()) {
            console.log("ly+++++++++ getSystemInfoSync", window.wx.getSystemInfoSync());
            var e = window.wx.getSystemInfoSync().windowWidth,
              n = window.wx.getSystemInfoSync().windowHeight;
            t.preLoadCustimAd(o.EnumCustimMainBefore1, e / 2 - 320, 10, 320), t.preLoadCustimAd(o.EnumCustimMainBefore2, e / 2, 10, 320),
              t.preLoadCustimAd(o.EnumCustimInGameLeft, 10, n / 4), t.preLoadCustimAd(o.EnumCustimInGameRight, e - 82, n / 4),
              t.preLoadCustimAd(o.EnumCustimSettleView, (e - 360) / 2, 10, 360), t.preLoadCustimAd(o.EnumCustimResultPop, (e - 320) / 2, 10, 320);
          }
        }, t.custimWxMap = {}, t.custimWxAdUnitIds = ["adunit-3aa4c49835fee514", "adunit-f88235f0f494d150", "adunit-349608b1f094d34d", "adunit-5887d480a0f8792e", "adunit-4453fb89adea7d22", "adunit-0de4f321457e8ec6"],
        t;
    }();
    n.default = s, cc._RF.pop();
  }, {
    "../FrameWork/Util/AppPlatform": "AppPlatform"
  }],
  CustomUser: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "398f5K52RlCSaBBOCpEJogt", "CustomUser"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.CustomData = n.DinosaurData = n.PreloadAssets = n.TempBuff = void 0;
    var o = t("../../../FrameWork/User/User"),
      r = function () {
        function t(t, e) {
          void 0 === t && (t = !1), void 0 === e && (e = !1), this.hpIncrease = 0, this.energyInterval = 0,
            this.energyIncrease = 0, this.atkIncrease = 0, this.equipHead = !1, this.equipArmor = !1,
            this.armorPathId = null, this.armorSlotName = null, this.equipHead = t, this.equipArmor = e;
        }
        return t.prototype.setEquipHead = function () {
          this.equipHead = !0;
        }, t.prototype.setEquipArmor = function () {
          this.equipArmor = !0;
        }, t.prototype.setArmor = function (t, e) {
          this.armorPathId = t, this.armorSlotName = e;
        }, t;
      }();
    n.TempBuff = r;
    var i = function () {
      return function () {
        this.gameBgs = [], this.roles = [];
      };
    }();
    n.PreloadAssets = i;
    var s = function () {
      return function () {
        this.id = 0, this.lvHp = 0, this.lvAtk = 0, this.videoTime = 0, this.isUnlock = !1,
          this.isBuy = !1, this.isInstall = !1, this.aiLevel = 0, this.aiLoseCount = 0;
      };
    }();
    n.DinosaurData = s;
    var c = function () {
      return function () {
        this.dinosaurData = [], this.unlockedLevel = 1, this.dinosaurId = 5, this.randomLevel = 0,
          this.randomLevels = [], this.levelModelNum = 1, this.rewardTimestamp = 0, this.isGuided = !1,
          this.dinosaurUnlockTimes = 0, this.isLookXSYD = !0, this.aiType = 1, this.aiLevel = -1,
          this.aiLoseCount = 0, this.isXSYD_ZuZhuang = !1, this.isXSYD_ChuZhan = !1;
      };
    }();
    n.CustomData = c;
    var a = function () {
      function t() {}
      return t.init = function (t) {
          if (t && t.customData)
            for (var e in o.default._gameData_csryw.customData) t.customData[e] && (o.default._gameData_csryw.customData[e] = t.customData[e]);
        }, t.setDinosaurId = function (t) {
          o.default._gameData_csryw.customData.dinosaurId = t;
        }, t.getDinosaurId = function () {
          return o.default._gameData_csryw.customData.dinosaurId;
        }, t.setUnlockedLevel = function (t) {
          o.default._gameData_csryw.customData.unlockedLevel = t;
        }, t.getUnlockedLevel = function () {
          return o.default._gameData_csryw.customData.unlockedLevel;
        }, t.setDinosaurData = function (t) {
          o.default._gameData_csryw.customData.dinosaurData = t;
        }, t.getDinosaurData = function () {
          return o.default._gameData_csryw.customData.dinosaurData;
        }, t.getDinosaurDataById = function (t) {
          for (var e = null, n = o.default._gameData_csryw.customData.dinosaurData, r = 0; r < n.length; r++) {
            var i = n[r];
            if (i.id == t) {
              e = i;
              break;
            }
          }
          return e;
        }, t.getRandomLevels = function () {
          return o.default._gameData_csryw.customData.randomLevels;
        }, t.setRandomLevels = function (t) {
          o.default._gameData_csryw.customData.randomLevels = t;
        }, t.setRandomLevel = function (t) {
          o.default._gameData_csryw.customData.randomLevel = t;
        }, t.getRandomLevel = function () {
          return o.default._gameData_csryw.customData.randomLevel;
        }, t.setLevelModel = function (t) {
          o.default._gameData_csryw.customData.levelModelNum = t;
        }, t.getLevelModel = function () {
          return o.default._gameData_csryw.customData.levelModelNum;
        }, t.setRewardTimestamp = function (t) {
          o.default._gameData_csryw.customData.rewardTimestamp = t;
        }, t.isGuided = function () {
          return o.default._gameData_csryw.customData.isGuided;
        }, t.setGuided = function () {
          o.default._gameData_csryw.customData.isGuided = !0;
        }, t.getRewardTimestamp = function () {
          return o.default._gameData_csryw.customData.rewardTimestamp;
        }, t.getDinosaurUnlockTimes = function () {
          return o.default._gameData_csryw.customData.dinosaurUnlockTimes;
        }, t.setDinosaurUnlockTimes = function (t) {
          o.default._gameData_csryw.customData.dinosaurUnlockTimes = t;
        }, t.setLookXSYD = function (t) {
          o.default._gameData_csryw.customData.isLookXSYD = t;
        }, t.getLookXSYD = function () {
          return o.default._gameData_csryw.customData.isLookXSYD;
        }, t.setAIType = function (t) {
          o.default._gameData_csryw.customData.aiType = t;
        }, t.getAIType = function () {
          return o.default._gameData_csryw.customData.aiType;
        }, t.setAILevel = function (t) {
          o.default._gameData_csryw.customData.aiLevel = t;
        }, t.subAILevel = function () {
          o.default._gameData_csryw.customData.aiLevel > 0 && o.default._gameData_csryw.customData.aiLevel--;
        }, t.getAILevel = function () {
          return o.default._gameData_csryw.customData.aiLevel;
        }, t.setAILoseCount = function (t) {
          o.default._gameData_csryw.customData.aiLoseCount = t;
        }, t.addAILoseCount = function () {
          o.default._gameData_csryw.customData.aiLoseCount++;
        }, t.getAILoseCount = function () {
          return o.default._gameData_csryw.customData.aiLoseCount;
        }, t.setXSYD_ZuZhuang = function (t) {
          o.default._gameData_csryw.customData.isXSYD_ZuZhuang = t;
        }, t.getXSYD_ZuZhuang = function () {
          return o.default._gameData_csryw.customData.isXSYD_ZuZhuang;
        }, t.setXSYD_ChuZhan = function (t) {
          o.default._gameData_csryw.customData.isXSYD_ChuZhan = t;
        }, t.getXSYD_ChuZhan = function () {
          return o.default._gameData_csryw.customData.isXSYD_ChuZhan;
        }, t.canGetGold = !0, t.canVideoGetGold = !0, t.tryDinosaurId = 0, t.bundles = [],
        t.isLose = !0, t.extraRewardGold = 0, t.curLevelComplete = !1, t.dinosaurUnlockMaxTime = 3,
        t.showLaunchUnlockOnce = !1, t.launchOnce = !1, t.bInitSubRes = !1, t.shenheDinosaurId = -1,
        t.fullAdCounter_csryw = 0, t.firstEnterMain = !0, t.firstEnterGame = !0, t.aiLoseMax = 3,
        t;
    }();
    n.default = a, cc._RF.pop();
  }, {
    "../../../FrameWork/User/User": "User"
  }],
  DamageInfo: [function (t, e, n) {
    "use strict";
    var o;
    cc._RF.push(e, "bded1ljNcVBRqKe7OkMrAGZ", "DamageInfo"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.DamageType = n.AttackType = void 0,
      function (t) {
        t[t.Close = 0] = "Close", t[t.Ranged = 1] = "Ranged";
      }(n.AttackType || (n.AttackType = {})),
      function (t) {
        t[t.Normal = 0] = "Normal", t[t.Hard = 1] = "Hard", t[t.FloatBack = 2] = "FloatBack",
          t[t.Float = 3] = "Float";
      }(o = n.DamageType || (n.DamageType = {}));
    var r = function () {
      return function () {
        this.targets = [], this.direction = 0, this.energyId = -1, this.hardValue = 0, this.selfHardValue = 0,
          this.damage = 0, this.ranged = !1, this.floating = !1, this.floatingSpeed = null,
          this.energy = 0, this.isMove = !1, this.canMove = !1, this.beatenBack = !0, this.damageType = o.Normal;
      };
    }();
    n.default = r, cc._RF.pop();
  }, {}],
  DateUtils: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "553a9c8nklAvIKumN8bOwCk", "DateUtils"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.DateUtils = void 0;
    var o = function () {
      function t() {}
      return t.getNowTime_csryw = function () {
        return new Date().getTime();
      }, t.formatTime2_csryw = function (t) {
        var e = "",
          n = t / 60,
          o = t - 60 * (n = parseInt(n + ""));
        return o = parseInt(o + ""), e += n > 9 ? n + "分" : "0" + n + "分", e += o > 9 ? o + "秒" : "0" + o + "秒";
      }, t.formatTime3_csryw = function (t) {
        var e = "",
          n = t / 60,
          o = t - 60 * (n = parseInt(n + ""));
        return o = parseInt(o + ""), e += n > 9 ? n + ":" : "0" + n + ":", e += o > 9 ? o : "0" + o;
      }, t.formatTime_csryw = function (t) {
        var e = "",
          n = t / 3600,
          o = (t - 3600 * (n = parseInt(n + ""))) / 60,
          r = t - 3600 * n - 60 * (o = parseInt(o + ""));
        return r = parseInt(r + ""), n > 0 && (e += n + ":"), e += o > 9 ? o + ":" : "0" + o + ":",
          e += r > 9 ? r + "" : "0" + r;
      }, t.millisecondsToDate_csryw = function (t, e) {
        var n = new Date(t),
          o = {
            "M+": n.getMonth() + 1,
            "d+": n.getDate(),
            "h+": n.getHours(),
            "H+": n.getHours(),
            "m+": n.getMinutes(),
            "s+": n.getSeconds(),
            "q+": Math.floor((n.getMonth() + 3) / 3),
            S: n.getMilliseconds()
          };
        for (var r in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))),
            /(E+)/.test(e) && (e = e.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + {
              0: "日",
              1: "一",
              2: "二",
              3: "三",
              4: "四",
              5: "五",
              6: "六"
            } [n.getDay() + ""])), o) new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? o[r] : ("00" + o[r]).substr(("" + o[r]).length)));
        return e;
      }, t.convertDateFromString_csryw = function (t) {
        if (t) {
          var e = t.split(" ")[0].split("/");
          return new Date(e[0], e[1] - 1, e[2]);
        }
      }, t.getMonTimeByNowTime_csryw = function () {
        var t = new Date(),
          e = t.getDay();
        return 0 == e && (e = 7), t.setHours(0, 0, 0, 0), new Date(t.getTime() - 24 * (e - 1) * 60 * 60 * 1e3).getTime();
      }, t.isSameDay_csryw = function (t, e) {
        void 0 === e && (e = Date.now());
        var n = Number(t),
          o = Number(e);
        if (n && o) {
          var r = new Date(n),
            i = new Date(o);
          return r.setHours(0, 0, 0, 0) == i.setHours(0, 0, 0, 0);
        }
        return !1;
      }, t.getMonthWeek_csryw = function () {
        var t = new Date(),
          e = (t.getFullYear(), t.getDay(), t.getDate(), t.getDay()),
          n = t.getDate();
        return Math.ceil((n + 6 - e) / 7);
      }, t;
    }();
    n.DateUtils = o, cc._RF.pop();
  }, {}],
  DebugInfoMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "0d2f3IqZ7JJM78bv3EoAtkN", "DebugInfoMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../Config/AppSwitchConfig"),
      r = t("../Config/AppConfig"),
      i = t("../Util/AppPlatform"),
      s = t("../Util/Utilit"),
      c = t("./WudianMgr"),
      a = t("../NetWork/HttpUnit"),
      l = t("../Util/DateUtils"),
      u = t("../Event/EventMgr"),
      d = t("../Event/EventEnum"),
      p = function () {
        function t() {}
        return t.setDebug_csryw = function () {
            var t = this;
            if (1 == o.default.getInstance_csryw().getAppSwitchData_csryw().debuginfo_csryw) {
              this.isOpenDebug = !0, u.default.onEvent_csryw(d.ryw_Event.ryw_App_OnUpdateIpBlockState_csryw, function () {
                t.isNetIpBlockState = !0, t.debugPanel_csryw.active && (t.updateFrameInfo_csryw(),
                  t.updateItem_csryw());
              }, this), u.default.onEvent_csryw(d.ryw_Event.ryw_PlatformLoginState_csryw, function (e) {
                e.state;
                var n = e.info;
                t.addDebugInfo_csryw(n);
              }, this), u.default.onEvent_csryw(d.ryw_Event.ryw_NetLoginState_csryw, function (e) {
                e.state;
                var n = e.info;
                t.addDebugInfo_csryw(n);
              }, this), u.default.onEvent_csryw(d.ryw_Event.ryw_NetUserDataState_csryw, function (e) {
                e.state;
                var n = e.info;
                t.addDebugInfo_csryw(n);
              }, this), u.default.onEvent_csryw(d.ryw_Event.ryw_Umeng_csryw, function (e) {
                var n = e.event;
                t.debugUmengInfoList_csryw[n] ? t.debugUmengInfoList_csryw[n] = t.debugUmengInfoList_csryw[n] + 1 : t.debugUmengInfoList_csryw[n] = 1,
                  t.updateItem_csryw();
              }, this), console.log("启动了debug展示");
              var e = cc.view.getVisibleSize(),
                n = cc.view.getFrameSize();
              console.log(n), console.log(e), this.debugNode_csryw = new cc.Node(), cc.game.addPersistRootNode(this.debugNode_csryw),
                this.debugNode_csryw.width = e.width, this.debugNode_csryw.height = e.height, this.debugNode_csryw.anchorX = 0,
                this.debugNode_csryw.anchorY = 0, this.debugNode_csryw.x = 0, this.debugNode_csryw.y = 0;
              var i = cc.size(80, 70),
                s = this.createNode_csryw(this.debugNode_csryw, cc.v2(0, e.height - i.height), cc.Color.WHITE);
              s.setContentSize(i), s.on(cc.Node.EventType.TOUCH_START, function (t, e) {}, this),
                s._touchListener.onTouchBegan = function (e, n) {
                  var o = s.convertToNodeSpaceAR(e.getLocation());
                  if (!(o.x < 0 || o.y < 0 || o.x > i.width || o.y > i.height)) {
                    if (t.isOpenStartClick_csryw) t.debugPanel_csryw.active || (t.updateFrameInfo_csryw(),
                      t.updateItem_csryw(), t.debugPanel_csryw.active = !0);
                    else {
                      var r = l.DateUtils.getNowTime_csryw();
                      console.log(t.touchClickSum_csryw), r - t.clickTime_csryw <= 500 ? (t.touchClickSum_csryw = t.touchClickSum_csryw + 1,
                          t.touchClickSum_csryw > 10 && (t.isOpenStartClick_csryw = !0)) : t.touchClickSum_csryw = 0,
                        t.clickTime_csryw = r;
                    }
                    return !0;
                  }
                }, s._touchListener.setSwallowTouches(!1);
              var c = cc.size(.98 * e.width, .7 * e.height);
              this.debugPanel_csryw = this.createNode_csryw(this.debugNode_csryw, cc.v2((e.width - c.width) / 2, (e.height - c.height) / 2), cc.Color.WHITE, c),
                this.debugPanel_csryw.active = !1, this.debugPanel_csryw.addComponent(cc.Button);
              var p = this.createNode_csryw(this.debugPanel_csryw, cc.v2(0, 0), cc.Color.GRAY, c);
              this.scrollview_csryw = p.addComponent(cc.ScrollView), this.scrollview_csryw.horizontal = !1,
                this.scrollview_csryw.vertical = !0, this.scrollview_csryw.inertia = !0, this.scrollview_csryw.brake = .75;
              var y = this.createNode_csryw(p, cc.v2(0, 0), cc.Color.WHITE);
              y.setContentSize(c), y.addComponent(cc.Mask), y.anchorY = 1, y.y = c.height, this.content_csryw = this.createNode_csryw(y, cc.v2(0, 0), cc.Color.GRAY, c),
                this.content_csryw.anchorY = 1, this.scrollview_csryw.content = this.content_csryw,
                this.createButton_csryw(this.debugPanel_csryw, cc.v2(0, c.height), "关闭", cc.color(255, 180, 180), cc.Color.RED, cc.size(100, 70), function () {
                  t.debugPanel_csryw.active = !1;
                }), this.createButton_csryw(this.debugPanel_csryw, cc.v2(c.width - 170, c.height), "清理缓存", cc.color(255, 180, 180), cc.Color.RED, cc.size(170, 70), function () {
                  1 != o.default.getInstance_csryw().getAppSwitchData_csryw().isNetWorkGame_csryw ? cc.sys.localStorage.setItem("data" + r.default.AppID_csryw, "{}") : a.default.saveGameData_csryw("{}", function (t) {
                    1 == t.code ? console.log("存档成功") : console.log("存档失败");
                  }, function (t) {
                    console.log("存档失败");
                  }), t.showToast_csryw("清理用户数据，并提交！请重启");
                });
              var h = cc.size(.9 * c.width, 100);
              this.showInfoNode_csryw = this.createNode_csryw(this.debugNode_csryw, cc.v2(e.width / 2, e.height / 2), cc.color(175, 100, 170), h),
                this.showInfoNode_csryw.anchorX = .5, this.showInfoNode_csryw.anchorY = .5, this.showInfoLabel_csryw = this.createLabel_csryw(this.showInfoNode_csryw, cc.v2(0, 0), "", cc.Color.RED).getComponent(cc.Label),
                this.showInfoLabel_csryw.node.anchorX = .5, this.showInfoLabel_csryw.node.anchorY = .5,
                this.showInfoNode_csryw.active = !1;
            }
          }, t.addDebugInfo_csryw = function (t) {
            this.isOpenDebug && this.debugInfoList_csryw.push(t);
          }, t.updateFrameInfo_csryw = function () {
            var t = this;
            this.debugFrameInfoList_csryw = [];
            (function () {
              var e = s.default.checkVersions_csryw(),
                n = "[]";
              n = i.default.is_TT_GAME_csryw() ? "ttcfg:<" + o.default.getInstance_csryw().getAppSwitchData_csryw().ttcfg_csryw.ttversions_csryw + ">" : i.default.is_OPPO_GAME_csryw() ? "oppocfg:<" + o.default.getInstance_csryw().getAppSwitchData_csryw().oppocfg_csryw.oppoversions_csryw + ">" : i.default.is_QQ_PLAY_csryw() ? "qqcfg:<" + o.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw + ">" : i.default.is_WECHAT_GAME_csryw() ? "vivocfg:<" + o.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.vivoversions_csryw + ">" : "version:<" + o.default.getInstance_csryw().getAppSwitchData_csryw().version_csryw + ">";
              var c = "游戏名字:[" + r.default.GameName_csryw + "],gameid:[" + r.default.gameid_csryw + "]\n";
              c = (c = c + r.default.ResServer_csryw + "\n") + "本地版本号:[" + r.default.Versions_csryw + "]\n远端版本号:[" + n + "]\n版本比较结果:" + (e ? "true" : "false"),
                t.debugFrameInfoList_csryw.push(c);
            })(),
            function () {
              var e = 1 == o.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
                n = o.default.getInstance_csryw().getAppSwitchData_csryw().wudianTimeAvaliable_csryw,
                r = c.default.ryw_GetIpBlocked_csryw(),
                s = i.default.getLaunchOptionsSync_csryw().scene;
              i.default.is_TT_GAME_csryw() && (e = !0, n = !0);
              for (var a = !0, l = o.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw, u = 0; u < l.length; ++u) s == l[u] && (a = !1);
              var d = e && a && r && n,
                p = "ip屏蔽接口调用:" + (t.isNetIpBlockState ? "成功" : "失败") + "\n误点最终结果：[" + (d ? "有" : "没有") + "]\n当前场景值:[" + s + "]\nip没有屏蔽:[" + (r ? "是" : "不是") + "]\n场景没有屏蔽:[" + (a ? "是" : "不是") + "]\n误点开关:[" + (e ? "打开" : "关闭") + "],\n时间开关:[" + (n ? "打开" : "关闭") + "]";
              t.debugFrameInfoList_csryw.push(p);
            }();
          }, t.showToast_csryw = function (t) {
            var e = this;
            cc.Tween.stopAllByTarget(this.showInfoNode_csryw), this.showInfoLabel_csryw.string = t,
              this.showInfoNode_csryw.active = !0, this.showInfoNode_csryw.opacity = 0, this.showInfoNode_csryw.scale = .75,
              cc.tween(this.showInfoNode_csryw).to(.25, {
                opacity: 255,
                scale: 1
              }, {
                easing: "backOut"
              }).delay(2).call(function () {
                e.showInfoNode_csryw.active = !1;
              }).start();
          }, t.updateItem_csryw = function () {
            for (var t = [], e = 0; e < this.debugFrameInfoList_csryw.length; e++) {
              var n = this.debugFrameInfoList_csryw[e];
              t.push(n);
            }
            var o = "友盟统计开始：\n";
            for (var r in this.debugUmengInfoList_csryw) {
              if (Object.prototype.hasOwnProperty.call(this.debugUmengInfoList_csryw, r)) o = "事件：" + o + r + ",次数: " + (n = this.debugUmengInfoList_csryw[r]) + "\n";
            }
            o += "友盟统计结束!", t.push(o);
            for (e = 0; e < this.debugInfoList_csryw.length; e++) {
              n = this.debugInfoList_csryw[e];
              t.push(n);
            }
            var i = t.length - this.debugLabelList_csryw.length;
            if (i > 0)
              for (e = 0; e < i; e++) {
                (a = this.createLabel_csryw(this.content_csryw, cc.v2(0, 0), "", cc.Color.BLACK).getComponent(cc.Label)).node.width = this.content_csryw.width,
                  a.overflow = cc.Label.Overflow.RESIZE_HEIGHT, a.horizontalAlign = cc.Label.HorizontalAlign.LEFT,
                  a.node.anchorY = 1, this.debugLabelList_csryw.push(a);
              }
            for (e = 0; e < this.debugLabelList_csryw.length; e++) {
              (n = this.debugLabelList_csryw[e]).node.active = !1;
            }
            var s = 0,
              c = !1;
            for (e = 0; e < t.length; e++) {
              var a;
              n = t[e];
              (a = this.debugLabelList_csryw[e]).string = n, a.node.y = -s, a.node.active = !0,
                a._forceUpdateRenderData(), s = s + a.node.height + 5, c ? (c = !1, a.node.color = cc.color(0, 0, 0)) : (c = !0,
                  a.node.color = cc.color(122, 22, 22));
            }
            this.content_csryw.height = s;
          }, t.createLabel_csryw = function (t, e, n, o) {
            var r = this.createNode_csryw(t, e, o),
              i = r.addComponent(cc.Label);
            return i.fontSize = 30, i.lineHeight = 32, i.string = n, r;
          }, t.createNode_csryw = function (t, e, n, o) {
            var r = new cc.Node();
            return o && (r.setContentSize(o), r.addComponent(cc.Sprite).spriteFrame = this.createSpriteFrame_csryw(o)),
              r.color = n, t.addChild(r), r.x = e.x, r.y = e.y, r.anchorX = 0, r.anchorY = 0,
              r;
          }, t.createButton_csryw = function (t, e, n, o, r, i, s) {
            var c = this.createNode_csryw(t, e, o, i);
            return c.addComponent(cc.Button), c.color = o, s && c.on("click", s, this), this.createLabel_csryw(t, e, n, r),
              c;
          }, t.createSpriteFrame_csryw = function (t) {
            for (var e = new cc.Texture2D(), n = new cc.SpriteFrame(), o = t.width * t.height * 4, r = new Uint8Array(o), i = 0; i < o; i += 4) r[i] = 255,
              r[i + 1] = 255, r[i + 2] = 255, r[i + 3] = 255;
            return e.initWithData(r, cc.Texture2D.PixelFormat.RGBA8888, t.width, t.height),
              n.setTexture(e), n.setRect(cc.rect(0, 0, t.width, t.height)), n;
          }, t.debugNode_csryw = null, t.debugPanel_csryw = null, t.scrollview_csryw = null,
          t.content_csryw = null, t.debugInfoList_csryw = new Array(), t.debugFrameInfoList_csryw = new Array(),
          t.debugLabelList_csryw = new Array(), t.debugUmengInfoList_csryw = {}, t.showInfoNode_csryw = null,
          t.showInfoLabel_csryw = null, t.isOpenDebug = !1, t.isOpenStartClick_csryw = !1,
          t.touchClickSum_csryw = 0, t.clickTime_csryw = 0, t.isNetIpBlockState = !1, t;
      }();
    n.default = p, cc._RF.pop();
  }, {
    "../Config/AppConfig": "AppConfig",
    "../Config/AppSwitchConfig": "AppSwitchConfig",
    "../Event/EventEnum": "EventEnum",
    "../Event/EventMgr": "EventMgr",
    "../NetWork/HttpUnit": "HttpUnit",
    "../Util/AppPlatform": "AppPlatform",
    "../Util/DateUtils": "DateUtils",
    "../Util/Utilit": "Utilit",
    "./WudianMgr": "WudianMgr"
  }],
  DialogLoading: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "da62cRX36FO47RxnGLVZx5L", "DialogLoading");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../Base/FMViewBase"),
      s = t("../../Util/AppPlatform"),
      c = cc._decorator,
      a = c.ccclass,
      l = c.property,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.bgNode = null, e.labelInfo = null, e.typeNode1 = null, e.typeNode2 = null,
            e.butLoad1 = null, e.butVisitor1 = null, e.butLoad2 = null, e.EventEnumView_csryw = {
              ClickVisitor: "ClickVisitor",
              ClickLoad: "ClickLoad"
            }, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            var t = this;
            this.butLoad1.on("click", function () {
              t.closeView(), t.emitListenerEvent_csryw(t.EventEnumView_csryw.ClickLoad);
            }, this), this.butVisitor1.on("click", function () {
              t.closeView(), t.emitListenerEvent_csryw(t.EventEnumView_csryw.ClickVisitor);
            }, this), this.butLoad2.on("click", function () {
              t.closeView(), t.emitListenerEvent_csryw(t.EventEnumView_csryw.ClickLoad);
            }, this), s.default.is_Android_csryw() || s.default.is_Iphone_csryw() ? (this.typeNode1.active = !1,
              this.typeNode2.active = !0) : (this.typeNode1.active = !0, this.typeNode2.active = !1);
          }, e.prototype.openView = function (t) {
            this._initView_csryw(), this.labelInfo.string = t, cc.Tween.stopAllByTarget(this.bgNode),
              this.bgNode.opacity = 0, this.bgNode.scale = .75, cc.tween(this.bgNode).to(.25, {
                opacity: 255,
                scale: 1
              }, {
                easing: "backOut"
              }).call(function () {}).start(), this.node.active = !0;
          }, e.prototype.closeView = function () {
            this.node.active = !1;
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          r([l({
            tooltip: "背景图",
            type: cc.Node
          })], e.prototype, "bgNode", void 0), r([l({
            tooltip: "错误文本",
            type: cc.Label
          })], e.prototype, "labelInfo", void 0), r([l({
            tooltip: "第一种类型",
            type: cc.Node
          })], e.prototype, "typeNode1", void 0), r([l({
            tooltip: "第二种类型",
            type: cc.Node
          })], e.prototype, "typeNode2", void 0), r([l({
            tooltip: "类型1中重新登录",
            type: cc.Node
          })], e.prototype, "butLoad1", void 0), r([l({
            tooltip: "类型1中游客模式",
            type: cc.Node
          })], e.prototype, "butVisitor1", void 0), r([l({
            tooltip: "类型2中重新登录",
            type: cc.Node
          })], e.prototype, "butLoad2", void 0), e = r([a], e);
      }(i.default);
    n.default = u, cc._RF.pop();
  }, {
    "../../Base/FMViewBase": "FMViewBase",
    "../../Util/AppPlatform": "AppPlatform"
  }],
  DinosaurConfig: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "78a0eHDBwRAZpyzkgD11Y3T", "DinosaurConfig"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.DinosaurConfigData = void 0;
    var o = function () {
      return function () {};
    }();
    n.DinosaurConfigData = o;
    var r = function () {
      function t() {
        this.bDisposeData = !1, this._data = new Array();
      }
      return t.getInstance = function () {
        return null == t._instance && (t._instance = new t()), t._instance;
      }, t.prototype.init = function (t) {
        this._data = t;
      }, t.prototype.getDatas = function () {
        return this._data;
      }, t.prototype.getData = function (t) {
        return this._data[t];
      }, t.prototype.getDataLength = function () {
        return this._data.length;
      }, t.prototype.getDataById = function (t) {
        for (var e = null, n = 0, o = this._data; n < o.length; n++) {
          var r = o[n];
          if (t == r.Id) {
            e = r;
            break;
          }
        }
        return e;
      }, t.prototype.shenhe = function () {
        !1 === this.bDisposeData && (this._data.splice(0, 1), this.bDisposeData = !0);
      }, t;
    }();
    n.default = r, cc._RF.pop();
  }, {}],
  DinosaurJigsaw: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "baa7e5uUutC5aaHscBoKe0J", "DinosaurJigsaw");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../FrameWork/Event/EventEnum"),
      c = t("../../../../FrameWork/Event/EventMgr"),
      a = t("../../../../FrameWork/Mgr/UmengMgr"),
      l = t("../../../../FrameWork/Mgr/WudianMgr"),
      u = t("../../../../Platform/weixin/newFrame/src/event/ADPageEventEnum"),
      d = t("../../../../Platform/weixin/newFrame/src/event/ADPageEventMgr"),
      p = t("../../../../Platform/weixin/WXAPI"),
      y = t("../../core/CustomUser"),
      h = t("../../utils/ResCenter"),
      _ = t("../../utils/SoundsManager"),
      f = t("./PartGrating"),
      w = cc._decorator,
      g = w.ccclass,
      m = w.property,
      v = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.installNode = null, e.normalNode = null, e.outlineNode = null, e.instanllEffect = null,
            e.id = 0, e.clickButton = null, e.downButton = null, e.backButton = null, e.gratingList = [],
            e.showNodelist = [], e.normalTab = [], e.curPartIndex = 0, e._data = null, e._cumulativeTipsTime = 5,
            e._tipsTime = 0, e._isFirstInstall = !1, e._lastTime = 0, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            this.instanllEffect && (this.instanllEffect.active = !1);
          }, e.prototype.onEnable = function () {
            c.default.onEvent_csryw(s.ryw_Event.ryw_Lobby_SelectJigsaw_csryw, this.onShowDinosaurImg, this),
              c.default.onEvent_csryw(s.ryw_Event.ryw_Lobby_CancleJigsaw_csryw, this.onCancleTip, this),
              c.default.onEvent_csryw(s.ryw_Event.ryw_Lobby_PartGrating_End_csryw, this.PartingEnd, this);
          }, e.prototype.onDisable = function () {
            c.default.offEvent_csryw(s.ryw_Event.ryw_Lobby_SelectJigsaw_csryw, this.onShowDinosaurImg, this),
              c.default.offEvent_csryw(s.ryw_Event.ryw_Lobby_CancleJigsaw_csryw, this.onCancleTip, this),
              c.default.offEvent_csryw(s.ryw_Event.ryw_Lobby_PartGrating_End_csryw, this.PartingEnd, this);
          }, e.prototype.init = function (t) {
            this._data = t;
          }, e.prototype.update = function (t) {
            this._tipsTime += t, this._tipsTime >= this._cumulativeTipsTime && (c.default.emitEvent_csryw(s.ryw_Event.ryw_Lobby_DinosaurShowTipsFragment_csryw),
              this._tipsTime = 0);
          }, e.prototype.start = function () {
            var t = this;
            _.default.playMusic("bgmBfBattle"), a.UmengMgr.sendEvent_csryw(a.StatsFrameWorkEvent.Total_assembleNumber, {
              dinosaur: "dinosaur_" + this.id
            });
            var e = new Date();
            this._lastTime = e.getTime(), this._data.isInstall() ? (this.backButton.active = !0,
                this._isFirstInstall = !1) : (this.backButton.active = !1, this._isFirstInstall = !0),
              this.dinosaurChildImgIndex(this.normalNode, this.normalTab), this.outlineNode.children.forEach(function (t, e) {
                t.active = !1;
              }), _.default.playEff("computer"), this.scheduleOnce(function () {
                _.default.playEff("combineVoice"), t.scheduleOnce(function () {
                  _.default.playEff("combineStart");
                }, .5);
              }, .2);
            var n = .5;
            y.default.getLookXSYD() && (h.default.loadPrefabsInMainBundle("prefab/xinshouyindaoNode", function (e) {
              var n = cc.instantiate(e);
              t.node.addChild(n), t.scheduleOnce(function () {
                n.removeFromParent();
              }, 1.5);
            }, this), y.default.setLookXSYD(!1), n = 1.5), this.scheduleOnce(function () {
              t.onPartGrating(t.curPartIndex);
            }, n);
          }, e.prototype.PartingEnd = function () {
            var t = new Date(),
              e = t.getTime() - this._lastTime;
            if (this._lastTime = t.getTime(), a.UmengMgr.sendEvent_csryw(a.StatsFrameWorkEvent.Event_DinosaurFinish, {
                dinosaur: "dinosaur_" + this.id,
                step: "setp" + this.curPartIndex,
                time_pinzhuang: "" + e / 1e3
              }), this.curPartIndex += 1, cc.log("PartingEnd  this.curPartIndex = ", this.curPartIndex),
              this.curPartIndex == this.gratingList.length - 1 && (p.default.showInterstitialAd_csryw(function () {}, function () {}),
                console.error("LYFFFFFFFFFFFFFFFFFFFFFFFFF")), this.curPartIndex >= this.gratingList.length) return cc.log(" 所有图片都已经拼接完成"),
              void this.onInstallDinosaurOver();
            var n = function () {
              l.default.wudianFlag_csryw && 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.PinzhuangDaochuKaiguan_csryw && d.default.emitEvent_csryw(u.PageEvent.SHOW_EXPORT_INSTALL);
            };
            0 == this._isFirstInstall && (cc.log("显示ad"), l.default.wudianFlag_csryw && 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.PinzhuangChapingKaiguan_csryw ? p.default.showInterstitialAd_csryw(function () {
              n();
            }, function () {
              n();
            }) : n()), this.onPartGrating(this.curPartIndex);
          }, e.prototype.onInstallDinosaurOver = function () {
            for (var t = this, e = 0; e < this.gratingList.length; e++) {
              this.gratingList[e].active = !1;
            }
            _.default.playEff("Roar"), this.outlineNode.active = !1, cc.tween(this.installNode).to(1, {
              x: 0,
              y: 0
            }).call(function () {
              t.node.destroy(), c.default.emitEvent_csryw(s.ryw_Event.ryw_Lobby_DinosaurInstallEnd_csryw);
            }).start();
          }, e.prototype.onPartGrating = function (t) {
            for (var e = this, n = 0; n < this.gratingList.length; n++) {
              var o = this.gratingList[n];
              if (t == n) o.getComponent(f.default).onEnterAction();
              else if (o.active) o.getComponent(f.default).onExitAction();
            }
            _.default.playEff("combineNextStep"), this.showNodelist[t] && cc.tween(this.installNode).to(1, {
              x: this.showNodelist[t].x,
              y: this.showNodelist[t].y
            }).call(function () {
              for (var n = 0; n < e.normalTab.length; n++)
                for (var o = e.normalTab[n], r = 0; r < o.length; r++) {
                  var i = o[r],
                    s = e.normalNode.getChildByName(i);
                  s && (s.active = n <= t);
                }
            }).start();
          }, e.prototype.onTestBtnClick = function () {}, e.prototype.dinosaurChildImgIndex = function (t, e) {
            var n = {},
              o = [];
            t.children.forEach(function (t, e) {
              t.opacity = 100;
              var r = t.name,
                i = r.indexOf("_");
              if (i > -1 && i < r.length) {
                var s = Number(r.substring(0, i));
                null == n[s] && (n[s] = [], o.push(s)), n[s].push(r);
              }
            }), o = o.sort(function (t, e) {
              return t > e ? 1 : -1;
            });
            for (var r = 0; r < o.length; r++) {
              var i = n[o[r]];
              e.push(i);
            }
          }, e.prototype.onNextJigsawName = function () {
            return 0 == this.normalTab.length ? (console.log(" 所有的碎片都已经组装完成"), null) : 0 != this.normalTab[0].length ? this.normalTab[0][0] : (console.log("  当前部位的所有碎片已经组装完成，挑选下个部位碎片"),
              this.normalTab.shift(), void this.onNextJigsawName());
          }, e.prototype.onShowDinosaurImg = function (t) {
            if (null != t) {
              this._tipsTime = 0, c.default.emitEvent_csryw(s.ryw_Event.ryw_Lobby_DinosaurHideTipsFragment_csryw);
              var e = this.outlineNode.getChildByName(t.name);
              this.curImgName = t.name, this.curImgNode = t, e && (e.active = !0), _.default.playEff("pickupParts");
            }
          }, e.prototype.onCancleTip = function () {
            this.outlineNode.children.forEach(function (t, e) {
              t.active = !1;
            }), this.onCheckArea();
          }, e.prototype.onCheckArea = function () {
            var t = this.normalNode.getChildByName(this.curImgName),
              e = this.curImgNode,
              n = t.parent.convertToWorldSpaceAR(t.position),
              o = this.curImgNode.parent.convertToWorldSpaceAR(this.curImgNode.position);
            console.log(" onCheckArea   curImgNode=", this.curImgNode.name);
            var r = !1;
            Math.abs(n.x - o.x) < 50 && Math.abs(n.y - o.y) < 50 ? (this.onDownImg(), r = !0) : _.default.playEff("combineMsg"),
              c.default.emitEvent_csryw(s.ryw_Event.ryw_Lobby_CheckArea_csryw, e, r);
          }, e.prototype.onDownImg = function () {
            if (null != this.curImgName) {
              var t = this.outlineNode.getChildByName(this.curImgName);
              t && (t.active = !1);
              var e = this.normalNode.getChildByName(this.curImgName);
              e && (e.opacity = 255), this.curImgName = null, this.curImgNode = null, this.playInstallEff(e);
            }
          }, e.prototype.playInstallEff = function (t) {
            if (null != this.instanllEffect) {
              var e = cc.instantiate(this.instanllEffect);
              e.active = !0;
              var n = this.normalNode.convertToWorldSpaceAR(t.position),
                o = this.installNode.parent.convertToWorldSpaceAR(this.installNode.position);
              e.setPosition(n.x - o.x, n.y - o.y), this.installNode.addChild(e, 2);
              var r = e.getComponent(sp.Skeleton);
              r.setAnimation(0, "play", !1), r.setCompleteListener(function (t) {
                e.removeFromParent(), e.destroy();
              }), Math.random() - .5 > 0 ? _.default.playEff("combineASB1") : _.default.playEff("combineASB2");
            }
          }, e.prototype.onBackCall = function () {
            this.curPartIndex >= this.gratingList.length ? cc.log(" 所有图片都已经拼接完成") : this.node.destroy();
          }, e.prototype.onDestroy = function () {
            _.default.playMusic("bgmBfBattle");
          }, r([m(cc.Node)], e.prototype, "installNode", void 0), r([m(cc.Node)], e.prototype, "normalNode", void 0),
          r([m(cc.Node)], e.prototype, "outlineNode", void 0), r([m(cc.Node)], e.prototype, "instanllEffect", void 0),
          r([m({
            tooltip: "当前角色id",
            type: cc.Integer
          })], e.prototype, "id", void 0), r([m({
            tooltip: "点击按钮",
            type: cc.Node
          })], e.prototype, "clickButton", void 0), r([m({
            tooltip: "落下按钮",
            type: cc.Node
          })], e.prototype, "downButton", void 0), r([m({
            tooltip: "返回按钮",
            type: cc.Node
          })], e.prototype, "backButton", void 0), r([m({
            type: [cc.Node],
            tooltip: "选择的部件"
          })], e.prototype, "gratingList", void 0), r([m({
            type: [cc.Node],
            tooltip: "显示的位置"
          })], e.prototype, "showNodelist", void 0), e = r([g], e);
      }(cc.Component);
    n.default = v, cc._RF.pop();
  }, {
    "../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../FrameWork/Event/EventEnum": "EventEnum",
    "../../../../FrameWork/Event/EventMgr": "EventMgr",
    "../../../../FrameWork/Mgr/UmengMgr": "UmengMgr",
    "../../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../../Platform/weixin/WXAPI": "WXAPI",
    "../../../../Platform/weixin/newFrame/src/event/ADPageEventEnum": "ADPageEventEnum",
    "../../../../Platform/weixin/newFrame/src/event/ADPageEventMgr": "ADPageEventMgr",
    "../../core/CustomUser": "CustomUser",
    "../../utils/ResCenter": "ResCenter",
    "../../utils/SoundsManager": "SoundsManager",
    "./PartGrating": "PartGrating"
  }],
  DinosaurMask: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "74dbcy8CZJCebdoBcqkLtc/", "DinosaurMask");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../utils/ResCenter"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.sp = null, e.spName = null, e.headIconType = 0, e.dirs = ["Texture/lobby/dinosaurUI/head_"],
            e;
        }
        return o(e, t), e.prototype.initDinosaurId = function (t) {
            var e = this;
            i.default.loadSpriteFrameFromBundle(this.dirs[this.headIconType] + t, function (t) {
              e.sp.spriteFrame = t;
            }, this);
          }, r([a(cc.Sprite)], e.prototype, "sp", void 0), r([a(cc.Sprite)], e.prototype, "spName", void 0),
          r([a({
            type: cc.Enum({
              HEAD: 0
            }),
            tooltip: "角色头像类型"
          })], e.prototype, "headIconType", void 0), e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "../../utils/ResCenter": "ResCenter"
  }],
  DinosaurProperty: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "b29ed3v4C9Ajo8IYYAlI3t2", "DinosaurProperty");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.DinosaurProperty = n.EnergyType = void 0;
    var r, i = t("./Property"),
      s = t("../config/GlobalConfig"),
      c = t("./CustomUser");
    (function (t) {
      t[t.NormalAttack = 0] = "NormalAttack", t[t.RangedAttack = 1] = "RangedAttack",
        t[t.SuperAttack = 2] = "SuperAttack", t[t.StraightAttack = 3] = "StraightAttack",
        t[t.DefenceBeattack = 4] = "DefenceBeattack";
    })(r = n.EnergyType || (n.EnergyType = {}));
    var a = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.energyConfig = [15, -10, -50, -10, 5], e;
      }
      return o(e, t), e.prototype.initData = function (t, e, n) {
        this.energyConfig[r.NormalAttack] = s.default.getInstance().getData().energyIncrease,
          this.energyConfig[r.RangedAttack] = s.default.getInstance().getData().secondEnergyConsume,
          this.energyConfig[r.SuperAttack] = s.default.getInstance().getData().superEnergyConsume,
          this.energyConfig[r.StraightAttack] = s.default.getInstance().getData().fourEnergyConsume,
          this.energyConfig[r.DefenceBeattack] = s.default.getInstance().getData().energyDefence,
          this.initBaseData(t);
        for (var o = c.default.getDinosaurData(), i = !1, a = 0; a < o.length; a++) {
          var l = o[a];
          if (l.id == this.id) {
            this.dinosaurData = l, i = !0;
            break;
          }
        }
        this.initHeroData(e, n), i || (0 == this.unlockGoldNum && 0 == this.unlockVideoTime && this.unlock(),
            this.dinosaurData.id = this.id, o.push(this.dinosaurData)), this.checkVideoUnlock(),
          this.checkBuy();
      }, e.prototype.initHeroData = function (t, e) {
        if (0 == t) this.setLevelData();
        else {
          var n = s.default.getInstance().getData();
          this.hpMax = Math.floor(this.hpBase + this.hpBase * this.dinosaurData.lvHp * n.hpIncrease * .01),
            this.atkMax = Math.floor(this.atkBase + this.atkBase * this.dinosaurData.lvAtk * n.atkIncrease * .01),
            this.setBuff(e);
        }
        this.reset();
      }, e.prototype.setBuff = function (t) {
        c.default.tempBuff && (this.equipArmor = c.default.tempBuff.equipArmor, this.equipArmorHead = c.default.tempBuff.equipHead,
          this.hpMax += c.default.tempBuff.hpIncrease, this.autoEnergyIncrease = c.default.tempBuff.energyIncrease,
          this.autoEnergyInterval = c.default.tempBuff.energyInterval, this.atkMax += c.default.tempBuff.atkIncrease,
          this.armorId = c.default.tempBuff.armorPathId, this.armorSlotName = c.default.tempBuff.armorSlotName,
          this.hpBuffed = c.default.tempBuff.hpIncrease, t && (c.default.tempBuff = null));
      }, e.prototype.setLevelData = function () {
        if (c.default.levelData) {
          var t = c.default.levelData,
            e = s.default.getInstance().getData();
          this.hpMax = Math.floor((e.aiBaseHp + e.aiBaseHp * e.hpIncrease * .01) * t.HpRatio * .01),
            this.atkMax = Math.floor((e.aiBaseAtk + e.aiBaseAtk * e.atkIncrease * .01) * t.AttackRatio * .01);
        }
      }, e.prototype.addLvAtk = function () {
        t.prototype.addLvAtk.call(this), this.initHeroData();
      }, e.prototype.addLvHp = function () {
        t.prototype.addLvHp.call(this), this.initHeroData();
      }, e.prototype.getComboDamage = function (t) {
        return this.comboPer[t] ? -Math.floor(this.atk * this.comboPer[t] * .01) : 0;
      }, e.prototype.getSuperSkillDamage = function (t) {
        return this.uniquePer[t] ? -Math.floor(this.atk * this.uniquePer[t] * .01) : 0;
      }, e.prototype.getRangedDamage = function () {
        return this.longRangePer ? -Math.floor(this.atk * this.longRangePer * .01) : 0;
      }, e.prototype.getStraightDamage = function () {
        return this.straightRangePer ? -Math.floor(this.atk * this.straightRangePer * .01) : 0;
      }, e.prototype.increaseEnergyByNormalAttack = function () {
        this.changeMp(this.atkEnergyIncrease);
      }, e.prototype.changeEnergy = function (t, e) {
        var n = this.energyConfig[t];
        n && e && (n *= e), this.changeMp(n);
      }, e.prototype.isEnergyEnough = function (t) {
        return this.mp >= Math.abs(this.energyConfig[t]);
      }, e;
    }(i.Property);
    n.DinosaurProperty = a, cc._RF.pop();
  }, {
    "../config/GlobalConfig": "GlobalConfig",
    "./CustomUser": "CustomUser",
    "./Property": "Property"
  }],
  EventCenter: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "27a7eca3V5HrJoy8FGFdrrx", "EventCenter"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.on = function (t, e, n) {
        void 0 == this._events[t] && (this._events[t] = []), this._events[t].push({
          callback: e,
          target: n
        });
      }, t.off = function (t, e, n) {
        for (var o = this._events[t], r = o.length - 1; r >= 0; r--) {
          var i = o[r];
          if (n == i.target && e.toString() == i.callback.toString()) {
            o.splice(r, 1);
            break;
          }
        }
        0 == o.length && delete this._events[t];
      }, t.emit = function (t, e) {
        var n = this._events[t];
        if (void 0 != n && null != n)
          for (var o = 0; o < n.length; o++) {
            var r = n[o];
            r.callback.call(r.target, e, t);
          }
      }, t.clearAllByNode = function (t) {
        for (var e in this._events) {
          var n = this._events[e];
          if (n) {
            for (var o = 0; o < n.length;) n[o].target == t && (n[o] = null, n.splice(o, 1),
              o--), o++;
            0 == n.length && delete this._events[e];
          }
        }
      }, t._events = {}, t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  EventEnum: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "94947oCpcdGZ6oeuKmdOGCo", "EventEnum"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.ryw_Event = void 0,
      function (t) {
        t[t.ryw_None_csryw = 0] = "ryw_None_csryw", t[t.ryw_ADKRQ_ClickQuit_csryw = 400] = "ryw_ADKRQ_ClickQuit_csryw",
          t[t.ryw_Export3_Dismiss_csryw = 401] = "ryw_Export3_Dismiss_csryw", t[t.ryw_App_CloseFirstLoadingView_csryw = 500] = "ryw_App_CloseFirstLoadingView_csryw",
          t[t.ryw_AD_OnShareAdFail_csryw = 501] = "ryw_AD_OnShareAdFail_csryw", t[t.ryw_Game_OnViewOpen_csryw = 600] = "ryw_Game_OnViewOpen_csryw",
          t[t.ryw_Game_OnViewClose_csryw = 601] = "ryw_Game_OnViewClose_csryw", t[t.ryw_Game_OnUserMoneyChange_csryw = 701] = "ryw_Game_OnUserMoneyChange_csryw",
          t[t.ryw_Game_OnUserCrystalChange_csryw = 702] = "ryw_Game_OnUserCrystalChange_csryw",
          t[t.ryw_Game_OnUserUnlockedStore_csryw = 703] = "ryw_Game_OnUserUnlockedStore_csryw",
          t[t.ryw_Game_OnLevelStart_csryw = 1e3] = "ryw_Game_OnLevelStart_csryw", t[t.ryw_Game_OnLevelComplate_csryw = 1001] = "ryw_Game_OnLevelComplate_csryw",
          t[t.ryw_AD_WudianBanner_LoadComplete_csryw = 2217] = "ryw_AD_WudianBanner_LoadComplete_csryw",
          t[t.ryw_AD_WudianBanner_Show_csryw = 2218] = "ryw_AD_WudianBanner_Show_csryw", t[t.ryw_AD_WudianBanner_Hide_csryw = 2219] = "ryw_AD_WudianBanner_Hide_csryw",
          t[t.ryw_AD_WudianBanner_PreLoad_csryw = 2220] = "ryw_AD_WudianBanner_PreLoad_csryw",
          t[t.ryw_App_OnUpdateIpBlockState_csryw = 2221] = "ryw_App_OnUpdateIpBlockState_csryw",
          t[t.ryw_Umeng_csryw = 2230] = "ryw_Umeng_csryw", t[t.ryw_PlatformLoginState_csryw = 2997] = "ryw_PlatformLoginState_csryw",
          t[t.ryw_NetLoginState_csryw = 2998] = "ryw_NetLoginState_csryw", t[t.ryw_NetUserDataState_csryw = 2999] = "ryw_NetUserDataState_csryw",
          t[t.ryw_Video_Finish_csryw = 3e3] = "ryw_Video_Finish_csryw", t[t.ryw_Video_UnFinish_csryw = 3001] = "ryw_Video_UnFinish_csryw",
          t[t.ryw_Video_Error_csryw = 3002] = "ryw_Video_Error_csryw", t[t.ryw_ryw_SET_LIST_PARAM = 3003] = "ryw_ryw_SET_LIST_PARAM",
          t[t.ryw_Lobby_SelectJigsaw_csryw = 1e4] = "ryw_Lobby_SelectJigsaw_csryw", t[t.ryw_Lobby_CancleJigsaw_csryw = 10001] = "ryw_Lobby_CancleJigsaw_csryw",
          t[t.ryw_Lobby_PartGrating_End_csryw = 10002] = "ryw_Lobby_PartGrating_End_csryw",
          t[t.ryw_Lobby_CheckArea_csryw = 10003] = "ryw_Lobby_CheckArea_csryw", t[t.ryw_Lobby_DinosaurLookVideo_csryw = 10004] = "ryw_Lobby_DinosaurLookVideo_csryw",
          t[t.ryw_Lobby_DinosaurUnlock_csryw = 10005] = "ryw_Lobby_DinosaurUnlock_csryw",
          t[t.ryw_Lobby_DinosaurBuy_csryw = 10006] = "ryw_Lobby_DinosaurBuy_csryw", t[t.ryw_Lobby_DinosaurInstallEnd_csryw = 10007] = "ryw_Lobby_DinosaurInstallEnd_csryw",
          t[t.ryw_Lobby_DinosaurShowTipsFragment_csryw = 10008] = "ryw_Lobby_DinosaurShowTipsFragment_csryw",
          t[t.ryw_Lobby_DinosaurHideTipsFragment_csryw = 10009] = "ryw_Lobby_DinosaurHideTipsFragment_csryw";
      }(n.ryw_Event || (n.ryw_Event = {})), cc._RF.pop();
  }, {}],
  EventMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "f8dfeJgdmJHo6btOQzfwZzs", "EventMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../Util/LogUtils"),
      r = function () {
        function t() {}
        return t.emitEvent_csryw = function (t, e, n, r, i, s) {
          o.LogUtils.info_csryw("广播事件：" + t), this.eventTarget_csryw.emit(t + "", e, n, r, i, s);
        }, t.onEvent_csryw = function (t, e, n) {
          this.eventTarget_csryw.on(t + "", e, n);
        }, t.onceEvent_csryw = function (t, e, n) {
          this.eventTarget_csryw.once(t + "", e, n);
        }, t.offEvent_csryw = function (t, e, n) {
          this.eventTarget_csryw.off(t + "", e, n);
        }, t.offTargetEvent_csryw = function (t) {
          this.eventTarget_csryw.targetOff(t);
        }, t.eventTarget_csryw = new cc.EventTarget(), t;
      }();
    n.default = r, cc._RF.pop();
  }, {
    "../Util/LogUtils": "LogUtils"
  }],
  EventTypeDef: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "29b75NGRLdPwYIN1MWyGBnz", "EventTypeDef"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.SoundEvent = n.StepFrameEvent = n.EnergyEvent = n.MovementEvent = n.AttackEvent = void 0;
    var o = function () {
      return function () {};
    }();
    n.AttackEvent = o;
    var r = function () {
      return function () {};
    }();
    n.MovementEvent = r;
    var i = function () {
      return function () {};
    }();
    n.EnergyEvent = i;
    var s = function () {
      return function () {};
    }();
    n.StepFrameEvent = s;
    var c = function () {
      return function () {};
    }();
    n.SoundEvent = c, cc._RF.pop();
  }, {}],
  ExDialogView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "30f4bJp8i5C04BoOSyXrGR3", "ExDialogView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../utils/SoundsManager"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.actNode = null, e.popInType = 1, e.quitType = 0, e.isClose = !0, e.lastView = null,
            e.otherHideView = [], e.srcScale = 0, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          this.actNode || (this.actNode = this.node), this.srcScale = this.actNode.scale;
        }, e.prototype.start = function () {}, e.prototype.onEnable = function () {
          this.lastView && (this.lastView.active = !1), this.otherHideView.forEach(function (t, e) {
            t.active = !1;
          }), this.popInType && this._popInAct();
        }, e.prototype.onDisable = function () {
          this.lastView && (this.lastView.active = !0), this.otherHideView.forEach(function (t, e) {
            t.active = !0;
          }), this.otherHideView = [], this.lastView = null;
        }, e.prototype.onClickClose = function () {
          i.default.clickBack(), this.quitType ? this._quitAct() : this._closeView();
        }, e.prototype._popInAct = function () {
          var t = [null, this._scaleIn];
          t[this.popInType] && t[this.popInType].call(this);
        }, e.prototype._quitAct = function () {}, e.prototype._closeView = function () {
          this.isClose ? (this.node.removeFromParent(), this.node.destroy()) : this.node.active = !1;
        }, e.prototype._scaleIn = function () {
          this.actNode.scale = 0, this.actNode.opacity = 0, cc.tween(this.actNode).to(.5, {
            scale: this.srcScale,
            opacity: 255
          }, {
            easing: "backOut"
          }).start();
        }, r([a({
          type: cc.Node,
          tooltip: "动画对象"
        })], e.prototype, "actNode", void 0), r([a({
          tooltip: "弹出动画类型"
        })], e.prototype, "popInType", void 0), r([a({
          tooltip: "退出动画类型"
        })], e.prototype, "quitType", void 0), r([a({
          tooltip: "点击关闭按钮是关闭或是隐藏"
        })], e.prototype, "isClose", void 0), e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "../../utils/SoundsManager": "SoundsManager"
  }],
  ExScrollView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "19e115JR+FIgbvgOZbDNq22", "ExScrollView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = i.property,
      a = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.item = null, e.curSelectItem = null, e.curData = null, e.totalNum = 0,
            e.itemCall = null, e.caller = null, e.datas = [], e.emptyNum = 0, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            this.item.active = !1, this.scrollView = this.node.getComponent(cc.ScrollView);
          }, e.prototype.start = function () {}, e.prototype.init = function (t, e, n, o) {
            void 0 === o && (o = 0), this.emptyNum = o, this.totalNum = t.length, this.itemCall = e,
              this.caller = n, this.datas = [], this.scrollView.content.removeAllChildren();
            for (var r = 0; r < t.length; r++) {
              var i = t[r],
                s = cc.instantiate(this.item);
              s.active = !0, s.zIndex = r, this.scrollView.content.addChild(s), this.datas.push(i),
                this.itemInitCall(s, i, r);
            }
          }, e.prototype.deinit = function () {
            this.datas = [], this.scrollView.content.removeAllChildren();
          }, e.prototype._onClickItem = function (t) {
            var e = t.currentTarget;
            this.curSelectItem = e, this.curData = this.datas[e.zIndex];
          }, e.prototype.itemInitCall = function (t, e, n) {}, r([c(cc.Node)], e.prototype, "item", void 0),
          e = r([s], e);
      }(cc.Component);
    n.default = a, cc._RF.pop();
  }, {}],
  ExportView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "0a1a6bcU4lEQZ9PWXnq/Fgm", "ExportView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../../FrameWork/Mgr/WudianMgr"),
      c = t("../../../../../FrameWork/Util/Utilit"),
      a = t("../../../../../FrameWork/View/ADListView"),
      l = t("../wxViewBase"),
      u = cc._decorator,
      d = u.ccclass,
      p = u.property,
      y = u.disallowMultiple,
      h = u.menu,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.clickBut = null, e.adListView = null, e.hand = null, e._isCanClose_csryw = !1,
            e._isContinueBtnClicked_csryw = !1, e.EventEnumView_csryw = {
              ContinueGame_csryw: "ContinueGame"
            }, e;
        }
        return o(e, t), e.prototype.initData = function (t) {
          console.log("initData" + t), this._data = t;
        }, e.prototype.initView_csryw = function () {
          var e = this;
          t.prototype.initView_csryw.call(this), this.clickBut.active = !1, this.clickBut.on("click", this.onContinueBtn_csryw, this),
            s.default.wudianFlag_csryw && c.default.checkVersions_csryw() && 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.handShow_csryw ? this.hand.active = !0 : this.hand.active = !1,
            this.scheduleOnce(function () {
              e.clickBut.active = !0;
            }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBtnDelayTime_csryw),
            i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isExportJumpVideo_csryw > 0 ? this.adListView.setAdtag_csryw("jump") : this.adListView.setAdtag_csryw("nojump");
        }, e.prototype.setAdtag_csryw = function (t) {
          this.adListView.setAdtag_csryw(t);
        }, e.prototype.onContinueBtn_csryw = function () {
          var t = this,
            e = this;
          !this._isContinueBtnClicked_csryw && s.default.wudianFlag_csryw && c.default.checkVersions_csryw() && 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().continueBanner_csryw ? (this._isContinueBtnClicked_csryw = !0,
              this.scheduleOnce(function () {
                t.clickBut.active = !0, t.scheduleOnce(function () {
                  e.showBanner_csryw(), t.scheduleOnce(function () {
                    e._isCanClose_csryw = !0, e.hideBanner_csryw();
                  }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBannerHideTime_csryw);
                }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBannerShowTime_csryw);
              }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBtnDelayTime_csryw)) : e._isCanClose_csryw = !0,
            this._isCanClose_csryw && (this.emitListenerEvent_csryw(this.EventEnumView_csryw.ContinueGame_csryw),
              this.unscheduleAllCallbacks(), this.removeView_csryw(), this._data && this._data.closeCallFun && this._data.closeCallFun());
        }, r([p({
          tooltip: "继续游戏",
          type: cc.Node
        })], e.prototype, "clickBut", void 0), r([p({
          tooltip: "广告",
          type: a.default
        })], e.prototype, "adListView", void 0), r([p({
          tooltip: "手指动画",
          type: cc.Node
        })], e.prototype, "hand", void 0), e = r([d, y(), h("框架组件/导出页面")], e);
      }(l.default);
    n.default = _, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../../../FrameWork/Util/Utilit": "Utilit",
    "../../../../../FrameWork/View/ADListView": "ADListView",
    "../wxViewBase": "wxViewBase"
  }],
  FMButton: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "063f2oeVtlKeav7jb4gZRiz", "FMButton");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.FMButton = void 0;
    var i = t("../Mgr/SoundMgr"),
      s = cc._decorator,
      c = s.ccclass,
      a = (s.property,
        s.menu),
      l = s.disallowMultiple,
      u = (s.executionOrder, s.requireComponent),
      d = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return o(e, t), e.prototype.onLoad = function () {
          var t = this.node.getComponent(cc.Button);
          t.transition == cc.Button.Transition.NONE && (t.transition = cc.Button.Transition.SCALE,
            t.duration = .1, t.zoomScale = .9), this.node.on("click", function () {
            i.default.playSound_csryw("sysClick");
          }, this);
        }, e = r([c, u(cc.Button), l(), a("FM组件/FMButton")], e);
      }(cc.Component);
    n.FMButton = d, cc._RF.pop();
  }, {
    "../Mgr/SoundMgr": "SoundMgr"
  }],
  FMComponentExtend: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "415e8HkD95B7aloMcGJWw9P", "FMComponentExtend");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.__isInit_csryw = !1, e.EventEnumView_csryw = {}, e;
      }
      return o(e, t), e.prototype.onLoad = function () {
        this.__onInit_csryw();
      }, e.prototype.__onInit_csryw = function () {
        this.__isInit_csryw || (this.__isInit_csryw = !0, this.initView_csryw());
      }, e.prototype.onListenerEventView_csryw = function (t) {
        this._listenerCallView_csryw = t;
      }, e.prototype.emitListenerEvent_csryw = function (t, e, n) {
        this._listenerCallView_csryw && callFM_csryw(this._listenerCallView_csryw, t, this, e, n);
      }, e.prototype.isActiveView_csryw = function () {
        return !(!cc.isValid(this, !0) || !this.node.activeInHierarchy);
      }, e.prototype.onDestroy = function () {}, e;
    }(cc.Component);
    n.default = r, cc._RF.pop();
  }, {}],
  FMGameFailScene: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "938c3DtINVGYqfnxHawyIyW", "FMGameFailScene");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../Mgr/GameMgr"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.adMainPrefab = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {}, e.prototype.toGame_csryw = function () {
          i.default.getInstance_csryw().onGameFailToScene_csryw();
        }, r([a({
          tooltip: "广告Main预制体(那个平台拖那个)",
          type: cc.Prefab
        })], e.prototype, "adMainPrefab", void 0), e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "../../../Mgr/GameMgr": "GameMgr"
  }],
  FMGameScene: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "efe614cQuZNNo6eo/isIEJZ", "FMGameScene");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../Mgr/GameMgr"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.adGamePrefab = null, e.butWin = null, e.butFail = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          this.butWin && this.butWin.on("click", function () {
            i.default.getInstance_csryw().onGameToGameWinScene_csryw();
          }, this), this.butFail && this.butFail.on("click", function () {
            i.default.getInstance_csryw().onGameToGameFailScene_csryw();
          }, this);
        }, r([a({
          tooltip: "广告Game预制体(那个平台拖那个)",
          type: cc.Prefab
        })], e.prototype, "adGamePrefab", void 0), r([a({
          tooltip: "胜利按钮（可移除）",
          type: cc.Node
        })], e.prototype, "butWin", void 0), r([a({
          tooltip: "失败按钮（可移除）",
          type: cc.Node
        })], e.prototype, "butFail", void 0), e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "../../../Mgr/GameMgr": "GameMgr"
  }],
  FMGameWinScene: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "400857HzvZC1I1ccGTIQ/Fb", "FMGameWinScene");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../Mgr/GameMgr"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.adMainPrefab = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {}, e.prototype.toGame_csryw = function () {
          i.default.getInstance_csryw().onGameWinToScene_csryw();
        }, r([a({
          tooltip: "广告Main预制体(那个平台拖那个)",
          type: cc.Prefab
        })], e.prototype, "adMainPrefab", void 0), e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "../../../Mgr/GameMgr": "GameMgr"
  }],
  FMInterface: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "960ddPW6plCX7rTQuyZQoCo", "FMInterface");
    var o = this && this.__spreadArrays || function () {
      for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
      var o = Array(t),
        r = 0;
      for (e = 0; e < n; e++)
        for (var i = arguments[e], s = 0, c = i.length; s < c; s++,
          r++) o[r] = i[s];
      return o;
    };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.callFM_csryw = n.handleFM_csryw = n.FMListener = void 0;
    var r = function () {
      return function () {};
    }();

    function i(t, e) {
      return {
        target: e,
        callback: t
      };
    }

    function s(t) {
      for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
      if (t && t.callback) return (e = t.callback).call.apply(e, o([t.target], n));
    }
    n.FMListener = r, n.handleFM_csryw = i, n.callFM_csryw = s, window.FMListener = r,
      window.handleFM_csryw = i, window.callFM_csryw = s, cc._RF.pop();
  }, {}],
  FMItemLayout: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "8482a+fXPVGpbazvKpZtGQW", "FMItemLayout");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../Base/FMViewBase"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = (s.requireComponent,
        s.disallowMultiple),
      u = (s.menu, function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.itemChilds = [], e.ad_tag_csryw = null, e.itemIndex_csryw = 0, e;
        }
        return o(e, t), e.prototype.setAdTag_csryw = function (t) {
            this.ad_tag_csryw = t;
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.initView_csryw = function () {}, e.prototype.setFMListenerUpdate_csryw = function (t) {
            this._fmListenerData_csryw = t;
          }, e.prototype.setItemIndex_csryw = function (t) {
            if (this.itemIndex_csryw = t, this._fmListenerData_csryw)
              for (var e = this.itemChilds.length, n = 0; n < e; n++) {
                var o = this.itemIndex_csryw * e + n,
                  r = callFM_csryw(this._fmListenerData_csryw, o);
                this.updateDataItemByIndex_csryw(r, n);
              }
          }, e.prototype.updateDataItemByIndex_csryw = function (t, e) {
            LogUtils.log_csryw("FMItemLayout -> updateDataItemByIndex -> data", t);
          }, e.prototype.getItemIndex_csryw = function () {
            return this.itemIndex_csryw;
          }, e.prototype.getPointX_csryw = function () {
            return this.node.x;
          }, e.prototype.getPointY_csryw = function () {
            return this.node.y;
          }, e.prototype.setPointX_csryw = function (t) {
            this.node.x = t;
          }, e.prototype.setPointY_csryw = function (t) {
            this.node.y = t;
          }, e.prototype.getItemChildrenCount_csryw = function () {
            return this.itemChilds.length;
          }, r([a({
            tooltip: "子节点集合",
            type: [cc.Node]
          })], e.prototype, "itemChilds", void 0), e = r([c, l()], e);
      }(i.default));
    n.default = u, cc._RF.pop();
  }, {
    "../Base/FMViewBase": "FMViewBase"
  }],
  FMJava: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "61232zQ9bdEToAwYn58XOT6", "FMJava"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.createBanner = function (t, e, n, o, r, i) {
          void 0 === n && (n = !0), console.log("创建banner"), this._onBannerAdListener = t;
          var s = e;
          s.autoShow = n, o && (s.bannerWidth = o), r && (s.bannerHeight = r), i && (s.bannerId = i);
          var c = JSON.stringify(s);
          console.log(c), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "createBanner", "(Ljava/lang/String;)V", c);
        }, t.showBanner = function (t) {
          console.log("显示banner");
          var e = "";
          t && (e = JSON.stringify(t)), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "(Ljava/lang/String;)V", e);
        }, t.hideBanner = function () {
          console.log("隐藏banner"), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "()V");
        }, t.createInsertAd = function (t, e, n) {
          void 0 === n && (n = !0), console.log("创建插屏广告"), this._onInsertAdListener = t;
          var o = {
              width: e,
              autoShow: n
            },
            r = JSON.stringify(o);
          jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "createInsertAd", "(Ljava/lang/String;)V", r);
        }, t.showInsertAd = function () {
          jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInsertAd", "()V");
        }, t.createExpressAd = function (t, e, n, o) {
          void 0 === n && (n = !0), console.log("创建 信息流广告"), this._onExpressAdListener = t;
          var r = e;
          r.autoShow = n, o && (r.adId = o);
          var i = JSON.stringify(r);
          jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "createExpressAd", "(Ljava/lang/String;)V", i);
        }, t.showExpress = function (t) {
          console.log("显示 信息流广告");
          var e = "";
          t && (e = JSON.stringify(t)), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showExpress", "(Ljava/lang/String;)V", e);
        }, t.hideExpress = function () {
          console.log("隐藏 信息流广告"), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideExpress", "()V");
        }, t.showCSJ_Video = function (t, e) {
          this.onClose = t, this.onFailed = e, LogUtils.log_csryw("调用 android 穿山甲 播放激励视频"),
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showCSJ_Video", "(Ljava/lang/String;)V", "");
        }, t.showCSJ_FullScreenVideo = function (t, e) {
          this.onClose = t, this.onFailed = e, LogUtils.log_csryw("调用 android 穿山甲 播放激励视频"),
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showCSJ_FullScreenVideo", "(Ljava/lang/String;)V", "");
        }, t.get_IdentifierId = function () {
          return LogUtils.log_csryw("调用 android 唯一码"), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getIdentifierForIdentifier", "()Ljava/lang/String;");
        }, t.getScreenSize = function () {
          LogUtils.log_csryw("调用 获取屏幕的大小");
          var t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getScreenSize", "()Ljava/lang/String;"),
            e = t.split(":");
          return console.log(t), cc.size(Number(e[0]), e[1]);
        }, t.uma_trackEvent = function (t, e) {
          var n = "";
          e && (n = JSON.stringify(e)), LogUtils.log_csryw("发送友盟数据，事件名：" + t + ",内容:" + n),
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "sendEventUmeng", "(Ljava/lang/String;Ljava/lang/String;)V", t, n);
        }, t.listenerCSJ_Video_finish = function (t) {
          LogUtils.log_csryw("java 回调 穿山甲 激励视频播放成功"), this.onClose && this.onClose(!0);
        }, t.listenerCSJ_Video_Error = function (t) {
          LogUtils.log_csryw("java 回调 穿山甲 激励视频播放错误"), this.onFailed && this.onFailed();
        }, t.listenerCSJ_Video_Close = function (t) {
          LogUtils.log_csryw("java 回调 穿山甲 视频播放关闭"), this.onClose && this.onClose(!1);
        }, t.listenerBanner = function (t) {
          console.log("收到banner的数据。。。。" + t), this._onBannerAdListener && this._onBannerAdListener(t);
        }, t.listenerInsertAd = function (t) {
          console.log("收到插屏广告的数据。。。。" + t), this._onInsertAdListener && this._onInsertAdListener(t);
        }, t.listenerExpressAd = function (t) {
          console.log("收到信息流广告的数据。。。。" + t), this._onExpressAdListener && this._onExpressAdListener(t);
        }, t.onClose = null, t.onFailed = null, t._onBannerAdListener = null, t._onInsertAdListener = null,
        t._onExpressAdListener = null, t;
    }();
    n.default = o, window.FMJava = o, cc._RF.pop();
  }, {}],
  FMMainScene: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d5474BSd0xPPrq9DFz4LkL1", "FMMainScene");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../Mgr/GameMgr"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.adMainPrefab = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {}, e.prototype.toGame = function () {
          i.default.getInstance_csryw().onMainToGameScene_csryw();
        }, r([a({
          tooltip: "广告Main预制体(那个平台拖那个)",
          type: cc.Prefab
        })], e.prototype, "adMainPrefab", void 0), e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "../../../Mgr/GameMgr": "GameMgr"
  }],
  FMOC: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "4167fiRNaRB7aE5Cgljh91e", "FMOC"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.createBanner = function (t, e, n, o, r, i) {
          void 0 === n && (n = !0), console.log("创建banner"), this._onBannerAdListener = t;
          var s = e;
          s.autoShow = n, o && (s.bannerWidth = o), r && (s.bannerHeight = r), i && (s.bannerId = i);
          var c = JSON.stringify(s);
          jsb.reflection.callStaticMethod("JSObjectCBridge", "createBanner:", c);
        }, t.showBanner = function (t) {
          console.log("显示banner");
          var e = "";
          t && (e = JSON.stringify(t)), jsb.reflection.callStaticMethod("JSObjectCBridge", "showBanner:", e);
        }, t.hideBanner = function () {
          console.log("隐藏banner"), jsb.reflection.callStaticMethod("JSObjectCBridge", "hideBanner");
        }, t.createInsertAd = function (t, e, n) {
          void 0 === n && (n = !0), console.log("创建插屏广告"), this._onInsertAdListener = t;
          var o = {
              width: e,
              autoShow: n
            },
            r = JSON.stringify(o);
          jsb.reflection.callStaticMethod("JSObjectCBridge", "createInsertAd:", r);
        }, t.showInsertAd = function () {
          jsb.reflection.callStaticMethod("JSObjectCBridge", "showInsertAd");
        }, t.createExpressAd = function (t, e, n, o) {
          void 0 === n && (n = !0), console.log("创建 信息流广告"), this._onExpressAdListener = t;
          var r = e;
          r.autoShow = n, o && (r.adId = o);
          var i = JSON.stringify(r);
          jsb.reflection.callStaticMethod("JSObjectCBridge", "createExpressAd:", i);
        }, t.showExpress = function (t) {
          console.log("显示 信息流广告");
          var e = "";
          t && (e = JSON.stringify(t)), jsb.reflection.callStaticMethod("JSObjectCBridge", "showExpress:", e);
        }, t.hideExpress = function () {
          console.log("隐藏 信息流广告"), jsb.reflection.callStaticMethod("JSObjectCBridge", "hideExpress");
        }, t.showCSJ_Video = function (t, e) {
          this.onClose = t, this.onFailed = e, LogUtils.log_csryw("调用 ios 穿山甲 播放激励视频"), jsb.reflection.callStaticMethod("JSObjectCBridge", "openRewardVideoAd");
        }, t.showCSJ_FullScreenVideo = function (t, e) {
          this.onClose = t, this.onFailed = e, LogUtils.log_csryw("调用 ios 穿山甲 播放全屏视频"), jsb.reflection.callStaticMethod("JSObjectCBridge", "openFullRewardVideoAd");
        }, t.get_IdentifierId = function () {
          return LogUtils.log_csryw("调用 ios 唯一码"), jsb.reflection.callStaticMethod("JSObjectCBridge", "getSoleID");
        }, t.getScreenSize = function () {
          LogUtils.log_csryw("调用 获取屏幕的大小");
          var t = jsb.reflection.callStaticMethod("JSObjectCBridge", "getScreenSize").split(":");
          return cc.size(Number(t[0]), t[1]);
        }, t.getIDFA = function () {
          return LogUtils.log_csryw("调用 ios idef"), jsb.reflection.callStaticMethod("JSObjectCBridge", "getIDFA");
        }, t.getMacAddress = function () {
          return LogUtils.log_csryw("调用 ios macAddress"), jsb.reflection.callStaticMethod("JSObjectCBridge", "getMacAddress");
        }, t.listenerVideo = function (t) {
          LogUtils.error_csryw("接收到 " + t), "finish" == t ? this.onClose && this.onClose(!0) : "error" == t ? this.onFailed && this.onFailed() : "close" == t && this.onClose && this.onClose(!1);
        }, t.listenerBanner = function (t) {
          console.log("收到banner的数据。。。。" + t), this._onBannerAdListener && this._onBannerAdListener(t);
        }, t.listenerInsertAd = function (t) {
          console.log("收到插屏广告的数据。。。。" + t), this._onInsertAdListener && this._onInsertAdListener(t);
        }, t.listenerExpressAd = function (t) {
          console.log("收到信息流广告的数据。。。。" + t), this._onExpressAdListener && this._onExpressAdListener(t);
        }, t.uma_trackEvent = function (t, e) {
          var n = "";
          e && (n = JSON.stringify(e)), LogUtils.log_csryw("发送友盟数据，事件名：" + t + ",内容:" + n),
            jsb.reflection.callStaticMethod("JSObjectCBridge", "sendEventUmeng:data:", t, n);
        }, t.onClose = null, t.onFailed = null, t._onBannerAdListener = null, t._onInsertAdListener = null,
        t._onExpressAdListener = null, t;
    }();
    n.default = o, window.FMOC = o, cc._RF.pop();
  }, {}],
  FMScrollViewLoop: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "685e88bRjRGNawxLozbkHdK", "FMScrollViewLoop");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./FMTouchMaskView"),
      s = t("../Interface/FMInterface"),
      c = t("../Util/Utilit"),
      a = t("./FMItemLayout"),
      l = cc._decorator,
      u = l.ccclass,
      d = l.property,
      p = (l.requireComponent,
        l.disallowMultiple),
      y = (l.menu, function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e._isAutoMoveType = !0, e.arrayAliveListLayout_csryw = [], e.arrayFreeListLayout_csryw = [],
            e.viewLayoutNum_csryw = 0, e.viewLayoutGapNum_csryw = 3, e.viewLayoutSum_csryw = 0,
            e.startIndexItem_csryw = 0, e.isCanUpdateItems_csryw = !1, e.isTouchStop_csryw = !1,
            e._isCanScrollViewLoopUpdate_csryw = !0, e.isAutoMoveWayLeftUp_csryw = !0, e.autoMoveWaitTime_csryw = 60,
            e.autoMoveWaitNum_csryw = 1, e.autoMoveSpeed_csryw = 3, e._nextMoveLength_csryw = 0,
            e._waitTimeNum_csryw = 0, e._moveState_csryw = 0, e;
        }
        return o(e, t), Object.defineProperty(e.prototype, "isAutoMoveType", {
          get: function () {
            return this._isAutoMoveType;
          },
          set: function (t) {
            this._isAutoMoveType = t;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype._init_csryw = function () {
          if (t.prototype._init_csryw.call(this)) {
            this._slideDirection == i.SlideDirection.HORIZONTAL ? this.viewLayoutNum_csryw = Math.ceil(this.node.width / this.itemPrefabWidth_csryw) : this._slideDirection == i.SlideDirection.VERTICAL && (this.viewLayoutNum_csryw = Math.ceil(this.node.width / this.itemPrefabHeight_csryw)),
              this.viewLayoutSum_csryw = this.viewLayoutNum_csryw + 2 * this.viewLayoutGapNum_csryw;
            for (var e = 0, n = 0; n < this.viewLayoutSum_csryw; n++) {
              var o = this.cloneLayout_csryw(),
                r = o.node;
              this._slideDirection == i.SlideDirection.HORIZONTAL ? (r.x = e, r.y = 0, e += r.width) : this._slideDirection == i.SlideDirection.VERTICAL && (r.x = 0,
                r.y = e, e -= r.height), this.arrayAliveListLayout_csryw.push(o);
            }
            return this.isCanUpdateItems_csryw = !0, !0;
          }
          return !1;
        }, e.prototype.setFMListenerUpdateItem_csryw = function (t) {
          this.fmListenerUpdateData_csryw = t;
        }, e.prototype.setAutoData_csryw = function (t, e, n, o, r) {
          this.isAutoMoveWayLeftUp_csryw = 0 == t, this.autoMoveWaitNum_csryw = e ? Math.abs(e) : 0,
            this.autoMoveWaitTime_csryw = n ? 60 * Math.abs(n) : 60, this.autoMoveSpeed_csryw = o ? Math.abs(o) : 3,
            r && (this.node.color = c.default.colorHex2Rgb_csryw(r));
        }, e.prototype.isTouchStopView_csryw = function () {
          return this.isTouchStop_csryw;
        }, e.prototype.setCanScrollViewLoopUpdate_csryw = function (t) {
          this._isCanScrollViewLoopUpdate_csryw = t;
        }, e.prototype.setAdTag_csryw = function (t) {
          this.ad_tag_csryw = t;
          for (var e = 0; e < this.arrayAliveListLayout_csryw.length; e++) {
            this.arrayAliveListLayout_csryw[e].setAdTag_csryw(this.ad_tag_csryw);
          }
          for (e = 0; e < this.arrayFreeListLayout_csryw.length; e++) {
            this.arrayFreeListLayout_csryw[e].setAdTag_csryw(this.ad_tag_csryw);
          }
        }, e.prototype.initUpdateItems_csryw = function () {
          if (this._init_csryw(), this.startIndexItem_csryw = 0, this._slideDirection == i.SlideDirection.HORIZONTAL)
            for (var t = 3 * -this.itemPrefabWidth_csryw, e = 0; e < this.arrayAliveListLayout_csryw.length; e++) {
              (n = this.arrayAliveListLayout_csryw[e]).setPointX_csryw(t), n.setItemIndex_csryw(this.startIndexItem_csryw + e),
                t += this.itemPrefabWidth_csryw;
            } else
              for (t = 3 * this.itemPrefabHeight_csryw, e = 0; e < this.arrayAliveListLayout_csryw.length; e++) {
                var n;
                (n = this.arrayAliveListLayout_csryw[e]).setPointY_csryw(t), n.setItemIndex_csryw(this.startIndexItem_csryw + e),
                  t -= this.itemPrefabHeight_csryw;
              }
          this._updateNextLengthTime_csryw();
        }, e.prototype.update = function (t) {
          this.isCanUpdateItems_csryw && this._isCanScrollViewLoopUpdate_csryw && (this.updateScrollingItems_csryw(),
            1 == this.isAutoMoveType && this._updateAutoMove_csryw());
        }, e.prototype.listenerUpdateInitItem_csryw = function (t) {
          if (this.fmListenerUpdateData_csryw) return s.callFM_csryw(this.fmListenerUpdateData_csryw, t);
        }, e.prototype._updateAutoMove_csryw = function () {
          this.isTouchStopView_csryw() || (0 == this._moveState_csryw ? (this.isAutoMoveWayLeftUp_csryw ? this._slideDirection == i.SlideDirection.HORIZONTAL ? this.content_csryw.x = this.content_csryw.x - this.autoMoveSpeed_csryw : this.content_csryw.y = this.content_csryw.y + this.autoMoveSpeed_csryw : this._slideDirection == i.SlideDirection.HORIZONTAL ? this.content_csryw.x = this.content_csryw.x + this.autoMoveSpeed_csryw : this.content_csryw.y = this.content_csryw.y - this.autoMoveSpeed_csryw,
            this.autoMoveWaitNum_csryw > 0 && (this._nextMoveLength_csryw = this._nextMoveLength_csryw - this.autoMoveSpeed_csryw,
              this._nextMoveLength_csryw <= 0 && (this._moveState_csryw = 1))) : (this._waitTimeNum_csryw = this._waitTimeNum_csryw + 1,
            this._waitTimeNum_csryw >= this.autoMoveWaitTime_csryw && (this._waitTimeNum_csryw = 0,
              this._updateNextLengthTime_csryw())));
        }, e.prototype._dispatchEvent_csryw = function (t) {
          t == i.FMTouchEvent.Scrolling || (t == i.FMTouchEvent.TouchStart ? this.isTouchStop_csryw = !0 : t == i.FMTouchEvent.TouchEnded && (this._updateNextLengthTime_csryw(),
            this.isTouchStop_csryw = !1));
        }, e.prototype._updateNextLengthTime_csryw = function () {
          if (this.autoMoveWaitNum_csryw > 0)
            if (this._slideDirection == i.SlideDirection.HORIZONTAL)
              if (this._nextMoveLength_csryw = this.autoMoveWaitNum_csryw * this.itemPrefab.data.width,
                this.isAutoMoveWayLeftUp_csryw)
                for (var t = 0; t < this.arrayAliveListLayout_csryw.length; t++) {
                  var e = this.arrayAliveListLayout_csryw[t];
                  if ((n = this.content_csryw.x + e.node.x) > -e.node.width && n < 0) {
                    this._nextMoveLength_csryw = this._nextMoveLength_csryw + n;
                    break;
                  }
                } else
                  for (t = this.arrayAliveListLayout_csryw.length - 1; t >= 0; t--) {
                    var n;
                    e = this.arrayAliveListLayout_csryw[t];
                    if ((n = this.content_csryw.x + e.node.x) < this.node.width + e.node.width && n > this.node.width) {
                      n -= this.node.width, this._nextMoveLength_csryw = this._nextMoveLength_csryw - n;
                      break;
                    }
                  } else if (this._nextMoveLength_csryw = this.autoMoveWaitNum_csryw * this.itemPrefab.data.height,
                    this.isAutoMoveWayLeftUp_csryw)
                    for (t = 0; t < this.arrayAliveListLayout_csryw.length; t++) {
                      e = this.arrayAliveListLayout_csryw[t];
                      if ((o = this.content_csryw.y + e.node.y) < e.node.height && o > 0) {
                        this._nextMoveLength_csryw = this._nextMoveLength_csryw - o;
                        break;
                      }
                    } else
                      for (t = this.arrayAliveListLayout_csryw.length - 1; t >= 0; t--) {
                        var o;
                        e = this.arrayAliveListLayout_csryw[t];
                        if ((o = this.content_csryw.y + e.node.y - e.node.height) > -(this.node.height + e.node.height) && o < -this.node.height) {
                          o += this.node.height, this._nextMoveLength_csryw = this._nextMoveLength_csryw + o;
                          break;
                        }
                      }
          this._waitTimeNum_csryw = 0, this._moveState_csryw = 0;
        }, e.prototype.updateScrollingItems_csryw = function () {
          var t = [];
          if (this._slideDirection == i.SlideDirection.HORIZONTAL) {
            for (var e = 0; e < this.arrayAliveListLayout_csryw.length; e++) {
              var n = this.arrayAliveListLayout_csryw[e];
              this.content_csryw.x + n.getPointX_csryw() < 3 * -this.itemPrefabWidth_csryw ? this.addFreeItem_csryw(n) : n.getPointX_csryw() + this.content_csryw.x > this.node.width + 3 * this.itemPrefabWidth_csryw ? this.addFreeItem_csryw(n) : t.push(n);
            }
            if (t[0].getPointX_csryw() + this.content_csryw.x > -this.itemPrefabWidth_csryw)(n = this.getFreeItem_csryw()).setPointX_csryw(t[0].getPointX_csryw() - this.itemPrefabWidth_csryw),
              n.setItemIndex_csryw(t[0].getItemIndex_csryw() - 1), t.splice(0, 0, n), n.node.active = !0;
            if (t[t.length - 1].getPointX_csryw() + this.content_csryw.x < +this.node.width + this.itemPrefabWidth_csryw)(n = this.getFreeItem_csryw()).setPointX_csryw(t[t.length - 1].getPointX_csryw() + this.itemPrefabWidth_csryw),
              n.setItemIndex_csryw(t[t.length - 1].getItemIndex_csryw() + 1), t.push(n), n.node.active = !0;
          } else {
            for (e = 0; e < this.arrayAliveListLayout_csryw.length; e++) {
              (n = this.arrayAliveListLayout_csryw[e]).getPointY_csryw() + this.content_csryw.y > 3 * this.itemPrefabHeight_csryw ? this.addFreeItem_csryw(n) : n.getPointY_csryw() < -(this.content_csryw.y + this.node.height + 3 * this.itemPrefabHeight_csryw) ? this.addFreeItem_csryw(n) : t.push(n);
            }
            if (t[0].getPointY_csryw() + this.content_csryw.y <= this.itemPrefabHeight_csryw)(n = this.getFreeItem_csryw()).setPointY_csryw(t[0].getPointY_csryw() + this.itemPrefabHeight_csryw),
              n.setItemIndex_csryw(t[0].getItemIndex_csryw() - 1), t.splice(0, 0, n), n.node.active = !0;
            if (t[t.length - 1].getPointY_csryw() >= -(this.content_csryw.y + this.node.height + this.itemPrefabHeight_csryw))(n = this.getFreeItem_csryw()).setPointY_csryw(t[t.length - 1].getPointY_csryw() - this.itemPrefabHeight_csryw),
              n.setItemIndex_csryw(t[t.length - 1].getItemIndex_csryw() + 1), t.push(n), n.node.active = !0;
          }
          this.arrayAliveListLayout_csryw = t;
        }, e.prototype.cloneLayout_csryw = function () {
          var t = cc.instantiate(this.itemPrefab),
            e = t.getComponent(a.default);
          return e.setAdTag_csryw(this.ad_tag_csryw), e.setFMListenerUpdate_csryw(s.handleFM_csryw(this.listenerUpdateInitItem_csryw, this)),
            this.content_csryw.addChild(t), e;
        }, e.prototype.getFreeItem_csryw = function () {
          var t = this.arrayFreeListLayout_csryw.pop();
          return t || (t = this.cloneLayout_csryw()), t;
        }, e.prototype.addFreeItem_csryw = function (t) {
          t.node.active = !1, this.arrayFreeListLayout_csryw.push(t);
        }, r([d()], e.prototype, "_isAutoMoveType", void 0), r([d({
          tooltip: "自动滚动",
          type: cc.Boolean
        })], e.prototype, "isAutoMoveType", null), e = r([u, p()], e);
      }(i.default));
    n.default = y, cc._RF.pop();
  }, {
    "../Interface/FMInterface": "FMInterface",
    "../Util/Utilit": "Utilit",
    "./FMItemLayout": "FMItemLayout",
    "./FMTouchMaskView": "FMTouchMaskView"
  }],
  FMSkeletonExtend: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "9e0489vcsZLQrcbLb8LpzGm", "FMSkeletonExtend");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = i.property,
      a = i.menu,
      l = (i.disallowMultiple,
        i.executionOrder, i.requireComponent, i.executeInEditMode),
      u = i.playOnFocus,
      d = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e._isEditorPlay_csryw = !0, e._isEditoAttach_csryw = !1, e;
        }
        return o(e, t), Object.defineProperty(e.prototype, "isEditorPlay", {
            get: function () {
              return this._isEditorPlay_csryw;
            },
            set: function (t) {
              this._isEditorPlay_csryw = t, this._isEditorPlay_csryw;
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "isEditorAttach", {
            get: function () {
              return this._isEditoAttach_csryw;
            },
            set: function (t) {
              this._isEditoAttach_csryw = t, this._isEditoAttach_csryw && this.attachUtil.generateAllAttachedNodes();
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.update = function (e) {
            t.prototype.update.call(this, e);
          }, e.prototype.dumpSpineInfo_csryw = function () {
            var t = this._skeleton.data,
              e = t.animations,
              n = t.events,
              o = t.skins;
            console.group("spine : 节点 " + this.name + " ,动画 <" + this._N$skeletonData._name + " >");
            for (var r = "[", i = 0; i < e.length; i++) {
              var s = e[i].name;
              0 != i && (r += ","), r += s;
            }
            r += "]";
            var c = "[";
            for (i = 0; i < n.length; i++) {
              s = n[i].name;
              var a = n[i].stringValue;
              "" == a && (a = '""'), 0 != i && (c += ","), c = c + s + ":" + a;
            }
            c += "]";
            var l = "[";
            for (i = 0; i < o.length; i++) {
              s = o[i].name;
              0 != i && (l += ","), l += s;
            }
            l += "]", console.log("%c 动作集合： %c " + r + " ", "background: #35495E;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;", "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;"),
              console.log("%c 事件集合： %c " + c + " ", "background: #35495E;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;", "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;"),
              console.log("%c 皮肤集合： %c " + l + " ", "background: #35495E;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;", "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;"),
              console.groupEnd();
          }, r([c()], e.prototype, "_isEditorPlay_csryw", void 0), r([c({
            tooltip: "编辑器中自动播放动作\n勾选状态，在选中节点时，帧率60，否则只有必要时才重绘\n非勾选，不自动播放",
            type: cc.Boolean
          })], e.prototype, "isEditorPlay", null), r([c()], e.prototype, "_isEditoAttach_csryw", void 0),
          r([c({
            tooltip: "编辑器中生成挂点\n勾选状态，生成挂点 ATTACHED_NODE_TREE\n非勾选，不做操作",
            type: cc.Boolean
          })], e.prototype, "isEditorAttach", null), e = r([s, l, u, a("FM组件/扩展/FMSkeletonExtend")], e);
      }(sp.Skeleton);
    n.default = d, cc._RF.pop();
  }, {}],
  FMSpine: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "4b1a8Us5hFCxrdcJbkFM0w9", "FMSpine");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./FMSkeletonExtend"),
      s = t("../Base/FMComponentExtend"),
      c = t("../Mgr/SoundMgr"),
      a = cc._decorator,
      l = a.ccclass,
      u = (a.property,
        a.menu),
      d = a.disallowMultiple,
      p = (a.executionOrder, a.requireComponent),
      y = (a.executeInEditMode,
        a.playOnFocus,
        function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.arrayEvent = [], e.arraySlotEvent = {}, e.EventEnumView_csryw = {}, e;
          }
          return o(e, t), e.prototype.initView_csryw = function () {
            var t = this;
            this.getSpine().setEventListener(function (e, n) {
              var o = e.animation,
                r = e.animation.name,
                i = n.data && n.data.name,
                s = n.stringValue;
              n.intValue, n.floatValue;
              "sound" == i && c.default.playSpineSound(s, r), t.arrayEvent.forEach(function (t) {
                var e = t.name,
                  n = t.listener;
                e == i && callFM_csryw(n, o, r, i);
              });
            });
          }, e.prototype.addSlotByNodeEvent = function (t, e, n) {
            this.arraySlotEvent[t] = {
              slot: this.getSpine().findSlot(t),
              arrayAction: e,
              childNode: n
            };
          }, e.prototype.addEvent = function (t, e) {
            this.arrayEvent.push({
              name: t,
              listener: e
            });
          }, e.prototype.removeEventAll = function () {
            this.arrayEvent = [];
          }, e.prototype.animation = function () {
            return this.getSpine().animation;
          }, e.prototype.setTimeScale = function (t) {
            this.getSpine().timeScale = t;
          }, e.prototype.getSpine = function () {
            return null == this.spine && (this.spine = this.node.getComponent(i.default)), this.spine;
          }, e.prototype.update = function (t) {}, e.prototype.setAnimation = function (t, e, n) {
            void 0 === e && (e = !1), void 0 === n && (n = 0), this.getSpine().setAnimation(n, t, e);
          }, e.prototype.setMix = function (t, e, n) {
            this.getSpine().setMix(t, e, n);
          }, e.prototype.setSkin = function (t) {
            this.getSpine().setSkin(t);
          }, e = r([l, p(i.default), d(), u("FM组件/FMSpine")], e);
        }(s.default));
    n.default = y, cc._RF.pop();
  }, {
    "../Base/FMComponentExtend": "FMComponentExtend",
    "../Mgr/SoundMgr": "SoundMgr",
    "./FMSkeletonExtend": "FMSkeletonExtend"
  }],
  FMTouchMaskView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "74f62CQmAVNqqrNvtKV9cdq", "FMTouchMaskView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.FMTouchEvent = n.SlideDirection = void 0;
    var i, s, c = t("../Util/LogUtils"),
      a = t("./FMItemLayout"),
      l = cc._decorator,
      u = l.ccclass,
      d = l.property,
      p = (l.requireComponent,
        l.disallowMultiple);
    l.menu;
    (function (t) {
      t[t.HORIZONTAL = 1] = "HORIZONTAL", t[t.VERTICAL = 2] = "VERTICAL";
    })(i = n.SlideDirection || (n.SlideDirection = {})),
    function (t) {
      t.TouchStart = "touch_start", t.Scrolling = "scrolling", t.TouchEnded = "touch_ended";
    }(s = n.FMTouchEvent || (n.FMTouchEvent = {}));
    var y = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.itemPrefab = null, e._slideDirection = i.HORIZONTAL, e._tempPoint_csryw = cc.v2(),
          e._tempPrevPoint_csryw = cc.v2(), e._outOfBoundaryAmount_csryw = cc.v2(0, 0), e._outOfBoundaryAmountDirty_csryw = !0,
          e._inited_csryw = !1, e._touchMoved_csryw = !1, e.cancelInnerEvents_csryw = !0,
          e.itemPrefabWidth_csryw = 0, e.itemPrefabHeight_csryw = 0, e;
      }
      return o(e, t), Object.defineProperty(e.prototype, "slideDirection", {
          get: function () {
            return this._slideDirection;
          },
          set: function (t) {
            this._slideDirection = t;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.onLoad = function () {
          this._init_csryw();
        }, e.prototype._init_csryw = function () {
          if (this._inited_csryw) return !1;
          var t = this.node.getComponent(cc.Widget);
          t && t.updateAlignment();
          var e = new cc.Node();
          e.anchorX = 0, e.anchorY = 1;
          var n = e.addComponent(cc.Widget);
          return n.top = 0, n.left = 0, n.right = 0, n.bottom = 0, n.isAlignTop = !0, n.isAlignLeft = !0,
            n.isAlignRight = !0, n.isAlignBottom = !0, this.node.addChild(e), n.updateAlignment(),
            e.addComponent(cc.Mask).type = cc.Mask.Type.RECT, this.content_csryw = new cc.Node(),
            e.addChild(this.content_csryw), this.content_csryw.width = e.width, this.content_csryw.height = e.height,
            this.content_csryw.anchorX = 0, this.content_csryw.anchorY = 1, this.content_csryw.x = 0,
            this.content_csryw.y = 0, this.itemPrefabWidth_csryw = this.itemPrefab.data.width,
            this.itemPrefabHeight_csryw = this.itemPrefab.data.height, this.scriptItemPrefab_csryw = this.itemPrefab.data.getComponent(a.default),
            this.scriptItemPrefab_csryw ? 0 == this.scriptItemPrefab_csryw.getItemChildrenCount_csryw() && c.LogUtils.error_csryw("FMTouchMaskView -> _init -> scriptItemPrefab item child count ==0") : c.LogUtils.error_csryw("FMTouchMaskView -> _init -> scriptItemPrefab is null"),
            this._inited_csryw = !0, !0;
        }, e.prototype._dispatchEvent_csryw = function (t) {
          console.log("FMTouchMaskView -> _dispatchEvent -> name", t);
        }, e.prototype.setCancelInnerEvents_csryw = function (t) {
          this.cancelInnerEvents_csryw = t;
        }, e.prototype.handlePressLogic_csryw = function (t) {
          this._dispatchEvent_csryw(s.TouchStart);
        }, e.prototype.handleMoveLogic_csryw = function (t) {
          var e = this.getLocalAxisAlignDelta_csryw(t),
            n = e = this.clampDelta_csryw(e),
            o = this.getHowMuchOutOfBoundary_csryw(n);
          0 === (n = n.add(o)).x && 0 === n.y || (this._moveContent_csryw(n), this._dispatchEvent_csryw(s.Scrolling));
        }, e.prototype.handleReleaseLogic_csryw = function (t) {
          this.getLocalAxisAlignDelta_csryw(t);
          this._dispatchEvent_csryw(s.TouchEnded);
        }, e.prototype._flattenVectorByDirection_csryw = function (t) {
          var e = t;
          return e.x = this._slideDirection == i.HORIZONTAL ? e.x : 0, e.y = this._slideDirection == i.VERTICAL ? e.y : 0,
            e;
        }, e.prototype._moveContent_csryw = function (t) {
          var e = this._flattenVectorByDirection_csryw(t),
            n = this.getContentPosition_csryw().add(e);
          this.setContentPosition_csryw(n);
        }, e.prototype.getLocalAxisAlignDelta_csryw = function (t) {
          return this.node.convertToNodeSpaceAR(t.getLocation(), this._tempPoint_csryw), this.node.convertToNodeSpaceAR(t.getPreviousLocation(), this._tempPrevPoint_csryw),
            this._tempPoint_csryw.sub(this._tempPrevPoint_csryw);
        }, e.prototype._hasNestedViewGroup_csryw = function (t, e) {
          if (t.eventPhase === cc.Event.CAPTURING_PHASE) {
            if (e)
              for (var n = 0; n < e.length; ++n) {
                var o = e[n];
                if (this.node === o) return !!t.target.getComponent(cc.ViewGroup);
                if (o.getComponent(cc.ViewGroup)) return !0;
              }
            return !1;
          }
        }, e.prototype._stopPropagationIfTargetIsMe_csryw = function (t) {
          t.eventPhase === cc.Event.AT_TARGET && t.target === this.node && t.stopPropagation();
        }, e.prototype._onTouchBegan_csryw = function (t, e) {
          if (this.enabledInHierarchy && !this._hasNestedViewGroup_csryw(t, e)) {
            var n = t.touch;
            this.content_csryw && this.handlePressLogic_csryw(n), this._touchMoved_csryw = !1,
              this._stopPropagationIfTargetIsMe_csryw(t);
          }
        }, e.prototype._onTouchMoved_csryw = function (t, e) {
          if (this.enabledInHierarchy && !this._hasNestedViewGroup_csryw(t, e)) {
            var n = t.touch;
            if (this.node._hitTest(n.getLocation(), this.node) && (this.content_csryw && this.handleMoveLogic_csryw(n),
                this.cancelInnerEvents_csryw)) {
              if (n.getLocation().sub(n.getStartLocation()).mag() > 7 && !this._touchMoved_csryw) {
                var o = new cc.Event.EventTouch(t.getTouches(), t.bubbles);
                o.type = cc.Node.EventType.TOUCH_CANCEL, o.touch = t.touch, o.simulate = !0, t.target.dispatchEvent(o),
                  this._touchMoved_csryw = !0;
              }
              this._stopPropagationIfTargetIsMe_csryw(t);
            }
          }
        }, e.prototype._onTouchEnded_csryw = function (t, e) {
          if (this.enabledInHierarchy && !this._hasNestedViewGroup_csryw(t, e)) {
            var n = t.touch;
            this.content_csryw && this.handleReleaseLogic_csryw(n), this._touchMoved_csryw ? t.stopPropagation() : this._stopPropagationIfTargetIsMe_csryw(t);
          }
        }, e.prototype._onTouchCancelled_csryw = function (t, e) {
          if (this.enabledInHierarchy && !this._hasNestedViewGroup_csryw(t, e)) {
            if (!t.simulate) {
              var n = t.touch;
              this.content_csryw && this.handleReleaseLogic_csryw(n);
            }
            this._stopPropagationIfTargetIsMe_csryw(t);
          }
        }, e.prototype.clampDelta_csryw = function (t) {
          return this._slideDirection == i.HORIZONTAL ? t.y = 0 : this._slideDirection == i.VERTICAL && (t.x = 0),
            t;
        }, e.prototype.getHowMuchOutOfBoundary_csryw = function (t) {
          if ((t = t || cc.v2(0, 0)).fuzzyEquals(cc.v2(0, 0), 1e-4) && !this._outOfBoundaryAmountDirty_csryw) return this._outOfBoundaryAmount_csryw;
          var e = cc.v2(0, 0);
          return t.fuzzyEquals(cc.v2(0, 0), 1e-4) && (this._outOfBoundaryAmount_csryw = e,
            this._outOfBoundaryAmountDirty_csryw = !1), e = this.clampDelta_csryw(e);
        }, e.prototype.getContentPosition_csryw = function () {
          return this.content_csryw.getPosition();
        }, e.prototype.setContentPosition_csryw = function (t) {
          t.fuzzyEquals(this.getContentPosition_csryw(), 1e-4) || (this.content_csryw.setPosition(t),
            this._outOfBoundaryAmountDirty_csryw = !0);
        }, e.prototype.onEnable = function () {
          this._registerEvent_csryw();
        }, e.prototype.onDisable = function () {
          this._unregisterEvent_csryw();
        }, e.prototype._registerEvent_csryw = function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan_csryw, this, !0),
            this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved_csryw, this, !0),
            this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded_csryw, this, !0), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled_csryw, this, !0);
        }, e.prototype._unregisterEvent_csryw = function () {
          this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan_csryw, this, !0),
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved_csryw, this, !0),
            this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded_csryw, this, !0),
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled_csryw, this, !0);
        }, r([d({
          tooltip: "layout预制体(0,1)",
          type: cc.Prefab
        })], e.prototype, "itemPrefab", void 0), r([d()], e.prototype, "_slideDirection", void 0),
        r([d({
          type: cc.Enum(i),
          tooltip: "滚动方向:\n HORIZONTAL 水平滚动\nVERTICAL垂直滚动"
        })], e.prototype, "slideDirection", null), e = r([u, p()], e);
    }(cc.Component);
    n.default = y, cc._RF.pop();
  }, {
    "../Util/LogUtils": "LogUtils",
    "./FMItemLayout": "FMItemLayout"
  }],
  FMViewBaseWx: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "1b766lqhIBIK5ZQn1LVupsU", "FMViewBaseWx");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../newFrame/src/event/ADPageEventEnum"),
      c = t("../newFrame/src/event/ADPageEventMgr"),
      a = cc._decorator,
      l = a.ccclass,
      u = (a.property,
        function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._banner_csryw = null, e;
          }
          return o(e, t), e.prototype.initView_csryw = function () {}, e.prototype.addEvent_csryw = function () {},
            e.prototype.removeEvent_csryw = function () {}, e.prototype.showBanner_csryw = function () {
              c.default.emitEvent_csryw(s.ADEvent.SHOW_BANNER);
            }, e.prototype.hideBanner_csryw = function () {
              c.default.emitEvent_csryw(s.ADEvent.HIDE_BANNER);
            }, e = r([l], e);
        }(i.default));
    n.default = u, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../newFrame/src/event/ADPageEventEnum": "ADPageEventEnum",
    "../newFrame/src/event/ADPageEventMgr": "ADPageEventMgr"
  }],
  FMViewBase: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "3b171HYpFRDJ7C8uE/nm09B", "FMViewBase");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = t("../Interface/FMInterface"),
      i = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e._isInit_csryw = 0, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            this._initView_csryw();
          }, e.prototype._initView_csryw = function () {
            if (0 == this._isInit_csryw) return this._isInit_csryw = 1, this.initView_csryw(),
              this.addEvent_csryw(), this._isInit_csryw = 2, !0;
          }, e.prototype.onListenerEventView_csryw = function (t) {
            this._listenerCallView_csryw = t;
          }, e.prototype.emitListenerEvent_csryw = function (t) {
            console.log("发送 " + t), this._listenerCallView_csryw && r.callFM_csryw(this._listenerCallView_csryw, t, this);
          }, e.prototype.removeView_csryw = function () {
            this.onDestroy(), this.node.destroy();
          }, e.prototype.hideView_csryw = function () {
            this.node.active = !1;
          }, e.prototype.showView_csryw = function () {
            this.node && (this.node.active = !0);
          }, e.prototype.isActiveView_csryw = function () {
            return !(!cc.isValid(this, !0) || !this.node.activeInHierarchy);
          }, e.prototype.showBanner_csryw = function () {}, e.prototype.hideBanner_csryw = function () {},
          e.prototype.onEnable = function () {}, e.prototype.onDisable = function () {
            this.hideBanner_csryw();
          }, e.prototype.onDestroy = function () {
            this.removeEvent_csryw(), this.hideBanner_csryw();
          }, e;
      }(cc.Component);
    n.default = i, cc._RF.pop();
  }, {
    "../Interface/FMInterface": "FMInterface"
  }],
  GameEndUI: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "223f5DYvcdLO6jm3rVTpQxg", "GameEndUI");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../utils/EventCenter"),
      s = t("../Constants"),
      c = t("../../../Platform/weixin/public/ADWXBanner"),
      a = t("../core/CustomUser"),
      l = t("../utils/ResCenter"),
      u = t("../utils/SoundsManager"),
      d = t("../../../FrameWork/Mgr/GameMgr"),
      p = cc._decorator,
      y = p.ccclass,
      h = p.property,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.plWin = null, e.plLose = null, e.content = null, e.export2Prefab = null,
            e.bannerAd = null, e.gameLayer = null, e.isWin = !1, e;
        }
        return o(e, t), e.prototype.onEnable = function () {
            if (this.isWin) {
              this.plWin.active = !0, this.plLose.active = !1;
              var t = a.default.levelData.LevelAward + a.default.extraRewardGold;
              l.default.createTreasureBox({
                type: "gold",
                rewardNum: t,
                inEnd: !0
              });
            } else this.plWin.active = !1, this.plLose.active = !0;
            i.default.on(s.ADEvent.SHOWBANNER, this.showBanner, this), i.default.on(s.ADEvent.HIDEBANNER, this.hideBanner, this);
          }, e.prototype.onDisable = function () {
            i.default.clearAllByNode(this);
          }, e.prototype.showBanner = function () {
            this.bannerAd.showView_csryw();
          }, e.prototype.hideBanner = function () {
            this.bannerAd.hideView_csryw();
          }, e.prototype.onClickRelive = function () {
            u.default.click();
          }, e.prototype.onClickQuit = function () {
            u.default.click(), this.showExportView();
          }, e.prototype.showExportView = function () {}, e.prototype.onExport2NextClick = function () {
            d.default.getInstance_csryw().loadLobbyScene();
          }, r([h(cc.Node)], e.prototype, "plWin", void 0), r([h(cc.Node)], e.prototype, "plLose", void 0),
          r([h(cc.Node)], e.prototype, "content", void 0), r([h(cc.Prefab)], e.prototype, "export2Prefab", void 0),
          r([h(c.default)], e.prototype, "bannerAd", void 0), r([h(cc.Node)], e.prototype, "gameLayer", void 0),
          e = r([y], e);
      }(cc.Component);
    n.default = _, cc._RF.pop();
  }, {
    "../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../Platform/weixin/public/ADWXBanner": "ADWXBanner",
    "../Constants": "Constants",
    "../core/CustomUser": "CustomUser",
    "../utils/EventCenter": "EventCenter",
    "../utils/ResCenter": "ResCenter",
    "../utils/SoundsManager": "SoundsManager"
  }],
  GameMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "00994MxDNBEArlTl2C0FNx/", "GameMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../User/User"),
      r = t("../Util/LogUtils"),
      i = t("../Config/AppConfig"),
      s = t("../../Platform/weixin/newFrame/src/event/ADPageEventMgr"),
      c = t("../../Platform/weixin/newFrame/src/event/ADPageEventEnum"),
      a = t("../../Platform/weixin/WXHttp"),
      l = function () {
        function t() {
          this.isFirstLoadAD = !1, this.isWinner = !1, this.isShowResult = !1, this.isFirstPop = !1,
            this.isFirstPopMore = !1, this.lastLv = 0;
        }
        return t.getInstance_csryw = function () {
          return t._instance_csryw;
        }, t.prototype.loadLobbyScene = function () {
          cc.director.loadScene("LobbyScene");
        }, t.prototype.loadTransitionScene = function () {
          cc.director.loadScene("TransitionScene");
        }, t.prototype.loadFightScene = function () {
          cc.director.loadScene("FightScene");
        }, t.prototype.preloadScene_csryw = function () {
          r.LogUtils.warn_csryw("GameMgr.getInstance().preloadScene_csryw这里可以加载需要预加载的场景"),
            cc.director.preloadScene("LobbyScene");
        }, t.prototype.onLoadToWorldScene_csryw = function () {
          cc.director.loadScene("LobbyScene", function (t, e) {
            a.default.getIsNewUser() ? a.default.addActionLog(100) : a.default.addActionLog(101),
              console.log("跳转游戏场景 LobbyScene");
          });
        }, t.prototype.onMainToGameScene_csryw = function () {
          cc.director.loadScene("FMGameScene", function (t, e) {
            console.log("跳转游戏场景 FMGameScene");
          });
        }, t.prototype.onGameToGameWinScene_csryw = function () {
          cc.director.loadScene("FMGameSettleWinScene", function (t, e) {
            console.log("跳转游戏场景 FMGameSettleWinScene"), s.default.emitEvent_csryw(c.PageEvent.SHOW_RESULT, !0, !0);
          });
        }, t.prototype.onGameToGameFailScene_csryw = function () {
          cc.director.loadScene("FMGameSettleFailScene", function (t, e) {
            console.log("跳转游戏场景 FMGameSettleFailScene"), s.default.emitEvent_csryw(c.PageEvent.SHOW_RESULT, !0, !1);
          });
        }, t.prototype.onGameWinToScene_csryw = function () {
          cc.director.loadScene("FMMainScene", function (t, e) {
            console.log("跳转游戏场景 FMMainScene");
          }), this.loadLobbyScene();
        }, t.prototype.onGameFailToScene_csryw = function () {
          cc.director.loadScene("FMMainScene", function (t, e) {
            console.log("跳转游戏场景 FMMainScene");
          }), this.loadLobbyScene();
        }, t.prototype.onGameSettleToScene_csryw = function () {
          cc.director.loadScene("FMMainScene", function (t, e) {
            console.log("跳转游戏场景 FMMainScene");
          });
        }, t.prototype.saveGameData_csryw = function () {
          cc.sys.localStorage.setItem("data" + i.default.AppID_csryw, o.default.getSaveData_csryw());
        }, t._instance_csryw = new t(), t;
      }();
    n.default = l, cc._RF.pop();
  }, {
    "../../Platform/weixin/WXHttp": "WXHttp",
    "../../Platform/weixin/newFrame/src/event/ADPageEventEnum": "ADPageEventEnum",
    "../../Platform/weixin/newFrame/src/event/ADPageEventMgr": "ADPageEventMgr",
    "../Config/AppConfig": "AppConfig",
    "../User/User": "User",
    "../Util/LogUtils": "LogUtils"
  }],
  GameUI: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "24828/MDSNM2pwmcNHfUHPM", "GameUI");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Mgr/GameMgr"),
      s = t("../../../FrameWork/Mgr/UmengMgr"),
      c = t("../../../FrameWork/User/User"),
      a = t("../config/AIMiddleConfig"),
      l = t("../config/LevelConfig"),
      u = t("../Constants"),
      d = t("../core/CustomUser"),
      p = t("../utils/EventCenter"),
      y = t("../utils/ResCenter"),
      h = t("../utils/SoundsManager"),
      _ = t("./Component/IconSkill"),
      f = cc._decorator,
      w = f.ccclass,
      g = f.property,
      m = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.btnGame = [], e.plEnd = null, e._enterGameTime = 0, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            var t = this,
              e = d.default.assets.roles[0].rid;
            this.btnGame.forEach(function (n, o) {
              console.log("onLoad  btn.name = ", n.name), n.on(cc.Node.EventType.TOUCH_START, t._touchBegin, t),
                n.on(cc.Node.EventType.TOUCH_END, t._touchEnd, t), n.on(cc.Node.EventType.TOUCH_CANCEL, t._touchEnd, t),
                n.getComponent(_.default).initDinosaurId(e);
            }, this), p.default.on(u.UIEvent.GAMEFAIL, this._reliveShow, this), p.default.on(u.UIEvent.GAMEWIN, this._winShow, this);
          }, e.prototype.onDestroy = function () {
            cc.director.resume(), p.default.clearAllByNode(this);
          }, e.prototype.start = function () {
            var t = new Date();
            this._enterGameTime = t.getTime(), console.log("this._enterGameTime  =", this._enterGameTime),
              s.UmengMgr.sendGameEventLvInto_csryw(c.default.getLeveNum_csryw() + "");
          }, e.prototype._touchBegin = function (t) {
            p.default.emit(u.UIEvent.TOUCHDOWN, t.target.name);
          }, e.prototype._touchEnd = function (t) {
            p.default.emit(u.UIEvent.TOUCHUP, t.target.name);
          }, e.prototype._reliveShow = function () {
            var t = (new Date().getTime() - this._enterGameTime) / 1e3;
            s.UmengMgr.sendGameEventLvFinish_csryw(c.default.getLeveNum_csryw() + "", !1, t);
            var e = d.default.assets.roles[1].rid,
              n = d.default.getDinosaurDataById(e);
            n && (n.aiLoseCount >= d.default.aiLoseMax && n.aiLevel > 0 ? (n.aiLevel += -1,
              n.aiLoseCount = 0) : n.aiLoseCount += 1);
            d.default.isLose = !0;
            var o = c.default.getLeveNum_csryw();
            y.default.createSettleView({
              curLevel: o,
              rewardNum: 0,
              isWin: !1
            }, this.plEnd);
          }, e.prototype._winShow = function () {
            var t = (new Date().getTime() - this._enterGameTime) / 1e3;
            s.UmengMgr.sendGameEventLvFinish_csryw(c.default.getLeveNum_csryw() + "", !0, t);
            var e = d.default.assets.roles[1].rid,
              n = d.default.getDinosaurDataById(e);
            if (n) {
              var o = n.aiLevel;
              a.default.getInstance().getDataById(o + 1) && (n.aiLevel = o + 1);
            }
            var r = d.default.levelData.LevelAward + d.default.extraRewardGold,
              u = c.default.getLeveNum_csryw();
            d.default.curLevelComplete = !0, c.default.addMoney_csryw(r), d.default.extraRewardGold = 0,
              c.default.getLeveNum_csryw() < l.default.getInstance().getDataLength() && c.default.getLeveNum_csryw() == d.default.levelData.Id && c.default.setLeveNum_csryw(c.default.getLeveNum_csryw() + 1),
              i.default.getInstance_csryw().saveGameData_csryw(), d.default.isLose = !1, y.default.createSettleView({
                rewardNum: r,
                curLevel: u,
                isWin: !0
              }, this.plEnd);
          }, e.prototype.onClickPause = function () {
            h.default.click(), this.scheduleOnce(function () {
              cc.director.pause();
            }, .1);
          }, e.prototype.onClickResume = function () {
            h.default.click(), cc.director.resume();
          }, e.prototype.onClickQuit = function () {
            h.default.click(), i.default.getInstance_csryw().loadLobbyScene();
          }, e.prototype.getJoyStickPos = function () {
            return this.node.getChildByName("joystick").getPosition();
          }, e.prototype.getNormalAttackButtonPos = function () {
            var t = this.node.getChildByName("skinButtons").getChildByName("normalAtk"),
              e = t.parent.convertToWorldSpaceAR(t.getPosition());
            return e.x -= .5 * cc.visibleRect.width, e.y -= .5 * cc.visibleRect.height, e;
          }, e.prototype.getSkill1ButtonPos = function () {
            var t = this.node.getChildByName("skinButtons").getChildByName("skill1"),
              e = t.parent.convertToWorldSpaceAR(t.getPosition());
            return e.x -= .5 * cc.visibleRect.width, e.y -= .5 * cc.visibleRect.height, e;
          }, e.prototype.getSkill2ButtonPos = function () {
            var t = this.node.getChildByName("skinButtons").getChildByName("skill2"),
              e = t.parent.convertToWorldSpaceAR(t.getPosition());
            return e.x -= .5 * cc.visibleRect.width, e.y -= .5 * cc.visibleRect.height, e;
          }, e.prototype.getSkill3ButtonPos = function () {
            var t = this.node.getChildByName("skinButtons").getChildByName("skill3"),
              e = t.parent.convertToWorldSpaceAR(t.getPosition());
            return e.x -= .5 * cc.visibleRect.width, e.y -= .5 * cc.visibleRect.height, e;
          }, e.prototype.getSkill4ButtonPos = function () {
            var t = this.node.getChildByName("skinButtons").getChildByName("skill4"),
              e = t.parent.convertToWorldSpaceAR(t.getPosition());
            return e.x -= .5 * cc.visibleRect.width, e.y -= .5 * cc.visibleRect.height, e;
          }, r([g([cc.Node])], e.prototype, "btnGame", void 0), r([g(cc.Node)], e.prototype, "plEnd", void 0),
          e = r([w], e);
      }(cc.Component);
    n.default = m, cc._RF.pop();
  }, {
    "../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../FrameWork/Mgr/UmengMgr": "UmengMgr",
    "../../../FrameWork/User/User": "User",
    "../Constants": "Constants",
    "../config/AIMiddleConfig": "AIMiddleConfig",
    "../config/LevelConfig": "LevelConfig",
    "../core/CustomUser": "CustomUser",
    "../utils/EventCenter": "EventCenter",
    "../utils/ResCenter": "ResCenter",
    "../utils/SoundsManager": "SoundsManager",
    "./Component/IconSkill": "IconSkill"
  }],
  GameView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "56addJYeABKZYxfqz8qMBxF", "GameView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../wxViewBase"),
      s = cc._decorator,
      c = s.ccclass,
      a = (s.property, s.disallowMultiple),
      l = s.menu,
      u = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return o(e, t), e.prototype.setP_csryw = function (t) {}, e = r([c, a(), l("框架组件/游戏中页面")], e);
      }(i.default);
    n.default = u, cc._RF.pop();
  }, {
    "../wxViewBase": "wxViewBase"
  }],
  Game: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d099aR5V1tD6KLc5FZZzbue", "Game");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../FrameWork/Mgr/UmengMgr"),
      c = t("../../FrameWork/Mgr/WudianMgr"),
      a = t("../../FrameWork/User/User"),
      l = t("../../Platform/CustimWxApi"),
      u = t("../../Platform/weixin/BannerMgr"),
      d = t("../../Platform/weixin/BannerPos"),
      p = t("../../Platform/weixin/newFrame/src/event/ADPageEventEnum"),
      y = t("../../Platform/weixin/newFrame/src/event/ADPageEventMgr"),
      h = t("./Camera"),
      _ = t("./CameraGhost"),
      f = t("./Constants"),
      w = t("./core/ai/AIMiddle"),
      g = t("./core/ai/AINormal"),
      m = t("./core/Character"),
      v = t("./core/CustomUser"),
      A = t("./GhostNode"),
      b = t("./UI/Component/Hud"),
      S = t("./UI/GameUI"),
      C = t("./UI/GuidingLayer"),
      I = t("./UI/Lobby/DinosaurMask"),
      E = t("./utils/EventCenter"),
      k = t("./utils/SoundsManager"),
      T = t("./utils/Utils"),
      M = cc._decorator,
      P = M.ccclass,
      D = M.property,
      O = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.gameLayer = null, e.uiLayer = null, e.camera = null, e.huds = [], e.ghostRenderNode0 = null,
            e.ghostRenderNode1 = null, e.shadowBg = null, e.bgNode = null, e.bgFarNode = null,
            e.lblDamage = null, e.startFlag = null, e.superChaTu = [], e.plDoubleTime = null,
            e.ndDoubleWord = null, e.endingHeroMask = [], e.guidingLayer = null, e.btnEff1 = null,
            e.btnEff2 = null, e.btnEff4 = null, e.chaoshiNode = null, e.countDownTimeLabelList = [],
            e.koNode = null, e.koBg = null, e.countDownNum = 60, e.bOver = !1, e.state = f.GameState.FREE,
            e.superTime = !1, e.isKoTime = !1, e.characters = [], e.isWin = !1, e.bannerShowOnce = !1,
            e.compelOver = !1, e.aiConfig = [g.default, w.default], e.isPaused = !1, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            k.default.playMusic("bgmOperater"), cc.director.getCollisionManager().enabled = !0,
              cc.director.getPhysicsManager().enabled = !0, E.default.on(f.GameEvent.END, this._gameOver, this),
              s.UmengMgr.sendEvent_csryw(s.StatsFrameWorkEvent.ReportEnterGame, {
                currentLevelNum: a.default.getLeveNum_csryw() + ""
              }), y.default.emitEvent_csryw(p.PageEvent.SHOW_GAME), l.default.showCustimAd(l.CustimWxTag.EnumCustimInGameLeft),
              l.default.showCustimAd(l.CustimWxTag.EnumCustimInGameRight);
          }, e.prototype.onDestroy = function () {
            E.default.clearAllByNode(this);
          }, e.prototype.start = function () {
            this._createCharacters();
          }, e.prototype.update = function (t) {
            this.state != f.GameState.END && (this._checkGameIsOver(), this.state >= f.GameState.START && this.state <= f.GameState.END && this._onCountDownTime(t));
          }, e.prototype._onCountDownTime = function (t) {
            this.countDownNum -= t, this.countDownNum > 0 ? this.countDownNum > 5 ? (this.countDownTimeLabelList[0].string = Math.floor(this.countDownNum) + "",
              this.countDownTimeLabelList[0].node.active = !0, this.countDownTimeLabelList[1].node.active = !1) : (this.countDownTimeLabelList[1].string = Math.floor(this.countDownNum) + "",
              this.countDownTimeLabelList[0].node.active = !1, this.countDownTimeLabelList[1].node.active = !0) : (this.countDownNum = 0,
              this.countDownTimeLabelList[0].string = "0", this.countDownTimeLabelList[1].string = "0",
              this._checkTimeIsOver());
          }, e.prototype._stepFrame = function (t, e) {
            var n = this;
            if (void 0 === t && (t = .1), void 0 === e && (e = 0), 0 != t && !this.isPaused && this.characters) {
              for (var o = function (e) {
                  var o = r.characters[e];
                  o.rigid.active = !1, o.animator.pauseAnim(), o.scheduleOnce(function () {
                    n.isPaused = !1, o.rigid.active = !0, o.animator.resumeAnim();
                  }, t);
                }, r = this, i = 0; i < this.characters.length; i++) o(i);
              this.isPaused = !0;
            }
          }, e.prototype._stepMeFrame = function (t) {
            var e = this;
            if (void 0 === t && (t = .1), 0 != t && !this.isPaused && this.characters)
              for (var n = function (n) {
                  var r = o.characters[n];
                  if (0 == r.pid) return r.rigid.active = !1, r.animator.pauseAnim(), r.scheduleOnce(function () {
                    e.isPaused = !1, r.rigid.active = !0, r.animator.resumeAnim();
                  }, t), o.isPaused = !0, "break";
                }, o = this, r = 0; r < this.characters.length; r++) {
                if ("break" === n(r)) break;
              }
          }, e.prototype.onClickTestStepFrame = function () {
            this._stepFrame();
          }, e.prototype._checkTimeIsOver = function () {
            this.characters && this.characters[0] && (this.isKoTime || this.bOver || (this.characters[0].props.hp = 0));
          }, e.prototype._checkGameIsOver = function () {
            if (this.characters) {
              for (var t = 0, e = null, n = 0, o = this.characters; n < o.length; n++) {
                var r = o[n];
                0 == r.props.hp && 0 == t && (t = 1), r.isDead ? (t = 2, r, 0 == r.pid ? this.isWin = !1 : this.isWin = !0) : r.fsmAct.isIdle() && (e = !0),
                  r.props.hp <= r.props.hpShowBanner && this._showBanner();
              }
              1 == t && this._overStepFrame(), (2 == t && !this.isKoTime && e || this.compelOver) && this._gameOver();
            }
          }, e.prototype._overStepFrame = function () {
            var t = this;
            this.isKoTime || this.bOver || (this.countDownNum > 0 ? (k.default.playEff("ko"),
              cc.tween(this.koNode).repeat(30, cc.tween().call(function () {
                t._stepFrame(.02);
              }).delay(.04)).call(function () {
                t._doKoAction();
              }).start()) : (this.chaoshiNode.active = !0, cc.tween(this.chaoshiNode).to(.1, {
              scale: 1.2
            }).to(.2, {
              scale: .9
            }).to(.2, {
              scale: 1.05
            }).to(.1, {
              scale: 1
            }).call(function () {
              t.isKoTime = !1;
            }).start(), this.scheduleOnce(function () {
              t.compelOver = !0;
            }, 3)), this.isKoTime = !0, this.bOver = !0);
          }, e.prototype._doKoAction = function () {
            var t = this;
            if (!this.koNode.active) {
              this.koNode.active = !0, this.koNode.opacity = 0, cc.tween(this.koNode).to(.5, {
                opacity: 255
              }).start();
              var e = this.koNode.getChildByName("KOwenzi");
              e.scale = 2, cc.tween(e).to(1, {
                scale: 1
              }, {
                easing: "elasticOut"
              }).delay(1).call(function () {
                t.isKoTime = !1, t.koNode.active = !1;
              }).start();
            }
          }, e.prototype._showBanner = function () {
            this.bannerShowOnce || i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.HPdisability && c.default.wudianFlag_csryw && (this.bannerShowOnce = !0,
              u.default.showBanner_csryw(d.BannerPos.Right_Bottom), this.scheduleOnce(function () {
                u.default.hideBanner_csryw();
              }, i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.HPdisabilitytime));
          }, e.prototype._setState = function (t) {
            this.state = t;
          }, e.prototype._gameOver = function () {
            this.state != f.GameState.END && (l.default.hideCustimAd(l.CustimWxTag.EnumCustimInGameLeft),
              l.default.hideCustimAd(l.CustimWxTag.EnumCustimInGameRight), y.default.emitEvent_csryw(p.PageEvent.SHOW_GAME, !1),
              this.state = f.GameState.END, this.isWin ? E.default.emit(f.UIEvent.GAMEWIN) : E.default.emit(f.UIEvent.GAMEFAIL),
              this.characters.forEach(function (t) {
                t.reset(), t.enableGhost(!1);
              }));
          }, e.prototype._createCharacters = function () {
            this.bgNode.addChild(v.default.assets.gameBgs[0]);
            for (var t = v.default.assets.roles[0].rid == v.default.assets.roles[1].rid, e = 0; e < v.default.assets.roles.length; e++) {
              var n = v.default.assets.roles[e],
                o = null,
                r = n.node;
              if (0 == e) o = r.addComponent(m.default), r.y -= 300, r.x = -300;
              else {
                var i = 0,
                  s = v.default.getDinosaurDataById(n.rid);
                s && (i = s.aiLevel);
                var c = r.addComponent(w.default);
                c.onSetAILevel(i), o = c, r.y -= 300, r.x = 300;
              }
              o.initProperty(n.rid, e, t), this.characters.push(o), r.group = "dinosaur_" + e,
                this.gameLayer.addChild(r, 2 - e), o.gameCtrl = this, o.camera = this.camera, this.huds[e].init(o),
                console.log("rid", n.rid), o.ghostNode = this["ghostRenderNode" + e].getComponent(A.default),
                o.ghostNode.setTarget(o.node);
              var a = o.node.getChildByName("camera").getComponent(_.default);
              a.setRenderNode(this["ghostRenderNode" + e]), a.createGhost(r.groupIndex);
            }
            this.characters[0].setTarget(this.characters[1]), this.characters[1].setTarget(this.characters[0]),
              this.camera.setCharacters(this.characters), this._gameReady();
          }, e.prototype._gameReady = function () {
            this.state = f.GameState.READY;
          }, e.prototype._gameStart = function () {
            var t = this;
            this.bOver = !1, this.startFlag.active = !0, this.startFlag.x = .5 * -cc.visibleRect.width - .5 * this.startFlag.width;
            var e = .5 * cc.visibleRect.width + this.startFlag.width;
            cc.tween(this.startFlag).show().to(.3, {
              x: 0
            }, {
              easing: "quartOut"
            }).delay(1).to(.3, {
              x: e
            }).call(function () {
              t.state = f.GameState.START, t.characters.forEach(function (t, e) {
                t.forceIdle(), t.fsmAct.forceIdle(), t.energyAutoTimer();
              }, t), t._initDoubleTimeSchedule(), k.default.playEff("kaishi");
            }).hide().start();
          }, e.prototype._guidingOver = function () {
            v.default.setGuided(), this.state = f.GameState.START, this.characters.forEach(function (t, e) {
              t.energyAutoTimer();
            }, this);
          }, e.prototype._shadowTheBg = function (t) {
            var e = 170,
              n = .5;
            t || (e = 0, n = 1), this.shadowBg.opacity != e && (this.shadowBg.stopAllActions(),
              cc.tween(this.shadowBg).to(n, {
                opacity: e
              }).start());
          }, e.prototype.onClickRecharge = function () {
            this.characters.forEach(function (t, e) {
              t.props.reset(), t.props.setMp(t.props.mpMax);
            }, this);
          }, e.prototype._dealDamage = function (t, e) {
            if (T.default.debug) {
              var n = t.parent.convertToWorldSpaceAR(t.position);
              n.x -= .5 * cc.visibleRect.width, n.y -= .5 * cc.visibleRect.height - 130;
              var o = cc.instantiate(this.lblDamage),
                r = o.getComponent(cc.Label);
              o.active = !0, r.string = Math.floor(e) + "", o.setPosition(n), o.runAction(cc.sequence(cc.spawn(cc.moveBy(1, 0, 50), cc.fadeOut(1)), cc.removeSelf())),
                this.gameLayer.addChild(o, 3);
            }
          }, e.prototype._showChaTu = function (t) {}, e.prototype._initDoubleTimeSchedule = function () {
            var t = this,
              e = 0;
            this.schedule(function () {
              t.state == f.GameState.START && (30 == e && t._doubleTime(), e++);
            }, 1);
          }, e.prototype._doubleTime = function () {
            k.default.playEff("sound_9"), this.characters.forEach(function (t, e) {
                t.props.atk *= 2;
              }), this.plDoubleTime.active = !0, this.plDoubleTime.width = 0, this.plDoubleTime.opacity = 0,
              cc.tween(this.plDoubleTime).show().to(.5, {
                width: cc.visibleRect.width,
                opacity: 130
              }).delay(1).to(.5, {
                opacity: 0
              }).hide().start(), this.ndDoubleWord.scale = 1.5, this.ndDoubleWord.opacity = 0,
              this.ndDoubleWord.active = !0, cc.tween(this.ndDoubleWord).show().to(.5, {
                opacity: 180,
                scale: 1
              }, {
                easing: "backInOut"
              }).delay(1).to(.5, {
                opacity: 0
              }).hide().start();
          }, e.prototype._createEnergyBall = function (t) {
            t.props.increaseEnergyByNormalAttack();
          }, r([D(cc.Node)], e.prototype, "gameLayer", void 0), r([D(S.default)], e.prototype, "uiLayer", void 0),
          r([D(h.default)], e.prototype, "camera", void 0), r([D([b.default])], e.prototype, "huds", void 0),
          r([D(cc.Node)], e.prototype, "ghostRenderNode0", void 0), r([D(cc.Node)], e.prototype, "ghostRenderNode1", void 0),
          r([D(cc.Node)], e.prototype, "shadowBg", void 0), r([D(cc.Node)], e.prototype, "bgNode", void 0),
          r([D(cc.Node)], e.prototype, "bgFarNode", void 0), r([D(cc.Node)], e.prototype, "lblDamage", void 0),
          r([D(cc.Node)], e.prototype, "startFlag", void 0), r([D([I.default])], e.prototype, "superChaTu", void 0),
          r([D(cc.Node)], e.prototype, "plDoubleTime", void 0), r([D(cc.Node)], e.prototype, "ndDoubleWord", void 0),
          r([D([I.default])], e.prototype, "endingHeroMask", void 0), r([D(C.default)], e.prototype, "guidingLayer", void 0),
          r([D(sp.Skeleton)], e.prototype, "btnEff1", void 0), r([D(sp.Skeleton)], e.prototype, "btnEff2", void 0),
          r([D(sp.Skeleton)], e.prototype, "btnEff4", void 0), r([D(cc.Node)], e.prototype, "chaoshiNode", void 0),
          r([D([cc.Label])], e.prototype, "countDownTimeLabelList", void 0), r([D(cc.Node)], e.prototype, "koNode", void 0),
          r([D(cc.Node)], e.prototype, "koBg", void 0), e = r([P], e);
      }(cc.Component);
    n.default = O, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Mgr/UmengMgr": "UmengMgr",
    "../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../FrameWork/User/User": "User",
    "../../Platform/CustimWxApi": "CustimWxApi",
    "../../Platform/weixin/BannerMgr": "BannerMgr",
    "../../Platform/weixin/BannerPos": "BannerPos",
    "../../Platform/weixin/newFrame/src/event/ADPageEventEnum": "ADPageEventEnum",
    "../../Platform/weixin/newFrame/src/event/ADPageEventMgr": "ADPageEventMgr",
    "./Camera": "Camera",
    "./CameraGhost": "CameraGhost",
    "./Constants": "Constants",
    "./GhostNode": "GhostNode",
    "./UI/Component/Hud": "Hud",
    "./UI/GameUI": "GameUI",
    "./UI/GuidingLayer": "GuidingLayer",
    "./UI/Lobby/DinosaurMask": "DinosaurMask",
    "./core/Character": "Character",
    "./core/CustomUser": "CustomUser",
    "./core/ai/AIMiddle": "AIMiddle",
    "./core/ai/AINormal": "AINormal",
    "./utils/EventCenter": "EventCenter",
    "./utils/SoundsManager": "SoundsManager",
    "./utils/Utils": "Utils"
  }],
  GhostNode: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d8537foujdD+aua6kREg0k0", "GhostNode");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = (i.property, function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.target = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          this.node.zIndex = 0;
        }, e.prototype.start = function () {
          this.enableGhost(!1);
        }, e.prototype.update = function (t) {}, e.prototype.setTarget = function (t) {
          this.target = t;
        }, e.prototype.enableGhost = function (t) {
          var e = this;
          !this.target && t || (t ? (this.node.children.forEach(function (t, n) {
            t.position = e.target.position;
          }, this), this.schedule(this.shadowFollow, .1, cc.macro.REPEAT_FOREVER)) : (this.unschedule(this.shadowFollow),
            this.node.children.forEach(function (t, e) {
              t.y = 1e3;
            }, this)));
        }, e.prototype.shadowFollow = function () {
          var t = this;
          this.node.children.forEach(function (e, n) {
            t.target.position.sub(e.position).mag() > 0 && (e.stopAllActions(), e.runAction(cc.moveTo(.1 * n + .02, t.target.x, t.target.y)));
          });
        }, e = r([s], e);
      }(cc.Component));
    n.default = c, cc._RF.pop();
  }, {}],
  GlobalConfig: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "7423a8TjuJHFrnFS/jIqGYv", "GlobalConfig"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.GlobalConfigData = n.LvUnlockReward = void 0;
    var o = function () {
      return function () {};
    }();
    n.LvUnlockReward = o;
    var r = function () {
      return function () {};
    }();
    n.GlobalConfigData = r;
    var i = function () {
      function t() {
        this._data = new r();
      }
      return t.getInstance = function () {
        return null == t._instance && (t._instance = new t()), t._instance;
      }, t.prototype.init = function (t) {
        this._data = t;
      }, t.prototype.getData = function () {
        return this._data;
      }, t;
    }();
    n.default = i, cc._RF.pop();
  }, {}],
  GuidingLayer: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "203c7qFCKhNhrOLeXj4s+7K", "GuidingLayer");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.GuidingState = void 0;
    var i, s = cc._decorator,
      c = s.ccclass,
      a = s.property;
    (function (t) {
      t[t.NONE = 0] = "NONE", t[t.STEP1 = 1] = "STEP1", t[t.STEP2 = 2] = "STEP2", t[t.STEP3 = 3] = "STEP3",
        t[t.STEP4 = 4] = "STEP4", t[t.STEP5 = 5] = "STEP5", t[t.STEP6 = 6] = "STEP6";
    })(i = n.GuidingState || (n.GuidingState = {}));
    var l = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.mask = null, e.plTip = null, e.tipNodes = [], e.tipHand = null, e.state = i.NONE,
          e;
      }
      return o(e, t), e.prototype.onLoad = function () {}, e.prototype.tipByStep = function (t, e) {
          this.state = t, this["step" + t] && this["step" + t](e);
        }, e.prototype.step1 = function (t) {
          this.maskActByPos(t), this.setTip("6"), this.tipMoveInFromRight();
        }, e.prototype.step2 = function (t) {
          this.maskActByPos(t), this.setTip("2"), this.tipMoveInFromLeft();
        }, e.prototype.step3 = function (t) {
          this.maskActByPos(t), this.setTip("4"), this.tipMoveInFromLeft();
        }, e.prototype.step4 = function (t) {
          this.maskActByPos(t), this.setTip("5"), this.tipMoveInFromLeft();
        }, e.prototype.step5 = function (t) {
          this.maskActByPos(t), this.setTip("3"), this.tipMoveInFromLeft();
        }, e.prototype.step6 = function (t) {
          this.mask.active = !1, this.tipHand.active = !1, this.setTip("7"), this.tipMoveRoundOver(),
            this.guidingOverCall && this.guidingOverCall.call(this.caller);
        }, e.prototype.maskActByPos = function (t) {
          var e = this;
          this.mask.stopAllActions(), this.mask.setPosition(t), cc.tween(this.mask).repeatForever(cc.tween().call(function () {
            e.mask.width = 500, e.mask.height = 500;
          }).to(1, {
            width: 300,
            height: 300
          })).start(), this.handTipUpDown(t);
        }, e.prototype.handTipMove = function (t) {
          var e = this;
          this.tipHand.stopAllActions(), cc.tween(this.tipHand).repeatForever(cc.tween().call(function () {
            e.tipHand.setPosition(t);
          }).to(1, {
            x: t.x + 300
          })).start();
        }, e.prototype.handTipUpDown = function (t) {
          var e = this;
          this.tipHand.stopAllActions(), cc.tween(this.tipHand).repeatForever(cc.tween().call(function () {
            e.tipHand.setPosition(t);
          }).to(.5, {
            y: t.y + 50
          })).start();
        }, e.prototype.setTip = function (t) {
          this.tipNodes.forEach(function (e, n) {
            e.name == t ? e.active = !0 : e.active = !1;
          });
        }, e.prototype.tipMoveInFromRight = function () {
          var t = .5 * cc.visibleRect.width;
          this.plTip.stopAllActions(), this.plTip.setPosition(t + .5 * this.plTip.width, this.plTip.y),
            cc.tween(this.plTip).to(.5, {
              x: t - .5 * this.plTip.width
            }, {
              easing: "backOut"
            }).start();
        }, e.prototype.tipMoveInFromLeft = function () {
          var t = .5 * cc.visibleRect.width;
          this.plTip.stopAllActions(), this.plTip.setPosition(-t - .5 * this.plTip.width, this.plTip.y),
            cc.tween(this.plTip).to(.5, {
              x: -t + .5 * this.plTip.width
            }, {
              easing: "backOut"
            }).start();
        }, e.prototype.tipMoveRoundOver = function () {
          var t = this,
            e = .5 * cc.visibleRect.width;
          this.plTip.stopAllActions(), this.plTip.setPosition(-e - .5 * this.plTip.width, this.plTip.y);
          cc.tween(this.plTip).to(.5, {
            x: -e + .5 * this.plTip.width
          }, {
            easing: "backOut"
          }).delay(1).to(.5, {
            x: -e - .5 * this.plTip.width
          }).call(function () {
            t.node.active = !1;
          }).start();
        }, e.prototype.setOverCall = function (t, e) {
          this.caller = e, this.guidingOverCall = t;
        }, r([a(cc.Node)], e.prototype, "mask", void 0), r([a(cc.Node)], e.prototype, "plTip", void 0),
        r([a([cc.Node])], e.prototype, "tipNodes", void 0), r([a(cc.Node)], e.prototype, "tipHand", void 0),
        e = r([c], e);
    }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {}],
  HotPlayView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "e9c5eXSjatJsKU6TYdoky+7", "HotPlayView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../../FrameWork/Mgr/GameMgr"),
      c = t("../../../../../FrameWork/Mgr/WudianMgr"),
      a = t("../../../../../FrameWork/Util/Utilit"),
      l = t("../../../../../FrameWork/View/ADListView"),
      u = t("../wxViewBase"),
      d = cc._decorator,
      p = d.ccclass,
      y = d.property,
      h = d.disallowMultiple,
      _ = d.menu,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.clickBut = null, e.adList = null, e.hand = null, e._isCanClose_csryw = !1,
            e.isFirstPop = !1, e.EventEnumView_csryw = {
              ContinueGame_csryw: "ContinueGame"
            }, e._clickTag_csryw = !1, e;
        }
        return o(e, t), e.prototype.setP_csryw = function (t) {
          console.log("Hot" + JSON.stringify(t)), this.adList.getComponent(l.default).setParam_csryw(t),
            this.isFirstPop = t.isFirstPop, s.default.getInstance_csryw().isFirstPop = !1;
        }, e.prototype.initView_csryw = function () {
          var e = this;
          t.prototype.initView_csryw.call(this), this.clickBut.active = !1, this.clickBut.on("click", this.onContinueBtn_csryw, this);
          var n = this;
          !this.isFirstPop && c.default.wudianFlag_csryw && a.default.checkVersions_csryw() ? (1 == i.default.getInstance_csryw().getAppSwitchData_csryw().continueBanner_csryw ? this.scheduleOnce(function () {
              e.clickBut.active = !0, e.scheduleOnce(function () {
                n.showBanner_csryw(), e.scheduleOnce(function () {
                  n._isCanClose_csryw = !0, n.hideBanner_csryw();
                }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBannerHideTime_csryw);
              }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBannerShowTime_csryw);
            }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBtnDelayTime_csryw) : this.scheduleOnce(function () {
              e.clickBut.active = !0, n._isCanClose_csryw = !0;
            }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBtnDelayTime_csryw),
            1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.handShow_csryw ? this.hand.active = !0 : this.hand.active = !1) : (this.scheduleOnce(function () {
              e.clickBut.active = !0, n._isCanClose_csryw = !0;
            }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBtnDelayTime_csryw),
            this.hand.active = !1);
        }, e.prototype.onContinueBtn_csryw = function () {
          var t = this;
          if (this._isCanClose_csryw) {
            if (!this._clickTag_csryw && c.default.wudianFlag_csryw && a.default.checkVersions_csryw() && i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.firstHotPlayBannerShow > 0) {
              var e = this;
              return e._isCanClose_csryw = !1, this._clickTag_csryw = !0, void this.scheduleOnce(function () {
                e.showBanner_csryw(), t.scheduleOnce(function () {
                  e._isCanClose_csryw = !0, e.hideBanner_csryw();
                }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBannerHideTime_csryw);
              }, i.default.getInstance_csryw().getAppSwitchData_csryw().continueBannerShowTime_csryw);
            }
            this.emitListenerEvent_csryw(this.EventEnumView_csryw.ContinueGame_csryw), this.unscheduleAllCallbacks();
          }
        }, r([y({
          tooltip: "继续游戏",
          type: cc.Node
        })], e.prototype, "clickBut", void 0), r([y({
          tooltip: "adList",
          type: cc.Node
        })], e.prototype, "adList", void 0), r([y({
          tooltip: "手指动画",
          type: cc.Node
        })], e.prototype, "hand", void 0), e = r([p, h(), _("框架组件/好友热玩页")], e);
      }(u.default);
    n.default = f, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../../../FrameWork/Util/Utilit": "Utilit",
    "../../../../../FrameWork/View/ADListView": "ADListView",
    "../wxViewBase": "wxViewBase"
  }],
  HttpUnit: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "c40efu7MRdF+6aINqLysydZ", "HttpUnit"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.requestData = void 0;
    var o = t("./NetConfig"),
      r = t("../User/User"),
      i = t("./AesTools"),
      s = t("../Config/AppConfig"),
      c = t("../Util/LogUtils"),
      a = t("../Util/AppPlatform"),
      l = function () {
        return function () {
          this.meth_csryw = "post", this.url_csryw = "", this.onSuccess_csryw = null, this.onFail_csryw = null,
            this.data_csryw = {};
        };
      }();
    n.requestData = l;
    var u = function () {
      function t() {}
      return t.sendHttpUrl_csryw = function (t, e, n, o, r) {
        var i = r || {},
          s = new XMLHttpRequest();
        if (s.onerror = function (t) {
            c.LogUtils.networkError_csryw("网络请求异常" + t), o("网络请求异常");
          }, s.ontimeout = function (t) {
            c.LogUtils.networkError_csryw("网络超时" + t), o("网络超时");
          }, s.onreadystatechange = function () {
            var t = s.readyState,
              e = s.status;
            if (4 === t)
              if (e >= 200 && e < 300) {
                var r = s.responseText;
                c.LogUtils.networkLog_csryw("接收数据：----------------------"), c.LogUtils.networkLog_csryw("接收内容:" + r);
                var i = JSON.parse(r);
                n(i);
              } else {
                var a = s.statusText;
                c.LogUtils.networkError_csryw("接收数据异常：----------------------status " + e), c.LogUtils.networkLog_csryw("接收内容:" + a),
                  o(a);
              }
          }, s.open(t.meth_csryw, t.url_csryw, !0), i)
          for (var a in i) s.setRequestHeader(a, i[a]);
        c.LogUtils.networkLog_csryw("发送数据：----------------------"), c.LogUtils.networkLog_csryw(t.url_csryw + "  " + t.meth_csryw),
          c.LogUtils.networkLog_csryw(e), c.LogUtils.networkLog_csryw(JSON.stringify(r)),
          c.LogUtils.networkLog_csryw("----------------------"), s.send(e);
      }, t.request_csryw = function (t) {
        t.url_csryw.indexOf("https://") > -1 || t.url_csryw.indexOf("http://") > -1 ? t.url_csryw = t.url_csryw : t.url_csryw = o.default.serverUrl_csryw + t.url_csryw;
        var e = t.onFail_csryw;
        a.default.is_OPPO_GAME_csryw() ? t.data_csryw.oppotoken = r.default.code_csryw : a.default.is_Android_csryw() && (t.data_csryw.sbh = r.default.code_csryw),
          t.data_csryw.code = r.default.code_csryw;
        var n = "time=" + String(Date.now()),
          l = {
            "Content-Type": "application/json"
          };
        l.state = s.default.state_csryw, l.gameid = s.default.gameid_csryw, l.sign = i.default.encrypt_csryw(n),
          r.default.token_csryw && (l.token = r.default.token_csryw);
        var u = null;
        t.data_csryw && (u = JSON.stringify(t.data_csryw)), this.sendHttpUrl_csryw(t, u, function (e) {
          c.LogUtils.networkLog_csryw(e, "http Success"), t.onSuccess_csryw && t.onSuccess_csryw(e),
            t.onSuccess_csryw = null, t = null;
        }, function (n) {
          c.LogUtils.networkLog_csryw(n, "http fail"), e && e(n), t && (t.onFail_csryw = null),
            e = null, t = null;
        }, l);
      }, t.getServerTime_csryw = function (e, n) {
        var r = new l();
        r.url_csryw = o.default.Get_ServerTime_csryw, r.onSuccess_csryw = e, r.onFail_csryw = n,
          t.request_csryw(r);
      }, t.login_csryw = function (e, n) {
        var r = new l();
        r.url_csryw = o.default.Login_csryw, r.onSuccess_csryw = e, r.onFail_csryw = n,
          t.request_csryw(r);
      }, t.saveGameData_csryw = function (e, n, r) {
        var i = new l();
        i.url_csryw = o.default.SaveGameData_csryw, i.data_csryw.gameData = e, i.onSuccess_csryw = n,
          i.onFail_csryw = r, t.request_csryw(i);
      }, t.getGameData_csryw = function (e, n) {
        var r = new l();
        r.url_csryw = o.default.GetUser_csryw, r.onSuccess_csryw = e, r.onFail_csryw = n,
          t.request_csryw(r);
      }, t.GetIpBlock_csryw = function (t, e) {
        if (-1 != s.default.gameid_csryw) {
          console.error("启动新版本的屏蔽系统");
          var n = {},
            o = new XMLHttpRequest();
          if (o.timeout = 15e3, o.onerror = function (t) {
              c.LogUtils.networkError_csryw("网络请求异常" + t), e("网络请求异常");
            }, o.ontimeout = function (t) {
              c.LogUtils.networkError_csryw("网络超时" + t), e("网络超时");
            }, o.onreadystatechange = function () {
              var e = o.readyState,
                n = o.status;
              if (4 === e) {
                var r = {
                  code: 1
                };
                if (n >= 200 && n < 300) {
                  var i = o.responseText;
                  c.LogUtils.networkLog_csryw("接收数据：----------------------"), c.LogUtils.networkLog_csryw("接收内容:" + i);
                  var s = JSON.parse(i);
                  s && 0 == s.isBlackIp ? (r.code = 0, console.error("新版本的屏蔽系统  不屏蔽")) : console.error("新版本的屏蔽系统  ", i),
                    t(r);
                } else {
                  var a = o.statusText;
                  c.LogUtils.networkError_csryw("接收数据异常：----------------------status " + n), c.LogUtils.networkLog_csryw("接收内容:" + a),
                    t(r);
                }
              }
            }, o.open("POST", "https://wxxyx.renyouwangluo.cn/renyou_other_template/ipLogin", !0),
            n["Content-Type"] || (n["Content-Type"] = "application/json"), n)
            for (var r in n) o.setRequestHeader(r, n[r]);
          var i = {
              gameId: s.default.gameid_csryw
            },
            a = JSON.stringify(i);
          o.send(a);
        }
      }, t.reportExport_csryw = function (e, n, r, i) {
        var s = new l();
        s.url_csryw = o.default.reportExport_csryw, s.data_csryw.wbappid = e, s.data_csryw.game_name = n,
          s.onSuccess_csryw = r, s.onFail_csryw = i, t.request_csryw(s);
      }, t.reportImport_csryw = function (e, n, r, i) {
        var s = new l();
        s.url_csryw = o.default.reportImport_csryw, s.data_csryw.wbappid = e, s.data_csryw.channel = n,
          s.onSuccess_csryw = r, s.onFail_csryw = i, t.request_csryw(s);
      }, t.Getuserip_csryw = function (e, n) {
        var r = new l();
        r.url_csryw = o.default.getuserip_csryw, r.onSuccess_csryw = e, r.onFail_csryw = n,
          t.request_csryw(r);
      }, t.SignIn_csryw = function (e, n) {
        var r = new l();
        r.url_csryw = o.default.signin_csryw, r.onSuccess_csryw = e, r.onFail_csryw = n,
          r.data_csryw.type = 1, t.request_csryw(r);
      }, t.GetSignIn_csryw = function (e, n) {
        var r = new l();
        r.url_csryw = o.default.signin_csryw, r.onSuccess_csryw = e, r.onFail_csryw = n,
          r.data_csryw.type = 0, t.request_csryw(r);
      }, t.reportTTLaunchChannel_csryw = function (e, n, r, i, s) {
        var c = new l();
        c.url_csryw = o.default.ttReportLaunchChannel_csryw, c.onSuccess_csryw = i, c.onFail_csryw = s,
          c.data_csryw.ak = e, c.data_csryw.bid = r, c.data_csryw.cd = n, t.request_csryw(c);
      }, t.userScanCode_csryw = function (e, n, r) {
        var i = new l();
        i.url_csryw = o.default.userScanCode_csryw, i.onSuccess_csryw = n, i.onFail_csryw = r,
          i.data_csryw.code = e.code, i.data_csryw.state = e.state, i.data_csryw.gameId = e.gameId,
          i.data_csryw.type = e.type, i.data_csryw.scan = e.scan, t.request_csryw(i);
      }, t;
    }();
    n.default = u, cc._RF.pop();
  }, {
    "../Config/AppConfig": "AppConfig",
    "../User/User": "User",
    "../Util/AppPlatform": "AppPlatform",
    "../Util/LogUtils": "LogUtils",
    "./AesTools": "AesTools",
    "./NetConfig": "NetConfig"
  }],
  Hud: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "4b8adb5taRF3YU6Gtjbeow/", "Hud");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./Progress"),
      s = t("../Lobby/DinosaurMask"),
      c = cc._decorator,
      a = c.ccclass,
      l = c.property,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.heroMask = null, e.lblNick = null, e.plCombo = null, e.lblCombo = null,
            e.hpBar = null, e.energyBar = null, e.energyFire = null, e.character = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            this.plCombo && (this.plCombo.active = !1);
          }, e.prototype.update = function () {
            var t = this;
            if (this.character) {
              var e = this.character.props.hp;
              null != e && e != this.hpBar.curValue && this.hpBar.updateProgress(e, !0, !0);
              var n = this.character.props.mp;
              if (null != n && n != this.energyBar.curValue && (this.energyFire && (n == this.character.props.mpMax ? this.energyFire.active = !0 : this.energyFire.active = !1),
                  this.energyBar.updateProgress(n)), this.plCombo) {
                var o = String(this.character.combo);
                o != this.lblCombo.string && (this.lblCombo.string = o, "0" == o ? (this.plCombo.active = !1,
                  this.unschedule(this.comboSchedule)) : (this.plCombo.active = !0, this.lblCombo.node.stopAllActions(),
                  this.lblCombo.node.runAction(cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.2, 1), cc.delayTime(1), cc.callFunc(function () {
                    t.plCombo.active = !1;
                  }))), this.unschedule(this.comboSchedule), this.scheduleOnce(this.comboSchedule, 8)));
              }
            }
          }, e.prototype.init = function (t) {
            this.character = t, this.lblNick && (this.lblNick.string = t.props.name), this.lblCombo && (this.lblCombo.string = ""),
              this.hpBar.setMaxValue(t.props.hp - t.props.hpBuffed), this.hpBar.setAdditionMaxValue(t.props.hpBuffed),
              this.energyBar.setMaxValue(100), this.hpBar.updateProgress(t.props.hp, !1, !0),
              this.energyBar.updateProgress(0, !1), this.heroMask.initDinosaurId(t.props.id);
          }, e.prototype.comboSchedule = function () {
            this.plCombo.active = !1, this.character.resetCombo();
          }, e.prototype.getEnergyBarWorldPos = function () {
            var t = this.energyBar.node.parent.convertToWorldSpaceAR(this.energyBar.node.getPosition());
            return t.x -= .5 * cc.visibleRect.width, t.y -= .5 * cc.visibleRect.height, t;
          }, r([l(s.default)], e.prototype, "heroMask", void 0), r([l(cc.Label)], e.prototype, "lblNick", void 0),
          r([l(cc.Node)], e.prototype, "plCombo", void 0), r([l(cc.Label)], e.prototype, "lblCombo", void 0),
          r([l(i.default)], e.prototype, "hpBar", void 0), r([l(i.default)], e.prototype, "energyBar", void 0),
          r([l(cc.Node)], e.prototype, "energyFire", void 0), e = r([a], e);
      }(cc.Component);
    n.default = u, cc._RF.pop();
  }, {
    "../Lobby/DinosaurMask": "DinosaurMask",
    "./Progress": "Progress"
  }],
  IconSkill: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "50747X7U1FLjb2aMvBSvzZa", "IconSkill");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../utils/ResCenter"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.sp = null, e.skillconType = 0, e.url = "Texture/gameUI/skill", e.dirs = ["/noramlAtk", "/skill_1", "/skill_2", "/ultimate_skill"],
            e;
        }
        return o(e, t), e.prototype.initDinosaurId = function (t) {
            var e = this;
            i.default.loadBundleSpriteFrame(i.default.subBundles[2], this.url + t + this.dirs[this.skillconType], function (t) {
              e.sp.spriteFrame = t;
            }, this);
          }, e.prototype.start = function () {}, r([a(cc.Sprite)], e.prototype, "sp", void 0),
          r([a({
            type: cc.Enum({
              noramlAtk: 0,
              skill_1: 1,
              skill_2: 2,
              ultimate: 3
            }),
            tooltip: "角色头像类型"
          })], e.prototype, "skillconType", void 0), e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "../../utils/ResCenter": "ResCenter"
  }],
  InstallExportView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "1811fcOIWtDzoGnOCNcX3GN", "InstallExportView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/View/ADListView"),
      s = t("../wxViewBase"),
      c = cc._decorator,
      a = c.ccclass,
      l = c.property,
      u = c.disallowMultiple,
      d = c.menu,
      p = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.clickBut = null, e.adListView = null, e._isCanClose_csryw = !1, e._isContinueBtnClicked_csryw = !1,
            e.EventEnumView_csryw = {
              ContinueGame_csryw: "ContinueGame"
            }, e;
        }
        return o(e, t), e.prototype.initData = function (t) {
          console.log("initData" + t), this._data = t;
        }, e.prototype.initView_csryw = function () {
          t.prototype.initView_csryw.call(this), this.clickBut.active = !0, this.clickBut.on("click", this.onContinueBtn_csryw, this);
        }, e.prototype.setAdtag_csryw = function (t) {
          this.adListView.setAdtag_csryw(t);
        }, e.prototype.onContinueBtn_csryw = function () {
          this.emitListenerEvent_csryw(this.EventEnumView_csryw.ContinueGame_csryw), this.unscheduleAllCallbacks(),
            this.removeView_csryw(), this._data && this._data.closeCallFun && this._data.closeCallFun();
        }, r([l({
          tooltip: "继续游戏",
          type: cc.Node
        })], e.prototype, "clickBut", void 0), r([l({
          tooltip: "广告",
          type: i.default
        })], e.prototype, "adListView", void 0), e = r([a, u(), d("框架组件/导出页面")], e);
      }(s.default);
    n.default = p, cc._RF.pop();
  }, {
    "../../../../../FrameWork/View/ADListView": "ADListView",
    "../wxViewBase": "wxViewBase"
  }],
  JoystickEnum: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "2ea30KbhrhMPqzB2TBJWqIt", "JoystickEnum"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = {
      JoystickType: cc.Enum({
        FIXED: 0,
        FOLLOW: 1
      }),
      DirectionType: cc.Enum({
        FOUR: 4,
        EIGHT: 8,
        ALL: 0
      }),
      SpeedType: cc.Enum({
        STOP: 0,
        NORMAL: 1,
        FAST: 2
      }),
      EventType: cc.Enum({
        TOUCH_START: "touchStart",
        TOUCH_MOVE: "touchMove",
        TOUCH_END: "touchEnd",
        CHANGE_JOYSTICK_TYPE: "changeJoystickType"
      })
    }, cc._RF.pop();
  }, {}],
  Joystick: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "09e02XgE71BRamIy6OEQ1Gc", "Joystick");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../utils/EventCenter"),
      s = t("./JoystickEnum"),
      c = cc._decorator,
      a = c.ccclass,
      l = c.property,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.stick = null, e.bg = null, e.joystickType = s.default.JoystickType.FIXED,
            e.directionType = s.default.DirectionType.ALL, e.validRadius = 0, e._stickPos = null,
            e._touchLocation = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          this._radius = this.bg.width / 4, this._initTouchEvent(), this.joystickType === s.default.JoystickType.FOLLOW && (this.node.opacity = 0);
        }, e.prototype.onEnable = function () {
          i.default.on(s.default.EventType.CHANGE_JOYSTICK_TYPE, this._onChangeJoystickType, this);
        }, e.prototype.onDisable = function () {
          i.default.off(s.default.EventType.CHANGE_JOYSTICK_TYPE, this._onChangeJoystickType, this);
        }, e.prototype._onChangeJoystickType = function (t) {
          this.joystickType = t, this.node.opacity = t === s.default.JoystickType.FIXED ? 255 : 0;
        }, e.prototype._initTouchEvent = function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this),
            this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);
        }, e.prototype._touchStartEvent = function (t) {
          var e = this.node.convertToNodeSpaceAR(t.getLocation()),
            n = null;
          if (this.joystickType === s.default.JoystickType.FIXED) {
            this._stickPos = this.bg.getPosition(), n = e.sub(this.bg.getPosition()).normalize();
            var o = cc.Vec2.distance(e, this._stickPos);
            if (this._radius > o) this.stick.setPosition(e);
            else {
              var r = this._stickPos.x + n.x * this._radius,
                c = this._stickPos.y + n.y * this._radius;
              this.stick.setPosition(cc.v2(r, c));
            }
            o < this.validRadius && (n.x = 0, n.y = 0);
          } else this.joystickType === s.default.JoystickType.FOLLOW && (this._stickPos = e,
            this.node.opacity = 255, this._touchLocation = t.getLocation(), n = cc.Vec2.ZERO,
            this.bg.setPosition(e), this.stick.setPosition(e));
          i.default.emit(s.default.EventType.TOUCH_START, {
            event: t,
            joystickType: this.joystickType,
            speedType: s.default.SpeedType.NORMAL,
            vector: n
          });
        }, e.prototype._touchMoveEvent = function (t) {
          if (this.joystickType === s.default.JoystickType.FOLLOW && this._touchLocation === t.getLocation()) return !1;
          var e, n = this.bg.convertToNodeSpaceAR(t.getLocation()),
            o = n.mag(),
            r = this._stickPos.x + n.x,
            c = this._stickPos.y + n.y,
            a = cc.v2(r, c).sub(this.bg.getPosition()).normalize();
          if (this._radius > o) this.stick.setPosition(cc.v2(r, c)), e = s.default.SpeedType.NORMAL;
          else {
            var l = this._stickPos.x + a.x * this._radius,
              u = this._stickPos.y + a.y * this._radius;
            this.stick.setPosition(cc.v2(l, u)), e = s.default.SpeedType.FAST;
          }
          o < this.validRadius && (a.x = 0, a.y = 0), i.default.emit(s.default.EventType.TOUCH_MOVE, {
            event: t,
            joystickType: this.joystickType,
            speedType: e,
            vector: a
          });
        }, e.prototype._touchEndEvent = function (t) {
          this.stick.setPosition(this.bg.getPosition()), this.joystickType === s.default.JoystickType.FOLLOW && (this.node.opacity = 0),
            i.default.emit(s.default.EventType.TOUCH_END, {
              event: t,
              joystickType: this.joystickType,
              speedType: s.default.SpeedType.STOP
            });
        }, r([l({
          type: cc.Node,
          displayName: "Stick",
          tooltip: "摇杆"
        })], e.prototype, "stick", void 0), r([l({
          type: cc.Node,
          displayName: "Bg",
          tooltip: "摇杆背景"
        })], e.prototype, "bg", void 0), r([l({
          type: s.default.JoystickType,
          displayName: "Touch Type",
          tooltip: "触摸类型"
        })], e.prototype, "joystickType", void 0), r([l({
          type: s.default.DirectionType,
          displayName: "Direction Type",
          tooltip: "方向类型"
        })], e.prototype, "directionType", void 0), r([l({
          type: cc.Integer,
          tooltip: "摇杆有效半径"
        })], e.prototype, "validRadius", void 0), e = r([a], e);
      }(cc.Component);
    n.default = u, cc._RF.pop();
  }, {
    "../../utils/EventCenter": "EventCenter",
    "./JoystickEnum": "JoystickEnum"
  }],
  KRQ_Base: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "03847xnVG5H14gGvsS1nRSU", "KRQ_Base");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../Base/FMViewBase"),
      s = t("../Mgr/RemoteMgr"),
      c = t("../Util/AppPlatform"),
      a = t("../Util/Utilit"),
      l = cc._decorator,
      u = l.ccclass,
      d = l.property,
      p = l.menu,
      y = l.disallowMultiple,
      h = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.sprIcon = null, e.labelTitle = null, e.tipIcon = null, e.bgColorList = [],
            e.ad_data_csryw = null, e.ad_tag_csryw = null, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            this.node.on("click", this.ryw_onClickAd_csryw, this);
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.setBgColorRandom = function () {
            if (this.bgColorList.length > 0)
              for (var t = a.default.random_csryw(this.bgColorList.length), e = 0; e < this.bgColorList.length; e++) {
                var n = this.bgColorList[e];
                n.node.active = e == t;
              }
          }, e.prototype.setTipIconActive = function (t) {
            this.tipIcon && (this.tipIcon.node.active = t);
          }, e.prototype.setAdTag_csryw = function (t) {
            this.ad_tag_csryw = t;
          }, e.prototype.getData_csryw = function () {
            return this.ad_data_csryw;
          }, e.prototype.setData_csryw = function (t, e) {
            this.ad_data_csryw = t, this.refreshData_csryw(e);
          }, e.prototype.refreshData_csryw = function (t) {
            if (this.ad_data_csryw) {
              this._initView_csryw();
              var e = this;
              e.labelTitle && (e.labelTitle.string = e.ad_data_csryw.title), e.sprIcon.node.active = !1,
                this.setBgColorRandom(), this.ad_data_csryw && this.ad_data_csryw.logo ? s.default.loadRemote_csryw(e.ad_data_csryw.logo, handleFM_csryw(function (n, o) {
                  if (!n && e.isValid && e.sprIcon) {
                    var r = new cc.SpriteFrame(o);
                    e.sprIcon.spriteFrame = r, e.sprIcon.node.active = !0, t && t();
                  }
                }, this)) : LogUtils.error_csryw("刷新图片异常" + this.ad_data_csryw);
            }
          }, e.prototype.setCallClickListener_csryw = function (t) {
            this._listenerClickFunction_csryw = t;
          }, e.prototype.ryw_onClickAd_csryw = function (t) {
            console.log("ly+++++++++++++++++++++++++  点击了图片 做跳转this.ad_tag_csryw", this.ad_tag_csryw),
              c.default.navigateToMiniProgram_csryw(this.ad_data_csryw, this.ad_tag_csryw), console.log("点击了图片 做跳转"),
              this._listenerClickFunction_csryw && callFM_csryw(this._listenerClickFunction_csryw);
          }, r([d({
            tooltip: "图片icon",
            type: cc.Sprite
          })], e.prototype, "sprIcon", void 0), r([d({
            tooltip: "文本Label",
            type: cc.Label
          })], e.prototype, "labelTitle", void 0), r([d({
            tooltip: "图片提示icon",
            type: cc.Sprite
          })], e.prototype, "tipIcon", void 0), r([d({
            tooltip: "背景底框",
            type: [cc.Sprite]
          })], e.prototype, "bgColorList", void 0), e = r([u, y(), p("FrameWork组件/KRQ_Base")], e);
      }(i.default);
    n.default = h, cc._RF.pop();
  }, {
    "../Base/FMViewBase": "FMViewBase",
    "../Mgr/RemoteMgr": "RemoteMgr",
    "../Util/AppPlatform": "AppPlatform",
    "../Util/Utilit": "Utilit"
  }],
  KeyboardCenter: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "cc0d89N2yJLCoVffz64hbMz", "KeyboardCenter");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../Constants"),
      s = t("../UI/joystick/JoystickEnum"),
      c = t("./EventCenter"),
      a = cc._decorator,
      l = a.ccclass,
      u = (a.property,
        function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.vect = cc.v2(), e;
          }
          return o(e, t), e.prototype.onLoad = function () {
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          }, e.prototype.onDestroy = function () {
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          }, e.prototype.start = function () {}, e.prototype.onKeyDown = function (t) {
            switch (t.keyCode) {
              case "A".charCodeAt(0):
                this.vect.x = -1, c.default.emit(s.default.EventType.TOUCH_START, {
                  vector: this.vect
                });
                break;

              case "D".charCodeAt(0):
                this.vect.x = 1, c.default.emit(s.default.EventType.TOUCH_START, {
                  vector: this.vect
                });
                break;

              case "W".charCodeAt(0):
                this.vect.y = 1, c.default.emit(s.default.EventType.TOUCH_START, {
                  vector: this.vect
                });
                break;

              case "S".charCodeAt(0):
                this.vect.y = -1, c.default.emit(s.default.EventType.TOUCH_START, {
                  vector: this.vect
                });
                break;

              case "J".charCodeAt(0):
                c.default.emit(i.UIEvent.TOUCHDOWN, i.ButtonKeyName.NORMALATTACK);
                break;

              case "K".charCodeAt(0):
                c.default.emit(i.UIEvent.TOUCHDOWN, i.ButtonKeyName.SKILL4);
                break;

              case "U".charCodeAt(0):
                c.default.emit(i.UIEvent.TOUCHDOWN, i.ButtonKeyName.SKILL2);
                break;

              case "I".charCodeAt(0):
                c.default.emit(i.UIEvent.TOUCHDOWN, i.ButtonKeyName.SKILL1);
            }
          }, e.prototype.onKeyUp = function (t) {
            switch (t.keyCode) {
              case "A".charCodeAt(0):
              case "D".charCodeAt(0):
                this.vect.x = 0, c.default.emit(s.default.EventType.TOUCH_END, {
                  vector: this.vect
                });
                break;

              case "W".charCodeAt(0):
              case "S".charCodeAt(0):
                this.vect.y = 0, c.default.emit(s.default.EventType.TOUCH_END, {
                  vector: this.vect
                });
                break;

              case "J".charCodeAt(0):
                c.default.emit(i.UIEvent.TOUCHUP, i.ButtonKeyName.NORMALATTACK);
                break;

              case "K".charCodeAt(0):
                c.default.emit(i.UIEvent.TOUCHUP, i.ButtonKeyName.SKILL4);
                break;

              case "U".charCodeAt(0):
                c.default.emit(i.UIEvent.TOUCHUP, i.ButtonKeyName.SKILL2);
                break;

              case "I".charCodeAt(0):
                c.default.emit(i.UIEvent.TOUCHUP, i.ButtonKeyName.SKILL1);
            }
          }, e = r([l], e);
        }(cc.Component));
    n.default = u, cc._RF.pop();
  }, {
    "../Constants": "Constants",
    "../UI/joystick/JoystickEnum": "JoystickEnum",
    "./EventCenter": "EventCenter"
  }],
  KuanDianAni: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "19e5bfS/HdLcLfVqIGXNC2m", "KuanDianAni");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = i.property,
      a = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.kl_node = null, e.kl1_node = null, e.suipian = null, e.hit = null, e.names = ["Texture/spineImage/long1/konglong1", "Texture/spineImage/long2/konglong2", "Texture/spineImage/long3/konglong3", "Texture/spineImage/long4/konglong4", "Texture/spineImage/long5/konglong5"],
            e;
        }
        return o(e, t), e.prototype.start = function () {
            var t = this;
            this.settingSkin(1, 1), this.settingSkin(4, 2), this.kl_node.setCompleteListener(function (e) {
              switch (e.animation.name) {
                case "pugong2":
                  t.playDiji();
              }
            }), this.kl1_node.setCompleteListener(function (e) {
              switch (e.animation.name) {
                case "shouji1":
                  t.playbeDaiji();
              }
            }), this.kl_node.setEventListener(function (e, n) {
              var o = n.data.name;
              switch (n.stringValue && JSON.parse(n.stringValue), o) {
                case "attack":
                  t.playbeHit();
              }
            });
          }, e.prototype.playAttack = function () {
            "pugong2" != this.kl_node.animation && this.kl_node.setAnimation(0, "pugong2", !1);
          }, e.prototype.playbeHit = function () {
            "shouji1" != this.kl1_node.animation && (this.kl1_node.setAnimation(0, "shouji1", !1),
              this.suipian.setAnimation(0, "animation", !1), this.hit.node.active = !0, this.hit.setAnimation(0, "zhongji", !1));
          }, e.prototype.playbeDaiji = function () {
            this.kl1_node.setAnimation(0, "daiji", !1);
          }, e.prototype.playDiji = function () {
            this.kl_node.setAnimation(0, "daiji", !0);
          }, e.prototype.settingSkin = function (t, e) {
            var n = this;
            switch (t) {
              case 3:
                1 == e ? this.kl_node.node.y = -35 : this.kl1_node.node.y = -35;
                break;

              default:
                1 == e ? this.kl_node.node.y = -70 : this.kl1_node.node.y = -70;
            }
            var o = cc.assetManager.getBundle("subRes"),
              r = this.names[t];
            r && o.load(r, sp.SkeletonData, function (t, o) {
              1 == e ? (n.kl_node.skeletonData = o, n.kl_node.setAnimation(0, "daiji", !0)) : (n.kl1_node.skeletonData = o,
                n.kl1_node.setAnimation(0, "daiji", !0));
            });
          }, r([c(sp.Skeleton)], e.prototype, "kl_node", void 0), r([c(sp.Skeleton)], e.prototype, "kl1_node", void 0),
          r([c(sp.Skeleton)], e.prototype, "suipian", void 0), r([c(sp.Skeleton)], e.prototype, "hit", void 0),
          e = r([s], e);
      }(cc.Component);
    n.default = a, cc._RF.pop();
  }, {}],
  KuanDian: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "a3e52IbbYhB8KwHyIhg5Q4X", "KuanDian");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../FrameWork/Event/EventEnum"),
      c = t("../../FrameWork/Event/EventMgr"),
      a = t("../../FrameWork/Mgr/GameMgr"),
      l = t("../../FrameWork/User/User"),
      u = t("../../Platform/weixin/BannerMgr"),
      d = t("../../Platform/weixin/BannerPos"),
      p = t("../../Platform/weixin/newFrame/src/event/ADPageEventEnum"),
      y = t("../../Platform/weixin/newFrame/src/event/ADPageEventMgr"),
      h = t("../../Platform/weixin/WXAPI"),
      _ = t("./KuanDianAni"),
      f = t("./ShowKuanDian"),
      w = cc._decorator,
      g = w.ccclass,
      m = w.property,
      v = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.pro = null, e.bt = null, e.coin = null, e.overPop = null, e.istype = !0,
            e.award = [], e.proawars = [.15, .45, .75], e.kuandianani = null, e.isback = !0,
            e.nowcoin = 0, e.kdadtype = 0, e.intervaltime = 0, e.addpro = .1, e.percent = [.6, 1],
            e.backpro = .01, e.since = 0, e.eas_kuangdian = null, e.nowsucces = null, e.isstop = !1,
            e.btcount = 0, e.nowshowva = 0, e.okcount = 0, e.maxcount = 2, e.isname = "", e;
        }
        return o(e, t), e.prototype.onBack = function () {
            this.bt.node.scale = 1, this.isback = !0;
          }, e.prototype.start = function () {
            this.istype = !0, this.bt.node.on(cc.Node.EventType.TOUCH_START, this.onPro, this),
              this.bt.node.on(cc.Node.EventType.TOUCH_END, this.onBack, this), this.bt.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onBack, this),
              this.istype ? (this.initOverPop(), this.resetProAward()) : (this.award.forEach(function (t) {
                t.active = !1;
              }), this.coin.active = !1), this.istype && (this.kdadtype = i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.resulekuangdiantype),
              2 == this.kdadtype ? (this.bt.node.x = 300, this.bt.node.y = -200) : (this.bt.node.x = 0,
                this.bt.node.y = -280);
          }, e.prototype.resetProAward = function () {
            this.award.forEach(function (t) {
              t.getChildByName("ok").active = !1;
            });
          }, e.prototype.showDan = function () {}, e.prototype.kuangdianShow = function () {
            cc.game.emit("nihao");
          }, e.prototype.onEnable = function () {
            f.default.init(), u.default.hideBanner_csryw(), this.pro.progress = 0, this.okcount = 0,
              this.btcount = 0, this.isstop = !1, this.showbannerValue(), window.wx && window.wx.onShow(this.kuangdianShow),
              cc.game.on("nihao", this.onmClose, this), c.default.onEvent_csryw(s.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, this.setNowCoin, this),
              this.setNowCoin(), this.maxcount = i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianovercount,
              NaN == this.maxcount && (this.maxcount = 2);
          }, e.prototype.setNowCoin = function () {
            this.coin.getChildByName("moneyLabel").getComponent(cc.Label).string = l.default.getMoney_csryw() + "";
          }, e.prototype.onDisable = function () {
            window.wx && window.wx.offShow(this.kuangdianShow), cc.game.off("nihao", this.onmClose, this),
              c.default.offEvent_csryw(s.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, this.setNowCoin, this);
          }, e.prototype.setData = function (t) {
            this.nowsucces = t;
          }, e.prototype.onmClose = function () {
            this.isstop = !0, this.pro.progress = 1, this.istype ? this.overPop.active = !0 : (this.unschedule(this.hideBanner),
              this.node.removeFromParent(), this.nowsucces && this.nowsucces());
          }, e.prototype.sendAward = function (t, e) {
            var n = this.coin.getChildByName("tagcoin").convertToWorldSpaceAR(cc.v2(0, 0));
            f.default.showCoin(n, t, "gold", null, function () {
              a.default.getInstance_csryw().saveGameData_csryw(), e && e();
            });
          }, e.prototype.initOverPop = function () {
            this.overPop.getChildByName("dc_3").getChildByName("value").getComponent(cc.Label).string = "500";
          }, e.prototype.closeKd = function () {
            var t = this;
            this.sendAward(500, function () {
              t.unschedule(t.hideBanner), t.node.removeFromParent(), t.nowsucces && t.nowsucces();
            });
          }, e.prototype.showbannerValue = function () {
            var t = this.percent[0],
              e = this.percent[1];
            t *= 10, e *= 10;
            var n = this.limitInteger(t, e);
            this.nowshowva = n / 10;
          }, e.prototype.limit = function (t, e) {
            t = Math.min(t, e);
            var n = (e = Math.max(t, e)) - t;
            return t + Math.random() * n;
          }, e.prototype.limitInteger = function (t, e) {
            return Math.floor(this.limit(t, e + 1));
          }, e.prototype.onPro = function () {
            var t = this;
            this.unschedule(this.hideBanner), this.bt.node.scale = .9, this.isback = !1, this.isstop || (this.getProAward(),
              this.kuandianani.playAttack(), this.showDan(), this.pro.progress += this.addpro,
              this.pro.progress > this.nowshowva && (this.isstop = !0, this.okcount++, this.showAd(),
                this.scheduleOnce(function () {
                  t.showbannerValue(), console.log("狂点次数", t.okcount, t.maxcount), t.schedule(t.hideBanner, .1, cc.macro.REPEAT_FOREVER, 0),
                    t.okcount >= t.maxcount ? t.onmClose() : (t.isstop = !1, t.pro.progress = 0);
                }, 2)));
          }, e.prototype.showAd = function () {
            var t = this;
            switch (this.kdadtype) {
              case 0:
                this.onmClose();
                break;

              case 1:
                u.default.showBanner_csryw(d.BannerPos.Center_Bottom);
                break;

              case 2:
                h.default.showRewardedVideoAd_csryw(function (e) {
                  t.onmClose();
                }, function () {
                  t.onmClose();
                });
            }
          }, e.prototype.hideBanner = function () {
            y.default.emitEvent_csryw(p.ADEvent.HIDE_BANNER);
          }, e.prototype.onUpData = function () {
            this.pro.progress > 0 && !this.isstop && this.isback && (this.pro.progress -= this.backpro);
          }, e.prototype.getProAward = function () {
            if (this.istype)
              for (var t = this.pro.progress, e = 0; e < this.proawars.length; e++) {
                if (this.proawars[e] < t) {
                  var n = this.award[e].getChildByName("ok");
                  n.active || (n.active = !0, this.sendAward(20));
                }
              }
          }, e.prototype.update = function (t) {
            this.onUpData();
          }, r([m(cc.ProgressBar)], e.prototype, "pro", void 0), r([m(cc.Sprite)], e.prototype, "bt", void 0),
          r([m(cc.Node)], e.prototype, "coin", void 0), r([m(cc.Node)], e.prototype, "overPop", void 0),
          r([m({
            type: cc.Node
          })], e.prototype, "award", void 0), r([m(_.default)], e.prototype, "kuandianani", void 0),
          e = r([g], e);
      }(cc.Component);
    n.default = v, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Event/EventEnum": "EventEnum",
    "../../FrameWork/Event/EventMgr": "EventMgr",
    "../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../FrameWork/User/User": "User",
    "../../Platform/weixin/BannerMgr": "BannerMgr",
    "../../Platform/weixin/BannerPos": "BannerPos",
    "../../Platform/weixin/WXAPI": "WXAPI",
    "../../Platform/weixin/newFrame/src/event/ADPageEventEnum": "ADPageEventEnum",
    "../../Platform/weixin/newFrame/src/event/ADPageEventMgr": "ADPageEventMgr",
    "./KuanDianAni": "KuanDianAni",
    "./ShowKuanDian": "ShowKuanDian"
  }],
  LevelConfig: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "db1ceKj1htKlaxsqHJSaiDS", "LevelConfig"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.LevelConfigData = void 0;
    var o = function () {
      return function () {};
    }();
    n.LevelConfigData = o;
    var r = function () {
      function t() {
        this._data = new Array();
      }
      return t.getInstance = function () {
        return null == t._instance && (t._instance = new t()), t._instance;
      }, t.prototype.init = function (t) {
        this._data = t;
      }, t.prototype.getDatas = function () {
        return this._data;
      }, t.prototype.getData = function (t) {
        return this._data[t];
      }, t.prototype.getDataLength = function () {
        return this._data.length;
      }, t;
    }();
    n.default = r, cc._RF.pop();
  }, {}],
  LimiteRangeThroing: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "dd0d4Y7HfJIu68g1iBWNXBm", "LimiteRangeThroing");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./UnlimitedRangeThrowing"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.attackRange = 300, e.initPosX = 0, e;
        }
        return o(e, t), e.prototype.start = function () {
          this.initPosX = this.node.x, console.log("this.initPosX  = ", this.initPosX);
        }, e.prototype.isAttackRange = function () {
          return !(Math.abs(this.node.x - this.initPosX) > this.attackRange);
        }, r([a(cc.Integer)], e.prototype, "attackRange", void 0), e = r([c], e);
      }(i.default);
    n.default = l, cc._RF.pop();
  }, {
    "./UnlimitedRangeThrowing": "UnlimitedRangeThrowing"
  }],
  LoadingView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "280c6yp8JpK9ZcRBOOviij+", "LoadingView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../Config/AppConfig"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = s.menu,
      u = s.disallowMultiple,
      d = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.progressBar = null, e.logoAni = null, e.aniSprites_csryw = [], e.aniSpriteOriginPos_csryw = [],
            e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          for (var t = 0; t < this.logoAni.children.length; t++) {
            var e = this.logoAni.children[t];
            e.opacity = 0, this.aniSprites_csryw.push(e), this.aniSpriteOriginPos_csryw.push(e.getPosition());
          }
          this.setProcess_csryw(0);
        }, e.prototype.start = function () {
          var t = this;
          this.scheduleOnce(function () {
            t.ryw_playAni_csryw();
          }, .25);
        }, e.prototype.setProcess_csryw = function (t) {
          t < 0 ? t = 0 : t > 1 && (t = 1), this.progressBar.progress = t;
        }, e.prototype.getProcess_csryw = function () {
          return this.progressBar.progress;
        }, e.prototype.ryw_playAni_csryw = function () {
          var t = this;
          if (i.default.showLoadingLogo_csryw) {
            var e = function (e) {
                var o = e == n.aniSprites_csryw.length - 1,
                  r = n.aniSprites_csryw[e],
                  i = n.aniSpriteOriginPos_csryw[e];
                r.opacity = 0, r.y += i.y + 50, cc.tween(r).delay(.08 * e).to(.45, {
                  y: i.y,
                  opacity: 255
                }, {
                  easing: "elasticOut"
                }).delay(.3).call(function () {
                  o && t.ryw_playAni_csryw();
                }).start();
              },
              n = this;
            for (o = 0; o < this.aniSprites_csryw.length; ++o) e(o);
          } else
            for (var o = 0; o < this.aniSprites_csryw.length; ++o) this.aniSprites_csryw[o].active = !1;
        }, r([a({
          tooltip: "进度条",
          type: cc.ProgressBar
        })], e.prototype, "progressBar", void 0), r([a({
          tooltip: "任游玩动画",
          type: cc.Node
        })], e.prototype, "logoAni", void 0), e = r([c, u(), l("FrameWork组件/LoadingView")], e);
      }(cc.Component);
    n.default = d, cc._RF.pop();
  }, {
    "../../Config/AppConfig": "AppConfig"
  }],
  LobbyDinosaurSpine: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "b12f777JaNAl5u8ZHHcXAiD", "LobbyDinosaurSpine");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = (i.property, function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.isPlay = !1, e._cumulativeTime = 0, e._aniName = ["dazhao", "fangyu", "houtui", "xiaojineng2", "pugong0", "pugong1", "pugong2", "qilai", "shouji1", "shouji2", "shouji3", "shouji4", "siwang", "tiaoyue", "xiaojineng", "zoulu"],
            e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          this.skeleton = this.node.getComponent(sp.Skeleton);
        }, e.prototype.start = function () {
          var t = this;
          this.skeleton.setCompleteListener(function () {
            t._completeListener();
          });
          for (var e = 0; e < this._aniName.length; e++) {
            var n = this._aniName[e];
            this.skeleton.setMix("daiji", n, .2), this.skeleton.setMix(n, "daiji", .2);
          }
        }, e.prototype._completeListener = function () {
          this.isPlay = !1, this.skeleton.addAnimation(0, "daiji", !0);
        }, e.prototype.update = function (t) {
          this._cumulativeTime += t, this._cumulativeTime > 15 && this._onClick();
        }, e.prototype.onEnable = function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this._onClick, this);
        }, e.prototype.onDisable = function () {
          this.node.off(cc.Node.EventType.TOUCH_START, this._onClick, this);
        }, e.prototype._onClick = function () {
          if (0 == this.isPlay) {
            var t = Math.floor(Math.random() * this._aniName.length);
            this.skeleton.setAnimation(0, this._aniName[t], !1), this.isPlay = !0, this._cumulativeTime = 0;
          }
        }, e.prototype.onInstallSuccess = function () {
          0 == this.isPlay && (this.skeleton.setAnimation(0, "jump", !1), this.isPlay = !0);
        }, e.prototype.onDestroy = function () {
          this._cumulativeTime = 0;
        }, e = r([s], e);
      }(cc.Component));
    n.default = c, cc._RF.pop();
  }, {}],
  LogUtils: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "030ecwzd3BB0oWLzUfn/dol", "LogUtils");
    var o = this && this.__spreadArrays || function () {
      for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
      var o = Array(t),
        r = 0;
      for (e = 0; e < n; e++)
        for (var i = arguments[e], s = 0, c = i.length; s < c; s++,
          r++) o[r] = i[s];
      return o;
    };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.LogUtils = void 0;
    var r = function () {
      function t() {}
      return t.setLogStatus = function (e) {
        t._logStatus_csryw = e;
      }, t.log_csryw = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        0 && 1;
      }, t.info_csryw = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        0 && console.debug.apply(console, o(["[debug][", t.getFullTime_csryw(), "]", ":", e], n));
      }, t.warn_csryw = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        0 && console.warn.apply(console, o(["[warn][", t.getFullTime_csryw(), "]", ":", e], n));
      }, t.error_csryw = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        0 && console.error.apply(console, o(["[error][", t.getFullTime_csryw(), "]", ":", e], n));
      }, t.networkLog_csryw = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        0 && console.log.apply(console, o(["[network][", t.getFullTime_csryw(), "]", ":", e], n));
      }, t.networkError_csryw = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        0 && console.error.apply(console, o(["[network][", t.getFullTime_csryw(), "]", ":", e], n));
      }, t.getFullTime_csryw = function () {
        var t = new Date();
        return t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "-" + t.getMilliseconds();
      }, t._logStatus_csryw = !0, t;
    }();
    n.LogUtils = r, window.LogUtils = r, cc._RF.pop();
  }, {}],
  MaiLiang: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "c8da2bT2ttHK4TzgyXVRoeF", "MaiLiang"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      return function () {};
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  MainView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "b05b4jah05IWplcwWcQmpyh", "MainView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../../FrameWork/Event/EventEnum"),
      c = t("../../../../../FrameWork/Event/EventMgr"),
      a = t("../../../../../FrameWork/Mgr/GameMgr"),
      l = t("../../../../../FrameWork/Mgr/WudianMgr"),
      u = t("../../../../../FrameWork/User/User"),
      d = t("../../../../../FrameWork/Util/Utilit"),
      p = t("../../../../../FrameWork/View/ADListView"),
      y = t("../../../WXAPI"),
      h = t("../event/ADPageEventEnum"),
      _ = t("../event/ADPageEventMgr"),
      f = t("../wxADControls"),
      w = t("../wxViewBase"),
      g = t("./RankingView"),
      m = cc._decorator,
      v = m.ccclass,
      A = m.property,
      b = m.disallowMultiple,
      S = m.menu,
      C = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.loopAD = null, e.groupAD = null, e.itemBtn = null, e.moreBtn = null, e.backBtn = null,
            e.labelMoney = null, e.labelLevel = null, e.butStart = null, e.EventEnumView_csryw = {
              StartGame_csryw: "StartGame"
            }, e;
        }
        return o(e, t), e.prototype.setP_csryw = function (t) {
          //console.log("Main" + JSON.stringify(t)), this.loopAD.getComponent(p.default).setParam_csryw(t);
        }, e.prototype.initView_csryw = function () {
          _.default.onEvent_csryw(h.ADEvent.GAME_START_BEFORE, this.onStartBefore_csryw, this),
            _.default.onEvent_csryw(h.PageEvent.SHOW_MOREBTN, this.showMoreBtn, this), this.butStart.on("click", this.onStartClickd_csryw, this),
            this.backBtn.on("click", this.onBackClicked_csryw, this), this.moreBtn.on("click", this.onMoreClicked_csryw, this),
            this.itemBtn.on("click", this.onItemClicked_csryw, this), this.labelMoney.string = u.default.getMoney_csryw() + "",
            this.labelLevel.string = u.default.getLeveNum_csryw() + "", console.log("User.getMoney_csryw()", u.default.getMoney_csryw()),
            l.default.wudianFlag_csryw && d.default.checkVersions_csryw() ? (i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.mainItemBtn_csryw > 0 ? this.itemBtn.active = !0 : this.itemBtn.active = !1,
              cc.find("AD").getComponent(f.default).isFirstInGame ? cc.find("AD").getComponent(f.default).isFirstInGame = !1 : (console.log("moreGameShowLevel", i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.moreGameShowLevel_csryw, u.default.getLeveNum_csryw()),
                setTimeout(function () {
                  0 != i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.moreGameShowLevel_csryw && u.default.getLeveNum_csryw() >= i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.moreGameShowLevel_csryw && _.default.emitEvent_csryw(h.PageEvent.SHOW_MORE, !0, 2);
                }, 500))) : (f.default.isFirstHotPlay = !1, this.backBtn.active = !1, this.itemBtn.active = !1,
              this.loopAD.active = !1, this.groupAD.active = !1);
        }, e.prototype.showMoreBtn = function (t) {
          void 0 === t && (t = !0), this.moreBtn.active = t;
        }, e.prototype.onBackClicked_csryw = function () {
          this.hideBanner_csryw(), _.default.emitEvent_csryw(h.PageEvent.SHOW_HOTPLAY);
        }, e.prototype.onMoreClicked_csryw = function () {
          this.hideBanner_csryw(), _.default.emitEvent_csryw(h.PageEvent.SHOW_BEFORENATIVE, !0);
        }, e.prototype.onItemClicked_csryw = function () {
          this.hideBanner_csryw(), _.default.emitEvent_csryw(h.PageEvent.SHOW_RANKING, g.PageType.otherToRanking);
        }, e.prototype.addEvent_csryw = function () {
          c.default.onEvent_csryw(s.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, this.onUserMoneyChange_csryw, this);
        }, e.prototype.removeEvent_csryw = function () {
          c.default.offTargetEvent_csryw(this);
        }, e.prototype.onUserMoneyChange_csryw = function (t) {
          var e = t.curr;
          t.last;
          this.labelMoney.string = e + "";
        }, e.prototype.onStartBefore_csryw = function () {
          this.onStartClickd_csryw();
        }, e.prototype.onStartClickd_csryw = function () {
          var t = this;
          console.log(l.default.wudianFlag_csryw, d.default.checkVersions_csryw(), i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.startVideo_csryw > 0),
            l.default.wudianFlag_csryw && d.default.checkVersions_csryw() && i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.startVideo_csryw > 0 ? y.default.showRewardedVideoAd_csryw(function (e) {
              t.showCrazy();
            }, function () {
              t.showCrazy();
            }) : this.showCrazy();
        }, e.prototype.showCrazy = function () {
          this.hideBanner_csryw(), console.log("showCrazy", 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdian_csryw, u.default.getLeveNum_csryw() % i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianLevelSpcacing_csryw == 0),
            l.default.wudianFlag_csryw && d.default.checkVersions_csryw() && 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdian_csryw && u.default.getLeveNum_csryw() % i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianLevelSpcacing_csryw == 0 ? _.default.emitEvent_csryw(h.PageEvent.SHOW_CRAZY, a.default.getInstance_csryw().onMainToGameScene_csryw) : a.default.getInstance_csryw().onMainToGameScene_csryw();
        }, r([A({
          tooltip: "轮播广告",
          type: cc.Node
        })], e.prototype, "loopAD", void 0), r([A({
          tooltip: "组合广告",
          type: cc.Node
        })], e.prototype, "groupAD", void 0), r([A({
          tooltip: "菜单按钮",
          type: cc.Node
        })], e.prototype, "itemBtn", void 0), r([A({
          tooltip: "更多按钮",
          type: cc.Node
        })], e.prototype, "moreBtn", void 0), r([A({
          tooltip: "返回按钮",
          type: cc.Node
        })], e.prototype, "backBtn", void 0), r([A({
          tooltip: "金币Label",
          type: cc.Label
        })], e.prototype, "labelMoney", void 0), r([A({
          tooltip: "关卡Label",
          type: cc.Label
        })], e.prototype, "labelLevel", void 0), r([A({
          tooltip: "游戏开始按钮",
          type: cc.Node
        })], e.prototype, "butStart", void 0), e = r([v, b(), S("框架组件/游戏主页")], e);
      }(w.default);
    n.default = C, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../../FrameWork/Event/EventEnum": "EventEnum",
    "../../../../../FrameWork/Event/EventMgr": "EventMgr",
    "../../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../../../FrameWork/User/User": "User",
    "../../../../../FrameWork/Util/Utilit": "Utilit",
    "../../../../../FrameWork/View/ADListView": "ADListView",
    "../../../WXAPI": "WXAPI",
    "../event/ADPageEventEnum": "ADPageEventEnum",
    "../event/ADPageEventMgr": "ADPageEventMgr",
    "../wxADControls": "wxADControls",
    "../wxViewBase": "wxViewBase",
    "./RankingView": "RankingView"
  }],
  Main: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "1cbf7NzsSZAopnEpDM060/i", "Main");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./View/Logo/LoadingView"),
      s = t("./Util/AppPlatform"),
      c = t("./Config/AppConfig"),
      a = t("./Config/AppSwitchConfig"),
      l = t("./Util/LogUtils"),
      u = t("./Mgr/BundleMgr"),
      d = t("./Mgr/GameMgr"),
      p = t("./User/User"),
      y = t("./RYSDK/RYSDK"),
      h = t("./Mgr/DebugInfoMgr"),
      _ = t("../Game/Script/config/ConfigMgr"),
      f = t("../Platform/CustimWxApi"),
      w = t("../Platform/weixin/WXHttp"),
      g = cc._decorator,
      m = g.ccclass,
      v = g.property,
      A = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.loadingPrefab = null, e.adPrefab = null, e.loadSubpackageTotal_csryw = .8,
            e.loadHttpNetworkTotal_csryw = 1, e.subpackageIndex_csryw = 0, e.subpackageSum_csryw = 0,
            e.needProcessNum_csryw = 0, e.loadingState_csryw = 0, e.loadingSpeed_csryw = 0,
            e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          f.default.initMyCustimAds(), s.default.is_TT_GAME_csryw() ? (c.default.AppID_csryw = c.default.TT_APP_ID_csryw,
              c.default.state_csryw = c.default.TT_state_csryw, c.default.gameid_csryw = c.default.TT_gameid_csryw,
              c.default.ResServer_csryw = c.default.TT_ResServer_csryw, c.default.Versions_csryw = c.default.TT_Versions_csryw,
              c.default.UseRYSDK_csryw = !1, c.default.LoopAdLocationID_csryw = c.default.TT_LoopAdLocationID_csryw,
              c.default.BannerAdLocationID_csryw = c.default.TT_BannerAdLocationID_csryw, c.default.InsertAdLocationID_csryw = c.default.TT_InsertAdLocationID_csryw,
              c.default.AniAdLocationID_csryw = c.default.TT_AniAdLocationID_csryw, c.default.HistoryLocationID_csryw = c.default.TT_HistoryLocationID_csryw,
              c.default.MoreGameLocationID_csryw = c.default.TT_MoreGameLocationID_csryw) : s.default.is_WECHAT_GAME_csryw() ? (c.default.AppID_csryw = c.default.WX_APP_ID_csryw,
              c.default.state_csryw = c.default.WX_state_csryw, c.default.gameid_csryw = c.default.WX_gameid_csryw,
              c.default.ResServer_csryw = c.default.WX_ResServer_csryw, c.default.Versions_csryw = c.default.WX_Versions_csryw,
              c.default.UseRYSDK_csryw = !0, c.default.closeUseRYSDK_csryw && (c.default.UseRYSDK_csryw = !1),
              c.default.LoopAdLocationID_csryw = c.default.WX_LoopAdLocationID_csryw, c.default.BannerAdLocationID_csryw = c.default.WX_BannerAdLocationID_csryw,
              c.default.InsertAdLocationID_csryw = c.default.WX_InsertAdLocationID_csryw, c.default.AniAdLocationID_csryw = c.default.WX_AniAdLocationID_csryw,
              c.default.HistoryLocationID_csryw = c.default.WX_HistoryLocationID_csryw, c.default.MoreGameLocationID_csryw = c.default.WX_MoreGameLocationID_csryw) : s.default.is_QQ_PLAY_csryw() ? (c.default.AppID_csryw = c.default.QQ_APP_ID_csryw,
              c.default.state_csryw = c.default.QQ_state_csryw, c.default.gameid_csryw = c.default.QQ_gameid_csryw,
              c.default.ResServer_csryw = c.default.QQ_ResServer_csryw, c.default.Versions_csryw = c.default.QQ_Versions_csryw,
              c.default.UseRYSDK_csryw = !1, c.default.LoopAdLocationID_csryw = c.default.QQ_LoopAdLocationID_csryw,
              c.default.BannerAdLocationID_csryw = c.default.QQ_BannerAdLocationID_csryw, c.default.InsertAdLocationID_csryw = c.default.QQ_InsertAdLocationID_csryw,
              c.default.AniAdLocationID_csryw = c.default.QQ_AniAdLocationID_csryw, c.default.HistoryLocationID_csryw = c.default.QQ_HistoryLocationID_csryw,
              c.default.MoreGameLocationID_csryw = c.default.QQ_MoreGameLocationID_csryw) : s.default.is_OPPO_GAME_csryw() ? (c.default.AppID_csryw = c.default.OPPO_APP_ID_csryw,
              c.default.state_csryw = c.default.OPPO_state_csryw, c.default.gameid_csryw = c.default.OPPO_gameid_csryw,
              c.default.ResServer_csryw = c.default.OPPO_ResServer_csryw, c.default.Versions_csryw = c.default.OPPO_Versions_csryw,
              c.default.UseRYSDK_csryw = !1, c.default.LoopAdLocationID_csryw = c.default.OPPO_LoopAdLocationID_csryw,
              c.default.BannerAdLocationID_csryw = c.default.OPPO_BannerAdLocationID_csryw, c.default.InsertAdLocationID_csryw = c.default.OPPO_InsertAdLocationID_csryw,
              c.default.AniAdLocationID_csryw = c.default.OPPO_AniAdLocationID_csryw, c.default.HistoryLocationID_csryw = c.default.OPPO_HistoryLocationID_csryw,
              c.default.MoreGameLocationID_csryw = c.default.OPPO_MoreGameLocationID_csryw) : s.default.is_VIVO_GAME_csryw() ? (c.default.AppID_csryw = c.default.VIVO_APP_ID_csryw,
              c.default.state_csryw = c.default.VIVO_state_csryw, c.default.gameid_csryw = c.default.VIVO_gameid_csryw,
              c.default.ResServer_csryw = c.default.VIVO_ResServer_csryw, c.default.Versions_csryw = c.default.VIVO_Versions_csryw,
              c.default.UseRYSDK_csryw = !1, c.default.LoopAdLocationID_csryw = c.default.VIVO_LoopAdLocationID_csryw,
              c.default.BannerAdLocationID_csryw = c.default.VIVO_BannerAdLocationID_csryw, c.default.InsertAdLocationID_csryw = c.default.VIVO_InsertAdLocationID_csryw,
              c.default.AniAdLocationID_csryw = c.default.VIVO_AniAdLocationID_csryw, c.default.HistoryLocationID_csryw = c.default.VIVO_HistoryLocationID_csryw,
              c.default.MoreGameLocationID_csryw = c.default.VIVO_MoreGameLocationID_csryw) : s.default.is_Android_csryw() || s.default.is_Iphone_csryw() ? (c.default.AppID_csryw = c.default.APK_APP_ID_csryw,
              c.default.state_csryw = c.default.APK_state_csryw, c.default.gameid_csryw = c.default.APK_gameid_csryw,
              c.default.ResServer_csryw = c.default.APK_ResServer_csryw, c.default.Versions_csryw = c.default.APK_Versions_csryw,
              c.default.UseRYSDK_csryw = !1) : (c.default.AppID_csryw = c.default.WX_APP_ID_csryw,
              c.default.state_csryw = c.default.WX_state_csryw, c.default.gameid_csryw = c.default.WX_gameid_csryw,
              c.default.ResServer_csryw = c.default.WX_ResServer_csryw, c.default.Versions_csryw = c.default.WX_Versions_csryw,
              c.default.UseRYSDK_csryw = !1, c.default.LoopAdLocationID_csryw = c.default.WX_LoopAdLocationID_csryw,
              c.default.BannerAdLocationID_csryw = c.default.WX_BannerAdLocationID_csryw, c.default.InsertAdLocationID_csryw = c.default.WX_InsertAdLocationID_csryw,
              c.default.AniAdLocationID_csryw = c.default.WX_AniAdLocationID_csryw, c.default.HistoryLocationID_csryw = c.default.WX_HistoryLocationID_csryw,
              c.default.MoreGameLocationID_csryw = c.default.WX_MoreGameLocationID_csryw), this.loadView_csryw = this.loadingPrefab.getComponent(i.default),
            this.subpackageSum_csryw = c.default.subResArray_csryw.length, this.loadView_csryw.setProcess_csryw(0),
            this.node.getChildByName("singleGame").active = !1, this.load();
        }, e.prototype.load = function () {
          var t = this;
          if (_.default.loadAllConfig(function () {
              console.log("ly ++++++++++++++++++++++ loadAllConfig"), a.default.getInstance_csryw().loadUrlConfig_csryw(handleFM_csryw(function () {
                l.LogUtils.log_csryw("加载 AppSwitchConfig 完成"), t.loadSubpackage_csryw(), h.default.setDebug_csryw(),
                  t.node.getChildByName("singleGame").active = !1;
              }, t));
            }, this), this.adPrefab) {
            var e = cc.instantiate(this.adPrefab);
            cc.game.addPersistRootNode(e);
          }
        }, e.prototype.start = function () {}, e.prototype.loadSubpackage_csryw = function () {
          var t = this;
          if (this.subpackageIndex_csryw < this.subpackageSum_csryw) {
            var e = "",
              n = c.default.subResArray_csryw[this.subpackageIndex_csryw];
            s.default.is_TT_GAME_csryw() ? e = "" : s.default.is_WECHAT_GAME_csryw() ? e = "wx" : s.default.is_OPPO_GAME_csryw() ? e = "qg" : s.default.is_QQ_PLAY_csryw() && (e = "qq"),
              l.LogUtils.log_csryw("加载分包 " + n + "  platform " + e);
            var o = (this.subpackageIndex_csryw + 1) / this.subpackageSum_csryw * t.loadSubpackageTotal_csryw;
            this.setStartLoadingPerNum_csryw(o), u.default.loadBundleByName_csryw(n, handleFM_csryw(function (e, o) {
              e ? console.error(e) : (t.subpackageIndex_csryw = t.subpackageIndex_csryw + 1, s.default.loadSubpackageFinish_csryw(n),
                t.loadSubpackage_csryw());
            }, this));
          } else this.onLoadResComplate_csryw();
        }, e.prototype.setStartLoadingPerNum_csryw = function (t) {
          this.setLoadingState_csryw(1, t);
        }, e.prototype.setLoadingState_csryw = function (t, e) {
          switch (this.loadingState_csryw = t, this.needProcessNum_csryw = e, t) {
            case 0:
              break;

            case 1:
              this.loadingSpeed_csryw = 1 / 80;
              break;

            case 2:
              this.loadingSpeed_csryw = .005;
              break;

            case 3:
              var n = 1 - this.loadView_csryw.getProcess_csryw();
              this.loadingSpeed_csryw = n > 0 ? n / 20 : .5;
          }
        }, e.prototype.update = function (t) {
          if (this.loadView_csryw) {
            var e = this.loadView_csryw.getProcess_csryw(),
              n = e + this.loadingSpeed_csryw;
            switch (this.loadingState_csryw) {
              case 0:
                break;

              case 1:
                n >= .7 * this.needProcessNum_csryw && (n >= this.needProcessNum_csryw && (n = this.needProcessNum_csryw),
                  this.setLoadingState_csryw(2, this.needProcessNum_csryw));
                break;

              case 2:
                n >= this.needProcessNum_csryw && (n = this.needProcessNum_csryw);
                break;

              case 3:
                n >= 1 && (n = 1, this.loadingState_csryw = 4);
            }
            e != n && this.loadView_csryw.setProcess_csryw(n);
          }
        }, e.prototype.setDownloadOver_csryw = function () {
          this.initGame_csryw(), this.setLoadingState_csryw(3, 1);
        }, e.prototype.onLoadResComplate_csryw = function () {
          var t = this;
          this.setStartLoadingPerNum_csryw(this.loadHttpNetworkTotal_csryw), d.default.getInstance_csryw().preloadScene_csryw(),
            console.log("pc登录,数据存本地");
          var e = cc.sys.localStorage.getItem("data" + c.default.AppID_csryw);
          e ? p.default.initiUser_csryw(JSON.parse(e)) : p.default.initiUser_csryw(null),
            w.default.WxLogin(function () {
              t.setDownloadOver_csryw();
            });
        }, e.prototype.initGame_csryw = function () {
          s.default.is_WECHAT_GAME_csryw() ? (console.log("小游戏设置转发按钮"), window.wx.showShareMenu({
            withShareTicket: !1,
            success: function () {},
            fail: function () {},
            complete: function () {}
          }), window.wx.onShareAppMessage(function () {
            return {
              title: "",
              imageUrl: ""
            };
          }), window.wx.onShow(function () {
            console.log("微信 显示在前台"), s.default.isBackGameWX = !0;
          }), s.default.loginPlatform_csryw(function (t) {
            console.log("登陆成功，进行初始化"), d.default.getInstance_csryw().onLoadToWorldScene_csryw(),
              c.default.UseRYSDK_csryw && y.default.init_csryw(t);
          }, null)) : d.default.getInstance_csryw().onLoadToWorldScene_csryw(), s.default.initGame_csryw();
        }, e.isBack = !1, r([v({
          tooltip: "加载页面预支",
          type: cc.Node
        })], e.prototype, "loadingPrefab", void 0), r([v({
          tooltip: "广告预支",
          type: cc.Prefab
        })], e.prototype, "adPrefab", void 0), e = r([m], e);
      }(cc.Component);
    n.default = A, cc._RF.pop();
  }, {
    "../Game/Script/config/ConfigMgr": "ConfigMgr",
    "../Platform/CustimWxApi": "CustimWxApi",
    "../Platform/weixin/WXHttp": "WXHttp",
    "./Config/AppConfig": "AppConfig",
    "./Config/AppSwitchConfig": "AppSwitchConfig",
    "./Mgr/BundleMgr": "BundleMgr",
    "./Mgr/DebugInfoMgr": "DebugInfoMgr",
    "./Mgr/GameMgr": "GameMgr",
    "./RYSDK/RYSDK": "RYSDK",
    "./User/User": "User",
    "./Util/AppPlatform": "AppPlatform",
    "./Util/LogUtils": "LogUtils",
    "./View/Logo/LoadingView": "LoadingView"
  }],
  MoreView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "c801ak4FzJPapAjoja+FZvq", "MoreView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../../FrameWork/Mgr/GameMgr"),
      c = t("../../../../../FrameWork/Mgr/WudianMgr"),
      a = t("../../../../../FrameWork/Util/Utilit"),
      l = t("../../../../../FrameWork/View/ADListView"),
      u = t("../../../WXAPI"),
      d = t("../event/ADPageEventEnum"),
      p = t("../event/ADPageEventMgr"),
      y = t("../wxViewBase"),
      h = cc._decorator,
      _ = h.ccclass,
      f = h.property,
      w = h.disallowMultiple,
      g = h.menu,
      m = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.clickBut = null, e.viewMore = null, e.adList = null, e._clickTag_csryw = !1,
            e._clickTimingTag_csryw = !1, e.isFirstPop = !1, e;
        }
        return o(e, t), e.prototype.setP_csryw = function (t) {
            console.log("More" + JSON.stringify(t)), this.adList.getComponent(l.default).setParam_csryw(t);
          }, e.prototype.initView_csryw = function () {
            t.prototype.initView_csryw.call(this);
            var e = cc.view.getVisibleSize().width / cc.view.getVisibleSize().height;
            this.viewMore.height = e < .5 ? 900 : 750, this.clickBut.on("click", this.onCloseBtn_csryw, this),
              p.default.onEvent_csryw(d.PageEvent.SHOW_NATIVEAD, this.showNativeAD, this), p.default.onEvent_csryw(d.PageEvent.HIDE_NATIVEAD, this.hideNaitveAD, this),
              s.default.getInstance_csryw().isFirstPopMore && i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.firstHotPlayPop > 0 ? (s.default.getInstance_csryw().isFirstPop = !0,
                p.default.emitEvent_csryw(d.PageEvent.SHOW_HOTPLAY)) : u.default.showNativeADBig(function () {}, 28.88, 28.88);
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.BannerUp_csryw = function () {
            1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.tc_continueBanner_csryw && this.showBanner_csryw();
          }, e.prototype.BtnUp_csryw = function () {
            this._clickTag_csryw = !0, this.clickBut.y += 300;
          }, e.prototype.onCloseBtn_csryw = function () {
            if (!this._clickTag_csryw && c.default.wudianFlag_csryw && a.default.checkVersions_csryw()) {
              if (!this._clickTimingTag_csryw) {
                this._clickTimingTag_csryw = !0;
                var t = i.default.getInstance_csryw().getAppSwitchData_csryw().btnMoveTimer_csryw,
                  e = i.default.getInstance_csryw().getAppSwitchData_csryw().bannerMoveTimer_csryw;
                this.scheduleOnce(this.BannerUp_csryw, e), this.scheduleOnce(this.BtnUp_csryw, t);
              }
            } else console.log("点击关闭按钮"), p.default.offEvent_csryw(d.PageEvent.SHOW_NATIVEAD, this.showNativeAD, this),
              p.default.offEvent_csryw(d.PageEvent.HIDE_NATIVEAD, this.hideNaitveAD, this), u.default.hideNativeAD(),
              this.emitListenerEvent_csryw(this.EventEnumView_csryw.ContinueGame_csryw), this.unscheduleAllCallbacks();
          }, e.prototype.showNativeAD = function () {
            u.default.showNativeADBig(function () {}, 28.88, 28.88);
          }, e.prototype.hideNaitveAD = function () {
            u.default.hideNativeAD();
          }, r([f({
            tooltip: "继续游戏",
            type: cc.Node
          })], e.prototype, "clickBut", void 0), r([f({
            tooltip: "滚动区域",
            type: cc.Node
          })], e.prototype, "viewMore", void 0), r([f({
            tooltip: "广告列表",
            type: cc.Node
          })], e.prototype, "adList", void 0), e = r([_, w(), g("框架组件/更多好玩")], e);
      }(y.default);
    n.default = m, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../../../FrameWork/Util/Utilit": "Utilit",
    "../../../../../FrameWork/View/ADListView": "ADListView",
    "../../../WXAPI": "WXAPI",
    "../event/ADPageEventEnum": "ADPageEventEnum",
    "../event/ADPageEventMgr": "ADPageEventMgr",
    "../wxViewBase": "wxViewBase"
  }],
  MyCrazy: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "7bed4kvUW9GbKgcWCB57NXB", "MyCrazy");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../../FrameWork/View/ADListView"),
      c = t("../wxViewBase"),
      a = cc._decorator,
      l = a.ccclass,
      u = a.property,
      d = a.disallowMultiple,
      p = a.menu,
      y = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.loopADLeft = null, e.loopADRight = null, e;
        }
        return o(e, t), e.prototype.setP_csryw = function (t) {
          this.loopADLeft.getComponent(s.default).setParam_csryw(t), this.loopADRight.getComponent(s.default).setParam_csryw(t);
        }, e.prototype.start = function () {
          cc.log("MyCrazyMyCrazyMyCrazyMyCrazyMyCrazyMyCrazy"), this.setP_csryw({
            SlideSkip: 1,
            ForceSkip: 0,
            JumpVideo: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isCrazyJumpVideo_csryw
          });
        }, r([u({
          tooltip: "轮播广告",
          type: cc.Node
        })], e.prototype, "loopADLeft", void 0), r([u({
          tooltip: "轮播广告",
          type: cc.Node
        })], e.prototype, "loopADRight", void 0), e = r([l, d(), p("框架组件/游戏主页")], e);
      }(c.default);
    n.default = y, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../../FrameWork/View/ADListView": "ADListView",
    "../wxViewBase": "wxViewBase"
  }],
  NetConfig: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "96e2fJpstFCTboG9kwVf8Op", "NetConfig"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.serverUrl_csryw = "https://javaapi.renyouwangluo.cn", t.Login_csryw = "/api/user/login",
        t.SaveGameData_csryw = "/api/user/game/data/write", t.GetUser_csryw = "/api/user/game/data/read",
        t.IpBlock_csryw = "/api/user/ip/select", t.reportExport_csryw = "/api/share/getwaibuad",
        t.reportImport_csryw = "/api/share/getzjadml", t.getuserip_csryw = "/api/user/ip",
        t.signin_csryw = "/api/user/sign", t.Get_ServerTime_csryw = "/api/share/gettime",
        t.userScanCode_csryw = "/api/user/scan/code", t.ttReportLaunchChannel_csryw = "https://javareport.renyouwangluo.cn/api/data/tt/report",
        t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  NodePoolMag: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "49240kqGKhNe6TJEcChmIbW", "NodePoolMag"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.NodePoolMag = void 0;
    var o = function () {
      function t() {
        this.saveNode = {}, this.savePrefab = {};
      }
      return Object.defineProperty(t, "instance", {
        get: function () {
          return this.nodepool;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.createNodeCount = function (t, e, n, o) {
        var r = this.saveNode[t];
        r || (r = new cc.NodePool(o), this.saveNode[t] = r, this.savePrefab[t] = n);
        for (var i = 0; i < e; i++) {
          var s = cc.instantiate(n);
          r.put(s);
        }
      }, t.prototype.getNode = function (t) {
        var e = this.saveNode[t],
          n = null;
        if (e) {
          if (e.size() > 0) n = e.get();
          else {
            var o = this.savePrefab[t];
            o && (n = cc.instantiate(o));
          }
          return n;
        }
        return null;
      }, t.prototype.recycleNode = function (t, e) {
        var n = this.saveNode[t];
        n && n.put(e);
      }, t.prototype.clearNode = function (t) {
        var e = this.saveNode[t];
        e && (e.clear(), delete this.saveNode[t], delete this.savePrefab[t]);
      }, t.prototype.isHave = function (t) {
        return !!this.saveNode[t];
      }, t.nodepool = new t(), t;
    }();
    n.NodePoolMag = o, cc._RF.pop();
  }, {}],
  OPPOAPI: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "e171acnwxpKoIMn4Mkvf/JE", "OPPOAPI"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../FrameWork/Util/AppPlatform"),
      r = t("../../FrameWork/Config/AppConfig"),
      i = t("../../FrameWork/NetWork/HttpUnit"),
      s = t("../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../FrameWork/Util/LogUtils"),
      a = function () {
        function t() {}
        return Object.defineProperty(t, "BannerInstance_csryw", {
            get: function () {
              return t._banner_csryw;
            },
            enumerable: !1,
            configurable: !0
          }), t.Login_csryw = function (t, e) {
            o.default.is_OPPO_GAME_csryw() && window.qg.login({
              success: function (e) {
                var n = e.data.token;
                for (var o in t(n), console.log("OPPO 登陆成功,获取到 token : " + n), e) console.log(o, e[o]);
              },
              fail: function (t) {
                for (var e in console.log("OPPO 登陆失败", t), t) console.log(e, t[e]);
              }
            });
          }, t.initAdService_csryw = function (t, e, n) {
            window.qg.initAdService({
              appId: r.default.AppID_csryw,
              isDebug: !1,
              success: function (e) {
                console.log("oppo initAdService success"), t && t(e);
              },
              fail: function (t) {
                console.log("oppo initAdService fail: ", t.code, t.msg), e && e(t);
              },
              complete: function (t) {
                console.log("oppo initAdService complete"), n && n(t);
              }
            });
          }, t.showRewardedVideoAd_csryw = function (t, e, n) {
            if (o.default.is_OPPO_GAME_csryw()) {
              var i = r.default.tt_adUnitId_csryw;
              n && (i = n);
              var s = window.qg.createRewardedVideoAd({
                posId: i
              });
              s.onLoad(function () {
                console.log("oppo 视频广告加载完成"), s.show();
              }), s.onVideoStart(function () {
                console.log("oppo 视频广告开始播放");
              }), s.onClose(function (e) {
                e.isEnded ? (console.log("oppo 视频广告观看 完成"), t(!0)) : (console.log("oppo 视频广告观看 未完成"),
                  t(!1)), s.destroy();
              }), s.onError(function (t) {
                console.log("oppo 视频广告获取失败", t), s.destroy(), e();
              }), s.load();
            } else t(!0);
          }, t.navigateToMiniProgram_csryw = function (t, e, n, s, c, a) {
            if (o.default.is_OPPO_GAME_csryw()) {
              console.log("OPPO 跳转游戏： " + t), i.default.reportExport_csryw(t, e, function (t) {
                1 == t.code ? console.log("OPPO 导出上报成功") : console.log("OPPO 导出上报失败", t.msg);
              }, function (t) {
                for (var e in console.log("OPPO 导出上报失败"), t) console.log(e, t[e]);
              });
              for (var l = Date.now(); Date.now() - l <= 500;);
              window.qg.navigateToMiniGame({
                pkgName: t,
                path: n,
                extraData: {
                  from: r.default.AppID_csryw
                },
                envVersion: "release",
                success: function (t) {
                  s && s(t);
                },
                fail: function (t) {
                  c && c(t);
                }
              });
            }
          }, t.showInterstitialAd_csryw = function (e, n) {
            if (o.default.is_OPPO_GAME_csryw()) {
              var r = window.qg.createInsertAd({
                posId: t.InsAdUnitId_csryw
              });
              r.load(), r.onLoad(function () {
                console.log("插屏广告加载完成"), r.show();
              }), r.onShow(function () {
                console.log("插屏广告显示成功");
              }), r.onError(function (t) {
                console.log("插屏广告拉取失败", t), r.destroy(), n && n();
              });
            } else e();
          }, t.showBannaer_csryw = function () {
            if (t._banner_csryw) t._banner_csryw.show();
            else {
              var e = window.qg.createBannerAd({
                posId: t.bannerAdUnitId_csryw
              });
              e.show(), t._banner_csryw = e;
            }
          }, t.hideBanner_csryw = function () {
            t._banner_csryw && t._banner_csryw.hide();
          }, t.destroyBanner_csryw = function () {
            t._banner_csryw && t._banner_csryw.destroy(), t._banner_csryw = null;
          }, t.getLaunchOptionsSync_csryw = function () {
            var t = {
              query: "",
              referrerInfo: {
                package: "",
                extraData: {
                  appid: ""
                }
              }
            };
            if (o.default.is_OPPO_GAME_csryw()) {
              var e = window.qg.getLaunchOptionsSync();
              return null != e && "" != e ? t = e : console.log("没有启动设置！！！"), t;
            }
            return t;
          }, t.share_csryw = function (t, e, n) {
            t(!1);
          }, t.createDesktopIcon_csryw = function (t, e) {
            o.default.is_OPPO_GAME_csryw() ? window.qg.hasShortcutInstalled({
              success: function (n) {
                0 == n ? window.qg.installShortcut({
                  success: function () {
                    t && t();
                  },
                  fail: function (t) {
                    for (var n in e && e(), console.log("创建桌面图标失败！！！！", t), t) console.log(n, t);
                  },
                  complete: function () {}
                }) : (console.log("桌面图标已存在！！！！"), e && e());
              },
              fail: function (t) {
                for (var n in e && e(), console.log("判断桌面图标是否存在失败！！！", t), t) console.log(n, t);
              },
              complete: function () {}
            }) : e && e();
          }, t.autoPopCreateDestopIcon_csryw = function (e, n) {
            o.default.is_OPPO_GAME_csryw() ? Math.floor(100 * Math.random()) <= s.default.getInstance_csryw().getAppSwitchData_csryw().oppocfg_csryw.addToDesktop_csryw ? t.createDesktopIcon_csryw(e, n) : null != n && n() : null != n && n();
          }, t.showNativeAd_csryw = function (t, e) {
            c.LogUtils.warn_csryw("111111111111111111111111");
          }, t.LoadCahcedNativeAd_csryw = function () {
            t._cachedNativeAd_csryw && (t._cachedNativeAd_csryw.destroy(), t._cachedNativeAd_csryw = null),
              t._cachedAdItem_csryw = null, t._cachedNativeAd_csryw = window.qg.createNativeAd({
                posId: t.NativeAdId_csryw
              }), t._cachedNativeAd_csryw.load(), ++t._tryLoadCount_csryw, console.log("缓存 原生广告 开始加载");
            t._cachedNativeAd_csryw.onLoad(function (e) {
              console.log("缓存 原生广告 加载成功：", e);
              for (var n = e.adList, o = 0; o < n.length; ++o) {
                var r = n[o];
                for (var i in console.log("缓存 原生广告 数据：", o), r) console.log(i, r[i]);
              }
              if (t._cachedAdItem_csryw = n[Math.floor(Math.random() * n.length)], null != t._cachedAdItem_csryw) {
                for (o = 0; o < t._cachedAdItem_csryw.imgUrlList.length; ++o) console.log("缓存 原生广告 imgUrlList : ", o + " ", t._cachedAdItem_csryw.imgUrlList[o]);
                for (var s = t._cachedAdItem_csryw.imgUrlList, c = 0; c < s.length; ++c) {
                  var a = s[c];
                  if (t._cachedimgUrl_csryw = a, null != t._cachedimgUrl_csryw && "" != t._cachedimgUrl_csryw) break;
                }
                null != t._cachedimgUrl_csryw && "" != t._cachedimgUrl_csryw ? console.log("缓存 原生广告  加载图片", t._cachedimgUrl_csryw) : (console.log("缓存 原生广告 加载失败 imgulr is : ", t._cachedimgUrl_csryw),
                  t._cachedNativeAd_csryw.destroy(), t._cachedNativeAd_csryw = null, setTimeout(function () {
                    t.LoadCahcedNativeAd_csryw();
                  }, 2500));
              }
            }), t._cachedNativeAd_csryw.onError(function (e) {
              for (var n in console.log("缓存 原生广告 加载失败：", e), e) console.log(n, e[n]);
              t._cachedNativeAd_csryw.destroy(), t._cachedNativeAd_csryw = null, setTimeout(function () {
                t.LoadCahcedNativeAd_csryw();
              }, 5e3);
            });
          }, t.hasShortcutInstalled = function (t, e) {
            window.qg.hasShortcutInstalled({
              success: function (e) {
                0 == e ? (console.log("桌面图标不存在！！！！"), t && t(!1)) : (console.log("桌面图标已存在！！！！"),
                  t && t(!0));
              },
              fail: function (t) {
                for (var n in e && e(), console.log("判断桌面图标是否存在失败！！！", t), t) console.log(n, t);
              },
              complete: function () {}
            });
          }, t.adUnitId_csryw = "", t.bannerAdUnitId_csryw = "", t.InsAdUnitId_csryw = "",
          t.OpenScreenAdUnitId_csryw = "", t.NativeAdId_csryw = "", t._banner_csryw = null,
          t._cachedNativeAd_csryw = null, t._cachedAdItem_csryw = null, t._cachedimgUrl_csryw = null,
          t._tryLoadCount_csryw = 5, t;
      }();
    n.default = a, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppConfig": "AppConfig",
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/NetWork/HttpUnit": "HttpUnit",
    "../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../../FrameWork/Util/LogUtils": "LogUtils"
  }],
  OPPONativeAdViewTemplate: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "9d2bfmQVYhPPqsgP0cwOoUQ", "OPPONativeAdViewTemplate");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../FrameWork/Base/FMViewBase"),
      s = t("../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../FrameWork/Mgr/WudianMgr"),
      a = t("../../FrameWork/Util/AppPlatform"),
      l = t("../../FrameWork/Mgr/RemoteMgr"),
      u = t("../../FrameWork/Interface/FMInterface"),
      d = t("./OPPOAPI"),
      p = cc._decorator,
      y = p.ccclass,
      h = p.property,
      _ = p.disallowMultiple,
      f = p.menu,
      w = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.centerZone = null, e.display = null, e.displaySpr = null, e.okBtn = null,
            e.closeBtn = null, e._nativeAd_csryw = null, e._curAdItem_csryw = null, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            var t = this;
            this.closeBtn.active = !1, this.scheduleOnce(function () {
                t.closeBtn.active = !0;
              }, s.default.getInstance_csryw().getAppSwitchData_csryw().oppocfg_csryw.btnShowTimer_csryw),
              this.okBtn.on("click", this.onOkBtn_csryw, this), this.closeBtn.on("click", this.onCloseBtn_csryw, this),
              this.display.on("click", this.onDisplayClick_csryw, this), null != d.default._cachedNativeAd_csryw ? this.showCached() : this.loadAd_csryw();
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.loadAd_csryw = function () {
            var t = this,
              e = this;
            c.default.ryw_GetIpBlocked_csryw() ? a.default.is_OPPO_GAME_csryw() && (this._nativeAd_csryw && (this._nativeAd_csryw.destroy(),
              this._nativeAd_csryw = null), this._curAdItem_csryw = null, this._nativeAd_csryw = window.qg.createNativeAd({
              posId: d.default.NativeAdId_csryw
            }), this._nativeAd_csryw.load(), this._nativeAd_csryw.onLoad(function (n) {
              console.log("原生广告加载成功：", n);
              for (var o = n.adList, r = 0; r < o.length; ++r) {
                var i = o[r];
                for (var s in console.log("原生广告数据：", r), i) console.log(s, i[s]);
              }
              if (e._curAdItem_csryw = o[Math.floor(Math.random() * o.length)], null != e._curAdItem_csryw) {
                for (r = 0; r < e._curAdItem_csryw.imgUrlList.length; ++r) console.log("imgUrlList : ", r + " ", e._curAdItem_csryw.imgUrlList[r]);
                var c = e._curAdItem_csryw.imgUrlList[Math.floor(Math.random() * e._curAdItem_csryw.imgUrlList.length)];
                null != c ? (l.default.loadRemote_csryw(c, u.handleFM_csryw(function (t, n) {
                  if (!t && e.isValid && e.displaySpr) {
                    var o = new cc.SpriteFrame(n);
                    e.displaySpr.spriteFrame = o, e.displaySpr.node.active = !0;
                  }
                }, t)), e._nativeAd_csryw.reportAdShow({
                  adId: e._curAdItem_csryw.adId
                }), console.log("加载图片", c), console.log("点击上报！！！"), e.centerZone.active = !0) : (console.log("原生广告加载失败 imgulr is : ", c),
                  e.removeView_csryw());
              }
            }), this._nativeAd_csryw.onError(function (t) {
              for (var n in console.log("原生广告加载失败：", t), t) console.log(n, t[n]);
              e.removeView_csryw();
            }), this.centerZone.active = !1) : this.removeView_csryw();
          }, e.prototype.onCloseBtn_csryw = function () {
            this.removeView_csryw();
          }, e.prototype.onOkBtn_csryw = function () {
            100 * Math.random() <= s.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.yuansheng_csryw && (console.log("进入变态广告"),
              this.onDisplayClick_csryw()), this.removeView_csryw();
          }, e.prototype.onDisplayClick_csryw = function () {
            null != this._nativeAd_csryw && null != this._curAdItem_csryw && (console.log("点击上报！！！"),
              this._nativeAd_csryw.reportAdClick({
                adId: this._curAdItem_csryw.adId
              }));
          }, e.prototype.onDestroy = function () {
            t.prototype.onDestroy.call(this), a.default.is_OPPO_GAME_csryw() && (this._nativeAd_csryw && this._nativeAd_csryw.destroy(),
              this._nativeAd_csryw = null, this._curAdItem_csryw = null);
          }, e.prototype.showCached = function () {
            if (null != d.default._cachedNativeAd_csryw) {
              var t = this;
              t._curAdItem_csryw = d.default._cachedAdItem_csryw, l.default.loadRemote_csryw(d.default._cachedimgUrl_csryw, u.handleFM_csryw(function (e, n) {
                if (!e && t.isValid && t.displaySpr) {
                  var o = new cc.SpriteFrame(n);
                  t.displaySpr.spriteFrame = o, t.displaySpr.node.active = !0;
                }
              }, this)), t._nativeAd_csryw.reportAdShow({
                adId: t._curAdItem_csryw.adId
              }), t.centerZone.active = !0, console.log("显示 缓存 加载图片", d.default._cachedimgUrl_csryw);
            }
          }, r([h({
            tooltip: "节点",
            type: cc.Node
          })], e.prototype, "centerZone", void 0), r([h({
            tooltip: "图片节点",
            type: cc.Node
          })], e.prototype, "display", void 0), r([h({
            tooltip: "图片",
            type: cc.Sprite
          })], e.prototype, "displaySpr", void 0), r([h({
            tooltip: "查看广告按钮",
            type: cc.Node
          })], e.prototype, "okBtn", void 0), r([h({
            tooltip: "关闭按钮",
            type: cc.Node
          })], e.prototype, "closeBtn", void 0), e = r([y, _(), f("FrameWork组件/OPPO/OPPONativeAdViewTemplate")], e);
      }(i.default);
    n.default = w, cc._RF.pop();
  }, {
    "../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Interface/FMInterface": "FMInterface",
    "../../FrameWork/Mgr/RemoteMgr": "RemoteMgr",
    "../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../FrameWork/Util/AppPlatform": "AppPlatform",
    "./OPPOAPI": "OPPOAPI"
  }],
  PartGrating: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "456d7e8ALFDCpTcysJQgxrY", "PartGrating");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../FrameWork/Event/EventEnum"),
      s = t("../../../../FrameWork/Event/EventMgr"),
      c = t("./PartImage"),
      a = cc._decorator,
      l = a.ccclass,
      u = a.property,
      d = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.partImgList = [], e.hideType = 3, e._initPos = new cc.Vec2(), e._hidePos = new cc.Vec2(),
            e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          this._initPos.x = this.node.x, this._initPos.y = this.node.y, this._hidePos.x = this.node.x,
            this._hidePos.y = this.node.y, 0 == this.hideType ? this._hidePos.y += cc.visibleRect.height : 1 == this.hideType ? this._hidePos.y -= cc.visibleRect.height : 2 == this.hideType ? this._hidePos.x -= cc.visibleRect.width : 3 == this.hideType && (this._hidePos.x += cc.visibleRect.width);
        }, e.prototype.start = function () {
          var t = this;
          this.node.getChildByName("gNode").children.forEach(function (e, n) {
            var o = e.addComponent(c.default);
            t.partImgList.push(o);
          });
        }, e.prototype.onEnable = function () {
          s.default.onEvent_csryw(i.ryw_Event.ryw_Lobby_CheckArea_csryw, this.onCheckAreaResult, this),
            s.default.onEvent_csryw(i.ryw_Event.ryw_Lobby_DinosaurShowTipsFragment_csryw, this.onShowTips, this),
            s.default.onEvent_csryw(i.ryw_Event.ryw_Lobby_DinosaurHideTipsFragment_csryw, this.onHideTips, this);
        }, e.prototype.onDisable = function () {
          s.default.offEvent_csryw(i.ryw_Event.ryw_Lobby_CheckArea_csryw, this.onCheckAreaResult, this),
            s.default.offEvent_csryw(i.ryw_Event.ryw_Lobby_DinosaurShowTipsFragment_csryw, this.onShowTips, this),
            s.default.offEvent_csryw(i.ryw_Event.ryw_Lobby_DinosaurHideTipsFragment_csryw, this.onHideTips, this);
        }, e.prototype.onEnterAction = function (t, e) {
          var n = this;
          this.node.active = !0, this.node.setPosition(this._hidePos), this.node.runAction(cc.sequence(cc.moveTo(1, this._initPos), cc.callFunc(function () {
            n.node.setPosition(n._initPos), t && t.call(e);
          })));
        }, e.prototype.onExitAction = function (t, e) {
          var n = this;
          this.node.setPosition(this._initPos), this.node.runAction(cc.sequence(cc.moveTo(1, this._hidePos), cc.callFunc(function () {
            n.node.setPosition(n._hidePos), n.node.active = !1, t && t.call(e);
          })));
        }, e.prototype.onShowTips = function () {
          if (console.log("onShowTipsonShowTipsonShowTipsonShowTipsonShowTipsonShowTips"),
            this.node.active)
            for (var t = 0; t < this.partImgList.length; t++) {
              var e = this.partImgList[t];
              if (e && 0 == e.isSplice) {
                e.onStartAction();
                break;
              }
            }
        }, e.prototype.onHideTips = function () {
          if (console.log("onHideTipsonHideTipsonHideTipsonHideTipsonHideTips"), this.node.active)
            for (var t = 0; t < this.partImgList.length; t++) {
              var e = this.partImgList[t];
              e && e.onStopAction();
            }
        }, e.prototype.onCheckAreaResult = function (t, e) {
          if (null != t) {
            for (var n = !0, o = 0; o < this.partImgList.length; o++) {
              var r = this.partImgList[o];
              r && (r.node.name == t.name && r.onImageDown(e), 0 == r.isSplice && (n = !1));
            }
            n && s.default.emitEvent_csryw(i.ryw_Event.ryw_Lobby_PartGrating_End_csryw);
          }
        }, r([u({
          type: cc.Enum({
            TOP: 0,
            BOTTOM: 1,
            LEFT: 2,
            RIGHT: 3
          }),
          tooltip: "隐藏时所在位置"
        })], e.prototype, "hideType", void 0), e = r([l], e);
      }(cc.Component);
    n.default = d, cc._RF.pop();
  }, {
    "../../../../FrameWork/Event/EventEnum": "EventEnum",
    "../../../../FrameWork/Event/EventMgr": "EventMgr",
    "./PartImage": "PartImage"
  }],
  PartImage: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "c11d6hA0KBCBZLXAC/0xfnv", "PartImage");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../FrameWork/Event/EventEnum"),
      s = t("../../../../FrameWork/Event/EventMgr"),
      c = cc._decorator,
      a = c.ccclass,
      l = (c.property,
        function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.initPos = new cc.Vec2(), e.initRotation = 0, e.offsetPos = new cc.Vec2(-30, 30),
              e.isSplice = !1, e.isAction = !1, e;
          }
          return o(e, t), e.prototype.start = function () {
            this.initPos.x = this.node.x, this.initPos.y = this.node.y, this.initRotation = this.node.rotation;
          }, e.prototype.onEnable = function () {
            this.node.on(cc.Node.EventType.TOUCH_START, this._onClickStartItem, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onClickMoveItem, this),
              this.node.on(cc.Node.EventType.TOUCH_END, this._onClickEndItem, this);
          }, e.prototype.onDisable = function () {
            this.node.off(cc.Node.EventType.TOUCH_START, this._onClickStartItem, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onClickMoveItem, this),
              this.node.off(cc.Node.EventType.TOUCH_END, this._onClickEndItem, this);
          }, e.prototype.onImageDown = function (t) {
            this.isSplice = t, this.node.setPosition(this.initPos), this.node.active = !this.isSplice;
          }, e.prototype.onStartAction = function () {
            this.isAction || (this.isAction = !0, this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1, 20), cc.rotateTo(.2, -20), cc.rotateTo(.1, 0)))));
          }, e.prototype.onStopAction = function () {
            this.isAction = !1, this.node.stopAllActions(), this.node.rotation = this.initRotation;
          }, e.prototype._onClickMoveItem = function (t) {
            var e = t.target,
              n = new cc.Vec2(t.getLocationX(), t.getLocationY());
            n = this.node.parent.convertToNodeSpaceAR(n), e.setPosition(n);
          }, e.prototype._onClickStartItem = function (t) {
            var e = t.target;
            console.log("_onClickStartItem_onClickStartItem =", e.name);
            var n = new cc.Vec2(t.getLocationX(), t.getLocationY());
            n = this.node.parent.convertToNodeSpaceAR(n), e.setPosition(n), s.default.emitEvent_csryw(i.ryw_Event.ryw_Lobby_SelectJigsaw_csryw, e),
              this.isAction && this.onStopAction();
          }, e.prototype._onClickEndItem = function (t) {
            var e = t.target;
            console.log("_onClickEndItem_onClickEndItem_onClickEndItem =", e.name), s.default.emitEvent_csryw(i.ryw_Event.ryw_Lobby_CancleJigsaw_csryw);
          }, e = r([a], e);
        }(cc.Component));
    n.default = l, cc._RF.pop();
  }, {
    "../../../../FrameWork/Event/EventEnum": "EventEnum",
    "../../../../FrameWork/Event/EventMgr": "EventMgr"
  }],
  Progress: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "83001EXYsBKaa/mUD8CAnDM", "Progress");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = i.property,
      a = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.progressBehind = null, e.progressBefore = null, e.lblProgress = null, e.progressAddition = null,
            e.curValue = 0, e.progressMaxWidth = 0, e.maxValue = 0, e.additionMaxValue = 0,
            e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            this.progressBefore && (this.progressMaxWidth = this.progressBefore.width), this.lblProgress && (this.lblProgress.string = "0");
          }, e.prototype.start = function () {}, e.prototype.updateProgress = function (t, e, n) {
            if (void 0 === e && (e = !0), void 0 === n && (n = !1), null != t) {
              var o = 0,
                r = 0,
                i = Math.floor(t / this.maxValue * 100);
              i > 100 && (i = 100);
              var s = Math.floor(this.progressMaxWidth * i / 100),
                c = "bounceOut";
              this.curValue < t && (c = "quadOut");
              var a = function (t, e, n, o) {
                void 0 === n && (n = 0), void 0 === o && (o = !1), o && t.stopAllActions(), cc.tween(t).delay(n).to(.2, {
                  width: e
                }, {
                  easing: c
                }).start();
              };
              if (this.curValue = t, this.progressAddition)
                if (this.additionMaxValue && t >= this.maxValue)
                  if (this.progressAddition.active = !0,
                    t -= this.maxValue, (o = Math.floor(t / this.additionMaxValue * 100)) > 100 && (o = 100),
                    r = Math.floor(this.progressMaxWidth * o / 100), e) {
                    if (a(this.progressAddition, r), "quadOut" == c) return;
                  } else this.progressAddition.width = r;
              else this.progressAddition.active = !1;
              this.progressBefore && (e ? a(this.progressBefore, s) : this.progressBefore.width = s),
                this.progressBehind && (e ? a(this.progressBehind, s, .5, !0) : this.progressBehind.width = s),
                this.lblProgress && (this.lblProgress.string = n ? t + "" : i + "");
            }
          }, e.prototype.setMaxValue = function (t) {
            this.maxValue = t;
          }, e.prototype.setAdditionMaxValue = function (t) {
            this.additionMaxValue = t;
          }, r([c(cc.Node)], e.prototype, "progressBehind", void 0), r([c(cc.Node)], e.prototype, "progressBefore", void 0),
          r([c(cc.Label)], e.prototype, "lblProgress", void 0), r([c(cc.Node)], e.prototype, "progressAddition", void 0),
          e = r([s], e);
      }(cc.Component);
    n.default = a, cc._RF.pop();
  }, {}],
  Property: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "2a185NM1PZH76KqbvWz4BkL", "Property"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.Property = void 0;
    var o = t("../config/DinosaurConfig"),
      r = t("../config/GlobalConfig"),
      i = t("../config/SkillConfig"),
      s = t("./CustomUser"),
      c = function () {
        function t() {
          this.id = 0, this.hp = 0, this.mp = 0, this.atk = 0, this.name = "", this.luckLevelNum = 0,
            this.sortId = 0, this.unlockGoldNum = 0, this.unlockVideoTime = 0, this.dinosaurData = new s.DinosaurData(),
            this.hpMax = 0, this.mpMax = 100, this.atkMax = 0, this.hpBase = 0, this.atkBase = 0,
            this.hpLimit = 0, this.atkLimit = 0, this.comboPer = [], this.uniquePer = [], this.longRangePer = 0,
            this.straightRangePer = 0, this.hpBuffed = 0, this.hpShowBanner = 0, this.atkEnergyIncrease = 5,
            this.autoEnergyIncrease = 0, this.autoEnergyInterval = 0, this.equipArmor = !1,
            this.equipArmorHead = !1, this.armorId = 0, this.armorSlotName = null;
        }
        return t.prototype.initBaseData = function (t) {
          var e = o.default.getInstance().getDataById(t),
            n = i.default.getInstance().getDataById(t);
          if (e) {
            var s = r.default.getInstance().getData();
            this.id = e.Id, this.name = e.DinosaurName, this.unlockGoldNum = e.UnlockGoldNum,
              this.unlockVideoTime = e.UnlockVideoTime, this.hpBase = e.HP, this.atkBase = e.Attack,
              this.luckLevelNum = e.LevelNum, this.sortId = e.sortId, this.comboPer = n.comboAtks,
              this.uniquePer = n.superAtks, this.longRangePer = n.secondSkillAtk, this.straightRangePer = n.fourSkillAtk,
              this.hpLimit = Math.floor(e.HP + e.HP * s.maxHpLevel * s.hpIncrease * .01), this.atkLimit = Math.floor(e.Attack + e.Attack * s.maxAtkLevel * s.atkIncrease * .01);
          }
        }, t.prototype.reset = function () {
          this.hp = this.hpMax, this.atk = this.atkMax, this.hpShowBanner = 0;
        }, t.prototype.setHp = function (t) {
          this.hp = Math.floor(t);
        }, t.prototype.changeHp = function (t) {
          this.hp += Math.floor(t), this.hp < 0 ? this.hp = 0 : this.hp > this.hpMax && (this.hp = this.hpMax);
        }, t.prototype.setMp = function (t) {
          this.mp = t;
        }, t.prototype.changeMp = function (t) {
          this.mp += t, this.mp < 0 ? this.mp = 0 : this.mp > this.mpMax && (this.mp = this.mpMax);
        }, t.prototype.setAtk = function (t) {
          this.atk = Math.floor(t);
        }, t.prototype.changeAtk = function (t) {
          this.atk += Math.floor(t);
        }, t.prototype.addLvHp = function () {
          this.dinosaurData.lvHp += 1;
        }, t.prototype.addLvAtk = function () {
          this.dinosaurData.lvAtk += 1;
        }, t.prototype.addVideoTime = function () {
          this.dinosaurData.videoTime += 1;
        }, t.prototype.buy = function () {
          this.dinosaurData.isBuy = !0;
        }, t.prototype.unlock = function () {
          this.dinosaurData.isUnlock = !0;
        }, t.prototype.install = function () {
          this.dinosaurData.isInstall = !0;
        }, t.prototype.checkVideoUnlock = function () {
          return this.dinosaurData.videoTime >= this.unlockVideoTime && (this.unlock(), !0);
        }, t.prototype.checkBuy = function () {
          return 0 == this.unlockGoldNum && (this.buy(), !0);
        }, t.prototype.isBuy = function () {
          return this.dinosaurData.isBuy;
        }, t.prototype.isUnlocked = function () {
          return this.dinosaurData.isUnlock;
        }, t.prototype.isInstall = function () {
          return this.dinosaurData.isInstall;
        }, t;
      }();
    n.Property = c, cc._RF.pop();
  }, {
    "../config/DinosaurConfig": "DinosaurConfig",
    "../config/GlobalConfig": "GlobalConfig",
    "../config/SkillConfig": "SkillConfig",
    "./CustomUser": "CustomUser"
  }],
  QCrazyClickView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "f655bUSyNhB6JxpHDZhXCZs", "QCrazyClickView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../../../FrameWork/Mgr/WudianMgr"),
      c = t("../../../FrameWork/Config/AppSwitchConfig"),
      a = cc._decorator,
      l = a.ccclass,
      u = a.property,
      d = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.progreeBar = null, e.clickButton = null, e.arrowNode = null, e.prizeView = null,
            e.prizeViewWin = null, e.prizeViewFail = null, e.animateSp = null, e.totalClickMax = 15,
            e.needClickMax = 10, e.prizeSureNode = null, e.isTouched_csryw = !1, e.timeCnt_csryw = 1,
            e.bannerClickTime_csryw = 3, e.isBarNeedReduce_csryw = !1, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            this.animateSp && (this.dragonBonesAct_csryw = this.animateSp.getComponent(dragonBones.ArmatureDisplay),
                this.dragonBonesAct_csryw.playAnimation("daiji", 1), this.dragonBonesAct_csryw.node.active = !0),
              this.clickButton.on("click", this.onListenerClick_csryw, this), this.prizeSureNode.on("click", this.onListenerClosePrizeWindow_csryw, this),
              this.progreeBar.progress = 0, this.clickButton.active = !0, this.prizeView.active = !1,
              this.isBarNeedReduce_csryw = !0, this.prizeViewWin.active = !0, this.prizeViewFail.active = !1,
              this.arrowNode && cc.tween(this.arrowNode).repeatForever(cc.tween().by(.14, {
                y: -80
              }).by(.14, {
                y: 80
              })).start(), this.bannerClickTime_csryw = Math.floor(5 * Math.random()) + 2;
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.update = function (t) {
            this.isBarNeedReduce_csryw && (this.isTouched_csryw ? (this.timeCnt_csryw += t,
              this.timeCnt_csryw > 1.1 && (this.timeCnt_csryw = 0, this.isTouched_csryw = !1,
                this.dragonBonesAct_csryw && this.dragonBonesAct_csryw.playAnimation("daiji", 0))) : (this.progreeBar.progress > 0 ? this.progreeBar.progress -= t : this.progreeBar.progress = 0,
              this.clickNum_csryw = 0));
          }, e.prototype.onListenerClick_csryw = function () {
            var t = this;
            if (this.clickNum_csryw++, this.clickSum_csryw++, this.isTouched_csryw = !0, this.dragonBonesAct_csryw && this.dragonBonesAct_csryw.playAnimation("jida", 1),
              this.clickNum_csryw > this.needClickMax && (this.clickNum_csryw = this.needClickMax),
              this.clickNum_csryw >= this.bannerClickTime_csryw) {
              if (this.clickNum_csryw >= this.needClickMax && (this.clickNum_csryw = this.needClickMax - 1),
                this.ryw__bannerClicked_csryw) return;
              this.ryw__bannerClicked_csryw = !0, this.clickToBannerClickTime_csryw(), this.scheduleOnce(function () {
                t.BannerClicked_csryw();
              }, 2);
            } else this.clickSum_csryw > this.totalClickMax && (this.clickToTotalClickMax_csryw(),
              this.BannerClicked_csryw());
            this.progreeBar.progress = this.progreeBar.progress + 1 / this.needClickMax;
          }, e.prototype.clickToBannerClickTime_csryw = function () {
            s.default.wudianFlag_csryw && 1 == c.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianBanner_csryw && this.showBanner_csryw();
          }, e.prototype.clickToTotalClickMax_csryw = function () {
            s.default.wudianFlag_csryw && 1 == c.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianBanner_csryw && this.showBanner_csryw();
          }, e.prototype.onListenerClosePrizeWindow_csryw = function () {
            this.hideBanner_csryw(), this.emitListenerEvent_csryw(this.EventEnumView_csryw.KuangdianNextClick_csryw);
          }, e.prototype.ryw_OpenPrizeWindow_csryw = function () {
            this.prizeView.active = !0, this.dragonBonesAct_csryw && (this.dragonBonesAct_csryw.node.active = !1),
              this.clickButton.active = !1;
          }, e.prototype.BannerClicked_csryw = function () {
            this.isBarNeedReduce_csryw = !1, this.ryw__bannerClicked_csryw = !0, this.clickNum_csryw = this.needClickMax,
              this.progreeBar.progress = 1, this.ryw_OpenPrizeWindow_csryw();
          }, r([u({
            tooltip: "进度条",
            type: cc.ProgressBar
          })], e.prototype, "progreeBar", void 0), r([u({
            tooltip: "点击按钮",
            type: cc.Node
          })], e.prototype, "clickButton", void 0), r([u({
            tooltip: "箭头",
            type: cc.Node
          })], e.prototype, "arrowNode", void 0), r([u({
            tooltip: "结果显示",
            type: cc.Node
          })], e.prototype, "prizeView", void 0), r([u({
            tooltip: "结果显示Win",
            type: cc.Node
          })], e.prototype, "prizeViewWin", void 0), r([u({
            tooltip: "结果显示Fail",
            type: cc.Node
          })], e.prototype, "prizeViewFail", void 0), r([u({
            tooltip: "龙骨动画",
            type: cc.Node
          })], e.prototype, "animateSp", void 0), r([u({
            tooltip: "最大的次数",
            type: cc.Integer
          })], e.prototype, "totalClickMax", void 0), r([u({
            tooltip: "点击获奖的次数",
            type: cc.Integer
          })], e.prototype, "needClickMax", void 0), r([u({
            tooltip: "对话框确定按钮",
            type: cc.Node
          })], e.prototype, "prizeSureNode", void 0), e = r([l], e);
      }(i.default);
    n.default = d, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr"
  }],
  QQCrazyClickView2: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "ae8a8PvrZZNSIBlNVdKYAK8", "QQCrazyClickView2");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./QCrazyClickView"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../FrameWork/Config/AppConfig"),
      a = t("../QQMiniGameAPI"),
      l = cc._decorator,
      u = l.ccclass,
      d = l.property,
      p = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.quanquanSpr = null, e.shouzhiSpr = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          t.prototype.onLoad.call(this), cc.tween(this.quanquanSpr).repeatForever(cc.tween().to(.25, {
            scale: .6
          }).to(.5, {
            scale: 1.5
          })).start(), cc.tween(this.shouzhiSpr).repeatForever(cc.tween().to(.25, {
            angle: 45
          }).to(.5, {
            angle: -30
          })).start();
        }, e.prototype.update = function (t) {
          this.isBarNeedReduce_csryw && (this.isTouched_csryw ? (this.timeCnt_csryw += t,
            this.timeCnt_csryw > 1.1 && (this.timeCnt_csryw = 0, this.isTouched_csryw = !1)) : (this.progreeBar.progress > 0 ? this.progreeBar.progress -= t : this.progreeBar.progress = 0,
            this.clickNum_csryw = 0));
        }, e.prototype.showBanner_csryw = function () {
          1 == s.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.kuangdianBox_csryw && c.default.Versions_csryw == s.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw && a.default.showAppBoxAd_csryw(function () {});
        }, e.prototype.hideBanner_csryw = function () {}, e.prototype.clickToBannerClickTime_csryw = function () {
          this.showBanner_csryw();
        }, e.prototype.clickToTotalClickMax_csryw = function () {
          this.showBanner_csryw();
        }, r([d({
          tooltip: "圈圈图",
          type: cc.Node
        })], e.prototype, "quanquanSpr", void 0), r([d({
          tooltip: "手指图",
          type: cc.Node
        })], e.prototype, "shouzhiSpr", void 0), e = r([u], e);
      }(i.default);
    n.default = p, cc._RF.pop();
  }, {
    "../../../FrameWork/Config/AppConfig": "AppConfig",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../QQMiniGameAPI": "QQMiniGameAPI",
    "./QCrazyClickView": "QCrazyClickView"
  }],
  QQCrazyClickView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "2fe85vcToJNP40Smpd1wnCp", "QQCrazyClickView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./QCrazyClickView"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../FrameWork/Config/AppConfig"),
      a = t("../CachedQQBannerAd"),
      l = cc._decorator,
      u = l.ccclass,
      d = (l.property,
        function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }
          return o(e, t), e.prototype.showBanner_csryw = function () {
            1 == s.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.kuangdianBanner_csryw && c.default.Versions_csryw == s.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw && a.default.show_csryw();
          }, e.prototype.hideBanner_csryw = function () {
            1 == s.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.kuangdianBanner_csryw && c.default.Versions_csryw == s.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw && a.default.hide_csryw();
          }, e.prototype.clickToBannerClickTime_csryw = function () {
            this.showBanner_csryw();
          }, e.prototype.clickToTotalClickMax_csryw = function () {
            this.showBanner_csryw();
          }, e = r([u], e);
        }(i.default));
    n.default = d, cc._RF.pop();
  }, {
    "../../../FrameWork/Config/AppConfig": "AppConfig",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../CachedQQBannerAd": "CachedQQBannerAd",
    "./QCrazyClickView": "QCrazyClickView"
  }],
  QQGameSettleViewTemplate: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "ba1d7law7lJiJFQvtKCIjnC", "QQGameSettleViewTemplate");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("./QCrazyClickView"),
      c = t("../QQMiniGameAPI"),
      a = t("../../../FrameWork/Util/Common"),
      l = t("../../../FrameWork/Interface/FMInterface"),
      u = t("../../../FrameWork/Config/AppSwitchConfig"),
      d = t("../CachedQQBannerAd"),
      p = t("../../../FrameWork/Mgr/WudianMgr"),
      y = t("../../../FrameWork/Config/AppConfig"),
      h = cc._decorator,
      _ = h.ccclass,
      f = h.property,
      w = h.disallowMultiple,
      g = h.menu,
      m = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.clickBut = null, e.moveGameNode = null, e.advertis = null, e.kuangdianPrefab = null,
            e.winTitle = null, e.winIcon = null, e.failTitle = null, e.failIcon = null, e._clickTimingTag_csryw = !1,
            e._clickTag_csryw = !1, e.isWin_csryw = !1, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            var t = this;
            this.clickBut.on("click", this._onListenerClickButtom_csryw, this), this.moveGameNode.on("click", this._onListenerClickMoveGame_csryw, this),
              this.advertis.getComponent(cc.Widget).updateAlignment(), this.clickButY_csryw = this.clickBut.y,
              c.default.tryShowWXCrazyClick2_csryw && (this.kuandian_csryw = a.default.createPrefab_csryw(this.kuangdianPrefab, s.default, this.node),
                this.kuandian_csryw.onListenerEventView_csryw(l.handleFM_csryw(function (e) {
                  e == t.kuandian_csryw.EventEnumView_csryw.KuangdianNextClick_csryw && (t.kuandian_csryw.removeView_csryw(),
                    t.kuandian_csryw = null, t.updateWudianPoint_csryw());
                }, this)), this.kuandian_csryw.showView_csryw());
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.excuteAction_csryw = function () {
            var t = this;
            this._clickTimingTag_csryw = !0;
            var e = u.default.getInstance_csryw().getAppSwitchData_csryw().btnMoveTimer_csryw,
              n = u.default.getInstance_csryw().getAppSwitchData_csryw().bannerMoveTimer_csryw;
            this.scheduleOnce(function () {
              t.onActionBannerUp_csryw();
            }, n), this.scheduleOnce(function () {
              t.onActionMoveBtnUp_csryw();
            }, e);
          }, e.prototype.onActionMoveBtnUp_csryw = function () {
            this._clickTag_csryw = !0, this.clickBut.y = this.clickButY_csryw;
          }, e.prototype.onActionBannerUp_csryw = function () {}, e.prototype.showBanner_csryw = function () {
            d.default.show_csryw();
          }, e.prototype.hideBanner_csryw = function () {
            d.default.hide_csryw();
          }, e.prototype.updateWudianPoint_csryw = function () {
            var t = this;
            if (p.default.wudianFlag_csryw && y.default.Versions_csryw == u.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw) {
              if (1 == u.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.weiyi_csryw) {
                var e = -(this.advertis.height - 100);
                this.clickBut.y = e;
              }
              1 == u.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.box_csryw ? c.default.showAppBoxAd_csryw(function () {
                t.excuteAction_csryw();
              }, function () {
                t.excuteAction_csryw();
              }) : this.excuteAction_csryw();
            }
          }, e.prototype._onListenerClickMoveGame_csryw = function () {
            c.default.showAppBoxAd_csryw(function () {});
          }, e.prototype._onListenerClickButtom_csryw = function () {
            if (this._clickTag_csryw || !p.default.wudianFlag_csryw) this.unscheduleAllCallbacks(),
              this.onLisnterClickCall_csryw();
            else {
              this._clickTimingTag_csryw || this.excuteAction_csryw();
            }
          }, e.prototype.onLisnterClickCall_csryw = function () {
            this.hideBanner_csryw(), this.emitListenerEvent_csryw(this.EventEnumView_csryw.GameFromSettle_csryw);
          }, e.prototype.updateOpenViewData_csryw = function (t, e) {
            this._initView_csryw(), this.isWin_csryw = t, this.winData_csryw = e, t ? (this.winTitle.active = !0,
              this.winIcon.active = !0, this.failTitle.active = !1, this.failIcon.active = !1) : (this.winTitle.active = !1,
              this.winIcon.active = !1, this.failTitle.active = !0, this.failIcon.active = !0);
          }, r([f({
            tooltip: "下一步按钮",
            type: cc.Node
          })], e.prototype, "clickBut", void 0), r([f({
            tooltip: "更多游戏",
            type: cc.Node
          })], e.prototype, "moveGameNode", void 0), r([f({
            tooltip: "区域节点",
            type: cc.Node
          })], e.prototype, "advertis", void 0), r([f({
            tooltip: "狂点页面2",
            type: cc.Prefab
          })], e.prototype, "kuangdianPrefab", void 0), r([f({
            tooltip: "胜利标题",
            type: cc.Node
          })], e.prototype, "winTitle", void 0), r([f({
            tooltip: "胜利Icon",
            type: cc.Node
          })], e.prototype, "winIcon", void 0), r([f({
            tooltip: "失败标题",
            type: cc.Node
          })], e.prototype, "failTitle", void 0), r([f({
            tooltip: "失败Icon",
            type: cc.Node
          })], e.prototype, "failIcon", void 0), e = r([_, w(), g("FrameWork组件/QQ/QQGameSettleViewTemplate")], e);
      }(i.default);
    n.default = m, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppConfig": "AppConfig",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Interface/FMInterface": "FMInterface",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/Util/Common": "Common",
    "../CachedQQBannerAd": "CachedQQBannerAd",
    "../QQMiniGameAPI": "QQMiniGameAPI",
    "./QCrazyClickView": "QCrazyClickView"
  }],
  QQGameViewTemplate: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "daf007OwEBJmIDmsT86LDd3", "QQGameViewTemplate");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = cc._decorator,
      c = s.ccclass,
      a = (s.property,
        s.disallowMultiple),
      l = s.menu,
      u = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return o(e, t), e.prototype.initView_csryw = function () {}, e.prototype.addEvent_csryw = function () {},
          e.prototype.removeEvent_csryw = function () {}, e = r([c, a(), l("FrameWork组件/QQ/QQGameViewTemplate")], e);
      }(i.default);
    n.default = u, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase"
  }],
  QQMainViewTemplate: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "432d3W6WZ1NNpKKWQ6sInSQ", "QQMainViewTemplate");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("./QCrazyClickView"),
      c = t("../../../FrameWork/User/User"),
      a = t("../../../FrameWork/Event/EventMgr"),
      l = t("../../../FrameWork/Event/EventEnum"),
      u = t("../../../FrameWork/Util/Common"),
      d = t("../../../FrameWork/Interface/FMInterface"),
      p = t("../QQMiniGameAPI"),
      y = cc._decorator,
      h = y.ccclass,
      _ = y.property,
      f = y.disallowMultiple,
      w = y.menu,
      g = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.labelMoney = null, e.labelLevel = null, e.butStart = null, e.butMoregame = null,
            e.kuangdianPrefab = null, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
          this.labelMoney.string = c.default.getMoney_csryw() + "", this.labelLevel.string = c.default.getLeveNum_csryw() + "",
            a.default.onEvent_csryw(l.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, this.onUserMoneyChange_csryw, this);
        }, e.prototype.addEvent_csryw = function () {
          this.butStart.on("click", this.listenerStartGame_csryw, this), this.butMoregame.on("click", this.listenerMoreGame_csryw, this);
        }, e.prototype.removeEvent_csryw = function () {
          a.default.offTargetEvent_csryw(this);
        }, e.prototype.onUserMoneyChange_csryw = function (t) {
          var e = t.curr;
          t.last;
          this.labelMoney.string = e + "";
        }, e.prototype.listenerStartGame_csryw = function () {
          var t = this;
          this.kuandian_csryw = u.default.createPrefab_csryw(this.kuangdianPrefab, s.default, this.node),
            this.kuandian_csryw.onListenerEventView_csryw(d.handleFM_csryw(function (e) {
              e == t.kuandian_csryw.EventEnumView_csryw.KuangdianNextClick_csryw && (t.emitListenerEvent_csryw(t.EventEnumView_csryw.StartGame_csryw),
                t.kuandian_csryw.removeView_csryw(), t.kuandian_csryw = null);
            }, this)), this.kuandian_csryw.showView_csryw();
        }, e.prototype.listenerMoreGame_csryw = function () {
          p.default.showAppBoxAd_csryw(function () {});
        }, r([_({
          tooltip: "金币Label",
          type: cc.Label
        })], e.prototype, "labelMoney", void 0), r([_({
          tooltip: "关卡Label",
          type: cc.Label
        })], e.prototype, "labelLevel", void 0), r([_({
          tooltip: "游戏开始按钮",
          type: cc.Node
        })], e.prototype, "butStart", void 0), r([_({
          tooltip: "更多游戏按钮",
          type: cc.Node
        })], e.prototype, "butMoregame", void 0), r([_({
          tooltip: "狂点页面1",
          type: cc.Prefab
        })], e.prototype, "kuangdianPrefab", void 0), e = r([h, f(), w("FrameWork组件/QQ/QQMainViewTemplate")], e);
      }(i.default);
    n.default = g, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Event/EventEnum": "EventEnum",
    "../../../FrameWork/Event/EventMgr": "EventMgr",
    "../../../FrameWork/Interface/FMInterface": "FMInterface",
    "../../../FrameWork/User/User": "User",
    "../../../FrameWork/Util/Common": "Common",
    "../QQMiniGameAPI": "QQMiniGameAPI",
    "./QCrazyClickView": "QCrazyClickView"
  }],
  QQMiniGameAPI: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d621cKEqIRF+qeAD5jRxzQ2", "QQMiniGameAPI"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../FrameWork/Util/AppPlatform"),
      r = t("../../FrameWork/Config/AppConfig"),
      i = t("../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../FrameWork/Mgr/WudianMgr"),
      c = function () {
        function t() {}
        return t.Login_csryw = function (t, e) {
            o.default.is_QQ_PLAY_csryw() && window.qq.login({
              success: function (e) {
                if (e.code) {
                  var n = e.code;
                  t(n), console.log("登陆成功,获取到code : " + n);
                }
              }
            });
          }, t.onRewardedVideoAdLoad_csryw = function () {
            console.log("激励视频 广告加载完成");
          }, t.onRewardedVideoAdError_csryw = function (e) {
            console.log("激励视频 广告加载失败" + e), t._onRewardedVideoAdFailed_csryw && t._onRewardedVideoAdFailed_csryw();
          }, t.onRewardedVideoAdClose_csryw = function (e) {
            e && e.isEnded || null == e ? (console.log("激励视频 已完整观看"), t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!0)) : (console.log("激励视频 未完整观看"),
              t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!1));
          }, t.regRewardedVideoAdEvent_csryw = function (e) {
            e.onLoad(t.onRewardedVideoAdLoad_csryw), e.onError(t.onRewardedVideoAdError_csryw),
              e.onClose(t.onRewardedVideoAdClose_csryw), t._isRegRewardedVideoAdEvent_csryw = !0;
          }, t.showRewardedVideoAd_csryw = function (e, n) {
            if (o.default.is_QQ_PLAY_csryw()) {
              t._onRewardedVideoAdClose_csryw = e, t._onRewardedVideoAdFailed_csryw = n;
              var i = window.qq.createRewardedVideoAd({
                adUnitId: r.default.qq_adUnitId_csryw
              });
              t._isRegRewardedVideoAdEvent_csryw || t.regRewardedVideoAdEvent_csryw(i), i.load().then(function () {
                var t = i.show();
                t.then(function () {
                  return console.log("激励视频 广告显示成功");
                }), t.catch(function (t) {
                  i.load().then(function () {
                    return i.show();
                  }).catch(function (t) {
                    console.log("激励视频 广告显示失败"), n && n();
                  });
                });
              }).catch(function (t) {
                console.log("激励视频 广告加载失败"), n && n();
              });
            } else e(!0);
          }, t.navigateToMiniProgram_csryw = function (t, e, n, r, i) {
            o.default.is_QQ_PLAY_csryw() && (console.log("跳转游戏： " + t), window.qq.navigateToMiniProgram({
              appId: t,
              path: e,
              extraData: {
                foo: "bar"
              },
              envVersion: "release",
              success: function (t) {
                n && n(t);
              },
              fail: function (t) {
                r && r(t);
              },
              complete: function (t) {
                i && i(t);
              }
            }));
          }, t.share_csryw = function (e, n, r) {
            var i = this;
            o.default.is_QQ_PLAY_csryw() && (t._onShow_csryw = function () {
              window.qq.offShow(t._onShow_csryw), t._onShow_csryw = null;
              Date.now(), i._lastShareTime_csryw;
              e && (Date.now() - i._lastShareTime_csryw > 2e3 ? e(!0) : e(!1));
            }, window.qq.onShow(t._onShow_csryw), t._lastShareTime_csryw = Date.now(), window.qq.shareAppMessage({
              title: n,
              imageUrl: r
            }));
          }, t.showInterstitialAd_csryw = function (t, e) {
            if (o.default.is_QQ_PLAY_csryw()) {
              var n = window.qq.createInterstitialAd({
                  adUnitId: r.default.qq_InsAdUnitId_csryw
                }),
                i = function () {
                  console.log("插屏广告 加载完成"), n.show().catch(function (t) {
                    console.log("插屏广告 显示失败 ：" + t), n.offLoad(i), n.offError(s), n.offClose(c), n.destroy(),
                      e && e();
                  });
                };
              n.onLoad(i);
              var s = function (t) {
                console.log("插屏广告 加载失败" + t), n.offLoad(i), n.offError(s), n.offClose(c), n.destroy(),
                  e && e();
              };
              n.onError(s);
              var c = function () {
                console.log("插屏广告 关闭"), n.offLoad(i), n.offError(s), n.offClose(c), n.destroy(),
                  t && t();
              };
              n.onClose(c);
            } else t();
          }, t.LoadAppBoxAd_csryw = function (t, e) {
            o.default.is_QQ_PLAY_csryw() ? (this.mAppboxAd_csryw = window.qq.createAppBox({
              adUnitId: r.default.qq_AppBoxId_csryw
            }), this.mAppboxAd_csryw.load().then(function () {
              console.log("盒子广告 加载完成");
            }), this.mAppboxAd_csryw.onError(function (t) {
              console.log("盒子广告 加载失败" + t), e && (e(), e = null);
            }), this.onBoxAdClose_csryw = function () {
              console.log("盒子广告 关闭"), t && (t(), t = null);
            }, this.mAppboxAd_csryw.onClose(this.onBoxAdClose_csryw)) : t && (t(), t = null);
          }, t.showAppBoxAd_csryw = function (e, n) {
            o.default.is_QQ_PLAY_csryw() && (t.mAppboxAd_csryw ? (console.log("显示盒子广告"), t.mAppboxAd_csryw.offClose(t.onBoxAdClose_csryw),
              t.onBoxAdClose_csryw = function () {
                console.log("盒子广告 关闭"), n && (n(), n = null);
              }, t.mAppboxAd_csryw.onClose(t.onBoxAdClose_csryw), t.mAppboxAd_csryw.show().catch(function (t) {
                console.log("盒子广告 显示失败 ：" + t), e && (e(), e = null);
              })) : t.LoadAppBoxAd_csryw(n, e));
          }, t.getLaunchOptionsSync_csryw = function () {
            if (o.default.is_QQ_PLAY_csryw()) {
              var t = window.qq.getLaunchOptionsSync();
              console.log("场景值 " + t.scene);
              var e = JSON.stringify(t.query);
              console.log("Query参数 " + e);
              var n = t.query.key;
              return console.log("Query参数：key " + n), console.log("ShareTicket " + t.shareTicket),
                console.log("ReferrerInfo.appId " + t.referrerInfo.appId), console.log("ReferrerInfo.extraData " + t.referrerInfo.extraData),
                t;
            }
            return {
              scene: 1001,
              query: "",
              shareTicket: "",
              appId: "",
              extraData: ""
            };
          }, t.SetShareMenu_csryw = function (t, e, n, r, i) {
            o.default.is_QQ_PLAY_csryw() && (console.log("小游戏设置转发按钮"), window.qq.showShareMenu({
              withShareTicket: !1,
              success: n,
              fail: r,
              complete: i
            }), window.qq.onShareAppMessage(function () {
              return {
                title: t,
                imageUrl: e
              };
            }));
          }, t.tryShowWXCrazyClick_csryw = function () {
            for (var e = t.getLaunchOptionsSync_csryw().scene, n = !0, o = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw, c = 0; c < o.length; ++c) {
              e == o[c] && (n = !1);
            }
            var a = s.default.ryw_GetIpBlocked_csryw(),
              l = i.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
              u = i.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.kuangdianBanner_csryw;
            return !(r.default.Versions_csryw != i.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw || !a || !n || 1 != l || 1 != u);
          }, t.tryShowWXCrazyClick2_csryw = function () {
            for (var e = t.getLaunchOptionsSync_csryw().scene, n = !0, o = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw, c = 0; c < o.length; ++c) {
              e == o[c] && (n = !1);
            }
            var a = s.default.ryw_GetIpBlocked_csryw(),
              l = i.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
              u = i.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.kuangdianBox_csryw;
            return !(r.default.Versions_csryw != i.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw || !a || !n || 1 != l || 1 != u);
          }, t.showAppBlockAd_csryw = function (e, n, i) {
            if (void 0 === n && (n = 150), void 0 === i && (i = "landscape"), o.default.is_QQ_PLAY_csryw() && window.qq.createBlockAd && !t.isAppBlockAdLoading_csryw) {
              if (t.isAppBlockAdLoading_csryw = !0, isNaN(t.screenWidth_csryw)) try {
                var s = window.qq.getSystemInfoSync();
                t.screenWidth_csryw = s.windowWidth, t.screenHeight_csryw = s.windowHeight, t.pixelRatio_csryw = s.pixelRatio,
                  t.isIos_csryw = "ios" == s.platform, t.skdVersion_csryw = s.SDKVersion, t.screenWidth_csryw *= t.isIos_csryw ? 1 : t.pixelRatio_csryw,
                  t.screenHeight_csryw *= t.isIos_csryw ? 1 : t.pixelRatio_csryw, console.log("getSystemInfoSync ==> ", s.SDKVersion);
              } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return void(e && e());
              }
              for (var c = t.skdVersion_csryw.split(".").map(function (t) {
                  return parseInt(t);
                }), a = t.supportSDKVersion_csryw.split(".").map(function (t) {
                  return parseInt(t);
                }), l = !0, u = 0; u < c.length; u++)
                if (c[u] < a[u]) {
                  l = !1;
                  break;
                }
              if (l) {
                console.log("QQMiniGameAPI.showAppBlockAd ", n), t.destroyAppBlockAd_csryw(), t.onFail = e;
                var d = t.isIos_csryw ? 32 / t.pixelRatio_csryw : 32,
                  p = Math.max(d, n / (t.isIos_csryw ? t.pixelRatio_csryw : 1)),
                  y = t.screenWidth_csryw;
                y = d, t.mAppBlockAd_csryw = window.qq.createBlockAd({
                  adUnitId: r.default.qq_blockAdArray_csryw[Math.floor(Math.random() * r.default.qq_blockAdArray_csryw.length)],
                  style: {
                    left: y,
                    top: p
                  },
                  size: t.AppBlockSize_csryw,
                  orientation: i
                }), t.mAppBlockAd_csryw.onError(t.appBlockADError_csryw), t.mAppBlockAd_csryw.show().catch(function (t) {
                  console.log("积木广告 显示失败 ：" + JSON.stringify(t)), e && e();
                }), t.isAppBlockAdLoading_csryw = !1;
              }
            }
          }, t.appBlockADResize_csryw = function (e) {
            if (t.mAppBlockAd_csryw.style) {
              var n = e.width,
                o = (e.height, (t.screenWidth_csryw - n) / 2);
              t.mAppBlockAd_csryw.style.left = o;
            }
          }, t.appBlockADError_csryw = function (e) {
            console.log("积木广告  加载失败 ", JSON.stringify(e)), t.onFail && t.onFail();
          }, t.destroyAppBlockAd_csryw = function () {
            o.default.is_QQ_PLAY_csryw() && t.mAppBlockAd_csryw && (console.log("QQMiniGameAPI.destroyAppBlockAd"),
              t.mAppBlockAd_csryw.offResize(t.appBlockADResize_csryw), t.mAppBlockAd_csryw.offError(t.appBlockADError_csryw),
              t.mAppBlockAd_csryw.hide(), t.mAppBlockAd_csryw.destroy(), t.mAppBlockAd_csryw = null);
          }, t.AppBlockStyle_csryw = {
            left: 120,
            top: 200
          }, t.AppBlockSize_csryw = 5, t.AppBlockOrientation_csryw = "landscape", t._isRegRewardedVideoAdEvent_csryw = !1,
          t._onRewardedVideoAdFailed_csryw = null, t._onRewardedVideoAdClose_csryw = null,
          t._onShow_csryw = null, t._lastShareTime_csryw = 0, t.mAppboxAd_csryw = null, t.onBoxAdClose_csryw = null,
          t.mAppBlockAd_csryw = null, t.screenWidth_csryw = NaN, t.isAppBlockAdLoading_csryw = !1,
          t.supportSDKVersion_csryw = "1.15.0", t;
      }();
    n.default = c, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppConfig": "AppConfig",
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../FrameWork/Util/AppPlatform": "AppPlatform"
  }],
  RYAD: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "03b26de3y9CwKBkYtLxD4rO", "RYAD"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("./RYSDK"),
      r = function () {
        function t() {}
        return t.prototype.getAD_csryw = function (e, n, r) {
          r = null == r || r;
          var i = {
            adv_key: e,
            success: function (e) {
              if (console.log("获取到广告数据 RYAD:", e), 200 == e.code) {
                var o = e.result.list;
                null == o && console.error("获取到广告数据  为NULL"), 1 == r && t.sortDatas_csryw(o), n(o);
              } else console.error("获取到广告数据  为NULL"), n(null);
            },
            fail: function (t) {
              n(null);
            },
            complete: function (t) {}
          };
          null != o.default.Instance_csryw.rysdk_csryw ? o.default.Instance_csryw.rysdk_csryw.ry_GetAdv(i) : n(null);
        }, t.sortDatas_csryw = function (t) {
          if (null == t || 0 == t.length) return [];
          for (var e = {}, n = new Array(), o = 0; o < t.length; ++o) {
            null == e[(l = t[o]).appid] ? (e[l.appid] = new Array(), e[l.appid].push(l), n.push(l.appid)) : e[l.appid].push(l);
          }
          for (o = 0; o < n.length; ++o) {
            var r = n[o],
              i = n[a = Math.floor(Math.random() * n.length)];
            n[a] = r, n[o] = i;
          }
          for (o = 0; o < n.length; ++o)
            for (var s = e[r = n[o]], c = 0; c < s.length; ++c) {
              var a, l = s[c];
              i = s[a = Math.floor(Math.random() * s.length)];
              s[a] = l, s[c] = i;
            }
          for (var u = new Array(); n.length > 0;)
            if (1 == n.length) {
              var d = !1;
              for (s = e[r = n[0]], o = 0; o < u.length; ++o) {
                var p = u[o],
                  y = u[o + 1];
                if (null != y) {
                  if (p.appid != r && y.appid != r) {
                    if (null != (l = s.shift())) {
                      var h = u.slice(0, o + 1),
                        _ = u.slice(o + 1, u.length);
                      (u = h).push(l);
                      for (var f = 0; f < _.length; ++f) u.push(_[f]);
                    }
                    d = !0;
                    break;
                  }
                } else if (p.appid != r) {
                  if (null != (l = s.shift())) {
                    h = u.slice(0, o + 1), _ = u.slice(o + 1, u.length);
                    (u = h).push(l);
                    for (f = 0; f < _.length; ++f) u.push(_[f]);
                  }
                  d = !0;
                  break;
                }
              }
              (!d || s.length <= 0) && n.splice(0, 1);
            } else
              for (o = 0; o < n.length; ++o) {
                l = (s = e[r = n[o]]).shift();
                u.push(l), s.length <= 0 && (n.splice(o, 1), --o);
              }
          return u;
        }, t;
      }();
    n.default = r, cc._RF.pop();
  }, {
    "./RYSDK": "RYSDK"
  }],
  RYGameBase: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "f35038iuE1E5ruGdPL3ZCdg", "RYGameBase");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = t("./RYGameEventMgr"),
      i = t("../FrameWork/Event/EventMgr"),
      s = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.isRegisterGameEvent_csryw = !1, e.isRegisterSystemEvent_csryw = !1, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {}, e.prototype.onListenerEventView_csryw = function (e) {
          t.prototype.onListenerEventView_csryw.call(this, e);
        }, e.prototype.emitListenerEvent_csryw = function (e, n, o) {
          t.prototype.emitListenerEvent_csryw.call(this, e, n, o);
        }, e.prototype.addGameEvent_csryw = function (t, e, n) {
          this.isRegisterGameEvent_csryw = !0, r.RYGameEventMgr.__onGameEvent_csryw(t, e, n);
        }, e.prototype.sendGameEvent_csryw = function (t, e, n, o, i, s) {
          r.RYGameEventMgr.emitGameEvent_csryw(t, e, n, o, i, s);
        }, e.prototype.addSystemEvent_csryw = function (t, e, n) {
          this.isRegisterSystemEvent_csryw = !0, i.default.onEvent_csryw(t, e, n);
        }, e.prototype.onDestroy = function () {
          this.isRegisterGameEvent_csryw && (r.RYGameEventMgr.__offGameTargetEvent_csryw(this),
            this.isRegisterGameEvent_csryw = !1), this.isRegisterSystemEvent_csryw && (i.default.offTargetEvent_csryw(this),
            this.isRegisterSystemEvent_csryw = !1), t.prototype.onDestroy.call(this);
        }, e;
      }(t("../FrameWork/Base/FMComponentExtend").default);
    n.default = s, cc._RF.pop();
  }, {
    "../FrameWork/Base/FMComponentExtend": "FMComponentExtend",
    "../FrameWork/Event/EventMgr": "EventMgr",
    "./RYGameEventMgr": "RYGameEventMgr"
  }],
  RYGameEventMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "eb8d2MZCSZFobtXgootJcga", "RYGameEventMgr"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.RYGameEventMgr = n.RYGameEventEnum = void 0,
      function (t) {
        t[t.UpdateUserInfo_csryw = 0] = "UpdateUserInfo_csryw";
      }(n.RYGameEventEnum || (n.RYGameEventEnum = {}));
    var o = function () {
      function t() {}
      return t.emitGameEvent_csryw = function (t, e, n, o, r, i) {
        LogUtils.info_csryw("广播游戏事件：" + t), this.eventTarget_csryw.emit(t + "", e, n, o, r, i);
      }, t.__onGameEvent_csryw = function (t, e, n) {
        this.eventTarget_csryw.on(t + "", e, n);
      }, t.__offGameEvent_csryw = function (t, e, n) {
        this.eventTarget_csryw.off(t + "", e, n);
      }, t.__offGameTargetEvent_csryw = function (t) {
        this.eventTarget_csryw.targetOff(t);
      }, t.eventTarget_csryw = new cc.EventTarget(), t;
    }();
    n.RYGameEventMgr = o, cc._RF.pop();
  }, {}],
  RYPlatformMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "a0d33tVObpCvoiBV5k15So1", "RYPlatformMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../Config/AppConfig"),
      r = t("../RYSDK/RYSDK"),
      i = t("../NetWork/HttpUnit"),
      s = t("../RYSDK/RYAD"),
      c = function () {
        function t() {}
        return t.sendClickAd_csryw = function (t) {
            o.default.UseRYSDK_csryw && (LogUtils.info_csryw("运营上报：点击广告" + t), r.default.Instance_csryw.STAT_csryw.reportClickAd_csryw(t));
          }, t.sendClickAdAllow_csryw = function (t) {
            o.default.UseRYSDK_csryw && (LogUtils.info_csryw("运营上报：点击广告成功 " + t), r.default.Instance_csryw.STAT_csryw.reportClickAdAllow_csryw(t));
          }, t.getAD_csryw = function (t, e, n) {
            return !!o.default.UseRYSDK_csryw && (r.default.Instance_csryw.AD_csryw.getAD_csryw(t, e, n),
              !0);
          }, t.getADList_csryw = function (t, e, n) {
            this.getRYWADVData_csryw(t, function (t) {
              if (t.result && t.result.list) {
                var o = t.result.list;
                1 == n && s.default.sortDatas_csryw(o), e(o);
              } else LogUtils.networkError_csryw("获取到广告数据  为NULL"), e(null);
            }, function () {
              LogUtils.networkError_csryw("获取到广告数据  为NULL"), e(null);
            });
          }, t.getRYWADVData_csryw = function (t, e, n) {
            var o = Date.now(),
              r = new i.requestData();
            r.url_csryw = this.urlRYWAdv_csryw, r.data_csryw.timelog = o, r.data_csryw.key = t,
              r.onSuccess_csryw = e, r.onFail_csryw = n;
            for (var s, c = r.onFail_csryw, a = {
                "Content-Type": "application/x-www-form-urlencoded",
                au: "renyou"
              }, l = "", u = 0, d = Object.keys(r.data_csryw); u < d.length; u++) {
              var p = d[u];
              l += p + "=" + r.data_csryw[p] + "&";
            }
            s = l, i.default.sendHttpUrl_csryw(r, s, function (t) {
              LogUtils.networkLog_csryw(t, "http Success"), r.onSuccess_csryw && r.onSuccess_csryw(t),
                r.onSuccess_csryw = null, r = null;
            }, function (t) {
              LogUtils.networkLog_csryw(t, "http fail"), c && c(t), r && (r.onFail_csryw = null),
                c = null, r = null;
            }, a);
          }, t.urlRYWAdv_csryw = "https://javasttts.renyouwangluo.cn/api/data/product/2result",
          t;
      }();
    n.default = c, cc._RF.pop();
  }, {
    "../Config/AppConfig": "AppConfig",
    "../NetWork/HttpUnit": "HttpUnit",
    "../RYSDK/RYAD": "RYAD",
    "../RYSDK/RYSDK": "RYSDK"
  }],
  RYSDK: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "96027gZ9+1CLIR6i5jgelrB", "RYSDK"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("./RYAD"),
      r = t("./RYSTAT"),
      i = function () {
        function t() {
          this._ad_csryw = null, this._stat_csryw = null, this._rysdk_csryw = null;
        }
        return Object.defineProperty(t, "Instance_csryw", {
          get: function () {
            return null == t._instance_csryw && console.error("请先调用 RYSDK.init() 对RYSDK进行初始化！！！！！！"),
              t._instance_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), t.init_csryw = function (e) {
          if (null == t._instance_csryw) {
            console.log("初始化 RYSDK ！！！！！！");
            var n = new t();
            n._ad_csryw = new o.default(), n._stat_csryw = new r.default(), t._instance_csryw = n,
              null != window.rysdk && (window.rysdk.ry_init(), t._instance_csryw._rysdk_csryw = window.rysdk,
                t.Instance_csryw.STAT_csryw.reportInit_csryw(), t.Instance_csryw.STAT_csryw.reportLogin_csryw());
          } else console.error("请不要重复初始化 RYSDK ！！！！！！");
        }, Object.defineProperty(t.prototype, "AD_csryw", {
          get: function () {
            return this._ad_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "STAT_csryw", {
          get: function () {
            return this._stat_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "rysdk_csryw", {
          get: function () {
            return this._rysdk_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), t._instance_csryw = null, t;
      }();
    n.default = i, cc._RF.pop();
  }, {
    "./RYAD": "RYAD",
    "./RYSTAT": "RYSTAT"
  }],
  RYSTAT: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "236c6WMFXJLnZZDWycGws3k", "RYSTAT"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.RYSTAT_Event = void 0;
    var o, r = t("./RYSDK"),
      i = t("../Mgr/TimerUtils");
    (function (t) {
      t.RYSTAT_E_INIT_csryw = "init", t.RYSTAT_E_LOGIN_csryw = "login", t.RYSTAT_E_ENTRY_SOURCE_csryw = "entrysource",
        t.RYSTAT_E_CLICK_AD_csryw = "clickad", t.RYSTAT_E_CLICK_ALLOW_csryw = "clickad";
    })(o = n.RYSTAT_Event || (n.RYSTAT_Event = {}));
    var s = function () {
      function t() {}
      return t.prototype.SendEvent_csryw = function (t, e, n, o) {
        null != r.default.Instance_csryw.rysdk_csryw && null != r.default.Instance_csryw.rysdk_csryw.ry_SendEvent && r.default.Instance_csryw.rysdk_csryw.ry_SendEvent(t, e, null, n, o);
      }, t.prototype.reportInitFail_csryw = function () {
        null != r.default.Instance_csryw.rysdk_csryw && null != r.default.Instance_csryw.rysdk_csryw.ry_ReportFail && r.default.Instance_csryw.rysdk_csryw.ry_ReportFail();
      }, t.prototype.reportInit_csryw = function () {
        var t = this,
          e = 0,
          n = function () {
            console.log("init 上报成功!!");
          },
          r = function () {
            console.log("init 上报失败!!"), e >= 10 ? (console.log("init 上报重试次数超过 10次，放弃上报"), t.reportInitFail_csryw()) : (++e,
              i.TimerUtils.once_csryw(function () {
                t.SendEvent_csryw(o.RYSTAT_E_INIT_csryw, null, n, r), console.log("init 第 " + e + " 次重新上报");
              }, 5));
          };
        this.SendEvent_csryw(o.RYSTAT_E_INIT_csryw, null, n, r);
      }, t.prototype.reportLogin_csryw = function () {
        this.SendEvent_csryw(o.RYSTAT_E_LOGIN_csryw);
      }, t.prototype.reportEntrySource_csryw = function () {
        this.SendEvent_csryw(o.RYSTAT_E_ENTRY_SOURCE_csryw);
      }, t.prototype.reportClickAd_csryw = function (t) {
        this.SendEvent_csryw(o.RYSTAT_E_CLICK_AD_csryw, {
          adv_id: t,
          timelog: Date.now(),
          type: 0
        });
      }, t.prototype.reportClickAdAllow_csryw = function (t) {
        this.SendEvent_csryw(o.RYSTAT_E_CLICK_ALLOW_csryw, {
          adv_id: t,
          timelog: Date.now(),
          type: 1
        });
      }, t;
    }();
    n.default = s, cc._RF.pop();
  }, {
    "../Mgr/TimerUtils": "TimerUtils",
    "./RYSDK": "RYSDK"
  }],
  RankingView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "2cc1eND+atJGLkHPYP6IXyv", "RankingView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.PageType = void 0;
    var i, s = t("../../../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../../../FrameWork/Mgr/WudianMgr"),
      a = t("../../../../../FrameWork/Util/AppPlatform"),
      l = t("../../../../../FrameWork/Util/Utilit"),
      u = t("../../../../../FrameWork/View/ADListView"),
      d = t("../../../BannerMgr"),
      p = t("../../../BannerPos"),
      y = t("../wxViewBase");
    (function (t) {
      t[t.otherToRanking = 0] = "otherToRanking", t[t.resultToRanking = 1] = "resultToRanking";
    })(i = n.PageType || (n.PageType = {}));
    var h = cc._decorator,
      _ = h.ccclass,
      f = h.property,
      w = h.disallowMultiple,
      g = h.menu,
      m = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.singleADs = null, e.closeLabel = null, e.closeBtn = null, e.backBtn = null,
            e.adListView = null, e._isCanClose_csryw = !1, e._isCloseClicked_csryw = !1, e.EventEnumView_csryw = {
              Close_csryw: "Close",
              ToHotPlay: "ToHotPlay",
              Export: "Export"
            }, e.pageType = i.resultToRanking, e;
        }
        return o(e, t), e.prototype.setP_csryw = function (t) {
          console.log("Rank" + JSON.stringify(t)), this.adListView.getComponent(u.default).setParam_csryw(t);
        }, e.prototype.initView_csryw = function () {
          var e = this;
          t.prototype.initView_csryw.call(this), this.closeBtn.on("click", this.onClose, this),
            this.backBtn.on("click", this.onBack, this), this.scheduleOnce(function () {
              e.closeBtn.active = !0;
            }, s.default.getInstance_csryw().getAppSwitchData_csryw().continueBtnDelayTime_csryw);
        }, e.prototype.onClose = function () {
          var t = this;
          switch (this.pageType) {
            case i.otherToRanking:
              console.log("随机弹出广告"), this.adListView.randClick();
              break;

            case i.resultToRanking:
              var e = this;
              if (!this._isCloseClicked_csryw && c.default.wudianFlag_csryw && l.default.checkVersions_csryw() && 1 == s.default.getInstance_csryw().getAppSwitchData_csryw().continueBanner_csryw ? (this._isCloseClicked_csryw = !0,
                  this.scheduleOnce(function () {
                    e.showBanner_csryw(), t.scheduleOnce(function () {
                      e._isCanClose_csryw = !0, e.hideBanner_csryw();
                    }, s.default.getInstance_csryw().getAppSwitchData_csryw().continueBannerHideTime_csryw);
                  }, s.default.getInstance_csryw().getAppSwitchData_csryw().continueBannerShowTime_csryw)) : this._isCanClose_csryw = !0,
                !this._isCanClose_csryw) return;
              this.emitListenerEvent_csryw(this.EventEnumView_csryw.Export), this.unscheduleAllCallbacks();
          }
        }, e.prototype.onBack = function () {
          switch (this.pageType) {
            case i.otherToRanking:
              this.emitListenerEvent_csryw(this.EventEnumView_csryw.Close_csryw), console.log("关闭当前页面");
              break;

            case i.resultToRanking:
              console.log("不关闭,打开热玩"), this.emitListenerEvent_csryw(this.EventEnumView_csryw.ToHotPlay);
          }
        }, e.prototype.setPageType = function (t) {
          switch (this.pageType = t, t) {
            case i.otherToRanking:
              this.closeLabel.string = "试玩一下";
              break;

            case i.resultToRanking:
              this.closeLabel.string = "继续游戏", s.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.mainBackBtn_csryw > 0 ? this.backBtn.active = !0 : this.backBtn.active = !1;
          }
        }, e.prototype.showBanner_csryw = function () {
          a.default.is_WECHAT_GAME_csryw() && d.default.showBanner_csryw(p.BannerPos.Right_Bottom, 0, -30);
        }, r([f({
          tooltip: "单个广告组合",
          type: cc.Node
        })], e.prototype, "singleADs", void 0), r([f({
          tooltip: "关闭按钮名称",
          type: cc.Label
        })], e.prototype, "closeLabel", void 0), r([f({
          tooltip: "关闭按钮",
          type: cc.Node
        })], e.prototype, "closeBtn", void 0), r([f({
          tooltip: "返回按钮",
          type: cc.Node
        })], e.prototype, "backBtn", void 0), r([f({
          tooltip: "ADListView",
          type: u.default
        })], e.prototype, "adListView", void 0), e = r([_, w(), g("框架组件/排行榜")], e);
      }(y.default);
    n.default = m, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../../../../../FrameWork/Util/Utilit": "Utilit",
    "../../../../../FrameWork/View/ADListView": "ADListView",
    "../../../BannerMgr": "BannerMgr",
    "../../../BannerPos": "BannerPos",
    "../wxViewBase": "wxViewBase"
  }],
  RemoteMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "fb8ednCAwpACpPZDcMTgAI6", "RemoteMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.removeAllRemote_csryw = function () {
        for (var t in this.remoteArrayTexture_csryw) this.remoteArrayTexture_csryw[t].decRef();
        this.remoteArrayTexture_csryw = {};
      }, t.loadRemote_csryw = function (t, e) {
        var n = this;
        this.remoteArrayTexture_csryw[t] ? callFM_csryw(e, null, this.remoteArrayTexture_csryw[t]) : cc.assetManager.loadRemote(t, function (o, r) {
          o ? callFM_csryw(e, o, null) : (n.remoteArrayTexture_csryw[t] || (n.remoteArrayTexture_csryw[t] = r,
            n.remoteArrayTexture_csryw[t].addRef()), callFM_csryw(e, null, n.remoteArrayTexture_csryw[t]));
        });
      }, t.remoteArrayTexture_csryw = {}, t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  ResCenter: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "8ea22gI7D1Gvp2qSLPAvZwO", "ResCenter"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../core/CustomUser"),
      r = t("../UI/Component/TipDialog"),
      i = t("../UI/Lobby/DinosaurJigsaw"),
      s = t("../UI/Lobby/SettleView"),
      c = function () {
        function t() {}
        return t.createSettleView = function (e, n) {
          t.loadPrefabsInBundle(2, "prefab/settleView", function (t) {
            var o = cc.instantiate(t);
            o.getComponent(s.default).init(e), n || (n = cc.director.getScene()), n.addChild(o);
          }, this);
        }, t.createTipDialog = function (e, n) {
          cc.director.getScene().getChildByName("TipDialog") || t.loadPrefabsInMainBundle("prefab/tipDialog", function (t) {
            var o = cc.instantiate(t);
            o.getComponent(r.default).init(e), n || (n = cc.director.getScene()), n.addChild(o, null, "TipDialog");
          }, this);
        }, t.createTreasureBox = function (t, e) {}, t.createCrazyView = function (e, n) {
          t.loadPrefabsInMainBundle("prefab/crazyview", function (t) {
            var e = cc.instantiate(t);
            n || (n = cc.director.getScene()), n.addChild(e);
          }, this);
        }, t.createInstallDinosaur = function (e, n, o, r) {
          t.loadPrefabsInMainBundle("prefab/install_" + e.id + "/installDinosaur", function (t) {
            var s = cc.instantiate(t);
            s.getComponent(i.default).init(e), n || (n = cc.director.getScene()), n.addChild(s),
              o && o.call(r);
          }, this);
        }, t.loadSpriteFrameFromBundle = function (t, e, n) {
          console.log("loadSpriteFrameFromBundle  url = ", t), this.loadBundleSpriteFrame(this.subBundles[0], t, e, n);
        }, t.loadPrefabsInMainBundle = function (t, e, n) {
          this.loadBundle(this.subBundles[0], t, e, n);
        }, t.loadSpriteFrame = function (t, e, n) {
          this.loadRes(t, e, n, cc.SpriteFrame);
        }, t.loadPrefabsInBundle = function (t, e, n, o) {
          this.loadBundle(this.subBundles[t], e, n, o);
        }, t.loadRes = function (t, e, n, o) {
          o ? cc.resources.load(t, o, function (t, o) {
            t ? cc.log("err", t) : e && e.call(n, o);
          }) : cc.resources.load(t, function (t, o) {
            t ? cc.log("err", t) : e && e.call(n, o);
          });
        }, t.loadBundleSpriteFrame = function (t, e, n, o) {
          this.loadBundle(t, e, n, o, cc.SpriteFrame);
        }, t.loadBundle = function (t, e, n, o, r) {
          var i = cc.assetManager.getBundle(t);
          console.log("loadBundle   bundleName= ", t), i ? i.load(e, r, function (t, e) {
            t ? cc.log("errr", t) : n && n.call(o, e);
          }) : cc.assetManager.loadBundle(t, function (t, i) {
            i ? i.load(e, r, function (t, e) {
              t ? cc.log("errr", t) : n && n.call(o, e);
            }) : cc.log("err", t);
          });
        }, t.preloadBundles = function (t, e) {
          var n = this;
          if (void 0 === e && (e = 0), !(e >= t.length)) return cc.assetManager.getBundle(t[e]) ? (e++,
            void this.preloadBundles(t, e)) : void cc.assetManager.loadBundle(t[e], function (r, i) {
            i && (o.default.bundles[e] = i, e++), n.preloadBundles(t, e);
          });
          o.default.bInitSubRes = !0;
        }, t.subBundles = ["subResMain", "subRes", "subResGame"], t;
      }();
    n.default = c, cc._RF.pop();
  }, {
    "../UI/Component/TipDialog": "TipDialog",
    "../UI/Lobby/DinosaurJigsaw": "DinosaurJigsaw",
    "../UI/Lobby/SettleView": "SettleView",
    "../core/CustomUser": "CustomUser"
  }],
  ResultView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "4e86amkActLOIEvO6asMGV9", "ResultView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/Mgr/GameMgr"),
      s = t("../../../../CustimWxApi"),
      c = t("../../../WXAPI"),
      a = t("../wxViewBase"),
      l = cc._decorator,
      u = l.ccclass,
      d = l.property,
      p = l.disallowMultiple,
      y = l.menu,
      h = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.winIcon = null, e.failIcon = null, e.continueBtn = null, e.isWin_csryw = !1,
            e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
          t.prototype.initView_csryw.call(this), this.continueBtn.on("click", this.onContinueBtn_csryw, this),
            c.default.showInterstitialAd_csryw(function () {}, function () {}), s.default.showCustimAd(s.CustimWxTag.EnumCustimMainBefore1),
            s.default.showCustimAd(s.CustimWxTag.EnumCustimMainBefore2);
        }, e.prototype.onContinueBtn_csryw = function () {
          s.default.hideCustimAd(s.CustimWxTag.EnumCustimMainBefore1), s.default.hideCustimAd(s.CustimWxTag.EnumCustimMainBefore2),
            this.hideView_csryw(), i.default.getInstance_csryw().onLoadToWorldScene_csryw();
        }, e.prototype.updateOpenViewData_csryw = function (t, e) {
          this._initView_csryw(), this.isWin_csryw = t, this.winData_csryw = e, t ? (this.winIcon.active = !0,
            this.failIcon.active = !1) : (this.winIcon.active = !1, this.failIcon.active = !0);
        }, r([d({
          tooltip: "胜利Icon",
          type: cc.Node
        })], e.prototype, "winIcon", void 0), r([d({
          tooltip: "失败Icon",
          type: cc.Node
        })], e.prototype, "failIcon", void 0), r([d({
          tooltip: "继续按钮",
          type: cc.Node
        })], e.prototype, "continueBtn", void 0), e = r([u, p(), y("框架组件/结算页面")], e);
      }(a.default);
    n.default = h, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../CustimWxApi": "CustimWxApi",
    "../../../WXAPI": "WXAPI",
    "../wxViewBase": "wxViewBase"
  }],
  RoleScrollView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "0a028wmD4BNH5XJnYUm0eYR", "RoleScrollView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../core/CustomUser"),
      s = t("./DinosaurMask"),
      c = t("../Component/ExScrollView"),
      a = cc._decorator,
      l = a.ccclass,
      u = (a.property,
        function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.selColor = cc.color(200, 200, 200, 255), e;
          }
          return o(e, t), e.prototype.updateUnlockState = function (t, e) {
            (e = e || this.curSelectItem) && (t.isEmpty ? (e.getChildByName("lock").active = !0,
              e.getChildByName("mask").active = !1, e.getChildByName("itemSelect").active = !1,
              e.getChildByName("itemTip").active = !1) : (e.getChildByName("mask").active = !0,
              e.getChildByName("lock").active = !1, 1 == t.isUnlocked() && 0 == t.isBuy() ? e.getChildByName("itemTip").active = !0 : e.getChildByName("itemTip").active = !1));
          }, e.prototype.itemInitCall = function (t, e, n) {
            (this.updateUnlockState(e, t), e.isEmpty) ? this._initUnlockedHero(t, this.emptyNum - this.totalNum + n + 1): (i.default.getDinosaurId() == e.id ? (this.lastItem = t,
                this.curSelectItem = t, this.curData = e, this.selItem(t, !0), this.itemCall && this.itemCall.call(this.caller, e)) : t.getChildByName("itemSelect").active = !1,
              t.getChildByName("mask").getComponent(s.default).initDinosaurId(e.id), t.on(cc.Node.EventType.TOUCH_END, this._onClickItem, this));
          }, e.prototype._initUnlockedHero = function (t, e) {}, e.prototype._onClickItem = function (e) {
            var n = e.currentTarget,
              o = this.datas[n.zIndex];
            o.isEmpty || (t.prototype._onClickItem.call(this, e), this.lastItem != n && (this.selItem(n),
              this.lastItem && this.unselItem(this.lastItem, this.datas[this.lastItem.zIndex]),
              this.itemCall && this.itemCall.call(this.caller, o), this.lastItem = n));
          }, e.prototype.selItem = function (t, e) {
            void 0 === e && (e = !1), t.getChildByName("itemSelect").active = !0;
          }, e.prototype.unselItem = function (t, e) {
            t.getChildByName("itemSelect").active = !1;
          }, e = r([l], e);
        }(c.default));
    n.default = u, cc._RF.pop();
  }, {
    "../../core/CustomUser": "CustomUser",
    "../Component/ExScrollView": "ExScrollView",
    "./DinosaurMask": "DinosaurMask"
  }],
  RoleSelectView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "34e09M4oBdKSYe+H0i7Oalh", "RoleSelectView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../FrameWork/Event/EventEnum"),
      c = t("../../../../FrameWork/Event/EventMgr"),
      a = t("../../../../FrameWork/Mgr/GameMgr"),
      l = t("../../../../FrameWork/Mgr/UmengMgr"),
      u = t("../../../../FrameWork/Mgr/WudianMgr"),
      d = t("../../../../FrameWork/User/User"),
      p = t("../../../../FrameWork/Util/Utilit"),
      y = t("../../../../Platform/weixin/newFrame/src/event/ADPageEventEnum"),
      h = t("../../../../Platform/weixin/newFrame/src/event/ADPageEventMgr"),
      _ = t("../../../../Platform/weixin/WXAPI"),
      f = t("../../config/DinosaurConfig"),
      w = t("../../config/GlobalConfig"),
      g = t("../../core/CustomUser"),
      m = t("../../core/DinosaurProperty"),
      v = t("../../utils/ResCenter"),
      A = t("../../utils/SoundsManager"),
      b = t("../Component/Progress"),
      S = t("./DinosaurMask"),
      C = t("./LobbyDinosaurSpine"),
      I = t("./RoleScrollView"),
      E = cc._decorator,
      k = E.ccclass,
      T = E.property,
      M = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.roleScrollView = null, e.progressHp = null, e.progressAtk = null, e.rtAtkIncrease = null,
            e.rtHpIncrease = null, e.curDinosaurMask = null, e.installNode = null, e.dinosaurSpineNode = null,
            e.emptyRolesNum = 0, e.dinosaurProperty = null, e.lblAtkGold = null, e.lblHpGold = null,
            e.iconAtkVideo = null, e.iconHpVideo = null, e.lblGold = null, e.zuzhuangNode = null,
            e.chuzhanNode = null, e.qidaiNode = null, e.goumaiNode = null, e.jiesuoNode = null,
            e.goumaiLabel = null, e.jiesuoLabel = null, e.yizuzhuangNode = null, e.yijiesuoNode = null,
            e.weijiesuoNode = null, e.yindao = null, e.curDinosaurData = null, e.curDinosaurSpineContor = null,
            e;
        }
        var n;
        return o(e, t), n = e, e.prototype.start = function () {}, e.prototype.onEnable = function () {
            this.OpenView(), this.rtAtkIncrease.string = w.default.getInstance().getData().atkIncrease + "%",
              this.rtHpIncrease.string = w.default.getInstance().getData().hpIncrease + "%", this._initRoleList(),
              this._goldUpdate(), A.default.playMusic("bgmBfBattle"), c.default.onEvent_csryw(s.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, this._goldUpdate, this),
              c.default.onEvent_csryw(s.ryw_Event.ryw_Lobby_DinosaurLookVideo_csryw, this._initRoleList, this),
              c.default.onEvent_csryw(s.ryw_Event.ryw_Lobby_DinosaurUnlock_csryw, this._unlockEnd, this),
              c.default.onEvent_csryw(s.ryw_Event.ryw_Lobby_DinosaurBuy_csryw, this._buyEnd, this),
              c.default.onEvent_csryw(s.ryw_Event.ryw_Lobby_DinosaurInstallEnd_csryw, this._installEnd, this),
              h.default.emitEvent_csryw(y.PageEvent.SHOW_MAIN);
          }, e.prototype.onDisable = function () {
            this.roleScrollView.deinit(), c.default.offTargetEvent_csryw(this);
          }, e.prototype._unlockEnd = function () {
            var t = this;
            this.updateRightUI(this.curDinosaurData), this.updateDinosaurCenter(this.curDinosaurData),
              this.yijiesuoNode.active = !0, cc.tween(this.yijiesuoNode).to(1, {
                scaleX: 2,
                scaleY: 2,
                opacity: 0
              }).call(function () {
                t.yijiesuoNode.active = !1, t.yijiesuoNode.opacity = 255;
              }).start();
          }, e.prototype._buyEnd = function () {
            this._initRoleList();
          }, e.prototype._installEnd = function () {
            var t = this;
            this.curDinosaurData.install(), this.updateRightUI(this.curDinosaurData), this.updateDinosaurCenter(this.curDinosaurData),
              this.yizuzhuangNode.active = !0, cc.tween(this.yizuzhuangNode).to(1, {
                scaleX: 2,
                scaleY: 2,
                opacity: 0
              }).call(function () {
                t.yizuzhuangNode.active = !1, t.yizuzhuangNode.opacity = 255;
              }).start(), 1 == this.curDinosaurData.id || 2 == this.curDinosaurData.id || (this.chuzhanNode.scaleX = 2,
                this.chuzhanNode.scaleY = 2, this.chuzhanNode.opacity = 0, this.chuzhanNode.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, .9), cc.fadeTo(.3, 200)), cc.spawn(cc.scaleTo(.1, 1.1), cc.fadeTo(.1, 230)), cc.spawn(cc.scaleTo(.05, 1), cc.fadeTo(.05, 255)), cc.callFunc(function () {
                  t.chuzhanNode.scaleX = 1, t.chuzhanNode.scaleY = 1, t.chuzhanNode.opacity = 255;
                })))), this.curDinosaurSpineContor.onInstallSuccess(), a.default.getInstance_csryw().saveGameData_csryw();
          }, e.prototype._initRoleList = function () {
            for (var t = [], e = 0; e < f.default.getInstance().getDataLength(); e++) {
              var n = f.default.getInstance().getDatas()[e];
              (o = new m.DinosaurProperty()).initData(n.Id), t.push(o);
            }
            for (e = 0; e < t.length; e++) {
              var o;
              (o = t[e]).id == g.default.getDinosaurId() && 0 == o.isUnlocked() && g.default.setDinosaurId(5);
            }
            t = t.sort(function (t, e) {
              return t.sortId < e.sortId ? -1 : 1;
            });
            for (e = 0; e < this.emptyRolesNum; e++) t.push({
              isEmpty: !0
            });
            this.roleScrollView.init(t, this._onClickItem, this, this.emptyRolesNum);
          }, e.prototype.onClickUpgradeAttack = function () {
            var t = this;
            if (this.curDinosaurData)
              if (0 != this.curDinosaurData.isBuy())
                if (0 != this.curDinosaurData.isInstall()) {
                  var e = w.default.getInstance().getData();
                  this.curDinosaurData.dinosaurData.lvAtk >= e.maxAtkLevel || (d.default.getMoney_csryw() < e.atkUpgradeGold ? _.default.showRewardedVideoAd_csryw(function (n) {
                    if (n) {
                      if (t.curDinosaurData.dinosaurData.lvAtk >= e.maxAtkLevel) return;
                      t.curDinosaurData.addLvAtk(), t.upateDinosaurBaseDataUI(t.curDinosaurData), a.default.getInstance_csryw().saveGameData_csryw(),
                        t.upgrade(), l.UmengMgr.sendEvent_csryw(l.StatsFrameWorkEvent.Total_videoNumber, {
                          info: l.LookVideoType.addAtk
                        });
                    }
                  }, function () {
                    v.default.createTipDialog();
                  }) : (d.default.subMoney_csryw(e.atkUpgradeGold), this.curDinosaurData.addLvAtk(),
                    this.upateDinosaurBaseDataUI(this.curDinosaurData), a.default.getInstance_csryw().saveGameData_csryw(),
                    this.upgrade()));
                } else v.default.createTipDialog("未组装");
            else v.default.createTipDialog("未购买");
          }, e.prototype.onClickUpgradeHp = function () {
            var t = this;
            if (this.curDinosaurData)
              if (0 != this.curDinosaurData.isBuy())
                if (0 != this.curDinosaurData.isInstall()) {
                  var e = w.default.getInstance().getData();
                  this.curDinosaurData.dinosaurData.lvHp >= e.maxHpLevel || (d.default.getMoney_csryw() < e.hpUpgradeGold ? _.default.showRewardedVideoAd_csryw(function (n) {
                    if (n) {
                      if (t.curDinosaurData.dinosaurData.lvHp >= e.maxHpLevel) return;
                      t.curDinosaurData.addLvHp(), t.upateDinosaurBaseDataUI(t.curDinosaurData), a.default.getInstance_csryw().saveGameData_csryw(),
                        t.upgrade(), l.UmengMgr.sendEvent_csryw(l.StatsFrameWorkEvent.Total_videoNumber, {
                          info: l.LookVideoType.addHp
                        });
                    }
                  }, function () {
                    v.default.createTipDialog();
                  }) : (d.default.subMoney_csryw(e.hpUpgradeGold), this.curDinosaurData.addLvHp(),
                    this.upateDinosaurBaseDataUI(this.curDinosaurData), a.default.getInstance_csryw().saveGameData_csryw(),
                    this.upgrade()));
                } else v.default.createTipDialog("未组装");
            else v.default.createTipDialog("未购买");
          }, e.prototype._onClickItem = function (t) {
            this.curDinosaurData = t, this.upateDinosaurBaseDataUI(t), g.default.setDinosaurId(t.id),
              this.curDinosaurMask.initDinosaurId(t.id), this.updateRightUI(t), this.updateDinosaurCenter(t),
              this.preloadDinosaurSpineRes(t);
          }, e.prototype.updateRightUI = function (t) {
            t.isUnlocked() ? (console.log("updateRightUI   已解锁 "), this.weijiesuoNode.active = !1,
              this.jiesuoNode.active = !1, t.isBuy() ? (console.log("updateRightUI   已购买 "), this.goumaiNode.active = !1,
                this.zuzhuangNode.active = !0, t.isInstall() ? (console.log("updateRightUI   已组装 "),
                  this.qidaiNode.active = !1, this.chuzhanNode.active = !0, g.default.getXSYD_ChuZhan() ? this.yindao.node.active = !1 : (this.yindao.node.active = !0,
                    this.yindao.node.y = this.chuzhanNode.y - 20, this.yindao.setAnimation(0, "play", !0)),
                  this.zuzhuangNode.getChildByName("sy_22").active = !1, this.zuzhuangNode.getChildByName("gg_3").active = !0) : (console.log("updateRightUI   未组装 "),
                  this.chuzhanNode.active = !1, this.qidaiNode.active = !1, this.zuzhuangNode.getChildByName("sy_22").active = !0,
                  this.zuzhuangNode.getChildByName("gg_3").active = !1, g.default.getXSYD_ZuZhuang() ? this.yindao.node.active = !1 : (this.yindao.node.active = !0,
                    this.yindao.node.y = this.zuzhuangNode.y - 20, this.yindao.setAnimation(0, "play", !0)))) : (console.log("updateRightUI   未购买 "),
                this.yindao.node.active = !1, this.zuzhuangNode.active = !1, this.chuzhanNode.active = !1,
                this.qidaiNode.active = !1, this.goumaiNode.active = !0, this.goumaiLabel.string = "" + t.unlockGoldNum)) : (console.log("updateRightUI   未解锁 "),
              this.weijiesuoNode.active = !0, this.zuzhuangNode.active = !1, this.chuzhanNode.active = !1,
              this.qidaiNode.active = !1, this.goumaiNode.active = !1, this.jiesuoNode.active = !0,
              this.jiesuoLabel.string = "(" + t.dinosaurData.videoTime + "/" + t.unlockVideoTime + ")");
          }, e.prototype.updateDinosaurCenter = function (t) {
            null != t && (t.isBuy() && t.isInstall() ? this.dinosaurProperty.active = !0 : this.dinosaurProperty.active = !1);
          }, e.prototype.upateDinosaurBaseDataUI = function (t) {
            var e = w.default.getInstance().getData();
            this.lblAtkGold.string = "" + e.atkUpgradeGold, this.lblHpGold.string = "" + e.hpUpgradeGold,
              d.default.getMoney_csryw() <= e.atkUpgradeGold ? this.lblAtkGold.node.color = cc.color(255, 0, 0) : this.lblAtkGold.node.color = cc.color(255, 255, 255),
              d.default.getMoney_csryw() <= e.hpUpgradeGold ? this.lblHpGold.node.color = cc.color(255, 0, 0) : this.lblHpGold.node.color = cc.color(255, 255, 255),
              this.progressHp.setMaxValue(t.hpLimit), this.progressAtk.setMaxValue(t.atkLimit),
              this.progressHp.updateProgress(t.hp, !1, !0), this.progressAtk.updateProgress(t.atk, !1, !0),
              this._updateUpgradeBtnState(), this.unscheduleAllCallbacks();
          }, e.prototype._updateUpgradeBtnState = function () {}, e.prototype._goldUpdate = function () {
            this._updateUpgradeBtnState(), this.lblGold.string = d.default.getMoney_csryw() + "",
              this.lblGold.string.length >= 8 ? this.lblGold.node.scale = .8 : this.lblGold.node.scale = 1;
            var t = w.default.getInstance().getData();
            this.iconAtkVideo.active = d.default.getMoney_csryw() < t.atkUpgradeGold, this.iconHpVideo.active = d.default.getMoney_csryw() < t.hpUpgradeGold;
          }, e.prototype.upgrade = function () {}, e.prototype.onOpenInstallDinosaurView = function () {
            v.default.createInstallDinosaur(this.curDinosaurData, this.installNode, function () {}, this),
              g.default.setXSYD_ZuZhuang(!0), h.default.emitEvent_csryw(y.PageEvent.HIDE_MAIN);
          }, e.prototype.onGameStart = function () {
            cc.log("onGameStart,开始游戏按钮"), g.default.tryDinosaurId = 0, this.enterGame(), h.default.emitEvent_csryw(y.PageEvent.HIDE_MAIN);
          }, e.prototype.enterGame = function () {
            var t = this,
              e = function () {
                _.default.tryShowWXCrazyClick_csryw() ? v.default.createCrazyView(null, t.node) : a.default.getInstance_csryw().loadTransitionScene(),
                  t.unscheduleAllCallbacks(), g.default.setXSYD_ChuZhan(!0);
              };
            u.default.wudianFlag_csryw && p.default.checkVersions_csryw() && i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.startVideo_csryw > 0 ? _.default.showRewardedVideoAd_csryw(function (t) {
              e();
            }, function () {
              e();
            }) : e();
          }, e.prototype.onMoneyBuyDinosaur = function () {
            d.default.getMoney_csryw() >= this.curDinosaurData.unlockGoldNum ? (d.default.subMoney_csryw(this.curDinosaurData.unlockGoldNum),
              this.curDinosaurData.buy(), a.default.getInstance_csryw().saveGameData_csryw(),
              c.default.emitEvent_csryw(s.ryw_Event.ryw_Lobby_DinosaurBuy_csryw), l.UmengMgr.sendEvent_csryw(l.StatsFrameWorkEvent.Total_buyNumber, {
                dinosaur: "dinosaur_" + this.curDinosaurData.id
              })) : (v.default.createTipDialog("金币不足"), this.onAddMoney());
          }, e.prototype.onAddMoney = function () {
            var t = this;
            v.default.loadPrefabsInMainBundle("prefab/AddMoneyView", function (e) {
              var n = cc.instantiate(e);
              t.node.addChild(n);
            }, this);
          }, e.prototype.OpenView = function () {
            var t = this,
              e = i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw;
            n.LoginFirst ? (n.LoginFirst = !1, 1 == e.ShowMoneyView ? v.default.loadPrefabsInMainBundle("prefab/ViewFirst", function (n) {
              t.node.addChild(cc.instantiate(n)), 1 == e.ShowVideoView && v.default.loadPrefabsInMainBundle("prefab/ViewSecond", function (e) {
                t.node.addChild(cc.instantiate(e));
              }, t);
            }, this) : 1 == e.ShowVideoView && v.default.loadPrefabsInMainBundle("prefab/ViewSecond", function (e) {
              t.node.addChild(cc.instantiate(e));
            }, this)) : 1 == e.ShowMoneyView && v.default.loadPrefabsInMainBundle("prefab/ViewFirst", function (e) {
              t.node.addChild(cc.instantiate(e));
            }, this);
          }, e.prototype.onLookVideoDinosaur = function () {
            var t = this;
            _.default.showRewardedVideoAd_csryw(function (e) {
              if (e) {
                if (t.curDinosaurData.dinosaurData.videoTime >= t.curDinosaurData.unlockVideoTime) return;
                return t.curDinosaurData.dinosaurData.videoTime++, t.jiesuoLabel.string = "(" + t.curDinosaurData.dinosaurData.videoTime + "/" + t.curDinosaurData.unlockVideoTime + ")",
                  l.UmengMgr.sendEvent_csryw(l.StatsFrameWorkEvent.Total_unlockvideoNumber, {
                    dinosaur: "dinosaur_" + t.curDinosaurData.id,
                    videoStep: "(" + t.curDinosaurData.dinosaurData.videoTime + "/" + t.curDinosaurData.unlockVideoTime + ")"
                  }), t.curDinosaurData.dinosaurData.videoTime == t.curDinosaurData.unlockVideoTime && (t.curDinosaurData.unlock(),
                    c.default.emitEvent_csryw(s.ryw_Event.ryw_Lobby_DinosaurUnlock_csryw), l.UmengMgr.sendEvent_csryw(l.StatsFrameWorkEvent.Total_unlockNumber, {
                      dinosaur: "dinosaur_" + t.curDinosaurData.id
                    })), void a.default.getInstance_csryw().saveGameData_csryw();
              }
            }, function () {
              v.default.createTipDialog();
            });
          }, e.prototype.preloadDinosaurSpineRes = function (t) {
            var e = this,
              n = t.id;
            this.dinosaurSpineNode.removeAllChildren(), this.curDinosaurSpineContor = null,
              n >= 1 && n <= 5 && v.default.loadPrefabsInBundle(1, "MainSpine/dinosaur_" + n + "/long", function (t) {
                var n = cc.instantiate(t.data);
                e.curDinosaurSpineContor = n.addComponent(C.default), e.dinosaurSpineNode.addChild(n);
              });
          }, e.LoginFirst = !0, r([T(I.default)], e.prototype, "roleScrollView", void 0),
          r([T(b.default)], e.prototype, "progressHp", void 0), r([T(b.default)], e.prototype, "progressAtk", void 0),
          r([T(cc.Label)], e.prototype, "rtAtkIncrease", void 0), r([T(cc.Label)], e.prototype, "rtHpIncrease", void 0),
          r([T(S.default)], e.prototype, "curDinosaurMask", void 0), r([T(cc.Node)], e.prototype, "installNode", void 0),
          r([T({
            tooltip: "spine动画节点",
            type: cc.Node
          })], e.prototype, "dinosaurSpineNode", void 0), r([T({
            tooltip: "添加空角色",
            type: cc.Integer
          })], e.prototype, "emptyRolesNum", void 0), r([T({
            tooltip: "属性升级节点",
            type: cc.Node
          })], e.prototype, "dinosaurProperty", void 0), r([T({
            tooltip: "升级攻击所需金币",
            type: cc.Label
          })], e.prototype, "lblAtkGold", void 0), r([T({
            tooltip: "升级生命所需金币",
            type: cc.Label
          })], e.prototype, "lblHpGold", void 0), r([T({
            tooltip: "攻击力视频图标",
            type: cc.Node
          })], e.prototype, "iconAtkVideo", void 0), r([T({
            tooltip: "生命值视频图标",
            type: cc.Node
          })], e.prototype, "iconHpVideo", void 0), r([T({
            tooltip: "当前拥有的金币",
            type: cc.Label
          })], e.prototype, "lblGold", void 0), r([T({
            tooltip: "组装按钮",
            type: cc.Node
          })], e.prototype, "zuzhuangNode", void 0), r([T({
            tooltip: "出战按钮",
            type: cc.Node
          })], e.prototype, "chuzhanNode", void 0), r([T({
            tooltip: "期待按钮",
            type: cc.Node
          })], e.prototype, "qidaiNode", void 0), r([T({
            tooltip: "购买按钮",
            type: cc.Node
          })], e.prototype, "goumaiNode", void 0), r([T({
            tooltip: "解锁按钮",
            type: cc.Node
          })], e.prototype, "jiesuoNode", void 0), r([T({
            tooltip: "购买金额",
            type: cc.Label
          })], e.prototype, "goumaiLabel", void 0), r([T({
            tooltip: "解锁视频次数",
            type: cc.Label
          })], e.prototype, "jiesuoLabel", void 0), r([T({
            tooltip: "已组装",
            type: cc.Node
          })], e.prototype, "yizuzhuangNode", void 0), r([T({
            tooltip: "已解锁",
            type: cc.Node
          })], e.prototype, "yijiesuoNode", void 0), r([T({
            tooltip: "未解锁",
            type: cc.Node
          })], e.prototype, "weijiesuoNode", void 0), r([T(sp.Skeleton)], e.prototype, "yindao", void 0),
          e = n = r([k], e);
      }(cc.Component);
    n.default = M, cc._RF.pop();
  }, {
    "../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../FrameWork/Event/EventEnum": "EventEnum",
    "../../../../FrameWork/Event/EventMgr": "EventMgr",
    "../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../FrameWork/Mgr/UmengMgr": "UmengMgr",
    "../../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../../FrameWork/User/User": "User",
    "../../../../FrameWork/Util/Utilit": "Utilit",
    "../../../../Platform/weixin/WXAPI": "WXAPI",
    "../../../../Platform/weixin/newFrame/src/event/ADPageEventEnum": "ADPageEventEnum",
    "../../../../Platform/weixin/newFrame/src/event/ADPageEventMgr": "ADPageEventMgr",
    "../../config/DinosaurConfig": "DinosaurConfig",
    "../../config/GlobalConfig": "GlobalConfig",
    "../../core/CustomUser": "CustomUser",
    "../../core/DinosaurProperty": "DinosaurProperty",
    "../../utils/ResCenter": "ResCenter",
    "../../utils/SoundsManager": "SoundsManager",
    "../Component/Progress": "Progress",
    "./DinosaurMask": "DinosaurMask",
    "./LobbyDinosaurSpine": "LobbyDinosaurSpine",
    "./RoleScrollView": "RoleScrollView"
  }],
  SettleView: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "45723YVzxZOHpaEP1zWQ0+Q", "SettleView");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../FrameWork/Mgr/GameMgr"),
      s = t("../../../../FrameWork/Mgr/SoundMgr"),
      c = t("../../../../FrameWork/Mgr/UmengMgr"),
      a = t("../../../../FrameWork/User/User"),
      l = t("../../../../Kd/script/ShowKuanDian"),
      u = t("../../../../Platform/CustimWxApi"),
      d = t("../../../../Platform/weixin/BannerMgr"),
      p = t("../../../../Platform/weixin/BannerPos"),
      y = t("../../../../Platform/weixin/WXAPI"),
      h = cc._decorator,
      _ = h.ccclass,
      f = h.property,
      w = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.winNode = null, e.loseNode = null, e.coinNode = null, e.coinLabel = null,
            e.doubleNode = null, e.data = null, e;
        }
        return o(e, t), e.prototype.start = function () {
          window.showEnd(()=>{d.default.showBanner_csryw(p.BannerPos.Center_Bottom, 0, -1); u.default.showCustimAd(u.CustimWxTag.EnumCustimSettleView);}),
          
            this.data.isWin ? (this.winNode.active = !0, this.loseNode.active = !1, this.doubleNode.active = !0) : (this.winNode.active = !1,
              this.loseNode.active = !0, this.doubleNode.active = !1), this.showCoin();
        }, e.prototype.init = function (t) {
          this.data = t;
        }, e.prototype.showCoin = function () {
          var t = this.data.rewardNum;
          t && t > 0 ? (this.coinNode.active = !0, this.coinLabel.string = "+" + t) : (this.coinNode.active = !1,
            this.coinLabel.string = "+0");
        }, e.prototype.normalGetCoinCallBack = function () {
          this.toNextView();
        }, e.prototype.doubleGetCoinCallBack = function () {
          var t = 2 * this.data.rewardNum,
            e = this;
          y.default.showRewardedVideoAd_csryw(function (n) {
            n && (a.default.addMoney_csryw(t), i.default.getInstance_csryw().saveGameData_csryw(),
              c.UmengMgr.sendEvent_csryw(c.StatsFrameWorkEvent.Total_videoNumber, {
                info: c.LookVideoType.doubeSettle
              }), e.toNextView());
          }, function () {});
        }, e.prototype.toNextView = function () {
          var t = this;
          d.default.hideBanner_csryw(), u.default.hideCustimAd(u.CustimWxTag.EnumCustimSettleView),
            l.default.showKd(function () {
              s.default.stopMusic_csryw(), y.default.hideNativeAD(), t.data.isWin ? i.default.getInstance_csryw().onGameToGameWinScene_csryw() : i.default.getInstance_csryw().onGameToGameFailScene_csryw();
            });
        }, r([f({
          type: cc.Node,
          tooltip: "胜利"
        })], e.prototype, "winNode", void 0), r([f({
          type: cc.Node,
          tooltip: "失败"
        })], e.prototype, "loseNode", void 0), r([f({
          type: cc.Node,
          tooltip: "金币节点"
        })], e.prototype, "coinNode", void 0), r([f({
          type: cc.Label,
          tooltip: "金币"
        })], e.prototype, "coinLabel", void 0), r([f({
          type: cc.Node,
          tooltip: "3倍领取"
        })], e.prototype, "doubleNode", void 0), e = r([_], e);
      }(cc.Component);
    n.default = w, cc._RF.pop();
  }, {
    "../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../FrameWork/Mgr/SoundMgr": "SoundMgr",
    "../../../../FrameWork/Mgr/UmengMgr": "UmengMgr",
    "../../../../FrameWork/User/User": "User",
    "../../../../Kd/script/ShowKuanDian": "ShowKuanDian",
    "../../../../Platform/CustimWxApi": "CustimWxApi",
    "../../../../Platform/weixin/BannerMgr": "BannerMgr",
    "../../../../Platform/weixin/BannerPos": "BannerPos",
    "../../../../Platform/weixin/WXAPI": "WXAPI"
  }],
  ShareAd: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "2ef91Wk+CRLDY/cwtq1fCRS", "ShareAd"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.AdLocationTypeEnum = void 0;
    var o, r = t("../Config/AppConfig"),
      i = t("./AppPlatform"),
      s = t("../NetWork/HttpUnit"),
      c = t("../Config/AppSwitchConfig"),
      a = t("../Mgr/RYPlatformMgr");
    (function (t) {
      t[t.ID_LoopAd = 0] = "ID_LoopAd", t[t.ID_BannerAd = 1] = "ID_BannerAd", t[t.ID_InsertAd = 2] = "ID_InsertAd",
        t[t.ID_AniAd = 3] = "ID_AniAd", t[t.ID_HistoryAd = 4] = "ID_HistoryAd", t[t.ID_MoreGameAd = 5] = "ID_MoreGameAd";
    })(o = n.AdLocationTypeEnum || (n.AdLocationTypeEnum = {}));
    var l = function () {
      function t() {}
      return t.initAdLocationids_csryw = function () {
          t.AdLocationids_csryw = [r.default.LoopAdLocationID_csryw];
        }, t.getAdLocationIDByType_csryw = function (t) {
          var e = -1;
          switch (t) {
            case o.ID_LoopAd:
              e = r.default.LoopAdLocationID_csryw;
              break;

            case o.ID_BannerAd:
              e = r.default.BannerAdLocationID_csryw;
              break;

            case o.ID_InsertAd:
              e = r.default.InsertAdLocationID_csryw;
              break;

            case o.ID_AniAd:
              e = r.default.AniAdLocationID_csryw;
              break;

            case o.ID_HistoryAd:
              e = r.default.HistoryLocationID_csryw;
              break;

            case o.ID_MoreGameAd:
              e = r.default.MoreGameLocationID_csryw;
          }
          return e;
        }, t.getADVs_csryw = function (e, n, o, r, s) {
          if (t.isNeedShowAd_csryw()) {
            o = null == o ? this.UseRandomAdPos_csryw : o, r = null == r || r, o && (console.log("随机广告"),
              e = this.getRandomADPosID_csryw());
            var c = t._adv_csryw[e];
            if (c) r && (c = null == s ? this.sortDatas_csryw(c) : s(c)), n(c);
            else {
              var l = this;
              i.default.is_OPPO_GAME_csryw() ? t.getADVData_csryw(e, function (o) {
                if (1 == o.code) {
                  if (t._adv_csryw[e] = o.result, (c = t._adv_csryw[e]) && i.default.is_Iphone_csryw())
                    for (var a = 0; a < c.length; ++a)
                      for (var u = c[a], d = 0; d < t._iphoneIgnoreAppIds_csryw.length; ++d)
                        if (u.appid == t._iphoneIgnoreAppIds_csryw[d]) {
                          c.splice(a, 1), --a;
                          break;
                        }
                  c && r && (c = null == s ? l.sortDatas_csryw(c) : s(c)), n && n(c);
                } else n && n(null);
              }, function (t) {
                n && n(null);
              }) : a.default.getADList_csryw(e + "", function (o) {
                if (null != o) {
                  if (t._adv_csryw[e] = o, (c = t._adv_csryw[e]) && i.default.is_Iphone_csryw())
                    for (var a = 0; a < c.length; ++a)
                      for (var u = c[a], d = 0; d < t._iphoneIgnoreAppIds_csryw.length; ++d)
                        if (u.appid == t._iphoneIgnoreAppIds_csryw[d]) {
                          c.splice(a, 1), --a;
                          break;
                        }
                  c && r && (c = null == s ? l.sortDatas_csryw(c) : s(c)), n && n(c);
                } else n && n(null);
              }, r);
            }
          } else n(null);
        }, t.getRandomADPosID_csryw = function () {
          return this.AdLocationids_csryw[Math.floor(Math.random() * this.AdLocationids_csryw.length)];
        }, t.request_csryw = function (t) {
          (t.url_csryw.indexOf("https://") > -1 || t.url_csryw.indexOf("http://") > -1) && (t.url_csryw = t.url_csryw);
          var e = t.onFail_csryw,
            n = {},
            o = null;
          if ("get" == t.meth_csryw) {
            for (var c = "", a = 0, l = Object.keys(t.data_csryw); a < l.length; a++) {
              c += (p = l[a]) + "=" + t.data_csryw[p] + "&";
            }
            t.url_csryw = t.url_csryw + "?" + c, n.versions = r.default.Versions_csryw;
          } else {
            c = "";
            for (var u = 0, d = Object.keys(t.data_csryw); u < d.length; u++) {
              var p;
              c += (p = d[u]) + "=" + t.data_csryw[p] + "&";
            }
            c += "ts=" + String(Date.now()) + "&", n["Content-Type"] = "application/x-www-form-urlencoded",
              n.versions = r.default.Versions_csryw, i.default.is_OPPO_GAME_csryw() && (n["Content-Type"] = "application/json;charset=UTF-8",
                c = JSON.stringify(t.data_csryw)), o = c;
          }
          s.default.sendHttpUrl_csryw(t, o, function (e) {
            console.log(e, "http Success"), t.onSuccess_csryw && t.onSuccess_csryw(e), t.onSuccess_csryw = null,
              t = null;
          }, function (n) {
            console.log(n, "http fail"), e && e(n), t && (t.onFail_csryw = null), e = null,
              t = null;
          }, n);
        }, t.getADVData_csryw = function (e, n, o) {
          var c = new s.requestData();
          i.default.is_OPPO_GAME_csryw() ? (c.url_csryw = t.getAdv_oppo_csryw, c.data_csryw.gameAppid = r.default.AppID_csryw,
            c.data_csryw.positionId = e) : (c.url_csryw = t.getAdv_bd_csryw, c.data_csryw.gameAppid = r.default.AppID_csryw,
            c.data_csryw.positionId = e), c.onSuccess_csryw = n, c.onFail_csryw = o, t.request_csryw(c);
        }, t.RandomJump_csryw = function (e) {
          if (void 0 === e && (e = 1), console.log("随机跳转,rate：" + e), e > 1 && (e /= 100),
            Math.random() <= e) {
            for (var n = r.default.LoopAdLocationID_csryw, o = [r.default.LoopAdLocationID_csryw, r.default.InsertAdLocationID_csryw, r.default.BannerAdLocationID_csryw, r.default.AniAdLocationID_csryw], s = 0; s < t.AdLocationids_csryw.length; ++s) t.UseRandomAdPos_csryw && o.push(t.AdLocationids_csryw[s]);
            n = o[Math.floor(Math.random() * o.length)];
            t.getADVs_csryw(n, function (t) {
              if (t) {
                var e = t[Math.floor(t.length * Math.random())];
                i.default.navigateToMiniProgram_csryw(e);
              }
            }, !0);
          }
        }, t.isNeedShowAd_csryw = function () {
          if (0 == c.default.getInstance_csryw().getAppSwitchData_csryw().adSwitch_csryw) return !1;
          if (i.default.is_OPPO_GAME_csryw() && c.default.getInstance_csryw().getAppSwitchData_csryw().oppocfg_csryw.oppoversions_csryw != r.default.Versions_csryw) return !1;
          if (i.default.is_TT_GAME_csryw()) {
            var t = String(i.default.getLaunchOptionsSync_csryw().scene).search("02");
            if (i.default.is_Iphone_csryw() && 0 == t) return !1;
          }
          var e = c.default.getInstance_csryw().getAppSwitchData_csryw().mailiang_csryw,
            n = c.default.getInstance_csryw().getAppSwitchData_csryw().mailianglist_csryw,
            o = c.default.getInstance_csryw().getAppSwitchData_csryw().mailiangSceneList_csryw;
          if (1 == e) {
            var s = null,
              a = null;
            if (i.default.is_WECHAT_GAME_csryw()) {
              var l = i.default.getLaunchOptionsSync_csryw();
              s = l.query.chid, a = l.scene;
            } else i.default.is_QQ_PLAY_csryw() && (s = i.default.getLaunchOptionsSync_csryw().query.chid,
              a = i.default.getLaunchOptionsSync_csryw().scene);
            if (null != s && null != n && n.length > 0)
              for (var u = 0; u < n.length; ++u)
                if (s == n[u]) return !1;
            if (null != a && null != o && o.length > 0)
              for (u = 0; u < o.length; ++u)
                if (a == o[u]) return !1;
          }
          return !0;
        }, t.sortDatas_csryw = function (t) {
          if (null == t || 0 == t.length) return [];
          for (var e = {}, n = new Array(), o = 0; o < t.length; ++o) {
            null == e[(a = t[o]).appid] ? (e[a.appid] = new Array(), e[a.appid].push(a), n.push(a.appid)) : e[a.appid].push(a);
          }
          for (o = 0; o < n.length; ++o) {
            var r = n[o],
              i = n[m = Math.floor(Math.random() * n.length)];
            n[m] = r, n[o] = i;
          }
          for (o = 0; o < n.length; ++o)
            for (var s = e[r = n[o]], c = 0; c < s.length; ++c) {
              var a = s[c];
              i = s[m = Math.floor(Math.random() * s.length)];
              s[m] = a, s[c] = i;
            }
          for (var l = new Array(), u = []; n.length > 0;) {
            var d = !0;
            for (o = 0; o < n.length; ++o) {
              r = n[o];
              var p = !0;
              for (c = 0; c < u.length; ++c) {
                if ((_ = u[c]) == r) {
                  p = !1;
                  break;
                }
              }
              if (p) {
                d = !1;
                a = e[r].shift();
                l.push(a), u.push(r), u.length > 3 && u.shift(), e[r].length <= 0 && (n.splice(o, 1),
                  --o);
              }
            }
            if (d) {
              for (c = 0; c < n.length; ++c) {
                p = !0, s = e[r = n[c]];
                u.splice(0);
                for (var y = 0; y < s.length; ++y)
                  for (a = s[y], o = 0; o < l.length; ++o) {
                    u.push(null == l[o - 2] ? null : l[o - 2].appid), u.push(null == l[o - 1] ? null : l[o - 1].appid),
                      u.push(null == l[o] ? null : l[o].appid), u.push(null == l[o + 1] ? null : l[o + 1].appid),
                      u.push(null == l[o + 2] ? null : l[o + 2].appid);
                    for (var h = 0; h < u.length; ++h) {
                      var _;
                      if (null != (_ = u[h]) && _ == r) {
                        p = !1;
                        break;
                      }
                    }
                    if (p && null != a) {
                      var f = l.slice(0, o + 1),
                        w = l.slice(o + 1, l.length);
                      (l = f).push(a);
                      for (var g = 0; g < w.length; ++g) l.push(w[g]);
                    }
                  }
              }
              break;
            }
            for (o = 0; o < n.length; ++o) {
              var m;
              r = n[o], i = n[m = Math.floor(Math.random() * n.length)];
              n[m] = r, n[o] = i;
            }
          }
          return l;
        }, t.getAdv_oppo_csryw = "https://javaadv.renyouwangluo.cn/oa/oppo/adv/online/list",
        t.getAdv_bd_csryw = "https://javaadv.renyouwangluo.cn/oa/all/ad/adv/online/list",
        t.UseRandomAdPos_csryw = !1, t.AdLocationids_csryw = [], t._adPosition_csryw = {},
        t._adv_csryw = {}, t._iphoneIgnoreAppIds_csryw = [], t;
    }();
    n.default = l, cc._RF.pop();
  }, {
    "../Config/AppConfig": "AppConfig",
    "../Config/AppSwitchConfig": "AppSwitchConfig",
    "../Mgr/RYPlatformMgr": "RYPlatformMgr",
    "../NetWork/HttpUnit": "HttpUnit",
    "./AppPlatform": "AppPlatform"
  }],
  ShowAndHideAD: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "8f190v04HlE65T04kijxNNe", "ShowAndHideAD");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.AdType = void 0;
    var i, s = t("../FrameWork/Config/AppSwitchConfig"),
      c = t("../FrameWork/Mgr/WudianMgr"),
      a = t("../FrameWork/Util/Utilit");
    (function (t) {
      t[t.NoGameResult = 1] = "NoGameResult", t[t.GameResult = 2] = "GameResult";
    })(i = n.AdType || (n.AdType = {}));
    var l = cc._decorator,
      u = l.ccclass,
      d = l.property,
      p = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e._slideDirection = i.NoGameResult, e;
        }
        return o(e, t), Object.defineProperty(e.prototype, "slideDirection", {
          get: function () {
            return this._slideDirection;
          },
          set: function (t) {
            this._slideDirection = t;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.start = function () {
          var t = s.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw,
            e = !0;
          e = this._slideDirection == i.NoGameResult ? 1 == t.isShowResultAndNoGameResult_csryw : 1 == t.isShowGameResultAD_csryw,
            c.default.wudianFlag_csryw && a.default.checkVersions_csryw() && e || (this.node.active = !1);
        }, r([d()], e.prototype, "_slideDirection", void 0), r([d({
          type: cc.Enum(i),
          tooltip: "导出类型:\n NoGameResult 非游戏结算\nGameResult游戏结算"
        })], e.prototype, "slideDirection", null), e = r([u], e);
      }(cc.Component);
    n.default = p, cc._RF.pop();
  }, {
    "../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../FrameWork/Util/Utilit": "Utilit"
  }],
  ShowKuanDian: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "9c7f98/i8hIfLUr3VwcIr/B", "ShowKuanDian"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../FrameWork/Config/AppSwitchConfig"),
      r = t("../../FrameWork/Mgr/WudianMgr"),
      i = t("../../FrameWork/User/User"),
      s = t("./KuanDian"),
      c = t("./NodePoolMag"),
      a = function () {
        function t() {}
        return t.init = function () {
          c.NodePoolMag.instance.isHave("glod") || cc.assetManager.getBundle("kuandian").load("view/coin", cc.Prefab, function (t, e) {
            c.NodePoolMag.instance.createNodeCount("glod", 5, e, null);
          });
        }, t.showKd = function (t) {
          var e = this;
          if (r.default.wudianFlag_csryw && 1 == o.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.resulekuangdian) {
            if (this.isadd) return;
            this.isadd = !0, cc.assetManager.getBundle("kuandian").load("view/KuanDian", cc.Prefab, function (n, o) {
              e.dialog = cc.instantiate(o), e.addNode(e.dialog, t), e.dialog.zIndex = cc.macro.MAX_ZINDEX - 5,
                e.isadd = !1;
            });
          } else t();
        }, t.addNode = function (t, e) {
          t.x = cc.winSize.width / 2;
          var n = cc.winSize.height / 2;
          (t.y = n, cc.director.getScene().getChildByUuid(t.uuid)) || (cc.director.getScene().addChild(t),
            t.getComponent(s.default).setData(e));
        }, t.showCoin = function (t, e, n, o, r) {
          o || (o = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2)), this.playGold({
            inP: o,
            toP: t,
            count: 10,
            goldCoin: e,
            name: n,
            over: r
          });
        }, t.playGold = function (t) {
          var e = function (t) {
              return Math.floor(Math.random() * t);
            },
            n = {
              inP: cc.v2(cc.winSize.width / 2, cc.winSize.height / 2),
              toP: cc.v2(-320, 600),
              count: 10,
              goldCoin: 0,
              name: "gold",
              over: null
            };
          Object.assign(n, t);
          for (var o = 0, r = function (r) {
              var s = c.NodePoolMag.instance.getNode("glod");
              t.name, s.zIndex = cc.macro.MAX_ZINDEX, s.setPosition(n.inP), cc.director.getScene().addChild(s);
              var a = e(240) - 120,
                l = e(240) - 120,
                u = e(200) / 1e3;
              cc.tween(s).delay(u).by(.6, {
                x: a,
                y: l
              }, {
                easing: cc.easing.quadOut
              }).to(1, {
                x: n.toP.x,
                y: n.toP.y
              }, {
                easing: cc.easing.quartIn
              }).call(function () {
                o++, t.name, c.NodePoolMag.instance.recycleNode("glod", s), o >= n.count && (i.default.addMoney_csryw(n.goldCoin),
                  n.over && n.over());
              }).start();
            }, s = 0; s < n.count; s++) r();
        }, t.dialog = null, t.isadd = !1, t;
      }();
    n.default = a, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../FrameWork/User/User": "User",
    "./KuanDian": "KuanDian",
    "./NodePoolMag": "NodePoolMag"
  }],
  SingleExportAD: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d41d3uVvyRFhq8fKQ66jPGK", "SingleExportAD");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/View/KRQ_Base"),
      s = cc._decorator,
      c = s.ccclass,
      a = (s.property,
        s.menu),
      l = s.disallowMultiple,
      u = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return o(e, t), e = r([c, l(), a("框架组件/单个导出广告")], e);
      }(i.default);
    n.default = u, cc._RF.pop();
  }, {
    "../../../../../FrameWork/View/KRQ_Base": "KRQ_Base"
  }],
  SingleExportGroups: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "f5676BVYllIF62AfebJ/jZM", "SingleExportGroups");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../../FrameWork/Interface/FMInterface"),
      c = t("../../../../../FrameWork/Util/ShareAd"),
      a = t("../../../../../FrameWork/Util/Utilit"),
      l = t("../../../../../FrameWork/View/KRQ_Base"),
      u = t("../wxViewBase"),
      d = cc._decorator,
      p = d.ccclass,
      y = d.property,
      h = d.disallowMultiple,
      _ = d.menu,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.AdLocationType = c.AdLocationTypeEnum.ID_LoopAd, e.isRun = !0, e.isReplace = !0,
            e._AdPosID_csryw = -1, e.adAllDatas_csryw = [], e.itemList = new Array(), e.EventEnumView_csryw = {},
            e.ad_tag_csryw = null, e.actionIndex = 0, e.isJumpVideo = !1, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            var t = this,
              e = !1;
            switch (this.node.parent.parent.name) {
              case "Game":
                break;

              case "Ranking":
                e = i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isRankJumpVideo_csryw > 0;
                break;

              case "Main":
                break;

              case "Result":
                e = i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isResultJumpVideo_csryw > 0;
            }
            this.ad_tag_csryw = e ? "jump" : "nojump", this._AdPosID_csryw = c.default.getAdLocationIDByType_csryw(this.AdLocationType);
            for (var n = this.node.children, o = function (e) {
                var o = n[e].getComponent(l.default);
                o.setCallClickListener_csryw(s.handleFM_csryw(function () {
                  o.getData_csryw() && t.isReplace && t.updateSingleAd(e);
                }, r)), o.setAdTag_csryw(r.ad_tag_csryw), r.itemList.push({
                  krq: o,
                  adIndex: -1
                });
              }, r = this, a = 0; a < n.length; a++) o(a);
            c.default.getADVs_csryw(this._AdPosID_csryw, function (e) {
              if (null != e) {
                t.adAllDatas_csryw = e;
                for (var n = 0; n < t.itemList.length; n++) t.updateSingleAd(n);
              }
            }), this.playActionAngle_csryw();
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.randomKRQTip = function () {
            for (var t = [], e = 0; e < this.itemList.length; e++) {
              var n = this.itemList[e];
              t.push(e);
            }
            t = t.sort(function (t, e) {
              return .5 - Math.random();
            });
            var o = function (e) {
              return t.length < 3 || (e == t[0] || e == t[1] || e == t[2]);
            };
            for (e = 0; e < this.itemList.length; e++) {
              n = this.itemList[e];
              o(e) ? n.krq.setTipIconActive(!0) : n.krq.setTipIconActive(!1);
            }
          }, e.prototype.setAdtag_csryw = function (t) {
            this.ad_tag_csryw = t, this._initView_csryw();
            for (var e = 0; e < this.itemList.length; e++) {
              this.itemList[e].krq.setAdTag_csryw(t);
            }
          }, e.prototype.playActionAngle_csryw = function () {
            var t = this;
            this.schedule(function () {
              if (t.actionIndex = t.actionIndex + 1, t.isRun)
                for (var e = 0; e < t.itemList.length; e++) {
                  var n = t.itemList[e];
                  t._playActionAngle_csryw(n.krq.node);
                }
              t.isReplace && t.actionIndex > 1 && (t.actionIndex = 0, c.default.getADVs_csryw(t._AdPosID_csryw, function (e) {
                if (null != e) {
                  t.adAllDatas_csryw = e;
                  for (var n = 0; n < t.itemList.length; n++) t.updateSingleAd(n);
                }
              }));
            }, 3.5);
          }, e.prototype._playActionAngle_csryw = function (t) {
            t.angle = 0, cc.tween(t).to(.3, {
              scale: 1
            }).to(.3, {
              scale: .8
            }).to(.3, {
              scale: 1
            }).start(), cc.tween(t).to(.1, {
              angle: -18
            }).to(.2, {
              angle: 18
            }).to(.2, {
              angle: -18
            }).to(.2, {
              angle: 18
            }).to(.2, {
              angle: -18
            }).to(.1, {
              angle: 0
            }).start();
          }, e.prototype.updateSingleAd = function (t) {
            for (var e = this.itemList[t], n = {}, o = 0; o < this.itemList.length; o++) {
              var r = this.itemList[o]; -
              1 != r.adIndex && (n[r.adIndex] = !0);
            }
            for (var i = [], s = 0; s < this.adAllDatas_csryw.length; s++) n[s] || i.push(s);
            if (i.length > 0) {
              var c = a.default.random_csryw(i.length);
              e.adIndex = i[c], e.krq.setData_csryw(this.adAllDatas_csryw[i[c]]);
            }
          }, r([y({
            type: cc.Enum(c.AdLocationTypeEnum),
            tooltip: "当前广告的类型\n ID_LoopAd 普通导出广告\nID_BannerAd Banner广告\nID_InsertAd 插屏广告\nID_AniAd 序列帧广告\n ID_HistoryAd 历史广告\nID_MoreGameAd 更多游戏广告"
          })], e.prototype, "AdLocationType", void 0), r([y({
            tooltip: "是否运动"
          })], e.prototype, "isRun", void 0), r([y({
            tooltip: "是否自动更换图片"
          })], e.prototype, "isReplace", void 0), e = r([p, h(), _("框架组件/单个导出的组合")], e);
      }(u.default);
    n.default = f, cc._RF.pop();
  }, {
    "../../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../../FrameWork/Interface/FMInterface": "FMInterface",
    "../../../../../FrameWork/Util/ShareAd": "ShareAd",
    "../../../../../FrameWork/Util/Utilit": "Utilit",
    "../../../../../FrameWork/View/KRQ_Base": "KRQ_Base",
    "../wxViewBase": "wxViewBase"
  }],
  SkillConfig: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d8ee5I+YShDaJjRqrL4/HQ3", "SkillConfig"), Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.SkillConfigData = n.SecondSkilType = void 0,
      function (t) {
        t[t.Ranged = 0] = "Ranged", t[t.Moved = 1] = "Moved", t[t.Stand = 2] = "Stand";
      }(n.SecondSkilType || (n.SecondSkilType = {}));
    var o = function () {
      return function () {};
    }();
    n.SkillConfigData = o;
    var r = function () {
      function t() {
        this._data = new Array();
      }
      return t.getInstance = function () {
        return null == t._instance && (t._instance = new t()), t._instance;
      }, t.prototype.init = function (t) {
        this._data = t;
      }, t.prototype.getDatas = function () {
        return this._data;
      }, t.prototype.getData = function (t) {
        return this._data[t];
      }, t.prototype.getDataLength = function () {
        return this._data.length;
      }, t.prototype.getDataById = function (t) {
        for (var e = null, n = 0, o = this._data; n < o.length; n++) {
          var r = o[n];
          if (t == r.id) {
            e = r;
            break;
          }
        }
        return e;
      }, t;
    }();
    n.default = r, cc._RF.pop();
  }, {}],
  SoundEffect: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d1d82tmd4pKpoo/Cubt8vcc", "SoundEffect");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = i.property,
      a = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.comboAudios = [], e.secondSkillAudios = [], e.fourSkillAudios = [], e.superSkill = null,
            e;
        }
        return o(e, t), e.prototype.playComboAudio = function (t) {
            var e = this.comboAudios[t];
            cc.audioEngine.play(e, !1, 1);
          }, e.prototype.playSecondSkill = function (t) {
            var e = this.secondSkillAudios[t];
            e && cc.audioEngine.play(e, !1, 1);
          }, e.prototype.playSuper = function () {
            this.superSkill && cc.audioEngine.play(this.superSkill, !1, 1);
          }, e.prototype.playFourSkill = function (t) {
            var e = this.fourSkillAudios[t];
            e && cc.audioEngine.play(e, !1, 1);
          }, r([c([cc.AudioClip])], e.prototype, "comboAudios", void 0), r([c([cc.AudioClip])], e.prototype, "secondSkillAudios", void 0),
          r([c([cc.AudioClip])], e.prototype, "fourSkillAudios", void 0), r([c(cc.AudioClip)], e.prototype, "superSkill", void 0),
          e = r([s], e);
      }(cc.Component);
    n.default = a, cc._RF.pop();
  }, {}],
  SoundMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "f4408q1KolDabTXfdwaMWMQ", "SoundMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.isSoundEnabled_csryw = function () {
          return this.enabled_csryw;
        }, t.setSoundEnabled_csryw = function (t) {
          this.enabled_csryw = t, this.enabled_csryw || this.stopMusic_csryw();
        }, t.playMusic_csryw = function (t) {
          if (this.enabled_csryw) {
            var e = this.getSoundUrl_csryw(t);
            cc.assetManager.loadBundle("subResMain", function (t, n) {
              n && n.load(e, cc.AudioClip, function (t, e) {
                t ? cc.log("err", t) : (cc.audioEngine.setMusicVolume(.5), cc.audioEngine.playMusic(e, !0));
              });
            });
          }
        }, t.stopMusic_csryw = function () {
          cc.audioEngine.stopMusic();
        }, t.playSound_csryw = function (t) {
          if (this.enabled_csryw) {
            var e = this.getSoundUrl_csryw(t);
            cc.assetManager.loadBundle("subResMain", function (t, n) {
              n && n.load(e, cc.AudioClip, function (t, e) {
                t ? cc.log("err", t) : cc.audioEngine.play(e, !1, 1);
              });
            });
          }
        }, t.playSpineSound = function (t, e) {
          if (this.enabled_csryw) {
            var n = this.soundSpineResPath_csryw + name;
            cc.resources.load(n, cc.AudioClip, function (t, e) {
              if (t) LogUtils.error_csryw(t);
              else cc.audioEngine.play(e, !1, 1);
            });
          }
        }, t.playSpineSound_dinosaur = function (t) {
          if (this.enabled_csryw) {
            var e = this.soundSpineResPath_csryw + t;
            cc.assetManager.loadBundle("subRes", function (t, n) {
              n && n.load(e, cc.AudioClip, function (t, e) {
                t ? cc.log("err", t) : cc.audioEngine.play(e, !1, 1);
              });
            });
          }
        }, t.getSoundUrl_csryw = function (t) {
          return this.soundResPath_csryw + t;
        }, t.soundResPath_csryw = "sound/", t.soundSpineResPath_csryw = "DinosaurSpine/",
        t.enabled_csryw = !0, t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  SoundsManager: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "82860S2djlKtoDVhySgBEKD", "SoundsManager"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../../FrameWork/Mgr/SoundMgr"),
      r = function () {
        function t() {}
        return t.click = function () {}, t.clickBack = function () {}, t.playMusic = function (e) {
          t.curMusicName = e, o.default.playMusic_csryw(e);
        }, t.playEff = function (t) {
          o.default.playSound_csryw(t);
        }, t.continuePlayMusic = function () {
          t.curMusicName && o.default.playMusic_csryw(t.curMusicName);
        }, t.curMusicName = null, t;
      }();
    n.default = r, cc._RF.pop();
  }, {
    "../../../FrameWork/Mgr/SoundMgr": "SoundMgr"
  }],
  StateMachine: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "8c4e49IFUpNp4oBy7tpeUVB", "StateMachine"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("./State"),
      r = t("./ActionState"),
      i = function () {
        function t() {
          this.id = 0, this.currentState = new o.default("default"), this.lastState = null,
            this.states = {};
        }
        return t.prototype.addState = function (t) {
          return null == t ? null : (t.stateMachine = this, this.states[t.name] = t, t);
        }, t.prototype.getState = function (t) {
          return this.states[t];
        }, t.prototype.addAction = function (t, e, n, o, i) {
          void 0 === e && (e = null), void 0 === n && (n = null), void 0 === o && (o = null),
            void 0 === i && (i = null), this.addState(new r.default(t, e, n, o, i));
        }, t.prototype.transitionByState = function (t, e) {
          var n = this.currentState;
          null != t && t.name != n.name ? (this.lastState = n, this.currentState = t, null != n && n.exit(),
            cc.log(this.id, "state change:", n.name, "->", t.name), t.enter(e)) : t && t.repeat(e);
        }, t.prototype.transition = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          this.transitionByState(this.states[t], e);
        }, t.prototype.loop = function (t) {
          null != this.currentState && this.currentState.updateTransition(t);
        }, t;
      }();
    n.default = i, cc._RF.pop();
  }, {
    "./ActionState": "ActionState",
    "./State": "State"
  }],
  StateTransition: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "73bbf/3W+lOsJCBlwuaGPOk", "StateTransition"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t(t, e) {
        this.caller_csryw = t, this.condition_csryw = e;
      }
      return t.prototype.setCurrentState_csryw = function (t) {
        this.currentState = t;
      }, t.prototype.setNextState_csryw = function (t) {
        this.nextState_csryw = t;
      }, t.prototype.checkCondition_csryw = function () {
        if (null != this.condition_csryw) return this.condition_csryw.call(this.caller_csryw);
      }, t.prototype.clone_csryw = function () {
        var e = new t(this.caller_csryw, this.condition_csryw);
        return e.setCurrentState_csryw(this.currentState), e.setNextState_csryw(this.nextState_csryw),
          this.clone_csryw();
      }, t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  State: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "37140fXdnZBWr11z5DOTVKs", "State");
    var o = this && this.__extends || function () {
      var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        function o() {
          this.constructor = e;
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
          new o());
      };
    }();
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = t("./StateTransition"),
      i = function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return n.name = "", n.stateMachine = null, n.enterTime = 0, n.transition = [], n.name = e,
            n;
        }
        return o(e, t), e.prototype.addTransition = function (t, e, n) {
            var o = new r.default(e, n);
            return o.setCurrentState_csryw(this), o.setNextState_csryw(this.stateMachine.getState(t)),
              this.transition.push(o), this;
          }, e.prototype.enter = function (t) {
            0 == this.enterTime && this.OnInit(), this.enterTime = new Date().getTime(), null != t ? t.unshift ? this.OnEnter.apply(this, t) : this.OnEnter.call(this, t) : this.OnEnter.call(this);
          }, e.prototype.repeat = function (t) {
            null != t ? t.unshift ? this.repeatStateCall.apply(this, t) : this.repeatStateCall.call(this, t) : this.repeatStateCall.call(this);
          }, e.prototype.updateTransition = function (t) {
            this.OnUpdate(t);
            for (var e = 0; e < this.transition.length; e++) {
              var n = this.transition[e];
              if (n.checkCondition_csryw()) return void this.stateMachine.transitionByState(n.nextState_csryw, null);
            }
          }, e.prototype.exit = function () {
            this.OnExit();
          }, e.prototype.OnInit = function () {}, e.prototype.OnEnter = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          }, e.prototype.OnUpdate = function (t) {}, e.prototype.OnExit = function () {}, e.prototype.handleInput = function (t, e) {},
          e.prototype.animOver = function () {}, e.prototype.animInterrupt = function () {},
          e.prototype.repeatStateCall = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          }, e.prototype.triger = function (t, e) {}, e;
      }(cc.Component);
    n.default = i, cc._RF.pop();
  }, {
    "./StateTransition": "StateTransition"
  }],
  StorageMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "6c4abL0fqVBiqizVnucKAmq", "StorageMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.StorageReq = void 0;
    var o = t("../Util/AppPlatform"),
      r = function () {
        return function () {
          this.key_csryw = null, this.data_csryw = {}, this.success_csryw = null, this.fail_csryw = null,
            this.complete_csryw = null;
        };
      }();
    n.StorageReq = r;
    var i = function () {
      function t() {}
      return t.setStorage_csryw = function (t) {
        var e = JSON.stringify(t.data_csryw);
        o.default.is_WECHAT_GAME_csryw() ? window.wx.setStorage({
          key: t.key_csryw,
          data: e,
          success: t.success_csryw,
          fail: t.fail_csryw,
          complete: t.complete_csryw
        }) : cc.sys.localStorage.setItem(t.key_csryw, e);
      }, t.getStorage_csryw = function (t) {
        var e = null;
        if (o.default.is_WECHAT_GAME_csryw()) try {
          e = window.wx.getStorageSync(t);
        } catch (t) {} else e = cc.sys.localStorage.getItem(t);
        return e;
      }, t;
    }();
    n.default = i, cc._RF.pop();
  }, {
    "../Util/AppPlatform": "AppPlatform"
  }],
  TTAPI: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "8644fgvRi1MWKdaywy+s6mk", "TTAPI"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../FrameWork/Util/AppPlatform"),
      r = t("../../FrameWork/Config/AppConfig"),
      i = t("../../FrameWork/Util/LogUtils"),
      s = function () {
        function t() {}
        return t.ttLogin_csryw = function (e, n) {
            o.default.is_TT_GAME_csryw() && (window.tt.login({
              force: !1,
              success: function (t) {
                console.log(t), console.log("登陆成功1");
                var o = t.code;
                o ? e(o) : (console.log("用户没有登陆，采用临时code"), n());
              },
              fail: function () {
                console.log("登陆失败1"), n();
              }
            }), t.initRecord_csryw());
          }, t.onRewardedVideoAdLoad_csryw = function () {
            console.log("激励视频 广告加载完成");
          }, t.onRewardedVideoAdError_csryw = function (e) {
            console.log("激励视频 广告加载失败" + e), t._onRewardedVideoAdFailed_csryw && t._onRewardedVideoAdFailed_csryw();
          }, t.onRewardedVideoAdClose_csryw = function (e) {
            e && e.isEnded || null == e ? (console.log("激励视频 已完整观看"), t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!0)) : (console.log("激励视频 未完整观看"),
              t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!1));
          }, t.regRewardedVideoAdEvent_csryw = function (e) {
            e.onLoad(t.onRewardedVideoAdLoad_csryw), e.onError(t.onRewardedVideoAdError_csryw),
              e.onClose(t.onRewardedVideoAdClose_csryw), t._isRegRewardedVideoAdEvent_csryw = !0;
          }, t.showRewardedVideoAd_csryw = function (e, n) {
            if (o.default.is_TT_GAME_csryw()) {
              t._onRewardedVideoAdClose_csryw = e, t._onRewardedVideoAdFailed_csryw = n;
              var i = window.tt.createRewardedVideoAd({
                adUnitId: r.default.tt_adUnitId_csryw
              });
              t._isRegRewardedVideoAdEvent_csryw || t.regRewardedVideoAdEvent_csryw(i), i.load().then(function () {
                var t = i.show();
                t.then(function () {
                  return console.log("激励视频 广告显示成功");
                }), t.catch(function (t) {
                  i.load().then(function () {
                    return i.show();
                  }).catch(function (t) {
                    console.log("激励视频 广告显示失败"), n && n();
                  });
                });
              }).catch(function (t) {
                console.log("激励视频 广告加载失败"), n && n();
              });
            } else e(!0);
          }, t.initRecord_csryw = function () {
            t.record_csryw = window.tt.getGameRecorderManager(), null != t.record_csryw && (t.record_csryw.onStart(function (e) {
              console.log("录屏开始"), t.recordRes_csryw = "";
            }), t.record_csryw.onStop(function (e) {
              console.log("录屏结束"), t.recordRes_csryw = e.videoPath;
            }));
          }, t.startRecord_csryw = function (e) {
            void 0 === e && (e = 300), o.default.is_TT_GAME_csryw() && t.record_csryw.start({
              duration: e
            });
          }, t.stopRecord_csryw = function () {
            o.default.is_TT_GAME_csryw() && t.record_csryw.stop();
          }, t.shareRecord_csryw = function (e, n) {
            void 0 === e && (e = null), void 0 === n && (n = null), o.default.is_TT_GAME_csryw() && ("" != t.recordRes_csryw ? window.tt.shareAppMessage({
              channel: "video",
              extra: {
                videoPath: t.recordRes_csryw,
                videoTopics: [r.default.GameName_csryw]
              },
              success: function () {
                null != e && e(), console.log("分享视频成功");
              },
              fail: function (t) {
                console.log("分享视频失败"), null != n && n();
              }
            }) : (null != n && n(), console.log("分享视频为空")));
          }, t.share_csryw = function (t) {
            void 0 === t && (t = null), o.default.is_TT_GAME_csryw() && window.tt.shareAppMessage({
              templateId: r.default.tt_templateId_csryw,
              success: function () {
                null != t && t();
              },
              fail: function () {
                console.log("分享失败");
              }
            });
          }, t.showBanner_csryw = function () {
            if (o.default.is_TT_GAME_csryw() && !(r.default.tt_bannerAdUnitId_csryw.length <= 0)) {
              if (!t._banner_csryw) {
                var e = window.tt.getSystemInfoSync(),
                  n = e.windowWidth,
                  i = e.windowHeight;
                t._banner_csryw = window.tt.createBannerAd({
                  adUnitId: r.default.tt_bannerAdUnitId_csryw,
                  adIntervals: 30,
                  style: {
                    width: 150,
                    top: i - 84.375
                  }
                }), t._banner_csryw.style.left = (n - 150) / 2, t._banner_csryw.onResize(function (e) {
                  console.log(e.width, e.height), t._banner_csryw.style.top = i - e.height, t._banner_csryw.style.left = (n - e.width) / 2;
                });
              }
              t._banner_csryw.show();
            }
          }, t.hideBanner_csryw = function () {
            null != t._banner_csryw && t._banner_csryw.hide();
          }, t.showMoreGamesModal_csryw = function (t, e) {
            "ios" !== window.tt.getSystemInfoSync().platform ? window.tt.showMoreGamesModal({
              appLaunchOptions: [{
                appId: r.default.AppID_csryw,
                query: "foo=bar&baz=qux",
                extraData: {}
              }],
              success: function (e) {
                console.log("success", e.errMsg), t && t();
              },
              fail: function (t) {
                console.log("fail", t.errMsg), e && e();
              }
            }) : e && e();
          }, t.autoOpenSignInView_csryw = function (t, e) {
            i.LogUtils.warn_csryw("111111111111111111111111");
          }, t.getLaunchOptionsSync_csryw = function () {
            if (o.default.is_TT_GAME_csryw()) {
              var t = window.tt.getLaunchOptionsSync();
              console.log("obj ", t), console.log("场景值 " + t.scene);
              var e = JSON.stringify(t.query);
              console.log("Query参数 " + e);
              var n = t.query.key;
              return console.log("Query参数：key " + n), t;
            }
            return {
              scene: 1001,
              query: ""
            };
          }, t.recordRes_csryw = "", t._banner_csryw = null, t._isRegRewardedVideoAdEvent_csryw = !1,
          t._onRewardedVideoAdFailed_csryw = null, t._onRewardedVideoAdClose_csryw = null,
          t;
      }();
    n.default = s, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppConfig": "AppConfig",
    "../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../../FrameWork/Util/LogUtils": "LogUtils"
  }],
  TTExport2Template: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "31399SQA+JBS57TJo2BawlM", "TTExport2Template");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../TTAPI"),
      c = cc._decorator,
      a = c.ccclass,
      l = c.property,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.clickBut = null, e.viewMore = null, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            this.clickBut.on("click", this.onListenerClose_csryw, this);
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.onListenerClose_csryw = function () {
            this.node.active = !1, this.emitListenerEvent_csryw(this.EventEnumView_csryw.CloseView_csryw);
          }, e.prototype.onEnable = function () {
            this.showBanner_csryw();
          }, e.prototype.showBanner_csryw = function () {
            s.default.showBanner_csryw();
          }, e.prototype.hideBanner_csryw = function () {
            s.default.hideBanner_csryw();
          }, r([l({
            tooltip: "关闭按钮",
            type: cc.Node
          })], e.prototype, "clickBut", void 0), r([l({
            tooltip: "滚动区域",
            type: cc.Node
          })], e.prototype, "viewMore", void 0), e = r([a], e);
      }(i.default);
    n.default = u, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../TTAPI": "TTAPI"
  }],
  TTGameSettleViewTemplate: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "97442g9jkBIC4h+PKB43Opw", "TTGameSettleViewTemplate");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../../../FrameWork/Util/ShareAd"),
      c = t("../../../FrameWork/Util/Utilit"),
      a = t("../../../FrameWork/Mgr/WudianMgr"),
      l = t("../TTAPI"),
      u = cc._decorator,
      d = u.ccclass,
      p = u.property,
      y = u.disallowMultiple,
      h = u.menu,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.rewardText = null, e.rewardBtn = null, e.continueBtn = null, e.adBg = null,
            e.winLabel = null, e.failLabel = null, e._ading_csryw = !1, e.isWin_csryw = !1,
            e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            this.continueBtn.active = !1, this.adBg.active = s.default.isNeedShowAd_csryw(),
              this.rewardText.node.parent.active = !1, this.rewardBtn.on("click", this.onRewardBtn_csryw, this),
              this.continueBtn.on("click", this.onContinueBtn_csryw, this);
            var t = this;
            c.default.checkVersions_csryw() && a.default.wudianFlag_csryw ? this.scheduleOnce(function () {
              t.continueBtn.active = !0;
            }, 5) : t.continueBtn.active = !0, this.showBanner_csryw();
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.showBanner_csryw = function () {
            l.default.showBanner_csryw();
          }, e.prototype.hideBanner_csryw = function () {
            l.default.hideBanner_csryw();
          }, e.prototype.setRewardText_csryw = function (t) {
            t && (this.rewardText.string = t, this.rewardText.node.parent.active = !0);
          }, e.prototype.onRewardBtn_csryw = function () {
            var t = this;
            if (!this._ading_csryw) {
              var e = this;
              this._ading_csryw = !0, l.default.showRewardedVideoAd_csryw(function (n) {
                n ? (e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_SUCCEED_csryw)) : (e._ading_csryw = !1,
                  t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
              }, function () {
                e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
              });
            }
          }, e.prototype.onContinueBtn_csryw = function () {
            this._ading_csryw || this.emitListenerEvent_csryw(this.EventEnumView_csryw.GameFromSettle_csryw);
          }, e.prototype.updateOpenViewData_csryw = function (t, e) {
            this._initView_csryw(), this.isWin_csryw = t, this.winData_csryw = e, t ? (this.winLabel.active = !0,
                this.failLabel.active = !1) : (this.winLabel.active = !1, this.failLabel.active = !0),
              this.setRewardText_csryw(e);
          }, r([p({
            tooltip: "奖励的数量",
            type: cc.Label
          })], e.prototype, "rewardText", void 0), r([p({
            tooltip: "确认领取按钮",
            type: cc.Node
          })], e.prototype, "rewardBtn", void 0), r([p({
            tooltip: "继续游戏按钮",
            type: cc.Node
          })], e.prototype, "continueBtn", void 0), r([p({
            tooltip: "导出广告BG",
            type: cc.Node
          })], e.prototype, "adBg", void 0), r([p({
            tooltip: "胜利文字",
            type: cc.Node
          })], e.prototype, "winLabel", void 0), r([p({
            tooltip: "失败文字",
            type: cc.Node
          })], e.prototype, "failLabel", void 0), e = r([d, y(), h("FrameWork组件/TT/TTGameSettleViewTemplate")], e);
      }(i.default);
    n.default = _, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/Util/ShareAd": "ShareAd",
    "../../../FrameWork/Util/Utilit": "Utilit",
    "../TTAPI": "TTAPI"
  }],
  TTGameViewTemplate: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "8cea6SFy4dImoy3aWFwUGSN", "TTGameViewTemplate");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = cc._decorator,
      c = s.ccclass,
      a = (s.property,
        s.disallowMultiple),
      l = s.menu,
      u = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return o(e, t), e.prototype.initView_csryw = function () {}, e.prototype.addEvent_csryw = function () {},
          e.prototype.removeEvent_csryw = function () {}, e.prototype.hideBanner_csryw = function () {},
          e.prototype.showBanner_csryw = function () {}, e = r([c, a(), l("FrameWork组件/TT/TTGameViewTemplate")], e);
      }(i.default);
    n.default = u, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase"
  }],
  TTMainViewTemplate: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "e8a2evUMm9M7rt9sSgtCWdS", "TTMainViewTemplate");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("./TTExport2Template"),
      c = t("../../../FrameWork/View/ADSingle"),
      a = t("../../../FrameWork/Util/AppPlatform"),
      l = t("../../../FrameWork/User/User"),
      u = t("../../../FrameWork/Event/EventMgr"),
      d = t("../../../FrameWork/Event/EventEnum"),
      p = t("../TTAPI"),
      y = t("../../../FrameWork/Config/AppSwitchConfig"),
      h = t("../../../FrameWork/Mgr/WudianMgr"),
      _ = t("../../../FrameWork/Util/Utilit"),
      f = t("../../../FrameWork/Util/Common"),
      w = t("../../../FrameWork/Interface/FMInterface"),
      g = cc._decorator,
      m = g.ccclass,
      v = g.property,
      A = g.disallowMultiple,
      b = g.menu,
      S = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.moveGamePrefab = null, e.labelMoney = null, e.labelLevel = null, e.butStart = null,
            e.butMoregame = null, e.singleAd = null, e._ading_csryw = !1, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
          this.scriptSingleAd_csryw = this.singleAd.getComponent(c.default), this.butStart.on("click", this.listenerStartGame_csryw, this),
            this.butMoregame.on("click", this.listenerMoreGame_csryw, this), a.default.is_Iphone_csryw() && (this.butMoregame.active = !1),
            this.showBanner_csryw(), this.labelMoney.string = l.default.getMoney_csryw() + "",
            this.labelLevel.string = l.default.getLeveNum_csryw() + "", u.default.onEvent_csryw(d.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, this.onUserMoneyChange_csryw, this);
          var t = this;
          this.schedule(function () {
            t.scriptSingleAd_csryw.playActionAngle_csryw();
          }, .5, cc.macro.REPEAT_FOREVER), this.schedule(function () {
            t.scriptSingleAd_csryw.refresh_csryw();
          }, 3, cc.macro.REPEAT_FOREVER);
        }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {
          u.default.offTargetEvent_csryw(this);
        }, e.prototype.hideBanner_csryw = function () {
          p.default.hideBanner_csryw();
        }, e.prototype.showBanner_csryw = function () {
          p.default.showBanner_csryw();
        }, e.prototype.onUserMoneyChange_csryw = function (t) {
          var e = t.curr;
          t.last;
          this.labelMoney.string = e + "";
        }, e.prototype.onEvent_ryw_QTT_MainMoveGame_Close_csryw = function () {
          this.showBanner_csryw();
        }, e.prototype.listenerStartGame_csryw = function () {
          var t = this,
            e = y.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.startSwitch_csryw;
          if (h.default.wudianFlag_csryw && 1 == e && _.default.checkVersions_csryw()) {
            if (this._ading_csryw) return;
            this._ading_csryw = !0;
            var n = this;
            p.default.showRewardedVideoAd_csryw(function (e) {
              e ? (t.emitListenerEvent_csryw(t.EventEnumView_csryw.StartGame_csryw), console.log("点击开始游戏 并发送消息 this.EventEnumView.StartGame")) : n._ading_csryw = !1;
            }, function () {
              n._ading_csryw = !1;
            });
          } else this.emitListenerEvent_csryw(this.EventEnumView_csryw.StartGame_csryw), console.log("点击开始游戏 并发送消息 this.EventEnumView.StartGame");
        }, e.prototype.listenerMoreGame_csryw = function () {
          var t = this;
          this.ttExport2Template_csryw || (this.ttExport2Template_csryw = f.default.createPrefab_csryw(this.moveGamePrefab, s.default, this.node),
            this.ttExport2Template_csryw.onListenerEventView_csryw(w.handleFM_csryw(function (e) {
              e == t.ttExport2Template_csryw.EventEnumView_csryw.CloseView_csryw && (t.ttExport2Template_csryw.removeView_csryw(),
                t.ttExport2Template_csryw = null, t.onEvent_ryw_QTT_MainMoveGame_Close_csryw());
            }, this))), this.ttExport2Template_csryw.showView_csryw();
        }, r([v({
          tooltip: "更多游戏预展示页面制体",
          type: cc.Prefab
        })], e.prototype, "moveGamePrefab", void 0), r([v({
          tooltip: "金币Label",
          type: cc.Label
        })], e.prototype, "labelMoney", void 0), r([v({
          tooltip: "关卡Label",
          type: cc.Label
        })], e.prototype, "labelLevel", void 0), r([v({
          tooltip: "游戏开始按钮",
          type: cc.Node
        })], e.prototype, "butStart", void 0), r([v({
          tooltip: "更多游戏按钮",
          type: cc.Node
        })], e.prototype, "butMoregame", void 0), r([v({
          tooltip: "单独广告",
          type: cc.Node
        })], e.prototype, "singleAd", void 0), e = r([m, A(), b("FrameWork组件/TT/TTMainViewTemplate")], e);
      }(i.default);
    n.default = S, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Event/EventEnum": "EventEnum",
    "../../../FrameWork/Event/EventMgr": "EventMgr",
    "../../../FrameWork/Interface/FMInterface": "FMInterface",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/User/User": "User",
    "../../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../../../FrameWork/Util/Common": "Common",
    "../../../FrameWork/Util/Utilit": "Utilit",
    "../../../FrameWork/View/ADSingle": "ADSingle",
    "../TTAPI": "TTAPI",
    "./TTExport2Template": "TTExport2Template"
  }],
  TTMoreReward: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "65fdfx/g6ZH1ooMVCsJJHoL", "TTMoreReward");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../FrameWork/Mgr/WudianMgr"),
      a = t("../../../FrameWork/Util/Utilit"),
      l = t("../../../FrameWork/Event/EventMgr"),
      u = t("../TTAPI"),
      d = cc._decorator,
      p = d.ccclass,
      y = d.property,
      h = d.disallowMultiple,
      _ = d.menu,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.rewardText = null, e.rewardBtn = null, e.adToggle = null, e.adToggleTag = null,
            e.adToggleText = null, e.skipBtn = null, e.skipOkTag = null, e.skipNoTag = null,
            e._ading_csryw = !1, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
          this.adToggle.on("click", this.onAdToggle_csryw, this), this.rewardBtn.on("click", this.onRewardBtn_csryw, this),
            this.skipBtn.on("click", this.onSkipBtn_csryw, this);
          var t = s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.getSwitch_csryw;
          switch (c.default.wudianFlag_csryw && a.default.checkVersions_csryw() || (t = 0),
            t) {
            case 0:
              this.adToggleTag.active = !1, this.adToggleText.string = "视频再次领取";
              break;

            case 1:
              this.adToggleTag.active = !0, this.adToggleText.string = "视频再次领取";
              break;

            case 2:
              this.adToggleTag.active = !1, this.adToggleText.string = "不用视频领取";
          }
          this.onAdToggleStateChange_csryw(this.adToggleTag.active), this.showBanner_csryw();
        }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {
          l.default.offTargetEvent_csryw(this);
        }, e.prototype.hideBanner_csryw = function () {
          u.default.hideBanner_csryw();
        }, e.prototype.showBanner_csryw = function () {
          u.default.showBanner_csryw();
        }, e.prototype.onAdToggle_csryw = function () {
          this._ading_csryw || (this.adToggleTag.active = !this.adToggleTag.active, this.onAdToggleStateChange_csryw(this.adToggleTag.active));
        }, e.prototype.onRewardBtn_csryw = function () {
          var t = this;
          if (!this._ading_csryw) {
            var e = this;
            this._ading_csryw = !0, u.default.showRewardedVideoAd_csryw(function (n) {
              n ? (e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_SUCCEED_csryw)) : (e._ading_csryw = !1,
                t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
            }, function () {
              e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
            });
          }
        }, e.prototype.onSkipBtn_csryw = function () {
          var t = this;
          if (!this._ading_csryw) {
            var e = this,
              n = this.adToggleTag.active,
              o = s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.getSwitch_csryw;
            c.default.wudianFlag_csryw && a.default.checkVersions_csryw() || (o = 0), 2 == o && (n = !n),
              n ? (this._ading_csryw = !0, u.default.showRewardedVideoAd_csryw(function (n) {
                n ? (e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_SUCCEED_csryw)) : (e._ading_csryw = !1,
                  t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
              }, function () {
                e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
              })) : this.emitListenerEvent_csryw(this.EventEnumView_csryw.CONTINUE_GAME_csryw);
          }
        }, e.prototype.onAdToggleStateChange_csryw = function (t) {
          var e = s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.getSwitch_csryw;
          switch (c.default.wudianFlag_csryw && a.default.checkVersions_csryw() || (e = 0),
            e) {
            case 0:
            case 1:
              t ? (this.skipOkTag.active = !0, this.skipNoTag.active = !1) : (this.skipOkTag.active = !1,
                this.skipNoTag.active = !0);
              break;

            case 2:
              t ? (this.skipOkTag.active = !1, this.skipNoTag.active = !0) : (this.skipOkTag.active = !0,
                this.skipNoTag.active = !1);
          }
        }, r([y({
          tooltip: "奖励的数量",
          type: cc.Label
        })], e.prototype, "rewardText", void 0), r([y({
          tooltip: "再次领取按钮",
          type: cc.Node
        })], e.prototype, "rewardBtn", void 0), r([y({
          tooltip: "复选框",
          type: cc.Node
        })], e.prototype, "adToggle", void 0), r([y({
          tooltip: "复选框勾勾",
          type: cc.Node
        })], e.prototype, "adToggleTag", void 0), r([y({
          tooltip: "复选框文字",
          type: cc.Label
        })], e.prototype, "adToggleText", void 0), r([y({
          tooltip: "继续按钮",
          type: cc.Node
        })], e.prototype, "skipBtn", void 0), r([y({
          tooltip: "暂时使用",
          type: cc.Node
        })], e.prototype, "skipOkTag", void 0), r([y({
          tooltip: "暂不使用",
          type: cc.Node
        })], e.prototype, "skipNoTag", void 0), e = r([p, h(), _("FrameWork组件/TT/TTMoreReward")], e);
      }(i.default);
    n.default = f, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Event/EventMgr": "EventMgr",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/Util/Utilit": "Utilit",
    "../TTAPI": "TTAPI"
  }],
  TTRelive: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "9eb03RZyMNInKsVkC6DpZ9b", "TTRelive");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../FrameWork/Util/Utilit"),
      a = t("../../../FrameWork/Mgr/WudianMgr"),
      l = t("../../../FrameWork/Event/EventMgr"),
      u = t("../TTAPI"),
      d = cc._decorator,
      p = d.ccclass,
      y = d.property,
      h = d.disallowMultiple,
      _ = d.menu,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.reliveBtn = null, e.okBtn = null, e._ading_csryw = !1, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
          this.okBtn.active = !1, this.reliveBtn.on("click", this.onReliveBtn_csryw, this),
            this.okBtn.on("click", this.onOkBtn_csryw, this);
          var t = this;
          1 == s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.reliveSwitch_csryw && c.default.checkVersions_csryw() && a.default.wudianFlag_csryw ? this.scheduleOnce(function () {
            t.okBtn.active = !0;
          }, 3) : t.okBtn.active = !0;
        }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {
          l.default.offTargetEvent_csryw(this);
        }, e.prototype.onReliveBtn_csryw = function () {
          var t = this;
          if (!this._ading_csryw) {
            var e = this;
            this._ading_csryw = !0, u.default.showRewardedVideoAd_csryw(function (n) {
              n ? (e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_SUCCEED_csryw)) : (e._ading_csryw = !1,
                t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
            }, function () {
              e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
            });
          }
        }, e.prototype.onOkBtn_csryw = function () {
          1 == s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.reliveSwitch_csryw && c.default.checkVersions_csryw() && a.default.wudianFlag_csryw ? this.emitListenerEvent_csryw(this.EventEnumView_csryw.Relive_Sure_ShareRecord_csryw) : this.emitListenerEvent_csryw(this.EventEnumView_csryw.Relive_Sure_csryw);
        }, r([y({
          tooltip: "继续游戏",
          type: cc.Node
        })], e.prototype, "reliveBtn", void 0), r([y({
          tooltip: "Ok确定按钮",
          type: cc.Node
        })], e.prototype, "okBtn", void 0), e = r([p, h(), _("FrameWork组件/TT/TTRelive")], e);
      }(i.default);
    n.default = f, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Event/EventMgr": "EventMgr",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/Util/Utilit": "Utilit",
    "../TTAPI": "TTAPI"
  }],
  TTRewardBox: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "a7980pJcclINZ2xkYn4736X", "TTRewardBox");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = cc._decorator,
      c = s.ccclass,
      a = (s.property,
        s.disallowMultiple),
      l = s.menu,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e._view_csryw = null, e._adTag_csryw = null, e;
        }
        return o(e, t), Object.defineProperty(e.prototype, "AdTag_csryw", {
            get: function () {
              return this._adTag_csryw;
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.initView_csryw = function () {
            this.node.on("click", this.onSelfClick_csryw, this);
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.init = function (t) {
            this._view_csryw = t, this._adTag_csryw = this.node.getChildByName("AdTag");
          }, e.prototype.onSelfClick_csryw = function () {
            null != this._view_csryw && this._view_csryw.onRewardBoxClick_csryw(this);
          }, e = r([c, a(), l("FrameWork组件/TT/TTRewardBox")], e);
      }(i.default);
    n.default = u, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase"
  }],
  TTReward: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "710c1bz0H1OALtMay3preGL", "TTReward");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("./TTRewardBox"),
      c = t("../../../FrameWork/Config/AppSwitchConfig"),
      a = t("../../../FrameWork/Mgr/WudianMgr"),
      l = t("../../../FrameWork/Util/Utilit"),
      u = t("../TTAPI"),
      d = cc._decorator,
      p = d.ccclass,
      y = d.property,
      h = d.disallowMultiple,
      _ = d.menu,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.boxsRoot = null, e.getKeyZone = null, e.keysRoot = null, e.getKeyBtn = null,
            e.adToggle = null, e.adToggleTag = null, e.adToggleText = null, e.skipBtn = null,
            e.skipOkTag = null, e.skipNoTag = null, e._getKeyTimes_csryw = 999999, e._ading_csryw = !1,
            e._keys_csryw = [], e._keyCount_csryw = 3, e._rewardBoxs_csryw = [], e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            this.adToggle.on("click", this.onAdToggle_csryw, this), this.getKeyBtn.on("click", this.onGetKeyBtn_csryw, this),
              this.skipBtn.on("click", this.onSkipText_csryw, this);
            var t = c.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.boxSwitch_csryw;
            switch (a.default.wudianFlag_csryw && l.default.checkVersions_csryw() || (t = 0),
              t) {
              case 0:
                this.adToggleTag.active = !1, this.adToggleText.string = "视频获得钥匙";
                break;

              case 1:
                this.adToggleTag.active = !0, this.adToggleText.string = "视频获得钥匙";
                break;

              case 2:
                this.adToggleTag.active = !1, this.adToggleText.string = "不用视频获得钥匙";
            }
            this.onAdToggleStateChange_csryw(this.adToggleTag.active);
            for (var e = [], n = 0; n < this.boxsRoot.childrenCount; n++) {
              var o = this.boxsRoot.getChildByName("box" + (n + 1)).getComponent(s.default);
              o.init(this), o.AdTag_csryw.active = !1, this._rewardBoxs_csryw.push(o), e.push(n);
            }
            for (n = 0; n < e.length; ++n) {
              var r = e[n],
                i = Math.floor(Math.random() * e.length),
                u = e[i];
              e[i] = r, e[n] = u;
            }
            for (n = 0; n < 3; ++n) this._rewardBoxs_csryw[e.shift()].AdTag_csryw.active = !0;
            for (n = 0; n < this.keysRoot.childrenCount; n++) {
              var d = this.keysRoot.getChildByName("spr" + (n + 1));
              this._keys_csryw.push(d);
            }
            this.refreshKeyState_csryw(), this.showBanner_csryw();
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.onRewardBoxClick_csryw = function (t) {
            var e = this;
            if (!this._ading_csryw)
              if (t.AdTag_csryw.active) {
                this._ading_csryw = !0;
                var n = this;
                u.default.showRewardedVideoAd_csryw(function (o) {
                  o ? (n._ading_csryw = !1, t.AdTag_csryw.active = !1, e.emitListenerEvent_csryw(e.EventEnumView_csryw.RewardedVideoAd_SUCCEEDD_csryw)) : (n._ading_csryw = !1,
                    e.emitListenerEvent_csryw(e.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
                }, function () {
                  n._ading_csryw = !1, e.emitListenerEvent_csryw(e.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
                });
              } else {
                if (this._keyCount_csryw <= 0) return;
                --this._keyCount_csryw, this.refreshKeyState_csryw();
              }
          }, e.prototype.refreshKeyState_csryw = function () {
            for (var t = 0; t < this._keys_csryw.length; ++t) {
              this._keys_csryw[t].active = t + 1 <= this._keyCount_csryw;
            }
            this.getKeyZone.active = this._keyCount_csryw <= 0 && this._getKeyTimes_csryw > 0,
              this.keysRoot.active = this._keyCount_csryw > 0 || this._getKeyTimes_csryw <= 0;
          }, e.prototype.onGetKeyBtn_csryw = function () {
            var t = this;
            if (!(this._ading_csryw || this._getKeyTimes_csryw <= 0)) {
              this._ading_csryw = !0;
              var e = this;
              u.default.showRewardedVideoAd_csryw(function (n) {
                n ? (--e._getKeyTimes_csryw, e._keyCount_csryw = 3, e.refreshKeyState_csryw(), e._ading_csryw = !1,
                  t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw)) : (e._ading_csryw = !1,
                  t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
              }, function () {
                e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.Reward_RewardedVideoAd_FAIL_csryw);
              });
            }
          }, e.prototype.onAdToggle_csryw = function () {
            this._ading_csryw || (this.adToggleTag.active = !this.adToggleTag.active, this.onAdToggleStateChange_csryw(this.adToggleTag.active));
          }, e.prototype.onSkipText_csryw = function () {
            var t = this;
            if (!this._ading_csryw) {
              var e = this,
                n = this.adToggleTag.active,
                o = c.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.boxSwitch_csryw;
              a.default.wudianFlag_csryw && l.default.checkVersions_csryw() || (o = 0), 2 == o && (n = !n),
                n ? (this._ading_csryw = !0, this.adToggleTag.active && this._getKeyTimes_csryw > 0 ? u.default.showRewardedVideoAd_csryw(function (n) {
                  n ? (--e._getKeyTimes_csryw, e._keyCount_csryw = 3, e.refreshKeyState_csryw(), e._ading_csryw = !1,
                    t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_SUCCEEDD_csryw)) : (e._ading_csryw = !1,
                    t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
                }, function () {
                  e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
                }) : (this._ading_csryw = !1, this.emitListenerEvent_csryw(this.EventEnumView_csryw.Reward_Skip_csryw))) : this.emitListenerEvent_csryw(this.EventEnumView_csryw.Reward_Skip_csryw);
            }
          }, e.prototype.onAdToggleStateChange_csryw = function (t) {
            var e = c.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.boxSwitch_csryw;
            switch (a.default.wudianFlag_csryw && l.default.checkVersions_csryw() || (e = 0),
              e) {
              case 0:
              case 1:
                t ? (this.skipOkTag.active = !0, this.skipNoTag.active = !1) : (this.skipOkTag.active = !1,
                  this.skipNoTag.active = !0);
                break;

              case 2:
                t ? (this.skipOkTag.active = !1, this.skipNoTag.active = !0) : (this.skipOkTag.active = !0,
                  this.skipNoTag.active = !1);
            }
          }, e.prototype.hideBanner_csryw = function () {
            u.default.hideBanner_csryw();
          }, e.prototype.showBanner_csryw = function () {
            u.default.showBanner_csryw();
          }, r([y({
            tooltip: "区域节点",
            type: cc.Node
          })], e.prototype, "boxsRoot", void 0), r([y({
            tooltip: "底部区域节点",
            type: cc.Node
          })], e.prototype, "getKeyZone", void 0), r([y({
            tooltip: "钥匙节点",
            type: cc.Node
          })], e.prototype, "keysRoot", void 0), r([y({
            tooltip: "获取钥匙按钮",
            type: cc.Node
          })], e.prototype, "getKeyBtn", void 0), r([y({
            tooltip: "复选框",
            type: cc.Node
          })], e.prototype, "adToggle", void 0), r([y({
            tooltip: "复选框勾勾",
            type: cc.Node
          })], e.prototype, "adToggleTag", void 0), r([y({
            tooltip: "复选框文字",
            type: cc.Label
          })], e.prototype, "adToggleText", void 0), r([y({
            tooltip: "继续按钮",
            type: cc.Node
          })], e.prototype, "skipBtn", void 0), r([y({
            tooltip: "暂时使用",
            type: cc.Node
          })], e.prototype, "skipOkTag", void 0), r([y({
            tooltip: "暂不使用",
            type: cc.Node
          })], e.prototype, "skipNoTag", void 0), e = r([p, h(), _("FrameWork组件/TT/TTReward")], e);
      }(i.default);
    n.default = f, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/Util/Utilit": "Utilit",
    "../TTAPI": "TTAPI",
    "./TTRewardBox": "TTRewardBox"
  }],
  TTShareRecord: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "a7c51uObW9KPJEpF1QPxiNG", "TTShareRecord");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../FrameWork/Util/Utilit"),
      a = t("../../../FrameWork/Mgr/WudianMgr"),
      l = t("../TTAPI"),
      u = cc._decorator,
      d = u.ccclass,
      p = u.property,
      y = u.disallowMultiple,
      h = u.menu,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.rewardText = null, e.shareBtn = null, e.closeBtn = null, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            this.closeBtn.active = !1, this.shareBtn.on("click", this.onShareBtn_csryw, this),
              this.closeBtn.on("click", this.onCloseBtn_csryw, this);
            var t = this;
            1 == s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.screenCapSwitch_csryw && c.default.checkVersions_csryw() && a.default.wudianFlag_csryw ? this.scheduleOnce(function () {
              t.closeBtn.active = !0;
            }, 3) : t.closeBtn.active = !0;
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.onShareBtn_csryw = function () {
            var t = this;
            l.default.shareRecord_csryw(function () {
              t.emitListenerEvent_csryw(t.EventEnumView_csryw.ShareRecord_SUCCEED_csryw);
            }, function () {
              t.emitListenerEvent_csryw(t.EventEnumView_csryw.ShareRecord_FAIL_csryw);
            });
          }, e.prototype.onCloseBtn_csryw = function () {
            var t = this;
            1 == s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.screenCapSwitch_csryw && c.default.checkVersions_csryw() && a.default.wudianFlag_csryw ? l.default.shareRecord_csryw(function () {
              t.emitListenerEvent_csryw(t.EventEnumView_csryw.ShareRecord_SUCCEED_csryw);
            }, function () {
              t.emitListenerEvent_csryw(t.EventEnumView_csryw.ShareRecord_FAIL_csryw);
            }) : this.emitListenerEvent_csryw(this.EventEnumView_csryw.ShareRecord_Close_csryw);
          }, r([p({
            tooltip: "奖励文本",
            type: cc.Label
          })], e.prototype, "rewardText", void 0), r([p({
            tooltip: "分享按钮",
            type: cc.Node
          })], e.prototype, "shareBtn", void 0), r([p({
            tooltip: "关闭按钮",
            type: cc.Node
          })], e.prototype, "closeBtn", void 0), e = r([d, y(), h("FrameWork组件/TT/TTShareRecord")], e);
      }(i.default);
    n.default = _, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/Util/Utilit": "Utilit",
    "../TTAPI": "TTAPI"
  }],
  TTSignIn: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "22432fVCg9G8av4+sWbe6gp", "TTSignIn");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../FrameWork/Mgr/WudianMgr"),
      a = t("../../../FrameWork/Util/Utilit"),
      l = t("../../../FrameWork/NetWork/HttpUnit"),
      u = t("../../../FrameWork/Util/LogUtils"),
      d = t("../TTAPI"),
      p = cc._decorator,
      y = p.ccclass,
      h = p.property,
      _ = p.disallowMultiple,
      f = p.menu,
      w = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.signIconRoot = null, e.signInBtn = null, e.adToggle = null, e.adToggleTag = null,
            e.adToggleText = null, e.signedTag = null, e.skipBtn = null, e.skipOkTag = null,
            e.skipNoTag = null, e._signIcons_csryw = [], e._signMasks_csryw = [], e._ading_csryw = !1,
            e._signIning_csryw = !1, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            this.adToggle.on("click", this.onAdToggle_csryw, this), this.signInBtn.on("click", this.onSignInBtn_csryw, this),
              this.skipBtn.on("click", this.onSkipBtn_csryw, this);
            for (var t = 0; t < this.signIconRoot.childrenCount; t++) {
              var e = this.signIconRoot.getChildByName("day" + (t + 1)),
                n = e.getChildByName("OK"),
                o = e.getChildByName("Mask");
              n.active = !1, o.active = !0, this._signIcons_csryw.push(n), this._signMasks_csryw.push(o);
            }
            var r = s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.signInSwitch_csryw;
            switch (c.default.wudianFlag_csryw && a.default.checkVersions_csryw() || (r = 0),
              r) {
              case 0:
                this.adToggleTag.active = !1, this.adToggleText.string = "视频双倍领取";
                break;

              case 1:
                this.adToggleTag.active = !0, this.adToggleText.string = "视频双倍领取";
                break;

              case 2:
                this.adToggleTag.active = !1, this.adToggleText.string = "不用视频领取";
            }
            this.onAdToggleStateChange_csryw(this.adToggleTag.active), this.signedTag.active = !1;
            var i = this;
            l.default.GetSignIn_csryw(function (t) {
              if (t.data) {
                t.data.is_sign;
                var e = t.data.sign_day_num;
                i.refreshSignInState_csryw(e);
              }
            }, function (t) {
              u.LogUtils.error_csryw(t);
            }), this.showBanner_csryw();
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.refreshSignInState_csryw = function (t) {
            var e = t % 7;
            if (0 == t)
              for (var n = 0; n < this._signIcons_csryw.length; ++n) this._signIcons_csryw[n].active = !1,
                this._signMasks_csryw[n].active = !1;
            else if (0 == e)
              for (n = 0; n < this._signIcons_csryw.length; ++n) this._signIcons_csryw[n].active = !0,
                this._signMasks_csryw[n].active = !1;
            else
              for (n = 0; n < this._signIcons_csryw.length; ++n) this._signIcons_csryw[n].active = n < e,
                this._signMasks_csryw[n].active = n > e;
          }, e.prototype.onSignInBtn_csryw = function () {
            var t = this;
            if (!this._signIning_csryw) {
              this._signIning_csryw = !0;
              var e = this;
              d.default.showRewardedVideoAd_csryw(function (n) {
                n ? l.default.SignIn_csryw(function (n) {
                  var o = n.code;
                  1 == o ? (t.emitListenerEvent_csryw(t.EventEnumView_csryw.Sign_SUCCEEDD_csryw),
                    l.default.GetSignIn_csryw(function (t) {
                      t.data.is_sign;
                      var n = t.data.sign_day_num;
                      e.refreshSignInState_csryw(n), e._signIning_csryw = !1;
                    }, function (t) {
                      e._signIning_csryw = !1;
                    })) : (console.log("签到失败 ： code", o), e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.Sign_FAIL_csryw));
                }, function () {
                  e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.Sign_FAIL_csryw);
                }) : (e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
              }, function () {
                e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
              });
            }
          }, e.prototype.onAdToggle_csryw = function () {
            this._signIning_csryw || (this.adToggleTag.active = !this.adToggleTag.active, this.onAdToggleStateChange_csryw(this.adToggleTag.active));
          }, e.prototype.onSkipBtn_csryw = function () {
            var t = this;
            if (!this._signIning_csryw) {
              this._signIning_csryw = !0;
              var e = this,
                n = this.adToggleTag.active,
                o = s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.signInSwitch_csryw;
              c.default.wudianFlag_csryw && a.default.checkVersions_csryw() || (o = 0), 2 == o && (n = !n),
                n ? d.default.showRewardedVideoAd_csryw(function (n) {
                  n ? l.default.SignIn_csryw(function (n) {
                    var o = n.code;
                    1 == o ? (t.emitListenerEvent_csryw(t.EventEnumView_csryw.Sign_SUCCEEDD_csryw),
                      l.default.GetSignIn_csryw(function (t) {
                        t.data.is_sign;
                        var n = t.data.sign_day_num;
                        e.refreshSignInState_csryw(n), e._signIning_csryw = !1;
                      }, function (t) {
                        e._signIning_csryw = !1;
                      })) : (console.log("签到失败 ： code", o), e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.Sign_FAIL_csryw));
                  }, function () {
                    e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.Sign_FAIL_csryw);
                  }) : (e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
                }, function () {
                  e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
                }) : l.default.SignIn_csryw(function (n) {
                  var o = n.code;
                  1 == o ? (e._signIning_csryw = !1, l.default.GetSignIn_csryw(function (t) {
                    t.data.is_sign;
                    var n = t.data.sign_day_num;
                    e.refreshSignInState_csryw(n);
                  }, function (t) {}), t.emitListenerEvent_csryw(t.EventEnumView_csryw.Sign_SUCCEEDD_csryw)) : (console.log("签到失败 ： code", o),
                    e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.Sign_FAIL_csryw));
                }, function () {
                  e._signIning_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.Sign_FAIL_csryw);
                });
            }
          }, e.prototype.onAdToggleStateChange_csryw = function (t) {
            var e = s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.signInSwitch_csryw;
            switch (c.default.wudianFlag_csryw && a.default.checkVersions_csryw() || (e = 0),
              e) {
              case 0:
              case 1:
                t ? (this.skipOkTag.active = !0, this.skipNoTag.active = !1) : (this.skipOkTag.active = !1,
                  this.skipNoTag.active = !0);
                break;

              case 2:
                t ? (this.skipOkTag.active = !1, this.skipNoTag.active = !0) : (this.skipOkTag.active = !0,
                  this.skipNoTag.active = !1);
            }
          }, e.prototype.hideBanner_csryw = function () {
            d.default.hideBanner_csryw();
          }, e.prototype.showBanner_csryw = function () {
            d.default.showBanner_csryw();
          }, r([h({
            tooltip: "签到节点",
            type: cc.Node
          })], e.prototype, "signIconRoot", void 0), r([h({
            tooltip: "领取按钮",
            type: cc.Node
          })], e.prototype, "signInBtn", void 0), r([h({
            tooltip: "复选框",
            type: cc.Node
          })], e.prototype, "adToggle", void 0), r([h({
            tooltip: "复选框勾勾",
            type: cc.Node
          })], e.prototype, "adToggleTag", void 0), r([h({
            tooltip: "复选框文字",
            type: cc.Label
          })], e.prototype, "adToggleText", void 0), r([h({
            tooltip: "已签到",
            type: cc.Node
          })], e.prototype, "signedTag", void 0), r([h({
            tooltip: "继续按钮",
            type: cc.Node
          })], e.prototype, "skipBtn", void 0), r([h({
            tooltip: "暂时使用",
            type: cc.Node
          })], e.prototype, "skipOkTag", void 0), r([h({
            tooltip: "暂不使用",
            type: cc.Node
          })], e.prototype, "skipNoTag", void 0), e = r([y, _(), f("FrameWork组件/TT/TTSignIn")], e);
      }(i.default);
    n.default = w, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/NetWork/HttpUnit": "HttpUnit",
    "../../../FrameWork/Util/LogUtils": "LogUtils",
    "../../../FrameWork/Util/Utilit": "Utilit",
    "../TTAPI": "TTAPI"
  }],
  TTStartTry: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "c8f40C/3+BAYpP/ix7j0oJ3", "TTStartTry");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../FrameWork/Mgr/WudianMgr"),
      a = t("../../../FrameWork/Util/Utilit"),
      l = t("../TTAPI"),
      u = cc._decorator,
      d = u.ccclass,
      p = u.property,
      y = u.disallowMultiple,
      h = u.menu,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.tryBtn = null, e.adToggle = null, e.adToggleTag = null, e.adToggleText = null,
            e.skipBtn = null, e.skipOkTag = null, e.skipNoTag = null, e._ading_csryw = !1, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            this.adToggle.on("click", this.onAdToggle_csryw, this), this.tryBtn.on("click", this.onRryBtnBtn_csryw, this),
              this.skipBtn.on("click", this.onSkipBtn_csryw, this);
            var t = s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.useSwitch_csryw;
            switch (c.default.wudianFlag_csryw && a.default.checkVersions_csryw() || (t = 0),
              t) {
              case 0:
                this.adToggleTag.active = !1, this.adToggleText.string = "视频试用";
                break;

              case 1:
                this.adToggleTag.active = !0, this.adToggleText.string = "视频试用";
                break;

              case 2:
                this.adToggleTag.active = !1, this.adToggleText.string = "不用视频试用";
            }
            this.onAdToggleStateChange_csryw(this.adToggleTag.active), this.showBanner_csryw();
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.onAdToggle_csryw = function () {
            this._ading_csryw || (this.adToggleTag.active = !this.adToggleTag.active, this.onAdToggleStateChange_csryw(this.adToggleTag.active));
          }, e.prototype.onRryBtnBtn_csryw = function () {
            var t = this;
            if (!this._ading_csryw) {
              var e = this;
              this._ading_csryw = !0, l.default.showRewardedVideoAd_csryw(function (n) {
                n ? (e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_SUCCEED_csryw)) : (e._ading_csryw = !1,
                  t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
              }, function () {
                e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
              });
            }
          }, e.prototype.onSkipBtn_csryw = function () {
            var t = this;
            if (!this._ading_csryw) {
              var e = this,
                n = this.adToggleTag.active,
                o = s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.useSwitch_csryw;
              c.default.wudianFlag_csryw && a.default.checkVersions_csryw() || (o = 0), 2 == o && (n = !n),
                n ? (this._ading_csryw = !0, l.default.showRewardedVideoAd_csryw(function (n) {
                  n ? (e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_SUCCEED_csryw)) : (e._ading_csryw = !1,
                    t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_UNFINISHED_csryw));
                }, function () {
                  e._ading_csryw = !1, t.emitListenerEvent_csryw(t.EventEnumView_csryw.RewardedVideoAd_FAIL_csryw);
                })) : this.emitListenerEvent_csryw(this.EventEnumView_csryw.CONTINUE_GAME_csryw);
            }
          }, e.prototype.onAdToggleStateChange_csryw = function (t) {
            var e = s.default.getInstance_csryw().getAppSwitchData_csryw().tt2cfg_csryw.useSwitch_csryw;
            switch (c.default.wudianFlag_csryw && a.default.checkVersions_csryw() || (e = 0),
              e) {
              case 0:
              case 1:
                t ? (this.skipOkTag.active = !0, this.skipNoTag.active = !1) : (this.skipOkTag.active = !1,
                  this.skipNoTag.active = !0);
                break;

              case 2:
                t ? (this.skipOkTag.active = !1, this.skipNoTag.active = !0) : (this.skipOkTag.active = !0,
                  this.skipNoTag.active = !1);
            }
          }, e.prototype.hideBanner_csryw = function () {
            l.default.hideBanner_csryw();
          }, e.prototype.showBanner_csryw = function () {
            l.default.showBanner_csryw();
          }, r([p({
            tooltip: "试用按钮",
            type: cc.Node
          })], e.prototype, "tryBtn", void 0), r([p({
            tooltip: "复选框",
            type: cc.Node
          })], e.prototype, "adToggle", void 0), r([p({
            tooltip: "复选框勾勾",
            type: cc.Node
          })], e.prototype, "adToggleTag", void 0), r([p({
            tooltip: "复选框文字",
            type: cc.Label
          })], e.prototype, "adToggleText", void 0), r([p({
            tooltip: "继续按钮",
            type: cc.Node
          })], e.prototype, "skipBtn", void 0), r([p({
            tooltip: "暂时使用",
            type: cc.Node
          })], e.prototype, "skipOkTag", void 0), r([p({
            tooltip: "暂不使用",
            type: cc.Node
          })], e.prototype, "skipNoTag", void 0), e = r([d, y(), h("FrameWork组件/TT/TTStartTry")], e);
      }(i.default);
    n.default = _, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../FrameWork/Util/Utilit": "Utilit",
    "../TTAPI": "TTAPI"
  }],
  ThumbnailImage: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "022972HxS9K4bSU4GyIT6Fm", "ThumbnailImage");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = i.property,
      a = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.label = null, e;
        }
        return o(e, t), e.prototype.start = function () {}, r([c(cc.Label)], e.prototype, "label", void 0),
          e = r([s], e);
      }(cc.Component);
    n.default = a, cc._RF.pop();
  }, {}],
  TimerUtils: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "6bf29BcCWtM6532YBz8PUL4", "TimerUtils"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.TimerUtils = void 0;
    var o = function () {
      function t() {}
      return t.loopNum_csryw = function (t, e, n, o) {
        return this.schedule_csryw(t, e, n, o);
      }, t.once_csryw = function (t, e) {
        return void 0 === e && (e = 0), this.scheduleOnce_csryw(t, e);
      }, t.loop_csryw = function (t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 0), this.schedule_csryw(t, e || .02, cc.macro.REPEAT_FOREVER, n);
      }, t.removeTimer_csryw = function (t) {
        this.unschedule_csryw(t);
      }, t.removeAllTimers_csryw = function () {
        cc.director.getScheduler().unscheduleAllForTarget(this);
      }, t.scheduleOnce_csryw = function (t, e) {
        return this.schedule_csryw(t, 0, 0, e), t;
      }, t.schedule_csryw = function (t, e, n, o) {
        return cc.director.getScheduler().schedule(t, this, e, n, o), t;
      }, t.unschedule_csryw = function (t) {
        t && cc.director.getScheduler().unschedule(t, this);
      }, t;
    }();
    n.TimerUtils = o, cc._RF.pop();
  }, {}],
  TipDialog: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "dd1d4XeUL9NorGcsv9k2vQv", "TipDialog");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      s = i.ccclass,
      c = i.property,
      a = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.textTip = null, e;
        }
        return o(e, t), e.prototype.onLoad = function () {}, e.prototype.init = function (t) {
          t && (this.textTip.string = t);
        }, e.prototype.start = function () {
          cc.tween(this.node).delay(2).to(.5, {
            opacity: 0
          }).removeSelf().start();
        }, r([c(cc.Label)], e.prototype, "textTip", void 0), e = r([s], e);
      }(cc.Component);
    n.default = a, cc._RF.pop();
  }, {}],
  TransitionScene: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "148a5XZ7c9CrZgyieVwlPCO", "TransitionScene");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Mgr/GameMgr"),
      s = t("../../../FrameWork/User/User"),
      c = t("../../../Platform/weixin/newFrame/src/event/ADPageEventEnum"),
      a = t("../../../Platform/weixin/newFrame/src/event/ADPageEventMgr"),
      l = t("../config/LevelConfig"),
      u = t("../core/CustomUser"),
      d = t("../utils/ResCenter"),
      p = t("../utils/Utils"),
      y = cc._decorator,
      h = y.ccclass,
      _ = y.property,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.plLeft = null, e.plRight = null, e.delayLoadTime = 2, e.loadTimeIndex = 0,
            e.bActionEnd = !1, e.leftDinosaurId = 0, e.rightDinosaurId = 0, e.mainHeadUrls = [],
            e.gameUrls = [], e;
        }
        return o(e, t), e.prototype.onLoad = function () {
            var t = this.getCurLevel() - 1;
            u.default.levelData = l.default.getInstance().getData(t);
            var e = u.default.levelData.LevelEnemyId;
            this.leftDinosaurId = u.default.tryDinosaurId ? u.default.tryDinosaurId : u.default.getDinosaurId(),
              this.rightDinosaurId = e, this.mainHeadUrls.push("MainSpine/dinosaur_" + this.leftDinosaurId + "/long"),
              this.mainHeadUrls.push("MainSpine/dinosaur_" + this.rightDinosaurId + "/long"),
              this.gameUrls.push("DinosaurSpine/dinosaur_" + this.leftDinosaurId + "/konglong"),
              this.gameUrls.push("DinosaurSpine/dinosaur_" + this.rightDinosaurId + "/konglong"),
              u.default.tryDinosaurId = 0, d.default.preloadBundles([d.default.subBundles[2]]);
          }, e.prototype.start = function () {
            var t = this;
            d.default.loadPrefabsInBundle(1, this.mainHeadUrls, function (e) {
              var n = cc.instantiate(e[0]),
                o = cc.instantiate(e[1]);
              t.plLeft.addChild(n), t.plRight.addChild(o), t.action();
            }), a.default.emitEvent_csryw(c.ADEvent.SHOW_BANNER);
          }, e.prototype.update = function (t) {
            u.default.bInitSubRes && this.bActionEnd && (this.bActionEnd = !1, this.loadScene());
          }, e.prototype.action = function () {
            this.bActionEnd = !0;
          }, e.prototype.loadScene = function () {
            this.preloadGameRes(), cc.director.preloadScene("FightScene");
          }, e.prototype.onDestroy = function () {}, e.prototype.preloadGameRes = function (t, e) {
            var n = this;
            u.default.assets = new u.PreloadAssets();
            p.default.randomRange(0, 4);
            d.default.loadPrefabsInBundle(2, "prefab/bgView_0", function (t) {
              u.default.assets.gameBgs = [], u.default.assets.gameBgs.push(cc.instantiate(t)),
                n._onLoadPrefabsTime();
            });
            d.default.loadPrefabsInBundle(1, this.gameUrls, function (t) {
              u.default.assets.roles = [], u.default.assets.roles.push({
                node: cc.instantiate(t[0]),
                rid: n.leftDinosaurId
              }), u.default.assets.roles.push({
                node: cc.instantiate(t[1]),
                rid: n.rightDinosaurId
              }), n._onLoadPrefabsTime();
            });
          }, e.prototype._onLoadPrefabsTime = function () {
            this.loadTimeIndex += 1, console.log("_onLoadPrefabsTime   this.loadTimeIndex = ", this.loadTimeIndex),
              this.loadTimeIndex >= this.delayLoadTime && (a.default.emitEvent_csryw(c.ADEvent.HIDE_BANNER),
                i.default.getInstance_csryw().loadFightScene());
          }, e.prototype.getCurLevel = function () {
            var t = s.default.getLeveNum_csryw(),
              e = l.default.getInstance().getDataLength();
            if (t > e && (null == (t = u.default.getRandomLevels()[u.default.getRandomLevel()]) || void 0 == t)) {
              for (var n = [], o = 0; o < e; o++) n.push(o + 1);
              Math.random(), n = n.sort(function (t, e) {
                return Math.round(Math.random()) ? 1 : -1;
              }), u.default.setRandomLevel(0), t = n[u.default.getRandomLevel()], u.default.setRandomLevels(n);
            }
            return console.log("getCurLevel  levelNum=", t), u.default.setLevelModel(t), t;
          }, r([_(cc.Node)], e.prototype, "plLeft", void 0), r([_(cc.Node)], e.prototype, "plRight", void 0),
          e = r([h], e);
      }(cc.Component);
    n.default = f, cc._RF.pop();
  }, {
    "../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../FrameWork/User/User": "User",
    "../../../Platform/weixin/newFrame/src/event/ADPageEventEnum": "ADPageEventEnum",
    "../../../Platform/weixin/newFrame/src/event/ADPageEventMgr": "ADPageEventMgr",
    "../config/LevelConfig": "LevelConfig",
    "../core/CustomUser": "CustomUser",
    "../utils/ResCenter": "ResCenter",
    "../utils/Utils": "Utils"
  }],
  UmengMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "8a7ae6tdfhBgpuxR3eH1jyX", "UmengMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.UmengMgr = n.LookVideoType = n.StatsFrameWorkEvent = void 0;
    var o, r = t("../Util/AppPlatform"),
      i = t("../Event/EventMgr"),
      s = t("../Event/EventEnum");
    (function (t) {
      t.ReportAdClickSuccess_csryw = "ReportAdClickSuccess", t.ReportAdClickFail_csryw = "ReportAdClickFail",
        t.ReportAdClickStart_csryw = "ReportAdClickStart", t.ReportLaunchOptions_csryw = "ReportLaunchOptions",
        t.LogReportInfo_csryw = "LogReportInfo", t.LogReportError_csryw = "LogReportError",
        t.LoginReportInfo_csryw = "LoginReportInfo", t.GameEventLVInto_csryw = "Event_LVInto",
        t.GameEventLVFinish_csryw = "Event_LVFinish", t.Event_Commerce_csryw = "Event_Commerce",
        t.Event_Custom_csryw = "Event_Custom", t.Event_DinosaurFinish = "Event_DinosaurFinish",
        t.Total_assembleNumber = "Total_assembleNumber", t.Total_unlockNumber = "Total_unlockNumber",
        t.Total_buyNumber = "Total_buyNumber", t.Total_unlockvideoNumber = "Total_unlockvideoNumber",
        t.Total_videoNumber = "Total_videoNumber", t.ReportEnterGame = "ReportEnterGame",
        t.ReportGameFail = "ReportGameFail", t.ReportGameSuccess = "ReportGameSuccess",
        t.ReportGameRelive = "ReportGameRelive", t.ReportSelectArmor = "ReportSelectArmor",
        t.ReportSelectHelmet = "ReportSelectHelmet", t.ReportSelectAttack = "ReportSelectAttack",
        t.ReportSelectAll = "ReportSelectAll", t.ReportGameTry = "ReportGameTry", t.ReportHeroUnlock = "ReportHeroUnlock",
        t.ReportHeroUsing = "ReportHeroUsing", t.ReportLaunchUnlockClick = "ReportLaunchUnlockClick",
        t.ReportClickStartButton = "ReportClickStartButton", t.ReportCrazyView = "ReportCrazyView",
        t.ReportTransitionView = "ReportTransitionView", t.ReportLobbyEnter = "ReportLobbyEnter",
        t.ReportGuLieUnlocked = "ReportGuLieUnlocked";
    })(o = n.StatsFrameWorkEvent || (n.StatsFrameWorkEvent = {})),
    function (t) {
      t[t.none = 0] = "none", t[t.addMoney = 1] = "addMoney", t[t.doubeSettle = 2] = "doubeSettle",
        t[t.addHp = 3] = "addHp", t[t.addAtk = 4] = "addAtk";
    }(n.LookVideoType || (n.LookVideoType = {}));
    var c = function () {
      function t() {}
      return t.sendEvent_csryw = function (e, n) {
        r.default.is_WECHAT_GAME_csryw() && t.uma_trackEvent(e, n), i.default.emitEvent_csryw(s.ryw_Event.ryw_Umeng_csryw, {
          event: e
        });
      }, t.sendGameEventLvInto_csryw = function (e) {
        t.sendEvent_csryw(o.GameEventLVInto_csryw, {
          level: e
        });
      }, t.sendGameEventLvFinish_csryw = function (e, n, r, i) {
        var s = "win";
        n || (s = "lose");
        var c = {};
        if (c.level = e, c.status = s, c.duration = r, i)
          for (var a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              var l = i[a];
              "status" == a ? l && (c.status = "home") : c[a] = l;
            }
        t.sendEvent_csryw(o.GameEventLVFinish_csryw, c);
      }, t.sendEvent_Commerce_csryw = function (e) {
        t.sendEvent_csryw(o.Event_Commerce_csryw, e);
      }, t.sendEvent_Custom_csryw = function (e) {
        t.sendEvent_csryw(o.Event_Custom_csryw, e);
      }, t.sendReportLaunchOptions_csryw = function (e, n, r) {
        t.sendEvent_csryw(o.ReportLaunchOptions_csryw, {
          scene: e,
          dqip: n,
          ipxq: r
        });
      }, t.sendReportAdClickStart_csryw = function (e, n) {
        t.sendEvent_csryw(o.ReportAdClickStart_csryw, {
          title: e,
          appid: String(n)
        });
      }, t.sendReportAdClickSuccess_csryw = function (e, n) {
        t.sendEvent_csryw(o.ReportAdClickSuccess_csryw, {
          title: e,
          appid: String(n)
        });
      }, t.sendReportAdClickFail_csryw = function (e, n) {
        t.sendEvent_csryw(o.ReportAdClickFail_csryw, {
          title: e,
          appid: String(n)
        });
      }, t.sendLogReportInfo_csryw = function (e) {
        t.sendEvent_csryw(o.LogReportInfo_csryw, {
          info: e
        });
      }, t.sendLogReportError_csryw = function (e) {
        t.sendEvent_csryw(o.LogReportError_csryw, {
          info: e
        });
      }, t.sendLoginReportInfo_csryw = function (e, n, r) {
        t.sendEvent_csryw(o.LoginReportInfo_csryw, {
          type: e,
          state: n,
          info: r
        });
      }, t.uma_trackEvent = function (t, e) {
        r.default.is_WECHAT_GAME_csryw() && (window.wx.uma ? window.wx.uma.trackEvent(t, e) : LogUtils.error_csryw("统计事件 无友盟"));
      }, t;
    }();
    n.UmengMgr = c, cc._RF.pop();
  }, {
    "../Event/EventEnum": "EventEnum",
    "../Event/EventMgr": "EventMgr",
    "../Util/AppPlatform": "AppPlatform"
  }],
  UnlimitedRangeThrowing: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "af6a94zBYNFZ6QNpSubxRpg", "UnlimitedRangeThrowing");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../CharacterActCollider"),
      s = cc._decorator,
      c = s.ccclass,
      a = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.speed = 30, e;
        }
        return o(e, t), e.prototype.start = function () {}, e.prototype.init = function (t) {
          this.char = t.attacker, this.node.group = t.attacker.atkGroup, this.damageInfo = t;
        }, e.prototype.update = function (t) {
          this.damageInfo && (this.node.x += this.damageInfo.direction * this.speed, this.char && (0 != this.isMapRange() && 0 != this.isAttackRange() || this.node.isValid && this.node.removeFromParent()));
        }, e.prototype.isMapRange = function () {
          return !(this.node.x < this.char.camera.getBorderLeftX() - 100 || this.node.x > this.char.camera.getBorderRightX() + 100);
        }, e.prototype.isAttackRange = function () {
          return !0;
        }, e.prototype.onCollisionEnter = function (t, e) {
          if (t.node.name.indexOf("beatArea") >= 0) {
            var n = t.node.getComponent(i.default);
            if (n) {
              var o = n.character;
              o.fsmAct.isDefence() ? o.fsmAct.currentState.repeatStateCall(this.damageInfo) : o.fsmAct.forceBeaten(this.damageInfo);
            }
          }
        }, r([a(cc.Integer)], e.prototype, "speed", void 0), e = r([c], e);
      }(cc.Component);
    n.default = l, cc._RF.pop();
  }, {
    "../CharacterActCollider": "CharacterActCollider"
  }],
  User: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "a1a5ei05EVBtYVLpdIe0BNl", "User"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.UserGameData = void 0;
    var o = t("../Event/EventMgr"),
      r = t("../Event/EventEnum"),
      i = t("../../Game/Script/core/CustomUser"),
      s = function () {
        return function () {
          this.levelNum = 1, this.moneyNum = 0, this.crystalNum = 0, this.unlockedItem = [],
            this.usedItem = -1, this.customData = new i.CustomData();
        };
      }();
    n.UserGameData = s;
    var c = function () {
      function t() {}
      return Object.defineProperty(t, "isLogin_csryw", {
          get: function () {
            return "" != t.code_csryw || "" != t.token_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), t.getSaveData_csryw = function () {
          return JSON.stringify(t._gameData_csryw);
        }, t.testInitUser_csryw = function () {
          t._gameData_csryw.levelNum = 1, t._gameData_csryw.moneyNum = 1e3, t._gameData_csryw.crystalNum = 1e3;
        }, t.initiUser_csryw = function (e) {
          if (console.log("*****************************  User initUser  **************************************  "),
            console.log(e), e && 0 != e) {
            if (t._gameData_csryw.levelNum = e.levelNum, t._gameData_csryw.moneyNum = e.moneyNum,
              t._gameData_csryw.crystalNum = e.crystalNum, null != e.unlockedItem)
              for (var n = e.unlockedItem, o = 0; o < n.length; ++o) t._gameData_csryw.unlockedItem.push(n[o]);
            null != e.usedItem && (t._gameData_csryw.usedItem = e.usedItem);
          }
          i.default.init(e);
        }, t.setLeveNum_csryw = function (e) {
          t._gameData_csryw.levelNum = e;
        }, t.getLeveNum_csryw = function () {
          return t._gameData_csryw.levelNum;
        }, t.addMoney_csryw = function (e) {
          e = Math.ceil(e);
          var n = t._gameData_csryw.moneyNum;
          t._gameData_csryw.moneyNum += e, o.default.emitEvent_csryw(r.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, {
            curr: t._gameData_csryw.moneyNum,
            last: n
          });
        }, t.subMoney_csryw = function (e) {
          e = Math.ceil(e);
          var n = t._gameData_csryw.moneyNum;
          t._gameData_csryw.moneyNum -= e, t._gameData_csryw.moneyNum < 0 && (t._gameData_csryw.moneyNum = 0),
            o.default.emitEvent_csryw(r.ryw_Event.ryw_Game_OnUserMoneyChange_csryw, {
              curr: t._gameData_csryw.moneyNum,
              last: n
            });
        }, t.getMoney_csryw = function () {
          return t._gameData_csryw.moneyNum;
        }, t.addCrystal_csryw = function (e) {
          e = Math.ceil(e);
          var n = t._gameData_csryw.crystalNum;
          t._gameData_csryw.crystalNum += e, o.default.emitEvent_csryw(r.ryw_Event.ryw_Game_OnUserCrystalChange_csryw, {
            curr: t._gameData_csryw.crystalNum,
            last: n
          });
        }, t.subCrystal_csryw = function (e) {
          e = Math.ceil(e);
          var n = t._gameData_csryw.crystalNum;
          t._gameData_csryw.crystalNum -= e, t._gameData_csryw.crystalNum < 0 && (t._gameData_csryw.crystalNum = 0),
            o.default.emitEvent_csryw(r.ryw_Event.ryw_Game_OnUserCrystalChange_csryw, {
              curr: t._gameData_csryw.crystalNum,
              last: n
            });
        }, t.getCrystal_csryw = function () {
          return t._gameData_csryw.crystalNum;
        }, t.getItemUnlocked_csryw = function () {
          for (var e = new Array(), n = 0; n < t._gameData_csryw.unlockedItem.length; ++n) e.push(t._gameData_csryw.unlockedItem[n]);
          return e;
        }, t.itemIsUnlocked_csryw = function (e) {
          for (var n = 0; n < t._gameData_csryw.unlockedItem.length; ++n)
            if (t._gameData_csryw.unlockedItem[n] == e) return !0;
          return !1;
        }, t.unlockItem_csryw = function (e) {
          t.itemIsUnlocked_csryw(e) ? console.log("商店重复解锁 id : ", e) : (t._gameData_csryw.unlockedItem.push(e),
            o.default.emitEvent_csryw(r.ryw_Event.ryw_Game_OnUserUnlockedStore_csryw, {
              unlocked: e
            }));
        }, Object.defineProperty(t, "curUsedItem_csryw", {
          get: function () {
            return t._gameData_csryw.usedItem;
          },
          set: function (e) {
            t._gameData_csryw.usedItem = e;
          },
          enumerable: !1,
          configurable: !0
        }), t.code_csryw = "", t.openId_csryw = "", t.token_csryw = null, t.nickName_csryw = "",
        t.gender_csryw = 0, t._gameData_csryw = new s(), t;
    }();
    n.default = c, cc._RF.pop();
  }, {
    "../../Game/Script/core/CustomUser": "CustomUser",
    "../Event/EventEnum": "EventEnum",
    "../Event/EventMgr": "EventMgr"
  }],
  Utilit: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "61c44zlHUFAS7qfo4uDNl9l", "Utilit"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../Config/AppConfig"),
      r = t("./AppPlatform"),
      i = t("../Config/AppSwitchConfig"),
      s = function () {
        function t() {}
        return t.random_csryw = function (t) {
            return Math.floor(Math.random() * t);
          }, t.convertDesignToFrameSize_csryw = function (t) {
            var e = t.convertToWorldSpace(cc.v2(0, t.height)),
              n = t.width,
              o = cc.view.getFrameSize(),
              r = cc.view.getVisibleSize(),
              i = cc.director.getScene().getChildByName("Canvas"),
              s = 1,
              c = 0,
              a = 0;
            if (i) {
              var l = i.getComponent(cc.Canvas);
              if (l.fitWidth && l.fitHeight) {
                var u = o.width / r.width,
                  d = o.height / r.height;
                u < d ? (s = u, a = r.width, c = o.height * r.width / o.width) : (s = d, c = r.height,
                  a = o.width * r.height / o.height), c = (c - r.height) / 2, a = (a - r.width) / 2;
              } else l.fitWidth ? s = o.width / r.width : l.fitHeight && (s = o.height / r.height);
            }
            var p = r.height - e.y + c,
              y = e.x * s + a,
              h = p * s,
              _ = n * s,
              f = {};
            return f.left = y, f.top = h, f.width = _, f;
          }, t.colorHex2Rgb_csryw = function (t) {
            var e = cc.color(75, 154, 228);
            if (6 == t.length) {
              var n = parseInt("0x" + t.slice(0, 2)),
                o = parseInt("0x" + t.slice(2, 4)),
                r = parseInt("0x" + t.slice(4, 6));
              e.r = n, e.g = o, e.b = r;
            }
            return e;
          }, t.checkVersions_csryw = function () {
            var t = o.default.Versions_csryw;
            return null === t || "" === t || (r.default.is_TT_GAME_csryw() ? t === i.default.getInstance_csryw().getAppSwitchData_csryw().ttcfg_csryw.ttversions_csryw : r.default.is_OPPO_GAME_csryw() ? t === i.default.getInstance_csryw().getAppSwitchData_csryw().oppocfg_csryw.oppoversions_csryw : r.default.is_QQ_PLAY_csryw() ? t === i.default.getInstance_csryw().getAppSwitchData_csryw().qqcfg_csryw.qqversions_csryw : r.default.is_WECHAT_GAME_csryw() ? t === i.default.getInstance_csryw().getAppSwitchData_csryw().version_csryw : !r.default.is_WECHAT_GAME_csryw() || t === i.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.vivoversions_csryw);
          }, t.ryw_OriginStageWidth_csryw = 1334, t.ryw_OriginStageHeight_csryw = 750, t.ryw_grayscaleMat_csryw = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0],
          t;
      }();
    n.default = s, cc._RF.pop();
  }, {
    "../Config/AppConfig": "AppConfig",
    "../Config/AppSwitchConfig": "AppSwitchConfig",
    "./AppPlatform": "AppPlatform"
  }],
  Utils: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "64b93keluJFrqvS2+QUxLyE", "Utils"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = function () {
      function t() {}
      return t.randomRange = function (t, e) {
        return Math.round(Math.random() * (e - t)) + t;
      }, t.randomMax = function (t) {
        return Math.round(Math.random() * t);
      }, t.floatRandomRange = function (t, e) {
        return Math.random() * (e - t) + t;
      }, t.vt2distance = function (t, e, n, o) {
        return Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - o, 2));
      }, t.searchStr = function (t, e) {
        return t.indexOf(e) >= 0;
      }, t.findChild = function (t, e) {
        for (var n = e.split("/"), o = 0; o < n.length; o++)
          if (e = n[o], null == (t = t.getChildByName(e))) return null;
        return t;
      }, t.getCenterVec2 = function (t, e) {
        var n = cc.v2();
        return cc.Vec2.add(n, t, e), n.mulSelf(.5), n;
      }, t.shake = function (t, e, n, o) {
        if (void 0 === e && (e = .1), void 0 === n && (n = 1), void 0 === o && (o = 5),
          0 == t.getNumberOfRunningActions()) {
          t.getPosition();
          var r = cc.sequence(cc.moveBy(e, o, o), cc.moveBy(e, o, -o), cc.moveBy(e, -o, -o), cc.moveBy(e, -o, o), cc.moveBy(e, 0, 0));
          t.stopAllActions(), t.runAction(cc.repeat(r, n));
        }
      }, t.fadeIn = function (t, e) {
        void 0 === e && (e = .2), t.opacity = 0, t.runAction(cc.fadeIn(e));
      }, t.getTimeStr = function (t) {
        var e = "",
          n = Math.floor(t / 3600).toString();
        1 == n.length && (n = "0" + n), e = n;
        var o = Math.floor(t / 60 % 60).toString();
        1 == o.length && (o = "0" + o), e += ":" + o;
        var r = Math.floor(t % 60).toString();
        return 1 == r.length && (r = "0" + r), e += ":" + r;
      }, t.getXdistance = function (t, e) {
        return Math.abs(t.x - e.x);
      }, t.debug = !1, t;
    }();
    n.default = o, cc._RF.pop();
  }, {}],
  VIVOAPI: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "08928uow1VAept/ZcH0nf9M", "VIVOAPI"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../FrameWork/Util/AppPlatform"),
      r = t("../../FrameWork/Config/AppSwitchConfig"),
      i = t("../../FrameWork/Config/AppConfig"),
      s = function () {
        function t() {}
        return Object.defineProperty(t, "BannerInstance_csryw", {
            get: function () {
              return this._banner_csryw;
            },
            enumerable: !1,
            configurable: !0
          }), t.Login_csryw = function (t, e) {
            window.qg.getSystemInfoSync().platformVersionCode >= 1053 ? (console.log("vivo 开始登陆 >= 1053"),
              window.qg.login().then(function (n) {
                if (n.data.token) {
                  var o = n.data.token;
                  t(o, !0), console.log("vivo 登陆成功,获取到 token : " + o);
                } else console.log("登录失败 res.data.token 为 null"), e();
              }, function (t) {
                console.log("登录失败" + JSON.stringify(t)), e();
              })) : (console.log("vivo 开始登陆 < 1053"), window.qg.authorize({
              type: "token",
              success: function (n) {
                window.qg.getProfile({
                  token: n.accessToken,
                  success: function (e) {
                    console.log("openid获取成功", e.openid), t(e.openid, !1);
                  },
                  fail: function (t, n) {
                    console.log("获取openid失败 : " + n), e();
                  }
                });
              },
              fail: function (t, n) {
                console.log("登录失败" + n), e();
              }
            }));
          }, t.showDialog_csryw = function (t, e, n, o, r, i) {
            window.qg.showDialog({
              title: t,
              message: e,
              buttons: n,
              success: function (t) {
                console.log("handling callback"), o();
              },
              cancel: function () {
                console.log("handling cancel"), r();
              },
              fail: function (t, e) {
                console.log("handling fail, code = " + e), i();
              }
            });
          }, t.createRewardedVideoAd_csryw = function () {
            o.default.is_VIVO_GAME_csryw() && (t.rewardedAd_csryw = window.qg.createRewardedVideoAd({
              posId: t.adUnitId_csryw,
              style: {}
            }), t.rewardedAd_csryw.onError(function (t) {
              switch (t.errCode) {
                case -3:
                  console.log("激励广告加载失败---调用太频繁", JSON.stringify(t));
                  break;

                case -4:
                  console.log("激励广告加载失败--- 一分钟内不能重复加载", JSON.stringify(t));
                  break;

                case 30008:
                  break;

                default:
                  console.log("激励广告展示失败"), console.log(JSON.stringify(t));
              }
            }), t.rewardedAd_csryw.onLoad(function () {
              var e = t.rewardedAd_csryw.show();
              e && e.then(function () {
                console.log("激励广告展示成功");
              }).catch(function (e) {
                console.log("激励广告展示失败" + JSON.stringify(e)), t.onFailed();
              });
            }), t.rewardedAd_csryw.onClose(function (e) {
              e && e.isEnded ? (console.log("正常播放结束，可以下发游戏奖励"), t.onAdClose(!0)) : (console.log("播放中途退出，不下发游戏奖励"),
                t.onAdClose(!1));
            }));
          }, t.showRewardedVideoAd_csryw = function (e, n) {
            if (o.default.is_VIVO_GAME_csryw()) {
              if (t.onAdClose = e, t.onFailed = n, console.log("---------------------------------- VIVOAPI.rewardedAd:", t.rewardedAd_csryw + ",VIVOAPI.rewardedAdNum:", t.rewardedAdNum_csryw),
                0 == t.rewardedAdNum_csryw) t.createRewardedVideoAd_csryw();
              else {
                var r = t.rewardedAd_csryw.load();
                r && r.catch(function (t) {
                  console.log("激励广告load失败" + JSON.stringify(t)), n();
                });
              }
              t.rewardedAdNum_csryw = 1, console.log("近来showRewardedVideoAd");
            }
          }, t.showBannerAd_csryw = function () {
            if (o.default.is_VIVO_GAME_csryw()) {
              console.log("===========bannerAd showBanerAd");
              var e = window.qg.getSystemInfoSync();
              e.screenWidth, e.screenHeight;
              this.mBannerAd_csryw = window.qg.createBannerAd({
                posId: t.bannerAdUnitId_csryw,
                style: {}
              });
              var n = this.mBannerAd_csryw.show();
              n && n.then(function () {
                console.log("banner广告展示成功");
              }).catch(function (t) {
                switch (t.code) {
                  case 30003:
                    console.log("新用户7天内不能曝光Banner，请将手机时间调整为7天后，退出游戏重新进入");
                    break;

                  case 30009:
                    console.log("10秒内调用广告次数超过1次，10秒后再调用");
                    break;

                  case 30002:
                    console.log("加载广告失败，重新加载广告");
                    break;

                  default:
                    console.log("banner广告展示失败"), console.log(JSON.stringify(t));
                }
              }), this.mBannerAd_csryw.onError(function (t) {
                console.log("Banner广告加载失败111:" + JSON.stringify(t));
              });
            }
          }, t.hideBannerAd_csryw = function () {
            this.mBannerAd_csryw ? (console.log("===========bannerAd 隐藏"), this.mBannerAd_csryw.hide(),
              this.mBannerAd_csryw.destroy(), this.mBannerAd_csryw = null) : console.log("===========bannerAd 为空");
          }, t.navigateToMiniProgram_csryw = function (t, e, n, r, s) {
            o.default.is_VIVO_GAME_csryw() && (console.log("vivo 跳转游戏： " + t), window.qg.navigateToMiniGame({
              pkgName: t,
              path: e,
              extraData: {
                from: i.default.AppID_csryw
              },
              envVersion: "release",
              success: function (t) {
                n && n(t);
              },
              fail: function (t) {
                r && r(t);
              },
              complete: function (t) {
                s && s(t);
              }
            }));
          }, t.showInterstitialAd_csryw = function (e, n) {
            if (o.default.is_VIVO_GAME_csryw()) {
              var r = window.qg.createInterstitialAd({
                posId: t.InsAdUnitId_csryw
              });
              r.onLoad(function () {
                console.log("插屏广告加载完成");
              }), r.onClose(function () {
                e && e();
              }), r.onError(function (t) {
                console.log("插屏广告拉取失败", JSON.stringify(t)), n && n();
              }), r.show().then(function () {
                console.log("插屏广告显示成功");
              }).catch(function (t) {
                n && n();
              });
            } else e && e();
          }, t.getLaunchOptionsSync_csryw = function () {
            return {};
          }, t.share_csryw = function (t) {
            o.default.is_VIVO_GAME_csryw() && window.qg.share({
              success: function () {
                null != t && t(!0), window.qg.showToast({
                  message: "分享成功"
                });
              },
              fail: function (t, e) {
                window.qg.showToast({
                  message: "分享失败"
                });
              },
              cancel: function () {
                window.qg.showToast({
                  message: "分享失败"
                });
              },
              complete: function () {}
            });
          }, t.createDesktopIcon_csryw = function (t, e) {
            o.default.is_VIVO_GAME_csryw() ? window.qg.hasShortcutInstalled({
              success: function (n) {
                0 == n ? window.qg.installShortcut({
                  success: function () {
                    t && t();
                  },
                  fail: function (t) {
                    for (var n in e && e(), console.log("创建桌面图标失败！！！！", t), t) console.log(n, t);
                  },
                  complete: function () {}
                }) : (console.log("桌面图标已存在！！！！"), e && e());
              },
              fail: function (t) {
                for (var n in e && e(), console.log("判断桌面图标是否存在失败！！！", t), t) console.log(n, t);
              },
              complete: function () {}
            }) : e && e();
          }, t.tryShowNativeAd_csryw = function () {
            var t = r.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.yuanshengSwitch_csryw,
              e = r.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.vivoversions_csryw;
            return 1 == t && e == i.default.Versions_csryw;
          }, t.tryPopCreateDestopIcon_csryw = function (e, n) {
            o.default.is_VIVO_GAME_csryw() && 1 == r.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.addToDesktop_csryw ? t.createDesktopIcon_csryw(e, n) : null != n && n();
          }, t.tryShowInsAd_csryw = function (e, n) {
            1 == r.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.chapingSwitch_csryw ? 100 * Math.random() <= r.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.chaping_csryw ? t.showInterstitialAd_csryw(function () {
              e && e();
            }, function () {
              n && n();
            }) : n && n() : n && n();
          }, t.LoadCahcedNativeAd_csryw = function () {
            t._cachedNativeAd_csryw && (t._cachedNativeAd_csryw.destroy(), t._cachedNativeAd_csryw = null),
              t._cachedAdItem_csryw = null, t._cachedNativeAd_csryw = window.qg.createNativeAd({
                posId: t.nativeAdId_csryw
              }), t._cachedNativeAd_csryw.load(), ++t._tryLoadCount_csryw, console.log("缓存 原生广告 开始加载");
            t._cachedNativeAd_csryw.onLoad(function (e) {
              console.log("缓存 原生广告 加载成功：", e);
              for (var n = e.adList, o = 0; o < n.length; ++o) {
                var r = n[o];
                for (var i in console.log("缓存 原生广告 数据：", o), r) console.log(i, r[i]);
              }
              if (t._cachedAdItem_csryw = n[Math.floor(Math.random() * n.length)], null != t._cachedAdItem_csryw) {
                for (o = 0; o < t._cachedAdItem_csryw.imgUrlList.length; ++o) console.log("缓存 原生广告 imgUrlList : ", o + " ", t._cachedAdItem_csryw.imgUrlList[o]);
                for (var s = t._cachedAdItem_csryw.imgUrlList, c = 0; c < s.length; ++c) {
                  var a = s[c];
                  if (t._cachedimgUrl_csryw = a, null != t._cachedimgUrl_csryw && "" != t._cachedimgUrl_csryw) break;
                }
                null != t._cachedimgUrl_csryw && "" != t._cachedimgUrl_csryw ? console.log("缓存 原生广告  加载图片", t._cachedimgUrl_csryw) : (console.log("缓存 原生广告 加载失败 imgulr is : ", t._cachedimgUrl_csryw),
                  t._cachedNativeAd_csryw.destroy(), t._cachedNativeAd_csryw = null, setTimeout(function () {
                    t.LoadCahcedNativeAd_csryw();
                  }, 2500));
              }
            }), t._cachedNativeAd_csryw.onError(function (e) {
              for (var n in console.log("缓存 原生广告 加载失败：", e), e) console.log(n, e[n]);
              t._cachedNativeAd_csryw.destroy(), t._cachedNativeAd_csryw = null, setTimeout(function () {
                t.LoadCahcedNativeAd_csryw();
              }, 5e3);
            });
          }, t.hasShortcutInstalled_csryw = function (t, e) {
            window.qg.hasShortcutInstalled({
              success: function (e) {
                0 == e ? (console.log("桌面图标不存在！！！！"), t && t(!1)) : (console.log("桌面图标已存在！！！！"),
                  t && t(!0));
              },
              fail: function (t) {
                for (var n in e && e(), console.log("判断桌面图标是否存在失败！！！", t), t) console.log(n, t);
              },
              complete: function () {}
            });
          }, t.adUnitId_csryw = "", t.bannerAdUnitId_csryw = "", t.nativeAdId_csryw = "",
          t.InsAdUnitId_csryw = "", t.rewardedAd_csryw = null, t.rewardedAdNum_csryw = 0,
          t._banner_csryw = null, t.mBannerAd_csryw = null, t._cachedNativeAd_csryw = null,
          t._cachedAdItem_csryw = null, t._cachedimgUrl_csryw = null, t._tryLoadCount_csryw = 5,
          t;
      }();
    n.default = s, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppConfig": "AppConfig",
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Util/AppPlatform": "AppPlatform"
  }],
  VIVOGameSettleViewTemplate: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "81bcc6KzqlO9Ypj27bufhkD", "VIVOGameSettleViewTemplate");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("./VVNativeAd1View"),
      c = t("../VIVOAPI"),
      a = t("../../../FrameWork/Util/Common"),
      l = t("../../../FrameWork/Interface/FMInterface"),
      u = cc._decorator,
      d = u.ccclass,
      p = u.property,
      y = u.disallowMultiple,
      h = u.menu,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.clickBut = null, e.vvNativeAdPrefab = null, e.winTitle = null, e.winIcon = null,
            e.failTitle = null, e.failIcon = null, e.isWin_csryw = !1, e.TimerOut = !0, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            var t = this;
            this.clickBut.on("click", this._onListenerClickButtom_csryw, this), c.default.tryShowNativeAd_csryw() && (this.vvNativeAd = a.default.createPrefab_csryw(this.vvNativeAdPrefab, s.default, this.node),
              this.vvNativeAd.onListenerEventView_csryw(l.handleFM_csryw(function (e) {
                console.log("======went1"), e == t.vvNativeAd.EventEnumView_csryw.VIVONatice && (console.log("======Native!!!!"),
                  c.default.showInterstitialAd_csryw(function () {
                    t.TimerOut = !1, t.showBanner_csryw();
                  }, function () {
                    t.TimerOut = !1, t.showBanner_csryw();
                  }));
              }, this)));
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.showBanner_csryw = function () {
            c.default.showBannerAd_csryw();
          }, e.prototype.hideBanner_csryw = function () {
            c.default.hideBannerAd_csryw();
          }, e.prototype._onListenerClickButtom_csryw = function () {
            this.TimerOut || (this.unscheduleAllCallbacks(), this.onLisnterClickCall_csryw());
          }, e.prototype.onLisnterClickCall_csryw = function () {
            this.hideBanner_csryw(), this.emitListenerEvent_csryw(this.EventEnumView_csryw.GameFromSettle_csryw);
          }, e.prototype.updateOpenViewData_csryw = function (t, e) {
            this._initView_csryw(), this.isWin_csryw = t, this.winData_csryw = e, t ? (this.winTitle.active = !0,
              this.winIcon.active = !0, this.failTitle.active = !1, this.failIcon.active = !1) : (this.winTitle.active = !1,
              this.winIcon.active = !1, this.failTitle.active = !0, this.failIcon.active = !0);
          }, r([p({
            tooltip: "下一步按钮",
            type: cc.Node
          })], e.prototype, "clickBut", void 0), r([p({
            tooltip: "原生界面",
            type: cc.Prefab
          })], e.prototype, "vvNativeAdPrefab", void 0), r([p({
            tooltip: "胜利标题",
            type: cc.Node
          })], e.prototype, "winTitle", void 0), r([p({
            tooltip: "胜利Icon",
            type: cc.Node
          })], e.prototype, "winIcon", void 0), r([p({
            tooltip: "失败标题",
            type: cc.Node
          })], e.prototype, "failTitle", void 0), r([p({
            tooltip: "失败Icon",
            type: cc.Node
          })], e.prototype, "failIcon", void 0), e = r([d, y(), h("FrameWork组件/VIVO/VIVOGameSettleViewTemplate")], e);
      }(i.default);
    n.default = _, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Interface/FMInterface": "FMInterface",
    "../../../FrameWork/Util/Common": "Common",
    "../VIVOAPI": "VIVOAPI",
    "./VVNativeAd1View": "VVNativeAd1View"
  }],
  VIVOGameWin: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "b380bsqysVE1JaE/c8Ar0zy", "VIVOGameWin");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../VIVOAPI"),
      s = t("../../../FrameWork/Mgr/GameMgr"),
      c = cc._decorator,
      a = c.ccclass,
      l = c.property,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.clickBut = null, e.TimerOut = !0, e;
        }
        return o(e, t), e.prototype.onLoad = function () {
          this.clickBut.on("click", this._onListenerClickButtom, this);
        }, e.prototype.start = function () {
          var t = this;
          i.default.showInterstitialAd_csryw(function () {
            t.TimerOut = !1, i.default.showBannerAd_csryw();
          }, function () {
            t.TimerOut = !1, i.default.showBannerAd_csryw();
          });
        }, e.prototype._onListenerClickButtom = function () {
          this.TimerOut || (this.unscheduleAllCallbacks(), this.onLisnterClickCall());
        }, e.prototype.onLisnterClickCall = function () {
          s.default.getInstance_csryw().onGameWinToScene_csryw();
        }, e.prototype.onDestroy = function () {
          i.default.hideBannerAd_csryw();
        }, r([l({
          tooltip: "下一步按钮",
          type: cc.Node
        })], e.prototype, "clickBut", void 0), e = r([a], e);
      }(cc.Component);
    n.default = u, cc._RF.pop();
  }, {
    "../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../VIVOAPI": "VIVOAPI"
  }],
  VVNativeAd1View: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "15e671nA2RIeKHBRLPdTHWp", "VVNativeAd1View");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../FrameWork/Base/FMViewBase"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = t("../../../FrameWork/Util/AppPlatform"),
      a = t("../VIVOAPI"),
      l = t("../../../FrameWork/Mgr/RemoteMgr"),
      u = t("../../../FrameWork/Interface/FMInterface"),
      d = cc._decorator,
      p = d.ccclass,
      y = d.property,
      h = d.disallowMultiple,
      _ = d.menu,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.centerZone = null, e.display = null, e.displaySpr = null, e.okBtn = null,
            e.closeBtn = null, e._nativeAd_csryw = null, e._curAdItem_csryw = null, e;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            var t = this;
            this.closeBtn.active = !1, this.scheduleOnce(function () {
                t.closeBtn.active = !0;
              }, s.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.btnShowTimer_csryw),
              this.okBtn.on("click", this.onOkBtn_csryw, this), this.closeBtn.on("click", this.onCloseBtn_csryw, this),
              this.display.on("click", this.onDisplayClick_csryw, this), null != a.default._cachedNativeAd_csryw ? this.showCached() : this.loadAd_csryw();
          }, e.prototype.showCached = function () {
            if (null != a.default._cachedNativeAd_csryw) {
              var t = this;
              t._curAdItem_csryw = a.default._cachedAdItem_csryw, l.default.loadRemote_csryw(a.default._cachedimgUrl_csryw, u.handleFM_csryw(function (e, n) {
                if (!e && t.isValid && t.displaySpr) {
                  var o = new cc.SpriteFrame(n);
                  t.displaySpr.spriteFrame = o, t.displaySpr.node.active = !0;
                }
              }, this)), t._nativeAd_csryw.reportAdShow({
                adId: t._curAdItem_csryw.adId
              }), t.centerZone.active = !0, console.log("显示 缓存 加载图片", a.default._cachedimgUrl_csryw);
            }
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.loadAd_csryw = function () {
            var t = this,
              e = this;
            c.default.is_VIVO_GAME_csryw() && (this._nativeAd_csryw && (this._nativeAd_csryw.destroy(),
              this._nativeAd_csryw = null), this._curAdItem_csryw = null, this._nativeAd_csryw = window.qg.createNativeAd({
              posId: a.default.nativeAdId_csryw
            }), this._nativeAd_csryw.load(), this._nativeAd_csryw.onLoad(function (n) {
              console.log("原生广告加载成功：", n);
              for (var o = n.adList, r = 0; r < o.length; ++r) {
                var i = o[r];
                for (var s in console.log("原生广告数据：", r), i) console.log(s, i[s]);
              }
              if (e._curAdItem_csryw = o[Math.floor(Math.random() * o.length)], null != e._curAdItem_csryw) {
                for (r = 0; r < e._curAdItem_csryw.imgUrlList.length; ++r) console.log("imgUrlList : ", r + " ", e._curAdItem_csryw.imgUrlList[r]);
                var c = e._curAdItem_csryw.imgUrlList[Math.floor(Math.random() * e._curAdItem_csryw.imgUrlList.length)];
                l.default.loadRemote_csryw(c, u.handleFM_csryw(function (t, n) {
                  if (!t && e.isValid && e.displaySpr) {
                    var o = new cc.SpriteFrame(n);
                    e.displaySpr.spriteFrame = o, e.displaySpr.node.active = !0;
                  }
                }, t)), e._nativeAd_csryw.reportAdShow({
                  adId: e._curAdItem_csryw.adId
                }), console.log("加载图片", c), console.log("点击上报！！！");
              }
              e.centerZone.active = !0;
            }), this._nativeAd_csryw.onError(function (t) {
              for (var e in console.log("原生广告加载失败：", t), t) console.log(e, t[e]);
            }), this.centerZone.active = !1);
          }, e.prototype.onCloseBtn_csryw = function () {
            this.emitListenerEvent_csryw(this.EventEnumView_csryw.VIVONatice), this.removeView_csryw();
          }, e.prototype.onOkBtn_csryw = function () {
            100 * Math.random() <= s.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.yuansheng_csryw && (console.log("进入变态广告"),
              this.onDisplayClick_csryw());
          }, e.prototype.onDisplayClick_csryw = function () {
            null != this._nativeAd_csryw && null != this._curAdItem_csryw && (console.log("点击上报！！！"),
              this._nativeAd_csryw.reportAdClick({
                adId: this._curAdItem_csryw.adId
              }));
          }, r([y({
            tooltip: "节点",
            type: cc.Node
          })], e.prototype, "centerZone", void 0), r([y({
            tooltip: "图片节点",
            type: cc.Node
          })], e.prototype, "display", void 0), r([y({
            tooltip: "图片",
            type: cc.Sprite
          })], e.prototype, "displaySpr", void 0), r([y({
            tooltip: "查看广告按钮",
            type: cc.Node
          })], e.prototype, "okBtn", void 0), r([y({
            tooltip: "关闭按钮",
            type: cc.Node
          })], e.prototype, "closeBtn", void 0), e = r([p, h(), _("FrameWork组件/VIVO/VVNativeAd1View")], e);
      }(i.default);
    n.default = f, cc._RF.pop();
  }, {
    "../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Interface/FMInterface": "FMInterface",
    "../../../FrameWork/Mgr/RemoteMgr": "RemoteMgr",
    "../../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../VIVOAPI": "VIVOAPI"
  }],
  VVNativeAd2View: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "f36f2qFBMtPMa1Oh8G1GwCh", "VVNativeAd2View");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("./VVNativeAd1View"),
      s = t("../../../FrameWork/Config/AppSwitchConfig"),
      c = cc._decorator,
      a = c.ccclass,
      l = (c.property,
        c.disallowMultiple),
      u = c.menu,
      d = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return o(e, t), e.prototype.onOkBtn_csryw = function () {
          100 * Math.random() <= s.default.getInstance_csryw().getAppSwitchData_csryw().vivocfg_csryw.yuansheng2_csryw && (console.log("进入变态广告"),
            this.onDisplayClick_csryw()), this.removeView_csryw();
        }, e = r([a, l(), u("FrameWork组件/VIVO/VVNativeAd2View")], e);
      }(i.default);
    n.default = d, cc._RF.pop();
  }, {
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "./VVNativeAd1View": "VVNativeAd1View"
  }],
  VibrateMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "d1fd08XFy1K54GbFPz7QBml", "VibrateMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../Util/AppPlatform"),
      r = function () {
        function t() {}
        return t.vibrateShort_csryw = function () {
          t.isEnable_csryw && (o.default.is_TT_GAME_csryw() ? window.tt.vibrateShort() : o.default.is_WECHAT_GAME_csryw() ? window.wx.vibrateShort() : o.default.is_OPPO_GAME_csryw() || o.default.is_VIVO_GAME_csryw() ? window.qg.vibrateShort() : o.default.is_QQ_PLAY_csryw() && window.qq.vibrateShort());
        }, t.vibrateLong_csryw = function () {
          t.isEnable_csryw && (o.default.is_TT_GAME_csryw() ? window.tt.vibrateLong() : o.default.is_WECHAT_GAME_csryw() ? window.wx.vibrateLong() : o.default.is_OPPO_GAME_csryw() || o.default.is_VIVO_GAME_csryw() ? window.qg.vibrateLong() : o.default.is_QQ_PLAY_csryw() && window.qq.vibrateLong());
        }, t.vibrate_csryw = function (e) {
          if (t.isEnable_csryw) {
            var n = 0,
              r = e / 15,
              i = null;
            i = function (e) {
              setTimeout(function () {
                t.vibrateShort_csryw(), ++n <= r && i(e);
              }, e);
            }, o.default.is_TT_GAME_csryw() ? (r = e / 15, i(16)) : o.default.is_WECHAT_GAME_csryw() ? (r = e / 15,
              i(16)) : o.default.is_OPPO_GAME_csryw() ? (r = e / 20, i(21)) : o.default.is_QQ_PLAY_csryw() && (r = e / 20,
              i(21));
          }
        }, t.isEnable_csryw = !0, t;
      }();
    n.default = r, cc._RF.pop();
  }, {
    "../Util/AppPlatform": "AppPlatform"
  }],
  WXADMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "b2a5f3Hfg5DoZ0uXCSDeK5m", "WXADMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.WXGridAd = n.WXBannderAd = void 0;
    var o = t("../../../FrameWork/Util/DateUtils"),
      r = t("../../../FrameWork/Util/AppPlatform"),
      i = t("../../../FrameWork/Config/AppSwitchConfig"),
      s = function () {
        function t(t) {
          this._id_csryw = null, this._banner_csryw = null, this._createTime_csryw = 0, this._destroyed_csryw = !1,
            this._error_csryw = null, this._loading_csryw = !1, this._retryCount_csryw = 0,
            this._bannerTotalShowTime_csryw = 0, this._lastShowTime_csryw = 0, this._id_csryw = t;
        }
        return Object.defineProperty(t.prototype, "Id_csryw", {
          get: function () {
            return this._id_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "CreateTime_csryw", {
          get: function () {
            return this._createTime_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "Destroyed_csryw", {
          get: function () {
            return this._destroyed_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "isReady_csryw", {
          get: function () {
            return null != this._banner_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "isError_csryw", {
          get: function () {
            return null != this._error_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "Error_csryw", {
          get: function () {
            return this._error_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "Loading_csryw", {
          get: function () {
            return this._loading_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "RetryCount_csryw", {
          get: function () {
            return this._retryCount_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "BannerTotalShowTime_csryw", {
          get: function () {
            return this._bannerTotalShowTime_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.show_csryw = function () {
          if (this.isReady_csryw) {
            this._banner_csryw.hide();
            var t = window.wx.getSystemInfoSync(),
              e = t.screenWidth,
              n = t.screenHeight,
              r = this._banner_csryw.style,
              i = r.realHeight,
              s = r.realWidth;
            i < 130 && (i = 130);
            var c = e / 2 - s / 2,
              a = n - i;
            this._banner_csryw.style.left = c, this._banner_csryw.style.top = a, this._lastShowTime_csryw = o.DateUtils.getNowTime_csryw(),
              this._banner_csryw.show();
          }
        }, t.prototype.hide_csryw = function () {
          this.isReady_csryw && (this._banner_csryw.hide(), this._bannerTotalShowTime_csryw += o.DateUtils.getNowTime_csryw() - this._lastShowTime_csryw);
        }, t.prototype.destroy_csryw = function () {
          this._destroyed_csryw ? console.log("BannerAd 已经被销毁") : this._loading_csryw ? console.log("BannerAd 正在加载中，无法进行销毁") : (null != this._banner_csryw && this._banner_csryw.destroy(),
            this._banner_csryw = null, this._destroyed_csryw = !0);
        }, t.prototype.retry_csryw = function (e) {
          if (this._destroyed_csryw) console.log("BannerAd 已被销毁，无法重试");
          else if (this.isReady_csryw) console.log("BannerAd 已创建成功，无需重试");
          else if (this._loading_csryw) console.log("BannerAd 正在创建中");
          else if (this._retryCount_csryw >= t.MAX_RETRY_COUNT_csryw) console.log("此 BannerAd 重试次数已达最大");
          else {
            var n = this;
            this._create_csryw(function (t) {
              null != e && e(t), ++n._retryCount_csryw;
            });
          }
        }, t.prototype._create_csryw = function (t) {
          if (r.default.is_WECHAT_GAME_csryw()) {
            var e = null;
            if (r.default.is_WECHAT_GAME_csryw() ? e = window.wx.createBannerAd({
                adUnitId: "adunit-cfdfd82466dbaabe",
                adIntervals: 30,
                style: {
                  left: 0,
                  top: 0,
                  width: 300
                }
              }) : r.default.is_QQ_PLAY_csryw() && (e = window.qq.createBannerAd({
                adUnitId: "adunit-cfdfd82466dbaabe",
                adIntervals: 30,
                style: {
                  left: 0,
                  top: 0,
                  width: 300
                }
              })), null != e) {
              var n = this;
              this._loading_csryw = !0, e.onLoad(function (r) {
                console.log("BannderAd 加载完成", n._id_csryw, r), n._banner_csryw = e, n._createTime_csryw = o.DateUtils.getNowTime_csryw(),
                  n._loading_csryw = !1, null != t && t(!0);
              }), e.onError(function (o) {
                console.log("BannderAd 加载失败", n._id_csryw, o), n._error_csryw = o, n._loading_csryw = !1,
                  e.destroy(), null != t && t(!1);
              });
            }
          } else null != t && t(!1);
        }, t.MAX_RETRY_COUNT_csryw = 3, t;
      }();
    n.WXBannderAd = s;
    var c = function () {
      function t(t) {
        this._id_csryw = null, this._gridAd_csryw = null, this._createTime_csryw = 0, this._destroyed_csryw = !1,
          this._error_csryw = null, this._loading_csryw = !1, this._id_csryw = t;
      }
      return Object.defineProperty(t.prototype, "CreateTime_csryw", {
        get: function () {
          return this._createTime_csryw;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "Destroyed_csryw", {
        get: function () {
          return this._destroyed_csryw;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isReady_csryw", {
        get: function () {
          return null != this._gridAd_csryw;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isError_csryw", {
        get: function () {
          return null != this._error_csryw;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "Error_csryw", {
        get: function () {
          return this._error_csryw;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "Loading_csryw", {
        get: function () {
          return this._loading_csryw;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.show_csryw = function () {
        this.isReady_csryw && this._gridAd_csryw.show();
      }, t.prototype.hide_csryw = function () {
        this.isReady_csryw && this._gridAd_csryw.hide();
      }, t.prototype.destroy_csryw = function () {
        this._destroyed_csryw ? console.log("GridAD 已经被销毁") : this._loading_csryw ? console.log("GridAD 正在加载中，无法进行销毁") : (null != this._gridAd_csryw && this._gridAd_csryw.destroy(),
          this._gridAd_csryw = null, this._destroyed_csryw = !0);
      }, t.prototype.retry_csryw = function (t) {
        if (this._destroyed_csryw) console.log("GridAD 已被销毁，无法重试");
        else if (this.isReady_csryw) console.log("GridAD 已创建成功，无需重试");
        else if (this._loading_csryw) console.log("GridAD 正在创建中");
        else {
          this._create_csryw(function (e) {
            null != t && t(e);
          });
        }
      }, t.prototype._create_csryw = function (t) {
        if (r.default.is_WECHAT_GAME_csryw()) {
          var e = window.wx.createGridAd({
            adUnitId: "",
            adIntervals: 30,
            style: {
              left: 0,
              top: 0,
              width: 300,
              height: 150
            }
          });
          if (null != e) {
            var n = this;
            this._loading_csryw = !0, e.onLoad(function (r) {
              console.log("GridAD 加载完成", n._id_csryw, r), n._gridAd_csryw = e, n._createTime_csryw = o.DateUtils.getNowTime_csryw(),
                n._loading_csryw = !1, null != t && t(!0);
            }), e.onError(function (o) {
              console.log("GridAD 加载失败", n._id_csryw, o), n._error_csryw = o, n._loading_csryw = !1,
                e.destroy(), null != t && t(!1);
            });
          }
        } else null != t && t(!1);
      }, t;
    }();
    n.WXGridAd = c;
    var a = function () {
      function t() {}
      return t.init_csryw = function () {
          if (!t._inited_csryw) {
            for (var e = i.default.getInstance_csryw().getAppSwitchData_csryw().wxWuDianBanners_csryw, n = 0; n < e.length; ++n) t._bannerIds_csryw.push(e[n]);
            for (n = 0; n < t._bannerIds_csryw.length; ++n) {
              t._bannerIds_csryw[n];
              t._bannerIds_csryw[n] = e[Math.floor(Math.random() * e.length)];
            }
            t._createBannerAd_csryw();
            var o = 1e3 * i.default.getInstance_csryw().getAppSwitchData_csryw().bannerCreateFailNum_csryw;
            setInterval(function () {
              t._checkBannerAd_csryw(), t._createBannerAd_csryw();
            }, o), t._inited_csryw = !0;
          }
        }, t.getBanner_csryw = function (e) {
          for (var n = [], o = [], r = 0; r < t._banners_csryw.length; ++r) {
            var i = t._banners_csryw[r];
            i.Destroyed_csryw || (i.isReady_csryw ? n.push(i) : o.push(i));
          }
          t._curBannerGetIndex_csryw >= n.length && (t._curBannerGetIndex_csryw = 0);
          var s = n[t._curBannerGetIndex_csryw];
          ++t._curBannerGetIndex_csryw, null != s ? e(s) : (null == (s = t._createBannerAd_csryw()) && (s = t._banners_csryw[Math.floor(Math.random() * t._banners_csryw.length)]),
            null == s ? e(null) : s.retry_csryw(function (t) {
              e(t ? s : null);
            }));
        }, t._createBannerAd_csryw = function () {
          if (t._curBannerCreateIndex_csryw >= t._bannerIds_csryw.length) return null;
          var e = new s(t._bannerIds_csryw[t._curBannerCreateIndex_csryw]);
          return t._banners_csryw.push(e), e.retry_csryw(), ++t._curBannerCreateIndex_csryw,
            e;
        }, t._checkBannerAd_csryw = function () {
          for (var e = [], n = [], o = 0; o < t._banners_csryw.length; ++o) {
            (r = t._banners_csryw[o]).Destroyed_csryw || (r.isReady_csryw ? e.push(r) : n.push(r));
          }
          for (o = 0; o < t._banners_csryw.length; ++o) {
            var r = t._banners_csryw[o],
              c = i.default.getInstance_csryw().getAppSwitchData_csryw().bannerShowTime_csryw;
            r.isReady_csryw ? e.length >= 2 && r.BannerTotalShowTime_csryw >= 1e3 * c && (console.log("BannerAd 展示时间超过限制，销毁 : ", r.Id_csryw),
              r.destroy_csryw()) : r.RetryCount_csryw >= s.MAX_RETRY_COUNT_csryw ? (console.log("BannerAd 超过重试次数，销毁 : ", r.Id_csryw),
              r.destroy_csryw()) : r.retry_csryw();
          }
        }, t.getBoxAd_csryw = function (t) {
          if (this._wxGridAd_csryw.isReady_csryw) t(this._wxGridAd_csryw);
          else {
            var e = this._wxGridAd_csryw;
            e.retry_csryw(function (n) {
              t(n ? e : null);
            });
          }
        }, t._createGirdAd_csryw = function () {
          if (null == this._wxGridAd_csryw) {
            var t = new c("");
            t.retry_csryw(), this._wxGridAd_csryw = t;
          }
        }, t._inited_csryw = !1, t._bannerIds_csryw = new Array(), t._banners_csryw = new Array(),
        t._curBannerCreateIndex_csryw = 0, t._curBannerGetIndex_csryw = 0, t._wxGridAd_csryw = null,
        t;
    }();
    n.default = a, cc._RF.pop();
  }, {
    "../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../../../FrameWork/Util/DateUtils": "DateUtils"
  }],
  WXAPI: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "bc8023CDWpHe7xTzNvqfFhi", "WXAPI"), Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.GameRecorder = void 0;
    var o = t("../../FrameWork/Util/AppPlatform"),
      r = t("../../FrameWork/Config/AppConfig"),
      i = t("../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../FrameWork/Mgr/WudianMgr"),
      c = function () {
        function t() {
          this._recorder_csryw = null;
        }
        return Object.defineProperty(t.prototype, "recorder_csryw", {
          get: function () {
            return this._recorder_csryw;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.start_csryw = function () {
          null != this.recorder_csryw && this.recorder_csryw.start();
        }, t.prototype.stop_csryw = function () {
          null != this.recorder_csryw && this.recorder_csryw.stop();
        }, t.prototype.pause_csryw = function () {
          null != this.recorder_csryw && this.recorder_csryw.pause();
        }, t.prototype.resume_csryw = function () {
          null != this.recorder_csryw && this.recorder_csryw.resume();
        }, t.prototype.abort_csryw = function () {
          null != this.recorder_csryw && this.recorder_csryw.abort();
        }, t.prototype.showShareBtn_csryw = function () {
          if (null != this.recorder_csryw) window.wx.createGameRecorderShareButton({
            style: {
              left: 10,
              top: 150,
              height: 50,
              color: "#ffffff",
              textAlign: "center",
              fontSize: 16,
              borderRadius: 4,
              iconMarginRight: 16,
              paddingLeft: 1,
              paddingRight: 30
            },
            image: "button.jpg",
            text: "自定义文案",
            icon: "icon.jpg",
            share: {
              query: "a=1&b=2",
              bgm: "walkin.mp3",
              timeRange: [
                [0, 1e3],
                [2e3, 3e3]
              ],
              title: {
                template: "default.score",
                data: {
                  score: 6500
                }
              },
              button: {
                template: "default.enter"
              }
            }
          });
        }, t;
      }();
    n.GameRecorder = c;
    var a = function () {
      function t() {}
      return t.wxLogin_csryw = function (t, e) {
          o.default.is_WECHAT_GAME_csryw() && window.wx.login({
            success: function (e) {
              if (e.code) {
                var n = e.code;
                console.log("登陆成功,获取到code : " + n), t(n);
              }
            }
          });
        }, t.onRewardedVideoAdLoad_csryw = function () {
          console.log("激励视频 广告加载完成");
        }, t.onRewardedVideoAdError_csryw = function (e) {
          console.log("激励视频 广告加载失败" + e), t._onRewardedVideoAdFailed_csryw && t._onRewardedVideoAdFailed_csryw();
        }, t.onRewardedVideoAdClose_csryw = function (e) {
          e && e.isEnded || null == e ? (console.log("激励视频 已完整观看"), t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!0)) : (console.log("激励视频 未完整观看"),
            t._onRewardedVideoAdClose_csryw && t._onRewardedVideoAdClose_csryw(!1));
        }, t.regRewardedVideoAdEvent_csryw = function (e) {
          e.onLoad(t.onRewardedVideoAdLoad_csryw), e.onError(t.onRewardedVideoAdError_csryw),
            e.onClose(t.onRewardedVideoAdClose_csryw), t._isRegRewardedVideoAdEvent_csryw = !0;
        }, t.showRewardedVideoAd_csryw = function (e, n, i) {
          if (o.default.is_WECHAT_GAME_csryw()) {
            t._onRewardedVideoAdClose_csryw = e, t._onRewardedVideoAdFailed_csryw = n;
            var s = r.default.adUnitId_csryw;
            i && (s = i);
            var c = window.wx.createRewardedVideoAd({
              adUnitId: "adunit-d2d26efe4dfa207b",
            });
            t._isRegRewardedVideoAdEvent_csryw || t.regRewardedVideoAdEvent_csryw(c), c.load().then(function () {
              var t = c.show();
              t.then(function () {
                return console.log("激励视频 广告显示成功");
              }), t.catch(function (t) {
                c.load().then(function () {
                  return c.show();
                }).catch(function (t) {
                  console.log("激励视频 广告显示失败");
                });
              });
            }).catch(function (t) {
              console.log("激励视频 广告加载失败");
            });
          } else e(!0);
        }, t.navigateToMiniProgram_csryw = function (t, e, n, r, i) {
          o.default.is_WECHAT_GAME_csryw() && (console.log("跳转游戏： " + t), window.wx.navigateToMiniProgram({
            appId: t,
            path: e,
            extraData: {
              foo: "bar"
            },
            envVersion: "release",
            success: function (t) {
              n && n(t);
            },
            fail: function (t) {
              r && r(t);
            },
            complete: function (t) {
              i && i(t);
            }
          }));
        }, t.share_csryw = function (e, n, r) {
          var i = this;
          o.default.is_WECHAT_GAME_csryw() && (t._onShow_csryw = function () {
            window.wx.offShow(t._onShow_csryw), t._onShow_csryw = null;
            Date.now(), i._lastShareTime_csryw;
            e && (Date.now() - i._lastShareTime_csryw > 2e3 ? e(!0) : e(!1));
          }, window.wx.onShow(t._onShow_csryw), this._lastShareTime_csryw = Date.now(), window.wx.shareAppMessage({
            title: n,
            imageUrl: r
          }));
        }, t.showInterstitialAd_csryw = function (t, e) {
          if (o.default.is_WECHAT_GAME_csryw()) {
            var n = r.default.InsAdUnitIdList_csryw[Math.floor(Math.random() * r.default.InsAdUnitIdList_csryw.length)];
            console.log("showInterstitialAd idStr =", n);
            var i = window.wx.createInterstitialAd({
              adUnitId: "adunit-9c978c8dcef29a3e"
            });
            i.onLoad(function () {
              console.log("插屏广告 加载完成"), i.show().catch(function (t) {
                console.log("插屏广告 显示失败 ：" + t), e && e();
              });
            }), i.onError(function (t) {
              console.log("插屏广告 加载失败" + t), e && e();
            }), i.onClose(function () {
              console.log("插屏广告 关闭"), t && t();
            });
          } else t();
        }, t.getLaunchOptionsSync_csryw = function () {
          if (o.default.is_WECHAT_GAME_csryw()) {
            var t = window.wx.getLaunchOptionsSync();
            console.log("场景值 " + t.scene);
            var e = JSON.stringify(t.query);
            console.log("Query参数 " + e);
            var n = t.query.key;
            return console.log("Query参数：key " + n), console.log("ShareTicket " + t.shareTicket),
              console.log("ReferrerInfo.appId " + t.referrerInfo.appId), console.log("ReferrerInfo.extraData " + t.referrerInfo.extraData),
              t;
          }
          return {
            scene: 1001,
            query: "",
            shareTicket: "",
            appId: "",
            extraData: ""
          };
        }, t.SetShareMenu_csryw = function (t, e, n, r, i) {
          o.default.is_WECHAT_GAME_csryw() && (console.log("小游戏设置转发按钮"), window.wx.showShareMenu({
            withShareTicket: !1,
            success: n,
            fail: r,
            complete: i
          }), window.wx.onShareAppMessage(function () {
            return {
              title: t,
              imageUrl: e
            };
          }));
        }, t.checkUpdate_csryw = function () {
          if (o.default.is_WECHAT_GAME_csryw()) {
            var t = window.wx.getUpdateManager();
            t.onCheckForUpdate(function (t) {
              console.log("是否需要更新 : ", t.hasUpdate);
            }), t.onUpdateReady(function () {
              window.wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启小游戏？",
                success: function (e) {
                  e.confirm && t.applyUpdate();
                }
              });
            }), t.onUpdateFailed(function () {
              console.log("新版本下载失败!!!");
            });
          }
        }, t.tryShowWXCrazyClick_csryw = function () {
          if (!s.default.wudianFlag_csryw || 1 != i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianBanner_csryw) return !1;
          var e = i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.kuangdianLevelSpcacing_csryw;
          return 0 == e || (console.log(" WXAPI._crazyClickShowCounter_csryw = " + t._crazyClickShowCounter_csryw + " (kuangdianLevelSpcacing - 1) = " + (e - 1)),
            t._crazyClickShowCounter_csryw == e - 1 ? (t._crazyClickShowCounter_csryw = 0, !0) : (t._crazyClickShowCounter_csryw++,
              !1));
        }, t.isCanShowVideo = function () {
          return console.log("ly++++++++++++++++++++++   取消跳转video", i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isJumpVideo_csryw),
            0 != i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isJumpVideo_csryw && (!(i.default.getInstance_csryw().getAppSwitchData_csryw().version_csryw != r.default.Versions_csryw || !s.default.wudianFlag_csryw) && 100 * Math.random() <= i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.JumpVideoProb_csryw);
        }, t.showNativeAD = function (t, e, n) {
          var i = this;
          if (o.default.is_WECHAT_GAME_csryw()) {
            if (this.isNativeADShow) return;
            this.isNativeADShow = !0, this.isNaitveLoading = !0, null != this.NativeADLeft ? (this.isNaitveLoading = !1,
              this.NativeADLeft.show()) : (this.NativeADLeft = window.wx.createCustomAd({
              adUnitId: r.default.nativeADId1_csryw,
              adIntervals: 30,
              style: {
                left: e * (window.wx.getSystemInfoSync().screenWidth / cc.visibleRect.width),
                top: window.wx.getSystemInfoSync().screenHeight - n * (window.wx.getSystemInfoSync().screenWidth / cc.visibleRect.width)
              }
            }), this.NativeADLeft.onLoad(function () {
              console.log("left原生广告 加载完成"), i.isNaitveLoading = !1, i.NativeADLeft.show().catch(function (e) {
                console.log("left原生广告 显示失败 ：" + JSON.stringify(e)), t && t();
              });
            }), this.NativeADLeft.onError(function (e) {
              i.isNativeADShow = !1, i.isNaitveLoading = !1, console.log("left原生广告 加载失败" + JSON.stringify(e)),
                t && t();
            })), this.isNaitveLoading = !0, null != this.NativeADRight ? (this.isNaitveLoading = !1,
              this.NativeADRight.show()) : (this.NativeADRight = window.wx.createCustomAd({
              adUnitId: r.default.nativeADId1_csryw,
              adIntervals: 30,
              style: {
                left: window.wx.getSystemInfoSync().screenWidth - (e + 118) * (window.wx.getSystemInfoSync().screenWidth / cc.visibleRect.width),
                top: window.wx.getSystemInfoSync().screenHeight - n * (window.wx.getSystemInfoSync().screenWidth / cc.visibleRect.width)
              }
            }), this.NativeADRight.onLoad(function () {
              console.log("right原生广告 加载完成"), i.isNaitveLoading = !1, i.NativeADRight.show().catch(function (e) {
                console.log("right原生广告 显示失败 ：" + JSON.stringify(e)), t && t();
              });
            }), this.NativeADRight.onError(function (e) {
              i.isNativeADShow = !1, i.isNaitveLoading = !1, console.log("right原生广告 加载失败" + JSON.stringify(e)),
                t && t();
            }));
          }
        }, t.showNativeADBig = function (t, e, n) {
          var i = this;
          if (o.default.is_WECHAT_GAME_csryw()) {
            if (this.isNativeADShow) return;
            this.isNativeADShow = !0, this.isNaitveLoading = !0, null != this.NativeADLeftBig ? (this.isNaitveLoading = !1,
              this.NativeADLeftBig.show()) : (this.NativeADLeftBig = window.wx.createCustomAd({
              adUnitId: r.default.nativeADIdBig_csryw,
              adIntervals: 30,
              style: {
                left: e * (window.wx.getSystemInfoSync().screenWidth / cc.visibleRect.width),
                top: n * (window.wx.getSystemInfoSync().screenWidth / cc.visibleRect.width)
              }
            }), this.NativeADLeftBig.onLoad(function () {
              console.log("left原生广告 加载完成"), i.isNaitveLoading = !1, i.NativeADLeftBig.show().catch(function (e) {
                console.log("left原生广告 显示失败 ：" + JSON.stringify(e)), t && t();
              });
            }), this.NativeADLeftBig.onError(function (e) {
              i.isNativeADShow = !1, i.isNaitveLoading = !1, console.log("left原生广告 加载失败" + JSON.stringify(e)),
                t && t();
            })), this.isNaitveLoading = !0, null != this.NativeADRightBig ? (this.isNaitveLoading = !1,
              this.NativeADRightBig.show()) : (this.NativeADRightBig = window.wx.createCustomAd({
              adUnitId: r.default.nativeADIdBig_csryw,
              adIntervals: 30,
              style: {
                left: window.wx.getSystemInfoSync().screenWidth - (e + 118) * (window.wx.getSystemInfoSync().screenWidth / cc.visibleRect.width),
                top: n * (window.wx.getSystemInfoSync().screenWidth / cc.visibleRect.width)
              }
            }), this.NativeADRightBig.onLoad(function () {
              console.log("right原生广告 加载完成"), i.isNaitveLoading = !1, i.NativeADRightBig.show().catch(function (e) {
                console.log("right原生广告 显示失败 ：" + JSON.stringify(e)), t && t();
              });
            }), this.NativeADRightBig.onError(function (e) {
              i.isNativeADShow = !1, i.isNaitveLoading = !1, console.log("right原生广告 加载失败" + JSON.stringify(e)),
                t && t();
            }));
          }
        }, t.hideNativeAD = function () {
          var t = this;
          if (this.isNaitveLoading) return console.log("延迟隐藏！"), void setTimeout(function () {
            t.hideNativeAD();
          }, 2888);
          this.NativeADLeft && this.NativeADLeft.hide(), this.NativeADRight && this.NativeADRight.hide(),
            this.NativeADLeftBig && this.NativeADLeftBig.hide(), this.NativeADRightBig && this.NativeADRightBig.hide(),
            this.isNativeADShow = !1;
        }, t.GameRecorder_csryw = new c(), t._isRegRewardedVideoAdEvent_csryw = !1, t._onRewardedVideoAdFailed_csryw = null,
        t._onRewardedVideoAdClose_csryw = null, t._onShow_csryw = null, t._lastShareTime_csryw = 0,
        t._crazyClickShowCounter_csryw = 0, t.NativeADLeft = null, t.NativeADRight = null,
        t.NativeADLeftBig = null, t.NativeADRightBig = null, t.isNativeADShow = !1, t.isNaitveLoading = !1,
        t;
    }();
    n.default = a, cc._RF.pop();
  }, {
    "../../FrameWork/Config/AppConfig": "AppConfig",
    "../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../FrameWork/Util/AppPlatform": "AppPlatform"
  }],
  WXHttp: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "84281LNu2tDWbZzoSU/FrBV", "WXHttp"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../FrameWork/Util/AppPlatform"),
      r = t("./WXAPI"),
      i = function () {
        function t() {}
        return t.getIsNewUser = function () {
            return this.isNewUser;
          }, t.WxLogin = function (e) {
            o.default.is_WECHAT_GAME_csryw() ? r.default.wxLogin_csryw(function (n) {
              t.userLogin(function () {
                e();
              }, n);
            }, function () {
              r.default.wxLogin_csryw(function (n) {
                t.userLogin(function () {
                  e();
                }, n);
              }, function () {
                t.userLogin(function () {
                  e();
                }, "123");
              });
            }) : e();
          }, t.getQueryVariable = function (t) {
            var e = r.default.getLaunchOptionsSync_csryw().key;
            if (e && 0 != e) {
              for (var n = e.split("?"), o = 0; o < n.length; o++) {
                var i = n[o].split("=");
                if (i[0] == t) return i[1];
              }
              return !1;
            }
            return !1;
          }, t.userLogin = function (t, e) {
            var n = this,
              o = "",
              i = r.default.getLaunchOptionsSync_csryw().query;
            i.hasOwnProperty("wxgamecid") && (o = i.wxgamecid);
            var s = {
              code: e,
              gameId: this.gameId,
              wxgamecid: o
            };
            this.setHttp("userLogin", s, function (e) {
              e && 0 == e.code ? (n.token = e.token, n.channelId = e.channelId, n.userId = e.userId,
                e.hasOwnProperty("isNewUser") ? n.isNewUser = !0 : n.isNewUser = !1) : (console.error(e.errorMsg),
                n.token = ""), t();
            }, function () {
              n.token = "", t();
            });
          }, t.updateUserInfo = function (t) {
            var e = this,
              n = {
                token: this.token,
                gameId: this.gameId
              };
            n.headimgurl = t.headimgurl, n.nickname = t.nickname, n.sex = t.sex, this.setHttp("updateUserInfo", n, function (n) {
              n && 0 == n.code ? e.token = n.token : n && 1 == n.code ? e.WxLogin(function () {
                e.updateUserInfo(t);
              }) : console.error(n.errorMsg);
            }, function () {
              console.error("updateUserInfo  Error");
            });
          }, t.getUserInfo = function (t) {
            var e = this,
              n = {
                token: this.token,
                gameId: this.gameId
              };
            this.setHttp("getUserInfo", n, function (n) {
              var o;
              n && 0 == n.code ? (e.token = n.token, o = n.userData, t(o)) : n && 1 == n.code ? e.WxLogin(function () {
                e.getUserInfo(t);
              }) : (console.error(n.errorMsg), t());
            }, function () {
              console.error("getUserInfo  Error"), t();
            });
          }, t.saveUserData = function (t) {
            var e = this,
              n = {
                token: this.token,
                gameId: this.gameId,
                gameData: t
              };
            this.setHttp("saveUserData", n, function (n) {
              n && 0 == n.code ? e.token = n.token : n && 1 == n.code ? e.WxLogin(function () {
                e.saveUserData(t);
              }) : console.error(n.errorMsg);
            }, function () {
              console.error("saveUserData  Error");
            });
          }, t.addActionLog = function (t) {
            var e = this,
              n = {
                fromAppid: this.channelId,
                toAppid: this.AppId,
                userId: this.userId,
                action: t,
                groupName: 1,
                commonData: this.commonData
              };
            this.setHttp("userActionLog/addActionLog", n, function (n) {
              n && 0 == n.code ? e.token = n.token : n && 1 == n.code ? e.WxLogin(function () {
                e.addActionLog(t);
              }) : console.error(n.errorMsg);
            }, function () {
              console.error("addActionLog  Error");
            }, !1);
          }, t.setHttp = function (t, e, n, o, r) {
            void 0 === r && (r = !0);
            var i, s = {},
              c = new XMLHttpRequest();
            if (c.timeout = 15e3, c.onerror = function (t) {
                console.error("网络请求异常" + t), o("网络请求异常");
              }, c.ontimeout = function (t) {
                console.error("网络超时" + t), o("网络超时");
              }, c.onreadystatechange = function () {
                var t = c.readyState,
                  e = c.status;
                if (4 === t) {
                  if (e >= 200 && e < 300) {
                    var o = c.responseText;
                    console.log("接收数据：----------------------"), console.log("接收内容:" + o);
                    var r = JSON.parse(o);
                    n(r);
                  } else {
                    var i = c.statusText;
                    console.log("接收数据异常：----------------------status " + e), console.log("接收内容:" + i),
                      n(null);
                  }
                }
              }, i = 1 == r ? this.url + t : "https://wxxyx.renyouwangluo.cn/renyou_log_wx/" + t,
              c.open("POST", i, !0), s["Content-Type"] || (s["Content-Type"] = "application/json"),
              s)
              for (var a in s) c.setRequestHeader(a, s[a]);
            var l = JSON.stringify(e);
            console.log("发送http url ==", i, "内容 ：", l), c.send(l);
          }, t.commonData = "组装恐龙乱斗", t.AppId = "wxeb84cb4d06bce1c2", t.gameId = 13, t.url = "https://wxxyx.renyouwangluo.cn/renyou_wx_template/",
          t.token = "", t.userId = 123, t.channelId = "", t.isNewUser = !1, t.sendDataList = [],
          t;
      }();
    n.default = i, cc._RF.pop();
  }, {
    "../../FrameWork/Util/AppPlatform": "AppPlatform",
    "./WXAPI": "WXAPI"
  }],
  WudianMgr: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "84175hHWFRDVLEderLL8jc9", "WudianMgr"), Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t("../../Platform/qq/QQMiniGameAPI"),
      r = t("../../Platform/weixin/WXAPI"),
      i = t("../Config/AppSwitchConfig"),
      s = t("../Event/EventEnum"),
      c = t("../Event/EventMgr"),
      a = t("../NetWork/HttpUnit"),
      l = t("../Util/AppPlatform"),
      u = function () {
        function t() {}
        return t.ryw_IpBlockFlag_csryw = function () {
          return t.ipBlockFlag_csryw;
        }, t.ryw_UpdateIpBlockState_csryw = function (e) {
          a.default.GetIpBlock_csryw(function (n) {
            console.log("调用IpBlock接口成功,结果为:", n), t.ipBlockFlag_csryw = n.code, c.default.emitEvent_csryw(s.ryw_Event.ryw_App_OnUpdateIpBlockState_csryw, {
              ipBlockFlag: t.ipBlockFlag_csryw
            }), e && e();
          }, null);
        }, t.ryw_GetIpBlocked_csryw = function () {
          return 0 == t.ipBlockFlag_csryw;
        }, t.ryw_IsSwitchOpen_csryw = function () {
          var t = 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
            e = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianTimeAvaliable_csryw;
          return console.log("误点 Flag_csryw 状态: ", "总开关:", t, "打开时间", e), t && e;
        }, Object.defineProperty(t, "wudianFlag_noIpBlock_csryw", {
          get: function () {
            var t = 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
              e = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianTimeAvaliable_csryw,
              n = l.default.getLaunchOptionsSync_csryw().scene;
            l.default.is_TT_GAME_csryw() && (t = !0, e = !0);
            for (var o = !0, r = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw, s = 0; s < r.length; ++s) {
              n == r[s] && (o = !1);
            }
            return console.log("误点 Flag_csryw 状态: ", "总开关:", t, "场景进入", o, "打开时间", e), t && o && e;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t, "wudianFlag_csryw", {
          get: function () {
            var t = 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw,
              e = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianTimeAvaliable_csryw,
              n = 0 == this.ipBlockFlag_csryw,
              o = l.default.getLaunchOptionsSync_csryw().scene;
            l.default.is_TT_GAME_csryw() && (t = !0, e = !0);
            for (var r = !0, s = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw, c = 0; c < s.length; ++c) {
              o == s[c] && (r = !1);
            }
            return t && r && n && e;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t, "NoTimeWudianFlag_csryw", {
          get: function () {
            for (var e = 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wudian_csryw, n = l.default.getLaunchOptionsSync_csryw().scene, o = !0, r = i.default.getInstance_csryw().getAppSwitchData_csryw().wudianSceneList_csryw, s = 0; s < r.length; ++s) {
              n == r[s] && (o = !1);
            }
            var c = 0 == t.ipBlockFlag_csryw;
            return console.log("误点 Flag_csryw 状态: ", "总开关:", e, "场景进入", o, "IP未被屏蔽"), e && o && c;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t, "isEnterBySerach_csryw", {
          get: function () {
            var t = null;
            l.default.is_WECHAT_GAME_csryw() ? t = r.default.getLaunchOptionsSync_csryw().scene : l.default.is_QQ_PLAY_csryw() && (t = o.default.getLaunchOptionsSync_csryw().scene);
            for (var e = !0, n = [1011, 1012, 1013, 1047], i = 0; i < n.length; ++i) {
              t == n[i] && (e = !1);
            }
            return console.log("场景进入", e), e;
          },
          enumerable: !1,
          configurable: !0
        }), t.ipBlockFlag_csryw = -1, t;
      }();
    n.default = u, cc._RF.pop();
  }, {
    "../../Platform/qq/QQMiniGameAPI": "QQMiniGameAPI",
    "../../Platform/weixin/WXAPI": "WXAPI",
    "../Config/AppSwitchConfig": "AppSwitchConfig",
    "../Event/EventEnum": "EventEnum",
    "../Event/EventMgr": "EventMgr",
    "../NetWork/HttpUnit": "HttpUnit",
    "../Util/AppPlatform": "AppPlatform"
  }],
  aes: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "214e0sY5D5IGaWnD8e+Y13+", "aes");
    var o = o || function (t, e) {
      var n = {},
        o = n.lib = {},
        r = function () {},
        i = o.Base = {
          extend: function (t) {
            r.prototype = this;
            var e = new r();
            return t && e.mixIn(t), e.hasOwnProperty("init") || (e.init = function () {
              e.$super.init.apply(this, arguments);
            }), e.init.prototype = e, e.$super = this, e;
          },
          create: function () {
            var t = this.extend();
            return t.init.apply(t, arguments), t;
          },
          init: function () {},
          mixIn: function (t) {
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
            t.hasOwnProperty("toString") && (this.toString = t.toString);
          },
          clone: function () {
            return this.init.prototype.extend(this);
          }
        },
        s = o.WordArray = i.extend({
          init: function (t, e) {
            t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length;
          },
          toString: function (t) {
            return (t || a).stringify(this);
          },
          concat: function (t) {
            var e = this.words,
              n = t.words,
              o = this.sigBytes;
            if (t = t.sigBytes, this.clamp(), o % 4)
              for (var r = 0; r < t; r++) e[o + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (o + r) % 4 * 8;
            else if (65535 < n.length)
              for (r = 0; r < t; r += 4) e[o + r >>> 2] = n[r >>> 2];
            else e.push.apply(e, n);
            return this.sigBytes += t, this;
          },
          clamp: function () {
            var e = this.words,
              n = this.sigBytes;
            e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4);
          },
          clone: function () {
            var t = i.clone.call(this);
            return t.words = this.words.slice(0), t;
          },
          random: function (e) {
            for (var n = [], o = 0; o < e; o += 4) n.push(4294967296 * t.random() | 0);
            return new s.init(n, e);
          }
        }),
        c = n.enc = {},
        a = c.Hex = {
          stringify: function (t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], o = 0; o < t; o++) {
              var r = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
              n.push((r >>> 4).toString(16)), n.push((15 & r).toString(16));
            }
            return n.join("");
          },
          parse: function (t) {
            for (var e = t.length, n = [], o = 0; o < e; o += 2) n[o >>> 3] |= parseInt(t.substr(o, 2), 16) << 24 - o % 8 * 4;
            return new s.init(n, e / 2);
          }
        },
        l = c.Latin1 = {
          stringify: function (t) {
            var e = t.words;
            t = t.sigBytes;
            for (var n = [], o = 0; o < t; o++) n.push(String.fromCharCode(e[o >>> 2] >>> 24 - o % 4 * 8 & 255));
            return n.join("");
          },
          parse: function (t) {
            for (var e = t.length, n = [], o = 0; o < e; o++) n[o >>> 2] |= (255 & t.charCodeAt(o)) << 24 - o % 4 * 8;
            return new s.init(n, e);
          }
        },
        u = c.Utf8 = {
          stringify: function (t) {
            try {
              return decodeURIComponent(escape(l.stringify(t)));
            } catch (t) {
              t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
              throw Error("Malformed UTF-8 data");
            }
          },
          parse: function (t) {
            return l.parse(unescape(encodeURIComponent(t)));
          }
        },
        d = o.BufferedBlockAlgorithm = i.extend({
          reset: function () {
            this._data = new s.init(), this._nDataBytes = 0;
          },
          _append: function (t) {
            "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
          },
          _process: function (e) {
            var n = this._data,
              o = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              c = r / (4 * i);
            if (e = (c = e ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0)) * i, r = t.min(4 * e, r),
              e) {
              for (var a = 0; a < e; a += i) this._doProcessBlock(o, a);
              a = o.splice(0, e), n.sigBytes -= r;
            }
            return new s.init(a, r);
          },
          clone: function () {
            var t = i.clone.call(this);
            return t._data = this._data.clone(), t;
          },
          _minBufferSize: 0
        });
      o.Hasher = d.extend({
        cfg: i.extend(),
        init: function (t) {
          this.cfg = this.cfg.extend(t), this.reset();
        },
        reset: function () {
          d.reset.call(this), this._doReset();
        },
        update: function (t) {
          return this._append(t), this._process(), this;
        },
        finalize: function (t) {
          return t && this._append(t), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (t) {
          return function (e, n) {
            return new t.init(n).finalize(e);
          };
        },
        _createHmacHelper: function (t) {
          return function (e, n) {
            return new p.HMAC.init(t, n).finalize(e);
          };
        }
      });
      var p = n.algo = {};
      return n;
    }(Math);
    (function () {
      var t = o,
        e = t.lib.WordArray;
      t.enc.Base64 = {
        stringify: function (t) {
          var e = t.words,
            n = t.sigBytes,
            o = this._map;
          t.clamp(), t = [];
          for (var r = 0; r < n; r += 3)
            for (var i = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, s = 0; 4 > s && r + .75 * s < n; s++) t.push(o.charAt(i >>> 6 * (3 - s) & 63));
          if (e = o.charAt(64))
            for (; t.length % 4;) t.push(e);
          return t.join("");
        },
        parse: function (t) {
          var n = t.length,
            o = this._map;
          (r = o.charAt(64)) && (-1 != (r = t.indexOf(r)) && (n = r));
          for (var r = [], i = 0, s = 0; s < n; s++)
            if (s % 4) {
              var c = o.indexOf(t.charAt(s - 1)) << s % 4 * 2,
                a = o.indexOf(t.charAt(s)) >>> 6 - s % 4 * 2;
              r[i >>> 2] |= (c | a) << 24 - i % 4 * 8, i++;
            }
          return e.create(r, i);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    })(),
    function (t) {
      function e(t, e, n, o, r, i, s) {
        return ((t = t + (e & n | ~e & o) + r + s) << i | t >>> 32 - i) + e;
      }

      function n(t, e, n, o, r, i, s) {
        return ((t = t + (e & o | n & ~o) + r + s) << i | t >>> 32 - i) + e;
      }

      function r(t, e, n, o, r, i, s) {
        return ((t = t + (e ^ n ^ o) + r + s) << i | t >>> 32 - i) + e;
      }

      function i(t, e, n, o, r, i, s) {
        return ((t = t + (n ^ (e | ~o)) + r + s) << i | t >>> 32 - i) + e;
      }
      for (var s = o, c = (l = s.lib).WordArray, a = l.Hasher, l = s.algo, u = [], d = 0; 64 > d; d++) u[d] = 4294967296 * t.abs(t.sin(d + 1)) | 0;
      l = l.MD5 = a.extend({
        _doReset: function () {
          this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function (t, o) {
          for (var s = 0; 16 > s; s++) {
            var c = t[d = o + s];
            t[d] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
          }
          s = this._hash.words;
          var a, l, d = t[o + 0],
            p = (c = t[o + 1], t[o + 2]),
            y = t[o + 3],
            h = t[o + 4],
            _ = t[o + 5],
            f = t[o + 6],
            w = t[o + 7],
            g = t[o + 8],
            m = t[o + 9],
            v = t[o + 10],
            A = t[o + 11],
            b = t[o + 12],
            S = t[o + 13],
            C = t[o + 14],
            I = t[o + 15],
            E = s[0],
            k = i(k = i(k = i(k = i(k = r(k = r(k = r(k = r(k = n(k = n(k = n(k = n(k = e(k = e(k = e(k = e(k = s[1], l = e(l = s[2], a = e(a = s[3], E = e(E, k, l, a, d, 7, u[0]), k, l, c, 12, u[1]), E, k, p, 17, u[2]), a, E, y, 22, u[3]), l = e(l, a = e(a, E = e(E, k, l, a, h, 7, u[4]), k, l, _, 12, u[5]), E, k, f, 17, u[6]), a, E, w, 22, u[7]), l = e(l, a = e(a, E = e(E, k, l, a, g, 7, u[8]), k, l, m, 12, u[9]), E, k, v, 17, u[10]), a, E, A, 22, u[11]), l = e(l, a = e(a, E = e(E, k, l, a, b, 7, u[12]), k, l, S, 12, u[13]), E, k, C, 17, u[14]), a, E, I, 22, u[15]), l = n(l, a = n(a, E = n(E, k, l, a, c, 5, u[16]), k, l, f, 9, u[17]), E, k, A, 14, u[18]), a, E, d, 20, u[19]), l = n(l, a = n(a, E = n(E, k, l, a, _, 5, u[20]), k, l, v, 9, u[21]), E, k, I, 14, u[22]), a, E, h, 20, u[23]), l = n(l, a = n(a, E = n(E, k, l, a, m, 5, u[24]), k, l, C, 9, u[25]), E, k, y, 14, u[26]), a, E, g, 20, u[27]), l = n(l, a = n(a, E = n(E, k, l, a, S, 5, u[28]), k, l, p, 9, u[29]), E, k, w, 14, u[30]), a, E, b, 20, u[31]), l = r(l, a = r(a, E = r(E, k, l, a, _, 4, u[32]), k, l, g, 11, u[33]), E, k, A, 16, u[34]), a, E, C, 23, u[35]), l = r(l, a = r(a, E = r(E, k, l, a, c, 4, u[36]), k, l, h, 11, u[37]), E, k, w, 16, u[38]), a, E, v, 23, u[39]), l = r(l, a = r(a, E = r(E, k, l, a, S, 4, u[40]), k, l, d, 11, u[41]), E, k, y, 16, u[42]), a, E, f, 23, u[43]), l = r(l, a = r(a, E = r(E, k, l, a, m, 4, u[44]), k, l, b, 11, u[45]), E, k, I, 16, u[46]), a, E, p, 23, u[47]), l = i(l, a = i(a, E = i(E, k, l, a, d, 6, u[48]), k, l, w, 10, u[49]), E, k, C, 15, u[50]), a, E, _, 21, u[51]), l = i(l, a = i(a, E = i(E, k, l, a, b, 6, u[52]), k, l, y, 10, u[53]), E, k, v, 15, u[54]), a, E, c, 21, u[55]), l = i(l, a = i(a, E = i(E, k, l, a, g, 6, u[56]), k, l, I, 10, u[57]), E, k, f, 15, u[58]), a, E, S, 21, u[59]), l = i(l, a = i(a, E = i(E, k, l, a, h, 6, u[60]), k, l, A, 10, u[61]), E, k, p, 15, u[62]), a, E, m, 21, u[63]);
          s[0] = s[0] + E | 0, s[1] = s[1] + k | 0, s[2] = s[2] + l | 0, s[3] = s[3] + a | 0;
        },
        _doFinalize: function () {
          var e = this._data,
            n = e.words,
            o = 8 * this._nDataBytes,
            r = 8 * e.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = t.floor(o / 4294967296);
          for (n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
            n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
            e.sigBytes = 4 * (n.length + 1), this._process(), n = (e = this._hash).words, o = 0; 4 > o; o++) r = n[o],
            n[o] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          return e;
        },
        clone: function () {
          var t = a.clone.call(this);
          return t._hash = this._hash.clone(), t;
        }
      }), s.MD5 = a._createHelper(l), s.HmacMD5 = a._createHmacHelper(l);
    }(Math),
    function () {
      var t, e = o,
        n = (t = e.lib).Base,
        r = t.WordArray,
        i = (t = e.algo).EvpKDF = n.extend({
          cfg: n.extend({
            keySize: 4,
            hasher: t.MD5,
            iterations: 1
          }),
          init: function (t) {
            this.cfg = this.cfg.extend(t);
          },
          compute: function (t, e) {
            for (var n = (c = this.cfg).hasher.create(), o = r.create(), i = o.words, s = c.keySize, c = c.iterations; i.length < s;) {
              a && n.update(a);
              var a = n.update(t).finalize(e);
              n.reset();
              for (var l = 1; l < c; l++) a = n.finalize(a), n.reset();
              o.concat(a);
            }
            return o.sigBytes = 4 * s, o;
          }
        });
      e.EvpKDF = function (t, e, n) {
        return i.create(n).compute(t, e);
      };
    }(), o.lib.Cipher || function (t) {
        var e = (h = o).lib,
          n = e.Base,
          r = e.WordArray,
          i = e.BufferedBlockAlgorithm,
          s = h.enc.Base64,
          c = h.algo.EvpKDF,
          a = e.Cipher = i.extend({
            cfg: n.extend(),
            createEncryptor: function (t, e) {
              return this.create(this._ENC_XFORM_MODE, t, e);
            },
            createDecryptor: function (t, e) {
              return this.create(this._DEC_XFORM_MODE, t, e);
            },
            init: function (t, e, n) {
              this.cfg = this.cfg.extend(n), this._xformMode = t, this._key = e, this.reset();
            },
            reset: function () {
              i.reset.call(this), this._doReset();
            },
            process: function (t) {
              return this._append(t), this._process();
            },
            finalize: function (t) {
              return t && this._append(t), this._doFinalize();
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function (t) {
              return {
                encrypt: function (e, n, o) {
                  return ("string" == typeof n ? _ : y).encrypt(t, e, n, o);
                },
                decrypt: function (e, n, o) {
                  return ("string" == typeof n ? _ : y).decrypt(t, e, n, o);
                }
              };
            }
          });
        e.StreamCipher = a.extend({
          _doFinalize: function () {
            return this._process(!0);
          },
          blockSize: 1
        });
        var l = h.mode = {},
          u = function (t, e, n) {
            var o = this._iv;
            o ? this._iv = void 0 : o = this._prevBlock;
            for (var r = 0; r < n; r++) t[e + r] ^= o[r];
          },
          d = (e.BlockCipherMode = n.extend({
            createEncryptor: function (t, e) {
              return this.Encryptor.create(t, e);
            },
            createDecryptor: function (t, e) {
              return this.Decryptor.create(t, e);
            },
            init: function (t, e) {
              this._cipher = t, this._iv = e;
            }
          })).extend();
        d.Encryptor = d.extend({
          processBlock: function (t, e) {
            var n = this._cipher,
              o = n.blockSize;
            u.call(this, t, e, o), n.encryptBlock(t, e), this._prevBlock = t.slice(e, e + o);
          }
        }), d.Decryptor = d.extend({
          processBlock: function (t, e) {
            var n = this._cipher,
              o = n.blockSize,
              r = t.slice(e, e + o);
            n.decryptBlock(t, e), u.call(this, t, e, o), this._prevBlock = r;
          }
        }), l = l.CBC = d, d = (h.pad = {}).Pkcs7 = {
          pad: function (t, e) {
            for (var n, o = (n = (n = 4 * e) - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, i = [], s = 0; s < n; s += 4) i.push(o);
            n = r.create(i, n), t.concat(n);
          },
          unpad: function (t) {
            t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2];
          }
        }, e.BlockCipher = a.extend({
          cfg: a.cfg.extend({
            mode: l,
            padding: d
          }),
          reset: function () {
            a.reset.call(this);
            var t = (e = this.cfg).iv,
              e = e.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var n = e.createEncryptor;
            else n = e.createDecryptor,
              this._minBufferSize = 1;
            this._mode = n.call(e, this, t && t.words);
          },
          _doProcessBlock: function (t, e) {
            this._mode.processBlock(t, e);
          },
          _doFinalize: function () {
            var t = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              t.pad(this._data, this.blockSize);
              var e = this._process(!0);
            } else e = this._process(!0), t.unpad(e);
            return e;
          },
          blockSize: 4
        });
        var p = e.CipherParams = n.extend({
            init: function (t) {
              this.mixIn(t);
            },
            toString: function (t) {
              return (t || this.formatter).stringify(this);
            }
          }),
          y = (l = (h.format = {}).OpenSSL = {
            stringify: function (t) {
              var e = t.ciphertext;
              return ((t = t.salt) ? r.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(s);
            },
            parse: function (t) {
              var e = (t = s.parse(t)).words;
              if (1398893684 == e[0] && 1701076831 == e[1]) {
                var n = r.create(e.slice(2, 4));
                e.splice(0, 4), t.sigBytes -= 16;
              }
              return p.create({
                ciphertext: t,
                salt: n
              });
            }
          }, e.SerializableCipher = n.extend({
            cfg: n.extend({
              format: l
            }),
            encrypt: function (t, e, n, o) {
              o = this.cfg.extend(o);
              var r = t.createEncryptor(n, o);
              return e = r.finalize(e), r = r.cfg, p.create({
                ciphertext: e,
                key: n,
                iv: r.iv,
                algorithm: t,
                mode: r.mode,
                padding: r.padding,
                blockSize: t.blockSize,
                formatter: o.format
              });
            },
            decrypt: function (t, e, n, o) {
              return o = this.cfg.extend(o), e = this._parse(e, o.format), t.createDecryptor(n, o).finalize(e.ciphertext);
            },
            _parse: function (t, e) {
              return "string" == typeof t ? e.parse(t, this) : t;
            }
          })),
          h = (h.kdf = {}).OpenSSL = {
            execute: function (t, e, n, o) {
              return o || (o = r.random(8)), t = c.create({
                keySize: e + n
              }).compute(t, o), n = r.create(t.words.slice(e), 4 * n), t.sigBytes = 4 * e, p.create({
                key: t,
                iv: n,
                salt: o
              });
            }
          },
          _ = e.PasswordBasedCipher = y.extend({
            cfg: y.cfg.extend({
              kdf: h
            }),
            encrypt: function (t, e, n, o) {
              return n = (o = this.cfg.extend(o)).kdf.execute(n, t.keySize, t.ivSize), o.iv = n.iv,
                (t = y.encrypt.call(this, t, e, n.key, o)).mixIn(n), t;
            },
            decrypt: function (t, e, n, o) {
              return o = this.cfg.extend(o), e = this._parse(e, o.format), n = o.kdf.execute(n, t.keySize, t.ivSize, e.salt),
                o.iv = n.iv, y.decrypt.call(this, t, e, n.key, o);
            }
          });
      }(),
      function () {
        for (var t = o, e = t.lib.BlockCipher, n = t.algo, r = [], i = [], s = [], c = [], a = [], l = [], u = [], d = [], p = [], y = [], h = [], _ = 0; 256 > _; _++) h[_] = 128 > _ ? _ << 1 : _ << 1 ^ 283;
        var f = 0,
          w = 0;
        for (_ = 0; 256 > _; _++) {
          var g = (g = w ^ w << 1 ^ w << 2 ^ w << 3 ^ w << 4) >>> 8 ^ 255 & g ^ 99;
          r[f] = g, i[g] = f;
          var m = h[f],
            v = h[m],
            A = h[v],
            b = 257 * h[g] ^ 16843008 * g;
          s[f] = b << 24 | b >>> 8, c[f] = b << 16 | b >>> 16, a[f] = b << 8 | b >>> 24, l[f] = b,
            b = 16843009 * A ^ 65537 * v ^ 257 * m ^ 16843008 * f, u[g] = b << 24 | b >>> 8,
            d[g] = b << 16 | b >>> 16, p[g] = b << 8 | b >>> 24, y[g] = b, f ? (f = m ^ h[h[h[A ^ m]]],
              w ^= h[h[w]]) : f = w = 1;
        }
        var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        n = n.AES = e.extend({
          _doReset: function () {
            for (var t = (n = this._key).words, e = n.sigBytes / 4, n = 4 * ((this._nRounds = e + 6) + 1), o = this._keySchedule = [], i = 0; i < n; i++)
              if (i < e) o[i] = t[i];
              else {
                var s = o[i - 1];
                i % e ? 6 < e && 4 == i % e && (s = r[s >>> 24] << 24 | r[s >>> 16 & 255] << 16 | r[s >>> 8 & 255] << 8 | r[255 & s]) : (s = r[(s = s << 8 | s >>> 24) >>> 24] << 24 | r[s >>> 16 & 255] << 16 | r[s >>> 8 & 255] << 8 | r[255 & s],
                  s ^= S[i / e | 0] << 24), o[i] = o[i - e] ^ s;
              }
            for (t = this._invKeySchedule = [], e = 0; e < n; e++) i = n - e, s = e % 4 ? o[i] : o[i - 4],
              t[e] = 4 > e || 4 >= i ? s : u[r[s >>> 24]] ^ d[r[s >>> 16 & 255]] ^ p[r[s >>> 8 & 255]] ^ y[r[255 & s]];
          },
          encryptBlock: function (t, e) {
            this._doCryptBlock(t, e, this._keySchedule, s, c, a, l, r);
          },
          decryptBlock: function (t, e) {
            var n = t[e + 1];
            t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, u, d, p, y, i),
              n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n;
          },
          _doCryptBlock: function (t, e, n, o, r, i, s, c) {
            for (var a = this._nRounds, l = t[e] ^ n[0], u = t[e + 1] ^ n[1], d = t[e + 2] ^ n[2], p = t[e + 3] ^ n[3], y = 4, h = 1; h < a; h++) {
              var _ = o[l >>> 24] ^ r[u >>> 16 & 255] ^ i[d >>> 8 & 255] ^ s[255 & p] ^ n[y++],
                f = o[u >>> 24] ^ r[d >>> 16 & 255] ^ i[p >>> 8 & 255] ^ s[255 & l] ^ n[y++],
                w = o[d >>> 24] ^ r[p >>> 16 & 255] ^ i[l >>> 8 & 255] ^ s[255 & u] ^ n[y++];
              p = o[p >>> 24] ^ r[l >>> 16 & 255] ^ i[u >>> 8 & 255] ^ s[255 & d] ^ n[y++], l = _,
                u = f, d = w;
            }
            _ = (c[l >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & p]) ^ n[y++],
              f = (c[u >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & l]) ^ n[y++],
              w = (c[d >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & u]) ^ n[y++],
              p = (c[p >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & d]) ^ n[y++],
              t[e] = _, t[e + 1] = f, t[e + 2] = w, t[e + 3] = p;
          },
          keySize: 8
        });
        t.AES = e._createHelper(n);
      }(), e.exports = o, cc._RF.pop();
  }, {}],
  wxADControls: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "946a0rMn/9OoYnbnOnRaFa3", "wxADControls");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../FrameWork/Config/AppSwitchConfig"),
      s = t("../../../../FrameWork/Event/EventEnum"),
      c = t("../../../../FrameWork/Event/EventMgr"),
      a = t("../../../../FrameWork/Interface/FMInterface"),
      l = t("../../../../FrameWork/Mgr/GameMgr"),
      u = t("../../../../FrameWork/Mgr/WudianMgr"),
      d = t("../../../../FrameWork/Mgr/WudianMgr"),
      p = t("../../../../FrameWork/Util/AppPlatform"),
      y = t("../../../../FrameWork/Util/Common"),
      h = t("../../../../FrameWork/Util/Utilit"),
      _ = t("../../../CustimWxApi"),
      f = t("../../BannerMgr"),
      w = t("../../BannerPos"),
      g = t("../../BeforeMainNativeUI"),
      m = t("../../WXAPI"),
      v = t("./event/ADPageEventEnum"),
      A = t("./event/ADPageEventMgr"),
      b = t("./pages/CrazyClickView"),
      S = t("./pages/ExportView"),
      C = t("./pages/GameView"),
      I = t("./pages/HotPlayView"),
      E = t("./pages/InstallExportView"),
      k = t("./pages/MainView"),
      T = t("./pages/MoreView"),
      M = t("./pages/MyCrazy"),
      P = t("./pages/RankingView"),
      D = t("./pages/ResultView"),
      O = cc._decorator,
      L = O.ccclass,
      R = O.property,
      B = O.disallowMultiple,
      F = O.menu,
      N = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.morePrefab = null, e.hotPlayPrefab = null, e.rankingPrefab = null, e.mainPrefab = null,
            e.gamePrefab = null, e.resultPrefab = null, e.exportPrefab = null, e.crazyPrefab = null,
            e.exportInstallPrefab = null, e.myCrazyPrefab = null, e.export = null, e.game = null,
            e.hotPlay = null, e.main = null, e.result = null, e.ranking = null, e.more = null,
            e.crazy = null, e.myCrazy = null, e.exportInstall = null, e.isFirstInGame = !0,
            e.isFirst = !0, e.beforeNativePrefab = null, e.beforeNat = null, e;
        }
        var n;
        return o(e, t), n = e, e.prototype.showWXBanner_csryw = function () {
          p.default.is_WECHAT_GAME_csryw() && f.default.showBanner_csryw(w.BannerPos.Center_Bottom, 0, -30);
        }, e.prototype.hideWXBanner_csryw = function () {
          f.default.hideBanner_csryw();
        }, e.prototype.onLoad = function () {
          console.log("加载成功...."), A.default.onEvent_csryw(v.PageEvent.SHOW_MAIN, this.showMain, this),
            A.default.onEvent_csryw(v.PageEvent.HIDE_MAIN, this.hideMain, this), A.default.onEvent_csryw(v.PageEvent.SHOW_CRAZY, this.showCrazy, this),
            A.default.onEvent_csryw(v.PageEvent.SHOW_MORE, this.showMore, this), A.default.onEvent_csryw(v.PageEvent.SHOW_RESULT, this.showResult, this),
            A.default.onEvent_csryw(v.PageEvent.SHOW_RANKING, this.showRanking, this), A.default.onEvent_csryw(v.PageEvent.SHOW_GAME, this.showGame, this),
            A.default.onEvent_csryw(v.PageEvent.HIDE_GAME, this.hideGame, this), A.default.onEvent_csryw(v.PageEvent.SHOW_MYCrazy, this.showMyCrazy, this),
            A.default.onEvent_csryw(v.PageEvent.HIDE_MYCrazy, this.hideMyCrazy, this), A.default.onEvent_csryw(v.PageEvent.SHOW_BEFORENATIVE, this.showBeforeNative, this),
            A.default.onEvent_csryw(v.PageEvent.SHOW_EXPORT, this.showExport, this), A.default.onEvent_csryw(v.PageEvent.SHOW_HOTPLAY, this.showHotPlay, this),
            A.default.onEvent_csryw(v.ADEvent.SHOW_BANNER, this.showWXBanner_csryw, this), A.default.onEvent_csryw(v.ADEvent.HIDE_BANNER, this.hideWXBanner_csryw, this),
            A.default.onEvent_csryw(v.PageEvent.SHOW_EXPORT_INSTALL, this.showExportInstall, this),
            c.default.onEvent_csryw(s.ryw_Event.ryw_ADKRQ_ClickQuit_csryw, this.onADCancel, this);
        }, e.prototype.onADCancel = function (t) {
          var e = this,
            n = function () {
              d.default.wudianFlag_csryw && h.default.checkVersions_csryw() && 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isJumpHotPlay_csryw && (A.default.emitEvent_csryw(v.PageEvent.HIDE_NATIVEAD),
                e.showHotPlay());
            },
            o = !0;
          t && (o = "jump" == t), m.default.isCanShowVideo() && o ? m.default.showRewardedVideoAd_csryw(function () {}, function () {
            n();
          }) : n();
        }, e.prototype.showCrazy = function (t) {
          var e = this;
          console.log("狂点...."), null == this.crazy && (this.crazy = y.default.createPrefab_csryw(this.crazyPrefab, b.default, this.node),
            this.crazy.onListenerEventView_csryw(a.handleFM_csryw(function (n) {
              n == e.crazy.EventEnumView_csryw.okBtn_csryw && (e.crazy.removeView_csryw(), e.crazy = null,
                t && t());
            }, this))), this.crazy.showView_csryw();
        }, e.prototype.showMyCrazy = function (t) {
          console.log("狂点...."), null == this.myCrazy && (this.myCrazy = y.default.createPrefab_csryw(this.myCrazyPrefab, M.default, this.node)),
            this.myCrazy.showView_csryw();
        }, e.prototype.hideMyCrazy = function () {
          null != this.myCrazy && (this.myCrazy.removeView_csryw(), this.myCrazy = null);
        }, e.prototype.hideMain = function () {
          null != this.main && (this.main.removeView_csryw(), this.main = null);
        }, e.prototype.showExportInstall = function () {
          var t = this;
          null == this.exportInstall && (this.exportInstall = y.default.createPrefab_csryw(this.exportInstallPrefab, E.default, this.node),
            this.exportInstall.onListenerEventView_csryw(a.handleFM_csryw(function (e) {
              e == t.exportInstall.EventEnumView_csryw.ContinueGame_csryw && (t.exportInstall.removeView_csryw(),
                t.exportInstall = null);
            }, this))), this.exportInstall.showView_csryw();
        }, e.prototype.showMain = function () {
          var t = this;
          this.isFirst ? (this.isFirst = !1, d.default.wudianFlag_csryw && h.default.checkVersions_csryw() && 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.before_main_native_csryw && A.default.emitEvent_csryw(v.PageEvent.SHOW_BEFORENATIVE, !0)) : u.default.wudianFlag_csryw && h.default.checkVersions_csryw() && 1 == i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isShowMainNative_csryw && _.default.showCustimAd(_.CustimWxTag.EnumCustimResultPop),
            console.log("firstOpen_csryw", i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.firstOpen_csryw),
            d.default.wudianFlag_csryw && h.default.checkVersions_csryw() && i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.firstOpen_csryw > 0 && this.isFirstInGame && (this.isFirstInGame = !1,
              m.default.showRewardedVideoAd_csryw(function (t) {}, function () {})), null == this.main && (this.main = y.default.createPrefab_csryw(this.mainPrefab, k.default, this.node),
              this.main.setP_csryw({
                SlideSkip: 1,
                ForceSkip: 0
              }), console.log("main..."), this.main.onListenerEventView_csryw(a.handleFM_csryw(function (e) {
                e == t.main.EventEnumView_csryw.StartGame_csryw && (t.main.removeView_csryw(), t.main = null,
                  t.showGame(), console.log("关闭主页,打开游戏页"));
              }, this))), this.main.showView_csryw();
        }, e.prototype.showHotPlay = function (t) {
          var e = this;
          void 0 === t && (t = !1), null == this.hotPlay && (this.hotPlay = y.default.createPrefab_csryw(this.hotPlayPrefab, I.default, this.node),
            this.hotPlay.setP_csryw({
              SlideSkip: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.hyrw_SlideSkip_csryw,
              ForceSkip: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.hyrw_ForceSkip_csryw,
              isFirstPop: l.default.getInstance_csryw().isFirstPop,
              JumpVideo: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isHotPlayJumpVideo_csryw
            }), console.log("hot..."), this.hotPlay.onListenerEventView_csryw(a.handleFM_csryw(function (o) {
              o == e.hotPlay.EventEnumView_csryw.ContinueGame_csryw && (A.default.emitEvent_csryw(v.PageEvent.SHOW_NATIVEAD),
                e.hotPlay.removeView_csryw(), e.hotPlay = null, t && l.default.getInstance_csryw().onLoadToWorldScene_csryw(),
                n.isFirstHotPlay && (n.isFirstHotPlay = !1, m.default.showNativeADBig(function () {}, 28.88, 28.88)));
            }, this))), this.hotPlay.showView_csryw();
        }, e.prototype.showMore = function (t, e) {
          var n = this;
          void 0 === t && (t = !0), void 0 === e && (e = 1), l.default.getInstance_csryw().isFirstPopMore = 2 == e,
            (1 == e || i.default.getInstance_csryw().getAppSwitchData_csryw().homePageExportIsOpen_csryw && h.default.checkVersions_csryw() && d.default.wudianFlag_csryw) && (null == this.more && (this.more = y.default.createPrefab_csryw(this.morePrefab, T.default, this.node),
              this.more.setP_csryw({
                SlideSkip: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.tc_SlideSkip_csryw,
                ForceSkip: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.tc_ForceSkip_csryw,
                JumpVideo: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isMoreJumpVideo_csryw
              }), console.log("more..."), this.more.onListenerEventView_csryw(a.handleFM_csryw(function (t) {
                t == n.more.EventEnumView_csryw.ContinueGame_csryw && (A.default.emitEvent_csryw(v.ADEvent.SHOW_BANNER),
                  n.more.removeView_csryw(), n.more = null);
              }, this))), this.more.showView_csryw());
        }, e.prototype.showExport = function (t) {
          var e = this;
          void 0 === t && (t = !0), console.log("showExportshowExportshowExport"), null == this.export && (this.export = y.default.createPrefab_csryw(this.exportPrefab, S.default, this.node),
            this.export.onListenerEventView_csryw(a.handleFM_csryw(function (t) {
              t == e.export.EventEnumView_csryw.ContinueGame_csryw && (e.export.removeView_csryw(),
                e.export = null, e.showHotPlay(!0));
            }, this))), this.export.showView_csryw();
        }, e.prototype.showRanking = function (t) {
          var e = this;
          void 0 === t && (t = P.PageType.resultToRanking), console.log("showRanking" + t),
            null == this.ranking && (this.ranking = y.default.createPrefab_csryw(this.rankingPrefab, P.default, this.node),
              this.ranking.setP_csryw({
                SlideSkip: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.phb_SlideSkip_csryw,
                ForceSkip: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.phb_ForceSkip_csryw,
                JumpVideo: i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.isRankJumpVideo_csryw
              }), console.log("rank..."), this.ranking.onListenerEventView_csryw(a.handleFM_csryw(function (t) {
                t == e.ranking.EventEnumView_csryw.Close_csryw ? (A.default.emitEvent_csryw(v.ADEvent.SHOW_BANNER),
                  e.ranking.removeView_csryw(), e.ranking = null) : t == e.ranking.EventEnumView_csryw.ToHotPlay ? e.showHotPlay() : t == e.ranking.EventEnumView_csryw.Export && (console.log("this.ranking.EventEnumView_csryw.Export"),
                  e.ranking.removeView_csryw(), e.ranking = null, e.showExport());
              }, this))), this.ranking.setPageType(t), this.ranking.showView_csryw();
        }, e.prototype.showResult = function (t, e) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), 0 != i.default.getInstance_csryw().getAppSwitchData_csryw().wxcfg_csryw.ShowResult && (null == this.result && (this.result = y.default.createPrefab_csryw(this.resultPrefab, D.default, this.node)),
            console.log("showResult:" + e), this.result.updateOpenViewData_csryw(e), this.result.showView_csryw());
        }, e.prototype.hideGame = function () {
          null != this.game && (this.game.removeView_csryw(), this.game = null);
        }, e.prototype.showGame = function (t) {
          void 0 === t && (t = !0), console.log("showGame..."), null != this.main && (this.main.removeView_csryw(),
            this.main = null), null == this.game ? (this.game = y.default.createPrefab_csryw(this.gamePrefab, C.default, this.node),
            this.game.setP_csryw({
              SlideSkip: 1,
              ForceSkip: 0
            }), console.log("game..."), this.game.showView_csryw()) : t || (this.game.removeView_csryw(),
            this.game = null);
        }, e.prototype.showBeforeNative = function (t) {
          void 0 === t && (t = !0), console.log("ly+++++++ 首页前原生页"), null == this.beforeNat ? (this.beforeNat = y.default.createPrefab_csryw(this.beforeNativePrefab, g.default, this.node),
            this.beforeNat.showView_csryw()) : t ? this.beforeNat.showView_csryw() : (this.beforeNat.removeView_csryw(),
            this.beforeNat = null);
        }, e.isFirstHotPlay = !0, r([R({
          tooltip: "更多好玩",
          type: cc.Prefab
        })], e.prototype, "morePrefab", void 0), r([R({
          tooltip: "好友热玩",
          type: cc.Prefab
        })], e.prototype, "hotPlayPrefab", void 0), r([R({
          tooltip: "排行榜",
          type: cc.Prefab
        })], e.prototype, "rankingPrefab", void 0), r([R({
          tooltip: "主页",
          type: cc.Prefab
        })], e.prototype, "mainPrefab", void 0), r([R({
          tooltip: "游戏页",
          type: cc.Prefab
        })], e.prototype, "gamePrefab", void 0), r([R({
          tooltip: "结算页",
          type: cc.Prefab
        })], e.prototype, "resultPrefab", void 0), r([R({
          tooltip: "导出页",
          type: cc.Prefab
        })], e.prototype, "exportPrefab", void 0), r([R({
          tooltip: "狂点页",
          type: cc.Prefab
        })], e.prototype, "crazyPrefab", void 0), r([R({
          tooltip: "拼裝导出页",
          type: cc.Prefab
        })], e.prototype, "exportInstallPrefab", void 0), r([R({
          tooltip: "自定义狂点页",
          type: cc.Prefab
        })], e.prototype, "myCrazyPrefab", void 0), r([R({
          tooltip: "首页前原生页",
          type: cc.Prefab
        })], e.prototype, "beforeNativePrefab", void 0), e = n = r([L, B(), F("框架组件/微信主流程")], e);
      }(cc.Component);
    n.default = N, cc._RF.pop();
  }, {
    "../../../../FrameWork/Config/AppSwitchConfig": "AppSwitchConfig",
    "../../../../FrameWork/Event/EventEnum": "EventEnum",
    "../../../../FrameWork/Event/EventMgr": "EventMgr",
    "../../../../FrameWork/Interface/FMInterface": "FMInterface",
    "../../../../FrameWork/Mgr/GameMgr": "GameMgr",
    "../../../../FrameWork/Mgr/WudianMgr": "WudianMgr",
    "../../../../FrameWork/Util/AppPlatform": "AppPlatform",
    "../../../../FrameWork/Util/Common": "Common",
    "../../../../FrameWork/Util/Utilit": "Utilit",
    "../../../CustimWxApi": "CustimWxApi",
    "../../BannerMgr": "BannerMgr",
    "../../BannerPos": "BannerPos",
    "../../BeforeMainNativeUI": "BeforeMainNativeUI",
    "../../WXAPI": "WXAPI",
    "./event/ADPageEventEnum": "ADPageEventEnum",
    "./event/ADPageEventMgr": "ADPageEventMgr",
    "./pages/CrazyClickView": "CrazyClickView",
    "./pages/ExportView": "ExportView",
    "./pages/GameView": "GameView",
    "./pages/HotPlayView": "HotPlayView",
    "./pages/InstallExportView": "InstallExportView",
    "./pages/MainView": "MainView",
    "./pages/MoreView": "MoreView",
    "./pages/MyCrazy": "MyCrazy",
    "./pages/RankingView": "RankingView",
    "./pages/ResultView": "ResultView"
  }],
  wxViewBase: [function (t, e, n) {
    "use strict";
    cc._RF.push(e, "530e0LufbJC/YAmDS+z3wf5", "wxViewBase");
    var o = this && this.__extends || function () {
        var t = function (e, n) {
          return (t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(e, n);
        };
        return function (e, n) {
          function o() {
            this.constructor = e;
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
            new o());
        };
      }(),
      r = this && this.__decorate || function (t, e, n, o) {
        var r, i = arguments.length,
          s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
        else
          for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = t("../../../../FrameWork/Base/FMViewBase"),
      s = t("./event/ADPageEventEnum"),
      c = t("./event/ADPageEventMgr"),
      a = cc._decorator,
      l = a.ccclass,
      u = (a.property,
        a.disallowMultiple),
      d = a.menu,
      p = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return o(e, t), e.prototype.initView_csryw = function () {
            this.hideBanner_csryw();
          }, e.prototype.addEvent_csryw = function () {}, e.prototype.removeEvent_csryw = function () {},
          e.prototype.showBanner_csryw = function () {
            c.default.emitEvent_csryw(s.ADEvent.SHOW_BANNER);
          }, e.prototype.hideBanner_csryw = function () {
            c.default.emitEvent_csryw(s.ADEvent.HIDE_BANNER);
          }, e = r([l, u(), d("框架组件/微信基类")], e);
      }(i.default);
    n.default = p, cc._RF.pop();
  }, {
    "../../../../FrameWork/Base/FMViewBase": "FMViewBase",
    "./event/ADPageEventEnum": "ADPageEventEnum",
    "./event/ADPageEventMgr": "ADPageEventMgr"
  }]
}, {}, ["FMComponentExtend", "FMViewBase", "FMButton", "FMItemLayout", "FMScrollViewLoop", "FMSkeletonExtend", "FMSpine", "FMTouchMaskView", "AppConfig", "AppSwitchConfig", "EventEnum", "EventMgr", "FMInterface", "Main", "BundleMgr", "DebugInfoMgr", "GameMgr", "RYPlatformMgr", "RemoteMgr", "SoundMgr", "StorageMgr", "TimerUtils", "UmengMgr", "VibrateMgr", "WudianMgr", "AesTools", "HttpUnit", "NetConfig", "aes", "RYAD", "RYSDK", "RYSTAT", "User", "ALD", "AppPlatform", "Common", "DateUtils", "LogUtils", "MaiLiang", "ShareAd", "Utilit", "ADLimitListView", "ADListView", "ADSingle", "FMGameFailScene", "FMGameScene", "FMGameWinScene", "FMMainScene", "KRQ_Base", "DialogLoading", "LoadingView", "Camera", "CameraGhost", "Constants", "Game", "GhostNode", "CrazyView", "ExDialogView", "ExScrollView", "Hud", "IconSkill", "Progress", "TipDialog", "GameEndUI", "GameUI", "GuidingLayer", "AddMoneyView", "DinosaurJigsaw", "DinosaurMask", "LobbyDinosaurSpine", "PartGrating", "PartImage", "RoleScrollView", "RoleSelectView", "SettleView", "ThumbnailImage", "TransitionScene", "Joystick", "JoystickEnum", "AIMiddleConfig", "AINormalConfig", "ConfigMgr", "DinosaurConfig", "GlobalConfig", "LevelConfig", "SkillConfig", "CharEffect", "Character", "CharacterActCollider", "CharacterActionState", "CharacterAnimtor", "CharacterShapeCollider", "CustomUser", "DamageInfo", "DinosaurProperty", "EventTypeDef", "Property", "SoundEffect", "AIBase", "AIMiddle", "AINormal", "LimiteRangeThroing", "UnlimitedRangeThrowing", "AdFrameWork", "EventCenter", "KeyboardCenter", "ResCenter", "SoundsManager", "ActionState", "State", "StateMachine", "StateTransition", "Utils", "KuanDian", "KuanDianAni", "NodePoolMag", "ShowKuanDian", "CustimWxApi", "ShowAndHideAD", "FMJava", "FMOC", "OPPOAPI", "OPPONativeAdViewTemplate", "CachedQQBannerAd", "QQMiniGameAPI", "QCrazyClickView", "QQCrazyClickView", "QQCrazyClickView2", "QQGameSettleViewTemplate", "QQGameViewTemplate", "QQMainViewTemplate", "TTAPI", "TTExport2Template", "TTGameSettleViewTemplate", "TTGameViewTemplate", "TTMainViewTemplate", "TTMoreReward", "TTRelive", "TTReward", "TTRewardBox", "TTShareRecord", "TTSignIn", "TTStartTry", "VIVOAPI", "VIVOGameSettleViewTemplate", "VIVOGameWin", "VVNativeAd1View", "VVNativeAd2View", "Banner", "BannerMgr", "BannerPos", "BeforeMainNativeUI", "WXAPI", "WXHttp", "AutoRotation", "SingleExportAD", "SingleExportGroups", "ADPageEventEnum", "ADPageEventMgr", "CrazyClickView", "ExportView", "GameView", "HotPlayView", "InstallExportView", "MainView", "MoreView", "MyCrazy", "RankingView", "ResultView", "wxADControls", "wxViewBase", "ADGameBanner", "ADWXBanner", "FMViewBaseWx", "WXADMgr", "RYGameBase", "RYGameEventMgr"]);