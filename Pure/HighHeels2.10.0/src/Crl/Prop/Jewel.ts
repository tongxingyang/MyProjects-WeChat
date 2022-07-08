import SoundMgr from "../../Mod/SoundMgr"
import Utility from "../../Mod/Utility"
import GameUI from "../../View/GameUI"
import GameLogic from "../GameLogic"

export default class Jewel extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D
    myBB: Laya.BoundBox

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.myBB = Utility.getBoundBox(this.myOwner);
    }

    onDisable() {

    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause) return

        this.myOwner.transform.rotate(new Laya.Vector3(0, 1, 0), true, false)
        if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
            GameUI.Share.fixJewelIcon(this.myOwner)
            GameLogic.Share._coinCount++
            SoundMgr.instance.playSoundEffect('Get.mp3')
            this.myOwner.destroy()
        }
    }
}