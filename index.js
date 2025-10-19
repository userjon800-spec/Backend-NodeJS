import getArgs from "./helpers/args.js";
import { printError, printHelp, printSucces } from "./services/services.js";
let startCli = () => {
  let args = getArgs(process.argv);
  console.log(args);
  printError("Xato");
  printSucces("To'g'ri");
  if (args.h) {
    printHelp()
  }
  if (args.s) {
  }
  if (args.t) {
  }
  // result
};

startCli();
