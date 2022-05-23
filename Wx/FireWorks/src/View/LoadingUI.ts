import GameLogic from "../Crl/GameLogic"
import WxApi from "../Libs/WxApi"
import FdMgr from "../FanDong/FdMgr"

export default class LoadingUI extends Laya.Scene {
    constructor() {
        super()
    }

    bar: Laya.ProgressBar

    //perNum: Laya.Label

    onOpened() {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        if (!Laya.Browser.onWeiXin) {
            localStorage.clear()
        }
        FdMgr.init(() => {
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
        this.onComplete()
        return
        //预加载3d资源
        var resUrl = [
            WxApi.UnityPath + 'PropNode.lh'
        ];
        Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
    }

    onComplete() {
        FdMgr.loadGame(() => {
            GameLogic.Share.initScene()
        })
    }

    onProgress(value) {
        //this.bar.value = value
        //this.perNum.text = (50 + Math.floor(value * 50)).toString() + '%'
    }
}