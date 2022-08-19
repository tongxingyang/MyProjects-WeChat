var e = wx.getFileSystemManager ? wx.getFileSystemManager() : null, n = /the maximum size of the file storage/, r = {
    fs: e,
    isOutOfStorage: function(e) {
        return n.test(e);
    },
    getUserDataPath: function() {
        return wx.env.USER_DATA_PATH;
    },
    checkFsValid: function() {
        return !!e || (console.warn("can not get the file system!"), !1);
    },
    deleteFile: function(n, r) {
        e.unlink({
            filePath: n,
            success: function() {
                r && r(null);
            },
            fail: function(e) {
                console.warn("Delete file failed: path: " + n + " message: " + e.errMsg), r && r(new Error(e.errMsg));
            }
        });
    },
    downloadFile: function(e, n, a, s, t) {
        var i = {
            url: e,
            success: function(n) {
                200 === n.statusCode ? t && t(null, n.tempFilePath || n.filePath) : (n.filePath && r.deleteFile(n.filePath), 
                console.warn("Download file failed: path: " + e + " message: " + n.statusCode), 
                t && t(new Error(n.statusCode), null));
            },
            fail: function(n) {
                console.warn("Download file failed: path: " + e + " message: " + n.errMsg), t && t(new Error(n.errMsg), null);
            }
        };
        n && (i.filePath = n), a && (i.header = a);
        var l = wx.downloadFile(i);
        s && l.onProgressUpdate(s);
    },
    saveFile: function(e, n, r) {
        wx.saveFile({
            tempFilePath: e,
            filePath: n,
            success: function(e) {
                r && r(null);
            },
            fail: function(n) {
                console.warn("Save file failed: path: " + e + " message: " + n.errMsg), r && r(new Error(n.errMsg));
            }
        });
    },
    copyFile: function(n, r, a) {
        e.copyFile({
            srcPath: n,
            destPath: r,
            success: function() {
                a && a(null);
            },
            fail: function(e) {
                console.warn("Copy file failed: path: " + n + " message: " + e.errMsg), a && a(new Error(e.errMsg));
            }
        });
    },
    writeFile: function(n, r, a, s) {
        e.writeFile({
            filePath: n,
            encoding: a,
            data: r,
            success: function() {
                s && s(null);
            },
            fail: function(e) {
                console.warn("Write file failed: path: " + n + " message: " + e.errMsg), s && s(new Error(e.errMsg));
            }
        });
    },
    writeFileSync: function(n, r, a) {
        try {
            return e.writeFileSync(n, r, a), null;
        } catch (e) {
            //e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn("Write file failed: path: " + n + " message: " + e.message), 
            new Error(e.message);
        }
    },
    readFile: function(n, r, a) {
        e.readFile({
            filePath: n,
            encoding: r,
            success: function(e) {
                a && a(null, e.data);
            },
            fail: function(e) {
                console.warn("Read file failed: path: " + n + " message: " + e.errMsg), a && a(new Error(e.errMsg), null);
            }
        });
    },
    readDir: function(n, r) {
        e.readdir({
            dirPath: n,
            success: function(e) {
                r && r(null, e.files);
            },
            fail: function(e) {
                console.warn("Read directory failed: path: " + n + " message: " + e.errMsg), r && r(new Error(e.errMsg), null);
            }
        });
    },
    readText: function(e, n) {
        r.readFile(e, "utf8", n);
    },
    readArrayBuffer: function(e, n) {
        r.readFile(e, "", n);
    },
    readJson: function(e, n) {
        r.readFile(e, "utf8", function(r, a) {
            var s = null;
            if (!r) try {
                s = JSON.parse(a);
            } catch (n) {
                //n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                console.warn("Read json failed: path: " + e + " message: " + n.message), r = new Error(n.message);
            }
            n && n(r, s);
        });
    },
    readJsonSync: function(n) {
        try {
            var r = e.readFileSync(n, "utf8");
            return JSON.parse(r);
        } catch (e) {
            //e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn("Read json failed: path: " + n + " message: " + e.message), 
            new Error(e.message);
        }
    },
    makeDirSync: function(n, r) {
        try {
            return e.mkdirSync(n, r), null;
        } catch (e) {
            //e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn("Make directory failed: path: " + n + " message: " + e.message), 
            new Error(e.message);
        }
    },
    rmdirSync: function(n, r) {
        try {
            e.rmdirSync(n, r);
        } catch (e) {
            //e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn("rm directory failed: path: " + n + " message: " + e.message), 
            new Error(e.message);
        }
    },
    exists: function(n, r) {
        e.access({
            path: n,
            success: function() {
                r && r(!0);
            },
            fail: function() {
                r && r(!1);
            }
        });
    },
    loadSubpackage: function(e, n, r) {
        var a = wx.loadSubpackage({
            name: e,
            success: function() {
                r && r();
            },
            fail: function(n) {
                console.warn("Load Subpackage failed: path: " + e + " message: " + n.errMsg), r && r(new Error("Failed to load subpackage " + e + ": " + n.errMsg));
            }
        });
        return n && a.onProgressUpdate(n), a;
    },
    unzip: function(n, r, a) {
        e.unzip({
            zipFilePath: n,
            targetPath: r,
            success: function() {
                a && a(null);
            },
            fail: function(e) {
                console.warn("unzip failed: path: " + n + " message: " + e.errMsg), a && a(new Error("unzip failed: " + e.errMsg));
            }
        });
    }
};

window.fsUtils = module.exports = r;