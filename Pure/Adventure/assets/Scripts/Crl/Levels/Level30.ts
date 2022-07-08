import { _decorator, Component, Node, RichText, tween, UIOpacity } from 'cc';
import { SoundMgr } from '../../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('Level30')
export class Level30 extends Component {

    @property(Node)
    touchStr: Node = null
    @property(Node)
    mask: Node = null

    isDone: boolean = false

    start() {
        this.touchStr.on(Node.EventType.TOUCH_START, this.touchStrCB, this)
        this.mask.setSiblingIndex(999)
    }

    touchStrCB() {
        if (this.isDone) return
        this.isDone = true
        SoundMgr.Share.PlaySound('take_item_positive')
        this.touchStr.getComponent(RichText).string = '<color=#ffffff>灯</color>'
        tween(this.mask.getComponent(UIOpacity)).to(1, { opacity: 100 }).start()
    }

    update(deltaTime: number) {

    }
}

