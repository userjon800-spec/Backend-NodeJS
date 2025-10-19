import os from "os";
import path from "path";
import fs from "fs";
let TOKEN_DICTIONARY = { token: "token", city: "city" };
let filePath = path.join(os.homedir(), "weather-data.json");
let saveKeyVal = async (key, val) => {
  let data = {};
  if (await isExist(filePath)) {
    let file = await fs.promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = val;
  await fs.promises.writeFile(filePath, JSON.stringify(data));
};
let getKeyVal = async (key) => {
  if (await isExist(filePath)) {
    let file = await fs.promises.readFile(filePath);
    let data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};
let isExist = async (path) => {
  try {
    await fs.promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

export { saveKeyVal, getKeyVal,TOKEN_DICTIONARY };
