import { _decorator, Component, Node, ProgressBar, RichText, director } from 'cc';
import { PREVIEW } from 'cc/env';
import BundleMgr from '../Mod/BundleMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null
    @property(RichText)
    str: RichText = null

    start() {
        if (PREVIEW) {
            localStorage.clear()
            PlayerDataMgr.getPlayerData()
        }
        BundleMgr.loadResBundle('Res', () => {
            director.loadScene('Game')
        })
    }

    update(deltaTime: number) {
        this.pBar.progress += 0.01
        if (this.pBar.progress > 1) this.pBar.progress = 1
        this.str.string = '<outline color=black width=2>' + (this.pBar.progress * 100).toFixed(2) + '%</outline>'
    }
}

