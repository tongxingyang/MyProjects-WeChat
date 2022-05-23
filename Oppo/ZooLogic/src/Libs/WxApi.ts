
export default class WxApi {
    public static UnityPath: string = 'LayaScene_SampleScene/Conventional/'

    public static version: string = ''
    public static isVibrate: boolean = true
    public static isMusic: boolean = true
    public static OnShowFun: Function = null

    //微信登录
    public static LoginWx(cb: Function) {
        if (!Laya.Browser.onQGMiniGame) return
        let launchData = Laya.Browser.window.qg.getLaunchOptionsSync();
        Laya.Browser.window.qg.login({
            success(res) {
                if (res.code) {
                    console.log('res.code:', res.code);
                    if (cb) {
                        cb(res.code, launchData.query)
                    }
                }
            }
        })
    }

    //监听启动
    //Usually get fun(obj) obj.query
    public static GetLaunchParam(fun: Function) {
        if (Laya.Browser.onQGMiniGame) {
            this.OnShowFun = fun
            fun(this.GetLaunchPassVar())
            Laya.Browser.window.qg.onShow((para) => {
                //check onshow Fun
                if (this.OnShowFun != null) {
                    this.OnShowFun(para)
                }
                console.log("wx on show")
            })
        }
    }
    public static GetLaunchPassVar(): any {
        if (Laya.Browser.onQGMiniGame) {
            return Laya.Browser.window.qg.getLaunchOptionsSync()
        } else {
            return null
        }
    }

    public static WxOnHide(fun: Function) {
        if (Laya.Browser.onQGMiniGame) {
            Laya.Browser.window.qg.onHide(fun)
        }
    }
    public static WxOffHide(fun: Function) {
        if (fun && Laya.Browser.onQGMiniGame) {
            Laya.Browser.window.qg.offHide(fun)
        }
    }
    public static WxOnShow(fun: Function) {
        if (Laya.Browser.onQGMiniGame) {
            Laya.Browser.window.qg.onShow(fun)
        }
    }
    public static WxOffShow(fun: Function) {
        if (fun && Laya.Browser.onQGMiniGame) {
            Laya.Browser.window.qg.offShow(fun)
        }
    }

    //网络请求
    public static httpRequest(url: string, params: any, type: string = 'get', completeHandler?: Function) {
        var xhr: Laya.HttpRequest = new Laya.HttpRequest();
        xhr.http.timeout = 5000;//设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, completeHandler);
        xhr.once(Laya.Event.ERROR, this, this.httpRequest, [url, params, type, completeHandler]);
        if (type == "get") {
            xhr.send(url + '?' + params, "", type, "text");
        } else if (type == "post") {
            xhr.send(url, JSON.stringify(params), type, "text");
        }

    }

    //震动
    public static DoVibrate(isShort: boolean = true) {
        if (Laya.Browser.onQGMiniGame && this.isVibrate) {
            if (isShort) {
                Laya.Browser.window.qg.vibrateShort()
            } else {
                Laya.Browser.window.qg.vibrateLong()
            }
        }
    }

    //系统提示
    public static OpenAlert(msg: string, dur: number = 2000, icon: boolean = false) {
        if (Laya.Browser.onQGMiniGame) {
            Laya.Browser.window.qg.showToast({
                title: msg,//提示文字
                duration: dur,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: icon ? 'success' : 'none', //图标，支持"success"、"loading"  
            })
        }
    }

    //预览图片
    public static preViewImage(url) {
        if (Laya.Browser.onQGMiniGame) {
            Laya.Browser.window.qg.previewImage({
                current: url, // 当前显示图片的http链接
                urls: [url] // 需要预览的图片http链接列表
            })
        }
    }

    
}