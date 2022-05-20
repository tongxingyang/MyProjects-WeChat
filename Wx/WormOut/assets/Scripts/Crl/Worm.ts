import { _decorator, Component, Node, Sprite } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
import Utility from '../Mod/Utility';
const { ccclass, property } = _decorator;

@ccclass('Worm')
export class Worm extends Component {

    start() {
        let b1 = this.node.getChildByName('b1').getComponent(Sprite)
        let tail = b1.node.children[0].getComponent(Sprite)
        let b2 = this.node.getChildByName('b2').getComponent(Sprite)
        let b3 = this.node.getChildByName('b3').getComponent(Sprite)
        let b4 = this.node.getChildByName('b4').getComponent(Sprite)
        let head = b4.node.children[0].getComponent(Sprite)

        let id = PlayerDataMgr.getPlayerData().skinId + 1
        Utility.loadSpriteFrame('worm/worm_' + id + '_centre', b1)
        Utility.loadSpriteFrame('worm/worm_' + id + '_centre', b2)
        Utility.loadSpriteFrame('worm/worm_' + id + '_centre', b3)
        Utility.loadSpriteFrame('worm/worm_' + id + '_centre', b4)
        Utility.loadSpriteFrame('worm/worm_' + id + '_tail', tail)
        Utility.loadSpriteFrame('worm/worm_' + id + '_head', head)
    }

    update(deltaTime: number) {

    }
}

