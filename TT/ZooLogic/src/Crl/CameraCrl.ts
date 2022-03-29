import GameLogic from "./GameLogic"

export default class CameraCrl extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.Camera

    onAwake() {
        this.myOwner = this.owner as Laya.Camera
    }

    onDisable() {

    }

    onUpdate() {
        if (GameLogic.Share.isGameOver) {
            return
        }

        if (GameLogic.Share._player && !GameLogic.Share._player.destroyed) {
            if (!GameLogic.Share.isMeet) {
                let pos = this.myOwner.transform.position.clone()
                pos.x = GameLogic.Share._player.transform.position.clone().x
                Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.1, pos)
                this.myOwner.transform.position = pos
            } else {
                let pos = this.myOwner.transform.position.clone()
                pos.x = (GameLogic.Share._player.transform.position.x + GameLogic.Share._enemy.transform.position.x) / 2
                Laya.Vector3.lerp(this.myOwner.transform.position.clone(), pos, 0.1, pos)
                this.myOwner.transform.position = pos
                let dt = Math.abs(GameLogic.Share._player.transform.position.x - GameLogic.Share._enemy.transform.position.x)
                if (dt > 10) dt = 10
                this.myOwner.fieldOfView = 60 + 10 * (dt / 10)
            }
        }
    }
}