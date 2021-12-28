import * as init from "./init";
import * as generate from "./generate";

export const command = "migration <action>";

export const aliases = ["migrate"];

export const describe = "Manage set of migrations";

export const builder = (yargs) => yargs.command(init).command(generate);

export const handler = function () {};
