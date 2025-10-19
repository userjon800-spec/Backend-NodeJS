import getArgs from "./helpers/args.js";
import { saveKeyVal, TOKEN_DICTIONARY } from "./services/storage.js";
import { printError, printHelp, printSucces } from "./services/services.js";
import { getWeather } from "./services/api.js";
let saveToken = async (token) => {
  if (!token.length) {
    printError("Token topilmadi");
    return;
  }
  try {
    await saveKeyVal(TOKEN_DICTIONARY.token, token);
    printSucces("To'g'ri");
  } catch (error) {
    printError(error.message);
  }
};
let startCli = () => {
  let args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getWeather('Uzbekistan')
};

startCli();
