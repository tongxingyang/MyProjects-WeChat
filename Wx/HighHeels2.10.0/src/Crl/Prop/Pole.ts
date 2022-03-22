import SoundMgr from "../../Mod/SoundMgr"
import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Pole extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D

    SlideArea: Laya.Sprite3D = null
    DieArea1: Laya.Sprite3D = null
    DieArea2: Laya.Sprite3D = null
    FXNode: Laya.Sprite3D = null

    isUsed: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.SlideArea = this.myOwner.getChildByName('SlideArea') as Laya.Sprite3D
        this.DieArea1 = this.myOwner.getChildByName('DieArea1') as Laya.Sprite3D
        this.DieArea2 = this.myOwner.getChildByName('DieArea2') as Laya.Sprite3D
        this.FXNode = this.myOwner.getChildByName('FXNode') as Laya.Sprite3D
        this.FXNode.active = false
    }

    onDisable() {

    }

    addPlayerToSelf() {
        let pos = GameLogic.Share._player.transform.position.clone()
        this.myOwner.addChild(GameLogic.Share._player)
        GameLogic.Share._player.transform.position = pos
    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause) return

        if (this.myOwner.getChildByName('Player')) {
            let player = this.myOwner.getChildByName('Player') as Laya.Sprite3D
            this.FXNode.active = true
            let pos = this.FXNode.transform.localPosition.clone()
            pos.z = player.transform.localPosition.z
            this.FXNode.transform.localPosition = pos
        }
        else {
            this.FXNode.active = false
        }

        if (Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.DieArea1, true), GameLogic.Share._playerCrl.getMyBB()) ||
            Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.DieArea2, true), GameLogic.Share._playerCrl.getMyBB())) {
            console.log(Utility.getBoundBox(this.DieArea1))
            console.log(Utility.getBoundBox(this.DieArea2))
            GameLogic.Share._playerCrl.diedCB(true)
            return
        }

        if (!this.isUsed && Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.SlideArea, true), GameLogic.Share._playerCrl.getMyBB())) {
            this.isUsed = true
            if (GameLogic.Share._playerCrl.shoesArr.length <= 0) {
                GameLogic.Share._playerCrl.diedCB(true)
            } else {
                this.addPlayerToSelf()
                SoundMgr.instance.playSoundEffect('Gliding.mp3', 1, null, null, 3.5)
                GameLogic.Share._playerCrl.slideCB()
            }
        }
    }
}