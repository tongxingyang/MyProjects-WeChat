import { _decorator, Component, Node } from 'cc';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
const { ccclass, property } = _decorator;

@ccclass('GoToShopUI')
export class GoToShopUI extends Component {
    start() {

    }

    goBtnCB() {
        UINode.Share.showUI(UIType.UI_SHOP, true, UINode.Share.closeCB)
    }

    closeBtnCB() {
        this.node.active = false
    }

    update(deltaTime: number) {

    }
}

