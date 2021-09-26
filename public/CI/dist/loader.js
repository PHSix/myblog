"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var configPath = (0, path_1.resolve)(__dirname, '../../config.json');
function loadConfig() {
    var data = (0, fs_1.readFileSync)(configPath);
    return JSON.parse(data.toString());
}
exports.loadConfig = loadConfig;
