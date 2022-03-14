import GameLogic from "../Crl/GameLogic"
import FdAd from "../FanDong/FdAd"
import FdMgr from "../FanDong/fdMgr"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"

export default class FinishUI extends Laya.Scene {
    constructor() {
        super()
    }

    VictoryNode: Laya.Image
    LoseNode: Laya.Image
    skipBtn: Laya.Image
    restartBtn: Laya.Image

    tagPic: Laya.Image
    perNum: Laya.FontClip

    num: number = 0

    onOpened(param) {
        let isWin: boolean = GameLogic.Share.isWin
        this.VictoryNode.visible = isWin
        this.LoseNode.visible = !isWin
        //this.restartBtn.visible = !isWin

        let per = Math.floor(PlayerDataMgr.getPlayerData().grade % 5) * 20
        per = per == 0 ? 100 : per
        this.perNum.value = per.toString()
        this.num = GameLogic.Share._coinCount
        this.tagPic.skin = 'finishUI/js_wz_0' + Math.floor(Math.random() * 5 + 2) + '.png'

        Utility.addClickEvent(this.skipBtn, this, this.skipBtnCB)
        Utility.addClickEvent(this.restartBtn, this, this.restartBtnCB)

        this.back()
    }

    onClosed() {

    }

    trippleBtnCB() {
        let cb = () => {
            PlayerDataMgr.changeCoin(this.num * 3)
            this.back()
        }
        FdAd.showVideoAd(cb)
    }

    skipBtnCB() {
        let cb = () => {
            GameLogic.Share.isWin = true
            this.back()
        }
        FdAd.showVideoAd(cb)
    }

    restartBtnCB() {
        this.back()
    }

    back() {
        FdMgr.loadGame(() => {
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.getPlayerData().grade++
                PlayerDataMgr.setPlayerData()
            }
            this.close()
            GameLogic.Share.restartGame()
            Laya.Scene.open('MyScenes/StartUI.scene', true)
        })
    }
}