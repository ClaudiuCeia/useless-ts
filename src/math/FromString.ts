// Take a numeric string and create a const number type of it's value
export type FromString<
  T extends string,
  R extends unknown[] = []
> = `${R["length"]}` extends T ? R["length"] : FromString<T, [...R, T]>;

let _r: FromString<"15">; // 15
let _r2: FromString<"0">; // 0
