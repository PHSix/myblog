import axios, { AxiosInstance } from "axios";
interface User {
  username: string;
  repo: string;
}

interface ListDataItem {
  created_at: string;
  labels: any[];
  id: number;
  title: string;
}
export interface Article {
  title: string;
  id: number;
  body: string[];
  created_at: string;
  author: string;
}
const BASE_URL = "https://api.github.com";
let axiosReq: AxiosInstance;
let username = null;
let repo = null;

export async function fetchIssues(): Promise<ListDataItem[]> {
  const req = (
    await axiosReq.get(`${BASE_URL}/repos/${username}/${repo}/issues`)
  ).data;
  const res: ListDataItem[] = [];
  for (let item in req) {
    res.push({
      created_at: req[item].created_at,
      title: req[item].title,
      labels: req[item].labels as string[],
      id: req[item].number,
    });
  }
  return res;
}

export async function fetchArticles(num: number): Promise<Article> {
  const reqIssue = axiosReq.get(
    `${BASE_URL}/repos/${username}/${repo}/issues/${num}`
  );
  const reqComment = axiosReq.get(
    `${BASE_URL}/repos/${username}/${repo}/issues/${num}/comments`
  );
  let article: any = {};
  await Promise.all([reqIssue, reqComment]).then(([issue, comments]: any[]) => {
    // issue的data
    issue = issue.data;
    // comment的data
    comments = comments.data;
    article.author = issue.user.login;
    article.id = issue.number;
    article.title = issue.title;
    article.created_at = issue.created_at;
    article.body = [issue.body];
    comments.forEach((element) => {
      article.body.push(element.body);
    });
  });
  return article;
}

export function fetchInit(user: User, githubToken: string) {
  username = user.username;
  repo = user.repo;
  axiosReq = axios.create({
    headers: {
      Authorization: `Bearer ${githubToken}`,
    },
  });
}
