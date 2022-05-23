import SoundMgr from "../../Mod/SoundMgr"
import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Thorn extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D
    myBB: Laya.BoundBox

    isUsed: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.myBB = Utility.getBoundBox(this.myOwner)
    }

    onDisable() {

    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause || this.isUsed) return

        if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
            this.isUsed = true
            SoundMgr.instance.playSoundEffect('Collision.mp3')
            if (GameLogic.Share._playerCrl.shoesArr.length <= 0) {
                GameLogic.Share._playerCrl.diedCB()
            } else {
                GameLogic.Share._playerCrl.decShoes(this.myOwner, 200)
            }
        }
    }
}