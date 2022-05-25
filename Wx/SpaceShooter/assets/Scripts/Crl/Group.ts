import { _decorator, Component, Node, instantiate } from 'cc';
import { Worm } from './Worm';
const { ccclass, property } = _decorator;

@ccclass('Group')
export class Group extends Component {

    _pointNode: Node = null
    _endGrid: Node = null
    _wormNode: Node = null
    _wormPrefab: Node = null

    onLoad() {
        this._pointNode = this.node.getChildByName('pointNode')
        this._endGrid = this.node.getChildByName('endGrid')
        this._wormNode = this.node.getChildByName('WormNode')
        this._wormPrefab = this.node.getChildByName('Worm')
    }

    start() {
        this.createWorm()
    }

    createWorm() {
        let count: number = this._endGrid.children.length
        for (let i = 0; i < count; i++) {
            this.scheduleOnce(() => {
                let worm = instantiate(this._wormPrefab)
                worm.active = true
                this._wormNode.addChild(worm)
                let crl = worm.getComponent(Worm)
                crl.initData(this._pointNode, this._endGrid)
            }, i * 0.2)
        }
    }

    update(deltaTime: number) {

    }
}

