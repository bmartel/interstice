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
            let svgData = data.replace('<svg', 'html`<svg fill="currentColor" ...=${spread(this.iconProps())}'); //eslint-disable-line
            svgData = svgData.replace('id="icon-shape"', 'fill="currentColor"');
            svgData = svgData.replace('</svg>', '</svg>`;');

            const svgIcon = `
import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import { Icon as BaseIcon } from './_base.js';

/**
 * @element z-icon-${iconName}
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

export class Icon extends BaseIcon {
  render() {
    return ${svgData}
  }
}

customElements.define('z-icon-${iconName}', Icon);`;

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

    // fs.writeFile(iconsTargetPath('_icons-list'), `export default [${existingIcons.map(i => `'${i}'`).join(',')}];`, iconListErr => {
    //   if (iconListErr) {
    //     console.log(iconListErr); //eslint-disable-line
    //   }
    // });
    const iconsIndex = `${existingIcons.map(i => `export { Icon as ${_.startCase(i).replace(/ /g, '')}Icon } from './src/${i}.js';`).join('\n')}`;
    fs.writeFile(path.resolve(__dirname, 'index.js'), iconsIndex, iconListErr => {
      if (iconListErr) {
        console.log(iconListErr); //eslint-disable-line
      }
    });


    const iconStory = `${`
import { Story, Preview, Meta, Props, html } from '@open-wc/demoing-storybook';

import '../index.js';

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

<Props of="z-icon" />

## Variations

`}${

existingIcons.map(i => {

  const IconStoryName = _.startCase(i).replace(/ /g, '');

return `${`
###### ${IconStoryName}

<Story name="${IconStoryName}">
`
+
" {html`\n <z-icon-"}${ i }></z-${ i }>\n \`}\n </Story>`;
}).join('\n')}`

    fs.writeFile(iconsStoryPath, iconStory, iconStoryErr => {
      if (iconStoryErr) {
        console.log(iconStoryErr); //eslint-disable-line
      }
    });
  });
})

