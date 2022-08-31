var isShowModal = false;

var subPaths = [ "res" ,"hlsdk","js"];

var subLoadIndex = 0;

var loadSuccess = function loadSuccess(res) {
    console.log("load sub package success...");
    subLoadIndex++;
    if (subLoadIndex < subPaths.length) {
        loadSubpackage();
    } else {
        loadDown();
    }
};

var loadFail = function loadFail(res) {
    // if (isShowModal) return;
    // isShowModal = true;
    // console.log("load sub package fail...");
    // var obj = {
    //     title: "网络错误",
    //     content: "网络连接异常，请稍后重试",
    //     showCancel: false,
    //     success: function success(res) {
    //         isShowModal = false;
    //         wx.exitMiniProgram();
    //     }
    // };
    // wx.showModal(obj);
};

var loadSubpackage = function loadSubpackage() {
    wx.loadSubpackage({
        name: subPaths[subLoadIndex],
        success: loadSuccess,
        fail: loadFail
    });
};

var loadDown = function loadDown() {
    loadLib("hlsdk/hlsdk_config.js"); 
    loadLib("hlsdk/hlsdk.js");
    require("js/bundle.js");
};

if (wx.loadSubpackage && subPaths.length > 0) {
    loadSubpackage();
} else {
    loadDown();
}