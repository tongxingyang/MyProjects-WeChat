import GameLogic from "../Crl/GameLogic"
import PlayerDataMgr from "../Libs/PlayerDataMgr"
import WxApi from "../Libs/WxApi"
import SoundMgr from "../Mod/SoundMgr"
import Utility from "../Mod/Utility"

export default class LoadingUI extends Laya.Scene {
    constructor() {
        super()
    }

    bar: Laya.ProgressBar

    loadResCompleted: boolean = false
    FdIsCompleted: boolean = true

    //perNum: Laya.Label

    onOpened() {
        this.loadJsonData(1)
        Laya.timer.frameLoop(1, this, () => {
            if (this.loadResCompleted && this.FdIsCompleted) {
                Laya.timer.clearAll(this)
                this.goToStart()
            }
        })
    }

    onClosed() {

    }

    maxGrade: number = 10
    loadJsonData(index: number) {
        //加载JSON
        Utility.loadJson('res/config/Level' + index + '.json', (data) => {
            PlayerDataMgr.levelDataArr.push(data)
            index++
            if (index > this.maxGrade) {
                if (Laya.Browser.onWeiXin)
                    this.loadSubpackage()
                else
                    this.loadRes()
                console.log('levelDataArr:', PlayerDataMgr.levelDataArr)
                return
            } else {
                this.loadJsonData(index)
            }
        })
    }

    subArr: string[] = ['unity', 'shoesRes', 'skinRes', 'Sounds']
    subIndex: number = 0
    loadSubpackage() {
        const loadTask = Laya.Browser.window.wx.loadSubpackage({
            name: this.subArr[this.subIndex], // name 可以填 name 或者 root
            success: (res) => {
                // 分包加载成功后通过 success 回调
                if (this.subIndex >= this.subArr.length - 1) {
                    this.loadRes()
                } else {
                    this.subIndex++
                    this.loadSubpackage()
                }
            },
            fail: (res) => {
                // 分包加载失败通过 fail 回调
                //this.loadSubpackage()
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
            WxApi.UnityPath + 'Obs_01.lh',
            WxApi.UnityPath + 'AccNode.lh',
            WxApi.UnityPath + 'Heel.lh',
            WxApi.UnityPath + 'Man_01.lh',
            WxApi.UnityPath + 'Road_01.lh',
            WxApi.UnityPath + 'Wuman_01.lh',
            WxApi.UnityPath + 'Jewel_01.lh',
            WxApi.UnityPath + 'Key_01.lh',
            WxApi.UnityPath + 'Pole_01.lh',
            WxApi.UnityPath + 'Road_Finish.lh',
            WxApi.UnityPath + 'Road_Ts_01.lh',
            WxApi.UnityPath + 'Thorn_01.lh',
            WxApi.UnityPath + 'Board_01.lh',
            WxApi.UnityPath + 'Board_02.lh',
            WxApi.UnityPath + 'ShoesNode.lh',
            WxApi.UnityPath + 'HeelsNode.lh'
        ];
        Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
    }

    onComplete() {
        this.loadResCompleted = true
    }

    goToStart() {
        SoundMgr.instance.initLoading(() => {
            GameLogic.Share.initScene()
        })
    }

    onProgress(value) {
        this.bar.value = value
        //this.perNum.text = (50 + Math.floor(value * 50)).toString() + '%'
    }
}