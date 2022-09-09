import { _decorator, Component, Node, Label } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    @property(Label)
    gradeNum: Label = null

    start() {

    }

    onEnable(){
        
        FdMgr.visibleGameBanner(true)
    }

    onDisable(){
        
        FdMgr.visibleGameBanner(false)
    }

    update(deltaTime: number) {
        this.gradeNum.string = GameLogic.Share.curGrade.toString()
    }
}

