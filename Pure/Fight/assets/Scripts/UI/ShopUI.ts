import { _decorator, Component, Node } from 'cc';
import PlatformApi from '../Common/PlatformApi';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('ShopUI')
export class ShopUI extends Component {

    ItemNode: Node = null

    onLoad() {
        this.ItemNode = this.node.getChildByName('ItemNode')
    }

    start() {
        this.ItemNode.children.forEach((item: Node) => {
            let adBtn = item.getChildByName('adBtn')
            adBtn.on(Node.EventType.TOUCH_END, () => {
                this.adCB(this.ItemNode.children.indexOf(item))
            }, this)
        })
    }

    adCB(id: number) {
        let cb = null
        switch (id) {
            case 0:
                cb = () => { PlayerDataMgr.getPlayerData().material += 5000; PlayerDataMgr.setPlayerData() }
                break
            case 1:
                cb = () => { PlayerDataMgr.getPlayerData().soul += 5000; PlayerDataMgr.setPlayerData() }
                break
            case 2:
                cb = () => { PlayerDataMgr.getPlayerData().enchantArr[0] += 1; PlayerDataMgr.setPlayerData() }
                break
            case 3:
                cb = () => { PlayerDataMgr.getPlayerData().enchantArr[1] += 1; PlayerDataMgr.setPlayerData() }
                break
            case 4:
                cb = () => { PlayerDataMgr.getPlayerData().enchantArr[2] += 1; PlayerDataMgr.setPlayerData() }
                break
            case 5:
                cb = () => { PlayerDataMgr.getPlayerData().enchantArr[3] += 1; PlayerDataMgr.setPlayerData() }
                break
        }
        PlatformApi.showVideo(cb)
    }

    backBtnCB() {
        UINode.Share.closeUI(UIType.UI_SHOP)
    }

    update(deltaTime: number) {

    }
}

