
export default class FdAd {
    static bannerIdArr: string[] = ["adunit-5537ccffe5089e5c"];
    static videoId = "adunit-52288ae43a30597b";
    static gridId = "adunit-21325c229f875aa3";

    static inidAd() {
        if (!Laya.Browser.onWeiXin) return;
        this.initBanner();
        this.createVideoAd();
    }

    static sysInfo: any;
    static getSystemInfoSync() {
        if (!Laya.Browser.onWeiXin) return;
        if (!this.sysInfo) {
            this.sysInfo = wx.getSystemInfoSync();
        }
        return this.sysInfo;
    }

    //#region Banner广告
    static bannerAds: any[] = [];
    static bannerIndex: number = 0;
    static initBanner() {
        if (!Laya.Browser.onWeiXin) return;
        for (let i = 0; i < this.bannerIdArr.length; i++) {
            let bannerAd: any = this.createBannerAd(i)
            this.bannerAds.push(bannerAd)
        }
    }

    static showBannerAd() {
        if (!Laya.Browser.onWeiXin) return;

        this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].show()
    }

    static hideBannerAd() {
        if (!Laya.Browser.onWeiXin) {
            return;
        }
        this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide()
    }

    static createBannerAd(index: number, isShow: boolean = false) {
        if (!Laya.Browser.onWeiXin) return;

        let sysInfo = this.getSystemInfoSync();
        let bannerAd = Laya.Browser.window.wx.createBannerAd({
            adUnitId: this.bannerIdArr[index],
            style: {
                top: sysInfo.screenHeight * 0.8,
                width: 300,
                left: sysInfo.screenWidth / 2 - 150
            },
            adIntervals: 30
        });
        bannerAd.onLoad(() => {
            if (isShow) {
                bannerAd.show()
            }
            console.log("Banner广告加载成功");
        });
        bannerAd.onError(err => {
            console.error("Banner广告加载失败", JSON.stringify(err));
        });
        bannerAd.onResize(res => {
            let realHeight = bannerAd.style.realHeight + 0.1;
            bannerAd.style.top = sysInfo.screenHeight - realHeight;
        });
        return bannerAd;
    }

    //#endregion

    //#region 激励视频广告
    static videoAd: any;
    static videoFinishCallback: Function;
    static videoCancelCallback: Function;

    static isExistVideoAd: boolean = false;
    static createVideoAd() {
        if (Laya.Browser.onWeiXin) {
            var self = this;
            var videoAd = this.videoAd;
            if (videoAd != null) {
                videoAd.offLoad(onLoadVideo);
                videoAd.offError(onErrorVideo);
                videoAd.offClose(onCloseVideo);
            }

            var videoAd = Laya.Browser.window.wx.createRewardedVideoAd({ adUnitId: self.videoId });
            videoAd.onLoad(onLoadVideo);
            videoAd.onError(onErrorVideo);
            videoAd.onClose(onCloseVideo);
            this.videoAd = videoAd;
        }

        function onLoadVideo() {
            console.log('video 加载成功');
            self.isExistVideoAd = true;
        }

        function onErrorVideo(err) {
            console.error('video 加载错误', err);
            self.isExistVideoAd = false;
        }

        function onCloseVideo(res) {
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            let isEnded = (res && res.isEnded || res === undefined) ? true : false;
            if (isEnded) {
                //观看视频成功次数埋点
                self.videoFinishCallback && self.videoFinishCallback()
                self.videoFinishCallback = null
            }
            self.videoCancelCallback && self.videoCancelCallback()
            self.videoCancelCallback = null
        }
    }

    static showVideoAd(finishCB?: Function, cancelCB?: Function) {
        if (!Laya.Browser.onWeiXin) {
            finishCB && finishCB();
            cancelCB && cancelCB();
            return;
        }

        if (!Laya.Browser.onWeiXin) return;
        let self = this
        this.videoFinishCallback = finishCB;
        this.videoCancelCallback = cancelCB;
        if (!this.isExistVideoAd) {
            this.createVideoAd()
        }
        if (Laya.Browser.onWeiXin) {
            var videoAd = this.videoAd;
            videoAd.show().then(() => { }).catch(err => {
                videoAd.load().then(() => videoAd.show()).catch(err => {
                    self.videoCancelCallback && self.videoCancelCallback()
                    self.videoCancelCallback = null
                });
            });
        }
    }

    static destroyVideoAd() {
        if (!this.videoAd) return;
        this.videoAd.destroy();
        this.videoAd = null;
    }
    //#endregion



    //#region 格子广告
    static gridAd;
    static initGridCB: Function;

    static initGridAD(cb?: Function, left = 0, top = 0) {
        if (!Laya.Browser.onWeiXin) {
            cb && cb(false);
            return;
        }

        this.CreateGridAD(this.gridId, left, top);
        if (cb) { this.initGridCB = cb; }
    }

    /**创建并展示格子 */
    private static CreateGridAD(id, posx, posy) {
        try {
            if (Laya.Browser.window.wx.createCustomAd) {
                var grid = Laya.Browser.window.wx.createCustomAd({
                    adUnitId: id,
                    adIntervals: 31,
                    style: {
                        left: posx,
                        top: posy,
                        width: Laya.Browser.clientWidth / 2.2
                    }
                });

                grid.onLoad(load => {
                    FdAd.gridAd = grid;
                    grid.show();

                    if (FdAd.initGridCB) {
                        FdAd.initGridCB(true);
                        FdAd.initGridCB = null;
                    }
                });

                grid.onError(err => {
                    console.error(err);

                    if (FdAd.initGridCB) {
                        FdAd.initGridCB(false);
                        FdAd.initGridCB = null;
                    }
                })
            }
        }
        catch (err) {
            console.log("原生格子报错" + err);

            if (FdAd.initGridCB) {
                FdAd.initGridCB(false);
                FdAd.initGridCB = null;
            }
        }
    }

    static showGridAD() {
        if (this.gridAd) {
            this.gridAd.show();
            return true;
        }
        return false;
    }

    static hideGridAD() {
        if (this.gridAd) {
            this.gridAd.hide();
        }

        //防止没关掉
        Laya.timer.once(500, this, () => {
            if (this.gridAd) {
                this.gridAd.hide();
            }
        });
    }
    //#endregion
}