import { _decorator, Component, Node, UITransform, v3 } from 'cc';
import { UIType } from '../Mod/Entity';
import { SoundMgr } from '../Mod/SoundMgr';
import { GameLogic } from './GameLogic';
import { Player } from './Player';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameBtnNode')
export class GameBtnNode extends Component {

    shopNode: Node = null
    backNode: Node = null
    nextNode: Node = null

    onLoad() {
        this.shopNode = this.node.getChildByName('Shop')
        this.backNode = this.node.getChildByName('Back')
        this.nextNode = this.node.getChildByName('Next')
    }

    start() {
        this.shopNode.getChildByName('btn').on(Node.EventType.TOUCH_END, this.shopCB, this)
        this.backNode.getChildByName('btn').on(Node.EventType.TOUCH_END, this.backCB, this)
        this.nextNode.getChildByName('btn').on(Node.EventType.TOUCH_END, this.nextCB, this)
    }

    shopCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_SHOP, true, () => {
            UINode.Share.showUI(UIType.UI_GAME)
        })
    }

    backCB() {
        SoundMgr.Share.PlaySound('transform')
        GameLogic.Share.gameOver(true)
    }

    nextCB() {
        SoundMgr.Share.PlaySound('transform')
        GameLogic.Share.nextGrade()
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

