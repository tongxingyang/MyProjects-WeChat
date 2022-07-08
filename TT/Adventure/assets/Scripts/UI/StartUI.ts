
import { _decorator, Component, Node } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import TTAdMgr from '../TT/TTAdMgr';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {

    start() {
        // [3]
        SoundMgr.Share.PlayMusic('menuloop')
    }

    startBtnCB() {
        SoundMgr.Share.PlaySound('click')
        if (PlayerDataMgr.getPlayerData().power > 0) {
            UINode.Share.showUI(UIType.UI_GAME)
            GameLogic.Share.gameStart()
        } else {
            UINode.Share.showUI(UIType.UI_POWER, () => {
                UINode.Share.showUI(UIType.UI_START)
            })
        }
    }

    selectBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_SELECT)
    }

    settingBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_SETTING)
    }

    shopBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_SHOP)
    }

    powerBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_POWER, () => {
            UINode.Share.showUI(UIType.UI_START)
        })
    }

    update(deltaTime: number) {
        // [4]
    }
}
