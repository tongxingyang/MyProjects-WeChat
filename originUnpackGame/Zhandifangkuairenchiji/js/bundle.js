(function () {
    "use strict";
    class Dispatcher {
        constructor() { }
        static AddListener(type, caller, listener, args = null) {
            Dispatcher._dspt.on(type, caller, listener, args);
        }
        static RemoveListener(type, caller, listener, onceOnly = false) {
            Dispatcher._dspt.off(type, caller, listener, onceOnly);
        }
        static Event(type, data) {
            Dispatcher._dspt.event(type, data);
        }
        static HasListener(type) {
            return Dispatcher._dspt.hasListener(type);
        }
    }
    Dispatcher._dspt = new Laya.EventDispatcher();
    class EventType { }
    EventType.OnPlayerAim = "OnPlayerAim";
    EventType.OnPlayerJump = "OnPlayerJump";
    EventType.OnPlayerCrouch = "OnPlayerCrouch";
    EventType.OnRunBtnDown = "OnRunBtnDown";
    EventType.OnRunBtnUp = "OnRunBtnUp";
    EventType.OnWeaponFire = "OnWeaponFire";
    EventType.OnWeaponSingleFire = "OnWeaponSingleFire";
    EventType.OnAutoReload = "OnAutoReload";
    EventType.OnPlayerReborn = "OnPlayerReborn";
    EventType.OnPlayerDie = "OnPlayerDie";
    EventType.OnEnemyHitPlayer = "OnEnemyHitPlayer";
    EventType.OnMatchOver = "OnMatchOver";
    EventType.OnAIDieRemoveArrayItem = "OnAIDieRemoveArrayItem";
    EventType.OnReloadEnd = "OnReloadEnd";
    EventType.OnChangeWeapon = "OnChangeWeapon";
    EventType.OnOpenSelectAllWeaponsPanel = "OnOpenSelectAllWeaponsPanel";
    EventType.OnOpenSelectSingleWeaponPanel = "OnOpenSelectSingleWeaponPanel";
    EventType.OnPlayerKillEnemy = "OnPlayerKillEnemy";
    EventType.OnPlayerKillTeammate = "OnPlayerKillTeammate";
    EventType.OnPlayerHitEnemy = "OnPlayerHitEnemy";
    EventType.OnPlayerRelaseFire = "OnPlayerRelaseFire";
    EventType.OnPlayerInteraptReload = "OnPlayerInteraptReload";
    EventType.OnPlayerColViecle = "OnPlayerColViecle";
    EventType.OnPlayerLeaveColViecle = "OnPlayerLeaveColViecle";
    EventType.OnZombieColHome = "OnZombieColHome";
    EventType.OnZombieEnemyDie = "OnZombieEnemyDie";
    EventType.OnZombieModeFinish = "OnZombieModeFinish";
    EventType.OnPlayerMouseDownFireBtn = "OnPlayerMouseDownFireBtn";
    EventType.OnPlayerMouseUpFireBtn = "OnPlayerMouseUpFireBtn";
    EventType.OnFireGunHitAI = "OnFireGunHitAI";
    EventType.OnPlayerQuitSniperAim = "OnPlayerQuitSniperAim";
    EventType.OnGrenadeBoom = "OnGrenadeBoom";
    EventType.OnPlayerUseHpBox = "OnPlayerUseHpBox";
    EventType.OnPlayerUseAmmoBox = "OnPlayerUseAmmoBox";
    EventType.OnPlayerJumpInAir = "OnPlayerJumpInAir";
    EventType.OnPlayerSelfKill = "OnPlayerSelfKill";
    EventType.OnPlayerDownViecle = "OnPlayerDownViecle";
    EventType.OnCurrencyChange = "OnCurrencyChange";
    EventType.OnResLoadFinishCloseLoadingUI = "OnResLoadFinishCloseLoadingUI";
    EventType.OnWeaponUnlockStateChange = "OnWeaponUnlockStateChange";
    EventType.OnAIDiePostSlefData = "OnAIDiePostSlefData";
    EventType.OnMouseSensitivityMulChange = "OnMouseSensitivityMulChange";
    EventType.OnReFullWeaponBullets = "OnReFullWeaponBullets";
    EventType.OnBackToMenu = "OnBackToMenu";
    EventType.OnPlayetKillEnemyCountKill = "OnPlayetKillEnemyCountKill";
    EventType.OnPlayerClaimMissionAward = "OnPlayerClaimMissionAward";
    EventType.OnOpenOtherCurrencyPanelInMenuSc = "OnOpenOtherCurrencyPanelInMenuSc";
    EventType.OnCloseOtherCurrencyPanelInMenuSc = "OnCloseOtherCurrencyPanelInMenuSc";
    EventType.OnStartBattleModeGame = "OnStartBattleModeGame";
    EventType.OnPlayerDrawSpinAward = "OnPlayerDrawSpinAward";
    EventType.OnPlayerClaimRankAward = "OnPlayerClaimRankAward";
    EventType.OnPlayerUpdateEquip = "OnPlayerUpdateEquip";
    EventType.OnPlayerRepaireZombieModeHome = "OnPlayerRepaireZombieModeHome";
    EventType.OnEquipShopClose = "OnEquipShopClose";
    EventType.OnPlayerSignToday = "OnPlayerSignToday";
    EventType.OnHandKillPlayer = "OnHandKillPlayer";
    EventType.OnBeyondDay = "OnBeyondDay";
    EventType.OnResetSignTime = "OnResetSignTime";
    EventType.OnResetMission = "OnResetMission";
    EventType.OnDoSpawnPlayer = "OnDoSpawnPlayer";
    EventType.OnUseParachuteBox = "OnUseParachuteBox";
    EventType.OnPlayerBeHit = "OnPlayerBeHit";
    EventType.OnWatchAdTryUseWeapon = "OnWatchAdTryUseWeapon";
    EventType.OnAirePlaneVerMove = "OnAirePlaneVerMove";
    EventType.OnAirePlaneForBackMove = "OnAirePlaneForBackMove";
    EventType.OnPlayerViecleBeHit = "OnPlayerViecleBeHit";
    EventType.OnPlayerAirePlaneDieAndPlayerOnIt = "OnPlayerAirePlaneDieAndPlayerOnIt";
    EventType.OnYouYuMuTouRen = "OnYouYuMuTouRen";
    EventType.MuTouRenFire = "MuTouRenFire";
    EventType.MuTouRenFireFinish = "MuTouRenFireFinish";
    EventType.YY_Start = "YY_Start";
    EventType.YY_End = "YY_End";
    EventType.YYBLR = "YYBLR";
    EventType.AIJumping = "AIJumping";
    EventType.AIJumpend = "AIJumpend";
    EventType.CloseNative = "CloseNative";
    EventType.m5qt = "m5qt";
    class Tool {
        static NormalizeV2(v2) {
            let outV2 = new Laya.Vector2();
            Laya.Vector2.normalize(v2, outV2);
            return outV2;
        }
        static SubV2(v1, v2) {
            return new Laya.Vector2(v1.x - v2.x, v1.y - v2.y);
        }
        static AddV2(v1, v2) {
            return new Laya.Vector2(v1.x + v2.x, v1.y + v2.y);
        }
        static MulV2(v, n) {
            return new Laya.Vector2(v.x * n, v.y * n);
        }
        static DivV2(v, n) {
            if (n == 0) return new Laya.Vector2(0, 0);
            return new Laya.Vector2(v.x / n, v.y / n);
        }
        static DisV2(v1, v2) {
            let v = new Laya.Vector2(v1.x - v2.x, v1.y - v2.y);
            let dis = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
            return dis;
        }
        static DisV2Squared(v1, v2) {
            let v = new Laya.Vector2(v1.x - v2.x, v1.y - v2.y);
            let disSquared = Math.pow(v.x, 2) + Math.pow(v.y, 2);
            return disSquared;
        }
        static V2(x, y) {
            return new Laya.Vector2(x, y);
        }
        static V2Zero() {
            return new Laya.Vector2(0, 0);
        }
        static V2One() {
            return new Laya.Vector2(1, 1);
        }
        static NormalizeV3(v3) {
            let outV3 = new Laya.Vector3();
            Laya.Vector3.normalize(v3, outV3);
            return outV3;
        }
        static MulV3(v3, n) {
            return new Laya.Vector3(v3.x * n, v3.y * n, v3.z * n);
        }
        static DivV3(v3, n) {
            if (n == 0) return new Laya.Vector3(0, 0, 0);
            return new Laya.Vector3(v3.x / n, v3.y / n, v3.z / n);
        }
        static AddV3(v1, v2) {
            let outV3 = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.add(v1, v2, outV3);
            return outV3;
        }
        static SubV3(v1, v2) {
            let outV3 = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(v1, v2, outV3);
            return outV3;
        }
        static DisV3(v1, v2) {
            return Laya.Vector3.distance(v1, v2);
        }
        static DisV3Squared(v1, v2) {
            return Laya.Vector3.distanceSquared(v1, v2);
        }
        static V3(x, y, z) {
            return new Laya.Vector3(x, y, z);
        }
        static V3ReverseX(x, y, z) {
            return new Laya.Vector3(-x, y, z);
        }
        static V3Zero() {
            return new Laya.Vector3(0, 0, 0);
        }
        static V3One() {
            return new Laya.Vector3(1, 1, 1);
        }
        static V3Forward() {
            return new Laya.Vector3(0, 0, 1);
        }
        static V3Up() {
            return new Laya.Vector3(0, 1, 0);
        }
        static QuatMulV3Diy(rotation, v3) {
            let num1 = rotation.x * 2;
            let num2 = rotation.y * 2;
            let num3 = rotation.z * 2;
            let num4 = rotation.x * num1;
            let num5 = rotation.y * num2;
            let num6 = rotation.z * num3;
            let num7 = rotation.x * num2;
            let num8 = rotation.x * num3;
            let num9 = rotation.y * num3;
            let num10 = rotation.w * num1;
            let num11 = rotation.w * num2;
            let num12 = rotation.w * num3;
            let vector3 = new Laya.Vector3(0, 0, 0);
            vector3.x = (1 - (num5 + num6)) * v3.x + (num7 - num12) * v3.y + (num8 + num11) * v3.z;
            vector3.y = (num7 + num12) * v3.x + (1 - (num4 + num6)) * v3.y + (num9 - num10) * v3.z;
            vector3.z = (num8 - num11) * v3.x + (num9 + num10) * v3.y + (1 - (num4 + num5)) * v3.z;
            return vector3;
        }
        static QuatMulV3(rot, tempV3) {
            let outV3 = Tool.V3Zero();
            Laya.Vector3.transformQuat(tempV3, rot, outV3);
            return outV3;
        }
        static GetForwardByRot(quat) {
            return Tool.QuatMulV3(quat, new Laya.Vector3(0, 0, 1));
        }
        static LerpV3(v1, v2, t) {
            let outV3 = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.lerp(v1, v2, t, outV3);
            return outV3;
        }
        static LerpV3Diy(a, b, t) {
            t = Tool.ClampNum0To1(t);
            return new Laya.Vector3(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, a.z + (b.z - a.z) * t);
        }
        static IsTargetFrontMe(target1, tartget2) {
            let forward = Tool.GetForwardByRot(target1.rotation);
            let toOther = Tool.SubV3(tartget2.position, target1.position);
            if (Laya.Vector3.dot(forward, toOther) < 0) {
                return false;
            }
            return true;
        }
        static LookAtTarget(selfSp3d, target) {
            if (!target || !target.transform) return;
            let v3 = target.transform.position;
            let targetV3 = Tool.V3(v3.x, selfSp3d.transform.position.y, v3.z);
            selfSp3d.transform.lookAt(targetV3, Tool.V3(0, 1, 0));
            selfSp3d.transform.rotate(new Laya.Vector3(0, 180, 0), false, false);
        }
        static LookAtTargetV3(selfSp3d, target) {
            if (!target || !target) return;
            let v3 = target;
            let targetV3 = Tool.V3(v3.x, selfSp3d.transform.position.y, v3.z);
            selfSp3d.transform.lookAt(targetV3, Tool.V3(0, 1, 0));
            selfSp3d.transform.rotate(new Laya.Vector3(0, 180, 0), false, false);
        }
        static QuarSlerp(quat1, quat2, t) {
            let outQuat = new Laya.Quaternion();
            Laya.Quaternion.lerp(quat1, quat2, t, outQuat);
            return outQuat;
        }
        static MidUiX(ui) {
            ui.centerX = 0;
        }
        static MidUiY(ui) {
            ui.centerY = 0;
        }
        static MidUiXY(ui) {
            ui.centerX = 0;
            ui.centerY = 0;
        }
        static StretchUI(ui) {
            ui.left = ui.right = ui.top = ui.bottom = 0;
        }
        static GetChild(target, targetName) {
            let length = target.numChildren;
            if (length == 0) return null;
            for (let i = 0; i < length; i++) {
                if (target.getChildAt(i).name == targetName) {
                    return target.getChildAt(i);
                }
            }
        }
        static GetChildRecursion(target, targetName) {
            let child = Tool.GetChild(target, targetName);
            if (child != null) {
                return child;
            }
            let go = null;
            for (let i = 0; i < target.numChildren; i++) {
                child = target.getChildAt(i);
                go = Tool.GetChildRecursion(child, targetName);
                if (go != null) {
                    return go;
                }
            }
        }
        static GetAllChildrenArray(parentNode) {
            let allChildrenArray = [];
            Tool.FindAndGetAllChildren(parentNode, allChildrenArray);
            return allChildrenArray;
        }
        static GetAllChildrenMap(parentNode) {
            let allChildrenArray = Tool.GetAllChildrenArray(parentNode);
            let map = new Map();
            for (let i = 0; i < allChildrenArray.length; i++) {
                if (!map.has(allChildrenArray[i].name)) {
                    map.set(allChildrenArray[i].name, allChildrenArray[i]);
                }
            }
            return map;
        }
        static GetNodeByMap(nodeName, map) {
            if (!map.has(nodeName)) {
                return null;
            }
            return map.get(nodeName);
        }
        static FindAndGetAllChildren(parentNode, outNodesArray) {
            if (parentNode.numChildren > 0) {
                let nodeArray = Tool.GetChildNodesArray(parentNode);
                nodeArray.forEach(node => {
                    outNodesArray.push(node);
                    if (Tool.GetChildNodesArray(node).length > 0) {
                        Tool.FindAndGetAllChildren(node, outNodesArray);
                    } else {
                        return outNodesArray;
                    }
                });
            }
            return null;
        }
        static GetChildNodesArray(target) {
            let nodeArray = [];
            for (let i = 0; i < target.numChildren; i++) {
                let node = target.getChildAt(i);
                if (node) {
                    nodeArray.push(node);
                }
            }
            return nodeArray;
        }
        static GetSp3d(parent, targetName) {
            return parent.getChildByName(targetName);
        }
        static GetMeshSp3d(parent, targetName) {
            return parent.getChildByName(targetName);
        }
        static GetBtn(parent, targetName) {
            return parent.getChildByName(targetName);
        }
        static GetImg(parent, targetName) {
            return parent.getChildByName(targetName);
        }
        static GetTxt(parent, targetName) {
            return parent.getChildByName(targetName);
        }
        static HasItemInArray(item, array) {
            if (array.length == 0 || !array) return false;
            for (let i = 0; i < array.length; i++) {
                if (array[i] == item) return true;
            }
            return false;
        }
        static DelItemInArray(item, array) {
            if (array.length == 0 || !array) return;
            let targetIndex = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] == item) {
                    targetIndex = i;
                }
            }
            array.splice(targetIndex, 1);
        }
        static UiClickColor(ui) {
            let blackMat = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
            let blackFilter = new Laya.ColorFilter(blackMat);
            blackFilter.adjustBrightness(-100);
            ui.filters = [blackFilter];
        }
        static UiSourceColor(ui) {
            let blackMat = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
            let blackFilter = new Laya.ColorFilter(blackMat);
            blackFilter.adjustBrightness(0);
            ui.filters = [blackFilter];
        }
        static AddBtnEvent(bt, caller, callback, needPlayClickSound = true, ClickSoundPath = "res/Sounds/click.mp3") {
            bt.stateNum = 1;
            bt.on(Laya.Event.MOUSE_DOWN, caller, () => {
                Tool.UiClickColor(bt);
            });
            bt.on(Laya.Event.MOUSE_OVER, caller, () => {
                Tool.UiClickColor(bt);
            });
            bt.on(Laya.Event.MOUSE_OUT, caller, () => {
                Tool.UiSourceColor(bt);
            });
            bt.on(Laya.Event.MOUSE_UP, caller, () => {
                Tool.UiSourceColor(bt);
            });
            bt.on(Laya.Event.CLICK, caller, e => {
                callback(e);
                if (needPlayClickSound == true) Laya.SoundManager.playSound(ClickSoundPath);
            });
        }
        static AddBtnEventNoFx(bt, caller, callback, needPlayClickSound = true, ClickSoundPath = "res/Sounds/click.mp3") {
            bt.stateNum = 1;
            bt.on(Laya.Event.MOUSE_DOWN, caller, () => { });
            bt.on(Laya.Event.MOUSE_OVER, caller, () => { });
            bt.on(Laya.Event.MOUSE_OUT, caller, () => { });
            bt.on(Laya.Event.MOUSE_UP, caller, () => { });
            bt.on(Laya.Event.CLICK, caller, e => {
                callback(e);
                if (needPlayClickSound == true) Laya.SoundManager.playSound(ClickSoundPath);
            });
        }
        static AddBtnEventScale(bt, caller, callback, needPlayClickSound = true, ClickSoundPath = "res/Sounds/click.mp3") {
            bt.stateNum = 1;
            bt.on(Laya.Event.MOUSE_DOWN, caller, () => {
                Laya.Tween.to(bt, {
                    scaleX: .9,
                    scaleY: .9
                }, 50);
            });
            bt.on(Laya.Event.MOUSE_OVER, caller, () => { });
            bt.on(Laya.Event.MOUSE_OUT, caller, () => {
                Laya.Tween.to(bt, {
                    scaleX: 1,
                    scaleY: 1
                }, 50);
            });
            bt.on(Laya.Event.MOUSE_UP, caller, () => {
                Laya.Tween.to(bt, {
                    scaleX: 1,
                    scaleY: 1
                }, 50);
            });
            bt.on(Laya.Event.CLICK, caller, e => {
                callback(e);
                if (needPlayClickSound == true) Laya.SoundManager.playSound(ClickSoundPath);
            });
        }
        static OnMouseDownUpOut(ui, caller, downCb, upCb, outCb) {
            ui.on(Laya.Event.MOUSE_DOWN, caller, e => {
                Tool.UiClickColor(ui);
                downCb(e);
            });
            ui.on(Laya.Event.MOUSE_UP, caller, () => {
                Tool.UiSourceColor(ui);
                upCb();
            });
            if (!outCb) {
                outCb = upCb;
            }
            ui.on(Laya.Event.MOUSE_OUT, caller, () => {
                Tool.UiSourceColor(ui);
                outCb();
            });
        }
        static OnMouseDownUpOutNoFx(ui, caller, downCb, upCb, outCb) {
            ui.on(Laya.Event.MOUSE_DOWN, caller, e => {
                downCb(e);
            });
            ui.on(Laya.Event.MOUSE_UP, caller, () => {
                upCb();
            });
            if (!outCb) {
                outCb = upCb;
            }
            ui.on(Laya.Event.MOUSE_OUT, caller, () => {
                outCb();
            });
        }
        static FormatNumberToTime(sec, needHour = false) {
            let hour = Math.floor(sec / 3600);
            let minute = Math.floor((sec - hour * 3600) / 60);
            let second = sec - hour * 3600 - minute * 60;
            let hourStr = "";
            let minStr = "";
            let secStr = "";
            if (hour < 10) {
                hourStr = "0" + hour;
            } else {
                hourStr = hour + "";
            }
            if (minute < 10) {
                minStr = "0" + minute;
            } else {
                minStr = minute + "";
            }
            if (second < 10) {
                secStr = "0" + second;
            } else {
                secStr = second + "";
            }
            if (needHour) {
                return hourStr + ":" + minStr + ":" + secStr;
            }
            return minStr + ":" + secStr;
        }
        static ClampNum0To1(value) {
            if (value < 0) return 0;
            if (value > 1) return 1;
            return value;
        }
        static ClampNum(value, min, max) {
            if (value < min) value = min; else if (value > max) value = max;
            return value;
        }
        static Repeat(t, length) {
            return Tool.ClampNum(t - Math.floor(t / length) * length, 0, length);
        }
        static PingPong(t, length) {
            t = Tool.Repeat(t, length * 2);
            return length - Math.abs(t - length);
        }
        static LerpNum(a, b, t) {
            return a + (b - a) * Tool.ClampNum0To1(t);
        }
        static SmoothLerpNum(curValue, targetValue, t) {
            var interpolation = Math.abs(curValue - targetValue);
            curValue = Tool.LerpNum(curValue, targetValue, 1 / interpolation * t);
            return curValue;
        }
        static RandBool() {
            return Boolean(Math.round(Math.random()));
        }
        static RandomInt(max) {
            let i = Math.floor(Math.random() * max);
            return i;
        }
        static RandInsideUnitCircle() {
            let randX = Math.random();
            let randY = Math.random();
            let x = Tool.RandBool() == true ? -randX : randX;
            let y = Tool.RandBool() == true ? -randY : randY;
            return Tool.V2(x, y);
        }
        static ClearTimerAndTween(caller) {
            Laya.timer.clearAll(caller);
            Laya.Tween.clearAll(caller);
        }
        static ClearTragetTween(tween) {
            if (tween) {
                Laya.Tween.clear(tween);
                tween = null;
            }
        }
        static RadianToDegree(radian) {
            return radian * (180 / Math.PI);
        }
        static DegreeToRadian(degree) {
            return degree * (Math.PI / 180);
        }
        static DisableHDR(cam) {
            cam.enableHDR = false;
        }
        static ShowFpsInfo() {
            Laya.Stat.show();
        }
        static SetUIXY(ui, x, y) {
            ui.x = x;
            ui.y = y;
        }
        static AddMgrToStage(mgr) {
            if (Laya.stage.getComponent(mgr)) return;
            Laya.stage.addComponent(mgr);
        }
        static AddSrcToNode(src, targetNode) {
            if (targetNode.getComponent(src)) return;
            targetNode.addComponent(src);
        }
        static ProjectOnPlane(vp, vn) {
            return Tool.SubV3(vp, Tool.MulV3(vn, Laya.Vector3.dot(vp, vn) / Laya.Vector3.dot(vn, vn)));
        }
        static LoadJosn(caller, jsonPath, cb) {
            Laya.loader.load(jsonPath, Laya.Handler.create(caller, () => {
                let json = Laya.loader.getRes(jsonPath);
                if (cb) cb(json);
            }), null, Laya.Loader.JSON);
        }
        static GetJsonLength(json) {
            if (!json) return 0;
            return Object.keys(json).length;
        }
        static DeltaTime() {
            return Laya.timer.delta / 1e3;
        }
        static SetPbrMatAlpha(pbrMat, alpha) {
            pbrMat.albedoColor.w = alpha;
        }
        static IsPointInCircle(cirleR, targetSp3d, circleSp3d, offset = 0) {
            let x = circleSp3d.transform.position.x;
            let y = circleSp3d.transform.position.z;
            let r = cirleR * targetSp3d.transform.localScaleX;
            let x1 = targetSp3d.transform.position.x;
            let y1 = targetSp3d.transform.position.z;
            if (!((x - x1) * (x - x1) + (y - y1) * (y - y1) > r * r + offset)) {
                return true;
            }
            return false;
        }
        static EnableMultiTouch() {
            Laya.Input3D.prototype.multiTouchEnabled = true;
            Laya.MouseManager.multiTouchEnabled = true;
        }
        static TweenToSmallLoopBig(ui, caller, scale = .9) {
            Laya.Tween.to(ui, {
                scaleX: scale,
                scaleY: scale
            }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(caller, function () {
                Tool.TweenToBig(ui, caller);
            }));
        }
        static TweenToBig(ui, caller) {
            Laya.Tween.to(ui, {
                scaleX: 1,
                scaleY: 1
            }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(caller, function () {
                Tool.TweenToSmallLoopBig(ui, caller);
            }));
        }
        SetCamRenderLayer(camera, layer) {
            camera.removeAllLayers();
            camera.addLayer(layer);
        }
        GetSysIsAndroidOrIos() {
            let u = navigator.userAgent;
            let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if (isAndroid) {
                return "az";
            } else if (isiOS) {
                return "ios";
            } else {
                return "other";
            }
        }
    }
    class InputMgr extends Laya.Script {
        constructor() {
            super();
            this.canInput = true;
            this.isAim = false;
            this.isFire = false;
            this.isJumping = false;
            this.isChangingWeapon = false;
            this.fireTouchId = 0;
            this.viecleFireTouchId = 0;
            this.runTouchId = 0;
            InputMgr.Instance = this;
        }
        GetCanInput() {
            return this.canInput;
        }
        SetCanInput(canInput) {
            this.canInput = canInput;
        }
        GetIsAim() {
            return this.isAim;
        }
        SetIsAim(isAim) {
            if (!this.canInput) {
                return;
            }
            this.isAim = isAim;
        }
        GetIsFire() {
            return this.isFire;
        }
        SetIsFire(isFire) {
            if (!this.canInput) {
                return;
            }
            this.isFire = isFire;
        }
        GetIsChangingWeapon() {
            return this.isChangingWeapon;
        }
        SetIsChangingWeapon(isChangingWeapon) {
            this.isChangingWeapon = isChangingWeapon;
        }
        SetIsJumping(isJumping) {
            this.isJumping = isJumping;
        }
        GetIsJumping() {
            return this.isJumping;
        }
        GetNowFireTouchId() {
            return this.fireTouchId;
        }
        SetNowFireTouchId(fireTouchId) {
            this.fireTouchId = fireTouchId;
        }
        GetNowViecleFireTouchId() {
            return this.viecleFireTouchId;
        }
        SetNowViecleFireTouchId(viecleFireTouchId) {
            this.viecleFireTouchId = viecleFireTouchId;
        }
        GetRunTouchId() {
            return this.runTouchId;
        }
        SetRunTouchId(runTouchId) {
            this.runTouchId = runTouchId;
        }
    }
    class SceneMgr extends Laya.Script {
        constructor() {
            super();
            SceneMgr.Instance = this;
        }
        InitStartScene(starSceneName) {
            this.curOpen2dScene = this.FindSc2dInStage(starSceneName);
        }
        GetCurSc2D() {
            return this.curOpen2dScene;
        }
        OpenSc2D(targetSceneName) {
            Laya.Scene.open(targetSceneName + ".scene", true, null, Laya.Handler.create(this, () => {
                let tempSc2d = this.curOpen2dScene;
                this.curOpen2dScene = this.FindSc2dInStage(targetSceneName);
                if (tempSc2d) {
                    tempSc2d.destroy(true);
                }
            }));
        }
        FindSc2dInStage(sc2dName) {
            let sc2d = Laya.Scene.root.getChildByName(sc2dName);
            if (sc2d) {
                return sc2d;
            }
            return null;
        }
        FindSc3dInStage(sc3dName) {
            let sc3d = Laya.stage.getChildByName(sc3dName);
            if (sc3d) {
                return sc3d;
            }
            return null;
        }
        GetCurOpenSc3d() {
            return this.curOpen3dScene;
        }
    }
    class ResMgr extends Laya.Script {
        constructor() {
            super();
            this.unityResMap = new Map();
            ResMgr.Instance = this;
        }
        GetSc3dPath(sceneName) {
            return "res/Scenes/Conventional/" + sceneName + ".ls";
        }
        OpenSc3D(sc3dName, caller, callback = (sc3d => { })) {
            let sc3dResPath = this.GetSc3dPath(sc3dName);
            Laya.Scene3D.load(sc3dResPath, Laya.Handler.create(caller, sc3d => {
                SceneMgr.Instance.curOpen3dScene = sc3d;
                sc3d.name = sc3dName;
                Laya.stage.addChild(sc3d);
                Laya.stage.setChildIndex(sc3d, 0);
                callback(sc3d);
            }));
        }
        Destoy3dScene(sc3d, sc3dName) {
            if (sc3d) {
                sc3d.destroy(true);
                sc3d = null;
            }
            this.ClearRes(this.GetSc3dPath(sc3dName));
            Laya.Resource.destroyUnusedResources();
        }
        GetPrefabPath(prefabName) {
            return "res/Prefabs/Conventional/" + prefabName + ".lh";
        }
        LoadSp3d(sp3dName, caller, callback = (sp3d => { })) {
            if (this.unityResMap.has(sp3dName)) {
                let tempSp3d = this.unityResMap.get(sp3dName);
                callback(tempSp3d);
            } else {
                Laya.Sprite3D.load(this.GetPrefabPath(sp3dName), Laya.Handler.create(caller, sp3d => {
                    let realSp3d = sp3d.getChildAt(0);
                    this.unityResMap.set(sp3dName, realSp3d);
                    callback(realSp3d);
                }));
            }
        }
        DestroySp3dRes(sp3dName) {
            if (!this.unityResMap.has(sp3dName)) return;
            let sp3d = this.unityResMap.get(sp3dName);
            sp3d.destroy(true);
            sp3d = null;
            this.ClearRes(this.GetPrefabPath(sp3dName));
            this.unityResMap.delete(sp3dName);
            Laya.Resource.destroyUnusedResources();
        }
        SetUnlitTexture(skinnedMeshSp3d, textureResPath, caller) {
            Laya.Texture2D.load(textureResPath, Laya.Handler.create(caller, function (tex) {
                let mat = new Laya.UnlitMaterial();
                mat.albedoTexture = tex;
                skinnedMeshSp3d.skinnedMeshRenderer.material = mat;
            }));
        }
        SetStandardTexture(skinnedMeshSp3d, textureResPath, caller) {
            Laya.Texture2D.load(textureResPath, Laya.Handler.create(caller, function (tex) {
                let mat = new Laya.PBRStandardMaterial();
                mat.albedoTexture = tex;
                skinnedMeshSp3d.skinnedMeshRenderer.material = mat;
            }));
        }
        SetSkyMat(camera, mat) {
            let skyRenderer = camera.skyRenderer;
            skyRenderer.mesh = Laya.SkyBox.instance;
            skyRenderer.material = mat;
        }
        LoadMultiRes(resArray, caller, callback) {
            Laya.loader.create(resArray, Laya.Handler.create(caller, callback));
        }
        GetRes(resPath) {
            return Laya.Loader.getRes(resPath);
        }
        ClearRes(resPath) {
            Laya.LoaderManager.prototype.clearRes(resPath);
        }
        ClearTexture(texturePath) {
            Laya.LoaderManager.prototype.clearTextureRes(texturePath);
        }
        LogUnityResMapInfo() {
            if (this.unityResMap.size == 0 || !this.unityResMap) {
                console.log("Map为空");
                return;
            }
            console.log("Map长度：" + this.unityResMap.size);
            for (let [key, value] of this.unityResMap) {
                console.log("key:", key, "===", "value:", value);
            }
        }
    }
    class DataTool {
        static SetKv(k, v) {
            Laya.LocalStorage.setItem(k, v);
        }
        static GetInt(k, num = 0) {
            let v = Laya.LocalStorage.getItem(k);
            if (!v) {
                this.SetKv(k, num);
                return num;
            }
            return parseInt(v);
        }
        static GetStr(k) {
            return Laya.LocalStorage.getItem(k);
        }
        static GetFloat(k) {
            if (!Laya.LocalStorage.getItem(k)) {
                return 0;
            }
            return parseFloat(Laya.LocalStorage.getItem(k));
        }
        static DelKey(k) {
            Laya.LocalStorage.removeItem(k);
        }
        static ClearAllData() {
            Laya.LocalStorage.clear();
        }
        static ModifyInt(k, offsetNum) {
            let v = DataTool.GetInt(k);
            v += offsetNum;
            DataTool.SetKv(k, v);
        }
    }
    class Std { }
    Std.ScView_InitName = "InitScView";
    Std.ScView_MenuName = "MenuScView";
    Std.ScView_GameName = "GameScView";
    Std.Sc3D_GameMain_AircraftCarrier = "GameMainSc_AircraftCarrier";
    Std.Sc3D_GameMainSc_Lake = "GameMainSc_Lake";
    Std.Sc3D_GameMainSc_Port = "GameMainSc_Port";
    Std.Sc3D_GameMainSc_City = "GameMainSc_City";
    Std.Sc3D_GameMainSc_Zombie = "GameMainSc_Zombie";
    Std.Sc3D_GameMainSc_youyu1 = "GameMainSc_youyu1";
    Std.Sc3D_GameMainSc_youyu2 = "GameMainSc_YYBLQ";
    Std.ZombieAnm_WalkName = "zombieWalk";
    Std.ZombieAnm_RunName = "zombieRun";
    Std.ZombieAnm_HitName = "hit";
    Std.Anm_PlayerIdleName = "idle";
    Std.Anm_PlayerWalkName = "walk";
    Std.Anm_PlayerRunName = "run";
    Std.Anm_PlayerJumpName = "jump";
    Std.Anm_PlayerReloadName = "reload";
    Std.Anm_PlayerFireName = "fire";
    Std.Anm_PlayerDrawName = "draw";
    Std.Anm_PlayerAimName = "aim";
    Std.Anm_PlayerAimFireName = "aimFire";
    Std.Prefab_PlayerName = "Player";
    Std.Prefab_MuzzleFlash = "MuzzleFlash";
    Std.Prefab_HitFx = "HitFx";
    Std.Prefab_BtTrail = "BtTrail";
    Std.Prefab_FxBoom = "FxBoom";
    Std.Prefab_RpgBullet = "RpgBullet";
    Std.Prefab_GLGunBullet = "GLGunBullet";
    Std.Prefab_AI = "AI";
    Std.Prefab_AIYY = "AIYY";
    Std.Prefab_AirCraft = "AirCraft";
    Std.Prefab_Tank = "Tank";
    Std.GameStart = false;
    Std.byWeapon = true;
    Std.Other_EvrCam = "EvrCam";
    Std.Other_FireTrigger = "FireTrigger";
    Std.Map_EvrCam = "MapCam";
    Std.PlayerDieShowCam = "PlayerDieShowCam";
    Std.ColName_DieCol = "DieCol";
    Std.ColName_EvrTurnRoundCol = "EvrTurnRoundCol";
    Std.AITeamName_BlueTeam = "BlueTeamAI";
    Std.AITeamName_RedTeam = "RedTeamAI";
    Std.GameSc3dItem_RedTeamSpawnPosRoot = "RedTeamSpawnPosRoot";
    Std.GameSc3dItem_BlueTeamSpawnPosRoot = "BlueTeamSpawnPosRoot";
    Std.GameSc3dItem_ZombieModePlayerPos = "ZombieModePlayerPos";
    Std.GameSc3dItem_YouyuModePos = "YouYuTeamSpawnPosRoot";
    Std.PlayBattleModeTimesKey = "PlayBattleModeTimesKey";
    Std.Time_IsNewDay = "Time_IsNewDay";
    Std.FrreDraw_LeftFreeDrawKey = "LocalSaveLeftFreeDrawKey";
    Std.FrreDraw_LocalSaveBigAwardProtectKey = "LocalSaveBigAwardProtectKey";
    Std.IsFirstTimeInGameKey = "IsFirstTimeInGameKey";
    Std.startFreeTimeStamp = "startFreeTimeStamp";
    Std.spinDrawReturnTimeStamp = "spinDrawReturnTimeStamp";
    Std.Sign_HasSignTimesKey = "Sign_HasSignTimesKey";
    Std.Sign_LastSignTimeStampKey = "Sign_LastSignTimeStampKey";
    Std.Sign_IsSignTodayKey = "Sign_IsSignTodayKey";
    Std.Sign_IsSignVIPKey = "Sign_IsSignVIPKey";
    Std.Sign_IsHaoHua = "Sign_IsHaoHua";
    Std.YYWeaponInitKey = "YYWeaponInitKey";
    Std.weaponBanner = "weaponBanner";
    Std.weapon34isNoLock = "weapon34isNoLock";
    Std.Local_PlayerMoneyKey = "PlayerMoneyKey";
    Std.Local_EquipWeapon1Key = "EquipWeapon1Key";
    Std.Local_EquipWeapon2Key = "EquipWeapon2Key";
    Std.Local_EquipWeapon3Key = "EquipWeapon3Key";
    Std.Local_EquipWeapon4Key = "EquipWeapon4Key";
    Std.Local_MouseSensitivityMulKey = "MouseSensitivityMulKey";
    Std.Local_PlayerRankKey = "PlayerRankKey";
    Std.Local_HasClaimRankAwardTimesKey = "HasClaimRankAwardTimesKey";
    Std.Local_HasUnlockWeapon1Key = "Local_HasUnlockWeapon1Key";
    Std.Local_HasUnlockWeapon2Key = "Local_HasUnlockWeapon2Key";
    Std.Local_HasUnlockWeapon3Key = "Local_HasUnlockWeapon3Key";
    Std.Local_HasUnlockWeapon4Key = "Local_HasUnlockWeapon4Key";
    Std.Currency_GoldKey = "Currency_GoldKey";
    Std.Currency_BlueDiamondKey = "Currency_BlueDiamondKey";
    Std.Currency_RedDiamondKey = "Currency_RedDiamondKey";
    Std.EXP_PlayerCupCountKey = "PlayerCupCountKey";
    Std.Kill_PlayerKillEnemyCountKey = "PlayerKillEnemyCountKey";
    Std.Setting_IsBloomOnKey = "IsBloomOnKey";
    Std.Setting_IsSoundOnKey = "IsSoundOnKey";
    Std.Setting_IsShakeOnKey = "IsShakeOnKey";
    Std.ClaimDailyAward1AgianKey = "ClaimDailyAward1AgianKey";
    Std.ClaimDailyAward2AgianKey = "ClaimDailyAward2AgianKey";
    Std.ClaimDailyAward3AgianKey = "ClaimDailyAward3AgianKey";
    Std.ClaimDailyAward4AgianKey = "ClaimDailyAward4AgianKey";
    Std.ClaimDailyAward5AgianKey = "ClaimDailyAward5AgianKey";
    Std.HasClaimFinishAllMissionAwardKey = "HasClaimFinishAllMissionAwardKey";
    Std.HasClaimAgainFinishAllMissionAwardKey = "HasClaimAgainFinishAllMissionAwardKey";
    Std.LastTimeResetDailyMissionKey = "LastTimeResetDailyMissionKey";
    Std.BattleMapUnlock_Map1Key = "BattleMapUnlock_Map1Key";
    Std.BattleMapUnlock_Map2Key = "BattleMapUnlock_Map2Key";
    Std.BattleMapUnlock_Map3Key = "BattleMapUnlock_Map3Key";
    Std.BattleMapUnlock_Map4Key = "BattleMapUnlock_Map4Key";
    Std.WatchAdTime_Ak_Key = "WatchAdTime_Ak_Key";
    Std.WatchAdTime_M4_Key = "WatchAdTime_M4_Key";
    Std.WatchAdTime_Acr_Key = "WatchAdTime_Acr_Key";
    Std.WatchAdTime_SgM870_Key = "WatchAdTime_SgM870_Key";
    Std.WatchAdTime_SgSpas12_Key = "WatchAdTime_SgSpas12_Key";
    Std.WatchAdTime_Sniper98k_Key = "WatchAdTime_Sniper98k_Key";
    Std.WatchAdTime_SniperCheyTac_Key = "WatchAdTime_SniperCheyTac_Key";
    Std.WatchAdTime_SniperM24_Key = "WatchAdTime_SniperM24_Key";
    Std.WatchAdTime_Revolver_Key = "WatchAdTime_Revolver_Key";
    Std.WatchAdTime_Glock_Key = "WatchAdTime_Glock_Key";
    Std.WatchAdTime_M1911_Key = "WatchAdTime_M1911_Key";
    Std.WatchAdTime_SmgMp5_Key = "WatchAdTime_SmgMp5_Key";
    Std.WatchAdTime_SmgTom_Key = "WatchAdTime_SmgTom_Key";
    Std.WatchAdTime_SmgUzi_Key = "WatchAdTime_SmgUzi_Key";
    Std.WatchAdTime_Grenade_Key = "WatchAdTime_Grenade_Key";
    Std.WatchAdTime_GrenadeBar_Key = "WatchAdTime_GrenadeBar_Key";
    Std.WatchAdTime_HpBox_Key = "WatchAdTime_HpBox_Key";
    Std.WatchAdTime_AmmoBox_Key = "WatchAdTime_AmmoBox_Key";
    Std.WatchAdTime_Rpg_Key = "WatchAdTime_Rpg_Key";
    Std.WatchAdTime_FireGun_Key = "WatchAdTime_FireGun_Key";
    Std.WatchAdTime_GLGun_Key = "WatchAdTime_GLGun_Key";
    Std.WatchAdTime_LMG_Key = "WatchAdTime_LMG_Key";
    Std.WatchAdTime_Rocket_Key = "WatchAdTime_Rocket_Key";
    Std.LevelEquip_Ak_Key = "LevelEquip_Ak_Key";
    Std.LevelEquip_M4_Key = "LevelEquip_M4_Key";
    Std.LevelEquip_Acr_Key = "LevelEquip_Acr_Key";
    Std.LevelEquip_SgM870_Key = "LevelEquip_SgM870_Key";
    Std.LevelEquip_SgSpas12_Key = "LevelEquip_SgSpas12_Key";
    Std.LevelEquip_Sniper98k_Key = "LevelEquip_Sniper98k_Key";
    Std.LevelEquip_SniperCheyTac_Key = "LevelEquip_SniperCheyTac_Key";
    Std.LevelEquip_SniperM24_Key = "LevelEquip_SniperM24_Key";
    Std.LevelEquip_Revolver_Key = "LevelEquip_Revolver_Key";
    Std.LevelEquip_Glock_Key = "LevelEquip_Glock_Key";
    Std.LevelEquip_M1911_Key = "LevelEquip_M1911_Key";
    Std.LevelEquip_SmgMp5_Key = "LevelEquip_SmgMp5_Key";
    Std.LevelEquip_SmgTom_Key = "LevelEquip_SmgTom_Key";
    Std.LevelEquip_SmgUzi_Key = "LevelEquip_SmgUzi_Key";
    Std.LevelEquip_Grenade_Key = "LevelEquip_Grenade_Key";
    Std.LevelEquip_GrenadeBar_Key = "LevelEquip_GrenadeBar_Key";
    Std.LevelEquip_HpBox_Key = "LevelEquip_HpBox_Key";
    Std.LevelEquip_AmmoBox_Key = "LevelEquip_AmmoBox_Key";
    Std.LevelEquip_Rpg_Key = "LevelEquip_Rpg_Key";
    Std.LevelEquip_FireGun_Key = "LevelEquip_FireGun_Key";
    Std.LevelEquip_GLGun_Key = "LevelEquip_GLGun_Key";
    Std.LevelEquip_LMG_Key = "LevelEquip_LMG_Key";
    Std.LevelEquip_Rocket_Key = "LevelEquip_Rocket_Key";
    Std.LevelEquip_ViecleAirPlane = "LevelEquip_AirPlane";
    Std.LevelEquip_ViecleTanK = "LevelEquip_TanK";
    Std.Guide_HasLearn_IsFirstIntoMenu = "Guide_HasLearn_IsFirstIntoMenu";
    Std.Guide_HasLearn_IsFirstIntoConfig = "Guide_HasLearn_IsFirstIntoConfig";
    Std.Guide_HasLearn_SelectAllEquipPage = "Guide_HasLearn_SelectAllEquipPage";
    Std.Guide_HasLearn_ZombieMode = "Guide_HasLearn_ZombieMode";
    Std.Guide_HasLearn_OpenZombieMode = "Guide_HasLearn_OpenZombieMode";
    Std.Guide_HasLearn_Currency = "Guide_HasLearn_Currency";
    Std.Guide_HasLearn_EquipShop = "Guide_HasLearn_EquipShop";
    Std.Guide_HasLearn_UpdateEquip = "Guide_HasLearn_UpdateEquip";
    Std.Guide_HasLearn_MouseSensitivity = "Guide_HasLearn_MouseSensitivity";
    Std.Guide_HasLearn_RankInfo = "Guide_HasLearn_RankInfo";
    Std.Achieve_Win1BattleModeKey = "Achieve_Win1BattleModeKey";
    Std.Achieve_Win5BattleModeKey = "Achieve_Win5BattleModeKey";
    Std.Achieve_Win1ZombieModeKey = "Achieve_Win1ZombieModeKey";
    Std.Achieve_Win5ZombieModeKey = "Achieve_Win5ZombieModeKey";
    Std.Achieve_UpdateEquip3TimesKey = "Achieve_UpdateEquip3TimesKey";
    Std.Achieve_UpdateEquip5TimesKey = "Achieve_UpdateEquip5TimesKey";
    Std.Achieve_Kill50EnemyKey = "Achieve_Kill50EnemyKey";
    Std.Achieve_Kill100EnemyKey = "Achieve_Kill100EnemyKey";
    Std.Achieve_Kill30ZombieKey = "Achieve_Kill30ZombieKey";
    Std.Achieve_Kill50ZombieKey = "Achieve_Kill50ZombieKey";
    Std.Achieve_Die10TimesKey = "Achieve_Die10TimesKey";
    Std.Achieve_Die50TimesKey = "Achieve_Die50TimesKey";
    Std.Achieve_HeadShot30TimesKey = "Achieve_HeadShot30TimesKey";
    Std.Achieve_HeadShot50TimesKey = "Achieve_HeadShot50TimesKey";
    Std.Achieve_GetBigAwardDrawKey = "Achieve_GetBigAwardDrawKey";
    Std.AchieveClaim_Win1BattleModeKey = "AchieveClaim_Win1BattleModeKey";
    Std.AchieveClaim_Win5BattleModeKey = "AchieveClaim_Win5BattleModeKey";
    Std.AchieveClaim_Win1ZombieModeKey = "AchieveClaim_Win1ZombieModeKey";
    Std.AchieveClaim_Win5ZombieModeKey = "AchieveClaim_Win5ZombieModeKey";
    Std.AchieveClaim_UpdateEquip3TimesKey = "AchieveClaim_UpdateEquip3TimesKey";
    Std.AchieveClaim_UpdateEquip5TimesKey = "AchieveClaim_UpdateEquip5TimesKey";
    Std.AchieveClaim_Kill50EnemyKey = "AchieveClaim_Kill50EnemyKey";
    Std.AchieveClaim_Kill100EnemyKey = "AchieveClaim_Kill100EnemyKey";
    Std.AchieveClaim_Kill30ZombieKey = "AchieveClaim_Kill30ZombieKey";
    Std.AchieveClaim_Kill50ZombieKey = "AchieveClaim_Kill50ZombieKey";
    Std.AchieveClaim_Die10TimesKey = "AchieveClaim_Die10TimesKey";
    Std.AchieveClaim_Die50TimesKey = "AchieveClaim_Die50TimesKey";
    Std.AchieveClaim_HeadShot30TimesKey = "AchieveClaim_HeadShot30TimesKey";
    Std.AchieveClaim_HeadShot50TimesKey = "AchieveClaim_HeadShot50TimesKey";
    Std.AchieveClaim_GetBigAwardDrawKey = "AchieveClaim_GetBigAwardDrawKey";
    Std.WeaponName_None = "None";
    Std.WeaponName_Ak = "Ak";
    Std.WeaponName_M4 = "M4";
    Std.WeaponName_Acr = "Acr";
    Std.WeaponName_SgM870 = "SgM870";
    Std.WeaponName_SgSpas12 = "SgSpas12";
    Std.WeaponName_Sniper98k = "Sniper98k";
    Std.WeaponName_SniperCheyTac = "SniperCheyTac";
    Std.WeaponName_SniperM24 = "SniperM24";
    Std.WeaponName_Revolver = "Revolver";
    Std.WeaponName_Glock = "Glock";
    Std.WeaponName_M1911 = "M1911";
    Std.WeaponName_SmgMp5 = "SmgMp5";
    Std.WeaponName_SmgTom = "SmgTom";
    Std.WeaponName_SmgUzi = "SmgUzi";
    Std.WeaponName_Grenade = "Grenade";
    Std.WeaponName_GrenadeBar = "GrenadeBar";
    Std.WeaponName_HpBox = "HpBox";
    Std.WeaponName_AmmoBox = "AmmoBox";
    Std.WeaponName_Rpg = "Rpg";
    Std.WeaponName_FireGun = "FireGun";
    Std.WeaponName_GLGun = "GLGun";
    Std.WeaponName_LMG = "LMG";
    Std.WeaponName_Rocket = "Rocket";
    Std.WeaponName_ViecleAirPlane = "AirPlane";
    Std.WeaponName_ViecleTanK = "TanK";
    Std.EveryDataFreeTry = "EveryDataFreeTry";
    Std.ui_width = 0;
    Std.ui_height = 0;
    Std.UI_ad_cTopx = 0;
    Std.FreeTry = false;
    Std.m5qtUI = false;
    class EnemyAni { }
    EnemyAni.Die = "die";
    EnemyAni.Idle = "idle";
    EnemyAni.Reload = "reload";
    EnemyAni.Run = "run";
    EnemyAni.StandFire = "standFire";
    EnemyAni.WalkFire = "walkFire";
    EnemyAni.Walk = "walk";
    EnemyAni.ZombieWalk = "zombieWalk";
    EnemyAni.ZombieRun = "zombieRun";
    EnemyAni.Hit = "hit";
    EnemyAni.YYDance = "YYDance";
    EnemyAni.YYFlyD = "YYFlyD";
    EnemyAni.YYFlydie = "YYFlydie";
    EnemyAni.YYIdle = "YYIdle";
    EnemyAni.YYJump = "YYJump";
    EnemyAni.YYRun = "YYRun";
    EnemyAni.YYWin = "YYWin";
    EnemyAni.YYWalk = "YYWalk";
    class WeaponMgr extends Laya.Script {
        constructor() {
            super();
            this.rebornChangeWeaponIndex = 1;
            WeaponMgr.Instance = this;
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnPlayerDie, this, this.ClearEquipSrc);
            Dispatcher.AddListener(EventType.OnBackToMenu, this, this.ClearEquipSrc);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnPlayerDie, this, this.ClearEquipSrc);
            Dispatcher.RemoveListener(EventType.OnBackToMenu, this, this.ClearEquipSrc);
        }
        SetNowUsingWeapon(nowUsingWeapon) {
            this.nowUsingWeapon = nowUsingWeapon;
        }
        GetNowUsingWeapon() {
            return this.nowUsingWeapon;
        }
        GetPlayeCam() {
            return this.playerCam;
        }
        SetPlayerCam(playerCam) {
            this.playerCam = playerCam;
        }
        GetPlayeAnimator() {
            return this.playerAnmt;
        }
        SetPlayeAnimator(playerAnmt) {
            this.playerAnmt = playerAnmt;
        }
        ChangeWeapon(weaponIndex) {
            Dispatcher.Event(EventType.OnChangeWeapon, weaponIndex);
        }
        SetEvrCam(evrCam) {
            this.evrCam = evrCam;
        }
        GetEvrCam() {
            return this.evrCam;
        }
        SetMapCam(mapCam) {
            this.mapCam = mapCam;
        }
        GetMapCam() {
            return this.mapCam;
        }
        SetPlayerDieCam(mapCam) {
            this.playerDieShowCam = mapCam;
        }
        GetPlayerDieCam() {
            return this.playerDieShowCam;
        }
        GetRebornChangeWeaponIndex() {
            return this.rebornChangeWeaponIndex;
        }
        SetRebornChangeWeaponIndex(rebornChangeWeaponIndex) {
            this.rebornChangeWeaponIndex = rebornChangeWeaponIndex;
        }
        GetHitFx() {
            return this.hitFxRoot;
        }
        LoadHitFx() {
            let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            if (!sc3d) {
                return;
            }
            if (!this.hitFxRoot) {
                ResMgr.Instance.LoadSp3d(Std.Prefab_HitFx, this, fx => {
                    this.hitFxRoot = fx.clone();
                    this.hitFxRoot.name = Std.Prefab_HitFx;
                    sc3d.addChild(this.hitFxRoot);
                    this.hitFxRoot.transform.localPosition = Tool.V3Zero();
                });
            }
        }
        DestroyHitFx() {
            if (this.hitFxRoot) {
                this.hitFxRoot.destroy(true);
                this.hitFxRoot = null;
            }
        }
        GetFireSoundByWeaponName(weaponName) {
            return weaponName;
        }
        SetWeapon1Src(weapon) {
            this.weapon1Src = weapon;
        }
        SetWeapon2Src(weapon) {
            this.weapon2Src = weapon;
        }
        SetWeapon3Src(weapon) {
            this.weapon3Src = weapon;
        }
        SetWeapon4Src(weapon) {
            this.weapon4Src = weapon;
        }
        GetWeapon1Src() {
            return this.weapon1Src;
        }
        GetWeapon2Src() {
            return this.weapon2Src;
        }
        GetWeapon3Src() {
            return this.weapon3Src;
        }
        GetWeapon4Src() {
            return this.weapon4Src;
        }
        GetHasUnlockWeapon1() {
            return DataTool.GetInt(Std.Local_HasUnlockWeapon1Key) == 1;
        }
        GetHasUnlockWeapon2() {
            return DataTool.GetInt(Std.Local_HasUnlockWeapon2Key) == 1;
        }
        GetHasUnlockWeapon3() {
            return DataTool.GetInt(Std.Local_HasUnlockWeapon3Key) == 1;
        }
        GetHasUnlockWeapon4() {
            return DataTool.GetInt(Std.Local_HasUnlockWeapon4Key) == 1;
        }
        GetIsSingleWeaponBulletEmpty(weaponSrc) {
            if (!weaponSrc) {
                return true;
            }
            if (weaponSrc.curMag == 0 && weaponSrc.curTotalBullets == 0) {
                return true;
            }
            return false;
        }
        GetIsAllWeaponBulletEmpty() {
            if (this.GetIsSingleWeaponBulletEmpty(this.weapon1Src) && this.GetIsSingleWeaponBulletEmpty(this.weapon2Src) && this.GetIsSingleWeaponBulletEmpty(this.weapon3Src) && this.GetIsSingleWeaponBulletEmpty(this.weapon4Src)) {
                return true;
            }
            return false;
        }
        GetIsNowUsingWeaponBulletEmpty() {
            if (this.nowUsingWeapon && this.GetIsSingleWeaponBulletEmpty(this.nowUsingWeapon)) {
                return true;
            }
            return false;
        }
        ReFullSingleWeaponBullets(weapon) {
            if (!weapon) {
                return;
            }
            weapon.curMag = weapon.maxMag;
            weapon.curTotalBullets = weapon.maxTotalBullets - weapon.curMag;
        }
        ReFullAllWeaponsBullets() {
            this.ReFullSingleWeaponBullets(this.weapon1Src);
            this.ReFullSingleWeaponBullets(this.weapon2Src);
            this.ReFullSingleWeaponBullets(this.weapon3Src);
            this.ReFullSingleWeaponBullets(this.weapon4Src);
        }
        ClearEquipSrc() {
            this.weapon1Src = this.weapon2Src = this.weapon3Src = this.weapon4Src = null;
            this.nowUsingWeapon = null;
        }
        GetIsAllWeaponBtLower50Percent() {
            let b1 = this.weapon1Src && this.weapon1Src.curMag + this.weapon1Src.curTotalBullets < Math.floor(this.weapon1Src.maxTotalBullets * .5) || (this.weapon1Src == null || this.weapon1Src == undefined);
            let b2 = this.weapon2Src && this.weapon2Src.curMag + this.weapon2Src.curTotalBullets < Math.floor(this.weapon2Src.maxTotalBullets * .5) || (this.weapon2Src == null || this.weapon2Src == undefined);
            let b4 = this.weapon4Src && this.weapon4Src.curMag + this.weapon4Src.curTotalBullets < Math.floor(this.weapon4Src.maxTotalBullets * .5) || (this.weapon4Src == null || this.weapon4Src == undefined);
            return b1 && b2 && b4;
        }
    }
    class CrossHairMove extends Laya.Script {
        constructor() {
            super();
            this.crossHairMoveSpeed = 50;
            this.crossHairBackSpeed = 100;
        }
        onAwake() {
            this.GetNeed();
            Dispatcher.AddListener(EventType.OnWeaponSingleFire, this, this.OnWeaponSingleFire);
            Dispatcher.AddListener(EventType.OnPlayerJumpInAir, this, this.OnWeaponSingleFire);
            Dispatcher.AddListener(EventType.OnPlayerHitEnemy, this, this.HitMarkerTweenOnFire);
            Dispatcher.AddListener(EventType.OnPlayerDie, this, this.OnPlayerDie);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnWeaponSingleFire, this, this.OnWeaponSingleFire);
            Dispatcher.RemoveListener(EventType.OnPlayerJumpInAir, this, this.OnWeaponSingleFire);
            Dispatcher.RemoveListener(EventType.OnPlayerHitEnemy, this, this.HitMarkerTweenOnFire);
            Dispatcher.RemoveListener(EventType.OnPlayerDie, this, this.OnPlayerDie);
            Tool.ClearTimerAndTween(this);
            Tool.ClearTragetTween(this.singleFireCrossHairTween1);
            Tool.ClearTragetTween(this.singleFireCrossHairTween2);
            Tool.ClearTragetTween(this.singleFireCrossHairTween3);
            Tool.ClearTragetTween(this.singleFireCrossHairTween4);
            Tool.ClearTragetTween(this.hitMarkerBigTween);
        }
        onUpdate() {
            this.CrossHairMove();
        }
        GetNeed() {
            this.hitMarkerBg = Tool.GetImg(this.owner, "hitMarkerBg");
            this.imgCrossHairBg = Tool.GetImg(this.owner, "imgCrossHairBg");
            this.crossHairUp = Tool.GetImg(this.imgCrossHairBg, "crossHairUp");
            this.crossHairDown = Tool.GetImg(this.imgCrossHairBg, "crossHairDown");
            this.crossHairLeft = Tool.GetImg(this.imgCrossHairBg, "crossHairLeft");
            this.crossHairRight = Tool.GetImg(this.imgCrossHairBg, "crossHairRight");
        }
        OnPlayerDie() {
            this.hitMarkerBg.visible = false;
        }
        OnWeaponSingleFire() {
            this.SingleFireCrossHairMove();
        }
        CanMoveCrossHair() {
            let nowEquipWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            let isNowWpExist = nowEquipWeapon != null && nowEquipWeapon != undefined;
            let isHoldFireBtn = InputMgr.Instance.GetIsFire();
            let hasBullet = isNowWpExist && nowEquipWeapon.curMag > 0;
            let notReloading = isNowWpExist && nowEquipWeapon.isReloading == false;
            return isHoldFireBtn && hasBullet && notReloading;
        }
        CrossHairMove() {
            if (this.CanMoveCrossHair() == true) {
                this.crossHairUp.y -= Tool.DeltaTime() * this.crossHairMoveSpeed;
                this.crossHairDown.y += Tool.DeltaTime() * this.crossHairMoveSpeed;
                this.crossHairLeft.x -= Tool.DeltaTime() * this.crossHairMoveSpeed;
                this.crossHairRight.x += Tool.DeltaTime() * this.crossHairMoveSpeed;
            } else {
                this.crossHairUp.y += Tool.DeltaTime() * this.crossHairBackSpeed;
                this.crossHairDown.y -= Tool.DeltaTime() * this.crossHairBackSpeed;
                this.crossHairLeft.x += Tool.DeltaTime() * this.crossHairBackSpeed;
                this.crossHairRight.x -= Tool.DeltaTime() * this.crossHairBackSpeed;
            }
            this.crossHairUp.y = Tool.ClampNum(this.crossHairUp.y, -15, 25);
            this.crossHairDown.y = Tool.ClampNum(this.crossHairDown.y, 56, 96);
            this.crossHairLeft.x = Tool.ClampNum(this.crossHairLeft.x, -15, 25);
            this.crossHairRight.x = Tool.ClampNum(this.crossHairRight.x, 56, 96);
        }
        SingleFireCrossHairMove() {
            let nowEquipWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            if (nowEquipWeapon && nowEquipWeapon.curMag > 0 && nowEquipWeapon.CanFire() && this.crossHairUp && this.crossHairDown && this.crossHairLeft && this.crossHairRight && !nowEquipWeapon.isReloading) {
                if (this.crossHairUp) this.singleFireCrossHairTween1 = Laya.Tween.to(this.crossHairUp, {
                    y: -15
                }, 100);
                if (this.crossHairDown) this.singleFireCrossHairTween2 = Laya.Tween.to(this.crossHairDown, {
                    y: 96
                }, 100);
                if (this.crossHairLeft) this.singleFireCrossHairTween3 = Laya.Tween.to(this.crossHairLeft, {
                    x: -15
                }, 100);
                if (this.crossHairRight) this.singleFireCrossHairTween4 = Laya.Tween.to(this.crossHairRight, {
                    x: 96
                }, 100);
            }
        }
        HitMarkerTweenOnFire() {
            if (this.hitMarkerBg.visible == true) {
                return;
            }
            this.hitMarkerBg.visible = true;
            this.hitMarkerBigTween = Laya.Tween.to(this.hitMarkerBg, {
                scaleX: 1.3,
                scaleY: 1.3
            }, 60, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                if (this.hitMarkerBg) {
                    this.hitMarkerSmallTween == Laya.Tween.to(this.hitMarkerBg, {
                        scaleX: 1,
                        scaleY: 1
                    }, 30, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                        Laya.timer.once(70, this, () => {
                            if (this.hitMarkerBg) this.hitMarkerBg.visible = false;
                        });
                    }));
                }
            }));
        }
    }
    class JoyStick extends Laya.Script {
        constructor() {
            super();
            this.maxStickRadius = 65;
            this.stickDragRate = 0;
            this.dragDis = 0;
            this.touchId = 0;
            this.nowStickPos = new Laya.Vector2(0, 0);
            this.stickDownPos = new Laya.Vector2(0, 0);
            this.isDragging = false;
            this.isFixedStick = true;
            this.stickDir = new Laya.Vector2(0, 0);
            this.onStickDownCb = (() => { });
            this.onStickUpOrOutCb = (() => { });
            this.onStickMoveCb = (() => { });
        }
        onAwake() {
            this.imgJoyStickRect = Laya.stage;
            this.imgStickBg = this.owner.getChildAt(0);
            this.imgStick = this.owner.getChildAt(1);
            this.imgStick.pivot(this.imgStick.width / 2, this.imgStick.height / 2);
            this.imgStickBg.pivot(this.imgStickBg.width / 2, this.imgStickBg.height / 2);
            this.imgStick.x = this.imgStickBg.x;
            this.imgStick.y = this.imgStickBg.y;
            this.imgStickBg.on(Laya.Event.MOUSE_DOWN, this, this.onStickDown);
            this.imgJoyStickRect.on(Laya.Event.MOUSE_UP, this, this.onStickUp);
            this.HideStick();
        }
        onDestroy() {
            this.imgStickBg.off(Laya.Event.MOUSE_DOWN, this, this.onStickDown);
            this.imgJoyStickRect.off(Laya.Event.MOUSE_UP, this, this.onStickUp);
        }
        SetFixedJS(isStick = false) {
            this.isFixedStick = isStick;
            this.imgStickBg.visible = this.isFixedStick;
            this.imgStick.visible = this.isFixedStick;
            this.imgStick.x = this.imgStickBg.x;
            this.imgStick.y = this.imgStickBg.y;
        }
        IsInTopArea() {
            return this.stickDir.y < 0;
        }
        GetDir() {
            if (!this.isDragging) {
                return Tool.V2(0, 0);
            }
            return this.stickDir;
        }
        IsDrag() {
            return this.isDragging;
        }
        EndDrag() {
            this.isDragging = false;
        }
        GetDragRate() {
            return this.stickDragRate;
        }
        LookAtStickDir(targetSp3d) {
            if (!targetSp3d || !this.IsDrag()) return;
            let deg = Tool.RadianToDegree(Math.atan2(this.stickDir.y, this.stickDir.x));
            deg = 360 - deg + 90;
            targetSp3d.transform.localRotationEuler = Tool.V3(0, deg, 0);
        }
        LookAtStickDirSmooth(targetSp3d) {
            if (!targetSp3d || !this.IsDrag()) return;
            if (this.stickDir === Laya.Vector2.ZERO) return;
            if (this.stickDir.x != 0 || this.stickDir.y != 0) {
                let dir = Tool.V3(-this.stickDir.x, 0, this.stickDir.y);
                let outQ = new Laya.Quaternion();
                Laya.Quaternion.rotationLookAt(dir, Tool.V3(0, 1, 0), outQ);
                let out2 = new Laya.Quaternion();
                Laya.Quaternion.lerp(targetSp3d.transform.localRotation, outQ, Tool.DeltaTime() * 90, out2);
                targetSp3d.transform.localRotation = out2;
            }
        }
        onStickDown(e) {
            this.touchId = e.touchId;
            this.imgJoyStickRect.on(Laya.Event.MOUSE_MOVE, this, this.onStickMove);
            this.ShowStick();
            this.ResetStickPos(e);
            this.dragDis = Tool.DisV2(this.stickDownPos, this.nowStickPos);
            this.stickDownPos = Tool.V2(this.imgStick.x, this.imgStick.y);
            this.onStickDownCb();
        }
        onStickUp(e) {
            if (this.touchId == e.touchId) {
                this.imgJoyStickRect.off(Laya.Event.MOUSE_MOVE, this, this.onStickMove);
                this.isDragging = false;
                this.stickDragRate = 0;
                this.dragDis = 0;
                this.HideStick();
                this.stickDir = Tool.V2Zero();
                Tool.SetUIXY(this.imgStick, this.imgStickBg.x, this.imgStickBg.y);
                this.onStickUpOrOutCb();
            }
        }
        ResetStickPos(e) {
            if (this.isFixedStick) return;
            this.imgStickBg.x = e.stageX;
            this.imgStickBg.y = e.stageY;
            this.imgStick.x = e.stageX;
            this.imgStick.y = e.stageY;
        }
        HideStick() {
            if (this.isFixedStick) return;
            this.imgStick.pos(this.imgStickBg.x, this.imgStickBg.y);
            this.imgStickBg.visible = false;
            this.imgStick.visible = false;
        }
        ShowStick() {
            this.imgStick.pos(this.imgStickBg.x, this.imgStickBg.y);
            this.imgStickBg.visible = true;
            this.imgStick.visible = true;
        }
        onStickMove(e) {
            if (this.touchId == e.touchId) {
                this.isDragging = true;
                let deltaX = Laya.stage.mouseX - this.imgStickBg.x;
                let deltaY = Laya.stage.mouseY - this.imgStickBg.y;
                this.dragDis = Tool.DisV2(this.stickDownPos, this.nowStickPos);
                let vectorLenth = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
                this.stickDragRate = this.dragDis / this.maxStickRadius;
                this.stickDragRate = Tool.ClampNum0To1(this.stickDragRate);
                if (vectorLenth > this.maxStickRadius) {
                    let smallCircleX = this.maxStickRadius * deltaX / vectorLenth + this.imgStickBg.x;
                    let smallCircleY = this.maxStickRadius * deltaY / vectorLenth + this.imgStickBg.y;
                    this.imgStick.pos(smallCircleX, smallCircleY, true);
                } else {
                    this.imgStick.pos(Laya.stage.mouseX, Laya.stage.mouseY);
                }
                this.nowStickPos.x = this.imgStick.x;
                this.nowStickPos.y = this.imgStick.y;
                let dir = Tool.SubV2(this.nowStickPos, this.stickDownPos);
                this.stickDir = Tool.NormalizeV2(dir);
                this.onStickMoveCb();
            }
        }
    }
    class ClassMgr {
        static SetUINameAndClassName(str, clas) {
            this.uiClassMap.set(str, clas);
        }
        static GetUIClass(str) {
            if (this.uiClassMap.has(str)) {
                return this.uiClassMap.get(str);
            } else {
                console.warn("[error] Undefined class ,class.Name:  ", str);
                return null;
            }
        }
        static GetUIClassInstance(str) {
            if (this.uiClassMap.has(str)) {
                return new (this.uiClassMap.get(str))();
            } else {
                console.warn("[error] Undefined class ,class.Name:  ", str);
                return null;
            }
        }
    }
    ClassMgr.uiClassMap = new Map();
    class UIMgr extends Laya.Script {
        constructor() {
            super();
            this.uiPrefabMap = new Map();
            UIMgr.Instance = this;
        }
        GetPrefabPath(uiPrefabName) {
            return "prefab/" + uiPrefabName + ".prefab";
        }
        FindTargetUI(targetName, parent) {
            if (!parent) {
                return null;
            }
            return parent.getChildByName(targetName);
        }
        DestroyUI(uiName) {
            let sc2d = SceneMgr.Instance.GetCurSc2D();
            if (sc2d) {
                let ui = sc2d.getChildByName(uiName);
                if (ui) {
                    ui.destroy(true);
                }
            }
        }
        SetUIVisible(uiName, visible) {
            let sc2d = SceneMgr.Instance.GetCurSc2D();
            if (sc2d) {
                let ui = sc2d.getChildByName(uiName);
                if (ui) {
                    ui.visible = visible;
                }
            }
        }
        OpenUI(uiCtlerScript, callback = (param => { }), parent, isOnlyOne = true) {
            let uiName = uiCtlerScript.name;
            if (!parent) {
                parent = SceneMgr.Instance.GetCurSc2D();
            }
            if (!parent) {
                return;
            }
            if (parent.getChildByName(uiName)) {
                if (isOnlyOne == true) {
                    return;
                }
            }
            if (this.uiPrefabMap.has(uiName)) {
                let uiPrefab = this.uiPrefabMap.get(uiName);
                this.OpenUICommonOp(uiPrefab, uiCtlerScript, parent, callback);
            } else {
                this.LoadUIPrefab(uiName, uiPrefab => {
                    this.OpenUICommonOp(uiPrefab, uiCtlerScript, parent, callback);
                });
            }
        }
        ClearRes(uiCtlerScript) {
            let k = uiCtlerScript.name;
            if (!this.uiPrefabMap.has(k)) return;
            this.uiPrefabMap.delete(k);
            ResMgr.Instance.ClearRes(this.GetPrefabPath(k));
            Laya.Resource.destroyUnusedResources();
        }
        LoadUIPrefab(uiName, callback = (uiPrefab => { })) {
            let uiPath = this.GetPrefabPath(uiName);
            Laya.loader.load(uiPath, Laya.Handler.create(this, uiPrefab => {
                if (!uiPrefab) {
                    console.error("不存在目标预制体", uiName);
                    return;
                }
                this.uiPrefabMap.set(uiName, uiPrefab);
                callback(uiPrefab);
            }));
        }
        OpenUICommonOp(uiPrefab, uiCtlerScript, parent, callback = (ui => { })) {
            let uiName = uiCtlerScript.name;
            let ui = uiPrefab.create();
            parent.addChild(ui);
            ui.name = uiName;
            Tool.AddSrcToNode(uiCtlerScript, ui);
            callback(ui);
        }
        LogUIMapInfo() {
            if (this.uiPrefabMap.size == 0 || !this.uiPrefabMap == null) {
                console.log("UI预制体资源Map为空");
                return;
            }
            for (let [key, value] of this.uiPrefabMap) {
                console.log("key:", key, "===", "value:", value);
            }
        }
        LQOpenUI(str, openData = undefined) {
            if (this.uiPrefabMap.has(str)) {
                let ui = this.uiPrefabMap.get(str).create();
                Laya.stage.addChild(ui);
                ui.name = str;
                let script = ClassMgr.GetUIClass(str);
                if (!ui.getComponent(script)) {
                    ui.addComponent(script);
                }
                let uisp = ui.getComponent(script);
                if (openData != undefined) uisp.OpenUI(openData);
            } else {
                Laya.loader.load("prefab/" + str + ".prefab", Laya.Handler.create(this, uiPrefab => {
                    if (!uiPrefab) {
                        console.error("不存在目标预制体", str);
                        return;
                    }
                    this.uiPrefabMap.set(str, uiPrefab);
                    let ui = uiPrefab.create();
                    Laya.stage.addChild(ui);
                    ui.name = str;
                    let script = ClassMgr.GetUIClass(str);
                    if (!ui.getComponent(script)) {
                        ui.addComponent(script);
                    }
                    let uisp = ui.getComponent(script);
                    if (openData != undefined) uisp.OpenUI(openData);
                }));
            }
        }
    }
    class TTSdk extends Laya.Script {
        constructor() {
            super();
            this.canDestroyInsertAd = false;
            this.isMidwayStopRecord = false;
            this.maxRecordTime = 60;
            this.videoOverCallback = (() => { });
            this.videoNotOverCallback = (() => { });
            this.VideoAdCallback = (res => {
                if (res.isEnded) {
                    this.videoOverCallback();
                    console.log("视频观看完毕，给与奖励");
                } else {
                    this.videoNotOverCallback();
                    console.log("视频未观看完");
                }
            });
            TTSdk.Instance = this;
        }
        InitTTAd(data) {
            let sysInfo = tt.getSystemInfoSync();
            let windowWidth = sysInfo.windowWidth;
            let windowHeight = sysInfo.windowHeight;
            let targetBannerAdWidth = 200;
            this.bannerAd = tt.createBannerAd({
                adUnitId: data.bannerAdID,
                adIntervals: 31,
                style: {
                    width: targetBannerAdWidth,
                    top: windowHeight - targetBannerAdWidth / 16 * 9
                }
            });
            this.bannerAd.style.left = (windowWidth - targetBannerAdWidth) / 2;
            this.bannerAd.onResize(size => {
                this.bannerAd.style.top = windowHeight - size.height;
                this.bannerAd.style.left = (windowWidth - size.width) / 2;
            });
            this.bannerAd.onLoad(() => console.log("Banner广告Load成功！"));
            this.bannerAd.onError(res => console.log("Banner广告出错：", "错误码：" + res.errCode, "错误信息：" + res.errMsg));
            this.videoAd = tt.createRewardedVideoAd({
                adUnitId: data.videoAdID,
                multiton: false,
                multitonRewardedMsg: ""
            });
            this.videoAd.onLoad(() => console.log("广告加载完成"));
            this.videoAd.onError(res => console.log("视频广告出错：", "错误码：" + res.errCode, "错误信息：" + res.errMsg));
            this.videoAd.load();
            this.insertAdParam = data.insertAdID;
            this.recorderManager = tt.getGameRecorderManager();
            this.recorderManager.onStart(() => {
                tt.showToast({
                    title: "录制开始",
                    icon: "none",
                    duration: 800
                });
            });
            this.recorderManager.onStop(res => {
                if (this.isMidwayStopRecord == true) return;
                if (new Date().getTime() - this.startRecordTime <= 3e3) {
                    tt.showToast({
                        title: "录屏失败：录屏时长低于3秒",
                        icon: "none",
                        duration: 2e3
                    });
                } else if (new Date().getTime() - this.startRecordTime >= 3e5) {
                    tt.showToast({
                        title: "录屏失败：时长大于300秒",
                        icon: "none",
                        duration: 1500
                    });
                } else {
                    this.videoPath = res.videoPath;
                    this.shareVedeoLenth = new Date().getTime() - this.startRecordTime;
                    tt.showToast({
                        title: "录制视频成功",
                        icon: "none",
                        duration: 1500
                    });
                }
            });
            this.shareRecordDesc = "";
        }
        InitVideoAdCallBack(watchVideoFinishCallback, watchVideoNotFinishCallback) {
            this.videoOverCallback = watchVideoFinishCallback;
            this.videoNotOverCallback = watchVideoNotFinishCallback;
            this.videoAd.offClose(this.VideoAdCallback);
            this.videoAd.onClose(this.VideoAdCallback);
        }
        ShowVideoAdPrivate() {
            this.videoAd.show().then(() => {
                console.log("广告显示成功");
            }).catch(err => {
                console.log("广告组件出现问题", err);
                this.videoAd.load().then(() => {
                    console.log("手动加载成功");
                    this.videoAd.show();
                });
            });
        }
        ShowVideoAd(watchVideoFinishCallback, watchVideoNotFinishCallback) {
            this.InitVideoAdCallBack(watchVideoFinishCallback, watchVideoNotFinishCallback);
            this.ShowVideoAdPrivate();
        }
        ShowInsertAd() {
            if (this.insertAd && this.canDestroyInsertAd) {
                this.insertAd.destroy();
                this.insertAd = null;
                this.canDestroyInsertAd = false;
            }
            this.insertAd = tt.createInterstitialAd({
                adUnitId: this.insertAdParam
            });
            this.insertAd.load().then(() => {
                this.insertAd.show().then(() => {
                    this.canDestroyInsertAd = true;
                    console.log("插屏广告展示成功");
                });
            }).catch(err => {
                console.log(err);
            });
        }
        ShowBannerAd() {
            this.bannerAd.show().then(() => {
                console.log("banner广告显示成功");
            }).catch(err => {
                console.log("banner广告组件出现问题", err);
            });
        }
        HideBannerAd() {
            this.bannerAd.hide();
        }
        ShakeDevice() {
            tt.vibrateShort({});
        }
        StartRecordVideo() {
            if (!this.recorderManager) return;
            this.startRecordTime = new Date().getTime();
            this.recorderManager.start({
                duration: this.maxRecordTime
            });
        }
        StopRecordNoTip() {
            if (!this.recorderManager) return;
            this.isMidwayStopRecord = true;
            this.shareVedeoLenth = 0;
            this.recorderManager.stop();
        }
        StopRecordVideo() {
            if (!this.recorderManager) return;
            this.isMidwayStopRecord = false;
            this.recorderManager.stop();
        }
        ShareVideo(shareSuccessCallBack, shareFailCallBack) {
            if (this.shareVedeoLenth > 3e3) {
                tt.shareAppMessage({
                    channel: "video",
                    query: "",
                    extra: {
                        videoPath: this.videoPath,
                        videoTopics: [this.shareRecordDesc]
                    },
                    success() {
                        shareSuccessCallBack();
                        tt.showToast({
                            title: "分享视频成功",
                            icon: "none",
                            duration: 1e3
                        });
                    },
                    fail(e) {
                        if (shareFailCallBack) shareFailCallBack();
                    }
                });
            } else {
                tt.showToast({
                    title: "分享录屏失败：时长低于3秒",
                    icon: "none",
                    duration: 2e3
                });
            }
        }
        JumpToOtherGame(tAppId, imaPath, tleft, tTop, tWidth, tHeight) {
            let platform = "";
            tt.getSystemInfo({
                success(res) {
                    console.log(`手机型号为 ${res.model}`);
                    platform = res.platform;
                },
                fail(res) {
                    console.log(`获取系统信息失败`);
                }
            });
            if (platform === "ios") return;
            this.moreGameBt = tt.createMoreGamesButton({
                type: "image",
                image: imaPath,
                style: {
                    left: tleft,
                    top: tTop,
                    width: tWidth,
                    height: tHeight,
                    lineHeight: 40,
                    backgroundColor: "",
                    textColor: "#ffffff",
                    textAlign: "center",
                    fontSize: 16,
                    borderRadius: 4,
                    borderWidth: 0,
                    borderColor: "#13d3f8"
                },
                appLaunchOptions: [{
                    appId: tAppId,
                    query: "foo=bar&baz=qux",
                    extraData: {}
                }],
                onNavigateToMiniGame(res) {
                    console.log("跳转其他小游戏", res);
                }
            });
            this.moreGameBt.onTap(() => {
                console.log("点击更多游戏");
            });
        }
        ShowMoreGameBt() {
            if (!this.moreGameBt) return;
            this.moreGameBt.show();
        }
        HideMoreGameBt() {
            if (!this.moreGameBt) return;
            this.moreGameBt.hide();
        }
        ShareGame(shareAppSuccessCallBack, shareAppFailCallBack) {
            tt.shareAppMessage({
                success() {
                    shareAppSuccessCallBack();
                    console.log("分享成功");
                },
                fail(e) {
                    shareAppFailCallBack();
                    console.log("分享失败", e);
                }
            });
        }
    }
    class UIBase extends Laya.Script {
        constructor() {
            super();
            this.allUIDic = new Map();
            this.prefixArray = ["img", "btn", "txt", "list", "box", "hsld", "ti"];
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.TweenAnm();
        }
        TweenAnm() {
            let rootUI = this.owner;
            this.startTweenAnm = Laya.Tween.from(rootUI, {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backOut);
        }
        CloseUI() {
            Tool.ClearTragetTween(this.startTweenAnm);
            if (this.owner) {
                this.owner.destroy(true);
            }
        }
        AddBtnEvent(btName, callback, needPlayClickSound = true, clickSoundPath) {
            let bt = this.GetBtn(btName);
            if (!bt) return;
            Tool.AddBtnEvent(bt, this, callback, needPlayClickSound, clickSoundPath);
        }
        AddBtnEventScaleFx(btName, callback, needPlayClickSound = true, clickSoundPath) {
            let bt = this.GetBtn(btName);
            if (!bt) return;
            Tool.AddBtnEventScale(bt, this, callback, needPlayClickSound, clickSoundPath);
        }
        BtnEvent(bt, callback, needPlayClickSound = true, clickSoundPath) {
            if (!bt) return;
            Tool.AddBtnEvent(bt, this, callback, needPlayClickSound, clickSoundPath);
        }
        GetTxt(txtName) {
            return Tool.GetNodeByMap(txtName, this.allUIDic);
        }
        GetImg(imgName) {
            return Tool.GetNodeByMap(imgName, this.allUIDic);
        }
        GetBtn(btnName) {
            return Tool.GetNodeByMap(btnName, this.allUIDic);
        }
        GetList(listName) {
            return Tool.GetNodeByMap(listName, this.allUIDic);
        }
        GetBox(boxName) {
            return Tool.GetNodeByMap(boxName, this.allUIDic);
        }
        GetHSlider(name) {
            return Tool.GetNodeByMap(name, this.allUIDic);
        }
        GetTextInput(name) {
            return Tool.GetNodeByMap(name, this.allUIDic);
        }
        GetUIByT(uiName) {
            return Tool.GetNodeByMap(uiName, this.allUIDic);
        }
        SetVisible(uiName, visible) {
            this.GetUIByT(uiName).visible = visible;
        }
        SetText(uiName, content) {
            this.GetTxt(uiName).text = content;
        }
        SetImgSkin(imgName, skin) {
            this.GetImg(imgName).skin = skin;
        }
        SetBtnSkin(btnName, skin) {
            this.GetImg(btnName).skin = skin;
        }
        CheckNeedAddToDic(uiName) {
            for (let i = 0; i < this.prefixArray.length; i++) {
                if (uiName.startsWith(this.prefixArray[i])) {
                    return true;
                }
            }
            return false;
        }
        SetAllUINodesDic() {
            this.allUIDic = this.GetAllChildrenMap(this.owner);
        }
        GetChildNodesArray(target) {
            let nodeArray = [];
            for (let i = 0; i < target.numChildren; i++) {
                let node = target.getChildAt(i);
                if (node) {
                    nodeArray.push(node);
                }
            }
            return nodeArray;
        }
        FindAndGetAllChildren(parentNode, outNodesArray) {
            if (parentNode.numChildren > 0) {
                let nodeArray = this.GetChildNodesArray(parentNode);
                nodeArray.forEach(node => {
                    if (this.CheckNeedAddToDic(node.name) == true) {
                        outNodesArray.push(node);
                    }
                    if (this.GetChildNodesArray(node).length > 0) {
                        this.FindAndGetAllChildren(node, outNodesArray);
                    } else {
                        return outNodesArray;
                    }
                });
            }
            return null;
        }
        GetAllChildrenArray(parentNode) {
            let allChildrenArray = [];
            this.FindAndGetAllChildren(parentNode, allChildrenArray);
            return allChildrenArray;
        }
        GetAllChildrenMap(parentNode) {
            let allChildrenArray = this.GetAllChildrenArray(parentNode);
            let map = new Map();
            for (let i = 0; i < allChildrenArray.length; i++) {
                if (!map.has(allChildrenArray[i].name)) {
                    map.set(allChildrenArray[i].name, allChildrenArray[i]);
                }
            }
            return map;
        }
        LogUIMap() {
            if (this.allUIDic.size == 0 || !this.allUIDic) {
                console.log("UI预制体资源Map为空");
                return;
            }
            console.log("UI节点个数：", this.allUIDic.size);
            for (let [key, value] of this.allUIDic) {
                console.log("key:", key, "===", "value:", value);
            }
        }
    }
    class WaittingAdPanel extends UIBase {
        constructor() {
            super();
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.rotImg = this.GetImg("imgRot");
        }
        onUpdate() {
            this.rotImg.rotation = this.rotImg.rotation + 3;
        }
    }
    class WatchAdWaitRotMgr extends Laya.Script {
        constructor() {
            super();
            this.isOpen = false;
            WatchAdWaitRotMgr.Instance = this;
        }
        onAwake() {
            this.InitRot();
        }
        onDestroy() {
            Laya.timer.clear(this, this.HideWatchAdWaitRot);
        }
        InitRot() {
            UIMgr.Instance.OpenUI(WaittingAdPanel, ui => {
                this.ui = ui;
                this.HideWatchAdWaitRot();
            }, Laya.stage);
        }
        ShowWatchAdWaitRot() {
            if (!this.ui) {
                return;
            }
            if (this.isOpen) {
                return;
            }
            this.ui.visible = true;
            this.isOpen = true;
            Laya.timer.once(2e3, this, this.HideWatchAdWaitRot);
        }
        HideWatchAdWaitRot() {
            if (!this.ui) {
                return;
            }
            this.ui.visible = false;
            this.isOpen = false;
        }
    }
    class WeiXinSdk extends Laya.Script {
        constructor() {
            super();
            this.bannerAdLeft = null;
            this.bannerAdCenter = null;
            this.bannerAdRight = null;
            this.videoAd = null;
            this.insertAd = null;
            this.videoOverCallback = (() => { });
            this.videoNotOverCallback = (() => { });
            this.pyqAd = null;
            this.customAdID_1 = null;
            this.customAdID_2 = null;
            this.customAdID_3 = null;
            this.customAdID_4 = null;
            this.customAdID_5 = null;
            this.windowWidth = 0;
            this.windowHeight = 0;
            this.targetBannerAdWidth = 0;
            this.bizhi = 0;
            this.isShowbannerAdLeft = false;
            this.isShowbannerAdCenter = false;
            this.isShowbannerAdRight = false;
            this.VideoAdCallback = (res => {
                if (res && res.isEnded || res == undefined) {
                    Laya.timer.scale = 1;
                    this.videoOverCallback();
                } else {
                    Laya.timer.scale = 1;
                    this.videoNotOverCallback();
                }
            });
            this.switchData = {
                code: 0,
                desc: "ok",
                data: {
                    p1: 0,
                    p2: 30,
                    p3: 30,
                    p4: 50,
                    p5: .7,
                    p6: 1,
                    p7: 30,
                    p8: 1
                }
            };
            WeiXinSdk.Instance = this;
        }
        InitSdk(data) {
            this._adId = data;
            this.windowWidth = wx.getSystemInfoSync().windowWidth;
            this.windowHeight = wx.getSystemInfoSync().windowHeight;
            this.targetBannerAdWidth = Math.min(this.windowWidth, 300);
            this.bizhi = this.windowHeight / 640;
            this.bannerAdLeft = this.InitBanner(this._adId.bannerAdID, "left");
            this.bannerAdCenter = this.InitBanner(this._adId.bannerAdID, "center");
            this.bannerAdRight = this.InitBanner(this._adId.bannerAdID, "right");
            this.videoAd = this.InitVideoAd(this._adId.videoAdID);
            this.insertAd = this.InitInsertAd(this._adId.insertAdID);
            this.InitPYQ();
        }
        InitBanner(Id, left) {
            //if (Id == "") return null;
            let arr = ["adunit-6fe384664fab8f78","adunit-7c434f44f84c4035","adunit-a00e9a086610eb6d","adunit-678aa0e513c0b874","adunit-fcfb0329d9305e3f"]
            let bannerAd = wx.createBannerAd({
                adUnitId: arr[Math.floor(Math.random() * 5)],
                adIntervals: 30,
                style: {
                    left: 0,
                    top: 0,
                    width: Math.min(this.windowWidth, 300)
                }
            });
            bannerAd.onError(err => { });
            bannerAd.onResize(res => {
                switch (left) {
                    case "left":
                        bannerAd.style.left = 0;
                        bannerAd.style.top = this.windowHeight - res.height;
                        break;
  
                    case "center":
                        bannerAd.style.left = (this.windowWidth - res.width) / 2;
                        ;
                        bannerAd.style.top = this.windowHeight - res.height;
                        break;
  
                    case "right":
                        bannerAd.style.left = this.windowWidth - res.width;
                        bannerAd.style.top = this.windowHeight - res.height;
                        break;
                }
            });
            bannerAd.onLoad(() => { });
            return bannerAd;
        }
        ShowBannerAd(left) {
            switch (left) {
                case "left":
                    if (this.bannerAdLeft) {
                        this.bannerAdLeft.show();
                        this.isShowbannerAdLeft = true;
                    } else {
                        this.bannerAdLeft = this.InitBanner(this._adId.bannerAdID, "left");
                    }
                    break;
  
                case "center":
                    if (this.bannerAdCenter) {
                        this.bannerAdCenter.show();
                        this.isShowbannerAdCenter = true;
                    } else {
                        this.bannerAdCenter = this.InitBanner(this._adId.bannerAdID, "center");
                    }
                    break;
  
                case "right":
                    if (this.bannerAdRight) {
                        this.bannerAdRight.show();
                        this.isShowbannerAdRight = true;
                    } else {
                        this.bannerAdRight = this.InitBanner(this._adId.bannerAdID, "right");
                    }
                    break;
            }
        }
        HideBanner() {
            if (this.bannerAdLeft) {
                this.bannerAdLeft.hide();
                this.isShowbannerAdLeft = false;
            }
            if (this.bannerAdCenter) {
                this.bannerAdCenter.hide();
                this.isShowbannerAdCenter = false;
            }
            if (this.bannerAdRight) {
                this.bannerAdRight.hide();
                this.isShowbannerAdRight = false;
            }
        }
        DestBanner() {
            if (this.bannerAdLeft) {
                this.bannerAdLeft.hide();
                this.bannerAdLeft.destroy();
                this.bannerAdLeft = null;
                this.bannerAdLeft = this.InitBanner(this._adId.bannerAdID, "left");
                if (this.isShowbannerAdLeft) this.bannerAdLeft.show();
            }
            if (this.bannerAdCenter) {
                this.bannerAdCenter.hide();
                this.bannerAdCenter.destroy();
                this.bannerAdCenter = null;
                this.bannerAdCenter = this.InitBanner(this._adId.bannerAdID, "center");
                if (this.isShowbannerAdCenter) this.bannerAdCenter.show();
            }
            if (this.bannerAdRight) {
                this.bannerAdRight.hide();
                this.bannerAdRight.destroy();
                this.bannerAdRight = null;
                this.bannerAdRight = this.InitBanner(this._adId.bannerAdID, "right");
                if (this.isShowbannerAdRight) this.bannerAdRight.show();
            }
        }
        InitVideoAd(id) {
            //if (id == "") return null;
            let videoAd = wx.createRewardedVideoAd({
                adUnitId: "adunit-ef4bb76527da7760"
            });
            videoAd.onError(err => {
                console.log("ShowVideo onError:" + JSON.stringify(err));
            });
            videoAd.onLoad(() => { console.log('1234') });
            videoAd.load().then(() => { });
            return videoAd;
        }
        ShowVideoAd(watchVideoFinishCallback, watchVideoNotFinishCallback) {
            this.videoOverCallback = watchVideoFinishCallback;
            this.videoNotOverCallback = watchVideoNotFinishCallback;
            this.videoAd.offClose(this.VideoAdCallback);
            this.videoAd.onClose(this.VideoAdCallback);
            WatchAdWaitRotMgr.Instance.ShowWatchAdWaitRot();
            this.videoAd.show().then(() => {
                WatchAdWaitRotMgr.Instance.HideWatchAdWaitRot();
                Laya.timer.scale = 0;
            }).catch(err => {
                WatchAdWaitRotMgr.Instance.HideWatchAdWaitRot();
            });
        }
        InitInsertAd(id) {
            //if (id == "") return null;
            let interstitialAd = wx.createInterstitialAd({
                adUnitId: "adunit-d5a4eb9af86006e3"
            });
            interstitialAd.onLoad(() => { });
            interstitialAd.onError(err => {
                console.log(`插屏展示失败 err:${JSON.stringify(err)}`);
            });
            interstitialAd.onClose(res => { });
            return interstitialAd;
        }
        ShowInsertAd() {
            if (!this.insertAd) return;
            this.insertAd.show().catch(err => { });
        }
        ShakeDevice() {
            wx.vibrateShort({});
        }
        InitPYQ() {
            let windowHeight = wx.getSystemInfoSync().windowHeight;
            let bizhi = windowHeight / 640;
            let btn = {
                type: "image",
                image: "btn_LogQuan.png",
                icon: "green",
                style: {
                    left: 931 * bizhi,
                    top: 10 * bizhi,
                    width: 52 * bizhi,
                    height: 60 * bizhi
                }
            };
            this.pyqAd = wx.createGameClubButton(btn);
            this.pyqAd.onTap();
            this.pyqAd.hide();
        }
        ShowPYQ() {
            this.pyqAd.show();
        }
        HidePYQ() {
            this.pyqAd.hide();
        }
        InitCustomAd(adID, style, onclose = (() => { })) {
            // if (!adID) {
            //     return;
            // }
            let customAd = wx.createCustomAd({
                adUnitId: adID,
                style: style
            });
            customAd.onLoad(() => {
                customAd.show().then(() => console.log("原生模板广告显示"));
            });
            customAd.onError(err => {
                if (err.errCode == 1004) {
                    this.ShowToast("没有合适的广告");
                } else if (err.errCode >= 2004) {
                    this.ShowToast("广告调用频繁");
                } else {
                    this.ShowToast("广告调用异常");
                }
                console.log("原生模板广告问题：" + JSON.stringify(err));
            });
            customAd.onClose(() => {
                onclose();
            });
            return customAd;
        }
        ShowCustomAd(adID, style) {
            switch (adID) {
                case "1":
                    if (this.customAdID_1 == undefined || this.customAdID_1 == null) {
                        this.customAdID_1 = this.InitCustomAd("adunit-0eb4fb971f376167", style);
                        this.customAdID_1.show();
                    } else {
                        this.customAdID_1.show();
                    }
                    break;
  
                case "2":
                    if (this.customAdID_2 == undefined || this.customAdID_2 == null) {
                        this.customAdID_2 = this.InitCustomAd("adunit-ef4bb76527da7760", style);
                        this.customAdID_2.show();
                    } else {
                        this.customAdID_2.show();
                    }
                    break;
  
                case "3":
                    if (this.customAdID_3 == undefined || this.customAdID_3 == null) {
                        this.customAdID_3 = this.InitCustomAd("adunit-39a7462997bcc479", {
                            left: wx.getSystemInfoSync().windowWidth-72,
                            top: 10 * this.bizhi,
                            width: 72
                        });
                        this.customAdID_3.show();
                    } else {
                        this.customAdID_3.show();
                    }
                    break;
  
                case "4":
                    if (this.customAdID_4 == undefined || this.customAdID_4 == null) {
                        this.customAdID_4 = this.InitCustomAd(this._adId.customAdIDM0, {
                            left: Std.ui_width / 2 * this.bizhi - 364,
                            top: Std.ui_height / 2 * this.bizhi - 192,
                            width: 360
                        });
                        this.customAdID_4.show();
                    } else {
                        this.customAdID_4.show();
                    }
                    break;
  
                case "5":
                    if (this.customAdID_5 == undefined || this.customAdID_5 == null) {
                        this.customAdID_5 = this.InitCustomAd(this._adId.customAdIDM1, {
                            left: Std.ui_width / 2 * this.bizhi + 4,
                            top: Std.ui_height / 2 * this.bizhi - 192,
                            width: 360
                        });
                        this.customAdID_5.show();
                    } else {
                        this.customAdID_5.show();
                    }
                    break;
            }
        }
        HideCustomAd(adID) {
            switch (adID) {
                case "1":
                    if (this.customAdID_1) {
                        this.customAdID_1.hide();
                    }
                    break;
  
                case "2":
                    if (this.customAdID_2) {
                        this.customAdID_2.hide();
                    }
                    break;
  
                case "3":
                    if (this.customAdID_3) {
                        this.customAdID_3.hide();
                    }
                    break;
  
                case "4":
                    if (this.customAdID_4) {
                        this.customAdID_4.hide();
                    }
                    break;
  
                case "5":
                    if (this.customAdID_5) {
                        this.customAdID_5.hide();
                    }
                    break;
            }
        }
        DestCustomAd(adID) {
            if (this.customAdID_1) {
                this.customAdID_1.destroy();
                this.customAdID_1 = null;
            }
            if (this.customAdID_2) {
                this.customAdID_2.destroy();
                this.customAdID_2 = null;
            }
            if (this.customAdID_3) {
                this.customAdID_3.destroy();
                this.customAdID_3 = null;
            }
            if (this.customAdID_4) {
                this.customAdID_4.destroy();
                this.customAdID_4 = null;
            }
            if (this.customAdID_5) {
                this.customAdID_5.destroy();
                this.customAdID_5 = null;
            }
        }
        ShowToast(txt, tiem = 2e3) {
            wx.showToast({
                title: txt,
                icon: "none",
                duration: tiem
            });
        }
        Request(callback) {
            wx.request({
                url: "https://ga.gametdd.com/adCtrl/agd/conf",
                data: {
                    id: "624d62c6176bb922b91f885f"
                },
                header: {
                    "content-type": "application/json"
                },
                method: "POST",
                success: res => {
                    this.SetSwitchData(res.data);
                    console.log(JSON.stringify(this.switchData));
                    callback();
                }
            });
        }
        SetSwitchData(data) {
            this.switchData.code = data.code;
            this.switchData.desc = data.desc;
            for (let key in data.data) {
                this.switchData.data[key] = parseFloat(data.data[key]);
            }
        }
        GetSwitchData(str) {
            if (!this.switchData) {
                return 0;
            } else {
                if (this.switchData.code != 0) {
                    return 0;
                } else {
                    return this.switchData.data[str];
                }
            }
        }
        GetSwitch() {
            return this.switchData;
        }
        GetLaunchOptionsSync() {
            return wx.getLaunchOptionsSync();
        }
        Login(func = (err => { })) {
            wx.login({
                success: res => {
                    func(res.code);
                }
            });
            this.sceneID = wx.getLaunchOptionsSync().scene;
        }
    }
    WeiXinSdk.Instance = null;
    var SdkChannel;
    (function (SdkChannel) {
        SdkChannel[SdkChannel["TT"] = 0] = "TT";
        SdkChannel[SdkChannel["Oppo"] = 1] = "Oppo";
        SdkChannel[SdkChannel["Vivo"] = 2] = "Vivo";
        SdkChannel[SdkChannel["BaiDu"] = 3] = "BaiDu";
        SdkChannel[SdkChannel["QQ"] = 4] = "QQ";
        SdkChannel[SdkChannel["SSJJ"] = 5] = "SSJJ";
        SdkChannel[SdkChannel["WeiXinSdk"] = 6] = "WeiXinSdk";
        SdkChannel[SdkChannel["None"] = 7] = "None";
        SdkChannel[SdkChannel["Android"] = 8] = "Android";
        SdkChannel[SdkChannel["Ios"] = 9] = "Ios";
    })(SdkChannel || (SdkChannel = {}));
    class SdkManager {
        constructor() {
            this.isDebugMode = false;
            this._sdkChannel = SdkChannel.None;
            this.android233 = false;
            this.isPCMode = false;
            this._swdata = {
                code: 0,
                desc: "ok",
                data: {
                    p1: 0,
                    p2: 30,
                    p3: 30,
                    p4: 50,
                    p5: .7,
                    p6: 1,
                    p7: 30,
                    p8: 1
                }
            };
        }
        static getInst() {
            if (SdkManager.Instance == null) {
                SdkManager.Instance = new SdkManager();
            }
            return SdkManager.Instance;
        }
        getIsXXChannel(sdk) {
            return this._sdkChannel == sdk;
        }
        get sdkChannel() {
            return this._sdkChannel;
        }
        InitSdk(sdkChannel, data) {
            this._sdkChannel = sdkChannel;
            if (SdkManager.Instance.isDebugMode) return;
            switch (SdkChannel.WeiXinSdk) {
                case SdkChannel.TT:
                    if (!TTSdk.Instance) {
                        Laya.stage.addComponent(TTSdk);
                        TTSdk.Instance.InitTTAd(data);
                    }
                    break;
  
                case SdkChannel.WeiXinSdk:
                    if (!WeiXinSdk.Instance) {
                        Laya.stage.addComponent(WeiXinSdk);
                        WeiXinSdk.Instance.InitSdk(data);
                    }
                    break;
  
                case SdkChannel.Android:
                    console.log("Android初始化");
                    SdkManager.Test = window.PlatformClass.createClass("demo.MainActivity");
                    break;
  
                default:
                    break;
            }
        }
        ShowBanner(left) {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    TTSdk.Instance.ShowBannerAd();
                    break;
  
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.ShowBannerAd(left);
                    break;
  
                case SdkChannel.Android:
                    SdkManager.Test.call("js2android", 97);
                    break;
  
                default:
                    break;
            }
        }
        HideBanner() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    TTSdk.Instance.HideBannerAd();
                    break;
  
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.HideBanner();
                    break;
  
                case SdkChannel.Android:
                    Dispatcher.Event(EventType.CloseNative);
                    SdkManager.Test.call("js2android", 90);
                    break;
  
                default:
                    break;
            }
        }
        DestBanner() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.DestBanner();
                    break;
            }
        }
        ShowVideoAd(watchFinishCallback, watchNotFinishCallback = (() => { })) {
            if (SdkManager.Instance.isDebugMode) {
                watchFinishCallback();
                return;
            }
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    if (SdkManager.Instance.isDebugMode) watchFinishCallback(); else TTSdk.Instance.ShowVideoAd(watchFinishCallback, watchNotFinishCallback);
                    break;
  
                case SdkChannel.WeiXinSdk:
                    if (SdkManager.Instance.isDebugMode) watchFinishCallback(); else WeiXinSdk.Instance.ShowVideoAd(watchFinishCallback, watchNotFinishCallback);
                    break;
  
                case SdkChannel.Android:
                    SdkManager.watchFinishCallback = watchFinishCallback;
                    SdkManager.watchNotFinishCallback = watchNotFinishCallback;
                    SdkManager.Test.call("js2android", 99);
                    break;
  
                default:
                    break;
            }
        }
        moreGame() {
            SdkManager.Test.call("js2android", 66);
        }
        static watchFinishCallback99() {
            if (SdkManager.watchFinishCallback != null) SdkManager.watchFinishCallback();
            SdkManager.watchFinishCallback = null;
            SdkManager.watchNotFinishCallback = null;
        }
        static nativeAD(tempS) {
            if (tempS) {
                console.log("原生广告存在 ： 2022111");
            } else {
                console.log("原生广告不存在 ： 2022111");
            }
        }
        static watchNotFinishCallback99() {
            if (SdkManager.watchNotFinishCallback != null) SdkManager.watchNotFinishCallback();
            SdkManager.watchFinishCallback = null;
            SdkManager.watchNotFinishCallback = null;
        }
        StartRecordVideo() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    TTSdk.Instance.StartRecordVideo();
                    break;
  
                default:
                    break;
            }
        }
        StopRecordVideo() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    TTSdk.Instance.StopRecordVideo();
                    break;
  
                default:
                    break;
            }
        }
        StopRecordVideoNoTip() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    TTSdk.Instance.StopRecordNoTip();
                    break;
  
                default:
                    break;
            }
        }
        ShareRecordVideo(shareSuccessCallBack, shareFailCallBack) {
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    if (SdkManager.Instance.isDebugMode) {
                        shareSuccessCallBack();
                    } else {
                        TTSdk.Instance.ShareVideo(shareSuccessCallBack, shareFailCallBack);
                    }
                    break;
  
                default:
                    break;
            }
        }
        ShakeDevice() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    TTSdk.Instance.ShakeDevice();
                    break;
  
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.ShakeDevice();
                    break;
  
                default:
                    break;
            }
        }
        ShareGameApp(shareAppSuccessCallBack, shareAppFailCallBack) {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    TTSdk.Instance.ShareGame(shareAppSuccessCallBack, shareAppFailCallBack);
                    break;
  
                default:
                    break;
            }
        }
        ShowInsertAd() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    TTSdk.Instance.ShowInsertAd();
                    break;
  
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.ShowInsertAd();
                    break;
  
                case SdkChannel.Android:
                    SdkManager.Test.call("js2android", 98);
                    break;
  
                default:
                    break;
            }
        }
        ShowNativeAd(clickBtnTxt, imgIcon, descTxt, imgLogo, adTitleTxt) {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                default:
                    break;
            }
        }
        OnNativeAdClicked() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.Android:
                    SdkManager.Test.call("js2android", 57);
  
                default:
                    break;
            }
        }
        OnNativeAdCloseed() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.Android:
                    SdkManager.Test.call("js2android", 57);
  
                default:
                    break;
            }
        }
        SelfClickOnTime() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                default:
                    break;
            }
        }
        JumpToOtherGame(tAppId, imaPath, tleft, tTop, tWidth, tHeight) {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.TT:
                    TTSdk.Instance.JumpToOtherGame(tAppId, imaPath, tleft, tTop, tWidth, tHeight);
                    break;
  
                default:
                    break;
            }
        }
        ShowTTMoreGameBt() {
            if (SdkManager.Instance.isDebugMode) return;
            TTSdk.Instance.ShowMoreGameBt();
        }
        HideTTMoreGameBt() {
            if (SdkManager.Instance.isDebugMode) return;
            TTSdk.Instance.HideMoreGameBt();
        }
        LoadSubPack(packName, cb = (() => { })) {
            if (this.isPCMode) {
                cb();
                return;
            }
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    const loadTask = wx.loadSubpackage({
                        name: packName,
                        success: function (res) {
                            console.log(res, "分包加载成功");
                            cb();
                        },
                        fail: function (res) {
                            console.log(res, "分包加载失败");
                        }
                    });
                    loadTask.onProgressUpdate(res => { });
                    break;
  
                case SdkChannel.Vivo:
                    break;
  
                case SdkChannel.Oppo:
                    let subTask = qg.loadSubpackage({
                        name: packName,
                        success: function () {
                            console.log(packName, "子包加载成功");
                            cb();
                        }
                    });
                    subTask.onProgressUpdate(function (res) { });
                    break;
  
                case SdkChannel.Android:
                    cb();
                    break;
  
                default:
                    break;
            }
        }
        ShowPYQ() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.ShowPYQ();
                    break;
            }
        }
        HidePYQ() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.HidePYQ();
                    break;
            }
        }
        ShowCustomAd(adID, style) {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.ShowCustomAd(adID, style);
                    break;
            }
        }
        HideCustomAd(adID) {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.HideCustomAd(adID);
                    break;
            }
        }
        DestCustom() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    WeiXinSdk.Instance.DestCustomAd();
                    break;
            }
        }
        Request(callback = (() => { })) {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    return WeiXinSdk.Instance.Request(callback);
            }
        }
        GetSwitchData(str) {
            if (SdkManager.Instance.isPCMode) {
                return this._swdata.data[str];
            }
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    return WeiXinSdk.Instance.GetSwitchData(str);
            }
        }
        GetSwitch() {
            if (SdkManager.Instance.isDebugMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    return WeiXinSdk.Instance.GetSwitch();
            }
        }
        Login(func = (err => { })) {
            if (SdkManager.Instance.isDebugMode || SdkManager.Instance.isPCMode) return;
            switch (this.sdkChannel) {
                case SdkChannel.WeiXinSdk:
                    return WeiXinSdk.Instance.Login(func);
            }
        }
        GetLaunchOptionsSync() {
            if (SdkManager.Instance.isDebugMode && this.sdkChannel == SdkChannel.WeiXinSdk) return;
            return WeiXinSdk.Instance.GetLaunchOptionsSync();
        }
        getOpenID() {
            if (SdkManager.Instance.isDebugMode || SdkManager.Instance.isPCMode) return;
            return WeiXinSdk.Instance.openId;
        }
        getSceneID() {
            if (SdkManager.Instance.isDebugMode || SdkManager.Instance.isPCMode) return;
            return WeiXinSdk.Instance.sceneID;
        }
    }
    SdkManager.Instance = null;
    if (Laya.Browser.window) {
        Laya.Browser.window.SdkManager = SdkManager;
    }
    var CurrencyTypeEnum;
    (function (CurrencyTypeEnum) {
        CurrencyTypeEnum[CurrencyTypeEnum["Gold"] = 0] = "Gold";
        CurrencyTypeEnum[CurrencyTypeEnum["BlueDiamond"] = 1] = "BlueDiamond";
        CurrencyTypeEnum[CurrencyTypeEnum["RedDiamond"] = 2] = "RedDiamond";
    })(CurrencyTypeEnum || (CurrencyTypeEnum = {}));
    class CurrencyData {
        constructor(count, currencyType) {
            this.count = 0;
            this.currencyType = CurrencyTypeEnum.Gold;
            this.count = count;
            this.currencyType = currencyType;
        }
    }
    var ItemGetTypeEnum;
    (function (ItemGetTypeEnum) {
        ItemGetTypeEnum[ItemGetTypeEnum["Gold"] = 0] = "Gold";
        ItemGetTypeEnum[ItemGetTypeEnum["BlueDiamond"] = 1] = "BlueDiamond";
        ItemGetTypeEnum[ItemGetTypeEnum["RedDiamond"] = 2] = "RedDiamond";
        ItemGetTypeEnum[ItemGetTypeEnum["Weapon"] = 3] = "Weapon";
    })(ItemGetTypeEnum || (ItemGetTypeEnum = {}));
    var EquipShop;
    (function (EquipShop) {
        EquipShop[EquipShop["Buy"] = 0] = "Buy";
        EquipShop[EquipShop["Up"] = 1] = "Up";
        EquipShop[EquipShop["Viecle"] = 2] = "Viecle";
    })(EquipShop || (EquipShop = {}));
    class UIDataMidLyaer { }
    UIDataMidLyaer.CurrencyCount = 0;
    UIDataMidLyaer.CurrencyType = CurrencyTypeEnum.Gold;
    UIDataMidLyaer.ItemGetCount = 0;
    UIDataMidLyaer.ItemGetType = ItemGetTypeEnum.Gold;
    UIDataMidLyaer.ItemGetEquipName = Std.WeaponName_None;
    UIDataMidLyaer.ItemGetCb = (() => { });
    UIDataMidLyaer.IsEquipShop_BuyEquip = EquipShop.Buy;
    UIDataMidLyaer.IsFirstTimeInBattleSelectEquipUI = false;
    UIDataMidLyaer.WathAdCallback = (() => { });
    UIDataMidLyaer.CancelCallback = (() => { });
    UIDataMidLyaer.IsZombieModeWin = false;
    UIDataMidLyaer.YYModeSettlect = false;
    UIDataMidLyaer.OpenTreasureChestCb = (() => { });
    UIDataMidLyaer.OpenTreasureChestAgainCb = (() => { });
    UIDataMidLyaer.CancelTreasureChestCb = (() => { });
    UIDataMidLyaer.Confirm_title = "";
    UIDataMidLyaer.Confirm_TxtData = "";
    UIDataMidLyaer.Confirm_CancelCb = (() => { });
    UIDataMidLyaer.Confirm_WatchAd = (() => { });
    UIDataMidLyaer.Confirm_QRbtn = false;
    UIDataMidLyaer.ConfirmPic_title = "";
    UIDataMidLyaer.ConfirmPic_pic = "";
    UIDataMidLyaer.ConfirmPic_TxtData = "";
    UIDataMidLyaer.ConfirmPic_CancelCb = (() => { });
    UIDataMidLyaer.ConfirmPic_WatchAd = (() => { });
    UIDataMidLyaer.TryUse_TxtData = Std.WeaponName_None;
    UIDataMidLyaer.TryUse_IsTryUsing = false;
    UIDataMidLyaer.TryUse_ShowTimes = 0;
    UIDataMidLyaer.TryUse_CancelCb = (() => { });
    UIDataMidLyaer.TryUse_WatchAd = (() => { });
    class SoundTool {
        static PlaySfx(sfxPath, volume) {
            let sc = Laya.SoundManager.playSound(sfxPath);
            if (sc && volume) {
                sc.volume = volume;
            }
            return sc;
        }
        static PlaySfxByName(sfxName, volume, sfxFormat = ".mp3") {
            let sc = Laya.SoundManager.playSound("res/Sounds/" + sfxName + sfxFormat);
            if (sc && volume) {
                sc.volume = volume;
            }
            return sc;
        }
        static PlayBgm(bgmPath, volume) {
            let sc = Laya.SoundManager.playMusic(bgmPath, 0);
            if (sc && volume) {
                sc.volume = volume;
            }
            return sc;
        }
        static PlayBgmByName(bgmName, volume, format = ".mp3") {
            let sc = Laya.SoundManager.playMusic("res/Sounds/" + bgmName + format, 0);
            if (sc && volume) {
                sc.volume = volume;
            }
            return sc;
        }
        static StopBgm() {
            Laya.SoundManager.stopMusic();
        }
        static StopSound(soundPath) {
            Laya.SoundManager.stopSound(soundPath);
        }
        static StopAllSfx() {
            Laya.SoundManager.stopAllSound();
        }
        static MuteSound() {
            Laya.SoundManager.muted = true;
        }
        static UnMuteSound() {
            Laya.SoundManager.muted = false;
        }
        static AddSoundCtlBtnEvent(soundBtn, caller, onIconPath, offIconPath) {
            soundBtn.on(Laya.Event.CLICK, caller, () => {
                let isSoundOn = DataTool.GetInt(SoundTool.IsSoundOnKey);
                if (isSoundOn == 1) {
                    DataTool.SetKv(SoundTool.IsSoundOnKey, 0);
                    SoundTool.MuteSound();
                    soundBtn.skin = offIconPath;
                } else {
                    DataTool.SetKv(SoundTool.IsSoundOnKey, 1);
                    SoundTool.UnMuteSound();
                    soundBtn.skin = onIconPath;
                }
            });
        }
        static InitSoundCtlBtnIcon(soundBtn, onIconPath, offIconPath) {
            let isSoundOn = DataTool.GetInt(SoundTool.IsSoundOnKey);
            if (isSoundOn == 1) {
                soundBtn.skin = onIconPath;
                SoundTool.UnMuteSound();
            } else {
                soundBtn.skin = offIconPath;
                SoundTool.MuteSound();
            }
        }
    }
    SoundTool.IsSoundOnKey = "IsSoundOnKey";
    class WeaponInfoMgr extends Laya.Script {
        constructor() {
            super();
            this.weaponIconMap = new Map();
            this.weaponNameMap = new Map();
            this.weapon1ListDataArray = [];
            this.weapon2ListDataArray = [];
            this.weapon3ListDataArray = [];
            this.weapon4ListDataArray = [];
            this.weapon5ListDataArray = [];
            WeaponInfoMgr.Instance = this;
        }
        onAwake() {
            this.InitweaponIconMap();
            this.InitweaponNameMap();
            this.InitWeapon1ListArray();
            this.InitWeapon2ListArray();
            this.InitWeapon3ListArray();
            this.InitWeapon4ListArray();
            this.InitWeapon5ListArray();
        }
        GetWeaponPath(weaponName) {
            return "WeaponsIcon/" + weaponName + ".png";
        }
        SetWeaponIconToMap(weaponName) {
            this.weaponIconMap.set(weaponName, this.GetWeaponPath(weaponName));
        }
        InitweaponIconMap() {
            this.SetWeaponIconToMap(Std.WeaponName_None);
            this.SetWeaponIconToMap(Std.WeaponName_Ak);
            this.SetWeaponIconToMap(Std.WeaponName_M4);
            this.SetWeaponIconToMap(Std.WeaponName_Acr);
            this.SetWeaponIconToMap(Std.WeaponName_SgM870);
            this.SetWeaponIconToMap(Std.WeaponName_SgSpas12);
            this.SetWeaponIconToMap(Std.WeaponName_Sniper98k);
            this.SetWeaponIconToMap(Std.WeaponName_SniperCheyTac);
            this.SetWeaponIconToMap(Std.WeaponName_Revolver);
            this.SetWeaponIconToMap(Std.WeaponName_Glock);
            this.SetWeaponIconToMap(Std.WeaponName_M1911);
            this.SetWeaponIconToMap(Std.WeaponName_SmgMp5);
            this.SetWeaponIconToMap(Std.WeaponName_SmgTom);
            this.SetWeaponIconToMap(Std.WeaponName_SmgUzi);
            this.SetWeaponIconToMap(Std.WeaponName_Grenade);
            this.SetWeaponIconToMap(Std.WeaponName_GrenadeBar);
            this.SetWeaponIconToMap(Std.WeaponName_HpBox);
            this.SetWeaponIconToMap(Std.WeaponName_AmmoBox);
            this.SetWeaponIconToMap(Std.WeaponName_Rpg);
            this.SetWeaponIconToMap(Std.WeaponName_FireGun);
            this.SetWeaponIconToMap(Std.WeaponName_GLGun);
            this.SetWeaponIconToMap(Std.WeaponName_LMG);
            this.SetWeaponIconToMap(Std.WeaponName_Rocket);
            this.SetWeaponIconToMap(Std.WeaponName_SniperM24);
            this.SetWeaponIconToMap(Std.WeaponName_ViecleAirPlane);
            this.SetWeaponIconToMap(Std.WeaponName_ViecleTanK);
        }
        GetWeaponIconByName(weaponName) {
            if (this.weaponIconMap.get(weaponName)) {
                return this.weaponIconMap.get(weaponName);
            } else {
                return weaponName;
            }
        }
        SetWeaponNameToMap(weaponName, weaponChnName) {
            this.weaponNameMap.set(weaponName, weaponChnName);
        }
        InitweaponNameMap() {
            this.SetWeaponNameToMap(Std.WeaponName_None, "");
            this.SetWeaponNameToMap(Std.WeaponName_Ak, "AK47");
            this.SetWeaponNameToMap(Std.WeaponName_M4, "M4");
            this.SetWeaponNameToMap(Std.WeaponName_Acr, "ACR");
            this.SetWeaponNameToMap(Std.WeaponName_SgM870, "M870");
            this.SetWeaponNameToMap(Std.WeaponName_SgSpas12, "SPAS");
            this.SetWeaponNameToMap(Std.WeaponName_Sniper98k, "加兰德");
            this.SetWeaponNameToMap(Std.WeaponName_SniperCheyTac, "CheyTac");
            this.SetWeaponNameToMap(Std.WeaponName_SniperM24, "M24");
            this.SetWeaponNameToMap(Std.WeaponName_Revolver, "左轮");
            this.SetWeaponNameToMap(Std.WeaponName_Glock, "格洛克");
            this.SetWeaponNameToMap(Std.WeaponName_M1911, "M1911");
            this.SetWeaponNameToMap(Std.WeaponName_SmgMp5, "MP5");
            this.SetWeaponNameToMap(Std.WeaponName_SmgTom, "汤姆逊");
            this.SetWeaponNameToMap(Std.WeaponName_SmgUzi, "UZI");
            this.SetWeaponNameToMap(Std.WeaponName_Grenade, "手雷");
            this.SetWeaponNameToMap(Std.WeaponName_GrenadeBar, "棒雷");
            this.SetWeaponNameToMap(Std.WeaponName_HpBox, "医疗箱");
            this.SetWeaponNameToMap(Std.WeaponName_AmmoBox, "弹药箱");
            this.SetWeaponNameToMap(Std.WeaponName_Rpg, "RPG");
            this.SetWeaponNameToMap(Std.WeaponName_FireGun, "喷火枪");
            this.SetWeaponNameToMap(Std.WeaponName_GLGun, "榴弹枪");
            this.SetWeaponNameToMap(Std.WeaponName_LMG, "M249");
            this.SetWeaponNameToMap(Std.WeaponName_Rocket, "火箭筒");
            this.SetWeaponNameToMap(Std.WeaponName_ViecleTanK, "坦克");
            this.SetWeaponNameToMap(Std.WeaponName_ViecleAirPlane, "直升机");
        }
        GetWeaponChnNameByName(weaponName) {
            return this.weaponNameMap.get(weaponName);
        }
        GetAllWeaponChnNameMap() {
            return this.weaponNameMap;
        }
        InitWeapon1ListArray() {
            this.weapon1ListDataArray.push(Std.WeaponName_None);
            this.weapon1ListDataArray.push(Std.WeaponName_Ak);
            this.weapon1ListDataArray.push(Std.WeaponName_M4);
            this.weapon1ListDataArray.push(Std.WeaponName_Acr);
            this.weapon1ListDataArray.push(Std.WeaponName_SgM870);
            this.weapon1ListDataArray.push(Std.WeaponName_SgSpas12);
            this.weapon1ListDataArray.push(Std.WeaponName_Sniper98k);
            this.weapon1ListDataArray.push(Std.WeaponName_SniperCheyTac);
            this.weapon1ListDataArray.push(Std.WeaponName_SniperM24);
        }
        InitWeapon2ListArray() {
            this.weapon2ListDataArray.push(Std.WeaponName_None);
            this.weapon2ListDataArray.push(Std.WeaponName_M1911);
            this.weapon2ListDataArray.push(Std.WeaponName_Glock);
            this.weapon2ListDataArray.push(Std.WeaponName_Revolver);
            this.weapon2ListDataArray.push(Std.WeaponName_SmgTom);
            this.weapon2ListDataArray.push(Std.WeaponName_SmgUzi);
            this.weapon2ListDataArray.push(Std.WeaponName_SmgMp5);
        }
        InitWeapon3ListArray() {
            this.weapon3ListDataArray.push(Std.WeaponName_None);
            this.weapon3ListDataArray.push(Std.WeaponName_Grenade);
            this.weapon3ListDataArray.push(Std.WeaponName_GrenadeBar);
            this.weapon3ListDataArray.push(Std.WeaponName_HpBox);
            this.weapon3ListDataArray.push(Std.WeaponName_AmmoBox);
        }
        InitWeapon4ListArray() {
            this.weapon4ListDataArray.push(Std.WeaponName_None);
            this.weapon4ListDataArray.push(Std.WeaponName_Rpg);
            this.weapon4ListDataArray.push(Std.WeaponName_FireGun);
            this.weapon4ListDataArray.push(Std.WeaponName_GLGun);
            this.weapon4ListDataArray.push(Std.WeaponName_LMG);
            this.weapon4ListDataArray.push(Std.WeaponName_Rocket);
        }
        InitWeapon5ListArray() {
            this.weapon5ListDataArray.push(Std.WeaponName_None);
            this.weapon5ListDataArray.push(Std.WeaponName_ViecleTanK);
            this.weapon5ListDataArray.push(Std.WeaponName_ViecleAirPlane);
        }
        GetWeapon1ListData() {
            return this.weapon1ListDataArray;
        }
        GetWeapon2ListData() {
            return this.weapon2ListDataArray;
        }
        GetWeapon3ListData() {
            return this.weapon3ListDataArray;
        }
        GetWeapon4ListData() {
            return this.weapon4ListDataArray;
        }
        GetWeapon5ListData() {
            return this.weapon5ListDataArray;
        }
        GetNowSelectWeaponsDataCount() {
            let idx = WeaponMgr.Instance.GetRebornChangeWeaponIndex();
            if (idx == 1) return this.weapon1ListDataArray.length; else if (idx == 2) return this.weapon2ListDataArray.length; else if (idx == 3) return this.weapon3ListDataArray.length; else if (idx == 4) return this.weapon4ListDataArray.length; else if (idx == 5) return this.weapon5ListDataArray.length;
            return 0;
        }
        GetNowSelectWeaponsData() {
            let idx = WeaponMgr.Instance.GetRebornChangeWeaponIndex();
            if (idx == 1) return this.weapon1ListDataArray; else if (idx == 2) return this.weapon2ListDataArray; else if (idx == 3) return this.weapon3ListDataArray; else if (idx == 4) return this.weapon4ListDataArray; else if (idx == 5) return this.weapon5ListDataArray;
            return [];
        }
        GetWeaponPowerRecoilMagData(weaponName) {
            if (weaponName == Std.WeaponName_None) return [0, 0, 0]; else if (weaponName == Std.WeaponName_Ak) return [.5, .6, .3]; else if (weaponName == Std.WeaponName_M4) return [.3, .4, .3]; else if (weaponName == Std.WeaponName_Acr) return [.4, .5, .3]; else if (weaponName == Std.WeaponName_SgM870) return [.8, .75, .15]; else if (weaponName == Std.WeaponName_SgSpas12) return [.85, .8, .13]; else if (weaponName == Std.WeaponName_Sniper98k) return [.7, .55, .2]; else if (weaponName == Std.WeaponName_SniperCheyTac) return [.9, .7, .15]; else if (weaponName == Std.WeaponName_SniperM24) return [.9, .75, .13]; else if (weaponName == Std.WeaponName_Revolver) return [.7, .7, .2]; else if (weaponName == Std.WeaponName_Glock) return [.15, .3, .3]; else if (weaponName == Std.WeaponName_M1911) return [.1, .3, .4]; else if (weaponName == Std.WeaponName_SmgMp5) return [.2, .24, .3]; else if (weaponName == Std.WeaponName_SmgTom) return [.2, .3, .3]; else if (weaponName == Std.WeaponName_SmgUzi) return [.25, .25, .3]; else if (weaponName == Std.WeaponName_Grenade) return [.8, .1, .1]; else if (weaponName == Std.WeaponName_GrenadeBar) return [.9, .1, .1]; else if (weaponName == Std.WeaponName_HpBox) return [0, 0, 0]; else if (weaponName == Std.WeaponName_AmmoBox) return [0, 0, 0]; else if (weaponName == Std.WeaponName_Rpg) return [.88, .7, .1]; else if (weaponName == Std.WeaponName_FireGun) return [.75, .75, .6]; else if (weaponName == Std.WeaponName_GLGun) return [.85, .6, .2]; else if (weaponName == Std.WeaponName_LMG) return [.66, .6, .9]; else if (weaponName == Std.WeaponName_Rocket) return [.8, .3, .1]; else if (weaponName == Std.WeaponName_ViecleTanK) return [.8, .8, .3]; else if (weaponName == Std.WeaponName_ViecleAirPlane) return [.6, .7, .4];
            return [0, 0, 0];
        }
        GetWepaonPriceByName(weaponName) {
            if (weaponName == Std.WeaponName_None) return 0; else if (weaponName == Std.WeaponName_Ak) return 0; else if (weaponName == Std.WeaponName_M4) return 1500; else if (weaponName == Std.WeaponName_Acr) return 1700; else if (weaponName == Std.WeaponName_SgM870) return 1400; else if (weaponName == Std.WeaponName_SgSpas12) return 1800; else if (weaponName == Std.WeaponName_Sniper98k) return 2e3; else if (weaponName == Std.WeaponName_SniperCheyTac) return 2500; else if (weaponName == Std.WeaponName_SniperM24) return 2200; else if (weaponName == Std.WeaponName_Revolver) return 1900; else if (weaponName == Std.WeaponName_Glock) return 900; else if (weaponName == Std.WeaponName_M1911) return 800; else if (weaponName == Std.WeaponName_SmgMp5) return 1300; else if (weaponName == Std.WeaponName_SmgTom) return 1300; else if (weaponName == Std.WeaponName_SmgUzi) return 1100; else if (weaponName == Std.WeaponName_Grenade) return 1200; else if (weaponName == Std.WeaponName_GrenadeBar) return 1300; else if (weaponName == Std.WeaponName_HpBox) return 2e3; else if (weaponName == Std.WeaponName_AmmoBox) return 2e3; else if (weaponName == Std.WeaponName_Rpg) return 2200; else if (weaponName == Std.WeaponName_FireGun) return 3e3; else if (weaponName == Std.WeaponName_GLGun) return 3e3; else if (weaponName == Std.WeaponName_LMG) return 3e3; else if (weaponName == Std.WeaponName_Rocket) return 2500;
            return 0;
        }
        GetWepaonUpdateLevelKeyByName(weaponName) {
            if (weaponName == Std.WeaponName_Ak) return Std.LevelEquip_Ak_Key; else if (weaponName == Std.WeaponName_M4) return Std.LevelEquip_M4_Key; else if (weaponName == Std.WeaponName_Acr) return Std.LevelEquip_Acr_Key; else if (weaponName == Std.WeaponName_SgM870) return Std.LevelEquip_SgM870_Key; else if (weaponName == Std.WeaponName_SgSpas12) return Std.LevelEquip_SgSpas12_Key; else if (weaponName == Std.WeaponName_Sniper98k) return Std.LevelEquip_Sniper98k_Key; else if (weaponName == Std.WeaponName_SniperCheyTac) return Std.LevelEquip_SniperCheyTac_Key; else if (weaponName == Std.WeaponName_SniperM24) return Std.LevelEquip_SniperM24_Key; else if (weaponName == Std.WeaponName_Revolver) return Std.LevelEquip_Revolver_Key; else if (weaponName == Std.WeaponName_Glock) return Std.LevelEquip_Glock_Key; else if (weaponName == Std.WeaponName_M1911) return Std.LevelEquip_M1911_Key; else if (weaponName == Std.WeaponName_SmgMp5) return Std.LevelEquip_SmgMp5_Key; else if (weaponName == Std.WeaponName_SmgTom) return Std.LevelEquip_SmgTom_Key; else if (weaponName == Std.WeaponName_SmgUzi) return Std.LevelEquip_SmgUzi_Key; else if (weaponName == Std.WeaponName_Grenade) return Std.LevelEquip_Grenade_Key; else if (weaponName == Std.WeaponName_GrenadeBar) return Std.LevelEquip_GrenadeBar_Key; else if (weaponName == Std.WeaponName_HpBox) return Std.LevelEquip_HpBox_Key; else if (weaponName == Std.WeaponName_AmmoBox) return Std.LevelEquip_AmmoBox_Key; else if (weaponName == Std.WeaponName_Rpg) return Std.LevelEquip_Rpg_Key; else if (weaponName == Std.WeaponName_FireGun) return Std.LevelEquip_FireGun_Key; else if (weaponName == Std.WeaponName_GLGun) return Std.LevelEquip_GLGun_Key; else if (weaponName == Std.WeaponName_LMG) return Std.LevelEquip_LMG_Key; else if (weaponName == Std.WeaponName_Rocket) return Std.LevelEquip_Rocket_Key; else if (weaponName == Std.WeaponName_ViecleTanK) return Std.LevelEquip_ViecleTanK; else if (weaponName == Std.WeaponName_ViecleAirPlane) return Std.LevelEquip_ViecleAirPlane;
        }
        GetUnlockWeaponWatchAdCount(weaponName) {
            if (weaponName == Std.WeaponName_None) return 0; else if (weaponName == Std.WeaponName_Ak) return 0; else if (weaponName == Std.WeaponName_M4) return 1; else if (weaponName == Std.WeaponName_Acr) return 1; else if (weaponName == Std.WeaponName_SgM870) return 1; else if (weaponName == Std.WeaponName_SgSpas12) return 1; else if (weaponName == Std.WeaponName_Sniper98k) return 1; else if (weaponName == Std.WeaponName_SniperCheyTac) return 1; else if (weaponName == Std.WeaponName_SniperM24) return 1; else if (weaponName == Std.WeaponName_Revolver) return 1; else if (weaponName == Std.WeaponName_Glock) return 1; else if (weaponName == Std.WeaponName_M1911) return 0; else if (weaponName == Std.WeaponName_SmgMp5) return 1; else if (weaponName == Std.WeaponName_SmgTom) return 1; else if (weaponName == Std.WeaponName_SmgUzi) return 1; else if (weaponName == Std.WeaponName_Grenade) return 1; else if (weaponName == Std.WeaponName_GrenadeBar) return 1; else if (weaponName == Std.WeaponName_HpBox) return 1; else if (weaponName == Std.WeaponName_AmmoBox) return 1; else if (weaponName == Std.WeaponName_Rpg) return 4; else if (weaponName == Std.WeaponName_FireGun) return 3; else if (weaponName == Std.WeaponName_GLGun) return 2; else if (weaponName == Std.WeaponName_LMG) return 2; else if (weaponName == Std.WeaponName_Rocket) return 2; else if (weaponName == Std.WeaponName_ViecleTanK) return 0; else if (weaponName == Std.WeaponName_ViecleAirPlane) return 0;
            return 0;
        }
        GetHasWatchAdUnlockWeaponCount(weaponName) {
            return DataTool.GetInt(this.GetWatchAdUnlockLocalKey(weaponName));
        }
        GetWatchAdUnlockLocalKey(weaponName) {
            if (weaponName == Std.WeaponName_Ak) return Std.WatchAdTime_Ak_Key; else if (weaponName == Std.WeaponName_M4) return Std.WatchAdTime_M4_Key; else if (weaponName == Std.WeaponName_Acr) return Std.WatchAdTime_Acr_Key; else if (weaponName == Std.WeaponName_SgM870) return Std.WatchAdTime_SgM870_Key; else if (weaponName == Std.WeaponName_SgSpas12) return Std.WatchAdTime_SgSpas12_Key; else if (weaponName == Std.WeaponName_Sniper98k) return Std.WatchAdTime_Sniper98k_Key; else if (weaponName == Std.WeaponName_SniperCheyTac) return Std.WatchAdTime_SniperCheyTac_Key; else if (weaponName == Std.WeaponName_SniperM24) return Std.WatchAdTime_SniperM24_Key; else if (weaponName == Std.WeaponName_Revolver) return Std.WatchAdTime_Revolver_Key; else if (weaponName == Std.WeaponName_Glock) return Std.WatchAdTime_Glock_Key; else if (weaponName == Std.WeaponName_M1911) return Std.WatchAdTime_M1911_Key; else if (weaponName == Std.WeaponName_SmgMp5) return Std.WatchAdTime_SmgMp5_Key; else if (weaponName == Std.WeaponName_SmgTom) return Std.WatchAdTime_SmgTom_Key; else if (weaponName == Std.WeaponName_SmgUzi) return Std.WatchAdTime_SmgUzi_Key; else if (weaponName == Std.WeaponName_Grenade) return Std.WatchAdTime_Grenade_Key; else if (weaponName == Std.WeaponName_GrenadeBar) return Std.WatchAdTime_GrenadeBar_Key; else if (weaponName == Std.WeaponName_HpBox) return Std.WatchAdTime_HpBox_Key; else if (weaponName == Std.WeaponName_AmmoBox) return Std.WatchAdTime_AmmoBox_Key; else if (weaponName == Std.WeaponName_Rpg) return Std.WatchAdTime_Rpg_Key; else if (weaponName == Std.WeaponName_FireGun) return Std.WatchAdTime_FireGun_Key; else if (weaponName == Std.WeaponName_GLGun) return Std.WatchAdTime_GLGun_Key; else if (weaponName == Std.WeaponName_LMG) return Std.WatchAdTime_LMG_Key; else if (weaponName == Std.WeaponName_Rocket) return Std.WatchAdTime_Rocket_Key; else if (weaponName == Std.WeaponName_ViecleTanK) return Std.WeaponName_ViecleTanK; else if (weaponName == Std.WeaponName_ViecleAirPlane) return Std.WeaponName_ViecleAirPlane;
            return "";
        }
        GetHasUnlockWeapon(weaponName) {
            if (this.GetHasWatchAdUnlockWeaponCount(weaponName) >= this.GetUnlockWeaponWatchAdCount(weaponName)) {
                return true;
            }
            return false;
        }
        GetCanTryUseWeaponName() {
            let allSpecialWeapons = WeaponInfoMgr.Instance.GetWeapon4ListData();
            let unlockWeapons = [];
            for (let i = 1; i < allSpecialWeapons.length; i++) {
                if (WeaponInfoMgr.Instance.GetHasUnlockWeapon(allSpecialWeapons[i]) == false) {
                    unlockWeapons.push(allSpecialWeapons[i]);
                }
            }
            if (unlockWeapons.length == 0) {
                return Std.WeaponName_None;
            }
            return unlockWeapons[Tool.RandomInt(unlockWeapons.length)];
        }
    }
    class AwardDeliveryPanel extends UIBase {
        constructor() {
            super();
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.SetVisible("txtCount", UIDataMidLyaer.ItemGetCount != 0);
            this.SetText("txtCount", "+" + UIDataMidLyaer.ItemGetCount);
            this.SetImgSkin("imgAwardIocn", this.GetSkinByGetItemType(UIDataMidLyaer.ItemGetType));
            SoundTool.PlaySfxByName("happy");
        }
        onStart() {
            this.AddBtnEventScaleFx("btnClaim", () => {
                this.CloseUI();
            });
        }
        onUpdate() {
            this.GetImg("imgRot").rotation += Tool.DeltaTime() * 30;
        }
        GetSkinByGetItemType(type) {
            if (type == ItemGetTypeEnum.Gold) {
                return "General/settlement_pic_money1.png";
            } else if (type == ItemGetTypeEnum.BlueDiamond) {
                return "General/settlement_pic_money2.png";
            } else if (type == ItemGetTypeEnum.RedDiamond) {
                return "General/settlement_pic_money3.png";
            } else if (type == ItemGetTypeEnum.Weapon) {
                return WeaponInfoMgr.Instance.GetWeaponIconByName(UIDataMidLyaer.ItemGetEquipName);
            }
            return "";
        }
    }
    var GameLevelMode;
    (function (GameLevelMode) {
        GameLevelMode[GameLevelMode["NormalBattleMode"] = 0] = "NormalBattleMode";
        GameLevelMode[GameLevelMode["ZombieMode"] = 1] = "ZombieMode";
        GameLevelMode[GameLevelMode["YouYu"] = 2] = "YouYu";
    })(GameLevelMode || (GameLevelMode = {}));
    var GameYYMode;
    (function (GameYYMode) {
        GameYYMode[GameYYMode["None"] = 0] = "None";
        GameYYMode[GameYYMode["MTR"] = 1] = "MTR";
        GameYYMode[GameYYMode["BLQ"] = 2] = "BLQ";
        GameYYMode[GameYYMode["HTB"] = 3] = "HTB";
    })(GameYYMode || (GameYYMode = {}));
    var BattleTeamEnum;
    (function (BattleTeamEnum) {
        BattleTeamEnum[BattleTeamEnum["Blue"] = 0] = "Blue";
        BattleTeamEnum[BattleTeamEnum["Red"] = 1] = "Red";
    })(BattleTeamEnum || (BattleTeamEnum = {}));
    var BattleModeMapEnum;
    (function (BattleModeMapEnum) {
        BattleModeMapEnum[BattleModeMapEnum["AircraftCarrier"] = 0] = "AircraftCarrier";
        BattleModeMapEnum[BattleModeMapEnum["GameMainSc_Lake"] = 1] = "GameMainSc_Lake";
        BattleModeMapEnum[BattleModeMapEnum["GameMainSc_Port"] = 2] = "GameMainSc_Port";
        BattleModeMapEnum[BattleModeMapEnum["GameMainSc_City"] = 3] = "GameMainSc_City";
    })(BattleModeMapEnum || (BattleModeMapEnum = {}));
    class GameLevelMgr extends Laya.Script {
        constructor() {
            super();
            this.gameLevelMode = GameLevelMode.NormalBattleMode;
            this.nowSelectMapEnum = BattleModeMapEnum.AircraftCarrier;
            this.YuoYuGameMode = GameYYMode.None;
            this.playerBattleTeam = BattleTeamEnum.Blue;
            this.winTeam = BattleTeamEnum.Blue;
            this.openFriendlyFire = false;
            this.canUseViecle = true;
            this.canUseAI = true;
            this.isPlayerInSelectEquipPage = false;
            this.isPlayerInDieWaitTime = false;
            this.isPlayerInMouseGuide = false;
            this.isInTryUsePanel = false;
            this.isSeeParachute = false;
            this.isInConfirmPanel = false;
            this.isGamePause = false;
            this.battleWinTargetCount = 50;
            this.aiBalence = 5;
            this.aiDifficulty = 1;
            this.rebornTime = 5;
            this.mouseSensitivityMul = 1;
            this.BLQiaoRandomPos = 0;
            GameLevelMgr.Instance = this;
        }
        onAwake() {
            this.SetMouseSensityvity(DataTool.GetFloat(Std.Local_MouseSensitivityMulKey));
        }
        SetRebornTime(rebornTime) {
            this.rebornTime = rebornTime;
        }
        GetRebornTime() {
            return this.rebornTime;
        }
        SetAiDifficulty(aiDifficulty) {
            this.aiDifficulty = aiDifficulty;
        }
        GetAiDifficulty() {
            return this.aiDifficulty;
        }
        SetAiBalence(aiBalence) {
            this.aiBalence = aiBalence;
        }
        GetAiBalence() {
            return this.aiBalence;
        }
        SetBattleWinTargetCount(battleWinTargetCount) {
            this.battleWinTargetCount = battleWinTargetCount;
        }
        GetBattleWinTargetCount() {
            return this.battleWinTargetCount;
        }
        SetCanUseViecle(canUseViecle) {
            this.canUseViecle = canUseViecle;
        }
        GetCanUseViecle() {
            return this.canUseViecle;
        }
        SetPlayerBattleTeam(playerBattleTeam) {
            this.playerBattleTeam = playerBattleTeam;
        }
        GetPlayerBattleTeam() {
            return this.playerBattleTeam;
        }
        GetSelectMode() {
            return this.gameLevelMode;
        }
        SetSelectMode(gameLevelMode) {
            this.gameLevelMode = gameLevelMode;
        }
        GetNowSelectMapEnum() {
            return this.nowSelectMapEnum;
        }
        SetNowSelectMapEnum(nowSelectMapEnum) {
            this.nowSelectMapEnum = nowSelectMapEnum;
        }
        SetYYGame(YYmode) {
            this.YuoYuGameMode = YYmode;
        }
        GetYYGame() {
            return this.YuoYuGameMode;
        }
        SetFriendlyFire(openFriendlyFire) {
            this.openFriendlyFire = openFriendlyFire;
        }
        GetFriendlyFire() {
            return this.openFriendlyFire;
        }
        SetCanUseAI(canUseAI) {
            this.canUseAI = canUseAI;
        }
        GetCanUseAI() {
            return this.canUseAI;
        }
        SetMouseSensityvity(mouseSensitivityMul) {
            this.mouseSensitivityMul = mouseSensitivityMul;
            DataTool.SetKv(Std.Local_MouseSensitivityMulKey, mouseSensitivityMul);
        }
        GetMouseSensityvity() {
            return this.mouseSensitivityMul;
        }
        GetNowWinTeam() {
            return this.winTeam;
        }
        SetNowWinTeam(winTeam) {
            this.winTeam = winTeam;
        }
        GetGameEndData() {
            return this.gameEndData;
        }
        SetBattleEndData(gameMode, gameWin, battleTime, killCount, dieTimes, maxConstKill, goldCount, blueDiamondCount, cupCount) {
            this.gameEndData = new GameEndData(gameMode, gameWin, battleTime, killCount, dieTimes, maxConstKill, goldCount, blueDiamondCount, cupCount);
        }
        GetIsPlayerInSelectEquipPage() {
            return this.isPlayerInSelectEquipPage;
        }
        SetIsPlayerInSelectEquipPage(isPlayerInSelectEquipPage) {
            this.isPlayerInSelectEquipPage = isPlayerInSelectEquipPage;
        }
        SetIsPlayerInDieWaitTime(isWait) {
            this.isPlayerInDieWaitTime = isWait;
        }
        GetIsPlayerInDieWaitTime() {
            return this.isPlayerInDieWaitTime;
        }
        SetIsPlayerInMouseGuide(isInMouseGudie) {
            this.isPlayerInMouseGuide = isInMouseGudie;
        }
        GetIsPlayerInMouseGuide() {
            return this.isPlayerInMouseGuide;
        }
        SetIsPlayerInTryUseWeapon(isInTryUsePanel) {
            this.isInTryUsePanel = isInTryUsePanel;
        }
        GetIsPlayerInTryUseWeapon() {
            return this.isInTryUsePanel;
        }
        SetIsParachuteBoxOpen(isSeeParachute) {
            this.isSeeParachute = isSeeParachute;
        }
        GetIsParachuteBoxOpen() {
            return this.isSeeParachute;
        }
        SetIsPlayerInConfirmPanel(isInConfirmPanel) {
            this.isInConfirmPanel = isInConfirmPanel;
        }
        GetIsPlayerInConfirmPanel() {
            return this.isInConfirmPanel;
        }
        SetIsInGamePausePanel(isGamePause) {
            this.isGamePause = isGamePause;
        }
        GetIsInGamePausePanel() {
            return this.isGamePause;
        }
    }
    class GameEndData {
        constructor(gameMode = 0, gameWin = false, battleTime = 0, killCount = 0, dieTimes = 0, maxConstKill = 0, goldCount = 0, blueDiamondCount = 0, cupCount = 0) {
            this.gameMode = 0;
            this.gameWin = false;
            this.battleTime = 0;
            this.killCount = 0;
            this.dieTimes = 0;
            this.maxConstKill = 0;
            this.goldCount = 0;
            this.blueDiamondCount = 0;
            this.cupCount = 0;
            this.gameMode = gameMode;
            this.gameWin = gameWin;
            this.battleTime = battleTime;
            this.killCount = killCount;
            this.dieTimes = dieTimes;
            this.maxConstKill = maxConstKill;
            this.goldCount = goldCount;
            this.blueDiamondCount = blueDiamondCount;
            this.cupCount = cupCount;
        }
    }
    class ConfirmPanel extends UIBase {
        constructor() {
            super();
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnPlayerDie, this, this.CloseUI);
            this.SetAllUINodesDic();
            GameLevelMgr.Instance.SetIsPlayerInConfirmPanel(true);
            this.SetText("txtTitle", UIDataMidLyaer.Confirm_title);
            this.SetText("txtContent", UIDataMidLyaer.Confirm_TxtData);
            if (UIDataMidLyaer.Confirm_QRbtn) {
                this.SetVisible("btnWatchAd", false);
                this.GetBtn("btnCancel").x = 285;
            }
            Laya.Tween.from(this.GetImg("imgMid"), {
                scaleX: 0,
                scaleY: 0
            }, 250, Laya.Ease.backOut);
            this.AddBtnEventScaleFx("btnCancel", () => {
                UIDataMidLyaer.Confirm_CancelCb();
                GameLevelMgr.Instance.SetIsPlayerInConfirmPanel(false);
                this.CloseUI();
            });
            this.AddBtnEventScaleFx("btnWatchAd", () => {
                GameLevelMgr.Instance.SetIsPlayerInConfirmPanel(false);
                UIDataMidLyaer.Confirm_WatchAd();
                this.CloseUI();
            });
        }
        onDestroy() {
            Dispatcher.Event(EventType.OnCloseOtherCurrencyPanelInMenuSc);
            Dispatcher.RemoveListener(EventType.OnPlayerDie, this, this.CloseUI);
        }
    }
    class ConfirmPicPanel extends UIBase {
        constructor() {
            super();
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.SetText("txtTitle", UIDataMidLyaer.ConfirmPic_title);
            this.SetText("txtContent", UIDataMidLyaer.ConfirmPic_TxtData);
            this.SetImgSkin("imgIcon", WeaponInfoMgr.Instance.GetWeaponIconByName(UIDataMidLyaer.ConfirmPic_pic));
            Laya.Tween.from(this.GetImg("imgMid"), {
                scaleX: 0,
                scaleY: 0
            }, 250, Laya.Ease.backOut);
            this.AddBtnEventScaleFx("btnCancel", () => {
                UIDataMidLyaer.ConfirmPic_CancelCb();
                this.CloseUI();
            });
            this.AddBtnEventScaleFx("btnWatchAd", () => {
                UIDataMidLyaer.ConfirmPic_WatchAd();
                this.CloseUI();
            });
        }
        onDestroy() {
            Dispatcher.Event(EventType.OnCloseOtherCurrencyPanelInMenuSc);
        }
    }
    class GenGamePlayTool {
        static PlayGameOverSfx(caller) {
            SoundTool.PlaySfxByName("timerover");
            Laya.timer.once(500, caller, () => {
                SoundTool.PlaySfxByName("gameOver");
            });
        }
        static PlayUnlockSfx() {
            SoundTool.PlaySfxByName("unlock");
        }
        static PlayEquipItemSfx() {
            SoundTool.PlaySfxByName("equipItem");
        }
        static PlayGetCurrencySfx() {
            SoundTool.PlaySfxByName("getgold");
        }
    }
    class SmallItemGetTipPanel extends UIBase {
        constructor() {
            super();
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.InitData();
            this.Tween();
            Laya.timer.once(2e3, this, () => {
                this.owner.destroy(true);
            });
            GenGamePlayTool.PlayGetCurrencySfx();
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
        }
        Tween() {
            let target = this.GetImg("imgTween");
            Laya.Tween.to(target, {
                centerY: -150
            }, 300, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                Laya.timer.once(300, this, () => {
                    Laya.Tween.to(target, {
                        alpha: 0
                    }, 500);
                });
            }));
        }
        InitData() {
            let sign = "+";
            sign = UIDataMidLyaer.CurrencyCount > 0 ? "+" : "-";
            this.SetImgSkin("imgIocn", this.GetSkinByCurrencyType(UIDataMidLyaer.CurrencyType));
            this.SetText("txtCount", sign + UIDataMidLyaer.CurrencyCount);
            Tool.MidUiXY(this.owner);
        }
        GetSkinByCurrencyType(type) {
            if (type == CurrencyTypeEnum.Gold) {
                return "General/settlement_pic_money1.png";
            } else if (type == CurrencyTypeEnum.BlueDiamond) {
                return "General/settlement_pic_money2.png";
            } else if (type == CurrencyTypeEnum.RedDiamond) {
                return "General/settlement_pic_money3.png";
            }
            return "";
        }
    }
    class MD5 {
        static get a() {
            return 1732584193;
        }
        static get b() {
            return -271733879;
        }
        static get c() {
            return -1732584194;
        }
        static get d() {
            return 271733878;
        }
        static get hexcase() {
            return 0;
        }
        static get chrsz() {
            return 8;
        }
        static md5_cmn(q, a, b, x, s, t) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
        }
        static FF(a, b, c, d, x, s, t) {
            return this.md5_cmn(b & c | ~b & d, a, b, x, s, t);
        }
        static GG(a, b, c, d, x, s, t) {
            return this.md5_cmn(b & d | c & ~d, a, b, x, s, t);
        }
        static HH(a, b, c, d, x, s, t) {
            return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
        }
        static II(a, b, c, d, x, s, t) {
            return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t);
        }
        static safe_add(x, y) {
            var lsw = (x & 65535) + (y & 65535);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535;
        }
        static bit_rol(num, cnt) {
            return num << cnt | num >>> 32 - cnt;
        }
        static str2binl(str) {
            var bin = Array();
            var mask = (1 << this.chrsz) - 1;
            for (var i = 0; i < str.length * this.chrsz; i += this.chrsz) bin[i >> 5] |= (str.charCodeAt(i / this.chrsz) & mask) << i % 32;
            return bin;
        }
        static binl2hex(binarray) {
            var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var str = "";
            for (var i = 0; i < binarray.length * 4; i++) {
                str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 15);
            }
            return str;
        }
        static core_md5(x, len) {
            x[len >> 5] |= 128 << len % 32;
            x[(len + 64 >>> 9 << 4) + 14] = len;
            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;
            for (var i = 0; i < x.length; i += 16) {
                var olda = a;
                var oldb = b;
                var oldc = c;
                var oldd = d;
                a = this.FF(a, b, c, d, x[i + 0], 7, -680876936);
                d = this.FF(d, a, b, c, x[i + 1], 12, -389564586);
                c = this.FF(c, d, a, b, x[i + 2], 17, 606105819);
                b = this.FF(b, c, d, a, x[i + 3], 22, -1044525330);
                a = this.FF(a, b, c, d, x[i + 4], 7, -176418897);
                d = this.FF(d, a, b, c, x[i + 5], 12, 1200080426);
                c = this.FF(c, d, a, b, x[i + 6], 17, -1473231341);
                b = this.FF(b, c, d, a, x[i + 7], 22, -45705983);
                a = this.FF(a, b, c, d, x[i + 8], 7, 1770035416);
                d = this.FF(d, a, b, c, x[i + 9], 12, -1958414417);
                c = this.FF(c, d, a, b, x[i + 10], 17, -42063);
                b = this.FF(b, c, d, a, x[i + 11], 22, -1990404162);
                a = this.FF(a, b, c, d, x[i + 12], 7, 1804603682);
                d = this.FF(d, a, b, c, x[i + 13], 12, -40341101);
                c = this.FF(c, d, a, b, x[i + 14], 17, -1502002290);
                b = this.FF(b, c, d, a, x[i + 15], 22, 1236535329);
                a = this.GG(a, b, c, d, x[i + 1], 5, -165796510);
                d = this.GG(d, a, b, c, x[i + 6], 9, -1069501632);
                c = this.GG(c, d, a, b, x[i + 11], 14, 643717713);
                b = this.GG(b, c, d, a, x[i + 0], 20, -373897302);
                a = this.GG(a, b, c, d, x[i + 5], 5, -701558691);
                d = this.GG(d, a, b, c, x[i + 10], 9, 38016083);
                c = this.GG(c, d, a, b, x[i + 15], 14, -660478335);
                b = this.GG(b, c, d, a, x[i + 4], 20, -405537848);
                a = this.GG(a, b, c, d, x[i + 9], 5, 568446438);
                d = this.GG(d, a, b, c, x[i + 14], 9, -1019803690);
                c = this.GG(c, d, a, b, x[i + 3], 14, -187363961);
                b = this.GG(b, c, d, a, x[i + 8], 20, 1163531501);
                a = this.GG(a, b, c, d, x[i + 13], 5, -1444681467);
                d = this.GG(d, a, b, c, x[i + 2], 9, -51403784);
                c = this.GG(c, d, a, b, x[i + 7], 14, 1735328473);
                b = this.GG(b, c, d, a, x[i + 12], 20, -1926607734);
                a = this.HH(a, b, c, d, x[i + 5], 4, -378558);
                d = this.HH(d, a, b, c, x[i + 8], 11, -2022574463);
                c = this.HH(c, d, a, b, x[i + 11], 16, 1839030562);
                b = this.HH(b, c, d, a, x[i + 14], 23, -35309556);
                a = this.HH(a, b, c, d, x[i + 1], 4, -1530992060);
                d = this.HH(d, a, b, c, x[i + 4], 11, 1272893353);
                c = this.HH(c, d, a, b, x[i + 7], 16, -155497632);
                b = this.HH(b, c, d, a, x[i + 10], 23, -1094730640);
                a = this.HH(a, b, c, d, x[i + 13], 4, 681279174);
                d = this.HH(d, a, b, c, x[i + 0], 11, -358537222);
                c = this.HH(c, d, a, b, x[i + 3], 16, -722521979);
                b = this.HH(b, c, d, a, x[i + 6], 23, 76029189);
                a = this.HH(a, b, c, d, x[i + 9], 4, -640364487);
                d = this.HH(d, a, b, c, x[i + 12], 11, -421815835);
                c = this.HH(c, d, a, b, x[i + 15], 16, 530742520);
                b = this.HH(b, c, d, a, x[i + 2], 23, -995338651);
                a = this.II(a, b, c, d, x[i + 0], 6, -198630844);
                d = this.II(d, a, b, c, x[i + 7], 10, 1126891415);
                c = this.II(c, d, a, b, x[i + 14], 15, -1416354905);
                b = this.II(b, c, d, a, x[i + 5], 21, -57434055);
                a = this.II(a, b, c, d, x[i + 12], 6, 1700485571);
                d = this.II(d, a, b, c, x[i + 3], 10, -1894986606);
                c = this.II(c, d, a, b, x[i + 10], 15, -1051523);
                b = this.II(b, c, d, a, x[i + 1], 21, -2054922799);
                a = this.II(a, b, c, d, x[i + 8], 6, 1873313359);
                d = this.II(d, a, b, c, x[i + 15], 10, -30611744);
                c = this.II(c, d, a, b, x[i + 6], 15, -1560198380);
                b = this.II(b, c, d, a, x[i + 13], 21, 1309151649);
                a = this.II(a, b, c, d, x[i + 4], 6, -145523070);
                d = this.II(d, a, b, c, x[i + 11], 10, -1120210379);
                c = this.II(c, d, a, b, x[i + 2], 15, 718787259);
                b = this.II(b, c, d, a, x[i + 9], 21, -343485551);
                a = this.safe_add(a, olda);
                b = this.safe_add(b, oldb);
                c = this.safe_add(c, oldc);
                d = this.safe_add(d, oldd);
            }
            return Array(a, b, c, d);
        }
        static toMd5Hex(text) {
            return this.binl2hex(this.core_md5(this.str2binl(text), text.length * this.chrsz));
        }
    }
    class MyAjax {
        static get openIDUrl() {
            return "https://ddht.jinkezhexin.com/getChannelUserInfo";
        }
        static get eventUrl() {
            return "https://ddht.jinkezhexin.com/shufen/writeLog";
        }
        static get appid() {
            return "yr17q46co4a1chtalonr";
        }
        static get secret() {
            return "z2i0wuwuz6n376av25fgtowlzwov32";
        }
        static get openid() {
            return this._openId;
        }
        static set openid(value) {
            this._openId = value;
        }
        static GetOpenID(str) {
            console.log(`code: ${str}`);
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = (() => {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var response = xhr.responseText;
                    if (response) {
                        let _responseJson = JSON.parse(response);
                        if (_responseJson.code == 200) {
                            console.log(JSON.stringify(_responseJson));
                            this.openid = _responseJson.data.openid;
                            console.log(this.openid);
                        }
                    }
                }
            });
            let data = {
                appid: this.appid,
                token: str
            };
            let param = "";
            for (let key in data) {
                if (param) param += "&";
                param += key + "=" + data[key];
            }
            xhr.open("POST", "https://ddht.jinkezhexin.com/getChannelUserInfo", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(param);
        }
        static Sound(data) {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = (() => {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var response = xhr.responseText;
                    if (response) {
                        var responseJson = JSON.parse(response);
                        if (responseJson.code == 200) {
                            console.log(JSON.stringify(responseJson));
                        } else { }
                    } else { }
                } else { }
            });
            let param = "";
            for (let key in data) {
                if (param) param += "&";
                param += key + "=" + data[key];
            }
            xhr.open("POST", this.eventUrl, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(param);
        }
        static GameTimeData(len, scene) {
            let data = {
                appid: "",
                userId: "",
                event: "",
                timestamp: 0,
                len: 0,
                scene: 0,
                sign: ""
            };
            data.appid = this.appid;
            data.userId = this.openid;
            data.event = "onlineTime";
            data.timestamp = new Date().getTime() / 1e3;
            data.len = len;
            data.scene = scene;
            data.sign = this.CreateSign(data);
            this.Sound(data);
        }
        static CreateSign(param) {
            let _data = this.ksort(param);
            let str = "";
            for (let key in _data) {
                if (key === "sign") continue;
                if (str) str += "&";
                str += key + "=" + _data[key];
            }
            str += this.secret;
            return MD5.toMd5Hex(str);
        }
        static ksort(param) {
            let sorted = {};
            let keys = Object.keys(param);
            keys.sort();
            keys.forEach(key => {
                sorted[key] = param[key];
            });
            return sorted;
        }
    }
    MyAjax._openId = "";
    class GameTimeMgr extends Laya.Script {
        constructor() {
            super();
            this.gameTime = 0;
            this.time = 0;
            this.time30s = 0;
            this.spinDrawTime = 0;
            this.spinDrawReturnTime = 0;
            this.spinDrawAllTime = 0;
            this.timeAD = 0;
            this.timeBanner = 0;
            this.timeCustom = 0;
            this.m5qtBool = false;
            GameTimeMgr.Instance = this;
        }
        onAwake() {
            if (this.IsSameDay(DataTool.GetInt(Std.Time_IsNewDay), GameTimeMgr.Instance.GetNowDateTime())) {
                this.spinDrawTime = DataTool.GetInt(Std.spinDrawReturnTimeStamp);
                this.spinDrawReturnTime = DataTool.GetInt(Std.startFreeTimeStamp);
                this.spinDrawAllTime = DataTool.GetInt(Std.FrreDraw_LeftFreeDrawKey);
            } else {
                DataTool.SetKv(Std.weaponBanner, DataTool.GetInt(Std.weapon34isNoLock));
                this.spinDrawTime = 0;
                this.spinDrawReturnTime = this.spinDrawTime * 300 + 300;
                this.spinDrawAllTime = DataTool.GetInt(Std.FrreDraw_LeftFreeDrawKey);
                DataTool.SetKv(Std.Time_IsNewDay, GameTimeMgr.Instance.GetNowDateTime());
            }
            this.m5qtBool = SdkManager.Instance.GetSwitchData("p6") == 1;
        }
        onEnable() {
            console.log(`当前游戏的场景：${SdkManager.Instance.getSceneID()}`);
            MyAjax.GameTimeData(30, SdkManager.Instance.getSceneID());
        }
        onDestroy() { }
        onUpdate() {
            this.gameTime = this.gameTime + Tool.DeltaTime();
            this.time += Laya.timer.delta;
            if (this.time > 1e3) {
                this.time -= 1e3;
                this.spinDrawReturnTime -= 1;
                if (this.spinDrawReturnTime <= 0) {
                    this.spinDrawTime += 1;
                    this.spinDrawAllTime += 1;
                    this.spinDrawReturnTime = this.spinDrawTime * 300 + 300;
                    DataTool.SetKv(Std.spinDrawReturnTimeStamp, this.spinDrawTime);
                    DataTool.SetKv(Std.FrreDraw_LeftFreeDrawKey, this.spinDrawAllTime);
                }
                this.time30s -= 1;
                if (this.time30s <= 0) {
                    this.time30s = 30;
                    DataTool.SetKv(Std.spinDrawReturnTimeStamp, this.spinDrawTime);
                    DataTool.SetKv(Std.FrreDraw_LeftFreeDrawKey, this.spinDrawAllTime);
                    DataTool.SetKv(Std.startFreeTimeStamp, this.spinDrawReturnTime);
                    SdkManager.Instance.Request();
                }
                this.timeAD += 1;
                if (this.timeAD % 5 <= 0) {
                    SdkManager.Instance.Request();
                    this.timeBanner = SdkManager.Instance.GetSwitchData("p2");
                    this.timeCustom = SdkManager.Instance.GetSwitchData("p3");
                }
                if (this.timeAD % this.timeBanner <= 0) {
                    SdkManager.Instance.DestBanner();
                }
                if (this.timeAD % this.timeCustom <= 0) {
                    SdkManager.Instance.DestCustom();
                    SdkManager.Instance.ShowCustomAd("3");
                }
                if (this.timeAD % 30 <= 0) {
                    console.log(`当前游戏的场景：${SdkManager.Instance.getSceneID()}`);
                    MyAjax.GameTimeData(30, SdkManager.Instance.getSceneID());
                }
                if (!this.m5qtBool || Std.m5qtUI) return;
                if (this.timeAD % 300 <= 0) {
                    Std.m5qtUI = true;
                    Dispatcher.Event(EventType.m5qt);
                }
            }
        }
        GetSpinDarwAll() {
            return this.spinDrawAllTime;
        }
        UseSpinDarwAll(num) {
            this.spinDrawAllTime -= num;
            DataTool.SetKv(Std.FrreDraw_LeftFreeDrawKey, this.spinDrawAllTime);
        }
        VideoGetSpinDarwAll(num) {
            this.spinDrawAllTime += num;
            DataTool.SetKv(Std.FrreDraw_LeftFreeDrawKey, this.spinDrawAllTime);
        }
        GetSpinDrawReturnTime() {
            return this.spinDrawReturnTime;
        }
        GetGameTime() {
            return this.gameTime;
        }
        GetNowDateTime() {
            return new Date().getTime();
        }
        IsSameDay(timeStampA, timeStampB) {
            let dateA = new Date(timeStampA);
            let dateB = new Date(timeStampB);
            return dateA.setHours(0, 0, 0, 0) == dateB.setHours(0, 0, 0, 0);
        }
        PauseGameTimeScale() {
            Laya.timer.scale = 0;
        }
        ResumeGameTimeScale() {
            Laya.timer.scale = 1;
        }
    }
    class CountSdkMgr extends Laya.Script {
        constructor() {
            super();
            this.needCountData = false;
            CountSdkMgr.Instance = this;
        }
        TrackEvent(eventId, params = "") {
            if (!this.needCountData) {
                return;
            }
            if (SdkManager.Instance.getIsXXChannel(SdkChannel.WeiXinSdk)) {
                window["wx"].uma.trackEvent(eventId, params);
            }
        }
        SetNeedCount(needCount) {
            this.needCountData = needCount;
        }
    }
    class Lq_UIBase extends Laya.Script {
        constructor() {
            super();
            this.allUIDic = new Map();
        }
        onAwake() {
            this._FindAndGetAllChildren(this.owner);
            this.TweenAnm();
        }
        TweenAnm() {
            let rootUI = this.owner;
            this.startTweenAnm = Laya.Tween.from(rootUI, {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backOut);
        }
        CloseUI() {
            if (this.owner) {
                Tool.ClearTragetTween(this.startTweenAnm);
                this.owner.destroy(true);
            }
        }
        AddBtnEvent(btName, callback, needPlayClickSound = true, clickSoundPath) {
            let bt = this.GetObj(btName);
            if (!bt) return;
            Tool.AddBtnEvent(bt, this, callback, needPlayClickSound, clickSoundPath);
        }
        AddBtnEventScaleFx(btName, callback, needPlayClickSound = true, clickSoundPath) {
            let bt = this.GetObj(btName);
            if (!bt) return;
            Tool.AddBtnEventScale(bt, this, callback, needPlayClickSound, clickSoundPath);
        }
        AddBtnEventScaleFx2(bt, callback, needPlayClickSound = true, clickSoundPath) {
            Tool.AddBtnEventScale(bt, this, callback, needPlayClickSound, clickSoundPath);
        }
        BtnEvent(bt, callback, needPlayClickSound = true, clickSoundPath) {
            if (!bt) return;
            Tool.AddBtnEvent(bt, this, callback, needPlayClickSound, clickSoundPath);
        }
        GetObj(name) {
            if (!this.allUIDic.has(name)) {
                return null;
            }
            return this.allUIDic.get(name);
        }
        _FindAndGetAllChildren(parentNode) {
            if (parentNode.numChildren > 0) {
                let nodeArray = new Array();
                for (let i = 0; i < parentNode.numChildren; i++) {
                    let node = parentNode.getChildAt(i);
                    if (node) {
                        nodeArray.push(node);
                    }
                }
                nodeArray.forEach(node => {
                    if (node.name != "") {
                        if (node.name.indexOf("item") != 0) {
                            this.allUIDic.set(node.name, node);
                        }
                    }
                    if (node.numChildren > 0) {
                        this._FindAndGetAllChildren(node);
                    }
                });
            }
            return null;
        }
        LogUIMap() {
            if (this.allUIDic.size == 0 || !this.allUIDic) {
                console.log("UI预制体资源Map为空");
                return;
            }
            console.log("UI节点个数：", this.allUIDic.size);
            for (let [key, value] of this.allUIDic) {
                console.log("可控对象:", key);
            }
        }
        onDestroy() { }
        onDisable() { }
    }
    class TryUseWeaponPanel extends Lq_UIBase {
        constructor() {
            super();
            this.isFree = false;
        }
        onEnable() {
            this.btn_Cancel = this.GetObj("btn_Cancel");
            this.btn_WatchAdTryUse = this.GetObj("btn_WatchAdTryUse");
            this.img_AddPowerProperty = this.GetObj("img_AddPowerProperty");
            this.img_AddRecoilProperty = this.GetObj("img_AddRecoilProperty");
            this.img_AddMagProperty = this.GetObj("img_AddMagProperty");
            this.img_WeaponIcon = this.GetObj("img_WeaponIcon");
            this.txt_Desc = this.GetObj("txt_Desc");
            let num = DataTool.GetInt(Std.EveryDataFreeTry, 0);
            this.isFree = GameTimeMgr.Instance.IsSameDay(num, GameTimeMgr.Instance.GetNowDateTime());
            GameLevelMgr.Instance.SetIsPlayerInTryUseWeapon(true);
            this.img_WeaponIcon.skin = WeaponInfoMgr.Instance.GetWeaponIconByName(UIDataMidLyaer.TryUse_TxtData);
            this.txt_Desc.text = "观看视频试用特殊武器" + "【" + WeaponInfoMgr.Instance.GetWeaponChnNameByName(UIDataMidLyaer.TryUse_TxtData) + "】" + "，极大地提升你的火力！本次观看视频也会累计解锁所需次数。";
            let weaponData = WeaponInfoMgr.Instance.GetWeaponPowerRecoilMagData(UIDataMidLyaer.TryUse_TxtData);
            let lv = DataTool.GetInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(UIDataMidLyaer.TryUse_TxtData));
            let maxWid = 210;
            let powerAddWidth = maxWid * weaponData[0] + lv * 10;
            let recoilAddWidth = maxWid * weaponData[1] + lv * 10;
            let magAddWidth = maxWid * weaponData[2] + lv * 10;
            powerAddWidth = powerAddWidth > maxWid ? maxWid : powerAddWidth;
            recoilAddWidth = recoilAddWidth > maxWid ? maxWid : recoilAddWidth;
            magAddWidth = magAddWidth > maxWid ? maxWid : magAddWidth;
            this.img_AddPowerProperty.width = 0;
            this.img_AddRecoilProperty.width = 0;
            this.img_AddMagProperty.width = 0;
            Laya.Tween.to(this.img_AddPowerProperty, {
                width: powerAddWidth
            }, 300);
            Laya.Tween.to(this.img_AddRecoilProperty, {
                width: recoilAddWidth
            }, 300);
            Laya.Tween.to(this.img_AddMagProperty, {
                width: magAddWidth
            }, 300);
            this.AddBtnEventScaleFx2(this.btn_Cancel, () => {
                UIDataMidLyaer.TryUse_TxtData = Std.WeaponName_None;
                UIDataMidLyaer.TryUse_CancelCb();
                GameLevelMgr.Instance.SetIsPlayerInTryUseWeapon(false);
                this.CloseUI();
            });
            this.btn_WatchAdTryUse.skin = this.isFree ? "General/add_btn_ad.png" : "General/btn_free.png";
            this.AddBtnEventScaleFx2(this.btn_WatchAdTryUse, () => {
                if (!this.isFree) {
                    UIDataMidLyaer.TryUse_WatchAd();
                    GameLevelMgr.Instance.SetIsPlayerInTryUseWeapon(false);
                    DataTool.ModifyInt(Std.EveryDataFreeTry, GameTimeMgr.Instance.GetNowDateTime());
                    this.CloseUI();
                } else {
                    CountSdkMgr.Instance.TrackEvent("videStart22");
                    SdkManager.Instance.ShowVideoAd(() => {
                        UIDataMidLyaer.TryUse_WatchAd();
                        DataTool.ModifyInt(WeaponInfoMgr.Instance.GetWatchAdUnlockLocalKey(UIDataMidLyaer.TryUse_TxtData), 1);
                        GameLevelMgr.Instance.SetIsPlayerInTryUseWeapon(false);
                        CountSdkMgr.Instance.TrackEvent("videComplete22");
                        this.CloseUI();
                    });
                }
            });
            Laya.timer.once(500, this, () => {
                SdkManager.Instance.ShowInsertAd();
            });
            SdkManager.Instance.ShowCustomAd("1", {
                left: 40 * Std.UI_ad_cTopx,
                top: 80 * Std.UI_ad_cTopx,
                width: 72
            });
            SdkManager.Instance.ShowCustomAd("2", {
                left: Laya.Browser.clientWidth - 72,
                top: 100,
                width: 72
            });
            if (SdkManager.Instance.GetSwitchData("p5") <= 0) return;
            SdkManager.Instance.HideBanner();
            Laya.timer.once(SdkManager.Instance.GetSwitchData("p5") * 1e3, this, this.ShowBanner);
        }
        ShowBanner() {
            SdkManager.Instance.ShowBanner("center");
            Laya.timer.once(1100, this, () => {
                SdkManager.Instance.HideBanner();
            });
        }
        CloseUI() {
            Laya.timer.clear(this, this.ShowBanner);
            Laya.timer.clearAll(this);
            SdkManager.Instance.HideBanner();
            SdkManager.Instance.HideCustomAd("1");
            SdkManager.Instance.HideCustomAd("2");
            super.CloseUI();
        }
    }
    class WatchAdTipPanel extends UIBase {
        constructor() {
            super();
        }
        onAwake() {
            this.SetAllUINodesDic();
        }
        onStart() {
            this.AddBtnEvent("btnWarchAd", () => {
                CountSdkMgr.Instance.TrackEvent("videStart21");
                SdkManager.Instance.ShowVideoAd(() => {
                    SdkManager.Instance.HideBanner();
                    UIDataMidLyaer.WathAdCallback();
                    CountSdkMgr.Instance.TrackEvent("videComplete21");
                    this.CloseUI();
                });
            });
            this.AddBtnEvent("btnCancel", () => {
                SdkManager.Instance.HideBanner();
                UIDataMidLyaer.CancelCallback();
                this.CloseUI();
            });
        }
    }
    class PopMsgTool {
        static ShowSmallItemGetTip(count, type) {
            UIDataMidLyaer.CurrencyCount = count;
            UIDataMidLyaer.CurrencyType = type;
            UIMgr.Instance.OpenUI(SmallItemGetTipPanel, () => { }, SceneMgr.Instance.GetCurSc2D(), false);
        }
        static ShowSmallItemGetTipToStage(count, type) {
            UIDataMidLyaer.CurrencyCount = count;
            UIDataMidLyaer.CurrencyType = type;
            UIMgr.Instance.OpenUI(SmallItemGetTipPanel, () => { }, Laya.stage, false);
        }
        static ShowGetItemPanel(count, type, cb = (() => { }), equipName = Std.WeaponName_None) {
            UIDataMidLyaer.ItemGetType = type;
            UIDataMidLyaer.ItemGetCount = count;
            UIDataMidLyaer.ItemGetCb = cb;
            UIDataMidLyaer.ItemGetEquipName = equipName;
            UIMgr.Instance.OpenUI(AwardDeliveryPanel);
        }
        static ShowZombieRecoverPanel(watchAdCb = (() => { }), cancelCb = (() => { })) {
            UIDataMidLyaer.WathAdCallback = watchAdCb;
            UIDataMidLyaer.CancelCallback = cancelCb;
            UIMgr.Instance.OpenUI(WatchAdTipPanel);
        }
        static ShowConfirmPanel(title, content, watchAdCb = (() => { }), cancelCb = (() => { }), qrbool = false) {
            UIDataMidLyaer.Confirm_title = title;
            UIDataMidLyaer.Confirm_TxtData = content;
            UIDataMidLyaer.Confirm_CancelCb = cancelCb;
            UIDataMidLyaer.Confirm_WatchAd = watchAdCb;
            UIDataMidLyaer.Confirm_QRbtn = qrbool;
            UIMgr.Instance.OpenUI(ConfirmPanel);
        }
        static ShowConfirmPicPanel(title, content, pic, watchAdCb = (() => { }), cancelCb = (() => { })) {
            UIDataMidLyaer.ConfirmPic_title = title;
            UIDataMidLyaer.ConfirmPic_TxtData = content;
            UIDataMidLyaer.ConfirmPic_pic = pic;
            UIDataMidLyaer.ConfirmPic_CancelCb = cancelCb;
            UIDataMidLyaer.ConfirmPic_WatchAd = watchAdCb;
            UIMgr.Instance.OpenUI(ConfirmPicPanel);
        }
        static ShowTryUsePanel(content, watchAdCb = (() => { }), cancelCb = (() => { })) {
            UIDataMidLyaer.TryUse_TxtData = content;
            UIDataMidLyaer.TryUse_CancelCb = cancelCb;
            UIDataMidLyaer.TryUse_WatchAd = watchAdCb;
            UIMgr.Instance.OpenUI(TryUseWeaponPanel);
        }
        static PopMsg(msg, fontSize = 25, offsetY = 70, offsetX = 0, fontColor = "#ffffff", fontStrokeColor = "#000000", fontStrokeSize = 2, font = "Microsoft YaHei", isItalic = false, ease = Laya.Ease.elasticOut) {
            let txt = Laya.Pool.getItemByClass("PopText", Laya.Text);
            Laya.stage.addChild(txt);
            txt.alpha = 1;
            txt.italic = isItalic;
            txt.text = msg;
            txt.font = font;
            txt.fontSize = fontSize;
            txt.stroke = fontStrokeSize;
            txt.strokeColor = fontStrokeColor;
            txt.color = fontColor;
            txt.pivot(txt.width / 2, txt.height / 2);
            let _x = 0;
            _x = Laya.stage.width / 2;
            let _y = Laya.stage.height / 2;
            txt.x = _x;
            txt.y = _y;
            Laya.Tween.to(txt, {
                y: _y - offsetY,
                x: _x + offsetX
            }, 1e3, ease, Laya.Handler.create(txt, () => {
                Laya.Tween.to(txt, {
                    alpha: 0
                }, 1e3, Laya.Ease.linearNone);
            }));
            Laya.timer.once(2500, null, () => {
                txt.removeSelf();
                Laya.Pool.recover("PopText", txt);
            });
        }
    }
    class ViecleMgr extends Laya.Script {
        constructor() {
            super();
            this.isPlayerRidingViecle = false;
            this.isViecleFire = false;
            ViecleMgr.Instance = this;
        }
        GetNowRideViecle() {
            return this.nowRideViecle;
        }
        SetNowRideViecle(viecle) {
            this.nowRideViecle = viecle;
        }
        GetNowCollideViecle() {
            return this.nowCollideViecle;
        }
        SetNowCollideViecle(viecle) {
            this.nowCollideViecle = viecle;
        }
        GetIsPlayerRidingViecle() {
            return this.isPlayerRidingViecle;
        }
        SetIsPlayerRidingViecle(isPlayerRidingViecle) {
            this.isPlayerRidingViecle = isPlayerRidingViecle;
        }
        GetIsViecleFire() {
            return this.isViecleFire;
        }
        SetIsViecleFire(isViecleFire) {
            this.isViecleFire = isViecleFire;
        }
    }
    var Sprite3D = Laya.Sprite3D;
    var AITeamEnum;
    (function (AITeamEnum) {
        AITeamEnum[AITeamEnum["Nome"] = 0] = "Nome";
        AITeamEnum[AITeamEnum["PlayerTeam"] = 1] = "PlayerTeam";
        AITeamEnum[AITeamEnum["EnemyTeam"] = 2] = "EnemyTeam";
    })(AITeamEnum || (AITeamEnum = {}));
    var AIDamageSource;
    (function (AIDamageSource) {
        AIDamageSource[AIDamageSource["Player"] = 0] = "Player";
        AIDamageSource[AIDamageSource["PlayerTeammate"] = 1] = "PlayerTeammate";
        AIDamageSource[AIDamageSource["DieCol"] = 2] = "DieCol";
    })(AIDamageSource || (AIDamageSource = {}));
    var AITypeEnum;
    (function (AITypeEnum) {
        AITypeEnum[AITypeEnum["NormalHumanType"] = 0] = "NormalHumanType";
        AITypeEnum[AITypeEnum["ZombieType"] = 1] = "ZombieType";
        AITypeEnum[AITypeEnum["ViecleType"] = 2] = "ViecleType";
    })(AITypeEnum || (AITypeEnum = {}));
    class AIBase extends Laya.Script3D {
        constructor() {
            super();
            this.curHp = 0;
            this.maxHp = 0;
            this.damage = 0;
            this.moveSpeed = 5;
            this.tempMoveSpeed = 5;
            this.fireRate = .2;
            this.lastFireTimer = 0;
            this.lastHangupTurnTimer = 0;
            this.hangupTurnTime = 10;
            this.atkStopDis = 5;
            this.aiWeaponMag = 30;
            this.aiWeaponMaxMag = 30;
            this.makeDamageRate = 0;
            this.fireGunHitTimer = 0;
            this.aiBalanceAddDamage = 10;
            this.weaponFireSoundName = "";
            this.isEnemyDie = false;
            this.canMakeFireGunDamage = true;
            this.canDoFireGunDamageTimer = false;
            this.isMatchOver = false;
            this.isReloading = false;
            this.isNowRunHangUpAnm = false;
            this.canSelfKill = true;
            this.aiTeam = AITeamEnum.Nome;
            this.teamColor = BattleTeamEnum.Red;
            this.aiType = AITypeEnum.NormalHumanType;
            this.startEquipWeaponName = Std.WeaponName_Ak;
            this.allNodesMap = new Map();
            this.counterTeamSp3dArray = [];
        }
        onAwake() {
            this.GetNeed();
            Dispatcher.AddListener(EventType.OnMatchOver, this, this.OnMatchOver);
            Dispatcher.AddListener(EventType.OnAIDieRemoveArrayItem, this, this.OnAIDie);
            Dispatcher.AddListener(EventType.OnPlayerDie, this, this.OnPlayerDie);
            Dispatcher.AddListener(EventType.OnPlayerAirePlaneDieAndPlayerOnIt, this, this.OnPlayerAirePlaneDieAndPlayerOnIt);
            Dispatcher.AddListener(EventType.OnGrenadeBoom, this, this.OnGrenadeBoom);
            Laya.timer.loop(5e3, this, this.SetRandomTarget);
            Laya.timer.loop(5e3, this, this.ForceChangeTarget);
            Laya.timer.loop(5e3, this, this.ChangeRunOrWalkAnm);
            Laya.timer.loop(1e3, this, this.ForceChangeTargetWhileCantHitTarget);
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
            Tool.ClearTragetTween(this.tweenHangupTurn);
            Dispatcher.RemoveListener(EventType.OnMatchOver, this, this.OnMatchOver);
            Dispatcher.RemoveListener(EventType.OnAIDieRemoveArrayItem, this, this.OnAIDie);
            Dispatcher.RemoveListener(EventType.OnPlayerDie, this, this.OnPlayerDie);
            Dispatcher.RemoveListener(EventType.OnPlayerAirePlaneDieAndPlayerOnIt, this, this.OnPlayerAirePlaneDieAndPlayerOnIt);
            Dispatcher.RemoveListener(EventType.OnGrenadeBoom, this, this.OnGrenadeBoom);
        }
        onUpdate() {
            this.AILogic();
        }
        onCollisionEnter(col) {
            if (col.other.owner.name == Std.ColName_EvrTurnRoundCol) {
                if (!this.atkTargetSp3d) {
                    this.tweenHangupTurn = Laya.Tween.to(this.selfSp3d.transform, {
                        localRotationEulerY: this.selfSp3d.transform.localRotationEulerY + Tool.RandomInt(360)
                    }, 300);
                }
            }
        }
        onCollisionStay(col) {
            if (!this.canSelfKill) {
                return;
            }
            if (col.other.owner.name == Std.ColName_DieCol) {
                this.BeHit(1e4, AIDamageSource.DieCol);
                this.canSelfKill = false;
            }
        }
        onTriggerStay(col) {
            if (col.owner.name == Std.Other_FireTrigger) {
                if (this.canMakeFireGunDamage) {
                    Dispatcher.Event(EventType.OnFireGunHitAI, this);
                    this.canMakeFireGunDamage = false;
                }
            }
        }
        ChangeRunOrWalkAnm() {
            this.isNowRunHangUpAnm = !this.isNowRunHangUpAnm;
        }
        OnGrenadeBoom(pos) {
            if (!pos) {
                return;
            }
            if (GameLevelMgr.Instance.GetFriendlyFire() == false && this.teamColor == GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                return;
            }
            let dis = Tool.DisV3(this.selfSp3d.transform.position, pos);
            if (dis <= 10) {
                this.BeHit(1e3);
                Dispatcher.Event(EventType.OnPlayetKillEnemyCountKill);
            }
        }
        UpdateFireGunHitTimer() {
            this.fireGunHitTimer += Tool.DeltaTime();
            if (this.fireGunHitTimer >= .2) {
                this.canDoFireGunDamageTimer = true;
                if (this.canDoFireGunDamageTimer) {
                    this.canMakeFireGunDamage = true;
                    this.fireGunHitTimer = 0;
                    this.canDoFireGunDamageTimer = false;
                }
            }
        }
        GetNeed() {
            this.sc3d = SceneMgr.Instance.GetCurOpenSc3d();
        }
        LoadMuzzleFx() {
            if (this.muzzlePosSp3d) {
                ResMgr.Instance.LoadSp3d(Std.Prefab_MuzzleFlash, this, muzzleFlash => {
                    this.muzzleFlashFx = muzzleFlash.clone();
                    this.muzzlePosSp3d.addChild(this.muzzleFlashFx);
                    this.muzzleFlashFx.transform.localPosition = Tool.V3Zero();
                });
            }
        }
        PlayFireMuzzleFlash() {
            if (this.muzzleFlashFx && Tool.RandBool()) {
                this.muzzleFlashFx.particleSystem.play();
            }
        }
        OnMatchOver() {
            this.isMatchOver = true;
            if (this.curHp > 0) {
                this.anmt.play(EnemyAni.Die);
            }
        }
        OnAIDie(aiSp3d) {
            if (!this.atkTargetSp3d) {
                return;
            }
            if (aiSp3d == this.atkTargetSp3d) {
                this.atkTargetSp3d = null;
            }
        }
        OnPlayerDie() {
            if (!this.atkTargetSp3d) {
                return;
            }
            if (Std.Prefab_PlayerName == this.atkTargetSp3d.name) {
                this.atkTargetSp3d = null;
            }
        }
        OnPlayerAirePlaneDieAndPlayerOnIt() {
            if (!this.atkTargetSp3d) {
                return;
            }
            if (Std.Prefab_AirCraft == this.atkTargetSp3d.name) {
                this.atkTargetSp3d = null;
            }
        }
        SetRandomTarget() {
            if (this.counterTeamSp3dArray.length == 0 || !this.counterTeamSp3dArray) {
                this.atkTargetSp3d = null;
                return;
            }
            if (this.atkTargetSp3d) {
                return;
            }
            this.atkTargetSp3d = this.counterTeamSp3dArray[Tool.RandomInt(this.counterTeamSp3dArray.length)];
        }
        ForceChangeTarget() {
            if (this.atkTargetSp3d && this.atkTargetSp3d.transform) {
                if (Tool.DisV3(this.selfSp3d.transform.position, this.atkTargetSp3d.transform.position) >= this.atkStopDis + 10) {
                    if (this.counterTeamSp3dArray.length == 0 || !this.counterTeamSp3dArray) {
                        this.atkTargetSp3d = null;
                        return;
                    }
                    this.atkTargetSp3d = this.counterTeamSp3dArray[Tool.RandomInt(this.counterTeamSp3dArray.length)];
                }
            }
        }
        ForceChangeTargetWhileCantHitTarget() {
            if (!this.CheckIsAITargetFrontEmpty()) {
                this.SetRandomTarget();
            }
        }
        AILogic() {
            if (this.curHp <= 0 || this.isMatchOver || GameLevelMgr.Instance.GetIsPlayerInDieWaitTime() || GameLevelMgr.Instance.GetIsPlayerInMouseGuide() || GameLevelMgr.Instance.GetIsPlayerInTryUseWeapon() || GameLevelMgr.Instance.GetIsInGamePausePanel() == true) {
                return;
            }
            if (this.atkTargetSp3d) {
                this.FindAndAtkTarget();
            } else {
                this.HangUp();
            }
        }
        CheckIsAITargetFrontEmpty() {
            if (!this.atkTargetSp3d || !this.atkTargetSp3d.transform) {
                return;
            }
            if (this.atkTargetSp3d.name != Std.Prefab_PlayerName) {
                let hit = new Laya.HitResult();
                if (this.sc3d.physicsSimulation.raycastFromTo(this.selfSp3d.transform.position, this.atkTargetSp3d.transform.position, hit)) {
                    if (hit.succeeded) {
                        if (this.teamColor == BattleTeamEnum.Blue) {
                            if (hit.collider.owner.name == Std.AITeamName_RedTeam) {
                                return true;
                            }
                        } else {
                            if (hit.collider.owner.name == Std.AITeamName_BlueTeam) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        }
        CheckIsPlayerFrontEmpty() {
            if (!this.atkTargetSp3d || !this.atkTargetSp3d.transform) {
                return;
            }
            let hit = new Laya.HitResult();
            if (this.sc3d.physicsSimulation.raycastFromTo(this.selfSp3d.transform.position, this.atkTargetSp3d.transform.position, hit)) {
                if (hit.succeeded) {
                    if (hit.collider.owner.name == Std.Prefab_PlayerName) {
                        return true;
                    }
                }
            }
            return false;
        }
        MakeDamage() {
            let src = this.atkTargetSp3d.getComponent(AIBase);
            if (src) {
                if (src) {
                    this.InsFireBullet();
                    src.BeHit(this.damage + this.aiBalanceAddDamage);
                }
            } else {
                if (ViecleMgr.Instance.GetIsPlayerRidingViecle()) {
                    let v = ViecleMgr.Instance.GetNowRideViecle();
                    if (v) {
                        this.atkTargetSp3d = v.selfSp3d;
                        this.InsFireBullet();
                        Dispatcher.Event(EventType.OnPlayerViecleBeHit, this.damage);
                    }
                } else {
                    if (this.CheckIsPlayerFrontEmpty()) {
                        this.InsFireBullet();
                        Dispatcher.Event(EventType.OnEnemyHitPlayer, this.damage);
                    }
                }
            }
        }
        FindAndAtkTarget() {
            if (!this.atkTargetSp3d || !this.atkTargetSp3d.transform || this.isMatchOver) {
                return;
            }
            Tool.LookAtTarget(this.selfSp3d, this.atkTargetSp3d);
            if (Tool.DisV3(this.selfSp3d.transform.position, this.atkTargetSp3d.transform.position) > this.atkStopDis) {
                this.MoveForward();
            } else {
                this.tempMoveSpeed = 0;
                if (GameTimeMgr.Instance.GetGameTime() - this.lastFireTimer > this.fireRate && this.aiWeaponMag > 0 && !this.isReloading) {
                    this.anmt.play(EnemyAni.StandFire);
                    this.PlayFireSound();
                    this.PlayFireMuzzleFlash();
                    this.aiWeaponMag -= 1;
                    let makeDamageRate = Tool.RandomInt(10);
                    if (makeDamageRate >= this.makeDamageRate) {
                        this.MakeDamage();
                    }
                    if (this.aiWeaponMag <= 0) {
                        this.aiWeaponMag = 0;
                        this.isReloading = true;
                        this.anmt.play(EnemyAni.Reload);
                        Laya.timer.once(2e3, this, () => {
                            this.aiWeaponMag = this.aiWeaponMaxMag;
                            this.isReloading = false;
                        });
                    }
                    this.lastFireTimer = GameTimeMgr.Instance.GetGameTime();
                }
            }
        }
        PlayFireSound() {
            let playerSp3d;
            if (ViecleMgr.Instance.GetIsPlayerRidingViecle()) {
                playerSp3d = ViecleMgr.Instance.GetNowRideViecle().selfSp3d;
            } else {
                playerSp3d = SceneMgr.Instance.GetCurOpenSc3d().getChildByName(Std.Prefab_PlayerName);
            }
            if (!playerSp3d || !playerSp3d.transform) {
                return;
            }
            let dis = Tool.DisV3(this.selfSp3d.transform.position, playerSp3d.transform.position);
            let tempSoundVolume = .3;
            if (dis <= 5) {
                tempSoundVolume = .4;
            } else if (dis > 5 && dis < 10) {
                tempSoundVolume = .35;
            } else if (dis > 10 && dis < 4) {
                tempSoundVolume = .3;
            } else if (dis > 15 && dis < 20) {
                tempSoundVolume = .25;
            } else if (dis > 20 && dis < 25) {
                tempSoundVolume = .2;
            } else if (dis > 25 && dis < 30) {
                tempSoundVolume = .1;
            } else {
                tempSoundVolume = 0;
            }
            let playerSoundRate = Tool.RandomInt(100);
            if (playerSoundRate <= 60 && !GameLevelMgr.Instance.GetIsPlayerInSelectEquipPage() && tempSoundVolume != 0) {
                if (Tool.RandBool()) {
                    SoundTool.PlaySfxByName(this.weaponFireSoundName, tempSoundVolume);
                }
            }
        }
        HangUp() {
            if (GameTimeMgr.Instance.GetGameTime() - this.lastHangupTurnTimer > this.hangupTurnTime) {
                this.tweenHangupTurn = Laya.Tween.to(this.selfSp3d.transform, {
                    localRotationEulerY: this.selfSp3d.transform.localRotationEulerY + Tool.RandomInt(360)
                }, 300);
                this.lastHangupTurnTimer = GameTimeMgr.Instance.GetGameTime();
            }
            this.MoveForward();
        }
        MoveForward() {
            if (this.isNowRunHangUpAnm) {
                this.anmt.play(EnemyAni.Run);
                this.tempMoveSpeed = this.moveSpeed * 2;
            } else {
                this.anmt.play(EnemyAni.Walk);
                this.tempMoveSpeed = this.moveSpeed;
            }
            let v3 = Tool.MulV3(Tool.V3Forward(), this.tempMoveSpeed * Tool.DeltaTime());
            this.selfSp3d.transform.translate(v3);
        }
        InitAI(maxHp, damage, moveSpeed, fireRate, atkStopDis, makeDamageRate, aiType, teamColor) {
            this.selfSp3d = this.owner;
            this.allNodesMap = Tool.GetAllChildrenMap(this.selfSp3d);
            this.anmt = Tool.GetNodeByMap("AIModelRoot", this.allNodesMap).getComponent(Laya.Animator);
            this.lastFireTimer = GameTimeMgr.Instance.GetGameTime();
            this.lastHangupTurnTimer = GameTimeMgr.Instance.GetGameTime();
            this.maxHp = maxHp;
            this.curHp = this.maxHp;
            this.damage = damage;
            this.moveSpeed = moveSpeed;
            this.tempMoveSpeed = this.moveSpeed;
            this.fireRate = fireRate;
            this.makeDamageRate = makeDamageRate;
            this.aiType = aiType;
            this.atkStopDis = atkStopDis;
            this.teamColor = teamColor;
            this.startEquipWeaponName = this.RandStartWeaponName();
            if (!this.startEquipWeaponName) {
                this.startEquipWeaponName = Std.WeaponName_M4;
            }
            this.weaponFireSoundName = WeaponMgr.Instance.GetFireSoundByWeaponName(this.startEquipWeaponName);
            this.hangupTurnTime = Tool.RandomInt(10) + 5;
            this.selfSp3d.transform.localRotationEulerY = Tool.RandomInt(360);
            this.anmt.play(EnemyAni.WalkFire);
            this.InitCharacerCtler();
            this.InitWeapon();
        }
        RandStartWeaponName() {
            let allWeaponNameArray = WeaponInfoMgr.Instance.GetAllWeaponChnNameMap();
            let nameArray = [];
            allWeaponNameArray.forEach((v, k) => {
                if (k != Std.WeaponName_None && k != Std.WeaponName_Grenade && k != Std.WeaponName_GrenadeBar && k != Std.WeaponName_HpBox && k != Std.WeaponName_AmmoBox && k != Std.WeaponName_FireGun && k != Std.WeaponName_ViecleTanK && k != Std.WeaponName_ViecleAirPlane) nameArray.push(k);
            });
            let randIdx = Tool.RandomInt(nameArray.length);
            return nameArray[randIdx];
        }
        InitWeapon() {
            let weaponParent = Tool.GetNodeByMap("WeaponParent", this.allNodesMap);
            if (!weaponParent) {
                return;
            }
            if (this.startEquipWeaponName == Std.WeaponName_Rpg || this.startEquipWeaponName == Std.WeaponName_Rocket || this.startEquipWeaponName == Std.WeaponName_GLGun) {
                this.aiWeaponMaxMag = 1;
                ResMgr.Instance.LoadSp3d(Std.Prefab_RpgBullet, this, bt => {
                    this.bulletPrefab = bt.clone();
                });
            } else {
                this.aiWeaponMaxMag = 30;
                ResMgr.Instance.LoadSp3d(Std.Prefab_BtTrail, this, bt => {
                    this.bulletPrefab = bt.clone();
                });
            }
            this.aiWeaponMag = this.aiWeaponMaxMag;
            ResMgr.Instance.LoadSp3d(this.startEquipWeaponName, this, sp3d => {
                let insSp3d = Sprite3D.instantiate(sp3d);
                weaponParent.addChild(insSp3d);
                insSp3d.transform.localPosition = Tool.V3Zero();
                this.muzzlePosSp3d = Tool.GetSp3d(insSp3d, "MuzzlePos");
                this.LoadMuzzleFx();
            });
        }
        InitCharacerCtler() {
            this.cc = this.selfSp3d.addComponent(Laya.CharacterController);
            let colShape = new Laya.CapsuleColliderShape(.5, 1.8);
            colShape.localOffset = Tool.V3(0, .8, 0);
            this.cc.colliderShape = colShape;
        }
        BeHit(damage, damageSource) {
            if (this.curHp <= 0) {
                return;
            }
            if (this.teamColor != GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                if (damageSource != null && damageSource != undefined && damageSource == AIDamageSource.Player) {
                    let player = SceneMgr.Instance.GetCurOpenSc3d().getChildByName(Std.Prefab_PlayerName);
                    if (player) {
                        this.atkTargetSp3d = player;
                    }
                }
            }
            this.curHp -= damage;
            if (this.curHp <= 0) {
                this.curHp = 0;
                this.cc.enabled = false;
                this.anmt.play(EnemyAni.Die);
                Dispatcher.Event(EventType.OnAIDieRemoveArrayItem, this.selfSp3d);
                this.isEnemyDie = true;
                Dispatcher.Event(EventType.OnAIDiePostSlefData, this);
                if (GameLevelMgr.Instance.GetPlayerBattleTeam() != this.teamColor && damageSource == AIDamageSource.Player) {
                    Dispatcher.Event(EventType.OnPlayetKillEnemyCountKill);
                }
                Laya.timer.once(2e3, this, () => {
                    this.owner.destroy(true);
                });
            }
        }
        InsFireBullet() { }
        SetAIDifficulty() {
            let diff = GameLevelMgr.Instance.GetAiDifficulty();
            if (diff == 1) {
                this.maxHp = 250;
                this.curHp = this.maxHp;
                this.damage = 10;
                this.moveSpeed = 3;
                this.fireRate = .2 + Tool.RandomInt(100) * .002;
                this.makeDamageRate = 8;
            } else if (diff == 2) {
                this.maxHp = 500;
                this.curHp = this.maxHp;
                this.damage = 20;
                this.moveSpeed = 5;
                this.fireRate = .1 + Tool.RandomInt(100) * .002;
                this.makeDamageRate = 3;
            }
        }
        SetAIBalance() {
            let balance = GameLevelMgr.Instance.GetAiBalence();
            let redRate = balance / 100;
            if (redRate <= 0) {
                redRate = .1;
            }
            if (redRate >= .9) {
                redRate = .9;
            }
            let blueRate = 1 - redRate;
            if (this.teamColor == BattleTeamEnum.Red) {
                this.damage += this.aiBalanceAddDamage * redRate;
            } else {
                this.damage += this.aiBalanceAddDamage * blueRate;
            }
        }
    }
    class AIRedTeam extends AIBase {
        constructor() {
            super();
        }
        onStart() {
            this.InitAI(100, Tool.RandomInt(10), 3, .2, 50 + Tool.RandomInt(10) + Tool.RandomInt(10), 8, AITypeEnum.NormalHumanType, BattleTeamEnum.Red);
            this.SetAIDifficulty();
            this.SetAIBalance();
        }
        onUpdate() {
            super.onUpdate();
            this.UpdateFireGunHitTimer();
        }
    }
    class EnemyZombie extends AIBase {
        constructor() {
            super();
            this.isRunZombie = false;
            this.canPlayBeHitAnm = true;
            this.canMove = true;
            this.canDoColHomeLogic = true;
        }
        onAwake() {
            this.GetNeedComp();
            Dispatcher.AddListener(EventType.OnZombieModeFinish, this, this.OnZombieModeFinish);
            Dispatcher.AddListener(EventType.OnGrenadeBoom, this, this.OnGrenadeBoomZombie);
            Dispatcher.AddListener(EventType.OnPlayerRepaireZombieModeHome, this, this.OnPlayerRepaireZombieModeHome);
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
            Dispatcher.RemoveListener(EventType.OnZombieModeFinish, this, this.OnZombieModeFinish);
            Dispatcher.RemoveListener(EventType.OnGrenadeBoom, this, this.OnGrenadeBoomZombie);
            Dispatcher.RemoveListener(EventType.OnPlayerRepaireZombieModeHome, this, this.OnPlayerRepaireZombieModeHome);
        }
        onUpdate() {
            this.MoveToTarget();
            this.UpdateFireGunHitTimer();
            this.CheckDisFromTarget();
        }
        CheckDisFromTarget() {
            if (!this.targetSp3d) {
                return;
            }
            if (Tool.DisV3(this.selfSp3d.transform.position, this.targetSp3d.transform.position) <= 6) {
                if (this.canDoColHomeLogic) {
                    Dispatcher.Event(EventType.OnZombieColHome);
                    Dispatcher.Event(EventType.OnZombieEnemyDie);
                    this.col.enabled = false;
                    Laya.timer.once(500, this, () => {
                        this.selfSp3d.destroy(true);
                    });
                    this.canDoColHomeLogic = false;
                }
            }
        }
        OnPlayerRepaireZombieModeHome() {
            this.BeHit(1e4);
        }
        OnGrenadeBoomZombie(pos) {
            if (!pos) {
                return;
            }
            let dis = Tool.DisV3(this.selfSp3d.transform.position, pos);
            if (dis <= 5) {
                this.BeHit(200);
            }
        }
        InitAIZombie(maxHp, aiTeam, aiType, isRunType) {
            this.selfSp3d = this.owner;
            this.isRunZombie = isRunType;
            this.allNodesMap = Tool.GetAllChildrenMap(this.selfSp3d);
            this.anmt = Tool.GetNodeByMap("AIModelRoot", this.allNodesMap).getComponent(Laya.Animator);
            let playerSkinSp3d = Tool.GetNodeByMap("SA_Char_Survivor_OldMan", this.allNodesMap);
            if (playerSkinSp3d) {
                let randIdx = Tool.RandomInt(3);
                let skinPath = "res/Textures/ZombieSkins/zombieSkin" + randIdx + ".png";
                Laya.Texture2D.load(skinPath, Laya.Handler.create(this, function (tex) {
                    let mat;
                    mat = new Laya.PBRStandardMaterial();
                    mat.albedoTexture = tex;
                    mat.metallic = 0;
                    mat.smoothness = 0;
                    playerSkinSp3d.skinnedMeshRenderer.material = mat;
                }));
            }
            this.maxHp = maxHp;
            this.curHp = this.maxHp;
            this.aiTeam = aiTeam;
            this.aiType = aiType;
            if (this.isRunZombie) {
                this.moveSpeed = .1;
            } else {
                this.moveSpeed = .05;
            }
            if (this.isRunZombie) {
                this.anmt.crossFade(Std.ZombieAnm_RunName, .1);
            } else {
                this.anmt.crossFade(Std.ZombieAnm_WalkName, .1);
            }
            this.InitCapCol();
        }
        InitCapCol() {
            this.col = this.selfSp3d.addComponent(Laya.PhysicsCollider);
            let colShape = new Laya.CapsuleColliderShape(.5, 1.8);
            colShape.localOffset = Tool.V3(0, .8, 0);
            this.col.colliderShape = colShape;
        }
        BeHit(damage, damageSource) {
            if (this.curHp <= 0) {
                return;
            }
            this.curHp -= damage;
            if (this.canPlayBeHitAnm) {
                this.canMove = false;
                this.anmt.crossFade(Std.ZombieAnm_HitName, .1);
                Laya.timer.once(200, this, () => {
                    if (this.curHp > 0) {
                        if (this.isRunZombie) {
                            this.anmt.crossFade(Std.ZombieAnm_RunName, .1);
                        } else {
                            this.anmt.crossFade(Std.ZombieAnm_WalkName, .1);
                        }
                        this.canMove = true;
                        this.canPlayBeHitAnm = true;
                    }
                });
                this.canPlayBeHitAnm = false;
            }
            if (this.curHp <= 0) {
                this.curHp = 0;
                this.col.enabled = false;
                this.anmt.speed = 1;
                this.anmt.play(EnemyAni.Die);
                Dispatcher.Event(EventType.OnZombieEnemyDie);
                Laya.timer.once(2e3, this, () => {
                    this.owner.destroy(true);
                });
            }
        }
        GetNeedComp() {
            let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            if (!sc3d) {
                return;
            }
            this.targetSp3d = sc3d.getChildByName("Home");
        }
        OnZombieModeFinish() {
            this.canMove = false;
        }
        MoveToTarget() {
            if (!this.targetSp3d || !this.canMove || this.curHp <= 0 || GameLevelMgr.Instance.GetIsPlayerInTryUseWeapon() == true || GameLevelMgr.Instance.GetIsPlayerInConfirmPanel() == true || GameLevelMgr.Instance.GetIsInGamePausePanel() == true) {
                return;
            }
            this.anmt.speed = 1.5;
            Tool.LookAtTarget(this.selfSp3d, this.targetSp3d);
            this.selfSp3d.transform.position = Tool.LerpV3(this.selfSp3d.transform.position, this.targetSp3d.transform.position, Tool.DeltaTime() * this.moveSpeed);
            this.selfSp3d.transform.position.y = 28.91;
        }
    }
    class AIBlueTeam extends AIBase {
        constructor() {
            super();
        }
        onStart() {
            this.InitAI(100, Tool.RandomInt(10), 3, .2, 50 + Tool.RandomInt(10) + Tool.RandomInt(10), 8, AITypeEnum.NormalHumanType, BattleTeamEnum.Blue);
            this.SetAIDifficulty();
            this.SetAIBalance();
        }
        onUpdate() {
            super.onUpdate();
            this.UpdateFireGunHitTimer();
        }
    }
    class YYAIBase extends Laya.Script3D {
        constructor() {
            super();
            this.curHp = 0;
            this.maxHp = 0;
            this.moveSpeed = 5;
            this.tempMoveSpeed = 5;
            this.fireGunHitTimer = 0;
            this.isEnemyDie = false;
            this.isMatchOver = false;
            this.canMakeFireGunDamage = true;
            this.canDoFireGunDamageTimer = false;
            this.isNowRunHangUpAnm = false;
            this.canSelfKill = true;
            this.tempSpeednum = 0;
            this.AniTime = 0;
            this.canMove = false;
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnGrenadeBoom, this, this.OnGrenadeBoom);
            Dispatcher.AddListener(EventType.OnPlayerReborn, this, this.GameStart);
            Dispatcher.AddListener(EventType.YY_End, this, this.GameEnd);
        }
        onEnable() {
            this.numsp = Tool.GetChildRecursion(this.owner, "Num");
            this.num1 = this.numsp.meshRenderer.materials[2];
            this.num2 = this.numsp.meshRenderer.materials[3];
            this.num3 = this.numsp.meshRenderer.materials[1];
        }
        GameStart() { }
        GameEnd() {
            this.isMatchOver = true;
            this.canMove = false;
            if (this.curHp > 0) {
                this.anmt.play(EnemyAni.Die);
            }
            this.owner.destroy(true);
        }
        OnGrenadeBoom(pos) {
            if (!pos) {
                return;
            }
            let dis = Tool.DisV3(this.tran.position, pos);
            if (dis <= 5) {
                this.BeHit(200);
            }
        }
        UpdateFireGunHitTimer() {
            this.fireGunHitTimer += Tool.DeltaTime();
            if (this.fireGunHitTimer >= .2) {
                this.canDoFireGunDamageTimer = true;
                if (this.canDoFireGunDamageTimer) {
                    this.canMakeFireGunDamage = true;
                    this.fireGunHitTimer = 0;
                    this.canDoFireGunDamageTimer = false;
                }
            }
        }
        InitAIYY(maxHp, moveSpeed, num) { }
        BeHit(damage, damageSource) {
            if (this.curHp <= 0) {
                return;
            }
            this.curHp -= damage;
            if (this.curHp <= 0) {
                Laya.timer.clearAll(this);
                this.canMove = false;
                this.curHp = 0;
                this.col.enabled = false;
                this.anmt.speed = 1;
                this.anmt.play(EnemyAni.Die);
                this.isEnemyDie = true;
                Laya.timer.once(2e3, this, () => {
                    this.owner.destroy(true);
                });
            }
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
            Dispatcher.RemoveListener(EventType.OnGrenadeBoom, this, this.OnGrenadeBoom);
            Dispatcher.RemoveListener(EventType.OnPlayerReborn, this, this.GameStart);
            Dispatcher.RemoveListener(EventType.YY_End, this, this.GameEnd);
        }
        onTriggerStay(col) {
            if (col.owner.name == Std.Other_FireTrigger) {
                if (this.canMakeFireGunDamage) {
                    Dispatcher.Event(EventType.OnFireGunHitAI, this);
                    this.canMakeFireGunDamage = false;
                }
            }
        }
    }
    class EnemyYouyuMuTouRen extends YYAIBase {
        constructor() {
            super();
            this.isRunZombie = false;
            this.canPlayBeHitAnm = true;
            this.canDoColHomeLogic = true;
            this.GuoGuan = false;
            this.IdleStartTime = 0;
        }
        onAwake() {
            super.onAwake();
            Dispatcher.AddListener(EventType.OnYouYuMuTouRen, this, this.OnYouYuMuTouRen);
            Dispatcher.AddListener(EventType.MuTouRenFire, this, this.MuTouRenFire);
        }
        onDestroy() {
            super.onDestroy();
            Dispatcher.RemoveListener(EventType.OnYouYuMuTouRen, this, this.OnYouYuMuTouRen);
            Dispatcher.RemoveListener(EventType.MuTouRenFire, this, this.MuTouRenFire);
        }
        onEnable() {
            this.AniTime = Math.floor(Math.random() * 700);
            this.numsp = Tool.GetChildRecursion(this.owner, "Num");
            this.num1 = this.numsp.meshRenderer.materials[2];
            this.num2 = this.numsp.meshRenderer.materials[3];
            this.num3 = this.numsp.meshRenderer.materials[1];
        }
        onUpdate() {
            this.UpdateFireGunHitTimer();
            if (!this.canMove || this.GuoGuan) return;
            this.MoveToTarget();
            this.CheckDisFromTarget();
        }
        CheckDisFromTarget() {
            if (!this.targetSp3d) return;
            if (this.tran.position.z >= 47) {
                if (this.canDoColHomeLogic) {
                    this.canMove = false;
                    this.col.enabled = false;
                    this.GuoGuan = true;
                    this.anmt.crossFade(EnemyAni.YYWin, 0);
                    this.anmt.speed = 1;
                    this.canDoColHomeLogic = false;
                }
            }
        }
        InitAIYYMTR(maxHp, num) {
            this.tran = this.owner.transform;
            this.col = this.owner.addComponent(Laya.CharacterController);
            let colShape = new Laya.CapsuleColliderShape(.5, 1.8);
            colShape.localOffset = Tool.V3(0, .8, 0);
            this.col.colliderShape = colShape;
            this.anmt = this.owner.getChildByName("AIModelRoot").getComponent(Laya.Animator);
            let num1 = Math.floor(num / 100);
            this.num1.tilingOffset.z = num1 % 5 * .2;
            this.num1.tilingOffset.w = num1 > 4 ? .5 : 0;
            let num2 = Math.floor(num % 100 / 10);
            this.num2.tilingOffset.z = num2 % 5 * .2;
            this.num2.tilingOffset.w = num2 > 4 ? .5 : 0;
            let num3 = Math.floor(num % 10);
            this.num3.tilingOffset.z = num3 % 5 * .2;
            this.num3.tilingOffset.w = num3 > 4 ? .5 : 0;
            this.maxHp = maxHp;
            this.curHp = this.maxHp;
            this.moveSpeed = 1 + Math.random() * .2;
            this.anmt.crossFade(EnemyAni.YYIdle, .1);
            this.targetSp3d = this.tran.localPosition.clone();
            this.targetSp3d.z += 120;
        }
        OnYouYuMuTouRen(bool) {
            if (this.GuoGuan || this.curHp <= 0) return;
            if (bool) {
                Laya.timer.once(this.AniTime, this, this.JiaRenMove);
            } else {
                if (Math.random() > .15) {
                    this.IdleStartTime = Math.floor(Math.random() * 600);
                    Laya.timer.once(this.IdleStartTime, this, this.JiaRenDance);
                }
            }
        }
        JiaRenMove() {
            this.anmt.crossFade(EnemyAni.YYRun, 0);
            this.anmt.speed = 1;
            this.canMove = true;
        }
        JiaRenDance() {
            this.anmt.crossFade(EnemyAni.YYDance, 0, 0, Math.random());
            Laya.timer.frameOnce(5, this, () => {
                this.anmt.speed = 0;
            });
            this.canMove = false;
        }
        MuTouRenFire() {
            if (this.GuoGuan || this.curHp <= 0) return;
            if (this.curHp > 0 && this.canMove) {
                SoundTool.PlaySfxByName("YouYu_Hit");
                Dispatcher.Event(EventType.MuTouRenFireFinish);
                this.BeHit(1e3);
                this.canMove = false;
            }
        }
        GameStart() {
            let num = Math.floor(Math.random() * 2e3) + 1e3;
            Laya.timer.once(num, this, () => {
                this.anmt.crossFade(EnemyAni.YYRun, 0);
                this.anmt.speed = 1;
                this.canMove = true;
            });
        }
        GameEnd() {
            this.canMove = false;
        }
        MoveToTarget() {
            if (!this.targetSp3d || this.curHp <= 0 || GameLevelMgr.Instance.GetIsPlayerInTryUseWeapon() == true || GameLevelMgr.Instance.GetIsPlayerInConfirmPanel() == true || GameLevelMgr.Instance.GetIsInGamePausePanel() == true) {
                return;
            }
            this.tran.lookAt(this.targetSp3d, Tool.V3(0, 1, 0));
            this.tran.rotate(new Laya.Vector3(0, 180, 0), false, false);
            this.tran.translate(new Laya.Vector3(0, 0, Tool.DeltaTime() * this.moveSpeed * 2));
            this.tran.position.y = 23.63;
        }
    }
    class AIAniEvent extends Laya.Script3D {
        constructor(num = 0) {
            super();
            this.IDnum = 0;
            this.IDnum = num;
        }
        Jumping() {
            Dispatcher.Event(EventType.AIJumping, this.IDnum);
        }
        JumpEnd() {
            Dispatcher.Event(EventType.AIJumpend, this.IDnum);
        }
    }
    class EnemyYYBLQAI extends YYAIBase {
        constructor() {
            super();
            this.isRunZombie = false;
            this.canPlayBeHitAnm = true;
            this.targetStr = "";
            this.queue = 0;
            this.BLRoute = 0;
        }
        onAwake() {
            super.onAwake();
            this.AntNode = this.owner.getChildByName("AIModelRoot");
            Dispatcher.AddListener(EventType.AIJumping, this, this.FuncJumping);
            Dispatcher.AddListener(EventType.AIJumpend, this, this.FuncJumpend);
        }
        FuncStart() {
            this.anmt.crossFade(EnemyAni.YYIdle, 0);
        }
        InitAIYY(maxHp, num, numID) {
            this.tran = this.owner.transform;
            this.col = this.owner.addComponent(Laya.CharacterController);
            let colShape = new Laya.CapsuleColliderShape(.5, 1.8);
            colShape.localOffset = Tool.V3(0, .8, 0);
            this.col.colliderShape = colShape;
            this.anmt = this.owner.getChildByName("AIModelRoot").getComponent(Laya.Animator);
            let num1 = Math.floor(num / 100);
            this.num1.tilingOffset.z = num1 % 5 * .2;
            this.num1.tilingOffset.w = num1 > 4 ? .5 : 0;
            let num2 = Math.floor(num % 100 / 10);
            this.num2.tilingOffset.z = num2 % 5 * .2;
            this.num2.tilingOffset.w = num2 > 4 ? .5 : 0;
            let num3 = Math.floor(num % 10);
            this.num3.tilingOffset.z = num3 % 5 * .2;
            this.num3.tilingOffset.w = num3 > 4 ? .5 : 0;
            this.maxHp = maxHp;
            this.curHp = this.maxHp;
            this.moveSpeed = 1 + Math.random() * .2;
            this.anmt.crossFade(EnemyAni.YYIdle, .1);
            this.queue = numID;
            this.eventStr = "YYBLR" + numID;
            Dispatcher.AddListener(this.eventStr, this, this.CallQueue);
            console.log("代号事件为: " + this.eventStr + "   " + this.queue + "号");
            this.AntNode.addComponentIntance(new AIAniEvent(numID));
            this.AniTime = Math.floor(Math.random() * 1e3);
            Laya.timer.once(this.AniTime, this, this.FuncStart);
        }
        onUpdate() {
            this.UpdateFireGunHitTimer();
            if (!this.canMove) return;
            this.BLRMove();
            this.CheckDisFromTarget();
        }
        CallQueue() {
            let scene3D = SceneMgr.Instance.GetCurOpenSc3d();
            this.GameEndPos_Sprite3D = scene3D.getChildByName("GameEnd").getChildByName("pos" + this.queue);
            this.GameRoutePosArr_Node = scene3D.getChildByName("BlqDian");
            this.AllotRoute();
        }
        AllotRoute() {
            if (this.targetStr == "Zero" || this.curHp <= 0) return;
            let speed = 0;
            switch (this.targetStr) {
                case "":
                    this.canMove = true;
                    this.targetStr = "Start";
                    this.anmt.crossFade(EnemyAni.YYWalk, 0);
                    this.targetSp3d = this.GameRoutePosArr_Node.getChildByName(this.targetStr).transform.position.clone();
                    this.tempSpeednum = .0015;
                    break;
  
                case "End":
                    this.canMove = true;
                    this.targetStr = "Zero";
                    this.anmt.crossFade(EnemyAni.YYWalk, .1);
                    this.targetSp3d = this.GameEndPos_Sprite3D.transform.position;
                    this.tempSpeednum = .0015;
                    break;
  
                case "Start":
                    let route = Math.random() >= .5 ? 1 : 0;
                    this.BLRoute += 1;
                    this.targetStr = "BL" + route;
                    this.anmt.crossFade(EnemyAni.YYJump, .1);
                    this.targetSp3d = this.GameRoutePosArr_Node.getChildByName(this.targetStr).transform.position.clone();
                    speed = Tool.DisV3(this.tran.position, this.targetSp3d);
                    this.tempSpeednum = speed * .0017;
                    break;
  
                case "BL18":
                    this.targetStr = "End";
                    this.anmt.crossFade(EnemyAni.YYJump, .1);
                    this.targetSp3d = this.GameRoutePosArr_Node.getChildByName(this.targetStr).transform.position.clone();
                    speed = Tool.DisV3(this.tran.position, this.targetSp3d);
                    this.tempSpeednum = speed * .0017;
                    break;
  
                case "BL19":
                    this.targetStr = "End";
                    this.anmt.crossFade(EnemyAni.YYJump, .1);
                    this.targetSp3d = this.GameRoutePosArr_Node.getChildByName(this.targetStr).transform.position.clone();
                    speed = Tool.DisV3(this.tran.position, this.targetSp3d);
                    this.tempSpeednum = speed * .0017;
                    break;
  
                default:
                    let routes = this.BLRoute * 2 + (Math.random() >= .5 ? 1 : 0);
                    this.BLRoute += 1;
                    this.targetStr = "BL" + routes;
                    this.anmt.crossFade(EnemyAni.YYJump, .1);
                    this.targetSp3d = this.GameRoutePosArr_Node.getChildByName(this.targetStr).transform.position.clone();
                    speed = Tool.DisV3(this.tran.position, this.targetSp3d);
                    this.tempSpeednum = speed * .0017;
                    break;
            }
            this.tran.lookAt(this.targetSp3d, Tool.V3(0, 1, 0));
            this.tran.rotate(new Laya.Vector3(0, 180, 0), false, false);
        }
        BLRMove() {
            if (!this.targetSp3d || this.curHp <= 0 || GameLevelMgr.Instance.GetIsPlayerInTryUseWeapon() == true || GameLevelMgr.Instance.GetIsPlayerInConfirmPanel() == true || GameLevelMgr.Instance.GetIsInGamePausePanel() == true) {
                return;
            }
            this.tran.translate(new Laya.Vector3(0, 0, this.tempSpeednum * Laya.timer.delta));
        }
        CheckDisFromTarget() {
            if (!this.targetSp3d) {
                return;
            }
            if (Tool.DisV3(this.tran.position, this.targetSp3d) <= .1) {
                this.tran.position = this.targetSp3d.clone();
                switch (this.targetStr) {
                    case "End":
                        this.AllotRoute();
                        break;
  
                    case "Zero":
                        this.canMove = false;
                        this.col.enabled = false;
                        this.anmt.crossFade(EnemyAni.YYWin, 0);
                        this.anmt.speed = 1;
                        break;
  
                    default:
                        this.canMove = false;
                        this.AllotRoute();
                        break;
                }
            }
        }
        FuncJumping(IDnum) {
            if (this.queue != IDnum) return;
            this.canMove = true;
            this.col.enabled = false;
        }
        FuncJumpend(IDnum) {
            if (this.queue != IDnum) return;
            this.col.enabled = true;
        }
        onTriggerEnter(other) {
            console.log(other.owner.name);
            if (other.owner.name == "GameOver") {
                this.canMove = false;
                this.anmt.crossFade(EnemyAni.YYFlyD, .1);
            } else if (other.owner.name == "Floor") {
                this.anmt.crossFade(EnemyAni.YYFlydie, .18);
            }
        }
        onDestroy() {
            super.onDestroy();
            Dispatcher.RemoveListener(EventType.AIJumping, this, this.FuncJumping);
            Dispatcher.RemoveListener(EventType.AIJumpend, this, this.FuncJumpend);
            Dispatcher.RemoveListener(this.eventStr, this, this.CallQueue);
        }
    }
    class AISpawnerMgr extends Laya.Script {
        constructor() {
            super();
            this.redTeamRoleArray = [];
            this.blueTeamRoleArray = [];
            AISpawnerMgr.Instance = this;
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnAIDieRemoveArrayItem, this, this.OnAIDieRemoveArrayItem);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnAIDieRemoveArrayItem, this, this.OnAIDieRemoveArrayItem);
        }
        OnAIDieRemoveArrayItem(aiSp3d) {
            if (!aiSp3d) {
                return;
            }
            if (aiSp3d.getComponent(AIBase).teamColor == BattleTeamEnum.Red) {
                Tool.DelItemInArray(aiSp3d, this.redTeamRoleArray);
            }
            if (aiSp3d.getComponent(AIBase).teamColor == BattleTeamEnum.Blue) {
                Tool.DelItemInArray(aiSp3d, this.blueTeamRoleArray);
            }
        }
        InitSkin(playerSp3d, team) {
            if (!playerSp3d) return;
            let playerSkinSp3d = playerSp3d.getChildByName("AIModelRoot").getChildByName("SA_Char_Survivor_OldMan");
            if (!playerSkinSp3d) return;
            let skinPath = "res/Textures/AISkins/blueTeamSkin.png";
            if (team == BattleTeamEnum.Blue) {
                skinPath = "res/Textures/AISkins/blueTeamSkin.png";
            } else if (team == BattleTeamEnum.Red) {
                skinPath = "res/Textures/AISkins/redTeamSkin.png";
            }
            Laya.Texture2D.load(skinPath, Laya.Handler.create(this, function (tex) {
                let mat;
                mat = new Laya.PBRStandardMaterial();
                mat.albedoTexture = tex;
                mat.metallic = 0;
                mat.smoothness = 0;
                playerSkinSp3d.skinnedMeshRenderer.material = mat;
            }));
        }
        SpawnRedTeamAI() {
            let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            if (!sc3d) {
                return;
            }
            let spawnPosRoot = sc3d.getChildByName(Std.GameSc3dItem_RedTeamSpawnPosRoot);
            if (!spawnPosRoot) {
                return;
            }
            ResMgr.Instance.LoadSp3d(Std.Prefab_AI, this, sp3d => {
                let insSp3d = Laya.Sprite3D.instantiate(sp3d, sc3d);
                insSp3d.name = Std.AITeamName_RedTeam;
                this.InitSkin(insSp3d, BattleTeamEnum.Red);
                let src = insSp3d.addComponent(AIRedTeam);
                src.counterTeamSp3dArray = this.blueTeamRoleArray;
                let randPosSp3d = spawnPosRoot.getChildAt(Tool.RandomInt(spawnPosRoot.numChildren));
                insSp3d.transform.position = randPosSp3d.transform.position;
                this.redTeamRoleArray.push(insSp3d);
                src.SetRandomTarget();
            });
        }
        SpawnBlueTeamAI() {
            let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            if (!sc3d) {
                return;
            }
            let spawnPosRoot = sc3d.getChildByName(Std.GameSc3dItem_BlueTeamSpawnPosRoot);
            if (!spawnPosRoot) {
                return;
            }
            ResMgr.Instance.LoadSp3d(Std.Prefab_AI, this, sp3d => {
                let insSp3d = Laya.Sprite3D.instantiate(sp3d, sc3d);
                insSp3d.name = Std.AITeamName_BlueTeam;
                this.InitSkin(insSp3d, BattleTeamEnum.Blue);
                let src = insSp3d.addComponent(AIBlueTeam);
                src.counterTeamSp3dArray = this.redTeamRoleArray;
                let randPosSp3d = spawnPosRoot.getChildAt(Tool.RandomInt(spawnPosRoot.numChildren));
                insSp3d.transform.position = randPosSp3d.transform.position;
                this.blueTeamRoleArray.push(insSp3d);
                src.SetRandomTarget();
            });
        }
        ClearAllArray() {
            this.redTeamRoleArray = [];
            this.blueTeamRoleArray = [];
        }
        GetRedTeamRoleArray() {
            return this.redTeamRoleArray;
        }
        GetBlueTeamRoleArray() {
            return this.blueTeamRoleArray;
        }
        LogEnemyArray() {
            if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Blue) {
                console.log(this.redTeamRoleArray);
            } else {
                console.log(this.blueTeamRoleArray);
            }
        }
        LogTeammateArray() {
            if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Blue) {
                console.log(this.blueTeamRoleArray);
            } else {
                console.log(this.redTeamRoleArray);
            }
        }
        AddPlayerToPlayerTeam(playerSp3d) {
            if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Blue) {
                this.blueTeamRoleArray.push(playerSp3d);
            } else {
                this.redTeamRoleArray.push(playerSp3d);
            }
        }
        RemovePlayerFromTeamArray() {
            let targetTeamArray;
            if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Blue) {
                targetTeamArray = this.blueTeamRoleArray;
            } else {
                targetTeamArray = this.redTeamRoleArray;
            }
            let playerSp3d = null;
            for (let i = 0; i < targetTeamArray.length; i++) {
                if (targetTeamArray[i].name == Std.Prefab_PlayerName) {
                    playerSp3d = targetTeamArray[i];
                }
            }
            if (playerSp3d) {
                Tool.DelItemInArray(playerSp3d, targetTeamArray);
            }
        }
        SpawnZombie(isRunType, isStartLeftPos) {
            let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            if (!sc3d) {
                return;
            }
            let spawnPosRoot = sc3d.getChildByName("ZombieSpawnPosRoot");
            if (!spawnPosRoot) {
                return;
            }
            ResMgr.Instance.LoadSp3d(Std.Prefab_AI, this, sp3d => {
                let insSp3d = Laya.Sprite3D.instantiate(sp3d, sc3d);
                insSp3d.name = "Zombie";
                let src = insSp3d.addComponent(EnemyZombie);
                src.InitAIZombie(300, AITeamEnum.EnemyTeam, AITypeEnum.ZombieType, isRunType);
                if (isStartLeftPos) {
                    let sourcePosV3 = spawnPosRoot.getChildAt(0).transform.position;
                    let randV2 = Tool.RandInsideUnitCircle();
                    let v3 = Tool.AddV3(sourcePosV3, Tool.V3(randV2.x * 5, 0, randV2.y * 5));
                    insSp3d.transform.position = v3;
                } else {
                    let sourcePosV3 = spawnPosRoot.getChildAt(1).transform.position;
                    let randV2 = Tool.RandInsideUnitCircle();
                    let v3 = Tool.AddV3(sourcePosV3, Tool.V3(randV2.x * 5, 0, randV2.y * 5));
                    insSp3d.transform.position = v3;
                }
            });
        }
        SpawnYouYu() {
            let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            if (!sc3d) {
                return;
            }
            let spawnPosRoot = sc3d.getChildByName(Std.GameSc3dItem_YouyuModePos);
            if (!spawnPosRoot) return;
            let num = spawnPosRoot.numChildren >= 30 ? 30 : spawnPosRoot.numChildren;
            let tempArray = [];
            for (let index = 1; index <= num; index++) {
                tempArray.push(index);
            }
            tempArray.sort(function () {
                return .5 - Math.random();
            });
            this.numBu = new Array(30);
            this.numBu[0] = Math.floor(Math.random() * 43);
            for (let i = 1; i < 30; i++) {
                this.numBu[i] = Math.floor(Math.random() * 33) + i * 33 + 10;
            }
            for (let index = 0; index < num; index++) {
                ResMgr.Instance.LoadSp3d(Std.Prefab_AIYY, this, sp3d => {
                    let insSp3d = Laya.Sprite3D.instantiate(sp3d, sc3d);
                    insSp3d.name = "YouYu";
                    let src = insSp3d.addComponent(EnemyYouyuMuTouRen);
                    let randPosSp3d = spawnPosRoot.getChildAt(tempArray[index]);
                    let randV2 = Tool.RandInsideUnitCircle();
                    let sourcePosV3 = randPosSp3d.transform.position;
                    let v3 = Tool.AddV3(sourcePosV3, Tool.V3(randV2.x * .5, 0, randV2.y * .5));
                    insSp3d.transform.position = v3;
                    src.InitAIYYMTR(300, this.numBu[index]);
                });
            }
        }
        SpawnYYBLQ() {
            let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            if (!sc3d) {
                return;
            }
            let spawnPosRoot = sc3d.getChildByName(Std.GameSc3dItem_YouyuModePos);
            if (!spawnPosRoot) return;
            this.numBu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            for (let index = 0; index < 10; index++) {
                if (GameLevelMgr.Instance.BLQiaoRandomPos == index) continue;
                ResMgr.Instance.LoadSp3d(Std.Prefab_AIYY, this, sp3d => {
                    let insSp3d = Laya.Sprite3D.instantiate(sp3d, sc3d);
                    insSp3d.name = "YY";
                    let src = insSp3d.addComponent(EnemyYYBLQAI);
                    let randPosSp3d = spawnPosRoot.getChildByName("pos" + index);
                    insSp3d.transform.position = randPosSp3d.transform.position.clone();
                    src.InitAIYY(300, this.numBu[index], index);
                });
            }
        }
    }
    var DailyMissionTypeEnum;
    (function (DailyMissionTypeEnum) {
        DailyMissionTypeEnum[DailyMissionTypeEnum["TotalKill100Enemy"] = 0] = "TotalKill100Enemy";
        DailyMissionTypeEnum[DailyMissionTypeEnum["Kill20EnemyInOne"] = 1] = "Kill20EnemyInOne";
        DailyMissionTypeEnum[DailyMissionTypeEnum["Play2BattleMatch"] = 2] = "Play2BattleMatch";
        DailyMissionTypeEnum[DailyMissionTypeEnum["Play2ZombieMatch"] = 3] = "Play2ZombieMatch";
        DailyMissionTypeEnum[DailyMissionTypeEnum["Win5BattleMatch"] = 4] = "Win5BattleMatch";
        DailyMissionTypeEnum[DailyMissionTypeEnum["TotalKill100Zombie"] = 5] = "TotalKill100Zombie";
        DailyMissionTypeEnum[DailyMissionTypeEnum["UpdateOnceEquip"] = 6] = "UpdateOnceEquip";
        DailyMissionTypeEnum[DailyMissionTypeEnum["Take10HeadShot"] = 7] = "Take10HeadShot";
    })(DailyMissionTypeEnum || (DailyMissionTypeEnum = {}));
    class DailyMissionMgr extends Laya.Script {
        constructor() {
            super();
            this.randFiveMissionArray = [];
            this.allMissionArray = [DailyMissionTypeEnum.Kill20EnemyInOne, DailyMissionTypeEnum.Play2BattleMatch, DailyMissionTypeEnum.Play2ZombieMatch, DailyMissionTypeEnum.Take10HeadShot, DailyMissionTypeEnum.TotalKill100Enemy, DailyMissionTypeEnum.TotalKill100Zombie, DailyMissionTypeEnum.UpdateOnceEquip, DailyMissionTypeEnum.Win5BattleMatch];
            this.TotalKill100Enemy_Key = "TotalKill100Enemy_Key";
            this.Kill20EnemyInOne_Key = "Kill20EnemyInOne_Key";
            this.Play2BattleMatch_Key = "Play2BattleMatch_Key";
            this.Play2ZombieMatch_Key = "Play2ZombieMatch_Key";
            this.Win5BattleMatch_Key = "Win5BattleMatch_Key";
            this.TotalKill100Zombie_Key = "TotalKill100Zombie_Key";
            this.UpdateOnceEquip_Key = "UpdateOnceEquip_Key";
            this.Take10HeadShot_Key = "Take10HeadShot_Key";
            this.HsaClaim_TotalKill100Enemy_Key = "HsaClaim_TotalKill100Enemy_Key";
            this.HsaClaim_Kill20EnemyInOne_Key = "HsaClaim_Kill20EnemyInOne_Key";
            this.HsaClaim_Play2BattleMatch_Key = "HsaClaim_Play2BattleMatch_Key";
            this.HsaClaim_Play2ZombieMatch_Key = "HsaClaim_Play2ZombieMatch_Key";
            this.HsaClaim_Win5BattleMatch_Key = "HsaClaim_Win5BattleMatch_Key";
            this.HsaClaim_TotalKill100Zombie_Key = "HsaClaim_TotalKill100Zombie_Key";
            this.HsaClaim_UpdateOnceEquip_Key = "HsaClaim_UpdateOnceEquip_Key";
            this.HsaClaim_Take10HeadShot_Key = "HsaClaim_Take10HeadShot_Key";
            this.dailyMisssion1_Key = "dailyMisssion1_Key";
            this.dailyMisssion2_Key = "dailyMisssion2_Key";
            this.dailyMisssion3_Key = "dailyMisssion3_Key";
            this.dailyMisssion4_Key = "dailyMisssion4_Key";
            this.dailyMisssion5_Key = "dailyMisssion5_Key";
            this.missionProgressKeyArray = [this.TotalKill100Enemy_Key, this.Kill20EnemyInOne_Key, this.Play2BattleMatch_Key, this.Play2ZombieMatch_Key, this.Win5BattleMatch_Key, this.TotalKill100Zombie_Key, this.UpdateOnceEquip_Key, this.Take10HeadShot_Key];
            this.missionClaimKeyArray = [this.HsaClaim_TotalKill100Enemy_Key, this.HsaClaim_Kill20EnemyInOne_Key, this.HsaClaim_Play2BattleMatch_Key, this.HsaClaim_Play2ZombieMatch_Key, this.HsaClaim_Win5BattleMatch_Key, this.HsaClaim_TotalKill100Zombie_Key, this.HsaClaim_UpdateOnceEquip_Key, this.HsaClaim_Take10HeadShot_Key];
            this.missionSaveKeyArray = [this.dailyMisssion1_Key, this.dailyMisssion2_Key, this.dailyMisssion3_Key, this.dailyMisssion4_Key, this.dailyMisssion5_Key];
            DailyMissionMgr.Instance = this;
        }
        onAwake() {
            if (this.IsNotSetRand5Mission() == false) {
                this.SetRand5MissionToArray();
                this.Save5RandMission();
            }
            Laya.timer.loop(1e3, this, this.CheckResetMssion);
        }
        onDestroy() {
            Laya.timer.clear(this, this.CheckResetMssion);
        }
        IsMissionInDailyMisions(mission) {
            let dailyMissionArray = this.GetLocalSave5Mission();
            if (Tool.HasItemInArray(mission, dailyMissionArray)) {
                return true;
            }
            return false;
        }
        IsAnyMissionAwardCanButNotClaim() {
            if (this.CheackFinish_Win5BattleMatch() && !this.CheckHasClaim_Win5BattleMatch() && this.IsMissionInDailyMisions(DailyMissionTypeEnum.Win5BattleMatch)) {
                return true;
            }
            if (this.CheackFinish_Kill20EnemyInOne() && !this.CheckHasClaim_Kill20EnemyInOne() && this.IsMissionInDailyMisions(DailyMissionTypeEnum.Kill20EnemyInOne)) {
                return true;
            }
            if (this.CheackFinish_Play2BattleMatch() && !this.CheckHasClaim_Play2BattleMatch() && this.IsMissionInDailyMisions(DailyMissionTypeEnum.Play2BattleMatch)) {
                return true;
            }
            if (this.CheackFinish_Play2ZombieMatch() && !this.CheckHasClaim_Play2ZombieMatch() && this.IsMissionInDailyMisions(DailyMissionTypeEnum.Play2ZombieMatch)) {
                return true;
            }
            if (this.CheackFinish_Take10HeadShot() && !this.CheckHasClaim_Take10HeadShot() && this.IsMissionInDailyMisions(DailyMissionTypeEnum.Take10HeadShot)) {
                return true;
            }
            if (this.CheackFinish_TotalKill100Enemy() && !this.CheckHasClaim_TotalKill100Enemy() && this.IsMissionInDailyMisions(DailyMissionTypeEnum.TotalKill100Enemy)) {
                return true;
            }
            if (this.CheackFinish_TotalKill100Zombie() && !this.CheckHasClaim_TotalKill100Zombie() && this.IsMissionInDailyMisions(DailyMissionTypeEnum.TotalKill100Zombie)) {
                return true;
            }
            if (this.CheackFinish_UpdateOnceEquip() && !this.CheckHasClaim_UpdateOnceEquip() && this.IsMissionInDailyMisions(DailyMissionTypeEnum.UpdateOnceEquip)) {
                return true;
            }
            return false;
        }
        IsNotSetRand5Mission() {
            let randArray = this.GetLocalSave5Mission();
            for (let i = 0; i < randArray.length; i++) {
                if (randArray[i] != 0) {
                    return true;
                }
            }
            return false;
        }
        CheckResetMssion() {
            if (DataTool.GetInt(Std.LastTimeResetDailyMissionKey) == 0) {
                this.ResetMission();
            } else {
                if (GameTimeMgr.Instance.IsSameDay(DataTool.GetInt(Std.LastTimeResetDailyMissionKey), GameTimeMgr.Instance.GetNowDateTime()) == false) {
                    this.ResetMission();
                    Dispatcher.Event(EventType.OnResetMission);
                }
            }
        }
        ResetMission() {
            this.randFiveMissionArray = [];
            for (let i = 0; i < this.missionProgressKeyArray.length; i++) {
                DataTool.SetKv(this.missionProgressKeyArray[i], 0);
            }
            for (let i = 0; i < this.missionClaimKeyArray.length; i++) {
                DataTool.SetKv(this.missionClaimKeyArray[i], 0);
            }
            for (let i = 0; i < this.missionSaveKeyArray.length; i++) {
                DataTool.SetKv(this.missionSaveKeyArray[i], 0);
            }
            this.SetRand5MissionToArray();
            this.Save5RandMission();
            DataTool.SetKv(Std.ClaimDailyAward1AgianKey, 0);
            DataTool.SetKv(Std.ClaimDailyAward2AgianKey, 0);
            DataTool.SetKv(Std.ClaimDailyAward3AgianKey, 0);
            DataTool.SetKv(Std.ClaimDailyAward4AgianKey, 0);
            DataTool.SetKv(Std.ClaimDailyAward5AgianKey, 0);
            DataTool.SetKv(Std.HasClaimFinishAllMissionAwardKey, 0);
            DataTool.SetKv(Std.HasClaimAgainFinishAllMissionAwardKey, 0);
            DataTool.SetKv(Std.LastTimeResetDailyMissionKey, GameTimeMgr.Instance.GetNowDateTime());
        }
        On_TotalKill100Enemy() {
            DataTool.ModifyInt(this.TotalKill100Enemy_Key, 1);
        }
        CheackFinish_TotalKill100Enemy() {
            if (DataTool.GetInt(this.TotalKill100Enemy_Key) >= 100) {
                return true;
            }
            return false;
        }
        CheckHasClaim_TotalKill100Enemy() {
            return DataTool.GetInt(this.HsaClaim_TotalKill100Enemy_Key) == 1;
        }
        OnClaim_TotalKill100Enemy() {
            return DataTool.SetKv(this.HsaClaim_TotalKill100Enemy_Key, 1);
        }
        On_Kill20EnemyInOne() {
            DataTool.SetKv(this.Kill20EnemyInOne_Key, 1);
        }
        CheackFinish_Kill20EnemyInOne() {
            if (DataTool.GetInt(this.Kill20EnemyInOne_Key) == 1) {
                return true;
            }
            return false;
        }
        CheckHasClaim_Kill20EnemyInOne() {
            return DataTool.GetInt(this.HsaClaim_Kill20EnemyInOne_Key) == 1;
        }
        OnClaim_Kill20EnemyInOne() {
            return DataTool.SetKv(this.HsaClaim_Kill20EnemyInOne_Key, 1);
        }
        On_Play2BattleMatch() {
            DataTool.ModifyInt(this.Play2BattleMatch_Key, 1);
        }
        CheackFinish_Play2BattleMatch() {
            if (DataTool.GetInt(this.Play2BattleMatch_Key) >= 2) {
                return true;
            }
            return false;
        }
        CheckHasClaim_Play2BattleMatch() {
            return DataTool.GetInt(this.HsaClaim_Play2BattleMatch_Key) == 1;
        }
        OnClaim_Play2BattleMatch() {
            return DataTool.SetKv(this.HsaClaim_Play2BattleMatch_Key, 1);
        }
        On_Play2ZombieMatch() {
            DataTool.ModifyInt(this.Play2ZombieMatch_Key, 1);
        }
        CheackFinish_Play2ZombieMatch() {
            if (DataTool.GetInt(this.Play2ZombieMatch_Key) >= 2) {
                return true;
            }
            return false;
        }
        CheckHasClaim_Play2ZombieMatch() {
            return DataTool.GetInt(this.HsaClaim_Play2ZombieMatch_Key) == 1;
        }
        OnClaim_Play2ZombieMatch() {
            return DataTool.SetKv(this.HsaClaim_Play2ZombieMatch_Key, 1);
        }
        On_Win5BattleMatch() {
            DataTool.ModifyInt(this.Win5BattleMatch_Key, 1);
        }
        CheackFinish_Win5BattleMatch() {
            if (DataTool.GetInt(this.Win5BattleMatch_Key) >= 5) {
                return true;
            }
            return false;
        }
        CheckHasClaim_Win5BattleMatch() {
            return DataTool.GetInt(this.HsaClaim_Win5BattleMatch_Key) == 1;
        }
        OnClaim_Win5BattleMatch() {
            return DataTool.SetKv(this.HsaClaim_Win5BattleMatch_Key, 1);
        }
        On_TotalKill100Zombie() {
            DataTool.ModifyInt(this.TotalKill100Zombie_Key, 1);
        }
        CheackFinish_TotalKill100Zombie() {
            if (DataTool.GetInt(this.TotalKill100Zombie_Key) >= 100) {
                return true;
            }
            return false;
        }
        CheckHasClaim_TotalKill100Zombie() {
            return DataTool.GetInt(this.HsaClaim_TotalKill100Zombie_Key) == 1;
        }
        OnClaim_TotalKill100Zombie() {
            return DataTool.SetKv(this.HsaClaim_TotalKill100Zombie_Key, 1);
        }
        On_UpdateOnceEquip() {
            DataTool.SetKv(this.UpdateOnceEquip_Key, 1);
        }
        CheackFinish_UpdateOnceEquip() {
            if (DataTool.GetInt(this.UpdateOnceEquip_Key) == 1) {
                return true;
            }
            return false;
        }
        CheckHasClaim_UpdateOnceEquip() {
            return DataTool.GetInt(this.HsaClaim_UpdateOnceEquip_Key) == 1;
        }
        OnClaim_UpdateOnceEquip() {
            return DataTool.SetKv(this.HsaClaim_UpdateOnceEquip_Key, 1);
        }
        On_Take10HeadShot() {
            DataTool.ModifyInt(this.Take10HeadShot_Key, 1);
        }
        CheackFinish_Take10HeadShot() {
            if (DataTool.GetInt(this.Take10HeadShot_Key) >= 10) {
                return true;
            }
            return false;
        }
        CheckHasClaim_Take10HeadShot() {
            return DataTool.GetInt(this.HsaClaim_Take10HeadShot_Key) == 1;
        }
        OnClaim_Take10HeadShot() {
            return DataTool.SetKv(this.HsaClaim_Take10HeadShot_Key, 1);
        }
        SetRand5MissionToArray() {
            if (this.randFiveMissionArray.length == 5) {
                return;
            }
            let randIdx = Tool.RandomInt(this.allMissionArray.length);
            let randMission = this.allMissionArray[randIdx];
            if (!Tool.HasItemInArray(randMission, this.randFiveMissionArray)) {
                this.randFiveMissionArray.push(randMission);
            }
            this.SetRand5MissionToArray();
        }
        Save5RandMission() {
            for (let i = 0; i < this.missionSaveKeyArray.length; i++) {
                DataTool.SetKv(this.missionSaveKeyArray[i], this.randFiveMissionArray[i]);
            }
        }
        GetLocalSave5Mission() {
            let randArray = [];
            for (let i = 0; i < this.missionSaveKeyArray.length; i++) {
                randArray.push(DataTool.GetInt(this.missionSaveKeyArray[i]));
            }
            return randArray;
        }
    }
    class MaterialMgr extends Laya.Script {
        constructor() {
            super();
            this.blueArmPath = "res/Textures/PlayerArmSkins/armblue.png";
            this.redArmPath = "res/Textures/PlayerArmSkins/armred.png";
            this.youYuArmPath = "res/Textures/PlayerArmSkins/armYouYu.png";
            MaterialMgr.Instance = this;
        }
        GetPlayerArnBlueMat() {
            return this.playerArnBlueMat;
        }
        SetPlayerArnBlueMat() {
            Laya.Texture2D.load(this.blueArmPath, Laya.Handler.create(this, function (tex) {
                let mat;
                mat = new Laya.PBRStandardMaterial();
                mat.albedoTexture = tex;
                mat.metallic = 0;
                mat.smoothness = 0;
                this.playerArnBlueMat = mat;
            }));
        }
        GetPlayerArnRedMat() {
            return this.playerArnRedMat;
        }
        SetPlayerArnRedMat() {
            Laya.Texture2D.load(this.redArmPath, Laya.Handler.create(this, function (tex) {
                let mat;
                mat = new Laya.PBRStandardMaterial();
                mat.albedoTexture = tex;
                mat.metallic = 0;
                mat.smoothness = 0;
                this.playerArnRedMat = mat;
            }));
        }
        GetPlayerArmYouYuMat() {
            return this.playerArmYouYu;
        }
        SetPlayerArmYouYuMat() {
            Laya.Texture2D.load(this.youYuArmPath, Laya.Handler.create(this, function (tex) {
                let mat;
                mat = new Laya.PBRStandardMaterial();
                mat.albedoTexture = tex;
                mat.metallic = 0;
                mat.smoothness = 0;
                this.playerArmYouYu = mat;
            }));
        }
    }
    class PlayerInGameDataMgr extends Laya.Script {
        constructor() {
            super();
            this.playerCurHp = 100;
            this.playerMaxHp = 100;
            this.playerCurShield = 0;
            this.playerMaxShield = 100;
            PlayerInGameDataMgr.Instance = this;
        }
        GetPlayerCurHp() {
            return this.playerCurHp;
        }
        SetPlayerCurHp(playerCurHp) {
            this.playerCurHp = playerCurHp;
        }
        GetPlayerMaxHp() {
            return this.playerMaxHp;
        }
        SetPlayerMaxHp(maxHp) {
            this.playerMaxHp = maxHp;
        }
        GetPlayerCurShield() {
            return this.playerCurShield;
        }
        SetPlayerCurShield(playerCurShield) {
            this.playerCurShield = playerCurShield;
        }
        GetPlayerMaxShield() {
            return this.playerMaxShield;
        }
        SetPlayerMaxShield(playerMaxShield) {
            this.playerMaxShield = playerMaxShield;
        }
    }
    class VfxTool {
        static BloomEfx(camera, caller, dirtyPicPath = "res/Textures/LensDirt.png") {
            let postProcess = new Laya.PostProcess();
            let bloom = new Laya.BloomEffect();
            postProcess.addEffect(bloom);
            camera.postProcess = postProcess;
            bloom.intensity = 3;
            bloom.threshold = .9;
            bloom.softKnee = .5;
            bloom.clamp = 65472;
            bloom.diffusion = 5;
            bloom.anamorphicRatio = 0;
            bloom.color = new Laya.Color(231 / 255, 143 / 255, 10 / 255, 1);
            bloom.fastMode = true;
            camera.enableHDR = false;
            Laya.Texture2D.load(dirtyPicPath, Laya.Handler.create(caller, function (tex) {
                bloom.dirtTexture = tex;
                bloom.dirtIntensity = 2;
            }));
        }
    }
    class BulletMove extends Laya.Script {
        constructor() {
            super();
            this.btSpeed = 200;
            this.speedV3 = new Laya.Vector3();
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
        }
        onAwake() {
            this.bullet = this.owner;
            Laya.timer.once(1e3, this, () => {
                this.owner.destroy(true);
            });
        }
        onUpdate() {
            this.bullet.transform.translate(Tool.MulV3(this.speedV3, this.btSpeed * Tool.DeltaTime()), false);
        }
        setShootDirection(directionV3) {
            let randXY = Tool.RandInsideUnitCircle();
            let percent = .2;
            directionV3 = Tool.AddV3(directionV3, Tool.V3(randXY.x * percent, randXY.y * percent, 0));
            Laya.Vector3.normalize(directionV3, this.speedV3);
        }
    }
    var WeaponTypeEnum;
    (function (WeaponTypeEnum) {
        WeaponTypeEnum[WeaponTypeEnum["None"] = 0] = "None";
        WeaponTypeEnum[WeaponTypeEnum["Pistol"] = 1] = "Pistol";
        WeaponTypeEnum[WeaponTypeEnum["Smg"] = 2] = "Smg";
        WeaponTypeEnum[WeaponTypeEnum["Rifle"] = 3] = "Rifle";
        WeaponTypeEnum[WeaponTypeEnum["Sniper"] = 4] = "Sniper";
        WeaponTypeEnum[WeaponTypeEnum["Special"] = 5] = "Special";
        WeaponTypeEnum[WeaponTypeEnum["Grenade"] = 6] = "Grenade";
        WeaponTypeEnum[WeaponTypeEnum["Surport"] = 7] = "Surport";
        WeaponTypeEnum[WeaponTypeEnum["ShotGun"] = 8] = "ShotGun";
    })(WeaponTypeEnum || (WeaponTypeEnum = {}));
    var WeaponFireModeEnum;
    (function (WeaponFireModeEnum) {
        WeaponFireModeEnum[WeaponFireModeEnum["SingleMode"] = 0] = "SingleMode";
        WeaponFireModeEnum[WeaponFireModeEnum["AutoMode"] = 1] = "AutoMode";
    })(WeaponFireModeEnum || (WeaponFireModeEnum = {}));
    class WeaponBase extends Laya.Script {
        constructor() {
            super();
            this.weaponName = "none";
            this.weaponFireSoundName = "";
            this.lastFireTime = 0;
            this.damage = 10;
            this.fireRate = .1;
            this.curMag = 30;
            this.maxMag = 30;
            this.curTotalBullets = 120;
            this.maxTotalBullets = 120;
            this.recoilVer = 0;
            this.recoilHor = 0;
            this.camShakeVar = 0;
            this.nowWeaponIndex = 0;
            this.isReloading = false;
            this.hasInitWeapon = false;
            this.outHitInfo = new Laya.HitResult();
            this.weaponTypeEnum = WeaponTypeEnum.None;
            this.weaponFireModeEnum = WeaponFireModeEnum.AutoMode;
            this.aimPos = new Laya.Vector3();
            this.reloadFinishCb = (() => { });
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnWeaponSingleFire, this, this.FireLogic);
            Dispatcher.AddListener(EventType.OnPlayerInteraptReload, this, this.OnPlayerInteraptReload);
            Dispatcher.AddListener(EventType.OnFireGunHitAI, this, this.FireGunHitAI);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnWeaponSingleFire, this, this.FireLogic);
            Dispatcher.RemoveListener(EventType.OnPlayerInteraptReload, this, this.OnPlayerInteraptReload);
            Dispatcher.RemoveListener(EventType.OnFireGunHitAI, this, this.FireGunHitAI);
            InputMgr.Instance.SetIsAim(false);
            Tool.ClearTimerAndTween(this);
        }
        onUpdate() {
            if (!InputMgr.Instance.GetIsFire()) {
                return;
            }
            this.FireLogic();
        }
        InitWeapon(weaponName, damage, fireRate, maxMag, maxTotalBullets, recoilVer, recoilHor, camShakeVar, weaponTypeEnum, weaponFireModeEnum, aimPos) {
            this.gunSp3d = this.owner;
            this.lastFireTime = GameTimeMgr.Instance.GetGameTime();
            this.weaponName = weaponName;
            this.damage = damage;
            this.fireRate = fireRate;
            this.maxMag = maxMag;
            this.AddLevelProperty();
            this.curMag = this.maxMag;
            this.maxTotalBullets = maxTotalBullets;
            this.curTotalBullets = this.maxTotalBullets;
            this.curTotalBullets = this.curTotalBullets - this.curMag;
            this.recoilVer = recoilVer;
            this.recoilHor = recoilHor;
            this.camShakeVar = camShakeVar;
            this.weaponFireSoundName = WeaponMgr.Instance.GetFireSoundByWeaponName(this.weaponName);
            this.weaponTypeEnum = weaponTypeEnum;
            this.weaponFireModeEnum = weaponFireModeEnum;
            this.aimPos = aimPos;
            this.sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            this.playerCam = WeaponMgr.Instance.GetPlayeCam();
            this.anmt = WeaponMgr.Instance.GetPlayeAnimator();
            this.muzzlePosSp3d = Tool.GetSp3d(this.owner, "MuzzlePos");
            this.LoadMuzzleFx();
            this.LoadBtTrail();
        }
        AddLevelProperty() {
            this.damage += DataTool.GetInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(this.weaponName));
            this.maxMag += DataTool.GetInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(this.weaponName));
        }
        OnPlayerInteraptReload() {
            this.isReloading = false;
            Laya.timer.clear(this, this.ReloadInner);
        }
        SetNowWeaponIndex(index) {
            this.nowWeaponIndex = index;
        }
        Reload() {
            if (this.isReloading || InputMgr.Instance.GetIsChangingWeapon() || this.curMag >= this.maxMag || this.curTotalBullets <= 0 || !this.anmt) {
                return;
            }
            Laya.timer.once(3100, this, this.ReloadInner);
            this.isReloading = true;
            if (InputMgr.Instance.GetIsAim()) {
                this.anmt.crossFade(Std.Anm_PlayerReloadName, .9);
            } else {
                this.anmt.crossFade(Std.Anm_PlayerReloadName, .1);
            }
            InputMgr.Instance.SetIsAim(false);
            if (this.weaponTypeEnum == WeaponTypeEnum.Sniper) {
                Dispatcher.Event(EventType.OnPlayerQuitSniperAim);
            }
            SoundTool.PlaySfxByName("reload");
        }
        ReloadInner() {
            let needReloadBullets = this.maxMag - this.curMag;
            if (this.curTotalBullets >= needReloadBullets) {
                this.curMag = this.curMag + needReloadBullets;
                this.curTotalBullets = this.curTotalBullets - needReloadBullets;
            } else {
                this.curMag = this.curTotalBullets + this.curMag;
                this.curTotalBullets = 0;
            }
            if (!InputMgr.Instance.GetIsFire()) {
                Dispatcher.Event(EventType.OnReloadEnd);
            }
            this.reloadFinishCb();
            this.isReloading = false;
        }
        CanFire() {
            let isInFireTime = GameTimeMgr.Instance.GetGameTime() - this.lastFireTime > this.fireRate;
            let isNotReload = this.isReloading == false;
            let isMagHasBullet = this.curMag > 0;
            let isChangingWeapon = InputMgr.Instance.GetIsChangingWeapon();
            let is3dScExist = this.sc3d != null && this.sc3d != undefined;
            let isPlayerCamExist = this.playerCam != null && this.playerCam != undefined;
            return isInFireTime && isNotReload && isMagHasBullet && !isChangingWeapon && is3dScExist && isPlayerCamExist;
        }
        FireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            if (InputMgr.Instance.GetIsAim()) {
                this.anmt.crossFade(Std.Anm_PlayerAimFireName, .07);
            } else {
                this.anmt.crossFade(Std.Anm_PlayerFireName, .01);
            }
            this.curMag -= 1;
            this.PlayFireMuzzleFlash();
            SoundTool.PlaySfxByName(this.weaponFireSoundName);
            Dispatcher.Event(EventType.OnWeaponFire);
            this.ShootRay();
            this.InsFireBullet();
            this.lastFireTime = GameTimeMgr.Instance.GetGameTime();
            if (this.curMag <= 0 && this.curTotalBullets > 0) {
                this.Reload();
                Dispatcher.Event(EventType.OnAutoReload);
            }
        }
        LoadMuzzleFx() {
            if (this.muzzlePosSp3d) {
                ResMgr.Instance.LoadSp3d(Std.Prefab_MuzzleFlash, this, muzzleFlash => {
                    this.muzzleFlashFx = muzzleFlash.clone();
                    this.muzzlePosSp3d.addChild(this.muzzleFlashFx);
                    this.muzzleFlashFx.transform.localPosition = Tool.V3Zero();
                });
            }
        }
        LoadBtTrail() {
            ResMgr.Instance.LoadSp3d(Std.Prefab_BtTrail, this, bt => {
                this.bulletPrefab = bt.clone();
            });
        }
        PlayFireMuzzleFlash() {
            if (this.muzzleFlashFx) {
                this.muzzleFlashFx.particleSystem.play();
            }
        }
        PlayHitFx(hitPos) {
            let hitFx = WeaponMgr.Instance.GetHitFx();
            if (!hitFx) {
                return;
            }
            hitFx.transform.position = hitPos;
            hitFx.particleSystem.play();
            let outUp = Tool.V3(0, 1, 0);
            hitFx.transform.getUp(outUp);
            hitFx.transform.lookAt(Tool.SubV3(this.outHitInfo.point, this.outHitInfo.normal), outUp);
        }
        ShootRay() {
            let point = new Laya.Vector2(this.playerCam.viewport.width / 2, this.playerCam.viewport.height / 2);
            let ray = new Laya.Ray(Tool.V3(0, 0, 0), Tool.V3(0, 0, 0));
            this.playerCam.viewportPointToRay(point, ray);
            this.sc3d.physicsSimulation.rayCast(ray, this.outHitInfo, 1e3);
            if (this.outHitInfo.succeeded) {
                this.PlayHitFx(this.outHitInfo.point);
                let hitY = this.outHitInfo.point.y;
                let targetY = this.outHitInfo.collider.owner.transform.position.y;
                let damage = this.damage;
                let isCritical = false;
                if (hitY > targetY + 1) {
                    isCritical = true;
                    damage = this.damage * 2;
                } else {
                    isCritical = false;
                    damage = this.damage;
                }
                let hitOwner = this.outHitInfo.collider.owner;
                let aiSrc = hitOwner.getComponent(AIBase);
                if (aiSrc) {
                    if (GameLevelMgr.Instance.GetFriendlyFire()) {
                        this.DoHitLogic(aiSrc, damage, isCritical);
                    } else {
                        if (aiSrc.teamColor != GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                            this.DoHitLogic(aiSrc, damage, isCritical);
                        }
                    }
                } else {
                    let aiSrc = hitOwner.getComponent(YYAIBase);
                    if (aiSrc) {
                        this.DoHitLogicYY(aiSrc, damage);
                    } else {
                        this.aiSrc = null;
                    }
                }
            } else {
                this.aiSrc = null;
            }
        }
        DoHitLogic(aiSrc, damage, isCritical) {
            this.aiSrc = aiSrc;
            aiSrc.BeHit(damage, AIDamageSource.Player);
            this.PlayHitEnemySfx();
            Dispatcher.Event(EventType.OnPlayerHitEnemy, damage);
            if (aiSrc.curHp <= 0) {
                if (aiSrc.teamColor != GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                    Dispatcher.Event(EventType.OnPlayerKillEnemy, isCritical);
                } else {
                    Dispatcher.Event(EventType.OnPlayerKillTeammate, isCritical);
                }
            }
        }
        DoHitLogicYY(aiSrc, damage) {
            this.aiSrc = aiSrc;
            aiSrc.BeHit(damage, AIDamageSource.Player);
            this.PlayHitEnemySfx();
            Dispatcher.Event(EventType.OnPlayerHitEnemy, damage);
        }
        FireGunHitAI(aiSrc) {
            if (GameLevelMgr.Instance.GetFriendlyFire() == false && aiSrc) {
                return;
            }
            if (aiSrc.teamColor) {
                if (aiSrc.teamColor == GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                    return;
                } else {
                    aiSrc.BeHit(20, AIDamageSource.Player);
                    this.PlayHitEnemySfx();
                    Dispatcher.Event(EventType.OnPlayerHitEnemy, 20);
                }
                if (aiSrc.curHp <= 0) {
                    if (aiSrc.teamColor != GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                        Dispatcher.Event(EventType.OnPlayerKillEnemy, false);
                    } else {
                        Dispatcher.Event(EventType.OnPlayerKillTeammate, false);
                    }
                }
            } else {
                aiSrc.BeHit(20, AIDamageSource.Player);
                this.PlayHitEnemySfx();
                Dispatcher.Event(EventType.OnPlayerHitEnemy, 20);
            }
        }
        PlayHitEnemySfx() {
            SoundTool.PlaySfxByName("hit");
        }
        InsFireBullet() {
            if (!this.muzzlePosSp3d || !this.bulletPrefab) {
                return;
            }
            let bt = this.bulletPrefab.clone();
            bt.transform.position = this.muzzlePosSp3d.transform.position;
            let src = bt.addComponent(BulletMove);
            this.sc3d.addChild(bt);
            var dirV3 = new Laya.Vector3();
            Laya.Vector3.subtract(this.outHitInfo.point, bt.transform.position, dirV3);
            src.setShootDirection(dirV3);
        }
    }
    class CameraShake extends Laya.Script {
        constructor() {
            super();
            this.camShakeVar = 0;
            this.canShakeLeft = true;
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnWeaponFire, this, this.DoShake);
            Dispatcher.AddListener(EventType.OnPlayerDie, this, this.PlayerDie);
        }
        onStart() {
            this.shakeSp3d = this.owner;
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnWeaponFire, this, this.DoShake);
            Dispatcher.RemoveListener(EventType.OnPlayerDie, this, this.PlayerDie);
        }
        PlayerDie() {
            Tool.ClearTragetTween(this.shakeTween1);
            Tool.ClearTragetTween(this.shakeTween2);
        }
        DoShake() {
            let nowEquipWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            if (!nowEquipWeapon) {
                return;
            }
            this.camShakeVar = nowEquipWeapon.camShakeVar;
            this.canShakeLeft = !this.canShakeLeft;
            let x = this.canShakeLeft == true ? this.camShakeVar : -this.camShakeVar;
            if (this.shakeSp3d && this.shakeSp3d.transform) {
                this.shakeTween1 = Laya.Tween.to(this.shakeSp3d.transform, {
                    localRotationEulerZ: x
                }, 90, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                    if (this.shakeSp3d && this.shakeSp3d.transform) {
                        this.shakeTween2 = Laya.Tween.to(this.shakeSp3d.transform, {
                            localRotationEulerZ: 0
                        }, 50);
                    }
                }));
            }
        }
    }
    class WeaponRecoil extends Laya.Script {
        constructor() {
            super();
            this.verRecoilNum = 0;
            this.horRecoilNum = 0;
            this.speed = 10;
        }
        onAwake() {
            this.recoilSp3d = this.owner;
            Dispatcher.AddListener(EventType.OnWeaponFire, this, this.DoRecoil);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnWeaponFire, this, this.DoRecoil);
            Tool.ClearTragetTween(this.tween1);
        }
        onUpdate() {
            let nowEquipWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            if (!nowEquipWeapon) return;
            if (!InputMgr.Instance.GetIsFire() || (nowEquipWeapon.curMag <= 0 || nowEquipWeapon.isReloading)) {
                this.recoilSp3d.transform.localRotationEulerX = Tool.LerpNum(this.recoilSp3d.transform.localRotationEulerX, 0, this.speed * Tool.DeltaTime());
                this.recoilSp3d.transform.localRotationEulerY = Tool.LerpNum(this.recoilSp3d.transform.localRotationEulerY, 0, this.speed * Tool.DeltaTime());
            }
        }
        DoRecoil() {
            let nowEquipWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            if (!this.recoilSp3d || !this.recoilSp3d.transform || !nowEquipWeapon) return;
            this.horRecoilNum = nowEquipWeapon.recoilHor;
            this.verRecoilNum = nowEquipWeapon.recoilVer;
            let isAim = InputMgr.Instance.GetIsAim();
            let finalVRecaoil = isAim == true ? this.verRecoilNum / 2 : this.verRecoilNum;
            let finalHRecoil = isAim == true ? this.horRecoilNum / 2 : this.horRecoilNum;
            let v = this.recoilSp3d.transform.localRotationEulerX - finalVRecaoil;
            let randH = Tool.RandBool() ? finalHRecoil : -finalHRecoil;
            let h = this.recoilSp3d.transform.localRotationEulerY + randH;
            this.tween1 = Laya.Tween.to(this.recoilSp3d.transform, {
                localRotationEulerX: v,
                localRotationEulerY: h
            }, 120, Laya.Ease.backOut);
        }
    }
    class WeaponSway extends Laya.Script {
        constructor() {
            super();
            this.amount = .02;
            this.maxAmount = .05;
            this.smoothAmount = 2;
            this.backSmoothAmount = 5;
            this.initialPosition = Tool.V3Zero();
        }
        InitWeaponSway(tempLookRoter) {
            this.lookRoter = tempLookRoter;
        }
        onStart() {
            this.swaySp3d = this.owner;
            this.initialPosition = this.swaySp3d.transform.localPosition;
        }
        onUpdate() {
            if (!this.lookRoter || !this.swaySp3d) return;
            this.SetMoveSmooth();
            let inputXY = this.lookRoter.GetRotOffsetXY();
            let movementX = -inputXY.x * this.amount;
            let movementY = -inputXY.y * this.amount;
            movementX = Tool.ClampNum(movementX, -this.maxAmount, this.maxAmount);
            movementY = Tool.ClampNum(movementY, -this.maxAmount, this.maxAmount);
            let finalPosition = Tool.V3(-movementX, movementY, 0);
            this.swaySp3d.transform.localPosition = Tool.LerpV3(this.swaySp3d.transform.localPosition, Tool.AddV3(finalPosition, this.initialPosition), Tool.DeltaTime() * this.smoothAmount);
            if (inputXY.x == 0 && inputXY.y == 0) {
                this.swaySp3d.transform.localPosition = Tool.LerpV3(this.swaySp3d.transform.localPosition, Tool.V3Zero(), Tool.DeltaTime() * this.backSmoothAmount);
            }
        }
        SetMoveSmooth() {
            let isAim = InputMgr.Instance.GetIsAim();
            this.amount = isAim == true ? .01 : .02;
            this.maxAmount = isAim == true ? .02 : .05;
            this.smoothAmount = isAim == true ? 1.25 : 2.5;
        }
    }
    class PlayerLocalData {
        constructor() {
            this.equipWeapon1Name = "";
            this.equipWeapon2Name = "";
            this.equipWeapon3Name = "";
            this.equipWeapon4Name = "";
        }
    }
    class PlayerLocalDataMgr extends Laya.Script {
        constructor() {
            super();
            PlayerLocalDataMgr.Instance = this;
        }
        onAwake() {
            this.InitPlayerData();
        }
        onDestroy() { }
        GetPlayerData() {
            return this.playerLocalData;
        }
        SetPlayerData(Weapon1, Weapon2, Weapon3, Weapon4) {
            this.playerLocalData.equipWeapon1Name = Weapon1;
            this.playerLocalData.equipWeapon2Name = Weapon2;
            this.playerLocalData.equipWeapon3Name = Weapon3;
            this.playerLocalData.equipWeapon4Name = Weapon4;
        }
        InitPlayerData() {
            if (!this.playerLocalData) {
                this.playerLocalData = new PlayerLocalData();
            }
            this.playerLocalData.equipWeapon1Name = DataTool.GetStr(Std.Local_EquipWeapon1Key);
            this.playerLocalData.equipWeapon2Name = DataTool.GetStr(Std.Local_EquipWeapon2Key);
            this.playerLocalData.equipWeapon3Name = DataTool.GetStr(Std.Local_EquipWeapon3Key);
            this.playerLocalData.equipWeapon4Name = DataTool.GetStr(Std.Local_EquipWeapon4Key);
        }
        RefreshPlayerData() {
            this.playerLocalData.equipWeapon1Name = DataTool.GetStr(Std.Local_EquipWeapon1Key);
            this.playerLocalData.equipWeapon2Name = DataTool.GetStr(Std.Local_EquipWeapon2Key);
            this.playerLocalData.equipWeapon3Name = DataTool.GetStr(Std.Local_EquipWeapon3Key);
            this.playerLocalData.equipWeapon4Name = DataTool.GetStr(Std.Local_EquipWeapon4Key);
        }
    }
    class Weapon_Acr extends WeaponBase {
        constructor() {
            super();
            this.curMag = 30;
            this.maxTotalBullets = 120;
            this.curTotalBullets = 120 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_Acr, 35, .11, 30, 120, .35, .25, .55, WeaponTypeEnum.Rifle, WeaponFireModeEnum.AutoMode, Tool.V3ReverseX(0, -.112, -.1));
        }
    }
    class Weapon_Ak extends WeaponBase {
        constructor() {
            super();
            this.curMag = 30;
            this.maxTotalBullets = 120;
            this.curTotalBullets = 120 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_Ak, 40, .12, 30, 120, .5, .3, .5, WeaponTypeEnum.Rifle, WeaponFireModeEnum.AutoMode, Tool.V3(0, -.07, -.1));
        }
    }
    class Weapon_AmmoBox extends WeaponBase {
        constructor() {
            super();
            this.curMag = 1;
            this.maxTotalBullets = 1;
            this.curTotalBullets = 1 - this.curMag;
        }
        onEnable() {
            this.OnReFullWeaponBullets();
            Dispatcher.AddListener(EventType.OnReFullWeaponBullets, this, this.OnReFullWeaponBullets);
        }
        onDisable() {
            Dispatcher.RemoveListener(EventType.OnReFullWeaponBullets, this, this.OnReFullWeaponBullets);
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_AmmoBox, 0, .2, 1, 1, 2, .2, .5, WeaponTypeEnum.Surport, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.15, 0));
        }
        FireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            Dispatcher.Event(EventType.OnPlayerUseAmmoBox);
            this.curMag -= 1;
            if (this.curMag <= 0) {
                this.gunSp3d.transform.localScale = Tool.V3Zero();
            }
        }
        OnReFullWeaponBullets() {
            if (this.curMag > 0) {
                this.owner.transform.localScale = Tool.V3One();
            }
        }
    }
    class Weapon_FireGun extends WeaponBase {
        constructor() {
            super();
            this.curMag = 100;
            this.maxTotalBullets = 100;
            this.curTotalBullets = 100 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_FireGun, 50, .06, 100, 100, 0, 0, .5, WeaponTypeEnum.Special, WeaponFireModeEnum.AutoMode, Tool.V3ReverseX(0, -.15, 0));
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                this.fireRate = .2;
            } else {
                this.fireRate = .06;
                this.curMag = 200;
            }
            this.fxFireFlame = this.muzzlePosSp3d.getChildByName("FxFireFlame");
            this.fireTrigger = this.muzzlePosSp3d.getChildByName("FireTrigger");
            this.fireTrigger.active = false;
            Dispatcher.AddListener(EventType.OnPlayerMouseDownFireBtn, this, this.OnPlayerMouseDownFireBtn);
            Dispatcher.AddListener(EventType.OnPlayerMouseUpFireBtn, this, this.OnPlayerMouseUpFireBtn);
        }
        onDestroy() {
            super.onDestroy();
            Dispatcher.RemoveListener(EventType.OnPlayerMouseDownFireBtn, this, this.OnPlayerMouseDownFireBtn);
            Dispatcher.RemoveListener(EventType.OnPlayerMouseUpFireBtn, this, this.OnPlayerMouseUpFireBtn);
        }
        OnPlayerMouseDownFireBtn() {
            if (WeaponMgr.Instance.GetNowUsingWeapon() != this || this.curMag <= 0) {
                return;
            }
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                this.fireTrigger.active = true;
            }
            this.fxFireFlame.particleSystem.play();
            this.sdCn = Laya.SoundManager.playSound("res/Sounds/" + this.weaponFireSoundName + ".mp3", 0);
            if (this.sdCn) {
                this.sdCn.play();
            }
        }
        OnPlayerMouseUpFireBtn() {
            if (WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                this.fireTrigger.active = false;
            }
            this.fxFireFlame.particleSystem.stop();
            if (this.sdCn) {
                this.sdCn.stop();
            }
        }
        FireLogic() {
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                this.BattleModeFireLogic();
            } else {
                this.ZombieModeFireLogic();
            }
        }
        BattleModeFireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            if (InputMgr.Instance.GetIsAim()) {
                this.anmt.crossFade(Std.Anm_PlayerAimFireName, .07);
            } else {
                this.anmt.crossFade(Std.Anm_PlayerFireName, .01);
            }
            this.curMag -= 1;
            Dispatcher.Event(EventType.OnWeaponFire);
            this.lastFireTime = GameTimeMgr.Instance.GetGameTime();
            if (this.curMag <= 0) {
                this.OnPlayerMouseUpFireBtn();
            }
        }
        ZombieModeFireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            if (InputMgr.Instance.GetIsAim()) {
                this.anmt.crossFade(Std.Anm_PlayerAimFireName, .07);
            } else {
                this.anmt.crossFade(Std.Anm_PlayerFireName, .01);
            }
            this.curMag -= 1;
            Dispatcher.Event(EventType.OnWeaponFire);
            this.ShootRay();
            this.lastFireTime = GameTimeMgr.Instance.GetGameTime();
            if (this.curMag <= 0) {
                this.OnPlayerMouseUpFireBtn();
            }
            if (this.curMag <= 0 && this.curTotalBullets > 0) {
                this.Reload();
                Dispatcher.Event(EventType.OnAutoReload);
            }
        }
    }
    class GrenadeCol extends Laya.Script3D {
        constructor() {
            super();
            this.canDoColLogic = true;
        }
        onAwake() {
            this.selfSp3d = this.owner;
            Laya.timer.once(6e3, this, () => {
                this.owner.destroy(true);
            });
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
        }
        onTriggerEnter(col) {
            if (col.owner.name != Std.Prefab_PlayerName && col.owner.name != Std.WeaponName_GrenadeBar && col.owner.name != Std.WeaponName_Grenade && this.canDoColLogic) {
                ResMgr.Instance.LoadSp3d(Std.Prefab_FxBoom, this, sp3d => {
                    let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
                    let fxIns = Laya.Sprite3D.instantiate(sp3d, sc3d);
                    let fx1 = fxIns.getChildAt(0);
                    let fx2 = fxIns.getChildAt(1);
                    let boomPos = Tool.AddV3(this.selfSp3d.transform.position, Tool.V3(0, 1, 0));
                    fxIns.transform.position = boomPos;
                    fxIns.particleSystem.play();
                    fx1.particleSystem.play();
                    fx2.particleSystem.play();
                    SoundTool.PlaySfxByName("boom");
                    Dispatcher.Event(EventType.OnGrenadeBoom, boomPos);
                });
                Laya.timer.once(3e3, this, () => {
                    this.owner.destroy(true);
                });
                this.canDoColLogic = false;
            }
        }
    }
    class Weapon_GLGun extends WeaponBase {
        constructor() {
            super();
            this.curMag = 5;
            this.maxTotalBullets = 15;
            this.curTotalBullets = 15 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_GLGun, 150, .5, 5, 15, 5, .4, 2, WeaponTypeEnum.Special, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(-.016, -.096, -.075));
        }
        FireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            this.ShootRpgBullet();
        }
        ShootRpgBullet() {
            ResMgr.Instance.LoadSp3d(Std.Prefab_GLGunBullet, this, sp3d => {
                let bt = sp3d.clone();
                bt.addComponent(GrenadeCol);
                this.sc3d.addChild(bt);
                bt.transform.position = this.muzzlePosSp3d.transform.position;
                bt.transform.rotation = this.muzzlePosSp3d.transform.rotation;
                let rg = bt.getComponent(Laya.Rigidbody3D);
                rg.gravity = Tool.V3(0, -20, 0);
                rg.isKinematic = false;
                rg.applyImpulse(Tool.QuatMulV3(this.gunSp3d.transform.rotation, Tool.V3(0, 0, 50)));
                SoundTool.PlaySfxByName(this.weaponFireSoundName);
                Dispatcher.Event(EventType.OnWeaponFire);
                this.curMag -= 1;
                if (this.curMag <= 0 && this.curTotalBullets > 0) {
                    this.Reload();
                    Dispatcher.Event(EventType.OnAutoReload);
                }
            });
        }
    }
    class Weapon_Glock extends WeaponBase {
        constructor() {
            super();
            this.curMag = 10;
            this.maxTotalBullets = 35;
            this.curTotalBullets = 35 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_Glock, 50, .1, 10, 35, 3, .2, 1.5, WeaponTypeEnum.Pistol, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.053, -.15));
        }
    }
    class Weapon_Grenade extends WeaponBase {
        constructor() {
            super();
            this.curMag = 1;
            this.maxTotalBullets = 1;
            this.curTotalBullets = 1 - this.curMag;
        }
        onEnable() {
            this.OnReFullWeaponBullets();
            Dispatcher.AddListener(EventType.OnReFullWeaponBullets, this, this.OnReFullWeaponBullets);
        }
        onDisable() {
            Dispatcher.RemoveListener(EventType.OnReFullWeaponBullets, this, this.OnReFullWeaponBullets);
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_Grenade, 200, .2, 1, 1, 2, .2, .5, WeaponTypeEnum.Grenade, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(.037, -.096, -.1));
        }
        FireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            this.ShootGrenade();
        }
        ShootGrenade() {
            ResMgr.Instance.LoadSp3d(Std.WeaponName_Grenade, this, sp3d => {
                let bt = sp3d.clone();
                bt.getChildAt(0).transform.localPosition = Tool.V3Zero();
                bt.addComponent(GrenadeCol);
                this.sc3d.addChild(bt);
                bt.transform.position = this.gunSp3d.transform.position;
                let rg = bt.getComponent(Laya.Rigidbody3D);
                rg.gravity = Tool.V3(0, -20, 0);
                rg.isKinematic = false;
                rg.applyImpulse(Tool.QuatMulV3(this.gunSp3d.transform.rotation, Tool.V3(0, 0, 25)));
                SoundTool.PlaySfxByName(this.weaponFireSoundName);
                SoundTool.PlaySfxByName("grenadeTip");
                this.curMag -= 1;
                Dispatcher.Event(EventType.OnWeaponFire);
                if (this.curMag <= 0) {
                    this.gunSp3d.transform.localScale = Tool.V3Zero();
                }
            });
        }
        OnReFullWeaponBullets() {
            if (this.curMag > 0) {
                this.owner.transform.localScale = Tool.V3One();
            }
        }
    }
    class Weapon_GrenadeBar extends WeaponBase {
        constructor() {
            super();
            this.curMag = 1;
            this.maxTotalBullets = 1;
            this.curTotalBullets = 1 - this.curMag;
        }
        onEnable() {
            this.OnReFullWeaponBullets();
            Dispatcher.AddListener(EventType.OnReFullWeaponBullets, this, this.OnReFullWeaponBullets);
        }
        onDisable() {
            Dispatcher.RemoveListener(EventType.OnReFullWeaponBullets, this, this.OnReFullWeaponBullets);
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_GrenadeBar, 250, .2, 1, 1, 2, .2, .5, WeaponTypeEnum.Grenade, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(.037, -.096, -.1));
        }
        FireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            this.ShootGrenade();
        }
        ShootGrenade() {
            ResMgr.Instance.LoadSp3d(Std.WeaponName_GrenadeBar, this, sp3d => {
                let bt = sp3d.clone();
                bt.getChildAt(0).transform.localPosition = Tool.V3Zero();
                bt.addComponent(GrenadeCol);
                this.sc3d.addChild(bt);
                bt.transform.position = this.gunSp3d.transform.position;
                let rg = bt.getComponent(Laya.Rigidbody3D);
                rg.gravity = Tool.V3(0, -20, 0);
                rg.isKinematic = false;
                rg.applyImpulse(Tool.QuatMulV3(this.gunSp3d.transform.rotation, Tool.V3(0, 0, 25)));
                SoundTool.PlaySfxByName(this.weaponFireSoundName);
                SoundTool.PlaySfxByName("grenadeTip");
                this.curMag -= 1;
                Dispatcher.Event(EventType.OnWeaponFire);
                if (this.curMag <= 0) {
                    this.gunSp3d.transform.localScale = Tool.V3Zero();
                }
            });
        }
        OnReFullWeaponBullets() {
            if (this.curMag > 0) {
                this.owner.transform.localScale = Tool.V3One();
            }
        }
    }
    class Weapon_HpBox extends WeaponBase {
        constructor() {
            super();
            this.curMag = 1;
            this.maxTotalBullets = 1;
            this.curTotalBullets = 1 - this.curMag;
        }
        onEnable() {
            this.OnReFullWeaponBullets();
            Dispatcher.AddListener(EventType.OnReFullWeaponBullets, this, this.OnReFullWeaponBullets);
        }
        onDisable() {
            Dispatcher.RemoveListener(EventType.OnReFullWeaponBullets, this, this.OnReFullWeaponBullets);
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_HpBox, 0, .2, 1, 1, 2, .2, .5, WeaponTypeEnum.Surport, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.15, 0));
        }
        FireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            Dispatcher.Event(EventType.OnPlayerUseHpBox);
            this.curMag -= 1;
            if (this.curMag <= 0) {
                this.gunSp3d.transform.localScale = Tool.V3Zero();
            }
        }
        OnReFullWeaponBullets() {
            if (this.curMag > 0) {
                this.owner.transform.localScale = Tool.V3One();
            }
        }
    }
    class Weapon_LMG extends WeaponBase {
        constructor() {
            super();
            this.curMag = 100;
            this.maxTotalBullets = 200;
            this.curTotalBullets = 200 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_LMG, 50, .14, 100, 200, .35, .25, .55, WeaponTypeEnum.Special, WeaponFireModeEnum.AutoMode, Tool.V3ReverseX(-.001, -.096, -.05));
        }
    }
    class Weapon_M1911 extends WeaponBase {
        constructor() {
            super();
            this.curMag = 7;
            this.maxTotalBullets = 35;
            this.curTotalBullets = 35 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_M1911, 20, .11, 7, 35, 1, .15, 1, WeaponTypeEnum.Pistol, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.0525, -.15));
        }
    }
    class Weapon_M4 extends WeaponBase {
        constructor() {
            super();
            this.curMag = 30;
            this.maxTotalBullets = 120;
            this.curTotalBullets = 120 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_M4, 30, .1, 30, 120, .25, .2, .4, WeaponTypeEnum.Rifle, WeaponFireModeEnum.AutoMode, Tool.V3(0, -.11, -.1));
        }
    }
    class Weapon_Revolver extends WeaponBase {
        constructor() {
            super();
            this.curMag = 7;
            this.maxTotalBullets = 21;
            this.curTotalBullets = 21 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_Revolver, 100, .2, 7, 21, 3, .3, 1, WeaponTypeEnum.Pistol, WeaponFireModeEnum.SingleMode, Tool.V3(-.0073, -.055, -.1));
        }
    }
    class Weapon_Rocket extends WeaponBase {
        constructor() {
            super();
            this.curMag = 1;
            this.maxTotalBullets = 10;
            this.curTotalBullets = 10 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_Rocket, 500, .2, 1, 10, 5, .4, 2, WeaponTypeEnum.Special, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.1, -.09));
        }
        FireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            this.ShootRpgBullet();
        }
        ShootRpgBullet() {
            ResMgr.Instance.LoadSp3d(Std.Prefab_RpgBullet, this, sp3d => {
                let bt = sp3d.clone();
                bt.addComponent(GrenadeCol);
                this.sc3d.addChild(bt);
                bt.transform.position = this.muzzlePosSp3d.transform.position;
                bt.transform.rotation = this.muzzlePosSp3d.transform.rotation;
                let rg = bt.getComponent(Laya.Rigidbody3D);
                rg.gravity = Tool.V3(0, -20, 0);
                rg.isKinematic = false;
                rg.applyImpulse(Tool.QuatMulV3(this.gunSp3d.transform.rotation, Tool.V3(0, 0, 50)));
                SoundTool.PlaySfxByName(this.weaponFireSoundName);
                this.curMag -= 1;
                Dispatcher.Event(EventType.OnWeaponFire);
                if (this.curMag <= 0 && this.curTotalBullets > 0) {
                    this.Reload();
                    Dispatcher.Event(EventType.OnAutoReload);
                }
            });
        }
    }
    class Weapon_Rpg extends WeaponBase {
        constructor() {
            super();
            this.curMag = 1;
            this.maxTotalBullets = 10;
            this.curTotalBullets = 10 - this.curMag;
        }
        onEnable() {
            if (this.curMag > 0) {
                this.owner.getChildByName("rpg_projectile").transform.localScale = Tool.V3One();
            }
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_Rpg, 250, .2, 1, 10, 5, .4, 2, WeaponTypeEnum.Special, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.095, -.1));
            this.rpg_projectile = this.gunSp3d.getChildByName("rpg_projectile");
            this.reloadFinishCb = (() => {
                if (this.curMag > 0) {
                    this.rpg_projectile.transform.localScale = Tool.V3One();
                }
            });
        }
        FireLogic() {
            if (!this.CanFire() || WeaponMgr.Instance.GetNowUsingWeapon() != this) {
                return;
            }
            this.ShootRpgBullet();
        }
        ShootRpgBullet() {
            ResMgr.Instance.LoadSp3d(Std.Prefab_RpgBullet, this, sp3d => {
                let bt = sp3d.clone();
                bt.addComponent(GrenadeCol);
                this.sc3d.addChild(bt);
                bt.transform.position = this.rpg_projectile.transform.position;
                bt.transform.rotation = this.rpg_projectile.transform.rotation;
                let rg = bt.getComponent(Laya.Rigidbody3D);
                rg.gravity = Tool.V3(0, -20, 0);
                rg.isKinematic = false;
                rg.applyImpulse(Tool.QuatMulV3(this.gunSp3d.transform.rotation, Tool.V3(0, 0, 50)));
                SoundTool.PlaySfxByName(this.weaponFireSoundName);
                this.curMag -= 1;
                Dispatcher.Event(EventType.OnWeaponFire);
                if (this.curMag <= 0) {
                    this.rpg_projectile.transform.localScale = Tool.V3Zero();
                }
                if (this.curMag <= 0 && this.curTotalBullets > 0) {
                    this.Reload();
                    Dispatcher.Event(EventType.OnAutoReload);
                }
            });
        }
    }
    class Weapon_SgM870 extends WeaponBase {
        constructor() {
            super();
            this.curMag = 7;
            this.maxTotalBullets = 30;
            this.curTotalBullets = 30 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_SgM870, 300, .2, 7, 30, 7, 1, 3, WeaponTypeEnum.ShotGun, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(.01, -.069, -.121));
        }
    }
    class Weapon_SgSpas12 extends WeaponBase {
        constructor() {
            super();
            this.curMag = 5;
            this.maxTotalBullets = 30;
            this.curTotalBullets = 30 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_SgSpas12, 500, .45, 5, 30, 8, 2, 4, WeaponTypeEnum.ShotGun, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.055, -.065));
        }
    }
    class Weapon_SmgMp5 extends WeaponBase {
        constructor() {
            super();
            this.curMag = 30;
            this.maxTotalBullets = 120;
            this.curTotalBullets = 120 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_SmgMp5, 25, .09, 30, 120, .2, .15, .3, WeaponTypeEnum.Smg, WeaponFireModeEnum.AutoMode, Tool.V3ReverseX(0, -.099, -.09));
        }
    }
    class Weapon_SmgTom extends WeaponBase {
        constructor() {
            super();
            this.curMag = 30;
            this.maxTotalBullets = 120;
            this.curTotalBullets = 120 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_SmgTom, 20, .09, 30, 120, .2, .15, .3, WeaponTypeEnum.Smg, WeaponFireModeEnum.AutoMode, Tool.V3ReverseX(.01, -.101, -.09));
        }
    }
    class Weapon_SmgUzi extends WeaponBase {
        constructor() {
            super();
            this.curMag = 30;
            this.maxTotalBullets = 120;
            this.curTotalBullets = 120 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_SmgUzi, 25, .08, 30, 120, .15, .12, .25, WeaponTypeEnum.Smg, WeaponFireModeEnum.AutoMode, Tool.V3ReverseX(0, -.055, -.09));
        }
    }
    class Weapon_Sniper98k extends WeaponBase {
        constructor() {
            super();
            this.curMag = 10;
            this.maxTotalBullets = 40;
            this.curTotalBullets = 40 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_Sniper98k, 150, .15, 10, 40, 1.5, .6, 1, WeaponTypeEnum.Rifle, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.07, -.09));
        }
    }
    class Weapon_SniperCheyTac extends WeaponBase {
        constructor() {
            super();
            this.curMag = 5;
            this.maxTotalBullets = 25;
            this.curTotalBullets = 25 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_SniperCheyTac, 250, .2, 5, 25, 4, .7, 2.5, WeaponTypeEnum.Sniper, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.08, -.1));
        }
    }
    class Weapon_SniperM24 extends WeaponBase {
        constructor() {
            super();
            this.curMag = 7;
            this.maxTotalBullets = 25;
            this.curTotalBullets = 25 - this.curMag;
        }
        onStart() {
            this.InitWeapon(Std.WeaponName_SniperM24, 300, .2, 5, 25, 5, 1, 3, WeaponTypeEnum.Sniper, WeaponFireModeEnum.SingleMode, Tool.V3ReverseX(0, -.094, -.1));
        }
    }
    class WeaponSpawner extends Laya.Script {
        constructor() {
            super();
            this.tempWeapon = 0;
        }
        onAwake() {
            this.GetNeed();
            this.InitWeapon();
            Dispatcher.AddListener(EventType.OnChangeWeapon, this, this.ChangeWeapon);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnChangeWeapon, this, this.ChangeWeapon);
        }
        GetNeed() {
            this.weaponsRoot = this.owner;
            this.weapon1Parent = this.weaponsRoot.getChildAt(0);
            this.weapon2Parent = this.weaponsRoot.getChildAt(1);
            this.weapon3Parent = this.weaponsRoot.getChildAt(2);
            this.weapon4Parent = this.weaponsRoot.getChildAt(3);
        }
        InitSingleWeapon(equipWeaponName, parentSp3d, weaponIdx) {
            if (equipWeaponName != Std.WeaponName_None) {
                ResMgr.Instance.LoadSp3d(equipWeaponName, this, gunSp3d => {
                    let insWeapon = Laya.Sprite3D.instantiate(gunSp3d, parentSp3d);
                    insWeapon.transform.localPosition = Tool.V3Zero();
                    let weaponSrcRef = insWeapon.addComponent(this.GetWeaponSrcByName(equipWeaponName));
                    weaponSrcRef.nowWeaponIndex = weaponIdx;
                    if (weaponSrcRef.nowWeaponIndex == 1) {
                        this.weapon1Src = weaponSrcRef;
                        WeaponMgr.Instance.SetWeapon1Src(weaponSrcRef);
                        if (this.tempWeapon == 0) {
                            WeaponMgr.Instance.SetNowUsingWeapon(weaponSrcRef);
                            this.tempWeapon = weaponIdx;
                        } else {
                            this.weapon1Src.enabled = false;
                            this.weapon1Parent.active = false;
                        }
                    } else if (weaponSrcRef.nowWeaponIndex == 2) {
                        this.weapon2Src = weaponSrcRef;
                        WeaponMgr.Instance.SetWeapon2Src(weaponSrcRef);
                        if (this.tempWeapon == 0) {
                            WeaponMgr.Instance.SetNowUsingWeapon(weaponSrcRef);
                            this.tempWeapon = weaponIdx;
                        } else {
                            this.weapon2Src.enabled = false;
                            this.weapon2Parent.active = false;
                        }
                    } else if (weaponSrcRef.nowWeaponIndex == 3) {
                        this.weapon3Src = weaponSrcRef;
                        WeaponMgr.Instance.SetWeapon3Src(weaponSrcRef);
                        if (this.tempWeapon == 0) {
                            WeaponMgr.Instance.SetNowUsingWeapon(weaponSrcRef);
                            this.tempWeapon = weaponIdx;
                        } else {
                            this.weapon3Src.enabled = false;
                            this.weapon3Parent.active = false;
                        }
                    } else if (weaponSrcRef.nowWeaponIndex == 4) {
                        this.weapon4Src = weaponSrcRef;
                        WeaponMgr.Instance.SetWeapon4Src(weaponSrcRef);
                        if (this.tempWeapon == 0) {
                            WeaponMgr.Instance.SetNowUsingWeapon(weaponSrcRef);
                            this.tempWeapon = weaponIdx;
                        } else {
                            this.weapon4Src.enabled = false;
                            this.weapon4Parent.active = false;
                        }
                    }
                });
            } else {
                switch (weaponIdx) {
                    case 1:
                        this.weapon1Parent.active = false;
                        break;
  
                    case 2:
                        this.weapon2Parent.active = false;
                        break;
  
                    case 3:
                        this.weapon3Parent.active = false;
                        break;
  
                    case 4:
                        this.weapon4Parent.active = false;
                        break;
  
                    default:
                        console.log("Weaponbug");
                        break;
                }
            }
        }
        InitWeapon() {
            let playerData = PlayerLocalDataMgr.Instance.GetPlayerData();
            this.tempWeapon = 0;
            console.log(playerData.equipWeapon1Name);
            console.log(playerData.equipWeapon2Name);
            console.log(playerData.equipWeapon3Name);
            console.log(playerData.equipWeapon4Name);
            this.InitSingleWeapon(playerData.equipWeapon1Name, this.weapon1Parent, 1);
            this.InitSingleWeapon(playerData.equipWeapon2Name, this.weapon2Parent, 2);
            this.InitSingleWeapon(playerData.equipWeapon3Name, this.weapon3Parent, 3);
            this.InitSingleWeapon(playerData.equipWeapon4Name, this.weapon4Parent, 4);
        }
        GetWeaponSrcByName(weaponName) {
            if (weaponName == Std.WeaponName_Ak) return Weapon_Ak; else if (weaponName == Std.WeaponName_M4) return Weapon_M4; else if (weaponName == Std.WeaponName_Rpg) return Weapon_Rpg; else if (weaponName == Std.WeaponName_Grenade) return Weapon_Grenade; else if (weaponName == Std.WeaponName_GrenadeBar) return Weapon_GrenadeBar; else if (weaponName == Std.WeaponName_Revolver) return Weapon_Revolver; else if (weaponName == Std.WeaponName_Acr) return Weapon_Acr; else if (weaponName == Std.WeaponName_FireGun) return Weapon_FireGun; else if (weaponName == Std.WeaponName_GLGun) return Weapon_GLGun; else if (weaponName == Std.WeaponName_Glock) return Weapon_Glock; else if (weaponName == Std.WeaponName_AmmoBox) return Weapon_AmmoBox; else if (weaponName == Std.WeaponName_HpBox) return Weapon_HpBox; else if (weaponName == Std.WeaponName_LMG) return Weapon_LMG; else if (weaponName == Std.WeaponName_M1911) return Weapon_M1911; else if (weaponName == Std.WeaponName_Rocket) return Weapon_Rocket; else if (weaponName == Std.WeaponName_SgM870) return Weapon_SgM870; else if (weaponName == Std.WeaponName_SgSpas12) return Weapon_SgSpas12; else if (weaponName == Std.WeaponName_SmgMp5) return Weapon_SmgMp5; else if (weaponName == Std.WeaponName_SmgTom) return Weapon_SmgTom; else if (weaponName == Std.WeaponName_SmgUzi) return Weapon_SmgUzi; else if (weaponName == Std.WeaponName_Sniper98k) return Weapon_Sniper98k; else if (weaponName == Std.WeaponName_SniperCheyTac) return Weapon_SniperCheyTac; else if (weaponName == Std.WeaponName_SniperM24) return Weapon_SniperM24;
            return Weapon_M4;
        }
        HideAllWeapon() {
            if (this.weapon1Src) this.weapon1Src.enabled = false;
            if (this.weapon2Src) this.weapon2Src.enabled = false;
            if (this.weapon3Src) this.weapon3Src.enabled = false;
            if (this.weapon4Src) this.weapon4Src.enabled = false;
            this.weapon1Parent.active = this.weapon2Parent.active = this.weapon3Parent.active = this.weapon4Parent.active = false;
        }
        ChangeWeapon(weaponIndex) {
            let playerData = PlayerLocalDataMgr.Instance.GetPlayerData();
            this.HideAllWeapon();
            if (weaponIndex == 1 && playerData.equipWeapon1Name != Std.WeaponName_None) {
                if (this.weapon1Src) {
                    this.weapon1Src.enabled = true;
                    this.weapon1Parent.active = true;
                    WeaponMgr.Instance.SetNowUsingWeapon(this.weapon1Src);
                }
            } else if (weaponIndex == 2 && playerData.equipWeapon2Name != Std.WeaponName_None) {
                if (this.weapon2Src) {
                    this.weapon2Src.enabled = true;
                    this.weapon2Parent.active = true;
                    WeaponMgr.Instance.SetNowUsingWeapon(this.weapon2Src);
                }
            } else if (weaponIndex == 3 && playerData.equipWeapon3Name != Std.WeaponName_None) {
                if (this.weapon3Src) {
                    this.weapon3Src.enabled = true;
                    this.weapon3Parent.active = true;
                    WeaponMgr.Instance.SetNowUsingWeapon(this.weapon3Src);
                }
            } else if (weaponIndex == 4 && playerData.equipWeapon4Name != Std.WeaponName_None) {
                if (this.weapon4Src) {
                    this.weapon4Src.enabled = true;
                    this.weapon4Parent.active = true;
                    WeaponMgr.Instance.SetNowUsingWeapon(this.weapon4Src);
                }
            }
        }
    }
    class LookRoter extends Laya.Script {
        constructor() {
            super();
            this.rotSpeedMul = 1;
            this.mouseSpeedAimMul = 1;
            this.mouseSpeedSniperAimMul = 1;
            this.mouseSensityvity = 1;
            this.touchId = 0;
            this.yawPitchRoll = new Laya.Vector3();
            this.tempRotationZ = new Laya.Quaternion();
            this.minMaxEulerX = new Laya.Vector2(-50, 50);
            this.mouseSensityvity = GameLevelMgr.Instance.GetMouseSensityvity();
            this.verticalRotaionSpeed = 3e-4 * this.rotSpeedMul;
            this.horizontalRotaionSpeed = .03 * this.rotSpeedMul;
            this.verticalRotaionOffset = 0;
            this.horizontalRotaionOffset = 0;
        }
        onAwake() {
            this.imgRotRect = Laya.stage;
            this.imgRotRect.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown);
            this.imgRotRect.on(Laya.Event.MOUSE_UP, this, this.OnMouseUpOrOut);
            this.imgRotRect.on(Laya.Event.MOUSE_MOVE, this, this.OnMoveDoRot);
            Dispatcher.AddListener(EventType.OnMouseSensitivityMulChange, this, this.OnMouseSensitivityMulChange);
        }
        onDestroy() {
            this.imgRotRect.off(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown);
            this.imgRotRect.off(Laya.Event.MOUSE_UP, this, this.OnMouseUpOrOut);
            this.imgRotRect.off(Laya.Event.MOUSE_MOVE, this, this.OnMoveDoRot);
            Dispatcher.RemoveListener(EventType.OnMouseSensitivityMulChange, this, this.OnMouseSensitivityMulChange);
        }
        onUpdate() {
            this.mouseSpeedAimMul = InputMgr.Instance.GetIsAim() == true ? .5 : 1;
            if (WeaponMgr.Instance.GetNowUsingWeapon() && WeaponMgr.Instance.GetNowUsingWeapon().weaponTypeEnum == WeaponTypeEnum.Sniper && InputMgr.Instance.GetIsAim()) {
                this.mouseSpeedSniperAimMul = .5;
            } else {
                this.mouseSpeedSniperAimMul = 1;
            }
        }
        onLateUpdate() {
            if (this.lastMouseLateX == this.lastMouseX && this.lastMouseLateY == this.lastMouseY && this.isMouseDown == true) {
                this.verticalRotaionOffset = 0;
                this.horizontalRotaionOffset = 0;
                return;
            }
            this.lastMouseLateX = this.lastMouseX;
            this.lastMouseLateY = this.lastMouseY;
        }
        GetRotOffsetXY() {
            return Tool.V2(this.horizontalRotaionOffset, this.verticalRotaionOffset);
        }
        SetRotSp3dTarget(horSp3d, verSp3d) {
            this.rotSp3d = verSp3d;
            this.playerRoot = horSp3d;
        }
        OnMouseSensitivityMulChange(v) {
            if (v <= .1) {
                v = .1;
            }
            if (v >= 1) {
                v = 1;
            }
            this.mouseSensityvity = v;
        }
        IsDrag() {
            return this.isMouseDown;
        }
        OnMoveDoRot(e) {
            if (this.touchId == e.touchId) {
                let elapsedTime = Laya.timer.delta;
                if (!isNaN(this.lastMouseX) && !isNaN(this.lastMouseY) && this.isMouseDown && this.playerRoot && this.playerRoot.transform) {
                    let offsetX = this.imgRotRect.mouseX - this.lastMouseX;
                    let offsetY = this.imgRotRect.mouseY - this.lastMouseY;
                    let yprElem = this.yawPitchRoll;
                    this.playerRoot.transform.localRotationEulerY -= offsetX * this.horizontalRotaionSpeed * elapsedTime * this.mouseSensityvity * this.mouseSpeedAimMul * this.mouseSpeedSniperAimMul;
                    yprElem.y += offsetY * this.verticalRotaionSpeed * elapsedTime * this.mouseSensityvity * this.mouseSpeedAimMul * this.mouseSpeedSniperAimMul;
                    this.verticalRotaionOffset = offsetY;
                    this.horizontalRotaionOffset = offsetX;
                    this.UpdateRotation();
                }
                this.lastMouseX = this.imgRotRect.mouseX;
                this.lastMouseY = this.imgRotRect.mouseY;
                this.ClampEulerX();
            }
        }
        OnMouseDown(e) {
            if (e.stageX < Laya.stage.width / 2) return;
            if (!this.rotSp3d || !this.rotSp3d.transform) return;
            this.touchId = e.touchId;
            this.rotSp3d.transform.localRotation.getYawPitchRoll(this.yawPitchRoll);
            this.lastMouseX = this.imgRotRect.mouseX;
            this.lastMouseY = this.imgRotRect.mouseY;
            this.isMouseDown = true;
        }
        OnMouseUpOrOut(e) {
            if (this.touchId == e.touchId) {
                this.isMouseDown = false;
                this.verticalRotaionOffset = 0;
                this.horizontalRotaionOffset = 0;
            }
        }
        UpdateRotation() {
            if (!this.rotSp3d || !this.rotSp3d.transform || Math.abs(this.yawPitchRoll.y) >= 1.5) return;
            Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ);
            this.tempRotationZ.cloneTo(this.rotSp3d.transform.localRotation);
            this.rotSp3d.transform.localRotation = this.rotSp3d.transform.localRotation;
        }
        ClampEulerX() {
            if (!this.rotSp3d || !this.rotSp3d.transform) return;
            this.rotSp3d.transform.localRotationEulerX = Tool.ClampNum(this.rotSp3d.transform.localRotationEulerX, this.minMaxEulerX.x, this.minMaxEulerX.y);
        }
    }
    var CharacterController = Laya.CharacterController;
    class PlayerCtl extends Laya.Script3D {
        constructor() {
            super();
            this.moveSpeed = 5;
            this.jumpSpeed = 10;
            this.footstepTimer = 0;
            this.isJumping = false;
            this.isCrouch = false;
            this.isRun = false;
            this.canPlayFootstep = true;
            this.isPlayingAimAnm = false;
            this.isMatchOver = false;
            this.canSelfKill = true;
            this.soundPathArray = ["res/Sounds/fs1.mp3", "res/Sounds/fs2.mp3", "res/Sounds/fs3.mp3", "res/Sounds/fs4.mp3"];
            this.GuoGuan = false;
        }
        onAwake() {
            this.InitPlayer();
            Dispatcher.AddListener(EventType.OnPlayerAim, this, this.OnPlayerAim);
            Dispatcher.AddListener(EventType.OnPlayerQuitSniperAim, this, this.OnPlayerQuitSniperAim);
            Dispatcher.AddListener(EventType.OnPlayerJump, this, this.OnPlayerJump);
            Dispatcher.AddListener(EventType.OnPlayerCrouch, this, this.OnPlayerCrouch);
            Dispatcher.AddListener(EventType.OnRunBtnDown, this, this.OnRunBtnDown);
            Dispatcher.AddListener(EventType.OnRunBtnUp, this, this.OnRunBtnUp);
            Dispatcher.AddListener(EventType.OnReloadEnd, this, this.BackToIdleOrMoveState);
            Dispatcher.AddListener(EventType.OnChangeWeapon, this, this.OnChangeWeapon);
            Dispatcher.AddListener(EventType.OnPlayerRelaseFire, this, this.OnPlayerRelaseFire);
            Dispatcher.AddListener(EventType.OnMatchOver, this, this.OnMatchOver);
            Dispatcher.AddListener(EventType.OnPlayerDownViecle, this, this.OnPlayerDownViecle);
            Dispatcher.AddListener(EventType.MuTouRenFire, this, this.MuTouRenFire);
            Dispatcher.AddListener(EventType.YY_End, this, this.YY_End);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnPlayerAim, this, this.OnPlayerAim);
            Dispatcher.RemoveListener(EventType.OnPlayerQuitSniperAim, this, this.OnPlayerQuitSniperAim);
            Dispatcher.RemoveListener(EventType.OnPlayerJump, this, this.OnPlayerJump);
            Dispatcher.RemoveListener(EventType.OnPlayerCrouch, this, this.OnPlayerCrouch);
            Dispatcher.RemoveListener(EventType.OnRunBtnDown, this, this.OnRunBtnDown);
            Dispatcher.RemoveListener(EventType.OnRunBtnUp, this, this.OnRunBtnUp);
            Dispatcher.RemoveListener(EventType.OnReloadEnd, this, this.BackToIdleOrMoveState);
            Dispatcher.RemoveListener(EventType.OnChangeWeapon, this, this.OnChangeWeapon);
            Dispatcher.RemoveListener(EventType.OnPlayerRelaseFire, this, this.OnPlayerRelaseFire);
            Dispatcher.RemoveListener(EventType.OnMatchOver, this, this.OnMatchOver);
            Dispatcher.RemoveListener(EventType.OnPlayerDownViecle, this, this.OnPlayerDownViecle);
            Dispatcher.RemoveListener(EventType.MuTouRenFire, this, this.MuTouRenFire);
            Dispatcher.RemoveListener(EventType.YY_End, this, this.YY_End);
            Tool.ClearTimerAndTween(this);
        }
        onUpdate() {
            if (ViecleMgr.Instance.GetIsPlayerRidingViecle() || this.isMatchOver || this.GuoGuan) {
                this.cc.move(Tool.V3Zero());
                return;
            }
            this.PlayerMove();
            this.PlayFootStepSound();
            this.UpdateCrouchHeight();
            this.UpdateAimPosAndFov();
        }
        InitPlayer() {
            SdkManager.Instance.HideBanner();
            this.curSc2d = SceneMgr.Instance.GetCurSc2D();
            this.imgPlayerCtlBg = this.curSc2d.getChildByName("imgPlayerCtlBg");
            this.imgPlayerCtlBtnsBg = this.imgPlayerCtlBg.getChildByName("imgPlayerCtlBtnsBg");
            this.joyStick = this.imgPlayerCtlBtnsBg.getChildByName("imgJoyStickRect").getComponent(JoyStick);
            this.imgCrossHairBg = this.curSc2d.getChildByName("imgCrossHairBg");
            this.imgSniperAimIcon = Tool.GetImg(this.curSc2d, "imgSniperAimIcon");
            this.selfSp3d = this.owner;
            let nodesMap = Tool.GetAllChildrenMap(this.selfSp3d);
            this.playerCam = Tool.GetNodeByMap("PlayerCam", nodesMap);
            this.playerMeshOffset = Tool.GetNodeByMap("PlayerMeshOffset", nodesMap);
            this.crouchOffsetHolder = Tool.GetNodeByMap("CrouchOffsetHolder", nodesMap);
            this.playerMeshRoot = Tool.GetNodeByMap("PlayerMeshRoot", nodesMap);
            this.playerAnmt = this.playerMeshRoot.getComponent(Laya.Animator);
            if (DataTool.GetInt(Std.Setting_IsBloomOnKey) == 1) {
                VfxTool.BloomEfx(this.playerCam, this);
            }
            WeaponMgr.Instance.SetPlayerCam(this.playerCam);
            WeaponMgr.Instance.SetPlayeAnimator(this.playerAnmt);
            AISpawnerMgr.Instance.AddPlayerToPlayerTeam(this.selfSp3d);
            this.playerAnmt.play(Std.Anm_PlayerIdleName);
            this.InitPlayerCam(this.playerCam);
            this.InitJoyStickCb();
            Tool.GetNodeByMap("RecoilHolder", nodesMap).addComponent(WeaponRecoil);
            Tool.GetNodeByMap("CamShakeHolder", nodesMap).addComponent(CameraShake);
            if (Std.byWeapon) {
                Tool.GetNodeByMap("WeaponsRoot", nodesMap).addComponent(WeaponSpawner);
            }
            let weaponSway = Tool.GetNodeByMap("WeaponSwayHolder", nodesMap).addComponent(WeaponSway);
            this.lookRoter = SceneMgr.Instance.GetCurSc2D().getChildByName("imgPlayerCtlBg").getComponent(LookRoter);
            weaponSway.InitWeaponSway(this.lookRoter);
            this.lookRoter.SetRotSp3dTarget(this.selfSp3d, Tool.GetNodeByMap("CamHolder", nodesMap));
            this.InitCharacterController();
            if (PlayerCtl.isFisrt) {
                PlayerCtl.isFisrt = false;
            } else {
                if (DataTool.GetInt(Std.weaponBanner) == 0 || SdkManager.Instance.getIsXXChannel(SdkChannel.WeiXinSdk)) {
                    DataTool.SetKv(Std.weaponBanner, 1);
                }
            }
        }
        OnPlayerDownViecle() {
            if (this.playerAnmt) {
                this.playerAnmt.crossFade(Std.Anm_PlayerIdleName, .1);
            }
        }
        OnMatchOver() {
            this.isMatchOver = true;
            this.imgSniperAimIcon.visible = false;
        }
        OnPlayerRelaseFire() {
            let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            if (!nowUsingWeapon) {
                return;
            }
            if (!nowUsingWeapon.isReloading && !this.isJumping && !InputMgr.Instance.GetIsAim() && !InputMgr.Instance.GetIsFire()) {
                if (this.joyStick.IsDrag()) {
                    if (this.isRun) {
                        this.playerAnmt.crossFade(Std.Anm_PlayerRunName, .1);
                    } else {
                        this.playerAnmt.crossFade(Std.Anm_PlayerWalkName, .1);
                    }
                } else {
                    this.playerAnmt.crossFade(Std.Anm_PlayerIdleName, .1);
                }
            }
        }
        OnChangeWeapon(weaponIndex) {
            InputMgr.Instance.SetIsAim(false);
            this.playerAnmt.crossFade(Std.Anm_PlayerDrawName, .03);
            Laya.timer.once(500, this, this.BackToIdleOrMoveState);
            Dispatcher.Event(EventType.OnPlayerQuitSniperAim);
        }
        InitPlayerCam(cam) {
            cam.nearPlane = .012;
            cam.farPlane = 500;
            cam.fieldOfView = 60;
            cam.clearFlag = 1;
        }
        BackToIdleOrMoveState() {
            if (this.joyStick.IsDrag()) {
                this.playerAnmt.crossFade(Std.Anm_PlayerWalkName, .1);
            } else {
                this.playerAnmt.crossFade(Std.Anm_PlayerIdleName, .2);
            }
        }
        OnRunBtnDown() {
            if (this.cc && this.cc.isGrounded && this.joyStick.IsDrag()) {
                this.isRun = true;
                this.playerAnmt.crossFade(Std.Anm_PlayerRunName, .2);
                InputMgr.Instance.SetIsAim(false);
            }
        }
        OnRunBtnUp() {
            if (this.cc && this.cc.isGrounded && this.isRun) {
                this.isRun = false;
                if (this.joyStick.IsDrag()) {
                    this.playerAnmt.crossFade(Std.Anm_PlayerWalkName, .2);
                } else {
                    this.playerAnmt.crossFade(Std.Anm_PlayerIdleName, .2);
                }
            }
        }
        InitJoyStickCb() {
            this.joyStick.onStickDownCb = (() => {
                let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
                if (nowUsingWeapon && nowUsingWeapon.isReloading || this.isJumping || this.isPlayingAimAnm || InputMgr.Instance.GetIsAim()) {
                    return;
                }
                if (this.cc && this.cc.isGrounded) {
                    this.playerAnmt.crossFade(Std.Anm_PlayerWalkName, .1);
                }
            });
            this.joyStick.onStickUpOrOutCb = (() => {
                let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
                if (nowUsingWeapon && nowUsingWeapon.isReloading || this.isJumping || this.isPlayingAimAnm || InputMgr.Instance.GetIsAim()) {
                    return;
                }
                this.playerAnmt.crossFade(Std.Anm_PlayerIdleName, .2);
            });
        }
        InitCharacterController() {
            this.cc = this.selfSp3d.addComponent(CharacterController);
            let colShape = new Laya.CapsuleColliderShape(.5, 2);
            colShape.localOffset = Tool.V3(0, 0, 0);
            this.cc.colliderShape = colShape;
        }
        PlayerMove() {
            if (!InputMgr.Instance.GetCanInput() || !this.cc || !this.selfSp3d || !this.selfSp3d.transform) {
                return;
            }
            let runMul = this.isRun == true ? 2.5 : 1;
            let croucOrAimhMul = this.isCrouch == true || InputMgr.Instance.GetIsAim() == true ? .8 : 1;
            let totalMul = runMul * croucOrAimhMul;
            let joyStickDir = this.joyStick.GetDir();
            let stickDirX0Z = Tool.V3(-joyStickDir.x * this.moveSpeed * Tool.DeltaTime() * totalMul, 0, -joyStickDir.y * this.moveSpeed * Tool.DeltaTime() * totalMul);
            let outPlayerForwardDir = Tool.QuatMulV3(this.selfSp3d.transform.localRotation, stickDirX0Z);
            outPlayerForwardDir = this.joyStick.IsDrag() ? outPlayerForwardDir : Tool.V3Zero();
            this.cc.move(outPlayerForwardDir);
        }
        PlayFootStepSound() {
            if (!InputMgr.Instance.GetCanInput() || !this.cc) {
                return;
            }
            let footstepInterval = this.isRun == true ? .29 : .31;
            let soundVolume = this.isRun == true ? .4 : .2;
            if (this.cc.isGrounded && this.joyStick.IsDrag()) {
                this.footstepTimer += Tool.DeltaTime();
                if (this.footstepTimer >= footstepInterval) {
                    this.canPlayFootstep = true;
                    if (this.canPlayFootstep) {
                        let ftSoundCN = SoundTool.PlaySfx(this.soundPathArray[Tool.RandomInt(this.soundPathArray.length)]);
                        if (ftSoundCN) {
                            ftSoundCN.volume = soundVolume;
                        }
                        this.footstepTimer = 0;
                        this.canPlayFootstep = false;
                    }
                }
            }
        }
        OnPlayerJump() {
            if (!this.cc || !this.cc.isGrounded || this.isJumping) {
                return;
            }
            InputMgr.Instance.SetIsAim(false);
            if (WeaponMgr.Instance.GetNowUsingWeapon()) {
                if (WeaponMgr.Instance.GetNowUsingWeapon().weaponTypeEnum == WeaponTypeEnum.Sniper) {
                    Dispatcher.Event(EventType.OnPlayerQuitSniperAim);
                }
            }
            Dispatcher.Event(EventType.OnPlayerJumpInAir);
            this.isJumping = true;
            this.isRun = false;
            InputMgr.Instance.SetIsJumping(true);
            Laya.timer.once(800, this, () => {
                this.isJumping = false;
                InputMgr.Instance.SetIsJumping(false);
                if (this.joyStick.IsDrag()) {
                    this.playerAnmt.crossFade(Std.Anm_PlayerWalkName, .1);
                } else {
                    this.playerAnmt.crossFade(Std.Anm_PlayerIdleName, .2);
                }
            });
            SoundTool.PlaySfxByName("jump");
            this.playerAnmt.crossFade(Std.Anm_PlayerJumpName, .05);
            this.cc.jump(Tool.V3(0, this.jumpSpeed, 0));
        }
        UpdateAimPosAndFov() {
            if (!this.playerMeshOffset || !this.playerMeshOffset.transform || !this.playerCam || !WeaponMgr.Instance.GetNowUsingWeapon()) {
                return;
            }
            if (InputMgr.Instance.GetIsAim()) {
                this.imgCrossHairBg.visible = false;
                let targetFov = WeaponMgr.Instance.GetNowUsingWeapon().weaponTypeEnum == WeaponTypeEnum.Sniper ? 20 : 45;
                this.playerCam.fieldOfView = Tool.LerpNum(this.playerCam.fieldOfView, targetFov, Tool.DeltaTime() * 12);
                this.playerMeshOffset.transform.localPosition = Tool.LerpV3(this.playerMeshOffset.transform.localPosition, WeaponMgr.Instance.GetNowUsingWeapon().aimPos, Tool.DeltaTime() * 15);
            } else {
                this.imgCrossHairBg.visible = true;
                this.playerCam.fieldOfView = Tool.LerpNum(this.playerCam.fieldOfView, 60, Tool.DeltaTime() * 20);
                this.playerMeshOffset.transform.localPosition = Tool.LerpV3(this.playerMeshOffset.transform.localPosition, Tool.V3(0, -.15, 0), Tool.DeltaTime() * 15);
            }
        }
        OnPlayerQuitSniperAim() {
            if (this.imgSniperAimIcon) {
                this.imgSniperAimIcon.visible = false;
                this.playerMeshRoot.transform.localScale = Tool.V3One();
            }
        }
        OnPlayerAim() {
            if (!this.cc || !this.cc.isGrounded || this.isPlayingAimAnm) {
                return;
            }
            SoundTool.PlaySfxByName("aim");
            this.isPlayingAimAnm = true;
            this.isRun = false;
            Laya.timer.once(300, this, () => {
                this.isPlayingAimAnm = false;
            });
            let isAim = !InputMgr.Instance.GetIsAim();
            InputMgr.Instance.SetIsAim(isAim);
            if (this.imgSniperAimIcon && WeaponMgr.Instance.GetNowUsingWeapon().weaponTypeEnum == WeaponTypeEnum.Sniper) {
                this.imgSniperAimIcon.visible = isAim;
                this.playerMeshRoot.transform.localScale = isAim == true ? Tool.V3Zero() : Tool.V3One();
            }
            if (InputMgr.Instance.GetIsAim()) {
                this.playerAnmt.crossFade(Std.Anm_PlayerAimName, .08);
            } else {
                if (this.joyStick.IsDrag()) {
                    this.playerAnmt.crossFade(Std.Anm_PlayerWalkName, .2);
                } else {
                    this.playerAnmt.crossFade(Std.Anm_PlayerIdleName, .3);
                }
            }
        }
        OnPlayerCrouch() {
            if (!this.cc || !this.cc.isGrounded) {
                return;
            }
            this.isCrouch = !this.isCrouch;
            if (this.isCrouch == true) {
                this.isRun = false;
            }
        }
        UpdateCrouchHeight() {
            if (!this.crouchOffsetHolder || !this.crouchOffsetHolder.transform) {
                return;
            }
            if (this.isCrouch) {
                this.crouchOffsetHolder.transform.localPositionY = Tool.LerpNum(this.crouchOffsetHolder.transform.localPositionY, -.5, Tool.DeltaTime() * 10);
            } else {
                this.crouchOffsetHolder.transform.localPositionY = Tool.LerpNum(this.crouchOffsetHolder.transform.localPositionY, 0, Tool.DeltaTime() * 10);
            }
        }
        MuTouRenFire() {
            if (this.GuoGuan || PlayerInGameDataMgr.Instance.GetPlayerCurHp() <= 0) return;
            if ((this.joyStick.IsDrag() || this.lookRoter.IsDrag()) && PlayerInGameDataMgr.Instance.GetPlayerCurHp() > 0) {
                SoundTool.PlaySfxByName("YouYu_Hit");
                Dispatcher.Event(EventType.OnEnemyHitPlayer, 1e4);
                UIDataMidLyaer.YYModeSettlect = false;
                Dispatcher.Event(EventType.YY_End);
            }
        }
        YY_End() {
            if (!this.GuoGuan) {
                SoundTool.PlaySfxByName("YouYu_Hit");
                UIDataMidLyaer.YYModeSettlect = false;
                Dispatcher.Event(EventType.OnEnemyHitPlayer, 1e4);
            }
        }
        onCollisionStay(col) {
            if (!this.canSelfKill) {
                return;
            }
            if (col.other.owner.name == Std.ColName_DieCol) {
                Dispatcher.Event(EventType.OnPlayerSelfKill);
                this.canSelfKill = false;
            }
        }
        onTriggerEnter(other) {
            if (other.owner.name == "GameEnd") {
                this.GuoGuan = true;
                UIDataMidLyaer.YYModeSettlect = true;
                Dispatcher.Event(EventType.YY_End, true);
            } else if (other.owner.name == "Floor") {
                Dispatcher.Event(EventType.OnEnemyHitPlayer, 1e4);
                UIDataMidLyaer.YYModeSettlect = false;
                Dispatcher.Event(EventType.YY_End);
            }
        }
    }
    PlayerCtl.isFisrt = true;
    class TryUseWeaponTool {
        static InitTryUseWeapon() {
            let randWeaponName = WeaponInfoMgr.Instance.GetCanTryUseWeaponName();
            if (randWeaponName == Std.WeaponName_None) {
                Dispatcher.Event(EventType.OnDoSpawnPlayer);
                return;
            }
            if (UIDataMidLyaer.TryUse_TxtData != Std.WeaponName_None) {
                Dispatcher.Event(EventType.OnDoSpawnPlayer);
                return;
            }
            if (UIDataMidLyaer.TryUse_ShowTimes >= 1) {
                Dispatcher.Event(EventType.OnDoSpawnPlayer);
                return;
            }
            UIDataMidLyaer.TryUse_ShowTimes += 1;
            SdkManager.Instance.HideBanner();
            PopMsgTool.ShowTryUsePanel(randWeaponName, () => {
                GenGamePlayTool.PlayUnlockSfx();
                PopMsgTool.PopMsg("试用武器已装备！");
                UIDataMidLyaer.TryUse_IsTryUsing = true;
                DataTool.SetKv(Std.Local_EquipWeapon4Key, randWeaponName);
                PlayerLocalDataMgr.Instance.RefreshPlayerData();
                Dispatcher.Event(EventType.OnWatchAdTryUseWeapon);
                Dispatcher.Event(EventType.OnDoSpawnPlayer);
            }, () => {
                UIDataMidLyaer.TryUse_IsTryUsing = false;
                UIDataMidLyaer.TryUse_TxtData = Std.WeaponName_None;
                Dispatcher.Event(EventType.OnDoSpawnPlayer);
            });
        }
        static TryUseWeaponZombieModeMidWay(cb) {
            let randWeaponName = WeaponInfoMgr.Instance.GetCanTryUseWeaponName();
            SdkManager.Instance.HideBanner();
            PopMsgTool.ShowTryUsePanel(randWeaponName, () => {
                cb();
                GenGamePlayTool.PlayUnlockSfx();
                PopMsgTool.PopMsg("试用武器已装备！");
                UIDataMidLyaer.TryUse_IsTryUsing = true;
                DataTool.SetKv(Std.Local_EquipWeapon4Key, randWeaponName);
                PlayerLocalDataMgr.Instance.RefreshPlayerData();
                Dispatcher.Event(EventType.OnWatchAdTryUseWeapon);
                Dispatcher.Event(EventType.OnDoSpawnPlayer);
            }, () => {
                UIDataMidLyaer.TryUse_IsTryUsing = false;
                UIDataMidLyaer.TryUse_TxtData = Std.WeaponName_None;
            });
        }
    }
    class GuideMgr extends Laya.Script {
        constructor() {
            super();
            this.guideStep = 0;
            this.guideOverCb = (() => { });
            this.guideSteps = [{
                x: 363.5,
                y: 317,
                radius: 80,
                tip: "General/help_pic_box.png",
                tipx: 200,
                tipy: 250,
                tipStr: ""
            }];
            GuideMgr.Instance = this;
        }
        onAwake() {
            this.Init();
            this.HideGudie();
        }
        InitDataAndShowGuide(guideSteps, guideOverCb = (() => { })) {
            if (!GuideMgr.JoinGuide) {
                guideOverCb();
                return;
            }
            this.guideSteps = guideSteps;
            this.guideOverCb = guideOverCb;
            this.RestStep();
            this.NextStep();
            this.ShowGuide();
        }
        Init() {
            this.gameContainer = new Laya.Box();
            this.gameContainer.left = this.gameContainer.right = this.gameContainer.top = this.gameContainer.bottom = 0;
            Laya.stage.addChild(this.gameContainer);
            this.guideContainer = new Laya.Sprite();
            this.guideContainer.cacheAs = "bitmap";
            Laya.stage.addChild(this.guideContainer);
            this.gameContainer.on("click", this, this.NextStep);
            this.maskArea = new Laya.Sprite();
            this.maskArea.alpha = .8;
            this.maskArea.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
            this.guideContainer.addChild(this.maskArea);
            this.interactionArea = new Laya.Sprite();
            this.interactionArea.blendMode = "destination-out";
            this.guideContainer.addChild(this.interactionArea);
            this.hitArea = new Laya.HitArea();
            this.hitArea.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
            this.guideContainer.hitArea = this.hitArea;
            this.guideContainer.mouseEnabled = true;
            this.tipContainer = new Laya.Image();
            this.tipStrLabel = new Laya.Label();
            this.tipContainer.addChild(this.tipStrLabel);
            this.tipStrLabel.italic = false;
            this.tipStrLabel.font = "SimHei";
            this.tipStrLabel.fontSize = 20;
            this.tipStrLabel.color = "#ffffff";
            this.tipStrLabel.overflow = "visible";
            this.tipStrLabel.wordWrap = true;
            this.tipStrLabel.leading = 5;
            this.tipStrLabel.stroke = 2;
            this.tipStrLabel.strokeColor = "#000000";
            this.tipStrLabel.width = 255;
            this.tipStrLabel.height = 70;
            this.tipStrLabel.centerX = 45;
            this.tipStrLabel.centerY = 15;
            Laya.stage.addChild(this.tipContainer);
        }
        ShowGuide() {
            this.guideContainer.visible = true;
            this.tipContainer.visible = true;
            this.gameContainer.visible = true;
        }
        HideGudie() {
            this.guideContainer.visible = false;
            this.tipContainer.visible = false;
            this.gameContainer.visible = false;
        }
        RestStep() {
            this.guideStep = 0;
        }
        NextStep() {
            if (this.guideStep == this.guideSteps.length) {
                this.guideOverCb();
                this.HideGudie();
            } else {
                let step = this.guideSteps[this.guideStep++];
                this.hitArea.unHit.clear();
                this.hitArea.unHit.drawCircle(step.x, step.y, step.radius, "#000000");
                this.interactionArea.graphics.clear();
                this.interactionArea.graphics.drawCircle(step.x, step.y, step.radius, "#000000");
                this.tipContainer.skin = step.tip;
                this.tipStrLabel.text = step.tipStr;
                this.tipContainer.pos(step.tipx, step.tipy);
            }
        }
    }
    GuideMgr.JoinGuide = false;
    class RewardsPanel extends Lq_UIBase {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
            this.owner.width = Std.ui_width;
            this.owner.height = Std.ui_height;
            this.owner.pos(0, 0);
            this.video = this.GetObj("btnWatchAdTryUse");
            this.videosp = this.video.getChildAt(0);
            this.btn_Close = this.GetObj("btn_Close");
            Tool.AddBtnEventScale(this.video, this, () => {
                this.VideoReward();
            });
            Tool.AddBtnEventScale(this.btn_Close, this, () => {
                this.CloseUI();
            });
        }
        onEnable() {
            SdkManager.Instance.HideBanner();
            this.randWeaponName = WeaponInfoMgr.Instance.GetCanTryUseWeaponName();
            this.GetObj("txtDesc").text = `观看视频解锁特殊武器【 ${WeaponInfoMgr.Instance.GetWeaponChnNameByName(this.randWeaponName)}】，极大地提升你的火力！本次观看视频会累计解锁所需次数。`;
            if (SdkManager.Instance.GetSwitchData("p1") != 0) {
                this.videosp.visible = false;
                this.btn_Close.visible = false;
            } else {
                this.videosp.visible = true;
                this.btn_Close.visible = true;
            }
            if (SdkManager.Instance.GetSwitchData("p5") <= 0) return;
            Laya.timer.once(SdkManager.Instance.GetSwitchData("p5") * 1e3, this, this.ShowBanner);
        }
        VideoReward() {
            SdkManager.Instance.ShowVideoAd(() => {
                GenGamePlayTool.PlayUnlockSfx();
                DataTool.SetKv(Std.Local_EquipWeapon4Key, this.randWeaponName);
                PlayerLocalDataMgr.Instance.RefreshPlayerData();
                DataTool.ModifyInt(WeaponInfoMgr.Instance.GetWatchAdUnlockLocalKey(this.randWeaponName), 1);
                this.CloseUI();
            }, () => {
                this.videosp.visible = true;
                this.btn_Close.visible = true;
            });
        }
        ShowBanner() {
            SdkManager.Instance.ShowBanner("center");
            Laya.timer.once(1100, this, () => {
                SdkManager.Instance.HideBanner();
            });
        }
        CloseUI() {
            Laya.timer.clear(this, this.ShowBanner);
            Laya.timer.clearAll(this);
            SdkManager.Instance.HideBanner();
            super.CloseUI();
        }
    }
    class SettlementPanel extends Lq_UIBase {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
            this.owner.width = Std.ui_width;
            this.owner.height = Std.ui_height;
            this.owner.pos(0, 0);
            Laya.Tween.from(this.GetObj("view_left"), {
                left: -1e3
            }, 250, Laya.Ease.linearNone);
            Laya.Tween.from(this.GetObj("view_right"), {
                right: -1e3
            }, 250, Laya.Ease.linearNone);
            Laya.Tween.from(this.GetObj("view_button"), {
                bottom: -150
            }, 250, Laya.Ease.linearNone);
            this.AddBtnEventScaleFx("btn_draw", () => {
                this.GiveAward(1);
                Dispatcher.Event(EventType.OnBackToMenu, this.owner.name);
            });
            this.AddBtnEventScaleFx("btn_video", () => {
                let battleEndData = GameLevelMgr.Instance.GetGameEndData();
                if (!battleEndData) {
                    return;
                }
                PopMsgTool.ShowConfirmPanel("五倍奖励", "是否观看视频获得五倍奖励？\n金块：" + battleEndData.goldCount * 5 + "   蓝钻：" + battleEndData.blueDiamondCount * 5, () => {
                    CountSdkMgr.Instance.TrackEvent("videStart17");
                    SdkManager.Instance.ShowVideoAd(() => {
                        CountSdkMgr.Instance.TrackEvent("videComplete17");
                        this.GiveAward(5);
                        Dispatcher.Event(EventType.OnBackToMenu, this.owner.name);
                    });
                });
            });
            this.AddBtnEventScaleFx("btn_Close", () => {
                this.GiveAward(1);
                Dispatcher.Event(EventType.OnBackToMenu, this.owner.name);
            });
            if (Std.m5qtUI) {
                SdkManager.Instance.ShowVideoAd(() => {
                    PopMsgTool.ShowSmallItemGetTip(500, CurrencyTypeEnum.Gold);
                    DataTool.ModifyInt(Std.Currency_GoldKey, 500);
                    CountSdkMgr.Instance.TrackEvent("videComplete28");
                });
                Std.m5qtUI = false;
            }
        }
        onEnable() {
            this.gameEndData = GameLevelMgr.Instance.GetGameEndData();
            switch (this.gameEndData.gameMode) {
                case 0:
                    this.GetObj("img_icon").skin = this.gameEndData.gameWin ? "GameOver/BattleMode_Red.png" : "GameOver/BattleMode_Blue.png";
                    this.GetObj("img_pic").skin = this.gameEndData.gameWin ? "GameOver/BattleRed.png" : "GameOver/BattleBule.png";
                    break;
  
                case 1:
                    this.GetObj("img_icon").skin = this.gameEndData.gameWin ? "GameOver/ZombieMode_true.png" : "GameOver/ZombieMode_false.png";
                    this.GetObj("img_pic").skin = "GameOver/Zombie.png";
                    break;
  
                case 2:
                    this.GetObj("img_icon").skin = this.gameEndData.gameWin ? "GameOver/YYMode_true.png" : "GameOver/YYMode_false.png";
                    this.GetObj("img_pic").skin = "GameOver/YY.png";
                    break;
            }
            this.GetObj("txt_battleTime").text = "" + this.gameEndData.battleTime;
            this.GetObj("txt_killCount").text = "" + this.gameEndData.killCount;
            this.GetObj("txt_dieTimes").text = "" + this.gameEndData.dieTimes;
            this.GetObj("txt_maxConstKill").text = "" + this.gameEndData.maxConstKill;
            this.GetObj("txt_goldCount").text = "+" + this.gameEndData.goldCount;
            this.GetObj("txt_blueDiamondCount").text = "+" + this.gameEndData.blueDiamondCount;
            this.GetObj("txt_cupCount").text = "+" + this.gameEndData.cupCount;
            SdkManager.Instance.ShowBanner("left");
            UIMgr.Instance.OpenUI(RewardsPanel);
  
        }
        GiveAward(is5Ad) {
            let goldCount = this.gameEndData.goldCount * is5Ad;
            let blueDiamondCount = this.gameEndData.blueDiamondCount * is5Ad;
            DataTool.ModifyInt(Std.Currency_GoldKey, this.gameEndData.goldCount * is5Ad);
            DataTool.ModifyInt(Std.Currency_BlueDiamondKey, this.gameEndData.blueDiamondCount * is5Ad);
            PopMsgTool.ShowSmallItemGetTipToStage(goldCount, CurrencyTypeEnum.Gold);
            Laya.timer.once(200, null, () => {
                PopMsgTool.ShowSmallItemGetTipToStage(blueDiamondCount, CurrencyTypeEnum.BlueDiamond);
            });
        }
    }
    class TreasureChestPanel extends UIBase {
        constructor() {
            super();
            this.clickNum = 0;
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.SetVisible("btnOpenAgainAd", false);
            this.SetVisible("btnClose", false);
            this.imgRot = this.GetImg("imgRoter");
            this.btn_open = this.GetBtn("btnOpen");
            if (!SdkManager.Instance.android233) {
                SdkManager.Instance.ShowBanner("left");
            }
        }
        onStart() {
            SdkManager.Instance.HideBanner();
            this.AddBtnEventScaleFx("btnOpenAgainAd", () => {
                CountSdkMgr.Instance.TrackEvent("videStart20");
                SdkManager.Instance.ShowVideoAd(() => {
                    this.GetBtn("btnOpenAgainAd").disabled = true;
                    SdkManager.Instance.HideBanner();
                    CountSdkMgr.Instance.TrackEvent("videComplete20");
                    UIDataMidLyaer.OpenTreasureChestAgainCb();
                    this.CloseUI();
                });
            });
            this.AddBtnEventScaleFx("btnClose", () => {
                SdkManager.Instance.HideBanner();
                UIDataMidLyaer.CancelTreasureChestCb();
                this.CloseUI();
            });
            if (SdkManager.Instance.GetSwitchData("p4") >= Math.random() * 100) {
                Tool.AddBtnEventScale(this.btn_open, this, () => {
                    this.wdClick();
                });
            } else {
                Tool.AddBtnEventScale(this.btn_open, this, () => {
                    this.openReward();
                });
            }
        }
        onUpdate() {
            if (!this.imgRot) {
                return;
            }
            this.imgRot.rotation += Tool.DeltaTime() * 30;
        }
        openReward() {
            UIDataMidLyaer.OpenTreasureChestCb();
            this.SetVisible("btnClose", true);
            this.SetVisible("btnOpenAgainAd", true);
            this.GetBtn("btnOpen").disabled = true;
        }
        wdClick() {
            if (0/* this.clickNum < 1 */) {
                this.clickNum += 1;
                SdkManager.Instance.ShowBanner("center");
                Laya.timer.once(1e3, this, () => {
                    SdkManager.Instance.HideBanner();
                });
                Laya.timer.once(2e3, this, () => {
                    SdkManager.Instance.ShowBanner("center");
                });
                Laya.timer.once(3e3, this, () => {
                    SdkManager.Instance.HideBanner();
                });
            } else {
                this.openReward();
            }
        }
        CloseUI() {
            SdkManager.Instance.HideBanner();
            super.CloseUI();
        }
    }
    class GameMainScViewCtlZombie extends Laya.Script {
        constructor() {
            super();
            this.maxHomeHp = 10;
            this.curHomeHp = 10;
            this.curZombieWave = 0;
            this.curWaveNeedKillCount = 0;
            this.constCurWaveNeedKillCountArray = [8, 10, 14, 16, 18, 20];
            this.perWaveDalay = 15e3;
            this.nextWaveCountTimer = 15;
            this.waveTimer = 0;
            this.canStartSubTimer = false;
            this.isMatchFail = false;
            this.isAllLevelFinish = false;
            this.canShowHomeBeAtkTip = true;
            this.canSpawnWave1 = true;
            this.hasPlayerWatchTryUseAd = false;
            this.gamePlayeTime = 0;
            this.killCount = 0;
            this.goldCount = 0;
            this.blueDiamondCount = 0;
        }
        onAwake() {
            this.GetNeed();
            this.LoadSc3D();
            Dispatcher.AddListener(EventType.OnZombieColHome, this, this.OnZombieColHome);
            Dispatcher.AddListener(EventType.OnPlayerReborn, this, this.StartZombieWave);
            Dispatcher.AddListener(EventType.OnZombieEnemyDie, this, this.OnZombieEnemyDie);
            Dispatcher.AddListener(EventType.OnWatchAdTryUseWeapon, this, this.OnWatchAdTryUseWeapon);
            this.gamePlayeTime = GameTimeMgr.Instance.GetGameTime();
            this.curHomeHp = this.maxHomeHp;
            DailyMissionMgr.Instance.On_Play2ZombieMatch();
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
            Dispatcher.RemoveListener(EventType.OnZombieColHome, this, this.OnZombieColHome);
            Dispatcher.RemoveListener(EventType.OnPlayerReborn, this, this.StartZombieWave);
            Dispatcher.RemoveListener(EventType.OnZombieEnemyDie, this, this.OnZombieEnemyDie);
            Dispatcher.RemoveListener(EventType.OnWatchAdTryUseWeapon, this, this.OnWatchAdTryUseWeapon);
        }
        onUpdate() {
            this.UpdateWaveCounter();
            this.UpdateHomeHp();
        }
        InitGuide() {
            if (DataTool.GetInt(Std.Guide_HasLearn_ZombieMode) == 0) {
                this.imgPlayerCtlBg.visible = false;
                this.imgCrossHairBg.visible = false;
                GuideMgr.Instance.InitDataAndShowGuide([{
                    x: Laya.stage.width / 2 - 20,
                    y: Laya.stage.height / 2 - 30,
                    radius: 130,
                    tip: "General/help_pic_box.png",
                    tipx: 486,
                    tipy: 422,
                    tipStr: "生化模式的目标是保护基地，不要让僵尸靠近基地！"
                }, {
                    x: Laya.stage.width / 2 + 375,
                    y: 127,
                    radius: 67,
                    tip: "General/help_pic_box.png",
                    tipx: 668,
                    tipy: 207,
                    tipStr: "这是基地的生命值，当基地生命值为0时你的任务就失败了！"
                }, {
                    x: 156,
                    y: Laya.stage.height / 2 + 50,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: 372,
                    tipy: 433,
                    tipStr: "僵尸会从桥面上向基地发起冲击，这是第一处僵尸出生点。"
                }, {
                    x: Laya.stage.width / 2,
                    y: 500,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: 335,
                    tipy: 200,
                    tipStr: "这是第二处僵尸出生点。现在拿起武器，开始战斗吧！"
                }], () => {
                    DataTool.SetKv(Std.Guide_HasLearn_ZombieMode, 1);
                    Dispatcher.Event(EventType.OnOpenSelectAllWeaponsPanel);
                    CountSdkMgr.Instance.TrackEvent("guide3");
                });
            } else {
                Dispatcher.Event(EventType.OnOpenSelectAllWeaponsPanel);
            }
        }
        SetGameOverData(isZombieModeWin) {
            this.gamePlayeTime = GameTimeMgr.Instance.GetGameTime() - this.gamePlayeTime;
            this.gamePlayeTime = Math.ceil(this.gamePlayeTime);
            this.goldCount = this.killCount * 5;
            this.blueDiamondCount = this.killCount * 2;
            GameLevelMgr.Instance.SetBattleEndData(1, isZombieModeWin, this.gamePlayeTime, this.killCount, 0, this.killCount, this.goldCount, this.blueDiamondCount, 0);
        }
        LoadSc3D() {
            ResMgr.Instance.OpenSc3D(Std.Sc3D_GameMainSc_Zombie, this, sc3d => {
                UIDataMidLyaer.IsFirstTimeInBattleSelectEquipUI = true;
                WeaponMgr.Instance.SetEvrCam(sc3d.getChildByName(Std.Other_EvrCam));
                WeaponMgr.Instance.SetMapCam(sc3d.getChildByName(Std.Map_EvrCam));
                WeaponMgr.Instance.LoadHitFx();
                this.InitGuide();
                Dispatcher.Event(EventType.OnResLoadFinishCloseLoadingUI);
            });
        }
        GetNeed() {
            let ZombieMode = Tool.GetImg(this.owner, "imgZombieWaveBg");
            ZombieMode.visible = true;
            this.imgWaveStartCountBg = Tool.GetImg(this.owner.getChildByName("imgZombieWaveBg"), "imgWaveStartCountBg");
            this.txtNextWaveComeTip = Tool.GetTxt(this.imgWaveStartCountBg, "txtNextWaveComeTip");
            this.imgProgressBar = this.owner.getChildByName("imgZombieWaveBg").getChildByName("imgProgressBg").getChildByName("imgProgressBar");
            this.imgHomeHpBg = this.owner.getChildByName("imgZombieWaveBg").getChildByName("imgZombieModeHomeHpBg").getChildByName("imgHomeHpBg");
            this.imgHomeHpBar = this.imgHomeHpBg.getChildByName("imgHomeHpBar");
            this.imgHomeInAtk = Tool.GetImg(this.owner.getChildByName("imgZombieWaveBg"), "imgHomeInAtk");
            this.imgPlayerCtlBg = Tool.GetImg(this.owner, "imgPlayerCtlBg");
            this.imgCrossHairBg = Tool.GetImg(this.owner, "imgCrossHairBg");
        }
        UpdateHomeHp() {
            this.imgHomeHpBar.width = this.imgHomeHpBg.width * (this.curHomeHp / this.maxHomeHp);
        }
        UpdateWaveCounter() {
            if (this.isMatchFail || this.isAllLevelFinish) {
                return;
            }
            if (this.canStartSubTimer == true) {
                if (this.waveTimer < 1) {
                    this.waveTimer += Tool.DeltaTime();
                    if (this.waveTimer >= 1) {
                        this.nextWaveCountTimer -= 1;
                        this.waveTimer = 0;
                    }
                }
            }
            if (this.nextWaveCountTimer <= 0) {
                this.nextWaveCountTimer = 0;
                this.imgWaveStartCountBg.visible = false;
                this.canStartSubTimer = false;
            }
            this.txtNextWaveComeTip.text = "距下一波僵尸来袭：" + this.nextWaveCountTimer;
        }
        OnWatchAdTryUseWeapon() {
            this.hasPlayerWatchTryUseAd = true;
        }
        ShowTryUsePopInGamePlay() {
            let randWeaponName = WeaponInfoMgr.Instance.GetCanTryUseWeaponName();
            if (randWeaponName == Std.WeaponName_None) {
                return;
            }
            if (this.hasPlayerWatchTryUseAd == true) {
                return;
            }
            InputMgr.Instance.SetIsFire(false);
            TryUseWeaponTool.TryUseWeaponZombieModeMidWay(() => {
                let player = SceneMgr.Instance.GetCurOpenSc3d().getChildByName(Std.Prefab_PlayerName);
                if (player) {
                    player.destroy(true);
                }
            });
        }
        OnZombieEnemyDie() {
            if (this.isMatchFail || this.isAllLevelFinish) {
                return;
            }
            if (this.curWaveNeedKillCount > 0) {
                this.curWaveNeedKillCount -= 1;
            }
            if (this.curWaveNeedKillCount <= 0) {
                SoundTool.PlaySfxByName("waveFinish");
                PopMsgTool.PopMsg("第" + this.curZombieWave + "波结束！");
                this.nextWaveCountTimer = 15;
                this.imgWaveStartCountBg.visible = true;
                this.canStartSubTimer = true;
                if (this.curZombieWave == 1) {
                    DataTool.ModifyInt(Std.Currency_GoldKey, 30);
                    PopMsgTool.ShowSmallItemGetTip(30, CurrencyTypeEnum.Gold);
                    Laya.timer.once(this.perWaveDalay, this, this.SpawnZombieWave2);
                } else if (this.curZombieWave == 2) {
                    DataTool.ModifyInt(Std.Currency_BlueDiamondKey, 20);
                    PopMsgTool.ShowSmallItemGetTip(20, CurrencyTypeEnum.BlueDiamond);
                    Laya.timer.once(this.perWaveDalay, this, this.SpawnZombieWave3);
                } else if (this.curZombieWave == 3) {
                    UIDataMidLyaer.OpenTreasureChestCb = UIDataMidLyaer.OpenTreasureChestAgainCb = (() => {
                        DataTool.ModifyInt(Std.Currency_GoldKey, 150);
                        PopMsgTool.ShowSmallItemGetTip(150, CurrencyTypeEnum.Gold);
                    });
                    UIMgr.Instance.OpenUI(TreasureChestPanel);
                    Laya.timer.once(this.perWaveDalay, this, this.SpawnZombieWave4);
                } else if (this.curZombieWave == 4) {
                    DataTool.ModifyInt(Std.Currency_GoldKey, 50);
                    PopMsgTool.ShowSmallItemGetTip(50, CurrencyTypeEnum.Gold);
                    Laya.timer.once(this.perWaveDalay, this, this.SpawnZombieWave5);
                } else if (this.curZombieWave == 5) {
                    DataTool.ModifyInt(Std.Currency_BlueDiamondKey, 30);
                    PopMsgTool.ShowSmallItemGetTip(30, CurrencyTypeEnum.BlueDiamond);
                    Laya.timer.once(this.perWaveDalay, this, this.SpawnZombieWave6);
                } else if (this.curZombieWave == 6) {
                    this.isAllLevelFinish = true;
                    this.imgWaveStartCountBg.visible = false;
                    DataTool.ModifyInt(Std.Achieve_Win1ZombieModeKey, 1);
                    DataTool.ModifyInt(Std.Achieve_Win5ZombieModeKey, 1);
                    this.SetGameOverData(true);
                    Dispatcher.Event(EventType.OnZombieModeFinish);
                    UIDataMidLyaer.OpenTreasureChestCb = (() => {
                        DataTool.ModifyInt(Std.Currency_BlueDiamondKey, 150);
                        PopMsgTool.ShowSmallItemGetTipToStage(150, CurrencyTypeEnum.BlueDiamond);
                    });
                    UIDataMidLyaer.OpenTreasureChestAgainCb = (() => {
                        DataTool.ModifyInt(Std.Currency_BlueDiamondKey, 150);
                        PopMsgTool.ShowSmallItemGetTipToStage(150, CurrencyTypeEnum.BlueDiamond);
                        UIMgr.Instance.OpenUI(SettlementPanel);
                    });
                    UIDataMidLyaer.CancelTreasureChestCb = (() => {
                        UIMgr.Instance.OpenUI(SettlementPanel);
                    });
                    UIMgr.Instance.OpenUI(TreasureChestPanel);
                }
            }
            this.imgProgressBar.width = (this.curZombieWave - 1) * 120 + 120 * ((this.constCurWaveNeedKillCountArray[this.curZombieWave - 1] - this.curWaveNeedKillCount) / this.constCurWaveNeedKillCountArray[this.curZombieWave - 1]) + 5;
            DailyMissionMgr.Instance.On_TotalKill100Zombie();
            DataTool.ModifyInt(Std.Achieve_Kill30ZombieKey, 1);
            DataTool.ModifyInt(Std.Achieve_Kill50ZombieKey, 1);
            this.killCount += 1;
        }
        OnZombieColHome() {
            if (this.curHomeHp <= 0) {
                return;
            }
            this.curHomeHp -= 1;
            this.ShowHomeBeAtkTip();
            if (this.curHomeHp <= 0) {
                this.curHomeHp = 0;
                this.isMatchFail = true;
                Dispatcher.Event(EventType.OnZombieModeFinish);
                this.SetGameOverData(false);
                PopMsgTool.ShowZombieRecoverPanel(() => {
                    this.curHomeHp = this.maxHomeHp;
                    this.isMatchFail = false;
                    Dispatcher.Event(EventType.OnPlayerRepaireZombieModeHome);
                    this.curWaveNeedKillCount = 0;
                    this.imgWaveStartCountBg.visible = false;
                    this.OnZombieEnemyDie();
                }, () => {
                    UIMgr.Instance.OpenUI(SettlementPanel);
                });
            }
        }
        ShowHomeBeAtkTip() {
            if (this.canShowHomeBeAtkTip) {
                SoundTool.PlaySfxByName("warming");
                this.imgHomeInAtk.visible = true;
                this.canShowHomeBeAtkTip = false;
                Laya.timer.once(1500, this, () => {
                    this.imgHomeInAtk.visible = false;
                    this.canShowHomeBeAtkTip = true;
                });
            }
        }
        StartZombieWave() {
            this.imgPlayerCtlBg.visible = true;
            this.imgCrossHairBg.visible = true;
            if (DataTool.GetInt(Std.Guide_HasLearn_ZombieMode) == 1) {
                if (this.canSpawnWave1 == true) {
                    this.SpawnZombieWave1();
                    this.canSpawnWave1 = false;
                }
            }
        }
        SpawnZombieWave1() {
            this.curZombieWave = 1;
            this.curWaveNeedKillCount = 8;
            this.Spawn_LeftWalkZombie(4);
            this.Spawn_RightWalkZombie(4);
        }
        SpawnZombieWave2() {
            this.ShowTryUsePopInGamePlay();
            this.curZombieWave = 2;
            this.curWaveNeedKillCount = 10;
            this.Spawn_LeftWalkZombie(3);
            this.Spawn_LeftRunZombie(2);
            this.Spawn_RightWalkZombie(3);
            this.Spawn_RightRunZombie(2);
        }
        SpawnZombieWave3() {
            this.curZombieWave = 3;
            this.curWaveNeedKillCount = 14;
            this.Spawn_LeftWalkZombie(5);
            this.Spawn_LeftRunZombie(2);
            this.Spawn_RightWalkZombie(5);
            this.Spawn_RightRunZombie(2);
        }
        SpawnZombieWave4() {
            this.ShowTryUsePopInGamePlay();
            this.curZombieWave = 5;
            this.curWaveNeedKillCount = 16;
            this.Spawn_LeftWalkZombie(5);
            this.Spawn_LeftRunZombie(3);
            this.Spawn_RightWalkZombie(5);
            this.Spawn_RightRunZombie(3);
        }
        SpawnZombieWave5() {
            this.curZombieWave = 5;
            this.curWaveNeedKillCount = 16;
            this.Spawn_LeftWalkZombie(4);
            this.Spawn_LeftRunZombie(4);
            this.Spawn_RightWalkZombie(4);
            this.Spawn_RightRunZombie(4);
        }
        SpawnZombieWave6() {
            this.curZombieWave = 6;
            this.curWaveNeedKillCount = 16;
            this.Spawn_LeftWalkZombie(3);
            this.Spawn_LeftRunZombie(5);
            this.Spawn_RightWalkZombie(3);
            this.Spawn_RightRunZombie(5);
        }
        Spawn_LeftWalkZombie(count) {
            for (let i = 0; i < count; i++) {
                AISpawnerMgr.Instance.SpawnZombie(false, true);
            }
        }
        Spawn_LeftRunZombie(count) {
            for (let i = 0; i < count; i++) {
                AISpawnerMgr.Instance.SpawnZombie(true, true);
            }
        }
        Spawn_RightWalkZombie(count) {
            for (let i = 0; i < count; i++) {
                AISpawnerMgr.Instance.SpawnZombie(false, false);
            }
        }
        Spawn_RightRunZombie(count) {
            for (let i = 0; i < count; i++) {
                AISpawnerMgr.Instance.SpawnZombie(true, false);
            }
        }
    }
    class BulletAllEmptyAdPanel extends Lq_UIBase {
        constructor() {
            super();
        }
        onEnable() {
            this.LogUIMap();
            this.btn_InfinityMag = this.GetObj("btn_InfinityMag");
            this.btn_FullSingleMag = this.GetObj("btn_FullSingleMag");
            this.btn_Close = this.GetObj("btn_Close");
            this.img_gold = this.GetObj("img_gold");
            if (SdkManager.Instance.GetSwitchData("p8") == 0) {
                if (DataTool.GetInt(Std.Currency_GoldKey) >= 200) {
                    this.img_gold.x = 488;
                    this.AddBtnEventScaleFx2(this.btn_InfinityMag, () => {
                        this.ptAllDraw_Gold();
                    });
                } else {
                    this.img_gold.visible = false;
                    this.btn_InfinityMag.skin = "BulletsEmpotyTip/aimo_btn_qb2.png";
                    this.AddBtnEventScaleFx2(this.btn_InfinityMag, () => {
                        this.kanAllVidoe();
                    });
                }
                this.btn_Close.visible = false;
                this.AddBtnEventScaleFx2(this.btn_FullSingleMag, () => {
                    this.ptDraw();
                });
            } else {
                this.img_gold.x = 156;
                this.btn_InfinityMag.skin = "BulletsEmpotyTip/aimo_btn_qb2.png";
                this.AddBtnEventScaleFx2(this.btn_InfinityMag, () => {
                    this.kanAllVidoe();
                });
                this.AddBtnEventScaleFx2(this.btn_FullSingleMag, () => {
                    this.ptDraw_Gold();
                });
                this.AddBtnEventScaleFx2(this.btn_Close, () => {
                    this.CloseUI();
                });
            }
        }
        ptDraw() {
            WeaponMgr.Instance.ReFullSingleWeaponBullets(WeaponMgr.Instance.GetNowUsingWeapon());
            Dispatcher.Event(EventType.OnReFullWeaponBullets);
            GenGamePlayTool.PlayEquipItemSfx();
            this.CloseUI();
        }
        ptDraw_Gold() {
            if (DataTool.GetInt(Std.Currency_GoldKey) < 200) {
                PopMsgTool.ShowConfirmPanel("获取金币", "是否看视频获取500个金块?", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart7");
                    SdkManager.Instance.ShowVideoAd(() => {
                        PopMsgTool.ShowSmallItemGetTip(500, CurrencyTypeEnum.Gold);
                        DataTool.ModifyInt(Std.Currency_GoldKey, 500);
                        CountSdkMgr.Instance.TrackEvent("videComplete7");
                    });
                });
            } else {
                WeaponMgr.Instance.ReFullSingleWeaponBullets(WeaponMgr.Instance.GetNowUsingWeapon());
                Dispatcher.Event(EventType.OnReFullWeaponBullets);
                GenGamePlayTool.PlayEquipItemSfx();
                DataTool.ModifyInt(Std.Currency_GoldKey, -200);
                Dispatcher.Event(EventType.OnCurrencyChange);
                this.CloseUI();
            }
        }
        ptAllDraw_Gold() {
            WeaponMgr.Instance.ReFullAllWeaponsBullets();
            Dispatcher.Event(EventType.OnReFullWeaponBullets);
            GenGamePlayTool.PlayEquipItemSfx();
            DataTool.ModifyInt(Std.Currency_GoldKey, -200);
            Dispatcher.Event(EventType.OnCurrencyChange);
            this.CloseUI();
        }
        kanAllVidoe() {
            CountSdkMgr.Instance.TrackEvent("videStart19");
            SdkManager.Instance.ShowVideoAd(() => {
                CountSdkMgr.Instance.TrackEvent("videComplete19");
                WeaponMgr.Instance.ReFullAllWeaponsBullets();
                Dispatcher.Event(EventType.OnReFullWeaponBullets);
                GenGamePlayTool.PlayEquipItemSfx();
                this.CloseUI();
            });
        }
    }
    class SettingPanel extends UIBase {
        constructor() {
            super();
            this.selectSkinPath = "General/gameset_btn_check2.png";
            this.unSelectSkinPath = "General/gameset_btn_uncheck2.png";
        }
        onAwake() {
            this.SetAllUINodesDic();
            Laya.Tween.from(this.GetImg("imgMid"), {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backOut);
            this.RefreshUI();
        }
        onStart() {
            this.AddBtnEventScaleFx("btnBack", () => {
                Dispatcher.Event(EventType.OnCloseOtherCurrencyPanelInMenuSc);
                this.CloseUI();
            });
            this.AddBtnEventScaleFx("btnSoundCtl", () => {
                if (DataTool.GetInt(Std.Setting_IsSoundOnKey) == 1) {
                    DataTool.SetKv(Std.Setting_IsSoundOnKey, 0);
                    SoundTool.MuteSound();
                } else {
                    DataTool.SetKv(Std.Setting_IsSoundOnKey, 1);
                    SoundTool.UnMuteSound();
                }
                this.RefreshUI();
            });
            this.AddBtnEventScaleFx("btnBloomCtl", () => {
                if (DataTool.GetInt(Std.Setting_IsBloomOnKey) == 1) {
                    DataTool.SetKv(Std.Setting_IsBloomOnKey, 0);
                } else {
                    DataTool.SetKv(Std.Setting_IsBloomOnKey, 1);
                }
                this.RefreshUI();
            });
            this.AddBtnEventScaleFx("btnShakeCtl", () => {
                if (DataTool.GetInt(Std.Setting_IsShakeOnKey) == 1) {
                    DataTool.SetKv(Std.Setting_IsShakeOnKey, 0);
                } else {
                    DataTool.SetKv(Std.Setting_IsShakeOnKey, 1);
                }
                this.RefreshUI();
            });
        }
        RefreshUI() {
            this.SetBtnSkin("btnSoundCtl", DataTool.GetInt(Std.Setting_IsSoundOnKey) == 1 ? this.selectSkinPath : this.unSelectSkinPath);
            this.SetBtnSkin("btnBloomCtl", DataTool.GetInt(Std.Setting_IsBloomOnKey) == 1 ? this.selectSkinPath : this.unSelectSkinPath);
            this.SetBtnSkin("btnShakeCtl", DataTool.GetInt(Std.Setting_IsShakeOnKey) == 1 ? this.selectSkinPath : this.unSelectSkinPath);
        }
    }
    class CurrencyDataPanel extends UIBase {
        constructor() {
            super();
            this.needShowWhenSubCurrency = false;
        }
        onAwake() {
            this.SetAllUINodesDic();
            Dispatcher.AddListener(EventType.OnCurrencyChange, this, this.RefreshCurrencyData);
        }
        onStart() {
            this.AddBtnEvents();
            this.RefreshCurrencyUI();
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnCurrencyChange, this, this.RefreshCurrencyData);
        }
        AddBtnEvents() {
            this.AddBtnEventScaleFx("btnAddGoldAd", () => {
                Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
                PopMsgTool.ShowConfirmPanel("获取金币", "是否看视频获取500个金块?", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart7");
                    SdkManager.Instance.ShowVideoAd(() => {
                        Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(500, CurrencyTypeEnum.Gold));
                        CountSdkMgr.Instance.TrackEvent("videComplete7");
                    });
                });
            });
            this.AddBtnEventScaleFx("btnAddBlueDiamondAd", () => {
                Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
                PopMsgTool.ShowConfirmPanel("获取蓝钻", "是否看视频获取100个蓝钻?", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart8");
                    SdkManager.Instance.ShowVideoAd(() => {
                        Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(100, CurrencyTypeEnum.BlueDiamond));
                        CountSdkMgr.Instance.TrackEvent("videComplete8");
                    });
                });
            });
            this.AddBtnEventScaleFx("btnAddRedDiamondAd", () => {
                Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
                PopMsgTool.ShowConfirmPanel("获取红钻", "是否看视频获取100个红钻?", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart9");
                    SdkManager.Instance.ShowVideoAd(() => {
                        Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(100, CurrencyTypeEnum.RedDiamond));
                        CountSdkMgr.Instance.TrackEvent("videComplete9");
                    });
                });
            });
            this.AddBtnEventScaleFx("btnSetting", () => {
                Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
                UIMgr.Instance.OpenUI(SettingPanel);
                SdkManager.Instance.HideBanner();
            });
        }
        RefreshCurrencyData(currencyData) {
            if (currencyData) {
                let canShow = true;
                if (this.needShowWhenSubCurrency == false && currencyData.count < 0) {
                    canShow = false;
                }
                if (currencyData.currencyType == CurrencyTypeEnum.Gold) {
                    DataTool.ModifyInt(Std.Currency_GoldKey, currencyData.count);
                } else if (currencyData.currencyType == CurrencyTypeEnum.BlueDiamond) {
                    DataTool.ModifyInt(Std.Currency_BlueDiamondKey, currencyData.count);
                } else if (currencyData.currencyType == CurrencyTypeEnum.RedDiamond) {
                    DataTool.ModifyInt(Std.Currency_RedDiamondKey, currencyData.count);
                }
                this.RefreshCurrencyUI();
                if (canShow) {
                    PopMsgTool.ShowSmallItemGetTip(currencyData.count, currencyData.currencyType);
                }
            } else {
                this.RefreshCurrencyUI();
            }
        }
        RefreshCurrencyUI() {
            let gold = DataTool.GetInt(Std.Currency_GoldKey);
            let blue = DataTool.GetInt(Std.Currency_BlueDiamondKey);
            let red = DataTool.GetInt(Std.Currency_RedDiamondKey);
            this.SetText("txtGoldCount", gold + "");
            this.SetText("txtBlueDiamondCount", blue + "");
            this.SetText("txtRedDiamondCount", red + "");
        }
    }
    class EquipShopPanel extends UIBase {
        constructor() {
            super();
            this.nowSelectEquipIdx = 1;
            this.nowSelectEquipInnerIdx = 0;
            this.nowSelectEquipName = Std.WeaponName_None;
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.GetNeed();
            this.AddBtnEevnts();
            this.InitOther();
            if (UIDataMidLyaer.IsEquipShop_BuyEquip == EquipShop.Viecle) {
                this.RefreshEquipList(5);
            } else {
                this.RefreshEquipList();
            }
            if (!SdkManager.Instance.getIsXXChannel(SdkChannel.Android)) {
                SdkManager.Instance.ShowBanner("left");
            }
        }
        onStart() {
            Dispatcher.AddListener(EventType.OnCurrencyChange, this, this.OnCurrencyChange);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnCurrencyChange, this, this.OnCurrencyChange);
            Tool.ClearTimerAndTween(this);
        }
        RefreshAmmoAndHpBox() {
            if (this.nowSelectEquipName == Std.WeaponName_AmmoBox) {
                this.SetVisible("imgEquipPropertyBg", false);
                this.SetVisible("imgEquipTxtDescBg", true);
                this.SetText("txtEquipTxtDesc", "弹药箱可以在战斗中使用，补给满所有武器的弹药");
            } else if (this.nowSelectEquipName == Std.WeaponName_HpBox) {
                this.SetVisible("imgEquipPropertyBg", false);
                this.SetVisible("imgEquipTxtDescBg", true);
                this.SetText("txtEquipTxtDesc", "医疗箱可以在战斗中使用，恢复所有生命值");
            } else {
                this.SetVisible("imgEquipPropertyBg", true);
                this.SetVisible("imgEquipTxtDescBg", false);
            }
        }
        DoUpdateEquip() {
            if (this.CheckCanUpdateEquip()) {
                DataTool.ModifyInt(Std.Currency_BlueDiamondKey, -100);
                Dispatcher.Event(EventType.OnCurrencyChange);
                DataTool.ModifyInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(this.nowSelectEquipName), 1);
                this.RefreshUpdateBtnUIState();
                this.RefreshEquipLevlUI();
                GenGamePlayTool.PlayUnlockSfx();
                PopMsgTool.PopMsg("升级成功！");
                DailyMissionMgr.Instance.On_UpdateOnceEquip();
                DataTool.ModifyInt(Std.Achieve_UpdateEquip3TimesKey, 1);
                DataTool.ModifyInt(Std.Achieve_UpdateEquip5TimesKey, 1);
                Dispatcher.Event(EventType.OnPlayerUpdateEquip);
                CountSdkMgr.Instance.TrackEvent("equipmentShopUpgrade" + this.GetWeaponIndexByName(this.nowSelectEquipName));
                this.listEquipsData.refresh();
            } else {
                let wpName = WeaponInfoMgr.Instance.GetWeaponChnNameByName(this.nowSelectEquipName);
                PopMsgTool.ShowConfirmPicPanel("装备升级", "是否观看视频免费升级" + "【" + wpName + "】?", this.nowSelectEquipName, () => {
                    CountSdkMgr.Instance.TrackEvent("videStart5", this.GetWeaponIndexByName(this.nowSelectEquipName));
                    SdkManager.Instance.ShowVideoAd(() => {
                        DataTool.ModifyInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(this.nowSelectEquipName), 1);
                        this.RefreshUpdateBtnUIState();
                        this.RefreshEquipLevlUI();
                        GenGamePlayTool.PlayUnlockSfx();
                        PopMsgTool.PopMsg("升级成功！");
                        DailyMissionMgr.Instance.On_UpdateOnceEquip();
                        DataTool.ModifyInt(Std.Achieve_UpdateEquip3TimesKey, 1);
                        DataTool.ModifyInt(Std.Achieve_UpdateEquip5TimesKey, 1);
                        Dispatcher.Event(EventType.OnPlayerUpdateEquip);
                        this.listEquipsData.refresh();
                        CountSdkMgr.Instance.TrackEvent("videComplete5", this.GetWeaponIndexByName(this.nowSelectEquipName));
                    });
                });
            }
        }
        CheckCanUpdateEquip() {
            let updateCost = 100;
            return DataTool.GetInt(Std.Currency_BlueDiamondKey) >= updateCost;
        }
        RefreshUpdateBtnUIState() {
            if (this.CheckCanUpdateEquip()) {
                this.SetBtnSkin("btnUpdate", "EquipShop/upgrade_btn_levelup.png");
            } else {
                this.SetBtnSkin("btnUpdate", "EquipShop/upgrade_btn_levelup2.png");
            }
        }
        RefreshEquipLevlUI() {
            let lv = DataTool.GetInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(this.nowSelectEquipName));
            if (lv == 0) {
                lv = 1;
            }
            let maxWid = 210;
            if (lv <= 0) {
                this.SetVisible("imgAddPowerProperty", false);
                this.SetVisible("imgAddRecoilProperty", false);
                this.SetVisible("imgAddMagProperty", false);
                this.GetImg("imgAddPowerProperty").width = 0;
                this.GetImg("imgAddRecoilProperty").width = 0;
                this.GetImg("imgAddMagProperty").width = 0;
            } else {
                this.SetVisible("imgAddPowerProperty", true);
                this.SetVisible("imgAddRecoilProperty", true);
                this.SetVisible("imgAddMagProperty", true);
                let weaponData = WeaponInfoMgr.Instance.GetWeaponPowerRecoilMagData(this.nowSelectEquipName);
                let powerAddWidth = maxWid * weaponData[0] + lv * 10;
                let recoilAddWidth = maxWid * weaponData[1] + lv * 10;
                let magAddWidth = maxWid * weaponData[2] + lv * 10;
                powerAddWidth = powerAddWidth > maxWid ? maxWid : powerAddWidth;
                recoilAddWidth = recoilAddWidth > maxWid ? maxWid : recoilAddWidth;
                magAddWidth = magAddWidth > maxWid ? maxWid : magAddWidth;
                Laya.Tween.to(this.GetImg("imgAddPowerProperty"), {
                    width: powerAddWidth
                }, 300);
                Laya.Tween.to(this.GetImg("imgAddRecoilProperty"), {
                    width: recoilAddWidth
                }, 300);
                Laya.Tween.to(this.GetImg("imgAddMagProperty"), {
                    width: magAddWidth
                }, 300);
            }
        }
        RefreshIsBuyEquipOrUpdateEquip() {
            if (UIDataMidLyaer.IsEquipShop_BuyEquip == EquipShop.Buy) {
                this.SetVisible("imgAddPowerProperty", false);
                this.SetVisible("imgAddRecoilProperty", false);
                this.SetVisible("imgAddMagProperty", false);
                this.SetVisible("imgPurchaseStateBg", true);
                this.SetVisible("imgUpdateEquipBg", false);
                this.SetVisible("btnSelectEquips5", false);
            } else {
                this.SetVisible("imgAddPowerProperty", true);
                this.SetVisible("imgAddRecoilProperty", true);
                this.SetVisible("imgAddMagProperty", true);
                this.SetVisible("imgPurchaseStateBg", false);
                this.SetVisible("imgUpdateEquipBg", true);
                this.SetVisible("btnSelectEquips5", true);
                this.RefreshEquipLevlUI();
            }
        }
        RefreshBuyBtnUIState() {
            if (this.HasOwnEquip(this.nowSelectEquipName) == true) {
                this.SetBtnSkin("btnBuy", "EquipShop/shop_btn_yyy.png");
                this.SetVisible("imgCostBg", false);
            } else {
                if (this.CheckCanBuySelectEquip() == true) {
                    this.SetBtnSkin("btnBuy", "EquipShop/shop_btn_buy.png");
                    this.SetVisible("imgCostBg", true);
                    this.SetText("txtCost", WeaponInfoMgr.Instance.GetWepaonPriceByName(this.nowSelectEquipName) + "");
                } else {
                    this.SetBtnSkin("btnBuy", "GetItem/get_btn_adget.png");
                    this.SetVisible("imgCostBg", false);
                }
            }
        }
        CheckCanBuySelectEquip() {
            if (DataTool.GetInt(Std.Currency_GoldKey) >= WeaponInfoMgr.Instance.GetWepaonPriceByName(this.nowSelectEquipName)) {
                return true;
            }
            return false;
        }
        HasOwnEquip(equipName) {
            let needWatchTime = WeaponInfoMgr.Instance.GetUnlockWeaponWatchAdCount(equipName);
            let hasWatchTime = WeaponInfoMgr.Instance.GetHasWatchAdUnlockWeaponCount(equipName);
            if (hasWatchTime >= needWatchTime) {
                return true;
            }
            return false;
        }
        RefreshEquipProperty() {
            let weaponData = WeaponInfoMgr.Instance.GetWeaponPowerRecoilMagData(this.nowSelectEquipName);
            let maxWid = 210;
            Laya.Tween.to(this.GetImg("imgPowerProgressBar"), {
                width: maxWid * weaponData[0]
            }, 300);
            Laya.Tween.to(this.GetImg("imgRecoilProgressBar"), {
                width: maxWid * weaponData[1]
            }, 300);
            Laya.Tween.to(this.GetImg("imgMagProgressBar"), {
                width: maxWid * weaponData[2]
            }, 300);
        }
        RefreshShiftPageBtnSkin() {
            this.SetBtnSkin("btnSelectEquips1", "EquipShop/upgrade_btn_wpa1.png");
            this.SetBtnSkin("btnSelectEquips2", "EquipShop/upgrade_btn_wpb1.png");
            this.SetBtnSkin("btnSelectEquips3", "EquipShop/upgrade_btn_wpc1.png");
            this.SetBtnSkin("btnSelectEquips4", "EquipShop/upgrade_btn_wpd1.png");
            this.SetBtnSkin("btnSelectEquips5", "EquipShop/upgrade_btn_wpe1.png");
            if (this.nowSelectEquipIdx == 1) this.SetBtnSkin("btnSelectEquips1", "EquipShop/upgrade_btn_wpa2.png"); else if (this.nowSelectEquipIdx == 2) this.SetBtnSkin("btnSelectEquips2", "EquipShop/upgrade_btn_wpb2.png"); else if (this.nowSelectEquipIdx == 3) this.SetBtnSkin("btnSelectEquips3", "EquipShop/upgrade_btn_wpc2.png"); else if (this.nowSelectEquipIdx == 4) this.SetBtnSkin("btnSelectEquips4", "EquipShop/upgrade_btn_wpd2.png"); else if (this.nowSelectEquipIdx == 5) this.SetBtnSkin("btnSelectEquips5", "EquipShop/upgrade_btn_wpe2.png");
        }
        InitOther() {
            UIMgr.Instance.OpenUI(CurrencyDataPanel, () => { }, this.GetImg("imgCurrencyBg"));
            Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
            Laya.Tween.from(this.GetImg("imgLeftSelectBg"), {
                left: -500
            }, 250, Laya.Ease.linearNone);
            Laya.Tween.from(this.GetImg("imgRightInfoBg"), {
                right: -1e3
            }, 250, Laya.Ease.linearNone);
        }
        GetNeed() {
            this.listEquipsData = this.GetList("listEquipsData");
        }
        DoBuyEquip() {
            if (this.HasOwnEquip(this.nowSelectEquipName)) {
                return;
            }
            if (this.CheckCanBuySelectEquip()) {
                DataTool.SetKv(WeaponInfoMgr.Instance.GetWatchAdUnlockLocalKey(this.nowSelectEquipName), WeaponInfoMgr.Instance.GetUnlockWeaponWatchAdCount(this.nowSelectEquipName));
                DataTool.ModifyInt(Std.Currency_GoldKey, -WeaponInfoMgr.Instance.GetWepaonPriceByName(this.nowSelectEquipName));
                this.RefreshBuyBtnUIState();
                this.listEquipsData.refresh();
                Dispatcher.Event(EventType.OnCurrencyChange);
                PopMsgTool.ShowGetItemPanel(0, ItemGetTypeEnum.Weapon, () => { }, this.nowSelectEquipName);
                CountSdkMgr.Instance.TrackEvent("equipmentShopBuy" + this.GetWeaponIndexByName(this.nowSelectEquipName));
            } else {
                let wpName = WeaponInfoMgr.Instance.GetWeaponChnNameByName(this.nowSelectEquipName);
                PopMsgTool.ShowConfirmPicPanel("武器购买", "是否观看视频免费获得" + "【" + wpName + "】?", this.nowSelectEquipName, () => {
                    CountSdkMgr.Instance.TrackEvent("videStart4", this.GetWeaponIndexByName(this.nowSelectEquipName));
                    SdkManager.Instance.ShowVideoAd(() => {
                        DataTool.ModifyInt(WeaponInfoMgr.Instance.GetWatchAdUnlockLocalKey(this.nowSelectEquipName), 1);
                        if (WeaponInfoMgr.Instance.GetHasWatchAdUnlockWeaponCount(this.nowSelectEquipName) >= WeaponInfoMgr.Instance.GetUnlockWeaponWatchAdCount(this.nowSelectEquipName)) {
                            PopMsgTool.ShowGetItemPanel(0, ItemGetTypeEnum.Weapon, () => { }, this.nowSelectEquipName);
                        }
                        this.RefreshBuyBtnUIState();
                        this.listEquipsData.refresh();
                        CountSdkMgr.Instance.TrackEvent("videComplete4", this.GetWeaponIndexByName(this.nowSelectEquipName));
                    });
                });
            }
        }
        GetWeaponIndexByName(targetName) {
            let weapon1Data = WeaponInfoMgr.Instance.GetWeapon1ListData();
            let weapon2Data = WeaponInfoMgr.Instance.GetWeapon2ListData();
            let weapon3Data = WeaponInfoMgr.Instance.GetWeapon3ListData();
            let weapon4Data = WeaponInfoMgr.Instance.GetWeapon4ListData();
            let weapon5Data = WeaponInfoMgr.Instance.GetWeapon5ListData();
            for (let i = 0; i < weapon1Data.length; i++) {
                if (weapon1Data[i] == targetName) {
                    return "100" + i;
                }
            }
            for (let i = 0; i < weapon2Data.length; i++) {
                if (weapon2Data[i] == targetName) {
                    return "200" + i;
                }
            }
            for (let i = 0; i < weapon3Data.length; i++) {
                if (weapon3Data[i] == targetName) {
                    return "300" + i;
                }
            }
            for (let i = 0; i < weapon4Data.length; i++) {
                if (weapon4Data[i] == targetName) {
                    return "400" + i;
                }
            }
            for (let i = 0; i < weapon5Data.length; i++) {
                if (weapon5Data[i] == targetName) {
                    return "500" + i;
                }
            }
        }
        AddBtnEevnts() {
            this.AddBtnEventScaleFx("btnSelectEquips1", () => {
                if (this.nowSelectEquipIdx == 1) {
                    return;
                }
                this.RefreshEquipList(1);
            });
            this.AddBtnEventScaleFx("btnSelectEquips2", () => {
                if (this.nowSelectEquipIdx == 2) {
                    return;
                }
                this.RefreshEquipList(2);
            });
            this.AddBtnEventScaleFx("btnSelectEquips3", () => {
                if (this.nowSelectEquipIdx == 3) {
                    return;
                }
                this.RefreshEquipList(3);
            });
            this.AddBtnEventScaleFx("btnSelectEquips4", () => {
                if (this.nowSelectEquipIdx == 4) {
                    return;
                }
                this.RefreshEquipList(4);
            });
            this.AddBtnEventScaleFx("btnSelectEquips5", () => {
                if (this.nowSelectEquipIdx == 5) {
                    return;
                }
                this.RefreshEquipList(5);
            });
            this.AddBtnEventScaleFx("btnBuy", () => {
                this.DoBuyEquip();
            });
            this.AddBtnEventScaleFx("btnUpdate", () => {
                this.DoUpdateEquip();
            });
            this.AddBtnEventScaleFx("btnBack", () => {
                Dispatcher.Event(EventType.OnCloseOtherCurrencyPanelInMenuSc);
                Dispatcher.Event(EventType.OnEquipShopClose);
                this.CloseUI();
            });
        }
        RefreshEquipList(equipDataIdx = 1) {
            this.nowSelectEquipIdx = equipDataIdx;
            this.nowSelectEquipInnerIdx = 0;
            this.listEquipsData.selectedIndex = this.nowSelectEquipInnerIdx;
            this.ReSetEquipListData();
            let selectEquipName = this.GetNowSelectEquipTypeData()[this.nowSelectEquipInnerIdx];
            this.SetImgSkin("imgEquipIcon", WeaponInfoMgr.Instance.GetWeaponIconByName(selectEquipName));
            this.SetText("txtEquipName", WeaponInfoMgr.Instance.GetWeaponChnNameByName(selectEquipName));
            this.nowSelectEquipName = selectEquipName;
            this.RefreshEquipProperty();
            this.RefreshBuyBtnUIState();
            this.RefreshIsBuyEquipOrUpdateEquip();
            if (equipDataIdx == 5) {
                this.SetImgSkin("imgpowerBg", "EquipSelect/weaponset_pic_shz.png");
                this.SetImgSkin("imgrecoilBg", "EquipSelect/weaponset_pic_njd.png");
                this.SetImgSkin("imgmagBg", "EquipSelect/weaponset_pic_jdx.png");
            } else {
                this.SetImgSkin("imgpowerBg", "EquipSelect/weaponset_pic_gjl.png");
                this.SetImgSkin("imgrecoilBg", "EquipSelect/weaponset_pic_hzl.png");
                this.SetImgSkin("imgmagBg", "EquipSelect/weaponset_pic_dyl.png");
            }
            if (UIDataMidLyaer.IsEquipShop_BuyEquip != EquipShop.Buy) {
                this.RefreshUpdateBtnUIState();
            }
        }
        ReSetEquipListData() {
            this.listEquipsData.vScrollBarSkin = "";
            this.listEquipsData.selectEnable = true;
            this.listEquipsData.renderHandler = new Laya.Handler(this, this.OnRender);
            this.listEquipsData.selectHandler = new Laya.Handler(this, this.OnSelect);
            this.SetListElements();
            this.RefreshShiftPageBtnSkin();
        }
        OnRender(cell, index) {
            let imgEquipBg = cell;
            let imgEquipIcon = imgEquipBg.getChildByName("equipIcon");
            let imgEquipFrame = imgEquipBg.getChildByName("equipFrame");
            let imgHasOwn = imgEquipBg.getChildByName("hasOwn");
            let watchAdBg = imgEquipBg.getChildByName("watchAdBg");
            let txtEquipName = imgEquipBg.getChildByName("equipName");
            let watchAdTimes = watchAdBg.getChildByName("watchAdTimes");
            let weaponIndexName = this.GetNowSelectEquipTypeData()[index];
            txtEquipName.text = WeaponInfoMgr.Instance.GetWeaponChnNameByName(weaponIndexName);
            let needWatchTime = WeaponInfoMgr.Instance.GetUnlockWeaponWatchAdCount(weaponIndexName);
            let hasWatchTime = WeaponInfoMgr.Instance.GetHasWatchAdUnlockWeaponCount(weaponIndexName);
            watchAdTimes.text = hasWatchTime + "/" + needWatchTime;
            imgEquipIcon.skin = WeaponInfoMgr.Instance.GetWeaponIconByName(weaponIndexName);
            imgEquipFrame.skin = this.nowSelectEquipInnerIdx == index ? "EquipSelect/weaponset_btn_boxframe2.png" : "EquipSelect/reborn_btn_weaponframe.png";
            let glowFilter = new Laya.GlowFilter("#eaff00", 3, 0, 0);
            imgEquipIcon.filters = [glowFilter];
            imgHasOwn.visible = this.HasOwnEquip(weaponIndexName) == true;
            watchAdBg.visible = UIDataMidLyaer.IsEquipShop_BuyEquip == EquipShop.Buy && this.HasOwnEquip(weaponIndexName) == false;
            this.RefreshAmmoAndHpBox();
        }
        OnSelect(index) {
            this.nowSelectEquipInnerIdx = index;
            let selectEquipName = this.GetNowSelectEquipTypeData()[index];
            this.SetImgSkin("imgEquipIcon", WeaponInfoMgr.Instance.GetWeaponIconByName(selectEquipName));
            this.SetText("txtEquipName", WeaponInfoMgr.Instance.GetWeaponChnNameByName(selectEquipName));
            this.nowSelectEquipName = selectEquipName;
            this.RefreshEquipProperty();
            this.RefreshBuyBtnUIState();
            SoundTool.PlaySfxByName("click");
            if (UIDataMidLyaer.IsEquipShop_BuyEquip != EquipShop.Buy) {
                this.RefreshEquipLevlUI();
                this.RefreshUpdateBtnUIState();
                this.GetBtn("btnUpdate").disabled = this.nowSelectEquipName == Std.WeaponName_HpBox || this.nowSelectEquipName == Std.WeaponName_AmmoBox ? true : false;
            }
        }
        SetListElements() {
            let data = [];
            this.listEquipsData.repeatX = 1;
            this.listEquipsData.repeatY = this.GetNowSelectEquipTypeData().length;
            let counts = this.listEquipsData.repeatX * this.listEquipsData.repeatY;
            for (let i = 0; i < counts; i++) {
                let tempData = {};
                data.push(tempData);
            }
            this.listEquipsData.array = data;
        }
        GetNowSelectEquipTypeData() {
            WeaponMgr.Instance.SetRebornChangeWeaponIndex(this.nowSelectEquipIdx);
            let allEquipsData = WeaponInfoMgr.Instance.GetNowSelectWeaponsData();
            let tempArray = [];
            Object.assign(tempArray, allEquipsData);
            for (let i = 0; i < tempArray.length; i++) {
                if (tempArray[i] == Std.WeaponName_None) {
                    Tool.DelItemInArray(tempArray[i], tempArray);
                }
            }
            return tempArray;
        }
        OnCurrencyChange() {
            if (UIDataMidLyaer.IsEquipShop_BuyEquip == EquipShop.Buy) {
                this.RefreshBuyBtnUIState();
            } else {
                this.RefreshIsBuyEquipOrUpdateEquip();
                this.RefreshUpdateBtnUIState();
            }
        }
    }
    class PausePanel extends UIBase {
        constructor() {
            super();
        }
        onAwake() {
            this.SetAllUINodesDic();
            GameLevelMgr.Instance.SetIsInGamePausePanel(true);
            Laya.Tween.from(this.GetImg("imgMid"), {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backOut);
            if (!SdkManager.Instance.getIsXXChannel(SdkChannel.Android)) {
                if (!SdkManager.Instance.android233) {
                    SdkManager.Instance.ShowBanner("left");
                }
            }
        }
        onStart() {
            this.AddBtnEventScaleFx("btnContinueGame", () => {
                GameLevelMgr.Instance.SetIsInGamePausePanel(false);
                SdkManager.Instance.HideBanner();
                this.CloseUI();
            });
            this.AddBtnEventScaleFx("btnQuitGame", () => {
                GameLevelMgr.Instance.SetIsInGamePausePanel(false);
                SdkManager.Instance.HideBanner();
                Dispatcher.Event(EventType.OnBackToMenu);
            });
        }
    }
    class PlayerWeaponHpInfoPanel extends UIBase {
        constructor() {
            super();
            this.hasLockWpBtnSkin = "GamePlay/play_btn_weaponactive.png";
            this.lockedWpBtnSkin = "GamePlay/play_btn_weaponset.png";
            this.hasUnlockWp1 = false;
            this.hasUnlockWp2 = false;
            this.hasUnlockWp3 = false;
            this.hasUnlockWp4 = false;
            this.show34 = false;
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.imgPlayerHpBar = this.GetImg("imgPlayerHpBar");
            this.imgPlayerShieldBar = this.GetImg("imgPlayerShieldBar");
            this.img_Shield = this.GetImg("img_Shield");
            this.OnWeaponUnlockStateChange();
            this.AddBtnEvent("btnWeapon1", () => {
                if (!WeaponMgr.Instance.GetHasUnlockWeapon1() || PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon1Name == Std.WeaponName_None) {
                    return;
                }
                this.ChangeWeapon(1);
            });
            this.AddBtnEvent("btnWeapon2", () => {
                if (!WeaponMgr.Instance.GetHasUnlockWeapon2() || PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon2Name == Std.WeaponName_None) {
                    return;
                }
                this.ChangeWeapon(2);
            });
            this.AddBtnEvent("btnWeapon3", () => {
                if (!WeaponMgr.Instance.GetHasUnlockWeapon3() || PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon3Name == Std.WeaponName_None) {
                    return;
                }
                this.ChangeWeapon(3);
            });
            this.AddBtnEvent("btnWeapon4", () => {
                if (UIDataMidLyaer.TryUse_IsTryUsing == true && UIDataMidLyaer.TryUse_TxtData != Std.WeaponName_None) {
                    this.ChangeWeapon(4);
                    return;
                }
                if (!WeaponMgr.Instance.GetHasUnlockWeapon4() || PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon4Name == Std.WeaponName_None) {
                    return;
                }
                this.ChangeWeapon(4);
            });
            this.AddBtnEvent("btnUnlockWeapon3Ad", () => {
                PopMsgTool.ShowConfirmPanel("解锁武器栏", "是否观看视频免费解锁武器栏3?", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart14");
                    SdkManager.Instance.ShowVideoAd(() => {
                        GameTimeMgr.Instance.ResumeGameTimeScale();
                        DataTool.SetKv(Std.Local_HasUnlockWeapon3Key, 1);
                        Dispatcher.Event(EventType.OnHandKillPlayer);
                        this.OnWeaponUnlockStateChange();
                        GenGamePlayTool.PlayUnlockSfx();
                        PopMsgTool.PopMsg("解锁武器栏3！");
                        CountSdkMgr.Instance.TrackEvent("videComplete14");
                    }, () => { });
                });
            });
            this.AddBtnEvent("btnUnlockWeapon4Ad", () => {
                PopMsgTool.ShowConfirmPanel("解锁武器栏", "是否观看视频免费解锁武器栏4?", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart15");
                    SdkManager.Instance.ShowVideoAd(() => {
                        GameTimeMgr.Instance.ResumeGameTimeScale();
                        DataTool.SetKv(Std.Local_HasUnlockWeapon4Key, 1);
                        Dispatcher.Event(EventType.OnHandKillPlayer);
                        this.OnWeaponUnlockStateChange();
                        GenGamePlayTool.PlayUnlockSfx();
                        PopMsgTool.PopMsg("解锁武器栏4！");
                        CountSdkMgr.Instance.TrackEvent("videComplete15");
                    }, () => { });
                });
            });
        }
        onStart() {
            Dispatcher.AddListener(EventType.OnPlayerDie, this, this.OnPlayerDie);
            Dispatcher.AddListener(EventType.OnPlayerReborn, this, this.OnPlayerReborn);
            Dispatcher.AddListener(EventType.OnWeaponUnlockStateChange, this, this.OnWeaponUnlockStateChange);
            Dispatcher.AddListener(EventType.OnDoSpawnPlayer, this, this.OnDoSpawnPlayer);
            this.owner.alpha = 0;
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnPlayerDie, this, this.OnPlayerDie);
            Dispatcher.RemoveListener(EventType.OnPlayerReborn, this, this.OnPlayerReborn);
            Dispatcher.RemoveListener(EventType.OnWeaponUnlockStateChange, this, this.OnWeaponUnlockStateChange);
            Dispatcher.RemoveListener(EventType.OnDoSpawnPlayer, this, this.OnDoSpawnPlayer);
        }
        onUpdate() {
            this.RefreshWeaponInfo();
            this.RefreshPlayerHpUI();
            this.RefreshWeaponLockInfoUI();
        }
        OnWeaponUnlockStateChange() {
            this.hasUnlockWp1 = WeaponMgr.Instance.GetHasUnlockWeapon1();
            this.hasUnlockWp2 = WeaponMgr.Instance.GetHasUnlockWeapon2();
            this.hasUnlockWp3 = WeaponMgr.Instance.GetHasUnlockWeapon3();
            this.hasUnlockWp4 = WeaponMgr.Instance.GetHasUnlockWeapon4();
        }
        OnPlayerDie() {
            this.owner.alpha = 0;
        }
        OnPlayerReborn() {
            this.owner.alpha = 1;
        }
        OnDoSpawnPlayer() {
            this.owner.visible = Std.byWeapon;
        }
        RefreshWeaponInfo() {
            this.RefreshSigleWeaponInfo("imgWp1Icon", "txtWp1Mag", WeaponMgr.Instance.GetWeapon1Src(), PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon1Name);
            this.RefreshSigleWeaponInfo("imgWp2Icon", "txtWp2Mag", WeaponMgr.Instance.GetWeapon2Src(), PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon2Name);
            this.RefreshSigleWeaponInfo("imgWp3Icon", "txtWp3Mag", WeaponMgr.Instance.GetWeapon3Src(), PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon3Name);
            this.RefreshSigleWeaponInfo("imgWp4Icon", "txtWp4Mag", WeaponMgr.Instance.GetWeapon4Src(), PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon4Name);
            if (!this.hasUnlockWp3 && !this.hasUnlockWp4) {
                if (UIDataMidLyaer.TryUse_IsTryUsing) {
                    this.GetBtn("btnWeapon1").x = 14;
                    this.GetBtn("btnWeapon2").x = 146;
                    this.GetBtn("btnWeapon3").visible = false;
                    this.GetBtn("btnWeapon4").visible = true;
                } else {
                    this.GetBtn("btnWeapon1").x = 146;
                    this.GetBtn("btnWeapon2").x = 278;
                    this.GetBtn("btnWeapon3").visible = false;
                    this.GetBtn("btnWeapon4").visible = false;
                }
            } else {
                this.GetBtn("btnWeapon1").x = 14;
                this.GetBtn("btnWeapon2").x = 146;
                this.GetBtn("btnWeapon3").visible = true;
                this.GetBtn("btnWeapon4").visible = true;
            }
        }
        RefreshSigleWeaponInfo(wpIconImgName, weaponMagTxtName, wepaonSrc, weaponName) {
            if (wepaonSrc && weaponName != Std.WeaponName_None) {
                this.SetVisible(wpIconImgName, true);
                this.SetImgSkin(wpIconImgName, WeaponInfoMgr.Instance.GetWeaponIconByName(weaponName));
                this.SetText(weaponMagTxtName, wepaonSrc.curMag + "/" + wepaonSrc.curTotalBullets);
            } else {
                this.SetVisible(wpIconImgName, false);
            }
            if (wepaonSrc && wepaonSrc.nowWeaponIndex == 4 && UIDataMidLyaer.TryUse_IsTryUsing == true && UIDataMidLyaer.TryUse_TxtData != Std.WeaponName_None) {
                this.SetVisible(wpIconImgName, true);
                this.SetImgSkin(wpIconImgName, WeaponInfoMgr.Instance.GetWeaponIconByName(UIDataMidLyaer.TryUse_TxtData));
                this.SetText(weaponMagTxtName, wepaonSrc.curMag + "/" + wepaonSrc.curTotalBullets);
            }
        }
        RefreshWeaponLockInfoUI() {
            this.RefreshSingleWeaponLockInfoUI12(this.hasUnlockWp1, "btnWeapon1", "imgWp1Icon", PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon1Name);
            this.RefreshSingleWeaponLockInfoUI12(this.hasUnlockWp2, "btnWeapon2", "imgWp2Icon", PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon2Name);
            this.RefreshSingleWeaponLockInfoUI34(this.hasUnlockWp3, "btnWeapon3", "btnUnlockWeapon3Ad", "imgWp3Icon", PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon3Name, 3);
            this.RefreshSingleWeaponLockInfoUI34(this.hasUnlockWp4, "btnWeapon4", "btnUnlockWeapon4Ad", "imgWp4Icon", PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon4Name, 4);
        }
        RefreshSingleWeaponLockInfoUI12(hasUnlockWp, btnName, wpIconImgName, weaponName) {
            if (hasUnlockWp) {
                this.SetBtnSkin(btnName, this.hasLockWpBtnSkin);
                this.SetVisible(wpIconImgName, weaponName != Std.WeaponName_None);
            } else {
                this.SetBtnSkin(btnName, this.lockedWpBtnSkin);
                this.SetVisible(wpIconImgName, false);
            }
        }
        RefreshSingleWeaponLockInfoUI34(hasUnlockWp, btnName, lockIconName, wpIconImgName, weaponName, idx) {
            if (hasUnlockWp == true) {
                this.SetVisible(lockIconName, false);
                this.SetBtnSkin(btnName, this.hasLockWpBtnSkin);
                this.SetVisible(wpIconImgName, weaponName != Std.WeaponName_None);
            } else {
                this.SetVisible(lockIconName, true);
                this.SetBtnSkin(btnName, this.lockedWpBtnSkin);
                this.SetVisible(wpIconImgName, false);
            }
            if (idx == 4 && UIDataMidLyaer.TryUse_IsTryUsing == true) {
                this.SetVisible(lockIconName, false);
                this.SetBtnSkin(btnName, this.hasLockWpBtnSkin);
                this.SetVisible(wpIconImgName, UIDataMidLyaer.TryUse_TxtData != Std.WeaponName_None);
            }
        }
        RefreshPlayerHpUI() {
            this.imgPlayerHpBar.width = 328 * (PlayerInGameDataMgr.Instance.GetPlayerCurHp() / PlayerInGameDataMgr.Instance.GetPlayerMaxHp());
            this.imgPlayerShieldBar.width = 328 * (PlayerInGameDataMgr.Instance.GetPlayerCurShield() / PlayerInGameDataMgr.Instance.GetPlayerMaxShield());
            this.img_Shield.visible = PlayerInGameDataMgr.Instance.GetPlayerCurShield() > 0;
        }
        ChangeWeapon(nowWeaponIndex) {
            let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            if (nowUsingWeapon) {
                if (nowUsingWeapon.nowWeaponIndex != nowWeaponIndex) {
                    WeaponMgr.Instance.ChangeWeapon(nowWeaponIndex);
                    if (nowUsingWeapon.isReloading) {
                        Dispatcher.Event(EventType.OnPlayerInteraptReload);
                    }
                }
            } else {
                WeaponMgr.Instance.ChangeWeapon(nowWeaponIndex);
            }
        }
    }
    class Hzzxsdk {
        constructor() {
            this.pid = "1092";
        }
        static GetInit() {
            if (!this.Init) this.Init = new Hzzxsdk();
            return this.Init;
        }
        InitHzzxsdk() {
            this.RewardedAdList = new Array();
            this.RecommedAdList = new Array();
            this.BannerAdList = new Array();
            let isNeedUnionid = false;
            hzzxsdk.initAndGetOpenId(this.pid, isNeedUnionid).then(openid => {
                console.log("获得openid", openid);
            }).catch(e => {
                console.log("初始化失败.", e);
            });
        }
        GetUser() {
            let user = hzzxsdk.getUser();
            if (user) {
                console.log("openid=", user.openid);
            }
        }
        Debug(bool) {
            hzzxsdk.setDebugMode(bool);
        }
        GetGameConfig() {
            hzzxsdk.getGameConfig(this.pid).then(gameConfig => { });
        }
        GetGameVerContrLevel(num) {
            let codeVersion = "1";
            hzzxsdk.getGameVerContrLevel(codeVersion, this.pid).then(verContrData => { });
        }
        CheckFission() {
            hzzxsdk.checkFission();
        }
        GetShareObject() { }
        GetIconAd(num) {
            let score = 0;
            hzzxsdk.getIconAd(0).then(ad => { });
        }
        GetRecommedAdList(isRandomSort = false, count = 0, score) {
            hzzxsdk.getRecommedAdList(isRandomSort, count, 0).then(adList => {
                this.RecommedAdList = adList;
            });
        }
        GetRewardedAdList(isRandomSort = false, count = 0, score) {
            hzzxsdk.getRewardedAdList(isRandomSort, count, 0).then(adList => {
                this.RewardedAdList = adList;
            });
        }
        GetBannerAdList(isRandomSort = false, count = 0, score) {
            hzzxsdk.getBannerAdList(isRandomSort, count, 0).then(adList => {
                this.BannerAdList = adList;
                console.log("获取banner广告列表:", adList);
            });
        }
        ClickAndNavigate(ad, sceneCode) {
            hzzxsdk.clickAndNavigate(ad, 0).then(res => {
                console.log("跳转是否成功 = ", res.navigateTo);
            });
        }
        ReportCustomEvent(id, param1, param2) {
            hzzxsdk.reportCustomEvent(id, param1, param2);
        }
    }
    class SelectAllWeaponsPanel extends UIBase {
        constructor() {
            super();
            this.hasClickClose = false;
            this.clickNum = 0;
            this.index = 0;
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.RefreshTryUseCache();
            UIMgr.Instance.OpenUI(CurrencyDataPanel, () => { }, this.GetImg("imgCurrencyBg"));
            this.InitGuide();
        }
        onStart() {
            this.AddBtnListener();
            SdkManager.Instance.HideBanner();
            GameLevelMgr.Instance.SetIsPlayerInSelectEquipPage(true);
            InputMgr.Instance.SetCanInput(false);
            this.btnStart = this.GetBtn("btnStart");
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.YouYu) {
                if (DataTool.GetInt(Std.YYWeaponInitKey) == 0) {
                    PlayerLocalDataMgr.Instance.SetPlayerData(Std.WeaponName_None, Std.WeaponName_M1911, Std.WeaponName_None, Std.WeaponName_None);
                    this.GetBtn("btnSelectWeapon1").mouseEnabled = false;
                    this.SetBtnSkin("btnYouYuStart", "YouYuMode/btn_xdwq2.png");
                    this.AddBtnEventScaleFx("btnYouYuStart", () => {
                        Std.byWeapon = true;
                        DataTool.SetKv(Std.YYWeaponInitKey, 1);
                        this.ReadyToBattle();
                    });
                } else {
                    PlayerLocalDataMgr.Instance.RefreshPlayerData();
                    this.SetBtnSkin("btnYouYuStart", "YouYuMode/btn_xdwq.png");
                    this.AddBtnEventScaleFx("btnYouYuStart", () => {
                        PopMsgTool.ShowConfirmPicPanel("整装待发", "           携带武器进入游戏", "YouYuMode/pop_pix_pxyx.png", () => {
                            CountSdkMgr.Instance.TrackEvent("videStart24");
                            SdkManager.Instance.ShowVideoAd(() => {
                                Std.byWeapon = true;
                                CountSdkMgr.Instance.TrackEvent("videComplete24");
                                this.ReadyToBattle();
                            });
                        });
                    });
                }
                this.btnStart.skin = "YouYuMode/btn_bdwq.png";
            } else {
                this.SetVisible("btnYouYuStart", false);
                PlayerLocalDataMgr.Instance.RefreshPlayerData();
            }
            if (SdkManager.Instance.GetSwitchData("p4") >= Math.random() * 100) {
                Tool.AddBtnEventScale(this.btnStart, this, () => {
                    this.wdClick();
                });
            } else {
                Tool.AddBtnEventScale(this.btnStart, this, () => {
                    this.ReadyToBattle();
                });
            }
            this.RefreshWeaponIconAndName();
            this.RefreshAllWeaponLockState();
            this.AddGlowFilter();
            if (WeaponMgr.Instance.GetMapCam()) {
                WeaponMgr.Instance.GetMapCam().active = true;
            }
            UIMgr.Instance.DestroyUI("SelectSingleWeaponPanel");
            this.RefreshFirstTimeInBattleOrInGameDieSelectEquipUI();
        }
        wdClick() {
            if (0/* this.clickNum < 1 */) {
                this.clickNum += 1;
                SdkManager.Instance.ShowBanner("right");
                Laya.timer.once(1e3, this, () => {
                    SdkManager.Instance.HideBanner();
                });
                Laya.timer.once(2e3, this, () => {
                    SdkManager.Instance.ShowBanner("right");
                });
                Laya.timer.once(3e3, this, () => {
                    SdkManager.Instance.HideBanner();
                });
            } else {
                this.ReadyToBattle();
            }
        }
        ReadyToBattle() {
            Std.byWeapon = !(GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.YouYu);
            if (this.hasClickClose == true) {
                return;
            }
            this.InitMouseSensitivityGuide();
            GameLevelMgr.Instance.SetIsPlayerInSelectEquipPage(false);
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                if (DataTool.GetInt(Std.Guide_HasLearn_MouseSensitivity) == 1) {
                    TryUseWeaponTool.InitTryUseWeapon();
                }
            } else if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.ZombieMode) {
                TryUseWeaponTool.InitTryUseWeapon();
            } else if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.YouYu) {
                UIDataMidLyaer.TryUse_IsTryUsing = false;
                UIDataMidLyaer.TryUse_TxtData = Std.WeaponName_None;
                Dispatcher.Event(EventType.OnDoSpawnPlayer);
            }
            this.CloseUI();
            SdkManager.Instance.HideCustomAd("1");
            SdkManager.Instance.HideCustomAd("2");
            this.hasClickClose = true;
        }
        InitMouseSensitivityGuide() {
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.ZombieMode) {
                return;
            }
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.YouYu) {
                return;
            }
            if (DataTool.GetInt(Std.Guide_HasLearn_MouseSensitivity) == 0) {
                GameLevelMgr.Instance.SetIsPlayerInMouseGuide(true);
                GuideMgr.Instance.InitDataAndShowGuide([{
                    x: 150,
                    y: 135,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: 300,
                    tipy: 115,
                    tipStr: "滑动灵敏度条可以调节手指滑动屏幕时的灵敏度！"
                }], () => {
                    DataTool.SetKv(Std.Guide_HasLearn_MouseSensitivity, 1);
                    GameLevelMgr.Instance.SetIsPlayerInMouseGuide(false);
                    TryUseWeaponTool.InitTryUseWeapon();
                    CountSdkMgr.Instance.TrackEvent("guide1");
                });
            }
        }
        InitGuide() {
            if (DataTool.GetInt(Std.Guide_HasLearn_SelectAllEquipPage) == 0) {
                GuideMgr.Instance.InitDataAndShowGuide([{
                    x: 266,
                    y: 205,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: 186,
                    tipy: 320,
                    tipStr: "点击武器栏可以更换其它武器，赶紧试试吧！"
                }, {
                    x: 200,
                    y: 400,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: 350,
                    tipy: 320,
                    tipStr: "功能武器可以生存能力和战斗力，点击就可以立即解锁哦！"
                }, {
                    x: 550,
                    y: 400,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: 350,
                    tipy: 480,
                    tipStr: "特殊武器可以大大地提升战斗力，点击就可以立即解锁哦！"
                }], () => {
                    DataTool.SetKv(Std.Guide_HasLearn_SelectAllEquipPage, 1);
                });
            }
        }
        RefreshFirstTimeInBattleOrInGameDieSelectEquipUI() {
            if (UIDataMidLyaer.IsFirstTimeInBattleSelectEquipUI == true) {
                this.SetVisible("imgSkinBg", true);
                this.SetVisible("imgBgDark", false);
                this.SetVisible("imgCurrencyBg", true);
                this.SetVisible("imgRightRole", true);
                this.SetVisible("btnBack", true);
                this.SetVisible("imgRecoverTip", false);
                this.GetImg("imgInnerBg").centerX = NaN;
                this.GetImg("imgInnerBg").left = 0;
            } else {
                this.SetVisible("imgSkinBg", false);
                this.SetVisible("imgBgDark", true);
                this.SetVisible("imgCurrencyBg", false);
                this.SetVisible("btnBack", false);
                this.SetVisible("imgRightRole", false);
                this.SetVisible("imgRecoverTip", true);
                this.GetImg("imgInnerBg").left = NaN;
                this.GetImg("imgInnerBg").centerX = 0;
                this.btn_GameIcon = this.GetBtn("btn_GameIcon");
                this.img_icon = Tool.GetImg(this.btn_GameIcon, "img_icon");
                Laya.timer.once(700, this, () => {
                    SdkManager.Instance.ShowInsertAd();
                });
                SdkManager.Instance.ShowCustomAd("1", {
                    left: 40 * Std.UI_ad_cTopx,
                    top: 80 * Std.UI_ad_cTopx,
                    width: 72
                });
                SdkManager.Instance.ShowCustomAd("2", {
                    left: Laya.Browser.clientWidth - 72,
                    top: 100,
                    width: 72
                });
            }
        }
        FuncNTGame() {
            this.btn_GameIcon.visible = Hzzxsdk.Init.RewardedAdList ? true : false;
            if (!Hzzxsdk.Init.RewardedAdList) return;
            if (Hzzxsdk.Init.RewardedAdList.length <= 0) return;
            if (this.index < Hzzxsdk.Init.RewardedAdList.length) {
                this.Iad = Hzzxsdk.Init.RewardedAdList[this.index];
                this.index += 1;
                this.img_icon.skin = this.Iad.icon;
            }
        }
        AddBtnListener() {
            this.AddBtnEvent("btnLock1Bg", () => {
                this.UnlockEquip("btnLock1Bg", Std.Local_HasUnlockWeapon1Key);
            });
            this.AddBtnEvent("btnLock2Bg", () => {
                this.UnlockEquip("btnLock2Bg", Std.Local_HasUnlockWeapon2Key);
            });
            this.AddBtnEvent("btnLock3Bg", () => {
                PopMsgTool.ShowConfirmPanel("解锁武器栏3", "是否观看视频永久解锁【功能武器】卡槽?  仅解锁武器栏。", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart12");
                    SdkManager.Instance.ShowVideoAd(() => {
                        this.UnlockEquip("btnLock3Bg", Std.Local_HasUnlockWeapon3Key);
                        CountSdkMgr.Instance.TrackEvent("videComplete12");
                    });
                });
            });
            this.AddBtnEvent("btnLock4Bg", () => {
                PopMsgTool.ShowConfirmPanel("解锁武器栏4", "是否观看视频永久解锁【特殊武器】卡槽? 仅解锁武器栏。", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart13");
                    SdkManager.Instance.ShowVideoAd(() => {
                        this.UnlockEquip("btnLock4Bg", Std.Local_HasUnlockWeapon4Key);
                        CountSdkMgr.Instance.TrackEvent("videComplete13");
                    });
                });
            });
            this.AddBtnEvent("btnSelectWeapon1", () => {
                this.OpenSelectSingleWeaponCommon(1);
                SdkManager.Instance.HideBanner();
            });
            this.AddBtnEvent("btnSelectWeapon2", () => {
                this.OpenSelectSingleWeaponCommon(2);
                SdkManager.Instance.HideBanner();
            });
            this.AddBtnEvent("btnSelectWeapon3", () => {
                this.OpenSelectSingleWeaponCommon(3);
                SdkManager.Instance.HideBanner();
            });
            this.AddBtnEvent("btnSelectWeapon4", () => {
                this.OpenSelectSingleWeaponCommon(4);
                SdkManager.Instance.HideBanner();
            });
            this.AddBtnEventScaleFx("btnBack", () => {
                GameLevelMgr.Instance.SetIsPlayerInSelectEquipPage(false);
                Dispatcher.Event(EventType.OnBackToMenu);
                SdkManager.Instance.HideBanner();
            });
        }
        UnlockEquip(btnLockBgName, hasUnlockWeaponKey) {
            this.SetVisible(btnLockBgName, false);
            DataTool.SetKv(hasUnlockWeaponKey, 1);
            DataTool.SetKv(Std.weapon34isNoLock, 1);
            this.RefreshAllWeaponLockState();
            Dispatcher.Event(EventType.OnWeaponUnlockStateChange);
            GenGamePlayTool.PlayUnlockSfx();
            PopMsgTool.PopMsg("解锁成功！");
        }
        OpenSelectSingleWeaponCommon(rebornChangeWeaponIndex) {
            WeaponMgr.Instance.SetRebornChangeWeaponIndex(rebornChangeWeaponIndex);
            Dispatcher.Event(EventType.OnOpenSelectSingleWeaponPanel);
        }
        AddGlowFilter() {
            let glowFilter = new Laya.GlowFilter("#eaff00", 3, 0, 0);
            this.GetImg("imgWeapon1Icon").filters = [glowFilter];
            this.GetImg("imgWeapon2Icon").filters = [glowFilter];
            this.GetImg("imgWeapon3Icon").filters = [glowFilter];
            this.GetImg("imgWeapon4Icon").filters = [glowFilter];
        }
        RefreshAllWeaponLockState() {
            let playerLocalData = PlayerLocalDataMgr.Instance.GetPlayerData();
            if (!playerLocalData) {
                return;
            }
            this.RefreshSigleWeaponState(Std.Local_HasUnlockWeapon1Key, WeaponInfoMgr.Instance.GetWeaponIconByName(playerLocalData.equipWeapon1Name), "btnLock1Bg", "imgWeapon1Icon", "txtWeapon1Name");
            this.RefreshSigleWeaponState(Std.Local_HasUnlockWeapon2Key, WeaponInfoMgr.Instance.GetWeaponIconByName(playerLocalData.equipWeapon2Name), "btnLock2Bg", "imgWeapon2Icon", "txtWeapon2Name");
            this.RefreshSigleWeaponState(Std.Local_HasUnlockWeapon3Key, WeaponInfoMgr.Instance.GetWeaponIconByName(playerLocalData.equipWeapon3Name), "btnLock3Bg", "imgWeapon3Icon", "txtWeapon3Name");
            this.RefreshSigleWeaponState(Std.Local_HasUnlockWeapon4Key, WeaponInfoMgr.Instance.GetWeaponIconByName(playerLocalData.equipWeapon4Name), "btnLock4Bg", "imgWeapon4Icon", "txtWeapon4Name");
        }
        RefreshSigleWeaponState(hasUnlockWeaponKey, weaponName, btnLockBgName, weaponIconName, txtWeaponName) {
            let hasUnlock = DataTool.GetInt(hasUnlockWeaponKey) == 1;
            if (hasUnlock == true) {
                this.SetVisible(btnLockBgName, false);
                if (weaponName == Std.WeaponName_None) {
                    this.SetVisible(weaponIconName, false);
                    this.SetVisible(txtWeaponName, false);
                } else {
                    this.SetVisible(weaponIconName, true);
                    this.SetVisible(txtWeaponName, true);
                }
            } else {
                this.SetVisible(btnLockBgName, true);
            }
        }
        RefreshTryUseCache() {
            let playerLocalData = PlayerLocalDataMgr.Instance.GetPlayerData();
            if (!playerLocalData) {
                return;
            }
            if (playerLocalData.equipWeapon4Name != Std.WeaponName_None && WeaponInfoMgr.Instance.GetHasUnlockWeapon(playerLocalData.equipWeapon4Name) == false && UIDataMidLyaer.TryUse_IsTryUsing == false) {
                DataTool.SetKv(Std.Local_EquipWeapon4Key, Std.WeaponName_None);
                PlayerLocalDataMgr.Instance.RefreshPlayerData();
            }
        }
        RefreshWeaponIconAndName() {
            let playerLocalData = PlayerLocalDataMgr.Instance.GetPlayerData();
            if (!playerLocalData) {
                return;
            }
            this.SetImgSkin("imgWeapon1Icon", WeaponInfoMgr.Instance.GetWeaponIconByName(playerLocalData.equipWeapon1Name));
            this.SetImgSkin("imgWeapon2Icon", WeaponInfoMgr.Instance.GetWeaponIconByName(playerLocalData.equipWeapon2Name));
            this.SetImgSkin("imgWeapon3Icon", WeaponInfoMgr.Instance.GetWeaponIconByName(playerLocalData.equipWeapon3Name));
            this.SetImgSkin("imgWeapon4Icon", WeaponInfoMgr.Instance.GetWeaponIconByName(playerLocalData.equipWeapon4Name));
            this.SetText("txtWeapon1Name", WeaponInfoMgr.Instance.GetWeaponChnNameByName(playerLocalData.equipWeapon1Name));
            this.SetText("txtWeapon2Name", WeaponInfoMgr.Instance.GetWeaponChnNameByName(playerLocalData.equipWeapon2Name));
            this.SetText("txtWeapon3Name", WeaponInfoMgr.Instance.GetWeaponChnNameByName(playerLocalData.equipWeapon3Name));
            this.SetText("txtWeapon4Name", WeaponInfoMgr.Instance.GetWeaponChnNameByName(playerLocalData.equipWeapon4Name));
        }
        CloseUI() {
            SdkManager.Instance.HideBanner();
            SdkManager.Instance.HideCustomAd("1");
            SdkManager.Instance.HideCustomAd("2");
            super.CloseUI();
        }
    }
    class SelectSingleWeaponPanel extends UIBase {
        constructor() {
            super();
            this.nowSelectWeaponName = "";
            this.nowRealSelectWeaponName = "";
            this.selectFramePath = "EquipSelect/weaponset_btn_boxframe2.png";
            this.unSelectFramePath = "EquipSelect/reborn_btn_weaponframe.png";
        }
        onAwake() {
            this.SetAllUINodesDic();
        }
        onStart() {
            this.GetNeedUI();
            this.InitLvList();
            this.InitWeaponIconOut();
            this.InitNowSelectWeaponName();
            this.RefreshWeaponDataProgress();
            UIMgr.Instance.DestroyUI("SelectAllWeaponsPanel");
            this.AddBtnEvent("btnBack", () => {
                Dispatcher.Event(EventType.OnOpenSelectAllWeaponsPanel);
            });
            this.AddBtnEvent("btnSelect", () => {
                Dispatcher.Event(EventType.OnOpenSelectAllWeaponsPanel);
                this.SaveSelectWeapon();
            });
        }
        GetNeedUI() {
            this.listWeaponSelect = this.GetList("listSelectWeapon");
            this.imgSelectWeaponIcon = this.GetImg("imgSelectWeaponIcon");
        }
        RefreshAmmoAndHpBox() {
            if (this.nowRealSelectWeaponName == Std.WeaponName_AmmoBox) {
                this.SetVisible("imgEquipInfoBg", false);
                this.SetVisible("imgEquipTxtDescBg", true);
                this.SetText("txtFuncEquipDesc", "弹药箱可以在战斗中使用，补给满所有武器的弹药");
            } else if (this.nowRealSelectWeaponName == Std.WeaponName_HpBox) {
                this.SetVisible("imgEquipInfoBg", false);
                this.SetVisible("imgEquipTxtDescBg", true);
                this.SetText("txtFuncEquipDesc", "医疗箱可以在战斗中使用，恢复所有生命值");
            } else {
                this.SetVisible("imgEquipInfoBg", true);
                this.SetVisible("imgEquipTxtDescBg", false);
            }
        }
        InitWeaponIconOut() {
            let nowEquipWeaponName = "";
            let idx = WeaponMgr.Instance.GetRebornChangeWeaponIndex();
            if (idx == 1) nowEquipWeaponName = PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon1Name; else if (idx == 2) nowEquipWeaponName = PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon2Name; else if (idx == 3) nowEquipWeaponName = PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon3Name; else if (idx == 4) nowEquipWeaponName = PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon4Name;
            this.imgSelectWeaponIcon.skin = WeaponInfoMgr.Instance.GetWeaponIconByName(nowEquipWeaponName);
            this.nowRealSelectWeaponName = nowEquipWeaponName;
        }
        InitNowSelectWeaponName() {
            let idx = WeaponMgr.Instance.GetRebornChangeWeaponIndex();
            if (idx == 1) this.nowSelectWeaponName = PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon1Name; else if (idx == 2) this.nowSelectWeaponName = PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon2Name; else if (idx == 3) this.nowSelectWeaponName = PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon3Name; else if (idx == 4) this.nowSelectWeaponName = PlayerLocalDataMgr.Instance.GetPlayerData().equipWeapon4Name;
        }
        SaveSelectWeapon() {
            let idx = WeaponMgr.Instance.GetRebornChangeWeaponIndex();
            if (WeaponInfoMgr.Instance.GetHasUnlockWeapon(this.nowSelectWeaponName) == false) {
                this.nowSelectWeaponName = Std.WeaponName_None;
            }
            if (idx == 1) DataTool.SetKv(Std.Local_EquipWeapon1Key, this.nowSelectWeaponName); else if (idx == 2) DataTool.SetKv(Std.Local_EquipWeapon2Key, this.nowSelectWeaponName); else if (idx == 3) DataTool.SetKv(Std.Local_EquipWeapon3Key, this.nowSelectWeaponName); else if (idx == 4) DataTool.SetKv(Std.Local_EquipWeapon4Key, this.nowSelectWeaponName);
            PlayerLocalDataMgr.Instance.RefreshPlayerData();
            if (this.nowSelectWeaponName != Std.WeaponName_None) {
                GenGamePlayTool.PlayEquipItemSfx();
                PopMsgTool.PopMsg("装备成功！");
            }
            if (UIDataMidLyaer.TryUse_IsTryUsing == true) {
                UIDataMidLyaer.TryUse_TxtData = Std.WeaponName_None;
                UIDataMidLyaer.TryUse_IsTryUsing = false;
            }
        }
        InitLvList() {
            this.listWeaponSelect.vScrollBarSkin = "";
            this.listWeaponSelect.selectEnable = true;
            this.listWeaponSelect.renderHandler = new Laya.Handler(this, this.OnRender);
            this.AddListElements();
        }
        OnRender(cell, index) {
            if (cell.hasListener(Laya.Event.CLICK)) {
                cell.offAll();
                cell.on(Laya.Event.CLICK, this, () => {
                    this.OnSelect(index);
                });
            }
            let imgWatchAdBg = cell.getChildByName("watchAdBg");
            let txtWatchAdTimes = imgWatchAdBg.getChildByName("watchAdTimes");
            let imgWeaponIcon = cell.getChildByName("innerBg").getChildByName("weaponIcon");
            let txtWeaponName = cell.getChildByName("innerBg").getChildByName("weaponName");
            let weaponIndexName = WeaponInfoMgr.Instance.GetNowSelectWeaponsData()[index];
            let needWatchTime = WeaponInfoMgr.Instance.GetUnlockWeaponWatchAdCount(weaponIndexName);
            let hasWatchTime = WeaponInfoMgr.Instance.GetHasWatchAdUnlockWeaponCount(weaponIndexName);
            txtWatchAdTimes.text = hasWatchTime + "/" + needWatchTime;
            txtWeaponName.text = WeaponInfoMgr.Instance.GetWeaponChnNameByName(weaponIndexName);
            imgWeaponIcon.skin = WeaponInfoMgr.Instance.GetWeaponIconByName(weaponIndexName);
            imgWatchAdBg.visible = weaponIndexName != Std.WeaponName_None;
            imgWatchAdBg.visible = hasWatchTime < needWatchTime;
            let glowFilter = new Laya.GlowFilter("#eaff00", 3, 0, 0);
            imgWeaponIcon.filters = [glowFilter];
            let weaponOutFrame = cell.getChildByName("weaponOutFrame");
            weaponOutFrame.skin = this.nowRealSelectWeaponName == weaponIndexName ? this.selectFramePath : this.unSelectFramePath;
            this.RefreshAmmoAndHpBox();
        }
        RefreshWeaponDataProgress() {
            this.SetText("txtSelectEquipName", WeaponInfoMgr.Instance.GetWeaponChnNameByName(this.nowSelectWeaponName));
            let weaponData = WeaponInfoMgr.Instance.GetWeaponPowerRecoilMagData(this.nowSelectWeaponName);
            let maxWid = 204;
            Laya.Tween.to(this.GetImg("imgPowerBar"), {
                width: maxWid * weaponData[0]
            }, 300);
            Laya.Tween.to(this.GetImg("imgRecoilBar"), {
                width: maxWid * weaponData[1]
            }, 300);
            Laya.Tween.to(this.GetImg("imgMagBar"), {
                width: maxWid * weaponData[2]
            }, 300);
        }
        OnSelect(index) {
            this.nowSelectWeaponName = WeaponInfoMgr.Instance.GetNowSelectWeaponsData()[index];
            let needWatchTime = WeaponInfoMgr.Instance.GetUnlockWeaponWatchAdCount(this.nowSelectWeaponName);
            let hasWatchTime = WeaponInfoMgr.Instance.GetHasWatchAdUnlockWeaponCount(this.nowSelectWeaponName);
            if (hasWatchTime >= needWatchTime) {
                this.imgSelectWeaponIcon.skin = WeaponInfoMgr.Instance.GetWeaponIconByName(this.nowSelectWeaponName);
                if (this.nowSelectWeaponName == Std.WeaponName_None) {
                    this.SetVisible("imgEquipInfoBg", false);
                } else {
                    this.SetVisible("imgEquipInfoBg", true);
                    this.RefreshWeaponDataProgress();
                }
                this.nowRealSelectWeaponName = this.nowSelectWeaponName;
            } else {
                let wpName = WeaponInfoMgr.Instance.GetWeaponChnNameByName(this.nowSelectWeaponName);
                PopMsgTool.ShowConfirmPicPanel("获取枪械", "是否观看视频永久获得【" + wpName + "】?", this.nowSelectWeaponName, () => {
                    CountSdkMgr.Instance.TrackEvent("videStart6");
                    SdkManager.Instance.ShowVideoAd(() => {
                        DataTool.ModifyInt(WeaponInfoMgr.Instance.GetWatchAdUnlockLocalKey(this.nowSelectWeaponName), 1);
                        if (WeaponInfoMgr.Instance.GetHasWatchAdUnlockWeaponCount(this.nowSelectWeaponName) >= WeaponInfoMgr.Instance.GetUnlockWeaponWatchAdCount(this.nowSelectWeaponName)) {
                            GenGamePlayTool.PlayUnlockSfx();
                            PopMsgTool.PopMsg("解锁成功！");
                        }
                        this.listWeaponSelect.refresh();
                        CountSdkMgr.Instance.TrackEvent("videComplete6");
                    });
                });
            }
            this.listWeaponSelect.refresh();
        }
        AddListElements() {
            let data = [];
            this.listWeaponSelect.repeatX = 1;
            this.listWeaponSelect.repeatY = WeaponInfoMgr.Instance.GetNowSelectWeaponsDataCount();
            let counts = this.listWeaponSelect.repeatX * this.listWeaponSelect.repeatY;
            for (let i = 0; i < counts; i++) {
                let tempData = {};
                data.push(tempData);
            }
            this.listWeaponSelect.array = data;
        }
    }
    class AutoDestoy extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            Laya.timer.once(5e3, this, () => {
                this.owner.destroy(true);
            });
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
        }
    }
    var ViecleTypeEnum;
    (function (ViecleTypeEnum) {
        ViecleTypeEnum[ViecleTypeEnum["None"] = 0] = "None";
        ViecleTypeEnum[ViecleTypeEnum["AirPlane"] = 1] = "AirPlane";
        ViecleTypeEnum[ViecleTypeEnum["Tank"] = 2] = "Tank";
    })(ViecleTypeEnum || (ViecleTypeEnum = {}));
    class ViecleBase extends Laya.Script3D {
        constructor() {
            super();
            this.maxHp = 1e3;
            this.curHp = 1e3;
            this.damage = 150;
            this.fireRate = .2;
            this.lastFireTime = 0;
            this.outHitInfo = new Laya.HitResult();
        }
        onAwake() {
            this.GetNeed();
        }
        PlayViecleMoveSound() {
            if (!this.viecleMoveSdCn) {
                if (this.viecleType == ViecleTypeEnum.Tank) {
                    this.viecleMoveSdCn = Laya.SoundManager.playSound("res/Sounds/tankmove.mp3", 0);
                } else if (this.viecleType == ViecleTypeEnum.AirPlane) {
                    this.viecleMoveSdCn = Laya.SoundManager.playSound("res/Sounds/airMove.mp3", 0);
                }
            }
        }
        StopViecleMoveSound() {
            if (this.viecleMoveSdCn) {
                this.viecleMoveSdCn.stop();
                this.viecleMoveSdCn = null;
            }
        }
        InitViecle(maxHp, viecleType, fireRate, damage) {
            this.lastFireTime = GameTimeMgr.Instance.GetGameTime();
            this.maxHp = maxHp;
            this.curHp = this.maxHp;
            this.viecleType = viecleType;
            this.fireRate = fireRate;
            this.damage = damage;
            if (this.viecleType == ViecleTypeEnum.Tank) {
                this.damage += DataTool.GetInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(Std.WeaponName_ViecleTanK)) * 5;
                this.maxHp += DataTool.GetInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(Std.WeaponName_ViecleTanK)) * 5;
                this.curHp = this.maxHp;
                ResMgr.Instance.LoadSp3d(Std.Prefab_RpgBullet, this, bt => {
                    this.bulletPrefab = bt.clone();
                });
            } else {
                this.damage += DataTool.GetInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(Std.WeaponName_ViecleAirPlane)) * 5;
                this.maxHp += DataTool.GetInt(WeaponInfoMgr.Instance.GetWepaonUpdateLevelKeyByName(Std.WeaponName_ViecleAirPlane)) * 5;
                this.curHp = this.maxHp;
                ResMgr.Instance.LoadSp3d(Std.Prefab_BtTrail, this, bt => {
                    this.bulletPrefab = bt.clone();
                });
            }
        }
        GetNeed() {
            this.selfSp3d = this.owner;
            this.viecleCam = this.selfSp3d.getChildByName("ViecleCam");
            this.downVieclePos = this.selfSp3d.getChildByName("DownVieclePos");
            this.fpsRoter = SceneMgr.Instance.GetCurSc2D().getChildByName("imgPlayerCtlBg").getComponent(LookRoter);
            this.sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            this.SetViecleCamActive(false);
        }
        IsThisViecleSamePlayerRide() {
            if (ViecleMgr.Instance.GetIsPlayerRidingViecle() == false) {
                return false;
            }
            let nowRide = ViecleMgr.Instance.GetNowRideViecle();
            if (nowRide.selfSp3d == this.selfSp3d) {
                return true;
            }
            return false;
        }
        SetViecleCamActive(active) {
            this.viecleCam.active = active;
        }
        ViecleBeHit(damage) {
            let nowRideV = ViecleMgr.Instance.GetNowRideViecle();
            if (!nowRideV) {
                return;
            }
            if (this.curHp <= 0 || nowRideV.selfSp3d != this.selfSp3d) {
                return;
            }
            this.curHp -= damage;
            if (this.curHp <= 0) {
                this.curHp = 0;
                let playerDieCam = WeaponMgr.Instance.GetPlayerDieCam();
                playerDieCam.active = true;
                let targetPos = Tool.AddV3(this.selfSp3d.transform.position, Tool.V3(0, 14, -15));
                playerDieCam.transform.position = Tool.AddV3(this.selfSp3d.transform.position, Tool.V3(0, 2, 0));
                Laya.Tween.to(playerDieCam.transform, {
                    localPositionX: targetPos.x,
                    localPositionY: targetPos.y,
                    localPositionZ: targetPos.z
                }, 800, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                    ResMgr.Instance.LoadSp3d(Std.Prefab_FxBoom, this, sp3d => {
                        let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
                        let fxIns = Laya.Sprite3D.instantiate(sp3d, sc3d);
                        fxIns.addComponent(AutoDestoy);
                        this.selfSp3d.transform.localScale = Tool.V3Zero();
                        fxIns.transform.localScale = Tool.V3(15, 15, 15);
                        let fx1 = fxIns.getChildAt(0);
                        let fx2 = fxIns.getChildAt(1);
                        let boomPos = Tool.AddV3(this.selfSp3d.transform.position, Tool.V3(0, 0, 0));
                        fxIns.transform.position = boomPos;
                        fxIns.particleSystem.play();
                        fx1.particleSystem.play();
                        fx2.particleSystem.play();
                        SoundTool.PlaySfxByName("boom");
                    });
                }));
                this.StopViecleMoveSound();
                Laya.timer.once(1500, this, () => {
                    this.selfSp3d.destroy(true);
                });
                Dispatcher.Event(EventType.OnPlayerAirePlaneDieAndPlayerOnIt);
            }
        }
        onCollisionEnter(col) {
            if (col.other.owner.name == Std.Prefab_PlayerName) {
                Dispatcher.Event(EventType.OnPlayerColViecle);
                ViecleMgr.Instance.SetNowCollideViecle(this);
            }
        }
        onCollisionExit(col) {
            if (col.other.owner.name == Std.Prefab_PlayerName) {
                Dispatcher.Event(EventType.OnPlayerLeaveColViecle);
                ViecleMgr.Instance.SetNowCollideViecle(null);
            }
        }
    }
    class Viecle_AirPlane extends ViecleBase {
        constructor() {
            super();
            this.verSpeed = 0;
            this.horSpeed = 0;
            this.rotPropellerSpeed = 500;
            this.rotViewSpeed = 10;
            this.isFireAtLeftMuzzlePos = true;
            this.isMatchOver = false;
        }
        onStart() {
            this.InitViecle(1200, ViecleTypeEnum.AirPlane, .2, 150);
            this.GetNeedComp();
            this.InitCam();
            this.InitCC();
            Dispatcher.AddListener(EventType.OnAirePlaneVerMove, this, this.OnAirePlaneVerMove);
            Dispatcher.AddListener(EventType.OnAirePlaneForBackMove, this, this.OnAirePlaneForBackMove);
            Dispatcher.AddListener(EventType.OnPlayerViecleBeHit, this, this.ViecleBeHit);
            Dispatcher.AddListener(EventType.OnMatchOver, this, this.OnMatchOver);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnAirePlaneVerMove, this, this.OnAirePlaneVerMove);
            Dispatcher.RemoveListener(EventType.OnAirePlaneForBackMove, this, this.OnAirePlaneForBackMove);
            Dispatcher.RemoveListener(EventType.OnPlayerViecleBeHit, this, this.ViecleBeHit);
            Dispatcher.RemoveListener(EventType.OnMatchOver, this, this.OnMatchOver);
            Tool.ClearTimerAndTween(this);
        }
        onUpdate() {
            if (this.IsThisViecleSamePlayerRide() == false || this.curHp <= 0 || this.isMatchOver) {
                return;
            }
            this.AirPlaneMove();
            this.FireLogic();
            this.RotPropeller();
        }
        InitCC() {
            let cc = this.selfSp3d.addComponent(Laya.CharacterController);
            let colShape = new Laya.BoxColliderShape(3.2, 3.8, 19.5);
            colShape.localOffset = Tool.V3(-.2, 1, -4.9);
            cc.colliderShape = colShape;
            cc.gravity = Tool.V3Zero();
        }
        InitCam() {
            this.viecleCam.nearPlane = .012;
            this.viecleCam.farPlane = 500;
            this.viecleCam.fieldOfView = 60;
            this.viecleCam.clearFlag = 1;
        }
        OnMatchOver() {
            this.isMatchOver = true;
            this.StopViecleMoveSound();
        }
        RotPropeller() {
            this.airRot.transform.localRotationEulerY -= Tool.DeltaTime() * this.rotPropellerSpeed;
        }
        AirPlaneMove() {
            this.selfSp3d.transform.translate(Tool.V3(0, Tool.DeltaTime() * this.verSpeed, Tool.DeltaTime() * this.horSpeed));
            this.selfSp3d.transform.localRotationEulerY -= this.fpsRoter.GetRotOffsetXY().x * this.rotViewSpeed * Tool.DeltaTime();
        }
        GetNeedComp() {
            this.leftMuzzlePos = this.selfSp3d.getChildByName("leftMuzzlePos");
            this.rightMuzzlePos = this.selfSp3d.getChildByName("rightMuzzlePos");
            this.airRot = this.selfSp3d.getChildByName("AirRot");
        }
        OnAirePlaneVerMove(speed) {
            this.verSpeed = speed;
        }
        OnAirePlaneForBackMove(speed) {
            this.horSpeed = speed;
        }
        ShootRay() {
            let point = new Laya.Vector2(this.viecleCam.viewport.width / 2, this.viecleCam.viewport.height / 2);
            let ray = new Laya.Ray(Tool.V3(0, 0, 0), Tool.V3(0, 0, 0));
            this.viecleCam.viewportPointToRay(point, ray);
            this.sc3d.physicsSimulation.rayCast(ray, this.outHitInfo, 1e3);
            if (this.outHitInfo.succeeded) {
                let hitY = this.outHitInfo.point.y;
                let damage = this.damage;
                let isCritical = false;
                if (hitY > 32.5) {
                    isCritical = true;
                    damage = this.damage * 2;
                } else {
                    isCritical = false;
                    damage = this.damage;
                }
                let hitOwner = this.outHitInfo.collider.owner;
                this.aiSrc = hitOwner.getComponent(AIBase);
                if (this.aiSrc) {
                    if (GameLevelMgr.Instance.GetFriendlyFire()) {
                        this.MakeDamage(this.aiSrc, damage, isCritical);
                    } else {
                        if (this.aiSrc.teamColor != GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                            this.MakeDamage(this.aiSrc, damage, isCritical);
                        }
                    }
                } else {
                    this.aiSrc = null;
                }
            } else {
                this.aiSrc = null;
            }
        }
        MakeDamage(aiSrc, damage, isCritical) {
            aiSrc.BeHit(damage, AIDamageSource.Player);
            this.PlayHitEnemySfx();
            Dispatcher.Event(EventType.OnPlayerHitEnemy, damage);
            if (this.aiSrc.curHp <= 0) {
                if (aiSrc.teamColor != GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                    Dispatcher.Event(EventType.OnPlayerKillEnemy, isCritical);
                } else {
                    Dispatcher.Event(EventType.OnPlayerKillTeammate, isCritical);
                }
            }
        }
        FireLogic() {
            if (this.curHp <= 0) {
                return;
            }
            if (!ViecleMgr.Instance.GetIsViecleFire() || !(GameTimeMgr.Instance.GetGameTime() - this.lastFireTime > this.fireRate)) {
                return;
            }
            SoundTool.PlaySfxByName("Rpg");
            this.ShootRay();
            this.InsFireBullet();
            this.lastFireTime = GameTimeMgr.Instance.GetGameTime();
        }
        PlayHitEnemySfx() {
            let randSfxSoundPath = "res/Sounds/hit.mp3";
            SoundTool.PlaySfx(randSfxSoundPath);
        }
        InsFireBullet() {
            if (!this.bulletPrefab) {
                return;
            }
            let bt = this.bulletPrefab.clone();
            this.isFireAtLeftMuzzlePos = !this.isFireAtLeftMuzzlePos;
            if (this.isFireAtLeftMuzzlePos) {
                bt.transform.position = this.leftMuzzlePos.transform.position;
                bt.transform.rotation = this.leftMuzzlePos.transform.rotation;
            } else {
                bt.transform.position = this.rightMuzzlePos.transform.position;
                bt.transform.rotation = this.rightMuzzlePos.transform.rotation;
            }
            let src = bt.addComponent(BulletMove);
            this.sc3d.addChild(bt);
            var dirV3 = new Laya.Vector3();
            Laya.Vector3.subtract(this.outHitInfo.point, bt.transform.position, dirV3);
            src.setShootDirection(dirV3);
        }
    }
    class Viecle_Tank extends ViecleBase {
        constructor() {
            super();
            this.horSpeed = 0;
            this.rotViewSpeed = 15;
            this.isMatchOver = false;
        }
        onStart() {
            this.GetNeedComp();
            this.InitViecle(2500, ViecleTypeEnum.Tank, 1, 500);
            this.InitCam();
            this.InitCC();
            Dispatcher.AddListener(EventType.OnAirePlaneForBackMove, this, this.OnAirePlaneForBackMove);
            Dispatcher.AddListener(EventType.OnPlayerViecleBeHit, this, this.ViecleBeHit);
            Dispatcher.AddListener(EventType.OnMatchOver, this, this.OnMatchOver);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnAirePlaneForBackMove, this, this.OnAirePlaneForBackMove);
            Dispatcher.RemoveListener(EventType.OnPlayerViecleBeHit, this, this.ViecleBeHit);
            Dispatcher.RemoveListener(EventType.OnMatchOver, this, this.OnMatchOver);
            Tool.ClearTimerAndTween(this);
        }
        onUpdate() {
            if (this.IsThisViecleSamePlayerRide() == false || this.curHp <= 0 || this.isMatchOver) {
                return;
            }
            this.TankMove();
            this.FireLogic();
        }
        InitCC() {
            let cc = this.selfSp3d.addComponent(Laya.CharacterController);
            let colShape = new Laya.BoxColliderShape(5.5, 2.3, 9.1);
            colShape.localOffset = Tool.V3(0, 1.17, -1.23);
            cc.colliderShape = colShape;
        }
        InitCam() {
            this.viecleCam.nearPlane = .012;
            this.viecleCam.farPlane = 500;
            this.viecleCam.fieldOfView = 60;
            this.viecleCam.clearFlag = 1;
        }
        OnMatchOver() {
            this.isMatchOver = true;
            this.StopViecleMoveSound();
        }
        TankMove() {
            this.selfSp3d.transform.translate(Tool.V3(0, 0, Tool.DeltaTime() * this.horSpeed * .5));
            this.selfSp3d.transform.localRotationEulerY -= this.fpsRoter.GetRotOffsetXY().x * this.rotViewSpeed * Tool.DeltaTime();
        }
        GetNeedComp() {
            this.muzzlePos = this.selfSp3d.getChildByName("SA_Veh_Tank_Turret").getChildByName("SA_Veh_Tank_Barrel").getChildByName("MuzzlePos");
            this.LoadMuzzleFx();
        }
        OnAirePlaneForBackMove(speed) {
            this.horSpeed = speed;
        }
        ShootRay() {
            let point = new Laya.Vector2(this.viecleCam.viewport.width / 2, this.viecleCam.viewport.height / 2);
            let ray = new Laya.Ray(Tool.V3(0, 0, 0), Tool.V3(0, 0, 0));
            this.viecleCam.viewportPointToRay(point, ray);
            this.sc3d.physicsSimulation.rayCast(ray, this.outHitInfo, 1e3);
            if (this.outHitInfo.succeeded) {
                let hitY = this.outHitInfo.point.y;
                let damage = this.damage;
                let isCritical = false;
                if (hitY > 32.5) {
                    isCritical = true;
                    damage = this.damage * 2;
                } else {
                    isCritical = false;
                    damage = this.damage;
                }
                let hitOwner = this.outHitInfo.collider.owner;
                this.aiSrc = hitOwner.getComponent(AIBase);
                if (this.aiSrc) {
                    if (GameLevelMgr.Instance.GetFriendlyFire()) {
                        this.MakeDamage(this.aiSrc, damage, isCritical);
                    } else {
                        if (this.aiSrc.teamColor != GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                            this.MakeDamage(this.aiSrc, damage, isCritical);
                        }
                    }
                } else {
                    this.aiSrc = null;
                }
            } else {
                this.aiSrc = null;
            }
        }
        MakeDamage(aiSrc, damage, isCritical) {
            aiSrc.BeHit(damage, AIDamageSource.Player);
            this.PlayHitEnemySfx();
            Dispatcher.Event(EventType.OnPlayerHitEnemy, damage);
            if (this.aiSrc.curHp <= 0) {
                if (aiSrc.teamColor != GameLevelMgr.Instance.GetPlayerBattleTeam()) {
                    Dispatcher.Event(EventType.OnPlayerKillEnemy, isCritical);
                } else {
                    Dispatcher.Event(EventType.OnPlayerKillTeammate, isCritical);
                }
            }
        }
        FireLogic() {
            if (this.curHp <= 0) {
                return;
            }
            if (!ViecleMgr.Instance.GetIsViecleFire() || !(GameTimeMgr.Instance.GetGameTime() - this.lastFireTime > this.fireRate)) {
                return;
            }
            this.PlayFireMuzzleFlash();
            SoundTool.PlaySfxByName("tankFire");
            this.ShootRay();
            this.InsFireBullet();
            this.lastFireTime = GameTimeMgr.Instance.GetGameTime();
        }
        PlayHitEnemySfx() {
            let randSfxSoundPath = "res/Sounds/hit.mp3";
            SoundTool.PlaySfx(randSfxSoundPath);
        }
        InsFireBullet() {
            if (!this.bulletPrefab) {
                return;
            }
            let bt = this.bulletPrefab.clone();
            bt.transform.position = this.muzzlePos.transform.position;
            bt.transform.rotation = this.muzzlePos.transform.rotation;
            let src = bt.addComponent(BulletMove);
            this.sc3d.addChild(bt);
            var dirV3 = new Laya.Vector3();
            Laya.Vector3.subtract(this.outHitInfo.point, bt.transform.position, dirV3);
            src.setShootDirection(dirV3);
        }
        LoadMuzzleFx() {
            if (this.muzzlePos) {
                ResMgr.Instance.LoadSp3d(Std.Prefab_MuzzleFlash, this, muzzleFlash => {
                    this.muzzleFlashFx = muzzleFlash.clone();
                    this.muzzlePos.addChild(this.muzzleFlashFx);
                    this.muzzleFlashFx.transform.localPosition = Tool.V3Zero();
                    this.muzzleFlashFx.transform.localScale = Tool.V3(8, 8, 8);
                });
            }
        }
        PlayFireMuzzleFlash() {
            if (this.muzzleFlashFx) {
                this.muzzleFlashFx.particleSystem.play();
            }
        }
    }
    class ParachuteBoxPanel extends UIBase {
        constructor() {
            super();
        }
        onAwake() {
            this.SetAllUINodesDic();
            Laya.Tween.from(this.GetImg("imgMid"), {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backOut);
            GameLevelMgr.Instance.SetIsParachuteBoxOpen(true);
            this.AddBtnEventScaleFx("btnCancel", () => {
                GameLevelMgr.Instance.SetIsParachuteBoxOpen(false);
                this.CloseUI();
            });
            this.AddBtnEventScaleFx("btnWatchAd", () => {
                CountSdkMgr.Instance.TrackEvent("videComplete23");
                SdkManager.Instance.ShowVideoAd(() => {
                    Dispatcher.Event(EventType.OnUseParachuteBox);
                    GameLevelMgr.Instance.SetIsParachuteBoxOpen(false);
                    GenGamePlayTool.PlayUnlockSfx();
                    PopMsgTool.PopMsg("生命值和弹药已补满！");
                    CountSdkMgr.Instance.TrackEvent("videComplete23");
                    this.CloseUI();
                });
            });
        }
    }
    class GameMainScViewCtlBattle extends Laya.Script {
        constructor() {
            super();
            this.hasParachuteBox = false;
            this.isMatchOver = false;
            this.targetScore = 50;
            this.redTeamScore = 0;
            this.blueTeamScore = 0;
            this.maxTeammateCount = 5;
            this.maxEnemyCount = 5;
            this.tempMaxConstKill = 0;
            this.randVoiceArray = ["gogogo", "help", "sniperTip", "takeCover", "fireTip", "yesTip"];
            this.battleTime = 0;
            this.killCount = 0;
            this.dieTimes = 0;
            this.maxConstKill = 0;
            this.goldCount = 0;
            this.blueDiamondCount = 0;
            this.cupCount = 0;
        }
        onAwake() {
            this.GetNeed();
            this.LoadSc3D();
            this.AddEventListener();
            this.InitTargetScore(GameLevelMgr.Instance.GetBattleWinTargetCount());
            this.RefreshScoreBar();
            this.AutoInsAI();
            this.InitOther();
        }
        onDestroy() {
            this.RemoveEventListener();
            Tool.ClearTimerAndTween(this);
        }
        AddEventListener() {
            Dispatcher.AddListener(EventType.OnAIDiePostSlefData, this, this.OnAIDiePostSlefData);
            Dispatcher.AddListener(EventType.OnPlayerDie, this, this.OnPlayerDie);
            Dispatcher.AddListener(EventType.OnPlayetKillEnemyCountKill, this, this.OnPlayetKillEnemyCountKill);
            Dispatcher.AddListener(EventType.OnWeaponFire, this, this.CheckShowParachuteBox);
            Dispatcher.AddListener(EventType.OnPlayerBeHit, this, this.CheckShowParachuteBox);
            Dispatcher.AddListener(EventType.OnUseParachuteBox, this, this.OnUseParachuteBox);
        }
        RemoveEventListener() {
            Dispatcher.RemoveListener(EventType.OnAIDiePostSlefData, this, this.OnAIDiePostSlefData);
            Dispatcher.RemoveListener(EventType.OnPlayerDie, this, this.OnPlayerDie);
            Dispatcher.RemoveListener(EventType.OnPlayetKillEnemyCountKill, this, this.OnPlayetKillEnemyCountKill);
            Dispatcher.RemoveListener(EventType.OnWeaponFire, this, this.CheckShowParachuteBox);
            Dispatcher.RemoveListener(EventType.OnPlayerBeHit, this, this.CheckShowParachuteBox);
            Dispatcher.RemoveListener(EventType.OnUseParachuteBox, this, this.OnUseParachuteBox);
        }
        GetNeed() {
            this.imgScoreBg = Tool.GetImg(this.owner, "imgScoreBg");
            this.imgScoreBg.visible = true;
            this.txtRedTeamScore = Tool.GetTxt(this.imgScoreBg, "txtRedTeamScore");
            this.txtBlueTeamScore = Tool.GetTxt(this.imgScoreBg, "txtBlueTeamScore");
            this.imgBgBar = Tool.GetImg(this.imgScoreBg, "imgBgBar");
            this.imgScoreBlueBar = Tool.GetImg(this.imgBgBar, "imgScoreBlueBar");
            this.imgScoreRedBar = Tool.GetImg(this.imgBgBar, "imgScoreRedBar");
            this.txtKillCount = Tool.GetTxt(this.imgScoreBg, "txtKillCount");
            this.txtDieCount = Tool.GetTxt(this.imgScoreBg, "txtDieCount");
            this.imgParachuteBoxBg = Tool.GetImg(this.owner, "imgParachuteBoxBg");
            this.btnParachuteBox = Tool.GetBtn(this.imgParachuteBoxBg, "btnParachuteBox");
            this.imgParachuteBoxDD = Tool.GetImg(this.imgScoreBg, "imgParachuteBoxDD");
        }
        LoadSc3D() {
            ResMgr.Instance.OpenSc3D(this.GetMapNameByEnum(), this, sc3d => {
                UIDataMidLyaer.IsFirstTimeInBattleSelectEquipUI = true;
                Dispatcher.Event(EventType.OnOpenSelectAllWeaponsPanel);
                WeaponMgr.Instance.SetEvrCam(sc3d.getChildByName(Std.Other_EvrCam));
                WeaponMgr.Instance.SetMapCam(sc3d.getChildByName(Std.Map_EvrCam));
                WeaponMgr.Instance.SetPlayerDieCam(sc3d.getChildByName(Std.PlayerDieShowCam));
                WeaponMgr.Instance.LoadHitFx();
                this.LoadViecles(sc3d);
                this.InitAI();
                Dispatcher.Event(EventType.OnResLoadFinishCloseLoadingUI);
            });
        }
        OnUseParachuteBox() {
            this.imgParachuteBoxBg.visible = false;
            this.hasParachuteBox = false;
            Laya.Tween.clearAll(this.btnParachuteBox);
        }
        CheckShowParachuteBox() {
            let curHp = PlayerInGameDataMgr.Instance.GetPlayerCurHp();
            let isMinHp = curHp > 0 && curHp < Math.floor(PlayerInGameDataMgr.Instance.GetPlayerMaxHp() * .6);
            let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            let isMinBullets = nowUsingWeapon && nowUsingWeapon.curMag + nowUsingWeapon.curTotalBullets < Math.floor(nowUsingWeapon.maxTotalBullets * .5);
            if ((isMinHp == true || isMinBullets == true) && ViecleMgr.Instance.GetIsPlayerRidingViecle() == false && !this.hasParachuteBox) {
                this.btnParachuteBox.x = 880;
                this.btnParachuteBox.scaleX = 0;
                this.btnParachuteBox.scaleY = 0;
                this.hasParachuteBox = true;
                this.imgParachuteBoxDD.visible = true;
                Laya.timer.once(2e3, this, () => {
                    this.imgParachuteBoxDD.visible = false;
                    this.imgParachuteBoxBg.visible = true;
                    this.ParachuteBoxAni();
                });
            }
        }
        ParachuteBoxAni() {
            Laya.Tween.to(this.btnParachuteBox, {
                scaleX: 1,
                scaleY: 1
            }, 400, Laya.Ease.circOut, new Laya.Handler(this, () => {
                Laya.Tween.to(this.btnParachuteBox, {
                    x: 60
                }, 1600, Laya.Ease.linearNone, new Laya.Handler(this, () => {
                    Tool.TweenToSmallLoopBig(this.btnParachuteBox, this);
                }));
            }));
        }
        InitOther() {
            this.battleTime = GameTimeMgr.Instance.GetGameTime();
            Laya.timer.loop(5e3, this, this.PlayRandVoice);
            DataTool.ModifyInt(Std.PlayBattleModeTimesKey, 1);
            DailyMissionMgr.Instance.On_Play2BattleMatch();
            Tool.AddBtnEvent(this.btnParachuteBox, this, () => {
                UIMgr.Instance.OpenUI(ParachuteBoxPanel);
            });
        }
        OnPlayetKillEnemyCountKill() {
            this.killCount += 1;
            this.tempMaxConstKill += 1;
            if (this.tempMaxConstKill > this.maxConstKill) {
                this.maxConstKill = this.tempMaxConstKill;
            }
            this.txtKillCount.text = "" + this.killCount;
            DailyMissionMgr.Instance.On_TotalKill100Enemy();
            DataTool.ModifyInt(Std.Kill_PlayerKillEnemyCountKey, 1);
            DataTool.ModifyInt(Std.Achieve_Kill50EnemyKey, 1);
            DataTool.ModifyInt(Std.Achieve_Kill100EnemyKey, 1);
        }
        GetMapNameByEnum() {
            let mapEnum = GameLevelMgr.Instance.GetNowSelectMapEnum();
            if (mapEnum == BattleModeMapEnum.AircraftCarrier) {
                return Std.Sc3D_GameMain_AircraftCarrier;
            } else if (mapEnum == BattleModeMapEnum.GameMainSc_Lake) {
                return Std.Sc3D_GameMainSc_Lake;
            } else if (mapEnum == BattleModeMapEnum.GameMainSc_Port) {
                return Std.Sc3D_GameMainSc_Port;
            } else if (mapEnum == BattleModeMapEnum.GameMainSc_City) {
                return Std.Sc3D_GameMainSc_City;
            }
            return Std.Sc3D_GameMain_AircraftCarrier;
        }
        LoadViecles(sc3d) {
            if (!GameLevelMgr.Instance.GetCanUseViecle()) {
                return;
            }
            if (!sc3d) {
                return;
            }
            let vieclePosRoot = sc3d.getChildByName("VieclePosRoot");
            for (let i = 0; i < vieclePosRoot.numChildren; i++) {
                let nodeSp3d = vieclePosRoot.getChildAt(i);
                if (nodeSp3d.name == "AirCraftPos") {
                    this.SpawnAirPlane(nodeSp3d);
                } else if (nodeSp3d.name == "TankPos") {
                    this.SpawnTank(nodeSp3d);
                }
            }
        }
        SpawnAirPlane(parent) {
            ResMgr.Instance.LoadSp3d(Std.Prefab_AirCraft, this, sp3d => {
                let insAir = Laya.Sprite3D.instantiate(sp3d, parent);
                insAir.transform.localPosition = Tool.V3Zero();
                insAir.addComponent(Viecle_AirPlane);
                insAir.name = Std.Prefab_AirCraft;
            });
        }
        SpawnTank(parent) {
            ResMgr.Instance.LoadSp3d(Std.Prefab_Tank, this, sp3d => {
                let insAir = Laya.Sprite3D.instantiate(sp3d, parent);
                insAir.transform.localPosition = Tool.V3Zero();
                insAir.addComponent(Viecle_Tank);
                insAir.name = Std.Prefab_Tank;
            });
        }
        InitAI() {
            for (let i = 0; i < 5; i++) {
                AISpawnerMgr.Instance.SpawnBlueTeamAI();
                AISpawnerMgr.Instance.SpawnRedTeamAI();
            }
        }
        AutoInsAI() {
            Laya.timer.loop(3 * 1e3, this, this.AutoInsRedTeamRole);
            Laya.timer.loop(3 * 1e3, this, this.AutoInsBlueTeamRole);
        }
        AutoInsBlueTeamRole() {
            if (this.isMatchOver) {
                return;
            }
            if (AISpawnerMgr.Instance.GetBlueTeamRoleArray().length < this.maxTeammateCount) {
                AISpawnerMgr.Instance.SpawnBlueTeamAI();
            }
        }
        AutoInsRedTeamRole() {
            if (this.isMatchOver) {
                return;
            }
            if (AISpawnerMgr.Instance.GetRedTeamRoleArray().length < this.maxEnemyCount) {
                AISpawnerMgr.Instance.SpawnRedTeamAI();
            }
        }
        InitTargetScore(targetScore) {
            this.targetScore = targetScore;
        }
        OnAIDiePostSlefData(data) {
            if (!data) {
                return;
            }
            if (data.teamColor == BattleTeamEnum.Red) {
                this.RefreshBlueTeamScore();
            } else if (data.teamColor == BattleTeamEnum.Blue) {
                this.RefreshRedTeamScore();
            }
        }
        RefreshScoreBar() {
            let maxWidth = 395;
            if (this.redTeamScore > this.blueTeamScore) {
                this.imgBgBar.setChildIndex(this.imgScoreRedBar, 1);
                this.imgBgBar.setChildIndex(this.imgScoreBlueBar, 0);
            } else {
                this.imgBgBar.setChildIndex(this.imgScoreRedBar, 0);
                this.imgBgBar.setChildIndex(this.imgScoreBlueBar, 1);
            }
            this.imgScoreRedBar.width = maxWidth * (this.redTeamScore / this.targetScore);
            this.imgScoreBlueBar.width = maxWidth * (this.blueTeamScore / this.targetScore);
        }
        OpenBattleModeMatchOverPanel() {
            SdkManager.Instance.HideBanner();
            window.showEnd(()=>{
                UIMgr.Instance.OpenUI(SettlementPanel);
            });
        }
        SetBattleEndData(redWin = true) {
            this.battleTime = GameTimeMgr.Instance.GetGameTime() - this.battleTime;
            this.battleTime = Math.ceil(this.battleTime);
            this.goldCount = this.killCount * 10;
            this.blueDiamondCount = this.killCount * 5;
            this.cupCount = this.killCount;
            GameLevelMgr.Instance.SetBattleEndData(0, redWin, this.battleTime, this.killCount, this.dieTimes, this.maxConstKill, this.goldCount, this.blueDiamondCount, this.cupCount);
            if (this.killCount >= 20) {
                DailyMissionMgr.Instance.On_Kill20EnemyInOne();
            }
        }
        RefreshRedTeamScore() {
            if (this.isMatchOver) {
                return;
            }
            this.redTeamScore += 1;
            if (this.redTeamScore >= this.targetScore) {
                this.redTeamScore = this.targetScore;
                this.isMatchOver = true;
                Dispatcher.Event(EventType.OnMatchOver);
                GameLevelMgr.Instance.SetNowWinTeam(BattleTeamEnum.Red);
                this.SetBattleEndData(true);
                Laya.timer.once(1e3, this, this.OpenBattleModeMatchOverPanel);
                InputMgr.Instance.SetIsFire(false);
                ViecleMgr.Instance.SetIsViecleFire(false);
                GenGamePlayTool.PlayGameOverSfx(this);
                if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Red) {
                    DailyMissionMgr.Instance.On_Win5BattleMatch();
                    DataTool.ModifyInt(Std.Achieve_Win1BattleModeKey, 1);
                    DataTool.ModifyInt(Std.Achieve_Win5BattleModeKey, 1);
                }
            }
            this.txtRedTeamScore.text = this.redTeamScore + "";
            this.RefreshScoreBar();
        }
        RefreshBlueTeamScore() {
            if (this.isMatchOver) {
                return;
            }
            this.blueTeamScore += 1;
            if (this.blueTeamScore >= this.targetScore) {
                this.blueTeamScore = this.targetScore;
                this.isMatchOver = true;
                Dispatcher.Event(EventType.OnMatchOver);
                GameLevelMgr.Instance.SetNowWinTeam(BattleTeamEnum.Blue);
                this.SetBattleEndData(false);
                Laya.timer.once(1e3, this, this.OpenBattleModeMatchOverPanel);
                InputMgr.Instance.SetIsFire(false);
                ViecleMgr.Instance.SetIsViecleFire(false);
                GenGamePlayTool.PlayGameOverSfx(this);
                if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Blue) {
                    DailyMissionMgr.Instance.On_Win5BattleMatch();
                    DataTool.ModifyInt(Std.Achieve_Win1BattleModeKey, 1);
                    DataTool.ModifyInt(Std.Achieve_Win5BattleModeKey, 1);
                }
            }
            this.txtBlueTeamScore.text = this.blueTeamScore + "";
            this.RefreshScoreBar();
        }
        OnPlayerDie() {
            this.dieTimes += 1;
            this.tempMaxConstKill = 0;
            let playerTeam = GameLevelMgr.Instance.GetPlayerBattleTeam();
            this.txtDieCount.text = "" + this.dieTimes;
            if (playerTeam == BattleTeamEnum.Red) {
                this.RefreshBlueTeamScore();
            } else if (playerTeam == BattleTeamEnum.Blue) {
                this.RefreshRedTeamScore();
            }
            DataTool.ModifyInt(Std.Achieve_Die10TimesKey, 1);
            DataTool.ModifyInt(Std.Achieve_Die50TimesKey, 1);
            this.imgParachuteBoxBg.visible = false;
        }
        PlayRandVoice() {
            let randIdx = Tool.RandomInt(this.randVoiceArray.length);
            let playRate = Tool.RandomInt(100);
            if (playRate <= 50 && GameLevelMgr.Instance.GetIsPlayerInSelectEquipPage() == false && this.isMatchOver == false || GameLevelMgr.Instance.GetIsInGamePausePanel() == false) {
                SoundTool.PlaySfxByName(this.randVoiceArray[randIdx]);
            }
        }
    }
    class WellQiang extends Laya.Script {
        constructor() {
            super(...arguments);
            this.x = 0;
            this.y = 0;
            this.rotStart = false;
            this.rotTime = false;
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnYouYuMuTouRen, this, this.YouYuMuTouRen);
            Dispatcher.AddListener(EventType.MuTouRenFireFinish, this, this.Fire);
            this.qiangCanterTran = this.owner.getChildByName("Cube").transform;
            this.LoadMuzzleFx();
        }
        onStart() {
            this.randomRot();
        }
        onUpdate() {
            if (this.rotStart) {
                if (this.rotTime) {
                    this.CheckRot();
                } else {
                    this.randomRot();
                }
            }
        }
        randomRot() {
            this.x = this.FuncRandom(-25, 25);
            this.y = this.FuncRandom(-30, -5);
            this.rotTime = true;
            this.rotStart = true;
        }
        CheckRot() {
            if (Math.abs(this.x - this.qiangCanterTran.localRotationEulerY) > 1) {
                this.qiangCanterTran.localRotationEulerX += (this.y - this.qiangCanterTran.localRotationEulerX) * Laya.timer.delta * .002;
                this.qiangCanterTran.localRotationEulerY += (this.x - this.qiangCanterTran.localRotationEulerY) * Laya.timer.delta * .002;
            } else {
                this.rotTime = false;
            }
        }
        stopRot() {
            this.rotStart = false;
        }
        YouYuMuTouRen(bool) {
            if (bool) {
                this.randomRot();
            } else {
                this.stopRot();
            }
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnYouYuMuTouRen, this, this.YouYuMuTouRen);
        }
        onDisable() {
            Dispatcher.RemoveListener(EventType.OnYouYuMuTouRen, this, this.YouYuMuTouRen);
        }
        FuncRandom(min, max) {
            let num;
            num = Number(Math.random().toFixed(2));
            num = num * (max - min) + min;
            return Number(num.toFixed(0));
        }
        LoadMuzzleFx() {
            ResMgr.Instance.LoadSp3d(Std.Prefab_MuzzleFlash, this, muzzleFlash => {
                this.muzzleFlashFx = muzzleFlash.clone();
                this.owner.getChildByName("Cube").addChild(this.muzzleFlashFx);
                this.muzzleFlashFx.transform.localPosition = new Laya.Vector3(0, 0, -2.2);
                this.muzzleFlashFx.transform.localScale = Tool.V3(10, 10, 10);
            });
        }
        Fire() {
            if (this.muzzleFlashFx.particleSystem) {
                this.muzzleFlashFx.particleSystem.play();
            }
        }
    }
    class MuTouRen extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.runTime = false;
            this.time = 800;
            this.runOrBack = true;
            this.lookMuTouRen = false;
            this.num = 0;
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnYouYuMuTouRen, this, this.YouYuMuTouRen);
            this.tran = this.owner.transform;
        }
        onUpdate() {
            if (this.runTime) {
                this.time -= Laya.timer.delta;
                if (this.time < 0) {
                    this.muTouRenStop(this.runOrBack);
                } else {
                    this.muTouRenRun(this.runOrBack);
                }
            }
            if (this.lookMuTouRen) {
                if (this.num % 3 >= 1) {
                    Dispatcher.Event(EventType.MuTouRenFire);
                } else {
                    this.num += 1;
                }
            }
        }
        YouYuMuTouRen(bool) {
            if (bool) return;
            this.runOrBack = true;
            this.runTime = true;
            SoundTool.PlaySfxByName("YouYu_MuTouTurnIn");
        }
        muTouRenStop(bool) {
            this.runTime = false;
            this.time = 800;
            if (bool) {
                Laya.timer.once(2e3, this, this.back);
                this.tran.localRotationEulerY = 180;
                this.lookMuTouRen = true;
            } else {
                Dispatcher.Event(EventType.OnYouYuMuTouRen, true);
                this.tran.localRotationEulerY = 0;
            }
        }
        muTouRenRun(bool) {
            if (bool) {
                this.tran.localRotationEulerY += .225 * Laya.timer.delta;
            } else {
                this.tran.localRotationEulerY -= .225 * Laya.timer.delta;
            }
        }
        back() {
            this.runOrBack = false;
            this.runTime = true;
            this.time = 800;
            this.lookMuTouRen = false;
            SoundTool.PlaySfxByName("YouYu_MuTouTurnOut");
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnYouYuMuTouRen, this, this.YouYuMuTouRen);
        }
        onDisable() {
            Dispatcher.RemoveListener(EventType.OnYouYuMuTouRen, this, this.YouYuMuTouRen);
        }
    }
    class Scene3DBase extends Laya.Script {
        constructor() {
            super();
            this.battleTime = 0;
            this.killCount = 0;
            this.dieTimes = 0;
            this.maxConstKill = 0;
            this.goldCount = 0;
            this.blueDiamondCount = 0;
            this.cupCount = 0;
            this.tempMaxConstKill = 0;
        }
        onAwake() {
            this.GetNeed();
            this.LoadSc3D();
            this.AddEventListener();
            this.battleTime = GameTimeMgr.Instance.GetGameTime();
        }
        LoadSc3D() { }
        AddEventListener() {
            Dispatcher.AddListener(EventType.OnPlayerDie, this, this.PlayerDie);
            Dispatcher.AddListener(EventType.OnPlayetKillEnemyCountKill, this, this.OnPlayetKillEnemyCountKill);
            Dispatcher.AddListener(EventType.OnPlayerReborn, this, this.GameStart);
            Dispatcher.AddListener(EventType.YY_End, this, this.GameEnd);
        }
        RemoveEventListener() {
            Dispatcher.RemoveListener(EventType.OnPlayerDie, this, this.PlayerDie);
            Dispatcher.RemoveListener(EventType.OnPlayetKillEnemyCountKill, this, this.OnPlayetKillEnemyCountKill);
            Dispatcher.RemoveListener(EventType.OnPlayerReborn, this, this.GameStart);
            Dispatcher.RemoveListener(EventType.YY_End, this, this.GameEnd);
        }
        GetNeed() { }
        GameStart() { }
        GameEnd(win) { }
        OnPlayetKillEnemyCountKill() {
            this.killCount += 1;
            this.tempMaxConstKill += 1;
            if (this.tempMaxConstKill > this.maxConstKill) {
                this.maxConstKill = this.tempMaxConstKill;
            }
            DailyMissionMgr.Instance.On_TotalKill100Enemy();
            DataTool.ModifyInt(Std.Kill_PlayerKillEnemyCountKey, 1);
            DataTool.ModifyInt(Std.Achieve_Kill50EnemyKey, 1);
            DataTool.ModifyInt(Std.Achieve_Kill100EnemyKey, 1);
        }
        PlayerDie() {
            this.dieTimes += 1;
            this.tempMaxConstKill = 0;
            DataTool.ModifyInt(Std.Achieve_Die10TimesKey, 1);
            DataTool.ModifyInt(Std.Achieve_Die50TimesKey, 1);
        }
        onDestroy() {
            this.RemoveEventListener();
            Tool.ClearTimerAndTween(this);
        }
    }
    class GameMainScViewCtlYouyuMutouRen extends Scene3DBase {
        constructor() {
            super();
            this.time123 = 0;
            this.muTouRenRun = false;
            this.Bg123TimeArr = [1688, 2019, 2139, 3356, 4135, 1606, 2327, 2693, 3631, 4807];
            this.Bg123SelectIndex = 0;
        }
        onAwake() {
            super.onAwake();
        }
        onUpdate() {
            if (this.muTouRenRun) {
                this.time123 -= Laya.timer.delta;
                if (this.time123 < 0) {
                    this.muTouRenRun = false;
                    Dispatcher.Event(EventType.OnYouYuMuTouRen, false);
                }
            }
        }
        onDestroy() {
            this.RemoveEventListener();
            Tool.ClearTimerAndTween(this);
        }
        AddEventListener() {
            super.AddEventListener();
            Dispatcher.AddListener(EventType.OnYouYuMuTouRen, this, this.OnYouYuMuTouRen);
        }
        RemoveEventListener() {
            super.RemoveEventListener();
            Dispatcher.RemoveListener(EventType.OnYouYuMuTouRen, this, this.OnYouYuMuTouRen);
        }
        LoadSc3D() {
            ResMgr.Instance.OpenSc3D(Std.Sc3D_GameMainSc_youyu1, this, sc3d => {
                UIDataMidLyaer.IsFirstTimeInBattleSelectEquipUI = true;
                Dispatcher.Event(EventType.OnOpenSelectAllWeaponsPanel);
                WeaponMgr.Instance.SetEvrCam(sc3d.getChildByName(Std.Other_EvrCam));
                WeaponMgr.Instance.SetMapCam(sc3d.getChildByName(Std.Map_EvrCam));
                WeaponMgr.Instance.SetPlayerDieCam(sc3d.getChildByName(Std.PlayerDieShowCam));
                WeaponMgr.Instance.LoadHitFx();
                AISpawnerMgr.Instance.SpawnYouYu();
                Dispatcher.Event(EventType.OnResLoadFinishCloseLoadingUI);
                this.InitScene3DInteractive(sc3d);
            });
        }
        InitScene3DInteractive(sc3d) {
            let father = sc3d.getChildByName("Evr").getChildByName("EvrScaters");
            this.mouTouRen = father.getChildByName("mutouren");
            this.mouTouRen.addComponent(MuTouRen);
            this.well_Piang0 = father.getChildByName("qiang");
            this.well_Piang0.addComponent(WellQiang);
            this.well_Piang1 = father.getChildByName("qiang (1)");
            this.well_Piang1.addComponent(WellQiang);
            this.well_Piang2 = father.getChildByName("qiang (2)");
            this.well_Piang2.addComponent(WellQiang);
            this.well_Piang3 = father.getChildByName("qiang (3)");
            this.well_Piang3.addComponent(WellQiang);
            CountSdkMgr.Instance.TrackEvent("openInterface8");
        }
        OnYouYuMuTouRen(bool) {
            if (bool) {
                this.muTouRenRun = true;
                this.Bg123SelectIndex = Math.floor(Math.random() * 10);
                this.time123 = this.Bg123TimeArr[this.Bg123SelectIndex];
                SoundTool.PlaySfxByName("YouYu_Bg" + this.Bg123SelectIndex);
            }
        }
        GameStart() {
            Laya.timer.once(2e3, this, () => {
                this.muTouRenRun = true;
                this.Bg123SelectIndex = Math.floor(Math.random() * 10);
                this.time123 = this.Bg123TimeArr[this.Bg123SelectIndex];
                SoundTool.PlaySfxByName("YouYu_Bg" + this.Bg123SelectIndex);
            });
        }
        GameEnd(win = false) {
            this.muTouRenRun = false;
            this.RemoveEventListener();
            SoundTool.StopSound("YouYu_Bg" + this.Bg123SelectIndex);
            this.battleTime = GameTimeMgr.Instance.GetGameTime() - this.battleTime;
            this.battleTime = Math.ceil(this.battleTime);
            this.goldCount = this.killCount * 3 + 20;
            this.blueDiamondCount = this.killCount * 2 + 5;
            this.cupCount = this.killCount;
            GameLevelMgr.Instance.SetBattleEndData(2, win, this.battleTime, this.killCount, this.dieTimes, this.maxConstKill, this.goldCount, this.blueDiamondCount, this.cupCount);
            
            setTimeout(this.OpenBattleModeMatchOverPanel, 3e3);
        }
        OpenBattleModeMatchOverPanel() {
            SdkManager.Instance.HideBanner();
            window.showEnd(()=>{
                UIMgr.Instance.OpenUI(SettlementPanel);
            });
        }
        OnPlayetKillEnemyCountKill() {
            this.killCount += 1;
            this.tempMaxConstKill += 1;
            if (this.tempMaxConstKill > this.maxConstKill) {
                this.maxConstKill = this.tempMaxConstKill;
            }
            DailyMissionMgr.Instance.On_TotalKill100Enemy();
            DataTool.ModifyInt(Std.Kill_PlayerKillEnemyCountKey, 1);
            DataTool.ModifyInt(Std.Achieve_Kill50EnemyKey, 1);
            DataTool.ModifyInt(Std.Achieve_Kill100EnemyKey, 1);
        }
        PlayerDie() {
            this.dieTimes += 1;
            this.tempMaxConstKill = 0;
            DataTool.ModifyInt(Std.Achieve_Die10TimesKey, 1);
            DataTool.ModifyInt(Std.Achieve_Die50TimesKey, 1);
        }
    }
    class QiaoMianBL extends YYAIBase {
        constructor(num = 1) {
            super();
            this.BL = 0;
            this.BL = num;
        }
        onEnable() { }
        GameStart() { }
        GameEnd() { }
        UpdateFireGunHitTimer() { }
        InitAIYY(maxHp, moveSpeed, num) { }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.YY_End, this, this.YY_End);
        }
        onTriggerStay(col) { }
        onStart() { }
        onCollisionEnter(col) {
            if (this.BL == 0) {
                this.owner.active = false;
                SoundTool.PlaySfxByName("BLSui");
            }
        }
        onAwake() {
            Dispatcher.AddListener(EventType.YY_End, this, this.YY_End);
        }
        YY_End() {
            this.owner.active = false;
        }
        BeHit(damage, damageSource) {
            if (this.BL == 0) {
                this.owner.active = false;
            }
        }
    }
    class GameMainScViewCtlYYBLQ extends Scene3DBase {
        constructor() {
            super();
            this.endTime = 0;
            this.JiShiTime = 121;
            this.queueRen = 0;
        }
        GetNeed() {
            super.GetNeed();
            let time = Tool.GetImg(this.owner, "imgTimeBg");
            time.visible = true;
            this.lab_time = Tool.GetTxt(time, "txtTeamScore");
        }
        LoadSc3D() {
            ResMgr.Instance.OpenSc3D(Std.Sc3D_GameMainSc_youyu2, this, sc3d => {
                UIDataMidLyaer.IsFirstTimeInBattleSelectEquipUI = true;
                Dispatcher.Event(EventType.OnOpenSelectAllWeaponsPanel);
                WeaponMgr.Instance.SetEvrCam(sc3d.getChildByName(Std.Other_EvrCam));
                WeaponMgr.Instance.SetMapCam(sc3d.getChildByName(Std.Map_EvrCam));
                WeaponMgr.Instance.SetPlayerDieCam(sc3d.getChildByName(Std.PlayerDieShowCam));
                WeaponMgr.Instance.LoadHitFx();
                Dispatcher.Event(EventType.OnResLoadFinishCloseLoadingUI);
                this.InitScene3DInteractive(sc3d);
            });
        }
        InitScene3DInteractive(sc3d) {
            this.BLarrL = new Array(10);
            this.BLarrR = new Array(10);
            for (let i = 0; i < 10; i++) {
                this.BLarrL[i] = Math.random() >= .5 ? 0 : 1;
                this.BLarrR[i] = this.BLarrL[i] ? 0 : 1;
            }
            this.BLQiao = sc3d.getChildByName("Evr").getChildByName("BLQiao");
            for (let i = 0; i < 10; i++) {
                let BL_LName = "BL" + i * 2;
                this.BLQiao.getChildByName(BL_LName).addComponentIntance(new QiaoMianBL(this.BLarrL[i]));
                let BL_RName = "BL" + (i * 2 + 1);
                this.BLQiao.getChildByName(BL_RName).addComponentIntance(new QiaoMianBL(this.BLarrR[i]));
            }
            CountSdkMgr.Instance.TrackEvent("openInterface9");
        }
        Time3SGameStart() {
            Dispatcher.Event(EventType.YY_Start);
            Laya.timer.loop(1e3, this, this.FuncJiShi);
        }
        FuncJiShi() {
            this.JiShiTime -= 1;
            this.lab_time.text = "时间：" + this.JiShiTime + "s";
            if (this.JiShiTime <= 0) {
                Dispatcher.Event(EventType.YY_End);
                Laya.timer.clear(this, this.FuncJiShi);
            }
            if (this.JiShiTime == 120 - this.queueRen * 6) {
                if (this.queueRen >= 9) return;
                Dispatcher.Event("YYBLR" + this.queueRen);
                this.queueRen += 1;
            }
        }
        AddEventListener() {
            super.AddEventListener();
        }
        RemoveEventListener() {
            super.RemoveEventListener();
        }
        GameStart() {
            AISpawnerMgr.Instance.SpawnYYBLQ();
            Laya.timer.once(3e3, this, this.Time3SGameStart);
        }
        GameEnd(win = false) {
            this.RemoveEventListener();
            this.battleTime = GameTimeMgr.Instance.GetGameTime() - this.battleTime;
            this.battleTime = Math.ceil(this.battleTime);
            this.goldCount = this.killCount * 3 + 20;
            this.blueDiamondCount = this.killCount * 2 + 5;
            this.cupCount = this.killCount;
            GameLevelMgr.Instance.SetBattleEndData(2, win, this.battleTime, this.killCount, this.dieTimes, this.maxConstKill, this.goldCount, this.blueDiamondCount, this.cupCount);
            setTimeout(this.OpenBattleModeMatchOverPanel, 3e3);
        }
        OpenBattleModeMatchOverPanel() {
            SdkManager.Instance.HideBanner();
            window.showEnd(()=>{
                UIMgr.Instance.OpenUI(SettlementPanel);
            });
        }
    }
    class GameMainModeCtler extends Laya.Script {
        constructor() {
            super();
            this.playerMaxHp = 100;
            this.playerHp = 100;
            this.playerMaxShield = 100;
            this.playerShield = 0;
            this.canReshowPlayerHitImg = true;
            this.isBattleMatchOver = false;
        }
        onAwake() {
            this.InitMode();
            this.GetNeedAndInit();
            this.AddBtnEvent();
            this.AddEventListener();
            this.LoopHideKillImg();
        }
        onUpdate() {
            this.RefreshViecleInfoUI();
            this.RefreshNowEquipBullutsInfo();
            PlayerInGameDataMgr.Instance.SetPlayerCurHp(this.playerHp);
            PlayerInGameDataMgr.Instance.SetPlayerCurShield(this.playerShield);
        }
        onDestroy() {
            this.RemoveEventListener();
            Tool.ClearTimerAndTween(this);
            Tool.ClearTragetTween(this.tweenKillFx);
            Tool.ClearTragetTween(this.tweenPlayerDieCam);
            Tool.ClearTragetTween(this.tweenKillAlpha);
            Tool.ClearTragetTween(this.imgHitBloodTween);
        }
        AddEventListener() {
            Dispatcher.AddListener(EventType.OnOpenSelectSingleWeaponPanel, this, this.OnOpenSelectSingleWeaponPanel);
            Dispatcher.AddListener(EventType.OnOpenSelectAllWeaponsPanel, this, this.OnOpenSelectAllWeaponsPanel);
            Dispatcher.AddListener(EventType.OnEnemyHitPlayer, this, this.OnEnemyHitPlayer);
            Dispatcher.AddListener(EventType.OnPlayerReborn, this, this.OnPlayerReborn);
            Dispatcher.AddListener(EventType.OnPlayerAirePlaneDieAndPlayerOnIt, this, this.OnPlayerAirePlaneDieAndPlayerOnIt);
            Dispatcher.AddListener(EventType.OnPlayerKillEnemy, this, this.OnPlayerKillEnemy);
            Dispatcher.AddListener(EventType.OnPlayerKillTeammate, this, this.OnPlayerKillTeammate);
            Dispatcher.AddListener(EventType.OnPlayerHitEnemy, this, this.OnPlayerHitEnemy);
            Dispatcher.AddListener(EventType.OnPlayerColViecle, this, this.OnPlayerColViecle);
            Dispatcher.AddListener(EventType.OnPlayerLeaveColViecle, this, this.OnPlayerLeaveColViecle);
            Dispatcher.AddListener(EventType.OnPlayerUseHpBox, this, this.OnPlayerUseHpBox);
            Dispatcher.AddListener(EventType.OnPlayerUseAmmoBox, this, this.OnPlayerUseAmmoBox);
            Dispatcher.AddListener(EventType.OnUseParachuteBox, this, this.OnUseParachuteBox);
            Dispatcher.AddListener(EventType.OnPlayerViecleBeHit, this, this.FlashHitImgFx);
            Dispatcher.AddListener(EventType.OnPlayerSelfKill, this, this.OnPlayerSelfKill);
            Dispatcher.AddListener(EventType.OnMatchOver, this, this.OnBattleModeMatchOver);
            Dispatcher.AddListener(EventType.OnBackToMenu, this, this.OnBackToMenu);
            Dispatcher.AddListener(EventType.OnHandKillPlayer, this, this.KillPlayer);
            Dispatcher.AddListener(EventType.OnDoSpawnPlayer, this, this.OnDoSpawnPlayer);
            Dispatcher.AddListener(EventType.YY_End, this, this.YY_End);
        }
        RemoveEventListener() {
            Dispatcher.RemoveListener(EventType.OnOpenSelectSingleWeaponPanel, this, this.OnOpenSelectSingleWeaponPanel);
            Dispatcher.RemoveListener(EventType.OnOpenSelectAllWeaponsPanel, this, this.OnOpenSelectAllWeaponsPanel);
            Dispatcher.RemoveListener(EventType.OnEnemyHitPlayer, this, this.OnEnemyHitPlayer);
            Dispatcher.RemoveListener(EventType.OnPlayerReborn, this, this.OnPlayerReborn);
            Dispatcher.RemoveListener(EventType.OnPlayerAirePlaneDieAndPlayerOnIt, this, this.OnPlayerAirePlaneDieAndPlayerOnIt);
            Dispatcher.RemoveListener(EventType.OnPlayerKillEnemy, this, this.OnPlayerKillEnemy);
            Dispatcher.RemoveListener(EventType.OnPlayerKillTeammate, this, this.OnPlayerKillTeammate);
            Dispatcher.RemoveListener(EventType.OnPlayerHitEnemy, this, this.OnPlayerHitEnemy);
            Dispatcher.RemoveListener(EventType.OnPlayerColViecle, this, this.OnPlayerColViecle);
            Dispatcher.RemoveListener(EventType.OnPlayerLeaveColViecle, this, this.OnPlayerLeaveColViecle);
            Dispatcher.RemoveListener(EventType.OnPlayerUseHpBox, this, this.OnPlayerUseHpBox);
            Dispatcher.RemoveListener(EventType.OnPlayerUseAmmoBox, this, this.OnPlayerUseAmmoBox);
            Dispatcher.RemoveListener(EventType.OnUseParachuteBox, this, this.OnUseParachuteBox);
            Dispatcher.RemoveListener(EventType.OnPlayerViecleBeHit, this, this.FlashHitImgFx);
            Dispatcher.RemoveListener(EventType.OnPlayerSelfKill, this, this.OnPlayerSelfKill);
            Dispatcher.RemoveListener(EventType.OnMatchOver, this, this.OnBattleModeMatchOver);
            Dispatcher.RemoveListener(EventType.OnBackToMenu, this, this.OnBackToMenu);
            Dispatcher.RemoveListener(EventType.OnHandKillPlayer, this, this.KillPlayer);
            Dispatcher.RemoveListener(EventType.OnDoSpawnPlayer, this, this.OnDoSpawnPlayer);
            Dispatcher.RemoveListener(EventType.YY_End, this, this.YY_End);
        }
        GetNeedAndInit() {
            this.imgKillFxBg = Tool.GetImg(this.owner, "imgKillFxBg");
            this.imgPlayerCtlBg = Tool.GetImg(this.owner, "imgPlayerCtlBg");
            this.imgPlayerDieMaskBg = Tool.GetImg(this.imgPlayerCtlBg, "imgPlayerDieMaskBg");
            this.imgPlayerCtlBtnsBg = Tool.GetImg(this.imgPlayerCtlBg, "imgPlayerCtlBtnsBg");
            this.imgJoyStickRect = Tool.GetImg(this.imgPlayerCtlBtnsBg, "imgJoyStickRect");
            this.imgPlayerInfoBg = Tool.GetImg(this.imgPlayerCtlBg, "imgPlayerInfoBg");
            this.imgHitBlood = Tool.GetImg(this.owner, "imgHitBlood");
            this.btnRideViecle = Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnRideViecle");
            this.imgViecleHudBg = Tool.GetImg(this.owner, "imgViecleHudBg");
            this.btnDownViecle = Tool.GetBtn(this.imgViecleHudBg, "btnDownViecle");
            this.btnUpViecle = Tool.GetBtn(this.imgViecleHudBg, "btnUpViecle");
            this.imgAirPlaneCtlBtnBg = Tool.GetImg(this.imgViecleHudBg, "imgAirPlaneCtlBtnBg");
            this.imgAirPlaneHudBg = Tool.GetImg(this.imgViecleHudBg, "imgAirPlaneHudBg");
            this.txtViecleHp = Tool.GetTxt(this.imgViecleHudBg, "txtViecleHp");
            this.imgViecleHpBg = this.imgViecleHudBg.getChildByName("imgViecleHpRoot").getChildByName("imgViecleHpBg");
            this.imgViecleHpBar = this.imgViecleHudBg.getChildByName("imgViecleHpRoot").getChildByName("imgViecleHpBar");
            this.txtNowEquipInfoLeft = Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnFireLeft").getChildByName("txtNowEquipInfoLeft");
            this.txtNowEquipInfoRight = Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnFire").getChildByName("txtNowEquipInfoRight");
            this.btnFireLeft = Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnFireLeft");
            this.btnFire = Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnFire");
            this.btnAim = Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnAim");
            this.btnAimLeft = Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnAimLeft");
            this.btnReload = Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnReload");
            this.btnJump = Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnJump");
            UIMgr.Instance.OpenUI(PlayerWeaponHpInfoPanel, () => { }, this.imgPlayerInfoBg);
            this.imgPlayerDieObBg = Tool.GetImg(this.owner, "imgPlayerDieObBg");
            this.joystick = this.imgJoyStickRect.getComponent(JoyStick);
            this.InitSensitivityHslider();
        }
        OnDoSpawnPlayer() {
            this.btnFireLeft.visible = Std.byWeapon;
            this.btnFire.visible = Std.byWeapon;
            this.btnAim.visible = Std.byWeapon;
            this.btnAimLeft.visible = Std.byWeapon;
            this.btnReload.visible = Std.byWeapon;
            this.btnJump.visible = GameLevelMgr.Instance.GetYYGame() == GameYYMode.BLQ ? true : Std.byWeapon;
        }
        LoopHideKillImg() {
            Laya.timer.loop(5e3, this, () => {
                if (this.imgKillFxBg) this.imgKillFxBg.visible = false;
            });
        }
        ResetTryUse() {
            if (UIDataMidLyaer.TryUse_ShowTimes >= 1) {
                if (UIDataMidLyaer.TryUse_IsTryUsing == true) {
                    DataTool.SetKv(Std.Local_EquipWeapon4Key, Std.WeaponName_None);
                    PlayerLocalDataMgr.Instance.RefreshPlayerData();
                }
                UIDataMidLyaer.TryUse_TxtData = Std.WeaponName_None;
                UIDataMidLyaer.TryUse_IsTryUsing = false;
                UIDataMidLyaer.TryUse_ShowTimes = 0;
            }
        }
        OnBackToMenu() {
            SdkManager.Instance.HideBanner();
            this.ResetTryUse();
            this.BackMenu();
        }
        OnBattleModeMatchOver() {
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                this.imgPlayerCtlBg.visible = false;
                this.imgViecleHudBg.visible = false;
                this.isBattleMatchOver = true;
                this.joystick.EndDrag();
            }
        }
        InitSensitivityHslider() {
            let hs = Tool.GetImg(this.owner, "imgSetSensitivityBg").getChildByName("hslSensitivity");
            hs.width = 209;
            hs.min = 0;
            hs.max = 100;
            hs.value = 50;
            hs.tick = 1;
            hs.changeHandler = new Laya.Handler(this, this.OnSensitivityHsliderChange);
            hs.value = GameLevelMgr.Instance.GetMouseSensityvity() * 100;
        }
        OnSensitivityHsliderChange(v) {
            let senVar = v / 100;
            if (senVar <= .1) {
                senVar = .1;
            }
            if (senVar >= 1) {
                senVar = 1;
            }
            GameLevelMgr.Instance.SetMouseSensityvity(senVar);
            Dispatcher.Event(EventType.OnMouseSensitivityMulChange, senVar);
        }
        OnPlayerSelfKill() {
            this.OnEnemyHitPlayer(1e4);
        }
        InitMode() {
            console.log("初始化游戏模式");
            let mode = GameLevelMgr.Instance.GetSelectMode();
            if (mode == GameLevelMode.NormalBattleMode) {
                this.owner.addComponent(GameMainScViewCtlBattle);
                MaterialMgr.Instance.SetPlayerArnRedMat();
                MaterialMgr.Instance.SetPlayerArnBlueMat();
            } else if (mode == GameLevelMode.ZombieMode) {
                this.owner.addComponent(GameMainScViewCtlZombie);
                MaterialMgr.Instance.SetPlayerArnBlueMat();
            } else if (mode == GameLevelMode.YouYu) {
                switch (GameLevelMgr.Instance.GetYYGame()) {
                    case GameYYMode.MTR:
                        this.owner.addComponent(GameMainScViewCtlYouyuMutouRen);
                        break;
  
                    case GameYYMode.BLQ:
                        this.owner.addComponent(GameMainScViewCtlYYBLQ);
                        break;
                }
                MaterialMgr.Instance.SetPlayerArmYouYuMat();
            }
        }
        RefullAmmo(weapon) {
            if (weapon) {
                if (weapon.weaponName != Std.WeaponName_AmmoBox && weapon.weaponName != Std.WeaponName_HpBox) {
                    weapon.curMag = weapon.maxMag;
                    weapon.curTotalBullets = weapon.maxTotalBullets - weapon.curMag;
                }
            }
        }
        OnPlayerUseAmmoBox() {
            this.RefullAmmo(WeaponMgr.Instance.GetWeapon1Src());
            this.RefullAmmo(WeaponMgr.Instance.GetWeapon2Src());
            this.RefullAmmo(WeaponMgr.Instance.GetWeapon3Src());
            this.RefullAmmo(WeaponMgr.Instance.GetWeapon4Src());
        }
        OnPlayerUseHpBox() {
            this.playerHp = this.playerMaxHp;
        }
        OnPlayerUseShieldBox() {
            this.playerShield = this.playerMaxShield;
        }
        OnUseParachuteBox() {
            this.OnPlayerUseAmmoBox();
            this.OnPlayerUseHpBox();
            this.OnPlayerUseShieldBox();
        }
        OnPlayerColViecle() {
            this.btnRideViecle.visible = true;
        }
        OnPlayerLeaveColViecle() {
            this.btnRideViecle.visible = false;
        }
        OnPlayerHitEnemy(damage) {
            let isCritical = false;
            let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            if (nowUsingWeapon && nowUsingWeapon.damage == damage / 2) {
                isCritical = true;
            }
            let randCriticalY = 50 + Tool.RandomInt(100);
            let randCriticalX = Tool.RandBool() == true ? -(20 + Tool.RandomInt(80)) : 20 + Tool.RandomInt(80);
            let randY = 40 + Tool.RandomInt(80);
            let randX = Tool.RandBool() == true ? -(20 + Tool.RandomInt(60)) : 20 + Tool.RandomInt(60);
            if (isCritical == true) {
                PopMsgTool.PopMsg("-" + damage, 18, randCriticalY, randCriticalX, "#ff0400", "#aa0f22", 1, "Microsoft YaHei");
            } else {
                PopMsgTool.PopMsg("-" + damage, 15, randY, randX, "#ffffff", "#f4850d", 1, "Microsoft YaHei");
            }
        }
        OnPlayerKillTeammate(isCritical) {
            SoundTool.PlaySfxByName("killTeammate");
        }
        OnPlayerKillEnemy(isCritical) {
            if (isCritical == true) {
                SoundTool.PlaySfxByName("headshot");
                DailyMissionMgr.Instance.On_Take10HeadShot();
                DataTool.ModifyInt(Std.Achieve_HeadShot30TimesKey, 1);
                DataTool.ModifyInt(Std.Achieve_HeadShot50TimesKey, 1);
            }
            SoundTool.PlaySfxByName("killSfx2");
            if (this.imgKillFxBg.visible == false) {
                this.imgKillFxBg.visible = true;
                this.tweenKillFx = Laya.Tween.from(this.imgKillFxBg, {
                    y: 160
                }, 300, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                    this.tweenKillAlpha = Laya.Tween.to(this.imgKillFxBg, {
                        alpha: 0
                    }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                        if (this.imgKillFxBg) {
                            this.imgKillFxBg.visible = false;
                            this.imgKillFxBg.alpha = 1;
                        }
                    }));
                }));
            }
        }
        OnPlayerReborn() {
            this.playerHp = this.playerMaxHp;
            PlayerInGameDataMgr.Instance.SetPlayerMaxHp(this.playerMaxHp);
            this.playerShield = 0;
            PlayerInGameDataMgr.Instance.SetPlayerMaxShield(100);
            this.imgHitBlood.visible = false;
            this.canReshowPlayerHitImg = true;
            this.imgPlayerCtlBg.visible = true;
            this.imgPlayerDieObBg.visible = false;
            this.imgPlayerDieMaskBg.visible = false;
            GameLevelMgr.Instance.SetIsPlayerInDieWaitTime(false);
            this.SetRidingOrLandUIState();
            if (this.playerDieAIModel) {
                this.playerDieAIModel.destroy(true);
            }
        }
        OnOpenSelectAllWeaponsPanel() {
            UIMgr.Instance.OpenUI(SelectAllWeaponsPanel);
        }
        OnOpenSelectSingleWeaponPanel() {
            UIMgr.Instance.OpenUI(SelectSingleWeaponPanel);
        }
        RefreshNowEquipBullutsInfo() {
            let nowEquip = WeaponMgr.Instance.GetNowUsingWeapon();
            if (nowEquip) {
                this.txtNowEquipInfoLeft.text = nowEquip.curMag + "/" + nowEquip.curTotalBullets;
                this.txtNowEquipInfoRight.text = nowEquip.curMag + "/" + nowEquip.curTotalBullets;
                this.txtNowEquipInfoLeft.visible = this.txtNowEquipInfoRight.visible = true;
            } else {
                this.txtNowEquipInfoLeft.visible = this.txtNowEquipInfoRight.visible = false;
            }
        }
        RefreshViecleInfoUI() {
            if (ViecleMgr.Instance.GetIsPlayerRidingViecle()) {
                let v = ViecleMgr.Instance.GetNowRideViecle();
                if (v) {
                    this.imgViecleHpBar.width = this.imgViecleHpBg.width * (v.curHp / v.maxHp);
                }
            }
        }
        DestroyPlayer() {
            let player = SceneMgr.Instance.GetCurOpenSc3d().getChildByName(Std.Prefab_PlayerName);
            if (!player) {
                return;
            }
            AISpawnerMgr.Instance.RemovePlayerFromTeamArray();
            player.destroy(true);
        }
        OnPlayerAirePlaneDieAndPlayerOnIt() {
            this.SetRidingOrLandUIState();
            ViecleMgr.Instance.SetIsPlayerRidingViecle(false);
            ViecleMgr.Instance.SetNowRideViecle(null);
            ViecleMgr.Instance.SetNowCollideViecle(null);
            AISpawnerMgr.Instance.RemovePlayerFromTeamArray();
            this.OnEnemyHitPlayer(1e4);
        }
        GetRandViecleHitSoundName() {
            let rand = Tool.RandomInt(4);
            if (rand == 0) return "vieclehit1";
            if (rand == 1) return "vieclehit2";
            if (rand == 2) return "vieclehit3";
            if (rand == 3) return "vieclehit4";
            return "vieclehit1";
        }
        FlashHitImgFx() {
            if (this.canReshowPlayerHitImg == true) {
                let hitSoundName = ViecleMgr.Instance.GetIsPlayerRidingViecle() ? this.GetRandViecleHitSoundName() : Tool.RandBool() == true ? "playerhit1" : "playerhit2";
                if (Tool.RandBool()) {
                    SoundTool.PlaySfxByName(hitSoundName);
                }
                this.imgHitBlood.visible = true;
                this.imgHitBlood.alpha = 1;
                this.imgHitBloodTween = Laya.Tween.to(this.imgHitBlood, {
                    alpha: 0
                }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                    this.canReshowPlayerHitImg = true;
                    this.imgHitBlood.visible = false;
                }));
                this.canReshowPlayerHitImg = false;
            }
        }
        OnEnemyHitPlayer(damage) {
            if (GameLevelMgr.Instance.GetIsParachuteBoxOpen() == true) {
                damage = 1;
            }
            if (this.playerHp <= 0) {
                return;
            }
            if (this.playerShield - damage <= 0) {
                this.playerHp += this.playerShield;
                this.playerShield = 0;
                this.playerHp -= damage;
            } else {
                this.playerShield -= damage;
            }
            Dispatcher.Event(EventType.OnPlayerBeHit);
            this.FlashHitImgFx();
            if (this.playerHp <= 0) {
                this.playerHp = 0;
                this.OnPlayerDie();
                Dispatcher.Event(EventType.OnPlayerDie);
                Tool.GetImg(this.owner, "imgSniperAimIcon").visible = false;
                if (Tool.RandBool()) {
                    SoundTool.PlaySfxByName("die");
                } else {
                    SoundTool.PlaySfxByName("die2");
                }
            }
        }
        ShowPlayerDieAnm() {
            if (ViecleMgr.Instance.GetIsPlayerRidingViecle()) {
                return;
            }
            let player = SceneMgr.Instance.GetCurOpenSc3d().getChildByName(Std.Prefab_PlayerName);
            if (!player) {
                return;
            }
            let sp3dPath = "";
            if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                sp3dPath = Std.Prefab_AI;
            } else if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.YouYu) {
                sp3dPath = Std.Prefab_AIYY;
            }
            ResMgr.Instance.LoadSp3d(sp3dPath, this, sp3d => {
                let ins = Laya.Sprite3D.instantiate(sp3d, SceneMgr.Instance.GetCurOpenSc3d());
                this.playerDieAIModel = ins;
                ins.transform.position = player.transform.position;
                let anmt = ins.getChildByName("AIModelRoot").getComponent(Laya.Animator);
                let playerSkinSp3d = ins.getChildByName("AIModelRoot").getChildByName("SA_Char_Survivor_OldMan");
                if (playerSkinSp3d) {
                    let skinPath = "";
                    if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                        if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Blue) {
                            skinPath = "res/Textures/AISkins/blueTeamSkin.png";
                        } else if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Red) {
                            skinPath = "res/Textures/AISkins/redTeamSkin.png";
                        }
                    } else if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.YouYu) {
                        skinPath = "res/Textures/AISkins/youyuWanjia.png";
                    }
                    Laya.Texture2D.load(skinPath, Laya.Handler.create(this, function (tex) {
                        let mat;
                        mat = new Laya.PBRStandardMaterial();
                        mat.albedoTexture = tex;
                        mat.metallic = 0;
                        mat.smoothness = 0;
                        playerSkinSp3d.skinnedMeshRenderer.material = mat;
                    }));
                }
                anmt.play(EnemyAni.Die);
            });
            let playerDieCam = WeaponMgr.Instance.GetPlayerDieCam();
            if (playerDieCam) {
                playerDieCam.active = true;
                let targetPos = Tool.AddV3(player.transform.position, Tool.V3(0, 9, -10));
                playerDieCam.transform.position = Tool.AddV3(player.transform.position, Tool.V3(0, 1, 0));
                this.tweenPlayerDieCam = Laya.Tween.to(playerDieCam.transform, {
                    localPositionX: targetPos.x,
                    localPositionY: targetPos.y,
                    localPositionZ: targetPos.z
                }, 800);
            }
            this.DestroyPlayer();
        }
        OnPlayerDie() {
            InputMgr.Instance.SetIsJumping(false);
            InputMgr.Instance.SetIsFire(false);
            InputMgr.Instance.SetIsAim(false);
            this.imgPlayerDieMaskBg.visible = true;
            let joyStick = this.joystick;
            joyStick.EndDrag();
            joyStick.HideStick();
            joyStick.onStickDownCb = (() => { });
            joyStick.onStickUpOrOutCb = (() => { });
            InputMgr.Instance.SetCanInput(false);
            this.ShowPlayerDieAnm();
            this.PlayerDieTip();
        }
        PlayerDieTip() {
            Laya.timer.once(2 * 1e3, this, () => {
                if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                    if (this.isBattleMatchOver == false) {
                        UIDataMidLyaer.IsFirstTimeInBattleSelectEquipUI = false;
                        if (DataTool.GetInt(Std.weaponBanner) == 0) {
                            this.imgJoyStickRect.y = -101;
                            SdkManager.Instance.ShowBanner("left");
                        } else {
                            this.imgJoyStickRect.y = 0;
                            SdkManager.Instance.HideBanner();
                        }
                        Dispatcher.Event(EventType.OnOpenSelectAllWeaponsPanel);
                        this.imgPlayerDieMaskBg.visible = false;
                    }
                }
            });
        }
        SetRidingOrLandUIState() {
            let isRiding = ViecleMgr.Instance.GetIsPlayerRidingViecle();
            let nowRideViecle = ViecleMgr.Instance.GetNowRideViecle();
            if (isRiding == true) {
                this.imgPlayerCtlBtnsBg.visible = false;
                this.imgJoyStickRect.visible = false;
                this.imgPlayerInfoBg.visible = false;
                this.imgViecleHudBg.visible = true;
                Tool.GetBtn(this.imgAirPlaneCtlBtnBg, "btnAirUp").visible = nowRideViecle.viecleType == ViecleTypeEnum.AirPlane;
                Tool.GetBtn(this.imgAirPlaneCtlBtnBg, "btnAirDown").visible = nowRideViecle.viecleType == ViecleTypeEnum.AirPlane;
                this.imgAirPlaneHudBg.visible = nowRideViecle.viecleType == ViecleTypeEnum.AirPlane;
            } else {
                this.imgPlayerCtlBtnsBg.visible = true;
                this.imgJoyStickRect.visible = true;
                this.imgPlayerInfoBg.visible = true;
                this.imgViecleHudBg.visible = false;
            }
        }
        AutoPopBulletsEmptyPanel() {
            if (WeaponMgr.Instance.GetIsNowUsingWeaponBulletEmpty()) {
                UIMgr.Instance.OpenUI(BulletAllEmptyAdPanel);
                Dispatcher.Event(EventType.OnReFullWeaponBullets);
            }
        }
        BackMenu() {
            if (ViecleMgr.Instance.GetNowRideViecle()) {
                ViecleMgr.Instance.GetNowRideViecle().StopViecleMoveSound();
            }
            ViecleMgr.Instance.SetNowRideViecle(null);
            ViecleMgr.Instance.SetNowCollideViecle(null);
            ViecleMgr.Instance.SetIsPlayerRidingViecle(false);
            AISpawnerMgr.Instance.ClearAllArray();
            WeaponMgr.Instance.DestroyHitFx();
            GameLevelMgr.Instance.SetIsPlayerInDieWaitTime(false);
            let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            ResMgr.Instance.Destoy3dScene(sc3d, sc3d.name);
            SceneMgr.Instance.OpenSc2D(Std.ScView_MenuName);
        }
        OnClickAimBtn() {
            if (InputMgr.Instance.GetIsJumping() || WeaponMgr.Instance.GetNowUsingWeapon() && WeaponMgr.Instance.GetNowUsingWeapon().isReloading) {
                return;
            }
            Dispatcher.Event(EventType.OnPlayerAim);
        }
        OnClickSingleFire() {
            if (InputMgr.Instance.GetIsJumping()) {
                return;
            }
            let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
            if (nowUsingWeapon && nowUsingWeapon.weaponFireModeEnum == WeaponFireModeEnum.SingleMode) {
                Dispatcher.Event(EventType.OnWeaponSingleFire);
                this.AutoPopBulletsEmptyPanel();
            }
        }
        AddBtnEvent() {
            Tool.AddBtnEvent(this.btnRideViecle, this, () => {
                PopMsgTool.ShowConfirmPanel("乘坐载具", "观看广告乘坐载具", () => {
                    if (ViecleMgr.Instance.GetNowCollideViecle().viecleType == ViecleTypeEnum.AirPlane) CountSdkMgr.Instance.TrackEvent("videStart25"); else CountSdkMgr.Instance.TrackEvent("videStart26");
                    SdkManager.Instance.ShowVideoAd(() => {
                        this.byChe();
                    });
                });
            }, false);
            Tool.AddBtnEvent(this.btnDownViecle, this, () => {
                if (!ViecleMgr.Instance.GetIsPlayerRidingViecle()) {
                    return;
                }
                let nowRideV = ViecleMgr.Instance.GetNowRideViecle();
                nowRideV.StopViecleMoveSound();
                let player = nowRideV.selfSp3d.getChildByName(Std.Prefab_PlayerName);
                if (player) {
                    player.transform.localScale = Tool.V3One();
                    SceneMgr.Instance.GetCurOpenSc3d().addChild(player);
                    let pc = player.getComponent(PlayerCtl);
                    let cc = player.getComponent(Laya.CharacterController);
                    cc.enabled = true;
                    pc.enabled = true;
                    player.transform.position = nowRideV.downVieclePos.transform.position;
                }
                nowRideV.SetViecleCamActive(false);
                if (nowRideV.viecleType == ViecleTypeEnum.AirPlane) {
                    nowRideV.selfSp3d.destroy(true);
                }
                ViecleMgr.Instance.SetNowRideViecle(null);
                ViecleMgr.Instance.SetNowCollideViecle(null);
                ViecleMgr.Instance.SetIsPlayerRidingViecle(false);
                Dispatcher.Event(EventType.OnPlayerDownViecle);
                this.SetRidingOrLandUIState();
            });
            Tool.AddBtnEvent(this.btnUpViecle, this, () => {
                UIDataMidLyaer.IsEquipShop_BuyEquip = EquipShop.Viecle;
                UIMgr.Instance.OpenUI(EquipShopPanel);
            });
            Tool.OnMouseDownUpOut(Tool.GetBtn(this.imgAirPlaneCtlBtnBg, "btnAirUp"), this, () => {
                Dispatcher.Event(EventType.OnAirePlaneVerMove, 5);
            }, () => {
                Dispatcher.Event(EventType.OnAirePlaneVerMove, 0);
            });
            Tool.OnMouseDownUpOut(Tool.GetBtn(this.imgAirPlaneCtlBtnBg, "btnAirDown"), this, () => {
                Dispatcher.Event(EventType.OnAirePlaneVerMove, -5);
            }, () => {
                Dispatcher.Event(EventType.OnAirePlaneVerMove, 0);
            });
            Tool.OnMouseDownUpOut(Tool.GetBtn(this.imgAirPlaneCtlBtnBg, "btnAirForward"), this, () => {
                Dispatcher.Event(EventType.OnAirePlaneForBackMove, 20);
            }, () => {
                Dispatcher.Event(EventType.OnAirePlaneForBackMove, 0);
            });
            Tool.OnMouseDownUpOut(Tool.GetBtn(this.imgAirPlaneCtlBtnBg, "btnAirBack"), this, () => {
                Dispatcher.Event(EventType.OnAirePlaneForBackMove, -20);
            }, () => {
                Dispatcher.Event(EventType.OnAirePlaneForBackMove, 0);
            });
            Tool.OnMouseDownUpOut(Tool.GetBtn(this.imgAirPlaneCtlBtnBg, "btnAirFire"), this, e => {
                ViecleMgr.Instance.SetIsViecleFire(true);
                InputMgr.Instance.SetNowViecleFireTouchId(e.touchId);
            }, () => {
                ViecleMgr.Instance.SetIsViecleFire(false);
            }, () => {
                () => { };
            });
            Laya.stage.on(Laya.Event.MOUSE_UP, this, e => {
                if (InputMgr.Instance.GetNowFireTouchId() == e.touchId) {
                    InputMgr.Instance.SetIsFire(false);
                    Dispatcher.Event(EventType.OnPlayerMouseUpFireBtn);
                }
                if (InputMgr.Instance.GetNowViecleFireTouchId() == e.touchId) {
                    ViecleMgr.Instance.SetIsViecleFire(false);
                }
                if (!InputMgr.Instance.GetIsJumping() && (WeaponMgr.Instance.GetNowUsingWeapon() && !WeaponMgr.Instance.GetNowUsingWeapon().isReloading) && !InputMgr.Instance.GetIsAim() && InputMgr.Instance.GetRunTouchId() == e.touchId) {
                    Dispatcher.Event(EventType.OnRunBtnUp);
                }
            });
            Tool.OnMouseDownUpOut(this.btnFire, this, e => {
                if (InputMgr.Instance.GetIsJumping()) {
                    return;
                }
                let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
                if (nowUsingWeapon && nowUsingWeapon.weaponFireModeEnum == WeaponFireModeEnum.AutoMode) {
                    InputMgr.Instance.SetIsFire(true);
                    InputMgr.Instance.SetNowFireTouchId(e.touchId);
                    Dispatcher.Event(EventType.OnPlayerMouseDownFireBtn);
                    this.AutoPopBulletsEmptyPanel();
                }
            }, () => {
                if (InputMgr.Instance.GetIsJumping()) {
                    return;
                }
                InputMgr.Instance.SetIsFire(false);
                Dispatcher.Event(EventType.OnPlayerRelaseFire);
            }, () => {
                () => { };
            });
            Tool.OnMouseDownUpOutNoFx(this.btnFireLeft, this, e => {
                if (InputMgr.Instance.GetIsJumping()) {
                    return;
                }
                let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
                if (nowUsingWeapon && nowUsingWeapon.weaponFireModeEnum == WeaponFireModeEnum.AutoMode) {
                    InputMgr.Instance.SetIsFire(true);
                    InputMgr.Instance.SetNowFireTouchId(e.touchId);
                    Dispatcher.Event(EventType.OnPlayerMouseDownFireBtn);
                    this.AutoPopBulletsEmptyPanel();
                }
            }, () => {
                if (InputMgr.Instance.GetIsJumping()) {
                    return;
                }
                InputMgr.Instance.SetIsFire(false);
                Dispatcher.Event(EventType.OnPlayerRelaseFire);
            }, () => {
                () => { };
            });
            Tool.AddBtnEvent(Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnFire"), this, e => {
                this.OnClickSingleFire();
                InputMgr.Instance.SetNowFireTouchId(e.touchId);
            }, false);
            Tool.AddBtnEventNoFx(Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnFireLeft"), this, e => {
                this.OnClickSingleFire();
                InputMgr.Instance.SetNowFireTouchId(e.touchId);
            }, false);
            Tool.AddBtnEvent(this.btnReload, this, () => {
                if (InputMgr.Instance.GetIsJumping()) {
                    return;
                }
                let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
                if (nowUsingWeapon) {
                    nowUsingWeapon.Reload();
                }
            }, false);
            Tool.AddBtnEventNoFx(this.btnAim, this, () => {
                this.OnClickAimBtn();
            }, false);
            Tool.AddBtnEventNoFx(this.btnAimLeft, this, () => {
                this.OnClickAimBtn();
            }, false);
            Tool.AddBtnEvent(this.btnJump, this, () => {
                let nowUsingWeapon = WeaponMgr.Instance.GetNowUsingWeapon();
                if (nowUsingWeapon) {
                    if (nowUsingWeapon.isReloading) {
                        Dispatcher.Event(EventType.OnPlayerInteraptReload);
                    }
                }
                Dispatcher.Event(EventType.OnPlayerJump);
            }, false);
            Tool.AddBtnEvent(Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnCrouch"), this, () => {
                if (InputMgr.Instance.GetIsJumping()) {
                    return;
                }
                Dispatcher.Event(EventType.OnPlayerCrouch);
            }, false);
            Tool.AddBtnEventScale(Tool.GetBtn(this.owner, "btnPause"), this, () => {
                UIMgr.Instance.OpenUI(PausePanel);
            });
            Tool.AddBtnEvent(Tool.GetBtn(this.owner, "btnKillPlayer"), this, () => {
                this.KillPlayer();
            });
            Tool.OnMouseDownUpOut(Tool.GetBtn(this.imgPlayerCtlBtnsBg, "btnRun"), this, e => {
                if (InputMgr.Instance.GetIsJumping() || WeaponMgr.Instance.GetNowUsingWeapon() && WeaponMgr.Instance.GetNowUsingWeapon().isReloading || InputMgr.Instance.GetIsAim()) {
                    return;
                }
                InputMgr.Instance.SetRunTouchId(e.touchId);
                Dispatcher.Event(EventType.OnRunBtnDown);
            }, () => {
                if (InputMgr.Instance.GetIsJumping() || WeaponMgr.Instance.GetNowUsingWeapon() && WeaponMgr.Instance.GetNowUsingWeapon().isReloading || InputMgr.Instance.GetIsAim()) {
                    return;
                }
                Dispatcher.Event(EventType.OnRunBtnUp);
            }, () => {
                () => { };
            });
        }
        byChe() {
            if (WeaponMgr.Instance.GetNowUsingWeapon().weaponTypeEnum == WeaponTypeEnum.Sniper) {
                Dispatcher.Event(EventType.OnPlayerQuitSniperAim);
            }
            this.btnRideViecle.visible = false;
            let nowCollideViecle = ViecleMgr.Instance.GetNowCollideViecle();
            if (nowCollideViecle) {
                ViecleMgr.Instance.SetNowRideViecle(nowCollideViecle);
                ViecleMgr.Instance.SetIsPlayerRidingViecle(true);
                nowCollideViecle.SetViecleCamActive(true);
                InputMgr.Instance.SetIsAim(false);
                this.joystick.EndDrag();
                let player = SceneMgr.Instance.GetCurOpenSc3d().getChildByName(Std.Prefab_PlayerName);
                if (player) {
                    let pc = player.getComponent(PlayerCtl);
                    let cc = player.getComponent(Laya.CharacterController);
                    cc.enabled = false;
                    pc.enabled = false;
                    nowCollideViecle.selfSp3d.addChild(player);
                    player.transform.localPosition = Tool.V3Zero();
                    player.transform.localScale = Tool.V3Zero();
                }
                this.SetRidingOrLandUIState();
                ViecleMgr.Instance.GetNowRideViecle().PlayViecleMoveSound();
                if (nowCollideViecle.viecleType == ViecleTypeEnum.AirPlane) {
                    CountSdkMgr.Instance.TrackEvent("gameUse0");
                    CountSdkMgr.Instance.TrackEvent("videComplete25");
                } else if (nowCollideViecle.viecleType == ViecleTypeEnum.Tank) {
                    CountSdkMgr.Instance.TrackEvent("gameUse1");
                    CountSdkMgr.Instance.TrackEvent("videComplete26");
                }
            }
        }
        KillPlayer() {
            InputMgr.Instance.SetIsJumping(false);
            InputMgr.Instance.SetIsFire(false);
            InputMgr.Instance.SetIsAim(false);
            this.imgPlayerDieMaskBg.visible = true;
            let joyStick = this.joystick;
            joyStick.EndDrag();
            joyStick.HideStick();
            joyStick.onStickDownCb = (() => { });
            joyStick.onStickUpOrOutCb = (() => { });
            InputMgr.Instance.SetCanInput(false);
            this.DestroyPlayer();
            UIDataMidLyaer.IsFirstTimeInBattleSelectEquipUI = false;
            Dispatcher.Event(EventType.OnOpenSelectAllWeaponsPanel);
        }
        YY_End() {
            SdkManager.Instance.HideCustomAd("3");
            Tool.GetBtn(this.owner, "btnPause").visible = false;
        }
    }
    class LoadingPanel extends UIBase {
        constructor() {
            super();
            this.canAutoDes = true;
            this.isResLoadOver = false;
            this.isProgressReach = false;
            this.duration = 2e3;
            this.maxDuration = 5e3;
            this.targetWidth = 308;
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnResLoadFinishCloseLoadingUI, this, this.OnResLoadFinishCloseLoadingUI);
            this.SetAllUINodesDic();
            this.imgProgressBar = this.GetImg("imgProgressBar");
            this.imgAirPlane = this.GetImg("imgAirPlane");
            this.imgProgressBar.width = 0;
            this.imgAirPlane.x = 0;
            Laya.Tween.to(this.imgProgressBar, {
                width: this.targetWidth
            }, this.duration, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                this.isProgressReach = true;
            }));
            Laya.Tween.to(this.imgAirPlane, {
                x: this.targetWidth
            }, this.duration, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                this.isProgressReach = true;
            }));
            Laya.timer.once(this.maxDuration, this, this.CloseUI);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnResLoadFinishCloseLoadingUI, this, this.OnResLoadFinishCloseLoadingUI);
            Tool.ClearTimerAndTween(this);
        }
        onUpdate() {
            if (this.isProgressReach && this.canAutoDes && this.isResLoadOver) {
                this.CloseUI();
                this.canAutoDes = false;
            }
        }
        OnResLoadFinishCloseLoadingUI() {
            this.isResLoadOver = true;
        }
    }
    class LoadingUIMgr extends Laya.Script {
        constructor() {
            super();
            LoadingUIMgr.Instance = this;
        }
        ShowLoadingUI() {
            UIMgr.Instance.OpenUI(LoadingPanel, () => { }, Laya.stage);
        }
        HandCloseLoadingUI() {
            UIMgr.Instance.DestroyUI(LoadingPanel.name);
        }
    }
    class MidLayer {
        static IsLeftSubPackLoadFinish() {
            if (!SdkManager.Instance.isDebugMode && (MidLayer.IsPrefabsResPackLoadFinish == false || MidLayer.IsScenesResPackLoadFinish == false || MidLayer.IsTexturesResPackLoadFinish == false)) {
                PopMsgTool.PopMsg("请稍等！场景资源加载中。");
                return false;
            }
            return true;
        }
    }
    MidLayer.SdkChannel = SdkChannel.WeiXinSdk;
    MidLayer.NeedClearAllData = false;
    MidLayer.IsPrefabsResPackLoadFinish = false;
    MidLayer.IsScenesResPackLoadFinish = false;
    MidLayer.IsTexturesResPackLoadFinish = false;
    class PlayerMgr extends Laya.Script {
        constructor() {
            super();
            PlayerMgr.Instance = this;
        }
        onAwake() {
            Dispatcher.AddListener(EventType.OnDoSpawnPlayer, this, this.SpawnAndInitPlayer);
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnDoSpawnPlayer, this, this.SpawnAndInitPlayer);
        }
        SpawnAndInitPlayer() {
            let sc3d = SceneMgr.Instance.GetCurOpenSc3d();
            if (!sc3d) {
                return;
            }
            ResMgr.Instance.LoadSp3d(Std.Prefab_PlayerName, this, playerSp3d => {
                let insPlayer = Laya.Sprite3D.instantiate(playerSp3d, sc3d);
                let spawnPosRoot;
                let finalStartPos;
                if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.ZombieMode) {
                    spawnPosRoot = sc3d.getChildByName(Std.GameSc3dItem_ZombieModePlayerPos);
                    if (!spawnPosRoot) {
                        return;
                    }
                    finalStartPos = spawnPosRoot.transform.position;
                } else if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                    if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Blue) {
                        spawnPosRoot = sc3d.getChildByName(Std.GameSc3dItem_BlueTeamSpawnPosRoot);
                    } else {
                        spawnPosRoot = sc3d.getChildByName(Std.GameSc3dItem_RedTeamSpawnPosRoot);
                    }
                    if (!spawnPosRoot) {
                        return;
                    }
                    finalStartPos = spawnPosRoot.getChildAt(Tool.RandomInt(spawnPosRoot.numChildren)).transform.position;
                } else if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.YouYu) {
                    spawnPosRoot = sc3d.getChildByName(Std.GameSc3dItem_YouyuModePos);
                    if (!spawnPosRoot) {
                        return;
                    }
                    if (GameLevelMgr.Instance.GetYYGame() == GameYYMode.MTR) {
                        finalStartPos = spawnPosRoot.getChildByName("pos").transform.position;
                    } else {
                        GameLevelMgr.Instance.BLQiaoRandomPos = Math.floor(Math.random() * 10);
                        GameLevelMgr.Instance.BLQiaoRandomPos = GameLevelMgr.Instance.BLQiaoRandomPos >= 10 ? 9 : GameLevelMgr.Instance.BLQiaoRandomPos;
                        finalStartPos = spawnPosRoot.getChildByName("pos" + GameLevelMgr.Instance.BLQiaoRandomPos).transform.position;
                    }
                }
                let allNodesMap = Tool.GetAllChildrenMap(insPlayer);
                let playerArmMesh = Tool.GetNodeByMap("arms_mesh", allNodesMap);
                if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.NormalBattleMode) {
                    if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Blue) {
                        playerArmMesh.skinnedMeshRenderer.material = MaterialMgr.Instance.GetPlayerArnBlueMat();
                    } else if (GameLevelMgr.Instance.GetPlayerBattleTeam() == BattleTeamEnum.Red) {
                        playerArmMesh.skinnedMeshRenderer.material = MaterialMgr.Instance.GetPlayerArnRedMat();
                    }
                } else if (GameLevelMgr.Instance.GetSelectMode() == GameLevelMode.YouYu) {
                    playerArmMesh.skinnedMeshRenderer.material = MaterialMgr.Instance.GetPlayerArmYouYuMat();
                }
                insPlayer.transform.position = finalStartPos;
                insPlayer.name = Std.Prefab_PlayerName;
                insPlayer.addComponent(PlayerCtl);
                InputMgr.Instance.SetCanInput(true);
                if (WeaponMgr.Instance.GetEvrCam()) {
                    WeaponMgr.Instance.GetEvrCam().active = false;
                }
                if (WeaponMgr.Instance.GetMapCam()) {
                    WeaponMgr.Instance.GetMapCam().active = false;
                }
                if (WeaponMgr.Instance.GetPlayerDieCam()) {
                    WeaponMgr.Instance.GetPlayerDieCam().active = false;
                }
                console.log("加载玩家");
                Dispatcher.Event(EventType.OnPlayerReborn);
            });
        }
    }
    class ObjPoolSp3D {
        constructor() {
            this.poolArray = [];
            this.maxCount = 10;
        }
        InitPool(tempSource, tempMaxCount) {
            this.source = tempSource;
            this.maxCount = tempMaxCount;
            for (let i = 0; i < this.maxCount; i++) {
                let obj = this.InsSingleObj();
                if (obj) {
                    obj.active = false;
                    this.poolArray.push(obj);
                }
            }
        }
        GetObj(needReInsWhileNull = true) {
            for (let i = 0; i < this.poolArray.length; i++) {
                let obj = this.poolArray[i];
                if (obj && obj.active == false) {
                    obj.active = true;
                    Tool.DelItemInArray(obj, this.poolArray);
                    return obj;
                }
            }
            if (needReInsWhileNull) {
                return this.InsSingleObj();
            }
            return null;
        }
        RecycleObj(sp3d) {
            if (!sp3d) return;
            this.poolArray.push(sp3d);
            sp3d.active = false;
        }
        InsSingleObj() {
            if (!this.source) return null;
            return Laya.Sprite3D.instantiate(this.source);
        }
    }
    class PoolMgr extends Laya.Script {
        constructor() {
            super();
            this.normalBulletPool = new ObjPoolSp3D();
            PoolMgr.Instance = this;
        }
        InitNormalBulletPool() {
            ResMgr.Instance.LoadSp3d(Std.Prefab_BtTrail, this, bt => {
                this.normalBulletPool.InitPool(bt, 10);
            });
        }
        GetNormalBulletPool() {
            return this.normalBulletPool;
        }
    }
    class SignMgr extends Laya.Script {
        constructor() {
            super();
            SignMgr.Instance = this;
        }
        onAwake() { }
        onDestroy() { }
    }
    class InitScViewCtl extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.CheckClearData();
            this.InitLocalData();
            this.InitManagers();
            this.EnableMultiTouch();
            this.InitOther();
            this.InitSound();
            this.OpenMenuSc();
        }
        CheckClearData() {
            if (MidLayer.NeedClearAllData == true) {
                DataTool.ClearAllData();
            }
        }
        InitOther() {
            SceneMgr.Instance.InitStartScene(Std.ScView_InitName);
            if (DataTool.GetInt(Std.Guide_HasLearn_SelectAllEquipPage) != 1 || DataTool.GetInt(Std.Guide_HasLearn_ZombieMode) != 1 || DataTool.GetInt(Std.Guide_HasLearn_IsFirstIntoMenu) != 1 || DataTool.GetInt(Std.Guide_HasLearn_IsFirstIntoConfig) != 1 || DataTool.GetInt(Std.Guide_HasLearn_Currency) != 1 || DataTool.GetInt(Std.Guide_HasLearn_EquipShop) != 1 || DataTool.GetInt(Std.Guide_HasLearn_MouseSensitivity) != 1 || DataTool.GetInt(Std.Guide_HasLearn_RankInfo) != 1) {
                Tool.AddMgrToStage(GuideMgr);
            }
        }
        InitSound() {
            if (DataTool.GetInt(Std.Setting_IsSoundOnKey) == 1) {
                SoundTool.UnMuteSound();
            } else {
                SoundTool.MuteSound();
            }
        }
        OpenMenuSc() {
            LoadingUIMgr.Instance.ShowLoadingUI();
            SceneMgr.Instance.OpenSc2D(Std.ScView_MenuName);
        }
        InitManagers() {
            Tool.AddMgrToStage(GameTimeMgr);
            Tool.AddMgrToStage(UIMgr);
            Tool.AddMgrToStage(ResMgr);
            Tool.AddMgrToStage(SceneMgr);
            Tool.AddMgrToStage(InputMgr);
            Tool.AddMgrToStage(WeaponMgr);
            Tool.AddMgrToStage(PlayerLocalDataMgr);
            Tool.AddMgrToStage(WeaponInfoMgr);
            Tool.AddMgrToStage(AISpawnerMgr);
            Tool.AddMgrToStage(ViecleMgr);
            Tool.AddMgrToStage(GameLevelMgr);
            Tool.AddMgrToStage(LoadingUIMgr);
            Tool.AddMgrToStage(PlayerInGameDataMgr);
            Tool.AddMgrToStage(MaterialMgr);
            Tool.AddMgrToStage(DailyMissionMgr);
            Tool.AddMgrToStage(PoolMgr);
            Tool.AddMgrToStage(SignMgr);
            Tool.AddMgrToStage(WatchAdWaitRotMgr);
            Tool.AddMgrToStage(PlayerMgr);
        }
        InitLocalData() {
            if (!DataTool.GetStr(Std.Local_EquipWeapon1Key)) DataTool.SetKv(Std.Local_EquipWeapon1Key, Std.WeaponName_Ak);
            if (!DataTool.GetStr(Std.Local_EquipWeapon2Key)) DataTool.SetKv(Std.Local_EquipWeapon2Key, Std.WeaponName_M1911);
            if (!DataTool.GetStr(Std.Local_EquipWeapon3Key)) DataTool.SetKv(Std.Local_EquipWeapon3Key, Std.WeaponName_None);
            if (!DataTool.GetStr(Std.Local_EquipWeapon4Key)) DataTool.SetKv(Std.Local_EquipWeapon4Key, Std.WeaponName_None);
            if (!DataTool.GetStr(Std.Local_HasUnlockWeapon1Key)) DataTool.SetKv(Std.Local_HasUnlockWeapon1Key, 1);
            if (!DataTool.GetStr(Std.Local_HasUnlockWeapon2Key)) DataTool.SetKv(Std.Local_HasUnlockWeapon2Key, 1);
            if (!DataTool.GetStr(Std.Local_HasUnlockWeapon3Key)) DataTool.SetKv(Std.Local_HasUnlockWeapon3Key, 0);
            if (!DataTool.GetStr(Std.Local_HasUnlockWeapon4Key)) DataTool.SetKv(Std.Local_HasUnlockWeapon4Key, 0);
            if (!DataTool.GetInt(Std.weaponBanner)) DataTool.SetKv(Std.weaponBanner, 0);
            if (!DataTool.GetInt(Std.weapon34isNoLock)) DataTool.SetKv(Std.weapon34isNoLock, 0);
            if (!DataTool.GetFloat(Std.Local_MouseSensitivityMulKey)) DataTool.SetKv(Std.Local_MouseSensitivityMulKey, .5);
            if (!DataTool.GetInt(Std.Setting_IsBloomOnKey)) DataTool.SetKv(Std.Setting_IsBloomOnKey, 0);
            if (!DataTool.GetInt(Std.Setting_IsSoundOnKey)) DataTool.SetKv(Std.Setting_IsSoundOnKey, 1);
            if (!DataTool.GetInt(Std.Setting_IsShakeOnKey)) DataTool.SetKv(Std.Setting_IsShakeOnKey, 1);
            if (!DataTool.GetInt(Std.Local_PlayerRankKey)) DataTool.SetKv(Std.Local_PlayerRankKey, 1);
            if (!DataTool.GetInt(Std.BattleMapUnlock_Map1Key)) DataTool.SetKv(Std.BattleMapUnlock_Map1Key, 1);
            if (DataTool.GetInt(Std.IsFirstTimeInGameKey) == 0) {
                DataTool.SetKv(Std.FrreDraw_LeftFreeDrawKey, 1);
                DataTool.SetKv(Std.IsFirstTimeInGameKey, 1);
                DataTool.SetKv(Std.FrreDraw_LocalSaveBigAwardProtectKey, 5);
            }
        }
        EnableMultiTouch() {
            Laya.Input3D.prototype.multiTouchEnabled = true;
            Laya.MouseManager.multiTouchEnabled = true;
        }
    }
    class BattleModeConfigPanel extends UIBase {
        constructor() {
            super();
            this.curSelectMapIdx = 0;
            this.winCount = 50;
            this.rebornTime = 3;
            this.aiDifficulty = 1;
            this.aiBalanceValue = 50;
            this.canUseViecle = true;
            this.isBlueTeam = true;
            this.canUseAI = true;
            this.canUseFriendFire = false;
            this.selectedCircelUIPath = "Menu/BattleModeConfig/gameset_btn_check2.png";
            this.unselectCircelUIPath = "Menu/BattleModeConfig/gameset_btn_uncheck2.png";
            this.allMapsArray = [BattleModeMapEnum.AircraftCarrier, BattleModeMapEnum.GameMainSc_Lake, BattleModeMapEnum.GameMainSc_Port, BattleModeMapEnum.GameMainSc_City];
            this.mapIconsArray = ["Menu/BattleModeConfig/map1.png", "Menu/BattleModeConfig/map2.png", "Menu/BattleModeConfig/map3.png", "Menu/BattleModeConfig/map4.png"];
            this.battleMapUnlockKeyArray = [Std.BattleMapUnlock_Map1Key, Std.BattleMapUnlock_Map2Key, Std.BattleMapUnlock_Map3Key, Std.BattleMapUnlock_Map4Key];
        }
        onAwake() {
            this.SetAllUINodesDic();
            Laya.Tween.from(this.GetImg("imgMapIcon"), {
                left: -1e3
            }, 250, Laya.Ease.linearNone);
            Laya.Tween.from(this.GetImg("imgSettingBg"), {
                right: -1e3
            }, 250, Laya.Ease.linearNone);
            Laya.Tween.from(this.GetImg("imgStartGameBtnBg"), {
                bottom: -150
            }, 250, Laya.Ease.linearNone);
        }
        onStart() {
            this.InitUI();
            this.AddBtnEvents();
            this.InitBalanceSlider();
            this.RefreshFriendFireUI();
            this.RefreshMapUI();
            this.InitGuide();
        }
        InitGuide() {
            if (DataTool.GetInt(Std.Guide_HasLearn_IsFirstIntoConfig) == 0) {
                let imgStartGameBtnBgPos = this.GetImg("imgStartGameBtnBg").localToGlobal(new Laya.Point(0, 0));
                let tempX = imgStartGameBtnBgPos.x + 180;
                let tempY = imgStartGameBtnBgPos.y - 120;
                let imgWinConditionPos = this.GetImg("imgWinCondition").localToGlobal(new Laya.Point(0, 0));
                let tempX1 = imgWinConditionPos.x - 960;
                let tempY1 = imgWinConditionPos.y + 10;
                GuideMgr.Instance.InitDataAndShowGuide([{
                    x: tempX1,
                    y: tempY1,
                    radius: 50,
                    tip: "General/help_pic_box.png",
                    tipx: tempX1 + 60,
                    tipy: tempY1,
                    tipStr: "修改：胜利条件，可以调整双方取得胜利需要击败敌军的数量！"
                }, {
                    x: tempX1,
                    y: tempY1 + 70,
                    radius: 50,
                    tip: "General/help_pic_box.png",
                    tipx: tempX1 + 60,
                    tipy: tempY1 + 70,
                    tipStr: "修改：允许载具，可以设置是否需要生成载具！"
                }, {
                    x: tempX1,
                    y: tempY1 + 140,
                    radius: 50,
                    tip: "General/help_pic_box.png",
                    tipx: tempX1 + 60,
                    tipy: tempY1 + 140,
                    tipStr: "修改：阵营选择，可以选择以红方或蓝方为自己的阵营！"
                }, {
                    x: tempX1,
                    y: tempY1 + 210,
                    radius: 50,
                    tip: "General/help_pic_box.png",
                    tipx: tempX1 + 60,
                    tipy: tempY1 + 210,
                    tipStr: "修改：允许AI，设置是否需要加入机器人加入战斗！"
                }, {
                    x: tempX1,
                    y: tempY1 + 280,
                    radius: 50,
                    tip: "General/help_pic_box.png",
                    tipx: tempX1 + 60,
                    tipy: tempY1 + 280,
                    tipStr: "修改：AI平衡，设置红蓝双方战斗力的平衡，越大则战斗力越强！"
                }, {
                    x: tempX1 + 320,
                    y: tempY1 + 140,
                    radius: 50,
                    tip: "General/help_pic_box.png",
                    tipx: tempX1 + 60,
                    tipy: tempY1 + 180,
                    tipStr: "修改：允许友伤，设置是否可以攻击友军！"
                }, {
                    x: tempX1 + 320,
                    y: tempY1 + 210,
                    radius: 50,
                    tip: "General/help_pic_box.png",
                    tipx: tempX1 + 60,
                    tipy: tempY1 + 230,
                    tipStr: "修改：AI强度，设置双方AI的战斗力强度！"
                }, {
                    x: 200,
                    y: 555 - 100,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: 330,
                    tipy: 460,
                    tipStr: "点击：解锁更多地图，可以免费解锁其他更有趣的地图哦！"
                }, {
                    x: tempX,
                    y: tempY,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: tempX - 320,
                    tipy: tempY - 280,
                    tipStr: "点击《开始游戏》按钮即可进入战斗！"
                }], () => {
                    DataTool.SetKv(Std.Guide_HasLearn_IsFirstIntoConfig, 1);
                    if (MidLayer.IsLeftSubPackLoadFinish() == false) {
                        return;
                    }
                    Dispatcher.Event(EventType.OnStartBattleModeGame);
                    this.SaveConfig();
                    LoadingUIMgr.Instance.ShowLoadingUI();
                    SceneMgr.Instance.OpenSc2D(Std.ScView_GameName);
                });
            } else {
                SdkManager.Instance.ShowBanner("center");
            }
        }
        AddBtnEvents() {
            this.AddBtnEventScaleFx("btnCloseBattleConfig", () => {
                SdkManager.Instance.HideBanner();
                this.CloseUI();
            });
            this.AddBtnEventScaleFx("btnStartBattleModeGame", () => {
                if (MidLayer.IsLeftSubPackLoadFinish() == false) {
                    return;
                }
                if (DataTool.GetInt(this.battleMapUnlockKeyArray[this.curSelectMapIdx]) == 0) {
                    PopMsgTool.PopMsg("该地图尚未解锁！");
                    return;
                }
                Dispatcher.Event(EventType.OnStartBattleModeGame);
                this.SaveConfig();
                LoadingUIMgr.Instance.ShowLoadingUI();
                SceneMgr.Instance.OpenSc2D(Std.ScView_GameName);
            });
            this.AddBtnEventScaleFx("btnPrevMap", () => {
                if (this.curSelectMapIdx <= 0) {
                    this.curSelectMapIdx = this.allMapsArray.length - 1;
                } else {
                    this.curSelectMapIdx -= 1;
                }
                this.RefreshMapUI();
            });
            this.AddBtnEventScaleFx("btnNextMap", () => {
                if (this.curSelectMapIdx >= this.allMapsArray.length - 1) {
                    this.curSelectMapIdx = 0;
                } else {
                    this.curSelectMapIdx += 1;
                }
                this.RefreshMapUI();
            });
            this.AddBtnEventScaleFx("btnUnlockMoreMapAd", () => {
                PopMsgTool.ShowConfirmPanel("解锁地图", "是否观看视频免费解锁新地图?", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart11");
                    SdkManager.Instance.ShowVideoAd(() => {
                        this.UnlockMap();
                        this.RefreshMapUI();
                        CountSdkMgr.Instance.TrackEvent("videComplete11");
                    });
                });
            });
            this.AddBtnEventScaleFx("btnSunWinCondtion", () => {
                this.SubWinCount();
            });
            this.AddBtnEventScaleFx("btnAddWinCondtion", () => {
                this.AddWinCount();
            });
            this.AddBtnEventScaleFx("btnSunRebornTime", () => {
                if (this.rebornTime <= 1) {
                    return;
                }
                this.rebornTime -= 1;
                this.SetText("txtRebornTime", this.rebornTime + "秒");
            });
            this.AddBtnEventScaleFx("btnAddRebornTime", () => {
                this.rebornTime += 1;
                this.SetText("txtRebornTime", this.rebornTime + "秒");
            });
            this.AddBtnEventScaleFx("btnUseViecle", () => {
                this.canUseViecle = true;
                this.RefreshUseViecleUI();
            });
            this.AddBtnEventScaleFx("btnDontUseViecle", () => {
                this.canUseViecle = false;
                this.RefreshUseViecleUI();
            });
            this.AddBtnEventScaleFx("btnSelectBlueTeam", () => {
                this.isBlueTeam = true;
                this.RefreshTeamColoreUI();
            });
            this.AddBtnEventScaleFx("btnSelectRedTeam", () => {
                this.isBlueTeam = false;
                this.RefreshTeamColoreUI();
            });
            this.AddBtnEventScaleFx("btnUseAI", () => {
                this.canUseAI = true;
                this.RefreshCanUseAIUI();
            });
            this.AddBtnEventScaleFx("btnDontUseAI", () => {
                this.canUseAI = false;
                this.RefreshCanUseAIUI();
            });
            this.AddBtnEventScaleFx("btnEasyDiff", () => {
                this.aiDifficulty = 1;
                this.RefreshAIDifficultyUI();
            });
            this.AddBtnEventScaleFx("btnHardDiff", () => {
                this.aiDifficulty = 2;
                this.RefreshAIDifficultyUI();
            });
            this.AddBtnEventScaleFx("btnUseFF", () => {
                this.canUseFriendFire = true;
                this.RefreshFriendFireUI();
            });
            this.AddBtnEventScaleFx("btnDontFF", () => {
                this.canUseFriendFire = false;
                this.RefreshFriendFireUI();
            });
        }
        SubWinCount() {
            if (this.winCount <= 1) {
                return;
            }
            this.winCount -= 1;
            this.GetUIByT("tiWinCount").text = this.winCount + "";
        }
        AddWinCount() {
            if (this.winCount >= 70) {
                return;
            }
            this.winCount += 1;
            this.GetUIByT("tiWinCount").text = this.winCount + "";
        }
        InitUI() {
            this.winCount = SdkManager.Instance.GetSwitchData("p7");
            this.GetUIByT("tiWinCount").text = this.winCount + "";
            this.SetText("txtRebornTime", this.rebornTime + "秒");
            this.RefreshUseViecleUI();
        }
        SaveConfig() {
            this.winCount = parseInt(this.GetUIByT("tiWinCount").text);
            GameLevelMgr.Instance.SetBattleWinTargetCount(this.winCount);
            GameLevelMgr.Instance.SetRebornTime(this.rebornTime);
            GameLevelMgr.Instance.SetCanUseViecle(this.canUseViecle);
            GameLevelMgr.Instance.SetPlayerBattleTeam(this.isBlueTeam == true ? BattleTeamEnum.Blue : BattleTeamEnum.Red);
            GameLevelMgr.Instance.SetCanUseAI(this.canUseAI);
            GameLevelMgr.Instance.SetAiDifficulty(this.aiDifficulty);
            GameLevelMgr.Instance.SetFriendlyFire(this.canUseFriendFire);
            GameLevelMgr.Instance.SetAiBalence(this.aiBalanceValue);
            this.SaveNowSelectMapEnum();
        }
        RefreshFriendFireUI() {
            this.SetBtnSkin("btnUseFF", this.canUseFriendFire == true ? this.selectedCircelUIPath : this.unselectCircelUIPath);
            this.SetBtnSkin("btnDontFF", this.canUseFriendFire == false ? this.selectedCircelUIPath : this.unselectCircelUIPath);
        }
        RefreshAIDifficultyUI() {
            this.SetBtnSkin("btnEasyDiff", this.aiDifficulty == 1 ? this.selectedCircelUIPath : this.unselectCircelUIPath);
            this.SetBtnSkin("btnHardDiff", this.aiDifficulty == 2 ? this.selectedCircelUIPath : this.unselectCircelUIPath);
        }
        RefreshCanUseAIUI() {
            this.SetBtnSkin("btnUseAI", this.canUseAI == true ? this.selectedCircelUIPath : this.unselectCircelUIPath);
            this.SetBtnSkin("btnDontUseAI", this.canUseAI == false ? this.selectedCircelUIPath : this.unselectCircelUIPath);
        }
        RefreshTeamColoreUI() {
            this.SetBtnSkin("btnSelectBlueTeam", this.isBlueTeam == true ? this.selectedCircelUIPath : this.unselectCircelUIPath);
            this.SetBtnSkin("btnSelectRedTeam", this.isBlueTeam == false ? this.selectedCircelUIPath : this.unselectCircelUIPath);
        }
        RefreshUseViecleUI() {
            this.SetBtnSkin("btnUseViecle", this.canUseViecle == true ? this.selectedCircelUIPath : this.unselectCircelUIPath);
            this.SetBtnSkin("btnDontUseViecle", this.canUseViecle == false ? this.selectedCircelUIPath : this.unselectCircelUIPath);
        }
        InitBalanceSlider() {
            let hs = this.GetHSlider("hsldBalanceSlider");
            hs.width = 204;
            hs.min = 0;
            hs.max = 100;
            hs.value = 50;
            hs.tick = 1;
            hs.changeHandler = new Laya.Handler(this, this.onChange);
        }
        onChange(value) {
            this.aiBalanceValue = value;
        }
        UnlockMap() {
            DataTool.SetKv(this.battleMapUnlockKeyArray[this.curSelectMapIdx], 1);
            PopMsgTool.PopMsg("解锁新地图！");
            GenGamePlayTool.PlayUnlockSfx();
        }
        SaveNowSelectMapEnum() {
            if (this.curSelectMapIdx == 0) {
                GameLevelMgr.Instance.SetNowSelectMapEnum(BattleModeMapEnum.AircraftCarrier);
            } else if (this.curSelectMapIdx == 1) {
                GameLevelMgr.Instance.SetNowSelectMapEnum(BattleModeMapEnum.GameMainSc_Lake);
            } else if (this.curSelectMapIdx == 2) {
                GameLevelMgr.Instance.SetNowSelectMapEnum(BattleModeMapEnum.GameMainSc_Port);
            } else if (this.curSelectMapIdx == 3) {
                GameLevelMgr.Instance.SetNowSelectMapEnum(BattleModeMapEnum.GameMainSc_City);
            }
        }
        RefreshMapUI() {
            this.SetVisible("imgMapLoackTip", DataTool.GetInt(this.battleMapUnlockKeyArray[this.curSelectMapIdx]) == 0);
            this.SetVisible("btnUnlockMoreMapAd", DataTool.GetInt(this.battleMapUnlockKeyArray[this.curSelectMapIdx]) == 0);
            this.SetImgSkin("imgMapIcon", this.mapIconsArray[this.curSelectMapIdx]);
        }
    }
    class AchievePanel extends UIBase {
        constructor() {
            super();
            this.achieveLocalKeyArray = [Std.Achieve_Win1BattleModeKey, Std.Achieve_Win5BattleModeKey, Std.Achieve_Win1ZombieModeKey, Std.Achieve_Win5ZombieModeKey, Std.Achieve_UpdateEquip3TimesKey, Std.Achieve_UpdateEquip5TimesKey, Std.Achieve_Kill50EnemyKey, Std.Achieve_Kill100EnemyKey, Std.Achieve_Kill30ZombieKey, Std.Achieve_Kill50ZombieKey, Std.Achieve_Die10TimesKey, Std.Achieve_Die50TimesKey, Std.Achieve_HeadShot30TimesKey, Std.Achieve_HeadShot50TimesKey, Std.Achieve_GetBigAwardDrawKey];
            this.awardHasClaimTimesKeyArray = [Std.AchieveClaim_Win1BattleModeKey, Std.AchieveClaim_Win5BattleModeKey, Std.AchieveClaim_Win1ZombieModeKey, Std.AchieveClaim_Win5ZombieModeKey, Std.AchieveClaim_UpdateEquip3TimesKey, Std.AchieveClaim_UpdateEquip5TimesKey, Std.AchieveClaim_Kill50EnemyKey, Std.AchieveClaim_Kill100EnemyKey, Std.AchieveClaim_Kill30ZombieKey, Std.AchieveClaim_Kill50ZombieKey, Std.AchieveClaim_Die10TimesKey, Std.AchieveClaim_Die50TimesKey, Std.AchieveClaim_HeadShot30TimesKey, Std.AchieveClaim_HeadShot50TimesKey, Std.AchieveClaim_GetBigAwardDrawKey];
            this.achieveDescArray = ["赢得1局战场模式", "赢得5局战场模式", "完成1局僵尸模式", "完成5局僵尸模式", "进行3次装备升级", "进行5次装备升级", "击败50名对手", "击败100名对手", "击败30只僵尸", "击败50只僵尸", "阵亡10次", "阵亡50次", "爆头30次", "爆头50次", "抽奖中获得1次大奖"];
            this.awardIconTypeArray = [CurrencyTypeEnum.Gold, CurrencyTypeEnum.Gold, CurrencyTypeEnum.Gold, CurrencyTypeEnum.BlueDiamond, CurrencyTypeEnum.BlueDiamond, CurrencyTypeEnum.RedDiamond, CurrencyTypeEnum.RedDiamond, CurrencyTypeEnum.Gold, CurrencyTypeEnum.RedDiamond, CurrencyTypeEnum.Gold, CurrencyTypeEnum.BlueDiamond, CurrencyTypeEnum.Gold, CurrencyTypeEnum.BlueDiamond, CurrencyTypeEnum.Gold, CurrencyTypeEnum.BlueDiamond];
            this.awardCountArray = [300, 1e3, 300, 300, 200, 100, 200, 1e3, 150, 800, 200, 600, 300, 900, 200];
            this.awardTargetCountArray = [1, 5, 1, 5, 3, 5, 50, 100, 30, 50, 10, 50, 30, 50, 1];
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.GetNeed();
            this.InitLvList();
        }
        GetNeed() {
            this.listAchieve = this.GetList("listAchieve");
        }
        InitLvList() {
            this.listAchieve.vScrollBarSkin = "";
            this.listAchieve.renderHandler = new Laya.Handler(this, this.OnRender);
            this.AddListElements();
        }
        GetAwardIconPathByType(awardType) {
            if (awardType == CurrencyTypeEnum.Gold) return "General/settlement_pic_money1.png"; else if (awardType == CurrencyTypeEnum.BlueDiamond) return "General/settlement_pic_money2.png"; else if (awardType == CurrencyTypeEnum.RedDiamond) return "General/settlement_pic_money3.png";
        }
        OnRender(cell, index) {
            let btnClaim = cell.getChildByName("btnClaim");
            let awardIcon = cell.getChildByName("awardIcon");
            let hasFinishTip = cell.getChildByName("hasFinishTip");
            let progressBar = cell.getChildByName("progressBar");
            let awardCount = cell.getChildByName("awardCount");
            let achieveDesc = cell.getChildByName("achieveDesc");
            let achieveProgressTxt = cell.getChildByName("achieveProgressTxt");
            if (btnClaim.hasListener(Laya.Event.CLICK)) {
                btnClaim.offAll();
                btnClaim.on(Laya.Event.CLICK, this, () => {
                    this.DoClaimAward(nowProgressCount, claimCount, index);
                });
            }
            achieveDesc.text = this.achieveDescArray[index];
            awardIcon.skin = this.GetAwardIconPathByType(this.awardIconTypeArray[index]);
            awardCount.text = this.awardCountArray[index] + "";
            let nowProgressCount = DataTool.GetInt(this.achieveLocalKeyArray[index]);
            nowProgressCount = nowProgressCount >= this.awardTargetCountArray[index] ? this.awardTargetCountArray[index] : nowProgressCount;
            achieveProgressTxt.text = nowProgressCount + "/" + this.awardTargetCountArray[index];
            progressBar.width = nowProgressCount / this.awardTargetCountArray[index] * 330;
            let claimCount = DataTool.GetInt(this.awardHasClaimTimesKeyArray[index]);
            hasFinishTip.visible = claimCount > 0;
            if (nowProgressCount >= this.awardTargetCountArray[index]) {
                if (claimCount == 0) {
                    btnClaim.skin = "DailyMissionPanel/mission_btn_get.png";
                } else if (claimCount == 1) {
                    btnClaim.skin = "DailyMissionPanel/mission_btn_getagain.png";
                } else {
                    btnClaim.skin = "DailyMissionPanel/mission_btn_got.png";
                }
            } else {
                btnClaim.skin = "DailyMissionPanel/mission_btn_wdc.png";
            }
        }
        DoClaimAward(nowProgressCount, claimCount, index) {
            if (nowProgressCount >= this.awardTargetCountArray[index]) {
                if (claimCount == 0) {
                    DataTool.ModifyInt(this.awardHasClaimTimesKeyArray[index], 1);
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.awardCountArray[index], this.awardIconTypeArray[index]));
                    this.listAchieve.refresh();
                } else if (claimCount == 1) {
                    CountSdkMgr.Instance.TrackEvent("videStart1");
                    SdkManager.Instance.ShowVideoAd(() => {
                        DataTool.ModifyInt(this.awardHasClaimTimesKeyArray[index], 1);
                        Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.awardCountArray[index], this.awardIconTypeArray[index]));
                        this.listAchieve.refresh();
                        CountSdkMgr.Instance.TrackEvent("videComplete1");
                    });
                }
            } else { }
        }
        AddListElements() {
            let data = [];
            this.listAchieve.repeatX = 1;
            this.listAchieve.repeatY = this.achieveLocalKeyArray.length;
            let counts = this.listAchieve.repeatX * this.listAchieve.repeatY;
            for (let i = 0; i < counts; i++) {
                let tempData = {};
                data.push(tempData);
            }
            this.listAchieve.array = data;
        }
    }
    class DailyMissionPanel extends UIBase {
        constructor() {
            super();
            this.missionRefBtnMap = new Map();
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.AddBtnEvents();
            this.RefBtnForMissionToMap();
            UIMgr.Instance.OpenUI(CurrencyDataPanel, () => { }, this.GetImg("imgCurrencyBg"));
            Laya.Tween.from(this.GetImg("imgLeftRole"), {
                left: -500
            }, 250, Laya.Ease.linearNone);
            Laya.Tween.from(this.GetImg("imgRightBg"), {
                right: -1200
            }, 250, Laya.Ease.linearNone);
            Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
            Dispatcher.AddListener(EventType.OnResetMission, this, this.OnResetMission);
        }
        onStart() {
            this.SetBtnSkin("btnDailyMission", "DailyMissionPanel/mission_btn_mrrw2.png");
            this.SetBtnSkin("btnAchieve", "DailyMissionPanel/mission_btn_cj1.png");
            this.RefreshMissionList();
            this.RefreshClaimAgainBtnState();
            this.RefreshHasFinishMissionUI();
        }
        onDestroy() {
            Dispatcher.RemoveListener(EventType.OnResetMission, this, this.OnResetMission);
        }
        OnResetMission() {
            this.RefBtnForMissionToMap();
            this.RefreshMissionList();
            this.RefreshClaimAgainBtnState();
            this.RefreshHasFinishMissionUI();
        }
        AddBtnEvents() {
            this.AddBtnEvent("btnCliam1", () => {
                this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam1"));
            });
            this.AddBtnEvent("btnCliam2", () => {
                this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam2"));
            });
            this.AddBtnEvent("btnCliam3", () => {
                this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam3"));
            });
            this.AddBtnEvent("btnCliam4", () => {
                this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam4"));
            });
            this.AddBtnEvent("btnCliam5", () => {
                this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam5"));
            });
            this.AddBtnEvent("btnCliam1Again", () => {
                CountSdkMgr.Instance.TrackEvent("videStart0");
                SdkManager.Instance.ShowVideoAd(() => {
                    this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam1"), true);
                    this.GetBtn("btnCliam1Again").scaleX = 0;
                    this.GetBtn("btnCliam1Again").scaleY = 0;
                    this.GetBtn("btnCliam1Again").disabled = true;
                    DataTool.SetKv(Std.ClaimDailyAward1AgianKey, 1);
                    CountSdkMgr.Instance.TrackEvent("videComplete0");
                });
            });
            this.AddBtnEvent("btnCliam2Again", () => {
                CountSdkMgr.Instance.TrackEvent("videStart0");
                SdkManager.Instance.ShowVideoAd(() => {
                    this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam2"), true);
                    this.GetBtn("btnCliam2Again").scaleX = 0;
                    this.GetBtn("btnCliam2Again").scaleY = 0;
                    this.GetBtn("btnCliam2Again").disabled = true;
                    DataTool.SetKv(Std.ClaimDailyAward2AgianKey, 1);
                    CountSdkMgr.Instance.TrackEvent("videComplete0");
                });
            });
            this.AddBtnEvent("btnCliam3Again", () => {
                CountSdkMgr.Instance.TrackEvent("videStart0");
                SdkManager.Instance.ShowVideoAd(() => {
                    this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam3"), true);
                    this.GetBtn("btnCliam3Again").scaleX = 0;
                    this.GetBtn("btnCliam3Again").scaleY = 0;
                    this.GetBtn("btnCliam3Again").disabled = true;
                    DataTool.SetKv(Std.ClaimDailyAward3AgianKey, 1);
                    CountSdkMgr.Instance.TrackEvent("videComplete0");
                });
            });
            this.AddBtnEvent("btnCliam4Again", () => {
                CountSdkMgr.Instance.TrackEvent("videStart0");
                SdkManager.Instance.ShowVideoAd(() => {
                    this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam4"), true);
                    this.GetBtn("btnCliam4Again").scaleX = 0;
                    this.GetBtn("btnCliam4Again").scaleY = 0;
                    this.GetBtn("btnCliam4Again").disabled = true;
                    DataTool.SetKv(Std.ClaimDailyAward4AgianKey, 1);
                    CountSdkMgr.Instance.TrackEvent("videComplete0");
                });
            });
            this.AddBtnEvent("btnCliam5Again", () => {
                CountSdkMgr.Instance.TrackEvent("videStart0");
                SdkManager.Instance.ShowVideoAd(() => {
                    this.SaveClaimByMissionTyep(this.GetMissionTyepByBtn("btnCliam5"), true);
                    this.GetBtn("btnCliam5Again").scaleX = 0;
                    this.GetBtn("btnCliam5Again").scaleY = 0;
                    this.GetBtn("btnCliam5Again").disabled = true;
                    DataTool.SetKv(Std.ClaimDailyAward5AgianKey, 1);
                    CountSdkMgr.Instance.TrackEvent("videComplete0");
                });
            });
            this.AddBtnEventScaleFx("btnBack", () => {
                Dispatcher.Event(EventType.OnCloseOtherCurrencyPanelInMenuSc);
                this.CloseUI();
            });
            this.AddBtnEvent("btnClaimAllFinishAward", () => {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(500, CurrencyTypeEnum.Gold));
                DataTool.SetKv(Std.HasClaimFinishAllMissionAwardKey, 1);
                this.RefreshHasFinishMissionUI();
            });
            this.AddBtnEvent("btnClaimAllFinishAwardAgain", () => {
                CountSdkMgr.Instance.TrackEvent("videStart0", "claimFinishAll5MissionBox");
                SdkManager.Instance.ShowVideoAd(() => {
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(500, CurrencyTypeEnum.Gold));
                    DataTool.SetKv(Std.HasClaimAgainFinishAllMissionAwardKey, 1);
                    this.RefreshHasFinishMissionUI();
                    CountSdkMgr.Instance.TrackEvent("videComplete0", "claimFinishAll5MissionBox");
                });
            });
            this.AddBtnEvent("btnDailyMission", () => {
                this.SetBtnSkin("btnDailyMission", "DailyMissionPanel/mission_btn_mrrw2.png");
                this.SetBtnSkin("btnAchieve", "DailyMissionPanel/mission_btn_cj1.png");
                this.SetVisible("imgRightBg", true);
                this.SetVisible("imgAchievePanelBg", false);
                this.SetVisible("imgLeftRole", true);
            });
            this.AddBtnEvent("btnAchieve", () => {
                this.SetBtnSkin("btnDailyMission", "DailyMissionPanel/mission_btn_mrrw1.png");
                this.SetBtnSkin("btnAchieve", "DailyMissionPanel/mission_btn_cj2.png");
                this.SetVisible("imgRightBg", false);
                this.SetVisible("imgAchievePanelBg", true);
                this.SetVisible("imgLeftRole", false);
                UIMgr.Instance.OpenUI(AchievePanel, () => { }, this.GetImg("imgAchievePanelBg"));
            });
        }
        RefreshHasFinishMissionUI() {
            let canClaimCount = 5;
            let hasFinishCount = this.GetHasFinishMissionCount();
            this.SetText("txtMissionProgress", hasFinishCount + "/5");
            this.GetBtn("btnClaimAllFinishAward").disabled = hasFinishCount < canClaimCount || DataTool.GetInt(Std.HasClaimFinishAllMissionAwardKey) == 1;
            if (hasFinishCount >= canClaimCount) {
                if (DataTool.GetInt(Std.HasClaimFinishAllMissionAwardKey) == 0) {
                    this.SetBtnSkin("btnClaimAllFinishAward", "DailyMissionPanel/mission_btn_openchest.png");
                    this.SetVisible("btnClaimAllFinishAwardAgain", false);
                } else {
                    this.SetBtnSkin("btnClaimAllFinishAward", "DailyMissionPanel/mission_btn_got.png");
                    if (DataTool.GetInt(Std.HasClaimAgainFinishAllMissionAwardKey) == 0) {
                        this.SetVisible("btnClaimAllFinishAwardAgain", true);
                    } else {
                        this.SetVisible("btnClaimAllFinishAwardAgain", false);
                    }
                }
            } else {
                this.SetBtnSkin("btnClaimAllFinishAward", "DailyMissionPanel/mission_btn_wdc.png");
                this.SetVisible("btnClaimAllFinishAwardAgain", false);
            }
        }
        GetHasFinishMissionCount() {
            let count = 0;
            let allBtnsArray = [this.GetBtn("btnCliam1"), this.GetBtn("btnCliam2"), this.GetBtn("btnCliam3"), this.GetBtn("btnCliam4"), this.GetBtn("btnCliam5")];
            for (let i = 0; i < allBtnsArray.length; i++) {
                if (this.CheckSingleCliamBtnFinishState(allBtnsArray[i]) == true) {
                    count += 1;
                }
            }
            return count;
        }
        CheckSingleCliamBtnFinishState(btn) {
            if (btn.skin != "DailyMissionPanel/mission_btn_wdc.png") {
                return true;
            }
            return false;
        }
        RefreshClaimAgainBtnState() {
            this.SetVisible("btnCliam1Again", this.GetBtn("btnCliam1").skin == "DailyMissionPanel/mission_btn_got.png" && DataTool.GetInt(Std.ClaimDailyAward1AgianKey) == 0);
            this.SetVisible("btnCliam2Again", this.GetBtn("btnCliam2").skin == "DailyMissionPanel/mission_btn_got.png" && DataTool.GetInt(Std.ClaimDailyAward2AgianKey) == 0);
            this.SetVisible("btnCliam3Again", this.GetBtn("btnCliam3").skin == "DailyMissionPanel/mission_btn_got.png" && DataTool.GetInt(Std.ClaimDailyAward3AgianKey) == 0);
            this.SetVisible("btnCliam4Again", this.GetBtn("btnCliam4").skin == "DailyMissionPanel/mission_btn_got.png" && DataTool.GetInt(Std.ClaimDailyAward4AgianKey) == 0);
            this.SetVisible("btnCliam5Again", this.GetBtn("btnCliam5").skin == "DailyMissionPanel/mission_btn_got.png" && DataTool.GetInt(Std.ClaimDailyAward5AgianKey) == 0);
        }
        GetMissionTyepByBtn(btnName) {
            let key = DailyMissionTypeEnum.TotalKill100Enemy;
            let btn = this.GetBtn(btnName);
            this.missionRefBtnMap.forEach(function (v, k) {
                if (btn == v) {
                    key = k;
                }
            });
            return key;
        }
        SaveClaimByMissionTyep(missionType, isAgainClaim = false) {
            if (missionType == DailyMissionTypeEnum.Kill20EnemyInOne) {
                if (this.GetHasFinishByMissiomType(missionType) && !this.GetHasClaimByMissiomType(missionType)) {
                    DailyMissionMgr.Instance.OnClaim_Kill20EnemyInOne();
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(50, CurrencyTypeEnum.BlueDiamond));
                }
                if (isAgainClaim) {
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(50, CurrencyTypeEnum.BlueDiamond));
                }
            } else if (missionType == DailyMissionTypeEnum.Play2BattleMatch) {
                if (this.GetHasFinishByMissiomType(missionType) && !this.GetHasClaimByMissiomType(missionType)) {
                    DailyMissionMgr.Instance.OnClaim_Play2BattleMatch();
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(20, CurrencyTypeEnum.RedDiamond));
                }
                if (isAgainClaim) {
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(20, CurrencyTypeEnum.RedDiamond));
                }
            } else if (missionType == DailyMissionTypeEnum.Play2ZombieMatch) {
                if (this.GetHasFinishByMissiomType(missionType) && !this.GetHasClaimByMissiomType(missionType)) {
                    DailyMissionMgr.Instance.OnClaim_Play2ZombieMatch();
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(350, CurrencyTypeEnum.Gold));
                }
                if (isAgainClaim) {
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(350, CurrencyTypeEnum.Gold));
                }
            } else if (missionType == DailyMissionTypeEnum.Take10HeadShot) {
                if (this.GetHasFinishByMissiomType(missionType) && !this.GetHasClaimByMissiomType(missionType)) {
                    DailyMissionMgr.Instance.OnClaim_Take10HeadShot();
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(30, CurrencyTypeEnum.BlueDiamond));
                }
                if (isAgainClaim) {
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(30, CurrencyTypeEnum.BlueDiamond));
                }
            } else if (missionType == DailyMissionTypeEnum.TotalKill100Enemy) {
                if (this.GetHasFinishByMissiomType(missionType) && !this.GetHasClaimByMissiomType(missionType)) {
                    DailyMissionMgr.Instance.OnClaim_TotalKill100Enemy();
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(200, CurrencyTypeEnum.Gold));
                }
                if (isAgainClaim) {
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(200, CurrencyTypeEnum.Gold));
                }
            } else if (missionType == DailyMissionTypeEnum.TotalKill100Zombie) {
                if (this.GetHasFinishByMissiomType(missionType) && !this.GetHasClaimByMissiomType(missionType)) {
                    DailyMissionMgr.Instance.OnClaim_TotalKill100Zombie();
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(30, CurrencyTypeEnum.BlueDiamond));
                }
                if (isAgainClaim) {
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(30, CurrencyTypeEnum.BlueDiamond));
                }
            } else if (missionType == DailyMissionTypeEnum.UpdateOnceEquip) {
                if (this.GetHasFinishByMissiomType(missionType) && !this.GetHasClaimByMissiomType(missionType)) {
                    DailyMissionMgr.Instance.OnClaim_UpdateOnceEquip();
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(20, CurrencyTypeEnum.BlueDiamond));
                }
                if (isAgainClaim) {
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(20, CurrencyTypeEnum.BlueDiamond));
                }
            } else if (missionType == DailyMissionTypeEnum.Win5BattleMatch) {
                if (this.GetHasFinishByMissiomType(missionType) && !this.GetHasClaimByMissiomType(missionType)) {
                    DailyMissionMgr.Instance.OnClaim_Win5BattleMatch();
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(200, CurrencyTypeEnum.Gold));
                }
                if (isAgainClaim) {
                    Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(200, CurrencyTypeEnum.Gold));
                }
            }
            this.RefreshMissionList();
            Dispatcher.Event(EventType.OnPlayerClaimMissionAward);
            this.RefreshClaimAgainBtnState();
        }
        GetHasClaimByMissiomType(missionType) {
            if (missionType == DailyMissionTypeEnum.Kill20EnemyInOne) {
                return DailyMissionMgr.Instance.CheckHasClaim_Kill20EnemyInOne();
            } else if (missionType == DailyMissionTypeEnum.Play2BattleMatch) {
                return DailyMissionMgr.Instance.CheckHasClaim_Play2BattleMatch();
            } else if (missionType == DailyMissionTypeEnum.Play2ZombieMatch) {
                return DailyMissionMgr.Instance.CheckHasClaim_Play2ZombieMatch();
            } else if (missionType == DailyMissionTypeEnum.Take10HeadShot) {
                return DailyMissionMgr.Instance.CheckHasClaim_Take10HeadShot();
            } else if (missionType == DailyMissionTypeEnum.TotalKill100Enemy) {
                return DailyMissionMgr.Instance.CheckHasClaim_TotalKill100Enemy();
            } else if (missionType == DailyMissionTypeEnum.TotalKill100Zombie) {
                return DailyMissionMgr.Instance.CheckHasClaim_TotalKill100Zombie();
            } else if (missionType == DailyMissionTypeEnum.UpdateOnceEquip) {
                return DailyMissionMgr.Instance.CheckHasClaim_UpdateOnceEquip();
            } else if (missionType == DailyMissionTypeEnum.Win5BattleMatch) {
                return DailyMissionMgr.Instance.CheckHasClaim_Win5BattleMatch();
            }
        }
        GetHasFinishByMissiomType(missionType) {
            if (missionType == DailyMissionTypeEnum.Kill20EnemyInOne) {
                return DailyMissionMgr.Instance.CheackFinish_Kill20EnemyInOne();
            } else if (missionType == DailyMissionTypeEnum.Play2BattleMatch) {
                return DailyMissionMgr.Instance.CheackFinish_Play2BattleMatch();
            } else if (missionType == DailyMissionTypeEnum.Play2ZombieMatch) {
                return DailyMissionMgr.Instance.CheackFinish_Play2ZombieMatch();
            } else if (missionType == DailyMissionTypeEnum.Take10HeadShot) {
                return DailyMissionMgr.Instance.CheackFinish_Take10HeadShot();
            } else if (missionType == DailyMissionTypeEnum.TotalKill100Enemy) {
                return DailyMissionMgr.Instance.CheackFinish_TotalKill100Enemy();
            } else if (missionType == DailyMissionTypeEnum.TotalKill100Zombie) {
                return DailyMissionMgr.Instance.CheackFinish_TotalKill100Zombie();
            } else if (missionType == DailyMissionTypeEnum.UpdateOnceEquip) {
                return DailyMissionMgr.Instance.CheackFinish_UpdateOnceEquip();
            } else if (missionType == DailyMissionTypeEnum.Win5BattleMatch) {
                return DailyMissionMgr.Instance.CheackFinish_Win5BattleMatch();
            }
        }
        RefBtnForMissionToMap() {
            let localSaveMissionArray = DailyMissionMgr.Instance.GetLocalSave5Mission();
            let btnsArray = [this.GetBtn("btnCliam1"), this.GetBtn("btnCliam2"), this.GetBtn("btnCliam3"), this.GetBtn("btnCliam4"), this.GetBtn("btnCliam5")];
            for (let i = 0; i < localSaveMissionArray.length; i++) {
                this.missionRefBtnMap.set(localSaveMissionArray[i], btnsArray[i]);
            }
        }
        RefreshMissionList() {
            let localSaveMissionArray = DailyMissionMgr.Instance.GetLocalSave5Mission();
            let missionUIRoot = this.GetImg("imgMissionsRoot");
            for (let i = 0; i < localSaveMissionArray.length; i++) {
                this.InitSingleMissionUI(localSaveMissionArray[i], missionUIRoot.getChildAt(i));
            }
        }
        SetSingleClaimStateUI(missionType, _imgHasFinishBg, _imgHasFinishIcon, hasClaimPath, canClaimPath, unReachStatePath) {
            if (this.GetHasFinishByMissiomType(missionType) == true) {
                _imgHasFinishBg.visible = true;
                _imgHasFinishIcon.visible = true;
                this.missionRefBtnMap.get(missionType).skin = this.GetHasClaimByMissiomType(missionType) == true ? hasClaimPath : canClaimPath;
            } else {
                _imgHasFinishBg.visible = false;
                _imgHasFinishIcon.visible = false;
                this.missionRefBtnMap.get(missionType).skin = unReachStatePath;
            }
        }
        InitSingleMissionUI(missionIdx, uiBg) {
            let _imgMissionBg = uiBg;
            let _imgHasFinishBg = uiBg.getChildByName("_imgHasFinishBg");
            let _imgHasFinishIcon = uiBg.getChildByName("_imgHasFinishIcon");
            let _imgAwardIcon = uiBg.getChildByName("_imgAwardIcon");
            let _imgProgressBar = uiBg.getChildByName("_imgProgressBg").getChildByName("_imgProgressBar");
            let _txtMissionDesc = uiBg.getChildByName("_txtMissionDesc");
            let _txtCount = uiBg.getChildByName("_txtCount");
            let _txtProgress = uiBg.getChildByName("_imgProgressBg").getChildByName("_txtProgress");
            let desc = "";
            let awardIconPath = "";
            let awardCount = 0;
            let unReachStatePath = "DailyMissionPanel/mission_btn_wdc.png";
            let canClaimPath = "DailyMissionPanel/mission_btn_get.png";
            let hasClaimPath = "DailyMissionPanel/mission_btn_got.png";
            let goldIconPath = "General/settlement_pic_money1.png";
            let blueDiamondIconPath = "General/settlement_pic_money2.png";
            let redDiamondIconPath = "General/settlement_pic_money3.png";
            if (missionIdx == DailyMissionTypeEnum.TotalKill100Enemy) {
                desc = "累计击败100名敌军";
                awardCount = 200;
                awardIconPath = "General/settlement_pic_money1.png";
                this.SetSingleClaimStateUI(DailyMissionTypeEnum.TotalKill100Enemy, _imgHasFinishBg, _imgHasFinishIcon, hasClaimPath, canClaimPath, unReachStatePath);
                let killCount = DataTool.GetInt(DailyMissionMgr.Instance.TotalKill100Enemy_Key);
                killCount = killCount >= 100 ? 100 : killCount;
                _txtProgress.text = killCount + "/100";
                _imgProgressBar.width = 330 * killCount / 100;
            } else if (missionIdx == DailyMissionTypeEnum.Kill20EnemyInOne) {
                desc = "在一场战斗中击败20名敌军";
                awardCount = 50;
                awardIconPath = goldIconPath;
                this.SetSingleClaimStateUI(DailyMissionTypeEnum.Kill20EnemyInOne, _imgHasFinishBg, _imgHasFinishIcon, hasClaimPath, canClaimPath, unReachStatePath);
                _txtProgress.text = DailyMissionMgr.Instance.CheckHasClaim_Kill20EnemyInOne() == true ? "1/1" : "0/1";
                _imgProgressBar.width = DailyMissionMgr.Instance.CheckHasClaim_Kill20EnemyInOne() == true ? 330 : 0;
            } else if (missionIdx == DailyMissionTypeEnum.Play2BattleMatch) {
                desc = "进行2场经典战役的游戏";
                awardCount = 20;
                awardIconPath = redDiamondIconPath;
                this.SetSingleClaimStateUI(DailyMissionTypeEnum.Play2BattleMatch, _imgHasFinishBg, _imgHasFinishIcon, hasClaimPath, canClaimPath, unReachStatePath);
                let round = DataTool.GetInt(DailyMissionMgr.Instance.Play2BattleMatch_Key);
                round = round >= 2 ? 2 : round;
                _txtProgress.text = round + "/2";
                _imgProgressBar.width = 330 * round / 2;
            } else if (missionIdx == DailyMissionTypeEnum.Play2ZombieMatch) {
                desc = "进行2生化模式的游戏";
                awardCount = 350;
                awardIconPath = goldIconPath;
                this.SetSingleClaimStateUI(DailyMissionTypeEnum.Play2ZombieMatch, _imgHasFinishBg, _imgHasFinishIcon, hasClaimPath, canClaimPath, unReachStatePath);
                let round = DataTool.GetInt(DailyMissionMgr.Instance.Play2ZombieMatch_Key);
                round = round >= 2 ? 2 : round;
                _txtProgress.text = round + "/2";
                _imgProgressBar.width = 330 * round / 2;
            } else if (missionIdx == DailyMissionTypeEnum.Win5BattleMatch) {
                desc = "取得5次战役胜利";
                awardCount = 200;
                awardIconPath = goldIconPath;
                this.SetSingleClaimStateUI(DailyMissionTypeEnum.Win5BattleMatch, _imgHasFinishBg, _imgHasFinishIcon, hasClaimPath, canClaimPath, unReachStatePath);
                let winTimes = DataTool.GetInt(DailyMissionMgr.Instance.Win5BattleMatch_Key);
                winTimes = winTimes >= 5 ? 5 : winTimes;
                _txtProgress.text = winTimes + "/5";
                _imgProgressBar.width = 330 * winTimes / 5;
            } else if (missionIdx == DailyMissionTypeEnum.TotalKill100Zombie) {
                desc = "累计击败100个僵尸";
                awardCount = 30;
                awardIconPath = blueDiamondIconPath;
                this.SetSingleClaimStateUI(DailyMissionTypeEnum.TotalKill100Zombie, _imgHasFinishBg, _imgHasFinishIcon, hasClaimPath, canClaimPath, unReachStatePath);
                let killCount = DataTool.GetInt(DailyMissionMgr.Instance.TotalKill100Zombie_Key);
                killCount = killCount >= 100 ? 100 : killCount;
                _txtProgress.text = killCount + "/100";
                _imgProgressBar.width = 330 * killCount / 100;
            } else if (missionIdx == DailyMissionTypeEnum.UpdateOnceEquip) {
                desc = "升级一次武器";
                awardCount = 20;
                awardIconPath = blueDiamondIconPath;
                this.SetSingleClaimStateUI(DailyMissionTypeEnum.UpdateOnceEquip, _imgHasFinishBg, _imgHasFinishIcon, hasClaimPath, canClaimPath, unReachStatePath);
                _txtProgress.text = DailyMissionMgr.Instance.CheckHasClaim_UpdateOnceEquip() == true ? "1/1" : "0/1";
                _imgProgressBar.width = DailyMissionMgr.Instance.CheckHasClaim_UpdateOnceEquip() == true ? 330 : 0;
            } else if (missionIdx == DailyMissionTypeEnum.Take10HeadShot) {
                desc = "击中头部10次";
                awardCount = 30;
                awardIconPath = redDiamondIconPath;
                this.SetSingleClaimStateUI(DailyMissionTypeEnum.Take10HeadShot, _imgHasFinishBg, _imgHasFinishIcon, hasClaimPath, canClaimPath, unReachStatePath);
                let shot = DataTool.GetInt(DailyMissionMgr.Instance.Take10HeadShot_Key);
                shot = shot >= 10 ? 10 : shot;
                _txtProgress.text = shot + "/10";
                _imgProgressBar.width = 330 * shot / 10;
            }
            _txtMissionDesc.text = desc;
            _txtCount.text = "+" + awardCount;
            _imgAwardIcon.skin = awardIconPath;
        }
    }
    class ExchangeItemPanel extends UIBase {
        constructor() {
            super();
        }
        onAwake() {
            this.SetAllUINodesDic();
            Laya.Tween.from(this.GetImg("imgMid"), {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backOut);
        }
        onStart() {
            this.AddBtnEventScaleFx("btnClose", () => {
                this.CloseUI();
            });
            this.AddBtnEventScaleFx("btnExchange", () => {
                console.log(this.GetTextInput("tiCode").text);
            });
        }
    }
    class RankInfoPanel extends UIBase {
        constructor() {
            super();
            this.perLvNeedKill = 50;
            this.baseAwardsCountArray = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 400, 400, 400, 400];
            this.advAward1NameArray = [Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_SmgUzi, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_SgSpas12, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_HpBox, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_SniperM24, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_None, Std.WeaponName_LMG];
            this.advAward2CountArray = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 200, 200, 200, 200];
            this.advAward3CountArray = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 100, 100, 100, 100];
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.GetNeed();
            this.InitOther();
            this.RefreshPlayerRankUI();
            this.InitList();
            this.InitGuide();
        }
        onStart() {
            this.AddBtnEventScaleFx("btnBack", () => {
                Dispatcher.Event(EventType.OnCloseOtherCurrencyPanelInMenuSc);
                this.CloseUI();
            });
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
        }
        GetNeed() {
            this.listRankAwards = this.GetList("listRankAwards");
        }
        InitList() {
            this.listRankAwards.hScrollBarSkin = "";
            this.listRankAwards.renderHandler = new Laya.Handler(this, this.OnRender);
            this.AddListElements();
        }
        OnRender(cell, index) {
            let btnNormalClaim = cell.getChildByName("ClaimBasebtn");
            let btnAdClaimAll = cell.getChildByName("ClaimAllAdbtn");
            let advAwardIcon1 = cell.getChildByName("advAwardIcon1");
            let advAwardIcon2 = cell.getChildByName("advAwardIcon2");
            let advAwardIcon3 = cell.getChildByName("advAwardIcon3");
            let hasClaimTip = cell.getChildByName("hasClaimTip");
            let bottomRankIcon = cell.getChildByName("rankIconBottomBg").getChildByName("bottomRankIcon");
            let baseAwardCount = cell.getChildByName("baseAwardCount");
            let advAwardCount2 = cell.getChildByName("advAwardCount2");
            let advAwardCount3 = cell.getChildByName("advAwardCount3");
            if (index == 4 || index == 9 || index == 14 || index == 19 || index == 23) {
                advAwardIcon1.skin = WeaponInfoMgr.Instance.GetWeaponIconByName(this.advAward1NameArray[index]);
                advAwardIcon1.visible = true;
                advAwardCount2.visible = false;
                advAwardCount3.visible = false;
                advAwardIcon2.visible = false;
                advAwardIcon3.visible = false;
            } else {
                advAwardIcon1.visible = false;
                advAwardCount2.visible = true;
                advAwardCount3.visible = true;
                advAwardIcon2.visible = true;
                advAwardIcon3.visible = true;
            }
            baseAwardCount.text = "+" + this.baseAwardsCountArray[index];
            advAwardCount2.text = "+" + this.advAward2CountArray[index];
            advAwardCount3.text = "+" + this.advAward3CountArray[index];
            bottomRankIcon.skin = "Rank/rank" + (index + 1) + ".png";
            btnAdClaimAll.visible = btnNormalClaim.visible = this.GetPlayerRank() >= index + 1;
            hasClaimTip.visible = DataTool.GetInt(this.GetNormalClaimKey(index + 1)) == 1 ? true : false;
            btnNormalClaim.skin = DataTool.GetInt(this.GetNormalClaimKey(index + 1)) == 1 ? "Rank/rank_btn_ylq.png" : "Rank/rank_btn_lq.png";
            btnAdClaimAll.skin = DataTool.GetInt(this.GetAdvClaimKey(index + 1)) == 1 ? "Rank/rank_btn_ylq.png" : "Rank/rank_btn_3b.png";
            if (btnNormalClaim.hasListener(Laya.Event.CLICK)) {
                btnNormalClaim.offAll();
                btnNormalClaim.on(Laya.Event.CLICK, this, () => {
                    if (DataTool.GetInt(this.GetNormalClaimKey(index + 1)) == 1) {
                        return;
                    }
                    this.ClaimBaseAward(index);
                });
            }
            if (btnAdClaimAll.hasListener(Laya.Event.CLICK)) {
                btnAdClaimAll.offAll();
                btnAdClaimAll.on(Laya.Event.CLICK, this, () => {
                    if (DataTool.GetInt(this.GetAdvClaimKey(index + 1)) == 1) {
                        return;
                    }
                    this.ClaimAdvAward(index);
                });
            }
        }
        GetNormalClaimKey(rankIndex) {
            return "ClaimNoramlRankAward" + rankIndex;
        }
        GetAdvClaimKey(rankIndex) {
            return "ClaimAdvRankAward" + rankIndex;
        }
        ClaimBaseAward(index) {
            DataTool.SetKv(this.GetNormalClaimKey(index + 1), 1);
            Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.baseAwardsCountArray[index], CurrencyTypeEnum.Gold));
            this.listRankAwards.refresh();
            Dispatcher.Event(EventType.OnPlayerClaimRankAward);
        }
        ClaimAdvAward(index) {
            CountSdkMgr.Instance.TrackEvent("videStart3", this.GetPlayerRank() + "");
            SdkManager.Instance.ShowVideoAd(() => {
                if (DataTool.GetInt(this.GetNormalClaimKey(index + 1)) == 0) {
                    this.ClaimBaseAward(index);
                }
                DataTool.SetKv(this.GetAdvClaimKey(index + 1), 1);
                this.listRankAwards.refresh();
                if (index == 4 || index == 9 || index == 14 || index == 19 || index == 23) {
                    DataTool.SetKv(WeaponInfoMgr.Instance.GetWatchAdUnlockLocalKey(this.advAward1NameArray[index]), WeaponInfoMgr.Instance.GetUnlockWeaponWatchAdCount(this.advAward1NameArray[index]));
                    PopMsgTool.ShowGetItemPanel(0, ItemGetTypeEnum.Weapon, () => { }, this.advAward1NameArray[index]);
                } else {
                    Laya.timer.once(250, this, () => {
                        Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.advAward2CountArray[index], CurrencyTypeEnum.BlueDiamond));
                    });
                    Laya.timer.once(500, this, () => {
                        Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.advAward3CountArray[index], CurrencyTypeEnum.RedDiamond));
                    });
                }
                Dispatcher.Event(EventType.OnPlayerClaimRankAward);
                CountSdkMgr.Instance.TrackEvent("videComplete3", this.GetPlayerRank() + "");
            });
        }
        AddListElements() {
            let data = [];
            this.listRankAwards.repeatX = this.baseAwardsCountArray.length;
            this.listRankAwards.repeatY = 1;
            let counts = this.listRankAwards.repeatX * this.listRankAwards.repeatY;
            for (let i = 0; i < counts; i++) {
                let tempData = {};
                data.push(tempData);
            }
            this.listRankAwards.array = data;
        }
        InitGuide() {
            if (DataTool.GetInt(Std.Guide_HasLearn_RankInfo) == 0) {
                CountSdkMgr.Instance.TrackEvent("guide6");
                GuideMgr.Instance.InitDataAndShowGuide([{
                    x: 170,
                    y: 500,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: 290,
                    tipy: 410,
                    tipStr: "荣誉等级可以通过击败敌军来获取，每50次击败可以提升一级！"
                }], () => {
                    DataTool.SetKv(Std.Guide_HasLearn_RankInfo, 1);
                });
            }
        }
        GetPlayerRank() {
            let playerRank = 1 + Math.floor(DataTool.GetInt(Std.Kill_PlayerKillEnemyCountKey) / this.perLvNeedKill);
            return playerRank >= 24 ? 24 : playerRank;
        }
        GetPlayerClaimRankCount() {
            let count = DataTool.GetInt(Std.Local_HasClaimRankAwardTimesKey);
            return count >= 24 ? 24 : count;
        }
        RefreshPlayerRankUI() {
            let rank = this.GetPlayerRank();
            this.SetText("txtCurRank", "荣誉" + rank + "级");
            this.SetImgSkin("imgRankIocn", "Rank/rank" + rank + ".png");
        }
        InitOther() {
            UIMgr.Instance.OpenUI(CurrencyDataPanel, () => { }, this.GetImg("imgCurrencyBg"));
            Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
            Laya.Tween.from(this.GetImg("imgLeftItem"), {
                left: -500
            }, 250, Laya.Ease.linearNone);
        }
    }
    class SignPanel extends UIBase {
        constructor() {
            super();
            this.VIPArrayKey = ["HasAdvSign1", "HasAdvSign2", "HasAdvSign3", "HasAdvSign4", "HasAdvSign5", "HasAdvSign6", "HasAdvSign7"];
            this.hasSignTimes = 0;
            this.WeekToDay = 0;
            this.isSignVIP = 0;
            this.isSign = false;
            this.isHaoHua = 0;
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.GetNeed();
            this.InitSignList();
            this.AddBtnEvents();
            Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
            UIMgr.Instance.OpenUI(CurrencyDataPanel, () => { }, this.GetImg("imgCurrecyBg"));
        }
        onDestroy() { }
        GetNeed() {
            this.listSign = this.GetList("listSign");
        }
        AddBtnEvents() {
            this.AddBtnEventScaleFx("btnClose", () => {
                Dispatcher.Event(EventType.OnCloseOtherCurrencyPanelInMenuSc);
                this.CloseUI();
            });
        }
        InitSignList() {
            this.hasSignTimes = DataTool.GetInt(Std.Sign_HasSignTimesKey, 0);
            this.WeekToDay = DataTool.GetInt(Std.Sign_IsSignTodayKey, 0);
            this.isSignVIP = DataTool.GetInt(Std.Sign_IsSignVIPKey, 0);
            this.isHaoHua = DataTool.GetInt(Std.Sign_IsHaoHua, 0);
            this.isSign = !GameTimeMgr.Instance.IsSameDay(DataTool.GetInt(Std.Sign_LastSignTimeStampKey), GameTimeMgr.Instance.GetNowDateTime());
            if (this.isSign) {
                this.WeekToDay = this.hasSignTimes == 0 ? 0 : this.hasSignTimes;
                this.isSignVIP = 0;
                for (let i = 0; i < 7; i++) {
                    DataTool.SetKv(this.VIPArrayKey[i], 0);
                }
            }
            if (this.hasSignTimes == 0 && this.WeekToDay == 6) {
                this.isHaoHua = DataTool.GetInt(Std.Sign_IsHaoHua, 0);
                this.isHaoHua = this.isSign ? DataTool.GetInt(Std.Sign_IsHaoHua, 0) : this.isHaoHua = 1;
            }
            let data = [];
            for (let i = 0; i < 7; i++) {
                let tempData = {};
                data.push(tempData);
            }
            this.listSign.array = data;
            this.listSign.hScrollBarSkin = "";
            this.listSign.renderHandler = new Laya.Handler(this, this.OnRender);
            Laya.timer.once(100, this, () => {
                this.listSign.tweenTo(this.WeekToDay, this.WeekToDay * 500);
            });
        }
        OnRender(cell, index) {
            let singleSignBg = cell;
            let titleImg = singleSignBg.getChildByName("titleImg");
            let hasClaimTip = singleSignBg.getChildByName("hasClaimTip");
            let baseTitle = singleSignBg.getChildByName("baseTitle");
            let advTitle = singleSignBg.getChildByName("advTitle");
            let btnNormalSign = singleSignBg.getChildByName("btnNormalSign");
            let btn_nextDay = singleSignBg.getChildByName("btn_nextDay");
            let normalAwardCount = singleSignBg.getChildByName("normalAwardCount");
            let advAwardCount1 = singleSignBg.getChildByName("advAwardCount1");
            let advAwardCount2 = singleSignBg.getChildByName("advAwardCount2");
            titleImg.skin = SignData[index].daySkin;
            singleSignBg.skin = SignData[index].bgSkin;
            baseTitle.skin = SignData[index].baseSkin;
            advTitle.skin = SignData[index].VIPSkin;
            normalAwardCount.text = "+" + SignData[index].NormalAward;
            advAwardCount1.text = "+" + SignData[index].bludAward;
            advAwardCount2.text = "+" + SignData[index].redAward;
            let isVip = DataTool.GetInt(this.VIPArrayKey[index]);
            if (index < this.WeekToDay) {
                btnNormalSign.skin = "Sign/7days_btn_yqd.png";
                btnNormalSign.disabled = true;
                btn_nextDay.skin = "Sign/7days_btn_yqd.png";
                btn_nextDay.disabled = true;
                hasClaimTip.visible = true;
            } else if (index == this.WeekToDay) {
                btnNormalSign.skin = !this.isSign ? "Sign/7days_btn_yqd.png" : "Sign/7days_btn_qd.png";
                btnNormalSign.disabled = !this.isSign;
                hasClaimTip.visible = !this.isSign;
                btn_nextDay.skin = this.isHaoHua == 0 ? "Sign/7days_btn_hhqd.png" : this.isSignVIP == 0 ? "Sign/7days_btn_hhlq2.png" : "Sign/7days_btn_ylq.png";
                btn_nextDay.disabled = this.isHaoHua == 1 && this.isSignVIP == 1;
            } else {
                btnNormalSign.skin = "Sign/7days_btn_wks.png";
                btnNormalSign.disabled = true;
                btn_nextDay.skin = isVip == 0 ? "Sign/7days_btn_tqlq.png" : "Sign/7days_btn_ylq.png";
                hasClaimTip.visible = false;
            }
            if (btnNormalSign.hasListener(Laya.Event.CLICK)) {
                btnNormalSign.offAll();
                btnNormalSign.on(Laya.Event.CLICK, this, () => {
                    this.SaveNormalSign(index);
                });
            }
            if (btn_nextDay.hasListener(Laya.Event.CLICK)) {
                btn_nextDay.offAll();
                btn_nextDay.on(Laya.Event.CLICK, this, () => {
                    if (index == this.WeekToDay) {
                        if (this.isHaoHua == 0) {
                            SdkManager.Instance.ShowVideoAd(() => {
                                DataTool.SetKv(Std.Sign_IsHaoHua, 1);
                                this.isHaoHua = 1;
                            });
                        } else {
                            this.isSignVIP = 1;
                            DataTool.GetInt(Std.Sign_IsSignVIPKey, 1);
                            this.listSign.refresh();
                            this.GiveVIPAward(index);
                        }
                    } else {
                        this.TQLQAward(index);
                    }
                });
            }
        }
        SaveNormalSign(index) {
            if (this.isSign) {
                DataTool.SetKv(Std.Sign_IsSignTodayKey, this.hasSignTimes);
                this.hasSignTimes += 1;
                if (this.hasSignTimes >= 7) {
                    this.hasSignTimes = 0;
                    this.isHaoHua = 0;
                    DataTool.SetKv(Std.Sign_IsHaoHua, 0);
                }
                DataTool.SetKv(Std.Sign_HasSignTimesKey, this.hasSignTimes);
                DataTool.SetKv(Std.Sign_LastSignTimeStampKey, GameTimeMgr.Instance.GetNowDateTime());
                this.isSign = false;
                Dispatcher.Event(EventType.OnPlayerSignToday);
                this.GiveAward(index);
                this.listSign.refresh();
            }
        }
        TQLQAward(index) {
            CountSdkMgr.Instance.TrackEvent("videStart2");
            SdkManager.Instance.ShowVideoAd(() => {
                DataTool.SetKv(this.VIPArrayKey[index], 1);
                this.GiveAward(index);
                this.GiveVIPAward(index);
                CountSdkMgr.Instance.TrackEvent("videComplete2");
                this.listSign.refresh();
            });
        }
        GiveAward(index) {
            Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(SignData[index].NormalAward, CurrencyTypeEnum.Gold));
        }
        GiveVIPAward(index) {
            if (this.isHaoHua == 0) return;
            Laya.timer.once(200, this, () => {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(SignData[index].bludAward, CurrencyTypeEnum.BlueDiamond));
            });
            Laya.timer.once(400, this, () => {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(SignData[index].redAward, CurrencyTypeEnum.RedDiamond));
            });
        }
    }
    let SignData = [{
        NormalAward: 200,
        bludAward: 50,
        redAward: 50,
        daySkin: "Sign/7days_pic_day1.png",
        bgSkin: "Sign/7days_pic_bg1.png",
        baseSkin: "Sign/7days_pic_txtjcjl.png",
        VIPSkin: "Sign/7days_pic_txthhjl.png"
    }, {
        NormalAward: 500,
        bludAward: 100,
        redAward: 100,
        daySkin: "Sign/7days_pic_day2.png",
        bgSkin: "Sign/7days_pic_bg2.png",
        baseSkin: "Sign/7days_pic_txtjcjl2.png",
        VIPSkin: "Sign/7days_pic_txthhjl2.png"
    }, {
        NormalAward: 300,
        bludAward: 80,
        redAward: 80,
        daySkin: "Sign/7days_pic_day3.png",
        bgSkin: "Sign/7days_pic_bg1.png",
        baseSkin: "Sign/7days_pic_txtjcjl.png",
        VIPSkin: "Sign/7days_pic_txthhjl.png"
    }, {
        NormalAward: 400,
        bludAward: 90,
        redAward: 90,
        daySkin: "Sign/7days_pic_day4.png",
        bgSkin: "Sign/7days_pic_bg2.png",
        baseSkin: "Sign/7days_pic_txtjcjl2.png",
        VIPSkin: "Sign/7days_pic_txthhjl2.png"
    }, {
        NormalAward: 1e3,
        bludAward: 200,
        redAward: 200,
        daySkin: "Sign/7days_pic_day5.png",
        bgSkin: "Sign/7days_pic_bg1.png",
        baseSkin: "Sign/7days_pic_txtjcjl.png",
        VIPSkin: "Sign/7days_pic_txthhjl.png"
    }, {
        NormalAward: 600,
        bludAward: 120,
        redAward: 120,
        daySkin: "Sign/7days_pic_day6.png",
        bgSkin: "Sign/7days_pic_bg2.png",
        baseSkin: "Sign/7days_pic_txtjcjl.png",
        VIPSkin: "Sign/7days_pic_txthhjl.png"
    }, {
        NormalAward: 1500,
        bludAward: 300,
        redAward: 300,
        daySkin: "Sign/7days_pic_day7.png",
        bgSkin: "Sign/7days_pic_bg1.png",
        baseSkin: "Sign/7days_pic_txtjcjl2.png",
        VIPSkin: "Sign/7days_pic_txthhjl2.png"
    }];
    class SpinDrawPanel extends UIBase {
        constructor() {
            super();
            this.award1Count = 100;
            this.award3Count = 30;
            this.award4Count = 200;
            this.award5Count = 30;
            this.award6Count = 50;
            this.isDrawing = false;
            this.isStartReduceSpeed = false;
            this.maxRotSpeed = 600;
            this.rotSpeed = 600;
            this.reduceSpeed = 150;
            this.tempMaxRotSpeed = 600;
            this.lastStartCountFreeDrawTime = 0;
            this.TimeaToBigAward = 0;
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.Init();
            this.GetNeed();
        }
        onStart() {
            this.AddBtnEvents();
            Laya.Tween.from(this.GetImg("imgMid"), {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backOut);
            Laya.timer.once(1e3, this, this.btnSpinDrawShow);
            SdkManager.Instance.ShowCustomAd("1", {
                left: 40 * Std.UI_ad_cTopx,
                top: 80 * Std.UI_ad_cTopx,
                width: 72
            });
            SdkManager.Instance.ShowCustomAd("2", {
                left: Laya.Browser.clientWidth - 72,
                top: 100,
                width: 72
            });
        }
        onDestroy() {
            if (this.drawSoundCn) {
                this.drawSoundCn.stop();
                this.drawSoundCn = null;
            }
            Tool.ClearTimerAndTween(this);
        }
        onUpdate() {
            this.UpdateSpinRot();
            this.UpdateRecoverTimer();
        }
        Init() {
            this.lastStartCountFreeDrawTime = GameTimeMgr.Instance.GetSpinDrawReturnTime();
            this.SetText("txtRecoverTime", Tool.FormatNumberToTime(this.lastStartCountFreeDrawTime, true));
            let leftDrawCount = GameTimeMgr.Instance.GetSpinDarwAll();
            this.SetText("txtLetfDtawTimes", leftDrawCount + "");
            this.TimeaToBigAward = DataTool.GetInt(Std.FrreDraw_LocalSaveBigAwardProtectKey);
            for (let i = 1; i < 6; i++) {
                this.GetImg(`img_item${i}`).skin = 5 - this.TimeaToBigAward >= i ? "SpinDraw/img_item1.png" : "SpinDraw/img_item0.png";
            }
        }
        UpdateRecoverTimer() {
            this.lastStartCountFreeDrawTime = GameTimeMgr.Instance.GetSpinDrawReturnTime();
            this.SetText("txtRecoverTime", Tool.FormatNumberToTime(this.lastStartCountFreeDrawTime, true));
            this.SetText("txtLetfDtawTimes", GameTimeMgr.Instance.GetSpinDarwAll() + "");
        }
        UpdateSpinRot() {
            if (!this.isDrawing) {
                return;
            }
            if (this.isStartReduceSpeed) {
                this.rotSpeed -= this.reduceSpeed * Tool.DeltaTime();
                if (this.rotSpeed <= 0) {
                    this.rotSpeed = 0;
                    this.isStartReduceSpeed = false;
                    this.isDrawing = false;
                    if (this.drawSoundCn) {
                        this.drawSoundCn.stop();
                        this.drawSoundCn = null;
                    }
                    this.ShowAward(this.rotImg.rotation);
                }
                if (this.drawSoundCn) {
                    if (this.tempMaxRotSpeed < this.rotSpeed) {
                        this.tempMaxRotSpeed = this.rotSpeed;
                    }
                    let v = this.rotSpeed / this.tempMaxRotSpeed;
                    if (v <= 0) v = 0;
                    if (v >= 1) v = 1;
                    this.drawSoundCn.volume = v;
                }
            }
            this.rotImg.rotation += Math.ceil(Tool.DeltaTime() * this.rotSpeed);
            if (this.rotImg.rotation >= 360) {
                this.rotImg.rotation = 0;
            }
        }
        GetNeed() {
            this.rotImg = this.GetImg("imgRotRound");
            this.img_btnDraw = this.GetImg("img_btnDraw");
        }
        btnSpinDrawShow() {
            Laya.Tween.to(this.img_btnDraw, {
                width: 590,
                height: 590
            }, 400, Laya.Ease.circOut, new Laya.Handler(this, () => {
                Laya.Tween.to(this.img_btnDraw, {
                    width: 430,
                    height: 430
                }, 500, Laya.Ease.circIn, new Laya.Handler(this, () => {
                    Laya.Tween.to(this.img_btnDraw, {
                        width: 590,
                        height: 590
                    }, 400, Laya.Ease.circOut, new Laya.Handler(this, () => {
                        Laya.Tween.to(this.img_btnDraw, {
                            width: 430,
                            height: 430
                        }, 500, Laya.Ease.circIn, new Laya.Handler(this, () => {
                            Laya.Tween.to(this.img_btnDraw, {
                                width: 590,
                                height: 590
                            }, 400, Laya.Ease.circOut, new Laya.Handler(this, () => {
                                Laya.Tween.to(this.img_btnDraw, {
                                    width: 430,
                                    height: 430
                                }, 500, Laya.Ease.circIn, new Laya.Handler(this, () => {
                                    Laya.Tween.to(this.img_btnDraw, {
                                        width: 590,
                                        height: 590
                                    }, 400, Laya.Ease.circOut, new Laya.Handler(this, () => {
                                        Laya.Tween.to(this.img_btnDraw, {
                                            width: 510,
                                            height: 510
                                        }, 250, Laya.Ease.circIn);
                                    }));
                                }));
                            }));
                        }));
                    }));
                }));
            }));
        }
        AddBtnEvents() {
            this.AddBtnEventScaleFx("btnClose", () => {
                this.CloseUI();
                SdkManager.Instance.HideCustomAd("1");
                SdkManager.Instance.HideCustomAd("2");
            });
            this.AddBtnEventScaleFx("btn_SpinDraw", () => {
                if (GameTimeMgr.Instance.GetSpinDarwAll() > 0) {
                    GameTimeMgr.Instance.UseSpinDarwAll(1);
                    this.DoDraw();
                    this.btnSpinDrawShow();
                } else {
                    PopMsgTool.ShowConfirmPanel("免费抽奖", "是否观看视频获得一次抽奖机会", () => {
                        CountSdkMgr.Instance.TrackEvent("videStart10");
                        SdkManager.Instance.ShowVideoAd(() => {
                            GameTimeMgr.Instance.VideoGetSpinDarwAll(1);
                            CountSdkMgr.Instance.TrackEvent("videComplete10");
                        });
                    }, () => { }, false);
                }
            });
            this.AddBtnEventScaleFx("btnDrawAd", () => {
                PopMsgTool.ShowConfirmPanel("免费抽奖", "是否观看视频获得一次抽奖机会", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart10");
                    SdkManager.Instance.ShowVideoAd(() => {
                        GameTimeMgr.Instance.VideoGetSpinDarwAll(1);
                        CountSdkMgr.Instance.TrackEvent("videComplete10");
                    });
                }, () => { }, false);
            });
        }
        DoDraw() {
            this.isDrawing = true;
            this.rotSpeed = this.maxRotSpeed + Tool.RandomInt(200);
            this.tempMaxRotSpeed = this.rotSpeed;
            if (!this.drawSoundCn) {
                this.drawSoundCn = Laya.SoundManager.playSound("res/Sounds/drawSd.mp3", 0);
            }
            Laya.timer.once(2e3, this, () => {
                this.isStartReduceSpeed = true;
            });
        }
        BigAward() {
            let allAwardsTypeArray = [ItemGetTypeEnum.Gold, ItemGetTypeEnum.BlueDiamond, ItemGetTypeEnum.RedDiamond];
            let randIdx = Tool.RandomInt(allAwardsTypeArray.length);
            let finalAward = allAwardsTypeArray[randIdx];
            if (finalAward == ItemGetTypeEnum.BlueDiamond) {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(150, CurrencyTypeEnum.BlueDiamond));
                PopMsgTool.ShowGetItemPanel(150, ItemGetTypeEnum.BlueDiamond);
            } else if (finalAward == ItemGetTypeEnum.Gold) {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(500, CurrencyTypeEnum.Gold));
                PopMsgTool.ShowGetItemPanel(500, ItemGetTypeEnum.Gold);
            } else if (finalAward == ItemGetTypeEnum.RedDiamond) {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(150, CurrencyTypeEnum.RedDiamond));
                PopMsgTool.ShowGetItemPanel(150, ItemGetTypeEnum.RedDiamond);
            }
            DataTool.ModifyInt(Std.Achieve_GetBigAwardDrawKey, 1);
        }
        ShowAward(rot) {
            Dispatcher.Event(EventType.OnPlayerDrawSpinAward);
            if (DataTool.GetInt(Std.FrreDraw_LocalSaveBigAwardProtectKey) > 0) {
                DataTool.ModifyInt(Std.FrreDraw_LocalSaveBigAwardProtectKey, -1);
            }
            this.TimeaToBigAward = DataTool.GetInt(Std.FrreDraw_LocalSaveBigAwardProtectKey);
            for (let i = 1; i < 6; i++) {
                this.GetImg(`img_item${i}`).skin = 5 - this.TimeaToBigAward >= i ? "SpinDraw/img_item1.png" : "SpinDraw/img_item0.png";
            }
            if (rot <= 32 || rot > 92) {
                if (DataTool.GetInt(Std.FrreDraw_LocalSaveBigAwardProtectKey) == 0) {
                    this.rotImg.rotation = 60;
                    DataTool.SetKv(Std.FrreDraw_LocalSaveBigAwardProtectKey, 5);
                    this.TimeaToBigAward = DataTool.GetInt(Std.FrreDraw_LocalSaveBigAwardProtectKey);
                    for (let i = 1; i < 6; i++) {
                        this.GetImg(`img_item${i}`).skin = 5 - this.TimeaToBigAward >= i ? "SpinDraw/img_item1.png" : "SpinDraw/img_item0.png";
                    }
                    this.BigAward();
                    return;
                }
            }
            if (rot >= 0 && rot <= 32) {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.award1Count, CurrencyTypeEnum.Gold));
                return;
            }
            if (rot > 331 && rot <= 360) {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.award1Count, CurrencyTypeEnum.Gold));
                return;
            }
            if (rot > 32 && rot <= 92) {
                this.BigAward();
                DataTool.SetKv(Std.FrreDraw_LocalSaveBigAwardProtectKey, 5);
                this.TimeaToBigAward = DataTool.GetInt(Std.FrreDraw_LocalSaveBigAwardProtectKey);
                for (let i = 1; i < 6; i++) {
                    this.GetImg(`img_item${i}`).skin = 5 - this.TimeaToBigAward >= i ? "SpinDraw/img_item1.png" : "SpinDraw/img_item0.png";
                }
                return;
            }
            if (rot > 92 && rot <= 150) {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.award3Count, CurrencyTypeEnum.BlueDiamond));
                return;
            }
            if (rot > 150 && rot <= 211) {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.award4Count, CurrencyTypeEnum.Gold));
                return;
            }
            if (rot > 211 && rot <= 271) {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.award5Count, CurrencyTypeEnum.RedDiamond));
                return;
            }
            if (rot > 270 && rot <= 331) {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.award6Count, CurrencyTypeEnum.BlueDiamond));
                return;
            }
            Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(this.award1Count, CurrencyTypeEnum.Gold));
        }
    }
    class YouyuModeChoose extends UIBase {
        constructor() {
            super();
            this.hasAdvUnlockArrayKey = ["HasAdvYouYuUnlock1", "HasAdvYouYuUnlock2", "HasAdvYouYuUnlock3", "HasAdvYouYuUnlock4", "HasAdvYouYuUnlock5", "HasAdvYouYuUnlock6", "HasAdvYouYuUnlock7"];
        }
        onAwake() {
            this.SetAllUINodesDic();
            this.GetNeed();
            this.AddBtnEvents();
            this.suoArray = new Array();
            DataTool.SetKv(this.hasAdvUnlockArrayKey[0], 2);
            if (DataTool.GetInt(this.hasAdvUnlockArrayKey[1]) == 0) {
                DataTool.SetKv(this.hasAdvUnlockArrayKey[1], 1);
            }
            for (let i = 0; i < 7; i++) {
                this.suoArray.push(DataTool.GetInt(this.hasAdvUnlockArrayKey[i]));
            }
            this.InitSignList();
            Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
            UIMgr.Instance.OpenUI(CurrencyDataPanel, () => { }, this.GetImg("imgCurrecyBg"));
        }
        onEnable() {
            SdkManager.Instance.ShowCustomAd("1", {
                left: 40 * Std.UI_ad_cTopx,
                top: 80 * Std.UI_ad_cTopx,
                width: 72
            });
            SdkManager.Instance.ShowCustomAd("2", {
                left: Laya.Browser.clientWidth - 72,
                top: 100,
                width: 72
            });
        }
        onDestroy() { }
        GetNeed() {
            this.listSign = this.GetList("listSign");
        }
        AddBtnEvents() {
            this.AddBtnEventScaleFx("btnClose", () => {
                Dispatcher.Event(EventType.OnCloseOtherCurrencyPanelInMenuSc);
                SdkManager.Instance.HideCustomAd("1");
                SdkManager.Instance.HideCustomAd("2");
                this.CloseUI();
            });
        }
        InitSignList() {
            if (!DataTool.GetInt(this.hasAdvUnlockArrayKey[0])) DataTool.SetKv(this.hasAdvUnlockArrayKey[0], 2);
            let data = [];
            for (let i = 0; i < 3; i++) {
                if (DataTool.GetInt(this.hasAdvUnlockArrayKey[i]) == 0) {
                    DataTool.SetKv(this.hasAdvUnlockArrayKey[i], 0);
                }
                let tempData = {};
                data.push(tempData);
            }
            this.listSign.array = data;
            this.listSign.hScrollBarSkin = "";
            this.listSign.renderHandler = new Laya.Handler(this, this.OnRender);
        }
        OnRender(cell, index) {
            let singleSignBg = cell;
            let suo_zhezhao = singleSignBg.getChildByName("suo_zhezhao");
            let suo = singleSignBg.getChildByName("suo");
            let bg = singleSignBg.getChildByName("bg");
            let video = singleSignBg.getChildByName("video");
            bg.skin = "YouYuMode/pxlist_btn_yy" + index + ".png";
            suo_zhezhao.visible = this.suoArray[index] != 2;
            suo.visible = this.suoArray[index] == 0;
            bg.gray = this.suoArray[index] == 0;
            video.visible = this.suoArray[index] == 1;
            if (suo_zhezhao.hasListener(Laya.Event.CLICK)) {
                suo_zhezhao.offAll();
                suo_zhezhao.on(Laya.Event.CLICK, this, () => {
                    this.SaveAdvSign(index);
                });
            }
            if (bg.hasListener(Laya.Event.CLICK)) {
                bg.offAll();
                bg.on(Laya.Event.CLICK, this, () => {
                    this.JoinGame(index);
                });
            }
        }
        JoinGame(index) {
            switch (index) {
                case 0:
                    GameLevelMgr.Instance.SetYYGame(GameYYMode.MTR);
                    break;
  
                case 1:
                    GameLevelMgr.Instance.SetYYGame(GameYYMode.BLQ);
                    break;
            }
            Dispatcher.Event(EventType.OnStartBattleModeGame);
            LoadingUIMgr.Instance.ShowLoadingUI();
            SceneMgr.Instance.OpenSc2D(Std.ScView_GameName);
            SdkManager.Instance.HideCustomAd("1");
            SdkManager.Instance.HideCustomAd("2");
        }
        SaveAdvSign(index) {
            if (this.suoArray[index] == 1) {
                PopMsgTool.ShowConfirmPanel("看广告解锁", "是否观看视频永久解锁【玻璃桥】关卡", () => {
                    CountSdkMgr.Instance.TrackEvent("videStart27");
                    SdkManager.Instance.ShowVideoAd(() => {
                        DataTool.SetKv(this.hasAdvUnlockArrayKey[1], 2);
                        this.suoArray[index] = 2;
                        this.listSign.refresh();
                        CountSdkMgr.Instance.TrackEvent("videComplete27");
                    });
                }, () => { }, false);
            } else {
                PopMsgTool.ShowConfirmPanel("暂时未开放", "请期待后续更新", () => { }, () => { }, true);
            }
        }
    }
    class MenuScViewCtl extends Laya.Script {
        constructor() {
            super();
            this.index = 0;
        }
        onAwake() {
            this.LoadLeftSubPacks();
            this.GetNeed();
            this.InitCurrencyUI();
            this.AddBtnEvent();
            this.RefreshAllRedDotState();
            this.RefreshSignReddot();
            this.PlayBgm();
            this.InitGuide();
            GameLevelMgr.Instance.SetIsInGamePausePanel(false);
            Laya.timer.loop(1e3, this, this.RefreshSignReddot);
            Dispatcher.AddListener(EventType.OnPlayerUpdateEquip, this, this.RefreshAllRedDotState);
            Dispatcher.AddListener(EventType.OnPlayerClaimMissionAward, this, this.RefreshAllRedDotState);
            Dispatcher.AddListener(EventType.OnPlayerDrawSpinAward, this, this.RefreshAllRedDotState);
            Dispatcher.AddListener(EventType.OnPlayerClaimRankAward, this, this.RefreshAllRedDotState);
            Dispatcher.AddListener(EventType.OnPlayerSignToday, this, this.RefreshAllRedDotState);
            Dispatcher.AddListener(EventType.OnResetSignTime, this, this.RefreshAllRedDotState);
            Dispatcher.AddListener(EventType.OnResetMission, this, this.RefreshAllRedDotState);
            Dispatcher.AddListener(EventType.OnOpenOtherCurrencyPanelInMenuSc, this, this.OnOpenOtherCurrencyPanelInMenuSc);
            Dispatcher.AddListener(EventType.OnCloseOtherCurrencyPanelInMenuSc, this, this.OnCloseOtherCurrencyPanelInMenuSc);
            Dispatcher.AddListener(EventType.OnStartBattleModeGame, this, this.StopBgm);
            Dispatcher.AddListener(EventType.OnEquipShopClose, this, this.OnEquipShopClose);
            Dispatcher.AddListener(EventType.m5qt, this, this.m5qt);
        }
        onEnable() {
            if (DataTool.GetInt(Std.Guide_HasLearn_IsFirstIntoMenu) != 0 && DataTool.GetInt(Std.Guide_HasLearn_OpenZombieMode) != 0 && DataTool.GetInt(Std.Guide_HasLearn_Currency) != 0) {
                Laya.timer.once(1e3, this, () => {
                    SdkManager.Instance.ShowInsertAd();
                    SdkManager.Instance.ShowCustomAd("3");
                });
            }
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
            Dispatcher.RemoveListener(EventType.OnPlayerUpdateEquip, this, this.RefreshAllRedDotState);
            Dispatcher.RemoveListener(EventType.OnPlayerClaimMissionAward, this, this.RefreshAllRedDotState);
            Dispatcher.RemoveListener(EventType.OnPlayerDrawSpinAward, this, this.RefreshAllRedDotState);
            Dispatcher.RemoveListener(EventType.OnPlayerClaimRankAward, this, this.RefreshAllRedDotState);
            Dispatcher.RemoveListener(EventType.OnPlayerSignToday, this, this.RefreshAllRedDotState);
            Dispatcher.RemoveListener(EventType.OnResetSignTime, this, this.RefreshAllRedDotState);
            Dispatcher.RemoveListener(EventType.OnResetMission, this, this.RefreshAllRedDotState);
            Dispatcher.RemoveListener(EventType.OnOpenOtherCurrencyPanelInMenuSc, this, this.OnOpenOtherCurrencyPanelInMenuSc);
            Dispatcher.RemoveListener(EventType.OnCloseOtherCurrencyPanelInMenuSc, this, this.OnCloseOtherCurrencyPanelInMenuSc);
            Dispatcher.RemoveListener(EventType.OnStartBattleModeGame, this, this.StopBgm);
            Dispatcher.RemoveListener(EventType.OnEquipShopClose, this, this.OnEquipShopClose);
            Dispatcher.RemoveListener(EventType.m5qt, this, this.m5qt);
        }
        GetNeed() {
            this.imgMenuMainBg = Tool.GetImg(this.owner, "imgMenuMainBg");
            this.imgRightItemBg = Tool.GetImg(this.imgMenuMainBg, "imgRightItemBg");
            this.imgCurrecyBg = Tool.GetImg(this.imgMenuMainBg, "imgCurrecyBg");
            this.imgRightBottomItenBg = Tool.GetImg(this.imgMenuMainBg, "imgRightBottomItenBg");
            this.btnMedalGlory = Tool.GetBtn(this.imgRightBottomItenBg, "btnMedalGlory");
            this.btnCurMission = Tool.GetBtn(this.imgRightBottomItenBg, "btnCurMission");
            this.btnLuckSpin = Tool.GetBtn(this.imgRightBottomItenBg, "btnLuckSpin");
            this.btnEquipShop = Tool.GetBtn(this.imgRightBottomItenBg, "btnEquipShop");
            this.btnBattleMode = Tool.GetBtn(this.imgRightItemBg, "btnBattleMode");
            this.btnUpdateEquip = Tool.GetBtn(this.imgRightItemBg, "btnUpdateEquip");
            this.btnZombieMode = Tool.GetBtn(this.imgRightItemBg, "btnZombieMode");
            this.btnExchangeCode = Tool.GetBtn(this.owner, "btnExchangeCode");
            this.btnSubGift = Tool.GetBtn(this.owner, "btnSubGift");
            this.imgReddotCurMission = Tool.GetImg(this.btnCurMission, "imgReddotCurMission");
            this.imgFreeDrawMission = Tool.GetImg(this.btnLuckSpin, "imgFreeDrawMission");
            this.imgReddotRankAward = Tool.GetImg(this.btnMedalGlory, "imgReddotRankAward");
            this.imgReddotSign = Tool.GetImg(this.owner.getChildByName("btnSign"), "imgReddotSign");
            this.btnYouyuMode = Tool.GetBtn(this.imgRightItemBg, "btnYouyuMode");
            this.btn_GameIcon = Tool.GetBtn(this.owner, "btn_GameIcon");
            this.img_icon = Tool.GetImg(this.btn_GameIcon, "img_icon");
            Laya.timer.loop(3e3, this, this.FuncNTGame);
            Tool.AddBtnEventScale(this.btn_GameIcon, this, () => {
                Hzzxsdk.Init.ClickAndNavigate(this.Iad, 0);
            });
            this.btn_SomeGame = Tool.GetBtn(this.imgRightBottomItenBg, "btn_SomeGame");
            this.btn_machGame = Tool.GetBtn(this.owner, "btn_machGame");
            this.btn_feedback = Tool.GetBtn(this.owner, "btn_feedback");
            SdkManager.Instance.ShowPYQ();
        }
        FuncNTGame() {
            this.btn_GameIcon.visible = Hzzxsdk.Init.RewardedAdList ? true : false;
            this.btn_machGame.visible = Hzzxsdk.Init.BannerAdList ? true : false;
            if (!Hzzxsdk.Init.RewardedAdList) return;
            if (Hzzxsdk.Init.RewardedAdList.length <= 0) return;
            if (this.index < Hzzxsdk.Init.RewardedAdList.length) {
                this.Iad = Hzzxsdk.Init.RewardedAdList[this.index];
                this.index += 1;
                this.img_icon.skin = this.Iad.icon;
            }
        }
        LoadLeftSubPacks() {
            if (!SdkManager.Instance.isDebugMode) {
                SdkManager.Instance.LoadSubPack("Scenes", () => {
                    MidLayer.IsScenesResPackLoadFinish = true;
                });
                SdkManager.Instance.LoadSubPack("Textures", () => {
                    MidLayer.IsTexturesResPackLoadFinish = true;
                });
                SdkManager.Instance.LoadSubPack("Prefabs", () => {
                    MidLayer.IsPrefabsResPackLoadFinish = true;
                });
            }
        }
        InitGuide() {
            if (DataTool.GetInt(Std.Guide_HasLearn_IsFirstIntoMenu) == 0) {
                CountSdkMgr.Instance.TrackEvent("guide0");
                let targetPos = this.btnBattleMode.localToGlobal(new Laya.Point(this.btnBattleMode.x, this.btnBattleMode.y));
                let tempX = targetPos.x - this.btnBattleMode.width / 2 - 80;
                let tempY = targetPos.y - this.btnBattleMode.height / 2 + 40;
                GuideMgr.Instance.InitDataAndShowGuide([{
                    x: tempX,
                    y: tempY,
                    radius: 150,
                    tip: "General/help_pic_box.png",
                    tipx: tempX - 250,
                    tipy: tempY + 160,
                    tipStr: "点击这里开始游戏！"
                }], () => {
                    DataTool.SetKv(Std.Guide_HasLearn_IsFirstIntoMenu, 1);
                    GameLevelMgr.Instance.SetSelectMode(GameLevelMode.NormalBattleMode);
                    UIMgr.Instance.OpenUI(BattleModeConfigPanel);
                });
            } else {
                if (DataTool.GetInt(Std.Guide_HasLearn_OpenZombieMode) == 0) {
                    CountSdkMgr.Instance.TrackEvent("guide2");
                    if (DataTool.GetInt(Std.PlayBattleModeTimesKey) >= 1) {
                        let targetPos = this.btnBattleMode.localToGlobal(new Laya.Point(this.btnBattleMode.x, this.btnBattleMode.y));
                        let tempX = targetPos.x - this.btnBattleMode.width / 2 + 315 - 27 - 20;
                        let tempY = targetPos.y - this.btnBattleMode.height / 2 + 110 + 112;
                        GuideMgr.Instance.InitDataAndShowGuide([{
                            x: tempX,
                            y: tempY,
                            radius: 100,
                            tip: "General/help_pic_box.png",
                            tipx: tempX - 250,
                            tipy: tempY + 70,
                            tipStr: "点击这里开始生化模式！"
                        }], () => {
                            DataTool.SetKv(Std.Guide_HasLearn_OpenZombieMode, 1);
                            if (MidLayer.IsLeftSubPackLoadFinish() == false) {
                                return;
                            }
                            this.StopBgm();
                            LoadingUIMgr.Instance.ShowLoadingUI();
                            GameLevelMgr.Instance.SetSelectMode(GameLevelMode.ZombieMode);
                            SceneMgr.Instance.OpenSc2D(Std.ScView_GameName);
                        });
                    }
                } else {
                    if (DataTool.GetInt(Std.Guide_HasLearn_Currency) == 0) {
                        CountSdkMgr.Instance.TrackEvent("guide4");
                        let btnEquipShopPos = this.btnEquipShop.localToGlobal(new Laya.Point(0, 0));
                        GuideMgr.Instance.InitDataAndShowGuide([{
                            x: 230,
                            y: 30,
                            radius: 50,
                            tip: "General/help_pic_box.png",
                            tipx: 155,
                            tipy: 130,
                            tipStr: "金块：用于购买武器和弹药，你可以通过战斗，每日任务，提升等级等方式获取！"
                        }, {
                            x: 470,
                            y: 30,
                            radius: 50,
                            tip: "General/help_pic_box.png",
                            tipx: 395,
                            tipy: 130,
                            tipStr: "蓝钻：用于升级装备，你可以通过战斗，每日任务，提升等级等方式获取！"
                        }, {
                            x: 705,
                            y: 30,
                            radius: 50,
                            tip: "General/help_pic_box.png",
                            tipx: 535,
                            tipy: 130,
                            tipStr: "红钻：用于转盘抽奖，，你可以通过战斗，每日任务，提升等级等方式获取！"
                        }, {
                            x: btnEquipShopPos.x + 60,
                            y: btnEquipShopPos.y + 50,
                            radius: 80,
                            tip: "General/help_pic_box.png",
                            tipx: btnEquipShopPos.x - 300,
                            tipy: btnEquipShopPos.y - 250,
                            tipStr: "战备商店可以购买新的武器和装备，快去商店里看看吧！"
                        }], () => {
                            DataTool.SetKv(Std.Guide_HasLearn_Currency, 1);
                            DataTool.SetKv(Std.Guide_HasLearn_EquipShop, 1);
                            UIDataMidLyaer.IsEquipShop_BuyEquip = EquipShop.Buy;
                            UIMgr.Instance.OpenUI(EquipShopPanel);
                        });
                    } else {
                        if (!SdkManager.Instance.android233) {
                            SdkManager.Instance.ShowBanner("left");
                            SdkManager.Instance.ShowCustomAd("3");
                        }
                    }
                }
            }
        }
        OnEquipShopClose() {
            if (DataTool.GetInt(Std.Guide_HasLearn_EquipShop) == 1 && DataTool.GetInt(Std.Guide_HasLearn_UpdateEquip) == 0) {
                let btnUpdateEquipPos = this.btnUpdateEquip.localToGlobal(new Laya.Point(0, 0));
                GuideMgr.Instance.InitDataAndShowGuide([{
                    x: btnUpdateEquipPos.x + this.btnUpdateEquip.width / 2,
                    y: btnUpdateEquipPos.y + this.btnUpdateEquip.height / 2,
                    radius: 100,
                    tip: "General/help_pic_box.png",
                    tipx: btnUpdateEquipPos.x - 150,
                    tipy: btnUpdateEquipPos.y + 200,
                    tipStr: "战备升级可以升级你的武器和装备，来提升你的火力，快去升级商店里看看吧！"
                }], () => {
                    DataTool.SetKv(Std.Guide_HasLearn_UpdateEquip, 1);
                    UIDataMidLyaer.IsEquipShop_BuyEquip = EquipShop.Up;
                    UIMgr.Instance.OpenUI(EquipShopPanel);
                    CountSdkMgr.Instance.TrackEvent("guide5");
                });
            }
        }
        PlayBgm() {
            if (!this.menuBgmCn) {
                this.menuBgmCn = SoundTool.PlayBgmByName("menuBgm");
            }
        }
        StopBgm() {
            if (this.menuBgmCn) {
                this.menuBgmCn.stop();
                this.menuBgmCn = null;
            }
        }
        SetMenuBgmVolume(v) {
            if (this.menuBgmCn) {
                this.menuBgmCn.volume = v;
            }
        }
        OnOpenOtherCurrencyPanelInMenuSc() {
            if (this.menuCurrencyUI) {
                this.menuCurrencyUI.destroy(true);
                this.menuCurrencyUI = null;
            }
            SdkManager.Instance.HidePYQ();
        }
        OnCloseOtherCurrencyPanelInMenuSc() {
            this.InitCurrencyUI();
            SdkManager.Instance.ShowPYQ();
        }
        InitCurrencyUI() {
            if (!this.menuCurrencyUI) {
                UIMgr.Instance.OpenUI(CurrencyDataPanel, ui => {
                    this.menuCurrencyUI = ui;
                }, this.imgCurrecyBg);
            }
        }
        AddBtnEvent() {
            Tool.AddBtnEventScale(this.btnZombieMode, this, () => {
                if (MidLayer.IsLeftSubPackLoadFinish() == false) {
                    return;
                }
                PlayerCtl.isFisrt = true;
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                CountSdkMgr.Instance.TrackEvent("openInterface1");
                this.StopBgm();
                LoadingUIMgr.Instance.ShowLoadingUI();
                GameLevelMgr.Instance.SetSelectMode(GameLevelMode.ZombieMode);
                SceneMgr.Instance.OpenSc2D(Std.ScView_GameName);
            });
            Tool.AddBtnEventScale(this.btnBattleMode, this, () => {
                PlayerCtl.isFisrt = true;
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                CountSdkMgr.Instance.TrackEvent("openInterface0");
                GameLevelMgr.Instance.SetSelectMode(GameLevelMode.NormalBattleMode);
                UIMgr.Instance.OpenUI(BattleModeConfigPanel);
            });
            Tool.AddBtnEventScale(this.btnCurMission, this, () => {
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                CountSdkMgr.Instance.TrackEvent("openInterface3");
                UIMgr.Instance.OpenUI(DailyMissionPanel);
            });
            Tool.AddBtnEventScale(this.btnLuckSpin, this, () => {
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                CountSdkMgr.Instance.TrackEvent("openInterface6");
                UIMgr.Instance.OpenUI(SpinDrawPanel);
            });
            Tool.AddBtnEventScale(this.btnExchangeCode, this, () => {
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                UIMgr.Instance.OpenUI(ExchangeItemPanel);
            });
            Tool.AddBtnEventScale(this.btnSubGift, this, () => { });
            Tool.AddBtnEventScale(Tool.GetBtn(this.owner, "btnSign"), this, () => {
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                UIMgr.Instance.OpenUI(SignPanel);
            });
            Tool.AddBtnEventScale(this.btnEquipShop, this, () => {
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                CountSdkMgr.Instance.TrackEvent("openInterface4");
                UIDataMidLyaer.IsEquipShop_BuyEquip = EquipShop.Buy;
                UIMgr.Instance.OpenUI(EquipShopPanel);
            });
            Tool.AddBtnEventScale(this.btnUpdateEquip, this, () => {
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                CountSdkMgr.Instance.TrackEvent("openInterface2");
                UIDataMidLyaer.IsEquipShop_BuyEquip = EquipShop.Up;
                UIMgr.Instance.OpenUI(EquipShopPanel);
            });
            Tool.AddBtnEventScale(this.btnMedalGlory, this, () => {
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                CountSdkMgr.Instance.TrackEvent("openInterface5");
                UIMgr.Instance.OpenUI(RankInfoPanel);
            });
            Tool.AddBtnEventScale(this.btnYouyuMode, this, () => {
                PlayerCtl.isFisrt = true;
                SdkManager.Instance.HideBanner();
                SdkManager.Instance.HidePYQ();
                CountSdkMgr.Instance.TrackEvent("openInterface7");
                GameLevelMgr.Instance.SetSelectMode(GameLevelMode.YouYu);
                UIMgr.Instance.OpenUI(YouyuModeChoose);
            });
            Tool.AddBtnEventScale(this.btn_SomeGame, this, () => {
                UIMgr.Instance.LQOpenUI("HzzsdkSameGame", 0);
                SdkManager.Instance.HidePYQ();
            });
            Tool.AddBtnEventScale(this.btn_machGame, this, () => {
                if (SdkManager.Instance.getIsXXChannel(SdkChannel.Android)) {
                    SdkManager.Instance.moreGame();
                } else {
                    UIMgr.Instance.LQOpenUI("HzzsdkMoreGame", 0);
                    SdkManager.Instance.HidePYQ();
                }
            });
            Tool.AddBtnEventScale(this.btn_feedback, this, () => {
                PopMsgTool.ShowConfirmPanel("客服QQ", "3409468140", () => { }, () => { }, true);
            });
        }
        RefreshAllRedDotState() {
            this.imgReddotCurMission.visible = DailyMissionMgr.Instance.IsAnyMissionAwardCanButNotClaim();
            this.imgFreeDrawMission.visible = DataTool.GetInt(Std.FrreDraw_LeftFreeDrawKey) > 0;
            this.imgReddotSign.visible = !GameTimeMgr.Instance.IsSameDay(DataTool.GetInt(Std.Sign_LastSignTimeStampKey), GameTimeMgr.Instance.GetNowDateTime());
        }
        RefreshSignReddot() {
            this.imgReddotSign.visible = !GameTimeMgr.Instance.IsSameDay(DataTool.GetInt(Std.Sign_LastSignTimeStampKey), GameTimeMgr.Instance.GetNowDateTime());
        }
        m5qt() {
            Std.m5qtUI = false;
            SdkManager.Instance.ShowVideoAd(() => {
                Dispatcher.Event(EventType.OnCurrencyChange, new CurrencyData(500, CurrencyTypeEnum.Gold));
                CountSdkMgr.Instance.TrackEvent("videComplete28");
            });
        }
    }
    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("Scripts/GamePlay/Weapon/WeaponFunc/CrossHairMove.ts", CrossHairMove);
            reg("Scripts/GamePlay/ScViewCtl/GameMainModeCtler.ts", GameMainModeCtler);
            reg("Scripts/GamePlay/Player/LookRoter.ts", LookRoter);
            reg("Scripts/Framework/GenGamePlaySrc/JoyStick.ts", JoyStick);
            reg("Scripts/GamePlay/ScViewCtl/InitScViewCtl.ts", InitScViewCtl);
            reg("Scripts/GamePlay/ScViewCtl/MenuScViewCtl.ts", MenuScViewCtl);
        }
    }
    GameConfig.width = 1136;
    GameConfig.height = 640;
    GameConfig.scaleMode = "fixedheight";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "InitScView.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();
    var qudao;
    (function (qudao) {
        qudao[qudao["None"] = 0] = "None";
        qudao[qudao["Oppo"] = 2036] = "Oppo";
        qudao[qudao["Vivo"] = 2037] = "Vivo";
        qudao[qudao["huaWei"] = 2038] = "huaWei";
        qudao[qudao["xiaoMi"] = 2039] = "xiaoMi";
        qudao[qudao["TT"] = 2040] = "TT";
        qudao[qudao["shouQ"] = 2041] = "shouQ";
        qudao[qudao["wx"] = 2042] = "wx";
        qudao[qudao["SSJJ"] = 2033] = "SSJJ";
        qudao[qudao["BaiDu"] = 2e3] = "BaiDu";
        qudao[qudao["QQ"] = 2022] = "QQ";
    })(qudao || (qudao = {}));
    class OpenSdk extends Laya.Script {
        constructor() {
            super();
            this.version_hasmap = {
                sdk_version: "js_1.0.0",
                source_id: 99999999,
                ad_productNum: "",
                channel_id: qudao.TT
            };
            this.phone_statue = {
                iccid: "",
                IMSI: "",
                IMEI: "",
                belonging_province: "",
                OP: "",
                os: "",
                phone_number: "",
                Model: "",
                version_code: "",
                sim_state: "",
                manufacture: "",
                package_name: "",
                version_name: "",
                brand: "",
                boand: ""
            };
            OpenSdk.Instance = this;
        }
        initQest(source_id = 99999999, channel_id = qudao.wx, callbackSuccess, callbackFail) {
            OpenSdk.version_hasmap.source_id = source_id;
            OpenSdk.version_hasmap.channel_id = channel_id;
            let the_url = "https://www.888xin.top/the_door_sdk/init_new_sdk_js.php";
            let the_data = {
                version_hasmap: OpenSdk.version_hasmap,
                phone_statue: OpenSdk.phone_statue
            };
            this.requestPost(the_url, the_data, callbackSuccess, callbackFail);
        }
        update_openid(open_id = "", callbackSuccess = (() => { }), callbackFail = (() => { })) {
            let the_url = "https://www.888xin.top/minigame/fankuairen/openIdNewInfo.php";
            let the_data = {
                open_id: open_id
            };
            this.requestPost(the_url, the_data, callbackSuccess, callbackFail);
        }
        requestPost(the_url, the_data, callbackSuccess, callbackFail) {
            window["wx"].request({
                url: the_url,
                method: "POST",
                data: the_data,
                header: {
                    "content-type": "application/json"
                },
                success(res) {
                    callbackSuccess(res);
                    console.log(res);
                },
                fail(res) {
                    callbackFail(res);
                }
            });
        }
    }
    OpenSdk.theOpenNumber = 0;
    class LoadAtlasTwennTip extends Laya.Script {
        constructor() {
            super();
            this.idx = 1;
            this.str = "资源加载中，请稍等.";
        }
        onAwake() {
            this.label = this.owner;
            Laya.timer.loop(100, this, this.TweenStr);
        }
        onDestroy() {
            Tool.ClearTimerAndTween(this);
        }
        TweenStr() {
            this.idx += 1;
            if (this.idx == 1) {
                this.str = "资源加载中，请稍等.";
            } else if (this.idx == 2) {
                this.str = "资源加载中，请稍等..";
            } else if (this.idx == 3) {
                this.str = "资源加载中，请稍等...";
            } else if (this.idx == 4) {
                this.str = "资源加载中，请稍等....";
            } else if (this.idx == 5) {
                this.str = "资源加载中，请稍等.....";
            } else if (this.idx == 6) {
                this.str = "资源加载中，请稍等......";
            } else {
                this.idx = 1;
                this.str = "资源加载中，请稍等.";
            }
            this.label.text = this.str;
        }
    }
    class HzzsdkMoreGame extends Laya.Script {
        constructor() {
            super();
            this.MaxBanId = "";
            this.MixBanId0 = "";
            this.MixBanId1 = "";
        }
        onAwake() {
            let bg_kuan = this.owner.getChildByName("bg_kuan");
            this.btnClose = bg_kuan.getChildByName("btnClose");
            this.MaxBanner = bg_kuan.getChildByName("MaxBanner");
            this.MixBanner0 = bg_kuan.getChildByName("MixBanner0");
            this.MixBanner1 = bg_kuan.getChildByName("MixBanner1");
            this.MaxIcon0 = bg_kuan.getChildByName("MaxIcon0");
            this.MaxIcon1 = bg_kuan.getChildByName("MaxIcon1");
            this.MaxIcon2 = bg_kuan.getChildByName("MaxIcon2");
            this.MaxIcon3 = bg_kuan.getChildByName("MaxIcon3");
            this.MaxIcon4 = bg_kuan.getChildByName("MaxIcon4");
            this.MaxIcon5 = bg_kuan.getChildByName("MaxIcon5");
            this.MaxIcon6 = bg_kuan.getChildByName("MaxIcon6");
            this.MaxIcon7 = bg_kuan.getChildByName("MaxIcon7");
            this.MaxIcon8 = bg_kuan.getChildByName("MaxIcon8");
            this.btnClose.on(Laya.Event.CLICK, this, this.CloseUI);
        }
        onEnable() {
            let rootUI = this.owner;
            this.startTweenAnm = Laya.Tween.from(rootUI, {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backOut);
            Dispatcher.Event(EventType.OnOpenOtherCurrencyPanelInMenuSc);
            SdkManager.Instance.HideBanner();
        }
        OpenUI() {
            let cc = 0;
            if (Hzzxsdk.Init.BannerAdList.length <= 0) return;
            for (let i = 0; i < Hzzxsdk.Init.BannerAdList.length; i++) {
                if (Hzzxsdk.Init.BannerAdList[i].description == "Maxbanner") {
                    this.MaxBanner.skin = Hzzxsdk.Init.BannerAdList[i].banner;
                    this.MaxBanner.on(Laya.Event.CLICK, this, this.AdClick, [Hzzxsdk.Init.BannerAdList[i], 0]);
                    this.MaxBanId = Hzzxsdk.Init.BannerAdList[i].pid;
                    break;
                }
            }
            for (let i = 0; i < Hzzxsdk.Init.BannerAdList.length; i++) {
                if (Hzzxsdk.Init.BannerAdList[i].pid == this.MaxBanId) {
                    continue;
                } else if (Hzzxsdk.Init.BannerAdList[i].description == "Midbanner") {
                    if (cc >= 2) break;
                    this["MixBanner" + cc].skin = Hzzxsdk.Init.BannerAdList[i].banner;
                    this["MixBanner" + cc].on(Laya.Event.CLICK, this, this.AdClick, [Hzzxsdk.Init.BannerAdList[i], 0]);
                    this["MixBanId" + cc] = Hzzxsdk.Init.BannerAdList[i].pid;
                    cc += 1;
                }
            }
            if (Hzzxsdk.Init.RewardedAdList.length <= 0) return;
            for (let i = 0; i < 9; i++) {
                this["MaxIcon" + i].skin = Hzzxsdk.Init.RewardedAdList[i].icon;
                this["MaxIcon" + i].on(Laya.Event.CLICK, this, this.AdClick, [Hzzxsdk.Init.RewardedAdList[i], 0]);
            }
        }
        AdClick(ad) {
            Hzzxsdk.Init.ClickAndNavigate(ad, 0);
        }
        CloseUI() {
            Tool.ClearTragetTween(this.startTweenAnm);
            SdkManager.Instance.ShowBanner("center");
            Dispatcher.Event(EventType.OnCloseOtherCurrencyPanelInMenuSc);
            this.owner.destroy(true);
        }
    }
    class Native extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.Native = this.owner;
            this.btn_Close = this.Native.getChildByName("btn_Close");
            this.img_Icon = this.Native.getChildByName("img_Icon");
            this.img_Logo = this.Native.getChildByName("img_Logo");
            this.lab_Title = this.Native.getChildByName("lab_Title");
            this.lab_Desc = this.Native.getChildByName("lab_Desc");
            this.lab_BtnDec = this.Native.getChildByName("lab_BtnDesc");
            this.lab_BtnDec.on(Laya.Event.CLICK, this, this.FuncNativeClick);
            this.btn_Close.on(Laya.Event.CLICK, this, this.FuncClose);
            Dispatcher.AddListener(EventType.CloseNative, this, this.FuncClose);
        }
        OpenUI(res) {
            let sss = JSON.parse(res);
            console.log(JSON.stringify(res));
            this.img_Icon.skin = sss["Icon"];
            this.img_Logo.skin = sss["Logo"];
            this.lab_Title.text = sss["Title"];
            this.lab_Desc.text = sss["Desc"];
            this.lab_BtnDec.text = sss["BnText"];
        }
        FuncNativeClick() {
            this.owner.destroy(true);
            SdkManager.Instance.OnNativeAdClicked();
        }
        FuncClose() {
            this.owner.destroy(true);
            SdkManager.Instance.OnNativeAdCloseed();
        }
    }
    class Main {
        constructor() {
            if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height); else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
            Laya.alertGlobalError(true);
            this.InitCountMgrAndPackLoad();
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            SdkManager.Instance.Request();
            ClassMgr.SetUINameAndClassName("HzzsdkMoreGame", HzzsdkMoreGame);
            ClassMgr.SetUINameAndClassName("Native", Native);
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
            this.DestoryLoadImg();
        }
        InitCountMgrAndPackLoad() {
            Std.ui_height = 640;
            Std.ui_width = Laya.Browser.width / Laya.Browser.height * 640;
            Std.UI_ad_cTopx = Laya.Browser.clientWidth / Std.ui_width;
            this.InitSdk();
            Tool.AddMgrToStage(CountSdkMgr);
            Tool.AddMgrToStage(OpenSdk);
            CountSdkMgr.Instance.SetNeedCount(!SdkManager.Instance.isDebugMode);
            this.ShowLoadImg();
            this.LoadOtherSubPacks();
            SdkManager.Instance.LoadSubPack("atlas", () => {
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            });
        }
        DestoryLoadImg() {
            CountSdkMgr.Instance.TrackEvent("afterLoading");
            if (this.loadImg) {
                this.loadImg.destroy(true);
            }
        }
        ShowLoadImg() {
            CountSdkMgr.Instance.TrackEvent("beforeLoading");
            if (!this.loadImg) {
                this.loadImg = Laya.stage.addChild(new Laya.Image("General/main_pic_bg.jpg"));
                this.loadImg.left = this.loadImg.right = this.loadImg.top = this.loadImg.bottom = 0;
                let pic = new Laya.Image("General/loading_pic_pic.png");
                this.loadImg.addChild(pic);
                pic.centerX = pic.centerY = 0;
                let tip = new Laya.Label("资源加载中，请稍等...");
                tip.addComponent(LoadAtlasTwennTip);
                this.loadImg.addChild(tip);
                tip.align = "left";
                tip.overflow = "visible";
                tip.width = 300;
                tip.centerX = 0;
                tip.bottom = 30;
                tip.italic = false;
                tip.font = "SimHei";
                tip.fontSize = 25;
                tip.color = "#ffcc00";
                tip.stroke = 3;
                tip.strokeColor = "#000000";
                let bt = new Laya.Button();
                bt.visible = false;
                this.loadImg.addChild(bt);
            }
        }
        InitSdk() {
            SdkManager.getInst();
            SdkManager.Instance.isDebugMode = false;
            SdkManager.Instance.isPCMode = false;
            SdkManager.Instance.android233 = false;
            GuideMgr.JoinGuide = true;
            SdkManager.Instance.InitSdk(SdkChannel.WeiXinSdk, {
                appID: "wx5a7880ab341dcea7",
                bannerAdID: "adunit-53ef2d3d43cbda78",
                videoAdID: "adunit-88ddc6294db0e602",
                insertAdID: "adunit-578123d1ab0beb2a",
                customAdIDV0: "adunit-6a9e041da4c96c51",
                customAdIDV1: "adunit-481d0677a82ce89b",
                customAdIDS0: "adunit-fdc521320a71285d",
                customAdIDM0: "adunit-9a421aafe2585a0c",
                customAdIDM1: "adunit-071c4328fcfed011"
            });
            SdkManager.Instance.Login(res => {
                MyAjax.GetOpenID(res);
            });
            if (SdkManager.Instance.getIsXXChannel(SdkChannel.WeiXinSdk)) {
                Hzzxsdk.GetInit();
                Hzzxsdk.Init.Debug(true);
                Hzzxsdk.Init.InitHzzxsdk();
                Laya.timer.once(5e3, this, () => {
                    Hzzxsdk.Init.GetRewardedAdList();
                    Hzzxsdk.Init.GetBannerAdList();
                });
            }
        }
        LoadOtherSubPacks() {
            SdkManager.Instance.LoadSubPack("Sounds");
        }
    }
    new Main();
  })();