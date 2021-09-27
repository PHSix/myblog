import { resolve } from "path";
import { loadConfig } from "./loader";

import { fetchIssues, fetchInit, fetchArticles, Article } from "./fetch";
import { storeFile } from "./writer";
const STORE_PATH = resolve(__dirname, "../../data.json");
const ARTICLES_PATH = resolve(__dirname, "../../articles");

async function main() {
  const user = loadConfig();
  fetchInit(user, process.argv[2]);
  // 1. 取得issues列表
  console.log("正在获取整个issues列表");
  const issuesList = await fetchIssues();
  console.log("获取issues列表成功");
  // 2. 写入到data.json文件
  storeFile(STORE_PATH, issuesList);
  // 3. 取的每一个issues的详细信息
  console.log("正在获取所有issue");
  let articles: Article[] = [];
  let queue: Promise<any>[] = [];
  issuesList.forEach(async (issue) => {
    queue.push(fetchArticles(issue.id));
  });
  await Promise.all(queue).then((res: Article[]) => {
    articles = res;
  });
  console.log("获取成功");
  // 4. 将详细信息写入articles文件夹里面
  console.log("正在写入文件");
  for (let element of articles) {
    storeFile(`${ARTICLES_PATH}/${element.id}.json`, element);
  }
  console.log("文件写入完毕...");
}

main();
