import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"
import GameLogic from "../Crl/GameLogic"
import PlayerCrl from "../Crl/PlayerCrl"
import { PlayerAniType } from "../Mod/Entity"
import WxApi from "../Libs/WxApi"
import FdAd from "../FanDong/FdAd"
import SoundMgr from "../Mod/SoundMgr"

export default class SkinUI extends Laya.Scene {
    constructor() {
        super()
    }

    playerNode: Laya.Sprite3D = null
    playerCrl: PlayerCrl = null

    closeBtn: Laya.Image
    myList: Laya.List
    coinNum: Laya.FontClip

    chooseId: number = 0

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Utility.addClickEvent(this.closeBtn, this, this.closeBtnCB)
        this.chooseId = PlayerDataMgr.getPlayerData().skinId
        this.createPlayer()
        this.initList()
        Laya.timer.frameLoop(1, this, this.myUpdate)
    }

    onClosed() {
        Laya.timer.clearAll(this)
        this.playerNode.destroy()
        GameLogic.Share._levelNode.active = true
    }

    createPlayer() {
        let res = Laya.loader.getRes(WxApi.UnityPath + 'Player.lh') as Laya.Sprite3D
        this.playerNode = Laya.Sprite3D.instantiate(res, GameLogic.Share._scene, false, new Laya.Vector3(0, 0, 0))
        this.playerNode.transform.position = new Laya.Vector3(0, 2.5, 2)
        this.playerCrl = this.playerNode.addComponent(PlayerCrl)
        this.playerCrl.playAni(PlayerAniType.ANI_IDLE)
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
        let select = item.getChildByName('select') as Laya.Image
        let icon = item.getChildByName('icon') as Laya.Image
        let using = item.getChildByName('using') as Laya.Image
        let unlocked = item.getChildByName('unlocked') as Laya.Image
        let buyBtn = item.getChildByName('buyBtn') as Laya.Image
        let cost = buyBtn.getChildByName('cost') as Laya.FontClip
        let adBtn = item.getChildByName('adBtn') as Laya.Image

        select.visible = this.chooseId == index
        icon.skin = 'skinUI/skin' + (index + 1) + '.png'
        using.visible = PlayerDataMgr.getPlayerData().skinId == index
        unlocked.visible = PlayerDataMgr.getPlayerData().skinId != index && PlayerDataMgr.getPlayerData().skinArr[index] == 1
        buyBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0
        cost.value = PlayerDataMgr.getCostById(index).toString()
        adBtn.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0

        icon.off(Laya.Event.CLICK, this, this.chooseCB)
        icon.on(Laya.Event.CLICK, this, this.chooseCB, [index])
        Utility.addClickEvent(buyBtn, this, this.buyBtnCB, [index])
        Utility.addClickEvent(adBtn, this, this.adBtnCB, [index])
    }

    chooseCB(id: number) {
        SoundMgr.instance.playSoundEffect('Click.mp3')
        if (this.chooseId == id) return
        let arr = ['Dude', 'Cat', 'Huga', 'Shouter']
        for (let i = 1; i < this.playerNode.numChildren; i++) {
            let sp: Laya.Sprite3D = this.playerNode.getChildAt(i) as Laya.Sprite3D
            sp.active = sp.name.search(arr[id]) != -1
        }
        this.chooseId = id
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
        let arr1 = ['Dude', 'Cat', 'Huga', 'Shouter']
        for (let i = 1; i < this.playerNode.numChildren; i++) {
            let sp: Laya.Sprite3D = this.playerNode.getChildAt(i) as Laya.Sprite3D
            sp.active = sp.name.search(arr1[id]) != -1
        }
        this.chooseId = id
        PlayerDataMgr.getPlayerData().coin -= PlayerDataMgr.getCostById(id)
        PlayerDataMgr.getPlayerData().skinArr[id] = 1
        PlayerDataMgr.getPlayerData().skinId = id
        PlayerDataMgr.setPlayerData()
        this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
    }

    adBtnCB(arr: any[]) {
        let id: number = arr[0]
        let cb = () => {
            let arr = ['Dude', 'Cat', 'Huga', 'Shouter']
            for (let i = 1; i < this.playerNode.numChildren; i++) {
                let sp: Laya.Sprite3D = this.playerNode.getChildAt(i) as Laya.Sprite3D
                sp.active = sp.name.search(arr[id]) != -1
            }
            this.chooseId = id
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