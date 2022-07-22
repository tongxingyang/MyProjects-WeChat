import { _decorator, Component, Node, instantiate, v3, Sprite, Label, Button } from 'cc';
import GameData from '../Crl/GameData';
import { Player } from '../Crl/Player';
import { UINode } from '../Crl/UINode';
import BundleMgr from '../Mod/BundleMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('WeaponUI')
export class WeaponUI extends Component {

    @property(Node)
    player: Node = null
    @property(Node)
    content: Node = null
    @property(Node)
    itemPrefab: Node = null
    @property(Node)
    playerWeapon: Node = null

    hadInit: boolean = false

    onEnable() {
        this.updateScroll()
    }

    updateScroll() {
        for (let i = 0; i < 40; i++) {
            let item = null
            if (!this.hadInit) {
                item = instantiate(this.itemPrefab)
                item.position = v3()
                item.active = true
                this.content.addChild(item)
            } else {
                item = this.content.children[i]
            }

            let weapon: Sprite = item.getChildByName('weapon').getComponent(Sprite)
            let lock = item.getChildByName('lock')
            let atk = item.getChildByName('str').getChildByName('atk').getComponent(Label)
            let buyBtn = item.getChildByName('buyBtn')
            let cost = buyBtn.getChildByName('cost').getComponent(Label)
            let unlocked = item.getChildByName('unlocked')
            let chooseBtn = item.getChildByName('chooseBtn')

            BundleMgr.setSpriteFrameInBundle(GameData.getWeaponDir(i), weapon)
            lock.active = PlayerDataMgr.getPlayerData().weaponArr[i] == 0
            atk.string = GameData.weaponData[i].atk.toString()
            buyBtn.active = PlayerDataMgr.getPlayerData().weaponArr[i] == 0
            cost.string = ':' + GameData.weaponCost[i].toString()
            unlocked.active = PlayerDataMgr.getPlayerData().weaponArr[i] == 1 && PlayerDataMgr.getPlayerData().weaponId == i
            chooseBtn.active = PlayerDataMgr.getPlayerData().weaponArr[i] == 1 && PlayerDataMgr.getPlayerData().weaponId != i

            if (!this.hadInit) {
                buyBtn.on(Node.EventType.TOUCH_END, () => { this.buyBtnCB(i) }, this)
                chooseBtn.on(Node.EventType.TOUCH_END, () => { this.chooseBtnCB(i) }, this)
            }
        }
        this.hadInit = true
        this.resetPlayerWeapon()
    }

    resetPlayerWeapon() {
        BundleMgr.setSpriteFrameInBundle(GameData.getWeaponDir(PlayerDataMgr.getPlayerData().weaponId, PlayerDataMgr.getWeaponEnchantType()), this.playerWeapon.getComponent(Sprite))
    }

    buyBtnCB(id: number) {
        if (GameData.weaponCost[id] > PlayerDataMgr.getPlayerData().material) {
            return
        }
        PlayerDataMgr.getPlayerData().material -= GameData.weaponCost[id]
        PlayerDataMgr.getPlayerData().weaponArr[id] = 1
        PlayerDataMgr.getPlayerData().weaponId = id
        PlayerDataMgr.setPlayerData()
        Player.Share.changeWeapon()
        this.updateScroll()
    }

    chooseBtnCB(id: number) {
        if (id == PlayerDataMgr.getPlayerData().weaponId) {
            return
        }
        PlayerDataMgr.getPlayerData().weaponId = id
        PlayerDataMgr.setPlayerData()
        Player.Share.changeWeapon()
        this.updateScroll()
    }

    closeBtnCB() {
        UINode.Share.showUI(UIType.UI_START)
        Player.Share.resetData()
    }

    update(deltaTime: number) {

    }
}

