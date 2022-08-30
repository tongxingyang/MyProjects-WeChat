cc.Node.__flGetChildByName = cc.Node.getChildByName, cc.Node.getChildByName = function(e) {
    return this.__childCaches = this.__childCaches || {}, this.__childCaches[e] ? this.__childCaches[e] : (this.__childCaches[e] = this.__flGetChildByName(e), 
    this.__childCaches[e]);
};

var EFLLogLevel = cc.Enum({
    DISABLE: 0,
    ERROR: 1,
    WARN: 2,
    FRAMEWORK: 3,
    INFO: 4,
    LOG: 5,
    ALL: 6
}), isEnabledGlobalTouch = !0, FLBehavior = cc.Class({
    name: "FLBehavior",
    extends: cc.Component,
    properties: {
        logLevel: {
            default: EFLLogLevel.DISABLE,
            type: EFLLogLevel,
            tooltip: "日志级别:\n            \n            当日志级别低于某个级别时，该级别日志将被隐藏。\n\n            【级别从低到高顺序如下】\n\n            DISABLE: 禁用所有日志,\n            ERROR: 输出错误,\n            WARN: 输出警告和错误,\n            FRAMEWORK: 输出框架日志,\n            INFO: 输出调试信息,\n            LOG: 输出普通日志,\n            ALL: 输出所有级别日志\n            ",
            visible: function visible() {
                return this.isOpenLog;
            }
        },
        isOpenLog: {
            default: !1,
            tooltip: "是否开启调试日志输出"
        },
        allEvents: {
            default: {},
            visible: !1
        }
    },
    onEnable: function onEnable() {
        var e;
        for (var t in this.allEvents) {
            (e = this.allEvents[t]) && e.map(function(e) {
                e.isRegisted || (cc.systemEvent.on(e.eventName, e.callback, e.target), e.isRegisted = !0);
            });
        }
        this.onEnabled && this.onEnabled();
    },
    onDisable: function onDisable() {
        var e;
        for (var t in this.allEvents) {
            (e = this.allEvents[t]) && e.map(function(e) {
                e.isRegisted && !e.isResident && (cc.systemEvent.off(e.eventName, e.callback, e.target), 
                e.isRegisted = !1);
            });
        }
        this.onDisabled && this.onDisabled();
    },
    onLoad: function onLoad() {
        this.onBindEvents && this.onBindEvents(), this.onLoadConfig && this.onLoadConfig(), 
        this.onLoaded && this.onLoaded();
    },
    start: function start() {
        this.onStart && this.onStart();
    },
    update: function update(e) {
        this.onUpdate ? (this.update = this.onUpdate, this.onUpdate(e)) : this.update = function(e) {};
    },
    lateUpdate: function lateUpdate(e) {
        this.onLateUpdate ? (this.lateUpdate = this.onLateUpdate, this.onLateUpdate(e)) : this.lateUpdate = function(e) {};
    },
    onDestroy: function onDestroy() {
        {
            var e;
            for (var t in this.allEvents) {
                (e = this.allEvents[t]) && e.map(function(e) {
                    e.isRegisted && (cc.systemEvent.off(e.eventName, e.callback, e.target), e.isRegisted = !1);
                });
            }
        }
        this.onRemoveEvents && this.onRemoveEvents(), this.onDestroyed && this.onDestroyed();
    },
    onBindEvents: function onBindEvents() {
        (this.onTouchStart || this.onTouchEnded) && (this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this), 
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this)), 
        this.onTouchMoved && this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this), 
        this.onAddEvents && this.onAddEvents();
    },
    _onTouchStart: function _onTouchStart(e) {
        isEnabledGlobalTouch && this._getTouchId(e) > 0 || this.onTouchStart && this.onTouchStart(e);
    },
    _onTouchMoved: function _onTouchMoved(e) {
        isEnabledGlobalTouch && this._getTouchId(e) > 0 || this.onTouchMoved && this.onTouchMoved(e);
    },
    _onTouchEnded: function _onTouchEnded(e) {
        isEnabledGlobalTouch && this._getTouchId(e) > 0 || this.onTouchEnded && this.onTouchEnded(e);
    },
    _onTouchCancelled: function _onTouchCancelled(e) {
        isEnabledGlobalTouch && this._getTouchId(e) > 0 || (this.onTouchCancelled ? this.onTouchCancelled(e) : this.onTouchEnded && this.onTouchEnded(e));
    },
    _getTouchId: function _getTouchId(e) {
        return e.getTouches().indexOf(e.touch);
    },
    registerEvent: function registerEvent(e, t, n, o) {
        o = !!o, this.allEvents[e] = this.allEvents[e] || [];
        var i = !1;
        this.enabled && (cc.systemEvent.on(e, t, n), i = !0), this.allEvents[e].push({
            eventName: e,
            callback: t,
            target: n,
            isResident: o,
            isRegisted: i
        });
    },
    setEnableTouchOneByOne: function setEnableTouchOneByOne(e) {
        isEnabledGlobalTouch = !!e;
    },
    ifnull: function ifnull(e, t) {
        return void 0 === e || null === e ? t : e;
    },
    isEmpty: function isEmpty(e) {
        return void 0 === e || null === e;
    },
    isEmptyString: function isEmptyString(e) {
        return void 0 === e || null === e || "" === e;
    },
    debugLog: function debugLog(e) {
        if (e && "info" !== e || (e = "log"), this.isOpenLog) try {
            throw new Error();
        } catch (n) {
            n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
            var _cc, _cc2;
            var o = n.stack.replace(/Error\n/).split(/\n/)[2].split(" "), i = (o[5], (o[6] || o[5]).split("assets")[1]);
            for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                t[_key - 1] = arguments[_key];
            }
            cc[e] ? (_cc = cc)[e].apply(_cc, [ "【(".concat(i, "】:") ].concat(t)) : (_cc2 = cc).log.apply(_cc2, [ "【(".concat(i, "】:") ].concat(t));
        }
    },
    error: function error() {
        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            e[_key2] = arguments[_key2];
        }
        this.logLevel < EFLLogLevel.ERROR || this.debugLog.apply(this, [ "error" ].concat(e));
    },
    warn: function warn() {
        for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            e[_key3] = arguments[_key3];
        }
        this.logLevel < EFLLogLevel.WARN || this.debugLog.apply(this, [ "warn" ].concat(e));
    },
    frameLog: function frameLog() {
        for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            e[_key4] = arguments[_key4];
        }
        this.logLevel < EFLLogLevel.FRAMEWORK || this.debugLog.apply(this, [ "info" ].concat(e));
    },
    info: function info() {
        for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            e[_key5] = arguments[_key5];
        }
        this.logLevel < EFLLogLevel.INFO || this.debugLog.apply(this, [ "info" ].concat(e));
    },
    log: function log() {
        for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            e[_key6] = arguments[_key6];
        }
        this.logLevel < EFLLogLevel.LOG || this.debugLog.apply(this, [ "log" ].concat(e));
    },
    logCallStack: function logCallStack() {
        if (this.isOpenLog) try {
            throw new Error();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            var t = e.stack.replace(/Error\n/).split(/\n/), n = "Method call on:\n";
            for (var _e = 1; _e < t.length; ++_e) {
                n += "    ".concat(t[_e], "\n");
            }
            cc.log(n);
        }
    }
});

window.FLBehavior = FLBehavior;

var EZIndex = cc.Enum({
    NORMAL: 100,
    WIDGET: 5e3,
    WINDOW: 1e4,
    DIALOG: 15e3,
    TIP: cc.macro.MAX_ZINDEX - 1e3,
    MAX: cc.macro.MAX_ZINDEX - 100
}), FLUIPanel = cc.Class({
    name: "FLUIPanel",
    extends: FLBehavior,
    properties: {
        zIndex: {
            default: EZIndex.NORMAL,
            type: EZIndex,
            tooltip: "层级管理\n            NORMAL：默认面板\n            WIDGET：挂件\n            WINDOW：一级弹窗\n            DIALOG：二级弹窗\n            TIP：顶层提示\n            MAX：超顶层UI"
        },
        parentUIName: {
            default: "",
            tooltip: "父节点UI名称，默认添加到Canvas节点上"
        }
    }
});

window.FLUIPanel = FLUIPanel;