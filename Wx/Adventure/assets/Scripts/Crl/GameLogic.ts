import { _decorator, Component, Node, resources, Prefab, instantiate } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {
    static Share: GameLogic

    levelNode: Node = null
    player: Node = null
    playerCrl: Player = null

    leftMax: Node = null
    rightMax: Node = null

    isStart: boolean = false
    isGameOver: boolean = false
    isWin: boolean = false

    onLoad() {
        GameLogic.Share = this
        this.levelNode = this.node.getChildByName('LevelNode')
        this.player = this.node.getChildByName('player')
        this.playerCrl = this.player.getComponent(Player)
    }

    start() {
        this.gameStart()
    }

    gameStart() {
        resources.load('Prefabs/Levels/Level11', Prefab, (err, res) => {
            let level = instantiate(res)
            this.leftMax = level.getChildByName('coll').getChildByName('left')
            this.rightMax = level.getChildByName('coll').getChildByName('right')
            this.levelNode.addChild(level)
            level.addChild(this.player)
            this.player.position = level.getChildByName('playerPos').position.clone()
            this.player.active = true

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
            this.playerCrl.loseCB()
        }
    }

    update(deltaTime: number) {

    }
}

