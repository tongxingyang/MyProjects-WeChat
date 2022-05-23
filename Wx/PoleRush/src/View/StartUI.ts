import GameLogic from "../Crl/GameLogic"
import FdAd from "../FanDong/FdAd"
import FdMgr from "../FanDong/fdMgr"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    gradeNum: Laya.Label
    coinNum: Laya.FontClip
    startBtn: Laya.Image
    skinBtn: Laya.Image

    onAwake() {
        SoundMgr.instance.playMusic('Bgm.mp3')
    }

    hideExportBtn: Laya.Image
    onOpened() {
        WxApi.isStartUI = true
        this.gradeNum.text = PlayerDataMgr.getPlayerData().grade.toString()
        this.startBtn.on(Laya.Event.CLICK, this, this.startBtnCB)
        this.skinBtn.on(Laya.Event.CLICK, this, this.skinBtnCB)
        Laya.timer.frameLoop(1, this, this.updateCB)

        FdAd.showBannerAd()
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
        FdMgr.startGame(()=>{
            FdAd.hideBannerAd()
            GameLogic.Share.gameStart()
        })
    }
    skinBtnCB() {
        FdAd.hideBannerAd()
        SoundMgr.instance.playSoundEffect('Click.mp3')
        GameLogic.Share._camera.active = false
        Laya.Scene.open('MyScenes/SkinUI.scene')
    }

    updateCB() {
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
    }
}