import fs from "fs";
import path from "path";
import chalk from "chalk";

export const style = {
  error: chalk.bold.red,
  warning: chalk.keyword("orange"),
  success: chalk.greenBright,
  info: chalk.grey,
  header: chalk.bold.underline.hex("#e8e8e8"),
  cmd: chalk.hex("#808080"),
  green: chalk.green,
};

export const VERSION = "_VERSION_";

const resolve = (fileOrDir = "./") => path.resolve(process.cwd(), fileOrDir);
const binPath = path.resolve(__dirname, "../bin");

const resolveInternal = (fileOrDir = "./") => path.resolve(binPath, fileOrDir);

const emptyDir = (dir) => !fs.existsSync(dir) || fs.readdirSync(dir).length < 1;
const isDir = (path) => fs.statSync(path).isDirectory();

const mkdir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const Logger = new Proxy(
  {},
  {
    get(target, prop) {
      if (prop in style) {
        return (msg) => console.log(style[prop](msg));
      }
      if (prop === "log") {
        return console.log;
      }
      return target[prop];
    },
  }
);

export class FilerContent {
  constructor(contents = "") {
    this._contents = contents;
    this._type = typeof contents === "string" ? "string" : "json";
    this._index = 0;
    this._fromIndex = 0;
    this._toIndex = 0;
    this._clipboard = "";
    this._results = "";
    this._error = [];
  }
  get error() {
    return this._error
      .map((err) => (err instanceof Error ? err.message : err.toString()))
      .join("\n");
  }
  set error(err) {
    this._error.push(err);
  }
  get empty() {
    return !this._contents;
  }
  get json() {
    return this._type === "json";
  }
  get data() {
    try {
      if (this.json) {
        return this._contents;
      }
      throw new Error(
        `Only JSON file contents can be directly manipulated through 'data' property.`
      );
    } catch (err) {
      this.error = err;
    }
  }
  set data(value) {
    try {
      if (this.json) {
        this._contents = value;
      }
      throw new Error(
        `Only JSON file contents can be directly manipulated through 'data' property.`
      );
    } catch (err) {
      this.error = err;
    }
  }
  run(callable) {
    try {
      if (typeof callable === "function") {
        callable(this);
      }
    } catch (err) {
      this.error = err;
    }
    return this;
  }
  set(value) {
    this._contents = value;
    this.end();
    return this;
  }
  index(value) {
    this._index = value;
    this._fromIndex = value;
    this._toIndex = value;
    return this;
  }
  end() {
    this.index(this._contents.length - 1);
    return this;
  }
  start() {
    this.index(0);
    return this;
  }
  from() {
    this._fromIndex = this._index;
    return this;
  }
  to() {
    this._toIndex = this._index + this._results.length;
    return this;
  }
  copy() {
    try {
      if (this.json) {
        throw new Error(`Only string file contents can use 'copy' function.`);
      }
      this._clipboard = this._contents.slice(this._fromIndex, this._toIndex);
    } catch (err) {
      this.error = err;
    }

    return this;
  }
  cut() {
    try {
      if (this.json) {
        throw new Error(`Only string file contents can use 'cut' function.`);
      }

      this._clipboard = this._contents.slice(this._fromIndex, this._toIndex);
      this._contents = [
        this._contents.slice(0, this._fromIndex),
        this._contents.slice(this._toIndex),
      ].join("");
      this.index(this._fromIndex);
    } catch (err) {
      this.error = err;
    }

    return this;
  }
  modify(content) {
    try {
      if (this.json) {
        throw new Error(`Only string file contents can use 'modify' function.`);
      }
      this._clipboard = content(new FilerContent(this._clipboard)).toString();
    } catch (err) {
      this.error = err;
    }

    return this;
  }
  paste(overwrite = false) {
    try {
      if (this.json) {
        throw new Error(`Only string file contents can use 'paste' function.`);
      }

      this.insert(this._clipboard, overwrite);
    } catch (err) {
      this.error = err;
    }

    return this;
  }
  find(search) {
    try {
      if (this.json) {
        throw new Error(`Only string file contents can use 'find' function.`);
      }
      const result = this._contents.match(search);
      if (result) {
        this._index = result.index;
        this._results = result.join("");
      } else {
        this._results = "";
      }
    } catch (err) {
      this.error = err;
    }

    return this;
  }
  findLast(search) {
    try {
      if (this.json) {
        throw new Error(
          `Only string file contents can use 'findLast' function.`
        );
      }
      this._index = this._contents.lastIndexOf(search);
      this.results = this.index > -1 ? search : "";
    } catch (err) {
      this.error = err;
    }

    return this;
  }
  insert(content = null, overwrite = false) {
    try {
      if (this.json) {
        throw new Error(`Only string file contents can use 'insert' function.`);
      }
      if (content !== null) {
        if (overwrite) {
          this._contents = content;
          //re-select all
          this.end();
          this._fromIndex = 0;
        } else {
          // set the paste as results
          this._results = content;
          const contentBefore = this._contents.slice(0, this._fromIndex);
          const contentAfter = this._contents.slice(this._toIndex);
          // recalculate selection to the pasted portion
          this.index(this._fromIndex);
          this.to();
          // set the contents in full
          this._contents = [contentBefore, content, contentAfter].join("");
        }
      }
    } catch (err) {
      this.error = err;
    }

    return this;
  }
  replace(search, replacement = "") {
    try {
      if (this.json) {
        throw new Error(
          `Only string file contents can use 'replace' function.`
        );
      }
      this._contents = this._contents.replace(search, replacement);
    } catch (err) {
      this.error = err;
    }

    return this;
  }
  errors() {
    return this._error;
  }
  toString() {
    return this._contents;
  }
}

