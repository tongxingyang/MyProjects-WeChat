import { _decorator, Component, Node, game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('OnlineTimeMgr')
export class OnlineTimeMgr extends Component {
    static Share: OnlineTimeMgr

    giftTime: number = 300
    time: number = 0
    hadGotOnlineGift: boolean = false
    hadStart: boolean = false

    onLoad() {
        game.addPersistRootNode(this.node)
        OnlineTimeMgr.Share = this
    }

    start() {

    }

    startTimeCounter() {
        this.hadStart = true
        this.schedule(this.timeCounter, 1)
    }

    timeCounter() {
        this.time++
    }

    update(deltaTime: number) {

    }
}

