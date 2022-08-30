window.GPC = {}, window.GPC.platform = "WeChat", window.GPC.appid = "wxe1dcb1408c34b141", 
window.GPC.uuid = "6FE8B140-BF65-4C47-A46D-A0E3C9DBBFB6", window.GPC.isPreview = !1, 
window.screenOrientation = "sensor_landscape", loadLib("libs/min/spine-core-3.7.min.js"), 
loadLib("libs/min/laya.spine.min.js"), loadLib("libs/min/laya.physics3D.min.js"), 
wx.loadSubpackage({
  name:"gajs",
  success:()=>{
    loadLib("gajs/GA.js");
    wx.loadSubpackage({
      name:"js",
      success:()=>{
        loadLib("js/papaparse.js");
        loadLib("js/bundle.js");
      }
    })
  }
});