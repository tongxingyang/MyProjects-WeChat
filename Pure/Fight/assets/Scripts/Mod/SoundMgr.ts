
import { _decorator, Component, Node, resources, AudioClip, AudioSource, log, game } from 'cc';
import { WECHAT } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('SoundMgr')
export class SoundMgr extends Component {

    public static Share: SoundMgr

    private currentMusic: string = ""

    private currentAid: number = -1

    private isMusic: boolean = true
    private isSound: boolean = true

    onLoad() {
        SoundMgr.Share = this
        game.addPersistRootNode(this.node)
    }

    start() {
        // [3]
    }

    validMusic(v: boolean) {
        this.isMusic = v
        if (!this.isMusic)
            this.StopMuisc()
        else
            this.PlayMusic(this.currentMusic)
    }
    validSound(v: boolean) {
        this.isSound = v
    }

    loadSounds(cb: Function) {
        resources.loadDir('Sounds', AudioClip, (err, clips) => {
            clips.forEach((sound) => {
                let clip = new Node()
                let crl = clip.addComponent(AudioSource)
                crl.playOnAwake = false
                crl.clip = sound
                clip.name = sound.name
                this.node.addChild(clip)

            })
            cb && cb()
        })
    }

    PlaySound(key: string, loop: boolean = false, volume: number = 1) {
        if (this.node == null || !this.isSound) {
            return null
        }
        let source = this.node.getChildByName(key)
        if (source == null) {
            console.log("can't load sound", key)
            return null
        }
        this.node.getChildByName(key).getComponent(AudioSource).loop = loop
        this.node.getChildByName(key).getComponent(AudioSource).volume = volume
        return this.node.getChildByName(key).getComponent(AudioSource).play()
    }

    stopSound(key: string) {
        this.node.getChildByName(key).getComponent(AudioSource).stop()
    }

    getMusicClip(key: string) {
        return this.node.getChildByName(key).getComponent(AudioSource).clip
    }

    PlayMusic(key: string, loop: boolean = true) {
        if (this.isMusic && this.currentMusic) {
            this.StopMuisc(this.currentMusic)
        }
        this.currentMusic = key
        if (this.node == null || !this.isMusic) {
            return
        }
        let source = this.node.getChildByName(key)
        if (source == null) {
            log("can't load music", key)
            return
        }
        this.node.getChildByName(key).getComponent(AudioSource).loop = loop
        this.node.getChildByName(key).getComponent(AudioSource).play()
    }

    StopMuisc(key?: string) {
        if (this.node == null) {
            return
        }
        this.node.getChildByName(key ? key : this.currentMusic).getComponent(AudioSource).stop()
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
