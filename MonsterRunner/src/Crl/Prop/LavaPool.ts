import GameLogic from "../GameLogic"

export default class LavaPool extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Sprite3D = null
    isDied: boolean = false

    onAwake(): void {
        this.myOwner = this.owner as Laya.Sprite3D
    }

    onUpdate(): void {
        let playerPos: Laya.Vector3 = GameLogic.Share._player.transform.position.clone()
        let myPos: Laya.Vector3 = this.myOwner.transform.position.clone()

        if (Math.abs(playerPos.z - myPos.z) < 2.5 && Math.abs(playerPos.x - myPos.x) < 1.5) {
            GameLogic.Share._playerCrl.decHp1(0.02)
        }
    }
}