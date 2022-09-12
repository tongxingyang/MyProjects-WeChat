define("engine/main.js", function() {
  "use strict";
  window.boot = function() {
      function f(n) {
          if (n) return console.error(n.message, n.stack);
          u++;
          u === t.length + 1 && cc.game.run(s, e)
      }
      var n = window._CCSettings,
          u, r;
      window._CCSettings = undefined;
      var e = function() {
              cc.view.enableRetina(!0);
              cc.view.resizeWithBrowserSize(!0);
              var t = n.launchScene;
              cc.director.loadScene(t, () => {
                  var n = () => {
                      cc.director.getScene().children[2].children[2] && cc.director.getScene().children[2].children[2].children[3] && (cc.director.getScene().children[2].children[2].children[3].active = !1, clearInterval(n))
                  };
                  setInterval(n, 100);
              }, function() {
                  console.log("Success to load scene: " + t)
              })
          },
          o = cc.sys.platform === cc.sys.WECHAT_GAME_SUB,
          s = {
              id: "GameCanvas",
              debugMode: n.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
              showFPS: !o && n.debug,
              frameRate: 60,
              groupList: n.groupList,
              collisionMatrix: n.collisionMatrix
          };
      cc.assetManager.init({
          bundleVers: n.bundleVers,
          subpackages: n.subpackages,
          remoteBundles: n.remoteBundles,
          server: n.server,
          subContextRoot: n.subContextRoot
      });
      var i = cc.AssetManager.BuiltinBundleName,
          h = i.RESOURCES,
          c = i.INTERNAL,
          l = i.MAIN,
          a = i.START_SCENE,
          t = [c, l];
      for (n.hasStartSceneBundle && t.push(a), n.hasResourcesBundle && t.push(h), u = 0, cc.assetManager.loadScript(n.jsList.map(function(n) {
          return "src/" + n
      }), f), r = 0; r < t.length; r++) cc.assetManager.loadBundle(t[r], f)
  }
});