import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import FdAd from "../FanDong/FdAd"
import SoundMgr from "../Mod/SoundMgr"
import GameLogic from "../Crl/GameLogic"

export default class SkinUI extends Laya.Scene {
    constructor() {
        super()
    }

    closeBtn: Laya.Image
    myList: Laya.List
    coinNum: Laya.FontClip

    chooseId: number = 0

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.closeBtn, this, this.closeBtnCB)
        this.chooseId = PlayerDataMgr.getPlayerData().skinId
        this.initList()
        Laya.timer.frameLoop(1, this, this.myUpdate)
    }

    onClosed() {
        Laya.timer.clearAll(this)
        GameLogic.Share._playerCrl.changeSkin(PlayerDataMgr.getPlayerData().skinId)
        GameLogic.Share._camera.transform.translate(new Laya.Vector3(0, 3, 0), false)
    }

    initList() {
        this.myList.vScrollBarSkin = '';
        this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
        this.myList.repeatX = 3;
        this.myList.repeatY = 2;
        this.myList.renderHandler = Laya.Handler.create(this, this.onmyListRender, null, false);
    }
    onmyListRender(cell, index: number) {
        if (index >= this.myList.array.length) {
            return;
        }
        var item = cell.getChildByName('item') as Laya.Image
        let bg = item.getChildByName('bg') as Laya.Image
        let select = item.getChildByName('select') as Laya.Image
        let icon = item.getChildByName('icon') as Laya.Image
        let using = item.getChildByName('using') as Laya.Image
        let unlocked = item.getChildByName('unlocked') as Laya.Image
        let buyBtn = item.getChildByName('buyBtn') as Laya.Image
        let cost = buyBtn.getChildByName('cost') as Laya.FontClip
        let adBtn = item.getChildByName('adBtn') as Laya.Image

        select.visible = this.chooseId == index
        icon.skin = 'skinUI/Hero/Hero_' + (index + 1) + '.png'
        using.visible = PlayerDataMgr.getPlayerData().skinId == index
        unlocked.visible = PlayerDataMgr.getPlayerData().skinId != index && PlayerDataMgr.getPlayerData().skinArr[index] == 1
        buyBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0 && PlayerDataMgr.getCostById(index) < PlayerDataMgr.getPlayerData().coin
        cost.value = PlayerDataMgr.getCostById(index).toString()
        adBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0 && !buyBtn.visible

        bg.off(Laya.Event.CLICK, this, this.chooseCB)
        bg.on(Laya.Event.CLICK, this, this.chooseCB, [index])
        Utility.addClickEvent(buyBtn, this, this.buyBtnCB, [index])
        Utility.addClickEvent(adBtn, this, this.adBtnCB, [index])
    }

    chooseCB(id: number) {
        SoundMgr.instance.playSoundEffect('Click.mp3')
        if (this.chooseId == id) return
        this.chooseId = id
        GameLogic.Share._playerCrl.changeSkin(id)
        if (PlayerDataMgr.getPlayerData().skinArr[id] == 1) {
            PlayerDataMgr.getPlayerData().skinId = id
            PlayerDataMgr.setPlayerData()
        }
        this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
    }

    buyBtnCB(arr: any[]) {
        let id: number = arr[0]
        if (PlayerDataMgr.getPlayerData().coin < PlayerDataMgr.getCostById(id)) {
            return
        }
        this.chooseId = id
        GameLogic.Share._playerCrl.changeSkin(id)
        PlayerDataMgr.getPlayerData().coin -= PlayerDataMgr.getCostById(id)
        PlayerDataMgr.getPlayerData().skinArr[id] = 1
        PlayerDataMgr.getPlayerData().skinId = id
        PlayerDataMgr.setPlayerData()
        this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
    }

    adBtnCB(arr: any[]) {
        let id: number = arr[0]
        let cb = () => {
            this.chooseId = id
            GameLogic.Share._playerCrl.changeSkin(id)
            PlayerDataMgr.getPlayerData().skinArr[id] = 1
            PlayerDataMgr.getPlayerData().skinId = id
            PlayerDataMgr.setPlayerData()
            this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
        }
        FdAd.showVideoAd(cb)
    }

    closeBtnCB() {
        Laya.Scene.open('MyScenes/StartUI.scene')
    }

    myUpdate() {
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
    }
}