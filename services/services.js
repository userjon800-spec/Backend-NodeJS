import chalk from "chalk";
import dedent from "dedent-js";
let printError = (err) => {
  console.log(chalk.red("Error ") + err);
};
let printSucces = (suc) => {
  console.log(chalk.green("Succes ") + suc);
};
let printHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan("HELP")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token
`);
};
export { printError, printSucces, printHelp };
