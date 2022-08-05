
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
                    title: '暴走迷宫',
                    imageUrl: '',
                }
            })

            // const loadTask = window['wx'].loadSubpackage({
            //     name: 'Res', // name 可以填 name 或者 root
            //     success: (res) => {
            //         // 分包加载成功后通过 success 回调
            //         this.hadLoaded = true
            //     },
            //     fail: (res) => {
            //         // 分包加载失败通过 fail 回调
            //     }
            // })
        }
        this.hadLoaded = true

        FdMgr.init(() => {
            FdMgr.loadGame(() => {
                this.init()
            })
        })
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