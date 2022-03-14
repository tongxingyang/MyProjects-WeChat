
import GameLogic from "./GameLogic"

export default class PlayerCrl extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite3D = null

    moveDir: number = 0
    speed: number = 0.08
    hp: number = 10
    hpMax: number = 10

    canMove: boolean = true

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    moveX() {
        if (GameLogic.Share.isGameOver || !this.canMove) return

        let speed = this.speed
        if (this.moveDir > 0) {
            this.myOwner.transform.translate(new Laya.Vector3(speed, 0, 0), false)
        } else if (this.moveDir < 0) {
            this.myOwner.transform.translate(new Laya.Vector3(-speed, 0, 0), false)
        }
    }

    hurtCB(dmg: number) {
    }

    onUpdate(): void {
        if (GameLogic.Share.isGameOver || !GameLogic.Share.isStartGame) {
            return
        }

        this.moveX()

        if (this.myOwner.transform.position.x < -5) {
            let pos = this.myOwner.transform.position.clone()
            pos.x = -5
            this.myOwner.transform.position = pos
        } else if (this.myOwner.transform.position.x > 5) {
            let pos = this.myOwner.transform.position.clone()
            pos.x = 5
            this.myOwner.transform.position = pos
        }
    }
}