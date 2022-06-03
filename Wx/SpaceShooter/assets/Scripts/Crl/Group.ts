import { _decorator, Component, Node, instantiate } from 'cc';
import { PropType } from '../Mod/Entity';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import Utility from '../Mod/Utility';
import { GameLogic } from './GameLogic';
import { Worm } from './Worm';
const { ccclass, property } = _decorator;

@ccclass('Group')
export class Group extends Component {

    _pointNode: Node = null
    _endGrid: Node = null
    _wormNode: Node = null
    _wormPrefab: Node = null
    warning: Node = null

    _isClear: boolean = false

    onLoad() {
        this._pointNode = this.node.getChildByName('pointNode')
        this._endGrid = this.node.getChildByName('endGrid')
        this._wormNode = this.node.getChildByName('WormNode')
        this._wormPrefab = this.node.getChildByName('Worm')
        this.warning = this.node.getChildByName('warning')
    }

    start() {
        this.scheduleOnce(() => {
            this.warning.active = false
            this.createWorm()
            this.schedule(this.checkClear)
        }, 2)
    }

    createWorm() {
        let count: number = this._endGrid.children.length
        let arr = Utility.getRandomByLength(count, Utility.GetRandom(2, 4))
        for (let i = 0; i < count; i++) {
            this.scheduleOnce(() => {
                let worm = instantiate(this._wormPrefab)
                worm.active = true
                this._wormNode.addChild(worm)
                let crl = worm.getComponent(Worm)
                crl.initData(this._pointNode, this._endGrid)
                GameLogic.Share.wormArr.push(worm)

                if (arr.indexOf(i) > 0) {
                    crl._type = PropType.Prop_Up
                } else if (arr.indexOf(i) == 0) {
                    if (PlayerDataMgr.getPlayerData().grade > 1 || GameLogic.Share.hadShowPow)
                        crl._type = Math.random() > 0.3 ? PropType.Prop_Plane : PropType.Prop_Pow
                    else
                        crl._type = PropType.Prop_Pow
                    GameLogic.Share.hadShowPow = true
                }
            }, i * 0.2)
        }
    }

    checkClear() {
        if (!this._isClear && this._wormNode.children.length <= 0) {
            this._isClear = true
            this.node.destroy()
            GameLogic.Share.clearGroup()
        }
    }

    update(deltaTime: number) {
    }
}

