import { writeFileSync } from "fs";

/**
 * 将obj序列化后存储到path中
 */
export function storeFile(path: string, obj: {}) {
  writeFileSync(path, JSON.stringify(obj));
}
