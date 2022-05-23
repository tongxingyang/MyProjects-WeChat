
import { _decorator, Component, Node, Label, director } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    static Share: GameUI

    start() {
        GameUI.Share = this
        // [3]
        FdMgr.inGame()
    }

    update(deltaTime: number) {
        // [4]
    }

    restartBtnCB(){
        SoundMgr.Share.PlaySound('click')
        FdMgr.reStart()
        director.loadScene('Game')
    }
}