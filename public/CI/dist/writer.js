"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writerInit = exports.storeFile = void 0;
var fs_1 = require("fs");
/**
 * 将obj序列化后存储到path中
 */
function storeFile(path, obj) {
    (0, fs_1.writeFileSync)(path, JSON.stringify(obj));
}
exports.storeFile = storeFile;
function writerInit(path) {
    try {
        (0, fs_1.statSync)(path);
    }
    catch (err) {
        console.log('未存在articles文件夹，正在创建。。。');
        (0, fs_1.mkdirSync)(path);
        console.log('创建完成...');
    }
}
exports.writerInit = writerInit;
