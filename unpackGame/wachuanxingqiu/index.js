window.screenOrientation = "portrait", loadLib("libs/min/fairygui.min.js"), loadLib("libs/min/fnsdk.min.js"),
  loadLib("libs/min/laya.physics3D.min.js"), window.PF = loadLib("libs/min/pathfinding.min.js"),
  wx.loadSubpackage({
    name: "js",
    success: function (r) {
      loadLib("js/bundle.js");
      require("SGSDK/src/Main.js");
    }
  })