import { Filer } from "./utils";

export const Entry = (directory, language) =>
  new Filer(`./${directory}`)
    .local()
    .join(`index.${language}`)
    .read()
    .ignoreError()
    .unlessEmpty((f) =>
      f.run(() => f.log.cmd(`Using existing migrations index`))
    )
    .ifEmpty((f) =>
      f
        .set(`./${directory}`)
        .dir()
        .ignoreError()
        .internal()
        .set(`./stubs/migrate/init.${language}`)
        .read()
        .local()
        .join(`index.${language}`)
        .write()
        .ifError((ff) => ff.run(() => ff.log.error(ff.error)))
        .ifSuccess((ff) =>
          ff.run(() =>
            ff.log.success(`Created migration index '${ff.current}'`)
          )
        )
    )
    .ignoreError();
