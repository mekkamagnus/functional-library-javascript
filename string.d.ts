// string-monoid.d.ts

declare module 'string-monoid' {
  interface StringMonoid {
    /**
     * The underlying string value.
     */
    value: string;

    /**
     * Concatenates this String monoid with another String monoid.
     * @param other - Another String monoid to concatenate with.
     * @returns A new String monoid with the concatenated value.
     */
    concat(other: StringMonoid): StringMonoid;
  }

  /**
   * Factory function for creating a String monoid.
   * @param value - The initial string value.
   * @returns An object representing the String monoid.
   */
  function createStringMonoid(value: string): StringMonoid;

  /**
   * An empty String monoid.
   */
  const emptyStringMonoid: StringMonoid;

  export { createStringMonoid, emptyStringMonoid };
}
