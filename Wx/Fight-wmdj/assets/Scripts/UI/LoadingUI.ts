import { _decorator, Component, Node, ProgressBar, RichText, director, assetManager } from 'cc';
import { PREVIEW, WECHAT } from 'cc/env';
import FdMgr from '../../FDRes/Src/FdMgr';
import BundleMgr from '../Mod/BundleMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null
    @property(RichText)
    str: RichText = null
    hadLoaded: boolean = false
    hadLoaded1: boolean = false
    sdkInited: boolean = false

    start() {
        if (PREVIEW) {
            localStorage.clear()
            PlayerDataMgr.getPlayerData()
        }
        if (WECHAT) {
            //开启右上角的分享
            window['wx'].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            window['wx'].onShareAppMessage(function (res) {
                return {
                    title: '终极勇士',
                    imageUrl: '',
                }
            })
        }

        this.init()
        FdMgr.init(() => {
            FdMgr.loadGame(() => {
                this.sdkInited = true
            })
        })

        BundleMgr.loadResBundle('Res', () => {
            SoundMgr.Share.loadSounds(() => {
                this.hadLoaded = true
            })
        })
        BundleMgr.loadResBundle('Ani', () => {
            this.hadLoaded1 = true
        })
    }

    init() {
        this.schedule(() => {
            if (this.hadLoaded && this.hadLoaded1 && this.sdkInited) {
                this.unscheduleAllCallbacks()
                director.loadScene('Game')
            }
        })
    }

    update(deltaTime: number) {
        this.pBar.progress += 0.002
        if (this.pBar.progress > 1) this.pBar.progress = 1
        this.str.string = '<outline color=black width=2>' + (this.pBar.progress * 100).toFixed(2) + '%</outline>'
    }
}

