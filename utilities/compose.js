// compose :: ((y -> z), (x -> y),  ..., (a -> b)) -> a -> z
export const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
