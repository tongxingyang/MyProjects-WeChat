Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.loadEngine = void 0;

function loadEngine(sub_name) {
    if (wx.loadSubpackage) {
        _load(sub_name).then(function(result) {
            if (!result) {
                loadEngine(sub_name);
            }
        });
    } else {
        require(sub_name + "/game.js");
    }
}

function _load(sub_name) {
    return new Promise(function(resolve, reject) {
        var t = new Date().getTime();
        var loadTask = wx.loadSubpackage({
            name: sub_name,
            success: function success(res) {
                console.log("引擎子包加载完毕", new Date().getTime() - t, "ms");
                resolve(true);
            },
            fail: function fail(res) {
                console.log("引擎子包加载失败", new Date().getTime() - t, "ms");
                resolve(false);
            }
        });
        loadTask.onProgressUpdate(function(res) {});
    });
}

var _loadEngine = loadEngine;

exports.loadEngine = _loadEngine;