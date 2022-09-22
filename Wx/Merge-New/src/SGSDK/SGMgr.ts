import SGAD from "./SGAD";
import SGConfig from "./SGConfig";

export default class SGMgr {
    private static gameCount: number = 1

    static init(cb: Function) {
        if (!Laya.Browser.onWeiXin) {
            cb && cb()
            return
        }
        SGConfig.initConfigData(() => {
            SGAD.inidAd(cb)
            if (SGConfig.data.front_leave_return_switch) {
                Laya.Browser.window.wx.onShow(() => { SGAD.showInterstitialAd() })
            }
        })
    }

    static showLoading(cb?: Function) {
        if (!Laya.Browser.onWeiXin) {
            cb && cb()
            return
        }
        if (SGConfig.data.front_video_before_switch) {
            SGAD.showVideoAd(null, null, () => {
                this.showRemen(0, () => {
                    this.showBoxMiddle(cb)
                })
            })
        } else {
            this.showRemen(0, () => {
                this.showBoxMiddle(cb)
            })
        }
    }
    static inHome() {
        if (!Laya.Browser.onWeiXin) { return }
        if (SGConfig.isShowHomeBanner)
            SGAD.showBannerAd()
        if (SGConfig.data.front_side_switch)
            SGAD.visibleSideGridAd(true)
        this.visibleHomeUI(true)
    }
    static inShop() {
        if (!Laya.Browser.onWeiXin) { return }
        if (!SGConfig.isShowShopBanner)
            SGAD.hideBannerAd()
        SGAD.visibleSideGridAd(false)
        this.visibleHomeUI(false)
    }
    static moreGame() {
        SGAD.hideBannerAd()
        SGAD.visibleSideGridAd(false)
        this.showRemen(1, () => {
            if (SGConfig.isShowHomeBanner)
                SGAD.showBannerAd()
            if (SGConfig.data.front_side_switch)
                SGAD.visibleSideGridAd(true)
        })
    }
    static startGame(cb?: Function) {
        if (!Laya.Browser.onWeiXin) {
            cb && cb()
            return
        }
        SGAD.hideBannerAd()
        SGAD.visibleSideGridAd(false)
        this.visibleHomeUI(false)
        if (SGConfig.data.front_video_begin_switch && this.gameCount >= SGConfig.data.front_video_begin_level) {
            SGAD.showVideoAd(null, null, () => {
                this.showRemen(1, () => {
                    this.showSkin(() => {
                        this.showBoxBottom(0, cb)
                    })
                })
            })
        } else {
            this.showRemen(1, () => {
                this.showSkin(() => {
                    this.showBoxBottom(0, cb)
                })
            })
        }
    }
    static inGame() {
        if (!Laya.Browser.onWeiXin) { return }
        if (SGConfig.data.front_game_banner_switch)
            SGAD.showBannerAd()
        if (SGConfig.data.front_game_dangezi_switch)
            SGAD.visibleGameGridAd(true);
    }
    static gameOver(cb?: Function) {
        if (!Laya.Browser.onWeiXin) {
            cb && cb()
            return
        }
        SGAD.hideBannerAd()
        SGAD.visibleGameGridAd(false);
        if (SGConfig.data.front_chaping_remen_switch)
            SGAD.showInterstitialAd()
        this.showRemen(2, () => {
            this.showBoxBottom(1, cb)
        })
    }
    static inFinish() {
        if (!Laya.Browser.onWeiXin) { return }
        SGAD.showBannerAd()
        if (SGConfig.isPortrait && SGConfig.data.front_jiesuanye_duogezi_switch)
            SGAD.visibleFinishGridAd(true)
        if (SGConfig.data.front_jiesuanye_dangezi_switch)
            SGAD.visibleGameGridAd(true)
    }
    static backToHome(cb?: Function) {
        if (!Laya.Browser.onWeiXin) {
            cb && cb()
            return
        }
        SGAD.hideBannerAd()
        SGAD.visibleFinishGridAd(false)
        SGAD.visibleGameGridAd(false)
        if (SGConfig.data.front_video_jiesuanye_switch && this.gameCount >= SGConfig.data.front_video_jiesuanye_level) {
            SGAD.showVideoAd(null, null, () => {
                this.showRemen(3, () => {
                    cb && cb()
                    if (SGConfig.data.front_chaping_home_switch) {
                        Laya.timer.once(500, this, () => {
                            SGAD.showInterstitialAd()
                        })
                    }
                })
            })
        }
    }

    //热门页
    private static showRemen(index: RemenIndex, cb?: Function) {
        let v = false
        switch (index) {
            case RemenIndex.RM_rmxyx:
                v = SGConfig.data.front_small_remen_switch
                break
            case RemenIndex.RM_rmtj:
                v = SGConfig.data.front_tuijian_remen_switch
                break
            case RemenIndex.RM_rmyx:
                v = SGConfig.data.front_game_remen_switch
                break
            case RemenIndex.RM_rmxcx:
                v = SGConfig.data.front_order_remen_switch
                break
        }
        if (v) {
            Laya.Scene.open(SceneType.SGRemen, false, { ccb: cb, index: index })
        } else {
            cb && cb()
        }
    }
    //中间格子宝箱
    private static showBoxMiddle(cb?: Function) {
        if (SGConfig.data.front_box_before_switch) {
            Laya.Scene.open(SceneType.SGBoxMiddle, false, { ccb: cb })
        } else {
            cb && cb()
        }
    }

    //底部宝箱
    private static showBoxBottom(index: number, cb?: Function) {
        let v = false
        let v1 = false;
        switch (index) {
            case 0:
                v = SGConfig.data.front_box_dangezi_switch
                if (SGConfig.data.front_box_level_interval <= 0) v1 = this.gameCount >= SGConfig.data.front_box_level
                else v1 = this.gameCount >= SGConfig.data.front_box_level &&
                    Math.floor((this.gameCount - SGConfig.data.front_box_level) % (SGConfig.data.front_box_level_interval + 1)) == 0
                v = v && v1;
                break
            case 1:
                v = SGConfig.data.front_box_second_switch
                if (SGConfig.data.front_box_second_level_interval <= 0) v1 = this.gameCount >= SGConfig.data.front_box_second_level
                else v1 = this.gameCount >= SGConfig.data.front_box_second_level &&
                    Math.floor((this.gameCount - SGConfig.data.front_box_second_level) % (SGConfig.data.front_box_second_level_interval + 1)) == 0
                v = v && v1;
                break
        }
        if (v) {
            Laya.Scene.open(SceneType.SGBoxBottom, false, { ccb: cb })
        } else {
            cb && cb()
        }
    }

    //皮肤页
    private static showSkin(cb?: Function) {
        if (SGConfig.data.front_pifu_switch) {
            Laya.Scene.open(SceneType.SGSkin, false, { ccb: cb })
        } else {
            cb && cb()
        }
    }

    //首页
    private static visibleHomeUI(v = true) {
        if (v)
            Laya.Scene.open(SceneType.SGHomeUI, false)
        else
            Laya.Scene.close(SceneType.SGHomeUI)
    }


}

export enum SceneType {
    SGRemen = "SGScene/SGRemen.scene",
    SGBoxBottom = "SGScene/SGBoxBottom.scene",
    SGBoxMiddle = "SGScene/SGBoxMiddle.scene",
    SGHomeUI = "SGScene/SGHomeUI.scene",
    SGSkin = "SGScene/SGSkin.scene"
}

export enum RemenIndex {
    RM_rmxyx = 0,
    RM_rmtj,
    RM_rmyx,
    RM_rmxcx
}