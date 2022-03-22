import GameLogic from "../Crl/GameLogic"
import MoveComponent from "../Crl/MoveComponent"
import Player, { AniState } from "../Crl/Player"
import FdAd from "../FanDong/FdAd"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import Utility from "../Mod/Utility"

export default class SkinUI extends Laya.Scene {
    constructor() {
        super()
    }

    closeBtn: Laya.Image
    btn1: Laya.Image
    btn2: Laya.Image
    btn3: Laya.Image
    randUnlockBtn: Laya.Image
    adBtn: Laya.Image
    maxPic: Laya.Image

    myList: Laya.List

    curPage: number = -1

    onOpened() {
        Laya.timer.frameLoop(1, this, this.updateCB)

        Utility.addClickEvent(this.closeBtn, this, this.closeBtnCB)
        this.btn1.on(Laya.Event.CLICK, this, this.pageBtnCB, [0])
        this.btn2.on(Laya.Event.CLICK, this, this.pageBtnCB, [1])
        this.btn3.on(Laya.Event.CLICK, this, this.pageBtnCB, [2])
        Utility.addClickEvent(this.randUnlockBtn, this, this.randUnlockBtnCB)
        Utility.addClickEvent(this.adBtn, this, this.adBtnCB)

        this.init3DScene()

        this.initList()
        this.pageBtnCB(0)
    }

    onClosed() {
        Laya.timer.clearAll(this);
        this.scene3D.destroy();
        (GameLogic.Share._player.getComponent(MoveComponent) as MoveComponent).stageOff();
        GameLogic.Share._player.destroy();
        GameLogic.Share.createPlayer()
        GameLogic.Share._scene.active = true
        GameLogic.Share._camera.active = true
    }

    scene3D: Laya.Scene3D = null
    light = null
    camera: Laya.Camera = null
    _player: Laya.Sprite3D = null
    _playerCrl: Player = null
    _playerMan: Laya.Sprite3D = null
    _playerManCrl: Player = null
    init3DScene() {
        this.scene3D = Laya.stage.addChild(new Laya.Scene3D()) as Laya.Scene3D;
        this.scene3D.zOrder = 100
        this.light = this.scene3D.addChild(new Laya.DirectionLight()) as Laya.DirectionLight;
        this.light.color = new Laya.Vector3(1, 0.956, 0.839);
        //this.light.transform.rotate(new Laya.Vector3(0, 180, 0), true, false);

        this.camera = this.scene3D.addChild(new Laya.Camera(0, 0.1, 1000)) as Laya.Camera;
        this.camera.transform.translate(new Laya.Vector3(0, 1.5, 5));
        this.camera.transform.rotate(new Laya.Vector3(-20, 0, 0), true, false);
        this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
        this.camera.fieldOfView = 60
        //this.fixCameraField()

        this.createPlayer(PlayerDataMgr.getPlayerData().skinId)
        this.createPlayerMan(PlayerDataMgr.getPlayerData().skinId)
        this.activePlayer(PlayerDataMgr.getPlayerData().skinId)
    }

