
import { _decorator, Component, Node } from 'cc';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {


    onEnable() {
    }

    start() {
        // [3]
        SoundMgr.Share.PlayMusic('bgm')
    }

    startBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_GAME)
    }

    shopBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_SHOP)
    }

    update(deltaTime: number) {
        // [4]
    }
}
