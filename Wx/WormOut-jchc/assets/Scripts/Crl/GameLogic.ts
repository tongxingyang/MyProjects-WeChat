
import { _decorator, Component, Node, UI, tween, v3 } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {

    public static Share: GameLogic

    levelNode: Node = null
    bgNode: Node = null

    lvIndex: number = 0

    isTouching: boolean = false
    isGameOver: boolean = false
    isWin: boolean = false

    start() {
        GameLogic.Share = this
        this.bgNode = this.node.getChildByName('bgNode')
        this.levelNode = this.node.getChildByName('LevelNode')

        let bgId = Math.floor((PlayerDataMgr.getPlayerData().grade - 1) % 5)
        this.bgNode.children[bgId].active = true
    }

    gameStart() {
        this.lvIndex = Math.floor((PlayerDataMgr.getPlayerData().grade - 1) % PlayerDataMgr.maxGrade)
        this.levelNode.children[this.lvIndex].active = true
    }

    gameOver(isWin: boolean) {
        this.isGameOver = true
        this.isWin = isWin
        UINode.Share.closeUI(UIType.UI_GAME)
        SoundMgr.Share.PlaySound('win')

        this.scheduleOnce(() => {
            let cameraNode = GameLogic.Share.node.getChildByName('Camera')
            tween(cameraNode).to(0.1, { position: v3(0, 0, 0), scale: v3(1, 1, 1) }).start()
            
            FdMgr.showGameOver(()=>{
                UINode.Share.showUI(UIType.UI_FINISH)
            })
        }, 2)
    }

    update(deltaTime: number) {
        // [4]
    }
}