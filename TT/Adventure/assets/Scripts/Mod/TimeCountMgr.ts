import { _decorator, Component, Node, game } from 'cc';
import { WECHAT } from 'cc/env';
import PlayerDataMgr from './PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('TimeCountMgr')
export class TimeCountMgr extends Component {
    public static Share: TimeCountMgr

    tCount: number = 0
    countTime: number = 300

    onLoad() {
        TimeCountMgr.Share = this
        game.addPersistRootNode(this.node)
        this.init()
    }

    init() {
        if (localStorage.getItem('powerTime')) {
            this.tCount = parseInt(localStorage.getItem('powerTime'))
        } else {
            localStorage.setItem('powerTime', this.countTime.toString())
            this.tCount = this.countTime
        }

        this.calculateExitTime()

        if (WECHAT) {
            window["tt"].onShow(() => {
                console.log('onShow')
                this.calculateExitTime()
            })
            window["tt"].onHide(() => {
                console.log('onHide')
                localStorage.setItem('powerTime', this.tCount.toString())
                localStorage.setItem('exitTime', new Date().getTime().toString())
            })
        }

        this.schedule(this.calculateTime, 1)
    }

    calculateExitTime() {
        let exitTime: number = 0
        if (localStorage.getItem('exitTime')) {
            exitTime = new Date().getTime() - parseInt(localStorage.getItem('exitTime'))
        }

        if (exitTime <= 0) return

        exitTime /= 1000
        let t = Math.floor(exitTime / this.countTime)
        let left = Math.floor(exitTime % this.countTime)
        this.tCount -= left
        PlayerDataMgr.getPlayerData().power += t
        if (PlayerDataMgr.getPlayerData().power > PlayerDataMgr.powerMax) {
            PlayerDataMgr.getPlayerData().power = PlayerDataMgr.powerMax
            PlayerDataMgr.setPlayerData()
        }
    }

    calculateTime() {
        if (PlayerDataMgr.getPlayerData().power < PlayerDataMgr.powerMax) {
            this.tCount--
            if (this.tCount <= 0) {
                PlayerDataMgr.getPlayerData().power += 1
                PlayerDataMgr.setPlayerData()
                this.tCount = this.countTime
            }
        } else {
            this.tCount = this.countTime
        }
    }

}

