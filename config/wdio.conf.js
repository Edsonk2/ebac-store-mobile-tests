import { localConf } from "./local.conf.js";
import { sauceConf } from "./sauce.conf.js";
import { browserstackConf } from "./browserstack.conf.js";

import "dotenv/config";

function getConfig() {
  switch (process.env.ENVIRONMENT) {
    case "local":
      return localConf;

    case "saucelabs":
      return sauceConf;

    case "browserstack":
      return browserstackConf;

    default:
      throw new Error(`ENVIRONMENT inválido: ${process.env.ENVIRONMENT}`);
  }
}

export const config = getConfig();
