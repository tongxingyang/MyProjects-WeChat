import FdAd from "../FanDong/FdAd"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"

export default class FreeSkinUI extends Laya.Scene {
    constructor() {
        super()
    }

    adBtn: Laya.Image
    noBtn: Laya.Image
    icon: Laya.Image

    ccb: Function = null

    onOpened(param: any): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        this.ccb = param
        this.icon.skin = 'skinUI/skin' + (PlayerDataMgr.getFreeSkin() + 1) + '.png'
        Utility.addClickEvent(this.adBtn, this, this.adBtnCB)
        Utility.addClickEvent(this.noBtn, this, this.noBtnCB)
    }

    onClosed(type?: string): void {
        Laya.timer.clearAll(this)
        this.ccb && this.ccb()
    }

    adBtnCB() {
        let cb = () => {
            this.noBtnCB()
        }
        FdAd.showVideoAd(cb)
    }

    noBtnCB() {
        this.close()
    }


}