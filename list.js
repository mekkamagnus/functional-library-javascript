// @ts-check

/**
 * @file Standalone code for the List monad.
 * @author Mekael Turner
 */

/**
 * Factory function for creating a list monad
 * @name List
 * @namespath List
 * @param {Array} list - The initial list
 * @tutorial list
 * @example
 * List([1, 2, 3, 4])
 * List(["red", "Blue", "Yellow", "Green"])
 */

export const List = list => ({
  list,

  /**
   * Applies a function to each element in the list and returns a new list monad.
   * @function
   * @namepath List#map
   * @param {function} fn - The mapping function.
   * @returns {Object} - A new list monad with the mapped values.
   */
  map: fn => List(list.map(fn)),

  /**
   * Folds the list into a single value using a binary function and an initial value (empty)
   * @param {function} fn - the folding function
   * @param {*} initialValue - initial accumlator value.
   * @returns {Object} - A new list monad with a single folded value
   */
  fold: (fn, initialValue) => List(list.reduce(fn, initialValue)),

  /**
   * Folds and maps the list using a monoid and an empty value.
   * @param {function} monoid - The monoid constructor function.
   * @param {*} empty - The empty monoid value.
   * @returns {Object} - A new list monad with a single folded and mapped monoid value.
   */
  foldMap: (monoid, empty) => {
    return empty != null
      ? list.reduce((acc, x, i) => acc.concat(monoid(x, i)), empty)
      : list.map(monoid).reduce((acc, x) => acc.concat(x));
  },

  /**
   * Extracts the underlying list
   * @returns {Array} - The underlying list.
   */
  extract: () => list,
});
