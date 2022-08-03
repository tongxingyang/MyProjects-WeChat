import { _decorator, Component, Node } from 'cc';
import FdAd from './FdAd';
const { ccclass, property } = _decorator;

@ccclass('VideoBanner')
export class VideoBanner extends Component {

    @property(Node)
    rootNode: Node = null
    @property(Node)
    finger: Node = null
    @property(Node)
    banner1: Node = null
    @property(Node)
    banner2: Node = null

    curIndex: number = 0

    showUI(showFinger: boolean = true) {
        this.node.active = true
        this.finger.active = showFinger

        this.banner1.active = this.curIndex == 0
        this.banner2.active = this.curIndex == 1
        this.curIndex++
        if (this.curIndex > 1) this.curIndex = 0
    }

    adBtnCB() {
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