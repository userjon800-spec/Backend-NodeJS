import { getKeyVal, TOKEN_DICTIONARY } from "./storage.js";
import axios from "axios";
const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "🌞";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};
let getWeather = async (city) => {
  let token = process.env.TOKEN ?? (await getKeyVal(TOKEN_DICTIONARY.token));
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
  return data;
};
export { getWeather, getIcon };