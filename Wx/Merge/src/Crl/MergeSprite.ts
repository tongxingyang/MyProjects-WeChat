import Utility from "../Mod/Utility"

export default class MergeSprite extends Laya.Script {
    constructor() {
        super()
    }

    myOwnwer: Laya.Sprite3D

    pointArr: Laya.Vector3[] = []
    curIndex: number = 0

    onAwake() {
        this.myOwnwer = this.owner as Laya.Sprite3D
    }

    init(arr: Laya.Vector3[]) {
        this.pointArr = arr
        this.move()
    }

    move() {
        Utility.TmoveTo(this.myOwnwer, 20, this.pointArr[this.curIndex], () => {
            this.curIndex++
            if (this.curIndex >= this.pointArr.length) {
                this.rotateLoop()
                return
            }
            this.move()
        })
    }

    rotateLoop() {
        Laya.timer.frameLoop(1, this, () => {
            let p = Utility.RotateWithPoint(this.myOwnwer, new Laya.Vector3(0, 1, 0), 2)
            this.myOwnwer.transform.position = p.clone()
        })
    }

    onUpdate() {

    }
}