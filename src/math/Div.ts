import { IsChar } from "../strings/IsChar.ts";
import { FromString } from "./FromString.ts";
import { Increment } from "./Increment.ts";
import { SumDigits } from "./SumDigits.ts";

// True if the given numeric string is divisible by 5
export type IsDiv5<T extends string> = T extends `${infer digits}${0 | 5}`
  ? true
  : false;

let _isDiv5: IsDiv5<"15">; // true

// Sum all of the digits of a numeric string until the result is a single digit
type SumUntilSingleDigit<T extends string | number, Iter extends number = 0> = {
  single_digit: FromString<`${T}`>;
  recurse: SumDigits<T> extends string | number
    ? SumUntilSingleDigit<SumDigits<T>, Increment<Iter>>
    : never;
}[Iter extends 10
  ? "single_digit"
  : IsChar<`${T}`> extends true
  ? "single_digit"
  : "recurse"];

let _sumUntilSingleDigit: SumUntilSingleDigit<"7116">; // 6
let _sumUntilSingleDigit1: SumUntilSingleDigit<"3456194">; // 5

// True if a numeric string is divisible by 3. Sum all of it's digits until
// the result is a single digit, and then check if the result is 3, 6 or 9.
export type IsDiv3<T extends string> = SumUntilSingleDigit<T> extends 3
  ? true
  : SumUntilSingleDigit<T> extends 6
  ? true
  : SumUntilSingleDigit<T> extends 9
  ? true
  : false;

let _isDiv3: IsDiv3<"228">; // true
let _isDiv32: IsDiv3<"9">; // true
let _isDiv33: IsDiv3<"3">; // true
let _isDiv34: IsDiv3<"6">; // true
let _isDiv35: IsDiv3<"12">; // true
let _isDiv36: IsDiv3<"18">; // true
let _isDiv37: IsDiv3<"7116">; // true
let _isDiv38: IsDiv3<"3456194">; // true
let _isDiv39: IsDiv3<"1121031">; // true
let _isDiv391: IsDiv3<"220077">; // true
let _isDiv392: IsDiv3<"71101273125">; // true
let _isDiv393: IsDiv3<"0">; // false
let _isDiv394: IsDiv3<"11111">; // false

// If a numeric string is divisible by both 3 and 5, return true
export type IsDiv15<T extends string> = IsDiv3<T> extends true
  ? IsDiv5<T> extends true
    ? true
    : false
  : false;

let _isDiv15: IsDiv15<"7116">; // false
let _isDiv151: IsDiv15<"3456194">; // false
let _isDiv152: IsDiv15<"1121031">; // false
let _isDiv153: IsDiv15<"220077">; // false
let _isDiv154: IsDiv15<"71101273125">; // true
