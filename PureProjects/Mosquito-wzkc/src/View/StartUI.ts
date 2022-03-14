import GameLogic from "../Crl/GameLogic"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import FdAd from "../FanDong/FdAd"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image

    onAwake() {
        SoundMgr.instance.playMusic('bgm.mp3')
    }

    onOpened() {
        WxApi.isStartUI = true
        Laya.timer.frameLoop(1, this, this.updateCB)

        this.startBtn.on(Laya.Event.CLICK, this, this.startBtnCB)

        FdAd.showBannerAd()
    }


    onClosed() {
        WxApi.isStartUI = false
        Laya.timer.clearAll(this)
        FdAd.hideBannerAd()
    }

    hadStart: boolean = false
    startBtnCB() {
        if (this.hadStart) return
        this.hadStart = true
        FdAd.hideBannerAd()
        GameLogic.Share.gameStart()
    }

    updateCB() {

    }
}