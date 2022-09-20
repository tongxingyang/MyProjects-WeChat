window.screenOrientation = "portrait", loadLib("libs/fairygui.js"), loadLib("libs/fnsdk.js"),loadLib("libs/laya.ui.min.js");
wx.loadSubpackage({
  name:"js",
  success:()=>{
    loadLib("js/bundle.js");
    require("SGSDK/src/Main.js");
  }
});