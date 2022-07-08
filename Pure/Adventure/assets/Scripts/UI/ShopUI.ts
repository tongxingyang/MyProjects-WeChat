import { _decorator, Component, Node, dragonBones, instantiate, Label, Sprite, v3, v2 } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr, { PlayerData } from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
const { ccclass, property } = _decorator;

@ccclass('ShopUI')
export class ShopUI extends Component {
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
            let bg = item.getChildByName('bg')
            let id = item.getChildByName('id')
            let hero = item.getChildByName('hero')
            let using = item.getChildByName('using')
            let buyBtn = item.getChildByName('buyBtn')
            let cost = buyBtn.getChildByName('cost').getComponent(Label)
            let adBtn = item.getChildByName('adBtn')

            id.getComponent(Label).string = '0' + (i + 1)
            using.active = i == data.skinId
            buyBtn.active = data.skinArr[i] == 0 && data.coin >= PlayerDataMgr.getCostById(i)
            adBtn.active = data.skinArr[i] == 0 && data.coin < PlayerDataMgr.getCostById(i)
            cost.string = PlayerDataMgr.getCostById(i).toString()

            if (!this.hadInit) {
                this.initAsset(hero, i)
                bg.on(Node.EventType.TOUCH_END, () => { this.clickIitem(i) }, this)
                buyBtn.on(Node.EventType.TOUCH_END, () => { this.buyBtnCB(i) }, this)
                adBtn.on(Node.EventType.TOUCH_END, () => { this.adBtnCB(i) }, this)
            }
            if (i == this.chooseId) item.setScale(v3(1.2, 1.2, 1))
            else item.setScale(v3(1, 1, 1))
        }
        this.hadInit = true
    }
    initAsset(node: Node, id: number) {
        node.getComponent(dragonBones.ArmatureDisplay).dragonAsset = GameLogic.Share.playerDBA[id]
        node.getComponent(dragonBones.ArmatureDisplay).dragonAtlasAsset = GameLogic.Share.playerDBAA[id]
        node.getComponent(dragonBones.ArmatureDisplay).armatureName = 'Armature'
        node.getComponent(dragonBones.ArmatureDisplay).playAnimation('idle')
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
        cb()
    }

    closeBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_START)
    }

    update(deltaTime: number) {

    }
}

