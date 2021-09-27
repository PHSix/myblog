"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var loader_1 = require("./loader");
var fetch_1 = require("./fetch");
var writer_1 = require("./writer");
var STORE_PATH = (0, path_1.resolve)(__dirname, "../../data.json");
var ARTICLES_PATH = (0, path_1.resolve)(__dirname, "../../articles");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var user, issuesList, articles, queue, _i, articles_1, element;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = (0, loader_1.loadConfig)();
                    (0, fetch_1.fetchInit)(user, process.argv[2]);
                    // 1. 取得issues列表
                    console.log("正在获取整个issues列表");
                    return [4 /*yield*/, (0, fetch_1.fetchIssues)()];
                case 1:
                    issuesList = _a.sent();
                    console.log("获取issues列表成功");
                    // 2. 写入到data.json文件
                    (0, writer_1.storeFile)(STORE_PATH, issuesList);
                    // 3. 取的每一个issues的详细信息
                    console.log("正在获取所有issue");
                    articles = [];
                    queue = [];
                    issuesList.forEach(function (issue) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            queue.push((0, fetch_1.fetchArticles)(issue.id));
                            return [2 /*return*/];
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(queue).then(function (res) {
                            articles = res;
                        })];
                case 2:
                    _a.sent();
                    console.log("获取成功");
                    // 4. 将详细信息写入articles文件夹里面
                    console.log("正在写入文件");
                    for (_i = 0, articles_1 = articles; _i < articles_1.length; _i++) {
                        element = articles_1[_i];
                        (0, writer_1.storeFile)(ARTICLES_PATH + "/" + element.id + ".json", element);
                    }
                    console.log("文件写入完毕...");
                    return [2 /*return*/];
            }
        });
    });
}
main();
