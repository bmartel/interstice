import yargs from 'yargs-parser';
import { generate } from './css.js';

export { generate };

export const run = async args => {
  await generate(yargs(args.slice(2)));
};
