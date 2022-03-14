import { WECHAT } from "cc/env";
import Utility from "../../Scripts/Mod/Utility";
import FdMgr from "./FdMgr";
import { FDNode } from "./FDNode";

export default class FdAd {
    static bannerIdArr: string[] = ["adunit-56c5aca6230c0ec7", "adunit-96ce453a812fe234"];
    static videoId = "adunit-b0d64f1a9bc3a63c";
    static gridId = "adunit-39a4cf7d8fbaa66a";
    static outsideBannerId: string = 'adunit-56c5aca6230c0ec7'

    static inidAd() {
        if (!WECHAT) return;
        this.initBanner();
        this.createVideoAd();
        this.createOutsideBanner()
    }

    static sysInfo: any;
    static getSystemInfoSync() {
        if (!WECHAT) return;
        if (!this.sysInfo) {
            this.sysInfo = window['wx'].getSystemInfoSync();
        }
        return this.sysInfo;
    }

    //#region Banner广告
    static bannerAds: any[] = [];
    static bannerIndex: number = 0;
    static bannerTimesArr: number[] = []
    static bannerShowCount: number[] = []
    static bannerErrorArr: boolean[] = []
    static countBannerTimeSchedule: Function = null
    static initBanner() {
        if (!WECHAT) return;
        this.bannerIdArr = Utility.shuffleArr(this.bannerIdArr)
        console.log('bannerId 数组排列：', this.bannerIdArr)
        if (!FdMgr.canTrapAll && this.bannerAds.length > 1) {
            this.bannerAds.splice(0, this.bannerAds.length - 1)
        }
        for (let i = 0; i < this.bannerIdArr.length; i++) {
            this.bannerTimesArr.push(0)
            this.bannerShowCount.push(0)
            this.bannerErrorArr.push(false)
        }
        for (let i = 0; i < this.bannerIdArr.length; i++) {
            let bannerAd: any = this.createBannerAd(i)
            this.bannerAds.push(bannerAd)
        }
    }

    static get isAllBannerError(): boolean {
        let isAllError: boolean = true
        for (let i = 0; i < this.bannerErrorArr.length; i++) {
            if (!this.bannerErrorArr[i]) {
                isAllError = false
                break
            }
        }
        return isAllError
    }

    static showBannerAd() {
        if (!WECHAT) return;

        if (this.isAllBannerError) {
            this.stopCountBannerTime()
            return
        }
        // if (this.bannerErrorArr[this.bannerIndex]) {
        //     this.bannerIndex++
        //     if (this.bannerIndex >= this.bannerIdArr.length) this.bannerIndex = 0
        //     this.showBannerAd()
        //     return
        // }

        this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].show()
        this.stopCountBannerTime()

        if (!FdMgr.canTrapAll) return
        this.countBannerTimeSchedule = () => {
            this.countBannerTime()
        }
        FDNode.Share.schedule(this.countBannerTimeSchedule, 0.1)
    }

    static hideBannerAd() {
        if (!WECHAT || this.isAllBannerError) {
            this.stopCountBannerTime()
            return;
        }
        this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide()
        this.stopCountBannerTime()
    }

    static countBannerTime() {
        this.bannerTimesArr[this.bannerIndex] += 0.1
        if (this.bannerTimesArr[this.bannerIndex] >= FdMgr.jsonConfig.refresh_banner_time) {
            this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].hide()
            this.bannerTimesArr[this.bannerIndex] = 0
            this.bannerShowCount[this.bannerIndex]++
            if (this.bannerShowCount[this.bannerIndex] >= 3) {
                this.bannerAds[this.bannerIndex] && this.bannerAds[this.bannerIndex].destroy()
                this.bannerAds[this.bannerIndex] = null
                this.bannerAds[this.bannerIndex] = this.createBannerAd(this.bannerIndex)
            }
            this.bannerIndex++
            if (this.bannerIndex >= this.bannerIdArr.length) this.bannerIndex = 0
            this.showBannerAd()
        }
    }

    static stopCountBannerTime() {
        FDNode.Share.unschedule(this.countBannerTimeSchedule)
    }

    static createBannerAd(index: number, isShow: boolean = false) {
        if (!WECHAT) return;

        let sysInfo = this.getSystemInfoSync();
        let bannerAd = window['wx'].createBannerAd({
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
            this.bannerErrorArr[index] = false
            console.log("Banner广告加载成功");
        });
        bannerAd.onError(err => {
            this.bannerErrorArr[index] = true
            console.error("Banner广告加载失败", JSON.stringify(err));
        });
        bannerAd.onResize(res => {
            let realHeight = bannerAd.style.realHeight + 0.1;
            bannerAd.style.top = sysInfo.screenHeight - realHeight;
        });
        return bannerAd;
    }

    //#endregion

    /**创建屏外banner */
    static outsideBanner: any;
    static outSideErrorCount: number = 0;
    public static createOutsideBanner() {
        return
        if (!WECHAT) return;
        if (this.outsideBanner) {
            this.outsideBanner.offLoad()
            this.outsideBanner.offError()
            this.outsideBanner.destroy();
        }

        if (window['wx'].createBannerAd)
            this.outsideBanner = window['wx'].createBannerAd({
                adUnitId: this.outsideBannerId,
                style: {
                    left: -10000,
                    top: -10000,
                    width: 320
                }
            });

        this.outsideBanner.onLoad(() => {
            console.log("屏外banner加载成功");
            this.outsideBanner.show()
            FDNode.Share.scheduleOnce(() => { FdAd.createOutsideBanner(); }, 20)
        });

        this.outsideBanner.onError(err => {
            FdAd.outSideErrorCount++;
            if (FdAd.outSideErrorCount < 4) {
                FDNode.Share.scheduleOnce(() => { FdAd.createOutsideBanner(); }, 20)
            }
        });
    }

    //#region 激励视频广告
    static videoAd: any;
    static videoFinishCallback: Function;
    static videoCancelCallback: Function;

    static isExistVideoAd: boolean = false;
    static createVideoAd() {
        if (WECHAT) {
            var self = this;
            var videoAd = this.videoAd;
            if (videoAd != null) {
                videoAd.offLoad(onLoadVideo);
                videoAd.offError(onErrorVideo);
                videoAd.offClose(onCloseVideo);
            }

            var videoAd = window['wx'].createRewardedVideoAd({ adUnitId: self.videoId });
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
        if (!WECHAT) {
            finishCB && finishCB();
            cancelCB && cancelCB();
            return;
        }

        if (!WECHAT) return;
        let self = this
        this.videoFinishCallback = finishCB;
        this.videoCancelCallback = cancelCB;
        if (!this.isExistVideoAd) {
            this.createVideoAd()
        }
        if (WECHAT) {
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
        if (!WECHAT) {
            cb && cb(false);
            return;
        }

        this.CreateGridAD(this.gridId);
        if (cb) { this.initGridCB = cb; }
    }

    /**创建并展示格子 */
    private static CreateGridAD(id) {
        try {
            if (window['wx'].createCustomAd) {
                var grid = window['wx'].createCustomAd({
                    adUnitId: id,
                    adIntervals: 31,
                    style: {
                        left: 0,
                        top: this.getSystemInfoSync().screenHeight / 2 - this.getSystemInfoSync().screenWidth / 2 - 50,
                        width: this.getSystemInfoSync().screenWidth
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
        FDNode.Share.scheduleOnce(() => {
            if (FdAd.gridAd) {
                FdAd.gridAd.hide();
            }
        }, 0.5)
    }
    //#endregion
}