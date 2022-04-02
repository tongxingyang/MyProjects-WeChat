import FdAd from "./FdAd"
import FdMgr from "./FdMgr"

export default class PrivacyUI extends Laya.Scene {
    constructor() {
        super()
    }
    disAgree: Laya.Image
    agree: Laya.Image
    scrollPanel: Laya.Panel
    ysText: Laya.Text
    ccb: Function = null

    onOpened(param?: any): void {
        this.size(Laya.stage.displayWidth, Laya.stage.displayHeight)
        if (param && param.ccb) {
            this.ccb = param.ccb
        }
        this.disAgree.on(Laya.Event.CLICK, this, this.disAgreeCB)
        this.agree.on(Laya.Event.CLICK, this, this.agreeCB)
        this.scrollPanel.vScrollBarSkin = ""

        let str: string = "重要须知:\n为了贯彻执行国家出版署颁布的《关于进-步严格管理切实防止未成年人沉迷网络游戏的通知》以及《关于贯彻实施<网络游戏管理暂行办法>的通知》，本公司特此制定本《游戏用户个人信息及隐私保护政策》。在此特别提醒用户仔细阅读本《游戏用户个人信息及隐私保护政策》中的各个条款(未成年人应当在其法定监护人陪同下阅读)，并选择接受或者不接受本《游戏用户个人信息及隐私保护政策》。\n1、一般而言，基于下列原因需要使用到用户的信息资源:\n(1)执行软件验证服务。\n(2)执行软件升级服务。\n(3)网络同步服务。\n(4)提高用户的使用安全性并提供客户支持。\n(5)因用户使用本软件特定功能或因用户要求本公司或合作单位提供特定服务时，本公司或合作单位则需要把用户的信息提供给与此相关联的第三方。\n(6)执行本公司的《隐私权声明》,用户可访问本公司网站查阅该声明。(7)其他有利于用户和本公司利益的。\n2、本公司注重对用户信息资源的保护，会使用各种安全技术和程序来保护用户信息资源不被未经授权的访问、使用和泄漏。除法律或政府要求或用户同意等原因外，本公司未经用户同意不向除合作单位以外的第三方公开、透露用户信息资源。但因下列原因而披露给第三方的除外:\n(1)基于国家法律法规的规定而对外披露;\n(2)应国家司法机关及其他有关机关基于法定程序的要求而披露;\n(3)为保护本公司或您的合法权益而披露;\n(4)在紧急情况下，为保护其他用户及第三方人身安全而披露;\n(5)用户本人或用户监护人授权披露的;\n(6)应用户监护人合法要求而提供用户个人身份信息时。\n3、用户同意:个人隐私信息是指那些能够对用户进行个人辨识或涉及个人通信的信息，包括下列信息:用户的姓名，有效身份证件号码，家庭地址、电话号码，IP地址，电子邮件地址信息。而非个人隐私信息是指用户对本软件的操作状态以及使用习惯等一些明确且客观反映在本公司服务器端的基本记录信息和其他一切个人隐私信息范围外的普通信息。\n以上内容自2021年11月1日更新后正式生效"
        this.ysText.text = str
        this.disAgree.visible = FdMgr.jsonConfig.is_agreement
    }

    onClosed(type?: string): void {
        this.ccb && this.ccb()
    }

    disAgreeCB() {
        if (FdAd.oppoPlatform) {
            Laya.Browser.window.qg.exitApplication({
                complete: (res) => {
                    console.log(res)
                }
            })
        }
    }

    agreeCB() {
        localStorage.setItem('showPrivacy', "1")
        this.close()
    }
}