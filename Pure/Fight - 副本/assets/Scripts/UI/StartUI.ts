import { _decorator, Component, Node } from 'cc';
import GameData from '../Crl/GameData';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import { OnlineTimeMgr } from '../Mod/OnlineTimeMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    @property(Node)
    OnlineGift: Node = null

    onEnable() {
        if (!OnlineTimeMgr.Share.hadGotOnlineGift && !GameData.hadShowOnlineGift) {
            this.scheduleOnce(() => {
                OnlineTimeMgr.Share.startTimeCounter()
                UINode.Share.showUI(UIType.UI_ONLINE, false)
            })
        }
    }

    start() {
        SoundMgr.Share.PlayMusic('homeBgm')
    }

    settingBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_SETTING)
    }

    update(deltaTime: number) {

    }
}

