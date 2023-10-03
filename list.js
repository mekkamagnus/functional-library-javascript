// @ts-check

/**
 * @file Standalone code for the List monad.
 * @author Mekael Turner
 */

/**
 * Factory function for creating a list monad
 * @param {Array} list - The initial list
 */

export const List = list => ({
  list,

  /**
   * Applies a function to each element in the list and returns a new list monad.
   * @param {function} fn - The mapping function.
   * @returns {Object} - A new list monad with the mapped values.
   */
  map: fn => List(list.map(fn)),
  fold: (fn, initialValue) => List(list.reduce(fn, initialValue)),
  foldMap(monoid, empty) {
    const mappedList = list.reduce(fn, initialValue);
    const result = mappedList.reduce(
      (accumalator, monoidValue) => accumalator.concat(monoidValue),
      empty,
    );
    return new List(result);
  },
  extract: () => list,
});

class ListMonoid {
  constructor(list) {
    this.list = list;
  }

  map(fn) {
    return new ListMonoid(this.list.map(fn));
  }

  fold(fn, initial) {
    return new ListMonoid(this.list.reduce(fn, initial));
  }

  foldMap(monoid, empty) {
    const mappedList = this.list.map(value => monoid(value));
    const result = mappedList.reduce(
      (accumalator, monoidValue) => accumalator.concat(monoidValue),
      empty,
    );
    return new ListMonoid(result);
  }

  extract() {
    return this.list;
  }
}
