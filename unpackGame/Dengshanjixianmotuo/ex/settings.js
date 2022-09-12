define("engine/src/settings.js", function() {
  "use strict";
  window._CCSettings = {
      platform: "wechatgame",
      groupList: ["default", "bg", "ui", "motuo", "other", "person", "self", "bg2", "gold", "trap", "ai"],
      collisionMatrix: [
          [!0, null, null, !0, !0, !0, null, null, !0, null, !0],
          [!1, !1],
          [!1, !1, !1],
          [!0, !1, !1, !1, !0, null, !1, null, null, !0],
          [!0, !1, !1, !0, !1, null, !1, null, null, !0],
          [!0, !1, !1, !1, !1, !1, !1, null, null, !0],
          [!1, !1, !1, !1, !1, !1, !0],
          [!1, !1, !1, !1, !1, !1, !1, !1],
          [!0, !1, !1, !1, !1, !1, !1, !1, !1],
          [!1, !1, !1, !0, !0, !0, !1, !1, !1, !1, !0],
          [!0, !1, !1, !1, !1, !1, !1, !1, !1, !0, !1]
      ],
      hasResourcesBundle: !0,
      hasStartSceneBundle: !1,
      remoteBundles: ["resources", "main"],
      subpackages: [],
      launchScene: "db://assets/Scene/Loading.fire",
      orientation: "landscape",
      server: "https://xcx.youletd.com/file/wechat/dsjxmtkb/v156_4",
      jsList: [],
      bundleVers: {
          internal: "75bf4",
          resources: "c2383",
          main: "673ae"
      }
  }
});