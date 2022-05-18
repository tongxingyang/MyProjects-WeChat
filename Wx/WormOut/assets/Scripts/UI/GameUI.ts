
import { _decorator, Component, Node, Label, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    static Share: GameUI

    @property(Node)
    line: Node = null

    @property(Label)
    targetNum: Label = null
    @property(Node)
    touchNode: Node = null

    start() {
        GameUI.Share = this
        // [3]
    }

    update(deltaTime: number) {
        // [4]
    }
}