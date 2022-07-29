import { _decorator, Component, Node, Label } from 'cc';
import PlatformApi from '../Common/PlatformApi';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('ShopUI')
export class ShopUI extends Component {

    ItemNode: Node = null

    countArr: number[] = [10000, 5000, 5, 5, 5, 5]

    onLoad() {
        this.ItemNode = this.node.getChildByName('ItemNode')
    }

    onEnable() {
        if (GameLogic.Share.isStart) {
            this.countArr = [20000, 10000, 10, 10, 10, 10]
            for (let i = 0; i < this.ItemNode.children.length; i++) {
                let item = this.ItemNode.children[i]
                let num = item.getChildByName('text').getComponentInChildren(Label)
                num.string = '<' + this.countArr[i].toString()
            }
        }
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
        SoundMgr.Share.PlaySound('click')
        let cb = null
        switch (id) {
            case 0:
                cb = () => {
                    PlayerDataMgr.getPlayerData().material += this.countArr[0]; PlayerDataMgr.setPlayerData();
                    GameLogic.Share.createTips('恭喜获得材料x' + this.countArr[0])
                }
                break
            case 1:
                cb = () => {
                    PlayerDataMgr.getPlayerData().soul += this.countArr[1]; PlayerDataMgr.setPlayerData();
                    GameLogic.Share.createTips('恭喜获得魂x' + this.countArr[1])
                }
                break
            case 2:
                cb = () => {
                    PlayerDataMgr.getPlayerData().enchantArr[0] += this.countArr[2]; PlayerDataMgr.setPlayerData();
                    GameLogic.Share.createTips('恭喜获得火焰附魔石x' + this.countArr[2])
                }
                break
            case 3:
                cb = () => {
                    PlayerDataMgr.getPlayerData().enchantArr[1] += this.countArr[3]; PlayerDataMgr.setPlayerData();
                    GameLogic.Share.createTips('恭喜获得寒冰附魔石x' + this.countArr[3])
                }
                break
            case 4:
                cb = () => {
                    PlayerDataMgr.getPlayerData().enchantArr[2] += this.countArr[4]; PlayerDataMgr.setPlayerData();
                    GameLogic.Share.createTips('恭喜获得雷电附魔石x' + this.countArr[4])
                }
                break
            case 5:
                cb = () => {
                    PlayerDataMgr.getPlayerData().enchantArr[3] += this.countArr[5]; PlayerDataMgr.setPlayerData();
                    GameLogic.Share.createTips('恭喜获得剧毒附魔石x' + this.countArr[5])
                }
                break
        }
        PlatformApi.showVideo(cb)
    }

    backBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.closeUI(UIType.UI_SHOP)
    }

    update(deltaTime: number) {

    }
}

