
import { _decorator, Component, Node } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    @property(Node)
    hardModeUI: Node = null
    @property(Node)
    shopBtn: Node = null
    @property(Node)
    hardModeBtn: Node = null

    hadStart: boolean = false

    start() {
        // [3]
    }

    onEnable() {
        FdMgr.inHomePage()

        this.shopBtn.active = FdMgr.isVersionValid
        this.hardModeBtn.active = FdMgr.isVersionValid
    }

    startBtnCB() {
        if (this.hadStart) {
            return
        }
        this.hadStart = true
        this.node.active = false

        FdMgr.startGame(() => {
            GameLogic.Share.ready()
            UINode.Share.showUI(UIType.UI_GAME)
        })
    }

    shopBtnCB() {
        FdMgr.inShop()
        UINode.Share.showUI(UIType.UI_SHOP)
        GameLogic.Share.showShopCam()
    }

    hardModeBtnCB() {
        this.hardModeUI.active = true
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}