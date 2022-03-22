import GameLogic from "../Crl/GameLogic"
import FdAd from "../FanDong/FdAd"
import FdMgr from "../FanDong/FdMgr"
import PlayerDataMgr from "../Libs/PlayerDataMgr"

export default class GameUI extends Laya.Scene {
    constructor() {
        super()
    }
    public static Share: GameUI

    touchBtn: Laya.Image
    gradeNum: Laya.FontClip
    countNum: Laya.FontClip
    guideAni: Laya.Animation
    countTips: Laya.Image
    disBar: Laya.ProgressBar

    touchStartX: number = 0
    touchPreX: number = 0
    touching: boolean = false

    onOpened() {
        GameUI.Share = this
        //GameLogic.Share.isStartGame = true
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchBtnDownCB)
        this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchBtnMoveCB)
        this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchBtnUpCB)
        this.touchBtn.on(Laya.Event.MOUSE_OUT, this, this.touchBtnUpCB)

        Laya.timer.frameLoop(1, this, this.updateCB)
        FdMgr.inGame()
    }

    onClosed() {
        Laya.timer.clearAll(this)
    }

    touchBtnDownCB(event: Laya.Event) {
        if (GameLogic.Share.isGameOver) return
        if (!GameLogic.Share.isStartGame) {
            GameLogic.Share.isStartGame = true
            this.guideAni.visible = false
            this.countTips.visible = true
            GameLogic.Share.startToWalk()
        }

        this.touching = true
        this.touchStartX = event.stageX
        this.touchPreX = event.stageX
    }

    touchBtnMoveCB(event: Laya.Event) {
        if (!this.touching || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) return
        let sx = event.stageX
        let dtx = this.touchPreX - sx

        GameLogic.Share._playerCrl.moveX(dtx / 80)

        this.touchPreX = sx
    }

    touchBtnUpCB(event: Laya.Event) {
        if (!this.touching || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) return
        this.touching = false
    }

    updateCB() {
        this.countTips.visible = GameLogic.Share.isStartGame
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        this.countNum.value = GameLogic.Share._mosquitoNode.numChildren.toString()
        let dis: number = GameLogic.Share._floorFinish.transform.position.z
        this.disBar.value = GameLogic.Share._mosquitoNode.transform.position.z / dis
    }
}