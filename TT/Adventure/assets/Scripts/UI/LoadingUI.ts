
import { _decorator, Component, Node, ProgressBar, director } from 'cc';
import { PREVIEW, WECHAT } from 'cc/env';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import TTAdMgr from '../TT/TTAdMgr';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null

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
                    title: '搞怪大作战',
                    imageUrl: '',
                }
            })
        }

        TTAdMgr.initAd()
        this.init()
    }

    init() {
        SoundMgr.Share.loadSounds(() => {
            director.preloadScene('Game', (completeCount, totalCount, item) => {
                this.pBar.progress = completeCount / totalCount
            }, () => {
                director.loadScene('Game', () => {
                    UINode.Share.showUI(UIType.UI_START)
                })
            })
        })
    }

    update(deltaTime: number) {
    }
}