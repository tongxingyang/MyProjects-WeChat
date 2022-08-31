var moduleMap = {
    "src/packages/fl-framework/runtime-assets/Framework/FLBehavior.js": function srcPackagesFlFrameworkRuntimeAssetsFrameworkFLBehaviorJs() {
        require("src/packages/fl-framework/runtime-assets/Framework/FLBehavior.js");
    },
    "src/project.js": function srcProjectJs() {
        require("src/project.js");
    }
};

window.__cocos_require__ = function(moduleName) {
    var func = moduleMap[moduleName];
    func && func();
};