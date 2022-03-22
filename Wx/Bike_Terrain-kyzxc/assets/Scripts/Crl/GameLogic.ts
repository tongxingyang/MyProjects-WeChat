
import { _decorator, Component, Node, director, Prefab, instantiate, v3, Animation } from 'cc';
import FdAd from '../../FDRes/Src/FdAd';
import FdMgr from '../../FDRes/Src/FdMgr';
import { UIType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import { SoundMgr } from '../Mod/SoundMgr';
import Utility from '../Mod/Utility';
import { Player } from './Player';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {

    public static Share: GameLogic

    @property(Node)
    aiPrefab: Node = null

    @property(Node)
    playerNode: Node = null
    @property(Node)
    SceneNode: Node = null

    @property(Node)
    shopCam: Node = null
    @property(Node)
    startCam: Node = null
    @property(Node)
    playerCam: Node = null
    @property(Node)
    speedFX: Node = null
    @property(Node)
    aiNode: Node = null

    @property(Node)
    SideTree: Node = null
    @property(Node)
    DesNode: Node = null
    @property(Node)
    DesNode1: Node = null
    @property(Node)
    terrain2: Node = null

    lvIndex: number = 1
    isStarted: boolean = false
    isGameOver: boolean = false
    isWin: boolean = false
    isHardMode: boolean = false

    onLoad() {
        GameLogic.Share = this
        PlayerDataMgr.resetFreeSkin()
    }

    start() {
        // [3]
        let lv = PlayerDataMgr.getPlayerData().grade
        this.lvIndex = this.isHardMode ? 7 : (lv - 1) % PlayerDataMgr.maxGrade + 1
        this.SceneNode.getChildByName('Level' + this.lvIndex).active = true
        if (this.lvIndex >= 4) {
            this.terrain2.active = true
            this.DesNode.active = false
            this.DesNode1.active = true
            this.DesNode = this.DesNode1
        }
    }

    get playerCrl(): Player {
        return this.playerNode.getComponent(Player)
    }

    showShopCam() {
        this.shopCam.active = true
        this.startCam.active = false
    }
    hideShopCam() {
        this.shopCam.active = false
        this.startCam.active = true
    }

    resetHardMode() {
        this.lvIndex = 7
        for (let i = 0; i < 7; i++) {
            this.SceneNode.getChildByName('Level' + (i + 1)).active = i + 1 == this.lvIndex
        }
        this.SideTree.active = false
        this.terrain2.active = true
        this.DesNode.active = false
        this.DesNode1.active = true
        this.DesNode = this.DesNode1
    }

    ready() {
        FdAd.hideBannerAd()
        FdAd.visibleBottomGridAd(false)
        FdAd.visibleSideGridAd(false)
        this.startCam.active = false
        this.playerCam.active = true
        this.playerNode.children[0].active = false
        this.playerNode.children[1].active = true
    }

    gameStart() {
        this.playerCrl._body.useGravity = true
        if (!this.isHardMode) {
            this.aiNode.active = true
            this.createAi()
        }
    }

    createAi() {
        for (let i = 0; i < (this.lvIndex < 4 ? 23 : 35); i++) {
            let cb = () => {
                let ai = instantiate(this.aiPrefab)
                ai.active = true
                ai.children[0].active = false
                this.aiNode.addChild(ai)
                let pos = v3()
                pos.x = Math.random() * 10 - 5
                pos.y = 0
                pos.z = this.lvIndex < 4 ? (i * (Math.random() * 3 + 2)) : (i * (Math.random() * 5 + 4))
                ai.position = pos
            }
            this.scheduleOnce(cb, i * 0.05)
        }
    }

    gameOver(isWin: boolean) {
        this.isWin = isWin
        this.isGameOver = true
        GameLogic.Share.speedFX.active = false
        SoundMgr.Share.StopMuisc('bike')
        if (isWin)
            SoundMgr.Share.PlaySound('finish')
        if (!isWin)
            Utility.DoVibrate(false)
        this.scheduleOnce(() => {
            FdMgr.showGameOver(() => {
                UINode.Share.showUI(UIType.UI_FINISH)
            })
        }, 2)
    }

    restart() {
        SoundMgr.Share.StopMuisc('finish')
        director.loadScene('scene1')
    }

    update(deltaTime: number) {
        // [4]
        for (let i = 0; i < this.aiNode.children.length; i++) {
            let ai = this.aiNode.children[i]
            if (ai.worldPosition.z < this.playerNode.worldPosition.z) {
                ai.destroy()
                break
            }
            ai.children[0].active = ai.worldPosition.z < this.playerNode.worldPosition.z + 20
        }
    }
}