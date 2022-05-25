
import { _decorator, Component, Node, v3, tween, director } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('FinishUI')
export class FinishUI extends Component {

    @property(Node)
    nextBtn: Node = null

    start() {
        // [3]
        FdMgr.inFinish(this.nextBtn)

        if (PlayerDataMgr.getPlayerData().grade == 5) {
            PlayerDataMgr.getPlayerData().coin += 500
            PlayerDataMgr.setPlayerData()
        }
    }

    adBtnCB() {
        SoundMgr.Share.PlaySound('click')
        let cb = () => {
            PlayerDataMgr.getPlayerData().coin += 800
            PlayerDataMgr.setPlayerData()
            this.nextBtnCB()
        }
        FdAd.showVideoAd(cb)
    }

    nextBtnCB() {
        SoundMgr.Share.PlaySound('click')
        FdMgr.closeFinish(() => {
            director.loadScene('Game')
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}