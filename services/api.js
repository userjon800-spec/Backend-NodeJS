import { getKeyVal, TOKEN_DICTIONARY } from "./storage.js";
import axios from "axios";
let getWeather = async (city) => {
  let token = await getKeyVal(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("Token undefined, -t [API_KEY] for saving token");
  }
  let { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );
  return data
};
export { getWeather };
