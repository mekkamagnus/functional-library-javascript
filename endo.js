// Endo Monoid

/**
 * @file Standalone code for the Endo monoid.
 * @author Mekael Turner
 */

/**
 * Factory function for creating a Endo monoid.
 * @name Endo
 * @namespath Endo
 * @param {*} - The initial value
 * @tutorial endo
 */

const Endo = run => ({
  run,
  concat: other => Endo(x => run(other.run(x))),
});
Endo.empty = () => Endo(x => x);
