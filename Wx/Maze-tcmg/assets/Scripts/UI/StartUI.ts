
import { _decorator, Component, Node } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    onEnable() {
        FdMgr.inHomePage()
    }

    start() {
        // [3]
        SoundMgr.Share.PlayMusic('bgm')
    }

    startBtnCB() {
        SoundMgr.Share.PlaySound('click')
        FdMgr.startGame(() => {
            UINode.Share.showUI(UIType.UI_GAME)
            GameLogic.Share.gameStart()
        })
    }

    update(deltaTime: number) {
        // [4]
    }
}
