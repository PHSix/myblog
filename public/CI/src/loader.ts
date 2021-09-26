import {readFileSync} from 'fs'
import {resolve} from 'path'
const configPath = resolve(__dirname, '../../config.json')

export function loadConfig() {
  const data = readFileSync(configPath);
  return JSON.parse(data.toString());
}