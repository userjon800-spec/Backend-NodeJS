import chalk from "chalk";
import dedent from "dedent-js";
let printError = (err) => {console.log(chalk.red("Error ") + err)};
let printSucces = (suc) => {console.log(chalk.green("Succes ") + suc)};
let printHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan("HELP")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token
`);
};
const printWeather = (response, icon) => {
  console.log(dedent`
		${chalk.bgYellowBright("WEATHER")} City weather ${response.name}
		${icon}  ${response.weather[0].description}
		Temperature: ${response.main.temp} (feels like ${response.main.feels_like})
		Humidity: ${response.main.humidity}%
		Wind speed: ${response.wind.speed}km/s
	`);
};
export { printError, printSucces, printHelp, printWeather };