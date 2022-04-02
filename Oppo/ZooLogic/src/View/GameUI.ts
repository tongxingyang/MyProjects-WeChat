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
    giveupBtn: Laya.Image
    guideAni: Laya.Animation
    playerHp: Laya.ProgressBar
    enemyHp: Laya.ProgressBar
    touchBtn: Laya.Image

    touchStartPosX: number = 0

    onOpened() {
        GameUI.Share = this
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Laya.timer.frameLoop(1, this, this.myUpdate)
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        Utility.addClickEvent(this.giveupBtn, this, this.giveupBtnCB)
        this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchStart)
        this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchMove)
        this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchEnd)

        FdMgr.inGame()
    }
    onClosed() {
        Laya.timer.clearAll(this)
    }

    giveupBtnCB() {
        GameLogic.Share.gameOver(false)
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

    fixPlayerHp() {
        if (!GameLogic.Share._player) return
        let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
        let hPos = GameLogic.Share._player.transform.position.clone()
        hPos.y += 2.5
        GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)
        this.playerHp.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
        this.playerHp.value = GameLogic.Share._playerCrl.hp / GameLogic.Share._playerCrl.hpMax
        let num = this.playerHp.getChildByName('num') as Laya.FontClip
        num.value = GameLogic.Share._playerCrl.hp.toString()
    }
    fixEnemyHp() {
        if (!GameLogic.Share._enemy) return
        let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
        let hPos = GameLogic.Share._enemy.transform.position.clone()
        hPos.y += 2.5
        GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)
        this.enemyHp.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
        this.enemyHp.value = GameLogic.Share._enemyCrl.hp / GameLogic.Share._enemyCrl.hpMax
        let num = this.enemyHp.getChildByName('num') as Laya.FontClip
        num.value = GameLogic.Share._enemyCrl.hp.toString()
    }

    createPlayerDmg(v: number) {
        let num: Laya.FontClip = new Laya.FontClip('gameUI/yxz_sz_2.png', '0123456789+-')
        num.anchorX = 0.5
        num.anchorY = 0.5
        num.value = '-' + v.toString()
        this.addChild(num)
        let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
        let hPos = GameLogic.Share._player.transform.position.clone()
        hPos.y += 3.5
        GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)
        num.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
        Utility.tMove2D(num, num.x, num.y - 150, 1000, () => { num.destroy() })
    }
    createEnemyDmg(v: number) {
        let num: Laya.FontClip = new Laya.FontClip('gameUI/yxz_sz_1.png', '0123456789+-')
        num.anchorX = 0.5
        num.anchorY = 0.5
        num.value = '-' + v.toString()
        this.addChild(num)
        let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
        let hPos = GameLogic.Share._enemy.transform.position.clone()
        hPos.y += 3.5
        GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)
        num.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
        Utility.tMove2D(num, num.x, num.y - 150, 1000, () => { num.destroy() })
    }

    myUpdate() {
        this.fixPlayerHp()
        this.fixEnemyHp()
    }
}
