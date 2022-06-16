
import GameLogic from "../GameLogic"

export default class FinishStep extends Laya.Script {
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
            let myPos = this.myOwner.transform.position.clone()
            let pPos = GameLogic.Share._player.transform.position.clone()
            if (myPos.z < pPos.z) {
                this.isDied = true
                let sp = this.myOwner as Laya.MeshSprite3D
                let mat = sp.meshRenderer.material as Laya.BlinnPhongMaterial
                mat.albedoColor = new Laya.Vector4(1, 1, 1, 1)
                mat.albedoIntensity = 4
            }
        }
    }
}