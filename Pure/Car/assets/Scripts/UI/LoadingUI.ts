import { _decorator, Component, Node, ProgressBar, RichText, director, assetManager, resources, JsonAsset } from 'cc';
import { PREVIEW, WECHAT } from 'cc/env';
import BundleMgr from '../Mod/BundleMgr';
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
                    title: '',
                    imageUrl: '',
                }
            })
        }

        this.init()
        this.sdkInited = true
        this.hadLoaded = true
        this.loadJson()
    }

    jsonIndex: number = 1
    loadJson() {
        resources.load('configs/Path' + this.jsonIndex, JsonAsset, (err, asset) => {
            PlayerDataMgr.pathArr.push(asset.json)
            this.jsonIndex++
            if (this.jsonIndex > 5) {
                console.log(PlayerDataMgr.pathArr)
                return
            }
            else this.loadJson()
        })
    }

    init() {
        this.schedule(() => {
            if (this.hadLoaded && this.sdkInited) {
                this.unscheduleAllCallbacks()
                director.loadScene('Game')
            }
        })
    }

    update(deltaTime: number) {
        this.pBar.progress += 0.002
        if (this.hadLoaded && this.sdkInited) {
            if (this.pBar.progress > 1) this.pBar.progress = 1
        } else {
            if (this.pBar.progress > 0.9) this.pBar.progress = 0.9
        }
    }
}

