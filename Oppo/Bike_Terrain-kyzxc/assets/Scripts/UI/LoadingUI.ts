
import { _decorator, Component, Node, ProgressBar, director, assetManager, AssetManager, Prefab, instantiate } from 'cc';
import { PREVIEW, WECHAT } from 'cc/env';
import { GameRoot } from '../../common/script/component/GameRoot';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null

    @property({ type: Prefab, tooltip: '游戏模板根节点' })
    rootPrefab: Prefab = null;

    isLoadResCompleted: boolean = false
    isWuchuCompleted: boolean = false

    start() {
        if (PREVIEW) localStorage.clear()

        if (PlayerDataMgr.getPlayerData().freeSkinId == undefined) {
            localStorage.clear()
        }
        PlayerDataMgr.getPlayerData()

        // [3]
        const root = instantiate(this.rootPrefab);
        root.parent = this.node.parent;
        root
            .getComponent(GameRoot)
            .init([], false)
            .then((success) => {
                if (success) {
                    if (window['qg']) {
                        this.loadSubPackage()
                    } else {
                        this.init()
                    }
                }
            })
            .catch((err: Error) => {

            });
    }

    init() {
        assetManager.loadBundle('Fbx', null, () => {
            assetManager.loadBundle('Terrain', null, () => {
                assetManager.loadBundle(AssetManager.BuiltinBundleName.MAIN, null, () => {
                    assetManager.loadBundle('resources', null, () => {
                        director.loadScene('scene1')
                    })
                })
            })
        })
    }

    subArr: string[] = ['Fbx', 'Terrain']
    loadSubPackage() {
        let completedCount: number = 0
        for (let i = 0; i < this.subArr.length; i++) {
            const loadTask = window['wx'].loadSubpackage({
                name: this.subArr[i], // name 可以填 name 或者 root
                success: (res) => {
                    // 分包加载成功后通过 success 回调
                    console.log('加载分包' + this.subArr[i] + '成功！')
                    completedCount++
                    if (completedCount >= this.subArr.length) {
                        this.init()
                    }
                },
                fail: (res) => {
                    // 分包加载失败通过 fail 回调
                }
            })
        }

    }

    update(deltaTime: number) {
        this.pBar.progress += 0.01
    }
}