import GameLogic from "../GameLogic"
import WxApi from "../../Libs/WxApi"

export default class Runner extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    hadColl: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onDisable() {

    }

    checkColl() {
        if (this.hadColl) {
            return
        }
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        let mPos: Laya.Vector3 = GameLogic.Share._mosquitoNode.transform.position.clone()
        myPos.y = 0
        mPos.y = 0
        if (Laya.Vector3.distance(myPos, mPos) < 2) {
            this.hadColl = true
            WxApi.DoVibrate()
            GameLogic.Share.updateMosquitoNum(GameLogic.Share._mosquitoNode.numChildren - 20)
        }
    }

    onUpdate() {
        this.checkColl()
    }
}