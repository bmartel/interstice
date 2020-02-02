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
      extend: {},
      transition: {
        all: '0.2s all ease-in-out',
        opacity: '0.2s opacity ease-in-out',
        color: '0.2s color ease-in-out',
        shadow: '0.2s box-shadow ease-in-out',
        border: '0.2s border ease-in-out',
        bg: '0.2s background ease-in-out',
      },
    },
  },

  components: {
    'font-size': 'text-base',
    'font-family': 'font-sans',
    leading: 'leading-normal',
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
    'color-primary': 'color-purple-500',
    'color-accent': 'color-teal-500',
    'color-success': 'color-green-500',
    'color-error': 'color-red-500',
    'label-color': 'color-gray-800',
    'label-size': 'text-base',
    'input-color': 'color-gray-900',
    'input-bg-color': 'color-white',
    'input-placeholder-color': 'color-gray-600',
    'message-size': 'text-sm',
    transition: 'transition-all',
  },

  componentsDark: {
    'background-color': 'color-black',
    color: 'color-white',
    'label-color': 'color-gray-100',
    'message-color': 'color-gray-300',
    'input-color': 'color-white',
    'input-bg-color': 'color-gray-900',
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
