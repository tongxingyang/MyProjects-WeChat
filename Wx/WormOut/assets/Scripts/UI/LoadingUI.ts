
import { _decorator, Component, Node, ProgressBar, director } from 'cc';
import { PREVIEW, WECHAT } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null

    start() {
        // [3]
        if (PREVIEW) localStorage.clear()
        if (WECHAT) {
            //开启右上角的分享
            window['wx'].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            window['wx'].onShareAppMessage(function (res) {
                return {
                    title: '揪出虫子',
                    imageUrl: '',
                }
            })
        }
        this.init()
    }

    init() {
        director.loadScene('Game')
    }

    update(deltaTime: number) {
        // [4]
        this.pBar.progress += 0.01
    }
}