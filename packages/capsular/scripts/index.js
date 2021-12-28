//import fs from "fs";
//import path from "path";
//import Listr from "listr";
//import execa from "execa";
//import tmp from "tmp";
import yargs from "yargs";
import { builder as cli } from "./cli";
import { version } from "../package.json";

cli(yargs).version(version).demandCommand().help().argv;
