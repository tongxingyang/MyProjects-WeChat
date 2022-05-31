import { _decorator, Component, Node, tween, v3, view, resources, Prefab, instantiate, Vec3 } from 'cc';
import FdMgr from '../../FDRes/Src/FdMgr';
import { PropType, UIType } from '../Mod/Entity';
import Utility from '../Mod/Utility';
import BulletPool from './BulletPool';
import { Plane } from './Plane';
import { Prop } from './Prop';
import { UINode } from './UINode';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {
    public static Share: GameLogic

    groupNode: Node = null
    propNode: Node = null
    wormBulletNode: Node = null

    wormArr: Node[] = []

    waveCount: number = 1
    reviveCount: number = 0

    isStart: boolean = false
    isWin: boolean = false
    isPause: boolean = false
    isGameOver: boolean = false

    onLoad() {
        GameLogic.Share = this
        this.groupNode = this.node.getChildByName('GroupNode')
        this.propNode = this.node.getChildByName('PropNode')
        this.wormBulletNode = this.node.getChildByName('wormBulletNode')
        BulletPool.initPool()
    }

    start() {

    }

    gameStart() {
        tween(this.node.getChildByName('Plane')).to(0.5, { position: v3(0, -(view.getVisibleSize().height / 2 - 350)) }).call(() => {
            this.isStart = true
            this.createGroup(1)
        }).start()
    }

    createGroup(id: number) {
        resources.load('Prefabs/Group' + id, Prefab, (err, res) => {
            if (err) { console.log(err); return }
            let group = instantiate(res)
            this.groupNode.addChild(group)
        })
    }

    clearGroup() {
        this.waveCount++
        if (this.waveCount > 3) {

        } else {
            this.scheduleOnce(() => {
                this.createGroup(Utility.GetRandom(1, 10))
            }, 2)
        }
    }

    createProp(type: PropType, pos: Vec3) {
        resources.load('Prefabs/prop', Prefab, (err, res) => {
            if (err) return
            let prop = instantiate(res)
            prop.setPosition(pos)
            this.propNode.addChild(prop)
            let crl = prop.addComponent(Prop)
            crl.initData(type)
        })
    }

    revive() {
        UINode.Share.showUI(UIType.UI_GAME)
        this.wormBulletNode.destroyAllChildren()
        this.isStart = true
        this.isGameOver = false
        this.isPause = false
        Plane.Share.node.active = true
        Plane.Share.isInvincible = true
        this.scheduleOnce(() => { Plane.Share.isInvincible = false }, 2)
    }

    gameOver(isWin: boolean) {
        if (this.isGameOver) return

        Plane.Share.node.active = false
        this.isWin = isWin
        this.isStart = false
        this.isGameOver = true
        this.isPause = true

        if (!isWin && this.reviveCount <= 0) {
            this.reviveCount++
            UINode.Share.showUI(UIType.UI_Revive)
            return
        } else {
            this.scheduleOnce(this.showFinishUI, 2)
        }
    }

    showFinishUI() {
        FdMgr.showGameOver(() => {
            UINode.Share.showUI(UIType.UI_FINISH)
        })
    }

    update(deltaTime: number) {

    }
}

