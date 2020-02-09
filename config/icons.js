const fs = require('fs');
const path = require('path');

const iconsSourcePath = iconFile => path.resolve(__dirname, '..', `icons/${iconFile}`);
const iconsSourceDir = path.resolve(__dirname, '..', 'icons');
const iconsTargetPath = iconName => path.resolve(__dirname, '..', `src/elements/icons/${iconName}.js`);


fs.readdir(iconsSourceDir, (err, files) => {
  const availableIcons = [];
  if (err) {
    throw err;
  }

    files.forEach(file => {
      if (!/\.svg/.test(file)) {
        return;
      }
      const iconName = file.replace('.svg', '');

      availableIcons.push(new Promise(resolve => {
        fs.readFile(iconsSourcePath(file), {encoding: 'utf-8'}, (fileErr, data) => {
          if (!fileErr) {
            let svgData = data.replace('<svg', '<svg fill="currentColor" ...=${spread(props)}');
            svgData = svgData.replace('id="icon-shape"', 'fill="currentColor"');

            const svgElement = "\nimport { html } from 'lit-element';\nimport { spread } from '@open-wc/lit-helpers';\n\nexport default (props = {}) => html`\n" + `  ${svgData}` + "`";

            fs.writeFile(iconsTargetPath(iconName), svgElement, err => {
              if (err) {
                console.log(err);
                resolve(null);
              } else {
                resolve(iconName);
              }
            });
          } else {
            console.log(fileErr);
          }
          resolve(null);
        });
      }));
    });

  
  Promise.all(availableIcons).then(iconList => {
    fs.writeFile(iconsTargetPath('icons-list'), `export default [${iconList.filter(i => i).map(i => `'${i}'`).join(',')}];`, err => {
      if (err) {
        console.log(err);
      }
    });
  });
})
