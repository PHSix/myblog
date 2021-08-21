import { Resume } from "../config";
import axios from "axios";
const BASE_URL = "https://api.github.com";

const templete = (user, repo) => {
  return {
    // 所有的文章信息
    issues: function () {
      return `${BASE_URL}/repos/${user}/${repo}/issues`;
    },
    // 个人信息
    userMsg: () => {
      return `${BASE_URL}/users/${user}`;
    },
    // 所有的github仓库
    repos: () => {
      return `${BASE_URL}/users/${user}/repos`;
    },
    // 获取单个issue信息
    issue: function (num) {
      return `${BASE_URL}/repos/${user}/${repo}/issues/${num}`;
    },
    // 文章comments内容
    comments: (num) => {
      return `${BASE_URL}/repos/${user}/${repo}/issues/${num}/comments`;
    },
  };
};

export const msg = templete(Resume.username, Resume.repo);

export default {
  /*
   * 获取所有的github仓库
   * */
  getRepos: () => {
    return axios.get(msg.repos());
  },
  /*
   * 获取github个人信息
   * */
  getUserMsg: () => {
    return axios.get(msg.userMsg());
  },
  /*
   * 获取到数据并返回数据部分
   * @params: page 当前截断到第几页
   * */
  getIssuesList: () => {
    return axios.get(msg.issues());
  },
  /*
   * 获取单个issue的信息
   */
  getIssue: (num) => {
    return axios.get(msg.issue(num));
  },
  /*
   * 获取commment内容
   * */
  getComments: (num) => {
    return axios.get(msg.comments(num));
  },
};
