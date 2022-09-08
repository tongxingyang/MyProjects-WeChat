window.screenOrientation = "sensor_landscape", loadLib("libs/min/laya.core.min.js"), 
loadLib("libs/min/laya.ani.min.js"), loadLib("libs/min/laya.ui.min.js"), loadLib("libs/min/laya.d3.min.js"), 
loadLib("libs/min/es5supes6.min.js"), loadLib("libs/min/laya.physics3D.wasm-wx.min.js"), 
loadLib("libs/min/promise.min.js"),loadLib("js/NevMesh.js");

wx.loadSubpackage({
  name:"js",
  success:()=>{
    loadLib("bundle/bundle.js");
    require("./SGSDK/src/Main");
  }
});