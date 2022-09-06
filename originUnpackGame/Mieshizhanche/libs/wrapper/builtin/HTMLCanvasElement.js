Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = a(require("./Canvas"));

a(require("./HTMLElement"));

function a(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

GameGlobal.screencanvas = GameGlobal.screencanvas || new e.default();

var r = GameGlobal.screencanvas.constructor;

exports.default = r, module.exports = exports.default;