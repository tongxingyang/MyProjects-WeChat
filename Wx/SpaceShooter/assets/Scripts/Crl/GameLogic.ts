import { _decorator, Component, Node, tween, v3, view } from 'cc';
import BulletPool from './BulletPool';
import { Plane } from './Plane';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {
    public static Share: GameLogic

    isStart: boolean = false
    isWin: boolean = false
    isPause: boolean = false
    isGameOver: boolean = false

    onLoad() {
        GameLogic.Share = this
        BulletPool.initPool()
    }

    start() {

    }

    gameStart() {
        tween(Plane.Share.node).to(1, { position: v3(0, -(view.getVisibleSize().height / 2 - 350)) }).call(() => {

        }).start
    }

    gameOver(isWin: boolean) {

    }

    update(deltaTime: number) {

    }
}

