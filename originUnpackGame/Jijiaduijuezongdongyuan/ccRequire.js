var moduleMap = {
    "src/assets/Script/OppoSDK/KolaSDK.js": function srcAssetsScriptOppoSDKKolaSDKJs() {
        return require("src/assets/Script/OppoSDK/KolaSDK.js");
    },
    "assets/internal/index.js": function assetsInternalIndexJs() {
        return require("assets/internal/index.js");
    },
    "assets/main/index.js": function assetsMainIndexJs() {
        return require("assets/main/index.js");
    }
    // tail
};

window.__cocos_require__ = function(moduleName) {
    var func = moduleMap[moduleName];
    if (!func) {
        throw new Error("cannot find module ".concat(moduleName));
    }
    return func();
};