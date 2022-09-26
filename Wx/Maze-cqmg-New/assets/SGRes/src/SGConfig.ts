import { WECHAT } from "cc/env"

export default class SGConfig {
    static version: string = '1.0.2'
    static appid: string = '596'
    static secret: string = 'w0dfcdw7x8hs3bwosi2dj8c45q6idbk0'
    static isPortrait: boolean = true
    static isShowHomeBanner: boolean = true
    static isShowShopBanner: boolean = true
    static data: ConfigData = null
    static _wx: any = window['wx']
    static isWechat: boolean = WECHAT

    static initConfigData(cb: Function) {
        window['wxsdk'].onLoginComplete(() => {
            console.log('sdk:onLoginComplete')
        })
        window['wxsdk'].login();
        window['wxsdk'].onInit(() => {
            console.log('sdk:onInit')
            let d = window['wxsdk'].conf
            this.data = new ConfigData()
            for (let key in this.data) {
                if (d[key] != undefined)
                    this.data[key] = d[key]
            }
            if (this.data.channel_ditch && !window['wxsdk'].user.channel) {
                this.data.allowMistouch = false;
            }
            if (!this.canTrapAll) {
                for (let key in this.data) {
                    if (typeof (this.data[key]) === 'boolean') this.data[key] = false
                }
            }
            console.log('参数:', this.data)
            cb && cb()
        })
        window['wxsdk'].init({
            version: this.version, // 当前的小游戏版本号，只能以数字
            appid: this.appid, // 此项目在云平台的appid
            secret: this.secret, // 此项目在云平台的secret, 用于与后端通信签名
            share: {
                title: '你能过得了这一关吗？', // 默认分享文案
                image: 'https://game-oss.smallshark.cn/game/20211119/1216327431258.jpg?imageslim', // 默认分享图片
            },
        })

    }

    static get canTrapAll() {
        if (!this.isWechat) return false
        return this.data.allowMistouch && this.allowScene && this.version.split('.')[2] <= this.data.version.split('.')[2];
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

    front_banner_ids: string = ''
    front_video_ids: string = ''
    front_chaping_ids: string = ''
    front_box_ids: string = ''
    front_more_gezi_ids: string = ''
    front_duilian_gezi_ids: string = ''
    front_dangezi_ids: string = ''
    front_duogezi_ids: string = ''
    front_more_dangezi_ids: string = ''

    front_pifu_picture: string = ''

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
    refresh_banner_time: number = 5
    updateBanner: number = 3
    front_gezi_number: number = 1
    front_box_before_times: number = 1
    front_box_dangezi_times: number = 1
    front_box_second_times: number = 1

    front_video_before_switch: boolean = false
    front_small_remen_switch: boolean = false
    front_small_wuchu_switch: boolean = false
    front_box_before_switch: boolean = false
    front_side_switch: boolean = false
    front_more_haowan_switch: boolean = false
    front_video_begin_switch: boolean = false
    front_tuijian_remen_switch: boolean = false
    front_tuijian_wuchu_switch: boolean = false
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

export enum RemenIndex {
    RM_rmxyx = 0,
    RM_rmtj,
    RM_rmyx,
    RM_rmxcx
}