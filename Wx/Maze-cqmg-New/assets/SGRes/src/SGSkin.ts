
import { _decorator, Component, Node, assetManager, Sprite, SpriteFrame, ImageAsset } from 'cc';
import SGAD from './SGAD';
import SGConfig from './SGConfig';
import { SGNode } from './SGNode';
const { ccclass, property } = _decorator;

@ccclass('SGSkin')
export class SGSkin extends Component {
    @property(Node)
    icon: Node = null
    @property(Node)
    btnGet: Node = null
    @property(Node)
    btnCancel: Node = null

    ccb: Function

    onDisable() {
        this.unscheduleAllCallbacks()
        SGNode.Share.scheduleOnce(() => {
            this.ccb && this.ccb()
        })
    }

    showUI(ccb?: Function) {
        this.node.active = true
        this.ccb = ccb;
        assetManager.loadRemote<ImageAsset>(SGConfig.data.front_pifu_picture, (err, tex) => {
            this.icon.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(tex)
        })
        if (SGConfig.isPortrait) {
            SGAD.showBannerAd()
        } else {
            SGAD.hideBannerAd()
        }
    }
    btnGetCB() {
        this.showAd()
    }

    btnCancelCB() {
        if (SGConfig.data.front_pifu_cancel_switch) {
            this.showAd()
        } else {
            this.close()
        }
    }

    showAd() {
        SGAD.showVideoAd(() => {
            window['wx'].showToast({
                title: "恭喜获得1000金币！",//提示文字
                duration: 2000,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: 'none', //图标，支持"success"、"loading"  
            })
            this.close()
        }, () => {
            this.showWxVirtual()
        }, null, true)
    }

    showWxVirtual() {
        if (!SGConfig.data.front_video_tanchuang_switch) {
            this.close()
            return
        }
        let self = this
        window['wx'].showModal({
            title: '提示',
            content: '未观看完广告无法获取奖励，是否继续？',
            success(res) {
                if (res.confirm) {
                    SGAD.showVideoAd(() => {
                        window['wx'].showToast({
                            title: "恭喜获得1000金币！",//提示文字
                            duration: 2000,//显示时长
                            mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                            icon: 'none', //图标，支持"success"、"loading"  
                        })
                    }, null, () => { self.close() })
                } else if (res.cancel) {
                    if (SGConfig.data.front_video_cancel_switch) {
                        SGAD.showVideoAd(() => {
                            window['wx'].showToast({
                                title: "恭喜获得1000金币！",//提示文字
                                duration: 2000,//显示时长
                                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                                icon: 'none', //图标，支持"success"、"loading"  
                            })
                        }, null, () => { self.close() })
                    } else {
                        self.close()
                    }
                }
            }
        })
    }

    close() {
        this.node.active = false
    }

}