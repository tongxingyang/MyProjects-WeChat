import SGAD from "./SGAD";
import SGConfig from "./SGConfig";
import SGMgr, { RemenIndex } from "./SGMgr";
import SGUtils from "./SGUtils";

export default class SGRemen extends Laya.Scene {
    constructor() {
        super()
    }
    btnContinue: Laya.Image
    title: Laya.Image

    ccb: Function = null;
    onShowCB: Function = null
    clickCount: number = 0
    index: RemenIndex = RemenIndex.RM_rmxyx

    type: number = 1
    isWuchu: boolean = false
    gridFuncName: string = ''

    onAwake(): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
    }
    onOpened(param?: any) {
        if (param && param.ccb) this.ccb = param.ccb;
        if (param && param.index != undefined) this.index = param.index;

        (this.title.getChildAt(this.index) as Laya.Image).visible = true;
        SGUtils.addClickEvent(this.btnContinue, this, this.btnContinueCB);

        SGAD.visibleFullGridAd(true)
        switch (this.index) {
            case 0:
                this.type = SGConfig.data.front_small_remen_number
                this.isWuchu = SGConfig.data.front_small_wuchu_switch
                break
            case 1:
                this.type = SGConfig.data.front_tuijian_remen_number
                this.isWuchu = SGConfig.data.front_tuijian_wuchu_switch
                break
            case 2:
                this.type = SGConfig.data.front_game_remen_number
                this.isWuchu = SGConfig.data.front_game_wuchu_switch
                break
            case 3:
                this.type = SGConfig.data.front_order_remen_number
                this.isWuchu = SGConfig.data.front_order_wuchu_switch
                break
        }
        if (this.isWuchu) {
            this.showHide()
        }

        this.onShowCB = () => {
            this.close()
        }
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].onShow(this.onShowCB)
        }
    }
    onClosed() {
        if (Laya.Browser.onWeiXin) {
            Laya.Browser.window['wx'].offShow(this.onShowCB)
        }
        Laya.timer.clearAll(this)
        SGAD.hideBannerAd()
        SGAD.visibleFullSingleGridAd(false);
        SGAD.visibleFullGridAd(false)
        Laya.timer.once(100, this, () => {
            this.ccb && this.ccb()
        })
        Laya.timer.once(1000, this, () => {
            SGAD.visibleFullSingleGridAd(false);
            SGAD.visibleFullGridAd(false)
        })
    }

    showHide() {
        if (this.type == 2) {
            SGAD.hideBannerAd();
            Laya.timer.once(SGConfig.data.front_gezi_time, this, () => {
                SGAD.showBannerAd();
                Laya.timer.once(800, this, () => {
                    this.showHide();
                });
            });
        } else if (this.type == 1) {
            SGAD.visibleFullSingleGridAd(false)
            Laya.timer.once(SGConfig.data.front_gezi_time, this, () => {
                SGAD.visibleFullSingleGridAd(true)
                Laya.timer.once(800, this, () => {
                    this.showHide();
                });
            });
        }
    }

    btnContinueCB() {
        this.clickCount++
        if (this.clickCount >= SGConfig.data.front_gezi_number) {
            this.close()
        }
    }
}
