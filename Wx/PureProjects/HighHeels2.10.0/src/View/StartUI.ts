import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"
import FdAd from "../FanDong/FdAd"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image
    shopBtn: Laya.Image

    itemNode: Laya.Sprite

    startLabel: Laya.Label

    onAwake() {
        SoundMgr.instance.playMusic('Bgm.mp3')
    }

    onOpened() {
        WxApi.isStartUI = true
        Laya.timer.frameLoop(1, this, this.updateCB)

        this.startBtn.on(Laya.Event.CLICK, this, this.startBtnCB)
        Utility.addClickEvent(this.shopBtn, this, this.skinBtnCB)

        Utility.scaleLoop(this.startLabel, 1.2, 500)

        this.initGradeData()

        GameLogic.Share._cameraCrl.resetCamera()

        FdAd.showBannerAd()
    }


    onClosed() {
        WxApi.isStartUI = false
        Laya.timer.clearAll(this)
        FdAd.hideBannerAd()
    }

    initGradeData() {
        for (let i = 0; i < 5; i++) {
            let item = this.itemNode.getChildAt(i) as Laya.Image
            let num = item.getChildByName('num') as Laya.FontClip

            let base = Math.floor((PlayerDataMgr.getPlayerData().grade - 1) / 5) * 5
            num.value = ((i + 1) + base).toString()

            item.skin = PlayerDataMgr.getPlayerData().grade >= (i + 1) + base ? 'startUI/sy_dk_02.png' : 'startUI/sy_dk_03.png'
        }
    }

    startBtnCB() {
        FdAd.hideBannerAd()
        GameLogic.Share.gameStart()
    }
    skinBtnCB() {
        FdAd.hideBannerAd()
        Laya.Scene.open('MyScenes/SkinUI.scene')

        GameLogic.Share._scene.active = false
        GameLogic.Share._camera.active = false
    }

    updateCB() {

    }
}