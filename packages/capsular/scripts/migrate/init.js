import { Config } from "../config";
import { Entry } from "../entry";

export const command = "initiliaze [name] [lang]";

export const aliases = ["init", "initialise"];

export const describe =
  "Initialize a capsular.json config file and migrations directory with [name] using [lang]";

export const builder = (yargs) =>
  yargs.default("name", "migrations").default("lang", "ts");

export const handler = function (argv) {
  let { name, lang } = argv;

  const config = Config();

  if (name && name !== "migrations") {
    config
      .contents((content) => {
        content.data.directory = name;
        return content;
      })
      .local()
      .toJson()
      .write()
      .fromJson()
      .ifError((f) => f.run(() => f.log.error(f.error)))
      .ifSuccess((f) =>
        f.run(() => f.log.success(`Updated directory field in capsular.json`))
      )
      .ignoreError();
  }

  if (lang && lang !== "ts") {
    config
      .contents((content) => {
        content.data.language = lang;
        return content;
      })
      .local()
      .toJson()
      .write()
      .fromJson()
      .ifError((f) => f.run(() => f.log.error(f.error)))
      .ifSuccess((f) =>
        f.run(() => f.log.success(`Updated language field in capsular.json`))
      )
      .ignoreError();
  }

  const { directory, language } = config.data;

  const entry = Entry(directory, language);

  return {
    config,
    entry,
  };
};
