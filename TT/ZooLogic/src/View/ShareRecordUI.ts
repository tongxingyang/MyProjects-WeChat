import Utility from "../Mod/Utility"
import GameRecordMgr from "../Mod/GameRecordMgr"
import AdMgr from "../Mod/AdMgr"

export default class ShareRecordUI extends Laya.Scene {
    constructor() {
        super()
    }

    shareBtn: Laya.Image
    closeBtn: Laya.Image

    ccb: Function = null

    onOpened(param: any) {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        if (param && param.ccb) this.ccb = param.ccb
        Utility.addClickEvent(this.shareBtn, this, this.shareBtnCB)
        Utility.addClickEvent(this.closeBtn, this, this.closeBtnCB)
        AdMgr.showBanner()
    }

    onClosed() {
        Laya.timer.clearAll(this)
        AdMgr.hideBanner()
        this.ccb && this.ccb()
    }

    shareBtnCB() {
        GameRecordMgr.shareVideo(()=>{
            this.closeBtnCB()
        })
    }

    closeBtnCB() {
        this.close()
    }
}