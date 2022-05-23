import FdAd from "./FdAd"

export default class VideoBanner extends Laya.Scene {
    constructor() {
        super()
    }

    banner1: Laya.Image
    banner2: Laya.Image
    finger: Laya.Animation

    onOpened(param?: any) {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        this.banner1.on(Laya.Event.CLICK, this, this.adBtnCB)
        this.banner2.on(Laya.Event.CLICK, this, this.adBtnCB)

        let showFinger: boolean = false
        if (param && param.showFinger) showFinger = showFinger
        this.finger.visible = showFinger

        this.banner1.visible = Math.random() > 0.5
        this.banner2.visible = !this.banner1.visible
    }

    onClosed() {

    }

    adBtnCB() {
        FdAd.showVideoAd(() => {
            Laya.Browser.window['wx'].showToast({
                title: "恭喜获得1000金币！",//提示文字
                duration: 2000,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: 'none', //图标，支持"success"、"loading"  
            })
        }, null)
    }
}