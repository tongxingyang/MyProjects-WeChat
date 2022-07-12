import { _decorator, Component, Node, Label } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('PowerUI')
export class PowerUI extends Component {

    @property(Label)
    num: Label[] = []

    onEnable(){
        FdMgr.inShop()
    }

    start() {

    }

    btnCB(evt, data) {
        SoundMgr.Share.PlaySound('click')
        let id = parseInt(data)
        let cb = null
        if (id == 1) {
            cb = () => {
                PlayerDataMgr.getPlayerData().power += 5
                PlayerDataMgr.setPlayerData()
            }
        } else if (id == 2) {
            cb = () => {
                PlayerDataMgr.getPlayerData().powerAd15++
                if (PlayerDataMgr.getPlayerData().powerAd15 >= 2) {
                    PlayerDataMgr.getPlayerData().powerAd15 = 0
                    PlayerDataMgr.getPlayerData().power += 15
                    PlayerDataMgr.setPlayerData()
                } else {
                    PlayerDataMgr.setPlayerData()
                }
                this.num[1].string = PlayerDataMgr.getPlayerData().powerAd15 + ':2'
            }
        } else if (id == 3) {
            cb = () => {
                PlayerDataMgr.getPlayerData().powerAdMax++
                if (PlayerDataMgr.getPlayerData().powerAdMax >= 3) {
                    PlayerDataMgr.getPlayerData().powerAdMax = 0
                    PlayerDataMgr.getPlayerData().power += 25
                    PlayerDataMgr.setPlayerData()
                    this.backBtnCB()
                } else {
                    PlayerDataMgr.setPlayerData()
                }
                this.num[2].string = PlayerDataMgr.getPlayerData().powerAdMax + ':3'
            }
        }
        FdAd.showVideoAd(cb)
    }

    backBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.closeUI(UIType.UI_POWER)
    }

    update(deltaTime: number) {

    }
}

