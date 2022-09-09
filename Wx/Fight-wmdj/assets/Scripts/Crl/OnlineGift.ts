import { _decorator, Component, Node, Label } from 'cc';
import { UIType } from '../Mod/Entity';
import { OnlineTimeMgr } from '../Mod/OnlineTimeMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('OnlineGift')
export class OnlineGift extends Component {

    @property(Node)
    light: Node = null
    @property(Node)
    tips: Node = null
    @property(Node)
    finger: Node = null
    @property(Node)
    time: Node = null

    start() {

    }

    btnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_ONLINE, true, () => {
            UINode.Share.showUI(UIType.UI_START)
        })
    }

    updateTime() {
        if (OnlineTimeMgr.Share.time >= OnlineTimeMgr.Share.giftTime) {
            this.time.parent.active = false
            this.tips.active = true
            this.light.active = true
            this.finger.active = true
            return
        }

        let t = OnlineTimeMgr.Share.giftTime - OnlineTimeMgr.Share.time
        if (t < 0) t = 0

        let m = Math.floor(t / 60)
        let s = Math.floor(t - m * 60)
        let sStr = s < 10 ? '0' + s.toString() : s.toString()
        this.time.getComponent(Label).string = 0 + m.toString() + ':' + sStr
    }

    update(deltaTime: number) {
        this.updateTime()
        if (OnlineTimeMgr.Share.hadGotOnlineGift) {
            this.node.active = false
        }
    }
}

