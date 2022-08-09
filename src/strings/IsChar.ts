// True if the given string is a single character
export type IsChar<T extends string> = T extends `${infer head}${infer tail}`
  ? tail extends ""
    ? true
    : false
  : false;
let _isSingleDigit: IsChar<"113123">; // false
let _isSingleDigit2: IsChar<"9">; // true
