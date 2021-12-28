import { Filer } from "./utils";

export const Config = () =>
  new Filer("./capsular.json")
    .local()
    .read()
    .ignoreError()
    .unlessEmpty((f) => f.fromJson())
    .ifEmpty((f) =>
      f
        .internal()
        .set("./stubs/config.json")
        .read()
        .local()
        .set("./capsular.json")
        .write()
        .ifError((ff) =>
          ff.run(() => ff.log.success(`Generated config file capsular.json`))
        )
        .fromJson()
    );
