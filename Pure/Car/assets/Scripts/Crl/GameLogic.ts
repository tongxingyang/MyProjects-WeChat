import { _decorator, Component, Node } from 'cc';
import { UIType } from '../Mod/Entity';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {

    static Share: GameLogic

    @property(Node)
    startCam: Node = null
    @property(Node)
    gameCam: Node = null
    @property(Node)
    startNode: Node = null
    @property(Node)
    levelNode: Node = null

    isGameStarted: boolean = false
    isGameOver: boolean = false

    onLoad() {
        GameLogic.Share = this
    }

    start() {

    }

    gameStart() {
        UINode.Share.showUI(UIType.UI_GAME)
        this.startCam.active = false
        this.startNode.active = false
        this.levelNode.active = true
        this.gameCam.active = true
    }

    gameOver() {
        if (this.isGameOver) return
        this.isGameOver = true
        this.isGameStarted = false
    }

    update(deltaTime: number) {

    }
}

