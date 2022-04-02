import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import FdMgr from "../FanDong/FdMgr"

export default class FinishUI extends Laya.Scene {
    constructor() {
        super()
    }
    gradeNum: Laya.FontClip

    winTitle: Laya.Image
    loseTitle: Laya.Image
    unlockNode: Laya.Image

    nextBtn: Laya.Image
    restartBtn: Laya.Image

    freeSkin: any[] = []

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        let isWin = GameLogic.Share.isWin
        this.winTitle.visible = isWin
        this.loseTitle.visible = !isWin
        this.nextBtn.visible = isWin
        this.restartBtn.visible = !isWin
        if (isWin) {
            PlayerDataMgr.unlockBody()
        }

        Utility.addClickEvent(this.nextBtn, this, this.closeCB)
        Utility.addClickEvent(this.restartBtn, this, this.closeCB)

        let skinArr = PlayerDataMgr.getInvalidSkins()
        if (skinArr.length <= 0 || !isWin) this.unlockNode.visible = false
        else {
            this.freeSkin = Utility.getRandomItemInArr(skinArr)
            let icon: Laya.Image = this.unlockNode.getChildByName('icon') as Laya.Image
            let name: Laya.Label = this.unlockNode.getChildByName('name') as Laya.Label
            let str: string = ''
            let index: string = (this.freeSkin[1] + 1) < 10 ? ('0' + (this.freeSkin[1] + 1)) : (this.freeSkin[1] + 1)
            if (this.freeSkin[0] == 0) {
                str = 'items/Head_' + index + '.png'
                name.text = PlayerDataMgr.getHeadName(this.freeSkin[1])
                PlayerDataMgr.getDataByType(0)[this.freeSkin[1]] = 1
            } else if (this.freeSkin[0] == 1) {
                str = 'items/Leg_' + index + '.png'
                name.text = PlayerDataMgr.getLegName(this.freeSkin[1])
                PlayerDataMgr.getDataByType(1)[this.freeSkin[1]] = 1
            } else if (this.freeSkin[0] == 2) {
                str = 'items/Tail_' + index + '.png'
                name.text = PlayerDataMgr.getTailName(this.freeSkin[1])
                PlayerDataMgr.getDataByType(2)[this.freeSkin[1]] = 1
            } else if (this.freeSkin[0] == 3) {
                str = 'items/Wings_' + index + '.png'
                name.text = PlayerDataMgr.getWingsName(this.freeSkin[1])
                PlayerDataMgr.getDataByType(3)[this.freeSkin[1]] = 1
            }
            icon.skin = str
            PlayerDataMgr.setPlayerData()
        }

        FdMgr.inFinish()
    }

    onClosed() {
    }

    closeCB() {
        this.close()
        FdMgr.backToHome(() => {
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.getPlayerData().grade++
                PlayerDataMgr.setPlayerData()
            }
            GameLogic.Share.restartGame()
            Laya.Scene.open('MyScenes/StartUI.scene', false)
        })
    }
}
