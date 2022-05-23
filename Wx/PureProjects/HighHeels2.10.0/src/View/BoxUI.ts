
import FdAd from "../FanDong/FdAd"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"

export default class BoxUI extends Laya.Scene {
    constructor() {
        super()
    }

    itemNode: Laya.Sprite
    bestPic: Laya.Image
    getBtn: Laya.Image
    backBtn: Laya.Image
    keyNode: Laya.Image
    skinId: number = -1

    keyCount: number = 3
    openCount: number = 0
    gotSkin: boolean = false

    randomArr: number[] = [20, 15, 10, 10, 10, 10, 10, 10, 5]
    boxArr: number[] = [15, 25, 35, 45, 55, 65, 75, 85, 100]

    onOpened() {
        this.skinId = PlayerDataMgr.getUnlockShoesId()
        if (this.skinId != -1) {
            this.bestPic.skin = 'skinUI/shoes/Shoes' + (this.skinId + 1) + '.png'
        }
        this.keyCount = 3
        Laya.timer.frameLoop(1, this, this.updateCB)
        Utility.addClickEvent(this.getBtn, this, this.getKeyBtnCB)
        Utility.addClickEvent(this.backBtn, this, this.backBtnCB)
        this.getBtn.visible = false
        this.backBtn.visible = false
        this.initItem()
        FdAd.hideBannerAd()
    }

    onClosed() {
        FdAd.hideBannerAd()
    }

    initItem() {
        for (let i = 0; i < this.itemNode.numChildren; i++) {
            let item = this.itemNode.getChildAt(i) as Laya.Image
            let box = item.getChildByName('box') as Laya.Image
            let coin = item.getChildByName('diamond') as Laya.Image
            let num = item.getChildByName('num') as Laya.FontClip

            coin.visible = false
            num.visible = false
            item.on(Laya.Event.CLICK, this, this.itemCB, [i])
        }
    }

    itemCB(id: number) {
        if (this.openCount >= 9 || this.keyCount <= 0 || !(this.itemNode.getChildAt(id).getChildByName('box') as Laya.Image).visible) return
        this.keyCount--

        let randV: number = Math.random() * 100
        let v = 0
        let index = 0
        for (let i = 0; i < this.randomArr.length; i++) {
            if (randV <= this.randomArr[i] + v) {
                index = i
                break
            }
            v += this.randomArr[i]
        }
        let num: number = this.randomArr.splice(index, 1)[0]
        this.randomArr.forEach(r => {
            r += num / this.randomArr.length
        })
        let bounes = this.boxArr[index]
        this.boxArr.splice(index, 1)
        this.openCount++
        if (this.openCount % 3 == 0) {
            if (this.openCount < 9)
                this.getBtn.visible = true
            this.backBtn.visible = true
        }

        let item = this.itemNode.getChildAt(id) as Laya.Image
        item.skin = 'boxUI/mh_dk_04.png'
        let box = item.getChildByName('box') as Laya.Image
        let coin = item.getChildByName('diamond') as Laya.Image
        let coinV = item.getChildByName('num') as Laya.FontClip
        box.visible = false
        coin.visible = true
        coinV.visible = true

        if (bounes == 100 && this.skinId != -1 && !this.gotSkin) {
            this.gotSkin = true
            coin.visible = false
            coinV.visible = false
            box.visible = true
            box.skin = 'skinUI/shoes/Shoes' + (this.skinId + 1) + '.png'
            PlayerDataMgr.getPlayerData().shoesArr[this.skinId] = 1
            PlayerDataMgr.getPlayerData().shoesId = this.skinId
            PlayerDataMgr.setPlayerData()
        } else {
            PlayerDataMgr.changeCoin(bounes)
            coinV.value = bounes.toString()
        }
    }

    getKeyBtnCB() {
        let cb = () => {
            this.keyCount = 3
            this.getBtn.visible = false
            this.backBtn.visible = false
        }
        FdAd.showVideoAd(cb)
    }

    backBtnCB() {
        Laya.Scene.closeAll()

        PlayerDataMgr.getPlayerData().key = 0
        PlayerDataMgr.setPlayerData()
        Laya.Scene.open('MyScenes/FinishUI.scene', false)
    }

    updateCB() {
        for (let i = 0; i < this.keyNode.numChildren; i++) {
            let key: Laya.Image = this.keyNode.getChildAt(i) as Laya.Image
            key.skin = i < this.keyCount ? 'boxUI/mh_ys_01.png' : 'boxUI/mh_ys_02.png'
        }
    }
}