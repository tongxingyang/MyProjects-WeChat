import { _decorator, Component, Node, instantiate, v3, Sprite, Label, Animation } from 'cc';
import GameData from '../Crl/GameData';
import { GameLogic } from '../Crl/GameLogic';
import { Player } from '../Crl/Player';
import { UINode } from '../Crl/UINode';
import BundleMgr from '../Mod/BundleMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
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
        if (!this.hadInit) {
            for (let i = 0; i < 40; i++) {
                if (GameData.weaponOpenArr[i] == 0) continue
                let item = null
                item = instantiate(this.itemPrefab)
                item.position = v3()
                item.active = true
                this.content.addChild(item)

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

                buyBtn.on(Node.EventType.TOUCH_END, () => { this.buyBtnCB(i) }, this)
                chooseBtn.on(Node.EventType.TOUCH_END, () => { this.chooseBtnCB(i) }, this)
            }
            this.hadInit = true
        } else {
            let index = 0
            for (let i = 0; i < 40; i++) {
                if (GameData.weaponOpenArr[i] == 0) {
                    continue
                }
                let item = this.content.children[index]

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
                index++
            }
        }
        this.resetPlayerWeapon()
    }

    resetPlayerWeapon() {
        BundleMgr.setSpriteFrameInBundle(GameData.getWeaponDir(PlayerDataMgr.getPlayerData().weaponId, PlayerDataMgr.getWeaponEnchantType()), this.playerWeapon.getComponent(Sprite))

        let weaponType = GameData.weaponData[PlayerDataMgr.getPlayerData().weaponId].type
        this.player.getComponent(Animation).play('Idle' + (weaponType + 1))
    }

    buyBtnCB(id: number) {
        SoundMgr.Share.PlaySound('click')
        if (GameData.weaponCost[id] > PlayerDataMgr.getPlayerData().material) {
            //材料不足
            UINode.Share.showUI(UIType.UI_GOTOSHOP, false, () => {
                UINode.Share.showUI(UIType.UI_WEAPON)
            })
            return
        }
        GameLogic.Share.createTips('武器解锁成功')
        PlayerDataMgr.getPlayerData().material -= GameData.weaponCost[id]
        PlayerDataMgr.getPlayerData().weaponArr[id] = 1
        PlayerDataMgr.getPlayerData().weaponId = id
        PlayerDataMgr.setPlayerData()
        Player.Share.changeWeapon()
        this.updateScroll()
    }

    chooseBtnCB(id: number) {
        SoundMgr.Share.PlaySound('click')
        if (id == PlayerDataMgr.getPlayerData().weaponId) {
            return
        }
        PlayerDataMgr.getPlayerData().weaponId = id
        PlayerDataMgr.setPlayerData()
        Player.Share.changeWeapon()
        this.updateScroll()
    }

    closeBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_START)
        Player.Share.resetData()
    }

    update(deltaTime: number) {

    }
}

