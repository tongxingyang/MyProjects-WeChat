import SoundMgr from "../../Mod/SoundMgr"
import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Heel extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D
    myBB: Laya.BoundBox

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.myBB = Utility.getBoundBox(this.myOwner)
        let angle = this.myOwner.transform.localRotationEuler.clone()
        angle.y += 90
        this.myOwner.transform.localRotationEuler = angle;
    }

    onDisable() {

    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause) return

        this.myOwner.transform.rotate(new Laya.Vector3(0, 1, 0), true, false)

        if (Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
            GameLogic.Share._playerCrl.addShoes()
            SoundMgr.instance.playSoundEffect('Get.mp3')
            this.myOwner.destroy()
        }
    }
}