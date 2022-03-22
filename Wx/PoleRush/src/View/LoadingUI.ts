import WxApi from "../Libs/WxApi";
import GameLogic from "../Crl/GameLogic";
import Utility from "../Mod/Utility";
import PlayerDataMgr from "../Libs/PlayerDataMgr";
import FdMgr from "../FanDong/fdMgr";

export default class LoadingUI extends Laya.Scene {
    constructor() {
        super()
    }

    bar: Laya.ProgressBar
    loadResCompleted: boolean = false
    FdIsCompleted: boolean = false

    //perNum: Laya.Label

    onOpened() {
        FdMgr.init(() => {
            FdMgr.loadGame(() => {
                this.FdIsCompleted = true
            })
        })

        this.loadJsonData()
        Laya.timer.frameLoop(1, this, () => {
            if (this.loadResCompleted && this.FdIsCompleted) {
                Laya.timer.clearAll(this)
                this.goToStart()
            }
        })
    }

    onClosed() {

    }

    count: number = 0
    loadJsonData() {
        //加载JSON
        for (let i = 1; i <= 10; i++) {
            Utility.loadJson('res/config/Road1/' + i + '.json', (data) => {
                PlayerDataMgr.roadArr1.push(data)
                this.loadJsonComplete()
            })
        }
        for (let i = 1; i <= 10; i++) {
            Utility.loadJson('res/config/Road2/' + i + '.json', (data) => {
                PlayerDataMgr.roadArr2.push(data)
                this.loadJsonComplete()
            })
        }
        for (let i = 1; i <= 10; i++) {
            Utility.loadJson('res/config/Road3/' + i + '.json', (data) => {
                PlayerDataMgr.roadArr3.push(data)
                this.loadJsonComplete()
            })
        }
    }
    loadJsonComplete() {
        this.count++
        if (this.count >= 30) {
            console.log(PlayerDataMgr.roadArr1)
            console.log(PlayerDataMgr.roadArr2)
            console.log(PlayerDataMgr.roadArr3)
            if (Laya.Browser.onWeiXin)
                this.loadSubpackage()
            else
                this.loadRes()
        }
    }

    loadSubpackage() {
        const loadTask = Laya.Browser.window.wx.loadSubpackage({
            name: 'skin', // name 可以填 name 或者 root
            success: (res) => {
                // 分包加载成功后通过 success 回调
                const loadTask1 = Laya.Browser.window.wx.loadSubpackage({
                    name: 'unity', // name 可以填 name 或者 root
                    success: (res) => {
                        // 分包加载成功后通过 success 回调
                        this.loadRes()
                    },
                    fail: (res) => {
                        // 分包加载失败通过 fail 回调
                    }
                })

                loadTask1.onProgressUpdate(res => {
                    console.log('下载进度', res.progress)
                    console.log('已经下载的数据长度', res.totalBytesWritten)
                    console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
                })
            },
            fail: (res) => {
                // 分包加载失败通过 fail 回调
                this.loadSubpackage()
            }
        })
    }

    loadRes() {
        //预加载3d资源
        var resUrl = [
            WxApi.UnityPath + 'Bar_01.lh',
            WxApi.UnityPath + 'Box_01.lh',
            WxApi.UnityPath + 'Building_01.lh',
            WxApi.UnityPath + 'Hero_01.lh',
            WxApi.UnityPath + 'Jewel_01.lh',
            WxApi.UnityPath + 'Pole_01.lh',
            WxApi.UnityPath + 'Road_01.lh',
            WxApi.UnityPath + 'Road_02.lh',
            WxApi.UnityPath + 'Road_03.lh',
            WxApi.UnityPath + 'Road_Finish.lh',
            WxApi.UnityPath + 'Saw_01.lh',
            WxApi.UnityPath + 'Wall_01.lh',
            WxApi.UnityPath + 'Wall_02.lh',
            WxApi.UnityPath + 'Wall_03.lh',
            WxApi.UnityPath + 'Cyl_01.lh',
            WxApi.UnityPath + 'PropPole.lh'
        ];
        Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
    }

    onComplete() {
        this.loadResCompleted = true
        // FdMgr.loadGame(() => {
        //     GameLogic.Share.initScene()
        // })
    }

    goToStart() {
        GameLogic.Share.initScene()
    }

    onProgress(value) {
        this.bar.value = value
        //this.perNum.text = (50 + Math.floor(value * 50)).toString() + '%'
    }
}