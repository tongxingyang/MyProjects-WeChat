import FdAd from "./FdAd"
import FdMgr from "./FdMgr"
import FDUtils from "./FDUtils"

export default class FDHomeUI extends Laya.Scene {
    constructor() {
        super()
    }
    privacyBtn: Laya.Image
    moreBtn: Laya.Image
    deskTopBtn: Laya.Image

    onOpened(param: any): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)

        FDUtils.addClickEvent(this.privacyBtn, this, this.privacyBtnCB)
        FDUtils.addClickEvent(this.moreBtn, this, this.moreBtnCB)
        FDUtils.addClickEvent(this.deskTopBtn, this, this.deskTopBtnCB)
        this.deskTopBtn.visible = FdMgr.jsonConfig.account_addDesktop
        this.moreBtn.visible = FdMgr.jsonConfig.is_homeGameBtn
        this.privacyBtn.visible = FdMgr.jsonConfig.is_agreement
    }

    onClosed(type?: string): void {

    }

    privacyBtnCB() {
        FdMgr.showPrivacyUI()
    }

    moreBtnCB() {
        FdAd.showGamePortalAd()
    }

    deskTopBtnCB() {
        if (!FdAd.oppoPlatform) return

        Laya.Browser.window['qg'].hasShortcutInstalled({
            success: () => {
                // 判断图标未存在时，创建图标
                Laya.Browser.window['qg'].installShortcut({
                    success: function () {
                        // 执行用户创建图标奖励
                    }
                })
            }
        })
    }

}