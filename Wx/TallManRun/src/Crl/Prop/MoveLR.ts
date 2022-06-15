export default class MoveLR extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    isLeft: boolean = true

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate() {
        if (this.isLeft) {
            this.myOwner.transform.translate(new Laya.Vector3(0.03, 0, 0), false)
            if (this.myOwner.transform.position.x > 1.5) this.isLeft = false
        } else {
            this.myOwner.transform.translate(new Laya.Vector3(-0.03, 0, 0), false)
            if (this.myOwner.transform.position.x < -1.5) this.isLeft = true
        }
    }
}