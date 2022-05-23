import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"
import Player, { AniState } from "../Player"

export default class RoadTS extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D
    myBB: Laya.BoundBox
    playerNode: Laya.Sprite3D
    FXNode: Laya.Sprite3D

    isUsed: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.myBB = Utility.getBoundBox(this.myOwner.getChildByName('finish') as Laya.Sprite3D)
        this.playerNode = this.myOwner.getChildByName('PlayerNode') as Laya.Sprite3D
        this.FXNode = this.myOwner.getChildByName('FXNode') as Laya.Sprite3D
        this.FXNode.active = false

        this.initPlayer()
    }

    onDisable() {

    }
    
    initPlayer() {
        for (let i = 0; i < this.playerNode.numChildren; i++) {
            let n = this.playerNode.getChildAt(i) as Laya.Sprite3D

            let name = Math.random() * 1 < 0.5 ? 'Man_01.lh' : 'Wuman_01.lh'
            let player = Utility.getSprite3DResByUrl(name, n)
            player.transform.localPosition = new Laya.Vector3(0, 0, 0)
            player.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)
            let crl = player.addComponent(Player) as Player
            crl.playAnimation(AniState.ANI_SIT)
            crl.isCrowed = true

            crl.changeSkin(Math.floor(Math.random() * 15), false)
            crl.initShoes(Math.floor(Math.random() * 15), false)
            crl.activeAcc(Math.floor(Math.random() * 15))
        }
    }

    finishCB() {
        this.FXNode.active = true
        for (let i = 0; i < this.playerNode.numChildren; i++) {
            let n = this.playerNode.getChildAt(i) as Laya.Sprite3D
            let player = n.getChildAt(0) as Laya.Sprite3D
            let crl = player.getComponent(Player) as Player
            crl.playAnimation(AniState.ANI_UP)
            Laya.timer.once(200, this, () => {
                crl.playAnimation(AniState.ANI_WIN)
            })
        }
    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause) return

        if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB()) && !this.isUsed) {
            this.isUsed = true
            GameLogic.Share.isFinish = true
            GameLogic.Share._playerCrl.resetIdle(this.myOwner)
        }

        if (GameLogic.Share.isFinish && GameLogic.Share._player.transform.localPosition.z >= 10) {
            this.finishCB()
            GameLogic.Share.isFinish = false
            GameLogic.Share.isGameOver = true
            GameLogic.Share._playerCrl.goToDes(11)
            GameLogic.Share._cameraCrl.startRotate()
        }
    }
}