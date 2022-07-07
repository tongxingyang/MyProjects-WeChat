import { _decorator, Component, Node } from 'cc';
import { GameUI } from '../../UI/GameUI';
import { GameLogic } from '../GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Level19')
export class Level19 extends Component {

    hadChange: boolean = false

    start() {
    }

    changeBtnPos() {
        let btnNode = GameUI.Share.node.getChildByName('btnNode')
        let lPos = btnNode.getChildByName('leftBtn').position.clone()
        let rPos = btnNode.getChildByName('rightBtn').position.clone()
        let jPos = btnNode.getChildByName('jumpBtn').position.clone()
        btnNode.getChildByName('leftBtn').position = jPos
        btnNode.getChildByName('jumpBtn').position = lPos
    }

    update(deltaTime: number) {
        if (!this.hadChange && GameLogic.Share.player.position.x >= -100) {
            this.hadChange = true
            this.changeBtnPos()
        }
    }
}

