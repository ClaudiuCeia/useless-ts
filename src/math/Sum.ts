import { Add } from "./Add.ts";

// Take an array of numeric strings and create a const type of their sum
export type Sum<
  T extends string[],
  Acc extends number = 0
> = T["length"] extends 0
  ? Acc
  : T["length"] extends 1
  ? Add<T[0], Acc>
  : T["length"] extends 2
  ? Add<T[0], T[1]> extends number
    ? Add<Add<T[0], T[1]>, Acc>
    : never
  : T extends [infer First, infer Second, ...infer V]
  ? V extends string[]
    ? First extends string
      ? Second extends string
        ? Add<First, Second> extends number
          ? Add<Add<First, Second>, Acc> extends number
            ? Sum<V, Add<Add<First, Second>, Acc>>
            : never
          : never
        : never
      : never
    : never
  : never;

let _sumOf: Sum<["16", "14", "37"]>; // 67
let _sumOf1: Sum<["1", "6", "6"]>; // 13
let _sumOf2: Sum<["7"]>; // 7
let _sumOf3: Sum<["7", "1", "1", "6"]>; // 15
let _sumOf4: Sum<["2", "2", "0", "0", "7", "7"]>; // 18
