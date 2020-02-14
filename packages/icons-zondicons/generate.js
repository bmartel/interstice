const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const iconsSourcePath = iconFile => path.resolve(__dirname, `svgs/${iconFile}`);
const iconsSourceDir = path.resolve(__dirname, 'svgs');
const iconsTargetPath = iconName => path.resolve(__dirname, `src/${iconName}.js`);
const iconsStoryPath = path.resolve(__dirname, `stories/icon.stories.mdx`);


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
            let svgData = data.replace(/(<svg([^>]+)>)/ig, '');
            svgData = svgData.replace('id="icon-shape"', '');
            svgData = svgData.replace('</svg>', '');

            const svgIcon = `export default '${svgData}';`

            fs.writeFile(iconsTargetPath(iconName), svgIcon, fileWriteErr => { 
              if (fileWriteErr) {
                console.log(fileWriteErr); //eslint-disable-line
                resolve(null);
              } else {
                resolve(iconName);
              }
            });
          } else {
            console.log(fileErr);// eslint-disable-line
            resolve(null);
          }
        });
      }));
    });

  
  Promise.all(availableIcons).then(iconList => {
    const existingIcons = iconList.filter(i => i);

    fs.writeFile(iconsTargetPath('_icons'), `export default [${existingIcons.map(i => `'${i}'`).join(',')}];`, iconListErr => {
      if (iconListErr) {
        console.log(iconListErr); //eslint-disable-line
      }
    });
    const iconsIndex = `${existingIcons.map(i => `export { default as ${_.startCase(i).replace(/ /g, '')} } from './${i}.js';`).join('\n')}`;
    fs.writeFile(path.resolve(__dirname, 'src/index.js'), iconsIndex, iconListErr => {
      if (iconListErr) {
        console.log(iconListErr); //eslint-disable-line
      }
    });


    const iconStory = `${`
import { Story, Preview, Meta, Props, html } from '@open-wc/demoing-storybook';

import '../packages/icon/src/index.js';

<Meta 
  title="Icon"
  parameters={{
    options: { selectedPanel: "storybookjs/knobs/panel" }
  }}
/>

# Icon 

A component for displaying a icon with some styling and behaviour improvements.

## Features:

- a
- b
- ...

## How to use

### Installation
`
+
"\n```bash\n yarn add interstice\n```\n\n```js\n  import { Icon } from 'interstice/icons/${iconName}';\n```"
+
`
## API

<Props of="i-icon" />

## Variations

`}${

existingIcons.map(i => {

  const IconStoryName = _.startCase(i).replace(/ /g, '');

return `${`
###### ${IconStoryName}

<Story name="${IconStoryName}">
`
+
" {html`\n <i-icon name=\"" + i + "\""}></i-icon>\n \`}\n </Story>`;
}).join('\n')}`

    fs.writeFile(iconsStoryPath, iconStory, iconStoryErr => {
      if (iconStoryErr) {
        console.log(iconStoryErr); //eslint-disable-line
      }
    });
  });
})

