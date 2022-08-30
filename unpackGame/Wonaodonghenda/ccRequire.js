var moduleMap = {
    "src/assets/Scripts/3rd/md5.js": function srcAssetsScripts3rdMd5Js() {
        return require("src/assets/Scripts/3rd/md5.js");
    },
    "assets/internal/index.js": function assetsInternalIndexJs() {
        return require("assets/internal/index.js");
    },
    "assets/Charactors/index.js": function assetsCharactorsIndexJs() {
        return require("assets/Charactors/index.js");
    },
    "assets/Effects/index.js": function assetsEffectsIndexJs() {
        return require("assets/Effects/index.js");
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