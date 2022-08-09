// Take a numeric string and sum its digits
export type Split<
  T extends number | string,
  R extends string[] = []
> = `${T}` extends `${infer head}${infer tail}` ? Split<tail, [...R, head]> : R;

let _split: Split<"12345">; // ["1", "2", "3", "4", "5"]
let _split2: Split<12345>; // [1, 2, 3, 4, 5]
let _split3: Split<"abc">;