export class Filer {
  constructor(path = "./") {
    if (path instanceof Filer) {
      this.merge(path);
    } else {
      this._path = path;
      this._internalPath = path;
      this._contents = "";
      this._error = [];
      this._skip = false;
      this._local = true;
    }
    this.log = Logger;
  }
  pause() {
    this._skip = true;
    return this;
  }
  resume() {
    this._skip = false;
    return this;
  }
  ifEmpty(process) {
    if (!this._contents) {
      this.merge(process(new Filer(this)));
    }
    return this;
  }
  unlessEmpty(process) {
    if (this._contents) {
      this.merge(process(new Filer(this)));
    }
    return this;
  }
  ifError(process) {
    if (this._error.length) {
      this.merge(process(new Filer(this)));
    }
    return this;
  }
  ifSuccess(process) {
    if (!this._error.length) {
      this.merge(process(new Filer(this)));
    }
    return this;
  }
  merge(filer) {
    const { _path, _contents, _skip, _error, _local, _internalPath } = filer;
    this._path = _path;
    this._internalPath = _internalPath;
    this._contents = _contents;
    this._error = _error;
    this._local = _local;
    this._skip = _skip;
  }
  local() {
    if (!this._skip) {
      this._local = true;
    }
    return this;
  }
  internal() {
    if (!this._skip) {
      this._local = false;
    }
    return this;
  }
  get error() {
    return this._error
      .map((err) => (err instanceof Error ? err.message : err.toString()))
      .join("\n");
  }
  set error(err) {
    this._error.push(err);
  }
  ignoreError() {
    this._error = [];
    this._skip = false;
    return this;
  }
  join(pathStr) {
    if (!this._skip) {
      try {
        this.current = [...this.current.split("/"), pathStr].join("/");
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  get data() {
    return this._contents;
  }
  get current() {
    return this._local ? this._path : this._internalPath;
  }
  set current(value) {
    if (this._local) {
      this._path = value;
    } else {
      this._internalPath = value;
    }
  }
  set(value) {
    this.current = value;
    return this;
  }
  pop() {
    if (!this._skip) {
      try {
        const parts = this.current.split();
        parts.pop();
        this.current = parts.join("/");
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  read() {
    if (!this._skip) {
      try {
        this._contents = fs.readFileSync(this.toString(), "utf8");
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  write() {
    if (!this._skip) {
      try {
        fs.writeFileSync(this.toString(), this._contents);
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  rm() {
    if (!this._skip) {
      try {
        const path = this.toString();
        if (!this.local) {
          throw new Error(
            `Cannot delete internal paths, '${path}' not removed.`
          );
        }
        if (isDir(path)) {
          fs.rmdirSync(path, { recursive: true });
        } else {
          fs.unlinkSync(path);
        }
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  dir() {
    if (!this._skip) {
      try {
        const dirPath = this.toString();
        if (emptyDir(dirPath)) {
          mkdir(dirPath);
        } else {
          throw new Error(
            `Failed to create dir at path '${dirPath}'. Ensure the path does not already contain a non empty dir.`
          );
        }
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  toJson() {
    if (!this._skip) {
      try {
        this._contents = JSON.stringify(this._contents, null, 2);
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  fromJson() {
    if (!this._skip) {
      try {
        this._contents = JSON.parse(this._contents || "{}");
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  contents(content = "") {
    if (!this._skip) {
      try {
        if (typeof content === "function") {
          const result = content(new FilerContent(this._contents));
          this._error.push(...result.errors());
          this._contents = result.toString();
        } else {
          this._contents = content;
        }
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  run(callable) {
    if (!this._skip) {
      try {
        if (typeof callable === "function") {
          callable(this);
        }
      } catch (err) {
        this.error = err;
        this._skip = true;
      }
    }
    return this;
  }
  toString() {
    return this._local
      ? resolve(this._path)
      : resolveInternal(this._internalPath);
  }
}
