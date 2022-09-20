import SGAD from "./SGAD"
import SGMgr from "./SGMgr"

export default class SGHomeUI extends Laya.Scene {
    constructor() {
        super()
    }

    remenBtn: Laya.Image
    videoBtn: Laya.Image

    onOpened(param?: any) {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        this.remenBtn.on(Laya.Event.CLICK, this, this.remenCB)
        this.videoBtn.on(Laya.Event.CLICK, this, this.videoCB)
        this.videoBtn.visible = SGMgr.homeViedo
    }

    onClosed() {

    }

    remenCB() {
        SGAD.hideBannerAd()
        SGAD.visibleSideGridAd(false)
        SGMgr.showHomeUIReMen(() => {
            SGAD.showBannerAd();
            SGAD.visibleSideGridAd(true)
        })
    }

    videoCB() {
        SGAD.showVideoAd(() => {
            Laya.Browser.window['wx'].showToast({
                title: "恭喜获得1000金币！",//提示文字
                duration: 2000,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: 'none', //图标，支持"success"、"loading"  
            })
        }, null)
    }
}