wx.uma.init({
    appKey: "6111f8d1063bed4d8c121e3b",
    useOpenid: true,
    // default true
    autoGetOpenid: false,
    debug: false,
    uploadUserInfo: false
});

wx.aldSendOpenid = function(openid) {
    wx.uma.setOpenid(openid);
};

wx.aldSendEvent = function(a, b) {};

wx.aldOnShareAppMessage = wx.uma.onShareAppMessage;

wx.aldShareAppMessage = wx.uma.shareAppMessage;