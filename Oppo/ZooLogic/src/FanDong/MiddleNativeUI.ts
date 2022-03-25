export default class MiddleNativeUI extends Laya.Scene {
    constructor() {
        super()
    }
    ccb: Function = null

    onOpened(param: any): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        if (param && param.ccb) this.ccb = param.ccb
    }

    onClosed(type?: string): void {
        Laya.timer.clearAll(this)
        this.ccb && this.ccb()
    }
}