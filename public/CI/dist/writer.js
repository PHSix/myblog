"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeFile = void 0;
var fs_1 = require("fs");
/**
 * 将obj序列化后存储到path中
 */
function storeFile(path, obj) {
    (0, fs_1.writeFileSync)(path, JSON.stringify(obj));
}
exports.storeFile = storeFile;
