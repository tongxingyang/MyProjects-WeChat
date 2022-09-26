import { _decorator, Component, Node } from 'cc';
import { WECHAT } from 'cc/env';
import SGAD from './SGAD';
import SGConfig, { RemenIndex } from './SGConfig';
import { SGNode } from './SGNode';
const { ccclass, property } = _decorator;

@ccclass('SGRemen')
export class SGRemen extends Component {
    @property(Node)
    btnContinue: Node = null
    @property(Node)
    title: Node = null

    ccb: Function = null;
    onShowCB: Function = null
    clickCount: number = 0
    index: RemenIndex = RemenIndex.RM_rmxyx

    type: number = 1
    isWuchu: boolean = false

    onDisable() {
        if (WECHAT) {
            window['wx'].offShow(this.onShowCB)
        }
        this.unscheduleAllCallbacks()
        SGAD.hideBannerAd()
        SGAD.visibleFullSingleGridAd(false);
        SGAD.visibleFullGridAd(false)
        SGNode.Share.scheduleOnce(() => {
            this.ccb && this.ccb()
        }, 0.1)
        SGNode.Share.scheduleOnce(() => {
            SGAD.visibleFullSingleGridAd(false);
            SGAD.visibleFullGridAd(false)
        }, 1)
    }

    showUI(index: number, ccb?: Function) {
        this.node.active = true
        this.index = index;
        this.ccb = ccb;
        this.clickCount = 0
        this.title.children.forEach((n) => {
            n.active = this.title.children.indexOf(n) == index
        })

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
        if (WECHAT) {
            window['wx'].onShow(this.onShowCB)
        }
    }

    showHide() {
        if (this.type == 2) {
            SGAD.hideBannerAd();
            this.scheduleOnce(() => {
                SGAD.showBannerAd();
                this.scheduleOnce(this.showHide, 0.8)
            }, SGConfig.data.front_gezi_time / 1000)
        } else if (this.type == 1) {
            SGAD.visibleFullSingleGridAd(false)
            this.scheduleOnce(() => {
                SGAD.visibleFullSingleGridAd(true)
                this.scheduleOnce(this.showHide, 0.8)
            }, SGConfig.data.front_gezi_time / 1000)
        }
    }

    btnContinueCB() {
        this.clickCount++
        if (this.clickCount >= SGConfig.data.front_gezi_number) {
            this.close()
        }
    }

    close() {
        this.node.active = false
    }
}