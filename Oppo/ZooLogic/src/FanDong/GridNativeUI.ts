export default class GridNativeUI extends Laya.Scene {
    constructor() {
        super()
    }

    onOpened(param: any): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)

    }

    onClosed(type?: string): void {

    }
}