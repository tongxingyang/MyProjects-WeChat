!function() {
    function t(t, n) {
        wx.loadSubpackage({
            name: t,
            success: e => {
                console.log("微信分包加载成功！", t), n && n();
            },
            fail: n => {
                console.log("微信分包加载失败！", t);
            }
        });
    }
    function n() {
        GameGlobal.LoadingManager && GameGlobal.LoadingManager.destroy().then(() => {});
    }
    window.screenOrientation = "portrait", function() {
        !function() {
            let t = GameGlobal.canvas.getContext("3d");
            t ? console.log("contextType: 2d; ", "contextAttributes: ", t.getContextAttributes()) : (t = GameGlobal.canvas.getContext("webgl"), 
            console.log("contextType: webgl; ", "contextAttributes: ", t.getContextAttributes()));
            if (function(t, n) {
                t = t.split("."), n = n.split(".");
                const e = Math.max(t.length, n.length);
                for (;t.length < e; ) t.push("0");
                for (;n.length < e; ) n.push("0");
                for (let o = 0; o < e; o++) {
                    const e = parseInt(t[o]), i = parseInt(n[o]);
                    if (e > i) return 1;
                    if (e < i) return -1;
                }
                return 0;
            }(wx.getSystemInfoSync().SDKVersion, "2.1.0") > -1) try {
                GameGlobal.LoadingManager = requirePlugin("MinigameLoading", {
                    customEnv: {
                        wx: wx,
                        canvas: GameGlobal.canvas
                    }
                }).default, n = t.getContextAttributes(), GameGlobal.LoadingManager.create({
                    images: [ {
                        src: "loadingPng/loading_atlas_lfsz3h.jpg"
                    } ],
                    contextType: "webgl",
                    contextAttributes: n
                }).then(() => {}).catch(t => {});
            } catch (t) {
                //t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                console.error("当前环境不支持使用插件", t);
            }
            var n;
        }();
        let e = [ "loading", "libs", "js" ], o = e.length;
        var i = () => {
            o--, o <= 0 && (require("./libs/min/laya.wxmini.min.js"), loadLib("libs/min/fairygui.min.js"), 
            loadLib("libs/min/fnsdk.min.js"), window.ClipperLib = loadLib("libs/min/clipper.min.js"), 
            window.poly2tri = loadLib("libs/min/poly2tri.min.js"), loadLib("js/bundle.js"), 
            window.clearLoading = n);
        };
        for (let n of e) t(n, i);
    }();
}();