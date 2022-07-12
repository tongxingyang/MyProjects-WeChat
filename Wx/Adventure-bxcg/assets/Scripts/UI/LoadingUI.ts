
import { _decorator, Component, Node, ProgressBar, director, assetManager } from 'cc';
import { PREVIEW, WECHAT } from 'cc/env';
import FdMgr from '../../FDRes/Src/FdMgr';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null

    hadLoaded: boolean = false
    sdkInited: boolean = false

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
                    title: '爆笑闯关',
                    imageUrl: '',
                }
            })

            const loadTask = window['wx'].loadSubpackage({
                name: 'resources', // name 可以填 name 或者 root
                success: (res) => {
                    // 分包加载成功后通过 success 回调
                    assetManager.loadBundle('resources', null, () => {
                        this.hadLoaded = true
                    })
                },
                fail: (res) => {
                    // 分包加载失败通过 fail 回调
                }
            })
        }
        else {
            this.hadLoaded = true
        }

        this.init()
        FdMgr.init(() => {
            FdMgr.loadGame(() => {
                this.sdkInited = true
            })
        })
    }

    init() {
        this.schedule(() => {
            if (this.hadLoaded && this.sdkInited) {
                this.unscheduleAllCallbacks()
                SoundMgr.Share.loadSounds(() => {
                    director.loadScene('Game', () => {
                        UINode.Share.showUI(UIType.UI_START)
                    })
                })
            }
        })
    }

    update(deltaTime: number) {
        // [4]
        this.pBar.progress += 0.005
    }
}