type Functor<T> = Array<T> | Iterable<T>;

declare function map<T, U>(
  f: (value: T) => U,
): (functor: Functor<T>) => Functor<U>;
