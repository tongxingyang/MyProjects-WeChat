import { WECHAT } from "cc/env";
import SGAD from "./SGAD";
import { SGBoxBottom } from "./SGBoxBottom";
import { SGBoxMiddle } from "./SGBoxMiddle";
import SGConfig, { RemenIndex } from "./SGConfig";
import { SGNode } from "./SGNode";
import { SGRemen } from "./SGRemen";
import { SGSkin } from "./SGSkin";

export default class SGMgr {
    private static gameCount: number = 1

    static init(cb: Function) {
        if (!WECHAT) {
            cb && cb()
            return
        }
        SGConfig.initConfigData(() => {
            SGAD.initAd(() => {
                this.showLoading(cb)
            })
            if (SGConfig.data.front_leave_return_switch) {
                window['wx'].onShow(() => { SGAD.showInterstitialAd() })
            }
        })
    }

    static showLoading(cb?: Function) {
        if (!WECHAT) {
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
        if (!WECHAT) { return }
        if (SGConfig.isShowHomeBanner)
            SGAD.showBannerAd()
        if (SGConfig.data.front_side_switch)
            SGAD.visibleSideGridAd(true)
        this.visibleHomeUI(true)
    }
    static inShop() {
        if (!WECHAT) { return }
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
        }, true)
    }
    static startGame(cb?: Function) {
        if (!WECHAT) {
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
        if (!WECHAT) { return }
        if (SGConfig.data.front_game_banner_switch)
            SGAD.showBannerAd()
        else
            SGAD.hideBannerAd()
        if (SGConfig.data.front_game_dangezi_switch)
            SGAD.visibleGameGridAd(true);
    }
    static gameOver(cb?: Function) {
        if (!WECHAT) {
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
        if (!WECHAT) { return }
        SGAD.showBannerAd()
        if (SGConfig.isPortrait && SGConfig.data.front_jiesuanye_duogezi_switch)
            SGAD.visibleFinishGridAd(true)
        if (SGConfig.data.front_jiesuanye_dangezi_switch)
            SGAD.visibleGameGridAd(true)
    }
    static backToHome(cb?: Function) {
        if (!WECHAT) {
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
                        SGNode.Share.scheduleOnce(() => {
                            SGAD.showInterstitialAd()
                        }, 0.5)
                    }
                    this.gameCount++
                })
            })
        } else {
            this.showRemen(3, () => {
                cb && cb()
                if (SGConfig.data.front_chaping_home_switch) {
                    SGNode.Share.scheduleOnce(() => {
                        SGAD.showInterstitialAd()
                    }, 0.5)
                }
                this.gameCount++
            })
        }
    }

    //热门页
    private static showRemen(index: RemenIndex, cb?: Function, isMust: boolean = false) {
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
        if (v || isMust) {
            SGNode.Share.getUI(SGUIType.SGRemen).getComponent(SGRemen).showUI(index, cb)
        } else {
            cb && cb()
        }
    }
    //中间格子宝箱
    private static showBoxMiddle(cb?: Function) {
        if (SGConfig.data.front_box_before_switch) {
            SGNode.Share.getUI(SGUIType.SGBoxMiddle).getComponent(SGBoxMiddle).showUI(cb)
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
            SGNode.Share.getUI(SGUIType.SGBoxBottom).getComponent(SGBoxBottom).showUI(index, cb)
        } else {
            cb && cb()
        }
    }

    //皮肤页
    private static showSkin(cb?: Function) {
        if (SGConfig.data.front_pifu_switch) {
            SGNode.Share.getUI(SGUIType.SGSkin).getComponent(SGSkin).showUI(cb)
        } else {
            cb && cb()
        }
    }

    //首页
    private static visibleHomeUI(v = true) {
        SGNode.Share.getUI(SGUIType.SGHomeUI).active = v
    }


}

export enum SGUIType {
    SGRemen = "SGRemen",
    SGBoxBottom = "SGBoxBottom",
    SGBoxMiddle = "SGBoxMiddle",
    SGHomeUI = "SGHomeUI",
    SGSkin = "SGSkin"
}