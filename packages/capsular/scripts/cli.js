import * as migrate from "./migrate";
import * as init from "./migrate/init";

export const builder = (yargs) => yargs.command(init).command(migrate);
