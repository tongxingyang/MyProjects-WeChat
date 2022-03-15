
import { _decorator, Component, Node, UI } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    start() {
        // [3]
        SoundMgr.Share.PlayMusic('Bgm')
        FdMgr.inHomePage()
    }

    hadStart: boolean = false
    startBtnCB() {
        if (this.hadStart) return
        this.hadStart = true
        FdMgr.startGame(() => {
            UINode.Share.showUI(UIType.UI_GAME)
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}