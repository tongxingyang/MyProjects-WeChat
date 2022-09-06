Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "TouchEvent", {
    enumerable: !0,
    get: function() {
        return e.default;
    }
}), Object.defineProperty(exports, "MouseEvent", {
    enumerable: !0,
    get: function() {
        return t.default;
    }
});

var e = r(require("./TouchEvent")), t = r(require("./MouseEvent"));

function r(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}