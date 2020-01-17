const fs = require('fs');
const path = require('path');
const convert = require('./convert');

const moduleNamesOverride = {};
const config = {
  namespace: 't',

  tailwind: {},

  components: {
    'font-size': 'text-base',
    'font-style': 'font-sans',
    'margin-top': 'm-3',
    'margin-right': 'm-3',
    'margin-bottom': 'm-3',
    'margin-left': 'm-3',
    'padding-top': 'p-3',
    'padding-right': 'p-3',
    'padding-bottom': 'p-3',
    'padding-left': 'p-3',
    'border-size': 'border',
    'border-color': 'color-transparent',
    'background-color': 'color-white',
    'color': 'color-black',
  },

  componentsDark: {
    'background-color': 'color-black',
    'color': 'color-white',
  },

};

const processVars = (opts = {}) => {
  const options = {
    moduleNamesOverride,
    config,
    output: path.resolve(__dirname, '..', 'src/css-vars.css'),
    ...opts,
  }

  fs.writeFileSync(
    options.output,
    convert(options.moduleNamesOverride, options.config),
  );
}

if (process.argv.length > 1) {
  processVars();
}

module.exports  = processVars;
