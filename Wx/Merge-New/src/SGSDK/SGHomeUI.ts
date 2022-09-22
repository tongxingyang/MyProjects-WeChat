import SGAD from "./SGAD"
import SGConfig from "./SGConfig"
import SGMgr from "./SGMgr"
import SGUtils from "./SGUtils"

export default class SGHomeUI extends Laya.Scene {
    constructor() {
        super()
    }

    remenBtn: Laya.Image

    onOpened(param?: any) {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        SGUtils.addClickEvent(this.remenBtn, this, this.remenCB)
        this.remenBtn.visible = SGConfig.data.front_more_haowan_switch
    }

    onClosed() {

    }

    remenCB() {
        SGMgr.moreGame()

    }
}