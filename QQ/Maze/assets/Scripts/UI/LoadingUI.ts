
import { _decorator, Component, Node, ProgressBar, director } from 'cc';
import { PREVIEW, WECHAT } from 'cc/env';
import FdMgr from '../../FDRes/Src/FdMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null

    hadLoaded: boolean = false

    start() {
        // [3]
        if (PREVIEW) localStorage.clear()
        PlayerDataMgr.getPlayerData()
        if (WECHAT) {
            //开启右上角的分享
            window['wx'].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            window['wx'].onShareAppMessage(function (res) {
                return {
                    title: '迷宫寻宝',
                    imageUrl: '',
                }
            })
        }
        this.hadLoaded = true

        if (WECHAT && !localStorage.getItem('older')) {
            FdMgr.showYsUI(() => {
                FdMgr.init(() => {
                    this.init()
                })
            })
        } else {
            FdMgr.init(() => {
                this.init()
            })
        }
    }

    init() {
        this.schedule(() => {
            if (this.hadLoaded) {
                this.unscheduleAllCallbacks()
                director.loadScene('Game')
            }
        })
    }

    update(deltaTime: number) {
        // [4]
        this.pBar.progress += 0.01
    }
}