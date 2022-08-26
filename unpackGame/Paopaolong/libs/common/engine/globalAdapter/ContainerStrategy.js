module.exports = function(i) {
    i._setupContainer = function(i, e, t) {
        var a = cc.game.canvas, n = i._devicePixelRatio = 1;
        i.isRetinaEnabled() && (n = i._devicePixelRatio = Math.min(i._maxPixelRatio, window.devicePixelRatio || 1)), 
        e *= n, t *= n, a.width === e && a.height === t || (a.width = e, a.height = t);
    };
};