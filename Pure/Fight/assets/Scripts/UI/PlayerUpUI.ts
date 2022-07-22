import { _decorator, Component, Node, Label } from 'cc';
import { Player } from '../Crl/Player';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('PlayerUpUI')
export class PlayerUpUI extends Component {

    @property(Node)
    itemNode: Node = null

    hadInit: boolean = false

    onEnable() {
        this.updateItem()
    }

    updateItem() {
        for (let i = 0; i < this.itemNode.children.length; i++) {
            let item = this.itemNode.children[i]
            let num = item.getChildByName('str').getChildByName('num').getComponent(Label)
            if (i == 0) {
                num.string = PlayerDataMgr.getPlayerData().hp.toString()
            } else if (i == 1) {
                num.string = PlayerDataMgr.getPlayerData().attack.toString()
            } else if (i == 2) {
                num.string = PlayerDataMgr.getPlayerData().speed.toString()
            } else if (i == 3) {
                num.string = PlayerDataMgr.getPlayerData().critical.toString()
            }
            if (!this.hadInit) {
                item.getChildByName('upgradeBtn').on(Node.EventType.TOUCH_END, () => { this.upgradeBtnCB(i) }, this)
            }
        }
        this.hadInit = true
    }

    upgradeBtnCB(id: number) {
        if (PlayerDataMgr.getPlayerData().soul < 500) {
            return
        }
        PlayerDataMgr.getPlayerData().soul -= 500
        if (id == 0) {
            PlayerDataMgr.getPlayerData().hp += 25
        } else if (id == 1) {
            PlayerDataMgr.getPlayerData().attack += 5
        } else if (id == 2) {
            PlayerDataMgr.getPlayerData().speed += 1
        } else if (id == 3) {
            PlayerDataMgr.getPlayerData().critical += 5
        }
        PlayerDataMgr.setPlayerData()
        this.updateItem()
    }

    closeBtnCB() {
        UINode.Share.showUI(UIType.UI_START)
        Player.Share.resetData()
    }

    update(deltaTime: number) {

    }
}

