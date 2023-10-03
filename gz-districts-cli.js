import { Task } from './types.js';
import { Either } from './types.js';
import { map, compose } from 'ramda';

const { Right, Left, fromNullable, tryCatch } = Either;

const url = 'http://localhost:3500/guangzhou';

const fetchDistricts = url =>
  Task((rej, res) =>
    fetch(url)
      .then(res => res.json())
      .then(res)
      .catch(rej),
  );
const showDistrict = x => x.district;

const listDistricts = response =>
  response.forEach(item =>
    console.log(
      `The city of ${item.district} (${item['中文']}) has a population ${item.population}.`,
    ),
  );

//====================================

fetchDistricts(url).fork(console.log, listDistricts);
