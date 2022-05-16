
import { _decorator, Component, Node, Vec2, v2, EventTouch, Label, ProgressBar } from 'cc';
import { GameLogic } from '../Crl/GameLogic';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    @property(Node)
    touchNode: Node = null
    @property(Label)
    gradeNum: Label = null
    @property(ProgressBar)
    pBar: ProgressBar = null
    @property(Node)
    guide: Node = null

    isTouching: boolean = false
    preTouchPos: Vec2 = v2()

    start() {
        this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this)
        this.touchNode.on(Node.EventType.TOUCH_END, this.touchEnd, this)
        this.touchNode.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this)

        this.gradeNum.string = PlayerDataMgr.getPlayerData().grade.toString()

    }

    touchStart(event: EventTouch) {
        if (GameLogic.Share.isGameOver) return
        if (!GameLogic.Share.isStarted) {
            GameLogic.Share.isStarted = true
            GameLogic.Share.gameStart()
            this.guide.active = false
        }
        if (this.isTouching) return
        this.isTouching = true
        this.preTouchPos = event.getUILocation()
        GameLogic.Share.playerCrl.addSpeed()
        GameLogic.Share.speedFX.active = true
        SoundMgr.Share.PlaySound('bike', true, 0.1)
    }

    touchMove(event: EventTouch) {
        if (GameLogic.Share.isGameOver) return
        let pos = event.getUILocation()
        let dt = pos.x - this.preTouchPos.x
        dt /= 20
        if (dt > 5) dt = 5
        if (dt < -5) dt = -5
        GameLogic.Share.playerCrl.moveX(-dt)
    }

    touchEnd(event: EventTouch) {
        if (GameLogic.Share.isGameOver) return
        this.isTouching = false
        GameLogic.Share.playerCrl.stopMoveX()
        GameLogic.Share.playerCrl.stopSpeed()
        GameLogic.Share.speedFX.active = false
        SoundMgr.Share.StopMuisc('bike')
    }

    update(deltaTime: number) {
        // [4]
        let playerPos = GameLogic.Share.playerCrl.myPosClone
        let desPos = GameLogic.Share.DesNode.worldPosition.clone()
        this.pBar.progress = playerPos.z / desPos.z
    }
}