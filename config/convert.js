const _ = require('lodash');
const tailwindConfig = require('tailwindcss/defaultConfig');
const resolveConfig = require('tailwindcss/resolveConfig');

module.exports = (customVariableNames = {}, opts = {}) => {
  const varModules = {
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
    transition: 'transition',
    ...customVariableNames,
  };

  const options = {
    namespace: '',
    tailwind: tailwindConfig,
    components: {},
    componentsDark: {},
    postcssEachVariables: false,
    ...opts,
  };

  const overrideConfig = resolveConfig(options.tailwind);

  const config = keyPath => _.get(overrideConfig, keyPath) || {};

  const rootObj = {};

  Object.keys(varModules).forEach(key => {
    if (
      (key === 'colors' && varModules.colors) ||
      (key === 'screens' && varModules.screens !== false) ||
      varModules[key]
    ) {
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
            const varName = `--${options.namespace !== '' ? `${options.namespace}-` : ''}${
              key !== '' ? key : ''
            }`;
            rootObj[varName] = colorsArr.toString();
          } else {
            const varName = `--${options.namespace !== '' ? `${options.namespace}-` : ''}${
              key !== '' ? key : ''
            }`;
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
            varName = `--${options.namespace !== '' ? `${options.namespace}-` : ''}${
              modulePrefix !== '' ? modulePrefix : ''
            }-${name}-${colorKey}`.replace(/-default$/, '');
            value =
              typeof keyValue[name][colorKey] === 'string'
                ? keyValue[name][colorKey]
                : keyValue[name][colorKey].toString();
            rootObj[varName] = value;
          });
        } else if (key === 'screens' && _.isObject(keyValue[name])) {
          const minWEntries = Object.entries(keyValue[name]).filter(e => e[0] === 'min');

          minWEntries.forEach(([, screenValue]) => {
            varName = `--${options.namespace !== '' ? `${options.namespace}` : ''}${
              modulePrefix !== '' ? modulePrefix : ''
            }${name !== 'default' ? `-${name.replace('/', '-')}` : ''}`;
            rootObj[varName] = screenValue.toString();
          });
        } else {
          varName = `--${options.namespace !== '' ? `${options.namespace}` : ''}${
            key !== 'screens' ? '-' : ''
          }${modulePrefix !== '' ? modulePrefix : ''}${
            name !== 'default' ? `-${name.replace('/', '-')}` : ''
          }`;
          value = typeof keyValue[name] === 'string' ? keyValue[name] : keyValue[name].toString();
          rootObj[varName] = value;
        }
      });
    }
  });

  return `:root {\n${_.map(rootObj, (value, key) => `  ${key}: ${value};`).join(
    '\n',
  )}\n}\n\nbody {\n  --${
    options.namespace !== '' ? `${options.namespace}-` : ''
  }theme: 'light';\n${_.map(
    options.components,
    (value, key) =>
      `  --${options.namespace !== '' ? `${options.namespace}-` : ''}${key}: var(--${
        options.namespace !== '' ? `${options.namespace}-` : ''
      }${value});`,
  ).join('\n')}\n}\n\nbody.dark {\n  --${
    options.namespace !== '' ? `${options.namespace}-` : ''
  }theme: 'dark';\n${_.map(
    options.componentsDark,
    (value, key) =>
      `  --${options.namespace !== '' ? `${options.namespace}-` : ''}${key}: var(--${
        options.namespace !== '' ? `${options.namespace}-` : ''
      }${value});`,
  ).join('\n')}\n}`;
};
