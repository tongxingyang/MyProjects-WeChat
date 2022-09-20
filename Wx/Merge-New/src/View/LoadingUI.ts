import GameLogic from "../Crl/GameLogic"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import SGMgr from "../SGSDK/SGMgr"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import Utility from "../Mod/Utility"

export default class LoadingUI extends Laya.Scene {
    constructor() {
        super()
    }

    bar: Laya.ProgressBar

    //perNum: Laya.Label

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        SGMgr.init(() => {
            if (Laya.Browser.onWeiXin)
                this.loadSubpackage()
            else
                this.loadRes()
        })

        Laya.timer.frameLoop(1, this, () => {
            this.bar.value += 0.01
        })
    }

    onClosed() {

    }

    loadSubpackage() {
        const loadTask = Laya.Browser.window.wx.loadSubpackage({
            name: 'unity', // name 可以填 name 或者 root
            success: (res) => {
                // 分包加载成功后通过 success 回调
                this.loadRes()
            },
            fail: (res) => {
                // 分包加载失败通过 fail 回调
                this.loadSubpackage()
            }
        })

        loadTask.onProgressUpdate(res => {
            console.log('下载进度', res.progress)
            console.log('已经下载的数据长度', res.totalBytesWritten)
            console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
        })
    }

    loadRes() {
        //预加载3d资源
        var resUrl = [
            WxApi.UnityPath + 'Body_1.lh',
            WxApi.UnityPath + 'Body_2.lh',
            WxApi.UnityPath + 'Body_3.lh',
            WxApi.UnityPath + 'Body_4.lh',
            WxApi.UnityPath + 'Body_5.lh',
            WxApi.UnityPath + 'Body_6.lh',
            WxApi.UnityPath + 'Body_7.lh',
            WxApi.UnityPath + 'Body_8.lh',
            WxApi.UnityPath + 'Hand_1_L.lh',
            WxApi.UnityPath + 'Hand_2_L.lh',
            WxApi.UnityPath + 'Hand_3_L.lh',
            WxApi.UnityPath + 'Hand_4_L.lh',
            WxApi.UnityPath + 'Hand_5_L.lh',
            WxApi.UnityPath + 'Hand_6_L.lh',
            WxApi.UnityPath + 'Hand_7_L.lh',
            WxApi.UnityPath + 'Hand_8_L.lh',
            WxApi.UnityPath + 'Hand_9_L.lh',
            WxApi.UnityPath + 'Hand_10_L.lh',
            WxApi.UnityPath + 'Hand_11_L.lh',
            WxApi.UnityPath + 'Hand_12_L.lh',
            WxApi.UnityPath + 'Hand_13_L.lh',
            WxApi.UnityPath + 'Hand_14_L.lh',
            WxApi.UnityPath + 'EffectNode.lh'
        ];
        Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
    }

    onComplete() {
        SGMgr.loadGame(() => {
            SoundMgr.instance.initLoading(() => {
                GameLogic.Share.initScene()
            })
        })
    }

    onProgress(value) {
        //this.bar.value = value
        //this.perNum.text = (50 + Math.floor(value * 50)).toString() + '%'
    }
}