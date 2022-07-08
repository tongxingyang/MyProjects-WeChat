import { BYTEDANCE } from "cc/env"

export default class PlatformApi {
    static isVibrate: boolean = true

    public static OnHide(fun: Function) {
        if (BYTEDANCE) {
            window['tt'].onHide(fun)
        }
    }
    public static OffHide(fun: Function) {
        if (fun && BYTEDANCE) {
            window['tt'].offHide(fun)
        }
    }
    public static OnShow(fun: Function) {
        if (BYTEDANCE) {
            window['tt'].onShow(fun)
        }
    }
    public static OffShow(fun: Function) {
        if (fun && BYTEDANCE) {
            window['tt'].offShow(fun)
        }
    }

    //震动
    public static DoVibrate(isShort: boolean = true) {
        if (BYTEDANCE && this.isVibrate) {
            if (isShort) {
                window['tt'].vibrateShort()
            } else {
                window['tt'].vibrateLong()
            }
        }
    }

    //系统提示
    public static OpenAlert(msg: string, dur: number = 2000, icon: boolean = false) {
        if (BYTEDANCE) {
            window['tt'].showToast({
                title: msg,//提示文字
                duration: dur,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: icon ? 'success' : 'none', //图标，支持"success"、"loading"  
            })
        }
    }
}

