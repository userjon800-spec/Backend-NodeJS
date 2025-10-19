import getArgs from "./helpers/args.js";
import { getKeyVal, saveKeyVal, TOKEN_DICTIONARY } from "./services/storage.js";
import { printError, printHelp, printSucces, printWeather,} from "./services/services.js";
import { getIcon, getWeather } from "./services/api.js";
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
let saveCity = async (city) => {
  if (!city.length) {
    printError("Shaxar topilmadi");
    return;
  }
  try {
    await saveKeyVal(TOKEN_DICTIONARY.city, city);
    printSucces("To'g'ri");
  } catch (error) {
    printError(error.message);
  }
};
let Forcast = async () => {
  try {
    let city = process.env.CITY ?? (await getKeyVal(TOKEN_DICTIONARY.city));
    let response = await getWeather(city);
    printWeather(response, getIcon(response.weather[0].icon));
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("Shaxar topilmadi");
    } else if (error?.response?.status === 401) {
      printError("Token xato");
    } else {
      printError(error.message);
    }
  }
};
let startCli = () => {
  let args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  Forcast();
};
startCli();