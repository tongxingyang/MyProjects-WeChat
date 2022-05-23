
import FdMgr from "../FanDong/FdMgr"
import GameLogic from "../Crl/GameLogic"

export default class GameUI extends Laya.Scene {
    constructor() {
        super()
    }
    static Share: GameUI

    isTouch: boolean = false

    touchBtn: Laya.Image
    finger: Laya.Animation

    onOpened() {
        GameUI.Share = this
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Laya.timer.frameLoop(1, this, this.myUpdate)

        this.touchBtn.on(Laya.Event.CLICK, this, this.touchCB)

        FdMgr.inGame()
    }
    onClosed() {
        Laya.timer.clearAll(this)
    }

    touchCB() {
        if (this.isTouch) return
        this.isTouch = true
        this.finger.visible = false
        GameLogic.Share.startFire()
    }

    myUpdate() {
    }
}
