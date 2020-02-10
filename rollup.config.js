import * as fs from 'fs';
import * as path from 'path';
import { createDefaultConfig } from '@open-wc/building-rollup';

// const fs = require('fs');
// const path = require('path');
// const rlp = require('@open-wc/building-rollup');
// const { createDefaultConfig } = rlp;

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

const elementsSourceDir = path.resolve(__dirname, 'src/elements');
const iconsSourceDir = path.resolve(__dirname, 'src/elements/icons');

const config = [];

const elementConfig = (file, dir = '') => {
  const fileConfig = createDefaultConfig({ input: `./src/elements/${dir ? `${dir}/` : ''}${file}` });
  fileConfig.output.dir = `dist${dir ? `/${dir}` : ''}`;
  fileConfig.output.sourcemap = false;
  delete fileConfig.output.dynamicImportFunction;
  fileConfig.output.entryFileNames = '[name].js';
  fileConfig.output.chunkFileNames = '[name].js';
  fileConfig.plugins.pop();
  return fileConfig;
};

config.push(new Promise(resolve => {
  fs.readdir(elementsSourceDir, (err, files) => {
    if (err) {
      resolve(null);
    } else {
      resolve(files.filter(f => /\.js/.test(f)).map(f => elementConfig(f)));
    }
  });
}));

config.push(new Promise(resolve => {
  fs.readdir(iconsSourceDir, (err, files) => {
    if (err) {
      resolve(null);
    } else {
      resolve(files.filter(f => !/_/.test(f)).filter(f => /\.js/.test(f)).map(f => elementConfig(f, `icons`)));
    }
  });
}));

export default Promise.all(config).then(c => c.reduce((cfg, cur) => [...cfg, ...cur], []));
