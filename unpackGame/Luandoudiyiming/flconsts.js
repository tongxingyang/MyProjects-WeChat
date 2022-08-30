console.log("========import flconsts=======");

var window;

try {
    window = GameGlobal || {};
} catch (err) {}

// 游戏版本号
window.APP_VERSION = "1.0.7";