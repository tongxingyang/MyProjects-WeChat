
import { _decorator, Component, Node, ProgressBar, director, assetManager, AssetManager } from 'cc';
import { PREVIEW, WECHAT } from 'cc/env';
import FdMgr from '../../FDRes/Src/FdMgr';
import PlayerDataMgr from '../Mod/PlayerDataMgr';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends Component {

    @property(ProgressBar)
    pBar: ProgressBar = null

    isLoadResCompleted: boolean = false
    isWuchuCompleted: boolean = false

    start() {
        if (PREVIEW) localStorage.clear()

        if (PlayerDataMgr.getPlayerData().freeSkinId == undefined) {
            localStorage.clear()
        }
        PlayerDataMgr.getPlayerData()

        if (WECHAT) {
            //开启右上角的分享
            window['wx'].showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            window['wx'].onShareAppMessage(function (res) {
                return {
                    title: '狂野自行车',
                    imageUrl: '',
                }
            })
        }
        // [3]
        if (WECHAT) {
            this.loadSubPackage()
        } else {
            this.init()
        }

        FdMgr.init(() => {
            FdMgr.loadGame(() => {
                this.isWuchuCompleted = true
            })
        })

        this.schedule(() => {
            if (this.isLoadResCompleted && this.isWuchuCompleted) {
                this.unscheduleAllCallbacks()
                director.loadScene('scene1')
            }
        })
    }

    init() {
        assetManager.loadBundle('Fbx', null, () => {
            assetManager.loadBundle('Terrain', null, () => {
                assetManager.loadBundle(AssetManager.BuiltinBundleName.MAIN, null, () => {
                    assetManager.loadBundle('resources', null, () => {
                        this.isLoadResCompleted = true
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