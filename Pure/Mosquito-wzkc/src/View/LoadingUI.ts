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

    //perNum: Laya.Label

    onOpened() {
        if (!Laya.Browser.onWeiXin) {
            localStorage.clear()
        }
        this.loadJsonData(1)
        Laya.timer.frameLoop(1, this, () => {
            this.bar.value += 0.01
        })
    }

    onClosed() {

    }

    maxGrade: number = 5
    loadJsonData(index: number) {
        //加载JSON
        Utility.loadJson('res/config/Level' + index + '.json', (data) => {
            PlayerDataMgr.levelDataArr.push(data)
            index++
            if (index > this.maxGrade) {
                this.loadRes()
                console.log('levelDataArr:', PlayerDataMgr.levelDataArr)
                return
            } else {
                this.loadJsonData(index)
            }
        })
    }

    loadRes() {
        //预加载3d资源
        var resUrl = [
            WxApi.UnityPath + 'Runer_1.lh',
            WxApi.UnityPath + 'Hammer_1.lh',
            WxApi.UnityPath + 'Slice_1.lh',
            WxApi.UnityPath + 'Slice_2.lh',
            WxApi.UnityPath + 'Floor_1.lh',
            WxApi.UnityPath + 'Floor_Finsh.lh',
            WxApi.UnityPath + 'Time_1.lh',
            WxApi.UnityPath + 'mosquito_1.lh',
            WxApi.UnityPath + 'mosquitoFX.lh'
        ];
        Laya.loader.create(resUrl, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress));
    }

    onComplete() {
        SoundMgr.instance.initLoading(() => {
            GameLogic.Share.initScene()
        })
    }

    onProgress(value) {
        //this.bar.value = value
        //this.perNum.text = (50 + Math.floor(value * 50)).toString() + '%'
    }
}