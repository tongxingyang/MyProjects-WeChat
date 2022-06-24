
import Utility from "../Mod/Utility"
import GameLogic from "./GameLogic"

export default class CameraCrl extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Camera

    isZooming: boolean = false

    onAwake() {
        this.myOwner = this.owner as Laya.Camera
    }

    onDisable() {

    }

    gameStart() {
        let pos = this.myOwner.transform.position.clone()
        pos.x -= 4
        pos.y -= 1
        pos.z += 4
        let pos1 = pos.clone()
        pos1.z += 13
        Utility.TmoveTo(this.myOwner, 500, pos, () => {
            Utility.TmoveTo(this.myOwner, 5500, pos1, () => {

            })
        })

        let r = this.myOwner.transform.rotationEuler.clone()
        r.x -= 20
        r.y += 25
        Utility.RotateTo(this.myOwner, 500, r, null)
    }

    zoomSkillTarget(node: Laya.Sprite3D) {
        if (this.isZooming) return
        this.isZooming = true
        let myPos = this.myOwner.transform.position.clone()
        let myR = this.myOwner.transform.rotationEuler.clone()

        this.myOwner.transform.lookAt(node.transform.position.clone(), new Laya.Vector3(0, 1, 0), false)
        let dir = Utility.getDirectionAToB(this.myOwner, node)
        Laya.Vector3.scale(dir, 2, dir)
        Laya.Vector3.add(myPos, dir, dir)
        Utility.TmoveTo(this.myOwner, 800, dir, null)
        Laya.timer.once(2000, this, () => {
            Utility.TmoveTo(this.myOwner, 500, myPos, ()=>{
                this.isZooming = false
            })
            this.myOwner.transform.rotationEuler = myR
        })
    }

    onUpdate() {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) {
            return
        }
    }
}