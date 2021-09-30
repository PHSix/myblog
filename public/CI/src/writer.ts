import { writeFileSync, statSync, mkdirSync, mkdir } from "fs";

/**
 * 将obj序列化后存储到path中
 */
export function storeFile(path: string, obj: {}) {
  writeFileSync(path, JSON.stringify(obj));
}

export function writerInit(path: string) {
  try {
    statSync(path);
  } catch (err) {
    console.log('未存在articles文件夹，正在创建。。。')
    mkdirSync(path);
    console.log('创建完成...')
  }
}
