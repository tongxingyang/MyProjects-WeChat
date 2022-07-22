import { _decorator, Component, Node, tween, v3, UIOpacity, Color, Sprite } from 'cc';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('SwordEffect')
export class SwordEffect extends Component {

    start() {

        let weaponId = PlayerDataMgr.getPlayerData().weaponId
        let enchantType = PlayerDataMgr.getPlayerData().weaponEnchantTypeArr[weaponId]
        switch (enchantType) {
            case 0:
                this.node.getComponent(Sprite).color = new Color().fromHEX('#ffffff')
                this.node.getComponent(Sprite).color = new Color().fromHEX('#ffffff')
                break
            case 1:
                this.node.getComponent(Sprite).color = new Color().fromHEX('#ffff00')
                this.node.getComponent(Sprite).color = new Color().fromHEX('#ffff00')
                break
            case 2:
                this.node.getComponent(Sprite).color = new Color().fromHEX('#00ffff')
                this.node.getComponent(Sprite).color = new Color().fromHEX('#00ffff')
                break
            case 3:
                this.node.getComponent(Sprite).color = new Color().fromHEX('#F500FF')
                this.node.getComponent(Sprite).color = new Color().fromHEX('#F500FF')
                break
            case 4:
                this.node.getComponent(Sprite).color = new Color().fromHEX('#00FF00')
                this.node.getComponent(Sprite).color = new Color().fromHEX('#00FF00')
                break
        }

        tween(this.node.getComponent(UIOpacity))
            .to(0.4, { opacity: 0 })
            .start()
        tween(this.node)
            .to(0.3, { scale: v3(1, 0, 1) })
            .call(() => {
                this.node.destroy()
            }).start()
    }

    update(deltaTime: number) {
    }
}

