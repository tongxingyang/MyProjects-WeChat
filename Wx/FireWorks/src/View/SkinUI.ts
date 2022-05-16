import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import GameLogic from "../Crl/GameLogic"
import SoundMgr from "../Mod/SoundMgr"
import FdAd from "../FanDong/FdAd"

export default class SkinUI extends Laya.Scene {
    constructor() {
        super()
    }

    myList: Laya.List
    coinNum: Laya.FontClip

    chooseId: number = 0

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Laya.timer.frameLoop(1, this, this.onMyUpdate)
        this.chooseId = PlayerDataMgr.getPlayerData().skinId
        this.initList()

        FdAd.showBannerAd()
    }

    onClosed() {
        FdAd.hideBannerAd()
    }

    initList() {
        let arr = [].concat(PlayerDataMgr.getPlayerData().skinArr)
        this.myList.vScrollBarSkin = '';
        this.myList.array = arr;
        this.myList.repeatX = 3;
        this.myList.repeatY = Math.floor(arr.length / 3);
        this.myList.renderHandler = Laya.Handler.create(this, this.onListRender, null, false);
    }
    onListRender(cell, index: number) {
        if (index >= this.myList.array.length) {
            return;
        }
        var item = cell.getChildByName('item') as Laya.Image
        let dk1 = item.getChildByName('dk1') as Laya.Image
        let icon = item.getChildByName('icon') as Laya.Image
        let using = item.getChildByName('using') as Laya.Image
        let buyBtn = item.getChildByName('buyBtn') as Laya.Image
        let cost = buyBtn.getChildByName('cost') as Laya.FontClip
        let adBtn = item.getChildByName('adBtn') as Laya.Image

        dk1.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0
        icon.skin = 'skinUI/firework_' + (index + 1) + '.png'
        using.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 1
        buyBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0
        cost.value = PlayerDataMgr.getCostById(index).toString()
        adBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0

        Utility.addClickEvent(using, this, this.chooseCB, [index])
        Utility.addClickEvent(buyBtn, this, this.buyBtnCB, [index])
        Utility.addClickEvent(adBtn, this, this.adBtnCB, [index])
    }

    chooseCB(arr: any[]) {
        let id: number = arr[0]
        this.chooseId = id

        //开始游戏
        GameLogic.Share.gameStart(id)

        Laya.Scene.open('MyScenes/GameUI.scene');
    }

    buyBtnCB(arr: any[]) {
        let id: number = arr[0]
        if (PlayerDataMgr.getPlayerData().coin < PlayerDataMgr.getCostById(id)) {
            return
        }
        this.chooseId = id
        PlayerDataMgr.getPlayerData().coin -= PlayerDataMgr.getCostById(id)
        PlayerDataMgr.getPlayerData().skinArr[id] = 1
        PlayerDataMgr.getPlayerData().skinId = id
        PlayerDataMgr.setPlayerData()
        this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
        SoundMgr.instance.playSoundEffect('Reward.mp3')
    }

    adBtnCB(arr: any[]) {
        let id: number = arr[0]
        let cb = () => {
            this.chooseId = id
            PlayerDataMgr.getPlayerData().skinArr[id] = 1
            PlayerDataMgr.getPlayerData().skinId = id
            PlayerDataMgr.setPlayerData()
            this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
            SoundMgr.instance.playSoundEffect('Reward.mp3')
        }
        FdAd.showVideoAd(cb)
    }

    onMyUpdate() {
        this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
    }
}