import { _decorator, Component, Node, Label } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    @property(Label)
    gradeNum: Label = null

    start() {

    }

    update(deltaTime: number) {
        this.gradeNum.string = GameLogic.Share.curGrade.toString()
    }
}

