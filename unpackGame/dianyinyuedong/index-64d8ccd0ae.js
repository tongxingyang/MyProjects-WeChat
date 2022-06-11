window.screenOrientation = "portrait", loadLib("libs/min/laya.core.min.js"), loadLib("libs/min/laya.html.min.js"), 
loadLib("libs/min/laya.d3.min.js"), loadLib("libs/min/laya.ui.min.js"), loadLib("libs/min/fairygui.min.js"), 
loadLib("libs/min/puremvc-typescript-multicore-1.1.min.js");
window.wx.loadSubpackage({
  name: 'bundle', // name 可以填 name 或者 root
  success: (res) => {
      // 分包加载成功后通过 success 回调
      loadLib("js/bundle-ebdba46c85.js");
  }
});