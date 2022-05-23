
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
        
    }
}