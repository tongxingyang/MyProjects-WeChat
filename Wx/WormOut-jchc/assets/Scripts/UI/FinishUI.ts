
import { _decorator, Component, Node, v3, tween, director } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
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
        FdMgr.closeFinish(()=>{
            SoundMgr.Share.PlaySound('click')
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.getPlayerData().coin += 200
                PlayerDataMgr.changeGrade(1)
            }
            director.loadScene('Game')
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}