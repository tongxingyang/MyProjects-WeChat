export default class BannerNativeUI extends Laya.Scene {
    constructor() {
        super()
    }

    onOpened(param: any): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)

    }

    onClosed(type?: string): void {

    }
}