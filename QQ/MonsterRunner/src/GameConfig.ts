/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import BackToHome from "./FanDong/BackToHome"
import Box1 from "./FanDong/Box1"
import Box2 from "./FanDong/Box2"
import PrivacyUI from "./FanDong/PrivacyUI"
import FinishUI from "./View/FinishUI"
import FreeSkinUI from "./View/FreeSkinUI"
import GameUI from "./View/GameUI"
import FixNodeY from "./Libs/FixNodeY"
import LoadingUI from "./View/LoadingUI"
import SkinUI from "./View/SkinUI"
import StartUI from "./View/StartUI"
import UpDownLoop from "./Mod/UpDownLoop"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=750;
    static height:number=1334;
    static scaleMode:string="fixedwidth";
    static screenMode:string="vertical";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="FDScene/BackToHome.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("FanDong/BackToHome.ts",BackToHome);
        reg("FanDong/Box1.ts",Box1);
        reg("FanDong/Box2.ts",Box2);
        reg("FanDong/PrivacyUI.ts",PrivacyUI);
        reg("View/FinishUI.ts",FinishUI);
        reg("View/FreeSkinUI.ts",FreeSkinUI);
        reg("View/GameUI.ts",GameUI);
        reg("Libs/FixNodeY.ts",FixNodeY);
        reg("View/LoadingUI.ts",LoadingUI);
        reg("View/SkinUI.ts",SkinUI);
        reg("View/StartUI.ts",StartUI);
        reg("Mod/UpDownLoop.ts",UpDownLoop);
    }
}
GameConfig.init();