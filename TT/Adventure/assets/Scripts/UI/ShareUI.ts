import { _decorator, Component, Node } from 'cc';
import { UINode } from '../Crl/UINode';
import { UIType } from '../Mod/Entity';
import GameRecordMgr from '../Mod/GameRecordMgr';
import { SoundMgr } from '../Mod/SoundMgr';
const { ccclass, property } = _decorator;

@ccclass('ShareUI')
export class ShareUI extends Component {
    start() {

    }

    shareBtnCB() {
        SoundMgr.Share.PlaySound('click')
        GameRecordMgr.shareVideo(() => {
            this.closeBtnCB()
        })
    }

    closeBtnCB() {
        SoundMgr.Share.PlaySound('click')
        UINode.Share.closeUI(UIType.UI_SHARE)
    }

    update(deltaTime: number) {

    }
}

