import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"

export default class GameUI extends Laya.Scene {
    constructor() {
        super()
    }
    static Share: GameUI

    gradeNum: Laya.FontClip
    coinNum: Laya.FontClip
    guideAni: Laya.Animation
    touchBtn: Laya.Image

    touchStartPosX: number = 0

    onOpened() {
        GameUI.Share = this
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Laya.timer.frameLoop(1, this, this.myUpdate)
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchStart)
        this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchMove)
        this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchEnd)
    }
    onClosed() {
        Laya.timer.clearAll(this)
    }

    touchStart(evt: Laya.Event) {
        GameLogic.Share.isStartGame = true
        this.guideAni.visible = false
        let x = evt.stageX
        this.touchStartPosX = x
    }
    touchMove(evt: Laya.Event) {
        let x = evt.stageX
        if (Math.abs(x - this.touchStartPosX) < 20) {
            return
        }
        if (x - this.touchStartPosX > 0) {
            GameLogic.Share._playerCrl.moveDir = -1
        } else {
            GameLogic.Share._playerCrl.moveDir = 1
        }
        this.touchStartPosX = x
    }
    touchEnd(evt: Laya.Event) {
        GameLogic.Share._playerCrl.moveDir = 0
    }

    myUpdate() {
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
    }
}
