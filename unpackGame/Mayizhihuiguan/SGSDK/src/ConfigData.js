window.ConfigData = {
  version: '1.0.1',// 游戏版本号
  appid: '644',// 此项目在云平台的appid
  secret: 'dttd2v84poixe1xh47ea0ps7ue0of62r',// 此项目在云平台的secret, 用于与后端通信签名
  portrait: true,//游戏横竖屏
  data: {
    allowMistouch: false,         //总开关
    sceneList: '',                //屏蔽场景值
    version: '',                  //后台配置版本号
    channel_ditch: false,         //是否需要判断渠道标签
    refresh_banner_time: 5,       //banner刷新时间
    updateBanner: 3,              //banner展示次数后销毁
    mistouchtime: 30,             //套路间隔时间
    remenBanner_count:1,          //热门推荐页点击按钮次数
    bannerBox_count:1,            //宝箱页触发误点次数
    bannerBox: false,             //宝箱页面
    showRemen: false,             //热门推荐页
    remenBanner: false,           //热门推荐页banner闪烁
    is_showGameBanner:false,      //游戏内banner开关
  }
}