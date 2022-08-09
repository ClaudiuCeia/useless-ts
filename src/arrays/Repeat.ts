// Take a numeric string, or a number, and create an array type
// of the same length as the number.
export type Repeat<
  T extends string | number,
  R extends unknown[] = []
> = T extends string
  ? `${R["length"]}` extends T
    ? R
    : Repeat<T, [...R, T]>
  : R["length"] extends T
  ? R
  : Repeat<T, [...R, T]>;

let _range: Repeat<5>; // [5, 5, 5, 5, 5]
let _range2: Repeat<"5">; // ["5", "5", "5", "5", "5"]
