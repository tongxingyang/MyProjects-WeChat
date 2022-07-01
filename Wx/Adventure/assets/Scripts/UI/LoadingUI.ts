
import { _decorator, Component, Node, ProgressBar, director } from 'cc';
import { PREVIEW, WECHAT } from 'cc/env';
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
                    title: '银河空战',
                    imageUrl: '',
                }
            })
        }
        else {
            this.hadLoaded = true
        }

        this.init()
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