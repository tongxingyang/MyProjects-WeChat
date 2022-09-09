import { _decorator, Component, Node, UITransform, v3 } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import GameData from '../Crl/GameData';
import { Player } from '../Crl/Player';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import { OnlineTimeMgr } from '../Mod/OnlineTimeMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    @property(Node)
    OnlineGift: Node = null
    @property(Node)
    guidePic: Node = null

    onEnable() {
        if (!OnlineTimeMgr.Share.hadGotOnlineGift && !GameData.hadShowOnlineGift) {
            this.scheduleOnce(() => {
                OnlineTimeMgr.Share.startTimeCounter()
                UINode.Share.showUI(UIType.UI_ONLINE, false, () => {
                    FdMgr.visibleGameBanner(true)
                })
            })
        } else {
            FdMgr.visibleGameBanner(true)
        }
    }

    onDisable() {
        FdMgr.visibleGameBanner(false)
    }

    start() {
        SoundMgr.Share.PlayMusic('homeBgm')
    }

    settingBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_SETTING)
    }

    update(deltaTime: number) {
        if (PlayerDataMgr.getPlayerData().isNewer && Player.Share.myPos.x < 1900) {
            this.guidePic.active = true
            this.guidePic.position = v3(Player.Share.myPos.x + 50, -220)
            this.guidePic.getComponent(UITransform).width = 1900 - Player.Share.myPos.x - 50
        } else {
            this.guidePic.active = false
        }
    }
}

