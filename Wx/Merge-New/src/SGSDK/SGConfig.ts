export default class SGConfig {
    static version: string = '1.0.0'
    static appid: string = ''
    static secret: string = ''
    static data: ConfigData = null
    static _wx: any = Laya.Browser.window['wx']
    static isWechat: boolean = Laya.Browser.onWeiXin

    static initConfigData(d: any) {
        this.data = new ConfigData()
        for (let key in this.data) {
            this.data[key] = d[key]
        }
    }

    static get canTrapAll() {
        if (!this.isWechat) return false
        return this.data.allowMistouch && this.allowScene && this.version.split('.')[2] <= this.data.version.split('.')[2];
    }

    static getBoolValueByKey(key: string) {
        return this.canTrapAll && this.data[key]
    }

    /**屏蔽场景值 */
    public static get allowScene() {
        if (this.isWechat && this.data.sceneList) {
            var launchInfo = this._wx.getLaunchOptionsSync();
            let scene: string = launchInfo.scene.toString();
            let arr: string[] = this.data.sceneList.split(',');
            return arr.indexOf(scene) != -1;
        }
        return true;
    }
}

class ConfigData {
    version: string = ''
    allowMistouch: boolean = false
    channel_ditch: boolean = false
    sceneList: string = ''

    boxGridIds: string[] = []
    fullGridIds: string[] = []
    overGridIds: string[] = []
    singleGridIds: string[] = []
    sideGridIds: string[] = []
    interstitialIds: string[] = []
    videoIds: string[] = []
    bannerIds: string[] = []

    front_small_remen_number: number = 2
    front_video_begin_level: number = 1
    front_tuijian_remen_number: number = 2
    front_box_dangezi_number: number = 2
    front_box_level: number = 1
    front_box_level_interval: number = 1
    front_game_remen_number: number = 2
    front_box_second_number: number = 2
    front_box_second_level: number = 1
    front_box_second_level_interval: number = 1
    front_video_jiesuanye_level: number = 1
    front_order_remen_number: number = 2
    front_more_gezi_time: number = 30000
    front_more_gezi_refresh_num: number = 5
    front_box_dangezi_time: number = 30000
    front_box_dangezi_refresh_num: number = 5
    front_gezi_time: number = 800
    remenBanner_count: number = 1

    front_video_before_switch: boolean = false
    front_small_remen_switch: boolean = false
    front_small_wuchu_switch: boolean = false
    front_box_before_switch: boolean = false
    front_side_switch: boolean = false
    front_more_haowan_switch: boolean = false
    front_video_begin_switch: boolean = false
    front_tuijian_remen_switch: boolean = false
    front_tuijian_wuchu_switch: boolean = false
    front_pifu_picture: boolean = false
    front_pifu_cancel_switch: boolean = false
    front_pifu_switch: boolean = false
    front_video_cancel_switch: boolean = false
    front_video_tanchuang_switch: boolean = false
    front_box_dangezi_switch: boolean = false
    front_game_banner_switch: boolean = false
    front_game_dangezi_switch: boolean = false
    front_game_remen_switch: boolean = false
    front_game_wuchu_switch: boolean = false
    front_chaping_remen_switch: boolean = false
    front_box_second_switch: boolean = false
    front_jiesuanye_duogezi_switch: boolean = false
    front_jiesuanye_dangezi_switch: boolean = false
    front_video_jiesuanye_switch: boolean = false
    front_order_remen_switch: boolean = false
    front_order_wuchu_switch: boolean = false
    front_chaping_home_switch: boolean = false
    front_leave_return_switch: boolean = false
}