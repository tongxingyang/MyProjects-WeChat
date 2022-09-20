import Utility from "../Mod/Utility"

export default class Blink extends Laya.Script {
    constructor() {
        super()
    }
    myOwner: Laya.Sprite

    onAwake() {
        this.myOwner = this.owner as Laya.Sprite
        Utility.blinkLoop(this.myOwner)
    }

    onUpdate() {

    }
}