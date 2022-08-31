var config = {
    ald_app_key: "2f3a49dcf37cc4b92b51ad399fdb0841",
    // 阿拉丁appKey  必填
    td_app_key: "F95316DA2CE44967B5A956BD5E59F7BD",
    // talkingData appKey  必填
    td_appName: "乱斗第一名",
    //小游戏名 
    td_wxAppid: "wxbcfb9f7dbaa60c53",
    //微信小游戏appid 
    td_versionName: "1.0",
    td_versionCode: "1.0",
    getLocation: false
};

exports.app_key = config.ald_app_key;

exports.getLocation = config.getLocation;

exports.config = {
    appkey: config.td_app_key,
    appName: config.td_appName,
    versionName: config.td_versionName,
    versionCode: config.td_versionCode,
    wxAppid: config.td_wxAppid,
    getLocation: config.getLocation
};