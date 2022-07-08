import { _decorator, Component, Node, resources, Prefab, instantiate, dragonBones, director, v3, tween } from 'cc';
import { UIType } from '../Mod/Entity';
import GameRecordMgr from '../Mod/GameRecordMgr';
import PlatformApi from '../Mod/PlatformApi';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import { Player } from './Player';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {
    static Share: GameLogic

    @property(dragonBones.DragonBonesAsset)
    playerDBA: dragonBones.DragonBonesAsset[] = []
    @property(dragonBones.DragonBonesAtlasAsset)
    playerDBAA: dragonBones.DragonBonesAtlasAsset[] = []

    levelNode: Node = null
    player: Node = null
    playerCrl: Player = null

    leftMax: Node = null
    rightMax: Node = null

    isStart: boolean = false
    isGameOver: boolean = false
    isWin: boolean = false
    isPause: boolean = false

    curGrade: number = 1

    onLoad() {
        GameLogic.Share = this
        this.levelNode = this.node.getChildByName('LevelNode')
        this.player = this.node.getChildByName('player')
        this.playerCrl = this.player.getComponent(Player)
    }

    start() {

    }

    shakeUICam() {
        let rate = 25
        let count = 1
        let cb = () => {
            let pos = v3(Math.random() * rate - rate / 2, Math.random() * rate - rate / 2)
            if (count == 7) pos = v3(0, 0, 0)
            tween(this.node.getChildByName('Camera')).to(0.05, { position: pos }).call(() => {
                count++
                if (count >= 8) {
                    return
                }
                cb()
            }).start()
        }
        cb()
    }

    gameStart(grade?: number) {
        GameRecordMgr.recordStart()
        SoundMgr.Share.PlayMusic('ingame_loop' + Utility.GetRandom(1, 2))
        PlayerDataMgr.changePower(-1)
        this.node.getChildByName('uiBg').active = false
        if (grade == null || grade == undefined) {
            grade = PlayerDataMgr.getPlayerData().grade
        }
        grade = Math.floor((grade - 1) % PlayerDataMgr.maxGrade) + 1
        this.curGrade = grade
        resources.load('Prefabs/Levels/Level' + grade, Prefab, (err, res) => {
            let level = instantiate(res)
            this.leftMax = level.getChildByName('coll').getChildByName('left')
            this.rightMax = level.getChildByName('coll').getChildByName('right')
            this.levelNode.addChild(level)
            level.addChild(this.player)
            this.player.position = level.getChildByName('playerPos').position.clone()
            this.player.active = true
            this.playerCrl.initAsset(PlayerDataMgr.getPlayerData().skinId)

            this.isStart = true
        })
    }

    gameOver(isWin: boolean) {
        if (this.isGameOver) return
        this.isGameOver = true
        this.isStart = false
        this.isWin = isWin
        this.isPause = true
        UINode.Share.closeUI(UIType.UI_GAME)

        if (isWin) {
            this.playerCrl.winCB()
            SoundMgr.Share.PlaySound('win_01')
        } else {
            PlatformApi.DoVibrate(false)
            PlayerDataMgr.addDieCount()
            this.playerCrl.loseCB()
            SoundMgr.Share.PlaySound('die_hit')
            SoundMgr.Share.PlaySound('lose')
        }

        this.scheduleOnce(() => {
            GameRecordMgr.recordStop()
            UINode.Share.showUI(UIType.UI_SHARE, () => {
                UINode.Share.showUI(UIType.UI_FINISH)
            })
        }, 2)
    }

    restart(isToHome: boolean = true) {
        if (!isToHome) {
            let g = this.curGrade
            if (this.isWin) {
                g = this.curGrade + 1
            }
            director.loadScene('Game', () => {
                UINode.Share.showUI(UIType.UI_GAME)
                GameLogic.Share.gameStart(g)
            })
        } else {
            director.loadScene('Game')
        }
    }

    update(deltaTime: number) {

    }
}

