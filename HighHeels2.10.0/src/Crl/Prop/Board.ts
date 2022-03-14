import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Board extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D
    myBB: Laya.BoundBox
    DieArea1: Laya.Sprite3D = null
    DieArea2: Laya.Sprite3D = null

    isUsed: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
        this.myBB = Utility.getBoundBox(this.myOwner)
        this.DieArea1 = this.myOwner.getChildByName('DieArea1') as Laya.Sprite3D
        this.DieArea2 = this.myOwner.getChildByName('DieArea2') as Laya.Sprite3D
    }

    onDisable() {

    }

    addPlayerToSelf() {
        this.myOwner.addChild(GameLogic.Share._player)
        GameLogic.Share._player.transform.localPosition = new Laya.Vector3(0, Math.floor(GameLogic.Share._playerCrl.shoesArr.length / 2), 0)

        let pos = GameLogic.Share._player.transform.localPosition.clone()
        pos.z += Math.tan(Math.abs(this.myOwner.transform.localRotationEuler.x) * Math.PI / 180) * Math.floor(GameLogic.Share._playerCrl.shoesArr.length / 2)
        GameLogic.Share._player.transform.localPosition = pos

        let a = GameLogic.Share._player.transform.localRotationEuler.clone()
        a.x -= this.myOwner.transform.localRotationEuler.x
        GameLogic.Share._player.transform.localRotationEuler = a

    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame || GameLogic.Share.isPause) return

        if (Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.DieArea1), GameLogic.Share._playerCrl.getMyBB()) ||
            Laya.CollisionUtils.boxContainsBox(Utility.getBoundBox(this.DieArea2), GameLogic.Share._playerCrl.getMyBB())) {
            if (!GameLogic.Share._playerCrl.isBoarding) {
                GameLogic.Share._playerCrl.diedCB(true)
                return
            }
        }
        if (!this.isUsed && Laya.CollisionUtils.boxContainsBox(this.myBB, GameLogic.Share._playerCrl.getMyBB())) {
            this.isUsed = true
            this.addPlayerToSelf()
            GameLogic.Share._playerCrl.boardCB()
        }
    }
}