import GameLogic from "../Crl/GameLogic"
import FdAd from "../FanDong/FdAd"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"

export default class GameUI extends Laya.Scene {
    constructor() {
        super()
    }
    public static Share: GameUI

    touchBtn: Laya.Image
    gradeNum: Laya.Label
    coinNum: Laya.FontClip
    curGrade: Laya.Label
    gBar: Laya.ProgressBar
    guideAni: Laya.Animation

    touchStartX: number = 0
    touchPreX: number = 0
    touching: boolean = false

    onOpened() {
        GameUI.Share = this
        //GameLogic.Share.isStartGame = true
        this.gradeNum.text = PlayerDataMgr.getPlayerData().grade.toString()
        this.curGrade.text = PlayerDataMgr.getPlayerData().grade.toString()
        this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchBtnDownCB)
        this.touchBtn.on(Laya.Event.MOUSE_MOVE, this, this.touchBtnMoveCB)
        this.touchBtn.on(Laya.Event.MOUSE_UP, this, this.touchBtnUpCB)
        this.touchBtn.on(Laya.Event.MOUSE_OUT, this, this.touchBtnUpCB)

        Laya.timer.frameLoop(1, this, this.updateCB)
        FdAd.showBannerAd()
    }

    onClosed() {
        Laya.timer.clearAll(this)
        FdAd.hideBannerAd()
    }

    touchBtnDownCB(event: Laya.Event) {
        if (!GameLogic.Share.isStartGame) {
            GameLogic.Share.isStartGame = true
            this.guideAni.visible = false
            GameLogic.Share._playerCrl._ani.speed = 1.5
            GameLogic.Share._playerCrl.SpeedFX.active = true
        }

        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) return

        this.touching = true
        this.touchStartX = event.stageX
        this.touchPreX = event.stageX
    }

    touchBtnMoveCB(event: Laya.Event) {
        if (!this.touching || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) return
        let sx = event.stageX
        let dtx = this.touchPreX - sx
        let dtStart = this.touchStartX - sx
        GameLogic.Share._playerCrl.moveX(dtx / 35)
        this.touchPreX = sx
    }

    touchBtnUpCB(event: Laya.Event) {
        if (!this.touching || GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) return
        this.touching = false
    }

    updateCB() {
        this.gBar.value = GameLogic.Share._player.transform.position.z / GameLogic.Share.totalDistance
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
    }

    fixJewelIcon(jewel: Laya.Sprite3D) {
        let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
        let hPos = jewel.transform.position.clone()
        hPos.y += 1
        GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)

        let j = new Laya.Image('startUI/zy_zs_1.png')
        j.anchorX = 0.5
        j.anchorY = 0.5
        j.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
        this.addChild(j)
        Utility.tMove2D(j, 60, 80, 1000, () => {
            PlayerDataMgr.changeCoin(1)
            j.removeSelf()
        })
    }

    fixAddScore() {
        let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
        let hPos = GameLogic.Share._player.transform.position.clone()
        hPos.y += 1
        hPos.z += 2
        GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)

        let j = new Laya.Image('gameUI/yxz_jy_1.png')
        j.anchorX = 0.5
        j.anchorY = 0.5
        j.scale(2, 2)
        j.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
        this.addChild(j)
        Utility.tMove2D(j, j.x, j.y - 50, 500, () => {
            j.removeSelf()
        })
    }

    canShowTips: boolean = true
    showTips(index: number) {
        if (!this.canShowTips) return
        this.canShowTips = false
        Laya.timer.once(2000, this, () => { this.canShowTips = true })

        let str: string = ''
        switch (index) {
            case 1:
                str = 'Die' + Utility.GetRandom(1, 3) + '.png'
                break
            case 2:
                str = 'Short' + Utility.GetRandom(1, 3) + '.png'
                break
            case 3:
                str = 'Longer' + Utility.GetRandom(1, 3) + '.png'
                break
            case 4:
                str = 'Jewel' + Utility.GetRandom(1, 3) + '.png'
                break
        }
        let tips: Laya.Image = new Laya.Image('gameUI/' + str)
        tips.anchorX = 0.5
        tips.anchorY = 0.5
        tips.pos(375, 400)
        this.addChild(tips)

        Utility.scaleTo2D(tips, 1.3, 500, () => {
            Utility.scaleTo2D(tips, 1, 500, () => {
                Utility.alphaTo2D(tips, 0, 1000, () => {
                    tips.removeSelf()
                })
            })
        })
    }
}