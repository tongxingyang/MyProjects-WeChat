
import GameLogic from "../GameLogic"

export default class Jumper extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate(): void {
        if (GameLogic.Share.isGameOver) return
        let playerPos: Laya.Vector3 = GameLogic.Share._player.transform.position.clone()
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()
        myPos.y = 0
        if (Laya.Vector3.distance(myPos, playerPos) < 1) {
            GameLogic.Share._playerCrl.jump()
        }
    }
}