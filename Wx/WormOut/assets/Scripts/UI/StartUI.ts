
import { _decorator, Component, Node } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    onEnable(){
        FdMgr.inHomePage()
    }

    start() {
        // [3]
        SoundMgr.Share.PlaySound('bgm')
    }

    startBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_GAME)
        FdMgr.startGame(()=>{
            GameLogic.Share.gameStart()
        })
    }

    shopBtnCB(){
        SoundMgr.Share.PlaySound('click')
        FdMgr.inShop()
        UINode.Share.showUI(UIType.UI_SHOP)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
