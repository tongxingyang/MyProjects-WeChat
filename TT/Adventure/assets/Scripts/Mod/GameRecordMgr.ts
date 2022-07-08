import { BYTEDANCE } from "cc/env"
import PlatformApi from "./PlatformApi"

export default class GameRecordMgr {
    static videoPath: string = ''

    private static isStarted: boolean = false

    private static get mgr(): any {
        return window['tt'].getGameRecorderManager()
    }

    static recordStart() {
        if (!BYTEDANCE || this.isStarted) return
        this.isStarted = true
        this.videoPath = ''
        this.mgr.start({
            duration: 300
        })
        PlatformApi.OpenAlert('录屏开始')
    }

    static recordPause() {
        if (!BYTEDANCE) return
        this.mgr.pause()
    }

    static recordResume() {
        if (!BYTEDANCE) return
        this.mgr.resume()
    }

    static recordStop() {
        if (!BYTEDANCE) return
        this.isStarted = false
        this.mgr.onStop((res) => {
            console.log(res.videoPath);
            // do something;
            this.videoPath = res.videoPath
        });
        this.mgr.stop()
        PlatformApi.OpenAlert('录屏结束')
    }

    static shareVideo(cb?: Function) {
        if (!BYTEDANCE) return
        window['tt'].shareAppMessage({
            title: "搞怪大作战",
            channel: "video",
            extra: {
                videoPath: this.videoPath, //录屏后得到的文件地址
                withVideoId: true,
                hashtag_list: ["#搞怪大作战", "#抖音小游戏"]
            },
            success(res) {
                // Laya.Browser.window['tt'].showModal({
                //     title: "分享成功",
                //     content: JSON.stringify(res),
                // });
            },
            fail(e) {
                // Laya.Browser.window['tt'].showModal({
                //     title: "分享失败",
                //     content: JSON.stringify(e),
                // });
            },
            complete: () => {
                cb && cb()
            }
        });
    }
}