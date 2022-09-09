import { _decorator, Component, Node } from 'cc';
import { WECHAT } from 'cc/env';
import FdAd from './FdAd';
const { ccclass, property } = _decorator;

@ccclass('GameBanner')
export class GameBanner extends Component {
    start() {

    }

    adCB() {
        if (!WECHAT) return
        FdAd.showVideoAd(() => {
            window['wx'].showToast({
                title: "恭喜获得1000金币！",//提示文字
                duration: 2000,//显示时长
                mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false  
                icon: 'none', //图标，支持"success"、"loading"  
            })
        }, null)
    }

    update(deltaTime: number) {

    }
}

