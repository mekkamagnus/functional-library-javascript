// ts-check

/**
 * @file Standalone code for the String monoid/monad.
 * @author Mekael Turner
 */

/**
 * Factory function for creating a String monoid. Now we define an event in our {@link List} namespace.
 * @since 1.0.0
 * @category Monoid
 * @param {string} value - The initial string value
 * @returns {{
 *   value: string,
 *   concat: function (Object): Object
 * }} - An object representing the String monoid
 * @see List
 * @sig StringMonoid :: String -> StringMonoid
 * @example
 * // StringMonoid :: String -> StringMonoid
 * String("Roses are red.")
 * // => 'String("Roses are red")'
 */

export const String = value => ({
  /**
   * The underlying string value.
   * @type {string}
   */
  value,
  /**
   * Concatenates this String monoid with another String monoid.
   * @param {Object} other - Another String monoid to concatenate with.
   * @returns {Object} - A new String monoid with the concatenated value.
   */
  concat: other => String(value.concat(other.value)),
});

/**
 * An empty String monoid.
 * @type {Object}
 */
String.empty = String('');
