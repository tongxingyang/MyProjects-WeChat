/*
 * @Author: dana
 * @Date: 2021-04-23 10:35:36
 * @LastEditors: dana
 * @LastEditTime: 2022-08-03 21:06:22
 * @Description: file content
 */
let config = {
    /** 填写talkingdata key */
    appkey: "752A112F18304541A25E29DC6746C1EF",
    /** 填写游戏名字 */
    appName: "枪战荣耀精英",
    /** 填写游戏名字 */
    versionName: "枪战荣耀精英",
    /** 填写游戏名字 */
    versionCode: "枪战荣耀精英",
    /** 填写微信小程序app id */
    wxAppid: "wxefbf0e298a14c2b3",
    getLocation: false
};

if (typeof wx !== "undefined") {
    let appId = "";
    if (wx.getSystemInfoSync().host) {
        appId = wx.getSystemInfoSync().host.appId;
    }
    console.log("APPID", wx.getSystemInfoSync().host);
}

let type = 2;

if (type == 2) {
    config = {
        /** 填写talkingdata key */
        appkey: "6425F1B4DCE14BC28DF42B4D1269BB18",
        /** 填写游戏名字 */
        appName: "枪战火线王者",
        /** 填写游戏名字 */
        versionName: "枪战火线王者",
        /** 填写游戏名字 */
        versionCode: "枪战火线王者",
        /** 填写微信小程序app id */
        wxAppid: "wxddc285055d66a797",
        getLocation: false
    };
}

if (type == 3) {
    config = {
        /** 填写talkingdata key */
        appkey: "7745A38264074672810D331997DB036E",
        /** 填写游戏名字 */
        appName: "穿越枪战精英",
        /** 填写游戏名字 */
        versionName: "穿越枪战精英",
        /** 填写游戏名字 */
        versionCode: "穿越枪战精英",
        /** 填写微信小程序app id */
        wxAppid: "wx6deb72dde4b924b5",
        getLocation: false
    };
}

if (type == 4) {
    config = {
        /** 填写talkingdata key */
        appkey: "C5DC4B03682C4241831061B3206E3006",
        /** 填写游戏名字 */
        appName: "吃鸡荣耀战场",
        /** 填写游戏名字 */
        versionName: "吃鸡荣耀战场",
        /** 填写游戏名字 */
        versionCode: "吃鸡荣耀战场",
        /** 填写微信小程序app id */
        wxAppid: "wxa5dc0af08b4b0b10",
        getLocation: false
    };
}

if (type == 5) {
    config = {
        /** 填写talkingdata key */
        appkey: "2E3831211E08412BA3B88233B67C1202",
        /** 填写游戏名字 */
        appName: "穿越之枪战荣耀",
        /** 填写游戏名字 */
        versionName: "穿越之枪战荣耀",
        /** 填写游戏名字 */
        versionCode: "穿越之枪战荣耀",
        /** 填写微信小程序app id */
        wxAppid: "wx516add44cd48648f",
        getLocation: false
    };
}

/** 平台判断 */ if (typeof wx !== "undefined") {
    if (typeof qq !== "undefined") {
        config.versionName += "-QQ";
        config.versionCode += "-QQ";
    } else if (typeof tt !== "undefined") {
        config.versionName += "-头条";
        config.versionCode += "-头条";
    } else {
        config.versionName += "-微信";
        config.versionCode += "-微信";
    }
}

exports.config = config;