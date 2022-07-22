import { assetManager, AssetManager, Sprite, SpriteFrame } from "cc";

export default class BundleMgr {
    private static ResBundle: AssetManager.Bundle = null

    static loadResBundle(str: string, cb?: Function) {
        assetManager.loadBundle(str, (err, bundle) => {
            this.ResBundle = bundle
            cb && cb()
        })
    }

    static setSpriteFrameInBundle(str: string, sp: Sprite) {
        this.ResBundle.load(str + '/spriteFrame', SpriteFrame, (err, res) => {
            sp.spriteFrame = res
        })
    }
}

