'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var yargs = _interopDefault(require('yargs-parser'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var _ = _interopDefault(require('lodash'));
var tailwindConfig = _interopDefault(require('tailwindcss/defaultConfig'));
var resolveConfig = _interopDefault(require('tailwindcss/resolveConfig'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

const convert = (customVariableNames = {}, opts = {}) => {
  const varModules = _objectSpread2({
    colors: 'color',
    screens: '',
    fontFamily: 'font',
    fontSize: 'text',
    fontWeight: 'font',
    lineHeight: 'leading',
    letterSpacing: 'tracking',
    backgroundSize: 'bg',
    borderWidth: 'border',
    borderRadius: 'round',
    width: 'w',
    height: 'h',
    minWidth: 'min-w',
    minHeight: 'min-h',
    maxWidth: 'max-w',
    maxHeight: 'max-h',
    padding: 'p',
    margin: 'm',
    boxShadow: 'shadow',
    zIndex: 'z',
    opacity: 'opacity',
    transition: 'transition'
  }, customVariableNames);

  const options = _objectSpread2({
    namespace: '',
    tailwind: tailwindConfig,
    components: {},
    componentsDark: {},
    postcssEachVariables: false
  }, opts);

  const overrideConfig = resolveConfig(options.tailwind);

  const config = keyPath => _.get(overrideConfig, keyPath) || {};

  const rootObj = {};
  Object.keys(varModules).forEach(key => {
    if (key === 'colors' && varModules.colors || key === 'screens' && varModules.screens !== false || varModules[key]) {
      const keyValue = config(`theme.${key}`);
      const names = Object.keys(keyValue);
      const modulePrefix = varModules[key];

      if (options.postcssEachVariables) {
        const selectedKey = ['colors', 'screens', 'fontFamily', 'fontSize'];

        if (selectedKey.includes(key)) {
          if (key === 'colors') {
            const colorsArr = [];
            names.forEach(colorName => {
              const colorObj = keyValue[colorName];

              if (_.isObject(colorObj)) {
                Object.keys(colorObj).forEach(level => {
                  const fullColorName = `${colorName}-${level}`;
                  colorsArr.push(fullColorName);
                });
              } else {
                colorsArr.push(colorName);
              }
            });
            const varName = `--${options.namespace !== '' ? `${options.namespace}-` : ''}${key !== '' ? key : ''}`;
            rootObj[varName] = colorsArr.toString();
          } else {
            const varName = `--${options.namespace !== '' ? `${options.namespace}-` : ''}${key !== '' ? key : ''}`;
            rootObj[varName] = names.toString();
          }
        }
      }

      names.forEach(name => {
        let varName;
        let value;

        if (key === 'colors' && _.isObject(keyValue[name])) {
          const colorObj = keyValue[name];
          Object.keys(colorObj).forEach(colorKey => {
            varName = `--${options.namespace !== '' ? `${options.namespace}-` : ''}${modulePrefix !== '' ? `${modulePrefix}-` : ''}${name}-${colorKey}`.replace(/-default$/, '');
            value = typeof keyValue[name][colorKey] === 'string' ? keyValue[name][colorKey] : keyValue[name][colorKey].toString();
            rootObj[varName] = value;
          });
        } else if (key === 'screens' && _.isObject(keyValue[name])) {
          const minWEntries = Object.entries(keyValue[name]).filter(e => e[0] === 'min');
          minWEntries.forEach(([, screenValue]) => {
            varName = `--${options.namespace !== '' ? `${options.namespace}-` : ''}${modulePrefix !== '' ? `${modulePrefix}-` : ''}${name.replace('/', '-')}`.replace(/-default$/, '');
            rootObj[varName] = screenValue.toString();
          });
        } else {
          varName = `--${options.namespace !== '' ? `${options.namespace}-` : ''}${modulePrefix !== '' ? `${modulePrefix}-` : ''}${name.replace('/', '-')}`.replace(/-default$/, '');
          value = typeof keyValue[name] === 'string' ? keyValue[name] : keyValue[name].toString();
          rootObj[varName] = value;
        }
      });
    }
  });
  return `:root {\n${_.map(rootObj, (value, key) => `  ${key}: ${value};`).join('\n')}\n}\n\nbody {\n${_.map(options.components, (value, key) => `  --${options.namespace !== '' ? `${options.namespace}-` : ''}${key}: var(--${options.namespace !== '' ? `${options.namespace}-` : ''}${value});`).join('\n')}\n}\n\nbody.dark {\n${_.map(options.componentsDark, (value, key) => `  --${options.namespace !== '' ? `${options.namespace}-` : ''}${key}: var(--${options.namespace !== '' ? `${options.namespace}-` : ''}${value});`).join('\n')}\n}`;
};

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
const generate = async (opts = {}) => {
  const options = _objectSpread2({
    moduleNamesOverride: _objectSpread2({}, moduleNamesOverride, {}, opts.moduleNamesOverride || {}),
    config,
    output: path.resolve(__dirname, '..', '..', '..', '..', 'vars.css')
  }, opts);

  await fs.writeFile(options.output, convert(options.moduleNamesOverride, options.config), () => {});
};

const run = async args => {
  await generate(yargs(args.slice(2)));
};

exports.generate = generate;
exports.run = run;
//# sourceMappingURL=index.js.map
