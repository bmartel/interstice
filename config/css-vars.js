const fs = require('fs');
const path = require('path');
const convert = require('./convert');
const {
  theme: { colors },
} = require('tailwindcss/defaultConfig');

const moduleNamesOverride = {};
const config = {
  namespace: 't',

  tailwind: {
    theme: {
      extend: {
        colors: {
          primary: colors.purple['500'],
          accent: colors.teal['500'],
          error: colors.red['500'],
        },
      },
      transition: {
        all: '0.25s all ease-in-out',
        opacity: '0.25s opacity ease-in-out',
        color: '0.25s color ease-in-out',
        shadow: '0.25s box-shadow ease-in-out',
        border: '0.25s border ease-in-out',
        bg: '0.25s background ease-in-out',
      },
    },
  },

  components: {
    'font-size': 'text-base',
    'font-family': 'font-sans',
    margin: 'm-3',
    'margin-top': 'm-3',
    'margin-right': 'm-3',
    'margin-bottom': 'm-3',
    'margin-left': 'm-3',
    padding: 'p-3',
    gap: 'p-1',
    'padding-top': 'p-3',
    'padding-right': 'p-3',
    'padding-bottom': 'p-3',
    'padding-left': 'p-3',
    'border-size': 'border',
    'border-color': 'color-gray-500',
    'outline-size': 'border-2',
    'background-color': 'color-white',
    color: 'color-black',
    transition: 'transition-all',
  },

  componentsDark: {
    'background-color': 'color-black',
    color: 'color-white',
  },
};

const processVars = (opts = {}) => {
  const options = {
    moduleNamesOverride,
    config,
    output: path.resolve(__dirname, '..', 'src/vars.css'),
    ...opts,
  };

  fs.writeFileSync(options.output, convert(options.moduleNamesOverride, options.config));
};

if (process.argv.length > 1) {
  processVars();
}

module.exports = processVars;
