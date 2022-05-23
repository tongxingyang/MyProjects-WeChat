import Utility from "../Mod/Utility"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import FdMgr from "../FanDong/FdMgr"

export default class StartUI extends Laya.Scene {
    constructor() {
        super()
    }

    startBtn: Laya.Image
    coinNum: Laya.FontClip

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()

        FdMgr.inHomePage()
    }

    onClosed() {

    }

    startBtnCB() {
        FdMgr.startGame(() => {
            Laya.Scene.open('MyScenes/SkinUI.scene');
        })
    }

    myUpdate() {
    }
}
