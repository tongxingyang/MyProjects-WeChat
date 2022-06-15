import PlayerDataMgr from "../../Libs/PlayerDataMgr"
import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Diamond extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    isDied: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate() {
        if (!this.isDied) {
            if (Utility.getWorldDis(this.myOwner, GameLogic.Share._player) <= 1) {
                PlayerDataMgr.changeCoin(5)
                this.isDied = true
                this.myOwner.destroy()
                return
            }

            let myPos = this.myOwner.transform.position.clone()
            let pPos = GameLogic.Share._player.transform.position.clone()
            if (myPos.y < GameLogic.Share._playerCrl.Dummy001.transform.position.y + 0.5) {
                myPos.y = 0
                pPos.y = 0
                if (Laya.Vector3.distance(pPos, myPos) <= 1) {
                    this.isDied = true
                    this.myOwner.destroy()
                    PlayerDataMgr.changeCoin(5)
                }
            }
        }
    }
}