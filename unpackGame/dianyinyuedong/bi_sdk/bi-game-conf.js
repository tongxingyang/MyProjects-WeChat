module.exports = {
    version: "2.0.3",
    // 客户端版本号
    env: "production",
    //production：生产环境 
    debug: false,
    // console 输出 SDK 的调试信息
    game_id: "1262",
    // 游戏id，请联系后台管理获取。
    login_type: "wx",
    //微信为“wx”
    engine: "laya",
    is_test: false,
    //默认为false,测试的时候置为true, 正式服改为false
    designSizeWidth: 720,
    //设计尺寸宽 主要针对laya界面适配 ，cocos版本可忽略  
    designSizeHeight: 1280,
    //设计尺寸高 主要针对laya界面适配 ，cocos版本可忽略
    umkey: "key",
    //使用友盟统计 必须要传入key, 默认值为"key" (不修改umkey默认不使用友盟统计)
    bannerAdPosId: "adunit-4b9ef09c255d827b",
    //默认banner配置,联系后台管理获取
    videoAdPosId: "adunit-e61732ba42e865b5",
    //默认视频广告id配置，联系后台管理获取
    insertAdPosId: "adunit-f75ce8decedb10c2",
    //默认插屏广告id配置，联系后台管理获取
    gridAdPosId: "adunit-093c04770e87aa9d",
    //默认格子广告id配置, 联系后台管理获取
    isLandScape: false,
    //是否是横屏游戏 true为横屏 false为竖屏
    report_data_game_id: "1262",
    //sdk数据上报的游戏id，联系后台管理员获取，*必填项
    isUseNewGrid: true,
    //是否使用新的格子广告，开关默认关闭，true为打开状态，开关打开时利用原生模板多格子代替格子广告，必须替换对应的原生模板多格子广告id填入gridAdPosId，关闭开关填入旧版的格子广告id即可使用旧版的微信格子广告
    isOpenFriendChatFunc: false
};