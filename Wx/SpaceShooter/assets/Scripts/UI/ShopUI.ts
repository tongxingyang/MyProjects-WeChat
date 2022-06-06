import { _decorator, Component, Node, instantiate, Sprite, v2, v3, Label, dragonBones, resources } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import { GameLogic } from '../Crl/GameLogic';
import { Plane } from '../Crl/Plane';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr, { PlayerData } from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
const { ccclass, property } = _decorator;

@ccclass('ShopUI')
export class ShopUI extends Component {

    @property(Node)
    iconNode: Node = null

    @property(Node)
    itemPrefab: Node = null

    @property(Node)
    content: Node = null

    hadInit: boolean = false
    chooseId: number = 0

    start() {
        this.chooseId = PlayerDataMgr.getPlayerData().skinId
        this.createItems()
    }

    onEnable() {

    }

    createItems() {
        for (let i = 0; i < PlayerDataMgr.getPlayerData().skinArr.length; i++) {
            let item = instantiate(this.itemPrefab)
            item.position = v3(0, 0)
            item.active = true
            this.content.addChild(item)
        }
        this.updateItems()
    }

    updateItems() {
        let data: PlayerData = PlayerDataMgr.getPlayerData()
        for (let i = 0; i < this.content.children.length; i++) {
            let item = this.content.children[i]
            let dk1 = item.getChildByName('dk1')
            let dk2 = item.getChildByName('dk2')
            let icon = item.getChildByName('icon')
            let using = item.getChildByName('using')
            let unlocked = item.getChildByName('unlocked')
            let buyBtn = item.getChildByName('buyBtn')
            let cost = buyBtn.getChildByName('cost').getComponent(Label)
            let adBtn = item.getChildByName('adBtn')

            dk2.active = this.chooseId == i
            Utility.loadSpriteFrame('Texture/plane/plane_' + (i + 1) + '_1', icon.getComponent(Sprite))
            using.active = i == data.skinId
            unlocked.active = data.skinArr[i] == 1 && i != data.skinId
            buyBtn.active = data.skinArr[i] == 0 && data.coin >= PlayerDataMgr.getCostById(i)
            adBtn.active = data.skinArr[i] == 0 && data.coin < PlayerDataMgr.getCostById(i)
            cost.string = PlayerDataMgr.getCostById(i).toString()

            if (!this.hadInit) {
                icon.on(Node.EventType.TOUCH_START, () => { this.clickIitem(i) }, this)
                buyBtn.on(Node.EventType.TOUCH_END, () => { this.buyBtnCB(i) }, this)
                adBtn.on(Node.EventType.TOUCH_END, () => { this.adBtnCB(i) }, this)
            }
        }
        this.initAsset(this.chooseId)
        this.hadInit = true
    }
    initAsset(type: number) {
        // resources.load('DB/Plane/s' + (type + 1) + '_1ani_ske', dragonBones.DragonBonesAsset, (err, res) => {
        //     this.iconNode.getComponent(dragonBones.ArmatureDisplay).dragonAsset = res
        //     resources.load('DB/Plane/s' + (type + 1) + '_1ani_tex', dragonBones.DragonBonesAtlasAsset, (err, res) => {
        //         this.iconNode.getComponent(dragonBones.ArmatureDisplay).dragonAtlasAsset = res
        //         this.iconNode.getComponent(dragonBones.ArmatureDisplay).armatureName = 'Armature'
        //     })
        // })

        let id = type * 3
        this.iconNode.getComponent(dragonBones.ArmatureDisplay).dragonAsset = GameLogic.Share.planeDBAsset[id]
        this.iconNode.getComponent(dragonBones.ArmatureDisplay).dragonAtlasAsset = GameLogic.Share.planeDBAtlasAsset[id]
        this.iconNode.getComponent(dragonBones.ArmatureDisplay).armatureName = 'Armature'
    }

    clickIitem(id: number) {
        SoundMgr.Share.PlaySound('click')
        if (this.chooseId == id) return
        if (PlayerDataMgr.getPlayerData().skinArr[id] == 1) {
            PlayerDataMgr.getPlayerData().skinId = id
            PlayerDataMgr.setPlayerData()
        }
        this.chooseId = id
        this.updateItems()
    }

    buyBtnCB(id: number) {
        SoundMgr.Share.PlaySound('click')
        let cost = PlayerDataMgr.getCostById(id)
        if (cost > PlayerDataMgr.getPlayerData().coin) return
        PlayerDataMgr.getPlayerData().coin -= cost
        PlayerDataMgr.getPlayerData().skinArr[id] = 1
        PlayerDataMgr.getPlayerData().skinId = id
        PlayerDataMgr.setPlayerData()
        this.chooseId = id
        this.updateItems()
    }

    adBtnCB(id: number) {
        SoundMgr.Share.PlaySound('click')
        let cb = () => {
            PlayerDataMgr.getPlayerData().skinArr[id] = 1
            PlayerDataMgr.getPlayerData().skinId = id
            PlayerDataMgr.setPlayerData()
            this.chooseId = id
            this.updateItems()
        }
        FdAd.showVideoAd(cb)
    }

    closeBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_START)
        Plane.Share._type = PlayerDataMgr.getPlayerData().skinId + 1
        Plane.Share.initAsset((PlayerDataMgr.getPlayerData().skinId + 1), Plane.Share._lv)
    }

    update(deltaTime: number) {

    }
}

