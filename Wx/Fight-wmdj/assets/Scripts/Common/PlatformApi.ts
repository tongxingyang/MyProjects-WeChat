import { WECHAT } from "cc/env"
import FdAd from "../../FDRes/Src/FdAd"
import GameData from "../Crl/GameData"

export default class PlatformApi {

    static showVideo(cb?: Function) {
        //cb && cb()
        FdAd.showVideoAd(cb)
    }

    static doVibrate(isLong: boolean = false) {
        if (!GameData.isVibrate) return
        if (WECHAT) {
            isLong ? window['wx'].vibrateLong() : window['wx'].vibrateShort()
        }
    }

    //系统提示
    static OpenAlert(msg: string, dur: number = 2000, icon: boolean = false) {
        if (WECHAT) {
            window["wx"].showToast({
                title: msg,//提示文字
                duration: dur,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: icon ? 'success' : 'none', //图标，支持"success"、"loading"  
            })
        }
    }
}

