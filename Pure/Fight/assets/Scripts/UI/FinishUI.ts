import { _decorator, Component, Node, Label } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
const { ccclass, property } = _decorator;

@ccclass('FinishUI')
export class FinishUI extends Component {

    @property(Node)
    winTitle: Node = null
    @property(Node)
    loseTitle: Node = null

    @property(Label)
    numArr: Label[] = []

    start() {
        this.winTitle.active = GameLogic.Share.isWin
        this.loseTitle.active = !GameLogic.Share.isWin
        this.numArr[0].string = GameLogic.Share.curGrade.toString()

        this.numArr[1].string = ':' + GameLogic.Share.gotMaterialsCount.toString()
        this.numArr[2].string = ':' + GameLogic.Share.gotSoulCount.toString()

        this.numArr[3].string = ':' + GameLogic.Share.gotEnchant1Count.toString()
        this.numArr[4].string = ':' + GameLogic.Share.gotEnchant2Count.toString()
        this.numArr[5].string = ':' + GameLogic.Share.gotEnchant3Count.toString()
        this.numArr[6].string = ':' + GameLogic.Share.gotEnchant4Count.toString()
    }

    backToHome() {
        GameLogic.Share.restartGame()
    }

    update(deltaTime: number) {

    }
}

