import { Task } from './types.js';
import chalk from 'chalk';
import { compose } from 'ramda';

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  toString: () => `Right(${x})`,
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  toString: () => `Left(${x})`,
});

const fromNullable = x => (x != null ? Right(x) : Left(null));

const tryCatch = f => {
  try {
    return Right(f());
  } catch (err) {
    return Left(err);
  }
};

const toJSON = x => x.json();
const fetchIt = url =>
  Task((rej, res) => fetch(url).then(toJSON).then(res).catch(rej));

const getMovementNames = url => fetchIt(url).map(response => response);

const logRed = compose(console.log, chalk.red);
const logBlue = compose(console.log, chalk.blueBright);
// Add chalk
const listMovements = response =>
  response.forEach(item =>
    fromNullable(item.portuguese).fold(
      () => logRed('missing portuguese'),
      logBlue,
    ),
  );
//========================================================
getMovementNames('http://192.168.1.3:3500/movement').fork(
  console.error,
  listMovements,
);
