import { _decorator, Component, Node, UITransform, v3 } from 'cc';
import { UIType } from '../Mod/Entity';
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
    }

    shopCB() {
        UINode.Share.showUI(UIType.UI_SHOP, true, () => {
            UINode.Share.showUI(UIType.UI_START)
        })
    }

    weaponCB() {
        UINode.Share.showUI(UIType.UI_WEAPON)
    }

    weaponUpCB() {
        UINode.Share.showUI(UIType.UI_WEAPONUP)
    }

    weaponEnchantCB() {
        UINode.Share.showUI(UIType.UI_WEAPONENCHANT)
    }

    playerUpCB() {
        UINode.Share.showUI(UIType.UI_PLAYERUP)
    }

    toGameCB() {
        GameLogic.Share.gameStart()
    }

    update(deltaTime: number) {
        this.node.children.forEach((node: Node) => {
            if (node.getChildByName('tips') && node.getChildByName('btn')) {
                let tips = node.getChildByName('tips')
                let btn = node.getChildByName('btn')
                let nodePos = node.getComponent(UITransform).convertToWorldSpaceAR(v3())
                let pPos = Player.Share.node.getComponent(UITransform).convertToWorldSpaceAR(v3())
                tips.active = Math.abs(nodePos.x - pPos.x) > 120
                btn.active = Math.abs(nodePos.x - pPos.x) <= 120
            }
        })
    }
}

