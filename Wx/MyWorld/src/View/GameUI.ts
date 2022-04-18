import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"

export default class GameUI extends Laya.Scene {
    constructor() {
        super()
    }
    static Share: GameUI

    coinNum: Laya.FontClip
    guideAni: Laya.Animation
    touchBtn: Laya.Image
    joyStickBg: Laya.Image
    joyStick: Laya.Image

    touchStartPos: Laya.Vector3

    onOpened() {
        GameUI.Share = this
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Laya.timer.frameLoop(1, this, this.myUpdate)
        this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchStart)
        this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchMove)
        this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchEnd)

        FdMgr.inGame()
    }
    onClosed() {
        Laya.timer.clearAll(this)
    }

    touchStart(evt: Laya.Event) {
        if (GameLogic.Share.isGameOver) return
        if (!GameLogic.Share.isStartGame) {
            this.guideAni.visible = false
            GameLogic.Share.gameStart()
        }
        let x = evt.stageX
        let y = evt.stageY
        this.joyStickBg.visible = true
        this.joyStickBg.pos(x, y)
        this.joyStick.pos(105, 105)
        this.touchStartPos = new Laya.Vector3(x, y)
    }
    touchMove(evt: Laya.Event) {
        if (GameLogic.Share.isGameOver) { this.joyStickBg.visible = false; return }
        let x = evt.stageX
        let y = evt.stageY
        let pos = new Laya.Vector3(x, y)
        let dir = new Laya.Vector3()
        if (Laya.Vector3.distance(pos, this.touchStartPos) <= 105) {
            this.joyStick.pos(x - this.touchStartPos.x + 105, y - this.touchStartPos.y + 105)
        }
        else {
            Laya.Vector3.subtract(pos, this.touchStartPos, dir)
            Laya.Vector3.normalize(dir, dir)
            Laya.Vector3.scale(dir, 105, dir)
            Laya.Vector3.add(new Laya.Vector3(105, 105), dir, dir)
            this.joyStick.pos(dir.x, dir.y)
        }
    }
    touchEnd(evt: Laya.Event) {
        this.joyStickBg.visible = false
        if (GameLogic.Share.isGameOver) return
    }

    myUpdate() {
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
    }
}
