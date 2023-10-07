const compose = (f, g) => x => f(g(x));
const tail = array => array.slice(1 - array.length);
const reverse = array => array.reverse();

// Functionally: In terms of reverse and tail
// Imperative
// const init = colors.slice(0, colors.length-1)

/**
 * Returns an array with all values but the last
 * @param {Array} xs - the initial array
 * @returns {Array} - the initial array
 * @example
 * const colors = ["red", "blue", "green", "yellow"]
 * init(colors)
 * //=> [ 'red', 'blue', 'green' ]
 */

export const init = xs => compose(reverse, compose(tail, reverse))(xs);
