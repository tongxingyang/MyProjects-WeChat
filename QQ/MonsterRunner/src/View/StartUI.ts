import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"
import SoundMgr from "../Mod/SoundMgr"
import GameLogic from "../Crl/GameLogic"
import FdAd from "../FanDong/FdAd"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image
    skinBtn: Laya.Image

    onOpened() {
        SoundMgr.instance.playMusic('bgm.mp3')
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        Utility.addClickEvent(this.skinBtn, this, this.skinBtnCB)
        FdMgr.inHomePage(this)
    }
    onClosed() {
    }

    startBtnCB() {
        FdMgr.startGame(() => {
            Laya.Scene.open('MyScenes/FreeSkinUI.scene', true, () => {
                Laya.Scene.open('MyScenes/GameUI.scene')
            })
        })
    }

    skinBtnCB() {
        FdAd.hideBannerAd()
        GameLogic.Share._levelNode.active = false
        Laya.Scene.open('MyScenes/SkinUI.scene')
    }
}
