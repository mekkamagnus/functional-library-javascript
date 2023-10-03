import { curry, compose } from './support.js';

const map = curry((f, xs) => xs.map(f));

const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const split = curry((target, str) => str.split(target));

const replace = curry((target, sub, str) => str.split(target).join(sub));

const toLower = curry(str => str.toLowerCase());

const intercalate = curry((str, xs) => xs.join(str));

const dasherize = compose(
  intercalate('_'),
  trace('After toLower: '),
  map(toLower),
  split(' '),
  replace(/\s{2,}/gi, ' '),
);

console.log(dasherize('On my way to Beijing'));
// const result = 'On my way to Beijing';
// console.log(split(result, ' '));
