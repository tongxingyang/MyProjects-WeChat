import Utility from "../../Mod/Utility"
import GameLogic from "../GameLogic"

export default class Obstacle3 extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    isDied: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate() {
        let x = this.myOwner.transform.position.x
        this.myOwner.transform.rotate(new Laya.Vector3(0, x > 0 ? 1 : -1, 0), false, false)

        if (!this.isDied && GameLogic.Share._playerCrl.scaleV > 1.7) {
            for (let i = 0; i < this.myOwner.numChildren; i++) {
                let p = this.myOwner.getChildAt(i) as Laya.Sprite3D
                let myPos = p.transform.position.clone()
                let pPos = GameLogic.Share._player.transform.position.clone()
                myPos.y = 0
                pPos.y = 0
                if (Laya.Vector3.distance(pPos, myPos) <= 0.5) {
                    this.isDied = true
                    GameLogic.Share._playerCrl.decHV(1)
                }
            }
        }
    }
}