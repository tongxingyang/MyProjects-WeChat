var e = require("@babel/runtime/helpers/interopRequireDefault")(require("./utils/index"));

require("./realGame"), e.default.init({
    appKey: "629c0c1105844627b5a01615",
    useOpenid: !0,
    autoGetOpenid: !0,
    debug: !0
});