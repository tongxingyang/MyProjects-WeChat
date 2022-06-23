
import GameLogic from "../GameLogic"

export default class DropArea extends Laya.Script {
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
        if (playerPos.z > myPos.z && playerPos.z < myPos.z + 2 && !GameLogic.Share._playerCrl.isJumping) {
            GameLogic.Share.gameOver(false)
            GameLogic.Share._playerCrl.drop()
        }
    }
}