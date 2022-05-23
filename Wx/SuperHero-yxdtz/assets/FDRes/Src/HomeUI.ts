
import { _decorator, Component, Node } from 'cc';
import FdAd from './FdAd';
import FdMgr from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('HomeUI')
export class HomeUI extends Component {

    @property(Node)
    videoBtn: Node = null

    onDisable() {

    }

    visibleUI(v: boolean) {
        this.node.active = v
        this.videoBtn.active = FdMgr.homeViedo
    }

    remenCB() {
        FdAd.hideBannerAd()
        FdAd.visibleSideGridAd(false)
        FdMgr.showHomeUIReMen(() => {
            FdAd.showBannerAd();
            FdAd.visibleSideGridAd(true)
        })
    }

    videoCB() {
        FdAd.showVideoAd(() => {
            window['wx'].showToast({
                title: "恭喜获得1000金币！",//提示文字
                duration: 2000,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: 'none', //图标，支持"success"、"loading"  
            })
        }, null)
    }
}
