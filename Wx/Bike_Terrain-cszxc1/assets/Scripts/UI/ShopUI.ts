
import { _decorator, Component, Node, Label } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import Utility from '../Mod/Utility';
const { ccclass, property } = _decorator;

@ccclass('ShopUI')
export class ShopUI extends Component {

    @property(Node)
    itemNode: Node = null

    hadInit: boolean = false

    onEnable() {
        this.updateItemNode()
    }

    updateItemNode() {
        for (let i = 0; i < this.itemNode.children.length; i++) {
            let item = this.itemNode.children[i]
            let bg = item.getChildByName('bg')
            let icon = item.getChildByName('icon')
            let select = item.getChildByName('select')
            let used = item.getChildByName('used')
            let unlocked = item.getChildByName('unlocked')
            let buyBtn = item.getChildByName('buyBtn')
            let cost = buyBtn.getChildByName('cost')
            let adBtn = item.getChildByName('adBtn')

            select.active = i == PlayerDataMgr.getPlayerData().skinId
            used.active = i == PlayerDataMgr.getPlayerData().skinId
            unlocked.active = i != PlayerDataMgr.getPlayerData().skinId && PlayerDataMgr.getPlayerData().skinArr[i] == 1
            buyBtn.active = PlayerDataMgr.getPlayerData().skinArr[i] == 0
            cost.getComponent(Label).string = PlayerDataMgr.getSkinCost(i).toString()
            adBtn.active = PlayerDataMgr.getPlayerData().skinArr[i] == 0

            if (!this.hadInit) {
                bg.on(Node.EventType.TOUCH_END, () => { this.chooseCB(i) }, this)
                buyBtn.on(Node.EventType.TOUCH_END, () => { this.buyBtnCB(i) }, this)
                adBtn.on(Node.EventType.TOUCH_END, () => { this.adBtnCB(i) }, this)
            }
        }
        this.hadInit = true
    }

    chooseCB(id: number) {
        if (PlayerDataMgr.getPlayerData().skinArr[id] == 0 || PlayerDataMgr.getPlayerData().skinId == id) {
            return
        }
        PlayerDataMgr.getPlayerData().skinId = id
        PlayerDataMgr.setPlayerData()
        GameLogic.Share.playerCrl.changeSkin()
        this.updateItemNode()
    }

    buyBtnCB(id: number) {
        if (PlayerDataMgr.getPlayerData().coin < PlayerDataMgr.getSkinCost(id)) {
            Utility.OpenAlert('金币不足！')
            return
        }
        PlayerDataMgr.changeCoin(-PlayerDataMgr.getSkinCost(id))
        PlayerDataMgr.getPlayerData().skinArr[id] = 1
        PlayerDataMgr.getPlayerData().skinId = id
        PlayerDataMgr.setPlayerData()
        GameLogic.Share.playerCrl.changeSkin()
        this.updateItemNode()
    }

    adBtnCB(id: number) {
        FdAd.showVideoAd(() => {
            PlayerDataMgr.resetFreeSkin()
            PlayerDataMgr.getPlayerData().freeSkinId = id
            PlayerDataMgr.getPlayerData().skinArr[id] = 1
            PlayerDataMgr.getPlayerData().skinId = id
            PlayerDataMgr.setPlayerData()
            GameLogic.Share.playerCrl.changeSkin()
            this.updateItemNode()
        })
    }

    closeBtnCB() {
        GameLogic.Share.hideShopCam()
        UINode.Share.showUI(UIType.UI_START)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}