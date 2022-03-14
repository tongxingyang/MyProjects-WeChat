import PlayerDataMgr from "../Libs/PlayerDataMgr"

export default class CoinViewCrl extends Laya.Script {
    constructor() {
        super()
    }

    myOwner: Laya.FontClip

    onAwake() {
        this.myOwner = this.owner as Laya.FontClip
    }

    onUpdate() {
        this.myOwner.value = PlayerDataMgr.getPlayerData().coin.toString()
    }
}