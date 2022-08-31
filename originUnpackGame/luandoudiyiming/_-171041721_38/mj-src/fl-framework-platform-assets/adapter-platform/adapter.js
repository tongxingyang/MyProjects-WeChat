window.fl = window.fl || {}, fl.adapter = fl.adapter || {}, fl.EPlatformType = {
    MINI_GAME_WX: "MINI_GAME_WX",
    MINI_GAME_TT: "MINI_GAME_TT",
    MINI_GAME_QQ: "MINI_GAME_QQ",
    MINI_GAME_OPPO: "MINI_GAME_OPPO",
    MINI_GAME_VIVO: "MINI_GAME_VIVO",
    H5: "H5",
    NATIVE: "NATIVE"
}, fl.platform = fl.EPlatformType.MINI_GAME_WX, fl.adapter = window.wx || {}, window.qq ? (fl.platform = fl.EPlatformType.MINI_GAME_QQ, 
fl.adapter = window.qq) : window.tt ? (fl.platform = fl.EPlatformType.MINI_GAME_TT, 
fl.adapter = window.tt) : window.qg && cc.sys.platform !== cc.sys.VIVO_GAME ? (fl.platform = fl.EPlatformType.MINI_GAME_OPPO, 
fl.adapter = window.qg) : window.qg ? (fl.platform = fl.EPlatformType.MINI_GAME_VIVO, 
fl.adapter = window.qg) : cc.sys.isBrowser ? fl.platform = fl.EPlatformType.H5 : window.wx ? (fl.platform = fl.EPlatformType.MINI_GAME_WX, 
fl.adapter = window.wx) : cc.sys.isNative && (fl.platform = fl.EPlatformType.NATIVE), 
fl.adapter.isMiniGameWX = fl.platform === fl.EPlatformType.MINI_GAME_WX, fl.adapter.isMiniGameQQ = fl.platform === fl.EPlatformType.MINI_GAME_QQ, 
fl.adapter.isMiniGameTT = fl.platform === fl.EPlatformType.MINI_GAME_TT, fl.adapter.isMiniGameOPPO = fl.platform === fl.EPlatformType.MINI_GAME_OPPO, 
fl.adapter.isMiniGameVIVO = fl.platform === fl.EPlatformType.MINI_GAME_VIVO, fl.adapter.isH5 = fl.platform === fl.EPlatformType.H5, 
fl.adapter.isNative = fl.platform === fl.EPlatformType.NATIVE, fl._log = console.log, 
fl.log = function() {
    var _fl;
    for (var _len = arguments.length, l = new Array(_len), _key = 0; _key < _len; _key++) {
        l[_key] = arguments[_key];
    }
    return (_fl = fl)._log.apply(_fl, [ "fl.framework ===>>>" ].concat(l));
}, fl.warn = function() {
    var _cc;
    for (var _len2 = arguments.length, l = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        l[_key2] = arguments[_key2];
    }
    return (_cc = cc).warn.apply(_cc, [ "fl.framework ===>>>" ].concat(l));
}, fl.logCallStack = function() {
    return fl.log(new Error().stack);
}, window._gameStartTime = Math.floor(Date.now() / 1e3), fl.gameStartTime = function() {
    return fl._gameStartTime;
}, fl.getRunTime = function() {
    return Math.floor(Date.now() / 1e3) - fl._gameStartTime;
}, fl.version = "3.1.1", fl._audioClips = [], fl.isEmpty = function(l) {
    return void 0 === l || null === l;
}, fl.isEmptyString = function(l) {
    return fl.isEmpty(l) || "" === l;
}, fl.ifnull = function(l, a) {
    return void 0 === l || null === l ? a : l;
}, fl.i18nString = function(l) {
    return l;
}, fl.showToast = function(l) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.5;
    fl.adapter.isMiniGameVIVO ? a = a > 1.5 ? 1 : 0 : a *= 1e3, fl.adapter.showToast({
        title: fl.i18nString(l),
        duration: a
    });
}, cc.game && cc.game.on && cc.game.on(cc.game.EVENT_SHOW, function(l) {
    cc.systemEvent && cc.systemEvent.emit && cc.systemEvent.emit(cc.game.EVENT_SHOW, l);
}), cc.game && cc.game.on && cc.game.on(cc.game.EVENT_HIDE, function(l) {
    cc.systemEvent && cc.systemEvent.emit && cc.systemEvent.emit(cc.game.EVENT_HIDE, l);
}), cc.game && cc.game.on && cc.game.on(cc.game.EVENT_ENGINE_INITED, function(l) {
    cc.systemEvent && cc.systemEvent.emit && cc.systemEvent.emit(cc.game.EVENT_ENGINE_INITED, l);
}), cc.game && cc.game.on && cc.game.on(cc.game.EVENT_RENDERER_INITED, function(l) {
    cc.systemEvent && cc.systemEvent.emit && cc.systemEvent.emit(cc.game.EVENT_RENDERER_INITED, l);
});