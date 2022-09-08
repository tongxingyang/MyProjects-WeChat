var e = wx.getFileSystemManager ? wx.getFileSystemManager() : null;

function n() {
    return e ? null : (console.warn("can not get the file system!"), new Error("file system does not exist!"));
}

function r(r, i) {
    var l = n();
    if (l) return l;
    e.unlink({
        filePath: r,
        success: function() {
            cc.log("Removed local file " + r + " successfully!"), i && i(null);
        },
        fail: function(e) {
            console.warn(e.errMsg), i && i(new Error(e.errMsg));
        }
    });
}

function i(r, i, l) {
    var t = n();
    if (t) return t;
    e.readFile({
        filePath: r,
        encoding: i,
        success: l ? function(e) {
            l(null, e.data);
        } : void 0,
        fail: function(e) {
            console.warn(e.errMsg), l && l(new Error(e.errMsg), null);
        }
    });
}

window.fsUtils = module.exports = {
    fs: e,
    getUserDataPath: function() {
        return wx.env.USER_DATA_PATH;
    },
    checkFsValid: n,
    readDir: function(r, i) {
        var l = n();
        if (l) return l;
        e.readdir({
            dirPath: r,
            success: i ? function(e) {
                i(null, e.files);
            } : void 0,
            fail: i ? function(e) {
                i(new Error(e.errMsg), null);
            } : void 0
        });
    },
    exists: function(r, i) {
        var l = n();
        if (l) return l;
        e.access({
            path: r,
            success: i ? function() {
                i(!0);
            } : void 0,
            fail: i ? function() {
                i(!1);
            } : void 0
        });
    },
    copyFile: function(r, i, l) {
        var t = n();
        if (t) return t;
        e.copyFile({
            srcPath: r,
            destPath: i,
            success: function() {
                cc.log("copy file finished:" + i), l && l(null);
            },
            fail: function(e) {
                cc.log("copy file failed:" + e.errMsg), l && l(new Error(e.errMsg));
            }
        });
    },
    downloadFile: function(e, n, i) {
        wx.downloadFile({
            url: e,
            filePath: n,
            success: function(n) {
                200 === n.statusCode ? i && i(null, n.tempFilePath || n.filePath) : (n.filePath && r(n.filePath), 
                console.warn("Download file failed: " + e), i && i(new Error(n.errMsg), null));
            },
            fail: function(e) {
                console.warn(e.errMsg), i && i(new Error(e.errMsg), null);
            }
        });
    },
    readText: function(e, n) {
        return i(e, "utf8", n);
    },
    readArrayBuffer: function(e, n) {
        return i(e, "", n);
    },
    saveFile: function(e, n, r) {
        wx.saveFile({
            tempFilePath: e,
            filePath: n,
            success: function(e) {
                cc.log("save file finished:" + n), r && r(null, e.savedFilePath);
            },
            fail: function(e) {
                cc.log("save file failed:" + e.errMsg), r && r(new Error(e.errMsg), null);
            }
        });
    },
    writeFile: function(r, i, l, t) {
        var s = n();
        if (s) return s;
        e.writeFile({
            filePath: r,
            encoding: l,
            data: i,
            success: t ? function() {
                t(null);
            } : void 0,
            fail: function(e) {
                console.warn(e.errMsg), t && t(new Error(e.errMsg));
            }
        });
    },
    deleteFile: r,
    writeFileSync: function(r, i, l) {
        var t = n();
        if (t) return t;
        try {
            return e.writeFileSync(r, i, l), null;
        } catch (e) {
            e = {};//VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn(e.message), new Error(e.message);
        }
    },
    readJsonSync: function(r) {
        var i = n();
        if (i) return i;
        try {
            var l = e.readFileSync(r, "utf8");
            return JSON.parse(l);
        } catch (e) {
            e ={};// VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn(e.message), new Error(e.message);
        }
    },
    makeDirSync: function(r, i) {
        var l = n();
        if (l) return l;
        try {
            return e.mkdirSync(r, i), null;
        } catch (e) {
            e = {};//.handleException(e);
            return console.warn(e.message), new Error(e.message);
        }
    }
};