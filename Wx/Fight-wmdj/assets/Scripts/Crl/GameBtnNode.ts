import { _decorator, Component, Node, UITransform, v3, ProgressBar, UI } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
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

    timeArr: number[] = [0, 0, 0]

    isUpdate: boolean = true

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
        this.isUpdate = false
        GameLogic.Share.gameOver(true)
    }

    nextCB() {
        SoundMgr.Share.PlaySound('transform')
        this.isUpdate = false
        FdMgr.showNormalRemen(() => {
            UINode.Share.showUI(UIType.UI_FREESKIN, true, () => {
                UINode.Share.showUI(UIType.UI_GAME)
                GameLogic.Share.nextGrade()
                Player.Share.node.getComponentInChildren(ProgressBar).node.active = false
                this.isUpdate = true
            })
        })
    }

    update(deltaTime: number) {
        if (!this.isUpdate) return
        this.node.children.forEach((node: Node) => {
            let id = this.node.children.indexOf(node)
            if (UINode.Share.node.getChildByName(UIType.UI_SHOP).active ||
                UINode.Share.node.getChildByName(UIType.UI_FINISH).active) {
                this.timeArr[0] = 0
                this.timeArr[1] = 0
                this.timeArr[2] = 0
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
                            this.timeArr[id] = 0
                            this.backCB()
                            return
                        case 1:
                            this.timeArr[id] = 0
                            this.shopCB()
                            break
                        case 2:
                            this.timeArr[id] = 0
                            this.nextCB()
                            return
                    }
                }
            } else {
                this.timeArr[id] = 0
            }
        })


        Player.Share.node.getComponentInChildren(ProgressBar).node.active =
            this.node.active && (this.timeArr[0] > 0 || this.timeArr[1] > 0 || this.timeArr[2] > 0)
        // this.node.children.forEach((node: Node) => {
        //     if (node.name == 'Shop') return
        //     if (node.getChildByName('tips') && node.getChildByName('btn')) {
        //         let tips = node.getChildByName('tips')
        //         let btn = node.getChildByName('btn')
        //         let nodePos = node.getComponent(UITransform).convertToWorldSpaceAR(v3())
        //         let pPos = Player.Share.node.getComponent(UITransform).convertToWorldSpaceAR(v3())
        //         tips.active = Math.abs(nodePos.x - pPos.x) > 120
        //         btn.active = Math.abs(nodePos.x - pPos.x) <= 120
        //     }
        // })
    }
}

