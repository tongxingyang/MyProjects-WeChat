import SGAD from "./SGAD";
import SGConfig from "./SGConfig";

export default class SGMgr {
    static gameCount: number = 1

    static init(cb: Function) {
        SGConfig.initConfigData(cb)
    }

    private static showLoading(cb?: Function) {
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
    private static inHome() {

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
        switch (index) {
            case 0:
                v = SGConfig.data.front_box_dangezi_switch
                break
            case 1:
                v = SGConfig.data.front_box_second_switch
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
    private static showHomeUI() {
        Laya.Scene.open(SceneType.SGHomeUI, false)
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