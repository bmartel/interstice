import fs from 'fs';
import path from 'path';
import { convert } from './convert.js';
const moduleNamesOverride = {};
const config = {
  namespace: '',
  tailwind: {
    theme: {
      extend: {},
      transition: {
        all: '0.2s all ease-in-out',
        opacity: '0.2s opacity ease-in-out',
        color: '0.2s color ease-in-out',
        shadow: '0.2s box-shadow ease-in-out',
        border: '0.2s border ease-in-out',
        bg: '0.2s background ease-in-out'
      }
    }
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
    'color-primary': 'color-purple-600',
    'color-accent': 'color-teal-600',
    'color-success': 'color-green-600',
    'color-error': 'color-red-600',
    'label-color': 'color-gray-800',
    'label-size': 'text-base',
    'input-color': 'color-gray-900',
    'input-bg-color': 'color-white',
    'input-placeholder-color': 'color-gray-600',
    'message-size': 'text-sm',
    transition: 'transition-all'
  },
  componentsDark: {
    'background-color': 'color-black',
    color: 'color-white',
    'label-color': 'color-gray-100',
    'message-color': 'color-gray-300',
    'input-color': 'color-white',
    'input-bg-color': 'color-gray-900'
  }
};
export const generate = async (opts = {}) => {
  const options = {
    moduleNamesOverride: { ...moduleNamesOverride,
      ...(opts.moduleNamesOverride || {})
    },
    config,
    output: path.resolve(__dirname, '..', '..', '..', '..', 'vars.css'),
    ...opts
  };
  await fs.writeFile(options.output, convert(options.moduleNamesOverride, options.config), () => {});
};