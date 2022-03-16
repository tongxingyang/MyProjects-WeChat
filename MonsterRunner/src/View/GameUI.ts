import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"

export default class GameUI extends Laya.Scene {
    constructor() {
        super()
    }
    static Share: GameUI

    gradeNum: Laya.FontClip
    touchBtn: Laya.Image
    playerHp: Laya.ProgressBar

    touchStartPosX: number = 0

    onOpened() {
        GameUI.Share = this
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Laya.timer.frameLoop(1, this, this.myUpdate)
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchStart)
        this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchMove)
        this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchEnd)
        FdMgr.inGame()
    }
    onClosed() {
        Laya.timer.clearAll(this)
    }

    touchStart(evt: Laya.Event) {
        if(!GameLogic.Share.isStartGame){
            GameLogic.Share.gameStart()
        }
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

    fixPlayerHp() {
        if (!GameLogic.Share._player) return
        let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
        let hPos = GameLogic.Share._player.transform.position.clone()
        hPos.y += 2.5
        GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)
        this.playerHp.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
        this.playerHp.value = GameLogic.Share._playerCrl.hp / GameLogic.Share._playerCrl.hpMax
    }

    myUpdate() {
        this.fixPlayerHp()
    }
}
