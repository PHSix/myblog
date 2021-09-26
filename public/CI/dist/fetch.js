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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchInit = exports.fetchArticles = exports.fetchIssues = void 0;
var axios_1 = __importDefault(require("axios"));
var BASE_URL = "https://api.github.com";
var TOKEN = "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";
var axiosReq = axios_1.default.create({
    headers: {
        Authorization: "token " + TOKEN,
    },
});
var username = null;
var repo = null;
function fetchIssues() {
    return __awaiter(this, void 0, void 0, function () {
        var req, res, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axiosReq.get(BASE_URL + "/repos/" + username + "/" + repo + "/issues")];
                case 1:
                    req = (_a.sent()).data;
                    res = [];
                    for (item in req) {
                        res.push({
                            created_at: req[item].created_at,
                            title: req[item].title,
                            labels: req[item].labels,
                            id: req[item].number,
                        });
                    }
                    return [2 /*return*/, res];
            }
        });
    });
}
exports.fetchIssues = fetchIssues;
function fetchArticles(num) {
    return __awaiter(this, void 0, void 0, function () {
        var reqIssue, reqComment, article;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    reqIssue = axiosReq.get(BASE_URL + "/repos/" + username + "/" + repo + "/issues/" + num);
                    reqComment = axiosReq.get(BASE_URL + "/repos/" + username + "/" + repo + "/issues/" + num + "/comments");
                    article = {};
                    return [4 /*yield*/, Promise.all([reqIssue, reqComment]).then(function (_a) {
                            var issue = _a[0], comments = _a[1];
                            // issue的data
                            issue = issue.data;
                            // comment的data
                            comments = comments.data;
                            article.author = issue.user.login;
                            article.id = issue.number;
                            article.title = issue.title;
                            article.created_at = issue.created_at;
                            article.body = [issue.body];
                            comments.forEach(function (element) {
                                article.body.push(element.body);
                            });
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, article];
            }
        });
    });
}
exports.fetchArticles = fetchArticles;
function fetchInit(user) {
    username = user.username;
    repo = user.repo;
}
exports.fetchInit = fetchInit;