    createPlayer(id: number) {
        let isMan = id == 4 || id == 8 || id == 11 || id == 13 || id == 14
        let name = 'Wuman_01.lh'
        this._player = Utility.getSprite3DResByUrl(name, this.scene3D)
        this._playerCrl = this._player.addComponent(Player)
        this._playerCrl.playAnimation(AniState.ANI_WALK)
        this._player.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1))
    }
    createPlayerMan(id: number) {
        let name = 'Man_01.lh'
        this._playerMan = Utility.getSprite3DResByUrl(name, this.scene3D)
        this._playerManCrl = this._playerMan.addComponent(Player)
        this._playerManCrl.playAnimation(AniState.ANI_WALK)
        this._playerMan.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1))
    }

    activePlayer(id) {
        let isMan = id == 4 || id == 8 || id == 11 || id == 13 || id == 14
        this._playerMan.active = isMan
        this._player.active = !isMan
    }

    fixCameraField() {
        let staticDT: number = 1624 - 1334
        let curDT: number = Laya.stage.displayHeight - 1334 < 0 ? 0 : Laya.stage.displayHeight - 1334
        let per = curDT / staticDT * 5
        this.camera.fieldOfView += per
    }

    pageBtnCB(id: number) {
        if (this.curPage == id) return
        this.curPage = id
        this.btn1.scale(1, 1)
        this.btn2.scale(1, 1)
        this.btn3.scale(1, 1)
        switch (id) {
            case 0:
                this.btn1.scale(1.2, 1.2)
                break
            case 1:
                this.btn2.scale(1.2, 1.2)
                break
            case 2:
                this.btn3.scale(1.2, 1.2)
                break
        }

        this.refreshListData()
    }

    initList() {
        this.myList.vScrollBarSkin = '';
        if (this.curPage == 0) {
            this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
        } else if (this.curPage == 1) {
            this.myList.array = PlayerDataMgr.getPlayerData().shoesArr;
        } else if (this.curPage == 2) {
            this.myList.array = PlayerDataMgr.getPlayerData().hatArr;
        }
        this.myList.repeatX = 4;
        this.myList.renderHandler = Laya.Handler.create(this, this.onListRender, null, false);
    }

    refreshListData() {
        if (this.curPage == 0) {
            this.myList.array = PlayerDataMgr.getPlayerData().skinArr;
            this.maxPic.visible = PlayerDataMgr.getUnlockSkinId(true) == -1
            this.randUnlockBtn.visible = PlayerDataMgr.getUnlockSkinId(true) != -1
        } else if (this.curPage == 1) {
            this.myList.array = PlayerDataMgr.getPlayerData().shoesArr;
            this.maxPic.visible = PlayerDataMgr.getUnlockShoesId(true) == -1
            this.randUnlockBtn.visible = PlayerDataMgr.getUnlockShoesId(true) != -1
        } else if (this.curPage == 2) {
            this.myList.array = PlayerDataMgr.getPlayerData().hatArr;
            this.maxPic.visible = PlayerDataMgr.getUnlockHatId(true) == -1
            this.randUnlockBtn.visible = PlayerDataMgr.getUnlockHatId(true) != -1
        }
    }

    onListRender(cell, index) {
        if (index >= this.myList.array.length) {
            return;
        }
        var item = cell.getChildByName('item') as Laya.Image
        let icon = item.getChildByName('icon') as Laya.Image
        let bg = item.getChildByName('bg') as Laya.Image
        let num = bg.getChildByName('num') as Laya.FontClip
        let star = item.getChildByName('star') as Laya.Image

        star.visible = index >= 10
        if (this.curPage == 0) {
            bg.visible = index >= 10 && PlayerDataMgr.getPlayerData().videoArr[index - 10] < 3
            if (bg.visible) num.value = PlayerDataMgr.getPlayerData().videoArr[index - 10].toString()
            item.skin = index == PlayerDataMgr.getPlayerData().skinId ? 'skinUI/sd_dk_02.png' : 'skinUI/sd_dk_01.png'
            icon.skin = PlayerDataMgr.getPlayerData().skinArr[index] == 1 ? 'skinUI/role/Hero' + (index + 1) + '.png' : 'skinUI/sd_wh_01.png'
        } else if (this.curPage == 1) {
            bg.visible = index >= 10 && PlayerDataMgr.getPlayerData().videoArr[index - 5] < 3
            if (bg.visible) num.value = PlayerDataMgr.getPlayerData().videoArr[index - 5].toString()
            item.skin = index == PlayerDataMgr.getPlayerData().shoesId ? 'skinUI/sd_dk_02.png' : 'skinUI/sd_dk_01.png'
            icon.skin = PlayerDataMgr.getPlayerData().shoesArr[index] == 1 ? 'skinUI/shoes/Shoes' + (index + 1) + '.png' : 'skinUI/sd_wh_01.png'
        } else if (this.curPage == 2) {
            bg.visible = index >= 10 && PlayerDataMgr.getPlayerData().videoArr[index] < 3
            if (bg.visible) num.value = PlayerDataMgr.getPlayerData().videoArr[index].toString()
            item.skin = index == PlayerDataMgr.getPlayerData().hatId ? 'skinUI/sd_dk_02.png' : 'skinUI/sd_dk_01.png'
            icon.skin = PlayerDataMgr.getPlayerData().hatArr[index] == 1 ? 'skinUI/hat/Acc' + (index + 1) + '.png' : 'skinUI/sd_wh_01.png'
        }

        item.off(Laya.Event.CLICK, this, this.selectSkin)
        item.on(Laya.Event.CLICK, this, this.selectSkin, [index])
    }

    selectSkin(index: number) {
        if (this.curPage == 0) {
            if (index < 10 && PlayerDataMgr.getPlayerData().skinArr[index] == 0) return
            if (index >= 10 && PlayerDataMgr.getPlayerData().skinArr[index] == 0) {
                let cb = () => {
                    PlayerDataMgr.getPlayerData().videoArr[index - 10]++
                    if (PlayerDataMgr.getPlayerData().videoArr[index - 10] >= 3) PlayerDataMgr.getPlayerData().skinArr[index] = 1
                    PlayerDataMgr.setPlayerData()
                }
                FdAd.showVideoAd(cb)
            } else {
                PlayerDataMgr.getPlayerData().skinId = index
                PlayerDataMgr.setPlayerData()
                this.activePlayer(index)
                let isMan = index == 4 || index == 8 || index == 11 || index == 13 || index == 14
                if (isMan) {
                    this._playerManCrl.changeSkin(index)
                    this._playerManCrl.playAnimation(AniState.ANI_WALK)
                } else {
                    this._playerCrl.changeSkin(index)
                    this._playerCrl.playAnimation(AniState.ANI_WALK)
                }
            }
        } else if (this.curPage == 1) {
            if (index < 10 && PlayerDataMgr.getPlayerData().shoesArr[index] == 0) return
            if (index >= 10 && PlayerDataMgr.getPlayerData().shoesArr[index] == 0) {
                let cb = () => {
                    PlayerDataMgr.getPlayerData().videoArr[index - 5]++
                    if (PlayerDataMgr.getPlayerData().videoArr[index - 5] >= 3) PlayerDataMgr.getPlayerData().shoesArr[index] = 1
                    PlayerDataMgr.setPlayerData()
                }
                FdAd.showVideoAd(cb)
            } else {
                PlayerDataMgr.getPlayerData().shoesId = index
                PlayerDataMgr.setPlayerData()
                if (this._playerMan.active) {
                    this._playerManCrl.initShoes(index)
                    this._playerManCrl.playAnimation(AniState.ANI_WALK)
                } else {
                    this._playerCrl.initShoes(index)
                    this._playerCrl.playAnimation(AniState.ANI_WALK)
                }
            }
        } else if (this.curPage == 2) {
            if (index < 10 && PlayerDataMgr.getPlayerData().hatArr[index] == 0) return
            if (index >= 10 && PlayerDataMgr.getPlayerData().hatArr[index] == 0) {
                let cb = () => {
                    PlayerDataMgr.getPlayerData().videoArr[index]++
                    if (PlayerDataMgr.getPlayerData().videoArr[index] >= 3) PlayerDataMgr.getPlayerData().hatArr[index] = 1
                    PlayerDataMgr.setPlayerData()
                    this.refreshListData()
                }
                FdAd.showVideoAd(cb)
            } else {
                PlayerDataMgr.getPlayerData().hatId = index
                PlayerDataMgr.setPlayerData()
                if (this._playerMan.active) {
                    this._playerManCrl.activeAcc(index)
                    this._playerManCrl.playAnimation(AniState.ANI_WALK)
                } else {
                    this._playerCrl.activeAcc(index)
                    this._playerCrl.playAnimation(AniState.ANI_WALK)
                }
            }
        }
        this.refreshListData()
    }

    randUnlockBtnCB() {
        if (PlayerDataMgr.getPlayerData().coin < 600) {
            WxApi.OpenAlert('钻石不足！')
            return
        }
        if (this.curPage == 0) {
            let id = PlayerDataMgr.getUnlockSkinId(true)
            PlayerDataMgr.getPlayerData().skinArr[id] = 1
        } else if (this.curPage == 1) {
            let id = PlayerDataMgr.getUnlockShoesId(true)
            PlayerDataMgr.getPlayerData().shoesArr[id] = 1
        } else if (this.curPage == 2) {
            let id = PlayerDataMgr.getUnlockHatId(true)
            PlayerDataMgr.getPlayerData().hatArr[id] = 1
        }
        PlayerDataMgr.changeCoin(-600)
        this.refreshListData()
    }
    adBtnCB() {
        let cb = () => {
            PlayerDataMgr.changeCoin(600)
        }
        FdAd.showVideoAd(cb)
    }

    closeBtnCB() {
        Laya.Scene.open('MyScenes/StartUI.scene')
    }


    updateCB() {
        //this.coinNum.value = PlayerDataMgr.getPlayerData().coin.toString()
    }
}