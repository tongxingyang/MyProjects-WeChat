
import { _decorator, Component, Node, ProgressBar, director } from 'cc';
import { WECHAT } from 'cc/env';
import FdMgr from '../../FDRes/Src/FdMgr';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null

    start() {
        if (WECHAT) {
            //开启右上角的分享
            window['wx'].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            window['wx'].onShareAppMessage(function (res) {
                return {
                    title: '化妆高手',
                    imageUrl: '',
                }
            })
        }
        this.init()
    }

    init() {
        FdMgr.init(() => {
            FdMgr.loadGame(() => {
                director.preloadScene('Game', () => {
                    director.loadScene('Game')
                })
            })
        })
    }

    update(deltaTime: number) {
        // [4]
        this.pBar.progress += 0.01
    }
}