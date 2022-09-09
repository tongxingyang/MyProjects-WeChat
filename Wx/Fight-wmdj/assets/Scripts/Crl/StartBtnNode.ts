import { _decorator, Component, Node, UITransform, v3, ProgressBar } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import GameData from './GameData';
import { GameLogic } from './GameLogic';
import { Player } from './Player';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('StartBtnNode')
export class StartBtnNode extends Component {

    shopNode: Node = null
    weaponNode: Node = null
    weaponUpNode: Node = null
    weaponEnchantNode: Node = null
    playerUpNode: Node = null
    toGameNode: Node = null

    timeArr: number[] = [0, 0, 0, 0, 0]

    onLoad() {
        this.shopNode = this.node.getChildByName('Shop')
        this.weaponNode = this.node.getChildByName('Weapon')
        this.weaponUpNode = this.node.getChildByName('WeaponUp')
        this.weaponEnchantNode = this.node.getChildByName('WeaponEnchant')
        this.playerUpNode = this.node.getChildByName('PlayerUp')
        this.toGameNode = this.node.getChildByName('ToGame')
    }

    start() {
        this.shopNode.getChildByName('btn').on(Node.EventType.TOUCH_END, this.shopCB, this)
        this.weaponNode.getChildByName('btn').on(Node.EventType.TOUCH_END, this.weaponCB, this)
        this.weaponUpNode.getChildByName('btn').on(Node.EventType.TOUCH_END, this.weaponUpCB, this)
        this.weaponEnchantNode.getChildByName('btn').on(Node.EventType.TOUCH_END, this.weaponEnchantCB, this)
        this.playerUpNode.getChildByName('btn').on(Node.EventType.TOUCH_END, this.playerUpCB, this)
        this.toGameNode.getChildByName('btn').on(Node.EventType.TOUCH_END, this.toGameCB, this)

        this.toGameNode.getChildByName('finger').active = PlayerDataMgr.getPlayerData().isNewer
    }

    shopCB() {
        if (UINode.Share.node.getChildByName(UIType.UI_SHOP).active) return false
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_SHOP, true, () => {
            UINode.Share.showUI(UIType.UI_START)
        })
        return true
    }

    weaponCB() {
        if (UINode.Share.node.getChildByName(UIType.UI_WEAPON).active) return false
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_WEAPON)
        return true
    }

    weaponUpCB() {
        if (UINode.Share.node.getChildByName(UIType.UI_WEAPONUP).active) return false
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_WEAPONUP)
        return true
    }

    weaponEnchantCB() {
        if (UINode.Share.node.getChildByName(UIType.UI_WEAPONENCHANT).active) return false
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_WEAPONENCHANT)
        return true
    }

    playerUpCB() {
        if (UINode.Share.node.getChildByName(UIType.UI_PLAYERUP).active) return false
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_PLAYERUP)
        return true
    }

    toGameCB() {
        SoundMgr.Share.PlaySound('transform')
        FdMgr.startGame(() => {
            UINode.Share.showUI(UIType.UI_FREESKIN, true, () => {
                GameLogic.Share.gameStart()
            })
        })
    }

    update(deltaTime: number) {
        this.node.children.forEach((node: Node) => {
            if (node.name == 'ToGame') return
            let id = this.node.children.indexOf(node)
            if (UINode.Share.node.getChildByName(UIType.UI_SHOP).active ||
                UINode.Share.node.getChildByName(UIType.UI_WEAPON).active ||
                UINode.Share.node.getChildByName(UIType.UI_WEAPONUP).active ||
                UINode.Share.node.getChildByName(UIType.UI_WEAPONENCHANT).active ||
                UINode.Share.node.getChildByName(UIType.UI_PLAYERUP).active) {
                this.timeArr[0] = 0
                this.timeArr[1] = 0
                this.timeArr[2] = 0
                this.timeArr[3] = 0
                this.timeArr[4] = 0
                return
            }
            let nodePos = node.getComponent(UITransform).convertToWorldSpaceAR(v3())
            let pPos = Player.Share.node.getComponent(UITransform).convertToWorldSpaceAR(v3())
            if (Math.abs(nodePos.x - pPos.x) <= 120) {
                this.timeArr[id] += deltaTime
                Player.Share.node.getComponentInChildren(ProgressBar).progress = this.timeArr[id] / 2

                if (this.timeArr[id] >= 2) {
                    switch (id) {
                        case 0:
                            this.shopCB()
                            break
                        case 1:
                            this.weaponCB()
                            break
                        case 2:
                            this.weaponUpCB()
                            break
                        case 3:
                            this.weaponEnchantCB()
                            break
                        case 4:
                            this.playerUpCB()
                            break
                    }
                    this.timeArr[id] = 0
                }
            } else {
                this.timeArr[id] = 0
            }
        })


        Player.Share.node.getComponentInChildren(ProgressBar).node.active =
            this.timeArr[0] > 0 || this.timeArr[1] > 0 || this.timeArr[2] > 0 || this.timeArr[3] > 0 || this.timeArr[4] > 0

        this.node.children.forEach((node: Node) => {
            if (node.name == 'Shop') return
            if (node.getChildByName('tips') && node.getChildByName('btn')) {
                let tips = node.getChildByName('tips')
                let btn = node.getChildByName('btn')
                let nodePos = node.getComponent(UITransform).convertToWorldSpaceAR(v3())
                let pPos = Player.Share.node.getComponent(UITransform).convertToWorldSpaceAR(v3())
                tips.active = Math.abs(nodePos.x - pPos.x) > 120
                btn.active = Math.abs(nodePos.x - pPos.x) <= 120
            }
        })

        this.weaponEnchantNode.getChildByName('finger').active =
            (PlayerDataMgr.getWeaponEnchantType() == 0 && (PlayerDataMgr.getPlayerData().enchantArr[0] > 0 || PlayerDataMgr.getPlayerData().enchantArr[1] > 0 ||
                PlayerDataMgr.getPlayerData().enchantArr[2] > 0 || PlayerDataMgr.getPlayerData().enchantArr[3] > 0)) ||
            (PlayerDataMgr.getWeaponEnchantType() > 0 && PlayerDataMgr.getPlayerData().enchantArr[PlayerDataMgr.getWeaponEnchantType() - 1] > 0)

        this.playerUpNode.getChildByName('finger').active = PlayerDataMgr.getPlayerData().soul >= 500
        this.weaponUpNode.getChildByName('finger').active = PlayerDataMgr.getPlayerData().material >= 500

        for (let i = 0; i < PlayerDataMgr.getPlayerData().weaponArr.length; i++) {
            if (GameData.weaponOpenArr[i] == 0) continue
            if (GameData.weaponCost[i] <= PlayerDataMgr.getPlayerData().material && PlayerDataMgr.getPlayerData().weaponArr[i] == 0) {
                this.weaponNode.getChildByName('finger').active = true
                return
            }
        }
        this.weaponNode.getChildByName('finger').active = false
    }
}

