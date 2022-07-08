import { _decorator, Component, Node, Toggle } from 'cc';
import GameData from '../Crl/GameData';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import PlatformApi from '../Mod/PlatformApi';
import { SoundMgr } from '../Mod/SoundMgr';
import TTAdMgr from '../TT/TTAdMgr';
const { ccclass, property } = _decorator;

@ccclass('SettingUI')
export class SettingUI extends Component {

    @property(Toggle)
    musicToggle: Toggle = null
    @property(Toggle)
    soundToggle: Toggle = null
    @property(Toggle)
    vibrateToggle: Toggle = null

    onEnable() {
        this.musicToggle.isChecked = GameData.isMusic
        this.soundToggle.isChecked = GameData.isSound
        this.vibrateToggle.isChecked = PlatformApi.isVibrate
        TTAdMgr.showBanner()
    }


    onDisable() {
        TTAdMgr.hideBanner()
    }

    toggleMusicBtnCB() {
        GameData.isMusic = this.musicToggle.isChecked
        SoundMgr.Share.validMusic(GameData.isMusic)
        SoundMgr.Share.PlaySound('click')
    }
    toggleSoundBtnCB() {
        GameData.isSound = this.soundToggle.isChecked
        SoundMgr.Share.validSound(GameData.isSound)
        SoundMgr.Share.PlaySound('click')
    }
    toggleVibrateBtnCB() {
        PlatformApi.isVibrate = this.vibrateToggle.isChecked
        SoundMgr.Share.PlaySound('click')
    }

    backBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.showUI(UIType.UI_START)
    }

    update(deltaTime: number) {

    }
}

