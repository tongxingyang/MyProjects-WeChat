
import { _decorator, Component, Node } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    start() {
        // [3]
    }

    startBtnCB() {
        UINode.Share.showUI(UIType.UI_GAME)
        GameLogic.Share.gameStart()
    }

    shopBtnCB(){
        UINode.Share.showUI(UIType.UI_SHOP)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
