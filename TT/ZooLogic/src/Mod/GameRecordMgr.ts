import WxApi from "../Libs/WxApi"

export default class GameRecordMgr {
    static videoPath: string = ''

    private static get mgr(): any {
        return Laya.Browser.window['tt'].getGameRecorderManager()
    }

    static recordStart() {
        if (!Laya.Browser.onTTMiniGame) return
        this.videoPath = ''
        this.mgr.start({
            duration: 300
        })
        WxApi.OpenAlert('录屏开始')
    }

    static recordPause() {
        if (!Laya.Browser.onTTMiniGame) return
        this.mgr.pause()
    }

    static recordResume() {
        if (!Laya.Browser.onTTMiniGame) return
        this.mgr.resume()
    }

    static recordStop() {
        if (!Laya.Browser.onTTMiniGame) return
        this.mgr.onStop((res) => {
            console.log(res.videoPath);
            // do something;
            this.videoPath = res.videoPath
        });
        this.mgr.stop()
        WxApi.OpenAlert('录屏结束')
    }

    static shareVideo(cb?: Function) {
        if (!Laya.Browser.onTTMiniGame) return
        Laya.Browser.window['tt'].shareAppMessage({
            title: "怪物对决",
            channel: "video",
            extra: {
                videoPath: this.videoPath, //录屏后得到的文件地址
                withVideoId: true,
                hashtag_list: ["#怪物对决", "#抖音小游戏"]
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