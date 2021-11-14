// import { Resume } from "../config";
import axios from "axios";
// const BASE_URL = "https://api.github.com";

// const templete = (user, repo) => {
//   return {
//     // 所有的文章信息
//     issues: function () {
//       return `${BASE_URL}/repos/${user}/${repo}/issues`;
//     },
//     // 个人信息
//     userMsg: () => {
//       return `${BASE_URL}/users/${user}`;
//     },
//     // 所有的github仓库
//     repos: () => {
//       return `${BASE_URL}/users/${user}/repos`;
//     },
//     // 获取单个issue信息
//     issue: function (num) {
//       return `${BASE_URL}/repos/${user}/${repo}/issues/${num}`;
//     },
//     // 文章comments内容
//     comments: (num) => {
//       return `${BASE_URL}/repos/${user}/${repo}/issues/${num}/comments`;
//     },
//   };
// };

// export const msg = templete(Resume.username, Resume.repo);

export default {
  /*
   * 获取所有的github仓库
   * */
  getList: () => {
    return axios.get("/api/entries");
  },
  /*
   * 获取github个人信息
   * */
  getUserMsg: () => {
    return axios.get("/api/user");
  },
  /*
   * 获取单个issue的信息
   */
  getArticle: (num) => {
    return axios.get(`/api/articles/${num}`);
  },
};
