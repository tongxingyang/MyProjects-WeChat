import GameLogic from "./GameLogic";

export default class Effects {

    static createBoom1(pos: Laya.Vector3) {
        let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_1'), GameLogic.Share._levelNode, false)
        fx.transform.position = pos
        Laya.timer.once(1000, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    static createPurple(pos: Laya.Vector3) {
        let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_2_Purple'), GameLogic.Share._levelNode, false)
        fx.transform.position = pos
        Laya.timer.once(500, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    static createGreen(pos: Laya.Vector3) {
        let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_2_Green'), GameLogic.Share._levelNode, false)
        fx.transform.position = pos
        Laya.timer.once(500, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    static createOrange(pos: Laya.Vector3) {
        let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_2_Orange'), GameLogic.Share._levelNode, false)
        fx.transform.position = pos
        Laya.timer.once(500, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    static createBoom4(pos: Laya.Vector3) {
        let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Bomb_4'), GameLogic.Share._levelNode, false)
        fx.transform.position = pos
        fx.transform.setWorldLossyScale(new Laya.Vector3(2, 2, 2))
        Laya.timer.once(1500, this, () => {
            if (fx && !fx.destroyed) fx.destroy()
        })
    }

    static createFireWork(pos: Laya.Vector3) {
        let fx = Laya.Sprite3D.instantiate(GameLogic.Share.getItemByName('Fireworks_1'), GameLogic.Share._levelNode, false)
        fx.transform.position = pos
    }

}