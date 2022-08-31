var e = wx.getFileSystemManager ? wx.getFileSystemManager() : null, n = /the maximum size of the file storage/, a = {
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
    deleteFile: function(n, a) {
        e.unlink({
            filePath: n,
            success: function() {
                a && a(null);
            },
            fail: function(e) {
                console.warn("Delete file failed: path: ".concat(n, " message: ").concat(e.errMsg)), 
                a && a(new Error(e.errMsg));
            }
        });
    },
    downloadFile: function(e, n, r, t, c) {
        var o = {
            url: e,
            success: function(n) {
                200 === n.statusCode ? c && c(null, n.tempFilePath || n.filePath) : (n.filePath && a.deleteFile(n.filePath), 
                console.warn("Download file failed: path: ".concat(e, " message: ").concat(n.statusCode)), 
                c && c(new Error(n.statusCode), null));
            },
            fail: function(n) {
                console.warn("Download file failed: path: ".concat(e, " message: ").concat(n.errMsg)), 
                c && c(new Error(n.errMsg), null);
            }
        };
        n && (o.filePath = n), r && (o.header = r);
        var s = wx.downloadFile(o);
        t && s.onProgressUpdate(t);
    },
    saveFile: function(e, n, a) {
        wx.saveFile({
            tempFilePath: e,
            filePath: n,
            success: function(e) {
                a && a(null);
            },
            fail: function(n) {
                console.warn("Save file failed: path: ".concat(e, " message: ").concat(n.errMsg)), 
                a && a(new Error(n.errMsg));
            }
        });
    },
    copyFile: function(n, a, r) {
        e.copyFile({
            srcPath: n,
            destPath: a,
            success: function() {
                r && r(null);
            },
            fail: function(e) {
                console.warn("Copy file failed: path: ".concat(n, " message: ").concat(e.errMsg)), 
                r && r(new Error(e.errMsg));
            }
        });
    },
    writeFile: function(n, a, r, t) {
        e.writeFile({
            filePath: n,
            encoding: r,
            data: a,
            success: function() {
                t && t(null);
            },
            fail: function(e) {
                console.warn("Write file failed: path: ".concat(n, " message: ").concat(e.errMsg)), 
                t && t(new Error(e.errMsg));
            }
        });
    },
    writeFileSync: function(n, a, r) {
        try {
            return e.writeFileSync(n, a, r), null;
        } catch (e) {
            //e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn("Write file failed: path: ".concat(n, " message: ").concat(e.message)), 
            new Error(e.message);
        }
    },
    readFile: function(n, a, r) {
        e.readFile({
            filePath: n,
            encoding: a,
            success: function(e) {
                r && r(null, e.data);
            },
            fail: function(e) {
                console.warn("Read file failed: path: ".concat(n, " message: ").concat(e.errMsg)), 
                r && r(new Error(e.errMsg), null);
            }
        });
    },
    readDir: function(n, a) {
        e.readdir({
            dirPath: n,
            success: function(e) {
                a && a(null, e.files);
            },
            fail: function(e) {
                console.warn("Read directory failed: path: ".concat(n, " message: ").concat(e.errMsg)), 
                a && a(new Error(e.errMsg), null);
            }
        });
    },
    readText: function(e, n) {
        a.readFile(e, "utf8", n);
    },
    readArrayBuffer: function(e, n) {
        a.readFile(e, "", n);
    },
    readJson: function(e, n) {
        a.readFile(e, "utf8", function(a, r) {
            var t = null;
            if (!a) try {
                t = JSON.parse(r);
            } catch (n) {
                //n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                console.warn("Read json failed: path: ".concat(e, " message: ").concat(n.message)), 
                a = new Error(n.message);
            }
            n && n(a, t);
        });
    },
    readJsonSync: function(n) {
        try {
            var a = e.readFileSync(n, "utf8");
            return JSON.parse(a);
        } catch (e) {
            //e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn("Read json failed: path: ".concat(n, " message: ").concat(e.message)), 
            new Error(e.message);
        }
    },
    makeDirSync: function(n, a) {
        try {
            return e.mkdirSync(n, a), null;
        } catch (e) {
            //e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn("Make directory failed: path: ".concat(n, " message: ").concat(e.message)), 
            new Error(e.message);
        }
    },
    rmdirSync: function(n, a) {
        try {
            e.rmdirSync(n, a);
        } catch (e) {
            //e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return console.warn("rm directory failed: path: ".concat(n, " message: ").concat(e.message)), 
            new Error(e.message);
        }
    },
    exists: function(n, a) {
        e.access({
            path: n,
            success: function() {
                a && a(!0);
            },
            fail: function() {
                a && a(!1);
            }
        });
    },
    loadSubpackage: function(e, n, a) {
        var r = wx.loadSubpackage({
            name: e,
            success: function() {
                a && a();
            },
            fail: function(n) {
                console.warn("Load Subpackage failed: path: ".concat(e, " message: ").concat(n.errMsg)), 
                a && a(new Error("Failed to load subpackage ".concat(e, ": ").concat(n.errMsg)));
            }
        });
        return n && r.onProgressUpdate(n), r;
    },
    unzip: function(n, a, r) {
        e.unzip({
            zipFilePath: n,
            targetPath: a,
            success: function() {
                r && r(null);
            },
            fail: function(e) {
                console.warn("unzip failed: path: ".concat(n, " message: ").concat(e.errMsg)), r && r(new Error("unzip failed: " + e.errMsg));
            }
        });
    }
};

window.fsUtils = module.exports = a;