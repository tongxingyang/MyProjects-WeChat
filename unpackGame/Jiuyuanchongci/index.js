window.screenOrientation = "portrait", loadLib("libs/fairygui.js"), loadLib("libs/fnsdk.js");
wx.loadSubpackage({
  name:"js",
  success:()=>{
    loadLib("js/bundle.js");
  }
});