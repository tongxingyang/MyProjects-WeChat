import GameLogic from "../GameLogic"

export default class Npc extends Laya.Script {
    constructor() {
        super()
    }
    _ani: Laya.Animator
    myOwner: Laya.Sprite3D = null

    numSp: Laya.MeshSprite3D = null

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
        this._ani = this.myOwner.getComponent(Laya.Animator)
        this.numSp = this.myOwner.getChildAt(1).getChildAt(0).getChildAt(0) as Laya.MeshSprite3D
    }

    raiseCB() {
        this._ani.play('raise')
        Laya.timer.once(600, this, () => {
            this._ani.play('raise_1')
        })

        let x = 1
        let y = 1
        if (GameLogic.Share.correctCount == 0) {
            x = 1
            y = 1
        } else if (GameLogic.Share.correctCount == 1) {
            x = 0.2
            y = 1
        } else if (GameLogic.Share.correctCount == 2) {
            x = 0.4
            y = 1
        } else if (GameLogic.Share.correctCount == 3) {
            x = 0.6
            y = 1
        } else if (GameLogic.Share.correctCount == 4) {
            x = 0.8
            y = 1
        } else if (GameLogic.Share.correctCount == 5) {
            x = 0.4
            y = -0.22
        } else if (GameLogic.Share.correctCount == 6) {
            x = 0.8
            y = -0.22
        }

        let mat = this.numSp.meshRenderer.material as Laya.BlinnPhongMaterial
        mat.tilingOffset = new Laya.Vector4(1, 1, x, y)
    }

    onUpdate(): void {

    }
}