import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr, { ItemData } from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"
import FdAd from "../FanDong/FdAd"

export default class SelectUI extends Laya.Scene {
    constructor() {
        super()
    }
    gradeNum: Laya.FontClip
    nextBtn: Laya.Image
    adBtn: Laya.Image
    bodyList: Laya.List
    itemList: Laya.List
    dnaNum: Laya.Label
    hpNum: Laya.Label
    powerNum: Laya.Label

    fullBtn: Laya.Button
    finger: Laya.Image

    totalDna: number = 175
    curHp: number = 0
    curPower: number = 0

    selectType: number = 0
    selectIndex: number = 0

    itemCount: number = 0

    hadShowAd: boolean = false

    canStart: boolean = false

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        this.gradeNum.value = PlayerDataMgr.getPlayerData().grade.toString()
        Laya.timer.frameLoop(1, this, this.myUpdate)
        Utility.addClickEvent(this.nextBtn, this, this.nextBtnCB)
        Utility.addClickEvent(this.adBtn, this, this.adBtnCB)
        this.init3DScene()
        this.initBodyList()
        this.initItemList()
        let img = this.nextBtn.getChildAt(0) as Laya.Image
        img.visible = PlayerDataMgr.getPlayerData().grade <= 1
    }

    onClosed() {
        Laya.timer.clearAll(this)
        this.scene3D.destroy()
    }

    updateCurData(hp: number, power: number, dna: number) {
        this.totalDna -= dna
        this.curHp += hp
        this.curPower += power
        this.dnaNum.text = this.totalDna.toString()
        this.hpNum.text = this.curHp.toString()
        this.powerNum.text = this.curPower.toString()
        this.nextBtn.gray = false
        this.canStart = true
        if (this.itemCount >= 3) {
            let img = this.nextBtn.getChildAt(0) as Laya.Image
            img.visible = PlayerDataMgr.getPlayerData().grade <= 1
        }
        if (this.itemCount == 1 && PlayerDataMgr.getPlayerData().grade <= 1) {
            this.itemList.scrollTo(9)
            Laya.Tween.clearAll(this.finger)
            this.guide2()
        } else if (this.itemCount == 2 && PlayerDataMgr.getPlayerData().grade <= 1) {
            Laya.Tween.clearAll(this.finger)
            this.guide3()
        }
    }

    scene3D: Laya.Scene3D = null
    light: Laya.DirectionLight = null
    camera: Laya.Camera = null
    body: Laya.Sprite3D = null
    itemSp: Laya.Sprite3D = null
    init3DScene() {
        this.scene3D = Laya.stage.addChild(new Laya.Scene3D()) as Laya.Scene3D;
        Laya.stage.setChildIndex(this.scene3D, 2)
        this.light = this.scene3D.addChild(new Laya.DirectionLight()) as Laya.DirectionLight;
        this.light.color = new Laya.Vector3(1, 1, 1);
        this.light.transform.rotationEuler = new Laya.Vector3(0, 180, 0)

        this.camera = this.scene3D.addChild(new Laya.Camera(0, 0.1, 1000)) as Laya.Camera;
        this.camera.transform.translate(new Laya.Vector3(0, 0, -15));
        this.camera.transform.rotate(new Laya.Vector3(0, 180, 0), true, false);
        this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
        this.camera.orthographicVerticalSize = 20
        this.camera.orthographic = true

        this.createBody(0)
    }

    choosBodyId: number = 0
    createBody(index: number) {
        if (this.body) this.body.destroy()
        let bodyNode: Laya.Sprite3D = GameLogic.Share._scene.getChildByName('BodyNode') as Laya.Sprite3D
        let bodyRes = bodyNode.getChildAt(index) as Laya.Sprite3D
        this.body = Laya.Sprite3D.instantiate(bodyRes, this.scene3D, false, new Laya.Vector3(0, 0, 0))
        this.body.transform.position = new Laya.Vector3(0, 4, 0)
        this.body.active = true
    }

    createItemSp(type: number, index: number) {
        if (this.itemSp) this.itemSp.destroy()
        let itemNode: Laya.Sprite3D = null
        let itemRes: Laya.Sprite3D = null
        if (type == 0) {
            itemNode = GameLogic.Share._scene.getChildByName('HeadNode') as Laya.Sprite3D
        } else if (type == 1) {
            itemNode = GameLogic.Share._scene.getChildByName('LegNode') as Laya.Sprite3D
        } else if (type == 2) {
            itemNode = GameLogic.Share._scene.getChildByName('TailNode') as Laya.Sprite3D
        } else if (type == 3) {
            itemNode = GameLogic.Share._scene.getChildByName('WingsNode') as Laya.Sprite3D
        }
        itemRes = itemNode.getChildAt(index) as Laya.Sprite3D
        this.itemSp = Laya.Sprite3D.instantiate(itemRes, this.scene3D, false, new Laya.Vector3(0, 0, 0))
        this.itemSp.transform.position = new Laya.Vector3(1, 0, 0)
        this.itemSp.getComponent(Laya.Animator).speed = 0
    }

    initBodyList() {
        let arr = [].concat(PlayerDataMgr.getPlayerData().bodyArr)
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == 0) arr.splice(i, 1)
        }
        this.bodyList.vScrollBarSkin = '';
        this.bodyList.array = arr;
        this.bodyList.repeatX = 2;
        this.bodyList.repeatY = Math.floor(arr.length / 2);
        this.bodyList.renderHandler = Laya.Handler.create(this, this.onBodyListRender, null, false);
    }
    onBodyListRender(cell, index: number) {
        if (index >= this.bodyList.array.length) {
            return;
        }
        var item = cell.getChildByName('item') as Laya.Image
        let selectIcon: Laya.Image = item.getChildByName('selectIcon') as Laya.Image
        let icon: Laya.Image = item.getChildByName('icon') as Laya.Image
        let name: Laya.Label = item.getChildByName('name') as Laya.Label

        selectIcon.skin = index == this.choosBodyId ? 'selectUI/xz_dk_xzst3.png' : 'selectUI/xz_dk_xzst2.png'
        let indexStr: string = index + 1 < 10 ? '0' + (index + 1).toString() : (index + 1).toString()
        icon.skin = 'items/Body_' + indexStr + '.png'
        name.text = PlayerDataMgr.getBodyName(index)

        item.off(Laya.Event.CLICK, this, this.selectBody)
        item.on(Laya.Event.CLICK, this, this.selectBody, [index])
    }
    selectBody(index: number) {
        SoundMgr.instance.playSoundEffect('Click.mp3')
        if (index == this.choosBodyId) {
            return
        }
        this.choosBodyId = index
        this.createBody(index)
        this.initBodyList()
    }

    nextBtnCB() {
        if (this.bodyList.visible) {
            this.bodyList.visible = false
            this.itemList.visible = true
            this.nextBtn.skin = 'selectUI/xz_btn_kszd.png'
            this.nextBtn.gray = true
            let img = this.nextBtn.getChildAt(0) as Laya.Image
            img.visible = false
            if (PlayerDataMgr.getPlayerData().grade <= 1) {
                this.guide1()
            }
        }

        if (this.canStart) {
            GameLogic.Share.gameStart(this.body, this.curHp, this.curPower)
        }
    }

    choosItemId: number = 0
    itemNode: Laya.Sprite3D = null
    createItem(index: number) {
        if (this.itemNode) this.itemNode.destroy()
        let item: Laya.Sprite3D = GameLogic.Share._scene.getChildByName('BodyNode') as Laya.Sprite3D
        let itemRes = item.getChildAt(index) as Laya.Sprite3D
        this.itemNode = Laya.Sprite3D.instantiate(itemRes, this.scene3D, false, new Laya.Vector3(0, 0, 0))
        this.itemNode.transform.position = new Laya.Vector3(0, 4, 0)
        this.itemNode.active = true
    }
    updateItemList() {
        let arr = [].concat(PlayerDataMgr.getPlayerData().headArr)
        arr = arr.concat(PlayerDataMgr.getPlayerData().legArr)
        arr = arr.concat(PlayerDataMgr.getPlayerData().tailArr)
        arr = arr.concat(PlayerDataMgr.getPlayerData().wingsArr)
        this.itemList.array = arr;
    }
    initItemList() {
        let arr = [].concat(PlayerDataMgr.getPlayerData().headArr)
        arr = arr.concat(PlayerDataMgr.getPlayerData().legArr)
        arr = arr.concat(PlayerDataMgr.getPlayerData().tailArr)
        arr = arr.concat(PlayerDataMgr.getPlayerData().wingsArr)
        this.itemList.vScrollBarSkin = '';
        this.itemList.array = arr;
        this.itemList.repeatX = 3;
        this.itemList.repeatY = Math.floor(arr.length / 3);
        this.itemList.renderHandler = Laya.Handler.create(this, this.onItemListRender, null, false);
    }
    onItemListRender(cell, index: number) {
        if (index >= this.itemList.array.length) {
            return;
        }
        let type: number = 0
        var item = cell.getChildByName('item') as Laya.Image
        let icon: Laya.Image = item.getChildByName('icon') as Laya.Image
        let name: Laya.Label = item.getChildByName('name') as Laya.Label
        let hpBar: Laya.ProgressBar = item.getChildByName('hpBar') as Laya.ProgressBar
        let hpNum: Laya.FontClip = item.getChildByName('hpNum') as Laya.FontClip
        let powerBar: Laya.ProgressBar = item.getChildByName('powerBar') as Laya.ProgressBar
        let powerNum: Laya.FontClip = item.getChildByName('powerNum') as Laya.FontClip
        let bottomBg: Laya.Image = item.getChildByName('bottomBg') as Laya.Image
        let dnaNum: Laya.FontClip = bottomBg.getChildByName('dnaNum') as Laya.FontClip
        let adBg: Laya.Image = item.getChildByName('adBg') as Laya.Image

        let str: string = ''
        let tempIndex: number = 0
        if (index < 10) {
            type = 0
            tempIndex = index
            let indexStr: string = tempIndex + 1 < 10 ? '0' + (tempIndex + 1).toString() : (tempIndex + 1).toString()
            str = 'items/Head_' + indexStr + '.png'
            name.text = PlayerDataMgr.getHeadName(tempIndex)
            hpBar.value = PlayerDataMgr.getItemData().head[tempIndex][0] / 20
            hpNum.value = PlayerDataMgr.getItemData().head[tempIndex][0]
            powerBar.value = PlayerDataMgr.getItemData().head[tempIndex][1] / 10
            powerNum.value = PlayerDataMgr.getItemData().head[tempIndex][1]
            dnaNum.value = PlayerDataMgr.getItemData().head[tempIndex][2]
            adBg.visible = PlayerDataMgr.getPlayerData().headArr[tempIndex] == 0
            bottomBg.skin = this.totalDna >= PlayerDataMgr.getItemData().head[tempIndex][2] ? 'selectUI/xz_dk_xzbj3.png' : 'selectUI/xz_dk_xzbj2.png'
        } else if (index < 20) {
            type = 1
            tempIndex = index - 10
            let indexStr: string = tempIndex + 1 < 10 ? '0' + (tempIndex + 1).toString() : (tempIndex + 1).toString()
            str = 'items/Leg_' + indexStr + '.png'
            name.text = PlayerDataMgr.getLegName(tempIndex)
            hpBar.value = PlayerDataMgr.getItemData().leg[tempIndex][0] / 20
            hpNum.value = PlayerDataMgr.getItemData().leg[tempIndex][0]
            powerBar.value = PlayerDataMgr.getItemData().leg[tempIndex][1] / 10
            powerNum.value = PlayerDataMgr.getItemData().leg[tempIndex][1]
            dnaNum.value = PlayerDataMgr.getItemData().leg[tempIndex][2]
            adBg.visible = PlayerDataMgr.getPlayerData().legArr[tempIndex] == 0
            bottomBg.skin = this.totalDna >= PlayerDataMgr.getItemData().leg[tempIndex][2] ? 'selectUI/xz_dk_xzbj3.png' : 'selectUI/xz_dk_xzbj2.png'
        } else if (index < 24) {
            type = 2
            tempIndex = index - 20
            let indexStr: string = tempIndex + 1 < 10 ? '0' + (tempIndex + 1).toString() : (tempIndex + 1).toString()
            str = 'items/Tail_' + indexStr + '.png'
            name.text = PlayerDataMgr.getTailName(tempIndex)
            hpBar.value = PlayerDataMgr.getItemData().tail[tempIndex][0] / 20
            hpNum.value = PlayerDataMgr.getItemData().tail[tempIndex][0]
            powerBar.value = PlayerDataMgr.getItemData().tail[tempIndex][1] / 10
            powerNum.value = PlayerDataMgr.getItemData().tail[tempIndex][1]
            dnaNum.value = PlayerDataMgr.getItemData().tail[tempIndex][2]
            adBg.visible = PlayerDataMgr.getPlayerData().tailArr[tempIndex] == 0
            bottomBg.skin = this.totalDna >= PlayerDataMgr.getItemData().tail[tempIndex][2] ? 'selectUI/xz_dk_xzbj3.png' : 'selectUI/xz_dk_xzbj2.png'
        } else if (index < 26) {
            type = 3
            tempIndex = index - 24
            let indexStr: string = tempIndex + 1 < 10 ? '0' + (tempIndex + 1).toString() : (tempIndex + 1).toString()
            str = 'items/Wings_' + indexStr + '.png'
            name.text = PlayerDataMgr.getWingsName(tempIndex)
            hpBar.value = PlayerDataMgr.getItemData().wings[tempIndex][0] / 20
            hpNum.value = PlayerDataMgr.getItemData().wings[tempIndex][0]
            powerBar.value = PlayerDataMgr.getItemData().wings[tempIndex][1] / 10
            powerNum.value = PlayerDataMgr.getItemData().wings[tempIndex][1]
            dnaNum.value = PlayerDataMgr.getItemData().wings[tempIndex][2]
            adBg.visible = PlayerDataMgr.getPlayerData().wingsArr[tempIndex] == 0
            bottomBg.skin = this.totalDna >= PlayerDataMgr.getItemData().wings[tempIndex][2] ? 'selectUI/xz_dk_xzbj3.png' : 'selectUI/xz_dk_xzbj2.png'
        }
        icon.skin = str

        icon.off(Laya.Event.MOUSE_DOWN, this, this.selecItemDown)
        icon.off(Laya.Event.CLICK, this, this.selectItemUp)
        icon.on(Laya.Event.MOUSE_DOWN, this, this.selecItemDown, [type, tempIndex])
        icon.on(Laya.Event.CLICK, this, this.selectItemUp, [type, tempIndex])
    }
    selecItemDown(type: number, index: number) {
        SoundMgr.instance.playSoundEffect('Click.mp3')
        this.selectType = type
        this.selectIndex = index

        if (this.totalDna < this.getItemDataFromTypeIndex()[2]) {
            //dna不足
            return
        }
        if (PlayerDataMgr.getDataByType(type)[index] == 0) {
            return
        }
        this.itemList.scrollBar.touchScrollEnable = false
        this.createItemSp(type, index)
        this.on(Laya.Event.MOUSE_MOVE, this, this.fullBtnMove)
        this.on(Laya.Event.MOUSE_UP, this, this.fullBtnEnd)

        Laya.Tween.clearAll(this.finger)
        this.finger.visible = false
    }
    selectItemUp(type: number, index: number){
        console.log('click')
        if (PlayerDataMgr.getDataByType(type)[index] == 0) {
            let cb = () => {
                PlayerDataMgr.getDataByType(type)[index] = 1
                PlayerDataMgr.setPlayerData()
                this.updateItemList()
            }
            FdAd.showVideo(cb)
            return
        }
    }

    fullBtnMove() {
        if (this.itemList.scrollBar.touchScrollEnable || !this.itemSp) {
            return
        }
        this.itemSp.active = true
        let pos: Laya.Vector3 = new Laya.Vector3(Laya.stage.mouseX, Laya.stage.mouseY - 150, 0)
        this.camera.convertScreenCoordToOrthographicCoord(pos, pos)
        pos.z = 0
        this.itemSp.transform.position = pos
        let itemNode = this.checkFixItemNode()
        if (itemNode) {
            this.itemSp.transform.rotationEuler = itemNode.transform.rotationEuler.clone()
        }
    }
    fullBtnEnd() {
        this.itemList.scrollBar.touchScrollEnable = true
        this.off(Laya.Event.MOUSE_MOVE, this, this.fullBtnMove)
        this.off(Laya.Event.MOUSE_UP, this, this.fullBtnEnd)
        let itemNode = this.checkFixItemNode()
        if (itemNode) {
            this.addItemToBody(itemNode)
        } else {
            this.itemSp.destroy()
        }
    }

    checkFixItemNode() {
        for (let i = 0; i < this.body.numChildren; i++) {
            let itemNode: Laya.Sprite3D = this.body.getChildAt(i) as Laya.Sprite3D
            let itemNodePos: Laya.Vector3 = itemNode.transform.position.clone()
            let itemPos: Laya.Vector3 = this.itemSp.transform.position.clone()
            if (Laya.Vector3.distance(itemNodePos, itemPos) <= 1) {
                return itemNode
            }
        }
        return null
    }

    addItemToBody(itemNode: Laya.Sprite3D) {
        this.itemCount++
        SoundMgr.instance.playSoundEffect('Get.mp3')
        WxApi.DoVibrate()
        let item = Laya.Sprite3D.instantiate(this.itemSp, itemNode, false)
        item.transform.localPosition = new Laya.Vector3()
        item.transform.localRotationEuler = new Laya.Vector3()
        item.getComponent(Laya.Animator).speed = 1
        this.itemSp.destroy()

        this.updateCurData(this.getItemDataFromTypeIndex()[0], this.getItemDataFromTypeIndex()[1], this.getItemDataFromTypeIndex()[2])
        this.updateItemList()
    }

    getItemDataFromTypeIndex(): any[] {
        let data: any[] = []
        if (this.selectType == 0) {
            data = PlayerDataMgr.getItemData().head[this.selectIndex]
        } else if (this.selectType == 1) {
            data = PlayerDataMgr.getItemData().leg[this.selectIndex]
        } else if (this.selectType == 2) {
            data = PlayerDataMgr.getItemData().tail[this.selectIndex]
        } else if (this.selectType == 3) {
            data = PlayerDataMgr.getItemData().wings[this.selectIndex]
        }
        return data
    }

    adBtnCB() {
        let cb = () => {
            this.totalDna += 150
            this.dnaNum.text = this.totalDna.toString()
            this.adBtn.visible = false
            this.updateItemList()
        }
        FdAd.showVideo(cb)
    }

    guide1() {
        this.finger.visible = true
        this.finger.pos(183, this.height - 472)
        this.finger.scale(2, 2)
        Laya.Tween.to(this.finger, { scaleX: 1, scaleY: 1 }, 300, null, new Laya.Handler(this, () => {
            Laya.Tween.to(this.finger, { x: 530, y: 300 }, 1000, null, new Laya.Handler(this, () => {
                this.guide1()
            }));
        }));
    }
    guide2() {
        this.finger.visible = true
        this.finger.pos(this.width / 2, this.height - 472)
        this.finger.scale(2, 2)
        Laya.Tween.to(this.finger, { scaleX: 1, scaleY: 1 }, 300, null, new Laya.Handler(this, () => {
            Laya.Tween.to(this.finger, { x: 255, y: 500 }, 1000, null, new Laya.Handler(this, () => {
                this.guide2()
            }));
        }));
    }
    guide3() {
        this.finger.visible = true
        this.finger.pos(this.width / 2, this.height - 472)
        this.finger.scale(2, 2)
        Laya.Tween.to(this.finger, { scaleX: 1, scaleY: 1 }, 300, null, new Laya.Handler(this, () => {
            Laya.Tween.to(this.finger, { x: 475, y: 500 }, 1000, null, new Laya.Handler(this, () => {
                this.guide3()
            }));
        }));
    }

    myUpdate() {

    }
}
