window.screenOrientation = "portrait", loadLib("libs/min/fairygui.min.js"), loadLib("libs/min/fnsdk.min.js"), 
window.ClipperLib = loadLib("libs/min/clipper.min.js"), window.poly2tri = loadLib("libs/min/poly2tri.min.js"), 
window.SAT = loadLib("libs/min/SAT.js");
wx.loadSubpackage({
  name: 'js',
  success: ()=>{
    loadLib("js/bundle.js");
     window.clearFrist();
  }
})