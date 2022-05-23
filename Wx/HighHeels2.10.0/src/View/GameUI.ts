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
    gradeNum: Laya.FontClip
    guideAni: Laya.Animation
    keyNode: Laya.Image

    onOpened() {
        GameUI.Share = this
        //GameLogic.Share.isStartGame = true
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        this.touchBtn.on(Laya.Event.MOUSE_DOWN, this, this.touchBtnDownCB)

        Laya.timer.frameLoop(1, this, this.updateCB)

        FdAd.showBannerAd()
    }

    onClosed() {
        Laya.timer.clearAll(this)
        FdAd.hideBannerAd()
    }

    touchBtnDownCB(event: Laya.Event) {
        if (GameLogic.Share.isGameOver) return
        if (!GameLogic.Share.isStartGame) {
            GameLogic.Share.isStartGame = true
            this.guideAni.visible = false
            GameLogic.Share.startToWalk()
        }
    }

    fixJewelIcon(jewel: Laya.Sprite3D) {
        let op: Laya.Vector4 = new Laya.Vector4(0, 0, 0)
        let hPos = jewel.transform.position.clone()
        hPos.y += 1
        GameLogic.Share._camera.viewport.project(hPos, GameLogic.Share._camera.projectionViewMatrix, op)

        let j = new Laya.Image('startUI/sy_zs_01.png')
        j.anchorX = 0.5
        j.anchorY = 0.5
        j.scale(3, 3)
        j.pos(op.x / Laya.stage.clientScaleX, op.y / Laya.stage.clientScaleY)
        this.addChild(j)
        Utility.tMove2D(j, 610, 55, 500, () => {
            PlayerDataMgr.changeCoin(1)
            j.removeSelf()
        })
        Utility.scaleTo2D(j, 1, 500)
    }

    showKeyNode() {
        for (let i = 0; i < this.keyNode.numChildren; i++) {
            let key = this.keyNode.getChildAt(i) as Laya.Image
            key.skin = PlayerDataMgr.getPlayerData().key > i ? 'boxUI/mh_ys_01.png' : 'boxUI/mh_ys_02.png'
        }
        Utility.tMove2D(this.keyNode, 750 - 134, this.keyNode.y, 1000, () => {
            Laya.timer.once(2000, this, () => {
                Utility.tMove2D(this.keyNode, 750, this.keyNode.y, 1000)
            })
        })
    }

    updateCB() {
        
    }
}