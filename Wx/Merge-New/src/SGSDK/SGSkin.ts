import SGAD from "./SGAD"
import SGConfig from "./SGConfig"
import SGUtils from "./SGUtils"

export default class SGSkin extends Laya.Scene {
    constructor() {
        super()
    }

    icon: Laya.Image
    btnGet: Laya.Image
    btnCancel: Laya.Image

    ccb: Function

    onOpened(param?: any) {
        if (param && param.ccb) {
            this.ccb = param.ccb;
        }
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        SGUtils.addClickEvent(this.btnGet, this, this.btnGetCB)
        SGUtils.addClickEvent(this.btnCancel, this, this.btnCancelCB)
        this.icon.skin = SGConfig.data.front_pifu_picture
        if (SGConfig.isPortrait) {
            SGAD.showBannerAd()
        } else {
            SGAD.hideBannerAd()
        }
    }

    onClosed() {
        Laya.timer.once(100, this, () => {
            this.ccb && this.ccb()
        })
    }

    btnGetCB() {
        this.showAd()
    }

    btnCancelCB() {
        if (SGConfig.data.front_pifu_cancel_switch) {
            this.showAd()
        } else {
            this.close()
        }
    }

    showAd() {
        SGAD.showVideoAd(() => {
            Laya.Browser.window['wx'].showToast({
                title: "恭喜获得1000金币！",//提示文字
                duration: 2000,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: 'none', //图标，支持"success"、"loading"  
            })
            this.close()
        }, () => {
            this.showWxVirtual()
        })
    }

    showWxVirtual() {
        if (!SGConfig.data.front_video_tanchuang_switch) {
            this.close()
            return
        }
        Laya.Browser.window.wx.showModal({
            title: '提示',
            content: '未观看完广告无法获取奖励，是否继续？',
            success(res) {
                if (res.confirm) {
                    SGAD.showVideoAd(() => {
                        Laya.Browser.window['wx'].showToast({
                            title: "恭喜获得1000金币！",//提示文字
                            duration: 2000,//显示时长
                            mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                            icon: 'none', //图标，支持"success"、"loading"  
                        })
                    }, null, () => { this.close() })
                } else if (res.cancel) {
                    if (SGConfig.data.front_video_cancel_switch) {
                        SGAD.showVideoAd(() => {
                            Laya.Browser.window['wx'].showToast({
                                title: "恭喜获得1000金币！",//提示文字
                                duration: 2000,//显示时长
                                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                                icon: 'none', //图标，支持"success"、"loading"  
                            })
                        }, null, () => { this.close() })
                    } else {
                        this.close()
                    }
                }
            }
        })
    }
}