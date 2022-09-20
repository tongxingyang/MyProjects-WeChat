import Utility from "../Mod/Utility"
import SGMgr from "../SGSDK/SGMgr"
import SoundMgr from "../Mod/SoundMgr"
import GameLogic from "../Crl/GameLogic"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image

    onOpened() {
        SoundMgr.instance.playMusic('bgm')
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        SGMgr.inHomePage()
    }
    onClosed() {
    }

    startBtnCB() {
        SGMgr.startGame(() => {
            Laya.Scene.open('MyScenes/SelectUI.scene')
        })
    }
}
