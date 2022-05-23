import GameLogic from "../Crl/GameLogic"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import FdAd from "../FanDong/FdAd"
import FdMgr from "../FanDong/FdMgr"

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

        FdMgr.inHomePage()
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
        FdMgr.startGame(() => {
            GameLogic.Share.gameStart()
        })
    }

    updateCB() {

    }
}