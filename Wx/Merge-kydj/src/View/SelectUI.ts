import Effects from "../Crl/Effects"
import GameLogic from "../Crl/GameLogic"
import FdAd from "../FanDong/FdAd"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"

export default class SelectUI extends Laya.Scene {
    constructor() {
        super()
    }

    myList: Laya.List

    dataNode: Laya.Image
    selectBg: Laya.Image
    startBtn: Laya.Image
    selectNum: Laya.Label

    atkNum: number = 0
    hpNum: number = 0
    tempAtkNum: number = 0
    tempHpNum: number = 0

    bodyId: number = 0
    handId: number = 0
    backId: number = 0
    type: number = 1

    selectStep: number = 0
    itemCountArr: number[] = []

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        Laya.timer.frameLoop(1, this, this.myUpdate)
        Utility.addClickEvent(this.startBtn, this, this.startBtnCB)
        for (let i = 0; i < PlayerDataMgr.getPlayerData().itemArr.length; i++) {
            this.itemCountArr.push(2)
        }
        this.initList();
        (this.startBtn.getChildAt(0) as Laya.Animation).visible = PlayerDataMgr.getPlayerData().grade == 1;
    }

    onClosed() {
        Laya.timer.clearAll(this)
    }

    updateDataNode() {
        let top: Laya.Image = this.dataNode.getChildByName('top') as Laya.Image
        let btm: Laya.Image = this.dataNode.getChildByName('btm') as Laya.Image
        let atk: Laya.FontClip = this.dataNode.getChildByName('atk') as Laya.FontClip
        let hp: Laya.FontClip = this.dataNode.getChildByName('hp') as Laya.FontClip

        let id = Math.floor(this.atkNum / 200) + 1 > 5 ? 5 : Math.floor(this.atkNum / 200) + 1
        top.skin = 'startUI/pzy_pj_' + id + '.png'
        this.type = id

        if (this.atkNum < this.tempAtkNum) this.atkNum += 5
        if (this.hpNum < this.tempHpNum) this.hpNum += 5
        if (this.atkNum > this.tempAtkNum) this.atkNum = this.tempAtkNum
        if (this.hpNum > this.tempHpNum) this.hpNum = this.tempHpNum
        atk.value = Math.floor(this.atkNum).toString()
        hp.value = Math.floor(this.hpNum).toString()
    }

    addAtkHp() {
        if (this.selectStep == 0) {
            let hpV = Math.random() * 50 + (50 * this.bodyId)
            this.tempHpNum = hpV
        } else if (this.selectStep == 1) {
            let atkV = Math.random() * 50 + (40 * this.handId + 40 * this.backId)
            this.tempAtkNum = atkV
        } else if (this.selectStep == 2) {
            let atkV = Math.random() * 50 + (40 * this.handId + 40 * this.backId)
            this.tempAtkNum = atkV
        }
    }

    updateList() {
        let arr = []
        if (this.selectStep == 0) {
            arr = [].concat(PlayerDataMgr.getPlayerData().skinArr)
        } else {
            arr = [].concat(PlayerDataMgr.getPlayerData().itemArr)
        }
        this.myList.array = arr;
    }

    initList() {
        let arr = []
        arr = [].concat(PlayerDataMgr.getPlayerData().skinArr)
        this.myList.hScrollBarSkin = '';
        this.myList.array = arr;
        this.myList.repeatX = arr.length;
        this.myList.repeatY = 1;
        this.myList.renderHandler = Laya.Handler.create(this, this.onListRender, null, false);
    }
    onListRender(cell, index: number) {
        if (index >= this.myList.array.length) {
            return;
        }
        var item = cell.getChildByName('item') as Laya.Image
        let icon = item.getChildByName('icon') as Laya.Image
        let nameBg = item.getChildByName('nameBg') as Laya.Image
        let name = nameBg.getChildByName('name') as Laya.Label
        let count = item.getChildByName('count') as Laya.FontClip
        let adPic = item.getChildByName('adPic') as Laya.Image
        let guide = item.getChildByName('guide') as Laya.Animation

        if (this.selectStep == 0) {
            icon.skin = 'finishUI/Items/Body_' + (index + 1) + '.png'
            name.text = PlayerDataMgr.getBodyNameById(index)
            count.visible = false
            adPic.visible = PlayerDataMgr.getPlayerData().skinArr[index] == 0
            guide.visible = PlayerDataMgr.getPlayerData().grade == 1 && index == 0
        } else {
            icon.skin = 'finishUI/Items/Hand_' + (index + 1) + '_L.png'
            name.text = PlayerDataMgr.getItemNameById(index)
            count.visible = PlayerDataMgr.getPlayerData().itemArr[index] == 1
            count.value = this.itemCountArr[index].toString()
            adPic.visible = PlayerDataMgr.getPlayerData().itemArr[index] == 0
            if (this.selectStep == 1) {
                guide.visible = PlayerDataMgr.getPlayerData().grade == 1 && index == 0
            } else if (this.selectStep == 2) {
                guide.visible = PlayerDataMgr.getPlayerData().grade == 1 && index == 1
            }
        }

        Utility.addClickEvent(item, this, this.chooseCB, [index])
    }

    chooseCB(arr: any[]) {
        let id: number = arr[0]
        if (this.selectStep == 0) {
            if (PlayerDataMgr.getPlayerData().skinArr[id] == 0) {
                let cb = () => {
                    PlayerDataMgr.getPlayerData().skinArr[id] = 1
                    PlayerDataMgr.setPlayerData()
                    this.updateList()
                }
                FdAd.showVideoAd(cb)
                return
            }
            this.bodyId = id + 1
            this.addAtkHp()
            this.selectStep++
            this.updateList()
            this.myList.scrollTo(0)
            GameLogic.Share.createUIBody(id)
        } else if (this.selectStep == 1) {
            if (PlayerDataMgr.getPlayerData().itemArr[id] == 0) {
                let cb = () => {
                    PlayerDataMgr.getPlayerData().itemArr[id] = 1
                    PlayerDataMgr.setPlayerData()
                    this.updateList()
                }
                FdAd.showVideoAd(cb)
                return
            }
            this.itemCountArr[id] -= 1
            this.handId = id + 1
            this.addAtkHp()
            this.selectStep++
            this.updateList()
            GameLogic.Share.createUIItem(id)
        } else if (this.selectStep == 2) {
            if (PlayerDataMgr.getPlayerData().itemArr[id] == 0) {
                let cb = () => {
                    PlayerDataMgr.getPlayerData().itemArr[id] = 1
                    PlayerDataMgr.setPlayerData()
                    this.updateList()
                }
                FdAd.showVideoAd(cb)
                return
            }
            this.itemCountArr[id] -= 1
            this.backId = id + 1
            this.addAtkHp()
            this.updateList()
            GameLogic.Share.createUIItem(id)
            this.selectStep++
            this.selectBg.visible = false
            //this.startBtn.visible = true

            Laya.timer.once(2500, this, () => {
                let camR = GameLogic.Share._camera.transform.rotationEuler.clone()
                camR.x += 15
                Utility.RotateTo(GameLogic.Share._camera, 500, camR, null)
                Effects.createWindTurn(new Laya.Vector3(0, 2.2, 0))
                SoundMgr.instance.playSoundEffect('wind')
                Laya.timer.once(2800, this, () => {
                    Effects.createSmoke(new Laya.Vector3(0, 0, 0))
                    SoundMgr.instance.playSoundEffect('merge')
                    GameLogic.Share.combineBody(this.bodyId - 1, this.handId - 1, this.backId - 1)

                    camR = GameLogic.Share._camera.transform.rotationEuler.clone()
                    camR.x -= 15
                    //Utility.RotateTo(GameLogic.Share._camera, 500, camR, null)
                })
                Laya.timer.once(5000, this, () => {
                    this.startBtn.visible = true
                })
            })

        }
    }

    startBtnCB() {
        this.close()
        PlayerDataMgr.setChooseItem(this.bodyId - 1, this.handId - 1, this.backId - 1, this.type)
        GameLogic.Share.gameStart()
    }

    myUpdate() {
        this.updateDataNode()
        this.selectNum.text = ': ' + this.selectStep + ' / 3'
    }
}
