import { _decorator, Component, Node, resources, Prefab, instantiate, dragonBones, director, v3, tween } from 'cc';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
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
        console.log('game over!')
        this.isGameOver = true
        this.isStart = false
        this.isWin = isWin

        if (isWin) {
            this.playerCrl.winCB()
        } else {
            PlayerDataMgr.addDieCount()
            this.playerCrl.loseCB()
        }

        this.scheduleOnce(() => {
            UINode.Share.showUI(UIType.UI_FINISH)
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

