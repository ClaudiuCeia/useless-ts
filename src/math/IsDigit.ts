import { IsChar } from "../strings/IsChar.ts";

// True if the given string is a single character
export type IsDigit<T extends number> = IsChar<`${`${T}`}`>;
let _isSingleDigit: IsDigit<113123>; // false
let _isSingleDigit2: IsDigit<9>; // true
