
import { _decorator, Component, Node, v3, tween, director } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { GameLogic } from '../Crl/GameLogic';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('FinishUI')
export class FinishUI extends Component {

    @property(Node)
    starNode: Node = null

    @property(Node)
    winTitle: Node = null
    @property(Node)
    loseTitle: Node = null
    @property(Node)
    restartBtn: Node = null
    @property(Node)
    nextBtn: Node = null

    start() {
        // [3]
        if (GameLogic.Share.isWin) {
            for (let i = 0; i < this.starNode.children.length; i++) {
                let s = this.starNode.children[i]
                let star = s.children[0]
                this.scheduleOnce(() => {
                    star.active = true
                    star.scale = v3(3, 3)
                    tween(star).to(0.2, { scale: v3(1, 1) }).start()
                }, i * 0.5)
            }
        }
        this.winTitle.active = GameLogic.Share.isWin
        this.loseTitle.active = !GameLogic.Share.isWin
        this.nextBtn.active = GameLogic.Share.isWin
        this.restartBtn.active = !GameLogic.Share.isWin
        FdMgr.inFinish(GameLogic.Share.isWin ? this.nextBtn : this.restartBtn)
    }

    nextBtnCB() {
        FdMgr.closeFinish(()=>{
            if (GameLogic.Share.isWin) {
                PlayerDataMgr.changeGrade(1)
            }
            director.loadScene('Game')
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}