import { _decorator, Component, Node } from 'cc';
import { UINode } from '../../Scripts/Crl/UINode';
import { UIType } from '../../Scripts/Mod/Entity';
import FdAd from './FdAd';
import FdMgr from './FdMgr';
const { ccclass, property } = _decorator;

@ccclass('Home')
export class Home extends Component {

    @property(Node)
    moreBtn: Node = null

    onEnable() {

    }

    onDisable() {

    }

    ysBtnCB() {
        FdAd.hideSideBlockAd()
        FdMgr.showYsUI(() => {
            FdAd.showSideBlockAd()
        })
    }

    moreBtnCB() {
        FdAd.showBoxAd()
    }

    update(deltaTime: number) {

    }
}

