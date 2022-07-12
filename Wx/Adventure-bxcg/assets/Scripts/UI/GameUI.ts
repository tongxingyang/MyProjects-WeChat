
import { _decorator, Component, Node, EventTouch, view, v3, Vec3, instantiate, input, SystemEvent, Input, KeyCode, EventKeyboard, Label } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import GameData from '../Crl/GameData';
import { GameLogic } from '../Crl/GameLogic';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {

    static Share: GameUI

    @property(Node)
    leftBtn: Node = null
    @property(Node)
    rightBtn: Node = null
    @property(Node)
    jumpBtn: Node = null
    @property(Node)
    settingNode: Node = null
    @property(Node)
    tipsNode: Node = null
    @property(Label)
    tipsLabel: Label = null

    canJump: boolean = true

    onLoad() {
        GameUI.Share = this
    }

    start() {
        // [3]
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this)

        this.leftBtn.on(Node.EventType.TOUCH_START, this.leftBtnDown, this)
        this.leftBtn.on(Node.EventType.TOUCH_END, this.leftBtnUp, this)
        this.leftBtn.on(Node.EventType.TOUCH_CANCEL, this.leftBtnUp, this)

        this.rightBtn.on(Node.EventType.TOUCH_START, this.rightBtnDown, this)
        this.rightBtn.on(Node.EventType.TOUCH_END, this.rightBtnUp, this)
        this.rightBtn.on(Node.EventType.TOUCH_CANCEL, this.rightBtnUp, this)

        FdMgr.inGame()
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.touchMove(true)
                break
            case KeyCode.KEY_D:
                this.touchMove(false)
                break
            case KeyCode.KEY_W:
                if (!this.canJump) return
                GameLogic.Share.playerCrl.jump()
                break
        }
    }
    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.resetMove()
                break
            case KeyCode.KEY_D:
                this.resetMove()
                break
        }
    }

    leftBtnDown() {
        SoundMgr.Share.PlaySound('click')
        this.touchMove(true)
    }
    leftBtnUp() {
        this.resetMove()
    }
    rightBtnDown() {
        SoundMgr.Share.PlaySound('click')
        this.touchMove(false)
    }
    rightBtnUp() {
        this.resetMove()
    }
    jumpBtnCB() {
        SoundMgr.Share.PlaySound('click')
        if (!this.canJump) return
        GameLogic.Share.playerCrl.jump()
    }

    touchMove(isLeft: boolean) {
        GameLogic.Share.playerCrl.dirX = isLeft ? -1 : 1
    }

    resetMove() {
        GameLogic.Share.playerCrl.dirX = 0
    }

    settingBtnCB() {
        SoundMgr.Share.PlaySound('click')
        this.settingNode.active = true
        GameLogic.Share.isPause = true
    }
    closeSetting() {
        this.settingNode.active = false
        GameLogic.Share.isPause = false
    }

    restartBtnCB() {
        SoundMgr.Share.PlaySound('click')
        if (PlayerDataMgr.getPlayerData().power > 0) {
            GameLogic.Share.restart(false)
        } else {
            UINode.Share.showUI(UIType.UI_POWER, () => {
                UINode.Share.showUI(UIType.UI_GAME)
            })
        }
    }

    tipsBtnCB() {
        SoundMgr.Share.PlaySound('click')
        GameLogic.Share.isPause = true
        let cb = () => {
            this.tipsNode.active = true
            this.tipsLabel.string = GameData.tipsArr[GameLogic.Share.curGrade - 1]
        }
        FdAd.showVideoAd(cb)
    }
    closeTips() {
        this.tipsNode.active = false
        GameLogic.Share.isPause = false
    }

    backToHome() {
        SoundMgr.Share.PlaySound('click')
        GameLogic.Share.restart()
    }

    update(deltaTime: number) {
    }
}